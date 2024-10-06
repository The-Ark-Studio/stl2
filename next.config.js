// module.exports = {
//   i18n: {
//     locales: ['en', 'ko'],
//     defaultLocale: 'en',
//   },
//   async redirects() {
//     return [
//       {
//         source: '/',
//         destination: '/en', // Chuyển hướng từ gốc sang ngôn ngữ mặc định
//         permanent: false,
//       },
//     ];
//   },
// };

const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withNextIntl(nextConfig);
