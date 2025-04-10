(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/aichat/aichat"],{

/***/ 385:
/*!************************************************************************************************!*\
  !*** D:/BaiduNetdiskDownload/project/PJ0194/智慧社区系统/main.js?{"page":"pages%2Faichat%2Faichat"} ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _aichat = _interopRequireDefault(__webpack_require__(/*! ./pages/aichat/aichat.vue */ 386));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_aichat.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 386:
/*!*****************************************************************************!*\
  !*** D:/BaiduNetdiskDownload/project/PJ0194/智慧社区系统/pages/aichat/aichat.vue ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aichat_vue_vue_type_template_id_67897dc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aichat.vue?vue&type=template&id=67897dc6& */ 387);
/* harmony import */ var _aichat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aichat.vue?vue&type=script&lang=js& */ 389);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _aichat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _aichat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _aichat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aichat.vue?vue&type=style&index=0&lang=scss& */ 403);
/* harmony import */ var _APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 34);

var renderjs





/* normalize component */

var component = Object(_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _aichat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _aichat_vue_vue_type_template_id_67897dc6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _aichat_vue_vue_type_template_id_67897dc6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _aichat_vue_vue_type_template_id_67897dc6___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/aichat/aichat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 387:
/*!************************************************************************************************************!*\
  !*** D:/BaiduNetdiskDownload/project/PJ0194/智慧社区系统/pages/aichat/aichat.vue?vue&type=template&id=67897dc6& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_aichat_vue_vue_type_template_id_67897dc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./aichat.vue?vue&type=template&id=67897dc6& */ 388);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_aichat_vue_vue_type_template_id_67897dc6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_aichat_vue_vue_type_template_id_67897dc6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_aichat_vue_vue_type_template_id_67897dc6___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_aichat_vue_vue_type_template_id_67897dc6___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 388:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/BaiduNetdiskDownload/project/PJ0194/智慧社区系统/pages/aichat/aichat.vue?vue&type=template&id=67897dc6& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniAiMsg: function () {
      return Promise.all(/*! import() | components/uni-ai-msg/uni-ai-msg */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/uni-ai-msg/uni-ai-msg")]).then(__webpack_require__.bind(null, /*! @/components/uni-ai-msg/uni-ai-msg.vue */ 426))
    },
    uniIcons: function () {
      return Promise.all(/*! import() | uni_modules/uni-icons/components/uni-icons/uni-icons */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uni-icons/components/uni-icons/uni-icons.vue */ 436))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = _vm.msgList.length
  var g2 = _vm.msgList.length
  var l0 = _vm.__map(_vm.msgList, function (msg, index) {
    var $orig = _vm.__get_orig(msg)
    var g1 =
      index == _vm.msgList.length - 1 &&
      _vm.msgList.length % 2 === 0 &&
      _vm.sseIndex
    return {
      $orig: $orig,
      g1: g1,
    }
  })
  var g3 = _vm.msgList.length
  var g4 =
    g3 % 2 !== 0 && !(_vm.requestState == -100) ? _vm.msgList.length : null
  var g5 = _vm.msgList.length && _vm.msgList.length % 2 !== 0
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        g2: g2,
        l0: l0,
        g3: g3,
        g4: g4,
        g5: g5,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 389:
/*!******************************************************************************************************!*\
  !*** D:/BaiduNetdiskDownload/project/PJ0194/智慧社区系统/pages/aichat/aichat.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_aichat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./aichat.vue?vue&type=script&lang=js& */ 390);
/* harmony import */ var _APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_aichat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_aichat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_aichat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_aichat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_aichat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 390:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/BaiduNetdiskDownload/project/PJ0194/智慧社区系统/pages/aichat/aichat.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, uniCloud) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 46));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 48));
var _config = _interopRequireDefault(__webpack_require__(/*! @/config.js */ 400));
var _unicloudCoTask = _interopRequireDefault(__webpack_require__(/*! @/common/unicloud-co-task.js */ 401));
var _SliceMsgToLastMsg = _interopRequireDefault(__webpack_require__(/*! ./SliceMsgToLastMsg.js */ 402));
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

// 引入配置文件

// 导入uniCloud云对象task模块

// 导入 将多个字消息文本，分割成单个字 分批插入到最末尾的消息中 的类

// 收集所有执行云对象的任务列表
var uniCoTaskList = [];
// 定义终止并清空 云对象的任务列表中所有 任务的方法
uniCoTaskList.clear = function () {
  // 执行数组内的所有任务
  uniCoTaskList.forEach(function (task) {
    return task.abort();
  });
  // 清空数组
  uniCoTaskList.slice(0, uniCoTaskList.length);
};

// 获取广告id
var adpid = _config.default.adpid;
// 初始化sse通道
var sseChannel = false;

// 键盘的shift键是否被按下
var shiftKeyPressed = false;
var _default = {
  onLoad: function onLoad(options) {
    var _this = this;
    this.tiwen = options.tiwen || '';
    this.userinfoObj = uni.getStorageSync('userinfo');
    this.titleext = options.titleext;
    this.headimg = '../../static/chatlogo.png';
    this.keywordstr = options.keywordstr;
    this.typeid = options.typeid;
    this.storagedata = 'uni-ai-msg-' + this.typeid + '-' + this.userinfoObj.id;
    this.tiwen = options.tiwen || '';
    // if(this.tiwen != ''){
    // 	setTimeout(() => {
    // 		//自动提问
    // 		this.content = `你对${this.tiwen}有什么看法？`
    // 		this.beforeSend();
    // 	}, 500)
    // }
    console.log(this.storagedata);
    var storagedata = this.storagedata;
    this.msgList = uni.getStorage({
      key: storagedata
    });
    console.log('seeect', this.msgList);
    setTimeout(function () {
      _this.scrollTop = _this.scrollTop + 1;
    }, 100);
  },
  onShow: function onShow() {},
  data: function data() {
    return {
      tiwen: '',
      scrollTop: 99999,
      userinfoObj: {},
      storagedata: '',
      typeid: '',
      titleext: '',
      headimg: '',
      keywordstr: '',
      // 使聊天窗口滚动到指定元素id的值
      scrollIntoView: "",
      // 消息列表数据
      msgList: [],
      // 通讯请求状态
      requestState: 0,
      //0发送中 100发送成功 -100发送失败
      // 本地对话是否因积分不足而终止
      insufficientScore: false,
      // 输入框的消息内容
      content: "",
      // 记录流式响应次数
      sseIndex: 0,
      // 是否启用流式响应模式
      enableStream: false,
      // 当前屏幕是否为宽屏
      isWidescreen: false,
      // 广告位id
      adpid: adpid,
      llmModel: false,
      keyboardHeight: 0
    };
  },
  computed: {
    // 输入框是否禁用
    inputBoxDisabled: function inputBoxDisabled() {
      // 如果正在等待流式响应，则禁用输入框
      if (this.sseIndex !== 0) {
        return true;
      }
      // 如果消息列表长度为奇数，则禁用输入框
      return !!(this.msgList.length && this.msgList.length % 2 !== 0);
    },
    // 获取当前环境
    NODE_ENV: function NODE_ENV() {
      return "development";
    },
    footBoxPaddingBottom: function footBoxPaddingBottom() {
      return (this.keyboardHeight || 10) + 'px';
    }
  },
  // 监听msgList变化，将其存储到本地缓存中
  watch: {
    msgList: {
      handler: function handler(msgList) {
        var _this2 = this;
        var storagedata = this.storagedata;
        // 将msgList存储到本地缓存中
        uni.setStorage({
          "key": storagedata,
          "data": msgList
        });
        setTimeout(function () {
          _this2.scrollTop = _this2.scrollTop + 1;
        }, 100);
      },
      // 深度监听msgList变化
      deep: true
    },
    insufficientScore: function insufficientScore(_insufficientScore) {
      uni.setStorage({
        "key": "uni-ai-chat-insufficientScore",
        "data": _insufficientScore
      });
    },
    llmModel: function llmModel(_llmModel) {
      var title = 'AI chat';
      if (_llmModel) {
        title += " (".concat(_llmModel, ")");
      }
      // uni.setNavigationBarTitle({title})

      uni.setStorage({
        key: 'uni-ai-chat-llmModel',
        data: _llmModel
      });
    }
  },
  beforeMount: function beforeMount() {},
  mounted: function mounted() {
    var _this3 = this;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var db, res, storagedata, length, lastMsg;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(_this3.adpid && uniCloud.getCurrentUserInfo().tokenExpired > Date.now())) {
                _context.next = 6;
                break;
              }
              // 查询当前用户的积分
              // 获取数据库对象
              db = uniCloud.databaseForJQL(); // 获取uni-id-users集合
              _context.next = 4;
              return db.collection("uni-id-users")
              // 查询条件
              .where({
                // 当前用户id
                "_id": uniCloud.getCurrentUserInfo().uid
              })
              // 返回score字段
              .field('score')
              // 执行查询
              .get();
            case 4:
              res = _context.sent;
              // 输出当前用户积分
              console.log('当前用户有多少积分:', res.data[0] && res.data[0].score);
            case 6:
              // for (let i = 0; i < 15; i++) {
              // 	this.msgList.push({
              // 		isAi: i % 2 == true,
              // 		content: "1-" + i
              // 	})
              // }
              // 获得历史对话记录
              storagedata = _this3.storagedata;
              _this3.msgList = uni.getStorageSync(storagedata) || [];

              // 获得之前设置的llmModel
              _this3.llmModel = uni.getStorageSync('uni-ai-chat-llmModel');

              // 获得之前设置的uni-ai-chat-insufficientScore
              _this3.insufficientScore = uni.getStorageSync('uni-ai-chat-insufficientScore') || false;

              // 如果上一次对话中 最后一条消息ai未回复。则一启动就自动重发。
              length = _this3.msgList.length;
              if (length) {
                lastMsg = _this3.msgList[length - 1];
                if (!lastMsg.isAi) {
                  _this3.send();
                }
              }

              // this.msgList.pop()
              // console.log('this.msgList', this.msgList);

              // 在dom渲染完毕后 使聊天窗口滚动到最后一条消息
              _this3.$nextTick(function () {
                _this3.showLastMsg();
              });
              uni.onKeyboardHeightChange(function (e) {
                _this3.keyboardHeight = e.height;
                // 在dom渲染完毕后 使聊天窗口滚动到最后一条消息
                _this3.$nextTick(function () {
                  _this3.showLastMsg();
                });
              });
            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    setLLMmodel: function setLLMmodel() {
      var _this4 = this;
      this.$refs['llm-config'].open(function (model) {
        console.log('model', model);
        _this4.llmModel = model;
      });
    },
    // 此(惰性)函数，检查是否开通uni-push;决定是否启用enableStream
    checkIsOpenPush: function checkIsOpenPush() {
      var _this5 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return uni.getPushClientId();
              case 3:
                // 如果获取成功，则将checkIsOpenPush函数重写为一个空函数
                _this5.checkIsOpenPush = function () {};
                _context2.next = 9;
                break;
              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                // 如果获取失败，则将enableStream设置为false
                _this5.enableStream = false;
              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 6]]);
      }))();
    },
    // 更新最后一条消息
    updateLastMsg: function updateLastMsg(param) {
      var length = this.msgList.length;
      if (length === 0) {
        return;
      }
      var lastMsg = this.msgList[length - 1];

      // 如果param是函数，则将最后一条消息作为参数传入该函数
      if (typeof param == 'function') {
        var callback = param;
        callback(lastMsg);
      } else {
        // 否则，将参数解构为data和cover两个变量
        var _arguments = Array.prototype.slice.call(arguments),
          data = _arguments[0],
          _arguments$ = _arguments[1],
          cover = _arguments$ === void 0 ? false : _arguments$;
        if (cover) {
          lastMsg = data;
        } else {
          lastMsg = Object.assign(lastMsg, data);
        }
      }
      this.msgList.splice(length - 1, 1, lastMsg);
    },
    // 广告关闭事件
    onAdClose: function onAdClose(e) {
      var _this6 = this;
      console.log('onAdClose e.detail.isEnded', e.detail.isEnded);
      if (e.detail.isEnded) {
        //5次轮训查结果
        var i = 0;
        uni.showLoading({
          mask: true
        });
        var myIntive = setInterval( /*#__PURE__*/function () {
          var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(e) {
            var db, res, _ref2, score;
            return _regenerator.default.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    i++;
                    // 获取云数据库实例
                    db = uniCloud.database(); // 获取uni-id-users集合
                    _context3.next = 4;
                    return db.collection("uni-id-users")
                    // 查询条件为_id等于当前用户id
                    .where('"_id" == $cloudEnv_uid')
                    // 只返回score字段
                    .field('score')
                    // 执行查询
                    .get();
                  case 4:
                    res = _context3.sent;
                    // 解构出score字段的值，如果没有则默认为undefined
                    _ref2 = res.result.data[0] || {}, score = _ref2.score;
                    console.log('score', score);
                    if (score > 0 || i > 5) {
                      // 清除轮询定时器
                      clearInterval(myIntive);
                      // 隐藏加载提示
                      uni.hideLoading();
                      if (score > 0) {
                        _this6.insufficientScore = false;
                        // 移除最后一条消息
                        _this6.msgList.pop();
                        _this6.$nextTick(function () {
                          // 重发消息
                          _this6.send();
                          uni.showToast({
                            title: '积分余额:' + score,
                            icon: 'none'
                          });
                        });
                      }
                    }
                  case 8:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }(), 2000);
      }
    },
    // 换一个答案
    changeAnswer: function changeAnswer() {
      var _this7 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // 如果问题还在回答中需要先关闭
                if (_this7.sseIndex) {
                  _this7.closeSseChannel();
                }
                //删除旧的回答
                _this7.msgList.pop();
                _this7.updateLastMsg({
                  // 防止 偶发答案涉及敏感，重复回答时。提问内容 被卡掉无法重新问
                  illegal: false
                });
                // 多设备登录时其他设备看广告后点击重新回答，insufficientScore应当设置为 false
                _this7.insufficientScore = false;
                _this7.send();
              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    removeMsg: function removeMsg(index) {
      // 成对删除，如果点中的是 ai 回答的内容，index -= 1
      if (this.msgList[index].isAi) {
        index -= 1;
      }

      // 如果删除的就是正在问的，且问题还在回答中需要先关闭
      if (this.sseIndex && index == this.msgList.length - 2) {
        this.closeSseChannel();
      }
      this.msgList.splice(index, 2);
    },
    matchKeywords: function matchKeywords(str, keywords) {
      if (!keywords) {
        return true; // 如果入参为空，则直接输出true
      }

      var keywordArr = keywords.split('#'); // 使用 # 分割关键词子字符串
      for (var i = 0; i < keywordArr.length; i++) {
        var keyword = keywordArr[i];
        if (str.includes(keyword)) {
          return true; // 如果目标字符串包含任一关键词子字符串，则输出true
        }
      }

      return false; // 目标字符串不包含任何关键词子字符串，输出false
    },
    beforeSend: function beforeSend() {
      var _this8 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
        var token, msgobj;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!_this8.inputBoxDisabled) {
                  _context5.next = 2;
                  break;
                }
                return _context5.abrupt("return", uni.showToast({
                  title: 'ai正在回复中不能发送',
                  icon: 'none'
                }));
              case 2:
                if (!_this8.adpid) {
                  _context5.next = 6;
                  break;
                }
                // 获取本地缓存的token
                token = uni.getStorageSync('uni_id_token'); // 如果token不存在
                if (token) {
                  _context5.next = 6;
                  break;
                }
                return _context5.abrupt("return", uni.showModal({
                  // 提示内容
                  content: '启用激励视频，客户端需登录并启用安全网络',
                  // 不显示取消按钮
                  showCancel: false,
                  // 确认按钮文本
                  confirmText: "查看详情",
                  // 弹框关闭后执行的回调函数
                  complete: function complete() {
                    // 文档链接
                    var url = "https://uniapp.dcloud.net.cn/uniCloud/uni-ai-chat.html#ad";

                    // 将文档链接复制到剪贴板
                    uni.setClipboardData({
                      // 复制的内容
                      data: url,
                      // 不显示提示框
                      showToast: false,
                      // 复制成功后的回调函数
                      success: function success() {
                        // 弹出提示框
                        uni.showToast({
                          // 提示内容
                          title: '已复制文档链接，请到浏览器粘贴浏览',
                          // 不显示图标
                          icon: 'none',
                          // 提示框持续时间
                          duration: 5000
                        });
                      }
                    });
                  }
                }));
              case 6:
                if (_this8.content) {
                  _context5.next = 8;
                  break;
                }
                return _context5.abrupt("return", uni.showToast({
                  // 提示内容
                  title: '内容不能为空',
                  // 不显示图标
                  icon: 'none'
                }));
              case 8:
                // 将用户输入的消息添加到消息列表中
                _this8.msgList.push({
                  // 标记为非人工智能机器人，即：为用户发送的消息
                  isAi: false,
                  // 消息内容
                  content: _this8.content,
                  // 消息创建时间
                  create_time: Date.now()
                });
                //向后台存入数据
                msgobj = {
                  username: _this8.userinfoObj.userName,
                  userid: _this8.userinfoObj.id,
                  aiid: _this8.typeid,
                  ainame: _this8.titleext,
                  content: _this8.content,
                  isai: 'N'
                }; //let resdata = await new this.Request(this.Urls.m().saveSysques, msgobj).modepost()
                setTimeout(function () {
                  _this8.scrollTop = _this8.scrollTop + 1;
                }, 100);
                // 展示最后一条消息
                _this8.showLastMsg();
                // dom加载完成后 清空文本内容
                _this8.$nextTick(function () {
                  _this8.content = '';
                });
                console.log('查看消息', _this8.msgList);
                _this8.send(); // 发送消息
              case 15:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    send: function send() {
      var _this9 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
        var messages, msgs, findIndex, aiSummaryIndex, sseEnd, requestEnd, task;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                // 请求状态归零
                _this9.requestState = 0;
                // 防止重复发起，关闭之前的
                uniCoTaskList.clear();
                // 清除旧的afterChatCompletion（如果存在）
                if (_this9.afterChatCompletion && _this9.afterChatCompletion.clear) _this9.afterChatCompletion.clear();
                messages = []; // 复制一份，消息列表数据
                msgs = JSON.parse(JSON.stringify(_this9.msgList)); // - 获取上下文的代码【start】-
                // 带总结的消息 index
                findIndex = (0, _toConsumableArray2.default)(msgs).reverse().findIndex(function (item) {
                  return item.summarize;
                }); // console.log('findIndex', findIndex)
                if (findIndex != -1) {
                  aiSummaryIndex = msgs.length - findIndex - 1; // console.log('aiSummaryIndex', aiSummaryIndex)
                  // 将带总结的消息的 内容 更换成 总结
                  msgs[aiSummaryIndex].content = msgs[aiSummaryIndex].summarize;
                  // 拿最后一条带直接的消息作为与ai对话的msg body
                  msgs = msgs.splice(aiSummaryIndex);
                } else {
                  // 如果未总结过就直接从末尾拿10条
                  msgs = msgs.splice(-10);
                }
                // 过滤涉敏问题
                msgs = msgs.filter(function (msg) {
                  return !msg.illegal;
                });
                // - 获取上下文的代码【end】-

                // 如果：不希望带上上下文；请注释掉 上方：获取上下文的代码【start】-【end】。并添加，代码： msgs = [msgs.pop()]
                // 根据数据内容设置角色
                messages = msgs.map(function (item) {
                  // 角色默认为用户
                  var role = "user";
                  // 如果是ai再根据 是否有总结 来设置角色为 system 还是 assistant
                  if (item.isAi) {
                    role = item.summarize ? 'system' : 'assistant';
                  }
                  return {
                    content: item.content,
                    role: role
                  };
                });

                // 在控制台输出 向ai机器人发送的完整消息内容
                console.log('send to ai messages:', messages);
                // 检查是否开通uni-push;决定是否启用enableStream
                _context7.next = 12;
                return _this9.checkIsOpenPush();
              case 12:
                if (!_this9.enableStream) {
                  _context7.next = 20;
                  break;
                }
                // 创建消息通道
                sseChannel = new uniCloud.SSEChannel();
                // console.log('sseChannel',sseChannel);

                // 将多个字的文本，分割成单个字 分批插入到最末尾的消息中
                _this9.sliceMsgToLastMsg = new _SliceMsgToLastMsg.default(_this9);
                // 监听message事件
                sseChannel.on('message', function (message) {
                  // console.log('on message', message);
                  // 将从云端接收到的消息添加到消息列表中

                  // 如果之前未添加过就添加，否则就执行更新最后一条消息
                  if (_this9.sseIndex === 0) {
                    _this9.msgList.push({
                      isAi: true,
                      content: message,
                      create_time: Date.now()
                    });
                  } else {
                    _this9.sliceMsgToLastMsg.addMsg(message);
                    // this.updateLastMsg(lastMsg => {
                    // 	lastMsg.content += message
                    // })
                  }

                  _this9.showLastMsg();
                  // 让流式响应计数值递增
                  _this9.sseIndex++;
                });

                // 监听end事件，如果云端执行end时传了message，会在客户端end事件内收到传递的消息
                sseChannel.on('end', function (e) {
                  console.log('sse 结束', e);
                  // 更改“按字分割追加到最后一条消息“的时间间隔为0，即：一次性加载完（不再分割加载）
                  _this9.sliceMsgToLastMsg.t = 0;
                  if (e && (0, _typeof2.default)(e) == 'object' && e.errCode) {
                    var setLastAiMsgContent = function setLastAiMsgContent(content) {
                      // console.log(content);
                      // 如果最后一项不是ai的就添加，否则就执行更新最后一条消息
                      if (_this9.sseIndex === 0) {
                        _this9.msgList.push({
                          isAi: true,
                          content: content,
                          create_time: Date.now()
                        });
                      } else {
                        _this9.updateLastMsg(function (lastMsg) {
                          lastMsg.content += content;
                        });
                      }
                      _this9.showLastMsg();
                    };
                    if (e.errCode == 60004) {
                      //服务商检测到AI输出了敏感内容
                      var length = _this9.msgList.length;
                      //如果最后一项不是ai，就创建一项
                      if (length % 2) {
                        _this9.msgList.push({
                          isAi: true,
                          content: "内容涉及敏感",
                          illegal: true,
                          create_time: Date.now()
                        });
                        length += 1;
                      }
                      // 更新倒数第2项 用户提的问题
                      _this9.msgList[length - 2].illegal = true;
                      // 更新倒数第1项 ai 回答的内容
                      _this9.msgList[length - 1].illegal = true;
                      _this9.msgList[length - 1].content = "内容涉及敏感";
                    } else {
                      setLastAiMsgContent(e.errMsg);
                    }
                  }
                  sseEnd();
                });
                _context7.next = 19;
                return sseChannel.open();
              case 19:
                // 等待通道开启

                // 等待对话完成（云函数请求完成，sse 执行了 end）之后
                (function fnSelf(that) {
                  fnSelf.clear = function () {
                    // console.log('do fnSelf.clear');
                    if (fnSelf.clear.sse) {
                      // console.log('fnSelf.clear.sse();')
                      fnSelf.clear.sse();
                    }
                    if (fnSelf.clear.request) {
                      // console.log('fnSelf.clear.request();')
                      fnSelf.clear.request();
                    }
                  };
                  Promise.all([new Promise(function (resolve, reject) {
                    sseEnd = resolve;
                    fnSelf.clear.sse = reject;
                  }), new Promise(function (resolve, reject) {
                    requestEnd = resolve;
                    fnSelf.clear.request = reject;
                  })]).then(function (e) {
                    // console.log('sseEnd && requestEnd');
                    //当两个都结束时
                    sseChannel.close();
                    // 结束流式响应 将流式响应计数值 设置为 0
                    that.sseIndex = 0;
                  }).catch(function (err) {
                    // console.log('afterChatCompletion is close',err);
                  });
                  that.afterChatCompletion = fnSelf;
                })(_this9);
              case 20:
                // 导入uni-ai-chat模块，并设置customUI为true
                task = (0, _unicloudCoTask.default)({
                  coName: "uni-ai-chat",
                  funName: "send",
                  param: [{
                    messages: messages,
                    // 消息列表
                    sseChannel: sseChannel,
                    // 消息通道
                    llmModel: _this9.llmModel
                  }],
                  config: {
                    customUI: true
                  },
                  success: function () {
                    var _success = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(res) {
                      var _res$data, reply, summarize, insufficientScore, illegal, msgobj, index, msg;
                      return _regenerator.default.wrap(function _callee6$(_context6) {
                        while (1) {
                          switch (_context6.prev = _context6.next) {
                            case 0:
                              // 更新 通讯状态为100（发送成功）
                              _this9.requestState = 100;
                              // console.log("success",res);
                              if (res.data) {
                                _context6.next = 3;
                                break;
                              }
                              return _context6.abrupt("return");
                            case 3:
                              _res$data = res.data, reply = _res$data.reply, summarize = _res$data.summarize, insufficientScore = _res$data.insufficientScore, illegal = _res$data.illegal; // 特殊处理 - start
                              if (_this9.enableStream == false && !reply) {
                                //服务商检测到AI输出了敏感内容
                                illegal = true;
                                reply = "内容涉及敏感";
                              }
                              // 特殊处理 - end

                              // 非流式模式 或者流式模式，但列表还没有数据且已经进入异常的情况下
                              if (_this9.enableStream == false || _this9.sseIndex == 0 && (illegal || insufficientScore)) {
                                // 将从云端接收到的消息添加到消息列表中
                                _this9.msgList.push({
                                  // 消息创建时间
                                  create_time: Date.now(),
                                  // 标记消息为来自AI机器人
                                  isAi: true,
                                  // 消息内容
                                  content: reply,
                                  // 消息是否涉敏标记
                                  illegal: illegal
                                });

                                //向后台存入数据
                                msgobj = {
                                  username: _this9.userinfoObj.userName,
                                  userid: _this9.userinfoObj.id,
                                  aiid: _this9.typeid,
                                  ainame: _this9.titleext,
                                  content: reply,
                                  isai: 'Y'
                                }; //let resdata = await new this.Request(this.Urls.m().saveSysques, msgobj).modepost()
                              }
                              if (insufficientScore) {
                                // 积分不足
                                _this9.insufficientScore = true;
                              }
                              // 如果回调包含总结的内容，就设置总结
                              if (summarize) {
                                console.log(' 拿到总结', summarize);
                                // 总结的内容是上一轮对话的
                                // console.log('setSummarize');
                                index = _this9.msgList.length - 1; // 如果最后一项是ai就往前退2项，否则退1项（流式响应的时候，回答可能晚于总结）
                                if (index % 2) {
                                  index -= 2;
                                } else {
                                  index -= 1;
                                }
                                // 假如第一次提问就需要总结
                                if (index < 1) {
                                  index = 1;
                                }
                                msg = _this9.msgList[index];
                                msg.summarize = summarize;
                                _this9.msgList.splice(index, 1, msg);
                                // console.log('setSummarize this.msgList',this.msgList,this.msgList.length-1,index);
                              }

                              if (illegal) {
                                console.error('内容涉及敏感');
                                _this9.updateLastMsg({
                                  // 添加消息涉敏标记
                                  illegal: true
                                });
                              }
                            case 9:
                            case "end":
                              return _context6.stop();
                          }
                        }
                      }, _callee6);
                    }));
                    function success(_x2) {
                      return _success.apply(this, arguments);
                    }
                    return success;
                  }(),
                  complete: function complete(e) {
                    if (_this9.enableStream) {
                      requestEnd();
                    }
                    // console.log('complete:',e);
                    // 滚动窗口以显示最新的一条消息
                    setTimeout(function () {
                      _this9.scrollTop = _this9.scrollTop + 1;
                    }, 100);
                    _this9.$nextTick(function () {
                      _this9.showLastMsg();
                    });
                  },
                  fail: function fail(e) {
                    console.error(e);
                    // 更新 通讯状态为-100（发送失败）
                    _this9.requestState = -100;
                    // 弹框提示用户错误原因
                    uni.showModal({
                      content: JSON.stringify(e.message),
                      showCancel: false
                    });
                    // 如果启用流式，云函数出错了，sse 也应当被终止
                    if (_this9.enableStream) {
                      sseEnd();
                    }
                  }
                });
                uniCoTaskList.push(task);
              case 22:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    closeSseChannel: function closeSseChannel() {
      // 如果存在消息通道，就关闭消息通道
      if (sseChannel) {
        sseChannel.close();
        // 设置为 false 防止重复调用closeSseChannel时出错
        sseChannel = false;
        this.sliceMsgToLastMsg.end();
      }
      // 清空历史网络请求（调用云对象）任务
      uniCoTaskList.clear();
      // 将流式响应计数值归零
      this.sseIndex = 0;
    },
    // 滚动窗口以显示最新的一条消息
    showLastMsg: function showLastMsg() {
      var _this10 = this;
      // 等待DOM更新
      this.$nextTick(function () {
        // 将scrollIntoView属性设置为"last-msg-item"，以便滚动窗口到最后一条消息
        _this10.scrollIntoView = "last-msg-item";
        // 等待DOM更新，即：滚动完成
        _this10.$nextTick(function () {
          // 将scrollIntoView属性设置为空，以便下次设置滚动条位置可被监听
          _this10.scrollIntoView = "";
        });
      });
    },
    // 清空消息列表
    clearAllMsg: function clearAllMsg(e) {
      var _this11 = this;
      // 弹出确认清空聊天记录的提示框
      uni.showModal({
        title: "确认要清空聊天记录？",
        content: '本操作不可撤销',
        complete: function complete(e) {
          // 如果用户确认清空聊天记录
          if (e.confirm) {
            // 关闭ssh请求
            _this11.closeSseChannel();
            // 将消息列表清空 
            _this11.msgList.splice(0, _this11.msgList.length);
          }
        }
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 391)["default"]))

/***/ }),

/***/ 403:
/*!***************************************************************************************************************!*\
  !*** D:/BaiduNetdiskDownload/project/PJ0194/智慧社区系统/pages/aichat/aichat.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_aichat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./aichat.vue?vue&type=style&index=0&lang=scss& */ 404);
/* harmony import */ var _APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_aichat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_aichat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_aichat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_aichat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_aichat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 404:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/BaiduNetdiskDownload/project/PJ0194/智慧社区系统/pages/aichat/aichat.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[385,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/aichat/aichat.js.map