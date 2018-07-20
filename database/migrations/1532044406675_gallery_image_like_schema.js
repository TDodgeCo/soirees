'use strict'

const Schema = use('Schema')

class GalleryImageLikeSchema extends Schema {
  up () {
    this.create('gallery_image_likes', (table) => {
      table.increments()
      table.integer('account_id').unsigned().references('id').inTable('accounts')
      table.integer('gallery_image_id').unsigned().references('id').inTable('gallery_images')
      table.timestamps()
    })
  }

  down () {
    this.drop('gallery_image_likes')
  }
}

module.exports = GalleryImageLikeSchema
