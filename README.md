# BootStrap Carousel/ Image Carousel

This widget gives you the means to create a carousel similar to the style of bootstraps own using data
from a datasource microflow. 

## Contributing

Contact @simonMartyr or who ever is currently in charge of this widget. info@finaps.nl

## Typical usage scenario

Whenever you wish to use an image carousel to ether display data or include a link/microflow action. 
This a powerful way of display an entity content as well as giving you the option to manipulate the content via a microflow.
 
## Description/constrains

Options and what they do:

- Type of Objects - This is your entity type for the items in the carousel.
- Title - This is your title attribute.
- Description - This is your description attribute.
- Background Image - This is an associated entity that contains the system file image for the background.
- Onclick Microflow - By setting this you add a button to each item that will manipulate the object type. 
- Datasource MF - the microflow for accessing the list of (Type of objects).
- ID - This gives the carousel an custom ID, if two carousels have the same ID you will get some funky behaviour. 
- Enable controls - Show or hides the arrows. 
- Scroll speed - millseconds of how fast the transition. 
- Show item dots - show or hides the counter dots. 
