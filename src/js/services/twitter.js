'use strict'

var url = require('url')

// abbreviate at last blank before length and add "\u2026" (horizontal ellipsis)
var abbreviateText = function(text, length) {
  var div = document.createElement('div')
  var node = document.createTextNode(text)
  div.appendChild(node)
  var abbreviated = div.textContent
  if (abbreviated.length <= length) {
    return text
  }

  var lastWhitespaceIndex = abbreviated.substring(0, length - 1).lastIndexOf(' ')
  abbreviated = abbreviated.substring(0, lastWhitespaceIndex) + '\u2026'

  return abbreviated
}

module.exports = function(shariff) {
  var shareUrl = url.parse('https://twitter.com/intent/tweet', true)

  var title = shariff.getTitle()

  shareUrl.query.url = shariff.getURL()
  if (shariff.options.twitterVia !== null) {
    shareUrl.query.via = shariff.options.twitterVia
  }
  // From Twitters documentation (May 2021):
  // The length of your passed Tweet text should not exceed 280 characters
  // when combined with any passed hashtags, via, or url parameters.
  var remainingTextLength = (280 - (shareUrl.query.via || '').length - (shareUrl.query.url || '').length)
  shareUrl.query.text = abbreviateText(title, remainingTextLength)

  delete shareUrl.search

  return {
    blank: true,
    popup: false,
    shareText: {
      'en': 'tweet',
      'fr': 'tweet'
    },
    name: 'twitter',
    faPrefix: 'fab',
    faName: 'fa-twitter',
    title: {
      'fr': 'Partager sur Twitter'
    },
    // shareUrl: 'https://twitter.com/intent/tweet?text='+ shariff.getShareText() + '&url=' + url
    shareUrl: url.format(shareUrl) + shariff.getReferrerTrack()
  }
}
