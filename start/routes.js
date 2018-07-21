'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

Route.on('/').render('welcome')

// Misc - Protected Routes
Route.any('/avatar', 'MiscController.allow')
Route.any('/avatar/:key', 'MiscController.allow')
Route.any('/gallery', 'MiscController.allow')
Route.any('/gallery/:key', 'MiscController.allow')

Route.post('/signup', 'UserController.signup')
Route.post('/login', 'UserController.login')

/**
 * User specific routes
 */
Route.group(() => {
  Route.get('/me', 'UserController.me')
  // Route.get('/avatar')
  // Route.get('/avatar/:user')
  Route.put('/update_profile', 'UserController.updateProfile')
  Route.put('/update_avatar', 'UserController.updateAvatar')
})
  .prefix('user')
  .middleware(['auth:jwt'])


  // Test Shit
  Route.get('/test', 'TestController.test')
  Route.post('/test', 'UserController.updateAvatar')
