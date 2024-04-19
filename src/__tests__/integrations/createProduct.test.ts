import { productCreateBodyMock } from '../__mocks__/product.mock';
import { productDefaultExpects } from '../utils/productDefaultExpects';
import { request } from '../utils/request';

describe('Integration test: Create product', () => {
  beforeEach(async () => {});
  test('should be able to create a product successfully', async () => {
    const data = await request
      .post('/products')
      .send(productCreateBodyMock)
      .expect(201)
      .then((data) => data.body);
    expect(data.id).toBeDefined();
    productDefaultExpects(data, productCreateBodyMock);
  });
});
