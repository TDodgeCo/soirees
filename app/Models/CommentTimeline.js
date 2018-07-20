'use strict'

const Model = use('Model')

class CommentTimeline extends Model {
    user () {
        return this.belongsTo('App/Models/User')
    }
}

module.exports = CommentTimeline
