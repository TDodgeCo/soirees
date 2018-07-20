'use strict'

const Model = use('Model')

class Gallery extends Model {
    account () {
        return this.belongsTo('App/Models/Account')
    }

    images () {
        return this.hasMany('App/Models/GalleryImage')
    }
}

module.exports = Gallery
