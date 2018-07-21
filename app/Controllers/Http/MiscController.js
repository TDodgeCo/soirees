'use strict'

class MiscController {
  allow ({ auth, response }) {
    if (!auth.current.user) {
      return response.status(400).json({
        status: 'error',
        message: 'You do not have permission to view this directory.'
      })
    }
    return response.status(200)
  }
}

module.exports = MiscController
