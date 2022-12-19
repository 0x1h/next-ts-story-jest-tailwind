module.exports = {
  setupFilesAfterEnv: ['<rootDir>/config/setupTests.ts'],
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
  ],
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "^.+\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  coveragePathIgnorePatterns: [
    "./src/stories/",
    "./src/index.tsx",
    "./src/global.d.ts",
    "./src/react-app-env.d.ts",
    "./src/reportWebVitals.ts",
    "./src/utils/mocks/",
  ],
  collectCoverageFrom: [
    "./components/**/*.ts",
    "./components/**/*.tsx",
    "./pages/**/*.tsx",
    "./pages/**/*.ts",
    "!./components/**/*.stories.tsx",
    "!./**/*.story.tsx",
    "!./**/*.styled.ts*",
    "!./**/*.mock.ts",
    "!./**/index.ts",
    "!./**/*.types.ts",
    "!./**/*.spec.utils.ts*",
  ],
};
