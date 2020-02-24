const films = require('./films')

module.exports = {
  byId: id => films.find(f => f.id == id) || {},
  all: () => films
}