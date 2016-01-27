var $ = require("minified").$;

function remove(item) {
  $(item).remove();
};

function removePopups() {
  remove("div[style='position: absolute; z-index: 10000; top: 0px; left: 0px;']");
  remove("#mail_lightbox_background");
  remove("#mail_lightbox");
  remove(".suscribase");
};

function getVideoLink(tagId) {
  var index = tagId.indexOf('ID');
  var id = tagId.substr(index + 2);
  var link = 'http://player.gfrvideo.com/gn-nacion/embed/' + id + '.html';
  return link;
};

function showVideos() {
  var videos = $('.gfrplayer-rendered');
  videos.each(function(item) {
    var id = item.id;
    var title = '<div style="background-color: LimeGreen;">Video</div>';
    var link = '<a href="' + getVideoLink(id) + '" target="_blank">' + title + '</a>';
    $('#' + id).set('innerHTML', link);
  });
};

$(function() {
  setTimeout(function() {
    removePopups();
    showVideos();
  }, 2500);
});
