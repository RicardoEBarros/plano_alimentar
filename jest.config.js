module.exports = {
  roots: ["<rootDir>/src", "<rootDir>/test"],
  testEnvironment: "node",
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts",
    "!**/interfaces/**",
    "!**/test/**",
    "!**/*.interfaces.ts",
    "!**/schema/**"
  ],
  coverageDirectory: "coverage",
  transform: {
    ".+\\.ts$": "ts-jest"
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1"
  },
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"]
}
