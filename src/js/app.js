$(() => {
// refresh on resize

// drawing themes
  let prevNum = -1;

  const drawTheme = (themes)=> {

    let draw = Math.floor(Math.random() * themes.length );

    if ( draw === prevNum ){
      drawTheme(themes);
    } else {

      prevNum = draw;

      themes.each(function (i, e) {
        i === draw ? $(e).css("display", "block") : $(e).css("display", "none");
      })
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

    $(images[0]).show();
    $(images[1]).show();
    drawTheme(themes);
    handleLeftGallery(leftIndex, images, themes);
    handleRightGallery(rightIndex, images, themes);


 };
 showImagesCommercial();

});

