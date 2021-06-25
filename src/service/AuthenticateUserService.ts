import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

export class AuthenticateUserService {
  public async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UserRepositories);
    const user = await usersRepositories.findOne({
      email,
    });

    if (!user) throw new Error("Email/Password incorrect");

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) throw new Error("Email/Password incorrect");

    const token = sign(
      {
        email: user.email,
      },
      "fba0c363fb347d4859c5ea379ee46569",
      { subject: user.id, expiresIn: "1d" }
    );

    return token;
  }
}
