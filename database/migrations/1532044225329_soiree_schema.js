'use strict'

const Schema = use('Schema')

class SoireeSchema extends Schema {
  up () {
    this.create('soirees', (table) => {
      table.increments()
      table.integer('event_id').unsigned().references('id').inTable('events')
      table.integer('gallery_id').unsigned().references('id').inTable('galleries')
      table.timestamps()
    })
  }

  down () {
    this.drop('soirees')
  }
}

module.exports = SoireeSchema
