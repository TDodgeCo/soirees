'use strict'

const Schema = use('Schema')

class BlockedUsersSchema extends Schema {
  up () {
    this.create('blocked_users', (table) => {
      table.increments()
      table.integer('account_id').unsigned().references('id').inTable('accounts')
      table.integer('blocked_account').unsigned().references('id').inTable('accounts')
      table.timestamps()
    })
  }

  down () {
    this.drop('blocked_users')
  }
}

module.exports = BlockedUsersSchema
