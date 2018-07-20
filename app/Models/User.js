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
   * A user belongs to one account. An account can have many users.
   */
  account () {
    return this.belongsTo('App/Models/Account')
  }

  /**
   * A user is a partner. 
   */
  partner () {
    return this.belongsTo('App/Models/Partner')
  }
  /**
   * A user has many timeline posts. A timeline post is associated with a specific user in an account.
   */
  timelinePosts () {
    return this.hasMany('App/Models/TimelinePost')
  }

  /**
   * A user has many gallery image comments. A gallery image comment is associated with a specific user in an account.
   */
  galleryImageComments () {
    return this.hasMany('App/Models/CommentGalleryImage')
  }

  /**
   * A user has many timeline comments. A timeline comment is associated with a specific user in an account.
   */
  timelinePostComments () {
    return this.hasMany('App/Models/CommentTimeline')
  }

  /**
   * A user has many event comments. An event comment is associated with a specific user in an account.
   */
  eventComments () {
    return this.hasMany('App/Models/CommentEvent')
  }

  /**
   * A user can like many timeline posts. 
   */
  timelinePostLikes () {
    return this.hasMany('App/Models/TimelinePostLike')
  }

  /**
   * A user can like many gallery images.
   */
  galleryLikes () {
    return this.hasMany('App/Models/GalleryLike')
  }

  /**
   * A user can like many gallery images.
   */
  galleryImageLikes () {
    return this.hasMany('App/Models/GalleryImageLike')
  }

  /**
   * A user has many messages. A message is associated with a specific user in an account.
   */
  messages () {
    return this.hasMany('App/Models/Message')
  }
  
}

module.exports = User
