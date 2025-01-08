const { pathsToModuleNameMapper } = require("ts-jest");

module.exports = {
  injectGlobals: false,
  roots: ['<rootDir>/tests', '<rootDir>/src'],
  preset: '@shelf/jest-mongodb',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!**/protocols/**',
    '!**/tests/**',
    '!**/*-protocols.ts'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '^@controllers/(.*)$': '<rootDir>/src/presentation/controllers/$1',
    '^@domain/(.*)$': '<rootDir>/src/domain/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@data/(.*)$': '<rootDir>/src/data/$1',
    '^@infra/(.*)$': '<rootDir>/src/infra/$1',
    '^@mocks/(.*)$': '<rootDir>/tests/mocks/$1'
  }
}