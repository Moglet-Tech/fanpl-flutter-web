'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "c7899c5aa808cfb42a5ddaba0c26c1ac",
"index.html": "a6ae2f80d04dc73ef90fde2884736168",
"/": "a6ae2f80d04dc73ef90fde2884736168",
"main.dart.js": "98583facd9be996895ee6517ed186e2d",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c3922b93da7a07d0be0efec29fd1248e",
"assets/AssetManifest.json": "2a76686d717bff5cabf7a9b321ece15e",
"assets/NOTICES": "4a48c7f31deb21a86426d5cacd290d6d",
"assets/FontManifest.json": "d3c55f27e638e44b31d5a8e1f0431bed",
"assets/AssetManifest.bin.json": "34552ee19ffabe717881a2745fab082e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "c0c17e43c92df48984fc0383fb96f484",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "62fc2eefa51ad427cc5e1a16582aa037",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "2a01abab7c39a2632c6ae6852873347d",
"assets/fonts/NotoSansKR-Light.ttf": "e61301e66b058697c6031c39edb7c0d2",
"assets/fonts/NotoSansKR-Medium.ttf": "4dee649c78a37741c4f5d9fdb69ea434",
"assets/fonts/NotoSansKR-ExtraBold.ttf": "db13746e4342665b3fb5571c353f8c46",
"assets/fonts/NotoSansKR-Regular.ttf": "e910afbd441c5247227fb4a731d65799",
"assets/fonts/NotoSansKR-SemiBold.ttf": "90c2026b48704ad2560e68249b15b7f5",
"assets/fonts/NotoSansKR-Black.ttf": "15e2e9d1b8e380eafc51a606a7e671d6",
"assets/fonts/NotoSansKR-Thin.ttf": "b59719d81a60f284b7c372c7891689fd",
"assets/fonts/MaterialIcons-Regular.otf": "0b255836da2ad11d2bd7456082d2065c",
"assets/fonts/NotoSansKR-ExtraLight.ttf": "33e4ba0602de9a23075c13d344127395",
"assets/fonts/NotoSansKR-Bold.ttf": "671db5f821991c90d7f8499bcf9fed7e",
"assets/assets/images/bts.jpeg": "283115ac565d19b47f0fe82e63c15c0f",
"assets/assets/images/straykids.jpeg": "e419101f9c8cf930c7c531765e737252",
"assets/assets/images/open_chat_manual_8.jpg": "765587997586d0728281ed677e0b5cf3",
"assets/assets/images/fanpl_logo_black.png": "60d720c82b5760e636edf8ac504ca5cd",
"assets/assets/images/background_image.png": "626729490b59eee6a3a98c3c1c162f75",
"assets/assets/images/nct.jpeg": "febd34fdfe55047c3db32096b7ebf777",
"assets/assets/images/fanpl_banner.png": "52a9b0a7f26cb3c97151dc469ac420c0",
"assets/assets/images/theboyz.jpeg": "70c21c4dcffbd060becdafe644a67c1c",
"assets/assets/images/fanpl_banner_2.png": "e2fbc9985c534b5ee10098ceb26bc2fc",
"assets/assets/images/fanpl_logo_white.png": "143d0b86d1a4125ef82a4e5d55b97ed6",
"assets/assets/images/open_chat_manual_3.jpg": "f4e6189e07cf575800b60f3bda9b795d",
"assets/assets/images/seventeen.jpeg": "a1b3cf4fbd0d96594e49568a0017a3fc",
"assets/assets/images/open_chat_manual_2.jpg": "a823a8bb9847ada709b408c6b1c90416",
"assets/assets/images/open_chat_manual_1.jpg": "6032759ea5ca6cabf824dd5bd5ec3f4f",
"assets/assets/images/open_chat_manual_5.jpg": "4bcfab4a2e5a84ee500b4d6b14bd5ce0",
"assets/assets/images/open_chat_manual_4.jpg": "a684bc4e09fe4f1456a36198d672a39a",
"assets/assets/images/open_chat_manual_6.jpg": "59bcc389afdda73374d19e52cc8d9bbf",
"assets/assets/images/open_chat_manual_7.jpg": "f88246de5f5cc72309837ed78c9fd815",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
