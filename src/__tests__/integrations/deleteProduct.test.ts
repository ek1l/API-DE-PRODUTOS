import { prisma } from '../../database/prisma';
import { productCreateBodyMock } from '../__mocks__/product.mock';
import { request } from '../utils/request';

describe('Integration test: delete product', () => {
  test('delete prodcut should work correctly', async () => {
    const product = await prisma.product.create({
      data: productCreateBodyMock,
    });
    await request.delete(`/products/${product.id}`).expect(204);
  });
  test("should throw error when product doesn't exist", async () => {
    const data = await request
      .delete('/products/2645e690-9bf0-4d2d-a6ad-1dac10cfd282')
      .expect(404)
      .then((data) => data.body);
    expect(data.message).toBe('Product not found');
  });
});
