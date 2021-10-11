//for scrolling section by section
$(document).mousemove(function (e) {
    $('#headSec').on('wheel', function (e) {       
        e.preventDefault();        
        if (e.originalEvent.deltaY > 0) {
            var elmnt = document.getElementById('serviceTopSec');
            elmnt.scrollIntoView();
            //console.log($(e.target).height());
           //document.documentElement.scrollTop = $(e.target).height() + 48;
        }
    });
    $('#serviceSec').on('wheel', function (e) {
        e.preventDefault();
        if (e.originalEvent.deltaY < 0) {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
        if (e.originalEvent.deltaY > 0) {
            var elmnt = document.getElementById('whyChooseSec');
            elmnt.scrollIntoView();
            document.getElementById('whyChoseMiddleImg').src = '/images/home/why-choose/choose_us_2.svg?' + new Date().getTime();
            //console.table([$(e.target).offset().top, $(e.target).height()])
            //document.documentElement.scrollTop = $(e.target).offset().top + $(e.target).outerHeight();
        }
    });
    $('#whyChooseSec').on('wheel', function (e) {
        e.preventDefault();
        if (e.originalEvent.deltaY < 0) {
            var elmnt = document.getElementById('serviceSec');            
            elmnt.scrollIntoView();
        }
        if (e.originalEvent.deltaY > 0) {
            var elmnt = document.getElementById('testimonialSec');
            elmnt.scrollIntoView();
        }
    });
    $('#testimonialSec').on('wheel', function (e) {
        e.preventDefault();
        if (e.originalEvent.deltaY < 0) {
            var elmnt = document.getElementById('whyChooseSec');
            elmnt.scrollIntoView();
            document.getElementById('whyChoseMiddleImg').src = '/images/home/why-choose/choose_us_2.svg?' + new Date().getTime();
        }
        if (e.originalEvent.deltaY > 0) {
            var elmnt = document.getElementById('footerSec');
            elmnt.scrollIntoView();
        }
    });
    $('#footerSec').on('wheel', function (e) {
        e.preventDefault();
        if (e.originalEvent.deltaY < 0) {
            var elmnt = document.getElementById('testimonialSec');
            elmnt.scrollIntoView();
        }
    });
});
//typewriter-text
$(document).ready(function () {
    typing(0, $('.typewriter-text').data('text'));
    function typing(index, text) {
        var textIndex = 1;
        var tmp = setInterval(function () {
            if (textIndex < text[index].length + 1) {
                $('.typewriter-text').text(text[index].substr(0, textIndex));
                if (index == 1) {
                    document.getElementById('banner-top-img-1').src = '/images/home/animation/card.svg?' + new Date().getTime();
                }
                if (index == 2) {
                    document.getElementById('banner-top-img-2').src = '/images/home/animation/parcel.svg?' + new Date().getTime();
                }
                if (index == 3) {
                    document.getElementById('banner-top-img-3').src = '/images/home/animation/online-service.svg?' + new Date().getTime();
                }
                if (index == 5) {
                    document.getElementById('banner-top-img-5').src = '/images/home/animation/realtime-tracking.svg?' + new Date().getTime();
                }
                if (index == 6) {
                    document.getElementById('banner-top-img-6').src = '/images/home/animation/warehouse.svg?' + new Date().getTime();
                }
                if (index == 7) {
                    document.getElementById('banner-top-img-7').src = '/images/home/animation/fast-delivery.svg?' + new Date().getTime();
                }
                $('#banner-top-img-' + index).fadeIn(500);
                textIndex++;
            } else {
                setTimeout(function () {
                    deleting(index, text);
                    $('#banner-top-img-' + index).fadeOut(500);
                }, 4000);
                clearInterval(tmp);
            }
        }, 100);
    }
    function deleting(index, text) {
        var textIndex = text[index].length;
        var tmp = setInterval(function () {
            if (textIndex + 1 > 0) {
                $('.typewriter-text').text(text[index].substr(0, textIndex));
                textIndex--;
            } else {
                index++;
                if (index == text.length) { index = 0; }
                typing(index, text);
                clearInterval(tmp);
            }
        }, 30)
    }
});
//testimonial slider
//var testim = document.getElementById('testim'),
//    testimDots = Array.prototype.slice.call(document.getElementById('testim-dots').children),
//    testimContent = Array.prototype.slice.call(document.getElementById('testim-content').children),
//    testimLeftArrow = document.getElementById('left-arrow'),
//    testimRightArrow = document.getElementById('right-arrow'),
//    testimSpeed = 4500,
//    currentSlide = 0,
//    currentActive = 0,
//    testimTimer,
//    touchStartPos,
//    touchEndPos,
//    touchPosDiff,
//    ignoreTouch = 30;
//window.onload = function () {
//    // Testim Script
//    function playSlide(slide) {
//        for (var k = 0; k < testimDots.length; k++) {
//            testimContent[k].classList.remove('active');
//            testimContent[k].classList.remove('inactive');
//            testimDots[k].classList.remove('active');
//        }

//        if (slide < 0) {
//            slide = currentSlide = testimContent.length - 1;
//        }

//        if (slide > testimContent.length - 1) {
//            slide = currentSlide = 0;
//        }

//        if (currentActive != currentSlide) {
//            testimContent[currentActive].classList.add('inactive');
//        }
//        testimContent[slide].classList.add('active');
//        testimDots[slide].classList.add('active');

//        currentActive = currentSlide;

//        clearTimeout(testimTimer);
//        testimTimer = setTimeout(function () {
//            playSlide(currentSlide += 1);
//        }, testimSpeed)
//    }
//    testimLeftArrow.addEventListener('click', function () {
//        playSlide(currentSlide -= 1);
//    })
//    testimRightArrow.addEventListener('click', function () {
//        playSlide(currentSlide += 1);
//    })
//    for (var l = 0; l < testimDots.length; l++) {
//        testimDots[l].addEventListener('click', function () {
//            playSlide(currentSlide = testimDots.indexOf(this));
//        })
//    }
//    playSlide(currentSlide);
//    // keyboard shortcuts
//    document.addEventListener('keyup', function (e) {
//        switch (e.keyCode) {
//            case 37:
//                testimLeftArrow.click();
//                break;

//            case 39:
//                testimRightArrow.click();
//                break;

//            case 39:
//                testimRightArrow.click();
//                break;

//            default:
//                break;
//        }
//    })
//    testim.addEventListener('touchstart', function (e) {
//        touchStartPos = e.changedTouches[0].clientX;
//    })
//    testim.addEventListener('touchend', function (e) {
//        touchEndPos = e.changedTouches[0].clientX;
//        touchPosDiff = touchStartPos - touchEndPos;
//        if (touchPosDiff > 0 + ignoreTouch) {
//            testimLeftArrow.click();
//        } else if (touchPosDiff < 0 - ignoreTouch) {
//            testimRightArrow.click();
//        } else {
//            return;
//        }
//    })
//}