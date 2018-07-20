'use strict'

const Model = use('Model')

class InterestedAccount extends Model {
    account () {
        return this.belongsTo('App/Models/Account')
    }

    interestedAccount () {
        return this.belongsTo('App/Models/Account')
    }

    event () {
        return this.belongsTo('App/Models/Event')
    }

}

module.exports = InterestedAccount
