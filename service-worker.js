const CACHE_NAME = 'nyazek-store-cache-v1'; // اسم الذاكرة المؤقتة
const urlsToCache = [
  '/', // الصفحة الرئيسية
  '/index.html', // ملف HTML الرئيسي
  '/styles.css', // ملف CSS
  '/script.js', // ملف JavaScript
  'https://github.com/krarar/index0/blob/main/Cjdowner-Cryptocurrency-ICON.512.png', // أيقونة التطبيق
  'https://github.com/krarar/index0/blob/main/Cjdowner-Cryptocurrency-ICON.512.png' // أيقونة التطبيق
];

self.addEventListener('install', event => {
  // تثبيت Service Worker وتخزين الموارد في الذاكرة المؤقتة
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  // اعتراض الطلبات وإعادة الموارد من الذاكرة المؤقتة إذا كانت موجودة
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
