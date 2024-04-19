import { ProductServices } from '../../services/product.services';
import { prismaMock } from '../__mocks__/prisma';
import { productMock, productUpdateBodyMock } from '../__mocks__/product.mock';

describe('Unit test: Update products', () => {
  test('Update product should work correctly', async () => {
    const productService = new ProductServices();
    const newProductExpect = { ...productMock, ...productUpdateBodyMock };
    prismaMock.product.update.mockResolvedValue(newProductExpect);
    const data = await productService.update(productUpdateBodyMock, '1');
    expect(data).toStrictEqual(newProductExpect);
  });
});
