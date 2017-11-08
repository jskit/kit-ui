"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","546b3dbcc2e3ff6a8b1309fa2d71908f"],["service-worker.js","12bc4e7321d5b8164d12b4c18dc4a25b"],["static/css/app.6ed8793c50bc5a997ed9b356a93cfd54.css","da463946d024e5ca7b9b12430f7a7b18"],["static/js/0.924bade9190d9fe85310.js","f29188ce190e85da5e94481037f0658c"],["static/js/1.8183505de4b50c570d33.js","ec7e475fa7a6c11d1d6915ffbe8be9c4"],["static/js/10.c42f9a89d22e8486ff17.js","ab19c2d33c2a96ec3e50e6d6f7020b11"],["static/js/11.a9639b68a21595e69cb7.js","928cdccee48378deeebec6e2542e4ac2"],["static/js/12.6475a64e9abacd3fc7bb.js","34fc6766a59e7af4e34d59572952a06a"],["static/js/13.d9210a60284e39054655.js","b679ad15c68a4a45baa41a319e6871aa"],["static/js/14.84e55dc0b58824d04bc1.js","8e44247745e7d63ec6449d4fc973925d"],["static/js/15.722b040d24e53b05b3df.js","4919809c43e4dd8b76fc58ba53d72910"],["static/js/16.7ff92ffe7131920f5676.js","bf793c826c02b1aab8474f6d228300ec"],["static/js/17.233a072383c281e22672.js","b5dadc2424a5ad1e0c59f12fe7cfbbf5"],["static/js/18.0a989a65f3a80577d6e1.js","6bda19418b12289cfc06cb7b72bc5552"],["static/js/19.67e13c075c30f814c17c.js","8e1e333ce281247f4ef3a8ba5420a066"],["static/js/2.5861d816df59e71db04a.js","a292769dbbc62719f78c13f890ab13ac"],["static/js/20.fbfd2667a6064cc2b212.js","bb89051929ab224bcbef99376547c9aa"],["static/js/21.344a374b79dcf985be8d.js","782a8707be3304e2c2e2bb2ed7ab75f0"],["static/js/22.898f25846dc4ecc546d5.js","22e080b9cf9933da1f1bd31d4a23fe13"],["static/js/23.491f80eeab8bc4ccd3e8.js","4bffb8f2bd2b010da838f7b24b28c846"],["static/js/24.32355867f3d70d29ce04.js","60d01fab429f7cdfd084990d756b7b27"],["static/js/25.90561403b268899811ee.js","ec51b5d2db3283fe886b74bf57711ccd"],["static/js/26.c6d090df29d6ed9d0142.js","16afa2270bf2bba826ee3e8be734ab04"],["static/js/27.9929c9073b307d3458e8.js","0cdd8f206cdd8238a1f607974e027ec0"],["static/js/28.b777baf47555a919c4a3.js","5f8329e8cdfc79966e1c1735e985045d"],["static/js/29.2d295208d680531fec76.js","a86dd8bf89fed57157f029731618cff9"],["static/js/3.497baa8a67faf9b91123.js","bdda30f024766bdd4cc3d816fd75aa9f"],["static/js/30.1edd1f3e80232fb3624e.js","1d06d30c08a97d712c8a4f6e5e6413d9"],["static/js/31.575be0f8cf1db6cbac80.js","4729d83435db0cdb7797f134c7e2a429"],["static/js/32.554821ee44b9dba2acc6.js","1809493812a36f2b2f8d117af3a6f0de"],["static/js/33.9c4eaa80f3d7d000e9ba.js","a44751a7430d971ba9c992d35536dfc7"],["static/js/34.a82d73dbad4d49e03b9d.js","7f9696d5688592b6bc1a4e634a16af64"],["static/js/35.83d16208ab4367098e0a.js","fee8ec974bbd55b6694fcfde85322864"],["static/js/36.f1098c9482a453e07c6e.js","4a85a9c69244b1994513ca8758adf13c"],["static/js/37.bd4df291c1ee4a442708.js","dd6343246ae5e85580bd7fc90570c18e"],["static/js/38.41f43554c9791a348d1e.js","a00899c6060feb8ae9d7c357429a631e"],["static/js/39.4f18eb0420ae9ad4a461.js","a6f2c88317452cc54c4d2d1266b17eb3"],["static/js/4.eb9988f165a525faf19a.js","74709fcc210e87c6861de771d5dcbcdb"],["static/js/40.825c42ed2fc00784e8dc.js","9fa4e1935da080d5516160e9f63c852b"],["static/js/41.d12212291dd82d9add51.js","937899a787d6e2653896cb38c2328192"],["static/js/42.94800934f8d042cca28e.js","f7d3e57939f17fcffacc85c979803a88"],["static/js/43.622078803c7f640414c5.js","8024f3cfb7028ce6adf00a85f6602df5"],["static/js/44.f3908023a27c699dfcb0.js","af37db330b95b8d904c0f4f6615c2e84"],["static/js/45.bf4f0d5dd0095042d85c.js","e4d5a33480982e4643a8865bf9e986ba"],["static/js/46.1a817dd7b21019609ec3.js","fd63c768cddcb81077b46f3a754b6d35"],["static/js/47.dd803362b0b221be04f0.js","ba11a19ac86f637666e0f164dbbd22fd"],["static/js/48.3e93013f2371df241034.js","8c14eee1ff3ad87009342a3f47a64374"],["static/js/49.926e14d704e203a80462.js","d3a76252e3598d622fb6b4fae3bd8a9b"],["static/js/5.cd1b21b4fa58d5eb1e12.js","f938997f5af536f4928ccfa3d9ad294e"],["static/js/50.8269b4da55c89b9fae9d.js","c81fbc5f8c6f13eea9bd7d524344290b"],["static/js/51.7bc3a350d783610a8a25.js","6ea7bd702bab48a4f5cb2efe92822aad"],["static/js/52.92d20023b0daaa98fbdf.js","dfa869ed663402cda4347bb34ca9c045"],["static/js/53.2b235d47c0383fc04271.js","eaf7a4d8458f4104ddcbb8f815e85691"],["static/js/54.c66e82fb34c60a717c3b.js","6cacb05f074f637f3d03646508eb5225"],["static/js/55.e730c0f1b5a0f73fc53f.js","97536b278bd8c0319cda4991252ce4cc"],["static/js/56.5d7c1d668f48fbf9c7ce.js","053754c737fbe546d354c48d61fe3d41"],["static/js/57.a37e8b8e4232499c4b76.js","b53c4ec25ead1941a4c83577cac987dc"],["static/js/6.7bdc472973f88ef29492.js","a8df5300a2f43ea595ca82b049465d1e"],["static/js/7.998e1637a332817f28bf.js","24dfadf63164fb22b0cd4b5a41b23629"],["static/js/8.fab39147b101aff2be18.js","16cf9c4f5488ecd465975af3b291b13a"],["static/js/9.1b8f5cce89526262eb4f.js","80a97036d83c3b6430a007ebb5096ae3"],["static/js/app.019a0edf179882dd96d4.js","174667a83366d0dc4c39364d46e4ef17"],["static/js/manifest.3b8b8654e80493876a85.js","1829e15ef69ec454c1514b3e9e2ec1df"],["static/js/vendor.75c1e7f3557b098f4d49.js","79464230cffef6949de2a34e8d4cbd20"]],cacheName="sw-precache-v3-my-vue-app-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,s){var t=new URL(e);return s&&t.pathname.match(s)||(t.search+=(t.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),t.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],s=new URL(a,self.location),t=createCacheKey(s,hashParamName,c,!1);return[s.toString(),t]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var s=new Request(c,{credentials:"same-origin"});return fetch(s).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),a=urlsToCacheKeys.has(c));a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});