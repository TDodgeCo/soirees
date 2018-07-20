'use strict'

const Schema = use('Schema')

class CommentEventSchema extends Schema {
  up () {
    this.create('comment_events', (table) => {
      table.increments()
      table.integer('account_id').unsigned().references('id').inTable('accounts')
      table.integer('event_id').unsigned().references('id').inTable('events')
      table.text('comment')
      table.timestamps()
    })
  }

  down () {
    this.drop('comment_events')
  }
}

module.exports = CommentEventSchema
