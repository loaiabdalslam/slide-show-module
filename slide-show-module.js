module.exports = {


  slideMeBabe: function(sliderOptions) {

    let {
      linksArray,
      startingIndex,
      endingIndex,
      className,
      imgAlt,
      width,
      height,
      timer
    } = sliderOptions


    let sliderStartingIndex = 0;

    if (startingIndex) {
      sliderStartingIndex = startingIndex;
    }

    // Let's Make it Cool 

    for (let index = 0; index < linksArray.length; index++) {

      let img = document.createElement("img")
      img.setAttribute("src", links[index])
      img.style.display = "none";
      img.setAttribute("width", width || 380);
      img.setAttribute("height", height || 380);
      img.setAttribute("alt", imgAlt[index] || "broken-img");
      document.getElementById(className || "images-container").appendChild(img)

    }


    setInterval(module.exports.inter, timer || 5000) // i love number 5 and i'm sorry for that !

  },


  // This Function for Updating Node .
  updateNodes: function() {
    const children = document.getElementById(className).childNodes;
    children.forEach(element => element.style.display = "none")
    children[sliderStartingIndex].style.display = "block";
  },

  // This FUnction for Using For Sliding 
  inter: function() {
    if (sliderStartingIndex === endingIndex || linksArray - 1) {
      module.exports.updateNodes()
      sliderStartingIndex = 0
    } else {
      module.exports.updateNodes()
      sliderStartingIndex++
    }
  }



}


// for testing just run it throw that module.exports.slideMeBabe(options)