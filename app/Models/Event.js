'use strict'

const Model = use('Model')

class Event extends Model {
    account () {
        return this.belongsTo('App/Models/Account')
    }

    interestedAccount () {
        return this.hasMany('App/Models/InterestedAccount')
    }
}

module.exports = Event
