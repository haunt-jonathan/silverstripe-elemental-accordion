(function ($) {
    $(".accordion button.accordion-item__toggle").click((ev) => {
        const parent = $(ev.target).closest('h5');
        const div = parent.next("div");
        if (div.css('max-height') == "0px") {
            div.css("max-height", "100ch");
            parent.find(".accordion-item-question--icon-plus").hide();
            parent.find(".accordion-item-question--icon-minus").show();
            parent.find("button.accordion-item__toggle").attr("aria-expanded", true);
        } else {
            div.css("max-height", "0");                
            parent.find(".accordion-item-question--icon-plus").show();
            parent.find(".accordion-item-question--icon-minus").hide();
            parent.find("button.accordion-item__toggle").attr("aria-expanded", false);
        }
        const expanded = parent.parent().find("button.accordion-item__toggle[aria-expanded='true']").length;
        const of = parent.parent().find("button.accordion-item__toggle").length;
        console.log(expanded, of);
        if (expanded == of) {
            parent.parent().find(".accordion-expand-all").hide();
            parent.parent().find(".accordion-collapse-all").show();    
        } else if (expanded == 0) {
            parent.parent().find(".accordion-expand-all").show();
            parent.parent().find(".accordion-collapse-all").hide();    
        }
    });
    $(".accordion-expand-all").click((ev) => {
        const parent = $(ev.target).parent();
        parent.find(".panel").css("max-height", "100ch");
        parent.find(".accordion-item-question--icon-plus").hide();
        parent.find(".accordion-item-question--icon-minus").show();
        parent.find("h5 button").attr("aria-expanded", true);
        parent.find(".accordion-expand-all").hide();
        parent.find(".accordion-collapse-all").show();
    });
    $(".accordion-collapse-all").click((ev) => {
        const parent = $(ev.target).parent();
        parent.find(".panel").css("max-height", "0");
        parent.find(".accordion-item-question--icon-plus").show();
        parent.find(".accordion-item-question--icon-minus").hide();
        parent.find("h5 button").attr("aria-expanded", false);
        parent.find(".accordion-expand-all").show();
        parent.find(".accordion-collapse-all").hide();
    });
})(jQuery);
