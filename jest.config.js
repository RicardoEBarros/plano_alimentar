const { pathsToModuleNameMapper } = require("ts-jest");

module.exports = {
  roots: ['<rootDir>/tests', '<rootDir>/src'],
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
    '^@models/(.*)$': '<rootDir>/src/domain/models/$1',
    '^@usecases/(.*)$': '<rootDir>/src/domain/usecases/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@data/(.*)$': '<rootDir>/src/data/$1'
  }
}