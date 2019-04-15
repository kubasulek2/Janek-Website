$(()=>{
  // gallery page handling
  let prevWidth = -1;
  let prevHeight = -1;

  const drawImagePosition = () =>{
    const widths = [16,24,32,40,48,56,64,72];
    const heights = [7.9, 15.6, 23.3];

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


    image.show();
    image.css("left", `${position[0]}%`);
    image.css("top", `${position[1]}%`);

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