// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/home/miikka/Documents/Git repos/alppis.github.io/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-index-js": () => import("/home/miikka/Documents/Git repos/alppis.github.io/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/home/miikka/Documents/Git repos/alppis.github.io/.cache/data.json")

