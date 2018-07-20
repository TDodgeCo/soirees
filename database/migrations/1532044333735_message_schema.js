'use strict'

const Schema = use('Schema')

class MessageSchema extends Schema {
  up () {
    this.create('messages', (table) => {
      table.increments()
      table.integer('sender_id').unsigned().references('id').inTable('accounts')
      table.integer('recipient_id').unsigned().references('id').inTable('accounts')
      table.text('message').notNullable()
      table.string('image_path').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('messages')
  }
}

module.exports = MessageSchema
