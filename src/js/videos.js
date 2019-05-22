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
    $(this).attr("class").includes("odd") ? vidContainer.addClass("odd"): vidContainer.addClass("even");
    $(this).attr("class").includes("small")  ? vidContainer.addClass("small"): null;
    $(this).attr("class").includes("medium") && !$(this).attr("class").includes("large") ? vidContainer.addClass("medium"): null;

    const videoRatio = $(this).attr("data-ratio");
    const videoWidth = vidContainer.css("width");
    const videoHeight = parseFloat(videoWidth) * parseFloat(videoRatio)/100;
    vidContainer.css("height", videoHeight);
    iframe.css("height", videoHeight);

    vidBackground.one('click', function (event) {
      event.stopImmediatePropagation();
      $(this).remove();
    })
  });



});
