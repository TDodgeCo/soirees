'use strict'

const Schema = use('Schema')

class FriendSchema extends Schema {
  up () {
    this.create('friends', (table) => {
      table.increments()
      table.integer('account_id').unsigned().references('id').inTable('accounts')
      table.integer('friend_account_id').unsigned().references('id').inTable('accounts')
      table.timestamps()
    })
  }

  down () {
    this.drop('friends')
  }
}

module.exports = FriendSchema
