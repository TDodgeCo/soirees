'use strict'

const Model = use('Model')

class GalleryImage extends Model {
    gallery () {
        return this.belongsTo('App/Models/Gallery')
    }

    likes () {
        return this.hasMany('App/Models/GalleryImageLike')
    }
}

module.exports = GalleryImage
