(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/my/index"],{

/***/ 258:
/*!***************************************************************!*\
  !*** E:/project/智慧社区系统/main.js?{"page":"pages%2Fmy%2Findex"} ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _index = _interopRequireDefault(__webpack_require__(/*! ./pages/my/index.vue */ 259));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_index.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 259:
/*!********************************************!*\
  !*** E:/project/智慧社区系统/pages/my/index.vue ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_4dcceeb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4dcceeb0& */ 260);
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ 262);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Completd/HBuilderX.4.45.2025010502/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 34);

var renderjs




/* normalize component */

var component = Object(_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_4dcceeb0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_4dcceeb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _index_vue_vue_type_template_id_4dcceeb0___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/my/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 260:
/*!***************************************************************************!*\
  !*** E:/project/智慧社区系统/pages/my/index.vue?vue&type=template&id=4dcceeb0& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_4dcceeb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Completd/HBuilderX.4.45.2025010502/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../Completd/HBuilderX.4.45.2025010502/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../Completd/HBuilderX.4.45.2025010502/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../Completd/HBuilderX.4.45.2025010502/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../Completd/HBuilderX.4.45.2025010502/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Completd/HBuilderX.4.45.2025010502/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=template&id=4dcceeb0& */ 261);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_4dcceeb0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_4dcceeb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_4dcceeb0___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_4dcceeb0___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 261:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/智慧社区系统/pages/my/index.vue?vue&type=template&id=4dcceeb0& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 262:
/*!*********************************************************************!*\
  !*** E:/project/智慧社区系统/pages/my/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Completd/HBuilderX.4.45.2025010502/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../Completd/HBuilderX.4.45.2025010502/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../Completd/HBuilderX.4.45.2025010502/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../Completd/HBuilderX.4.45.2025010502/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Completd/HBuilderX.4.45.2025010502/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=script&lang=js& */ 263);
/* harmony import */ var _Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Completd_HBuilderX_4_45_2025010502_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 263:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/智慧社区系统/pages/my/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 46));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 48));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  onShow: function onShow() {
    try {
      this.userinfoObj = uni.getStorageSync('userinfo');
    } catch (e) {
      this.userinfoObj = "";
    }
    this.querymycount();
  },
  data: function data() {
    return {
      modalName: null,
      level: '青铜',
      jifen: 0,
      fensicount: 0,
      guanzhucount: 0,
      shoucangnum: 0,
      mydiancannum: 0,
      userinfoObj: {},
      iconList: [{
        icon: 'edit',
        color: 'blue',
        badge: 0,
        name: '去分享',
        bindtap: "fenxiang"
      }, {
        icon: 'sort',
        color: 'red',
        badge: 0,
        name: '我的发布',
        bindtap: "seefenxiang"
      }, {
        icon: 'writefill',
        color: 'purple',
        badge: 11,
        name: '去反馈',
        bindtap: "fankui"
      }, {
        icon: 'formfill',
        color: 'green',
        badge: 0,
        name: '查看反馈',
        bindtap: "seefankui"
      }, {
        icon: 'friendfill',
        color: 'green',
        badge: 0,
        name: '参与组团',
        bindtap: "canyuzutuan"
      }, {
        icon: 'discover',
        color: 'pink',
        badge: 0,
        name: '创建组团',
        bindtap: "chuangjian"
      }, {
        icon: 'selectionfill',
        color: 'green',
        badge: 0,
        name: '社区介绍',
        bindtap: "gongsimsg"
      }, {
        icon: 'scan',
        color: 'orange',
        badge: 0,
        name: '门禁扫码',
        bindtap: "ewm"
      }, {
        icon: 'form',
        color: 'blue',
        badge: 0,
        name: '访客预约',
        bindtap: "fankesubmit"
      }, {
        icon: 'message',
        color: 'red',
        badge: 0,
        name: '消息通知',
        bindtap: "seemsglist"
      }],
      iconOtherList: [{
        icon: 'profilefill',
        color: 'blue',
        badge: 0,
        name: '基本信息',
        bindtap: "edituser"
      }, {
        icon: 'lock',
        color: 'blue',
        badge: 0,
        name: '修改密码',
        bindtap: "editpassword"
      }, {
        icon: 'roundrightfill',
        color: 'blue',
        badge: 0,
        name: '退出',
        bindtap: "outlogin"
      }]
    };
  },
  methods: {
    showModal: function showModal(e) {
      this.modalName = 'Modal';
    },
    hideModal: function hideModal(e) {
      this.modalName = null;
    },
    tofun: function tofun(val) {
      console.log(val);
      if (val == 'fenxiang') {
        uni.navigateTo({
          url: '../share/setshare'
        });
      }
      if (val == 'seefenxiang') {
        uni.navigateTo({
          url: "../foodlist/usersharelist?userid=".concat(this.userinfoObj.id)
        });
      }
      if (val == 'fankui') {
        uni.navigateTo({
          url: './submitmsg'
        });
      }
      if (val == 'seefankui') {
        uni.navigateTo({
          url: './fankuilist'
        });
      }
      if (val == 'edituser') {
        uni.navigateTo({
          url: '../login/edituser'
        });
      }
      if (val == 'editpassword') {
        uni.navigateTo({
          url: '../login/updatapwd'
        });
      }
      if (val == 'shoucangtm') {
        uni.navigateTo({
          url: '../my/shoucangtm'
        });
      }
      if (val == 'canyuzutuan') {
        uni.navigateTo({
          url: '../my/canyuzutuan'
        });
      }
      if (val == 'chuangjian') {
        uni.navigateTo({
          url: "../activity/activity"
        });
      }
      if (val == 'gongsimsg') {
        uni.navigateTo({
          url: "../user/gongsimsg"
        });
      }
      if (val == 'ewm') {
        this.modalName = 'DialogModal2';
      }
      if (val == 'fankesubmit') {
        uni.navigateTo({
          url: "../user/fankesubmit"
        });
      }
      if (val == 'seemsglist') {
        uni.navigateTo({
          url: "../user/seemsglist"
        });
      }
      if (val == 'outlogin') {
        uni.showModal({
          content: '确定要退出吗？',
          cancelText: '取消',
          confirmText: '确定',
          success: function () {
            var _success = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(res) {
              return _regenerator.default.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (res.confirm) {
                        uni.removeStorageSync('userinfo');
                        uni.navigateTo({
                          url: '/pages/login/login'
                        });
                      }
                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
            function success(_x) {
              return _success.apply(this, arguments);
            }
            return success;
          }()
        });
      }
    },
    seefensi: function seefensi() {
      uni.navigateTo({
        url: './fensilist'
      });
    },
    seeguanzhu: function seeguanzhu() {
      uni.navigateTo({
        url: './guanzhulist'
      });
    },
    seeshoucang: function seeshoucang() {
      uni.navigateTo({
        url: './shoucanglist'
      });
    },
    seedianzan: function seedianzan() {
      uni.navigateTo({
        url: './seedianzan'
      });
    },
    querymycount: function querymycount() {
      var _this = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var obj, resdata;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                obj = {
                  userid: _this.userinfoObj.id
                };
                _context2.next = 3;
                return new _this.Request(_this.Urls.m().querymycount, obj).modepost();
              case 3:
                resdata = _context2.sent;
                _this.fensicount = resdata[0].fensicount;
                _this.guanzhucount = resdata[0].guanzhucount;
                _this.shoucangnum = resdata[0].shoucangnum;
                _this.mydiancannum = resdata[0].mydiancannum;
                _this.jifen = _this.fensicount * 10;
                if (_this.jifen <= 20) {
                  _this.level = '青铜';
                }
                if (_this.jifen > 20 && _this.jifen <= 40) {
                  _this.level = '白银';
                }
                if (_this.jifen > 40 && _this.jifen <= 60) {
                  _this.level = '黄金';
                }
                if (_this.jifen > 60) {
                  _this.level = '大神';
                }
              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ })

},[[258,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/my/index.js.map