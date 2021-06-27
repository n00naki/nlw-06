import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";
import { classToPlain } from "class-transformer";

export class ListUsersService {
  public async execute() {
    const usersUserRepositorie = getCustomRepository(UserRepositories);

    const users = await usersUserRepositorie.find();

    return classToPlain(users);
  }
}
