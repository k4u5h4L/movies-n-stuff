if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return i[e]||(a=new Promise((async a=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},a=(a,i)=>{Promise.all(a.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(a)};self.define=(a,s,c)=>{i[a]||(i[a]=Promise.resolve().then((()=>{let i={};const r={uri:location.origin+a.slice(1)};return Promise.all(s.map((a=>{switch(a){case"exports":return i;case"module":return r;default:return e(a)}}))).then((e=>{const a=c(...e);return i.default||(i.default=a),i}))})))}}define("./sw.js",["./workbox-a8b10d99"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/YQb-1RB4T0XTP4S4u_oVm/_buildManifest.js",revision:"YQb-1RB4T0XTP4S4u_oVm"},{url:"/_next/static/YQb-1RB4T0XTP4S4u_oVm/_ssgManifest.js",revision:"YQb-1RB4T0XTP4S4u_oVm"},{url:"/_next/static/chunks/04d5de87d289ea85bb3bb27ea51aa55b94ce97a8.55167e45bd553b7f2da7.js",revision:"YQb-1RB4T0XTP4S4u_oVm"},{url:"/_next/static/chunks/18.4e303e99c42d4d858619.js",revision:"YQb-1RB4T0XTP4S4u_oVm"},{url:"/_next/static/chunks/4.f76f71b0cc59e335717c.js",revision:"YQb-1RB4T0XTP4S4u_oVm"},{url:"/_next/static/chunks/5c3107d6dc77ceedd76b0a9670cbff2efeff45da.b5b77fca48ac7e11d931.js",revision:"YQb-1RB4T0XTP4S4u_oVm"},{url:"/_next/static/chunks/695f24f93b83931ec9f71f4768ffbcae4cbe29bc.e6ebd7df08e27610564c.js",revision:"YQb-1RB4T0XTP4S4u_oVm"},{url:"/_next/static/chunks/framework.36e5d30ecc6dc4b81c51.js",revision:"YQb-1RB4T0XTP4S4u_oVm"},{url:"/_next/static/chunks/main-ade89e48ba1f37702869.js",revision:"YQb-1RB4T0XTP4S4u_oVm"},{url:"/_next/static/chunks/pages/404-3becf31c97a7167a8a1b.js",revision:"YQb-1RB4T0XTP4S4u_oVm"},{url:"/_next/static/chunks/pages/_app-13226bba52c1cc81ce92.js",revision:"YQb-1RB4T0XTP4S4u_oVm"},{url:"/_next/static/chunks/pages/_error-b5b0d8993a5a647216ad.js",revision:"YQb-1RB4T0XTP4S4u_oVm"},{url:"/_next/static/chunks/pages/faq-90b70378c1c7178053f8.js",revision:"YQb-1RB4T0XTP4S4u_oVm"},{url:"/_next/static/chunks/pages/index-d8e4431f0644257c711d.js",revision:"YQb-1RB4T0XTP4S4u_oVm"},{url:"/_next/static/chunks/pages/login-9d9787d498c58b3be40a.js",revision:"YQb-1RB4T0XTP4S4u_oVm"},{url:"/_next/static/chunks/pages/login/verify-request-081678e7bac97a1aea06.js",revision:"YQb-1RB4T0XTP4S4u_oVm"},{url:"/_next/static/chunks/pages/search-eb9119581dd7c7bbdfff.js",revision:"YQb-1RB4T0XTP4S4u_oVm"},{url:"/_next/static/chunks/pages/user-930e0905170c6106a2c2.js",revision:"YQb-1RB4T0XTP4S4u_oVm"},{url:"/_next/static/chunks/pages/video/%5Bid%5D-b978cd5139a66c732afa.js",revision:"YQb-1RB4T0XTP4S4u_oVm"},{url:"/_next/static/chunks/polyfills-79441a336eb07a143a5d.js",revision:"YQb-1RB4T0XTP4S4u_oVm"},{url:"/_next/static/chunks/webpack-763ccb88f033031152fe.js",revision:"YQb-1RB4T0XTP4S4u_oVm"},{url:"/_next/static/css/90daea41c3c44b01a2ad.css",revision:"YQb-1RB4T0XTP4S4u_oVm"},{url:"/_next/static/media/owl.video.play.7f01b07148f205f6e8258e92bbf652d9.png",revision:"YQb-1RB4T0XTP4S4u_oVm"},{url:"/_next/static/media/paper-plane.93920ac656cdce82d4f8747242400026.png",revision:"YQb-1RB4T0XTP4S4u_oVm"},{url:"/_next/static/media/play.ab48bf7d5abc875a8e8b16e3d7db087a.png",revision:"YQb-1RB4T0XTP4S4u_oVm"},{url:"/_next/static/media/preloader.b7740e350ccfe1a43fe46ced5f1ff345.svg",revision:"YQb-1RB4T0XTP4S4u_oVm"},{url:"/_next/static/media/themify9f24.29b39089170885ae29671a8c66d85a9f.woff",revision:"YQb-1RB4T0XTP4S4u_oVm"},{url:"/_next/static/media/themify9f24.9bad94440d49256265a5b2305ec42d63.eot",revision:"YQb-1RB4T0XTP4S4u_oVm"},{url:"/_next/static/media/themify9f24.eda8b94308c6f538f04a8056ed761a57.ttf",revision:"YQb-1RB4T0XTP4S4u_oVm"},{url:"/_next/static/media/themify9f24.f0fc8c798eac5636249c4ea287832422.svg",revision:"YQb-1RB4T0XTP4S4u_oVm"},{url:"/_next/static/media/themifyd41d.9bad94440d49256265a5b2305ec42d63.eot",revision:"YQb-1RB4T0XTP4S4u_oVm"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/fonts/themify9f24.eot",revision:"2c454669bdf3aebf32a1bd8ac1e0d2d6"},{url:"/fonts/themify9f24.svg",revision:"9c8e96ecc7fa01e6ebcd196495ed2db5"},{url:"/fonts/themify9f24.ttf",revision:"e23a7dcaefbde4e74e263247aa42ecd7"},{url:"/fonts/themify9f24.woff",revision:"a1ecc3b826d01251edddf29c3e4e1e97"},{url:"/fonts/themifyd41d.eot",revision:"2c454669bdf3aebf32a1bd8ac1e0d2d6"},{url:"/icons/apple-icon-180.png",revision:"173cc285cd7b40acfc2beadab836b8d3"},{url:"/icons/apple-splash-1125-2436.jpg",revision:"9304029e334f030a1735e908a917eb86"},{url:"/icons/apple-splash-1136-640.jpg",revision:"2e650383b3dea5928c1ac8c678d4a3d4"},{url:"/icons/apple-splash-1170-2532.jpg",revision:"96604d8b8ea66fc0eaeac1b846e902bd"},{url:"/icons/apple-splash-1242-2208.jpg",revision:"e69df1bc8ee359318b6e5c104965fc40"},{url:"/icons/apple-splash-1242-2688.jpg",revision:"ea01d56d0c64d9726f78f83be21c6e7b"},{url:"/icons/apple-splash-1284-2778.jpg",revision:"69cc75766a728ce90b752adb66351ac6"},{url:"/icons/apple-splash-1334-750.jpg",revision:"2b061fe84a235d49451a7fc577b6879f"},{url:"/icons/apple-splash-1536-2048.jpg",revision:"50ea0555ee97ce000a8f22f3a354c495"},{url:"/icons/apple-splash-1620-2160.jpg",revision:"0fe32aaa5d9dacc358543398c38e0eb5"},{url:"/icons/apple-splash-1668-2224.jpg",revision:"a22fbb4685f8c34ba15797200699208f"},{url:"/icons/apple-splash-1668-2388.jpg",revision:"d6ea1f7522379c078b6b84ae0d54404d"},{url:"/icons/apple-splash-1792-828.jpg",revision:"0acbf94eb49379372f876d7f74be9295"},{url:"/icons/apple-splash-2048-1536.jpg",revision:"dcd179ba4962510765f3a80a18bcef8d"},{url:"/icons/apple-splash-2048-2732.jpg",revision:"1754de2048722097df6d38f087ac62f1"},{url:"/icons/apple-splash-2160-1620.jpg",revision:"401622c588d7718d951f4b2d6c160514"},{url:"/icons/apple-splash-2208-1242.jpg",revision:"426d2a6b422df0452098b72ee36853b3"},{url:"/icons/apple-splash-2224-1668.jpg",revision:"fb3b2515abe7f0d429e1bf812de6682b"},{url:"/icons/apple-splash-2388-1668.jpg",revision:"c692bf2c66985d30ef079cfea24a6e61"},{url:"/icons/apple-splash-2436-1125.jpg",revision:"4432ca4d4dfb7d00bdc9ac347679977c"},{url:"/icons/apple-splash-2532-1170.jpg",revision:"67aa06e1917eb6b92253cf560593a9ee"},{url:"/icons/apple-splash-2688-1242.jpg",revision:"f2e93a0973c3501813cd98de42efe17c"},{url:"/icons/apple-splash-2732-2048.jpg",revision:"a749f589d06a226ebf78a58fc2baec66"},{url:"/icons/apple-splash-2778-1284.jpg",revision:"795298d50444bdf2ff79c787116c0fec"},{url:"/icons/apple-splash-640-1136.jpg",revision:"ab27218be336ea975170a4d23627d53a"},{url:"/icons/apple-splash-750-1334.jpg",revision:"458e2dbdcff300d59d2a9da2aa027ad5"},{url:"/icons/apple-splash-828-1792.jpg",revision:"40e8a7398c9252a69a4d9acc2e1d1dad"},{url:"/icons/manifest-icon-192.png",revision:"f650130a3d2d20634cfd5fbffa735c8f"},{url:"/icons/manifest-icon-512.png",revision:"709d1b4ed7d77ed2de59a88b0d89dda2"},{url:"/images/b-2.png",revision:"f355fc5930e8fa335ae0fbbb62cbf881"},{url:"/images/b-3.png",revision:"857b04f5f2340491943c695c0601e05c"},{url:"/images/b-4.png",revision:"2aa726e5f9074c7b19b5c5e8af1cf792"},{url:"/images/b-5.png",revision:"2495e97a3f31c0bf0b242e2605280151"},{url:"/images/b-6.png",revision:"7b4fc5307b5510062e9622e987288824"},{url:"/images/banner-2.jpg",revision:"57d2f79764b3f5f81e558cda4ce6fd82"},{url:"/images/banner-3.jpg",revision:"001c4c64904937ebf371e8614f798fe0"},{url:"/images/banner-4.jpg",revision:"b8b9d82631fda7c8b2aeab5a41d5f339"},{url:"/images/banner-im.png",revision:"757e674bff8b4e242f63bfb0230c4a4b"},{url:"/images/default_profile_pic.png",revision:"d0964c1020f1ef7ebf28c401f6de56c5"},{url:"/images/download1.png",revision:"6d67faa4f8f24a5ee63be96ef8715055"},{url:"/images/download2.png",revision:"25a713f11e32f4db9e4fa659e4dc72cf"},{url:"/images/download3.png",revision:"1e57267c2fa2745d88d4a2b363219a49"},{url:"/images/download4.png",revision:"8853748509c8acff8ae7527d6334f8de"},{url:"/images/favicon.png",revision:"5e7a2d6f5613afcf63fdc83e6df72c05"},{url:"/images/gb1.png",revision:"7dccf97d059d75bdacc3b1d36c26a0bb"},{url:"/images/gb2.png",revision:"c33654b57a7bc0e57cca062be96b6aba"},{url:"/images/gb3.png",revision:"9cd0bac50228b91974046773f56fb65e"},{url:"/images/gb4.png",revision:"c7a5891fc423a3b020a5504aeeb542e3"},{url:"/images/icon-21.png",revision:"aeb8527907275a0106d1f4fbaeb3cee9"},{url:"/images/icon02.png",revision:"29b993e6671187b0af66c0b2769e5f71"},{url:"/images/icon142.png",revision:"8e6119ab165ba56445f9c0f5367e63b7"},{url:"/images/icons2.png",revision:"eae72084f6a26885dde6600fa345605e"},{url:"/images/landing-banner.png",revision:"4f7ea4db33ac144236e9f7a083238780"},{url:"/images/logo-blank.png",revision:"5e7a2d6f5613afcf63fdc83e6df72c05"},{url:"/images/logo-white.png",revision:"7ab35983f3cc29cd385e11dd6ee33f8b"},{url:"/images/logo.png",revision:"dcaa510faaac41b6f4a1612ab4526055"},{url:"/images/owl.video.play.html",revision:"a34ac19f4afae63adc5d2f7bc970c07f"},{url:"/images/paper-plane.png",revision:"39f88aa8a3117bdacb0b26c22691bd70"},{url:"/images/paper-ship.png",revision:"aac6581056e2b122c2726087617a8cd2"},{url:"/images/phone-2.png",revision:"40a107897d14d10cc1ee3d1f856ab2ad"},{url:"/images/phone-3.png",revision:"b75167a78f4f4e6258d37cef8a43405d"},{url:"/images/play.png",revision:"ad5810a03f534911d1b92c989671ba03"},{url:"/images/plus.png",revision:"65995ce3171acf2a162ddede6629ed17"},{url:"/images/preloader.svg",revision:"553fa6a0dc8e7dfe8540ba2079268993"},{url:"/images/quote-left.png",revision:"e667f275962d474d0b31dd8537e119f1"},{url:"/images/s-1.jpg",revision:"aed66b46da64fd62b49f78f2aebc38d5"},{url:"/images/s-10.jpg",revision:"c985fe3ebba0535154b747d8beb7f55e"},{url:"/images/s-11.jpg",revision:"899ccdc0f8beaf518d9e9bae94f880cd"},{url:"/images/s-12.jpg",revision:"39b0ffc6f7cfa0a7338c3c96a151b553"},{url:"/images/s-13.jpg",revision:"55411f7728d72546ccbcc15b64750769"},{url:"/images/s-14.jpg",revision:"c7aadcc5ac12aa5d9a0712a16c3390db"},{url:"/images/s-15.jpg",revision:"8dbc8375de1124e413f1c89d97f34829"},{url:"/images/s-16.jpg",revision:"ba165e0d62c81517a644f52a090d96a8"},{url:"/images/s-17.jpg",revision:"a3d636700be7c94f9cd9cfda144d5a5b"},{url:"/images/s-18.jpg",revision:"a33733c331cf345369eb9127165fe78f"},{url:"/images/s-2.jpg",revision:"fc0e4604bfcc2726a4dde19d91fb5775"},{url:"/images/s-3.jpg",revision:"7940385da770fa2e9376cb0289f08dff"},{url:"/images/s-4.jpg",revision:"95791c6c3676a75324d855772d132ee8"},{url:"/images/s-5.jpg",revision:"50c2c7437ed0528fafbd79d6639fb592"},{url:"/images/s-6.jpg",revision:"784403b136e0066a7a2ccf8dfde07057"},{url:"/images/s-7.jpg",revision:"1310a9a5f64839d66a5e95dc2851177d"},{url:"/images/s-8.jpg",revision:"c6200c2d53cf5d06831f03026481e7a7"},{url:"/images/s-9.jpg",revision:"d84ecb0c9c43f8588b2f3da83fb03735"},{url:"/images/s1.jpg",revision:"a40aba9f46d83767c13ddf6dcd390dae"},{url:"/images/s10.jpg",revision:"8b785d0263edc596cacc3a9846e0c7c5"},{url:"/images/s11.jpg",revision:"a82333601bdcb1a095a999581104d154"},{url:"/images/s12.jpg",revision:"557a64e86cc79ed0a10f1d2490b6a93d"},{url:"/images/s13.jpg",revision:"7d327f62d38c87d1ba9f45a676ae76b8"},{url:"/images/s14.jpg",revision:"6f79d09d99276e89e7899ca210f7d9eb"},{url:"/images/s15.jpg",revision:"62fdd4d7ae1aa91bb25eec7bfc15ce5a"},{url:"/images/s16.jpg",revision:"5a22fd922e3c001e615fe6772113a78f"},{url:"/images/s17.png",revision:"0decd55f54886c1a06ec7bdcbea0edd8"},{url:"/images/s18.jpg",revision:"745ea897fbed2d72a64f3d5fe832356a"},{url:"/images/s19.jpg",revision:"2e6ee3ee0c035c3a719786952eed213b"},{url:"/images/s2.jpg",revision:"613d0527bb302aaba71c0b941a29b464"},{url:"/images/s20.jpg",revision:"04df22bab1049b4218bfe225811d0fa9"},{url:"/images/s3.jpg",revision:"9b99cccc268179f40de5595893e78cc1"},{url:"/images/s4.jpg",revision:"8febd7ad1d34080c7bd89070f6c71667"},{url:"/images/s5.jpg",revision:"2c003ad6c66829cd2ebf770aa378a47b"},{url:"/images/s6.jpg",revision:"3c327da22877d6596dff625993d13b24"},{url:"/images/s7.jpg",revision:"5198c6d82e837dcc0f031661adbaed1e"},{url:"/images/s8.jpg",revision:"714ac221ca6a74c5c2ce12e4ae0cfeff"},{url:"/images/s9.jpg",revision:"bc9a17dd4803e114e66284e0a5149999"},{url:"/images/settings.png",revision:"8183a47c3aa1b5aba5e18be5505c6ae4"},{url:"/images/team1.jpg",revision:"a4a554569673b8206a1519ab80f380b3"},{url:"/images/team2.jpg",revision:"675e42cddf10d159d86249b9980eb0bf"},{url:"/images/team3.jpg",revision:"4a6ac4777de475b15710f66d7972a0a4"},{url:"/images/team4.jpg",revision:"d591b1ec315b9b6c944a25087ee020d5"},{url:"/images/team5.jpg",revision:"0e8cbbb6c177843ecf033d90c5f59717"},{url:"/images/team6.jpg",revision:"7b71a28d408cf70a75437834bd5a2c1b"},{url:"/images/team7.jpg",revision:"d7b06818b53b997ba2dd1c2d9acddb44"},{url:"/images/team8.jpg",revision:"a392e8843585951fcc1babd5897e1154"},{url:"/images/user-8.png",revision:"380f031d9fbeea6fa256732a5acd0cdc"},{url:"/images/video1.mp4",revision:"f368f535ee4b6c0df36afff0a90fb3a4"},{url:"/images/video3.mp4",revision:"83657cb790eb37cfe3b092dc98b53cfc"},{url:"/js/jquery.easing.1.3.js",revision:"6516449ed5089677ed3d7e2f11fc8942"},{url:"/js/plugin.js",revision:"1fcb66a2866f4ca34417a1392d9a8df0"},{url:"/js/scripts.js",revision:"333ff3cc5ed2ce8b502c38a86cd9b920"},{url:"/logo.png",revision:"1949a408250650bc275085ce24ca143e"},{url:"/manifest.json",revision:"6a8855872ccc5d91a7d6c6cbecef9a33"},{url:"/vendor/bootstrap/js/bootstrap.bundle.min.js",revision:"a5334e475209f965b4862f3bedf32618"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
