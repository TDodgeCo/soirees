'use strict'

const Model = use('Model')

class EventView extends Model {
    event () {
        return this.belongsTo('App/Models/Event')
    }
}

module.exports = EventView
