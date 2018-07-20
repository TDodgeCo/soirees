'use strict'

const Schema = use('Schema')

class CommercialSoireeSchema extends Schema {
  up () {
    this.create('commercial_soirees', (table) => {
      table.increments()
      table.integer('soiree_id').unsigned().references('id').inTable('soirees')
      table.string('promoter').notNullable()
      table.string('website').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('commercial_soirees')
  }
}

module.exports = CommercialSoireeSchema
