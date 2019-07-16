$(()=>{
  const mobileViewport = window.matchMedia("screen and (max-width: 1024px)");
  mobileViewport.addListener(function(mq) {

    if(mq.matches) {
      //console.log($('.picture'), images);
      $('.picture').remove()
    }
  });

  // create array of kampania smieciowa gallery sources
  const galleryKampania = $('.kampania');
  const galleryKampaniaPics = [
    "images/kampania%20smieciowa/Segregacja-uMstWarszawa0090-sRGB.jpg",
    "images/kampania%20smieciowa/Segregacja-uMstWarszawa0119-sRGB.jpg",
    "images/kampania%20smieciowa/Segregacja-uMstWarszawa0244-sRGB.jpg",
    "images/kampania%20smieciowa/Segregacja-uMstWarszawa0324-sRGB.jpg",
    "images/kampania%20smieciowa/Segregacja-uMstWarszawa0336-sRGB.jpg",
    "images/kampania%20smieciowa/Segregacja-uMstWarszawa0350-sRGB.jpg",
    "images/kampania%20smieciowa/Segregacja-uMstWarszawa0370-sRGB.jpg",
    "images/kampania%20smieciowa/Segregacja-uMstWarszawa0394-sRGB.jpg",
    "images/kampania%20smieciowa/Segregacja-uMstWarszawa0418-sRGB.jpg",
    "images/kampania%20smieciowa/Segregacja-uMstWarszawa0430-sRGB.jpg",
    "images/kampania%20smieciowa/Segregacja-uMstWarszawa0439-sRGB.jpg",
    "images/kampania%20smieciowa/Segregacja-uMstWarszawa0452-sRGB.jpg",
    "images/kampania%20smieciowa/Segregacja-uMstWarszawa0578-sRGB.jpg",
    "images/kampania%20smieciowa/Segregacja-uMstWarszawa0608-sRGB.jpg",
    "images/kampania%20smieciowa/Segregacja-uMstWarszawa0636-sRGB.jpg",
    "images/kampania%20smieciowa/Segregacja-uMstWarszawa0645-sRGB.jpg",
    "images/kampania%20smieciowa/Segregacja-uMstWarszawa0672-sRGB.jpg",
    "images/kampania%20smieciowa/Segregacja-uMstWarszawa0713-sRGB.jpg",
    "images/kampania%20smieciowa/Segregacja-uMstWarszawa0798-sRGB.jpg",
    "images/kampania%20smieciowa/Segregacja-uMstWarszawa0834-sRGB.jpg",
    "images/kampania%20smieciowa/Segregacja-uMstWarszawa0881-sRGB.jpg",
    "images/kampania%20smieciowa/Segregacja-uMstWarszawa0915-sRGB.jpg"
	];
	const galleryKukBuk = $('.kukbuk');
  const galleryKukBukPics = [
    "images/kukbuk/kukbuk-01.jpg",
    "images/kukbuk/kukbuk-02-vert.jpg",
    "images/kukbuk/kukbuk-03.jpg",
    "images/kukbuk/kukbuk-04-vert.jpg",
    "images/kukbuk/kukbuk-05.jpg",
  ];

  // gallery page handling
  let prevWidth = -1;
  let prevHeight = -1;

  const drawImagePosition = (side) =>{
    const widths = [52,50.1,48.2,46.6,53.7,56,57.2,59];
    const heights = [6.5, 7.7, 8.3, 9.2, 10, 10.9, 11.6, 12.1, 13];
		
		let position =[];
    let currWidth = Math.floor(Math.random()*widths.length);
    let currHeight = Math.floor(Math.random()*heights.length);

    if (currHeight === prevHeight || currWidth === prevWidth){
      return drawImagePosition(side);

    } else{
      prevWidth = currWidth;
      prevHeight = currHeight;

      side === 'right' ? position.push(widths[currWidth]):position.push(widths[currWidth]-35);
      position.push(heights[currHeight]);

      return position
    }

  };
  let counter = 0;


  const showGalleryImages = (images, side) =>{
    let position;
    let frame = $('<figure class="picture">');
		let image = $('<img>');
    image.attr('src', images[counter]);
		image.attr('src').includes('vert') ? frame.addClass('vert'): null;
    frame.append(image);
    $('.main-container').append(frame);

    frame.on('click', function (e) {
      e.stopPropagation();
    });
    if( side == 'right') {

			counter === 0 ? position = [52, 7.95] : position = drawImagePosition(side);
		}else {counter === 0 ? position = [17, 7.95] : position = drawImagePosition(side)};

    frame.css("left", `${position[0]}%`);
    frame.css("top", `${position[1]}%`);

    if (counter >= 1 && counter <= images.length -1) {
      let images = $('.picture');
      $(images[counter-1])
        .css('opacity','.9')
        }
    if (counter <= images.length -1) {
      image.one("click", function () {

        $(this).first().css("cursor", "initial");
        showGalleryImages(images, side);
      });
      counter++;
    }
  };


  galleryKampania.on('click', function (e) {
    e.stopPropagation();
    counter = 0;
    $('body').one('click', function () {
      let pictures = $('.picture');
      pictures.off();
      pictures.remove();
    });
    showGalleryImages(galleryKampaniaPics, 'right')
	})
	
	galleryKukBuk.on('click', function (e) {
    e.stopPropagation();
    counter = 0;
    $('body').one('click', function () {
      let pictures = $('.picture');
      pictures.off();
      pictures.remove();
    });
    showGalleryImages(galleryKukBukPics,'left')
  })	
});