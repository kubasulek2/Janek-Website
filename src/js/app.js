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
		let availableRows = Math.floor(viewPort / rowHeight);

		// to avoid content-wrapper class going over "rows20"
		availableRows = availableRows > 21 ? 21 : availableRows;

		// draw table rows (min 13, max 20)
		// add class to content-wrapper informing how many rows is there
		if (availableRows > 13) {
			table.prev().removeClass()
				.addClass('content-wrapper')
				.addClass(`rows${(availableRows - 1).toString()}`);

			row.each(function (index) {
				index <= availableRows - 2 ? $(this).removeClass('hidden') : $(this).addClass("hidden");
			})
		} else {
			table.prev().removeClass()
				.addClass('content-wrapper')
				.addClass(`rows13`);

			row.each(function (index) {
				index <= 12 ? $(this).removeClass('hidden') : $(this).addClass("hidden");
			})
		}
	};

	// drawing themes
	let prevNum = 2;  // first displayed image index
	let disableThemeChange = false;

	const drawTheme = (themes) => {

		if (disableThemeChange) return;

		//image index can be larger than actual images index, to simulate drawing no image
		let draw = Math.floor(Math.random() * (themes.length + 2));
		let disableTime = Math.floor(Math.random() * (20 - 10)) + 10;


		if (draw === prevNum || draw === 1) { //image 1 is restricted to show after another image
			drawTheme(themes);
			return;
		} else {

			if (prevNum === 0) {
				prevNum = 1;
				setTimeout(() => {
					themes.each(function (i, e) {
						i === 1 ? $(e).fadeIn(500) : $(e).hide();
					})
				}, disableTime * 500);

			} else {
				prevNum = draw;
				setTimeout(() => {
					themes.each(function (i, e) {
						i === draw ? $(e).fadeIn(500) : $(e).hide();
					})
				}, disableTime * 500);
			}
		}
		disableThemeChange = true
		setTimeout(() => {
			disableThemeChange = false;
		}, disableTime * 1000);

	};

	// handling left and right side galleries
	const handleLeftGallery = (index, images, themes) => {
		let counter = index;

		$(".nav-left > .next").on("click", function () {

			drawTheme(themes);

			if (counter === index) {
				$(this).prev().show()
			}

			$(images[counter]).hide();
			counter += 2;
			imagesInfo.leftIndex = counter;
			$(images[counter]).show();

			if (!(images.length % 2) && counter === images.length - 2) {
				$(this).hide();
			} else if (images.length % 2 && counter === images.length - 1) {
				$(this).hide()
			}

		});

		$(".nav-left > .prev").on("click", function () {

			drawTheme(themes);

			if (!(images.length % 2) && counter === images.length - 2) {
				$(this).next().show();

			} else if (images.length % 2 && counter === images.length - 1) {
				$(this).next().show()
			}

			$(images[counter]).hide();
			counter -= 2;
			imagesInfo.leftIndex = counter;
			$(images[counter]).show();

			if (counter === index) {
				$(this).hide()
			}

		})
	};

	const handleRightGallery = (index, images, themes) => {
		let counter = index;

		$(".nav-right > .next").on("click", function () {

			drawTheme(themes);

			if (counter === index) {
				$(this).prev().show()
			}

			$(images[counter]).hide();
			counter += 2;
			imagesInfo.rightIndex = counter;
			$(images[counter]).show();

			if (!(images.length % 2) && counter === images.length - 1) {
				$(this).hide();
			} else if (images.length % 2 && counter === images.length - 2) {
				$(this).hide()
			}

		});

		$(".nav-right > .prev").on("click", function () {

			drawTheme(themes);

			if (!(images.length % 2) && counter === images.length - 1) {
				$(this).next().show();

			} else if (images.length % 2 && counter === images.length - 2) {
				$(this).next().show()
			}

			$(images[counter]).hide();
			counter -= 2;
			imagesInfo.rightIndex = counter;
			$(images[counter]).show();

			if (counter === index) {
				$(this).hide()
			}

		})
	};

	const showImagesCommercial = () => {
		const images = $('.image');
		const themes = $('.theme img');

		let leftIndex = 0;
		let rightIndex = 1;
		themes.eq(2).show();
		//drawTheme(themes);
		handleLeftGallery(leftIndex, images, themes);
		handleRightGallery(rightIndex, images, themes);



		// handle display while resize and change screen orientation

		// on loading page if desktop, show proper immages and handle small videos

		if (!(mobileViewport.matches || tabletViewport.matches)) {
			$(images[0]).show();
			$(images[1]).show();
			desktopHandleMiniatures();
		} else {
			mobileHandleMiniatures();

		}

		mobileViewport.addListener(function (mq) {

			if (mq.matches) {
				$(images).show()
				mobileHandleMiniatures();

			} else {
				$(images).hide();
				$(images[imagesInfo.leftIndex]).show();
				$(images[imagesInfo.rightIndex]).show();
				desktopHandleMiniatures();
			}
		});

		tabletViewport.addListener(function (mq) {

			if (mq.matches) {
				$(images).show()
				mobileHandleMiniatures();

			} else {
				$(images).hide();
				$(images[imagesInfo.leftIndex]).show();
				$(images[imagesInfo.rightIndex]).show();
				desktopHandleMiniatures();

			}
		});

	};
	const desktopHandleMiniatures = function () {
		const figures = $('.content-wrapper figure:not(.theme)')

		//initial show and play proper video
		const visibleVideos = figures.filter(':visible'),
			topVideo = visibleVideos.filter('.even').children()[0],
			bottomVideo = visibleVideos.filter('.odd').children()[0];
			$(visibleVideos.filter('.even'))
					.find('.poster')
					.css('display', 'none');
					

				$(visibleVideos.filter('.odd'))
					.find('.poster')
					.css('display', 'flex');

				topVideo.tagName === 'VIDEO' && topVideo.paused ? topVideo.play() : null;  
				bottomVideo.tagName === 'VIDEO' && !bottomVideo.paused ? bottomVideo.pause() : null;  


		$(window)
		.off('mousemove scroll')
		.on('mousemove', function (e) {
			e = e || window.event;
			const visibleVideos = figures.filter(':visible'),
				topVideo = visibleVideos.filter('.even').children()[0],
				bottomVideo = visibleVideos.filter('.odd').children()[0];
				$(visibleVideos.filter('.even'))
					.find('.poster')
					.css('display', 'none');
					

				$(visibleVideos.filter('.odd'))
					.find('.poster')
					.css('display', 'flex');

				topVideo.tagName === 'VIDEO' && topVideo.paused ? topVideo.play() : null;  
				bottomVideo.tagName === 'VIDEO' && !bottomVideo.paused ? bottomVideo.pause() : null;  

			
			if (e.clientY < document.documentElement.clientHeight / 2) 
			{
				//hide top video poster, show bottom video poster, play top pause bottom video
				$(visibleVideos.filter('.even'))
					.find('.poster')
					.css('display', 'none');
					

				$(visibleVideos.filter('.odd'))
					.find('.poster')
					.css('display', 'flex');

				topVideo.tagName === 'VIDEO' && topVideo.paused ? topVideo.play() : null;  
				bottomVideo.tagName === 'VIDEO' && !bottomVideo.paused ? bottomVideo.pause() : null;  
			} 
			else 
			{
				$(visibleVideos.filter('.odd'))
					.find('.poster')
					.css('display', 'none');
				$(visibleVideos.filter('.even'))
					.find('.poster')
					.css('display', 'flex');
				
				bottomVideo.tagName === 'VIDEO' && bottomVideo.paused ? bottomVideo.play() : null; topVideo.tagName === 'VIDEO' && !topVideo.paused ? topVideo.pause() : null; 	
			}

		})
	}
	
	
	/* const desktopHandleMiniatures = function () {
		$('.image')
			.off('mouseenter mouseleave scroll')
			.on('mouseenter mouseleave', function (event) {

				const video = this.querySelector('video');
				if (event.type === 'mouseenter')
					video !== null ? video.play() : null;
				else
					video !== null ? video.pause() : null;
			});
	} */

	const mobileHandleMiniatures = function () {
		$(window)
			.off('mousemove scroll')
			.on('scroll', function () {

				const
					videos = $('.content-wrapper figure:not(.theme,.photos)'),
					topVideo = [...videos]
						.filter((el) => el.getBoundingClientRect().top > 0)
						.reduce((prev, current) => (prev.getBoundingClientRect().top < current.getBoundingClientRect().top) ? prev : current)

				videos.each((i, el) => {
					//video must have muted attr for this code to work!!!
					const video = el.querySelector('video');
					if (el === topVideo) {
						video.paused ? video.play() : null;
					} else {
						!video.paused ? video.pause(): null;
					}

				})



			});
	}

	showImagesCommercial();
	defineTable();
	$(window).on("resize", defineTable);


});



