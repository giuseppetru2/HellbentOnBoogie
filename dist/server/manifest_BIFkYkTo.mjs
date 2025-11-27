import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_BSoCfl4K.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_QJkBW-Vh.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/giuse/OneDrive/Documents/MovieWebsite/","cacheDir":"file:///C:/Users/giuse/OneDrive/Documents/MovieWebsite/node_modules/.astro/","outDir":"file:///C:/Users/giuse/OneDrive/Documents/MovieWebsite/dist/","srcDir":"file:///C:/Users/giuse/OneDrive/Documents/MovieWebsite/src/","publicDir":"file:///C:/Users/giuse/OneDrive/Documents/MovieWebsite/public/","buildClientDir":"file:///C:/Users/giuse/OneDrive/Documents/MovieWebsite/dist/client/","buildServerDir":"file:///C:/Users/giuse/OneDrive/Documents/MovieWebsite/dist/server/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":":root{--accent: 217, 4, 41;--accent-light: 255, 100, 100;--accent-dark: 150, 0, 0}html{background:#101010;scroll-behavior:smooth}h1,h2,h3,h4,h5,h6{font-family:Anton,sans-serif;text-transform:uppercase;letter-spacing:.05em}.animate-fade-in[data-astro-cid-bbe6dxrz]{animation:fadeIn 2s ease-out forwards;opacity:0}@keyframes fadeIn{0%{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/giuse/OneDrive/Documents/MovieWebsite/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BIFkYkTo.mjs","C:/Users/giuse/OneDrive/Documents/MovieWebsite/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","C:/Users/giuse/OneDrive/Documents/MovieWebsite/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_C4oNASkB.mjs","C:/Users/giuse/OneDrive/Documents/MovieWebsite/src/components/Gallery":"_astro/Gallery.DBI_8kfq.js","@astrojs/solid-js/client.js":"_astro/client.fnMGPWHD.js","C:/Users/giuse/OneDrive/Documents/MovieWebsite/src/components/Hero.astro?astro&type=script&index=0&lang.ts":"_astro/Hero.astro_astro_type_script_index_0_lang.BmK5sDMu.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/giuse/OneDrive/Documents/MovieWebsite/src/components/Hero.astro?astro&type=script&index=0&lang.ts","const t=document.getElementById(\"hero-content\");t&&window.addEventListener(\"scroll\",()=>{const n=window.scrollY,o=window.innerHeight,e=1-n/(o*.5);t.style.opacity=Math.max(0,Math.min(1,e)).toString()});"]],"assets":["/Banners/banner_1.png","/Banners/banner_2.png","/Banners/banner_3.png","/Banners/banner_3_OLD.png","/Banners/banner_4.png","/Banners/hero_teaser.mov","/_astro/client.fnMGPWHD.js","/_astro/Gallery.DBI_8kfq.js","/_astro/web.DONdWTBH.js","/GallerySection/HOB Still 12.jpg","/GallerySection/HOB Still 14.jpg","/GallerySection/HOB Still 16.jpg","/GallerySection/HOB Still 2.jpg","/GallerySection/HOB Still 7.jpg","/GallerySection/HOB Still 9.jpg","/GallerySection/HOB Still.jpg","/GallerySection/_PAV0915 copy.jpg","/GallerySection/_PAV0948 copy.jpg","/GallerySection/_PAV1041 copy.jpg","/GallerySection/_PAV1652 copy.jpg","/GallerySection/_PAV1724 copy.jpg","/GallerySection/_PAV2012 copy.jpg","/WhereToWatchImages/amazonPrimeVideo.png","/WhereToWatchImages/appleTv.png","/WhereToWatchImages/DVDPrime.jpg","/WhereToWatchImages/gravitas_logo.png","/WhereToWatchImages/plex.jpg","/WhereToWatchImages/tubi.png","/WhereToWatchImages/xumo.jpg","/WhereToWatchImages/youtube.png","/Banners/New/banner_attachment.png","/Banners/New/banner_ciff.png","/Banners/New/banner_ciff_OLD.png","/Banners/New/banner_flickers.png","/Banners/New/banner_fortmyers.png","/Banners/New/banner_rotterdam.png","/Banners/New/banner_sarasota.png"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"P266xXKeP30PJ4uNuXGrb4xfF7SBrkfGIZkmaauvVfo=","sessionConfig":{"driver":"fs-lite","options":{"base":"C:\\Users\\giuse\\OneDrive\\Documents\\MovieWebsite\\node_modules\\.astro\\sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
