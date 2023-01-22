import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken';
import { extractToken } from '../utils/extractToken';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = extractToken(req)
    if (token) {
      jwt.verify(token, process.env.TOKEN_SECRET as string);
    }
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Authorization failed!'
    })
  }


}