'use strict'

const Model = use('Model')

class Notification extends Model {
    account () {
        return this.belongsTo('App/Models/Account')
    }
}

module.exports = Notification
