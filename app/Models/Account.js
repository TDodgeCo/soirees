'use strict'

const Model = use('Model')

class Account extends Model {
  partners () {
    return this.hasMany('App/Models/Partner')
  }
}

module.exports = Account
