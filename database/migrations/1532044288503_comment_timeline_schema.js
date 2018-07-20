'use strict'

const Schema = use('Schema')

class CommentTimelineSchema extends Schema {
  up () {
    this.create('comment_timelines', (table) => {
      table.increments()
      table.integer('account_id').unsigned().references('id').inTable('accounts')
      table.integer('timeline_post_id').unsigned().references('id').inTable('timeline_posts')
      table.text('comment')
      table.timestamps()
    })
  }

  down () {
    this.drop('comment_timelines')
  }
}

module.exports = CommentTimelineSchema
