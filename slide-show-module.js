const slideMeBabe = (linksArray, startingIndex, endingIndex, className,imgAlt,width, height,  timer) => {
  
  const links = linksArray
  let sliderStartingIndex = 0
  
  if (startingIndex){
    sliderStartingIndex = startingIndex
  } 
  
  
  for (let index = 0; index < links.length; index++){
    let img = document.createElement("img")
    img.setAttribute("src", links[index])
    img.style.display = "none";
    img.setAttribute("width", width ||380);
    img.setAttribute("height", height || 380);
    img.setAttribute("alt", imgAlt || "broken-img");
    document.getElementById(className || "images-container").appendChild(img)
}

function updateNodes() {
    const children = document.getElementById(className).childNodes;
    children.forEach(element => element.style.display = "none")
    children[sliderStartingIndex].style.display = "block";
}

function inter() {
  if (sliderStartingIndex === endingIndex || linksArray-1){
    updateNodes()
    sliderStartingIndex = 0
  }else{
    updateNodes()
    sliderStartingIndex++
  }
}
setInterval(inter, timer || 2000)
  
}


