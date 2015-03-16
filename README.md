# BootStrap Carousel/ Image Carousel

This widget gives you the means to create a carousel similar to the style of bootstraps own using data from a datasource microflow. 

Authors
----
Simon Martyr -  [email](mailto:simon.martyr@finaps.nl)   - [github](https://github.com/simonmartyr)


Typical usage scenario
----

[Bootstrap Example](http://getbootstrap.com/examples/carousel/)
/
[Mendix Live Example](https://www.finaps.nl)

![example](http://i.imgur.com/YFteUqt.png)

This widget gives the user the ability to embeded a list of objects and display their assoicated images on a mendix application. 

Typical usage includes:
 - News article list
 - Image gallery
 
Features
---

- Display a list of Objects with their assoicated image file. 
- Ability to add a microflow link button to maniuplate the given item.
- Responsive - using default bootstrap carousel CSS.
- highly flexable - can adjust a lot of what is shown via widget options or CSS. 
- Auto scroll, pause upon mouse hover etc. No additional js required. 

Limitations
---

- Expects a certain data format: ( [Item] ---- [Image System File] )
 

Installation 
---

- Download the app from the store. 
- Create a Microflow that will return the list of Objects you wish to display, the order set in the microflow is the order the items will be displayed.
- Configure the widget within the widget options. 
- All done!

Description/configuration (Widget options)
---

![options](http://i.imgur.com/n2occmw.png)


- Type of Objects - This is your entity type for the items in the carousel.
- Title - This is your title attribute.
- Description - This is your description attribute.
- Background Image - This is an associated entity that contains the system file image for the background.
- Onclick Microflow - By setting this you add a button to each item that will manipulate the object type. (If empty no button is shown)
- Datasource MF - the microflow for accessing the list of (Type of objects).
- ID - This gives the carousel an custom ID, if two carousels have the same ID you will get some funky behaviour to avoid this use differnt ids. 
- Enable controls - Show or hides the direction arrows controls. 
- Scroll speed - millseconds of how fast the transition. 
- Show item dots - show or hides the counter dots. 


![Controls & dots](http://i.imgur.com/6fQSLvJ.png)

Known bugs
---
Currently known - Please feedback to the author if you encounter any. 

