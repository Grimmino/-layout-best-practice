!function(e){var r={};function n(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var a in e)n.d(t,a,function(r){return e[r]}.bind(null,a));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s="./src/index.js")}({"./src/img/img.jpg":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./img/img.jpg");\n\n//# sourceURL=webpack:///./src/img/img.jpg?')},"./src/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.sass */ "./src/sass/style.sass");\n/* harmony import */ var _sass_style_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_style_sass__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/main */ "./src/js/main.js");\n/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_main__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _img_img_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/img.jpg */ "./src/img/img.jpg");\n// import \'normalize.css\';\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?')},"./src/js/main.js":function(module,exports){eval('let modal = document.querySelector(".modal");\r\nlet btnShowModal = document.querySelectorAll(".btn__modal");\r\nlet closeModal = document.querySelectorAll(".modal__close");\r\n\r\nbtnShowModal.forEach((btn) => {\r\n    btn.addEventListener("click", () => {\r\n        document.body.classList.add("fixed");\r\n        modal.classList.add("modal--active");\r\n    });\r\n});\r\n\r\ncloseModal.forEach((btn) => {\r\n    btn.addEventListener("click", () => {\r\n        document.body.classList.remove("fixed");\r\n        modal.classList.remove("modal--active");\r\n    });\r\n});\r\n\r\n//burger ================\r\nlet burgerBtn = document.querySelector(".burger");\r\nlet headerMenu = document.querySelector(".menu");\r\n\r\nburgerBtn.addEventListener("click", () => {\r\n    burgerBtn.classList.toggle("burger--active");\r\n    headerMenu.classList.toggle("menu--active");\r\n});\r\n\r\n//tabs ================================\r\nlet tabs = document.querySelectorAll(".tab");\r\nlet tabsContent = document.querySelectorAll(".tab__content");\r\n\r\ntabs.forEach((tab) => {\r\n    tab.addEventListener("click", () => {\r\n        tabs.forEach((item) => {\r\n            item.classList.contains("tab--active") ? item.classList.remove("tab--active") : null;\r\n        });\r\n\r\n        tabsContent.forEach((item) => {\r\n            item.classList.contains("tab__content--active") ? item.classList.remove("tab__content--active") : null;\r\n            item.dataset.id === tab.dataset.id ? item.classList.add("tab__content--active") : null;\r\n        });\r\n\r\n        tab.classList.add("tab--active");\r\n    });\r\n});\r\n\r\n//плавный переход по якорям\r\nlet anchors = document.querySelectorAll(\'a[href*="#"]\');\r\n\r\nfunction smoothScrol(blockOffsetTop) {\r\n    let targetPosition = blockOffsetTop;\r\n    let startPosition = window.pageYOffset;\r\n    let distance = 0;\r\n    let speed = 50;\r\n\r\n    if (startPosition < targetPosition) {\r\n        distance = targetPosition - startPosition;\r\n    } else {\r\n        distance = startPosition - targetPosition;\r\n    }\r\n\r\n    function animation() {\r\n        if (distance > 0) {\r\n            distance -= speed;\r\n            window.scrollTo(0, startPosition);\r\n\r\n            if (startPosition > targetPosition - 50) {\r\n                startPosition -= speed;\r\n            } else if (startPosition < targetPosition - 50) {\r\n                startPosition += speed;\r\n            }\r\n\r\n            requestAnimationFrame(animation);\r\n        }\r\n    }\r\n\r\n    requestAnimationFrame(animation);\r\n}\r\n\r\nanchors.forEach((anchor) => {\r\n    anchor.addEventListener("click", (e) => {\r\n        e.preventDefault();\r\n        let blockID = anchor.getAttribute("href").substr(1);\r\n        let blockOffsetTop = document.getElementById(blockID).offsetTop;\r\n\r\n        smoothScrol(blockOffsetTop);\r\n    });\r\n});\r\n\r\n//галерея\r\nlet galeryImgs = document.querySelectorAll(".galery__img");\r\nlet galeryModal = document.querySelector(".galery__modal");\r\nlet galeryModalClose = document.querySelector(".galery__modal-close");\r\n\r\ngaleryImgs.forEach((img) => {\r\n    img.addEventListener("click", () => {\r\n        galeryModal.querySelector(".galery__modal-img img").src = img.src;\r\n        galeryModal.classList.add("galery__modal--active");\r\n    });\r\n});\r\n\r\ngaleryModalClose.addEventListener("click", () => {\r\n    galeryModal.classList.remove("galery__modal--active");\r\n});\r\n\n\n//# sourceURL=webpack:///./src/js/main.js?')},"./src/sass/style.sass":function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/style.sass?")}});