var $ = require("minified").$;

$(function() {
  setTimeout(function() {
    $("div[style='position: absolute; z-index: 10000; top: 0px; left: 0px;']").remove();
    $("#mail_lightbox_background").remove();
    $("#mail_lightbox").remove();
    $(".suscribase").remove();
  }, 2500);
});
