import { NextFunction, Request, Response } from 'express';
import { prisma } from '../database/prisma';

export class IsProductIdValid {
  public static execute = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { id } = req.params;

    const product = await prisma.product.findFirst({
      where: {
        id,
      },
    });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return next();
  };
}
