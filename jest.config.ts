/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {

    // Automatically clear mock calls, instances, contexts and results before every test
    clearMocks: true,

    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
     },
  
    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: true,
  
    // An array of glob patterns indicating a set of files for which coverage information should be collected
    // collectCoverageFrom: undefined,
  
    // The directory where Jest should output its coverage files
    coverageDirectory: "coverage",
  
    testPathIgnorePatterns: [
      '<rootDir>/node_modules/',
    ],
  
    collectCoverageFrom: [ '<rootDir>/src/components/**/**.tsx',],
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
      },
    },
  
    // Indicates which provider should be used to instrument code for coverage
    coverageProvider: "v8",
  
    transform: {
      "^.+\\.(t|j)sx?$": [
        "@swc/jest",
        {
          jsc: {
            parser: {
              syntax: "typescript",
              tsx: true,
              decorators: true,
            },
            keepClassNames: true,
            transform: {
              legacyDecorator: true,
              decoratorMetadata: true,
              react: {
                runtime: "automatic",
              },
            },
          },
          module: {
            type: "es6",
            noInterop: false,
          },
        },
      ],
    },
  
    // The test environment that will be used for testing
    testEnvironment: "jsdom",
  };
  