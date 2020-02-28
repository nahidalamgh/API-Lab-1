README for Click 


The Example


The code example I got to work with is called ‘’Click’’ in the PixiJS library ( https://pixijs.io/examples/#/interaction/click.js ). 

The example was chosen because I saw potential real life use for it with some changes. In this project I explored the user value that 
this example could create with implementation of  feedback as well as introducing limitations that could serve a specific purpose. 
The intended use for this project is to function as a magnifying glass.

The project only opens on MS Edge browser. I did not know how to fix this issue, but it does work on that browser. I changed the
 background to a more ‘professional-looking’ and focus inducing shade of blue so it is not distracting. I replaced the initial image
 with a picture of a medicine package that had some small print on it - a possible real life use of this ‘’tool’’. By using functions
 and events in the code, I limit the number of times the image could be left-clicked to 3. Additionally, an option to zoom out 5 times 
has been added upon right-clicking, in case the user zoomed in too much. Zooming out is only available after having enlarged the image 
as opposed to being able to zoom out the initial image, since the purpose of this ‘’tool’’ is to magnify.