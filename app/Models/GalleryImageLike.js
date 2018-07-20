'use strict'

const Model = use('Model')

class GalleryImageLike extends Model {
    user () {
        return this.belongsTo('App/Models/User')
    }

    image () {
        return this.belongsTo('App/Models/GalleryImage')
    }
}

module.exports = GalleryImageLike
