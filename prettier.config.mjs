/** @type {import('prettier').Config} */
const overridableDefaults = {
  endOfLine: 'lf',
  tabWidth: 2,
  printWidth: 80,
  useTabs: true,
};

/** @type {import('prettier').Config} */
const config = {
  ...overridableDefaults,
  singleQuote: true,
  plugins: ['prettier-plugin-packagejson'],
};

export default config;
