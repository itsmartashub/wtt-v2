var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire3cc6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){n[e]=t},e.parcelRequire3cc6=o);var r=o("c6uJS"),d=o("eShdp"),l=o("bLOrV"),a=o("gMyuQ"),f=o("b0JUj"),i=o("2NEYp"),u=o("f81x0");document.addEventListener("DOMContentLoaded",(()=>{const e=new r.default,t=new d.default,n=new a.default,o=new f.default,s=new u.default,c=new i.default;e.SETUP_UI(),n.SETUP_BAG(),o.SETUP_FAV(),window.IntersectionObserver&&s.scroll_observer("footer","title","footer"),t.fetchProducts().then((e=>{c.displayProducts(e),l.default.saveProducts(e)})).then((()=>{n.getAddToBagBtns(),o.getFavBtns(),n.bagLogic(),o.favLogic(),c.setup_filter()}))}));