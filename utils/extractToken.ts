import { Request } from "express";

export const extractToken = (req: Request) => {
    const authHeader = req.headers.authorization as string;
    const token = authHeader.replace('Bearer ', '')
    return token;
}