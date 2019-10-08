module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/json/stringify.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/assign.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/json/stringify.js":
/*!************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/json/stringify.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ../../modules/_core */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/assign.js":
/*!***********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/assign.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js":
/*!**************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js":
/*!*************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-includes.js":
/*!******************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-includes.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js":
/*!*******************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js":
/*!*******************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js":
/*!***********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js":
/*!***************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js":
/*!**************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!*****************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js":
/*!**********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js":
/*!*********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js":
/*!**********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js":
/*!*******************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!******************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js":
/*!***********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js":
/*!*************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js":
/*!***********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-assign.js":
/*!*****************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-assign.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js":
/*!*************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js":
/*!***************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js":
/*!************************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js":
/*!***************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js":
/*!**************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js":
/*!*****************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js":
/*!**************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js":
/*!**********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-absolute-index.js":
/*!*********************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js":
/*!**************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js":
/*!**************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js":
/*!*************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js":
/*!*************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js":
/*!****************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js":
/*!*******************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.assign.js":
/*!********************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.assign.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./components/portal/Menu/index.js":
/*!*****************************************!*\
  !*** ./components/portal/Menu/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/sloth/Web/gladney/adopted-portal/app/components/portal/Menu/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
let colors = ['sunrise', 'rose', 'navy', 'aqua', 'maize', 'teal'];
/* harmony default export */ __webpack_exports__["default"] = (({
  toggleTheme
}) => __jsx("nav", {
  onClick: e => e.stopPropagation(),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("span", {
  className: "main-nav",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, "Nav menu"), __jsx("div", {
  className: "adptThemer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, colors.map(color => __jsx("div", {
  onClick: e => toggleTheme(color),
  className: ["adptTheme", color + "-bg"].join(' '),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
})))));

/***/ }),

/***/ "./components/portal/index.js":
/*!************************************!*\
  !*** ./components/portal/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Menu */ "./components/portal/Menu/index.js");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../svg */ "./components/svg.js");
/* harmony import */ var _sass_portal_sass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sass/portal.sass */ "./sass/portal.sass");
/* harmony import */ var _sass_portal_sass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sass_portal_sass__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "/Users/sloth/Web/gladney/adopted-portal/app/components/portal/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






/* harmony default export */ __webpack_exports__["default"] = (({
  children
}) => {
  let {
    0: loaded,
    1: setLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      toggleMenu = () => document.body.classList.toggle('menu-open'),
      toggleTheme = color => {
    let settings = JSON.parse(localStorage.getItem('portalSettings') || '{"theme": "sunrise"}'),
        theme = color || settings.theme;
    document.documentElement.className = theme ? theme + '-theme' : '';
    localStorage.setItem('portalSettings', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(settings, {
      theme: theme
    })));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    setLoaded(true);
    toggleTheme();
  }, []);
  if (!loaded) return null;else return __jsx("adpt-portal", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, 'AdoptED Online Learning Portal' || false)), __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("adpt-logo", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx(_svg__WEBPACK_IMPORTED_MODULE_6__["default"].AdptLogo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }))), children);
});

/***/ }),

/***/ "./components/svg.js":
/*!***************************!*\
  !*** ./components/svg.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/sloth/Web/gladney/adopted-portal/app/components/svg.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
const SVG = {
  AdptLogo: () => __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    viewBox: "0 0 216 36",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("path", {
    d: "M121.07713.59447V3.74992A14.15539,14.15539,0,0,0,111.54769.59447H97.35693V11.50132C94.84373,4.77409,88.37149,0,80.08756,0A18.19756,18.19756,0,0,0,63.40768,10.023C60.54124,4.36045,54.52011.59447,46.79127.59447H33.24621V26.93759L21.93068.34636H14.885L0,35.32665H7.78962l3.17572-7.78886h14.6866l3.17533,7.78886h17.964c7.68067,0,13.68613-3.76062,16.574-9.393a18.02876,18.02876,0,0,0,16.62291,9.98858A18.11633,18.11633,0,0,0,97.35693,24.30053V35.32665h7.6413V24.90646h5.80513c7.79,0,14.04167-4.16739,14.04167-12.20436v-.09977a12.69771,12.69771,0,0,0-.95612-4.96142h7.75636V35.32665h7.64092V7.64091h10.56852V.59447Zm-107.383,20.1943L18.30845,9.52639l4.61467,11.26238Zm43.56662-2.7292c0,6.153-4.21747,10.37011-10.46951,10.37011H40.88712V7.49105h5.90415c6.252,0,10.46951,4.31725,10.46951,10.47027Zm33.24659,0c0,5.95462-4.26755,10.81625-10.41981,10.81625-6.15264,0-10.51882-4.96141-10.51882-10.9145v-.09977c0-5.95347,4.26716-10.81625,10.41942-10.81625,6.15264,0,10.51921,4.961,10.51921,10.916Zm26.59735-5.20952c0,2.97769-2.2326,5.2596-6.05287,5.2596h-6.05362V7.49105h5.90453c3.82026,0,6.202,1.83578,6.202,5.25961Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }), __jsx("path", {
    d: "M154.71965.59438h24.70947V2.976h-22.129V16.62148h19.89634V19.0031H157.3001v13.942h22.377v2.38161H154.71965Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }), __jsx("path", {
    d: "M185.98178.59438h11.56068C208.45821.59438,216,8.087,216,17.86146v.09977c0,9.77447-7.54179,17.36543-18.45754,17.36543H185.98178Zm11.56068,32.35067c9.67541,0,15.7784-6.599,15.7784-14.88547v-.09835c0-8.2366-6.103-14.98524-15.7784-14.98524h-8.9806V32.94505Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  })),
  GabbyAnim: () => __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 4897.5123 4965.0115",
    className: "gabby",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, `
                    .a,.b,.d,.e,.o,.p{fill: none;}.b{stroke:#495077;stroke-width:24px;}.b,.d,.e,.n,.o,.p{stroke-linecap:round;}.b,.d,.e,.p{stroke-miterlimit:10;}.c{clip-path:url(#a);}.d,.e,.p{stroke:#d9c2b1;}.d{stroke-width:80px;}.e{stroke-width:100px;}.f{clip-path:url(#b);}.g{clip-path:url(#c);}.h{fill:#775e48;}.i{fill:#9d7b60;}.j{fill:#dcc1b2;}.k{fill:#dc6172;}.l{fill:#fff;}.m{fill:#050606;}.n{fill:#231f20;}.n,.o{stroke:#231f20;stroke-linejoin:round;stroke-width:12px;}.p{stroke-width:80px;}.q{clip-path:url(#d);}.r{fill:#f2d176;}.s{fill:#66c7c7;}.t{fill:#495078;}.lrg-lead{transform-origin:2047px 1462px;}.small-lead{transform-origin:1771px 1764px;}.med-lead{transform-origin:1849px 1566px;}.cloud{transform-origin:3486px 1129px;}.belly.bounce{transform-origin:907px 3788px;}.mouth{transform-origin:995px 2687px;}.gabby-eyes{transform-origin:928px 2442px;}.choicepost{transform-origin:3500px 1695px;}.adoptionsign{transform-origin:3500px 1695px;}.parentingsign{transform-origin:3500px 1695px;}
                    `), __jsx("clipPath", {
    id: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("rect", {
    className: "a",
    x: "67.8914",
    y: "1316.0608",
    width: "1829.8174",
    height: "4012.9507",
    transform: "translate(1965.6001 6645.0724) rotate(-180)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  })), __jsx("clipPath", {
    id: "b",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("polygon", {
    className: "a",
    points: "81.495 3499.898 1957.86 3162.626 1957.86 953.376 81.495 1290.649 81.495 3499.898",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  })), __jsx("clipPath", {
    id: "c",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("polygon", {
    className: "a",
    points: "71.682 3505.209 1948.047 3167.937 1948.047 958.688 71.682 1295.96 71.682 3505.209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  })), __jsx("clipPath", {
    id: "d",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("path", {
    className: "a",
    d: "M4564.1182,960.1562A284.5893,284.5893,0,0,0,4642.81,763.3886c0-157.7571-127.8884-285.6455-285.6464-285.6455a284.21,284.21,0,0,0-142.7388,38.2608c-20.1617-138.0171-138.98-244.01-282.5923-244.01a284.4069,284.4069,0,0,0-179.8192,63.7516,285.6411,285.6411,0,0,0-328.3909-22.1076c-51.6858-73.4793-137.0718-121.541-233.7344-121.541-127.0982,0-234.7549,83.0342-271.82,197.7969a287.877,287.877,0,0,0-35.3123-2.2511c-107.1548,0-200.4747,59.0388-249.3513,146.3284q-6.9208-.36-13.93-.3715c-145.4068,0-263.2821,117.8753-263.2821,263.2821a263.7359,263.7359,0,0,0,8.13,65.11c-107.5292,40.993-183.9492,145.0156-183.9492,266.9408,0,121.9795,76.4861,226.0416,184.0914,266.9961a284.4679,284.4679,0,0,0-26.93,121.1014c0,157.758,127.8884,285.6455,285.6464,285.6455a286.1452,286.1452,0,0,0,69.7781-8.6214,285.3358,285.3358,0,0,0,342.5587,6.86c48.4123,88.9075,142.6716,149.2453,251.03,149.2453a284.7256,284.7256,0,0,0,204.5425-86.3492,285.2068,285.2068,0,0,0,229.61,115.7417c138.6276,0,254.1549-98.7656,280.1435-229.7616a284.2235,284.2235,0,0,0,142.642,38.2055c148.8531,0,271.0569-113.8747,284.385-259.2509a293.0671,293.0671,0,0,0,65.2837,7.4084c161.4652,0,292.3585-130.8933,292.3585-292.3585C4785.5123,1106.81,4691.2826,991.871,4564.1182,960.1562Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }))), __jsx("g", {
    className: "belly-emphasis",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("line", {
    className: "b",
    x1: "512.9938",
    y1: "3585.734",
    x2: "328.5323",
    y2: "3543.166",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }), __jsx("line", {
    className: "b",
    x1: "502.3518",
    y1: "3765.3807",
    x2: "296.6063",
    y2: "3765.3807",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }), __jsx("line", {
    className: "b",
    x1: "502.3518",
    y1: "3929.8256",
    x2: "335.627",
    y2: "3993.6776",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }), __jsx("line", {
    className: "b",
    x1: "576.0144",
    y1: "3465.124",
    x2: "418.9894",
    y2: "3370.1499",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }), __jsx("line", {
    className: "b",
    x1: "569.8499",
    y1: "4057.5291",
    x2: "456.2364",
    y2: "4188.7805",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  })), __jsx("g", {
    className: "c",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("path", {
    className: "d",
    d: "M981.2623,3058.5072S843.3339,3767.8531,725.11,3940.2635",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }), __jsx("line", {
    className: "e",
    x1: "1179.4595",
    y1: "4235.8243",
    x2: "1137.7382",
    y2: "5007.6686",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), __jsx("g", {
    className: "f",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("g", {
    className: "g",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("polygon", {
    className: "h",
    points: "1297.245 3166.582 1152.074 3117.592 821.705 3125.569 759.361 2867.781 1222.306 2641.794 1332.922 2378.762 1514.047 2378.762 1498.251 2772.672 1458.613 3002.362 1297.245 3166.582",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }), __jsx("path", {
    className: "i",
    d: "M538.8235,2239.4941c17.325,5.9343,46.3069-68.2683,63.5133-33.554,65.1024,131.3452,117.5971,513.2958,180.5614,543.144,10.0954,241.8755,38.8071,376.4852,38.8071,376.4852-294.1975-23.6765-282.8818-355.1442-282.8818-355.1442Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }), __jsx("path", {
    className: "j",
    d: "M970.6772,2913.4585h.0007c188.2539,0,346.1634-141.5739,366.0086-328.1454l27.6379-259.833c2.0908-391.7321-147.3831-405.4824-366.0086-405.4824H789.3074c-136.4781,0-242.87,117.866-228.4827,253.1244l43.8439,412.191C624.5138,2771.8846,782.4233,2913.4585,970.6772,2913.4585Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }), __jsx("path", {
    className: "i",
    d: "M1297.2452,3166.5818s90.9242-426.1729,6.06-1124.623L560.2915,2247.1933,537.661,2389.251,469.77,2177.6443s-95.3926-346.4116,171.0433-439.6682c441.9329-154.6833,712.7268,131.4993,712.7268,131.4993s248.085,23.6763,248.085,183.4912-21.498,758.4711-21.498,758.4711S1591.4419,3142.9056,1297.2452,3166.5818Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }))), __jsx("line", {
    className: "e",
    x1: "953.0035",
    y1: "4236.1191",
    x2: "970.76",
    y2: "5031.6165",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }), __jsx("path", {
    className: "k",
    d: "M877.51,4235.8243h408.5272a61.5842,61.5842,0,0,0,60.8516-71.0554L1169.0173,3021.9521a61.5843,61.5843,0,0,0-60.8516-52.1131H1002.02a61.5842,61.5842,0,0,0-61.222,54.9141L816.2882,4167.57A61.5843,61.5843,0,0,0,877.51,4235.8243Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }), __jsx("ellipse", {
    className: "k belly bounce",
    cx: "907.1955",
    cy: "3788.3374",
    rx: "281",
    ry: "359.5213",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), __jsx("g", {
    className: "gabby-eyes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx("ellipse", {
    className: "l eye-white left",
    cx: "1085.4478",
    cy: "2442.0163",
    rx: "92.6917",
    ry: "92.6917",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }), __jsx("ellipse", {
    className: "m eye-iris left",
    cx: "1081.6281",
    cy: "2477.3614",
    rx: "61.3044",
    ry: "61.3044",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }), __jsx("ellipse", {
    className: "l eye-white right",
    cx: "770.1805",
    cy: "2442.0163",
    rx: "92.6917",
    ry: "92.6917",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }), __jsx("ellipse", {
    className: "m eye-iris right",
    cx: "766.3608",
    cy: "2477.3614",
    rx: "61.3044",
    ry: "61.3044",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  })), __jsx("path", {
    className: "n mouth",
    d: "M995.2385,2686.8689c48.5529,86.3054-156.0884-5.0236-156.0884-5.0236S946.3281,2599.9279,995.2385,2686.8689Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }), __jsx("path", {
    className: "o",
    d: "M1210.6247,2300.6794s-31.9024-75.5322-98.8724-50.9021",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }), __jsx("path", {
    className: "o",
    d: "M759.5923,2255.5674s-50.9021-18.0732-95.2362,50.8965",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }), __jsx("path", {
    className: "p",
    d: "M1172.3729,3043.5115c53.2553,131.4823,136.682,251.648,169.9794,390.8146,33.3018,139.185-406.0674,496.0239-424.0338,527.4255",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  })), __jsx("circle", {
    className: "l lrg-lead",
    cx: "2047.0407",
    cy: "1461.6986",
    r: "62.2694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }), __jsx("circle", {
    className: "l med-lead",
    cx: "1848.7342",
    cy: "1566.292",
    r: "49.1492",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }), __jsx("circle", {
    className: "l small-lead",
    cx: "1770.8941",
    cy: "1764.2365",
    r: "38.4981",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }), __jsx("g", {
    className: "cloud",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx("ellipse", {
    className: "l",
    cx: "3486.0932",
    cy: "1128.9318",
    rx: "1084.0258",
    ry: "663.668",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }), __jsx("circle", {
    className: "l",
    cx: "2619.4739",
    cy: "796.8813",
    r: "263.2817",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }), __jsx("circle", {
    className: "l",
    cx: "4357.1634",
    cy: "763.3892",
    r: "285.6461",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }), __jsx("circle", {
    className: "l",
    cx: "4493.1541",
    cy: "1243.7949",
    r: "292.3579",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }), __jsx("circle", {
    className: "l",
    cx: "2882.7556",
    cy: "673.2888",
    r: "285.6461",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }), __jsx("circle", {
    className: "l",
    cx: "2868.8025",
    cy: "1569.0351",
    r: "285.6461",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }), __jsx("circle", {
    className: "l",
    cx: "3189.8878",
    cy: "477.743",
    r: "285.6461",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }), __jsx("circle", {
    className: "l",
    cx: "3572.1929",
    cy: "557.6396",
    r: "285.6461",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }), __jsx("circle", {
    className: "l",
    cx: "2466.0184",
    cy: "1128.9318",
    r: "285.6461",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }), __jsx("circle", {
    className: "l",
    cx: "2623.1803",
    cy: "1517.0291",
    r: "285.6461",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }), __jsx("circle", {
    className: "l",
    cx: "3286.5467",
    cy: "1664.5131",
    r: "285.6461",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }), __jsx("circle", {
    className: "l",
    cx: "3720.6995",
    cy: "1693.9054",
    r: "285.6461",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }), __jsx("circle", {
    className: "l",
    cx: "3931.8331",
    cy: "557.6396",
    r: "285.6461",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }), __jsx("circle", {
    className: "l",
    cx: "4143.4851",
    cy: "1502.349",
    r: "285.6461",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  })), __jsx("g", {
    className: "q post-choice",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, __jsx("path", {
    className: "r choicepost",
    d: "M3509.23,1992.645H3407.4452V635.5048a50.8924,50.8924,0,0,1,50.8923-50.8923h0a50.8923,50.8923,0,0,1,50.8922,50.8923Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }), __jsx("path", {
    className: "s adoptionsign",
    d: "M4178.8974,1043.57H3182.643a27.8773,27.8773,0,0,1-27.8773-27.8772V718.2994a27.8773,27.8773,0,0,1,27.8773-27.8773h996.2544a27.8775,27.8775,0,0,1,17.6034,6.261L4379.0937,845.38a27.8773,27.8773,0,0,1,0,43.2325l-182.5929,148.6964A27.8769,27.8769,0,0,1,4178.8974,1043.57Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }), __jsx("path", {
    className: "s parentingsign",
    d: "M2723.4786,1434.3147H3719.733a27.8772,27.8772,0,0,0,27.8773-27.8772V1109.0446a27.8773,27.8773,0,0,0-27.8773-27.8773H2723.4786a27.877,27.877,0,0,0-17.6034,6.2611l-182.5929,148.6964a27.8773,27.8773,0,0,0,0,43.2325l182.5929,148.6964A27.8769,27.8769,0,0,0,2723.4786,1434.3147Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }), __jsx("g", {
    id: "adoption",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, __jsx("path", {
    className: "t",
    d: "M3378.7,927.2463l-2.3745-19.791h-23.749l-2.3745,19.791c-.5938,5.541-4.354,7.1245-8.1143,7.1245h-11.8745c-5.937,0-8.9057-4.1562-7.9165-10.0932l18.999-125.4727c.792-5.7392,3.76-7.7182,8.3125-7.7182h29.6856c4.5522,0,7.5205,1.979,8.3125,7.7182l18.999,125.4727c.9893,5.937-1.9795,10.0932-7.9165,10.0932h-11.8745C3383.0541,934.3708,3379.2939,932.7873,3378.7,927.2463Zm-23.5507-41.956h18.4052l-2.5727-22.5615-5.541-52.8414h-1.9795l-5.5411,52.8414Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }), __jsx("path", {
    className: "t",
    d: "M3429.7578,934.3708c-5.1456,0-8.1143-2.9687-8.1143-8.1142V799.2009c0-5.146,2.9687-8.1142,8.1143-8.1142h31.0712c25.53,0,39.1856,9.895,39.1856,31.4668v80.35c0,21.5717-13.6553,31.4672-39.1856,31.4672Zm31.0712-22.1655c6.5313,0,9.8955-3.958,9.8955-9.3017v-80.35c0-5.3433-3.3642-9.3013-9.8955-9.3013h-9.895v98.9531Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }), __jsx("path", {
    className: "t",
    d: "M3599.163,821.5642v82.3291c0,21.5718-13.6552,31.4673-39.1855,31.4673s-39.1856-9.8955-39.1856-31.4673V821.5642c0-21.5718,13.6558-31.4673,39.1856-31.4673S3599.163,799.9924,3599.163,821.5642Zm-49.0805,0v82.3291c0,5.3433,3.3642,9.3018,9.895,9.3018s9.8955-3.9585,9.8955-9.3018V821.5642c0-5.3437-3.3643-9.3018-9.8955-9.3018S3550.0825,816.2205,3550.0825,821.5642Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }), __jsx("path", {
    className: "t",
    d: "M3649.2309,884.8943v41.3623c0,5.1455-2.9688,8.1142-8.1143,8.1142h-13.062c-5.1455,0-8.1142-2.9687-8.1142-8.1142V799.2009c0-5.146,2.9687-8.1142,8.1142-8.1142h29.0923c25.53,0,39.1856,9.895,39.1856,31.4668V853.427c0,21.5718-13.6553,31.4673-39.1856,31.4673Zm7.916-22.1655c6.5313,0,9.8955-3.9581,9.8955-9.3018V822.5535c0-5.3433-3.3642-9.3013-9.8955-9.3013h-7.916v49.4766Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }), __jsx("path", {
    className: "t",
    d: "M3761.4418,813.2522V926.2566c0,5.1455-2.9687,8.1142-8.1142,8.1142h-13.062c-5.1455,0-8.1143-2.9687-8.1143-8.1142V813.2522h-18.8008c-5.1455,0-8.1142-2.9688-8.1142-8.1143v-5.937c0-5.146,2.9687-8.1142,8.1142-8.1142h66.8921c5.146,0,8.1143,2.9682,8.1143,8.1142v5.937c0,5.1455-2.9683,8.1143-8.1143,8.1143Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }), __jsx("path", {
    className: "t",
    d: "M3830.5087,926.2566c0,5.1455-2.9687,8.1142-8.1142,8.1142h-13.062c-5.1455,0-8.1138-2.9687-8.1138-8.1142V799.2009c0-5.146,2.9683-8.1142,8.1138-8.1142h13.062c5.1455,0,8.1142,2.9682,8.1142,8.1142Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }), __jsx("path", {
    className: "t",
    d: "M3929.6577,821.5642v82.3291c0,21.5718-13.6553,31.4673-39.1856,31.4673s-39.1851-9.8955-39.1851-31.4673V821.5642c0-21.5718,13.6553-31.4673,39.1851-31.4673S3929.6577,799.9924,3929.6577,821.5642Zm-49.0806,0v82.3291c0,5.3433,3.3642,9.3018,9.895,9.3018s9.8955-3.9585,9.8955-9.3018V821.5642c0-5.3437-3.3642-9.3018-9.8955-9.3018S3880.5771,816.2205,3880.5771,821.5642Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }), __jsx("path", {
    className: "t",
    d: "M4003.4741,799.2009c0-5.146,2.9687-8.1142,8.1142-8.1142h11.083c5.1455,0,8.1138,2.9682,8.1138,8.1142V926.2566c0,5.1455-2.9683,8.1142-8.1138,8.1142h-13.26c-4.9478,0-6.9268-2.5727-8.1143-5.937l-14.8433-42.748-9.6972-34.4356-1.979.3955,2.9687,35.4253v39.1856c0,5.1455-2.9687,8.1142-8.1142,8.1142h-11.083c-5.1456,0-8.1138-2.9687-8.1138-8.1142V799.2009c0-5.146,2.9682-8.1142,8.1138-8.1142h13.26c4.9478,0,6.9268,2.5727,8.1143,5.937l14.8432,42.748,9.6973,34.4356,1.979-.396-2.9687-35.4253Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  })), __jsx("g", {
    id: "parenting",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, __jsx("path", {
    className: "t",
    d: "M2878.0024,1286.53v41.3623c0,5.1455-2.9688,8.1143-8.1143,8.1143h-13.062c-5.1455,0-8.1142-2.9688-8.1142-8.1143V1200.8367c0-5.146,2.9687-8.1143,8.1142-8.1143h29.0923c25.53,0,39.1855,9.895,39.1855,31.4668v30.8735c0,21.5718-13.6552,31.4673-39.1855,31.4673Zm7.916-22.1655c6.5312,0,9.8955-3.958,9.8955-9.3018v-30.8735c0-5.3433-3.3643-9.3013-9.8955-9.3013h-7.916v49.4766Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }), __jsx("path", {
    className: "t",
    d: "M2992.5878,1328.8821l-2.3745-19.791h-23.749l-2.3745,19.791c-.5938,5.541-4.354,7.1245-8.1143,7.1245H2944.101c-5.937,0-8.9057-4.1563-7.9165-10.0933l18.999-125.4726c.792-5.7393,3.76-7.7183,8.3125-7.7183h29.6856c4.5522,0,7.5205,1.979,8.3125,7.7183l18.999,125.4726c.9893,5.937-1.9795,10.0933-7.9165,10.0933h-11.8745C2996.9418,1336.0066,2993.1816,1334.4231,2992.5878,1328.8821Zm-23.5508-41.9561h18.4053l-2.5727-22.5615-5.541-52.8413h-1.9795l-5.5411,52.8413Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }), __jsx("path", {
    className: "t",
    d: "M3099.4545,1276.4368l18.01,47.8935c1.583,4.1558.5937,11.6763-7.5205,11.6763H3096.288c-4.1557,0-6.7285-1.979-7.916-5.3433l-17.6138-49.477h-5.937v46.706c0,5.1455-2.9687,8.1143-8.1142,8.1143h-13.062c-5.1455,0-8.1138-2.9688-8.1138-8.1143V1200.8367c0-5.146,2.9683-8.1143,8.1138-8.1143h31.0712c25.53,0,39.1856,9.895,39.1856,31.4668v25.53C3113.9018,1262.781,3108.954,1271.489,3099.4545,1276.4368Zm-24.7383-17.4161c6.5313,0,9.8956-3.958,9.8956-9.3012v-25.53c0-5.3433-3.3643-9.3013-9.8956-9.3013h-9.895v44.1328Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }), __jsx("path", {
    className: "t",
    d: "M3192.666,1192.7224c5.1455,0,8.1142,2.9683,8.1142,8.1143v5.937c0,5.1455-2.9687,8.1142-8.1142,8.1142H3163.97v38.3936h21.1757c5.1456,0,8.1143,2.9687,8.1143,8.1142v5.9375c0,5.1456-2.9687,8.1138-8.1143,8.1138H3163.97v38.3941h28.6963c5.1455,0,8.1142,2.9687,8.1142,8.1142v5.937c0,5.1455-2.9687,8.1143-8.1142,8.1143h-49.8726c-5.1455,0-8.1138-2.9688-8.1138-8.1143V1200.8367c0-5.146,2.9683-8.1143,8.1138-8.1143Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }), __jsx("path", {
    className: "t",
    d: "M3268.6577,1200.8367c0-5.146,2.9687-8.1143,8.1142-8.1143h11.083c5.1455,0,8.1138,2.9683,8.1138,8.1143v127.0556c0,5.1455-2.9683,8.1143-8.1138,8.1143h-13.26c-4.9478,0-6.9268-2.5728-8.1143-5.937l-14.8433-42.7481-9.6972-34.4355-1.979.3955,2.9687,35.4253v39.1855c0,5.1455-2.9687,8.1143-8.1142,8.1143h-11.0831c-5.1455,0-8.1137-2.9688-8.1137-8.1143V1200.8367c0-5.146,2.9682-8.1143,8.1137-8.1143h13.26c4.9478,0,6.9268,2.5728,8.1143,5.937l14.8432,42.7481,9.6973,34.4355,1.979-.396-2.9687-35.4253Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }), __jsx("path", {
    className: "t",
    d: "M3365.0346,1214.8879v113.0044c0,5.1455-2.9687,8.1143-8.1143,8.1143h-13.062c-5.1455,0-8.1142-2.9688-8.1142-8.1143V1214.8879h-18.8008c-5.1455,0-8.1143-2.9687-8.1143-8.1142v-5.937c0-5.146,2.9688-8.1143,8.1143-8.1143h66.8921c5.146,0,8.1142,2.9683,8.1142,8.1143v5.937c0,5.1455-2.9682,8.1142-8.1142,8.1142Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }), __jsx("path", {
    className: "t",
    d: "M3434.102,1327.8923c0,5.1455-2.9688,8.1143-8.1143,8.1143h-13.062c-5.1455,0-8.1142-2.9688-8.1142-8.1143V1200.8367c0-5.146,2.9687-8.1143,8.1142-8.1143h13.062c5.1455,0,8.1143,2.9683,8.1143,8.1143Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }), __jsx("path", {
    className: "t",
    d: "M3507.9189,1200.8367c0-5.146,2.9687-8.1143,8.1142-8.1143h11.083c5.1456,0,8.1138,2.9683,8.1138,8.1143v127.0556c0,5.1455-2.9682,8.1143-8.1138,8.1143h-13.26c-4.9478,0-6.9268-2.5728-8.1143-5.937l-14.8432-42.7481-9.6973-34.4355-1.979.3955,2.9687,35.4253v39.1855c0,5.1455-2.9687,8.1143-8.1142,8.1143h-11.083c-5.1455,0-8.1143-2.9688-8.1143-8.1143V1200.8367c0-5.146,2.9688-8.1143,8.1143-8.1143h13.26c4.9478,0,6.9268,2.5728,8.1143,5.937l14.8428,42.7481,9.6977,34.4355,1.979-.396-2.9687-35.4253Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }), __jsx("path", {
    className: "t",
    d: "M3626.2631,1259.8127c5.146,0,8.1143,2.9683,8.1143,8.1143v37.602c0,21.5718-13.6553,31.4673-39.1856,31.4673s-39.185-9.8955-39.185-31.4673V1223.2c0-21.5717,13.6552-31.4672,39.185-31.4672s39.1856,9.8955,39.1856,31.4672v12.0723c0,5.1455-2.9683,8.1143-8.1143,8.1143h-13.0615c-5.1455,0-8.1143-2.9688-8.1143-8.1143V1223.2c0-5.3437-3.3642-9.3017-9.8955-9.3017s-9.895,3.958-9.895,9.3017v82.3291c0,5.3433,3.3643,9.3018,9.895,9.3018s9.8955-3.9585,9.8955-9.3018v-23.5507h-1.7812c-5.1455,0-8.1143-2.9688-8.1143-8.1143v-5.937c0-5.146,2.9688-8.1143,8.1143-8.1143Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  })))),
  GabbyAndGuy: () => __jsx("svg", {
    id: "e56459a8-c514-45de-8193-803777b2472b",
    "data-name": "Gabby & Guy",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 431 650",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, `.a528a901-b227-4ab5-8bea-a0df74243e7a{fill:#e6e6e6;}.a21adcdf-e740-488b-86a8-002daf1d3e61{fill:#485077;}.f181510a-0a3c-4c43-923e-4d229c622946{fill:#dcc1b1;}.eea140fd-3943-4fa9-8faa-0b2114b96b58{fill:#050505;}.afbd94ec-a5cd-4e05-9b0a-10f163aba310,.b6b09c25-a3c2-440e-b96d-92d6d36845f4,.e26ee595-981a-4c04-a557-4d55e0f96451{fill:none;stroke-linecap:round;}.e26ee595-981a-4c04-a557-4d55e0f96451{stroke:#231f20;stroke-width:3.286px;}.afbd94ec-a5cd-4e05-9b0a-10f163aba310,.e26ee595-981a-4c04-a557-4d55e0f96451{stroke-linejoin:round;}.feaf59db-517e-48e1-81e4-3e83602b44d3{fill:#fff;}.faf543c5-bbe1-4a24-8db3-f880290d4513{fill:#231f20;}.afbd94ec-a5cd-4e05-9b0a-10f163aba310{stroke:#485077;}.afbd94ec-a5cd-4e05-9b0a-10f163aba310,.b6b09c25-a3c2-440e-b96d-92d6d36845f4{stroke-width:15.775px;}.b6b09c25-a3c2-440e-b96d-92d6d36845f4{stroke:#d9c1b1;stroke-miterlimit:10;}.fd7af66e-7a8e-4473-9423-ab4eb15881d0{fill:#f58c4b;}.b02ef474-10b2-47b1-bb4d-f4505fe4b56e{fill:#775e49;}.acb3d685-fb27-4957-837c-c53466a28ff0{fill:#9c7b61;}.f0802c31-436a-4be6-9598-18e770b85bd7{fill:#dc6172;}`)), __jsx("rect", {
    className: "a528a901-b227-4ab5-8bea-a0df74243e7a",
    x: "158.257",
    y: "-0.502",
    width: "232",
    height: "57",
    rx: "28.381",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }), __jsx("path", {
    className: "a21adcdf-e740-488b-86a8-002daf1d3e61",
    d: "M193.481,38.6l-.386-3.219h-3.863l-.387,3.219a1.2,1.2,0,0,1-1.32,1.16h-1.932a1.256,1.256,0,0,1-1.287-1.642l3.09-20.413c.129-.933.612-1.255,1.352-1.255h4.83c.741,0,1.223.322,1.352,1.255l3.091,20.413a1.257,1.257,0,0,1-1.288,1.642H194.8A1.2,1.2,0,0,1,193.481,38.6Zm-3.831-6.825h2.994l-.418-3.67-.9-8.6H191l-.9,8.6Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }), __jsx("path", {
    className: "a21adcdf-e740-488b-86a8-002daf1d3e61",
    d: "M210.869,30.073l2.93,7.791a1.319,1.319,0,0,1-1.224,1.9h-2.221a1.245,1.245,0,0,1-1.288-.87L206.2,30.845h-.965v7.6a1.2,1.2,0,0,1-1.321,1.32h-2.125a1.2,1.2,0,0,1-1.32-1.32V17.774a1.2,1.2,0,0,1,1.32-1.32h5.055c4.153,0,6.375,1.609,6.375,5.119v4.153A4.455,4.455,0,0,1,210.869,30.073Zm-4.025-2.834a1.447,1.447,0,0,0,1.61-1.513V21.573a1.448,1.448,0,0,0-1.61-1.513h-1.609v7.179Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }), __jsx("path", {
    className: "a21adcdf-e740-488b-86a8-002daf1d3e61",
    d: "M226.034,16.454a1.2,1.2,0,0,1,1.32,1.32v.966a1.2,1.2,0,0,1-1.32,1.32h-4.668v6.246h3.445a1.2,1.2,0,0,1,1.32,1.32v.966a1.2,1.2,0,0,1-1.32,1.32h-3.445v6.246h4.668a1.2,1.2,0,0,1,1.32,1.32v.966a1.2,1.2,0,0,1-1.32,1.32h-8.113a1.2,1.2,0,0,1-1.32-1.32V17.774a1.2,1.2,0,0,1,1.32-1.32Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }), __jsx("path", {
    className: "a21adcdf-e740-488b-86a8-002daf1d3e61",
    d: "M240.3,16.454a1.251,1.251,0,0,1,1.288.9l1.288,5.087.772,4.6h.322l.773-4.6,1.288-5.087a1.251,1.251,0,0,1,1.288-.9h1.931c1.192,0,1.514.965,1.224,1.867l-4.282,13.426v6.7a1.2,1.2,0,0,1-1.32,1.32h-2.125a1.2,1.2,0,0,1-1.32-1.32v-6.7l-4.282-13.426c-.29-.9.032-1.867,1.223-1.867Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }), __jsx("path", {
    className: "a21adcdf-e740-488b-86a8-002daf1d3e61",
    d: "M265.767,21.412V34.806c0,3.509-2.221,5.119-6.375,5.119s-6.374-1.61-6.374-5.119V21.412c0-3.51,2.221-5.119,6.374-5.119S265.767,17.9,265.767,21.412Zm-7.985,0V34.806a1.613,1.613,0,0,0,3.22,0V21.412a1.613,1.613,0,0,0-3.22,0Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }), __jsx("path", {
    className: "a21adcdf-e740-488b-86a8-002daf1d3e61",
    d: "M269.149,17.774a1.2,1.2,0,0,1,1.32-1.32h2.125a1.2,1.2,0,0,1,1.32,1.32V34.806a1.613,1.613,0,0,0,3.22,0V17.774a1.2,1.2,0,0,1,1.32-1.32h2.125a1.2,1.2,0,0,1,1.32,1.32V34.806c0,3.509-2.222,5.119-6.375,5.119s-6.375-1.61-6.375-5.119Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }), __jsx("path", {
    className: "a21adcdf-e740-488b-86a8-002daf1d3e61",
    d: "M299.512,25.05l3.767,3.187c2.318,1.965,2.64,3.574,2.64,6.569,0,3.509-2.222,5.119-6.375,5.119s-6.375-1.61-6.375-5.119V32.519a1.2,1.2,0,0,1,1.32-1.319h2.125a1.2,1.2,0,0,1,1.32,1.319v2.287a1.613,1.613,0,0,0,3.22,0,3.908,3.908,0,0,0-1.578-3.639l-3.767-3.187c-2.318-1.964-2.64-3.574-2.64-6.568,0-3.51,2.222-5.119,6.375-5.119s6.375,1.609,6.375,5.119V23.7a1.2,1.2,0,0,1-1.32,1.32h-2.125a1.2,1.2,0,0,1-1.32-1.32V21.412a1.613,1.613,0,0,0-3.22,0A3.906,3.906,0,0,0,299.512,25.05Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }), __jsx("path", {
    className: "a21adcdf-e740-488b-86a8-002daf1d3e61",
    d: "M308.979,17.774a1.2,1.2,0,0,1,1.32-1.32h2.125a1.2,1.2,0,0,1,1.32,1.32V34.806a1.613,1.613,0,0,0,3.22,0V17.774a1.2,1.2,0,0,1,1.32-1.32h2.125a1.2,1.2,0,0,1,1.32,1.32V34.806c0,3.509-2.222,5.119-6.375,5.119s-6.375-1.61-6.375-5.119Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }), __jsx("path", {
    className: "a21adcdf-e740-488b-86a8-002daf1d3e61",
    d: "M335.51,30.073l2.93,7.791a1.319,1.319,0,0,1-1.224,1.9H335a1.246,1.246,0,0,1-1.288-.87l-2.865-8.049h-.966v7.6a1.2,1.2,0,0,1-1.32,1.32h-2.125a1.2,1.2,0,0,1-1.32-1.32V17.774a1.2,1.2,0,0,1,1.32-1.32h5.055c4.153,0,6.375,1.609,6.375,5.119v4.153A4.454,4.454,0,0,1,335.51,30.073Zm-4.024-2.834a1.447,1.447,0,0,0,1.609-1.513V21.573a1.447,1.447,0,0,0-1.609-1.513h-1.61v7.179Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }), __jsx("path", {
    className: "a21adcdf-e740-488b-86a8-002daf1d3e61",
    d: "M350.676,16.454a1.2,1.2,0,0,1,1.32,1.32v.966a1.2,1.2,0,0,1-1.32,1.32h-4.669v6.246h3.446a1.2,1.2,0,0,1,1.32,1.32v.966a1.2,1.2,0,0,1-1.32,1.32h-3.446v6.246h4.669a1.2,1.2,0,0,1,1.32,1.32v.966a1.2,1.2,0,0,1-1.32,1.32h-8.113a1.2,1.2,0,0,1-1.32-1.32V17.774a1.2,1.2,0,0,1,1.32-1.32Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }), __jsx("path", {
    className: "a21adcdf-e740-488b-86a8-002daf1d3e61",
    d: "M366.324,21.9c0,4.443-4.185,5.441-4.185,8.467v.966a1.2,1.2,0,0,1-1.32,1.32H359.6a1.2,1.2,0,0,1-1.32-1.32v-.611c0-4.83,3.542-5.377,3.542-8.371v-.934c0-.966-.419-1.706-1.61-1.706s-1.61.74-1.61,1.706v1.642a1.2,1.2,0,0,1-1.32,1.32H355.41a1.2,1.2,0,0,1-1.32-1.32V21.412c0-3.51,1.964-5.119,6.117-5.119s6.117,1.609,6.117,5.119Zm-6.149,13.136a2.447,2.447,0,1,1-2.447,2.447A2.333,2.333,0,0,1,360.175,35.031Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }), __jsx("path", {
    className: "a528a901-b227-4ab5-8bea-a0df74243e7a",
    d: "M350.059,46.023s-4.8,7.608,5.445,33.935c-28.768-12.022-29.581-27.586-29.581-27.587",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }), __jsx("path", {
    className: "f181510a-0a3c-4c43-923e-4d229c622946",
    d: "M317.317,157.5h34.929a41.011,41.011,0,0,1,41.011,41.011v28.978A41.011,41.011,0,0,1,352.246,268.5H330.268a41.011,41.011,0,0,1-41.011-41.011V185.558A28.06,28.06,0,0,1,317.317,157.5Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }), __jsx("path", {
    className: "eea140fd-3943-4fa9-8faa-0b2114b96b58",
    d: "M289.3,224.819l9.048-58.827s52.254,17.418,60.142-4.6c5.915,7.23,24.1,10.091,24.1,10.091l10.587,53.337,5.076-9.531V189s25.963-45.024,6.9-55.541L386.1,129.512s5.586-21.361-30.564-21.69c-3.287-8.216-14.292-8.216-14.292-8.216l-45.192,31.55s-15.117,15.446-12.817,33.192,1.643,53.24,1.643,53.24S284.2,221.861,289.3,224.819Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }), __jsx("path", {
    className: "e26ee595-981a-4c04-a557-4d55e0f96451",
    d: "M303.648,200.979s11.5,3.287,13.8-7.558",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }), __jsx("path", {
    className: "e26ee595-981a-4c04-a557-4d55e0f96451",
    d: "M377.488,198.8s-11.5,3.287-13.8-7.559",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }), __jsx("ellipse", {
    className: "feaf59db-517e-48e1-81e4-3e83602b44d3",
    cx: "308.757",
    cy: "218.498",
    rx: "12.5",
    ry: "14",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }), __jsx("ellipse", {
    className: "feaf59db-517e-48e1-81e4-3e83602b44d3",
    cx: "369.757",
    cy: "218.498",
    rx: "12.5",
    ry: "14",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }), __jsx("circle", {
    className: "faf543c5-bbe1-4a24-8db3-f880290d4513",
    cx: "308.257",
    cy: "223.498",
    r: "9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }), __jsx("circle", {
    className: "faf543c5-bbe1-4a24-8db3-f880290d4513",
    cx: "368.257",
    cy: "223.498",
    r: "9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }), __jsx("line", {
    className: "afbd94ec-a5cd-4e05-9b0a-10f163aba310",
    x1: "322.257",
    y1: "454.498",
    x2: "322.257",
    y2: "630.498",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }), __jsx("line", {
    className: "afbd94ec-a5cd-4e05-9b0a-10f163aba310",
    x1: "361.257",
    y1: "454.498",
    x2: "361.257",
    y2: "630.498",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }), __jsx("path", {
    className: "b6b09c25-a3c2-440e-b96d-92d6d36845f4",
    d: "M281.357,336.073s-6.263,53.785-29.268,90.593",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  }), __jsx("path", {
    className: "b6b09c25-a3c2-440e-b96d-92d6d36845f4",
    d: "M396.655,336.073s34.836,55.847,11.831,92.655",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }), __jsx("path", {
    className: "fd7af66e-7a8e-4473-9423-ab4eb15881d0",
    d: "M389.058,290.469a9.744,9.744,0,0,0-7.85-3.971H301.231a9.745,9.745,0,0,0-7.85,3.971l-28.912,39.3a3.053,3.053,0,0,0,.928,4.45l27.457,15.926a3.053,3.053,0,0,0,4.059-.928l3.3-4.875,9.64,102.645a7.458,7.458,0,0,0,6.712,6.725l8.271.8a171.233,171.233,0,0,0,32.76,0l8.271-.8a7.457,7.457,0,0,0,6.711-6.725l9.64-102.645,3.3,4.875a3.054,3.054,0,0,0,4.059.928l27.458-15.926a3.053,3.053,0,0,0,.927-4.45Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }), __jsx("path", {
    className: "faf543c5-bbe1-4a24-8db3-f880290d4513",
    d: "M332.144,250.5c.109.289,5.079,0,5.629,0h6.08q4,0,8,0a.867.867,0,0,0,.42-1.629q-1.31-.71-2.608-1.43-3.015-1.655-6.083-3.21a14.151,14.151,0,0,0-5.362-1.531c-6.09-.434-7.844,2.868-6.374,7C331.943,249.967,332.044,250.231,332.144,250.5Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }), __jsx("path", {
    className: "b6b09c25-a3c2-440e-b96d-92d6d36845f4",
    d: "M177.121,354.036s18.4,94.649,34.179,117.654",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }), __jsx("line", {
    className: "b6b09c25-a3c2-440e-b96d-92d6d36845f4",
    x1: "150.172",
    y1: "511.127",
    x2: "156.745",
    y2: "632.724",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }), __jsx("polygon", {
    className: "b02ef474-10b2-47b1-bb4d-f4505fe4b56e",
    points: "133.575 364.922 152.08 358.677 194.192 359.694 202.139 326.834 143.127 298.027 129.027 264.498 105.939 264.498 107.952 314.71 113.005 343.989 133.575 364.922",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  }), __jsx("path", {
    className: "acb3d685-fb27-4957-837c-c53466a28ff0",
    d: "M230.257,246.873c-2.208.757-5.9-8.7-8.1-4.277-8.3,16.743-14.99,65.43-23.016,69.235-1.287,30.832-4.947,47.99-4.947,47.99,37.5-3.018,36.059-45.27,36.059-45.27Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }), __jsx("path", {
    className: "f181510a-0a3c-4c43-923e-4d229c622946",
    d: "M175.2,333.135h0a46.858,46.858,0,0,1-46.655-41.829l-3.523-33.121c-.267-49.934,18.787-51.687,46.655-51.687h26.642a29.227,29.227,0,0,1,29.125,32.266l-5.589,52.542A46.857,46.857,0,0,1,175.2,333.135Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  }), __jsx("line", {
    className: "b6b09c25-a3c2-440e-b96d-92d6d36845f4",
    x1: "181.106",
    y1: "511.168",
    x2: "178.394",
    y2: "632.682",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }), __jsx("path", {
    className: "f0802c31-436a-4be6-9598-18e770b85bd7",
    d: "M190.982,511.5H136.438a8.217,8.217,0,0,1-8.12-9.481l23.746-152.565a8.218,8.218,0,0,1,8.119-6.954H174.36a8.219,8.219,0,0,1,8.169,7.328l16.622,152.565A8.218,8.218,0,0,1,190.982,511.5Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }), __jsx("circle", {
    className: "feaf59db-517e-48e1-81e4-3e83602b44d3",
    cx: "160.257",
    cy: "271.998",
    r: "12.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }), __jsx("circle", {
    className: "eea140fd-3943-4fa9-8faa-0b2114b96b58",
    cx: "160.257",
    cy: "276.498",
    r: "8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }), __jsx("circle", {
    className: "feaf59db-517e-48e1-81e4-3e83602b44d3",
    cx: "205.757",
    cy: "271.998",
    r: "12.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  }), __jsx("circle", {
    className: "eea140fd-3943-4fa9-8faa-0b2114b96b58",
    cx: "205.257",
    cy: "276.498",
    r: "8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }), __jsx("path", {
    className: "e26ee595-981a-4c04-a557-4d55e0f96451 mouth",
    d: "M192.714,304.258s-8.647-8.892-15.6,2.344",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }), __jsx("path", {
    className: "e26ee595-981a-4c04-a557-4d55e0f96451",
    d: "M141.847,254.786s4.257-10.078,13.192-6.792",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }), __jsx("path", {
    className: "e26ee595-981a-4c04-a557-4d55e0f96451",
    d: "M206.7,246.9s6.792-2.412,12.707,6.791",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }), __jsx("path", {
    className: "b6b09c25-a3c2-440e-b96d-92d6d36845f4",
    d: "M151.621,352.035l-24.865,61.389a28.527,28.527,0,0,0,2.643,25.568,18.839,18.839,0,0,0,7.3,7c5.869,2.891,21.841,2.582,28.7,2.86",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }), __jsx("path", {
    className: "acb3d685-fb27-4957-837c-c53466a28ff0",
    d: "M133.575,365.049s-11.591-54.324-.773-143.356l94.712,26.162,2.885,18.108,8.654-26.974s12.16-44.157-21.8-56.044c-56.333-19.718-90.851,16.762-90.851,16.762s-31.624,3.018-31.624,23.39,2.741,96.682,2.741,96.682S96.073,362.031,133.575,365.049Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  }), __jsx("rect", {
    className: "a528a901-b227-4ab5-8bea-a0df74243e7a",
    x: "8.257",
    y: "76.498",
    width: "232",
    height: "57",
    rx: "28.381",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: undefined
  }), __jsx("path", {
    className: "a21adcdf-e740-488b-86a8-002daf1d3e61",
    d: "M43.423,115.434a1.2,1.2,0,0,1-1.32,1.32H39.978a1.2,1.2,0,0,1-1.32-1.32V94.764a1.2,1.2,0,0,1,1.32-1.32H42.1a1.2,1.2,0,0,1,1.32,1.32Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: undefined
  }), __jsx("path", {
    className: "a21adcdf-e740-488b-86a8-002daf1d3e61",
    d: "M50.056,99.175a1.256,1.256,0,0,1-1.288,1.094h-.483A1.235,1.235,0,0,1,47,98.789l.451-7.212a1.2,1.2,0,0,1,1.32-1.192h2.35a1.267,1.267,0,0,1,1.256,1.771Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: undefined
  }), __jsx("path", {
    className: "a21adcdf-e740-488b-86a8-002daf1d3e61",
    d: "M62.935,112.5a1.176,1.176,0,0,1-1.288-.966l-1.8-10.689h-.322l.322,4.507v10.078a1.2,1.2,0,0,1-1.32,1.32H57.043a1.2,1.2,0,0,1-1.32-1.32V94.764a1.2,1.2,0,0,1,1.32-1.32h3.574c.837,0,1.224.418,1.352,1.256l1.192,5.731.74,5.537h.322l.741-5.537L66.155,94.7c.129-.838.515-1.256,1.352-1.256h3.574a1.2,1.2,0,0,1,1.32,1.32v20.67a1.2,1.2,0,0,1-1.32,1.32H69.6a1.2,1.2,0,0,1-1.32-1.32V105.356l.322-4.507H68.28l-1.8,10.689a1.175,1.175,0,0,1-1.288.966Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: undefined
  }), __jsx("path", {
    className: "a21adcdf-e740-488b-86a8-002daf1d3e61",
    d: "M88.759,108.705v6.729a1.2,1.2,0,0,1-1.32,1.32H85.314a1.2,1.2,0,0,1-1.32-1.32V94.764a1.2,1.2,0,0,1,1.32-1.32h4.733c4.153,0,6.375,1.61,6.375,5.119v5.023c0,3.509-2.222,5.119-6.375,5.119Zm1.288-3.606a1.447,1.447,0,0,0,1.609-1.513V98.563a1.447,1.447,0,0,0-1.609-1.513H88.759V105.1Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: undefined
  }), __jsx("path", {
    className: "a21adcdf-e740-488b-86a8-002daf1d3e61",
    d: "M109.559,107.063l2.93,7.791a1.319,1.319,0,0,1-1.224,1.9h-2.221a1.246,1.246,0,0,1-1.288-.869l-2.865-8.05h-.967v7.6a1.2,1.2,0,0,1-1.319,1.32H100.48a1.2,1.2,0,0,1-1.32-1.32V94.764a1.2,1.2,0,0,1,1.32-1.32h5.054c4.154,0,6.375,1.61,6.375,5.119v4.153A4.455,4.455,0,0,1,109.559,107.063Zm-4.025-2.834a1.447,1.447,0,0,0,1.61-1.513V98.563a1.448,1.448,0,0,0-1.61-1.513h-1.61v7.179Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: undefined
  }), __jsx("path", {
    className: "a21adcdf-e740-488b-86a8-002daf1d3e61",
    d: "M124.725,93.444a1.2,1.2,0,0,1,1.32,1.32v.966a1.2,1.2,0,0,1-1.32,1.32h-4.669V103.3H123.5a1.2,1.2,0,0,1,1.32,1.32v.966a1.2,1.2,0,0,1-1.32,1.32h-3.445v6.246h4.669a1.2,1.2,0,0,1,1.32,1.32v.966a1.2,1.2,0,0,1-1.32,1.32h-8.114a1.2,1.2,0,0,1-1.32-1.32V94.764a1.2,1.2,0,0,1,1.32-1.32Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: undefined
  }), __jsx("path", {
    className: "a21adcdf-e740-488b-86a8-002daf1d3e61",
    d: "M139.89,104.358a1.2,1.2,0,0,1,1.32,1.321V111.8c0,3.509-2.222,5.119-6.375,5.119s-6.375-1.61-6.375-5.119V98.4c0-3.509,2.222-5.119,6.375-5.119s6.375,1.61,6.375,5.119v1.964a1.2,1.2,0,0,1-1.32,1.32h-2.125a1.2,1.2,0,0,1-1.32-1.32V98.4a1.613,1.613,0,0,0-3.22,0V111.8a1.613,1.613,0,0,0,3.22,0v-3.832h-.29a1.2,1.2,0,0,1-1.32-1.32v-.965a1.2,1.2,0,0,1,1.32-1.321Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: undefined
  }), __jsx("path", {
    className: "a21adcdf-e740-488b-86a8-002daf1d3e61",
    d: "M153.221,94.764a1.2,1.2,0,0,1,1.32-1.32h1.8a1.2,1.2,0,0,1,1.32,1.32v20.67a1.2,1.2,0,0,1-1.32,1.32h-2.157a1.256,1.256,0,0,1-1.32-.966l-2.415-6.955-1.578-5.6-.322.065.483,5.763v6.375a1.2,1.2,0,0,1-1.32,1.32h-1.8a1.2,1.2,0,0,1-1.32-1.32V94.764a1.2,1.2,0,0,1,1.32-1.32h2.158a1.255,1.255,0,0,1,1.319.966l2.415,6.954,1.578,5.6.322-.064-.483-5.763Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: undefined
  }), __jsx("path", {
    className: "a21adcdf-e740-488b-86a8-002daf1d3e61",
    d: "M169.288,115.6l-.386-3.22h-3.864l-.386,3.22a1.2,1.2,0,0,1-1.32,1.159H161.4a1.257,1.257,0,0,1-1.288-1.642L163.2,94.7c.129-.934.612-1.256,1.352-1.256h4.83c.74,0,1.223.322,1.352,1.256l3.091,20.412a1.257,1.257,0,0,1-1.288,1.642h-1.932A1.2,1.2,0,0,1,169.288,115.6Zm-3.831-6.826h2.994l-.419-3.67-.9-8.6h-.322l-.9,8.6Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: undefined
  }), __jsx("path", {
    className: "a21adcdf-e740-488b-86a8-002daf1d3e61",
    d: "M184.9,94.764a1.2,1.2,0,0,1,1.32-1.32h1.8a1.2,1.2,0,0,1,1.32,1.32v20.67a1.2,1.2,0,0,1-1.32,1.32H185.87a1.256,1.256,0,0,1-1.32-.966l-2.415-6.955-1.577-5.6-.322.065.483,5.763v6.375a1.2,1.2,0,0,1-1.32,1.32h-1.8a1.2,1.2,0,0,1-1.32-1.32V94.764a1.2,1.2,0,0,1,1.32-1.32h2.157a1.255,1.255,0,0,1,1.32.966l2.415,6.954,1.577,5.6.322-.064-.483-5.763Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: undefined
  }), __jsx("path", {
    className: "a21adcdf-e740-488b-86a8-002daf1d3e61",
    d: "M200.585,97.05v18.384a1.2,1.2,0,0,1-1.32,1.32H197.14a1.2,1.2,0,0,1-1.32-1.32V97.05h-3.058a1.2,1.2,0,0,1-1.32-1.32v-.966a1.2,1.2,0,0,1,1.32-1.32h10.882a1.2,1.2,0,0,1,1.32,1.32v.966a1.2,1.2,0,0,1-1.32,1.32Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: undefined
  }), __jsx("path", {
    className: "a21adcdf-e740-488b-86a8-002daf1d3e61",
    d: "M209.8,111.377a2.769,2.769,0,1,1,0,5.538,2.769,2.769,0,0,1,0-5.538Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  }), __jsx("path", {
    className: "a528a901-b227-4ab5-8bea-a0df74243e7a",
    d: "M181.374,123.014s4.8,7.608-5.445,33.934c28.768-12.021,29.581-27.586,29.581-27.586",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  })),
  GladneyLogo: () => __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    "aria-label": "The Gladney Center for Adoption",
    viewBox: "0 0 388 370",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: undefined
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }, `
                    .ee39c918-6b57-4dd7-a222-e2ec1914522c{fill:#6aada4;}
                `)), __jsx("g", {
    id: "be01f28d-2643-453b-a15e-deb9ac72dcc8",
    "data-name": "Layer 2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: undefined
  }, __jsx("g", {
    id: "a6de72a4-f864-43f2-bce2-d6fd8e1e9e32",
    "data-name": "Layer 1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: undefined
  }, __jsx("path", {
    className: "ee39c918-6b57-4dd7-a222-e2ec1914522c",
    d: "M299.9,232.8v-1.1a52.1,52.1,0,0,0-.3-5.5v-1.1c-.2-2.1-.5-4-.8-5.7s-.8-3.6-1.4-5.6l-.3-1.1a46,46,0,0,0-1.9-5.2l-.3-.8c-.7-1.7-1.3-3.1-2-4.5l-.3-.6-.2-.5-1.4-2.5-1.7-2.6-.6-1c-1.1-1.6-2.2-3.1-3.4-4.6l-.7-.9c-1.6-1.8-2.9-3.3-4.2-4.6l-48.2-47.8a11.4,11.4,0,0,0-15.8,0l-8.3,8.4,56.1,55.7c1.1,1.2,2.3,2.5,3.6,4.1l.6.9.3.4a28.4,28.4,0,0,1,2.2,3.4l.2.2.5,1a35.5,35.5,0,0,1,2.1,4.4l.4,1c.5,1.3.9,2.7,1.2,3.6l.2.6.3,1.6a20.5,20.5,0,0,1,.5,2.4v.7c0,.1.1.2.1.4v1a44.9,44.9,0,0,1-1.9,19v.4a52.6,52.6,0,0,1-3.9,8.4l-.7,1a41.6,41.6,0,0,1-5.9,7.5,43,43,0,0,1-8.2,6.4l-1,.5-.4.2a43.6,43.6,0,0,1-8.3,3.7,11.3,11.3,0,0,0-7.9,10.7,46.7,46.7,0,0,0,2.1,13.8,61.7,61.7,0,0,0,6.2-1.1l.8-.2,1.5-.3a6.5,6.5,0,0,0,1.6-.3,65.9,65.9,0,0,0,8.2-2.9l1.4-.5,1.3-.5a66.4,66.4,0,0,0,19-13.3,59.3,59.3,0,0,0,6.3-7.3l.8-1.2.7-1.1a48.8,48.8,0,0,0,3.5-5.6c.5-.9.9-1.8,1.3-2.7l.3-.5c.9-1.9,1.6-3.7,2.3-5.4a33.8,33.8,0,0,0,1.1-3.4l.5-1.2c.1-.4.3-.8.4-1.2l.9-3.6c0-.3.1-.6.1-.9l.5-2.8c.1-.3.1-.5.2-.8s.3-2,.4-3.1.1-2.1.1-3.2v-1.8A2.2,2.2,0,0,1,299.9,232.8ZM328.7,54.2A194.4,194.4,0,0,0,.3,183,194.8,194.8,0,0,0,107.1,367.8a15.5,15.5,0,0,0,8.9,1.5,85.4,85.4,0,0,0,70.5-66.4l.3-.9a2.3,2.3,0,0,0,.1-.7,11.3,11.3,0,0,0,.3-1.8l.2-1.6a5.2,5.2,0,0,0,.2-1.1l.2-1.1a16.2,16.2,0,0,0,.2-1.8v-.4c0-.5.1-.9.1-1.4a6.6,6.6,0,0,0,.1-1.4V289c0-.9.1-1.8.1-2.6v-3.5a83.6,83.6,0,0,0-2-16.5,70.5,70.5,0,0,0-2.5-9.2l-.3-.9c-.3-1-.7-2-1.1-3a24.4,24.4,0,0,0-1-2.4l-.5-1.2a87.3,87.3,0,0,0-15.4-23.3l-3.6-3.5a3.6,3.6,0,0,1-1-1.1l-37-36.9-2.8-3.1-.8-1-1.6-2.3-.5-.7-.4-.6c-.4-.7-.9-1.4-1.3-2.2l-.7-1.4-1.1-2.3-.5-1.3a13.4,13.4,0,0,1-.9-2.6l-.2-.4a1.9,1.9,0,0,1-.2-.8,24.9,24.9,0,0,1-1-3.9c0-.2-.1-.5-.1-.8V161a52.1,52.1,0,0,1-.6-6.7,41.1,41.1,0,0,1,1-9.4,44.9,44.9,0,0,1,7.8-17.3,43.7,43.7,0,0,1,35-17.5,30,30,0,0,1,5.1.4L175,95.6l4.3-3.9a66.5,66.5,0,0,0-37.6-3.3,57.4,57.4,0,0,0-15.3,5.1c-25.7,12.6-40.5,38.9-37.7,67A21.3,21.3,0,0,0,89,163l.2,1.2.6,3.6v.6c.3,1.3.7,2.8,1.1,4.3l.3,1c.5,1.5,1,3.1,1.6,4.6l.7,1.6c.5,1.3,1.2,2.7,1.9,4.1l.6,1.3h.1l.6,1.2.6.9a26.1,26.1,0,0,0,1.7,2.8l.8,1.2c1,1.4,1.9,2.7,2.8,3.8l1.1,1.4c1.5,1.7,2.8,3.2,4.1,4.5L147,240.3a2.7,2.7,0,0,1,.8.7l1.1,1.1.8,1a59.8,59.8,0,0,1,10.6,16.4c.5,1.1.9,2.2,1.3,3.3l.2.3c.4,1.2.9,2.5,1.2,3.7l.3,1.1.2.6a15.5,15.5,0,0,1,.5,2.3,61.4,61.4,0,0,1-1.5,33.2q-.7,2.4-1.5,4.2c-.6,1.5-1.3,2.9-1.9,4.2A65.8,65.8,0,0,1,147.3,329a62.9,62.9,0,0,1-32.2,17.1h-.3a4.5,4.5,0,0,1-3-.4A172.8,172.8,0,0,1,21.7,194.2c0-95.1,77.4-172.5,172.5-172.5S366.7,99.1,366.7,194.2a172.8,172.8,0,0,1-89.3,151.1l-.7.4a3.1,3.1,0,0,1-1.2.4,5.3,5.3,0,0,1-1.5.1A62.9,62.9,0,0,1,241.6,329a61.1,61.1,0,0,1-11.8-16.6,42.7,42.7,0,0,1-2-4.2c-.5-1.2-.9-2.5-1.5-4.2a63.9,63.9,0,0,1-3.1-19.3,64.9,64.9,0,0,1,1.6-13.8c.2-1,.5-2,.7-3v-.3c.1-.3.1-.6.2-.8s.9-2.6,1.4-3.9a29.5,29.5,0,0,1,1.7-4.1,59.3,59.3,0,0,1,12.7-18.4l.4-.6,17.6-17.6a20.6,20.6,0,0,0-1.6-3.7l-.2-.3a29.4,29.4,0,0,0-1.7-2.6l-.6-.8a18.6,18.6,0,0,0-2.2-2.5l-8.1-8.2-19.9,20a81,81,0,0,0-8,9.4,85.2,85.2,0,0,0-9.7,16.4l-1.5,3.7c-.5,1.2-1,2.5-1.4,3.8-1,3-1.8,6-2.5,8.9a91.8,91.8,0,0,0-1.9,16.6v3.6a8.6,8.6,0,0,0,.1,1.5v2.5c0,.8.1,1.3.1,1.8v1.5l.3,1.8.3,2.1c.1.5.1.9.2,1.4a13.3,13.3,0,0,0,.4,2.4c0,.2.1.4.1.6v.2a6.4,6.4,0,0,0,.2.7,83.6,83.6,0,0,0,22.6,42.2,84.6,84.6,0,0,0,48.3,24.2,12.7,12.7,0,0,0,7.4-1.2c66.5-33.2,107.9-99.9,107.9-174A192.6,192.6,0,0,0,328.7,54.2ZM233.4,87.1a66.1,66.1,0,0,0-30.1,7.2l-3.5,1.9-.7.4-2.7,1.6a68.4,68.4,0,0,0-10.3,8.5l-1.5,1.5h-.2l-46.2,46.1a11.3,11.3,0,0,0,0,15.8l8.4,8.4,55.8-55.7a44.6,44.6,0,0,1,14.4-9.5,40.4,40.4,0,0,1,4.5-1.6l4.9-1.1a45.6,45.6,0,0,1,7.2-.6A43.2,43.2,0,0,1,264.3,123a43.7,43.7,0,0,1,12.5,36l14.9,14.9,3.9,4.2a67.6,67.6,0,0,0-15-71.4A66.4,66.4,0,0,0,233.4,87.1ZM96.7,212.2a55,55,0,0,1-3.8-4.2,67.4,67.4,0,0,0,15,71.4,66.4,66.4,0,0,0,40,19.1,46.7,46.7,0,0,0,2.1-13.8,11.3,11.3,0,0,0-7.9-10.7,43.7,43.7,0,0,1-18-10.8,44.6,44.6,0,0,1-12.5-36.1Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: undefined
  })))),
  GladneyLogoFull: () => __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 575 135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: undefined
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: undefined
  }, `.bc18bbc4-f662-4aa4-ac3f-82183fe29ea7{fill:white;}`)), __jsx("g", {
    id: "ee7693d9-cfe3-4ea5-a479-ab0746bb5656",
    "data-name": "Layer 2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: undefined
  }, __jsx("g", {
    id: "a40d8cc7-505c-4ea2-ad8d-65dc7aefb763",
    "data-name": "Layer 1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: undefined
  }, __jsx("path", {
    className: "bc18bbc4-f662-4aa4-ac3f-82183fe29ea7",
    d: "M85,65.98l0-.305c0-.512-.029-1.04-.075-1.563l-.034-.31c-.062-.6-.138-1.134-.23-1.619-.1-.507-.226-1.018-.391-1.6l-.087-.3c-.149-.494-.323-.994-.519-1.485l-.086-.2c-.2-.483-.387-.9-.589-1.3l-.077-.161c-.029-.063-.046-.1-.063-.131-.133-.249-.268-.481-.4-.709-.148-.256-.3-.5-.463-.752l-.126-.2a13.783,13.783,0,0,0-1.014-1.386l-.209-.252c-.432-.517-.8-.927-1.167-1.293L65.809,38.862a3.154,3.154,0,0,0-4.541.056l-2.31,2.309,15.9,15.79a12.029,12.029,0,0,1,1.018,1.167c.062.08.124.162.182.246l.079.107c.221.307.432.631.628.964l.05.081c.053.087.106.175.154.263a12.814,12.814,0,0,1,.6,1.266l.108.285c.138.364.249.745.321,1l.054.171c.046.17.079.31.111.452.052.228.09.458.128.694l.033.19c.005.024.013.07.021.118l.033.209a.257.257,0,0,1,0,.062,12.556,12.556,0,0,1-.538,5.393l-.037.114A12.354,12.354,0,0,1,76.7,72.173c-.061.1-.125.2-.189.3a12.182,12.182,0,0,1-1.659,2.1,12.319,12.319,0,0,1-2.344,1.836,2.007,2.007,0,0,1-.281.133.948.948,0,0,0-.118.051,11.846,11.846,0,0,1-2.343,1.049,3.175,3.175,0,0,0-2.237,3.008,13.262,13.262,0,0,0,.6,3.948c.59-.075,1.184-.2,1.759-.331l.214-.045c.143-.032.288-.054.434-.075a4.229,4.229,0,0,0,.449-.083,18.6,18.6,0,0,0,2.311-.836c.134-.054.268-.1.4-.143a3.964,3.964,0,0,0,.382-.14,18.183,18.183,0,0,0,7.156-5.834c.084-.113.159-.229.233-.344s.136-.211.2-.3a18.3,18.3,0,0,0,.991-1.6c.138-.251.259-.507.381-.765l.066-.134c.261-.552.474-1.05.651-1.525q.186-.494.341-.994c.035-.109.074-.216.113-.321s.082-.222.114-.336q.141-.513.254-1.034c.017-.083.031-.17.046-.258l.135-.778a1.326,1.326,0,0,1,.06-.222c.034-.262.071-.569.1-.881.027-.3.036-.606.046-.92l.007-.2a.37.37,0,0,1,.01-.058.209.209,0,0,1,0-.056l.009-.2C85,66.122,85,66.055,85,65.98Zm8.139-50.63a55.026,55.026,0,1,0-62.776,88.878,4.266,4.266,0,0,0,2.524.423,24.162,24.162,0,0,0,19.978-18.8c.018-.089.041-.182.067-.273.028-.109.038-.147.045-.186.034-.171.057-.339.081-.509l.065-.463c.018-.113.033-.211.044-.311l.048-.317c.033-.21.057-.356.073-.5l.013-.121c.015-.132.027-.257.037-.383s.018-.266.021-.391l.024-.5c.016-.257.029-.5.035-.735q.009-.488,0-.975a24,24,0,0,0-1.278-7.292l-.083-.25c-.095-.285-.19-.567-.3-.85-.089-.228-.192-.456-.294-.688l-.15-.332a24.1,24.1,0,0,0-4.368-6.594l-1.014-1.006a1.008,1.008,0,0,1-.276-.306L35.179,52.409c-.263-.263-.523-.551-.8-.88l-.236-.3c-.158-.207-.315-.418-.46-.628-.052-.079-.1-.148-.142-.22l-.094-.147c-.134-.218-.253-.42-.367-.623-.079-.146-.147-.274-.212-.4-.109-.22-.207-.434-.3-.649l-.159-.376c-.1-.255-.178-.493-.257-.729l-.037-.123c-.024-.066-.054-.15-.077-.233-.117-.417-.2-.765-.267-1.1-.013-.059-.024-.137-.034-.217l-.022-.156a12.284,12.284,0,0,1-.165-1.9,11.3,11.3,0,0,1,.27-2.659A12.36,12.36,0,0,1,43.96,31.208a11.523,11.523,0,0,1,1.449.094l4.2-4.2c.376-.378.777-.747,1.217-1.121a19.07,19.07,0,0,0-10.664-.93,16.925,16.925,0,0,0-4.344,1.443,19.008,19.008,0,0,0-10.69,18.994c.023.238.06.473.1.709l.052.327c.053.359.108.7.18,1.042l.021.153c.079.37.189.8.316,1.236l.091.276c.133.429.285.864.453,1.294.059.158.12.3.182.452.161.384.341.773.534,1.157l.188.377.009.023c.059.112.126.225.192.338l.155.269c.156.267.311.531.479.789l.234.341c.271.393.536.753.788,1.071l.316.4c.415.493.8.911,1.157,1.275L41.66,68.106a1.1,1.1,0,0,1,.232.181c.1.108.208.223.311.337l.234.264a17.574,17.574,0,0,1,3,4.653c.137.309.259.62.376.938l.031.08c.131.355.258.7.36,1.052.031.1.059.212.082.324l.039.16c.057.207.115.43.166.659a17.582,17.582,0,0,1-.427,9.4c-.146.459-.281.838-.424,1.192-.174.425-.372.83-.548,1.188A17.7,17.7,0,0,1,32.63,98.086l-.1.017a1.15,1.15,0,0,1-.829-.112,48.9,48.9,0,1,1,46.915-.135l-.206.123a.826.826,0,0,1-.34.095.936.936,0,0,1-.421.029,17.713,17.713,0,0,1-12.534-9.558c-.146-.292-.361-.734-.55-1.193-.137-.338-.273-.716-.426-1.2a17.582,17.582,0,0,1-.432-9.392c.062-.276.133-.554.209-.83l.022-.095c.022-.093.039-.16.058-.223.108-.367.243-.734.383-1.108.148-.4.307-.79.484-1.178a17.653,17.653,0,0,1,3.6-5.216,1,1,0,0,1,.109-.143l5.009-5.012a7.815,7.815,0,0,0-.477-1.04l-.056-.094a8.512,8.512,0,0,0-.479-.736l-.152-.21a8.135,8.135,0,0,0-.636-.726l-2.3-2.3L63.855,63.5a25.591,25.591,0,0,0-5.013,7.317c-.154.345-.3.691-.437,1.043s-.268.724-.389,1.089a23.362,23.362,0,0,0-.7,2.515,24.638,24.638,0,0,0-.55,4.717l.007.147c0,.116,0,.226,0,.34s0,.221,0,.332l-.007.2c.005.1.012.253.021.408l.035.7c.009.247.015.382.026.517l.036.419c.018.17.046.347.075.521l.092.593c.019.131.036.26.053.388.038.29.063.487.1.68.011.057.027.119.043.176l.019.072c.022.083.037.141.05.2a23.915,23.915,0,0,0,20.107,18.806,3.525,3.525,0,0,0,2.082-.352A54.992,54.992,0,0,0,93.139,15.35ZM66.132,24.689a18.731,18.731,0,0,0-8.506,2.027c-.316.158-.639.336-.991.545l-.216.124c-.256.146-.508.292-.75.453a19.015,19.015,0,0,0-2.917,2.39l-.432.431a.224.224,0,0,1-.06.042L39.169,43.75a3.183,3.183,0,0,0,0,4.489L41.534,50.6,57.353,34.843a12.347,12.347,0,0,1,4.087-2.717,12.449,12.449,0,0,1,2.672-.741,12,12,0,0,1,2.02-.177,12.33,12.33,0,0,1,8.781,3.638,12.5,12.5,0,0,1,3.538,10.222l4.207,4.207c.344.342.711.739,1.114,1.207a19.144,19.144,0,0,0-4.247-20.245A18.809,18.809,0,0,0,66.132,24.689ZM27.413,60.126c-.345-.342-.7-.73-1.09-1.18a19.149,19.149,0,0,0,4.246,20.245A18.938,18.938,0,0,0,41.9,84.605a13.282,13.282,0,0,0,.6-3.935,3.2,3.2,0,0,0-2.238-3.022,12.37,12.37,0,0,1-5.085-3.069,12.509,12.509,0,0,1-3.539-10.22Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: undefined
  }), __jsx("path", {
    className: "bc18bbc4-f662-4aa4-ac3f-82183fe29ea7",
    d: "M144,52.26v-.612c0-14.048,10.316-26.486,25.682-26.486,8.633,0,13.975,2.487,19.1,6.8l-3.73,4.389A21.792,21.792,0,0,0,169.462,30.5c-11.34,0-19.462,9.585-19.462,21v.834c0,12.9,8.265,22.477,21.4,22.477A25.463,25.463,0,0,0,187,69.405V55.256H171v-5h22V71.763a32.592,32.592,0,0,1-21.616,8.249C154.462,80.012,144,67.678,144,52.26Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: undefined
  }), __jsx("path", {
    className: "bc18bbc4-f662-4aa4-ac3f-82183fe29ea7",
    d: "M214,25.256h6v48h30v6H214Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: undefined
  }), __jsx("path", {
    className: "bc18bbc4-f662-4aa4-ac3f-82183fe29ea7",
    d: "M288.092,25.256h5.668l24.434,54h-6.763l-6.206-14H276.393l-6.28,14h-6.456Zm15.014,34-12.257-27.52-12.334,27.52Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: undefined
  }), __jsx("path", {
    className: "bc18bbc4-f662-4aa4-ac3f-82183fe29ea7",
    d: "M336,25.256h18.571C371.384,25.256,383,36.905,383,52.1v.155c0,15.2-11.616,27-28.429,27H336Zm18.643,49c13.645,0,22.357-9.313,22.357-21.345v-.154c0-12.032-8.712-21.5-22.357-21.5H342v43Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: undefined
  }), __jsx("path", {
    className: "bc18bbc4-f662-4aa4-ac3f-82183fe29ea7",
    d: "M403,25.256h5.636L443,68.534V25.256h6v54h-4.779L409,34.977V79.256h-6Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: undefined
  }), __jsx("path", {
    className: "bc18bbc4-f662-4aa4-ac3f-82183fe29ea7",
    d: "M472,25.256h39v6H479v18h29v6H478v19h33v5H472Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: undefined
  }), __jsx("path", {
    className: "bc18bbc4-f662-4aa4-ac3f-82183fe29ea7",
    d: "M547,57.887,525.175,25.256h7.2l17.7,27,17.851-27h6.9L553,57.81V79.256h-6Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: undefined
  }), __jsx("path", {
    className: "bc18bbc4-f662-4aa4-ac3f-82183fe29ea7",
    d: "M148.25,119.863c0-7.148,5.246-13.706,11.869-13.706a6.752,6.752,0,0,1,5.836,2.656l1.246-2.557h1.738l-1.967,8h-1.508c-.23-4.721-2.4-6.328-5.443-6.328-5.771,0-8.821,6.656-8.821,11.968,0,4.361,2.165,6.82,5.706,6.82,3.868,0,6.066-3.214,7.737-6.886l1.574.656c-1.738,4.36-4.655,8.065-9.672,8.065C150.873,128.551,148.25,124.65,148.25,119.863Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: undefined
  }), __jsx("path", {
    className: "bc18bbc4-f662-4aa4-ac3f-82183fe29ea7",
    d: "M172.055,122.863a4.964,4.964,0,0,0-.068.984c0,2.747,1.323,3.968,3.188,3.968s3.527-1.255,5.019-3.425l1.051.678c-1.628,2.476-3.629,4.341-6.782,4.341-3.053,0-5.189-2.171-5.189-5.7,0-5.19,4.748-10.14,9.224-10.14,2.442,0,3.764,1.356,3.764,3.12C182.262,119.676,179.041,122.118,172.055,122.863Zm.238-1.254c5.765-.78,7.528-2.747,7.528-4.85a1.709,1.709,0,0,0-1.831-1.831C175.277,114.928,173.072,118.455,172.293,121.609Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: undefined
  }), __jsx("path", {
    className: "bc18bbc4-f662-4aa4-ac3f-82183fe29ea7",
    d: "M198.328,127.56c.815,0,1.662-1.424,2.51-3.764l1.187.373c-1.458,4.24-2.95,5.392-4.443,5.392-1.39,0-2.475-1.017-2.475-2.984.034-3.154,2.408-6.613,2.408-9.359,0-.747-.306-1.392-1.188-1.392-1.932,0-5.154,3.6-7.833,13.43h-2.747l2.848-10.682c.713-2.611.374-3.121-.271-3.121-.949,0-1.865,1.7-2.916,3.833l-1.153-.509c1.39-3.154,2.781-4.985,4.645-4.985,1.357,0,2.138.983,2.138,2.781a14.111,14.111,0,0,1-.746,3.967l.236.1c2.171-4.511,4.511-6.919,6.817-6.919,1.695,0,2.815,1.356,2.815,3.391,0,2.883-2.544,7.224-2.544,9.6C197.616,127.12,197.752,127.56,198.328,127.56Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: undefined
  }), __jsx("path", {
    className: "bc18bbc4-f662-4aa4-ac3f-82183fe29ea7",
    d: "M210,115.256l-2.205,8.353a10.561,10.561,0,0,0-.441,2.409,1.163,1.163,0,0,0,1.255,1.323c1.391,0,2.476-1.764,3.493-3.968l1.187.373c-1.8,4.781-3.968,5.663-5.426,5.663a2.82,2.82,0,0,1-3.154-2.95,16.308,16.308,0,0,1,.611-3.324l2.068-7.879H204.3l.373-1h3.086l1.154-4.381,2.713-.339-1.255,4.72h4.646l-.407,1Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: undefined
  }), __jsx("path", {
    className: "bc18bbc4-f662-4aa4-ac3f-82183fe29ea7",
    d: "M218.728,122.863a4.964,4.964,0,0,0-.068.984c0,2.747,1.322,3.968,3.188,3.968s3.526-1.255,5.019-3.425l1.051.678c-1.628,2.476-3.629,4.341-6.782,4.341-3.053,0-5.189-2.171-5.189-5.7,0-5.19,4.748-10.14,9.224-10.14,2.442,0,3.764,1.356,3.764,3.12C228.935,119.676,225.713,122.118,218.728,122.863Zm.238-1.254c5.765-.78,7.528-2.747,7.528-4.85a1.709,1.709,0,0,0-1.832-1.831C221.949,114.928,219.745,118.455,218.966,121.609Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: undefined
  }), __jsx("path", {
    className: "bc18bbc4-f662-4aa4-ac3f-82183fe29ea7",
    d: "M235.267,118.574c.712-2.611.373-3.121-.271-3.121-.949,0-1.865,1.7-2.916,3.833l-1.154-.509c1.39-3.154,2.782-4.985,4.646-4.985,1.357,0,2.136.983,2.136,2.781a14.108,14.108,0,0,1-.745,3.967l.271.1c2.069-4.341,3.73-6.919,5.765-6.919a1.862,1.862,0,0,1,1.934,1.967,2.2,2.2,0,0,1-1.866,2.408c-.915,0-1.526-.712-1.424-1.934-1.391.645-4.274,4.851-6.477,13.091h-2.747Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: undefined
  }), __jsx("path", {
    className: "bc18bbc4-f662-4aa4-ac3f-82183fe29ea7",
    d: "M248.256,132.767a1.8,1.8,0,0,1,1.73-1.9,1.288,1.288,0,0,1,1.356,1.323,2.049,2.049,0,0,1-.44,1.289c1.152,0,1.694-.849,2.78-5.969l2.509-12.254h-3.323l.406-1H256.5c1.187-5.941,3.832-8.586,7.02-8.62,2.272-.034,3.391,1.221,3.391,2.51a2.2,2.2,0,0,1-1.9,2.408,1.355,1.355,0,0,1-1.424-1.493,2.53,2.53,0,0,1,.813-1.831,1.611,1.611,0,0,0-.983-.272c-2.34,0-3.256,2.239-4.069,6l-.272,1.3h4.307l-.407,1h-4.2l-2.306,11.3c-1.289,6.173-3.528,8.071-5.9,8.071C248.968,134.631,248.256,133.749,248.256,132.767Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: undefined
  }), __jsx("path", {
    className: "bc18bbc4-f662-4aa4-ac3f-82183fe29ea7",
    d: "M277.049,119.845c0,5.087-3.765,9.564-8.14,9.564-3.595,0-5.629-2.645-5.629-6.274,0-5.087,3.764-9.563,8.139-9.563C274.98,113.572,277.049,116.217,277.049,119.845Zm-5.63-4.917c-3.459,0-5.494,5.562-5.494,9.292,0,2.645,1.255,3.8,2.951,3.8,3.459,0,5.493-5.562,5.493-9.293C274.369,116.081,273.114,114.928,271.419,114.928Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: undefined
  }), __jsx("path", {
    className: "bc18bbc4-f662-4aa4-ac3f-82183fe29ea7",
    d: "M283.666,118.574c.712-2.611.373-3.121-.272-3.121-.949,0-1.864,1.7-2.916,3.833l-1.153-.509c1.39-3.154,2.781-4.985,4.646-4.985,1.357,0,2.137.983,2.137,2.781a14.111,14.111,0,0,1-.746,3.967l.271.1c2.069-4.341,3.731-6.919,5.765-6.919a1.861,1.861,0,0,1,1.933,1.967,2.2,2.2,0,0,1-1.865,2.408c-.916,0-1.527-.712-1.424-1.934-1.391.645-4.274,4.851-6.477,13.091h-2.748Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: undefined
  }), __jsx("path", {
    className: "bc18bbc4-f662-4aa4-ac3f-82183fe29ea7",
    d: "M315.2,127.256l-.657-6h-7.7l-3.573,6h2.778l-.44,2h-7.665l.441-2h2.168l12.981-21h2.535l2.429,21h2.643l-.407,2h-9.259l.442-2Zm-.513-8-1.02-10h-.106l-5.986,10Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: undefined
  }), __jsx("path", {
    className: "bc18bbc4-f662-4aa4-ac3f-82183fe29ea7",
    d: "M340.442,125.143c-1.556,4.63-3.148,5.889-4.851,5.889-1.408,0-2.556-.963-2.556-3a6.886,6.886,0,0,1,.074-.927L332.85,127c-1.519,2.593-3.444,4.037-5.481,4.037-2.592,0-4.407-2.186-4.407-5.592a13.025,13.025,0,0,1,3.593-9.073,7.9,7.9,0,0,1,5.333-2.63,3.4,3.4,0,0,1,3.518,2.925l2.555-9.406H334.48l.518-2h6.3L336.035,124.7a12.289,12.289,0,0,0-.556,3.037c0,.482.149,1.11.889,1.11,1,0,1.852-1.555,2.815-4.11Zm-6.025-6.926c0-1.8-.679-3.12-2.408-3.12-3.29,0-5.6,5.46-5.6,8.988,0,2.2.882,3.357,2.306,3.357C331.7,127.442,334.417,121.541,334.417,118.217Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: undefined
  }), __jsx("path", {
    className: "bc18bbc4-f662-4aa4-ac3f-82183fe29ea7",
    d: "M355.82,119.845c0,5.087-3.765,9.564-8.14,9.564-3.6,0-5.629-2.645-5.629-6.274,0-5.087,3.764-9.563,8.139-9.563C353.751,113.572,355.82,116.217,355.82,119.845Zm-5.63-4.917c-3.459,0-5.494,5.562-5.494,9.292,0,2.645,1.255,3.8,2.951,3.8,3.459,0,5.493-5.562,5.493-9.293C353.14,116.081,351.885,114.928,350.19,114.928Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: undefined
  }), __jsx("path", {
    className: "bc18bbc4-f662-4aa4-ac3f-82183fe29ea7",
    d: "M362.064,115.607c-.916,0-1.56,1.017-2.815,3.526l-1.153-.508c1.526-3.46,2.916-4.985,4.68-4.985,1.424,0,2.136,1.051,2.136,2.645a6.359,6.359,0,0,1-.067.916l.236.1c1.425-2.374,3.189-3.73,5.02-3.73,2.442,0,4.1,2.035,4.1,5.188,0,5.494-3.933,10.378-7.834,10.378a3.609,3.609,0,0,1-3.594-2.374l-1.526,5.492h3.391l-.508,2h-8.411l.475-2h2.51l3.7-13.7C362.945,116.556,362.81,115.607,362.064,115.607Zm1.39,8.851c0,1.661.814,3.153,2.68,3.153,3.221,0,5.357-5.527,5.357-8.918,0-2.137-.814-3.223-2.2-3.223C366.269,115.47,363.454,121.27,363.454,124.458Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: undefined
  }), __jsx("path", {
    className: "bc18bbc4-f662-4aa4-ac3f-82183fe29ea7",
    d: "M382.544,115.256l-2.2,8.353a10.561,10.561,0,0,0-.441,2.409,1.163,1.163,0,0,0,1.255,1.323c1.391,0,2.476-1.764,3.493-3.968l1.187.373c-1.8,4.781-3.968,5.663-5.426,5.663a2.82,2.82,0,0,1-3.154-2.95,16.308,16.308,0,0,1,.611-3.324l2.068-7.879h-3.086l.373-1h3.086l1.154-4.381,2.713-.339-1.255,4.72h4.646l-.407,1Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: undefined
  }), __jsx("path", {
    className: "bc18bbc4-f662-4aa4-ac3f-82183fe29ea7",
    d: "M392.871,126.526c0,.441.2.882.779.882.848,0,1.662-1.289,2.612-3.764l1.153.373c-1.425,4.171-2.951,5.392-4.544,5.392-1.493,0-2.578-1.017-2.544-2.917.034-3.187,2.951-7.528,2.951-10.241,0-.475-.137-.95-.645-.95-1.085,0-2.069,1.73-3.154,3.832l-1.153-.508c1.424-3.086,2.883-5.053,4.85-5.053,1.526,0,2.543,1.186,2.543,3.255C395.719,119.642,392.871,124.289,392.871,126.526Zm2.509-15.736a1.506,1.506,0,0,1-1.527-1.627,2.278,2.278,0,0,1,2.07-2.374,1.532,1.532,0,0,1,1.593,1.662A2.3,2.3,0,0,1,395.38,110.79Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: undefined
  }), __jsx("path", {
    className: "bc18bbc4-f662-4aa4-ac3f-82183fe29ea7",
    d: "M413.7,119.845c0,5.087-3.765,9.564-8.139,9.564-3.595,0-5.629-2.645-5.629-6.274,0-5.087,3.764-9.563,8.139-9.563C411.628,113.572,413.7,116.217,413.7,119.845Zm-5.629-4.917c-3.459,0-5.494,5.562-5.494,9.292,0,2.645,1.254,3.8,2.95,3.8,3.46,0,5.494-5.562,5.494-9.293C411.018,116.081,409.763,114.928,408.068,114.928Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: undefined
  }), __jsx("path", {
    className: "bc18bbc4-f662-4aa4-ac3f-82183fe29ea7",
    d: "M430.046,127.56c.815,0,1.662-1.424,2.51-3.764l1.187.373c-1.458,4.24-2.951,5.392-4.443,5.392-1.39,0-2.475-1.017-2.475-2.984.034-3.154,2.408-6.613,2.408-9.359,0-.747-.306-1.392-1.188-1.392-1.932,0-5.154,3.6-7.833,13.43h-2.747l2.848-10.682c.712-2.611.373-3.121-.271-3.121-.949,0-1.865,1.7-2.916,3.833l-1.154-.509c1.391-3.154,2.782-4.985,4.646-4.985,1.357,0,2.138.983,2.138,2.781a14.078,14.078,0,0,1-.747,3.967l.237.1c2.17-4.511,4.51-6.919,6.817-6.919,1.695,0,2.815,1.356,2.815,3.391,0,2.883-2.544,7.224-2.544,9.6C429.334,127.12,429.469,127.56,430.046,127.56Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: undefined
  })))),
  QuestionBlock: () => __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    viewBox: "0 0 116.9795 91.3506",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: undefined
  }, __jsx("path", {
    className: "rose-fill",
    d: "M116.98,50.1006V81.59a3.3348,3.3348,0,0,1-3.33,3.33h-5.31l-5.6406,6.4307L97.05,84.92h-34.9A3.34,3.34,0,0,1,58.82,81.59V50.1006a3.34,3.34,0,0,1,3.3291-3.33h51.5A3.3349,3.3349,0,0,1,116.98,50.1006Zm-11.18,14.71a4.3,4.3,0,1,0-4.3,4.3A4.3087,4.3087,0,0,0,105.8,64.8106Zm-13.6,0a4.3,4.3,0,1,0-4.3008,4.3A4.3032,4.3032,0,0,0,92.2,64.8106Zm-13.5908,0a4.3,4.3,0,1,0-4.3008,4.3A4.3089,4.3089,0,0,0,78.6094,64.8106Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: undefined
  }), __jsx("path", {
    className: "white-fill",
    d: "M101.5,60.5a4.3052,4.3052,0,1,1-4.3,4.3106A4.3087,4.3087,0,0,1,101.5,60.5Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: undefined
  }), __jsx("path", {
    className: "white-fill",
    d: "M87.8994,60.5a4.3052,4.3052,0,1,1-4.3,4.3106A4.3032,4.3032,0,0,1,87.8994,60.5Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: undefined
  }), __jsx("path", {
    className: "white-fill",
    d: "M74.3086,60.5A4.3052,4.3052,0,1,1,70.01,64.8106,4.3089,4.3089,0,0,1,74.3086,60.5Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: undefined
  }), __jsx("path", {
    className: "teal-fill",
    d: "M83.6,40.5606a40.95,40.95,0,0,1-.47,6.21H62.1494a3.34,3.34,0,0,0-3.3291,3.33V77.86a41.1132,41.1132,0,0,1-39.5117-4.07L0,81.13,7.64,61.34A40.14,40.14,0,0,1,1.87,40.5606a40.8659,40.8659,0,0,1,81.73,0ZM48.22,50.13C47.64,41.55,58.3086,39.11,58.3086,28.4405c0-8.4307-6.4883-15.42-17.0088-15.2-8.94.21-16.21,5.62-16,16.35h10.81c0-3.38,2.3808-4.83,4.9-4.8994,2.3789,0,5.05,1.3,4.9,3.97-.5,8.28-11.6016,10.16-10.4512,21.47Zm.65,11.28c0-4.03-2.96-6.63-6.9912-6.63-4.0391,0-7.209,2.6-7.209,6.63,0,3.96,3.17,6.49,7.209,6.49C45.91,67.9,48.87,65.37,48.87,61.41Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: undefined
  }), __jsx("path", {
    className: "navy-fill",
    d: "M41.8789,54.78c4.0313,0,6.9912,2.6,6.9912,6.63,0,3.96-2.96,6.49-6.9912,6.49-4.0391,0-7.209-2.53-7.209-6.49C34.67,57.38,37.84,54.78,41.8789,54.78Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: undefined
  }), __jsx("path", {
    className: "navy-fill",
    d: "M58.3086,28.4405C58.3086,39.11,47.64,41.55,48.22,50.13H35.459C34.3086,38.82,45.41,36.9405,45.91,28.66c.1494-2.67-2.5215-3.97-4.9-3.97-2.52.0693-4.9,1.52-4.9,4.8994H25.3c-.21-10.73,7.06-16.14,16-16.35C51.82,13.0205,58.3086,20.01,58.3086,28.4405Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: undefined
  })),
  VideoBlock: () => __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    viewBox: "0 0 108.3204 80.2998",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: undefined
  }, __jsx("circle", {
    className: "rose-fill",
    cx: "81",
    cy: "72.1602",
    r: "3.75",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: undefined
  }), __jsx("polygon", {
    className: "white-fill",
    points: "78.33 31.65 37.591 55.17 37.591 8.13 78.33 31.65",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: undefined
  }), __jsx("path", {
    className: "rose-fill",
    d: "M108.32,0V64.18H0V0ZM37.5909,55.17,78.33,31.65,37.5909,8.13Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: undefined
  }), __jsx("path", {
    className: "navy-fill",
    d: "M84.75,72.16A3.75,3.75,0,1,0,81,75.91,3.7447,3.7447,0,0,0,84.75,72.16ZM108.32,64.18V80.3H0V64.18Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: undefined
  }), __jsx("rect", {
    className: "white-fill",
    x: "8.1006",
    y: "68.75",
    width: "3",
    height: "6.8106",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: undefined
  }), __jsx("rect", {
    className: "white-fill",
    x: "13",
    y: "68.75",
    width: "3",
    height: "6.8106",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: undefined
  }), __jsx("rect", {
    className: "white-fill",
    x: "84.75",
    y: "70.6602",
    width: "14.5",
    height: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: undefined
  }), __jsx("rect", {
    className: "white-fill",
    x: "21.5",
    y: "70.6602",
    width: "55.7305",
    height: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: undefined
  }), __jsx("path", {
    className: "white-fill",
    d: "M81,77.41a5.25,5.25,0,1,1,5.25-5.25A5.2558,5.2558,0,0,1,81,77.41Zm0-7.5a2.25,2.25,0,1,0,2.25,2.25A2.2525,2.2525,0,0,0,81,69.91Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: undefined
  })),
  HandsIcon: () => __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    viewBox: "0 0 79.9141 113.2901",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: undefined
  }, __jsx("polygon", {
    className: "rose-fill",
    points: "52.374 72.09 53.564 72.09 78.394 72.09 79.914 72.09 79.914 113.29 52.374 113.29 52.374 72.09",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: undefined
  }), __jsx("polygon", {
    className: "navy-fill",
    points: "49.029 56.16 49.029 113.29 25.201 113.29 25.201 102.32 24.216 102.32 24.226 98.02 24.216 56.16 49.029 56.16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: undefined
  }), __jsx("polygon", {
    className: "teal-fill",
    points: "1.279 101.82 26.1 101.82 27.05 101.82 27.05 113.29 0 113.29 0 101.82 1.279 101.82",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: undefined
  }), __jsx("path", {
    className: "periwinkle-fill",
    d: "M48.5293,15.77a2.93,2.93,0,1,0-5.8594,0V27.62h-1l-.0107-.5V7.56a2.93,2.93,0,1,0-5.8594,0V27.62h-1l-.01-.5V2.93a2.9253,2.9253,0,1,0-5.8506,0V27.62h-1l-.01-.5V7.39a2.93,2.93,0,0,0-5.86,0V39.4024l-4.51-6.4756V23.58a2.93,2.93,0,0,0-5.86,0v13.5a2.9493,2.9493,0,0,0,.9805,2.1728L15.91,43.27,26.71,56.16H48.14s.39-18.4932.39-20.5615Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: undefined
  }), __jsx("path", {
    className: "maize-fill",
    d: "M37.08,82.26V68.44a2.9313,2.9313,0,1,0-5.86,0v9.5625l-4.51,6.6436V51.85a2.9744,2.9744,0,0,0-2.9307-3.01,2.7144,2.7144,0,0,0-1.2256.2871c-.0937.0381-.1445.0664-.1933.0908l-.1045.0674c-.0547.0361-.11.0722-.1651.1162-.0849.0664-.167.13-.248.2021-.0537.0537-.126.126-.1983.208A2.9915,2.9915,0,0,0,20.85,51.85V72.56h-1l-.01-.5V47.28A2.9747,2.9747,0,0,0,16.9092,44.27a.3552.3552,0,0,1-.084.01.6878.6878,0,0,1-.1357.0108h-.0987a2.9817,2.9817,0,0,0-2.6015,2.99V72.56h-1l-.01-.5V52.02a2.9308,2.9308,0,1,0-5.8594,0V72.56h-1l-.0107-.5V60.43a2.9743,2.9743,0,0,0-2.93-3.01A2.9743,2.9743,0,0,0,.25,60.43V91a3.033,3.033,0,0,0,1.3115,2.5078l.2178.1485v8.164H25.6006l.0088-3.9746L36.1,84.4942A3.0228,3.0228,0,0,0,37.08,82.26Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: undefined
  }), __jsx("path", {
    className: "teal-fill",
    d: "M79.4141,61.54V31.7a2.93,2.93,0,1,0-5.86,0V43.55h-1l-.01-.5V23.49a2.93,2.93,0,1,0-5.8594,0V43.55h-1l-.0108-.5V18.86a2.9248,2.9248,0,1,0-5.85,0V43.55h-1l-.01-.5V23.32a2.93,2.93,0,1,0-5.86,0V55.333l-4.51-6.4756V39.51a2.9092,2.9092,0,0,0-2.6894-2.9121l-.2393.0019-.05-.02a2.9348,2.9348,0,0,0-2.8818,2.93v13.5a2.92,2.92,0,0,0,.9775,2.1709L54.043,68.2129l.02,3.877h23.832V64.125l.2188-.1484A2.9552,2.9552,0,0,0,79.4141,61.54Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: undefined
  })),
  RightArrow: () => __jsx("svg", {
    id: "b609ef51-f1a4-48d6-8c3f-5b2d43347e3e",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 110 16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: undefined
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: undefined
  }, `.wht {fill:none;stroke:#fff;stroke-miterlimit:10;}`)), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: undefined
  }, __jsx("line", {
    className: "wht",
    x1: "110",
    y1: "8",
    x2: "0",
    y2: "8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: undefined
  }), __jsx("polyline", {
    className: "wht",
    points: "100 0 110 8 100 16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: undefined
  }))),
  Educated: () => __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    "aria-labelledby": "educateddesc",
    viewBox: "0 0 1145 1179",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: undefined
  }, __jsx("desc", {
    id: "educateddesc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: undefined
  }, "A graphic icon of an apple on top of two books, symbolizing education."), __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: undefined
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: undefined
  }, `.b2b1af0a-bec8-45c5-ae61-8e2e5b3f61c0{fill:#7e8fad;}.a7f6e9d3-7b5f-422b-a95d-ea63f1fc88fa{fill:#f2d176;}.aa2ef657-2221-40f5-829c-4d38b15669d8{fill:#f68e4b;}.b4164aef-ddd6-406f-8ff5-899d52639bd7{fill:#de6273;}.f51beadc-db8c-4ca1-8b52-915d6ba0a4d9{fill:#d1ecee;}.e78750cb-a03a-48fe-9f5f-40b9d6cec936{fill:#495077;}.bf8d20a5-22bb-4b79-b26f-6b40d37f2973{fill:#f68e4b;}`)), __jsx("g", {
    id: "be8ae87a-8660-4664-9e41-098101ed318d",
    "data-name": "Layer 2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: undefined
  }, __jsx("g", {
    id: "a91fbef6-36f6-4a7f-a052-979ff9e2ca16",
    "data-name": "Layer 1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: undefined
  }, __jsx("path", {
    className: "b2b1af0a-bec8-45c5-ae61-8e2e5b3f61c0",
    d: "M587.7,128.3c.2-23.6-3.7-67.2-32.4-95.9C516-6.9,447.6.4,445.3.7a15.1,15.1,0,0,0-13.2,13.2c-.3,2.9-7.5,70.9,31.7,110,28,28.1,70.7,32.4,93.9,32.4v49a15.4,15.4,0,0,0,14.4,15.5,15,15,0,0,0,15.6-15V128.3Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: undefined
  }), __jsx("path", {
    className: "a7f6e9d3-7b5f-422b-a95d-ea63f1fc88fa",
    d: "M676.5,681.4c-31.9,13.4-66.9-5.9-103.8-5.9v-138a101.4,101.4,0,1,0,0-202.8v-128c36.2,0,70.7-30.4,102.1-17.3,96.5,40,164.6,135.2,164.6,246.3S772.2,641,676.5,681.4Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: undefined
  }), __jsx("path", {
    className: "aa2ef657-2221-40f5-829c-4d38b15669d8",
    d: "M572.7,334.7a101.4,101.4,0,1,1,0,202.8Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: undefined
  }), __jsx("path", {
    className: "b4164aef-ddd6-406f-8ff5-899d52639bd7",
    d: "M469,190.1c31.9-13.5,66.9,16.6,103.7,16.6V675.5c-36.1,0-70.6,19.6-102,6.6A266.5,266.5,0,0,1,306.1,435.7C306.1,325.3,373.2,230.5,469,190.1Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: undefined
  }), __jsx("rect", {
    className: "f51beadc-db8c-4ca1-8b52-915d6ba0a4d9",
    x: "200.7",
    y: "916.1",
    width: "163",
    height: "75",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: undefined
  }), __jsx("path", {
    className: "f51beadc-db8c-4ca1-8b52-915d6ba0a4d9",
    d: "M1039.1,851.1H1145a103,103,0,1,0,0,206H839.7v-94h-104v94H667.1a103,103,0,0,1-102.9-108c2.6-55,48.8-98,103.9-98h371Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: undefined
  }), __jsx("polygon", {
    className: "e78750cb-a03a-48fe-9f5f-40b9d6cec936",
    points: "1038.7 679.1 1038.7 851.1 916.7 851.1 916.7 679.1 977.8 679.1 1038.7 679.1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: undefined
  }), __jsx("rect", {
    className: "a7f6e9d3-7b5f-422b-a95d-ea63f1fc88fa",
    x: "804.7",
    y: "679.1",
    width: "112",
    height: "172",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: undefined
  }), __jsx("polygon", {
    className: "b4164aef-ddd6-406f-8ff5-899d52639bd7",
    points: "839.7 1056.6 839.7 1179.4 787.8 1155.7 735.7 1179.4 735.7 1056.6 735.7 963.1 839.7 963.1 839.7 1056.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: undefined
  }), __jsx("polygon", {
    className: "e78750cb-a03a-48fe-9f5f-40b9d6cec936",
    points: "804.7 679.1 804.7 851.1 667.1 851.1 533.7 851.1 340.7 851.1 340.7 679.1 804.7 679.1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: undefined
  }), __jsx("path", {
    className: "bf8d20a5-22bb-4b79-b26f-6b40d37f2973",
    d: "M564.4,954.1a102.9,102.9,0,0,0,103,103H534.7c-55,0-101.1-42.8-103.9-97.7a103.1,103.1,0,0,1,103-108.3H667.4A103,103,0,0,0,564.4,954.1Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: undefined
  }), __jsx("rect", {
    className: "a7f6e9d3-7b5f-422b-a95d-ea63f1fc88fa",
    x: "235.7",
    y: "679.1",
    width: "105",
    height: "172",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: undefined
  }), __jsx("polygon", {
    className: "e78750cb-a03a-48fe-9f5f-40b9d6cec936",
    points: "235.7 679.1 235.7 851.1 211.5 851.1 112.7 851.1 112.7 679.1 167.3 679.1 235.7 679.1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: undefined
  }), __jsx("path", {
    className: "b2b1af0a-bec8-45c5-ae61-8e2e5b3f61c0",
    d: "M235.5,851.1H533.9a103,103,0,1,0,0,206H211.3a103,103,0,0,1-102.9-108c2.6-55,48.8-98,103.9-98Zm128.2,140v-75h-163v75Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: undefined
  }), __jsx("path", {
    className: "bf8d20a5-22bb-4b79-b26f-6b40d37f2973",
    d: "M211.5,851.1a103,103,0,0,0,0,206H103A103,103,0,0,1,.1,949.1c2.6-55,48.8-98,103.9-98H211.5Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: undefined
  })))),
  Talkbox: () => __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    "aria-labelledby": "talkboxdesc",
    viewBox: "0 0 1564 1051",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: undefined
  }, __jsx("desc", {
    id: "talkboxdesc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: undefined
  }, "Two speech bubbles representing a text or chat interaction, one of which has blinking dots (as commonly seen by a person when the other person they're chatting with is typing a message)"), __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: undefined
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: undefined
  }, `.f40e3a53-3393-484f-8997-96de2de7224b{fill:#de6273;}.be5d6e63-154a-40c1-8967-e5446a625f33{fill:#495077;}.b03f1a3a-b7df-459f-b549-f7ff42111053{fill:#fff;}`)), __jsx("g", {
    id: "a6861cb2-9d3e-4d71-8955-e4a014835602",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: undefined
  }, __jsx("g", {
    id: "f3301de5-ad03-4e71-b8fd-a0cda7db143c",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: undefined
  }, __jsx("path", {
    className: "f40e3a53-3393-484f-8997-96de2de7224b",
    d: "M1110,200.4V664.5c0,34.8-28.6,63.5-63.7,63.5H380.4L272.6,850.7,164.9,728H63.5A63.7,63.7,0,0,1,0,664.5V63.5A63.7,63.7,0,0,1,63.5,0h982.8A63.7,63.7,0,0,1,1110,63.5Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: undefined
  }), __jsx("path", {
    className: "be5d6e63-154a-40c1-8967-e5446a625f33",
    d: "M1564,264.5v600a63.7,63.7,0,0,1-63.5,63.5H1399.2l-107.7,122.6L1183.9,928H604.5A63.6,63.6,0,0,1,541,864.6V728h505.4a63.7,63.7,0,0,0,63.6-63.5V201h390.5A63.7,63.7,0,0,1,1564,264.5Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: undefined
  }), __jsx("g", {
    className: "dots",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: undefined
  }, __jsx("path", {
    className: "left b03f1a3a-b7df-459f-b549-f7ff42111053",
    d: "M295.2,262.2a82.1,82.1,0,1,1-82.1,82A81.9,81.9,0,0,1,295.2,262.2Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: undefined
  }), __jsx("path", {
    className: "middle b03f1a3a-b7df-459f-b549-f7ff42111053",
    d: "M554.6,262.2a82.1,82.1,0,1,1-82,82A82,82,0,0,1,554.6,262.2Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: undefined
  }), __jsx("path", {
    className: "right b03f1a3a-b7df-459f-b549-f7ff42111053",
    d: "M814,262.2a82.1,82.1,0,1,1-82,82A81.9,81.9,0,0,1,814,262.2Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    },
    __self: undefined
  }))))),
  Postbox: () => __jsx("svg", {
    id: "fd362c59-a690-49a3-b74d-5ae499a560da",
    className: "postbox-svg",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 777 333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: undefined
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: undefined
  }, `.f31b5d7b-559f-4161-8817-beeed5a60716{fill:#484f77;}.e116ed4b-7a9e-4565-8aad-2b88568e2ebb{fill:#7d90ae;}.bb9a7015-8744-41f2-9e94-385d793a8fc8{fill:#7d90ad;}.adadf4b9-7ed8-4513-b2ff-0e5c3f998ebf{fill:#3f4857;}.b85186a0-3d5d-41df-a73c-43e13b834660{fill:#fff;}.f029cd6c-c72a-4c2d-b8d2-8308f4f18eba{fill:#6aada4;}.b66302e4-cac5-4154-b535-9f6072a82765{fill:#65c8c7;}.a06738d4-449b-41f5-9953-9b2fdad98a2e,.b9b71a0e-c0dc-41b0-afeb-aa2692d96431{fill:none;stroke:#d1ecf0;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px;}.a06738d4-449b-41f5-9953-9b2fdad98a2e{stroke-dasharray:8.95 8.95;}`)), __jsx("path", {
    className: "f31b5d7b-559f-4161-8817-beeed5a60716",
    d: "M100.8,0h0A100.8,100.8,0,0,0,0,100.8V333.1H201.5V100.8A100.7,100.7,0,0,0,100.8,0Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: undefined
  }), __jsx("path", {
    className: "e116ed4b-7a9e-4565-8aad-2b88568e2ebb",
    d: "M100.8,18a82.8,82.8,0,0,1,82.7,82.8V315.1H18V100.8A82.8,82.8,0,0,1,100.8,18m0-4.2a87.1,87.1,0,0,0-87,87V319.2H187.7V100.8a87,87,0,0,0-86.9-87Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    },
    __self: undefined
  }), __jsx("polygon", {
    className: "bb9a7015-8744-41f2-9e94-385d793a8fc8",
    points: "166.6 129.5 35.3 129.5 43.6 116.3 158.3 116.3 166.6 129.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: undefined
  }), __jsx("rect", {
    className: "adadf4b9-7ed8-4513-b2ff-0e5c3f998ebf",
    x: "43.3",
    y: "129.5",
    width: "115.4",
    height: "11.08",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: undefined
  }), __jsx("path", {
    className: "b85186a0-3d5d-41df-a73c-43e13b834660",
    d: "M60.9,77.4h6.2c3.7,0,5.4,2.2,5.4,4.9s-1.7,4.9-5.4,4.9H64.8v4.9H60.9Zm5.3,7.2a2.3,2.3,0,1,0,0-4.6H64.8v4.6Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: undefined
  }), __jsx("path", {
    className: "b85186a0-3d5d-41df-a73c-43e13b834660",
    d: "M81.1,84.7c0-4.5,3.7-7.7,8.2-7.7s8.1,3.2,8.1,7.7a7.8,7.8,0,0,1-8.1,7.8A7.9,7.9,0,0,1,81.1,84.7Zm12.1,0c0-2.8-1.5-4.6-3.9-4.6s-4,1.8-4,4.6,1.5,4.7,4,4.7S93.2,87.5,93.2,84.7Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: undefined
  }), __jsx("path", {
    className: "b85186a0-3d5d-41df-a73c-43e13b834660",
    d: "M106.1,90.5l.9-2.9a7.5,7.5,0,0,0,4.7,1.9c1.2,0,2.1-.4,2.1-1.5s-.6-1.3-2.8-1.8-4.5-2.6-4.5-4.8,2.1-4.4,5.4-4.4a8.9,8.9,0,0,1,4.9,1.5l-.8,2.7a8.6,8.6,0,0,0-4.1-1.3c-1.1,0-1.7.4-1.7,1.2s.4,1.1,2.1,1.5c3.7.8,5.1,2.4,5.1,5s-2.7,4.8-5.7,4.8A9,9,0,0,1,106.1,90.5Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: undefined
  }), __jsx("path", {
    className: "b85186a0-3d5d-41df-a73c-43e13b834660",
    d: "M132.4,80.4h-4.8v-3h13.5v3h-4.8V92.1h-3.9Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: undefined
  }), __jsx("rect", {
    className: "bb9a7015-8744-41f2-9e94-385d793a8fc8",
    x: "46.4",
    y: "193.9",
    width: "108.8",
    height: "84.48",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: undefined
  }), __jsx("polygon", {
    className: "f029cd6c-c72a-4c2d-b8d2-8308f4f18eba",
    points: "352 86.1 352 102.8 263.2 147 352 86.1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: undefined
  }), __jsx("path", {
    className: "f029cd6c-c72a-4c2d-b8d2-8308f4f18eba",
    d: "M263.2,147l89.4-13.9a1.9,1.9,0,0,0,1.5-1.7l.5-7.5Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: undefined
  }), __jsx("path", {
    className: "b66302e4-cac5-4154-b535-9f6072a82765",
    d: "M263.2,147,366.9,95.3a.9.9,0,0,1,1,0l28.7,16.6a1.1,1.1,0,0,1-.3,2Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: undefined
  }), __jsx("path", {
    className: "b66302e4-cac5-4154-b535-9f6072a82765",
    d: "M263.2,147l56.3-78.7a.9.9,0,0,1,1.1-.2l31.4,18Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330
    },
    __self: undefined
  }), __jsx("path", {
    className: "b9b71a0e-c0dc-41b0-afeb-aa2692d96431",
    d: "M404.9,125.3h4.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    },
    __self: undefined
  }), __jsx("path", {
    className: "a06738d4-449b-41f5-9953-9b2fdad98a2e",
    d: "M418.4,125.5c46.4-.4,112-10.7,125.6-60,2.2-7.9,2.6-16.6-.9-23.9-8.4-17.8-40.3-14.8-50.1.4-3.7,5.6-5.4,12.3-6.5,18.9-2.8,16-2.5,33.8,7.3,46.7,14.3,19.2,44.3,24.1,66.5,27,24.2,3.3,52.5,4,74.3-8.7,2.7-1.5,5.2-3.8,5.8-6.8s-2-6.6-5.1-6.1a7.5,7.5,0,0,0-3,1.7c-3.5,2.9-6.6,6.6-7.8,11-3.4,13.7,15.6,22.3,26.7,20.8,5.8-.8,11.2-3.7,16.1-7,16.1-11,27.6-23.1,47.5-26.8,7.9-1.5,16.1-2.7,24.1-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: undefined
  }), __jsx("path", {
    className: "b9b71a0e-c0dc-41b0-afeb-aa2692d96431",
    d: "M743.3,111.2a35.4,35.4,0,0,1,4.4,1.1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: undefined
  })),
  QBubbleLeft: () => __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    className: "qbubble left",
    viewBox: "0 0 330.8676 278.7512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338
    },
    __self: undefined
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    },
    __self: undefined
  }, `.qbubble-shape{fill:white;}.qmark{fill:#495077}`)), __jsx("g", {
    "data-name": "qbubble-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343
    },
    __self: undefined
  }, __jsx("path", {
    className: "qbubble-shape",
    d: "M199.6616,0H150.08A131.2061,131.2061,0,0,0,18.8743,131.2061h0a130.62,130.62,0,0,0,26.8671,79.5476c0,.0014,2.7467,21.2349-45.7414,67.8216,74.1594,2.8524,91.5013-29.9431,91.5016-29.9441A130.6437,130.6437,0,0,0,150.08,262.4123h49.5813a131.2061,131.2061,0,0,0,131.206-131.2062h0A131.2061,131.2061,0,0,0,199.6616,0Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
    },
    __self: undefined
  }), __jsx("path", {
    className: "qmark",
    d: "M209.8541,95.29c0,27.3237-25.74,33.4617-25.74,52.0735v5.94c0,5.148-2.97,8.118-8.1181,8.118h-7.5235c-5.1484,0-8.1181-2.97-8.1181-8.118v-3.7619c0-29.7,21.7793-33.0657,21.7793-51.4795V92.32c0-5.94-2.5733-10.4939-9.8995-10.4939s-9.8994,4.554-9.8994,10.4939v10.0979c0,5.148-2.9707,8.118-8.1181,8.118H142.732c-5.1475,0-8.1182-2.97-8.1182-8.118V92.32c0-21.5818,12.0781-31.4817,37.62-31.4817s37.62,9.9,37.62,31.4817Zm-37.8184,80.7832c8.91,0,15.0479,6.1379,15.0479,15.0479s-6.1377,15.0478-15.0479,15.0478-15.0479-6.1379-15.0479-15.0478S163.1255,176.0729,172.0357,176.0729Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345
    },
    __self: undefined
  }))),
  QBubbleRight: () => __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    className: "qbubble right",
    viewBox: "0 0 330.8676 278.7512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351
    },
    __self: undefined
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352
    },
    __self: undefined
  }, `.qbubble-shape{fill:white;}.qmark{fill:#495077}`)), __jsx("g", {
    "data-name": "qbubble-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356
    },
    __self: undefined
  }, __jsx("path", {
    className: "qbubble-shape",
    d: "M131.206,0h49.5814a131.2061,131.2061,0,0,1,131.206,131.2061h0a130.6207,130.6207,0,0,1-26.8671,79.5476c0,.0014-2.7467,21.2349,45.7413,67.8216-74.1593,2.8524-91.5012-29.9431-91.5016-29.9441a130.6435,130.6435,0,0,1-58.5786,13.7811H131.206A131.2061,131.2061,0,0,1,0,131.2061H0A131.2061,131.2061,0,0,1,131.206,0Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357
    },
    __self: undefined
  }), __jsx("path", {
    className: "qmark",
    d: "M192.9082,95.29c0,27.3237-25.74,33.4617-25.74,52.0735v5.94c0,5.148-2.97,8.118-8.1182,8.118h-7.5234c-5.1485,0-8.1182-2.97-8.1182-8.118v-3.7619c0-29.7,21.7793-33.0657,21.7793-51.4795V92.32c0-5.94-2.5732-10.4939-9.8994-10.4939s-9.8994,4.554-9.8994,10.4939v10.0979c0,5.148-2.9707,8.118-8.1182,8.118H125.7861c-5.1474,0-8.1181-2.97-8.1181-8.118V92.32c0-21.5818,12.0781-31.4817,37.62-31.4817s37.62,9.9,37.62,31.4817ZM155.09,176.0729c8.91,0,15.0479,6.1379,15.0479,15.0479S164,206.1686,155.09,206.1686s-15.0478-6.1379-15.0478-15.0478S146.18,176.0729,155.09,176.0729Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358
    },
    __self: undefined
  }))),
  Clipboard: () => __jsx("svg", {
    id: "b962785f-4e57-41eb-a5cf-0747ecc00dd4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1678.6 1492.7",
    role: "img",
    "aria-labelledby": "clipboarddesc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363
    },
    __self: undefined
  }, __jsx("desc", {
    id: "clipboarddesc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364
    },
    __self: undefined
  }, "It's just a boring clipboard with some super uninformative bullet points supposedly relating to adoption education."), __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365
    },
    __self: undefined
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366
    },
    __self: undefined
  }, `.af122315-08d3-40f4-b307-e0e1cac0ad94{fill:#68c8c7;}.b536e90d-2eec-482d-a7de-68b42b570cf9{fill:#f1f2f2;}.b9f74912-7d93-435c-b4b0-7bb227c37a32{fill:#f2d176;}.faf7e68c-ad62-4d6b-8d57-40ad3c399aef{fill:#f68e4b;}.b26afeab-89e9-47d6-8080-7894d6f5e55f,.e79d3e94-23bf-484f-b451-0a0dfeedcd8e{fill:#d1ecf0;}.e79d3e94-23bf-484f-b451-0a0dfeedcd8e{stroke:#d1ecf0;stroke-miterlimit:10;stroke-width:5px;}.e9cc079e-99df-472d-9584-8573147a73fe{fill:#e06174;}.a1f3bf50-799c-4c66-98dd-0486c82e118d{fill:#4a5179;}.a46c7335-2ddc-45fd-add7-3cf84c0e7c7b{fill:#7e8fad;}.a9765d4d-aa8f-4c0c-baef-e5fe3a214fd2{fill:#495077;}.e78c3aa2-d375-4469-a31a-297bd52bc6ca{fill:#66c7c7;}`)), __jsx("rect", {
    className: "af122315-08d3-40f4-b307-e0e1cac0ad94",
    x: "0.3",
    y: "61",
    width: "1679",
    height: "2022",
    rx: "62.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369
    },
    __self: undefined
  }), __jsx("rect", {
    className: "b536e90d-2eec-482d-a7de-68b42b570cf9",
    x: "68.4",
    y: "128",
    width: "1548.5",
    height: "1951.03",
    rx: "40.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370
    },
    __self: undefined
  }), __jsx("rect", {
    className: "b9f74912-7d93-435c-b4b0-7bb227c37a32",
    x: "425.8",
    y: "1",
    width: "827",
    height: "189",
    rx: "29.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371
    },
    __self: undefined
  }), __jsx("rect", {
    className: "faf7e68c-ad62-4d6b-8d57-40ad3c399aef",
    x: "488.6",
    y: "75.9",
    width: "701.4",
    height: "39.16",
    rx: "8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372
    },
    __self: undefined
  }), __jsx("rect", {
    className: "b26afeab-89e9-47d6-8080-7894d6f5e55f",
    x: "283.3",
    y: "474",
    width: "95",
    height: "95",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    },
    __self: undefined
  }), __jsx("line", {
    className: "e79d3e94-23bf-484f-b451-0a0dfeedcd8e",
    x1: "241.3",
    y1: "636.5",
    x2: "1443.3",
    y2: "636.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374
    },
    __self: undefined
  }), __jsx("path", {
    className: "e9cc079e-99df-472d-9584-8573147a73fe",
    d: "M300.6,523.5a3.2,3.2,0,0,1,0-4.6l4.5-4.7a3.2,3.2,0,0,1,4.6,0l14.1,14.4,30.3-30.9a3.4,3.4,0,0,1,4.6,0l4.6,4.7a3.5,3.5,0,0,1,0,4.7l-37.2,37.8a3.1,3.1,0,0,1-4.5,0Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375
    },
    __self: undefined
  }), __jsx("path", {
    className: "a1f3bf50-799c-4c66-98dd-0486c82e118d",
    d: "M468.4,477.3c3.4,0,5.3,1.9,5.3,5.2v3.9c0,3.3-1.9,5.2-5.3,5.2H449.9v24.9h13.7c3.3,0,5.2,1.9,5.2,5.2v3.8c0,3.4-1.9,5.3-5.2,5.3H449.9v33.9c0,3.3-1.9,5.3-5.3,5.3h-8.4c-3.3,0-5.3-2-5.3-5.3V482.5c0-3.3,2-5.2,5.3-5.2Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376
    },
    __self: undefined
  }), __jsx("path", {
    className: "a1f3bf50-799c-4c66-98dd-0486c82e118d",
    d: "M520.8,531.4l11.6,31c1.1,2.7.4,7.6-4.8,7.6h-8.9a5,5,0,0,1-5.1-3.5l-11.4-32h-3.8v30.2c0,3.3-1.9,5.3-5.3,5.3h-8.4c-3.3,0-5.3-2-5.3-5.3V482.5c0-3.3,2-5.2,5.3-5.2h20.1c16.5,0,25.3,6.4,25.3,20.3v16.5C530.1,522.6,526.9,528.2,520.8,531.4Zm-16-11.2c4.2,0,6.4-2.6,6.4-6.1V497.6c0-3.4-2.2-6-6.4-6h-6.4v28.6Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377
    },
    __self: undefined
  }), __jsx("path", {
    className: "a1f3bf50-799c-4c66-98dd-0486c82e118d",
    d: "M577.9,477.3c3.3,0,5.2,1.9,5.2,5.2v3.9c0,3.3-1.9,5.2-5.2,5.2H559.3v24.9H573c3.3,0,5.3,1.9,5.3,5.2v3.8c0,3.4-2,5.3-5.3,5.3H559.3v24.8h18.6c3.3,0,5.2,1.9,5.2,5.3v3.8c0,3.3-1.9,5.3-5.2,5.3H545.6c-3.3,0-5.2-2-5.2-5.3V482.5c0-3.3,1.9-5.2,5.2-5.2Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378
    },
    __self: undefined
  }), __jsx("path", {
    className: "a1f3bf50-799c-4c66-98dd-0486c82e118d",
    d: "M627,477.3c3.4,0,5.3,1.9,5.3,5.2v3.9c0,3.3-1.9,5.2-5.3,5.2H608.5v24.9h13.7c3.3,0,5.2,1.9,5.2,5.2v3.8c0,3.4-1.9,5.3-5.2,5.3H608.5v24.8H627c3.4,0,5.3,1.9,5.3,5.3v3.8c0,3.3-1.9,5.3-5.3,5.3H594.8c-3.4,0-5.3-2-5.3-5.3V482.5c0-3.3,1.9-5.2,5.3-5.2Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379
    },
    __self: undefined
  }), __jsx("rect", {
    className: "b26afeab-89e9-47d6-8080-7894d6f5e55f",
    x: "282.3",
    y: "718.2",
    width: "95",
    height: "95",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380
    },
    __self: undefined
  }), __jsx("line", {
    className: "e79d3e94-23bf-484f-b451-0a0dfeedcd8e",
    x1: "240.3",
    y1: "880.7",
    x2: "1442.3",
    y2: "880.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381
    },
    __self: undefined
  }), __jsx("path", {
    className: "e9cc079e-99df-472d-9584-8573147a73fe",
    d: "M299.6,767.7a3.2,3.2,0,0,1,0-4.6l4.5-4.7a3.2,3.2,0,0,1,4.6,0l14.1,14.4L353.1,742a3.2,3.2,0,0,1,4.6,0l4.6,4.6a3.5,3.5,0,0,1,0,4.7l-37.2,37.8a3.1,3.1,0,0,1-4.5,0Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382
    },
    __self: undefined
  }), __jsx("path", {
    className: "a1f3bf50-799c-4c66-98dd-0486c82e118d",
    d: "M451.4,781.1v26.8c0,3.3-1.9,5.2-5.2,5.2h-8.5c-3.3,0-5.2-1.9-5.2-5.2V725.7c0-3.4,1.9-5.3,5.2-5.3h18.8c16.6,0,25.4,6.4,25.4,20.4v19.9c0,14-8.8,20.4-25.4,20.4Zm5.1-14.3c4.3,0,6.4-2.6,6.4-6.1V740.8c0-3.5-2.1-6-6.4-6h-5.1v32Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383
    },
    __self: undefined
  }), __jsx("path", {
    className: "a1f3bf50-799c-4c66-98dd-0486c82e118d",
    d: "M530.9,774.6l11.7,30.9c1,2.7.3,7.6-4.9,7.6h-8.8a5.1,5.1,0,0,1-5.2-3.5l-11.4-32h-3.8v30.3c0,3.3-1.9,5.2-5.2,5.2h-8.5c-3.3,0-5.2-1.9-5.2-5.2V725.7c0-3.4,1.9-5.3,5.2-5.3h20.1c16.5,0,25.4,6.4,25.4,20.4v16.5C540.3,765.7,537.1,771.4,530.9,774.6Zm-16-11.3c4.2,0,6.4-2.6,6.4-6V740.8c0-3.5-2.2-6-6.4-6h-6.4v28.5Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384
    },
    __self: undefined
  }), __jsx("path", {
    className: "a1f3bf50-799c-4c66-98dd-0486c82e118d",
    d: "M588,720.4c3.3,0,5.2,1.9,5.2,5.3v3.8c0,3.3-1.9,5.3-5.2,5.3H569.4v24.8h13.7c3.4,0,5.3,1.9,5.3,5.2v3.9c0,3.3-1.9,5.2-5.3,5.2H569.4v24.9H588c3.3,0,5.2,1.9,5.2,5.2v3.9c0,3.3-1.9,5.2-5.2,5.2H555.7c-3.3,0-5.2-1.9-5.2-5.2V725.7c0-3.4,1.9-5.3,5.2-5.3Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385
    },
    __self: undefined
  }), __jsx("path", {
    className: "a1f3bf50-799c-4c66-98dd-0486c82e118d",
    d: "M622.7,769.3c3.3,0,5.2,1.9,5.2,5.3v3.8c0,3.3-1.9,5.3-5.2,5.3H602.3c-3.3,0-5.2-2-5.2-5.3v-3.8c0-3.4,1.9-5.3,5.2-5.3Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386
    },
    __self: undefined
  }), __jsx("path", {
    className: "a1f3bf50-799c-4c66-98dd-0486c82e118d",
    d: "M654.6,781.1v26.8c0,3.3-2,5.2-5.3,5.2h-8.4c-3.4,0-5.3-1.9-5.3-5.2V725.7c0-3.4,1.9-5.3,5.3-5.3h18.8c16.5,0,25.3,6.4,25.3,20.4v19.9c0,14-8.8,20.4-25.3,20.4Zm5.1-14.3c4.2,0,6.4-2.6,6.4-6.1V740.8c0-3.5-2.2-6-6.4-6h-5.1v32Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387
    },
    __self: undefined
  }), __jsx("path", {
    className: "a1f3bf50-799c-4c66-98dd-0486c82e118d",
    d: "M711.6,798.8h18.6c3.3,0,5.2,1.9,5.2,5.2v3.9c0,3.3-1.9,5.2-5.2,5.2H697.9c-3.3,0-5.2-1.9-5.2-5.2V725.7c0-3.4,1.9-5.3,5.2-5.3h8.5c3.3,0,5.2,1.9,5.2,5.3Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388
    },
    __self: undefined
  }), __jsx("path", {
    className: "a1f3bf50-799c-4c66-98dd-0486c82e118d",
    d: "M774,808.5l-1.6-12.8H757.1l-1.6,12.8c-.3,3.6-2.8,4.6-5.2,4.6h-7.7c-3.8,0-5.7-2.7-5.1-6.5l12.3-81.2c.5-3.7,2.4-5,5.4-5h19.2c2.9,0,4.8,1.3,5.3,5L792,806.6c.7,3.8-1.3,6.5-5.1,6.5h-7.7C776.8,813.1,774.4,812.1,774,808.5Zm-15.3-27.1h11.9L769,766.8l-3.6-34.2h-1.3l-3.6,34.2Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389
    },
    __self: undefined
  }), __jsx("path", {
    className: "a1f3bf50-799c-4c66-98dd-0486c82e118d",
    d: "M832.9,725.7c0-3.4,1.9-5.3,5.2-5.3h7.2c3.3,0,5.2,1.9,5.2,5.3v82.2c0,3.3-1.9,5.2-5.2,5.2h-8.6c-3.2,0-4.5-1.7-5.3-3.8l-9.6-27.7-6.2-22.3-1.3.3,1.9,22.9v25.4c0,3.3-1.9,5.2-5.2,5.2h-7.2c-3.3,0-5.3-1.9-5.3-5.2V725.7c0-3.4,2-5.3,5.3-5.3h8.6c3.2,0,4.5,1.7,5.2,3.9l9.6,27.6,6.3,22.3,1.3-.3L832.9,751Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390
    },
    __self: undefined
  }), __jsx("path", {
    className: "a1f3bf50-799c-4c66-98dd-0486c82e118d",
    d: "M895.1,725.7c0-3.4,1.9-5.3,5.2-5.3h7.2c3.3,0,5.2,1.9,5.2,5.3v82.2c0,3.3-1.9,5.2-5.2,5.2h-8.6a4.9,4.9,0,0,1-5.2-3.8l-9.6-27.7-6.3-22.3-1.3.3,1.9,22.9v25.4c0,3.3-1.9,5.2-5.2,5.2H866c-3.3,0-5.2-1.9-5.2-5.2V725.7c0-3.4,1.9-5.3,5.2-5.3h8.6c3.2,0,4.5,1.7,5.2,3.9l9.6,27.6,6.3,22.3,1.3-.3L895.1,751Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391
    },
    __self: undefined
  }), __jsx("path", {
    className: "a1f3bf50-799c-4c66-98dd-0486c82e118d",
    d: "M960.5,720.4c3.3,0,5.2,1.9,5.2,5.3v3.8c0,3.3-1.9,5.3-5.2,5.3H941.9v24.8h13.7c3.3,0,5.3,1.9,5.3,5.2v3.9c0,3.3-2,5.2-5.3,5.2H941.9v24.9h18.6c3.3,0,5.2,1.9,5.2,5.2v3.9c0,3.3-1.9,5.2-5.2,5.2H928.2c-3.3,0-5.2-1.9-5.2-5.2V725.7c0-3.4,1.9-5.3,5.2-5.3Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392
    },
    __self: undefined
  }), __jsx("path", {
    className: "a1f3bf50-799c-4c66-98dd-0486c82e118d",
    d: "M977.4,813.1c-3.4,0-5.3-1.9-5.3-5.2V725.7c0-3.4,1.9-5.3,5.3-5.3h20.1c16.5,0,25.3,6.4,25.3,20.4v51.9c0,14-8.8,20.4-25.3,20.4Zm20.1-14.3c4.2,0,6.4-2.6,6.4-6.1V740.8c0-3.5-2.2-6-6.4-6h-6.4v64Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393
    },
    __self: undefined
  }), __jsx("rect", {
    className: "b26afeab-89e9-47d6-8080-7894d6f5e55f",
    x: "282.3",
    y: "961.4",
    width: "95",
    height: "95",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394
    },
    __self: undefined
  }), __jsx("line", {
    className: "e79d3e94-23bf-484f-b451-0a0dfeedcd8e",
    x1: "240.3",
    y1: "1123.9",
    x2: "1442.3",
    y2: "1123.9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395
    },
    __self: undefined
  }), __jsx("path", {
    className: "e9cc079e-99df-472d-9584-8573147a73fe",
    d: "M299.6,1010.9a3.2,3.2,0,0,1,0-4.6l4.5-4.7a3.2,3.2,0,0,1,4.6,0l14.1,14.4,30.3-30.8a3.2,3.2,0,0,1,4.6,0l4.6,4.6a3.5,3.5,0,0,1,0,4.7l-37.2,37.8a3.1,3.1,0,0,1-4.5,0Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396
    },
    __self: undefined
  }), __jsx("path", {
    className: "a1f3bf50-799c-4c66-98dd-0486c82e118d",
    d: "M461.1,1039.4c-3,0-4.7-1.6-5.1-3.8l-7.1-42.5h-1.3l1.3,17.9v40.1c0,3.3-2,5.2-5.3,5.2h-5.9c-3.3,0-5.2-1.9-5.2-5.2V968.9c0-3.5,2-5.3,5.2-5.3h14.2c3.4,0,4.9,1.7,5.4,5l4.7,22.8,3,22h1.3l2.9-22,4.7-22.8c.6-3.3,2.1-5,5.4-5h14.2c3.2,0,5.3,1.8,5.3,5.3v82.2c0,3.3-1.9,5.2-5.3,5.2h-5.9c-3.3,0-5.2-1.9-5.2-5.2V1011l1.3-17.9h-1.3l-7.2,42.5c-.4,2.2-2,3.8-5.1,3.8Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397
    },
    __self: undefined
  }), __jsx("path", {
    className: "a1f3bf50-799c-4c66-98dd-0486c82e118d",
    d: "M546.5,963.6c3.4,0,5.3,2,5.3,5.3v3.8c0,3.4-1.9,5.3-5.3,5.3H528v24.8h13.7c3.3,0,5.2,1.9,5.2,5.3v3.8c0,3.3-1.9,5.2-5.2,5.2H528V1042h18.5c3.4,0,5.3,1.9,5.3,5.2v3.9c0,3.3-1.9,5.2-5.3,5.2H514.3c-3.4,0-5.3-1.9-5.3-5.2V968.9c0-3.3,1.9-5.3,5.3-5.3Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398
    },
    __self: undefined
  }), __jsx("path", {
    className: "a1f3bf50-799c-4c66-98dd-0486c82e118d",
    d: "M595.7,963.6c3.3,0,5.2,2,5.2,5.3v3.8c0,3.4-1.9,5.3-5.2,5.3H577.1v24.8h13.7c3.3,0,5.3,1.9,5.3,5.3v3.8c0,3.3-2,5.2-5.3,5.2H577.1V1042h18.6c3.3,0,5.2,1.9,5.2,5.2v3.9c0,3.3-1.9,5.2-5.2,5.2H563.4c-3.3,0-5.2-1.9-5.2-5.2V968.9c0-3.3,1.9-5.3,5.2-5.3Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399
    },
    __self: undefined
  }), __jsx("path", {
    className: "a1f3bf50-799c-4c66-98dd-0486c82e118d",
    d: "M638.6,978v73.1c0,3.3-2,5.2-5.3,5.2h-8.4c-3.4,0-5.3-1.9-5.3-5.2V978H607.4c-3.3,0-5.2-1.9-5.2-5.3v-3.8c0-3.3,1.9-5.3,5.2-5.3h43.3c3.3,0,5.3,2,5.3,5.3v3.8c0,3.4-2,5.3-5.3,5.3Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400
    },
    __self: undefined
  }), __jsx("path", {
    className: "a1f3bf50-799c-4c66-98dd-0486c82e118d",
    d: "M685,997.8l15,12.7c9.2,7.8,10.5,14.2,10.5,26.1,0,14-8.8,20.4-25.4,20.4s-25.3-6.4-25.3-20.4v-9.1c0-3.3,1.9-5.2,5.2-5.2h8.5c3.3,0,5.2,1.9,5.2,5.2v9.1c0,3.5,2.2,6,6.4,6s6.4-2.5,6.4-6c0-6.7-1-10.1-6.2-14.5l-15-12.6c-9.2-7.8-10.5-14.2-10.5-26.1,0-14,8.8-20.4,25.3-20.4s25.4,6.4,25.4,20.4v9c0,3.4-1.9,5.3-5.3,5.3h-8.4c-3.3,0-5.3-1.9-5.3-5.3v-9c0-3.5-2.1-6.1-6.4-6.1s-6.4,2.6-6.4,6.1C678.7,990,679.8,993.5,685,997.8Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401
    },
    __self: undefined
  }), __jsx("path", {
    className: "a1f3bf50-799c-4c66-98dd-0486c82e118d",
    d: "M799.6,983.4v53.2c0,14-8.9,20.4-25.4,20.4s-25.3-6.4-25.3-20.4V983.4c0-14,8.8-20.4,25.3-20.4S799.6,969.4,799.6,983.4Zm-31.8,0v53.2c0,3.5,2.2,6,6.4,6s6.4-2.5,6.4-6V983.4c0-3.5-2.1-6.1-6.4-6.1S767.8,979.9,767.8,983.4Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402
    },
    __self: undefined
  }), __jsx("path", {
    className: "a1f3bf50-799c-4c66-98dd-0486c82e118d",
    d: "M815.1,1056.3c-3.4,0-5.3-1.9-5.3-5.2V968.9c0-3.3,1.9-5.3,5.3-5.3h18.8c16.5,0,25.3,6.4,25.3,20.4v7c0,9.5-4.1,15.5-11.8,18.3v1.3c7.7,3,11.8,9,11.8,18.3v7.1c0,13.9-8.8,20.3-25.3,20.3Zm18.8-53.5c4.2,0,6.4-2.6,6.4-6V984c0-3.5-2.2-6-6.4-6h-5.1v24.8Zm0,39.2c4.2,0,6.4-2.6,6.4-6v-12.8c0-3.5-2.2-6.1-6.4-6.1h-5.1V1042Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403
    },
    __self: undefined
  }), __jsx("path", {
    className: "a1f3bf50-799c-4c66-98dd-0486c82e118d",
    d: "M916.9,1036.6c0,14-8.8,20.4-25.3,20.4s-25.3-6.4-25.3-20.4v-10.4c0-3.3,1.9-5.2,5.2-5.2H880c3.3,0,5.2,1.9,5.2,5.2v10.4c0,3.5,2.2,6,6.4,6s6.4-2.5,6.4-6V968.9c0-3.3,1.9-5.3,5.3-5.3h8.4c3.3,0,5.2,2,5.2,5.3Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404
    },
    __self: undefined
  }), __jsx("path", {
    className: "a1f3bf50-799c-4c66-98dd-0486c82e118d",
    d: "M964.7,963.6c3.3,0,5.2,2,5.2,5.3v3.8c0,3.4-1.9,5.3-5.2,5.3H946.1v24.8h13.7c3.4,0,5.3,1.9,5.3,5.3v3.8c0,3.3-1.9,5.2-5.3,5.2H946.1V1042h18.6c3.3,0,5.2,1.9,5.2,5.2v3.9c0,3.3-1.9,5.2-5.2,5.2H932.4c-3.3,0-5.2-1.9-5.2-5.2V968.9c0-3.3,1.9-5.3,5.2-5.3Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405
    },
    __self: undefined
  }), __jsx("path", {
    className: "a1f3bf50-799c-4c66-98dd-0486c82e118d",
    d: "M1027,996.3c0,3.3-1.9,5.2-5.2,5.2h-8.5c-3.3,0-5.2-1.9-5.2-5.2V983.4c0-3.5-2.2-6.1-6.4-6.1s-6.4,2.6-6.4,6.1v53.2c0,3.5,2.2,6,6.4,6s6.4-2.5,6.4-6v-12.9c0-3.4,1.9-5.3,5.2-5.3h8.5c3.3,0,5.2,1.9,5.2,5.3v12.9c0,14-8.8,20.4-25.3,20.4s-25.4-6.4-25.4-20.4V983.4c0-14,8.9-20.4,25.4-20.4s25.3,6.4,25.3,20.4Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406
    },
    __self: undefined
  }), __jsx("path", {
    className: "a1f3bf50-799c-4c66-98dd-0486c82e118d",
    d: "M1068.5,978v73.1c0,3.3-1.9,5.2-5.3,5.2h-8.4c-3.3,0-5.2-1.9-5.2-5.2V978h-12.2c-3.3,0-5.3-1.9-5.3-5.3v-3.8c0-3.3,2-5.3,5.3-5.3h43.3c3.3,0,5.2,2,5.2,5.3v3.8c0,3.4-1.9,5.3-5.2,5.3Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407
    },
    __self: undefined
  }), __jsx("path", {
    className: "a1f3bf50-799c-4c66-98dd-0486c82e118d",
    d: "M1110,1051.1c0,3.3-2,5.2-5.3,5.2h-8.4c-3.4,0-5.3-1.9-5.3-5.2V968.9c0-3.3,1.9-5.3,5.3-5.3h8.4c3.3,0,5.3,2,5.3,5.3Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408
    },
    __self: undefined
  }), __jsx("path", {
    className: "a1f3bf50-799c-4c66-98dd-0486c82e118d",
    d: "M1134.5,968.2l5.7,41.8,2.9,34.2h1.3l2.9-34.2,5.7-41.8c.4-3.5,2.8-4.6,5.2-4.6h7.7c3.8,0,5.8,2.7,5.1,6.6l-12.3,81.1c-.5,3.7-2.4,5-5.3,5h-19.2c-3,0-4.9-1.3-5.4-5l-12.3-81.1c-.6-3.9,1.3-6.6,5.1-6.6h7.7C1131.7,963.6,1134.2,964.7,1134.5,968.2Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409
    },
    __self: undefined
  }), __jsx("path", {
    className: "a1f3bf50-799c-4c66-98dd-0486c82e118d",
    d: "M1215.1,963.6c3.3,0,5.2,2,5.2,5.3v3.8c0,3.4-1.9,5.3-5.2,5.3h-18.6v24.8h13.7c3.3,0,5.2,1.9,5.2,5.3v3.8c0,3.3-1.9,5.2-5.2,5.2h-13.7V1042h18.6c3.3,0,5.2,1.9,5.2,5.2v3.9c0,3.3-1.9,5.2-5.2,5.2h-32.3c-3.3,0-5.2-1.9-5.2-5.2V968.9c0-3.3,1.9-5.3,5.2-5.3Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410
    },
    __self: undefined
  }), __jsx("path", {
    className: "a1f3bf50-799c-4c66-98dd-0486c82e118d",
    d: "M1250.6,997.8l15,12.7c9.2,7.8,10.5,14.2,10.5,26.1,0,14-8.8,20.4-25.3,20.4s-25.4-6.4-25.4-20.4v-9.1c0-3.3,1.9-5.2,5.3-5.2h8.4c3.3,0,5.3,1.9,5.3,5.2v9.1c0,3.5,2.1,6,6.4,6s6.4-2.5,6.4-6c0-6.7-1.1-10.1-6.3-14.5l-15-12.6c-9.2-7.8-10.5-14.2-10.5-26.1,0-14,8.9-20.4,25.4-20.4s25.3,6.4,25.3,20.4v9c0,3.4-1.9,5.3-5.2,5.3h-8.5c-3.3,0-5.2-1.9-5.2-5.3v-9c0-3.5-2.2-6.1-6.4-6.1s-6.4,2.6-6.4,6.1C1244.4,990,1245.4,993.5,1250.6,997.8Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: undefined
  }), __jsx("rect", {
    className: "b26afeab-89e9-47d6-8080-7894d6f5e55f",
    x: "282.3",
    y: "1208.7",
    width: "95",
    height: "95",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412
    },
    __self: undefined
  }), __jsx("line", {
    className: "e79d3e94-23bf-484f-b451-0a0dfeedcd8e",
    x1: "240.3",
    y1: "1371.2",
    x2: "1442.3",
    y2: "1371.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413
    },
    __self: undefined
  }), __jsx("path", {
    className: "e9cc079e-99df-472d-9584-8573147a73fe",
    d: "M299.6,1258.2a3.3,3.3,0,0,1,0-4.7l4.5-4.6a3.2,3.2,0,0,1,4.6,0l14.1,14.4,30.3-30.9a3.2,3.2,0,0,1,4.6,0l4.6,4.7a3.4,3.4,0,0,1,0,4.6l-37.2,37.9a3.1,3.1,0,0,1-4.5,0Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414
    },
    __self: undefined
  }), __jsx("path", {
    className: "a1f3bf50-799c-4c66-98dd-0486c82e118d",
    d: "M470,1210.9c3.3,0,5.2,1.9,5.2,5.2v3.9c0,3.3-1.9,5.2-5.2,5.2H451.4V1250h13.7c3.3,0,5.3,2,5.3,5.3v3.8c0,3.4-2,5.3-5.3,5.3H451.4v24.8H470c3.3,0,5.2,1.9,5.2,5.3v3.8c0,3.3-1.9,5.2-5.2,5.2H437.7c-3.3,0-5.2-1.9-5.2-5.2v-82.2c0-3.3,1.9-5.2,5.2-5.2Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415
    },
    __self: undefined
  }), __jsx("path", {
    className: "a1f3bf50-799c-4c66-98dd-0486c82e118d",
    d: "M515.9,1216.1c0-3.3,1.9-5.2,5.3-5.2h7.1c3.4,0,5.3,1.9,5.3,5.2v82.2c0,3.3-1.9,5.2-5.3,5.2h-8.5c-3.2,0-4.5-1.6-5.3-3.8l-9.6-27.6-6.3-22.3-1.2.2,1.9,23v25.3c0,3.3-1.9,5.2-5.3,5.2h-7.1c-3.4,0-5.3-1.9-5.3-5.2v-82.2c0-3.3,1.9-5.2,5.3-5.2h8.5c3.2,0,4.5,1.6,5.3,3.8l9.6,27.7,6.3,22.2,1.2-.2-1.9-22.9Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416
    },
    __self: undefined
  }), __jsx("path", {
    className: "a1f3bf50-799c-4c66-98dd-0486c82e118d",
    d: "M589.3,1254.3c3.3,0,5.2,1.9,5.2,5.2v24.3c0,14-8.8,20.4-25.3,20.4s-25.4-6.4-25.4-20.4v-53.2c0-14,8.9-20.4,25.4-20.4s25.3,6.4,25.3,20.4v7.8c0,3.3-1.9,5.2-5.2,5.2h-8.5c-3.3,0-5.2-1.9-5.2-5.2v-7.8c0-3.5-2.2-6-6.4-6s-6.4,2.5-6.4,6v53.2c0,3.5,2.2,6.1,6.4,6.1s6.4-2.6,6.4-6.1v-15.2h-1.2c-3.3,0-5.2-1.9-5.2-5.2v-3.9c0-3.3,1.9-5.2,5.2-5.2Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417
    },
    __self: undefined
  }), __jsx("path", {
    className: "a1f3bf50-799c-4c66-98dd-0486c82e118d",
    d: "M637.5,1298.9l-1.5-12.8H620.6l-1.5,12.8c-.4,3.6-2.8,4.6-5.3,4.6h-7.6c-3.9,0-5.8-2.6-5.2-6.5l12.3-81.1c.5-3.7,2.5-5,5.4-5h19.2c3,0,4.9,1.3,5.4,5l12.3,81.1c.6,3.9-1.3,6.5-5.1,6.5h-7.7C640.3,1303.5,637.9,1302.5,637.5,1298.9Zm-15.2-27.1h11.9l-1.7-14.6L629,1223h-1.3l-3.6,34.2Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418
    },
    __self: undefined
  }), __jsx("path", {
    className: "a1f3bf50-799c-4c66-98dd-0486c82e118d",
    d: "M707.5,1254.3c3.4,0,5.3,1.9,5.3,5.2v24.3c0,14-8.8,20.4-25.4,20.4s-25.3-6.4-25.3-20.4v-53.2c0-14,8.8-20.4,25.3-20.4s25.4,6.4,25.4,20.4v7.8c0,3.3-1.9,5.2-5.3,5.2h-8.4c-3.3,0-5.3-1.9-5.3-5.2v-7.8c0-3.5-2.1-6-6.4-6s-6.4,2.5-6.4,6v53.2c0,3.5,2.2,6.1,6.4,6.1s6.4-2.6,6.4-6.1v-15.2h-1.1c-3.3,0-5.3-1.9-5.3-5.2v-3.9c0-3.3,2-5.2,5.3-5.2Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419
    },
    __self: undefined
  }), __jsx("path", {
    className: "a1f3bf50-799c-4c66-98dd-0486c82e118d",
    d: "M742,1298.3c0,3.3-1.9,5.2-5.3,5.2h-8.4c-3.3,0-5.3-1.9-5.3-5.2v-82.2c0-3.3,2-5.2,5.3-5.2h8.4c3.4,0,5.3,1.9,5.3,5.2Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420
    },
    __self: undefined
  }), __jsx("path", {
    className: "a1f3bf50-799c-4c66-98dd-0486c82e118d",
    d: "M786.5,1216.1c0-3.3,1.9-5.2,5.3-5.2h7.1c3.4,0,5.3,1.9,5.3,5.2v82.2c0,3.3-1.9,5.2-5.3,5.2h-8.5c-3.2,0-4.5-1.6-5.3-3.8l-9.6-27.6-6.3-22.3-1.2.2,1.9,23v25.3c0,3.3-1.9,5.2-5.3,5.2h-7.1c-3.4,0-5.3-1.9-5.3-5.2v-82.2c0-3.3,1.9-5.2,5.3-5.2H766c3.2,0,4.5,1.6,5.3,3.8l9.6,27.7,6.3,22.2,1.2-.2-1.9-22.9Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421
    },
    __self: undefined
  }), __jsx("path", {
    className: "a1f3bf50-799c-4c66-98dd-0486c82e118d",
    d: "M859.9,1254.3c3.3,0,5.2,1.9,5.2,5.2v24.3c0,14-8.8,20.4-25.3,20.4s-25.4-6.4-25.4-20.4v-53.2c0-14,8.9-20.4,25.4-20.4s25.3,6.4,25.3,20.4v7.8c0,3.3-1.9,5.2-5.2,5.2h-8.5c-3.3,0-5.2-1.9-5.2-5.2v-7.8c0-3.5-2.2-6-6.4-6s-6.4,2.5-6.4,6v53.2c0,3.5,2.1,6.1,6.4,6.1s6.4-2.6,6.4-6.1v-15.2H845c-3.3,0-5.2-1.9-5.2-5.2v-3.9c0-3.3,1.9-5.2,5.2-5.2Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422
    },
    __self: undefined
  }), __jsx("path", {
    className: "a46c7335-2ddc-45fd-add7-3cf84c0e7c7b",
    d: "M1269.5,454l-2.7,8.9L1186.1,439l14.8-50.2,80.8,23.9Zm-12.6-18.3a8,8,0,1,0-10,5.5A8.1,8.1,0,0,0,1256.9,435.7Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423
    },
    __self: undefined
  }), __jsx("polygon", {
    className: "a9765d4d-aa8f-4c0c-baef-e5fe3a214fd2",
    points: "1308.5 322.6 1281.7 412.7 1200.9 388.8 1230.3 289.7 1311.1 313.7 1308.5 322.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424
    },
    __self: undefined
  }), __jsx("path", {
    className: "b9f74912-7d93-435c-b4b0-7bb227c37a32",
    d: "M1269.5,454l22.5,6.7a22,22,0,0,0,5.2,21.5l121.7,36.1a21.6,21.6,0,0,0,10-5.3,22,22,0,0,0,3.6-28.1l4-1.3a22.7,22.7,0,0,0,10-5.4,20.7,20.7,0,0,0,6.1-9.8,22.1,22.1,0,0,0-2.5-18.2l4-1.4a22.6,22.6,0,0,0,10-5.3,21.6,21.6,0,0,0,6.1-9.9,21.8,21.8,0,0,0-2.6-18.2l4.1-1.4a21.9,21.9,0,0,0,16.1-15.2,22.2,22.2,0,0,0-5.2-21.6,22.7,22.7,0,0,0-9.7-5.8l-89-26.4,20.4-69.1a22,22,0,0,0-31.6-25.6,21.7,21.7,0,0,0-10.7,13.1s-6.2,25.5-9.9,33.4-21.7,32.3-21.7,32.3l-21.9-6.5Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425
    },
    __self: undefined
  }), __jsx("path", {
    className: "e78c3aa2-d375-4469-a31a-297bd52bc6ca",
    d: "M1256.9,435.7a8,8,0,1,1-5.4-10A8.1,8.1,0,0,1,1256.9,435.7Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426
    },
    __self: undefined
  })),
  WritingBlock: () => __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 738.8 711.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: undefined
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: undefined
  }, `.e4743f20-43fc-4d48-9f82-e72c48005958{fill:#fff;}.f2dcd599-c224-4509-8cd2-3323d6209043{fill:#de6273;}.a50d6758-2c84-45d8-a555-826dfb6536f0{fill:#495077;}.b8c80fab-e4c7-433d-af2c-a0b0b1412636{fill:#f68e4b;}.a35e4a32-2ae2-451e-acd1-43ab3a291c5f{fill:#f2d176;}`)), __jsx("g", {
    id: "a9e9a329-c4d1-410f-83e1-ced0de8bf764",
    "data-name": "Layer 2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: undefined
  }, __jsx("g", {
    id: "adeac10d-2bc3-439e-b778-5d8b97ed2866",
    "data-name": "Layer 1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: undefined
  }, __jsx("polygon", {
    className: "e4743f20-43fc-4d48-9f82-e72c48005958",
    points: "675.2 597.1 675.2 711.5 627.3 711.5 627.3 654.3 627.3 597.1 675.2 597.1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: undefined
  }), __jsx("path", {
    className: "f2dcd599-c224-4509-8cd2-3323d6209043",
    d: "M738.8,630.6V678a33.5,33.5,0,0,1-33.5,33.5H675.2V597.1h30.1A33.5,33.5,0,0,1,738.8,630.6Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: undefined
  }), __jsx("path", {
    className: "a50d6758-2c84-45d8-a555-826dfb6536f0",
    d: "M165.1,0l86.4,220.9H219l-24.1-66.5H101.4L76.7,220.9h-30L132.7,0Zm20.5,129.6-36.8-103h-.6l-37.5,103Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: undefined
  }), __jsx("rect", {
    className: "a50d6758-2c84-45d8-a555-826dfb6536f0",
    x: "302.8",
    y: "9.3",
    width: "416.7",
    height: "21.13",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: undefined
  }), __jsx("rect", {
    className: "a50d6758-2c84-45d8-a555-826dfb6536f0",
    x: "302.8",
    y: "104.8",
    width: "416.7",
    height: "21.13",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: undefined
  }), __jsx("rect", {
    className: "a50d6758-2c84-45d8-a555-826dfb6536f0",
    x: "302.8",
    y: "200.3",
    width: "416.7",
    height: "21.13",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: undefined
  }), __jsx("rect", {
    className: "a50d6758-2c84-45d8-a555-826dfb6536f0",
    x: "36.7",
    y: "295.8",
    width: "682.8",
    height: "21.13",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: undefined
  }), __jsx("rect", {
    className: "a50d6758-2c84-45d8-a555-826dfb6536f0",
    x: "36.7",
    y: "391.3",
    width: "682.8",
    height: "21.13",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: undefined
  }), __jsx("rect", {
    className: "a50d6758-2c84-45d8-a555-826dfb6536f0",
    x: "36.7",
    y: "486.8",
    width: "682.8",
    height: "21.13",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: undefined
  }), __jsx("polygon", {
    className: "e4743f20-43fc-4d48-9f82-e72c48005958",
    points: "93.7 597.1 137.6 654.3 93.7 711.5 56.4 688.6 56.4 619.9 93.7 597.1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: undefined
  }), __jsx("polygon", {
    className: "b8c80fab-e4c7-433d-af2c-a0b0b1412636",
    points: "627.3 654.3 627.3 711.5 93.7 711.5 137.6 654.3 627.3 654.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: undefined
  }), __jsx("polygon", {
    className: "a35e4a32-2ae2-451e-acd1-43ab3a291c5f",
    points: "627.3 597.1 627.3 654.3 137.6 654.3 93.7 597.1 627.3 597.1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: undefined
  }), __jsx("polygon", {
    className: "a50d6758-2c84-45d8-a555-826dfb6536f0",
    points: "56.4 619.9 56.4 688.6 0 654.3 56.4 619.9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: undefined
  })))),
  VideoBlock: () => __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    viewBox: "0 0 108.3204 80.2998",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433
    },
    __self: undefined
  }, __jsx("circle", {
    className: "rose-fill",
    cx: "81",
    cy: "72.1602",
    r: "3.75",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434
    },
    __self: undefined
  }), __jsx("polygon", {
    className: "white-fill",
    points: "78.33 31.65 37.591 55.17 37.591 8.13 78.33 31.65",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435
    },
    __self: undefined
  }), __jsx("path", {
    className: "rose-fill",
    d: "M108.32,0V64.18H0V0ZM37.5909,55.17,78.33,31.65,37.5909,8.13Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436
    },
    __self: undefined
  }), __jsx("path", {
    className: "navy-fill",
    d: "M84.75,72.16A3.75,3.75,0,1,0,81,75.91,3.7447,3.7447,0,0,0,84.75,72.16ZM108.32,64.18V80.3H0V64.18Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437
    },
    __self: undefined
  }), __jsx("rect", {
    className: "white-fill",
    x: "8.1006",
    y: "68.75",
    width: "3",
    height: "6.8106",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438
    },
    __self: undefined
  }), __jsx("rect", {
    className: "white-fill",
    x: "13",
    y: "68.75",
    width: "3",
    height: "6.8106",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439
    },
    __self: undefined
  }), __jsx("rect", {
    className: "white-fill",
    x: "84.75",
    y: "70.6602",
    width: "14.5",
    height: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440
    },
    __self: undefined
  }), __jsx("rect", {
    className: "white-fill",
    x: "21.5",
    y: "70.6602",
    width: "55.7305",
    height: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441
    },
    __self: undefined
  }), __jsx("path", {
    className: "white-fill",
    d: "M81,77.41a5.25,5.25,0,1,1,5.25-5.25A5.2558,5.2558,0,0,1,81,77.41Zm0-7.5a2.25,2.25,0,1,0,2.25,2.25A2.2525,2.2525,0,0,0,81,69.91Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442
    },
    __self: undefined
  })),
  StateBuilding: () => __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 692 451",
    role: "img",
    "aria-labelledby": "statebuildingdesc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446
    },
    __self: undefined
  }, __jsx("desc", {
    id: "statebuildingdesc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: undefined
  }, "A very stately looking building, like a city hall or courthouse."), __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: undefined
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: undefined
  }, `.b2702042-660f-4229-9679-b7e54bb63fed{fill:#d1ecee;}.b7cb79e3-0cd2-4812-a958-e162587f4129{fill:#73c3af;}.bb53abd9-9824-49f8-9a17-53cb0bd5ea73{fill:#66c7c7;}.fab01af3-b677-4b5a-bd11-799096806ee7{fill:#495077;}`)), __jsx("g", {
    id: "e5c4cfd0-40b4-40d6-bb31-ad4ec7feca4a",
    "data-name": "Layer 2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: undefined
  }, __jsx("g", {
    id: "b98491fc-f061-4c60-8d48-3e7a23579a18",
    "data-name": "Layer 1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: undefined
  }, __jsx("rect", {
    className: "b2702042-660f-4229-9679-b7e54bb63fed",
    x: "553.8",
    y: "316.3",
    width: "27.3",
    height: "34.25",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: undefined
  }), __jsx("rect", {
    className: "b2702042-660f-4229-9679-b7e54bb63fed",
    x: "612.6",
    y: "316.3",
    width: "27.3",
    height: "34.25",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: undefined
  }), __jsx("rect", {
    className: "b2702042-660f-4229-9679-b7e54bb63fed",
    x: "612.6",
    y: "250.4",
    width: "27.3",
    height: "34.25",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: undefined
  }), __jsx("rect", {
    className: "b2702042-660f-4229-9679-b7e54bb63fed",
    x: "553.8",
    y: "250.4",
    width: "27.3",
    height: "34.25",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: undefined
  }), __jsx("rect", {
    className: "b2702042-660f-4229-9679-b7e54bb63fed",
    x: "51.5",
    y: "316.3",
    width: "27.3",
    height: "34.25",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: undefined
  }), __jsx("rect", {
    className: "b2702042-660f-4229-9679-b7e54bb63fed",
    x: "110.2",
    y: "316.3",
    width: "27.3",
    height: "34.25",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: undefined
  }), __jsx("rect", {
    className: "b2702042-660f-4229-9679-b7e54bb63fed",
    x: "110.2",
    y: "250.4",
    width: "27.3",
    height: "34.25",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: undefined
  }), __jsx("rect", {
    className: "b2702042-660f-4229-9679-b7e54bb63fed",
    x: "51.5",
    y: "250.4",
    width: "27.3",
    height: "34.25",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: undefined
  }), __jsx("polygon", {
    className: "b2702042-660f-4229-9679-b7e54bb63fed",
    points: "250.5 191.3 254.8 354.7 209 354.7 213.4 191.3 250.5 191.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: undefined
  }), __jsx("polygon", {
    className: "b2702042-660f-4229-9679-b7e54bb63fed",
    points: "478.7 191.3 483 354.7 437.2 354.7 441.5 191.3 478.7 191.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: undefined
  }), __jsx("path", {
    className: "b7cb79e3-0cd2-4812-a958-e162587f4129",
    d: "M671.2,206V450.7H556.7V419H538.8V387.3H524V206ZM639.8,350.5V316.3H612.6v34.2Zm0-65.8V250.4H612.6v34.3Zm-58.7,65.8V316.3H553.8v34.2Zm0-65.8V250.4H553.8v34.3Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: undefined
  }), __jsx("polygon", {
    className: "bb53abd9-9824-49f8-9a17-53cb0bd5ea73",
    points: "524 206 524 387.3 496.5 387.3 496.5 354.7 483 354.7 478.7 191.3 496.5 191.3 496.5 158.8 524 158.8 524 206",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: undefined
  }), __jsx("polygon", {
    className: "b7cb79e3-0cd2-4812-a958-e162587f4129",
    points: "496.5 354.7 496.5 387.3 423.7 387.3 423.7 354.7 437.2 354.7 483 354.7 496.5 354.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: undefined
  }), __jsx("polygon", {
    className: "b7cb79e3-0cd2-4812-a958-e162587f4129",
    points: "496.5 158.8 496.5 191.3 478.7 191.3 441.5 191.3 423.6 191.3 423.6 158.8 496.5 158.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: undefined
  }), __jsx("path", {
    className: "fab01af3-b677-4b5a-bd11-799096806ee7",
    d: "M305.9,279.8a40.2,40.2,0,0,1,80.4,0V387.3H305.9V279.8Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: undefined
  }), __jsx("path", {
    className: "bb53abd9-9824-49f8-9a17-53cb0bd5ea73",
    d: "M305.9,387.3H268.4V354.7H254.8l-4.3-163.4h17.8V158.8H423.6v32.5h17.9l-4.3,163.4H423.7v32.6H386.3V279.8a40.2,40.2,0,0,0-80.4,0V387.3Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: undefined
  }), __jsx("polygon", {
    className: "b7cb79e3-0cd2-4812-a958-e162587f4129",
    points: "254.8 354.7 268.4 354.7 268.4 387.3 195.5 387.3 195.5 354.7 209 354.7 254.8 354.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: undefined
  }), __jsx("polygon", {
    className: "b7cb79e3-0cd2-4812-a958-e162587f4129",
    points: "268.3 158.8 268.3 191.3 250.5 191.3 213.4 191.3 195.4 191.3 195.4 158.8 268.3 158.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: undefined
  }), __jsx("polygon", {
    className: "bb53abd9-9824-49f8-9a17-53cb0bd5ea73",
    points: "213.4 191.3 209 354.7 195.5 354.7 195.5 387.3 168.1 387.3 168.1 342.1 168.2 206.2 168.1 206.2 168.1 206 168.1 158.8 195.4 158.8 195.4 191.3 213.4 191.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: undefined
  }), __jsx("path", {
    className: "b7cb79e3-0cd2-4812-a958-e162587f4129",
    d: "M168.1,206.2V387.3H153.1V419h-18v31.7l-114.4-.2L21.1,206H94.6ZM137.5,350.5V316.3H110.2v34.2Zm0-65.8V250.4H110.2v34.3ZM78.7,350.5V316.3H51.5v34.2Zm0-65.8V250.4H51.5v34.3Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: undefined
  }), __jsx("polygon", {
    className: "fab01af3-b677-4b5a-bd11-799096806ee7",
    points: "168.1 387.3 195.5 387.3 268.4 387.3 305.9 387.3 386.3 387.3 423.7 387.3 496.5 387.3 524 387.3 538.8 387.3 538.8 419 153.2 419 153.2 387.4 168 387.4 168 387.3 168.1 387.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: undefined
  }), __jsx("polygon", {
    className: "bb53abd9-9824-49f8-9a17-53cb0bd5ea73",
    points: "153.2 419 538.8 419 556.7 419 556.7 450.7 135.2 450.7 135.2 419.1 153.1 419.1 153.1 419 153.2 419",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: undefined
  }), __jsx("polygon", {
    className: "fab01af3-b677-4b5a-bd11-799096806ee7",
    points: "538.6 124.1 538.6 158.8 524 158.8 496.5 158.8 423.6 158.8 268.3 158.8 195.4 158.8 168.1 158.8 153.3 158.8 153.3 124.1 538.6 124.1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: undefined
  }), __jsx("path", {
    className: "fab01af3-b677-4b5a-bd11-799096806ee7",
    d: "M346,90.5a19.4,19.4,0,1,1,19.4-19.4A19.4,19.4,0,0,1,346,90.5Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: undefined
  }), __jsx("path", {
    className: "bb53abd9-9824-49f8-9a17-53cb0bd5ea73",
    d: "M326.6,71.1A19.4,19.4,0,1,0,346,51.7,19.4,19.4,0,0,0,326.6,71.1Zm212,53H153.3L345.9,0Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: undefined
  }), __jsx("rect", {
    className: "fab01af3-b677-4b5a-bd11-799096806ee7",
    y: "198",
    width: "168.1",
    height: "16.01",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: undefined
  }), __jsx("rect", {
    className: "fab01af3-b677-4b5a-bd11-799096806ee7",
    x: "524",
    y: "198",
    width: "168.1",
    height: "16.01",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: undefined
  })))),
  Megaphone: () => __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    "aria-labelledby": "megaphonedesc",
    viewBox: "0 0 723 489",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450
    },
    __self: undefined
  }, __jsx("desc", {
    id: "megaphonedesc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451
    },
    __self: undefined
  }, "A megaphone with shouting emphasis marks."), __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452
    },
    __self: undefined
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453
    },
    __self: undefined
  }, `.a{fill: #495077;}.b{fill: #f2d176;}`)), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455
    },
    __self: undefined
  }, __jsx("path", {
    className: "a",
    d: "M305.4,467.7a34.4,34.4,0,0,1-11.2-2L166.1,421.1c-17.4-6.1-31-25.3-31-43.6V330.6h23.8v46.9c0,8.3,7.2,18.4,15,21.2l128.2,44.6c2.3.8,4.4.9,5.5.1s1.8-2.7,1.8-5.2V391.3h23.7v46.9c0,10.3-4.3,19.3-11.8,24.6A27.7,27.7,0,0,1,305.4,467.7Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456
    },
    __self: undefined
  }), __jsx("rect", {
    className: "a",
    y: "167.3",
    width: "83.4",
    height: "147.02",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457
    },
    __self: undefined
  }), __jsx("path", {
    className: "a",
    d: "M570.8,32.9V455.7a32.9,32.9,0,1,1-65.7,0V32.9a32.9,32.9,0,1,1,65.7,0Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458
    },
    __self: undefined
  }), __jsx("polygon", {
    className: "b",
    points: "505.1 455.7 505.1 461.4 321.2 397.2 147 336.5 83.4 314.3 83.4 167.3 505.1 27.2 505.1 32.9 505.1 455.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459
    },
    __self: undefined
  }), __jsx("rect", {
    className: "b",
    x: "635.9",
    y: "235.4",
    width: "86.8",
    height: "17.81",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460
    },
    __self: undefined
  }), __jsx("rect", {
    className: "b",
    x: "604.5",
    y: "119.7",
    width: "86.7",
    height: "17.81",
    transform: "translate(98.8 495.8) rotate(-45)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461
    },
    __self: undefined
  }), __jsx("rect", {
    className: "b",
    x: "639",
    y: "316.6",
    width: "17.8",
    height: "86.74",
    transform: "translate(-64.8 563.6) rotate(-45)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462
    },
    __self: undefined
  }))),
  Microphone: () => __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 302 454",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467
    },
    __self: undefined
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467
    },
    __self: undefined
  }, `.baa8d554-ba0e-4c84-97f2-df2b33d9ef7f{fill:#495077;}.a11bd13b-f1f2-40e3-bd71-cccfc06732e9{fill:#f68e4b;}`)), __jsx("g", {
    id: "b656c3de-d75b-4964-9bc7-bd64b74c6c41",
    "data-name": "Layer 2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467
    },
    __self: undefined
  }, __jsx("g", {
    id: "bae6103c-e54c-4ef8-bd8e-9689790f866a",
    "data-name": "Layer 1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467
    },
    __self: undefined
  }, __jsx("path", {
    className: "baa8d554-ba0e-4c84-97f2-df2b33d9ef7f",
    d: "M247,162.5v68.7a64,64,0,0,1-.5,8.8A93.8,93.8,0,0,1,153,325h-4a93.8,93.8,0,0,1-93.5-85,64,64,0,0,1-.5-8.8V93.8A93.8,93.8,0,0,1,148.8,0H153a93.8,93.8,0,0,1,94,93.8Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467
    },
    __self: undefined
  }), __jsx("rect", {
    className: "a11bd13b-f1f2-40e3-bd71-cccfc06732e9",
    x: "55",
    y: "88",
    width: "66",
    height: "12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467
    },
    __self: undefined
  }), __jsx("rect", {
    className: "a11bd13b-f1f2-40e3-bd71-cccfc06732e9",
    x: "55",
    y: "234",
    width: "66",
    height: "12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467
    },
    __self: undefined
  }), __jsx("rect", {
    className: "a11bd13b-f1f2-40e3-bd71-cccfc06732e9",
    x: "181",
    y: "88",
    width: "66",
    height: "12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467
    },
    __self: undefined
  }), __jsx("rect", {
    className: "a11bd13b-f1f2-40e3-bd71-cccfc06732e9",
    x: "181",
    y: "234",
    width: "66",
    height: "12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467
    },
    __self: undefined
  }), __jsx("path", {
    className: "a11bd13b-f1f2-40e3-bd71-cccfc06732e9",
    d: "M153.2,380h-4.4A148.8,148.8,0,0,1,0,231.2V162.1A6.1,6.1,0,0,1,6.1,156H121v13H12v62.4A136.7,136.7,0,0,0,148.6,368h4.8A136.7,136.7,0,0,0,290,231.4V169H181V156H295.9a6.1,6.1,0,0,1,6.1,6.1v69.1A148.8,148.8,0,0,1,153.2,380Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467
    },
    __self: undefined
  }), __jsx("rect", {
    className: "a11bd13b-f1f2-40e3-bd71-cccfc06732e9",
    x: "145",
    y: "374",
    width: "12",
    height: "74",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467
    },
    __self: undefined
  }), __jsx("rect", {
    className: "a11bd13b-f1f2-40e3-bd71-cccfc06732e9",
    x: "69",
    y: "442",
    width: "164",
    height: "12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467
    },
    __self: undefined
  })))),
  Geo1: () => __jsx("svg", {
    id: "a8874b01-4030-4c40-902f-a062f11e3c65",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 754 561",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471
    },
    __self: undefined
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472
    },
    __self: undefined
  }, `.b59622d0-74f9-43c1-8389-4bbf3998df63,.ebe73236-3c77-418c-af12-d95e3faf618f,.efab874e-8085-4b78-a1be-e3460ff19c19{opacity: 0.43;}.b59622d0-74f9-43c1-8389-4bbf3998df63,.bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb,.bf9ff892-b36c-41c6-8da8-92966a592fdf,.ebe73236-3c77-418c-af12-d95e3faf618f{fill: #7d90ad;}.bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb,.ebe73236-3c77-418c-af12-d95e3faf618f{fill-rule: evenodd;}`)), __jsx("g", {
    className: "efab874e-8085-4b78-a1be-e3460ff19c19",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474
    },
    __self: undefined
  }, __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M593.588,535.838a4.663,4.663,0,1,1,4.662,4.663A4.663,4.663,0,0,1,593.588,535.838Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M538.073,508.081a4.663,4.663,0,1,1,4.663,4.662A4.662,4.662,0,0,1,538.073,508.081Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M593.588,508.08a4.663,4.663,0,1,1,4.663,4.663A4.662,4.662,0,0,1,593.588,508.08Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M649.1,508.08a4.663,4.663,0,1,1,4.663,4.663A4.663,4.663,0,0,1,649.1,508.08Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M538.074,480.322a4.662,4.662,0,1,1,4.662,4.663A4.661,4.661,0,0,1,538.074,480.322Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M593.588,480.323a4.663,4.663,0,1,1,4.662,4.662A4.664,4.664,0,0,1,593.588,480.323Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M649.1,480.322a4.663,4.663,0,1,1,4.663,4.663A4.663,4.663,0,0,1,649.1,480.322Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M482.557,452.565a4.663,4.663,0,1,1,4.663,4.663A4.663,4.663,0,0,1,482.557,452.565Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M538.073,452.565a4.663,4.663,0,1,1,4.663,4.663A4.662,4.662,0,0,1,538.073,452.565Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M593.588,452.565a4.663,4.663,0,1,1,4.663,4.663A4.663,4.663,0,0,1,593.588,452.565Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M649.1,452.565a4.663,4.663,0,1,1,4.663,4.663A4.663,4.663,0,0,1,649.1,452.565Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M704.618,452.565a4.664,4.664,0,1,1,4.664,4.663A4.664,4.664,0,0,1,704.618,452.565Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M482.557,424.808a4.663,4.663,0,1,1,4.663,4.662A4.663,4.663,0,0,1,482.557,424.808Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M538.073,424.808a4.663,4.663,0,1,1,4.663,4.662A4.662,4.662,0,0,1,538.073,424.808Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M593.588,424.807a4.663,4.663,0,1,1,4.663,4.663A4.662,4.662,0,0,1,593.588,424.807Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M649.1,424.808a4.663,4.663,0,1,1,4.663,4.662A4.662,4.662,0,0,1,649.1,424.808Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M704.618,424.808a4.664,4.664,0,1,1,4.664,4.662A4.663,4.663,0,0,1,704.618,424.808Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M482.557,397.05a4.663,4.663,0,1,1,4.664,4.662A4.663,4.663,0,0,1,482.557,397.05Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M538.073,397.05a4.663,4.663,0,1,1,4.663,4.663A4.662,4.662,0,0,1,538.073,397.05Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M593.588,397.05a4.663,4.663,0,1,1,4.663,4.662A4.663,4.663,0,0,1,593.588,397.05Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M649.1,397.05a4.663,4.663,0,1,1,4.664,4.663A4.663,4.663,0,0,1,649.1,397.05Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M704.618,397.05a4.664,4.664,0,1,1,4.664,4.662A4.664,4.664,0,0,1,704.618,397.05Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M538.074,369.292a4.662,4.662,0,1,1,4.662,4.663A4.66,4.66,0,0,1,538.074,369.292Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M593.588,369.292a4.663,4.663,0,1,1,4.662,4.663A4.663,4.663,0,0,1,593.588,369.292Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M649.1,369.292a4.663,4.663,0,1,1,4.663,4.663A4.662,4.662,0,0,1,649.1,369.292Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M538.073,341.534a4.663,4.663,0,1,1,4.663,4.663A4.663,4.663,0,0,1,538.073,341.534Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M593.588,341.534a4.663,4.663,0,1,1,4.663,4.663A4.663,4.663,0,0,1,593.588,341.534Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M649.1,341.534a4.663,4.663,0,1,1,4.663,4.663A4.664,4.664,0,0,1,649.1,341.534Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M593.588,313.776a4.663,4.663,0,1,1,4.662,4.664A4.663,4.663,0,0,1,593.588,313.776Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M565.83,521.959a4.663,4.663,0,1,1,4.663,4.663A4.664,4.664,0,0,1,565.83,521.959Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M621.346,521.959a4.663,4.663,0,1,1,4.662,4.663A4.663,4.663,0,0,1,621.346,521.959Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M510.315,494.2a4.663,4.663,0,1,1,4.663,4.663A4.663,4.663,0,0,1,510.315,494.2Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M565.83,494.2a4.663,4.663,0,1,1,4.663,4.664A4.663,4.663,0,0,1,565.83,494.2Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M621.345,494.2a4.663,4.663,0,1,1,4.663,4.662A4.663,4.663,0,0,1,621.345,494.2Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M676.861,494.2a4.663,4.663,0,1,1,4.663,4.663A4.663,4.663,0,0,1,676.861,494.2Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M510.315,466.443a4.663,4.663,0,1,1,4.663,4.664A4.663,4.663,0,0,1,510.315,466.443Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M565.83,466.443a4.663,4.663,0,1,1,4.663,4.664A4.664,4.664,0,0,1,565.83,466.443Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M621.346,466.443a4.663,4.663,0,1,1,4.662,4.664A4.661,4.661,0,0,1,621.346,466.443Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M676.861,466.443a4.663,4.663,0,1,1,4.663,4.664A4.663,4.663,0,0,1,676.861,466.443Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M510.315,438.686a4.663,4.663,0,1,1,4.663,4.663A4.663,4.663,0,0,1,510.315,438.686Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M565.831,438.686a4.663,4.663,0,1,1,4.662,4.663A4.663,4.663,0,0,1,565.831,438.686Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M621.345,438.686a4.663,4.663,0,1,1,4.663,4.663A4.663,4.663,0,0,1,621.345,438.686Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M676.861,438.686a4.663,4.663,0,1,1,4.663,4.663A4.663,4.663,0,0,1,676.861,438.686Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M510.315,410.928a4.663,4.663,0,1,1,4.663,4.663A4.665,4.665,0,0,1,510.315,410.928Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M565.831,410.928a4.663,4.663,0,1,1,4.662,4.663A4.662,4.662,0,0,1,565.831,410.928Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M621.345,410.928a4.663,4.663,0,1,1,4.663,4.663A4.664,4.664,0,0,1,621.345,410.928Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M676.861,410.928a4.663,4.663,0,1,1,4.662,4.663A4.663,4.663,0,0,1,676.861,410.928Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M510.315,383.171a4.663,4.663,0,1,1,4.663,4.663A4.663,4.663,0,0,1,510.315,383.171Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M565.83,383.171a4.663,4.663,0,1,1,4.663,4.663A4.665,4.665,0,0,1,565.83,383.171Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M621.346,383.171a4.663,4.663,0,1,1,4.662,4.662A4.662,4.662,0,0,1,621.346,383.171Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M676.861,383.171a4.663,4.663,0,1,1,4.663,4.662A4.663,4.663,0,0,1,676.861,383.171Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M510.315,355.413a4.663,4.663,0,1,1,4.663,4.663A4.663,4.663,0,0,1,510.315,355.413Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M565.831,355.413a4.663,4.663,0,1,1,4.662,4.663A4.663,4.663,0,0,1,565.831,355.413Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M621.345,355.413a4.663,4.663,0,1,1,4.663,4.663A4.664,4.664,0,0,1,621.345,355.413Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M676.861,355.413a4.663,4.663,0,1,1,4.662,4.663A4.663,4.663,0,0,1,676.861,355.413Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M565.83,327.656a4.663,4.663,0,1,1,4.663,4.662A4.665,4.665,0,0,1,565.83,327.656Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M621.346,327.656a4.663,4.663,0,1,1,4.662,4.662A4.662,4.662,0,0,1,621.346,327.656Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531
    },
    __self: undefined
  })), __jsx("g", {
    className: "efab874e-8085-4b78-a1be-e3460ff19c19",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533
    },
    __self: undefined
  }, __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M156.086,294.756a4.663,4.663,0,1,1,4.662,4.662A4.663,4.663,0,0,1,156.086,294.756Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M100.571,267a4.663,4.663,0,1,1,4.663,4.663A4.663,4.663,0,0,1,100.571,267Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M156.086,267a4.663,4.663,0,1,1,4.663,4.663A4.663,4.663,0,0,1,156.086,267Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M211.6,267a4.663,4.663,0,1,1,4.663,4.663A4.664,4.664,0,0,1,211.6,267Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M100.572,239.24a4.662,4.662,0,1,1,4.662,4.662A4.663,4.663,0,0,1,100.572,239.24Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M156.086,239.24a4.663,4.663,0,1,1,4.662,4.662A4.663,4.663,0,0,1,156.086,239.24Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M211.6,239.24a4.663,4.663,0,1,1,4.663,4.662A4.664,4.664,0,0,1,211.6,239.24Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M45.056,211.482a4.663,4.663,0,1,1,4.662,4.663A4.663,4.663,0,0,1,45.056,211.482Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M100.571,211.482a4.663,4.663,0,1,1,4.663,4.663A4.663,4.663,0,0,1,100.571,211.482Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M156.086,211.482a4.663,4.663,0,1,1,4.663,4.663A4.663,4.663,0,0,1,156.086,211.482Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M211.6,211.482a4.663,4.663,0,1,1,4.663,4.663A4.663,4.663,0,0,1,211.6,211.482Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M267.117,211.482a4.663,4.663,0,1,1,4.663,4.663A4.663,4.663,0,0,1,267.117,211.482Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M45.056,183.725a4.663,4.663,0,1,1,4.662,4.662A4.662,4.662,0,0,1,45.056,183.725Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M100.571,183.725a4.663,4.663,0,1,1,4.663,4.662A4.663,4.663,0,0,1,100.571,183.725Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M156.086,183.725a4.663,4.663,0,1,1,4.663,4.662A4.663,4.663,0,0,1,156.086,183.725Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M211.6,183.725a4.663,4.663,0,1,1,4.663,4.662A4.663,4.663,0,0,1,211.6,183.725Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M267.117,183.725a4.663,4.663,0,1,1,4.663,4.662A4.663,4.663,0,0,1,267.117,183.725Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M45.056,155.967a4.663,4.663,0,1,1,4.663,4.663A4.663,4.663,0,0,1,45.056,155.967Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M100.571,155.967a4.663,4.663,0,1,1,4.663,4.663A4.663,4.663,0,0,1,100.571,155.967Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M156.086,155.967a4.663,4.663,0,1,1,4.663,4.663A4.663,4.663,0,0,1,156.086,155.967Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M211.6,155.967a4.663,4.663,0,1,1,4.664,4.663A4.663,4.663,0,0,1,211.6,155.967Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M267.117,155.967a4.663,4.663,0,1,1,4.663,4.663A4.663,4.663,0,0,1,267.117,155.967Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M100.572,128.21a4.662,4.662,0,1,1,4.662,4.662A4.661,4.661,0,0,1,100.572,128.21Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M156.086,128.209a4.663,4.663,0,1,1,4.662,4.663A4.664,4.664,0,0,1,156.086,128.209Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M211.6,128.21a4.663,4.663,0,1,1,4.663,4.662A4.662,4.662,0,0,1,211.6,128.21Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M100.571,100.452a4.663,4.663,0,1,1,4.663,4.663A4.663,4.663,0,0,1,100.571,100.452Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M156.086,100.452a4.663,4.663,0,1,1,4.663,4.663A4.663,4.663,0,0,1,156.086,100.452Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 560
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M211.6,100.452a4.663,4.663,0,1,1,4.663,4.663A4.663,4.663,0,0,1,211.6,100.452Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M156.086,72.694a4.663,4.663,0,1,1,4.662,4.663A4.662,4.662,0,0,1,156.086,72.694Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M128.328,280.876a4.663,4.663,0,1,1,4.663,4.663A4.664,4.664,0,0,1,128.328,280.876Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M183.844,280.876a4.663,4.663,0,1,1,4.662,4.663A4.663,4.663,0,0,1,183.844,280.876Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M72.813,253.119a4.664,4.664,0,1,1,4.663,4.663A4.663,4.663,0,0,1,72.813,253.119Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M128.328,253.119a4.663,4.663,0,1,1,4.664,4.663A4.663,4.663,0,0,1,128.328,253.119Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M183.843,253.119a4.664,4.664,0,1,1,4.663,4.663A4.663,4.663,0,0,1,183.843,253.119Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M239.359,253.119a4.663,4.663,0,1,1,4.663,4.663A4.663,4.663,0,0,1,239.359,253.119Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 568
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M72.813,225.361a4.664,4.664,0,1,1,4.663,4.663A4.663,4.663,0,0,1,72.813,225.361Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M128.328,225.361a4.663,4.663,0,1,1,4.664,4.663A4.665,4.665,0,0,1,128.328,225.361Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 570
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M183.844,225.361a4.663,4.663,0,1,1,4.662,4.663A4.662,4.662,0,0,1,183.844,225.361Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M239.359,225.361a4.663,4.663,0,1,1,4.663,4.663A4.663,4.663,0,0,1,239.359,225.361Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M72.813,197.6a4.664,4.664,0,1,1,4.663,4.663A4.662,4.662,0,0,1,72.813,197.6Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 573
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M128.329,197.6a4.663,4.663,0,1,1,4.663,4.662A4.661,4.661,0,0,1,128.329,197.6Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M183.843,197.6a4.663,4.663,0,1,1,4.663,4.662A4.665,4.665,0,0,1,183.843,197.6Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M239.359,197.6a4.663,4.663,0,1,1,4.663,4.664A4.663,4.663,0,0,1,239.359,197.6Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M72.813,169.846a4.664,4.664,0,1,1,4.663,4.663A4.663,4.663,0,0,1,72.813,169.846Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M128.329,169.846a4.663,4.663,0,1,1,4.663,4.663A4.662,4.662,0,0,1,128.329,169.846Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 578
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M183.843,169.846a4.663,4.663,0,1,1,4.663,4.663A4.663,4.663,0,0,1,183.843,169.846Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 579
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M239.359,169.846a4.663,4.663,0,1,1,4.663,4.663A4.663,4.663,0,0,1,239.359,169.846Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M72.813,142.089a4.664,4.664,0,1,1,4.663,4.662A4.664,4.664,0,0,1,72.813,142.089Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 581
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M128.328,142.089a4.663,4.663,0,1,1,4.664,4.662A4.665,4.665,0,0,1,128.328,142.089Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 582
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M183.844,142.089a4.663,4.663,0,1,1,4.662,4.662A4.662,4.662,0,0,1,183.844,142.089Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 583
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M239.359,142.089a4.663,4.663,0,1,1,4.663,4.662A4.664,4.664,0,0,1,239.359,142.089Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 584
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M72.813,114.33a4.664,4.664,0,1,1,4.663,4.663A4.664,4.664,0,0,1,72.813,114.33Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M128.329,114.33a4.663,4.663,0,1,1,4.663,4.663A4.663,4.663,0,0,1,128.329,114.33Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M183.843,114.33a4.663,4.663,0,1,1,4.663,4.664A4.664,4.664,0,0,1,183.843,114.33Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M239.359,114.33a4.663,4.663,0,1,1,4.663,4.663A4.663,4.663,0,0,1,239.359,114.33Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M128.328,86.573a4.663,4.663,0,1,1,4.664,4.663A4.665,4.665,0,0,1,128.328,86.573Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 589
    },
    __self: undefined
  }), __jsx("path", {
    className: "bea1a5c5-cc62-4cf7-9558-434aa6f2d0fb",
    d: "M183.844,86.573a4.663,4.663,0,1,1,4.662,4.662A4.662,4.662,0,0,1,183.844,86.573Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 590
    },
    __self: undefined
  })), __jsx("path", {
    className: "b59622d0-74f9-43c1-8389-4bbf3998df63",
    d: "M123.464,310.3H34.013a1.914,1.914,0,0,1-1.657-2.87l44.726-77.467a1.914,1.914,0,0,1,3.315,0l44.724,77.467a1.914,1.914,0,0,1-1.657,2.87Zm-86.136-3.828h82.821l-41.41-71.725Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 592
    },
    __self: undefined
  }), __jsx("path", {
    className: "b59622d0-74f9-43c1-8389-4bbf3998df63",
    d: "M656.992,147.686h0a1.436,1.436,0,0,1-1.244-.718l-23.5-40.695a1.435,1.435,0,0,1,1.244-2.153h46.991a1.435,1.435,0,0,1,1.243,2.153l-23.5,40.7A1.437,1.437,0,0,1,656.992,147.686Zm-21.01-40.7,21.01,36.39L678,106.991Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593
    },
    __self: undefined
  }), __jsx("path", {
    className: "b59622d0-74f9-43c1-8389-4bbf3998df63",
    d: "M177.385,439.2a1.434,1.434,0,0,1-1.243-.718l-17.623-30.521a1.436,1.436,0,0,1,1.244-2.153h35.244a1.436,1.436,0,0,1,1.243,2.153l-17.622,30.521A1.434,1.434,0,0,1,177.385,439.2Zm-15.137-30.522L177.385,434.9l15.137-26.217Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 594
    },
    __self: undefined
  }), __jsx("path", {
    className: "b59622d0-74f9-43c1-8389-4bbf3998df63",
    d: "M665.857,191.314a9.378,9.378,0,0,1-4.969-1.413l-7.185-4.482a5.606,5.606,0,0,0-5.89,0l-7.184,4.483a9.454,9.454,0,0,1-9.939,0l-7.185-4.483a5.6,5.6,0,0,0-5.89,0L610.43,189.9a9.443,9.443,0,0,1-9.939,0,1.913,1.913,0,0,1,2.026-3.246,5.6,5.6,0,0,0,5.888,0l7.185-4.483a9.451,9.451,0,0,1,9.94,0l7.185,4.482a5.592,5.592,0,0,0,5.888,0l7.185-4.482a9.451,9.451,0,0,1,9.94,0l7.185,4.482a5.591,5.591,0,0,0,5.889,0l7.184-4.483a9.443,9.443,0,0,1,9.939,0l7.186,4.482a5.6,5.6,0,0,0,5.889,0l7.185-4.483a1.913,1.913,0,0,1,2.025,3.247l-7.185,4.483a9.456,9.456,0,0,1-9.939,0l-7.186-4.483a5.6,5.6,0,0,0-5.888,0l-7.185,4.483A9.387,9.387,0,0,1,665.857,191.314Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 595
    },
    __self: undefined
  }), __jsx("path", {
    className: "b59622d0-74f9-43c1-8389-4bbf3998df63",
    d: "M23.378,478.116a5.3,5.3,0,0,1-2.806-.8l-3.254-2.03a1.5,1.5,0,0,0-1.56,0L12.5,477.318a5.329,5.329,0,0,1-5.609,0,1.913,1.913,0,1,1,2.025-3.246,1.506,1.506,0,0,0,1.559,0l3.255-2.031a5.333,5.333,0,0,1,5.61,0l3.255,2.03a1.5,1.5,0,0,0,1.559,0l3.255-2.031a5.331,5.331,0,0,1,5.61,0l3.254,2.03a1.5,1.5,0,0,0,1.56,0l3.255-2.031a5.329,5.329,0,0,1,5.609,0l3.256,2.03a1.5,1.5,0,0,0,1.561,0l3.253-2.03a1.913,1.913,0,0,1,2.025,3.247l-3.254,2.031a5.339,5.339,0,0,1-5.611,0l-3.255-2.031a1.5,1.5,0,0,0-1.558,0l-3.256,2.031a5.335,5.335,0,0,1-5.61,0L31,475.287a1.5,1.5,0,0,0-1.56,0l-3.254,2.031A5.316,5.316,0,0,1,23.378,478.116Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 596
    },
    __self: undefined
  }), __jsx("path", {
    className: "b59622d0-74f9-43c1-8389-4bbf3998df63",
    d: "M293.889,69.5a1.912,1.912,0,0,1-1.625-.9l-2.819-4.518a6.664,6.664,0,0,1,0-7l2.82-4.519a2.8,2.8,0,0,0,0-2.949l-2.819-4.52a6.664,6.664,0,0,1,0-7l2.82-4.518a2.806,2.806,0,0,0,0-2.951L289.445,26.1a6.665,6.665,0,0,1,0-7l2.82-4.518a2.808,2.808,0,0,0,0-2.952l-2.819-4.518a6.662,6.662,0,0,1,0-7,1.914,1.914,0,0,1,3.249,2.024,2.81,2.81,0,0,0,0,2.953L295.511,9.6a6.659,6.659,0,0,1,0,7l-2.819,4.518a2.812,2.812,0,0,0,0,2.953l2.818,4.516a6.659,6.659,0,0,1,0,7l-2.819,4.517a2.812,2.812,0,0,0,0,2.953l2.818,4.518a6.649,6.649,0,0,1,0,7L292.692,59.1a2.812,2.812,0,0,0,0,2.953l2.818,4.517a1.914,1.914,0,0,1-1.622,2.927Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597
    },
    __self: undefined
  }), __jsx("g", {
    className: "efab874e-8085-4b78-a1be-e3460ff19c19",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598
    },
    __self: undefined
  }, __jsx("path", {
    className: "bf9ff892-b36c-41c6-8da8-92966a592fdf",
    d: "M479.789,280.711a1.435,1.435,0,0,1-1.435-1.435V252.917a1.436,1.436,0,0,1,2.871,0v26.359A1.435,1.435,0,0,1,479.789,280.711Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 599
    },
    __self: undefined
  }), __jsx("path", {
    className: "bf9ff892-b36c-41c6-8da8-92966a592fdf",
    d: "M492.969,267.531h-26.36a1.435,1.435,0,1,1,0-2.87h26.36a1.435,1.435,0,1,1,0,2.87Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 600
    },
    __self: undefined
  })), __jsx("g", {
    className: "efab874e-8085-4b78-a1be-e3460ff19c19",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 602
    },
    __self: undefined
  }, __jsx("path", {
    className: "bf9ff892-b36c-41c6-8da8-92966a592fdf",
    d: "M7.714,96.6A1.436,1.436,0,0,1,6.7,94.151L25.337,75.512a1.435,1.435,0,0,1,2.031,2.029L8.729,96.18A1.433,1.433,0,0,1,7.714,96.6Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 603
    },
    __self: undefined
  }), __jsx("path", {
    className: "bf9ff892-b36c-41c6-8da8-92966a592fdf",
    d: "M26.353,96.6a1.435,1.435,0,0,1-1.016-.421L6.7,77.541a1.435,1.435,0,0,1,2.03-2.029L27.368,94.151a1.436,1.436,0,0,1-1.015,2.45Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 604
    },
    __self: undefined
  })), __jsx("circle", {
    className: "b59622d0-74f9-43c1-8389-4bbf3998df63",
    cx: "83.007",
    cy: "417.971",
    r: "8.293",
    transform: "translate(-152.892 63.089) rotate(-22.381)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 606
    },
    __self: undefined
  }), __jsx("path", {
    className: "ebe73236-3c77-418c-af12-d95e3faf618f",
    d: "M603.037,54.454a8.294,8.294,0,1,1-8.294-8.293A8.294,8.294,0,0,1,603.037,54.454Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 607
    },
    __self: undefined
  }), __jsx("path", {
    className: "ebe73236-3c77-418c-af12-d95e3faf618f",
    d: "M110.836,561.029H54.768a56.068,56.068,0,0,1,112.135,0Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 608
    },
    __self: undefined
  }), __jsx("path", {
    className: "ebe73236-3c77-418c-af12-d95e3faf618f",
    d: "M756.05,54.454v56.068a56.068,56.068,0,1,1,0-112.135Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609
    },
    __self: undefined
  })),
  Geo2: () => __jsx("svg", {
    id: "f1a526b9-23e3-4180-a46c-b6fe293abb2b",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 754.462 560.972",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 613
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 614
    },
    __self: undefined
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 615
    },
    __self: undefined
  }, `.abc2cb89-8823-4805-b301-9788485037ed,.b373007d-6315-4fd2-b437-4146b8d1d234,.bba218db-b7be-4172-afc7-45e358b462cf,.f7f41bc9-6ae9-4bd5-9718-7ef259e73a21{fill: #484f77;}.a9c0af6b-e730-4b95-bac4-dea2987fddea,.b373007d-6315-4fd2-b437-4146b8d1d234,.bba218db-b7be-4172-afc7-45e358b462cf{opacity: 0.43;}.bba218db-b7be-4172-afc7-45e358b462cf,.f7f41bc9-6ae9-4bd5-9718-7ef259e73a21{fill-rule:evenodd;}`)), __jsx("path", {
    className: "b373007d-6315-4fd2-b437-4146b8d1d234",
    d: "M634.919,243h91.028a1.955,1.955,0,0,1,1.687.958,1.888,1.888,0,0,1,0,1.913l-45.515,77.466a1.965,1.965,0,0,1-3.373,0l-45.514-77.466a1.888,1.888,0,0,1,0-1.913A1.956,1.956,0,0,1,634.919,243Zm87.655,4H638.292l42.14,71.726Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 618
    },
    __self: undefined
  }), __jsx("path", {
    className: "b373007d-6315-4fd2-b437-4146b8d1d234",
    d: "M91.98,405.438h0a1.466,1.466,0,0,1,1.265.718l23.909,40.695a1.415,1.415,0,0,1,0,1.436,1.465,1.465,0,0,1-1.265.717H68.069a1.466,1.466,0,0,1-1.265-.717,1.419,1.419,0,0,1,0-1.436l23.911-40.695A1.466,1.466,0,0,1,91.98,405.438ZM113.36,447l-21.38-36.39L70.6,447Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 619
    },
    __self: undefined
  }), __jsx("path", {
    className: "b373007d-6315-4fd2-b437-4146b8d1d234",
    d: "M580.047,114.612a1.467,1.467,0,0,1,1.265.718l17.933,30.521a1.419,1.419,0,0,1,0,1.436,1.466,1.466,0,0,1-1.265.717H562.114a1.468,1.468,0,0,1-1.266-.717,1.419,1.419,0,0,1,0-1.436l17.933-30.521A1.469,1.469,0,0,1,580.047,114.612ZM595.45,145l-15.4-26.216L564.643,145Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 620
    },
    __self: undefined
  }), __jsx("path", {
    className: "b373007d-6315-4fd2-b437-4146b8d1d234",
    d: "M82.958,362.207a9.671,9.671,0,0,1,5.057,1.414l7.311,4.481a5.786,5.786,0,0,0,5.994,0l7.311-4.482a9.762,9.762,0,0,1,10.115,0l7.311,4.482a5.782,5.782,0,0,0,5.994,0l7.311-4.482a9.753,9.753,0,0,1,10.115,0,1.894,1.894,0,0,1,.621,2.636,1.965,1.965,0,0,1-2.682.61,5.782,5.782,0,0,0-5.993,0l-7.311,4.483a9.766,9.766,0,0,1-10.116,0l-7.311-4.482a5.778,5.778,0,0,0-5.993,0l-7.311,4.482a9.764,9.764,0,0,1-10.116,0l-7.311-4.482a5.773,5.773,0,0,0-5.993,0L72.65,371.35a9.751,9.751,0,0,1-10.114,0l-7.313-4.481a5.783,5.783,0,0,0-5.992,0l-7.312,4.483a1.967,1.967,0,0,1-2.682-.611,1.9,1.9,0,0,1,.621-2.637l7.312-4.483a9.769,9.769,0,0,1,10.114,0L64.6,368.1a5.778,5.778,0,0,0,5.992,0l7.312-4.484A9.683,9.683,0,0,1,82.958,362.207Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 621
    },
    __self: undefined
  }), __jsx("path", {
    className: "b373007d-6315-4fd2-b437-4146b8d1d234",
    d: "M736.77,75.406a5.46,5.46,0,0,1,2.855.8l3.312,2.029a1.549,1.549,0,0,0,1.587,0l3.313-2.031a5.5,5.5,0,0,1,5.708,0,1.892,1.892,0,0,1,.621,2.636,1.965,1.965,0,0,1-2.682.61,1.554,1.554,0,0,0-1.586,0l-3.313,2.031a5.509,5.509,0,0,1-5.709,0l-3.312-2.031a1.554,1.554,0,0,0-1.587,0l-3.311,2.031a5.508,5.508,0,0,1-5.71,0l-3.311-2.03a1.556,1.556,0,0,0-1.588,0l-3.312,2.031a5.5,5.5,0,0,1-5.708,0l-3.313-2.03a1.555,1.555,0,0,0-1.589,0l-3.31,2.03a1.966,1.966,0,0,1-2.682-.61,1.892,1.892,0,0,1,.621-2.636l3.311-2.031a5.513,5.513,0,0,1,5.71,0l3.313,2.03a1.55,1.55,0,0,0,1.586,0L720,76.2a5.515,5.515,0,0,1,5.71,0l3.311,2.03a1.551,1.551,0,0,0,1.588,0l3.311-2.031A5.48,5.48,0,0,1,736.77,75.406Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 622
    },
    __self: undefined
  }), __jsx("path", {
    className: "b373007d-6315-4fd2-b437-4146b8d1d234",
    d: "M201.487,472.213a1.954,1.954,0,0,1,1.653.9l2.868,4.518a6.567,6.567,0,0,1,0,7l-2.87,4.518a2.762,2.762,0,0,0,0,2.95l2.868,4.52a6.563,6.563,0,0,1,0,7l-2.87,4.519a2.764,2.764,0,0,0,0,2.951l2.868,4.518a6.565,6.565,0,0,1,0,7l-2.87,4.519a2.764,2.764,0,0,0,0,2.951l2.868,4.518a6.565,6.565,0,0,1,0,7,1.969,1.969,0,0,1-2.684.612,1.9,1.9,0,0,1-.622-2.636,2.769,2.769,0,0,0,0-2.954l-2.868-4.516a6.56,6.56,0,0,1,0-7.005l2.869-4.518a2.768,2.768,0,0,0,0-2.952l-2.868-4.517a6.557,6.557,0,0,1,0-7l2.869-4.518a2.77,2.77,0,0,0,0-2.953l-2.868-4.518a6.551,6.551,0,0,1,0-7l2.869-4.518a2.77,2.77,0,0,0,0-2.953l-2.868-4.516a1.894,1.894,0,0,1,.621-2.637A1.961,1.961,0,0,1,201.487,472.213Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 623
    },
    __self: undefined
  }), __jsx("g", {
    className: "a9c0af6b-e730-4b95-bac4-dea2987fddea",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 624
    },
    __self: undefined
  }, __jsx("path", {
    className: "abc2cb89-8823-4805-b301-9788485037ed",
    d: "M272.067,272.158a1.513,1.513,0,0,1,1.526,1.5v27.536a1.526,1.526,0,0,1-3.052,0V273.657A1.513,1.513,0,0,1,272.067,272.158Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 625
    },
    __self: undefined
  }), __jsx("path", {
    className: "abc2cb89-8823-4805-b301-9788485037ed",
    d: "M258.29,286h28.035a1.5,1.5,0,1,1,0,3H258.29a1.5,1.5,0,1,1,0-3Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 626
    },
    __self: undefined
  })), __jsx("g", {
    className: "a9c0af6b-e730-4b95-bac4-dea2987fddea",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 628
    },
    __self: undefined
  }, __jsx("path", {
    className: "abc2cb89-8823-4805-b301-9788485037ed",
    d: "M752.711,456.921a1.473,1.473,0,0,1,1.033.421,1.418,1.418,0,0,1,0,2.029L734.776,478.01a1.48,1.48,0,0,1-2.066,0,1.419,1.419,0,0,1,0-2.03l18.967-18.638A1.473,1.473,0,0,1,752.711,456.921Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 629
    },
    __self: undefined
  }), __jsx("path", {
    className: "abc2cb89-8823-4805-b301-9788485037ed",
    d: "M733.743,456.921a1.473,1.473,0,0,1,1.033.421l18.968,18.638a1.419,1.419,0,0,1,0,2.03,1.482,1.482,0,0,1-2.067,0L732.71,459.371a1.418,1.418,0,0,1,0-2.029A1.473,1.473,0,0,1,733.743,456.921Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 630
    },
    __self: undefined
  })), __jsx("ellipse", {
    className: "b373007d-6315-4fd2-b437-4146b8d1d234",
    cx: "676.09",
    cy: "135.551",
    rx: "8.44",
    ry: "8.293",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 632
    },
    __self: undefined
  }), __jsx("path", {
    className: "bba218db-b7be-4172-afc7-45e358b462cf",
    d: "M146.886,499.067a8.441,8.441,0,1,1,8.44,8.294A8.368,8.368,0,0,1,146.886,499.067Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 633
    },
    __self: undefined
  }), __jsx("g", {
    className: "a9c0af6b-e730-4b95-bac4-dea2987fddea",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 634
    },
    __self: undefined
  }, __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M678.4,351.672a3.979,3.979,0,1,0,4.049,3.978A4.021,4.021,0,0,0,678.4,351.672Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 635
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M654.3,351.672a3.979,3.979,0,1,0,4.049,3.978A4.022,4.022,0,0,0,654.3,351.672Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 636
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M630.2,351.672a3.979,3.979,0,1,0,4.048,3.978A4.022,4.022,0,0,0,630.2,351.672Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 637
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M606.1,351.672a3.979,3.979,0,1,0,4.049,3.978A4.021,4.021,0,0,0,606.1,351.672Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 638
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M582,351.672a3.979,3.979,0,1,0,4.049,3.978A4.021,4.021,0,0,0,582,351.672Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 639
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M557.9,351.672a3.979,3.979,0,1,0,4.049,3.978A4.022,4.022,0,0,0,557.9,351.672Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 640
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M533.8,351.672a3.979,3.979,0,1,0,4.048,3.978A4.022,4.022,0,0,0,533.8,351.672Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 641
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M509.7,351.672a3.979,3.979,0,1,0,4.049,3.978A4.021,4.021,0,0,0,509.7,351.672Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 642
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M485.6,351.672a3.979,3.979,0,1,0,4.049,3.978A4.021,4.021,0,0,0,485.6,351.672Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 643
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M461.5,351.672a3.979,3.979,0,1,0,4.049,3.978A4.022,4.022,0,0,0,461.5,351.672Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 644
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M666.354,327.989a3.979,3.979,0,1,0,4.048,3.978A4.022,4.022,0,0,0,666.354,327.989Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 645
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M642.253,327.989a3.979,3.979,0,1,0,4.049,3.978A4.021,4.021,0,0,0,642.253,327.989Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 646
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M618.152,327.989a3.979,3.979,0,1,0,4.049,3.978A4.022,4.022,0,0,0,618.152,327.989Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 647
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M594.052,327.989a3.979,3.979,0,1,0,4.049,3.978A4.022,4.022,0,0,0,594.052,327.989Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 648
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M569.951,327.989A3.979,3.979,0,1,0,574,331.967,4.022,4.022,0,0,0,569.951,327.989Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 649
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M545.85,327.989a3.979,3.979,0,1,0,4.049,3.978A4.021,4.021,0,0,0,545.85,327.989Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 650
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M521.749,327.989a3.979,3.979,0,1,0,4.049,3.978A4.022,4.022,0,0,0,521.749,327.989Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 651
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M497.649,327.989a3.979,3.979,0,1,0,4.049,3.978A4.022,4.022,0,0,0,497.649,327.989Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 652
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M473.548,327.989a3.979,3.979,0,1,0,4.048,3.978A4.022,4.022,0,0,0,473.548,327.989Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 653
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M449.447,327.989a3.979,3.979,0,1,0,4.049,3.978A4.021,4.021,0,0,0,449.447,327.989Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 654
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M678.4,304.306a3.979,3.979,0,1,0,4.049,3.978A4.021,4.021,0,0,0,678.4,304.306Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 655
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M654.3,304.306a3.979,3.979,0,1,0,4.049,3.978A4.022,4.022,0,0,0,654.3,304.306Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 656
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M630.2,304.306a3.979,3.979,0,1,0,4.048,3.978A4.022,4.022,0,0,0,630.2,304.306Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 657
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M606.1,304.306a3.979,3.979,0,1,0,4.049,3.978A4.021,4.021,0,0,0,606.1,304.306Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 658
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M582,304.306a3.979,3.979,0,1,0,4.049,3.978A4.021,4.021,0,0,0,582,304.306Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 659
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M557.9,304.306a3.979,3.979,0,1,0,4.049,3.978A4.022,4.022,0,0,0,557.9,304.306Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 660
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M533.8,304.306a3.979,3.979,0,1,0,4.048,3.978A4.022,4.022,0,0,0,533.8,304.306Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 661
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M509.7,304.306a3.979,3.979,0,1,0,4.049,3.978A4.021,4.021,0,0,0,509.7,304.306Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 662
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M485.6,304.306a3.979,3.979,0,1,0,4.049,3.978A4.021,4.021,0,0,0,485.6,304.306Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 663
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M461.5,304.306a3.979,3.979,0,1,0,4.049,3.978A4.022,4.022,0,0,0,461.5,304.306Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 664
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M666.354,280.623A3.979,3.979,0,1,0,670.4,284.6,4.022,4.022,0,0,0,666.354,280.623Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 665
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M642.253,280.623A3.979,3.979,0,1,0,646.3,284.6,4.021,4.021,0,0,0,642.253,280.623Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 666
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M618.152,280.623A3.979,3.979,0,1,0,622.2,284.6,4.022,4.022,0,0,0,618.152,280.623Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 667
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M594.052,280.623A3.979,3.979,0,1,0,598.1,284.6,4.022,4.022,0,0,0,594.052,280.623Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 668
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M569.951,280.623A3.979,3.979,0,1,0,574,284.6,4.022,4.022,0,0,0,569.951,280.623Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 669
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M545.85,280.623A3.979,3.979,0,1,0,549.9,284.6,4.021,4.021,0,0,0,545.85,280.623Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 670
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M521.749,280.623A3.979,3.979,0,1,0,525.8,284.6,4.022,4.022,0,0,0,521.749,280.623Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M497.649,280.623A3.979,3.979,0,1,0,501.7,284.6,4.022,4.022,0,0,0,497.649,280.623Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 672
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M473.548,280.623A3.979,3.979,0,1,0,477.6,284.6,4.022,4.022,0,0,0,473.548,280.623Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M449.447,280.623A3.979,3.979,0,1,0,453.5,284.6,4.021,4.021,0,0,0,449.447,280.623Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 674
    },
    __self: undefined
  })), __jsx("g", {
    className: "a9c0af6b-e730-4b95-bac4-dea2987fddea",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 676
    },
    __self: undefined
  }, __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M38.5,261.248a4.049,4.049,0,1,0-4.049,3.979A4.022,4.022,0,0,0,38.5,261.248Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 677
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M38.5,237.565a4.049,4.049,0,1,0-4.049,3.978A4.022,4.022,0,0,0,38.5,237.565Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 678
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M38.5,213.882a4.049,4.049,0,1,0-4.049,3.979A4.022,4.022,0,0,0,38.5,213.882Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 679
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M38.5,190.2a4.049,4.049,0,1,0-4.049,3.978A4.022,4.022,0,0,0,38.5,190.2Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 680
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M38.5,166.517a4.049,4.049,0,1,0-4.049,3.978A4.022,4.022,0,0,0,38.5,166.517Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 681
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M38.5,142.833a4.049,4.049,0,1,0-4.049,3.979A4.022,4.022,0,0,0,38.5,142.833Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 682
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M38.5,119.15a4.049,4.049,0,1,0-4.049,3.979A4.022,4.022,0,0,0,38.5,119.15Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M38.5,95.468a4.049,4.049,0,1,0-4.049,3.979A4.022,4.022,0,0,0,38.5,95.468Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 684
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M38.5,71.785a4.049,4.049,0,1,0-4.049,3.978A4.022,4.022,0,0,0,38.5,71.785Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 685
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M38.5,48.1a4.049,4.049,0,1,0-4.049,3.979A4.022,4.022,0,0,0,38.5,48.1Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 686
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M62.6,249.407a4.049,4.049,0,1,0-4.049,3.978A4.023,4.023,0,0,0,62.6,249.407Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 687
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M62.6,225.724a4.049,4.049,0,1,0-4.049,3.979A4.021,4.021,0,0,0,62.6,225.724Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 688
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M62.6,202.041a4.049,4.049,0,1,0-4.049,3.978A4.022,4.022,0,0,0,62.6,202.041Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 689
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M62.6,178.358a4.049,4.049,0,1,0-4.049,3.979A4.022,4.022,0,0,0,62.6,178.358Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 690
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M62.6,154.675a4.049,4.049,0,1,0-4.049,3.978A4.022,4.022,0,0,0,62.6,154.675Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 691
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M62.6,130.992a4.049,4.049,0,1,0-4.049,3.979A4.022,4.022,0,0,0,62.6,130.992Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 692
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M62.6,107.309a4.049,4.049,0,1,0-4.049,3.978A4.023,4.023,0,0,0,62.6,107.309Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 693
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M62.6,83.626a4.049,4.049,0,1,0-4.049,3.979A4.022,4.022,0,0,0,62.6,83.626Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 694
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M62.6,59.943a4.049,4.049,0,1,0-4.049,3.978A4.022,4.022,0,0,0,62.6,59.943Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 695
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M62.6,36.26a4.049,4.049,0,1,0-4.049,3.979A4.022,4.022,0,0,0,62.6,36.26Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 696
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M86.7,261.248a4.049,4.049,0,1,0-4.048,3.979A4.021,4.021,0,0,0,86.7,261.248Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 697
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M86.7,237.565a4.049,4.049,0,1,0-4.048,3.978A4.021,4.021,0,0,0,86.7,237.565Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 698
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M86.7,213.882a4.049,4.049,0,1,0-4.048,3.979A4.022,4.022,0,0,0,86.7,213.882Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 699
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M86.7,190.2a4.049,4.049,0,1,0-4.048,3.978A4.021,4.021,0,0,0,86.7,190.2Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 700
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M86.7,166.517a4.049,4.049,0,1,0-4.048,3.978A4.021,4.021,0,0,0,86.7,166.517Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 701
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M86.7,142.833a4.049,4.049,0,1,0-4.048,3.979A4.021,4.021,0,0,0,86.7,142.833Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 702
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M86.7,119.15a4.049,4.049,0,1,0-4.048,3.979A4.021,4.021,0,0,0,86.7,119.15Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 703
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M86.7,95.468a4.049,4.049,0,1,0-4.048,3.979A4.021,4.021,0,0,0,86.7,95.468Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 704
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M86.7,71.785a4.049,4.049,0,1,0-4.048,3.978A4.021,4.021,0,0,0,86.7,71.785Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 705
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M86.7,48.1a4.049,4.049,0,1,0-4.048,3.979A4.021,4.021,0,0,0,86.7,48.1Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 706
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M110.8,249.407a4.05,4.05,0,1,0-4.049,3.978A4.023,4.023,0,0,0,110.8,249.407Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 707
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M110.8,225.724a4.05,4.05,0,1,0-4.049,3.979A4.021,4.021,0,0,0,110.8,225.724Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 708
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M110.8,202.041a4.05,4.05,0,1,0-4.049,3.978A4.022,4.022,0,0,0,110.8,202.041Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 709
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M110.8,178.358a4.05,4.05,0,1,0-4.049,3.979A4.022,4.022,0,0,0,110.8,178.358Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 710
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M110.8,154.675a4.05,4.05,0,1,0-4.049,3.978A4.022,4.022,0,0,0,110.8,154.675Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 711
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M110.8,130.992a4.05,4.05,0,1,0-4.049,3.979A4.022,4.022,0,0,0,110.8,130.992Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 712
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M110.8,107.309a4.05,4.05,0,1,0-4.049,3.978A4.023,4.023,0,0,0,110.8,107.309Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 713
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M110.8,83.626a4.05,4.05,0,1,0-4.049,3.979A4.022,4.022,0,0,0,110.8,83.626Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 714
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M110.8,59.943a4.05,4.05,0,1,0-4.049,3.978A4.022,4.022,0,0,0,110.8,59.943Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 715
    },
    __self: undefined
  }), __jsx("path", {
    className: "f7f41bc9-6ae9-4bd5-9718-7ef259e73a21",
    d: "M110.8,36.26a4.05,4.05,0,1,0-4.049,3.979A4.022,4.022,0,0,0,110.8,36.26Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 716
    },
    __self: undefined
  })), __jsx("path", {
    className: "b373007d-6315-4fd2-b437-4146b8d1d234",
    d: "M462.882,381.34a1.963,1.963,0,0,1,1.377.561L614.191,529.236a1.888,1.888,0,0,1,0,2.705,1.969,1.969,0,0,1-2.753,0L461.505,384.607a1.889,1.889,0,0,1,0-2.706A1.961,1.961,0,0,1,462.882,381.34Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 718
    },
    __self: undefined
  }), __jsx("path", {
    className: "b373007d-6315-4fd2-b437-4146b8d1d234",
    d: "M166.193,52.929a1.958,1.958,0,0,1,1.377.561L292.907,176.655a1.889,1.889,0,0,1,0,2.706,1.971,1.971,0,0,1-2.753,0L164.816,56.2a1.889,1.889,0,0,1,0-2.706A1.956,1.956,0,0,1,166.193,52.929Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 719
    },
    __self: undefined
  }), __jsx("path", {
    className: "b373007d-6315-4fd2-b437-4146b8d1d234",
    d: "M351.545,135.084a1.956,1.956,0,0,1,1.377.561l65.052,63.924a1.889,1.889,0,0,1,0,2.706,1.971,1.971,0,0,1-2.753,0l-65.052-63.924a1.889,1.889,0,0,1,0-2.706A1.954,1.954,0,0,1,351.545,135.084Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 720
    },
    __self: undefined
  }), __jsx("path", {
    className: "b373007d-6315-4fd2-b437-4146b8d1d234",
    d: "M638.214,3.748a41.35,41.35,0,0,1,29.067,11.813,39.945,39.945,0,0,1,0,57.125,41.669,41.669,0,0,1-58.133,0,39.9,39.9,0,0,1,0-57.125A41.352,41.352,0,0,1,638.214,3.748Zm0,76.925A37.431,37.431,0,0,0,664.527,69.98a36.163,36.163,0,0,0,0-51.714,37.722,37.722,0,0,0-52.625,0,36.121,36.121,0,0,0,0,51.714h0A37.432,37.432,0,0,0,638.214,80.673Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 721
    },
    __self: undefined
  }), __jsx("path", {
    className: "b373007d-6315-4fd2-b437-4146b8d1d234",
    d: "M41.106,478.794a41.35,41.35,0,0,1,29.067,11.813,39.943,39.943,0,0,1,0,57.125,41.668,41.668,0,0,1-58.132,0,39.9,39.9,0,0,1,0-57.125A41.348,41.348,0,0,1,41.106,478.794Zm0,76.925a37.431,37.431,0,0,0,26.313-10.693,36.161,36.161,0,0,0,0-51.714,37.721,37.721,0,0,0-52.625,0,36.121,36.121,0,0,0,0,51.714h0A37.432,37.432,0,0,0,41.106,555.719Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 722
    },
    __self: undefined
  }), __jsx("path", {
    className: "b373007d-6315-4fd2-b437-4146b8d1d234",
    d: "M113.369,209.032a41.354,41.354,0,0,1,29.067,11.812,39.945,39.945,0,0,1,0,57.126,41.668,41.668,0,0,1-58.132,0,39.9,39.9,0,0,1,0-57.126A41.351,41.351,0,0,1,113.369,209.032Zm0,76.925a37.435,37.435,0,0,0,26.314-10.693,36.162,36.162,0,0,0,0-51.714,37.721,37.721,0,0,0-52.625,0,36.12,36.12,0,0,0,0,51.713h0A37.432,37.432,0,0,0,113.369,285.957Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723
    },
    __self: undefined
  })),
  Geo3: () => __jsx("svg", {
    id: "f39c6c04-b752-4c26-8fe7-4adf7404e5b9",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 1620 680",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 727
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 728
    },
    __self: undefined
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 729
    },
    __self: undefined
  }, `.f789c633-0c1b-4508-9e1e-3ddd8d8ebb51{fill:none;}.ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e{fill: #7d90ad;}.a1c04dbd-6167-418a-afb4-fb45d2cfee14{fill:url(#b1d36de3-2055-451d-82d5-e12ff1009672);}`), __jsx("pattern", {
    id: "b1d36de3-2055-451d-82d5-e12ff1009672",
    "data-name": "New Pattern",
    width: "1577.62",
    height: "1330.622",
    patternUnits: "userSpaceOnUse",
    viewBox: "0 0 1577.62 1330.622",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 731
    },
    __self: undefined
  }, __jsx("rect", {
    className: "f789c633-0c1b-4508-9e1e-3ddd8d8ebb51",
    width: "1577.62",
    height: "1330.622",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 732
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 733
    },
    __self: undefined
  }, __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1450.348,1086.533h0a1.438,1.438,0,0,1-1.244-.718l-23.5-40.7a1.435,1.435,0,0,1,1.244-2.153h46.991a1.435,1.435,0,0,1,1.243,2.153l-23.5,40.7A1.439,1.439,0,0,1,1450.348,1086.533Zm-21.01-40.7,21.01,36.39,21.01-36.39Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 734
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 735
    },
    __self: undefined
  }, __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1463.112,1270.1a1.436,1.436,0,0,1-1.015-2.45l18.639-18.639a1.435,1.435,0,1,1,2.03,2.029l-18.638,18.639A1.435,1.435,0,0,1,1463.112,1270.1Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 736
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1481.751,1270.1a1.433,1.433,0,0,1-1.015-.421l-18.639-18.639a1.435,1.435,0,0,1,2.031-2.029l18.638,18.639a1.436,1.436,0,0,1-1.015,2.45Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 737
    },
    __self: undefined
  })), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1544.022,1141.679a4.553,4.553,0,0,1-2.423-.69l-3.255-2.03a2.222,2.222,0,0,0-2.322,0l-3.256,2.032a4.608,4.608,0,0,1-4.846,0,1.193,1.193,0,1,1,1.261-2.025,2.226,2.226,0,0,0,2.321,0l3.257-2.031a4.608,4.608,0,0,1,4.848,0l3.254,2.03a2.226,2.226,0,0,0,2.321,0l3.255-2.032a4.611,4.611,0,0,1,4.848,0l3.255,2.031a2.227,2.227,0,0,0,2.32,0l3.257-2.031a4.607,4.607,0,0,1,4.847,0l3.256,2.031a2.225,2.225,0,0,0,2.322,0l3.254-2.031a1.193,1.193,0,1,1,1.262,2.025l-3.254,2.031a4.617,4.617,0,0,1-4.848,0l-3.256-2.03a2.222,2.222,0,0,0-2.319,0l-3.257,2.033a4.614,4.614,0,0,1-4.848,0l-3.253-2.03a2.223,2.223,0,0,0-2.323,0l-3.254,2.032A4.58,4.58,0,0,1,1544.022,1141.679Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 739
    },
    __self: undefined
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 741
    },
    __self: undefined
  }, __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1055.942,1336.025h0a1.437,1.437,0,0,1-1.243-.718l-23.5-40.7a1.436,1.436,0,0,1,1.244-2.153h46.991a1.436,1.436,0,0,1,1.243,2.153l-23.5,40.7A1.438,1.438,0,0,1,1055.942,1336.025Zm-21.009-40.7,21.009,36.39,21.011-36.39Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 742
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1286.442,1324.721a1.846,1.846,0,1,1,0-3.692h47.131a1.847,1.847,0,0,1,0,3.693h-47.13Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 743
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1310.008,1348.286a1.847,1.847,0,0,1-1.848-1.848v-47.129a1.847,1.847,0,1,1,3.693,0v47.129A1.848,1.848,0,0,1,1310.008,1348.286Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 744
    },
    __self: undefined
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 746
    },
    __self: undefined
  }, __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M661.537,1252.861h0a1.437,1.437,0,0,1-1.243-.718l-23.5-40.695a1.435,1.435,0,0,1,1.244-2.153h46.991a1.435,1.435,0,0,1,1.243,2.153l-23.5,40.695A1.438,1.438,0,0,1,661.537,1252.861Zm-21.009-40.7,21.009,36.39,21.011-36.39Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 747
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M755.212,1308.007a4.562,4.562,0,0,1-2.423-.69l-3.256-2.03a2.22,2.22,0,0,0-2.321,0l-3.256,2.032a4.608,4.608,0,0,1-4.846,0,1.194,1.194,0,0,1,.633-2.207,1.177,1.177,0,0,1,.628.182,2.226,2.226,0,0,0,2.321,0l3.257-2.032a4.614,4.614,0,0,1,4.848,0l3.254,2.031a2.226,2.226,0,0,0,2.321,0l3.255-2.033a4.617,4.617,0,0,1,4.848,0l3.255,2.032a2.227,2.227,0,0,0,2.32,0l3.257-2.032a4.612,4.612,0,0,1,4.847,0l3.255,2.032a2.226,2.226,0,0,0,2.323,0l3.254-2.032a1.193,1.193,0,1,1,1.262,2.026l-3.254,2.031a4.617,4.617,0,0,1-4.848,0l-3.256-2.03a2.222,2.222,0,0,0-2.319,0l-3.257,2.033a4.614,4.614,0,0,1-4.848,0l-3.253-2.03a2.223,2.223,0,0,0-2.323,0l-3.254,2.032A4.589,4.589,0,0,1,755.212,1308.007Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 748
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M892.037,1241.557a1.846,1.846,0,1,1,0-3.692h47.131a1.847,1.847,0,0,1,0,3.693h-47.13Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 749
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M915.6,1265.123a1.847,1.847,0,0,1-1.848-1.849v-47.128a1.847,1.847,0,1,1,3.693,0v47.129A1.849,1.849,0,0,1,915.6,1265.123Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 750
    },
    __self: undefined
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 752
    },
    __self: undefined
  }, __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M267.132,1169.7h0a1.436,1.436,0,0,1-1.243-.718l-23.5-40.695a1.435,1.435,0,0,1,1.243-2.153h46.992a1.435,1.435,0,0,1,1.243,2.153l-23.5,40.7A1.439,1.439,0,0,1,267.132,1169.7ZM246.123,1129l21.009,36.39L288.143,1129Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 753
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M477.2,1368.786a40.365,40.365,0,1,1,28.562-11.813A40.265,40.265,0,0,1,477.2,1368.786Zm0-76.925a36.537,36.537,0,1,0,25.857,10.693h0A36.453,36.453,0,0,0,477.2,1291.861Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 754
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M360.807,1224.843a4.562,4.562,0,0,1-2.423-.69l-3.256-2.03a2.22,2.22,0,0,0-2.321,0l-3.256,2.032a4.608,4.608,0,0,1-4.846,0,1.193,1.193,0,1,1,1.261-2.025,2.226,2.226,0,0,0,2.321,0l3.257-2.031a4.608,4.608,0,0,1,4.848,0l3.253,2.03a2.227,2.227,0,0,0,2.322,0l3.255-2.032a4.611,4.611,0,0,1,4.848,0l3.255,2.031a2.227,2.227,0,0,0,2.32,0l3.257-2.031a4.607,4.607,0,0,1,4.847,0l3.255,2.031a2.226,2.226,0,0,0,2.323,0l3.254-2.031a1.18,1.18,0,0,1,.629-.181,1.193,1.193,0,0,1,.633,2.206l-3.254,2.031a4.617,4.617,0,0,1-4.848,0l-3.256-2.03a2.222,2.222,0,0,0-2.319,0l-3.257,2.033a4.614,4.614,0,0,1-4.848,0l-3.253-2.03a2.223,2.223,0,0,0-2.323,0l-3.254,2.032A4.589,4.589,0,0,1,360.807,1224.843Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 755
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M497.632,1158.393a1.846,1.846,0,1,1,0-3.692h47.131a1.847,1.847,0,0,1,0,3.693h-47.13Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 756
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M521.2,1181.959a1.847,1.847,0,0,1-1.848-1.848v-47.129a1.847,1.847,0,0,1,3.693,0v47.13A1.848,1.848,0,0,1,521.2,1181.959Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 757
    },
    __self: undefined
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 759
    },
    __self: undefined
  }, __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M82.793,1285.622a40.363,40.363,0,1,1,28.562-11.812A40.268,40.268,0,0,1,82.793,1285.622Zm0-76.925a36.539,36.539,0,1,0,25.857,10.694h0A36.453,36.453,0,0,0,82.793,1208.7Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 760
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M103.227,1075.229a1.846,1.846,0,1,1,0-3.691h47.131a1.846,1.846,0,0,1,0,3.692h-47.13Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 761
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M126.793,1098.8a1.847,1.847,0,0,1-1.848-1.848v-47.129a1.847,1.847,0,0,1,3.693,0v47.13A1.848,1.848,0,0,1,126.793,1098.8Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 762
    },
    __self: undefined
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 764
    },
    __self: undefined
  }, __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1450.348,753.878h0a1.438,1.438,0,0,1-1.244-.718l-23.5-40.695a1.436,1.436,0,0,1,1.244-2.154h46.991a1.436,1.436,0,0,1,1.243,2.154l-23.5,40.695A1.437,1.437,0,0,1,1450.348,753.878Zm-21.01-40.7,21.01,36.39,21.01-36.39Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 765
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 766
    },
    __self: undefined
  }, __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1463.112,937.439a1.435,1.435,0,0,1-1.015-2.45l18.639-18.638a1.435,1.435,0,1,1,2.03,2.029l-18.638,18.639A1.434,1.434,0,0,1,1463.112,937.439Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 767
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1481.751,937.439a1.432,1.432,0,0,1-1.015-.42L1462.1,918.38a1.435,1.435,0,0,1,2.031-2.029l18.638,18.638a1.435,1.435,0,0,1-1.015,2.45Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 768
    },
    __self: undefined
  })), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1544.022,809.023a4.561,4.561,0,0,1-2.423-.689l-3.255-2.03a2.222,2.222,0,0,0-2.322,0l-3.256,2.032a4.614,4.614,0,0,1-4.846,0,1.194,1.194,0,0,1,.633-2.207,1.168,1.168,0,0,1,.628.182,2.226,2.226,0,0,0,2.321,0l3.257-2.032a4.614,4.614,0,0,1,4.848,0l3.254,2.031a2.226,2.226,0,0,0,2.321,0l3.255-2.033a4.617,4.617,0,0,1,4.848,0l3.255,2.032a2.227,2.227,0,0,0,2.32,0l3.257-2.032a4.612,4.612,0,0,1,4.847,0l3.256,2.032a2.225,2.225,0,0,0,2.322,0l3.254-2.032a1.193,1.193,0,1,1,1.262,2.026l-3.254,2.031a4.623,4.623,0,0,1-4.848,0l-3.256-2.03a2.222,2.222,0,0,0-2.319,0l-3.257,2.033a4.62,4.62,0,0,1-4.848,0l-3.253-2.03a2.223,2.223,0,0,0-2.323,0l-3.254,2.032A4.588,4.588,0,0,1,1544.022,809.023Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 770
    },
    __self: undefined
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 772
    },
    __self: undefined
  }, __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1055.942,1003.369h0a1.435,1.435,0,0,1-1.243-.718l-23.5-40.695a1.435,1.435,0,0,1,1.244-2.153h46.991a1.435,1.435,0,0,1,1.243,2.153l-23.5,40.7A1.437,1.437,0,0,1,1055.942,1003.369Zm-21.009-40.7,21.009,36.39,21.011-36.39Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 773
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1266.008,1202.458a40.363,40.363,0,1,1,28.562-11.812A40.264,40.264,0,0,1,1266.008,1202.458Zm0-76.925a36.539,36.539,0,1,0,25.857,10.694h0A36.453,36.453,0,0,0,1266.008,1125.533Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 774
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 775
    },
    __self: undefined
  }, __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1068.707,1186.931a1.436,1.436,0,0,1-1.015-2.45l18.639-18.639a1.435,1.435,0,0,1,2.03,2.029l-18.639,18.639A1.431,1.431,0,0,1,1068.707,1186.931Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 776
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1087.346,1186.931a1.433,1.433,0,0,1-1.015-.421l-18.639-18.639a1.435,1.435,0,1,1,2.03-2.029l18.639,18.639a1.436,1.436,0,0,1-1.015,2.45Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 777
    },
    __self: undefined
  })), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1149.617,1058.515a4.561,4.561,0,0,1-2.423-.689l-3.256-2.031a2.22,2.22,0,0,0-2.321,0l-3.256,2.033a4.614,4.614,0,0,1-4.846,0,1.193,1.193,0,1,1,1.261-2.026,2.226,2.226,0,0,0,2.321,0l3.257-2.031a4.608,4.608,0,0,1,4.848,0l3.254,2.03a2.226,2.226,0,0,0,2.321,0l3.255-2.032a4.611,4.611,0,0,1,4.848,0l3.255,2.031a2.227,2.227,0,0,0,2.32,0l3.257-2.031a4.607,4.607,0,0,1,4.847,0l3.255,2.031a2.226,2.226,0,0,0,2.323,0l3.254-2.031a1.193,1.193,0,1,1,1.262,2.025l-3.254,2.032a4.623,4.623,0,0,1-4.848,0l-3.256-2.031a2.222,2.222,0,0,0-2.319,0l-3.257,2.033a4.617,4.617,0,0,1-4.848,0l-3.253-2.031a2.223,2.223,0,0,0-2.323,0l-3.254,2.033A4.588,4.588,0,0,1,1149.617,1058.515Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 779
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1286.442,992.066a1.846,1.846,0,1,1,0-3.692h47.131a1.846,1.846,0,0,1,0,3.692h-47.13Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 780
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1310.008,1015.631a1.847,1.847,0,0,1-1.848-1.848V966.654a1.847,1.847,0,0,1,3.693,0v47.13A1.848,1.848,0,0,1,1310.008,1015.631Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 781
    },
    __self: undefined
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 783
    },
    __self: undefined
  }, __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M661.537,920.205h0a1.435,1.435,0,0,1-1.243-.718l-23.5-40.695a1.435,1.435,0,0,1,1.244-2.153h46.991a1.435,1.435,0,0,1,1.243,2.153l-23.5,40.7A1.437,1.437,0,0,1,661.537,920.205Zm-21.009-40.7,21.009,36.39,21.011-36.39Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 784
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M871.6,1119.3a40.365,40.365,0,1,1,28.562-11.813A40.265,40.265,0,0,1,871.6,1119.3Zm0-76.925a36.537,36.537,0,1,0,25.857,10.693h0A36.456,36.456,0,0,0,871.6,1042.37Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 785
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 786
    },
    __self: undefined
  }, __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M674.3,1103.767a1.436,1.436,0,0,1-1.015-2.45l18.639-18.639a1.435,1.435,0,0,1,2.03,2.03l-18.639,18.638A1.431,1.431,0,0,1,674.3,1103.767Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 787
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M692.941,1103.767a1.433,1.433,0,0,1-1.015-.421l-18.639-18.638a1.435,1.435,0,0,1,2.03-2.03l18.639,18.639a1.436,1.436,0,0,1-1.015,2.45Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 788
    },
    __self: undefined
  })), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M755.212,975.351a4.561,4.561,0,0,1-2.423-.689l-3.256-2.031a2.22,2.22,0,0,0-2.321,0l-3.256,2.033a4.614,4.614,0,0,1-4.846,0,1.194,1.194,0,0,1,.633-2.207,1.176,1.176,0,0,1,.628.181,2.226,2.226,0,0,0,2.321,0l3.257-2.031a4.614,4.614,0,0,1,4.848,0l3.254,2.03a2.226,2.226,0,0,0,2.321,0l3.255-2.032a4.617,4.617,0,0,1,4.848,0l3.255,2.031a2.227,2.227,0,0,0,2.32,0l3.257-2.031a4.612,4.612,0,0,1,4.847,0l3.255,2.031a2.226,2.226,0,0,0,2.323,0l3.254-2.031a1.193,1.193,0,1,1,1.262,2.025l-3.254,2.032a4.623,4.623,0,0,1-4.848,0l-3.256-2.031a2.222,2.222,0,0,0-2.319,0l-3.257,2.034a4.62,4.62,0,0,1-4.848,0l-3.253-2.031a2.223,2.223,0,0,0-2.323,0l-3.254,2.033A4.588,4.588,0,0,1,755.212,975.351Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 790
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M892.037,908.9a1.846,1.846,0,1,1,0-3.692h47.131a1.846,1.846,0,0,1,0,3.692h-47.13Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 791
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M915.6,932.467a1.847,1.847,0,0,1-1.848-1.848V883.49a1.847,1.847,0,1,1,3.693,0v47.129A1.848,1.848,0,0,1,915.6,932.467Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 792
    },
    __self: undefined
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 794
    },
    __self: undefined
  }, __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M267.132,837.042h0a1.436,1.436,0,0,1-1.243-.718l-23.5-40.7a1.436,1.436,0,0,1,1.243-2.153h46.992a1.436,1.436,0,0,1,1.243,2.153l-23.5,40.7A1.438,1.438,0,0,1,267.132,837.042Zm-21.009-40.7,21.009,36.39,21.011-36.39Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 795
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M477.2,1036.131a40.365,40.365,0,1,1,28.562-11.813A40.265,40.265,0,0,1,477.2,1036.131Zm0-76.925A36.537,36.537,0,1,0,503.055,969.9h0A36.456,36.456,0,0,0,477.2,959.206Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 796
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 797
    },
    __self: undefined
  }, __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M279.9,1020.6a1.436,1.436,0,0,1-1.015-2.45l18.639-18.638a1.435,1.435,0,0,1,2.03,2.029l-18.639,18.638A1.427,1.427,0,0,1,279.9,1020.6Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 798
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M298.536,1020.6a1.427,1.427,0,0,1-1.015-.421l-18.639-18.638a1.435,1.435,0,0,1,2.03-2.029l18.639,18.638a1.436,1.436,0,0,1-1.015,2.45Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 799
    },
    __self: undefined
  })), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M360.807,892.187a4.561,4.561,0,0,1-2.423-.689l-3.256-2.03a2.214,2.214,0,0,0-2.321,0l-3.256,2.032a4.614,4.614,0,0,1-4.846,0,1.194,1.194,0,0,1,.633-2.207,1.176,1.176,0,0,1,.628.181,2.22,2.22,0,0,0,2.321,0l3.257-2.031a4.614,4.614,0,0,1,4.848,0l3.253,2.03a2.222,2.222,0,0,0,2.322,0l3.255-2.032a4.617,4.617,0,0,1,4.848,0l3.255,2.031a2.221,2.221,0,0,0,2.32,0l3.257-2.031a4.612,4.612,0,0,1,4.847,0L387,889.473a2.221,2.221,0,0,0,2.323,0l3.254-2.031a1.193,1.193,0,1,1,1.262,2.026l-3.254,2.031a4.623,4.623,0,0,1-4.848,0l-3.256-2.03a2.216,2.216,0,0,0-2.319,0l-3.257,2.033a4.62,4.62,0,0,1-4.848,0l-3.253-2.03a2.218,2.218,0,0,0-2.323,0l-3.254,2.032A4.588,4.588,0,0,1,360.807,892.187Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 801
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M497.632,825.738a1.846,1.846,0,1,1,0-3.692h47.131a1.846,1.846,0,0,1,0,3.692h-47.13Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 802
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M521.2,849.3a1.847,1.847,0,0,1-1.848-1.848V800.326a1.847,1.847,0,1,1,3.693,0v47.129A1.848,1.848,0,0,1,521.2,849.3Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 803
    },
    __self: undefined
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 805
    },
    __self: undefined
  }, __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M82.793,952.967a40.365,40.365,0,1,1,28.562-11.813A40.265,40.265,0,0,1,82.793,952.967Zm0-76.925a36.537,36.537,0,1,0,25.857,10.693h0A36.456,36.456,0,0,0,82.793,876.042Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 806
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M103.227,742.574a1.846,1.846,0,1,1,0-3.692h47.131a1.847,1.847,0,0,1,0,3.693h-47.13Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 807
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M126.793,766.14a1.847,1.847,0,0,1-1.848-1.849V717.162a1.847,1.847,0,1,1,3.693,0v47.129A1.849,1.849,0,0,1,126.793,766.14Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 808
    },
    __self: undefined
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 810
    },
    __self: undefined
  }, __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1450.348,421.222h0a1.436,1.436,0,0,1-1.244-.718l-23.5-40.695a1.435,1.435,0,0,1,1.244-2.153h46.991a1.435,1.435,0,0,1,1.243,2.153l-23.5,40.7A1.437,1.437,0,0,1,1450.348,421.222Zm-21.01-40.7,21.01,36.391,21.01-36.391Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 811
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 812
    },
    __self: undefined
  }, __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1463.112,604.784a1.436,1.436,0,0,1-1.015-2.45l18.639-18.639a1.435,1.435,0,1,1,2.03,2.03l-18.638,18.638A1.435,1.435,0,0,1,1463.112,604.784Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 813
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1481.751,604.784a1.433,1.433,0,0,1-1.015-.421L1462.1,585.725a1.436,1.436,0,0,1,2.031-2.03l18.638,18.639a1.436,1.436,0,0,1-1.015,2.45Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 814
    },
    __self: undefined
  })), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1544.022,476.368a4.561,4.561,0,0,1-2.423-.689l-3.255-2.031a2.222,2.222,0,0,0-2.322,0l-3.256,2.033a4.614,4.614,0,0,1-4.846,0,1.194,1.194,0,0,1,.633-2.207,1.176,1.176,0,0,1,.628.181,2.226,2.226,0,0,0,2.321,0l3.257-2.031a4.608,4.608,0,0,1,4.848,0l3.254,2.03a2.226,2.226,0,0,0,2.321,0l3.255-2.032a4.611,4.611,0,0,1,4.848,0l3.255,2.031a2.227,2.227,0,0,0,2.32,0l3.257-2.031a4.607,4.607,0,0,1,4.847,0l3.256,2.031a2.225,2.225,0,0,0,2.322,0l3.254-2.031a1.193,1.193,0,1,1,1.262,2.025l-3.254,2.032a4.623,4.623,0,0,1-4.848,0l-3.256-2.031a2.222,2.222,0,0,0-2.319,0l-3.257,2.034a4.62,4.62,0,0,1-4.848,0l-3.253-2.031a2.223,2.223,0,0,0-2.323,0l-3.254,2.033A4.588,4.588,0,0,1,1544.022,476.368Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 816
    },
    __self: undefined
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 818
    },
    __self: undefined
  }, __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1055.942,670.714h0A1.437,1.437,0,0,1,1054.7,670L1031.2,629.3a1.435,1.435,0,0,1,1.244-2.153h46.991a1.435,1.435,0,0,1,1.243,2.153l-23.5,40.7A1.439,1.439,0,0,1,1055.942,670.714Zm-21.009-40.7,21.009,36.39,21.011-36.39Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 819
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1266.008,869.8a40.365,40.365,0,1,1,28.562-11.813A40.265,40.265,0,0,1,1266.008,869.8Zm0-76.925a36.537,36.537,0,1,0,25.857,10.693h0A36.453,36.453,0,0,0,1266.008,792.878Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 820
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 821
    },
    __self: undefined
  }, __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1068.707,854.275a1.435,1.435,0,0,1-1.015-2.449l18.639-18.639a1.435,1.435,0,0,1,2.03,2.029l-18.639,18.639A1.43,1.43,0,0,1,1068.707,854.275Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 822
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1087.346,854.275a1.432,1.432,0,0,1-1.015-.42l-18.639-18.639a1.435,1.435,0,1,1,2.03-2.029l18.639,18.639a1.435,1.435,0,0,1-1.015,2.449Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 823
    },
    __self: undefined
  })), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1149.617,725.86a4.562,4.562,0,0,1-2.423-.69l-3.256-2.03a2.22,2.22,0,0,0-2.321,0l-3.256,2.032a4.608,4.608,0,0,1-4.846,0,1.193,1.193,0,1,1,1.261-2.025,2.226,2.226,0,0,0,2.321,0l3.257-2.032a4.614,4.614,0,0,1,4.848,0l3.254,2.031a2.226,2.226,0,0,0,2.321,0l3.255-2.032a4.614,4.614,0,0,1,4.848,0l3.255,2.032a2.227,2.227,0,0,0,2.32,0l3.257-2.032a4.612,4.612,0,0,1,4.847,0l3.255,2.032a2.226,2.226,0,0,0,2.323,0l3.254-2.032a1.193,1.193,0,1,1,1.262,2.026l-3.254,2.031a4.617,4.617,0,0,1-4.848,0l-3.256-2.03a2.222,2.222,0,0,0-2.319,0l-3.257,2.033a4.614,4.614,0,0,1-4.848,0l-3.253-2.03a2.223,2.223,0,0,0-2.323,0l-3.254,2.032A4.589,4.589,0,0,1,1149.617,725.86Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 825
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1286.442,659.41a1.846,1.846,0,1,1,0-3.692h47.131a1.847,1.847,0,0,1,0,3.693h-47.13Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 826
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1310.008,682.976a1.847,1.847,0,0,1-1.848-1.848V634a1.847,1.847,0,1,1,3.693,0V681.13A1.848,1.848,0,0,1,1310.008,682.976Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 827
    },
    __self: undefined
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 829
    },
    __self: undefined
  }, __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M661.537,587.55h0a1.437,1.437,0,0,1-1.243-.718l-23.5-40.7a1.435,1.435,0,0,1,1.244-2.153h46.991a1.435,1.435,0,0,1,1.243,2.153l-23.5,40.7A1.439,1.439,0,0,1,661.537,587.55Zm-21.009-40.7,21.009,36.39,21.011-36.39Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 830
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M871.6,786.639a40.365,40.365,0,1,1,28.562-11.813A40.265,40.265,0,0,1,871.6,786.639Zm0-76.925a36.537,36.537,0,1,0,25.857,10.693h0A36.453,36.453,0,0,0,871.6,709.714Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 831
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 832
    },
    __self: undefined
  }, __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M674.3,771.112a1.436,1.436,0,0,1-1.015-2.45l18.639-18.639a1.435,1.435,0,0,1,2.03,2.029l-18.639,18.639A1.431,1.431,0,0,1,674.3,771.112Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 833
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M692.941,771.112a1.433,1.433,0,0,1-1.015-.421l-18.639-18.639a1.435,1.435,0,0,1,2.03-2.029l18.639,18.639a1.436,1.436,0,0,1-1.015,2.45Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 834
    },
    __self: undefined
  })), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M755.212,642.7a4.562,4.562,0,0,1-2.423-.69l-3.256-2.03a2.22,2.22,0,0,0-2.321,0l-3.256,2.032a4.608,4.608,0,0,1-4.846,0,1.193,1.193,0,1,1,1.261-2.025,2.226,2.226,0,0,0,2.321,0l3.257-2.031a4.608,4.608,0,0,1,4.848,0l3.254,2.03a2.226,2.226,0,0,0,2.321,0l3.255-2.032a4.611,4.611,0,0,1,4.848,0l3.255,2.031a2.227,2.227,0,0,0,2.32,0l3.257-2.031a4.607,4.607,0,0,1,4.847,0l3.255,2.031a2.226,2.226,0,0,0,2.323,0l3.254-2.031a1.193,1.193,0,0,1,1.644.38,1.2,1.2,0,0,1-.382,1.645l-3.254,2.031a4.617,4.617,0,0,1-4.848,0l-3.256-2.03a2.222,2.222,0,0,0-2.319,0l-3.257,2.033a4.614,4.614,0,0,1-4.848,0l-3.253-2.03a2.223,2.223,0,0,0-2.323,0l-3.254,2.032A4.589,4.589,0,0,1,755.212,642.7Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 836
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M892.037,576.246a1.846,1.846,0,1,1,0-3.691h47.131a1.846,1.846,0,0,1,0,3.692h-47.13Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 837
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M915.6,599.812a1.847,1.847,0,0,1-1.848-1.848V550.835a1.847,1.847,0,0,1,3.693,0v47.13A1.848,1.848,0,0,1,915.6,599.812Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 838
    },
    __self: undefined
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 840
    },
    __self: undefined
  }, __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M267.132,504.386h0a1.434,1.434,0,0,1-1.243-.718l-23.5-40.695a1.435,1.435,0,0,1,1.243-2.153h46.992a1.435,1.435,0,0,1,1.243,2.153l-23.5,40.7A1.437,1.437,0,0,1,267.132,504.386Zm-21.009-40.7,21.009,36.39,21.011-36.39Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 841
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M477.2,703.475a40.363,40.363,0,1,1,28.562-11.812A40.264,40.264,0,0,1,477.2,703.475Zm0-76.925a36.539,36.539,0,1,0,25.857,10.694h0A36.453,36.453,0,0,0,477.2,626.55Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 842
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 843
    },
    __self: undefined
  }, __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M279.9,687.948a1.436,1.436,0,0,1-1.015-2.45l18.639-18.639a1.435,1.435,0,0,1,2.03,2.029l-18.639,18.639A1.431,1.431,0,0,1,279.9,687.948Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 844
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M298.536,687.948a1.431,1.431,0,0,1-1.015-.421l-18.639-18.639a1.435,1.435,0,0,1,2.03-2.029L299.551,685.5a1.436,1.436,0,0,1-1.015,2.45Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 845
    },
    __self: undefined
  })), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M360.807,559.532a4.553,4.553,0,0,1-2.423-.69l-3.256-2.03a2.22,2.22,0,0,0-2.321,0l-3.256,2.032a4.608,4.608,0,0,1-4.846,0,1.193,1.193,0,1,1,1.261-2.025,2.226,2.226,0,0,0,2.321,0l3.257-2.031a4.608,4.608,0,0,1,4.848,0l3.253,2.03a2.227,2.227,0,0,0,2.322,0l3.255-2.032a4.611,4.611,0,0,1,4.848,0l3.255,2.031a2.227,2.227,0,0,0,2.32,0l3.257-2.031a4.607,4.607,0,0,1,4.847,0L387,556.818a2.226,2.226,0,0,0,2.323,0l3.254-2.031a1.193,1.193,0,1,1,1.262,2.025l-3.254,2.031a4.617,4.617,0,0,1-4.848,0l-3.256-2.03a2.222,2.222,0,0,0-2.319,0l-3.257,2.033a4.614,4.614,0,0,1-4.848,0l-3.253-2.03a2.223,2.223,0,0,0-2.323,0l-3.254,2.032A4.58,4.58,0,0,1,360.807,559.532Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 847
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M497.632,493.083a1.846,1.846,0,1,1,0-3.692h47.131a1.846,1.846,0,0,1,0,3.692h-47.13Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 848
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M521.2,516.648a1.847,1.847,0,0,1-1.848-1.848V467.671a1.847,1.847,0,0,1,3.693,0V514.8A1.848,1.848,0,0,1,521.2,516.648Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 849
    },
    __self: undefined
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 851
    },
    __self: undefined
  }, __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M82.793,620.311A40.363,40.363,0,1,1,111.355,608.5,40.264,40.264,0,0,1,82.793,620.311Zm0-76.925A36.539,36.539,0,1,0,108.65,554.08h0A36.453,36.453,0,0,0,82.793,543.386Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 852
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M103.227,409.919a1.846,1.846,0,1,1,0-3.692h47.131a1.846,1.846,0,0,1,0,3.692h-47.13Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 853
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M126.793,433.484a1.847,1.847,0,0,1-1.848-1.848V384.507a1.847,1.847,0,1,1,3.693,0v47.129A1.848,1.848,0,0,1,126.793,433.484Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 854
    },
    __self: undefined
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 856
    },
    __self: undefined
  }, __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1450.348,88.567h0a1.438,1.438,0,0,1-1.244-.718l-23.5-40.695A1.435,1.435,0,0,1,1426.853,45h46.991a1.435,1.435,0,0,1,1.243,2.153l-23.5,40.7A1.439,1.439,0,0,1,1450.348,88.567Zm-21.01-40.7,21.01,36.39,21.01-36.39Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 857
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 858
    },
    __self: undefined
  }, __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1463.112,272.128a1.435,1.435,0,0,1-1.015-2.449l18.639-18.639a1.435,1.435,0,1,1,2.03,2.029l-18.638,18.639A1.434,1.434,0,0,1,1463.112,272.128Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 859
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1481.751,272.128a1.432,1.432,0,0,1-1.015-.42L1462.1,253.069a1.435,1.435,0,0,1,2.031-2.029l18.638,18.639a1.435,1.435,0,0,1-1.015,2.449Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 860
    },
    __self: undefined
  })), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1544.022,143.713a4.562,4.562,0,0,1-2.423-.69l-3.255-2.03a2.222,2.222,0,0,0-2.322,0l-3.256,2.032a4.608,4.608,0,0,1-4.846,0,1.193,1.193,0,1,1,1.261-2.025,2.226,2.226,0,0,0,2.321,0l3.257-2.031a4.608,4.608,0,0,1,4.848,0l3.254,2.03a2.226,2.226,0,0,0,2.321,0l3.255-2.032a4.611,4.611,0,0,1,4.848,0L1556.54,141a2.227,2.227,0,0,0,2.32,0l3.257-2.031a4.607,4.607,0,0,1,4.847,0L1570.22,141a2.225,2.225,0,0,0,2.322,0l3.254-2.031a1.193,1.193,0,0,1,1.644.38,1.2,1.2,0,0,1-.382,1.645l-3.254,2.031a4.617,4.617,0,0,1-4.848,0l-3.256-2.03a2.222,2.222,0,0,0-2.319,0l-3.257,2.033a4.614,4.614,0,0,1-4.848,0l-3.253-2.03a2.223,2.223,0,0,0-2.323,0l-3.254,2.032A4.589,4.589,0,0,1,1544.022,143.713Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 862
    },
    __self: undefined
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 864
    },
    __self: undefined
  }, __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1055.942,338.058h0a1.435,1.435,0,0,1-1.243-.718l-23.5-40.695a1.436,1.436,0,0,1,1.244-2.153h46.991a1.436,1.436,0,0,1,1.243,2.153l-23.5,40.7A1.437,1.437,0,0,1,1055.942,338.058Zm-21.009-40.695,21.009,36.39,21.011-36.39Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 865
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1266.008,537.148a40.365,40.365,0,1,1,28.562-11.813A40.265,40.265,0,0,1,1266.008,537.148Zm0-76.925a36.537,36.537,0,1,0,25.857,10.693h0A36.456,36.456,0,0,0,1266.008,460.223Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 866
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 867
    },
    __self: undefined
  }, __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1068.707,521.62a1.436,1.436,0,0,1-1.015-2.45l18.639-18.639a1.435,1.435,0,0,1,2.03,2.03L1069.722,521.2A1.427,1.427,0,0,1,1068.707,521.62Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 868
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1087.346,521.62a1.429,1.429,0,0,1-1.015-.421l-18.639-18.638a1.435,1.435,0,1,1,2.03-2.03l18.639,18.639a1.436,1.436,0,0,1-1.015,2.45Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 869
    },
    __self: undefined
  })), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1149.617,393.2a4.561,4.561,0,0,1-2.423-.689l-3.256-2.031a2.217,2.217,0,0,0-2.321,0l-3.256,2.032a4.614,4.614,0,0,1-4.846,0,1.194,1.194,0,0,1,.633-2.207,1.176,1.176,0,0,1,.628.181,2.22,2.22,0,0,0,2.321,0l3.257-2.031a4.614,4.614,0,0,1,4.848,0l3.254,2.03a2.22,2.22,0,0,0,2.321,0l3.255-2.032a4.617,4.617,0,0,1,4.848,0l3.255,2.031a2.221,2.221,0,0,0,2.32,0l3.257-2.031a4.612,4.612,0,0,1,4.847,0l3.255,2.031a2.226,2.226,0,0,0,2.323,0l3.254-2.031a1.193,1.193,0,1,1,1.262,2.025l-3.254,2.032a4.623,4.623,0,0,1-4.848,0l-3.256-2.031a2.219,2.219,0,0,0-2.319,0l-3.257,2.033a4.62,4.62,0,0,1-4.848,0l-3.253-2.031a2.221,2.221,0,0,0-2.323,0l-3.254,2.032A4.588,4.588,0,0,1,1149.617,393.2Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 871
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1286.442,326.755a1.846,1.846,0,1,1,0-3.692h47.131a1.846,1.846,0,0,1,0,3.692h-47.13Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 872
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1310.008,350.32a1.847,1.847,0,0,1-1.848-1.848V301.343a1.847,1.847,0,1,1,3.693,0v47.129A1.848,1.848,0,0,1,1310.008,350.32Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 873
    },
    __self: undefined
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 875
    },
    __self: undefined
  }, __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M661.537,254.9h0a1.437,1.437,0,0,1-1.243-.718l-23.5-40.7a1.436,1.436,0,0,1,1.244-2.153h46.991a1.436,1.436,0,0,1,1.243,2.153l-23.5,40.7A1.438,1.438,0,0,1,661.537,254.9Zm-21.009-40.7,21.009,36.39,21.011-36.39Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 876
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M871.6,453.984a40.365,40.365,0,1,1,28.562-11.813A40.265,40.265,0,0,1,871.6,453.984Zm0-76.925a36.537,36.537,0,1,0,25.857,10.693h0A36.456,36.456,0,0,0,871.6,377.059Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 877
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 878
    },
    __self: undefined
  }, __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M674.3,438.456a1.435,1.435,0,0,1-1.015-2.45l18.639-18.638a1.435,1.435,0,0,1,2.03,2.029l-18.639,18.639A1.43,1.43,0,0,1,674.3,438.456Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 879
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M692.941,438.456a1.432,1.432,0,0,1-1.015-.42L673.287,419.4a1.435,1.435,0,0,1,2.03-2.029l18.639,18.638a1.435,1.435,0,0,1-1.015,2.45Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 880
    },
    __self: undefined
  })), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M755.212,310.04a4.561,4.561,0,0,1-2.423-.689l-3.256-2.03a2.22,2.22,0,0,0-2.321,0l-3.256,2.032a4.614,4.614,0,0,1-4.846,0,1.194,1.194,0,0,1,.633-2.207,1.168,1.168,0,0,1,.628.182,2.223,2.223,0,0,0,2.321,0l3.257-2.031a4.614,4.614,0,0,1,4.848,0l3.254,2.031a2.223,2.223,0,0,0,2.321,0l3.255-2.032a4.617,4.617,0,0,1,4.848,0l3.255,2.031a2.221,2.221,0,0,0,2.32,0l3.257-2.031a4.612,4.612,0,0,1,4.847,0l3.255,2.031a2.221,2.221,0,0,0,2.323,0l3.254-2.031a1.193,1.193,0,1,1,1.262,2.026l-3.254,2.031a4.623,4.623,0,0,1-4.848,0l-3.256-2.03a2.216,2.216,0,0,0-2.319,0l-3.257,2.033a4.62,4.62,0,0,1-4.848,0l-3.253-2.03a2.223,2.223,0,0,0-2.323,0l-3.254,2.032A4.588,4.588,0,0,1,755.212,310.04Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 882
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M892.037,243.591a1.846,1.846,0,1,1,0-3.692h47.131a1.847,1.847,0,0,1,0,3.693h-47.13Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 883
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M915.6,267.156a1.847,1.847,0,0,1-1.848-1.848V218.179a1.847,1.847,0,1,1,3.693,0v47.129A1.848,1.848,0,0,1,915.6,267.156Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 884
    },
    __self: undefined
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 886
    },
    __self: undefined
  }, __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M267.132,171.731h0a1.436,1.436,0,0,1-1.243-.718l-23.5-40.695a1.435,1.435,0,0,1,1.243-2.153h46.992a1.435,1.435,0,0,1,1.243,2.153l-23.5,40.695A1.438,1.438,0,0,1,267.132,171.731Zm-21.009-40.7,21.009,36.39,21.011-36.39Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 887
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M477.2,370.82a40.365,40.365,0,1,1,28.562-11.813A40.265,40.265,0,0,1,477.2,370.82Zm0-76.925a36.537,36.537,0,1,0,25.857,10.693h0A36.453,36.453,0,0,0,477.2,293.9Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 888
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 889
    },
    __self: undefined
  }, __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M279.9,355.292a1.435,1.435,0,0,1-1.015-2.45L297.521,334.2a1.435,1.435,0,0,1,2.03,2.029l-18.639,18.639A1.43,1.43,0,0,1,279.9,355.292Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 890
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M298.536,355.292a1.43,1.43,0,0,1-1.015-.42l-18.639-18.639a1.435,1.435,0,0,1,2.03-2.029l18.639,18.638a1.435,1.435,0,0,1-1.015,2.45Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 891
    },
    __self: undefined
  })), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M360.807,226.877a4.562,4.562,0,0,1-2.423-.69l-3.256-2.03a2.22,2.22,0,0,0-2.321,0l-3.256,2.032a4.608,4.608,0,0,1-4.846,0,1.194,1.194,0,0,1,.633-2.207,1.177,1.177,0,0,1,.628.182,2.226,2.226,0,0,0,2.321,0l3.257-2.032a4.614,4.614,0,0,1,4.848,0l3.253,2.031a2.227,2.227,0,0,0,2.322,0l3.255-2.033a4.617,4.617,0,0,1,4.848,0l3.255,2.032a2.227,2.227,0,0,0,2.32,0l3.257-2.032a4.612,4.612,0,0,1,4.847,0L387,224.163a2.226,2.226,0,0,0,2.323,0l3.254-2.032a1.193,1.193,0,1,1,1.262,2.026l-3.254,2.031a4.617,4.617,0,0,1-4.848,0l-3.256-2.03a2.222,2.222,0,0,0-2.319,0l-3.257,2.033a4.614,4.614,0,0,1-4.848,0l-3.253-2.03a2.223,2.223,0,0,0-2.323,0l-3.254,2.032A4.589,4.589,0,0,1,360.807,226.877Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 893
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M497.632,160.427a1.846,1.846,0,1,1,0-3.692h47.131a1.847,1.847,0,0,1,0,3.693h-47.13Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 894
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M521.2,183.993a1.847,1.847,0,0,1-1.848-1.849V135.016a1.847,1.847,0,1,1,3.693,0v47.129A1.849,1.849,0,0,1,521.2,183.993Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 895
    },
    __self: undefined
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 897
    },
    __self: undefined
  }, __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M82.793,287.656a40.365,40.365,0,1,1,28.562-11.813A40.265,40.265,0,0,1,82.793,287.656Zm0-76.925a36.537,36.537,0,1,0,25.857,10.693h0A36.453,36.453,0,0,0,82.793,210.731Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 898
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M103.227,77.263a1.846,1.846,0,1,1,0-3.692h47.131a1.847,1.847,0,0,1,0,3.693h-47.13Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 899
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M126.793,100.829a1.847,1.847,0,0,1-1.848-1.848V51.852a1.847,1.847,0,0,1,3.693,0v47.13A1.848,1.848,0,0,1,126.793,100.829Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 900
    },
    __self: undefined
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 902
    },
    __self: undefined
  }, __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1055.942,5.4h0a1.437,1.437,0,0,1-1.243-.718L1031.2-36.01a1.439,1.439,0,0,1,0-1.436,1.437,1.437,0,0,1,1.244-.717h46.991a1.435,1.435,0,0,1,1.243.717,1.439,1.439,0,0,1,0,1.436l-23.5,40.7A1.439,1.439,0,0,1,1055.942,5.4Zm-21.009-40.7L1055.942,1.1l21.011-36.39Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 903
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1266.008,204.492a40.363,40.363,0,1,1,28.562-11.812A40.268,40.268,0,0,1,1266.008,204.492Zm0-76.925a36.539,36.539,0,1,0,25.857,10.694h0A36.453,36.453,0,0,0,1266.008,127.567Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 904
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 905
    },
    __self: undefined
  }, __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1068.707,188.965a1.436,1.436,0,0,1-1.015-2.45l18.639-18.639a1.435,1.435,0,0,1,2.03,2.029l-18.639,18.639A1.431,1.431,0,0,1,1068.707,188.965Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 906
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1087.346,188.965a1.433,1.433,0,0,1-1.015-.421l-18.639-18.639a1.435,1.435,0,1,1,2.03-2.029l18.639,18.639a1.436,1.436,0,0,1-1.015,2.45Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 907
    },
    __self: undefined
  })), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1149.617,60.549a4.553,4.553,0,0,1-2.423-.69l-3.256-2.03a2.22,2.22,0,0,0-2.321,0l-3.256,2.032a4.608,4.608,0,0,1-4.846,0,1.193,1.193,0,1,1,1.261-2.025,2.226,2.226,0,0,0,2.321,0l3.257-2.031a4.608,4.608,0,0,1,4.848,0l3.254,2.03a2.226,2.226,0,0,0,2.321,0l3.255-2.032a4.611,4.611,0,0,1,4.848,0l3.255,2.031a2.227,2.227,0,0,0,2.32,0l3.257-2.031a4.607,4.607,0,0,1,4.847,0l3.255,2.031a2.226,2.226,0,0,0,2.323,0l3.254-2.031a1.193,1.193,0,1,1,1.262,2.025L1179.4,59.86a4.617,4.617,0,0,1-4.848,0l-3.256-2.03a2.222,2.222,0,0,0-2.319,0l-3.257,2.033a4.614,4.614,0,0,1-4.848,0l-3.253-2.03a2.223,2.223,0,0,0-2.323,0l-3.254,2.032A4.58,4.58,0,0,1,1149.617,60.549Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 909
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M1310.008,17.665a1.847,1.847,0,0,1-1.848-1.848V-31.312A1.847,1.847,0,0,1,1310-33.157a1.853,1.853,0,0,1,1.849,1.847V15.82A1.848,1.848,0,0,1,1310.008,17.665Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 910
    },
    __self: undefined
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 912
    },
    __self: undefined
  }, __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M871.6,121.328a40.363,40.363,0,1,1,28.562-11.812A40.264,40.264,0,0,1,871.6,121.328Zm0-76.925A36.539,36.539,0,1,0,897.46,55.1h0A36.453,36.453,0,0,0,871.6,44.4Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 913
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 914
    },
    __self: undefined
  }, __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M674.3,105.8a1.436,1.436,0,0,1-1.015-2.45l18.639-18.639a1.435,1.435,0,0,1,2.03,2.029L675.317,105.38A1.431,1.431,0,0,1,674.3,105.8Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 915
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M692.941,105.8a1.433,1.433,0,0,1-1.015-.421L673.287,86.741a1.435,1.435,0,0,1,2.03-2.029l18.639,18.639a1.436,1.436,0,0,1-1.015,2.45Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 916
    },
    __self: undefined
  }))), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 919
    },
    __self: undefined
  }, __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M477.2,38.165a40.265,40.265,0,0,1-28.562-11.813,40.438,40.438,0,0,1,0-57.125,40.437,40.437,0,0,1,57.124,0A40.125,40.125,0,0,1,517.592-2.211,40.127,40.127,0,0,1,505.76,26.352,40.265,40.265,0,0,1,477.2,38.165Zm0-76.925a36.456,36.456,0,0,0-25.857,10.692,36.611,36.611,0,0,0,0,51.714,36.608,36.608,0,0,0,51.713,0,36.332,36.332,0,0,0,10.71-25.857,36.328,36.328,0,0,0-10.71-25.856h0A36.456,36.456,0,0,0,477.2-38.76Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 920
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 921
    },
    __self: undefined
  }, __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M279.9,22.637a1.436,1.436,0,0,1-1.015-2.45L297.521,1.548a1.435,1.435,0,1,1,2.03,2.03L280.912,22.216A1.431,1.431,0,0,1,279.9,22.637Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 922
    },
    __self: undefined
  }), __jsx("path", {
    className: "ea1cf31c-e8c1-45bd-bc05-9e5d3b413c5e",
    d: "M298.536,22.637a1.431,1.431,0,0,1-1.015-.421L278.882,3.578a1.435,1.435,0,1,1,2.03-2.03l18.639,18.639a1.436,1.436,0,0,1-1.015,2.45Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 923
    },
    __self: undefined
  }))))), __jsx("rect", {
    className: "a1c04dbd-6167-418a-afb4-fb45d2cfee14",
    x: "-3",
    width: "1624",
    height: "679",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 928
    },
    __self: undefined
  })),
  HeartBG: () => __jsx("svg", {
    id: "e01938a3-3d63-47e0-8282-c9d9fdd7801a",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1920 1080",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 932
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 933
    },
    __self: undefined
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 934
    },
    __self: undefined
  }, `.be0b6830-cec4-4a8e-b1f4-01c31b0a31ea{fill:#495077;}`)), __jsx("path", {
    className: "be0b6830-cec4-4a8e-b1f4-01c31b0a31ea",
    d: "M980.227-8.454A94.471,94.471,0,0,1,1026.741,116.8l-39.287,85.7-39.48,86.123L776.19,209.846A94.48,94.48,0,1,1,854.932,38.074,94.085,94.085,0,0,1,908.1-11.188q2.115-.784,4.266-1.466A89.706,89.706,0,0,1,927.072-16a91.02,91.02,0,0,1,11.918-1.062c.046.021.116-.005.2,0a94.395,94.395,0,0,1,41.041,8.608Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 936
    },
    __self: undefined
  }), __jsx("path", {
    className: "be0b6830-cec4-4a8e-b1f4-01c31b0a31ea",
    d: "M275.731,419.347a94.473,94.473,0,0,1,17.225,132.5l-57.514,74.7-57.8,75.069L27.916,586.3A94.48,94.48,0,1,1,143.192,436.576,94.079,94.079,0,0,1,206.057,400.5q2.237-.291,4.486-.472a89.69,89.69,0,0,1,15.083.035,91.071,91.071,0,0,1,11.852,1.639c.04.031.115.021.19.048a94.389,94.389,0,0,1,38.063,17.6Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 937
    },
    __self: undefined
  }), __jsx("path", {
    className: "be0b6830-cec4-4a8e-b1f4-01c31b0a31ea",
    d: "M1960.857,442.023a131.654,131.654,0,0,1-56.669,177.37l-116.764,60.215-117.343,60.516L1549.4,506.038a131.666,131.666,0,0,1,234.04-120.7,131.1,131.1,0,0,1,100.665-8.321q2.994.957,5.94,2.06a124.953,124.953,0,0,1,19.009,8.969,126.929,126.929,0,0,1,13.984,9.08c.033.063.132.1.212.173a131.585,131.585,0,0,1,37.612,44.725Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 938
    },
    __self: undefined
  }), __jsx("path", {
    className: "be0b6830-cec4-4a8e-b1f4-01c31b0a31ea",
    d: "M1335.933,821.7a67.257,67.257,0,0,1,21.608,92.638l-35.439,57-35.612,57.28-114.253-71.054a67.264,67.264,0,0,1,71.03-114.247,66.979,66.979,0,0,1,41.972-30.019q1.563-.365,3.144-.652a63.739,63.739,0,0,1,10.687-1.046,64.667,64.667,0,0,1,8.512.319c.031.019.083.007.138.02a67.228,67.228,0,0,1,28.213,9.764Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 939
    },
    __self: undefined
  }), __jsx("path", {
    className: "be0b6830-cec4-4a8e-b1f4-01c31b0a31ea",
    d: "M798.859,980.771a77.057,77.057,0,0,1-48.775,97.461l-72.959,24.287-73.319,24.41L555.133,980.666a77.064,77.064,0,0,1,146.236-48.685,76.739,76.739,0,0,1,58.966,4.271q1.645.824,3.249,1.727a73.065,73.065,0,0,1,10.184,6.9,74.185,74.185,0,0,1,7.268,6.513c.013.039.068.067.107.119a77.027,77.027,0,0,1,17.716,29.258Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 940
    },
    __self: undefined
  })),
  Gift: () => __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 611 742",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 944
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 945
    },
    __self: undefined
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 946
    },
    __self: undefined
  }, `.b642b112-9229-4007-bff9-3e93c31432c1{fill: #d1ecee;}.a13276d9-cfbe-4276-b4f3-62c066ced35d{fill: #de6273;}.ba388101-f57c-42d8-bb03-b1ee57cd4fe2{fill: #495077;}.a944a60f-4a13-440d-ac6d-ec233824865e{fill: #7e8fad;}.b4ceee02-e459-4ad6-a4d2-23b852f1fd4c{fill: #f1d076;}`)), __jsx("g", {
    id: "a7fd8d41-162e-4929-a1e7-c70661b7548e",
    "data-name": "Layer 2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 948
    },
    __self: undefined
  }, __jsx("g", {
    id: "b417e2f4-1d49-40eb-9bf6-98111837018e",
    "data-name": "Layer 1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 949
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 950
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 951
    },
    __self: undefined
  }, __jsx("polygon", {
    className: "b642b112-9229-4007-bff9-3e93c31432c1",
    points: "251.832 78.251 251.832 151.251 139.111 151.251 114.832 151.251 114.832 78.251 198.998 78.251 241.555 78.251 251.832 78.251",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 952
    },
    __self: undefined
  }), __jsx("polygon", {
    className: "b642b112-9229-4007-bff9-3e93c31432c1",
    points: "465.832 78.251 465.832 151.251 441.59 151.251 328.832 151.251 328.832 78.251 338.412 78.251 381.666 78.251 465.832 78.251",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 953
    },
    __self: undefined
  }), __jsx("polygon", {
    className: "a13276d9-cfbe-4276-b4f3-62c066ced35d",
    points: "252.832 151.251 252.832 352.251 233.956 352.251 139.832 352.251 139.832 179.214 139.832 151.251 252.832 151.251",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 954
    },
    __self: undefined
  }), __jsx("polygon", {
    className: "a13276d9-cfbe-4276-b4f3-62c066ced35d",
    points: "440.832 179.214 440.832 352.251 347.738 352.251 327.832 352.251 327.832 151.251 440.832 151.251 440.832 179.214",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 955
    },
    __self: undefined
  }), __jsx("polygon", {
    className: "ba388101-f57c-42d8-bb03-b1ee57cd4fe2",
    points: "306.599 78.251 252.48 78.251 242.176 78.251 199.503 78.251 174.781 53.523 228.347 0 290.356 62.014 306.599 78.251",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 956
    },
    __self: undefined
  }), __jsx("polygon", {
    className: "a944a60f-4a13-440d-ac6d-ec233824865e",
    points: "328.832 151.084 328.832 352.251 252.832 352.251 252.832 151.084 252.832 78.251 307.132 78.251 328.832 78.251 328.832 151.084",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 957
    },
    __self: undefined
  }), __jsx("polygon", {
    className: "a944a60f-4a13-440d-ac6d-ec233824865e",
    points: "405.925 53.523 381.204 78.251 337.833 78.251 328.226 78.251 306.599 78.251 290.356 62.014 352.402 0 405.925 53.523",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 958
    },
    __self: undefined
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 960
    },
    __self: undefined
  }, __jsx("polygon", {
    className: "ba388101-f57c-42d8-bb03-b1ee57cd4fe2",
    points: "384.358 665.485 460.934 742.019 610.734 592.274 534.164 515.686 524.344 525.493 442.497 607.364 384.358 665.485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 961
    },
    __self: undefined
  }), __jsx("path", {
    className: "b4ceee02-e459-4ad6-a4d2-23b852f1fd4c",
    d: "M12.905,347.761a43.923,43.923,0,0,1,62.169,0L177.652,450.328a40.814,40.814,0,0,0,1.178,8.576c4.807,20.181,23.282,34.358,44.913,34.347l124.089-.061V481.251l-124.27.061c-15.99,0-29.622-10.344-33.147-25.15a30.163,30.163,0,0,1-.936-7.42,31.674,31.674,0,0,1,9.895-22.877,34.745,34.745,0,0,1,24.188-9.614l184.505,1.922,112,111.993L442.5,607.735,415.94,581.251,184.1,581.244,12.905,409.991A43.962,43.962,0,0,1,12.905,347.761Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 962
    },
    __self: undefined
  })))))),
  Objectives: () => __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 550 592",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 970
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 971
    },
    __self: undefined
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 972
    },
    __self: undefined
  }, `.b6266668-f141-4402-9de8-c766df60bcd3{fill: #66c7c7;}.f4d81330-3509-4a47-a390-4afb73829cb2{fill: #d1ecee;}.f74b8e02-29fc-4004-ade4-f7f7c3db0f7c{fill: #495077;}.b8f15ce7-4f10-4df5-8d3b-ded4cb5b4728{fill: #fff;}`)), __jsx("g", {
    id: "f55798c7-f493-4fff-8902-097cfc3620bb",
    "data-name": "Layer 2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 974
    },
    __self: undefined
  }, __jsx("g", {
    id: "adc62036-0c51-4f5f-83a8-822b489ab895",
    "data-name": "Layer 1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 975
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 976
    },
    __self: undefined
  }, __jsx("polygon", {
    className: "b6266668-f141-4402-9de8-c766df60bcd3",
    points: "426.235 92 332 92 332 0.255 426.235 92",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 977
    },
    __self: undefined
  }), __jsx("path", {
    className: "f4d81330-3509-4a47-a390-4afb73829cb2",
    d: "M426,543.505V592H0V0H332V92h94V296.049A123.531,123.531,0,0,0,302.952,419.806C302.952,488.139,358.032,543.505,426,543.505Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 978
    },
    __self: undefined
  }), __jsx("rect", {
    className: "f74b8e02-29fc-4004-ade4-f7f7c3db0f7c",
    x: "58",
    y: "78",
    width: "116",
    height: "18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 979
    },
    __self: undefined
  }), __jsx("rect", {
    className: "f74b8e02-29fc-4004-ade4-f7f7c3db0f7c",
    x: "60",
    y: "190",
    width: "307",
    height: "18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 980
    },
    __self: undefined
  }), __jsx("rect", {
    className: "f74b8e02-29fc-4004-ade4-f7f7c3db0f7c",
    x: "60",
    y: "245",
    width: "307",
    height: "18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 981
    },
    __self: undefined
  }), __jsx("rect", {
    className: "f74b8e02-29fc-4004-ade4-f7f7c3db0f7c",
    x: "60",
    y: "300",
    width: "307",
    height: "18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 982
    },
    __self: undefined
  }), __jsx("rect", {
    className: "f74b8e02-29fc-4004-ade4-f7f7c3db0f7c",
    x: "60",
    y: "355",
    width: "307",
    height: "18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 983
    },
    __self: undefined
  }), __jsx("rect", {
    className: "f74b8e02-29fc-4004-ade4-f7f7c3db0f7c",
    x: "60",
    y: "410",
    width: "307",
    height: "18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 984
    },
    __self: undefined
  }), __jsx("rect", {
    className: "f74b8e02-29fc-4004-ade4-f7f7c3db0f7c",
    x: "60",
    y: "465",
    width: "166",
    height: "18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 985
    },
    __self: undefined
  }), __jsx("path", {
    className: "b6266668-f141-4402-9de8-c766df60bcd3",
    d: "M426.58,295.78a123.364,123.364,0,1,1-110.365,68.26A123.438,123.438,0,0,1,426.58,295.78Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 986
    },
    __self: undefined
  }), __jsx("path", {
    className: "b8f15ce7-4f10-4df5-8d3b-ded4cb5b4728",
    d: "M414.661,488.525a8.9,8.9,0,0,1-6.29-2.607L352.03,429.577,364.61,417l49.223,49.224L495.48,361.48l14.033,10.934L421.678,485.1a8.882,8.882,0,0,1-6.469,3.412C415.026,488.519,414.843,488.525,414.661,488.525Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 987
    },
    __self: undefined
  }))))),
  Thinking: () => __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 780 746",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 994
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 995
    },
    __self: undefined
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 996
    },
    __self: undefined
  }, `.b1b993b3-0a3f-4b91-a6a0-a0e289c3154b{fill: #de6273;}.e420a3fc-0711-4bbb-ad82-02bde078b839{fill: #fff;}.bc9e6bf6-e573-4fb8-b727-c4d3d74a1378{fill: #66c7c7;}`)), __jsx("g", {
    id: "bcc3112f-912d-463e-b11f-7e478c721b0b",
    "data-name": "Layer 2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 998
    },
    __self: undefined
  }, __jsx("g", {
    id: "a0ec0bb8-e387-4ece-a2de-ef1b4cee85cf",
    "data-name": "Layer 1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 999
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1000
    },
    __self: undefined
  }, __jsx("path", {
    className: "b1b993b3-0a3f-4b91-a6a0-a0e289c3154b",
    d: "M93.094,589.537H89.78C44.569,589.537,8,552.7,8,507.322v-2.2a81.965,81.965,0,0,1,67-80.813v-.5a82.063,82.063,0,0,1,0-116.205l1.473-1.465a82.248,82.248,0,0,1,85.4-19.539,61.828,61.828,0,0,1,6.252,2.492l1.614-3.6a82.285,82.285,0,0,1,66.205-88.066l2.136-.373a82.448,82.448,0,0,1,69.441,18.363,82.335,82.335,0,0,1,76.939-52.88h2.136a82.437,82.437,0,0,1,76.285,51.2,82.271,82.271,0,0,1,67.157-16.682l2.058.373a82.211,82.211,0,0,1,65.98,90.276l.662,1.985a82.155,82.155,0,0,1,92.834,16.456l1.544,1.465a82,82,0,0,1,.585,115.544A82.209,82.209,0,0,1,773,505.208v2.114a82.215,82.215,0,0,1-82.215,82.215H464v.916a73.084,73.084,0,0,1-73.084,73.084H307v.957a73.07,73.07,0,0,1-73.094,73.043H93.094A73.115,73.115,0,0,1,20,664.494v-1.915A73.065,73.065,0,0,1,93.094,589.537Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1001
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1002
    },
    __self: undefined
  }, __jsx("path", {
    className: "e420a3fc-0711-4bbb-ad82-02bde078b839",
    d: "M390,670.537H138v-14H391.446a66.075,66.075,0,0,0,66-66H470A80.092,80.092,0,0,1,390,670.537Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1003
    },
    __self: undefined
  }), __jsx("path", {
    className: "e420a3fc-0711-4bbb-ad82-02bde078b839",
    d: "M233.27,745.537H93.3a80.3,80.3,0,0,1-80.3-80.3v-1.61a80.091,80.091,0,0,1,80-80v15.018c-36.392,0-66,29.159-66,65v1.022a65.87,65.87,0,0,0,65.869,65.869h141.2c36.391,0,66-29.159,66-65h13.2A80.091,80.091,0,0,1,233.27,745.537Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1004
    },
    __self: undefined
  }), __jsx("path", {
    className: "e420a3fc-0711-4bbb-ad82-02bde078b839",
    d: "M690,596.537H307v-14H689.721c41.508,0,75.279-33.6,75.279-74.906v-2.195A74.723,74.723,0,0,0,692.491,430.6c-1.068-.063-1.915-.049-2.77-.063H589v-14H690c1.218,0,2.444.007,3.571.091C741.912,418.3,780,457.311,780,505.441v2.185C780,556.652,739.624,596.537,690,596.537Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1005
    },
    __self: undefined
  }), __jsx("path", {
    className: "e420a3fc-0711-4bbb-ad82-02bde078b839",
    d: "M169,596.537H89.429A89.429,89.429,0,0,1,0,507.108v-1.667a88.665,88.665,0,0,1,72.863-87.4,82.274,82.274,0,0,1,16.047-1.5H144v14H89.385a71.555,71.555,0,0,0-13.511,1.217C39.965,438.009,14,468.087,14,503.3v4.337a74.9,74.9,0,0,0,74.9,74.9H169Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1006
    },
    __self: undefined
  }), __jsx("path", {
    className: "e420a3fc-0711-4bbb-ad82-02bde078b839",
    d: "M312.658,218.377l-5.7-4.543-6.577-2.441c13.175-33.41,46.79-55.856,83.648-55.856h2.135c36.556,0,69.11,21.226,82.934,54.079l-13.359,5.291c-11.6-27.562-38.909-45.37-69.575-45.37h-2.135c-30.919,0-59.119,18.833-70.17,46.861A6.958,6.958,0,0,1,312.658,218.377Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1007
    },
    __self: undefined
  }), __jsx("path", {
    className: "e420a3fc-0711-4bbb-ad82-02bde078b839",
    d: "M626.726,588.537H612.973a75.082,75.082,0,0,0-75-75H485v-14h52.726A89.1,89.1,0,0,1,626.726,588.537Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1008
    },
    __self: undefined
  }), __jsx("path", {
    className: "e420a3fc-0711-4bbb-ad82-02bde078b839",
    d: "M253.2,572.537h-13.99a75.117,75.117,0,0,0-75.07-75H162v-14h2.125A89.135,89.135,0,0,1,253.2,572.537Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1009
    },
    __self: undefined
  }), __jsx("path", {
    className: "e420a3fc-0711-4bbb-ad82-02bde078b839",
    d: "M393,586.537H379V505.583c0-49.305,39.925-89.422,89-89.422V430.59a75.083,75.083,0,0,0-75,74.993Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1010
    },
    __self: undefined
  }), __jsx("path", {
    className: "e420a3fc-0711-4bbb-ad82-02bde078b839",
    d: "M224.431,430.537H144v-14h80.808a75.087,75.087,0,0,0,75.008-75h13.623A89.1,89.1,0,0,1,224.431,430.537Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1011
    },
    __self: undefined
  }), __jsx("path", {
    className: "e420a3fc-0711-4bbb-ad82-02bde078b839",
    d: "M697.559,429.216l-5.748-5.961-5.123-3.128a7.257,7.257,0,0,1,1.3-1.825,75.243,75.243,0,0,0-.535-105.507l-1.41-1.336A75.2,75.2,0,0,0,601.261,296.3a73.5,73.5,0,0,0-21.475,15.032l-10.2-10.2a87.685,87.685,0,0,1,25.638-17.934,89.592,89.592,0,0,1,100.9,17.942l1.4,1.328c34.572,34.575,34.917,90.87.965,125.745A9.7,9.7,0,0,1,697.559,429.216Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1012
    },
    __self: undefined
  }), __jsx("path", {
    className: "e420a3fc-0711-4bbb-ad82-02bde078b839",
    d: "M400.132,319.841l-7.652-12.232a74.949,74.949,0,0,0,33.491-46.838,89.823,89.823,0,0,1,104.947-70.826l1.973.359c45.775,8.931,77.282,52.1,71.83,98.31l-14.331-1.69a75.362,75.362,0,0,0-60.169-82.441l-1.966-.355a75.392,75.392,0,0,0-88.175,59.661A89.416,89.416,0,0,1,400.132,319.841Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1013
    },
    __self: undefined
  }), __jsx("path", {
    className: "e420a3fc-0711-4bbb-ad82-02bde078b839",
    d: "M69.589,429.117a89.569,89.569,0,0,1,0-126.524l1.483-1.479A89.822,89.822,0,0,1,163.9,279.857a69.344,69.344,0,0,1,6.922,2.765,87.48,87.48,0,0,1,26.791,18.533L187.356,311.3a73.331,73.331,0,0,0-22.5-15.542,55.164,55.164,0,0,0-5.647-2.258,75.338,75.338,0,0,0-77.924,17.811l-1.5,1.5a75.117,75.117,0,0,0,.011,106.106Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1014
    },
    __self: undefined
  }), __jsx("path", {
    className: "e420a3fc-0711-4bbb-ad82-02bde078b839",
    d: "M162.2,286.205a89.279,89.279,0,0,1,71.981-95.883l2.276-.4a89.167,89.167,0,0,1,75.349,20.009,87.487,87.487,0,0,1,18.343,21.8l-12.393,7.383a73.387,73.387,0,0,0-15.332-18.22,74.973,74.973,0,0,0-63.35-16.782l-2.265.4a74.853,74.853,0,0,0-60.236,80.4Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1015
    },
    __self: undefined
  })), __jsx("path", {
    className: "bc9e6bf6-e573-4fb8-b727-c4d3d74a1378",
    d: "M319.207,53.1C287.826,65.08,278.082,74.817,266.1,106.2c-11.971-31.381-21.715-41.118-53.1-53.095C244.389,41.125,254.133,31.459,266.1,0,278.082,31.459,287.826,41.125,319.207,53.1Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1017
    },
    __self: undefined
  }), __jsx("rect", {
    className: "bc9e6bf6-e573-4fb8-b727-c4d3d74a1378",
    x: "439",
    y: "81.537",
    width: "78",
    height: "22",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1018
    },
    __self: undefined
  }), __jsx("rect", {
    className: "bc9e6bf6-e573-4fb8-b727-c4d3d74a1378",
    x: "467",
    y: "52.537",
    width: "22",
    height: "79",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1019
    },
    __self: undefined
  }), __jsx("polygon", {
    className: "bc9e6bf6-e573-4fb8-b727-c4d3d74a1378",
    points: "76.381 194.537 37 194.537 37 171.537 115 171.462 115 193.537 76.381 194.537",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1020
    },
    __self: undefined
  }), __jsx("rect", {
    className: "bc9e6bf6-e573-4fb8-b727-c4d3d74a1378",
    x: "65",
    y: "143.537",
    width: "22",
    height: "78",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1021
    },
    __self: undefined
  }), __jsx("polygon", {
    className: "bc9e6bf6-e573-4fb8-b727-c4d3d74a1378",
    points: "550.096 698.537 511 698.537 511 676.537 590 676.466 590 697.537 550.096 698.537",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1022
    },
    __self: undefined
  }), __jsx("rect", {
    className: "bc9e6bf6-e573-4fb8-b727-c4d3d74a1378",
    x: "539",
    y: "648.537",
    width: "22",
    height: "78",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1023
    },
    __self: undefined
  }))))),
  Search: () => __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 330 355",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1029
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1030
    },
    __self: undefined
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1031
    },
    __self: undefined
  }, `
        .a0955062-b993-4883-8d8f-9caf5a276b9a {
          fill: #3a4040;
        }
  
        .ac3a5f90-0b96-4e34-abf8-6920deede03c {
          fill: none;
        }
  
        .b8e28d05-3590-4ff2-81b5-7a415dd9de7f {
          isolation: isolate;
        }
  
        .a3121d85-70d0-4ca0-b31c-e1d5cd3f60b3, .ab54c441-ffed-4218-8ed2-38530226b3c7, .b171a8d2-657a-4a77-af0d-4938b6a137c0 {
          fill: #7d90ad;
        }
  
        .a3121d85-70d0-4ca0-b31c-e1d5cd3f60b3 {
          opacity: 0.69;
        }
  
        .a3121d85-70d0-4ca0-b31c-e1d5cd3f60b3, .b1925d8f-3e4d-4236-80c3-60444f2d7d01 {
          mix-blend-mode: multiply;
        }
  
        .b1925d8f-3e4d-4236-80c3-60444f2d7d01, .f0bfbe1f-e5e3-441d-aff1-dfcb1e3f77d0 {
          fill: #484f77;
        }
  
        .afe94ef2-99b2-4255-8d29-a1ddab4fa48e {
          clip-path: url(#bd9c921a-4bc8-4295-9033-c3d7063a3744);
        }
  
        .b0d17d73-8e95-42c7-b499-08449cb2d066 {
          opacity: 0.06;
        }
  
        .a9a52e5d-15ec-4f78-9242-ebfe120e115b {
          fill: #fff;
        }
  
        .e4a33b1d-8b07-448a-ae89-dd359b8fb727 {
          fill: gray;
          opacity: 0.46;
        }
  
        .b21736cf-fc2d-4d2b-8b1e-2d29ecc7b79a {
          clip-path: url(#bb8338b5-7146-4acc-987c-efe8ae823b81);
        }
  
        .fa523fc9-b1d8-45b8-aa04-64e0c424cf0e {
          fill: #d1ecf0;
        }
  
        .f37aa9ea-026e-4cff-8092-55802c1d719c {
          fill: #e9e8e9;
        }
  
        .ab54c441-ffed-4218-8ed2-38530226b3c7 {
          opacity: 0.5;
        }
  
        .b217f0b2-cb39-47f6-a06e-228310089800 {
          fill: #ec3830;
        }
  
        .b0692dd3-0e16-428b-a66f-44be8b23c54d {
          fill: #df6173;
        }
  
        .b5f98ec8-a892-4a4f-9d05-2f7cc0982749 {
          fill: #efa50c;
        }
  
        .ef7ca77d-dc5f-4afd-b937-2dd4dc7cfead {
          fill: #f3d176;
        }
  
        .a128f984-d78c-4899-99be-a20235d464ca {
          fill: #13af2c;
        }
  
        .b84c4b48-a79d-41cd-9a3f-31542feaf73e {
          fill: #6aada4;
        }
  
        .e15c6a1d-5a89-4f2b-92f6-a0cf79dc83cc {
          fill: #f68d4b;
        }`), __jsx("clipPath", {
    id: "bd9c921a-4bc8-4295-9033-c3d7063a3744",
    transform: "translate(-6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1121
    },
    __self: undefined
  }, __jsx("rect", {
    className: "a0955062-b993-4883-8d8f-9caf5a276b9a",
    x: "23",
    y: "85.908",
    width: "296",
    height: "181",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1122
    },
    __self: undefined
  })), __jsx("clipPath", {
    id: "bb8338b5-7146-4acc-987c-efe8ae823b81",
    transform: "translate(-6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1124
    },
    __self: undefined
  }, __jsx("rect", {
    className: "ac3a5f90-0b96-4e34-abf8-6920deede03c",
    y: "58.908",
    width: "342",
    height: "208",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1125
    },
    __self: undefined
  }))), __jsx("g", {
    className: "b8e28d05-3590-4ff2-81b5-7a415dd9de7f",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1128
    },
    __self: undefined
  }, __jsx("g", {
    id: "bb151c38-84c9-4c38-9e61-8b65fbbc5415",
    "data-name": "Layer 2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1129
    },
    __self: undefined
  }, __jsx("g", {
    id: "bfe80df0-3d8b-47e9-9b62-816fb74a86a7",
    "data-name": "Layer 5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1130
    },
    __self: undefined
  }, __jsx("path", {
    className: "a3121d85-70d0-4ca0-b31c-e1d5cd3f60b3",
    d: "M328.9,331.146c0-3.384-69.514-6.127-155.264-6.127s-155.264,2.743-155.264,6.127,69.514,6.126,155.264,6.126S328.9,334.53,328.9,331.146Z",
    transform: "translate(-6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1131
    },
    __self: undefined
  })), __jsx("g", {
    id: "b0e7f2d3-2b06-456c-a59b-65fe78c9819b",
    "data-name": "Layer 2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1133
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1134
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1135
    },
    __self: undefined
  }, __jsx("polygon", {
    className: "f0bfbe1f-e5e3-441d-aff1-dfcb1e3f77d0",
    points: "204.166 277.908 125.834 277.908 119.515 322.908 210.484 322.908 204.166 277.908",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1136
    },
    __self: undefined
  }), __jsx("polygon", {
    className: "b1925d8f-3e4d-4236-80c3-60444f2d7d01",
    points: "203.777 278.908 126.223 278.908 123.472 301.908 206.528 301.908 203.777 278.908",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1137
    },
    __self: undefined
  })), __jsx("path", {
    className: "f0bfbe1f-e5e3-441d-aff1-dfcb1e3f77d0",
    d: "M105.931,327.908h0a7.238,7.238,0,0,1,7.454-7H228.616a7.237,7.237,0,0,1,7.453,7H105.931Z",
    transform: "translate(-6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1139
    },
    __self: undefined
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1141
    },
    __self: undefined
  }, __jsx("rect", {
    className: "f0bfbe1f-e5e3-441d-aff1-dfcb1e3f77d0",
    y: "68.908",
    width: "330",
    height: "215",
    rx: "7.27",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1142
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1143
    },
    __self: undefined
  }, __jsx("rect", {
    className: "a0955062-b993-4883-8d8f-9caf5a276b9a",
    x: "17",
    y: "85.908",
    width: "296",
    height: "181",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1144
    },
    __self: undefined
  }), __jsx("g", {
    className: "afe94ef2-99b2-4255-8d29-a1ddab4fa48e",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1145
    },
    __self: undefined
  }, __jsx("g", {
    className: "b0d17d73-8e95-42c7-b499-08449cb2d066",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1146
    },
    __self: undefined
  }, __jsx("rect", {
    className: "a9a52e5d-15ec-4f78-9242-ebfe120e115b",
    x: "107.767",
    y: "-2.344",
    width: "101.672",
    height: "336.614",
    transform: "translate(122.157 -61.571) rotate(36.079)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1147
    },
    __self: undefined
  }), __jsx("rect", {
    className: "a9a52e5d-15ec-4f78-9242-ebfe120e115b",
    x: "202.971",
    y: "42.066",
    width: "30.955",
    height: "336.614",
    transform: "translate(159.789 -88.297) rotate(36.08)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1148
    },
    __self: undefined
  })))), __jsx("path", {
    className: "e4a33b1d-8b07-448a-ae89-dd359b8fb727",
    d: "M173.635,77.423A2.635,2.635,0,1,1,171,74.788,2.635,2.635,0,0,1,173.635,77.423Z",
    transform: "translate(-6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1152
    },
    __self: undefined
  })), __jsx("g", {
    className: "b21736cf-fc2d-4d2b-8b1e-2d29ecc7b79a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1154
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1155
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1156
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1157
    },
    __self: undefined
  }, __jsx("rect", {
    className: "fa523fc9-b1d8-45b8-aa04-64e0c424cf0e",
    x: "17",
    y: "86.908",
    width: "294",
    height: "29",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1158
    },
    __self: undefined
  }), __jsx("rect", {
    className: "f37aa9ea-026e-4cff-8092-55802c1d719c",
    x: "17",
    y: "115.908",
    width: "294",
    height: "186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1159
    },
    __self: undefined
  }), __jsx("rect", {
    className: "ab54c441-ffed-4218-8ed2-38530226b3c7",
    x: "17",
    y: "115.908",
    width: "294",
    height: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1160
    },
    __self: undefined
  })), __jsx("path", {
    className: "ab54c441-ffed-4218-8ed2-38530226b3c7",
    d: "M317,98.908H94.075a2.965,2.965,0,0,1-2.519-1.4L88.531,92.64a3.549,3.549,0,0,0-2.775-1.732H36.522a3.54,3.54,0,0,0-2.765,1.715l-3.032,4.884a2.967,2.967,0,0,1-2.52,1.4H23v1H317Z",
    transform: "translate(-6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1162
    },
    __self: undefined
  }), __jsx("path", {
    className: "fa523fc9-b1d8-45b8-aa04-64e0c424cf0e",
    d: "M317,99.908H93.886a2.966,2.966,0,0,1-2.6-1.532l-3.207-5.805a3.025,3.025,0,0,0-2.327-1.663H36.522A3.025,3.025,0,0,0,34.2,92.571l-3.2,5.8a2.966,2.966,0,0,1-2.6,1.533H23v16H317Z",
    transform: "translate(-6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1163
    },
    __self: undefined
  }), __jsx("polygon", {
    className: "b171a8d2-657a-4a77-af0d-4938b6a137c0",
    points: "80.616 93.894 80.034 93.312 78.244 95.102 76.454 93.312 75.872 93.894 77.662 95.684 75.872 97.474 76.454 98.056 78.244 96.266 80.034 98.056 80.616 97.474 78.826 95.684 80.616 93.894",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1164
    },
    __self: undefined
  }), __jsx("path", {
    className: "b171a8d2-657a-4a77-af0d-4938b6a137c0",
    d: "M33.685,106.908h-4.83l2.035-2.1a.739.739,0,1,0-1.045-1.046l-3.3,3.3a.739.739,0,0,0,0,1.046l3.3,3.3a.739.739,0,0,0,1.045-1.046l-2.035-2.449h4.83c.409.414.74.083.74-.325A.652.652,0,0,0,33.685,106.908Z",
    transform: "translate(-6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1165
    },
    __self: undefined
  }), __jsx("path", {
    className: "ab54c441-ffed-4218-8ed2-38530226b3c7",
    d: "M47.859,107.06l-3.3-3.3a.74.74,0,1,0-1.046,1.046l2.035,2.1h-4.83a.651.651,0,0,0-.739.675c0,.408.331.739.739.325h4.83l-2.035,2.449a.74.74,0,1,0,1.046,1.046l3.3-3.3A.739.739,0,0,0,47.859,107.06Z",
    transform: "translate(-6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1166
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1167
    },
    __self: undefined
  }, __jsx("rect", {
    className: "b171a8d2-657a-4a77-af0d-4938b6a137c0",
    x: "301",
    y: "106.908",
    width: "7",
    height: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1168
    },
    __self: undefined
  }), __jsx("rect", {
    className: "b171a8d2-657a-4a77-af0d-4938b6a137c0",
    x: "301",
    y: "109.908",
    width: "7",
    height: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1169
    },
    __self: undefined
  }), __jsx("rect", {
    className: "b171a8d2-657a-4a77-af0d-4938b6a137c0",
    x: "301",
    y: "103.908",
    width: "7",
    height: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1170
    },
    __self: undefined
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1172
    },
    __self: undefined
  }, __jsx("rect", {
    className: "b171a8d2-657a-4a77-af0d-4938b6a137c0",
    x: "60",
    y: "101.908",
    width: "210",
    height: "11",
    rx: "3.403",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1173
    },
    __self: undefined
  }), __jsx("rect", {
    className: "a9a52e5d-15ec-4f78-9242-ebfe120e115b",
    x: "60",
    y: "102.908",
    width: "209",
    height: "10",
    rx: "3.086",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1174
    },
    __self: undefined
  })), __jsx("path", {
    className: "ab54c441-ffed-4218-8ed2-38530226b3c7",
    d: "M103.856,97.908H96.17A2.3,2.3,0,0,1,94.2,96.789l-2.234-3.735a.757.757,0,0,1,.65-1.146h7.479a2.667,2.667,0,0,1,2.288,1.3l2.127,3.556A.757.757,0,0,1,103.856,97.908Z",
    transform: "translate(-6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1176
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1177
    },
    __self: undefined
  }, __jsx("path", {
    className: "b217f0b2-cb39-47f6-a06e-228310089800",
    d: "M296.176,91.932a3.238,3.238,0,1,0-3.238,3.237A3.242,3.242,0,0,0,296.176,91.932Z",
    transform: "translate(-6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1178
    },
    __self: undefined
  }), __jsx("path", {
    className: "b0692dd3-0e16-428b-a66f-44be8b23c54d",
    d: "M292.938,94.668a2.737,2.737,0,1,1,2.736-2.736A2.74,2.74,0,0,1,292.938,94.668Z",
    transform: "translate(-6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1179
    },
    __self: undefined
  }), __jsx("path", {
    className: "b5f98ec8-a892-4a4f-9d05-2f7cc0982749",
    d: "M305.379,91.932a3.238,3.238,0,1,0-3.238,3.237A3.242,3.242,0,0,0,305.379,91.932Z",
    transform: "translate(-6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1180
    },
    __self: undefined
  }), __jsx("path", {
    className: "ef7ca77d-dc5f-4afd-b937-2dd4dc7cfead",
    d: "M302.141,94.668a2.737,2.737,0,1,1,2.736-2.736A2.74,2.74,0,0,1,302.141,94.668Z",
    transform: "translate(-6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1181
    },
    __self: undefined
  }), __jsx("path", {
    className: "a128f984-d78c-4899-99be-a20235d464ca",
    d: "M314.582,91.932a3.238,3.238,0,1,0-3.238,3.237A3.242,3.242,0,0,0,314.582,91.932Z",
    transform: "translate(-6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1182
    },
    __self: undefined
  }), __jsx("path", {
    className: "b84c4b48-a79d-41cd-9a3f-31542feaf73e",
    d: "M311.344,94.668a2.737,2.737,0,1,1,2.737-2.736A2.74,2.74,0,0,1,311.344,94.668Z",
    transform: "translate(-6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1183
    },
    __self: undefined
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1185
    },
    __self: undefined
  }, __jsx("path", {
    className: "b171a8d2-657a-4a77-af0d-4938b6a137c0",
    d: "M297.6,106.253a1.435,1.435,0,1,0,1.87.789A1.438,1.438,0,0,0,297.6,106.253Z",
    transform: "translate(-6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1186
    },
    __self: undefined
  }), __jsx("path", {
    className: "b171a8d2-657a-4a77-af0d-4938b6a137c0",
    d: "M302,107c.188-.118-.025-.093-.025-.093H301.1a5.44,5.44,0,0,0-.312-.866l.619-.622a.213.213,0,0,0,0-.3l-.811-.807a.213.213,0,0,0-.3,0l-.619.622a4.673,4.673,0,0,0-.673-.309v-.877c-.08-.117-.175-.213-.293.16h-1.145c-.117-.369-.562-.156-.562-.156v.877a1.853,1.853,0,0,1-.4.312l-.621-.619a.214.214,0,0,0-.3,0l-.807.811a.213.213,0,0,0,0,.3l.622.618a2.573,2.573,0,0,0-.31.854h-.876c-.118-.1-.213,0-.31.112v1.145a4.559,4.559,0,0,1,.313.743h.877s.174-.022.313.216l-.619.622a.212.212,0,0,0,0,.3l.811.807a.212.212,0,0,0,.3,0l.619-.622c.238.138.49.242.384.31v.877c.368.117.464.212.582.49h1.144a2.7,2.7,0,0,1,.274-.494v-.877a6.365,6.365,0,0,0,.685-.313l.622.619a.212.212,0,0,0,.3,0l.808-.811a.213.213,0,0,0,0-.3l-.622-.619c.138-.238.241-.49.309-.2h.877c.118-.549.213-.645.021-.763Zm-3.072,2.51a2.081,2.081,0,1,1,1.144-2.712A2.083,2.083,0,0,1,298.928,109.511Z",
    transform: "translate(-6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1187
    },
    __self: undefined
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1189
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1190
    },
    __self: undefined
  }, __jsx("path", {
    className: "b171a8d2-657a-4a77-af0d-4938b6a137c0",
    d: "M284.613,109.956a1.674,1.674,0,1,1-1.674-1.674A1.674,1.674,0,0,1,284.613,109.956Z",
    transform: "translate(-6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1191
    },
    __self: undefined
  }), __jsx("path", {
    className: "b171a8d2-657a-4a77-af0d-4938b6a137c0",
    d: "M288.29,105.75a1.306,1.306,0,1,1-1.305-1.306A1.305,1.305,0,0,1,288.29,105.75Z",
    transform: "translate(-6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1192
    },
    __self: undefined
  }), __jsx("circle", {
    className: "b171a8d2-657a-4a77-af0d-4938b6a137c0",
    cx: "276.43",
    cy: "104.731",
    r: "1.195",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1193
    },
    __self: undefined
  })), __jsx("polygon", {
    className: "b171a8d2-657a-4a77-af0d-4938b6a137c0",
    points: "277.233 110.24 276.644 109.673 280.186 105.99 276.341 105.13 276.519 104.332 281.783 105.509 277.233 110.24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1195
    },
    __self: undefined
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1197
    },
    __self: undefined
  }, __jsx("polygon", {
    className: "b171a8d2-657a-4a77-af0d-4938b6a137c0",
    points: "55 107.647 52.5 105.395 50 107.647 50 110.908 55 110.908 55 107.647",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1198
    },
    __self: undefined
  }), __jsx("polygon", {
    className: "b171a8d2-657a-4a77-af0d-4938b6a137c0",
    points: "48.618 108.144 47.972 107.396 52.019 103.896 56.066 107.396 55.419 108.143 52.019 105.203 48.618 108.144",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1199
    },
    __self: undefined
  })), __jsx("path", {
    className: "b171a8d2-657a-4a77-af0d-4938b6a137c0",
    d: "M75,106.908V104.33l-.872.87a3.408,3.408,0,1,0,.179,4.988l-.848-.849a2.209,2.209,0,1,1-.183-3.286l-.855.855Z",
    transform: "translate(-6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1201
    },
    __self: undefined
  }), __jsx("rect", {
    className: "a9a52e5d-15ec-4f78-9242-ebfe120e115b",
    x: "18",
    y: "116.908",
    width: "292",
    height: "184",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1202
    },
    __self: undefined
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1204
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1205
    },
    __self: undefined
  }, __jsx("rect", {
    className: "f0bfbe1f-e5e3-441d-aff1-dfcb1e3f77d0",
    x: "88",
    y: "189.908",
    width: "151",
    height: "15",
    rx: "3.271",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1206
    },
    __self: undefined
  }), __jsx("path", {
    className: "a9a52e5d-15ec-4f78-9242-ebfe120e115b",
    d: "M226,203.908H97.963A1.963,1.963,0,0,1,96,201.945v-8.074a1.963,1.963,0,0,1,1.963-1.963H226Z",
    transform: "translate(-6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1207
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1208
    },
    __self: undefined
  }, __jsx("path", {
    className: "a9a52e5d-15ec-4f78-9242-ebfe120e115b",
    d: "M240.475,203.248,236.5,199.27a3.973,3.973,0,1,1,.919-.952h0l4,3.994Z",
    transform: "translate(-6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1209
    },
    __self: undefined
  }), __jsx("circle", {
    className: "f0bfbe1f-e5e3-441d-aff1-dfcb1e3f77d0",
    cx: "228.118",
    cy: "196.068",
    r: "2.898",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1210
    },
    __self: undefined
  }))), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1213
    },
    __self: undefined
  }, __jsx("path", {
    className: "f0bfbe1f-e5e3-441d-aff1-dfcb1e3f77d0",
    d: "M132.561,162.934l3.3,2.578c2.032,1.589,2.314,2.891,2.314,5.313,0,2.838-1.947,4.14-5.588,4.14s-5.589-1.3-5.589-4.14v-1.764a1.154,1.154,0,0,1,1.153-1.153h2.694A1.153,1.153,0,0,1,132,169.061v1.764c0,.7.48,1.224,1.411,1.224s1.412-.521,1.412-1.224a3.061,3.061,0,0,0-1.383-2.943l-3.3-2.578c-2.032-1.589-2.314-2.891-2.314-5.312,0-2.839,1.947-4.141,5.588-4.141s5.589,1.3,5.589,4.141v1.763a1.153,1.153,0,0,1-1.153,1.153h-2.694A1.153,1.153,0,0,1,134,161.755v-1.763c0-.7-.48-1.225-1.411-1.225s-1.412.521-1.412,1.225A3.058,3.058,0,0,0,132.561,162.934Z",
    transform: "translate(-6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1214
    },
    __self: undefined
  }), __jsx("path", {
    className: "b0692dd3-0e16-428b-a66f-44be8b23c54d",
    d: "M150.847,155.908A1.154,1.154,0,0,1,152,157.062v.693a1.153,1.153,0,0,1-1.153,1.153H147v5h2.887c.732.225,1.154.646,1.113,1.378v.844c.041.731-1.113,1.778-1.113,1.778H147v5h3.847A1.154,1.154,0,0,1,152,174.062v.693a1.153,1.153,0,0,1-1.153,1.153h-6.693A1.154,1.154,0,0,1,143,174.755V157.061a1.154,1.154,0,0,1,1.153-1.153Z",
    transform: "translate(-6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1215
    },
    __self: undefined
  }), __jsx("path", {
    className: "ef7ca77d-dc5f-4afd-b937-2dd4dc7cfead",
    d: "M162.918,174.85l-.353-2.942h-3.529l-.353,2.942a1.093,1.093,0,0,1-1.206,1.058h-1.456a1.079,1.079,0,0,1-1.1-1.409l2.652-17.514c.111-.8.525-1.077,1.161-1.077h4.143c.636,0,1.05.276,1.161,1.077l2.651,17.514a1.078,1.078,0,0,1-1.1,1.409h-1.456A1.093,1.093,0,0,1,162.918,174.85Zm-3.474-5.942h2.685l-.375-3.291-.809-7.709h-.288l-.809,7.709Z",
    transform: "translate(-6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1216
    },
    __self: undefined
  }), __jsx("path", {
    className: "f0bfbe1f-e5e3-441d-aff1-dfcb1e3f77d0",
    d: "M178.972,167.593l2.528,6.685a1.131,1.131,0,0,1-1.055,1.63h-1.853a1.117,1.117,0,0,1-1.155-.78l-2.571-7.22H174v6.847a1.153,1.153,0,0,1-1.153,1.153h-1.694A1.153,1.153,0,0,1,170,174.755V157.061a1.154,1.154,0,0,1,1.153-1.153H175.5c3.584,0,5.5,1.381,5.5,4.392v3.564A3.815,3.815,0,0,1,178.972,167.593Zm-3.472-2.685c.99,0,1.5-.538,1.5-1.264v-3.471c0-.727-.51-1.265-1.5-1.265H174v6Z",
    transform: "translate(-6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1217
    },
    __self: undefined
  }), __jsx("path", {
    className: "b84c4b48-a79d-41cd-9a3f-31542feaf73e",
    d: "M197,162.755a1.153,1.153,0,0,1-1.153,1.153h-1.694A1.153,1.153,0,0,1,193,162.755v-3.149a1.5,1.5,0,0,0-3,0v12.605a1.5,1.5,0,0,0,3,0v-3.149a1.154,1.154,0,0,1,1.154-1.154h1.693A1.154,1.154,0,0,1,197,169.062v3.149c0,3.3-1.916,4.818-5.5,4.818s-5.5-1.515-5.5-4.818V159.606c0-3.3,1.917-4.819,5.5-4.819s5.5,1.516,5.5,4.819Z",
    transform: "translate(-6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1218
    },
    __self: undefined
  }), __jsx("path", {
    className: "e15c6a1d-5a89-4f2b-92f6-a0cf79dc83cc",
    d: "M205,163.908h3v-7.847a1.154,1.154,0,0,1,1.153-1.153h1.694A1.153,1.153,0,0,1,212,156.061v18.694a1.153,1.153,0,0,1-1.153,1.153h-1.693A1.154,1.154,0,0,1,208,174.755v-7.847h-3v7.847a1.153,1.153,0,0,1-1.153,1.153h-1.693A1.154,1.154,0,0,1,201,174.755V156.061a1.154,1.154,0,0,1,1.153-1.153h1.694A1.153,1.153,0,0,1,205,156.061Z",
    transform: "translate(-6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1219
    },
    __self: undefined
  }))))), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1224
    },
    __self: undefined
  }, __jsx("path", {
    className: "f0bfbe1f-e5e3-441d-aff1-dfcb1e3f77d0",
    d: "M104.824,200.253l-.537-1.3h-2.139l-.537,1.3h-1.04l2.246-5.283h.836l2.245,5.283Zm-1.6-3.971-.784,1.919H104Z",
    transform: "translate(-6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1225
    },
    __self: undefined
  }), __jsx("path", {
    className: "f0bfbe1f-e5e3-441d-aff1-dfcb1e3f77d0",
    d: "M108.42,200.253h-1.858V194.97h1.858c2.113,0,3,1.189,3,2.641S110.533,200.253,108.42,200.253Zm-.053-4.42h-.731v3.557h.731c1.444,0,1.954-.722,1.954-1.779S109.811,195.833,108.367,195.833Z",
    transform: "translate(-6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1226
    },
    __self: undefined
  }), __jsx("path", {
    className: "f0bfbe1f-e5e3-441d-aff1-dfcb1e3f77d0",
    d: "M114.956,200.4a2.791,2.791,0,1,1,2.853-2.791A2.77,2.77,0,0,1,114.956,200.4Zm0-4.727a1.95,1.95,0,1,0,1.726,1.936A1.755,1.755,0,0,0,114.956,195.675Z",
    transform: "translate(-6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1227
    },
    __self: undefined
  }), __jsx("path", {
    className: "f0bfbe1f-e5e3-441d-aff1-dfcb1e3f77d0",
    d: "M120.737,198.334H119.8v1.919h-1.074V194.97h2.008a1.688,1.688,0,1,1,0,3.364Zm-.176-2.6H119.8v1.831h.758a.916.916,0,1,0,0-1.831Z",
    transform: "translate(-6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1228
    },
    __self: undefined
  }), __jsx("path", {
    className: "f0bfbe1f-e5e3-441d-aff1-dfcb1e3f77d0",
    d: "M125.7,195.807v4.446h-1.074v-4.446h-1.787v-.837h4.649v.837Z",
    transform: "translate(-6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1229
    },
    __self: undefined
  }), __jsx("path", {
    className: "f0bfbe1f-e5e3-441d-aff1-dfcb1e3f77d0",
    d: "M128.165,200.253V194.97h1.074v5.283Z",
    transform: "translate(-6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1230
    },
    __self: undefined
  }), __jsx("path", {
    className: "f0bfbe1f-e5e3-441d-aff1-dfcb1e3f77d0",
    d: "M133.026,200.4a2.791,2.791,0,1,1,2.853-2.791A2.769,2.769,0,0,1,133.026,200.4Zm0-4.727a1.95,1.95,0,1,0,1.726,1.936A1.755,1.755,0,0,0,133.026,195.675Z",
    transform: "translate(-6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1231
    },
    __self: undefined
  }), __jsx("path", {
    className: "f0bfbe1f-e5e3-441d-aff1-dfcb1e3f77d0",
    d: "M140.523,200.253l-2.764-3.486v3.486h-.96V194.97h.749l2.764,3.487V194.97h.96v5.283Z",
    transform: "translate(-6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1232
    },
    __self: undefined
  })), __jsx("path", {
    className: "f0bfbe1f-e5e3-441d-aff1-dfcb1e3f77d0",
    d: "M143.736,201.213V193.4h.529v7.817Z",
    transform: "translate(-6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1234
    },
    __self: undefined
  })))))
};
/* harmony default export */ __webpack_exports__["default"] = (SVG);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/portal */ "./components/portal/index.js");
/* harmony import */ var _components_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/svg */ "./components/svg.js");
/* harmony import */ var _utilities_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/functions */ "./utilities/functions.js");
var _jsxFileName = "/Users/sloth/Web/gladney/adopted-portal/app/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Dashboard = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  return __jsx(_components_portal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("main", {
    className: "dashboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx(_components_svg__WEBPACK_IMPORTED_MODULE_3__["default"].Search, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./sass/portal.sass":
/*!**************************!*\
  !*** ./sass/portal.sass ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./utilities/functions.js":
/*!********************************!*\
  !*** ./utilities/functions.js ***!
  \********************************/
/*! exports provided: adptKeygen, isInViewport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adptKeygen", function() { return adptKeygen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInViewport", function() { return isInViewport; });
const adptKeygen = () => Math.random().toString(36).substr(2, 16);

const isInViewport = (selector = 'x', top = 400) => {
  let el = document.querySelector(selector),
      rect = el !== null ? el.getBoundingClientRect() : {
    top: top + 1
  };
  return rect.top <= top;
};



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sloth/Web/gladney/adopted-portal/app/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map