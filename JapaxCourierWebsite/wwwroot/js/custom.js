//service drop down menu fixed size
$('#serviceDropdown').on('shown.bs.dropdown', function () {
    let x = $('#navbarSupportedContentMiddle .nav-item:first-child').width() + $('#navbarSupportedContentMiddle .nav-item:nth-child(2)').width();
    let leftCss = `${x * (-1)}px !important`;
    let widthCss = `${$('#navbarSupportedContentMiddle .navbar-nav').width()}px !important`;
    $('#dropdown_hack_style').html(
        `#serviceDropdown .dropdown-menu {left: -242.6562px !important; width: 880.234px !important;}`
    )
});
//service menu show hide on mouse hover
$('#serviceDropdown').mouseenter(function () {
    $('.sub-menu-div-service').show();
    $('#serviceDropdown').addClass('show');
    let x = $('#navbarSupportedContentMiddle .nav-item:first-child').width() + $('#navbarSupportedContentMiddle .nav-item:nth-child(2)').width();
    let leftCss = `${x * (-1)}px !important`;
    let widthCss = `${$('#navbarSupportedContentMiddle .navbar-nav').width()}px !important`;
    $('#dropdown_hack_style').html(
        `#serviceDropdown .dropdown-menu {left: -242.6562px !important; width: 880.234px !important;}`
    )
});
$(".sub-menu-div-service").mouseleave(function () {
    $('.sub-menu-div-service').hide();
});
$("#price").mouseenter(function () {
    $('.sub-menu-div-service').hide();
});
$("#about").mouseenter(function () {
    $('.sub-menu-div-service').hide();
});
$("#topNav").mouseenter(function () {
    $('.sub-menu-div-service').hide();
});
//add active class to link
$(document).ready(function () {
    var fileName = location.href.split("/").slice(-1).toString().replace(/#/, "").toLowerCase();
    if (fileName != "") {
        if (fileName.includes("?")) {
            fileName = fileName.split("?")[0];
        }
        $('.nav-link').removeClass("active-link");
        $('.sub-menu-li-a').removeClass("active-service-menu-link");
        if (fileName == "index" || fileName == "home") {
            $("#indexLi").addClass("active-link");
        }
        if (fileName == "about") {
            $("#aboutLi").addClass("active-link");
        }
        if (fileName == "service") {
            $("#serviceLi").addClass("active-link");
        }
        if (fileName == "pricing") {
            $("#priceLi").addClass("active-link");
        }
        if (fileName == "map") {
            $("#mapLi").addClass("active-link");
        }
        if (fileName == "contact") {
            $("#contactLi").addClass("active-link");
        }
        if (fileName == "blog") {
            $("#blogLi").addClass("active-link");
        }
        if (fileName == "pickup-drop") {
            $("#serviceLi").addClass("active-link");
            $("#pickupLi").addClass("active-service-menu-link");
        }
        if (fileName == "online-service") {
            $("#serviceLi").addClass("active-link");
            $("#onlineLi").addClass("active-service-menu-link");
        }
        if (fileName == "realtime-tracking") {
            $("#serviceLi").addClass("active-link");
            $("#realtimeLi").addClass("active-service-menu-link");
        }
        if (fileName == "packaging-service") {
            $("#serviceLi").addClass("active-link");
            $("#packagingLi").addClass("active-service-menu-link");
        }
        if (fileName == "warehouse") {
            $("#serviceLi").addClass("active-link");
            $("#warehouseLi").addClass("active-service-menu-link");
        }
        if (fileName == "food-delivery") {
            $("#serviceLi").addClass("active-link");
            $("#foodLi").addClass("active-service-menu-link");
        }
        if (fileName == "ondemand-service") {
            $("#serviceLi").addClass("active-link");
            $("#ondemandLi").addClass("active-service-menu-link");
        }
        if (fileName == "fulfillment-service") {
            $("#serviceLi").addClass("active-link");
            $("#fulfillmentLi").addClass("active-service-menu-link");
        }
        if (fileName == "coming-soon") {
            $("#serviceLi").addClass("active-link");
        }
    }
    else {
        $("#indexLi").addClass("active-link");
    }
});
//fixed navbar position
$(function () {
    $(window).scroll(function () {
        $('.navbar-custom').css({ 'position': 'fixed', 'width': '100%', 'box-shadow': '#c5c0c0 0px 2px 8px 0px' });
        $('#navAfterScrollLogo').css('display', 'block');
        $('#navBeforeScrollLogo').css('display', 'none');
        if ($(this).scrollTop() < 5) {
            $('.navbar-custom').css('position', 'sticky');
            $('.navbar-custom').css('box-shadow', 'none');
            $('#navAfterScrollLogo').css('display', 'none');
            $('#navBeforeScrollLogo').css('display', 'block');
        }
    })
});
//show playstore icon
$(function () {
    $(window).scroll(function () {
        if (($(this).scrollTop() >= 100)) {
            if (($(this).scrollTop() + $(this).height() < $(document).height() - 300)) {
                $('.play-icon').css('display', 'flex');
            }
            else {
                $('.play-icon').css('display', 'none');
            }
        }
        else {
            $('.play-icon').css('display', 'none');
        }
    });
});
//chatbox start
const toggleChatboxBtn = document.querySelector(".js-chatbox-toggle");
const chatbox = document.querySelector(".js-chatbox");
const chatboxMsgDisplay = document.querySelector(".js-chatbox-display");
const chatboxForm = document.querySelector(".js-chatbox-form");
// Use to create chat bubble when user submits text
// Appends to display
const createChatBubble = input => {
    const chatSection = document.createElement("p");
    chatSection.textContent = input;
    chatSection.classList.add("chatbox__display-chat");
    chatboxMsgDisplay.appendChild(chatSection);
};
// Toggle the visibility of the chatbox element when clicked
// And change the icon depending on visibility
toggleChatboxBtn.addEventListener("click", () => {
    chatbox.classList.toggle("chatbox--is-visible");

    if (chatbox.classList.contains("chatbox--is-visible")) {
        toggleChatboxBtn.innerHTML = '<i class="fas fa-chevron-down"></i>';
    } else {
        toggleChatboxBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    }
});
// Form input using method createChatBubble
// To append any user message to display
chatboxForm.addEventListener("submit", e => {
    const chatInput = document.querySelector(".js-chatbox-input").value;
    createChatBubble(chatInput);
    e.preventDefault();
    chatboxForm.reset();
});