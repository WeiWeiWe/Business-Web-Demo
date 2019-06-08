$(document).ready(function () {

    // anchor start
    $(".jq-anchor").click(function () {
        let target = $(this).data("target");
        // console.log(target);
        let _offset = $(target).offset().top;
        // console.log(_offset);
        $("html,body").animate({
            scrollTop: _offset
        });
        return false;
    });
    // anchor end

    // gotop start
    $(".jq-goTop").hide();
    $(window).scroll(function () {
        let h = $("body,html").scrollTop();
        // console.log(h);

        if (h > 1100) {
            $(".jq-goTop").fadeIn();
        } else {
            $(".jq-goTop").fadeOut();
        };
    });
    $(".jq-goTop").click(function () {
        $("html,body").animate({
            scrollTop: 0
        });
        return false;
    });
    // gotop end

    // showMenu start
    $(".jq-showMenu").click(function () {
        $(".jq-showMenu-dash").toggleClass("showMenu-X")
        $('body').toggleClass('menu-show');
    })
    // showMenu end

    // slider start
    $(".jq-slider").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        speed: 1500,
    });
    // slider end

    // light-box start
    lightbox.option({
        'resizeDuration': 400,
        'wrapAroung': true,
    });
    // light-box end
});