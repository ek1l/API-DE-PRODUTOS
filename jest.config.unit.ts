export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/(units)/**/*.[jt]s?(x)'],
  setupFilesAfterEnv: ['./src/__tests__/__mocks__/prisma.ts'],
};
