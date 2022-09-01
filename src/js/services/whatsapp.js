'use strict'

module.exports = function(shariff) {
  var url = encodeURIComponent(shariff.getURL())

  var title = shariff.getTitle()

  return {
    blank: true,
    popup: false,
    shareText: {
      'fr': 'partager'
    },
    name: 'whatsapp',
    faPrefix: 'fab',
    faName: 'fa-whatsapp',
    title: {
      'fr': 'Partager sur Whatsapp'
    },
    shareUrl: 'https://api.whatsapp.com/send?text=' + encodeURIComponent(title) + '%20' + url + shariff.getReferrerTrack()
  }
}
