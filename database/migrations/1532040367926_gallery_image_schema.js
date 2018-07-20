'use strict'

const Schema = use('Schema')

class GalleryImageSchema extends Schema {
  up () {
    this.create('gallery_images', (table) => {
      table.increments()
      table.integer('gallery_id').unsigned().references('id').inTable('galleries')
      table.string('filename').notNullable()
      table.string('description').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('gallery_images')
  }
}

module.exports = GalleryImageSchema
