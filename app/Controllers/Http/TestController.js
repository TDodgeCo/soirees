'use strict'
const Helpers = use('Helpers')
const Drive = use('Drive')

class TestController {
  async test ({ request, response }) {
    const dir = await Drive.delete(Helpers.publicPath('/test'))
    const user = 'tim'
    const avatar = request.file('avatar', {
      types: ['image'],
      size: '2mb'
    })
    await avatar.move(Helpers.publicPath('avatar/' + user), {
      name: user + '.' + avatar.subtype
    })
    return response.json({
      dir: dir
    })
  }
}

module.exports = TestController
