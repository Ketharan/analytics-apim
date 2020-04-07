
module.exports = {
    transform: {
        '^.+\\.jsx$': 'babel-jest',
        '^.+\\.js$': 'babel-jest',
    },
    moduleNameMapper: {
        '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
    },
    testPathIgnorePatterns: ['<rootDir>/*/node_modules/', '<rootDir>/*/dist/'],
    transformIgnorePatterns: ['<rootDir>/*/node_modules/'],

    // Automatically clear mock calls and instances between every test
    clearMocks: true,

    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: false,

    // An array of glob patterns indicating a set of files for which coverage information should be collected

    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',

    // A list of reporter names that Jest uses when writing coverage reports
    coverageReporters: ['json', 'text', 'lcov', 'clover', 'html'],

    // The test environment that will be used for testing,
    // Default is JSDOM https://github.com/jest-community/vscode-jest/issues/165
    // testEnvironment: 'node',
};
