$(function() {
    // navbar

    $("#open").on("click", function() {
        $(".nav-menu").css("bottom", "0");

    });

    $("#close").on("click", function() {
        $(".nav-menu").css("bottom", "-100%");
    });

    $(".nav-link").on("click", function() {
        $(".nav-menu").css("bottom", "-100%");
    });

    // scrollbar

    $(window).on("scroll", function() {
        if(scrollY > 70) {
            $("nav").css("box-shadow", "0 -1px 4px 2px var(--brand-color-op)");
        }
        else {
            $("nav").css("box-shadow", "none");
        }
    })
});