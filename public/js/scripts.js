$(document).ready(function () {
    "use strict";

    PageScroll();

    // Loading Box (Preloader)
    function handlePreloader() {
        if ($(".preloader").length > 0) {
            $(".preloader").delay(200).fadeOut(500);
        }
    }

    handlePreloader();

    $(".member-bttn2").on("click", function () {
        $(".member-1").fadeOut(0);
        $(".member-2").fadeIn();
        $(".member-ul").find("li:nth-child(2)").addClass("active");
        return false;
    });

    $(".member-bttn3").on("click", function () {
        $(".member-2").fadeOut(0);
        $(".member-3").fadeIn();
        $(".member-ul").find("li:nth-child(3)").addClass("active");
        return false;
    });
    $(".member-bttn4").on("click", function () {
        $(".member-3").fadeOut(0);
        $(".member-4").fadeIn();
        return false;
    });

    $(".add-wishlist").on("click", function () {
        $(this).attr("src", "images/checkmark.png");
        return false;
    });

    $(".btn-video").on("click", function () {
        $(".backdrop").addClass("open");
        $(".player-container").fadeIn();
        return false;
    });

    $(".btn-lightbox-close").on("click", function () {
        $(".backdrop").removeClass("open");
        $(".player-container").fadeOut();
        return false;
    });

    $(".switchcolor").on("click", function () {
        $(this).addClass("active");
        $(".backdrop").addClass("active");
        $(".switchcolor-wrap").addClass("active");
    });

    $(".sheet-close,.backdrop").on("click", function () {
        $(".switchcolor").removeClass("active");
        $(".backdrop").removeClass("active");
        $(".switchcolor-wrap").removeClass("active");
    });

    $(".toggle input").on("change", function () {
        if (this.checked) {
            $("body").addClass("theme-dark");
        } else {
            $("body").removeClass("theme-dark");
        }
    });

    $('input[name="color-radio"]').on("change", function () {
        if (this.checked) {
            $("body").removeClass(
                "color-theme-pink color-theme-blue color-theme-red color-theme-black color-theme-gray color-theme-orange color-theme-yellow color-theme-green color-theme-white color-theme-brown color-theme-darkgreen color-theme-deeppink color-theme-darkorchid"
            );
            $("body").addClass("color-theme-" + $(this).val());
        }
    });
});

function PageScroll() {
    $(".scroll-tiger").on("click", function (e) {
        var $anchor = $(this);
        $("html, body")
            .stop()
            .animate(
                {
                    scrollTop: $($anchor.attr("href")).offset().top - 0,
                },
                1500,
                "easeInOutExpo"
            );
        $(".overlay-section").removeClass("active");
        e.preventDefault();
    });
}
