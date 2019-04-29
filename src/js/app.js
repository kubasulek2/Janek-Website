$(() => {
  // define image index object to properly show images after resizing
  const imagesInfo = {
    leftIndex: 0,
    rightIndex: 1
  };

  // define smaller screens

  let mobileViewport = window.matchMedia("screen and (max-width: 1023px)");
  let tabletViewport = window.matchMedia("screen and (max-width: 1199px) and (orientation: portrait)");

  // drawing a table relative to viewport

  const defineTable = () => {
    let table = $('.table');
    let viewPort = $(window).height();
    let row = $('.row');
    let rowHeight = row.outerHeight();
    let availableRows =  Math.floor(viewPort/rowHeight);

    // to avoid content-wrapper class going over "rows20"
    availableRows = availableRows > 21 ? 21 : availableRows;

    // draw table rows (min 12, max 20)
    // add class to content-wrapper informing how many rows is there
    if (availableRows > 12){
      table.prev().removeClass()
        .addClass('content-wrapper')
        .addClass(`rows${(availableRows-1).toString()}`);

      row.each(function (index) {
        index <= availableRows -2 ? $(this).removeClass('hidden'): $(this).addClass("hidden");
      })
    } else{
      table.prev().removeClass()
        .addClass('content-wrapper')
        .addClass(`rows12`);

      row.each(function (index) {
        index <= 11 ? $(this).removeClass('hidden'): $(this).addClass("hidden");
      })
    }
  };

// drawing themes
  let prevNum = -1;
  let clickCount = 0;

  const drawTheme = (themes)=> {

    let draw = Math.floor(Math.random() * themes.length );

    if ( draw === prevNum || draw === 1 ){
      drawTheme(themes);
    } else {
      if (!(clickCount % 3) || clickCount === 0) {
        if (prevNum === 0){
          prevNum = 1;
          themes.each(function (i, e) {
            i === 1 ? $(e).css("display", "block") : $(e).css("display", "none");
          })

        } else{
          prevNum = draw;
          themes.each(function (i, e) {
            i === draw ? $(e).css("display", "block") : $(e).css("display", "none");
          })
        }
      }
      clickCount++;
    }
  };

// handling left and right side galleries
  const handleLeftGallery = (index, images, themes)=>{
    let counter = index;

    $(".nav-left > .next").on("click", function () {

      drawTheme(themes);

      if (counter === index ){
        $(this).prev().show()
      }

      $(images[counter]).hide();
      counter += 2;
      imagesInfo.leftIndex = counter;
      $(images[counter]).show();

      if( !(images.length % 2) && counter === images.length -2 ){
        $(this).hide();
      } else if( images.length % 2 && counter === images.length -1){
        $(this).hide()
      }

    });

    $(".nav-left > .prev").on("click", function () {

      drawTheme(themes);

      if( !(images.length % 2) && counter === images.length -2 ){
        $(this).next().show();

      } else if( images.length % 2 && counter === images.length -1){
        $(this).next().show()
      }

      $(images[counter]).hide();
      counter -= 2;
      imagesInfo.leftIndex = counter;
      $(images[counter]).show();

      if (counter === index ){
        $(this).hide()
      }

    })
  };

  const handleRightGallery = (index, images, themes)=>{
    let counter = index;

    $(".nav-right > .next").on("click", function () {

      drawTheme(themes);

      if (counter === index ){
        $(this).prev().show()
      }

      $(images[counter]).hide();
      counter += 2;
      imagesInfo.rightIndex = counter;
      $(images[counter]).show();

      if( !(images.length % 2) && counter === images.length -1 ){
        $(this).hide();
      } else if( images.length % 2 && counter === images.length -2){
        $(this).hide()
      }

    });

    $(".nav-right > .prev").on("click", function () {

      drawTheme(themes);

      if( !(images.length % 2) && counter === images.length -1 ){
        $(this).next().show();

      } else if( images.length % 2 && counter === images.length -2){
        $(this).next().show()
      }

      $(images[counter]).hide();
      counter -= 2;
      imagesInfo.rightIndex = counter;
      $(images[counter]).show();

      if (counter === index ){
        $(this).hide()
      }

    })
  };

  const showImagesCommercial = () => {
    const images = $('.image');
    const themes = $('.theme img');

    let leftIndex = 0;
    let rightIndex = 1;
    drawTheme(themes);
    handleLeftGallery(leftIndex, images, themes);
    handleRightGallery(rightIndex, images, themes);



    // handle display while resize and change screen orientation


    if(!(mobileViewport.matches || tabletViewport.matches)) {
      $(images[0]).show();
      $(images[1]).show();
    }

    mobileViewport.addListener(function(mq) {

      if(mq.matches) {
        $(images).show()
      } else {
        $(images).hide();
        $(images[imagesInfo.leftIndex]).show();
        $(images[imagesInfo.rightIndex]).show();

      }

    });

    tabletViewport.addListener(function(mq) {

      if(mq.matches) {
        $(images).show()
      } else {
        $(images).hide();
        $(images[imagesInfo.leftIndex]).show();
        $(images[imagesInfo.rightIndex]).show();

      }
    });

 };
 showImagesCommercial();
 defineTable();
 $( window ).on("resize",defineTable);


});

