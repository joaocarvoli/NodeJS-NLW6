import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { UsersRepositories } from "../repositories/UsersRepositories"
require('dotenv').config({ path: 'services'+'/.env' });


interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticationUserService {

  async execute({email, password}: IAuthenticateRequest){
    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories.findOne({email: email});

    if (!user) {
      throw new Error("Email/Password incorrect!")
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email/Password incorrect!")
    }

    const token = sign({
      email: user.email
    }, `${process.env.SECRET_KEY}`, {
      subject: user.id,
      expiresIn: "1d"
    })
    return token
  }
}

export { AuthenticationUserService }