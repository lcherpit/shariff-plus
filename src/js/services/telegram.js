'use strict'

module.exports = function(shariff) {
  var url = encodeURIComponent(shariff.getURL())

  return {
    blank: true,
    popup: false,
    shareText: {
      'fr': 'partager'
    },
    name: 'telegram',
    faPrefix: 'fab',
    faName: 'fa-telegram',
    title: {
      'fr': 'Partager sur Telegram'
    },
    shareUrl: 'https://t.me/share/url?url=' + url + shariff.getReferrerTrack()
  }
}
