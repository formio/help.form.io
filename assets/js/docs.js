/** Add anchor links to anchor tags **/
'use strict';

!function ($) {
    'use strict';
    $(function () {
        // Scrollspy
        // var $window = $(window);
        // var $body = $(document.body);

        // $body.scrollspy({
        //     target: '.docs-sidebar'
        // });
        // $window.on('load', function () {
        //     $body.scrollspy('refresh')
        // });

        // Kill links
        $('.bs-docs-container [href=#]').click(function (e) {
            e.preventDefault();
        });
    });
}(jQuery);

(function () {
    anchors.options.placement = 'left';
    anchors.add('.docs-section > h1, .docs-section > h2, .docs-section > h3, .docs-section > h4, .docs-section > h5')
})();
