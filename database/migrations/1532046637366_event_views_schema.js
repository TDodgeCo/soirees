'use strict'

const Schema = use('Schema')

class EventViewsSchema extends Schema {
  up () {
    this.create('event_views', (table) => {
      table.increments()
      table.integer('event_id').unsigned().references('id').inTable('events')
      table.integer('views').unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('event_views')
  }
}

module.exports = EventViewsSchema
