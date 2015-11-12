'use strict';

var config = require('./config'),
    styles = require('./styles'),
    trello = require('./util/trello')(config.trelloDeveloper);


module.exports = {
  exports: {
    config: config,
    styles: styles,
    trello: trello
  },
  init: function() {
    console.log('initializing app');
  }
}
