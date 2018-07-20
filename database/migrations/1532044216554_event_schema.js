'use strict'

const Schema = use('Schema')

class EventSchema extends Schema {
  up () {
    this.create('events', (table) => {
      table.increments()
      table.integer('account_id').unsigned().references('id').inTable('accounts')
      table.string('header_image').nullable()
      table.string('title').notNullable()
      table.text('body').nullable()
      table.string('location').notNullable()
      table.date('date').notNullable()
      table.string('time').nullable()
      table.boolean('private').defaultTo(false)
      table.string('type').notNullable().defaultTo('rendezvous')
      table.timestamps()
    })
  }

  down () {
    this.drop('events')
  }
}

module.exports = EventSchema
