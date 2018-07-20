'use strict'

const Model = use('Model')

class Account extends Model {
  users () {
    return this.hasMany('App/Models/User')
  }

  partners () {
    return this.hasMany('App/Models/Partner')
  }

  /**
   * The account's friends
   */
  friends () {
    return this.hasMany('App/Models/Friend')
  }

  events () {
    return this.hasMany('App/Models/Event')
  }

  galleries () {
    return this.hasMany('App/Models/Gallery')
  }

  notifications () {
    return this.hasMany('App/Models/Notification')
  }

  messages () {
    return this.hasMany('App/Models/Message')
  }
}

module.exports = Account
