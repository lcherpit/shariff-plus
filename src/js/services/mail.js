'use strict'

module.exports = function(shariff) {
  var url = shariff.getOption('mailUrl')

  // mailto: link? Add body and subject.
  if (url.indexOf('mailto:') === 0) {
    url += '?subject=' + encodeURIComponent(shariff.getOption('mailSubject') || shariff.getTitle())
    url += '&body=' + encodeURIComponent(shariff.getOption('mailBody').replace(/\{url\}/i, shariff.getURL()))
  }

  return {
    blank: url.indexOf('http') === 0,
    popup: false,
    shareText: {
      'en': 'mail',
      'zh': '分享'
    },
    name: 'mail',
    faPrefix: 'fas',
    faName: 'fa-envelope',
    title: {
      'fr': 'Envoyer par courriel'
    },
    shareUrl: url
  }
}
