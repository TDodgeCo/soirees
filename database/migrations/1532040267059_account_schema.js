'use strict'

const Schema = use('Schema')

class AccountSchema extends Schema {
  up () {
    this.create('accounts', (table) => {
      table.increments()
      table.string('account_name', 80).notNullable()
      table.string('location_zip').notNullable()
      table.text('avatar').nullable() // system path to image
      table.timestamps()
    })
  }

  down () {
    this.drop('accounts')
  }
}

module.exports = AccountSchema
