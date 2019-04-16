$(()=>{
  // create array of kampania smieciowa gallery sources
  const galleryKampania = $('.photos');
  const galleryKampaniaPics = [
    "../images/kampania%20smieciowa/Segregacja-uMstWarszawa0090-sRGB.jpg",
    "../images/kampania%20smieciowa/Segregacja-uMstWarszawa0119-sRGB.jpg",
    "../images/kampania%20smieciowa/Segregacja-uMstWarszawa0244-sRGB.jpg",
    "../images/kampania%20smieciowa/Segregacja-uMstWarszawa0324-sRGB.jpg",
    "../images/kampania%20smieciowa/Segregacja-uMstWarszawa0336-sRGB.jpg",
    "../images/kampania%20smieciowa/Segregacja-uMstWarszawa0350-sRGB.jpg",
    "../images/kampania%20smieciowa/Segregacja-uMstWarszawa0370-sRGB.jpg",
    "../images/kampania%20smieciowa/Segregacja-uMstWarszawa0394-sRGB.jpg",
    "../images/kampania%20smieciowa/Segregacja-uMstWarszawa0418-sRGB.jpg",
    "../images/kampania%20smieciowa/Segregacja-uMstWarszawa0430-sRGB.jpg",
    "../images/kampania%20smieciowa/Segregacja-uMstWarszawa0439-sRGB.jpg",
    "../images/kampania%20smieciowa/Segregacja-uMstWarszawa0452-sRGB.jpg",
    "../images/kampania%20smieciowa/Segregacja-uMstWarszawa0578-sRGB.jpg",
    "../images/kampania%20smieciowa/Segregacja-uMstWarszawa0608-sRGB.jpg",
    "../images/kampania%20smieciowa/Segregacja-uMstWarszawa0636-sRGB.jpg",
    "../images/kampania%20smieciowa/Segregacja-uMstWarszawa0645-sRGB.jpg",
    "../images/kampania%20smieciowa/Segregacja-uMstWarszawa0672-sRGB.jpg",
    "../images/kampania%20smieciowa/Segregacja-uMstWarszawa0713-sRGB.jpg",
    "../images/kampania%20smieciowa/Segregacja-uMstWarszawa0798-sRGB.jpg",
    "../images/kampania%20smieciowa/Segregacja-uMstWarszawa0834-sRGB.jpg",
    "../images/kampania%20smieciowa/Segregacja-uMstWarszawa0881-sRGB.jpg",
    "../images/kampania%20smieciowa/Segregacja-uMstWarszawa0915-sRGB.jpg"
  ];

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


  const showGalleryImages = (images) =>{
    let frame = $('<figure class="gallery">');
    let image = $('<img>');
    image.attr('src', images[counter]);
    frame.append(image);
    $('.main-container').append(frame);

    frame.on('click', function (e) {
      e.stopPropagation();
    });
    let position = drawImagePosition();
    let filterVal = 'blur(3px)';


    frame.css("left", `${position[0]}%`);
    frame.css("top", `${position[1]}%`);

    if (counter >= 1 && counter <= images.length -1) {
      let images = $('.gallery');
      console.log(images);
      $(images[counter-1])
        .css('filter',filterVal)
        .css('webkitFilter',filterVal)
        .css('mozFilter',filterVal)
        .css('oFilter',filterVal)
        .css('msFilter',filterVal);
    }
    if (counter <= images.length -1) {
      image.one("click", function () {
        console.log(this);
        $(this).first().css("cursor", "initial");
        showGalleryImages(galleryKampaniaPics)
      });
      counter++;
    }
  };

  if (window.innerWidth >= 1024){
    galleryKampania.on('click', function (e) {
      e.stopPropagation();
      counter = 0;
      $('body').one('click', function () {
        let pictures = $('.gallery');
        pictures.off();
        pictures.remove();
      });
      showGalleryImages(galleryKampaniaPics)
    })
  }



});