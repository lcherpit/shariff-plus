'use strict'

module.exports = function(shariff) {
  var url = encodeURIComponent(shariff.getURL())
  return {
    blank: true,
    popup: false,
    shareText: {
      'fr': 'partager'
    },
    name: 'facebook',
    faPrefix: 'fab',
    faName: 'fa-facebook-f',
    title: {
      'fr': 'Partager sur Facebook'
    },
    shareUrl: 'https://www.facebook.com/sharer/sharer.php?u=' + url + shariff.getReferrerTrack()
  }
}
