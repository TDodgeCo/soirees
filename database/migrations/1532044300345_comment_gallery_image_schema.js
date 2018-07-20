'use strict'

const Schema = use('Schema')

class CommentGalleryImageSchema extends Schema {
  up () {
    this.create('comment_gallery_images', (table) => {
      table.increments()
      table.integer('account_id').unsigned().references('id').inTable('accounts')
      table.integer('gallery_image_id').unsigned().references('id').inTable('gallery_images')
      table.text('comment')
      table.timestamps()
    })
  }

  down () {
    this.drop('comment_gallery_images')
  }
}

module.exports = CommentGalleryImageSchema
