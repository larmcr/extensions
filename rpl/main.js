var $ = require('minified').$;

function getChannels(js) {
  var channels = {};
  var regExp = /(senal_\d+_desktop) = ('.+')/g;
  var matches = js.match(regExp);
  regExp = /('.+')/g;
  for (index = 0; index < matches.length; index++) {
    var item = matches[index];
    var parts = item.split('_');
    var channel = parts[1];
    var url = item.match(regExp)[0].replace(/'/g, '');
    channels[channel] = url;
  }
  return channels;
}

function setUrls(channels) {
  for (channel in channels) {
    var url = channels[channel];
    var href = '/envivo-' + channel;
    var element = $('a[href="' + href + '"]');
    element.set('@href', url);
    element.set('@target', '_blank');
  }
}

function parseJS(js) {
  var channels = getChannels(js);
  setUrls(channels);
}

function showError(status, statusText, responseText) {
  console.error('ERROR ->', status, statusText, responseText);
}

function requestUrl() {
  $.request('get', 'http://cdn.repretel.com/sites/common/js/default.js')
    .then(parseJS)
    .error(showError);
}

$(function() {
  requestUrl();
});
