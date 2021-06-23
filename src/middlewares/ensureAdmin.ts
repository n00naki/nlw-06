import {Request, Response, NextFunction } from 'express'

export const ensureAdmin = (req: Request, resp: Response, next: NextFunction) => {

  const admin = true

  const validateAdmin = admin ? next() : resp.status(401).json({
    error: 'Unauthorized'
  })

  return validateAdmin

}