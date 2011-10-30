$(function () {
    $("IMG").wrap(function() { return '<a rel="lightbox" href="' + $(this).attr("src").replace(/\.mobile/, "") + '" />'; });
});
