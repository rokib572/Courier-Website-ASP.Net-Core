// debounce from underscore.js
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};
var count = 0;
// use x and y mousewheel event data to navigate flickity
function slick_handle_wheel_event(e, slick_instance, slick_is_animating) {
    // do not trigger a slide change if another is being animated
    if (!slick_is_animating) {
        // pick the larger of the two delta magnitudes (x or y) to determine nav direction
        var direction =
            Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
        //console.log("wheel scroll ", e.deltaX, e.deltaY, direction);

        /*when count = 5 it goes to next section and we turned it to 4 so that it count 4,3,2,1,0 */

        if (direction > 0) {
            // next slide
            slick_instance.slick("slickNext");
            count++;
        } else {
            // prev slide
            slick_instance.slick("slickPrev");
            count--;
        }
       
        if (count == 5) {
             var elmnt = document.getElementById("projectFacts");
             elmnt.scrollIntoView();
            count = 4;
            $('#number1').jQuerySimpleCounter({ end: 12, duration: 3000 });
            $('#number2').jQuerySimpleCounter({ end: 55, duration: 3000 });
            $('#number3').jQuerySimpleCounter({ end: 359, duration: 2000 });
            $('#number4').jQuerySimpleCounter({ end: 246, duration: 2500 });
        }
      else if (count == -1) {
            var elmnt = document.getElementById("whyChooseSec");
            elmnt.scrollIntoView();
            count = 0;
        }
    }
}

// debounce the wheel event handling since trackpads can have a lot of inertia
var slick_handle_wheel_event_debounced = debounce(
    slick_handle_wheel_event
    , 100, true
);

var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
    }));
} catch (e) { }

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// init slider 
const slick_2 = $(".slides");
slick_2.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    infinite: false
});
var slick_2_is_animating = false;
slick_2.on("afterChange", function (index, previousSlide, nextSlide) {
    slick_2_is_animating = false;   
    for (var j = 0; j <= 4; j++) {
        $("#arrow-" + j).removeClass("fa fa-arrow-left");
    }
    $("#arrow-" + (nextSlide)).addClass("fa fa-arrow-left");

});

slick_2.on("beforeChange", function (index) {
    slick_2_is_animating = true;
    //if (nextSlide == 4 || nextSlide == 0) {
    //    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    //    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    //    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    //    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
    //}
});
$(document).mousemove(function (e) {
    $("#planningArea").on("wheel", function (e) {
        e.preventDefault();
        slick_handle_wheel_event_debounced(e.originalEvent, slick_2, slick_2_is_animating);
        //window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
        //window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
        //window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
        //window.addEventListener('keydown', preventDefaultForScrollKeys, false);
    });
    $("#whyChooseSec").on("wheel", function (e) {
        e.preventDefault();
        if (e.originalEvent.deltaY > 0) {
            var elmnt = document.getElementById("planningSec");
            elmnt.scrollIntoView();
        }    
        if (e.originalEvent.deltaY < 0) {
            var elmnt = document.getElementById("headSec");
            elmnt.scrollIntoView();
        }    
    });
    $("#projectFacts").on("wheel", function (e) {
         e.preventDefault();
         if (e.originalEvent.deltaY < 0) {
             var elmnt = document.getElementById("planningSec");
             elmnt.scrollIntoView();
         } 
         if (e.originalEvent.deltaY > 0) {
             var elmnt = document.getElementById("testim");
             elmnt.scrollIntoView();
         }
     });
});

//counter 
$.fn.jQuerySimpleCounter = function (options) {
    var settings = $.extend({
        start: 0,
        end: 100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options);

    var thisElement = $(this);

    $({ count: settings.start }).animate({ count: settings.end }, {
        duration: settings.duration,
        easing: settings.easing,
        step: function () {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
}

