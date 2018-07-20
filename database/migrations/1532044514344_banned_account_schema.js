'use strict'

const Schema = use('Schema')

class BannedAccountSchema extends Schema {
  up () {
    this.create('banned_accounts', (table) => {
      table.increments()
      table.integer('account_id').unsigned().references('id').inTable('accounts')
      table.timestamps()
    })
  }

  down () {
    this.drop('banned_accounts')
  }
}

module.exports = BannedAccountSchema
