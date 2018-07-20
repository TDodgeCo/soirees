'use strict'

const Hash = use('Hash')
const Model = use('Model')

class User extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens () {
    return this.hasMany('App/Models/Token')
  }

  /**
   * A timeline post is associated with a specific user in an account.
   */
  timelinePosts () {
    return this.hasMany('App/Models/TimelinePost')
  }

  /**
   * A gallery image comment is associated with a specific user in an account.
   */
  galleryImageComment () {
    return this.hasMany('App/Models/CommentGalleryImage')
  }

  /**
   * A timeline comment is associated with a specific user in an account.
   */
  timelinePostComment () {
    return this.hasMany('App/Models/CommentTimeline')
  }

  /**
   * An event comment is associated with a specific user in an account.
   */
  eventComment () {
    return this.hasMany('App/Models/CommentEvent')
  }

  /**
   * A message is associated with a specific user in an account.
   */
  message () {
    return this.hasMany('App/Models/Message')
  }
  
  /**
   * A user belongs to a partnership, which belongs to an account. 
   */
  partner () {
    return this.belongsTo('App/Models/Partner')
  }

}

module.exports = User
