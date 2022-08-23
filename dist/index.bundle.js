/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Router/Routers.js":
/*!***************************!*\
  !*** ./Router/Routers.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pages_Home_home_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/Home/home.app.js */ \"./pages/Home/home.app.js\");\n/* harmony import */ var _pages_About_about_app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/About/about.app.js */ \"./pages/About/about.app.js\");\n\n\n\nconst Router = [\n  { url: \"/\", pageComponent: _pages_Home_home_app_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] },\n  { url: \"/about\", pageComponent: _pages_About_about_app_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"] },\n];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Router);\n\n\n//# sourceURL=webpack:///./Router/Routers.js?");

/***/ }),

/***/ "./components/modal.component.js":
/*!***************************************!*\
  !*** ./components/modal.component.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _core_class_coreComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/class/coreComponent.js */ \"./core/class/coreComponent.js\");\n/* harmony import */ var _modal_style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.style.js */ \"./components/modal.style.js\");\n/* harmony import */ var _modal_template_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.template.js */ \"./components/modal.template.js\");\n\n\n\n\nconst ModalComponent = new _core_class_coreComponent_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  selector: \"modal\",\n  template: _modal_template_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  style: _modal_style_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalComponent.build());\n\n\n//# sourceURL=webpack:///./components/modal.component.js?");

/***/ }),

/***/ "./components/modal.style.js":
/*!***********************************!*\
  !*** ./components/modal.style.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _core_class_coreCSS_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/class/coreCSS.js */ \"./core/class/coreCSS.js\");\n\n\nconst ModalStyle = new _core_class_coreCSS_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](/*css*/ `\n.modal-gnrl {\n    background-color:red;\n}\n`);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalStyle.build());\n\n\n//# sourceURL=webpack:///./components/modal.style.js?");

/***/ }),

/***/ "./components/modal.template.js":
/*!**************************************!*\
  !*** ./components/modal.template.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _core_class_coreHTML_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/class/coreHTML.js */ \"./core/class/coreHTML.js\");\n\n\nconst ModalTemplate = new _core_class_coreHTML_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](`\n<div class='modal-gnrl'>Merhaba ben bir modalım</div>\n`);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalTemplate.build());\n\n\n//# sourceURL=webpack:///./components/modal.template.js?");

/***/ }),

/***/ "./core/class/Page.js":
/*!****************************!*\
  !*** ./core/class/Page.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_document_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/document.js */ \"./lib/document.js\");\n/* harmony import */ var _store_cssStore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/cssStore.js */ \"./core/store/cssStore.js\");\n\n\nclass Page {\n  pageName;\n  css;\n  script;\n  htmlTemplate;\n  roor;\n  components;\n  constructor(src) {\n    this.pageName = src.pageName;\n    this.css = src.css;\n    this.script = src.script;\n    this.htmlTemplate = src.htmlTemplate;\n    this.root = (0,_lib_document_js__WEBPACK_IMPORTED_MODULE_0__.getElementById)(\"root\");\n    this.components = src.components;\n  }\n  cssBuild() {\n    const styleSheet = new CSSStyleSheet();\n    styleSheet.replaceSync(this.css);\n    _store_cssStore_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].push(styleSheet);\n    document.adoptedStyleSheets = _store_cssStore_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  }\n  templateBuild() {\n    this.root.innerHTML = this.htmlTemplate;\n  }\n  componentBuild() {\n    let selector = this.components[0].componentSelector;\n    const tag = document.getElementsByTagName(selector);\n    tag[0].innerHTML = this.components[0].template;\n  }\n  build() {\n    this.cssBuild();\n    this.templateBuild();\n    this.componentBuild();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\n\n\n//# sourceURL=webpack:///./core/class/Page.js?");

/***/ }),

/***/ "./core/class/coreCSS.js":
/*!*******************************!*\
  !*** ./core/class/coreCSS.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _store_cssStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/cssStore.js */ \"./core/store/cssStore.js\");\n\n\nclass CSS {\n  css;\n  constructor(css) {\n    this.css = css;\n  }\n  build() {\n    const styleSheet = new CSSStyleSheet();\n    styleSheet.replaceSync(this.css);\n    _store_cssStore_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].push(..._store_cssStore_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], styleSheet);\n    return this.css;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CSS);\n\n\n//# sourceURL=webpack:///./core/class/coreCSS.js?");

/***/ }),

/***/ "./core/class/coreComponent.js":
/*!*************************************!*\
  !*** ./core/class/coreComponent.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _store_cssStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/cssStore */ \"./core/store/cssStore.js\");\n\n\nclass Component {\n  componentSelector;\n  template;\n  style;\n  constructor(c) {\n    this.componentSelector = c.selector;\n    this.template = c.template;\n    this.style = c.style;\n  }\n  build() {\n    const styleSheet = new CSSStyleSheet();\n    styleSheet.replaceSync(this.style);\n    document.adoptedStyleSheets = [..._store_cssStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"], styleSheet];\n    return this;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);\n\n\n//# sourceURL=webpack:///./core/class/coreComponent.js?");

/***/ }),

/***/ "./core/class/coreHTML.js":
/*!********************************!*\
  !*** ./core/class/coreHTML.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass HTML {\n  htmlTemplate;\n  constructor(htmlTemplate) {\n    this.htmlTemplate = htmlTemplate;\n  }\n  build() {\n    return this.htmlTemplate;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HTML);\n\n\n//# sourceURL=webpack:///./core/class/coreHTML.js?");

/***/ }),

/***/ "./core/initPage.js":
/*!**************************!*\
  !*** ./core/initPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _store_cssStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/cssStore */ \"./core/store/cssStore.js\");\n\nconst initPage = (route) => {\n  _store_cssStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length = 0;\n  route.pageComponent.build();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initPage);\n\n\n//# sourceURL=webpack:///./core/initPage.js?");

/***/ }),

/***/ "./core/store/cssStore.js":
/*!********************************!*\
  !*** ./core/store/cssStore.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cssStore = [];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cssStore);\n\n\n//# sourceURL=webpack:///./core/store/cssStore.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_document_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/document.js */ \"./lib/document.js\");\n/* harmony import */ var _Router_Routers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Router/Routers.js */ \"./Router/Routers.js\");\n/* harmony import */ var _core_initPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/initPage.js */ \"./core/initPage.js\");\n\n\n\n\nconst root = (0,_lib_document_js__WEBPACK_IMPORTED_MODULE_0__.getElementById)(\"root\");\n\nconst setRoute = (event) => {\n  const url = event.target.attributes[\"url-data\"].value;\n  history.pushState({}, \"\", url);\n  controlRoute();\n};\n\nconst controlRoute = () => {\n  const url = location.pathname;\n  const route = _Router_Routers_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find((route) => {\n    return route.url === url;\n  });\n  if (route) {\n    (0,_core_initPage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(route);\n  } else {\n    root.innerHTML = \"404Page\";\n  }\n  eventListener();\n};\n\nconst eventListener = () => {\n  Array.from(document.getElementsByClassName([\"link\"])).forEach((link) =>\n    link.addEventListener(\"click\", setRoute)\n  );\n};\n\neventListener();\n\ndocument.addEventListener(\"DOMContentLoaded\", controlRoute);\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./lib/document.js":
/*!*************************!*\
  !*** ./lib/document.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getElementById\": () => (/* binding */ getElementById)\n/* harmony export */ });\nconst getElementById = (elementID) => {\n  return document.getElementById(elementID);\n};\n\n\n//# sourceURL=webpack:///./lib/document.js?");

/***/ }),

/***/ "./pages/About/about.app.js":
/*!**********************************!*\
  !*** ./pages/About/about.app.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _core_class_Page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/class/Page.js */ \"./core/class/Page.js\");\n/* harmony import */ var _about_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.css.js */ \"./pages/About/about.css.js\");\n/* harmony import */ var _about_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.html.js */ \"./pages/About/about.html.js\");\n\n\n\n\nconst AboutPage = new _core_class_Page_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  pageName: \"about\",\n  css: _about_css_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  htmlTemplate: _about_html_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  script: \"about.app.js\",\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutPage);\n\n\n//# sourceURL=webpack:///./pages/About/about.app.js?");

/***/ }),

/***/ "./pages/About/about.css.js":
/*!**********************************!*\
  !*** ./pages/About/about.css.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _core_class_coreCSS_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/class/coreCSS.js */ \"./core/class/coreCSS.js\");\n\n\nconst style = new _core_class_coreCSS_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](/*css*/ `.modal {\n  display: flex;\n  flex-direction: column;\n  padding: 40px 30px;\n  width: 600px;\n  background-color: #fafafa;\n  box-shadow: 0px 0px 10px 1px #dbdada;\n  border-radius: 15px;\n  height: 60%;\n}\n`);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (style.build());\n\n\n//# sourceURL=webpack:///./pages/About/about.css.js?");

/***/ }),

/***/ "./pages/About/about.html.js":
/*!***********************************!*\
  !*** ./pages/About/about.html.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _core_class_coreHTML_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/class/coreHTML.js */ \"./core/class/coreHTML.js\");\n\n\nconst template = new _core_class_coreHTML_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](/*html*/ `\n<modal>Merhba</modal>\n<div>Merhaba bu about sayfası</div>\n`);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (template.build());\n\n\n//# sourceURL=webpack:///./pages/About/about.html.js?");

/***/ }),

/***/ "./pages/Home/home.app.js":
/*!********************************!*\
  !*** ./pages/Home/home.app.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _core_class_Page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/class/Page.js */ \"./core/class/Page.js\");\n/* harmony import */ var _home_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.css.js */ \"./pages/Home/home.css.js\");\n/* harmony import */ var _home_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.html.js */ \"./pages/Home/home.html.js\");\n/* harmony import */ var _components_modal_component_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/modal.component.js */ \"./components/modal.component.js\");\n\n\n\n\n\n\nconst HomePage = new _core_class_Page_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  pageName: \"home\",\n  css: _home_css_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  htmlTemplate: _home_html_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  script: \"home.app.js\",\n  components: [_components_modal_component_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]],\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n\n\n//# sourceURL=webpack:///./pages/Home/home.app.js?");

/***/ }),

/***/ "./pages/Home/home.css.js":
/*!********************************!*\
  !*** ./pages/Home/home.css.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _core_class_coreCSS_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/class/coreCSS.js */ \"./core/class/coreCSS.js\");\n\n\nconst style = new _core_class_coreCSS_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](/*css*/ `.modal {\n  display: flex;\n  flex-direction: column;\n  padding: 40px 30px;\n  width: 600px;\n  background-color: #fafafa;\n  box-shadow: 0px 0px 10px 1px #dbdada;\n  border-radius: 15px;\n  height: 60%;\n}\n.modal_title {\n  font-size: 80px;\n  color: rgb(66, 66, 248);\n  font-weight: bold;\n  text-align: center;\n}\n.modal_content {\n  padding: 20px 0px;\n  color: #5a5a5a;\n  font-size: 20px;\n  font-weight: bold;\n  text-align: center;\n  height: 100%;\n}\n\n.modal_footer {\n  display: flex;\n}\n.modal_footer a {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #202020;\n  font-weight: bold;\n  padding: 10px;\n  border-radius: 5px;\n  height: 140px;\n  width: 140px;\n  margin-right: 10px;\n  box-shadow: 0px 0px 5px 1px #cccccc;\n}\n\n.modal_footer a.blue {\n  background-color: rgb(66, 66, 248);\n  color: #fafafa;\n}\n`);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (style.build());\n\n\n//# sourceURL=webpack:///./pages/Home/home.css.js?");

/***/ }),

/***/ "./pages/Home/home.html.js":
/*!*********************************!*\
  !*** ./pages/Home/home.html.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _core_class_coreHTML_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/class/coreHTML.js */ \"./core/class/coreHTML.js\");\n\n\nconst template = new _core_class_coreHTML_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](/*html*/ `\n<modal></modal>\n<div class=\"container-fluid flex-center\" >\n  <div class='modal'>\n    <div class='modal_title'>coreSPA</div>\n    <div class='modal_content'>\n      <div> Welcome To coreSPA</div>\n      <div> Minimalist Single Page Aplication JavaScript library</div>\n    </div>\n    <div class='modal_footer'>\n      <a href='https://github.com/devcusn/coreSPA'>Source Code</a>\n      <a class='blue' href='https://github.com/devcusn/coreSPA/blob/main/README.md'>Documentation</a>\n    </div>\n  </div>\n</div>\n`);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (template.build());\n\n\n//# sourceURL=webpack:///./pages/Home/home.html.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;