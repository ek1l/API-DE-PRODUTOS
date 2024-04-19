export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
}

export type TCreateProductBody = Omit<IProduct, 'id'>;

export type TUpdateProductBody = Partial<TCreateProductBody>;
