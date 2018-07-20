'use strict'

const Model = use('Model')

class TimelinePostLike extends Model {
    /**
     * Timeline post likes belong to one user.
     */
    user () {
        return this.belongsTo('App/Models/User')
    }
}

module.exports = TimelinePostLike
