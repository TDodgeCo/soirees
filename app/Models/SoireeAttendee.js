'use strict'

const Model = use('Model')

class SoireeAttendee extends Model {
    account () {
        return this.belongsTo('App/Models/Account')
    }

    soiree () {
        return this.belongsTo('App/Models/Soiree')
    }
}

module.exports = SoireeAttendee
