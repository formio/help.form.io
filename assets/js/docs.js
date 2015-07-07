/** Add anchor links to anchor tags **/
'use strict';

!function ($) {
    'use strict';

    $(function () {

        // Scrollspy
        var $window = $(window)
        var $body = $(document.body)

        $body.scrollspy({
            target: '.docs-sidebar'
        })
        $window.on('load', function () {
            $body.scrollspy('refresh')
        })

        // Kill links
        $('.bs-docs-container [href=#]').click(function (e) {
            e.preventDefault()
        })

        // Sidenav affixing
        setTimeout(function () {
            var $sideBar = $('.docs-sidebar')

            $sideBar.affix({
                offset: {
                    top: function () {
                        var offsetTop = $sideBar.offset().top
                        var sideBarMargin = parseInt($sideBar.children(0).css('margin-top'), 10)
                        var navOuterHeight = $('.docs-nav').height()

                        return (this.top = offsetTop - navOuterHeight - sideBarMargin)
                    },
                    bottom: function () {
                        return (this.bottom = $('.docs-footer').outerHeight(true))
                    }
                }
            })
        }, 100)

        setTimeout(function () {
            $('.bs-top').affix()
        }, 100)

    })

}(jQuery);

(function () {
    anchors.options.placement = 'left';
    anchors.add('.docs-section > h1, .docs-section > h2, .docs-section > h3, .docs-section > h4, .docs-section > h5')
})();