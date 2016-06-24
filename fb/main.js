var $ = require("minified").$;

function remove(item) {
  $(item).remove();
}

$(function() {
  setTimeout(function() {
    $("._5hn6").remove();
  }, 1000);
});
