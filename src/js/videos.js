$(()=>{
  const $main = $('.main-container');
  const $videos = $('.video');
  const $body = $('body');

  $videos.on('click', function (e) {
    e.stopPropagation();


    const vidBackground = $('<div class="vid-background"></div>');
    const vidContainer = $('<div class="vid-container"></div>');
    const iframe = $('<iframe></iframe>',{ frameborder:"0", allowfullscreen:'', webkitallowfullscreen:'', mozallowfullscreen:''})
      .attr('src', $(this).data("src"));

    vidContainer.append(iframe);
    vidBackground.append(vidContainer);
    $main.append(vidBackground);
    $(this).attr("class").includes("odd") ? vidContainer.addClass("odd"):vidContainer.addClass("even");
    $body.one('click', function () {
      vidBackground.remove();
    })
   })
});
