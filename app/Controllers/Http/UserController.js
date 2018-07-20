'use strict'
const User = use('App/Models/User')

class UserController {
  async signup ({ request, auth, response }) {
    const userData = request.only(['username', 'email', 'password'])

    try {
      const user = await User.create(userData)
      const token = await auth.generate(user)
    } catch (err) {
      console.log(err)
    }
  }
}

module.exports = UserController
