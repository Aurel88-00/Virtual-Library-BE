import jwt from 'jsonwebtoken';

const tokenMaxAge : number= 2 * 24 * 60 * 60;

export const createToken = (id: string) => {
  return jwt.sign({id}, process.env.TOKEN_SECRET as string , {
    expiresIn: tokenMaxAge
  })
}