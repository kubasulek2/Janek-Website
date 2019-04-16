$(()=>{
  // gallery page handling
  let prevWidth = -1;
  let prevHeight = -1;

  const drawImagePosition = () =>{
    const widths = [16.5,21,24.6,27.3,30.2,33.8,37,39.4];
    const heights = [6.5, 8.2, 11, 13.4, 15.6, 17, 19.3, 21.8, 23.3];

    let position =[];
    let currWidth = Math.floor(Math.random()*widths.length);
    let currHeight = Math.floor(Math.random()*heights.length);

    if (currHeight === prevHeight || currWidth === prevWidth){
      return drawImagePosition();

    } else{
      prevWidth = currWidth;
      prevHeight = currHeight;

      position.push(widths[currWidth]);
      position.push(heights[currHeight]);

      return position
    }

  };
  let counter = 0;
  let images = $(".gallery img");

  const showGalleryImages = () =>{
    let image = $(images[counter]).parent();
    let position = drawImagePosition();
    let filterVal = 'blur(3px)';


    image.show();
    image.css("left", `${position[0]}%`);
    image.css("top", `${position[1]}%`);

    if (counter >= 1 && counter <= images.length -1) {
      $(images[counter-1])
        .css('filter',filterVal)
        .css('webkitFilter',filterVal)
        .css('mozFilter',filterVal)
        .css('oFilter',filterVal)
        .css('msFilter',filterVal);
    }
    if (counter <= images.length -1) {
      image.one("click", function () {
        $(this).first().css("cursor", "initial");
        showGalleryImages()
      });
      counter++;
    }
  };

  if (window.innerWidth >= 1024){
    showGalleryImages()
  }

});