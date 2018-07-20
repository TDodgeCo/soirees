'use strict'

const Schema = use('Schema')

class SoireeAttendeeSchema extends Schema {
  up () {
    this.create('soiree_attendees', (table) => {
      table.increments()
      table.integer('account_id').unsigned().references('id').inTable('accounts')
      table.integer('soiree_id').unsigned().references('id').inTable('soirees')
      table.timestamps()
    })
  }

  down () {
    this.drop('soiree_attendees')
  }
}

module.exports = SoireeAttendeeSchema
