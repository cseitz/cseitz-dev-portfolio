// Included in Every page.

function linkify(n) { // JavaScript-based links
    var o = n.dataset.href;
    window.location.href = o
}
$(document).ready(function() { // Navbar animating
    var o = $(".navbar").first(),
        a = document.documentElement,
        l = 0;
    $(window).on("scroll", function() { // Make navbar thicker when less than 5 scroll offset, thinner when more than 5 scroll offset.
        var n = a.scrollTop;
        5 < n ? l <= 5 && (o.addClass("small"), l = n) : 5 <= l && (o.removeClass("small"), l = n)
    })
});