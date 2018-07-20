'use strict'

const Schema = use('Schema')

class PartnerSchema extends Schema {
  up () {
    this.create('partners', (table) => {
      table.increments()
      table.integer('user_id').unsigned().notNullable()
      table.integer('account_id').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('partners')
  }
}

module.exports = PartnerSchema
