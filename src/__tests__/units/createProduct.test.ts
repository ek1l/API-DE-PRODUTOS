import { ProductServices } from '../../services/product.services';
import { prismaMock } from '../__mocks__/prisma';
import { productCreateBodyMock, productMock } from '../__mocks__/product.mock';


describe('Unit test: Create product', () => {
  test('Create prodcut should work correctly', async () => {
    prismaMock.product.create.mockResolvedValue(productMock);
    const productServices = new ProductServices();
    const data = await productServices.create(productCreateBodyMock);
    expect(data).toBe(productMock);
  });
});
