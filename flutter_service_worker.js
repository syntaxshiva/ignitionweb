'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7e9cded2c14287b513476af2f71f3769",
"assets/AssetManifest.bin.json": "c879dd1902be869b0a5fdfaa87bfbfab",
"assets/AssetManifest.json": "8e74f40b3ad0ac5c3041f7e29833b4a9",
"assets/assets/abroad.png": "98c5275f06dc107d4bb4d49e7fd19dba",
"assets/assets/ai.png": "52db484adb6bfd70fbd05f112b001d6a",
"assets/assets/app.png": "26de782e58f006c0e48a29408236e90e",
"assets/assets/bookmark.png": "8bd094451e3d057ff2c2a2adb58958f6",
"assets/assets/bowling.png": "fb779812e6f861e43b79629157eaf1e2",
"assets/assets/brand/Brandmark/NavyBlue.png": "56ee6b55ed23cc03fe092de2fb3c9e58",
"assets/assets/brand/Brandmark/Primary.png": "7aca10cbaf526ddab64d66927f21a573",
"assets/assets/brand/Brandmark/White.png": "e9a0b3e9dffc54ab2ae49c66d2926bc8",
"assets/assets/brand/Logo/NavyBlue.png": "5c67a5875d6ea51aec656b76d7b2a9c6",
"assets/assets/brand/Logo/Primary.png": "e69c0be846f8c3f0b630dd90ed9aaec4",
"assets/assets/brand/Logo/Secondary.png": "4a48f6bf898d0b2f80fe83d8da81a25f",
"assets/assets/brand/Logo/White.png": "3421519b080186e791684c54fe21cd83",
"assets/assets/business.png": "60f05ea2c173484b33812cc5f2e8d53c",
"assets/assets/businessman.png": "a867c065e079a463869f8684811fb7ed",
"assets/assets/calendar.png": "91c676d857c3ae8e2984870bbef6c2cb",
"assets/assets/cartographer.png": "2842498681360a4c0309bfa35464152d",
"assets/assets/cat.png": "6b498189955a75af18e6339139737376",
"assets/assets/ceo.png": "1bad9803d536185525dccfd8907f5302",
"assets/assets/clock.png": "043795548093120c3dd7058d25b876c6",
"assets/assets/crocodile.png": "da357431579d985a34b7d56abb1b6583",
"assets/assets/customer-service.png": "e0675e8ed5411f9f4fc2b33aa6f75560",
"assets/assets/discussion.png": "d2a1228d52a8a763fa775007371b958d",
"assets/assets/document.png": "f3fb1646ab94fc51527c12a0947bac0b",
"assets/assets/dollar.gif": "009ecc0ddc0ca299843c04e56c072b81",
"assets/assets/domain.png": "9eca0c01f43df271b372174fe10910e9",
"assets/assets/eey.png": "506ef1b475dcf0ea6da50ec68b106d87",
"assets/assets/exper.png": "31707524b1582ec87cf00a39b75408fc",
"assets/assets/experience.gif": "764f9c376dd9abc2d720049c4609df60",
"assets/assets/eye.png": "0d50881fee964ae4752387be36b28d61",
"assets/assets/flight.png": "f14c43e22079f6bd5fdb6c23c12083a7",
"assets/assets/fry.png": "47e0ce8bb268e41607015b0282645425",
"assets/assets/FunnelDisplay-Bold.ttf": "a7271d021c73aa1071eb1565429cef27",
"assets/assets/FunnelDisplay-ExtraBold.ttf": "92a6dcb29439373975a92afa70cea3c8",
"assets/assets/FunnelDisplay-Light.ttf": "daa79f7dc9c6667076bc3380fe64f2d7",
"assets/assets/FunnelDisplay-Medium.ttf": "55571ffb2329f7a3136ddf511fac255e",
"assets/assets/FunnelDisplay-Regular.ttf": "ff6a2662569b10d642593bb2193dbbc3",
"assets/assets/FunnelDisplay-SemiBold.ttf": "a9917034d0f2384dcea10297b7053f71",
"assets/assets/gamepad.png": "0dd66f48b211df4f5447db0f7df7888b",
"assets/assets/goo.png": "0809f26993f5acf819d2189892ce4cff",
"assets/assets/gps.png": "2ca68a57b162325c01bb7dc68d02c071",
"assets/assets/graduation.png": "4894f9eb4dad012bb10e930a5ab00386",
"assets/assets/heart.png": "f9bf1450e423aedec8a518e5ad3b0579",
"assets/assets/heat.png": "74914c32e8bd99c546809e21b35c442b",
"assets/assets/idea-bulb.png": "dd7ba19ed5fab55b332fea16fa6d76e4",
"assets/assets/inboc.png": "5f16f48846892f89a52f69c97371b3e1",
"assets/assets/INDIA.jpeg": "fcafc903e35f847ea6cf8e1ccb47a769",
"assets/assets/injection.png": "75e88219bfb7aa5a00281ed1dc61604e",
"assets/assets/inst.png": "c4205b047f2e22d56b871edd57113b63",
"assets/assets/instagram.png": "4a8c23476a7c20c5bee2a752a6f96e9e",
"assets/assets/invest.png": "a8152a9d78d4ffbb67e522d08e5f0125",
"assets/assets/lin.png": "f210efa4fe3544196dc063e2f45c4052",
"assets/assets/linkedin.png": "d492efc706db983e74258dbd348f2208",
"assets/assets/log-in.png": "8209dca69b675cefbaec34d14545b67c",
"assets/assets/logo.png": "e8a4480c7cbd4d54c4e836c2912f49ef",
"assets/assets/money.png": "54460b5651fd0969fdb0779fee91b23c",
"assets/assets/NOTE.gif": "f7fc4113eb196ec07411e82dfeb55cb4",
"assets/assets/only%2520logo.png": "5dbffc1f348df2d04260766492476597",
"assets/assets/plane.png": "bd8bbfac0594e09eef0bd44d3719b0bb",
"assets/assets/presentation.png": "253b4cb02df185de24266eef2f33c98f",
"assets/assets/profile.png": "d484cfbeb513d43df0eb6906ee5226b4",
"assets/assets/review.png": "d23865178b29f01aa38cf1bba99e7ce1",
"assets/assets/sash.png": "8cb78464819042f0aca8c210c1b811d4",
"assets/assets/search.png": "5b881caea66be32da8dc9ff631e10ffc",
"assets/assets/sett.png": "3e8c1b526ed1d12f4a9e1fb4fed3db02",
"assets/assets/signpost.png": "4d56157c9e7a58d73cc8ccb5d58dc823",
"assets/assets/skills.png": "042922d54491894ef19b10af31bfb0ac",
"assets/assets/splash.mp4": "6a61a4386238a9cd9f811788c50d8e06",
"assets/assets/teacher.png": "588a034f261069ce43ff80203c78cb6e",
"assets/assets/tech.png": "4750b976f44941b85961f674a863af72",
"assets/assets/test.png": "16ea23579137ff4e47f0641e195ec5a4",
"assets/assets/timezone.png": "669fb7e52e85c00ee00e53b4329fa382",
"assets/assets/twitter.png": "a8f692e1d74ae65793b6d212794bc0c2",
"assets/assets/videocall.png": "53c0fa2fe7836ae5104891756f8a8f54",
"assets/assets/work-experience.png": "0aa8abed78f692e561fcfe840f80140e",
"assets/assets/xx.png": "8d0681ca6d271b9af895874a0139460b",
"assets/FontManifest.json": "ea938d346aca1722e81cdfbc7b29cace",
"assets/fonts/MaterialIcons-Regular.otf": "b66c63a1b0a771d6d8d017de91b0ed18",
"assets/NOTICES": "430c532e437de4ca0ca03fd24f4a26ab",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "fc49b4ff32fb12d5b7bae4d9b7724cdb",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/glass/images/noise.png": "326f70bd3633c4bb951eac0da073485d",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/highlight.png": "2aecc31aaa39ad43c978f209962a985c",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/squiggly.png": "68960bf4e16479abb83841e54e1ae6f4",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/strikethrough.png": "72e2d23b4cdd8a9e5e9cadadf0f05a3f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/underline.png": "59886133294dd6587b0beeac054b2ca3",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/highlight.png": "2fbda47037f7c99871891ca5e57e030b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/squiggly.png": "9894ce549037670d25d2c786036b810b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/strikethrough.png": "26f6729eee851adb4b598e3470e73983",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/underline.png": "a98ff6a28215341f764f96d627a5d0f5",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "7aca10cbaf526ddab64d66927f21a573",
"firebase-messaging-sw.js": "2cece9b161dca18cc2f6efa98a5904da",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "48464d02c6c9285acb47d6ebe1b5547f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1db650d384998a9adb182551a0a00389",
"/": "1db650d384998a9adb182551a0a00389",
"main.dart.js": "301bff4ebef0fd37d021644256e958b2",
"manifest.json": "dc6b5cf1921186095b5689ae290df4a9",
"version.json": "b3bff146529255cac33b256248c2f379"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
