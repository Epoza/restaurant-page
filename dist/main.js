/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    margin: 30px 10vw 0px 10vw;
    background-color: #e6f1f4;
}

/* -------------------- Navbar -------------------- */

ul {
    display: flex;
    flex-direction: row;
    background-color: #306e82;
    border: 2px solid #004258;
}

#home {
    margin-left: clamp(0px, 5vw, 30px);
}

#menu, #contact {
    margin-left: clamp(10px, 5vw, 140px);
}

ul > li {
    list-style: none;
    padding: 7px;
    font-weight: bold;
}

/* -------------------- Center Text --------------------   */
.title, .text {
    text-align: center;
}

.subtitle {
    font-weight: bold;
    font-size: 18px;
    text-align: center;
}

/* -------------------- Home --------------------  */

.home-text {
    width: 60vw;
    margin: 5px auto;
}

.centered-image {
    display: block;
    margin: auto;
}

/* -------------------- Menu --------------------  */

.meal {
    padding: 0px 10px;
    margin: 20px auto;
    background-color: #c3dfe7;
    border: 2px solid black;
    border-radius: 8px;
    max-width: 40vw;
    min-width: 250px;
}

.meal-image {
    width: 20vw;
    height: auto;
    padding-bottom: 10px;
    margin-left: 10vw;
    min-width: 125px;
}

/* -------------------- Contact --------------------  */

.contact-container {
    padding: 0px 10px;
    margin: 20px auto; /* Center horizontally */
    background-color: #c3dfe7;
    border: 2px solid black;
    border-radius: 8px;
    max-width: 550px;
    text-align: center; /* Center any inline or inline-block children horizontally */
}

/* -------------------- Images --------------------  */





`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,0BAA0B;IAC1B,yBAAyB;AAC7B;;AAEA,qDAAqD;;AAErD;IACI,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,yBAAyB;AAC7B;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;AACrB;;AAEA,4DAA4D;AAC5D;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,kBAAkB;AACtB;;AAEA,oDAAoD;;AAEpD;IACI,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,YAAY;AAChB;;AAEA,oDAAoD;;AAEpD;IACI,iBAAiB;IACjB,iBAAiB;IACjB,yBAAyB;IACzB,uBAAuB;IACvB,kBAAkB;IAClB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,oBAAoB;IACpB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA,uDAAuD;;AAEvD;IACI,iBAAiB;IACjB,iBAAiB,EAAE,wBAAwB;IAC3C,yBAAyB;IACzB,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB,EAAE,4DAA4D;AACpF;;AAEA,sDAAsD","sourcesContent":["body {\n    margin: 30px 10vw 0px 10vw;\n    background-color: #e6f1f4;\n}\n\n/* -------------------- Navbar -------------------- */\n\nul {\n    display: flex;\n    flex-direction: row;\n    background-color: #306e82;\n    border: 2px solid #004258;\n}\n\n#home {\n    margin-left: clamp(0px, 5vw, 30px);\n}\n\n#menu, #contact {\n    margin-left: clamp(10px, 5vw, 140px);\n}\n\nul > li {\n    list-style: none;\n    padding: 7px;\n    font-weight: bold;\n}\n\n/* -------------------- Center Text --------------------   */\n.title, .text {\n    text-align: center;\n}\n\n.subtitle {\n    font-weight: bold;\n    font-size: 18px;\n    text-align: center;\n}\n\n/* -------------------- Home --------------------  */\n\n.home-text {\n    width: 60vw;\n    margin: 5px auto;\n}\n\n.centered-image {\n    display: block;\n    margin: auto;\n}\n\n/* -------------------- Menu --------------------  */\n\n.meal {\n    padding: 0px 10px;\n    margin: 20px auto;\n    background-color: #c3dfe7;\n    border: 2px solid black;\n    border-radius: 8px;\n    max-width: 40vw;\n    min-width: 250px;\n}\n\n.meal-image {\n    width: 20vw;\n    height: auto;\n    padding-bottom: 10px;\n    margin-left: 10vw;\n    min-width: 125px;\n}\n\n/* -------------------- Contact --------------------  */\n\n.contact-container {\n    padding: 0px 10px;\n    margin: 20px auto; /* Center horizontally */\n    background-color: #c3dfe7;\n    border: 2px solid black;\n    border-radius: 8px;\n    max-width: 550px;\n    text-align: center; /* Center any inline or inline-block children horizontally */\n}\n\n/* -------------------- Images --------------------  */\n\n\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contactPageLoad.js":
/*!********************************!*\
  !*** ./src/contactPageLoad.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactPageLoad)
/* harmony export */ });
function contactPageLoad() {

    const navbar = document.createElement("ul");
    navbar.setAttribute("id", "navbar");

    const navbarHome = document.createElement("li");
    navbarHome.setAttribute("id", "home");
    navbarHome.style.cursor = "pointer";
    navbarHome.textContent = "Home";

    const navbarMenu = document.createElement("li");
    navbarMenu.setAttribute("id", "menu");
    navbarMenu.style.cursor = "pointer";
    navbarMenu.textContent = "Menu";

    const navbarContact = document.createElement("li");
    navbarContact.setAttribute("id", "contact");
    navbarContact.classList.add("active");
    navbarContact.textContent = "Contact";
    navbarContact.style.backgroundColor = '#22a0df'

    navbar.appendChild(navbarHome);
    navbar.appendChild(navbarMenu);
    navbar.appendChild(navbarContact);


    const headerEl = document.createElement("h1");
    headerEl.classList.add("title");
    headerEl.textContent = "Barron Lake Eatery";

    const textEl = document.createElement("p");
    textEl.classList.add("subtitle");
    textEl.textContent = "Contact";

    const contactContainerEl = document.createElement("div");
    contactContainerEl.classList.add("contact-container")

    const contactLocationEl = document.createElement("p");
    contactLocationEl.classList.add("text");
    contactLocationEl.textContent = "Located at: 567 Barron Dr, Serenity Springs, Rhode Island";

    const contactEmailEl = document.createElement("p");
    contactEmailEl.classList.add("text");
    contactEmailEl.textContent = "fakeEmail@email.com";

    const contactPhoneEl = document.createElement("p");
    contactPhoneEl.classList.add("text");
    contactPhoneEl.textContent = "583-629-5542";

    const div = document.createElement("div");

    contactContainerEl.appendChild(contactLocationEl);
    contactContainerEl.appendChild(contactEmailEl);
    contactContainerEl.appendChild(contactPhoneEl);
    
    div.appendChild(navbar);
    div.appendChild(headerEl);
    div.appendChild(textEl);
    div.appendChild(contactContainerEl);

    return div;
}

/***/ }),

/***/ "./src/homePageLoad.js":
/*!*****************************!*\
  !*** ./src/homePageLoad.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homePageLoad)
/* harmony export */ });
/* harmony import */ var _restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant.jpg */ "./src/restaurant.jpg");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



function homePageLoad() {

    const navbar = document.createElement("ul");
    navbar.setAttribute("id", "navbar");

    const navbarHome = document.createElement("li");
    navbarHome.setAttribute("id", "home");
    navbarHome.textContent = "Home";
    navbarHome.classList.add("active");
    navbarHome.style.backgroundColor = '#22a0df';

    const navbarMenu = document.createElement("li");
    navbarMenu.setAttribute("id", "menu");
    navbarMenu.style.cursor = "pointer";
    navbarMenu.textContent = "Menu";

    const navbarContact = document.createElement("li");
    navbarContact.setAttribute("id", "contact");
    navbarContact.style.cursor = "pointer";
    navbarContact.textContent = "Contact";

    navbar.appendChild(navbarHome);
    navbar.appendChild(navbarMenu);
    navbar.appendChild(navbarContact);


    const headerEl = document.createElement("h1");
    headerEl.classList.add("title");
    headerEl.textContent = "Barron Lake Eatery";

    const textEl = document.createElement("p");
    textEl.classList.add("text");
    textEl.classList.add('home-text')
    textEl.textContent = "Welcome to Barron Lake Eatery, where culinary excellence meets lakeside charm. Nestled on the shores of the serene Barron Lake, our restaurant invites you to embark on a gastronomic journey that harmonizes flavors with breathtaking views. At Barron Lake Eatery, we take pride in offering a diverse menu that celebrates both local and international cuisines, curated with the finest, freshest ingredients. From mouthwatering seafood delicacies to hearty comfort foods, each dish is a masterpiece crafted by our skilled chefs. Our inviting ambiance, inspired by the natural beauty of the lake, provides the perfect backdrop for a memorable dining experience. Whether you're enjoying a romantic evening by the water, gathering with friends, or savoring a family meal, Barron Lake Eatery promises an unparalleled fusion of taste, atmosphere, and hospitality. Come join us, and let Barron Lake Eatery be your destination for exceptional dining moments by the lake.";

    const restaurantImage = new Image();
    restaurantImage.src = _restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__
    restaurantImage.classList.add('centered-image');
    restaurantImage.width = (60 * window.innerWidth) / 100;


    const div = document.createElement("div");

    div.appendChild(navbar);
    div.appendChild(headerEl);
    div.appendChild(textEl);
    div.appendChild(restaurantImage)

    return div;
}

/***/ }),

/***/ "./src/menuPageLoad.js":
/*!*****************************!*\
  !*** ./src/menuPageLoad.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuPageLoad)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _fish_and_chips_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fish-and-chips.jpg */ "./src/fish-and-chips.jpg");
/* harmony import */ var _catfish_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catfish.jpg */ "./src/catfish.jpg");
/* harmony import */ var _fish_tacos_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fish-tacos.jpg */ "./src/fish-tacos.jpg");





function menuPageLoad() {

    const navbar = document.createElement("ul");
    navbar.setAttribute("id", "navbar");

    const navbarHome = document.createElement("li");
    navbarHome.setAttribute("id", "home");
    navbarHome.style.cursor = "pointer";
    navbarHome.textContent = "Home";

    const navbarMenu = document.createElement("li");
    navbarMenu.setAttribute("id", "menu");
    navbarMenu.classList.add("active");
    navbarMenu.textContent = "Menu";
    navbarMenu.style.backgroundColor = '#22a0df';

    const navbarContact = document.createElement("li");
    navbarContact.setAttribute("id", "contact");
    navbarContact.style.cursor = "pointer";
    navbarContact.textContent = "Contact";

    navbar.appendChild(navbarHome);
    navbar.appendChild(navbarMenu);
    navbar.appendChild(navbarContact);


    const headerEl = document.createElement("h1");
    headerEl.classList.add("title");
    headerEl.textContent = "Barron Lake Eatery";

    const textEl = document.createElement("p");
    textEl.classList.add("subtitle");
    textEl.textContent = "Menu";

    const menuItemContainer = document.createElement("div");
    menuItemContainer.setAttribute("id", "meals");

    // Menu item 1
    const menuItem1 = document.createElement("div");
    menuItem1.classList.add("meal");
    const menuItem1Title = document.createElement("h4");
    menuItem1Title.classList.add("mealTitle");
    menuItem1Title.textContent = "Fish & Chips";
    const menuItem1Description = document.createElement("p");
    menuItem1Description.classList.add("mealDescription");
    menuItem1Description.textContent = "crispy golden fillets of the freshest catch paired with hand-cut, double-cooked chips."

    const mealImage1 = new Image();
    mealImage1.src = _fish_and_chips_jpg__WEBPACK_IMPORTED_MODULE_1__
    mealImage1.classList.add('meal-image');

    menuItem1.appendChild(menuItem1Title);
    menuItem1.appendChild(menuItem1Description);
    menuItem1.appendChild(mealImage1);

    // Menu item 2

    const menuItem2 = document.createElement("div");
    menuItem2.classList.add("meal");
    const menuItem2Title = document.createElement("h4");
    menuItem2Title.classList.add("mealTitle");
    menuItem2Title.textContent = "Fried Catfish";
    const menuItem2Description = document.createElement("p");
    menuItem2Description.classList.add("mealDescription");
    menuItem2Description.textContent = "Deepfried catfish fillets, delicately seasoned and served with a side coleslaw."

    const mealImage2 = new Image();
    mealImage2.src = _catfish_jpg__WEBPACK_IMPORTED_MODULE_2__
    mealImage2.classList.add('meal-image');

    menuItem2.appendChild(menuItem2Title);
    menuItem2.appendChild(menuItem2Description);
    menuItem2.appendChild(mealImage2);

    // Menu item 3

    const menuItem3 = document.createElement("div");
    menuItem3.classList.add("meal");
    const menuItem3Title = document.createElement("h4");
    menuItem3Title.classList.add("mealTitle");
    menuItem3Title.textContent = "Fish tacos";
    const menuItem3Description = document.createElement("p");
    menuItem3Description.classList.add("mealDescription");
    menuItem3Description.textContent = "One of our fan favorites, a mix of all our lake fish blended into two tacos, enjoy!"

    const mealImage3 = new Image();
    mealImage3.src = _fish_tacos_jpg__WEBPACK_IMPORTED_MODULE_3__
    mealImage3.classList.add('meal-image');

    menuItem3.appendChild(menuItem3Title);
    menuItem3.appendChild(menuItem3Description);
    menuItem3.appendChild(mealImage3);


    menuItemContainer.appendChild(menuItem1);
    menuItemContainer.appendChild(menuItem2);
    menuItemContainer.appendChild(menuItem3);

    const div = document.createElement("div");

    div.appendChild(navbar);
    div.appendChild(headerEl);
    div.appendChild(textEl);
    div.appendChild(menuItemContainer);

    return div;
}

/***/ }),

/***/ "./src/catfish.jpg":
/*!*************************!*\
  !*** ./src/catfish.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d695ec763f629551dbaa.jpg";

/***/ }),

/***/ "./src/fish-and-chips.jpg":
/*!********************************!*\
  !*** ./src/fish-and-chips.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ce272875189a93d33402.jpg";

/***/ }),

/***/ "./src/fish-tacos.jpg":
/*!****************************!*\
  !*** ./src/fish-tacos.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "23e90bdcc76b9fbd0c3a.jpg";

/***/ }),

/***/ "./src/restaurant.jpg":
/*!****************************!*\
  !*** ./src/restaurant.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "271b7bf9f063caa3275e.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _homePageLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homePageLoad */ "./src/homePageLoad.js");
/* harmony import */ var _menuPageLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuPageLoad */ "./src/menuPageLoad.js");
/* harmony import */ var _contactPageLoad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactPageLoad */ "./src/contactPageLoad.js");






function load(page) {
    document.body.innerHTML = "";
    document.body.appendChild(page);

    const navbarHome = document.getElementById("home");
    navbarHome.addEventListener('click', (e) => {
        e.preventDefault();
        load((0,_homePageLoad__WEBPACK_IMPORTED_MODULE_1__["default"])());
    });

    const navbarMenu = document.getElementById("menu");
    navbarMenu.addEventListener('click', (e) => {
        e.preventDefault();
        load((0,_menuPageLoad__WEBPACK_IMPORTED_MODULE_2__["default"])()); 
    });

    const navbarContact = document.getElementById("contact");
    navbarContact.addEventListener('click', (e) => {
        e.preventDefault();
        load((0,_contactPageLoad__WEBPACK_IMPORTED_MODULE_3__["default"])());
    });
}

load((0,_homePageLoad__WEBPACK_IMPORTED_MODULE_1__["default"])());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvR0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7O0FBRXFCO0FBQ0E7QUFDTTs7QUFFaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEseURBQVk7QUFDekIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxhQUFhLHlEQUFZO0FBQ3pCLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsYUFBYSw0REFBZTtBQUM1QixLQUFLO0FBQ0w7O0FBRUEsS0FBSyx5REFBWSxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0UGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWVQYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudVBhZ2VMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICAgIG1hcmdpbjogMzBweCAxMHZ3IDBweCAxMHZ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmYxZjQ7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tIE5hdmJhciAtLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG51bCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDZlODI7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwNDI1ODtcbn1cblxuI2hvbWUge1xuICAgIG1hcmdpbi1sZWZ0OiBjbGFtcCgwcHgsIDV2dywgMzBweCk7XG59XG5cbiNtZW51LCAjY29udGFjdCB7XG4gICAgbWFyZ2luLWxlZnQ6IGNsYW1wKDEwcHgsIDV2dywgMTQwcHgpO1xufVxuXG51bCA+IGxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0gQ2VudGVyIFRleHQgLS0tLS0tLS0tLS0tLS0tLS0tLS0gICAqL1xuLnRpdGxlLCAudGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3VidGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tIEhvbWUgLS0tLS0tLS0tLS0tLS0tLS0tLS0gICovXG5cbi5ob21lLXRleHQge1xuICAgIHdpZHRoOiA2MHZ3O1xuICAgIG1hcmdpbjogNXB4IGF1dG87XG59XG5cbi5jZW50ZXJlZC1pbWFnZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLSBNZW51IC0tLS0tLS0tLS0tLS0tLS0tLS0tICAqL1xuXG4ubWVhbCB7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MzZGZlNztcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWF4LXdpZHRoOiA0MHZ3O1xuICAgIG1pbi13aWR0aDogMjUwcHg7XG59XG5cbi5tZWFsLWltYWdlIHtcbiAgICB3aWR0aDogMjB2dztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwdnc7XG4gICAgbWluLXdpZHRoOiAxMjVweDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0gQ29udGFjdCAtLS0tLS0tLS0tLS0tLS0tLS0tLSAgKi9cblxuLmNvbnRhY3QtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICBtYXJnaW46IDIwcHggYXV0bzsgLyogQ2VudGVyIGhvcml6b250YWxseSAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjM2RmZTc7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG1heC13aWR0aDogNTUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBDZW50ZXIgYW55IGlubGluZSBvciBpbmxpbmUtYmxvY2sgY2hpbGRyZW4gaG9yaXpvbnRhbGx5ICovXG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tIEltYWdlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLSAgKi9cblxuXG5cblxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIseUJBQXlCO0FBQzdCOztBQUVBLHFEQUFxRDs7QUFFckQ7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQSw0REFBNEQ7QUFDNUQ7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQSxvREFBb0Q7O0FBRXBEO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBLG9EQUFvRDs7QUFFcEQ7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBLHVEQUF1RDs7QUFFdkQ7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCLEVBQUUsd0JBQXdCO0lBQzNDLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0IsRUFBRSw0REFBNEQ7QUFDcEY7O0FBRUEsc0RBQXNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBtYXJnaW46IDMwcHggMTB2dyAwcHggMTB2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZjFmNDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0gTmF2YmFyIC0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxudWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA2ZTgyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA0MjU4O1xcbn1cXG5cXG4jaG9tZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiBjbGFtcCgwcHgsIDV2dywgMzBweCk7XFxufVxcblxcbiNtZW51LCAjY29udGFjdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiBjbGFtcCgxMHB4LCA1dncsIDE0MHB4KTtcXG59XFxuXFxudWwgPiBsaSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDdweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tIENlbnRlciBUZXh0IC0tLS0tLS0tLS0tLS0tLS0tLS0tICAgKi9cXG4udGl0bGUsIC50ZXh0IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc3VidGl0bGUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tIEhvbWUgLS0tLS0tLS0tLS0tLS0tLS0tLS0gICovXFxuXFxuLmhvbWUtdGV4dCB7XFxuICAgIHdpZHRoOiA2MHZ3O1xcbiAgICBtYXJnaW46IDVweCBhdXRvO1xcbn1cXG5cXG4uY2VudGVyZWQtaW1hZ2Uge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLSBNZW51IC0tLS0tLS0tLS0tLS0tLS0tLS0tICAqL1xcblxcbi5tZWFsIHtcXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XFxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzNkZmU3O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBtYXgtd2lkdGg6IDQwdnc7XFxuICAgIG1pbi13aWR0aDogMjUwcHg7XFxufVxcblxcbi5tZWFsLWltYWdlIHtcXG4gICAgd2lkdGg6IDIwdnc7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHZ3O1xcbiAgICBtaW4td2lkdGg6IDEyNXB4O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLSBDb250YWN0IC0tLS0tLS0tLS0tLS0tLS0tLS0tICAqL1xcblxcbi5jb250YWN0LWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xcbiAgICBtYXJnaW46IDIwcHggYXV0bzsgLyogQ2VudGVyIGhvcml6b250YWxseSAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzNkZmU3O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8qIENlbnRlciBhbnkgaW5saW5lIG9yIGlubGluZS1ibG9jayBjaGlsZHJlbiBob3Jpem9udGFsbHkgKi9cXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0gSW1hZ2VzIC0tLS0tLS0tLS0tLS0tLS0tLS0tICAqL1xcblxcblxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWN0UGFnZUxvYWQoKSB7XG5cbiAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgbmF2YmFyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmF2YmFyXCIpO1xuXG4gICAgY29uc3QgbmF2YmFySG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBuYXZiYXJIb21lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZVwiKTtcbiAgICBuYXZiYXJIb21lLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgIG5hdmJhckhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcblxuICAgIGNvbnN0IG5hdmJhck1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbmF2YmFyTWVudS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnVcIik7XG4gICAgbmF2YmFyTWVudS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICBuYXZiYXJNZW51LnRleHRDb250ZW50ID0gXCJNZW51XCI7XG5cbiAgICBjb25zdCBuYXZiYXJDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIG5hdmJhckNvbnRhY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0XCIpO1xuICAgIG5hdmJhckNvbnRhY3QuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBuYXZiYXJDb250YWN0LnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gICAgbmF2YmFyQ29udGFjdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzIyYTBkZidcblxuICAgIG5hdmJhci5hcHBlbmRDaGlsZChuYXZiYXJIb21lKTtcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQobmF2YmFyTWVudSk7XG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKG5hdmJhckNvbnRhY3QpO1xuXG5cbiAgICBjb25zdCBoZWFkZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkZXJFbC5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgaGVhZGVyRWwudGV4dENvbnRlbnQgPSBcIkJhcnJvbiBMYWtlIEVhdGVyeVwiO1xuXG4gICAgY29uc3QgdGV4dEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGV4dEVsLmNsYXNzTGlzdC5hZGQoXCJzdWJ0aXRsZVwiKTtcbiAgICB0ZXh0RWwudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcblxuICAgIGNvbnN0IGNvbnRhY3RDb250YWluZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdENvbnRhaW5lckVsLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWNvbnRhaW5lclwiKVxuXG4gICAgY29uc3QgY29udGFjdExvY2F0aW9uRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb250YWN0TG9jYXRpb25FbC5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKTtcbiAgICBjb250YWN0TG9jYXRpb25FbC50ZXh0Q29udGVudCA9IFwiTG9jYXRlZCBhdDogNTY3IEJhcnJvbiBEciwgU2VyZW5pdHkgU3ByaW5ncywgUmhvZGUgSXNsYW5kXCI7XG5cbiAgICBjb25zdCBjb250YWN0RW1haWxFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnRhY3RFbWFpbEVsLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0XCIpO1xuICAgIGNvbnRhY3RFbWFpbEVsLnRleHRDb250ZW50ID0gXCJmYWtlRW1haWxAZW1haWwuY29tXCI7XG5cbiAgICBjb25zdCBjb250YWN0UGhvbmVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnRhY3RQaG9uZUVsLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0XCIpO1xuICAgIGNvbnRhY3RQaG9uZUVsLnRleHRDb250ZW50ID0gXCI1ODMtNjI5LTU1NDJcIjtcblxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb250YWN0Q29udGFpbmVyRWwuYXBwZW5kQ2hpbGQoY29udGFjdExvY2F0aW9uRWwpO1xuICAgIGNvbnRhY3RDb250YWluZXJFbC5hcHBlbmRDaGlsZChjb250YWN0RW1haWxFbCk7XG4gICAgY29udGFjdENvbnRhaW5lckVsLmFwcGVuZENoaWxkKGNvbnRhY3RQaG9uZUVsKTtcbiAgICBcbiAgICBkaXYuYXBwZW5kQ2hpbGQobmF2YmFyKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGVyRWwpO1xuICAgIGRpdi5hcHBlbmRDaGlsZCh0ZXh0RWwpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjb250YWN0Q29udGFpbmVyRWwpO1xuXG4gICAgcmV0dXJuIGRpdjtcbn0iLCJpbXBvcnQgSWNvbiBmcm9tICcuL3Jlc3RhdXJhbnQuanBnJ1xuaW1wb3J0ICcuL3N0eWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZVBhZ2VMb2FkKCkge1xuXG4gICAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIG5hdmJhci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hdmJhclwiKTtcblxuICAgIGNvbnN0IG5hdmJhckhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbmF2YmFySG9tZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWVcIik7XG4gICAgbmF2YmFySG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICAgIG5hdmJhckhvbWUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBuYXZiYXJIb21lLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMjJhMGRmJztcblxuICAgIGNvbnN0IG5hdmJhck1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbmF2YmFyTWVudS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnVcIik7XG4gICAgbmF2YmFyTWVudS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICBuYXZiYXJNZW51LnRleHRDb250ZW50ID0gXCJNZW51XCI7XG5cbiAgICBjb25zdCBuYXZiYXJDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIG5hdmJhckNvbnRhY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0XCIpO1xuICAgIG5hdmJhckNvbnRhY3Quc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgbmF2YmFyQ29udGFjdC50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKG5hdmJhckhvbWUpO1xuICAgIG5hdmJhci5hcHBlbmRDaGlsZChuYXZiYXJNZW51KTtcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQobmF2YmFyQ29udGFjdCk7XG5cblxuICAgIGNvbnN0IGhlYWRlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRlckVsLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICBoZWFkZXJFbC50ZXh0Q29udGVudCA9IFwiQmFycm9uIExha2UgRWF0ZXJ5XCI7XG5cbiAgICBjb25zdCB0ZXh0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0ZXh0RWwuY2xhc3NMaXN0LmFkZChcInRleHRcIik7XG4gICAgdGV4dEVsLmNsYXNzTGlzdC5hZGQoJ2hvbWUtdGV4dCcpXG4gICAgdGV4dEVsLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIEJhcnJvbiBMYWtlIEVhdGVyeSwgd2hlcmUgY3VsaW5hcnkgZXhjZWxsZW5jZSBtZWV0cyBsYWtlc2lkZSBjaGFybS4gTmVzdGxlZCBvbiB0aGUgc2hvcmVzIG9mIHRoZSBzZXJlbmUgQmFycm9uIExha2UsIG91ciByZXN0YXVyYW50IGludml0ZXMgeW91IHRvIGVtYmFyayBvbiBhIGdhc3Ryb25vbWljIGpvdXJuZXkgdGhhdCBoYXJtb25pemVzIGZsYXZvcnMgd2l0aCBicmVhdGh0YWtpbmcgdmlld3MuIEF0IEJhcnJvbiBMYWtlIEVhdGVyeSwgd2UgdGFrZSBwcmlkZSBpbiBvZmZlcmluZyBhIGRpdmVyc2UgbWVudSB0aGF0IGNlbGVicmF0ZXMgYm90aCBsb2NhbCBhbmQgaW50ZXJuYXRpb25hbCBjdWlzaW5lcywgY3VyYXRlZCB3aXRoIHRoZSBmaW5lc3QsIGZyZXNoZXN0IGluZ3JlZGllbnRzLiBGcm9tIG1vdXRod2F0ZXJpbmcgc2VhZm9vZCBkZWxpY2FjaWVzIHRvIGhlYXJ0eSBjb21mb3J0IGZvb2RzLCBlYWNoIGRpc2ggaXMgYSBtYXN0ZXJwaWVjZSBjcmFmdGVkIGJ5IG91ciBza2lsbGVkIGNoZWZzLiBPdXIgaW52aXRpbmcgYW1iaWFuY2UsIGluc3BpcmVkIGJ5IHRoZSBuYXR1cmFsIGJlYXV0eSBvZiB0aGUgbGFrZSwgcHJvdmlkZXMgdGhlIHBlcmZlY3QgYmFja2Ryb3AgZm9yIGEgbWVtb3JhYmxlIGRpbmluZyBleHBlcmllbmNlLiBXaGV0aGVyIHlvdSdyZSBlbmpveWluZyBhIHJvbWFudGljIGV2ZW5pbmcgYnkgdGhlIHdhdGVyLCBnYXRoZXJpbmcgd2l0aCBmcmllbmRzLCBvciBzYXZvcmluZyBhIGZhbWlseSBtZWFsLCBCYXJyb24gTGFrZSBFYXRlcnkgcHJvbWlzZXMgYW4gdW5wYXJhbGxlbGVkIGZ1c2lvbiBvZiB0YXN0ZSwgYXRtb3NwaGVyZSwgYW5kIGhvc3BpdGFsaXR5LiBDb21lIGpvaW4gdXMsIGFuZCBsZXQgQmFycm9uIExha2UgRWF0ZXJ5IGJlIHlvdXIgZGVzdGluYXRpb24gZm9yIGV4Y2VwdGlvbmFsIGRpbmluZyBtb21lbnRzIGJ5IHRoZSBsYWtlLlwiO1xuXG4gICAgY29uc3QgcmVzdGF1cmFudEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgcmVzdGF1cmFudEltYWdlLnNyYyA9IEljb25cbiAgICByZXN0YXVyYW50SW1hZ2UuY2xhc3NMaXN0LmFkZCgnY2VudGVyZWQtaW1hZ2UnKTtcbiAgICByZXN0YXVyYW50SW1hZ2Uud2lkdGggPSAoNjAgKiB3aW5kb3cuaW5uZXJXaWR0aCkgLyAxMDA7XG5cblxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQobmF2YmFyKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGVyRWwpO1xuICAgIGRpdi5hcHBlbmRDaGlsZCh0ZXh0RWwpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChyZXN0YXVyYW50SW1hZ2UpXG5cbiAgICByZXR1cm4gZGl2O1xufSIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgZmlzaEFuZENoaXBzIGZyb20gJy4vZmlzaC1hbmQtY2hpcHMuanBnJ1xuaW1wb3J0IGNhdGZpc2ggZnJvbSAnLi9jYXRmaXNoLmpwZydcbmltcG9ydCBmaXNoVGFjb3MgZnJvbSAnLi9maXNoLXRhY29zLmpwZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudVBhZ2VMb2FkKCkge1xuXG4gICAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIG5hdmJhci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hdmJhclwiKTtcblxuICAgIGNvbnN0IG5hdmJhckhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbmF2YmFySG9tZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWVcIik7XG4gICAgbmF2YmFySG9tZS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICBuYXZiYXJIb21lLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG5cbiAgICBjb25zdCBuYXZiYXJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIG5hdmJhck1lbnUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51XCIpO1xuICAgIG5hdmJhck1lbnUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBuYXZiYXJNZW51LnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgbmF2YmFyTWVudS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzIyYTBkZic7XG5cbiAgICBjb25zdCBuYXZiYXJDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIG5hdmJhckNvbnRhY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0XCIpO1xuICAgIG5hdmJhckNvbnRhY3Quc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgbmF2YmFyQ29udGFjdC50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKG5hdmJhckhvbWUpO1xuICAgIG5hdmJhci5hcHBlbmRDaGlsZChuYXZiYXJNZW51KTtcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQobmF2YmFyQ29udGFjdCk7XG5cblxuICAgIGNvbnN0IGhlYWRlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRlckVsLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICBoZWFkZXJFbC50ZXh0Q29udGVudCA9IFwiQmFycm9uIExha2UgRWF0ZXJ5XCI7XG5cbiAgICBjb25zdCB0ZXh0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0ZXh0RWwuY2xhc3NMaXN0LmFkZChcInN1YnRpdGxlXCIpO1xuICAgIHRleHRFbC50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuXG4gICAgY29uc3QgbWVudUl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVhbHNcIik7XG5cbiAgICAvLyBNZW51IGl0ZW0gMVxuICAgIGNvbnN0IG1lbnVJdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW0xLmNsYXNzTGlzdC5hZGQoXCJtZWFsXCIpO1xuICAgIGNvbnN0IG1lbnVJdGVtMVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgIG1lbnVJdGVtMVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJtZWFsVGl0bGVcIik7XG4gICAgbWVudUl0ZW0xVGl0bGUudGV4dENvbnRlbnQgPSBcIkZpc2ggJiBDaGlwc1wiO1xuICAgIGNvbnN0IG1lbnVJdGVtMURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbWVudUl0ZW0xRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcIm1lYWxEZXNjcmlwdGlvblwiKTtcbiAgICBtZW51SXRlbTFEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiY3Jpc3B5IGdvbGRlbiBmaWxsZXRzIG9mIHRoZSBmcmVzaGVzdCBjYXRjaCBwYWlyZWQgd2l0aCBoYW5kLWN1dCwgZG91YmxlLWNvb2tlZCBjaGlwcy5cIlxuXG4gICAgY29uc3QgbWVhbEltYWdlMSA9IG5ldyBJbWFnZSgpO1xuICAgIG1lYWxJbWFnZTEuc3JjID0gZmlzaEFuZENoaXBzXG4gICAgbWVhbEltYWdlMS5jbGFzc0xpc3QuYWRkKCdtZWFsLWltYWdlJyk7XG5cbiAgICBtZW51SXRlbTEuYXBwZW5kQ2hpbGQobWVudUl0ZW0xVGl0bGUpO1xuICAgIG1lbnVJdGVtMS5hcHBlbmRDaGlsZChtZW51SXRlbTFEZXNjcmlwdGlvbik7XG4gICAgbWVudUl0ZW0xLmFwcGVuZENoaWxkKG1lYWxJbWFnZTEpO1xuXG4gICAgLy8gTWVudSBpdGVtIDJcblxuICAgIGNvbnN0IG1lbnVJdGVtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW0yLmNsYXNzTGlzdC5hZGQoXCJtZWFsXCIpO1xuICAgIGNvbnN0IG1lbnVJdGVtMlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgIG1lbnVJdGVtMlRpdGxlLmNsYXNzTGlzdC5hZGQoXCJtZWFsVGl0bGVcIik7XG4gICAgbWVudUl0ZW0yVGl0bGUudGV4dENvbnRlbnQgPSBcIkZyaWVkIENhdGZpc2hcIjtcbiAgICBjb25zdCBtZW51SXRlbTJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1lbnVJdGVtMkRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJtZWFsRGVzY3JpcHRpb25cIik7XG4gICAgbWVudUl0ZW0yRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkRlZXBmcmllZCBjYXRmaXNoIGZpbGxldHMsIGRlbGljYXRlbHkgc2Vhc29uZWQgYW5kIHNlcnZlZCB3aXRoIGEgc2lkZSBjb2xlc2xhdy5cIlxuXG4gICAgY29uc3QgbWVhbEltYWdlMiA9IG5ldyBJbWFnZSgpO1xuICAgIG1lYWxJbWFnZTIuc3JjID0gY2F0ZmlzaFxuICAgIG1lYWxJbWFnZTIuY2xhc3NMaXN0LmFkZCgnbWVhbC1pbWFnZScpO1xuXG4gICAgbWVudUl0ZW0yLmFwcGVuZENoaWxkKG1lbnVJdGVtMlRpdGxlKTtcbiAgICBtZW51SXRlbTIuYXBwZW5kQ2hpbGQobWVudUl0ZW0yRGVzY3JpcHRpb24pO1xuICAgIG1lbnVJdGVtMi5hcHBlbmRDaGlsZChtZWFsSW1hZ2UyKTtcblxuICAgIC8vIE1lbnUgaXRlbSAzXG5cbiAgICBjb25zdCBtZW51SXRlbTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtMy5jbGFzc0xpc3QuYWRkKFwibWVhbFwiKTtcbiAgICBjb25zdCBtZW51SXRlbTNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICBtZW51SXRlbTNUaXRsZS5jbGFzc0xpc3QuYWRkKFwibWVhbFRpdGxlXCIpO1xuICAgIG1lbnVJdGVtM1RpdGxlLnRleHRDb250ZW50ID0gXCJGaXNoIHRhY29zXCI7XG4gICAgY29uc3QgbWVudUl0ZW0zRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBtZW51SXRlbTNEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwibWVhbERlc2NyaXB0aW9uXCIpO1xuICAgIG1lbnVJdGVtM0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJPbmUgb2Ygb3VyIGZhbiBmYXZvcml0ZXMsIGEgbWl4IG9mIGFsbCBvdXIgbGFrZSBmaXNoIGJsZW5kZWQgaW50byB0d28gdGFjb3MsIGVuam95IVwiXG5cbiAgICBjb25zdCBtZWFsSW1hZ2UzID0gbmV3IEltYWdlKCk7XG4gICAgbWVhbEltYWdlMy5zcmMgPSBmaXNoVGFjb3NcbiAgICBtZWFsSW1hZ2UzLmNsYXNzTGlzdC5hZGQoJ21lYWwtaW1hZ2UnKTtcblxuICAgIG1lbnVJdGVtMy5hcHBlbmRDaGlsZChtZW51SXRlbTNUaXRsZSk7XG4gICAgbWVudUl0ZW0zLmFwcGVuZENoaWxkKG1lbnVJdGVtM0Rlc2NyaXB0aW9uKTtcbiAgICBtZW51SXRlbTMuYXBwZW5kQ2hpbGQobWVhbEltYWdlMyk7XG5cblxuICAgIG1lbnVJdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtMSk7XG4gICAgbWVudUl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW0yKTtcbiAgICBtZW51SXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SXRlbTMpO1xuXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChuYXZiYXIpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChoZWFkZXJFbCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHRleHRFbCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKG1lbnVJdGVtQ29udGFpbmVyKTtcblxuICAgIHJldHVybiBkaXY7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuaW1wb3J0IGhvbWVQYWdlTG9hZCBmcm9tIFwiLi9ob21lUGFnZUxvYWRcIjtcbmltcG9ydCBtZW51UGFnZUxvYWQgZnJvbSAnLi9tZW51UGFnZUxvYWQnO1xuaW1wb3J0IGNvbnRhY3RQYWdlTG9hZCBmcm9tICcuL2NvbnRhY3RQYWdlTG9hZCc7XG5cbmZ1bmN0aW9uIGxvYWQocGFnZSkge1xuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhZ2UpO1xuXG4gICAgY29uc3QgbmF2YmFySG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKTtcbiAgICBuYXZiYXJIb21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsb2FkKGhvbWVQYWdlTG9hZCgpKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG5hdmJhck1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIik7XG4gICAgbmF2YmFyTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbG9hZChtZW51UGFnZUxvYWQoKSk7IFxuICAgIH0pO1xuXG4gICAgY29uc3QgbmF2YmFyQ29udGFjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdFwiKTtcbiAgICBuYXZiYXJDb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsb2FkKGNvbnRhY3RQYWdlTG9hZCgpKTtcbiAgICB9KTtcbn1cblxubG9hZChob21lUGFnZUxvYWQoKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9