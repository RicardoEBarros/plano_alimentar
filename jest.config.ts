/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

const config: Config = {
  testEnvironment: "jest-environment-node",
  roots: ["<rootDir>/src"],
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  transform: {
    ".+\\.ts$": "ts-jest"
  },
  coverageReporters: [
    "json",
    "text",
    "lcov",
    "clover"
  ],
};

export default config;
