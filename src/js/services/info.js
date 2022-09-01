'use strict'

module.exports = function(shariff) {
  return {
    blank: shariff.getInfoDisplayBlank(),
    popup: shariff.getInfoDisplayPopup(),
    shareText: 'Info',
    name: 'info',
    faPrefix: 'fas',
    faName: 'fa-info',
    title: {
      'fr': 'Plus d\'informations'
    },
    shareUrl: shariff.getInfoUrl()
  }
}
