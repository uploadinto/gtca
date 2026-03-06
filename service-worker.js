'use strict';

var precacheConfig = [["/assets/fonts/icones.svg","559294bc1c81bf117c485f10092f772f"],["/assets/fonts/icones.woff","f80f6094c9988bca2e9136a090df5ece"],["/assets/fonts/ubuntu-bold.svg","dc2c39658a399a2df4e4ea4dd0c72f9b"],["/assets/fonts/ubuntu-bold.woff","8db778e0b7163f4c87c8dc5105007045"],["/assets/fonts/ubuntu-light.svg","7aee2be11d63776e36ac31861c26b4e8"],["/assets/fonts/ubuntu-light.woff","607f9ef24ad84ab4609077703d2d3941"],["/assets/fonts/ubuntu-medium.svg","2143659bdd4f68b1c6175cd3059a20c6"],["/assets/fonts/ubuntu-medium.woff","79c635f37fc3b7886b38bbd7c77a4cd2"],["/assets/fonts/ubuntu-regular.svg","ac3a32bfbcf095104ec34764b7f79c20"],["/assets/fonts/ubuntu-regular.woff","a605707149a4891b6567297eee7367fd"],["/assets/images/alimentos.svg","fe42b5f1ada3799cf81917d4f62d3700"],["/assets/images/animais.svg","b50e841f827cdebcc52f2b3c00f66e13"],["/assets/images/avatar/0.svg","6f5fd3b8214c063cd8d4d75cd0071dc3"],["/assets/images/avatar/1.svg","c40d31397df65d8789018021604a1e14"],["/assets/images/avatar/10.svg","cf1ac926e7731cb6467bf1cea08c9135"],["/assets/images/avatar/11.svg","169327a6922c68bc80cd23cdf760f905"],["/assets/images/avatar/12.svg","54cce5184735d1a788ff6c993ee56088"],["/assets/images/avatar/13.svg","d027278fe3659d3113c53b682c8dc1f0"],["/assets/images/avatar/14.svg","820a526d45700d8c48eb42d16382ea7d"],["/assets/images/avatar/15.svg","2eef48cb783f4a70570c6632730d0c40"],["/assets/images/avatar/16.svg","e90e415dc0a529545ffafc5c73025d6c"],["/assets/images/avatar/17.svg","40bc3e45e5c880d4d54131b37ca010f4"],["/assets/images/avatar/18.svg","d44266d2a951429335aeef5c3c74e3cb"],["/assets/images/avatar/19.svg","0ea2663f93a163c44a255b2f397223e9"],["/assets/images/avatar/2.svg","8e7fbf10f35cc8e1cf5e7d2439a179e2"],["/assets/images/avatar/20.svg","11d636e75785c5558f2a18b236f5f495"],["/assets/images/avatar/21.svg","1081de8c279f5ca22dd47de25aac9af9"],["/assets/images/avatar/22.svg","a805806961a7c7cb235f240fb62e85f6"],["/assets/images/avatar/23.svg","f68ca483f5d22f582774bad358f91a2d"],["/assets/images/avatar/24.svg","e6463f3a0b97528b7af6a3302472f5d4"],["/assets/images/avatar/25.svg","62cca111698f7907287cd681e05d3569"],["/assets/images/avatar/26.svg","6412737fc3b80e6eec77f6d0be199cbb"],["/assets/images/avatar/27.svg","8c559f5b831df4387a55a908df0bb8f4"],["/assets/images/avatar/28.svg","a859cd8fdb0e20d40e886f22d9295231"],["/assets/images/avatar/29.svg","83fd87ac8c28b85f2257343ecec5d069"],["/assets/images/avatar/3.svg","1b0505eb3006129d02744d35003ce1a4"],["/assets/images/avatar/30.svg","86dc48d2429581868ca738c4e9418720"],["/assets/images/avatar/31.svg","73808313049d330b6b2266e8730f5d8f"],["/assets/images/avatar/32.svg","0e5c7d0b09e7c1a3b21bb8f2e264fb7f"],["/assets/images/avatar/33.svg","b89e01a0ed9facea50b1cc23d69ebb62"],["/assets/images/avatar/34.svg","d58a08508d6fb223e54bc51e8f982d62"],["/assets/images/avatar/35.svg","95cb443ee6dc9d57cddbd965b70886e0"],["/assets/images/avatar/36.svg","0542a84e1c4515c536a27c34dc5bf41a"],["/assets/images/avatar/4.svg","d672c52cf23901f32fb32fad23a24c14"],["/assets/images/avatar/5.svg","d6af9772d4e0266fb59d845536474872"],["/assets/images/avatar/6.svg","660bb6bb4e5491e7fc992c57dfbac8a9"],["/assets/images/avatar/7.svg","53d5f2301356107d9aa1f323270b6ec4"],["/assets/images/avatar/8.svg","f455d5bd2a264c256d747593243b2144"],["/assets/images/avatar/9.svg","c0deb2b84a6c7d4791b8909d5a31fcbf"],["/assets/images/background.svg","67ec477bc69254b0a3d7fcb6e3ac1554"],["/assets/images/desenhos.svg","0b8726eea415e72be43882d636f07efd"],["/assets/images/filmes.svg","70fb6618c0841ace057b58ee30acf0df"],["/assets/images/geral.svg","79d95206e89b751cb244a733656b0837"],["/assets/images/icon-apagarConta.svg","5eff8638a9e3844d299fd86ab9916465"],["/assets/images/icon-buscaVazia.svg","cc16b6d7d16e97ee64e155dce7c72139"],["/assets/images/icon-cadastro.svg","ea59ebb4bb5632c45d020dbfe1f5d3c0"],["/assets/images/icon-nrecebeu.svg","22432398b7eb9a17b1d5e8679ae1aeb2"],["/assets/images/icon-privacidade.svg","cbaf92e958c83c6f80c384aefc489e33"],["/assets/images/icon-seguranca-01.svg","bc63bc5e06e7cd29ff49a11af5327c0e"],["/assets/images/icon-seguranca.svg","bc63bc5e06e7cd29ff49a11af5327c0e"],["/assets/images/icon-vencedor.svg","7f6e3c9a7250bc9bdada6ee2a5efa4d7"],["/assets/images/icons/144.png","dc843c58ab1ef257ad8485b19bd8bd02"],["/assets/images/icons/152.png","2c6fc61b7d3fe46de0fb027c5faad6a2"],["/assets/images/icons/168.png","76c8e848846d9d32f84240cf0eb99b2e"],["/assets/images/icons/192.png","8168ac791c6c2bf8330bd1855fa9202b"],["/assets/images/icons/48.png","ba13aca68accf77158ad56b17cfea7f2"],["/assets/images/icons/72.png","4d9f103f4693c1bb072c8f24af196124"],["/assets/images/icons/96.png","0f58dfbdc447cff56db911e914182b3a"],["/assets/images/icons/ios152.png","e3b06b671daa60fcc212ae01d8612686"],["/assets/images/icons/wp144.png","381cf784845df5040114fc3b75b18d16"],["/assets/images/logo.svg","c6fa4ac21e5c11dd6d9133100b9c9faa"],["/assets/images/logo_jogo.svg","5bf180742c4c4b7e09bb6e84239aaed7"],["/assets/images/objetos.svg","c2a158d1c045a32255703952b6720dde"],["/assets/images/profissoes.svg","af73453ec28bb88f2ad40c109740bb5d"],["/assets/images/verbos.svg","eecce5bcbc601a8b87036f6211adedd7"],["/assets/scripts/app.js","dfb4bc6b958ae17e29d68bed67c12227"],["/assets/scripts/extra.js","5b5487f7d80ae98411966ae04e727d90"],["/assets/scripts/prebid3.23.0.js","e1d020a9ab03951a648b8f774a0e8f92"],["/assets/scripts/sdk.js","317e2352ef5bc4f0a8cfb3bdec450106"],["/assets/styles/main.css","df6a93dd1bcc99da52492b9f1ba3bee9"],["/index.html","34e2a10bdb251c006edd446285d2a64e"],["/pages/acesso.html","d46f93b002ea494889c431216a5ff946"],["/pages/alterarSenha.html","ca1948f5bda9f44887a3654d805d852c"],["/pages/apagarConta.html","2070d1a2231373eb0545b4246ed26f8b"],["/pages/cadastroEtapa01.html","c0a7d5134d4ef7b4ee30147d1275653c"],["/pages/cadastroEtapa02.html","3495bf92020881b604bf3539a5fa3ed9"],["/pages/cadastroEtapa03.html","8d7f1a1587b3048041e3dd89cb54fe2c"],["/pages/cadastroEtapa04.html","3734c576873685a8ce7bd52ea45e6c03"],["/pages/contato.html","89712d61ff7c635f43406d7f5ceab4a9"],["/pages/criarSala.html","51899c9f00ff817791acc6223fbda2ae"],["/pages/criarSala2.html","fd55a69fbaab34cd22fecc7b3c90837c"],["/pages/editarAvatar.html","e461b262ad5895112b988fa47c874506"],["/pages/editarDescricao.html","19d5505150db8d8d538e97f980f0e582"],["/pages/entrarFaceEtp02.html","5278bad38ef38a1acb3d7ee66ff19981"],["/pages/entrarFacebook.html","b29446f529b77464d8cc4970890e91e3"],["/pages/escolherSala.html","1ffafc8c6f3992ff4ead9885965862f1"],["/pages/esqueciSenha.html","17571cc917d19cd9ced35d0a4f686e88"],["/pages/formaCadastro.html","0e9322631d108f9edc1aa2086e300adc"],["/pages/home.html","dbab77d01218630a95054af037d04966"],["/pages/jogarAnonimo.html","738fe5aed4bb82797a5259641bc0a5c6"],["/pages/jogo.html","28dbd8064919d0118084b47f31e670ea"],["/pages/login.html","ed4cb30881512aefbee4bacde7084c1b"],["/pages/naoRecebeuMail.html","e4c4ff067536d66b32bb23541071df69"],["/pages/opcoes.html","92790df551dd415a371c19e1698d963c"],["/pages/perfil.html","0c938cfc27cbba2e5a90f5cfb1760ef4"],["/pages/popups.html","107ae2761975c0b9195bc717750264ac"],["/pages/privacidade.html","489cb6f53f174431fd7a7edf4822cf63"],["/pages/ranking.html","527bf8d1c990cd162ac487868725c113"],["/pages/regras.html","ac604a1e03c32fd52fda748acf575519"],["/pages/seguranca.html","d727766f0c379c9012b2279e0b4a35ea"],["/pages/tiposSala.html","268aaf7fa4ba89d1eb3735178094f005"]];

var cacheName = 'sw-precache-v3-' + (self.registration ? self.registration.scope : '');

var ignoreUrlParametersMatching = [/^utm_/];

var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function(body) {
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue, dontCacheBustUrlsMatching) {
    var url = new URL(originalUrl);

    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    if (whitelist.length === 0) {
        return true;
    }

    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl, ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    url.hash = '';

    url.search = url.search.slice(1)
        .split('&')
        .map(function(kv) {
            return kv.split('=');
        })
        .filter(function(kv) {
            return ignoreUrlParametersMatching.every(function(ignoredRegex) {
                return !ignoredRegex.test(kv[0]);
            });
        })
        .map(function(kv) {
            return kv.join('=');
        })
        .join('&');

    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function(item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function(requests) {
        return requests.map(function(request) {
            return request.url;
        });
    }).then(function(urls) {
        return new Set(urls);
    });
}

var APP_VERSION = '3.0.0';

function checkVersion() {
    return self.clients.matchAll().then(function(clients) {
        clients.forEach(function(client) {
            client.postMessage({
                type: 'VERSION_CHECK',
                version: APP_VERSION
            });
        });
    });
}

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return setOfCachedUrls(cache).then(function(cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, {credentials: 'same-origin'});
                            return fetch(request).then(function(response) {
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }
                                return cleanResponse(response).then(function(responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            }).catch(function(error) {
                                console.log('Falha ao cachear: ' + cacheKey, error);
                            });
                        }
                    })
                );
            });
        }).then(function() {
            return self.skipWaiting();
        })
    );
});

self.addEventListener('activate', function(event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());
    
    var essentialUrls = [
        '/index.html',
        '/'
    ];

    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.keys().then(function(existingRequests) {
                return Promise.all(
                    existingRequests.map(function(existingRequest) {
                        var url = existingRequest.url;
                        
                        var isEssential = essentialUrls.some(function(essentialUrl) {
                            return url.includes(essentialUrl);
                        });
                        
                        if (!setOfExpectedUrls.has(url) && !isEssential) {
                            return cache.delete(existingRequest);
                        }
                        
                        return Promise.resolve();
                    })
                );
            });
        }).then(function() {
            return self.clients.claim().then(function() {
                return checkVersion();
            });
        })
    );
});

self.addEventListener('fetch', function(event) {
    var url = new URL(event.request.url);
    
    if (url.protocol === 'chrome-extension:' || 
        url.hostname.includes('localhost') || 
        url.hostname.includes('127.0.0.1')) {
        return;
    }

    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request)
                .then(function(response) {
                    var responseClone = response.clone();
                    caches.open(cacheName).then(function(cache) {
                        cache.put(event.request, responseClone);
                    });
                    return response;
                })
                .catch(function() {
                    return caches.match(event.request).then(function(response) {
                        if (response) {
                            return response;
                        }
                        return caches.match('/index.html');
                    });
                })
        );
        return;
    }

    if (event.request.method === 'GET') {
        var shouldRespond;
        var strippedUrl = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
        shouldRespond = urlsToCacheKeys.has(strippedUrl);

        var directoryIndex = 'index.html';
        if (!shouldRespond && directoryIndex) {
            strippedUrl = addDirectoryIndex(strippedUrl, directoryIndex);
            shouldRespond = urlsToCacheKeys.has(strippedUrl);
        }

        if (shouldRespond) {
            event.respondWith(
                caches.open(cacheName).then(function(cache) {
                    return cache.match(urlsToCacheKeys.get(strippedUrl)).then(function(response) {
                        if (response) {
                            return response;
                        }
                        return fetch(event.request).then(function(networkResponse) {
                            cache.put(event.request, networkResponse.clone());
                            return networkResponse;
                        });
                    });
                }).catch(function(e) {
                    return fetch(event.request);
                })
            );
        } else {
            event.respondWith(
                fetch(event.request)
                    .then(function(response) {
                        if (response.status === 200) {
                            var responseClone = response.clone();
                            caches.open(cacheName + '-dynamic').then(function(cache) {
                                cache.put(event.request, responseClone);
                            });
                        }
                        return response;
                    })
                    .catch(function() {
                        return caches.match(event.request);
                    })
            );
        }
    }
});

self.addEventListener('message', function(event) {
    if (event.data) {
        switch (event.data.type) {
            case 'SKIP_WAITING':
                self.skipWaiting();
                break;
            case 'GET_VERSION':
                event.ports[0].postMessage(APP_VERSION);
                break;
        }
    }
});

self.addEventListener('error', function(event) {
    console.error('Service Worker erro:', event.error);
});
