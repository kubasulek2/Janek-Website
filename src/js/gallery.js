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
    "images/kampania%20smieciowa/002.jpg",
    "images/kampania%20smieciowa/003-vert.jpg",
    "images/kampania%20smieciowa/004-vert.jpg",
    "images/kampania%20smieciowa/005.jpg",
    "images/kampania%20smieciowa/006.jpg",
    "images/kampania%20smieciowa/007.jpg",
    "images/kampania%20smieciowa/008-vert.jpg",
    "images/kampania%20smieciowa/009.jpg",
    "images/kampania%20smieciowa/010.jpg",
    "images/kampania%20smieciowa/011.jpg",
    "images/kampania%20smieciowa/012_2.jpg",
    "images/kampania%20smieciowa/012.jpg",
    "images/kampania%20smieciowa/013.jpg",
    "images/kampania%20smieciowa/014.jpg",
    "images/kampania%20smieciowa/015-vert.jpg",
	];
	const galleryKukBuk = $('.kukbuk');
  const galleryKukBukPics = [
    "images/kukbuk/kukbuk-01-vert.jpg",
    "images/kukbuk/kukbuk-02-vert.jpg",
    "images/kukbuk/kukbuk-03.jpg",
    "images/kukbuk/kukbuk-04-vert.jpg",
    "images/kukbuk/kukbuk-05.jpg",
  ];

  // gallery page handling
  let prevWidth = -1;
  let prevHeight = -1;

  const drawImagePosition = (side) =>{
    const widths = [52,50.1,48.2,46.6,43.7,41.22,50.2,47.4];
    const heights = [6.5, 7.7, 8.3, 9.2, 10, 10.9, 11.6, 12.1, 13];
		
		let position =[];
    let currWidth = Math.floor(Math.random()*widths.length);
    let currHeight = Math.floor(Math.random()*heights.length);

    if (currHeight === prevHeight || currWidth === prevWidth){
      return drawImagePosition(side);

    } else{
      prevWidth = currWidth;
      prevHeight = currHeight;

      side === 'right' ? position.push(widths[currWidth]):position.push(widths[currWidth]-30);
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
		
		if(counter < images.length)
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