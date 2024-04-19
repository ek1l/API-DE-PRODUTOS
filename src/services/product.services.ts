import { prisma } from '../database/prisma';
import {
  IProduct,
  TCreateProductBody,
  TUpdateProductBody,
} from '../interfaces/product.interfaces';

export class ProductServices {
  public create = async (data: TCreateProductBody): Promise<IProduct> => {
    const newProduct = await prisma.product.create({ data });
    return newProduct;
  };

  public getMany = async (): Promise<IProduct[]> => {
    const productList = await prisma.product.findMany();
    return productList;
  };

  public update = async (
    body: TUpdateProductBody,
    updatingId: string,
  ): Promise<IProduct> => {
    const updateProduct = await prisma.product.update({
      data: body,
      where: { id: updatingId },
    });
    return updateProduct;
  };

  public delete = async (id: string): Promise<void> => {
    await prisma.product.delete({ where: { id } });
    return;
  };
}
