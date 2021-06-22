import  { getCustomRepository } from 'typeorm'
import { UserRepositories } from "../repositories/UserRepositories";

interface IuserRequest {
  name: string,
  email: string,
  admin?: boolean
}

export class CreateUserService {
  public async execute({name, email, admin}: IuserRequest) {
    const usersRepository = getCustomRepository(UserRepositories)

    if(!email) throw new Error('Email Incorrect')


    const userAlreadyExists = await usersRepository.findOne({
      email
    })

    if(userAlreadyExists) throw new Error('User already exists')

    const user = usersRepository.create({
      name,
      email,
      admin
    })

    await usersRepository.save(user)

    return user

  }
}