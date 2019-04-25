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
    $(this).attr("class").includes("small") || $(this).attr("class").includes("small") ? vidContainer.addClass("small"): null;

    const videoRatio = $(this).attr("data-ratio");
    const videoWidth = vidContainer.css("width");
    const videoHeight = parseFloat(videoWidth) * parseFloat(videoRatio)/100;
    vidContainer.css("height", videoHeight);
    iframe.css("height", videoHeight);

    $body.one('click', function () {
      vidBackground.remove();
    })
  });

  // $( window ).on("resize", function () {
  //   let cellWidth = $(".cell").outerWidth() - 1;
  //   let height = $(".container").outerHeight();
  //   console.log(height, cellWidth);
  //   switch (true) {
  //     case (height > (cellWidth * 13) ):
  //       console.log('aaa');
  //       $('.container').css("height", ((cellWidth * 13)+1));
  //       break;
  //
  //   }
  //   })
});
