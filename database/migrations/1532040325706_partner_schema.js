'use strict'

const Schema = use('Schema')

class PartnerSchema extends Schema {
  up () {
    this.create('partners', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('account_id').unsigned().references('id').inTable('accounts')
      table.timestamps()
    })
  }

  down () {
    this.drop('partners')
  }
}

module.exports = PartnerSchema
