'use strict'

const Schema = use('Schema')

class InterestedAccountSchema extends Schema {
  up () {
    this.create('interested_accounts', (table) => {
      table.increments()
      table.integer('account_id').unsigned().references('id').inTable('accounts')
      table.integer('interested_account_id').unsigned().references('id').inTable('accounts')
      table.string('message').nullable()
      table.integer('event_id').unsigned().references('id').inTable('events')
      table.timestamps()
    })
  }

  down () {
    this.drop('interested_accounts')
  }
}

module.exports = InterestedAccountSchema
