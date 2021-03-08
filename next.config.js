const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const withImages = require("next-images");

// module.exports = withPWA(withImages({
//     pwa: {
//         dest: "public",
//         runtimeCaching,
//     },
//     images: {
//         domains: [
//             "localhost",
//             "localhost:8000",
//             "192.158.1.7",
//             "192.158.1.7:3000",
//             "192.158.1.4:3000",
//             "192.158.1.4",
//         ],
//     },
// }));

module.exports = withImages({
    webpack: (config, { isServer }) => {
        if (isServer) {
            config.module.rules.push({
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 100000,
                        name: "[name].[ext]",
                    },
                },
            });
        }
        return config;
    },
    images: {
        domains: [
            "localhost",
            "localhost:8000",
            "192.158.1.7",
            "192.158.1.7:3000",
            "192.158.1.4:3000",
            "192.158.1.4",
        ],
    },
});
