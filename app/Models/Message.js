'use strict'

const Model = use('Model')

class Message extends Model {
    user () {
        return this.belongsTo('App/Models/User')
    }

    sender () {
        return this.belongsTo('App/Models/Account')
    }

    recipient () {
        return this.belongsTo('App/Models/Account')
    }
}

module.exports = Message
