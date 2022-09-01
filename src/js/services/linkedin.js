'use strict'

module.exports = function(shariff) {
  var url = encodeURIComponent(shariff.getURL())
  return {
    blank: true,
    popup: false,
    shareText: {
      'fr': 'partager'
    },
    name: 'linkedin',
    faPrefix: 'fab',
    faName: 'fa-linkedin-in',
    title: {
      'fr': 'Partager sur LinkedIn'
    },
    shareUrl: 'https://www.linkedin.com/sharing/share-offsite/?url=' + url
  }
}
