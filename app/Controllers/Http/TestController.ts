import User from 'App/Models/User'

export default class TestController {
  public async index() {
    const user = new User()
    user.username = Math.random().toString()
    await user.save()

    const userData = await User.all()
    return userData
  }
}
