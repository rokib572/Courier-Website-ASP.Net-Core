    const hero = document.querySelector(".hero-section");
    hero.style.height = window.innerHeight + "px";
 
    window.addEventListener("resize", function () {
    hero.style.height = this.innerHeight + "px";
    });
    $( window ).on( "load", function() {
        $('.banner-img').addClass('fromLeftanimate');
        $('.headline-text').addClass('fromLeft');
    });
//     $(window).onload(function() {
//     // let position = $(this).onload();
//     // console.log(position);
//     if(position > 0) {
//       $('.banner-img').addClass('fromRight');
//       $('.headling-text').addClass('fromLeft');
//     } else {
//       $('.banner-img').removeClass('fromLeft');
//       $('.headling-text').removeClass('fromRight');
//     }
//   });