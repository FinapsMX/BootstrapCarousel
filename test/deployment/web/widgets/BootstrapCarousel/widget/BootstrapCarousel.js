/*jslint white: true nomen: true plusplus: true */
/*global mx, mxui, mendix, dojo, require, console, define, module */
/**

	BootstrapCarousel
	========================

	@file      : BootstrapCarousel.js
	@version   : 1.0
	@author    : ...
	@date      : 03 December 2014
	@copyright : Mendix Technology BV
	@license   : Apache License, Version 2.0, January 2004

	Documentation
    ========================
	Describe your widget here.

*/

define([
    'dojo/_base/declare', 'mxui/widget/_WidgetBase', 'dijit/_TemplatedMixin',
    'mxui/dom', 'dojo/dom', 'dojo/query', 'dojo/dom-prop', 'dojo/dom-geometry', 'dojo/dom-class', 'dojo/dom-style', 'dojo/dom-construct', 'dojo/_base/array', 'dojo/_base/lang', 'dojo/text', 'dojo/html', 'dojo/_base/event',
    'BootstrapCarousel/widget/lib/jquery-1.11.2.min', 'dojo/text!BootstrapCarousel/widget/templates/BootstrapCarousel.html', 'BootstrapCarousel/widget/lib/bootstrap'
], function (declare, _WidgetBase, _TemplatedMixin, dom, dojoDom, domQuery, domProp, domGeom, domClass, domStyle, domConstruct, dojoArray, lang, text, html, event, _jQuery, widgetTemplate, bootstrapCar) {
    'use strict';

    var $ = jQuery.noConflict(true);

    // Declare widget.
    return declare('BootstrapCarousel.widget.BootstrapCarousel', [_WidgetBase, _TemplatedMixin], {

        // _TemplatedMixin will create our dom node using this HTML template.
        templateString: widgetTemplate,

        /**
         * Internal variables.
         * === === === === === === === =
         */
        _wgtNode: null,
        _contextGuid: null,
        _contextObj: null,
        _handle: null,
        // Extra variables
        _extraContentDiv: null,

        // Template path
        // templatePath: require.toUrl('BootstrapCarousel/widget/templates/BootstrapCarousel.html'),


        /**
         * Mendix Widget methods.
         * ======================
         */

        // PostCreate is fired after the properties of the widget are set.
        postCreate: function () {

            // postCreate
            console.log('BootstrapCarousel - postCreate');

            // Load CSS ... automaticly from ui directory



            // Setup events
            this._loadData();

        },

        // Startup is fired after the properties of the widget are set.
        startup: function () {
            // Example setting message
            //this.domNode.appendChild(mxui.dom.create('span', 'internal propertie as constant: ' + this.messageString));

            // postCreate
            console.log('BootstrapCarousel - startup');
        },

        /**
         * What to do when data is loaded?
         */

        // Attach events to newly created nodes.
        _setupEvents: function (id) {
            //redo ----
            var $, linkButton, itemid;

            $ = this.$;

            console.log('BootstrapCarousel - setup events');

            $(this._wgtNode).on('click', "#" + id, lang.hitch(this, function () {

                mx.data.action({
                    params: {
                        applyto: 'selection',
                        actionname: this.mfOnClick,
                        guids: [id]
                    },
                    /*callback: lang.hitch(this, function (obj) {
                            
                            //TODO what to do when all is ok!
                        }),*/
                    error: function (error) {
                        console.log(error.description);
                    }
                }, this);

            }));

        },


        /**
         * Interaction widget methods.
         * ======================
         */
        _loadData: function () {
            var i, carouselItem, listIndicator, templateCarousel, listItem = '',
                indicators = '',
                path;

            path = this.bannerimage.split('/');
            path = path[0];


            mx.data.action({
                params: {
                    actionname: this.mfGetNews
                },
                callback: lang.hitch(this, function (objs) {
                    //TODO what to do when all is ok!

                    if (this.controls) {
                        templateCarousel = dojo.cache('BootstrapCarousel.widget.templates', 'BootstrapCarousel.html');
                    } else {
                        templateCarousel = dojo.cache('BootstrapCarousel.widget.templates', 'BootstrapCarouselNoControls.html');
                    }

                    for (i = 0; i < objs.length; i++) {
                        //objs[i];

                        listIndicator = dojo.cache('BootstrapCarousel.widget.templates', 'listIndicators.html');
                        //setup List
                        listIndicator = listIndicator.split('{{counter}}').join(i);
                        listIndicator = listIndicator.split('{{active}}').join(i === 0 ? 'active' : '');

                        if (i === 0) {
                            indicators = listIndicator;
                        } else {
                            indicators += "\n";
                            indicators += listIndicator;
                        }


                        carouselItem = dojo.cache('BootstrapCarousel.widget.templates', 'item.html');
                        //setup carouselItem
                        carouselItem = carouselItem.split('{{first}}').join(i === 0 ? ' active' : '');
                        if (objs[i].get(path) !== '') {
                            carouselItem = carouselItem.split('{{img}}').join(window.location.origin + '/file?target=window&guid=' + objs[i].getGUID() +  "&time=" + Date.now());
                        } else {
                            carouselItem = carouselItem.split('{{img}}').join('data:image/gif;base64,R0lGODlhAQABAIAAAFVVVQAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==');
                        }
                        carouselItem = carouselItem.split('{{altText}}').join(objs[i].get(this.headline));
                        carouselItem = carouselItem.split('{{headline}}').join(objs[i].get(this.headline));
                        carouselItem = carouselItem.split('{{description}}').join(objs[i].get(this.description));
                        carouselItem = carouselItem.split('{{id}}').join(objs[i].getGuid());
                        carouselItem = carouselItem.split('{{idnumber}}').join(objs[i].getGuid());
                        carouselItem = carouselItem.split('{{headlineClass}}').join(this.headlineClass);
                        carouselItem = carouselItem.split('{{descriptionClass}}').join(this.descriptionClass);


                        if (this.mfOnClick !== '') {
                            //set click event to button. 
                            this._setupEvents(objs[i].getGuid());
                            carouselItem = carouselItem.split('{{display}}').join('');

                        } else {
                            carouselItem = carouselItem.split('{{display}}').join('style="display:none"');
                        }

                        if (i === 0) {
                            listItem = carouselItem;
                        } else {
                            indicators += "\n";
                            listItem += carouselItem;
                        }

                    }


                    templateCarousel = templateCarousel.split('{{carouselClass}}').join(this.carouselClass);
                    templateCarousel = templateCarousel.split('{{list}}').join(indicators);
                    templateCarousel = templateCarousel.split('{{showdots}}').join(this.listicons ? '' : 'style="display: none;"');
                    templateCarousel = templateCarousel.split('{{items}}').join(listItem);
                    templateCarousel = templateCarousel.split('{{carouselID}}').join(this.carouselID === '' ? 'widgetCarousel' : this.carouselID);
                    //templateCarousel = templateCarousel.split('{{interval}}').join( this.enablescroll ? this.scollspeed : false);
                    $(this.domNode).html(templateCarousel);
                    if (this.enablescroll) {
                        $(document).ready(function () {
                            $('.carousel').carousel({
                                interval: this.scrollspeed
                            });
                        });
                    } else {
                        $(document).ready(function () {
                            $('.carousel').carousel({
                                interval: false
                            });
                        });
                    }


                }),
                error: function (error) {
                    console.log(error.description);
                }
            }, this);

            // TODO, get aditional data from mendix.

            // Set background color after context object is loaded.
            //this.domNode.style.backgroundColor = this._contextObj.get(this.backgroundColor);
        }


    });
});

require(['BootstrapCarousel/widget/BootstrapCarousel'], function () {
    'use strict';
});