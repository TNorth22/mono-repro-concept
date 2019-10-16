"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _NewAppScreen = require("react-native/Libraries/NewAppScreen");

var __jsx = _react["default"].createElement;

var Component = function Component(props) {
  return __jsx(_react["default"].Fragment, null, __jsx(_reactNative.StatusBar, {
    barStyle: "dark-content"
  }), __jsx(_reactNative.SafeAreaView, null, __jsx(_reactNative.ScrollView, {
    contentInsetAdjustmentBehavior: "automatic",
    style: styles.scrollView
  }, __jsx(_NewAppScreen.Header, null), global.HermesInternal == null ? null : __jsx(_reactNative.View, {
    style: styles.engine
  }, __jsx(_reactNative.Text, {
    style: styles.footer
  }, "Engine: Hermes")), __jsx(_reactNative.View, {
    style: styles.body
  }, __jsx(_reactNative.View, {
    style: styles.sectionContainer
  }, __jsx(_reactNative.Text, {
    style: styles.sectionTitle
  }, "Step One"), __jsx(_reactNative.Text, {
    style: styles.sectionDescription
  }, "Edit ", __jsx(_reactNative.Text, {
    style: styles.highlight
  }, "App.js"), " to screen and then come back to see your edits.")), __jsx(_reactNative.View, {
    style: styles.sectionContainer
  }, __jsx(_reactNative.Text, {
    style: styles.sectionTitle
  }, "See Your Changes"), __jsx(_reactNative.Text, {
    style: styles.sectionDescription
  }, __jsx(_NewAppScreen.ReloadInstructions, null))), __jsx(_reactNative.View, {
    style: styles.sectionContainer
  }, __jsx(_reactNative.Text, {
    style: styles.sectionTitle
  }, "Debug"), __jsx(_reactNative.Text, {
    style: styles.sectionDescription
  }, __jsx(_NewAppScreen.DebugInstructions, null))), __jsx(_reactNative.View, {
    style: styles.sectionContainer
  }, __jsx(_reactNative.Text, {
    style: styles.sectionTitle
  }, "Learn More"), __jsx(_reactNative.Text, {
    style: styles.sectionDescription
  }, "Read the docs to discover what to do next:")), __jsx(_NewAppScreen.LearnMoreLinks, null)))));
};

var styles = _reactNative.StyleSheet.create({
  scrollView: {
    backgroundColor: _NewAppScreen.Colors.lighter
  },
  engine: {
    position: 'absolute',
    right: 0
  },
  body: {
    backgroundColor: _NewAppScreen.Colors.white
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: _NewAppScreen.Colors.black
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: _NewAppScreen.Colors.dark
  },
  highlight: {
    fontWeight: '700'
  },
  footer: {
    color: _NewAppScreen.Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right'
  }
});

var _default = Component;
exports["default"] = _default;