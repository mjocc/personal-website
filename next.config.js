const { withPlaiceholder } = require('@plaiceholder/next');
const withTM = require('next-transpile-modules')(['tsparticles-preset-links']);

module.exports = withTM(
  withPlaiceholder({
    trailingSlash: true,
    reactStrictMode: true,
  })
);
