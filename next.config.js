module.exports = {
    future: {
        webpack5: true,
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
    env: {
        FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
        FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
        FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
        FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
        FIREBASE_MSG_SENDER_ID: process.env.FIREBASE_MSG_SENDER_ID,
        FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    },
};
