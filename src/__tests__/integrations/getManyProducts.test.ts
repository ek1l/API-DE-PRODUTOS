import { prisma } from '../../database/prisma';
import { productCreateBodyListMock } from '../__mocks__/product.mock';
import { productDefaultExpects } from '../utils/productDefaultExpects';
import { request } from '../utils/request';

describe('Integration test: Create product', () => {
  test('should be able to get many  products successfully', async () => {
    await prisma.product.createMany({ data: productCreateBodyListMock });
    const data = await request
      .get('/products')
      .expect(200)
      .then((data) => data.body);

    expect(data).toHaveLength(productCreateBodyListMock.length);
    productDefaultExpects(data[0], productCreateBodyListMock[0]);
    productDefaultExpects(data[1], productCreateBodyListMock[1]);
  });
});
