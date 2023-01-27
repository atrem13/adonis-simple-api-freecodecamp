import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
export default class AuthController {
    public async login({request, auth}: HttpContextContract){
        const email = request.input('email')
        const password = request.input('password')
        const token = await auth.use('api').attempt(email, password, {
            expiresIn: "1 days",   
        })
        return token.toJSON()
    }

    
}
