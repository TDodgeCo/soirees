'use strict'

const Schema = use('Schema')

class TimelinePostLikeSchema extends Schema {
  up () {
    this.create('timeline_post_likes', (table) => {
      table.increments()
      table.integer('account_id').unsigned().references('id').inTable('accounts')
      table.integer('timeline_post_id').unsigned().references('id').inTable('timeline_posts')
      table.timestamps()
    })
  }

  down () {
    this.drop('timeline_post_likes')
  }
}

module.exports = TimelinePostLikeSchema
