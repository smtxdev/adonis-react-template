import Route from '@ioc:Adonis/Core/Route'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

Route.get('test', 'TestController.index')

Route.get('*', async ({ view }: HttpContextContract) => {
  return view.render('app')
}).as('not_found')
