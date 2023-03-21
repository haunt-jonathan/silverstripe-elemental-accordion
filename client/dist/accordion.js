(function ($) {
    $(document).ready(function() {
        $(".accordion button").click((ev) => {
            const div = $(ev.target).parent().parent().next("div");
            if (div.css('max-height') == "0px") {
                div.css("max-height", "100ch");
                $(ev.target).parent().find(".accordion-item-question--icon-plus").hide();
                $(ev.target).parent().find(".accordion-item-question--icon-minus").show();
                $(ev.target).attr("aria-expanded", true);
            } else {
                div.css("max-height", "0");                
                $(ev.target).parent().find(".accordion-item-question--icon-plus").show();
                $(ev.target).parent().find(".accordion-item-question--icon-minus").hide();
                $(ev.target).attr("aria-expanded", false);
            }
        });
    });
})(jQuery);
