import {
  IProduct,
  TCreateProductBody,
} from '../../interfaces/product.interfaces';

export const productDefaultExpects = (
  data: IProduct,
  expected: TCreateProductBody,
) => {
  expect(data).toBeDefined();
  expect(expected).toBeDefined();

  if (data && expected) {
    expect(data.name).toBe(expected.name);
    expect(data.description).toBe(expected.description);
    expect(data.price).toBe(expected.price);
  }
};
