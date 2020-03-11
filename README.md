In this project, we have used the Library called PIXI.js (www.pixijs.com) and tried to recreate and improve on rich, 
interactive graphics for cross-platform application/games from the already prebuilt releases made by PixiJS.   

This project was focused on exploring an API library and its possible uses in prototyping. 
We learned how to apply the API’s while prototyping and trying to work with GitHub, as well as how to contribute and share the workspace with each other. 

This project is very useful because it provides multiple opportunities to use it for: games, 
platform applications and interactive graphics are just a few examples. Using an already prebuilt 
code to change it and create new things with an existing base idea is not only time efficient but also inspiring. 
The examples provided from the library give inspiration and an understanding of how the code works 
along with making it easy to change the code and experiment with it. 

The project is exploring different graphics such as zooming in and out using the mouse button or blurring out 
a motive on the canvas. We also explored how to use multiple layers on the canvas and how the layers 
could have their own attributes. The importance of feedback, and lack of it, for the user value was also one of the focal points 
of this project that we have paid attention to.

In order to get started with the PixiJS library you have to clone the PixiJS library from github and then you have to create
.JS file for every application that you want to implement. Afterwards you need to connect the .JS file to the html file. 
Try some examples from the library (PixiJS) and experiment with different codes in order to get an understanding
of how they work and what they do. 
If you are working with a example from the libary that need plug ins, you need to download them from PixiJS and implement it into the html file, for it to run.

How to make your code work:
When trying another script, you will have to change the name of the second script inside of the index.html document.

<!doctype html>

<html>
<head>
<meta charset="utf-8">
<title>Hello World</title>
</head>
<body>
<script src="pixi.min.js"></script>
<script src="Container.js"></script>    // OBS: As mentioned, change the name in order to use it for your example. 


<script type="text/javascript">
   let type="WebGL"
   if(!PIXI.utils.isWebGLSupported()){
   type = "canvas"
   }
  
   PIXI.utils.sayHello (type)
   let app = new PIXI.Application({width:800, height 800});
 </script>
 </body>
 </html>



## Important to mention once again that the examples with the code we used during this project were downloaded from the PixiJS library (https://pixijs.io/examples/#/demos-basic/container.js). We do not take any credit of the codes. 

We worked with this project as a group where everyone had their own responsibility to experiment with two examples each,
of course helping each other out as well. Nahid in the group created the repository on GitHub. 

