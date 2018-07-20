'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('first_name', 40).nullable()
      table.string('last_name', 40).nullable()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('sex', 10).notNullable()
      table.string('avatar').nullable() // system path to image
      table.text('description').nullable()
      table.date('dob').notNullable()
      table.integer('permissions').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
