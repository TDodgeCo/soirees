'use strict'

const Model = use('Model')

class Soiree extends Model {
    event () {
       return this.belongsTo('App/Models/Event') 
    }

    attendee () {
        return this.hasMany('App/Models/SoireeAttendee')
    }
}

module.exports = Soiree
