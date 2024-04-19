import { Request, Response } from 'express';
import { IProduct } from '../interfaces/product.interfaces';
import { ProductServices } from '../services/product.services';

export class ProductControllers {
  private productServices = new ProductServices();

  public create = async (
    req: Request,
    res: Response,
  ): Promise<Response<IProduct>> => {
    const product = await this.productServices.create(req.body);
    return res.status(201).json(product);
  };

  public getMany = async (
    _req: Request,
    res: Response,
  ): Promise<Response<IProduct[]>> => {
    const products = await this.productServices.getMany();
    return res.status(200).json(products);
  };

  public update = async (
    req: Request,
    res: Response,
  ): Promise<Response<IProduct>> => {
    const { id } = req.params;
    const product = await this.productServices.update(req.body, id);
    return res.status(200).json(product);
  };

  public delete = async (
    req: Request,
    res: Response,
  ): Promise<Response<void>> => {
    const { id } = req.params;
    await this.productServices.delete(id);
    return res.status(204).send();
  };
}
