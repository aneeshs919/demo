(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./public/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.94be711a.png","height":62,"width":384,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAKElEQVR4nGPc0xXxf/8lZgaG/wwMjIwMDGys/xmAFAMvJwPD9ceMDACnaggQ2ozyzAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":1});
;// CONCATENATED MODULE: ./components/Header/index.jsx


const Header = ()=>{
    //   console.log(logo);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex relative bg-PS_primary py-4 px-16",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "relative w-2/12",
            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: logo.src,
                alt: "Couldnot load image",
                className: "max-w-full"
            })
        })
    });
};
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: ./components/Layout/index.jsx


const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
            children
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(764);
;// CONCATENATED MODULE: ./pages/_app.js



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(components_Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 764:
/***/ (() => {



/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(615));
module.exports = __webpack_exports__;

})();