(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_coreui_src_views_theme_colors_Colors_js"],{

/***/ "./node_modules/@coreui/utils/dist/coreui-utils.common.js":
/*!****************************************************************!*\
  !*** ./node_modules/@coreui/utils/dist/coreui-utils.common.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"deepObjectsMerge",(function(){return r})),n.d(t,"getColor",(function(){return u})),n.d(t,"getStyle",(function(){return a})),n.d(t,"hexToRgb",(function(){return s})),n.d(t,"hexToRgba",(function(){return l})),n.d(t,"makeUid",(function(){return f})),n.d(t,"omitByKeys",(function(){return d})),n.d(t,"pickByKeys",(function(){return p})),n.d(t,"rgbToHex",(function(){return g}));var r=function e(t,n){for(var r=0,o=Object.keys(n);r<o.length;r++){var c=o[r];n[c]instanceof Object&&Object.assign(n[c],e(t[c],n[c]))}return Object.assign(t||{},n),t},o=function(){for(var e={},t=document.styleSheets,n="",r=t.length-1;r>-1;r--){for(var o=t[r].cssRules,c=o.length-1;c>-1;c--)if(".ie-custom-properties"===o[c].selectorText){n=o[c].cssText;break}if(n)break}return(n=n.substring(n.lastIndexOf("{")+1,n.lastIndexOf("}"))).split(";").forEach((function(t){if(t){var n=t.split(": ")[0],r=t.split(": ")[1];n&&r&&(e["--".concat(n.trim())]=r.trim())}})),e},c=function(){return Boolean(document.documentMode)&&document.documentMode>=10},i=function(e){return e.match(/^--.*/i)},a=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(i(e)&&c()){var r=o();t=r[e]}else t=window.getComputedStyle(n,null).getPropertyValue(e).replace(/^\s/,"");return t},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,n="--".concat(e),r=a(n,t);return r||e},s=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");var t,n,r;if(!e.match(/^#(?:[0-9a-f]{3}){1,2}$/i))throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(t=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),r=parseInt(e.slice(5,7),16)):(t=parseInt(e.slice(1,2),16),n=parseInt(e.slice(2,3),16),r=parseInt(e.slice(3,5),16)),"rgba(".concat(t,", ").concat(n,", ").concat(r,")")},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;if(void 0===e)throw new TypeError("Hex color is not defined");var n,r,o,c=e.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!c)throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(n=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16)):(n=parseInt(e.slice(1,2),16),r=parseInt(e.slice(2,3),16),o=parseInt(e.slice(3,5),16)),"rgba(".concat(n,", ").concat(r,", ").concat(o,", ").concat(t/100,")")},f=function(){return"uid-"+Math.random().toString(36).substr(2)},d=function(e,t){for(var n={},r=Object.keys(e),o=0;o<r.length;o++)!t.includes(r[o])&&(n[r[o]]=e[r[o]]);return n},p=function(e,t){for(var n={},r=0;r<t.length;r++)n[t[r]]=e[t[r]];return n},g=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");if("transparent"===e)return"#00000000";var t=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!t)throw new Error("".concat(e," is not a valid rgb color"));var n="0".concat(parseInt(t[1],10).toString(16)),r="0".concat(parseInt(t[2],10).toString(16)),o="0".concat(parseInt(t[3],10).toString(16));return"#".concat(n.slice(-2)).concat(r.slice(-2)).concat(o.slice(-2))},b={deepObjectsMerge:r,getColor:u,getStyle:a,hexToRgb:s,hexToRgba:l,makeUid:f,omitByKeys:d,pickByKeys:p,rgbToHex:g};t.default=b}]));

/***/ }),

/***/ "./resources/coreui/src/views/theme/colors/Colors.js":
/*!***********************************************************!*\
  !*** ./resources/coreui/src/views/theme/colors/Colors.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/utils */ "./node_modules/@coreui/utils/dist/coreui-utils.common.js");
/* harmony import */ var _coreui_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_coreui_utils__WEBPACK_IMPORTED_MODULE_4__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'src/reusable'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var ThemeView = function ThemeView() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('rgb(255, 255, 255)'),
      _useState2 = _slicedToArray(_useState, 2),
      color = _useState2[0],
      setColor = _useState2[1];

  var ref = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var el = ref.current.parentNode.firstChild;
    var varColor = window.getComputedStyle(el).getPropertyValue('background-color');
    setColor(varColor);
  }, [ref]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
    className: "table w-100",
    ref: ref
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    className: "text-muted"
  }, "HEX:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    className: "font-weight-bold"
  }, (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_4__.rgbToHex)(color))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    className: "text-muted"
  }, "RGB:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    className: "font-weight-bold"
  }, color))));
};

var ThemeColor = function ThemeColor(_ref) {
  var className = _ref.className,
      children = _ref.children;
  var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'theme-color w-75 rounded mb-3');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCol, {
    xl: "2",
    md: "4",
    sm: "6",
    xs: "12",
    className: "mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes,
    style: {
      paddingTop: '75%'
    }
  }), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemeView, null));
};

var Colors = function Colors() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCardHeader, null, "Theme colors", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'src/reusable'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    href: "https://coreui.io/docs/utilities/colors/"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemeColor, {
    className: "bg-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "Brand Primary Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemeColor, {
    className: "bg-secondary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "Brand Secondary Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemeColor, {
    className: "bg-success"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "Brand Success Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemeColor, {
    className: "bg-danger"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "Brand Danger Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemeColor, {
    className: "bg-warning"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "Brand Warning Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemeColor, {
    className: "bg-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "Brand Info Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemeColor, {
    className: "bg-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "Brand Light Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemeColor, {
    className: "bg-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "Brand Dark Color"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCardHeader, null, "Grays"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CRow, {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemeColor, {
    className: "bg-gray-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "Gray 100 Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemeColor, {
    className: "bg-gray-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "Gray 200 Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemeColor, {
    className: "bg-gray-300"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "Gray 300 Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemeColor, {
    className: "bg-gray-400"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "Gray 400 Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemeColor, {
    className: "bg-gray-500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "Gray 500 Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemeColor, {
    className: "bg-gray-600"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "Gray 600 Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemeColor, {
    className: "bg-gray-700"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "Gray 700 Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemeColor, {
    className: "bg-gray-800"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "Gray 800 Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemeColor, {
    className: "bg-gray-900"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "Gray 900 Color"))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Colors);

/***/ })

}]);