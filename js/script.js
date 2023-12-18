var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

(function($) {
    $(document).ready(function() {
        var s = $('.slider'),
            sWrapper = s.find('.slider-wrapper'),
            sItem = s.find('.slide'),
            btn = s.find('.slider-link'),
            sWidth = sItem.width(),
            sCount = sItem.length,
            slide_title = s.find('.slide-title'),
            slide_img = s.find('.slide-img'),
            slide_text = s.find('.slide-text'),
            slide_image = s.find('.slide-image img'),
            sTotalWidth = sCount * sWidth;

        sWrapper.css('width', sTotalWidth);

        var clickCount = 0;

        btn.on('click', function(e) {
            e.preventDefault();

            if ($(this).hasClass('next')) {
                clickCount = (clickCount < sCount - 1) ? clickCount + 1 : 0;
            } else if ($(this).hasClass('prev')) {
                clickCount = (clickCount > 0) ? clickCount - 1 : sCount - 1;
            }

            TweenMax.to(sWrapper, 0.3, {
                x: '-' + (sWidth * clickCount),
            });

            // CONTENT ANIMATIONS

            var fromProperties = { autoAlpha: 0, x: '-50', y: '-10' };
            var toProperties = { autoAlpha: 0.8, x: '0', y: '0' };

            TweenLite.fromTo(slide_image, 1, { autoAlpha: 0, y: '40' }, { autoAlpha: 1, y: '0' });
            TweenLite.fromTo(slide_title, 1, fromProperties, toProperties);
            TweenLite.fromTo(slide_img, 1, fromProperties, toProperties);
            TweenLite.fromTo(slide_text, 1, fromProperties, toProperties);
        });
    });
})(jQuery);

$('.overlay').addClass('overlay-blue');

(function($) {
    $(document).ready(function() {
        var s = $('.lp-slider'),
            sWrapper = s.find('.lp-slider-wrapper'),
            sItem = s.find('.lp-slide'),
            btn = s.find('.lp-slider-link'),
            sWidth = sItem.width(),
            sCount = sItem.length,
            slide_title = s.find('.lp-slide-title'),
            slide_img = s.find('.lp-slide-img'),
            slide_text = s.find('.lp-slide-text'),
            slide_image = s.find('.lp-slide-image img'),
            sTotalWidth = sCount * sWidth;

        sWrapper.css('width', sTotalWidth);

        var clickCount = 0;

        btn.on('click', function(e) {
            e.preventDefault();

            if ($(this).hasClass('lp-next')) {
                clickCount = (clickCount < sCount - 1) ? clickCount + 1 : 0;
            } else if ($(this).hasClass('lp-prev')) {
                clickCount = (clickCount > 0) ? clickCount - 1 : sCount - 1;
            }

            TweenMax.to(sWrapper, 0.3, {
                x: '-' + (sWidth * clickCount),
            });

            // CONTENT ANIMATIONS

            var fromProperties = { autoAlpha: 0, x: '-50', y: '-10' };
            var toProperties = { autoAlpha: 0.8, x: '0', y: '0' };

            TweenLite.fromTo(slide_image, 1, { autoAlpha: 0, y: '40' }, { autoAlpha: 1, y: '0' });
            TweenLite.fromTo(slide_title, 1, fromProperties, toProperties);
            TweenLite.fromTo(slide_img, 1, fromProperties, toProperties);
            TweenLite.fromTo(slide_text, 1, fromProperties, toProperties);
        });
    });
})(jQuery);
$('.lp-overlay').addClass('overlay-blue');