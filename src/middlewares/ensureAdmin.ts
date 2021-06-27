import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";

export const ensureAdmin = async (
  req: Request,
  resp: Response,
  next: NextFunction
) => {
  const { user_id } = req;

  const usersRepositories = getCustomRepository(UserRepositories);

  const { admin } = await usersRepositories.findOne(user_id);

  const validateAdmin = admin
    ? next()
    : resp.status(401).json({
        error: "Unauthorized",
      });

  return validateAdmin;
};
