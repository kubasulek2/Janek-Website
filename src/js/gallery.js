$(()=>{
  // gallery page handling
  const showGalleryImages = () =>{
    let images = $(".gallery img");
    $(images[0]).parent().show()
  };

  if (window.innerWidth >= 1024){
    showGalleryImages()
  }
});