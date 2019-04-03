$(() => {
// refresh on resize
  const mobileViewport = window.matchMedia("screen and (max-width: 1023px)");

  mobileViewport.addListener(function(mq) {

    if(mq.matches) {
      // viewport <= 1023px
      location.reload()
    } else {
      // viewport > 1023px
      location.reload();
    }

  });

// handling left and right side galleries
  const handleLeftGallery = (index, images)=>{
    let counter = index;

    $(".nav-left > .next").on("click", function () {

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

      console.log(counter);

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

  const handleRightGallery = (index, images)=>{
    let counter = index;

    $(".nav-right > .next").on("click", function () {

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

    let leftIndex = 0;
    let rightIndex = 1;

    $(images[0]).show();
    $(images[1]).show();
   handleLeftGallery(leftIndex, images);
   handleRightGallery(rightIndex, images);


 };
 showImagesCommercial();



//commercial left gallery

});

