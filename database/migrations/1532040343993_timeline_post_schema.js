'use strict'

const Schema = use('Schema')

class TimelinePostSchema extends Schema {
  up () {
    this.create('timeline_posts', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('account_id').unsigned().references('id').inTable('accounts')
      table.text('body').notNullable()
      table.string('image_path').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('timeline_posts')
  }
}

module.exports = TimelinePostSchema
