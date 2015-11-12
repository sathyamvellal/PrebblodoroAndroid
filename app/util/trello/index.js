'use strict';

var me = require('./me'),
    card = require('./card'),
    list = require('./list'),
    board = require('./board'),
    action = require('./action'),
    search = require('./search'),
    member = require('./member'),
    checklist = require('./checklist');

var trello = {
  me: me,
  card: card,
  list: list,
  board: board,
  action: action,
  search: search,
  member: member,
  checklist: checklist
};

module.exports = function(trelloDeveloper) {
  if (trelloDeveloper !== undefined && trelloDeveloper.key !== undefined && trelloDeveloper.secret !== undefined && trelloDeveloper.token !== undefined) {
    trello.developer = trelloDeveloper;
    return trello;
  } else {
    return null;
  }
}
