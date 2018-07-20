'use strict'

const Schema = use('Schema')

class GalleryLikeSchema extends Schema {
  up () {
    this.create('gallery_likes', (table) => {
      table.increments()
      table.integer('account_id').unsigned().references('id').inTable('accounts')
      table.integer('gallery_id').unsigned().references('id').inTable('galleries')
      table.timestamps()
    })
  }

  down () {
    this.drop('gallery_likes')
  }
}

module.exports = GalleryLikeSchema
