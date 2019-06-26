# slide-show-module


This module takes an array of images links and injects them into any "div" you created, You will be able to pass the following arguments:

  1- Images links array.
  2- Starting index.
  3-Ending index.
  4-Class name where you want to append your images.
  5-An "alt" attribute incase of a problem with the images links.
  6-Width of the image.
  7-Height of the image.
  8-Time of the inerval in Milliseconds.
  
  
  
  All of the above arguments have a default value except for the images links array (of course). The default values are going to be as follows, 
  
  1- Images links array ---- NO DEFAULT!
  2- Starting index ---- 0;
  3-Ending index ---- last link's index.
  4-Class name where you want to append your images ---- "images-container".
  5-An "alt" attribute incase of a problem with the images links ---- "broken-img".
  6-Width of the image ---- "380".
  7-Height of the image ---- "380".
  8-Time of the inerval in Milliseconds ---- 2000.
  
  
  Example for calling the function : slideMeBabe(links, 0, 2,"divs","coats" ,380, 380, null)
