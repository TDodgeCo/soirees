'use strict'

const Model = use('Model')

class Partner extends Model {
  account () {
    return this.belongsTo('App/Models/Account')
  }
}

module.exports = Partner
