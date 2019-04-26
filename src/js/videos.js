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

  const calculateTableRowsAmount = () => {

    let viewPort = $(window).height();
    let row = $('.row');
    let rowHeight = row.outerHeight();
    let availableRows =  Math.floor(viewPort/rowHeight);


    row.each(function (index) {
        index <= availableRows -1 ? $(this).removeClass('hidden'): $(this).addClass("hidden");
    })
  };
  calculateTableRowsAmount();
  $( window ).on("resize", calculateTableRowsAmount);

});
