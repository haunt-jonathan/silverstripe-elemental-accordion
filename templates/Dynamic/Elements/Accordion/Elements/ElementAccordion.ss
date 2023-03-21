<div class="element_content__content <% if $Style %>element_content__$ExtraClass<% end_if %>">
    <% if $Content %>$Content<% end_if %>
    <% if $Panels %>
        <div id="accordion-{$ID}" class="accordion" role="tablist">
            <% loop $Panels %>
                <h5>
                    <button aria-expanded="false" id="accordion-item-{$ID}-id" aria-controls="accordion-item-{$ID}-content" class="accordion-item__toggle">
                        <span class="title">$Title</span>
                        <span aria-hidden="true" class="accordion-item__toggle-indicator">
                            <img src="/resources/themes/base_dist/images/fa-plus.svg" class="accordion-item-question--icon accordion-item-question--icon-plus"></img>
                            <img src="/resources/themes/base_dist/images/fa-minus.svg" class="accordion-item-question--icon accordion-item-question--icon-minus"></img>
                        </span>
                    </button>
                </h5>
                <div class="panel">
                    <div class='wrapper'>
                        <% if $Image %>
                            <img src="$Image.URL" class="img-responsive" alt="$Title.ATT">
                        <% end_if %>
                        $Content
                        <% if $ElementLink %>$ElementLink<% end_if %>
                    </div>
                </div>
            <% end_loop %>
            <% if $Panels.Count > 1 %><button class="accordion-expand-all">Expand All</button><button class="accordion-collapse-all">Collapse All</button><% end_if %>
        </div>
    <% end_if %>
</div>
