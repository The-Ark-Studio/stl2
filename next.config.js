module.exports = {
    i18n: {
        locales: ['en', 'ko'],
        defaultLocale: 'en',
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/en', // Chuyển hướng từ gốc sang ngôn ngữ mặc định
                permanent: false,
            },
        ];
    },
};
