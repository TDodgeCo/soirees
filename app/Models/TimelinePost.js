'use strict'

const Model = use('Model')

class TimelinePost extends Model {
    /**
     * A timeline post belongs to a specific user
     */
    user () {
        return this.belongsTo('App/Models/User')
    }
}

module.exports = TimelinePost
