'use strict'

module.exports = function(shariff) {
  var url = encodeURIComponent(shariff.getURL())

  var title = shariff.getTitle()

  return {
    popup: false,
    shareText: {
      'fr': 'partager'
    },
    name: 'threema',
    faPrefix: 'fas',
    faName: 'fa-lock',
    title: {
      'fr': 'Partager sur Threema'
    },
    shareUrl: 'threema://compose?text=' + encodeURIComponent(title) + '%20' + url + shariff.getReferrerTrack()
  }
}
