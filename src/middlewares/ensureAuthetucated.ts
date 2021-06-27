import { Request, Response, NextFunction, response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export const ensureAutheticated = (
  req: Request,
  resp: Response,
  next: NextFunction
) => {
  const authToken = req.headers.authorization;

  if (!authToken) return resp.status(401).end();

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(
      token,
      "fba0c363fb347d4859c5ea379ee46569"
    ) as IPayload;

    req.user_id = sub;

    return next();
  } catch (error) {
    return resp.status(401).end();
  }
};
