import { prisma } from '../../database/prisma';
import {
  productCreateBodyMock,
  productUpdateBodyMock,
} from '../__mocks__/product.mock';
import { request } from '../utils/request';

describe('Integration test: Update product', () => {
  test('should be able to update product successfully', async () => {
    const product = await prisma.product.create({
      data: productCreateBodyMock,
    });
    const data = await request
      .patch(`/products/${product.id}`)
      .send(productUpdateBodyMock)
      .expect(200)
      .then((data) => data.body);
    const newProduct = { ...product, ...productUpdateBodyMock };
    expect(data).toStrictEqual(newProduct);
  });

  test("should throw error when product doesn't exist", async () => {
    const data = await request
      .patch('/products/2645e690-9bf0-4d2d-a6ad-1dac10cfd282')
      .expect(404)
      .then((data) => data.body);
    expect(data.message).toBe('Product not found');
  });
});
