'use strict'

const Schema = use('Schema')

class GallerySchema extends Schema {
  up () {
    this.create('galleries', (table) => {
      table.increments()
      table.integer('account_id').unsigned().references('id').inTable('accounts')
      table.string('directory_path').notNullable()
      table.string('description').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('galleries')
  }
}

module.exports = GallerySchema
