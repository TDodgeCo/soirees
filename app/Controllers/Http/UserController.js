'use strict'
const User = use('App/Models/User')
const Drive = use('Drive')
const Helpers = use('Helpers')

class UserController {

  async signup ({ request, auth, response }) {
    const userData = request.only(['username', 'email', 'password'])

    try {
      const user = await User.create(userData)
      const token = await auth.generate(user)
      return response.json({
        status: 'Success',
        data: token
      })
    } catch (err) {
      console.log(err)
      return response.status(400).json({
        status: 'Error',
        message: 'Something went wrong. Please try again.' + err
      })
    }
  }

  async login ({ request, auth, response }) {
    try {
      const token = await auth.attempt(
        request.input('email'),
        request.input('password')
      )
      return response.json({
        status: 'Success',
        data: token
      })
    } catch (err) {
      console.log(err)
      return response.status(400).json({
        status: 'Error',
        message: 'Invalid email/password'
      })
    }
  }

  async me ({ auth, response }) {
    const user = auth.current.user

    return response.json({
      status: 'Success',
      data: user
    })
  }

  async updateProfile ({ request, auth, response }) {
    try {
      const user = auth.current.user

      user.first_name = request.input('first_name')
      user.last_name = request.input('last_name')
      user.username = request.input('username')
      user.email = request.input('email')
      user.password = request.input('password')
      user.sex = request.input('sex')
      user.description = request.input('description')
      user.dob = request.input('dob')
      user.permissions = request.input('permissions')

      await user.save()

      return response.json({
        status: 'success',
        message: 'Profile updated!',
        data: user
      })
    } catch (err) {
      return response.status(400).json({
        status: 'error',
        message: 'There was a problem updating profile, please try again later. ' + err
      })
    }
  }

  async updateAvatar ({ request, auth, response }) {
    try {
      const user = auth.current.user
      const avatar = request.file('avatar', {
        types: ['image'],
        size: '2mb'
      })
      const avatarName = user.username
      const exists = await Drive.exists(avatarName + '.jpeg' || avatarName + '.png')
      if (!exists) {        
        await avatar.move(Helpers.publicPath('avatar/' + avatarName), (file) => {
          name: `${avatarName}.${file.subtype}`
        })
        if (!avatar.moved()) {
          return response.status(400).json({
            status: 'error',
            message: 'There was an error while attempting to move your avatar image. \nError: ' + avatar.error()
          })
        }
      }
      await Drive.delete(Helpers.publicPath('/avatar'))
      await avatar.move(Helpers.publicPath('avatar/' + avatarName), {
        name: avatarName + '.' + avatar.subtype
      })
    } catch (err) {
      console.log(err)
      return response.status(400).json({
        status: 'error',
        message: 'There was a problem updating avatar, please try again later. ' + err
      })
    }
  }

}

module.exports = UserController
