
/**
 * DOM ready
 */
$(document).ready(function() {

    "use strict";

    $.each($('a.st'),function(index,el) {
        $(el).on('click',function() {
            $.smoothScroll({
                scrollTarget: $('.st.'+$(el).attr('href').substring(1)).first(),
                offset: -50
            });
            return false;
        });
    });

}); // DOM ready end
