var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
  new MutationObserver((r) => {
    for (const a of r) if (a.type === "childList") for (const u of a.addedNodes) u.tagName === "LINK" && u.rel === "modulepreload" && n(u);
  }).observe(document, { childList: true, subtree: true });
  function e(r) {
    const a = {};
    return r.integrity && (a.integrity = r.integrity), r.referrerPolicy && (a.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? a.credentials = "include" : r.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a;
  }
  function n(r) {
    if (r.ep) return;
    r.ep = true;
    const a = e(r);
    fetch(r.href, a);
  }
})();
var Lh = { exports: {} }, Yr = {};
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Jy;
function bC() {
  if (Jy) return Yr;
  Jy = 1;
  var l = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function e(n, r, a) {
    var u = null;
    if (a !== void 0 && (u = "" + a), r.key !== void 0 && (u = "" + r.key), "key" in r) {
      a = {};
      for (var f in r) f !== "key" && (a[f] = r[f]);
    } else a = r;
    return r = a.ref, { $$typeof: l, type: n, key: u, ref: r !== void 0 ? r : null, props: a };
  }
  return Yr.Fragment = t, Yr.jsx = e, Yr.jsxs = e, Yr;
}
var Fy;
function vC() {
  return Fy || (Fy = 1, Lh.exports = bC()), Lh.exports;
}
var wt = vC(), Hh = { exports: {} }, gt = {};
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Py;
function SC() {
  if (Py) return gt;
  Py = 1;
  var l = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), u = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), y = Symbol.for("react.activity"), v = Symbol.iterator;
  function S(M) {
    return M === null || typeof M != "object" ? null : (M = v && M[v] || M["@@iterator"], typeof M == "function" ? M : null);
  }
  var w = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, C = Object.assign, T = {};
  function O(M, H, W) {
    this.props = M, this.context = H, this.refs = T, this.updater = W || w;
  }
  O.prototype.isReactComponent = {}, O.prototype.setState = function(M, H) {
    if (typeof M != "object" && typeof M != "function" && M != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, M, H, "setState");
  }, O.prototype.forceUpdate = function(M) {
    this.updater.enqueueForceUpdate(this, M, "forceUpdate");
  };
  function j() {
  }
  j.prototype = O.prototype;
  function L(M, H, W) {
    this.props = M, this.context = H, this.refs = T, this.updater = W || w;
  }
  var Q = L.prototype = new j();
  Q.constructor = L, C(Q, O.prototype), Q.isPureReactComponent = true;
  var _ = Array.isArray;
  function G() {
  }
  var V = { H: null, A: null, T: null, S: null }, lt = Object.prototype.hasOwnProperty;
  function tt(M, H, W) {
    var $ = W.ref;
    return { $$typeof: l, type: M, key: H, ref: $ !== void 0 ? $ : null, props: W };
  }
  function pt(M, H) {
    return tt(M.type, H, M.props);
  }
  function at(M) {
    return typeof M == "object" && M !== null && M.$$typeof === l;
  }
  function I(M) {
    var H = { "=": "=0", ":": "=2" };
    return "$" + M.replace(/[=:]/g, function(W) {
      return H[W];
    });
  }
  var ft = /\/+/g;
  function ht(M, H) {
    return typeof M == "object" && M !== null && M.key != null ? I("" + M.key) : H.toString(36);
  }
  function yt(M) {
    switch (M.status) {
      case "fulfilled":
        return M.value;
      case "rejected":
        throw M.reason;
      default:
        switch (typeof M.status == "string" ? M.then(G, G) : (M.status = "pending", M.then(function(H) {
          M.status === "pending" && (M.status = "fulfilled", M.value = H);
        }, function(H) {
          M.status === "pending" && (M.status = "rejected", M.reason = H);
        })), M.status) {
          case "fulfilled":
            return M.value;
          case "rejected":
            throw M.reason;
        }
    }
    throw M;
  }
  function z(M, H, W, $, dt) {
    var bt = typeof M;
    (bt === "undefined" || bt === "boolean") && (M = null);
    var Et = false;
    if (M === null) Et = true;
    else switch (bt) {
      case "bigint":
      case "string":
      case "number":
        Et = true;
        break;
      case "object":
        switch (M.$$typeof) {
          case l:
          case t:
            Et = true;
            break;
          case p:
            return Et = M._init, z(Et(M._payload), H, W, $, dt);
        }
    }
    if (Et) return dt = dt(M), Et = $ === "" ? "." + ht(M, 0) : $, _(dt) ? (W = "", Et != null && (W = Et.replace(ft, "$&/") + "/"), z(dt, H, W, "", function(Js) {
      return Js;
    })) : dt != null && (at(dt) && (dt = pt(dt, W + (dt.key == null || M && M.key === dt.key ? "" : ("" + dt.key).replace(ft, "$&/") + "/") + Et)), H.push(dt)), 1;
    Et = 0;
    var ze = $ === "" ? "." : $ + ":";
    if (_(M)) for (var ie = 0; ie < M.length; ie++) $ = M[ie], bt = ze + ht($, ie), Et += z($, H, W, bt, dt);
    else if (ie = S(M), typeof ie == "function") for (M = ie.call(M), ie = 0; !($ = M.next()).done; ) $ = $.value, bt = ze + ht($, ie++), Et += z($, H, W, bt, dt);
    else if (bt === "object") {
      if (typeof M.then == "function") return z(yt(M), H, W, $, dt);
      throw H = String(M), Error("Objects are not valid as a React child (found: " + (H === "[object Object]" ? "object with keys {" + Object.keys(M).join(", ") + "}" : H) + "). If you meant to render a collection of children, use an array instead.");
    }
    return Et;
  }
  function Z(M, H, W) {
    if (M == null) return M;
    var $ = [], dt = 0;
    return z(M, $, "", "", function(bt) {
      return H.call(W, bt, dt++);
    }), $;
  }
  function it(M) {
    if (M._status === -1) {
      var H = M._result;
      H = H(), H.then(function(W) {
        (M._status === 0 || M._status === -1) && (M._status = 1, M._result = W);
      }, function(W) {
        (M._status === 0 || M._status === -1) && (M._status = 2, M._result = W);
      }), M._status === -1 && (M._status = 0, M._result = H);
    }
    if (M._status === 1) return M._result.default;
    throw M._result;
  }
  var rt = typeof reportError == "function" ? reportError : function(M) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var H = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof M == "object" && M !== null && typeof M.message == "string" ? String(M.message) : String(M), error: M });
      if (!window.dispatchEvent(H)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", M);
      return;
    }
    console.error(M);
  }, mt = { map: Z, forEach: function(M, H, W) {
    Z(M, function() {
      H.apply(this, arguments);
    }, W);
  }, count: function(M) {
    var H = 0;
    return Z(M, function() {
      H++;
    }), H;
  }, toArray: function(M) {
    return Z(M, function(H) {
      return H;
    }) || [];
  }, only: function(M) {
    if (!at(M)) throw Error("React.Children.only expected to receive a single React element child.");
    return M;
  } };
  return gt.Activity = y, gt.Children = mt, gt.Component = O, gt.Fragment = e, gt.Profiler = r, gt.PureComponent = L, gt.StrictMode = n, gt.Suspense = h, gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = V, gt.__COMPILER_RUNTIME = { __proto__: null, c: function(M) {
    return V.H.useMemoCache(M);
  } }, gt.cache = function(M) {
    return function() {
      return M.apply(null, arguments);
    };
  }, gt.cacheSignal = function() {
    return null;
  }, gt.cloneElement = function(M, H, W) {
    if (M == null) throw Error("The argument must be a React element, but you passed " + M + ".");
    var $ = C({}, M.props), dt = M.key;
    if (H != null) for (bt in H.key !== void 0 && (dt = "" + H.key), H) !lt.call(H, bt) || bt === "key" || bt === "__self" || bt === "__source" || bt === "ref" && H.ref === void 0 || ($[bt] = H[bt]);
    var bt = arguments.length - 2;
    if (bt === 1) $.children = W;
    else if (1 < bt) {
      for (var Et = Array(bt), ze = 0; ze < bt; ze++) Et[ze] = arguments[ze + 2];
      $.children = Et;
    }
    return tt(M.type, dt, $);
  }, gt.createContext = function(M) {
    return M = { $$typeof: u, _currentValue: M, _currentValue2: M, _threadCount: 0, Provider: null, Consumer: null }, M.Provider = M, M.Consumer = { $$typeof: a, _context: M }, M;
  }, gt.createElement = function(M, H, W) {
    var $, dt = {}, bt = null;
    if (H != null) for ($ in H.key !== void 0 && (bt = "" + H.key), H) lt.call(H, $) && $ !== "key" && $ !== "__self" && $ !== "__source" && (dt[$] = H[$]);
    var Et = arguments.length - 2;
    if (Et === 1) dt.children = W;
    else if (1 < Et) {
      for (var ze = Array(Et), ie = 0; ie < Et; ie++) ze[ie] = arguments[ie + 2];
      dt.children = ze;
    }
    if (M && M.defaultProps) for ($ in Et = M.defaultProps, Et) dt[$] === void 0 && (dt[$] = Et[$]);
    return tt(M, bt, dt);
  }, gt.createRef = function() {
    return { current: null };
  }, gt.forwardRef = function(M) {
    return { $$typeof: f, render: M };
  }, gt.isValidElement = at, gt.lazy = function(M) {
    return { $$typeof: p, _payload: { _status: -1, _result: M }, _init: it };
  }, gt.memo = function(M, H) {
    return { $$typeof: g, type: M, compare: H === void 0 ? null : H };
  }, gt.startTransition = function(M) {
    var H = V.T, W = {};
    V.T = W;
    try {
      var $ = M(), dt = V.S;
      dt !== null && dt(W, $), typeof $ == "object" && $ !== null && typeof $.then == "function" && $.then(G, rt);
    } catch (bt) {
      rt(bt);
    } finally {
      H !== null && W.types !== null && (H.types = W.types), V.T = H;
    }
  }, gt.unstable_useCacheRefresh = function() {
    return V.H.useCacheRefresh();
  }, gt.use = function(M) {
    return V.H.use(M);
  }, gt.useActionState = function(M, H, W) {
    return V.H.useActionState(M, H, W);
  }, gt.useCallback = function(M, H) {
    return V.H.useCallback(M, H);
  }, gt.useContext = function(M) {
    return V.H.useContext(M);
  }, gt.useDebugValue = function() {
  }, gt.useDeferredValue = function(M, H) {
    return V.H.useDeferredValue(M, H);
  }, gt.useEffect = function(M, H) {
    return V.H.useEffect(M, H);
  }, gt.useEffectEvent = function(M) {
    return V.H.useEffectEvent(M);
  }, gt.useId = function() {
    return V.H.useId();
  }, gt.useImperativeHandle = function(M, H, W) {
    return V.H.useImperativeHandle(M, H, W);
  }, gt.useInsertionEffect = function(M, H) {
    return V.H.useInsertionEffect(M, H);
  }, gt.useLayoutEffect = function(M, H) {
    return V.H.useLayoutEffect(M, H);
  }, gt.useMemo = function(M, H) {
    return V.H.useMemo(M, H);
  }, gt.useOptimistic = function(M, H) {
    return V.H.useOptimistic(M, H);
  }, gt.useReducer = function(M, H, W) {
    return V.H.useReducer(M, H, W);
  }, gt.useRef = function(M) {
    return V.H.useRef(M);
  }, gt.useState = function(M) {
    return V.H.useState(M);
  }, gt.useSyncExternalStore = function(M, H, W) {
    return V.H.useSyncExternalStore(M, H, W);
  }, gt.useTransition = function() {
    return V.H.useTransition();
  }, gt.version = "19.2.1", gt;
}
var Iy;
function pm() {
  return Iy || (Iy = 1, Hh.exports = SC()), Hh.exports;
}
var Ft = pm(), Uh = { exports: {} }, Gr = {}, Vh = { exports: {} }, qh = {};
/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var $y;
function xC() {
  return $y || ($y = 1, (function(l) {
    function t(z, Z) {
      var it = z.length;
      z.push(Z);
      t: for (; 0 < it; ) {
        var rt = it - 1 >>> 1, mt = z[rt];
        if (0 < r(mt, Z)) z[rt] = Z, z[it] = mt, it = rt;
        else break t;
      }
    }
    function e(z) {
      return z.length === 0 ? null : z[0];
    }
    function n(z) {
      if (z.length === 0) return null;
      var Z = z[0], it = z.pop();
      if (it !== Z) {
        z[0] = it;
        t: for (var rt = 0, mt = z.length, M = mt >>> 1; rt < M; ) {
          var H = 2 * (rt + 1) - 1, W = z[H], $ = H + 1, dt = z[$];
          if (0 > r(W, it)) $ < mt && 0 > r(dt, W) ? (z[rt] = dt, z[$] = it, rt = $) : (z[rt] = W, z[H] = it, rt = H);
          else if ($ < mt && 0 > r(dt, it)) z[rt] = dt, z[$] = it, rt = $;
          else break t;
        }
      }
      return Z;
    }
    function r(z, Z) {
      var it = z.sortIndex - Z.sortIndex;
      return it !== 0 ? it : z.id - Z.id;
    }
    if (l.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var a = performance;
      l.unstable_now = function() {
        return a.now();
      };
    } else {
      var u = Date, f = u.now();
      l.unstable_now = function() {
        return u.now() - f;
      };
    }
    var h = [], g = [], p = 1, y = null, v = 3, S = false, w = false, C = false, T = false, O = typeof setTimeout == "function" ? setTimeout : null, j = typeof clearTimeout == "function" ? clearTimeout : null, L = typeof setImmediate < "u" ? setImmediate : null;
    function Q(z) {
      for (var Z = e(g); Z !== null; ) {
        if (Z.callback === null) n(g);
        else if (Z.startTime <= z) n(g), Z.sortIndex = Z.expirationTime, t(h, Z);
        else break;
        Z = e(g);
      }
    }
    function _(z) {
      if (C = false, Q(z), !w) if (e(h) !== null) w = true, G || (G = true, I());
      else {
        var Z = e(g);
        Z !== null && yt(_, Z.startTime - z);
      }
    }
    var G = false, V = -1, lt = 5, tt = -1;
    function pt() {
      return T ? true : !(l.unstable_now() - tt < lt);
    }
    function at() {
      if (T = false, G) {
        var z = l.unstable_now();
        tt = z;
        var Z = true;
        try {
          t: {
            w = false, C && (C = false, j(V), V = -1), S = true;
            var it = v;
            try {
              e: {
                for (Q(z), y = e(h); y !== null && !(y.expirationTime > z && pt()); ) {
                  var rt = y.callback;
                  if (typeof rt == "function") {
                    y.callback = null, v = y.priorityLevel;
                    var mt = rt(y.expirationTime <= z);
                    if (z = l.unstable_now(), typeof mt == "function") {
                      y.callback = mt, Q(z), Z = true;
                      break e;
                    }
                    y === e(h) && n(h), Q(z);
                  } else n(h);
                  y = e(h);
                }
                if (y !== null) Z = true;
                else {
                  var M = e(g);
                  M !== null && yt(_, M.startTime - z), Z = false;
                }
              }
              break t;
            } finally {
              y = null, v = it, S = false;
            }
            Z = void 0;
          }
        } finally {
          Z ? I() : G = false;
        }
      }
    }
    var I;
    if (typeof L == "function") I = function() {
      L(at);
    };
    else if (typeof MessageChannel < "u") {
      var ft = new MessageChannel(), ht = ft.port2;
      ft.port1.onmessage = at, I = function() {
        ht.postMessage(null);
      };
    } else I = function() {
      O(at, 0);
    };
    function yt(z, Z) {
      V = O(function() {
        z(l.unstable_now());
      }, Z);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(z) {
      z.callback = null;
    }, l.unstable_forceFrameRate = function(z) {
      0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : lt = 0 < z ? Math.floor(1e3 / z) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return v;
    }, l.unstable_next = function(z) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var Z = 3;
          break;
        default:
          Z = v;
      }
      var it = v;
      v = Z;
      try {
        return z();
      } finally {
        v = it;
      }
    }, l.unstable_requestPaint = function() {
      T = true;
    }, l.unstable_runWithPriority = function(z, Z) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var it = v;
      v = z;
      try {
        return Z();
      } finally {
        v = it;
      }
    }, l.unstable_scheduleCallback = function(z, Z, it) {
      var rt = l.unstable_now();
      switch (typeof it == "object" && it !== null ? (it = it.delay, it = typeof it == "number" && 0 < it ? rt + it : rt) : it = rt, z) {
        case 1:
          var mt = -1;
          break;
        case 2:
          mt = 250;
          break;
        case 5:
          mt = 1073741823;
          break;
        case 4:
          mt = 1e4;
          break;
        default:
          mt = 5e3;
      }
      return mt = it + mt, z = { id: p++, callback: Z, priorityLevel: z, startTime: it, expirationTime: mt, sortIndex: -1 }, it > rt ? (z.sortIndex = it, t(g, z), e(h) === null && z === e(g) && (C ? (j(V), V = -1) : C = true, yt(_, it - rt))) : (z.sortIndex = mt, t(h, z), w || S || (w = true, G || (G = true, I()))), z;
    }, l.unstable_shouldYield = pt, l.unstable_wrapCallback = function(z) {
      var Z = v;
      return function() {
        var it = v;
        v = Z;
        try {
          return z.apply(this, arguments);
        } finally {
          v = it;
        }
      };
    };
  })(qh)), qh;
}
var t1;
function wC() {
  return t1 || (t1 = 1, Vh.exports = xC()), Vh.exports;
}
var jh = { exports: {} }, ke = {};
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var e1;
function CC() {
  if (e1) return ke;
  e1 = 1;
  var l = pm();
  function t(h) {
    var g = "https://react.dev/errors/" + h;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var p = 2; p < arguments.length; p++) g += "&args[]=" + encodeURIComponent(arguments[p]);
    }
    return "Minified React error #" + h + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function e() {
  }
  var n = { d: { f: e, r: function() {
    throw Error(t(522));
  }, D: e, C: e, L: e, m: e, X: e, S: e, M: e }, p: 0, findDOMNode: null }, r = Symbol.for("react.portal");
  function a(h, g, p) {
    var y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: r, key: y == null ? null : "" + y, children: h, containerInfo: g, implementation: p };
  }
  var u = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function f(h, g) {
    if (h === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : "";
  }
  return ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = n, ke.createPortal = function(h, g) {
    var p = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11) throw Error(t(299));
    return a(h, g, null, p);
  }, ke.flushSync = function(h) {
    var g = u.T, p = n.p;
    try {
      if (u.T = null, n.p = 2, h) return h();
    } finally {
      u.T = g, n.p = p, n.d.f();
    }
  }, ke.preconnect = function(h, g) {
    typeof h == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, n.d.C(h, g));
  }, ke.prefetchDNS = function(h) {
    typeof h == "string" && n.d.D(h);
  }, ke.preinit = function(h, g) {
    if (typeof h == "string" && g && typeof g.as == "string") {
      var p = g.as, y = f(p, g.crossOrigin), v = typeof g.integrity == "string" ? g.integrity : void 0, S = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      p === "style" ? n.d.S(h, typeof g.precedence == "string" ? g.precedence : void 0, { crossOrigin: y, integrity: v, fetchPriority: S }) : p === "script" && n.d.X(h, { crossOrigin: y, integrity: v, fetchPriority: S, nonce: typeof g.nonce == "string" ? g.nonce : void 0 });
    }
  }, ke.preinitModule = function(h, g) {
    if (typeof h == "string") if (typeof g == "object" && g !== null) {
      if (g.as == null || g.as === "script") {
        var p = f(g.as, g.crossOrigin);
        n.d.M(h, { crossOrigin: p, integrity: typeof g.integrity == "string" ? g.integrity : void 0, nonce: typeof g.nonce == "string" ? g.nonce : void 0 });
      }
    } else g == null && n.d.M(h);
  }, ke.preload = function(h, g) {
    if (typeof h == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var p = g.as, y = f(p, g.crossOrigin);
      n.d.L(h, p, { crossOrigin: y, integrity: typeof g.integrity == "string" ? g.integrity : void 0, nonce: typeof g.nonce == "string" ? g.nonce : void 0, type: typeof g.type == "string" ? g.type : void 0, fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0, referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0, imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0, imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0, media: typeof g.media == "string" ? g.media : void 0 });
    }
  }, ke.preloadModule = function(h, g) {
    if (typeof h == "string") if (g) {
      var p = f(g.as, g.crossOrigin);
      n.d.m(h, { as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0, crossOrigin: p, integrity: typeof g.integrity == "string" ? g.integrity : void 0 });
    } else n.d.m(h);
  }, ke.requestFormReset = function(h) {
    n.d.r(h);
  }, ke.unstable_batchedUpdates = function(h, g) {
    return h(g);
  }, ke.useFormState = function(h, g, p) {
    return u.H.useFormState(h, g, p);
  }, ke.useFormStatus = function() {
    return u.H.useHostTransitionStatus();
  }, ke.version = "19.2.1", ke;
}
var i1;
function AC() {
  if (i1) return jh.exports;
  i1 = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
    } catch (t) {
      console.error(t);
    }
  }
  return l(), jh.exports = CC(), jh.exports;
}
/**
* @license React
* react-dom-client.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var n1;
function MC() {
  if (n1) return Gr;
  n1 = 1;
  var l = wC(), t = pm(), e = AC();
  function n(i) {
    var s = "https://react.dev/errors/" + i;
    if (1 < arguments.length) {
      s += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var o = 2; o < arguments.length; o++) s += "&args[]=" + encodeURIComponent(arguments[o]);
    }
    return "Minified React error #" + i + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r(i) {
    return !(!i || i.nodeType !== 1 && i.nodeType !== 9 && i.nodeType !== 11);
  }
  function a(i) {
    var s = i, o = i;
    if (i.alternate) for (; s.return; ) s = s.return;
    else {
      i = s;
      do
        s = i, (s.flags & 4098) !== 0 && (o = s.return), i = s.return;
      while (i);
    }
    return s.tag === 3 ? o : null;
  }
  function u(i) {
    if (i.tag === 13) {
      var s = i.memoizedState;
      if (s === null && (i = i.alternate, i !== null && (s = i.memoizedState)), s !== null) return s.dehydrated;
    }
    return null;
  }
  function f(i) {
    if (i.tag === 31) {
      var s = i.memoizedState;
      if (s === null && (i = i.alternate, i !== null && (s = i.memoizedState)), s !== null) return s.dehydrated;
    }
    return null;
  }
  function h(i) {
    if (a(i) !== i) throw Error(n(188));
  }
  function g(i) {
    var s = i.alternate;
    if (!s) {
      if (s = a(i), s === null) throw Error(n(188));
      return s !== i ? null : i;
    }
    for (var o = i, c = s; ; ) {
      var d = o.return;
      if (d === null) break;
      var m = d.alternate;
      if (m === null) {
        if (c = d.return, c !== null) {
          o = c;
          continue;
        }
        break;
      }
      if (d.child === m.child) {
        for (m = d.child; m; ) {
          if (m === o) return h(d), i;
          if (m === c) return h(d), s;
          m = m.sibling;
        }
        throw Error(n(188));
      }
      if (o.return !== c.return) o = d, c = m;
      else {
        for (var b = false, x = d.child; x; ) {
          if (x === o) {
            b = true, o = d, c = m;
            break;
          }
          if (x === c) {
            b = true, c = d, o = m;
            break;
          }
          x = x.sibling;
        }
        if (!b) {
          for (x = m.child; x; ) {
            if (x === o) {
              b = true, o = m, c = d;
              break;
            }
            if (x === c) {
              b = true, c = m, o = d;
              break;
            }
            x = x.sibling;
          }
          if (!b) throw Error(n(189));
        }
      }
      if (o.alternate !== c) throw Error(n(190));
    }
    if (o.tag !== 3) throw Error(n(188));
    return o.stateNode.current === o ? i : s;
  }
  function p(i) {
    var s = i.tag;
    if (s === 5 || s === 26 || s === 27 || s === 6) return i;
    for (i = i.child; i !== null; ) {
      if (s = p(i), s !== null) return s;
      i = i.sibling;
    }
    return null;
  }
  var y = Object.assign, v = Symbol.for("react.element"), S = Symbol.for("react.transitional.element"), w = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), j = Symbol.for("react.consumer"), L = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), G = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), lt = Symbol.for("react.lazy"), tt = Symbol.for("react.activity"), pt = Symbol.for("react.memo_cache_sentinel"), at = Symbol.iterator;
  function I(i) {
    return i === null || typeof i != "object" ? null : (i = at && i[at] || i["@@iterator"], typeof i == "function" ? i : null);
  }
  var ft = Symbol.for("react.client.reference");
  function ht(i) {
    if (i == null) return null;
    if (typeof i == "function") return i.$$typeof === ft ? null : i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case C:
        return "Fragment";
      case O:
        return "Profiler";
      case T:
        return "StrictMode";
      case _:
        return "Suspense";
      case G:
        return "SuspenseList";
      case tt:
        return "Activity";
    }
    if (typeof i == "object") switch (i.$$typeof) {
      case w:
        return "Portal";
      case L:
        return i.displayName || "Context";
      case j:
        return (i._context.displayName || "Context") + ".Consumer";
      case Q:
        var s = i.render;
        return i = i.displayName, i || (i = s.displayName || s.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
      case V:
        return s = i.displayName || null, s !== null ? s : ht(i.type) || "Memo";
      case lt:
        s = i._payload, i = i._init;
        try {
          return ht(i(s));
        } catch {
        }
    }
    return null;
  }
  var yt = Array.isArray, z = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, it = { pending: false, data: null, method: null, action: null }, rt = [], mt = -1;
  function M(i) {
    return { current: i };
  }
  function H(i) {
    0 > mt || (i.current = rt[mt], rt[mt] = null, mt--);
  }
  function W(i, s) {
    mt++, rt[mt] = i.current, i.current = s;
  }
  var $ = M(null), dt = M(null), bt = M(null), Et = M(null);
  function ze(i, s) {
    switch (W(bt, s), W(dt, i), W($, null), s.nodeType) {
      case 9:
      case 11:
        i = (i = s.documentElement) && (i = i.namespaceURI) ? by(i) : 0;
        break;
      default:
        if (i = s.tagName, s = s.namespaceURI) s = by(s), i = vy(s, i);
        else switch (i) {
          case "svg":
            i = 1;
            break;
          case "math":
            i = 2;
            break;
          default:
            i = 0;
        }
    }
    H($), W($, i);
  }
  function ie() {
    H($), H(dt), H(bt);
  }
  function Js(i) {
    i.memoizedState !== null && W(Et, i);
    var s = $.current, o = vy(s, i.type);
    s !== o && (W(dt, i), W($, o));
  }
  function za(i) {
    dt.current === i && (H($), H(dt)), Et.current === i && (H(Et), Ur._currentValue = it);
  }
  var yc, Wm;
  function ol(i) {
    if (yc === void 0) try {
      throw Error();
    } catch (o) {
      var s = o.stack.trim().match(/\n( *(at )?)/);
      yc = s && s[1] || "", Wm = -1 < o.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < o.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + yc + i + Wm;
  }
  var bc = false;
  function vc(i, s) {
    if (!i || bc) return "";
    bc = true;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = { DetermineComponentFrameRoot: function() {
        try {
          if (s) {
            var X = function() {
              throw Error();
            };
            if (Object.defineProperty(X.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(X, []);
              } catch (N) {
                var R = N;
              }
              Reflect.construct(i, [], X);
            } else {
              try {
                X.call();
              } catch (N) {
                R = N;
              }
              i.call(X.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (N) {
              R = N;
            }
            (X = i()) && typeof X.catch == "function" && X.catch(function() {
            });
          }
        } catch (N) {
          if (N && R && typeof N.stack == "string") return [N.stack, R.stack];
        }
        return [null, null];
      } };
      c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var d = Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot, "name");
      d && d.configurable && Object.defineProperty(c.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var m = c.DetermineComponentFrameRoot(), b = m[0], x = m[1];
      if (b && x) {
        var A = b.split(`
`), B = x.split(`
`);
        for (d = c = 0; c < A.length && !A[c].includes("DetermineComponentFrameRoot"); ) c++;
        for (; d < B.length && !B[d].includes("DetermineComponentFrameRoot"); ) d++;
        if (c === A.length || d === B.length) for (c = A.length - 1, d = B.length - 1; 1 <= c && 0 <= d && A[c] !== B[d]; ) d--;
        for (; 1 <= c && 0 <= d; c--, d--) if (A[c] !== B[d]) {
          if (c !== 1 || d !== 1) do
            if (c--, d--, 0 > d || A[c] !== B[d]) {
              var U = `
` + A[c].replace(" at new ", " at ");
              return i.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", i.displayName)), U;
            }
          while (1 <= c && 0 <= d);
          break;
        }
      }
    } finally {
      bc = false, Error.prepareStackTrace = o;
    }
    return (o = i ? i.displayName || i.name : "") ? ol(o) : "";
  }
  function Jx(i, s) {
    switch (i.tag) {
      case 26:
      case 27:
      case 5:
        return ol(i.type);
      case 16:
        return ol("Lazy");
      case 13:
        return i.child !== s && s !== null ? ol("Suspense Fallback") : ol("Suspense");
      case 19:
        return ol("SuspenseList");
      case 0:
      case 15:
        return vc(i.type, false);
      case 11:
        return vc(i.type.render, false);
      case 1:
        return vc(i.type, true);
      case 31:
        return ol("Activity");
      default:
        return "";
    }
  }
  function Jm(i) {
    try {
      var s = "", o = null;
      do
        s += Jx(i, o), o = i, i = i.return;
      while (i);
      return s;
    } catch (c) {
      return `
Error generating stack: ` + c.message + `
` + c.stack;
    }
  }
  var Sc = Object.prototype.hasOwnProperty, xc = l.unstable_scheduleCallback, wc = l.unstable_cancelCallback, Fx = l.unstable_shouldYield, Px = l.unstable_requestPaint, Fe = l.unstable_now, Ix = l.unstable_getCurrentPriorityLevel, Fm = l.unstable_ImmediatePriority, Pm = l.unstable_UserBlockingPriority, Na = l.unstable_NormalPriority, $x = l.unstable_LowPriority, Im = l.unstable_IdlePriority, t2 = l.log, e2 = l.unstable_setDisableYieldValue, Fs = null, Pe = null;
  function An(i) {
    if (typeof t2 == "function" && e2(i), Pe && typeof Pe.setStrictMode == "function") try {
      Pe.setStrictMode(Fs, i);
    } catch {
    }
  }
  var Ie = Math.clz32 ? Math.clz32 : l2, i2 = Math.log, n2 = Math.LN2;
  function l2(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (i2(i) / n2 | 0) | 0;
  }
  var _a = 256, La = 262144, Ha = 4194304;
  function ul(i) {
    var s = i & 42;
    if (s !== 0) return s;
    switch (i & -i) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return i & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return i & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return i & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return i;
    }
  }
  function Ua(i, s, o) {
    var c = i.pendingLanes;
    if (c === 0) return 0;
    var d = 0, m = i.suspendedLanes, b = i.pingedLanes;
    i = i.warmLanes;
    var x = c & 134217727;
    return x !== 0 ? (c = x & ~m, c !== 0 ? d = ul(c) : (b &= x, b !== 0 ? d = ul(b) : o || (o = x & ~i, o !== 0 && (d = ul(o))))) : (x = c & ~m, x !== 0 ? d = ul(x) : b !== 0 ? d = ul(b) : o || (o = c & ~i, o !== 0 && (d = ul(o)))), d === 0 ? 0 : s !== 0 && s !== d && (s & m) === 0 && (m = d & -d, o = s & -s, m >= o || m === 32 && (o & 4194048) !== 0) ? s : d;
  }
  function Ps(i, s) {
    return (i.pendingLanes & ~(i.suspendedLanes & ~i.pingedLanes) & s) === 0;
  }
  function s2(i, s) {
    switch (i) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return s + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return s + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function $m() {
    var i = Ha;
    return Ha <<= 1, (Ha & 62914560) === 0 && (Ha = 4194304), i;
  }
  function Cc(i) {
    for (var s = [], o = 0; 31 > o; o++) s.push(i);
    return s;
  }
  function Is(i, s) {
    i.pendingLanes |= s, s !== 268435456 && (i.suspendedLanes = 0, i.pingedLanes = 0, i.warmLanes = 0);
  }
  function r2(i, s, o, c, d, m) {
    var b = i.pendingLanes;
    i.pendingLanes = o, i.suspendedLanes = 0, i.pingedLanes = 0, i.warmLanes = 0, i.expiredLanes &= o, i.entangledLanes &= o, i.errorRecoveryDisabledLanes &= o, i.shellSuspendCounter = 0;
    var x = i.entanglements, A = i.expirationTimes, B = i.hiddenUpdates;
    for (o = b & ~o; 0 < o; ) {
      var U = 31 - Ie(o), X = 1 << U;
      x[U] = 0, A[U] = -1;
      var R = B[U];
      if (R !== null) for (B[U] = null, U = 0; U < R.length; U++) {
        var N = R[U];
        N !== null && (N.lane &= -536870913);
      }
      o &= ~X;
    }
    c !== 0 && tg(i, c, 0), m !== 0 && d === 0 && i.tag !== 0 && (i.suspendedLanes |= m & ~(b & ~s));
  }
  function tg(i, s, o) {
    i.pendingLanes |= s, i.suspendedLanes &= ~s;
    var c = 31 - Ie(s);
    i.entangledLanes |= s, i.entanglements[c] = i.entanglements[c] | 1073741824 | o & 261930;
  }
  function eg(i, s) {
    var o = i.entangledLanes |= s;
    for (i = i.entanglements; o; ) {
      var c = 31 - Ie(o), d = 1 << c;
      d & s | i[c] & s && (i[c] |= s), o &= ~d;
    }
  }
  function ig(i, s) {
    var o = s & -s;
    return o = (o & 42) !== 0 ? 1 : Ac(o), (o & (i.suspendedLanes | s)) !== 0 ? 0 : o;
  }
  function Ac(i) {
    switch (i) {
      case 2:
        i = 1;
        break;
      case 8:
        i = 4;
        break;
      case 32:
        i = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        i = 128;
        break;
      case 268435456:
        i = 134217728;
        break;
      default:
        i = 0;
    }
    return i;
  }
  function Mc(i) {
    return i &= -i, 2 < i ? 8 < i ? (i & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function ng() {
    var i = Z.p;
    return i !== 0 ? i : (i = window.event, i === void 0 ? 32 : Yy(i.type));
  }
  function lg(i, s) {
    var o = Z.p;
    try {
      return Z.p = i, s();
    } finally {
      Z.p = o;
    }
  }
  var Mn = Math.random().toString(36).slice(2), ye = "__reactFiber$" + Mn, Ve = "__reactProps$" + Mn, Yl = "__reactContainer$" + Mn, Tc = "__reactEvents$" + Mn, a2 = "__reactListeners$" + Mn, o2 = "__reactHandles$" + Mn, sg = "__reactResources$" + Mn, $s = "__reactMarker$" + Mn;
  function kc(i) {
    delete i[ye], delete i[Ve], delete i[Tc], delete i[a2], delete i[o2];
  }
  function Gl(i) {
    var s = i[ye];
    if (s) return s;
    for (var o = i.parentNode; o; ) {
      if (s = o[Yl] || o[ye]) {
        if (o = s.alternate, s.child !== null || o !== null && o.child !== null) for (i = Ty(i); i !== null; ) {
          if (o = i[ye]) return o;
          i = Ty(i);
        }
        return s;
      }
      i = o, o = i.parentNode;
    }
    return null;
  }
  function Xl(i) {
    if (i = i[ye] || i[Yl]) {
      var s = i.tag;
      if (s === 5 || s === 6 || s === 13 || s === 31 || s === 26 || s === 27 || s === 3) return i;
    }
    return null;
  }
  function tr(i) {
    var s = i.tag;
    if (s === 5 || s === 26 || s === 27 || s === 6) return i.stateNode;
    throw Error(n(33));
  }
  function Kl(i) {
    var s = i[sg];
    return s || (s = i[sg] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), s;
  }
  function me(i) {
    i[$s] = true;
  }
  var rg = /* @__PURE__ */ new Set(), ag = {};
  function cl(i, s) {
    Ql(i, s), Ql(i + "Capture", s);
  }
  function Ql(i, s) {
    for (ag[i] = s, i = 0; i < s.length; i++) rg.add(s[i]);
  }
  var u2 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), og = {}, ug = {};
  function c2(i) {
    return Sc.call(ug, i) ? true : Sc.call(og, i) ? false : u2.test(i) ? ug[i] = true : (og[i] = true, false);
  }
  function Va(i, s, o) {
    if (c2(s)) if (o === null) i.removeAttribute(s);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
          i.removeAttribute(s);
          return;
        case "boolean":
          var c = s.toLowerCase().slice(0, 5);
          if (c !== "data-" && c !== "aria-") {
            i.removeAttribute(s);
            return;
          }
      }
      i.setAttribute(s, "" + o);
    }
  }
  function qa(i, s, o) {
    if (o === null) i.removeAttribute(s);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          i.removeAttribute(s);
          return;
      }
      i.setAttribute(s, "" + o);
    }
  }
  function Ii(i, s, o, c) {
    if (c === null) i.removeAttribute(o);
    else {
      switch (typeof c) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          i.removeAttribute(o);
          return;
      }
      i.setAttributeNS(s, o, "" + c);
    }
  }
  function ui(i) {
    switch (typeof i) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return i;
      case "object":
        return i;
      default:
        return "";
    }
  }
  function cg(i) {
    var s = i.type;
    return (i = i.nodeName) && i.toLowerCase() === "input" && (s === "checkbox" || s === "radio");
  }
  function f2(i, s, o) {
    var c = Object.getOwnPropertyDescriptor(i.constructor.prototype, s);
    if (!i.hasOwnProperty(s) && typeof c < "u" && typeof c.get == "function" && typeof c.set == "function") {
      var d = c.get, m = c.set;
      return Object.defineProperty(i, s, { configurable: true, get: function() {
        return d.call(this);
      }, set: function(b) {
        o = "" + b, m.call(this, b);
      } }), Object.defineProperty(i, s, { enumerable: c.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(b) {
        o = "" + b;
      }, stopTracking: function() {
        i._valueTracker = null, delete i[s];
      } };
    }
  }
  function Oc(i) {
    if (!i._valueTracker) {
      var s = cg(i) ? "checked" : "value";
      i._valueTracker = f2(i, s, "" + i[s]);
    }
  }
  function fg(i) {
    if (!i) return false;
    var s = i._valueTracker;
    if (!s) return true;
    var o = s.getValue(), c = "";
    return i && (c = cg(i) ? i.checked ? "true" : "false" : i.value), i = c, i !== o ? (s.setValue(i), true) : false;
  }
  function ja(i) {
    if (i = i || (typeof document < "u" ? document : void 0), typeof i > "u") return null;
    try {
      return i.activeElement || i.body;
    } catch {
      return i.body;
    }
  }
  var h2 = /[\n"\\]/g;
  function ci(i) {
    return i.replace(h2, function(s) {
      return "\\" + s.charCodeAt(0).toString(16) + " ";
    });
  }
  function Dc(i, s, o, c, d, m, b, x) {
    i.name = "", b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? i.type = b : i.removeAttribute("type"), s != null ? b === "number" ? (s === 0 && i.value === "" || i.value != s) && (i.value = "" + ui(s)) : i.value !== "" + ui(s) && (i.value = "" + ui(s)) : b !== "submit" && b !== "reset" || i.removeAttribute("value"), s != null ? Ec(i, b, ui(s)) : o != null ? Ec(i, b, ui(o)) : c != null && i.removeAttribute("value"), d == null && m != null && (i.defaultChecked = !!m), d != null && (i.checked = d && typeof d != "function" && typeof d != "symbol"), x != null && typeof x != "function" && typeof x != "symbol" && typeof x != "boolean" ? i.name = "" + ui(x) : i.removeAttribute("name");
  }
  function hg(i, s, o, c, d, m, b, x) {
    if (m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (i.type = m), s != null || o != null) {
      if (!(m !== "submit" && m !== "reset" || s != null)) {
        Oc(i);
        return;
      }
      o = o != null ? "" + ui(o) : "", s = s != null ? "" + ui(s) : o, x || s === i.value || (i.value = s), i.defaultValue = s;
    }
    c = c ?? d, c = typeof c != "function" && typeof c != "symbol" && !!c, i.checked = x ? i.checked : !!c, i.defaultChecked = !!c, b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" && (i.name = b), Oc(i);
  }
  function Ec(i, s, o) {
    s === "number" && ja(i.ownerDocument) === i || i.defaultValue === "" + o || (i.defaultValue = "" + o);
  }
  function Zl(i, s, o, c) {
    if (i = i.options, s) {
      s = {};
      for (var d = 0; d < o.length; d++) s["$" + o[d]] = true;
      for (o = 0; o < i.length; o++) d = s.hasOwnProperty("$" + i[o].value), i[o].selected !== d && (i[o].selected = d), d && c && (i[o].defaultSelected = true);
    } else {
      for (o = "" + ui(o), s = null, d = 0; d < i.length; d++) {
        if (i[d].value === o) {
          i[d].selected = true, c && (i[d].defaultSelected = true);
          return;
        }
        s !== null || i[d].disabled || (s = i[d]);
      }
      s !== null && (s.selected = true);
    }
  }
  function dg(i, s, o) {
    if (s != null && (s = "" + ui(s), s !== i.value && (i.value = s), o == null)) {
      i.defaultValue !== s && (i.defaultValue = s);
      return;
    }
    i.defaultValue = o != null ? "" + ui(o) : "";
  }
  function mg(i, s, o, c) {
    if (s == null) {
      if (c != null) {
        if (o != null) throw Error(n(92));
        if (yt(c)) {
          if (1 < c.length) throw Error(n(93));
          c = c[0];
        }
        o = c;
      }
      o == null && (o = ""), s = o;
    }
    o = ui(s), i.defaultValue = o, c = i.textContent, c === o && c !== "" && c !== null && (i.value = c), Oc(i);
  }
  function Wl(i, s) {
    if (s) {
      var o = i.firstChild;
      if (o && o === i.lastChild && o.nodeType === 3) {
        o.nodeValue = s;
        return;
      }
    }
    i.textContent = s;
  }
  var d2 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function gg(i, s, o) {
    var c = s.indexOf("--") === 0;
    o == null || typeof o == "boolean" || o === "" ? c ? i.setProperty(s, "") : s === "float" ? i.cssFloat = "" : i[s] = "" : c ? i.setProperty(s, o) : typeof o != "number" || o === 0 || d2.has(s) ? s === "float" ? i.cssFloat = o : i[s] = ("" + o).trim() : i[s] = o + "px";
  }
  function pg(i, s, o) {
    if (s != null && typeof s != "object") throw Error(n(62));
    if (i = i.style, o != null) {
      for (var c in o) !o.hasOwnProperty(c) || s != null && s.hasOwnProperty(c) || (c.indexOf("--") === 0 ? i.setProperty(c, "") : c === "float" ? i.cssFloat = "" : i[c] = "");
      for (var d in s) c = s[d], s.hasOwnProperty(d) && o[d] !== c && gg(i, d, c);
    } else for (var m in s) s.hasOwnProperty(m) && gg(i, m, s[m]);
  }
  function Bc(i) {
    if (i.indexOf("-") === -1) return false;
    switch (i) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var m2 = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), g2 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ya(i) {
    return g2.test("" + i) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : i;
  }
  function $i() {
  }
  var Rc = null;
  function zc(i) {
    return i = i.target || i.srcElement || window, i.correspondingUseElement && (i = i.correspondingUseElement), i.nodeType === 3 ? i.parentNode : i;
  }
  var Jl = null, Fl = null;
  function yg(i) {
    var s = Xl(i);
    if (s && (i = s.stateNode)) {
      var o = i[Ve] || null;
      t: switch (i = s.stateNode, s.type) {
        case "input":
          if (Dc(i, o.value, o.defaultValue, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name), s = o.name, o.type === "radio" && s != null) {
            for (o = i; o.parentNode; ) o = o.parentNode;
            for (o = o.querySelectorAll('input[name="' + ci("" + s) + '"][type="radio"]'), s = 0; s < o.length; s++) {
              var c = o[s];
              if (c !== i && c.form === i.form) {
                var d = c[Ve] || null;
                if (!d) throw Error(n(90));
                Dc(c, d.value, d.defaultValue, d.defaultValue, d.checked, d.defaultChecked, d.type, d.name);
              }
            }
            for (s = 0; s < o.length; s++) c = o[s], c.form === i.form && fg(c);
          }
          break t;
        case "textarea":
          dg(i, o.value, o.defaultValue);
          break t;
        case "select":
          s = o.value, s != null && Zl(i, !!o.multiple, s, false);
      }
    }
  }
  var Nc = false;
  function bg(i, s, o) {
    if (Nc) return i(s, o);
    Nc = true;
    try {
      var c = i(s);
      return c;
    } finally {
      if (Nc = false, (Jl !== null || Fl !== null) && (Eo(), Jl && (s = Jl, i = Fl, Fl = Jl = null, yg(s), i))) for (s = 0; s < i.length; s++) yg(i[s]);
    }
  }
  function er(i, s) {
    var o = i.stateNode;
    if (o === null) return null;
    var c = o[Ve] || null;
    if (c === null) return null;
    o = c[s];
    t: switch (s) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (c = !c.disabled) || (i = i.type, c = !(i === "button" || i === "input" || i === "select" || i === "textarea")), i = !c;
        break t;
      default:
        i = false;
    }
    if (i) return null;
    if (o && typeof o != "function") throw Error(n(231, s, typeof o));
    return o;
  }
  var tn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), _c = false;
  if (tn) try {
    var ir = {};
    Object.defineProperty(ir, "passive", { get: function() {
      _c = true;
    } }), window.addEventListener("test", ir, ir), window.removeEventListener("test", ir, ir);
  } catch {
    _c = false;
  }
  var Tn = null, Lc = null, Ga = null;
  function vg() {
    if (Ga) return Ga;
    var i, s = Lc, o = s.length, c, d = "value" in Tn ? Tn.value : Tn.textContent, m = d.length;
    for (i = 0; i < o && s[i] === d[i]; i++) ;
    var b = o - i;
    for (c = 1; c <= b && s[o - c] === d[m - c]; c++) ;
    return Ga = d.slice(i, 1 < c ? 1 - c : void 0);
  }
  function Xa(i) {
    var s = i.keyCode;
    return "charCode" in i ? (i = i.charCode, i === 0 && s === 13 && (i = 13)) : i = s, i === 10 && (i = 13), 32 <= i || i === 13 ? i : 0;
  }
  function Ka() {
    return true;
  }
  function Sg() {
    return false;
  }
  function qe(i) {
    function s(o, c, d, m, b) {
      this._reactName = o, this._targetInst = d, this.type = c, this.nativeEvent = m, this.target = b, this.currentTarget = null;
      for (var x in i) i.hasOwnProperty(x) && (o = i[x], this[x] = o ? o(m) : m[x]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === false) ? Ka : Sg, this.isPropagationStopped = Sg, this;
    }
    return y(s.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = false), this.isDefaultPrevented = Ka);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = true), this.isPropagationStopped = Ka);
    }, persist: function() {
    }, isPersistent: Ka }), s;
  }
  var fl = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(i) {
    return i.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Qa = qe(fl), nr = y({}, fl, { view: 0, detail: 0 }), p2 = qe(nr), Hc, Uc, lr, Za = y({}, nr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: qc, button: 0, buttons: 0, relatedTarget: function(i) {
    return i.relatedTarget === void 0 ? i.fromElement === i.srcElement ? i.toElement : i.fromElement : i.relatedTarget;
  }, movementX: function(i) {
    return "movementX" in i ? i.movementX : (i !== lr && (lr && i.type === "mousemove" ? (Hc = i.screenX - lr.screenX, Uc = i.screenY - lr.screenY) : Uc = Hc = 0, lr = i), Hc);
  }, movementY: function(i) {
    return "movementY" in i ? i.movementY : Uc;
  } }), xg = qe(Za), y2 = y({}, Za, { dataTransfer: 0 }), b2 = qe(y2), v2 = y({}, nr, { relatedTarget: 0 }), Vc = qe(v2), S2 = y({}, fl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), x2 = qe(S2), w2 = y({}, fl, { clipboardData: function(i) {
    return "clipboardData" in i ? i.clipboardData : window.clipboardData;
  } }), C2 = qe(w2), A2 = y({}, fl, { data: 0 }), wg = qe(A2), M2 = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, T2 = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, k2 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function O2(i) {
    var s = this.nativeEvent;
    return s.getModifierState ? s.getModifierState(i) : (i = k2[i]) ? !!s[i] : false;
  }
  function qc() {
    return O2;
  }
  var D2 = y({}, nr, { key: function(i) {
    if (i.key) {
      var s = M2[i.key] || i.key;
      if (s !== "Unidentified") return s;
    }
    return i.type === "keypress" ? (i = Xa(i), i === 13 ? "Enter" : String.fromCharCode(i)) : i.type === "keydown" || i.type === "keyup" ? T2[i.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: qc, charCode: function(i) {
    return i.type === "keypress" ? Xa(i) : 0;
  }, keyCode: function(i) {
    return i.type === "keydown" || i.type === "keyup" ? i.keyCode : 0;
  }, which: function(i) {
    return i.type === "keypress" ? Xa(i) : i.type === "keydown" || i.type === "keyup" ? i.keyCode : 0;
  } }), E2 = qe(D2), B2 = y({}, Za, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Cg = qe(B2), R2 = y({}, nr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: qc }), z2 = qe(R2), N2 = y({}, fl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), _2 = qe(N2), L2 = y({}, Za, { deltaX: function(i) {
    return "deltaX" in i ? i.deltaX : "wheelDeltaX" in i ? -i.wheelDeltaX : 0;
  }, deltaY: function(i) {
    return "deltaY" in i ? i.deltaY : "wheelDeltaY" in i ? -i.wheelDeltaY : "wheelDelta" in i ? -i.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), H2 = qe(L2), U2 = y({}, fl, { newState: 0, oldState: 0 }), V2 = qe(U2), q2 = [9, 13, 27, 32], jc = tn && "CompositionEvent" in window, sr = null;
  tn && "documentMode" in document && (sr = document.documentMode);
  var j2 = tn && "TextEvent" in window && !sr, Ag = tn && (!jc || sr && 8 < sr && 11 >= sr), Mg = " ", Tg = false;
  function kg(i, s) {
    switch (i) {
      case "keyup":
        return q2.indexOf(s.keyCode) !== -1;
      case "keydown":
        return s.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function Og(i) {
    return i = i.detail, typeof i == "object" && "data" in i ? i.data : null;
  }
  var Pl = false;
  function Y2(i, s) {
    switch (i) {
      case "compositionend":
        return Og(s);
      case "keypress":
        return s.which !== 32 ? null : (Tg = true, Mg);
      case "textInput":
        return i = s.data, i === Mg && Tg ? null : i;
      default:
        return null;
    }
  }
  function G2(i, s) {
    if (Pl) return i === "compositionend" || !jc && kg(i, s) ? (i = vg(), Ga = Lc = Tn = null, Pl = false, i) : null;
    switch (i) {
      case "paste":
        return null;
      case "keypress":
        if (!(s.ctrlKey || s.altKey || s.metaKey) || s.ctrlKey && s.altKey) {
          if (s.char && 1 < s.char.length) return s.char;
          if (s.which) return String.fromCharCode(s.which);
        }
        return null;
      case "compositionend":
        return Ag && s.locale !== "ko" ? null : s.data;
      default:
        return null;
    }
  }
  var X2 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function Dg(i) {
    var s = i && i.nodeName && i.nodeName.toLowerCase();
    return s === "input" ? !!X2[i.type] : s === "textarea";
  }
  function Eg(i, s, o, c) {
    Jl ? Fl ? Fl.push(c) : Fl = [c] : Jl = c, s = Ho(s, "onChange"), 0 < s.length && (o = new Qa("onChange", "change", null, o, c), i.push({ event: o, listeners: s }));
  }
  var rr = null, ar = null;
  function K2(i) {
    hy(i, 0);
  }
  function Wa(i) {
    var s = tr(i);
    if (fg(s)) return i;
  }
  function Bg(i, s) {
    if (i === "change") return s;
  }
  var Rg = false;
  if (tn) {
    var Yc;
    if (tn) {
      var Gc = "oninput" in document;
      if (!Gc) {
        var zg = document.createElement("div");
        zg.setAttribute("oninput", "return;"), Gc = typeof zg.oninput == "function";
      }
      Yc = Gc;
    } else Yc = false;
    Rg = Yc && (!document.documentMode || 9 < document.documentMode);
  }
  function Ng() {
    rr && (rr.detachEvent("onpropertychange", _g), ar = rr = null);
  }
  function _g(i) {
    if (i.propertyName === "value" && Wa(ar)) {
      var s = [];
      Eg(s, ar, i, zc(i)), bg(K2, s);
    }
  }
  function Q2(i, s, o) {
    i === "focusin" ? (Ng(), rr = s, ar = o, rr.attachEvent("onpropertychange", _g)) : i === "focusout" && Ng();
  }
  function Z2(i) {
    if (i === "selectionchange" || i === "keyup" || i === "keydown") return Wa(ar);
  }
  function W2(i, s) {
    if (i === "click") return Wa(s);
  }
  function J2(i, s) {
    if (i === "input" || i === "change") return Wa(s);
  }
  function F2(i, s) {
    return i === s && (i !== 0 || 1 / i === 1 / s) || i !== i && s !== s;
  }
  var $e = typeof Object.is == "function" ? Object.is : F2;
  function or(i, s) {
    if ($e(i, s)) return true;
    if (typeof i != "object" || i === null || typeof s != "object" || s === null) return false;
    var o = Object.keys(i), c = Object.keys(s);
    if (o.length !== c.length) return false;
    for (c = 0; c < o.length; c++) {
      var d = o[c];
      if (!Sc.call(s, d) || !$e(i[d], s[d])) return false;
    }
    return true;
  }
  function Lg(i) {
    for (; i && i.firstChild; ) i = i.firstChild;
    return i;
  }
  function Hg(i, s) {
    var o = Lg(i);
    i = 0;
    for (var c; o; ) {
      if (o.nodeType === 3) {
        if (c = i + o.textContent.length, i <= s && c >= s) return { node: o, offset: s - i };
        i = c;
      }
      t: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break t;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = Lg(o);
    }
  }
  function Ug(i, s) {
    return i && s ? i === s ? true : i && i.nodeType === 3 ? false : s && s.nodeType === 3 ? Ug(i, s.parentNode) : "contains" in i ? i.contains(s) : i.compareDocumentPosition ? !!(i.compareDocumentPosition(s) & 16) : false : false;
  }
  function Vg(i) {
    i = i != null && i.ownerDocument != null && i.ownerDocument.defaultView != null ? i.ownerDocument.defaultView : window;
    for (var s = ja(i.document); s instanceof i.HTMLIFrameElement; ) {
      try {
        var o = typeof s.contentWindow.location.href == "string";
      } catch {
        o = false;
      }
      if (o) i = s.contentWindow;
      else break;
      s = ja(i.document);
    }
    return s;
  }
  function Xc(i) {
    var s = i && i.nodeName && i.nodeName.toLowerCase();
    return s && (s === "input" && (i.type === "text" || i.type === "search" || i.type === "tel" || i.type === "url" || i.type === "password") || s === "textarea" || i.contentEditable === "true");
  }
  var P2 = tn && "documentMode" in document && 11 >= document.documentMode, Il = null, Kc = null, ur = null, Qc = false;
  function qg(i, s, o) {
    var c = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Qc || Il == null || Il !== ja(c) || (c = Il, "selectionStart" in c && Xc(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = { anchorNode: c.anchorNode, anchorOffset: c.anchorOffset, focusNode: c.focusNode, focusOffset: c.focusOffset }), ur && or(ur, c) || (ur = c, c = Ho(Kc, "onSelect"), 0 < c.length && (s = new Qa("onSelect", "select", null, s, o), i.push({ event: s, listeners: c }), s.target = Il)));
  }
  function hl(i, s) {
    var o = {};
    return o[i.toLowerCase()] = s.toLowerCase(), o["Webkit" + i] = "webkit" + s, o["Moz" + i] = "moz" + s, o;
  }
  var $l = { animationend: hl("Animation", "AnimationEnd"), animationiteration: hl("Animation", "AnimationIteration"), animationstart: hl("Animation", "AnimationStart"), transitionrun: hl("Transition", "TransitionRun"), transitionstart: hl("Transition", "TransitionStart"), transitioncancel: hl("Transition", "TransitionCancel"), transitionend: hl("Transition", "TransitionEnd") }, Zc = {}, jg = {};
  tn && (jg = document.createElement("div").style, "AnimationEvent" in window || (delete $l.animationend.animation, delete $l.animationiteration.animation, delete $l.animationstart.animation), "TransitionEvent" in window || delete $l.transitionend.transition);
  function dl(i) {
    if (Zc[i]) return Zc[i];
    if (!$l[i]) return i;
    var s = $l[i], o;
    for (o in s) if (s.hasOwnProperty(o) && o in jg) return Zc[i] = s[o];
    return i;
  }
  var Yg = dl("animationend"), Gg = dl("animationiteration"), Xg = dl("animationstart"), I2 = dl("transitionrun"), $2 = dl("transitionstart"), tw = dl("transitioncancel"), Kg = dl("transitionend"), Qg = /* @__PURE__ */ new Map(), Wc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  Wc.push("scrollEnd");
  function ki(i, s) {
    Qg.set(i, s), cl(s, [i]);
  }
  var Ja = typeof reportError == "function" ? reportError : function(i) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var s = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof i == "object" && i !== null && typeof i.message == "string" ? String(i.message) : String(i), error: i });
      if (!window.dispatchEvent(s)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", i);
      return;
    }
    console.error(i);
  }, fi = [], ts = 0, Jc = 0;
  function Fa() {
    for (var i = ts, s = Jc = ts = 0; s < i; ) {
      var o = fi[s];
      fi[s++] = null;
      var c = fi[s];
      fi[s++] = null;
      var d = fi[s];
      fi[s++] = null;
      var m = fi[s];
      if (fi[s++] = null, c !== null && d !== null) {
        var b = c.pending;
        b === null ? d.next = d : (d.next = b.next, b.next = d), c.pending = d;
      }
      m !== 0 && Zg(o, d, m);
    }
  }
  function Pa(i, s, o, c) {
    fi[ts++] = i, fi[ts++] = s, fi[ts++] = o, fi[ts++] = c, Jc |= c, i.lanes |= c, i = i.alternate, i !== null && (i.lanes |= c);
  }
  function Fc(i, s, o, c) {
    return Pa(i, s, o, c), Ia(i);
  }
  function ml(i, s) {
    return Pa(i, null, null, s), Ia(i);
  }
  function Zg(i, s, o) {
    i.lanes |= o;
    var c = i.alternate;
    c !== null && (c.lanes |= o);
    for (var d = false, m = i.return; m !== null; ) m.childLanes |= o, c = m.alternate, c !== null && (c.childLanes |= o), m.tag === 22 && (i = m.stateNode, i === null || i._visibility & 1 || (d = true)), i = m, m = m.return;
    return i.tag === 3 ? (m = i.stateNode, d && s !== null && (d = 31 - Ie(o), i = m.hiddenUpdates, c = i[d], c === null ? i[d] = [s] : c.push(s), s.lane = o | 536870912), m) : null;
  }
  function Ia(i) {
    if (50 < Br) throw Br = 0, rh = null, Error(n(185));
    for (var s = i.return; s !== null; ) i = s, s = i.return;
    return i.tag === 3 ? i.stateNode : null;
  }
  var es = {};
  function ew(i, s, o, c) {
    this.tag = i, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = s, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ti(i, s, o, c) {
    return new ew(i, s, o, c);
  }
  function Pc(i) {
    return i = i.prototype, !(!i || !i.isReactComponent);
  }
  function en(i, s) {
    var o = i.alternate;
    return o === null ? (o = ti(i.tag, s, i.key, i.mode), o.elementType = i.elementType, o.type = i.type, o.stateNode = i.stateNode, o.alternate = i, i.alternate = o) : (o.pendingProps = s, o.type = i.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = i.flags & 65011712, o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, s = i.dependencies, o.dependencies = s === null ? null : { lanes: s.lanes, firstContext: s.firstContext }, o.sibling = i.sibling, o.index = i.index, o.ref = i.ref, o.refCleanup = i.refCleanup, o;
  }
  function Wg(i, s) {
    i.flags &= 65011714;
    var o = i.alternate;
    return o === null ? (i.childLanes = 0, i.lanes = s, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, s = o.dependencies, i.dependencies = s === null ? null : { lanes: s.lanes, firstContext: s.firstContext }), i;
  }
  function $a(i, s, o, c, d, m) {
    var b = 0;
    if (c = i, typeof i == "function") Pc(i) && (b = 1);
    else if (typeof i == "string") b = rC(i, o, $.current) ? 26 : i === "html" || i === "head" || i === "body" ? 27 : 5;
    else t: switch (i) {
      case tt:
        return i = ti(31, o, s, d), i.elementType = tt, i.lanes = m, i;
      case C:
        return gl(o.children, d, m, s);
      case T:
        b = 8, d |= 24;
        break;
      case O:
        return i = ti(12, o, s, d | 2), i.elementType = O, i.lanes = m, i;
      case _:
        return i = ti(13, o, s, d), i.elementType = _, i.lanes = m, i;
      case G:
        return i = ti(19, o, s, d), i.elementType = G, i.lanes = m, i;
      default:
        if (typeof i == "object" && i !== null) switch (i.$$typeof) {
          case L:
            b = 10;
            break t;
          case j:
            b = 9;
            break t;
          case Q:
            b = 11;
            break t;
          case V:
            b = 14;
            break t;
          case lt:
            b = 16, c = null;
            break t;
        }
        b = 29, o = Error(n(130, i === null ? "null" : typeof i, "")), c = null;
    }
    return s = ti(b, o, s, d), s.elementType = i, s.type = c, s.lanes = m, s;
  }
  function gl(i, s, o, c) {
    return i = ti(7, i, c, s), i.lanes = o, i;
  }
  function Ic(i, s, o) {
    return i = ti(6, i, null, s), i.lanes = o, i;
  }
  function Jg(i) {
    var s = ti(18, null, null, 0);
    return s.stateNode = i, s;
  }
  function $c(i, s, o) {
    return s = ti(4, i.children !== null ? i.children : [], i.key, s), s.lanes = o, s.stateNode = { containerInfo: i.containerInfo, pendingChildren: null, implementation: i.implementation }, s;
  }
  var Fg = /* @__PURE__ */ new WeakMap();
  function hi(i, s) {
    if (typeof i == "object" && i !== null) {
      var o = Fg.get(i);
      return o !== void 0 ? o : (s = { value: i, source: s, stack: Jm(s) }, Fg.set(i, s), s);
    }
    return { value: i, source: s, stack: Jm(s) };
  }
  var is = [], ns = 0, to = null, cr = 0, di = [], mi = 0, kn = null, Ni = 1, _i = "";
  function nn(i, s) {
    is[ns++] = cr, is[ns++] = to, to = i, cr = s;
  }
  function Pg(i, s, o) {
    di[mi++] = Ni, di[mi++] = _i, di[mi++] = kn, kn = i;
    var c = Ni;
    i = _i;
    var d = 32 - Ie(c) - 1;
    c &= ~(1 << d), o += 1;
    var m = 32 - Ie(s) + d;
    if (30 < m) {
      var b = d - d % 5;
      m = (c & (1 << b) - 1).toString(32), c >>= b, d -= b, Ni = 1 << 32 - Ie(s) + d | o << d | c, _i = m + i;
    } else Ni = 1 << m | o << d | c, _i = i;
  }
  function tf(i) {
    i.return !== null && (nn(i, 1), Pg(i, 1, 0));
  }
  function ef(i) {
    for (; i === to; ) to = is[--ns], is[ns] = null, cr = is[--ns], is[ns] = null;
    for (; i === kn; ) kn = di[--mi], di[mi] = null, _i = di[--mi], di[mi] = null, Ni = di[--mi], di[mi] = null;
  }
  function Ig(i, s) {
    di[mi++] = Ni, di[mi++] = _i, di[mi++] = kn, Ni = s.id, _i = s.overflow, kn = i;
  }
  var be = null, Kt = null, kt = false, On = null, gi = false, nf = Error(n(519));
  function Dn(i) {
    var s = Error(n(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw fr(hi(s, i)), nf;
  }
  function $g(i) {
    var s = i.stateNode, o = i.type, c = i.memoizedProps;
    switch (s[ye] = i, s[Ve] = c, o) {
      case "dialog":
        At("cancel", s), At("close", s);
        break;
      case "iframe":
      case "object":
      case "embed":
        At("load", s);
        break;
      case "video":
      case "audio":
        for (o = 0; o < zr.length; o++) At(zr[o], s);
        break;
      case "source":
        At("error", s);
        break;
      case "img":
      case "image":
      case "link":
        At("error", s), At("load", s);
        break;
      case "details":
        At("toggle", s);
        break;
      case "input":
        At("invalid", s), hg(s, c.value, c.defaultValue, c.checked, c.defaultChecked, c.type, c.name, true);
        break;
      case "select":
        At("invalid", s);
        break;
      case "textarea":
        At("invalid", s), mg(s, c.value, c.defaultValue, c.children);
    }
    o = c.children, typeof o != "string" && typeof o != "number" && typeof o != "bigint" || s.textContent === "" + o || c.suppressHydrationWarning === true || py(s.textContent, o) ? (c.popover != null && (At("beforetoggle", s), At("toggle", s)), c.onScroll != null && At("scroll", s), c.onScrollEnd != null && At("scrollend", s), c.onClick != null && (s.onclick = $i), s = true) : s = false, s || Dn(i, true);
  }
  function tp(i) {
    for (be = i.return; be; ) switch (be.tag) {
      case 5:
      case 31:
      case 13:
        gi = false;
        return;
      case 27:
      case 3:
        gi = true;
        return;
      default:
        be = be.return;
    }
  }
  function ls(i) {
    if (i !== be) return false;
    if (!kt) return tp(i), kt = true, false;
    var s = i.tag, o;
    if ((o = s !== 3 && s !== 27) && ((o = s === 5) && (o = i.type, o = !(o !== "form" && o !== "button") || xh(i.type, i.memoizedProps)), o = !o), o && Kt && Dn(i), tp(i), s === 13) {
      if (i = i.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(n(317));
      Kt = My(i);
    } else if (s === 31) {
      if (i = i.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(n(317));
      Kt = My(i);
    } else s === 27 ? (s = Kt, Gn(i.type) ? (i = Th, Th = null, Kt = i) : Kt = s) : Kt = be ? yi(i.stateNode.nextSibling) : null;
    return true;
  }
  function pl() {
    Kt = be = null, kt = false;
  }
  function lf() {
    var i = On;
    return i !== null && (Xe === null ? Xe = i : Xe.push.apply(Xe, i), On = null), i;
  }
  function fr(i) {
    On === null ? On = [i] : On.push(i);
  }
  var sf = M(null), yl = null, ln = null;
  function En(i, s, o) {
    W(sf, s._currentValue), s._currentValue = o;
  }
  function sn(i) {
    i._currentValue = sf.current, H(sf);
  }
  function rf(i, s, o) {
    for (; i !== null; ) {
      var c = i.alternate;
      if ((i.childLanes & s) !== s ? (i.childLanes |= s, c !== null && (c.childLanes |= s)) : c !== null && (c.childLanes & s) !== s && (c.childLanes |= s), i === o) break;
      i = i.return;
    }
  }
  function af(i, s, o, c) {
    var d = i.child;
    for (d !== null && (d.return = i); d !== null; ) {
      var m = d.dependencies;
      if (m !== null) {
        var b = d.child;
        m = m.firstContext;
        t: for (; m !== null; ) {
          var x = m;
          m = d;
          for (var A = 0; A < s.length; A++) if (x.context === s[A]) {
            m.lanes |= o, x = m.alternate, x !== null && (x.lanes |= o), rf(m.return, o, i), c || (b = null);
            break t;
          }
          m = x.next;
        }
      } else if (d.tag === 18) {
        if (b = d.return, b === null) throw Error(n(341));
        b.lanes |= o, m = b.alternate, m !== null && (m.lanes |= o), rf(b, o, i), b = null;
      } else b = d.child;
      if (b !== null) b.return = d;
      else for (b = d; b !== null; ) {
        if (b === i) {
          b = null;
          break;
        }
        if (d = b.sibling, d !== null) {
          d.return = b.return, b = d;
          break;
        }
        b = b.return;
      }
      d = b;
    }
  }
  function ss(i, s, o, c) {
    i = null;
    for (var d = s, m = false; d !== null; ) {
      if (!m) {
        if ((d.flags & 524288) !== 0) m = true;
        else if ((d.flags & 262144) !== 0) break;
      }
      if (d.tag === 10) {
        var b = d.alternate;
        if (b === null) throw Error(n(387));
        if (b = b.memoizedProps, b !== null) {
          var x = d.type;
          $e(d.pendingProps.value, b.value) || (i !== null ? i.push(x) : i = [x]);
        }
      } else if (d === Et.current) {
        if (b = d.alternate, b === null) throw Error(n(387));
        b.memoizedState.memoizedState !== d.memoizedState.memoizedState && (i !== null ? i.push(Ur) : i = [Ur]);
      }
      d = d.return;
    }
    i !== null && af(s, i, o, c), s.flags |= 262144;
  }
  function eo(i) {
    for (i = i.firstContext; i !== null; ) {
      if (!$e(i.context._currentValue, i.memoizedValue)) return true;
      i = i.next;
    }
    return false;
  }
  function bl(i) {
    yl = i, ln = null, i = i.dependencies, i !== null && (i.firstContext = null);
  }
  function ve(i) {
    return ep(yl, i);
  }
  function io(i, s) {
    return yl === null && bl(i), ep(i, s);
  }
  function ep(i, s) {
    var o = s._currentValue;
    if (s = { context: s, memoizedValue: o, next: null }, ln === null) {
      if (i === null) throw Error(n(308));
      ln = s, i.dependencies = { lanes: 0, firstContext: s }, i.flags |= 524288;
    } else ln = ln.next = s;
    return o;
  }
  var iw = typeof AbortController < "u" ? AbortController : function() {
    var i = [], s = this.signal = { aborted: false, addEventListener: function(o, c) {
      i.push(c);
    } };
    this.abort = function() {
      s.aborted = true, i.forEach(function(o) {
        return o();
      });
    };
  }, nw = l.unstable_scheduleCallback, lw = l.unstable_NormalPriority, re = { $$typeof: L, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function of() {
    return { controller: new iw(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function hr(i) {
    i.refCount--, i.refCount === 0 && nw(lw, function() {
      i.controller.abort();
    });
  }
  var dr = null, uf = 0, rs = 0, as = null;
  function sw(i, s) {
    if (dr === null) {
      var o = dr = [];
      uf = 0, rs = hh(), as = { status: "pending", value: void 0, then: function(c) {
        o.push(c);
      } };
    }
    return uf++, s.then(ip, ip), s;
  }
  function ip() {
    if (--uf === 0 && dr !== null) {
      as !== null && (as.status = "fulfilled");
      var i = dr;
      dr = null, rs = 0, as = null;
      for (var s = 0; s < i.length; s++) (0, i[s])();
    }
  }
  function rw(i, s) {
    var o = [], c = { status: "pending", value: null, reason: null, then: function(d) {
      o.push(d);
    } };
    return i.then(function() {
      c.status = "fulfilled", c.value = s;
      for (var d = 0; d < o.length; d++) (0, o[d])(s);
    }, function(d) {
      for (c.status = "rejected", c.reason = d, d = 0; d < o.length; d++) (0, o[d])(void 0);
    }), c;
  }
  var np = z.S;
  z.S = function(i, s) {
    q0 = Fe(), typeof s == "object" && s !== null && typeof s.then == "function" && sw(i, s), np !== null && np(i, s);
  };
  var vl = M(null);
  function cf() {
    var i = vl.current;
    return i !== null ? i : Yt.pooledCache;
  }
  function no(i, s) {
    s === null ? W(vl, vl.current) : W(vl, s.pool);
  }
  function lp() {
    var i = cf();
    return i === null ? null : { parent: re._currentValue, pool: i };
  }
  var os = Error(n(460)), ff = Error(n(474)), lo = Error(n(542)), so = { then: function() {
  } };
  function sp(i) {
    return i = i.status, i === "fulfilled" || i === "rejected";
  }
  function rp(i, s, o) {
    switch (o = i[o], o === void 0 ? i.push(s) : o !== s && (s.then($i, $i), s = o), s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw i = s.reason, op(i), i;
      default:
        if (typeof s.status == "string") s.then($i, $i);
        else {
          if (i = Yt, i !== null && 100 < i.shellSuspendCounter) throw Error(n(482));
          i = s, i.status = "pending", i.then(function(c) {
            if (s.status === "pending") {
              var d = s;
              d.status = "fulfilled", d.value = c;
            }
          }, function(c) {
            if (s.status === "pending") {
              var d = s;
              d.status = "rejected", d.reason = c;
            }
          });
        }
        switch (s.status) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw i = s.reason, op(i), i;
        }
        throw xl = s, os;
    }
  }
  function Sl(i) {
    try {
      var s = i._init;
      return s(i._payload);
    } catch (o) {
      throw o !== null && typeof o == "object" && typeof o.then == "function" ? (xl = o, os) : o;
    }
  }
  var xl = null;
  function ap() {
    if (xl === null) throw Error(n(459));
    var i = xl;
    return xl = null, i;
  }
  function op(i) {
    if (i === os || i === lo) throw Error(n(483));
  }
  var us = null, mr = 0;
  function ro(i) {
    var s = mr;
    return mr += 1, us === null && (us = []), rp(us, i, s);
  }
  function gr(i, s) {
    s = s.props.ref, i.ref = s !== void 0 ? s : null;
  }
  function ao(i, s) {
    throw s.$$typeof === v ? Error(n(525)) : (i = Object.prototype.toString.call(s), Error(n(31, i === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : i)));
  }
  function up(i) {
    function s(D, k) {
      if (i) {
        var E = D.deletions;
        E === null ? (D.deletions = [k], D.flags |= 16) : E.push(k);
      }
    }
    function o(D, k) {
      if (!i) return null;
      for (; k !== null; ) s(D, k), k = k.sibling;
      return null;
    }
    function c(D) {
      for (var k = /* @__PURE__ */ new Map(); D !== null; ) D.key !== null ? k.set(D.key, D) : k.set(D.index, D), D = D.sibling;
      return k;
    }
    function d(D, k) {
      return D = en(D, k), D.index = 0, D.sibling = null, D;
    }
    function m(D, k, E) {
      return D.index = E, i ? (E = D.alternate, E !== null ? (E = E.index, E < k ? (D.flags |= 67108866, k) : E) : (D.flags |= 67108866, k)) : (D.flags |= 1048576, k);
    }
    function b(D) {
      return i && D.alternate === null && (D.flags |= 67108866), D;
    }
    function x(D, k, E, Y) {
      return k === null || k.tag !== 6 ? (k = Ic(E, D.mode, Y), k.return = D, k) : (k = d(k, E), k.return = D, k);
    }
    function A(D, k, E, Y) {
      var ot = E.type;
      return ot === C ? U(D, k, E.props.children, Y, E.key) : k !== null && (k.elementType === ot || typeof ot == "object" && ot !== null && ot.$$typeof === lt && Sl(ot) === k.type) ? (k = d(k, E.props), gr(k, E), k.return = D, k) : (k = $a(E.type, E.key, E.props, null, D.mode, Y), gr(k, E), k.return = D, k);
    }
    function B(D, k, E, Y) {
      return k === null || k.tag !== 4 || k.stateNode.containerInfo !== E.containerInfo || k.stateNode.implementation !== E.implementation ? (k = $c(E, D.mode, Y), k.return = D, k) : (k = d(k, E.children || []), k.return = D, k);
    }
    function U(D, k, E, Y, ot) {
      return k === null || k.tag !== 7 ? (k = gl(E, D.mode, Y, ot), k.return = D, k) : (k = d(k, E), k.return = D, k);
    }
    function X(D, k, E) {
      if (typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint") return k = Ic("" + k, D.mode, E), k.return = D, k;
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case S:
            return E = $a(k.type, k.key, k.props, null, D.mode, E), gr(E, k), E.return = D, E;
          case w:
            return k = $c(k, D.mode, E), k.return = D, k;
          case lt:
            return k = Sl(k), X(D, k, E);
        }
        if (yt(k) || I(k)) return k = gl(k, D.mode, E, null), k.return = D, k;
        if (typeof k.then == "function") return X(D, ro(k), E);
        if (k.$$typeof === L) return X(D, io(D, k), E);
        ao(D, k);
      }
      return null;
    }
    function R(D, k, E, Y) {
      var ot = k !== null ? k.key : null;
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint") return ot !== null ? null : x(D, k, "" + E, Y);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case S:
            return E.key === ot ? A(D, k, E, Y) : null;
          case w:
            return E.key === ot ? B(D, k, E, Y) : null;
          case lt:
            return E = Sl(E), R(D, k, E, Y);
        }
        if (yt(E) || I(E)) return ot !== null ? null : U(D, k, E, Y, null);
        if (typeof E.then == "function") return R(D, k, ro(E), Y);
        if (E.$$typeof === L) return R(D, k, io(D, E), Y);
        ao(D, E);
      }
      return null;
    }
    function N(D, k, E, Y, ot) {
      if (typeof Y == "string" && Y !== "" || typeof Y == "number" || typeof Y == "bigint") return D = D.get(E) || null, x(k, D, "" + Y, ot);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case S:
            return D = D.get(Y.key === null ? E : Y.key) || null, A(k, D, Y, ot);
          case w:
            return D = D.get(Y.key === null ? E : Y.key) || null, B(k, D, Y, ot);
          case lt:
            return Y = Sl(Y), N(D, k, E, Y, ot);
        }
        if (yt(Y) || I(Y)) return D = D.get(E) || null, U(k, D, Y, ot, null);
        if (typeof Y.then == "function") return N(D, k, E, ro(Y), ot);
        if (Y.$$typeof === L) return N(D, k, E, io(k, Y), ot);
        ao(k, Y);
      }
      return null;
    }
    function nt(D, k, E, Y) {
      for (var ot = null, zt = null, st = k, xt = k = 0, Tt = null; st !== null && xt < E.length; xt++) {
        st.index > xt ? (Tt = st, st = null) : Tt = st.sibling;
        var Nt = R(D, st, E[xt], Y);
        if (Nt === null) {
          st === null && (st = Tt);
          break;
        }
        i && st && Nt.alternate === null && s(D, st), k = m(Nt, k, xt), zt === null ? ot = Nt : zt.sibling = Nt, zt = Nt, st = Tt;
      }
      if (xt === E.length) return o(D, st), kt && nn(D, xt), ot;
      if (st === null) {
        for (; xt < E.length; xt++) st = X(D, E[xt], Y), st !== null && (k = m(st, k, xt), zt === null ? ot = st : zt.sibling = st, zt = st);
        return kt && nn(D, xt), ot;
      }
      for (st = c(st); xt < E.length; xt++) Tt = N(st, D, xt, E[xt], Y), Tt !== null && (i && Tt.alternate !== null && st.delete(Tt.key === null ? xt : Tt.key), k = m(Tt, k, xt), zt === null ? ot = Tt : zt.sibling = Tt, zt = Tt);
      return i && st.forEach(function(Wn) {
        return s(D, Wn);
      }), kt && nn(D, xt), ot;
    }
    function ct(D, k, E, Y) {
      if (E == null) throw Error(n(151));
      for (var ot = null, zt = null, st = k, xt = k = 0, Tt = null, Nt = E.next(); st !== null && !Nt.done; xt++, Nt = E.next()) {
        st.index > xt ? (Tt = st, st = null) : Tt = st.sibling;
        var Wn = R(D, st, Nt.value, Y);
        if (Wn === null) {
          st === null && (st = Tt);
          break;
        }
        i && st && Wn.alternate === null && s(D, st), k = m(Wn, k, xt), zt === null ? ot = Wn : zt.sibling = Wn, zt = Wn, st = Tt;
      }
      if (Nt.done) return o(D, st), kt && nn(D, xt), ot;
      if (st === null) {
        for (; !Nt.done; xt++, Nt = E.next()) Nt = X(D, Nt.value, Y), Nt !== null && (k = m(Nt, k, xt), zt === null ? ot = Nt : zt.sibling = Nt, zt = Nt);
        return kt && nn(D, xt), ot;
      }
      for (st = c(st); !Nt.done; xt++, Nt = E.next()) Nt = N(st, D, xt, Nt.value, Y), Nt !== null && (i && Nt.alternate !== null && st.delete(Nt.key === null ? xt : Nt.key), k = m(Nt, k, xt), zt === null ? ot = Nt : zt.sibling = Nt, zt = Nt);
      return i && st.forEach(function(yC) {
        return s(D, yC);
      }), kt && nn(D, xt), ot;
    }
    function qt(D, k, E, Y) {
      if (typeof E == "object" && E !== null && E.type === C && E.key === null && (E = E.props.children), typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case S:
            t: {
              for (var ot = E.key; k !== null; ) {
                if (k.key === ot) {
                  if (ot = E.type, ot === C) {
                    if (k.tag === 7) {
                      o(D, k.sibling), Y = d(k, E.props.children), Y.return = D, D = Y;
                      break t;
                    }
                  } else if (k.elementType === ot || typeof ot == "object" && ot !== null && ot.$$typeof === lt && Sl(ot) === k.type) {
                    o(D, k.sibling), Y = d(k, E.props), gr(Y, E), Y.return = D, D = Y;
                    break t;
                  }
                  o(D, k);
                  break;
                } else s(D, k);
                k = k.sibling;
              }
              E.type === C ? (Y = gl(E.props.children, D.mode, Y, E.key), Y.return = D, D = Y) : (Y = $a(E.type, E.key, E.props, null, D.mode, Y), gr(Y, E), Y.return = D, D = Y);
            }
            return b(D);
          case w:
            t: {
              for (ot = E.key; k !== null; ) {
                if (k.key === ot) if (k.tag === 4 && k.stateNode.containerInfo === E.containerInfo && k.stateNode.implementation === E.implementation) {
                  o(D, k.sibling), Y = d(k, E.children || []), Y.return = D, D = Y;
                  break t;
                } else {
                  o(D, k);
                  break;
                }
                else s(D, k);
                k = k.sibling;
              }
              Y = $c(E, D.mode, Y), Y.return = D, D = Y;
            }
            return b(D);
          case lt:
            return E = Sl(E), qt(D, k, E, Y);
        }
        if (yt(E)) return nt(D, k, E, Y);
        if (I(E)) {
          if (ot = I(E), typeof ot != "function") throw Error(n(150));
          return E = ot.call(E), ct(D, k, E, Y);
        }
        if (typeof E.then == "function") return qt(D, k, ro(E), Y);
        if (E.$$typeof === L) return qt(D, k, io(D, E), Y);
        ao(D, E);
      }
      return typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint" ? (E = "" + E, k !== null && k.tag === 6 ? (o(D, k.sibling), Y = d(k, E), Y.return = D, D = Y) : (o(D, k), Y = Ic(E, D.mode, Y), Y.return = D, D = Y), b(D)) : o(D, k);
    }
    return function(D, k, E, Y) {
      try {
        mr = 0;
        var ot = qt(D, k, E, Y);
        return us = null, ot;
      } catch (st) {
        if (st === os || st === lo) throw st;
        var zt = ti(29, st, null, D.mode);
        return zt.lanes = Y, zt.return = D, zt;
      } finally {
      }
    };
  }
  var wl = up(true), cp = up(false), Bn = false;
  function hf(i) {
    i.updateQueue = { baseState: i.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function df(i, s) {
    i = i.updateQueue, s.updateQueue === i && (s.updateQueue = { baseState: i.baseState, firstBaseUpdate: i.firstBaseUpdate, lastBaseUpdate: i.lastBaseUpdate, shared: i.shared, callbacks: null });
  }
  function Rn(i) {
    return { lane: i, tag: 0, payload: null, callback: null, next: null };
  }
  function zn(i, s, o) {
    var c = i.updateQueue;
    if (c === null) return null;
    if (c = c.shared, (_t & 2) !== 0) {
      var d = c.pending;
      return d === null ? s.next = s : (s.next = d.next, d.next = s), c.pending = s, s = Ia(i), Zg(i, null, o), s;
    }
    return Pa(i, c, s, o), Ia(i);
  }
  function pr(i, s, o) {
    if (s = s.updateQueue, s !== null && (s = s.shared, (o & 4194048) !== 0)) {
      var c = s.lanes;
      c &= i.pendingLanes, o |= c, s.lanes = o, eg(i, o);
    }
  }
  function mf(i, s) {
    var o = i.updateQueue, c = i.alternate;
    if (c !== null && (c = c.updateQueue, o === c)) {
      var d = null, m = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var b = { lane: o.lane, tag: o.tag, payload: o.payload, callback: null, next: null };
          m === null ? d = m = b : m = m.next = b, o = o.next;
        } while (o !== null);
        m === null ? d = m = s : m = m.next = s;
      } else d = m = s;
      o = { baseState: c.baseState, firstBaseUpdate: d, lastBaseUpdate: m, shared: c.shared, callbacks: c.callbacks }, i.updateQueue = o;
      return;
    }
    i = o.lastBaseUpdate, i === null ? o.firstBaseUpdate = s : i.next = s, o.lastBaseUpdate = s;
  }
  var gf = false;
  function yr() {
    if (gf) {
      var i = as;
      if (i !== null) throw i;
    }
  }
  function br(i, s, o, c) {
    gf = false;
    var d = i.updateQueue;
    Bn = false;
    var m = d.firstBaseUpdate, b = d.lastBaseUpdate, x = d.shared.pending;
    if (x !== null) {
      d.shared.pending = null;
      var A = x, B = A.next;
      A.next = null, b === null ? m = B : b.next = B, b = A;
      var U = i.alternate;
      U !== null && (U = U.updateQueue, x = U.lastBaseUpdate, x !== b && (x === null ? U.firstBaseUpdate = B : x.next = B, U.lastBaseUpdate = A));
    }
    if (m !== null) {
      var X = d.baseState;
      b = 0, U = B = A = null, x = m;
      do {
        var R = x.lane & -536870913, N = R !== x.lane;
        if (N ? (Mt & R) === R : (c & R) === R) {
          R !== 0 && R === rs && (gf = true), U !== null && (U = U.next = { lane: 0, tag: x.tag, payload: x.payload, callback: null, next: null });
          t: {
            var nt = i, ct = x;
            R = s;
            var qt = o;
            switch (ct.tag) {
              case 1:
                if (nt = ct.payload, typeof nt == "function") {
                  X = nt.call(qt, X, R);
                  break t;
                }
                X = nt;
                break t;
              case 3:
                nt.flags = nt.flags & -65537 | 128;
              case 0:
                if (nt = ct.payload, R = typeof nt == "function" ? nt.call(qt, X, R) : nt, R == null) break t;
                X = y({}, X, R);
                break t;
              case 2:
                Bn = true;
            }
          }
          R = x.callback, R !== null && (i.flags |= 64, N && (i.flags |= 8192), N = d.callbacks, N === null ? d.callbacks = [R] : N.push(R));
        } else N = { lane: R, tag: x.tag, payload: x.payload, callback: x.callback, next: null }, U === null ? (B = U = N, A = X) : U = U.next = N, b |= R;
        if (x = x.next, x === null) {
          if (x = d.shared.pending, x === null) break;
          N = x, x = N.next, N.next = null, d.lastBaseUpdate = N, d.shared.pending = null;
        }
      } while (true);
      U === null && (A = X), d.baseState = A, d.firstBaseUpdate = B, d.lastBaseUpdate = U, m === null && (d.shared.lanes = 0), Un |= b, i.lanes = b, i.memoizedState = X;
    }
  }
  function fp(i, s) {
    if (typeof i != "function") throw Error(n(191, i));
    i.call(s);
  }
  function hp(i, s) {
    var o = i.callbacks;
    if (o !== null) for (i.callbacks = null, i = 0; i < o.length; i++) fp(o[i], s);
  }
  var cs = M(null), oo = M(0);
  function dp(i, s) {
    i = mn, W(oo, i), W(cs, s), mn = i | s.baseLanes;
  }
  function pf() {
    W(oo, mn), W(cs, cs.current);
  }
  function yf() {
    mn = oo.current, H(cs), H(oo);
  }
  var ei = M(null), pi = null;
  function Nn(i) {
    var s = i.alternate;
    W(ne, ne.current & 1), W(ei, i), pi === null && (s === null || cs.current !== null || s.memoizedState !== null) && (pi = i);
  }
  function bf(i) {
    W(ne, ne.current), W(ei, i), pi === null && (pi = i);
  }
  function mp(i) {
    i.tag === 22 ? (W(ne, ne.current), W(ei, i), pi === null && (pi = i)) : _n();
  }
  function _n() {
    W(ne, ne.current), W(ei, ei.current);
  }
  function ii(i) {
    H(ei), pi === i && (pi = null), H(ne);
  }
  var ne = M(0);
  function uo(i) {
    for (var s = i; s !== null; ) {
      if (s.tag === 13) {
        var o = s.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || Ah(o) || Mh(o))) return s;
      } else if (s.tag === 19 && (s.memoizedProps.revealOrder === "forwards" || s.memoizedProps.revealOrder === "backwards" || s.memoizedProps.revealOrder === "unstable_legacy-backwards" || s.memoizedProps.revealOrder === "together")) {
        if ((s.flags & 128) !== 0) return s;
      } else if (s.child !== null) {
        s.child.return = s, s = s.child;
        continue;
      }
      if (s === i) break;
      for (; s.sibling === null; ) {
        if (s.return === null || s.return === i) return null;
        s = s.return;
      }
      s.sibling.return = s.return, s = s.sibling;
    }
    return null;
  }
  var rn = 0, vt = null, Ut = null, ae = null, co = false, fs = false, Cl = false, fo = 0, vr = 0, hs = null, aw = 0;
  function It() {
    throw Error(n(321));
  }
  function vf(i, s) {
    if (s === null) return false;
    for (var o = 0; o < s.length && o < i.length; o++) if (!$e(i[o], s[o])) return false;
    return true;
  }
  function Sf(i, s, o, c, d, m) {
    return rn = m, vt = s, s.memoizedState = null, s.updateQueue = null, s.lanes = 0, z.H = i === null || i.memoizedState === null ? Pp : _f, Cl = false, m = o(c, d), Cl = false, fs && (m = pp(s, o, c, d)), gp(i), m;
  }
  function gp(i) {
    z.H = wr;
    var s = Ut !== null && Ut.next !== null;
    if (rn = 0, ae = Ut = vt = null, co = false, vr = 0, hs = null, s) throw Error(n(300));
    i === null || oe || (i = i.dependencies, i !== null && eo(i) && (oe = true));
  }
  function pp(i, s, o, c) {
    vt = i;
    var d = 0;
    do {
      if (fs && (hs = null), vr = 0, fs = false, 25 <= d) throw Error(n(301));
      if (d += 1, ae = Ut = null, i.updateQueue != null) {
        var m = i.updateQueue;
        m.lastEffect = null, m.events = null, m.stores = null, m.memoCache != null && (m.memoCache.index = 0);
      }
      z.H = Ip, m = s(o, c);
    } while (fs);
    return m;
  }
  function ow() {
    var i = z.H, s = i.useState()[0];
    return s = typeof s.then == "function" ? Sr(s) : s, i = i.useState()[0], (Ut !== null ? Ut.memoizedState : null) !== i && (vt.flags |= 1024), s;
  }
  function xf() {
    var i = fo !== 0;
    return fo = 0, i;
  }
  function wf(i, s, o) {
    s.updateQueue = i.updateQueue, s.flags &= -2053, i.lanes &= ~o;
  }
  function Cf(i) {
    if (co) {
      for (i = i.memoizedState; i !== null; ) {
        var s = i.queue;
        s !== null && (s.pending = null), i = i.next;
      }
      co = false;
    }
    rn = 0, ae = Ut = vt = null, fs = false, vr = fo = 0, hs = null;
  }
  function Ne() {
    var i = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ae === null ? vt.memoizedState = ae = i : ae = ae.next = i, ae;
  }
  function le() {
    if (Ut === null) {
      var i = vt.alternate;
      i = i !== null ? i.memoizedState : null;
    } else i = Ut.next;
    var s = ae === null ? vt.memoizedState : ae.next;
    if (s !== null) ae = s, Ut = i;
    else {
      if (i === null) throw vt.alternate === null ? Error(n(467)) : Error(n(310));
      Ut = i, i = { memoizedState: Ut.memoizedState, baseState: Ut.baseState, baseQueue: Ut.baseQueue, queue: Ut.queue, next: null }, ae === null ? vt.memoizedState = ae = i : ae = ae.next = i;
    }
    return ae;
  }
  function ho() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Sr(i) {
    var s = vr;
    return vr += 1, hs === null && (hs = []), i = rp(hs, i, s), s = vt, (ae === null ? s.memoizedState : ae.next) === null && (s = s.alternate, z.H = s === null || s.memoizedState === null ? Pp : _f), i;
  }
  function mo(i) {
    if (i !== null && typeof i == "object") {
      if (typeof i.then == "function") return Sr(i);
      if (i.$$typeof === L) return ve(i);
    }
    throw Error(n(438, String(i)));
  }
  function Af(i) {
    var s = null, o = vt.updateQueue;
    if (o !== null && (s = o.memoCache), s == null) {
      var c = vt.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (s = { data: c.data.map(function(d) {
        return d.slice();
      }), index: 0 })));
    }
    if (s == null && (s = { data: [], index: 0 }), o === null && (o = ho(), vt.updateQueue = o), o.memoCache = s, o = s.data[s.index], o === void 0) for (o = s.data[s.index] = Array(i), c = 0; c < i; c++) o[c] = pt;
    return s.index++, o;
  }
  function an(i, s) {
    return typeof s == "function" ? s(i) : s;
  }
  function go(i) {
    var s = le();
    return Mf(s, Ut, i);
  }
  function Mf(i, s, o) {
    var c = i.queue;
    if (c === null) throw Error(n(311));
    c.lastRenderedReducer = o;
    var d = i.baseQueue, m = c.pending;
    if (m !== null) {
      if (d !== null) {
        var b = d.next;
        d.next = m.next, m.next = b;
      }
      s.baseQueue = d = m, c.pending = null;
    }
    if (m = i.baseState, d === null) i.memoizedState = m;
    else {
      s = d.next;
      var x = b = null, A = null, B = s, U = false;
      do {
        var X = B.lane & -536870913;
        if (X !== B.lane ? (Mt & X) === X : (rn & X) === X) {
          var R = B.revertLane;
          if (R === 0) A !== null && (A = A.next = { lane: 0, revertLane: 0, gesture: null, action: B.action, hasEagerState: B.hasEagerState, eagerState: B.eagerState, next: null }), X === rs && (U = true);
          else if ((rn & R) === R) {
            B = B.next, R === rs && (U = true);
            continue;
          } else X = { lane: 0, revertLane: B.revertLane, gesture: null, action: B.action, hasEagerState: B.hasEagerState, eagerState: B.eagerState, next: null }, A === null ? (x = A = X, b = m) : A = A.next = X, vt.lanes |= R, Un |= R;
          X = B.action, Cl && o(m, X), m = B.hasEagerState ? B.eagerState : o(m, X);
        } else R = { lane: X, revertLane: B.revertLane, gesture: B.gesture, action: B.action, hasEagerState: B.hasEagerState, eagerState: B.eagerState, next: null }, A === null ? (x = A = R, b = m) : A = A.next = R, vt.lanes |= X, Un |= X;
        B = B.next;
      } while (B !== null && B !== s);
      if (A === null ? b = m : A.next = x, !$e(m, i.memoizedState) && (oe = true, U && (o = as, o !== null))) throw o;
      i.memoizedState = m, i.baseState = b, i.baseQueue = A, c.lastRenderedState = m;
    }
    return d === null && (c.lanes = 0), [i.memoizedState, c.dispatch];
  }
  function Tf(i) {
    var s = le(), o = s.queue;
    if (o === null) throw Error(n(311));
    o.lastRenderedReducer = i;
    var c = o.dispatch, d = o.pending, m = s.memoizedState;
    if (d !== null) {
      o.pending = null;
      var b = d = d.next;
      do
        m = i(m, b.action), b = b.next;
      while (b !== d);
      $e(m, s.memoizedState) || (oe = true), s.memoizedState = m, s.baseQueue === null && (s.baseState = m), o.lastRenderedState = m;
    }
    return [m, c];
  }
  function yp(i, s, o) {
    var c = vt, d = le(), m = kt;
    if (m) {
      if (o === void 0) throw Error(n(407));
      o = o();
    } else o = s();
    var b = !$e((Ut || d).memoizedState, o);
    if (b && (d.memoizedState = o, oe = true), d = d.queue, Df(Sp.bind(null, c, d, i), [i]), d.getSnapshot !== s || b || ae !== null && ae.memoizedState.tag & 1) {
      if (c.flags |= 2048, ds(9, { destroy: void 0 }, vp.bind(null, c, d, o, s), null), Yt === null) throw Error(n(349));
      m || (rn & 127) !== 0 || bp(c, s, o);
    }
    return o;
  }
  function bp(i, s, o) {
    i.flags |= 16384, i = { getSnapshot: s, value: o }, s = vt.updateQueue, s === null ? (s = ho(), vt.updateQueue = s, s.stores = [i]) : (o = s.stores, o === null ? s.stores = [i] : o.push(i));
  }
  function vp(i, s, o, c) {
    s.value = o, s.getSnapshot = c, xp(s) && wp(i);
  }
  function Sp(i, s, o) {
    return o(function() {
      xp(s) && wp(i);
    });
  }
  function xp(i) {
    var s = i.getSnapshot;
    i = i.value;
    try {
      var o = s();
      return !$e(i, o);
    } catch {
      return true;
    }
  }
  function wp(i) {
    var s = ml(i, 2);
    s !== null && Ke(s, i, 2);
  }
  function kf(i) {
    var s = Ne();
    if (typeof i == "function") {
      var o = i;
      if (i = o(), Cl) {
        An(true);
        try {
          o();
        } finally {
          An(false);
        }
      }
    }
    return s.memoizedState = s.baseState = i, s.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: an, lastRenderedState: i }, s;
  }
  function Cp(i, s, o, c) {
    return i.baseState = o, Mf(i, Ut, typeof c == "function" ? c : an);
  }
  function uw(i, s, o, c, d) {
    if (bo(i)) throw Error(n(485));
    if (i = s.action, i !== null) {
      var m = { payload: d, action: i, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(b) {
        m.listeners.push(b);
      } };
      z.T !== null ? o(true) : m.isTransition = false, c(m), o = s.pending, o === null ? (m.next = s.pending = m, Ap(s, m)) : (m.next = o.next, s.pending = o.next = m);
    }
  }
  function Ap(i, s) {
    var o = s.action, c = s.payload, d = i.state;
    if (s.isTransition) {
      var m = z.T, b = {};
      z.T = b;
      try {
        var x = o(d, c), A = z.S;
        A !== null && A(b, x), Mp(i, s, x);
      } catch (B) {
        Of(i, s, B);
      } finally {
        m !== null && b.types !== null && (m.types = b.types), z.T = m;
      }
    } else try {
      m = o(d, c), Mp(i, s, m);
    } catch (B) {
      Of(i, s, B);
    }
  }
  function Mp(i, s, o) {
    o !== null && typeof o == "object" && typeof o.then == "function" ? o.then(function(c) {
      Tp(i, s, c);
    }, function(c) {
      return Of(i, s, c);
    }) : Tp(i, s, o);
  }
  function Tp(i, s, o) {
    s.status = "fulfilled", s.value = o, kp(s), i.state = o, s = i.pending, s !== null && (o = s.next, o === s ? i.pending = null : (o = o.next, s.next = o, Ap(i, o)));
  }
  function Of(i, s, o) {
    var c = i.pending;
    if (i.pending = null, c !== null) {
      c = c.next;
      do
        s.status = "rejected", s.reason = o, kp(s), s = s.next;
      while (s !== c);
    }
    i.action = null;
  }
  function kp(i) {
    i = i.listeners;
    for (var s = 0; s < i.length; s++) (0, i[s])();
  }
  function Op(i, s) {
    return s;
  }
  function Dp(i, s) {
    if (kt) {
      var o = Yt.formState;
      if (o !== null) {
        t: {
          var c = vt;
          if (kt) {
            if (Kt) {
              e: {
                for (var d = Kt, m = gi; d.nodeType !== 8; ) {
                  if (!m) {
                    d = null;
                    break e;
                  }
                  if (d = yi(d.nextSibling), d === null) {
                    d = null;
                    break e;
                  }
                }
                m = d.data, d = m === "F!" || m === "F" ? d : null;
              }
              if (d) {
                Kt = yi(d.nextSibling), c = d.data === "F!";
                break t;
              }
            }
            Dn(c);
          }
          c = false;
        }
        c && (s = o[0]);
      }
    }
    return o = Ne(), o.memoizedState = o.baseState = s, c = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Op, lastRenderedState: s }, o.queue = c, o = Wp.bind(null, vt, c), c.dispatch = o, c = kf(false), m = Nf.bind(null, vt, false, c.queue), c = Ne(), d = { state: s, dispatch: null, action: i, pending: null }, c.queue = d, o = uw.bind(null, vt, d, m, o), d.dispatch = o, c.memoizedState = i, [s, o, false];
  }
  function Ep(i) {
    var s = le();
    return Bp(s, Ut, i);
  }
  function Bp(i, s, o) {
    if (s = Mf(i, s, Op)[0], i = go(an)[0], typeof s == "object" && s !== null && typeof s.then == "function") try {
      var c = Sr(s);
    } catch (b) {
      throw b === os ? lo : b;
    }
    else c = s;
    s = le();
    var d = s.queue, m = d.dispatch;
    return o !== s.memoizedState && (vt.flags |= 2048, ds(9, { destroy: void 0 }, cw.bind(null, d, o), null)), [c, m, i];
  }
  function cw(i, s) {
    i.action = s;
  }
  function Rp(i) {
    var s = le(), o = Ut;
    if (o !== null) return Bp(s, o, i);
    le(), s = s.memoizedState, o = le();
    var c = o.queue.dispatch;
    return o.memoizedState = i, [s, c, false];
  }
  function ds(i, s, o, c) {
    return i = { tag: i, create: o, deps: c, inst: s, next: null }, s = vt.updateQueue, s === null && (s = ho(), vt.updateQueue = s), o = s.lastEffect, o === null ? s.lastEffect = i.next = i : (c = o.next, o.next = i, i.next = c, s.lastEffect = i), i;
  }
  function zp() {
    return le().memoizedState;
  }
  function po(i, s, o, c) {
    var d = Ne();
    vt.flags |= i, d.memoizedState = ds(1 | s, { destroy: void 0 }, o, c === void 0 ? null : c);
  }
  function yo(i, s, o, c) {
    var d = le();
    c = c === void 0 ? null : c;
    var m = d.memoizedState.inst;
    Ut !== null && c !== null && vf(c, Ut.memoizedState.deps) ? d.memoizedState = ds(s, m, o, c) : (vt.flags |= i, d.memoizedState = ds(1 | s, m, o, c));
  }
  function Np(i, s) {
    po(8390656, 8, i, s);
  }
  function Df(i, s) {
    yo(2048, 8, i, s);
  }
  function fw(i) {
    vt.flags |= 4;
    var s = vt.updateQueue;
    if (s === null) s = ho(), vt.updateQueue = s, s.events = [i];
    else {
      var o = s.events;
      o === null ? s.events = [i] : o.push(i);
    }
  }
  function _p(i) {
    var s = le().memoizedState;
    return fw({ ref: s, nextImpl: i }), function() {
      if ((_t & 2) !== 0) throw Error(n(440));
      return s.impl.apply(void 0, arguments);
    };
  }
  function Lp(i, s) {
    return yo(4, 2, i, s);
  }
  function Hp(i, s) {
    return yo(4, 4, i, s);
  }
  function Up(i, s) {
    if (typeof s == "function") {
      i = i();
      var o = s(i);
      return function() {
        typeof o == "function" ? o() : s(null);
      };
    }
    if (s != null) return i = i(), s.current = i, function() {
      s.current = null;
    };
  }
  function Vp(i, s, o) {
    o = o != null ? o.concat([i]) : null, yo(4, 4, Up.bind(null, s, i), o);
  }
  function Ef() {
  }
  function qp(i, s) {
    var o = le();
    s = s === void 0 ? null : s;
    var c = o.memoizedState;
    return s !== null && vf(s, c[1]) ? c[0] : (o.memoizedState = [i, s], i);
  }
  function jp(i, s) {
    var o = le();
    s = s === void 0 ? null : s;
    var c = o.memoizedState;
    if (s !== null && vf(s, c[1])) return c[0];
    if (c = i(), Cl) {
      An(true);
      try {
        i();
      } finally {
        An(false);
      }
    }
    return o.memoizedState = [c, s], c;
  }
  function Bf(i, s, o) {
    return o === void 0 || (rn & 1073741824) !== 0 && (Mt & 261930) === 0 ? i.memoizedState = s : (i.memoizedState = o, i = Y0(), vt.lanes |= i, Un |= i, o);
  }
  function Yp(i, s, o, c) {
    return $e(o, s) ? o : cs.current !== null ? (i = Bf(i, o, c), $e(i, s) || (oe = true), i) : (rn & 42) === 0 || (rn & 1073741824) !== 0 && (Mt & 261930) === 0 ? (oe = true, i.memoizedState = o) : (i = Y0(), vt.lanes |= i, Un |= i, s);
  }
  function Gp(i, s, o, c, d) {
    var m = Z.p;
    Z.p = m !== 0 && 8 > m ? m : 8;
    var b = z.T, x = {};
    z.T = x, Nf(i, false, s, o);
    try {
      var A = d(), B = z.S;
      if (B !== null && B(x, A), A !== null && typeof A == "object" && typeof A.then == "function") {
        var U = rw(A, c);
        xr(i, s, U, si(i));
      } else xr(i, s, c, si(i));
    } catch (X) {
      xr(i, s, { then: function() {
      }, status: "rejected", reason: X }, si());
    } finally {
      Z.p = m, b !== null && x.types !== null && (b.types = x.types), z.T = b;
    }
  }
  function hw() {
  }
  function Rf(i, s, o, c) {
    if (i.tag !== 5) throw Error(n(476));
    var d = Xp(i).queue;
    Gp(i, d, s, it, o === null ? hw : function() {
      return Kp(i), o(c);
    });
  }
  function Xp(i) {
    var s = i.memoizedState;
    if (s !== null) return s;
    s = { memoizedState: it, baseState: it, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: an, lastRenderedState: it }, next: null };
    var o = {};
    return s.next = { memoizedState: o, baseState: o, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: an, lastRenderedState: o }, next: null }, i.memoizedState = s, i = i.alternate, i !== null && (i.memoizedState = s), s;
  }
  function Kp(i) {
    var s = Xp(i);
    s.next === null && (s = i.alternate.memoizedState), xr(i, s.next.queue, {}, si());
  }
  function zf() {
    return ve(Ur);
  }
  function Qp() {
    return le().memoizedState;
  }
  function Zp() {
    return le().memoizedState;
  }
  function dw(i) {
    for (var s = i.return; s !== null; ) {
      switch (s.tag) {
        case 24:
        case 3:
          var o = si();
          i = Rn(o);
          var c = zn(s, i, o);
          c !== null && (Ke(c, s, o), pr(c, s, o)), s = { cache: of() }, i.payload = s;
          return;
      }
      s = s.return;
    }
  }
  function mw(i, s, o) {
    var c = si();
    o = { lane: c, revertLane: 0, gesture: null, action: o, hasEagerState: false, eagerState: null, next: null }, bo(i) ? Jp(s, o) : (o = Fc(i, s, o, c), o !== null && (Ke(o, i, c), Fp(o, s, c)));
  }
  function Wp(i, s, o) {
    var c = si();
    xr(i, s, o, c);
  }
  function xr(i, s, o, c) {
    var d = { lane: c, revertLane: 0, gesture: null, action: o, hasEagerState: false, eagerState: null, next: null };
    if (bo(i)) Jp(s, d);
    else {
      var m = i.alternate;
      if (i.lanes === 0 && (m === null || m.lanes === 0) && (m = s.lastRenderedReducer, m !== null)) try {
        var b = s.lastRenderedState, x = m(b, o);
        if (d.hasEagerState = true, d.eagerState = x, $e(x, b)) return Pa(i, s, d, 0), Yt === null && Fa(), false;
      } catch {
      } finally {
      }
      if (o = Fc(i, s, d, c), o !== null) return Ke(o, i, c), Fp(o, s, c), true;
    }
    return false;
  }
  function Nf(i, s, o, c) {
    if (c = { lane: 2, revertLane: hh(), gesture: null, action: c, hasEagerState: false, eagerState: null, next: null }, bo(i)) {
      if (s) throw Error(n(479));
    } else s = Fc(i, o, c, 2), s !== null && Ke(s, i, 2);
  }
  function bo(i) {
    var s = i.alternate;
    return i === vt || s !== null && s === vt;
  }
  function Jp(i, s) {
    fs = co = true;
    var o = i.pending;
    o === null ? s.next = s : (s.next = o.next, o.next = s), i.pending = s;
  }
  function Fp(i, s, o) {
    if ((o & 4194048) !== 0) {
      var c = s.lanes;
      c &= i.pendingLanes, o |= c, s.lanes = o, eg(i, o);
    }
  }
  var wr = { readContext: ve, use: mo, useCallback: It, useContext: It, useEffect: It, useImperativeHandle: It, useLayoutEffect: It, useInsertionEffect: It, useMemo: It, useReducer: It, useRef: It, useState: It, useDebugValue: It, useDeferredValue: It, useTransition: It, useSyncExternalStore: It, useId: It, useHostTransitionStatus: It, useFormState: It, useActionState: It, useOptimistic: It, useMemoCache: It, useCacheRefresh: It };
  wr.useEffectEvent = It;
  var Pp = { readContext: ve, use: mo, useCallback: function(i, s) {
    return Ne().memoizedState = [i, s === void 0 ? null : s], i;
  }, useContext: ve, useEffect: Np, useImperativeHandle: function(i, s, o) {
    o = o != null ? o.concat([i]) : null, po(4194308, 4, Up.bind(null, s, i), o);
  }, useLayoutEffect: function(i, s) {
    return po(4194308, 4, i, s);
  }, useInsertionEffect: function(i, s) {
    po(4, 2, i, s);
  }, useMemo: function(i, s) {
    var o = Ne();
    s = s === void 0 ? null : s;
    var c = i();
    if (Cl) {
      An(true);
      try {
        i();
      } finally {
        An(false);
      }
    }
    return o.memoizedState = [c, s], c;
  }, useReducer: function(i, s, o) {
    var c = Ne();
    if (o !== void 0) {
      var d = o(s);
      if (Cl) {
        An(true);
        try {
          o(s);
        } finally {
          An(false);
        }
      }
    } else d = s;
    return c.memoizedState = c.baseState = d, i = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: i, lastRenderedState: d }, c.queue = i, i = i.dispatch = mw.bind(null, vt, i), [c.memoizedState, i];
  }, useRef: function(i) {
    var s = Ne();
    return i = { current: i }, s.memoizedState = i;
  }, useState: function(i) {
    i = kf(i);
    var s = i.queue, o = Wp.bind(null, vt, s);
    return s.dispatch = o, [i.memoizedState, o];
  }, useDebugValue: Ef, useDeferredValue: function(i, s) {
    var o = Ne();
    return Bf(o, i, s);
  }, useTransition: function() {
    var i = kf(false);
    return i = Gp.bind(null, vt, i.queue, true, false), Ne().memoizedState = i, [false, i];
  }, useSyncExternalStore: function(i, s, o) {
    var c = vt, d = Ne();
    if (kt) {
      if (o === void 0) throw Error(n(407));
      o = o();
    } else {
      if (o = s(), Yt === null) throw Error(n(349));
      (Mt & 127) !== 0 || bp(c, s, o);
    }
    d.memoizedState = o;
    var m = { value: o, getSnapshot: s };
    return d.queue = m, Np(Sp.bind(null, c, m, i), [i]), c.flags |= 2048, ds(9, { destroy: void 0 }, vp.bind(null, c, m, o, s), null), o;
  }, useId: function() {
    var i = Ne(), s = Yt.identifierPrefix;
    if (kt) {
      var o = _i, c = Ni;
      o = (c & ~(1 << 32 - Ie(c) - 1)).toString(32) + o, s = "_" + s + "R_" + o, o = fo++, 0 < o && (s += "H" + o.toString(32)), s += "_";
    } else o = aw++, s = "_" + s + "r_" + o.toString(32) + "_";
    return i.memoizedState = s;
  }, useHostTransitionStatus: zf, useFormState: Dp, useActionState: Dp, useOptimistic: function(i) {
    var s = Ne();
    s.memoizedState = s.baseState = i;
    var o = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return s.queue = o, s = Nf.bind(null, vt, true, o), o.dispatch = s, [i, s];
  }, useMemoCache: Af, useCacheRefresh: function() {
    return Ne().memoizedState = dw.bind(null, vt);
  }, useEffectEvent: function(i) {
    var s = Ne(), o = { impl: i };
    return s.memoizedState = o, function() {
      if ((_t & 2) !== 0) throw Error(n(440));
      return o.impl.apply(void 0, arguments);
    };
  } }, _f = { readContext: ve, use: mo, useCallback: qp, useContext: ve, useEffect: Df, useImperativeHandle: Vp, useInsertionEffect: Lp, useLayoutEffect: Hp, useMemo: jp, useReducer: go, useRef: zp, useState: function() {
    return go(an);
  }, useDebugValue: Ef, useDeferredValue: function(i, s) {
    var o = le();
    return Yp(o, Ut.memoizedState, i, s);
  }, useTransition: function() {
    var i = go(an)[0], s = le().memoizedState;
    return [typeof i == "boolean" ? i : Sr(i), s];
  }, useSyncExternalStore: yp, useId: Qp, useHostTransitionStatus: zf, useFormState: Ep, useActionState: Ep, useOptimistic: function(i, s) {
    var o = le();
    return Cp(o, Ut, i, s);
  }, useMemoCache: Af, useCacheRefresh: Zp };
  _f.useEffectEvent = _p;
  var Ip = { readContext: ve, use: mo, useCallback: qp, useContext: ve, useEffect: Df, useImperativeHandle: Vp, useInsertionEffect: Lp, useLayoutEffect: Hp, useMemo: jp, useReducer: Tf, useRef: zp, useState: function() {
    return Tf(an);
  }, useDebugValue: Ef, useDeferredValue: function(i, s) {
    var o = le();
    return Ut === null ? Bf(o, i, s) : Yp(o, Ut.memoizedState, i, s);
  }, useTransition: function() {
    var i = Tf(an)[0], s = le().memoizedState;
    return [typeof i == "boolean" ? i : Sr(i), s];
  }, useSyncExternalStore: yp, useId: Qp, useHostTransitionStatus: zf, useFormState: Rp, useActionState: Rp, useOptimistic: function(i, s) {
    var o = le();
    return Ut !== null ? Cp(o, Ut, i, s) : (o.baseState = i, [i, o.queue.dispatch]);
  }, useMemoCache: Af, useCacheRefresh: Zp };
  Ip.useEffectEvent = _p;
  function Lf(i, s, o, c) {
    s = i.memoizedState, o = o(c, s), o = o == null ? s : y({}, s, o), i.memoizedState = o, i.lanes === 0 && (i.updateQueue.baseState = o);
  }
  var Hf = { enqueueSetState: function(i, s, o) {
    i = i._reactInternals;
    var c = si(), d = Rn(c);
    d.payload = s, o != null && (d.callback = o), s = zn(i, d, c), s !== null && (Ke(s, i, c), pr(s, i, c));
  }, enqueueReplaceState: function(i, s, o) {
    i = i._reactInternals;
    var c = si(), d = Rn(c);
    d.tag = 1, d.payload = s, o != null && (d.callback = o), s = zn(i, d, c), s !== null && (Ke(s, i, c), pr(s, i, c));
  }, enqueueForceUpdate: function(i, s) {
    i = i._reactInternals;
    var o = si(), c = Rn(o);
    c.tag = 2, s != null && (c.callback = s), s = zn(i, c, o), s !== null && (Ke(s, i, o), pr(s, i, o));
  } };
  function $p(i, s, o, c, d, m, b) {
    return i = i.stateNode, typeof i.shouldComponentUpdate == "function" ? i.shouldComponentUpdate(c, m, b) : s.prototype && s.prototype.isPureReactComponent ? !or(o, c) || !or(d, m) : true;
  }
  function t0(i, s, o, c) {
    i = s.state, typeof s.componentWillReceiveProps == "function" && s.componentWillReceiveProps(o, c), typeof s.UNSAFE_componentWillReceiveProps == "function" && s.UNSAFE_componentWillReceiveProps(o, c), s.state !== i && Hf.enqueueReplaceState(s, s.state, null);
  }
  function Al(i, s) {
    var o = s;
    if ("ref" in s) {
      o = {};
      for (var c in s) c !== "ref" && (o[c] = s[c]);
    }
    if (i = i.defaultProps) {
      o === s && (o = y({}, o));
      for (var d in i) o[d] === void 0 && (o[d] = i[d]);
    }
    return o;
  }
  function e0(i) {
    Ja(i);
  }
  function i0(i) {
    console.error(i);
  }
  function n0(i) {
    Ja(i);
  }
  function vo(i, s) {
    try {
      var o = i.onUncaughtError;
      o(s.value, { componentStack: s.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function l0(i, s, o) {
    try {
      var c = i.onCaughtError;
      c(o.value, { componentStack: o.stack, errorBoundary: s.tag === 1 ? s.stateNode : null });
    } catch (d) {
      setTimeout(function() {
        throw d;
      });
    }
  }
  function Uf(i, s, o) {
    return o = Rn(o), o.tag = 3, o.payload = { element: null }, o.callback = function() {
      vo(i, s);
    }, o;
  }
  function s0(i) {
    return i = Rn(i), i.tag = 3, i;
  }
  function r0(i, s, o, c) {
    var d = o.type.getDerivedStateFromError;
    if (typeof d == "function") {
      var m = c.value;
      i.payload = function() {
        return d(m);
      }, i.callback = function() {
        l0(s, o, c);
      };
    }
    var b = o.stateNode;
    b !== null && typeof b.componentDidCatch == "function" && (i.callback = function() {
      l0(s, o, c), typeof d != "function" && (Vn === null ? Vn = /* @__PURE__ */ new Set([this]) : Vn.add(this));
      var x = c.stack;
      this.componentDidCatch(c.value, { componentStack: x !== null ? x : "" });
    });
  }
  function gw(i, s, o, c, d) {
    if (o.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (s = o.alternate, s !== null && ss(s, o, d, true), o = ei.current, o !== null) {
        switch (o.tag) {
          case 31:
          case 13:
            return pi === null ? Bo() : o.alternate === null && $t === 0 && ($t = 3), o.flags &= -257, o.flags |= 65536, o.lanes = d, c === so ? o.flags |= 16384 : (s = o.updateQueue, s === null ? o.updateQueue = /* @__PURE__ */ new Set([c]) : s.add(c), uh(i, c, d)), false;
          case 22:
            return o.flags |= 65536, c === so ? o.flags |= 16384 : (s = o.updateQueue, s === null ? (s = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([c]) }, o.updateQueue = s) : (o = s.retryQueue, o === null ? s.retryQueue = /* @__PURE__ */ new Set([c]) : o.add(c)), uh(i, c, d)), false;
        }
        throw Error(n(435, o.tag));
      }
      return uh(i, c, d), Bo(), false;
    }
    if (kt) return s = ei.current, s !== null ? ((s.flags & 65536) === 0 && (s.flags |= 256), s.flags |= 65536, s.lanes = d, c !== nf && (i = Error(n(422), { cause: c }), fr(hi(i, o)))) : (c !== nf && (s = Error(n(423), { cause: c }), fr(hi(s, o))), i = i.current.alternate, i.flags |= 65536, d &= -d, i.lanes |= d, c = hi(c, o), d = Uf(i.stateNode, c, d), mf(i, d), $t !== 4 && ($t = 2)), false;
    var m = Error(n(520), { cause: c });
    if (m = hi(m, o), Er === null ? Er = [m] : Er.push(m), $t !== 4 && ($t = 2), s === null) return true;
    c = hi(c, o), o = s;
    do {
      switch (o.tag) {
        case 3:
          return o.flags |= 65536, i = d & -d, o.lanes |= i, i = Uf(o.stateNode, c, i), mf(o, i), false;
        case 1:
          if (s = o.type, m = o.stateNode, (o.flags & 128) === 0 && (typeof s.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Vn === null || !Vn.has(m)))) return o.flags |= 65536, d &= -d, o.lanes |= d, d = s0(d), r0(d, i, o, c), mf(o, d), false;
      }
      o = o.return;
    } while (o !== null);
    return false;
  }
  var Vf = Error(n(461)), oe = false;
  function Se(i, s, o, c) {
    s.child = i === null ? cp(s, null, o, c) : wl(s, i.child, o, c);
  }
  function a0(i, s, o, c, d) {
    o = o.render;
    var m = s.ref;
    if ("ref" in c) {
      var b = {};
      for (var x in c) x !== "ref" && (b[x] = c[x]);
    } else b = c;
    return bl(s), c = Sf(i, s, o, b, m, d), x = xf(), i !== null && !oe ? (wf(i, s, d), on(i, s, d)) : (kt && x && tf(s), s.flags |= 1, Se(i, s, c, d), s.child);
  }
  function o0(i, s, o, c, d) {
    if (i === null) {
      var m = o.type;
      return typeof m == "function" && !Pc(m) && m.defaultProps === void 0 && o.compare === null ? (s.tag = 15, s.type = m, u0(i, s, m, c, d)) : (i = $a(o.type, null, c, s, s.mode, d), i.ref = s.ref, i.return = s, s.child = i);
    }
    if (m = i.child, !Zf(i, d)) {
      var b = m.memoizedProps;
      if (o = o.compare, o = o !== null ? o : or, o(b, c) && i.ref === s.ref) return on(i, s, d);
    }
    return s.flags |= 1, i = en(m, c), i.ref = s.ref, i.return = s, s.child = i;
  }
  function u0(i, s, o, c, d) {
    if (i !== null) {
      var m = i.memoizedProps;
      if (or(m, c) && i.ref === s.ref) if (oe = false, s.pendingProps = c = m, Zf(i, d)) (i.flags & 131072) !== 0 && (oe = true);
      else return s.lanes = i.lanes, on(i, s, d);
    }
    return qf(i, s, o, c, d);
  }
  function c0(i, s, o, c) {
    var d = c.children, m = i !== null ? i.memoizedState : null;
    if (i === null && s.stateNode === null && (s.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), c.mode === "hidden") {
      if ((s.flags & 128) !== 0) {
        if (m = m !== null ? m.baseLanes | o : o, i !== null) {
          for (c = s.child = i.child, d = 0; c !== null; ) d = d | c.lanes | c.childLanes, c = c.sibling;
          c = d & ~m;
        } else c = 0, s.child = null;
        return f0(i, s, m, o, c);
      }
      if ((o & 536870912) !== 0) s.memoizedState = { baseLanes: 0, cachePool: null }, i !== null && no(s, m !== null ? m.cachePool : null), m !== null ? dp(s, m) : pf(), mp(s);
      else return c = s.lanes = 536870912, f0(i, s, m !== null ? m.baseLanes | o : o, o, c);
    } else m !== null ? (no(s, m.cachePool), dp(s, m), _n(), s.memoizedState = null) : (i !== null && no(s, null), pf(), _n());
    return Se(i, s, d, o), s.child;
  }
  function Cr(i, s) {
    return i !== null && i.tag === 22 || s.stateNode !== null || (s.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), s.sibling;
  }
  function f0(i, s, o, c, d) {
    var m = cf();
    return m = m === null ? null : { parent: re._currentValue, pool: m }, s.memoizedState = { baseLanes: o, cachePool: m }, i !== null && no(s, null), pf(), mp(s), i !== null && ss(i, s, c, true), s.childLanes = d, null;
  }
  function So(i, s) {
    return s = wo({ mode: s.mode, children: s.children }, i.mode), s.ref = i.ref, i.child = s, s.return = i, s;
  }
  function h0(i, s, o) {
    return wl(s, i.child, null, o), i = So(s, s.pendingProps), i.flags |= 2, ii(s), s.memoizedState = null, i;
  }
  function pw(i, s, o) {
    var c = s.pendingProps, d = (s.flags & 128) !== 0;
    if (s.flags &= -129, i === null) {
      if (kt) {
        if (c.mode === "hidden") return i = So(s, c), s.lanes = 536870912, Cr(null, i);
        if (bf(s), (i = Kt) ? (i = Ay(i, gi), i = i !== null && i.data === "&" ? i : null, i !== null && (s.memoizedState = { dehydrated: i, treeContext: kn !== null ? { id: Ni, overflow: _i } : null, retryLane: 536870912, hydrationErrors: null }, o = Jg(i), o.return = s, s.child = o, be = s, Kt = null)) : i = null, i === null) throw Dn(s);
        return s.lanes = 536870912, null;
      }
      return So(s, c);
    }
    var m = i.memoizedState;
    if (m !== null) {
      var b = m.dehydrated;
      if (bf(s), d) if (s.flags & 256) s.flags &= -257, s = h0(i, s, o);
      else if (s.memoizedState !== null) s.child = i.child, s.flags |= 128, s = null;
      else throw Error(n(558));
      else if (oe || ss(i, s, o, false), d = (o & i.childLanes) !== 0, oe || d) {
        if (c = Yt, c !== null && (b = ig(c, o), b !== 0 && b !== m.retryLane)) throw m.retryLane = b, ml(i, b), Ke(c, i, b), Vf;
        Bo(), s = h0(i, s, o);
      } else i = m.treeContext, Kt = yi(b.nextSibling), be = s, kt = true, On = null, gi = false, i !== null && Ig(s, i), s = So(s, c), s.flags |= 4096;
      return s;
    }
    return i = en(i.child, { mode: c.mode, children: c.children }), i.ref = s.ref, s.child = i, i.return = s, i;
  }
  function xo(i, s) {
    var o = s.ref;
    if (o === null) i !== null && i.ref !== null && (s.flags |= 4194816);
    else {
      if (typeof o != "function" && typeof o != "object") throw Error(n(284));
      (i === null || i.ref !== o) && (s.flags |= 4194816);
    }
  }
  function qf(i, s, o, c, d) {
    return bl(s), o = Sf(i, s, o, c, void 0, d), c = xf(), i !== null && !oe ? (wf(i, s, d), on(i, s, d)) : (kt && c && tf(s), s.flags |= 1, Se(i, s, o, d), s.child);
  }
  function d0(i, s, o, c, d, m) {
    return bl(s), s.updateQueue = null, o = pp(s, c, o, d), gp(i), c = xf(), i !== null && !oe ? (wf(i, s, m), on(i, s, m)) : (kt && c && tf(s), s.flags |= 1, Se(i, s, o, m), s.child);
  }
  function m0(i, s, o, c, d) {
    if (bl(s), s.stateNode === null) {
      var m = es, b = o.contextType;
      typeof b == "object" && b !== null && (m = ve(b)), m = new o(c, m), s.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null, m.updater = Hf, s.stateNode = m, m._reactInternals = s, m = s.stateNode, m.props = c, m.state = s.memoizedState, m.refs = {}, hf(s), b = o.contextType, m.context = typeof b == "object" && b !== null ? ve(b) : es, m.state = s.memoizedState, b = o.getDerivedStateFromProps, typeof b == "function" && (Lf(s, o, b, c), m.state = s.memoizedState), typeof o.getDerivedStateFromProps == "function" || typeof m.getSnapshotBeforeUpdate == "function" || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (b = m.state, typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount(), b !== m.state && Hf.enqueueReplaceState(m, m.state, null), br(s, c, m, d), yr(), m.state = s.memoizedState), typeof m.componentDidMount == "function" && (s.flags |= 4194308), c = true;
    } else if (i === null) {
      m = s.stateNode;
      var x = s.memoizedProps, A = Al(o, x);
      m.props = A;
      var B = m.context, U = o.contextType;
      b = es, typeof U == "object" && U !== null && (b = ve(U));
      var X = o.getDerivedStateFromProps;
      U = typeof X == "function" || typeof m.getSnapshotBeforeUpdate == "function", x = s.pendingProps !== x, U || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (x || B !== b) && t0(s, m, c, b), Bn = false;
      var R = s.memoizedState;
      m.state = R, br(s, c, m, d), yr(), B = s.memoizedState, x || R !== B || Bn ? (typeof X == "function" && (Lf(s, o, X, c), B = s.memoizedState), (A = Bn || $p(s, o, A, c, R, B, b)) ? (U || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (s.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (s.flags |= 4194308), s.memoizedProps = c, s.memoizedState = B), m.props = c, m.state = B, m.context = b, c = A) : (typeof m.componentDidMount == "function" && (s.flags |= 4194308), c = false);
    } else {
      m = s.stateNode, df(i, s), b = s.memoizedProps, U = Al(o, b), m.props = U, X = s.pendingProps, R = m.context, B = o.contextType, A = es, typeof B == "object" && B !== null && (A = ve(B)), x = o.getDerivedStateFromProps, (B = typeof x == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (b !== X || R !== A) && t0(s, m, c, A), Bn = false, R = s.memoizedState, m.state = R, br(s, c, m, d), yr();
      var N = s.memoizedState;
      b !== X || R !== N || Bn || i !== null && i.dependencies !== null && eo(i.dependencies) ? (typeof x == "function" && (Lf(s, o, x, c), N = s.memoizedState), (U = Bn || $p(s, o, U, c, R, N, A) || i !== null && i.dependencies !== null && eo(i.dependencies)) ? (B || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(c, N, A), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(c, N, A)), typeof m.componentDidUpdate == "function" && (s.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (s.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || b === i.memoizedProps && R === i.memoizedState || (s.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || b === i.memoizedProps && R === i.memoizedState || (s.flags |= 1024), s.memoizedProps = c, s.memoizedState = N), m.props = c, m.state = N, m.context = A, c = U) : (typeof m.componentDidUpdate != "function" || b === i.memoizedProps && R === i.memoizedState || (s.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || b === i.memoizedProps && R === i.memoizedState || (s.flags |= 1024), c = false);
    }
    return m = c, xo(i, s), c = (s.flags & 128) !== 0, m || c ? (m = s.stateNode, o = c && typeof o.getDerivedStateFromError != "function" ? null : m.render(), s.flags |= 1, i !== null && c ? (s.child = wl(s, i.child, null, d), s.child = wl(s, null, o, d)) : Se(i, s, o, d), s.memoizedState = m.state, i = s.child) : i = on(i, s, d), i;
  }
  function g0(i, s, o, c) {
    return pl(), s.flags |= 256, Se(i, s, o, c), s.child;
  }
  var jf = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Yf(i) {
    return { baseLanes: i, cachePool: lp() };
  }
  function Gf(i, s, o) {
    return i = i !== null ? i.childLanes & ~o : 0, s && (i |= li), i;
  }
  function p0(i, s, o) {
    var c = s.pendingProps, d = false, m = (s.flags & 128) !== 0, b;
    if ((b = m) || (b = i !== null && i.memoizedState === null ? false : (ne.current & 2) !== 0), b && (d = true, s.flags &= -129), b = (s.flags & 32) !== 0, s.flags &= -33, i === null) {
      if (kt) {
        if (d ? Nn(s) : _n(), (i = Kt) ? (i = Ay(i, gi), i = i !== null && i.data !== "&" ? i : null, i !== null && (s.memoizedState = { dehydrated: i, treeContext: kn !== null ? { id: Ni, overflow: _i } : null, retryLane: 536870912, hydrationErrors: null }, o = Jg(i), o.return = s, s.child = o, be = s, Kt = null)) : i = null, i === null) throw Dn(s);
        return Mh(i) ? s.lanes = 32 : s.lanes = 536870912, null;
      }
      var x = c.children;
      return c = c.fallback, d ? (_n(), d = s.mode, x = wo({ mode: "hidden", children: x }, d), c = gl(c, d, o, null), x.return = s, c.return = s, x.sibling = c, s.child = x, c = s.child, c.memoizedState = Yf(o), c.childLanes = Gf(i, b, o), s.memoizedState = jf, Cr(null, c)) : (Nn(s), Xf(s, x));
    }
    var A = i.memoizedState;
    if (A !== null && (x = A.dehydrated, x !== null)) {
      if (m) s.flags & 256 ? (Nn(s), s.flags &= -257, s = Kf(i, s, o)) : s.memoizedState !== null ? (_n(), s.child = i.child, s.flags |= 128, s = null) : (_n(), x = c.fallback, d = s.mode, c = wo({ mode: "visible", children: c.children }, d), x = gl(x, d, o, null), x.flags |= 2, c.return = s, x.return = s, c.sibling = x, s.child = c, wl(s, i.child, null, o), c = s.child, c.memoizedState = Yf(o), c.childLanes = Gf(i, b, o), s.memoizedState = jf, s = Cr(null, c));
      else if (Nn(s), Mh(x)) {
        if (b = x.nextSibling && x.nextSibling.dataset, b) var B = b.dgst;
        b = B, c = Error(n(419)), c.stack = "", c.digest = b, fr({ value: c, source: null, stack: null }), s = Kf(i, s, o);
      } else if (oe || ss(i, s, o, false), b = (o & i.childLanes) !== 0, oe || b) {
        if (b = Yt, b !== null && (c = ig(b, o), c !== 0 && c !== A.retryLane)) throw A.retryLane = c, ml(i, c), Ke(b, i, c), Vf;
        Ah(x) || Bo(), s = Kf(i, s, o);
      } else Ah(x) ? (s.flags |= 192, s.child = i.child, s = null) : (i = A.treeContext, Kt = yi(x.nextSibling), be = s, kt = true, On = null, gi = false, i !== null && Ig(s, i), s = Xf(s, c.children), s.flags |= 4096);
      return s;
    }
    return d ? (_n(), x = c.fallback, d = s.mode, A = i.child, B = A.sibling, c = en(A, { mode: "hidden", children: c.children }), c.subtreeFlags = A.subtreeFlags & 65011712, B !== null ? x = en(B, x) : (x = gl(x, d, o, null), x.flags |= 2), x.return = s, c.return = s, c.sibling = x, s.child = c, Cr(null, c), c = s.child, x = i.child.memoizedState, x === null ? x = Yf(o) : (d = x.cachePool, d !== null ? (A = re._currentValue, d = d.parent !== A ? { parent: A, pool: A } : d) : d = lp(), x = { baseLanes: x.baseLanes | o, cachePool: d }), c.memoizedState = x, c.childLanes = Gf(i, b, o), s.memoizedState = jf, Cr(i.child, c)) : (Nn(s), o = i.child, i = o.sibling, o = en(o, { mode: "visible", children: c.children }), o.return = s, o.sibling = null, i !== null && (b = s.deletions, b === null ? (s.deletions = [i], s.flags |= 16) : b.push(i)), s.child = o, s.memoizedState = null, o);
  }
  function Xf(i, s) {
    return s = wo({ mode: "visible", children: s }, i.mode), s.return = i, i.child = s;
  }
  function wo(i, s) {
    return i = ti(22, i, null, s), i.lanes = 0, i;
  }
  function Kf(i, s, o) {
    return wl(s, i.child, null, o), i = Xf(s, s.pendingProps.children), i.flags |= 2, s.memoizedState = null, i;
  }
  function y0(i, s, o) {
    i.lanes |= s;
    var c = i.alternate;
    c !== null && (c.lanes |= s), rf(i.return, s, o);
  }
  function Qf(i, s, o, c, d, m) {
    var b = i.memoizedState;
    b === null ? i.memoizedState = { isBackwards: s, rendering: null, renderingStartTime: 0, last: c, tail: o, tailMode: d, treeForkCount: m } : (b.isBackwards = s, b.rendering = null, b.renderingStartTime = 0, b.last = c, b.tail = o, b.tailMode = d, b.treeForkCount = m);
  }
  function b0(i, s, o) {
    var c = s.pendingProps, d = c.revealOrder, m = c.tail;
    c = c.children;
    var b = ne.current, x = (b & 2) !== 0;
    if (x ? (b = b & 1 | 2, s.flags |= 128) : b &= 1, W(ne, b), Se(i, s, c, o), c = kt ? cr : 0, !x && i !== null && (i.flags & 128) !== 0) t: for (i = s.child; i !== null; ) {
      if (i.tag === 13) i.memoizedState !== null && y0(i, o, s);
      else if (i.tag === 19) y0(i, o, s);
      else if (i.child !== null) {
        i.child.return = i, i = i.child;
        continue;
      }
      if (i === s) break t;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === s) break t;
        i = i.return;
      }
      i.sibling.return = i.return, i = i.sibling;
    }
    switch (d) {
      case "forwards":
        for (o = s.child, d = null; o !== null; ) i = o.alternate, i !== null && uo(i) === null && (d = o), o = o.sibling;
        o = d, o === null ? (d = s.child, s.child = null) : (d = o.sibling, o.sibling = null), Qf(s, false, d, o, m, c);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (o = null, d = s.child, s.child = null; d !== null; ) {
          if (i = d.alternate, i !== null && uo(i) === null) {
            s.child = d;
            break;
          }
          i = d.sibling, d.sibling = o, o = d, d = i;
        }
        Qf(s, true, o, null, m, c);
        break;
      case "together":
        Qf(s, false, null, null, void 0, c);
        break;
      default:
        s.memoizedState = null;
    }
    return s.child;
  }
  function on(i, s, o) {
    if (i !== null && (s.dependencies = i.dependencies), Un |= s.lanes, (o & s.childLanes) === 0) if (i !== null) {
      if (ss(i, s, o, false), (o & s.childLanes) === 0) return null;
    } else return null;
    if (i !== null && s.child !== i.child) throw Error(n(153));
    if (s.child !== null) {
      for (i = s.child, o = en(i, i.pendingProps), s.child = o, o.return = s; i.sibling !== null; ) i = i.sibling, o = o.sibling = en(i, i.pendingProps), o.return = s;
      o.sibling = null;
    }
    return s.child;
  }
  function Zf(i, s) {
    return (i.lanes & s) !== 0 ? true : (i = i.dependencies, !!(i !== null && eo(i)));
  }
  function yw(i, s, o) {
    switch (s.tag) {
      case 3:
        ze(s, s.stateNode.containerInfo), En(s, re, i.memoizedState.cache), pl();
        break;
      case 27:
      case 5:
        Js(s);
        break;
      case 4:
        ze(s, s.stateNode.containerInfo);
        break;
      case 10:
        En(s, s.type, s.memoizedProps.value);
        break;
      case 31:
        if (s.memoizedState !== null) return s.flags |= 128, bf(s), null;
        break;
      case 13:
        var c = s.memoizedState;
        if (c !== null) return c.dehydrated !== null ? (Nn(s), s.flags |= 128, null) : (o & s.child.childLanes) !== 0 ? p0(i, s, o) : (Nn(s), i = on(i, s, o), i !== null ? i.sibling : null);
        Nn(s);
        break;
      case 19:
        var d = (i.flags & 128) !== 0;
        if (c = (o & s.childLanes) !== 0, c || (ss(i, s, o, false), c = (o & s.childLanes) !== 0), d) {
          if (c) return b0(i, s, o);
          s.flags |= 128;
        }
        if (d = s.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), W(ne, ne.current), c) break;
        return null;
      case 22:
        return s.lanes = 0, c0(i, s, o, s.pendingProps);
      case 24:
        En(s, re, i.memoizedState.cache);
    }
    return on(i, s, o);
  }
  function v0(i, s, o) {
    if (i !== null) if (i.memoizedProps !== s.pendingProps) oe = true;
    else {
      if (!Zf(i, o) && (s.flags & 128) === 0) return oe = false, yw(i, s, o);
      oe = (i.flags & 131072) !== 0;
    }
    else oe = false, kt && (s.flags & 1048576) !== 0 && Pg(s, cr, s.index);
    switch (s.lanes = 0, s.tag) {
      case 16:
        t: {
          var c = s.pendingProps;
          if (i = Sl(s.elementType), s.type = i, typeof i == "function") Pc(i) ? (c = Al(i, c), s.tag = 1, s = m0(null, s, i, c, o)) : (s.tag = 0, s = qf(null, s, i, c, o));
          else {
            if (i != null) {
              var d = i.$$typeof;
              if (d === Q) {
                s.tag = 11, s = a0(null, s, i, c, o);
                break t;
              } else if (d === V) {
                s.tag = 14, s = o0(null, s, i, c, o);
                break t;
              }
            }
            throw s = ht(i) || i, Error(n(306, s, ""));
          }
        }
        return s;
      case 0:
        return qf(i, s, s.type, s.pendingProps, o);
      case 1:
        return c = s.type, d = Al(c, s.pendingProps), m0(i, s, c, d, o);
      case 3:
        t: {
          if (ze(s, s.stateNode.containerInfo), i === null) throw Error(n(387));
          c = s.pendingProps;
          var m = s.memoizedState;
          d = m.element, df(i, s), br(s, c, null, o);
          var b = s.memoizedState;
          if (c = b.cache, En(s, re, c), c !== m.cache && af(s, [re], o, true), yr(), c = b.element, m.isDehydrated) if (m = { element: c, isDehydrated: false, cache: b.cache }, s.updateQueue.baseState = m, s.memoizedState = m, s.flags & 256) {
            s = g0(i, s, c, o);
            break t;
          } else if (c !== d) {
            d = hi(Error(n(424)), s), fr(d), s = g0(i, s, c, o);
            break t;
          } else {
            switch (i = s.stateNode.containerInfo, i.nodeType) {
              case 9:
                i = i.body;
                break;
              default:
                i = i.nodeName === "HTML" ? i.ownerDocument.body : i;
            }
            for (Kt = yi(i.firstChild), be = s, kt = true, On = null, gi = true, o = cp(s, null, c, o), s.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
          }
          else {
            if (pl(), c === d) {
              s = on(i, s, o);
              break t;
            }
            Se(i, s, c, o);
          }
          s = s.child;
        }
        return s;
      case 26:
        return xo(i, s), i === null ? (o = Ey(s.type, null, s.pendingProps, null)) ? s.memoizedState = o : kt || (o = s.type, i = s.pendingProps, c = Uo(bt.current).createElement(o), c[ye] = s, c[Ve] = i, xe(c, o, i), me(c), s.stateNode = c) : s.memoizedState = Ey(s.type, i.memoizedProps, s.pendingProps, i.memoizedState), null;
      case 27:
        return Js(s), i === null && kt && (c = s.stateNode = ky(s.type, s.pendingProps, bt.current), be = s, gi = true, d = Kt, Gn(s.type) ? (Th = d, Kt = yi(c.firstChild)) : Kt = d), Se(i, s, s.pendingProps.children, o), xo(i, s), i === null && (s.flags |= 4194304), s.child;
      case 5:
        return i === null && kt && ((d = c = Kt) && (c = Zw(c, s.type, s.pendingProps, gi), c !== null ? (s.stateNode = c, be = s, Kt = yi(c.firstChild), gi = false, d = true) : d = false), d || Dn(s)), Js(s), d = s.type, m = s.pendingProps, b = i !== null ? i.memoizedProps : null, c = m.children, xh(d, m) ? c = null : b !== null && xh(d, b) && (s.flags |= 32), s.memoizedState !== null && (d = Sf(i, s, ow, null, null, o), Ur._currentValue = d), xo(i, s), Se(i, s, c, o), s.child;
      case 6:
        return i === null && kt && ((i = o = Kt) && (o = Ww(o, s.pendingProps, gi), o !== null ? (s.stateNode = o, be = s, Kt = null, i = true) : i = false), i || Dn(s)), null;
      case 13:
        return p0(i, s, o);
      case 4:
        return ze(s, s.stateNode.containerInfo), c = s.pendingProps, i === null ? s.child = wl(s, null, c, o) : Se(i, s, c, o), s.child;
      case 11:
        return a0(i, s, s.type, s.pendingProps, o);
      case 7:
        return Se(i, s, s.pendingProps, o), s.child;
      case 8:
        return Se(i, s, s.pendingProps.children, o), s.child;
      case 12:
        return Se(i, s, s.pendingProps.children, o), s.child;
      case 10:
        return c = s.pendingProps, En(s, s.type, c.value), Se(i, s, c.children, o), s.child;
      case 9:
        return d = s.type._context, c = s.pendingProps.children, bl(s), d = ve(d), c = c(d), s.flags |= 1, Se(i, s, c, o), s.child;
      case 14:
        return o0(i, s, s.type, s.pendingProps, o);
      case 15:
        return u0(i, s, s.type, s.pendingProps, o);
      case 19:
        return b0(i, s, o);
      case 31:
        return pw(i, s, o);
      case 22:
        return c0(i, s, o, s.pendingProps);
      case 24:
        return bl(s), c = ve(re), i === null ? (d = cf(), d === null && (d = Yt, m = of(), d.pooledCache = m, m.refCount++, m !== null && (d.pooledCacheLanes |= o), d = m), s.memoizedState = { parent: c, cache: d }, hf(s), En(s, re, d)) : ((i.lanes & o) !== 0 && (df(i, s), br(s, null, null, o), yr()), d = i.memoizedState, m = s.memoizedState, d.parent !== c ? (d = { parent: c, cache: c }, s.memoizedState = d, s.lanes === 0 && (s.memoizedState = s.updateQueue.baseState = d), En(s, re, c)) : (c = m.cache, En(s, re, c), c !== d.cache && af(s, [re], o, true))), Se(i, s, s.pendingProps.children, o), s.child;
      case 29:
        throw s.pendingProps;
    }
    throw Error(n(156, s.tag));
  }
  function un(i) {
    i.flags |= 4;
  }
  function Wf(i, s, o, c, d) {
    if ((s = (i.mode & 32) !== 0) && (s = false), s) {
      if (i.flags |= 16777216, (d & 335544128) === d) if (i.stateNode.complete) i.flags |= 8192;
      else if (Q0()) i.flags |= 8192;
      else throw xl = so, ff;
    } else i.flags &= -16777217;
  }
  function S0(i, s) {
    if (s.type !== "stylesheet" || (s.state.loading & 4) !== 0) i.flags &= -16777217;
    else if (i.flags |= 16777216, !_y(s)) if (Q0()) i.flags |= 8192;
    else throw xl = so, ff;
  }
  function Co(i, s) {
    s !== null && (i.flags |= 4), i.flags & 16384 && (s = i.tag !== 22 ? $m() : 536870912, i.lanes |= s, ys |= s);
  }
  function Ar(i, s) {
    if (!kt) switch (i.tailMode) {
      case "hidden":
        s = i.tail;
        for (var o = null; s !== null; ) s.alternate !== null && (o = s), s = s.sibling;
        o === null ? i.tail = null : o.sibling = null;
        break;
      case "collapsed":
        o = i.tail;
        for (var c = null; o !== null; ) o.alternate !== null && (c = o), o = o.sibling;
        c === null ? s || i.tail === null ? i.tail = null : i.tail.sibling = null : c.sibling = null;
    }
  }
  function Qt(i) {
    var s = i.alternate !== null && i.alternate.child === i.child, o = 0, c = 0;
    if (s) for (var d = i.child; d !== null; ) o |= d.lanes | d.childLanes, c |= d.subtreeFlags & 65011712, c |= d.flags & 65011712, d.return = i, d = d.sibling;
    else for (d = i.child; d !== null; ) o |= d.lanes | d.childLanes, c |= d.subtreeFlags, c |= d.flags, d.return = i, d = d.sibling;
    return i.subtreeFlags |= c, i.childLanes = o, s;
  }
  function bw(i, s, o) {
    var c = s.pendingProps;
    switch (ef(s), s.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Qt(s), null;
      case 1:
        return Qt(s), null;
      case 3:
        return o = s.stateNode, c = null, i !== null && (c = i.memoizedState.cache), s.memoizedState.cache !== c && (s.flags |= 2048), sn(re), ie(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (i === null || i.child === null) && (ls(s) ? un(s) : i === null || i.memoizedState.isDehydrated && (s.flags & 256) === 0 || (s.flags |= 1024, lf())), Qt(s), null;
      case 26:
        var d = s.type, m = s.memoizedState;
        return i === null ? (un(s), m !== null ? (Qt(s), S0(s, m)) : (Qt(s), Wf(s, d, null, c, o))) : m ? m !== i.memoizedState ? (un(s), Qt(s), S0(s, m)) : (Qt(s), s.flags &= -16777217) : (i = i.memoizedProps, i !== c && un(s), Qt(s), Wf(s, d, i, c, o)), null;
      case 27:
        if (za(s), o = bt.current, d = s.type, i !== null && s.stateNode != null) i.memoizedProps !== c && un(s);
        else {
          if (!c) {
            if (s.stateNode === null) throw Error(n(166));
            return Qt(s), null;
          }
          i = $.current, ls(s) ? $g(s) : (i = ky(d, c, o), s.stateNode = i, un(s));
        }
        return Qt(s), null;
      case 5:
        if (za(s), d = s.type, i !== null && s.stateNode != null) i.memoizedProps !== c && un(s);
        else {
          if (!c) {
            if (s.stateNode === null) throw Error(n(166));
            return Qt(s), null;
          }
          if (m = $.current, ls(s)) $g(s);
          else {
            var b = Uo(bt.current);
            switch (m) {
              case 1:
                m = b.createElementNS("http://www.w3.org/2000/svg", d);
                break;
              case 2:
                m = b.createElementNS("http://www.w3.org/1998/Math/MathML", d);
                break;
              default:
                switch (d) {
                  case "svg":
                    m = b.createElementNS("http://www.w3.org/2000/svg", d);
                    break;
                  case "math":
                    m = b.createElementNS("http://www.w3.org/1998/Math/MathML", d);
                    break;
                  case "script":
                    m = b.createElement("div"), m.innerHTML = "<script><\/script>", m = m.removeChild(m.firstChild);
                    break;
                  case "select":
                    m = typeof c.is == "string" ? b.createElement("select", { is: c.is }) : b.createElement("select"), c.multiple ? m.multiple = true : c.size && (m.size = c.size);
                    break;
                  default:
                    m = typeof c.is == "string" ? b.createElement(d, { is: c.is }) : b.createElement(d);
                }
            }
            m[ye] = s, m[Ve] = c;
            t: for (b = s.child; b !== null; ) {
              if (b.tag === 5 || b.tag === 6) m.appendChild(b.stateNode);
              else if (b.tag !== 4 && b.tag !== 27 && b.child !== null) {
                b.child.return = b, b = b.child;
                continue;
              }
              if (b === s) break t;
              for (; b.sibling === null; ) {
                if (b.return === null || b.return === s) break t;
                b = b.return;
              }
              b.sibling.return = b.return, b = b.sibling;
            }
            s.stateNode = m;
            t: switch (xe(m, d, c), d) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                c = !!c.autoFocus;
                break t;
              case "img":
                c = true;
                break t;
              default:
                c = false;
            }
            c && un(s);
          }
        }
        return Qt(s), Wf(s, s.type, i === null ? null : i.memoizedProps, s.pendingProps, o), null;
      case 6:
        if (i && s.stateNode != null) i.memoizedProps !== c && un(s);
        else {
          if (typeof c != "string" && s.stateNode === null) throw Error(n(166));
          if (i = bt.current, ls(s)) {
            if (i = s.stateNode, o = s.memoizedProps, c = null, d = be, d !== null) switch (d.tag) {
              case 27:
              case 5:
                c = d.memoizedProps;
            }
            i[ye] = s, i = !!(i.nodeValue === o || c !== null && c.suppressHydrationWarning === true || py(i.nodeValue, o)), i || Dn(s, true);
          } else i = Uo(i).createTextNode(c), i[ye] = s, s.stateNode = i;
        }
        return Qt(s), null;
      case 31:
        if (o = s.memoizedState, i === null || i.memoizedState !== null) {
          if (c = ls(s), o !== null) {
            if (i === null) {
              if (!c) throw Error(n(318));
              if (i = s.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(n(557));
              i[ye] = s;
            } else pl(), (s.flags & 128) === 0 && (s.memoizedState = null), s.flags |= 4;
            Qt(s), i = false;
          } else o = lf(), i !== null && i.memoizedState !== null && (i.memoizedState.hydrationErrors = o), i = true;
          if (!i) return s.flags & 256 ? (ii(s), s) : (ii(s), null);
          if ((s.flags & 128) !== 0) throw Error(n(558));
        }
        return Qt(s), null;
      case 13:
        if (c = s.memoizedState, i === null || i.memoizedState !== null && i.memoizedState.dehydrated !== null) {
          if (d = ls(s), c !== null && c.dehydrated !== null) {
            if (i === null) {
              if (!d) throw Error(n(318));
              if (d = s.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(n(317));
              d[ye] = s;
            } else pl(), (s.flags & 128) === 0 && (s.memoizedState = null), s.flags |= 4;
            Qt(s), d = false;
          } else d = lf(), i !== null && i.memoizedState !== null && (i.memoizedState.hydrationErrors = d), d = true;
          if (!d) return s.flags & 256 ? (ii(s), s) : (ii(s), null);
        }
        return ii(s), (s.flags & 128) !== 0 ? (s.lanes = o, s) : (o = c !== null, i = i !== null && i.memoizedState !== null, o && (c = s.child, d = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (d = c.alternate.memoizedState.cachePool.pool), m = null, c.memoizedState !== null && c.memoizedState.cachePool !== null && (m = c.memoizedState.cachePool.pool), m !== d && (c.flags |= 2048)), o !== i && o && (s.child.flags |= 8192), Co(s, s.updateQueue), Qt(s), null);
      case 4:
        return ie(), i === null && ph(s.stateNode.containerInfo), Qt(s), null;
      case 10:
        return sn(s.type), Qt(s), null;
      case 19:
        if (H(ne), c = s.memoizedState, c === null) return Qt(s), null;
        if (d = (s.flags & 128) !== 0, m = c.rendering, m === null) if (d) Ar(c, false);
        else {
          if ($t !== 0 || i !== null && (i.flags & 128) !== 0) for (i = s.child; i !== null; ) {
            if (m = uo(i), m !== null) {
              for (s.flags |= 128, Ar(c, false), i = m.updateQueue, s.updateQueue = i, Co(s, i), s.subtreeFlags = 0, i = o, o = s.child; o !== null; ) Wg(o, i), o = o.sibling;
              return W(ne, ne.current & 1 | 2), kt && nn(s, c.treeForkCount), s.child;
            }
            i = i.sibling;
          }
          c.tail !== null && Fe() > Oo && (s.flags |= 128, d = true, Ar(c, false), s.lanes = 4194304);
        }
        else {
          if (!d) if (i = uo(m), i !== null) {
            if (s.flags |= 128, d = true, i = i.updateQueue, s.updateQueue = i, Co(s, i), Ar(c, true), c.tail === null && c.tailMode === "hidden" && !m.alternate && !kt) return Qt(s), null;
          } else 2 * Fe() - c.renderingStartTime > Oo && o !== 536870912 && (s.flags |= 128, d = true, Ar(c, false), s.lanes = 4194304);
          c.isBackwards ? (m.sibling = s.child, s.child = m) : (i = c.last, i !== null ? i.sibling = m : s.child = m, c.last = m);
        }
        return c.tail !== null ? (i = c.tail, c.rendering = i, c.tail = i.sibling, c.renderingStartTime = Fe(), i.sibling = null, o = ne.current, W(ne, d ? o & 1 | 2 : o & 1), kt && nn(s, c.treeForkCount), i) : (Qt(s), null);
      case 22:
      case 23:
        return ii(s), yf(), c = s.memoizedState !== null, i !== null ? i.memoizedState !== null !== c && (s.flags |= 8192) : c && (s.flags |= 8192), c ? (o & 536870912) !== 0 && (s.flags & 128) === 0 && (Qt(s), s.subtreeFlags & 6 && (s.flags |= 8192)) : Qt(s), o = s.updateQueue, o !== null && Co(s, o.retryQueue), o = null, i !== null && i.memoizedState !== null && i.memoizedState.cachePool !== null && (o = i.memoizedState.cachePool.pool), c = null, s.memoizedState !== null && s.memoizedState.cachePool !== null && (c = s.memoizedState.cachePool.pool), c !== o && (s.flags |= 2048), i !== null && H(vl), null;
      case 24:
        return o = null, i !== null && (o = i.memoizedState.cache), s.memoizedState.cache !== o && (s.flags |= 2048), sn(re), Qt(s), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(n(156, s.tag));
  }
  function vw(i, s) {
    switch (ef(s), s.tag) {
      case 1:
        return i = s.flags, i & 65536 ? (s.flags = i & -65537 | 128, s) : null;
      case 3:
        return sn(re), ie(), i = s.flags, (i & 65536) !== 0 && (i & 128) === 0 ? (s.flags = i & -65537 | 128, s) : null;
      case 26:
      case 27:
      case 5:
        return za(s), null;
      case 31:
        if (s.memoizedState !== null) {
          if (ii(s), s.alternate === null) throw Error(n(340));
          pl();
        }
        return i = s.flags, i & 65536 ? (s.flags = i & -65537 | 128, s) : null;
      case 13:
        if (ii(s), i = s.memoizedState, i !== null && i.dehydrated !== null) {
          if (s.alternate === null) throw Error(n(340));
          pl();
        }
        return i = s.flags, i & 65536 ? (s.flags = i & -65537 | 128, s) : null;
      case 19:
        return H(ne), null;
      case 4:
        return ie(), null;
      case 10:
        return sn(s.type), null;
      case 22:
      case 23:
        return ii(s), yf(), i !== null && H(vl), i = s.flags, i & 65536 ? (s.flags = i & -65537 | 128, s) : null;
      case 24:
        return sn(re), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function x0(i, s) {
    switch (ef(s), s.tag) {
      case 3:
        sn(re), ie();
        break;
      case 26:
      case 27:
      case 5:
        za(s);
        break;
      case 4:
        ie();
        break;
      case 31:
        s.memoizedState !== null && ii(s);
        break;
      case 13:
        ii(s);
        break;
      case 19:
        H(ne);
        break;
      case 10:
        sn(s.type);
        break;
      case 22:
      case 23:
        ii(s), yf(), i !== null && H(vl);
        break;
      case 24:
        sn(re);
    }
  }
  function Mr(i, s) {
    try {
      var o = s.updateQueue, c = o !== null ? o.lastEffect : null;
      if (c !== null) {
        var d = c.next;
        o = d;
        do {
          if ((o.tag & i) === i) {
            c = void 0;
            var m = o.create, b = o.inst;
            c = m(), b.destroy = c;
          }
          o = o.next;
        } while (o !== d);
      }
    } catch (x) {
      Ht(s, s.return, x);
    }
  }
  function Ln(i, s, o) {
    try {
      var c = s.updateQueue, d = c !== null ? c.lastEffect : null;
      if (d !== null) {
        var m = d.next;
        c = m;
        do {
          if ((c.tag & i) === i) {
            var b = c.inst, x = b.destroy;
            if (x !== void 0) {
              b.destroy = void 0, d = s;
              var A = o, B = x;
              try {
                B();
              } catch (U) {
                Ht(d, A, U);
              }
            }
          }
          c = c.next;
        } while (c !== m);
      }
    } catch (U) {
      Ht(s, s.return, U);
    }
  }
  function w0(i) {
    var s = i.updateQueue;
    if (s !== null) {
      var o = i.stateNode;
      try {
        hp(s, o);
      } catch (c) {
        Ht(i, i.return, c);
      }
    }
  }
  function C0(i, s, o) {
    o.props = Al(i.type, i.memoizedProps), o.state = i.memoizedState;
    try {
      o.componentWillUnmount();
    } catch (c) {
      Ht(i, s, c);
    }
  }
  function Tr(i, s) {
    try {
      var o = i.ref;
      if (o !== null) {
        switch (i.tag) {
          case 26:
          case 27:
          case 5:
            var c = i.stateNode;
            break;
          case 30:
            c = i.stateNode;
            break;
          default:
            c = i.stateNode;
        }
        typeof o == "function" ? i.refCleanup = o(c) : o.current = c;
      }
    } catch (d) {
      Ht(i, s, d);
    }
  }
  function Li(i, s) {
    var o = i.ref, c = i.refCleanup;
    if (o !== null) if (typeof c == "function") try {
      c();
    } catch (d) {
      Ht(i, s, d);
    } finally {
      i.refCleanup = null, i = i.alternate, i != null && (i.refCleanup = null);
    }
    else if (typeof o == "function") try {
      o(null);
    } catch (d) {
      Ht(i, s, d);
    }
    else o.current = null;
  }
  function A0(i) {
    var s = i.type, o = i.memoizedProps, c = i.stateNode;
    try {
      t: switch (s) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          o.autoFocus && c.focus();
          break t;
        case "img":
          o.src ? c.src = o.src : o.srcSet && (c.srcset = o.srcSet);
      }
    } catch (d) {
      Ht(i, i.return, d);
    }
  }
  function Jf(i, s, o) {
    try {
      var c = i.stateNode;
      jw(c, i.type, o, s), c[Ve] = s;
    } catch (d) {
      Ht(i, i.return, d);
    }
  }
  function M0(i) {
    return i.tag === 5 || i.tag === 3 || i.tag === 26 || i.tag === 27 && Gn(i.type) || i.tag === 4;
  }
  function Ff(i) {
    t: for (; ; ) {
      for (; i.sibling === null; ) {
        if (i.return === null || M0(i.return)) return null;
        i = i.return;
      }
      for (i.sibling.return = i.return, i = i.sibling; i.tag !== 5 && i.tag !== 6 && i.tag !== 18; ) {
        if (i.tag === 27 && Gn(i.type) || i.flags & 2 || i.child === null || i.tag === 4) continue t;
        i.child.return = i, i = i.child;
      }
      if (!(i.flags & 2)) return i.stateNode;
    }
  }
  function Pf(i, s, o) {
    var c = i.tag;
    if (c === 5 || c === 6) i = i.stateNode, s ? (o.nodeType === 9 ? o.body : o.nodeName === "HTML" ? o.ownerDocument.body : o).insertBefore(i, s) : (s = o.nodeType === 9 ? o.body : o.nodeName === "HTML" ? o.ownerDocument.body : o, s.appendChild(i), o = o._reactRootContainer, o != null || s.onclick !== null || (s.onclick = $i));
    else if (c !== 4 && (c === 27 && Gn(i.type) && (o = i.stateNode, s = null), i = i.child, i !== null)) for (Pf(i, s, o), i = i.sibling; i !== null; ) Pf(i, s, o), i = i.sibling;
  }
  function Ao(i, s, o) {
    var c = i.tag;
    if (c === 5 || c === 6) i = i.stateNode, s ? o.insertBefore(i, s) : o.appendChild(i);
    else if (c !== 4 && (c === 27 && Gn(i.type) && (o = i.stateNode), i = i.child, i !== null)) for (Ao(i, s, o), i = i.sibling; i !== null; ) Ao(i, s, o), i = i.sibling;
  }
  function T0(i) {
    var s = i.stateNode, o = i.memoizedProps;
    try {
      for (var c = i.type, d = s.attributes; d.length; ) s.removeAttributeNode(d[0]);
      xe(s, c, o), s[ye] = i, s[Ve] = o;
    } catch (m) {
      Ht(i, i.return, m);
    }
  }
  var cn = false, ue = false, If = false, k0 = typeof WeakSet == "function" ? WeakSet : Set, ge = null;
  function Sw(i, s) {
    if (i = i.containerInfo, vh = Ko, i = Vg(i), Xc(i)) {
      if ("selectionStart" in i) var o = { start: i.selectionStart, end: i.selectionEnd };
      else t: {
        o = (o = i.ownerDocument) && o.defaultView || window;
        var c = o.getSelection && o.getSelection();
        if (c && c.rangeCount !== 0) {
          o = c.anchorNode;
          var d = c.anchorOffset, m = c.focusNode;
          c = c.focusOffset;
          try {
            o.nodeType, m.nodeType;
          } catch {
            o = null;
            break t;
          }
          var b = 0, x = -1, A = -1, B = 0, U = 0, X = i, R = null;
          e: for (; ; ) {
            for (var N; X !== o || d !== 0 && X.nodeType !== 3 || (x = b + d), X !== m || c !== 0 && X.nodeType !== 3 || (A = b + c), X.nodeType === 3 && (b += X.nodeValue.length), (N = X.firstChild) !== null; ) R = X, X = N;
            for (; ; ) {
              if (X === i) break e;
              if (R === o && ++B === d && (x = b), R === m && ++U === c && (A = b), (N = X.nextSibling) !== null) break;
              X = R, R = X.parentNode;
            }
            X = N;
          }
          o = x === -1 || A === -1 ? null : { start: x, end: A };
        } else o = null;
      }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (Sh = { focusedElem: i, selectionRange: o }, Ko = false, ge = s; ge !== null; ) if (s = ge, i = s.child, (s.subtreeFlags & 1028) !== 0 && i !== null) i.return = s, ge = i;
    else for (; ge !== null; ) {
      switch (s = ge, m = s.alternate, i = s.flags, s.tag) {
        case 0:
          if ((i & 4) !== 0 && (i = s.updateQueue, i = i !== null ? i.events : null, i !== null)) for (o = 0; o < i.length; o++) d = i[o], d.ref.impl = d.nextImpl;
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((i & 1024) !== 0 && m !== null) {
            i = void 0, o = s, d = m.memoizedProps, m = m.memoizedState, c = o.stateNode;
            try {
              var nt = Al(o.type, d);
              i = c.getSnapshotBeforeUpdate(nt, m), c.__reactInternalSnapshotBeforeUpdate = i;
            } catch (ct) {
              Ht(o, o.return, ct);
            }
          }
          break;
        case 3:
          if ((i & 1024) !== 0) {
            if (i = s.stateNode.containerInfo, o = i.nodeType, o === 9) Ch(i);
            else if (o === 1) switch (i.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                Ch(i);
                break;
              default:
                i.textContent = "";
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        default:
          if ((i & 1024) !== 0) throw Error(n(163));
      }
      if (i = s.sibling, i !== null) {
        i.return = s.return, ge = i;
        break;
      }
      ge = s.return;
    }
  }
  function O0(i, s, o) {
    var c = o.flags;
    switch (o.tag) {
      case 0:
      case 11:
      case 15:
        hn(i, o), c & 4 && Mr(5, o);
        break;
      case 1:
        if (hn(i, o), c & 4) if (i = o.stateNode, s === null) try {
          i.componentDidMount();
        } catch (b) {
          Ht(o, o.return, b);
        }
        else {
          var d = Al(o.type, s.memoizedProps);
          s = s.memoizedState;
          try {
            i.componentDidUpdate(d, s, i.__reactInternalSnapshotBeforeUpdate);
          } catch (b) {
            Ht(o, o.return, b);
          }
        }
        c & 64 && w0(o), c & 512 && Tr(o, o.return);
        break;
      case 3:
        if (hn(i, o), c & 64 && (i = o.updateQueue, i !== null)) {
          if (s = null, o.child !== null) switch (o.child.tag) {
            case 27:
            case 5:
              s = o.child.stateNode;
              break;
            case 1:
              s = o.child.stateNode;
          }
          try {
            hp(i, s);
          } catch (b) {
            Ht(o, o.return, b);
          }
        }
        break;
      case 27:
        s === null && c & 4 && T0(o);
      case 26:
      case 5:
        hn(i, o), s === null && c & 4 && A0(o), c & 512 && Tr(o, o.return);
        break;
      case 12:
        hn(i, o);
        break;
      case 31:
        hn(i, o), c & 4 && B0(i, o);
        break;
      case 13:
        hn(i, o), c & 4 && R0(i, o), c & 64 && (i = o.memoizedState, i !== null && (i = i.dehydrated, i !== null && (o = Dw.bind(null, o), Jw(i, o))));
        break;
      case 22:
        if (c = o.memoizedState !== null || cn, !c) {
          s = s !== null && s.memoizedState !== null || ue, d = cn;
          var m = ue;
          cn = c, (ue = s) && !m ? dn(i, o, (o.subtreeFlags & 8772) !== 0) : hn(i, o), cn = d, ue = m;
        }
        break;
      case 30:
        break;
      default:
        hn(i, o);
    }
  }
  function D0(i) {
    var s = i.alternate;
    s !== null && (i.alternate = null, D0(s)), i.child = null, i.deletions = null, i.sibling = null, i.tag === 5 && (s = i.stateNode, s !== null && kc(s)), i.stateNode = null, i.return = null, i.dependencies = null, i.memoizedProps = null, i.memoizedState = null, i.pendingProps = null, i.stateNode = null, i.updateQueue = null;
  }
  var Jt = null, je = false;
  function fn(i, s, o) {
    for (o = o.child; o !== null; ) E0(i, s, o), o = o.sibling;
  }
  function E0(i, s, o) {
    if (Pe && typeof Pe.onCommitFiberUnmount == "function") try {
      Pe.onCommitFiberUnmount(Fs, o);
    } catch {
    }
    switch (o.tag) {
      case 26:
        ue || Li(o, s), fn(i, s, o), o.memoizedState ? o.memoizedState.count-- : o.stateNode && (o = o.stateNode, o.parentNode.removeChild(o));
        break;
      case 27:
        ue || Li(o, s);
        var c = Jt, d = je;
        Gn(o.type) && (Jt = o.stateNode, je = false), fn(i, s, o), _r(o.stateNode), Jt = c, je = d;
        break;
      case 5:
        ue || Li(o, s);
      case 6:
        if (c = Jt, d = je, Jt = null, fn(i, s, o), Jt = c, je = d, Jt !== null) if (je) try {
          (Jt.nodeType === 9 ? Jt.body : Jt.nodeName === "HTML" ? Jt.ownerDocument.body : Jt).removeChild(o.stateNode);
        } catch (m) {
          Ht(o, s, m);
        }
        else try {
          Jt.removeChild(o.stateNode);
        } catch (m) {
          Ht(o, s, m);
        }
        break;
      case 18:
        Jt !== null && (je ? (i = Jt, wy(i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i, o.stateNode), Ms(i)) : wy(Jt, o.stateNode));
        break;
      case 4:
        c = Jt, d = je, Jt = o.stateNode.containerInfo, je = true, fn(i, s, o), Jt = c, je = d;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ln(2, o, s), ue || Ln(4, o, s), fn(i, s, o);
        break;
      case 1:
        ue || (Li(o, s), c = o.stateNode, typeof c.componentWillUnmount == "function" && C0(o, s, c)), fn(i, s, o);
        break;
      case 21:
        fn(i, s, o);
        break;
      case 22:
        ue = (c = ue) || o.memoizedState !== null, fn(i, s, o), ue = c;
        break;
      default:
        fn(i, s, o);
    }
  }
  function B0(i, s) {
    if (s.memoizedState === null && (i = s.alternate, i !== null && (i = i.memoizedState, i !== null))) {
      i = i.dehydrated;
      try {
        Ms(i);
      } catch (o) {
        Ht(s, s.return, o);
      }
    }
  }
  function R0(i, s) {
    if (s.memoizedState === null && (i = s.alternate, i !== null && (i = i.memoizedState, i !== null && (i = i.dehydrated, i !== null)))) try {
      Ms(i);
    } catch (o) {
      Ht(s, s.return, o);
    }
  }
  function xw(i) {
    switch (i.tag) {
      case 31:
      case 13:
      case 19:
        var s = i.stateNode;
        return s === null && (s = i.stateNode = new k0()), s;
      case 22:
        return i = i.stateNode, s = i._retryCache, s === null && (s = i._retryCache = new k0()), s;
      default:
        throw Error(n(435, i.tag));
    }
  }
  function Mo(i, s) {
    var o = xw(i);
    s.forEach(function(c) {
      if (!o.has(c)) {
        o.add(c);
        var d = Ew.bind(null, i, c);
        c.then(d, d);
      }
    });
  }
  function Ye(i, s) {
    var o = s.deletions;
    if (o !== null) for (var c = 0; c < o.length; c++) {
      var d = o[c], m = i, b = s, x = b;
      t: for (; x !== null; ) {
        switch (x.tag) {
          case 27:
            if (Gn(x.type)) {
              Jt = x.stateNode, je = false;
              break t;
            }
            break;
          case 5:
            Jt = x.stateNode, je = false;
            break t;
          case 3:
          case 4:
            Jt = x.stateNode.containerInfo, je = true;
            break t;
        }
        x = x.return;
      }
      if (Jt === null) throw Error(n(160));
      E0(m, b, d), Jt = null, je = false, m = d.alternate, m !== null && (m.return = null), d.return = null;
    }
    if (s.subtreeFlags & 13886) for (s = s.child; s !== null; ) z0(s, i), s = s.sibling;
  }
  var Oi = null;
  function z0(i, s) {
    var o = i.alternate, c = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ye(s, i), Ge(i), c & 4 && (Ln(3, i, i.return), Mr(3, i), Ln(5, i, i.return));
        break;
      case 1:
        Ye(s, i), Ge(i), c & 512 && (ue || o === null || Li(o, o.return)), c & 64 && cn && (i = i.updateQueue, i !== null && (c = i.callbacks, c !== null && (o = i.shared.hiddenCallbacks, i.shared.hiddenCallbacks = o === null ? c : o.concat(c))));
        break;
      case 26:
        var d = Oi;
        if (Ye(s, i), Ge(i), c & 512 && (ue || o === null || Li(o, o.return)), c & 4) {
          var m = o !== null ? o.memoizedState : null;
          if (c = i.memoizedState, o === null) if (c === null) if (i.stateNode === null) {
            t: {
              c = i.type, o = i.memoizedProps, d = d.ownerDocument || d;
              e: switch (c) {
                case "title":
                  m = d.getElementsByTagName("title")[0], (!m || m[$s] || m[ye] || m.namespaceURI === "http://www.w3.org/2000/svg" || m.hasAttribute("itemprop")) && (m = d.createElement(c), d.head.insertBefore(m, d.querySelector("head > title"))), xe(m, c, o), m[ye] = i, me(m), c = m;
                  break t;
                case "link":
                  var b = zy("link", "href", d).get(c + (o.href || ""));
                  if (b) {
                    for (var x = 0; x < b.length; x++) if (m = b[x], m.getAttribute("href") === (o.href == null || o.href === "" ? null : o.href) && m.getAttribute("rel") === (o.rel == null ? null : o.rel) && m.getAttribute("title") === (o.title == null ? null : o.title) && m.getAttribute("crossorigin") === (o.crossOrigin == null ? null : o.crossOrigin)) {
                      b.splice(x, 1);
                      break e;
                    }
                  }
                  m = d.createElement(c), xe(m, c, o), d.head.appendChild(m);
                  break;
                case "meta":
                  if (b = zy("meta", "content", d).get(c + (o.content || ""))) {
                    for (x = 0; x < b.length; x++) if (m = b[x], m.getAttribute("content") === (o.content == null ? null : "" + o.content) && m.getAttribute("name") === (o.name == null ? null : o.name) && m.getAttribute("property") === (o.property == null ? null : o.property) && m.getAttribute("http-equiv") === (o.httpEquiv == null ? null : o.httpEquiv) && m.getAttribute("charset") === (o.charSet == null ? null : o.charSet)) {
                      b.splice(x, 1);
                      break e;
                    }
                  }
                  m = d.createElement(c), xe(m, c, o), d.head.appendChild(m);
                  break;
                default:
                  throw Error(n(468, c));
              }
              m[ye] = i, me(m), c = m;
            }
            i.stateNode = c;
          } else Ny(d, i.type, i.stateNode);
          else i.stateNode = Ry(d, c, i.memoizedProps);
          else m !== c ? (m === null ? o.stateNode !== null && (o = o.stateNode, o.parentNode.removeChild(o)) : m.count--, c === null ? Ny(d, i.type, i.stateNode) : Ry(d, c, i.memoizedProps)) : c === null && i.stateNode !== null && Jf(i, i.memoizedProps, o.memoizedProps);
        }
        break;
      case 27:
        Ye(s, i), Ge(i), c & 512 && (ue || o === null || Li(o, o.return)), o !== null && c & 4 && Jf(i, i.memoizedProps, o.memoizedProps);
        break;
      case 5:
        if (Ye(s, i), Ge(i), c & 512 && (ue || o === null || Li(o, o.return)), i.flags & 32) {
          d = i.stateNode;
          try {
            Wl(d, "");
          } catch (nt) {
            Ht(i, i.return, nt);
          }
        }
        c & 4 && i.stateNode != null && (d = i.memoizedProps, Jf(i, d, o !== null ? o.memoizedProps : d)), c & 1024 && (If = true);
        break;
      case 6:
        if (Ye(s, i), Ge(i), c & 4) {
          if (i.stateNode === null) throw Error(n(162));
          c = i.memoizedProps, o = i.stateNode;
          try {
            o.nodeValue = c;
          } catch (nt) {
            Ht(i, i.return, nt);
          }
        }
        break;
      case 3:
        if (jo = null, d = Oi, Oi = Vo(s.containerInfo), Ye(s, i), Oi = d, Ge(i), c & 4 && o !== null && o.memoizedState.isDehydrated) try {
          Ms(s.containerInfo);
        } catch (nt) {
          Ht(i, i.return, nt);
        }
        If && (If = false, N0(i));
        break;
      case 4:
        c = Oi, Oi = Vo(i.stateNode.containerInfo), Ye(s, i), Ge(i), Oi = c;
        break;
      case 12:
        Ye(s, i), Ge(i);
        break;
      case 31:
        Ye(s, i), Ge(i), c & 4 && (c = i.updateQueue, c !== null && (i.updateQueue = null, Mo(i, c)));
        break;
      case 13:
        Ye(s, i), Ge(i), i.child.flags & 8192 && i.memoizedState !== null != (o !== null && o.memoizedState !== null) && (ko = Fe()), c & 4 && (c = i.updateQueue, c !== null && (i.updateQueue = null, Mo(i, c)));
        break;
      case 22:
        d = i.memoizedState !== null;
        var A = o !== null && o.memoizedState !== null, B = cn, U = ue;
        if (cn = B || d, ue = U || A, Ye(s, i), ue = U, cn = B, Ge(i), c & 8192) t: for (s = i.stateNode, s._visibility = d ? s._visibility & -2 : s._visibility | 1, d && (o === null || A || cn || ue || Ml(i)), o = null, s = i; ; ) {
          if (s.tag === 5 || s.tag === 26) {
            if (o === null) {
              A = o = s;
              try {
                if (m = A.stateNode, d) b = m.style, typeof b.setProperty == "function" ? b.setProperty("display", "none", "important") : b.display = "none";
                else {
                  x = A.stateNode;
                  var X = A.memoizedProps.style, R = X != null && X.hasOwnProperty("display") ? X.display : null;
                  x.style.display = R == null || typeof R == "boolean" ? "" : ("" + R).trim();
                }
              } catch (nt) {
                Ht(A, A.return, nt);
              }
            }
          } else if (s.tag === 6) {
            if (o === null) {
              A = s;
              try {
                A.stateNode.nodeValue = d ? "" : A.memoizedProps;
              } catch (nt) {
                Ht(A, A.return, nt);
              }
            }
          } else if (s.tag === 18) {
            if (o === null) {
              A = s;
              try {
                var N = A.stateNode;
                d ? Cy(N, true) : Cy(A.stateNode, false);
              } catch (nt) {
                Ht(A, A.return, nt);
              }
            }
          } else if ((s.tag !== 22 && s.tag !== 23 || s.memoizedState === null || s === i) && s.child !== null) {
            s.child.return = s, s = s.child;
            continue;
          }
          if (s === i) break t;
          for (; s.sibling === null; ) {
            if (s.return === null || s.return === i) break t;
            o === s && (o = null), s = s.return;
          }
          o === s && (o = null), s.sibling.return = s.return, s = s.sibling;
        }
        c & 4 && (c = i.updateQueue, c !== null && (o = c.retryQueue, o !== null && (c.retryQueue = null, Mo(i, o))));
        break;
      case 19:
        Ye(s, i), Ge(i), c & 4 && (c = i.updateQueue, c !== null && (i.updateQueue = null, Mo(i, c)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ye(s, i), Ge(i);
    }
  }
  function Ge(i) {
    var s = i.flags;
    if (s & 2) {
      try {
        for (var o, c = i.return; c !== null; ) {
          if (M0(c)) {
            o = c;
            break;
          }
          c = c.return;
        }
        if (o == null) throw Error(n(160));
        switch (o.tag) {
          case 27:
            var d = o.stateNode, m = Ff(i);
            Ao(i, m, d);
            break;
          case 5:
            var b = o.stateNode;
            o.flags & 32 && (Wl(b, ""), o.flags &= -33);
            var x = Ff(i);
            Ao(i, x, b);
            break;
          case 3:
          case 4:
            var A = o.stateNode.containerInfo, B = Ff(i);
            Pf(i, B, A);
            break;
          default:
            throw Error(n(161));
        }
      } catch (U) {
        Ht(i, i.return, U);
      }
      i.flags &= -3;
    }
    s & 4096 && (i.flags &= -4097);
  }
  function N0(i) {
    if (i.subtreeFlags & 1024) for (i = i.child; i !== null; ) {
      var s = i;
      N0(s), s.tag === 5 && s.flags & 1024 && s.stateNode.reset(), i = i.sibling;
    }
  }
  function hn(i, s) {
    if (s.subtreeFlags & 8772) for (s = s.child; s !== null; ) O0(i, s.alternate, s), s = s.sibling;
  }
  function Ml(i) {
    for (i = i.child; i !== null; ) {
      var s = i;
      switch (s.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ln(4, s, s.return), Ml(s);
          break;
        case 1:
          Li(s, s.return);
          var o = s.stateNode;
          typeof o.componentWillUnmount == "function" && C0(s, s.return, o), Ml(s);
          break;
        case 27:
          _r(s.stateNode);
        case 26:
        case 5:
          Li(s, s.return), Ml(s);
          break;
        case 22:
          s.memoizedState === null && Ml(s);
          break;
        case 30:
          Ml(s);
          break;
        default:
          Ml(s);
      }
      i = i.sibling;
    }
  }
  function dn(i, s, o) {
    for (o = o && (s.subtreeFlags & 8772) !== 0, s = s.child; s !== null; ) {
      var c = s.alternate, d = i, m = s, b = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          dn(d, m, o), Mr(4, m);
          break;
        case 1:
          if (dn(d, m, o), c = m, d = c.stateNode, typeof d.componentDidMount == "function") try {
            d.componentDidMount();
          } catch (B) {
            Ht(c, c.return, B);
          }
          if (c = m, d = c.updateQueue, d !== null) {
            var x = c.stateNode;
            try {
              var A = d.shared.hiddenCallbacks;
              if (A !== null) for (d.shared.hiddenCallbacks = null, d = 0; d < A.length; d++) fp(A[d], x);
            } catch (B) {
              Ht(c, c.return, B);
            }
          }
          o && b & 64 && w0(m), Tr(m, m.return);
          break;
        case 27:
          T0(m);
        case 26:
        case 5:
          dn(d, m, o), o && c === null && b & 4 && A0(m), Tr(m, m.return);
          break;
        case 12:
          dn(d, m, o);
          break;
        case 31:
          dn(d, m, o), o && b & 4 && B0(d, m);
          break;
        case 13:
          dn(d, m, o), o && b & 4 && R0(d, m);
          break;
        case 22:
          m.memoizedState === null && dn(d, m, o), Tr(m, m.return);
          break;
        case 30:
          break;
        default:
          dn(d, m, o);
      }
      s = s.sibling;
    }
  }
  function $f(i, s) {
    var o = null;
    i !== null && i.memoizedState !== null && i.memoizedState.cachePool !== null && (o = i.memoizedState.cachePool.pool), i = null, s.memoizedState !== null && s.memoizedState.cachePool !== null && (i = s.memoizedState.cachePool.pool), i !== o && (i != null && i.refCount++, o != null && hr(o));
  }
  function th(i, s) {
    i = null, s.alternate !== null && (i = s.alternate.memoizedState.cache), s = s.memoizedState.cache, s !== i && (s.refCount++, i != null && hr(i));
  }
  function Di(i, s, o, c) {
    if (s.subtreeFlags & 10256) for (s = s.child; s !== null; ) _0(i, s, o, c), s = s.sibling;
  }
  function _0(i, s, o, c) {
    var d = s.flags;
    switch (s.tag) {
      case 0:
      case 11:
      case 15:
        Di(i, s, o, c), d & 2048 && Mr(9, s);
        break;
      case 1:
        Di(i, s, o, c);
        break;
      case 3:
        Di(i, s, o, c), d & 2048 && (i = null, s.alternate !== null && (i = s.alternate.memoizedState.cache), s = s.memoizedState.cache, s !== i && (s.refCount++, i != null && hr(i)));
        break;
      case 12:
        if (d & 2048) {
          Di(i, s, o, c), i = s.stateNode;
          try {
            var m = s.memoizedProps, b = m.id, x = m.onPostCommit;
            typeof x == "function" && x(b, s.alternate === null ? "mount" : "update", i.passiveEffectDuration, -0);
          } catch (A) {
            Ht(s, s.return, A);
          }
        } else Di(i, s, o, c);
        break;
      case 31:
        Di(i, s, o, c);
        break;
      case 13:
        Di(i, s, o, c);
        break;
      case 23:
        break;
      case 22:
        m = s.stateNode, b = s.alternate, s.memoizedState !== null ? m._visibility & 2 ? Di(i, s, o, c) : kr(i, s) : m._visibility & 2 ? Di(i, s, o, c) : (m._visibility |= 2, ms(i, s, o, c, (s.subtreeFlags & 10256) !== 0 || false)), d & 2048 && $f(b, s);
        break;
      case 24:
        Di(i, s, o, c), d & 2048 && th(s.alternate, s);
        break;
      default:
        Di(i, s, o, c);
    }
  }
  function ms(i, s, o, c, d) {
    for (d = d && ((s.subtreeFlags & 10256) !== 0 || false), s = s.child; s !== null; ) {
      var m = i, b = s, x = o, A = c, B = b.flags;
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          ms(m, b, x, A, d), Mr(8, b);
          break;
        case 23:
          break;
        case 22:
          var U = b.stateNode;
          b.memoizedState !== null ? U._visibility & 2 ? ms(m, b, x, A, d) : kr(m, b) : (U._visibility |= 2, ms(m, b, x, A, d)), d && B & 2048 && $f(b.alternate, b);
          break;
        case 24:
          ms(m, b, x, A, d), d && B & 2048 && th(b.alternate, b);
          break;
        default:
          ms(m, b, x, A, d);
      }
      s = s.sibling;
    }
  }
  function kr(i, s) {
    if (s.subtreeFlags & 10256) for (s = s.child; s !== null; ) {
      var o = i, c = s, d = c.flags;
      switch (c.tag) {
        case 22:
          kr(o, c), d & 2048 && $f(c.alternate, c);
          break;
        case 24:
          kr(o, c), d & 2048 && th(c.alternate, c);
          break;
        default:
          kr(o, c);
      }
      s = s.sibling;
    }
  }
  var Or = 8192;
  function gs(i, s, o) {
    if (i.subtreeFlags & Or) for (i = i.child; i !== null; ) L0(i, s, o), i = i.sibling;
  }
  function L0(i, s, o) {
    switch (i.tag) {
      case 26:
        gs(i, s, o), i.flags & Or && i.memoizedState !== null && aC(o, Oi, i.memoizedState, i.memoizedProps);
        break;
      case 5:
        gs(i, s, o);
        break;
      case 3:
      case 4:
        var c = Oi;
        Oi = Vo(i.stateNode.containerInfo), gs(i, s, o), Oi = c;
        break;
      case 22:
        i.memoizedState === null && (c = i.alternate, c !== null && c.memoizedState !== null ? (c = Or, Or = 16777216, gs(i, s, o), Or = c) : gs(i, s, o));
        break;
      default:
        gs(i, s, o);
    }
  }
  function H0(i) {
    var s = i.alternate;
    if (s !== null && (i = s.child, i !== null)) {
      s.child = null;
      do
        s = i.sibling, i.sibling = null, i = s;
      while (i !== null);
    }
  }
  function Dr(i) {
    var s = i.deletions;
    if ((i.flags & 16) !== 0) {
      if (s !== null) for (var o = 0; o < s.length; o++) {
        var c = s[o];
        ge = c, V0(c, i);
      }
      H0(i);
    }
    if (i.subtreeFlags & 10256) for (i = i.child; i !== null; ) U0(i), i = i.sibling;
  }
  function U0(i) {
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        Dr(i), i.flags & 2048 && Ln(9, i, i.return);
        break;
      case 3:
        Dr(i);
        break;
      case 12:
        Dr(i);
        break;
      case 22:
        var s = i.stateNode;
        i.memoizedState !== null && s._visibility & 2 && (i.return === null || i.return.tag !== 13) ? (s._visibility &= -3, To(i)) : Dr(i);
        break;
      default:
        Dr(i);
    }
  }
  function To(i) {
    var s = i.deletions;
    if ((i.flags & 16) !== 0) {
      if (s !== null) for (var o = 0; o < s.length; o++) {
        var c = s[o];
        ge = c, V0(c, i);
      }
      H0(i);
    }
    for (i = i.child; i !== null; ) {
      switch (s = i, s.tag) {
        case 0:
        case 11:
        case 15:
          Ln(8, s, s.return), To(s);
          break;
        case 22:
          o = s.stateNode, o._visibility & 2 && (o._visibility &= -3, To(s));
          break;
        default:
          To(s);
      }
      i = i.sibling;
    }
  }
  function V0(i, s) {
    for (; ge !== null; ) {
      var o = ge;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          Ln(8, o, s);
          break;
        case 23:
        case 22:
          if (o.memoizedState !== null && o.memoizedState.cachePool !== null) {
            var c = o.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          hr(o.memoizedState.cache);
      }
      if (c = o.child, c !== null) c.return = o, ge = c;
      else t: for (o = i; ge !== null; ) {
        c = ge;
        var d = c.sibling, m = c.return;
        if (D0(c), c === o) {
          ge = null;
          break t;
        }
        if (d !== null) {
          d.return = m, ge = d;
          break t;
        }
        ge = m;
      }
    }
  }
  var ww = { getCacheForType: function(i) {
    var s = ve(re), o = s.data.get(i);
    return o === void 0 && (o = i(), s.data.set(i, o)), o;
  }, cacheSignal: function() {
    return ve(re).controller.signal;
  } }, Cw = typeof WeakMap == "function" ? WeakMap : Map, _t = 0, Yt = null, Ct = null, Mt = 0, Lt = 0, ni = null, Hn = false, ps = false, eh = false, mn = 0, $t = 0, Un = 0, Tl = 0, ih = 0, li = 0, ys = 0, Er = null, Xe = null, nh = false, ko = 0, q0 = 0, Oo = 1 / 0, Do = null, Vn = null, fe = 0, qn = null, bs = null, gn = 0, lh = 0, sh = null, j0 = null, Br = 0, rh = null;
  function si() {
    return (_t & 2) !== 0 && Mt !== 0 ? Mt & -Mt : z.T !== null ? hh() : ng();
  }
  function Y0() {
    if (li === 0) if ((Mt & 536870912) === 0 || kt) {
      var i = La;
      La <<= 1, (La & 3932160) === 0 && (La = 262144), li = i;
    } else li = 536870912;
    return i = ei.current, i !== null && (i.flags |= 32), li;
  }
  function Ke(i, s, o) {
    (i === Yt && (Lt === 2 || Lt === 9) || i.cancelPendingCommit !== null) && (vs(i, 0), jn(i, Mt, li, false)), Is(i, o), ((_t & 2) === 0 || i !== Yt) && (i === Yt && ((_t & 2) === 0 && (Tl |= o), $t === 4 && jn(i, Mt, li, false)), Hi(i));
  }
  function G0(i, s, o) {
    if ((_t & 6) !== 0) throw Error(n(327));
    var c = !o && (s & 127) === 0 && (s & i.expiredLanes) === 0 || Ps(i, s), d = c ? Tw(i, s) : oh(i, s, true), m = c;
    do {
      if (d === 0) {
        ps && !c && jn(i, s, 0, false);
        break;
      } else {
        if (o = i.current.alternate, m && !Aw(o)) {
          d = oh(i, s, false), m = false;
          continue;
        }
        if (d === 2) {
          if (m = s, i.errorRecoveryDisabledLanes & m) var b = 0;
          else b = i.pendingLanes & -536870913, b = b !== 0 ? b : b & 536870912 ? 536870912 : 0;
          if (b !== 0) {
            s = b;
            t: {
              var x = i;
              d = Er;
              var A = x.current.memoizedState.isDehydrated;
              if (A && (vs(x, b).flags |= 256), b = oh(x, b, false), b !== 2) {
                if (eh && !A) {
                  x.errorRecoveryDisabledLanes |= m, Tl |= m, d = 4;
                  break t;
                }
                m = Xe, Xe = d, m !== null && (Xe === null ? Xe = m : Xe.push.apply(Xe, m));
              }
              d = b;
            }
            if (m = false, d !== 2) continue;
          }
        }
        if (d === 1) {
          vs(i, 0), jn(i, s, 0, true);
          break;
        }
        t: {
          switch (c = i, m = d, m) {
            case 0:
            case 1:
              throw Error(n(345));
            case 4:
              if ((s & 4194048) !== s) break;
            case 6:
              jn(c, s, li, !Hn);
              break t;
            case 2:
              Xe = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(n(329));
          }
          if ((s & 62914560) === s && (d = ko + 300 - Fe(), 10 < d)) {
            if (jn(c, s, li, !Hn), Ua(c, 0, true) !== 0) break t;
            gn = s, c.timeoutHandle = Sy(X0.bind(null, c, o, Xe, Do, nh, s, li, Tl, ys, Hn, m, "Throttled", -0, 0), d);
            break t;
          }
          X0(c, o, Xe, Do, nh, s, li, Tl, ys, Hn, m, null, -0, 0);
        }
      }
      break;
    } while (true);
    Hi(i);
  }
  function X0(i, s, o, c, d, m, b, x, A, B, U, X, R, N) {
    if (i.timeoutHandle = -1, X = s.subtreeFlags, X & 8192 || (X & 16785408) === 16785408) {
      X = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: $i }, L0(s, m, X);
      var nt = (m & 62914560) === m ? ko - Fe() : (m & 4194048) === m ? q0 - Fe() : 0;
      if (nt = oC(X, nt), nt !== null) {
        gn = m, i.cancelPendingCommit = nt(I0.bind(null, i, s, m, o, c, d, b, x, A, U, X, null, R, N)), jn(i, m, b, !B);
        return;
      }
    }
    I0(i, s, m, o, c, d, b, x, A);
  }
  function Aw(i) {
    for (var s = i; ; ) {
      var o = s.tag;
      if ((o === 0 || o === 11 || o === 15) && s.flags & 16384 && (o = s.updateQueue, o !== null && (o = o.stores, o !== null))) for (var c = 0; c < o.length; c++) {
        var d = o[c], m = d.getSnapshot;
        d = d.value;
        try {
          if (!$e(m(), d)) return false;
        } catch {
          return false;
        }
      }
      if (o = s.child, s.subtreeFlags & 16384 && o !== null) o.return = s, s = o;
      else {
        if (s === i) break;
        for (; s.sibling === null; ) {
          if (s.return === null || s.return === i) return true;
          s = s.return;
        }
        s.sibling.return = s.return, s = s.sibling;
      }
    }
    return true;
  }
  function jn(i, s, o, c) {
    s &= ~ih, s &= ~Tl, i.suspendedLanes |= s, i.pingedLanes &= ~s, c && (i.warmLanes |= s), c = i.expirationTimes;
    for (var d = s; 0 < d; ) {
      var m = 31 - Ie(d), b = 1 << m;
      c[m] = -1, d &= ~b;
    }
    o !== 0 && tg(i, o, s);
  }
  function Eo() {
    return (_t & 6) === 0 ? (Rr(0), false) : true;
  }
  function ah() {
    if (Ct !== null) {
      if (Lt === 0) var i = Ct.return;
      else i = Ct, ln = yl = null, Cf(i), us = null, mr = 0, i = Ct;
      for (; i !== null; ) x0(i.alternate, i), i = i.return;
      Ct = null;
    }
  }
  function vs(i, s) {
    var o = i.timeoutHandle;
    o !== -1 && (i.timeoutHandle = -1, Xw(o)), o = i.cancelPendingCommit, o !== null && (i.cancelPendingCommit = null, o()), gn = 0, ah(), Yt = i, Ct = o = en(i.current, null), Mt = s, Lt = 0, ni = null, Hn = false, ps = Ps(i, s), eh = false, ys = li = ih = Tl = Un = $t = 0, Xe = Er = null, nh = false, (s & 8) !== 0 && (s |= s & 32);
    var c = i.entangledLanes;
    if (c !== 0) for (i = i.entanglements, c &= s; 0 < c; ) {
      var d = 31 - Ie(c), m = 1 << d;
      s |= i[d], c &= ~m;
    }
    return mn = s, Fa(), o;
  }
  function K0(i, s) {
    vt = null, z.H = wr, s === os || s === lo ? (s = ap(), Lt = 3) : s === ff ? (s = ap(), Lt = 4) : Lt = s === Vf ? 8 : s !== null && typeof s == "object" && typeof s.then == "function" ? 6 : 1, ni = s, Ct === null && ($t = 1, vo(i, hi(s, i.current)));
  }
  function Q0() {
    var i = ei.current;
    return i === null ? true : (Mt & 4194048) === Mt ? pi === null : (Mt & 62914560) === Mt || (Mt & 536870912) !== 0 ? i === pi : false;
  }
  function Z0() {
    var i = z.H;
    return z.H = wr, i === null ? wr : i;
  }
  function W0() {
    var i = z.A;
    return z.A = ww, i;
  }
  function Bo() {
    $t = 4, Hn || (Mt & 4194048) !== Mt && ei.current !== null || (ps = true), (Un & 134217727) === 0 && (Tl & 134217727) === 0 || Yt === null || jn(Yt, Mt, li, false);
  }
  function oh(i, s, o) {
    var c = _t;
    _t |= 2;
    var d = Z0(), m = W0();
    (Yt !== i || Mt !== s) && (Do = null, vs(i, s)), s = false;
    var b = $t;
    t: do
      try {
        if (Lt !== 0 && Ct !== null) {
          var x = Ct, A = ni;
          switch (Lt) {
            case 8:
              ah(), b = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              ei.current === null && (s = true);
              var B = Lt;
              if (Lt = 0, ni = null, Ss(i, x, A, B), o && ps) {
                b = 0;
                break t;
              }
              break;
            default:
              B = Lt, Lt = 0, ni = null, Ss(i, x, A, B);
          }
        }
        Mw(), b = $t;
        break;
      } catch (U) {
        K0(i, U);
      }
    while (true);
    return s && i.shellSuspendCounter++, ln = yl = null, _t = c, z.H = d, z.A = m, Ct === null && (Yt = null, Mt = 0, Fa()), b;
  }
  function Mw() {
    for (; Ct !== null; ) J0(Ct);
  }
  function Tw(i, s) {
    var o = _t;
    _t |= 2;
    var c = Z0(), d = W0();
    Yt !== i || Mt !== s ? (Do = null, Oo = Fe() + 500, vs(i, s)) : ps = Ps(i, s);
    t: do
      try {
        if (Lt !== 0 && Ct !== null) {
          s = Ct;
          var m = ni;
          e: switch (Lt) {
            case 1:
              Lt = 0, ni = null, Ss(i, s, m, 1);
              break;
            case 2:
            case 9:
              if (sp(m)) {
                Lt = 0, ni = null, F0(s);
                break;
              }
              s = function() {
                Lt !== 2 && Lt !== 9 || Yt !== i || (Lt = 7), Hi(i);
              }, m.then(s, s);
              break t;
            case 3:
              Lt = 7;
              break t;
            case 4:
              Lt = 5;
              break t;
            case 7:
              sp(m) ? (Lt = 0, ni = null, F0(s)) : (Lt = 0, ni = null, Ss(i, s, m, 7));
              break;
            case 5:
              var b = null;
              switch (Ct.tag) {
                case 26:
                  b = Ct.memoizedState;
                case 5:
                case 27:
                  var x = Ct;
                  if (b ? _y(b) : x.stateNode.complete) {
                    Lt = 0, ni = null;
                    var A = x.sibling;
                    if (A !== null) Ct = A;
                    else {
                      var B = x.return;
                      B !== null ? (Ct = B, Ro(B)) : Ct = null;
                    }
                    break e;
                  }
              }
              Lt = 0, ni = null, Ss(i, s, m, 5);
              break;
            case 6:
              Lt = 0, ni = null, Ss(i, s, m, 6);
              break;
            case 8:
              ah(), $t = 6;
              break t;
            default:
              throw Error(n(462));
          }
        }
        kw();
        break;
      } catch (U) {
        K0(i, U);
      }
    while (true);
    return ln = yl = null, z.H = c, z.A = d, _t = o, Ct !== null ? 0 : (Yt = null, Mt = 0, Fa(), $t);
  }
  function kw() {
    for (; Ct !== null && !Fx(); ) J0(Ct);
  }
  function J0(i) {
    var s = v0(i.alternate, i, mn);
    i.memoizedProps = i.pendingProps, s === null ? Ro(i) : Ct = s;
  }
  function F0(i) {
    var s = i, o = s.alternate;
    switch (s.tag) {
      case 15:
      case 0:
        s = d0(o, s, s.pendingProps, s.type, void 0, Mt);
        break;
      case 11:
        s = d0(o, s, s.pendingProps, s.type.render, s.ref, Mt);
        break;
      case 5:
        Cf(s);
      default:
        x0(o, s), s = Ct = Wg(s, mn), s = v0(o, s, mn);
    }
    i.memoizedProps = i.pendingProps, s === null ? Ro(i) : Ct = s;
  }
  function Ss(i, s, o, c) {
    ln = yl = null, Cf(s), us = null, mr = 0;
    var d = s.return;
    try {
      if (gw(i, d, s, o, Mt)) {
        $t = 1, vo(i, hi(o, i.current)), Ct = null;
        return;
      }
    } catch (m) {
      if (d !== null) throw Ct = d, m;
      $t = 1, vo(i, hi(o, i.current)), Ct = null;
      return;
    }
    s.flags & 32768 ? (kt || c === 1 ? i = true : ps || (Mt & 536870912) !== 0 ? i = false : (Hn = i = true, (c === 2 || c === 9 || c === 3 || c === 6) && (c = ei.current, c !== null && c.tag === 13 && (c.flags |= 16384))), P0(s, i)) : Ro(s);
  }
  function Ro(i) {
    var s = i;
    do {
      if ((s.flags & 32768) !== 0) {
        P0(s, Hn);
        return;
      }
      i = s.return;
      var o = bw(s.alternate, s, mn);
      if (o !== null) {
        Ct = o;
        return;
      }
      if (s = s.sibling, s !== null) {
        Ct = s;
        return;
      }
      Ct = s = i;
    } while (s !== null);
    $t === 0 && ($t = 5);
  }
  function P0(i, s) {
    do {
      var o = vw(i.alternate, i);
      if (o !== null) {
        o.flags &= 32767, Ct = o;
        return;
      }
      if (o = i.return, o !== null && (o.flags |= 32768, o.subtreeFlags = 0, o.deletions = null), !s && (i = i.sibling, i !== null)) {
        Ct = i;
        return;
      }
      Ct = i = o;
    } while (i !== null);
    $t = 6, Ct = null;
  }
  function I0(i, s, o, c, d, m, b, x, A) {
    i.cancelPendingCommit = null;
    do
      zo();
    while (fe !== 0);
    if ((_t & 6) !== 0) throw Error(n(327));
    if (s !== null) {
      if (s === i.current) throw Error(n(177));
      if (m = s.lanes | s.childLanes, m |= Jc, r2(i, o, m, b, x, A), i === Yt && (Ct = Yt = null, Mt = 0), bs = s, qn = i, gn = o, lh = m, sh = d, j0 = c, (s.subtreeFlags & 10256) !== 0 || (s.flags & 10256) !== 0 ? (i.callbackNode = null, i.callbackPriority = 0, Bw(Na, function() {
        return ny(), null;
      })) : (i.callbackNode = null, i.callbackPriority = 0), c = (s.flags & 13878) !== 0, (s.subtreeFlags & 13878) !== 0 || c) {
        c = z.T, z.T = null, d = Z.p, Z.p = 2, b = _t, _t |= 4;
        try {
          Sw(i, s, o);
        } finally {
          _t = b, Z.p = d, z.T = c;
        }
      }
      fe = 1, $0(), ty(), ey();
    }
  }
  function $0() {
    if (fe === 1) {
      fe = 0;
      var i = qn, s = bs, o = (s.flags & 13878) !== 0;
      if ((s.subtreeFlags & 13878) !== 0 || o) {
        o = z.T, z.T = null;
        var c = Z.p;
        Z.p = 2;
        var d = _t;
        _t |= 4;
        try {
          z0(s, i);
          var m = Sh, b = Vg(i.containerInfo), x = m.focusedElem, A = m.selectionRange;
          if (b !== x && x && x.ownerDocument && Ug(x.ownerDocument.documentElement, x)) {
            if (A !== null && Xc(x)) {
              var B = A.start, U = A.end;
              if (U === void 0 && (U = B), "selectionStart" in x) x.selectionStart = B, x.selectionEnd = Math.min(U, x.value.length);
              else {
                var X = x.ownerDocument || document, R = X && X.defaultView || window;
                if (R.getSelection) {
                  var N = R.getSelection(), nt = x.textContent.length, ct = Math.min(A.start, nt), qt = A.end === void 0 ? ct : Math.min(A.end, nt);
                  !N.extend && ct > qt && (b = qt, qt = ct, ct = b);
                  var D = Hg(x, ct), k = Hg(x, qt);
                  if (D && k && (N.rangeCount !== 1 || N.anchorNode !== D.node || N.anchorOffset !== D.offset || N.focusNode !== k.node || N.focusOffset !== k.offset)) {
                    var E = X.createRange();
                    E.setStart(D.node, D.offset), N.removeAllRanges(), ct > qt ? (N.addRange(E), N.extend(k.node, k.offset)) : (E.setEnd(k.node, k.offset), N.addRange(E));
                  }
                }
              }
            }
            for (X = [], N = x; N = N.parentNode; ) N.nodeType === 1 && X.push({ element: N, left: N.scrollLeft, top: N.scrollTop });
            for (typeof x.focus == "function" && x.focus(), x = 0; x < X.length; x++) {
              var Y = X[x];
              Y.element.scrollLeft = Y.left, Y.element.scrollTop = Y.top;
            }
          }
          Ko = !!vh, Sh = vh = null;
        } finally {
          _t = d, Z.p = c, z.T = o;
        }
      }
      i.current = s, fe = 2;
    }
  }
  function ty() {
    if (fe === 2) {
      fe = 0;
      var i = qn, s = bs, o = (s.flags & 8772) !== 0;
      if ((s.subtreeFlags & 8772) !== 0 || o) {
        o = z.T, z.T = null;
        var c = Z.p;
        Z.p = 2;
        var d = _t;
        _t |= 4;
        try {
          O0(i, s.alternate, s);
        } finally {
          _t = d, Z.p = c, z.T = o;
        }
      }
      fe = 3;
    }
  }
  function ey() {
    if (fe === 4 || fe === 3) {
      fe = 0, Px();
      var i = qn, s = bs, o = gn, c = j0;
      (s.subtreeFlags & 10256) !== 0 || (s.flags & 10256) !== 0 ? fe = 5 : (fe = 0, bs = qn = null, iy(i, i.pendingLanes));
      var d = i.pendingLanes;
      if (d === 0 && (Vn = null), Mc(o), s = s.stateNode, Pe && typeof Pe.onCommitFiberRoot == "function") try {
        Pe.onCommitFiberRoot(Fs, s, void 0, (s.current.flags & 128) === 128);
      } catch {
      }
      if (c !== null) {
        s = z.T, d = Z.p, Z.p = 2, z.T = null;
        try {
          for (var m = i.onRecoverableError, b = 0; b < c.length; b++) {
            var x = c[b];
            m(x.value, { componentStack: x.stack });
          }
        } finally {
          z.T = s, Z.p = d;
        }
      }
      (gn & 3) !== 0 && zo(), Hi(i), d = i.pendingLanes, (o & 261930) !== 0 && (d & 42) !== 0 ? i === rh ? Br++ : (Br = 0, rh = i) : Br = 0, Rr(0);
    }
  }
  function iy(i, s) {
    (i.pooledCacheLanes &= s) === 0 && (s = i.pooledCache, s != null && (i.pooledCache = null, hr(s)));
  }
  function zo() {
    return $0(), ty(), ey(), ny();
  }
  function ny() {
    if (fe !== 5) return false;
    var i = qn, s = lh;
    lh = 0;
    var o = Mc(gn), c = z.T, d = Z.p;
    try {
      Z.p = 32 > o ? 32 : o, z.T = null, o = sh, sh = null;
      var m = qn, b = gn;
      if (fe = 0, bs = qn = null, gn = 0, (_t & 6) !== 0) throw Error(n(331));
      var x = _t;
      if (_t |= 4, U0(m.current), _0(m, m.current, b, o), _t = x, Rr(0, false), Pe && typeof Pe.onPostCommitFiberRoot == "function") try {
        Pe.onPostCommitFiberRoot(Fs, m);
      } catch {
      }
      return true;
    } finally {
      Z.p = d, z.T = c, iy(i, s);
    }
  }
  function ly(i, s, o) {
    s = hi(o, s), s = Uf(i.stateNode, s, 2), i = zn(i, s, 2), i !== null && (Is(i, 2), Hi(i));
  }
  function Ht(i, s, o) {
    if (i.tag === 3) ly(i, i, o);
    else for (; s !== null; ) {
      if (s.tag === 3) {
        ly(s, i, o);
        break;
      } else if (s.tag === 1) {
        var c = s.stateNode;
        if (typeof s.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (Vn === null || !Vn.has(c))) {
          i = hi(o, i), o = s0(2), c = zn(s, o, 2), c !== null && (r0(o, c, s, i), Is(c, 2), Hi(c));
          break;
        }
      }
      s = s.return;
    }
  }
  function uh(i, s, o) {
    var c = i.pingCache;
    if (c === null) {
      c = i.pingCache = new Cw();
      var d = /* @__PURE__ */ new Set();
      c.set(s, d);
    } else d = c.get(s), d === void 0 && (d = /* @__PURE__ */ new Set(), c.set(s, d));
    d.has(o) || (eh = true, d.add(o), i = Ow.bind(null, i, s, o), s.then(i, i));
  }
  function Ow(i, s, o) {
    var c = i.pingCache;
    c !== null && c.delete(s), i.pingedLanes |= i.suspendedLanes & o, i.warmLanes &= ~o, Yt === i && (Mt & o) === o && ($t === 4 || $t === 3 && (Mt & 62914560) === Mt && 300 > Fe() - ko ? (_t & 2) === 0 && vs(i, 0) : ih |= o, ys === Mt && (ys = 0)), Hi(i);
  }
  function sy(i, s) {
    s === 0 && (s = $m()), i = ml(i, s), i !== null && (Is(i, s), Hi(i));
  }
  function Dw(i) {
    var s = i.memoizedState, o = 0;
    s !== null && (o = s.retryLane), sy(i, o);
  }
  function Ew(i, s) {
    var o = 0;
    switch (i.tag) {
      case 31:
      case 13:
        var c = i.stateNode, d = i.memoizedState;
        d !== null && (o = d.retryLane);
        break;
      case 19:
        c = i.stateNode;
        break;
      case 22:
        c = i.stateNode._retryCache;
        break;
      default:
        throw Error(n(314));
    }
    c !== null && c.delete(s), sy(i, o);
  }
  function Bw(i, s) {
    return xc(i, s);
  }
  var No = null, xs = null, ch = false, _o = false, fh = false, Yn = 0;
  function Hi(i) {
    i !== xs && i.next === null && (xs === null ? No = xs = i : xs = xs.next = i), _o = true, ch || (ch = true, zw());
  }
  function Rr(i, s) {
    if (!fh && _o) {
      fh = true;
      do
        for (var o = false, c = No; c !== null; ) {
          if (i !== 0) {
            var d = c.pendingLanes;
            if (d === 0) var m = 0;
            else {
              var b = c.suspendedLanes, x = c.pingedLanes;
              m = (1 << 31 - Ie(42 | i) + 1) - 1, m &= d & ~(b & ~x), m = m & 201326741 ? m & 201326741 | 1 : m ? m | 2 : 0;
            }
            m !== 0 && (o = true, uy(c, m));
          } else m = Mt, m = Ua(c, c === Yt ? m : 0, c.cancelPendingCommit !== null || c.timeoutHandle !== -1), (m & 3) === 0 || Ps(c, m) || (o = true, uy(c, m));
          c = c.next;
        }
      while (o);
      fh = false;
    }
  }
  function Rw() {
    ry();
  }
  function ry() {
    _o = ch = false;
    var i = 0;
    Yn !== 0 && Gw() && (i = Yn);
    for (var s = Fe(), o = null, c = No; c !== null; ) {
      var d = c.next, m = ay(c, s);
      m === 0 ? (c.next = null, o === null ? No = d : o.next = d, d === null && (xs = o)) : (o = c, (i !== 0 || (m & 3) !== 0) && (_o = true)), c = d;
    }
    fe !== 0 && fe !== 5 || Rr(i), Yn !== 0 && (Yn = 0);
  }
  function ay(i, s) {
    for (var o = i.suspendedLanes, c = i.pingedLanes, d = i.expirationTimes, m = i.pendingLanes & -62914561; 0 < m; ) {
      var b = 31 - Ie(m), x = 1 << b, A = d[b];
      A === -1 ? ((x & o) === 0 || (x & c) !== 0) && (d[b] = s2(x, s)) : A <= s && (i.expiredLanes |= x), m &= ~x;
    }
    if (s = Yt, o = Mt, o = Ua(i, i === s ? o : 0, i.cancelPendingCommit !== null || i.timeoutHandle !== -1), c = i.callbackNode, o === 0 || i === s && (Lt === 2 || Lt === 9) || i.cancelPendingCommit !== null) return c !== null && c !== null && wc(c), i.callbackNode = null, i.callbackPriority = 0;
    if ((o & 3) === 0 || Ps(i, o)) {
      if (s = o & -o, s === i.callbackPriority) return s;
      switch (c !== null && wc(c), Mc(o)) {
        case 2:
        case 8:
          o = Pm;
          break;
        case 32:
          o = Na;
          break;
        case 268435456:
          o = Im;
          break;
        default:
          o = Na;
      }
      return c = oy.bind(null, i), o = xc(o, c), i.callbackPriority = s, i.callbackNode = o, s;
    }
    return c !== null && c !== null && wc(c), i.callbackPriority = 2, i.callbackNode = null, 2;
  }
  function oy(i, s) {
    if (fe !== 0 && fe !== 5) return i.callbackNode = null, i.callbackPriority = 0, null;
    var o = i.callbackNode;
    if (zo() && i.callbackNode !== o) return null;
    var c = Mt;
    return c = Ua(i, i === Yt ? c : 0, i.cancelPendingCommit !== null || i.timeoutHandle !== -1), c === 0 ? null : (G0(i, c, s), ay(i, Fe()), i.callbackNode != null && i.callbackNode === o ? oy.bind(null, i) : null);
  }
  function uy(i, s) {
    if (zo()) return null;
    G0(i, s, true);
  }
  function zw() {
    Kw(function() {
      (_t & 6) !== 0 ? xc(Fm, Rw) : ry();
    });
  }
  function hh() {
    if (Yn === 0) {
      var i = rs;
      i === 0 && (i = _a, _a <<= 1, (_a & 261888) === 0 && (_a = 256)), Yn = i;
    }
    return Yn;
  }
  function cy(i) {
    return i == null || typeof i == "symbol" || typeof i == "boolean" ? null : typeof i == "function" ? i : Ya("" + i);
  }
  function fy(i, s) {
    var o = s.ownerDocument.createElement("input");
    return o.name = s.name, o.value = s.value, i.id && o.setAttribute("form", i.id), s.parentNode.insertBefore(o, s), i = new FormData(i), o.parentNode.removeChild(o), i;
  }
  function Nw(i, s, o, c, d) {
    if (s === "submit" && o && o.stateNode === d) {
      var m = cy((d[Ve] || null).action), b = c.submitter;
      b && (s = (s = b[Ve] || null) ? cy(s.formAction) : b.getAttribute("formAction"), s !== null && (m = s, b = null));
      var x = new Qa("action", "action", null, c, d);
      i.push({ event: x, listeners: [{ instance: null, listener: function() {
        if (c.defaultPrevented) {
          if (Yn !== 0) {
            var A = b ? fy(d, b) : new FormData(d);
            Rf(o, { pending: true, data: A, method: d.method, action: m }, null, A);
          }
        } else typeof m == "function" && (x.preventDefault(), A = b ? fy(d, b) : new FormData(d), Rf(o, { pending: true, data: A, method: d.method, action: m }, m, A));
      }, currentTarget: d }] });
    }
  }
  for (var dh = 0; dh < Wc.length; dh++) {
    var mh = Wc[dh], _w = mh.toLowerCase(), Lw = mh[0].toUpperCase() + mh.slice(1);
    ki(_w, "on" + Lw);
  }
  ki(Yg, "onAnimationEnd"), ki(Gg, "onAnimationIteration"), ki(Xg, "onAnimationStart"), ki("dblclick", "onDoubleClick"), ki("focusin", "onFocus"), ki("focusout", "onBlur"), ki(I2, "onTransitionRun"), ki($2, "onTransitionStart"), ki(tw, "onTransitionCancel"), ki(Kg, "onTransitionEnd"), Ql("onMouseEnter", ["mouseout", "mouseover"]), Ql("onMouseLeave", ["mouseout", "mouseover"]), Ql("onPointerEnter", ["pointerout", "pointerover"]), Ql("onPointerLeave", ["pointerout", "pointerover"]), cl("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), cl("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), cl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), cl("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), cl("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), cl("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var zr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Hw = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zr));
  function hy(i, s) {
    s = (s & 4) !== 0;
    for (var o = 0; o < i.length; o++) {
      var c = i[o], d = c.event;
      c = c.listeners;
      t: {
        var m = void 0;
        if (s) for (var b = c.length - 1; 0 <= b; b--) {
          var x = c[b], A = x.instance, B = x.currentTarget;
          if (x = x.listener, A !== m && d.isPropagationStopped()) break t;
          m = x, d.currentTarget = B;
          try {
            m(d);
          } catch (U) {
            Ja(U);
          }
          d.currentTarget = null, m = A;
        }
        else for (b = 0; b < c.length; b++) {
          if (x = c[b], A = x.instance, B = x.currentTarget, x = x.listener, A !== m && d.isPropagationStopped()) break t;
          m = x, d.currentTarget = B;
          try {
            m(d);
          } catch (U) {
            Ja(U);
          }
          d.currentTarget = null, m = A;
        }
      }
    }
  }
  function At(i, s) {
    var o = s[Tc];
    o === void 0 && (o = s[Tc] = /* @__PURE__ */ new Set());
    var c = i + "__bubble";
    o.has(c) || (dy(s, i, 2, false), o.add(c));
  }
  function gh(i, s, o) {
    var c = 0;
    s && (c |= 4), dy(o, i, c, s);
  }
  var Lo = "_reactListening" + Math.random().toString(36).slice(2);
  function ph(i) {
    if (!i[Lo]) {
      i[Lo] = true, rg.forEach(function(o) {
        o !== "selectionchange" && (Hw.has(o) || gh(o, false, i), gh(o, true, i));
      });
      var s = i.nodeType === 9 ? i : i.ownerDocument;
      s === null || s[Lo] || (s[Lo] = true, gh("selectionchange", false, s));
    }
  }
  function dy(i, s, o, c) {
    switch (Yy(s)) {
      case 2:
        var d = fC;
        break;
      case 8:
        d = hC;
        break;
      default:
        d = Bh;
    }
    o = d.bind(null, s, o, i), d = void 0, !_c || s !== "touchstart" && s !== "touchmove" && s !== "wheel" || (d = true), c ? d !== void 0 ? i.addEventListener(s, o, { capture: true, passive: d }) : i.addEventListener(s, o, true) : d !== void 0 ? i.addEventListener(s, o, { passive: d }) : i.addEventListener(s, o, false);
  }
  function yh(i, s, o, c, d) {
    var m = c;
    if ((s & 1) === 0 && (s & 2) === 0 && c !== null) t: for (; ; ) {
      if (c === null) return;
      var b = c.tag;
      if (b === 3 || b === 4) {
        var x = c.stateNode.containerInfo;
        if (x === d) break;
        if (b === 4) for (b = c.return; b !== null; ) {
          var A = b.tag;
          if ((A === 3 || A === 4) && b.stateNode.containerInfo === d) return;
          b = b.return;
        }
        for (; x !== null; ) {
          if (b = Gl(x), b === null) return;
          if (A = b.tag, A === 5 || A === 6 || A === 26 || A === 27) {
            c = m = b;
            continue t;
          }
          x = x.parentNode;
        }
      }
      c = c.return;
    }
    bg(function() {
      var B = m, U = zc(o), X = [];
      t: {
        var R = Qg.get(i);
        if (R !== void 0) {
          var N = Qa, nt = i;
          switch (i) {
            case "keypress":
              if (Xa(o) === 0) break t;
            case "keydown":
            case "keyup":
              N = E2;
              break;
            case "focusin":
              nt = "focus", N = Vc;
              break;
            case "focusout":
              nt = "blur", N = Vc;
              break;
            case "beforeblur":
            case "afterblur":
              N = Vc;
              break;
            case "click":
              if (o.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              N = xg;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              N = b2;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              N = z2;
              break;
            case Yg:
            case Gg:
            case Xg:
              N = x2;
              break;
            case Kg:
              N = _2;
              break;
            case "scroll":
            case "scrollend":
              N = p2;
              break;
            case "wheel":
              N = H2;
              break;
            case "copy":
            case "cut":
            case "paste":
              N = C2;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = Cg;
              break;
            case "toggle":
            case "beforetoggle":
              N = V2;
          }
          var ct = (s & 4) !== 0, qt = !ct && (i === "scroll" || i === "scrollend"), D = ct ? R !== null ? R + "Capture" : null : R;
          ct = [];
          for (var k = B, E; k !== null; ) {
            var Y = k;
            if (E = Y.stateNode, Y = Y.tag, Y !== 5 && Y !== 26 && Y !== 27 || E === null || D === null || (Y = er(k, D), Y != null && ct.push(Nr(k, Y, E))), qt) break;
            k = k.return;
          }
          0 < ct.length && (R = new N(R, nt, null, o, U), X.push({ event: R, listeners: ct }));
        }
      }
      if ((s & 7) === 0) {
        t: {
          if (R = i === "mouseover" || i === "pointerover", N = i === "mouseout" || i === "pointerout", R && o !== Rc && (nt = o.relatedTarget || o.fromElement) && (Gl(nt) || nt[Yl])) break t;
          if ((N || R) && (R = U.window === U ? U : (R = U.ownerDocument) ? R.defaultView || R.parentWindow : window, N ? (nt = o.relatedTarget || o.toElement, N = B, nt = nt ? Gl(nt) : null, nt !== null && (qt = a(nt), ct = nt.tag, nt !== qt || ct !== 5 && ct !== 27 && ct !== 6) && (nt = null)) : (N = null, nt = B), N !== nt)) {
            if (ct = xg, Y = "onMouseLeave", D = "onMouseEnter", k = "mouse", (i === "pointerout" || i === "pointerover") && (ct = Cg, Y = "onPointerLeave", D = "onPointerEnter", k = "pointer"), qt = N == null ? R : tr(N), E = nt == null ? R : tr(nt), R = new ct(Y, k + "leave", N, o, U), R.target = qt, R.relatedTarget = E, Y = null, Gl(U) === B && (ct = new ct(D, k + "enter", nt, o, U), ct.target = E, ct.relatedTarget = qt, Y = ct), qt = Y, N && nt) e: {
              for (ct = Uw, D = N, k = nt, E = 0, Y = D; Y; Y = ct(Y)) E++;
              Y = 0;
              for (var ot = k; ot; ot = ct(ot)) Y++;
              for (; 0 < E - Y; ) D = ct(D), E--;
              for (; 0 < Y - E; ) k = ct(k), Y--;
              for (; E--; ) {
                if (D === k || k !== null && D === k.alternate) {
                  ct = D;
                  break e;
                }
                D = ct(D), k = ct(k);
              }
              ct = null;
            }
            else ct = null;
            N !== null && my(X, R, N, ct, false), nt !== null && qt !== null && my(X, qt, nt, ct, true);
          }
        }
        t: {
          if (R = B ? tr(B) : window, N = R.nodeName && R.nodeName.toLowerCase(), N === "select" || N === "input" && R.type === "file") var zt = Bg;
          else if (Dg(R)) if (Rg) zt = J2;
          else {
            zt = Z2;
            var st = Q2;
          }
          else N = R.nodeName, !N || N.toLowerCase() !== "input" || R.type !== "checkbox" && R.type !== "radio" ? B && Bc(B.elementType) && (zt = Bg) : zt = W2;
          if (zt && (zt = zt(i, B))) {
            Eg(X, zt, o, U);
            break t;
          }
          st && st(i, R, B), i === "focusout" && B && R.type === "number" && B.memoizedProps.value != null && Ec(R, "number", R.value);
        }
        switch (st = B ? tr(B) : window, i) {
          case "focusin":
            (Dg(st) || st.contentEditable === "true") && (Il = st, Kc = B, ur = null);
            break;
          case "focusout":
            ur = Kc = Il = null;
            break;
          case "mousedown":
            Qc = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Qc = false, qg(X, o, U);
            break;
          case "selectionchange":
            if (P2) break;
          case "keydown":
          case "keyup":
            qg(X, o, U);
        }
        var xt;
        if (jc) t: {
          switch (i) {
            case "compositionstart":
              var Tt = "onCompositionStart";
              break t;
            case "compositionend":
              Tt = "onCompositionEnd";
              break t;
            case "compositionupdate":
              Tt = "onCompositionUpdate";
              break t;
          }
          Tt = void 0;
        }
        else Pl ? kg(i, o) && (Tt = "onCompositionEnd") : i === "keydown" && o.keyCode === 229 && (Tt = "onCompositionStart");
        Tt && (Ag && o.locale !== "ko" && (Pl || Tt !== "onCompositionStart" ? Tt === "onCompositionEnd" && Pl && (xt = vg()) : (Tn = U, Lc = "value" in Tn ? Tn.value : Tn.textContent, Pl = true)), st = Ho(B, Tt), 0 < st.length && (Tt = new wg(Tt, i, null, o, U), X.push({ event: Tt, listeners: st }), xt ? Tt.data = xt : (xt = Og(o), xt !== null && (Tt.data = xt)))), (xt = j2 ? Y2(i, o) : G2(i, o)) && (Tt = Ho(B, "onBeforeInput"), 0 < Tt.length && (st = new wg("onBeforeInput", "beforeinput", null, o, U), X.push({ event: st, listeners: Tt }), st.data = xt)), Nw(X, i, B, o, U);
      }
      hy(X, s);
    });
  }
  function Nr(i, s, o) {
    return { instance: i, listener: s, currentTarget: o };
  }
  function Ho(i, s) {
    for (var o = s + "Capture", c = []; i !== null; ) {
      var d = i, m = d.stateNode;
      if (d = d.tag, d !== 5 && d !== 26 && d !== 27 || m === null || (d = er(i, o), d != null && c.unshift(Nr(i, d, m)), d = er(i, s), d != null && c.push(Nr(i, d, m))), i.tag === 3) return c;
      i = i.return;
    }
    return [];
  }
  function Uw(i) {
    if (i === null) return null;
    do
      i = i.return;
    while (i && i.tag !== 5 && i.tag !== 27);
    return i || null;
  }
  function my(i, s, o, c, d) {
    for (var m = s._reactName, b = []; o !== null && o !== c; ) {
      var x = o, A = x.alternate, B = x.stateNode;
      if (x = x.tag, A !== null && A === c) break;
      x !== 5 && x !== 26 && x !== 27 || B === null || (A = B, d ? (B = er(o, m), B != null && b.unshift(Nr(o, B, A))) : d || (B = er(o, m), B != null && b.push(Nr(o, B, A)))), o = o.return;
    }
    b.length !== 0 && i.push({ event: s, listeners: b });
  }
  var Vw = /\r\n?/g, qw = /\u0000|\uFFFD/g;
  function gy(i) {
    return (typeof i == "string" ? i : "" + i).replace(Vw, `
`).replace(qw, "");
  }
  function py(i, s) {
    return s = gy(s), gy(i) === s;
  }
  function Vt(i, s, o, c, d, m) {
    switch (o) {
      case "children":
        typeof c == "string" ? s === "body" || s === "textarea" && c === "" || Wl(i, c) : (typeof c == "number" || typeof c == "bigint") && s !== "body" && Wl(i, "" + c);
        break;
      case "className":
        qa(i, "class", c);
        break;
      case "tabIndex":
        qa(i, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        qa(i, o, c);
        break;
      case "style":
        pg(i, c, m);
        break;
      case "data":
        if (s !== "object") {
          qa(i, "data", c);
          break;
        }
      case "src":
      case "href":
        if (c === "" && (s !== "a" || o !== "href")) {
          i.removeAttribute(o);
          break;
        }
        if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
          i.removeAttribute(o);
          break;
        }
        c = Ya("" + c), i.setAttribute(o, c);
        break;
      case "action":
      case "formAction":
        if (typeof c == "function") {
          i.setAttribute(o, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof m == "function" && (o === "formAction" ? (s !== "input" && Vt(i, s, "name", d.name, d, null), Vt(i, s, "formEncType", d.formEncType, d, null), Vt(i, s, "formMethod", d.formMethod, d, null), Vt(i, s, "formTarget", d.formTarget, d, null)) : (Vt(i, s, "encType", d.encType, d, null), Vt(i, s, "method", d.method, d, null), Vt(i, s, "target", d.target, d, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          i.removeAttribute(o);
          break;
        }
        c = Ya("" + c), i.setAttribute(o, c);
        break;
      case "onClick":
        c != null && (i.onclick = $i);
        break;
      case "onScroll":
        c != null && At("scroll", i);
        break;
      case "onScrollEnd":
        c != null && At("scrollend", i);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c)) throw Error(n(61));
          if (o = c.__html, o != null) {
            if (d.children != null) throw Error(n(60));
            i.innerHTML = o;
          }
        }
        break;
      case "multiple":
        i.multiple = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "muted":
        i.muted = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
          i.removeAttribute("xlink:href");
          break;
        }
        o = Ya("" + c), i.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", o);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        c != null && typeof c != "function" && typeof c != "symbol" ? i.setAttribute(o, "" + c) : i.removeAttribute(o);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        c && typeof c != "function" && typeof c != "symbol" ? i.setAttribute(o, "") : i.removeAttribute(o);
        break;
      case "capture":
      case "download":
        c === true ? i.setAttribute(o, "") : c !== false && c != null && typeof c != "function" && typeof c != "symbol" ? i.setAttribute(o, c) : i.removeAttribute(o);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? i.setAttribute(o, c) : i.removeAttribute(o);
        break;
      case "rowSpan":
      case "start":
        c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? i.removeAttribute(o) : i.setAttribute(o, c);
        break;
      case "popover":
        At("beforetoggle", i), At("toggle", i), Va(i, "popover", c);
        break;
      case "xlinkActuate":
        Ii(i, "http://www.w3.org/1999/xlink", "xlink:actuate", c);
        break;
      case "xlinkArcrole":
        Ii(i, "http://www.w3.org/1999/xlink", "xlink:arcrole", c);
        break;
      case "xlinkRole":
        Ii(i, "http://www.w3.org/1999/xlink", "xlink:role", c);
        break;
      case "xlinkShow":
        Ii(i, "http://www.w3.org/1999/xlink", "xlink:show", c);
        break;
      case "xlinkTitle":
        Ii(i, "http://www.w3.org/1999/xlink", "xlink:title", c);
        break;
      case "xlinkType":
        Ii(i, "http://www.w3.org/1999/xlink", "xlink:type", c);
        break;
      case "xmlBase":
        Ii(i, "http://www.w3.org/XML/1998/namespace", "xml:base", c);
        break;
      case "xmlLang":
        Ii(i, "http://www.w3.org/XML/1998/namespace", "xml:lang", c);
        break;
      case "xmlSpace":
        Ii(i, "http://www.w3.org/XML/1998/namespace", "xml:space", c);
        break;
      case "is":
        Va(i, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < o.length) || o[0] !== "o" && o[0] !== "O" || o[1] !== "n" && o[1] !== "N") && (o = m2.get(o) || o, Va(i, o, c));
    }
  }
  function bh(i, s, o, c, d, m) {
    switch (o) {
      case "style":
        pg(i, c, m);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c)) throw Error(n(61));
          if (o = c.__html, o != null) {
            if (d.children != null) throw Error(n(60));
            i.innerHTML = o;
          }
        }
        break;
      case "children":
        typeof c == "string" ? Wl(i, c) : (typeof c == "number" || typeof c == "bigint") && Wl(i, "" + c);
        break;
      case "onScroll":
        c != null && At("scroll", i);
        break;
      case "onScrollEnd":
        c != null && At("scrollend", i);
        break;
      case "onClick":
        c != null && (i.onclick = $i);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!ag.hasOwnProperty(o)) t: {
          if (o[0] === "o" && o[1] === "n" && (d = o.endsWith("Capture"), s = o.slice(2, d ? o.length - 7 : void 0), m = i[Ve] || null, m = m != null ? m[o] : null, typeof m == "function" && i.removeEventListener(s, m, d), typeof c == "function")) {
            typeof m != "function" && m !== null && (o in i ? i[o] = null : i.hasAttribute(o) && i.removeAttribute(o)), i.addEventListener(s, c, d);
            break t;
          }
          o in i ? i[o] = c : c === true ? i.setAttribute(o, "") : Va(i, o, c);
        }
    }
  }
  function xe(i, s, o) {
    switch (s) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        At("error", i), At("load", i);
        var c = false, d = false, m;
        for (m in o) if (o.hasOwnProperty(m)) {
          var b = o[m];
          if (b != null) switch (m) {
            case "src":
              c = true;
              break;
            case "srcSet":
              d = true;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(n(137, s));
            default:
              Vt(i, s, m, b, o, null);
          }
        }
        d && Vt(i, s, "srcSet", o.srcSet, o, null), c && Vt(i, s, "src", o.src, o, null);
        return;
      case "input":
        At("invalid", i);
        var x = m = b = d = null, A = null, B = null;
        for (c in o) if (o.hasOwnProperty(c)) {
          var U = o[c];
          if (U != null) switch (c) {
            case "name":
              d = U;
              break;
            case "type":
              b = U;
              break;
            case "checked":
              A = U;
              break;
            case "defaultChecked":
              B = U;
              break;
            case "value":
              m = U;
              break;
            case "defaultValue":
              x = U;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (U != null) throw Error(n(137, s));
              break;
            default:
              Vt(i, s, c, U, o, null);
          }
        }
        hg(i, m, x, A, B, b, d, false);
        return;
      case "select":
        At("invalid", i), c = b = m = null;
        for (d in o) if (o.hasOwnProperty(d) && (x = o[d], x != null)) switch (d) {
          case "value":
            m = x;
            break;
          case "defaultValue":
            b = x;
            break;
          case "multiple":
            c = x;
          default:
            Vt(i, s, d, x, o, null);
        }
        s = m, o = b, i.multiple = !!c, s != null ? Zl(i, !!c, s, false) : o != null && Zl(i, !!c, o, true);
        return;
      case "textarea":
        At("invalid", i), m = d = c = null;
        for (b in o) if (o.hasOwnProperty(b) && (x = o[b], x != null)) switch (b) {
          case "value":
            c = x;
            break;
          case "defaultValue":
            d = x;
            break;
          case "children":
            m = x;
            break;
          case "dangerouslySetInnerHTML":
            if (x != null) throw Error(n(91));
            break;
          default:
            Vt(i, s, b, x, o, null);
        }
        mg(i, c, d, m);
        return;
      case "option":
        for (A in o) if (o.hasOwnProperty(A) && (c = o[A], c != null)) switch (A) {
          case "selected":
            i.selected = c && typeof c != "function" && typeof c != "symbol";
            break;
          default:
            Vt(i, s, A, c, o, null);
        }
        return;
      case "dialog":
        At("beforetoggle", i), At("toggle", i), At("cancel", i), At("close", i);
        break;
      case "iframe":
      case "object":
        At("load", i);
        break;
      case "video":
      case "audio":
        for (c = 0; c < zr.length; c++) At(zr[c], i);
        break;
      case "image":
        At("error", i), At("load", i);
        break;
      case "details":
        At("toggle", i);
        break;
      case "embed":
      case "source":
      case "link":
        At("error", i), At("load", i);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (B in o) if (o.hasOwnProperty(B) && (c = o[B], c != null)) switch (B) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(n(137, s));
          default:
            Vt(i, s, B, c, o, null);
        }
        return;
      default:
        if (Bc(s)) {
          for (U in o) o.hasOwnProperty(U) && (c = o[U], c !== void 0 && bh(i, s, U, c, o, void 0));
          return;
        }
    }
    for (x in o) o.hasOwnProperty(x) && (c = o[x], c != null && Vt(i, s, x, c, o, null));
  }
  function jw(i, s, o, c) {
    switch (s) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var d = null, m = null, b = null, x = null, A = null, B = null, U = null;
        for (N in o) {
          var X = o[N];
          if (o.hasOwnProperty(N) && X != null) switch (N) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              A = X;
            default:
              c.hasOwnProperty(N) || Vt(i, s, N, null, c, X);
          }
        }
        for (var R in c) {
          var N = c[R];
          if (X = o[R], c.hasOwnProperty(R) && (N != null || X != null)) switch (R) {
            case "type":
              m = N;
              break;
            case "name":
              d = N;
              break;
            case "checked":
              B = N;
              break;
            case "defaultChecked":
              U = N;
              break;
            case "value":
              b = N;
              break;
            case "defaultValue":
              x = N;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (N != null) throw Error(n(137, s));
              break;
            default:
              N !== X && Vt(i, s, R, N, c, X);
          }
        }
        Dc(i, b, x, A, B, U, m, d);
        return;
      case "select":
        N = b = x = R = null;
        for (m in o) if (A = o[m], o.hasOwnProperty(m) && A != null) switch (m) {
          case "value":
            break;
          case "multiple":
            N = A;
          default:
            c.hasOwnProperty(m) || Vt(i, s, m, null, c, A);
        }
        for (d in c) if (m = c[d], A = o[d], c.hasOwnProperty(d) && (m != null || A != null)) switch (d) {
          case "value":
            R = m;
            break;
          case "defaultValue":
            x = m;
            break;
          case "multiple":
            b = m;
          default:
            m !== A && Vt(i, s, d, m, c, A);
        }
        s = x, o = b, c = N, R != null ? Zl(i, !!o, R, false) : !!c != !!o && (s != null ? Zl(i, !!o, s, true) : Zl(i, !!o, o ? [] : "", false));
        return;
      case "textarea":
        N = R = null;
        for (x in o) if (d = o[x], o.hasOwnProperty(x) && d != null && !c.hasOwnProperty(x)) switch (x) {
          case "value":
            break;
          case "children":
            break;
          default:
            Vt(i, s, x, null, c, d);
        }
        for (b in c) if (d = c[b], m = o[b], c.hasOwnProperty(b) && (d != null || m != null)) switch (b) {
          case "value":
            R = d;
            break;
          case "defaultValue":
            N = d;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (d != null) throw Error(n(91));
            break;
          default:
            d !== m && Vt(i, s, b, d, c, m);
        }
        dg(i, R, N);
        return;
      case "option":
        for (var nt in o) if (R = o[nt], o.hasOwnProperty(nt) && R != null && !c.hasOwnProperty(nt)) switch (nt) {
          case "selected":
            i.selected = false;
            break;
          default:
            Vt(i, s, nt, null, c, R);
        }
        for (A in c) if (R = c[A], N = o[A], c.hasOwnProperty(A) && R !== N && (R != null || N != null)) switch (A) {
          case "selected":
            i.selected = R && typeof R != "function" && typeof R != "symbol";
            break;
          default:
            Vt(i, s, A, R, c, N);
        }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ct in o) R = o[ct], o.hasOwnProperty(ct) && R != null && !c.hasOwnProperty(ct) && Vt(i, s, ct, null, c, R);
        for (B in c) if (R = c[B], N = o[B], c.hasOwnProperty(B) && R !== N && (R != null || N != null)) switch (B) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (R != null) throw Error(n(137, s));
            break;
          default:
            Vt(i, s, B, R, c, N);
        }
        return;
      default:
        if (Bc(s)) {
          for (var qt in o) R = o[qt], o.hasOwnProperty(qt) && R !== void 0 && !c.hasOwnProperty(qt) && bh(i, s, qt, void 0, c, R);
          for (U in c) R = c[U], N = o[U], !c.hasOwnProperty(U) || R === N || R === void 0 && N === void 0 || bh(i, s, U, R, c, N);
          return;
        }
    }
    for (var D in o) R = o[D], o.hasOwnProperty(D) && R != null && !c.hasOwnProperty(D) && Vt(i, s, D, null, c, R);
    for (X in c) R = c[X], N = o[X], !c.hasOwnProperty(X) || R === N || R == null && N == null || Vt(i, s, X, R, c, N);
  }
  function yy(i) {
    switch (i) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return true;
      default:
        return false;
    }
  }
  function Yw() {
    if (typeof performance.getEntriesByType == "function") {
      for (var i = 0, s = 0, o = performance.getEntriesByType("resource"), c = 0; c < o.length; c++) {
        var d = o[c], m = d.transferSize, b = d.initiatorType, x = d.duration;
        if (m && x && yy(b)) {
          for (b = 0, x = d.responseEnd, c += 1; c < o.length; c++) {
            var A = o[c], B = A.startTime;
            if (B > x) break;
            var U = A.transferSize, X = A.initiatorType;
            U && yy(X) && (A = A.responseEnd, b += U * (A < x ? 1 : (x - B) / (A - B)));
          }
          if (--c, s += 8 * (m + b) / (d.duration / 1e3), i++, 10 < i) break;
        }
      }
      if (0 < i) return s / i / 1e6;
    }
    return navigator.connection && (i = navigator.connection.downlink, typeof i == "number") ? i : 5;
  }
  var vh = null, Sh = null;
  function Uo(i) {
    return i.nodeType === 9 ? i : i.ownerDocument;
  }
  function by(i) {
    switch (i) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function vy(i, s) {
    if (i === 0) switch (s) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return i === 1 && s === "foreignObject" ? 0 : i;
  }
  function xh(i, s) {
    return i === "textarea" || i === "noscript" || typeof s.children == "string" || typeof s.children == "number" || typeof s.children == "bigint" || typeof s.dangerouslySetInnerHTML == "object" && s.dangerouslySetInnerHTML !== null && s.dangerouslySetInnerHTML.__html != null;
  }
  var wh = null;
  function Gw() {
    var i = window.event;
    return i && i.type === "popstate" ? i === wh ? false : (wh = i, true) : (wh = null, false);
  }
  var Sy = typeof setTimeout == "function" ? setTimeout : void 0, Xw = typeof clearTimeout == "function" ? clearTimeout : void 0, xy = typeof Promise == "function" ? Promise : void 0, Kw = typeof queueMicrotask == "function" ? queueMicrotask : typeof xy < "u" ? function(i) {
    return xy.resolve(null).then(i).catch(Qw);
  } : Sy;
  function Qw(i) {
    setTimeout(function() {
      throw i;
    });
  }
  function Gn(i) {
    return i === "head";
  }
  function wy(i, s) {
    var o = s, c = 0;
    do {
      var d = o.nextSibling;
      if (i.removeChild(o), d && d.nodeType === 8) if (o = d.data, o === "/$" || o === "/&") {
        if (c === 0) {
          i.removeChild(d), Ms(s);
          return;
        }
        c--;
      } else if (o === "$" || o === "$?" || o === "$~" || o === "$!" || o === "&") c++;
      else if (o === "html") _r(i.ownerDocument.documentElement);
      else if (o === "head") {
        o = i.ownerDocument.head, _r(o);
        for (var m = o.firstChild; m; ) {
          var b = m.nextSibling, x = m.nodeName;
          m[$s] || x === "SCRIPT" || x === "STYLE" || x === "LINK" && m.rel.toLowerCase() === "stylesheet" || o.removeChild(m), m = b;
        }
      } else o === "body" && _r(i.ownerDocument.body);
      o = d;
    } while (o);
    Ms(s);
  }
  function Cy(i, s) {
    var o = i;
    i = 0;
    do {
      var c = o.nextSibling;
      if (o.nodeType === 1 ? s ? (o._stashedDisplay = o.style.display, o.style.display = "none") : (o.style.display = o._stashedDisplay || "", o.getAttribute("style") === "" && o.removeAttribute("style")) : o.nodeType === 3 && (s ? (o._stashedText = o.nodeValue, o.nodeValue = "") : o.nodeValue = o._stashedText || ""), c && c.nodeType === 8) if (o = c.data, o === "/$") {
        if (i === 0) break;
        i--;
      } else o !== "$" && o !== "$?" && o !== "$~" && o !== "$!" || i++;
      o = c;
    } while (o);
  }
  function Ch(i) {
    var s = i.firstChild;
    for (s && s.nodeType === 10 && (s = s.nextSibling); s; ) {
      var o = s;
      switch (s = s.nextSibling, o.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ch(o), kc(o);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (o.rel.toLowerCase() === "stylesheet") continue;
      }
      i.removeChild(o);
    }
  }
  function Zw(i, s, o, c) {
    for (; i.nodeType === 1; ) {
      var d = o;
      if (i.nodeName.toLowerCase() !== s.toLowerCase()) {
        if (!c && (i.nodeName !== "INPUT" || i.type !== "hidden")) break;
      } else if (c) {
        if (!i[$s]) switch (s) {
          case "meta":
            if (!i.hasAttribute("itemprop")) break;
            return i;
          case "link":
            if (m = i.getAttribute("rel"), m === "stylesheet" && i.hasAttribute("data-precedence")) break;
            if (m !== d.rel || i.getAttribute("href") !== (d.href == null || d.href === "" ? null : d.href) || i.getAttribute("crossorigin") !== (d.crossOrigin == null ? null : d.crossOrigin) || i.getAttribute("title") !== (d.title == null ? null : d.title)) break;
            return i;
          case "style":
            if (i.hasAttribute("data-precedence")) break;
            return i;
          case "script":
            if (m = i.getAttribute("src"), (m !== (d.src == null ? null : d.src) || i.getAttribute("type") !== (d.type == null ? null : d.type) || i.getAttribute("crossorigin") !== (d.crossOrigin == null ? null : d.crossOrigin)) && m && i.hasAttribute("async") && !i.hasAttribute("itemprop")) break;
            return i;
          default:
            return i;
        }
      } else if (s === "input" && i.type === "hidden") {
        var m = d.name == null ? null : "" + d.name;
        if (d.type === "hidden" && i.getAttribute("name") === m) return i;
      } else return i;
      if (i = yi(i.nextSibling), i === null) break;
    }
    return null;
  }
  function Ww(i, s, o) {
    if (s === "") return null;
    for (; i.nodeType !== 3; ) if ((i.nodeType !== 1 || i.nodeName !== "INPUT" || i.type !== "hidden") && !o || (i = yi(i.nextSibling), i === null)) return null;
    return i;
  }
  function Ay(i, s) {
    for (; i.nodeType !== 8; ) if ((i.nodeType !== 1 || i.nodeName !== "INPUT" || i.type !== "hidden") && !s || (i = yi(i.nextSibling), i === null)) return null;
    return i;
  }
  function Ah(i) {
    return i.data === "$?" || i.data === "$~";
  }
  function Mh(i) {
    return i.data === "$!" || i.data === "$?" && i.ownerDocument.readyState !== "loading";
  }
  function Jw(i, s) {
    var o = i.ownerDocument;
    if (i.data === "$~") i._reactRetry = s;
    else if (i.data !== "$?" || o.readyState !== "loading") s();
    else {
      var c = function() {
        s(), o.removeEventListener("DOMContentLoaded", c);
      };
      o.addEventListener("DOMContentLoaded", c), i._reactRetry = c;
    }
  }
  function yi(i) {
    for (; i != null; i = i.nextSibling) {
      var s = i.nodeType;
      if (s === 1 || s === 3) break;
      if (s === 8) {
        if (s = i.data, s === "$" || s === "$!" || s === "$?" || s === "$~" || s === "&" || s === "F!" || s === "F") break;
        if (s === "/$" || s === "/&") return null;
      }
    }
    return i;
  }
  var Th = null;
  function My(i) {
    i = i.nextSibling;
    for (var s = 0; i; ) {
      if (i.nodeType === 8) {
        var o = i.data;
        if (o === "/$" || o === "/&") {
          if (s === 0) return yi(i.nextSibling);
          s--;
        } else o !== "$" && o !== "$!" && o !== "$?" && o !== "$~" && o !== "&" || s++;
      }
      i = i.nextSibling;
    }
    return null;
  }
  function Ty(i) {
    i = i.previousSibling;
    for (var s = 0; i; ) {
      if (i.nodeType === 8) {
        var o = i.data;
        if (o === "$" || o === "$!" || o === "$?" || o === "$~" || o === "&") {
          if (s === 0) return i;
          s--;
        } else o !== "/$" && o !== "/&" || s++;
      }
      i = i.previousSibling;
    }
    return null;
  }
  function ky(i, s, o) {
    switch (s = Uo(o), i) {
      case "html":
        if (i = s.documentElement, !i) throw Error(n(452));
        return i;
      case "head":
        if (i = s.head, !i) throw Error(n(453));
        return i;
      case "body":
        if (i = s.body, !i) throw Error(n(454));
        return i;
      default:
        throw Error(n(451));
    }
  }
  function _r(i) {
    for (var s = i.attributes; s.length; ) i.removeAttributeNode(s[0]);
    kc(i);
  }
  var bi = /* @__PURE__ */ new Map(), Oy = /* @__PURE__ */ new Set();
  function Vo(i) {
    return typeof i.getRootNode == "function" ? i.getRootNode() : i.nodeType === 9 ? i : i.ownerDocument;
  }
  var pn = Z.d;
  Z.d = { f: Fw, r: Pw, D: Iw, C: $w, L: tC, m: eC, X: nC, S: iC, M: lC };
  function Fw() {
    var i = pn.f(), s = Eo();
    return i || s;
  }
  function Pw(i) {
    var s = Xl(i);
    s !== null && s.tag === 5 && s.type === "form" ? Kp(s) : pn.r(i);
  }
  var ws = typeof document > "u" ? null : document;
  function Dy(i, s, o) {
    var c = ws;
    if (c && typeof s == "string" && s) {
      var d = ci(s);
      d = 'link[rel="' + i + '"][href="' + d + '"]', typeof o == "string" && (d += '[crossorigin="' + o + '"]'), Oy.has(d) || (Oy.add(d), i = { rel: i, crossOrigin: o, href: s }, c.querySelector(d) === null && (s = c.createElement("link"), xe(s, "link", i), me(s), c.head.appendChild(s)));
    }
  }
  function Iw(i) {
    pn.D(i), Dy("dns-prefetch", i, null);
  }
  function $w(i, s) {
    pn.C(i, s), Dy("preconnect", i, s);
  }
  function tC(i, s, o) {
    pn.L(i, s, o);
    var c = ws;
    if (c && i && s) {
      var d = 'link[rel="preload"][as="' + ci(s) + '"]';
      s === "image" && o && o.imageSrcSet ? (d += '[imagesrcset="' + ci(o.imageSrcSet) + '"]', typeof o.imageSizes == "string" && (d += '[imagesizes="' + ci(o.imageSizes) + '"]')) : d += '[href="' + ci(i) + '"]';
      var m = d;
      switch (s) {
        case "style":
          m = Cs(i);
          break;
        case "script":
          m = As(i);
      }
      bi.has(m) || (i = y({ rel: "preload", href: s === "image" && o && o.imageSrcSet ? void 0 : i, as: s }, o), bi.set(m, i), c.querySelector(d) !== null || s === "style" && c.querySelector(Lr(m)) || s === "script" && c.querySelector(Hr(m)) || (s = c.createElement("link"), xe(s, "link", i), me(s), c.head.appendChild(s)));
    }
  }
  function eC(i, s) {
    pn.m(i, s);
    var o = ws;
    if (o && i) {
      var c = s && typeof s.as == "string" ? s.as : "script", d = 'link[rel="modulepreload"][as="' + ci(c) + '"][href="' + ci(i) + '"]', m = d;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          m = As(i);
      }
      if (!bi.has(m) && (i = y({ rel: "modulepreload", href: i }, s), bi.set(m, i), o.querySelector(d) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (o.querySelector(Hr(m))) return;
        }
        c = o.createElement("link"), xe(c, "link", i), me(c), o.head.appendChild(c);
      }
    }
  }
  function iC(i, s, o) {
    pn.S(i, s, o);
    var c = ws;
    if (c && i) {
      var d = Kl(c).hoistableStyles, m = Cs(i);
      s = s || "default";
      var b = d.get(m);
      if (!b) {
        var x = { loading: 0, preload: null };
        if (b = c.querySelector(Lr(m))) x.loading = 5;
        else {
          i = y({ rel: "stylesheet", href: i, "data-precedence": s }, o), (o = bi.get(m)) && kh(i, o);
          var A = b = c.createElement("link");
          me(A), xe(A, "link", i), A._p = new Promise(function(B, U) {
            A.onload = B, A.onerror = U;
          }), A.addEventListener("load", function() {
            x.loading |= 1;
          }), A.addEventListener("error", function() {
            x.loading |= 2;
          }), x.loading |= 4, qo(b, s, c);
        }
        b = { type: "stylesheet", instance: b, count: 1, state: x }, d.set(m, b);
      }
    }
  }
  function nC(i, s) {
    pn.X(i, s);
    var o = ws;
    if (o && i) {
      var c = Kl(o).hoistableScripts, d = As(i), m = c.get(d);
      m || (m = o.querySelector(Hr(d)), m || (i = y({ src: i, async: true }, s), (s = bi.get(d)) && Oh(i, s), m = o.createElement("script"), me(m), xe(m, "link", i), o.head.appendChild(m)), m = { type: "script", instance: m, count: 1, state: null }, c.set(d, m));
    }
  }
  function lC(i, s) {
    pn.M(i, s);
    var o = ws;
    if (o && i) {
      var c = Kl(o).hoistableScripts, d = As(i), m = c.get(d);
      m || (m = o.querySelector(Hr(d)), m || (i = y({ src: i, async: true, type: "module" }, s), (s = bi.get(d)) && Oh(i, s), m = o.createElement("script"), me(m), xe(m, "link", i), o.head.appendChild(m)), m = { type: "script", instance: m, count: 1, state: null }, c.set(d, m));
    }
  }
  function Ey(i, s, o, c) {
    var d = (d = bt.current) ? Vo(d) : null;
    if (!d) throw Error(n(446));
    switch (i) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof o.precedence == "string" && typeof o.href == "string" ? (s = Cs(o.href), o = Kl(d).hoistableStyles, c = o.get(s), c || (c = { type: "style", instance: null, count: 0, state: null }, o.set(s, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (o.rel === "stylesheet" && typeof o.href == "string" && typeof o.precedence == "string") {
          i = Cs(o.href);
          var m = Kl(d).hoistableStyles, b = m.get(i);
          if (b || (d = d.ownerDocument || d, b = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, m.set(i, b), (m = d.querySelector(Lr(i))) && !m._p && (b.instance = m, b.state.loading = 5), bi.has(i) || (o = { rel: "preload", as: "style", href: o.href, crossOrigin: o.crossOrigin, integrity: o.integrity, media: o.media, hrefLang: o.hrefLang, referrerPolicy: o.referrerPolicy }, bi.set(i, o), m || sC(d, i, o, b.state))), s && c === null) throw Error(n(528, ""));
          return b;
        }
        if (s && c !== null) throw Error(n(529, ""));
        return null;
      case "script":
        return s = o.async, o = o.src, typeof o == "string" && s && typeof s != "function" && typeof s != "symbol" ? (s = As(o), o = Kl(d).hoistableScripts, c = o.get(s), c || (c = { type: "script", instance: null, count: 0, state: null }, o.set(s, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(n(444, i));
    }
  }
  function Cs(i) {
    return 'href="' + ci(i) + '"';
  }
  function Lr(i) {
    return 'link[rel="stylesheet"][' + i + "]";
  }
  function By(i) {
    return y({}, i, { "data-precedence": i.precedence, precedence: null });
  }
  function sC(i, s, o, c) {
    i.querySelector('link[rel="preload"][as="style"][' + s + "]") ? c.loading = 1 : (s = i.createElement("link"), c.preload = s, s.addEventListener("load", function() {
      return c.loading |= 1;
    }), s.addEventListener("error", function() {
      return c.loading |= 2;
    }), xe(s, "link", o), me(s), i.head.appendChild(s));
  }
  function As(i) {
    return '[src="' + ci(i) + '"]';
  }
  function Hr(i) {
    return "script[async]" + i;
  }
  function Ry(i, s, o) {
    if (s.count++, s.instance === null) switch (s.type) {
      case "style":
        var c = i.querySelector('style[data-href~="' + ci(o.href) + '"]');
        if (c) return s.instance = c, me(c), c;
        var d = y({}, o, { "data-href": o.href, "data-precedence": o.precedence, href: null, precedence: null });
        return c = (i.ownerDocument || i).createElement("style"), me(c), xe(c, "style", d), qo(c, o.precedence, i), s.instance = c;
      case "stylesheet":
        d = Cs(o.href);
        var m = i.querySelector(Lr(d));
        if (m) return s.state.loading |= 4, s.instance = m, me(m), m;
        c = By(o), (d = bi.get(d)) && kh(c, d), m = (i.ownerDocument || i).createElement("link"), me(m);
        var b = m;
        return b._p = new Promise(function(x, A) {
          b.onload = x, b.onerror = A;
        }), xe(m, "link", c), s.state.loading |= 4, qo(m, o.precedence, i), s.instance = m;
      case "script":
        return m = As(o.src), (d = i.querySelector(Hr(m))) ? (s.instance = d, me(d), d) : (c = o, (d = bi.get(m)) && (c = y({}, o), Oh(c, d)), i = i.ownerDocument || i, d = i.createElement("script"), me(d), xe(d, "link", c), i.head.appendChild(d), s.instance = d);
      case "void":
        return null;
      default:
        throw Error(n(443, s.type));
    }
    else s.type === "stylesheet" && (s.state.loading & 4) === 0 && (c = s.instance, s.state.loading |= 4, qo(c, o.precedence, i));
    return s.instance;
  }
  function qo(i, s, o) {
    for (var c = o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), d = c.length ? c[c.length - 1] : null, m = d, b = 0; b < c.length; b++) {
      var x = c[b];
      if (x.dataset.precedence === s) m = x;
      else if (m !== d) break;
    }
    m ? m.parentNode.insertBefore(i, m.nextSibling) : (s = o.nodeType === 9 ? o.head : o, s.insertBefore(i, s.firstChild));
  }
  function kh(i, s) {
    i.crossOrigin == null && (i.crossOrigin = s.crossOrigin), i.referrerPolicy == null && (i.referrerPolicy = s.referrerPolicy), i.title == null && (i.title = s.title);
  }
  function Oh(i, s) {
    i.crossOrigin == null && (i.crossOrigin = s.crossOrigin), i.referrerPolicy == null && (i.referrerPolicy = s.referrerPolicy), i.integrity == null && (i.integrity = s.integrity);
  }
  var jo = null;
  function zy(i, s, o) {
    if (jo === null) {
      var c = /* @__PURE__ */ new Map(), d = jo = /* @__PURE__ */ new Map();
      d.set(o, c);
    } else d = jo, c = d.get(o), c || (c = /* @__PURE__ */ new Map(), d.set(o, c));
    if (c.has(i)) return c;
    for (c.set(i, null), o = o.getElementsByTagName(i), d = 0; d < o.length; d++) {
      var m = o[d];
      if (!(m[$s] || m[ye] || i === "link" && m.getAttribute("rel") === "stylesheet") && m.namespaceURI !== "http://www.w3.org/2000/svg") {
        var b = m.getAttribute(s) || "";
        b = i + b;
        var x = c.get(b);
        x ? x.push(m) : c.set(b, [m]);
      }
    }
    return c;
  }
  function Ny(i, s, o) {
    i = i.ownerDocument || i, i.head.insertBefore(o, s === "title" ? i.querySelector("head > title") : null);
  }
  function rC(i, s, o) {
    if (o === 1 || s.itemProp != null) return false;
    switch (i) {
      case "meta":
      case "title":
        return true;
      case "style":
        if (typeof s.precedence != "string" || typeof s.href != "string" || s.href === "") break;
        return true;
      case "link":
        if (typeof s.rel != "string" || typeof s.href != "string" || s.href === "" || s.onLoad || s.onError) break;
        switch (s.rel) {
          case "stylesheet":
            return i = s.disabled, typeof s.precedence == "string" && i == null;
          default:
            return true;
        }
      case "script":
        if (s.async && typeof s.async != "function" && typeof s.async != "symbol" && !s.onLoad && !s.onError && s.src && typeof s.src == "string") return true;
    }
    return false;
  }
  function _y(i) {
    return !(i.type === "stylesheet" && (i.state.loading & 3) === 0);
  }
  function aC(i, s, o, c) {
    if (o.type === "stylesheet" && (typeof c.media != "string" || matchMedia(c.media).matches !== false) && (o.state.loading & 4) === 0) {
      if (o.instance === null) {
        var d = Cs(c.href), m = s.querySelector(Lr(d));
        if (m) {
          s = m._p, s !== null && typeof s == "object" && typeof s.then == "function" && (i.count++, i = Yo.bind(i), s.then(i, i)), o.state.loading |= 4, o.instance = m, me(m);
          return;
        }
        m = s.ownerDocument || s, c = By(c), (d = bi.get(d)) && kh(c, d), m = m.createElement("link"), me(m);
        var b = m;
        b._p = new Promise(function(x, A) {
          b.onload = x, b.onerror = A;
        }), xe(m, "link", c), o.instance = m;
      }
      i.stylesheets === null && (i.stylesheets = /* @__PURE__ */ new Map()), i.stylesheets.set(o, s), (s = o.state.preload) && (o.state.loading & 3) === 0 && (i.count++, o = Yo.bind(i), s.addEventListener("load", o), s.addEventListener("error", o));
    }
  }
  var Dh = 0;
  function oC(i, s) {
    return i.stylesheets && i.count === 0 && Xo(i, i.stylesheets), 0 < i.count || 0 < i.imgCount ? function(o) {
      var c = setTimeout(function() {
        if (i.stylesheets && Xo(i, i.stylesheets), i.unsuspend) {
          var m = i.unsuspend;
          i.unsuspend = null, m();
        }
      }, 6e4 + s);
      0 < i.imgBytes && Dh === 0 && (Dh = 62500 * Yw());
      var d = setTimeout(function() {
        if (i.waitingForImages = false, i.count === 0 && (i.stylesheets && Xo(i, i.stylesheets), i.unsuspend)) {
          var m = i.unsuspend;
          i.unsuspend = null, m();
        }
      }, (i.imgBytes > Dh ? 50 : 800) + s);
      return i.unsuspend = o, function() {
        i.unsuspend = null, clearTimeout(c), clearTimeout(d);
      };
    } : null;
  }
  function Yo() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Xo(this, this.stylesheets);
      else if (this.unsuspend) {
        var i = this.unsuspend;
        this.unsuspend = null, i();
      }
    }
  }
  var Go = null;
  function Xo(i, s) {
    i.stylesheets = null, i.unsuspend !== null && (i.count++, Go = /* @__PURE__ */ new Map(), s.forEach(uC, i), Go = null, Yo.call(i));
  }
  function uC(i, s) {
    if (!(s.state.loading & 4)) {
      var o = Go.get(i);
      if (o) var c = o.get(null);
      else {
        o = /* @__PURE__ */ new Map(), Go.set(i, o);
        for (var d = i.querySelectorAll("link[data-precedence],style[data-precedence]"), m = 0; m < d.length; m++) {
          var b = d[m];
          (b.nodeName === "LINK" || b.getAttribute("media") !== "not all") && (o.set(b.dataset.precedence, b), c = b);
        }
        c && o.set(null, c);
      }
      d = s.instance, b = d.getAttribute("data-precedence"), m = o.get(b) || c, m === c && o.set(null, d), o.set(b, d), this.count++, c = Yo.bind(this), d.addEventListener("load", c), d.addEventListener("error", c), m ? m.parentNode.insertBefore(d, m.nextSibling) : (i = i.nodeType === 9 ? i.head : i, i.insertBefore(d, i.firstChild)), s.state.loading |= 4;
    }
  }
  var Ur = { $$typeof: L, Provider: null, Consumer: null, _currentValue: it, _currentValue2: it, _threadCount: 0 };
  function cC(i, s, o, c, d, m, b, x, A) {
    this.tag = 1, this.containerInfo = i, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Cc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Cc(0), this.hiddenUpdates = Cc(null), this.identifierPrefix = c, this.onUncaughtError = d, this.onCaughtError = m, this.onRecoverableError = b, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = A, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Ly(i, s, o, c, d, m, b, x, A, B, U, X) {
    return i = new cC(i, s, o, b, A, B, U, X, x), s = 1, m === true && (s |= 24), m = ti(3, null, null, s), i.current = m, m.stateNode = i, s = of(), s.refCount++, i.pooledCache = s, s.refCount++, m.memoizedState = { element: c, isDehydrated: o, cache: s }, hf(m), i;
  }
  function Hy(i) {
    return i ? (i = es, i) : es;
  }
  function Uy(i, s, o, c, d, m) {
    d = Hy(d), c.context === null ? c.context = d : c.pendingContext = d, c = Rn(s), c.payload = { element: o }, m = m === void 0 ? null : m, m !== null && (c.callback = m), o = zn(i, c, s), o !== null && (Ke(o, i, s), pr(o, i, s));
  }
  function Vy(i, s) {
    if (i = i.memoizedState, i !== null && i.dehydrated !== null) {
      var o = i.retryLane;
      i.retryLane = o !== 0 && o < s ? o : s;
    }
  }
  function Eh(i, s) {
    Vy(i, s), (i = i.alternate) && Vy(i, s);
  }
  function qy(i) {
    if (i.tag === 13 || i.tag === 31) {
      var s = ml(i, 67108864);
      s !== null && Ke(s, i, 67108864), Eh(i, 67108864);
    }
  }
  function jy(i) {
    if (i.tag === 13 || i.tag === 31) {
      var s = si();
      s = Ac(s);
      var o = ml(i, s);
      o !== null && Ke(o, i, s), Eh(i, s);
    }
  }
  var Ko = true;
  function fC(i, s, o, c) {
    var d = z.T;
    z.T = null;
    var m = Z.p;
    try {
      Z.p = 2, Bh(i, s, o, c);
    } finally {
      Z.p = m, z.T = d;
    }
  }
  function hC(i, s, o, c) {
    var d = z.T;
    z.T = null;
    var m = Z.p;
    try {
      Z.p = 8, Bh(i, s, o, c);
    } finally {
      Z.p = m, z.T = d;
    }
  }
  function Bh(i, s, o, c) {
    if (Ko) {
      var d = Rh(c);
      if (d === null) yh(i, s, c, Qo, o), Gy(i, c);
      else if (mC(d, i, s, o, c)) c.stopPropagation();
      else if (Gy(i, c), s & 4 && -1 < dC.indexOf(i)) {
        for (; d !== null; ) {
          var m = Xl(d);
          if (m !== null) switch (m.tag) {
            case 3:
              if (m = m.stateNode, m.current.memoizedState.isDehydrated) {
                var b = ul(m.pendingLanes);
                if (b !== 0) {
                  var x = m;
                  for (x.pendingLanes |= 2, x.entangledLanes |= 2; b; ) {
                    var A = 1 << 31 - Ie(b);
                    x.entanglements[1] |= A, b &= ~A;
                  }
                  Hi(m), (_t & 6) === 0 && (Oo = Fe() + 500, Rr(0));
                }
              }
              break;
            case 31:
            case 13:
              x = ml(m, 2), x !== null && Ke(x, m, 2), Eo(), Eh(m, 2);
          }
          if (m = Rh(c), m === null && yh(i, s, c, Qo, o), m === d) break;
          d = m;
        }
        d !== null && c.stopPropagation();
      } else yh(i, s, c, null, o);
    }
  }
  function Rh(i) {
    return i = zc(i), zh(i);
  }
  var Qo = null;
  function zh(i) {
    if (Qo = null, i = Gl(i), i !== null) {
      var s = a(i);
      if (s === null) i = null;
      else {
        var o = s.tag;
        if (o === 13) {
          if (i = u(s), i !== null) return i;
          i = null;
        } else if (o === 31) {
          if (i = f(s), i !== null) return i;
          i = null;
        } else if (o === 3) {
          if (s.stateNode.current.memoizedState.isDehydrated) return s.tag === 3 ? s.stateNode.containerInfo : null;
          i = null;
        } else s !== i && (i = null);
      }
    }
    return Qo = i, null;
  }
  function Yy(i) {
    switch (i) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ix()) {
          case Fm:
            return 2;
          case Pm:
            return 8;
          case Na:
          case $x:
            return 32;
          case Im:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Nh = false, Xn = null, Kn = null, Qn = null, Vr = /* @__PURE__ */ new Map(), qr = /* @__PURE__ */ new Map(), Zn = [], dC = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function Gy(i, s) {
    switch (i) {
      case "focusin":
      case "focusout":
        Xn = null;
        break;
      case "dragenter":
      case "dragleave":
        Kn = null;
        break;
      case "mouseover":
      case "mouseout":
        Qn = null;
        break;
      case "pointerover":
      case "pointerout":
        Vr.delete(s.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        qr.delete(s.pointerId);
    }
  }
  function jr(i, s, o, c, d, m) {
    return i === null || i.nativeEvent !== m ? (i = { blockedOn: s, domEventName: o, eventSystemFlags: c, nativeEvent: m, targetContainers: [d] }, s !== null && (s = Xl(s), s !== null && qy(s)), i) : (i.eventSystemFlags |= c, s = i.targetContainers, d !== null && s.indexOf(d) === -1 && s.push(d), i);
  }
  function mC(i, s, o, c, d) {
    switch (s) {
      case "focusin":
        return Xn = jr(Xn, i, s, o, c, d), true;
      case "dragenter":
        return Kn = jr(Kn, i, s, o, c, d), true;
      case "mouseover":
        return Qn = jr(Qn, i, s, o, c, d), true;
      case "pointerover":
        var m = d.pointerId;
        return Vr.set(m, jr(Vr.get(m) || null, i, s, o, c, d)), true;
      case "gotpointercapture":
        return m = d.pointerId, qr.set(m, jr(qr.get(m) || null, i, s, o, c, d)), true;
    }
    return false;
  }
  function Xy(i) {
    var s = Gl(i.target);
    if (s !== null) {
      var o = a(s);
      if (o !== null) {
        if (s = o.tag, s === 13) {
          if (s = u(o), s !== null) {
            i.blockedOn = s, lg(i.priority, function() {
              jy(o);
            });
            return;
          }
        } else if (s === 31) {
          if (s = f(o), s !== null) {
            i.blockedOn = s, lg(i.priority, function() {
              jy(o);
            });
            return;
          }
        } else if (s === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          i.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    i.blockedOn = null;
  }
  function Zo(i) {
    if (i.blockedOn !== null) return false;
    for (var s = i.targetContainers; 0 < s.length; ) {
      var o = Rh(i.nativeEvent);
      if (o === null) {
        o = i.nativeEvent;
        var c = new o.constructor(o.type, o);
        Rc = c, o.target.dispatchEvent(c), Rc = null;
      } else return s = Xl(o), s !== null && qy(s), i.blockedOn = o, false;
      s.shift();
    }
    return true;
  }
  function Ky(i, s, o) {
    Zo(i) && o.delete(s);
  }
  function gC() {
    Nh = false, Xn !== null && Zo(Xn) && (Xn = null), Kn !== null && Zo(Kn) && (Kn = null), Qn !== null && Zo(Qn) && (Qn = null), Vr.forEach(Ky), qr.forEach(Ky);
  }
  function Wo(i, s) {
    i.blockedOn === s && (i.blockedOn = null, Nh || (Nh = true, l.unstable_scheduleCallback(l.unstable_NormalPriority, gC)));
  }
  var Jo = null;
  function Qy(i) {
    Jo !== i && (Jo = i, l.unstable_scheduleCallback(l.unstable_NormalPriority, function() {
      Jo === i && (Jo = null);
      for (var s = 0; s < i.length; s += 3) {
        var o = i[s], c = i[s + 1], d = i[s + 2];
        if (typeof c != "function") {
          if (zh(c || o) === null) continue;
          break;
        }
        var m = Xl(o);
        m !== null && (i.splice(s, 3), s -= 3, Rf(m, { pending: true, data: d, method: o.method, action: c }, c, d));
      }
    }));
  }
  function Ms(i) {
    function s(A) {
      return Wo(A, i);
    }
    Xn !== null && Wo(Xn, i), Kn !== null && Wo(Kn, i), Qn !== null && Wo(Qn, i), Vr.forEach(s), qr.forEach(s);
    for (var o = 0; o < Zn.length; o++) {
      var c = Zn[o];
      c.blockedOn === i && (c.blockedOn = null);
    }
    for (; 0 < Zn.length && (o = Zn[0], o.blockedOn === null); ) Xy(o), o.blockedOn === null && Zn.shift();
    if (o = (i.ownerDocument || i).$$reactFormReplay, o != null) for (c = 0; c < o.length; c += 3) {
      var d = o[c], m = o[c + 1], b = d[Ve] || null;
      if (typeof m == "function") b || Qy(o);
      else if (b) {
        var x = null;
        if (m && m.hasAttribute("formAction")) {
          if (d = m, b = m[Ve] || null) x = b.formAction;
          else if (zh(d) !== null) continue;
        } else x = b.action;
        typeof x == "function" ? o[c + 1] = x : (o.splice(c, 3), c -= 3), Qy(o);
      }
    }
  }
  function Zy() {
    function i(m) {
      m.canIntercept && m.info === "react-transition" && m.intercept({ handler: function() {
        return new Promise(function(b) {
          return d = b;
        });
      }, focusReset: "manual", scroll: "manual" });
    }
    function s() {
      d !== null && (d(), d = null), c || setTimeout(o, 20);
    }
    function o() {
      if (!c && !navigation.transition) {
        var m = navigation.currentEntry;
        m && m.url != null && navigation.navigate(m.url, { state: m.getState(), info: "react-transition", history: "replace" });
      }
    }
    if (typeof navigation == "object") {
      var c = false, d = null;
      return navigation.addEventListener("navigate", i), navigation.addEventListener("navigatesuccess", s), navigation.addEventListener("navigateerror", s), setTimeout(o, 100), function() {
        c = true, navigation.removeEventListener("navigate", i), navigation.removeEventListener("navigatesuccess", s), navigation.removeEventListener("navigateerror", s), d !== null && (d(), d = null);
      };
    }
  }
  function _h(i) {
    this._internalRoot = i;
  }
  Fo.prototype.render = _h.prototype.render = function(i) {
    var s = this._internalRoot;
    if (s === null) throw Error(n(409));
    var o = s.current, c = si();
    Uy(o, c, i, s, null, null);
  }, Fo.prototype.unmount = _h.prototype.unmount = function() {
    var i = this._internalRoot;
    if (i !== null) {
      this._internalRoot = null;
      var s = i.containerInfo;
      Uy(i.current, 2, null, i, null, null), Eo(), s[Yl] = null;
    }
  };
  function Fo(i) {
    this._internalRoot = i;
  }
  Fo.prototype.unstable_scheduleHydration = function(i) {
    if (i) {
      var s = ng();
      i = { blockedOn: null, target: i, priority: s };
      for (var o = 0; o < Zn.length && s !== 0 && s < Zn[o].priority; o++) ;
      Zn.splice(o, 0, i), o === 0 && Xy(i);
    }
  };
  var Wy = t.version;
  if (Wy !== "19.2.1") throw Error(n(527, Wy, "19.2.1"));
  Z.findDOMNode = function(i) {
    var s = i._reactInternals;
    if (s === void 0) throw typeof i.render == "function" ? Error(n(188)) : (i = Object.keys(i).join(","), Error(n(268, i)));
    return i = g(s), i = i !== null ? p(i) : null, i = i === null ? null : i.stateNode, i;
  };
  var pC = { bundleType: 0, version: "19.2.1", rendererPackageName: "react-dom", currentDispatcherRef: z, reconcilerVersion: "19.2.1" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Po = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Po.isDisabled && Po.supportsFiber) try {
      Fs = Po.inject(pC), Pe = Po;
    } catch {
    }
  }
  return Gr.createRoot = function(i, s) {
    if (!r(i)) throw Error(n(299));
    var o = false, c = "", d = e0, m = i0, b = n0;
    return s != null && (s.unstable_strictMode === true && (o = true), s.identifierPrefix !== void 0 && (c = s.identifierPrefix), s.onUncaughtError !== void 0 && (d = s.onUncaughtError), s.onCaughtError !== void 0 && (m = s.onCaughtError), s.onRecoverableError !== void 0 && (b = s.onRecoverableError)), s = Ly(i, 1, false, null, null, o, c, null, d, m, b, Zy), i[Yl] = s.current, ph(i), new _h(s);
  }, Gr.hydrateRoot = function(i, s, o) {
    if (!r(i)) throw Error(n(299));
    var c = false, d = "", m = e0, b = i0, x = n0, A = null;
    return o != null && (o.unstable_strictMode === true && (c = true), o.identifierPrefix !== void 0 && (d = o.identifierPrefix), o.onUncaughtError !== void 0 && (m = o.onUncaughtError), o.onCaughtError !== void 0 && (b = o.onCaughtError), o.onRecoverableError !== void 0 && (x = o.onRecoverableError), o.formState !== void 0 && (A = o.formState)), s = Ly(i, 1, true, s, o ?? null, c, d, A, m, b, x, Zy), s.context = Hy(null), o = s.current, c = si(), c = Ac(c), d = Rn(c), d.callback = null, zn(o, d, c), o = c, s.current.lanes = o, Is(s, o), Hi(s), i[Yl] = s.current, ph(i), new Fo(s);
  }, Gr.version = "19.2.1", Gr;
}
var l1;
function TC() {
  if (l1) return Uh.exports;
  l1 = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
    } catch (t) {
      console.error(t);
    }
  }
  return l(), Uh.exports = MC(), Uh.exports;
}
var kC = TC();
class Hs {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(Hs.prototype);
    return e.__wbg_ptr = t, Yh.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Yh.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    te.__wbg_bithovenoutput_free(t, 0);
  }
  get asm() {
    let t, e;
    try {
      const n = te.bithovenoutput_asm(this.__wbg_ptr);
      return t = n[0], e = n[1], s1(n[0], n[1]);
    } finally {
      te.__wbindgen_free(t, e, 1);
    }
  }
  get bytes() {
    const t = te.bithovenoutput_bytes(this.__wbg_ptr);
    var e = DC(t[0], t[1]).slice();
    return te.__wbindgen_free(t[0], t[1] * 1, 1), e;
  }
  static from_object(t) {
    const e = te.bithovenoutput_from_object(t);
    return Hs.__wrap(e);
  }
  get hex() {
    let t, e;
    try {
      const n = te.bithovenoutput_hex(this.__wbg_ptr);
      return t = n[0], e = n[1], s1(n[0], n[1]);
    } finally {
      te.__wbindgen_free(t, e, 1);
    }
  }
  constructor(t, e, n) {
    const r = bd(t, te.__wbindgen_malloc, te.__wbindgen_realloc), a = zl, u = bd(e, te.__wbindgen_malloc, te.__wbindgen_realloc), f = zl, h = EC(n, te.__wbindgen_malloc), g = zl, p = te.bithovenoutput_new(r, a, u, f, h, g);
    return this.__wbg_ptr = p >>> 0, Yh.register(this, this.__wbg_ptr, this), this;
  }
  to_object() {
    return te.bithovenoutput_to_object(this.__wbg_ptr);
  }
}
Symbol.dispose && (Hs.prototype[Symbol.dispose] = Hs.prototype.free);
function OC(l) {
  const t = bd(l, te.__wbindgen_malloc, te.__wbindgen_realloc), e = zl, n = te.compile_program(t, e);
  if (n[2]) throw BC(n[1]);
  return Hs.__wrap(n[0]);
}
const Yh = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((l) => te.__wbg_bithovenoutput_free(l >>> 0, 1));
function DC(l, t) {
  return l = l >>> 0, Bs().subarray(l / 1, l / 1 + t);
}
function s1(l, t) {
  return l = l >>> 0, zC(l, t);
}
let Io = null;
function Bs() {
  return (Io === null || Io.byteLength === 0) && (Io = new Uint8Array(te.memory.buffer)), Io;
}
function EC(l, t) {
  const e = t(l.length * 1, 1) >>> 0;
  return Bs().set(l, e / 1), zl = l.length, e;
}
function bd(l, t, e) {
  if (e === void 0) {
    const f = ta.encode(l), h = t(f.length, 1) >>> 0;
    return Bs().subarray(h, h + f.length).set(f), zl = f.length, h;
  }
  let n = l.length, r = t(n, 1) >>> 0;
  const a = Bs();
  let u = 0;
  for (; u < n; u++) {
    const f = l.charCodeAt(u);
    if (f > 127) break;
    a[r + u] = f;
  }
  if (u !== n) {
    u !== 0 && (l = l.slice(u)), r = e(r, n, n = u + l.length * 3, 1) >>> 0;
    const f = Bs().subarray(r + u, r + n), h = ta.encodeInto(l, f);
    u += h.written, r = e(r, n, u, 1) >>> 0;
  }
  return zl = u, r;
}
function BC(l) {
  const t = te.__wbindgen_externrefs.get(l);
  return te.__externref_table_dealloc(l), t;
}
let Au = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
Au.decode();
const RC = 2146435072;
let Gh = 0;
function zC(l, t) {
  return Gh += t, Gh >= RC && (Au = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), Au.decode(), Gh = t), Au.decode(Bs().subarray(l, l + t));
}
const ta = new TextEncoder();
"encodeInto" in ta || (ta.encodeInto = function(l, t) {
  const e = ta.encode(l);
  return t.set(e), { read: l.length, written: e.length };
});
let zl = 0, te;
function vd() {
  return vd = Object.assign ? Object.assign.bind() : function(l) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var n in e) ({}).hasOwnProperty.call(e, n) && (l[n] = e[n]);
    }
    return l;
  }, vd.apply(null, arguments);
}
function NC(l, t) {
  if (l == null) return {};
  var e = {};
  for (var n in l) if ({}.hasOwnProperty.call(l, n)) {
    if (t.indexOf(n) !== -1) continue;
    e[n] = l[n];
  }
  return e;
}
let Sd = [], $b = [];
(() => {
  let l = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((t) => t ? parseInt(t, 36) : 1);
  for (let t = 0, e = 0; t < l.length; t++) (t % 2 ? $b : Sd).push(e = e + l[t]);
})();
function _C(l) {
  if (l < 768) return false;
  for (let t = 0, e = Sd.length; ; ) {
    let n = t + e >> 1;
    if (l < Sd[n]) e = n;
    else if (l >= $b[n]) t = n + 1;
    else return true;
    if (t == e) return false;
  }
}
function r1(l) {
  return l >= 127462 && l <= 127487;
}
const a1 = 8205;
function LC(l, t, e = true, n = true) {
  return (e ? tv : HC)(l, t, n);
}
function tv(l, t, e) {
  if (t == l.length) return t;
  t && ev(l.charCodeAt(t)) && iv(l.charCodeAt(t - 1)) && t--;
  let n = Xh(l, t);
  for (t += o1(n); t < l.length; ) {
    let r = Xh(l, t);
    if (n == a1 || r == a1 || e && _C(r)) t += o1(r), n = r;
    else if (r1(r)) {
      let a = 0, u = t - 2;
      for (; u >= 0 && r1(Xh(l, u)); ) a++, u -= 2;
      if (a % 2 == 0) break;
      t += 2;
    } else break;
  }
  return t;
}
function HC(l, t, e) {
  for (; t > 0; ) {
    let n = tv(l, t - 2, e);
    if (n < t) return n;
    t--;
  }
  return 0;
}
function Xh(l, t) {
  let e = l.charCodeAt(t);
  if (!iv(e) || t + 1 == l.length) return e;
  let n = l.charCodeAt(t + 1);
  return ev(n) ? (e - 55296 << 10) + (n - 56320) + 65536 : e;
}
function ev(l) {
  return l >= 56320 && l < 57344;
}
function iv(l) {
  return l >= 55296 && l < 56320;
}
function o1(l) {
  return l < 65536 ? 1 : 2;
}
class Rt {
  lineAt(t) {
    if (t < 0 || t > this.length) throw new RangeError(`Invalid position ${t} in document of length ${this.length}`);
    return this.lineInner(t, false, 1, 0);
  }
  line(t) {
    if (t < 1 || t > this.lines) throw new RangeError(`Invalid line number ${t} in ${this.lines}-line document`);
    return this.lineInner(t, true, 1, 0);
  }
  replace(t, e, n) {
    [t, e] = Us(this, t, e);
    let r = [];
    return this.decompose(0, t, r, 2), n.length && n.decompose(0, n.length, r, 3), this.decompose(e, this.length, r, 1), Yi.from(r, this.length - (e - t) + n.length);
  }
  append(t) {
    return this.replace(this.length, this.length, t);
  }
  slice(t, e = this.length) {
    [t, e] = Us(this, t, e);
    let n = [];
    return this.decompose(t, e, n, 0), Yi.from(n, e - t);
  }
  eq(t) {
    if (t == this) return true;
    if (t.length != this.length || t.lines != this.lines) return false;
    let e = this.scanIdentical(t, 1), n = this.length - this.scanIdentical(t, -1), r = new ea(this), a = new ea(t);
    for (let u = e, f = e; ; ) {
      if (r.next(u), a.next(u), u = 0, r.lineBreak != a.lineBreak || r.done != a.done || r.value != a.value) return false;
      if (f += r.value.length, r.done || f >= n) return true;
    }
  }
  iter(t = 1) {
    return new ea(this, t);
  }
  iterRange(t, e = this.length) {
    return new nv(this, t, e);
  }
  iterLines(t, e) {
    let n;
    if (t == null) n = this.iter();
    else {
      e == null && (e = this.lines + 1);
      let r = this.line(t).from;
      n = this.iterRange(r, Math.max(r, e == this.lines + 1 ? this.length : e <= 1 ? 0 : this.line(e - 1).to));
    }
    return new lv(n);
  }
  toString() {
    return this.sliceString(0);
  }
  toJSON() {
    let t = [];
    return this.flatten(t), t;
  }
  constructor() {
  }
  static of(t) {
    if (t.length == 0) throw new RangeError("A document must have at least one line");
    return t.length == 1 && !t[0] ? Rt.empty : t.length <= 32 ? new se(t) : Yi.from(se.split(t, []));
  }
}
class se extends Rt {
  constructor(t, e = UC(t)) {
    super(), this.text = t, this.length = e;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(t, e, n, r) {
    for (let a = 0; ; a++) {
      let u = this.text[a], f = r + u.length;
      if ((e ? n : f) >= t) return new VC(r, f, n, u);
      r = f + 1, n++;
    }
  }
  decompose(t, e, n, r) {
    let a = t <= 0 && e >= this.length ? this : new se(u1(this.text, t, e), Math.min(e, this.length) - Math.max(0, t));
    if (r & 1) {
      let u = n.pop(), f = Mu(a.text, u.text.slice(), 0, a.length);
      if (f.length <= 32) n.push(new se(f, u.length + a.length));
      else {
        let h = f.length >> 1;
        n.push(new se(f.slice(0, h)), new se(f.slice(h)));
      }
    } else n.push(a);
  }
  replace(t, e, n) {
    if (!(n instanceof se)) return super.replace(t, e, n);
    [t, e] = Us(this, t, e);
    let r = Mu(this.text, Mu(n.text, u1(this.text, 0, t)), e), a = this.length + n.length - (e - t);
    return r.length <= 32 ? new se(r, a) : Yi.from(se.split(r, []), a);
  }
  sliceString(t, e = this.length, n = `
`) {
    [t, e] = Us(this, t, e);
    let r = "";
    for (let a = 0, u = 0; a <= e && u < this.text.length; u++) {
      let f = this.text[u], h = a + f.length;
      a > t && u && (r += n), t < h && e > a && (r += f.slice(Math.max(0, t - a), e - a)), a = h + 1;
    }
    return r;
  }
  flatten(t) {
    for (let e of this.text) t.push(e);
  }
  scanIdentical() {
    return 0;
  }
  static split(t, e) {
    let n = [], r = -1;
    for (let a of t) n.push(a), r += a.length + 1, n.length == 32 && (e.push(new se(n, r)), n = [], r = -1);
    return r > -1 && e.push(new se(n, r)), e;
  }
}
class Yi extends Rt {
  constructor(t, e) {
    super(), this.children = t, this.length = e, this.lines = 0;
    for (let n of t) this.lines += n.lines;
  }
  lineInner(t, e, n, r) {
    for (let a = 0; ; a++) {
      let u = this.children[a], f = r + u.length, h = n + u.lines - 1;
      if ((e ? h : f) >= t) return u.lineInner(t, e, n, r);
      r = f + 1, n = h + 1;
    }
  }
  decompose(t, e, n, r) {
    for (let a = 0, u = 0; u <= e && a < this.children.length; a++) {
      let f = this.children[a], h = u + f.length;
      if (t <= h && e >= u) {
        let g = r & ((u <= t ? 1 : 0) | (h >= e ? 2 : 0));
        u >= t && h <= e && !g ? n.push(f) : f.decompose(t - u, e - u, n, g);
      }
      u = h + 1;
    }
  }
  replace(t, e, n) {
    if ([t, e] = Us(this, t, e), n.lines < this.lines) for (let r = 0, a = 0; r < this.children.length; r++) {
      let u = this.children[r], f = a + u.length;
      if (t >= a && e <= f) {
        let h = u.replace(t - a, e - a, n), g = this.lines - u.lines + h.lines;
        if (h.lines < g >> 4 && h.lines > g >> 6) {
          let p = this.children.slice();
          return p[r] = h, new Yi(p, this.length - (e - t) + n.length);
        }
        return super.replace(a, f, h);
      }
      a = f + 1;
    }
    return super.replace(t, e, n);
  }
  sliceString(t, e = this.length, n = `
`) {
    [t, e] = Us(this, t, e);
    let r = "";
    for (let a = 0, u = 0; a < this.children.length && u <= e; a++) {
      let f = this.children[a], h = u + f.length;
      u > t && a && (r += n), t < h && e > u && (r += f.sliceString(t - u, e - u, n)), u = h + 1;
    }
    return r;
  }
  flatten(t) {
    for (let e of this.children) e.flatten(t);
  }
  scanIdentical(t, e) {
    if (!(t instanceof Yi)) return 0;
    let n = 0, [r, a, u, f] = e > 0 ? [0, 0, this.children.length, t.children.length] : [this.children.length - 1, t.children.length - 1, -1, -1];
    for (; ; r += e, a += e) {
      if (r == u || a == f) return n;
      let h = this.children[r], g = t.children[a];
      if (h != g) return n + h.scanIdentical(g, e);
      n += h.length + 1;
    }
  }
  static from(t, e = t.reduce((n, r) => n + r.length + 1, -1)) {
    let n = 0;
    for (let S of t) n += S.lines;
    if (n < 32) {
      let S = [];
      for (let w of t) w.flatten(S);
      return new se(S, e);
    }
    let r = Math.max(32, n >> 5), a = r << 1, u = r >> 1, f = [], h = 0, g = -1, p = [];
    function y(S) {
      let w;
      if (S.lines > a && S instanceof Yi) for (let C of S.children) y(C);
      else S.lines > u && (h > u || !h) ? (v(), f.push(S)) : S instanceof se && h && (w = p[p.length - 1]) instanceof se && S.lines + w.lines <= 32 ? (h += S.lines, g += S.length + 1, p[p.length - 1] = new se(w.text.concat(S.text), w.length + 1 + S.length)) : (h + S.lines > r && v(), h += S.lines, g += S.length + 1, p.push(S));
    }
    function v() {
      h != 0 && (f.push(p.length == 1 ? p[0] : Yi.from(p, g)), g = -1, h = p.length = 0);
    }
    for (let S of t) y(S);
    return v(), f.length == 1 ? f[0] : new Yi(f, e);
  }
}
Rt.empty = new se([""], 0);
function UC(l) {
  let t = -1;
  for (let e of l) t += e.length + 1;
  return t;
}
function Mu(l, t, e = 0, n = 1e9) {
  for (let r = 0, a = 0, u = true; a < l.length && r <= n; a++) {
    let f = l[a], h = r + f.length;
    h >= e && (h > n && (f = f.slice(0, n - r)), r < e && (f = f.slice(e - r)), u ? (t[t.length - 1] += f, u = false) : t.push(f)), r = h + 1;
  }
  return t;
}
function u1(l, t, e) {
  return Mu(l, [""], t, e);
}
class ea {
  constructor(t, e = 1) {
    this.dir = e, this.done = false, this.lineBreak = false, this.value = "", this.nodes = [t], this.offsets = [e > 0 ? 1 : (t instanceof se ? t.text.length : t.children.length) << 1];
  }
  nextInner(t, e) {
    for (this.done = this.lineBreak = false; ; ) {
      let n = this.nodes.length - 1, r = this.nodes[n], a = this.offsets[n], u = a >> 1, f = r instanceof se ? r.text.length : r.children.length;
      if (u == (e > 0 ? f : 0)) {
        if (n == 0) return this.done = true, this.value = "", this;
        e > 0 && this.offsets[n - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((a & 1) == (e > 0 ? 0 : 1)) {
        if (this.offsets[n] += e, t == 0) return this.lineBreak = true, this.value = `
`, this;
        t--;
      } else if (r instanceof se) {
        let h = r.text[u + (e < 0 ? -1 : 0)];
        if (this.offsets[n] += e, h.length > Math.max(0, t)) return this.value = t == 0 ? h : e > 0 ? h.slice(t) : h.slice(0, h.length - t), this;
        t -= h.length;
      } else {
        let h = r.children[u + (e < 0 ? -1 : 0)];
        t > h.length ? (t -= h.length, this.offsets[n] += e) : (e < 0 && this.offsets[n]--, this.nodes.push(h), this.offsets.push(e > 0 ? 1 : (h instanceof se ? h.text.length : h.children.length) << 1));
      }
    }
  }
  next(t = 0) {
    return t < 0 && (this.nextInner(-t, -this.dir), t = this.value.length), this.nextInner(t, this.dir);
  }
}
class nv {
  constructor(t, e, n) {
    this.value = "", this.done = false, this.cursor = new ea(t, e > n ? -1 : 1), this.pos = e > n ? t.length : 0, this.from = Math.min(e, n), this.to = Math.max(e, n);
  }
  nextInner(t, e) {
    if (e < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = true, this;
    t += Math.max(0, e < 0 ? this.pos - this.to : this.from - this.pos);
    let n = e < 0 ? this.pos - this.from : this.to - this.pos;
    t > n && (t = n), n -= t;
    let { value: r } = this.cursor.next(t);
    return this.pos += (r.length + t) * e, this.value = r.length <= n ? r : e < 0 ? r.slice(r.length - n) : r.slice(0, n), this.done = !this.value, this;
  }
  next(t = 0) {
    return t < 0 ? t = Math.max(t, this.from - this.pos) : t > 0 && (t = Math.min(t, this.to - this.pos)), this.nextInner(t, this.cursor.dir);
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != "";
  }
}
class lv {
  constructor(t) {
    this.inner = t, this.afterBreak = true, this.value = "", this.done = false;
  }
  next(t = 0) {
    let { done: e, lineBreak: n, value: r } = this.inner.next(t);
    return e && this.afterBreak ? (this.value = "", this.afterBreak = false) : e ? (this.done = true, this.value = "") : n ? this.afterBreak ? this.value = "" : (this.afterBreak = true, this.next()) : (this.value = r, this.afterBreak = false), this;
  }
  get lineBreak() {
    return false;
  }
}
typeof Symbol < "u" && (Rt.prototype[Symbol.iterator] = function() {
  return this.iter();
}, ea.prototype[Symbol.iterator] = nv.prototype[Symbol.iterator] = lv.prototype[Symbol.iterator] = function() {
  return this;
});
class VC {
  constructor(t, e, n, r) {
    this.from = t, this.to = e, this.number = n, this.text = r;
  }
  get length() {
    return this.to - this.from;
  }
}
function Us(l, t, e) {
  return t = Math.max(0, Math.min(l.length, t)), [t, Math.max(t, Math.min(l.length, e))];
}
function Me(l, t, e = true, n = true) {
  return LC(l, t, e, n);
}
function qC(l) {
  return l >= 56320 && l < 57344;
}
function jC(l) {
  return l >= 55296 && l < 56320;
}
function Qe(l, t) {
  let e = l.charCodeAt(t);
  if (!jC(e) || t + 1 == l.length) return e;
  let n = l.charCodeAt(t + 1);
  return qC(n) ? (e - 55296 << 10) + (n - 56320) + 65536 : e;
}
function ym(l) {
  return l <= 65535 ? String.fromCharCode(l) : (l -= 65536, String.fromCharCode((l >> 10) + 55296, (l & 1023) + 56320));
}
function Gi(l) {
  return l < 65536 ? 1 : 2;
}
const xd = /\r\n?|\n/;
var Le = (function(l) {
  return l[l.Simple = 0] = "Simple", l[l.TrackDel = 1] = "TrackDel", l[l.TrackBefore = 2] = "TrackBefore", l[l.TrackAfter = 3] = "TrackAfter", l;
})(Le || (Le = {}));
class Wi {
  constructor(t) {
    this.sections = t;
  }
  get length() {
    let t = 0;
    for (let e = 0; e < this.sections.length; e += 2) t += this.sections[e];
    return t;
  }
  get newLength() {
    let t = 0;
    for (let e = 0; e < this.sections.length; e += 2) {
      let n = this.sections[e + 1];
      t += n < 0 ? this.sections[e] : n;
    }
    return t;
  }
  get empty() {
    return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
  }
  iterGaps(t) {
    for (let e = 0, n = 0, r = 0; e < this.sections.length; ) {
      let a = this.sections[e++], u = this.sections[e++];
      u < 0 ? (t(n, r, a), r += a) : r += u, n += a;
    }
  }
  iterChangedRanges(t, e = false) {
    wd(this, t, e);
  }
  get invertedDesc() {
    let t = [];
    for (let e = 0; e < this.sections.length; ) {
      let n = this.sections[e++], r = this.sections[e++];
      r < 0 ? t.push(n, r) : t.push(r, n);
    }
    return new Wi(t);
  }
  composeDesc(t) {
    return this.empty ? t : t.empty ? this : sv(this, t);
  }
  mapDesc(t, e = false) {
    return t.empty ? this : Cd(this, t, e);
  }
  mapPos(t, e = -1, n = Le.Simple) {
    let r = 0, a = 0;
    for (let u = 0; u < this.sections.length; ) {
      let f = this.sections[u++], h = this.sections[u++], g = r + f;
      if (h < 0) {
        if (g > t) return a + (t - r);
        a += f;
      } else {
        if (n != Le.Simple && g >= t && (n == Le.TrackDel && r < t && g > t || n == Le.TrackBefore && r < t || n == Le.TrackAfter && g > t)) return null;
        if (g > t || g == t && e < 0 && !f) return t == r || e < 0 ? a : a + h;
        a += h;
      }
      r = g;
    }
    if (t > r) throw new RangeError(`Position ${t} is out of range for changeset of length ${r}`);
    return a;
  }
  touchesRange(t, e = t) {
    for (let n = 0, r = 0; n < this.sections.length && r <= e; ) {
      let a = this.sections[n++], u = this.sections[n++], f = r + a;
      if (u >= 0 && r <= e && f >= t) return r < t && f > e ? "cover" : true;
      r = f;
    }
    return false;
  }
  toString() {
    let t = "";
    for (let e = 0; e < this.sections.length; ) {
      let n = this.sections[e++], r = this.sections[e++];
      t += (t ? " " : "") + n + (r >= 0 ? ":" + r : "");
    }
    return t;
  }
  toJSON() {
    return this.sections;
  }
  static fromJSON(t) {
    if (!Array.isArray(t) || t.length % 2 || t.some((e) => typeof e != "number")) throw new RangeError("Invalid JSON representation of ChangeDesc");
    return new Wi(t);
  }
  static create(t) {
    return new Wi(t);
  }
}
class he extends Wi {
  constructor(t, e) {
    super(t), this.inserted = e;
  }
  apply(t) {
    if (this.length != t.length) throw new RangeError("Applying change set to a document with the wrong length");
    return wd(this, (e, n, r, a, u) => t = t.replace(r, r + (n - e), u), false), t;
  }
  mapDesc(t, e = false) {
    return Cd(this, t, e, true);
  }
  invert(t) {
    let e = this.sections.slice(), n = [];
    for (let r = 0, a = 0; r < e.length; r += 2) {
      let u = e[r], f = e[r + 1];
      if (f >= 0) {
        e[r] = f, e[r + 1] = u;
        let h = r >> 1;
        for (; n.length < h; ) n.push(Rt.empty);
        n.push(u ? t.slice(a, a + u) : Rt.empty);
      }
      a += u;
    }
    return new he(e, n);
  }
  compose(t) {
    return this.empty ? t : t.empty ? this : sv(this, t, true);
  }
  map(t, e = false) {
    return t.empty ? this : Cd(this, t, e, true);
  }
  iterChanges(t, e = false) {
    wd(this, t, e);
  }
  get desc() {
    return Wi.create(this.sections);
  }
  filter(t) {
    let e = [], n = [], r = [], a = new oa(this);
    t: for (let u = 0, f = 0; ; ) {
      let h = u == t.length ? 1e9 : t[u++];
      for (; f < h || f == h && a.len == 0; ) {
        if (a.done) break t;
        let p = Math.min(a.len, h - f);
        Oe(r, p, -1);
        let y = a.ins == -1 ? -1 : a.off == 0 ? a.ins : 0;
        Oe(e, p, y), y > 0 && In(n, e, a.text), a.forward(p), f += p;
      }
      let g = t[u++];
      for (; f < g; ) {
        if (a.done) break t;
        let p = Math.min(a.len, g - f);
        Oe(e, p, -1), Oe(r, p, a.ins == -1 ? -1 : a.off == 0 ? a.ins : 0), a.forward(p), f += p;
      }
    }
    return { changes: new he(e, n), filtered: Wi.create(r) };
  }
  toJSON() {
    let t = [];
    for (let e = 0; e < this.sections.length; e += 2) {
      let n = this.sections[e], r = this.sections[e + 1];
      r < 0 ? t.push(n) : r == 0 ? t.push([n]) : t.push([n].concat(this.inserted[e >> 1].toJSON()));
    }
    return t;
  }
  static of(t, e, n) {
    let r = [], a = [], u = 0, f = null;
    function h(p = false) {
      if (!p && !r.length) return;
      u < e && Oe(r, e - u, -1);
      let y = new he(r, a);
      f = f ? f.compose(y.map(f)) : y, r = [], a = [], u = 0;
    }
    function g(p) {
      if (Array.isArray(p)) for (let y of p) g(y);
      else if (p instanceof he) {
        if (p.length != e) throw new RangeError(`Mismatched change set length (got ${p.length}, expected ${e})`);
        h(), f = f ? f.compose(p.map(f)) : p;
      } else {
        let { from: y, to: v = y, insert: S } = p;
        if (y > v || y < 0 || v > e) throw new RangeError(`Invalid change range ${y} to ${v} (in doc of length ${e})`);
        let w = S ? typeof S == "string" ? Rt.of(S.split(n || xd)) : S : Rt.empty, C = w.length;
        if (y == v && C == 0) return;
        y < u && h(), y > u && Oe(r, y - u, -1), Oe(r, v - y, C), In(a, r, w), u = v;
      }
    }
    return g(t), h(!f), f;
  }
  static empty(t) {
    return new he(t ? [t, -1] : [], []);
  }
  static fromJSON(t) {
    if (!Array.isArray(t)) throw new RangeError("Invalid JSON representation of ChangeSet");
    let e = [], n = [];
    for (let r = 0; r < t.length; r++) {
      let a = t[r];
      if (typeof a == "number") e.push(a, -1);
      else {
        if (!Array.isArray(a) || typeof a[0] != "number" || a.some((u, f) => f && typeof u != "string")) throw new RangeError("Invalid JSON representation of ChangeSet");
        if (a.length == 1) e.push(a[0], 0);
        else {
          for (; n.length < r; ) n.push(Rt.empty);
          n[r] = Rt.of(a.slice(1)), e.push(a[0], n[r].length);
        }
      }
    }
    return new he(e, n);
  }
  static createSet(t, e) {
    return new he(t, e);
  }
}
function Oe(l, t, e, n = false) {
  if (t == 0 && e <= 0) return;
  let r = l.length - 2;
  r >= 0 && e <= 0 && e == l[r + 1] ? l[r] += t : r >= 0 && t == 0 && l[r] == 0 ? l[r + 1] += e : n ? (l[r] += t, l[r + 1] += e) : l.push(t, e);
}
function In(l, t, e) {
  if (e.length == 0) return;
  let n = t.length - 2 >> 1;
  if (n < l.length) l[l.length - 1] = l[l.length - 1].append(e);
  else {
    for (; l.length < n; ) l.push(Rt.empty);
    l.push(e);
  }
}
function wd(l, t, e) {
  let n = l.inserted;
  for (let r = 0, a = 0, u = 0; u < l.sections.length; ) {
    let f = l.sections[u++], h = l.sections[u++];
    if (h < 0) r += f, a += f;
    else {
      let g = r, p = a, y = Rt.empty;
      for (; g += f, p += h, h && n && (y = y.append(n[u - 2 >> 1])), !(e || u == l.sections.length || l.sections[u + 1] < 0); ) f = l.sections[u++], h = l.sections[u++];
      t(r, g, a, p, y), r = g, a = p;
    }
  }
}
function Cd(l, t, e, n = false) {
  let r = [], a = n ? [] : null, u = new oa(l), f = new oa(t);
  for (let h = -1; ; ) {
    if (u.done && f.len || f.done && u.len) throw new Error("Mismatched change set lengths");
    if (u.ins == -1 && f.ins == -1) {
      let g = Math.min(u.len, f.len);
      Oe(r, g, -1), u.forward(g), f.forward(g);
    } else if (f.ins >= 0 && (u.ins < 0 || h == u.i || u.off == 0 && (f.len < u.len || f.len == u.len && !e))) {
      let g = f.len;
      for (Oe(r, f.ins, -1); g; ) {
        let p = Math.min(u.len, g);
        u.ins >= 0 && h < u.i && u.len <= p && (Oe(r, 0, u.ins), a && In(a, r, u.text), h = u.i), u.forward(p), g -= p;
      }
      f.next();
    } else if (u.ins >= 0) {
      let g = 0, p = u.len;
      for (; p; ) if (f.ins == -1) {
        let y = Math.min(p, f.len);
        g += y, p -= y, f.forward(y);
      } else if (f.ins == 0 && f.len < p) p -= f.len, f.next();
      else break;
      Oe(r, g, h < u.i ? u.ins : 0), a && h < u.i && In(a, r, u.text), h = u.i, u.forward(u.len - p);
    } else {
      if (u.done && f.done) return a ? he.createSet(r, a) : Wi.create(r);
      throw new Error("Mismatched change set lengths");
    }
  }
}
function sv(l, t, e = false) {
  let n = [], r = e ? [] : null, a = new oa(l), u = new oa(t);
  for (let f = false; ; ) {
    if (a.done && u.done) return r ? he.createSet(n, r) : Wi.create(n);
    if (a.ins == 0) Oe(n, a.len, 0, f), a.next();
    else if (u.len == 0 && !u.done) Oe(n, 0, u.ins, f), r && In(r, n, u.text), u.next();
    else {
      if (a.done || u.done) throw new Error("Mismatched change set lengths");
      {
        let h = Math.min(a.len2, u.len), g = n.length;
        if (a.ins == -1) {
          let p = u.ins == -1 ? -1 : u.off ? 0 : u.ins;
          Oe(n, h, p, f), r && p && In(r, n, u.text);
        } else u.ins == -1 ? (Oe(n, a.off ? 0 : a.len, h, f), r && In(r, n, a.textBit(h))) : (Oe(n, a.off ? 0 : a.len, u.off ? 0 : u.ins, f), r && !u.off && In(r, n, u.text));
        f = (a.ins > h || u.ins >= 0 && u.len > h) && (f || n.length > g), a.forward2(h), u.forward(h);
      }
    }
  }
}
class oa {
  constructor(t) {
    this.set = t, this.i = 0, this.next();
  }
  next() {
    let { sections: t } = this.set;
    this.i < t.length ? (this.len = t[this.i++], this.ins = t[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0;
  }
  get done() {
    return this.ins == -2;
  }
  get len2() {
    return this.ins < 0 ? this.len : this.ins;
  }
  get text() {
    let { inserted: t } = this.set, e = this.i - 2 >> 1;
    return e >= t.length ? Rt.empty : t[e];
  }
  textBit(t) {
    let { inserted: e } = this.set, n = this.i - 2 >> 1;
    return n >= e.length && !t ? Rt.empty : e[n].slice(this.off, t == null ? void 0 : this.off + t);
  }
  forward(t) {
    t == this.len ? this.next() : (this.len -= t, this.off += t);
  }
  forward2(t) {
    this.ins == -1 ? this.forward(t) : t == this.ins ? this.next() : (this.ins -= t, this.off += t);
  }
}
class Bl {
  constructor(t, e, n) {
    this.from = t, this.to = e, this.flags = n;
  }
  get anchor() {
    return this.flags & 32 ? this.to : this.from;
  }
  get head() {
    return this.flags & 32 ? this.from : this.to;
  }
  get empty() {
    return this.from == this.to;
  }
  get assoc() {
    return this.flags & 8 ? -1 : this.flags & 16 ? 1 : 0;
  }
  get bidiLevel() {
    let t = this.flags & 7;
    return t == 7 ? null : t;
  }
  get goalColumn() {
    let t = this.flags >> 6;
    return t == 16777215 ? void 0 : t;
  }
  map(t, e = -1) {
    let n, r;
    return this.empty ? n = r = t.mapPos(this.from, e) : (n = t.mapPos(this.from, 1), r = t.mapPos(this.to, -1)), n == this.from && r == this.to ? this : new Bl(n, r, this.flags);
  }
  extend(t, e = t) {
    if (t <= this.anchor && e >= this.anchor) return K.range(t, e);
    let n = Math.abs(t - this.anchor) > Math.abs(e - this.anchor) ? t : e;
    return K.range(this.anchor, n);
  }
  eq(t, e = false) {
    return this.anchor == t.anchor && this.head == t.head && (!e || !this.empty || this.assoc == t.assoc);
  }
  toJSON() {
    return { anchor: this.anchor, head: this.head };
  }
  static fromJSON(t) {
    if (!t || typeof t.anchor != "number" || typeof t.head != "number") throw new RangeError("Invalid JSON representation for SelectionRange");
    return K.range(t.anchor, t.head);
  }
  static create(t, e, n) {
    return new Bl(t, e, n);
  }
}
class K {
  constructor(t, e) {
    this.ranges = t, this.mainIndex = e;
  }
  map(t, e = -1) {
    return t.empty ? this : K.create(this.ranges.map((n) => n.map(t, e)), this.mainIndex);
  }
  eq(t, e = false) {
    if (this.ranges.length != t.ranges.length || this.mainIndex != t.mainIndex) return false;
    for (let n = 0; n < this.ranges.length; n++) if (!this.ranges[n].eq(t.ranges[n], e)) return false;
    return true;
  }
  get main() {
    return this.ranges[this.mainIndex];
  }
  asSingle() {
    return this.ranges.length == 1 ? this : new K([this.main], 0);
  }
  addRange(t, e = true) {
    return K.create([t].concat(this.ranges), e ? 0 : this.mainIndex + 1);
  }
  replaceRange(t, e = this.mainIndex) {
    let n = this.ranges.slice();
    return n[e] = t, K.create(n, this.mainIndex);
  }
  toJSON() {
    return { ranges: this.ranges.map((t) => t.toJSON()), main: this.mainIndex };
  }
  static fromJSON(t) {
    if (!t || !Array.isArray(t.ranges) || typeof t.main != "number" || t.main >= t.ranges.length) throw new RangeError("Invalid JSON representation for EditorSelection");
    return new K(t.ranges.map((e) => Bl.fromJSON(e)), t.main);
  }
  static single(t, e = t) {
    return new K([K.range(t, e)], 0);
  }
  static create(t, e = 0) {
    if (t.length == 0) throw new RangeError("A selection needs at least one range");
    for (let n = 0, r = 0; r < t.length; r++) {
      let a = t[r];
      if (a.empty ? a.from <= n : a.from < n) return K.normalized(t.slice(), e);
      n = a.to;
    }
    return new K(t, e);
  }
  static cursor(t, e = 0, n, r) {
    return Bl.create(t, t, (e == 0 ? 0 : e < 0 ? 8 : 16) | (n == null ? 7 : Math.min(6, n)) | (r ?? 16777215) << 6);
  }
  static range(t, e, n, r) {
    let a = (n ?? 16777215) << 6 | (r == null ? 7 : Math.min(6, r));
    return e < t ? Bl.create(e, t, 48 | a) : Bl.create(t, e, (e > t ? 8 : 0) | a);
  }
  static normalized(t, e = 0) {
    let n = t[e];
    t.sort((r, a) => r.from - a.from), e = t.indexOf(n);
    for (let r = 1; r < t.length; r++) {
      let a = t[r], u = t[r - 1];
      if (a.empty ? a.from <= u.to : a.from < u.to) {
        let f = u.from, h = Math.max(a.to, u.to);
        r <= e && e--, t.splice(--r, 2, a.anchor > a.head ? K.range(h, f) : K.range(f, h));
      }
    }
    return new K(t, e);
  }
}
function rv(l, t) {
  for (let e of l.ranges) if (e.to > t) throw new RangeError("Selection points outside of document");
}
let bm = 0;
class et {
  constructor(t, e, n, r, a) {
    this.combine = t, this.compareInput = e, this.compare = n, this.isStatic = r, this.id = bm++, this.default = t([]), this.extensions = typeof a == "function" ? a(this) : a;
  }
  get reader() {
    return this;
  }
  static define(t = {}) {
    return new et(t.combine || ((e) => e), t.compareInput || ((e, n) => e === n), t.compare || (t.combine ? (e, n) => e === n : vm), !!t.static, t.enables);
  }
  of(t) {
    return new Tu([], this, 0, t);
  }
  compute(t, e) {
    if (this.isStatic) throw new Error("Can't compute a static facet");
    return new Tu(t, this, 1, e);
  }
  computeN(t, e) {
    if (this.isStatic) throw new Error("Can't compute a static facet");
    return new Tu(t, this, 2, e);
  }
  from(t, e) {
    return e || (e = (n) => n), this.compute([t], (n) => e(n.field(t)));
  }
}
function vm(l, t) {
  return l == t || l.length == t.length && l.every((e, n) => e === t[n]);
}
class Tu {
  constructor(t, e, n, r) {
    this.dependencies = t, this.facet = e, this.type = n, this.value = r, this.id = bm++;
  }
  dynamicSlot(t) {
    var e;
    let n = this.value, r = this.facet.compareInput, a = this.id, u = t[a] >> 1, f = this.type == 2, h = false, g = false, p = [];
    for (let y of this.dependencies) y == "doc" ? h = true : y == "selection" ? g = true : (((e = t[y.id]) !== null && e !== void 0 ? e : 1) & 1) == 0 && p.push(t[y.id]);
    return { create(y) {
      return y.values[u] = n(y), 1;
    }, update(y, v) {
      if (h && v.docChanged || g && (v.docChanged || v.selection) || Ad(y, p)) {
        let S = n(y);
        if (f ? !c1(S, y.values[u], r) : !r(S, y.values[u])) return y.values[u] = S, 1;
      }
      return 0;
    }, reconfigure: (y, v) => {
      let S, w = v.config.address[a];
      if (w != null) {
        let C = Hu(v, w);
        if (this.dependencies.every((T) => T instanceof et ? v.facet(T) === y.facet(T) : T instanceof Te ? v.field(T, false) == y.field(T, false) : true) || (f ? c1(S = n(y), C, r) : r(S = n(y), C))) return y.values[u] = C, 0;
      } else S = n(y);
      return y.values[u] = S, 1;
    } };
  }
}
function c1(l, t, e) {
  if (l.length != t.length) return false;
  for (let n = 0; n < l.length; n++) if (!e(l[n], t[n])) return false;
  return true;
}
function Ad(l, t) {
  let e = false;
  for (let n of t) ia(l, n) & 1 && (e = true);
  return e;
}
function YC(l, t, e) {
  let n = e.map((h) => l[h.id]), r = e.map((h) => h.type), a = n.filter((h) => !(h & 1)), u = l[t.id] >> 1;
  function f(h) {
    let g = [];
    for (let p = 0; p < n.length; p++) {
      let y = Hu(h, n[p]);
      if (r[p] == 2) for (let v of y) g.push(v);
      else g.push(y);
    }
    return t.combine(g);
  }
  return { create(h) {
    for (let g of n) ia(h, g);
    return h.values[u] = f(h), 1;
  }, update(h, g) {
    if (!Ad(h, a)) return 0;
    let p = f(h);
    return t.compare(p, h.values[u]) ? 0 : (h.values[u] = p, 1);
  }, reconfigure(h, g) {
    let p = Ad(h, n), y = g.config.facets[t.id], v = g.facet(t);
    if (y && !p && vm(e, y)) return h.values[u] = v, 0;
    let S = f(h);
    return t.compare(S, v) ? (h.values[u] = v, 0) : (h.values[u] = S, 1);
  } };
}
const $o = et.define({ static: true });
class Te {
  constructor(t, e, n, r, a) {
    this.id = t, this.createF = e, this.updateF = n, this.compareF = r, this.spec = a, this.provides = void 0;
  }
  static define(t) {
    let e = new Te(bm++, t.create, t.update, t.compare || ((n, r) => n === r), t);
    return t.provide && (e.provides = t.provide(e)), e;
  }
  create(t) {
    let e = t.facet($o).find((n) => n.field == this);
    return ((e == null ? void 0 : e.create) || this.createF)(t);
  }
  slot(t) {
    let e = t[this.id] >> 1;
    return { create: (n) => (n.values[e] = this.create(n), 1), update: (n, r) => {
      let a = n.values[e], u = this.updateF(a, r);
      return this.compareF(a, u) ? 0 : (n.values[e] = u, 1);
    }, reconfigure: (n, r) => {
      let a = n.facet($o), u = r.facet($o), f;
      return (f = a.find((h) => h.field == this)) && f != u.find((h) => h.field == this) ? (n.values[e] = f.create(n), 1) : r.config.address[this.id] != null ? (n.values[e] = r.field(this), 0) : (n.values[e] = this.create(n), 1);
    } };
  }
  init(t) {
    return [this, $o.of({ field: this, create: t })];
  }
  get extension() {
    return this;
  }
}
const Dl = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function Xr(l) {
  return (t) => new av(t, l);
}
const jl = { highest: Xr(Dl.highest), high: Xr(Dl.high), default: Xr(Dl.default), low: Xr(Dl.low), lowest: Xr(Dl.lowest) };
class av {
  constructor(t, e) {
    this.inner = t, this.prec = e;
  }
}
class lc {
  of(t) {
    return new Md(this, t);
  }
  reconfigure(t) {
    return lc.reconfigure.of({ compartment: this, extension: t });
  }
  get(t) {
    return t.config.compartments.get(this);
  }
}
class Md {
  constructor(t, e) {
    this.compartment = t, this.inner = e;
  }
}
class Lu {
  constructor(t, e, n, r, a, u) {
    for (this.base = t, this.compartments = e, this.dynamicSlots = n, this.address = r, this.staticValues = a, this.facets = u, this.statusTemplate = []; this.statusTemplate.length < n.length; ) this.statusTemplate.push(0);
  }
  staticFacet(t) {
    let e = this.address[t.id];
    return e == null ? t.default : this.staticValues[e >> 1];
  }
  static resolve(t, e, n) {
    let r = [], a = /* @__PURE__ */ Object.create(null), u = /* @__PURE__ */ new Map();
    for (let v of GC(t, e, u)) v instanceof Te ? r.push(v) : (a[v.facet.id] || (a[v.facet.id] = [])).push(v);
    let f = /* @__PURE__ */ Object.create(null), h = [], g = [];
    for (let v of r) f[v.id] = g.length << 1, g.push((S) => v.slot(S));
    let p = n == null ? void 0 : n.config.facets;
    for (let v in a) {
      let S = a[v], w = S[0].facet, C = p && p[v] || [];
      if (S.every((T) => T.type == 0)) if (f[w.id] = h.length << 1 | 1, vm(C, S)) h.push(n.facet(w));
      else {
        let T = w.combine(S.map((O) => O.value));
        h.push(n && w.compare(T, n.facet(w)) ? n.facet(w) : T);
      }
      else {
        for (let T of S) T.type == 0 ? (f[T.id] = h.length << 1 | 1, h.push(T.value)) : (f[T.id] = g.length << 1, g.push((O) => T.dynamicSlot(O)));
        f[w.id] = g.length << 1, g.push((T) => YC(T, w, S));
      }
    }
    let y = g.map((v) => v(f));
    return new Lu(t, u, y, f, h, a);
  }
}
function GC(l, t, e) {
  let n = [[], [], [], [], []], r = /* @__PURE__ */ new Map();
  function a(u, f) {
    let h = r.get(u);
    if (h != null) {
      if (h <= f) return;
      let g = n[h].indexOf(u);
      g > -1 && n[h].splice(g, 1), u instanceof Md && e.delete(u.compartment);
    }
    if (r.set(u, f), Array.isArray(u)) for (let g of u) a(g, f);
    else if (u instanceof Md) {
      if (e.has(u.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
      let g = t.get(u.compartment) || u.inner;
      e.set(u.compartment, g), a(g, f);
    } else if (u instanceof av) a(u.inner, u.prec);
    else if (u instanceof Te) n[f].push(u), u.provides && a(u.provides, f);
    else if (u instanceof Tu) n[f].push(u), u.facet.extensions && a(u.facet.extensions, Dl.default);
    else {
      let g = u.extension;
      if (!g) throw new Error(`Unrecognized extension value in extension set (${u}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      a(g, f);
    }
  }
  return a(l, Dl.default), n.reduce((u, f) => u.concat(f));
}
function ia(l, t) {
  if (t & 1) return 2;
  let e = t >> 1, n = l.status[e];
  if (n == 4) throw new Error("Cyclic dependency between fields and/or facets");
  if (n & 2) return n;
  l.status[e] = 4;
  let r = l.computeSlot(l, l.config.dynamicSlots[e]);
  return l.status[e] = 2 | r;
}
function Hu(l, t) {
  return t & 1 ? l.config.staticValues[t >> 1] : l.values[t >> 1];
}
const ov = et.define(), Td = et.define({ combine: (l) => l.some((t) => t), static: true }), uv = et.define({ combine: (l) => l.length ? l[0] : void 0, static: true }), cv = et.define(), fv = et.define(), hv = et.define(), dv = et.define({ combine: (l) => l.length ? l[0] : false });
class Fi {
  constructor(t, e) {
    this.type = t, this.value = e;
  }
  static define() {
    return new XC();
  }
}
class XC {
  of(t) {
    return new Fi(this, t);
  }
}
class KC {
  constructor(t) {
    this.map = t;
  }
  of(t) {
    return new St(this, t);
  }
}
class St {
  constructor(t, e) {
    this.type = t, this.value = e;
  }
  map(t) {
    let e = this.type.map(this.value, t);
    return e === void 0 ? void 0 : e == this.value ? this : new St(this.type, e);
  }
  is(t) {
    return this.type == t;
  }
  static define(t = {}) {
    return new KC(t.map || ((e) => e));
  }
  static mapEffects(t, e) {
    if (!t.length) return t;
    let n = [];
    for (let r of t) {
      let a = r.map(e);
      a && n.push(a);
    }
    return n;
  }
}
St.reconfigure = St.define();
St.appendConfig = St.define();
class de {
  constructor(t, e, n, r, a, u) {
    this.startState = t, this.changes = e, this.selection = n, this.effects = r, this.annotations = a, this.scrollIntoView = u, this._doc = null, this._state = null, n && rv(n, e.newLength), a.some((f) => f.type == de.time) || (this.annotations = a.concat(de.time.of(Date.now())));
  }
  static create(t, e, n, r, a, u) {
    return new de(t, e, n, r, a, u);
  }
  get newDoc() {
    return this._doc || (this._doc = this.changes.apply(this.startState.doc));
  }
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes);
  }
  get state() {
    return this._state || this.startState.applyTransaction(this), this._state;
  }
  annotation(t) {
    for (let e of this.annotations) if (e.type == t) return e.value;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  isUserEvent(t) {
    let e = this.annotation(de.userEvent);
    return !!(e && (e == t || e.length > t.length && e.slice(0, t.length) == t && e[t.length] == "."));
  }
}
de.time = Fi.define();
de.userEvent = Fi.define();
de.addToHistory = Fi.define();
de.remote = Fi.define();
function QC(l, t) {
  let e = [];
  for (let n = 0, r = 0; ; ) {
    let a, u;
    if (n < l.length && (r == t.length || t[r] >= l[n])) a = l[n++], u = l[n++];
    else if (r < t.length) a = t[r++], u = t[r++];
    else return e;
    !e.length || e[e.length - 1] < a ? e.push(a, u) : e[e.length - 1] < u && (e[e.length - 1] = u);
  }
}
function mv(l, t, e) {
  var n;
  let r, a, u;
  return e ? (r = t.changes, a = he.empty(t.changes.length), u = l.changes.compose(t.changes)) : (r = t.changes.map(l.changes), a = l.changes.mapDesc(t.changes, true), u = l.changes.compose(r)), { changes: u, selection: t.selection ? t.selection.map(a) : (n = l.selection) === null || n === void 0 ? void 0 : n.map(r), effects: St.mapEffects(l.effects, r).concat(St.mapEffects(t.effects, a)), annotations: l.annotations.length ? l.annotations.concat(t.annotations) : t.annotations, scrollIntoView: l.scrollIntoView || t.scrollIntoView };
}
function kd(l, t, e) {
  let n = t.selection, r = Rs(t.annotations);
  return t.userEvent && (r = r.concat(de.userEvent.of(t.userEvent))), { changes: t.changes instanceof he ? t.changes : he.of(t.changes || [], e, l.facet(uv)), selection: n && (n instanceof K ? n : K.single(n.anchor, n.head)), effects: Rs(t.effects), annotations: r, scrollIntoView: !!t.scrollIntoView };
}
function gv(l, t, e) {
  let n = kd(l, t.length ? t[0] : {}, l.doc.length);
  t.length && t[0].filter === false && (e = false);
  for (let a = 1; a < t.length; a++) {
    t[a].filter === false && (e = false);
    let u = !!t[a].sequential;
    n = mv(n, kd(l, t[a], u ? n.changes.newLength : l.doc.length), u);
  }
  let r = de.create(l, n.changes, n.selection, n.effects, n.annotations, n.scrollIntoView);
  return WC(e ? ZC(r) : r);
}
function ZC(l) {
  let t = l.startState, e = true;
  for (let r of t.facet(cv)) {
    let a = r(l);
    if (a === false) {
      e = false;
      break;
    }
    Array.isArray(a) && (e = e === true ? a : QC(e, a));
  }
  if (e !== true) {
    let r, a;
    if (e === false) a = l.changes.invertedDesc, r = he.empty(t.doc.length);
    else {
      let u = l.changes.filter(e);
      r = u.changes, a = u.filtered.mapDesc(u.changes).invertedDesc;
    }
    l = de.create(t, r, l.selection && l.selection.map(a), St.mapEffects(l.effects, a), l.annotations, l.scrollIntoView);
  }
  let n = t.facet(fv);
  for (let r = n.length - 1; r >= 0; r--) {
    let a = n[r](l);
    a instanceof de ? l = a : Array.isArray(a) && a.length == 1 && a[0] instanceof de ? l = a[0] : l = gv(t, Rs(a), false);
  }
  return l;
}
function WC(l) {
  let t = l.startState, e = t.facet(hv), n = l;
  for (let r = e.length - 1; r >= 0; r--) {
    let a = e[r](l);
    a && Object.keys(a).length && (n = mv(n, kd(t, a, l.changes.newLength), true));
  }
  return n == l ? l : de.create(t, l.changes, l.selection, n.effects, n.annotations, n.scrollIntoView);
}
const JC = [];
function Rs(l) {
  return l == null ? JC : Array.isArray(l) ? l : [l];
}
var Pt = (function(l) {
  return l[l.Word = 0] = "Word", l[l.Space = 1] = "Space", l[l.Other = 2] = "Other", l;
})(Pt || (Pt = {}));
const FC = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let Od;
try {
  Od = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function PC(l) {
  if (Od) return Od.test(l);
  for (let t = 0; t < l.length; t++) {
    let e = l[t];
    if (/\w/.test(e) || e > "\x80" && (e.toUpperCase() != e.toLowerCase() || FC.test(e))) return true;
  }
  return false;
}
function IC(l) {
  return (t) => {
    if (!/\S/.test(t)) return Pt.Space;
    if (PC(t)) return Pt.Word;
    for (let e = 0; e < l.length; e++) if (t.indexOf(l[e]) > -1) return Pt.Word;
    return Pt.Other;
  };
}
class Ot {
  constructor(t, e, n, r, a, u) {
    this.config = t, this.doc = e, this.selection = n, this.values = r, this.status = t.statusTemplate.slice(), this.computeSlot = a, u && (u._state = this);
    for (let f = 0; f < this.config.dynamicSlots.length; f++) ia(this, f << 1);
    this.computeSlot = null;
  }
  field(t, e = true) {
    let n = this.config.address[t.id];
    if (n == null) {
      if (e) throw new RangeError("Field is not present in this state");
      return;
    }
    return ia(this, n), Hu(this, n);
  }
  update(...t) {
    return gv(this, t, true);
  }
  applyTransaction(t) {
    let e = this.config, { base: n, compartments: r } = e;
    for (let f of t.effects) f.is(lc.reconfigure) ? (e && (r = /* @__PURE__ */ new Map(), e.compartments.forEach((h, g) => r.set(g, h)), e = null), r.set(f.value.compartment, f.value.extension)) : f.is(St.reconfigure) ? (e = null, n = f.value) : f.is(St.appendConfig) && (e = null, n = Rs(n).concat(f.value));
    let a;
    e ? a = t.startState.values.slice() : (e = Lu.resolve(n, r, this), a = new Ot(e, this.doc, this.selection, e.dynamicSlots.map(() => null), (h, g) => g.reconfigure(h, this), null).values);
    let u = t.startState.facet(Td) ? t.newSelection : t.newSelection.asSingle();
    new Ot(e, t.newDoc, u, a, (f, h) => h.update(f, t), t);
  }
  replaceSelection(t) {
    return typeof t == "string" && (t = this.toText(t)), this.changeByRange((e) => ({ changes: { from: e.from, to: e.to, insert: t }, range: K.cursor(e.from + t.length) }));
  }
  changeByRange(t) {
    let e = this.selection, n = t(e.ranges[0]), r = this.changes(n.changes), a = [n.range], u = Rs(n.effects);
    for (let f = 1; f < e.ranges.length; f++) {
      let h = t(e.ranges[f]), g = this.changes(h.changes), p = g.map(r);
      for (let v = 0; v < f; v++) a[v] = a[v].map(p);
      let y = r.mapDesc(g, true);
      a.push(h.range.map(y)), r = r.compose(p), u = St.mapEffects(u, p).concat(St.mapEffects(Rs(h.effects), y));
    }
    return { changes: r, selection: K.create(a, e.mainIndex), effects: u };
  }
  changes(t = []) {
    return t instanceof he ? t : he.of(t, this.doc.length, this.facet(Ot.lineSeparator));
  }
  toText(t) {
    return Rt.of(t.split(this.facet(Ot.lineSeparator) || xd));
  }
  sliceDoc(t = 0, e = this.doc.length) {
    return this.doc.sliceString(t, e, this.lineBreak);
  }
  facet(t) {
    let e = this.config.address[t.id];
    return e == null ? t.default : (ia(this, e), Hu(this, e));
  }
  toJSON(t) {
    let e = { doc: this.sliceDoc(), selection: this.selection.toJSON() };
    if (t) for (let n in t) {
      let r = t[n];
      r instanceof Te && this.config.address[r.id] != null && (e[n] = r.spec.toJSON(this.field(t[n]), this));
    }
    return e;
  }
  static fromJSON(t, e = {}, n) {
    if (!t || typeof t.doc != "string") throw new RangeError("Invalid JSON representation for EditorState");
    let r = [];
    if (n) {
      for (let a in n) if (Object.prototype.hasOwnProperty.call(t, a)) {
        let u = n[a], f = t[a];
        r.push(u.init((h) => u.spec.fromJSON(f, h)));
      }
    }
    return Ot.create({ doc: t.doc, selection: K.fromJSON(t.selection), extensions: e.extensions ? r.concat([e.extensions]) : r });
  }
  static create(t = {}) {
    let e = Lu.resolve(t.extensions || [], /* @__PURE__ */ new Map()), n = t.doc instanceof Rt ? t.doc : Rt.of((t.doc || "").split(e.staticFacet(Ot.lineSeparator) || xd)), r = t.selection ? t.selection instanceof K ? t.selection : K.single(t.selection.anchor, t.selection.head) : K.single(0);
    return rv(r, n.length), e.staticFacet(Td) || (r = r.asSingle()), new Ot(e, n, r, e.dynamicSlots.map(() => null), (a, u) => u.create(a), null);
  }
  get tabSize() {
    return this.facet(Ot.tabSize);
  }
  get lineBreak() {
    return this.facet(Ot.lineSeparator) || `
`;
  }
  get readOnly() {
    return this.facet(dv);
  }
  phrase(t, ...e) {
    for (let n of this.facet(Ot.phrases)) if (Object.prototype.hasOwnProperty.call(n, t)) {
      t = n[t];
      break;
    }
    return e.length && (t = t.replace(/\$(\$|\d*)/g, (n, r) => {
      if (r == "$") return "$";
      let a = +(r || 1);
      return !a || a > e.length ? n : e[a - 1];
    })), t;
  }
  languageDataAt(t, e, n = -1) {
    let r = [];
    for (let a of this.facet(ov)) for (let u of a(this, e, n)) Object.prototype.hasOwnProperty.call(u, t) && r.push(u[t]);
    return r;
  }
  charCategorizer(t) {
    return IC(this.languageDataAt("wordChars", t).join(""));
  }
  wordAt(t) {
    let { text: e, from: n, length: r } = this.doc.lineAt(t), a = this.charCategorizer(t), u = t - n, f = t - n;
    for (; u > 0; ) {
      let h = Me(e, u, false);
      if (a(e.slice(h, u)) != Pt.Word) break;
      u = h;
    }
    for (; f < r; ) {
      let h = Me(e, f);
      if (a(e.slice(f, h)) != Pt.Word) break;
      f = h;
    }
    return u == f ? null : K.range(u + n, f + n);
  }
}
Ot.allowMultipleSelections = Td;
Ot.tabSize = et.define({ combine: (l) => l.length ? l[0] : 4 });
Ot.lineSeparator = uv;
Ot.readOnly = dv;
Ot.phrases = et.define({ compare(l, t) {
  let e = Object.keys(l), n = Object.keys(t);
  return e.length == n.length && e.every((r) => l[r] == t[r]);
} });
Ot.languageData = ov;
Ot.changeFilter = cv;
Ot.transactionFilter = fv;
Ot.transactionExtender = hv;
lc.reconfigure = St.define();
function Pi(l, t, e = {}) {
  let n = {};
  for (let r of l) for (let a of Object.keys(r)) {
    let u = r[a], f = n[a];
    if (f === void 0) n[a] = u;
    else if (!(f === u || u === void 0)) if (Object.hasOwnProperty.call(e, a)) n[a] = e[a](f, u);
    else throw new Error("Config merge conflict for field " + a);
  }
  for (let r in t) n[r] === void 0 && (n[r] = t[r]);
  return n;
}
class Ll {
  eq(t) {
    return this == t;
  }
  range(t, e = t) {
    return Dd.create(t, e, this);
  }
}
Ll.prototype.startSide = Ll.prototype.endSide = 0;
Ll.prototype.point = false;
Ll.prototype.mapMode = Le.TrackDel;
let Dd = class pv {
  constructor(t, e, n) {
    this.from = t, this.to = e, this.value = n;
  }
  static create(t, e, n) {
    return new pv(t, e, n);
  }
};
function Ed(l, t) {
  return l.from - t.from || l.value.startSide - t.value.startSide;
}
class Sm {
  constructor(t, e, n, r) {
    this.from = t, this.to = e, this.value = n, this.maxPoint = r;
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  findIndex(t, e, n, r = 0) {
    let a = n ? this.to : this.from;
    for (let u = r, f = a.length; ; ) {
      if (u == f) return u;
      let h = u + f >> 1, g = a[h] - t || (n ? this.value[h].endSide : this.value[h].startSide) - e;
      if (h == u) return g >= 0 ? u : f;
      g >= 0 ? f = h : u = h + 1;
    }
  }
  between(t, e, n, r) {
    for (let a = this.findIndex(e, -1e9, true), u = this.findIndex(n, 1e9, false, a); a < u; a++) if (r(this.from[a] + t, this.to[a] + t, this.value[a]) === false) return false;
  }
  map(t, e) {
    let n = [], r = [], a = [], u = -1, f = -1;
    for (let h = 0; h < this.value.length; h++) {
      let g = this.value[h], p = this.from[h] + t, y = this.to[h] + t, v, S;
      if (p == y) {
        let w = e.mapPos(p, g.startSide, g.mapMode);
        if (w == null || (v = S = w, g.startSide != g.endSide && (S = e.mapPos(p, g.endSide), S < v))) continue;
      } else if (v = e.mapPos(p, g.startSide), S = e.mapPos(y, g.endSide), v > S || v == S && g.startSide > 0 && g.endSide <= 0) continue;
      (S - v || g.endSide - g.startSide) < 0 || (u < 0 && (u = v), g.point && (f = Math.max(f, S - v)), n.push(g), r.push(v - u), a.push(S - u));
    }
    return { mapped: n.length ? new Sm(r, a, n, f) : null, pos: u };
  }
}
class Bt {
  constructor(t, e, n, r) {
    this.chunkPos = t, this.chunk = e, this.nextLayer = n, this.maxPoint = r;
  }
  static create(t, e, n, r) {
    return new Bt(t, e, n, r);
  }
  get length() {
    let t = this.chunk.length - 1;
    return t < 0 ? 0 : Math.max(this.chunkEnd(t), this.nextLayer.length);
  }
  get size() {
    if (this.isEmpty) return 0;
    let t = this.nextLayer.size;
    for (let e of this.chunk) t += e.value.length;
    return t;
  }
  chunkEnd(t) {
    return this.chunkPos[t] + this.chunk[t].length;
  }
  update(t) {
    let { add: e = [], sort: n = false, filterFrom: r = 0, filterTo: a = this.length } = t, u = t.filter;
    if (e.length == 0 && !u) return this;
    if (n && (e = e.slice().sort(Ed)), this.isEmpty) return e.length ? Bt.of(e) : this;
    let f = new yv(this, null, -1).goto(0), h = 0, g = [], p = new Sn();
    for (; f.value || h < e.length; ) if (h < e.length && (f.from - e[h].from || f.startSide - e[h].value.startSide) >= 0) {
      let y = e[h++];
      p.addInner(y.from, y.to, y.value) || g.push(y);
    } else f.rangeIndex == 1 && f.chunkIndex < this.chunk.length && (h == e.length || this.chunkEnd(f.chunkIndex) < e[h].from) && (!u || r > this.chunkEnd(f.chunkIndex) || a < this.chunkPos[f.chunkIndex]) && p.addChunk(this.chunkPos[f.chunkIndex], this.chunk[f.chunkIndex]) ? f.nextChunk() : ((!u || r > f.to || a < f.from || u(f.from, f.to, f.value)) && (p.addInner(f.from, f.to, f.value) || g.push(Dd.create(f.from, f.to, f.value))), f.next());
    return p.finishInner(this.nextLayer.isEmpty && !g.length ? Bt.empty : this.nextLayer.update({ add: g, filter: u, filterFrom: r, filterTo: a }));
  }
  map(t) {
    if (t.empty || this.isEmpty) return this;
    let e = [], n = [], r = -1;
    for (let u = 0; u < this.chunk.length; u++) {
      let f = this.chunkPos[u], h = this.chunk[u], g = t.touchesRange(f, f + h.length);
      if (g === false) r = Math.max(r, h.maxPoint), e.push(h), n.push(t.mapPos(f));
      else if (g === true) {
        let { mapped: p, pos: y } = h.map(f, t);
        p && (r = Math.max(r, p.maxPoint), e.push(p), n.push(y));
      }
    }
    let a = this.nextLayer.map(t);
    return e.length == 0 ? a : new Bt(n, e, a || Bt.empty, r);
  }
  between(t, e, n) {
    if (!this.isEmpty) {
      for (let r = 0; r < this.chunk.length; r++) {
        let a = this.chunkPos[r], u = this.chunk[r];
        if (e >= a && t <= a + u.length && u.between(a, t - a, e - a, n) === false) return;
      }
      this.nextLayer.between(t, e, n);
    }
  }
  iter(t = 0) {
    return ua.from([this]).goto(t);
  }
  get isEmpty() {
    return this.nextLayer == this;
  }
  static iter(t, e = 0) {
    return ua.from(t).goto(e);
  }
  static compare(t, e, n, r, a = -1) {
    let u = t.filter((y) => y.maxPoint > 0 || !y.isEmpty && y.maxPoint >= a), f = e.filter((y) => y.maxPoint > 0 || !y.isEmpty && y.maxPoint >= a), h = f1(u, f, n), g = new Kr(u, h, a), p = new Kr(f, h, a);
    n.iterGaps((y, v, S) => h1(g, y, p, v, S, r)), n.empty && n.length == 0 && h1(g, 0, p, 0, 0, r);
  }
  static eq(t, e, n = 0, r) {
    r == null && (r = 999999999);
    let a = t.filter((p) => !p.isEmpty && e.indexOf(p) < 0), u = e.filter((p) => !p.isEmpty && t.indexOf(p) < 0);
    if (a.length != u.length) return false;
    if (!a.length) return true;
    let f = f1(a, u), h = new Kr(a, f, 0).goto(n), g = new Kr(u, f, 0).goto(n);
    for (; ; ) {
      if (h.to != g.to || !Bd(h.active, g.active) || h.point && (!g.point || !h.point.eq(g.point))) return false;
      if (h.to > r) return true;
      h.next(), g.next();
    }
  }
  static spans(t, e, n, r, a = -1) {
    let u = new Kr(t, null, a).goto(e), f = e, h = u.openStart;
    for (; ; ) {
      let g = Math.min(u.to, n);
      if (u.point) {
        let p = u.activeForPoint(u.to), y = u.pointFrom < e ? p.length + 1 : u.point.startSide < 0 ? p.length : Math.min(p.length, h);
        r.point(f, g, u.point, p, y, u.pointRank), h = Math.min(u.openEnd(g), p.length);
      } else g > f && (r.span(f, g, u.active, h), h = u.openEnd(g));
      if (u.to > n) return h + (u.point && u.to > n ? 1 : 0);
      f = u.to, u.next();
    }
  }
  static of(t, e = false) {
    let n = new Sn();
    for (let r of t instanceof Dd ? [t] : e ? $C(t) : t) n.add(r.from, r.to, r.value);
    return n.finish();
  }
  static join(t) {
    if (!t.length) return Bt.empty;
    let e = t[t.length - 1];
    for (let n = t.length - 2; n >= 0; n--) for (let r = t[n]; r != Bt.empty; r = r.nextLayer) e = new Bt(r.chunkPos, r.chunk, e, Math.max(r.maxPoint, e.maxPoint));
    return e;
  }
}
Bt.empty = new Bt([], [], null, -1);
function $C(l) {
  if (l.length > 1) for (let t = l[0], e = 1; e < l.length; e++) {
    let n = l[e];
    if (Ed(t, n) > 0) return l.slice().sort(Ed);
    t = n;
  }
  return l;
}
Bt.empty.nextLayer = Bt.empty;
class Sn {
  finishChunk(t) {
    this.chunks.push(new Sm(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, t && (this.from = [], this.to = [], this.value = []);
  }
  constructor() {
    this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
  }
  add(t, e, n) {
    this.addInner(t, e, n) || (this.nextLayer || (this.nextLayer = new Sn())).add(t, e, n);
  }
  addInner(t, e, n) {
    let r = t - this.lastTo || n.startSide - this.last.endSide;
    if (r <= 0 && (t - this.lastFrom || n.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
    return r < 0 ? false : (this.from.length == 250 && this.finishChunk(true), this.chunkStart < 0 && (this.chunkStart = t), this.from.push(t - this.chunkStart), this.to.push(e - this.chunkStart), this.last = n, this.lastFrom = t, this.lastTo = e, this.value.push(n), n.point && (this.maxPoint = Math.max(this.maxPoint, e - t)), true);
  }
  addChunk(t, e) {
    if ((t - this.lastTo || e.value[0].startSide - this.last.endSide) < 0) return false;
    this.from.length && this.finishChunk(true), this.setMaxPoint = Math.max(this.setMaxPoint, e.maxPoint), this.chunks.push(e), this.chunkPos.push(t);
    let n = e.value.length - 1;
    return this.last = e.value[n], this.lastFrom = e.from[n] + t, this.lastTo = e.to[n] + t, true;
  }
  finish() {
    return this.finishInner(Bt.empty);
  }
  finishInner(t) {
    if (this.from.length && this.finishChunk(false), this.chunks.length == 0) return t;
    let e = Bt.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(t) : t, this.setMaxPoint);
    return this.from = null, e;
  }
}
function f1(l, t, e) {
  let n = /* @__PURE__ */ new Map();
  for (let a of l) for (let u = 0; u < a.chunk.length; u++) a.chunk[u].maxPoint <= 0 && n.set(a.chunk[u], a.chunkPos[u]);
  let r = /* @__PURE__ */ new Set();
  for (let a of t) for (let u = 0; u < a.chunk.length; u++) {
    let f = n.get(a.chunk[u]);
    f != null && (e ? e.mapPos(f) : f) == a.chunkPos[u] && !(e == null ? void 0 : e.touchesRange(f, f + a.chunk[u].length)) && r.add(a.chunk[u]);
  }
  return r;
}
class yv {
  constructor(t, e, n, r = 0) {
    this.layer = t, this.skip = e, this.minPoint = n, this.rank = r;
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  get endSide() {
    return this.value ? this.value.endSide : 0;
  }
  goto(t, e = -1e9) {
    return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(t, e, false), this;
  }
  gotoInner(t, e, n) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let r = this.layer.chunk[this.chunkIndex];
      if (!(this.skip && this.skip.has(r) || this.layer.chunkEnd(this.chunkIndex) < t || r.maxPoint < this.minPoint)) break;
      this.chunkIndex++, n = false;
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let r = this.layer.chunk[this.chunkIndex].findIndex(t - this.layer.chunkPos[this.chunkIndex], e, true);
      (!n || this.rangeIndex < r) && this.setRangeIndex(r);
    }
    this.next();
  }
  forward(t, e) {
    (this.to - t || this.endSide - e) < 0 && this.gotoInner(t, e, true);
  }
  next() {
    for (; ; ) if (this.chunkIndex == this.layer.chunk.length) {
      this.from = this.to = 1e9, this.value = null;
      break;
    } else {
      let t = this.layer.chunkPos[this.chunkIndex], e = this.layer.chunk[this.chunkIndex], n = t + e.from[this.rangeIndex];
      if (this.from = n, this.to = t + e.to[this.rangeIndex], this.value = e.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint) break;
    }
  }
  setRangeIndex(t) {
    if (t == this.layer.chunk[this.chunkIndex].value.length) {
      if (this.chunkIndex++, this.skip) for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]); ) this.chunkIndex++;
      this.rangeIndex = 0;
    } else this.rangeIndex = t;
  }
  nextChunk() {
    this.chunkIndex++, this.rangeIndex = 0, this.next();
  }
  compare(t) {
    return this.from - t.from || this.startSide - t.startSide || this.rank - t.rank || this.to - t.to || this.endSide - t.endSide;
  }
}
class ua {
  constructor(t) {
    this.heap = t;
  }
  static from(t, e = null, n = -1) {
    let r = [];
    for (let a = 0; a < t.length; a++) for (let u = t[a]; !u.isEmpty; u = u.nextLayer) u.maxPoint >= n && r.push(new yv(u, e, n, a));
    return r.length == 1 ? r[0] : new ua(r);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(t, e = -1e9) {
    for (let n of this.heap) n.goto(t, e);
    for (let n = this.heap.length >> 1; n >= 0; n--) Kh(this.heap, n);
    return this.next(), this;
  }
  forward(t, e) {
    for (let n of this.heap) n.forward(t, e);
    for (let n = this.heap.length >> 1; n >= 0; n--) Kh(this.heap, n);
    (this.to - t || this.value.endSide - e) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0) this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let t = this.heap[0];
      this.from = t.from, this.to = t.to, this.value = t.value, this.rank = t.rank, t.value && t.next(), Kh(this.heap, 0);
    }
  }
}
function Kh(l, t) {
  for (let e = l[t]; ; ) {
    let n = (t << 1) + 1;
    if (n >= l.length) break;
    let r = l[n];
    if (n + 1 < l.length && r.compare(l[n + 1]) >= 0 && (r = l[n + 1], n++), e.compare(r) < 0) break;
    l[n] = e, l[t] = r, t = n;
  }
}
class Kr {
  constructor(t, e, n) {
    this.minPoint = n, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = ua.from(t, e, n);
  }
  goto(t, e = -1e9) {
    return this.cursor.goto(t, e), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = t, this.endSide = e, this.openStart = -1, this.next(), this;
  }
  forward(t, e) {
    for (; this.minActive > -1 && (this.activeTo[this.minActive] - t || this.active[this.minActive].endSide - e) < 0; ) this.removeActive(this.minActive);
    this.cursor.forward(t, e);
  }
  removeActive(t) {
    tu(this.active, t), tu(this.activeTo, t), tu(this.activeRank, t), this.minActive = d1(this.active, this.activeTo);
  }
  addActive(t) {
    let e = 0, { value: n, to: r, rank: a } = this.cursor;
    for (; e < this.activeRank.length && (a - this.activeRank[e] || r - this.activeTo[e]) > 0; ) e++;
    eu(this.active, e, n), eu(this.activeTo, e, r), eu(this.activeRank, e, a), t && eu(t, e, this.cursor.from), this.minActive = d1(this.active, this.activeTo);
  }
  next() {
    let t = this.to, e = this.point;
    this.point = null;
    let n = this.openStart < 0 ? [] : null;
    for (; ; ) {
      let r = this.minActive;
      if (r > -1 && (this.activeTo[r] - this.cursor.from || this.active[r].endSide - this.cursor.startSide) < 0) {
        if (this.activeTo[r] > t) {
          this.to = this.activeTo[r], this.endSide = this.active[r].endSide;
          break;
        }
        this.removeActive(r), n && tu(n, r);
      } else if (this.cursor.value) if (this.cursor.from > t) {
        this.to = this.cursor.from, this.endSide = this.cursor.startSide;
        break;
      } else {
        let a = this.cursor.value;
        if (!a.point) this.addActive(n), this.cursor.next();
        else if (e && this.cursor.to == this.to && this.cursor.from < this.cursor.to) this.cursor.next();
        else {
          this.point = a, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = a.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
          break;
        }
      }
      else {
        this.to = this.endSide = 1e9;
        break;
      }
    }
    if (n) {
      this.openStart = 0;
      for (let r = n.length - 1; r >= 0 && n[r] < t; r--) this.openStart++;
    }
  }
  activeForPoint(t) {
    if (!this.active.length) return this.active;
    let e = [];
    for (let n = this.active.length - 1; n >= 0 && !(this.activeRank[n] < this.pointRank); n--) (this.activeTo[n] > t || this.activeTo[n] == t && this.active[n].endSide >= this.point.endSide) && e.push(this.active[n]);
    return e.reverse();
  }
  openEnd(t) {
    let e = 0;
    for (let n = this.activeTo.length - 1; n >= 0 && this.activeTo[n] > t; n--) e++;
    return e;
  }
}
function h1(l, t, e, n, r, a) {
  l.goto(t), e.goto(n);
  let u = n + r, f = n, h = n - t;
  for (; ; ) {
    let g = l.to + h - e.to, p = g || l.endSide - e.endSide, y = p < 0 ? l.to + h : e.to, v = Math.min(y, u);
    if (l.point || e.point ? l.point && e.point && (l.point == e.point || l.point.eq(e.point)) && Bd(l.activeForPoint(l.to), e.activeForPoint(e.to)) || a.comparePoint(f, v, l.point, e.point) : v > f && !Bd(l.active, e.active) && a.compareRange(f, v, l.active, e.active), y > u) break;
    (g || l.openEnd != e.openEnd) && a.boundChange && a.boundChange(y), f = y, p <= 0 && l.next(), p >= 0 && e.next();
  }
}
function Bd(l, t) {
  if (l.length != t.length) return false;
  for (let e = 0; e < l.length; e++) if (l[e] != t[e] && !l[e].eq(t[e])) return false;
  return true;
}
function tu(l, t) {
  for (let e = t, n = l.length - 1; e < n; e++) l[e] = l[e + 1];
  l.pop();
}
function eu(l, t, e) {
  for (let n = l.length - 1; n >= t; n--) l[n + 1] = l[n];
  l[t] = e;
}
function d1(l, t) {
  let e = -1, n = 1e9;
  for (let r = 0; r < t.length; r++) (t[r] - n || l[r].endSide - l[e].endSide) < 0 && (e = r, n = t[r]);
  return e;
}
function Qs(l, t, e = l.length) {
  let n = 0;
  for (let r = 0; r < e && r < l.length; ) l.charCodeAt(r) == 9 ? (n += t - n % t, r++) : (n++, r = Me(l, r));
  return n;
}
function Rd(l, t, e, n) {
  for (let r = 0, a = 0; ; ) {
    if (a >= t) return r;
    if (r == l.length) break;
    a += l.charCodeAt(r) == 9 ? e - a % e : 1, r = Me(l, r);
  }
  return n === true ? -1 : l.length;
}
const zd = "\u037C", m1 = typeof Symbol > "u" ? "__" + zd : Symbol.for(zd), Nd = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet"), g1 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class il {
  constructor(t, e) {
    this.rules = [];
    let { finish: n } = e || {};
    function r(u) {
      return /^@/.test(u) ? [u] : u.split(/,\s*/);
    }
    function a(u, f, h, g) {
      let p = [], y = /^@(\w+)\b/.exec(u[0]), v = y && y[1] == "keyframes";
      if (y && f == null) return h.push(u[0] + ";");
      for (let S in f) {
        let w = f[S];
        if (/&/.test(S)) a(S.split(/,\s*/).map((C) => u.map((T) => C.replace(/&/, T))).reduce((C, T) => C.concat(T)), w, h);
        else if (w && typeof w == "object") {
          if (!y) throw new RangeError("The value of a property (" + S + ") should be a primitive value.");
          a(r(S), w, p, v);
        } else w != null && p.push(S.replace(/_.*/, "").replace(/[A-Z]/g, (C) => "-" + C.toLowerCase()) + ": " + w + ";");
      }
      (p.length || v) && h.push((n && !y && !g ? u.map(n) : u).join(", ") + " {" + p.join(" ") + "}");
    }
    for (let u in t) a(r(u), t[u], this.rules);
  }
  getRules() {
    return this.rules.join(`
`);
  }
  static newName() {
    let t = g1[m1] || 1;
    return g1[m1] = t + 1, zd + t.toString(36);
  }
  static mount(t, e, n) {
    let r = t[Nd], a = n && n.nonce;
    r ? a && r.setNonce(a) : r = new tA(t, a), r.mount(Array.isArray(e) ? e : [e], t);
  }
}
let p1 = /* @__PURE__ */ new Map();
class tA {
  constructor(t, e) {
    let n = t.ownerDocument || t, r = n.defaultView;
    if (!t.head && t.adoptedStyleSheets && r.CSSStyleSheet) {
      let a = p1.get(n);
      if (a) return t[Nd] = a;
      this.sheet = new r.CSSStyleSheet(), p1.set(n, this);
    } else this.styleTag = n.createElement("style"), e && this.styleTag.setAttribute("nonce", e);
    this.modules = [], t[Nd] = this;
  }
  mount(t, e) {
    let n = this.sheet, r = 0, a = 0;
    for (let u = 0; u < t.length; u++) {
      let f = t[u], h = this.modules.indexOf(f);
      if (h < a && h > -1 && (this.modules.splice(h, 1), a--, h = -1), h == -1) {
        if (this.modules.splice(a++, 0, f), n) for (let g = 0; g < f.rules.length; g++) n.insertRule(f.rules[g], r++);
      } else {
        for (; a < h; ) r += this.modules[a++].rules.length;
        r += f.rules.length, a++;
      }
    }
    if (n) e.adoptedStyleSheets.indexOf(this.sheet) < 0 && (e.adoptedStyleSheets = [this.sheet, ...e.adoptedStyleSheets]);
    else {
      let u = "";
      for (let h = 0; h < this.modules.length; h++) u += this.modules[h].getRules() + `
`;
      this.styleTag.textContent = u;
      let f = e.head || e;
      this.styleTag.parentNode != f && f.insertBefore(this.styleTag, f.firstChild);
    }
  }
  setNonce(t) {
    this.styleTag && this.styleTag.getAttribute("nonce") != t && this.styleTag.setAttribute("nonce", t);
  }
}
var nl = { 8: "Backspace", 9: "Tab", 10: "Enter", 12: "NumLock", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 44: "PrintScreen", 45: "Insert", 46: "Delete", 59: ";", 61: "=", 91: "Meta", 92: "Meta", 106: "*", 107: "+", 108: ",", 109: "-", 110: ".", 111: "/", 144: "NumLock", 145: "ScrollLock", 160: "Shift", 161: "Shift", 162: "Control", 163: "Control", 164: "Alt", 165: "Alt", 173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'" }, ca = { 48: ")", 49: "!", 50: "@", 51: "#", 52: "$", 53: "%", 54: "^", 55: "&", 56: "*", 57: "(", 59: ":", 61: "+", 173: "_", 186: ":", 187: "+", 188: "<", 189: "_", 190: ">", 191: "?", 192: "~", 219: "{", 220: "|", 221: "}", 222: '"' }, eA = typeof navigator < "u" && /Mac/.test(navigator.platform), iA = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var Ce = 0; Ce < 10; Ce++) nl[48 + Ce] = nl[96 + Ce] = String(Ce);
for (var Ce = 1; Ce <= 24; Ce++) nl[Ce + 111] = "F" + Ce;
for (var Ce = 65; Ce <= 90; Ce++) nl[Ce] = String.fromCharCode(Ce + 32), ca[Ce] = String.fromCharCode(Ce);
for (var Qh in nl) ca.hasOwnProperty(Qh) || (ca[Qh] = nl[Qh]);
function nA(l) {
  var t = eA && l.metaKey && l.shiftKey && !l.ctrlKey && !l.altKey || iA && l.shiftKey && l.key && l.key.length == 1 || l.key == "Unidentified", e = !t && l.key || (l.shiftKey ? ca : nl)[l.keyCode] || l.key || "Unidentified";
  return e == "Esc" && (e = "Escape"), e == "Del" && (e = "Delete"), e == "Left" && (e = "ArrowLeft"), e == "Up" && (e = "ArrowUp"), e == "Right" && (e = "ArrowRight"), e == "Down" && (e = "ArrowDown"), e;
}
function Gt() {
  var l = arguments[0];
  typeof l == "string" && (l = document.createElement(l));
  var t = 1, e = arguments[1];
  if (e && typeof e == "object" && e.nodeType == null && !Array.isArray(e)) {
    for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
      var r = e[n];
      typeof r == "string" ? l.setAttribute(n, r) : r != null && (l[n] = r);
    }
    t++;
  }
  for (; t < arguments.length; t++) bv(l, arguments[t]);
  return l;
}
function bv(l, t) {
  if (typeof t == "string") l.appendChild(document.createTextNode(t));
  else if (t != null) if (t.nodeType != null) l.appendChild(t);
  else if (Array.isArray(t)) for (var e = 0; e < t.length; e++) bv(l, t[e]);
  else throw new RangeError("Unsupported child node: " + t);
}
let _e = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, _d = typeof document < "u" ? document : { documentElement: { style: {} } };
const Ld = /Edge\/(\d+)/.exec(_e.userAgent), vv = /MSIE \d/.test(_e.userAgent), Hd = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(_e.userAgent), sc = !!(vv || Hd || Ld), y1 = !sc && /gecko\/(\d+)/i.test(_e.userAgent), Zh = !sc && /Chrome\/(\d+)/.exec(_e.userAgent), lA = "webkitFontSmoothing" in _d.documentElement.style, Ud = !sc && /Apple Computer/.test(_e.vendor), b1 = Ud && (/Mobile\/\w+/.test(_e.userAgent) || _e.maxTouchPoints > 2);
var F = { mac: b1 || /Mac/.test(_e.platform), windows: /Win/.test(_e.platform), linux: /Linux|X11/.test(_e.platform), ie: sc, ie_version: vv ? _d.documentMode || 6 : Hd ? +Hd[1] : Ld ? +Ld[1] : 0, gecko: y1, gecko_version: y1 ? +(/Firefox\/(\d+)/.exec(_e.userAgent) || [0, 0])[1] : 0, chrome: !!Zh, chrome_version: Zh ? +Zh[1] : 0, ios: b1, android: /Android\b/.test(_e.userAgent), webkit_version: lA ? +(/\bAppleWebKit\/(\d+)/.exec(_e.userAgent) || [0, 0])[1] : 0, safari: Ud, safari_version: Ud ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(_e.userAgent) || [0, 0])[1] : 0, tabSize: _d.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size" };
function fa(l) {
  let t;
  return l.nodeType == 11 ? t = l.getSelection ? l : l.ownerDocument : t = l, t.getSelection();
}
function Vd(l, t) {
  return t ? l == t || l.contains(t.nodeType != 1 ? t.parentNode : t) : false;
}
function ku(l, t) {
  if (!t.anchorNode) return false;
  try {
    return Vd(l, t.anchorNode);
  } catch {
    return false;
  }
}
function Vs(l) {
  return l.nodeType == 3 ? Ul(l, 0, l.nodeValue.length).getClientRects() : l.nodeType == 1 ? l.getClientRects() : [];
}
function na(l, t, e, n) {
  return e ? v1(l, t, e, n, -1) || v1(l, t, e, n, 1) : false;
}
function Hl(l) {
  for (var t = 0; ; t++) if (l = l.previousSibling, !l) return t;
}
function Uu(l) {
  return l.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(l.nodeName);
}
function v1(l, t, e, n, r) {
  for (; ; ) {
    if (l == e && t == n) return true;
    if (t == (r < 0 ? 0 : Ji(l))) {
      if (l.nodeName == "DIV") return false;
      let a = l.parentNode;
      if (!a || a.nodeType != 1) return false;
      t = Hl(l) + (r < 0 ? 0 : 1), l = a;
    } else if (l.nodeType == 1) {
      if (l = l.childNodes[t + (r < 0 ? -1 : 0)], l.nodeType == 1 && l.contentEditable == "false") return false;
      t = r < 0 ? Ji(l) : 0;
    } else return false;
  }
}
function Ji(l) {
  return l.nodeType == 3 ? l.nodeValue.length : l.childNodes.length;
}
function Aa(l, t) {
  let e = t ? l.left : l.right;
  return { left: e, right: e, top: l.top, bottom: l.bottom };
}
function sA(l) {
  let t = l.visualViewport;
  return t ? { left: 0, right: t.width, top: 0, bottom: t.height } : { left: 0, right: l.innerWidth, top: 0, bottom: l.innerHeight };
}
function Sv(l, t) {
  let e = t.width / l.offsetWidth, n = t.height / l.offsetHeight;
  return (e > 0.995 && e < 1.005 || !isFinite(e) || Math.abs(t.width - l.offsetWidth) < 1) && (e = 1), (n > 0.995 && n < 1.005 || !isFinite(n) || Math.abs(t.height - l.offsetHeight) < 1) && (n = 1), { scaleX: e, scaleY: n };
}
function rA(l, t, e, n, r, a, u, f) {
  let h = l.ownerDocument, g = h.defaultView || window;
  for (let p = l, y = false; p && !y; ) if (p.nodeType == 1) {
    let v, S = p == h.body, w = 1, C = 1;
    if (S) v = sA(g);
    else {
      if (/^(fixed|sticky)$/.test(getComputedStyle(p).position) && (y = true), p.scrollHeight <= p.clientHeight && p.scrollWidth <= p.clientWidth) {
        p = p.assignedSlot || p.parentNode;
        continue;
      }
      let j = p.getBoundingClientRect();
      ({ scaleX: w, scaleY: C } = Sv(p, j)), v = { left: j.left, right: j.left + p.clientWidth * w, top: j.top, bottom: j.top + p.clientHeight * C };
    }
    let T = 0, O = 0;
    if (r == "nearest") t.top < v.top ? (O = t.top - (v.top + u), e > 0 && t.bottom > v.bottom + O && (O = t.bottom - v.bottom + u)) : t.bottom > v.bottom && (O = t.bottom - v.bottom + u, e < 0 && t.top - O < v.top && (O = t.top - (v.top + u)));
    else {
      let j = t.bottom - t.top, L = v.bottom - v.top;
      O = (r == "center" && j <= L ? t.top + j / 2 - L / 2 : r == "start" || r == "center" && e < 0 ? t.top - u : t.bottom - L + u) - v.top;
    }
    if (n == "nearest" ? t.left < v.left ? (T = t.left - (v.left + a), e > 0 && t.right > v.right + T && (T = t.right - v.right + a)) : t.right > v.right && (T = t.right - v.right + a, e < 0 && t.left < v.left + T && (T = t.left - (v.left + a))) : T = (n == "center" ? t.left + (t.right - t.left) / 2 - (v.right - v.left) / 2 : n == "start" == f ? t.left - a : t.right - (v.right - v.left) + a) - v.left, T || O) if (S) g.scrollBy(T, O);
    else {
      let j = 0, L = 0;
      if (O) {
        let Q = p.scrollTop;
        p.scrollTop += O / C, L = (p.scrollTop - Q) * C;
      }
      if (T) {
        let Q = p.scrollLeft;
        p.scrollLeft += T / w, j = (p.scrollLeft - Q) * w;
      }
      t = { left: t.left - j, top: t.top - L, right: t.right - j, bottom: t.bottom - L }, j && Math.abs(j - T) < 1 && (n = "nearest"), L && Math.abs(L - O) < 1 && (r = "nearest");
    }
    if (S) break;
    (t.top < v.top || t.bottom > v.bottom || t.left < v.left || t.right > v.right) && (t = { left: Math.max(t.left, v.left), right: Math.min(t.right, v.right), top: Math.max(t.top, v.top), bottom: Math.min(t.bottom, v.bottom) }), p = p.assignedSlot || p.parentNode;
  } else if (p.nodeType == 11) p = p.host;
  else break;
}
function aA(l) {
  let t = l.ownerDocument, e, n;
  for (let r = l.parentNode; r && !(r == t.body || e && n); ) if (r.nodeType == 1) !n && r.scrollHeight > r.clientHeight && (n = r), !e && r.scrollWidth > r.clientWidth && (e = r), r = r.assignedSlot || r.parentNode;
  else if (r.nodeType == 11) r = r.host;
  else break;
  return { x: e, y: n };
}
class oA {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(t) {
    return this.anchorNode == t.anchorNode && this.anchorOffset == t.anchorOffset && this.focusNode == t.focusNode && this.focusOffset == t.focusOffset;
  }
  setRange(t) {
    let { anchorNode: e, focusNode: n } = t;
    this.set(e, Math.min(t.anchorOffset, e ? Ji(e) : 0), n, Math.min(t.focusOffset, n ? Ji(n) : 0));
  }
  set(t, e, n, r) {
    this.anchorNode = t, this.anchorOffset = e, this.focusNode = n, this.focusOffset = r;
  }
}
let Ol = null;
F.safari && F.safari_version >= 26 && (Ol = false);
function xv(l) {
  if (l.setActive) return l.setActive();
  if (Ol) return l.focus(Ol);
  let t = [];
  for (let e = l; e && (t.push(e, e.scrollTop, e.scrollLeft), e != e.ownerDocument); e = e.parentNode) ;
  if (l.focus(Ol == null ? { get preventScroll() {
    return Ol = { preventScroll: true }, true;
  } } : void 0), !Ol) {
    Ol = false;
    for (let e = 0; e < t.length; ) {
      let n = t[e++], r = t[e++], a = t[e++];
      n.scrollTop != r && (n.scrollTop = r), n.scrollLeft != a && (n.scrollLeft = a);
    }
  }
}
let S1;
function Ul(l, t, e = t) {
  let n = S1 || (S1 = document.createRange());
  return n.setEnd(l, e), n.setStart(l, t), n;
}
function zs(l, t, e, n) {
  let r = { key: t, code: t, keyCode: e, which: e, cancelable: true };
  n && ({ altKey: r.altKey, ctrlKey: r.ctrlKey, shiftKey: r.shiftKey, metaKey: r.metaKey } = n);
  let a = new KeyboardEvent("keydown", r);
  a.synthetic = true, l.dispatchEvent(a);
  let u = new KeyboardEvent("keyup", r);
  return u.synthetic = true, l.dispatchEvent(u), a.defaultPrevented || u.defaultPrevented;
}
function uA(l) {
  for (; l; ) {
    if (l && (l.nodeType == 9 || l.nodeType == 11 && l.host)) return l;
    l = l.assignedSlot || l.parentNode;
  }
  return null;
}
function wv(l) {
  for (; l.attributes.length; ) l.removeAttributeNode(l.attributes[0]);
}
function cA(l, t) {
  let e = t.focusNode, n = t.focusOffset;
  if (!e || t.anchorNode != e || t.anchorOffset != n) return false;
  for (n = Math.min(n, Ji(e)); ; ) if (n) {
    if (e.nodeType != 1) return false;
    let r = e.childNodes[n - 1];
    r.contentEditable == "false" ? n-- : (e = r, n = Ji(e));
  } else {
    if (e == l) return true;
    n = Hl(e), e = e.parentNode;
  }
}
function Cv(l) {
  return l.scrollTop > Math.max(1, l.scrollHeight - l.clientHeight - 4);
}
function Av(l, t) {
  for (let e = l, n = t; ; ) {
    if (e.nodeType == 3 && n > 0) return { node: e, offset: n };
    if (e.nodeType == 1 && n > 0) {
      if (e.contentEditable == "false") return null;
      e = e.childNodes[n - 1], n = Ji(e);
    } else if (e.parentNode && !Uu(e)) n = Hl(e), e = e.parentNode;
    else return null;
  }
}
function Mv(l, t) {
  for (let e = l, n = t; ; ) {
    if (e.nodeType == 3 && n < e.nodeValue.length) return { node: e, offset: n };
    if (e.nodeType == 1 && n < e.childNodes.length) {
      if (e.contentEditable == "false") return null;
      e = e.childNodes[n], n = 0;
    } else if (e.parentNode && !Uu(e)) n = Hl(e) + 1, e = e.parentNode;
    else return null;
  }
}
class De {
  constructor(t, e, n = true) {
    this.node = t, this.offset = e, this.precise = n;
  }
  static before(t, e) {
    return new De(t.parentNode, Hl(t), e);
  }
  static after(t, e) {
    return new De(t.parentNode, Hl(t) + 1, e);
  }
}
const xm = [];
class jt {
  constructor() {
    this.parent = null, this.dom = null, this.flags = 2;
  }
  get overrideDOMText() {
    return null;
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0;
  }
  get posAtEnd() {
    return this.posAtStart + this.length;
  }
  posBefore(t) {
    let e = this.posAtStart;
    for (let n of this.children) {
      if (n == t) return e;
      e += n.length + n.breakAfter;
    }
    throw new RangeError("Invalid child in posBefore");
  }
  posAfter(t) {
    return this.posBefore(t) + t.length;
  }
  sync(t, e) {
    if (this.flags & 2) {
      let n = this.dom, r = null, a;
      for (let u of this.children) {
        if (u.flags & 7) {
          if (!u.dom && (a = r ? r.nextSibling : n.firstChild)) {
            let f = jt.get(a);
            (!f || !f.parent && f.canReuseDOM(u)) && u.reuseDOM(a);
          }
          u.sync(t, e), u.flags &= -8;
        }
        if (a = r ? r.nextSibling : n.firstChild, e && !e.written && e.node == n && a != u.dom && (e.written = true), u.dom.parentNode == n) for (; a && a != u.dom; ) a = x1(a);
        else n.insertBefore(u.dom, a);
        r = u.dom;
      }
      for (a = r ? r.nextSibling : n.firstChild, a && e && e.node == n && (e.written = true); a; ) a = x1(a);
    } else if (this.flags & 1) for (let n of this.children) n.flags & 7 && (n.sync(t, e), n.flags &= -8);
  }
  reuseDOM(t) {
  }
  localPosFromDOM(t, e) {
    let n;
    if (t == this.dom) n = this.dom.childNodes[e];
    else {
      let r = Ji(t) == 0 ? 0 : e == 0 ? -1 : 1;
      for (; ; ) {
        let a = t.parentNode;
        if (a == this.dom) break;
        r == 0 && a.firstChild != a.lastChild && (t == a.firstChild ? r = -1 : r = 1), t = a;
      }
      r < 0 ? n = t : n = t.nextSibling;
    }
    if (n == this.dom.firstChild) return 0;
    for (; n && !jt.get(n); ) n = n.nextSibling;
    if (!n) return this.length;
    for (let r = 0, a = 0; ; r++) {
      let u = this.children[r];
      if (u.dom == n) return a;
      a += u.length + u.breakAfter;
    }
  }
  domBoundsAround(t, e, n = 0) {
    let r = -1, a = -1, u = -1, f = -1;
    for (let h = 0, g = n, p = n; h < this.children.length; h++) {
      let y = this.children[h], v = g + y.length;
      if (g < t && v > e) return y.domBoundsAround(t, e, g);
      if (v >= t && r == -1 && (r = h, a = g), g > e && y.dom.parentNode == this.dom) {
        u = h, f = p;
        break;
      }
      p = v, g = v + y.breakAfter;
    }
    return { from: a, to: f < 0 ? n + this.length : f, startDOM: (r ? this.children[r - 1].dom.nextSibling : null) || this.dom.firstChild, endDOM: u < this.children.length && u >= 0 ? this.children[u].dom : null };
  }
  markDirty(t = false) {
    this.flags |= 2, this.markParentsDirty(t);
  }
  markParentsDirty(t) {
    for (let e = this.parent; e; e = e.parent) {
      if (t && (e.flags |= 2), e.flags & 1) return;
      e.flags |= 1, t = false;
    }
  }
  setParent(t) {
    this.parent != t && (this.parent = t, this.flags & 7 && this.markParentsDirty(true));
  }
  setDOM(t) {
    this.dom != t && (this.dom && (this.dom.cmView = null), this.dom = t, t.cmView = this);
  }
  get rootView() {
    for (let t = this; ; ) {
      let e = t.parent;
      if (!e) return t;
      t = e;
    }
  }
  replaceChildren(t, e, n = xm) {
    this.markDirty();
    for (let r = t; r < e; r++) {
      let a = this.children[r];
      a.parent == this && n.indexOf(a) < 0 && a.destroy();
    }
    n.length < 250 ? this.children.splice(t, e - t, ...n) : this.children = [].concat(this.children.slice(0, t), n, this.children.slice(e));
    for (let r = 0; r < n.length; r++) n[r].setParent(this);
  }
  ignoreMutation(t) {
    return false;
  }
  ignoreEvent(t) {
    return false;
  }
  childCursor(t = this.length) {
    return new Tv(this.children, t, this.children.length);
  }
  childPos(t, e = 1) {
    return this.childCursor().findPos(t, e);
  }
  toString() {
    let t = this.constructor.name.replace("View", "");
    return t + (this.children.length ? "(" + this.children.join() + ")" : this.length ? "[" + (t == "Text" ? this.text : this.length) + "]" : "") + (this.breakAfter ? "#" : "");
  }
  static get(t) {
    return t.cmView;
  }
  get isEditable() {
    return true;
  }
  get isWidget() {
    return false;
  }
  get isHidden() {
    return false;
  }
  merge(t, e, n, r, a, u) {
    return false;
  }
  become(t) {
    return false;
  }
  canReuseDOM(t) {
    return t.constructor == this.constructor && !((this.flags | t.flags) & 8);
  }
  getSide() {
    return 0;
  }
  destroy() {
    for (let t of this.children) t.parent == this && t.destroy();
    this.parent = null;
  }
}
jt.prototype.breakAfter = 0;
function x1(l) {
  let t = l.nextSibling;
  return l.parentNode.removeChild(l), t;
}
class Tv {
  constructor(t, e, n) {
    this.children = t, this.pos = e, this.i = n, this.off = 0;
  }
  findPos(t, e = 1) {
    for (; ; ) {
      if (t > this.pos || t == this.pos && (e > 0 || this.i == 0 || this.children[this.i - 1].breakAfter)) return this.off = t - this.pos, this;
      let n = this.children[--this.i];
      this.pos -= n.length + n.breakAfter;
    }
  }
}
function kv(l, t, e, n, r, a, u, f, h) {
  let { children: g } = l, p = g.length ? g[t] : null, y = a.length ? a[a.length - 1] : null, v = y ? y.breakAfter : u;
  if (!(t == n && p && !u && !v && a.length < 2 && p.merge(e, r, a.length ? y : null, e == 0, f, h))) {
    if (n < g.length) {
      let S = g[n];
      S && (r < S.length || S.breakAfter && (y == null ? void 0 : y.breakAfter)) ? (t == n && (S = S.split(r), r = 0), !v && y && S.merge(0, r, y, true, 0, h) ? a[a.length - 1] = S : ((r || S.children.length && !S.children[0].length) && S.merge(0, r, null, false, 0, h), a.push(S))) : (S == null ? void 0 : S.breakAfter) && (y ? y.breakAfter = 1 : u = 1), n++;
    }
    for (p && (p.breakAfter = u, e > 0 && (!u && a.length && p.merge(e, p.length, a[0], false, f, 0) ? p.breakAfter = a.shift().breakAfter : (e < p.length || p.children.length && p.children[p.children.length - 1].length == 0) && p.merge(e, p.length, null, false, f, 0), t++)); t < n && a.length; ) if (g[n - 1].become(a[a.length - 1])) n--, a.pop(), h = a.length ? 0 : f;
    else if (g[t].become(a[0])) t++, a.shift(), f = a.length ? 0 : h;
    else break;
    !a.length && t && n < g.length && !g[t - 1].breakAfter && g[n].merge(0, 0, g[t - 1], false, f, h) && t--, (t < n || a.length) && l.replaceChildren(t, n, a);
  }
}
function Ov(l, t, e, n, r, a) {
  let u = l.childCursor(), { i: f, off: h } = u.findPos(e, 1), { i: g, off: p } = u.findPos(t, -1), y = t - e;
  for (let v of n) y += v.length;
  l.length += y, kv(l, g, p, f, h, n, 0, r, a);
}
const fA = 256;
class Ei extends jt {
  constructor(t) {
    super(), this.text = t;
  }
  get length() {
    return this.text.length;
  }
  createDOM(t) {
    this.setDOM(t || document.createTextNode(this.text));
  }
  sync(t, e) {
    this.dom || this.createDOM(), this.dom.nodeValue != this.text && (e && e.node == this.dom && (e.written = true), this.dom.nodeValue = this.text);
  }
  reuseDOM(t) {
    t.nodeType == 3 && this.createDOM(t);
  }
  merge(t, e, n) {
    return this.flags & 8 || n && (!(n instanceof Ei) || this.length - (e - t) + n.length > fA || n.flags & 8) ? false : (this.text = this.text.slice(0, t) + (n ? n.text : "") + this.text.slice(e), this.markDirty(), true);
  }
  split(t) {
    let e = new Ei(this.text.slice(t));
    return this.text = this.text.slice(0, t), this.markDirty(), e.flags |= this.flags & 8, e;
  }
  localPosFromDOM(t, e) {
    return t == this.dom ? e : e ? this.text.length : 0;
  }
  domAtPos(t) {
    return new De(this.dom, t);
  }
  domBoundsAround(t, e, n) {
    return { from: n, to: n + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling };
  }
  coordsAt(t, e) {
    return hA(this.dom, t, e);
  }
}
class xn extends jt {
  constructor(t, e = [], n = 0) {
    super(), this.mark = t, this.children = e, this.length = n;
    for (let r of e) r.setParent(this);
  }
  setAttrs(t) {
    if (wv(t), this.mark.class && (t.className = this.mark.class), this.mark.attrs) for (let e in this.mark.attrs) t.setAttribute(e, this.mark.attrs[e]);
    return t;
  }
  canReuseDOM(t) {
    return super.canReuseDOM(t) && !((this.flags | t.flags) & 8);
  }
  reuseDOM(t) {
    t.nodeName == this.mark.tagName.toUpperCase() && (this.setDOM(t), this.flags |= 6);
  }
  sync(t, e) {
    this.dom ? this.flags & 4 && this.setAttrs(this.dom) : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))), super.sync(t, e);
  }
  merge(t, e, n, r, a, u) {
    return n && (!(n instanceof xn && n.mark.eq(this.mark)) || t && a <= 0 || e < this.length && u <= 0) ? false : (Ov(this, t, e, n ? n.children.slice() : [], a - 1, u - 1), this.markDirty(), true);
  }
  split(t) {
    let e = [], n = 0, r = -1, a = 0;
    for (let f of this.children) {
      let h = n + f.length;
      h > t && e.push(n < t ? f.split(t - n) : f), r < 0 && n >= t && (r = a), n = h, a++;
    }
    let u = this.length - t;
    return this.length = t, r > -1 && (this.children.length = r, this.markDirty()), new xn(this.mark, e, u);
  }
  domAtPos(t) {
    return Dv(this, t);
  }
  coordsAt(t, e) {
    return Bv(this, t, e);
  }
}
function hA(l, t, e) {
  let n = l.nodeValue.length;
  t > n && (t = n);
  let r = t, a = t, u = 0;
  t == 0 && e < 0 || t == n && e >= 0 ? F.chrome || F.gecko || (t ? (r--, u = 1) : a < n && (a++, u = -1)) : e < 0 ? r-- : a < n && a++;
  let f = Ul(l, r, a).getClientRects();
  if (!f.length) return null;
  let h = f[(u ? u < 0 : e >= 0) ? 0 : f.length - 1];
  return F.safari && !u && h.width == 0 && (h = Array.prototype.find.call(f, (g) => g.width) || h), u ? Aa(h, u < 0) : h || null;
}
class bn extends jt {
  static create(t, e, n) {
    return new bn(t, e, n);
  }
  constructor(t, e, n) {
    super(), this.widget = t, this.length = e, this.side = n, this.prevWidget = null;
  }
  split(t) {
    let e = bn.create(this.widget, this.length - t, this.side);
    return this.length -= t, e;
  }
  sync(t) {
    (!this.dom || !this.widget.updateDOM(this.dom, t)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(t)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  getSide() {
    return this.side;
  }
  merge(t, e, n, r, a, u) {
    return n && (!(n instanceof bn) || !this.widget.compare(n.widget) || t > 0 && a <= 0 || e < this.length && u <= 0) ? false : (this.length = t + (n ? n.length : 0) + (this.length - e), true);
  }
  become(t) {
    return t instanceof bn && t.side == this.side && this.widget.constructor == t.widget.constructor ? (this.widget.compare(t.widget) || this.markDirty(true), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = t.widget, this.length = t.length, true) : false;
  }
  ignoreMutation() {
    return true;
  }
  ignoreEvent(t) {
    return this.widget.ignoreEvent(t);
  }
  get overrideDOMText() {
    if (this.length == 0) return Rt.empty;
    let t = this;
    for (; t.parent; ) t = t.parent;
    let { view: e } = t, n = e && e.state.doc, r = this.posAtStart;
    return n ? n.slice(r, r + this.length) : Rt.empty;
  }
  domAtPos(t) {
    return (this.length ? t == 0 : this.side > 0) ? De.before(this.dom) : De.after(this.dom, t == this.length);
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(t, e) {
    let n = this.widget.coordsAt(this.dom, t, e);
    if (n) return n;
    let r = this.dom.getClientRects(), a = null;
    if (!r.length) return null;
    let u = this.side ? this.side < 0 : t > 0;
    for (let f = u ? r.length - 1 : 0; a = r[f], !(t > 0 ? f == 0 : f == r.length - 1 || a.top < a.bottom); f += u ? -1 : 1) ;
    return Aa(a, !u);
  }
  get isEditable() {
    return false;
  }
  get isWidget() {
    return true;
  }
  get isHidden() {
    return this.widget.isHidden;
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
}
class qs extends jt {
  constructor(t) {
    super(), this.side = t;
  }
  get length() {
    return 0;
  }
  merge() {
    return false;
  }
  become(t) {
    return t instanceof qs && t.side == this.side;
  }
  split() {
    return new qs(this.side);
  }
  sync() {
    if (!this.dom) {
      let t = document.createElement("img");
      t.className = "cm-widgetBuffer", t.setAttribute("aria-hidden", "true"), this.setDOM(t);
    }
  }
  getSide() {
    return this.side;
  }
  domAtPos(t) {
    return this.side > 0 ? De.before(this.dom) : De.after(this.dom);
  }
  localPosFromDOM() {
    return 0;
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(t) {
    return this.dom.getBoundingClientRect();
  }
  get overrideDOMText() {
    return Rt.empty;
  }
  get isHidden() {
    return true;
  }
}
Ei.prototype.children = bn.prototype.children = qs.prototype.children = xm;
function Dv(l, t) {
  let e = l.dom, { children: n } = l, r = 0;
  for (let a = 0; r < n.length; r++) {
    let u = n[r], f = a + u.length;
    if (!(f == a && u.getSide() <= 0)) {
      if (t > a && t < f && u.dom.parentNode == e) return u.domAtPos(t - a);
      if (t <= a) break;
      a = f;
    }
  }
  for (let a = r; a > 0; a--) {
    let u = n[a - 1];
    if (u.dom.parentNode == e) return u.domAtPos(u.length);
  }
  for (let a = r; a < n.length; a++) {
    let u = n[a];
    if (u.dom.parentNode == e) return u.domAtPos(0);
  }
  return new De(e, 0);
}
function Ev(l, t, e) {
  let n, { children: r } = l;
  e > 0 && t instanceof xn && r.length && (n = r[r.length - 1]) instanceof xn && n.mark.eq(t.mark) ? Ev(n, t.children[0], e - 1) : (r.push(t), t.setParent(l)), l.length += t.length;
}
function Bv(l, t, e) {
  let n = null, r = -1, a = null, u = -1;
  function f(g, p) {
    for (let y = 0, v = 0; y < g.children.length && v <= p; y++) {
      let S = g.children[y], w = v + S.length;
      w >= p && (S.children.length ? f(S, p - v) : (!a || a.isHidden && (e > 0 || mA(a, S))) && (w > p || v == w && S.getSide() > 0) ? (a = S, u = p - v) : (v < p || v == w && S.getSide() < 0 && !S.isHidden) && (n = S, r = p - v)), v = w;
    }
  }
  f(l, t);
  let h = (e < 0 ? n : a) || n || a;
  return h ? h.coordsAt(Math.max(0, h == n ? r : u), e) : dA(l);
}
function dA(l) {
  let t = l.dom.lastChild;
  if (!t) return l.dom.getBoundingClientRect();
  let e = Vs(t);
  return e[e.length - 1] || null;
}
function mA(l, t) {
  let e = l.coordsAt(0, 1), n = t.coordsAt(0, 1);
  return e && n && n.top < e.bottom;
}
function qd(l, t) {
  for (let e in l) e == "class" && t.class ? t.class += " " + l.class : e == "style" && t.style ? t.style += ";" + l.style : t[e] = l[e];
  return t;
}
const w1 = /* @__PURE__ */ Object.create(null);
function Vu(l, t, e) {
  if (l == t) return true;
  l || (l = w1), t || (t = w1);
  let n = Object.keys(l), r = Object.keys(t);
  if (n.length - (e && n.indexOf(e) > -1 ? 1 : 0) != r.length - (e && r.indexOf(e) > -1 ? 1 : 0)) return false;
  for (let a of n) if (a != e && (r.indexOf(a) == -1 || l[a] !== t[a])) return false;
  return true;
}
function jd(l, t, e) {
  let n = false;
  if (t) for (let r in t) e && r in e || (n = true, r == "style" ? l.style.cssText = "" : l.removeAttribute(r));
  if (e) for (let r in e) t && t[r] == e[r] || (n = true, r == "style" ? l.style.cssText = e[r] : l.setAttribute(r, e[r]));
  return n;
}
function gA(l) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let e = 0; e < l.attributes.length; e++) {
    let n = l.attributes[e];
    t[n.name] = n.value;
  }
  return t;
}
class Cn {
  eq(t) {
    return false;
  }
  updateDOM(t, e) {
    return false;
  }
  compare(t) {
    return this == t || this.constructor == t.constructor && this.eq(t);
  }
  get estimatedHeight() {
    return -1;
  }
  get lineBreaks() {
    return 0;
  }
  ignoreEvent(t) {
    return true;
  }
  coordsAt(t, e, n) {
    return null;
  }
  get isHidden() {
    return false;
  }
  get editable() {
    return false;
  }
  destroy(t) {
  }
}
var He = (function(l) {
  return l[l.Text = 0] = "Text", l[l.WidgetBefore = 1] = "WidgetBefore", l[l.WidgetAfter = 2] = "WidgetAfter", l[l.WidgetRange = 3] = "WidgetRange", l;
})(He || (He = {}));
class ut extends Ll {
  constructor(t, e, n, r) {
    super(), this.startSide = t, this.endSide = e, this.widget = n, this.spec = r;
  }
  get heightRelevant() {
    return false;
  }
  static mark(t) {
    return new Ma(t);
  }
  static widget(t) {
    let e = Math.max(-1e4, Math.min(1e4, t.side || 0)), n = !!t.block;
    return e += n && !t.inlineOrder ? e > 0 ? 3e8 : -4e8 : e > 0 ? 1e8 : -1e8, new ll(t, e, e, n, t.widget || null, false);
  }
  static replace(t) {
    let e = !!t.block, n, r;
    if (t.isBlockGap) n = -5e8, r = 4e8;
    else {
      let { start: a, end: u } = Rv(t, e);
      n = (a ? e ? -3e8 : -1 : 5e8) - 1, r = (u ? e ? 2e8 : 1 : -6e8) + 1;
    }
    return new ll(t, n, r, e, t.widget || null, true);
  }
  static line(t) {
    return new Ta(t);
  }
  static set(t, e = false) {
    return Bt.of(t, e);
  }
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : false;
  }
}
ut.none = Bt.empty;
class Ma extends ut {
  constructor(t) {
    let { start: e, end: n } = Rv(t);
    super(e ? -1 : 5e8, n ? 1 : -6e8, null, t), this.tagName = t.tagName || "span", this.class = t.class || "", this.attrs = t.attributes || null;
  }
  eq(t) {
    var e, n;
    return this == t || t instanceof Ma && this.tagName == t.tagName && (this.class || ((e = this.attrs) === null || e === void 0 ? void 0 : e.class)) == (t.class || ((n = t.attrs) === null || n === void 0 ? void 0 : n.class)) && Vu(this.attrs, t.attrs, "class");
  }
  range(t, e = t) {
    if (t >= e) throw new RangeError("Mark decorations may not be empty");
    return super.range(t, e);
  }
}
Ma.prototype.point = false;
class Ta extends ut {
  constructor(t) {
    super(-2e8, -2e8, null, t);
  }
  eq(t) {
    return t instanceof Ta && this.spec.class == t.spec.class && Vu(this.spec.attributes, t.spec.attributes);
  }
  range(t, e = t) {
    if (e != t) throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(t, e);
  }
}
Ta.prototype.mapMode = Le.TrackBefore;
Ta.prototype.point = true;
class ll extends ut {
  constructor(t, e, n, r, a, u) {
    super(e, n, a, t), this.block = r, this.isReplace = u, this.mapMode = r ? e <= 0 ? Le.TrackBefore : Le.TrackAfter : Le.TrackDel;
  }
  get type() {
    return this.startSide != this.endSide ? He.WidgetRange : this.startSide <= 0 ? He.WidgetBefore : He.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(t) {
    return t instanceof ll && pA(this.widget, t.widget) && this.block == t.block && this.startSide == t.startSide && this.endSide == t.endSide;
  }
  range(t, e = t) {
    if (this.isReplace && (t > e || t == e && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && e != t) throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(t, e);
  }
}
ll.prototype.point = true;
function Rv(l, t = false) {
  let { inclusiveStart: e, inclusiveEnd: n } = l;
  return e == null && (e = l.inclusive), n == null && (n = l.inclusive), { start: e ?? t, end: n ?? t };
}
function pA(l, t) {
  return l == t || !!(l && t && l.compare(t));
}
function Ou(l, t, e, n = 0) {
  let r = e.length - 1;
  r >= 0 && e[r] + n >= l ? e[r] = Math.max(e[r], t) : e.push(l, t);
}
class ce extends jt {
  constructor() {
    super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0;
  }
  merge(t, e, n, r, a, u) {
    if (n) {
      if (!(n instanceof ce)) return false;
      this.dom || n.transferDOM(this);
    }
    return r && this.setDeco(n ? n.attrs : null), Ov(this, t, e, n ? n.children.slice() : [], a, u), true;
  }
  split(t) {
    let e = new ce();
    if (e.breakAfter = this.breakAfter, this.length == 0) return e;
    let { i: n, off: r } = this.childPos(t);
    r && (e.append(this.children[n].split(r), 0), this.children[n].merge(r, this.children[n].length, null, false, 0, 0), n++);
    for (let a = n; a < this.children.length; a++) e.append(this.children[a], 0);
    for (; n > 0 && this.children[n - 1].length == 0; ) this.children[--n].destroy();
    return this.children.length = n, this.markDirty(), this.length = t, e;
  }
  transferDOM(t) {
    this.dom && (this.markDirty(), t.setDOM(this.dom), t.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs, this.prevAttrs = void 0, this.dom = null);
  }
  setDeco(t) {
    Vu(this.attrs, t) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = t);
  }
  append(t, e) {
    Ev(this, t, e);
  }
  addLineDeco(t) {
    let e = t.spec.attributes, n = t.spec.class;
    e && (this.attrs = qd(e, this.attrs || {})), n && (this.attrs = qd({ class: n }, this.attrs || {}));
  }
  domAtPos(t) {
    return Dv(this, t);
  }
  reuseDOM(t) {
    t.nodeName == "DIV" && (this.setDOM(t), this.flags |= 6);
  }
  sync(t, e) {
    var n;
    this.dom ? this.flags & 4 && (wv(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), this.prevAttrs !== void 0 && (jd(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(t, e);
    let r = this.dom.lastChild;
    for (; r && jt.get(r) instanceof xn; ) r = r.lastChild;
    if (!r || !this.length || r.nodeName != "BR" && ((n = jt.get(r)) === null || n === void 0 ? void 0 : n.isEditable) == false && (!F.ios || !this.children.some((a) => a instanceof Ei))) {
      let a = document.createElement("BR");
      a.cmIgnore = true, this.dom.appendChild(a);
    }
  }
  measureTextSize() {
    if (this.children.length == 0 || this.length > 20) return null;
    let t = 0, e;
    for (let n of this.children) {
      if (!(n instanceof Ei) || /[^ -~]/.test(n.text)) return null;
      let r = Vs(n.dom);
      if (r.length != 1) return null;
      t += r[0].width, e = r[0].height;
    }
    return t ? { lineHeight: this.dom.getBoundingClientRect().height, charWidth: t / this.length, textHeight: e } : null;
  }
  coordsAt(t, e) {
    let n = Bv(this, t, e);
    if (!this.children.length && n && this.parent) {
      let { heightOracle: r } = this.parent.view.viewState, a = n.bottom - n.top;
      if (Math.abs(a - r.lineHeight) < 2 && r.textHeight < a) {
        let u = (a - r.textHeight) / 2;
        return { top: n.top + u, bottom: n.bottom - u, left: n.left, right: n.left };
      }
    }
    return n;
  }
  become(t) {
    return t instanceof ce && this.children.length == 0 && t.children.length == 0 && Vu(this.attrs, t.attrs) && this.breakAfter == t.breakAfter;
  }
  covers() {
    return true;
  }
  static find(t, e) {
    for (let n = 0, r = 0; n < t.children.length; n++) {
      let a = t.children[n], u = r + a.length;
      if (u >= e) {
        if (a instanceof ce) return a;
        if (u > e) break;
      }
      r = u + a.breakAfter;
    }
    return null;
  }
}
class vn extends jt {
  constructor(t, e, n) {
    super(), this.widget = t, this.length = e, this.deco = n, this.breakAfter = 0, this.prevWidget = null;
  }
  merge(t, e, n, r, a, u) {
    return n && (!(n instanceof vn) || !this.widget.compare(n.widget) || t > 0 && a <= 0 || e < this.length && u <= 0) ? false : (this.length = t + (n ? n.length : 0) + (this.length - e), true);
  }
  domAtPos(t) {
    return t == 0 ? De.before(this.dom) : De.after(this.dom, t == this.length);
  }
  split(t) {
    let e = this.length - t;
    this.length = t;
    let n = new vn(this.widget, e, this.deco);
    return n.breakAfter = this.breakAfter, n;
  }
  get children() {
    return xm;
  }
  sync(t) {
    (!this.dom || !this.widget.updateDOM(this.dom, t)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(t)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  get overrideDOMText() {
    return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : Rt.empty;
  }
  domBoundsAround() {
    return null;
  }
  become(t) {
    return t instanceof vn && t.widget.constructor == this.widget.constructor ? (t.widget.compare(this.widget) || this.markDirty(true), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = t.widget, this.length = t.length, this.deco = t.deco, this.breakAfter = t.breakAfter, true) : false;
  }
  ignoreMutation() {
    return true;
  }
  ignoreEvent(t) {
    return this.widget.ignoreEvent(t);
  }
  get isEditable() {
    return false;
  }
  get isWidget() {
    return true;
  }
  coordsAt(t, e) {
    let n = this.widget.coordsAt(this.dom, t, e);
    return n || (this.widget instanceof Yd ? null : Aa(this.dom.getBoundingClientRect(), this.length ? t == 0 : e <= 0));
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
  covers(t) {
    let { startSide: e, endSide: n } = this.deco;
    return e == n ? false : t < 0 ? e < 0 : n > 0;
  }
}
class Yd extends Cn {
  constructor(t) {
    super(), this.height = t;
  }
  toDOM() {
    let t = document.createElement("div");
    return t.className = "cm-gap", this.updateDOM(t), t;
  }
  eq(t) {
    return t.height == this.height;
  }
  updateDOM(t) {
    return t.style.height = this.height + "px", true;
  }
  get editable() {
    return true;
  }
  get estimatedHeight() {
    return this.height;
  }
  ignoreEvent() {
    return false;
  }
}
class la {
  constructor(t, e, n, r) {
    this.doc = t, this.pos = e, this.end = n, this.disallowBlockEffectsFor = r, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.bufferMarks = [], this.atCursorPos = true, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = t.iter(), this.skip = e;
  }
  posCovered() {
    if (this.content.length == 0) return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
    let t = this.content[this.content.length - 1];
    return !(t.breakAfter || t instanceof vn && t.deco.endSide < 0);
  }
  getLine() {
    return this.curLine || (this.content.push(this.curLine = new ce()), this.atCursorPos = true), this.curLine;
  }
  flushBuffer(t = this.bufferMarks) {
    this.pendingBuffer && (this.curLine.append(iu(new qs(-1), t), t.length), this.pendingBuffer = 0);
  }
  addBlockWidget(t) {
    this.flushBuffer(), this.curLine = null, this.content.push(t);
  }
  finish(t) {
    this.pendingBuffer && t <= this.bufferMarks.length ? this.flushBuffer() : this.pendingBuffer = 0, !this.posCovered() && !(t && this.content.length && this.content[this.content.length - 1] instanceof vn) && this.getLine();
  }
  buildText(t, e, n) {
    for (; t > 0; ) {
      if (this.textOff == this.text.length) {
        let { value: u, lineBreak: f, done: h } = this.cursor.next(this.skip);
        if (this.skip = 0, h) throw new Error("Ran out of text content when drawing inline views");
        if (f) {
          this.posCovered() || this.getLine(), this.content.length ? this.content[this.content.length - 1].breakAfter = 1 : this.breakAtStart = 1, this.flushBuffer(), this.curLine = null, this.atCursorPos = true, t--;
          continue;
        } else this.text = u, this.textOff = 0;
      }
      let r = Math.min(this.text.length - this.textOff, t), a = Math.min(r, 512);
      this.flushBuffer(e.slice(e.length - n)), this.getLine().append(iu(new Ei(this.text.slice(this.textOff, this.textOff + a)), e), n), this.atCursorPos = true, this.textOff += a, t -= a, n = r <= a ? 0 : e.length;
    }
  }
  span(t, e, n, r) {
    this.buildText(e - t, n, r), this.pos = e, this.openStart < 0 && (this.openStart = r);
  }
  point(t, e, n, r, a, u) {
    if (this.disallowBlockEffectsFor[u] && n instanceof ll) {
      if (n.block) throw new RangeError("Block decorations may not be specified via plugins");
      if (e > this.doc.lineAt(this.pos).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
    }
    let f = e - t;
    if (n instanceof ll) if (n.block) n.startSide > 0 && !this.posCovered() && this.getLine(), this.addBlockWidget(new vn(n.widget || js.block, f, n));
    else {
      let h = bn.create(n.widget || js.inline, f, f ? 0 : n.startSide), g = this.atCursorPos && !h.isEditable && a <= r.length && (t < e || n.startSide > 0), p = !h.isEditable && (t < e || a > r.length || n.startSide <= 0), y = this.getLine();
      this.pendingBuffer == 2 && !g && !h.isEditable && (this.pendingBuffer = 0), this.flushBuffer(r), g && (y.append(iu(new qs(1), r), a), a = r.length + Math.max(0, a - r.length)), y.append(iu(h, r), a), this.atCursorPos = p, this.pendingBuffer = p ? t < e || a > r.length ? 1 : 2 : 0, this.pendingBuffer && (this.bufferMarks = r.slice());
    }
    else this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(n);
    f && (this.textOff + f <= this.text.length ? this.textOff += f : (this.skip += f - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = e), this.openStart < 0 && (this.openStart = a);
  }
  static build(t, e, n, r, a) {
    let u = new la(t, e, n, a);
    return u.openEnd = Bt.spans(r, e, n, u), u.openStart < 0 && (u.openStart = u.openEnd), u.finish(u.openEnd), u;
  }
}
function iu(l, t) {
  for (let e of t) l = new xn(e, [l], l.length);
  return l;
}
class js extends Cn {
  constructor(t) {
    super(), this.tag = t;
  }
  eq(t) {
    return t.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(t) {
    return t.nodeName.toLowerCase() == this.tag;
  }
  get isHidden() {
    return true;
  }
}
js.inline = new js("span");
js.block = new js("div");
var Wt = (function(l) {
  return l[l.LTR = 0] = "LTR", l[l.RTL = 1] = "RTL", l;
})(Wt || (Wt = {}));
const Vl = Wt.LTR, wm = Wt.RTL;
function zv(l) {
  let t = [];
  for (let e = 0; e < l.length; e++) t.push(1 << +l[e]);
  return t;
}
const yA = zv("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), bA = zv("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), Gd = /* @__PURE__ */ Object.create(null), Ui = [];
for (let l of ["()", "[]", "{}"]) {
  let t = l.charCodeAt(0), e = l.charCodeAt(1);
  Gd[t] = e, Gd[e] = -t;
}
function Nv(l) {
  return l <= 247 ? yA[l] : 1424 <= l && l <= 1524 ? 2 : 1536 <= l && l <= 1785 ? bA[l - 1536] : 1774 <= l && l <= 2220 ? 4 : 8192 <= l && l <= 8204 ? 256 : 64336 <= l && l <= 65023 ? 4 : 1;
}
const vA = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class $n {
  get dir() {
    return this.level % 2 ? wm : Vl;
  }
  constructor(t, e, n) {
    this.from = t, this.to = e, this.level = n;
  }
  side(t, e) {
    return this.dir == e == t ? this.to : this.from;
  }
  forward(t, e) {
    return t == (this.dir == e);
  }
  static find(t, e, n, r) {
    let a = -1;
    for (let u = 0; u < t.length; u++) {
      let f = t[u];
      if (f.from <= e && f.to >= e) {
        if (f.level == n) return u;
        (a < 0 || (r != 0 ? r < 0 ? f.from < e : f.to > e : t[a].level > f.level)) && (a = u);
      }
    }
    if (a < 0) throw new RangeError("Index out of range");
    return a;
  }
}
function _v(l, t) {
  if (l.length != t.length) return false;
  for (let e = 0; e < l.length; e++) {
    let n = l[e], r = t[e];
    if (n.from != r.from || n.to != r.to || n.direction != r.direction || !_v(n.inner, r.inner)) return false;
  }
  return true;
}
const Xt = [];
function SA(l, t, e, n, r) {
  for (let a = 0; a <= n.length; a++) {
    let u = a ? n[a - 1].to : t, f = a < n.length ? n[a].from : e, h = a ? 256 : r;
    for (let g = u, p = h, y = h; g < f; g++) {
      let v = Nv(l.charCodeAt(g));
      v == 512 ? v = p : v == 8 && y == 4 && (v = 16), Xt[g] = v == 4 ? 2 : v, v & 7 && (y = v), p = v;
    }
    for (let g = u, p = h, y = h; g < f; g++) {
      let v = Xt[g];
      if (v == 128) g < f - 1 && p == Xt[g + 1] && p & 24 ? v = Xt[g] = p : Xt[g] = 256;
      else if (v == 64) {
        let S = g + 1;
        for (; S < f && Xt[S] == 64; ) S++;
        let w = g && p == 8 || S < e && Xt[S] == 8 ? y == 1 ? 1 : 8 : 256;
        for (let C = g; C < S; C++) Xt[C] = w;
        g = S - 1;
      } else v == 8 && y == 1 && (Xt[g] = 1);
      p = v, v & 7 && (y = v);
    }
  }
}
function xA(l, t, e, n, r) {
  let a = r == 1 ? 2 : 1;
  for (let u = 0, f = 0, h = 0; u <= n.length; u++) {
    let g = u ? n[u - 1].to : t, p = u < n.length ? n[u].from : e;
    for (let y = g, v, S, w; y < p; y++) if (S = Gd[v = l.charCodeAt(y)]) if (S < 0) {
      for (let C = f - 3; C >= 0; C -= 3) if (Ui[C + 1] == -S) {
        let T = Ui[C + 2], O = T & 2 ? r : T & 4 ? T & 1 ? a : r : 0;
        O && (Xt[y] = Xt[Ui[C]] = O), f = C;
        break;
      }
    } else {
      if (Ui.length == 189) break;
      Ui[f++] = y, Ui[f++] = v, Ui[f++] = h;
    }
    else if ((w = Xt[y]) == 2 || w == 1) {
      let C = w == r;
      h = C ? 0 : 1;
      for (let T = f - 3; T >= 0; T -= 3) {
        let O = Ui[T + 2];
        if (O & 2) break;
        if (C) Ui[T + 2] |= 2;
        else {
          if (O & 4) break;
          Ui[T + 2] |= 4;
        }
      }
    }
  }
}
function wA(l, t, e, n) {
  for (let r = 0, a = n; r <= e.length; r++) {
    let u = r ? e[r - 1].to : l, f = r < e.length ? e[r].from : t;
    for (let h = u; h < f; ) {
      let g = Xt[h];
      if (g == 256) {
        let p = h + 1;
        for (; ; ) if (p == f) {
          if (r == e.length) break;
          p = e[r++].to, f = r < e.length ? e[r].from : t;
        } else if (Xt[p] == 256) p++;
        else break;
        let y = a == 1, v = (p < t ? Xt[p] : n) == 1, S = y == v ? y ? 1 : 2 : n;
        for (let w = p, C = r, T = C ? e[C - 1].to : l; w > h; ) w == T && (w = e[--C].from, T = C ? e[C - 1].to : l), Xt[--w] = S;
        h = p;
      } else a = g, h++;
    }
  }
}
function Xd(l, t, e, n, r, a, u) {
  let f = n % 2 ? 2 : 1;
  if (n % 2 == r % 2) for (let h = t, g = 0; h < e; ) {
    let p = true, y = false;
    if (g == a.length || h < a[g].from) {
      let C = Xt[h];
      C != f && (p = false, y = C == 16);
    }
    let v = !p && f == 1 ? [] : null, S = p ? n : n + 1, w = h;
    t: for (; ; ) if (g < a.length && w == a[g].from) {
      if (y) break t;
      let C = a[g];
      if (!p) for (let T = C.to, O = g + 1; ; ) {
        if (T == e) break t;
        if (O < a.length && a[O].from == T) T = a[O++].to;
        else {
          if (Xt[T] == f) break t;
          break;
        }
      }
      if (g++, v) v.push(C);
      else {
        C.from > h && u.push(new $n(h, C.from, S));
        let T = C.direction == Vl != !(S % 2);
        Kd(l, T ? n + 1 : n, r, C.inner, C.from, C.to, u), h = C.to;
      }
      w = C.to;
    } else {
      if (w == e || (p ? Xt[w] != f : Xt[w] == f)) break;
      w++;
    }
    v ? Xd(l, h, w, n + 1, r, v, u) : h < w && u.push(new $n(h, w, S)), h = w;
  }
  else for (let h = e, g = a.length; h > t; ) {
    let p = true, y = false;
    if (!g || h > a[g - 1].to) {
      let C = Xt[h - 1];
      C != f && (p = false, y = C == 16);
    }
    let v = !p && f == 1 ? [] : null, S = p ? n : n + 1, w = h;
    t: for (; ; ) if (g && w == a[g - 1].to) {
      if (y) break t;
      let C = a[--g];
      if (!p) for (let T = C.from, O = g; ; ) {
        if (T == t) break t;
        if (O && a[O - 1].to == T) T = a[--O].from;
        else {
          if (Xt[T - 1] == f) break t;
          break;
        }
      }
      if (v) v.push(C);
      else {
        C.to < h && u.push(new $n(C.to, h, S));
        let T = C.direction == Vl != !(S % 2);
        Kd(l, T ? n + 1 : n, r, C.inner, C.from, C.to, u), h = C.from;
      }
      w = C.from;
    } else {
      if (w == t || (p ? Xt[w - 1] != f : Xt[w - 1] == f)) break;
      w--;
    }
    v ? Xd(l, w, h, n + 1, r, v, u) : w < h && u.push(new $n(w, h, S)), h = w;
  }
}
function Kd(l, t, e, n, r, a, u) {
  let f = t % 2 ? 2 : 1;
  SA(l, r, a, n, f), xA(l, r, a, n, f), wA(r, a, n, f), Xd(l, r, a, t, e, n, u);
}
function CA(l, t, e) {
  if (!l) return [new $n(0, 0, t == wm ? 1 : 0)];
  if (t == Vl && !e.length && !vA.test(l)) return Lv(l.length);
  if (e.length) for (; l.length > Xt.length; ) Xt[Xt.length] = 256;
  let n = [], r = t == Vl ? 0 : 1;
  return Kd(l, r, r, e, 0, l.length, n), n;
}
function Lv(l) {
  return [new $n(0, l, 0)];
}
let Hv = "";
function AA(l, t, e, n, r) {
  var a;
  let u = n.head - l.from, f = $n.find(t, u, (a = n.bidiLevel) !== null && a !== void 0 ? a : -1, n.assoc), h = t[f], g = h.side(r, e);
  if (u == g) {
    let v = f += r ? 1 : -1;
    if (v < 0 || v >= t.length) return null;
    h = t[f = v], u = h.side(!r, e), g = h.side(r, e);
  }
  let p = Me(l.text, u, h.forward(r, e));
  (p < h.from || p > h.to) && (p = g), Hv = l.text.slice(Math.min(u, p), Math.max(u, p));
  let y = f == (r ? t.length - 1 : 0) ? null : t[f + (r ? 1 : -1)];
  return y && p == g && y.level + (r ? 0 : 1) < h.level ? K.cursor(y.side(!r, e) + l.from, y.forward(r, e) ? 1 : -1, y.level) : K.cursor(p + l.from, h.forward(r, e) ? -1 : 1, h.level);
}
function MA(l, t, e) {
  for (let n = t; n < e; n++) {
    let r = Nv(l.charCodeAt(n));
    if (r == 1) return Vl;
    if (r == 2 || r == 4) return wm;
  }
  return Vl;
}
const Uv = et.define(), Vv = et.define(), qv = et.define(), jv = et.define(), Qd = et.define(), Yv = et.define(), Gv = et.define(), Cm = et.define(), Am = et.define(), Xv = et.define({ combine: (l) => l.some((t) => t) }), Kv = et.define({ combine: (l) => l.some((t) => t) }), Qv = et.define();
class Ns {
  constructor(t, e = "nearest", n = "nearest", r = 5, a = 5, u = false) {
    this.range = t, this.y = e, this.x = n, this.yMargin = r, this.xMargin = a, this.isSnapshot = u;
  }
  map(t) {
    return t.empty ? this : new Ns(this.range.map(t), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(t) {
    return this.range.to <= t.doc.length ? this : new Ns(K.cursor(t.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
}
const nu = St.define({ map: (l, t) => l.map(t) }), Zv = St.define();
function We(l, t, e) {
  let n = l.facet(jv);
  n.length ? n[0](t) : window.onerror && window.onerror(String(t), e, void 0, void 0, t) || (e ? console.error(e + ":", t) : console.error(t));
}
const yn = et.define({ combine: (l) => l.length ? l[0] : true });
let TA = 0;
const Os = et.define({ combine(l) {
  return l.filter((t, e) => {
    for (let n = 0; n < e; n++) if (l[n].plugin == t.plugin) return false;
    return true;
  });
} });
class ee {
  constructor(t, e, n, r, a) {
    this.id = t, this.create = e, this.domEventHandlers = n, this.domEventObservers = r, this.baseExtensions = a(this), this.extension = this.baseExtensions.concat(Os.of({ plugin: this, arg: void 0 }));
  }
  of(t) {
    return this.baseExtensions.concat(Os.of({ plugin: this, arg: t }));
  }
  static define(t, e) {
    const { eventHandlers: n, eventObservers: r, provide: a, decorations: u } = e || {};
    return new ee(TA++, t, n, r, (f) => {
      let h = [];
      return u && h.push(ha.of((g) => {
        let p = g.plugin(f);
        return p ? u(p) : ut.none;
      })), a && h.push(a(f)), h;
    });
  }
  static fromClass(t, e) {
    return ee.define((n, r) => new t(n, r), e);
  }
}
class Wh {
  constructor(t) {
    this.spec = t, this.mustUpdate = null, this.value = null;
  }
  get plugin() {
    return this.spec && this.spec.plugin;
  }
  update(t) {
    if (this.value) {
      if (this.mustUpdate) {
        let e = this.mustUpdate;
        if (this.mustUpdate = null, this.value.update) try {
          this.value.update(e);
        } catch (n) {
          if (We(e.state, n, "CodeMirror plugin crashed"), this.value.destroy) try {
            this.value.destroy();
          } catch {
          }
          this.deactivate();
        }
      }
    } else if (this.spec) try {
      this.value = this.spec.plugin.create(t, this.spec.arg);
    } catch (e) {
      We(t.state, e, "CodeMirror plugin crashed"), this.deactivate();
    }
    return this;
  }
  destroy(t) {
    var e;
    if (!((e = this.value) === null || e === void 0) && e.destroy) try {
      this.value.destroy();
    } catch (n) {
      We(t.state, n, "CodeMirror plugin crashed");
    }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const Wv = et.define(), Mm = et.define(), ha = et.define(), Jv = et.define(), ka = et.define(), Fv = et.define();
function C1(l, t) {
  let e = l.state.facet(Fv);
  if (!e.length) return e;
  let n = e.map((a) => a instanceof Function ? a(l) : a), r = [];
  return Bt.spans(n, t.from, t.to, { point() {
  }, span(a, u, f, h) {
    let g = a - t.from, p = u - t.from, y = r;
    for (let v = f.length - 1; v >= 0; v--, h--) {
      let S = f[v].spec.bidiIsolate, w;
      if (S == null && (S = MA(t.text, g, p)), h > 0 && y.length && (w = y[y.length - 1]).to == g && w.direction == S) w.to = p, y = w.inner;
      else {
        let C = { from: g, to: p, direction: S, inner: [] };
        y.push(C), y = C.inner;
      }
    }
  } }), r;
}
const Pv = et.define();
function Tm(l) {
  let t = 0, e = 0, n = 0, r = 0;
  for (let a of l.state.facet(Pv)) {
    let u = a(l);
    u && (u.left != null && (t = Math.max(t, u.left)), u.right != null && (e = Math.max(e, u.right)), u.top != null && (n = Math.max(n, u.top)), u.bottom != null && (r = Math.max(r, u.bottom)));
  }
  return { left: t, right: e, top: n, bottom: r };
}
const Jr = et.define();
class wi {
  constructor(t, e, n, r) {
    this.fromA = t, this.toA = e, this.fromB = n, this.toB = r;
  }
  join(t) {
    return new wi(Math.min(this.fromA, t.fromA), Math.max(this.toA, t.toA), Math.min(this.fromB, t.fromB), Math.max(this.toB, t.toB));
  }
  addToSet(t) {
    let e = t.length, n = this;
    for (; e > 0; e--) {
      let r = t[e - 1];
      if (!(r.fromA > n.toA)) {
        if (r.toA < n.fromA) break;
        n = n.join(r), t.splice(e - 1, 1);
      }
    }
    return t.splice(e, 0, n), t;
  }
  static extendWithRanges(t, e) {
    if (e.length == 0) return t;
    let n = [];
    for (let r = 0, a = 0, u = 0, f = 0; ; r++) {
      let h = r == t.length ? null : t[r], g = u - f, p = h ? h.fromB : 1e9;
      for (; a < e.length && e[a] < p; ) {
        let y = e[a], v = e[a + 1], S = Math.max(f, y), w = Math.min(p, v);
        if (S <= w && new wi(S + g, w + g, S, w).addToSet(n), v > p) break;
        a += 2;
      }
      if (!h) return n;
      new wi(h.fromA, h.toA, h.fromB, h.toB).addToSet(n), u = h.toA, f = h.toB;
    }
  }
}
class qu {
  constructor(t, e, n) {
    this.view = t, this.state = e, this.transactions = n, this.flags = 0, this.startState = t.state, this.changes = he.empty(this.startState.doc.length);
    for (let a of n) this.changes = this.changes.compose(a.changes);
    let r = [];
    this.changes.iterChangedRanges((a, u, f, h) => r.push(new wi(a, u, f, h))), this.changedRanges = r;
  }
  static create(t, e, n) {
    return new qu(t, e, n);
  }
  get viewportChanged() {
    return (this.flags & 4) > 0;
  }
  get viewportMoved() {
    return (this.flags & 8) > 0;
  }
  get heightChanged() {
    return (this.flags & 2) > 0;
  }
  get geometryChanged() {
    return this.docChanged || (this.flags & 18) > 0;
  }
  get focusChanged() {
    return (this.flags & 1) > 0;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get selectionSet() {
    return this.transactions.some((t) => t.selection);
  }
  get empty() {
    return this.flags == 0 && this.transactions.length == 0;
  }
}
class A1 extends jt {
  get length() {
    return this.view.state.doc.length;
  }
  constructor(t) {
    super(), this.view = t, this.decorations = [], this.dynamicDecorationMap = [false], this.domChanged = null, this.hasComposition = null, this.markedForComposition = /* @__PURE__ */ new Set(), this.editContextFormatting = ut.none, this.lastCompositionAfterCursor = false, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = false, this.lastUpdate = Date.now(), this.setDOM(t.contentDOM), this.children = [new ce()], this.children[0].setParent(this), this.updateDeco(), this.updateInner([new wi(0, 0, 0, t.state.doc.length)], 0, null);
  }
  update(t) {
    var e;
    let n = t.changedRanges;
    this.minWidth > 0 && n.length && (n.every(({ fromA: g, toA: p }) => p < this.minWidthFrom || g > this.minWidthTo) ? (this.minWidthFrom = t.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = t.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(t);
    let r = -1;
    this.view.inputState.composing >= 0 && !this.view.observer.editContext && (!((e = this.domChanged) === null || e === void 0) && e.newSel ? r = this.domChanged.newSel.head : !zA(t.changes, this.hasComposition) && !t.selectionSet && (r = t.state.selection.main.head));
    let a = r > -1 ? OA(this.view, t.changes, r) : null;
    if (this.domChanged = null, this.hasComposition) {
      this.markedForComposition.clear();
      let { from: g, to: p } = this.hasComposition;
      n = new wi(g, p, t.changes.mapPos(g, -1), t.changes.mapPos(p, 1)).addToSet(n.slice());
    }
    this.hasComposition = a ? { from: a.range.fromB, to: a.range.toB } : null, (F.ie || F.chrome) && !a && t && t.state.doc.lines != t.startState.doc.lines && (this.forceSelection = true);
    let u = this.decorations, f = this.updateDeco(), h = BA(u, f, t.changes);
    return n = wi.extendWithRanges(n, h), !(this.flags & 7) && n.length == 0 ? false : (this.updateInner(n, t.startState.doc.length, a), t.transactions.length && (this.lastUpdate = Date.now()), true);
  }
  updateInner(t, e, n) {
    this.view.viewState.mustMeasureContent = true, this.updateChildren(t, e, n);
    let { observer: r } = this.view;
    r.ignore(() => {
      this.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let u = F.chrome || F.ios ? { node: r.selectionRange.focusNode, written: false } : void 0;
      this.sync(this.view, u), this.flags &= -8, u && (u.written || r.selectionRange.focusNode != u.node) && (this.forceSelection = true), this.dom.style.height = "";
    }), this.markedForComposition.forEach((u) => u.flags &= -9);
    let a = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length) for (let u of this.children) u instanceof vn && u.widget instanceof Yd && a.push(u.dom);
    r.updateGaps(a);
  }
  updateChildren(t, e, n) {
    let r = n ? n.range.addToSet(t.slice()) : t, a = this.childCursor(e);
    for (let u = r.length - 1; ; u--) {
      let f = u >= 0 ? r[u] : null;
      if (!f) break;
      let { fromA: h, toA: g, fromB: p, toB: y } = f, v, S, w, C;
      if (n && n.range.fromB < y && n.range.toB > p) {
        let Q = la.build(this.view.state.doc, p, n.range.fromB, this.decorations, this.dynamicDecorationMap), _ = la.build(this.view.state.doc, n.range.toB, y, this.decorations, this.dynamicDecorationMap);
        S = Q.breakAtStart, w = Q.openStart, C = _.openEnd;
        let G = this.compositionView(n);
        _.breakAtStart ? G.breakAfter = 1 : _.content.length && G.merge(G.length, G.length, _.content[0], false, _.openStart, 0) && (G.breakAfter = _.content[0].breakAfter, _.content.shift()), Q.content.length && G.merge(0, 0, Q.content[Q.content.length - 1], true, 0, Q.openEnd) && Q.content.pop(), v = Q.content.concat(G).concat(_.content);
      } else ({ content: v, breakAtStart: S, openStart: w, openEnd: C } = la.build(this.view.state.doc, p, y, this.decorations, this.dynamicDecorationMap));
      let { i: T, off: O } = a.findPos(g, 1), { i: j, off: L } = a.findPos(h, -1);
      kv(this, j, L, T, O, v, S, w, C);
    }
    n && this.fixCompositionDOM(n);
  }
  updateEditContextFormatting(t) {
    this.editContextFormatting = this.editContextFormatting.map(t.changes);
    for (let e of t.transactions) for (let n of e.effects) n.is(Zv) && (this.editContextFormatting = n.value);
  }
  compositionView(t) {
    let e = new Ei(t.text.nodeValue);
    e.flags |= 8;
    for (let { deco: r } of t.marks) e = new xn(r, [e], e.length);
    let n = new ce();
    return n.append(e, 0), n;
  }
  fixCompositionDOM(t) {
    let e = (a, u) => {
      u.flags |= 8 | (u.children.some((h) => h.flags & 7) ? 1 : 0), this.markedForComposition.add(u);
      let f = jt.get(a);
      f && f != u && (f.dom = null), u.setDOM(a);
    }, n = this.childPos(t.range.fromB, 1), r = this.children[n.i];
    e(t.line, r);
    for (let a = t.marks.length - 1; a >= -1; a--) n = r.childPos(n.off, 1), r = r.children[n.i], e(a >= 0 ? t.marks[a].node : t.text, r);
  }
  updateSelection(t = false, e = false) {
    (t || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let n = this.view.root.activeElement, r = n == this.dom, a = !r && !(this.view.state.facet(yn) || this.dom.tabIndex > -1) && ku(this.dom, this.view.observer.selectionRange) && !(n && this.dom.contains(n));
    if (!(r || e || a)) return;
    let u = this.forceSelection;
    this.forceSelection = false;
    let f = this.view.state.selection.main, h = this.moveToLine(this.domAtPos(f.anchor)), g = f.empty ? h : this.moveToLine(this.domAtPos(f.head));
    if (F.gecko && f.empty && !this.hasComposition && kA(h)) {
      let y = document.createTextNode("");
      this.view.observer.ignore(() => h.node.insertBefore(y, h.node.childNodes[h.offset] || null)), h = g = new De(y, 0), u = true;
    }
    let p = this.view.observer.selectionRange;
    (u || !p.focusNode || (!na(h.node, h.offset, p.anchorNode, p.anchorOffset) || !na(g.node, g.offset, p.focusNode, p.focusOffset)) && !this.suppressWidgetCursorChange(p, f)) && (this.view.observer.ignore(() => {
      F.android && F.chrome && this.dom.contains(p.focusNode) && RA(p.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({ preventScroll: true }));
      let y = fa(this.view.root);
      if (y) if (f.empty) {
        if (F.gecko) {
          let v = DA(h.node, h.offset);
          if (v && v != 3) {
            let S = (v == 1 ? Av : Mv)(h.node, h.offset);
            S && (h = new De(S.node, S.offset));
          }
        }
        y.collapse(h.node, h.offset), f.bidiLevel != null && y.caretBidiLevel !== void 0 && (y.caretBidiLevel = f.bidiLevel);
      } else if (y.extend) {
        y.collapse(h.node, h.offset);
        try {
          y.extend(g.node, g.offset);
        } catch {
        }
      } else {
        let v = document.createRange();
        f.anchor > f.head && ([h, g] = [g, h]), v.setEnd(g.node, g.offset), v.setStart(h.node, h.offset), y.removeAllRanges(), y.addRange(v);
      }
      a && this.view.root.activeElement == this.dom && (this.dom.blur(), n && n.focus());
    }), this.view.observer.setSelectionRange(h, g)), this.impreciseAnchor = h.precise ? null : new De(p.anchorNode, p.anchorOffset), this.impreciseHead = g.precise ? null : new De(p.focusNode, p.focusOffset);
  }
  suppressWidgetCursorChange(t, e) {
    return this.hasComposition && e.empty && na(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset) && this.posFromDOM(t.focusNode, t.focusOffset) == e.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition) return;
    let { view: t } = this, e = t.state.selection.main, n = fa(t.root), { anchorNode: r, anchorOffset: a } = t.observer.selectionRange;
    if (!n || !e.empty || !e.assoc || !n.modify) return;
    let u = ce.find(this, e.head);
    if (!u) return;
    let f = u.posAtStart;
    if (e.head == f || e.head == f + u.length) return;
    let h = this.coordsAt(e.head, -1), g = this.coordsAt(e.head, 1);
    if (!h || !g || h.bottom > g.top) return;
    let p = this.domAtPos(e.head + e.assoc);
    n.collapse(p.node, p.offset), n.modify("move", e.assoc < 0 ? "forward" : "backward", "lineboundary"), t.observer.readSelectionRange();
    let y = t.observer.selectionRange;
    t.docView.posFromDOM(y.anchorNode, y.anchorOffset) != e.from && n.collapse(r, a);
  }
  moveToLine(t) {
    let e = this.dom, n;
    if (t.node != e) return t;
    for (let r = t.offset; !n && r < e.childNodes.length; r++) {
      let a = jt.get(e.childNodes[r]);
      a instanceof ce && (n = a.domAtPos(0));
    }
    for (let r = t.offset - 1; !n && r >= 0; r--) {
      let a = jt.get(e.childNodes[r]);
      a instanceof ce && (n = a.domAtPos(a.length));
    }
    return n ? new De(n.node, n.offset, true) : t;
  }
  nearest(t) {
    for (let e = t; e; ) {
      let n = jt.get(e);
      if (n && n.rootView == this) return n;
      e = e.parentNode;
    }
    return null;
  }
  posFromDOM(t, e) {
    let n = this.nearest(t);
    if (!n) throw new RangeError("Trying to find position for a DOM position outside of the document");
    return n.localPosFromDOM(t, e) + n.posAtStart;
  }
  domAtPos(t) {
    let { i: e, off: n } = this.childCursor().findPos(t, -1);
    for (; e < this.children.length - 1; ) {
      let r = this.children[e];
      if (n < r.length || r instanceof ce) break;
      e++, n = 0;
    }
    return this.children[e].domAtPos(n);
  }
  coordsAt(t, e) {
    let n = null, r = 0;
    for (let a = this.length, u = this.children.length - 1; u >= 0; u--) {
      let f = this.children[u], h = a - f.breakAfter, g = h - f.length;
      if (h < t) break;
      if (g <= t && (g < t || f.covers(-1)) && (h > t || f.covers(1)) && (!n || f instanceof ce && !(n instanceof ce && e >= 0))) n = f, r = g;
      else if (n && g == t && h == t && f instanceof vn && Math.abs(e) < 2) {
        if (f.deco.startSide < 0) break;
        u && (n = null);
      }
      a = g;
    }
    return n ? n.coordsAt(t - r, e) : null;
  }
  coordsForChar(t) {
    let { i: e, off: n } = this.childPos(t, 1), r = this.children[e];
    if (!(r instanceof ce)) return null;
    for (; r.children.length; ) {
      let { i: f, off: h } = r.childPos(n, 1);
      for (; ; f++) {
        if (f == r.children.length) return null;
        if ((r = r.children[f]).length) break;
      }
      n = h;
    }
    if (!(r instanceof Ei)) return null;
    let a = Me(r.text, n);
    if (a == n) return null;
    let u = Ul(r.dom, n, a).getClientRects();
    for (let f = 0; f < u.length; f++) {
      let h = u[f];
      if (f == u.length - 1 || h.top < h.bottom && h.left < h.right) return h;
    }
    return null;
  }
  measureVisibleLineHeights(t) {
    let e = [], { from: n, to: r } = t, a = this.view.contentDOM.clientWidth, u = a > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, f = -1, h = this.view.textDirection == Wt.LTR;
    for (let g = 0, p = 0; p < this.children.length; p++) {
      let y = this.children[p], v = g + y.length;
      if (v > r) break;
      if (g >= n) {
        let S = y.dom.getBoundingClientRect();
        if (e.push(S.height), u) {
          let w = y.dom.lastChild, C = w ? Vs(w) : [];
          if (C.length) {
            let T = C[C.length - 1], O = h ? T.right - S.left : S.right - T.left;
            O > f && (f = O, this.minWidth = a, this.minWidthFrom = g, this.minWidthTo = v);
          }
        }
      }
      g = v + y.breakAfter;
    }
    return e;
  }
  textDirectionAt(t) {
    let { i: e } = this.childPos(t, 1);
    return getComputedStyle(this.children[e].dom).direction == "rtl" ? Wt.RTL : Wt.LTR;
  }
  measureTextSize() {
    for (let a of this.children) if (a instanceof ce) {
      let u = a.measureTextSize();
      if (u) return u;
    }
    let t = document.createElement("div"), e, n, r;
    return t.className = "cm-line", t.style.width = "99999px", t.style.position = "absolute", t.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.dom.appendChild(t);
      let a = Vs(t.firstChild)[0];
      e = t.getBoundingClientRect().height, n = a ? a.width / 27 : 7, r = a ? a.height : e, t.remove();
    }), { lineHeight: e, charWidth: n, textHeight: r };
  }
  childCursor(t = this.length) {
    let e = this.children.length;
    return e && (t -= this.children[--e].length), new Tv(this.children, t, e);
  }
  computeBlockGapDeco() {
    let t = [], e = this.view.viewState;
    for (let n = 0, r = 0; ; r++) {
      let a = r == e.viewports.length ? null : e.viewports[r], u = a ? a.from - 1 : this.length;
      if (u > n) {
        let f = (e.lineBlockAt(u).bottom - e.lineBlockAt(n).top) / this.view.scaleY;
        t.push(ut.replace({ widget: new Yd(f), block: true, inclusive: true, isBlockGap: true }).range(n, u));
      }
      if (!a) break;
      n = a.to + 1;
    }
    return ut.set(t);
  }
  updateDeco() {
    let t = 1, e = this.view.state.facet(ha).map((a) => (this.dynamicDecorationMap[t++] = typeof a == "function") ? a(this.view) : a), n = false, r = this.view.state.facet(Jv).map((a, u) => {
      let f = typeof a == "function";
      return f && (n = true), f ? a(this.view) : a;
    });
    for (r.length && (this.dynamicDecorationMap[t++] = n, e.push(Bt.join(r))), this.decorations = [this.editContextFormatting, ...e, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; t < this.decorations.length; ) this.dynamicDecorationMap[t++] = false;
    return this.decorations;
  }
  scrollIntoView(t) {
    if (t.isSnapshot) {
      let g = this.view.viewState.lineBlockAt(t.range.head);
      this.view.scrollDOM.scrollTop = g.top - t.yMargin, this.view.scrollDOM.scrollLeft = t.xMargin;
      return;
    }
    for (let g of this.view.state.facet(Qv)) try {
      if (g(this.view, t.range, t)) return true;
    } catch (p) {
      We(this.view.state, p, "scroll handler");
    }
    let { range: e } = t, n = this.coordsAt(e.head, e.empty ? e.assoc : e.head > e.anchor ? -1 : 1), r;
    if (!n) return;
    !e.empty && (r = this.coordsAt(e.anchor, e.anchor > e.head ? -1 : 1)) && (n = { left: Math.min(n.left, r.left), top: Math.min(n.top, r.top), right: Math.max(n.right, r.right), bottom: Math.max(n.bottom, r.bottom) });
    let a = Tm(this.view), u = { left: n.left - a.left, top: n.top - a.top, right: n.right + a.right, bottom: n.bottom + a.bottom }, { offsetWidth: f, offsetHeight: h } = this.view.scrollDOM;
    rA(this.view.scrollDOM, u, e.head < e.anchor ? -1 : 1, t.x, t.y, Math.max(Math.min(t.xMargin, f), -f), Math.max(Math.min(t.yMargin, h), -h), this.view.textDirection == Wt.LTR);
  }
  lineHasWidget(t) {
    let { i: e } = this.childCursor().findPos(t);
    if (e == this.children.length) return false;
    let n = (r) => r instanceof bn || r.children.some(n);
    return n(this.children[e]);
  }
}
function kA(l) {
  return l.node.nodeType == 1 && l.node.firstChild && (l.offset == 0 || l.node.childNodes[l.offset - 1].contentEditable == "false") && (l.offset == l.node.childNodes.length || l.node.childNodes[l.offset].contentEditable == "false");
}
function Iv(l, t) {
  let e = l.observer.selectionRange;
  if (!e.focusNode) return null;
  let n = Av(e.focusNode, e.focusOffset), r = Mv(e.focusNode, e.focusOffset), a = n || r;
  if (r && n && r.node != n.node) {
    let f = jt.get(r.node);
    if (!f || f instanceof Ei && f.text != r.node.nodeValue) a = r;
    else if (l.docView.lastCompositionAfterCursor) {
      let h = jt.get(n.node);
      !h || h instanceof Ei && h.text != n.node.nodeValue || (a = r);
    }
  }
  if (l.docView.lastCompositionAfterCursor = a != n, !a) return null;
  let u = t - a.offset;
  return { from: u, to: u + a.node.nodeValue.length, node: a.node };
}
function OA(l, t, e) {
  let n = Iv(l, e);
  if (!n) return null;
  let { node: r, from: a, to: u } = n, f = r.nodeValue;
  if (/[\n\r]/.test(f) || l.state.doc.sliceString(n.from, n.to) != f) return null;
  let h = t.invertedDesc, g = new wi(h.mapPos(a), h.mapPos(u), a, u), p = [];
  for (let y = r.parentNode; ; y = y.parentNode) {
    let v = jt.get(y);
    if (v instanceof xn) p.push({ node: y, deco: v.mark });
    else {
      if (v instanceof ce || y.nodeName == "DIV" && y.parentNode == l.contentDOM) return { range: g, text: r, marks: p, line: y };
      if (y != l.contentDOM) p.push({ node: y, deco: new Ma({ inclusive: true, attributes: gA(y), tagName: y.tagName.toLowerCase() }) });
      else return null;
    }
  }
}
function DA(l, t) {
  return l.nodeType != 1 ? 0 : (t && l.childNodes[t - 1].contentEditable == "false" ? 1 : 0) | (t < l.childNodes.length && l.childNodes[t].contentEditable == "false" ? 2 : 0);
}
let EA = class {
  constructor() {
    this.changes = [];
  }
  compareRange(t, e) {
    Ou(t, e, this.changes);
  }
  comparePoint(t, e) {
    Ou(t, e, this.changes);
  }
  boundChange(t) {
    Ou(t, t, this.changes);
  }
};
function BA(l, t, e) {
  let n = new EA();
  return Bt.compare(l, t, e, n), n.changes;
}
function RA(l, t) {
  for (let e = l; e && e != t; e = e.assignedSlot || e.parentNode) if (e.nodeType == 1 && e.contentEditable == "false") return true;
  return false;
}
function zA(l, t) {
  let e = false;
  return t && l.iterChangedRanges((n, r) => {
    n < t.to && r > t.from && (e = true);
  }), e;
}
function NA(l, t, e = 1) {
  let n = l.charCategorizer(t), r = l.doc.lineAt(t), a = t - r.from;
  if (r.length == 0) return K.cursor(t);
  a == 0 ? e = 1 : a == r.length && (e = -1);
  let u = a, f = a;
  e < 0 ? u = Me(r.text, a, false) : f = Me(r.text, a);
  let h = n(r.text.slice(u, f));
  for (; u > 0; ) {
    let g = Me(r.text, u, false);
    if (n(r.text.slice(g, u)) != h) break;
    u = g;
  }
  for (; f < r.length; ) {
    let g = Me(r.text, f);
    if (n(r.text.slice(f, g)) != h) break;
    f = g;
  }
  return K.range(u + r.from, f + r.from);
}
function _A(l, t) {
  return t.left > l ? t.left - l : Math.max(0, l - t.right);
}
function LA(l, t) {
  return t.top > l ? t.top - l : Math.max(0, l - t.bottom);
}
function Jh(l, t) {
  return l.top < t.bottom - 1 && l.bottom > t.top + 1;
}
function M1(l, t) {
  return t < l.top ? { top: t, left: l.left, right: l.right, bottom: l.bottom } : l;
}
function T1(l, t) {
  return t > l.bottom ? { top: l.top, left: l.left, right: l.right, bottom: t } : l;
}
function Zd(l, t, e) {
  let n, r, a, u, f = false, h, g, p, y;
  for (let w = l.firstChild; w; w = w.nextSibling) {
    let C = Vs(w);
    for (let T = 0; T < C.length; T++) {
      let O = C[T];
      r && Jh(r, O) && (O = M1(T1(O, r.bottom), r.top));
      let j = _A(t, O), L = LA(e, O);
      if (j == 0 && L == 0) return w.nodeType == 3 ? k1(w, t, e) : Zd(w, t, e);
      (!n || u > L || u == L && a > j) && (n = w, r = O, a = j, u = L, f = j ? t < O.left ? T > 0 : T < C.length - 1 : true), j == 0 ? e > O.bottom && (!p || p.bottom < O.bottom) ? (h = w, p = O) : e < O.top && (!y || y.top > O.top) && (g = w, y = O) : p && Jh(p, O) ? p = T1(p, O.bottom) : y && Jh(y, O) && (y = M1(y, O.top));
    }
  }
  if (p && p.bottom >= e ? (n = h, r = p) : y && y.top <= e && (n = g, r = y), !n) return { node: l, offset: 0 };
  let v = Math.max(r.left, Math.min(r.right, t));
  if (n.nodeType == 3) return k1(n, v, e);
  if (f && n.contentEditable != "false") return Zd(n, v, e);
  let S = Array.prototype.indexOf.call(l.childNodes, n) + (t >= (r.left + r.right) / 2 ? 1 : 0);
  return { node: l, offset: S };
}
function k1(l, t, e) {
  let n = l.nodeValue.length, r = -1, a = 1e9, u = 0;
  for (let f = 0; f < n; f++) {
    let h = Ul(l, f, f + 1).getClientRects();
    for (let g = 0; g < h.length; g++) {
      let p = h[g];
      if (p.top == p.bottom) continue;
      u || (u = t - p.left);
      let y = (p.top > e ? p.top - e : e - p.bottom) - 1;
      if (p.left - 1 <= t && p.right + 1 >= t && y < a) {
        let v = t >= (p.left + p.right) / 2, S = v;
        if (F.chrome || F.gecko) {
          let w = Ul(l, f).getBoundingClientRect();
          Math.abs(w.left - p.right) < 0.1 && (S = !v);
        }
        if (y <= 0) return { node: l, offset: f + (S ? 1 : 0) };
        r = f + (S ? 1 : 0), a = y;
      }
    }
  }
  return { node: l, offset: r > -1 ? r : u > 0 ? l.nodeValue.length : 0 };
}
function $v(l, t, e, n = -1) {
  var r, a;
  let u = l.contentDOM.getBoundingClientRect(), f = u.top + l.viewState.paddingTop, h, { docHeight: g } = l.viewState, { x: p, y } = t, v = y - f;
  if (v < 0) return 0;
  if (v > g) return l.state.doc.length;
  for (let Q = l.viewState.heightOracle.textHeight / 2, _ = false; h = l.elementAtHeight(v), h.type != He.Text; ) for (; v = n > 0 ? h.bottom + Q : h.top - Q, !(v >= 0 && v <= g); ) {
    if (_) return e ? null : 0;
    _ = true, n = -n;
  }
  y = f + v;
  let S = h.from;
  if (S < l.viewport.from) return l.viewport.from == 0 ? 0 : e ? null : O1(l, u, h, p, y);
  if (S > l.viewport.to) return l.viewport.to == l.state.doc.length ? l.state.doc.length : e ? null : O1(l, u, h, p, y);
  let w = l.dom.ownerDocument, C = l.root.elementFromPoint ? l.root : w, T = C.elementFromPoint(p, y);
  T && !l.contentDOM.contains(T) && (T = null), T || (p = Math.max(u.left + 1, Math.min(u.right - 1, p)), T = C.elementFromPoint(p, y), T && !l.contentDOM.contains(T) && (T = null));
  let O, j = -1;
  if (T && ((r = l.docView.nearest(T)) === null || r === void 0 ? void 0 : r.isEditable) != false) {
    if (w.caretPositionFromPoint) {
      let Q = w.caretPositionFromPoint(p, y);
      Q && ({ offsetNode: O, offset: j } = Q);
    } else if (w.caretRangeFromPoint) {
      let Q = w.caretRangeFromPoint(p, y);
      Q && ({ startContainer: O, startOffset: j } = Q);
    }
    O && (!l.contentDOM.contains(O) || F.safari && HA(O, j, p) || F.chrome && UA(O, j, p)) && (O = void 0), O && (j = Math.min(Ji(O), j));
  }
  if (!O || !l.docView.dom.contains(O)) {
    let Q = ce.find(l.docView, S);
    if (!Q) return v > h.top + h.height / 2 ? h.to : h.from;
    ({ node: O, offset: j } = Zd(Q.dom, p, y));
  }
  let L = l.docView.nearest(O);
  if (!L) return null;
  if (L.isWidget && ((a = L.dom) === null || a === void 0 ? void 0 : a.nodeType) == 1) {
    let Q = L.dom.getBoundingClientRect();
    return t.y < Q.top || t.y <= Q.bottom && t.x <= (Q.left + Q.right) / 2 ? L.posAtStart : L.posAtEnd;
  } else return L.localPosFromDOM(O, j) + L.posAtStart;
}
function O1(l, t, e, n, r) {
  let a = Math.round((n - t.left) * l.defaultCharacterWidth);
  if (l.lineWrapping && e.height > l.defaultLineHeight * 1.5) {
    let f = l.viewState.heightOracle.textHeight, h = Math.floor((r - e.top - (l.defaultLineHeight - f) * 0.5) / f);
    a += h * l.viewState.heightOracle.lineLength;
  }
  let u = l.state.sliceDoc(e.from, e.to);
  return e.from + Rd(u, a, l.state.tabSize);
}
function tS(l, t, e) {
  let n, r = l;
  if (l.nodeType != 3 || t != (n = l.nodeValue.length)) return false;
  for (; ; ) {
    let a = r.nextSibling;
    if (a) {
      if (a.nodeName == "BR") break;
      return false;
    } else {
      let u = r.parentNode;
      if (!u || u.nodeName == "DIV") break;
      r = u;
    }
  }
  return Ul(l, n - 1, n).getBoundingClientRect().right > e;
}
function HA(l, t, e) {
  return tS(l, t, e);
}
function UA(l, t, e) {
  if (t != 0) return tS(l, t, e);
  for (let r = l; ; ) {
    let a = r.parentNode;
    if (!a || a.nodeType != 1 || a.firstChild != r) return false;
    if (a.classList.contains("cm-line")) break;
    r = a;
  }
  let n = l.nodeType == 1 ? l.getBoundingClientRect() : Ul(l, 0, Math.max(l.nodeValue.length, 1)).getBoundingClientRect();
  return e - n.left > 5;
}
function Wd(l, t, e) {
  let n = l.lineBlockAt(t);
  if (Array.isArray(n.type)) {
    let r;
    for (let a of n.type) {
      if (a.from > t) break;
      if (!(a.to < t)) {
        if (a.from < t && a.to > t) return a;
        (!r || a.type == He.Text && (r.type != a.type || (e < 0 ? a.from < t : a.to > t))) && (r = a);
      }
    }
    return r || n;
  }
  return n;
}
function VA(l, t, e, n) {
  let r = Wd(l, t.head, t.assoc || -1), a = !n || r.type != He.Text || !(l.lineWrapping || r.widgetLineBreaks) ? null : l.coordsAtPos(t.assoc < 0 && t.head > r.from ? t.head - 1 : t.head);
  if (a) {
    let u = l.dom.getBoundingClientRect(), f = l.textDirectionAt(r.from), h = l.posAtCoords({ x: e == (f == Wt.LTR) ? u.right - 1 : u.left + 1, y: (a.top + a.bottom) / 2 });
    if (h != null) return K.cursor(h, e ? -1 : 1);
  }
  return K.cursor(e ? r.to : r.from, e ? -1 : 1);
}
function D1(l, t, e, n) {
  let r = l.state.doc.lineAt(t.head), a = l.bidiSpans(r), u = l.textDirectionAt(r.from);
  for (let f = t, h = null; ; ) {
    let g = AA(r, a, u, f, e), p = Hv;
    if (!g) {
      if (r.number == (e ? l.state.doc.lines : 1)) return f;
      p = `
`, r = l.state.doc.line(r.number + (e ? 1 : -1)), a = l.bidiSpans(r), g = l.visualLineSide(r, !e);
    }
    if (h) {
      if (!h(p)) return f;
    } else {
      if (!n) return g;
      h = n(p);
    }
    f = g;
  }
}
function qA(l, t, e) {
  let n = l.state.charCategorizer(t), r = n(e);
  return (a) => {
    let u = n(a);
    return r == Pt.Space && (r = u), r == u;
  };
}
function jA(l, t, e, n) {
  let r = t.head, a = e ? 1 : -1;
  if (r == (e ? l.state.doc.length : 0)) return K.cursor(r, t.assoc);
  let u = t.goalColumn, f, h = l.contentDOM.getBoundingClientRect(), g = l.coordsAtPos(r, t.assoc || -1), p = l.documentTop;
  if (g) u == null && (u = g.left - h.left), f = a < 0 ? g.top : g.bottom;
  else {
    let S = l.viewState.lineBlockAt(r);
    u == null && (u = Math.min(h.right - h.left, l.defaultCharacterWidth * (r - S.from))), f = (a < 0 ? S.top : S.bottom) + p;
  }
  let y = h.left + u, v = n ?? l.viewState.heightOracle.textHeight >> 1;
  for (let S = 0; ; S += 10) {
    let w = f + (v + S) * a, C = $v(l, { x: y, y: w }, false, a);
    if (w < h.top || w > h.bottom || (a < 0 ? C < r : C > r)) {
      let T = l.docView.coordsForChar(C), O = !T || w < T.top ? -1 : 1;
      return K.cursor(C, O, void 0, u);
    }
  }
}
function sa(l, t, e) {
  for (; ; ) {
    let n = 0;
    for (let r of l) r.between(t - 1, t + 1, (a, u, f) => {
      if (t > a && t < u) {
        let h = n || e || (t - a < u - t ? -1 : 1);
        t = h < 0 ? a : u, n = h;
      }
    });
    if (!n) return t;
  }
}
function eS(l, t) {
  let e = null;
  for (let n = 0; n < t.ranges.length; n++) {
    let r = t.ranges[n], a = null;
    if (r.empty) {
      let u = sa(l, r.from, 0);
      u != r.from && (a = K.cursor(u, -1));
    } else {
      let u = sa(l, r.from, -1), f = sa(l, r.to, 1);
      (u != r.from || f != r.to) && (a = K.range(r.from == r.anchor ? u : f, r.from == r.head ? u : f));
    }
    a && (e || (e = t.ranges.slice()), e[n] = a);
  }
  return e ? K.create(e, t.mainIndex) : t;
}
function Fh(l, t, e) {
  let n = sa(l.state.facet(ka).map((r) => r(l)), e.from, t.head > e.from ? -1 : 1);
  return n == e.from ? e : K.cursor(n, n < e.from ? 1 : -1);
}
const Fr = "\uFFFF";
class YA {
  constructor(t, e) {
    this.points = t, this.text = "", this.lineSeparator = e.facet(Ot.lineSeparator);
  }
  append(t) {
    this.text += t;
  }
  lineBreak() {
    this.text += Fr;
  }
  readRange(t, e) {
    if (!t) return this;
    let n = t.parentNode;
    for (let r = t; ; ) {
      this.findPointBefore(n, r);
      let a = this.text.length;
      this.readNode(r);
      let u = r.nextSibling;
      if (u == e) break;
      let f = jt.get(r), h = jt.get(u);
      (f && h ? f.breakAfter : (f ? f.breakAfter : Uu(r)) || Uu(u) && (r.nodeName != "BR" || r.cmIgnore) && this.text.length > a) && !XA(u, e) && this.lineBreak(), r = u;
    }
    return this.findPointBefore(n, e), this;
  }
  readTextNode(t) {
    let e = t.nodeValue;
    for (let n of this.points) n.node == t && (n.pos = this.text.length + Math.min(n.offset, e.length));
    for (let n = 0, r = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let a = -1, u = 1, f;
      if (this.lineSeparator ? (a = e.indexOf(this.lineSeparator, n), u = this.lineSeparator.length) : (f = r.exec(e)) && (a = f.index, u = f[0].length), this.append(e.slice(n, a < 0 ? e.length : a)), a < 0) break;
      if (this.lineBreak(), u > 1) for (let h of this.points) h.node == t && h.pos > this.text.length && (h.pos -= u - 1);
      n = a + u;
    }
  }
  readNode(t) {
    if (t.cmIgnore) return;
    let e = jt.get(t), n = e && e.overrideDOMText;
    if (n != null) {
      this.findPointInside(t, n.length);
      for (let r = n.iter(); !r.next().done; ) r.lineBreak ? this.lineBreak() : this.append(r.value);
    } else t.nodeType == 3 ? this.readTextNode(t) : t.nodeName == "BR" ? t.nextSibling && this.lineBreak() : t.nodeType == 1 && this.readRange(t.firstChild, null);
  }
  findPointBefore(t, e) {
    for (let n of this.points) n.node == t && t.childNodes[n.offset] == e && (n.pos = this.text.length);
  }
  findPointInside(t, e) {
    for (let n of this.points) (t.nodeType == 3 ? n.node == t : t.contains(n.node)) && (n.pos = this.text.length + (GA(t, n.node, n.offset) ? e : 0));
  }
}
function GA(l, t, e) {
  for (; ; ) {
    if (!t || e < Ji(t)) return false;
    if (t == l) return true;
    e = Hl(t) + 1, t = t.parentNode;
  }
}
function XA(l, t) {
  let e;
  for (; !(l == t || !l); l = l.nextSibling) {
    let n = jt.get(l);
    if (!((n == null ? void 0 : n.isWidget) || l.cmIgnore)) return false;
    n && (e || (e = [])).push(n);
  }
  if (e) for (let n of e) {
    let r = n.overrideDOMText;
    if (r == null ? void 0 : r.length) return false;
  }
  return true;
}
class E1 {
  constructor(t, e) {
    this.node = t, this.offset = e, this.pos = -1;
  }
}
class KA {
  constructor(t, e, n, r) {
    this.typeOver = r, this.bounds = null, this.text = "", this.domChanged = e > -1;
    let { impreciseHead: a, impreciseAnchor: u } = t.docView;
    if (t.state.readOnly && e > -1) this.newSel = null;
    else if (e > -1 && (this.bounds = t.docView.domBoundsAround(e, n, 0))) {
      let f = a || u ? [] : ZA(t), h = new YA(f, t.state);
      h.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = h.text, this.newSel = WA(f, this.bounds.from);
    } else {
      let f = t.observer.selectionRange, h = a && a.node == f.focusNode && a.offset == f.focusOffset || !Vd(t.contentDOM, f.focusNode) ? t.state.selection.main.head : t.docView.posFromDOM(f.focusNode, f.focusOffset), g = u && u.node == f.anchorNode && u.offset == f.anchorOffset || !Vd(t.contentDOM, f.anchorNode) ? t.state.selection.main.anchor : t.docView.posFromDOM(f.anchorNode, f.anchorOffset), p = t.viewport;
      if ((F.ios || F.chrome) && t.state.selection.main.empty && h != g && (p.from > 0 || p.to < t.state.doc.length)) {
        let y = Math.min(h, g), v = Math.max(h, g), S = p.from - y, w = p.to - v;
        (S == 0 || S == 1 || y == 0) && (w == 0 || w == -1 || v == t.state.doc.length) && (h = 0, g = t.state.doc.length);
      }
      t.inputState.composing > -1 && t.state.selection.ranges.length > 1 ? this.newSel = t.state.selection.replaceRange(K.range(g, h)) : this.newSel = K.single(g, h);
    }
  }
}
function iS(l, t) {
  let e, { newSel: n } = t, r = l.state.selection.main, a = l.inputState.lastKeyTime > Date.now() - 100 ? l.inputState.lastKeyCode : -1;
  if (t.bounds) {
    let { from: u, to: f } = t.bounds, h = r.from, g = null;
    (a === 8 || F.android && t.text.length < f - u) && (h = r.to, g = "end");
    let p = nS(l.state.doc.sliceString(u, f, Fr), t.text, h - u, g);
    p && (F.chrome && a == 13 && p.toB == p.from + 2 && t.text.slice(p.from, p.toB) == Fr + Fr && p.toB--, e = { from: u + p.from, to: u + p.toA, insert: Rt.of(t.text.slice(p.from, p.toB).split(Fr)) });
  } else n && (!l.hasFocus && l.state.facet(yn) || n.main.eq(r)) && (n = null);
  if (!e && !n) return false;
  if (!e && t.typeOver && !r.empty && n && n.main.empty ? e = { from: r.from, to: r.to, insert: l.state.doc.slice(r.from, r.to) } : (F.mac || F.android) && e && e.from == e.to && e.from == r.head - 1 && /^\. ?$/.test(e.insert.toString()) && l.contentDOM.getAttribute("autocorrect") == "off" ? (n && e.insert.length == 2 && (n = K.single(n.main.anchor - 1, n.main.head - 1)), e = { from: e.from, to: e.to, insert: Rt.of([e.insert.toString().replace(".", " ")]) }) : e && e.from >= r.from && e.to <= r.to && (e.from != r.from || e.to != r.to) && r.to - r.from - (e.to - e.from) <= 4 ? e = { from: r.from, to: r.to, insert: l.state.doc.slice(r.from, e.from).append(e.insert).append(l.state.doc.slice(e.to, r.to)) } : l.state.doc.lineAt(r.from).to < r.to && l.docView.lineHasWidget(r.to) && l.inputState.insertingTextAt > Date.now() - 50 ? e = { from: r.from, to: r.to, insert: l.state.toText(l.inputState.insertingText) } : F.chrome && e && e.from == e.to && e.from == r.head && e.insert.toString() == `
 ` && l.lineWrapping && (n && (n = K.single(n.main.anchor - 1, n.main.head - 1)), e = { from: r.from, to: r.to, insert: Rt.of([" "]) }), e) return km(l, e, n, a);
  if (n && !n.main.eq(r)) {
    let u = false, f = "select";
    return l.inputState.lastSelectionTime > Date.now() - 50 && (l.inputState.lastSelectionOrigin == "select" && (u = true), f = l.inputState.lastSelectionOrigin, f == "select.pointer" && (n = eS(l.state.facet(ka).map((h) => h(l)), n))), l.dispatch({ selection: n, scrollIntoView: u, userEvent: f }), true;
  } else return false;
}
function km(l, t, e, n = -1) {
  if (F.ios && l.inputState.flushIOSKey(t)) return true;
  let r = l.state.selection.main;
  if (F.android && (t.to == r.to && (t.from == r.from || t.from == r.from - 1 && l.state.sliceDoc(t.from, r.from) == " ") && t.insert.length == 1 && t.insert.lines == 2 && zs(l.contentDOM, "Enter", 13) || (t.from == r.from - 1 && t.to == r.to && t.insert.length == 0 || n == 8 && t.insert.length < t.to - t.from && t.to > r.head) && zs(l.contentDOM, "Backspace", 8) || t.from == r.from && t.to == r.to + 1 && t.insert.length == 0 && zs(l.contentDOM, "Delete", 46))) return true;
  let a = t.insert.toString();
  l.inputState.composing >= 0 && l.inputState.composing++;
  let u, f = () => u || (u = QA(l, t, e));
  return l.state.facet(Yv).some((h) => h(l, t.from, t.to, a, f)) || l.dispatch(f()), true;
}
function QA(l, t, e) {
  let n, r = l.state, a = r.selection.main, u = -1;
  if (t.from == t.to && t.from < a.from || t.from > a.to) {
    let h = t.from < a.from ? -1 : 1, g = h < 0 ? a.from : a.to, p = sa(r.facet(ka).map((y) => y(l)), g, h);
    t.from == p && (u = p);
  }
  if (u > -1) n = { changes: t, selection: K.cursor(t.from + t.insert.length, -1) };
  else if (t.from >= a.from && t.to <= a.to && t.to - t.from >= (a.to - a.from) / 3 && (!e || e.main.empty && e.main.from == t.from + t.insert.length) && l.inputState.composing < 0) {
    let h = a.from < t.from ? r.sliceDoc(a.from, t.from) : "", g = a.to > t.to ? r.sliceDoc(t.to, a.to) : "";
    n = r.replaceSelection(l.state.toText(h + t.insert.sliceString(0, void 0, l.state.lineBreak) + g));
  } else {
    let h = r.changes(t), g = e && e.main.to <= h.newLength ? e.main : void 0;
    if (r.selection.ranges.length > 1 && (l.inputState.composing >= 0 || l.inputState.compositionPendingChange) && t.to <= a.to + 10 && t.to >= a.to - 10) {
      let p = l.state.sliceDoc(t.from, t.to), y, v = e && Iv(l, e.main.head);
      if (v) {
        let w = t.insert.length - (t.to - t.from);
        y = { from: v.from, to: v.to - w };
      } else y = l.state.doc.lineAt(a.head);
      let S = a.to - t.to;
      n = r.changeByRange((w) => {
        if (w.from == a.from && w.to == a.to) return { changes: h, range: g || w.map(h) };
        let C = w.to - S, T = C - p.length;
        if (l.state.sliceDoc(T, C) != p || C >= y.from && T <= y.to) return { range: w };
        let O = r.changes({ from: T, to: C, insert: t.insert }), j = w.to - a.to;
        return { changes: O, range: g ? K.range(Math.max(0, g.anchor + j), Math.max(0, g.head + j)) : w.map(O) };
      });
    } else n = { changes: h, selection: g && r.selection.replaceRange(g) };
  }
  let f = "input.type";
  return (l.composing || l.inputState.compositionPendingChange && l.inputState.compositionEndedAt > Date.now() - 50) && (l.inputState.compositionPendingChange = false, f += ".compose", l.inputState.compositionFirstChange && (f += ".start", l.inputState.compositionFirstChange = false)), r.update(n, { userEvent: f, scrollIntoView: true });
}
function nS(l, t, e, n) {
  let r = Math.min(l.length, t.length), a = 0;
  for (; a < r && l.charCodeAt(a) == t.charCodeAt(a); ) a++;
  if (a == r && l.length == t.length) return null;
  let u = l.length, f = t.length;
  for (; u > 0 && f > 0 && l.charCodeAt(u - 1) == t.charCodeAt(f - 1); ) u--, f--;
  if (n == "end") {
    let h = Math.max(0, a - Math.min(u, f));
    e -= u + h - a;
  }
  if (u < a && l.length < t.length) {
    let h = e <= a && e >= u ? a - e : 0;
    a -= h, f = a + (f - u), u = a;
  } else if (f < a) {
    let h = e <= a && e >= f ? a - e : 0;
    a -= h, u = a + (u - f), f = a;
  }
  return { from: a, toA: u, toB: f };
}
function ZA(l) {
  let t = [];
  if (l.root.activeElement != l.contentDOM) return t;
  let { anchorNode: e, anchorOffset: n, focusNode: r, focusOffset: a } = l.observer.selectionRange;
  return e && (t.push(new E1(e, n)), (r != e || a != n) && t.push(new E1(r, a))), t;
}
function WA(l, t) {
  if (l.length == 0) return null;
  let e = l[0].pos, n = l.length == 2 ? l[1].pos : e;
  return e > -1 && n > -1 ? K.single(e + t, n + t) : null;
}
class JA {
  setSelectionOrigin(t) {
    this.lastSelectionOrigin = t, this.lastSelectionTime = Date.now();
  }
  constructor(t) {
    this.view = t, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = false, this.compositionPendingChange = false, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = t.hasFocus, F.safari && t.contentDOM.addEventListener("input", () => null), F.gecko && fM(t.contentDOM.ownerDocument);
  }
  handleEvent(t) {
    !nM(this.view, t) || this.ignoreDuringComposition(t) || t.type == "keydown" && this.keydown(t) || (this.view.updateState != 0 ? Promise.resolve().then(() => this.runHandlers(t.type, t)) : this.runHandlers(t.type, t));
  }
  runHandlers(t, e) {
    let n = this.handlers[t];
    if (n) {
      for (let r of n.observers) r(this.view, e);
      for (let r of n.handlers) {
        if (e.defaultPrevented) break;
        if (r(this.view, e)) {
          e.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(t) {
    let e = FA(t), n = this.handlers, r = this.view.contentDOM;
    for (let a in e) if (a != "scroll") {
      let u = !e[a].handlers.length, f = n[a];
      f && u != !f.handlers.length && (r.removeEventListener(a, this.handleEvent), f = null), f || r.addEventListener(a, this.handleEvent, { passive: u });
    }
    for (let a in n) a != "scroll" && !e[a] && r.removeEventListener(a, this.handleEvent);
    this.handlers = e;
  }
  keydown(t) {
    if (this.lastKeyCode = t.keyCode, this.lastKeyTime = Date.now(), t.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return true;
    if (this.tabFocusMode > 0 && t.keyCode != 27 && sS.indexOf(t.keyCode) < 0 && (this.tabFocusMode = -1), F.android && F.chrome && !t.synthetic && (t.keyCode == 13 || t.keyCode == 8)) return this.view.observer.delayAndroidKey(t.key, t.keyCode), true;
    let e;
    return F.ios && !t.synthetic && !t.altKey && !t.metaKey && ((e = lS.find((n) => n.keyCode == t.keyCode)) && !t.ctrlKey || PA.indexOf(t.key) > -1 && t.ctrlKey && !t.shiftKey) ? (this.pendingIOSKey = e || t, setTimeout(() => this.flushIOSKey(), 250), true) : (t.keyCode != 229 && this.view.observer.forceFlush(), false);
  }
  flushIOSKey(t) {
    let e = this.pendingIOSKey;
    return !e || e.key == "Enter" && t && t.from < t.to && /^\S+$/.test(t.insert.toString()) ? false : (this.pendingIOSKey = void 0, zs(this.view.contentDOM, e.key, e.keyCode, e instanceof KeyboardEvent ? e : void 0));
  }
  ignoreDuringComposition(t) {
    return !/^key/.test(t.type) || t.synthetic ? false : this.composing > 0 ? true : F.safari && !F.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = false, true) : false;
  }
  startMouseSelection(t) {
    this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = t;
  }
  update(t) {
    this.view.observer.update(t), this.mouseSelection && this.mouseSelection.update(t), this.draggedContent && t.docChanged && (this.draggedContent = this.draggedContent.map(t.changes)), t.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
}
function B1(l, t) {
  return (e, n) => {
    try {
      return t.call(l, n, e);
    } catch (r) {
      We(e.state, r);
    }
  };
}
function FA(l) {
  let t = /* @__PURE__ */ Object.create(null);
  function e(n) {
    return t[n] || (t[n] = { observers: [], handlers: [] });
  }
  for (let n of l) {
    let r = n.spec, a = r && r.plugin.domEventHandlers, u = r && r.plugin.domEventObservers;
    if (a) for (let f in a) {
      let h = a[f];
      h && e(f).handlers.push(B1(n.value, h));
    }
    if (u) for (let f in u) {
      let h = u[f];
      h && e(f).observers.push(B1(n.value, h));
    }
  }
  for (let n in Bi) e(n).handlers.push(Bi[n]);
  for (let n in Ai) e(n).observers.push(Ai[n]);
  return t;
}
const lS = [{ key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" }, { key: "Enter", keyCode: 13, inputType: "insertParagraph" }, { key: "Enter", keyCode: 13, inputType: "insertLineBreak" }, { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }], PA = "dthko", sS = [16, 17, 18, 20, 91, 92, 224, 225], lu = 6;
function su(l) {
  return Math.max(0, l) * 0.7 + 8;
}
function IA(l, t) {
  return Math.max(Math.abs(l.clientX - t.clientX), Math.abs(l.clientY - t.clientY));
}
class $A {
  constructor(t, e, n, r) {
    this.view = t, this.startEvent = e, this.style = n, this.mustSelect = r, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = e, this.scrollParents = aA(t.contentDOM), this.atoms = t.state.facet(ka).map((u) => u(t));
    let a = t.contentDOM.ownerDocument;
    a.addEventListener("mousemove", this.move = this.move.bind(this)), a.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = e.shiftKey, this.multiple = t.state.facet(Ot.allowMultipleSelections) && tM(t, e), this.dragging = iM(t, e) && oS(e) == 1 ? null : false;
  }
  start(t) {
    this.dragging === false && this.select(t);
  }
  move(t) {
    if (t.buttons == 0) return this.destroy();
    if (this.dragging || this.dragging == null && IA(this.startEvent, t) < 10) return;
    this.select(this.lastEvent = t);
    let e = 0, n = 0, r = 0, a = 0, u = this.view.win.innerWidth, f = this.view.win.innerHeight;
    this.scrollParents.x && ({ left: r, right: u } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({ top: a, bottom: f } = this.scrollParents.y.getBoundingClientRect());
    let h = Tm(this.view);
    t.clientX - h.left <= r + lu ? e = -su(r - t.clientX) : t.clientX + h.right >= u - lu && (e = su(t.clientX - u)), t.clientY - h.top <= a + lu ? n = -su(a - t.clientY) : t.clientY + h.bottom >= f - lu && (n = su(t.clientY - f)), this.setScrollSpeed(e, n);
  }
  up(t) {
    this.dragging == null && this.select(this.lastEvent), this.dragging || t.preventDefault(), this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let t = this.view.contentDOM.ownerDocument;
    t.removeEventListener("mousemove", this.move), t.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null;
  }
  setScrollSpeed(t, e) {
    this.scrollSpeed = { x: t, y: e }, t || e ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
  }
  scroll() {
    let { x: t, y: e } = this.scrollSpeed;
    t && this.scrollParents.x && (this.scrollParents.x.scrollLeft += t, t = 0), e && this.scrollParents.y && (this.scrollParents.y.scrollTop += e, e = 0), (t || e) && this.view.win.scrollBy(t, e), this.dragging === false && this.select(this.lastEvent);
  }
  select(t) {
    let { view: e } = this, n = eS(this.atoms, this.style.get(t, this.extend, this.multiple));
    (this.mustSelect || !n.eq(e.state.selection, this.dragging === false)) && this.view.dispatch({ selection: n, userEvent: "select.pointer" }), this.mustSelect = false;
  }
  update(t) {
    t.transactions.some((e) => e.isUserEvent("input.type")) ? this.destroy() : this.style.update(t) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function tM(l, t) {
  let e = l.state.facet(Uv);
  return e.length ? e[0](t) : F.mac ? t.metaKey : t.ctrlKey;
}
function eM(l, t) {
  let e = l.state.facet(Vv);
  return e.length ? e[0](t) : F.mac ? !t.altKey : !t.ctrlKey;
}
function iM(l, t) {
  let { main: e } = l.state.selection;
  if (e.empty) return false;
  let n = fa(l.root);
  if (!n || n.rangeCount == 0) return true;
  let r = n.getRangeAt(0).getClientRects();
  for (let a = 0; a < r.length; a++) {
    let u = r[a];
    if (u.left <= t.clientX && u.right >= t.clientX && u.top <= t.clientY && u.bottom >= t.clientY) return true;
  }
  return false;
}
function nM(l, t) {
  if (!t.bubbles) return true;
  if (t.defaultPrevented) return false;
  for (let e = t.target, n; e != l.contentDOM; e = e.parentNode) if (!e || e.nodeType == 11 || (n = jt.get(e)) && n.ignoreEvent(t)) return false;
  return true;
}
const Bi = /* @__PURE__ */ Object.create(null), Ai = /* @__PURE__ */ Object.create(null), rS = F.ie && F.ie_version < 15 || F.ios && F.webkit_version < 604;
function lM(l) {
  let t = l.dom.parentNode;
  if (!t) return;
  let e = t.appendChild(document.createElement("textarea"));
  e.style.cssText = "position: fixed; left: -10000px; top: 10px", e.focus(), setTimeout(() => {
    l.focus(), e.remove(), aS(l, e.value);
  }, 50);
}
function rc(l, t, e) {
  for (let n of l.facet(t)) e = n(e, l);
  return e;
}
function aS(l, t) {
  t = rc(l.state, Cm, t);
  let { state: e } = l, n, r = 1, a = e.toText(t), u = a.lines == e.selection.ranges.length;
  if (Jd != null && e.selection.ranges.every((h) => h.empty) && Jd == a.toString()) {
    let h = -1;
    n = e.changeByRange((g) => {
      let p = e.doc.lineAt(g.from);
      if (p.from == h) return { range: g };
      h = p.from;
      let y = e.toText((u ? a.line(r++).text : t) + e.lineBreak);
      return { changes: { from: p.from, insert: y }, range: K.cursor(g.from + y.length) };
    });
  } else u ? n = e.changeByRange((h) => {
    let g = a.line(r++);
    return { changes: { from: h.from, to: h.to, insert: g.text }, range: K.cursor(h.from + g.length) };
  }) : n = e.replaceSelection(a);
  l.dispatch(n, { userEvent: "input.paste", scrollIntoView: true });
}
Ai.scroll = (l) => {
  l.inputState.lastScrollTop = l.scrollDOM.scrollTop, l.inputState.lastScrollLeft = l.scrollDOM.scrollLeft;
};
Bi.keydown = (l, t) => (l.inputState.setSelectionOrigin("select"), t.keyCode == 27 && l.inputState.tabFocusMode != 0 && (l.inputState.tabFocusMode = Date.now() + 2e3), false);
Ai.touchstart = (l, t) => {
  l.inputState.lastTouchTime = Date.now(), l.inputState.setSelectionOrigin("select.pointer");
};
Ai.touchmove = (l) => {
  l.inputState.setSelectionOrigin("select.pointer");
};
Bi.mousedown = (l, t) => {
  if (l.observer.flush(), l.inputState.lastTouchTime > Date.now() - 2e3) return false;
  let e = null;
  for (let n of l.state.facet(qv)) if (e = n(l, t), e) break;
  if (!e && t.button == 0 && (e = aM(l, t)), e) {
    let n = !l.hasFocus;
    l.inputState.startMouseSelection(new $A(l, t, e, n)), n && l.observer.ignore(() => {
      xv(l.contentDOM);
      let a = l.root.activeElement;
      a && !a.contains(l.contentDOM) && a.blur();
    });
    let r = l.inputState.mouseSelection;
    if (r) return r.start(t), r.dragging === false;
  } else l.inputState.setSelectionOrigin("select.pointer");
  return false;
};
function R1(l, t, e, n) {
  if (n == 1) return K.cursor(t, e);
  if (n == 2) return NA(l.state, t, e);
  {
    let r = ce.find(l.docView, t), a = l.state.doc.lineAt(r ? r.posAtEnd : t), u = r ? r.posAtStart : a.from, f = r ? r.posAtEnd : a.to;
    return f < l.state.doc.length && f == a.to && f++, K.range(u, f);
  }
}
let z1 = (l, t, e) => t >= e.top && t <= e.bottom && l >= e.left && l <= e.right;
function sM(l, t, e, n) {
  let r = ce.find(l.docView, t);
  if (!r) return 1;
  let a = t - r.posAtStart;
  if (a == 0) return 1;
  if (a == r.length) return -1;
  let u = r.coordsAt(a, -1);
  if (u && z1(e, n, u)) return -1;
  let f = r.coordsAt(a, 1);
  return f && z1(e, n, f) ? 1 : u && u.bottom >= n ? -1 : 1;
}
function N1(l, t) {
  let e = l.posAtCoords({ x: t.clientX, y: t.clientY }, false);
  return { pos: e, bias: sM(l, e, t.clientX, t.clientY) };
}
const rM = F.ie && F.ie_version <= 11;
let _1 = null, L1 = 0, H1 = 0;
function oS(l) {
  if (!rM) return l.detail;
  let t = _1, e = H1;
  return _1 = l, H1 = Date.now(), L1 = !t || e > Date.now() - 400 && Math.abs(t.clientX - l.clientX) < 2 && Math.abs(t.clientY - l.clientY) < 2 ? (L1 + 1) % 3 : 1;
}
function aM(l, t) {
  let e = N1(l, t), n = oS(t), r = l.state.selection;
  return { update(a) {
    a.docChanged && (e.pos = a.changes.mapPos(e.pos), r = r.map(a.changes));
  }, get(a, u, f) {
    let h = N1(l, a), g, p = R1(l, h.pos, h.bias, n);
    if (e.pos != h.pos && !u) {
      let y = R1(l, e.pos, e.bias, n), v = Math.min(y.from, p.from), S = Math.max(y.to, p.to);
      p = v < p.from ? K.range(v, S) : K.range(S, v);
    }
    return u ? r.replaceRange(r.main.extend(p.from, p.to)) : f && n == 1 && r.ranges.length > 1 && (g = oM(r, h.pos)) ? g : f ? r.addRange(p) : K.create([p]);
  } };
}
function oM(l, t) {
  for (let e = 0; e < l.ranges.length; e++) {
    let { from: n, to: r } = l.ranges[e];
    if (n <= t && r >= t) return K.create(l.ranges.slice(0, e).concat(l.ranges.slice(e + 1)), l.mainIndex == e ? 0 : l.mainIndex - (l.mainIndex > e ? 1 : 0));
  }
  return null;
}
Bi.dragstart = (l, t) => {
  let { selection: { main: e } } = l.state;
  if (t.target.draggable) {
    let r = l.docView.nearest(t.target);
    if (r && r.isWidget) {
      let a = r.posAtStart, u = a + r.length;
      (a >= e.to || u <= e.from) && (e = K.range(a, u));
    }
  }
  let { inputState: n } = l;
  return n.mouseSelection && (n.mouseSelection.dragging = true), n.draggedContent = e, t.dataTransfer && (t.dataTransfer.setData("Text", rc(l.state, Am, l.state.sliceDoc(e.from, e.to))), t.dataTransfer.effectAllowed = "copyMove"), false;
};
Bi.dragend = (l) => (l.inputState.draggedContent = null, false);
function U1(l, t, e, n) {
  if (e = rc(l.state, Cm, e), !e) return;
  let r = l.posAtCoords({ x: t.clientX, y: t.clientY }, false), { draggedContent: a } = l.inputState, u = n && a && eM(l, t) ? { from: a.from, to: a.to } : null, f = { from: r, insert: e }, h = l.state.changes(u ? [u, f] : f);
  l.focus(), l.dispatch({ changes: h, selection: { anchor: h.mapPos(r, -1), head: h.mapPos(r, 1) }, userEvent: u ? "move.drop" : "input.drop" }), l.inputState.draggedContent = null;
}
Bi.drop = (l, t) => {
  if (!t.dataTransfer) return false;
  if (l.state.readOnly) return true;
  let e = t.dataTransfer.files;
  if (e && e.length) {
    let n = Array(e.length), r = 0, a = () => {
      ++r == e.length && U1(l, t, n.filter((u) => u != null).join(l.state.lineBreak), false);
    };
    for (let u = 0; u < e.length; u++) {
      let f = new FileReader();
      f.onerror = a, f.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(f.result) || (n[u] = f.result), a();
      }, f.readAsText(e[u]);
    }
    return true;
  } else {
    let n = t.dataTransfer.getData("Text");
    if (n) return U1(l, t, n, true), true;
  }
  return false;
};
Bi.paste = (l, t) => {
  if (l.state.readOnly) return true;
  l.observer.flush();
  let e = rS ? null : t.clipboardData;
  return e ? (aS(l, e.getData("text/plain") || e.getData("text/uri-list")), true) : (lM(l), false);
};
function uM(l, t) {
  let e = l.dom.parentNode;
  if (!e) return;
  let n = e.appendChild(document.createElement("textarea"));
  n.style.cssText = "position: fixed; left: -10000px; top: 10px", n.value = t, n.focus(), n.selectionEnd = t.length, n.selectionStart = 0, setTimeout(() => {
    n.remove(), l.focus();
  }, 50);
}
function cM(l) {
  let t = [], e = [], n = false;
  for (let r of l.selection.ranges) r.empty || (t.push(l.sliceDoc(r.from, r.to)), e.push(r));
  if (!t.length) {
    let r = -1;
    for (let { from: a } of l.selection.ranges) {
      let u = l.doc.lineAt(a);
      u.number > r && (t.push(u.text), e.push({ from: u.from, to: Math.min(l.doc.length, u.to + 1) })), r = u.number;
    }
    n = true;
  }
  return { text: rc(l, Am, t.join(l.lineBreak)), ranges: e, linewise: n };
}
let Jd = null;
Bi.copy = Bi.cut = (l, t) => {
  let { text: e, ranges: n, linewise: r } = cM(l.state);
  if (!e && !r) return false;
  Jd = r ? e : null, t.type == "cut" && !l.state.readOnly && l.dispatch({ changes: n, scrollIntoView: true, userEvent: "delete.cut" });
  let a = rS ? null : t.clipboardData;
  return a ? (a.clearData(), a.setData("text/plain", e), true) : (uM(l, e), false);
};
const uS = Fi.define();
function cS(l, t) {
  let e = [];
  for (let n of l.facet(Gv)) {
    let r = n(l, t);
    r && e.push(r);
  }
  return e.length ? l.update({ effects: e, annotations: uS.of(true) }) : null;
}
function fS(l) {
  setTimeout(() => {
    let t = l.hasFocus;
    if (t != l.inputState.notifiedFocused) {
      let e = cS(l.state, t);
      e ? l.dispatch(e) : l.update([]);
    }
  }, 10);
}
Ai.focus = (l) => {
  l.inputState.lastFocusTime = Date.now(), !l.scrollDOM.scrollTop && (l.inputState.lastScrollTop || l.inputState.lastScrollLeft) && (l.scrollDOM.scrollTop = l.inputState.lastScrollTop, l.scrollDOM.scrollLeft = l.inputState.lastScrollLeft), fS(l);
};
Ai.blur = (l) => {
  l.observer.clearSelectionRange(), fS(l);
};
Ai.compositionstart = Ai.compositionupdate = (l) => {
  l.observer.editContext || (l.inputState.compositionFirstChange == null && (l.inputState.compositionFirstChange = true), l.inputState.composing < 0 && (l.inputState.composing = 0));
};
Ai.compositionend = (l) => {
  l.observer.editContext || (l.inputState.composing = -1, l.inputState.compositionEndedAt = Date.now(), l.inputState.compositionPendingKey = true, l.inputState.compositionPendingChange = l.observer.pendingRecords().length > 0, l.inputState.compositionFirstChange = null, F.chrome && F.android ? l.observer.flushSoon() : l.inputState.compositionPendingChange ? Promise.resolve().then(() => l.observer.flush()) : setTimeout(() => {
    l.inputState.composing < 0 && l.docView.hasComposition && l.update([]);
  }, 50));
};
Ai.contextmenu = (l) => {
  l.inputState.lastContextMenu = Date.now();
};
Bi.beforeinput = (l, t) => {
  var e, n;
  if ((t.inputType == "insertText" || t.inputType == "insertCompositionText") && (l.inputState.insertingText = t.data, l.inputState.insertingTextAt = Date.now()), t.inputType == "insertReplacementText" && l.observer.editContext) {
    let a = (e = t.dataTransfer) === null || e === void 0 ? void 0 : e.getData("text/plain"), u = t.getTargetRanges();
    if (a && u.length) {
      let f = u[0], h = l.posAtDOM(f.startContainer, f.startOffset), g = l.posAtDOM(f.endContainer, f.endOffset);
      return km(l, { from: h, to: g, insert: l.state.toText(a) }, null), true;
    }
  }
  let r;
  if (F.chrome && F.android && (r = lS.find((a) => a.inputType == t.inputType)) && (l.observer.delayAndroidKey(r.key, r.keyCode), r.key == "Backspace" || r.key == "Delete")) {
    let a = ((n = window.visualViewport) === null || n === void 0 ? void 0 : n.height) || 0;
    setTimeout(() => {
      var u;
      (((u = window.visualViewport) === null || u === void 0 ? void 0 : u.height) || 0) > a + 10 && l.hasFocus && (l.contentDOM.blur(), l.focus());
    }, 100);
  }
  return F.ios && t.inputType == "deleteContentForward" && l.observer.flushSoon(), F.safari && t.inputType == "insertText" && l.inputState.composing >= 0 && setTimeout(() => Ai.compositionend(l, t), 20), false;
};
const V1 = /* @__PURE__ */ new Set();
function fM(l) {
  V1.has(l) || (V1.add(l), l.addEventListener("copy", () => {
  }), l.addEventListener("cut", () => {
  }));
}
const q1 = ["pre-wrap", "normal", "pre-line", "break-spaces"];
let Ys = false;
function j1() {
  Ys = false;
}
class hM {
  constructor(t) {
    this.lineWrapping = t, this.doc = Rt.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30;
  }
  heightForGap(t, e) {
    let n = this.doc.lineAt(e).number - this.doc.lineAt(t).number + 1;
    return this.lineWrapping && (n += Math.max(0, Math.ceil((e - t - n * this.lineLength * 0.5) / this.lineLength))), this.lineHeight * n;
  }
  heightForLine(t) {
    return this.lineWrapping ? (1 + Math.max(0, Math.ceil((t - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
  }
  setDoc(t) {
    return this.doc = t, this;
  }
  mustRefreshForWrapping(t) {
    return q1.indexOf(t) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(t) {
    let e = false;
    for (let n = 0; n < t.length; n++) {
      let r = t[n];
      r < 0 ? n++ : this.heightSamples[Math.floor(r * 10)] || (e = true, this.heightSamples[Math.floor(r * 10)] = true);
    }
    return e;
  }
  refresh(t, e, n, r, a, u) {
    let f = q1.indexOf(t) > -1, h = Math.round(e) != Math.round(this.lineHeight) || this.lineWrapping != f;
    if (this.lineWrapping = f, this.lineHeight = e, this.charWidth = n, this.textHeight = r, this.lineLength = a, h) {
      this.heightSamples = {};
      for (let g = 0; g < u.length; g++) {
        let p = u[g];
        p < 0 ? g++ : this.heightSamples[Math.floor(p * 10)] = true;
      }
    }
    return h;
  }
}
class dM {
  constructor(t, e) {
    this.from = t, this.heights = e, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class Xi {
  constructor(t, e, n, r, a) {
    this.from = t, this.length = e, this.top = n, this.height = r, this._content = a;
  }
  get type() {
    return typeof this._content == "number" ? He.Text : Array.isArray(this._content) ? this._content : this._content.type;
  }
  get to() {
    return this.from + this.length;
  }
  get bottom() {
    return this.top + this.height;
  }
  get widget() {
    return this._content instanceof ll ? this._content.widget : null;
  }
  get widgetLineBreaks() {
    return typeof this._content == "number" ? this._content : 0;
  }
  join(t) {
    let e = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(t._content) ? t._content : [t]);
    return new Xi(this.from, this.length + t.length, this.top, this.height + t.height, e);
  }
}
var Zt = (function(l) {
  return l[l.ByPos = 0] = "ByPos", l[l.ByHeight = 1] = "ByHeight", l[l.ByPosNoHeight = 2] = "ByPosNoHeight", l;
})(Zt || (Zt = {}));
const Du = 1e-3;
class Ue {
  constructor(t, e, n = 2) {
    this.length = t, this.height = e, this.flags = n;
  }
  get outdated() {
    return (this.flags & 2) > 0;
  }
  set outdated(t) {
    this.flags = (t ? 2 : 0) | this.flags & -3;
  }
  setHeight(t) {
    this.height != t && (Math.abs(this.height - t) > Du && (Ys = true), this.height = t);
  }
  replace(t, e, n) {
    return Ue.of(n);
  }
  decomposeLeft(t, e) {
    e.push(this);
  }
  decomposeRight(t, e) {
    e.push(this);
  }
  applyChanges(t, e, n, r) {
    let a = this, u = n.doc;
    for (let f = r.length - 1; f >= 0; f--) {
      let { fromA: h, toA: g, fromB: p, toB: y } = r[f], v = a.lineAt(h, Zt.ByPosNoHeight, n.setDoc(e), 0, 0), S = v.to >= g ? v : a.lineAt(g, Zt.ByPosNoHeight, n, 0, 0);
      for (y += S.to - g, g = S.to; f > 0 && v.from <= r[f - 1].toA; ) h = r[f - 1].fromA, p = r[f - 1].fromB, f--, h < v.from && (v = a.lineAt(h, Zt.ByPosNoHeight, n, 0, 0));
      p += v.from - h, h = v.from;
      let w = Om.build(n.setDoc(u), t, p, y);
      a = ju(a, a.replace(h, g, w));
    }
    return a.updateHeight(n, 0);
  }
  static empty() {
    return new ai(0, 0);
  }
  static of(t) {
    if (t.length == 1) return t[0];
    let e = 0, n = t.length, r = 0, a = 0;
    for (; ; ) if (e == n) if (r > a * 2) {
      let f = t[e - 1];
      f.break ? t.splice(--e, 1, f.left, null, f.right) : t.splice(--e, 1, f.left, f.right), n += 1 + f.break, r -= f.size;
    } else if (a > r * 2) {
      let f = t[n];
      f.break ? t.splice(n, 1, f.left, null, f.right) : t.splice(n, 1, f.left, f.right), n += 2 + f.break, a -= f.size;
    } else break;
    else if (r < a) {
      let f = t[e++];
      f && (r += f.size);
    } else {
      let f = t[--n];
      f && (a += f.size);
    }
    let u = 0;
    return t[e - 1] == null ? (u = 1, e--) : t[e] == null && (u = 1, n++), new mM(Ue.of(t.slice(0, e)), u, Ue.of(t.slice(n)));
  }
}
function ju(l, t) {
  return l == t ? l : (l.constructor != t.constructor && (Ys = true), t);
}
Ue.prototype.size = 1;
class hS extends Ue {
  constructor(t, e, n) {
    super(t, e), this.deco = n;
  }
  blockAt(t, e, n, r) {
    return new Xi(r, this.length, n, this.height, this.deco || 0);
  }
  lineAt(t, e, n, r, a) {
    return this.blockAt(0, n, r, a);
  }
  forEachLine(t, e, n, r, a, u) {
    t <= a + this.length && e >= a && u(this.blockAt(0, n, r, a));
  }
  updateHeight(t, e = 0, n = false, r) {
    return r && r.from <= e && r.more && this.setHeight(r.heights[r.index++]), this.outdated = false, this;
  }
  toString() {
    return `block(${this.length})`;
  }
}
class ai extends hS {
  constructor(t, e) {
    super(t, e, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0;
  }
  blockAt(t, e, n, r) {
    return new Xi(r, this.length, n, this.height, this.breaks);
  }
  replace(t, e, n) {
    let r = n[0];
    return n.length == 1 && (r instanceof ai || r instanceof we && r.flags & 4) && Math.abs(this.length - r.length) < 10 ? (r instanceof we ? r = new ai(r.length, this.height) : r.height = this.height, this.outdated || (r.outdated = false), r) : Ue.of(n);
  }
  updateHeight(t, e = 0, n = false, r) {
    return r && r.from <= e && r.more ? this.setHeight(r.heights[r.index++]) : (n || this.outdated) && this.setHeight(Math.max(this.widgetHeight, t.heightForLine(this.length - this.collapsed)) + this.breaks * t.lineHeight), this.outdated = false, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class we extends Ue {
  constructor(t) {
    super(t, 0);
  }
  heightMetrics(t, e) {
    let n = t.doc.lineAt(e).number, r = t.doc.lineAt(e + this.length).number, a = r - n + 1, u, f = 0;
    if (t.lineWrapping) {
      let h = Math.min(this.height, t.lineHeight * a);
      u = h / a, this.length > a + 1 && (f = (this.height - h) / (this.length - a - 1));
    } else u = this.height / a;
    return { firstLine: n, lastLine: r, perLine: u, perChar: f };
  }
  blockAt(t, e, n, r) {
    let { firstLine: a, lastLine: u, perLine: f, perChar: h } = this.heightMetrics(e, r);
    if (e.lineWrapping) {
      let g = r + (t < e.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (t - n) / this.height)) * this.length)), p = e.doc.lineAt(g), y = f + p.length * h, v = Math.max(n, t - y / 2);
      return new Xi(p.from, p.length, v, y, 0);
    } else {
      let g = Math.max(0, Math.min(u - a, Math.floor((t - n) / f))), { from: p, length: y } = e.doc.line(a + g);
      return new Xi(p, y, n + f * g, f, 0);
    }
  }
  lineAt(t, e, n, r, a) {
    if (e == Zt.ByHeight) return this.blockAt(t, n, r, a);
    if (e == Zt.ByPosNoHeight) {
      let { from: S, to: w } = n.doc.lineAt(t);
      return new Xi(S, w - S, 0, 0, 0);
    }
    let { firstLine: u, perLine: f, perChar: h } = this.heightMetrics(n, a), g = n.doc.lineAt(t), p = f + g.length * h, y = g.number - u, v = r + f * y + h * (g.from - a - y);
    return new Xi(g.from, g.length, Math.max(r, Math.min(v, r + this.height - p)), p, 0);
  }
  forEachLine(t, e, n, r, a, u) {
    t = Math.max(t, a), e = Math.min(e, a + this.length);
    let { firstLine: f, perLine: h, perChar: g } = this.heightMetrics(n, a);
    for (let p = t, y = r; p <= e; ) {
      let v = n.doc.lineAt(p);
      if (p == t) {
        let w = v.number - f;
        y += h * w + g * (t - a - w);
      }
      let S = h + g * v.length;
      u(new Xi(v.from, v.length, y, S, 0)), y += S, p = v.to + 1;
    }
  }
  replace(t, e, n) {
    let r = this.length - e;
    if (r > 0) {
      let a = n[n.length - 1];
      a instanceof we ? n[n.length - 1] = new we(a.length + r) : n.push(null, new we(r - 1));
    }
    if (t > 0) {
      let a = n[0];
      a instanceof we ? n[0] = new we(t + a.length) : n.unshift(new we(t - 1), null);
    }
    return Ue.of(n);
  }
  decomposeLeft(t, e) {
    e.push(new we(t - 1), null);
  }
  decomposeRight(t, e) {
    e.push(null, new we(this.length - t - 1));
  }
  updateHeight(t, e = 0, n = false, r) {
    let a = e + this.length;
    if (r && r.from <= e + this.length && r.more) {
      let u = [], f = Math.max(e, r.from), h = -1;
      for (r.from > e && u.push(new we(r.from - e - 1).updateHeight(t, e)); f <= a && r.more; ) {
        let p = t.doc.lineAt(f).length;
        u.length && u.push(null);
        let y = r.heights[r.index++];
        h == -1 ? h = y : Math.abs(y - h) >= Du && (h = -2);
        let v = new ai(p, y);
        v.outdated = false, u.push(v), f += p + 1;
      }
      f <= a && u.push(null, new we(a - f).updateHeight(t, f));
      let g = Ue.of(u);
      return (h < 0 || Math.abs(g.height - this.height) >= Du || Math.abs(h - this.heightMetrics(t, e).perLine) >= Du) && (Ys = true), ju(this, g);
    } else (n || this.outdated) && (this.setHeight(t.heightForGap(e, e + this.length)), this.outdated = false);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class mM extends Ue {
  constructor(t, e, n) {
    super(t.length + e + n.length, t.height + n.height, e | (t.outdated || n.outdated ? 2 : 0)), this.left = t, this.right = n, this.size = t.size + n.size;
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(t, e, n, r) {
    let a = n + this.left.height;
    return t < a ? this.left.blockAt(t, e, n, r) : this.right.blockAt(t, e, a, r + this.left.length + this.break);
  }
  lineAt(t, e, n, r, a) {
    let u = r + this.left.height, f = a + this.left.length + this.break, h = e == Zt.ByHeight ? t < u : t < f, g = h ? this.left.lineAt(t, e, n, r, a) : this.right.lineAt(t, e, n, u, f);
    if (this.break || (h ? g.to < f : g.from > f)) return g;
    let p = e == Zt.ByPosNoHeight ? Zt.ByPosNoHeight : Zt.ByPos;
    return h ? g.join(this.right.lineAt(f, p, n, u, f)) : this.left.lineAt(f, p, n, r, a).join(g);
  }
  forEachLine(t, e, n, r, a, u) {
    let f = r + this.left.height, h = a + this.left.length + this.break;
    if (this.break) t < h && this.left.forEachLine(t, e, n, r, a, u), e >= h && this.right.forEachLine(t, e, n, f, h, u);
    else {
      let g = this.lineAt(h, Zt.ByPos, n, r, a);
      t < g.from && this.left.forEachLine(t, g.from - 1, n, r, a, u), g.to >= t && g.from <= e && u(g), e > g.to && this.right.forEachLine(g.to + 1, e, n, f, h, u);
    }
  }
  replace(t, e, n) {
    let r = this.left.length + this.break;
    if (e < r) return this.balanced(this.left.replace(t, e, n), this.right);
    if (t > this.left.length) return this.balanced(this.left, this.right.replace(t - r, e - r, n));
    let a = [];
    t > 0 && this.decomposeLeft(t, a);
    let u = a.length;
    for (let f of n) a.push(f);
    if (t > 0 && Y1(a, u - 1), e < this.length) {
      let f = a.length;
      this.decomposeRight(e, a), Y1(a, f);
    }
    return Ue.of(a);
  }
  decomposeLeft(t, e) {
    let n = this.left.length;
    if (t <= n) return this.left.decomposeLeft(t, e);
    e.push(this.left), this.break && (n++, t >= n && e.push(null)), t > n && this.right.decomposeLeft(t - n, e);
  }
  decomposeRight(t, e) {
    let n = this.left.length, r = n + this.break;
    if (t >= r) return this.right.decomposeRight(t - r, e);
    t < n && this.left.decomposeRight(t, e), this.break && t < r && e.push(null), e.push(this.right);
  }
  balanced(t, e) {
    return t.size > 2 * e.size || e.size > 2 * t.size ? Ue.of(this.break ? [t, null, e] : [t, e]) : (this.left = ju(this.left, t), this.right = ju(this.right, e), this.setHeight(t.height + e.height), this.outdated = t.outdated || e.outdated, this.size = t.size + e.size, this.length = t.length + this.break + e.length, this);
  }
  updateHeight(t, e = 0, n = false, r) {
    let { left: a, right: u } = this, f = e + a.length + this.break, h = null;
    return r && r.from <= e + a.length && r.more ? h = a = a.updateHeight(t, e, n, r) : a.updateHeight(t, e, n), r && r.from <= f + u.length && r.more ? h = u = u.updateHeight(t, f, n, r) : u.updateHeight(t, f, n), h ? this.balanced(a, u) : (this.height = this.left.height + this.right.height, this.outdated = false, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function Y1(l, t) {
  let e, n;
  l[t] == null && (e = l[t - 1]) instanceof we && (n = l[t + 1]) instanceof we && l.splice(t - 1, 3, new we(e.length + 1 + n.length));
}
const gM = 5;
class Om {
  constructor(t, e) {
    this.pos = t, this.oracle = e, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = t;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(t, e) {
    if (this.lineStart > -1) {
      let n = Math.min(e, this.lineEnd), r = this.nodes[this.nodes.length - 1];
      r instanceof ai ? r.length += n - this.pos : (n > this.pos || !this.isCovered) && this.nodes.push(new ai(n - this.pos, -1)), this.writtenTo = n, e > n && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = e;
  }
  point(t, e, n) {
    if (t < e || n.heightRelevant) {
      let r = n.widget ? n.widget.estimatedHeight : 0, a = n.widget ? n.widget.lineBreaks : 0;
      r < 0 && (r = this.oracle.lineHeight);
      let u = e - t;
      n.block ? this.addBlock(new hS(u, r, n)) : (u || a || r >= gM) && this.addLineDeco(r, a, u);
    } else e > t && this.span(t, e);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1) return;
    let { from: t, to: e } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = t, this.lineEnd = e, this.writtenTo < t && ((this.writtenTo < t - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, t - 1)), this.nodes.push(null)), this.pos > t && this.nodes.push(new ai(this.pos - t, -1)), this.writtenTo = this.pos;
  }
  blankContent(t, e) {
    let n = new we(e - t);
    return this.oracle.doc.lineAt(t).to == e && (n.flags |= 4), n;
  }
  ensureLine() {
    this.enterLine();
    let t = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (t instanceof ai) return t;
    let e = new ai(0, -1);
    return this.nodes.push(e), e;
  }
  addBlock(t) {
    this.enterLine();
    let e = t.deco;
    e && e.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(t), this.writtenTo = this.pos = this.pos + t.length, e && e.endSide > 0 && (this.covering = t);
  }
  addLineDeco(t, e, n) {
    let r = this.ensureLine();
    r.length += n, r.collapsed += n, r.widgetHeight = Math.max(r.widgetHeight, t), r.breaks += e, this.writtenTo = this.pos = this.pos + n;
  }
  finish(t) {
    let e = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(e instanceof ai) && !this.isCovered ? this.nodes.push(new ai(0, -1)) : (this.writtenTo < this.pos || e == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let n = t;
    for (let r of this.nodes) r instanceof ai && r.updateHeight(this.oracle, n), n += r ? r.length : 1;
    return this.nodes;
  }
  static build(t, e, n, r) {
    let a = new Om(n, t);
    return Bt.spans(e, n, r, a, 0), a.finish(n);
  }
}
function pM(l, t, e) {
  let n = new yM();
  return Bt.compare(l, t, e, n, 0), n.changes;
}
class yM {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(t, e, n, r) {
    (t < e || n && n.heightRelevant || r && r.heightRelevant) && Ou(t, e, this.changes, 5);
  }
}
function bM(l, t) {
  let e = l.getBoundingClientRect(), n = l.ownerDocument, r = n.defaultView || window, a = Math.max(0, e.left), u = Math.min(r.innerWidth, e.right), f = Math.max(0, e.top), h = Math.min(r.innerHeight, e.bottom);
  for (let g = l.parentNode; g && g != n.body; ) if (g.nodeType == 1) {
    let p = g, y = window.getComputedStyle(p);
    if ((p.scrollHeight > p.clientHeight || p.scrollWidth > p.clientWidth) && y.overflow != "visible") {
      let v = p.getBoundingClientRect();
      a = Math.max(a, v.left), u = Math.min(u, v.right), f = Math.max(f, v.top), h = Math.min(g == l.parentNode ? r.innerHeight : h, v.bottom);
    }
    g = y.position == "absolute" || y.position == "fixed" ? p.offsetParent : p.parentNode;
  } else if (g.nodeType == 11) g = g.host;
  else break;
  return { left: a - e.left, right: Math.max(a, u) - e.left, top: f - (e.top + t), bottom: Math.max(f, h) - (e.top + t) };
}
function vM(l) {
  let t = l.getBoundingClientRect(), e = l.ownerDocument.defaultView || window;
  return t.left < e.innerWidth && t.right > 0 && t.top < e.innerHeight && t.bottom > 0;
}
function SM(l, t) {
  let e = l.getBoundingClientRect();
  return { left: 0, right: e.right - e.left, top: t, bottom: e.bottom - (e.top + t) };
}
class Ph {
  constructor(t, e, n, r) {
    this.from = t, this.to = e, this.size = n, this.displaySize = r;
  }
  static same(t, e) {
    if (t.length != e.length) return false;
    for (let n = 0; n < t.length; n++) {
      let r = t[n], a = e[n];
      if (r.from != a.from || r.to != a.to || r.size != a.size) return false;
    }
    return true;
  }
  draw(t, e) {
    return ut.replace({ widget: new xM(this.displaySize * (e ? t.scaleY : t.scaleX), e) }).range(this.from, this.to);
  }
}
class xM extends Cn {
  constructor(t, e) {
    super(), this.size = t, this.vertical = e;
  }
  eq(t) {
    return t.size == this.size && t.vertical == this.vertical;
  }
  toDOM() {
    let t = document.createElement("div");
    return this.vertical ? t.style.height = this.size + "px" : (t.style.width = this.size + "px", t.style.height = "2px", t.style.display = "inline-block"), t;
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
}
class G1 {
  constructor(t) {
    this.state = t, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = true, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = false, this.scaleX = 1, this.scaleY = 1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = X1, this.scrollTarget = null, this.printing = false, this.mustMeasureContent = true, this.defaultTextDirection = Wt.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = false;
    let e = t.facet(Mm).some((n) => typeof n != "function" && n.class == "cm-lineWrapping");
    this.heightOracle = new hM(e), this.stateDeco = t.facet(ha).filter((n) => typeof n != "function"), this.heightMap = Ue.empty().applyChanges(this.stateDeco, Rt.empty, this.heightOracle.setDoc(t.doc), [new wi(0, 0, 0, t.doc.length)]);
    for (let n = 0; n < 2 && (this.viewport = this.getViewport(0, null), !!this.updateForViewport()); n++) ;
    this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = ut.set(this.lineGaps.map((n) => n.draw(this, false))), this.computeVisibleRanges();
  }
  updateForViewport() {
    let t = [this.viewport], { main: e } = this.state.selection;
    for (let n = 0; n <= 1; n++) {
      let r = n ? e.head : e.anchor;
      if (!t.some(({ from: a, to: u }) => r >= a && r <= u)) {
        let { from: a, to: u } = this.lineBlockAt(r);
        t.push(new ru(a, u));
      }
    }
    return this.viewports = t.sort((n, r) => n.from - r.from), this.updateScaler();
  }
  updateScaler() {
    let t = this.scaler;
    return this.scaler = this.heightMap.height <= 7e6 ? X1 : new Dm(this.heightOracle, this.heightMap, this.viewports), t.eq(this.scaler) ? 0 : 2;
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (t) => {
      this.viewportLines.push(Pr(t, this.scaler));
    });
  }
  update(t, e = null) {
    this.state = t.state;
    let n = this.stateDeco;
    this.stateDeco = this.state.facet(ha).filter((p) => typeof p != "function");
    let r = t.changedRanges, a = wi.extendWithRanges(r, pM(n, this.stateDeco, t ? t.changes : he.empty(this.state.doc.length))), u = this.heightMap.height, f = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    j1(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, t.startState.doc, this.heightOracle.setDoc(this.state.doc), a), (this.heightMap.height != u || Ys) && (t.flags |= 2), f ? (this.scrollAnchorPos = t.changes.mapPos(f.from, -1), this.scrollAnchorHeight = f.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = u);
    let h = a.length ? this.mapViewport(this.viewport, t.changes) : this.viewport;
    (e && (e.range.head < h.from || e.range.head > h.to) || !this.viewportIsAppropriate(h)) && (h = this.getViewport(0, e));
    let g = h.from != this.viewport.from || h.to != this.viewport.to;
    this.viewport = h, t.flags |= this.updateForViewport(), (g || !t.changes.empty || t.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, t.changes))), t.flags |= this.computeVisibleRanges(t.changes), e && (this.scrollTarget = e), !this.mustEnforceCursorAssoc && t.selectionSet && t.view.lineWrapping && t.state.selection.main.empty && t.state.selection.main.assoc && !t.state.facet(Kv) && (this.mustEnforceCursorAssoc = true);
  }
  measure(t) {
    let e = t.contentDOM, n = window.getComputedStyle(e), r = this.heightOracle, a = n.whiteSpace;
    this.defaultTextDirection = n.direction == "rtl" ? Wt.RTL : Wt.LTR;
    let u = this.heightOracle.mustRefreshForWrapping(a), f = e.getBoundingClientRect(), h = u || this.mustMeasureContent || this.contentDOMHeight != f.height;
    this.contentDOMHeight = f.height, this.mustMeasureContent = false;
    let g = 0, p = 0;
    if (f.width && f.height) {
      let { scaleX: Q, scaleY: _ } = Sv(e, f);
      (Q > 5e-3 && Math.abs(this.scaleX - Q) > 5e-3 || _ > 5e-3 && Math.abs(this.scaleY - _) > 5e-3) && (this.scaleX = Q, this.scaleY = _, g |= 16, u = h = true);
    }
    let y = (parseInt(n.paddingTop) || 0) * this.scaleY, v = (parseInt(n.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != y || this.paddingBottom != v) && (this.paddingTop = y, this.paddingBottom = v, g |= 18), this.editorWidth != t.scrollDOM.clientWidth && (r.lineWrapping && (h = true), this.editorWidth = t.scrollDOM.clientWidth, g |= 16);
    let S = t.scrollDOM.scrollTop * this.scaleY;
    this.scrollTop != S && (this.scrollAnchorHeight = -1, this.scrollTop = S), this.scrolledToBottom = Cv(t.scrollDOM);
    let w = (this.printing ? SM : bM)(e, this.paddingTop), C = w.top - this.pixelViewport.top, T = w.bottom - this.pixelViewport.bottom;
    this.pixelViewport = w;
    let O = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (O != this.inView && (this.inView = O, O && (h = true)), !this.inView && !this.scrollTarget && !vM(t.dom)) return 0;
    let j = f.width;
    if ((this.contentDOMWidth != j || this.editorHeight != t.scrollDOM.clientHeight) && (this.contentDOMWidth = f.width, this.editorHeight = t.scrollDOM.clientHeight, g |= 16), h) {
      let Q = t.docView.measureVisibleLineHeights(this.viewport);
      if (r.mustRefreshForHeights(Q) && (u = true), u || r.lineWrapping && Math.abs(j - this.contentDOMWidth) > r.charWidth) {
        let { lineHeight: _, charWidth: G, textHeight: V } = t.docView.measureTextSize();
        u = _ > 0 && r.refresh(a, _, G, V, Math.max(5, j / G), Q), u && (t.docView.minWidth = 0, g |= 16);
      }
      C > 0 && T > 0 ? p = Math.max(C, T) : C < 0 && T < 0 && (p = Math.min(C, T)), j1();
      for (let _ of this.viewports) {
        let G = _.from == this.viewport.from ? Q : t.docView.measureVisibleLineHeights(_);
        this.heightMap = (u ? Ue.empty().applyChanges(this.stateDeco, Rt.empty, this.heightOracle, [new wi(0, 0, 0, t.state.doc.length)]) : this.heightMap).updateHeight(r, 0, u, new dM(_.from, G));
      }
      Ys && (g |= 2);
    }
    let L = !this.viewportIsAppropriate(this.viewport, p) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return L && (g & 2 && (g |= this.updateScaler()), this.viewport = this.getViewport(p, this.scrollTarget), g |= this.updateForViewport()), (g & 2 || L) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(u ? [] : this.lineGaps, t)), g |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = false, t.docView.enforceCursorAssoc()), g;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(t, e) {
    let n = 0.5 - Math.max(-0.5, Math.min(0.5, t / 1e3 / 2)), r = this.heightMap, a = this.heightOracle, { visibleTop: u, visibleBottom: f } = this, h = new ru(r.lineAt(u - n * 1e3, Zt.ByHeight, a, 0, 0).from, r.lineAt(f + (1 - n) * 1e3, Zt.ByHeight, a, 0, 0).to);
    if (e) {
      let { head: g } = e.range;
      if (g < h.from || g > h.to) {
        let p = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), y = r.lineAt(g, Zt.ByPos, a, 0, 0), v;
        e.y == "center" ? v = (y.top + y.bottom) / 2 - p / 2 : e.y == "start" || e.y == "nearest" && g < h.from ? v = y.top : v = y.bottom - p, h = new ru(r.lineAt(v - 1e3 / 2, Zt.ByHeight, a, 0, 0).from, r.lineAt(v + p + 1e3 / 2, Zt.ByHeight, a, 0, 0).to);
      }
    }
    return h;
  }
  mapViewport(t, e) {
    let n = e.mapPos(t.from, -1), r = e.mapPos(t.to, 1);
    return new ru(this.heightMap.lineAt(n, Zt.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(r, Zt.ByPos, this.heightOracle, 0, 0).to);
  }
  viewportIsAppropriate({ from: t, to: e }, n = 0) {
    if (!this.inView) return true;
    let { top: r } = this.heightMap.lineAt(t, Zt.ByPos, this.heightOracle, 0, 0), { bottom: a } = this.heightMap.lineAt(e, Zt.ByPos, this.heightOracle, 0, 0), { visibleTop: u, visibleBottom: f } = this;
    return (t == 0 || r <= u - Math.max(10, Math.min(-n, 250))) && (e == this.state.doc.length || a >= f + Math.max(10, Math.min(n, 250))) && r > u - 2 * 1e3 && a < f + 2 * 1e3;
  }
  mapLineGaps(t, e) {
    if (!t.length || e.empty) return t;
    let n = [];
    for (let r of t) e.touchesRange(r.from, r.to) || n.push(new Ph(e.mapPos(r.from), e.mapPos(r.to), r.size, r.displaySize));
    return n;
  }
  ensureLineGaps(t, e) {
    let n = this.heightOracle.lineWrapping, r = n ? 1e4 : 2e3, a = r >> 1, u = r << 1;
    if (this.defaultTextDirection != Wt.LTR && !n) return [];
    let f = [], h = (p, y, v, S) => {
      if (y - p < a) return;
      let w = this.state.selection.main, C = [w.from];
      w.empty || C.push(w.to);
      for (let O of C) if (O > p && O < y) {
        h(p, O - 10, v, S), h(O + 10, y, v, S);
        return;
      }
      let T = CM(t, (O) => O.from >= v.from && O.to <= v.to && Math.abs(O.from - p) < a && Math.abs(O.to - y) < a && !C.some((j) => O.from < j && O.to > j));
      if (!T) {
        if (y < v.to && e && n && e.visibleRanges.some((L) => L.from <= y && L.to >= y)) {
          let L = e.moveToLineBoundary(K.cursor(y), false, true).head;
          L > p && (y = L);
        }
        let O = this.gapSize(v, p, y, S), j = n || O < 2e6 ? O : 2e6;
        T = new Ph(p, y, O, j);
      }
      f.push(T);
    }, g = (p) => {
      if (p.length < u || p.type != He.Text) return;
      let y = wM(p.from, p.to, this.stateDeco);
      if (y.total < u) return;
      let v = this.scrollTarget ? this.scrollTarget.range.head : null, S, w;
      if (n) {
        let C = r / this.heightOracle.lineLength * this.heightOracle.lineHeight, T, O;
        if (v != null) {
          let j = ou(y, v), L = ((this.visibleBottom - this.visibleTop) / 2 + C) / p.height;
          T = j - L, O = j + L;
        } else T = (this.visibleTop - p.top - C) / p.height, O = (this.visibleBottom - p.top + C) / p.height;
        S = au(y, T), w = au(y, O);
      } else {
        let C = y.total * this.heightOracle.charWidth, T = r * this.heightOracle.charWidth, O = 0;
        if (C > 2e6) for (let G of t) G.from >= p.from && G.from < p.to && G.size != G.displaySize && G.from * this.heightOracle.charWidth + O < this.pixelViewport.left && (O = G.size - G.displaySize);
        let j = this.pixelViewport.left + O, L = this.pixelViewport.right + O, Q, _;
        if (v != null) {
          let G = ou(y, v), V = ((L - j) / 2 + T) / C;
          Q = G - V, _ = G + V;
        } else Q = (j - T) / C, _ = (L + T) / C;
        S = au(y, Q), w = au(y, _);
      }
      S > p.from && h(p.from, S, p, y), w < p.to && h(w, p.to, p, y);
    };
    for (let p of this.viewportLines) Array.isArray(p.type) ? p.type.forEach(g) : g(p);
    return f;
  }
  gapSize(t, e, n, r) {
    let a = ou(r, n) - ou(r, e);
    return this.heightOracle.lineWrapping ? t.height * a : r.total * this.heightOracle.charWidth * a;
  }
  updateLineGaps(t) {
    Ph.same(t, this.lineGaps) || (this.lineGaps = t, this.lineGapDeco = ut.set(t.map((e) => e.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges(t) {
    let e = this.stateDeco;
    this.lineGaps.length && (e = e.concat(this.lineGapDeco));
    let n = [];
    Bt.spans(e, this.viewport.from, this.viewport.to, { span(a, u) {
      n.push({ from: a, to: u });
    }, point() {
    } }, 20);
    let r = 0;
    if (n.length != this.visibleRanges.length) r = 12;
    else for (let a = 0; a < n.length && !(r & 8); a++) {
      let u = this.visibleRanges[a], f = n[a];
      (u.from != f.from || u.to != f.to) && (r |= 4, t && t.mapPos(u.from, -1) == f.from && t.mapPos(u.to, 1) == f.to || (r |= 8));
    }
    return this.visibleRanges = n, r;
  }
  lineBlockAt(t) {
    return t >= this.viewport.from && t <= this.viewport.to && this.viewportLines.find((e) => e.from <= t && e.to >= t) || Pr(this.heightMap.lineAt(t, Zt.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(t) {
    return t >= this.viewportLines[0].top && t <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((e) => e.top <= t && e.bottom >= t) || Pr(this.heightMap.lineAt(this.scaler.fromDOM(t), Zt.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  scrollAnchorAt(t) {
    let e = this.lineBlockAtHeight(t + 8);
    return e.from >= this.viewport.from || this.viewportLines[0].top - t > 200 ? e : this.viewportLines[0];
  }
  elementAtHeight(t) {
    return Pr(this.heightMap.blockAt(this.scaler.fromDOM(t), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class ru {
  constructor(t, e) {
    this.from = t, this.to = e;
  }
}
function wM(l, t, e) {
  let n = [], r = l, a = 0;
  return Bt.spans(e, l, t, { span() {
  }, point(u, f) {
    u > r && (n.push({ from: r, to: u }), a += u - r), r = f;
  } }, 20), r < t && (n.push({ from: r, to: t }), a += t - r), { total: a, ranges: n };
}
function au({ total: l, ranges: t }, e) {
  if (e <= 0) return t[0].from;
  if (e >= 1) return t[t.length - 1].to;
  let n = Math.floor(l * e);
  for (let r = 0; ; r++) {
    let { from: a, to: u } = t[r], f = u - a;
    if (n <= f) return a + n;
    n -= f;
  }
}
function ou(l, t) {
  let e = 0;
  for (let { from: n, to: r } of l.ranges) {
    if (t <= r) {
      e += t - n;
      break;
    }
    e += r - n;
  }
  return e / l.total;
}
function CM(l, t) {
  for (let e of l) if (t(e)) return e;
}
const X1 = { toDOM(l) {
  return l;
}, fromDOM(l) {
  return l;
}, scale: 1, eq(l) {
  return l == this;
} };
class Dm {
  constructor(t, e, n) {
    let r = 0, a = 0, u = 0;
    this.viewports = n.map(({ from: f, to: h }) => {
      let g = e.lineAt(f, Zt.ByPos, t, 0, 0).top, p = e.lineAt(h, Zt.ByPos, t, 0, 0).bottom;
      return r += p - g, { from: f, to: h, top: g, bottom: p, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - r) / (e.height - r);
    for (let f of this.viewports) f.domTop = u + (f.top - a) * this.scale, u = f.domBottom = f.domTop + (f.bottom - f.top), a = f.bottom;
  }
  toDOM(t) {
    for (let e = 0, n = 0, r = 0; ; e++) {
      let a = e < this.viewports.length ? this.viewports[e] : null;
      if (!a || t < a.top) return r + (t - n) * this.scale;
      if (t <= a.bottom) return a.domTop + (t - a.top);
      n = a.bottom, r = a.domBottom;
    }
  }
  fromDOM(t) {
    for (let e = 0, n = 0, r = 0; ; e++) {
      let a = e < this.viewports.length ? this.viewports[e] : null;
      if (!a || t < a.domTop) return n + (t - r) / this.scale;
      if (t <= a.domBottom) return a.top + (t - a.domTop);
      n = a.bottom, r = a.domBottom;
    }
  }
  eq(t) {
    return t instanceof Dm ? this.scale == t.scale && this.viewports.length == t.viewports.length && this.viewports.every((e, n) => e.from == t.viewports[n].from && e.to == t.viewports[n].to) : false;
  }
}
function Pr(l, t) {
  if (t.scale == 1) return l;
  let e = t.toDOM(l.top), n = t.toDOM(l.bottom);
  return new Xi(l.from, l.length, e, n - e, Array.isArray(l._content) ? l._content.map((r) => Pr(r, t)) : l._content);
}
const uu = et.define({ combine: (l) => l.join(" ") }), Fd = et.define({ combine: (l) => l.indexOf(true) > -1 }), Pd = il.newName(), dS = il.newName(), mS = il.newName(), gS = { "&light": "." + dS, "&dark": "." + mS };
function Id(l, t, e) {
  return new il(t, { finish(n) {
    return /&/.test(n) ? n.replace(/&\w*/, (r) => {
      if (r == "&") return l;
      if (!e || !e[r]) throw new RangeError(`Unsupported selector: ${r}`);
      return e[r];
    }) : l + " " + n;
  } });
}
const AM = Id("." + Pd, { "&": { position: "relative !important", boxSizing: "border-box", "&.cm-focused": { outline: "1px dotted #212121" }, display: "flex !important", flexDirection: "column" }, ".cm-scroller": { display: "flex !important", alignItems: "flex-start !important", fontFamily: "monospace", lineHeight: 1.4, height: "100%", overflowX: "auto", position: "relative", zIndex: 0, overflowAnchor: "none" }, ".cm-content": { margin: 0, flexGrow: 2, flexShrink: 0, display: "block", whiteSpace: "pre", wordWrap: "normal", boxSizing: "border-box", minHeight: "100%", padding: "4px 0", outline: "none", "&[contenteditable=true]": { WebkitUserModify: "read-write-plaintext-only" } }, ".cm-lineWrapping": { whiteSpace_fallback: "pre-wrap", whiteSpace: "break-spaces", wordBreak: "break-word", overflowWrap: "anywhere", flexShrink: 1 }, "&light .cm-content": { caretColor: "black" }, "&dark .cm-content": { caretColor: "white" }, ".cm-line": { display: "block", padding: "0 2px 0 6px" }, ".cm-layer": { position: "absolute", left: 0, top: 0, contain: "size style", "& > *": { position: "absolute" } }, "&light .cm-selectionBackground": { background: "#d9d9d9" }, "&dark .cm-selectionBackground": { background: "#222" }, "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": { background: "#d7d4f0" }, "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": { background: "#233" }, ".cm-cursorLayer": { pointerEvents: "none" }, "&.cm-focused > .cm-scroller > .cm-cursorLayer": { animation: "steps(1) cm-blink 1.2s infinite" }, "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} }, "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} }, ".cm-cursor, .cm-dropCursor": { borderLeft: "1.2px solid black", marginLeft: "-0.6px", pointerEvents: "none" }, ".cm-cursor": { display: "none" }, "&dark .cm-cursor": { borderLeftColor: "#ddd" }, ".cm-dropCursor": { position: "absolute" }, "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": { display: "block" }, ".cm-iso": { unicodeBidi: "isolate" }, ".cm-announced": { position: "fixed", top: "-10000px" }, "@media print": { ".cm-announced": { display: "none" } }, "&light .cm-activeLine": { backgroundColor: "#cceeff44" }, "&dark .cm-activeLine": { backgroundColor: "#99eeff33" }, "&light .cm-specialChar": { color: "red" }, "&dark .cm-specialChar": { color: "#f78" }, ".cm-gutters": { flexShrink: 0, display: "flex", height: "100%", boxSizing: "border-box", zIndex: 200 }, ".cm-gutters-before": { insetInlineStart: 0 }, ".cm-gutters-after": { insetInlineEnd: 0 }, "&light .cm-gutters": { backgroundColor: "#f5f5f5", color: "#6c6c6c", border: "0px solid #ddd", "&.cm-gutters-before": { borderRightWidth: "1px" }, "&.cm-gutters-after": { borderLeftWidth: "1px" } }, "&dark .cm-gutters": { backgroundColor: "#333338", color: "#ccc" }, ".cm-gutter": { display: "flex !important", flexDirection: "column", flexShrink: 0, boxSizing: "border-box", minHeight: "100%", overflow: "hidden" }, ".cm-gutterElement": { boxSizing: "border-box" }, ".cm-lineNumbers .cm-gutterElement": { padding: "0 3px 0 5px", minWidth: "20px", textAlign: "right", whiteSpace: "nowrap" }, "&light .cm-activeLineGutter": { backgroundColor: "#e2f2ff" }, "&dark .cm-activeLineGutter": { backgroundColor: "#222227" }, ".cm-panels": { boxSizing: "border-box", position: "sticky", left: 0, right: 0, zIndex: 300 }, "&light .cm-panels": { backgroundColor: "#f5f5f5", color: "black" }, "&light .cm-panels-top": { borderBottom: "1px solid #ddd" }, "&light .cm-panels-bottom": { borderTop: "1px solid #ddd" }, "&dark .cm-panels": { backgroundColor: "#333338", color: "white" }, ".cm-dialog": { padding: "2px 19px 4px 6px", position: "relative", "& label": { fontSize: "80%" } }, ".cm-dialog-close": { position: "absolute", top: "3px", right: "4px", backgroundColor: "inherit", border: "none", font: "inherit", fontSize: "14px", padding: "0" }, ".cm-tab": { display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }, ".cm-widgetBuffer": { verticalAlign: "text-top", height: "1em", width: 0, display: "inline" }, ".cm-placeholder": { color: "#888", display: "inline-block", verticalAlign: "top", userSelect: "none" }, ".cm-highlightSpace": { backgroundImage: "radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)", backgroundPosition: "center" }, ".cm-highlightTab": { backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`, backgroundSize: "auto 100%", backgroundPosition: "right 90%", backgroundRepeat: "no-repeat" }, ".cm-trailingSpace": { backgroundColor: "#ff332255" }, ".cm-button": { verticalAlign: "middle", color: "inherit", fontSize: "70%", padding: ".2em 1em", borderRadius: "1px" }, "&light .cm-button": { backgroundImage: "linear-gradient(#eff1f5, #d9d9df)", border: "1px solid #888", "&:active": { backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)" } }, "&dark .cm-button": { backgroundImage: "linear-gradient(#393939, #111)", border: "1px solid #888", "&:active": { backgroundImage: "linear-gradient(#111, #333)" } }, ".cm-textfield": { verticalAlign: "middle", color: "inherit", fontSize: "70%", border: "1px solid silver", padding: ".2em .5em" }, "&light .cm-textfield": { backgroundColor: "white" }, "&dark .cm-textfield": { border: "1px solid #555", backgroundColor: "inherit" } }, gS), MM = { childList: true, characterData: true, subtree: true, attributes: true, characterDataOldValue: true }, Ih = F.ie && F.ie_version <= 11;
class TM {
  constructor(t) {
    this.view = t, this.active = false, this.editContext = null, this.selectionRange = new oA(), this.selectionChanged = false, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = false, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = t.contentDOM, this.observer = new MutationObserver((e) => {
      for (let n of e) this.queue.push(n);
      (F.ie && F.ie_version <= 11 || F.ios && t.composing) && e.some((n) => n.type == "childList" && n.removedNodes.length || n.type == "characterData" && n.oldValue.length > n.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), window.EditContext && F.android && t.constructor.EDIT_CONTEXT !== false && !(F.chrome && F.chrome_version < 126) && (this.editContext = new OM(t), t.state.facet(yn) && (t.contentDOM.editContext = this.editContext.editContext)), Ih && (this.onCharData = (e) => {
      this.queue.push({ target: e.target, type: "characterData", oldValue: e.prevValue }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), typeof ResizeObserver == "function" && (this.resizeScroll = new ResizeObserver(() => {
      var e;
      ((e = this.view.docView) === null || e === void 0 ? void 0 : e.lastUpdate) < Date.now() - 75 && this.onResize();
    }), this.resizeScroll.observe(t.scrollDOM)), this.addWindowListeners(this.win = t.win), this.start(), typeof IntersectionObserver == "function" && (this.intersection = new IntersectionObserver((e) => {
      this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), e.length > 0 && e[e.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
    }, { threshold: [0, 1e-3] }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((e) => {
      e.length > 0 && e[e.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"));
    }, {})), this.listenForScroll(), this.readSelectionRange();
  }
  onScrollChanged(t) {
    this.view.inputState.runHandlers("scroll", t), this.intersecting && this.view.measure();
  }
  onScroll(t) {
    this.intersecting && this.flush(false), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(t);
  }
  onResize() {
    this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
      this.resizeTimeout = -1, this.view.requestMeasure();
    }, 50));
  }
  onPrint(t) {
    (t.type == "change" || !t.type) && !t.matches || (this.view.viewState.printing = true, this.view.measure(), setTimeout(() => {
      this.view.viewState.printing = false, this.view.requestMeasure();
    }, 500));
  }
  updateGaps(t) {
    if (this.gapIntersection && (t.length != this.gaps.length || this.gaps.some((e, n) => e != t[n]))) {
      this.gapIntersection.disconnect();
      for (let e of t) this.gapIntersection.observe(e);
      this.gaps = t;
    }
  }
  onSelectionChange(t) {
    let e = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey) return;
    let { view: n } = this, r = this.selectionRange;
    if (n.state.facet(yn) ? n.root.activeElement != this.dom : !ku(this.dom, r)) return;
    let a = r.anchorNode && n.docView.nearest(r.anchorNode);
    if (a && a.ignoreEvent(t)) {
      e || (this.selectionChanged = false);
      return;
    }
    (F.ie && F.ie_version <= 11 || F.android && F.chrome) && !n.state.selection.main.empty && r.focusNode && na(r.focusNode, r.focusOffset, r.anchorNode, r.anchorOffset) ? this.flushSoon() : this.flush(false);
  }
  readSelectionRange() {
    let { view: t } = this, e = fa(t.root);
    if (!e) return false;
    let n = F.safari && t.root.nodeType == 11 && t.root.activeElement == this.dom && kM(this.view, e) || e;
    if (!n || this.selectionRange.eq(n)) return false;
    let r = ku(this.dom, n);
    return r && !this.selectionChanged && t.inputState.lastFocusTime > Date.now() - 200 && t.inputState.lastTouchTime < Date.now() - 300 && cA(this.dom, n) ? (this.view.inputState.lastFocusTime = 0, t.docView.updateSelection(), false) : (this.selectionRange.setRange(n), r && (this.selectionChanged = true), true);
  }
  setSelectionRange(t, e) {
    this.selectionRange.set(t.node, t.offset, e.node, e.offset), this.selectionChanged = false;
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let t = 0, e = null;
    for (let n = this.dom; n; ) if (n.nodeType == 1) !e && t < this.scrollTargets.length && this.scrollTargets[t] == n ? t++ : e || (e = this.scrollTargets.slice(0, t)), e && e.push(n), n = n.assignedSlot || n.parentNode;
    else if (n.nodeType == 11) n = n.host;
    else break;
    if (t < this.scrollTargets.length && !e && (e = this.scrollTargets.slice(0, t)), e) {
      for (let n of this.scrollTargets) n.removeEventListener("scroll", this.onScroll);
      for (let n of this.scrollTargets = e) n.addEventListener("scroll", this.onScroll);
    }
  }
  ignore(t) {
    if (!this.active) return t();
    try {
      return this.stop(), t();
    } finally {
      this.start(), this.clear();
    }
  }
  start() {
    this.active || (this.observer.observe(this.dom, MM), Ih && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = true);
  }
  stop() {
    this.active && (this.active = false, this.observer.disconnect(), Ih && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
  }
  clear() {
    this.processRecords(), this.queue.length = 0, this.selectionChanged = false;
  }
  delayAndroidKey(t, e) {
    var n;
    if (!this.delayedAndroidKey) {
      let r = () => {
        let a = this.delayedAndroidKey;
        a && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = a.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && a.force && zs(this.dom, a.key, a.keyCode));
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(r);
    }
    (!this.delayedAndroidKey || t == "Enter") && (this.delayedAndroidKey = { key: t, keyCode: e, force: this.lastChange < Date.now() - 50 || !!(!((n = this.delayedAndroidKey) === null || n === void 0) && n.force) });
  }
  clearDelayedAndroidKey() {
    this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1;
  }
  flushSoon() {
    this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
      this.delayedFlush = -1, this.flush();
    }));
  }
  forceFlush() {
    this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush();
  }
  pendingRecords() {
    for (let t of this.observer.takeRecords()) this.queue.push(t);
    return this.queue;
  }
  processRecords() {
    let t = this.pendingRecords();
    t.length && (this.queue = []);
    let e = -1, n = -1, r = false;
    for (let a of t) {
      let u = this.readMutation(a);
      u && (u.typeOver && (r = true), e == -1 ? { from: e, to: n } = u : (e = Math.min(u.from, e), n = Math.max(u.to, n)));
    }
    return { from: e, to: n, typeOver: r };
  }
  readChange() {
    let { from: t, to: e, typeOver: n } = this.processRecords(), r = this.selectionChanged && ku(this.dom, this.selectionRange);
    if (t < 0 && !r) return null;
    t > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = false;
    let a = new KA(this.view, t, e, n);
    return this.view.docView.domChanged = { newSel: a.newSel ? a.newSel.main : null }, a;
  }
  flush(t = true) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey) return false;
    t && this.readSelectionRange();
    let e = this.readChange();
    if (!e) return this.view.requestMeasure(), false;
    let n = this.view.state, r = iS(this.view, e);
    return this.view.state == n && (e.domChanged || e.newSel && !e.newSel.main.eq(this.view.state.selection.main)) && this.view.update([]), r;
  }
  readMutation(t) {
    let e = this.view.docView.nearest(t.target);
    if (!e || e.ignoreMutation(t)) return null;
    if (e.markDirty(t.type == "attributes"), t.type == "attributes" && (e.flags |= 4), t.type == "childList") {
      let n = K1(e, t.previousSibling || t.target.previousSibling, -1), r = K1(e, t.nextSibling || t.target.nextSibling, 1);
      return { from: n ? e.posAfter(n) : e.posAtStart, to: r ? e.posBefore(r) : e.posAtEnd, typeOver: false };
    } else return t.type == "characterData" ? { from: e.posAtStart, to: e.posAtEnd, typeOver: t.target.nodeValue == t.oldValue } : null;
  }
  setWindow(t) {
    t != this.win && (this.removeWindowListeners(this.win), this.win = t, this.addWindowListeners(this.win));
  }
  addWindowListeners(t) {
    t.addEventListener("resize", this.onResize), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : t.addEventListener("beforeprint", this.onPrint), t.addEventListener("scroll", this.onScroll), t.document.addEventListener("selectionchange", this.onSelectionChange);
  }
  removeWindowListeners(t) {
    t.removeEventListener("scroll", this.onScroll), t.removeEventListener("resize", this.onResize), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : t.removeEventListener("beforeprint", this.onPrint), t.document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  update(t) {
    this.editContext && (this.editContext.update(t), t.startState.facet(yn) != t.state.facet(yn) && (t.view.contentDOM.editContext = t.state.facet(yn) ? this.editContext.editContext : null));
  }
  destroy() {
    var t, e, n;
    this.stop(), (t = this.intersection) === null || t === void 0 || t.disconnect(), (e = this.gapIntersection) === null || e === void 0 || e.disconnect(), (n = this.resizeScroll) === null || n === void 0 || n.disconnect();
    for (let r of this.scrollTargets) r.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy());
  }
}
function K1(l, t, e) {
  for (; t; ) {
    let n = jt.get(t);
    if (n && n.parent == l) return n;
    let r = t.parentNode;
    t = r != l.dom ? r : e > 0 ? t.nextSibling : t.previousSibling;
  }
  return null;
}
function Q1(l, t) {
  let e = t.startContainer, n = t.startOffset, r = t.endContainer, a = t.endOffset, u = l.docView.domAtPos(l.state.selection.main.anchor);
  return na(u.node, u.offset, r, a) && ([e, n, r, a] = [r, a, e, n]), { anchorNode: e, anchorOffset: n, focusNode: r, focusOffset: a };
}
function kM(l, t) {
  if (t.getComposedRanges) {
    let r = t.getComposedRanges(l.root)[0];
    if (r) return Q1(l, r);
  }
  let e = null;
  function n(r) {
    r.preventDefault(), r.stopImmediatePropagation(), e = r.getTargetRanges()[0];
  }
  return l.contentDOM.addEventListener("beforeinput", n, true), l.dom.ownerDocument.execCommand("indent"), l.contentDOM.removeEventListener("beforeinput", n, true), e ? Q1(l, e) : null;
}
class OM {
  constructor(t) {
    this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = /* @__PURE__ */ Object.create(null), this.composing = null, this.resetRange(t.state);
    let e = this.editContext = new window.EditContext({ text: t.state.doc.sliceString(this.from, this.to), selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, t.state.selection.main.anchor))), selectionEnd: this.toContextPos(t.state.selection.main.head) });
    this.handlers.textupdate = (n) => {
      let r = t.state.selection.main, { anchor: a, head: u } = r, f = this.toEditorPos(n.updateRangeStart), h = this.toEditorPos(n.updateRangeEnd);
      t.inputState.composing >= 0 && !this.composing && (this.composing = { contextBase: n.updateRangeStart, editorBase: f, drifted: false });
      let g = h - f > n.text.length;
      f == this.from && a < this.from ? f = a : h == this.to && a > this.to && (h = a);
      let p = nS(t.state.sliceDoc(f, h), n.text, (g ? r.from : r.to) - f, g ? "end" : null);
      if (!p) {
        let v = K.single(this.toEditorPos(n.selectionStart), this.toEditorPos(n.selectionEnd));
        v.main.eq(r) || t.dispatch({ selection: v, userEvent: "select" });
        return;
      }
      let y = { from: p.from + f, to: p.toA + f, insert: Rt.of(n.text.slice(p.from, p.toB).split(`
`)) };
      if ((F.mac || F.android) && y.from == u - 1 && /^\. ?$/.test(n.text) && t.contentDOM.getAttribute("autocorrect") == "off" && (y = { from: f, to: h, insert: Rt.of([n.text.replace(".", " ")]) }), this.pendingContextChange = y, !t.state.readOnly) {
        let v = this.to - this.from + (y.to - y.from + y.insert.length);
        km(t, y, K.single(this.toEditorPos(n.selectionStart, v), this.toEditorPos(n.selectionEnd, v)));
      }
      this.pendingContextChange && (this.revertPending(t.state), this.setSelection(t.state)), y.from < y.to && !y.insert.length && t.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(e.text.slice(Math.max(0, n.updateRangeStart - 1), Math.min(e.text.length, n.updateRangeStart + 1))) && this.handlers.compositionend(n);
    }, this.handlers.characterboundsupdate = (n) => {
      let r = [], a = null;
      for (let u = this.toEditorPos(n.rangeStart), f = this.toEditorPos(n.rangeEnd); u < f; u++) {
        let h = t.coordsForChar(u);
        a = h && new DOMRect(h.left, h.top, h.right - h.left, h.bottom - h.top) || a || new DOMRect(), r.push(a);
      }
      e.updateCharacterBounds(n.rangeStart, r);
    }, this.handlers.textformatupdate = (n) => {
      let r = [];
      for (let a of n.getTextFormats()) {
        let u = a.underlineStyle, f = a.underlineThickness;
        if (!/none/i.test(u) && !/none/i.test(f)) {
          let h = this.toEditorPos(a.rangeStart), g = this.toEditorPos(a.rangeEnd);
          if (h < g) {
            let p = `text-decoration: underline ${/^[a-z]/.test(u) ? u + " " : u == "Dashed" ? "dashed " : u == "Squiggle" ? "wavy " : ""}${/thin/i.test(f) ? 1 : 2}px`;
            r.push(ut.mark({ attributes: { style: p } }).range(h, g));
          }
        }
      }
      t.dispatch({ effects: Zv.of(ut.set(r)) });
    }, this.handlers.compositionstart = () => {
      t.inputState.composing < 0 && (t.inputState.composing = 0, t.inputState.compositionFirstChange = true);
    }, this.handlers.compositionend = () => {
      if (t.inputState.composing = -1, t.inputState.compositionFirstChange = null, this.composing) {
        let { drifted: n } = this.composing;
        this.composing = null, n && this.reset(t.state);
      }
    };
    for (let n in this.handlers) e.addEventListener(n, this.handlers[n]);
    this.measureReq = { read: (n) => {
      this.editContext.updateControlBounds(n.contentDOM.getBoundingClientRect());
      let r = fa(n.root);
      r && r.rangeCount && this.editContext.updateSelectionBounds(r.getRangeAt(0).getBoundingClientRect());
    } };
  }
  applyEdits(t) {
    let e = 0, n = false, r = this.pendingContextChange;
    return t.changes.iterChanges((a, u, f, h, g) => {
      if (n) return;
      let p = g.length - (u - a);
      if (r && u >= r.to) if (r.from == a && r.to == u && r.insert.eq(g)) {
        r = this.pendingContextChange = null, e += p, this.to += p;
        return;
      } else r = null, this.revertPending(t.state);
      if (a += e, u += e, u <= this.from) this.from += p, this.to += p;
      else if (a < this.to) {
        if (a < this.from || u > this.to || this.to - this.from + g.length > 3e4) {
          n = true;
          return;
        }
        this.editContext.updateText(this.toContextPos(a), this.toContextPos(u), g.toString()), this.to += p;
      }
      e += p;
    }), r && !n && this.revertPending(t.state), !n;
  }
  update(t) {
    let e = this.pendingContextChange, n = t.startState.selection.main;
    this.composing && (this.composing.drifted || !t.changes.touchesRange(n.from, n.to) && t.transactions.some((r) => !r.isUserEvent("input.type") && r.changes.touchesRange(this.from, this.to))) ? (this.composing.drifted = true, this.composing.editorBase = t.changes.mapPos(this.composing.editorBase)) : !this.applyEdits(t) || !this.rangeIsValid(t.state) ? (this.pendingContextChange = null, this.reset(t.state)) : (t.docChanged || t.selectionSet || e) && this.setSelection(t.state), (t.geometryChanged || t.docChanged || t.selectionSet) && t.view.requestMeasure(this.measureReq);
  }
  resetRange(t) {
    let { head: e } = t.selection.main;
    this.from = Math.max(0, e - 1e4), this.to = Math.min(t.doc.length, e + 1e4);
  }
  reset(t) {
    this.resetRange(t), this.editContext.updateText(0, this.editContext.text.length, t.doc.sliceString(this.from, this.to)), this.setSelection(t);
  }
  revertPending(t) {
    let e = this.pendingContextChange;
    this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(e.from), this.toContextPos(e.from + e.insert.length), t.doc.sliceString(e.from, e.to));
  }
  setSelection(t) {
    let { main: e } = t.selection, n = this.toContextPos(Math.max(this.from, Math.min(this.to, e.anchor))), r = this.toContextPos(e.head);
    (this.editContext.selectionStart != n || this.editContext.selectionEnd != r) && this.editContext.updateSelection(n, r);
  }
  rangeIsValid(t) {
    let { head: e } = t.selection.main;
    return !(this.from > 0 && e - this.from < 500 || this.to < t.doc.length && this.to - e < 500 || this.to - this.from > 1e4 * 3);
  }
  toEditorPos(t, e = this.to - this.from) {
    t = Math.min(t, e);
    let n = this.composing;
    return n && n.drifted ? n.editorBase + (t - n.contextBase) : t + this.from;
  }
  toContextPos(t) {
    let e = this.composing;
    return e && e.drifted ? e.contextBase + (t - e.editorBase) : t - this.from;
  }
  destroy() {
    for (let t in this.handlers) this.editContext.removeEventListener(t, this.handlers[t]);
  }
}
class P {
  get state() {
    return this.viewState.state;
  }
  get viewport() {
    return this.viewState.viewport;
  }
  get visibleRanges() {
    return this.viewState.visibleRanges;
  }
  get inView() {
    return this.viewState.inView;
  }
  get composing() {
    return !!this.inputState && this.inputState.composing > 0;
  }
  get compositionStarted() {
    return !!this.inputState && this.inputState.composing >= 0;
  }
  get root() {
    return this._root;
  }
  get win() {
    return this.dom.ownerDocument.defaultView || window;
  }
  constructor(t = {}) {
    var e;
    this.plugins = [], this.pluginMap = /* @__PURE__ */ new Map(), this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = false, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), t.parent && t.parent.appendChild(this.dom);
    let { dispatch: n } = t;
    this.dispatchTransactions = t.dispatchTransactions || n && ((r) => r.forEach((a) => n(a, this))) || ((r) => this.update(r)), this.dispatch = this.dispatch.bind(this), this._root = t.root || uA(t.parent) || document, this.viewState = new G1(t.state || Ot.create(t)), t.scrollTo && t.scrollTo.is(nu) && (this.viewState.scrollTarget = t.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(Os).map((r) => new Wh(r));
    for (let r of this.plugins) r.update(this);
    this.observer = new TM(this), this.inputState = new JA(this), this.inputState.ensureHandlers(this.plugins), this.docView = new A1(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), !((e = document.fonts) === null || e === void 0) && e.ready && document.fonts.ready.then(() => this.requestMeasure());
  }
  dispatch(...t) {
    let e = t.length == 1 && t[0] instanceof de ? t : t.length == 1 && Array.isArray(t[0]) ? t[0] : [this.state.update(...t)];
    this.dispatchTransactions(e, this);
  }
  update(t) {
    if (this.updateState != 0) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
    let e = false, n = false, r, a = this.state;
    for (let v of t) {
      if (v.startState != a) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      a = v.state;
    }
    if (this.destroyed) {
      this.viewState.state = a;
      return;
    }
    let u = this.hasFocus, f = 0, h = null;
    t.some((v) => v.annotation(uS)) ? (this.inputState.notifiedFocused = u, f = 1) : u != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = u, h = cS(a, u), h || (f = 1));
    let g = this.observer.delayedAndroidKey, p = null;
    if (g ? (this.observer.clearDelayedAndroidKey(), p = this.observer.readChange(), (p && !this.state.doc.eq(a.doc) || !this.state.selection.eq(a.selection)) && (p = null)) : this.observer.clear(), a.facet(Ot.phrases) != this.state.facet(Ot.phrases)) return this.setState(a);
    r = qu.create(this, a, t), r.flags |= f;
    let y = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let v of t) {
        if (y && (y = y.map(v.changes)), v.scrollIntoView) {
          let { main: S } = v.state.selection;
          y = new Ns(S.empty ? S : K.cursor(S.head, S.head > S.anchor ? -1 : 1));
        }
        for (let S of v.effects) S.is(nu) && (y = S.value.clip(this.state));
      }
      this.viewState.update(r, y), this.bidiCache = Yu.update(this.bidiCache, r.changes), r.empty || (this.updatePlugins(r), this.inputState.update(r)), e = this.docView.update(r), this.state.facet(Jr) != this.styleModules && this.mountStyles(), n = this.updateAttrs(), this.showAnnouncements(t), this.docView.updateSelection(e, t.some((v) => v.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (r.startState.facet(uu) != r.state.facet(uu) && (this.viewState.mustMeasureContent = true), (e || n || y || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), e && this.docViewUpdate(), !r.empty) for (let v of this.state.facet(Qd)) try {
      v(r);
    } catch (S) {
      We(this.state, S, "update listener");
    }
    (h || p) && Promise.resolve().then(() => {
      h && this.state == h.startState && this.dispatch(h), p && !iS(this, p) && g.force && zs(this.contentDOM, g.key, g.keyCode);
    });
  }
  setState(t) {
    if (this.updateState != 0) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
    if (this.destroyed) {
      this.viewState.state = t;
      return;
    }
    this.updateState = 2;
    let e = this.hasFocus;
    try {
      for (let n of this.plugins) n.destroy(this);
      this.viewState = new G1(t), this.plugins = t.facet(Os).map((n) => new Wh(n)), this.pluginMap.clear();
      for (let n of this.plugins) n.update(this);
      this.docView.destroy(), this.docView = new A1(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    e && this.focus(), this.requestMeasure();
  }
  updatePlugins(t) {
    let e = t.startState.facet(Os), n = t.state.facet(Os);
    if (e != n) {
      let r = [];
      for (let a of n) {
        let u = e.indexOf(a);
        if (u < 0) r.push(new Wh(a));
        else {
          let f = this.plugins[u];
          f.mustUpdate = t, r.push(f);
        }
      }
      for (let a of this.plugins) a.mustUpdate != t && a.destroy(this);
      this.plugins = r, this.pluginMap.clear();
    } else for (let r of this.plugins) r.mustUpdate = t;
    for (let r = 0; r < this.plugins.length; r++) this.plugins[r].update(this);
    e != n && this.inputState.ensureHandlers(this.plugins);
  }
  docViewUpdate() {
    for (let t of this.plugins) {
      let e = t.value;
      if (e && e.docViewUpdate) try {
        e.docViewUpdate(this);
      } catch (n) {
        We(this.state, n, "doc view update listener");
      }
    }
  }
  measure(t = true) {
    if (this.destroyed) return;
    if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) {
      this.measureScheduled = -1, this.requestMeasure();
      return;
    }
    this.measureScheduled = 0, t && this.observer.forceFlush();
    let e = null, n = this.scrollDOM, r = n.scrollTop * this.scaleY, { scrollAnchorPos: a, scrollAnchorHeight: u } = this.viewState;
    Math.abs(r - this.viewState.scrollTop) > 1 && (u = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let f = 0; ; f++) {
        if (u < 0) if (Cv(n)) a = -1, u = this.viewState.heightMap.height;
        else {
          let S = this.viewState.scrollAnchorAt(r);
          a = S.from, u = S.top;
        }
        this.updateState = 1;
        let h = this.viewState.measure(this);
        if (!h && !this.measureRequests.length && this.viewState.scrollTarget == null) break;
        if (f > 5) {
          console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
          break;
        }
        let g = [];
        h & 4 || ([this.measureRequests, g] = [g, this.measureRequests]);
        let p = g.map((S) => {
          try {
            return S.read(this);
          } catch (w) {
            return We(this.state, w), Z1;
          }
        }), y = qu.create(this, this.state, []), v = false;
        y.flags |= h, e ? e.flags |= h : e = y, this.updateState = 2, y.empty || (this.updatePlugins(y), this.inputState.update(y), this.updateAttrs(), v = this.docView.update(y), v && this.docViewUpdate());
        for (let S = 0; S < g.length; S++) if (p[S] != Z1) try {
          let w = g[S];
          w.write && w.write(p[S], this);
        } catch (w) {
          We(this.state, w);
        }
        if (v && this.docView.updateSelection(true), !y.viewportChanged && this.measureRequests.length == 0) {
          if (this.viewState.editorHeight) if (this.viewState.scrollTarget) {
            this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, u = -1;
            continue;
          } else {
            let w = (a < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(a).top) - u;
            if (w > 1 || w < -1) {
              r = r + w, n.scrollTop = r / this.scaleY, u = -1;
              continue;
            }
          }
          break;
        }
      }
    } finally {
      this.updateState = 0, this.measureScheduled = -1;
    }
    if (e && !e.empty) for (let f of this.state.facet(Qd)) f(e);
  }
  get themeClasses() {
    return Pd + " " + (this.state.facet(Fd) ? mS : dS) + " " + this.state.facet(uu);
  }
  updateAttrs() {
    let t = W1(this, Wv, { class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses }), e = { spellcheck: "false", autocorrect: "off", autocapitalize: "off", writingsuggestions: "false", translate: "no", contenteditable: this.state.facet(yn) ? "true" : "false", class: "cm-content", style: `${F.tabSize}: ${this.state.tabSize}`, role: "textbox", "aria-multiline": "true" };
    this.state.readOnly && (e["aria-readonly"] = "true"), W1(this, Mm, e);
    let n = this.observer.ignore(() => {
      let r = jd(this.contentDOM, this.contentAttrs, e), a = jd(this.dom, this.editorAttrs, t);
      return r || a;
    });
    return this.editorAttrs = t, this.contentAttrs = e, n;
  }
  showAnnouncements(t) {
    let e = true;
    for (let n of t) for (let r of n.effects) if (r.is(P.announce)) {
      e && (this.announceDOM.textContent = ""), e = false;
      let a = this.announceDOM.appendChild(document.createElement("div"));
      a.textContent = r.value;
    }
  }
  mountStyles() {
    this.styleModules = this.state.facet(Jr);
    let t = this.state.facet(P.cspNonce);
    il.mount(this.root, this.styleModules.concat(AM).reverse(), t ? { nonce: t } : void 0);
  }
  readMeasured() {
    if (this.updateState == 2) throw new Error("Reading the editor layout isn't allowed during an update");
    this.updateState == 0 && this.measureScheduled > -1 && this.measure(false);
  }
  requestMeasure(t) {
    if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), t) {
      if (this.measureRequests.indexOf(t) > -1) return;
      if (t.key != null) {
        for (let e = 0; e < this.measureRequests.length; e++) if (this.measureRequests[e].key === t.key) {
          this.measureRequests[e] = t;
          return;
        }
      }
      this.measureRequests.push(t);
    }
  }
  plugin(t) {
    let e = this.pluginMap.get(t);
    return (e === void 0 || e && e.plugin != t) && this.pluginMap.set(t, e = this.plugins.find((n) => n.plugin == t) || null), e && e.update(this).value;
  }
  get documentTop() {
    return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
  }
  get documentPadding() {
    return { top: this.viewState.paddingTop, bottom: this.viewState.paddingBottom };
  }
  get scaleX() {
    return this.viewState.scaleX;
  }
  get scaleY() {
    return this.viewState.scaleY;
  }
  elementAtHeight(t) {
    return this.readMeasured(), this.viewState.elementAtHeight(t);
  }
  lineBlockAtHeight(t) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(t);
  }
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  lineBlockAt(t) {
    return this.viewState.lineBlockAt(t);
  }
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  moveByChar(t, e, n) {
    return Fh(this, t, D1(this, t, e, n));
  }
  moveByGroup(t, e) {
    return Fh(this, t, D1(this, t, e, (n) => qA(this, t.head, n)));
  }
  visualLineSide(t, e) {
    let n = this.bidiSpans(t), r = this.textDirectionAt(t.from), a = n[e ? n.length - 1 : 0];
    return K.cursor(a.side(e, r) + t.from, a.forward(!e, r) ? 1 : -1);
  }
  moveToLineBoundary(t, e, n = true) {
    return VA(this, t, e, n);
  }
  moveVertically(t, e, n) {
    return Fh(this, t, jA(this, t, e, n));
  }
  domAtPos(t) {
    return this.docView.domAtPos(t);
  }
  posAtDOM(t, e = 0) {
    return this.docView.posFromDOM(t, e);
  }
  posAtCoords(t, e = true) {
    return this.readMeasured(), $v(this, t, e);
  }
  coordsAtPos(t, e = 1) {
    this.readMeasured();
    let n = this.docView.coordsAt(t, e);
    if (!n || n.left == n.right) return n;
    let r = this.state.doc.lineAt(t), a = this.bidiSpans(r), u = a[$n.find(a, t - r.from, -1, e)];
    return Aa(n, u.dir == Wt.LTR == e > 0);
  }
  coordsForChar(t) {
    return this.readMeasured(), this.docView.coordsForChar(t);
  }
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth;
  }
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight;
  }
  get textDirection() {
    return this.viewState.defaultTextDirection;
  }
  textDirectionAt(t) {
    return !this.state.facet(Xv) || t < this.viewport.from || t > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(t));
  }
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  bidiSpans(t) {
    if (t.length > DM) return Lv(t.length);
    let e = this.textDirectionAt(t.from), n;
    for (let a of this.bidiCache) if (a.from == t.from && a.dir == e && (a.fresh || _v(a.isolates, n = C1(this, t)))) return a.order;
    n || (n = C1(this, t));
    let r = CA(t.text, e, n);
    return this.bidiCache.push(new Yu(t.from, t.to, e, n, true, r)), r;
  }
  get hasFocus() {
    var t;
    return (this.dom.ownerDocument.hasFocus() || F.safari && ((t = this.inputState) === null || t === void 0 ? void 0 : t.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  focus() {
    this.observer.ignore(() => {
      xv(this.contentDOM), this.docView.updateSelection();
    });
  }
  setRoot(t) {
    this._root != t && (this._root = t, this.observer.setWindow((t.nodeType == 9 ? t : t.ownerDocument).defaultView || window), this.mountStyles());
  }
  destroy() {
    this.root.activeElement == this.contentDOM && this.contentDOM.blur();
    for (let t of this.plugins) t.destroy(this);
    this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = true;
  }
  static scrollIntoView(t, e = {}) {
    return nu.of(new Ns(typeof t == "number" ? K.cursor(t) : t, e.y, e.x, e.yMargin, e.xMargin));
  }
  scrollSnapshot() {
    let { scrollTop: t, scrollLeft: e } = this.scrollDOM, n = this.viewState.scrollAnchorAt(t);
    return nu.of(new Ns(K.cursor(n.from), "start", "start", n.top - t, e, true));
  }
  setTabFocusMode(t) {
    t == null ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : typeof t == "boolean" ? this.inputState.tabFocusMode = t ? 0 : -1 : this.inputState.tabFocusMode != 0 && (this.inputState.tabFocusMode = Date.now() + t);
  }
  static domEventHandlers(t) {
    return ee.define(() => ({}), { eventHandlers: t });
  }
  static domEventObservers(t) {
    return ee.define(() => ({}), { eventObservers: t });
  }
  static theme(t, e) {
    let n = il.newName(), r = [uu.of(n), Jr.of(Id(`.${n}`, t))];
    return e && e.dark && r.push(Fd.of(true)), r;
  }
  static baseTheme(t) {
    return jl.lowest(Jr.of(Id("." + Pd, t, gS)));
  }
  static findFromDOM(t) {
    var e;
    let n = t.querySelector(".cm-content"), r = n && jt.get(n) || jt.get(t);
    return ((e = r == null ? void 0 : r.rootView) === null || e === void 0 ? void 0 : e.view) || null;
  }
}
P.styleModule = Jr;
P.inputHandler = Yv;
P.clipboardInputFilter = Cm;
P.clipboardOutputFilter = Am;
P.scrollHandler = Qv;
P.focusChangeEffect = Gv;
P.perLineTextDirection = Xv;
P.exceptionSink = jv;
P.updateListener = Qd;
P.editable = yn;
P.mouseSelectionStyle = qv;
P.dragMovesSelection = Vv;
P.clickAddsSelectionRange = Uv;
P.decorations = ha;
P.outerDecorations = Jv;
P.atomicRanges = ka;
P.bidiIsolatedRanges = Fv;
P.scrollMargins = Pv;
P.darkTheme = Fd;
P.cspNonce = et.define({ combine: (l) => l.length ? l[0] : "" });
P.contentAttributes = Mm;
P.editorAttributes = Wv;
P.lineWrapping = P.contentAttributes.of({ class: "cm-lineWrapping" });
P.announce = St.define();
const DM = 4096, Z1 = {};
class Yu {
  constructor(t, e, n, r, a, u) {
    this.from = t, this.to = e, this.dir = n, this.isolates = r, this.fresh = a, this.order = u;
  }
  static update(t, e) {
    if (e.empty && !t.some((a) => a.fresh)) return t;
    let n = [], r = t.length ? t[t.length - 1].dir : Wt.LTR;
    for (let a = Math.max(0, t.length - 10); a < t.length; a++) {
      let u = t[a];
      u.dir == r && !e.touchesRange(u.from, u.to) && n.push(new Yu(e.mapPos(u.from, 1), e.mapPos(u.to, -1), u.dir, u.isolates, false, u.order));
    }
    return n;
  }
}
function W1(l, t, e) {
  for (let n = l.state.facet(t), r = n.length - 1; r >= 0; r--) {
    let a = n[r], u = typeof a == "function" ? a(l) : a;
    u && qd(u, e);
  }
  return e;
}
const EM = F.mac ? "mac" : F.windows ? "win" : F.linux ? "linux" : "key";
function BM(l, t) {
  const e = l.split(/-(?!$)/);
  let n = e[e.length - 1];
  n == "Space" && (n = " ");
  let r, a, u, f;
  for (let h = 0; h < e.length - 1; ++h) {
    const g = e[h];
    if (/^(cmd|meta|m)$/i.test(g)) f = true;
    else if (/^a(lt)?$/i.test(g)) r = true;
    else if (/^(c|ctrl|control)$/i.test(g)) a = true;
    else if (/^s(hift)?$/i.test(g)) u = true;
    else if (/^mod$/i.test(g)) t == "mac" ? f = true : a = true;
    else throw new Error("Unrecognized modifier name: " + g);
  }
  return r && (n = "Alt-" + n), a && (n = "Ctrl-" + n), f && (n = "Meta-" + n), u && (n = "Shift-" + n), n;
}
function cu(l, t, e) {
  return t.altKey && (l = "Alt-" + l), t.ctrlKey && (l = "Ctrl-" + l), t.metaKey && (l = "Meta-" + l), e !== false && t.shiftKey && (l = "Shift-" + l), l;
}
const RM = jl.default(P.domEventHandlers({ keydown(l, t) {
  return yS(pS(t.state), l, t, "editor");
} })), ac = et.define({ enables: RM }), J1 = /* @__PURE__ */ new WeakMap();
function pS(l) {
  let t = l.facet(ac), e = J1.get(t);
  return e || J1.set(t, e = _M(t.reduce((n, r) => n.concat(r), []))), e;
}
function zM(l, t, e) {
  return yS(pS(l.state), t, l, e);
}
let Pn = null;
const NM = 4e3;
function _M(l, t = EM) {
  let e = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null), r = (u, f) => {
    let h = n[u];
    if (h == null) n[u] = f;
    else if (h != f) throw new Error("Key binding " + u + " is used both as a regular binding and as a multi-stroke prefix");
  }, a = (u, f, h, g, p) => {
    var y, v;
    let S = e[u] || (e[u] = /* @__PURE__ */ Object.create(null)), w = f.split(/ (?!$)/).map((O) => BM(O, t));
    for (let O = 1; O < w.length; O++) {
      let j = w.slice(0, O).join(" ");
      r(j, true), S[j] || (S[j] = { preventDefault: true, stopPropagation: false, run: [(L) => {
        let Q = Pn = { view: L, prefix: j, scope: u };
        return setTimeout(() => {
          Pn == Q && (Pn = null);
        }, NM), true;
      }] });
    }
    let C = w.join(" ");
    r(C, false);
    let T = S[C] || (S[C] = { preventDefault: false, stopPropagation: false, run: ((v = (y = S._any) === null || y === void 0 ? void 0 : y.run) === null || v === void 0 ? void 0 : v.slice()) || [] });
    h && T.run.push(h), g && (T.preventDefault = true), p && (T.stopPropagation = true);
  };
  for (let u of l) {
    let f = u.scope ? u.scope.split(" ") : ["editor"];
    if (u.any) for (let g of f) {
      let p = e[g] || (e[g] = /* @__PURE__ */ Object.create(null));
      p._any || (p._any = { preventDefault: false, stopPropagation: false, run: [] });
      let { any: y } = u;
      for (let v in p) p[v].run.push((S) => y(S, $d));
    }
    let h = u[t] || u.key;
    if (h) for (let g of f) a(g, h, u.run, u.preventDefault, u.stopPropagation), u.shift && a(g, "Shift-" + h, u.shift, u.preventDefault, u.stopPropagation);
  }
  return e;
}
let $d = null;
function yS(l, t, e, n) {
  $d = t;
  let r = nA(t), a = Qe(r, 0), u = Gi(a) == r.length && r != " ", f = "", h = false, g = false, p = false;
  Pn && Pn.view == e && Pn.scope == n && (f = Pn.prefix + " ", sS.indexOf(t.keyCode) < 0 && (g = true, Pn = null));
  let y = /* @__PURE__ */ new Set(), v = (T) => {
    if (T) {
      for (let O of T.run) if (!y.has(O) && (y.add(O), O(e))) return T.stopPropagation && (p = true), true;
      T.preventDefault && (T.stopPropagation && (p = true), g = true);
    }
    return false;
  }, S = l[n], w, C;
  return S && (v(S[f + cu(r, t, !u)]) ? h = true : u && (t.altKey || t.metaKey || t.ctrlKey) && !(F.windows && t.ctrlKey && t.altKey) && !(F.mac && t.altKey && !(t.ctrlKey || t.metaKey)) && (w = nl[t.keyCode]) && w != r ? (v(S[f + cu(w, t, true)]) || t.shiftKey && (C = ca[t.keyCode]) != r && C != w && v(S[f + cu(C, t, false)])) && (h = true) : u && t.shiftKey && v(S[f + cu(r, t, true)]) && (h = true), !h && v(S._any) && (h = true)), g && (h = true), h && p && t.stopPropagation(), $d = null, h;
}
class Oa {
  constructor(t, e, n, r, a) {
    this.className = t, this.left = e, this.top = n, this.width = r, this.height = a;
  }
  draw() {
    let t = document.createElement("div");
    return t.className = this.className, this.adjust(t), t;
  }
  update(t, e) {
    return e.className != this.className ? false : (this.adjust(t), true);
  }
  adjust(t) {
    t.style.left = this.left + "px", t.style.top = this.top + "px", this.width != null && (t.style.width = this.width + "px"), t.style.height = this.height + "px";
  }
  eq(t) {
    return this.left == t.left && this.top == t.top && this.width == t.width && this.height == t.height && this.className == t.className;
  }
  static forRange(t, e, n) {
    if (n.empty) {
      let r = t.coordsAtPos(n.head, n.assoc || 1);
      if (!r) return [];
      let a = bS(t);
      return [new Oa(e, r.left - a.left, r.top - a.top, null, r.bottom - r.top)];
    } else return LM(t, e, n);
  }
}
function bS(l) {
  let t = l.scrollDOM.getBoundingClientRect();
  return { left: (l.textDirection == Wt.LTR ? t.left : t.right - l.scrollDOM.clientWidth * l.scaleX) - l.scrollDOM.scrollLeft * l.scaleX, top: t.top - l.scrollDOM.scrollTop * l.scaleY };
}
function F1(l, t, e, n) {
  let r = l.coordsAtPos(t, e * 2);
  if (!r) return n;
  let a = l.dom.getBoundingClientRect(), u = (r.top + r.bottom) / 2, f = l.posAtCoords({ x: a.left + 1, y: u }), h = l.posAtCoords({ x: a.right - 1, y: u });
  return f == null || h == null ? n : { from: Math.max(n.from, Math.min(f, h)), to: Math.min(n.to, Math.max(f, h)) };
}
function LM(l, t, e) {
  if (e.to <= l.viewport.from || e.from >= l.viewport.to) return [];
  let n = Math.max(e.from, l.viewport.from), r = Math.min(e.to, l.viewport.to), a = l.textDirection == Wt.LTR, u = l.contentDOM, f = u.getBoundingClientRect(), h = bS(l), g = u.querySelector(".cm-line"), p = g && window.getComputedStyle(g), y = f.left + (p ? parseInt(p.paddingLeft) + Math.min(0, parseInt(p.textIndent)) : 0), v = f.right - (p ? parseInt(p.paddingRight) : 0), S = Wd(l, n, 1), w = Wd(l, r, -1), C = S.type == He.Text ? S : null, T = w.type == He.Text ? w : null;
  if (C && (l.lineWrapping || S.widgetLineBreaks) && (C = F1(l, n, 1, C)), T && (l.lineWrapping || w.widgetLineBreaks) && (T = F1(l, r, -1, T)), C && T && C.from == T.from && C.to == T.to) return j(L(e.from, e.to, C));
  {
    let _ = C ? L(e.from, null, C) : Q(S, false), G = T ? L(null, e.to, T) : Q(w, true), V = [];
    return (C || S).to < (T || w).from - (C && T ? 1 : 0) || S.widgetLineBreaks > 1 && _.bottom + l.defaultLineHeight / 2 < G.top ? V.push(O(y, _.bottom, v, G.top)) : _.bottom < G.top && l.elementAtHeight((_.bottom + G.top) / 2).type == He.Text && (_.bottom = G.top = (_.bottom + G.top) / 2), j(_).concat(V).concat(j(G));
  }
  function O(_, G, V, lt) {
    return new Oa(t, _ - h.left, G - h.top, V - _, lt - G);
  }
  function j({ top: _, bottom: G, horizontal: V }) {
    let lt = [];
    for (let tt = 0; tt < V.length; tt += 2) lt.push(O(V[tt], _, V[tt + 1], G));
    return lt;
  }
  function L(_, G, V) {
    let lt = 1e9, tt = -1e9, pt = [];
    function at(ht, yt, z, Z, it) {
      let rt = l.coordsAtPos(ht, ht == V.to ? -2 : 2), mt = l.coordsAtPos(z, z == V.from ? 2 : -2);
      !rt || !mt || (lt = Math.min(rt.top, mt.top, lt), tt = Math.max(rt.bottom, mt.bottom, tt), it == Wt.LTR ? pt.push(a && yt ? y : rt.left, a && Z ? v : mt.right) : pt.push(!a && Z ? y : mt.left, !a && yt ? v : rt.right));
    }
    let I = _ ?? V.from, ft = G ?? V.to;
    for (let ht of l.visibleRanges) if (ht.to > I && ht.from < ft) for (let yt = Math.max(ht.from, I), z = Math.min(ht.to, ft); ; ) {
      let Z = l.state.doc.lineAt(yt);
      for (let it of l.bidiSpans(Z)) {
        let rt = it.from + Z.from, mt = it.to + Z.from;
        if (rt >= z) break;
        mt > yt && at(Math.max(rt, yt), _ == null && rt <= I, Math.min(mt, z), G == null && mt >= ft, it.dir);
      }
      if (yt = Z.to + 1, yt >= z) break;
    }
    return pt.length == 0 && at(I, _ == null, ft, G == null, l.textDirection), { top: lt, bottom: tt, horizontal: pt };
  }
  function Q(_, G) {
    let V = f.top + (G ? _.top : _.bottom);
    return { top: V, bottom: V, horizontal: [] };
  }
}
function HM(l, t) {
  return l.constructor == t.constructor && l.eq(t);
}
class UM {
  constructor(t, e) {
    this.view = t, this.layer = e, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = { read: this.measure.bind(this), write: this.draw.bind(this) }, this.dom = t.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), e.above && this.dom.classList.add("cm-layer-above"), e.class && this.dom.classList.add(e.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(t.state), t.requestMeasure(this.measureReq), e.mount && e.mount(this.dom, t);
  }
  update(t) {
    t.startState.facet(Eu) != t.state.facet(Eu) && this.setOrder(t.state), (this.layer.update(t, this.dom) || t.geometryChanged) && (this.scale(), t.view.requestMeasure(this.measureReq));
  }
  docViewUpdate(t) {
    this.layer.updateOnDocViewUpdate !== false && t.requestMeasure(this.measureReq);
  }
  setOrder(t) {
    let e = 0, n = t.facet(Eu);
    for (; e < n.length && n[e] != this.layer; ) e++;
    this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - e);
  }
  measure() {
    return this.layer.markers(this.view);
  }
  scale() {
    let { scaleX: t, scaleY: e } = this.view;
    (t != this.scaleX || e != this.scaleY) && (this.scaleX = t, this.scaleY = e, this.dom.style.transform = `scale(${1 / t}, ${1 / e})`);
  }
  draw(t) {
    if (t.length != this.drawn.length || t.some((e, n) => !HM(e, this.drawn[n]))) {
      let e = this.dom.firstChild, n = 0;
      for (let r of t) r.update && e && r.constructor && this.drawn[n].constructor && r.update(e, this.drawn[n]) ? (e = e.nextSibling, n++) : this.dom.insertBefore(r.draw(), e);
      for (; e; ) {
        let r = e.nextSibling;
        e.remove(), e = r;
      }
      this.drawn = t, F.safari && F.safari_version >= 26 && (this.dom.style.display = this.dom.firstChild ? "" : "none");
    }
  }
  destroy() {
    this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove();
  }
}
const Eu = et.define();
function vS(l) {
  return [ee.define((t) => new UM(t, l)), Eu.of(l)];
}
const da = et.define({ combine(l) {
  return Pi(l, { cursorBlinkRate: 1200, drawRangeCursor: true }, { cursorBlinkRate: (t, e) => Math.min(t, e), drawRangeCursor: (t, e) => t || e });
} });
function VM(l = {}) {
  return [da.of(l), qM, jM, YM, Kv.of(true)];
}
function SS(l) {
  return l.startState.facet(da) != l.state.facet(da);
}
const qM = vS({ above: true, markers(l) {
  let { state: t } = l, e = t.facet(da), n = [];
  for (let r of t.selection.ranges) {
    let a = r == t.selection.main;
    if (r.empty || e.drawRangeCursor) {
      let u = a ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary", f = r.empty ? r : K.cursor(r.head, r.head > r.anchor ? -1 : 1);
      for (let h of Oa.forRange(l, u, f)) n.push(h);
    }
  }
  return n;
}, update(l, t) {
  l.transactions.some((n) => n.selection) && (t.style.animationName = t.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
  let e = SS(l);
  return e && P1(l.state, t), l.docChanged || l.selectionSet || e;
}, mount(l, t) {
  P1(t.state, l);
}, class: "cm-cursorLayer" });
function P1(l, t) {
  t.style.animationDuration = l.facet(da).cursorBlinkRate + "ms";
}
const jM = vS({ above: false, markers(l) {
  return l.state.selection.ranges.map((t) => t.empty ? [] : Oa.forRange(l, "cm-selectionBackground", t)).reduce((t, e) => t.concat(e));
}, update(l, t) {
  return l.docChanged || l.selectionSet || l.viewportChanged || SS(l);
}, class: "cm-selectionLayer" }), YM = jl.highest(P.theme({ ".cm-line": { "& ::selection, &::selection": { backgroundColor: "transparent !important" }, caretColor: "transparent !important" }, ".cm-content": { caretColor: "transparent !important", "& :focus": { caretColor: "initial !important", "&::selection, & ::selection": { backgroundColor: "Highlight !important" } } } })), xS = St.define({ map(l, t) {
  return l == null ? null : t.mapPos(l);
} }), Ir = Te.define({ create() {
  return null;
}, update(l, t) {
  return l != null && (l = t.changes.mapPos(l)), t.effects.reduce((e, n) => n.is(xS) ? n.value : e, l);
} }), GM = ee.fromClass(class {
  constructor(l) {
    this.view = l, this.cursor = null, this.measureReq = { read: this.readPos.bind(this), write: this.drawCursor.bind(this) };
  }
  update(l) {
    var t;
    let e = l.state.field(Ir);
    e == null ? this.cursor != null && ((t = this.cursor) === null || t === void 0 || t.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (l.startState.field(Ir) != e || l.docChanged || l.geometryChanged) && this.view.requestMeasure(this.measureReq));
  }
  readPos() {
    let { view: l } = this, t = l.state.field(Ir), e = t != null && l.coordsAtPos(t);
    if (!e) return null;
    let n = l.scrollDOM.getBoundingClientRect();
    return { left: e.left - n.left + l.scrollDOM.scrollLeft * l.scaleX, top: e.top - n.top + l.scrollDOM.scrollTop * l.scaleY, height: e.bottom - e.top };
  }
  drawCursor(l) {
    if (this.cursor) {
      let { scaleX: t, scaleY: e } = this.view;
      l ? (this.cursor.style.left = l.left / t + "px", this.cursor.style.top = l.top / e + "px", this.cursor.style.height = l.height / e + "px") : this.cursor.style.left = "-100000px";
    }
  }
  destroy() {
    this.cursor && this.cursor.remove();
  }
  setDropPos(l) {
    this.view.state.field(Ir) != l && this.view.dispatch({ effects: xS.of(l) });
  }
}, { eventObservers: { dragover(l) {
  this.setDropPos(this.view.posAtCoords({ x: l.clientX, y: l.clientY }));
}, dragleave(l) {
  (l.target == this.view.contentDOM || !this.view.contentDOM.contains(l.relatedTarget)) && this.setDropPos(null);
}, dragend() {
  this.setDropPos(null);
}, drop() {
  this.setDropPos(null);
} } });
function XM() {
  return [Ir, GM];
}
function I1(l, t, e, n, r) {
  t.lastIndex = 0;
  for (let a = l.iterRange(e, n), u = e, f; !a.next().done; u += a.value.length) if (!a.lineBreak) for (; f = t.exec(a.value); ) r(u + f.index, f);
}
function KM(l, t) {
  let e = l.visibleRanges;
  if (e.length == 1 && e[0].from == l.viewport.from && e[0].to == l.viewport.to) return e;
  let n = [];
  for (let { from: r, to: a } of e) r = Math.max(l.state.doc.lineAt(r).from, r - t), a = Math.min(l.state.doc.lineAt(a).to, a + t), n.length && n[n.length - 1].to >= r ? n[n.length - 1].to = a : n.push({ from: r, to: a });
  return n;
}
class QM {
  constructor(t) {
    const { regexp: e, decoration: n, decorate: r, boundary: a, maxLength: u = 1e3 } = t;
    if (!e.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
    if (this.regexp = e, r) this.addMatch = (f, h, g, p) => r(p, g, g + f[0].length, f, h);
    else if (typeof n == "function") this.addMatch = (f, h, g, p) => {
      let y = n(f, h, g);
      y && p(g, g + f[0].length, y);
    };
    else if (n) this.addMatch = (f, h, g, p) => p(g, g + f[0].length, n);
    else throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
    this.boundary = a, this.maxLength = u;
  }
  createDeco(t) {
    let e = new Sn(), n = e.add.bind(e);
    for (let { from: r, to: a } of KM(t, this.maxLength)) I1(t.state.doc, this.regexp, r, a, (u, f) => this.addMatch(f, t, u, n));
    return e.finish();
  }
  updateDeco(t, e) {
    let n = 1e9, r = -1;
    return t.docChanged && t.changes.iterChanges((a, u, f, h) => {
      h >= t.view.viewport.from && f <= t.view.viewport.to && (n = Math.min(f, n), r = Math.max(h, r));
    }), t.viewportMoved || r - n > 1e3 ? this.createDeco(t.view) : r > -1 ? this.updateRange(t.view, e.map(t.changes), n, r) : e;
  }
  updateRange(t, e, n, r) {
    for (let a of t.visibleRanges) {
      let u = Math.max(a.from, n), f = Math.min(a.to, r);
      if (f >= u) {
        let h = t.state.doc.lineAt(u), g = h.to < f ? t.state.doc.lineAt(f) : h, p = Math.max(a.from, h.from), y = Math.min(a.to, g.to);
        if (this.boundary) {
          for (; u > h.from; u--) if (this.boundary.test(h.text[u - 1 - h.from])) {
            p = u;
            break;
          }
          for (; f < g.to; f++) if (this.boundary.test(g.text[f - g.from])) {
            y = f;
            break;
          }
        }
        let v = [], S, w = (C, T, O) => v.push(O.range(C, T));
        if (h == g) for (this.regexp.lastIndex = p - h.from; (S = this.regexp.exec(h.text)) && S.index < y - h.from; ) this.addMatch(S, t, S.index + h.from, w);
        else I1(t.state.doc, this.regexp, p, y, (C, T) => this.addMatch(T, t, C, w));
        e = e.update({ filterFrom: p, filterTo: y, filter: (C, T) => C < p || T > y, add: v });
      }
    }
    return e;
  }
}
const tm = /x/.unicode != null ? "gu" : "g", ZM = new RegExp(`[\0-\b
-\x7F-\x9F\xAD\u061C\u200B\u200E\u200F\u2028\u2029\u202D\u202E\u2066\u2067\u2069\uFEFF\uFFF9-\uFFFC]`, tm), WM = { 0: "null", 7: "bell", 8: "backspace", 10: "newline", 11: "vertical tab", 13: "carriage return", 27: "escape", 8203: "zero width space", 8204: "zero width non-joiner", 8205: "zero width joiner", 8206: "left-to-right mark", 8207: "right-to-left mark", 8232: "line separator", 8237: "left-to-right override", 8238: "right-to-left override", 8294: "left-to-right isolate", 8295: "right-to-left isolate", 8297: "pop directional isolate", 8233: "paragraph separator", 65279: "zero width no-break space", 65532: "object replacement" };
let $h = null;
function JM() {
  var l;
  if ($h == null && typeof document < "u" && document.body) {
    let t = document.body.style;
    $h = ((l = t.tabSize) !== null && l !== void 0 ? l : t.MozTabSize) != null;
  }
  return $h || false;
}
const Bu = et.define({ combine(l) {
  let t = Pi(l, { render: null, specialChars: ZM, addSpecialChars: null });
  return (t.replaceTabs = !JM()) && (t.specialChars = new RegExp("	|" + t.specialChars.source, tm)), t.addSpecialChars && (t.specialChars = new RegExp(t.specialChars.source + "|" + t.addSpecialChars.source, tm)), t;
} });
function FM(l = {}) {
  return [Bu.of(l), PM()];
}
let $1 = null;
function PM() {
  return $1 || ($1 = ee.fromClass(class {
    constructor(l) {
      this.view = l, this.decorations = ut.none, this.decorationCache = /* @__PURE__ */ Object.create(null), this.decorator = this.makeDecorator(l.state.facet(Bu)), this.decorations = this.decorator.createDeco(l);
    }
    makeDecorator(l) {
      return new QM({ regexp: l.specialChars, decoration: (t, e, n) => {
        let { doc: r } = e.state, a = Qe(t[0], 0);
        if (a == 9) {
          let u = r.lineAt(n), f = e.state.tabSize, h = Qs(u.text, f, n - u.from);
          return ut.replace({ widget: new eT((f - h % f) * this.view.defaultCharacterWidth / this.view.scaleX) });
        }
        return this.decorationCache[a] || (this.decorationCache[a] = ut.replace({ widget: new tT(l, a) }));
      }, boundary: l.replaceTabs ? void 0 : /[^]/ });
    }
    update(l) {
      let t = l.state.facet(Bu);
      l.startState.facet(Bu) != t ? (this.decorator = this.makeDecorator(t), this.decorations = this.decorator.createDeco(l.view)) : this.decorations = this.decorator.updateDeco(l, this.decorations);
    }
  }, { decorations: (l) => l.decorations }));
}
const IM = "\u2022";
function $M(l) {
  return l >= 32 ? IM : l == 10 ? "\u2424" : String.fromCharCode(9216 + l);
}
class tT extends Cn {
  constructor(t, e) {
    super(), this.options = t, this.code = e;
  }
  eq(t) {
    return t.code == this.code;
  }
  toDOM(t) {
    let e = $M(this.code), n = t.state.phrase("Control character") + " " + (WM[this.code] || "0x" + this.code.toString(16)), r = this.options.render && this.options.render(this.code, n, e);
    if (r) return r;
    let a = document.createElement("span");
    return a.textContent = e, a.title = n, a.setAttribute("aria-label", n), a.className = "cm-specialChar", a;
  }
  ignoreEvent() {
    return false;
  }
}
class eT extends Cn {
  constructor(t) {
    super(), this.width = t;
  }
  eq(t) {
    return t.width == this.width;
  }
  toDOM() {
    let t = document.createElement("span");
    return t.textContent = "	", t.className = "cm-tab", t.style.width = this.width + "px", t;
  }
  ignoreEvent() {
    return false;
  }
}
function iT() {
  return lT;
}
const nT = ut.line({ class: "cm-activeLine" }), lT = ee.fromClass(class {
  constructor(l) {
    this.decorations = this.getDeco(l);
  }
  update(l) {
    (l.docChanged || l.selectionSet) && (this.decorations = this.getDeco(l.view));
  }
  getDeco(l) {
    let t = -1, e = [];
    for (let n of l.state.selection.ranges) {
      let r = l.lineBlockAt(n.head);
      r.from > t && (e.push(nT.range(r.from)), t = r.from);
    }
    return ut.set(e);
  }
}, { decorations: (l) => l.decorations });
class sT extends Cn {
  constructor(t) {
    super(), this.content = t;
  }
  toDOM(t) {
    let e = document.createElement("span");
    return e.className = "cm-placeholder", e.style.pointerEvents = "none", e.appendChild(typeof this.content == "string" ? document.createTextNode(this.content) : typeof this.content == "function" ? this.content(t) : this.content.cloneNode(true)), e.setAttribute("aria-hidden", "true"), e;
  }
  coordsAt(t) {
    let e = t.firstChild ? Vs(t.firstChild) : [];
    if (!e.length) return null;
    let n = window.getComputedStyle(t.parentNode), r = Aa(e[0], n.direction != "rtl"), a = parseInt(n.lineHeight);
    return r.bottom - r.top > a * 1.5 ? { left: r.left, right: r.right, top: r.top, bottom: r.top + a } : r;
  }
  ignoreEvent() {
    return false;
  }
}
function rT(l) {
  let t = ee.fromClass(class {
    constructor(e) {
      this.view = e, this.placeholder = l ? ut.set([ut.widget({ widget: new sT(l), side: 1 }).range(0)]) : ut.none;
    }
    get decorations() {
      return this.view.state.doc.length ? ut.none : this.placeholder;
    }
  }, { decorations: (e) => e.decorations });
  return typeof l == "string" ? [t, P.contentAttributes.of({ "aria-placeholder": l })] : t;
}
const em = 2e3;
function aT(l, t, e) {
  let n = Math.min(t.line, e.line), r = Math.max(t.line, e.line), a = [];
  if (t.off > em || e.off > em || t.col < 0 || e.col < 0) {
    let u = Math.min(t.off, e.off), f = Math.max(t.off, e.off);
    for (let h = n; h <= r; h++) {
      let g = l.doc.line(h);
      g.length <= f && a.push(K.range(g.from + u, g.to + f));
    }
  } else {
    let u = Math.min(t.col, e.col), f = Math.max(t.col, e.col);
    for (let h = n; h <= r; h++) {
      let g = l.doc.line(h), p = Rd(g.text, u, l.tabSize, true);
      if (p < 0) a.push(K.cursor(g.to));
      else {
        let y = Rd(g.text, f, l.tabSize);
        a.push(K.range(g.from + p, g.from + y));
      }
    }
  }
  return a;
}
function oT(l, t) {
  let e = l.coordsAtPos(l.viewport.from);
  return e ? Math.round(Math.abs((e.left - t) / l.defaultCharacterWidth)) : -1;
}
function tb(l, t) {
  let e = l.posAtCoords({ x: t.clientX, y: t.clientY }, false), n = l.state.doc.lineAt(e), r = e - n.from, a = r > em ? -1 : r == n.length ? oT(l, t.clientX) : Qs(n.text, l.state.tabSize, e - n.from);
  return { line: n.number, col: a, off: r };
}
function uT(l, t) {
  let e = tb(l, t), n = l.state.selection;
  return e ? { update(r) {
    if (r.docChanged) {
      let a = r.changes.mapPos(r.startState.doc.line(e.line).from), u = r.state.doc.lineAt(a);
      e = { line: u.number, col: e.col, off: Math.min(e.off, u.length) }, n = n.map(r.changes);
    }
  }, get(r, a, u) {
    let f = tb(l, r);
    if (!f) return n;
    let h = aT(l.state, e, f);
    return h.length ? u ? K.create(h.concat(n.ranges)) : K.create(h) : n;
  } } : null;
}
function cT(l) {
  let t = ((e) => e.altKey && e.button == 0);
  return P.mouseSelectionStyle.of((e, n) => t(n) ? uT(e, n) : null);
}
const fT = { Alt: [18, (l) => !!l.altKey], Control: [17, (l) => !!l.ctrlKey], Shift: [16, (l) => !!l.shiftKey], Meta: [91, (l) => !!l.metaKey] }, hT = { style: "cursor: crosshair" };
function dT(l = {}) {
  let [t, e] = fT[l.key || "Alt"], n = ee.fromClass(class {
    constructor(r) {
      this.view = r, this.isDown = false;
    }
    set(r) {
      this.isDown != r && (this.isDown = r, this.view.update([]));
    }
  }, { eventObservers: { keydown(r) {
    this.set(r.keyCode == t || e(r));
  }, keyup(r) {
    (r.keyCode == t || !e(r)) && this.set(false);
  }, mousemove(r) {
    this.set(e(r));
  } } });
  return [n, P.contentAttributes.of((r) => {
    var a;
    return !((a = r.plugin(n)) === null || a === void 0) && a.isDown ? hT : null;
  })];
}
const fu = "-10000px";
class wS {
  constructor(t, e, n, r) {
    this.facet = e, this.createTooltipView = n, this.removeTooltipView = r, this.input = t.state.facet(e), this.tooltips = this.input.filter((u) => u);
    let a = null;
    this.tooltipViews = this.tooltips.map((u) => a = n(u, a));
  }
  update(t, e) {
    var n;
    let r = t.state.facet(this.facet), a = r.filter((h) => h);
    if (r === this.input) {
      for (let h of this.tooltipViews) h.update && h.update(t);
      return false;
    }
    let u = [], f = e ? [] : null;
    for (let h = 0; h < a.length; h++) {
      let g = a[h], p = -1;
      if (g) {
        for (let y = 0; y < this.tooltips.length; y++) {
          let v = this.tooltips[y];
          v && v.create == g.create && (p = y);
        }
        if (p < 0) u[h] = this.createTooltipView(g, h ? u[h - 1] : null), f && (f[h] = !!g.above);
        else {
          let y = u[h] = this.tooltipViews[p];
          f && (f[h] = e[p]), y.update && y.update(t);
        }
      }
    }
    for (let h of this.tooltipViews) u.indexOf(h) < 0 && (this.removeTooltipView(h), (n = h.destroy) === null || n === void 0 || n.call(h));
    return e && (f.forEach((h, g) => e[g] = h), e.length = f.length), this.input = r, this.tooltips = a, this.tooltipViews = u, true;
  }
}
function mT(l) {
  let t = l.dom.ownerDocument.documentElement;
  return { top: 0, left: 0, bottom: t.clientHeight, right: t.clientWidth };
}
const td = et.define({ combine: (l) => {
  var t, e, n;
  return { position: F.ios ? "absolute" : ((t = l.find((r) => r.position)) === null || t === void 0 ? void 0 : t.position) || "fixed", parent: ((e = l.find((r) => r.parent)) === null || e === void 0 ? void 0 : e.parent) || null, tooltipSpace: ((n = l.find((r) => r.tooltipSpace)) === null || n === void 0 ? void 0 : n.tooltipSpace) || mT };
} }), eb = /* @__PURE__ */ new WeakMap(), Em = ee.fromClass(class {
  constructor(l) {
    this.view = l, this.above = [], this.inView = true, this.madeAbsolute = false, this.lastTransaction = 0, this.measureTimeout = -1;
    let t = l.state.facet(td);
    this.position = t.position, this.parent = t.parent, this.classes = l.themeClasses, this.createContainer(), this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this }, this.resizeObserver = typeof ResizeObserver == "function" ? new ResizeObserver(() => this.measureSoon()) : null, this.manager = new wS(l, Bm, (e, n) => this.createTooltip(e, n), (e) => {
      this.resizeObserver && this.resizeObserver.unobserve(e.dom), e.dom.remove();
    }), this.above = this.manager.tooltips.map((e) => !!e.above), this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver((e) => {
      Date.now() > this.lastTransaction - 50 && e.length > 0 && e[e.length - 1].intersectionRatio < 1 && this.measureSoon();
    }, { threshold: [1] }) : null, this.observeIntersection(), l.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure();
  }
  createContainer() {
    this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom;
  }
  observeIntersection() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      for (let l of this.manager.tooltipViews) this.intersectionObserver.observe(l.dom);
    }
  }
  measureSoon() {
    this.measureTimeout < 0 && (this.measureTimeout = setTimeout(() => {
      this.measureTimeout = -1, this.maybeMeasure();
    }, 50));
  }
  update(l) {
    l.transactions.length && (this.lastTransaction = Date.now());
    let t = this.manager.update(l, this.above);
    t && this.observeIntersection();
    let e = t || l.geometryChanged, n = l.state.facet(td);
    if (n.position != this.position && !this.madeAbsolute) {
      this.position = n.position;
      for (let r of this.manager.tooltipViews) r.dom.style.position = this.position;
      e = true;
    }
    if (n.parent != this.parent) {
      this.parent && this.container.remove(), this.parent = n.parent, this.createContainer();
      for (let r of this.manager.tooltipViews) this.container.appendChild(r.dom);
      e = true;
    } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
    e && this.maybeMeasure();
  }
  createTooltip(l, t) {
    let e = l.create(this.view), n = t ? t.dom : null;
    if (e.dom.classList.add("cm-tooltip"), l.arrow && !e.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
      let r = document.createElement("div");
      r.className = "cm-tooltip-arrow", e.dom.appendChild(r);
    }
    return e.dom.style.position = this.position, e.dom.style.top = fu, e.dom.style.left = "0px", this.container.insertBefore(e.dom, n), e.mount && e.mount(this.view), this.resizeObserver && this.resizeObserver.observe(e.dom), e;
  }
  destroy() {
    var l, t, e;
    this.view.win.removeEventListener("resize", this.measureSoon);
    for (let n of this.manager.tooltipViews) n.dom.remove(), (l = n.destroy) === null || l === void 0 || l.call(n);
    this.parent && this.container.remove(), (t = this.resizeObserver) === null || t === void 0 || t.disconnect(), (e = this.intersectionObserver) === null || e === void 0 || e.disconnect(), clearTimeout(this.measureTimeout);
  }
  readMeasure() {
    let l = 1, t = 1, e = false;
    if (this.position == "fixed" && this.manager.tooltipViews.length) {
      let { dom: a } = this.manager.tooltipViews[0];
      if (F.safari) {
        let u = a.getBoundingClientRect();
        e = Math.abs(u.top + 1e4) > 1 || Math.abs(u.left) > 1;
      } else e = !!a.offsetParent && a.offsetParent != this.container.ownerDocument.body;
    }
    if (e || this.position == "absolute") if (this.parent) {
      let a = this.parent.getBoundingClientRect();
      a.width && a.height && (l = a.width / this.parent.offsetWidth, t = a.height / this.parent.offsetHeight);
    } else ({ scaleX: l, scaleY: t } = this.view.viewState);
    let n = this.view.scrollDOM.getBoundingClientRect(), r = Tm(this.view);
    return { visible: { left: n.left + r.left, top: n.top + r.top, right: n.right - r.right, bottom: n.bottom - r.bottom }, parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(), pos: this.manager.tooltips.map((a, u) => {
      let f = this.manager.tooltipViews[u];
      return f.getCoords ? f.getCoords(a.pos) : this.view.coordsAtPos(a.pos);
    }), size: this.manager.tooltipViews.map(({ dom: a }) => a.getBoundingClientRect()), space: this.view.state.facet(td).tooltipSpace(this.view), scaleX: l, scaleY: t, makeAbsolute: e };
  }
  writeMeasure(l) {
    var t;
    if (l.makeAbsolute) {
      this.madeAbsolute = true, this.position = "absolute";
      for (let f of this.manager.tooltipViews) f.dom.style.position = "absolute";
    }
    let { visible: e, space: n, scaleX: r, scaleY: a } = l, u = [];
    for (let f = 0; f < this.manager.tooltips.length; f++) {
      let h = this.manager.tooltips[f], g = this.manager.tooltipViews[f], { dom: p } = g, y = l.pos[f], v = l.size[f];
      if (!y || h.clip !== false && (y.bottom <= Math.max(e.top, n.top) || y.top >= Math.min(e.bottom, n.bottom) || y.right < Math.max(e.left, n.left) - 0.1 || y.left > Math.min(e.right, n.right) + 0.1)) {
        p.style.top = fu;
        continue;
      }
      let S = h.arrow ? g.dom.querySelector(".cm-tooltip-arrow") : null, w = S ? 7 : 0, C = v.right - v.left, T = (t = eb.get(g)) !== null && t !== void 0 ? t : v.bottom - v.top, O = g.offset || pT, j = this.view.textDirection == Wt.LTR, L = v.width > n.right - n.left ? j ? n.left : n.right - v.width : j ? Math.max(n.left, Math.min(y.left - (S ? 14 : 0) + O.x, n.right - C)) : Math.min(Math.max(n.left, y.left - C + (S ? 14 : 0) - O.x), n.right - C), Q = this.above[f];
      !h.strictSide && (Q ? y.top - T - w - O.y < n.top : y.bottom + T + w + O.y > n.bottom) && Q == n.bottom - y.bottom > y.top - n.top && (Q = this.above[f] = !Q);
      let _ = (Q ? y.top - n.top : n.bottom - y.bottom) - w;
      if (_ < T && g.resize !== false) {
        if (_ < this.view.defaultLineHeight) {
          p.style.top = fu;
          continue;
        }
        eb.set(g, T), p.style.height = (T = _) / a + "px";
      } else p.style.height && (p.style.height = "");
      let G = Q ? y.top - T - w - O.y : y.bottom + w + O.y, V = L + C;
      if (g.overlap !== true) for (let lt of u) lt.left < V && lt.right > L && lt.top < G + T && lt.bottom > G && (G = Q ? lt.top - T - 2 - w : lt.bottom + w + 2);
      if (this.position == "absolute" ? (p.style.top = (G - l.parent.top) / a + "px", ib(p, (L - l.parent.left) / r)) : (p.style.top = G / a + "px", ib(p, L / r)), S) {
        let lt = y.left + (j ? O.x : -O.x) - (L + 14 - 7);
        S.style.left = lt / r + "px";
      }
      g.overlap !== true && u.push({ left: L, top: G, right: V, bottom: G + T }), p.classList.toggle("cm-tooltip-above", Q), p.classList.toggle("cm-tooltip-below", !Q), g.positioned && g.positioned(l.space);
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView))) for (let l of this.manager.tooltipViews) l.dom.style.top = fu;
  }
}, { eventObservers: { scroll() {
  this.maybeMeasure();
} } });
function ib(l, t) {
  let e = parseInt(l.style.left, 10);
  (isNaN(e) || Math.abs(t - e) > 1) && (l.style.left = t + "px");
}
const gT = P.baseTheme({ ".cm-tooltip": { zIndex: 500, boxSizing: "border-box" }, "&light .cm-tooltip": { border: "1px solid #bbb", backgroundColor: "#f5f5f5" }, "&light .cm-tooltip-section:not(:first-child)": { borderTop: "1px solid #bbb" }, "&dark .cm-tooltip": { backgroundColor: "#333338", color: "white" }, ".cm-tooltip-arrow": { height: "7px", width: "14px", position: "absolute", zIndex: -1, overflow: "hidden", "&:before, &:after": { content: "''", position: "absolute", width: 0, height: 0, borderLeft: "7px solid transparent", borderRight: "7px solid transparent" }, ".cm-tooltip-above &": { bottom: "-7px", "&:before": { borderTop: "7px solid #bbb" }, "&:after": { borderTop: "7px solid #f5f5f5", bottom: "1px" } }, ".cm-tooltip-below &": { top: "-7px", "&:before": { borderBottom: "7px solid #bbb" }, "&:after": { borderBottom: "7px solid #f5f5f5", top: "1px" } } }, "&dark .cm-tooltip .cm-tooltip-arrow": { "&:before": { borderTopColor: "#333338", borderBottomColor: "#333338" }, "&:after": { borderTopColor: "transparent", borderBottomColor: "transparent" } } }), pT = { x: 0, y: 0 }, Bm = et.define({ enables: [Em, gT] }), Gu = et.define({ combine: (l) => l.reduce((t, e) => t.concat(e), []) });
class oc {
  static create(t) {
    return new oc(t);
  }
  constructor(t) {
    this.view = t, this.mounted = false, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new wS(t, Gu, (e, n) => this.createHostedView(e, n), (e) => e.dom.remove());
  }
  createHostedView(t, e) {
    let n = t.create(this.view);
    return n.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(n.dom, e ? e.dom.nextSibling : this.dom.firstChild), this.mounted && n.mount && n.mount(this.view), n;
  }
  mount(t) {
    for (let e of this.manager.tooltipViews) e.mount && e.mount(t);
    this.mounted = true;
  }
  positioned(t) {
    for (let e of this.manager.tooltipViews) e.positioned && e.positioned(t);
  }
  update(t) {
    this.manager.update(t);
  }
  destroy() {
    var t;
    for (let e of this.manager.tooltipViews) (t = e.destroy) === null || t === void 0 || t.call(e);
  }
  passProp(t) {
    let e;
    for (let n of this.manager.tooltipViews) {
      let r = n[t];
      if (r !== void 0) {
        if (e === void 0) e = r;
        else if (e !== r) return;
      }
    }
    return e;
  }
  get offset() {
    return this.passProp("offset");
  }
  get getCoords() {
    return this.passProp("getCoords");
  }
  get overlap() {
    return this.passProp("overlap");
  }
  get resize() {
    return this.passProp("resize");
  }
}
const yT = Bm.compute([Gu], (l) => {
  let t = l.facet(Gu);
  return t.length === 0 ? null : { pos: Math.min(...t.map((e) => e.pos)), end: Math.max(...t.map((e) => {
    var n;
    return (n = e.end) !== null && n !== void 0 ? n : e.pos;
  })), create: oc.create, above: t[0].above, arrow: t.some((e) => e.arrow) };
});
class bT {
  constructor(t, e, n, r, a) {
    this.view = t, this.source = e, this.field = n, this.setHover = r, this.hoverTime = a, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = { x: 0, y: 0, target: t.dom, time: 0 }, this.checkHover = this.checkHover.bind(this), t.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), t.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this));
  }
  update() {
    this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout(() => this.startHover(), 20));
  }
  get active() {
    return this.view.state.field(this.field);
  }
  checkHover() {
    if (this.hoverTimeout = -1, this.active.length) return;
    let t = Date.now() - this.lastMove.time;
    t < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - t) : this.startHover();
  }
  startHover() {
    clearTimeout(this.restartTimeout);
    let { view: t, lastMove: e } = this, n = t.docView.nearest(e.target);
    if (!n) return;
    let r, a = 1;
    if (n instanceof bn) r = n.posAtStart;
    else {
      if (r = t.posAtCoords(e), r == null) return;
      let f = t.coordsAtPos(r);
      if (!f || e.y < f.top || e.y > f.bottom || e.x < f.left - t.defaultCharacterWidth || e.x > f.right + t.defaultCharacterWidth) return;
      let h = t.bidiSpans(t.state.doc.lineAt(r)).find((p) => p.from <= r && p.to >= r), g = h && h.dir == Wt.RTL ? -1 : 1;
      a = e.x < f.left ? -g : g;
    }
    let u = this.source(t, r, a);
    if (u == null ? void 0 : u.then) {
      let f = this.pending = { pos: r };
      u.then((h) => {
        this.pending == f && (this.pending = null, h && !(Array.isArray(h) && !h.length) && t.dispatch({ effects: this.setHover.of(Array.isArray(h) ? h : [h]) }));
      }, (h) => We(t.state, h, "hover tooltip"));
    } else u && !(Array.isArray(u) && !u.length) && t.dispatch({ effects: this.setHover.of(Array.isArray(u) ? u : [u]) });
  }
  get tooltip() {
    let t = this.view.plugin(Em), e = t ? t.manager.tooltips.findIndex((n) => n.create == oc.create) : -1;
    return e > -1 ? t.manager.tooltipViews[e] : null;
  }
  mousemove(t) {
    var e, n;
    this.lastMove = { x: t.clientX, y: t.clientY, target: t.target, time: Date.now() }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
    let { active: r, tooltip: a } = this;
    if (r.length && a && !vT(a.dom, t) || this.pending) {
      let { pos: u } = r[0] || this.pending, f = (n = (e = r[0]) === null || e === void 0 ? void 0 : e.end) !== null && n !== void 0 ? n : u;
      (u == f ? this.view.posAtCoords(this.lastMove) != u : !ST(this.view, u, f, t.clientX, t.clientY)) && (this.view.dispatch({ effects: this.setHover.of([]) }), this.pending = null);
    }
  }
  mouseleave(t) {
    clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
    let { active: e } = this;
    if (e.length) {
      let { tooltip: n } = this;
      n && n.dom.contains(t.relatedTarget) ? this.watchTooltipLeave(n.dom) : this.view.dispatch({ effects: this.setHover.of([]) });
    }
  }
  watchTooltipLeave(t) {
    let e = (n) => {
      t.removeEventListener("mouseleave", e), this.active.length && !this.view.dom.contains(n.relatedTarget) && this.view.dispatch({ effects: this.setHover.of([]) });
    };
    t.addEventListener("mouseleave", e);
  }
  destroy() {
    clearTimeout(this.hoverTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove);
  }
}
const hu = 4;
function vT(l, t) {
  let { left: e, right: n, top: r, bottom: a } = l.getBoundingClientRect(), u;
  if (u = l.querySelector(".cm-tooltip-arrow")) {
    let f = u.getBoundingClientRect();
    r = Math.min(f.top, r), a = Math.max(f.bottom, a);
  }
  return t.clientX >= e - hu && t.clientX <= n + hu && t.clientY >= r - hu && t.clientY <= a + hu;
}
function ST(l, t, e, n, r, a) {
  let u = l.scrollDOM.getBoundingClientRect(), f = l.documentTop + l.documentPadding.top + l.contentHeight;
  if (u.left > n || u.right < n || u.top > r || Math.min(u.bottom, f) < r) return false;
  let h = l.posAtCoords({ x: n, y: r }, false);
  return h >= t && h <= e;
}
function xT(l, t = {}) {
  let e = St.define(), n = Te.define({ create() {
    return [];
  }, update(r, a) {
    if (r.length && (t.hideOnChange && (a.docChanged || a.selection) ? r = [] : t.hideOn && (r = r.filter((u) => !t.hideOn(a, u))), a.docChanged)) {
      let u = [];
      for (let f of r) {
        let h = a.changes.mapPos(f.pos, -1, Le.TrackDel);
        if (h != null) {
          let g = Object.assign(/* @__PURE__ */ Object.create(null), f);
          g.pos = h, g.end != null && (g.end = a.changes.mapPos(g.end)), u.push(g);
        }
      }
      r = u;
    }
    for (let u of a.effects) u.is(e) && (r = u.value), u.is(wT) && (r = []);
    return r;
  }, provide: (r) => Gu.from(r) });
  return { active: n, extension: [n, ee.define((r) => new bT(r, l, n, e, t.hoverTime || 300)), yT] };
}
function CS(l, t) {
  let e = l.plugin(Em);
  if (!e) return null;
  let n = e.manager.tooltips.indexOf(t);
  return n < 0 ? null : e.manager.tooltipViews[n];
}
const wT = St.define(), nb = et.define({ combine(l) {
  let t, e;
  for (let n of l) t = t || n.topContainer, e = e || n.bottomContainer;
  return { topContainer: t, bottomContainer: e };
} });
function ma(l, t) {
  let e = l.plugin(AS), n = e ? e.specs.indexOf(t) : -1;
  return n > -1 ? e.panels[n] : null;
}
const AS = ee.fromClass(class {
  constructor(l) {
    this.input = l.state.facet(ga), this.specs = this.input.filter((e) => e), this.panels = this.specs.map((e) => e(l));
    let t = l.state.facet(nb);
    this.top = new du(l, true, t.topContainer), this.bottom = new du(l, false, t.bottomContainer), this.top.sync(this.panels.filter((e) => e.top)), this.bottom.sync(this.panels.filter((e) => !e.top));
    for (let e of this.panels) e.dom.classList.add("cm-panel"), e.mount && e.mount();
  }
  update(l) {
    let t = l.state.facet(nb);
    this.top.container != t.topContainer && (this.top.sync([]), this.top = new du(l.view, true, t.topContainer)), this.bottom.container != t.bottomContainer && (this.bottom.sync([]), this.bottom = new du(l.view, false, t.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
    let e = l.state.facet(ga);
    if (e != this.input) {
      let n = e.filter((h) => h), r = [], a = [], u = [], f = [];
      for (let h of n) {
        let g = this.specs.indexOf(h), p;
        g < 0 ? (p = h(l.view), f.push(p)) : (p = this.panels[g], p.update && p.update(l)), r.push(p), (p.top ? a : u).push(p);
      }
      this.specs = n, this.panels = r, this.top.sync(a), this.bottom.sync(u);
      for (let h of f) h.dom.classList.add("cm-panel"), h.mount && h.mount();
    } else for (let n of this.panels) n.update && n.update(l);
  }
  destroy() {
    this.top.sync([]), this.bottom.sync([]);
  }
}, { provide: (l) => P.scrollMargins.of((t) => {
  let e = t.plugin(l);
  return e && { top: e.top.scrollMargin(), bottom: e.bottom.scrollMargin() };
}) });
class du {
  constructor(t, e, n) {
    this.view = t, this.top = e, this.container = n, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses();
  }
  sync(t) {
    for (let e of this.panels) e.destroy && t.indexOf(e) < 0 && e.destroy();
    this.panels = t, this.syncDOM();
  }
  syncDOM() {
    if (this.panels.length == 0) {
      this.dom && (this.dom.remove(), this.dom = void 0);
      return;
    }
    if (!this.dom) {
      this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
      let e = this.container || this.view.dom;
      e.insertBefore(this.dom, this.top ? e.firstChild : null);
    }
    let t = this.dom.firstChild;
    for (let e of this.panels) if (e.dom.parentNode == this.dom) {
      for (; t != e.dom; ) t = lb(t);
      t = t.nextSibling;
    } else this.dom.insertBefore(e.dom, t);
    for (; t; ) t = lb(t);
  }
  scrollMargin() {
    return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top);
  }
  syncClasses() {
    if (!(!this.container || this.classes == this.view.themeClasses)) {
      for (let t of this.classes.split(" ")) t && this.container.classList.remove(t);
      for (let t of (this.classes = this.view.themeClasses).split(" ")) t && this.container.classList.add(t);
    }
  }
}
function lb(l) {
  let t = l.nextSibling;
  return l.remove(), t;
}
const ga = et.define({ enables: AS });
class wn extends Ll {
  compare(t) {
    return this == t || this.constructor == t.constructor && this.eq(t);
  }
  eq(t) {
    return false;
  }
  destroy(t) {
  }
}
wn.prototype.elementClass = "";
wn.prototype.toDOM = void 0;
wn.prototype.mapMode = Le.TrackBefore;
wn.prototype.startSide = wn.prototype.endSide = -1;
wn.prototype.point = true;
const Ru = et.define(), CT = et.define(), AT = { class: "", renderEmptyElements: false, elementStyle: "", markers: () => Bt.empty, lineMarker: () => null, widgetMarker: () => null, lineMarkerChange: null, initialSpacer: null, updateSpacer: null, domEventHandlers: {}, side: "before" }, ra = et.define();
function MT(l) {
  return [MS(), ra.of({ ...AT, ...l })];
}
const sb = et.define({ combine: (l) => l.some((t) => t) });
function MS(l) {
  return [TT];
}
const TT = ee.fromClass(class {
  constructor(l) {
    this.view = l, this.domAfter = null, this.prevViewport = l.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = l.state.facet(ra).map((t) => new ab(l, t)), this.fixed = !l.state.facet(sb);
    for (let t of this.gutters) t.config.side == "after" ? this.getDOMAfter().appendChild(t.dom) : this.dom.appendChild(t.dom);
    this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(false), l.scrollDOM.insertBefore(this.dom, l.contentDOM);
  }
  getDOMAfter() {
    return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter;
  }
  update(l) {
    if (this.updateGutters(l)) {
      let t = this.prevViewport, e = l.view.viewport, n = Math.min(t.to, e.to) - Math.max(t.from, e.from);
      this.syncGutters(n < (e.to - e.from) * 0.8);
    }
    if (l.geometryChanged) {
      let t = this.view.contentHeight / this.view.scaleY + "px";
      this.dom.style.minHeight = t, this.domAfter && (this.domAfter.style.minHeight = t);
    }
    this.view.state.facet(sb) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = l.view.viewport;
  }
  syncGutters(l) {
    let t = this.dom.nextSibling;
    l && (this.dom.remove(), this.domAfter && this.domAfter.remove());
    let e = Bt.iter(this.view.state.facet(Ru), this.view.viewport.from), n = [], r = this.gutters.map((a) => new kT(a, this.view.viewport, -this.view.documentPadding.top));
    for (let a of this.view.viewportLineBlocks) if (n.length && (n = []), Array.isArray(a.type)) {
      let u = true;
      for (let f of a.type) if (f.type == He.Text && u) {
        im(e, n, f.from);
        for (let h of r) h.line(this.view, f, n);
        u = false;
      } else if (f.widget) for (let h of r) h.widget(this.view, f);
    } else if (a.type == He.Text) {
      im(e, n, a.from);
      for (let u of r) u.line(this.view, a, n);
    } else if (a.widget) for (let u of r) u.widget(this.view, a);
    for (let a of r) a.finish();
    l && (this.view.scrollDOM.insertBefore(this.dom, t), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter));
  }
  updateGutters(l) {
    let t = l.startState.facet(ra), e = l.state.facet(ra), n = l.docChanged || l.heightChanged || l.viewportChanged || !Bt.eq(l.startState.facet(Ru), l.state.facet(Ru), l.view.viewport.from, l.view.viewport.to);
    if (t == e) for (let r of this.gutters) r.update(l) && (n = true);
    else {
      n = true;
      let r = [];
      for (let a of e) {
        let u = t.indexOf(a);
        u < 0 ? r.push(new ab(this.view, a)) : (this.gutters[u].update(l), r.push(this.gutters[u]));
      }
      for (let a of this.gutters) a.dom.remove(), r.indexOf(a) < 0 && a.destroy();
      for (let a of r) a.config.side == "after" ? this.getDOMAfter().appendChild(a.dom) : this.dom.appendChild(a.dom);
      this.gutters = r;
    }
    return n;
  }
  destroy() {
    for (let l of this.gutters) l.destroy();
    this.dom.remove(), this.domAfter && this.domAfter.remove();
  }
}, { provide: (l) => P.scrollMargins.of((t) => {
  let e = t.plugin(l);
  if (!e || e.gutters.length == 0 || !e.fixed) return null;
  let n = e.dom.offsetWidth * t.scaleX, r = e.domAfter ? e.domAfter.offsetWidth * t.scaleX : 0;
  return t.textDirection == Wt.LTR ? { left: n, right: r } : { right: n, left: r };
}) });
function rb(l) {
  return Array.isArray(l) ? l : [l];
}
function im(l, t, e) {
  for (; l.value && l.from <= e; ) l.from == e && t.push(l.value), l.next();
}
class kT {
  constructor(t, e, n) {
    this.gutter = t, this.height = n, this.i = 0, this.cursor = Bt.iter(t.markers, e.from);
  }
  addElement(t, e, n) {
    let { gutter: r } = this, a = (e.top - this.height) / t.scaleY, u = e.height / t.scaleY;
    if (this.i == r.elements.length) {
      let f = new TS(t, u, a, n);
      r.elements.push(f), r.dom.appendChild(f.dom);
    } else r.elements[this.i].update(t, u, a, n);
    this.height = e.bottom, this.i++;
  }
  line(t, e, n) {
    let r = [];
    im(this.cursor, r, e.from), n.length && (r = r.concat(n));
    let a = this.gutter.config.lineMarker(t, e, r);
    a && r.unshift(a);
    let u = this.gutter;
    r.length == 0 && !u.config.renderEmptyElements || this.addElement(t, e, r);
  }
  widget(t, e) {
    let n = this.gutter.config.widgetMarker(t, e.widget, e), r = n ? [n] : null;
    for (let a of t.state.facet(CT)) {
      let u = a(t, e.widget, e);
      u && (r || (r = [])).push(u);
    }
    r && this.addElement(t, e, r);
  }
  finish() {
    let t = this.gutter;
    for (; t.elements.length > this.i; ) {
      let e = t.elements.pop();
      t.dom.removeChild(e.dom), e.destroy();
    }
  }
}
class ab {
  constructor(t, e) {
    this.view = t, this.config = e, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
    for (let n in e.domEventHandlers) this.dom.addEventListener(n, (r) => {
      let a = r.target, u;
      if (a != this.dom && this.dom.contains(a)) {
        for (; a.parentNode != this.dom; ) a = a.parentNode;
        let h = a.getBoundingClientRect();
        u = (h.top + h.bottom) / 2;
      } else u = r.clientY;
      let f = t.lineBlockAtHeight(u - t.documentTop);
      e.domEventHandlers[n](t, f, r) && r.preventDefault();
    });
    this.markers = rb(e.markers(t)), e.initialSpacer && (this.spacer = new TS(t, 0, 0, [e.initialSpacer(t)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(t) {
    let e = this.markers;
    if (this.markers = rb(this.config.markers(t.view)), this.spacer && this.config.updateSpacer) {
      let r = this.config.updateSpacer(this.spacer.markers[0], t);
      r != this.spacer.markers[0] && this.spacer.update(t.view, 0, 0, [r]);
    }
    let n = t.view.viewport;
    return !Bt.eq(this.markers, e, n.from, n.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(t) : false);
  }
  destroy() {
    for (let t of this.elements) t.destroy();
  }
}
class TS {
  constructor(t, e, n, r) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(t, e, n, r);
  }
  update(t, e, n, r) {
    this.height != e && (this.height = e, this.dom.style.height = e + "px"), this.above != n && (this.dom.style.marginTop = (this.above = n) ? n + "px" : ""), OT(this.markers, r) || this.setMarkers(t, r);
  }
  setMarkers(t, e) {
    let n = "cm-gutterElement", r = this.dom.firstChild;
    for (let a = 0, u = 0; ; ) {
      let f = u, h = a < e.length ? e[a++] : null, g = false;
      if (h) {
        let p = h.elementClass;
        p && (n += " " + p);
        for (let y = u; y < this.markers.length; y++) if (this.markers[y].compare(h)) {
          f = y, g = true;
          break;
        }
      } else f = this.markers.length;
      for (; u < f; ) {
        let p = this.markers[u++];
        if (p.toDOM) {
          p.destroy(r);
          let y = r.nextSibling;
          r.remove(), r = y;
        }
      }
      if (!h) break;
      h.toDOM && (g ? r = r.nextSibling : this.dom.insertBefore(h.toDOM(t), r)), g && u++;
    }
    this.dom.className = n, this.markers = e;
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
function OT(l, t) {
  if (l.length != t.length) return false;
  for (let e = 0; e < l.length; e++) if (!l[e].compare(t[e])) return false;
  return true;
}
const DT = et.define(), ET = et.define(), Ds = et.define({ combine(l) {
  return Pi(l, { formatNumber: String, domEventHandlers: {} }, { domEventHandlers(t, e) {
    let n = Object.assign({}, t);
    for (let r in e) {
      let a = n[r], u = e[r];
      n[r] = a ? (f, h, g) => a(f, h, g) || u(f, h, g) : u;
    }
    return n;
  } });
} });
class ed extends wn {
  constructor(t) {
    super(), this.number = t;
  }
  eq(t) {
    return this.number == t.number;
  }
  toDOM() {
    return document.createTextNode(this.number);
  }
}
function id(l, t) {
  return l.state.facet(Ds).formatNumber(t, l.state);
}
const BT = ra.compute([Ds], (l) => ({ class: "cm-lineNumbers", renderEmptyElements: false, markers(t) {
  return t.state.facet(DT);
}, lineMarker(t, e, n) {
  return n.some((r) => r.toDOM) ? null : new ed(id(t, t.state.doc.lineAt(e.from).number));
}, widgetMarker: (t, e, n) => {
  for (let r of t.state.facet(ET)) {
    let a = r(t, e, n);
    if (a) return a;
  }
  return null;
}, lineMarkerChange: (t) => t.startState.facet(Ds) != t.state.facet(Ds), initialSpacer(t) {
  return new ed(id(t, ob(t.state.doc.lines)));
}, updateSpacer(t, e) {
  let n = id(e.view, ob(e.view.state.doc.lines));
  return n == t.number ? t : new ed(n);
}, domEventHandlers: l.facet(Ds).domEventHandlers, side: "before" }));
function RT(l = {}) {
  return [Ds.of(l), MS(), BT];
}
function ob(l) {
  let t = 9;
  for (; t < l; ) t = t * 10 + 9;
  return t;
}
const zT = new class extends wn {
  constructor() {
    super(...arguments), this.elementClass = "cm-activeLineGutter";
  }
}(), NT = Ru.compute(["selection"], (l) => {
  let t = [], e = -1;
  for (let n of l.selection.ranges) {
    let r = l.doc.lineAt(n.head).from;
    r > e && (e = r, t.push(zT.range(r)));
  }
  return Bt.of(t);
});
function _T() {
  return NT;
}
const LT = 1024;
let HT = 0;
class nd {
  constructor(t, e) {
    this.from = t, this.to = e;
  }
}
class Dt {
  constructor(t = {}) {
    this.id = HT++, this.perNode = !!t.perNode, this.deserialize = t.deserialize || (() => {
      throw new Error("This node type doesn't define a deserialize function");
    }), this.combine = t.combine || null;
  }
  add(t) {
    if (this.perNode) throw new RangeError("Can't add per-node props to node types");
    return typeof t != "function" && (t = Mi.match(t)), (e) => {
      let n = t(e);
      return n === void 0 ? null : [this, n];
    };
  }
}
Dt.closedBy = new Dt({ deserialize: (l) => l.split(" ") });
Dt.openedBy = new Dt({ deserialize: (l) => l.split(" ") });
Dt.group = new Dt({ deserialize: (l) => l.split(" ") });
Dt.isolate = new Dt({ deserialize: (l) => {
  if (l && l != "rtl" && l != "ltr" && l != "auto") throw new RangeError("Invalid value for isolate: " + l);
  return l || "auto";
} });
Dt.contextHash = new Dt({ perNode: true });
Dt.lookAhead = new Dt({ perNode: true });
Dt.mounted = new Dt({ perNode: true });
class Xu {
  constructor(t, e, n) {
    this.tree = t, this.overlay = e, this.parser = n;
  }
  static get(t) {
    return t && t.props && t.props[Dt.mounted.id];
  }
}
const UT = /* @__PURE__ */ Object.create(null);
class Mi {
  constructor(t, e, n, r = 0) {
    this.name = t, this.props = e, this.id = n, this.flags = r;
  }
  static define(t) {
    let e = t.props && t.props.length ? /* @__PURE__ */ Object.create(null) : UT, n = (t.top ? 1 : 0) | (t.skipped ? 2 : 0) | (t.error ? 4 : 0) | (t.name == null ? 8 : 0), r = new Mi(t.name || "", e, t.id, n);
    if (t.props) {
      for (let a of t.props) if (Array.isArray(a) || (a = a(r)), a) {
        if (a[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
        e[a[0].id] = a[1];
      }
    }
    return r;
  }
  prop(t) {
    return this.props[t.id];
  }
  get isTop() {
    return (this.flags & 1) > 0;
  }
  get isSkipped() {
    return (this.flags & 2) > 0;
  }
  get isError() {
    return (this.flags & 4) > 0;
  }
  get isAnonymous() {
    return (this.flags & 8) > 0;
  }
  is(t) {
    if (typeof t == "string") {
      if (this.name == t) return true;
      let e = this.prop(Dt.group);
      return e ? e.indexOf(t) > -1 : false;
    }
    return this.id == t;
  }
  static match(t) {
    let e = /* @__PURE__ */ Object.create(null);
    for (let n in t) for (let r of n.split(" ")) e[r] = t[n];
    return (n) => {
      for (let r = n.prop(Dt.group), a = -1; a < (r ? r.length : 0); a++) {
        let u = e[a < 0 ? n.name : r[a]];
        if (u) return u;
      }
    };
  }
}
Mi.none = new Mi("", /* @__PURE__ */ Object.create(null), 0, 8);
const mu = /* @__PURE__ */ new WeakMap(), ub = /* @__PURE__ */ new WeakMap();
var Ae;
(function(l) {
  l[l.ExcludeBuffers = 1] = "ExcludeBuffers", l[l.IncludeAnonymous = 2] = "IncludeAnonymous", l[l.IgnoreMounts = 4] = "IgnoreMounts", l[l.IgnoreOverlays = 8] = "IgnoreOverlays";
})(Ae || (Ae = {}));
class Ee {
  constructor(t, e, n, r, a) {
    if (this.type = t, this.children = e, this.positions = n, this.length = r, this.props = null, a && a.length) {
      this.props = /* @__PURE__ */ Object.create(null);
      for (let [u, f] of a) this.props[typeof u == "number" ? u : u.id] = f;
    }
  }
  toString() {
    let t = Xu.get(this);
    if (t && !t.overlay) return t.tree.toString();
    let e = "";
    for (let n of this.children) {
      let r = n.toString();
      r && (e && (e += ","), e += r);
    }
    return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (e.length ? "(" + e + ")" : "") : e;
  }
  cursor(t = 0) {
    return new lm(this.topNode, t);
  }
  cursorAt(t, e = 0, n = 0) {
    let r = mu.get(this) || this.topNode, a = new lm(r);
    return a.moveTo(t, e), mu.set(this, a._tree), a;
  }
  get topNode() {
    return new Ci(this, 0, 0, null);
  }
  resolve(t, e = 0) {
    let n = pa(mu.get(this) || this.topNode, t, e, false);
    return mu.set(this, n), n;
  }
  resolveInner(t, e = 0) {
    let n = pa(ub.get(this) || this.topNode, t, e, true);
    return ub.set(this, n), n;
  }
  resolveStack(t, e = 0) {
    return jT(this, t, e);
  }
  iterate(t) {
    let { enter: e, leave: n, from: r = 0, to: a = this.length } = t, u = t.mode || 0, f = (u & Ae.IncludeAnonymous) > 0;
    for (let h = this.cursor(u | Ae.IncludeAnonymous); ; ) {
      let g = false;
      if (h.from <= a && h.to >= r && (!f && h.type.isAnonymous || e(h) !== false)) {
        if (h.firstChild()) continue;
        g = true;
      }
      for (; g && n && (f || !h.type.isAnonymous) && n(h), !h.nextSibling(); ) {
        if (!h.parent()) return;
        g = true;
      }
    }
  }
  prop(t) {
    return t.perNode ? this.props ? this.props[t.id] : void 0 : this.type.prop(t);
  }
  get propValues() {
    let t = [];
    if (this.props) for (let e in this.props) t.push([+e, this.props[e]]);
    return t;
  }
  balance(t = {}) {
    return this.children.length <= 8 ? this : Nm(Mi.none, this.children, this.positions, 0, this.children.length, 0, this.length, (e, n, r) => new Ee(this.type, e, n, r, this.propValues), t.makeTree || ((e, n, r) => new Ee(Mi.none, e, n, r)));
  }
  static build(t) {
    return YT(t);
  }
}
Ee.empty = new Ee(Mi.none, [], [], 0);
class Rm {
  constructor(t, e) {
    this.buffer = t, this.index = e;
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  get pos() {
    return this.index;
  }
  next() {
    this.index -= 4;
  }
  fork() {
    return new Rm(this.buffer, this.index);
  }
}
class sl {
  constructor(t, e, n) {
    this.buffer = t, this.length = e, this.set = n;
  }
  get type() {
    return Mi.none;
  }
  toString() {
    let t = [];
    for (let e = 0; e < this.buffer.length; ) t.push(this.childString(e)), e = this.buffer[e + 3];
    return t.join(",");
  }
  childString(t) {
    let e = this.buffer[t], n = this.buffer[t + 3], r = this.set.types[e], a = r.name;
    if (/\W/.test(a) && !r.isError && (a = JSON.stringify(a)), t += 4, n == t) return a;
    let u = [];
    for (; t < n; ) u.push(this.childString(t)), t = this.buffer[t + 3];
    return a + "(" + u.join(",") + ")";
  }
  findChild(t, e, n, r, a) {
    let { buffer: u } = this, f = -1;
    for (let h = t; h != e && !(kS(a, r, u[h + 1], u[h + 2]) && (f = h, n > 0)); h = u[h + 3]) ;
    return f;
  }
  slice(t, e, n) {
    let r = this.buffer, a = new Uint16Array(e - t), u = 0;
    for (let f = t, h = 0; f < e; ) {
      a[h++] = r[f++], a[h++] = r[f++] - n;
      let g = a[h++] = r[f++] - n;
      a[h++] = r[f++] - t, u = Math.max(u, g);
    }
    return new sl(a, u, this.set);
  }
}
function kS(l, t, e, n) {
  switch (l) {
    case -2:
      return e < t;
    case -1:
      return n >= t && e < t;
    case 0:
      return e < t && n > t;
    case 1:
      return e <= t && n > t;
    case 2:
      return n > t;
    case 4:
      return true;
  }
}
function pa(l, t, e, n) {
  for (var r; l.from == l.to || (e < 1 ? l.from >= t : l.from > t) || (e > -1 ? l.to <= t : l.to < t); ) {
    let u = !n && l instanceof Ci && l.index < 0 ? null : l.parent;
    if (!u) return l;
    l = u;
  }
  let a = n ? 0 : Ae.IgnoreOverlays;
  if (n) for (let u = l, f = u.parent; f; u = f, f = u.parent) u instanceof Ci && u.index < 0 && ((r = f.enter(t, e, a)) === null || r === void 0 ? void 0 : r.from) != u.from && (l = f);
  for (; ; ) {
    let u = l.enter(t, e, a);
    if (!u) return l;
    l = u;
  }
}
class OS {
  cursor(t = 0) {
    return new lm(this, t);
  }
  getChild(t, e = null, n = null) {
    let r = cb(this, t, e, n);
    return r.length ? r[0] : null;
  }
  getChildren(t, e = null, n = null) {
    return cb(this, t, e, n);
  }
  resolve(t, e = 0) {
    return pa(this, t, e, false);
  }
  resolveInner(t, e = 0) {
    return pa(this, t, e, true);
  }
  matchContext(t) {
    return nm(this.parent, t);
  }
  enterUnfinishedNodesBefore(t) {
    let e = this.childBefore(t), n = this;
    for (; e; ) {
      let r = e.lastChild;
      if (!r || r.to != e.to) break;
      r.type.isError && r.from == r.to ? (n = e, e = r.prevSibling) : e = r;
    }
    return n;
  }
  get node() {
    return this;
  }
  get next() {
    return this.parent;
  }
}
class Ci extends OS {
  constructor(t, e, n, r) {
    super(), this._tree = t, this.from = e, this.index = n, this._parent = r;
  }
  get type() {
    return this._tree.type;
  }
  get name() {
    return this._tree.type.name;
  }
  get to() {
    return this.from + this._tree.length;
  }
  nextChild(t, e, n, r, a = 0) {
    for (let u = this; ; ) {
      for (let { children: f, positions: h } = u._tree, g = e > 0 ? f.length : -1; t != g; t += e) {
        let p = f[t], y = h[t] + u.from;
        if (kS(r, n, y, y + p.length)) {
          if (p instanceof sl) {
            if (a & Ae.ExcludeBuffers) continue;
            let v = p.findChild(0, p.buffer.length, e, n - y, r);
            if (v > -1) return new tl(new VT(u, p, t, y), null, v);
          } else if (a & Ae.IncludeAnonymous || !p.type.isAnonymous || zm(p)) {
            let v;
            if (!(a & Ae.IgnoreMounts) && (v = Xu.get(p)) && !v.overlay) return new Ci(v.tree, y, t, u);
            let S = new Ci(p, y, t, u);
            return a & Ae.IncludeAnonymous || !S.type.isAnonymous ? S : S.nextChild(e < 0 ? p.children.length - 1 : 0, e, n, r);
          }
        }
      }
      if (a & Ae.IncludeAnonymous || !u.type.isAnonymous || (u.index >= 0 ? t = u.index + e : t = e < 0 ? -1 : u._parent._tree.children.length, u = u._parent, !u)) return null;
    }
  }
  get firstChild() {
    return this.nextChild(0, 1, 0, 4);
  }
  get lastChild() {
    return this.nextChild(this._tree.children.length - 1, -1, 0, 4);
  }
  childAfter(t) {
    return this.nextChild(0, 1, t, 2);
  }
  childBefore(t) {
    return this.nextChild(this._tree.children.length - 1, -1, t, -2);
  }
  prop(t) {
    return this._tree.prop(t);
  }
  enter(t, e, n = 0) {
    let r;
    if (!(n & Ae.IgnoreOverlays) && (r = Xu.get(this._tree)) && r.overlay) {
      let a = t - this.from;
      for (let { from: u, to: f } of r.overlay) if ((e > 0 ? u <= a : u < a) && (e < 0 ? f >= a : f > a)) return new Ci(r.tree, r.overlay[0].from + this.from, -1, this);
    }
    return this.nextChild(0, 1, t, e, n);
  }
  nextSignificantParent() {
    let t = this;
    for (; t.type.isAnonymous && t._parent; ) t = t._parent;
    return t;
  }
  get parent() {
    return this._parent ? this._parent.nextSignificantParent() : null;
  }
  get nextSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(this.index + 1, 1, 0, 4) : null;
  }
  get prevSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(this.index - 1, -1, 0, 4) : null;
  }
  get tree() {
    return this._tree;
  }
  toTree() {
    return this._tree;
  }
  toString() {
    return this._tree.toString();
  }
}
function cb(l, t, e, n) {
  let r = l.cursor(), a = [];
  if (!r.firstChild()) return a;
  if (e != null) {
    for (let u = false; !u; ) if (u = r.type.is(e), !r.nextSibling()) return a;
  }
  for (; ; ) {
    if (n != null && r.type.is(n)) return a;
    if (r.type.is(t) && a.push(r.node), !r.nextSibling()) return n == null ? a : [];
  }
}
function nm(l, t, e = t.length - 1) {
  for (let n = l; e >= 0; n = n.parent) {
    if (!n) return false;
    if (!n.type.isAnonymous) {
      if (t[e] && t[e] != n.name) return false;
      e--;
    }
  }
  return true;
}
class VT {
  constructor(t, e, n, r) {
    this.parent = t, this.buffer = e, this.index = n, this.start = r;
  }
}
class tl extends OS {
  get name() {
    return this.type.name;
  }
  get from() {
    return this.context.start + this.context.buffer.buffer[this.index + 1];
  }
  get to() {
    return this.context.start + this.context.buffer.buffer[this.index + 2];
  }
  constructor(t, e, n) {
    super(), this.context = t, this._parent = e, this.index = n, this.type = t.buffer.set.types[t.buffer.buffer[n]];
  }
  child(t, e, n) {
    let { buffer: r } = this.context, a = r.findChild(this.index + 4, r.buffer[this.index + 3], t, e - this.context.start, n);
    return a < 0 ? null : new tl(this.context, this, a);
  }
  get firstChild() {
    return this.child(1, 0, 4);
  }
  get lastChild() {
    return this.child(-1, 0, 4);
  }
  childAfter(t) {
    return this.child(1, t, 2);
  }
  childBefore(t) {
    return this.child(-1, t, -2);
  }
  prop(t) {
    return this.type.prop(t);
  }
  enter(t, e, n = 0) {
    if (n & Ae.ExcludeBuffers) return null;
    let { buffer: r } = this.context, a = r.findChild(this.index + 4, r.buffer[this.index + 3], e > 0 ? 1 : -1, t - this.context.start, e);
    return a < 0 ? null : new tl(this.context, this, a);
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(t) {
    return this._parent ? null : this.context.parent.nextChild(this.context.index + t, t, 0, 4);
  }
  get nextSibling() {
    let { buffer: t } = this.context, e = t.buffer[this.index + 3];
    return e < (this._parent ? t.buffer[this._parent.index + 3] : t.buffer.length) ? new tl(this.context, this._parent, e) : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: t } = this.context, e = this._parent ? this._parent.index + 4 : 0;
    return this.index == e ? this.externalSibling(-1) : new tl(this.context, this._parent, t.findChild(e, this.index, -1, 0, 4));
  }
  get tree() {
    return null;
  }
  toTree() {
    let t = [], e = [], { buffer: n } = this.context, r = this.index + 4, a = n.buffer[this.index + 3];
    if (a > r) {
      let u = n.buffer[this.index + 1];
      t.push(n.slice(r, a, u)), e.push(0);
    }
    return new Ee(this.type, t, e, this.to - this.from);
  }
  toString() {
    return this.context.buffer.childString(this.index);
  }
}
function DS(l) {
  if (!l.length) return null;
  let t = 0, e = l[0];
  for (let a = 1; a < l.length; a++) {
    let u = l[a];
    (u.from > e.from || u.to < e.to) && (e = u, t = a);
  }
  let n = e instanceof Ci && e.index < 0 ? null : e.parent, r = l.slice();
  return n ? r[t] = n : r.splice(t, 1), new qT(r, e);
}
class qT {
  constructor(t, e) {
    this.heads = t, this.node = e;
  }
  get next() {
    return DS(this.heads);
  }
}
function jT(l, t, e) {
  let n = l.resolveInner(t, e), r = null;
  for (let a = n instanceof Ci ? n : n.context.parent; a; a = a.parent) if (a.index < 0) {
    let u = a.parent;
    (r || (r = [n])).push(u.resolve(t, e)), a = u;
  } else {
    let u = Xu.get(a.tree);
    if (u && u.overlay && u.overlay[0].from <= t && u.overlay[u.overlay.length - 1].to >= t) {
      let f = new Ci(u.tree, u.overlay[0].from + a.from, -1, a);
      (r || (r = [n])).push(pa(f, t, e, false));
    }
  }
  return r ? DS(r) : n;
}
class lm {
  get name() {
    return this.type.name;
  }
  constructor(t, e = 0) {
    if (this.mode = e, this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, t instanceof Ci) this.yieldNode(t);
    else {
      this._tree = t.context.parent, this.buffer = t.context;
      for (let n = t._parent; n; n = n._parent) this.stack.unshift(n.index);
      this.bufferNode = t, this.yieldBuf(t.index);
    }
  }
  yieldNode(t) {
    return t ? (this._tree = t, this.type = t.type, this.from = t.from, this.to = t.to, true) : false;
  }
  yieldBuf(t, e) {
    this.index = t;
    let { start: n, buffer: r } = this.buffer;
    return this.type = e || r.set.types[r.buffer[t]], this.from = n + r.buffer[t + 1], this.to = n + r.buffer[t + 2], true;
  }
  yield(t) {
    return t ? t instanceof Ci ? (this.buffer = null, this.yieldNode(t)) : (this.buffer = t.context, this.yieldBuf(t.index, t.type)) : false;
  }
  toString() {
    return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
  }
  enterChild(t, e, n) {
    if (!this.buffer) return this.yield(this._tree.nextChild(t < 0 ? this._tree._tree.children.length - 1 : 0, t, e, n, this.mode));
    let { buffer: r } = this.buffer, a = r.findChild(this.index + 4, r.buffer[this.index + 3], t, e - this.buffer.start, n);
    return a < 0 ? false : (this.stack.push(this.index), this.yieldBuf(a));
  }
  firstChild() {
    return this.enterChild(1, 0, 4);
  }
  lastChild() {
    return this.enterChild(-1, 0, 4);
  }
  childAfter(t) {
    return this.enterChild(1, t, 2);
  }
  childBefore(t) {
    return this.enterChild(-1, t, -2);
  }
  enter(t, e, n = this.mode) {
    return this.buffer ? n & Ae.ExcludeBuffers ? false : this.enterChild(1, t, e) : this.yield(this._tree.enter(t, e, n));
  }
  parent() {
    if (!this.buffer) return this.yieldNode(this.mode & Ae.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length) return this.yieldBuf(this.stack.pop());
    let t = this.mode & Ae.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
    return this.buffer = null, this.yieldNode(t);
  }
  sibling(t) {
    if (!this.buffer) return this._tree._parent ? this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + t, t, 0, 4, this.mode)) : false;
    let { buffer: e } = this.buffer, n = this.stack.length - 1;
    if (t < 0) {
      let r = n < 0 ? 0 : this.stack[n] + 4;
      if (this.index != r) return this.yieldBuf(e.findChild(r, this.index, -1, 0, 4));
    } else {
      let r = e.buffer[this.index + 3];
      if (r < (n < 0 ? e.buffer.length : e.buffer[this.stack[n] + 3])) return this.yieldBuf(r);
    }
    return n < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + t, t, 0, 4, this.mode)) : false;
  }
  nextSibling() {
    return this.sibling(1);
  }
  prevSibling() {
    return this.sibling(-1);
  }
  atLastNode(t) {
    let e, n, { buffer: r } = this;
    if (r) {
      if (t > 0) {
        if (this.index < r.buffer.buffer.length) return false;
      } else for (let a = 0; a < this.index; a++) if (r.buffer.buffer[a + 3] < this.index) return false;
      ({ index: e, parent: n } = r);
    } else ({ index: e, _parent: n } = this._tree);
    for (; n; { index: e, _parent: n } = n) if (e > -1) for (let a = e + t, u = t < 0 ? -1 : n._tree.children.length; a != u; a += t) {
      let f = n._tree.children[a];
      if (this.mode & Ae.IncludeAnonymous || f instanceof sl || !f.type.isAnonymous || zm(f)) return false;
    }
    return true;
  }
  move(t, e) {
    if (e && this.enterChild(t, 0, 4)) return true;
    for (; ; ) {
      if (this.sibling(t)) return true;
      if (this.atLastNode(t) || !this.parent()) return false;
    }
  }
  next(t = true) {
    return this.move(1, t);
  }
  prev(t = true) {
    return this.move(-1, t);
  }
  moveTo(t, e = 0) {
    for (; (this.from == this.to || (e < 1 ? this.from >= t : this.from > t) || (e > -1 ? this.to <= t : this.to < t)) && this.parent(); ) ;
    for (; this.enterChild(1, t, e); ) ;
    return this;
  }
  get node() {
    if (!this.buffer) return this._tree;
    let t = this.bufferNode, e = null, n = 0;
    if (t && t.context == this.buffer) t: for (let r = this.index, a = this.stack.length; a >= 0; ) {
      for (let u = t; u; u = u._parent) if (u.index == r) {
        if (r == this.index) return u;
        e = u, n = a + 1;
        break t;
      }
      r = this.stack[--a];
    }
    for (let r = n; r < this.stack.length; r++) e = new tl(this.buffer, e, this.stack[r]);
    return this.bufferNode = new tl(this.buffer, e, this.index);
  }
  get tree() {
    return this.buffer ? null : this._tree._tree;
  }
  iterate(t, e) {
    for (let n = 0; ; ) {
      let r = false;
      if (this.type.isAnonymous || t(this) !== false) {
        if (this.firstChild()) {
          n++;
          continue;
        }
        this.type.isAnonymous || (r = true);
      }
      for (; ; ) {
        if (r && e && e(this), r = this.type.isAnonymous, !n) return;
        if (this.nextSibling()) break;
        this.parent(), n--, r = true;
      }
    }
  }
  matchContext(t) {
    if (!this.buffer) return nm(this.node.parent, t);
    let { buffer: e } = this.buffer, { types: n } = e.set;
    for (let r = t.length - 1, a = this.stack.length - 1; r >= 0; a--) {
      if (a < 0) return nm(this._tree, t, r);
      let u = n[e.buffer[this.stack[a]]];
      if (!u.isAnonymous) {
        if (t[r] && t[r] != u.name) return false;
        r--;
      }
    }
    return true;
  }
}
function zm(l) {
  return l.children.some((t) => t instanceof sl || !t.type.isAnonymous || zm(t));
}
function YT(l) {
  var t;
  let { buffer: e, nodeSet: n, maxBufferLength: r = LT, reused: a = [], minRepeatType: u = n.types.length } = l, f = Array.isArray(e) ? new Rm(e, e.length) : e, h = n.types, g = 0, p = 0;
  function y(_, G, V, lt, tt, pt) {
    let { id: at, start: I, end: ft, size: ht } = f, yt = p, z = g;
    if (ht < 0) if (f.next(), ht == -1) {
      let M = a[at];
      V.push(M), lt.push(I - _);
      return;
    } else if (ht == -3) {
      g = at;
      return;
    } else if (ht == -4) {
      p = at;
      return;
    } else throw new RangeError(`Unrecognized record size: ${ht}`);
    let Z = h[at], it, rt, mt = I - _;
    if (ft - I <= r && (rt = T(f.pos - G, tt))) {
      let M = new Uint16Array(rt.size - rt.skip), H = f.pos - rt.size, W = M.length;
      for (; f.pos > H; ) W = O(rt.start, M, W);
      it = new sl(M, ft - rt.start, n), mt = rt.start - _;
    } else {
      let M = f.pos - ht;
      f.next();
      let H = [], W = [], $ = at >= u ? at : -1, dt = 0, bt = ft;
      for (; f.pos > M; ) $ >= 0 && f.id == $ && f.size >= 0 ? (f.end <= bt - r && (w(H, W, I, dt, f.end, bt, $, yt, z), dt = H.length, bt = f.end), f.next()) : pt > 2500 ? v(I, M, H, W) : y(I, M, H, W, $, pt + 1);
      if ($ >= 0 && dt > 0 && dt < H.length && w(H, W, I, dt, I, bt, $, yt, z), H.reverse(), W.reverse(), $ > -1 && dt > 0) {
        let Et = S(Z, z);
        it = Nm(Z, H, W, 0, H.length, 0, ft - I, Et, Et);
      } else it = C(Z, H, W, ft - I, yt - ft, z);
    }
    V.push(it), lt.push(mt);
  }
  function v(_, G, V, lt) {
    let tt = [], pt = 0, at = -1;
    for (; f.pos > G; ) {
      let { id: I, start: ft, end: ht, size: yt } = f;
      if (yt > 4) f.next();
      else {
        if (at > -1 && ft < at) break;
        at < 0 && (at = ht - r), tt.push(I, ft, ht), pt++, f.next();
      }
    }
    if (pt) {
      let I = new Uint16Array(pt * 4), ft = tt[tt.length - 2];
      for (let ht = tt.length - 3, yt = 0; ht >= 0; ht -= 3) I[yt++] = tt[ht], I[yt++] = tt[ht + 1] - ft, I[yt++] = tt[ht + 2] - ft, I[yt++] = yt;
      V.push(new sl(I, tt[2] - ft, n)), lt.push(ft - _);
    }
  }
  function S(_, G) {
    return (V, lt, tt) => {
      let pt = 0, at = V.length - 1, I, ft;
      if (at >= 0 && (I = V[at]) instanceof Ee) {
        if (!at && I.type == _ && I.length == tt) return I;
        (ft = I.prop(Dt.lookAhead)) && (pt = lt[at] + I.length + ft);
      }
      return C(_, V, lt, tt, pt, G);
    };
  }
  function w(_, G, V, lt, tt, pt, at, I, ft) {
    let ht = [], yt = [];
    for (; _.length > lt; ) ht.push(_.pop()), yt.push(G.pop() + V - tt);
    _.push(C(n.types[at], ht, yt, pt - tt, I - pt, ft)), G.push(tt - V);
  }
  function C(_, G, V, lt, tt, pt, at) {
    if (pt) {
      let I = [Dt.contextHash, pt];
      at = at ? [I].concat(at) : [I];
    }
    if (tt > 25) {
      let I = [Dt.lookAhead, tt];
      at = at ? [I].concat(at) : [I];
    }
    return new Ee(_, G, V, lt, at);
  }
  function T(_, G) {
    let V = f.fork(), lt = 0, tt = 0, pt = 0, at = V.end - r, I = { size: 0, start: 0, skip: 0 };
    t: for (let ft = V.pos - _; V.pos > ft; ) {
      let ht = V.size;
      if (V.id == G && ht >= 0) {
        I.size = lt, I.start = tt, I.skip = pt, pt += 4, lt += 4, V.next();
        continue;
      }
      let yt = V.pos - ht;
      if (ht < 0 || yt < ft || V.start < at) break;
      let z = V.id >= u ? 4 : 0, Z = V.start;
      for (V.next(); V.pos > yt; ) {
        if (V.size < 0) if (V.size == -3 || V.size == -4) z += 4;
        else break t;
        else V.id >= u && (z += 4);
        V.next();
      }
      tt = Z, lt += ht, pt += z;
    }
    return (G < 0 || lt == _) && (I.size = lt, I.start = tt, I.skip = pt), I.size > 4 ? I : void 0;
  }
  function O(_, G, V) {
    let { id: lt, start: tt, end: pt, size: at } = f;
    if (f.next(), at >= 0 && lt < u) {
      let I = V;
      if (at > 4) {
        let ft = f.pos - (at - 4);
        for (; f.pos > ft; ) V = O(_, G, V);
      }
      G[--V] = I, G[--V] = pt - _, G[--V] = tt - _, G[--V] = lt;
    } else at == -3 ? g = lt : at == -4 && (p = lt);
    return V;
  }
  let j = [], L = [];
  for (; f.pos > 0; ) y(l.start || 0, l.bufferStart || 0, j, L, -1, 0);
  let Q = (t = l.length) !== null && t !== void 0 ? t : j.length ? L[0] + j[0].length : 0;
  return new Ee(h[l.topID], j.reverse(), L.reverse(), Q);
}
const fb = /* @__PURE__ */ new WeakMap();
function zu(l, t) {
  if (!l.isAnonymous || t instanceof sl || t.type != l) return 1;
  let e = fb.get(t);
  if (e == null) {
    e = 1;
    for (let n of t.children) {
      if (n.type != l || !(n instanceof Ee)) {
        e = 1;
        break;
      }
      e += zu(l, n);
    }
    fb.set(t, e);
  }
  return e;
}
function Nm(l, t, e, n, r, a, u, f, h) {
  let g = 0;
  for (let w = n; w < r; w++) g += zu(l, t[w]);
  let p = Math.ceil(g * 1.5 / 8), y = [], v = [];
  function S(w, C, T, O, j) {
    for (let L = T; L < O; ) {
      let Q = L, _ = C[L], G = zu(l, w[L]);
      for (L++; L < O; L++) {
        let V = zu(l, w[L]);
        if (G + V >= p) break;
        G += V;
      }
      if (L == Q + 1) {
        if (G > p) {
          let V = w[Q];
          S(V.children, V.positions, 0, V.children.length, C[Q] + j);
          continue;
        }
        y.push(w[Q]);
      } else {
        let V = C[L - 1] + w[L - 1].length - _;
        y.push(Nm(l, w, C, Q, L, _, V, null, h));
      }
      v.push(_ + j - a);
    }
  }
  return S(t, e, n, r, 0), (f || h)(y, v, u);
}
class Nl {
  constructor(t, e, n, r, a = false, u = false) {
    this.from = t, this.to = e, this.tree = n, this.offset = r, this.open = (a ? 1 : 0) | (u ? 2 : 0);
  }
  get openStart() {
    return (this.open & 1) > 0;
  }
  get openEnd() {
    return (this.open & 2) > 0;
  }
  static addTree(t, e = [], n = false) {
    let r = [new Nl(0, t.length, t, 0, false, n)];
    for (let a of e) a.to > t.length && r.push(a);
    return r;
  }
  static applyChanges(t, e, n = 128) {
    if (!e.length) return t;
    let r = [], a = 1, u = t.length ? t[0] : null;
    for (let f = 0, h = 0, g = 0; ; f++) {
      let p = f < e.length ? e[f] : null, y = p ? p.fromA : 1e9;
      if (y - h >= n) for (; u && u.from < y; ) {
        let v = u;
        if (h >= v.from || y <= v.to || g) {
          let S = Math.max(v.from, h) - g, w = Math.min(v.to, y) - g;
          v = S >= w ? null : new Nl(S, w, v.tree, v.offset + g, f > 0, !!p);
        }
        if (v && r.push(v), u.to > y) break;
        u = a < t.length ? t[a++] : null;
      }
      if (!p) break;
      h = p.toA, g = p.toA - p.toB;
    }
    return r;
  }
}
class GT {
  startParse(t, e, n) {
    return typeof t == "string" && (t = new XT(t)), n = n ? n.length ? n.map((r) => new nd(r.from, r.to)) : [new nd(0, 0)] : [new nd(0, t.length)], this.createParse(t, e || [], n);
  }
  parse(t, e, n) {
    let r = this.startParse(t, e, n);
    for (; ; ) {
      let a = r.advance();
      if (a) return a;
    }
  }
}
class XT {
  constructor(t) {
    this.string = t;
  }
  get length() {
    return this.string.length;
  }
  chunk(t) {
    return this.string.slice(t);
  }
  get lineChunks() {
    return false;
  }
  read(t, e) {
    return this.string.slice(t, e);
  }
}
new Dt({ perNode: true });
let KT = 0;
class vi {
  constructor(t, e, n, r) {
    this.name = t, this.set = e, this.base = n, this.modified = r, this.id = KT++;
  }
  toString() {
    let { name: t } = this;
    for (let e of this.modified) e.name && (t = `${e.name}(${t})`);
    return t;
  }
  static define(t, e) {
    let n = typeof t == "string" ? t : "?";
    if (t instanceof vi && (e = t), e == null ? void 0 : e.base) throw new Error("Can not derive from a modified tag");
    let r = new vi(n, [], null, []);
    if (r.set.push(r), e) for (let a of e.set) r.set.push(a);
    return r;
  }
  static defineModifier(t) {
    let e = new Ku(t);
    return (n) => n.modified.indexOf(e) > -1 ? n : Ku.get(n.base || n, n.modified.concat(e).sort((r, a) => r.id - a.id));
  }
}
let QT = 0;
class Ku {
  constructor(t) {
    this.name = t, this.instances = [], this.id = QT++;
  }
  static get(t, e) {
    if (!e.length) return t;
    let n = e[0].instances.find((f) => f.base == t && ZT(e, f.modified));
    if (n) return n;
    let r = [], a = new vi(t.name, r, t, e);
    for (let f of e) f.instances.push(a);
    let u = WT(e);
    for (let f of t.set) if (!f.modified.length) for (let h of u) r.push(Ku.get(f, h));
    return a;
  }
}
function ZT(l, t) {
  return l.length == t.length && l.every((e, n) => e == t[n]);
}
function WT(l) {
  let t = [[]];
  for (let e = 0; e < l.length; e++) for (let n = 0, r = t.length; n < r; n++) t.push(t[n].concat(l[e]));
  return t.sort((e, n) => n.length - e.length);
}
function JT(l) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let e in l) {
    let n = l[e];
    Array.isArray(n) || (n = [n]);
    for (let r of e.split(" ")) if (r) {
      let a = [], u = 2, f = r;
      for (let y = 0; ; ) {
        if (f == "..." && y > 0 && y + 3 == r.length) {
          u = 1;
          break;
        }
        let v = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(f);
        if (!v) throw new RangeError("Invalid path: " + r);
        if (a.push(v[0] == "*" ? "" : v[0][0] == '"' ? JSON.parse(v[0]) : v[0]), y += v[0].length, y == r.length) break;
        let S = r[y++];
        if (y == r.length && S == "!") {
          u = 0;
          break;
        }
        if (S != "/") throw new RangeError("Invalid path: " + r);
        f = r.slice(y);
      }
      let h = a.length - 1, g = a[h];
      if (!g) throw new RangeError("Invalid path: " + r);
      let p = new ya(n, u, h > 0 ? a.slice(0, h) : null);
      t[g] = p.sort(t[g]);
    }
  }
  return ES.add(t);
}
const ES = new Dt({ combine(l, t) {
  let e, n, r;
  for (; l || t; ) {
    if (!l || t && l.depth >= t.depth ? (r = t, t = t.next) : (r = l, l = l.next), e && e.mode == r.mode && !r.context && !e.context) continue;
    let a = new ya(r.tags, r.mode, r.context);
    e ? e.next = a : n = a, e = a;
  }
  return n;
} });
class ya {
  constructor(t, e, n, r) {
    this.tags = t, this.mode = e, this.context = n, this.next = r;
  }
  get opaque() {
    return this.mode == 0;
  }
  get inherit() {
    return this.mode == 1;
  }
  sort(t) {
    return !t || t.depth < this.depth ? (this.next = t, this) : (t.next = this.sort(t.next), t);
  }
  get depth() {
    return this.context ? this.context.length : 0;
  }
}
ya.empty = new ya([], 2, null);
function BS(l, t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let a of l) if (!Array.isArray(a.tag)) e[a.tag.id] = a.class;
  else for (let u of a.tag) e[u.id] = a.class;
  let { scope: n, all: r = null } = t || {};
  return { style: (a) => {
    let u = r;
    for (let f of a) for (let h of f.set) {
      let g = e[h.id];
      if (g) {
        u = u ? u + " " + g : g;
        break;
      }
    }
    return u;
  }, scope: n };
}
function FT(l, t) {
  let e = null;
  for (let n of l) {
    let r = n.style(t);
    r && (e = e ? e + " " + r : r);
  }
  return e;
}
function PT(l, t, e, n = 0, r = l.length) {
  let a = new IT(n, Array.isArray(t) ? t : [t], e);
  a.highlightRange(l.cursor(), n, r, "", a.highlighters), a.flush(r);
}
class IT {
  constructor(t, e, n) {
    this.at = t, this.highlighters = e, this.span = n, this.class = "";
  }
  startSpan(t, e) {
    e != this.class && (this.flush(t), t > this.at && (this.at = t), this.class = e);
  }
  flush(t) {
    t > this.at && this.class && this.span(this.at, t, this.class);
  }
  highlightRange(t, e, n, r, a) {
    let { type: u, from: f, to: h } = t;
    if (f >= n || h <= e) return;
    u.isTop && (a = this.highlighters.filter((S) => !S.scope || S.scope(u)));
    let g = r, p = $T(t) || ya.empty, y = FT(a, p.tags);
    if (y && (g && (g += " "), g += y, p.mode == 1 && (r += (r ? " " : "") + y)), this.startSpan(Math.max(e, f), g), p.opaque) return;
    let v = t.tree && t.tree.prop(Dt.mounted);
    if (v && v.overlay) {
      let S = t.node.enter(v.overlay[0].from + f, 1), w = this.highlighters.filter((T) => !T.scope || T.scope(v.tree.type)), C = t.firstChild();
      for (let T = 0, O = f; ; T++) {
        let j = T < v.overlay.length ? v.overlay[T] : null, L = j ? j.from + f : h, Q = Math.max(e, O), _ = Math.min(n, L);
        if (Q < _ && C) for (; t.from < _ && (this.highlightRange(t, Q, _, r, a), this.startSpan(Math.min(_, t.to), g), !(t.to >= L || !t.nextSibling())); ) ;
        if (!j || L > n) break;
        O = j.to + f, O > e && (this.highlightRange(S.cursor(), Math.max(e, j.from + f), Math.min(n, O), "", w), this.startSpan(Math.min(n, O), g));
      }
      C && t.parent();
    } else if (t.firstChild()) {
      v && (r = "");
      do
        if (!(t.to <= e)) {
          if (t.from >= n) break;
          this.highlightRange(t, e, n, r, a), this.startSpan(Math.min(n, t.to), g);
        }
      while (t.nextSibling());
      t.parent();
    }
  }
}
function $T(l) {
  let t = l.type.prop(ES);
  for (; t && t.context && !l.matchContext(t.context); ) t = t.next;
  return t || null;
}
const J = vi.define, gu = J(), Jn = J(), hb = J(Jn), db = J(Jn), Fn = J(), pu = J(Fn), ld = J(Fn), ji = J(), kl = J(ji), Vi = J(), qi = J(), sm = J(), Qr = J(sm), yu = J(), q = { comment: gu, lineComment: J(gu), blockComment: J(gu), docComment: J(gu), name: Jn, variableName: J(Jn), typeName: hb, tagName: J(hb), propertyName: db, attributeName: J(db), className: J(Jn), labelName: J(Jn), namespace: J(Jn), macroName: J(Jn), literal: Fn, string: pu, docString: J(pu), character: J(pu), attributeValue: J(pu), number: ld, integer: J(ld), float: J(ld), bool: J(Fn), regexp: J(Fn), escape: J(Fn), color: J(Fn), url: J(Fn), keyword: Vi, self: J(Vi), null: J(Vi), atom: J(Vi), unit: J(Vi), modifier: J(Vi), operatorKeyword: J(Vi), controlKeyword: J(Vi), definitionKeyword: J(Vi), moduleKeyword: J(Vi), operator: qi, derefOperator: J(qi), arithmeticOperator: J(qi), logicOperator: J(qi), bitwiseOperator: J(qi), compareOperator: J(qi), updateOperator: J(qi), definitionOperator: J(qi), typeOperator: J(qi), controlOperator: J(qi), punctuation: sm, separator: J(sm), bracket: Qr, angleBracket: J(Qr), squareBracket: J(Qr), paren: J(Qr), brace: J(Qr), content: ji, heading: kl, heading1: J(kl), heading2: J(kl), heading3: J(kl), heading4: J(kl), heading5: J(kl), heading6: J(kl), contentSeparator: J(ji), list: J(ji), quote: J(ji), emphasis: J(ji), strong: J(ji), link: J(ji), monospace: J(ji), strikethrough: J(ji), inserted: J(), deleted: J(), changed: J(), invalid: J(), meta: yu, documentMeta: J(yu), annotation: J(yu), processingInstruction: J(yu), definition: vi.defineModifier("definition"), constant: vi.defineModifier("constant"), function: vi.defineModifier("function"), standard: vi.defineModifier("standard"), local: vi.defineModifier("local"), special: vi.defineModifier("special") };
for (let l in q) {
  let t = q[l];
  t instanceof vi && (t.name = l);
}
BS([{ tag: q.link, class: "tok-link" }, { tag: q.heading, class: "tok-heading" }, { tag: q.emphasis, class: "tok-emphasis" }, { tag: q.strong, class: "tok-strong" }, { tag: q.keyword, class: "tok-keyword" }, { tag: q.atom, class: "tok-atom" }, { tag: q.bool, class: "tok-bool" }, { tag: q.url, class: "tok-url" }, { tag: q.labelName, class: "tok-labelName" }, { tag: q.inserted, class: "tok-inserted" }, { tag: q.deleted, class: "tok-deleted" }, { tag: q.literal, class: "tok-literal" }, { tag: q.string, class: "tok-string" }, { tag: q.number, class: "tok-number" }, { tag: [q.regexp, q.escape, q.special(q.string)], class: "tok-string2" }, { tag: q.variableName, class: "tok-variableName" }, { tag: q.local(q.variableName), class: "tok-variableName tok-local" }, { tag: q.definition(q.variableName), class: "tok-variableName tok-definition" }, { tag: q.special(q.variableName), class: "tok-variableName2" }, { tag: q.definition(q.propertyName), class: "tok-propertyName tok-definition" }, { tag: q.typeName, class: "tok-typeName" }, { tag: q.namespace, class: "tok-namespace" }, { tag: q.className, class: "tok-className" }, { tag: q.macroName, class: "tok-macroName" }, { tag: q.propertyName, class: "tok-propertyName" }, { tag: q.operator, class: "tok-operator" }, { tag: q.comment, class: "tok-comment" }, { tag: q.meta, class: "tok-meta" }, { tag: q.invalid, class: "tok-invalid" }, { tag: q.punctuation, class: "tok-punctuation" }]);
var sd;
const $r = new Dt(), tk = new Dt();
class Ki {
  constructor(t, e, n = [], r = "") {
    this.data = t, this.name = r, Ot.prototype.hasOwnProperty("tree") || Object.defineProperty(Ot.prototype, "tree", { get() {
      return Be(this);
    } }), this.parser = e, this.extension = [rl.of(this), Ot.languageData.of((a, u, f) => {
      let h = mb(a, u, f), g = h.type.prop($r);
      if (!g) return [];
      let p = a.facet(g), y = h.type.prop(tk);
      if (y) {
        let v = h.resolve(u - h.from, f);
        for (let S of y) if (S.test(v, a)) {
          let w = a.facet(S.facet);
          return S.type == "replace" ? w : w.concat(p);
        }
      }
      return p;
    })].concat(n);
  }
  isActiveAt(t, e, n = -1) {
    return mb(t, e, n).type.prop($r) == this.data;
  }
  findRegions(t) {
    let e = t.facet(rl);
    if ((e == null ? void 0 : e.data) == this.data) return [{ from: 0, to: t.doc.length }];
    if (!e || !e.allowsNesting) return [];
    let n = [], r = (a, u) => {
      if (a.prop($r) == this.data) {
        n.push({ from: u, to: u + a.length });
        return;
      }
      let f = a.prop(Dt.mounted);
      if (f) {
        if (f.tree.prop($r) == this.data) {
          if (f.overlay) for (let h of f.overlay) n.push({ from: h.from + u, to: h.to + u });
          else n.push({ from: u, to: u + a.length });
          return;
        } else if (f.overlay) {
          let h = n.length;
          if (r(f.tree, f.overlay[0].from + u), n.length > h) return;
        }
      }
      for (let h = 0; h < a.children.length; h++) {
        let g = a.children[h];
        g instanceof Ee && r(g, a.positions[h] + u);
      }
    };
    return r(Be(t), 0), n;
  }
  get allowsNesting() {
    return true;
  }
}
Ki.setState = St.define();
function mb(l, t, e) {
  let n = l.facet(rl), r = Be(l).topNode;
  if (!n || n.allowsNesting) for (let a = r; a; a = a.enter(t, e, Ae.ExcludeBuffers)) a.type.isTop && (r = a);
  return r;
}
function Be(l) {
  let t = l.field(Ki.state, false);
  return t ? t.tree : Ee.empty;
}
class ek {
  constructor(t) {
    this.doc = t, this.cursorPos = 0, this.string = "", this.cursor = t.iter();
  }
  get length() {
    return this.doc.length;
  }
  syncTo(t) {
    return this.string = this.cursor.next(t - this.cursorPos).value, this.cursorPos = t + this.string.length, this.cursorPos - this.string.length;
  }
  chunk(t) {
    return this.syncTo(t), this.string;
  }
  get lineChunks() {
    return true;
  }
  read(t, e) {
    let n = this.cursorPos - this.string.length;
    return t < n || e >= this.cursorPos ? this.doc.sliceString(t, e) : this.string.slice(t - n, e - n);
  }
}
let Zr = null;
class Qu {
  constructor(t, e, n = [], r, a, u, f, h) {
    this.parser = t, this.state = e, this.fragments = n, this.tree = r, this.treeLen = a, this.viewport = u, this.skipped = f, this.scheduleOn = h, this.parse = null, this.tempSkipped = [];
  }
  static create(t, e, n) {
    return new Qu(t, e, [], Ee.empty, 0, n, [], null);
  }
  startParse() {
    return this.parser.startParse(new ek(this.state.doc), this.fragments);
  }
  work(t, e) {
    return e != null && e >= this.state.doc.length && (e = void 0), this.tree != Ee.empty && this.isDone(e ?? this.state.doc.length) ? (this.takeTree(), true) : this.withContext(() => {
      var n;
      if (typeof t == "number") {
        let r = Date.now() + t;
        t = () => Date.now() > r;
      }
      for (this.parse || (this.parse = this.startParse()), e != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > e) && e < this.state.doc.length && this.parse.stopAt(e); ; ) {
        let r = this.parse.advance();
        if (r) if (this.fragments = this.withoutTempSkipped(Nl.addTree(r, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (n = this.parse.stoppedAt) !== null && n !== void 0 ? n : this.state.doc.length, this.tree = r, this.parse = null, this.treeLen < (e ?? this.state.doc.length)) this.parse = this.startParse();
        else return true;
        if (t()) return false;
      }
    });
  }
  takeTree() {
    let t, e;
    this.parse && (t = this.parse.parsedPos) >= this.treeLen && ((this.parse.stoppedAt == null || this.parse.stoppedAt > t) && this.parse.stopAt(t), this.withContext(() => {
      for (; !(e = this.parse.advance()); ) ;
    }), this.treeLen = t, this.tree = e, this.fragments = this.withoutTempSkipped(Nl.addTree(this.tree, this.fragments, true)), this.parse = null);
  }
  withContext(t) {
    let e = Zr;
    Zr = this;
    try {
      return t();
    } finally {
      Zr = e;
    }
  }
  withoutTempSkipped(t) {
    for (let e; e = this.tempSkipped.pop(); ) t = gb(t, e.from, e.to);
    return t;
  }
  changes(t, e) {
    let { fragments: n, tree: r, treeLen: a, viewport: u, skipped: f } = this;
    if (this.takeTree(), !t.empty) {
      let h = [];
      if (t.iterChangedRanges((g, p, y, v) => h.push({ fromA: g, toA: p, fromB: y, toB: v })), n = Nl.applyChanges(n, h), r = Ee.empty, a = 0, u = { from: t.mapPos(u.from, -1), to: t.mapPos(u.to, 1) }, this.skipped.length) {
        f = [];
        for (let g of this.skipped) {
          let p = t.mapPos(g.from, 1), y = t.mapPos(g.to, -1);
          p < y && f.push({ from: p, to: y });
        }
      }
    }
    return new Qu(this.parser, e, n, r, a, u, f, this.scheduleOn);
  }
  updateViewport(t) {
    if (this.viewport.from == t.from && this.viewport.to == t.to) return false;
    this.viewport = t;
    let e = this.skipped.length;
    for (let n = 0; n < this.skipped.length; n++) {
      let { from: r, to: a } = this.skipped[n];
      r < t.to && a > t.from && (this.fragments = gb(this.fragments, r, a), this.skipped.splice(n--, 1));
    }
    return this.skipped.length >= e ? false : (this.reset(), true);
  }
  reset() {
    this.parse && (this.takeTree(), this.parse = null);
  }
  skipUntilInView(t, e) {
    this.skipped.push({ from: t, to: e });
  }
  static getSkippingParser(t) {
    return new class extends GT {
      createParse(e, n, r) {
        let a = r[0].from, u = r[r.length - 1].to;
        return { parsedPos: a, advance() {
          let h = Zr;
          if (h) {
            for (let g of r) h.tempSkipped.push(g);
            t && (h.scheduleOn = h.scheduleOn ? Promise.all([h.scheduleOn, t]) : t);
          }
          return this.parsedPos = u, new Ee(Mi.none, [], [], u - a);
        }, stoppedAt: null, stopAt() {
        } };
      }
    }();
  }
  isDone(t) {
    t = Math.min(t, this.state.doc.length);
    let e = this.fragments;
    return this.treeLen >= t && e.length && e[0].from == 0 && e[0].to >= t;
  }
  static get() {
    return Zr;
  }
}
function gb(l, t, e) {
  return Nl.applyChanges(l, [{ fromA: t, toA: e, fromB: t, toB: e }]);
}
class Gs {
  constructor(t) {
    this.context = t, this.tree = t.tree;
  }
  apply(t) {
    if (!t.docChanged && this.tree == this.context.tree) return this;
    let e = this.context.changes(t.changes, t.state), n = this.context.treeLen == t.startState.doc.length ? void 0 : Math.max(t.changes.mapPos(this.context.treeLen), e.viewport.to);
    return e.work(20, n) || e.takeTree(), new Gs(e);
  }
  static init(t) {
    let e = Math.min(3e3, t.doc.length), n = Qu.create(t.facet(rl).parser, t, { from: 0, to: e });
    return n.work(20, e) || n.takeTree(), new Gs(n);
  }
}
Ki.state = Te.define({ create: Gs.init, update(l, t) {
  for (let e of t.effects) if (e.is(Ki.setState)) return e.value;
  return t.startState.facet(rl) != t.state.facet(rl) ? Gs.init(t.state) : l.apply(t);
} });
let RS = (l) => {
  let t = setTimeout(() => l(), 500);
  return () => clearTimeout(t);
};
typeof requestIdleCallback < "u" && (RS = (l) => {
  let t = -1, e = setTimeout(() => {
    t = requestIdleCallback(l, { timeout: 400 });
  }, 100);
  return () => t < 0 ? clearTimeout(e) : cancelIdleCallback(t);
});
const rd = typeof navigator < "u" && (!((sd = navigator.scheduling) === null || sd === void 0) && sd.isInputPending) ? () => navigator.scheduling.isInputPending() : null, ik = ee.fromClass(class {
  constructor(t) {
    this.view = t, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
  }
  update(t) {
    let e = this.view.state.field(Ki.state).context;
    (e.updateViewport(t.view.viewport) || this.view.viewport.to > e.treeLen) && this.scheduleWork(), (t.docChanged || t.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(e);
  }
  scheduleWork() {
    if (this.working) return;
    let { state: t } = this.view, e = t.field(Ki.state);
    (e.tree != e.context.tree || !e.context.isDone(t.doc.length)) && (this.working = RS(this.work));
  }
  work(t) {
    this.working = null;
    let e = Date.now();
    if (this.chunkEnd < e && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = e + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
    let { state: n, viewport: { to: r } } = this.view, a = n.field(Ki.state);
    if (a.tree == a.context.tree && a.context.isDone(r + 1e5)) return;
    let u = Date.now() + Math.min(this.chunkBudget, 100, t && !rd ? Math.max(25, t.timeRemaining() - 5) : 1e9), f = a.context.treeLen < r && n.doc.length > r + 1e3, h = a.context.work(() => rd && rd() || Date.now() > u, r + (f ? 0 : 1e5));
    this.chunkBudget -= Date.now() - e, (h || this.chunkBudget <= 0) && (a.context.takeTree(), this.view.dispatch({ effects: Ki.setState.of(new Gs(a.context)) })), this.chunkBudget > 0 && !(h && !f) && this.scheduleWork(), this.checkAsyncSchedule(a.context);
  }
  checkAsyncSchedule(t) {
    t.scheduleOn && (this.workScheduled++, t.scheduleOn.then(() => this.scheduleWork()).catch((e) => We(this.view.state, e)).then(() => this.workScheduled--), t.scheduleOn = null);
  }
  destroy() {
    this.working && this.working();
  }
  isWorking() {
    return !!(this.working || this.workScheduled > 0);
  }
}, { eventHandlers: { focus() {
  this.scheduleWork();
} } }), rl = et.define({ combine(l) {
  return l.length ? l[0] : null;
}, enables: (l) => [Ki.state, ik, P.contentAttributes.compute([l], (t) => {
  let e = t.facet(l);
  return e && e.name ? { "data-language": e.name } : {};
})] }), nk = et.define(), uc = et.define({ combine: (l) => {
  if (!l.length) return "  ";
  let t = l[0];
  if (!t || /\S/.test(t) || Array.from(t).some((e) => e != t[0])) throw new Error("Invalid indent unit: " + JSON.stringify(l[0]));
  return t;
} });
function Zu(l) {
  let t = l.facet(uc);
  return t.charCodeAt(0) == 9 ? l.tabSize * t.length : t.length;
}
function ba(l, t) {
  let e = "", n = l.tabSize, r = l.facet(uc)[0];
  if (r == "	") {
    for (; t >= n; ) e += "	", t -= n;
    r = " ";
  }
  for (let a = 0; a < t; a++) e += r;
  return e;
}
function _m(l, t) {
  l instanceof Ot && (l = new cc(l));
  for (let n of l.state.facet(nk)) {
    let r = n(l, t);
    if (r !== void 0) return r;
  }
  let e = Be(l.state);
  return e.length >= t ? sk(l, e, t) : null;
}
class cc {
  constructor(t, e = {}) {
    this.state = t, this.options = e, this.unit = Zu(t);
  }
  lineAt(t, e = 1) {
    let n = this.state.doc.lineAt(t), { simulateBreak: r, simulateDoubleBreak: a } = this.options;
    return r != null && r >= n.from && r <= n.to ? a && r == t ? { text: "", from: t } : (e < 0 ? r < t : r <= t) ? { text: n.text.slice(r - n.from), from: r } : { text: n.text.slice(0, r - n.from), from: n.from } : n;
  }
  textAfterPos(t, e = 1) {
    if (this.options.simulateDoubleBreak && t == this.options.simulateBreak) return "";
    let { text: n, from: r } = this.lineAt(t, e);
    return n.slice(t - r, Math.min(n.length, t + 100 - r));
  }
  column(t, e = 1) {
    let { text: n, from: r } = this.lineAt(t, e), a = this.countColumn(n, t - r), u = this.options.overrideIndentation ? this.options.overrideIndentation(r) : -1;
    return u > -1 && (a += u - this.countColumn(n, n.search(/\S|$/))), a;
  }
  countColumn(t, e = t.length) {
    return Qs(t, this.state.tabSize, e);
  }
  lineIndent(t, e = 1) {
    let { text: n, from: r } = this.lineAt(t, e), a = this.options.overrideIndentation;
    if (a) {
      let u = a(r);
      if (u > -1) return u;
    }
    return this.countColumn(n, n.search(/\S|$/));
  }
  get simulatedBreak() {
    return this.options.simulateBreak || null;
  }
}
const lk = new Dt();
function sk(l, t, e) {
  let n = t.resolveStack(e), r = t.resolveInner(e, -1).resolve(e, 0).enterUnfinishedNodesBefore(e);
  if (r != n.node) {
    let a = [];
    for (let u = r; u && !(u.from < n.node.from || u.to > n.node.to || u.from == n.node.from && u.type == n.node.type); u = u.parent) a.push(u);
    for (let u = a.length - 1; u >= 0; u--) n = { node: a[u], next: n };
  }
  return zS(n, l, e);
}
function zS(l, t, e) {
  for (let n = l; n; n = n.next) {
    let r = ak(n.node);
    if (r) return r(Lm.create(t, e, n));
  }
  return 0;
}
function rk(l) {
  return l.pos == l.options.simulateBreak && l.options.simulateDoubleBreak;
}
function ak(l) {
  let t = l.type.prop(lk);
  if (t) return t;
  let e = l.firstChild, n;
  if (e && (n = e.type.prop(Dt.closedBy))) {
    let r = l.lastChild, a = r && n.indexOf(r.name) > -1;
    return (u) => fk(u, true, 1, void 0, a && !rk(u) ? r.from : void 0);
  }
  return l.parent == null ? ok : null;
}
function ok() {
  return 0;
}
class Lm extends cc {
  constructor(t, e, n) {
    super(t.state, t.options), this.base = t, this.pos = e, this.context = n;
  }
  get node() {
    return this.context.node;
  }
  static create(t, e, n) {
    return new Lm(t, e, n);
  }
  get textAfter() {
    return this.textAfterPos(this.pos);
  }
  get baseIndent() {
    return this.baseIndentFor(this.node);
  }
  baseIndentFor(t) {
    let e = this.state.doc.lineAt(t.from);
    for (; ; ) {
      let n = t.resolve(e.from);
      for (; n.parent && n.parent.from == n.from; ) n = n.parent;
      if (uk(n, t)) break;
      e = this.state.doc.lineAt(n.from);
    }
    return this.lineIndent(e.from);
  }
  continue() {
    return zS(this.context.next, this.base, this.pos);
  }
}
function uk(l, t) {
  for (let e = t; e; e = e.parent) if (l == e) return true;
  return false;
}
function ck(l) {
  let t = l.node, e = t.childAfter(t.from), n = t.lastChild;
  if (!e) return null;
  let r = l.options.simulateBreak, a = l.state.doc.lineAt(e.from), u = r == null || r <= a.from ? a.to : Math.min(a.to, r);
  for (let f = e.to; ; ) {
    let h = t.childAfter(f);
    if (!h || h == n) return null;
    if (!h.type.isSkipped) {
      if (h.from >= u) return null;
      let g = /^ */.exec(a.text.slice(e.to - a.from))[0].length;
      return { from: e.from, to: e.to + g };
    }
    f = h.to;
  }
}
function fk(l, t, e, n, r) {
  let a = l.textAfter, u = a.match(/^\s*/)[0].length, f = n && a.slice(u, u + n.length) == n || r == l.pos + u, h = ck(l);
  return h ? f ? l.column(h.from) : l.column(h.to) : l.baseIndent + (f ? 0 : l.unit * e);
}
const hk = 200;
function dk() {
  return Ot.transactionFilter.of((l) => {
    if (!l.docChanged || !l.isUserEvent("input.type") && !l.isUserEvent("input.complete")) return l;
    let t = l.startState.languageDataAt("indentOnInput", l.startState.selection.main.head);
    if (!t.length) return l;
    let e = l.newDoc, { head: n } = l.newSelection.main, r = e.lineAt(n);
    if (n > r.from + hk) return l;
    let a = e.sliceString(r.from, n);
    if (!t.some((g) => g.test(a))) return l;
    let { state: u } = l, f = -1, h = [];
    for (let { head: g } of u.selection.ranges) {
      let p = u.doc.lineAt(g);
      if (p.from == f) continue;
      f = p.from;
      let y = _m(u, p.from);
      if (y == null) continue;
      let v = /^\s*/.exec(p.text)[0], S = ba(u, y);
      v != S && h.push({ from: p.from, to: p.from + v.length, insert: S });
    }
    return h.length ? [l, { changes: h, sequential: true }] : l;
  });
}
const mk = et.define(), gk = new Dt();
function pk(l, t, e) {
  let n = Be(l);
  if (n.length < e) return null;
  let r = n.resolveStack(e, 1), a = null;
  for (let u = r; u; u = u.next) {
    let f = u.node;
    if (f.to <= e || f.from > e) continue;
    if (a && f.from < t) break;
    let h = f.type.prop(gk);
    if (h && (f.to < n.length - 50 || n.length == l.doc.length || !yk(f))) {
      let g = h(f, l);
      g && g.from <= e && g.from >= t && g.to > e && (a = g);
    }
  }
  return a;
}
function yk(l) {
  let t = l.lastChild;
  return t && t.to == l.to && t.type.isError;
}
function Wu(l, t, e) {
  for (let n of l.facet(mk)) {
    let r = n(l, t, e);
    if (r) return r;
  }
  return pk(l, t, e);
}
function NS(l, t) {
  let e = t.mapPos(l.from, 1), n = t.mapPos(l.to, -1);
  return e >= n ? void 0 : { from: e, to: n };
}
const fc = St.define({ map: NS }), Da = St.define({ map: NS });
function _S(l) {
  let t = [];
  for (let { head: e } of l.state.selection.ranges) t.some((n) => n.from <= e && n.to >= e) || t.push(l.lineBlockAt(e));
  return t;
}
const ql = Te.define({ create() {
  return ut.none;
}, update(l, t) {
  t.isUserEvent("delete") && t.changes.iterChangedRanges((e, n) => l = pb(l, e, n)), l = l.map(t.changes);
  for (let e of t.effects) if (e.is(fc) && !bk(l, e.value.from, e.value.to)) {
    let { preparePlaceholder: n } = t.state.facet(US), r = n ? ut.replace({ widget: new Mk(n(t.state, e.value)) }) : yb;
    l = l.update({ add: [r.range(e.value.from, e.value.to)] });
  } else e.is(Da) && (l = l.update({ filter: (n, r) => e.value.from != n || e.value.to != r, filterFrom: e.value.from, filterTo: e.value.to }));
  return t.selection && (l = pb(l, t.selection.main.head)), l;
}, provide: (l) => P.decorations.from(l), toJSON(l, t) {
  let e = [];
  return l.between(0, t.doc.length, (n, r) => {
    e.push(n, r);
  }), e;
}, fromJSON(l) {
  if (!Array.isArray(l) || l.length % 2) throw new RangeError("Invalid JSON for fold state");
  let t = [];
  for (let e = 0; e < l.length; ) {
    let n = l[e++], r = l[e++];
    if (typeof n != "number" || typeof r != "number") throw new RangeError("Invalid JSON for fold state");
    t.push(yb.range(n, r));
  }
  return ut.set(t, true);
} });
function pb(l, t, e = t) {
  let n = false;
  return l.between(t, e, (r, a) => {
    r < e && a > t && (n = true);
  }), n ? l.update({ filterFrom: t, filterTo: e, filter: (r, a) => r >= e || a <= t }) : l;
}
function Ju(l, t, e) {
  var n;
  let r = null;
  return (n = l.field(ql, false)) === null || n === void 0 || n.between(t, e, (a, u) => {
    (!r || r.from > a) && (r = { from: a, to: u });
  }), r;
}
function bk(l, t, e) {
  let n = false;
  return l.between(t, t, (r, a) => {
    r == t && a == e && (n = true);
  }), n;
}
function LS(l, t) {
  return l.field(ql, false) ? t : t.concat(St.appendConfig.of(VS()));
}
const vk = (l) => {
  for (let t of _S(l)) {
    let e = Wu(l.state, t.from, t.to);
    if (e) return l.dispatch({ effects: LS(l.state, [fc.of(e), HS(l, e)]) }), true;
  }
  return false;
}, Sk = (l) => {
  if (!l.state.field(ql, false)) return false;
  let t = [];
  for (let e of _S(l)) {
    let n = Ju(l.state, e.from, e.to);
    n && t.push(Da.of(n), HS(l, n, false));
  }
  return t.length && l.dispatch({ effects: t }), t.length > 0;
};
function HS(l, t, e = true) {
  let n = l.state.doc.lineAt(t.from).number, r = l.state.doc.lineAt(t.to).number;
  return P.announce.of(`${l.state.phrase(e ? "Folded lines" : "Unfolded lines")} ${n} ${l.state.phrase("to")} ${r}.`);
}
const xk = (l) => {
  let { state: t } = l, e = [];
  for (let n = 0; n < t.doc.length; ) {
    let r = l.lineBlockAt(n), a = Wu(t, r.from, r.to);
    a && e.push(fc.of(a)), n = (a ? l.lineBlockAt(a.to) : r).to + 1;
  }
  return e.length && l.dispatch({ effects: LS(l.state, e) }), !!e.length;
}, wk = (l) => {
  let t = l.state.field(ql, false);
  if (!t || !t.size) return false;
  let e = [];
  return t.between(0, l.state.doc.length, (n, r) => {
    e.push(Da.of({ from: n, to: r }));
  }), l.dispatch({ effects: e }), true;
}, Ck = [{ key: "Ctrl-Shift-[", mac: "Cmd-Alt-[", run: vk }, { key: "Ctrl-Shift-]", mac: "Cmd-Alt-]", run: Sk }, { key: "Ctrl-Alt-[", run: xk }, { key: "Ctrl-Alt-]", run: wk }], Ak = { placeholderDOM: null, preparePlaceholder: null, placeholderText: "\u2026" }, US = et.define({ combine(l) {
  return Pi(l, Ak);
} });
function VS(l) {
  return [ql, Ok];
}
function qS(l, t) {
  let { state: e } = l, n = e.facet(US), r = (u) => {
    let f = l.lineBlockAt(l.posAtDOM(u.target)), h = Ju(l.state, f.from, f.to);
    h && l.dispatch({ effects: Da.of(h) }), u.preventDefault();
  };
  if (n.placeholderDOM) return n.placeholderDOM(l, r, t);
  let a = document.createElement("span");
  return a.textContent = n.placeholderText, a.setAttribute("aria-label", e.phrase("folded code")), a.title = e.phrase("unfold"), a.className = "cm-foldPlaceholder", a.onclick = r, a;
}
const yb = ut.replace({ widget: new class extends Cn {
  toDOM(l) {
    return qS(l, null);
  }
}() });
class Mk extends Cn {
  constructor(t) {
    super(), this.value = t;
  }
  eq(t) {
    return this.value == t.value;
  }
  toDOM(t) {
    return qS(t, this.value);
  }
}
const Tk = { openText: "\u2304", closedText: "\u203A", markerDOM: null, domEventHandlers: {}, foldingChanged: () => false };
class ad extends wn {
  constructor(t, e) {
    super(), this.config = t, this.open = e;
  }
  eq(t) {
    return this.config == t.config && this.open == t.open;
  }
  toDOM(t) {
    if (this.config.markerDOM) return this.config.markerDOM(this.open);
    let e = document.createElement("span");
    return e.textContent = this.open ? this.config.openText : this.config.closedText, e.title = t.state.phrase(this.open ? "Fold line" : "Unfold line"), e;
  }
}
function kk(l = {}) {
  let t = { ...Tk, ...l }, e = new ad(t, true), n = new ad(t, false), r = ee.fromClass(class {
    constructor(u) {
      this.from = u.viewport.from, this.markers = this.buildMarkers(u);
    }
    update(u) {
      (u.docChanged || u.viewportChanged || u.startState.facet(rl) != u.state.facet(rl) || u.startState.field(ql, false) != u.state.field(ql, false) || Be(u.startState) != Be(u.state) || t.foldingChanged(u)) && (this.markers = this.buildMarkers(u.view));
    }
    buildMarkers(u) {
      let f = new Sn();
      for (let h of u.viewportLineBlocks) {
        let g = Ju(u.state, h.from, h.to) ? n : Wu(u.state, h.from, h.to) ? e : null;
        g && f.add(h.from, h.from, g);
      }
      return f.finish();
    }
  }), { domEventHandlers: a } = t;
  return [r, MT({ class: "cm-foldGutter", markers(u) {
    var f;
    return ((f = u.plugin(r)) === null || f === void 0 ? void 0 : f.markers) || Bt.empty;
  }, initialSpacer() {
    return new ad(t, false);
  }, domEventHandlers: { ...a, click: (u, f, h) => {
    if (a.click && a.click(u, f, h)) return true;
    let g = Ju(u.state, f.from, f.to);
    if (g) return u.dispatch({ effects: Da.of(g) }), true;
    let p = Wu(u.state, f.from, f.to);
    return p ? (u.dispatch({ effects: fc.of(p) }), true) : false;
  } } }), VS()];
}
const Ok = P.baseTheme({ ".cm-foldPlaceholder": { backgroundColor: "#eee", border: "1px solid #ddd", color: "#888", borderRadius: ".2em", margin: "0 1px", padding: "0 1px", cursor: "pointer" }, ".cm-foldGutter span": { padding: "0 1px", cursor: "pointer" } });
class Ea {
  constructor(t, e) {
    this.specs = t;
    let n;
    function r(f) {
      let h = il.newName();
      return (n || (n = /* @__PURE__ */ Object.create(null)))["." + h] = f, h;
    }
    const a = typeof e.all == "string" ? e.all : e.all ? r(e.all) : void 0, u = e.scope;
    this.scope = u instanceof Ki ? (f) => f.prop($r) == u.data : u ? (f) => f == u : void 0, this.style = BS(t.map((f) => ({ tag: f.tag, class: f.class || r(Object.assign({}, f, { tag: null })) })), { all: a }).style, this.module = n ? new il(n) : null, this.themeType = e.themeType;
  }
  static define(t, e) {
    return new Ea(t, e || {});
  }
}
const rm = et.define(), jS = et.define({ combine(l) {
  return l.length ? [l[0]] : null;
} });
function od(l) {
  let t = l.facet(rm);
  return t.length ? t : l.facet(jS);
}
function YS(l, t) {
  let e = [Ek], n;
  return l instanceof Ea && (l.module && e.push(P.styleModule.of(l.module)), n = l.themeType), (t == null ? void 0 : t.fallback) ? e.push(jS.of(l)) : n ? e.push(rm.computeN([P.darkTheme], (r) => r.facet(P.darkTheme) == (n == "dark") ? [l] : [])) : e.push(rm.of(l)), e;
}
class Dk {
  constructor(t) {
    this.markCache = /* @__PURE__ */ Object.create(null), this.tree = Be(t.state), this.decorations = this.buildDeco(t, od(t.state)), this.decoratedTo = t.viewport.to;
  }
  update(t) {
    let e = Be(t.state), n = od(t.state), r = n != od(t.startState), { viewport: a } = t.view, u = t.changes.mapPos(this.decoratedTo, 1);
    e.length < a.to && !r && e.type == this.tree.type && u >= a.to ? (this.decorations = this.decorations.map(t.changes), this.decoratedTo = u) : (e != this.tree || t.viewportChanged || r) && (this.tree = e, this.decorations = this.buildDeco(t.view, n), this.decoratedTo = a.to);
  }
  buildDeco(t, e) {
    if (!e || !this.tree.length) return ut.none;
    let n = new Sn();
    for (let { from: r, to: a } of t.visibleRanges) PT(this.tree, e, (u, f, h) => {
      n.add(u, f, this.markCache[h] || (this.markCache[h] = ut.mark({ class: h })));
    }, r, a);
    return n.finish();
  }
}
const Ek = jl.high(ee.fromClass(Dk, { decorations: (l) => l.decorations })), Bk = Ea.define([{ tag: q.meta, color: "#404740" }, { tag: q.link, textDecoration: "underline" }, { tag: q.heading, textDecoration: "underline", fontWeight: "bold" }, { tag: q.emphasis, fontStyle: "italic" }, { tag: q.strong, fontWeight: "bold" }, { tag: q.strikethrough, textDecoration: "line-through" }, { tag: q.keyword, color: "#708" }, { tag: [q.atom, q.bool, q.url, q.contentSeparator, q.labelName], color: "#219" }, { tag: [q.literal, q.inserted], color: "#164" }, { tag: [q.string, q.deleted], color: "#a11" }, { tag: [q.regexp, q.escape, q.special(q.string)], color: "#e40" }, { tag: q.definition(q.variableName), color: "#00f" }, { tag: q.local(q.variableName), color: "#30a" }, { tag: [q.typeName, q.namespace], color: "#085" }, { tag: q.className, color: "#167" }, { tag: [q.special(q.variableName), q.macroName], color: "#256" }, { tag: q.definition(q.propertyName), color: "#00c" }, { tag: q.comment, color: "#940" }, { tag: q.invalid, color: "#f00" }]), Rk = P.baseTheme({ "&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" }, "&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" } }), GS = 1e4, XS = "()[]{}", KS = et.define({ combine(l) {
  return Pi(l, { afterCursor: true, brackets: XS, maxScanDistance: GS, renderMatch: _k });
} }), zk = ut.mark({ class: "cm-matchingBracket" }), Nk = ut.mark({ class: "cm-nonmatchingBracket" });
function _k(l) {
  let t = [], e = l.matched ? zk : Nk;
  return t.push(e.range(l.start.from, l.start.to)), l.end && t.push(e.range(l.end.from, l.end.to)), t;
}
const Lk = Te.define({ create() {
  return ut.none;
}, update(l, t) {
  if (!t.docChanged && !t.selection) return l;
  let e = [], n = t.state.facet(KS);
  for (let r of t.state.selection.ranges) {
    if (!r.empty) continue;
    let a = Qi(t.state, r.head, -1, n) || r.head > 0 && Qi(t.state, r.head - 1, 1, n) || n.afterCursor && (Qi(t.state, r.head, 1, n) || r.head < t.state.doc.length && Qi(t.state, r.head + 1, -1, n));
    a && (e = e.concat(n.renderMatch(a, t.state)));
  }
  return ut.set(e, true);
}, provide: (l) => P.decorations.from(l) }), Hk = [Lk, Rk];
function Uk(l = {}) {
  return [KS.of(l), Hk];
}
const Vk = new Dt();
function am(l, t, e) {
  let n = l.prop(t < 0 ? Dt.openedBy : Dt.closedBy);
  if (n) return n;
  if (l.name.length == 1) {
    let r = e.indexOf(l.name);
    if (r > -1 && r % 2 == (t < 0 ? 1 : 0)) return [e[r + t]];
  }
  return null;
}
function om(l) {
  let t = l.type.prop(Vk);
  return t ? t(l.node) : l;
}
function Qi(l, t, e, n = {}) {
  let r = n.maxScanDistance || GS, a = n.brackets || XS, u = Be(l), f = u.resolveInner(t, e);
  for (let h = f; h; h = h.parent) {
    let g = am(h.type, e, a);
    if (g && h.from < h.to) {
      let p = om(h);
      if (p && (e > 0 ? t >= p.from && t < p.to : t > p.from && t <= p.to)) return qk(l, t, e, h, p, g, a);
    }
  }
  return jk(l, t, e, u, f.type, r, a);
}
function qk(l, t, e, n, r, a, u) {
  let f = n.parent, h = { from: r.from, to: r.to }, g = 0, p = f == null ? void 0 : f.cursor();
  if (p && (e < 0 ? p.childBefore(n.from) : p.childAfter(n.to))) do
    if (e < 0 ? p.to <= n.from : p.from >= n.to) {
      if (g == 0 && a.indexOf(p.type.name) > -1 && p.from < p.to) {
        let y = om(p);
        return { start: h, end: y ? { from: y.from, to: y.to } : void 0, matched: true };
      } else if (am(p.type, e, u)) g++;
      else if (am(p.type, -e, u)) {
        if (g == 0) {
          let y = om(p);
          return { start: h, end: y && y.from < y.to ? { from: y.from, to: y.to } : void 0, matched: false };
        }
        g--;
      }
    }
  while (e < 0 ? p.prevSibling() : p.nextSibling());
  return { start: h, matched: false };
}
function jk(l, t, e, n, r, a, u) {
  let f = e < 0 ? l.sliceDoc(t - 1, t) : l.sliceDoc(t, t + 1), h = u.indexOf(f);
  if (h < 0 || h % 2 == 0 != e > 0) return null;
  let g = { from: e < 0 ? t - 1 : t, to: e > 0 ? t + 1 : t }, p = l.doc.iterRange(t, e > 0 ? l.doc.length : 0), y = 0;
  for (let v = 0; !p.next().done && v <= a; ) {
    let S = p.value;
    e < 0 && (v += S.length);
    let w = t + v * e;
    for (let C = e > 0 ? 0 : S.length - 1, T = e > 0 ? S.length : -1; C != T; C += e) {
      let O = u.indexOf(S[C]);
      if (!(O < 0 || n.resolveInner(w + C, 1).type != r)) if (O % 2 == 0 == e > 0) y++;
      else {
        if (y == 1) return { start: g, end: { from: w + C, to: w + C + 1 }, matched: O >> 1 == h >> 1 };
        y--;
      }
    }
    e > 0 && (v += S.length);
  }
  return p.done ? { start: g, matched: false } : null;
}
const Yk = /* @__PURE__ */ Object.create(null), bb = [Mi.none], vb = [], Sb = /* @__PURE__ */ Object.create(null), Gk = /* @__PURE__ */ Object.create(null);
for (let [l, t] of [["variable", "variableName"], ["variable-2", "variableName.special"], ["string-2", "string.special"], ["def", "variableName.definition"], ["tag", "tagName"], ["attribute", "attributeName"], ["type", "typeName"], ["builtin", "variableName.standard"], ["qualifier", "modifier"], ["error", "invalid"], ["header", "heading"], ["property", "propertyName"]]) Gk[l] = Xk(Yk, t);
function ud(l, t) {
  vb.indexOf(l) > -1 || (vb.push(l), console.warn(t));
}
function Xk(l, t) {
  let e = [];
  for (let f of t.split(" ")) {
    let h = [];
    for (let g of f.split(".")) {
      let p = l[g] || q[g];
      p ? typeof p == "function" ? h.length ? h = h.map(p) : ud(g, `Modifier ${g} used at start of tag`) : h.length ? ud(g, `Tag ${g} used as modifier`) : h = Array.isArray(p) ? p : [p] : ud(g, `Unknown highlighting tag ${g}`);
    }
    for (let g of h) e.push(g);
  }
  if (!e.length) return 0;
  let n = t.replace(/ /g, "_"), r = n + " " + e.map((f) => f.id), a = Sb[r];
  if (a) return a.id;
  let u = Sb[r] = Mi.define({ id: bb.length, name: n, props: [JT({ [n]: e })] });
  return bb.push(u), u.id;
}
Wt.RTL, Wt.LTR;
const Kk = (l) => {
  let { state: t } = l, e = t.doc.lineAt(t.selection.main.from), n = Um(l.state, e.from);
  return n.line ? Qk(l) : n.block ? Wk(l) : false;
};
function Hm(l, t) {
  return ({ state: e, dispatch: n }) => {
    if (e.readOnly) return false;
    let r = l(t, e);
    return r ? (n(e.update(r)), true) : false;
  };
}
const Qk = Hm(Pk, 0), Zk = Hm(QS, 0), Wk = Hm((l, t) => QS(l, t, Fk(t)), 0);
function Um(l, t) {
  let e = l.languageDataAt("commentTokens", t, 1);
  return e.length ? e[0] : {};
}
const Wr = 50;
function Jk(l, { open: t, close: e }, n, r) {
  let a = l.sliceDoc(n - Wr, n), u = l.sliceDoc(r, r + Wr), f = /\s*$/.exec(a)[0].length, h = /^\s*/.exec(u)[0].length, g = a.length - f;
  if (a.slice(g - t.length, g) == t && u.slice(h, h + e.length) == e) return { open: { pos: n - f, margin: f && 1 }, close: { pos: r + h, margin: h && 1 } };
  let p, y;
  r - n <= 2 * Wr ? p = y = l.sliceDoc(n, r) : (p = l.sliceDoc(n, n + Wr), y = l.sliceDoc(r - Wr, r));
  let v = /^\s*/.exec(p)[0].length, S = /\s*$/.exec(y)[0].length, w = y.length - S - e.length;
  return p.slice(v, v + t.length) == t && y.slice(w, w + e.length) == e ? { open: { pos: n + v + t.length, margin: /\s/.test(p.charAt(v + t.length)) ? 1 : 0 }, close: { pos: r - S - e.length, margin: /\s/.test(y.charAt(w - 1)) ? 1 : 0 } } : null;
}
function Fk(l) {
  let t = [];
  for (let e of l.selection.ranges) {
    let n = l.doc.lineAt(e.from), r = e.to <= n.to ? n : l.doc.lineAt(e.to);
    r.from > n.from && r.from == e.to && (r = e.to == n.to + 1 ? n : l.doc.lineAt(e.to - 1));
    let a = t.length - 1;
    a >= 0 && t[a].to > n.from ? t[a].to = r.to : t.push({ from: n.from + /^\s*/.exec(n.text)[0].length, to: r.to });
  }
  return t;
}
function QS(l, t, e = t.selection.ranges) {
  let n = e.map((a) => Um(t, a.from).block);
  if (!n.every((a) => a)) return null;
  let r = e.map((a, u) => Jk(t, n[u], a.from, a.to));
  if (l != 2 && !r.every((a) => a)) return { changes: t.changes(e.map((a, u) => r[u] ? [] : [{ from: a.from, insert: n[u].open + " " }, { from: a.to, insert: " " + n[u].close }])) };
  if (l != 1 && r.some((a) => a)) {
    let a = [];
    for (let u = 0, f; u < r.length; u++) if (f = r[u]) {
      let h = n[u], { open: g, close: p } = f;
      a.push({ from: g.pos - h.open.length, to: g.pos + g.margin }, { from: p.pos - p.margin, to: p.pos + h.close.length });
    }
    return { changes: a };
  }
  return null;
}
function Pk(l, t, e = t.selection.ranges) {
  let n = [], r = -1;
  for (let { from: a, to: u } of e) {
    let f = n.length, h = 1e9, g = Um(t, a).line;
    if (g) {
      for (let p = a; p <= u; ) {
        let y = t.doc.lineAt(p);
        if (y.from > r && (a == u || u > y.from)) {
          r = y.from;
          let v = /^\s*/.exec(y.text)[0].length, S = v == y.length, w = y.text.slice(v, v + g.length) == g ? v : -1;
          v < y.text.length && v < h && (h = v), n.push({ line: y, comment: w, token: g, indent: v, empty: S, single: false });
        }
        p = y.to + 1;
      }
      if (h < 1e9) for (let p = f; p < n.length; p++) n[p].indent < n[p].line.text.length && (n[p].indent = h);
      n.length == f + 1 && (n[f].single = true);
    }
  }
  if (l != 2 && n.some((a) => a.comment < 0 && (!a.empty || a.single))) {
    let a = [];
    for (let { line: f, token: h, indent: g, empty: p, single: y } of n) (y || !p) && a.push({ from: f.from + g, insert: h + " " });
    let u = t.changes(a);
    return { changes: u, selection: t.selection.map(u, 1) };
  } else if (l != 1 && n.some((a) => a.comment >= 0)) {
    let a = [];
    for (let { line: u, comment: f, token: h } of n) if (f >= 0) {
      let g = u.from + f, p = g + h.length;
      u.text[p - u.from] == " " && p++, a.push({ from: g, to: p });
    }
    return { changes: a };
  }
  return null;
}
const um = Fi.define(), Ik = Fi.define(), $k = et.define(), ZS = et.define({ combine(l) {
  return Pi(l, { minDepth: 100, newGroupDelay: 500, joinToEvent: (t, e) => e }, { minDepth: Math.max, newGroupDelay: Math.min, joinToEvent: (t, e) => (n, r) => t(n, r) || e(n, r) });
} }), WS = Te.define({ create() {
  return Zi.empty;
}, update(l, t) {
  let e = t.state.facet(ZS), n = t.annotation(um);
  if (n) {
    let h = Je.fromTransaction(t, n.selection), g = n.side, p = g == 0 ? l.undone : l.done;
    return h ? p = Fu(p, p.length, e.minDepth, h) : p = PS(p, t.startState.selection), new Zi(g == 0 ? n.rest : p, g == 0 ? p : n.rest);
  }
  let r = t.annotation(Ik);
  if ((r == "full" || r == "before") && (l = l.isolate()), t.annotation(de.addToHistory) === false) return t.changes.empty ? l : l.addMapping(t.changes.desc);
  let a = Je.fromTransaction(t), u = t.annotation(de.time), f = t.annotation(de.userEvent);
  return a ? l = l.addChanges(a, u, f, e, t) : t.selection && (l = l.addSelection(t.startState.selection, u, f, e.newGroupDelay)), (r == "full" || r == "after") && (l = l.isolate()), l;
}, toJSON(l) {
  return { done: l.done.map((t) => t.toJSON()), undone: l.undone.map((t) => t.toJSON()) };
}, fromJSON(l) {
  return new Zi(l.done.map(Je.fromJSON), l.undone.map(Je.fromJSON));
} });
function tO(l = {}) {
  return [WS, ZS.of(l), P.domEventHandlers({ beforeinput(t, e) {
    let n = t.inputType == "historyUndo" ? JS : t.inputType == "historyRedo" ? cm : null;
    return n ? (t.preventDefault(), n(e)) : false;
  } })];
}
function hc(l, t) {
  return function({ state: e, dispatch: n }) {
    if (!t && e.readOnly) return false;
    let r = e.field(WS, false);
    if (!r) return false;
    let a = r.pop(l, e, t);
    return a ? (n(a), true) : false;
  };
}
const JS = hc(0, false), cm = hc(1, false), eO = hc(0, true), iO = hc(1, true);
class Je {
  constructor(t, e, n, r, a) {
    this.changes = t, this.effects = e, this.mapped = n, this.startSelection = r, this.selectionsAfter = a;
  }
  setSelAfter(t) {
    return new Je(this.changes, this.effects, this.mapped, this.startSelection, t);
  }
  toJSON() {
    var t, e, n;
    return { changes: (t = this.changes) === null || t === void 0 ? void 0 : t.toJSON(), mapped: (e = this.mapped) === null || e === void 0 ? void 0 : e.toJSON(), startSelection: (n = this.startSelection) === null || n === void 0 ? void 0 : n.toJSON(), selectionsAfter: this.selectionsAfter.map((r) => r.toJSON()) };
  }
  static fromJSON(t) {
    return new Je(t.changes && he.fromJSON(t.changes), [], t.mapped && Wi.fromJSON(t.mapped), t.startSelection && K.fromJSON(t.startSelection), t.selectionsAfter.map(K.fromJSON));
  }
  static fromTransaction(t, e) {
    let n = Si;
    for (let r of t.startState.facet($k)) {
      let a = r(t);
      a.length && (n = n.concat(a));
    }
    return !n.length && t.changes.empty ? null : new Je(t.changes.invert(t.startState.doc), n, void 0, e || t.startState.selection, Si);
  }
  static selection(t) {
    return new Je(void 0, Si, void 0, void 0, t);
  }
}
function Fu(l, t, e, n) {
  let r = t + 1 > e + 20 ? t - e - 1 : 0, a = l.slice(r, t);
  return a.push(n), a;
}
function nO(l, t) {
  let e = [], n = false;
  return l.iterChangedRanges((r, a) => e.push(r, a)), t.iterChangedRanges((r, a, u, f) => {
    for (let h = 0; h < e.length; ) {
      let g = e[h++], p = e[h++];
      f >= g && u <= p && (n = true);
    }
  }), n;
}
function lO(l, t) {
  return l.ranges.length == t.ranges.length && l.ranges.filter((e, n) => e.empty != t.ranges[n].empty).length === 0;
}
function FS(l, t) {
  return l.length ? t.length ? l.concat(t) : l : t;
}
const Si = [], sO = 200;
function PS(l, t) {
  if (l.length) {
    let e = l[l.length - 1], n = e.selectionsAfter.slice(Math.max(0, e.selectionsAfter.length - sO));
    return n.length && n[n.length - 1].eq(t) ? l : (n.push(t), Fu(l, l.length - 1, 1e9, e.setSelAfter(n)));
  } else return [Je.selection([t])];
}
function rO(l) {
  let t = l[l.length - 1], e = l.slice();
  return e[l.length - 1] = t.setSelAfter(t.selectionsAfter.slice(0, t.selectionsAfter.length - 1)), e;
}
function cd(l, t) {
  if (!l.length) return l;
  let e = l.length, n = Si;
  for (; e; ) {
    let r = aO(l[e - 1], t, n);
    if (r.changes && !r.changes.empty || r.effects.length) {
      let a = l.slice(0, e);
      return a[e - 1] = r, a;
    } else t = r.mapped, e--, n = r.selectionsAfter;
  }
  return n.length ? [Je.selection(n)] : Si;
}
function aO(l, t, e) {
  let n = FS(l.selectionsAfter.length ? l.selectionsAfter.map((f) => f.map(t)) : Si, e);
  if (!l.changes) return Je.selection(n);
  let r = l.changes.map(t), a = t.mapDesc(l.changes, true), u = l.mapped ? l.mapped.composeDesc(a) : a;
  return new Je(r, St.mapEffects(l.effects, t), u, l.startSelection.map(a), n);
}
const oO = /^(input\.type|delete)($|\.)/;
class Zi {
  constructor(t, e, n = 0, r = void 0) {
    this.done = t, this.undone = e, this.prevTime = n, this.prevUserEvent = r;
  }
  isolate() {
    return this.prevTime ? new Zi(this.done, this.undone) : this;
  }
  addChanges(t, e, n, r, a) {
    let u = this.done, f = u[u.length - 1];
    return f && f.changes && !f.changes.empty && t.changes && (!n || oO.test(n)) && (!f.selectionsAfter.length && e - this.prevTime < r.newGroupDelay && r.joinToEvent(a, nO(f.changes, t.changes)) || n == "input.type.compose") ? u = Fu(u, u.length - 1, r.minDepth, new Je(t.changes.compose(f.changes), FS(St.mapEffects(t.effects, f.changes), f.effects), f.mapped, f.startSelection, Si)) : u = Fu(u, u.length, r.minDepth, t), new Zi(u, Si, e, n);
  }
  addSelection(t, e, n, r) {
    let a = this.done.length ? this.done[this.done.length - 1].selectionsAfter : Si;
    return a.length > 0 && e - this.prevTime < r && n == this.prevUserEvent && n && /^select($|\.)/.test(n) && lO(a[a.length - 1], t) ? this : new Zi(PS(this.done, t), this.undone, e, n);
  }
  addMapping(t) {
    return new Zi(cd(this.done, t), cd(this.undone, t), this.prevTime, this.prevUserEvent);
  }
  pop(t, e, n) {
    let r = t == 0 ? this.done : this.undone;
    if (r.length == 0) return null;
    let a = r[r.length - 1], u = a.selectionsAfter[0] || e.selection;
    if (n && a.selectionsAfter.length) return e.update({ selection: a.selectionsAfter[a.selectionsAfter.length - 1], annotations: um.of({ side: t, rest: rO(r), selection: u }), userEvent: t == 0 ? "select.undo" : "select.redo", scrollIntoView: true });
    if (a.changes) {
      let f = r.length == 1 ? Si : r.slice(0, r.length - 1);
      return a.mapped && (f = cd(f, a.mapped)), e.update({ changes: a.changes, selection: a.startSelection, effects: a.effects, annotations: um.of({ side: t, rest: f, selection: u }), filter: false, userEvent: t == 0 ? "undo" : "redo", scrollIntoView: true });
    } else return null;
  }
}
Zi.empty = new Zi(Si, Si);
const uO = [{ key: "Mod-z", run: JS, preventDefault: true }, { key: "Mod-y", mac: "Mod-Shift-z", run: cm, preventDefault: true }, { linux: "Ctrl-Shift-z", run: cm, preventDefault: true }, { key: "Mod-u", run: eO, preventDefault: true }, { key: "Alt-u", mac: "Mod-Shift-u", run: iO, preventDefault: true }];
function Zs(l, t) {
  return K.create(l.ranges.map(t), l.mainIndex);
}
function Ri(l, t) {
  return l.update({ selection: t, scrollIntoView: true, userEvent: "select" });
}
function zi({ state: l, dispatch: t }, e) {
  let n = Zs(l.selection, e);
  return n.eq(l.selection, true) ? false : (t(Ri(l, n)), true);
}
function dc(l, t) {
  return K.cursor(t ? l.to : l.from);
}
function IS(l, t) {
  return zi(l, (e) => e.empty ? l.moveByChar(e, t) : dc(e, t));
}
function Re(l) {
  return l.textDirectionAt(l.state.selection.main.head) == Wt.LTR;
}
const $S = (l) => IS(l, !Re(l)), tx = (l) => IS(l, Re(l));
function ex(l, t) {
  return zi(l, (e) => e.empty ? l.moveByGroup(e, t) : dc(e, t));
}
const cO = (l) => ex(l, !Re(l)), fO = (l) => ex(l, Re(l));
function hO(l, t, e) {
  if (t.type.prop(e)) return true;
  let n = t.to - t.from;
  return n && (n > 2 || /[^\s,.;:]/.test(l.sliceDoc(t.from, t.to))) || t.firstChild;
}
function mc(l, t, e) {
  let n = Be(l).resolveInner(t.head), r = e ? Dt.closedBy : Dt.openedBy;
  for (let h = t.head; ; ) {
    let g = e ? n.childAfter(h) : n.childBefore(h);
    if (!g) break;
    hO(l, g, r) ? n = g : h = e ? g.to : g.from;
  }
  let a = n.type.prop(r), u, f;
  return a && (u = e ? Qi(l, n.from, 1) : Qi(l, n.to, -1)) && u.matched ? f = e ? u.end.to : u.end.from : f = e ? n.to : n.from, K.cursor(f, e ? -1 : 1);
}
const dO = (l) => zi(l, (t) => mc(l.state, t, !Re(l))), mO = (l) => zi(l, (t) => mc(l.state, t, Re(l)));
function ix(l, t) {
  return zi(l, (e) => {
    if (!e.empty) return dc(e, t);
    let n = l.moveVertically(e, t);
    return n.head != e.head ? n : l.moveToLineBoundary(e, t);
  });
}
const nx = (l) => ix(l, false), lx = (l) => ix(l, true);
function sx(l) {
  let t = l.scrollDOM.clientHeight < l.scrollDOM.scrollHeight - 2, e = 0, n = 0, r;
  if (t) {
    for (let a of l.state.facet(P.scrollMargins)) {
      let u = a(l);
      (u == null ? void 0 : u.top) && (e = Math.max(u == null ? void 0 : u.top, e)), (u == null ? void 0 : u.bottom) && (n = Math.max(u == null ? void 0 : u.bottom, n));
    }
    r = l.scrollDOM.clientHeight - e - n;
  } else r = (l.dom.ownerDocument.defaultView || window).innerHeight;
  return { marginTop: e, marginBottom: n, selfScroll: t, height: Math.max(l.defaultLineHeight, r - 5) };
}
function rx(l, t) {
  let e = sx(l), { state: n } = l, r = Zs(n.selection, (u) => u.empty ? l.moveVertically(u, t, e.height) : dc(u, t));
  if (r.eq(n.selection)) return false;
  let a;
  if (e.selfScroll) {
    let u = l.coordsAtPos(n.selection.main.head), f = l.scrollDOM.getBoundingClientRect(), h = f.top + e.marginTop, g = f.bottom - e.marginBottom;
    u && u.top > h && u.bottom < g && (a = P.scrollIntoView(r.main.head, { y: "start", yMargin: u.top - h }));
  }
  return l.dispatch(Ri(n, r), { effects: a }), true;
}
const xb = (l) => rx(l, false), fm = (l) => rx(l, true);
function al(l, t, e) {
  let n = l.lineBlockAt(t.head), r = l.moveToLineBoundary(t, e);
  if (r.head == t.head && r.head != (e ? n.to : n.from) && (r = l.moveToLineBoundary(t, e, false)), !e && r.head == n.from && n.length) {
    let a = /^\s*/.exec(l.state.sliceDoc(n.from, Math.min(n.from + 100, n.to)))[0].length;
    a && t.head != n.from + a && (r = K.cursor(n.from + a));
  }
  return r;
}
const gO = (l) => zi(l, (t) => al(l, t, true)), pO = (l) => zi(l, (t) => al(l, t, false)), yO = (l) => zi(l, (t) => al(l, t, !Re(l))), bO = (l) => zi(l, (t) => al(l, t, Re(l))), vO = (l) => zi(l, (t) => K.cursor(l.lineBlockAt(t.head).from, 1)), SO = (l) => zi(l, (t) => K.cursor(l.lineBlockAt(t.head).to, -1));
function xO(l, t, e) {
  let n = false, r = Zs(l.selection, (a) => {
    let u = Qi(l, a.head, -1) || Qi(l, a.head, 1) || a.head > 0 && Qi(l, a.head - 1, 1) || a.head < l.doc.length && Qi(l, a.head + 1, -1);
    if (!u || !u.end) return a;
    n = true;
    let f = u.start.from == a.head ? u.end.to : u.end.from;
    return K.cursor(f);
  });
  return n ? (t(Ri(l, r)), true) : false;
}
const wO = ({ state: l, dispatch: t }) => xO(l, t);
function Ti(l, t) {
  let e = Zs(l.state.selection, (n) => {
    let r = t(n);
    return K.range(n.anchor, r.head, r.goalColumn, r.bidiLevel || void 0);
  });
  return e.eq(l.state.selection) ? false : (l.dispatch(Ri(l.state, e)), true);
}
function ax(l, t) {
  return Ti(l, (e) => l.moveByChar(e, t));
}
const ox = (l) => ax(l, !Re(l)), ux = (l) => ax(l, Re(l));
function cx(l, t) {
  return Ti(l, (e) => l.moveByGroup(e, t));
}
const CO = (l) => cx(l, !Re(l)), AO = (l) => cx(l, Re(l)), MO = (l) => Ti(l, (t) => mc(l.state, t, !Re(l))), TO = (l) => Ti(l, (t) => mc(l.state, t, Re(l)));
function fx(l, t) {
  return Ti(l, (e) => l.moveVertically(e, t));
}
const hx = (l) => fx(l, false), dx = (l) => fx(l, true);
function mx(l, t) {
  return Ti(l, (e) => l.moveVertically(e, t, sx(l).height));
}
const wb = (l) => mx(l, false), Cb = (l) => mx(l, true), kO = (l) => Ti(l, (t) => al(l, t, true)), OO = (l) => Ti(l, (t) => al(l, t, false)), DO = (l) => Ti(l, (t) => al(l, t, !Re(l))), EO = (l) => Ti(l, (t) => al(l, t, Re(l))), BO = (l) => Ti(l, (t) => K.cursor(l.lineBlockAt(t.head).from)), RO = (l) => Ti(l, (t) => K.cursor(l.lineBlockAt(t.head).to)), Ab = ({ state: l, dispatch: t }) => (t(Ri(l, { anchor: 0 })), true), Mb = ({ state: l, dispatch: t }) => (t(Ri(l, { anchor: l.doc.length })), true), Tb = ({ state: l, dispatch: t }) => (t(Ri(l, { anchor: l.selection.main.anchor, head: 0 })), true), kb = ({ state: l, dispatch: t }) => (t(Ri(l, { anchor: l.selection.main.anchor, head: l.doc.length })), true), zO = ({ state: l, dispatch: t }) => (t(l.update({ selection: { anchor: 0, head: l.doc.length }, userEvent: "select" })), true), NO = ({ state: l, dispatch: t }) => {
  let e = gc(l).map(({ from: n, to: r }) => K.range(n, Math.min(r + 1, l.doc.length)));
  return t(l.update({ selection: K.create(e), userEvent: "select" })), true;
}, _O = ({ state: l, dispatch: t }) => {
  let e = Zs(l.selection, (n) => {
    let r = Be(l), a = r.resolveStack(n.from, 1);
    if (n.empty) {
      let u = r.resolveStack(n.from, -1);
      u.node.from >= a.node.from && u.node.to <= a.node.to && (a = u);
    }
    for (let u = a; u; u = u.next) {
      let { node: f } = u;
      if ((f.from < n.from && f.to >= n.to || f.to > n.to && f.from <= n.from) && u.next) return K.range(f.to, f.from);
    }
    return n;
  });
  return e.eq(l.selection) ? false : (t(Ri(l, e)), true);
};
function gx(l, t) {
  let { state: e } = l, n = e.selection, r = e.selection.ranges.slice();
  for (let a of e.selection.ranges) {
    let u = e.doc.lineAt(a.head);
    if (t ? u.to < l.state.doc.length : u.from > 0) for (let f = a; ; ) {
      let h = l.moveVertically(f, t);
      if (h.head < u.from || h.head > u.to) {
        r.some((g) => g.head == h.head) || r.push(h);
        break;
      } else {
        if (h.head == f.head) break;
        f = h;
      }
    }
  }
  return r.length == n.ranges.length ? false : (l.dispatch(Ri(e, K.create(r, r.length - 1))), true);
}
const LO = (l) => gx(l, false), HO = (l) => gx(l, true), UO = ({ state: l, dispatch: t }) => {
  let e = l.selection, n = null;
  return e.ranges.length > 1 ? n = K.create([e.main]) : e.main.empty || (n = K.create([K.cursor(e.main.head)])), n ? (t(Ri(l, n)), true) : false;
};
function Ba(l, t) {
  if (l.state.readOnly) return false;
  let e = "delete.selection", { state: n } = l, r = n.changeByRange((a) => {
    let { from: u, to: f } = a;
    if (u == f) {
      let h = t(a);
      h < u ? (e = "delete.backward", h = bu(l, h, false)) : h > u && (e = "delete.forward", h = bu(l, h, true)), u = Math.min(u, h), f = Math.max(f, h);
    } else u = bu(l, u, false), f = bu(l, f, true);
    return u == f ? { range: a } : { changes: { from: u, to: f }, range: K.cursor(u, u < a.head ? -1 : 1) };
  });
  return r.changes.empty ? false : (l.dispatch(n.update(r, { scrollIntoView: true, userEvent: e, effects: e == "delete.selection" ? P.announce.of(n.phrase("Selection deleted")) : void 0 })), true);
}
function bu(l, t, e) {
  if (l instanceof P) for (let n of l.state.facet(P.atomicRanges).map((r) => r(l))) n.between(t, t, (r, a) => {
    r < t && a > t && (t = e ? a : r);
  });
  return t;
}
const px = (l, t, e) => Ba(l, (n) => {
  let r = n.from, { state: a } = l, u = a.doc.lineAt(r), f, h;
  if (e && !t && r > u.from && r < u.from + 200 && !/[^ \t]/.test(f = u.text.slice(0, r - u.from))) {
    if (f[f.length - 1] == "	") return r - 1;
    let g = Qs(f, a.tabSize), p = g % Zu(a) || Zu(a);
    for (let y = 0; y < p && f[f.length - 1 - y] == " "; y++) r--;
    h = r;
  } else h = Me(u.text, r - u.from, t, t) + u.from, h == r && u.number != (t ? a.doc.lines : 1) ? h += t ? 1 : -1 : !t && /[\ufe00-\ufe0f]/.test(u.text.slice(h - u.from, r - u.from)) && (h = Me(u.text, h - u.from, false, false) + u.from);
  return h;
}), hm = (l) => px(l, false, true), yx = (l) => px(l, true, false), bx = (l, t) => Ba(l, (e) => {
  let n = e.head, { state: r } = l, a = r.doc.lineAt(n), u = r.charCategorizer(n);
  for (let f = null; ; ) {
    if (n == (t ? a.to : a.from)) {
      n == e.head && a.number != (t ? r.doc.lines : 1) && (n += t ? 1 : -1);
      break;
    }
    let h = Me(a.text, n - a.from, t) + a.from, g = a.text.slice(Math.min(n, h) - a.from, Math.max(n, h) - a.from), p = u(g);
    if (f != null && p != f) break;
    (g != " " || n != e.head) && (f = p), n = h;
  }
  return n;
}), vx = (l) => bx(l, false), VO = (l) => bx(l, true), qO = (l) => Ba(l, (t) => {
  let e = l.lineBlockAt(t.head).to;
  return t.head < e ? e : Math.min(l.state.doc.length, t.head + 1);
}), jO = (l) => Ba(l, (t) => {
  let e = l.moveToLineBoundary(t, false).head;
  return t.head > e ? e : Math.max(0, t.head - 1);
}), YO = (l) => Ba(l, (t) => {
  let e = l.moveToLineBoundary(t, true).head;
  return t.head < e ? e : Math.min(l.state.doc.length, t.head + 1);
}), GO = ({ state: l, dispatch: t }) => {
  if (l.readOnly) return false;
  let e = l.changeByRange((n) => ({ changes: { from: n.from, to: n.to, insert: Rt.of(["", ""]) }, range: K.cursor(n.from) }));
  return t(l.update(e, { scrollIntoView: true, userEvent: "input" })), true;
}, XO = ({ state: l, dispatch: t }) => {
  if (l.readOnly) return false;
  let e = l.changeByRange((n) => {
    if (!n.empty || n.from == 0 || n.from == l.doc.length) return { range: n };
    let r = n.from, a = l.doc.lineAt(r), u = r == a.from ? r - 1 : Me(a.text, r - a.from, false) + a.from, f = r == a.to ? r + 1 : Me(a.text, r - a.from, true) + a.from;
    return { changes: { from: u, to: f, insert: l.doc.slice(r, f).append(l.doc.slice(u, r)) }, range: K.cursor(f) };
  });
  return e.changes.empty ? false : (t(l.update(e, { scrollIntoView: true, userEvent: "move.character" })), true);
};
function gc(l) {
  let t = [], e = -1;
  for (let n of l.selection.ranges) {
    let r = l.doc.lineAt(n.from), a = l.doc.lineAt(n.to);
    if (!n.empty && n.to == a.from && (a = l.doc.lineAt(n.to - 1)), e >= r.number) {
      let u = t[t.length - 1];
      u.to = a.to, u.ranges.push(n);
    } else t.push({ from: r.from, to: a.to, ranges: [n] });
    e = a.number + 1;
  }
  return t;
}
function Sx(l, t, e) {
  if (l.readOnly) return false;
  let n = [], r = [];
  for (let a of gc(l)) {
    if (e ? a.to == l.doc.length : a.from == 0) continue;
    let u = l.doc.lineAt(e ? a.to + 1 : a.from - 1), f = u.length + 1;
    if (e) {
      n.push({ from: a.to, to: u.to }, { from: a.from, insert: u.text + l.lineBreak });
      for (let h of a.ranges) r.push(K.range(Math.min(l.doc.length, h.anchor + f), Math.min(l.doc.length, h.head + f)));
    } else {
      n.push({ from: u.from, to: a.from }, { from: a.to, insert: l.lineBreak + u.text });
      for (let h of a.ranges) r.push(K.range(h.anchor - f, h.head - f));
    }
  }
  return n.length ? (t(l.update({ changes: n, scrollIntoView: true, selection: K.create(r, l.selection.mainIndex), userEvent: "move.line" })), true) : false;
}
const KO = ({ state: l, dispatch: t }) => Sx(l, t, false), QO = ({ state: l, dispatch: t }) => Sx(l, t, true);
function xx(l, t, e) {
  if (l.readOnly) return false;
  let n = [];
  for (let r of gc(l)) e ? n.push({ from: r.from, insert: l.doc.slice(r.from, r.to) + l.lineBreak }) : n.push({ from: r.to, insert: l.lineBreak + l.doc.slice(r.from, r.to) });
  return t(l.update({ changes: n, scrollIntoView: true, userEvent: "input.copyline" })), true;
}
const ZO = ({ state: l, dispatch: t }) => xx(l, t, false), WO = ({ state: l, dispatch: t }) => xx(l, t, true), JO = (l) => {
  if (l.state.readOnly) return false;
  let { state: t } = l, e = t.changes(gc(t).map(({ from: r, to: a }) => (r > 0 ? r-- : a < t.doc.length && a++, { from: r, to: a }))), n = Zs(t.selection, (r) => {
    let a;
    if (l.lineWrapping) {
      let u = l.lineBlockAt(r.head), f = l.coordsAtPos(r.head, r.assoc || 1);
      f && (a = u.bottom + l.documentTop - f.bottom + l.defaultLineHeight / 2);
    }
    return l.moveVertically(r, true, a);
  }).map(e);
  return l.dispatch({ changes: e, selection: n, scrollIntoView: true, userEvent: "delete.line" }), true;
};
function FO(l, t) {
  if (/\(\)|\[\]|\{\}/.test(l.sliceDoc(t - 1, t + 1))) return { from: t, to: t };
  let e = Be(l).resolveInner(t), n = e.childBefore(t), r = e.childAfter(t), a;
  return n && r && n.to <= t && r.from >= t && (a = n.type.prop(Dt.closedBy)) && a.indexOf(r.name) > -1 && l.doc.lineAt(n.to).from == l.doc.lineAt(r.from).from && !/\S/.test(l.sliceDoc(n.to, r.from)) ? { from: n.to, to: r.from } : null;
}
const Ob = wx(false), PO = wx(true);
function wx(l) {
  return ({ state: t, dispatch: e }) => {
    if (t.readOnly) return false;
    let n = t.changeByRange((r) => {
      let { from: a, to: u } = r, f = t.doc.lineAt(a), h = !l && a == u && FO(t, a);
      l && (a = u = (u <= f.to ? f : t.doc.lineAt(u)).to);
      let g = new cc(t, { simulateBreak: a, simulateDoubleBreak: !!h }), p = _m(g, a);
      for (p == null && (p = Qs(/^\s*/.exec(t.doc.lineAt(a).text)[0], t.tabSize)); u < f.to && /\s/.test(f.text[u - f.from]); ) u++;
      h ? { from: a, to: u } = h : a > f.from && a < f.from + 100 && !/\S/.test(f.text.slice(0, a)) && (a = f.from);
      let y = ["", ba(t, p)];
      return h && y.push(ba(t, g.lineIndent(f.from, -1))), { changes: { from: a, to: u, insert: Rt.of(y) }, range: K.cursor(a + 1 + y[1].length) };
    });
    return e(t.update(n, { scrollIntoView: true, userEvent: "input" })), true;
  };
}
function Vm(l, t) {
  let e = -1;
  return l.changeByRange((n) => {
    let r = [];
    for (let u = n.from; u <= n.to; ) {
      let f = l.doc.lineAt(u);
      f.number > e && (n.empty || n.to > f.from) && (t(f, r, n), e = f.number), u = f.to + 1;
    }
    let a = l.changes(r);
    return { changes: r, range: K.range(a.mapPos(n.anchor, 1), a.mapPos(n.head, 1)) };
  });
}
const IO = ({ state: l, dispatch: t }) => {
  if (l.readOnly) return false;
  let e = /* @__PURE__ */ Object.create(null), n = new cc(l, { overrideIndentation: (a) => {
    let u = e[a];
    return u ?? -1;
  } }), r = Vm(l, (a, u, f) => {
    let h = _m(n, a.from);
    if (h == null) return;
    /\S/.test(a.text) || (h = 0);
    let g = /^\s*/.exec(a.text)[0], p = ba(l, h);
    (g != p || f.from < a.from + g.length) && (e[a.from] = h, u.push({ from: a.from, to: a.from + g.length, insert: p }));
  });
  return r.changes.empty || t(l.update(r, { userEvent: "indent" })), true;
}, Cx = ({ state: l, dispatch: t }) => l.readOnly ? false : (t(l.update(Vm(l, (e, n) => {
  n.push({ from: e.from, insert: l.facet(uc) });
}), { userEvent: "input.indent" })), true), Ax = ({ state: l, dispatch: t }) => l.readOnly ? false : (t(l.update(Vm(l, (e, n) => {
  let r = /^\s*/.exec(e.text)[0];
  if (!r) return;
  let a = Qs(r, l.tabSize), u = 0, f = ba(l, Math.max(0, a - Zu(l)));
  for (; u < r.length && u < f.length && r.charCodeAt(u) == f.charCodeAt(u); ) u++;
  n.push({ from: e.from + u, to: e.from + r.length, insert: f.slice(u) });
}), { userEvent: "delete.dedent" })), true), $O = (l) => (l.setTabFocusMode(), true), tD = [{ key: "Ctrl-b", run: $S, shift: ox, preventDefault: true }, { key: "Ctrl-f", run: tx, shift: ux }, { key: "Ctrl-p", run: nx, shift: hx }, { key: "Ctrl-n", run: lx, shift: dx }, { key: "Ctrl-a", run: vO, shift: BO }, { key: "Ctrl-e", run: SO, shift: RO }, { key: "Ctrl-d", run: yx }, { key: "Ctrl-h", run: hm }, { key: "Ctrl-k", run: qO }, { key: "Ctrl-Alt-h", run: vx }, { key: "Ctrl-o", run: GO }, { key: "Ctrl-t", run: XO }, { key: "Ctrl-v", run: fm }], eD = [{ key: "ArrowLeft", run: $S, shift: ox, preventDefault: true }, { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: cO, shift: CO, preventDefault: true }, { mac: "Cmd-ArrowLeft", run: yO, shift: DO, preventDefault: true }, { key: "ArrowRight", run: tx, shift: ux, preventDefault: true }, { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: fO, shift: AO, preventDefault: true }, { mac: "Cmd-ArrowRight", run: bO, shift: EO, preventDefault: true }, { key: "ArrowUp", run: nx, shift: hx, preventDefault: true }, { mac: "Cmd-ArrowUp", run: Ab, shift: Tb }, { mac: "Ctrl-ArrowUp", run: xb, shift: wb }, { key: "ArrowDown", run: lx, shift: dx, preventDefault: true }, { mac: "Cmd-ArrowDown", run: Mb, shift: kb }, { mac: "Ctrl-ArrowDown", run: fm, shift: Cb }, { key: "PageUp", run: xb, shift: wb }, { key: "PageDown", run: fm, shift: Cb }, { key: "Home", run: pO, shift: OO, preventDefault: true }, { key: "Mod-Home", run: Ab, shift: Tb }, { key: "End", run: gO, shift: kO, preventDefault: true }, { key: "Mod-End", run: Mb, shift: kb }, { key: "Enter", run: Ob, shift: Ob }, { key: "Mod-a", run: zO }, { key: "Backspace", run: hm, shift: hm, preventDefault: true }, { key: "Delete", run: yx, preventDefault: true }, { key: "Mod-Backspace", mac: "Alt-Backspace", run: vx, preventDefault: true }, { key: "Mod-Delete", mac: "Alt-Delete", run: VO, preventDefault: true }, { mac: "Mod-Backspace", run: jO, preventDefault: true }, { mac: "Mod-Delete", run: YO, preventDefault: true }].concat(tD.map((l) => ({ mac: l.key, run: l.run, shift: l.shift }))), iD = [{ key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: dO, shift: MO }, { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: mO, shift: TO }, { key: "Alt-ArrowUp", run: KO }, { key: "Shift-Alt-ArrowUp", run: ZO }, { key: "Alt-ArrowDown", run: QO }, { key: "Shift-Alt-ArrowDown", run: WO }, { key: "Mod-Alt-ArrowUp", run: LO }, { key: "Mod-Alt-ArrowDown", run: HO }, { key: "Escape", run: UO }, { key: "Mod-Enter", run: PO }, { key: "Alt-l", mac: "Ctrl-l", run: NO }, { key: "Mod-i", run: _O, preventDefault: true }, { key: "Mod-[", run: Ax }, { key: "Mod-]", run: Cx }, { key: "Mod-Alt-\\", run: IO }, { key: "Shift-Mod-k", run: JO }, { key: "Shift-Mod-\\", run: wO }, { key: "Mod-/", run: Kk }, { key: "Alt-A", run: Zk }, { key: "Ctrl-m", mac: "Shift-Alt-m", run: $O }].concat(eD), nD = { key: "Tab", run: Cx, shift: Ax }, Db = typeof String.prototype.normalize == "function" ? (l) => l.normalize("NFKD") : (l) => l;
class Xs {
  constructor(t, e, n = 0, r = t.length, a, u) {
    this.test = u, this.value = { from: 0, to: 0 }, this.done = false, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = t.iterRange(n, r), this.bufferStart = n, this.normalize = a ? (f) => a(Db(f)) : Db, this.query = this.normalize(e);
  }
  peek() {
    if (this.bufferPos == this.buffer.length) {
      if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
      this.bufferPos = 0, this.buffer = this.iter.value;
    }
    return Qe(this.buffer, this.bufferPos);
  }
  next() {
    for (; this.matches.length; ) this.matches.pop();
    return this.nextOverlapping();
  }
  nextOverlapping() {
    for (; ; ) {
      let t = this.peek();
      if (t < 0) return this.done = true, this;
      let e = ym(t), n = this.bufferStart + this.bufferPos;
      this.bufferPos += Gi(t);
      let r = this.normalize(e);
      if (r.length) for (let a = 0, u = n; ; a++) {
        let f = r.charCodeAt(a), h = this.match(f, u, this.bufferPos + this.bufferStart);
        if (a == r.length - 1) {
          if (h) return this.value = h, this;
          break;
        }
        u == n && a < e.length && e.charCodeAt(a) == f && u++;
      }
    }
  }
  match(t, e, n) {
    let r = null;
    for (let a = 0; a < this.matches.length; a += 2) {
      let u = this.matches[a], f = false;
      this.query.charCodeAt(u) == t && (u == this.query.length - 1 ? r = { from: this.matches[a + 1], to: n } : (this.matches[a]++, f = true)), f || (this.matches.splice(a, 2), a -= 2);
    }
    return this.query.charCodeAt(0) == t && (this.query.length == 1 ? r = { from: e, to: n } : this.matches.push(1, e)), r && this.test && !this.test(r.from, r.to, this.buffer, this.bufferStart) && (r = null), r;
  }
}
typeof Symbol < "u" && (Xs.prototype[Symbol.iterator] = function() {
  return this;
});
const Mx = { from: -1, to: -1, match: /.*/.exec("") }, qm = "gm" + (/x/.unicode == null ? "" : "u");
class Tx {
  constructor(t, e, n, r = 0, a = t.length) {
    if (this.text = t, this.to = a, this.curLine = "", this.done = false, this.value = Mx, /\\[sWDnr]|\n|\r|\[\^/.test(e)) return new kx(t, e, n, r, a);
    this.re = new RegExp(e, qm + ((n == null ? void 0 : n.ignoreCase) ? "i" : "")), this.test = n == null ? void 0 : n.test, this.iter = t.iter();
    let u = t.lineAt(r);
    this.curLineStart = u.from, this.matchPos = Pu(t, r), this.getLine(this.curLineStart);
  }
  getLine(t) {
    this.iter.next(t), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next());
  }
  nextLine() {
    this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0);
  }
  next() {
    for (let t = this.matchPos - this.curLineStart; ; ) {
      this.re.lastIndex = t;
      let e = this.matchPos <= this.to && this.re.exec(this.curLine);
      if (e) {
        let n = this.curLineStart + e.index, r = n + e[0].length;
        if (this.matchPos = Pu(this.text, r + (n == r ? 1 : 0)), n == this.curLineStart + this.curLine.length && this.nextLine(), (n < r || n > this.value.to) && (!this.test || this.test(n, r, e))) return this.value = { from: n, to: r, match: e }, this;
        t = this.matchPos - this.curLineStart;
      } else if (this.curLineStart + this.curLine.length < this.to) this.nextLine(), t = 0;
      else return this.done = true, this;
    }
  }
}
const fd = /* @__PURE__ */ new WeakMap();
class _s {
  constructor(t, e) {
    this.from = t, this.text = e;
  }
  get to() {
    return this.from + this.text.length;
  }
  static get(t, e, n) {
    let r = fd.get(t);
    if (!r || r.from >= n || r.to <= e) {
      let f = new _s(e, t.sliceString(e, n));
      return fd.set(t, f), f;
    }
    if (r.from == e && r.to == n) return r;
    let { text: a, from: u } = r;
    return u > e && (a = t.sliceString(e, u) + a, u = e), r.to < n && (a += t.sliceString(r.to, n)), fd.set(t, new _s(u, a)), new _s(e, a.slice(e - u, n - u));
  }
}
class kx {
  constructor(t, e, n, r, a) {
    this.text = t, this.to = a, this.done = false, this.value = Mx, this.matchPos = Pu(t, r), this.re = new RegExp(e, qm + ((n == null ? void 0 : n.ignoreCase) ? "i" : "")), this.test = n == null ? void 0 : n.test, this.flat = _s.get(t, r, this.chunkEnd(r + 5e3));
  }
  chunkEnd(t) {
    return t >= this.to ? this.to : this.text.lineAt(t).to;
  }
  next() {
    for (; ; ) {
      let t = this.re.lastIndex = this.matchPos - this.flat.from, e = this.re.exec(this.flat.text);
      if (e && !e[0] && e.index == t && (this.re.lastIndex = t + 1, e = this.re.exec(this.flat.text)), e) {
        let n = this.flat.from + e.index, r = n + e[0].length;
        if ((this.flat.to >= this.to || e.index + e[0].length <= this.flat.text.length - 10) && (!this.test || this.test(n, r, e))) return this.value = { from: n, to: r, match: e }, this.matchPos = Pu(this.text, r + (n == r ? 1 : 0)), this;
      }
      if (this.flat.to == this.to) return this.done = true, this;
      this.flat = _s.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + this.flat.text.length * 2));
    }
  }
}
typeof Symbol < "u" && (Tx.prototype[Symbol.iterator] = kx.prototype[Symbol.iterator] = function() {
  return this;
});
function lD(l) {
  try {
    return new RegExp(l, qm), true;
  } catch {
    return false;
  }
}
function Pu(l, t) {
  if (t >= l.length) return t;
  let e = l.lineAt(t), n;
  for (; t < e.to && (n = e.text.charCodeAt(t - e.from)) >= 56320 && n < 57344; ) t++;
  return t;
}
function dm(l) {
  let t = String(l.state.doc.lineAt(l.state.selection.main.head).number), e = Gt("input", { class: "cm-textfield", name: "line", value: t }), n = Gt("form", { class: "cm-gotoLine", onkeydown: (a) => {
    a.keyCode == 27 ? (a.preventDefault(), l.dispatch({ effects: aa.of(false) }), l.focus()) : a.keyCode == 13 && (a.preventDefault(), r());
  }, onsubmit: (a) => {
    a.preventDefault(), r();
  } }, Gt("label", l.state.phrase("Go to line"), ": ", e), " ", Gt("button", { class: "cm-button", type: "submit" }, l.state.phrase("go")), Gt("button", { name: "close", onclick: () => {
    l.dispatch({ effects: aa.of(false) }), l.focus();
  }, "aria-label": l.state.phrase("close"), type: "button" }, ["\xD7"]));
  function r() {
    let a = /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(e.value);
    if (!a) return;
    let { state: u } = l, f = u.doc.lineAt(u.selection.main.head), [, h, g, p, y] = a, v = p ? +p.slice(1) : 0, S = g ? +g : f.number;
    if (g && y) {
      let T = S / 100;
      h && (T = T * (h == "-" ? -1 : 1) + f.number / u.doc.lines), S = Math.round(u.doc.lines * T);
    } else g && h && (S = S * (h == "-" ? -1 : 1) + f.number);
    let w = u.doc.line(Math.max(1, Math.min(u.doc.lines, S))), C = K.cursor(w.from + Math.max(0, Math.min(v, w.length)));
    l.dispatch({ effects: [aa.of(false), P.scrollIntoView(C.from, { y: "center" })], selection: C }), l.focus();
  }
  return { dom: n };
}
const aa = St.define(), Eb = Te.define({ create() {
  return true;
}, update(l, t) {
  for (let e of t.effects) e.is(aa) && (l = e.value);
  return l;
}, provide: (l) => ga.from(l, (t) => t ? dm : null) }), sD = (l) => {
  let t = ma(l, dm);
  if (!t) {
    let e = [aa.of(true)];
    l.state.field(Eb, false) == null && e.push(St.appendConfig.of([Eb, rD])), l.dispatch({ effects: e }), t = ma(l, dm);
  }
  return t && t.dom.querySelector("input").select(), true;
}, rD = P.baseTheme({ ".cm-panel.cm-gotoLine": { padding: "2px 6px 4px", position: "relative", "& label": { fontSize: "80%" }, "& [name=close]": { position: "absolute", top: "0", bottom: "0", right: "4px", backgroundColor: "inherit", border: "none", font: "inherit", padding: "0" } } }), aD = { highlightWordAroundCursor: false, minSelectionLength: 1, maxMatches: 100, wholeWords: false }, oD = et.define({ combine(l) {
  return Pi(l, aD, { highlightWordAroundCursor: (t, e) => t || e, minSelectionLength: Math.min, maxMatches: Math.min });
} });
function uD(l) {
  return [mD, dD];
}
const cD = ut.mark({ class: "cm-selectionMatch" }), fD = ut.mark({ class: "cm-selectionMatch cm-selectionMatch-main" });
function Bb(l, t, e, n) {
  return (e == 0 || l(t.sliceDoc(e - 1, e)) != Pt.Word) && (n == t.doc.length || l(t.sliceDoc(n, n + 1)) != Pt.Word);
}
function hD(l, t, e, n) {
  return l(t.sliceDoc(e, e + 1)) == Pt.Word && l(t.sliceDoc(n - 1, n)) == Pt.Word;
}
const dD = ee.fromClass(class {
  constructor(l) {
    this.decorations = this.getDeco(l);
  }
  update(l) {
    (l.selectionSet || l.docChanged || l.viewportChanged) && (this.decorations = this.getDeco(l.view));
  }
  getDeco(l) {
    let t = l.state.facet(oD), { state: e } = l, n = e.selection;
    if (n.ranges.length > 1) return ut.none;
    let r = n.main, a, u = null;
    if (r.empty) {
      if (!t.highlightWordAroundCursor) return ut.none;
      let h = e.wordAt(r.head);
      if (!h) return ut.none;
      u = e.charCategorizer(r.head), a = e.sliceDoc(h.from, h.to);
    } else {
      let h = r.to - r.from;
      if (h < t.minSelectionLength || h > 200) return ut.none;
      if (t.wholeWords) {
        if (a = e.sliceDoc(r.from, r.to), u = e.charCategorizer(r.head), !(Bb(u, e, r.from, r.to) && hD(u, e, r.from, r.to))) return ut.none;
      } else if (a = e.sliceDoc(r.from, r.to), !a) return ut.none;
    }
    let f = [];
    for (let h of l.visibleRanges) {
      let g = new Xs(e.doc, a, h.from, h.to);
      for (; !g.next().done; ) {
        let { from: p, to: y } = g.value;
        if ((!u || Bb(u, e, p, y)) && (r.empty && p <= r.from && y >= r.to ? f.push(fD.range(p, y)) : (p >= r.to || y <= r.from) && f.push(cD.range(p, y)), f.length > t.maxMatches)) return ut.none;
      }
    }
    return ut.set(f);
  }
}, { decorations: (l) => l.decorations }), mD = P.baseTheme({ ".cm-selectionMatch": { backgroundColor: "#99ff7780" }, ".cm-searchMatch .cm-selectionMatch": { backgroundColor: "transparent" } }), gD = ({ state: l, dispatch: t }) => {
  let { selection: e } = l, n = K.create(e.ranges.map((r) => l.wordAt(r.head) || K.cursor(r.head)), e.mainIndex);
  return n.eq(e) ? false : (t(l.update({ selection: n })), true);
};
function pD(l, t) {
  let { main: e, ranges: n } = l.selection, r = l.wordAt(e.head), a = r && r.from == e.from && r.to == e.to;
  for (let u = false, f = new Xs(l.doc, t, n[n.length - 1].to); ; ) if (f.next(), f.done) {
    if (u) return null;
    f = new Xs(l.doc, t, 0, Math.max(0, n[n.length - 1].from - 1)), u = true;
  } else {
    if (u && n.some((h) => h.from == f.value.from)) continue;
    if (a) {
      let h = l.wordAt(f.value.from);
      if (!h || h.from != f.value.from || h.to != f.value.to) continue;
    }
    return f.value;
  }
}
const yD = ({ state: l, dispatch: t }) => {
  let { ranges: e } = l.selection;
  if (e.some((a) => a.from === a.to)) return gD({ state: l, dispatch: t });
  let n = l.sliceDoc(e[0].from, e[0].to);
  if (l.selection.ranges.some((a) => l.sliceDoc(a.from, a.to) != n)) return false;
  let r = pD(l, n);
  return r ? (t(l.update({ selection: l.selection.addRange(K.range(r.from, r.to), false), effects: P.scrollIntoView(r.to) })), true) : false;
}, Ws = et.define({ combine(l) {
  return Pi(l, { top: false, caseSensitive: false, literal: false, regexp: false, wholeWord: false, createPanel: (t) => new DD(t), scrollToMatch: (t) => P.scrollIntoView(t) });
} });
class Ox {
  constructor(t) {
    this.search = t.search, this.caseSensitive = !!t.caseSensitive, this.literal = !!t.literal, this.regexp = !!t.regexp, this.replace = t.replace || "", this.valid = !!this.search && (!this.regexp || lD(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!t.wholeWord;
  }
  unquote(t) {
    return this.literal ? t : t.replace(/\\([nrt\\])/g, (e, n) => n == "n" ? `
` : n == "r" ? "\r" : n == "t" ? "	" : "\\");
  }
  eq(t) {
    return this.search == t.search && this.replace == t.replace && this.caseSensitive == t.caseSensitive && this.regexp == t.regexp && this.wholeWord == t.wholeWord;
  }
  create() {
    return this.regexp ? new xD(this) : new vD(this);
  }
  getCursor(t, e = 0, n) {
    let r = t.doc ? t : Ot.create({ doc: t });
    return n == null && (n = r.doc.length), this.regexp ? ks(this, r, e, n) : Ts(this, r, e, n);
  }
}
class Dx {
  constructor(t) {
    this.spec = t;
  }
}
function Ts(l, t, e, n) {
  return new Xs(t.doc, l.unquoted, e, n, l.caseSensitive ? void 0 : (r) => r.toLowerCase(), l.wholeWord ? bD(t.doc, t.charCategorizer(t.selection.main.head)) : void 0);
}
function bD(l, t) {
  return (e, n, r, a) => ((a > e || a + r.length < n) && (a = Math.max(0, e - 2), r = l.sliceString(a, Math.min(l.length, n + 2))), (t(Iu(r, e - a)) != Pt.Word || t($u(r, e - a)) != Pt.Word) && (t($u(r, n - a)) != Pt.Word || t(Iu(r, n - a)) != Pt.Word));
}
class vD extends Dx {
  constructor(t) {
    super(t);
  }
  nextMatch(t, e, n) {
    let r = Ts(this.spec, t, n, t.doc.length).nextOverlapping();
    if (r.done) {
      let a = Math.min(t.doc.length, e + this.spec.unquoted.length);
      r = Ts(this.spec, t, 0, a).nextOverlapping();
    }
    return r.done || r.value.from == e && r.value.to == n ? null : r.value;
  }
  prevMatchInRange(t, e, n) {
    for (let r = n; ; ) {
      let a = Math.max(e, r - 1e4 - this.spec.unquoted.length), u = Ts(this.spec, t, a, r), f = null;
      for (; !u.nextOverlapping().done; ) f = u.value;
      if (f) return f;
      if (a == e) return null;
      r -= 1e4;
    }
  }
  prevMatch(t, e, n) {
    let r = this.prevMatchInRange(t, 0, e);
    return r || (r = this.prevMatchInRange(t, Math.max(0, n - this.spec.unquoted.length), t.doc.length)), r && (r.from != e || r.to != n) ? r : null;
  }
  getReplacement(t) {
    return this.spec.unquote(this.spec.replace);
  }
  matchAll(t, e) {
    let n = Ts(this.spec, t, 0, t.doc.length), r = [];
    for (; !n.next().done; ) {
      if (r.length >= e) return null;
      r.push(n.value);
    }
    return r;
  }
  highlight(t, e, n, r) {
    let a = Ts(this.spec, t, Math.max(0, e - this.spec.unquoted.length), Math.min(n + this.spec.unquoted.length, t.doc.length));
    for (; !a.next().done; ) r(a.value.from, a.value.to);
  }
}
function ks(l, t, e, n) {
  return new Tx(t.doc, l.search, { ignoreCase: !l.caseSensitive, test: l.wholeWord ? SD(t.charCategorizer(t.selection.main.head)) : void 0 }, e, n);
}
function Iu(l, t) {
  return l.slice(Me(l, t, false), t);
}
function $u(l, t) {
  return l.slice(t, Me(l, t));
}
function SD(l) {
  return (t, e, n) => !n[0].length || (l(Iu(n.input, n.index)) != Pt.Word || l($u(n.input, n.index)) != Pt.Word) && (l($u(n.input, n.index + n[0].length)) != Pt.Word || l(Iu(n.input, n.index + n[0].length)) != Pt.Word);
}
class xD extends Dx {
  nextMatch(t, e, n) {
    let r = ks(this.spec, t, n, t.doc.length).next();
    return r.done && (r = ks(this.spec, t, 0, e).next()), r.done ? null : r.value;
  }
  prevMatchInRange(t, e, n) {
    for (let r = 1; ; r++) {
      let a = Math.max(e, n - r * 1e4), u = ks(this.spec, t, a, n), f = null;
      for (; !u.next().done; ) f = u.value;
      if (f && (a == e || f.from > a + 10)) return f;
      if (a == e) return null;
    }
  }
  prevMatch(t, e, n) {
    return this.prevMatchInRange(t, 0, e) || this.prevMatchInRange(t, n, t.doc.length);
  }
  getReplacement(t) {
    return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, (e, n) => {
      if (n == "&") return t.match[0];
      if (n == "$") return "$";
      for (let r = n.length; r > 0; r--) {
        let a = +n.slice(0, r);
        if (a > 0 && a < t.match.length) return t.match[a] + n.slice(r);
      }
      return e;
    });
  }
  matchAll(t, e) {
    let n = ks(this.spec, t, 0, t.doc.length), r = [];
    for (; !n.next().done; ) {
      if (r.length >= e) return null;
      r.push(n.value);
    }
    return r;
  }
  highlight(t, e, n, r) {
    let a = ks(this.spec, t, Math.max(0, e - 250), Math.min(n + 250, t.doc.length));
    for (; !a.next().done; ) r(a.value.from, a.value.to);
  }
}
const va = St.define(), jm = St.define(), el = Te.define({ create(l) {
  return new hd(mm(l).create(), null);
}, update(l, t) {
  for (let e of t.effects) e.is(va) ? l = new hd(e.value.create(), l.panel) : e.is(jm) && (l = new hd(l.query, e.value ? Ym : null));
  return l;
}, provide: (l) => ga.from(l, (t) => t.panel) });
class hd {
  constructor(t, e) {
    this.query = t, this.panel = e;
  }
}
const wD = ut.mark({ class: "cm-searchMatch" }), CD = ut.mark({ class: "cm-searchMatch cm-searchMatch-selected" }), AD = ee.fromClass(class {
  constructor(l) {
    this.view = l, this.decorations = this.highlight(l.state.field(el));
  }
  update(l) {
    let t = l.state.field(el);
    (t != l.startState.field(el) || l.docChanged || l.selectionSet || l.viewportChanged) && (this.decorations = this.highlight(t));
  }
  highlight({ query: l, panel: t }) {
    if (!t || !l.spec.valid) return ut.none;
    let { view: e } = this, n = new Sn();
    for (let r = 0, a = e.visibleRanges, u = a.length; r < u; r++) {
      let { from: f, to: h } = a[r];
      for (; r < u - 1 && h > a[r + 1].from - 500; ) h = a[++r].to;
      l.highlight(e.state, f, h, (g, p) => {
        let y = e.state.selection.ranges.some((v) => v.from == g && v.to == p);
        n.add(g, p, y ? CD : wD);
      });
    }
    return n.finish();
  }
}, { decorations: (l) => l.decorations });
function Ra(l) {
  return (t) => {
    let e = t.state.field(el, false);
    return e && e.query.spec.valid ? l(t, e) : Rx(t);
  };
}
const tc = Ra((l, { query: t }) => {
  let { to: e } = l.state.selection.main, n = t.nextMatch(l.state, e, e);
  if (!n) return false;
  let r = K.single(n.from, n.to), a = l.state.facet(Ws);
  return l.dispatch({ selection: r, effects: [Gm(l, n), a.scrollToMatch(r.main, l)], userEvent: "select.search" }), Bx(l), true;
}), ec = Ra((l, { query: t }) => {
  let { state: e } = l, { from: n } = e.selection.main, r = t.prevMatch(e, n, n);
  if (!r) return false;
  let a = K.single(r.from, r.to), u = l.state.facet(Ws);
  return l.dispatch({ selection: a, effects: [Gm(l, r), u.scrollToMatch(a.main, l)], userEvent: "select.search" }), Bx(l), true;
}), MD = Ra((l, { query: t }) => {
  let e = t.matchAll(l.state, 1e3);
  return !e || !e.length ? false : (l.dispatch({ selection: K.create(e.map((n) => K.range(n.from, n.to))), userEvent: "select.search.matches" }), true);
}), TD = ({ state: l, dispatch: t }) => {
  let e = l.selection;
  if (e.ranges.length > 1 || e.main.empty) return false;
  let { from: n, to: r } = e.main, a = [], u = 0;
  for (let f = new Xs(l.doc, l.sliceDoc(n, r)); !f.next().done; ) {
    if (a.length > 1e3) return false;
    f.value.from == n && (u = a.length), a.push(K.range(f.value.from, f.value.to));
  }
  return t(l.update({ selection: K.create(a, u), userEvent: "select.search.matches" })), true;
}, Rb = Ra((l, { query: t }) => {
  let { state: e } = l, { from: n, to: r } = e.selection.main;
  if (e.readOnly) return false;
  let a = t.nextMatch(e, n, n);
  if (!a) return false;
  let u = a, f = [], h, g, p = [];
  u.from == n && u.to == r && (g = e.toText(t.getReplacement(u)), f.push({ from: u.from, to: u.to, insert: g }), u = t.nextMatch(e, u.from, u.to), p.push(P.announce.of(e.phrase("replaced match on line $", e.doc.lineAt(n).number) + ".")));
  let y = l.state.changes(f);
  return u && (h = K.single(u.from, u.to).map(y), p.push(Gm(l, u)), p.push(e.facet(Ws).scrollToMatch(h.main, l))), l.dispatch({ changes: y, selection: h, effects: p, userEvent: "input.replace" }), true;
}), kD = Ra((l, { query: t }) => {
  if (l.state.readOnly) return false;
  let e = t.matchAll(l.state, 1e9).map((r) => {
    let { from: a, to: u } = r;
    return { from: a, to: u, insert: t.getReplacement(r) };
  });
  if (!e.length) return false;
  let n = l.state.phrase("replaced $ matches", e.length) + ".";
  return l.dispatch({ changes: e, effects: P.announce.of(n), userEvent: "input.replace.all" }), true;
});
function Ym(l) {
  return l.state.facet(Ws).createPanel(l);
}
function mm(l, t) {
  var e, n, r, a, u;
  let f = l.selection.main, h = f.empty || f.to > f.from + 100 ? "" : l.sliceDoc(f.from, f.to);
  if (t && !h) return t;
  let g = l.facet(Ws);
  return new Ox({ search: ((e = t == null ? void 0 : t.literal) !== null && e !== void 0 ? e : g.literal) ? h : h.replace(/\n/g, "\\n"), caseSensitive: (n = t == null ? void 0 : t.caseSensitive) !== null && n !== void 0 ? n : g.caseSensitive, literal: (r = t == null ? void 0 : t.literal) !== null && r !== void 0 ? r : g.literal, regexp: (a = t == null ? void 0 : t.regexp) !== null && a !== void 0 ? a : g.regexp, wholeWord: (u = t == null ? void 0 : t.wholeWord) !== null && u !== void 0 ? u : g.wholeWord });
}
function Ex(l) {
  let t = ma(l, Ym);
  return t && t.dom.querySelector("[main-field]");
}
function Bx(l) {
  let t = Ex(l);
  t && t == l.root.activeElement && t.select();
}
const Rx = (l) => {
  let t = l.state.field(el, false);
  if (t && t.panel) {
    let e = Ex(l);
    if (e && e != l.root.activeElement) {
      let n = mm(l.state, t.query.spec);
      n.valid && l.dispatch({ effects: va.of(n) }), e.focus(), e.select();
    }
  } else l.dispatch({ effects: [jm.of(true), t ? va.of(mm(l.state, t.query.spec)) : St.appendConfig.of(BD)] });
  return true;
}, zx = (l) => {
  let t = l.state.field(el, false);
  if (!t || !t.panel) return false;
  let e = ma(l, Ym);
  return e && e.dom.contains(l.root.activeElement) && l.focus(), l.dispatch({ effects: jm.of(false) }), true;
}, OD = [{ key: "Mod-f", run: Rx, scope: "editor search-panel" }, { key: "F3", run: tc, shift: ec, scope: "editor search-panel", preventDefault: true }, { key: "Mod-g", run: tc, shift: ec, scope: "editor search-panel", preventDefault: true }, { key: "Escape", run: zx, scope: "editor search-panel" }, { key: "Mod-Shift-l", run: TD }, { key: "Mod-Alt-g", run: sD }, { key: "Mod-d", run: yD, preventDefault: true }];
class DD {
  constructor(t) {
    this.view = t;
    let e = this.query = t.state.field(el).query.spec;
    this.commit = this.commit.bind(this), this.searchField = Gt("input", { value: e.search, placeholder: ri(t, "Find"), "aria-label": ri(t, "Find"), class: "cm-textfield", name: "search", form: "", "main-field": "true", onchange: this.commit, onkeyup: this.commit }), this.replaceField = Gt("input", { value: e.replace, placeholder: ri(t, "Replace"), "aria-label": ri(t, "Replace"), class: "cm-textfield", name: "replace", form: "", onchange: this.commit, onkeyup: this.commit }), this.caseField = Gt("input", { type: "checkbox", name: "case", form: "", checked: e.caseSensitive, onchange: this.commit }), this.reField = Gt("input", { type: "checkbox", name: "re", form: "", checked: e.regexp, onchange: this.commit }), this.wordField = Gt("input", { type: "checkbox", name: "word", form: "", checked: e.wholeWord, onchange: this.commit });
    function n(r, a, u) {
      return Gt("button", { class: "cm-button", name: r, onclick: a, type: "button" }, u);
    }
    this.dom = Gt("div", { onkeydown: (r) => this.keydown(r), class: "cm-search" }, [this.searchField, n("next", () => tc(t), [ri(t, "next")]), n("prev", () => ec(t), [ri(t, "previous")]), n("select", () => MD(t), [ri(t, "all")]), Gt("label", null, [this.caseField, ri(t, "match case")]), Gt("label", null, [this.reField, ri(t, "regexp")]), Gt("label", null, [this.wordField, ri(t, "by word")]), ...t.state.readOnly ? [] : [Gt("br"), this.replaceField, n("replace", () => Rb(t), [ri(t, "replace")]), n("replaceAll", () => kD(t), [ri(t, "replace all")])], Gt("button", { name: "close", onclick: () => zx(t), "aria-label": ri(t, "close"), type: "button" }, ["\xD7"])]);
  }
  commit() {
    let t = new Ox({ search: this.searchField.value, caseSensitive: this.caseField.checked, regexp: this.reField.checked, wholeWord: this.wordField.checked, replace: this.replaceField.value });
    t.eq(this.query) || (this.query = t, this.view.dispatch({ effects: va.of(t) }));
  }
  keydown(t) {
    zM(this.view, t, "search-panel") ? t.preventDefault() : t.keyCode == 13 && t.target == this.searchField ? (t.preventDefault(), (t.shiftKey ? ec : tc)(this.view)) : t.keyCode == 13 && t.target == this.replaceField && (t.preventDefault(), Rb(this.view));
  }
  update(t) {
    for (let e of t.transactions) for (let n of e.effects) n.is(va) && !n.value.eq(this.query) && this.setQuery(n.value);
  }
  setQuery(t) {
    this.query = t, this.searchField.value = t.search, this.replaceField.value = t.replace, this.caseField.checked = t.caseSensitive, this.reField.checked = t.regexp, this.wordField.checked = t.wholeWord;
  }
  mount() {
    this.searchField.select();
  }
  get pos() {
    return 80;
  }
  get top() {
    return this.view.state.facet(Ws).top;
  }
}
function ri(l, t) {
  return l.state.phrase(t);
}
const vu = 30, Su = /[\s\.,:;?!]/;
function Gm(l, { from: t, to: e }) {
  let n = l.state.doc.lineAt(t), r = l.state.doc.lineAt(e).to, a = Math.max(n.from, t - vu), u = Math.min(r, e + vu), f = l.state.sliceDoc(a, u);
  if (a != n.from) {
    for (let h = 0; h < vu; h++) if (!Su.test(f[h + 1]) && Su.test(f[h])) {
      f = f.slice(h);
      break;
    }
  }
  if (u != r) {
    for (let h = f.length - 1; h > f.length - vu; h--) if (!Su.test(f[h - 1]) && Su.test(f[h])) {
      f = f.slice(0, h);
      break;
    }
  }
  return P.announce.of(`${l.state.phrase("current match")}. ${f} ${l.state.phrase("on line")} ${n.number}.`);
}
const ED = P.baseTheme({ ".cm-panel.cm-search": { padding: "2px 6px 4px", position: "relative", "& [name=close]": { position: "absolute", top: "0", right: "4px", backgroundColor: "inherit", border: "none", font: "inherit", padding: 0, margin: 0 }, "& input, & button, & label": { margin: ".2em .6em .2em 0" }, "& input[type=checkbox]": { marginRight: ".2em" }, "& label": { fontSize: "80%", whiteSpace: "pre" } }, "&light .cm-searchMatch": { backgroundColor: "#ffff0054" }, "&dark .cm-searchMatch": { backgroundColor: "#00ffff8a" }, "&light .cm-searchMatch-selected": { backgroundColor: "#ff6a0054" }, "&dark .cm-searchMatch-selected": { backgroundColor: "#ff00ff8a" } }), BD = [el, jl.low(AD), ED];
class Nx {
  constructor(t, e, n, r) {
    this.state = t, this.pos = e, this.explicit = n, this.view = r, this.abortListeners = [], this.abortOnDocChange = false;
  }
  tokenBefore(t) {
    let e = Be(this.state).resolveInner(this.pos, -1);
    for (; e && t.indexOf(e.name) < 0; ) e = e.parent;
    return e ? { from: e.from, to: this.pos, text: this.state.sliceDoc(e.from, this.pos), type: e.type } : null;
  }
  matchBefore(t) {
    let e = this.state.doc.lineAt(this.pos), n = Math.max(e.from, this.pos - 250), r = e.text.slice(n - e.from, this.pos - e.from), a = r.search(_x(t, false));
    return a < 0 ? null : { from: n + a, to: this.pos, text: r.slice(a) };
  }
  get aborted() {
    return this.abortListeners == null;
  }
  addEventListener(t, e, n) {
    t == "abort" && this.abortListeners && (this.abortListeners.push(e), n && n.onDocChange && (this.abortOnDocChange = true));
  }
}
function zb(l) {
  let t = Object.keys(l).join(""), e = /\w/.test(t);
  return e && (t = t.replace(/\w/g, "")), `[${e ? "\\w" : ""}${t.replace(/[^\w\s]/g, "\\$&")}]`;
}
function RD(l) {
  let t = /* @__PURE__ */ Object.create(null), e = /* @__PURE__ */ Object.create(null);
  for (let { label: r } of l) {
    t[r[0]] = true;
    for (let a = 1; a < r.length; a++) e[r[a]] = true;
  }
  let n = zb(t) + zb(e) + "*$";
  return [new RegExp("^" + n), new RegExp(n)];
}
function zD(l) {
  let t = l.map((r) => typeof r == "string" ? { label: r } : r), [e, n] = t.every((r) => /^\w+$/.test(r.label)) ? [/\w*$/, /\w+$/] : RD(t);
  return (r) => {
    let a = r.matchBefore(n);
    return a || r.explicit ? { from: a ? a.from : r.pos, options: t, validFor: e } : null;
  };
}
class Nb {
  constructor(t, e, n, r) {
    this.completion = t, this.source = e, this.match = n, this.score = r;
  }
}
function _l(l) {
  return l.selection.main.from;
}
function _x(l, t) {
  var e;
  let { source: n } = l, r = t && n[0] != "^", a = n[n.length - 1] != "$";
  return !r && !a ? l : new RegExp(`${r ? "^" : ""}(?:${n})${a ? "$" : ""}`, (e = l.flags) !== null && e !== void 0 ? e : l.ignoreCase ? "i" : "");
}
const Lx = Fi.define();
function ND(l, t, e, n) {
  let { main: r } = l.selection, a = e - r.from, u = n - r.from;
  return { ...l.changeByRange((f) => {
    if (f != r && e != n && l.sliceDoc(f.from + a, f.from + u) != l.sliceDoc(e, n)) return { range: f };
    let h = l.toText(t);
    return { changes: { from: f.from + a, to: n == r.from ? f.to : f.from + u, insert: h }, range: K.cursor(f.from + a + h.length) };
  }), scrollIntoView: true, userEvent: "input.complete" };
}
const _b = /* @__PURE__ */ new WeakMap();
function _D(l) {
  if (!Array.isArray(l)) return l;
  let t = _b.get(l);
  return t || _b.set(l, t = zD(l)), t;
}
const ic = St.define(), Sa = St.define();
class LD {
  constructor(t) {
    this.pattern = t, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
    for (let e = 0; e < t.length; ) {
      let n = Qe(t, e), r = Gi(n);
      this.chars.push(n);
      let a = t.slice(e, e + r), u = a.toUpperCase();
      this.folded.push(Qe(u == a ? a.toLowerCase() : u, 0)), e += r;
    }
    this.astral = t.length != this.chars.length;
  }
  ret(t, e) {
    return this.score = t, this.matched = e, this;
  }
  match(t) {
    if (this.pattern.length == 0) return this.ret(-100, []);
    if (t.length < this.pattern.length) return null;
    let { chars: e, folded: n, any: r, precise: a, byWord: u } = this;
    if (e.length == 1) {
      let j = Qe(t, 0), L = Gi(j), Q = L == t.length ? 0 : -100;
      if (j != e[0]) if (j == n[0]) Q += -200;
      else return null;
      return this.ret(Q, [0, L]);
    }
    let f = t.indexOf(this.pattern);
    if (f == 0) return this.ret(t.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
    let h = e.length, g = 0;
    if (f < 0) {
      for (let j = 0, L = Math.min(t.length, 200); j < L && g < h; ) {
        let Q = Qe(t, j);
        (Q == e[g] || Q == n[g]) && (r[g++] = j), j += Gi(Q);
      }
      if (g < h) return null;
    }
    let p = 0, y = 0, v = false, S = 0, w = -1, C = -1, T = /[a-z]/.test(t), O = true;
    for (let j = 0, L = Math.min(t.length, 200), Q = 0; j < L && y < h; ) {
      let _ = Qe(t, j);
      f < 0 && (p < h && _ == e[p] && (a[p++] = j), S < h && (_ == e[S] || _ == n[S] ? (S == 0 && (w = j), C = j + 1, S++) : S = 0));
      let G, V = _ < 255 ? _ >= 48 && _ <= 57 || _ >= 97 && _ <= 122 ? 2 : _ >= 65 && _ <= 90 ? 1 : 0 : (G = ym(_)) != G.toLowerCase() ? 1 : G != G.toUpperCase() ? 2 : 0;
      (!j || V == 1 && T || Q == 0 && V != 0) && (e[y] == _ || n[y] == _ && (v = true) ? u[y++] = j : u.length && (O = false)), Q = V, j += Gi(_);
    }
    return y == h && u[0] == 0 && O ? this.result(-100 + (v ? -200 : 0), u, t) : S == h && w == 0 ? this.ret(-200 - t.length + (C == t.length ? 0 : -100), [0, C]) : f > -1 ? this.ret(-700 - t.length, [f, f + this.pattern.length]) : S == h ? this.ret(-900 - t.length, [w, C]) : y == h ? this.result(-100 + (v ? -200 : 0) + -700 + (O ? 0 : -1100), u, t) : e.length == 2 ? null : this.result((r[0] ? -700 : 0) + -200 + -1100, r, t);
  }
  result(t, e, n) {
    let r = [], a = 0;
    for (let u of e) {
      let f = u + (this.astral ? Gi(Qe(n, u)) : 1);
      a && r[a - 1] == u ? r[a - 1] = f : (r[a++] = u, r[a++] = f);
    }
    return this.ret(t - n.length, r);
  }
}
class HD {
  constructor(t) {
    this.pattern = t, this.matched = [], this.score = 0, this.folded = t.toLowerCase();
  }
  match(t) {
    if (t.length < this.pattern.length) return null;
    let e = t.slice(0, this.pattern.length), n = e == this.pattern ? 0 : e.toLowerCase() == this.folded ? -200 : null;
    return n == null ? null : (this.matched = [0, e.length], this.score = n + (t.length == this.pattern.length ? 0 : -100), this);
  }
}
const pe = et.define({ combine(l) {
  return Pi(l, { activateOnTyping: true, activateOnCompletion: () => false, activateOnTypingDelay: 100, selectOnOpen: true, override: null, closeOnBlur: true, maxRenderedOptions: 100, defaultKeymap: true, tooltipClass: () => "", optionClass: () => "", aboveCursor: false, icons: true, addToOptions: [], positionInfo: UD, filterStrict: false, compareCompletions: (t, e) => (t.sortText || t.label).localeCompare(e.sortText || e.label), interactionDelay: 75, updateSyncTime: 100 }, { defaultKeymap: (t, e) => t && e, closeOnBlur: (t, e) => t && e, icons: (t, e) => t && e, tooltipClass: (t, e) => (n) => Lb(t(n), e(n)), optionClass: (t, e) => (n) => Lb(t(n), e(n)), addToOptions: (t, e) => t.concat(e), filterStrict: (t, e) => t || e });
} });
function Lb(l, t) {
  return l ? t ? l + " " + t : l : t;
}
function UD(l, t, e, n, r, a) {
  let u = l.textDirection == Wt.RTL, f = u, h = false, g = "top", p, y, v = t.left - r.left, S = r.right - t.right, w = n.right - n.left, C = n.bottom - n.top;
  if (f && v < Math.min(w, S) ? f = false : !f && S < Math.min(w, v) && (f = true), w <= (f ? v : S)) p = Math.max(r.top, Math.min(e.top, r.bottom - C)) - t.top, y = Math.min(400, f ? v : S);
  else {
    h = true, y = Math.min(400, (u ? t.right : r.right - t.left) - 30);
    let j = r.bottom - t.bottom;
    j >= C || j > t.top ? p = e.bottom - t.top : (g = "bottom", p = t.bottom - e.top);
  }
  let T = (t.bottom - t.top) / a.offsetHeight, O = (t.right - t.left) / a.offsetWidth;
  return { style: `${g}: ${p / T}px; max-width: ${y / O}px`, class: "cm-completionInfo-" + (h ? u ? "left-narrow" : "right-narrow" : f ? "left" : "right") };
}
function VD(l) {
  let t = l.addToOptions.slice();
  return l.icons && t.push({ render(e) {
    let n = document.createElement("div");
    return n.classList.add("cm-completionIcon"), e.type && n.classList.add(...e.type.split(/\s+/g).map((r) => "cm-completionIcon-" + r)), n.setAttribute("aria-hidden", "true"), n;
  }, position: 20 }), t.push({ render(e, n, r, a) {
    let u = document.createElement("span");
    u.className = "cm-completionLabel";
    let f = e.displayLabel || e.label, h = 0;
    for (let g = 0; g < a.length; ) {
      let p = a[g++], y = a[g++];
      p > h && u.appendChild(document.createTextNode(f.slice(h, p)));
      let v = u.appendChild(document.createElement("span"));
      v.appendChild(document.createTextNode(f.slice(p, y))), v.className = "cm-completionMatchedText", h = y;
    }
    return h < f.length && u.appendChild(document.createTextNode(f.slice(h))), u;
  }, position: 50 }, { render(e) {
    if (!e.detail) return null;
    let n = document.createElement("span");
    return n.className = "cm-completionDetail", n.textContent = e.detail, n;
  }, position: 80 }), t.sort((e, n) => e.position - n.position).map((e) => e.render);
}
function dd(l, t, e) {
  if (l <= e) return { from: 0, to: l };
  if (t < 0 && (t = 0), t <= l >> 1) {
    let r = Math.floor(t / e);
    return { from: r * e, to: (r + 1) * e };
  }
  let n = Math.floor((l - t) / e);
  return { from: l - (n + 1) * e, to: l - n * e };
}
class qD {
  constructor(t, e, n) {
    this.view = t, this.stateField = e, this.applyCompletion = n, this.info = null, this.infoDestroy = null, this.placeInfoReq = { read: () => this.measureInfo(), write: (h) => this.placeInfo(h), key: this }, this.space = null, this.currentClass = "";
    let r = t.state.field(e), { options: a, selected: u } = r.open, f = t.state.facet(pe);
    this.optionContent = VD(f), this.optionClass = f.optionClass, this.tooltipClass = f.tooltipClass, this.range = dd(a.length, u, f.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(t.state), this.dom.addEventListener("mousedown", (h) => {
      let { options: g } = t.state.field(e).open;
      for (let p = h.target, y; p && p != this.dom; p = p.parentNode) if (p.nodeName == "LI" && (y = /-(\d+)$/.exec(p.id)) && +y[1] < g.length) {
        this.applyCompletion(t, g[+y[1]]), h.preventDefault();
        return;
      }
    }), this.dom.addEventListener("focusout", (h) => {
      let g = t.state.field(this.stateField, false);
      g && g.tooltip && t.state.facet(pe).closeOnBlur && h.relatedTarget != t.contentDOM && t.dispatch({ effects: Sa.of(null) });
    }), this.showOptions(a, r.id);
  }
  mount() {
    this.updateSel();
  }
  showOptions(t, e) {
    this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(t, e, this.range)), this.list.addEventListener("scroll", () => {
      this.info && this.view.requestMeasure(this.placeInfoReq);
    });
  }
  update(t) {
    var e;
    let n = t.state.field(this.stateField), r = t.startState.field(this.stateField);
    if (this.updateTooltipClass(t.state), n != r) {
      let { options: a, selected: u, disabled: f } = n.open;
      (!r.open || r.open.options != a) && (this.range = dd(a.length, u, t.state.facet(pe).maxRenderedOptions), this.showOptions(a, n.id)), this.updateSel(), f != ((e = r.open) === null || e === void 0 ? void 0 : e.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!f);
    }
  }
  updateTooltipClass(t) {
    let e = this.tooltipClass(t);
    if (e != this.currentClass) {
      for (let n of this.currentClass.split(" ")) n && this.dom.classList.remove(n);
      for (let n of e.split(" ")) n && this.dom.classList.add(n);
      this.currentClass = e;
    }
  }
  positioned(t) {
    this.space = t, this.info && this.view.requestMeasure(this.placeInfoReq);
  }
  updateSel() {
    let t = this.view.state.field(this.stateField), e = t.open;
    (e.selected > -1 && e.selected < this.range.from || e.selected >= this.range.to) && (this.range = dd(e.options.length, e.selected, this.view.state.facet(pe).maxRenderedOptions), this.showOptions(e.options, t.id));
    let n = this.updateSelectedOption(e.selected);
    if (n) {
      this.destroyInfo();
      let { completion: r } = e.options[e.selected], { info: a } = r;
      if (!a) return;
      let u = typeof a == "string" ? document.createTextNode(a) : a(r);
      if (!u) return;
      "then" in u ? u.then((f) => {
        f && this.view.state.field(this.stateField, false) == t && this.addInfoPane(f, r);
      }).catch((f) => We(this.view.state, f, "completion info")) : (this.addInfoPane(u, r), n.setAttribute("aria-describedby", this.info.id));
    }
  }
  addInfoPane(t, e) {
    this.destroyInfo();
    let n = this.info = document.createElement("div");
    if (n.className = "cm-tooltip cm-completionInfo", n.id = "cm-completionInfo-" + Math.floor(Math.random() * 65535).toString(16), t.nodeType != null) n.appendChild(t), this.infoDestroy = null;
    else {
      let { dom: r, destroy: a } = t;
      n.appendChild(r), this.infoDestroy = a || null;
    }
    this.dom.appendChild(n), this.view.requestMeasure(this.placeInfoReq);
  }
  updateSelectedOption(t) {
    let e = null;
    for (let n = this.list.firstChild, r = this.range.from; n; n = n.nextSibling, r++) n.nodeName != "LI" || !n.id ? r-- : r == t ? n.hasAttribute("aria-selected") || (n.setAttribute("aria-selected", "true"), e = n) : n.hasAttribute("aria-selected") && (n.removeAttribute("aria-selected"), n.removeAttribute("aria-describedby"));
    return e && YD(this.list, e), e;
  }
  measureInfo() {
    let t = this.dom.querySelector("[aria-selected]");
    if (!t || !this.info) return null;
    let e = this.dom.getBoundingClientRect(), n = this.info.getBoundingClientRect(), r = t.getBoundingClientRect(), a = this.space;
    if (!a) {
      let u = this.dom.ownerDocument.documentElement;
      a = { left: 0, top: 0, right: u.clientWidth, bottom: u.clientHeight };
    }
    return r.top > Math.min(a.bottom, e.bottom) - 10 || r.bottom < Math.max(a.top, e.top) + 10 ? null : this.view.state.facet(pe).positionInfo(this.view, e, r, n, a, this.dom);
  }
  placeInfo(t) {
    this.info && (t ? (t.style && (this.info.style.cssText = t.style), this.info.className = "cm-tooltip cm-completionInfo " + (t.class || "")) : this.info.style.cssText = "top: -1e6px");
  }
  createListBox(t, e, n) {
    const r = document.createElement("ul");
    r.id = e, r.setAttribute("role", "listbox"), r.setAttribute("aria-expanded", "true"), r.setAttribute("aria-label", this.view.state.phrase("Completions")), r.addEventListener("mousedown", (u) => {
      u.target == r && u.preventDefault();
    });
    let a = null;
    for (let u = n.from; u < n.to; u++) {
      let { completion: f, match: h } = t[u], { section: g } = f;
      if (g) {
        let v = typeof g == "string" ? g : g.name;
        if (v != a && (u > n.from || n.from == 0)) if (a = v, typeof g != "string" && g.header) r.appendChild(g.header(g));
        else {
          let S = r.appendChild(document.createElement("completion-section"));
          S.textContent = v;
        }
      }
      const p = r.appendChild(document.createElement("li"));
      p.id = e + "-" + u, p.setAttribute("role", "option");
      let y = this.optionClass(f);
      y && (p.className = y);
      for (let v of this.optionContent) {
        let S = v(f, this.view.state, this.view, h);
        S && p.appendChild(S);
      }
    }
    return n.from && r.classList.add("cm-completionListIncompleteTop"), n.to < t.length && r.classList.add("cm-completionListIncompleteBottom"), r;
  }
  destroyInfo() {
    this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null);
  }
  destroy() {
    this.destroyInfo();
  }
}
function jD(l, t) {
  return (e) => new qD(e, l, t);
}
function YD(l, t) {
  let e = l.getBoundingClientRect(), n = t.getBoundingClientRect(), r = e.height / l.offsetHeight;
  n.top < e.top ? l.scrollTop -= (e.top - n.top) / r : n.bottom > e.bottom && (l.scrollTop += (n.bottom - e.bottom) / r);
}
function Hb(l) {
  return (l.boost || 0) * 100 + (l.apply ? 10 : 0) + (l.info ? 5 : 0) + (l.type ? 1 : 0);
}
function GD(l, t) {
  let e = [], n = null, r = null, a = (p) => {
    e.push(p);
    let { section: y } = p.completion;
    if (y) {
      n || (n = []);
      let v = typeof y == "string" ? y : y.name;
      n.some((S) => S.name == v) || n.push(typeof y == "string" ? { name: v } : y);
    }
  }, u = t.facet(pe);
  for (let p of l) if (p.hasResult()) {
    let y = p.result.getMatch;
    if (p.result.filter === false) for (let v of p.result.options) a(new Nb(v, p.source, y ? y(v) : [], 1e9 - e.length));
    else {
      let v = t.sliceDoc(p.from, p.to), S, w = u.filterStrict ? new HD(v) : new LD(v);
      for (let C of p.result.options) if (S = w.match(C.label)) {
        let T = C.displayLabel ? y ? y(C, S.matched) : [] : S.matched, O = S.score + (C.boost || 0);
        if (a(new Nb(C, p.source, T, O)), typeof C.section == "object" && C.section.rank === "dynamic") {
          let { name: j } = C.section;
          r || (r = /* @__PURE__ */ Object.create(null)), r[j] = Math.max(O, r[j] || -1e9);
        }
      }
    }
  }
  if (n) {
    let p = /* @__PURE__ */ Object.create(null), y = 0, v = (S, w) => (S.rank === "dynamic" && w.rank === "dynamic" ? r[w.name] - r[S.name] : 0) || (typeof S.rank == "number" ? S.rank : 1e9) - (typeof w.rank == "number" ? w.rank : 1e9) || (S.name < w.name ? -1 : 1);
    for (let S of n.sort(v)) y -= 1e5, p[S.name] = y;
    for (let S of e) {
      let { section: w } = S.completion;
      w && (S.score += p[typeof w == "string" ? w : w.name]);
    }
  }
  let f = [], h = null, g = u.compareCompletions;
  for (let p of e.sort((y, v) => v.score - y.score || g(y.completion, v.completion))) {
    let y = p.completion;
    !h || h.label != y.label || h.detail != y.detail || h.type != null && y.type != null && h.type != y.type || h.apply != y.apply || h.boost != y.boost ? f.push(p) : Hb(p.completion) > Hb(h) && (f[f.length - 1] = p), h = p.completion;
  }
  return f;
}
class Es {
  constructor(t, e, n, r, a, u) {
    this.options = t, this.attrs = e, this.tooltip = n, this.timestamp = r, this.selected = a, this.disabled = u;
  }
  setSelected(t, e) {
    return t == this.selected || t >= this.options.length ? this : new Es(this.options, Ub(e, t), this.tooltip, this.timestamp, t, this.disabled);
  }
  static build(t, e, n, r, a, u) {
    if (r && !u && t.some((g) => g.isPending)) return r.setDisabled();
    let f = GD(t, e);
    if (!f.length) return r && t.some((g) => g.isPending) ? r.setDisabled() : null;
    let h = e.facet(pe).selectOnOpen ? 0 : -1;
    if (r && r.selected != h && r.selected != -1) {
      let g = r.options[r.selected].completion;
      for (let p = 0; p < f.length; p++) if (f[p].completion == g) {
        h = p;
        break;
      }
    }
    return new Es(f, Ub(n, h), { pos: t.reduce((g, p) => p.hasResult() ? Math.min(g, p.from) : g, 1e8), create: JD, above: a.aboveCursor }, r ? r.timestamp : Date.now(), h, false);
  }
  map(t) {
    return new Es(this.options, this.attrs, { ...this.tooltip, pos: t.mapPos(this.tooltip.pos) }, this.timestamp, this.selected, this.disabled);
  }
  setDisabled() {
    return new Es(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, true);
  }
}
class nc {
  constructor(t, e, n) {
    this.active = t, this.id = e, this.open = n;
  }
  static start() {
    return new nc(ZD, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
  }
  update(t) {
    let { state: e } = t, n = e.facet(pe), a = (n.override || e.languageDataAt("autocomplete", _l(e)).map(_D)).map((h) => (this.active.find((p) => p.source == h) || new xi(h, this.active.some((p) => p.state != 0) ? 1 : 0)).update(t, n));
    a.length == this.active.length && a.every((h, g) => h == this.active[g]) && (a = this.active);
    let u = this.open, f = t.effects.some((h) => h.is(Xm));
    u && t.docChanged && (u = u.map(t.changes)), t.selection || a.some((h) => h.hasResult() && t.changes.touchesRange(h.from, h.to)) || !XD(a, this.active) || f ? u = Es.build(a, e, this.id, u, n, f) : u && u.disabled && !a.some((h) => h.isPending) && (u = null), !u && a.every((h) => !h.isPending) && a.some((h) => h.hasResult()) && (a = a.map((h) => h.hasResult() ? new xi(h.source, 0) : h));
    for (let h of t.effects) h.is(Ux) && (u = u && u.setSelected(h.value, this.id));
    return a == this.active && u == this.open ? this : new nc(a, this.id, u);
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null;
  }
  get attrs() {
    return this.open ? this.open.attrs : this.active.length ? KD : QD;
  }
}
function XD(l, t) {
  if (l == t) return true;
  for (let e = 0, n = 0; ; ) {
    for (; e < l.length && !l[e].hasResult(); ) e++;
    for (; n < t.length && !t[n].hasResult(); ) n++;
    let r = e == l.length, a = n == t.length;
    if (r || a) return r == a;
    if (l[e++].result != t[n++].result) return false;
  }
}
const KD = { "aria-autocomplete": "list" }, QD = {};
function Ub(l, t) {
  let e = { "aria-autocomplete": "list", "aria-haspopup": "listbox", "aria-controls": l };
  return t > -1 && (e["aria-activedescendant"] = l + "-" + t), e;
}
const ZD = [];
function Hx(l, t) {
  if (l.isUserEvent("input.complete")) {
    let n = l.annotation(Lx);
    if (n && t.activateOnCompletion(n)) return 12;
  }
  let e = l.isUserEvent("input.type");
  return e && t.activateOnTyping ? 5 : e ? 1 : l.isUserEvent("delete.backward") ? 2 : l.selection ? 8 : l.docChanged ? 16 : 0;
}
class xi {
  constructor(t, e, n = false) {
    this.source = t, this.state = e, this.explicit = n;
  }
  hasResult() {
    return false;
  }
  get isPending() {
    return this.state == 1;
  }
  update(t, e) {
    let n = Hx(t, e), r = this;
    (n & 8 || n & 16 && this.touches(t)) && (r = new xi(r.source, 0)), n & 4 && r.state == 0 && (r = new xi(this.source, 1)), r = r.updateFor(t, n);
    for (let a of t.effects) if (a.is(ic)) r = new xi(r.source, 1, a.value);
    else if (a.is(Sa)) r = new xi(r.source, 0);
    else if (a.is(Xm)) for (let u of a.value) u.source == r.source && (r = u);
    return r;
  }
  updateFor(t, e) {
    return this.map(t.changes);
  }
  map(t) {
    return this;
  }
  touches(t) {
    return t.changes.touchesRange(_l(t.state));
  }
}
class Ls extends xi {
  constructor(t, e, n, r, a, u) {
    super(t, 3, e), this.limit = n, this.result = r, this.from = a, this.to = u;
  }
  hasResult() {
    return true;
  }
  updateFor(t, e) {
    var n;
    if (!(e & 3)) return this.map(t.changes);
    let r = this.result;
    r.map && !t.changes.empty && (r = r.map(r, t.changes));
    let a = t.changes.mapPos(this.from), u = t.changes.mapPos(this.to, 1), f = _l(t.state);
    if (f > u || !r || e & 2 && (_l(t.startState) == this.from || f < this.limit)) return new xi(this.source, e & 4 ? 1 : 0);
    let h = t.changes.mapPos(this.limit);
    return WD(r.validFor, t.state, a, u) ? new Ls(this.source, this.explicit, h, r, a, u) : r.update && (r = r.update(r, a, u, new Nx(t.state, f, false))) ? new Ls(this.source, this.explicit, h, r, r.from, (n = r.to) !== null && n !== void 0 ? n : _l(t.state)) : new xi(this.source, 1, this.explicit);
  }
  map(t) {
    return t.empty ? this : (this.result.map ? this.result.map(this.result, t) : this.result) ? new Ls(this.source, this.explicit, t.mapPos(this.limit), this.result, t.mapPos(this.from), t.mapPos(this.to, 1)) : new xi(this.source, 0);
  }
  touches(t) {
    return t.changes.touchesRange(this.from, this.to);
  }
}
function WD(l, t, e, n) {
  if (!l) return false;
  let r = t.sliceDoc(e, n);
  return typeof l == "function" ? l(r, e, n, t) : _x(l, true).test(r);
}
const Xm = St.define({ map(l, t) {
  return l.map((e) => e.map(t));
} }), Ux = St.define(), Ze = Te.define({ create() {
  return nc.start();
}, update(l, t) {
  return l.update(t);
}, provide: (l) => [Bm.from(l, (t) => t.tooltip), P.contentAttributes.from(l, (t) => t.attrs)] });
function Km(l, t) {
  const e = t.completion.apply || t.completion.label;
  let n = l.state.field(Ze).active.find((r) => r.source == t.source);
  return n instanceof Ls ? (typeof e == "string" ? l.dispatch({ ...ND(l.state, e, n.from, n.to), annotations: Lx.of(t.completion) }) : e(l, t.completion, n.from, n.to), true) : false;
}
const JD = jD(Ze, Km);
function xu(l, t = "option") {
  return (e) => {
    let n = e.state.field(Ze, false);
    if (!n || !n.open || n.open.disabled || Date.now() - n.open.timestamp < e.state.facet(pe).interactionDelay) return false;
    let r = 1, a;
    t == "page" && (a = CS(e, n.open.tooltip)) && (r = Math.max(2, Math.floor(a.dom.offsetHeight / a.dom.querySelector("li").offsetHeight) - 1));
    let { length: u } = n.open.options, f = n.open.selected > -1 ? n.open.selected + r * (l ? 1 : -1) : l ? 0 : u - 1;
    return f < 0 ? f = t == "page" ? 0 : u - 1 : f >= u && (f = t == "page" ? u - 1 : 0), e.dispatch({ effects: Ux.of(f) }), true;
  };
}
const FD = (l) => {
  let t = l.state.field(Ze, false);
  return l.state.readOnly || !t || !t.open || t.open.selected < 0 || t.open.disabled || Date.now() - t.open.timestamp < l.state.facet(pe).interactionDelay ? false : Km(l, t.open.options[t.open.selected]);
}, md = (l) => l.state.field(Ze, false) ? (l.dispatch({ effects: ic.of(true) }), true) : false, PD = (l) => {
  let t = l.state.field(Ze, false);
  return !t || !t.active.some((e) => e.state != 0) ? false : (l.dispatch({ effects: Sa.of(null) }), true);
};
class ID {
  constructor(t, e) {
    this.active = t, this.context = e, this.time = Date.now(), this.updates = [], this.done = void 0;
  }
}
const $D = 50, tE = 1e3, eE = ee.fromClass(class {
  constructor(l) {
    this.view = l, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = false, this.composing = 0;
    for (let t of l.state.field(Ze).active) t.isPending && this.startQuery(t);
  }
  update(l) {
    let t = l.state.field(Ze), e = l.state.facet(pe);
    if (!l.selectionSet && !l.docChanged && l.startState.field(Ze) == t) return;
    let n = l.transactions.some((a) => {
      let u = Hx(a, e);
      return u & 8 || (a.selection || a.docChanged) && !(u & 3);
    });
    for (let a = 0; a < this.running.length; a++) {
      let u = this.running[a];
      if (n || u.context.abortOnDocChange && l.docChanged || u.updates.length + l.transactions.length > $D && Date.now() - u.time > tE) {
        for (let f of u.context.abortListeners) try {
          f();
        } catch (h) {
          We(this.view.state, h);
        }
        u.context.abortListeners = null, this.running.splice(a--, 1);
      } else u.updates.push(...l.transactions);
    }
    this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), l.transactions.some((a) => a.effects.some((u) => u.is(ic))) && (this.pendingStart = true);
    let r = this.pendingStart ? 50 : e.activateOnTypingDelay;
    if (this.debounceUpdate = t.active.some((a) => a.isPending && !this.running.some((u) => u.active.source == a.source)) ? setTimeout(() => this.startUpdate(), r) : -1, this.composing != 0) for (let a of l.transactions) a.isUserEvent("input.type") ? this.composing = 2 : this.composing == 2 && a.selection && (this.composing = 3);
  }
  startUpdate() {
    this.debounceUpdate = -1, this.pendingStart = false;
    let { state: l } = this.view, t = l.field(Ze);
    for (let e of t.active) e.isPending && !this.running.some((n) => n.active.source == e.source) && this.startQuery(e);
    this.running.length && t.open && t.open.disabled && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(pe).updateSyncTime));
  }
  startQuery(l) {
    let { state: t } = this.view, e = _l(t), n = new Nx(t, e, l.explicit, this.view), r = new ID(l, n);
    this.running.push(r), Promise.resolve(l.source(n)).then((a) => {
      r.context.aborted || (r.done = a || null, this.scheduleAccept());
    }, (a) => {
      this.view.dispatch({ effects: Sa.of(null) }), We(this.view.state, a);
    });
  }
  scheduleAccept() {
    this.running.every((l) => l.done !== void 0) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(pe).updateSyncTime));
  }
  accept() {
    var l;
    this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
    let t = [], e = this.view.state.facet(pe), n = this.view.state.field(Ze);
    for (let r = 0; r < this.running.length; r++) {
      let a = this.running[r];
      if (a.done === void 0) continue;
      if (this.running.splice(r--, 1), a.done) {
        let f = _l(a.updates.length ? a.updates[0].startState : this.view.state), h = Math.min(f, a.done.from + (a.active.explicit ? 0 : 1)), g = new Ls(a.active.source, a.active.explicit, h, a.done, a.done.from, (l = a.done.to) !== null && l !== void 0 ? l : f);
        for (let p of a.updates) g = g.update(p, e);
        if (g.hasResult()) {
          t.push(g);
          continue;
        }
      }
      let u = n.active.find((f) => f.source == a.active.source);
      if (u && u.isPending) if (a.done == null) {
        let f = new xi(a.active.source, 0);
        for (let h of a.updates) f = f.update(h, e);
        f.isPending || t.push(f);
      } else this.startQuery(u);
    }
    (t.length || n.open && n.open.disabled) && this.view.dispatch({ effects: Xm.of(t) });
  }
}, { eventHandlers: { blur(l) {
  let t = this.view.state.field(Ze, false);
  if (t && t.tooltip && this.view.state.facet(pe).closeOnBlur) {
    let e = t.open && CS(this.view, t.open.tooltip);
    (!e || !e.dom.contains(l.relatedTarget)) && setTimeout(() => this.view.dispatch({ effects: Sa.of(null) }), 10);
  }
}, compositionstart() {
  this.composing = 1;
}, compositionend() {
  this.composing == 3 && setTimeout(() => this.view.dispatch({ effects: ic.of(false) }), 20), this.composing = 0;
} } }), iE = typeof navigator == "object" && /Win/.test(navigator.platform), nE = jl.highest(P.domEventHandlers({ keydown(l, t) {
  let e = t.state.field(Ze, false);
  if (!e || !e.open || e.open.disabled || e.open.selected < 0 || l.key.length > 1 || l.ctrlKey && !(iE && l.altKey) || l.metaKey) return false;
  let n = e.open.options[e.open.selected], r = e.active.find((u) => u.source == n.source), a = n.completion.commitCharacters || r.result.commitCharacters;
  return a && a.indexOf(l.key) > -1 && Km(t, n), false;
} })), lE = P.baseTheme({ ".cm-tooltip.cm-tooltip-autocomplete": { "& > ul": { fontFamily: "monospace", whiteSpace: "nowrap", overflow: "hidden auto", maxWidth_fallback: "700px", maxWidth: "min(700px, 95vw)", minWidth: "250px", maxHeight: "10em", height: "100%", listStyle: "none", margin: 0, padding: 0, "& > li, & > completion-section": { padding: "1px 3px", lineHeight: 1.2 }, "& > li": { overflowX: "hidden", textOverflow: "ellipsis", cursor: "pointer" }, "& > completion-section": { display: "list-item", borderBottom: "1px solid silver", paddingLeft: "0.5em", opacity: 0.7 } } }, "&light .cm-tooltip-autocomplete ul li[aria-selected]": { background: "#17c", color: "white" }, "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": { background: "#777" }, "&dark .cm-tooltip-autocomplete ul li[aria-selected]": { background: "#347", color: "white" }, "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": { background: "#444" }, ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": { content: '"\xB7\xB7\xB7"', opacity: 0.5, display: "block", textAlign: "center" }, ".cm-tooltip.cm-completionInfo": { position: "absolute", padding: "3px 9px", width: "max-content", maxWidth: "400px", boxSizing: "border-box", whiteSpace: "pre-line" }, ".cm-completionInfo.cm-completionInfo-left": { right: "100%" }, ".cm-completionInfo.cm-completionInfo-right": { left: "100%" }, ".cm-completionInfo.cm-completionInfo-left-narrow": { right: "30px" }, ".cm-completionInfo.cm-completionInfo-right-narrow": { left: "30px" }, "&light .cm-snippetField": { backgroundColor: "#00000022" }, "&dark .cm-snippetField": { backgroundColor: "#ffffff22" }, ".cm-snippetFieldPosition": { verticalAlign: "text-top", width: 0, height: "1.15em", display: "inline-block", margin: "0 -0.7px -.7em", borderLeft: "1.4px dotted #888" }, ".cm-completionMatchedText": { textDecoration: "underline" }, ".cm-completionDetail": { marginLeft: "0.5em", fontStyle: "italic" }, ".cm-completionIcon": { fontSize: "90%", width: ".8em", display: "inline-block", textAlign: "center", paddingRight: ".6em", opacity: "0.6", boxSizing: "content-box" }, ".cm-completionIcon-function, .cm-completionIcon-method": { "&:after": { content: "'\u0192'" } }, ".cm-completionIcon-class": { "&:after": { content: "'\u25CB'" } }, ".cm-completionIcon-interface": { "&:after": { content: "'\u25CC'" } }, ".cm-completionIcon-variable": { "&:after": { content: "'\u{1D465}'" } }, ".cm-completionIcon-constant": { "&:after": { content: "'\u{1D436}'" } }, ".cm-completionIcon-type": { "&:after": { content: "'\u{1D461}'" } }, ".cm-completionIcon-enum": { "&:after": { content: "'\u222A'" } }, ".cm-completionIcon-property": { "&:after": { content: "'\u25A1'" } }, ".cm-completionIcon-keyword": { "&:after": { content: "'\u{1F511}\uFE0E'" } }, ".cm-completionIcon-namespace": { "&:after": { content: "'\u25A2'" } }, ".cm-completionIcon-text": { "&:after": { content: "'abc'", fontSize: "50%", verticalAlign: "middle" } } }), xa = { brackets: ["(", "[", "{", "'", '"'], before: ")]}:;>", stringPrefixes: [] }, Rl = St.define({ map(l, t) {
  let e = t.mapPos(l, -1, Le.TrackAfter);
  return e ?? void 0;
} }), Qm = new class extends Ll {
}();
Qm.startSide = 1;
Qm.endSide = -1;
const Vx = Te.define({ create() {
  return Bt.empty;
}, update(l, t) {
  if (l = l.map(t.changes), t.selection) {
    let e = t.state.doc.lineAt(t.selection.main.head);
    l = l.update({ filter: (n) => n >= e.from && n <= e.to });
  }
  for (let e of t.effects) e.is(Rl) && (l = l.update({ add: [Qm.range(e.value, e.value + 1)] }));
  return l;
} });
function sE() {
  return [aE, Vx];
}
const gd = "()[]{}<>\xAB\xBB\xBB\xAB\uFF3B\uFF3D\uFF5B\uFF5D";
function qx(l) {
  for (let t = 0; t < gd.length; t += 2) if (gd.charCodeAt(t) == l) return gd.charAt(t + 1);
  return ym(l < 128 ? l : l + 1);
}
function jx(l, t) {
  return l.languageDataAt("closeBrackets", t)[0] || xa;
}
const rE = typeof navigator == "object" && /Android\b/.test(navigator.userAgent), aE = P.inputHandler.of((l, t, e, n) => {
  if ((rE ? l.composing : l.compositionStarted) || l.state.readOnly) return false;
  let r = l.state.selection.main;
  if (n.length > 2 || n.length == 2 && Gi(Qe(n, 0)) == 1 || t != r.from || e != r.to) return false;
  let a = cE(l.state, n);
  return a ? (l.dispatch(a), true) : false;
}), oE = ({ state: l, dispatch: t }) => {
  if (l.readOnly) return false;
  let n = jx(l, l.selection.main.head).brackets || xa.brackets, r = null, a = l.changeByRange((u) => {
    if (u.empty) {
      let f = fE(l.doc, u.head);
      for (let h of n) if (h == f && pc(l.doc, u.head) == qx(Qe(h, 0))) return { changes: { from: u.head - h.length, to: u.head + h.length }, range: K.cursor(u.head - h.length) };
    }
    return { range: r = u };
  });
  return r || t(l.update(a, { scrollIntoView: true, userEvent: "delete.backward" })), !r;
}, uE = [{ key: "Backspace", run: oE }];
function cE(l, t) {
  let e = jx(l, l.selection.main.head), n = e.brackets || xa.brackets;
  for (let r of n) {
    let a = qx(Qe(r, 0));
    if (t == r) return a == r ? mE(l, r, n.indexOf(r + r + r) > -1, e) : hE(l, r, a, e.before || xa.before);
    if (t == a && Yx(l, l.selection.main.from)) return dE(l, r, a);
  }
  return null;
}
function Yx(l, t) {
  let e = false;
  return l.field(Vx).between(0, l.doc.length, (n) => {
    n == t && (e = true);
  }), e;
}
function pc(l, t) {
  let e = l.sliceString(t, t + 2);
  return e.slice(0, Gi(Qe(e, 0)));
}
function fE(l, t) {
  let e = l.sliceString(t - 2, t);
  return Gi(Qe(e, 0)) == e.length ? e : e.slice(1);
}
function hE(l, t, e, n) {
  let r = null, a = l.changeByRange((u) => {
    if (!u.empty) return { changes: [{ insert: t, from: u.from }, { insert: e, from: u.to }], effects: Rl.of(u.to + t.length), range: K.range(u.anchor + t.length, u.head + t.length) };
    let f = pc(l.doc, u.head);
    return !f || /\s/.test(f) || n.indexOf(f) > -1 ? { changes: { insert: t + e, from: u.head }, effects: Rl.of(u.head + t.length), range: K.cursor(u.head + t.length) } : { range: r = u };
  });
  return r ? null : l.update(a, { scrollIntoView: true, userEvent: "input.type" });
}
function dE(l, t, e) {
  let n = null, r = l.changeByRange((a) => a.empty && pc(l.doc, a.head) == e ? { changes: { from: a.head, to: a.head + e.length, insert: e }, range: K.cursor(a.head + e.length) } : n = { range: a });
  return n ? null : l.update(r, { scrollIntoView: true, userEvent: "input.type" });
}
function mE(l, t, e, n) {
  let r = n.stringPrefixes || xa.stringPrefixes, a = null, u = l.changeByRange((f) => {
    if (!f.empty) return { changes: [{ insert: t, from: f.from }, { insert: t, from: f.to }], effects: Rl.of(f.to + t.length), range: K.range(f.anchor + t.length, f.head + t.length) };
    let h = f.head, g = pc(l.doc, h), p;
    if (g == t) {
      if (Vb(l, h)) return { changes: { insert: t + t, from: h }, effects: Rl.of(h + t.length), range: K.cursor(h + t.length) };
      if (Yx(l, h)) {
        let v = e && l.sliceDoc(h, h + t.length * 3) == t + t + t ? t + t + t : t;
        return { changes: { from: h, to: h + v.length, insert: v }, range: K.cursor(h + v.length) };
      }
    } else {
      if (e && l.sliceDoc(h - 2 * t.length, h) == t + t && (p = qb(l, h - 2 * t.length, r)) > -1 && Vb(l, p)) return { changes: { insert: t + t + t + t, from: h }, effects: Rl.of(h + t.length), range: K.cursor(h + t.length) };
      if (l.charCategorizer(h)(g) != Pt.Word && qb(l, h, r) > -1 && !gE(l, h, t, r)) return { changes: { insert: t + t, from: h }, effects: Rl.of(h + t.length), range: K.cursor(h + t.length) };
    }
    return { range: a = f };
  });
  return a ? null : l.update(u, { scrollIntoView: true, userEvent: "input.type" });
}
function Vb(l, t) {
  let e = Be(l).resolveInner(t + 1);
  return e.parent && e.from == t;
}
function gE(l, t, e, n) {
  let r = Be(l).resolveInner(t, -1), a = n.reduce((u, f) => Math.max(u, f.length), 0);
  for (let u = 0; u < 5; u++) {
    let f = l.sliceDoc(r.from, Math.min(r.to, r.from + e.length + a)), h = f.indexOf(e);
    if (!h || h > -1 && n.indexOf(f.slice(0, h)) > -1) {
      let p = r.firstChild;
      for (; p && p.from == r.from && p.to - p.from > e.length + h; ) {
        if (l.sliceDoc(p.to - e.length, p.to) == e) return false;
        p = p.firstChild;
      }
      return true;
    }
    let g = r.to == t && r.parent;
    if (!g) break;
    r = g;
  }
  return false;
}
function qb(l, t, e) {
  let n = l.charCategorizer(t);
  if (n(l.sliceDoc(t - 1, t)) != Pt.Word) return t;
  for (let r of e) {
    let a = t - r.length;
    if (l.sliceDoc(a, t) == r && n(l.sliceDoc(a - 1, a)) != Pt.Word) return a;
  }
  return -1;
}
function pE(l = {}) {
  return [nE, Ze, pe.of(l), eE, yE, lE];
}
const Gx = [{ key: "Ctrl-Space", run: md }, { mac: "Alt-`", run: md }, { mac: "Alt-i", run: md }, { key: "Escape", run: PD }, { key: "ArrowDown", run: xu(true) }, { key: "ArrowUp", run: xu(false) }, { key: "PageDown", run: xu(true, "page") }, { key: "PageUp", run: xu(false, "page") }, { key: "Enter", run: FD }], yE = jl.highest(ac.computeN([pe], (l) => l.facet(pe).defaultKeymap ? [Gx] : []));
class jb {
  constructor(t, e, n) {
    this.from = t, this.to = e, this.diagnostic = n;
  }
}
class El {
  constructor(t, e, n) {
    this.diagnostics = t, this.panel = e, this.selected = n;
  }
  static init(t, e, n) {
    let r = n.facet(wa).markerFilter;
    r && (t = r(t, n));
    let a = t.slice().sort((S, w) => S.from - w.from || S.to - w.to), u = new Sn(), f = [], h = 0, g = n.doc.iter(), p = 0, y = n.doc.length;
    for (let S = 0; ; ) {
      let w = S == a.length ? null : a[S];
      if (!w && !f.length) break;
      let C, T;
      if (f.length) C = h, T = f.reduce((L, Q) => Math.min(L, Q.to), w && w.from > C ? w.from : 1e8);
      else {
        if (C = w.from, C > y) break;
        T = w.to, f.push(w), S++;
      }
      for (; S < a.length; ) {
        let L = a[S];
        if (L.from == C && (L.to > L.from || L.to == C)) f.push(L), S++, T = Math.min(L.to, T);
        else {
          T = Math.min(L.from, T);
          break;
        }
      }
      T = Math.min(T, y);
      let O = false;
      if (f.some((L) => L.from == C && (L.to == T || T == y)) && (O = C == T, !O && T - C < 10)) {
        let L = C - (p + g.value.length);
        L > 0 && (g.next(L), p = C);
        for (let Q = C; ; ) {
          if (Q >= T) {
            O = true;
            break;
          }
          if (!g.lineBreak && p + g.value.length > Q) break;
          Q = p + g.value.length, p += g.value.length, g.next();
        }
      }
      let j = EE(f);
      if (O) u.add(C, C, ut.widget({ widget: new TE(j), diagnostics: f.slice() }));
      else {
        let L = f.reduce((Q, _) => _.markClass ? Q + " " + _.markClass : Q, "");
        u.add(C, T, ut.mark({ class: "cm-lintRange cm-lintRange-" + j + L, diagnostics: f.slice(), inclusiveEnd: f.some((Q) => Q.to > T) }));
      }
      if (h = T, h == y) break;
      for (let L = 0; L < f.length; L++) f[L].to <= h && f.splice(L--, 1);
    }
    let v = u.finish();
    return new El(v, e, Ks(v));
  }
}
function Ks(l, t = null, e = 0) {
  let n = null;
  return l.between(e, 1e9, (r, a, { spec: u }) => {
    if (!(t && u.diagnostics.indexOf(t) < 0)) if (!n) n = new jb(r, a, t || u.diagnostics[0]);
    else {
      if (u.diagnostics.indexOf(n.diagnostic) < 0) return false;
      n = new jb(n.from, a, n.diagnostic);
    }
  }), n;
}
function bE(l, t) {
  let e = t.pos, n = t.end || e, r = l.state.facet(wa).hideOn(l, e, n);
  if (r != null) return r;
  let a = l.startState.doc.lineAt(t.pos);
  return !!(l.effects.some((u) => u.is(Xx)) || l.changes.touchesRange(a.from, Math.max(a.to, n)));
}
function vE(l, t) {
  return l.field(oi, false) ? t : t.concat(St.appendConfig.of(BE));
}
const Xx = St.define(), Zm = St.define(), Kx = St.define(), oi = Te.define({ create() {
  return new El(ut.none, null, null);
}, update(l, t) {
  if (t.docChanged && l.diagnostics.size) {
    let e = l.diagnostics.map(t.changes), n = null, r = l.panel;
    if (l.selected) {
      let a = t.changes.mapPos(l.selected.from, 1);
      n = Ks(e, l.selected.diagnostic, a) || Ks(e, null, a);
    }
    !e.size && r && t.state.facet(wa).autoPanel && (r = null), l = new El(e, r, n);
  }
  for (let e of t.effects) if (e.is(Xx)) {
    let n = t.state.facet(wa).autoPanel ? e.value.length ? Ca.open : null : l.panel;
    l = El.init(e.value, n, t.state);
  } else e.is(Zm) ? l = new El(l.diagnostics, e.value ? Ca.open : null, l.selected) : e.is(Kx) && (l = new El(l.diagnostics, l.panel, e.value));
  return l;
}, provide: (l) => [ga.from(l, (t) => t.panel), P.decorations.from(l, (t) => t.diagnostics)] }), SE = ut.mark({ class: "cm-lintRange cm-lintRange-active" });
function xE(l, t, e) {
  let { diagnostics: n } = l.state.field(oi), r, a = -1, u = -1;
  n.between(t - (e < 0 ? 1 : 0), t + (e > 0 ? 1 : 0), (h, g, { spec: p }) => {
    if (t >= h && t <= g && (h == g || (t > h || e > 0) && (t < g || e < 0))) return r = p.diagnostics, a = h, u = g, false;
  });
  let f = l.state.facet(wa).tooltipFilter;
  return r && f && (r = f(r, l.state)), r ? { pos: a, end: u, above: l.state.doc.lineAt(a).to < u, create() {
    return { dom: wE(l, r) };
  } } : null;
}
function wE(l, t) {
  return Gt("ul", { class: "cm-tooltip-lint" }, t.map((e) => Zx(l, e, false)));
}
const CE = (l) => {
  let t = l.state.field(oi, false);
  (!t || !t.panel) && l.dispatch({ effects: vE(l.state, [Zm.of(true)]) });
  let e = ma(l, Ca.open);
  return e && e.dom.querySelector(".cm-panel-lint ul").focus(), true;
}, Yb = (l) => {
  let t = l.state.field(oi, false);
  return !t || !t.panel ? false : (l.dispatch({ effects: Zm.of(false) }), true);
}, AE = (l) => {
  let t = l.state.field(oi, false);
  if (!t) return false;
  let e = l.state.selection.main, n = t.diagnostics.iter(e.to + 1);
  return !n.value && (n = t.diagnostics.iter(0), !n.value || n.from == e.from && n.to == e.to) ? false : (l.dispatch({ selection: { anchor: n.from, head: n.to }, scrollIntoView: true }), true);
}, ME = [{ key: "Mod-Shift-m", run: CE, preventDefault: true }, { key: "F8", run: AE }], wa = et.define({ combine(l) {
  return { sources: l.map((t) => t.source).filter((t) => t != null), ...Pi(l.map((t) => t.config), { delay: 750, markerFilter: null, tooltipFilter: null, needsRefresh: null, hideOn: () => null }, { delay: Math.max, markerFilter: Gb, tooltipFilter: Gb, needsRefresh: (t, e) => t ? e ? (n) => t(n) || e(n) : t : e, hideOn: (t, e) => t ? e ? (n, r, a) => t(n, r, a) || e(n, r, a) : t : e, autoPanel: (t, e) => t || e }) };
} });
function Gb(l, t) {
  return l ? t ? (e, n) => t(l(e, n), n) : l : t;
}
function Qx(l) {
  let t = [];
  if (l) t: for (let { name: e } of l) {
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      if (/[a-zA-Z]/.test(r) && !t.some((a) => a.toLowerCase() == r.toLowerCase())) {
        t.push(r);
        continue t;
      }
    }
    t.push("");
  }
  return t;
}
function Zx(l, t, e) {
  var n;
  let r = e ? Qx(t.actions) : [];
  return Gt("li", { class: "cm-diagnostic cm-diagnostic-" + t.severity }, Gt("span", { class: "cm-diagnosticText" }, t.renderMessage ? t.renderMessage(l) : t.message), (n = t.actions) === null || n === void 0 ? void 0 : n.map((a, u) => {
    let f = false, h = (S) => {
      if (S.preventDefault(), f) return;
      f = true;
      let w = Ks(l.state.field(oi).diagnostics, t);
      w && a.apply(l, w.from, w.to);
    }, { name: g } = a, p = r[u] ? g.indexOf(r[u]) : -1, y = p < 0 ? g : [g.slice(0, p), Gt("u", g.slice(p, p + 1)), g.slice(p + 1)], v = a.markClass ? " " + a.markClass : "";
    return Gt("button", { type: "button", class: "cm-diagnosticAction" + v, onclick: h, onmousedown: h, "aria-label": ` Action: ${g}${p < 0 ? "" : ` (access key "${r[u]})"`}.` }, y);
  }), t.source && Gt("div", { class: "cm-diagnosticSource" }, t.source));
}
class TE extends Cn {
  constructor(t) {
    super(), this.sev = t;
  }
  eq(t) {
    return t.sev == this.sev;
  }
  toDOM() {
    return Gt("span", { class: "cm-lintPoint cm-lintPoint-" + this.sev });
  }
}
class Xb {
  constructor(t, e) {
    this.diagnostic = e, this.id = "item_" + Math.floor(Math.random() * 4294967295).toString(16), this.dom = Zx(t, e, true), this.dom.id = this.id, this.dom.setAttribute("role", "option");
  }
}
class Ca {
  constructor(t) {
    this.view = t, this.items = [];
    let e = (r) => {
      if (r.keyCode == 27) Yb(this.view), this.view.focus();
      else if (r.keyCode == 38 || r.keyCode == 33) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
      else if (r.keyCode == 40 || r.keyCode == 34) this.moveSelection((this.selectedIndex + 1) % this.items.length);
      else if (r.keyCode == 36) this.moveSelection(0);
      else if (r.keyCode == 35) this.moveSelection(this.items.length - 1);
      else if (r.keyCode == 13) this.view.focus();
      else if (r.keyCode >= 65 && r.keyCode <= 90 && this.selectedIndex >= 0) {
        let { diagnostic: a } = this.items[this.selectedIndex], u = Qx(a.actions);
        for (let f = 0; f < u.length; f++) if (u[f].toUpperCase().charCodeAt(0) == r.keyCode) {
          let h = Ks(this.view.state.field(oi).diagnostics, a);
          h && a.actions[f].apply(t, h.from, h.to);
        }
      } else return;
      r.preventDefault();
    }, n = (r) => {
      for (let a = 0; a < this.items.length; a++) this.items[a].dom.contains(r.target) && this.moveSelection(a);
    };
    this.list = Gt("ul", { tabIndex: 0, role: "listbox", "aria-label": this.view.state.phrase("Diagnostics"), onkeydown: e, onclick: n }), this.dom = Gt("div", { class: "cm-panel-lint" }, this.list, Gt("button", { type: "button", name: "close", "aria-label": this.view.state.phrase("close"), onclick: () => Yb(this.view) }, "\xD7")), this.update();
  }
  get selectedIndex() {
    let t = this.view.state.field(oi).selected;
    if (!t) return -1;
    for (let e = 0; e < this.items.length; e++) if (this.items[e].diagnostic == t.diagnostic) return e;
    return -1;
  }
  update() {
    let { diagnostics: t, selected: e } = this.view.state.field(oi), n = 0, r = false, a = null, u = /* @__PURE__ */ new Set();
    for (t.between(0, this.view.state.doc.length, (f, h, { spec: g }) => {
      for (let p of g.diagnostics) {
        if (u.has(p)) continue;
        u.add(p);
        let y = -1, v;
        for (let S = n; S < this.items.length; S++) if (this.items[S].diagnostic == p) {
          y = S;
          break;
        }
        y < 0 ? (v = new Xb(this.view, p), this.items.splice(n, 0, v), r = true) : (v = this.items[y], y > n && (this.items.splice(n, y - n), r = true)), e && v.diagnostic == e.diagnostic ? v.dom.hasAttribute("aria-selected") || (v.dom.setAttribute("aria-selected", "true"), a = v) : v.dom.hasAttribute("aria-selected") && v.dom.removeAttribute("aria-selected"), n++;
      }
    }); n < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0); ) r = true, this.items.pop();
    this.items.length == 0 && (this.items.push(new Xb(this.view, { from: -1, to: -1, severity: "info", message: this.view.state.phrase("No diagnostics") })), r = true), a ? (this.list.setAttribute("aria-activedescendant", a.id), this.view.requestMeasure({ key: this, read: () => ({ sel: a.dom.getBoundingClientRect(), panel: this.list.getBoundingClientRect() }), write: ({ sel: f, panel: h }) => {
      let g = h.height / this.list.offsetHeight;
      f.top < h.top ? this.list.scrollTop -= (h.top - f.top) / g : f.bottom > h.bottom && (this.list.scrollTop += (f.bottom - h.bottom) / g);
    } })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), r && this.sync();
  }
  sync() {
    let t = this.list.firstChild;
    function e() {
      let n = t;
      t = n.nextSibling, n.remove();
    }
    for (let n of this.items) if (n.dom.parentNode == this.list) {
      for (; t != n.dom; ) e();
      t = n.dom.nextSibling;
    } else this.list.insertBefore(n.dom, t);
    for (; t; ) e();
  }
  moveSelection(t) {
    if (this.selectedIndex < 0) return;
    let e = this.view.state.field(oi), n = Ks(e.diagnostics, this.items[t].diagnostic);
    n && this.view.dispatch({ selection: { anchor: n.from, head: n.to }, scrollIntoView: true, effects: Kx.of(n) });
  }
  static open(t) {
    return new Ca(t);
  }
}
function kE(l, t = 'viewBox="0 0 40 40"') {
  return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${t}>${encodeURIComponent(l)}</svg>')`;
}
function wu(l) {
  return kE(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${l}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"');
}
const OE = P.baseTheme({ ".cm-diagnostic": { padding: "3px 6px 3px 8px", marginLeft: "-1px", display: "block", whiteSpace: "pre-wrap" }, ".cm-diagnostic-error": { borderLeft: "5px solid #d11" }, ".cm-diagnostic-warning": { borderLeft: "5px solid orange" }, ".cm-diagnostic-info": { borderLeft: "5px solid #999" }, ".cm-diagnostic-hint": { borderLeft: "5px solid #66d" }, ".cm-diagnosticAction": { font: "inherit", border: "none", padding: "2px 4px", backgroundColor: "#444", color: "white", borderRadius: "3px", marginLeft: "8px", cursor: "pointer" }, ".cm-diagnosticSource": { fontSize: "70%", opacity: 0.7 }, ".cm-lintRange": { backgroundPosition: "left bottom", backgroundRepeat: "repeat-x", paddingBottom: "0.7px" }, ".cm-lintRange-error": { backgroundImage: wu("#d11") }, ".cm-lintRange-warning": { backgroundImage: wu("orange") }, ".cm-lintRange-info": { backgroundImage: wu("#999") }, ".cm-lintRange-hint": { backgroundImage: wu("#66d") }, ".cm-lintRange-active": { backgroundColor: "#ffdd9980" }, ".cm-tooltip-lint": { padding: 0, margin: 0 }, ".cm-lintPoint": { position: "relative", "&:after": { content: '""', position: "absolute", bottom: 0, left: "-2px", borderLeft: "3px solid transparent", borderRight: "3px solid transparent", borderBottom: "4px solid #d11" } }, ".cm-lintPoint-warning": { "&:after": { borderBottomColor: "orange" } }, ".cm-lintPoint-info": { "&:after": { borderBottomColor: "#999" } }, ".cm-lintPoint-hint": { "&:after": { borderBottomColor: "#66d" } }, ".cm-panel.cm-panel-lint": { position: "relative", "& ul": { maxHeight: "100px", overflowY: "auto", "& [aria-selected]": { backgroundColor: "#ddd", "& u": { textDecoration: "underline" } }, "&:focus [aria-selected]": { background_fallback: "#bdf", backgroundColor: "Highlight", color_fallback: "white", color: "HighlightText" }, "& u": { textDecoration: "none" }, padding: 0, margin: 0 }, "& [name=close]": { position: "absolute", top: "0", right: "2px", background: "inherit", border: "none", font: "inherit", padding: 0, margin: 0 } } });
function DE(l) {
  return l == "error" ? 4 : l == "warning" ? 3 : l == "info" ? 2 : 1;
}
function EE(l) {
  let t = "hint", e = 1;
  for (let n of l) {
    let r = DE(n.severity);
    r > e && (e = r, t = n.severity);
  }
  return t;
}
const BE = [oi, P.decorations.compute([oi], (l) => {
  let { selected: t, panel: e } = l.field(oi);
  return !t || !e || t.from == t.to ? ut.none : ut.set([SE.range(t.from, t.to)]);
}), xT(xE, { hideOn: bE }), OE];
var Kb = function(t) {
  t === void 0 && (t = {});
  var { crosshairCursor: e = false } = t, n = [];
  t.closeBracketsKeymap !== false && (n = n.concat(uE)), t.defaultKeymap !== false && (n = n.concat(iD)), t.searchKeymap !== false && (n = n.concat(OD)), t.historyKeymap !== false && (n = n.concat(uO)), t.foldKeymap !== false && (n = n.concat(Ck)), t.completionKeymap !== false && (n = n.concat(Gx)), t.lintKeymap !== false && (n = n.concat(ME));
  var r = [];
  return t.lineNumbers !== false && r.push(RT()), t.highlightActiveLineGutter !== false && r.push(_T()), t.highlightSpecialChars !== false && r.push(FM()), t.history !== false && r.push(tO()), t.foldGutter !== false && r.push(kk()), t.drawSelection !== false && r.push(VM()), t.dropCursor !== false && r.push(XM()), t.allowMultipleSelections !== false && r.push(Ot.allowMultipleSelections.of(true)), t.indentOnInput !== false && r.push(dk()), t.syntaxHighlighting !== false && r.push(YS(Bk, { fallback: true })), t.bracketMatching !== false && r.push(Uk()), t.closeBrackets !== false && r.push(sE()), t.autocompletion !== false && r.push(pE()), t.rectangularSelection !== false && r.push(cT()), e !== false && r.push(dT()), t.highlightActiveLine !== false && r.push(iT()), t.highlightSelectionMatches !== false && r.push(uD()), t.tabSize && typeof t.tabSize == "number" && r.push(uc.of(" ".repeat(t.tabSize))), r.concat([ac.of(n.flat())]).filter(Boolean);
};
const RE = "#e5c07b", Qb = "#e06c75", zE = "#56b6c2", NE = "#ffffff", Nu = "#abb2bf", gm = "#7d8799", _E = "#61afef", LE = "#98c379", Zb = "#d19a66", HE = "#c678dd", UE = "#21252b", Wb = "#2c313a", Jb = "#282c34", pd = "#353a42", VE = "#3E4451", Fb = "#528bff", qE = P.theme({ "&": { color: Nu, backgroundColor: Jb }, ".cm-content": { caretColor: Fb }, ".cm-cursor, .cm-dropCursor": { borderLeftColor: Fb }, "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": { backgroundColor: VE }, ".cm-panels": { backgroundColor: UE, color: Nu }, ".cm-panels.cm-panels-top": { borderBottom: "2px solid black" }, ".cm-panels.cm-panels-bottom": { borderTop: "2px solid black" }, ".cm-searchMatch": { backgroundColor: "#72a1ff59", outline: "1px solid #457dff" }, ".cm-searchMatch.cm-searchMatch-selected": { backgroundColor: "#6199ff2f" }, ".cm-activeLine": { backgroundColor: "#6699ff0b" }, ".cm-selectionMatch": { backgroundColor: "#aafe661a" }, "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bad0f847" }, ".cm-gutters": { backgroundColor: Jb, color: gm, border: "none" }, ".cm-activeLineGutter": { backgroundColor: Wb }, ".cm-foldPlaceholder": { backgroundColor: "transparent", border: "none", color: "#ddd" }, ".cm-tooltip": { border: "none", backgroundColor: pd }, ".cm-tooltip .cm-tooltip-arrow:before": { borderTopColor: "transparent", borderBottomColor: "transparent" }, ".cm-tooltip .cm-tooltip-arrow:after": { borderTopColor: pd, borderBottomColor: pd }, ".cm-tooltip-autocomplete": { "& > ul > li[aria-selected]": { backgroundColor: Wb, color: Nu } } }, { dark: true }), jE = Ea.define([{ tag: q.keyword, color: HE }, { tag: [q.name, q.deleted, q.character, q.propertyName, q.macroName], color: Qb }, { tag: [q.function(q.variableName), q.labelName], color: _E }, { tag: [q.color, q.constant(q.name), q.standard(q.name)], color: Zb }, { tag: [q.definition(q.name), q.separator], color: Nu }, { tag: [q.typeName, q.className, q.number, q.changed, q.annotation, q.modifier, q.self, q.namespace], color: RE }, { tag: [q.operator, q.operatorKeyword, q.url, q.escape, q.regexp, q.link, q.special(q.string)], color: zE }, { tag: [q.meta, q.comment], color: gm }, { tag: q.strong, fontWeight: "bold" }, { tag: q.emphasis, fontStyle: "italic" }, { tag: q.strikethrough, textDecoration: "line-through" }, { tag: q.link, color: gm, textDecoration: "underline" }, { tag: q.heading, fontWeight: "bold", color: Qb }, { tag: [q.atom, q.bool, q.special(q.variableName)], color: Zb }, { tag: [q.processingInstruction, q.string, q.inserted], color: LE }, { tag: q.invalid, color: NE }]), YE = [qE, YS(jE)];
var GE = P.theme({ "&": { backgroundColor: "#fff" } }, { dark: false }), XE = function(t) {
  t === void 0 && (t = {});
  var { indentWithTab: e = true, editable: n = true, readOnly: r = false, theme: a = "light", placeholder: u = "", basicSetup: f = true } = t, h = [];
  switch (e && h.unshift(ac.of([nD])), f && (typeof f == "boolean" ? h.unshift(Kb()) : h.unshift(Kb(f))), u && h.unshift(rT(u)), a) {
    case "light":
      h.push(GE);
      break;
    case "dark":
      h.push(YE);
      break;
    case "none":
      break;
    default:
      h.push(a);
      break;
  }
  return n === false && h.push(P.editable.of(false)), r && h.push(Ot.readOnly.of(true)), [...h];
}, KE = (l) => ({ line: l.state.doc.lineAt(l.state.selection.main.from), lineCount: l.state.doc.lines, lineBreak: l.state.lineBreak, length: l.state.doc.length, readOnly: l.state.readOnly, tabSize: l.state.tabSize, selection: l.state.selection, selectionAsSingle: l.state.selection.asSingle().main, ranges: l.state.selection.ranges, selectionCode: l.state.sliceDoc(l.state.selection.main.from, l.state.selection.main.to), selections: l.state.selection.ranges.map((t) => l.state.sliceDoc(t.from, t.to)), selectedText: l.state.selection.ranges.some((t) => !t.empty) });
class QE {
  constructor(t, e) {
    this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = false, this.isTimeExhausted = false, this.callbacks = [], this.timeLeftMS = e, this.timeoutMS = e, this.callbacks.push(t);
  }
  tick() {
    if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
      this.isTimeExhausted = true;
      var t = this.callbacks.slice();
      this.callbacks.length = 0, t.forEach((e) => {
        try {
          e();
        } catch (n) {
          console.error("TimeoutLatch callback error:", n);
        }
      });
    }
  }
  cancel() {
    this.isCancelled = true, this.callbacks.length = 0;
  }
  reset() {
    this.timeLeftMS = this.timeoutMS, this.isCancelled = false, this.isTimeExhausted = false;
  }
  get isDone() {
    return this.isCancelled || this.isTimeExhausted;
  }
}
class Pb {
  constructor() {
    this.interval = null, this.latches = /* @__PURE__ */ new Set();
  }
  add(t) {
    this.latches.add(t), this.start();
  }
  remove(t) {
    this.latches.delete(t), this.latches.size === 0 && this.stop();
  }
  start() {
    this.interval === null && (this.interval = setInterval(() => {
      this.latches.forEach((t) => {
        t.tick(), t.isDone && this.remove(t);
      });
    }, 1));
  }
  stop() {
    this.interval !== null && (clearInterval(this.interval), this.interval = null);
  }
}
var yd = null, ZE = () => typeof window > "u" ? new Pb() : (yd || (yd = new Pb()), yd), Ib = Fi.define(), WE = 200, JE = [];
function FE(l) {
  var { value: t, selection: e, onChange: n, onStatistics: r, onCreateEditor: a, onUpdate: u, extensions: f = JE, autoFocus: h, theme: g = "light", height: p = null, minHeight: y = null, maxHeight: v = null, width: S = null, minWidth: w = null, maxWidth: C = null, placeholder: T = "", editable: O = true, readOnly: j = false, indentWithTab: L = true, basicSetup: Q = true, root: _, initialState: G } = l, [V, lt] = Ft.useState(), [tt, pt] = Ft.useState(), [at, I] = Ft.useState(), ft = Ft.useState(() => ({ current: null }))[0], ht = Ft.useState(() => ({ current: null }))[0], yt = P.theme({ "&": { height: p, minHeight: y, maxHeight: v, width: S, minWidth: w, maxWidth: C }, "& .cm-scroller": { height: "100% !important" } }), z = P.updateListener.of((rt) => {
    if (rt.docChanged && typeof n == "function" && !rt.transactions.some((H) => H.annotation(Ib))) {
      ft.current ? ft.current.reset() : (ft.current = new QE(() => {
        if (ht.current) {
          var H = ht.current;
          ht.current = null, H();
        }
        ft.current = null;
      }, WE), ZE().add(ft.current));
      var mt = rt.state.doc, M = mt.toString();
      n(M, rt);
    }
    r && r(KE(rt));
  }), Z = XE({ theme: g, editable: O, readOnly: j, placeholder: T, indentWithTab: L, basicSetup: Q }), it = [z, yt, ...Z];
  return u && typeof u == "function" && it.push(P.updateListener.of(u)), it = it.concat(f), Ft.useLayoutEffect(() => {
    if (V && !at) {
      var rt = { doc: t, selection: e, extensions: it }, mt = G ? Ot.fromJSON(G.json, rt, G.fields) : Ot.create(rt);
      if (I(mt), !tt) {
        var M = new P({ state: mt, parent: V, root: _ });
        pt(M), a && a(M, mt);
      }
    }
    return () => {
      tt && (I(void 0), pt(void 0));
    };
  }, [V, at]), Ft.useEffect(() => {
    l.container && lt(l.container);
  }, [l.container]), Ft.useEffect(() => () => {
    tt && (tt.destroy(), pt(void 0)), ft.current && (ft.current.cancel(), ft.current = null);
  }, [tt]), Ft.useEffect(() => {
    h && tt && tt.focus();
  }, [h, tt]), Ft.useEffect(() => {
    tt && tt.dispatch({ effects: St.reconfigure.of(it) });
  }, [g, f, p, y, v, S, w, C, T, O, j, L, Q, n, u]), Ft.useEffect(() => {
    if (t !== void 0) {
      var rt = tt ? tt.state.doc.toString() : "";
      if (tt && t !== rt) {
        var mt = ft.current && !ft.current.isDone, M = () => {
          tt && t !== tt.state.doc.toString() && tt.dispatch({ changes: { from: 0, to: tt.state.doc.toString().length, insert: t || "" }, annotations: [Ib.of(true)] });
        };
        mt ? ht.current = M : M();
      }
    }
  }, [t, tt]), { state: at, setState: I, view: tt, setView: pt, container: V, setContainer: lt };
}
var PE = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"], Wx = Ft.forwardRef((l, t) => {
  var { className: e, value: n = "", selection: r, extensions: a = [], onChange: u, onStatistics: f, onCreateEditor: h, onUpdate: g, autoFocus: p, theme: y = "light", height: v, minHeight: S, maxHeight: w, width: C, minWidth: T, maxWidth: O, basicSetup: j, placeholder: L, indentWithTab: Q, editable: _, readOnly: G, root: V, initialState: lt } = l, tt = NC(l, PE), pt = Ft.useRef(null), { state: at, view: I, container: ft, setContainer: ht } = FE({ root: V, value: n, autoFocus: p, theme: y, height: v, minHeight: S, maxHeight: w, width: C, minWidth: T, maxWidth: O, basicSetup: j, placeholder: L, indentWithTab: Q, editable: _, readOnly: G, selection: r, onChange: u, onStatistics: f, onCreateEditor: h, onUpdate: g, extensions: a, initialState: lt });
  Ft.useImperativeHandle(t, () => ({ editor: pt.current, state: at, view: I }), [pt, ft, at, I]);
  var yt = Ft.useCallback((Z) => {
    pt.current = Z, ht(Z);
  }, [ht]);
  if (typeof n != "string") throw new Error("value must be typeof string but got " + typeof n);
  var z = typeof y == "string" ? "cm-theme-" + y : "cm-theme";
  return wt.jsx("div", vd({ ref: yt, className: "" + z + (e ? " " + e : "") }, tt));
});
Wx.displayName = "CodeMirror";
const IE = ee.fromClass(class {
  constructor(l) {
    __publicField(this, "decorations");
    this.decorations = this.getDecorations(l);
  }
  update(l) {
    (l.docChanged || l.viewportChanged) && (this.decorations = this.getDecorations(l.view));
  }
  getDecorations(l) {
    const t = [], e = /(\/\/.*)/.source, n = /(\/\*[\s\S]*?\*\/)/.source, r = /("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`)/.source, a = /(\b(?:true|false)\b)/.source, u = /(\b\d+\b)/.source, f = /(\b(?:if|else|return)\b)/.source, h = /(\b(?:signature|bool|string|number)\b)/.source, g = /(\b(?:pragma|bithoven|version|target|legacy|segwit|taproot)\b)/.source, p = /(\b(?:verify|after|older)\b)/.source, y = /(\b(?:checksig|sha256|ripemd160)\b)/.source, v = /(\b(?:len)\b)/.source, S = /(==|!=|>=|<=|>|<)/.source, w = /(\|\||&&)/.source, C = /(\+\+|--|\bnegate\b|\babs\b|!)/.source, T = /([+|-])/.source, O = /(\b(?:max|min)\b)/.source, j = new RegExp([e, n, r, a, u, f, h, g, p, y, v, S, w, C, T, O].join("|"), "g");
    for (const L of l.visibleRanges) {
      const Q = l.state.doc.sliceString(L.from, L.to);
      let _;
      for (; _ = j.exec(Q); ) {
        let G = "";
        _[1] || _[2] ? G = "cm-comment" : _[3] ? G = "cm-string" : _[4] ? G = "cm-bool" : _[5] ? G = "cm-number" : _[6] ? G = "cm-control" : _[7] ? G = "cm-type" : _[8] ? G = "cm-pragma" : _[9] ? G = "cm-statement" : _[10] ? G = "cm-crypto" : _[11] ? G = "cm-byte" : G = "cm-operation";
        const V = L.from + _.index, lt = V + _[0].length;
        G && t.push(ut.mark({ class: G }).range(V, lt));
      }
    }
    return ut.set(t);
  }
}, { decorations: (l) => l.decorations }), $E = "400px", _u = [{ id: "htlc", name: "HTLC (Hash Time-Locked Contract)", difficulty: "intermediate", description: "Lightning Network standard: hash locks + timelocks", icon: "\u26A1", code: `pragma bithoven version 0.0.1;
pragma bithoven target segwit;

(condition: bool, sig_alice: signature)
(condition: bool, preimage: string, sig_bob: signature)
{
    // If want to spend if branch, condition witness item should be true.
    if condition {
        // Relative locktime for 1000 block confirmation.
        older 1000;
        // If locktime satisfied, alice can redeem by providing signature.
        return checksig (sig_alice, "0245a6b3f8eeab8e88501a9a25391318dce9bf35e24c377ee82799543606bf5212");
    } else {
        // Bob needs to provide secret preimage to unlock hash lock.
        verify sha256 sha256 preimage == "53de742e2e323e3290234052a702458589c30d2c813bf9f866bef1b651c4e45f";
        // If hashlock satisfied, bob can redeem by providing signature.
        return checksig (sig_bob, "0345a6b3f8eeab8e88501a9a25391318dce9bf35e24c377ee82799543606bf5212");
    }
}
` }, { id: "singlesig", name: "Single Signature", difficulty: "beginner", description: "Basic P2PKH-style signature check", icon: "\u270D\uFE0F", code: `pragma bithoven version 0.0.1;
pragma bithoven target segwit;

// The most common transaction, require only the signature.
(sig_alice: signature)
{
    return checksig (sig_alice, "0245a6b3f8eeab8e88501a9a25391318dce9bf35e24c377ee82799543606bf5212");
}` }, { id: "hashlock", name: "Hash Lock", difficulty: "beginner", description: "Simple SHA256 hash verification", icon: "\u{1F512}", code: `pragma bithoven version 0.0.1;
pragma bithoven target segwit;

(preimage: string, sig_alice: signature)
{
    // Alice needs to provide secret preimage to unlock hash lock.
    verify sha256 sha256 preimage == "53de742e2e323e3290234052a702458589c30d2c813bf9f866bef1b651c4e45f";
    // If hashlock satisfied, alice can redeem by providing signature.
    return checksig (sig_alice, "0345a6b3f8eeab8e88501a9a25391318dce9bf35e24c377ee82799543606bf5212");
}` }, { id: "timelock", name: "Time Lock", difficulty: "beginner", description: "Absolute timelock using CLTV", icon: "\u23F0", code: `pragma bithoven version 0.0.1;
pragma bithoven target segwit;

(sig_alice: signature)
{
    // Absolute locktime for 10000000 block height.
    after 10000000;
    // If locktime satisfied, alice can redeem by providing signature.
    return checksig (sig_alice, "0245a6b3f8eeab8e88501a9a25391318dce9bf35e24c377ee82799543606bf5212");
}` }, { id: "atomic_swap", name: "Atomic Swap", difficulty: "intermediate", description: "Cross-chain trustless exchange", icon: "\u{1F504}", code: `pragma bithoven version 0.0.1;
pragma bithoven target segwit;

/*
 * Atomic Swap Contract (HTLC for Cross-Chain Trading)
 * 
 * Enables trustless exchange of cryptocurrencies across different blockchains.
 * Alice locks BTC, Bob locks another coin on different chain with same secret hash.
 * 
 * - Redeem: Bob reveals secret to claim BTC (within 48 hours)
 * - Refund: Alice gets refund after timeout if Bob doesn't claim
 * 
 * This showcases:
 * - Hash-locked transactions for atomic swaps
 * - Time-bounded offers
 * - Cross-chain interoperability pattern
 */

// Path 1: Bob claims with secret (redeem)
(is_redeem: bool, preimage: string, sig_bob: signature)

// Path 2: Alice refunds after timeout
(is_redeem: bool, sig_alice: signature)

{
    // Check if this is a redeem or refund path
    if is_redeem {
        // Bob must reveal the secret preimage
        // NOTE: This hash is for demonstration only - use a cryptographically secure random secret in production!
        verify sha256(sha256(preimage)) == "5f16f3c9c3c660498ddb6d10afc83627cb3ffe67f5cfd9aee0f2a5c1d8b1e8c2";
        
        // And provide his signature to claim
        return checksig(sig_bob, "03c9f4836b9a4f77fc0d81f7bcb01b7f1b35916864b9476c241ce9fc198bd25432");
    }
    else {
        // After 48 hours (288 blocks), Alice can reclaim her BTC
        older 288;
        return checksig(sig_alice, "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798");
    }
}` }, { id: "escrow", name: "Escrow (2-of-3 Multisig)", difficulty: "advanced", description: "Marketplace with arbitrator and refunds", icon: "\u{1F91D}", code: `pragma bithoven version 0.0.1;
pragma bithoven target segwit;

// 2-of-3 Multisig Escrow Contract
// Use case: Marketplace transactions with arbitrator
// - Path 1: Buyer + Seller agree (happy path - immediate settlement)
// - Path 2: Arbitrator + Buyer agree to refund (after 30-day timeout)
// - Path 3: Arbitrator + Seller agree to release payment (dispute resolution)

// Path 1: Buyer + Seller cooperative release (happy path)
(sig_buyer: signature, sig_seller_release: signature)
// Path 2: Arbitrator + Buyer refund after timeout
(sig_buyer: signature, sig_arbitrator_refund: signature)
// Path 3: Arbitrator + Seller dispute resolution  
(sig_buyer: signature, sig_seller_dispute: signature, sig_arbitrator_dispute: signature)
{
    // Check if buyer signed
    if checksig(sig_buyer, "02a1633cafcc01ebfb6d78e39f687a1f0995c62fc95f51ead10a02ee0be551b5dc") {
        // Path 1 or Path 2: Buyer is involved
        if checksig(sig_seller_release, "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798") {
            // Path 1: Buyer + Seller agree (immediate release)
            return true;
        }
        else {
            // Path 2: Buyer + Arbitrator (refund after timeout)
            older 4320;  // 30 days = 4320 blocks
            return checksig(sig_arbitrator_refund, "03c9f4836b9a4f77fc0d81f7bcb01b7f1b35916864b9476c241ce9fc198bd25432");
        }
    }
    else {
        // Path 3: Seller + Arbitrator (dispute resolution, any time)
        verify checksig(sig_seller_dispute, "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798");
        return checksig(sig_arbitrator_dispute, "03c9f4836b9a4f77fc0d81f7bcb01b7f1b35916864b9476c241ce9fc198bd25432");
    }
}` }, { id: "vault", name: "Vault (Time-Delayed Withdrawal)", difficulty: "advanced", description: "Security wallet with cold storage recovery", icon: "\u{1F3E6}", code: `pragma bithoven version 0.0.1;
pragma bithoven target segwit;

/*
 * Vault Contract with Time-Delayed Withdrawal
 * 
 * A security-enhanced wallet where withdrawals require a waiting period,
 * allowing time to detect compromise and use cold storage recovery.
 * 
 * - Withdrawal path: Requires withdraw signature + 1 day delay
 * - Immediate recovery: Cold storage key can always recover without delay
 * 
 * This showcases:
 * - Security-focused smart contract design
 * - Multiple privilege levels (hot/cold keys)
 * - Time-delayed operations for safety
 */

// Path 1: Normal withdrawal (after delay)
(withdraw_flag: bool, sig_withdraw: signature)

// Path 2: Emergency cancel or immediate cold storage recovery
(withdraw_flag: bool, sig_emergency: signature)

{
    // Consume withdraw_flag first (last item on stack)
    if withdraw_flag {
        // Withdrawal path: Must wait 1 day (144 blocks)
        older 144;
        return checksig(sig_withdraw, "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798");
    }
    else {
        // Cold storage recovery or emergency cancel
        // Cold key can always recover immediately
        return checksig(sig_emergency, "02c6047f9441ed7d6d3045406e95c07cd85c778e4b8cef3ca7abac09b95c709ee5");
    }
}` }, { id: "multisig", name: "Multisig (2-of-2)", difficulty: "intermediate", description: "Taproot multi-signature authorization", icon: "\u{1F465}", code: `pragma bithoven version 0.0.1;
// Multisig uses different opcode for segwit(OP_CHECKMULTISIG) and taproot(OP_CHECKSIGADD).
pragma bithoven target taproot;

(sig_alice: signature, sig_bob: signature)
{
    // multisig use same "checksig" syntax, but different operand comes.
    // [number of signature required, (sig, pubkey)*]
    return checksig [2, (sig_alice, "0345a6b3f8eeab8e88501a9a25391318dce9bf35e24c377ee82799543606bf5212"), (sig_bob, "0245a6b3f8eeab8e88501a9a25391318dce9bf35e24c377ee82799543606bf5212")];
}` }, { id: "multisig_voting", name: "Multisig Voting (2-of-3 Threshold)", difficulty: "advanced", description: "DAO treasury with democratic governance", icon: "\u{1F5F3}\uFE0F", code: `pragma bithoven version 0.0.1;
pragma bithoven target segwit;

/*
 * Multi-Signature Voting Contract (2-of-3 Threshold)
 * 
 * Enables democratic decision-making requiring approval from at least 2 out of 3 parties.
 * Use cases: DAO treasury, joint custody, board approvals, multi-stakeholder funds
 * 
 * - Execute: Any 2 of the 3 parties can approve spending
 * - Emergency: All 3 parties together can override immediately
 * 
 * This showcases:
 * - Multi-signature threshold logic (2-of-3, 3-of-3)
 * - Different approval levels for different scenarios
 * - Democratic governance pattern
 */

// Path 1: Standard approval (2-of-3 multi-sig with timelock)
(approval_type: bool, sig_a: signature, sig_b: signature, sig_c: signature)

// Path 2: Emergency override (all 3 parties, no timelock)
(approval_type: bool, sig_a_emerg: signature, sig_b_emerg: signature, sig_c_emerg: signature)

{
    // Check approval type
    if approval_type {
        // Standard 2-of-3 approval with 1-day waiting period for security
        older 144;  // 1 day = 144 blocks
        
        // Verify at least 2 of 3 signatures (using 2-of-3 multisig)
        // Provide 2 valid signatures corresponding to any 2 of the 3 parties
        return checksig[2,
            (sig_a, "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"),
            (sig_b, "03c9f4836b9a4f77fc0d81f7bcb01b7f1b35916864b9476c241ce9fc198bd25432"),
            (sig_c, "02a1633cafcc01ebfb6d78e39f687a1f0995c62fc95f51ead10a02ee0be551b5dc")
        ];
    }
    else {
        // Emergency path: all 3 parties agree, can execute immediately (no timelock)
        // Require all 3 signatures (3-of-3 multisig)
        return checksig[3,
            (sig_a_emerg, "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"),
            (sig_b_emerg, "03c9f4836b9a4f77fc0d81f7bcb01b7f1b35916864b9476c241ce9fc198bd25432"),
            (sig_c_emerg, "02a1633cafcc01ebfb6d78e39f687a1f0995c62fc95f51ead10a02ee0be551b5dc")
        ];
    }
}` }, { id: "inheritance", name: "Inheritance (Tiered Access)", difficulty: "advanced", description: "Multi-tier heir access with secrets", icon: "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}", code: `pragma bithoven version 0.0.1;
pragma bithoven target segwit;

(sig_owner: signature)
(sig_owner: signature, secret: string, sig_heir: signature)
(sig_owner: signature, secret: string, sig_heir: signature, sig_lawyer: signature, sig_audit: signature)
{   
    // Owner can redeem only by providing signature.
    if checksig(sig_owner,
        "03daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729") {
            return true;
    } 
    else {
        // Heir can redeem after 1000 block confirmation.
        older 1000;
        // For heir to redeem, he needs to provide both signature and secret.
        if sha256(secret) == "daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729" 
            && checksig(sig_heir, "0344d2b4706fee04f8718f3a411c9df0503cc7bc83488128187b016f12bfd36f4d") {
                return true;
        } 
        else {
            // Lawyer + auditor can redeem after 10000 block confirmation.
            older 10000;
            // If heir couldn't redeem, lawyer and auditor can redeem by providing signature.
            verify checksig(sig_lawyer, "03daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729");
            return checksig(sig_audit, "03daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729");
        }
    }
}` }, { id: "prediction_market", name: "Prediction Market (Oracle)", difficulty: "expert", description: "Decentralized betting with hash-based oracle", icon: "\u{1F3B2}", code: `pragma bithoven version 0.0.1;
pragma bithoven target taproot;

/*
 * Decentralized Prediction Market with Oracle
 * 
 * A trustless betting contract for binary outcomes resolved by an oracle.
 * Participants bet on outcomes, oracle provides cryptographic proof of result,
 * and winners claim their rewards.
 * 
 * Oracle Integration Pattern:
 * - Oracle commits to event outcome by publishing hash of "outcome_A" or "outcome_B"
 * - Winners provide the preimage to unlock funds
 * - If oracle fails to resolve, refund mechanism activates
 * 
 * Use Cases:
 * - Sports betting (team A vs team B)
 * - Price predictions (BTC above/below threshold)
 * - Event outcomes (elections, weather, etc.)
 * 
 * This showcases:
 * - Oracle commitment schemes with hash locks
 * - Multi-outcome resolution paths
 * - Time-bounded dispute and refund mechanisms
 */

// Path 1: Outcome A winner claims with oracle proof
(outcome_proof: string, sig_winner_a: signature)

// Path 2: Outcome B winner claims with oracle proof
(outcome_proof: string, outcome_proof_b: string, sig_winner_b: signature)

// Path 3: Refund if oracle fails to resolve
// NOTE: outcome_proof and outcome_proof_b are still required in the witness stack because the script
//       checks them before reaching this refund branch. Provide empty strings for these parameters
//       when spending via the refund path.
(outcome_proof: string, outcome_proof_b: string, sig_refund_a: signature, sig_refund_b: signature)

{
    // Must wait for betting period to end (7 days = 1008 blocks)
    older 1008;
    
    // Check if outcome A winner is claiming with valid proof
    // NOTE: These hashes are demonstration placeholders. In production, the oracle would commit
    //       to sha256("outcome_a:<event_id>:<timestamp>:<oracle_secret>") before the event,
    //       then reveal the preimage only after the outcome is determined.
    if sha256(outcome_proof) == "8f6d9b3c1a27f4e985c2487b62a1cd0f3e9a54d28b7c64ea1f4c9e62d5b7a3c1" {
        // Outcome A confirmed - participant A wins
        return checksig(sig_winner_a, "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798");
    }
    else {
        // Check if outcome B winner is claiming with valid proof
        // NOTE: Demo placeholder hash - replace with actual oracle commitment in production
        if sha256(outcome_proof_b) == "7a8c9d2b4e6f1a3c5d7e9b1f3a5c7e9d2b4f6a8c1e3a5c7e9b2d4f6a8c1e3a5c" {
            // Outcome B confirmed - participant B wins
            return checksig(sig_winner_b, "02c6047f9441ed7d6d3045406e95c07cd85c778e4b8cef3ca7abac09b95c709ee5");
        }
        else {
            // No valid outcome proven - both parties must agree to refund
            // Requires cooperation after extended timeout (30 days beyond betting period)
            older 4320;
            verify checksig(sig_refund_a, "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798");
            return checksig(sig_refund_b, "02c6047f9441ed7d6d3045406e95c07cd85c778e4b8cef3ca7abac09b95c709ee5");
        }
    }
}` }], Cu = _u.find((l) => l.id === "htlc");
function t3() {
  const [l, t] = Ft.useState(Cu), [e, n] = Ft.useState(Cu.code), [r, a] = Ft.useState('Click "Compile & Run" to execute the code.'), [u, f] = Ft.useState(false), [h, g] = Ft.useState(false);
  Ft.useEffect(() => {
    const w = new URLSearchParams(window.location.search).get("example");
    if (w) {
      const C = _u.find((T) => T.id === w);
      C ? (t(C), n(C.code)) : (console.warn(`Unknown example ID in URL query parameter: "${w}". Falling back to default example.`), a("The requested example could not be found. Showing the default HTLC example instead."));
    }
  }, []), Ft.useEffect(() => {
    const S = () => {
      const C = new URLSearchParams(window.location.search).get("example");
      if (C) {
        const T = _u.find((O) => O.id === C);
        T && (t(T), n(T.code), a('Click "Compile & Run" to execute the code.'));
      } else t(Cu), n(Cu.code), a('Click "Compile & Run" to execute the code.');
    };
    return window.addEventListener("popstate", S), () => window.removeEventListener("popstate", S);
  }, []);
  const p = (S) => {
    t(S), n(S.code), g(false), a('Click "Compile & Run" to execute the code.');
    const w = new URL(window.location.href);
    w.searchParams.set("example", S.id), window.history.pushState({}, "", w);
  }, y = (S) => {
    switch (S) {
      case "beginner":
        return "#10b981";
      case "intermediate":
        return "#f59e0b";
      case "advanced":
        return "#ef4444";
      case "expert":
        return "#8b5cf6";
      default:
        return "#6b7280";
    }
  }, v = Ft.useCallback(async () => {
    f(true), a("Compiling...");
    try {
      const S = OC(e).to_object();
      a(`\u2705 Compilation Successful!

${JSON.stringify(S, null, 2)}`);
    } catch (S) {
      console.error("Execution error:", S);
      const w = S instanceof Error ? S.message : String(S);
      a(`\u274C Compilation Error:

${w}`);
    } finally {
      f(false);
    }
  }, [e]);
  return wt.jsxs("div", { className: "ideContainer", children: [wt.jsxs("header", { className: "header", children: [wt.jsx("h1", { children: "\u20BFithoven Web IDE \u{1F3BC} \u{1F4BB} " }), wt.jsxs("div", { className: "header-controls", children: [wt.jsx("span", { className: "onlineBadge", children: "Online" }), wt.jsxs("a", { href: "https://bithoven-lang.github.io/bithoven/docs/", target: "_blank", rel: "noopener noreferrer", className: "githubLink", "aria-label": "View documentation", children: [wt.jsxs("svg", { viewBox: "0 0 24 24", width: "24", height: "24", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", children: [wt.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }), wt.jsx("polyline", { points: "14 2 14 8 20 8" }), wt.jsx("line", { x1: "16", y1: "13", x2: "8", y2: "13" }), wt.jsx("line", { x1: "16", y1: "17", x2: "8", y2: "17" }), wt.jsx("polyline", { points: "10 9 9 9 8 9" })] }), wt.jsx("span", { children: "Docs" })] }), wt.jsxs("a", { href: "https://github.com/ChrisCho-H/bithoven", target: "_blank", rel: "noopener noreferrer", className: "githubLink", "aria-label": "View source on GitHub", children: [wt.jsx("svg", { viewBox: "0 0 24 24", width: "24", height: "24", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", children: wt.jsx("path", { d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" }) }), wt.jsx("span", { children: "GitHub" })] })] })] }), wt.jsxs("main", { children: [wt.jsxs("div", { className: "exampleSelectorSection", children: [wt.jsxs("div", { className: "exampleSelectorHeader", children: [wt.jsxs("div", { children: [l.icon, " ", l.name] }), wt.jsx("button", { className: "exampleDropdownButton", onClick: () => g(!h), "aria-expanded": h, "aria-label": "Toggle example selector", children: h ? "\u25B2 Hide Examples" : "\u25BC Browse Examples" })] }), wt.jsxs("p", { className: "exampleDescription", children: [wt.jsx("span", { className: "difficultyBadge", style: { backgroundColor: y(l.difficulty) }, children: l.difficulty.toUpperCase() }), l.description] }), h && wt.jsx("div", { className: "exampleGrid", children: _u.map((S) => wt.jsxs("button", { className: `exampleCard ${l.id === S.id ? "selected" : ""}`, onClick: () => p(S), "aria-label": `Select example: ${S.name}`, "aria-pressed": l.id === S.id, children: [wt.jsx("div", { className: "exampleIcon", children: S.icon }), wt.jsxs("div", { className: "exampleInfo", children: [wt.jsx("div", { className: "exampleName", children: S.name }), wt.jsx("div", { className: "exampleDesc", children: S.description }), wt.jsx("span", { className: "difficultyBadgeSmall", style: { backgroundColor: y(S.difficulty) }, children: S.difficulty })] })] }, S.id)) })] }), wt.jsxs("div", { className: "editorSection", children: [wt.jsx("label", { htmlFor: "codemirror-editor", children: "Code Editor" }), wt.jsx(Wx, { id: "codemirror-editor", value: e, height: $E, theme: "dark", extensions: [IE], onChange: (S) => n(S) })] }), wt.jsx("button", { className: "compileButton", onClick: v, disabled: u, children: u ? "Compiling..." : "\u25B6 Compile & Run" }), wt.jsxs("div", { className: "outputSection", children: [wt.jsx("label", { htmlFor: "output", children: "Output" }), wt.jsx("pre", { id: "output", className: "output", children: r })] })] })] });
}
kC.createRoot(document.getElementById("root")).render(wt.jsx(Ft.StrictMode, { children: wt.jsx(t3, {}) }));
