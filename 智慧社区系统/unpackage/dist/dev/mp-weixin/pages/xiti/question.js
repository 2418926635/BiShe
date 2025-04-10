(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/xiti/question"],{

/***/ 242:
/*!************************************************************************************************!*\
  !*** D:/BaiduNetdiskDownload/project/PJ0194/智慧社区系统/main.js?{"page":"pages%2Fxiti%2Fquestion"} ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _question = _interopRequireDefault(__webpack_require__(/*! ./pages/xiti/question.vue */ 243));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_question.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 243:
/*!*****************************************************************************!*\
  !*** D:/BaiduNetdiskDownload/project/PJ0194/智慧社区系统/pages/xiti/question.vue ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _question_vue_vue_type_template_id_58548f86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question.vue?vue&type=template&id=58548f86& */ 244);
/* harmony import */ var _question_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question.vue?vue&type=script&lang=js& */ 246);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _question_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _question_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _question_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./question.vue?vue&type=style&index=0&lang=css& */ 249);
/* harmony import */ var _APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 34);

var renderjs





/* normalize component */

var component = Object(_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _question_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _question_vue_vue_type_template_id_58548f86___WEBPACK_IMPORTED_MODULE_0__["render"],
  _question_vue_vue_type_template_id_58548f86___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _question_vue_vue_type_template_id_58548f86___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/xiti/question.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 244:
/*!************************************************************************************************************!*\
  !*** D:/BaiduNetdiskDownload/project/PJ0194/智慧社区系统/pages/xiti/question.vue?vue&type=template&id=58548f86& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_question_vue_vue_type_template_id_58548f86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./question.vue?vue&type=template&id=58548f86& */ 245);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_question_vue_vue_type_template_id_58548f86___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_question_vue_vue_type_template_id_58548f86___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_question_vue_vue_type_template_id_58548f86___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_question_vue_vue_type_template_id_58548f86___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 245:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/BaiduNetdiskDownload/project/PJ0194/智慧社区系统/pages/xiti/question.vue?vue&type=template&id=58548f86& ***!
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
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l0 = _vm.__map(_vm.subjectList, function (subject, index) {
    var $orig = _vm.__get_orig(subject)
    var g0 = subject.userAnswer.length
    return {
      $orig: $orig,
      g0: g0,
    }
  })
  var l3 = _vm.__map(_vm.subjectList, function (subject, index) {
    var $orig = _vm.__get_orig(subject)
    var l1 =
      index - _vm.subjectIndex >= -1 &&
      index - _vm.subjectIndex <= 1 &&
      (subject.type === "1" || subject.type === "3")
        ? _vm.__map(subject.optionList, function (option, __i1__) {
            var $orig = _vm.__get_orig(option)
            var g1 = subject.userAnswer.indexOf(option.id)
            return {
              $orig: $orig,
              g1: g1,
            }
          })
        : null
    var l2 =
      index - _vm.subjectIndex >= -1 &&
      index - _vm.subjectIndex <= 1 &&
      !(subject.type === "1" || subject.type === "3") &&
      subject.type === "2"
        ? _vm.__map(subject.optionList, function (option, __i2__) {
            var $orig = _vm.__get_orig(option)
            var g2 = subject.userAnswer.indexOf(option.id)
            var g3 = subject.userAnswer.indexOf(option.id)
            return {
              $orig: $orig,
              g2: g2,
              g3: g3,
            }
          })
        : null
    return {
      $orig: $orig,
      l1: l1,
      l2: l2,
    }
  })
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
        l3: l3,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 246:
/*!******************************************************************************************************!*\
  !*** D:/BaiduNetdiskDownload/project/PJ0194/智慧社区系统/pages/xiti/question.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_question_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./question.vue?vue&type=script&lang=js& */ 247);
/* harmony import */ var _APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_question_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_question_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_question_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_question_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_question_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 247:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/BaiduNetdiskDownload/project/PJ0194/智慧社区系统/pages/xiti/question.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
var _rules = __webpack_require__(/*! @/utils/rules.js */ 248);
var _expressfun = __webpack_require__(/*! @/utils/expressfun.js */ 57);
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
  mounted: function mounted() {
    this.Time(); //调用定时器
  },
  data: function data() {
    return {
      userinfo: {},
      belong: '',
      timeval: null,
      count: '',
      //倒计时
      seconds: 2700,
      // 10天的秒数
      outbj: true,
      showbut: false,
      //显示最后的提交按钮
      userFavor: false,
      //是否已收藏
      currentType: 0,
      //当前题型
      subjectIndex: 0,
      //跳转索引
      autoShowAnswer: false,
      //答错是否显答案
      autoRadioNext: true,
      //判断题、单项题，自动移下一题
      swiperHeight: '800px',
      //
      title: '考试系统',
      subjectList: [],
      modalCard: null,
      //显示答题卡
      modalError: null,
      //纠错卡
      errorList: ['题目不完整', '答案不正确', '含有错别字', '图片不存在', '解析不完整', '其他错误']
    };
  },
  onReady: function onReady() {
    var tempHeight = 800;
    var _me = this;
    uni.getSystemInfo({
      //获取手机屏幕高度信息，让swiper的高度和手机屏幕一样高                
      success: function success(res) {
        // console.log(res.model);                    
        // console.log(res.pixelRatio);                    
        // console.log(res.windowWidth);                    
        // console.log(res.windowHeight);
        // //这里是手机屏幕高度                    
        // console.log(res.language);                    
        // console.log(res.version);                    
        // console.log(res.platform);                    
        tempHeight = res.windowHeight;
        // console.log("屏幕可用高度 " + tempHeight);

        uni.createSelectorQuery().select("#top-box").fields({
          size: true,
          scrollOffset: true
        }, function (data) {
          tempHeight -= data.height;
          console.log("减掉顶部后的高度 " + tempHeight);
          uni.createSelectorQuery().select("#foot-box").fields({
            size: true,
            scrollOffset: true
          }, function (data) {
            tempHeight -= data.height;
            console.log("减掉底部后的高度 " + tempHeight);
            _me.swiperHeight = tempHeight + 'px';
            console.log("滑屏最后高度 " + _me.swiperHeight);
          }).exec();
        }).exec();
      }
    });
  },
  onLoad: function onLoad(options) {
    this.userinfo = uni.getStorageSync('userinfo');
    this.belong = options.belong;
    this.getquestion(options.belong);
  },
  methods: {
    countDown: function countDown() {
      var d = parseInt(this.seconds / (24 * 60 * 60));
      d = d < 10 ? "0" + d : d;
      var h = parseInt(this.seconds / (60 * 60) % 24);
      h = h < 10 ? "0" + h : h;
      var m = parseInt(this.seconds / 60 % 60);
      m = m < 10 ? "0" + m : m;
      var s = parseInt(this.seconds % 60);
      s = s < 10 ? "0" + s : s;
      //this.count = d + '天' + h + '时' + m + '分' + s + '秒'
      this.count = m + '分' + s + '秒';

      // if (this.seconds == 0) {
      // 	clearInterval(this.timeval);
      // 	this.outbj = false
      // 	uni.showModal({
      // 		title: '提示',
      // 		content: '答题时间已到，系统即将退出',
      // 		showCancel: false,
      // 		success: function(res) {
      // 			if (res.confirm) {
      // 				console.log('用户点击确定');
      // 				uni.navigateTo({
      // 					url: `../login/login`
      // 				});
      // 			} else if (res.cancel) {
      // 				console.log('用户点击取消');
      // 			}
      // 		}
      // 	});
      // }
    },
    //定时器没过1秒参数减1
    Time: function Time() {
      var _this = this;
      if (this.seconds > 0) {
        this.timeval = setInterval(function () {
          _this.seconds -= 1;
          _this.countDown();
        }, 1000);
      }
    },
    getquestion: function getquestion(val) {
      var _this2 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var msgobj, resdata, i;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                msgobj = {
                  belong: val
                };
                _context.next = 3;
                return new _this2.Request(_this2.Urls.m().getquestionbyclass, msgobj).modepost();
              case 3:
                resdata = _context.sent;
                //生成随机数(0-100抽选)
                resdata.sort(function () {
                  return 0.5 - Math.random();
                });
                resdata = resdata.slice(0, 100);
                console.log(resdata);
                resdata.sort(function (a, b) {
                  return a.tmlx < b.tmlx ? 1 : -1;
                });
                //题目类型排序
                resdata.sort(function (a, b) {
                  return a.tmlx > b.tmlx ? 1 : -1;
                });
                _this2.subjectList = resdata.map(function (val, i) {
                  val.title = val.tmnr;
                  val.type = val.tmlx;
                  val.answer = val.tmzqda;
                  val.userAnswer = "";
                  val.userFavor = false;
                  val.explain = "";
                  var arr = [];
                  if (val.tmda1 != '') {
                    arr.push({
                      id: "A",
                      content: val.tmda1
                    });
                  }
                  if (val.tmda2 != '') {
                    arr.push({
                      id: "B",
                      content: val.tmda2
                    });
                  }
                  if (val.tmda3 != '') {
                    arr.push({
                      id: "C",
                      content: val.tmda3
                    });
                  }
                  if (val.tmda4 != '') {
                    arr.push({
                      id: "D",
                      content: val.tmda4
                    });
                  }
                  if (val.tmda5 != '') {
                    arr.push({
                      id: "E",
                      content: val.tmda5
                    });
                  }
                  if (val.tmda6 != '') {
                    arr.push({
                      id: "F",
                      content: val.tmda6
                    });
                  }
                  val.optionList = arr;
                  return val;
                });
                _this2.currentType = _this2.subjectList[0].type;
                uni.setNavigationBarTitle({
                  title: _this2.title
                });

                //添加用户显示答案字段
                for (i = 0; i < _this2.subjectList.length; i++) {
                  _this2.$set(_this2.subjectList[i], "showAnswer", false);
                }
              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    showCardModal: function showCardModal(e) {
      this.modalCard = e.currentTarget.dataset.target;
    },
    hideCardModal: function hideCardModal(e) {
      this.modalCard = null;
    },
    showErrorModal: function showErrorModal(e) {
      this.modalError = e.currentTarget.dataset.target;
    },
    hideErrorModal: function hideErrorModal(e) {
      this.modalError = null;
    },
    SwiperChange: function SwiperChange(e) {
      //滑动事件

      var index = e.target.current;
      if (index != undefined) {
        this.subjectIndex = index;
        this.currentType = this.subjectList[index].type;
        this.userFavor = this.subjectList[index].userFavor;
      }
    },
    RadioboxChange: function RadioboxChange(e) {
      //单选选中

      var items = this.subjectList[this.subjectIndex].optionList;
      var values = e.detail.value;
      this.subjectList[this.subjectIndex].userAnswer = values;
      // if (this.autoRadioNext && this.subjectIndex < this.subjectList.length - 1) {
      // 	this.subjectIndex += 1;
      // };
    },

    CheckboxChange: function CheckboxChange(e) {
      //复选选中

      var items = this.subjectList[this.subjectIndex].optionList;
      var values = e.detail.value;
      this.subjectList[this.subjectIndex].userAnswer = "";
      for (var i = 0, lenI = items.length; i < lenI; ++i) {
        for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
          if (items[i].id == values[j]) {
            this.subjectList[this.subjectIndex].userAnswer += items[i].id;
            break;
          }
        }
      }
    },
    textInput: function textInput(e) {
      //填空题

      this.subjectList[this.subjectIndex].userAnswer = e.detail.value;
    },
    ShowAnswerChange: function ShowAnswerChange(e) {
      //显示答案

      if (this.subjectList[this.subjectIndex].showAnswer) {
        this.subjectList[this.subjectIndex].showAnswer = false;
      } else {
        this.subjectList[this.subjectIndex].showAnswer = true;
      }
    },
    FavorSubject: function () {
      var _FavorSubject = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(e) {
        var msgobj, resdata, _msgobj, _resdata;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this.userFavor) {
                  _context2.next = 10;
                  break;
                }
                this.userFavor = false;
                this.subjectList[this.subjectIndex].userFavor = false;
                //取消收藏
                console.log(this.subjectList[this.subjectIndex].id);
                msgobj = {
                  userid: this.userinfo.id,
                  datetime: this.getnowdate() + " " + this.getnowtime(),
                  questionid: this.subjectList[this.subjectIndex].id
                };
                _context2.next = 7;
                return new this.Request(this.Urls.m().removecollection, msgobj).modepost();
              case 7:
                resdata = _context2.sent;
                _context2.next = 17;
                break;
              case 10:
                this.userFavor = true;
                this.subjectList[this.subjectIndex].userFavor = true;
                //收藏
                console.log(this.subjectList[this.subjectIndex].id);
                _msgobj = {
                  userid: this.userinfo.id,
                  datetime: this.getnowdate() + " " + this.getnowtime(),
                  questionid: this.subjectList[this.subjectIndex].id
                };
                _context2.next = 16;
                return new this.Request(this.Urls.m().insertcollection, _msgobj).modepost();
              case 16:
                _resdata = _context2.sent;
              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function FavorSubject(_x) {
        return _FavorSubject.apply(this, arguments);
      }
      return FavorSubject;
    }(),
    MoveSubject: function MoveSubject(e) {
      //上一题、下一题

      //点击上一题触发
      if (e === -1 && this.subjectIndex != 0) {
        this.subjectIndex -= 1;
        this.showbut = false;
      }
      //点击下一题触发
      if (e === 1 && this.subjectIndex < this.subjectList.length - 1) {
        this.subjectIndex += 1;
        this.showbut = false;
        var i = this.subjectIndex;
        // console.log(this.subjectList[i-1])

        //tmzqdatext:"D"
        //userAnswer:"B"

        if (this.subjectList[i - 1].tmzqdatext != this.subjectList[i - 1].userAnswer) {
          this.counterr01 = this.counterr01 + 1;
        }
        if (this.counterr01 == 11) {
          // this.outbj = false
          uni.showModal({
            title: '提示',
            content: '您已答错10道题',
            showCancel: false,
            success: function success(res) {
              if (res.confirm) {
                console.log('用户点击确定');
                // uni.navigateTo({
                // 	url: `../login/login`
                // });
              } else if (res.cancel) {
                console.log('用户点击取消');
              }
            }
          });
        }
        console.log(this.counterr01);

        //这里需要判断是否打错
      }

      if (this.subjectIndex === this.subjectList.length - 1) {
        //显示出提交按钮
        this.showbut = true;
      }
    },
    AppointedSubject: function AppointedSubject(e) {
      //题卡指定

      this.modalCard = null;
      this.subjectIndex = e;
    },
    SubmitError: function SubmitError(e) {
      //提交纠错

      this.modalError = null;
    },
    getnowdate: function getnowdate() {
      var nowDate = new Date();
      var year = nowDate.getFullYear();
      var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
      var day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
      var dateStr = year + "-" + month + "-" + day;
      return dateStr;
    },
    getnowtime: function getnowtime() {
      var date = new Date();
      var hours = date.getHours();
      var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
      var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
      var time = hours + ':' + minutes + ':' + seconds;
      return time;
    },
    reasubmit: function reasubmit() {
      var _this3 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var that, arrerr, alltiku, errtiku, arrsub, i, num, flag, id, j, obj, arrstr, totalcount, errcount;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                that = _this3; //拿到错题数组
                arrerr = that.subjectList.filter(function (val, i) {
                  return val.userAnswer !== val.tmzqdatext;
                });
                console.log(that.subjectList, arrerr);
                alltiku = (0, _expressfun.deepCopy)(that.subjectList);
                errtiku = (0, _expressfun.deepCopy)(arrerr);
                arrsub = [];
                for (i = 0; i < alltiku.length; i++) {
                  num = i + 1;
                  flag = false;
                  id = alltiku[i].id;
                  for (j = 0; j < errtiku.length; j++) {
                    if (id == errtiku[j].id) {
                      flag = true;
                    }
                  }
                  obj = {
                    num: num,
                    flag: flag
                  };
                  arrsub.push(obj);
                }
                arrstr = JSON.stringify(arrsub); // //将错题存入数据库
                // let resdata = await new that.Request(that.Urls.m().saveerrorques, arrerr).modepost()
                // console.log(resdata)
                totalcount = that.subjectList.length || 0;
                errcount = arrerr.length || 0;
                uni.navigateTo({
                  url: "./success?totalcount=".concat(totalcount, "&errcount=").concat(errcount, "&arrstr=").concat(arrstr, "&belong=").concat(_this3.belong)
                });
              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    submitresult: function submitresult() {
      var _this4 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
        var that, arrflag;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                that = _this4;
                arrflag = [];
                arrflag = that.subjectList.filter(function (val, i) {
                  return val.userAnswer == '';
                });
                if (arrflag.length > 0) {
                  uni.showModal({
                    title: '提示',
                    content: '您的题目没有做完，请确定是否提交',
                    showCancel: true,
                    success: function () {
                      var _success = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(res) {
                        return _regenerator.default.wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                if (res.confirm) {
                                  that.reasubmit();
                                } else if (res.cancel) {
                                  console.log('用户点击取消');
                                }
                              case 1:
                              case "end":
                                return _context4.stop();
                            }
                          }
                        }, _callee4);
                      }));
                      function success(_x2) {
                        return _success.apply(this, arguments);
                      }
                      return success;
                    }()
                  });
                } else {
                  that.reasubmit();
                }
              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 249:
/*!**************************************************************************************************************!*\
  !*** D:/BaiduNetdiskDownload/project/PJ0194/智慧社区系统/pages/xiti/question.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_question_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../APP/code/hbuildx/HBuilderX.4.15.2024050802/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./question.vue?vue&type=style&index=0&lang=css& */ 250);
/* harmony import */ var _APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_question_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_question_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_question_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_question_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_APP_code_hbuildx_HBuilderX_4_15_2024050802_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_question_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 250:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/BaiduNetdiskDownload/project/PJ0194/智慧社区系统/pages/xiti/question.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[242,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/xiti/question.js.map