

		//复制qq号

		var btns = document.querySelectorAll('.copy');

		var clipboardecode = new ClipboardJS(btns, {

			text: function (e) {

				return e.text

			}

		});

		//qq弹窗

		var clipboard = new ClipboardJS('.btn');

		clipboard.on('success', function (e) {

			document.querySelector('.alert').style.display = 'block';

		});

		document.querySelector('.close').onclick = function () {

			document.querySelector('.alert').style.display = 'none';

		}

		//
		//
		// TouchSlide({
		//
		// 	slideCell: "#fullSlideM",
		//
		// 	titCell: ".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
		//
		// 	mainCell: ".bd ul",
		//
		// 	effect: "leftLoop",
		//
		// 	autoPage: true, //自动分页
		//
		// 	autoPlay: true //自动播放
		//
		// });



		certifySwiper = new Swiper('#certify .swiper-container', {

			watchSlidesProgress: true,

			slidesPerView: 'auto',

			centeredSlides: true,

			loop: true,

			loopedSlides: 5,

			autoplay: true,

			autoplayDisableOnInteraction: false,

			navigation: {

				nextEl: '.swiper-button-next',

				prevEl: '.swiper-button-prev',

			},

			pagination: {

				el: '.swiper-pagination',

				clickable: true,

			},

			on: {

				progress: function (progress) {

					for (i = 0; i < this.slides.length; i++) {

						var slide = this.slides.eq(i);

						var slideProgress = this.slides[i].progress;

						modify = 1;

						if (Math.abs(slideProgress) > 1) {

							modify = (Math.abs(slideProgress) - 1) * 0.01 + 1;

						}

						translate = slideProgress * modify * 210 + 'px';

						scale = 1 - Math.abs(slideProgress) / 5;

						zIndex = 999 - Math.abs(Math.round(10 * slideProgress));

						slide.transform('translateX(' + translate + ') scale(' + scale + ')');

						slide.css('zIndex', zIndex);

						slide.css('opacity', 1);

						if (Math.abs(slideProgress) > 3) {

							slide.css('opacity', 0);

						}

					}

				},

				setTransition: function (transition) {

					for (var i = 0; i < this.slides.length; i++) {

						var slide = this.slides.eq(i)

						slide.transition(transition);

					}

				}

			}

		})

