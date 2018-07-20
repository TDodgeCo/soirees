'use strict'

const Model = use('Model')

class Partner extends Model {
  account () {
    return this.belongsTo('App/Models/Account')
  }
  
  user () {
    return this.hasMany('App/Models/User')
  }
}

module.exports = Partner
