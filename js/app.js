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

    // Skills

    $(".skills-text").on("click", function() {
        let parent = $(this).parent();
        $(".up", parent).toggleClass("rotate");
        $(".language", parent).slideToggle("0.3s");
    })

    // Services

    $(".service-btn").on("click", function() {
        let parent = $(this).parent().parent();
        $(".service-model", parent).addClass("show-model");
    });
    $(".service-close").on("click", function() {
        $(".service-model").removeClass("show-model");
    })

    // Dark-Mode 

    $(".dark").on("click", function() {
        $(".dark").toggleClass("hide");
        $(".light").toggleClass("hide");
        $("body").toggleClass("dark-mode");
    })
    $(".light").on("click", function() {
        $(".light").toggleClass("hide");
        $(".dark").toggleClass("hide");
        $("body").toggleClass("dark-mode");
    })
})