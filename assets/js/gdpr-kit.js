/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/gdpr-kit.js":
/*!***********************************!*\
  !*** ./src/assets/js/gdpr-kit.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
mandatory instead of required
*/

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var gdprKitCookieBanner = document.querySelector('#js-gdpr-kit__cookie-banner');
var gdprKitSubmit = document.querySelector('#gdpr-kit__submit');
var gdprKitMandatoryCookies = document.querySelector('#gdprKitMandatoryCookies');
var gdprKitAnalyticsCookies = document.querySelector('#gdprKitAnalyticsCookies');
var gdprKitMarketingCookies = document.querySelector('#gdprKitMarketingCookies');
var gdprKitShowSettingsToggle = document.querySelector('#gdprKitShowSettings');
var gdprKitAdjustSettingsToggles = document.querySelectorAll('.gdpr-kit__toggle-input');
var gdprKitClassCookieConsent = 'js-gdpr-kit__cookie-consent';
var gdprKitEventValueMandatoryCookies = 'gdprKitMandatoryCookies';
var gdprKitEventValueAnalyticsCookies = 'gdprKitAnalyticsCookies';
var gdprKitEventValueMarketingCookies = 'gdprKitMarketingCookies';
var gdprKitEventValueAllCookies = 'gdprKitAllCookies';
var gdprKitEventValueNoCookies = 'gdprKitNoCookies';
var gdprKitNotifications = true;
/* SETTINGS */

gdprKitShowSettingsToggle.addEventListener('click', function (e) {
  e.preventDefault();
  gdprKitShowSettings();
});

function gdprKitShowSettings() {
  document.documentElement.classList.add('gdpr-kit__status__settings--are-visible');
  gdprKitSubmit.innerHTML = gdprKitSubmit.dataset.adjustSettingsLabel;
}

var _iterator = _createForOfIteratorHelper(gdprKitAdjustSettingsToggles),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var gdprKitAdjustSettingsToggle = _step.value;
    gdprKitAdjustSettingsToggle.addEventListener('click', function () {
      gdprKitAdjustSettings();
    });
  }
  /* INITIAL */

} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

document.addEventListener('DOMContentLoaded', function () {
  gdprKitSetInputStates();
  gdprKitAdjustSettings();

  if (!getCookie('gdprKitCookieConsent=all')) {
    gdprKitShowCookieBanner();
  }

  gdprKitEvents();
  console.log('Refresh');
});
/* SUBMIT */

gdprKitSubmit.addEventListener('click', function (e) {
  //let gdprKitCookieConsentStatus = this.dataset.cookieConsentStatus;
  e.preventDefault(); //setCookie();

  gdprKitSetCookies();
  gdprKitEvents();
  gdprKitHideCookieBanner();
});

function gdprKitShowCookieBanner() {
  document.documentElement.classList.add(gdprKitClassCookieConsent);
}

function gdprKitHideCookieBanner() {
  document.documentElement.classList.remove(gdprKitClassCookieConsent);
}

function getCookie(v) {
  var patt = new RegExp(v);
  return patt.test(document.cookie); //return /(^|;)\s*gdprKitCookieConsent=v/.test(document.cookie);
}

function gdprKitSetCookies() {
  var date = new Date();
  date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
  /*
   * Mandatory
   */

  switch (gdprKitSubmit.dataset.cookieConsentMandatory == 1) {
    case true:
      document.cookie = "gdprKitCookieConsentMandatory=1; expires=".concat(date.toUTCString(), "; path=/");
      break;

    default:
      document.cookie = "gdprKitCookieConsentMandatory=1; expires=".concat(date.toUTCString(), "; path=/");
  }
  /*
   * Analytics
   */


  switch (gdprKitSubmit.dataset.cookieConsentAnalytics == 1) {
    case true:
      document.cookie = "gdprKitCookieConsentAnalytics=1; expires=".concat(date.toUTCString(), "; path=/");
      console.log('Set Analytics Cookie: True');
      break;

    default:
      document.cookie = "gdprKitCookieConsentAnalytics=0; expires=".concat(date.toUTCString(), "; path=/");
      console.log('Set Analytics Cookie: false');
  }
  /*
   * Marketing
   */


  switch (gdprKitSubmit.dataset.cookieConsentMarketing == 1) {
    case true:
      document.cookie = "gdprKitCookieConsentMarketing=1; expires=".concat(date.toUTCString(), "; path=/");
      break;

    default:
      document.cookie = "gdprKitCookieConsentMarketing=0; expires=".concat(date.toUTCString(), "; path=/");
  }
}

function gdprKitAdjustSettings() {
  /*
   * Mandatory
   */
  switch (gdprKitMandatoryCookies.checked) {
    case true:
      gdprKitSubmit.setAttribute('data-cookie-consent-mandatory', '1');
      break;

    default:
      gdprKitSubmit.setAttribute('data-cookie-consent-mandatory', '1');
  }
  /*
   * Analytics
   */


  switch (gdprKitAnalyticsCookies.checked) {
    case true:
      gdprKitSubmit.setAttribute('data-cookie-consent-analytics', '1');
      console.log('Input checked, set attribute: Analytics true');
      break;

    default:
      gdprKitSubmit.setAttribute('data-cookie-consent-analytics', '0');
  }
  /*
   * Marketing
   */


  switch (gdprKitMarketingCookies.checked) {
    case true:
      gdprKitSubmit.setAttribute('data-cookie-consent-marketing', '1');
      break;

    default:
      gdprKitSubmit.setAttribute('data-cookie-consent-marketing', '0');
  }
}

function gdprKitSetInputStates() {
  /*
   * Mandatory
   */
  switch (getCookie('gdprKitCookieConsentMandatory=1')) {
    case true:
      gdprKitMandatoryCookies.checked = true;
      break;

    default:
      gdprKitMandatoryCookies.checked = false;
  }
  /*
   * Analytics
   */


  switch (getCookie('gdprKitCookieConsentAnalytics=1')) {
    case true:
      gdprKitAnalyticsCookies.checked = true;
      break;

    default:
      gdprKitAnalyticsCookies.checked = false;
  }
  /*
   * Marketing
   */


  switch (getCookie('gdprKitCookieConsentMarketing=1')) {
    case true:
      gdprKitMarketingCookies.checked = true;
      break;

    default:
      gdprKitMarketingCookies.checked = false;
  }
} // GTM Trigger


function gdprKitEvents() {
  /*
   * Mandatory
   */
  switch (getCookie('gdprKitCookieConsentMandatory=1')) {
    case true:
      gdprKitDataLayer(gdprKitEventValueMandatoryCookies);
      gdprKitNotification('🍪✔️ - mandatory cookies accepted');
      break;

    default:
  }
  /*
   * Analytics
   */


  switch (getCookie('gdprKitCookieConsentAnalytics=1')) {
    case true:
      gdprKitDataLayer(gdprKitEventValueAnalyticsCookies);
      gdprKitNotification('🍪✔️ - analytics cookies accepted');
      break;

    default:
  }
  /*
   * Marketing
   */


  switch (getCookie('gdprKitCookieConsentMarketing=1')) {
    case true:
      gdprKitDataLayer(gdprKitEventValueMarketingCookies);
      gdprKitNotification('🍪✔️ - marketing cookies accepted');
      break;

    default:
  } //gdprKitDataLayer(gdprKitEventValueNoCookies);
  //gdprKitNotification('🍪❌ - cookies declined');

}

function gdprKitDataLayer(e) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: e
  });
}

function gdprKitNotification(t) {
  if (gdprKitNotifications === true) {
    console.log("GDPR-Kit: ".concat(t));
  }
}

/***/ }),

/***/ "./src/assets/scss/gdpr-kit.scss":
/*!***************************************!*\
  !*** ./src/assets/scss/gdpr-kit.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************************!*\
  !*** multi ./src/assets/js/gdpr-kit.js ./src/assets/scss/gdpr-kit.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/lukasbecker/Documents/websites/gdpr-kit/src/assets/js/gdpr-kit.js */"./src/assets/js/gdpr-kit.js");
module.exports = __webpack_require__(/*! /Users/lukasbecker/Documents/websites/gdpr-kit/src/assets/scss/gdpr-kit.scss */"./src/assets/scss/gdpr-kit.scss");


/***/ })

/******/ });