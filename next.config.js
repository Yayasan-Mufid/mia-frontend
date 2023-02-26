/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
  swDest: 'standalone',
});

const settings = { output: 'standalone' };

module.exports =
  process.env.NODE_ENV === 'development' ? settings : withPWA(settings);
