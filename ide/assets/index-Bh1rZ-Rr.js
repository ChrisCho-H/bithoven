var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
(async () => {
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
    new MutationObserver((r) => {
      for (const a of r) if (a.type === "childList") for (const c of a.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && n(c);
    }).observe(document, {
      childList: true,
      subtree: true
    });
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
  var Gh = {
    exports: {}
  }, Zr = {};
  var ib;
  function _A() {
    if (ib) return Zr;
    ib = 1;
    var l = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
    function e(n, r, a) {
      var c = null;
      if (a !== void 0 && (c = "" + a), r.key !== void 0 && (c = "" + r.key), "key" in r) {
        a = {};
        for (var f in r) f !== "key" && (a[f] = r[f]);
      } else a = r;
      return r = a.ref, {
        $$typeof: l,
        type: n,
        key: c,
        ref: r !== void 0 ? r : null,
        props: a
      };
    }
    return Zr.Fragment = t, Zr.jsx = e, Zr.jsxs = e, Zr;
  }
  var nb;
  function kA() {
    return nb || (nb = 1, Gh.exports = _A()), Gh.exports;
  }
  var wt = kA(), Xh = {
    exports: {}
  }, gt = {};
  var lb;
  function TA() {
    if (lb) return gt;
    lb = 1;
    var l = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), y = Symbol.for("react.activity"), v = Symbol.iterator;
    function S(M) {
      return M === null || typeof M != "object" ? null : (M = v && M[v] || M["@@iterator"], typeof M == "function" ? M : null);
    }
    var w = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function() {
      },
      enqueueReplaceState: function() {
      },
      enqueueSetState: function() {
      }
    }, A = Object.assign, _ = {};
    function T(M, H, W) {
      this.props = M, this.context = H, this.refs = _, this.updater = W || w;
    }
    T.prototype.isReactComponent = {}, T.prototype.setState = function(M, H) {
      if (typeof M != "object" && typeof M != "function" && M != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, M, H, "setState");
    }, T.prototype.forceUpdate = function(M) {
      this.updater.enqueueForceUpdate(this, M, "forceUpdate");
    };
    function j() {
    }
    j.prototype = T.prototype;
    function L(M, H, W) {
      this.props = M, this.context = H, this.refs = _, this.updater = W || w;
    }
    var Q = L.prototype = new j();
    Q.constructor = L, A(Q, T.prototype), Q.isPureReactComponent = true;
    var N = Array.isArray;
    function G() {
    }
    var V = {
      H: null,
      A: null,
      T: null,
      S: null
    }, lt = Object.prototype.hasOwnProperty;
    function tt(M, H, W) {
      var $ = W.ref;
      return {
        $$typeof: l,
        type: M,
        key: H,
        ref: $ !== void 0 ? $ : null,
        props: W
      };
    }
    function pt(M, H) {
      return tt(M.type, H, M.props);
    }
    function at(M) {
      return typeof M == "object" && M !== null && M.$$typeof === l;
    }
    function I(M) {
      var H = {
        "=": "=0",
        ":": "=2"
      };
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
    function R(M, H, W, $, dt) {
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
              return Et = M._init, R(Et(M._payload), H, W, $, dt);
          }
      }
      if (Et) return dt = dt(M), Et = $ === "" ? "." + ht(M, 0) : $, N(dt) ? (W = "", Et != null && (W = Et.replace(ft, "$&/") + "/"), R(dt, H, W, "", function(tr) {
        return tr;
      })) : dt != null && (at(dt) && (dt = pt(dt, W + (dt.key == null || M && M.key === dt.key ? "" : ("" + dt.key).replace(ft, "$&/") + "/") + Et)), H.push(dt)), 1;
      Et = 0;
      var ze = $ === "" ? "." : $ + ":";
      if (N(M)) for (var ie = 0; ie < M.length; ie++) $ = M[ie], bt = ze + ht($, ie), Et += R($, H, W, bt, dt);
      else if (ie = S(M), typeof ie == "function") for (M = ie.call(M), ie = 0; !($ = M.next()).done; ) $ = $.value, bt = ze + ht($, ie++), Et += R($, H, W, bt, dt);
      else if (bt === "object") {
        if (typeof M.then == "function") return R(yt(M), H, W, $, dt);
        throw H = String(M), Error("Objects are not valid as a React child (found: " + (H === "[object Object]" ? "object with keys {" + Object.keys(M).join(", ") + "}" : H) + "). If you meant to render a collection of children, use an array instead.");
      }
      return Et;
    }
    function Z(M, H, W) {
      if (M == null) return M;
      var $ = [], dt = 0;
      return R(M, $, "", "", function(bt) {
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
        var H = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof M == "object" && M !== null && typeof M.message == "string" ? String(M.message) : String(M),
          error: M
        });
        if (!window.dispatchEvent(H)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", M);
        return;
      }
      console.error(M);
    }, mt = {
      map: Z,
      forEach: function(M, H, W) {
        Z(M, function() {
          H.apply(this, arguments);
        }, W);
      },
      count: function(M) {
        var H = 0;
        return Z(M, function() {
          H++;
        }), H;
      },
      toArray: function(M) {
        return Z(M, function(H) {
          return H;
        }) || [];
      },
      only: function(M) {
        if (!at(M)) throw Error("React.Children.only expected to receive a single React element child.");
        return M;
      }
    };
    return gt.Activity = y, gt.Children = mt, gt.Component = T, gt.Fragment = e, gt.Profiler = r, gt.PureComponent = L, gt.StrictMode = n, gt.Suspense = h, gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = V, gt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function(M) {
        return V.H.useMemoCache(M);
      }
    }, gt.cache = function(M) {
      return function() {
        return M.apply(null, arguments);
      };
    }, gt.cacheSignal = function() {
      return null;
    }, gt.cloneElement = function(M, H, W) {
      if (M == null) throw Error("The argument must be a React element, but you passed " + M + ".");
      var $ = A({}, M.props), dt = M.key;
      if (H != null) for (bt in H.key !== void 0 && (dt = "" + H.key), H) !lt.call(H, bt) || bt === "key" || bt === "__self" || bt === "__source" || bt === "ref" && H.ref === void 0 || ($[bt] = H[bt]);
      var bt = arguments.length - 2;
      if (bt === 1) $.children = W;
      else if (1 < bt) {
        for (var Et = Array(bt), ze = 0; ze < bt; ze++) Et[ze] = arguments[ze + 2];
        $.children = Et;
      }
      return tt(M.type, dt, $);
    }, gt.createContext = function(M) {
      return M = {
        $$typeof: c,
        _currentValue: M,
        _currentValue2: M,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      }, M.Provider = M, M.Consumer = {
        $$typeof: a,
        _context: M
      }, M;
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
      return {
        current: null
      };
    }, gt.forwardRef = function(M) {
      return {
        $$typeof: f,
        render: M
      };
    }, gt.isValidElement = at, gt.lazy = function(M) {
      return {
        $$typeof: p,
        _payload: {
          _status: -1,
          _result: M
        },
        _init: it
      };
    }, gt.memo = function(M, H) {
      return {
        $$typeof: g,
        type: M,
        compare: H === void 0 ? null : H
      };
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
  var sb;
  function Am() {
    return sb || (sb = 1, Xh.exports = TA()), Xh.exports;
  }
  var Pt = Am(), Kh = {
    exports: {}
  }, Wr = {}, Qh = {
    exports: {}
  }, Zh = {};
  var rb;
  function OA() {
    return rb || (rb = 1, (function(l) {
      function t(R, Z) {
        var it = R.length;
        R.push(Z);
        t: for (; 0 < it; ) {
          var rt = it - 1 >>> 1, mt = R[rt];
          if (0 < r(mt, Z)) R[rt] = Z, R[it] = mt, it = rt;
          else break t;
        }
      }
      function e(R) {
        return R.length === 0 ? null : R[0];
      }
      function n(R) {
        if (R.length === 0) return null;
        var Z = R[0], it = R.pop();
        if (it !== Z) {
          R[0] = it;
          t: for (var rt = 0, mt = R.length, M = mt >>> 1; rt < M; ) {
            var H = 2 * (rt + 1) - 1, W = R[H], $ = H + 1, dt = R[$];
            if (0 > r(W, it)) $ < mt && 0 > r(dt, W) ? (R[rt] = dt, R[$] = it, rt = $) : (R[rt] = W, R[H] = it, rt = H);
            else if ($ < mt && 0 > r(dt, it)) R[rt] = dt, R[$] = it, rt = $;
            else break t;
          }
        }
        return Z;
      }
      function r(R, Z) {
        var it = R.sortIndex - Z.sortIndex;
        return it !== 0 ? it : R.id - Z.id;
      }
      if (l.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var a = performance;
        l.unstable_now = function() {
          return a.now();
        };
      } else {
        var c = Date, f = c.now();
        l.unstable_now = function() {
          return c.now() - f;
        };
      }
      var h = [], g = [], p = 1, y = null, v = 3, S = false, w = false, A = false, _ = false, T = typeof setTimeout == "function" ? setTimeout : null, j = typeof clearTimeout == "function" ? clearTimeout : null, L = typeof setImmediate < "u" ? setImmediate : null;
      function Q(R) {
        for (var Z = e(g); Z !== null; ) {
          if (Z.callback === null) n(g);
          else if (Z.startTime <= R) n(g), Z.sortIndex = Z.expirationTime, t(h, Z);
          else break;
          Z = e(g);
        }
      }
      function N(R) {
        if (A = false, Q(R), !w) if (e(h) !== null) w = true, G || (G = true, I());
        else {
          var Z = e(g);
          Z !== null && yt(N, Z.startTime - R);
        }
      }
      var G = false, V = -1, lt = 5, tt = -1;
      function pt() {
        return _ ? true : !(l.unstable_now() - tt < lt);
      }
      function at() {
        if (_ = false, G) {
          var R = l.unstable_now();
          tt = R;
          var Z = true;
          try {
            t: {
              w = false, A && (A = false, j(V), V = -1), S = true;
              var it = v;
              try {
                e: {
                  for (Q(R), y = e(h); y !== null && !(y.expirationTime > R && pt()); ) {
                    var rt = y.callback;
                    if (typeof rt == "function") {
                      y.callback = null, v = y.priorityLevel;
                      var mt = rt(y.expirationTime <= R);
                      if (R = l.unstable_now(), typeof mt == "function") {
                        y.callback = mt, Q(R), Z = true;
                        break e;
                      }
                      y === e(h) && n(h), Q(R);
                    } else n(h);
                    y = e(h);
                  }
                  if (y !== null) Z = true;
                  else {
                    var M = e(g);
                    M !== null && yt(N, M.startTime - R), Z = false;
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
        T(at, 0);
      };
      function yt(R, Z) {
        V = T(function() {
          R(l.unstable_now());
        }, Z);
      }
      l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(R) {
        R.callback = null;
      }, l.unstable_forceFrameRate = function(R) {
        0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : lt = 0 < R ? Math.floor(1e3 / R) : 5;
      }, l.unstable_getCurrentPriorityLevel = function() {
        return v;
      }, l.unstable_next = function(R) {
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
          return R();
        } finally {
          v = it;
        }
      }, l.unstable_requestPaint = function() {
        _ = true;
      }, l.unstable_runWithPriority = function(R, Z) {
        switch (R) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            R = 3;
        }
        var it = v;
        v = R;
        try {
          return Z();
        } finally {
          v = it;
        }
      }, l.unstable_scheduleCallback = function(R, Z, it) {
        var rt = l.unstable_now();
        switch (typeof it == "object" && it !== null ? (it = it.delay, it = typeof it == "number" && 0 < it ? rt + it : rt) : it = rt, R) {
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
        return mt = it + mt, R = {
          id: p++,
          callback: Z,
          priorityLevel: R,
          startTime: it,
          expirationTime: mt,
          sortIndex: -1
        }, it > rt ? (R.sortIndex = it, t(g, R), e(h) === null && R === e(g) && (A ? (j(V), V = -1) : A = true, yt(N, it - rt))) : (R.sortIndex = mt, t(h, R), w || S || (w = true, G || (G = true, I()))), R;
      }, l.unstable_shouldYield = pt, l.unstable_wrapCallback = function(R) {
        var Z = v;
        return function() {
          var it = v;
          v = Z;
          try {
            return R.apply(this, arguments);
          } finally {
            v = it;
          }
        };
      };
    })(Zh)), Zh;
  }
  var ab;
  function DA() {
    return ab || (ab = 1, Qh.exports = OA()), Qh.exports;
  }
  var Wh = {
    exports: {}
  }, Te = {};
  var ob;
  function EA() {
    if (ob) return Te;
    ob = 1;
    var l = Am();
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
    var n = {
      d: {
        f: e,
        r: function() {
          throw Error(t(522));
        },
        D: e,
        C: e,
        L: e,
        m: e,
        X: e,
        S: e,
        M: e
      },
      p: 0,
      findDOMNode: null
    }, r = Symbol.for("react.portal");
    function a(h, g, p) {
      var y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: r,
        key: y == null ? null : "" + y,
        children: h,
        containerInfo: g,
        implementation: p
      };
    }
    var c = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function f(h, g) {
      if (h === "font") return "";
      if (typeof g == "string") return g === "use-credentials" ? g : "";
    }
    return Te.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = n, Te.createPortal = function(h, g) {
      var p = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11) throw Error(t(299));
      return a(h, g, null, p);
    }, Te.flushSync = function(h) {
      var g = c.T, p = n.p;
      try {
        if (c.T = null, n.p = 2, h) return h();
      } finally {
        c.T = g, n.p = p, n.d.f();
      }
    }, Te.preconnect = function(h, g) {
      typeof h == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, n.d.C(h, g));
    }, Te.prefetchDNS = function(h) {
      typeof h == "string" && n.d.D(h);
    }, Te.preinit = function(h, g) {
      if (typeof h == "string" && g && typeof g.as == "string") {
        var p = g.as, y = f(p, g.crossOrigin), v = typeof g.integrity == "string" ? g.integrity : void 0, S = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
        p === "style" ? n.d.S(h, typeof g.precedence == "string" ? g.precedence : void 0, {
          crossOrigin: y,
          integrity: v,
          fetchPriority: S
        }) : p === "script" && n.d.X(h, {
          crossOrigin: y,
          integrity: v,
          fetchPriority: S,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0
        });
      }
    }, Te.preinitModule = function(h, g) {
      if (typeof h == "string") if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var p = f(g.as, g.crossOrigin);
          n.d.M(h, {
            crossOrigin: p,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0
          });
        }
      } else g == null && n.d.M(h);
    }, Te.preload = function(h, g) {
      if (typeof h == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
        var p = g.as, y = f(p, g.crossOrigin);
        n.d.L(h, p, {
          crossOrigin: y,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          type: typeof g.type == "string" ? g.type : void 0,
          fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
          referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
          imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
          media: typeof g.media == "string" ? g.media : void 0
        });
      }
    }, Te.preloadModule = function(h, g) {
      if (typeof h == "string") if (g) {
        var p = f(g.as, g.crossOrigin);
        n.d.m(h, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: p,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
      } else n.d.m(h);
    }, Te.requestFormReset = function(h) {
      n.d.r(h);
    }, Te.unstable_batchedUpdates = function(h, g) {
      return h(g);
    }, Te.useFormState = function(h, g, p) {
      return c.H.useFormState(h, g, p);
    }, Te.useFormStatus = function() {
      return c.H.useHostTransitionStatus();
    }, Te.version = "19.2.1", Te;
  }
  var cb;
  function BA() {
    if (cb) return Wh.exports;
    cb = 1;
    function l() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (t) {
        console.error(t);
      }
    }
    return l(), Wh.exports = EA(), Wh.exports;
  }
  var ub;
  function RA() {
    if (ub) return Wr;
    ub = 1;
    var l = DA(), t = Am(), e = BA();
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
    function c(i) {
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
      for (var o = i, u = s; ; ) {
        var d = o.return;
        if (d === null) break;
        var m = d.alternate;
        if (m === null) {
          if (u = d.return, u !== null) {
            o = u;
            continue;
          }
          break;
        }
        if (d.child === m.child) {
          for (m = d.child; m; ) {
            if (m === o) return h(d), i;
            if (m === u) return h(d), s;
            m = m.sibling;
          }
          throw Error(n(188));
        }
        if (o.return !== u.return) o = d, u = m;
        else {
          for (var b = false, x = d.child; x; ) {
            if (x === o) {
              b = true, o = d, u = m;
              break;
            }
            if (x === u) {
              b = true, u = d, o = m;
              break;
            }
            x = x.sibling;
          }
          if (!b) {
            for (x = m.child; x; ) {
              if (x === o) {
                b = true, o = m, u = d;
                break;
              }
              if (x === u) {
                b = true, u = m, o = d;
                break;
              }
              x = x.sibling;
            }
            if (!b) throw Error(n(189));
          }
        }
        if (o.alternate !== u) throw Error(n(190));
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
    var y = Object.assign, v = Symbol.for("react.element"), S = Symbol.for("react.transitional.element"), w = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), j = Symbol.for("react.consumer"), L = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), G = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), lt = Symbol.for("react.lazy"), tt = Symbol.for("react.activity"), pt = Symbol.for("react.memo_cache_sentinel"), at = Symbol.iterator;
    function I(i) {
      return i === null || typeof i != "object" ? null : (i = at && i[at] || i["@@iterator"], typeof i == "function" ? i : null);
    }
    var ft = Symbol.for("react.client.reference");
    function ht(i) {
      if (i == null) return null;
      if (typeof i == "function") return i.$$typeof === ft ? null : i.displayName || i.name || null;
      if (typeof i == "string") return i;
      switch (i) {
        case A:
          return "Fragment";
        case T:
          return "Profiler";
        case _:
          return "StrictMode";
        case N:
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
    var yt = Array.isArray, R = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, it = {
      pending: false,
      data: null,
      method: null,
      action: null
    }, rt = [], mt = -1;
    function M(i) {
      return {
        current: i
      };
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
          i = (i = s.documentElement) && (i = i.namespaceURI) ? My(i) : 0;
          break;
        default:
          if (i = s.tagName, s = s.namespaceURI) s = My(s), i = _y(s, i);
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
    function tr(i) {
      i.memoizedState !== null && W(Et, i);
      var s = $.current, o = _y(s, i.type);
      s !== o && (W(dt, i), W($, o));
    }
    function Ua(i) {
      dt.current === i && (H($), H(dt)), Et.current === i && (H(Et), Gr._currentValue = it);
    }
    var Cu, eg;
    function fl(i) {
      if (Cu === void 0) try {
        throw Error();
      } catch (o) {
        var s = o.stack.trim().match(/\n( *(at )?)/);
        Cu = s && s[1] || "", eg = -1 < o.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < o.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
      return `
` + Cu + i + eg;
    }
    var Mu = false;
    function _u(i, s) {
      if (!i || Mu) return "";
      Mu = true;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var u = {
          DetermineComponentFrameRoot: function() {
            try {
              if (s) {
                var X = function() {
                  throw Error();
                };
                if (Object.defineProperty(X.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(X, []);
                  } catch (z) {
                    var B = z;
                  }
                  Reflect.construct(i, [], X);
                } else {
                  try {
                    X.call();
                  } catch (z) {
                    B = z;
                  }
                  i.call(X.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (z) {
                  B = z;
                }
                (X = i()) && typeof X.catch == "function" && X.catch(function() {
                });
              }
            } catch (z) {
              if (z && B && typeof z.stack == "string") return [
                z.stack,
                B.stack
              ];
            }
            return [
              null,
              null
            ];
          }
        };
        u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var d = Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot, "name");
        d && d.configurable && Object.defineProperty(u.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot"
        });
        var m = u.DetermineComponentFrameRoot(), b = m[0], x = m[1];
        if (b && x) {
          var C = b.split(`
`), E = x.split(`
`);
          for (d = u = 0; u < C.length && !C[u].includes("DetermineComponentFrameRoot"); ) u++;
          for (; d < E.length && !E[d].includes("DetermineComponentFrameRoot"); ) d++;
          if (u === C.length || d === E.length) for (u = C.length - 1, d = E.length - 1; 1 <= u && 0 <= d && C[u] !== E[d]; ) d--;
          for (; 1 <= u && 0 <= d; u--, d--) if (C[u] !== E[d]) {
            if (u !== 1 || d !== 1) do
              if (u--, d--, 0 > d || C[u] !== E[d]) {
                var U = `
` + C[u].replace(" at new ", " at ");
                return i.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", i.displayName)), U;
              }
            while (1 <= u && 0 <= d);
            break;
          }
        }
      } finally {
        Mu = false, Error.prepareStackTrace = o;
      }
      return (o = i ? i.displayName || i.name : "") ? fl(o) : "";
    }
    function n2(i, s) {
      switch (i.tag) {
        case 26:
        case 27:
        case 5:
          return fl(i.type);
        case 16:
          return fl("Lazy");
        case 13:
          return i.child !== s && s !== null ? fl("Suspense Fallback") : fl("Suspense");
        case 19:
          return fl("SuspenseList");
        case 0:
        case 15:
          return _u(i.type, false);
        case 11:
          return _u(i.type.render, false);
        case 1:
          return _u(i.type, true);
        case 31:
          return fl("Activity");
        default:
          return "";
      }
    }
    function ig(i) {
      try {
        var s = "", o = null;
        do
          s += n2(i, o), o = i, i = i.return;
        while (i);
        return s;
      } catch (u) {
        return `
Error generating stack: ` + u.message + `
` + u.stack;
      }
    }
    var ku = Object.prototype.hasOwnProperty, Tu = l.unstable_scheduleCallback, Ou = l.unstable_cancelCallback, l2 = l.unstable_shouldYield, s2 = l.unstable_requestPaint, Pe = l.unstable_now, r2 = l.unstable_getCurrentPriorityLevel, ng = l.unstable_ImmediatePriority, lg = l.unstable_UserBlockingPriority, Va = l.unstable_NormalPriority, a2 = l.unstable_LowPriority, sg = l.unstable_IdlePriority, o2 = l.log, c2 = l.unstable_setDisableYieldValue, er = null, Ie = null;
    function _n(i) {
      if (typeof o2 == "function" && c2(i), Ie && typeof Ie.setStrictMode == "function") try {
        Ie.setStrictMode(er, i);
      } catch {
      }
    }
    var $e = Math.clz32 ? Math.clz32 : h2, u2 = Math.log, f2 = Math.LN2;
    function h2(i) {
      return i >>>= 0, i === 0 ? 32 : 31 - (u2(i) / f2 | 0) | 0;
    }
    var qa = 256, ja = 262144, Ya = 4194304;
    function hl(i) {
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
    function Ga(i, s, o) {
      var u = i.pendingLanes;
      if (u === 0) return 0;
      var d = 0, m = i.suspendedLanes, b = i.pingedLanes;
      i = i.warmLanes;
      var x = u & 134217727;
      return x !== 0 ? (u = x & ~m, u !== 0 ? d = hl(u) : (b &= x, b !== 0 ? d = hl(b) : o || (o = x & ~i, o !== 0 && (d = hl(o))))) : (x = u & ~m, x !== 0 ? d = hl(x) : b !== 0 ? d = hl(b) : o || (o = u & ~i, o !== 0 && (d = hl(o)))), d === 0 ? 0 : s !== 0 && s !== d && (s & m) === 0 && (m = d & -d, o = s & -s, m >= o || m === 32 && (o & 4194048) !== 0) ? s : d;
    }
    function ir(i, s) {
      return (i.pendingLanes & ~(i.suspendedLanes & ~i.pingedLanes) & s) === 0;
    }
    function d2(i, s) {
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
    function rg() {
      var i = Ya;
      return Ya <<= 1, (Ya & 62914560) === 0 && (Ya = 4194304), i;
    }
    function Du(i) {
      for (var s = [], o = 0; 31 > o; o++) s.push(i);
      return s;
    }
    function nr(i, s) {
      i.pendingLanes |= s, s !== 268435456 && (i.suspendedLanes = 0, i.pingedLanes = 0, i.warmLanes = 0);
    }
    function m2(i, s, o, u, d, m) {
      var b = i.pendingLanes;
      i.pendingLanes = o, i.suspendedLanes = 0, i.pingedLanes = 0, i.warmLanes = 0, i.expiredLanes &= o, i.entangledLanes &= o, i.errorRecoveryDisabledLanes &= o, i.shellSuspendCounter = 0;
      var x = i.entanglements, C = i.expirationTimes, E = i.hiddenUpdates;
      for (o = b & ~o; 0 < o; ) {
        var U = 31 - $e(o), X = 1 << U;
        x[U] = 0, C[U] = -1;
        var B = E[U];
        if (B !== null) for (E[U] = null, U = 0; U < B.length; U++) {
          var z = B[U];
          z !== null && (z.lane &= -536870913);
        }
        o &= ~X;
      }
      u !== 0 && ag(i, u, 0), m !== 0 && d === 0 && i.tag !== 0 && (i.suspendedLanes |= m & ~(b & ~s));
    }
    function ag(i, s, o) {
      i.pendingLanes |= s, i.suspendedLanes &= ~s;
      var u = 31 - $e(s);
      i.entangledLanes |= s, i.entanglements[u] = i.entanglements[u] | 1073741824 | o & 261930;
    }
    function og(i, s) {
      var o = i.entangledLanes |= s;
      for (i = i.entanglements; o; ) {
        var u = 31 - $e(o), d = 1 << u;
        d & s | i[u] & s && (i[u] |= s), o &= ~d;
      }
    }
    function cg(i, s) {
      var o = s & -s;
      return o = (o & 42) !== 0 ? 1 : Eu(o), (o & (i.suspendedLanes | s)) !== 0 ? 0 : o;
    }
    function Eu(i) {
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
    function Bu(i) {
      return i &= -i, 2 < i ? 8 < i ? (i & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
    }
    function ug() {
      var i = Z.p;
      return i !== 0 ? i : (i = window.event, i === void 0 ? 32 : Jy(i.type));
    }
    function fg(i, s) {
      var o = Z.p;
      try {
        return Z.p = i, s();
      } finally {
        Z.p = o;
      }
    }
    var kn = Math.random().toString(36).slice(2), be = "__reactFiber$" + kn, qe = "__reactProps$" + kn, Xl = "__reactContainer$" + kn, Ru = "__reactEvents$" + kn, g2 = "__reactListeners$" + kn, p2 = "__reactHandles$" + kn, hg = "__reactResources$" + kn, lr = "__reactMarker$" + kn;
    function zu(i) {
      delete i[be], delete i[qe], delete i[Ru], delete i[g2], delete i[p2];
    }
    function Kl(i) {
      var s = i[be];
      if (s) return s;
      for (var o = i.parentNode; o; ) {
        if (s = o[Xl] || o[be]) {
          if (o = s.alternate, s.child !== null || o !== null && o.child !== null) for (i = Ry(i); i !== null; ) {
            if (o = i[be]) return o;
            i = Ry(i);
          }
          return s;
        }
        i = o, o = i.parentNode;
      }
      return null;
    }
    function Ql(i) {
      if (i = i[be] || i[Xl]) {
        var s = i.tag;
        if (s === 5 || s === 6 || s === 13 || s === 31 || s === 26 || s === 27 || s === 3) return i;
      }
      return null;
    }
    function sr(i) {
      var s = i.tag;
      if (s === 5 || s === 26 || s === 27 || s === 6) return i.stateNode;
      throw Error(n(33));
    }
    function Zl(i) {
      var s = i[hg];
      return s || (s = i[hg] = {
        hoistableStyles: /* @__PURE__ */ new Map(),
        hoistableScripts: /* @__PURE__ */ new Map()
      }), s;
    }
    function ge(i) {
      i[lr] = true;
    }
    var dg = /* @__PURE__ */ new Set(), mg = {};
    function dl(i, s) {
      Wl(i, s), Wl(i + "Capture", s);
    }
    function Wl(i, s) {
      for (mg[i] = s, i = 0; i < s.length; i++) dg.add(s[i]);
    }
    var y2 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), gg = {}, pg = {};
    function b2(i) {
      return ku.call(pg, i) ? true : ku.call(gg, i) ? false : y2.test(i) ? pg[i] = true : (gg[i] = true, false);
    }
    function Xa(i, s, o) {
      if (b2(s)) if (o === null) i.removeAttribute(s);
      else {
        switch (typeof o) {
          case "undefined":
          case "function":
          case "symbol":
            i.removeAttribute(s);
            return;
          case "boolean":
            var u = s.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              i.removeAttribute(s);
              return;
            }
        }
        i.setAttribute(s, "" + o);
      }
    }
    function Ka(i, s, o) {
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
    function tn(i, s, o, u) {
      if (u === null) i.removeAttribute(o);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            i.removeAttribute(o);
            return;
        }
        i.setAttributeNS(s, o, "" + u);
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
    function yg(i) {
      var s = i.type;
      return (i = i.nodeName) && i.toLowerCase() === "input" && (s === "checkbox" || s === "radio");
    }
    function v2(i, s, o) {
      var u = Object.getOwnPropertyDescriptor(i.constructor.prototype, s);
      if (!i.hasOwnProperty(s) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
        var d = u.get, m = u.set;
        return Object.defineProperty(i, s, {
          configurable: true,
          get: function() {
            return d.call(this);
          },
          set: function(b) {
            o = "" + b, m.call(this, b);
          }
        }), Object.defineProperty(i, s, {
          enumerable: u.enumerable
        }), {
          getValue: function() {
            return o;
          },
          setValue: function(b) {
            o = "" + b;
          },
          stopTracking: function() {
            i._valueTracker = null, delete i[s];
          }
        };
      }
    }
    function Nu(i) {
      if (!i._valueTracker) {
        var s = yg(i) ? "checked" : "value";
        i._valueTracker = v2(i, s, "" + i[s]);
      }
    }
    function bg(i) {
      if (!i) return false;
      var s = i._valueTracker;
      if (!s) return true;
      var o = s.getValue(), u = "";
      return i && (u = yg(i) ? i.checked ? "true" : "false" : i.value), i = u, i !== o ? (s.setValue(i), true) : false;
    }
    function Qa(i) {
      if (i = i || (typeof document < "u" ? document : void 0), typeof i > "u") return null;
      try {
        return i.activeElement || i.body;
      } catch {
        return i.body;
      }
    }
    var S2 = /[\n"\\]/g;
    function fi(i) {
      return i.replace(S2, function(s) {
        return "\\" + s.charCodeAt(0).toString(16) + " ";
      });
    }
    function Lu(i, s, o, u, d, m, b, x) {
      i.name = "", b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? i.type = b : i.removeAttribute("type"), s != null ? b === "number" ? (s === 0 && i.value === "" || i.value != s) && (i.value = "" + ui(s)) : i.value !== "" + ui(s) && (i.value = "" + ui(s)) : b !== "submit" && b !== "reset" || i.removeAttribute("value"), s != null ? Hu(i, b, ui(s)) : o != null ? Hu(i, b, ui(o)) : u != null && i.removeAttribute("value"), d == null && m != null && (i.defaultChecked = !!m), d != null && (i.checked = d && typeof d != "function" && typeof d != "symbol"), x != null && typeof x != "function" && typeof x != "symbol" && typeof x != "boolean" ? i.name = "" + ui(x) : i.removeAttribute("name");
    }
    function vg(i, s, o, u, d, m, b, x) {
      if (m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (i.type = m), s != null || o != null) {
        if (!(m !== "submit" && m !== "reset" || s != null)) {
          Nu(i);
          return;
        }
        o = o != null ? "" + ui(o) : "", s = s != null ? "" + ui(s) : o, x || s === i.value || (i.value = s), i.defaultValue = s;
      }
      u = u ?? d, u = typeof u != "function" && typeof u != "symbol" && !!u, i.checked = x ? i.checked : !!u, i.defaultChecked = !!u, b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" && (i.name = b), Nu(i);
    }
    function Hu(i, s, o) {
      s === "number" && Qa(i.ownerDocument) === i || i.defaultValue === "" + o || (i.defaultValue = "" + o);
    }
    function Jl(i, s, o, u) {
      if (i = i.options, s) {
        s = {};
        for (var d = 0; d < o.length; d++) s["$" + o[d]] = true;
        for (o = 0; o < i.length; o++) d = s.hasOwnProperty("$" + i[o].value), i[o].selected !== d && (i[o].selected = d), d && u && (i[o].defaultSelected = true);
      } else {
        for (o = "" + ui(o), s = null, d = 0; d < i.length; d++) {
          if (i[d].value === o) {
            i[d].selected = true, u && (i[d].defaultSelected = true);
            return;
          }
          s !== null || i[d].disabled || (s = i[d]);
        }
        s !== null && (s.selected = true);
      }
    }
    function Sg(i, s, o) {
      if (s != null && (s = "" + ui(s), s !== i.value && (i.value = s), o == null)) {
        i.defaultValue !== s && (i.defaultValue = s);
        return;
      }
      i.defaultValue = o != null ? "" + ui(o) : "";
    }
    function xg(i, s, o, u) {
      if (s == null) {
        if (u != null) {
          if (o != null) throw Error(n(92));
          if (yt(u)) {
            if (1 < u.length) throw Error(n(93));
            u = u[0];
          }
          o = u;
        }
        o == null && (o = ""), s = o;
      }
      o = ui(s), i.defaultValue = o, u = i.textContent, u === o && u !== "" && u !== null && (i.value = u), Nu(i);
    }
    function Fl(i, s) {
      if (s) {
        var o = i.firstChild;
        if (o && o === i.lastChild && o.nodeType === 3) {
          o.nodeValue = s;
          return;
        }
      }
      i.textContent = s;
    }
    var x2 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function wg(i, s, o) {
      var u = s.indexOf("--") === 0;
      o == null || typeof o == "boolean" || o === "" ? u ? i.setProperty(s, "") : s === "float" ? i.cssFloat = "" : i[s] = "" : u ? i.setProperty(s, o) : typeof o != "number" || o === 0 || x2.has(s) ? s === "float" ? i.cssFloat = o : i[s] = ("" + o).trim() : i[s] = o + "px";
    }
    function Ag(i, s, o) {
      if (s != null && typeof s != "object") throw Error(n(62));
      if (i = i.style, o != null) {
        for (var u in o) !o.hasOwnProperty(u) || s != null && s.hasOwnProperty(u) || (u.indexOf("--") === 0 ? i.setProperty(u, "") : u === "float" ? i.cssFloat = "" : i[u] = "");
        for (var d in s) u = s[d], s.hasOwnProperty(d) && o[d] !== u && wg(i, d, u);
      } else for (var m in s) s.hasOwnProperty(m) && wg(i, m, s[m]);
    }
    function Uu(i) {
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
    var w2 = /* @__PURE__ */ new Map([
      [
        "acceptCharset",
        "accept-charset"
      ],
      [
        "htmlFor",
        "for"
      ],
      [
        "httpEquiv",
        "http-equiv"
      ],
      [
        "crossOrigin",
        "crossorigin"
      ],
      [
        "accentHeight",
        "accent-height"
      ],
      [
        "alignmentBaseline",
        "alignment-baseline"
      ],
      [
        "arabicForm",
        "arabic-form"
      ],
      [
        "baselineShift",
        "baseline-shift"
      ],
      [
        "capHeight",
        "cap-height"
      ],
      [
        "clipPath",
        "clip-path"
      ],
      [
        "clipRule",
        "clip-rule"
      ],
      [
        "colorInterpolation",
        "color-interpolation"
      ],
      [
        "colorInterpolationFilters",
        "color-interpolation-filters"
      ],
      [
        "colorProfile",
        "color-profile"
      ],
      [
        "colorRendering",
        "color-rendering"
      ],
      [
        "dominantBaseline",
        "dominant-baseline"
      ],
      [
        "enableBackground",
        "enable-background"
      ],
      [
        "fillOpacity",
        "fill-opacity"
      ],
      [
        "fillRule",
        "fill-rule"
      ],
      [
        "floodColor",
        "flood-color"
      ],
      [
        "floodOpacity",
        "flood-opacity"
      ],
      [
        "fontFamily",
        "font-family"
      ],
      [
        "fontSize",
        "font-size"
      ],
      [
        "fontSizeAdjust",
        "font-size-adjust"
      ],
      [
        "fontStretch",
        "font-stretch"
      ],
      [
        "fontStyle",
        "font-style"
      ],
      [
        "fontVariant",
        "font-variant"
      ],
      [
        "fontWeight",
        "font-weight"
      ],
      [
        "glyphName",
        "glyph-name"
      ],
      [
        "glyphOrientationHorizontal",
        "glyph-orientation-horizontal"
      ],
      [
        "glyphOrientationVertical",
        "glyph-orientation-vertical"
      ],
      [
        "horizAdvX",
        "horiz-adv-x"
      ],
      [
        "horizOriginX",
        "horiz-origin-x"
      ],
      [
        "imageRendering",
        "image-rendering"
      ],
      [
        "letterSpacing",
        "letter-spacing"
      ],
      [
        "lightingColor",
        "lighting-color"
      ],
      [
        "markerEnd",
        "marker-end"
      ],
      [
        "markerMid",
        "marker-mid"
      ],
      [
        "markerStart",
        "marker-start"
      ],
      [
        "overlinePosition",
        "overline-position"
      ],
      [
        "overlineThickness",
        "overline-thickness"
      ],
      [
        "paintOrder",
        "paint-order"
      ],
      [
        "panose-1",
        "panose-1"
      ],
      [
        "pointerEvents",
        "pointer-events"
      ],
      [
        "renderingIntent",
        "rendering-intent"
      ],
      [
        "shapeRendering",
        "shape-rendering"
      ],
      [
        "stopColor",
        "stop-color"
      ],
      [
        "stopOpacity",
        "stop-opacity"
      ],
      [
        "strikethroughPosition",
        "strikethrough-position"
      ],
      [
        "strikethroughThickness",
        "strikethrough-thickness"
      ],
      [
        "strokeDasharray",
        "stroke-dasharray"
      ],
      [
        "strokeDashoffset",
        "stroke-dashoffset"
      ],
      [
        "strokeLinecap",
        "stroke-linecap"
      ],
      [
        "strokeLinejoin",
        "stroke-linejoin"
      ],
      [
        "strokeMiterlimit",
        "stroke-miterlimit"
      ],
      [
        "strokeOpacity",
        "stroke-opacity"
      ],
      [
        "strokeWidth",
        "stroke-width"
      ],
      [
        "textAnchor",
        "text-anchor"
      ],
      [
        "textDecoration",
        "text-decoration"
      ],
      [
        "textRendering",
        "text-rendering"
      ],
      [
        "transformOrigin",
        "transform-origin"
      ],
      [
        "underlinePosition",
        "underline-position"
      ],
      [
        "underlineThickness",
        "underline-thickness"
      ],
      [
        "unicodeBidi",
        "unicode-bidi"
      ],
      [
        "unicodeRange",
        "unicode-range"
      ],
      [
        "unitsPerEm",
        "units-per-em"
      ],
      [
        "vAlphabetic",
        "v-alphabetic"
      ],
      [
        "vHanging",
        "v-hanging"
      ],
      [
        "vIdeographic",
        "v-ideographic"
      ],
      [
        "vMathematical",
        "v-mathematical"
      ],
      [
        "vectorEffect",
        "vector-effect"
      ],
      [
        "vertAdvY",
        "vert-adv-y"
      ],
      [
        "vertOriginX",
        "vert-origin-x"
      ],
      [
        "vertOriginY",
        "vert-origin-y"
      ],
      [
        "wordSpacing",
        "word-spacing"
      ],
      [
        "writingMode",
        "writing-mode"
      ],
      [
        "xmlnsXlink",
        "xmlns:xlink"
      ],
      [
        "xHeight",
        "x-height"
      ]
    ]), A2 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Za(i) {
      return A2.test("" + i) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : i;
    }
    function en() {
    }
    var Vu = null;
    function qu(i) {
      return i = i.target || i.srcElement || window, i.correspondingUseElement && (i = i.correspondingUseElement), i.nodeType === 3 ? i.parentNode : i;
    }
    var Pl = null, Il = null;
    function Cg(i) {
      var s = Ql(i);
      if (s && (i = s.stateNode)) {
        var o = i[qe] || null;
        t: switch (i = s.stateNode, s.type) {
          case "input":
            if (Lu(i, o.value, o.defaultValue, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name), s = o.name, o.type === "radio" && s != null) {
              for (o = i; o.parentNode; ) o = o.parentNode;
              for (o = o.querySelectorAll('input[name="' + fi("" + s) + '"][type="radio"]'), s = 0; s < o.length; s++) {
                var u = o[s];
                if (u !== i && u.form === i.form) {
                  var d = u[qe] || null;
                  if (!d) throw Error(n(90));
                  Lu(u, d.value, d.defaultValue, d.defaultValue, d.checked, d.defaultChecked, d.type, d.name);
                }
              }
              for (s = 0; s < o.length; s++) u = o[s], u.form === i.form && bg(u);
            }
            break t;
          case "textarea":
            Sg(i, o.value, o.defaultValue);
            break t;
          case "select":
            s = o.value, s != null && Jl(i, !!o.multiple, s, false);
        }
      }
    }
    var ju = false;
    function Mg(i, s, o) {
      if (ju) return i(s, o);
      ju = true;
      try {
        var u = i(s);
        return u;
      } finally {
        if (ju = false, (Pl !== null || Il !== null) && (No(), Pl && (s = Pl, i = Il, Il = Pl = null, Cg(s), i))) for (s = 0; s < i.length; s++) Cg(i[s]);
      }
    }
    function rr(i, s) {
      var o = i.stateNode;
      if (o === null) return null;
      var u = o[qe] || null;
      if (u === null) return null;
      o = u[s];
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
          (u = !u.disabled) || (i = i.type, u = !(i === "button" || i === "input" || i === "select" || i === "textarea")), i = !u;
          break t;
        default:
          i = false;
      }
      if (i) return null;
      if (o && typeof o != "function") throw Error(n(231, s, typeof o));
      return o;
    }
    var nn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Yu = false;
    if (nn) try {
      var ar = {};
      Object.defineProperty(ar, "passive", {
        get: function() {
          Yu = true;
        }
      }), window.addEventListener("test", ar, ar), window.removeEventListener("test", ar, ar);
    } catch {
      Yu = false;
    }
    var Tn = null, Gu = null, Wa = null;
    function _g() {
      if (Wa) return Wa;
      var i, s = Gu, o = s.length, u, d = "value" in Tn ? Tn.value : Tn.textContent, m = d.length;
      for (i = 0; i < o && s[i] === d[i]; i++) ;
      var b = o - i;
      for (u = 1; u <= b && s[o - u] === d[m - u]; u++) ;
      return Wa = d.slice(i, 1 < u ? 1 - u : void 0);
    }
    function Ja(i) {
      var s = i.keyCode;
      return "charCode" in i ? (i = i.charCode, i === 0 && s === 13 && (i = 13)) : i = s, i === 10 && (i = 13), 32 <= i || i === 13 ? i : 0;
    }
    function Fa() {
      return true;
    }
    function kg() {
      return false;
    }
    function je(i) {
      function s(o, u, d, m, b) {
        this._reactName = o, this._targetInst = d, this.type = u, this.nativeEvent = m, this.target = b, this.currentTarget = null;
        for (var x in i) i.hasOwnProperty(x) && (o = i[x], this[x] = o ? o(m) : m[x]);
        return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === false) ? Fa : kg, this.isPropagationStopped = kg, this;
      }
      return y(s.prototype, {
        preventDefault: function() {
          this.defaultPrevented = true;
          var o = this.nativeEvent;
          o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = false), this.isDefaultPrevented = Fa);
        },
        stopPropagation: function() {
          var o = this.nativeEvent;
          o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = true), this.isPropagationStopped = Fa);
        },
        persist: function() {
        },
        isPersistent: Fa
      }), s;
    }
    var ml = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(i) {
        return i.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Pa = je(ml), or = y({}, ml, {
      view: 0,
      detail: 0
    }), C2 = je(or), Xu, Ku, cr, Ia = y({}, or, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Zu,
      button: 0,
      buttons: 0,
      relatedTarget: function(i) {
        return i.relatedTarget === void 0 ? i.fromElement === i.srcElement ? i.toElement : i.fromElement : i.relatedTarget;
      },
      movementX: function(i) {
        return "movementX" in i ? i.movementX : (i !== cr && (cr && i.type === "mousemove" ? (Xu = i.screenX - cr.screenX, Ku = i.screenY - cr.screenY) : Ku = Xu = 0, cr = i), Xu);
      },
      movementY: function(i) {
        return "movementY" in i ? i.movementY : Ku;
      }
    }), Tg = je(Ia), M2 = y({}, Ia, {
      dataTransfer: 0
    }), _2 = je(M2), k2 = y({}, or, {
      relatedTarget: 0
    }), Qu = je(k2), T2 = y({}, ml, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), O2 = je(T2), D2 = y({}, ml, {
      clipboardData: function(i) {
        return "clipboardData" in i ? i.clipboardData : window.clipboardData;
      }
    }), E2 = je(D2), B2 = y({}, ml, {
      data: 0
    }), Og = je(B2), R2 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, z2 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, N2 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function L2(i) {
      var s = this.nativeEvent;
      return s.getModifierState ? s.getModifierState(i) : (i = N2[i]) ? !!s[i] : false;
    }
    function Zu() {
      return L2;
    }
    var H2 = y({}, or, {
      key: function(i) {
        if (i.key) {
          var s = R2[i.key] || i.key;
          if (s !== "Unidentified") return s;
        }
        return i.type === "keypress" ? (i = Ja(i), i === 13 ? "Enter" : String.fromCharCode(i)) : i.type === "keydown" || i.type === "keyup" ? z2[i.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Zu,
      charCode: function(i) {
        return i.type === "keypress" ? Ja(i) : 0;
      },
      keyCode: function(i) {
        return i.type === "keydown" || i.type === "keyup" ? i.keyCode : 0;
      },
      which: function(i) {
        return i.type === "keypress" ? Ja(i) : i.type === "keydown" || i.type === "keyup" ? i.keyCode : 0;
      }
    }), U2 = je(H2), V2 = y({}, Ia, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Dg = je(V2), q2 = y({}, or, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Zu
    }), j2 = je(q2), Y2 = y({}, ml, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), G2 = je(Y2), X2 = y({}, Ia, {
      deltaX: function(i) {
        return "deltaX" in i ? i.deltaX : "wheelDeltaX" in i ? -i.wheelDeltaX : 0;
      },
      deltaY: function(i) {
        return "deltaY" in i ? i.deltaY : "wheelDeltaY" in i ? -i.wheelDeltaY : "wheelDelta" in i ? -i.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), K2 = je(X2), Q2 = y({}, ml, {
      newState: 0,
      oldState: 0
    }), Z2 = je(Q2), W2 = [
      9,
      13,
      27,
      32
    ], Wu = nn && "CompositionEvent" in window, ur = null;
    nn && "documentMode" in document && (ur = document.documentMode);
    var J2 = nn && "TextEvent" in window && !ur, Eg = nn && (!Wu || ur && 8 < ur && 11 >= ur), Bg = " ", Rg = false;
    function zg(i, s) {
      switch (i) {
        case "keyup":
          return W2.indexOf(s.keyCode) !== -1;
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
    function Ng(i) {
      return i = i.detail, typeof i == "object" && "data" in i ? i.data : null;
    }
    var $l = false;
    function F2(i, s) {
      switch (i) {
        case "compositionend":
          return Ng(s);
        case "keypress":
          return s.which !== 32 ? null : (Rg = true, Bg);
        case "textInput":
          return i = s.data, i === Bg && Rg ? null : i;
        default:
          return null;
      }
    }
    function P2(i, s) {
      if ($l) return i === "compositionend" || !Wu && zg(i, s) ? (i = _g(), Wa = Gu = Tn = null, $l = false, i) : null;
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
          return Eg && s.locale !== "ko" ? null : s.data;
        default:
          return null;
      }
    }
    var I2 = {
      color: true,
      date: true,
      datetime: true,
      "datetime-local": true,
      email: true,
      month: true,
      number: true,
      password: true,
      range: true,
      search: true,
      tel: true,
      text: true,
      time: true,
      url: true,
      week: true
    };
    function Lg(i) {
      var s = i && i.nodeName && i.nodeName.toLowerCase();
      return s === "input" ? !!I2[i.type] : s === "textarea";
    }
    function Hg(i, s, o, u) {
      Pl ? Il ? Il.push(u) : Il = [
        u
      ] : Pl = u, s = Yo(s, "onChange"), 0 < s.length && (o = new Pa("onChange", "change", null, o, u), i.push({
        event: o,
        listeners: s
      }));
    }
    var fr = null, hr = null;
    function $2(i) {
      vy(i, 0);
    }
    function $a(i) {
      var s = sr(i);
      if (bg(s)) return i;
    }
    function Ug(i, s) {
      if (i === "change") return s;
    }
    var Vg = false;
    if (nn) {
      var Ju;
      if (nn) {
        var Fu = "oninput" in document;
        if (!Fu) {
          var qg = document.createElement("div");
          qg.setAttribute("oninput", "return;"), Fu = typeof qg.oninput == "function";
        }
        Ju = Fu;
      } else Ju = false;
      Vg = Ju && (!document.documentMode || 9 < document.documentMode);
    }
    function jg() {
      fr && (fr.detachEvent("onpropertychange", Yg), hr = fr = null);
    }
    function Yg(i) {
      if (i.propertyName === "value" && $a(hr)) {
        var s = [];
        Hg(s, hr, i, qu(i)), Mg($2, s);
      }
    }
    function tw(i, s, o) {
      i === "focusin" ? (jg(), fr = s, hr = o, fr.attachEvent("onpropertychange", Yg)) : i === "focusout" && jg();
    }
    function ew(i) {
      if (i === "selectionchange" || i === "keyup" || i === "keydown") return $a(hr);
    }
    function iw(i, s) {
      if (i === "click") return $a(s);
    }
    function nw(i, s) {
      if (i === "input" || i === "change") return $a(s);
    }
    function lw(i, s) {
      return i === s && (i !== 0 || 1 / i === 1 / s) || i !== i && s !== s;
    }
    var ti = typeof Object.is == "function" ? Object.is : lw;
    function dr(i, s) {
      if (ti(i, s)) return true;
      if (typeof i != "object" || i === null || typeof s != "object" || s === null) return false;
      var o = Object.keys(i), u = Object.keys(s);
      if (o.length !== u.length) return false;
      for (u = 0; u < o.length; u++) {
        var d = o[u];
        if (!ku.call(s, d) || !ti(i[d], s[d])) return false;
      }
      return true;
    }
    function Gg(i) {
      for (; i && i.firstChild; ) i = i.firstChild;
      return i;
    }
    function Xg(i, s) {
      var o = Gg(i);
      i = 0;
      for (var u; o; ) {
        if (o.nodeType === 3) {
          if (u = i + o.textContent.length, i <= s && u >= s) return {
            node: o,
            offset: s - i
          };
          i = u;
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
        o = Gg(o);
      }
    }
    function Kg(i, s) {
      return i && s ? i === s ? true : i && i.nodeType === 3 ? false : s && s.nodeType === 3 ? Kg(i, s.parentNode) : "contains" in i ? i.contains(s) : i.compareDocumentPosition ? !!(i.compareDocumentPosition(s) & 16) : false : false;
    }
    function Qg(i) {
      i = i != null && i.ownerDocument != null && i.ownerDocument.defaultView != null ? i.ownerDocument.defaultView : window;
      for (var s = Qa(i.document); s instanceof i.HTMLIFrameElement; ) {
        try {
          var o = typeof s.contentWindow.location.href == "string";
        } catch {
          o = false;
        }
        if (o) i = s.contentWindow;
        else break;
        s = Qa(i.document);
      }
      return s;
    }
    function Pu(i) {
      var s = i && i.nodeName && i.nodeName.toLowerCase();
      return s && (s === "input" && (i.type === "text" || i.type === "search" || i.type === "tel" || i.type === "url" || i.type === "password") || s === "textarea" || i.contentEditable === "true");
    }
    var sw = nn && "documentMode" in document && 11 >= document.documentMode, ts = null, Iu = null, mr = null, $u = false;
    function Zg(i, s, o) {
      var u = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
      $u || ts == null || ts !== Qa(u) || (u = ts, "selectionStart" in u && Pu(u) ? u = {
        start: u.selectionStart,
        end: u.selectionEnd
      } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
        anchorNode: u.anchorNode,
        anchorOffset: u.anchorOffset,
        focusNode: u.focusNode,
        focusOffset: u.focusOffset
      }), mr && dr(mr, u) || (mr = u, u = Yo(Iu, "onSelect"), 0 < u.length && (s = new Pa("onSelect", "select", null, s, o), i.push({
        event: s,
        listeners: u
      }), s.target = ts)));
    }
    function gl(i, s) {
      var o = {};
      return o[i.toLowerCase()] = s.toLowerCase(), o["Webkit" + i] = "webkit" + s, o["Moz" + i] = "moz" + s, o;
    }
    var es = {
      animationend: gl("Animation", "AnimationEnd"),
      animationiteration: gl("Animation", "AnimationIteration"),
      animationstart: gl("Animation", "AnimationStart"),
      transitionrun: gl("Transition", "TransitionRun"),
      transitionstart: gl("Transition", "TransitionStart"),
      transitioncancel: gl("Transition", "TransitionCancel"),
      transitionend: gl("Transition", "TransitionEnd")
    }, tf = {}, Wg = {};
    nn && (Wg = document.createElement("div").style, "AnimationEvent" in window || (delete es.animationend.animation, delete es.animationiteration.animation, delete es.animationstart.animation), "TransitionEvent" in window || delete es.transitionend.transition);
    function pl(i) {
      if (tf[i]) return tf[i];
      if (!es[i]) return i;
      var s = es[i], o;
      for (o in s) if (s.hasOwnProperty(o) && o in Wg) return tf[i] = s[o];
      return i;
    }
    var Jg = pl("animationend"), Fg = pl("animationiteration"), Pg = pl("animationstart"), rw = pl("transitionrun"), aw = pl("transitionstart"), ow = pl("transitioncancel"), Ig = pl("transitionend"), $g = /* @__PURE__ */ new Map(), ef = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    ef.push("scrollEnd");
    function Ti(i, s) {
      $g.set(i, s), dl(s, [
        i
      ]);
    }
    var to = typeof reportError == "function" ? reportError : function(i) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var s = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof i == "object" && i !== null && typeof i.message == "string" ? String(i.message) : String(i),
          error: i
        });
        if (!window.dispatchEvent(s)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", i);
        return;
      }
      console.error(i);
    }, hi = [], is = 0, nf = 0;
    function eo() {
      for (var i = is, s = nf = is = 0; s < i; ) {
        var o = hi[s];
        hi[s++] = null;
        var u = hi[s];
        hi[s++] = null;
        var d = hi[s];
        hi[s++] = null;
        var m = hi[s];
        if (hi[s++] = null, u !== null && d !== null) {
          var b = u.pending;
          b === null ? d.next = d : (d.next = b.next, b.next = d), u.pending = d;
        }
        m !== 0 && tp(o, d, m);
      }
    }
    function io(i, s, o, u) {
      hi[is++] = i, hi[is++] = s, hi[is++] = o, hi[is++] = u, nf |= u, i.lanes |= u, i = i.alternate, i !== null && (i.lanes |= u);
    }
    function lf(i, s, o, u) {
      return io(i, s, o, u), no(i);
    }
    function yl(i, s) {
      return io(i, null, null, s), no(i);
    }
    function tp(i, s, o) {
      i.lanes |= o;
      var u = i.alternate;
      u !== null && (u.lanes |= o);
      for (var d = false, m = i.return; m !== null; ) m.childLanes |= o, u = m.alternate, u !== null && (u.childLanes |= o), m.tag === 22 && (i = m.stateNode, i === null || i._visibility & 1 || (d = true)), i = m, m = m.return;
      return i.tag === 3 ? (m = i.stateNode, d && s !== null && (d = 31 - $e(o), i = m.hiddenUpdates, u = i[d], u === null ? i[d] = [
        s
      ] : u.push(s), s.lane = o | 536870912), m) : null;
    }
    function no(i) {
      if (50 < Lr) throw Lr = 0, dh = null, Error(n(185));
      for (var s = i.return; s !== null; ) i = s, s = i.return;
      return i.tag === 3 ? i.stateNode : null;
    }
    var ns = {};
    function cw(i, s, o, u) {
      this.tag = i, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = s, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function ei(i, s, o, u) {
      return new cw(i, s, o, u);
    }
    function sf(i) {
      return i = i.prototype, !(!i || !i.isReactComponent);
    }
    function ln(i, s) {
      var o = i.alternate;
      return o === null ? (o = ei(i.tag, s, i.key, i.mode), o.elementType = i.elementType, o.type = i.type, o.stateNode = i.stateNode, o.alternate = i, i.alternate = o) : (o.pendingProps = s, o.type = i.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = i.flags & 65011712, o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, s = i.dependencies, o.dependencies = s === null ? null : {
        lanes: s.lanes,
        firstContext: s.firstContext
      }, o.sibling = i.sibling, o.index = i.index, o.ref = i.ref, o.refCleanup = i.refCleanup, o;
    }
    function ep(i, s) {
      i.flags &= 65011714;
      var o = i.alternate;
      return o === null ? (i.childLanes = 0, i.lanes = s, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, s = o.dependencies, i.dependencies = s === null ? null : {
        lanes: s.lanes,
        firstContext: s.firstContext
      }), i;
    }
    function lo(i, s, o, u, d, m) {
      var b = 0;
      if (u = i, typeof i == "function") sf(i) && (b = 1);
      else if (typeof i == "string") b = mA(i, o, $.current) ? 26 : i === "html" || i === "head" || i === "body" ? 27 : 5;
      else t: switch (i) {
        case tt:
          return i = ei(31, o, s, d), i.elementType = tt, i.lanes = m, i;
        case A:
          return bl(o.children, d, m, s);
        case _:
          b = 8, d |= 24;
          break;
        case T:
          return i = ei(12, o, s, d | 2), i.elementType = T, i.lanes = m, i;
        case N:
          return i = ei(13, o, s, d), i.elementType = N, i.lanes = m, i;
        case G:
          return i = ei(19, o, s, d), i.elementType = G, i.lanes = m, i;
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
              b = 16, u = null;
              break t;
          }
          b = 29, o = Error(n(130, i === null ? "null" : typeof i, "")), u = null;
      }
      return s = ei(b, o, s, d), s.elementType = i, s.type = u, s.lanes = m, s;
    }
    function bl(i, s, o, u) {
      return i = ei(7, i, u, s), i.lanes = o, i;
    }
    function rf(i, s, o) {
      return i = ei(6, i, null, s), i.lanes = o, i;
    }
    function ip(i) {
      var s = ei(18, null, null, 0);
      return s.stateNode = i, s;
    }
    function af(i, s, o) {
      return s = ei(4, i.children !== null ? i.children : [], i.key, s), s.lanes = o, s.stateNode = {
        containerInfo: i.containerInfo,
        pendingChildren: null,
        implementation: i.implementation
      }, s;
    }
    var np = /* @__PURE__ */ new WeakMap();
    function di(i, s) {
      if (typeof i == "object" && i !== null) {
        var o = np.get(i);
        return o !== void 0 ? o : (s = {
          value: i,
          source: s,
          stack: ig(s)
        }, np.set(i, s), s);
      }
      return {
        value: i,
        source: s,
        stack: ig(s)
      };
    }
    var ls = [], ss = 0, so = null, gr = 0, mi = [], gi = 0, On = null, Ni = 1, Li = "";
    function sn(i, s) {
      ls[ss++] = gr, ls[ss++] = so, so = i, gr = s;
    }
    function lp(i, s, o) {
      mi[gi++] = Ni, mi[gi++] = Li, mi[gi++] = On, On = i;
      var u = Ni;
      i = Li;
      var d = 32 - $e(u) - 1;
      u &= ~(1 << d), o += 1;
      var m = 32 - $e(s) + d;
      if (30 < m) {
        var b = d - d % 5;
        m = (u & (1 << b) - 1).toString(32), u >>= b, d -= b, Ni = 1 << 32 - $e(s) + d | o << d | u, Li = m + i;
      } else Ni = 1 << m | o << d | u, Li = i;
    }
    function of(i) {
      i.return !== null && (sn(i, 1), lp(i, 1, 0));
    }
    function cf(i) {
      for (; i === so; ) so = ls[--ss], ls[ss] = null, gr = ls[--ss], ls[ss] = null;
      for (; i === On; ) On = mi[--gi], mi[gi] = null, Li = mi[--gi], mi[gi] = null, Ni = mi[--gi], mi[gi] = null;
    }
    function sp(i, s) {
      mi[gi++] = Ni, mi[gi++] = Li, mi[gi++] = On, Ni = s.id, Li = s.overflow, On = i;
    }
    var ve = null, Qt = null, kt = false, Dn = null, pi = false, uf = Error(n(519));
    function En(i) {
      var s = Error(n(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
      throw pr(di(s, i)), uf;
    }
    function rp(i) {
      var s = i.stateNode, o = i.type, u = i.memoizedProps;
      switch (s[be] = i, s[qe] = u, o) {
        case "dialog":
          Ct("cancel", s), Ct("close", s);
          break;
        case "iframe":
        case "object":
        case "embed":
          Ct("load", s);
          break;
        case "video":
        case "audio":
          for (o = 0; o < Ur.length; o++) Ct(Ur[o], s);
          break;
        case "source":
          Ct("error", s);
          break;
        case "img":
        case "image":
        case "link":
          Ct("error", s), Ct("load", s);
          break;
        case "details":
          Ct("toggle", s);
          break;
        case "input":
          Ct("invalid", s), vg(s, u.value, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name, true);
          break;
        case "select":
          Ct("invalid", s);
          break;
        case "textarea":
          Ct("invalid", s), xg(s, u.value, u.defaultValue, u.children);
      }
      o = u.children, typeof o != "string" && typeof o != "number" && typeof o != "bigint" || s.textContent === "" + o || u.suppressHydrationWarning === true || Ay(s.textContent, o) ? (u.popover != null && (Ct("beforetoggle", s), Ct("toggle", s)), u.onScroll != null && Ct("scroll", s), u.onScrollEnd != null && Ct("scrollend", s), u.onClick != null && (s.onclick = en), s = true) : s = false, s || En(i, true);
    }
    function ap(i) {
      for (ve = i.return; ve; ) switch (ve.tag) {
        case 5:
        case 31:
        case 13:
          pi = false;
          return;
        case 27:
        case 3:
          pi = true;
          return;
        default:
          ve = ve.return;
      }
    }
    function rs(i) {
      if (i !== ve) return false;
      if (!kt) return ap(i), kt = true, false;
      var s = i.tag, o;
      if ((o = s !== 3 && s !== 27) && ((o = s === 5) && (o = i.type, o = !(o !== "form" && o !== "button") || Th(i.type, i.memoizedProps)), o = !o), o && Qt && En(i), ap(i), s === 13) {
        if (i = i.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(n(317));
        Qt = By(i);
      } else if (s === 31) {
        if (i = i.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(n(317));
        Qt = By(i);
      } else s === 27 ? (s = Qt, Kn(i.type) ? (i = Rh, Rh = null, Qt = i) : Qt = s) : Qt = ve ? bi(i.stateNode.nextSibling) : null;
      return true;
    }
    function vl() {
      Qt = ve = null, kt = false;
    }
    function ff() {
      var i = Dn;
      return i !== null && (Ke === null ? Ke = i : Ke.push.apply(Ke, i), Dn = null), i;
    }
    function pr(i) {
      Dn === null ? Dn = [
        i
      ] : Dn.push(i);
    }
    var hf = M(null), Sl = null, rn = null;
    function Bn(i, s, o) {
      W(hf, s._currentValue), s._currentValue = o;
    }
    function an(i) {
      i._currentValue = hf.current, H(hf);
    }
    function df(i, s, o) {
      for (; i !== null; ) {
        var u = i.alternate;
        if ((i.childLanes & s) !== s ? (i.childLanes |= s, u !== null && (u.childLanes |= s)) : u !== null && (u.childLanes & s) !== s && (u.childLanes |= s), i === o) break;
        i = i.return;
      }
    }
    function mf(i, s, o, u) {
      var d = i.child;
      for (d !== null && (d.return = i); d !== null; ) {
        var m = d.dependencies;
        if (m !== null) {
          var b = d.child;
          m = m.firstContext;
          t: for (; m !== null; ) {
            var x = m;
            m = d;
            for (var C = 0; C < s.length; C++) if (x.context === s[C]) {
              m.lanes |= o, x = m.alternate, x !== null && (x.lanes |= o), df(m.return, o, i), u || (b = null);
              break t;
            }
            m = x.next;
          }
        } else if (d.tag === 18) {
          if (b = d.return, b === null) throw Error(n(341));
          b.lanes |= o, m = b.alternate, m !== null && (m.lanes |= o), df(b, o, i), b = null;
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
    function as(i, s, o, u) {
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
            ti(d.pendingProps.value, b.value) || (i !== null ? i.push(x) : i = [
              x
            ]);
          }
        } else if (d === Et.current) {
          if (b = d.alternate, b === null) throw Error(n(387));
          b.memoizedState.memoizedState !== d.memoizedState.memoizedState && (i !== null ? i.push(Gr) : i = [
            Gr
          ]);
        }
        d = d.return;
      }
      i !== null && mf(s, i, o, u), s.flags |= 262144;
    }
    function ro(i) {
      for (i = i.firstContext; i !== null; ) {
        if (!ti(i.context._currentValue, i.memoizedValue)) return true;
        i = i.next;
      }
      return false;
    }
    function xl(i) {
      Sl = i, rn = null, i = i.dependencies, i !== null && (i.firstContext = null);
    }
    function Se(i) {
      return op(Sl, i);
    }
    function ao(i, s) {
      return Sl === null && xl(i), op(i, s);
    }
    function op(i, s) {
      var o = s._currentValue;
      if (s = {
        context: s,
        memoizedValue: o,
        next: null
      }, rn === null) {
        if (i === null) throw Error(n(308));
        rn = s, i.dependencies = {
          lanes: 0,
          firstContext: s
        }, i.flags |= 524288;
      } else rn = rn.next = s;
      return o;
    }
    var uw = typeof AbortController < "u" ? AbortController : function() {
      var i = [], s = this.signal = {
        aborted: false,
        addEventListener: function(o, u) {
          i.push(u);
        }
      };
      this.abort = function() {
        s.aborted = true, i.forEach(function(o) {
          return o();
        });
      };
    }, fw = l.unstable_scheduleCallback, hw = l.unstable_NormalPriority, ae = {
      $$typeof: L,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };
    function gf() {
      return {
        controller: new uw(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function yr(i) {
      i.refCount--, i.refCount === 0 && fw(hw, function() {
        i.controller.abort();
      });
    }
    var br = null, pf = 0, os = 0, cs = null;
    function dw(i, s) {
      if (br === null) {
        var o = br = [];
        pf = 0, os = vh(), cs = {
          status: "pending",
          value: void 0,
          then: function(u) {
            o.push(u);
          }
        };
      }
      return pf++, s.then(cp, cp), s;
    }
    function cp() {
      if (--pf === 0 && br !== null) {
        cs !== null && (cs.status = "fulfilled");
        var i = br;
        br = null, os = 0, cs = null;
        for (var s = 0; s < i.length; s++) (0, i[s])();
      }
    }
    function mw(i, s) {
      var o = [], u = {
        status: "pending",
        value: null,
        reason: null,
        then: function(d) {
          o.push(d);
        }
      };
      return i.then(function() {
        u.status = "fulfilled", u.value = s;
        for (var d = 0; d < o.length; d++) (0, o[d])(s);
      }, function(d) {
        for (u.status = "rejected", u.reason = d, d = 0; d < o.length; d++) (0, o[d])(void 0);
      }), u;
    }
    var up = R.S;
    R.S = function(i, s) {
      Z0 = Pe(), typeof s == "object" && s !== null && typeof s.then == "function" && dw(i, s), up !== null && up(i, s);
    };
    var wl = M(null);
    function yf() {
      var i = wl.current;
      return i !== null ? i : Gt.pooledCache;
    }
    function oo(i, s) {
      s === null ? W(wl, wl.current) : W(wl, s.pool);
    }
    function fp() {
      var i = yf();
      return i === null ? null : {
        parent: ae._currentValue,
        pool: i
      };
    }
    var us = Error(n(460)), bf = Error(n(474)), co = Error(n(542)), uo = {
      then: function() {
      }
    };
    function hp(i) {
      return i = i.status, i === "fulfilled" || i === "rejected";
    }
    function dp(i, s, o) {
      switch (o = i[o], o === void 0 ? i.push(s) : o !== s && (s.then(en, en), s = o), s.status) {
        case "fulfilled":
          return s.value;
        case "rejected":
          throw i = s.reason, gp(i), i;
        default:
          if (typeof s.status == "string") s.then(en, en);
          else {
            if (i = Gt, i !== null && 100 < i.shellSuspendCounter) throw Error(n(482));
            i = s, i.status = "pending", i.then(function(u) {
              if (s.status === "pending") {
                var d = s;
                d.status = "fulfilled", d.value = u;
              }
            }, function(u) {
              if (s.status === "pending") {
                var d = s;
                d.status = "rejected", d.reason = u;
              }
            });
          }
          switch (s.status) {
            case "fulfilled":
              return s.value;
            case "rejected":
              throw i = s.reason, gp(i), i;
          }
          throw Cl = s, us;
      }
    }
    function Al(i) {
      try {
        var s = i._init;
        return s(i._payload);
      } catch (o) {
        throw o !== null && typeof o == "object" && typeof o.then == "function" ? (Cl = o, us) : o;
      }
    }
    var Cl = null;
    function mp() {
      if (Cl === null) throw Error(n(459));
      var i = Cl;
      return Cl = null, i;
    }
    function gp(i) {
      if (i === us || i === co) throw Error(n(483));
    }
    var fs = null, vr = 0;
    function fo(i) {
      var s = vr;
      return vr += 1, fs === null && (fs = []), dp(fs, i, s);
    }
    function Sr(i, s) {
      s = s.props.ref, i.ref = s !== void 0 ? s : null;
    }
    function ho(i, s) {
      throw s.$$typeof === v ? Error(n(525)) : (i = Object.prototype.toString.call(s), Error(n(31, i === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : i)));
    }
    function pp(i) {
      function s(O, k) {
        if (i) {
          var D = O.deletions;
          D === null ? (O.deletions = [
            k
          ], O.flags |= 16) : D.push(k);
        }
      }
      function o(O, k) {
        if (!i) return null;
        for (; k !== null; ) s(O, k), k = k.sibling;
        return null;
      }
      function u(O) {
        for (var k = /* @__PURE__ */ new Map(); O !== null; ) O.key !== null ? k.set(O.key, O) : k.set(O.index, O), O = O.sibling;
        return k;
      }
      function d(O, k) {
        return O = ln(O, k), O.index = 0, O.sibling = null, O;
      }
      function m(O, k, D) {
        return O.index = D, i ? (D = O.alternate, D !== null ? (D = D.index, D < k ? (O.flags |= 67108866, k) : D) : (O.flags |= 67108866, k)) : (O.flags |= 1048576, k);
      }
      function b(O) {
        return i && O.alternate === null && (O.flags |= 67108866), O;
      }
      function x(O, k, D, Y) {
        return k === null || k.tag !== 6 ? (k = rf(D, O.mode, Y), k.return = O, k) : (k = d(k, D), k.return = O, k);
      }
      function C(O, k, D, Y) {
        var ot = D.type;
        return ot === A ? U(O, k, D.props.children, Y, D.key) : k !== null && (k.elementType === ot || typeof ot == "object" && ot !== null && ot.$$typeof === lt && Al(ot) === k.type) ? (k = d(k, D.props), Sr(k, D), k.return = O, k) : (k = lo(D.type, D.key, D.props, null, O.mode, Y), Sr(k, D), k.return = O, k);
      }
      function E(O, k, D, Y) {
        return k === null || k.tag !== 4 || k.stateNode.containerInfo !== D.containerInfo || k.stateNode.implementation !== D.implementation ? (k = af(D, O.mode, Y), k.return = O, k) : (k = d(k, D.children || []), k.return = O, k);
      }
      function U(O, k, D, Y, ot) {
        return k === null || k.tag !== 7 ? (k = bl(D, O.mode, Y, ot), k.return = O, k) : (k = d(k, D), k.return = O, k);
      }
      function X(O, k, D) {
        if (typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint") return k = rf("" + k, O.mode, D), k.return = O, k;
        if (typeof k == "object" && k !== null) {
          switch (k.$$typeof) {
            case S:
              return D = lo(k.type, k.key, k.props, null, O.mode, D), Sr(D, k), D.return = O, D;
            case w:
              return k = af(k, O.mode, D), k.return = O, k;
            case lt:
              return k = Al(k), X(O, k, D);
          }
          if (yt(k) || I(k)) return k = bl(k, O.mode, D, null), k.return = O, k;
          if (typeof k.then == "function") return X(O, fo(k), D);
          if (k.$$typeof === L) return X(O, ao(O, k), D);
          ho(O, k);
        }
        return null;
      }
      function B(O, k, D, Y) {
        var ot = k !== null ? k.key : null;
        if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint") return ot !== null ? null : x(O, k, "" + D, Y);
        if (typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case S:
              return D.key === ot ? C(O, k, D, Y) : null;
            case w:
              return D.key === ot ? E(O, k, D, Y) : null;
            case lt:
              return D = Al(D), B(O, k, D, Y);
          }
          if (yt(D) || I(D)) return ot !== null ? null : U(O, k, D, Y, null);
          if (typeof D.then == "function") return B(O, k, fo(D), Y);
          if (D.$$typeof === L) return B(O, k, ao(O, D), Y);
          ho(O, D);
        }
        return null;
      }
      function z(O, k, D, Y, ot) {
        if (typeof Y == "string" && Y !== "" || typeof Y == "number" || typeof Y == "bigint") return O = O.get(D) || null, x(k, O, "" + Y, ot);
        if (typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case S:
              return O = O.get(Y.key === null ? D : Y.key) || null, C(k, O, Y, ot);
            case w:
              return O = O.get(Y.key === null ? D : Y.key) || null, E(k, O, Y, ot);
            case lt:
              return Y = Al(Y), z(O, k, D, Y, ot);
          }
          if (yt(Y) || I(Y)) return O = O.get(D) || null, U(k, O, Y, ot, null);
          if (typeof Y.then == "function") return z(O, k, D, fo(Y), ot);
          if (Y.$$typeof === L) return z(O, k, D, ao(k, Y), ot);
          ho(k, Y);
        }
        return null;
      }
      function nt(O, k, D, Y) {
        for (var ot = null, zt = null, st = k, xt = k = 0, _t = null; st !== null && xt < D.length; xt++) {
          st.index > xt ? (_t = st, st = null) : _t = st.sibling;
          var Nt = B(O, st, D[xt], Y);
          if (Nt === null) {
            st === null && (st = _t);
            break;
          }
          i && st && Nt.alternate === null && s(O, st), k = m(Nt, k, xt), zt === null ? ot = Nt : zt.sibling = Nt, zt = Nt, st = _t;
        }
        if (xt === D.length) return o(O, st), kt && sn(O, xt), ot;
        if (st === null) {
          for (; xt < D.length; xt++) st = X(O, D[xt], Y), st !== null && (k = m(st, k, xt), zt === null ? ot = st : zt.sibling = st, zt = st);
          return kt && sn(O, xt), ot;
        }
        for (st = u(st); xt < D.length; xt++) _t = z(st, O, xt, D[xt], Y), _t !== null && (i && _t.alternate !== null && st.delete(_t.key === null ? xt : _t.key), k = m(_t, k, xt), zt === null ? ot = _t : zt.sibling = _t, zt = _t);
        return i && st.forEach(function(Fn) {
          return s(O, Fn);
        }), kt && sn(O, xt), ot;
      }
      function ut(O, k, D, Y) {
        if (D == null) throw Error(n(151));
        for (var ot = null, zt = null, st = k, xt = k = 0, _t = null, Nt = D.next(); st !== null && !Nt.done; xt++, Nt = D.next()) {
          st.index > xt ? (_t = st, st = null) : _t = st.sibling;
          var Fn = B(O, st, Nt.value, Y);
          if (Fn === null) {
            st === null && (st = _t);
            break;
          }
          i && st && Fn.alternate === null && s(O, st), k = m(Fn, k, xt), zt === null ? ot = Fn : zt.sibling = Fn, zt = Fn, st = _t;
        }
        if (Nt.done) return o(O, st), kt && sn(O, xt), ot;
        if (st === null) {
          for (; !Nt.done; xt++, Nt = D.next()) Nt = X(O, Nt.value, Y), Nt !== null && (k = m(Nt, k, xt), zt === null ? ot = Nt : zt.sibling = Nt, zt = Nt);
          return kt && sn(O, xt), ot;
        }
        for (st = u(st); !Nt.done; xt++, Nt = D.next()) Nt = z(st, O, xt, Nt.value, Y), Nt !== null && (i && Nt.alternate !== null && st.delete(Nt.key === null ? xt : Nt.key), k = m(Nt, k, xt), zt === null ? ot = Nt : zt.sibling = Nt, zt = Nt);
        return i && st.forEach(function(MA) {
          return s(O, MA);
        }), kt && sn(O, xt), ot;
      }
      function jt(O, k, D, Y) {
        if (typeof D == "object" && D !== null && D.type === A && D.key === null && (D = D.props.children), typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case S:
              t: {
                for (var ot = D.key; k !== null; ) {
                  if (k.key === ot) {
                    if (ot = D.type, ot === A) {
                      if (k.tag === 7) {
                        o(O, k.sibling), Y = d(k, D.props.children), Y.return = O, O = Y;
                        break t;
                      }
                    } else if (k.elementType === ot || typeof ot == "object" && ot !== null && ot.$$typeof === lt && Al(ot) === k.type) {
                      o(O, k.sibling), Y = d(k, D.props), Sr(Y, D), Y.return = O, O = Y;
                      break t;
                    }
                    o(O, k);
                    break;
                  } else s(O, k);
                  k = k.sibling;
                }
                D.type === A ? (Y = bl(D.props.children, O.mode, Y, D.key), Y.return = O, O = Y) : (Y = lo(D.type, D.key, D.props, null, O.mode, Y), Sr(Y, D), Y.return = O, O = Y);
              }
              return b(O);
            case w:
              t: {
                for (ot = D.key; k !== null; ) {
                  if (k.key === ot) if (k.tag === 4 && k.stateNode.containerInfo === D.containerInfo && k.stateNode.implementation === D.implementation) {
                    o(O, k.sibling), Y = d(k, D.children || []), Y.return = O, O = Y;
                    break t;
                  } else {
                    o(O, k);
                    break;
                  }
                  else s(O, k);
                  k = k.sibling;
                }
                Y = af(D, O.mode, Y), Y.return = O, O = Y;
              }
              return b(O);
            case lt:
              return D = Al(D), jt(O, k, D, Y);
          }
          if (yt(D)) return nt(O, k, D, Y);
          if (I(D)) {
            if (ot = I(D), typeof ot != "function") throw Error(n(150));
            return D = ot.call(D), ut(O, k, D, Y);
          }
          if (typeof D.then == "function") return jt(O, k, fo(D), Y);
          if (D.$$typeof === L) return jt(O, k, ao(O, D), Y);
          ho(O, D);
        }
        return typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint" ? (D = "" + D, k !== null && k.tag === 6 ? (o(O, k.sibling), Y = d(k, D), Y.return = O, O = Y) : (o(O, k), Y = rf(D, O.mode, Y), Y.return = O, O = Y), b(O)) : o(O, k);
      }
      return function(O, k, D, Y) {
        try {
          vr = 0;
          var ot = jt(O, k, D, Y);
          return fs = null, ot;
        } catch (st) {
          if (st === us || st === co) throw st;
          var zt = ei(29, st, null, O.mode);
          return zt.lanes = Y, zt.return = O, zt;
        } finally {
        }
      };
    }
    var Ml = pp(true), yp = pp(false), Rn = false;
    function vf(i) {
      i.updateQueue = {
        baseState: i.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          lanes: 0,
          hiddenCallbacks: null
        },
        callbacks: null
      };
    }
    function Sf(i, s) {
      i = i.updateQueue, s.updateQueue === i && (s.updateQueue = {
        baseState: i.baseState,
        firstBaseUpdate: i.firstBaseUpdate,
        lastBaseUpdate: i.lastBaseUpdate,
        shared: i.shared,
        callbacks: null
      });
    }
    function zn(i) {
      return {
        lane: i,
        tag: 0,
        payload: null,
        callback: null,
        next: null
      };
    }
    function Nn(i, s, o) {
      var u = i.updateQueue;
      if (u === null) return null;
      if (u = u.shared, (Lt & 2) !== 0) {
        var d = u.pending;
        return d === null ? s.next = s : (s.next = d.next, d.next = s), u.pending = s, s = no(i), tp(i, null, o), s;
      }
      return io(i, u, s, o), no(i);
    }
    function xr(i, s, o) {
      if (s = s.updateQueue, s !== null && (s = s.shared, (o & 4194048) !== 0)) {
        var u = s.lanes;
        u &= i.pendingLanes, o |= u, s.lanes = o, og(i, o);
      }
    }
    function xf(i, s) {
      var o = i.updateQueue, u = i.alternate;
      if (u !== null && (u = u.updateQueue, o === u)) {
        var d = null, m = null;
        if (o = o.firstBaseUpdate, o !== null) {
          do {
            var b = {
              lane: o.lane,
              tag: o.tag,
              payload: o.payload,
              callback: null,
              next: null
            };
            m === null ? d = m = b : m = m.next = b, o = o.next;
          } while (o !== null);
          m === null ? d = m = s : m = m.next = s;
        } else d = m = s;
        o = {
          baseState: u.baseState,
          firstBaseUpdate: d,
          lastBaseUpdate: m,
          shared: u.shared,
          callbacks: u.callbacks
        }, i.updateQueue = o;
        return;
      }
      i = o.lastBaseUpdate, i === null ? o.firstBaseUpdate = s : i.next = s, o.lastBaseUpdate = s;
    }
    var wf = false;
    function wr() {
      if (wf) {
        var i = cs;
        if (i !== null) throw i;
      }
    }
    function Ar(i, s, o, u) {
      wf = false;
      var d = i.updateQueue;
      Rn = false;
      var m = d.firstBaseUpdate, b = d.lastBaseUpdate, x = d.shared.pending;
      if (x !== null) {
        d.shared.pending = null;
        var C = x, E = C.next;
        C.next = null, b === null ? m = E : b.next = E, b = C;
        var U = i.alternate;
        U !== null && (U = U.updateQueue, x = U.lastBaseUpdate, x !== b && (x === null ? U.firstBaseUpdate = E : x.next = E, U.lastBaseUpdate = C));
      }
      if (m !== null) {
        var X = d.baseState;
        b = 0, U = E = C = null, x = m;
        do {
          var B = x.lane & -536870913, z = B !== x.lane;
          if (z ? (Mt & B) === B : (u & B) === B) {
            B !== 0 && B === os && (wf = true), U !== null && (U = U.next = {
              lane: 0,
              tag: x.tag,
              payload: x.payload,
              callback: null,
              next: null
            });
            t: {
              var nt = i, ut = x;
              B = s;
              var jt = o;
              switch (ut.tag) {
                case 1:
                  if (nt = ut.payload, typeof nt == "function") {
                    X = nt.call(jt, X, B);
                    break t;
                  }
                  X = nt;
                  break t;
                case 3:
                  nt.flags = nt.flags & -65537 | 128;
                case 0:
                  if (nt = ut.payload, B = typeof nt == "function" ? nt.call(jt, X, B) : nt, B == null) break t;
                  X = y({}, X, B);
                  break t;
                case 2:
                  Rn = true;
              }
            }
            B = x.callback, B !== null && (i.flags |= 64, z && (i.flags |= 8192), z = d.callbacks, z === null ? d.callbacks = [
              B
            ] : z.push(B));
          } else z = {
            lane: B,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null
          }, U === null ? (E = U = z, C = X) : U = U.next = z, b |= B;
          if (x = x.next, x === null) {
            if (x = d.shared.pending, x === null) break;
            z = x, x = z.next, z.next = null, d.lastBaseUpdate = z, d.shared.pending = null;
          }
        } while (true);
        U === null && (C = X), d.baseState = C, d.firstBaseUpdate = E, d.lastBaseUpdate = U, m === null && (d.shared.lanes = 0), qn |= b, i.lanes = b, i.memoizedState = X;
      }
    }
    function bp(i, s) {
      if (typeof i != "function") throw Error(n(191, i));
      i.call(s);
    }
    function vp(i, s) {
      var o = i.callbacks;
      if (o !== null) for (i.callbacks = null, i = 0; i < o.length; i++) bp(o[i], s);
    }
    var hs = M(null), mo = M(0);
    function Sp(i, s) {
      i = pn, W(mo, i), W(hs, s), pn = i | s.baseLanes;
    }
    function Af() {
      W(mo, pn), W(hs, hs.current);
    }
    function Cf() {
      pn = mo.current, H(hs), H(mo);
    }
    var ii = M(null), yi = null;
    function Ln(i) {
      var s = i.alternate;
      W(ne, ne.current & 1), W(ii, i), yi === null && (s === null || hs.current !== null || s.memoizedState !== null) && (yi = i);
    }
    function Mf(i) {
      W(ne, ne.current), W(ii, i), yi === null && (yi = i);
    }
    function xp(i) {
      i.tag === 22 ? (W(ne, ne.current), W(ii, i), yi === null && (yi = i)) : Hn();
    }
    function Hn() {
      W(ne, ne.current), W(ii, ii.current);
    }
    function ni(i) {
      H(ii), yi === i && (yi = null), H(ne);
    }
    var ne = M(0);
    function go(i) {
      for (var s = i; s !== null; ) {
        if (s.tag === 13) {
          var o = s.memoizedState;
          if (o !== null && (o = o.dehydrated, o === null || Eh(o) || Bh(o))) return s;
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
    var on = 0, vt = null, Vt = null, oe = null, po = false, ds = false, _l = false, yo = 0, Cr = 0, ms = null, gw = 0;
    function $t() {
      throw Error(n(321));
    }
    function _f(i, s) {
      if (s === null) return false;
      for (var o = 0; o < s.length && o < i.length; o++) if (!ti(i[o], s[o])) return false;
      return true;
    }
    function kf(i, s, o, u, d, m) {
      return on = m, vt = s, s.memoizedState = null, s.updateQueue = null, s.lanes = 0, R.H = i === null || i.memoizedState === null ? l0 : Yf, _l = false, m = o(u, d), _l = false, ds && (m = Ap(s, o, u, d)), wp(i), m;
    }
    function wp(i) {
      R.H = kr;
      var s = Vt !== null && Vt.next !== null;
      if (on = 0, oe = Vt = vt = null, po = false, Cr = 0, ms = null, s) throw Error(n(300));
      i === null || ce || (i = i.dependencies, i !== null && ro(i) && (ce = true));
    }
    function Ap(i, s, o, u) {
      vt = i;
      var d = 0;
      do {
        if (ds && (ms = null), Cr = 0, ds = false, 25 <= d) throw Error(n(301));
        if (d += 1, oe = Vt = null, i.updateQueue != null) {
          var m = i.updateQueue;
          m.lastEffect = null, m.events = null, m.stores = null, m.memoCache != null && (m.memoCache.index = 0);
        }
        R.H = s0, m = s(o, u);
      } while (ds);
      return m;
    }
    function pw() {
      var i = R.H, s = i.useState()[0];
      return s = typeof s.then == "function" ? Mr(s) : s, i = i.useState()[0], (Vt !== null ? Vt.memoizedState : null) !== i && (vt.flags |= 1024), s;
    }
    function Tf() {
      var i = yo !== 0;
      return yo = 0, i;
    }
    function Of(i, s, o) {
      s.updateQueue = i.updateQueue, s.flags &= -2053, i.lanes &= ~o;
    }
    function Df(i) {
      if (po) {
        for (i = i.memoizedState; i !== null; ) {
          var s = i.queue;
          s !== null && (s.pending = null), i = i.next;
        }
        po = false;
      }
      on = 0, oe = Vt = vt = null, ds = false, Cr = yo = 0, ms = null;
    }
    function Ne() {
      var i = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return oe === null ? vt.memoizedState = oe = i : oe = oe.next = i, oe;
    }
    function le() {
      if (Vt === null) {
        var i = vt.alternate;
        i = i !== null ? i.memoizedState : null;
      } else i = Vt.next;
      var s = oe === null ? vt.memoizedState : oe.next;
      if (s !== null) oe = s, Vt = i;
      else {
        if (i === null) throw vt.alternate === null ? Error(n(467)) : Error(n(310));
        Vt = i, i = {
          memoizedState: Vt.memoizedState,
          baseState: Vt.baseState,
          baseQueue: Vt.baseQueue,
          queue: Vt.queue,
          next: null
        }, oe === null ? vt.memoizedState = oe = i : oe = oe.next = i;
      }
      return oe;
    }
    function bo() {
      return {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null
      };
    }
    function Mr(i) {
      var s = Cr;
      return Cr += 1, ms === null && (ms = []), i = dp(ms, i, s), s = vt, (oe === null ? s.memoizedState : oe.next) === null && (s = s.alternate, R.H = s === null || s.memoizedState === null ? l0 : Yf), i;
    }
    function vo(i) {
      if (i !== null && typeof i == "object") {
        if (typeof i.then == "function") return Mr(i);
        if (i.$$typeof === L) return Se(i);
      }
      throw Error(n(438, String(i)));
    }
    function Ef(i) {
      var s = null, o = vt.updateQueue;
      if (o !== null && (s = o.memoCache), s == null) {
        var u = vt.alternate;
        u !== null && (u = u.updateQueue, u !== null && (u = u.memoCache, u != null && (s = {
          data: u.data.map(function(d) {
            return d.slice();
          }),
          index: 0
        })));
      }
      if (s == null && (s = {
        data: [],
        index: 0
      }), o === null && (o = bo(), vt.updateQueue = o), o.memoCache = s, o = s.data[s.index], o === void 0) for (o = s.data[s.index] = Array(i), u = 0; u < i; u++) o[u] = pt;
      return s.index++, o;
    }
    function cn(i, s) {
      return typeof s == "function" ? s(i) : s;
    }
    function So(i) {
      var s = le();
      return Bf(s, Vt, i);
    }
    function Bf(i, s, o) {
      var u = i.queue;
      if (u === null) throw Error(n(311));
      u.lastRenderedReducer = o;
      var d = i.baseQueue, m = u.pending;
      if (m !== null) {
        if (d !== null) {
          var b = d.next;
          d.next = m.next, m.next = b;
        }
        s.baseQueue = d = m, u.pending = null;
      }
      if (m = i.baseState, d === null) i.memoizedState = m;
      else {
        s = d.next;
        var x = b = null, C = null, E = s, U = false;
        do {
          var X = E.lane & -536870913;
          if (X !== E.lane ? (Mt & X) === X : (on & X) === X) {
            var B = E.revertLane;
            if (B === 0) C !== null && (C = C.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null
            }), X === os && (U = true);
            else if ((on & B) === B) {
              E = E.next, B === os && (U = true);
              continue;
            } else X = {
              lane: 0,
              revertLane: E.revertLane,
              gesture: null,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null
            }, C === null ? (x = C = X, b = m) : C = C.next = X, vt.lanes |= B, qn |= B;
            X = E.action, _l && o(m, X), m = E.hasEagerState ? E.eagerState : o(m, X);
          } else B = {
            lane: X,
            revertLane: E.revertLane,
            gesture: E.gesture,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null
          }, C === null ? (x = C = B, b = m) : C = C.next = B, vt.lanes |= X, qn |= X;
          E = E.next;
        } while (E !== null && E !== s);
        if (C === null ? b = m : C.next = x, !ti(m, i.memoizedState) && (ce = true, U && (o = cs, o !== null))) throw o;
        i.memoizedState = m, i.baseState = b, i.baseQueue = C, u.lastRenderedState = m;
      }
      return d === null && (u.lanes = 0), [
        i.memoizedState,
        u.dispatch
      ];
    }
    function Rf(i) {
      var s = le(), o = s.queue;
      if (o === null) throw Error(n(311));
      o.lastRenderedReducer = i;
      var u = o.dispatch, d = o.pending, m = s.memoizedState;
      if (d !== null) {
        o.pending = null;
        var b = d = d.next;
        do
          m = i(m, b.action), b = b.next;
        while (b !== d);
        ti(m, s.memoizedState) || (ce = true), s.memoizedState = m, s.baseQueue === null && (s.baseState = m), o.lastRenderedState = m;
      }
      return [
        m,
        u
      ];
    }
    function Cp(i, s, o) {
      var u = vt, d = le(), m = kt;
      if (m) {
        if (o === void 0) throw Error(n(407));
        o = o();
      } else o = s();
      var b = !ti((Vt || d).memoizedState, o);
      if (b && (d.memoizedState = o, ce = true), d = d.queue, Lf(kp.bind(null, u, d, i), [
        i
      ]), d.getSnapshot !== s || b || oe !== null && oe.memoizedState.tag & 1) {
        if (u.flags |= 2048, gs(9, {
          destroy: void 0
        }, _p.bind(null, u, d, o, s), null), Gt === null) throw Error(n(349));
        m || (on & 127) !== 0 || Mp(u, s, o);
      }
      return o;
    }
    function Mp(i, s, o) {
      i.flags |= 16384, i = {
        getSnapshot: s,
        value: o
      }, s = vt.updateQueue, s === null ? (s = bo(), vt.updateQueue = s, s.stores = [
        i
      ]) : (o = s.stores, o === null ? s.stores = [
        i
      ] : o.push(i));
    }
    function _p(i, s, o, u) {
      s.value = o, s.getSnapshot = u, Tp(s) && Op(i);
    }
    function kp(i, s, o) {
      return o(function() {
        Tp(s) && Op(i);
      });
    }
    function Tp(i) {
      var s = i.getSnapshot;
      i = i.value;
      try {
        var o = s();
        return !ti(i, o);
      } catch {
        return true;
      }
    }
    function Op(i) {
      var s = yl(i, 2);
      s !== null && Qe(s, i, 2);
    }
    function zf(i) {
      var s = Ne();
      if (typeof i == "function") {
        var o = i;
        if (i = o(), _l) {
          _n(true);
          try {
            o();
          } finally {
            _n(false);
          }
        }
      }
      return s.memoizedState = s.baseState = i, s.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cn,
        lastRenderedState: i
      }, s;
    }
    function Dp(i, s, o, u) {
      return i.baseState = o, Bf(i, Vt, typeof u == "function" ? u : cn);
    }
    function yw(i, s, o, u, d) {
      if (Ao(i)) throw Error(n(485));
      if (i = s.action, i !== null) {
        var m = {
          payload: d,
          action: i,
          next: null,
          isTransition: true,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(b) {
            m.listeners.push(b);
          }
        };
        R.T !== null ? o(true) : m.isTransition = false, u(m), o = s.pending, o === null ? (m.next = s.pending = m, Ep(s, m)) : (m.next = o.next, s.pending = o.next = m);
      }
    }
    function Ep(i, s) {
      var o = s.action, u = s.payload, d = i.state;
      if (s.isTransition) {
        var m = R.T, b = {};
        R.T = b;
        try {
          var x = o(d, u), C = R.S;
          C !== null && C(b, x), Bp(i, s, x);
        } catch (E) {
          Nf(i, s, E);
        } finally {
          m !== null && b.types !== null && (m.types = b.types), R.T = m;
        }
      } else try {
        m = o(d, u), Bp(i, s, m);
      } catch (E) {
        Nf(i, s, E);
      }
    }
    function Bp(i, s, o) {
      o !== null && typeof o == "object" && typeof o.then == "function" ? o.then(function(u) {
        Rp(i, s, u);
      }, function(u) {
        return Nf(i, s, u);
      }) : Rp(i, s, o);
    }
    function Rp(i, s, o) {
      s.status = "fulfilled", s.value = o, zp(s), i.state = o, s = i.pending, s !== null && (o = s.next, o === s ? i.pending = null : (o = o.next, s.next = o, Ep(i, o)));
    }
    function Nf(i, s, o) {
      var u = i.pending;
      if (i.pending = null, u !== null) {
        u = u.next;
        do
          s.status = "rejected", s.reason = o, zp(s), s = s.next;
        while (s !== u);
      }
      i.action = null;
    }
    function zp(i) {
      i = i.listeners;
      for (var s = 0; s < i.length; s++) (0, i[s])();
    }
    function Np(i, s) {
      return s;
    }
    function Lp(i, s) {
      if (kt) {
        var o = Gt.formState;
        if (o !== null) {
          t: {
            var u = vt;
            if (kt) {
              if (Qt) {
                e: {
                  for (var d = Qt, m = pi; d.nodeType !== 8; ) {
                    if (!m) {
                      d = null;
                      break e;
                    }
                    if (d = bi(d.nextSibling), d === null) {
                      d = null;
                      break e;
                    }
                  }
                  m = d.data, d = m === "F!" || m === "F" ? d : null;
                }
                if (d) {
                  Qt = bi(d.nextSibling), u = d.data === "F!";
                  break t;
                }
              }
              En(u);
            }
            u = false;
          }
          u && (s = o[0]);
        }
      }
      return o = Ne(), o.memoizedState = o.baseState = s, u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Np,
        lastRenderedState: s
      }, o.queue = u, o = e0.bind(null, vt, u), u.dispatch = o, u = zf(false), m = jf.bind(null, vt, false, u.queue), u = Ne(), d = {
        state: s,
        dispatch: null,
        action: i,
        pending: null
      }, u.queue = d, o = yw.bind(null, vt, d, m, o), d.dispatch = o, u.memoizedState = i, [
        s,
        o,
        false
      ];
    }
    function Hp(i) {
      var s = le();
      return Up(s, Vt, i);
    }
    function Up(i, s, o) {
      if (s = Bf(i, s, Np)[0], i = So(cn)[0], typeof s == "object" && s !== null && typeof s.then == "function") try {
        var u = Mr(s);
      } catch (b) {
        throw b === us ? co : b;
      }
      else u = s;
      s = le();
      var d = s.queue, m = d.dispatch;
      return o !== s.memoizedState && (vt.flags |= 2048, gs(9, {
        destroy: void 0
      }, bw.bind(null, d, o), null)), [
        u,
        m,
        i
      ];
    }
    function bw(i, s) {
      i.action = s;
    }
    function Vp(i) {
      var s = le(), o = Vt;
      if (o !== null) return Up(s, o, i);
      le(), s = s.memoizedState, o = le();
      var u = o.queue.dispatch;
      return o.memoizedState = i, [
        s,
        u,
        false
      ];
    }
    function gs(i, s, o, u) {
      return i = {
        tag: i,
        create: o,
        deps: u,
        inst: s,
        next: null
      }, s = vt.updateQueue, s === null && (s = bo(), vt.updateQueue = s), o = s.lastEffect, o === null ? s.lastEffect = i.next = i : (u = o.next, o.next = i, i.next = u, s.lastEffect = i), i;
    }
    function qp() {
      return le().memoizedState;
    }
    function xo(i, s, o, u) {
      var d = Ne();
      vt.flags |= i, d.memoizedState = gs(1 | s, {
        destroy: void 0
      }, o, u === void 0 ? null : u);
    }
    function wo(i, s, o, u) {
      var d = le();
      u = u === void 0 ? null : u;
      var m = d.memoizedState.inst;
      Vt !== null && u !== null && _f(u, Vt.memoizedState.deps) ? d.memoizedState = gs(s, m, o, u) : (vt.flags |= i, d.memoizedState = gs(1 | s, m, o, u));
    }
    function jp(i, s) {
      xo(8390656, 8, i, s);
    }
    function Lf(i, s) {
      wo(2048, 8, i, s);
    }
    function vw(i) {
      vt.flags |= 4;
      var s = vt.updateQueue;
      if (s === null) s = bo(), vt.updateQueue = s, s.events = [
        i
      ];
      else {
        var o = s.events;
        o === null ? s.events = [
          i
        ] : o.push(i);
      }
    }
    function Yp(i) {
      var s = le().memoizedState;
      return vw({
        ref: s,
        nextImpl: i
      }), function() {
        if ((Lt & 2) !== 0) throw Error(n(440));
        return s.impl.apply(void 0, arguments);
      };
    }
    function Gp(i, s) {
      return wo(4, 2, i, s);
    }
    function Xp(i, s) {
      return wo(4, 4, i, s);
    }
    function Kp(i, s) {
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
    function Qp(i, s, o) {
      o = o != null ? o.concat([
        i
      ]) : null, wo(4, 4, Kp.bind(null, s, i), o);
    }
    function Hf() {
    }
    function Zp(i, s) {
      var o = le();
      s = s === void 0 ? null : s;
      var u = o.memoizedState;
      return s !== null && _f(s, u[1]) ? u[0] : (o.memoizedState = [
        i,
        s
      ], i);
    }
    function Wp(i, s) {
      var o = le();
      s = s === void 0 ? null : s;
      var u = o.memoizedState;
      if (s !== null && _f(s, u[1])) return u[0];
      if (u = i(), _l) {
        _n(true);
        try {
          i();
        } finally {
          _n(false);
        }
      }
      return o.memoizedState = [
        u,
        s
      ], u;
    }
    function Uf(i, s, o) {
      return o === void 0 || (on & 1073741824) !== 0 && (Mt & 261930) === 0 ? i.memoizedState = s : (i.memoizedState = o, i = J0(), vt.lanes |= i, qn |= i, o);
    }
    function Jp(i, s, o, u) {
      return ti(o, s) ? o : hs.current !== null ? (i = Uf(i, o, u), ti(i, s) || (ce = true), i) : (on & 42) === 0 || (on & 1073741824) !== 0 && (Mt & 261930) === 0 ? (ce = true, i.memoizedState = o) : (i = J0(), vt.lanes |= i, qn |= i, s);
    }
    function Fp(i, s, o, u, d) {
      var m = Z.p;
      Z.p = m !== 0 && 8 > m ? m : 8;
      var b = R.T, x = {};
      R.T = x, jf(i, false, s, o);
      try {
        var C = d(), E = R.S;
        if (E !== null && E(x, C), C !== null && typeof C == "object" && typeof C.then == "function") {
          var U = mw(C, u);
          _r(i, s, U, ri(i));
        } else _r(i, s, u, ri(i));
      } catch (X) {
        _r(i, s, {
          then: function() {
          },
          status: "rejected",
          reason: X
        }, ri());
      } finally {
        Z.p = m, b !== null && x.types !== null && (b.types = x.types), R.T = b;
      }
    }
    function Sw() {
    }
    function Vf(i, s, o, u) {
      if (i.tag !== 5) throw Error(n(476));
      var d = Pp(i).queue;
      Fp(i, d, s, it, o === null ? Sw : function() {
        return Ip(i), o(u);
      });
    }
    function Pp(i) {
      var s = i.memoizedState;
      if (s !== null) return s;
      s = {
        memoizedState: it,
        baseState: it,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: cn,
          lastRenderedState: it
        },
        next: null
      };
      var o = {};
      return s.next = {
        memoizedState: o,
        baseState: o,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: cn,
          lastRenderedState: o
        },
        next: null
      }, i.memoizedState = s, i = i.alternate, i !== null && (i.memoizedState = s), s;
    }
    function Ip(i) {
      var s = Pp(i);
      s.next === null && (s = i.alternate.memoizedState), _r(i, s.next.queue, {}, ri());
    }
    function qf() {
      return Se(Gr);
    }
    function $p() {
      return le().memoizedState;
    }
    function t0() {
      return le().memoizedState;
    }
    function xw(i) {
      for (var s = i.return; s !== null; ) {
        switch (s.tag) {
          case 24:
          case 3:
            var o = ri();
            i = zn(o);
            var u = Nn(s, i, o);
            u !== null && (Qe(u, s, o), xr(u, s, o)), s = {
              cache: gf()
            }, i.payload = s;
            return;
        }
        s = s.return;
      }
    }
    function ww(i, s, o) {
      var u = ri();
      o = {
        lane: u,
        revertLane: 0,
        gesture: null,
        action: o,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, Ao(i) ? i0(s, o) : (o = lf(i, s, o, u), o !== null && (Qe(o, i, u), n0(o, s, u)));
    }
    function e0(i, s, o) {
      var u = ri();
      _r(i, s, o, u);
    }
    function _r(i, s, o, u) {
      var d = {
        lane: u,
        revertLane: 0,
        gesture: null,
        action: o,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (Ao(i)) i0(s, d);
      else {
        var m = i.alternate;
        if (i.lanes === 0 && (m === null || m.lanes === 0) && (m = s.lastRenderedReducer, m !== null)) try {
          var b = s.lastRenderedState, x = m(b, o);
          if (d.hasEagerState = true, d.eagerState = x, ti(x, b)) return io(i, s, d, 0), Gt === null && eo(), false;
        } catch {
        } finally {
        }
        if (o = lf(i, s, d, u), o !== null) return Qe(o, i, u), n0(o, s, u), true;
      }
      return false;
    }
    function jf(i, s, o, u) {
      if (u = {
        lane: 2,
        revertLane: vh(),
        gesture: null,
        action: u,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, Ao(i)) {
        if (s) throw Error(n(479));
      } else s = lf(i, o, u, 2), s !== null && Qe(s, i, 2);
    }
    function Ao(i) {
      var s = i.alternate;
      return i === vt || s !== null && s === vt;
    }
    function i0(i, s) {
      ds = po = true;
      var o = i.pending;
      o === null ? s.next = s : (s.next = o.next, o.next = s), i.pending = s;
    }
    function n0(i, s, o) {
      if ((o & 4194048) !== 0) {
        var u = s.lanes;
        u &= i.pendingLanes, o |= u, s.lanes = o, og(i, o);
      }
    }
    var kr = {
      readContext: Se,
      use: vo,
      useCallback: $t,
      useContext: $t,
      useEffect: $t,
      useImperativeHandle: $t,
      useLayoutEffect: $t,
      useInsertionEffect: $t,
      useMemo: $t,
      useReducer: $t,
      useRef: $t,
      useState: $t,
      useDebugValue: $t,
      useDeferredValue: $t,
      useTransition: $t,
      useSyncExternalStore: $t,
      useId: $t,
      useHostTransitionStatus: $t,
      useFormState: $t,
      useActionState: $t,
      useOptimistic: $t,
      useMemoCache: $t,
      useCacheRefresh: $t
    };
    kr.useEffectEvent = $t;
    var l0 = {
      readContext: Se,
      use: vo,
      useCallback: function(i, s) {
        return Ne().memoizedState = [
          i,
          s === void 0 ? null : s
        ], i;
      },
      useContext: Se,
      useEffect: jp,
      useImperativeHandle: function(i, s, o) {
        o = o != null ? o.concat([
          i
        ]) : null, xo(4194308, 4, Kp.bind(null, s, i), o);
      },
      useLayoutEffect: function(i, s) {
        return xo(4194308, 4, i, s);
      },
      useInsertionEffect: function(i, s) {
        xo(4, 2, i, s);
      },
      useMemo: function(i, s) {
        var o = Ne();
        s = s === void 0 ? null : s;
        var u = i();
        if (_l) {
          _n(true);
          try {
            i();
          } finally {
            _n(false);
          }
        }
        return o.memoizedState = [
          u,
          s
        ], u;
      },
      useReducer: function(i, s, o) {
        var u = Ne();
        if (o !== void 0) {
          var d = o(s);
          if (_l) {
            _n(true);
            try {
              o(s);
            } finally {
              _n(false);
            }
          }
        } else d = s;
        return u.memoizedState = u.baseState = d, i = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: i,
          lastRenderedState: d
        }, u.queue = i, i = i.dispatch = ww.bind(null, vt, i), [
          u.memoizedState,
          i
        ];
      },
      useRef: function(i) {
        var s = Ne();
        return i = {
          current: i
        }, s.memoizedState = i;
      },
      useState: function(i) {
        i = zf(i);
        var s = i.queue, o = e0.bind(null, vt, s);
        return s.dispatch = o, [
          i.memoizedState,
          o
        ];
      },
      useDebugValue: Hf,
      useDeferredValue: function(i, s) {
        var o = Ne();
        return Uf(o, i, s);
      },
      useTransition: function() {
        var i = zf(false);
        return i = Fp.bind(null, vt, i.queue, true, false), Ne().memoizedState = i, [
          false,
          i
        ];
      },
      useSyncExternalStore: function(i, s, o) {
        var u = vt, d = Ne();
        if (kt) {
          if (o === void 0) throw Error(n(407));
          o = o();
        } else {
          if (o = s(), Gt === null) throw Error(n(349));
          (Mt & 127) !== 0 || Mp(u, s, o);
        }
        d.memoizedState = o;
        var m = {
          value: o,
          getSnapshot: s
        };
        return d.queue = m, jp(kp.bind(null, u, m, i), [
          i
        ]), u.flags |= 2048, gs(9, {
          destroy: void 0
        }, _p.bind(null, u, m, o, s), null), o;
      },
      useId: function() {
        var i = Ne(), s = Gt.identifierPrefix;
        if (kt) {
          var o = Li, u = Ni;
          o = (u & ~(1 << 32 - $e(u) - 1)).toString(32) + o, s = "_" + s + "R_" + o, o = yo++, 0 < o && (s += "H" + o.toString(32)), s += "_";
        } else o = gw++, s = "_" + s + "r_" + o.toString(32) + "_";
        return i.memoizedState = s;
      },
      useHostTransitionStatus: qf,
      useFormState: Lp,
      useActionState: Lp,
      useOptimistic: function(i) {
        var s = Ne();
        s.memoizedState = s.baseState = i;
        var o = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return s.queue = o, s = jf.bind(null, vt, true, o), o.dispatch = s, [
          i,
          s
        ];
      },
      useMemoCache: Ef,
      useCacheRefresh: function() {
        return Ne().memoizedState = xw.bind(null, vt);
      },
      useEffectEvent: function(i) {
        var s = Ne(), o = {
          impl: i
        };
        return s.memoizedState = o, function() {
          if ((Lt & 2) !== 0) throw Error(n(440));
          return o.impl.apply(void 0, arguments);
        };
      }
    }, Yf = {
      readContext: Se,
      use: vo,
      useCallback: Zp,
      useContext: Se,
      useEffect: Lf,
      useImperativeHandle: Qp,
      useInsertionEffect: Gp,
      useLayoutEffect: Xp,
      useMemo: Wp,
      useReducer: So,
      useRef: qp,
      useState: function() {
        return So(cn);
      },
      useDebugValue: Hf,
      useDeferredValue: function(i, s) {
        var o = le();
        return Jp(o, Vt.memoizedState, i, s);
      },
      useTransition: function() {
        var i = So(cn)[0], s = le().memoizedState;
        return [
          typeof i == "boolean" ? i : Mr(i),
          s
        ];
      },
      useSyncExternalStore: Cp,
      useId: $p,
      useHostTransitionStatus: qf,
      useFormState: Hp,
      useActionState: Hp,
      useOptimistic: function(i, s) {
        var o = le();
        return Dp(o, Vt, i, s);
      },
      useMemoCache: Ef,
      useCacheRefresh: t0
    };
    Yf.useEffectEvent = Yp;
    var s0 = {
      readContext: Se,
      use: vo,
      useCallback: Zp,
      useContext: Se,
      useEffect: Lf,
      useImperativeHandle: Qp,
      useInsertionEffect: Gp,
      useLayoutEffect: Xp,
      useMemo: Wp,
      useReducer: Rf,
      useRef: qp,
      useState: function() {
        return Rf(cn);
      },
      useDebugValue: Hf,
      useDeferredValue: function(i, s) {
        var o = le();
        return Vt === null ? Uf(o, i, s) : Jp(o, Vt.memoizedState, i, s);
      },
      useTransition: function() {
        var i = Rf(cn)[0], s = le().memoizedState;
        return [
          typeof i == "boolean" ? i : Mr(i),
          s
        ];
      },
      useSyncExternalStore: Cp,
      useId: $p,
      useHostTransitionStatus: qf,
      useFormState: Vp,
      useActionState: Vp,
      useOptimistic: function(i, s) {
        var o = le();
        return Vt !== null ? Dp(o, Vt, i, s) : (o.baseState = i, [
          i,
          o.queue.dispatch
        ]);
      },
      useMemoCache: Ef,
      useCacheRefresh: t0
    };
    s0.useEffectEvent = Yp;
    function Gf(i, s, o, u) {
      s = i.memoizedState, o = o(u, s), o = o == null ? s : y({}, s, o), i.memoizedState = o, i.lanes === 0 && (i.updateQueue.baseState = o);
    }
    var Xf = {
      enqueueSetState: function(i, s, o) {
        i = i._reactInternals;
        var u = ri(), d = zn(u);
        d.payload = s, o != null && (d.callback = o), s = Nn(i, d, u), s !== null && (Qe(s, i, u), xr(s, i, u));
      },
      enqueueReplaceState: function(i, s, o) {
        i = i._reactInternals;
        var u = ri(), d = zn(u);
        d.tag = 1, d.payload = s, o != null && (d.callback = o), s = Nn(i, d, u), s !== null && (Qe(s, i, u), xr(s, i, u));
      },
      enqueueForceUpdate: function(i, s) {
        i = i._reactInternals;
        var o = ri(), u = zn(o);
        u.tag = 2, s != null && (u.callback = s), s = Nn(i, u, o), s !== null && (Qe(s, i, o), xr(s, i, o));
      }
    };
    function r0(i, s, o, u, d, m, b) {
      return i = i.stateNode, typeof i.shouldComponentUpdate == "function" ? i.shouldComponentUpdate(u, m, b) : s.prototype && s.prototype.isPureReactComponent ? !dr(o, u) || !dr(d, m) : true;
    }
    function a0(i, s, o, u) {
      i = s.state, typeof s.componentWillReceiveProps == "function" && s.componentWillReceiveProps(o, u), typeof s.UNSAFE_componentWillReceiveProps == "function" && s.UNSAFE_componentWillReceiveProps(o, u), s.state !== i && Xf.enqueueReplaceState(s, s.state, null);
    }
    function kl(i, s) {
      var o = s;
      if ("ref" in s) {
        o = {};
        for (var u in s) u !== "ref" && (o[u] = s[u]);
      }
      if (i = i.defaultProps) {
        o === s && (o = y({}, o));
        for (var d in i) o[d] === void 0 && (o[d] = i[d]);
      }
      return o;
    }
    function o0(i) {
      to(i);
    }
    function c0(i) {
      console.error(i);
    }
    function u0(i) {
      to(i);
    }
    function Co(i, s) {
      try {
        var o = i.onUncaughtError;
        o(s.value, {
          componentStack: s.stack
        });
      } catch (u) {
        setTimeout(function() {
          throw u;
        });
      }
    }
    function f0(i, s, o) {
      try {
        var u = i.onCaughtError;
        u(o.value, {
          componentStack: o.stack,
          errorBoundary: s.tag === 1 ? s.stateNode : null
        });
      } catch (d) {
        setTimeout(function() {
          throw d;
        });
      }
    }
    function Kf(i, s, o) {
      return o = zn(o), o.tag = 3, o.payload = {
        element: null
      }, o.callback = function() {
        Co(i, s);
      }, o;
    }
    function h0(i) {
      return i = zn(i), i.tag = 3, i;
    }
    function d0(i, s, o, u) {
      var d = o.type.getDerivedStateFromError;
      if (typeof d == "function") {
        var m = u.value;
        i.payload = function() {
          return d(m);
        }, i.callback = function() {
          f0(s, o, u);
        };
      }
      var b = o.stateNode;
      b !== null && typeof b.componentDidCatch == "function" && (i.callback = function() {
        f0(s, o, u), typeof d != "function" && (jn === null ? jn = /* @__PURE__ */ new Set([
          this
        ]) : jn.add(this));
        var x = u.stack;
        this.componentDidCatch(u.value, {
          componentStack: x !== null ? x : ""
        });
      });
    }
    function Aw(i, s, o, u, d) {
      if (o.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
        if (s = o.alternate, s !== null && as(s, o, d, true), o = ii.current, o !== null) {
          switch (o.tag) {
            case 31:
            case 13:
              return yi === null ? Lo() : o.alternate === null && te === 0 && (te = 3), o.flags &= -257, o.flags |= 65536, o.lanes = d, u === uo ? o.flags |= 16384 : (s = o.updateQueue, s === null ? o.updateQueue = /* @__PURE__ */ new Set([
                u
              ]) : s.add(u), ph(i, u, d)), false;
            case 22:
              return o.flags |= 65536, u === uo ? o.flags |= 16384 : (s = o.updateQueue, s === null ? (s = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([
                  u
                ])
              }, o.updateQueue = s) : (o = s.retryQueue, o === null ? s.retryQueue = /* @__PURE__ */ new Set([
                u
              ]) : o.add(u)), ph(i, u, d)), false;
          }
          throw Error(n(435, o.tag));
        }
        return ph(i, u, d), Lo(), false;
      }
      if (kt) return s = ii.current, s !== null ? ((s.flags & 65536) === 0 && (s.flags |= 256), s.flags |= 65536, s.lanes = d, u !== uf && (i = Error(n(422), {
        cause: u
      }), pr(di(i, o)))) : (u !== uf && (s = Error(n(423), {
        cause: u
      }), pr(di(s, o))), i = i.current.alternate, i.flags |= 65536, d &= -d, i.lanes |= d, u = di(u, o), d = Kf(i.stateNode, u, d), xf(i, d), te !== 4 && (te = 2)), false;
      var m = Error(n(520), {
        cause: u
      });
      if (m = di(m, o), Nr === null ? Nr = [
        m
      ] : Nr.push(m), te !== 4 && (te = 2), s === null) return true;
      u = di(u, o), o = s;
      do {
        switch (o.tag) {
          case 3:
            return o.flags |= 65536, i = d & -d, o.lanes |= i, i = Kf(o.stateNode, u, i), xf(o, i), false;
          case 1:
            if (s = o.type, m = o.stateNode, (o.flags & 128) === 0 && (typeof s.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (jn === null || !jn.has(m)))) return o.flags |= 65536, d &= -d, o.lanes |= d, d = h0(d), d0(d, i, o, u), xf(o, d), false;
        }
        o = o.return;
      } while (o !== null);
      return false;
    }
    var Qf = Error(n(461)), ce = false;
    function xe(i, s, o, u) {
      s.child = i === null ? yp(s, null, o, u) : Ml(s, i.child, o, u);
    }
    function m0(i, s, o, u, d) {
      o = o.render;
      var m = s.ref;
      if ("ref" in u) {
        var b = {};
        for (var x in u) x !== "ref" && (b[x] = u[x]);
      } else b = u;
      return xl(s), u = kf(i, s, o, b, m, d), x = Tf(), i !== null && !ce ? (Of(i, s, d), un(i, s, d)) : (kt && x && of(s), s.flags |= 1, xe(i, s, u, d), s.child);
    }
    function g0(i, s, o, u, d) {
      if (i === null) {
        var m = o.type;
        return typeof m == "function" && !sf(m) && m.defaultProps === void 0 && o.compare === null ? (s.tag = 15, s.type = m, p0(i, s, m, u, d)) : (i = lo(o.type, null, u, s, s.mode, d), i.ref = s.ref, i.return = s, s.child = i);
      }
      if (m = i.child, !th(i, d)) {
        var b = m.memoizedProps;
        if (o = o.compare, o = o !== null ? o : dr, o(b, u) && i.ref === s.ref) return un(i, s, d);
      }
      return s.flags |= 1, i = ln(m, u), i.ref = s.ref, i.return = s, s.child = i;
    }
    function p0(i, s, o, u, d) {
      if (i !== null) {
        var m = i.memoizedProps;
        if (dr(m, u) && i.ref === s.ref) if (ce = false, s.pendingProps = u = m, th(i, d)) (i.flags & 131072) !== 0 && (ce = true);
        else return s.lanes = i.lanes, un(i, s, d);
      }
      return Zf(i, s, o, u, d);
    }
    function y0(i, s, o, u) {
      var d = u.children, m = i !== null ? i.memoizedState : null;
      if (i === null && s.stateNode === null && (s.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), u.mode === "hidden") {
        if ((s.flags & 128) !== 0) {
          if (m = m !== null ? m.baseLanes | o : o, i !== null) {
            for (u = s.child = i.child, d = 0; u !== null; ) d = d | u.lanes | u.childLanes, u = u.sibling;
            u = d & ~m;
          } else u = 0, s.child = null;
          return b0(i, s, m, o, u);
        }
        if ((o & 536870912) !== 0) s.memoizedState = {
          baseLanes: 0,
          cachePool: null
        }, i !== null && oo(s, m !== null ? m.cachePool : null), m !== null ? Sp(s, m) : Af(), xp(s);
        else return u = s.lanes = 536870912, b0(i, s, m !== null ? m.baseLanes | o : o, o, u);
      } else m !== null ? (oo(s, m.cachePool), Sp(s, m), Hn(), s.memoizedState = null) : (i !== null && oo(s, null), Af(), Hn());
      return xe(i, s, d, o), s.child;
    }
    function Tr(i, s) {
      return i !== null && i.tag === 22 || s.stateNode !== null || (s.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), s.sibling;
    }
    function b0(i, s, o, u, d) {
      var m = yf();
      return m = m === null ? null : {
        parent: ae._currentValue,
        pool: m
      }, s.memoizedState = {
        baseLanes: o,
        cachePool: m
      }, i !== null && oo(s, null), Af(), xp(s), i !== null && as(i, s, u, true), s.childLanes = d, null;
    }
    function Mo(i, s) {
      return s = ko({
        mode: s.mode,
        children: s.children
      }, i.mode), s.ref = i.ref, i.child = s, s.return = i, s;
    }
    function v0(i, s, o) {
      return Ml(s, i.child, null, o), i = Mo(s, s.pendingProps), i.flags |= 2, ni(s), s.memoizedState = null, i;
    }
    function Cw(i, s, o) {
      var u = s.pendingProps, d = (s.flags & 128) !== 0;
      if (s.flags &= -129, i === null) {
        if (kt) {
          if (u.mode === "hidden") return i = Mo(s, u), s.lanes = 536870912, Tr(null, i);
          if (Mf(s), (i = Qt) ? (i = Ey(i, pi), i = i !== null && i.data === "&" ? i : null, i !== null && (s.memoizedState = {
            dehydrated: i,
            treeContext: On !== null ? {
              id: Ni,
              overflow: Li
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, o = ip(i), o.return = s, s.child = o, ve = s, Qt = null)) : i = null, i === null) throw En(s);
          return s.lanes = 536870912, null;
        }
        return Mo(s, u);
      }
      var m = i.memoizedState;
      if (m !== null) {
        var b = m.dehydrated;
        if (Mf(s), d) if (s.flags & 256) s.flags &= -257, s = v0(i, s, o);
        else if (s.memoizedState !== null) s.child = i.child, s.flags |= 128, s = null;
        else throw Error(n(558));
        else if (ce || as(i, s, o, false), d = (o & i.childLanes) !== 0, ce || d) {
          if (u = Gt, u !== null && (b = cg(u, o), b !== 0 && b !== m.retryLane)) throw m.retryLane = b, yl(i, b), Qe(u, i, b), Qf;
          Lo(), s = v0(i, s, o);
        } else i = m.treeContext, Qt = bi(b.nextSibling), ve = s, kt = true, Dn = null, pi = false, i !== null && sp(s, i), s = Mo(s, u), s.flags |= 4096;
        return s;
      }
      return i = ln(i.child, {
        mode: u.mode,
        children: u.children
      }), i.ref = s.ref, s.child = i, i.return = s, i;
    }
    function _o(i, s) {
      var o = s.ref;
      if (o === null) i !== null && i.ref !== null && (s.flags |= 4194816);
      else {
        if (typeof o != "function" && typeof o != "object") throw Error(n(284));
        (i === null || i.ref !== o) && (s.flags |= 4194816);
      }
    }
    function Zf(i, s, o, u, d) {
      return xl(s), o = kf(i, s, o, u, void 0, d), u = Tf(), i !== null && !ce ? (Of(i, s, d), un(i, s, d)) : (kt && u && of(s), s.flags |= 1, xe(i, s, o, d), s.child);
    }
    function S0(i, s, o, u, d, m) {
      return xl(s), s.updateQueue = null, o = Ap(s, u, o, d), wp(i), u = Tf(), i !== null && !ce ? (Of(i, s, m), un(i, s, m)) : (kt && u && of(s), s.flags |= 1, xe(i, s, o, m), s.child);
    }
    function x0(i, s, o, u, d) {
      if (xl(s), s.stateNode === null) {
        var m = ns, b = o.contextType;
        typeof b == "object" && b !== null && (m = Se(b)), m = new o(u, m), s.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null, m.updater = Xf, s.stateNode = m, m._reactInternals = s, m = s.stateNode, m.props = u, m.state = s.memoizedState, m.refs = {}, vf(s), b = o.contextType, m.context = typeof b == "object" && b !== null ? Se(b) : ns, m.state = s.memoizedState, b = o.getDerivedStateFromProps, typeof b == "function" && (Gf(s, o, b, u), m.state = s.memoizedState), typeof o.getDerivedStateFromProps == "function" || typeof m.getSnapshotBeforeUpdate == "function" || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (b = m.state, typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount(), b !== m.state && Xf.enqueueReplaceState(m, m.state, null), Ar(s, u, m, d), wr(), m.state = s.memoizedState), typeof m.componentDidMount == "function" && (s.flags |= 4194308), u = true;
      } else if (i === null) {
        m = s.stateNode;
        var x = s.memoizedProps, C = kl(o, x);
        m.props = C;
        var E = m.context, U = o.contextType;
        b = ns, typeof U == "object" && U !== null && (b = Se(U));
        var X = o.getDerivedStateFromProps;
        U = typeof X == "function" || typeof m.getSnapshotBeforeUpdate == "function", x = s.pendingProps !== x, U || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (x || E !== b) && a0(s, m, u, b), Rn = false;
        var B = s.memoizedState;
        m.state = B, Ar(s, u, m, d), wr(), E = s.memoizedState, x || B !== E || Rn ? (typeof X == "function" && (Gf(s, o, X, u), E = s.memoizedState), (C = Rn || r0(s, o, C, u, B, E, b)) ? (U || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (s.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (s.flags |= 4194308), s.memoizedProps = u, s.memoizedState = E), m.props = u, m.state = E, m.context = b, u = C) : (typeof m.componentDidMount == "function" && (s.flags |= 4194308), u = false);
      } else {
        m = s.stateNode, Sf(i, s), b = s.memoizedProps, U = kl(o, b), m.props = U, X = s.pendingProps, B = m.context, E = o.contextType, C = ns, typeof E == "object" && E !== null && (C = Se(E)), x = o.getDerivedStateFromProps, (E = typeof x == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (b !== X || B !== C) && a0(s, m, u, C), Rn = false, B = s.memoizedState, m.state = B, Ar(s, u, m, d), wr();
        var z = s.memoizedState;
        b !== X || B !== z || Rn || i !== null && i.dependencies !== null && ro(i.dependencies) ? (typeof x == "function" && (Gf(s, o, x, u), z = s.memoizedState), (U = Rn || r0(s, o, U, u, B, z, C) || i !== null && i.dependencies !== null && ro(i.dependencies)) ? (E || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(u, z, C), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(u, z, C)), typeof m.componentDidUpdate == "function" && (s.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (s.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || b === i.memoizedProps && B === i.memoizedState || (s.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || b === i.memoizedProps && B === i.memoizedState || (s.flags |= 1024), s.memoizedProps = u, s.memoizedState = z), m.props = u, m.state = z, m.context = C, u = U) : (typeof m.componentDidUpdate != "function" || b === i.memoizedProps && B === i.memoizedState || (s.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || b === i.memoizedProps && B === i.memoizedState || (s.flags |= 1024), u = false);
      }
      return m = u, _o(i, s), u = (s.flags & 128) !== 0, m || u ? (m = s.stateNode, o = u && typeof o.getDerivedStateFromError != "function" ? null : m.render(), s.flags |= 1, i !== null && u ? (s.child = Ml(s, i.child, null, d), s.child = Ml(s, null, o, d)) : xe(i, s, o, d), s.memoizedState = m.state, i = s.child) : i = un(i, s, d), i;
    }
    function w0(i, s, o, u) {
      return vl(), s.flags |= 256, xe(i, s, o, u), s.child;
    }
    var Wf = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    };
    function Jf(i) {
      return {
        baseLanes: i,
        cachePool: fp()
      };
    }
    function Ff(i, s, o) {
      return i = i !== null ? i.childLanes & ~o : 0, s && (i |= si), i;
    }
    function A0(i, s, o) {
      var u = s.pendingProps, d = false, m = (s.flags & 128) !== 0, b;
      if ((b = m) || (b = i !== null && i.memoizedState === null ? false : (ne.current & 2) !== 0), b && (d = true, s.flags &= -129), b = (s.flags & 32) !== 0, s.flags &= -33, i === null) {
        if (kt) {
          if (d ? Ln(s) : Hn(), (i = Qt) ? (i = Ey(i, pi), i = i !== null && i.data !== "&" ? i : null, i !== null && (s.memoizedState = {
            dehydrated: i,
            treeContext: On !== null ? {
              id: Ni,
              overflow: Li
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, o = ip(i), o.return = s, s.child = o, ve = s, Qt = null)) : i = null, i === null) throw En(s);
          return Bh(i) ? s.lanes = 32 : s.lanes = 536870912, null;
        }
        var x = u.children;
        return u = u.fallback, d ? (Hn(), d = s.mode, x = ko({
          mode: "hidden",
          children: x
        }, d), u = bl(u, d, o, null), x.return = s, u.return = s, x.sibling = u, s.child = x, u = s.child, u.memoizedState = Jf(o), u.childLanes = Ff(i, b, o), s.memoizedState = Wf, Tr(null, u)) : (Ln(s), Pf(s, x));
      }
      var C = i.memoizedState;
      if (C !== null && (x = C.dehydrated, x !== null)) {
        if (m) s.flags & 256 ? (Ln(s), s.flags &= -257, s = If(i, s, o)) : s.memoizedState !== null ? (Hn(), s.child = i.child, s.flags |= 128, s = null) : (Hn(), x = u.fallback, d = s.mode, u = ko({
          mode: "visible",
          children: u.children
        }, d), x = bl(x, d, o, null), x.flags |= 2, u.return = s, x.return = s, u.sibling = x, s.child = u, Ml(s, i.child, null, o), u = s.child, u.memoizedState = Jf(o), u.childLanes = Ff(i, b, o), s.memoizedState = Wf, s = Tr(null, u));
        else if (Ln(s), Bh(x)) {
          if (b = x.nextSibling && x.nextSibling.dataset, b) var E = b.dgst;
          b = E, u = Error(n(419)), u.stack = "", u.digest = b, pr({
            value: u,
            source: null,
            stack: null
          }), s = If(i, s, o);
        } else if (ce || as(i, s, o, false), b = (o & i.childLanes) !== 0, ce || b) {
          if (b = Gt, b !== null && (u = cg(b, o), u !== 0 && u !== C.retryLane)) throw C.retryLane = u, yl(i, u), Qe(b, i, u), Qf;
          Eh(x) || Lo(), s = If(i, s, o);
        } else Eh(x) ? (s.flags |= 192, s.child = i.child, s = null) : (i = C.treeContext, Qt = bi(x.nextSibling), ve = s, kt = true, Dn = null, pi = false, i !== null && sp(s, i), s = Pf(s, u.children), s.flags |= 4096);
        return s;
      }
      return d ? (Hn(), x = u.fallback, d = s.mode, C = i.child, E = C.sibling, u = ln(C, {
        mode: "hidden",
        children: u.children
      }), u.subtreeFlags = C.subtreeFlags & 65011712, E !== null ? x = ln(E, x) : (x = bl(x, d, o, null), x.flags |= 2), x.return = s, u.return = s, u.sibling = x, s.child = u, Tr(null, u), u = s.child, x = i.child.memoizedState, x === null ? x = Jf(o) : (d = x.cachePool, d !== null ? (C = ae._currentValue, d = d.parent !== C ? {
        parent: C,
        pool: C
      } : d) : d = fp(), x = {
        baseLanes: x.baseLanes | o,
        cachePool: d
      }), u.memoizedState = x, u.childLanes = Ff(i, b, o), s.memoizedState = Wf, Tr(i.child, u)) : (Ln(s), o = i.child, i = o.sibling, o = ln(o, {
        mode: "visible",
        children: u.children
      }), o.return = s, o.sibling = null, i !== null && (b = s.deletions, b === null ? (s.deletions = [
        i
      ], s.flags |= 16) : b.push(i)), s.child = o, s.memoizedState = null, o);
    }
    function Pf(i, s) {
      return s = ko({
        mode: "visible",
        children: s
      }, i.mode), s.return = i, i.child = s;
    }
    function ko(i, s) {
      return i = ei(22, i, null, s), i.lanes = 0, i;
    }
    function If(i, s, o) {
      return Ml(s, i.child, null, o), i = Pf(s, s.pendingProps.children), i.flags |= 2, s.memoizedState = null, i;
    }
    function C0(i, s, o) {
      i.lanes |= s;
      var u = i.alternate;
      u !== null && (u.lanes |= s), df(i.return, s, o);
    }
    function $f(i, s, o, u, d, m) {
      var b = i.memoizedState;
      b === null ? i.memoizedState = {
        isBackwards: s,
        rendering: null,
        renderingStartTime: 0,
        last: u,
        tail: o,
        tailMode: d,
        treeForkCount: m
      } : (b.isBackwards = s, b.rendering = null, b.renderingStartTime = 0, b.last = u, b.tail = o, b.tailMode = d, b.treeForkCount = m);
    }
    function M0(i, s, o) {
      var u = s.pendingProps, d = u.revealOrder, m = u.tail;
      u = u.children;
      var b = ne.current, x = (b & 2) !== 0;
      if (x ? (b = b & 1 | 2, s.flags |= 128) : b &= 1, W(ne, b), xe(i, s, u, o), u = kt ? gr : 0, !x && i !== null && (i.flags & 128) !== 0) t: for (i = s.child; i !== null; ) {
        if (i.tag === 13) i.memoizedState !== null && C0(i, o, s);
        else if (i.tag === 19) C0(i, o, s);
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
          for (o = s.child, d = null; o !== null; ) i = o.alternate, i !== null && go(i) === null && (d = o), o = o.sibling;
          o = d, o === null ? (d = s.child, s.child = null) : (d = o.sibling, o.sibling = null), $f(s, false, d, o, m, u);
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (o = null, d = s.child, s.child = null; d !== null; ) {
            if (i = d.alternate, i !== null && go(i) === null) {
              s.child = d;
              break;
            }
            i = d.sibling, d.sibling = o, o = d, d = i;
          }
          $f(s, true, o, null, m, u);
          break;
        case "together":
          $f(s, false, null, null, void 0, u);
          break;
        default:
          s.memoizedState = null;
      }
      return s.child;
    }
    function un(i, s, o) {
      if (i !== null && (s.dependencies = i.dependencies), qn |= s.lanes, (o & s.childLanes) === 0) if (i !== null) {
        if (as(i, s, o, false), (o & s.childLanes) === 0) return null;
      } else return null;
      if (i !== null && s.child !== i.child) throw Error(n(153));
      if (s.child !== null) {
        for (i = s.child, o = ln(i, i.pendingProps), s.child = o, o.return = s; i.sibling !== null; ) i = i.sibling, o = o.sibling = ln(i, i.pendingProps), o.return = s;
        o.sibling = null;
      }
      return s.child;
    }
    function th(i, s) {
      return (i.lanes & s) !== 0 ? true : (i = i.dependencies, !!(i !== null && ro(i)));
    }
    function Mw(i, s, o) {
      switch (s.tag) {
        case 3:
          ze(s, s.stateNode.containerInfo), Bn(s, ae, i.memoizedState.cache), vl();
          break;
        case 27:
        case 5:
          tr(s);
          break;
        case 4:
          ze(s, s.stateNode.containerInfo);
          break;
        case 10:
          Bn(s, s.type, s.memoizedProps.value);
          break;
        case 31:
          if (s.memoizedState !== null) return s.flags |= 128, Mf(s), null;
          break;
        case 13:
          var u = s.memoizedState;
          if (u !== null) return u.dehydrated !== null ? (Ln(s), s.flags |= 128, null) : (o & s.child.childLanes) !== 0 ? A0(i, s, o) : (Ln(s), i = un(i, s, o), i !== null ? i.sibling : null);
          Ln(s);
          break;
        case 19:
          var d = (i.flags & 128) !== 0;
          if (u = (o & s.childLanes) !== 0, u || (as(i, s, o, false), u = (o & s.childLanes) !== 0), d) {
            if (u) return M0(i, s, o);
            s.flags |= 128;
          }
          if (d = s.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), W(ne, ne.current), u) break;
          return null;
        case 22:
          return s.lanes = 0, y0(i, s, o, s.pendingProps);
        case 24:
          Bn(s, ae, i.memoizedState.cache);
      }
      return un(i, s, o);
    }
    function _0(i, s, o) {
      if (i !== null) if (i.memoizedProps !== s.pendingProps) ce = true;
      else {
        if (!th(i, o) && (s.flags & 128) === 0) return ce = false, Mw(i, s, o);
        ce = (i.flags & 131072) !== 0;
      }
      else ce = false, kt && (s.flags & 1048576) !== 0 && lp(s, gr, s.index);
      switch (s.lanes = 0, s.tag) {
        case 16:
          t: {
            var u = s.pendingProps;
            if (i = Al(s.elementType), s.type = i, typeof i == "function") sf(i) ? (u = kl(i, u), s.tag = 1, s = x0(null, s, i, u, o)) : (s.tag = 0, s = Zf(null, s, i, u, o));
            else {
              if (i != null) {
                var d = i.$$typeof;
                if (d === Q) {
                  s.tag = 11, s = m0(null, s, i, u, o);
                  break t;
                } else if (d === V) {
                  s.tag = 14, s = g0(null, s, i, u, o);
                  break t;
                }
              }
              throw s = ht(i) || i, Error(n(306, s, ""));
            }
          }
          return s;
        case 0:
          return Zf(i, s, s.type, s.pendingProps, o);
        case 1:
          return u = s.type, d = kl(u, s.pendingProps), x0(i, s, u, d, o);
        case 3:
          t: {
            if (ze(s, s.stateNode.containerInfo), i === null) throw Error(n(387));
            u = s.pendingProps;
            var m = s.memoizedState;
            d = m.element, Sf(i, s), Ar(s, u, null, o);
            var b = s.memoizedState;
            if (u = b.cache, Bn(s, ae, u), u !== m.cache && mf(s, [
              ae
            ], o, true), wr(), u = b.element, m.isDehydrated) if (m = {
              element: u,
              isDehydrated: false,
              cache: b.cache
            }, s.updateQueue.baseState = m, s.memoizedState = m, s.flags & 256) {
              s = w0(i, s, u, o);
              break t;
            } else if (u !== d) {
              d = di(Error(n(424)), s), pr(d), s = w0(i, s, u, o);
              break t;
            } else {
              switch (i = s.stateNode.containerInfo, i.nodeType) {
                case 9:
                  i = i.body;
                  break;
                default:
                  i = i.nodeName === "HTML" ? i.ownerDocument.body : i;
              }
              for (Qt = bi(i.firstChild), ve = s, kt = true, Dn = null, pi = true, o = yp(s, null, u, o), s.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
            }
            else {
              if (vl(), u === d) {
                s = un(i, s, o);
                break t;
              }
              xe(i, s, u, o);
            }
            s = s.child;
          }
          return s;
        case 26:
          return _o(i, s), i === null ? (o = Hy(s.type, null, s.pendingProps, null)) ? s.memoizedState = o : kt || (o = s.type, i = s.pendingProps, u = Go(bt.current).createElement(o), u[be] = s, u[qe] = i, we(u, o, i), ge(u), s.stateNode = u) : s.memoizedState = Hy(s.type, i.memoizedProps, s.pendingProps, i.memoizedState), null;
        case 27:
          return tr(s), i === null && kt && (u = s.stateNode = zy(s.type, s.pendingProps, bt.current), ve = s, pi = true, d = Qt, Kn(s.type) ? (Rh = d, Qt = bi(u.firstChild)) : Qt = d), xe(i, s, s.pendingProps.children, o), _o(i, s), i === null && (s.flags |= 4194304), s.child;
        case 5:
          return i === null && kt && ((d = u = Qt) && (u = eA(u, s.type, s.pendingProps, pi), u !== null ? (s.stateNode = u, ve = s, Qt = bi(u.firstChild), pi = false, d = true) : d = false), d || En(s)), tr(s), d = s.type, m = s.pendingProps, b = i !== null ? i.memoizedProps : null, u = m.children, Th(d, m) ? u = null : b !== null && Th(d, b) && (s.flags |= 32), s.memoizedState !== null && (d = kf(i, s, pw, null, null, o), Gr._currentValue = d), _o(i, s), xe(i, s, u, o), s.child;
        case 6:
          return i === null && kt && ((i = o = Qt) && (o = iA(o, s.pendingProps, pi), o !== null ? (s.stateNode = o, ve = s, Qt = null, i = true) : i = false), i || En(s)), null;
        case 13:
          return A0(i, s, o);
        case 4:
          return ze(s, s.stateNode.containerInfo), u = s.pendingProps, i === null ? s.child = Ml(s, null, u, o) : xe(i, s, u, o), s.child;
        case 11:
          return m0(i, s, s.type, s.pendingProps, o);
        case 7:
          return xe(i, s, s.pendingProps, o), s.child;
        case 8:
          return xe(i, s, s.pendingProps.children, o), s.child;
        case 12:
          return xe(i, s, s.pendingProps.children, o), s.child;
        case 10:
          return u = s.pendingProps, Bn(s, s.type, u.value), xe(i, s, u.children, o), s.child;
        case 9:
          return d = s.type._context, u = s.pendingProps.children, xl(s), d = Se(d), u = u(d), s.flags |= 1, xe(i, s, u, o), s.child;
        case 14:
          return g0(i, s, s.type, s.pendingProps, o);
        case 15:
          return p0(i, s, s.type, s.pendingProps, o);
        case 19:
          return M0(i, s, o);
        case 31:
          return Cw(i, s, o);
        case 22:
          return y0(i, s, o, s.pendingProps);
        case 24:
          return xl(s), u = Se(ae), i === null ? (d = yf(), d === null && (d = Gt, m = gf(), d.pooledCache = m, m.refCount++, m !== null && (d.pooledCacheLanes |= o), d = m), s.memoizedState = {
            parent: u,
            cache: d
          }, vf(s), Bn(s, ae, d)) : ((i.lanes & o) !== 0 && (Sf(i, s), Ar(s, null, null, o), wr()), d = i.memoizedState, m = s.memoizedState, d.parent !== u ? (d = {
            parent: u,
            cache: u
          }, s.memoizedState = d, s.lanes === 0 && (s.memoizedState = s.updateQueue.baseState = d), Bn(s, ae, u)) : (u = m.cache, Bn(s, ae, u), u !== d.cache && mf(s, [
            ae
          ], o, true))), xe(i, s, s.pendingProps.children, o), s.child;
        case 29:
          throw s.pendingProps;
      }
      throw Error(n(156, s.tag));
    }
    function fn(i) {
      i.flags |= 4;
    }
    function eh(i, s, o, u, d) {
      if ((s = (i.mode & 32) !== 0) && (s = false), s) {
        if (i.flags |= 16777216, (d & 335544128) === d) if (i.stateNode.complete) i.flags |= 8192;
        else if ($0()) i.flags |= 8192;
        else throw Cl = uo, bf;
      } else i.flags &= -16777217;
    }
    function k0(i, s) {
      if (s.type !== "stylesheet" || (s.state.loading & 4) !== 0) i.flags &= -16777217;
      else if (i.flags |= 16777216, !Yy(s)) if ($0()) i.flags |= 8192;
      else throw Cl = uo, bf;
    }
    function To(i, s) {
      s !== null && (i.flags |= 4), i.flags & 16384 && (s = i.tag !== 22 ? rg() : 536870912, i.lanes |= s, vs |= s);
    }
    function Or(i, s) {
      if (!kt) switch (i.tailMode) {
        case "hidden":
          s = i.tail;
          for (var o = null; s !== null; ) s.alternate !== null && (o = s), s = s.sibling;
          o === null ? i.tail = null : o.sibling = null;
          break;
        case "collapsed":
          o = i.tail;
          for (var u = null; o !== null; ) o.alternate !== null && (u = o), o = o.sibling;
          u === null ? s || i.tail === null ? i.tail = null : i.tail.sibling = null : u.sibling = null;
      }
    }
    function Zt(i) {
      var s = i.alternate !== null && i.alternate.child === i.child, o = 0, u = 0;
      if (s) for (var d = i.child; d !== null; ) o |= d.lanes | d.childLanes, u |= d.subtreeFlags & 65011712, u |= d.flags & 65011712, d.return = i, d = d.sibling;
      else for (d = i.child; d !== null; ) o |= d.lanes | d.childLanes, u |= d.subtreeFlags, u |= d.flags, d.return = i, d = d.sibling;
      return i.subtreeFlags |= u, i.childLanes = o, s;
    }
    function _w(i, s, o) {
      var u = s.pendingProps;
      switch (cf(s), s.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Zt(s), null;
        case 1:
          return Zt(s), null;
        case 3:
          return o = s.stateNode, u = null, i !== null && (u = i.memoizedState.cache), s.memoizedState.cache !== u && (s.flags |= 2048), an(ae), ie(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (i === null || i.child === null) && (rs(s) ? fn(s) : i === null || i.memoizedState.isDehydrated && (s.flags & 256) === 0 || (s.flags |= 1024, ff())), Zt(s), null;
        case 26:
          var d = s.type, m = s.memoizedState;
          return i === null ? (fn(s), m !== null ? (Zt(s), k0(s, m)) : (Zt(s), eh(s, d, null, u, o))) : m ? m !== i.memoizedState ? (fn(s), Zt(s), k0(s, m)) : (Zt(s), s.flags &= -16777217) : (i = i.memoizedProps, i !== u && fn(s), Zt(s), eh(s, d, i, u, o)), null;
        case 27:
          if (Ua(s), o = bt.current, d = s.type, i !== null && s.stateNode != null) i.memoizedProps !== u && fn(s);
          else {
            if (!u) {
              if (s.stateNode === null) throw Error(n(166));
              return Zt(s), null;
            }
            i = $.current, rs(s) ? rp(s) : (i = zy(d, u, o), s.stateNode = i, fn(s));
          }
          return Zt(s), null;
        case 5:
          if (Ua(s), d = s.type, i !== null && s.stateNode != null) i.memoizedProps !== u && fn(s);
          else {
            if (!u) {
              if (s.stateNode === null) throw Error(n(166));
              return Zt(s), null;
            }
            if (m = $.current, rs(s)) rp(s);
            else {
              var b = Go(bt.current);
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
                      m = typeof u.is == "string" ? b.createElement("select", {
                        is: u.is
                      }) : b.createElement("select"), u.multiple ? m.multiple = true : u.size && (m.size = u.size);
                      break;
                    default:
                      m = typeof u.is == "string" ? b.createElement(d, {
                        is: u.is
                      }) : b.createElement(d);
                  }
              }
              m[be] = s, m[qe] = u;
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
              t: switch (we(m, d, u), d) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u = !!u.autoFocus;
                  break t;
                case "img":
                  u = true;
                  break t;
                default:
                  u = false;
              }
              u && fn(s);
            }
          }
          return Zt(s), eh(s, s.type, i === null ? null : i.memoizedProps, s.pendingProps, o), null;
        case 6:
          if (i && s.stateNode != null) i.memoizedProps !== u && fn(s);
          else {
            if (typeof u != "string" && s.stateNode === null) throw Error(n(166));
            if (i = bt.current, rs(s)) {
              if (i = s.stateNode, o = s.memoizedProps, u = null, d = ve, d !== null) switch (d.tag) {
                case 27:
                case 5:
                  u = d.memoizedProps;
              }
              i[be] = s, i = !!(i.nodeValue === o || u !== null && u.suppressHydrationWarning === true || Ay(i.nodeValue, o)), i || En(s, true);
            } else i = Go(i).createTextNode(u), i[be] = s, s.stateNode = i;
          }
          return Zt(s), null;
        case 31:
          if (o = s.memoizedState, i === null || i.memoizedState !== null) {
            if (u = rs(s), o !== null) {
              if (i === null) {
                if (!u) throw Error(n(318));
                if (i = s.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(n(557));
                i[be] = s;
              } else vl(), (s.flags & 128) === 0 && (s.memoizedState = null), s.flags |= 4;
              Zt(s), i = false;
            } else o = ff(), i !== null && i.memoizedState !== null && (i.memoizedState.hydrationErrors = o), i = true;
            if (!i) return s.flags & 256 ? (ni(s), s) : (ni(s), null);
            if ((s.flags & 128) !== 0) throw Error(n(558));
          }
          return Zt(s), null;
        case 13:
          if (u = s.memoizedState, i === null || i.memoizedState !== null && i.memoizedState.dehydrated !== null) {
            if (d = rs(s), u !== null && u.dehydrated !== null) {
              if (i === null) {
                if (!d) throw Error(n(318));
                if (d = s.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(n(317));
                d[be] = s;
              } else vl(), (s.flags & 128) === 0 && (s.memoizedState = null), s.flags |= 4;
              Zt(s), d = false;
            } else d = ff(), i !== null && i.memoizedState !== null && (i.memoizedState.hydrationErrors = d), d = true;
            if (!d) return s.flags & 256 ? (ni(s), s) : (ni(s), null);
          }
          return ni(s), (s.flags & 128) !== 0 ? (s.lanes = o, s) : (o = u !== null, i = i !== null && i.memoizedState !== null, o && (u = s.child, d = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (d = u.alternate.memoizedState.cachePool.pool), m = null, u.memoizedState !== null && u.memoizedState.cachePool !== null && (m = u.memoizedState.cachePool.pool), m !== d && (u.flags |= 2048)), o !== i && o && (s.child.flags |= 8192), To(s, s.updateQueue), Zt(s), null);
        case 4:
          return ie(), i === null && Ah(s.stateNode.containerInfo), Zt(s), null;
        case 10:
          return an(s.type), Zt(s), null;
        case 19:
          if (H(ne), u = s.memoizedState, u === null) return Zt(s), null;
          if (d = (s.flags & 128) !== 0, m = u.rendering, m === null) if (d) Or(u, false);
          else {
            if (te !== 0 || i !== null && (i.flags & 128) !== 0) for (i = s.child; i !== null; ) {
              if (m = go(i), m !== null) {
                for (s.flags |= 128, Or(u, false), i = m.updateQueue, s.updateQueue = i, To(s, i), s.subtreeFlags = 0, i = o, o = s.child; o !== null; ) ep(o, i), o = o.sibling;
                return W(ne, ne.current & 1 | 2), kt && sn(s, u.treeForkCount), s.child;
              }
              i = i.sibling;
            }
            u.tail !== null && Pe() > Ro && (s.flags |= 128, d = true, Or(u, false), s.lanes = 4194304);
          }
          else {
            if (!d) if (i = go(m), i !== null) {
              if (s.flags |= 128, d = true, i = i.updateQueue, s.updateQueue = i, To(s, i), Or(u, true), u.tail === null && u.tailMode === "hidden" && !m.alternate && !kt) return Zt(s), null;
            } else 2 * Pe() - u.renderingStartTime > Ro && o !== 536870912 && (s.flags |= 128, d = true, Or(u, false), s.lanes = 4194304);
            u.isBackwards ? (m.sibling = s.child, s.child = m) : (i = u.last, i !== null ? i.sibling = m : s.child = m, u.last = m);
          }
          return u.tail !== null ? (i = u.tail, u.rendering = i, u.tail = i.sibling, u.renderingStartTime = Pe(), i.sibling = null, o = ne.current, W(ne, d ? o & 1 | 2 : o & 1), kt && sn(s, u.treeForkCount), i) : (Zt(s), null);
        case 22:
        case 23:
          return ni(s), Cf(), u = s.memoizedState !== null, i !== null ? i.memoizedState !== null !== u && (s.flags |= 8192) : u && (s.flags |= 8192), u ? (o & 536870912) !== 0 && (s.flags & 128) === 0 && (Zt(s), s.subtreeFlags & 6 && (s.flags |= 8192)) : Zt(s), o = s.updateQueue, o !== null && To(s, o.retryQueue), o = null, i !== null && i.memoizedState !== null && i.memoizedState.cachePool !== null && (o = i.memoizedState.cachePool.pool), u = null, s.memoizedState !== null && s.memoizedState.cachePool !== null && (u = s.memoizedState.cachePool.pool), u !== o && (s.flags |= 2048), i !== null && H(wl), null;
        case 24:
          return o = null, i !== null && (o = i.memoizedState.cache), s.memoizedState.cache !== o && (s.flags |= 2048), an(ae), Zt(s), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(n(156, s.tag));
    }
    function kw(i, s) {
      switch (cf(s), s.tag) {
        case 1:
          return i = s.flags, i & 65536 ? (s.flags = i & -65537 | 128, s) : null;
        case 3:
          return an(ae), ie(), i = s.flags, (i & 65536) !== 0 && (i & 128) === 0 ? (s.flags = i & -65537 | 128, s) : null;
        case 26:
        case 27:
        case 5:
          return Ua(s), null;
        case 31:
          if (s.memoizedState !== null) {
            if (ni(s), s.alternate === null) throw Error(n(340));
            vl();
          }
          return i = s.flags, i & 65536 ? (s.flags = i & -65537 | 128, s) : null;
        case 13:
          if (ni(s), i = s.memoizedState, i !== null && i.dehydrated !== null) {
            if (s.alternate === null) throw Error(n(340));
            vl();
          }
          return i = s.flags, i & 65536 ? (s.flags = i & -65537 | 128, s) : null;
        case 19:
          return H(ne), null;
        case 4:
          return ie(), null;
        case 10:
          return an(s.type), null;
        case 22:
        case 23:
          return ni(s), Cf(), i !== null && H(wl), i = s.flags, i & 65536 ? (s.flags = i & -65537 | 128, s) : null;
        case 24:
          return an(ae), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function T0(i, s) {
      switch (cf(s), s.tag) {
        case 3:
          an(ae), ie();
          break;
        case 26:
        case 27:
        case 5:
          Ua(s);
          break;
        case 4:
          ie();
          break;
        case 31:
          s.memoizedState !== null && ni(s);
          break;
        case 13:
          ni(s);
          break;
        case 19:
          H(ne);
          break;
        case 10:
          an(s.type);
          break;
        case 22:
        case 23:
          ni(s), Cf(), i !== null && H(wl);
          break;
        case 24:
          an(ae);
      }
    }
    function Dr(i, s) {
      try {
        var o = s.updateQueue, u = o !== null ? o.lastEffect : null;
        if (u !== null) {
          var d = u.next;
          o = d;
          do {
            if ((o.tag & i) === i) {
              u = void 0;
              var m = o.create, b = o.inst;
              u = m(), b.destroy = u;
            }
            o = o.next;
          } while (o !== d);
        }
      } catch (x) {
        Ut(s, s.return, x);
      }
    }
    function Un(i, s, o) {
      try {
        var u = s.updateQueue, d = u !== null ? u.lastEffect : null;
        if (d !== null) {
          var m = d.next;
          u = m;
          do {
            if ((u.tag & i) === i) {
              var b = u.inst, x = b.destroy;
              if (x !== void 0) {
                b.destroy = void 0, d = s;
                var C = o, E = x;
                try {
                  E();
                } catch (U) {
                  Ut(d, C, U);
                }
              }
            }
            u = u.next;
          } while (u !== m);
        }
      } catch (U) {
        Ut(s, s.return, U);
      }
    }
    function O0(i) {
      var s = i.updateQueue;
      if (s !== null) {
        var o = i.stateNode;
        try {
          vp(s, o);
        } catch (u) {
          Ut(i, i.return, u);
        }
      }
    }
    function D0(i, s, o) {
      o.props = kl(i.type, i.memoizedProps), o.state = i.memoizedState;
      try {
        o.componentWillUnmount();
      } catch (u) {
        Ut(i, s, u);
      }
    }
    function Er(i, s) {
      try {
        var o = i.ref;
        if (o !== null) {
          switch (i.tag) {
            case 26:
            case 27:
            case 5:
              var u = i.stateNode;
              break;
            case 30:
              u = i.stateNode;
              break;
            default:
              u = i.stateNode;
          }
          typeof o == "function" ? i.refCleanup = o(u) : o.current = u;
        }
      } catch (d) {
        Ut(i, s, d);
      }
    }
    function Hi(i, s) {
      var o = i.ref, u = i.refCleanup;
      if (o !== null) if (typeof u == "function") try {
        u();
      } catch (d) {
        Ut(i, s, d);
      } finally {
        i.refCleanup = null, i = i.alternate, i != null && (i.refCleanup = null);
      }
      else if (typeof o == "function") try {
        o(null);
      } catch (d) {
        Ut(i, s, d);
      }
      else o.current = null;
    }
    function E0(i) {
      var s = i.type, o = i.memoizedProps, u = i.stateNode;
      try {
        t: switch (s) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            o.autoFocus && u.focus();
            break t;
          case "img":
            o.src ? u.src = o.src : o.srcSet && (u.srcset = o.srcSet);
        }
      } catch (d) {
        Ut(i, i.return, d);
      }
    }
    function ih(i, s, o) {
      try {
        var u = i.stateNode;
        Jw(u, i.type, o, s), u[qe] = s;
      } catch (d) {
        Ut(i, i.return, d);
      }
    }
    function B0(i) {
      return i.tag === 5 || i.tag === 3 || i.tag === 26 || i.tag === 27 && Kn(i.type) || i.tag === 4;
    }
    function nh(i) {
      t: for (; ; ) {
        for (; i.sibling === null; ) {
          if (i.return === null || B0(i.return)) return null;
          i = i.return;
        }
        for (i.sibling.return = i.return, i = i.sibling; i.tag !== 5 && i.tag !== 6 && i.tag !== 18; ) {
          if (i.tag === 27 && Kn(i.type) || i.flags & 2 || i.child === null || i.tag === 4) continue t;
          i.child.return = i, i = i.child;
        }
        if (!(i.flags & 2)) return i.stateNode;
      }
    }
    function lh(i, s, o) {
      var u = i.tag;
      if (u === 5 || u === 6) i = i.stateNode, s ? (o.nodeType === 9 ? o.body : o.nodeName === "HTML" ? o.ownerDocument.body : o).insertBefore(i, s) : (s = o.nodeType === 9 ? o.body : o.nodeName === "HTML" ? o.ownerDocument.body : o, s.appendChild(i), o = o._reactRootContainer, o != null || s.onclick !== null || (s.onclick = en));
      else if (u !== 4 && (u === 27 && Kn(i.type) && (o = i.stateNode, s = null), i = i.child, i !== null)) for (lh(i, s, o), i = i.sibling; i !== null; ) lh(i, s, o), i = i.sibling;
    }
    function Oo(i, s, o) {
      var u = i.tag;
      if (u === 5 || u === 6) i = i.stateNode, s ? o.insertBefore(i, s) : o.appendChild(i);
      else if (u !== 4 && (u === 27 && Kn(i.type) && (o = i.stateNode), i = i.child, i !== null)) for (Oo(i, s, o), i = i.sibling; i !== null; ) Oo(i, s, o), i = i.sibling;
    }
    function R0(i) {
      var s = i.stateNode, o = i.memoizedProps;
      try {
        for (var u = i.type, d = s.attributes; d.length; ) s.removeAttributeNode(d[0]);
        we(s, u, o), s[be] = i, s[qe] = o;
      } catch (m) {
        Ut(i, i.return, m);
      }
    }
    var hn = false, ue = false, sh = false, z0 = typeof WeakSet == "function" ? WeakSet : Set, pe = null;
    function Tw(i, s) {
      if (i = i.containerInfo, _h = Fo, i = Qg(i), Pu(i)) {
        if ("selectionStart" in i) var o = {
          start: i.selectionStart,
          end: i.selectionEnd
        };
        else t: {
          o = (o = i.ownerDocument) && o.defaultView || window;
          var u = o.getSelection && o.getSelection();
          if (u && u.rangeCount !== 0) {
            o = u.anchorNode;
            var d = u.anchorOffset, m = u.focusNode;
            u = u.focusOffset;
            try {
              o.nodeType, m.nodeType;
            } catch {
              o = null;
              break t;
            }
            var b = 0, x = -1, C = -1, E = 0, U = 0, X = i, B = null;
            e: for (; ; ) {
              for (var z; X !== o || d !== 0 && X.nodeType !== 3 || (x = b + d), X !== m || u !== 0 && X.nodeType !== 3 || (C = b + u), X.nodeType === 3 && (b += X.nodeValue.length), (z = X.firstChild) !== null; ) B = X, X = z;
              for (; ; ) {
                if (X === i) break e;
                if (B === o && ++E === d && (x = b), B === m && ++U === u && (C = b), (z = X.nextSibling) !== null) break;
                X = B, B = X.parentNode;
              }
              X = z;
            }
            o = x === -1 || C === -1 ? null : {
              start: x,
              end: C
            };
          } else o = null;
        }
        o = o || {
          start: 0,
          end: 0
        };
      } else o = null;
      for (kh = {
        focusedElem: i,
        selectionRange: o
      }, Fo = false, pe = s; pe !== null; ) if (s = pe, i = s.child, (s.subtreeFlags & 1028) !== 0 && i !== null) i.return = s, pe = i;
      else for (; pe !== null; ) {
        switch (s = pe, m = s.alternate, i = s.flags, s.tag) {
          case 0:
            if ((i & 4) !== 0 && (i = s.updateQueue, i = i !== null ? i.events : null, i !== null)) for (o = 0; o < i.length; o++) d = i[o], d.ref.impl = d.nextImpl;
            break;
          case 11:
          case 15:
            break;
          case 1:
            if ((i & 1024) !== 0 && m !== null) {
              i = void 0, o = s, d = m.memoizedProps, m = m.memoizedState, u = o.stateNode;
              try {
                var nt = kl(o.type, d);
                i = u.getSnapshotBeforeUpdate(nt, m), u.__reactInternalSnapshotBeforeUpdate = i;
              } catch (ut) {
                Ut(o, o.return, ut);
              }
            }
            break;
          case 3:
            if ((i & 1024) !== 0) {
              if (i = s.stateNode.containerInfo, o = i.nodeType, o === 9) Dh(i);
              else if (o === 1) switch (i.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  Dh(i);
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
          i.return = s.return, pe = i;
          break;
        }
        pe = s.return;
      }
    }
    function N0(i, s, o) {
      var u = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          mn(i, o), u & 4 && Dr(5, o);
          break;
        case 1:
          if (mn(i, o), u & 4) if (i = o.stateNode, s === null) try {
            i.componentDidMount();
          } catch (b) {
            Ut(o, o.return, b);
          }
          else {
            var d = kl(o.type, s.memoizedProps);
            s = s.memoizedState;
            try {
              i.componentDidUpdate(d, s, i.__reactInternalSnapshotBeforeUpdate);
            } catch (b) {
              Ut(o, o.return, b);
            }
          }
          u & 64 && O0(o), u & 512 && Er(o, o.return);
          break;
        case 3:
          if (mn(i, o), u & 64 && (i = o.updateQueue, i !== null)) {
            if (s = null, o.child !== null) switch (o.child.tag) {
              case 27:
              case 5:
                s = o.child.stateNode;
                break;
              case 1:
                s = o.child.stateNode;
            }
            try {
              vp(i, s);
            } catch (b) {
              Ut(o, o.return, b);
            }
          }
          break;
        case 27:
          s === null && u & 4 && R0(o);
        case 26:
        case 5:
          mn(i, o), s === null && u & 4 && E0(o), u & 512 && Er(o, o.return);
          break;
        case 12:
          mn(i, o);
          break;
        case 31:
          mn(i, o), u & 4 && U0(i, o);
          break;
        case 13:
          mn(i, o), u & 4 && V0(i, o), u & 64 && (i = o.memoizedState, i !== null && (i = i.dehydrated, i !== null && (o = Hw.bind(null, o), nA(i, o))));
          break;
        case 22:
          if (u = o.memoizedState !== null || hn, !u) {
            s = s !== null && s.memoizedState !== null || ue, d = hn;
            var m = ue;
            hn = u, (ue = s) && !m ? gn(i, o, (o.subtreeFlags & 8772) !== 0) : mn(i, o), hn = d, ue = m;
          }
          break;
        case 30:
          break;
        default:
          mn(i, o);
      }
    }
    function L0(i) {
      var s = i.alternate;
      s !== null && (i.alternate = null, L0(s)), i.child = null, i.deletions = null, i.sibling = null, i.tag === 5 && (s = i.stateNode, s !== null && zu(s)), i.stateNode = null, i.return = null, i.dependencies = null, i.memoizedProps = null, i.memoizedState = null, i.pendingProps = null, i.stateNode = null, i.updateQueue = null;
    }
    var Ft = null, Ye = false;
    function dn(i, s, o) {
      for (o = o.child; o !== null; ) H0(i, s, o), o = o.sibling;
    }
    function H0(i, s, o) {
      if (Ie && typeof Ie.onCommitFiberUnmount == "function") try {
        Ie.onCommitFiberUnmount(er, o);
      } catch {
      }
      switch (o.tag) {
        case 26:
          ue || Hi(o, s), dn(i, s, o), o.memoizedState ? o.memoizedState.count-- : o.stateNode && (o = o.stateNode, o.parentNode.removeChild(o));
          break;
        case 27:
          ue || Hi(o, s);
          var u = Ft, d = Ye;
          Kn(o.type) && (Ft = o.stateNode, Ye = false), dn(i, s, o), qr(o.stateNode), Ft = u, Ye = d;
          break;
        case 5:
          ue || Hi(o, s);
        case 6:
          if (u = Ft, d = Ye, Ft = null, dn(i, s, o), Ft = u, Ye = d, Ft !== null) if (Ye) try {
            (Ft.nodeType === 9 ? Ft.body : Ft.nodeName === "HTML" ? Ft.ownerDocument.body : Ft).removeChild(o.stateNode);
          } catch (m) {
            Ut(o, s, m);
          }
          else try {
            Ft.removeChild(o.stateNode);
          } catch (m) {
            Ut(o, s, m);
          }
          break;
        case 18:
          Ft !== null && (Ye ? (i = Ft, Oy(i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i, o.stateNode), ks(i)) : Oy(Ft, o.stateNode));
          break;
        case 4:
          u = Ft, d = Ye, Ft = o.stateNode.containerInfo, Ye = true, dn(i, s, o), Ft = u, Ye = d;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Un(2, o, s), ue || Un(4, o, s), dn(i, s, o);
          break;
        case 1:
          ue || (Hi(o, s), u = o.stateNode, typeof u.componentWillUnmount == "function" && D0(o, s, u)), dn(i, s, o);
          break;
        case 21:
          dn(i, s, o);
          break;
        case 22:
          ue = (u = ue) || o.memoizedState !== null, dn(i, s, o), ue = u;
          break;
        default:
          dn(i, s, o);
      }
    }
    function U0(i, s) {
      if (s.memoizedState === null && (i = s.alternate, i !== null && (i = i.memoizedState, i !== null))) {
        i = i.dehydrated;
        try {
          ks(i);
        } catch (o) {
          Ut(s, s.return, o);
        }
      }
    }
    function V0(i, s) {
      if (s.memoizedState === null && (i = s.alternate, i !== null && (i = i.memoizedState, i !== null && (i = i.dehydrated, i !== null)))) try {
        ks(i);
      } catch (o) {
        Ut(s, s.return, o);
      }
    }
    function Ow(i) {
      switch (i.tag) {
        case 31:
        case 13:
        case 19:
          var s = i.stateNode;
          return s === null && (s = i.stateNode = new z0()), s;
        case 22:
          return i = i.stateNode, s = i._retryCache, s === null && (s = i._retryCache = new z0()), s;
        default:
          throw Error(n(435, i.tag));
      }
    }
    function Do(i, s) {
      var o = Ow(i);
      s.forEach(function(u) {
        if (!o.has(u)) {
          o.add(u);
          var d = Uw.bind(null, i, u);
          u.then(d, d);
        }
      });
    }
    function Ge(i, s) {
      var o = s.deletions;
      if (o !== null) for (var u = 0; u < o.length; u++) {
        var d = o[u], m = i, b = s, x = b;
        t: for (; x !== null; ) {
          switch (x.tag) {
            case 27:
              if (Kn(x.type)) {
                Ft = x.stateNode, Ye = false;
                break t;
              }
              break;
            case 5:
              Ft = x.stateNode, Ye = false;
              break t;
            case 3:
            case 4:
              Ft = x.stateNode.containerInfo, Ye = true;
              break t;
          }
          x = x.return;
        }
        if (Ft === null) throw Error(n(160));
        H0(m, b, d), Ft = null, Ye = false, m = d.alternate, m !== null && (m.return = null), d.return = null;
      }
      if (s.subtreeFlags & 13886) for (s = s.child; s !== null; ) q0(s, i), s = s.sibling;
    }
    var Oi = null;
    function q0(i, s) {
      var o = i.alternate, u = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ge(s, i), Xe(i), u & 4 && (Un(3, i, i.return), Dr(3, i), Un(5, i, i.return));
          break;
        case 1:
          Ge(s, i), Xe(i), u & 512 && (ue || o === null || Hi(o, o.return)), u & 64 && hn && (i = i.updateQueue, i !== null && (u = i.callbacks, u !== null && (o = i.shared.hiddenCallbacks, i.shared.hiddenCallbacks = o === null ? u : o.concat(u))));
          break;
        case 26:
          var d = Oi;
          if (Ge(s, i), Xe(i), u & 512 && (ue || o === null || Hi(o, o.return)), u & 4) {
            var m = o !== null ? o.memoizedState : null;
            if (u = i.memoizedState, o === null) if (u === null) if (i.stateNode === null) {
              t: {
                u = i.type, o = i.memoizedProps, d = d.ownerDocument || d;
                e: switch (u) {
                  case "title":
                    m = d.getElementsByTagName("title")[0], (!m || m[lr] || m[be] || m.namespaceURI === "http://www.w3.org/2000/svg" || m.hasAttribute("itemprop")) && (m = d.createElement(u), d.head.insertBefore(m, d.querySelector("head > title"))), we(m, u, o), m[be] = i, ge(m), u = m;
                    break t;
                  case "link":
                    var b = qy("link", "href", d).get(u + (o.href || ""));
                    if (b) {
                      for (var x = 0; x < b.length; x++) if (m = b[x], m.getAttribute("href") === (o.href == null || o.href === "" ? null : o.href) && m.getAttribute("rel") === (o.rel == null ? null : o.rel) && m.getAttribute("title") === (o.title == null ? null : o.title) && m.getAttribute("crossorigin") === (o.crossOrigin == null ? null : o.crossOrigin)) {
                        b.splice(x, 1);
                        break e;
                      }
                    }
                    m = d.createElement(u), we(m, u, o), d.head.appendChild(m);
                    break;
                  case "meta":
                    if (b = qy("meta", "content", d).get(u + (o.content || ""))) {
                      for (x = 0; x < b.length; x++) if (m = b[x], m.getAttribute("content") === (o.content == null ? null : "" + o.content) && m.getAttribute("name") === (o.name == null ? null : o.name) && m.getAttribute("property") === (o.property == null ? null : o.property) && m.getAttribute("http-equiv") === (o.httpEquiv == null ? null : o.httpEquiv) && m.getAttribute("charset") === (o.charSet == null ? null : o.charSet)) {
                        b.splice(x, 1);
                        break e;
                      }
                    }
                    m = d.createElement(u), we(m, u, o), d.head.appendChild(m);
                    break;
                  default:
                    throw Error(n(468, u));
                }
                m[be] = i, ge(m), u = m;
              }
              i.stateNode = u;
            } else jy(d, i.type, i.stateNode);
            else i.stateNode = Vy(d, u, i.memoizedProps);
            else m !== u ? (m === null ? o.stateNode !== null && (o = o.stateNode, o.parentNode.removeChild(o)) : m.count--, u === null ? jy(d, i.type, i.stateNode) : Vy(d, u, i.memoizedProps)) : u === null && i.stateNode !== null && ih(i, i.memoizedProps, o.memoizedProps);
          }
          break;
        case 27:
          Ge(s, i), Xe(i), u & 512 && (ue || o === null || Hi(o, o.return)), o !== null && u & 4 && ih(i, i.memoizedProps, o.memoizedProps);
          break;
        case 5:
          if (Ge(s, i), Xe(i), u & 512 && (ue || o === null || Hi(o, o.return)), i.flags & 32) {
            d = i.stateNode;
            try {
              Fl(d, "");
            } catch (nt) {
              Ut(i, i.return, nt);
            }
          }
          u & 4 && i.stateNode != null && (d = i.memoizedProps, ih(i, d, o !== null ? o.memoizedProps : d)), u & 1024 && (sh = true);
          break;
        case 6:
          if (Ge(s, i), Xe(i), u & 4) {
            if (i.stateNode === null) throw Error(n(162));
            u = i.memoizedProps, o = i.stateNode;
            try {
              o.nodeValue = u;
            } catch (nt) {
              Ut(i, i.return, nt);
            }
          }
          break;
        case 3:
          if (Qo = null, d = Oi, Oi = Xo(s.containerInfo), Ge(s, i), Oi = d, Xe(i), u & 4 && o !== null && o.memoizedState.isDehydrated) try {
            ks(s.containerInfo);
          } catch (nt) {
            Ut(i, i.return, nt);
          }
          sh && (sh = false, j0(i));
          break;
        case 4:
          u = Oi, Oi = Xo(i.stateNode.containerInfo), Ge(s, i), Xe(i), Oi = u;
          break;
        case 12:
          Ge(s, i), Xe(i);
          break;
        case 31:
          Ge(s, i), Xe(i), u & 4 && (u = i.updateQueue, u !== null && (i.updateQueue = null, Do(i, u)));
          break;
        case 13:
          Ge(s, i), Xe(i), i.child.flags & 8192 && i.memoizedState !== null != (o !== null && o.memoizedState !== null) && (Bo = Pe()), u & 4 && (u = i.updateQueue, u !== null && (i.updateQueue = null, Do(i, u)));
          break;
        case 22:
          d = i.memoizedState !== null;
          var C = o !== null && o.memoizedState !== null, E = hn, U = ue;
          if (hn = E || d, ue = U || C, Ge(s, i), ue = U, hn = E, Xe(i), u & 8192) t: for (s = i.stateNode, s._visibility = d ? s._visibility & -2 : s._visibility | 1, d && (o === null || C || hn || ue || Tl(i)), o = null, s = i; ; ) {
            if (s.tag === 5 || s.tag === 26) {
              if (o === null) {
                C = o = s;
                try {
                  if (m = C.stateNode, d) b = m.style, typeof b.setProperty == "function" ? b.setProperty("display", "none", "important") : b.display = "none";
                  else {
                    x = C.stateNode;
                    var X = C.memoizedProps.style, B = X != null && X.hasOwnProperty("display") ? X.display : null;
                    x.style.display = B == null || typeof B == "boolean" ? "" : ("" + B).trim();
                  }
                } catch (nt) {
                  Ut(C, C.return, nt);
                }
              }
            } else if (s.tag === 6) {
              if (o === null) {
                C = s;
                try {
                  C.stateNode.nodeValue = d ? "" : C.memoizedProps;
                } catch (nt) {
                  Ut(C, C.return, nt);
                }
              }
            } else if (s.tag === 18) {
              if (o === null) {
                C = s;
                try {
                  var z = C.stateNode;
                  d ? Dy(z, true) : Dy(C.stateNode, false);
                } catch (nt) {
                  Ut(C, C.return, nt);
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
          u & 4 && (u = i.updateQueue, u !== null && (o = u.retryQueue, o !== null && (u.retryQueue = null, Do(i, o))));
          break;
        case 19:
          Ge(s, i), Xe(i), u & 4 && (u = i.updateQueue, u !== null && (i.updateQueue = null, Do(i, u)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          Ge(s, i), Xe(i);
      }
    }
    function Xe(i) {
      var s = i.flags;
      if (s & 2) {
        try {
          for (var o, u = i.return; u !== null; ) {
            if (B0(u)) {
              o = u;
              break;
            }
            u = u.return;
          }
          if (o == null) throw Error(n(160));
          switch (o.tag) {
            case 27:
              var d = o.stateNode, m = nh(i);
              Oo(i, m, d);
              break;
            case 5:
              var b = o.stateNode;
              o.flags & 32 && (Fl(b, ""), o.flags &= -33);
              var x = nh(i);
              Oo(i, x, b);
              break;
            case 3:
            case 4:
              var C = o.stateNode.containerInfo, E = nh(i);
              lh(i, E, C);
              break;
            default:
              throw Error(n(161));
          }
        } catch (U) {
          Ut(i, i.return, U);
        }
        i.flags &= -3;
      }
      s & 4096 && (i.flags &= -4097);
    }
    function j0(i) {
      if (i.subtreeFlags & 1024) for (i = i.child; i !== null; ) {
        var s = i;
        j0(s), s.tag === 5 && s.flags & 1024 && s.stateNode.reset(), i = i.sibling;
      }
    }
    function mn(i, s) {
      if (s.subtreeFlags & 8772) for (s = s.child; s !== null; ) N0(i, s.alternate, s), s = s.sibling;
    }
    function Tl(i) {
      for (i = i.child; i !== null; ) {
        var s = i;
        switch (s.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            Un(4, s, s.return), Tl(s);
            break;
          case 1:
            Hi(s, s.return);
            var o = s.stateNode;
            typeof o.componentWillUnmount == "function" && D0(s, s.return, o), Tl(s);
            break;
          case 27:
            qr(s.stateNode);
          case 26:
          case 5:
            Hi(s, s.return), Tl(s);
            break;
          case 22:
            s.memoizedState === null && Tl(s);
            break;
          case 30:
            Tl(s);
            break;
          default:
            Tl(s);
        }
        i = i.sibling;
      }
    }
    function gn(i, s, o) {
      for (o = o && (s.subtreeFlags & 8772) !== 0, s = s.child; s !== null; ) {
        var u = s.alternate, d = i, m = s, b = m.flags;
        switch (m.tag) {
          case 0:
          case 11:
          case 15:
            gn(d, m, o), Dr(4, m);
            break;
          case 1:
            if (gn(d, m, o), u = m, d = u.stateNode, typeof d.componentDidMount == "function") try {
              d.componentDidMount();
            } catch (E) {
              Ut(u, u.return, E);
            }
            if (u = m, d = u.updateQueue, d !== null) {
              var x = u.stateNode;
              try {
                var C = d.shared.hiddenCallbacks;
                if (C !== null) for (d.shared.hiddenCallbacks = null, d = 0; d < C.length; d++) bp(C[d], x);
              } catch (E) {
                Ut(u, u.return, E);
              }
            }
            o && b & 64 && O0(m), Er(m, m.return);
            break;
          case 27:
            R0(m);
          case 26:
          case 5:
            gn(d, m, o), o && u === null && b & 4 && E0(m), Er(m, m.return);
            break;
          case 12:
            gn(d, m, o);
            break;
          case 31:
            gn(d, m, o), o && b & 4 && U0(d, m);
            break;
          case 13:
            gn(d, m, o), o && b & 4 && V0(d, m);
            break;
          case 22:
            m.memoizedState === null && gn(d, m, o), Er(m, m.return);
            break;
          case 30:
            break;
          default:
            gn(d, m, o);
        }
        s = s.sibling;
      }
    }
    function rh(i, s) {
      var o = null;
      i !== null && i.memoizedState !== null && i.memoizedState.cachePool !== null && (o = i.memoizedState.cachePool.pool), i = null, s.memoizedState !== null && s.memoizedState.cachePool !== null && (i = s.memoizedState.cachePool.pool), i !== o && (i != null && i.refCount++, o != null && yr(o));
    }
    function ah(i, s) {
      i = null, s.alternate !== null && (i = s.alternate.memoizedState.cache), s = s.memoizedState.cache, s !== i && (s.refCount++, i != null && yr(i));
    }
    function Di(i, s, o, u) {
      if (s.subtreeFlags & 10256) for (s = s.child; s !== null; ) Y0(i, s, o, u), s = s.sibling;
    }
    function Y0(i, s, o, u) {
      var d = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          Di(i, s, o, u), d & 2048 && Dr(9, s);
          break;
        case 1:
          Di(i, s, o, u);
          break;
        case 3:
          Di(i, s, o, u), d & 2048 && (i = null, s.alternate !== null && (i = s.alternate.memoizedState.cache), s = s.memoizedState.cache, s !== i && (s.refCount++, i != null && yr(i)));
          break;
        case 12:
          if (d & 2048) {
            Di(i, s, o, u), i = s.stateNode;
            try {
              var m = s.memoizedProps, b = m.id, x = m.onPostCommit;
              typeof x == "function" && x(b, s.alternate === null ? "mount" : "update", i.passiveEffectDuration, -0);
            } catch (C) {
              Ut(s, s.return, C);
            }
          } else Di(i, s, o, u);
          break;
        case 31:
          Di(i, s, o, u);
          break;
        case 13:
          Di(i, s, o, u);
          break;
        case 23:
          break;
        case 22:
          m = s.stateNode, b = s.alternate, s.memoizedState !== null ? m._visibility & 2 ? Di(i, s, o, u) : Br(i, s) : m._visibility & 2 ? Di(i, s, o, u) : (m._visibility |= 2, ps(i, s, o, u, (s.subtreeFlags & 10256) !== 0 || false)), d & 2048 && rh(b, s);
          break;
        case 24:
          Di(i, s, o, u), d & 2048 && ah(s.alternate, s);
          break;
        default:
          Di(i, s, o, u);
      }
    }
    function ps(i, s, o, u, d) {
      for (d = d && ((s.subtreeFlags & 10256) !== 0 || false), s = s.child; s !== null; ) {
        var m = i, b = s, x = o, C = u, E = b.flags;
        switch (b.tag) {
          case 0:
          case 11:
          case 15:
            ps(m, b, x, C, d), Dr(8, b);
            break;
          case 23:
            break;
          case 22:
            var U = b.stateNode;
            b.memoizedState !== null ? U._visibility & 2 ? ps(m, b, x, C, d) : Br(m, b) : (U._visibility |= 2, ps(m, b, x, C, d)), d && E & 2048 && rh(b.alternate, b);
            break;
          case 24:
            ps(m, b, x, C, d), d && E & 2048 && ah(b.alternate, b);
            break;
          default:
            ps(m, b, x, C, d);
        }
        s = s.sibling;
      }
    }
    function Br(i, s) {
      if (s.subtreeFlags & 10256) for (s = s.child; s !== null; ) {
        var o = i, u = s, d = u.flags;
        switch (u.tag) {
          case 22:
            Br(o, u), d & 2048 && rh(u.alternate, u);
            break;
          case 24:
            Br(o, u), d & 2048 && ah(u.alternate, u);
            break;
          default:
            Br(o, u);
        }
        s = s.sibling;
      }
    }
    var Rr = 8192;
    function ys(i, s, o) {
      if (i.subtreeFlags & Rr) for (i = i.child; i !== null; ) G0(i, s, o), i = i.sibling;
    }
    function G0(i, s, o) {
      switch (i.tag) {
        case 26:
          ys(i, s, o), i.flags & Rr && i.memoizedState !== null && gA(o, Oi, i.memoizedState, i.memoizedProps);
          break;
        case 5:
          ys(i, s, o);
          break;
        case 3:
        case 4:
          var u = Oi;
          Oi = Xo(i.stateNode.containerInfo), ys(i, s, o), Oi = u;
          break;
        case 22:
          i.memoizedState === null && (u = i.alternate, u !== null && u.memoizedState !== null ? (u = Rr, Rr = 16777216, ys(i, s, o), Rr = u) : ys(i, s, o));
          break;
        default:
          ys(i, s, o);
      }
    }
    function X0(i) {
      var s = i.alternate;
      if (s !== null && (i = s.child, i !== null)) {
        s.child = null;
        do
          s = i.sibling, i.sibling = null, i = s;
        while (i !== null);
      }
    }
    function zr(i) {
      var s = i.deletions;
      if ((i.flags & 16) !== 0) {
        if (s !== null) for (var o = 0; o < s.length; o++) {
          var u = s[o];
          pe = u, Q0(u, i);
        }
        X0(i);
      }
      if (i.subtreeFlags & 10256) for (i = i.child; i !== null; ) K0(i), i = i.sibling;
    }
    function K0(i) {
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          zr(i), i.flags & 2048 && Un(9, i, i.return);
          break;
        case 3:
          zr(i);
          break;
        case 12:
          zr(i);
          break;
        case 22:
          var s = i.stateNode;
          i.memoizedState !== null && s._visibility & 2 && (i.return === null || i.return.tag !== 13) ? (s._visibility &= -3, Eo(i)) : zr(i);
          break;
        default:
          zr(i);
      }
    }
    function Eo(i) {
      var s = i.deletions;
      if ((i.flags & 16) !== 0) {
        if (s !== null) for (var o = 0; o < s.length; o++) {
          var u = s[o];
          pe = u, Q0(u, i);
        }
        X0(i);
      }
      for (i = i.child; i !== null; ) {
        switch (s = i, s.tag) {
          case 0:
          case 11:
          case 15:
            Un(8, s, s.return), Eo(s);
            break;
          case 22:
            o = s.stateNode, o._visibility & 2 && (o._visibility &= -3, Eo(s));
            break;
          default:
            Eo(s);
        }
        i = i.sibling;
      }
    }
    function Q0(i, s) {
      for (; pe !== null; ) {
        var o = pe;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            Un(8, o, s);
            break;
          case 23:
          case 22:
            if (o.memoizedState !== null && o.memoizedState.cachePool !== null) {
              var u = o.memoizedState.cachePool.pool;
              u != null && u.refCount++;
            }
            break;
          case 24:
            yr(o.memoizedState.cache);
        }
        if (u = o.child, u !== null) u.return = o, pe = u;
        else t: for (o = i; pe !== null; ) {
          u = pe;
          var d = u.sibling, m = u.return;
          if (L0(u), u === o) {
            pe = null;
            break t;
          }
          if (d !== null) {
            d.return = m, pe = d;
            break t;
          }
          pe = m;
        }
      }
    }
    var Dw = {
      getCacheForType: function(i) {
        var s = Se(ae), o = s.data.get(i);
        return o === void 0 && (o = i(), s.data.set(i, o)), o;
      },
      cacheSignal: function() {
        return Se(ae).controller.signal;
      }
    }, Ew = typeof WeakMap == "function" ? WeakMap : Map, Lt = 0, Gt = null, At = null, Mt = 0, Ht = 0, li = null, Vn = false, bs = false, oh = false, pn = 0, te = 0, qn = 0, Ol = 0, ch = 0, si = 0, vs = 0, Nr = null, Ke = null, uh = false, Bo = 0, Z0 = 0, Ro = 1 / 0, zo = null, jn = null, he = 0, Yn = null, Ss = null, yn = 0, fh = 0, hh = null, W0 = null, Lr = 0, dh = null;
    function ri() {
      return (Lt & 2) !== 0 && Mt !== 0 ? Mt & -Mt : R.T !== null ? vh() : ug();
    }
    function J0() {
      if (si === 0) if ((Mt & 536870912) === 0 || kt) {
        var i = ja;
        ja <<= 1, (ja & 3932160) === 0 && (ja = 262144), si = i;
      } else si = 536870912;
      return i = ii.current, i !== null && (i.flags |= 32), si;
    }
    function Qe(i, s, o) {
      (i === Gt && (Ht === 2 || Ht === 9) || i.cancelPendingCommit !== null) && (xs(i, 0), Gn(i, Mt, si, false)), nr(i, o), ((Lt & 2) === 0 || i !== Gt) && (i === Gt && ((Lt & 2) === 0 && (Ol |= o), te === 4 && Gn(i, Mt, si, false)), Ui(i));
    }
    function F0(i, s, o) {
      if ((Lt & 6) !== 0) throw Error(n(327));
      var u = !o && (s & 127) === 0 && (s & i.expiredLanes) === 0 || ir(i, s), d = u ? zw(i, s) : gh(i, s, true), m = u;
      do {
        if (d === 0) {
          bs && !u && Gn(i, s, 0, false);
          break;
        } else {
          if (o = i.current.alternate, m && !Bw(o)) {
            d = gh(i, s, false), m = false;
            continue;
          }
          if (d === 2) {
            if (m = s, i.errorRecoveryDisabledLanes & m) var b = 0;
            else b = i.pendingLanes & -536870913, b = b !== 0 ? b : b & 536870912 ? 536870912 : 0;
            if (b !== 0) {
              s = b;
              t: {
                var x = i;
                d = Nr;
                var C = x.current.memoizedState.isDehydrated;
                if (C && (xs(x, b).flags |= 256), b = gh(x, b, false), b !== 2) {
                  if (oh && !C) {
                    x.errorRecoveryDisabledLanes |= m, Ol |= m, d = 4;
                    break t;
                  }
                  m = Ke, Ke = d, m !== null && (Ke === null ? Ke = m : Ke.push.apply(Ke, m));
                }
                d = b;
              }
              if (m = false, d !== 2) continue;
            }
          }
          if (d === 1) {
            xs(i, 0), Gn(i, s, 0, true);
            break;
          }
          t: {
            switch (u = i, m = d, m) {
              case 0:
              case 1:
                throw Error(n(345));
              case 4:
                if ((s & 4194048) !== s) break;
              case 6:
                Gn(u, s, si, !Vn);
                break t;
              case 2:
                Ke = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(n(329));
            }
            if ((s & 62914560) === s && (d = Bo + 300 - Pe(), 10 < d)) {
              if (Gn(u, s, si, !Vn), Ga(u, 0, true) !== 0) break t;
              yn = s, u.timeoutHandle = ky(P0.bind(null, u, o, Ke, zo, uh, s, si, Ol, vs, Vn, m, "Throttled", -0, 0), d);
              break t;
            }
            P0(u, o, Ke, zo, uh, s, si, Ol, vs, Vn, m, null, -0, 0);
          }
        }
        break;
      } while (true);
      Ui(i);
    }
    function P0(i, s, o, u, d, m, b, x, C, E, U, X, B, z) {
      if (i.timeoutHandle = -1, X = s.subtreeFlags, X & 8192 || (X & 16785408) === 16785408) {
        X = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: true,
          waitingForViewTransition: false,
          unsuspend: en
        }, G0(s, m, X);
        var nt = (m & 62914560) === m ? Bo - Pe() : (m & 4194048) === m ? Z0 - Pe() : 0;
        if (nt = pA(X, nt), nt !== null) {
          yn = m, i.cancelPendingCommit = nt(sy.bind(null, i, s, m, o, u, d, b, x, C, U, X, null, B, z)), Gn(i, m, b, !E);
          return;
        }
      }
      sy(i, s, m, o, u, d, b, x, C);
    }
    function Bw(i) {
      for (var s = i; ; ) {
        var o = s.tag;
        if ((o === 0 || o === 11 || o === 15) && s.flags & 16384 && (o = s.updateQueue, o !== null && (o = o.stores, o !== null))) for (var u = 0; u < o.length; u++) {
          var d = o[u], m = d.getSnapshot;
          d = d.value;
          try {
            if (!ti(m(), d)) return false;
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
    function Gn(i, s, o, u) {
      s &= ~ch, s &= ~Ol, i.suspendedLanes |= s, i.pingedLanes &= ~s, u && (i.warmLanes |= s), u = i.expirationTimes;
      for (var d = s; 0 < d; ) {
        var m = 31 - $e(d), b = 1 << m;
        u[m] = -1, d &= ~b;
      }
      o !== 0 && ag(i, o, s);
    }
    function No() {
      return (Lt & 6) === 0 ? (Hr(0), false) : true;
    }
    function mh() {
      if (At !== null) {
        if (Ht === 0) var i = At.return;
        else i = At, rn = Sl = null, Df(i), fs = null, vr = 0, i = At;
        for (; i !== null; ) T0(i.alternate, i), i = i.return;
        At = null;
      }
    }
    function xs(i, s) {
      var o = i.timeoutHandle;
      o !== -1 && (i.timeoutHandle = -1, Iw(o)), o = i.cancelPendingCommit, o !== null && (i.cancelPendingCommit = null, o()), yn = 0, mh(), Gt = i, At = o = ln(i.current, null), Mt = s, Ht = 0, li = null, Vn = false, bs = ir(i, s), oh = false, vs = si = ch = Ol = qn = te = 0, Ke = Nr = null, uh = false, (s & 8) !== 0 && (s |= s & 32);
      var u = i.entangledLanes;
      if (u !== 0) for (i = i.entanglements, u &= s; 0 < u; ) {
        var d = 31 - $e(u), m = 1 << d;
        s |= i[d], u &= ~m;
      }
      return pn = s, eo(), o;
    }
    function I0(i, s) {
      vt = null, R.H = kr, s === us || s === co ? (s = mp(), Ht = 3) : s === bf ? (s = mp(), Ht = 4) : Ht = s === Qf ? 8 : s !== null && typeof s == "object" && typeof s.then == "function" ? 6 : 1, li = s, At === null && (te = 1, Co(i, di(s, i.current)));
    }
    function $0() {
      var i = ii.current;
      return i === null ? true : (Mt & 4194048) === Mt ? yi === null : (Mt & 62914560) === Mt || (Mt & 536870912) !== 0 ? i === yi : false;
    }
    function ty() {
      var i = R.H;
      return R.H = kr, i === null ? kr : i;
    }
    function ey() {
      var i = R.A;
      return R.A = Dw, i;
    }
    function Lo() {
      te = 4, Vn || (Mt & 4194048) !== Mt && ii.current !== null || (bs = true), (qn & 134217727) === 0 && (Ol & 134217727) === 0 || Gt === null || Gn(Gt, Mt, si, false);
    }
    function gh(i, s, o) {
      var u = Lt;
      Lt |= 2;
      var d = ty(), m = ey();
      (Gt !== i || Mt !== s) && (zo = null, xs(i, s)), s = false;
      var b = te;
      t: do
        try {
          if (Ht !== 0 && At !== null) {
            var x = At, C = li;
            switch (Ht) {
              case 8:
                mh(), b = 6;
                break t;
              case 3:
              case 2:
              case 9:
              case 6:
                ii.current === null && (s = true);
                var E = Ht;
                if (Ht = 0, li = null, ws(i, x, C, E), o && bs) {
                  b = 0;
                  break t;
                }
                break;
              default:
                E = Ht, Ht = 0, li = null, ws(i, x, C, E);
            }
          }
          Rw(), b = te;
          break;
        } catch (U) {
          I0(i, U);
        }
      while (true);
      return s && i.shellSuspendCounter++, rn = Sl = null, Lt = u, R.H = d, R.A = m, At === null && (Gt = null, Mt = 0, eo()), b;
    }
    function Rw() {
      for (; At !== null; ) iy(At);
    }
    function zw(i, s) {
      var o = Lt;
      Lt |= 2;
      var u = ty(), d = ey();
      Gt !== i || Mt !== s ? (zo = null, Ro = Pe() + 500, xs(i, s)) : bs = ir(i, s);
      t: do
        try {
          if (Ht !== 0 && At !== null) {
            s = At;
            var m = li;
            e: switch (Ht) {
              case 1:
                Ht = 0, li = null, ws(i, s, m, 1);
                break;
              case 2:
              case 9:
                if (hp(m)) {
                  Ht = 0, li = null, ny(s);
                  break;
                }
                s = function() {
                  Ht !== 2 && Ht !== 9 || Gt !== i || (Ht = 7), Ui(i);
                }, m.then(s, s);
                break t;
              case 3:
                Ht = 7;
                break t;
              case 4:
                Ht = 5;
                break t;
              case 7:
                hp(m) ? (Ht = 0, li = null, ny(s)) : (Ht = 0, li = null, ws(i, s, m, 7));
                break;
              case 5:
                var b = null;
                switch (At.tag) {
                  case 26:
                    b = At.memoizedState;
                  case 5:
                  case 27:
                    var x = At;
                    if (b ? Yy(b) : x.stateNode.complete) {
                      Ht = 0, li = null;
                      var C = x.sibling;
                      if (C !== null) At = C;
                      else {
                        var E = x.return;
                        E !== null ? (At = E, Ho(E)) : At = null;
                      }
                      break e;
                    }
                }
                Ht = 0, li = null, ws(i, s, m, 5);
                break;
              case 6:
                Ht = 0, li = null, ws(i, s, m, 6);
                break;
              case 8:
                mh(), te = 6;
                break t;
              default:
                throw Error(n(462));
            }
          }
          Nw();
          break;
        } catch (U) {
          I0(i, U);
        }
      while (true);
      return rn = Sl = null, R.H = u, R.A = d, Lt = o, At !== null ? 0 : (Gt = null, Mt = 0, eo(), te);
    }
    function Nw() {
      for (; At !== null && !l2(); ) iy(At);
    }
    function iy(i) {
      var s = _0(i.alternate, i, pn);
      i.memoizedProps = i.pendingProps, s === null ? Ho(i) : At = s;
    }
    function ny(i) {
      var s = i, o = s.alternate;
      switch (s.tag) {
        case 15:
        case 0:
          s = S0(o, s, s.pendingProps, s.type, void 0, Mt);
          break;
        case 11:
          s = S0(o, s, s.pendingProps, s.type.render, s.ref, Mt);
          break;
        case 5:
          Df(s);
        default:
          T0(o, s), s = At = ep(s, pn), s = _0(o, s, pn);
      }
      i.memoizedProps = i.pendingProps, s === null ? Ho(i) : At = s;
    }
    function ws(i, s, o, u) {
      rn = Sl = null, Df(s), fs = null, vr = 0;
      var d = s.return;
      try {
        if (Aw(i, d, s, o, Mt)) {
          te = 1, Co(i, di(o, i.current)), At = null;
          return;
        }
      } catch (m) {
        if (d !== null) throw At = d, m;
        te = 1, Co(i, di(o, i.current)), At = null;
        return;
      }
      s.flags & 32768 ? (kt || u === 1 ? i = true : bs || (Mt & 536870912) !== 0 ? i = false : (Vn = i = true, (u === 2 || u === 9 || u === 3 || u === 6) && (u = ii.current, u !== null && u.tag === 13 && (u.flags |= 16384))), ly(s, i)) : Ho(s);
    }
    function Ho(i) {
      var s = i;
      do {
        if ((s.flags & 32768) !== 0) {
          ly(s, Vn);
          return;
        }
        i = s.return;
        var o = _w(s.alternate, s, pn);
        if (o !== null) {
          At = o;
          return;
        }
        if (s = s.sibling, s !== null) {
          At = s;
          return;
        }
        At = s = i;
      } while (s !== null);
      te === 0 && (te = 5);
    }
    function ly(i, s) {
      do {
        var o = kw(i.alternate, i);
        if (o !== null) {
          o.flags &= 32767, At = o;
          return;
        }
        if (o = i.return, o !== null && (o.flags |= 32768, o.subtreeFlags = 0, o.deletions = null), !s && (i = i.sibling, i !== null)) {
          At = i;
          return;
        }
        At = i = o;
      } while (i !== null);
      te = 6, At = null;
    }
    function sy(i, s, o, u, d, m, b, x, C) {
      i.cancelPendingCommit = null;
      do
        Uo();
      while (he !== 0);
      if ((Lt & 6) !== 0) throw Error(n(327));
      if (s !== null) {
        if (s === i.current) throw Error(n(177));
        if (m = s.lanes | s.childLanes, m |= nf, m2(i, o, m, b, x, C), i === Gt && (At = Gt = null, Mt = 0), Ss = s, Yn = i, yn = o, fh = m, hh = d, W0 = u, (s.subtreeFlags & 10256) !== 0 || (s.flags & 10256) !== 0 ? (i.callbackNode = null, i.callbackPriority = 0, Vw(Va, function() {
          return uy(), null;
        })) : (i.callbackNode = null, i.callbackPriority = 0), u = (s.flags & 13878) !== 0, (s.subtreeFlags & 13878) !== 0 || u) {
          u = R.T, R.T = null, d = Z.p, Z.p = 2, b = Lt, Lt |= 4;
          try {
            Tw(i, s, o);
          } finally {
            Lt = b, Z.p = d, R.T = u;
          }
        }
        he = 1, ry(), ay(), oy();
      }
    }
    function ry() {
      if (he === 1) {
        he = 0;
        var i = Yn, s = Ss, o = (s.flags & 13878) !== 0;
        if ((s.subtreeFlags & 13878) !== 0 || o) {
          o = R.T, R.T = null;
          var u = Z.p;
          Z.p = 2;
          var d = Lt;
          Lt |= 4;
          try {
            q0(s, i);
            var m = kh, b = Qg(i.containerInfo), x = m.focusedElem, C = m.selectionRange;
            if (b !== x && x && x.ownerDocument && Kg(x.ownerDocument.documentElement, x)) {
              if (C !== null && Pu(x)) {
                var E = C.start, U = C.end;
                if (U === void 0 && (U = E), "selectionStart" in x) x.selectionStart = E, x.selectionEnd = Math.min(U, x.value.length);
                else {
                  var X = x.ownerDocument || document, B = X && X.defaultView || window;
                  if (B.getSelection) {
                    var z = B.getSelection(), nt = x.textContent.length, ut = Math.min(C.start, nt), jt = C.end === void 0 ? ut : Math.min(C.end, nt);
                    !z.extend && ut > jt && (b = jt, jt = ut, ut = b);
                    var O = Xg(x, ut), k = Xg(x, jt);
                    if (O && k && (z.rangeCount !== 1 || z.anchorNode !== O.node || z.anchorOffset !== O.offset || z.focusNode !== k.node || z.focusOffset !== k.offset)) {
                      var D = X.createRange();
                      D.setStart(O.node, O.offset), z.removeAllRanges(), ut > jt ? (z.addRange(D), z.extend(k.node, k.offset)) : (D.setEnd(k.node, k.offset), z.addRange(D));
                    }
                  }
                }
              }
              for (X = [], z = x; z = z.parentNode; ) z.nodeType === 1 && X.push({
                element: z,
                left: z.scrollLeft,
                top: z.scrollTop
              });
              for (typeof x.focus == "function" && x.focus(), x = 0; x < X.length; x++) {
                var Y = X[x];
                Y.element.scrollLeft = Y.left, Y.element.scrollTop = Y.top;
              }
            }
            Fo = !!_h, kh = _h = null;
          } finally {
            Lt = d, Z.p = u, R.T = o;
          }
        }
        i.current = s, he = 2;
      }
    }
    function ay() {
      if (he === 2) {
        he = 0;
        var i = Yn, s = Ss, o = (s.flags & 8772) !== 0;
        if ((s.subtreeFlags & 8772) !== 0 || o) {
          o = R.T, R.T = null;
          var u = Z.p;
          Z.p = 2;
          var d = Lt;
          Lt |= 4;
          try {
            N0(i, s.alternate, s);
          } finally {
            Lt = d, Z.p = u, R.T = o;
          }
        }
        he = 3;
      }
    }
    function oy() {
      if (he === 4 || he === 3) {
        he = 0, s2();
        var i = Yn, s = Ss, o = yn, u = W0;
        (s.subtreeFlags & 10256) !== 0 || (s.flags & 10256) !== 0 ? he = 5 : (he = 0, Ss = Yn = null, cy(i, i.pendingLanes));
        var d = i.pendingLanes;
        if (d === 0 && (jn = null), Bu(o), s = s.stateNode, Ie && typeof Ie.onCommitFiberRoot == "function") try {
          Ie.onCommitFiberRoot(er, s, void 0, (s.current.flags & 128) === 128);
        } catch {
        }
        if (u !== null) {
          s = R.T, d = Z.p, Z.p = 2, R.T = null;
          try {
            for (var m = i.onRecoverableError, b = 0; b < u.length; b++) {
              var x = u[b];
              m(x.value, {
                componentStack: x.stack
              });
            }
          } finally {
            R.T = s, Z.p = d;
          }
        }
        (yn & 3) !== 0 && Uo(), Ui(i), d = i.pendingLanes, (o & 261930) !== 0 && (d & 42) !== 0 ? i === dh ? Lr++ : (Lr = 0, dh = i) : Lr = 0, Hr(0);
      }
    }
    function cy(i, s) {
      (i.pooledCacheLanes &= s) === 0 && (s = i.pooledCache, s != null && (i.pooledCache = null, yr(s)));
    }
    function Uo() {
      return ry(), ay(), oy(), uy();
    }
    function uy() {
      if (he !== 5) return false;
      var i = Yn, s = fh;
      fh = 0;
      var o = Bu(yn), u = R.T, d = Z.p;
      try {
        Z.p = 32 > o ? 32 : o, R.T = null, o = hh, hh = null;
        var m = Yn, b = yn;
        if (he = 0, Ss = Yn = null, yn = 0, (Lt & 6) !== 0) throw Error(n(331));
        var x = Lt;
        if (Lt |= 4, K0(m.current), Y0(m, m.current, b, o), Lt = x, Hr(0, false), Ie && typeof Ie.onPostCommitFiberRoot == "function") try {
          Ie.onPostCommitFiberRoot(er, m);
        } catch {
        }
        return true;
      } finally {
        Z.p = d, R.T = u, cy(i, s);
      }
    }
    function fy(i, s, o) {
      s = di(o, s), s = Kf(i.stateNode, s, 2), i = Nn(i, s, 2), i !== null && (nr(i, 2), Ui(i));
    }
    function Ut(i, s, o) {
      if (i.tag === 3) fy(i, i, o);
      else for (; s !== null; ) {
        if (s.tag === 3) {
          fy(s, i, o);
          break;
        } else if (s.tag === 1) {
          var u = s.stateNode;
          if (typeof s.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (jn === null || !jn.has(u))) {
            i = di(o, i), o = h0(2), u = Nn(s, o, 2), u !== null && (d0(o, u, s, i), nr(u, 2), Ui(u));
            break;
          }
        }
        s = s.return;
      }
    }
    function ph(i, s, o) {
      var u = i.pingCache;
      if (u === null) {
        u = i.pingCache = new Ew();
        var d = /* @__PURE__ */ new Set();
        u.set(s, d);
      } else d = u.get(s), d === void 0 && (d = /* @__PURE__ */ new Set(), u.set(s, d));
      d.has(o) || (oh = true, d.add(o), i = Lw.bind(null, i, s, o), s.then(i, i));
    }
    function Lw(i, s, o) {
      var u = i.pingCache;
      u !== null && u.delete(s), i.pingedLanes |= i.suspendedLanes & o, i.warmLanes &= ~o, Gt === i && (Mt & o) === o && (te === 4 || te === 3 && (Mt & 62914560) === Mt && 300 > Pe() - Bo ? (Lt & 2) === 0 && xs(i, 0) : ch |= o, vs === Mt && (vs = 0)), Ui(i);
    }
    function hy(i, s) {
      s === 0 && (s = rg()), i = yl(i, s), i !== null && (nr(i, s), Ui(i));
    }
    function Hw(i) {
      var s = i.memoizedState, o = 0;
      s !== null && (o = s.retryLane), hy(i, o);
    }
    function Uw(i, s) {
      var o = 0;
      switch (i.tag) {
        case 31:
        case 13:
          var u = i.stateNode, d = i.memoizedState;
          d !== null && (o = d.retryLane);
          break;
        case 19:
          u = i.stateNode;
          break;
        case 22:
          u = i.stateNode._retryCache;
          break;
        default:
          throw Error(n(314));
      }
      u !== null && u.delete(s), hy(i, o);
    }
    function Vw(i, s) {
      return Tu(i, s);
    }
    var Vo = null, As = null, yh = false, qo = false, bh = false, Xn = 0;
    function Ui(i) {
      i !== As && i.next === null && (As === null ? Vo = As = i : As = As.next = i), qo = true, yh || (yh = true, jw());
    }
    function Hr(i, s) {
      if (!bh && qo) {
        bh = true;
        do
          for (var o = false, u = Vo; u !== null; ) {
            if (i !== 0) {
              var d = u.pendingLanes;
              if (d === 0) var m = 0;
              else {
                var b = u.suspendedLanes, x = u.pingedLanes;
                m = (1 << 31 - $e(42 | i) + 1) - 1, m &= d & ~(b & ~x), m = m & 201326741 ? m & 201326741 | 1 : m ? m | 2 : 0;
              }
              m !== 0 && (o = true, py(u, m));
            } else m = Mt, m = Ga(u, u === Gt ? m : 0, u.cancelPendingCommit !== null || u.timeoutHandle !== -1), (m & 3) === 0 || ir(u, m) || (o = true, py(u, m));
            u = u.next;
          }
        while (o);
        bh = false;
      }
    }
    function qw() {
      dy();
    }
    function dy() {
      qo = yh = false;
      var i = 0;
      Xn !== 0 && Pw() && (i = Xn);
      for (var s = Pe(), o = null, u = Vo; u !== null; ) {
        var d = u.next, m = my(u, s);
        m === 0 ? (u.next = null, o === null ? Vo = d : o.next = d, d === null && (As = o)) : (o = u, (i !== 0 || (m & 3) !== 0) && (qo = true)), u = d;
      }
      he !== 0 && he !== 5 || Hr(i), Xn !== 0 && (Xn = 0);
    }
    function my(i, s) {
      for (var o = i.suspendedLanes, u = i.pingedLanes, d = i.expirationTimes, m = i.pendingLanes & -62914561; 0 < m; ) {
        var b = 31 - $e(m), x = 1 << b, C = d[b];
        C === -1 ? ((x & o) === 0 || (x & u) !== 0) && (d[b] = d2(x, s)) : C <= s && (i.expiredLanes |= x), m &= ~x;
      }
      if (s = Gt, o = Mt, o = Ga(i, i === s ? o : 0, i.cancelPendingCommit !== null || i.timeoutHandle !== -1), u = i.callbackNode, o === 0 || i === s && (Ht === 2 || Ht === 9) || i.cancelPendingCommit !== null) return u !== null && u !== null && Ou(u), i.callbackNode = null, i.callbackPriority = 0;
      if ((o & 3) === 0 || ir(i, o)) {
        if (s = o & -o, s === i.callbackPriority) return s;
        switch (u !== null && Ou(u), Bu(o)) {
          case 2:
          case 8:
            o = lg;
            break;
          case 32:
            o = Va;
            break;
          case 268435456:
            o = sg;
            break;
          default:
            o = Va;
        }
        return u = gy.bind(null, i), o = Tu(o, u), i.callbackPriority = s, i.callbackNode = o, s;
      }
      return u !== null && u !== null && Ou(u), i.callbackPriority = 2, i.callbackNode = null, 2;
    }
    function gy(i, s) {
      if (he !== 0 && he !== 5) return i.callbackNode = null, i.callbackPriority = 0, null;
      var o = i.callbackNode;
      if (Uo() && i.callbackNode !== o) return null;
      var u = Mt;
      return u = Ga(i, i === Gt ? u : 0, i.cancelPendingCommit !== null || i.timeoutHandle !== -1), u === 0 ? null : (F0(i, u, s), my(i, Pe()), i.callbackNode != null && i.callbackNode === o ? gy.bind(null, i) : null);
    }
    function py(i, s) {
      if (Uo()) return null;
      F0(i, s, true);
    }
    function jw() {
      $w(function() {
        (Lt & 6) !== 0 ? Tu(ng, qw) : dy();
      });
    }
    function vh() {
      if (Xn === 0) {
        var i = os;
        i === 0 && (i = qa, qa <<= 1, (qa & 261888) === 0 && (qa = 256)), Xn = i;
      }
      return Xn;
    }
    function yy(i) {
      return i == null || typeof i == "symbol" || typeof i == "boolean" ? null : typeof i == "function" ? i : Za("" + i);
    }
    function by(i, s) {
      var o = s.ownerDocument.createElement("input");
      return o.name = s.name, o.value = s.value, i.id && o.setAttribute("form", i.id), s.parentNode.insertBefore(o, s), i = new FormData(i), o.parentNode.removeChild(o), i;
    }
    function Yw(i, s, o, u, d) {
      if (s === "submit" && o && o.stateNode === d) {
        var m = yy((d[qe] || null).action), b = u.submitter;
        b && (s = (s = b[qe] || null) ? yy(s.formAction) : b.getAttribute("formAction"), s !== null && (m = s, b = null));
        var x = new Pa("action", "action", null, u, d);
        i.push({
          event: x,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (u.defaultPrevented) {
                  if (Xn !== 0) {
                    var C = b ? by(d, b) : new FormData(d);
                    Vf(o, {
                      pending: true,
                      data: C,
                      method: d.method,
                      action: m
                    }, null, C);
                  }
                } else typeof m == "function" && (x.preventDefault(), C = b ? by(d, b) : new FormData(d), Vf(o, {
                  pending: true,
                  data: C,
                  method: d.method,
                  action: m
                }, m, C));
              },
              currentTarget: d
            }
          ]
        });
      }
    }
    for (var Sh = 0; Sh < ef.length; Sh++) {
      var xh = ef[Sh], Gw = xh.toLowerCase(), Xw = xh[0].toUpperCase() + xh.slice(1);
      Ti(Gw, "on" + Xw);
    }
    Ti(Jg, "onAnimationEnd"), Ti(Fg, "onAnimationIteration"), Ti(Pg, "onAnimationStart"), Ti("dblclick", "onDoubleClick"), Ti("focusin", "onFocus"), Ti("focusout", "onBlur"), Ti(rw, "onTransitionRun"), Ti(aw, "onTransitionStart"), Ti(ow, "onTransitionCancel"), Ti(Ig, "onTransitionEnd"), Wl("onMouseEnter", [
      "mouseout",
      "mouseover"
    ]), Wl("onMouseLeave", [
      "mouseout",
      "mouseover"
    ]), Wl("onPointerEnter", [
      "pointerout",
      "pointerover"
    ]), Wl("onPointerLeave", [
      "pointerout",
      "pointerover"
    ]), dl("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), dl("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), dl("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), dl("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), dl("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), dl("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Ur = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Kw = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ur));
    function vy(i, s) {
      s = (s & 4) !== 0;
      for (var o = 0; o < i.length; o++) {
        var u = i[o], d = u.event;
        u = u.listeners;
        t: {
          var m = void 0;
          if (s) for (var b = u.length - 1; 0 <= b; b--) {
            var x = u[b], C = x.instance, E = x.currentTarget;
            if (x = x.listener, C !== m && d.isPropagationStopped()) break t;
            m = x, d.currentTarget = E;
            try {
              m(d);
            } catch (U) {
              to(U);
            }
            d.currentTarget = null, m = C;
          }
          else for (b = 0; b < u.length; b++) {
            if (x = u[b], C = x.instance, E = x.currentTarget, x = x.listener, C !== m && d.isPropagationStopped()) break t;
            m = x, d.currentTarget = E;
            try {
              m(d);
            } catch (U) {
              to(U);
            }
            d.currentTarget = null, m = C;
          }
        }
      }
    }
    function Ct(i, s) {
      var o = s[Ru];
      o === void 0 && (o = s[Ru] = /* @__PURE__ */ new Set());
      var u = i + "__bubble";
      o.has(u) || (Sy(s, i, 2, false), o.add(u));
    }
    function wh(i, s, o) {
      var u = 0;
      s && (u |= 4), Sy(o, i, u, s);
    }
    var jo = "_reactListening" + Math.random().toString(36).slice(2);
    function Ah(i) {
      if (!i[jo]) {
        i[jo] = true, dg.forEach(function(o) {
          o !== "selectionchange" && (Kw.has(o) || wh(o, false, i), wh(o, true, i));
        });
        var s = i.nodeType === 9 ? i : i.ownerDocument;
        s === null || s[jo] || (s[jo] = true, wh("selectionchange", false, s));
      }
    }
    function Sy(i, s, o, u) {
      switch (Jy(s)) {
        case 2:
          var d = vA;
          break;
        case 8:
          d = SA;
          break;
        default:
          d = Uh;
      }
      o = d.bind(null, s, o, i), d = void 0, !Yu || s !== "touchstart" && s !== "touchmove" && s !== "wheel" || (d = true), u ? d !== void 0 ? i.addEventListener(s, o, {
        capture: true,
        passive: d
      }) : i.addEventListener(s, o, true) : d !== void 0 ? i.addEventListener(s, o, {
        passive: d
      }) : i.addEventListener(s, o, false);
    }
    function Ch(i, s, o, u, d) {
      var m = u;
      if ((s & 1) === 0 && (s & 2) === 0 && u !== null) t: for (; ; ) {
        if (u === null) return;
        var b = u.tag;
        if (b === 3 || b === 4) {
          var x = u.stateNode.containerInfo;
          if (x === d) break;
          if (b === 4) for (b = u.return; b !== null; ) {
            var C = b.tag;
            if ((C === 3 || C === 4) && b.stateNode.containerInfo === d) return;
            b = b.return;
          }
          for (; x !== null; ) {
            if (b = Kl(x), b === null) return;
            if (C = b.tag, C === 5 || C === 6 || C === 26 || C === 27) {
              u = m = b;
              continue t;
            }
            x = x.parentNode;
          }
        }
        u = u.return;
      }
      Mg(function() {
        var E = m, U = qu(o), X = [];
        t: {
          var B = $g.get(i);
          if (B !== void 0) {
            var z = Pa, nt = i;
            switch (i) {
              case "keypress":
                if (Ja(o) === 0) break t;
              case "keydown":
              case "keyup":
                z = U2;
                break;
              case "focusin":
                nt = "focus", z = Qu;
                break;
              case "focusout":
                nt = "blur", z = Qu;
                break;
              case "beforeblur":
              case "afterblur":
                z = Qu;
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
                z = Tg;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                z = _2;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                z = j2;
                break;
              case Jg:
              case Fg:
              case Pg:
                z = O2;
                break;
              case Ig:
                z = G2;
                break;
              case "scroll":
              case "scrollend":
                z = C2;
                break;
              case "wheel":
                z = K2;
                break;
              case "copy":
              case "cut":
              case "paste":
                z = E2;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                z = Dg;
                break;
              case "toggle":
              case "beforetoggle":
                z = Z2;
            }
            var ut = (s & 4) !== 0, jt = !ut && (i === "scroll" || i === "scrollend"), O = ut ? B !== null ? B + "Capture" : null : B;
            ut = [];
            for (var k = E, D; k !== null; ) {
              var Y = k;
              if (D = Y.stateNode, Y = Y.tag, Y !== 5 && Y !== 26 && Y !== 27 || D === null || O === null || (Y = rr(k, O), Y != null && ut.push(Vr(k, Y, D))), jt) break;
              k = k.return;
            }
            0 < ut.length && (B = new z(B, nt, null, o, U), X.push({
              event: B,
              listeners: ut
            }));
          }
        }
        if ((s & 7) === 0) {
          t: {
            if (B = i === "mouseover" || i === "pointerover", z = i === "mouseout" || i === "pointerout", B && o !== Vu && (nt = o.relatedTarget || o.fromElement) && (Kl(nt) || nt[Xl])) break t;
            if ((z || B) && (B = U.window === U ? U : (B = U.ownerDocument) ? B.defaultView || B.parentWindow : window, z ? (nt = o.relatedTarget || o.toElement, z = E, nt = nt ? Kl(nt) : null, nt !== null && (jt = a(nt), ut = nt.tag, nt !== jt || ut !== 5 && ut !== 27 && ut !== 6) && (nt = null)) : (z = null, nt = E), z !== nt)) {
              if (ut = Tg, Y = "onMouseLeave", O = "onMouseEnter", k = "mouse", (i === "pointerout" || i === "pointerover") && (ut = Dg, Y = "onPointerLeave", O = "onPointerEnter", k = "pointer"), jt = z == null ? B : sr(z), D = nt == null ? B : sr(nt), B = new ut(Y, k + "leave", z, o, U), B.target = jt, B.relatedTarget = D, Y = null, Kl(U) === E && (ut = new ut(O, k + "enter", nt, o, U), ut.target = D, ut.relatedTarget = jt, Y = ut), jt = Y, z && nt) e: {
                for (ut = Qw, O = z, k = nt, D = 0, Y = O; Y; Y = ut(Y)) D++;
                Y = 0;
                for (var ot = k; ot; ot = ut(ot)) Y++;
                for (; 0 < D - Y; ) O = ut(O), D--;
                for (; 0 < Y - D; ) k = ut(k), Y--;
                for (; D--; ) {
                  if (O === k || k !== null && O === k.alternate) {
                    ut = O;
                    break e;
                  }
                  O = ut(O), k = ut(k);
                }
                ut = null;
              }
              else ut = null;
              z !== null && xy(X, B, z, ut, false), nt !== null && jt !== null && xy(X, jt, nt, ut, true);
            }
          }
          t: {
            if (B = E ? sr(E) : window, z = B.nodeName && B.nodeName.toLowerCase(), z === "select" || z === "input" && B.type === "file") var zt = Ug;
            else if (Lg(B)) if (Vg) zt = nw;
            else {
              zt = ew;
              var st = tw;
            }
            else z = B.nodeName, !z || z.toLowerCase() !== "input" || B.type !== "checkbox" && B.type !== "radio" ? E && Uu(E.elementType) && (zt = Ug) : zt = iw;
            if (zt && (zt = zt(i, E))) {
              Hg(X, zt, o, U);
              break t;
            }
            st && st(i, B, E), i === "focusout" && E && B.type === "number" && E.memoizedProps.value != null && Hu(B, "number", B.value);
          }
          switch (st = E ? sr(E) : window, i) {
            case "focusin":
              (Lg(st) || st.contentEditable === "true") && (ts = st, Iu = E, mr = null);
              break;
            case "focusout":
              mr = Iu = ts = null;
              break;
            case "mousedown":
              $u = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              $u = false, Zg(X, o, U);
              break;
            case "selectionchange":
              if (sw) break;
            case "keydown":
            case "keyup":
              Zg(X, o, U);
          }
          var xt;
          if (Wu) t: {
            switch (i) {
              case "compositionstart":
                var _t = "onCompositionStart";
                break t;
              case "compositionend":
                _t = "onCompositionEnd";
                break t;
              case "compositionupdate":
                _t = "onCompositionUpdate";
                break t;
            }
            _t = void 0;
          }
          else $l ? zg(i, o) && (_t = "onCompositionEnd") : i === "keydown" && o.keyCode === 229 && (_t = "onCompositionStart");
          _t && (Eg && o.locale !== "ko" && ($l || _t !== "onCompositionStart" ? _t === "onCompositionEnd" && $l && (xt = _g()) : (Tn = U, Gu = "value" in Tn ? Tn.value : Tn.textContent, $l = true)), st = Yo(E, _t), 0 < st.length && (_t = new Og(_t, i, null, o, U), X.push({
            event: _t,
            listeners: st
          }), xt ? _t.data = xt : (xt = Ng(o), xt !== null && (_t.data = xt)))), (xt = J2 ? F2(i, o) : P2(i, o)) && (_t = Yo(E, "onBeforeInput"), 0 < _t.length && (st = new Og("onBeforeInput", "beforeinput", null, o, U), X.push({
            event: st,
            listeners: _t
          }), st.data = xt)), Yw(X, i, E, o, U);
        }
        vy(X, s);
      });
    }
    function Vr(i, s, o) {
      return {
        instance: i,
        listener: s,
        currentTarget: o
      };
    }
    function Yo(i, s) {
      for (var o = s + "Capture", u = []; i !== null; ) {
        var d = i, m = d.stateNode;
        if (d = d.tag, d !== 5 && d !== 26 && d !== 27 || m === null || (d = rr(i, o), d != null && u.unshift(Vr(i, d, m)), d = rr(i, s), d != null && u.push(Vr(i, d, m))), i.tag === 3) return u;
        i = i.return;
      }
      return [];
    }
    function Qw(i) {
      if (i === null) return null;
      do
        i = i.return;
      while (i && i.tag !== 5 && i.tag !== 27);
      return i || null;
    }
    function xy(i, s, o, u, d) {
      for (var m = s._reactName, b = []; o !== null && o !== u; ) {
        var x = o, C = x.alternate, E = x.stateNode;
        if (x = x.tag, C !== null && C === u) break;
        x !== 5 && x !== 26 && x !== 27 || E === null || (C = E, d ? (E = rr(o, m), E != null && b.unshift(Vr(o, E, C))) : d || (E = rr(o, m), E != null && b.push(Vr(o, E, C)))), o = o.return;
      }
      b.length !== 0 && i.push({
        event: s,
        listeners: b
      });
    }
    var Zw = /\r\n?/g, Ww = /\u0000|\uFFFD/g;
    function wy(i) {
      return (typeof i == "string" ? i : "" + i).replace(Zw, `
`).replace(Ww, "");
    }
    function Ay(i, s) {
      return s = wy(s), wy(i) === s;
    }
    function qt(i, s, o, u, d, m) {
      switch (o) {
        case "children":
          typeof u == "string" ? s === "body" || s === "textarea" && u === "" || Fl(i, u) : (typeof u == "number" || typeof u == "bigint") && s !== "body" && Fl(i, "" + u);
          break;
        case "className":
          Ka(i, "class", u);
          break;
        case "tabIndex":
          Ka(i, "tabindex", u);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Ka(i, o, u);
          break;
        case "style":
          Ag(i, u, m);
          break;
        case "data":
          if (s !== "object") {
            Ka(i, "data", u);
            break;
          }
        case "src":
        case "href":
          if (u === "" && (s !== "a" || o !== "href")) {
            i.removeAttribute(o);
            break;
          }
          if (u == null || typeof u == "function" || typeof u == "symbol" || typeof u == "boolean") {
            i.removeAttribute(o);
            break;
          }
          u = Za("" + u), i.setAttribute(o, u);
          break;
        case "action":
        case "formAction":
          if (typeof u == "function") {
            i.setAttribute(o, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
            break;
          } else typeof m == "function" && (o === "formAction" ? (s !== "input" && qt(i, s, "name", d.name, d, null), qt(i, s, "formEncType", d.formEncType, d, null), qt(i, s, "formMethod", d.formMethod, d, null), qt(i, s, "formTarget", d.formTarget, d, null)) : (qt(i, s, "encType", d.encType, d, null), qt(i, s, "method", d.method, d, null), qt(i, s, "target", d.target, d, null)));
          if (u == null || typeof u == "symbol" || typeof u == "boolean") {
            i.removeAttribute(o);
            break;
          }
          u = Za("" + u), i.setAttribute(o, u);
          break;
        case "onClick":
          u != null && (i.onclick = en);
          break;
        case "onScroll":
          u != null && Ct("scroll", i);
          break;
        case "onScrollEnd":
          u != null && Ct("scrollend", i);
          break;
        case "dangerouslySetInnerHTML":
          if (u != null) {
            if (typeof u != "object" || !("__html" in u)) throw Error(n(61));
            if (o = u.__html, o != null) {
              if (d.children != null) throw Error(n(60));
              i.innerHTML = o;
            }
          }
          break;
        case "multiple":
          i.multiple = u && typeof u != "function" && typeof u != "symbol";
          break;
        case "muted":
          i.muted = u && typeof u != "function" && typeof u != "symbol";
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
          if (u == null || typeof u == "function" || typeof u == "boolean" || typeof u == "symbol") {
            i.removeAttribute("xlink:href");
            break;
          }
          o = Za("" + u), i.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", o);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          u != null && typeof u != "function" && typeof u != "symbol" ? i.setAttribute(o, "" + u) : i.removeAttribute(o);
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
          u && typeof u != "function" && typeof u != "symbol" ? i.setAttribute(o, "") : i.removeAttribute(o);
          break;
        case "capture":
        case "download":
          u === true ? i.setAttribute(o, "") : u !== false && u != null && typeof u != "function" && typeof u != "symbol" ? i.setAttribute(o, u) : i.removeAttribute(o);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          u != null && typeof u != "function" && typeof u != "symbol" && !isNaN(u) && 1 <= u ? i.setAttribute(o, u) : i.removeAttribute(o);
          break;
        case "rowSpan":
        case "start":
          u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u) ? i.removeAttribute(o) : i.setAttribute(o, u);
          break;
        case "popover":
          Ct("beforetoggle", i), Ct("toggle", i), Xa(i, "popover", u);
          break;
        case "xlinkActuate":
          tn(i, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
          break;
        case "xlinkArcrole":
          tn(i, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
          break;
        case "xlinkRole":
          tn(i, "http://www.w3.org/1999/xlink", "xlink:role", u);
          break;
        case "xlinkShow":
          tn(i, "http://www.w3.org/1999/xlink", "xlink:show", u);
          break;
        case "xlinkTitle":
          tn(i, "http://www.w3.org/1999/xlink", "xlink:title", u);
          break;
        case "xlinkType":
          tn(i, "http://www.w3.org/1999/xlink", "xlink:type", u);
          break;
        case "xmlBase":
          tn(i, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
          break;
        case "xmlLang":
          tn(i, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
          break;
        case "xmlSpace":
          tn(i, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
          break;
        case "is":
          Xa(i, "is", u);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < o.length) || o[0] !== "o" && o[0] !== "O" || o[1] !== "n" && o[1] !== "N") && (o = w2.get(o) || o, Xa(i, o, u));
      }
    }
    function Mh(i, s, o, u, d, m) {
      switch (o) {
        case "style":
          Ag(i, u, m);
          break;
        case "dangerouslySetInnerHTML":
          if (u != null) {
            if (typeof u != "object" || !("__html" in u)) throw Error(n(61));
            if (o = u.__html, o != null) {
              if (d.children != null) throw Error(n(60));
              i.innerHTML = o;
            }
          }
          break;
        case "children":
          typeof u == "string" ? Fl(i, u) : (typeof u == "number" || typeof u == "bigint") && Fl(i, "" + u);
          break;
        case "onScroll":
          u != null && Ct("scroll", i);
          break;
        case "onScrollEnd":
          u != null && Ct("scrollend", i);
          break;
        case "onClick":
          u != null && (i.onclick = en);
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
          if (!mg.hasOwnProperty(o)) t: {
            if (o[0] === "o" && o[1] === "n" && (d = o.endsWith("Capture"), s = o.slice(2, d ? o.length - 7 : void 0), m = i[qe] || null, m = m != null ? m[o] : null, typeof m == "function" && i.removeEventListener(s, m, d), typeof u == "function")) {
              typeof m != "function" && m !== null && (o in i ? i[o] = null : i.hasAttribute(o) && i.removeAttribute(o)), i.addEventListener(s, u, d);
              break t;
            }
            o in i ? i[o] = u : u === true ? i.setAttribute(o, "") : Xa(i, o, u);
          }
      }
    }
    function we(i, s, o) {
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
          Ct("error", i), Ct("load", i);
          var u = false, d = false, m;
          for (m in o) if (o.hasOwnProperty(m)) {
            var b = o[m];
            if (b != null) switch (m) {
              case "src":
                u = true;
                break;
              case "srcSet":
                d = true;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(n(137, s));
              default:
                qt(i, s, m, b, o, null);
            }
          }
          d && qt(i, s, "srcSet", o.srcSet, o, null), u && qt(i, s, "src", o.src, o, null);
          return;
        case "input":
          Ct("invalid", i);
          var x = m = b = d = null, C = null, E = null;
          for (u in o) if (o.hasOwnProperty(u)) {
            var U = o[u];
            if (U != null) switch (u) {
              case "name":
                d = U;
                break;
              case "type":
                b = U;
                break;
              case "checked":
                C = U;
                break;
              case "defaultChecked":
                E = U;
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
                qt(i, s, u, U, o, null);
            }
          }
          vg(i, m, x, C, E, b, d, false);
          return;
        case "select":
          Ct("invalid", i), u = b = m = null;
          for (d in o) if (o.hasOwnProperty(d) && (x = o[d], x != null)) switch (d) {
            case "value":
              m = x;
              break;
            case "defaultValue":
              b = x;
              break;
            case "multiple":
              u = x;
            default:
              qt(i, s, d, x, o, null);
          }
          s = m, o = b, i.multiple = !!u, s != null ? Jl(i, !!u, s, false) : o != null && Jl(i, !!u, o, true);
          return;
        case "textarea":
          Ct("invalid", i), m = d = u = null;
          for (b in o) if (o.hasOwnProperty(b) && (x = o[b], x != null)) switch (b) {
            case "value":
              u = x;
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
              qt(i, s, b, x, o, null);
          }
          xg(i, u, d, m);
          return;
        case "option":
          for (C in o) if (o.hasOwnProperty(C) && (u = o[C], u != null)) switch (C) {
            case "selected":
              i.selected = u && typeof u != "function" && typeof u != "symbol";
              break;
            default:
              qt(i, s, C, u, o, null);
          }
          return;
        case "dialog":
          Ct("beforetoggle", i), Ct("toggle", i), Ct("cancel", i), Ct("close", i);
          break;
        case "iframe":
        case "object":
          Ct("load", i);
          break;
        case "video":
        case "audio":
          for (u = 0; u < Ur.length; u++) Ct(Ur[u], i);
          break;
        case "image":
          Ct("error", i), Ct("load", i);
          break;
        case "details":
          Ct("toggle", i);
          break;
        case "embed":
        case "source":
        case "link":
          Ct("error", i), Ct("load", i);
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
          for (E in o) if (o.hasOwnProperty(E) && (u = o[E], u != null)) switch (E) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(n(137, s));
            default:
              qt(i, s, E, u, o, null);
          }
          return;
        default:
          if (Uu(s)) {
            for (U in o) o.hasOwnProperty(U) && (u = o[U], u !== void 0 && Mh(i, s, U, u, o, void 0));
            return;
          }
      }
      for (x in o) o.hasOwnProperty(x) && (u = o[x], u != null && qt(i, s, x, u, o, null));
    }
    function Jw(i, s, o, u) {
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
          var d = null, m = null, b = null, x = null, C = null, E = null, U = null;
          for (z in o) {
            var X = o[z];
            if (o.hasOwnProperty(z) && X != null) switch (z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                C = X;
              default:
                u.hasOwnProperty(z) || qt(i, s, z, null, u, X);
            }
          }
          for (var B in u) {
            var z = u[B];
            if (X = o[B], u.hasOwnProperty(B) && (z != null || X != null)) switch (B) {
              case "type":
                m = z;
                break;
              case "name":
                d = z;
                break;
              case "checked":
                E = z;
                break;
              case "defaultChecked":
                U = z;
                break;
              case "value":
                b = z;
                break;
              case "defaultValue":
                x = z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null) throw Error(n(137, s));
                break;
              default:
                z !== X && qt(i, s, B, z, u, X);
            }
          }
          Lu(i, b, x, C, E, U, m, d);
          return;
        case "select":
          z = b = x = B = null;
          for (m in o) if (C = o[m], o.hasOwnProperty(m) && C != null) switch (m) {
            case "value":
              break;
            case "multiple":
              z = C;
            default:
              u.hasOwnProperty(m) || qt(i, s, m, null, u, C);
          }
          for (d in u) if (m = u[d], C = o[d], u.hasOwnProperty(d) && (m != null || C != null)) switch (d) {
            case "value":
              B = m;
              break;
            case "defaultValue":
              x = m;
              break;
            case "multiple":
              b = m;
            default:
              m !== C && qt(i, s, d, m, u, C);
          }
          s = x, o = b, u = z, B != null ? Jl(i, !!o, B, false) : !!u != !!o && (s != null ? Jl(i, !!o, s, true) : Jl(i, !!o, o ? [] : "", false));
          return;
        case "textarea":
          z = B = null;
          for (x in o) if (d = o[x], o.hasOwnProperty(x) && d != null && !u.hasOwnProperty(x)) switch (x) {
            case "value":
              break;
            case "children":
              break;
            default:
              qt(i, s, x, null, u, d);
          }
          for (b in u) if (d = u[b], m = o[b], u.hasOwnProperty(b) && (d != null || m != null)) switch (b) {
            case "value":
              B = d;
              break;
            case "defaultValue":
              z = d;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (d != null) throw Error(n(91));
              break;
            default:
              d !== m && qt(i, s, b, d, u, m);
          }
          Sg(i, B, z);
          return;
        case "option":
          for (var nt in o) if (B = o[nt], o.hasOwnProperty(nt) && B != null && !u.hasOwnProperty(nt)) switch (nt) {
            case "selected":
              i.selected = false;
              break;
            default:
              qt(i, s, nt, null, u, B);
          }
          for (C in u) if (B = u[C], z = o[C], u.hasOwnProperty(C) && B !== z && (B != null || z != null)) switch (C) {
            case "selected":
              i.selected = B && typeof B != "function" && typeof B != "symbol";
              break;
            default:
              qt(i, s, C, B, u, z);
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
          for (var ut in o) B = o[ut], o.hasOwnProperty(ut) && B != null && !u.hasOwnProperty(ut) && qt(i, s, ut, null, u, B);
          for (E in u) if (B = u[E], z = o[E], u.hasOwnProperty(E) && B !== z && (B != null || z != null)) switch (E) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (B != null) throw Error(n(137, s));
              break;
            default:
              qt(i, s, E, B, u, z);
          }
          return;
        default:
          if (Uu(s)) {
            for (var jt in o) B = o[jt], o.hasOwnProperty(jt) && B !== void 0 && !u.hasOwnProperty(jt) && Mh(i, s, jt, void 0, u, B);
            for (U in u) B = u[U], z = o[U], !u.hasOwnProperty(U) || B === z || B === void 0 && z === void 0 || Mh(i, s, U, B, u, z);
            return;
          }
      }
      for (var O in o) B = o[O], o.hasOwnProperty(O) && B != null && !u.hasOwnProperty(O) && qt(i, s, O, null, u, B);
      for (X in u) B = u[X], z = o[X], !u.hasOwnProperty(X) || B === z || B == null && z == null || qt(i, s, X, B, u, z);
    }
    function Cy(i) {
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
    function Fw() {
      if (typeof performance.getEntriesByType == "function") {
        for (var i = 0, s = 0, o = performance.getEntriesByType("resource"), u = 0; u < o.length; u++) {
          var d = o[u], m = d.transferSize, b = d.initiatorType, x = d.duration;
          if (m && x && Cy(b)) {
            for (b = 0, x = d.responseEnd, u += 1; u < o.length; u++) {
              var C = o[u], E = C.startTime;
              if (E > x) break;
              var U = C.transferSize, X = C.initiatorType;
              U && Cy(X) && (C = C.responseEnd, b += U * (C < x ? 1 : (x - E) / (C - E)));
            }
            if (--u, s += 8 * (m + b) / (d.duration / 1e3), i++, 10 < i) break;
          }
        }
        if (0 < i) return s / i / 1e6;
      }
      return navigator.connection && (i = navigator.connection.downlink, typeof i == "number") ? i : 5;
    }
    var _h = null, kh = null;
    function Go(i) {
      return i.nodeType === 9 ? i : i.ownerDocument;
    }
    function My(i) {
      switch (i) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function _y(i, s) {
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
    function Th(i, s) {
      return i === "textarea" || i === "noscript" || typeof s.children == "string" || typeof s.children == "number" || typeof s.children == "bigint" || typeof s.dangerouslySetInnerHTML == "object" && s.dangerouslySetInnerHTML !== null && s.dangerouslySetInnerHTML.__html != null;
    }
    var Oh = null;
    function Pw() {
      var i = window.event;
      return i && i.type === "popstate" ? i === Oh ? false : (Oh = i, true) : (Oh = null, false);
    }
    var ky = typeof setTimeout == "function" ? setTimeout : void 0, Iw = typeof clearTimeout == "function" ? clearTimeout : void 0, Ty = typeof Promise == "function" ? Promise : void 0, $w = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ty < "u" ? function(i) {
      return Ty.resolve(null).then(i).catch(tA);
    } : ky;
    function tA(i) {
      setTimeout(function() {
        throw i;
      });
    }
    function Kn(i) {
      return i === "head";
    }
    function Oy(i, s) {
      var o = s, u = 0;
      do {
        var d = o.nextSibling;
        if (i.removeChild(o), d && d.nodeType === 8) if (o = d.data, o === "/$" || o === "/&") {
          if (u === 0) {
            i.removeChild(d), ks(s);
            return;
          }
          u--;
        } else if (o === "$" || o === "$?" || o === "$~" || o === "$!" || o === "&") u++;
        else if (o === "html") qr(i.ownerDocument.documentElement);
        else if (o === "head") {
          o = i.ownerDocument.head, qr(o);
          for (var m = o.firstChild; m; ) {
            var b = m.nextSibling, x = m.nodeName;
            m[lr] || x === "SCRIPT" || x === "STYLE" || x === "LINK" && m.rel.toLowerCase() === "stylesheet" || o.removeChild(m), m = b;
          }
        } else o === "body" && qr(i.ownerDocument.body);
        o = d;
      } while (o);
      ks(s);
    }
    function Dy(i, s) {
      var o = i;
      i = 0;
      do {
        var u = o.nextSibling;
        if (o.nodeType === 1 ? s ? (o._stashedDisplay = o.style.display, o.style.display = "none") : (o.style.display = o._stashedDisplay || "", o.getAttribute("style") === "" && o.removeAttribute("style")) : o.nodeType === 3 && (s ? (o._stashedText = o.nodeValue, o.nodeValue = "") : o.nodeValue = o._stashedText || ""), u && u.nodeType === 8) if (o = u.data, o === "/$") {
          if (i === 0) break;
          i--;
        } else o !== "$" && o !== "$?" && o !== "$~" && o !== "$!" || i++;
        o = u;
      } while (o);
    }
    function Dh(i) {
      var s = i.firstChild;
      for (s && s.nodeType === 10 && (s = s.nextSibling); s; ) {
        var o = s;
        switch (s = s.nextSibling, o.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            Dh(o), zu(o);
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
    function eA(i, s, o, u) {
      for (; i.nodeType === 1; ) {
        var d = o;
        if (i.nodeName.toLowerCase() !== s.toLowerCase()) {
          if (!u && (i.nodeName !== "INPUT" || i.type !== "hidden")) break;
        } else if (u) {
          if (!i[lr]) switch (s) {
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
        if (i = bi(i.nextSibling), i === null) break;
      }
      return null;
    }
    function iA(i, s, o) {
      if (s === "") return null;
      for (; i.nodeType !== 3; ) if ((i.nodeType !== 1 || i.nodeName !== "INPUT" || i.type !== "hidden") && !o || (i = bi(i.nextSibling), i === null)) return null;
      return i;
    }
    function Ey(i, s) {
      for (; i.nodeType !== 8; ) if ((i.nodeType !== 1 || i.nodeName !== "INPUT" || i.type !== "hidden") && !s || (i = bi(i.nextSibling), i === null)) return null;
      return i;
    }
    function Eh(i) {
      return i.data === "$?" || i.data === "$~";
    }
    function Bh(i) {
      return i.data === "$!" || i.data === "$?" && i.ownerDocument.readyState !== "loading";
    }
    function nA(i, s) {
      var o = i.ownerDocument;
      if (i.data === "$~") i._reactRetry = s;
      else if (i.data !== "$?" || o.readyState !== "loading") s();
      else {
        var u = function() {
          s(), o.removeEventListener("DOMContentLoaded", u);
        };
        o.addEventListener("DOMContentLoaded", u), i._reactRetry = u;
      }
    }
    function bi(i) {
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
    var Rh = null;
    function By(i) {
      i = i.nextSibling;
      for (var s = 0; i; ) {
        if (i.nodeType === 8) {
          var o = i.data;
          if (o === "/$" || o === "/&") {
            if (s === 0) return bi(i.nextSibling);
            s--;
          } else o !== "$" && o !== "$!" && o !== "$?" && o !== "$~" && o !== "&" || s++;
        }
        i = i.nextSibling;
      }
      return null;
    }
    function Ry(i) {
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
    function zy(i, s, o) {
      switch (s = Go(o), i) {
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
    function qr(i) {
      for (var s = i.attributes; s.length; ) i.removeAttributeNode(s[0]);
      zu(i);
    }
    var vi = /* @__PURE__ */ new Map(), Ny = /* @__PURE__ */ new Set();
    function Xo(i) {
      return typeof i.getRootNode == "function" ? i.getRootNode() : i.nodeType === 9 ? i : i.ownerDocument;
    }
    var bn = Z.d;
    Z.d = {
      f: lA,
      r: sA,
      D: rA,
      C: aA,
      L: oA,
      m: cA,
      X: fA,
      S: uA,
      M: hA
    };
    function lA() {
      var i = bn.f(), s = No();
      return i || s;
    }
    function sA(i) {
      var s = Ql(i);
      s !== null && s.tag === 5 && s.type === "form" ? Ip(s) : bn.r(i);
    }
    var Cs = typeof document > "u" ? null : document;
    function Ly(i, s, o) {
      var u = Cs;
      if (u && typeof s == "string" && s) {
        var d = fi(s);
        d = 'link[rel="' + i + '"][href="' + d + '"]', typeof o == "string" && (d += '[crossorigin="' + o + '"]'), Ny.has(d) || (Ny.add(d), i = {
          rel: i,
          crossOrigin: o,
          href: s
        }, u.querySelector(d) === null && (s = u.createElement("link"), we(s, "link", i), ge(s), u.head.appendChild(s)));
      }
    }
    function rA(i) {
      bn.D(i), Ly("dns-prefetch", i, null);
    }
    function aA(i, s) {
      bn.C(i, s), Ly("preconnect", i, s);
    }
    function oA(i, s, o) {
      bn.L(i, s, o);
      var u = Cs;
      if (u && i && s) {
        var d = 'link[rel="preload"][as="' + fi(s) + '"]';
        s === "image" && o && o.imageSrcSet ? (d += '[imagesrcset="' + fi(o.imageSrcSet) + '"]', typeof o.imageSizes == "string" && (d += '[imagesizes="' + fi(o.imageSizes) + '"]')) : d += '[href="' + fi(i) + '"]';
        var m = d;
        switch (s) {
          case "style":
            m = Ms(i);
            break;
          case "script":
            m = _s(i);
        }
        vi.has(m) || (i = y({
          rel: "preload",
          href: s === "image" && o && o.imageSrcSet ? void 0 : i,
          as: s
        }, o), vi.set(m, i), u.querySelector(d) !== null || s === "style" && u.querySelector(jr(m)) || s === "script" && u.querySelector(Yr(m)) || (s = u.createElement("link"), we(s, "link", i), ge(s), u.head.appendChild(s)));
      }
    }
    function cA(i, s) {
      bn.m(i, s);
      var o = Cs;
      if (o && i) {
        var u = s && typeof s.as == "string" ? s.as : "script", d = 'link[rel="modulepreload"][as="' + fi(u) + '"][href="' + fi(i) + '"]', m = d;
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            m = _s(i);
        }
        if (!vi.has(m) && (i = y({
          rel: "modulepreload",
          href: i
        }, s), vi.set(m, i), o.querySelector(d) === null)) {
          switch (u) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (o.querySelector(Yr(m))) return;
          }
          u = o.createElement("link"), we(u, "link", i), ge(u), o.head.appendChild(u);
        }
      }
    }
    function uA(i, s, o) {
      bn.S(i, s, o);
      var u = Cs;
      if (u && i) {
        var d = Zl(u).hoistableStyles, m = Ms(i);
        s = s || "default";
        var b = d.get(m);
        if (!b) {
          var x = {
            loading: 0,
            preload: null
          };
          if (b = u.querySelector(jr(m))) x.loading = 5;
          else {
            i = y({
              rel: "stylesheet",
              href: i,
              "data-precedence": s
            }, o), (o = vi.get(m)) && zh(i, o);
            var C = b = u.createElement("link");
            ge(C), we(C, "link", i), C._p = new Promise(function(E, U) {
              C.onload = E, C.onerror = U;
            }), C.addEventListener("load", function() {
              x.loading |= 1;
            }), C.addEventListener("error", function() {
              x.loading |= 2;
            }), x.loading |= 4, Ko(b, s, u);
          }
          b = {
            type: "stylesheet",
            instance: b,
            count: 1,
            state: x
          }, d.set(m, b);
        }
      }
    }
    function fA(i, s) {
      bn.X(i, s);
      var o = Cs;
      if (o && i) {
        var u = Zl(o).hoistableScripts, d = _s(i), m = u.get(d);
        m || (m = o.querySelector(Yr(d)), m || (i = y({
          src: i,
          async: true
        }, s), (s = vi.get(d)) && Nh(i, s), m = o.createElement("script"), ge(m), we(m, "link", i), o.head.appendChild(m)), m = {
          type: "script",
          instance: m,
          count: 1,
          state: null
        }, u.set(d, m));
      }
    }
    function hA(i, s) {
      bn.M(i, s);
      var o = Cs;
      if (o && i) {
        var u = Zl(o).hoistableScripts, d = _s(i), m = u.get(d);
        m || (m = o.querySelector(Yr(d)), m || (i = y({
          src: i,
          async: true,
          type: "module"
        }, s), (s = vi.get(d)) && Nh(i, s), m = o.createElement("script"), ge(m), we(m, "link", i), o.head.appendChild(m)), m = {
          type: "script",
          instance: m,
          count: 1,
          state: null
        }, u.set(d, m));
      }
    }
    function Hy(i, s, o, u) {
      var d = (d = bt.current) ? Xo(d) : null;
      if (!d) throw Error(n(446));
      switch (i) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof o.precedence == "string" && typeof o.href == "string" ? (s = Ms(o.href), o = Zl(d).hoistableStyles, u = o.get(s), u || (u = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, o.set(s, u)), u) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        case "link":
          if (o.rel === "stylesheet" && typeof o.href == "string" && typeof o.precedence == "string") {
            i = Ms(o.href);
            var m = Zl(d).hoistableStyles, b = m.get(i);
            if (b || (d = d.ownerDocument || d, b = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            }, m.set(i, b), (m = d.querySelector(jr(i))) && !m._p && (b.instance = m, b.state.loading = 5), vi.has(i) || (o = {
              rel: "preload",
              as: "style",
              href: o.href,
              crossOrigin: o.crossOrigin,
              integrity: o.integrity,
              media: o.media,
              hrefLang: o.hrefLang,
              referrerPolicy: o.referrerPolicy
            }, vi.set(i, o), m || dA(d, i, o, b.state))), s && u === null) throw Error(n(528, ""));
            return b;
          }
          if (s && u !== null) throw Error(n(529, ""));
          return null;
        case "script":
          return s = o.async, o = o.src, typeof o == "string" && s && typeof s != "function" && typeof s != "symbol" ? (s = _s(o), o = Zl(d).hoistableScripts, u = o.get(s), u || (u = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, o.set(s, u)), u) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        default:
          throw Error(n(444, i));
      }
    }
    function Ms(i) {
      return 'href="' + fi(i) + '"';
    }
    function jr(i) {
      return 'link[rel="stylesheet"][' + i + "]";
    }
    function Uy(i) {
      return y({}, i, {
        "data-precedence": i.precedence,
        precedence: null
      });
    }
    function dA(i, s, o, u) {
      i.querySelector('link[rel="preload"][as="style"][' + s + "]") ? u.loading = 1 : (s = i.createElement("link"), u.preload = s, s.addEventListener("load", function() {
        return u.loading |= 1;
      }), s.addEventListener("error", function() {
        return u.loading |= 2;
      }), we(s, "link", o), ge(s), i.head.appendChild(s));
    }
    function _s(i) {
      return '[src="' + fi(i) + '"]';
    }
    function Yr(i) {
      return "script[async]" + i;
    }
    function Vy(i, s, o) {
      if (s.count++, s.instance === null) switch (s.type) {
        case "style":
          var u = i.querySelector('style[data-href~="' + fi(o.href) + '"]');
          if (u) return s.instance = u, ge(u), u;
          var d = y({}, o, {
            "data-href": o.href,
            "data-precedence": o.precedence,
            href: null,
            precedence: null
          });
          return u = (i.ownerDocument || i).createElement("style"), ge(u), we(u, "style", d), Ko(u, o.precedence, i), s.instance = u;
        case "stylesheet":
          d = Ms(o.href);
          var m = i.querySelector(jr(d));
          if (m) return s.state.loading |= 4, s.instance = m, ge(m), m;
          u = Uy(o), (d = vi.get(d)) && zh(u, d), m = (i.ownerDocument || i).createElement("link"), ge(m);
          var b = m;
          return b._p = new Promise(function(x, C) {
            b.onload = x, b.onerror = C;
          }), we(m, "link", u), s.state.loading |= 4, Ko(m, o.precedence, i), s.instance = m;
        case "script":
          return m = _s(o.src), (d = i.querySelector(Yr(m))) ? (s.instance = d, ge(d), d) : (u = o, (d = vi.get(m)) && (u = y({}, o), Nh(u, d)), i = i.ownerDocument || i, d = i.createElement("script"), ge(d), we(d, "link", u), i.head.appendChild(d), s.instance = d);
        case "void":
          return null;
        default:
          throw Error(n(443, s.type));
      }
      else s.type === "stylesheet" && (s.state.loading & 4) === 0 && (u = s.instance, s.state.loading |= 4, Ko(u, o.precedence, i));
      return s.instance;
    }
    function Ko(i, s, o) {
      for (var u = o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), d = u.length ? u[u.length - 1] : null, m = d, b = 0; b < u.length; b++) {
        var x = u[b];
        if (x.dataset.precedence === s) m = x;
        else if (m !== d) break;
      }
      m ? m.parentNode.insertBefore(i, m.nextSibling) : (s = o.nodeType === 9 ? o.head : o, s.insertBefore(i, s.firstChild));
    }
    function zh(i, s) {
      i.crossOrigin == null && (i.crossOrigin = s.crossOrigin), i.referrerPolicy == null && (i.referrerPolicy = s.referrerPolicy), i.title == null && (i.title = s.title);
    }
    function Nh(i, s) {
      i.crossOrigin == null && (i.crossOrigin = s.crossOrigin), i.referrerPolicy == null && (i.referrerPolicy = s.referrerPolicy), i.integrity == null && (i.integrity = s.integrity);
    }
    var Qo = null;
    function qy(i, s, o) {
      if (Qo === null) {
        var u = /* @__PURE__ */ new Map(), d = Qo = /* @__PURE__ */ new Map();
        d.set(o, u);
      } else d = Qo, u = d.get(o), u || (u = /* @__PURE__ */ new Map(), d.set(o, u));
      if (u.has(i)) return u;
      for (u.set(i, null), o = o.getElementsByTagName(i), d = 0; d < o.length; d++) {
        var m = o[d];
        if (!(m[lr] || m[be] || i === "link" && m.getAttribute("rel") === "stylesheet") && m.namespaceURI !== "http://www.w3.org/2000/svg") {
          var b = m.getAttribute(s) || "";
          b = i + b;
          var x = u.get(b);
          x ? x.push(m) : u.set(b, [
            m
          ]);
        }
      }
      return u;
    }
    function jy(i, s, o) {
      i = i.ownerDocument || i, i.head.insertBefore(o, s === "title" ? i.querySelector("head > title") : null);
    }
    function mA(i, s, o) {
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
    function Yy(i) {
      return !(i.type === "stylesheet" && (i.state.loading & 3) === 0);
    }
    function gA(i, s, o, u) {
      if (o.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== false) && (o.state.loading & 4) === 0) {
        if (o.instance === null) {
          var d = Ms(u.href), m = s.querySelector(jr(d));
          if (m) {
            s = m._p, s !== null && typeof s == "object" && typeof s.then == "function" && (i.count++, i = Zo.bind(i), s.then(i, i)), o.state.loading |= 4, o.instance = m, ge(m);
            return;
          }
          m = s.ownerDocument || s, u = Uy(u), (d = vi.get(d)) && zh(u, d), m = m.createElement("link"), ge(m);
          var b = m;
          b._p = new Promise(function(x, C) {
            b.onload = x, b.onerror = C;
          }), we(m, "link", u), o.instance = m;
        }
        i.stylesheets === null && (i.stylesheets = /* @__PURE__ */ new Map()), i.stylesheets.set(o, s), (s = o.state.preload) && (o.state.loading & 3) === 0 && (i.count++, o = Zo.bind(i), s.addEventListener("load", o), s.addEventListener("error", o));
      }
    }
    var Lh = 0;
    function pA(i, s) {
      return i.stylesheets && i.count === 0 && Jo(i, i.stylesheets), 0 < i.count || 0 < i.imgCount ? function(o) {
        var u = setTimeout(function() {
          if (i.stylesheets && Jo(i, i.stylesheets), i.unsuspend) {
            var m = i.unsuspend;
            i.unsuspend = null, m();
          }
        }, 6e4 + s);
        0 < i.imgBytes && Lh === 0 && (Lh = 62500 * Fw());
        var d = setTimeout(function() {
          if (i.waitingForImages = false, i.count === 0 && (i.stylesheets && Jo(i, i.stylesheets), i.unsuspend)) {
            var m = i.unsuspend;
            i.unsuspend = null, m();
          }
        }, (i.imgBytes > Lh ? 50 : 800) + s);
        return i.unsuspend = o, function() {
          i.unsuspend = null, clearTimeout(u), clearTimeout(d);
        };
      } : null;
    }
    function Zo() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets) Jo(this, this.stylesheets);
        else if (this.unsuspend) {
          var i = this.unsuspend;
          this.unsuspend = null, i();
        }
      }
    }
    var Wo = null;
    function Jo(i, s) {
      i.stylesheets = null, i.unsuspend !== null && (i.count++, Wo = /* @__PURE__ */ new Map(), s.forEach(yA, i), Wo = null, Zo.call(i));
    }
    function yA(i, s) {
      if (!(s.state.loading & 4)) {
        var o = Wo.get(i);
        if (o) var u = o.get(null);
        else {
          o = /* @__PURE__ */ new Map(), Wo.set(i, o);
          for (var d = i.querySelectorAll("link[data-precedence],style[data-precedence]"), m = 0; m < d.length; m++) {
            var b = d[m];
            (b.nodeName === "LINK" || b.getAttribute("media") !== "not all") && (o.set(b.dataset.precedence, b), u = b);
          }
          u && o.set(null, u);
        }
        d = s.instance, b = d.getAttribute("data-precedence"), m = o.get(b) || u, m === u && o.set(null, d), o.set(b, d), this.count++, u = Zo.bind(this), d.addEventListener("load", u), d.addEventListener("error", u), m ? m.parentNode.insertBefore(d, m.nextSibling) : (i = i.nodeType === 9 ? i.head : i, i.insertBefore(d, i.firstChild)), s.state.loading |= 4;
      }
    }
    var Gr = {
      $$typeof: L,
      Provider: null,
      Consumer: null,
      _currentValue: it,
      _currentValue2: it,
      _threadCount: 0
    };
    function bA(i, s, o, u, d, m, b, x, C) {
      this.tag = 1, this.containerInfo = i, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Du(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Du(0), this.hiddenUpdates = Du(null), this.identifierPrefix = u, this.onUncaughtError = d, this.onCaughtError = m, this.onRecoverableError = b, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = C, this.incompleteTransitions = /* @__PURE__ */ new Map();
    }
    function Gy(i, s, o, u, d, m, b, x, C, E, U, X) {
      return i = new bA(i, s, o, b, C, E, U, X, x), s = 1, m === true && (s |= 24), m = ei(3, null, null, s), i.current = m, m.stateNode = i, s = gf(), s.refCount++, i.pooledCache = s, s.refCount++, m.memoizedState = {
        element: u,
        isDehydrated: o,
        cache: s
      }, vf(m), i;
    }
    function Xy(i) {
      return i ? (i = ns, i) : ns;
    }
    function Ky(i, s, o, u, d, m) {
      d = Xy(d), u.context === null ? u.context = d : u.pendingContext = d, u = zn(s), u.payload = {
        element: o
      }, m = m === void 0 ? null : m, m !== null && (u.callback = m), o = Nn(i, u, s), o !== null && (Qe(o, i, s), xr(o, i, s));
    }
    function Qy(i, s) {
      if (i = i.memoizedState, i !== null && i.dehydrated !== null) {
        var o = i.retryLane;
        i.retryLane = o !== 0 && o < s ? o : s;
      }
    }
    function Hh(i, s) {
      Qy(i, s), (i = i.alternate) && Qy(i, s);
    }
    function Zy(i) {
      if (i.tag === 13 || i.tag === 31) {
        var s = yl(i, 67108864);
        s !== null && Qe(s, i, 67108864), Hh(i, 67108864);
      }
    }
    function Wy(i) {
      if (i.tag === 13 || i.tag === 31) {
        var s = ri();
        s = Eu(s);
        var o = yl(i, s);
        o !== null && Qe(o, i, s), Hh(i, s);
      }
    }
    var Fo = true;
    function vA(i, s, o, u) {
      var d = R.T;
      R.T = null;
      var m = Z.p;
      try {
        Z.p = 2, Uh(i, s, o, u);
      } finally {
        Z.p = m, R.T = d;
      }
    }
    function SA(i, s, o, u) {
      var d = R.T;
      R.T = null;
      var m = Z.p;
      try {
        Z.p = 8, Uh(i, s, o, u);
      } finally {
        Z.p = m, R.T = d;
      }
    }
    function Uh(i, s, o, u) {
      if (Fo) {
        var d = Vh(u);
        if (d === null) Ch(i, s, u, Po, o), Fy(i, u);
        else if (wA(d, i, s, o, u)) u.stopPropagation();
        else if (Fy(i, u), s & 4 && -1 < xA.indexOf(i)) {
          for (; d !== null; ) {
            var m = Ql(d);
            if (m !== null) switch (m.tag) {
              case 3:
                if (m = m.stateNode, m.current.memoizedState.isDehydrated) {
                  var b = hl(m.pendingLanes);
                  if (b !== 0) {
                    var x = m;
                    for (x.pendingLanes |= 2, x.entangledLanes |= 2; b; ) {
                      var C = 1 << 31 - $e(b);
                      x.entanglements[1] |= C, b &= ~C;
                    }
                    Ui(m), (Lt & 6) === 0 && (Ro = Pe() + 500, Hr(0));
                  }
                }
                break;
              case 31:
              case 13:
                x = yl(m, 2), x !== null && Qe(x, m, 2), No(), Hh(m, 2);
            }
            if (m = Vh(u), m === null && Ch(i, s, u, Po, o), m === d) break;
            d = m;
          }
          d !== null && u.stopPropagation();
        } else Ch(i, s, u, null, o);
      }
    }
    function Vh(i) {
      return i = qu(i), qh(i);
    }
    var Po = null;
    function qh(i) {
      if (Po = null, i = Kl(i), i !== null) {
        var s = a(i);
        if (s === null) i = null;
        else {
          var o = s.tag;
          if (o === 13) {
            if (i = c(s), i !== null) return i;
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
      return Po = i, null;
    }
    function Jy(i) {
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
          switch (r2()) {
            case ng:
              return 2;
            case lg:
              return 8;
            case Va:
            case a2:
              return 32;
            case sg:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var jh = false, Qn = null, Zn = null, Wn = null, Xr = /* @__PURE__ */ new Map(), Kr = /* @__PURE__ */ new Map(), Jn = [], xA = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Fy(i, s) {
      switch (i) {
        case "focusin":
        case "focusout":
          Qn = null;
          break;
        case "dragenter":
        case "dragleave":
          Zn = null;
          break;
        case "mouseover":
        case "mouseout":
          Wn = null;
          break;
        case "pointerover":
        case "pointerout":
          Xr.delete(s.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Kr.delete(s.pointerId);
      }
    }
    function Qr(i, s, o, u, d, m) {
      return i === null || i.nativeEvent !== m ? (i = {
        blockedOn: s,
        domEventName: o,
        eventSystemFlags: u,
        nativeEvent: m,
        targetContainers: [
          d
        ]
      }, s !== null && (s = Ql(s), s !== null && Zy(s)), i) : (i.eventSystemFlags |= u, s = i.targetContainers, d !== null && s.indexOf(d) === -1 && s.push(d), i);
    }
    function wA(i, s, o, u, d) {
      switch (s) {
        case "focusin":
          return Qn = Qr(Qn, i, s, o, u, d), true;
        case "dragenter":
          return Zn = Qr(Zn, i, s, o, u, d), true;
        case "mouseover":
          return Wn = Qr(Wn, i, s, o, u, d), true;
        case "pointerover":
          var m = d.pointerId;
          return Xr.set(m, Qr(Xr.get(m) || null, i, s, o, u, d)), true;
        case "gotpointercapture":
          return m = d.pointerId, Kr.set(m, Qr(Kr.get(m) || null, i, s, o, u, d)), true;
      }
      return false;
    }
    function Py(i) {
      var s = Kl(i.target);
      if (s !== null) {
        var o = a(s);
        if (o !== null) {
          if (s = o.tag, s === 13) {
            if (s = c(o), s !== null) {
              i.blockedOn = s, fg(i.priority, function() {
                Wy(o);
              });
              return;
            }
          } else if (s === 31) {
            if (s = f(o), s !== null) {
              i.blockedOn = s, fg(i.priority, function() {
                Wy(o);
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
    function Io(i) {
      if (i.blockedOn !== null) return false;
      for (var s = i.targetContainers; 0 < s.length; ) {
        var o = Vh(i.nativeEvent);
        if (o === null) {
          o = i.nativeEvent;
          var u = new o.constructor(o.type, o);
          Vu = u, o.target.dispatchEvent(u), Vu = null;
        } else return s = Ql(o), s !== null && Zy(s), i.blockedOn = o, false;
        s.shift();
      }
      return true;
    }
    function Iy(i, s, o) {
      Io(i) && o.delete(s);
    }
    function AA() {
      jh = false, Qn !== null && Io(Qn) && (Qn = null), Zn !== null && Io(Zn) && (Zn = null), Wn !== null && Io(Wn) && (Wn = null), Xr.forEach(Iy), Kr.forEach(Iy);
    }
    function $o(i, s) {
      i.blockedOn === s && (i.blockedOn = null, jh || (jh = true, l.unstable_scheduleCallback(l.unstable_NormalPriority, AA)));
    }
    var tc = null;
    function $y(i) {
      tc !== i && (tc = i, l.unstable_scheduleCallback(l.unstable_NormalPriority, function() {
        tc === i && (tc = null);
        for (var s = 0; s < i.length; s += 3) {
          var o = i[s], u = i[s + 1], d = i[s + 2];
          if (typeof u != "function") {
            if (qh(u || o) === null) continue;
            break;
          }
          var m = Ql(o);
          m !== null && (i.splice(s, 3), s -= 3, Vf(m, {
            pending: true,
            data: d,
            method: o.method,
            action: u
          }, u, d));
        }
      }));
    }
    function ks(i) {
      function s(C) {
        return $o(C, i);
      }
      Qn !== null && $o(Qn, i), Zn !== null && $o(Zn, i), Wn !== null && $o(Wn, i), Xr.forEach(s), Kr.forEach(s);
      for (var o = 0; o < Jn.length; o++) {
        var u = Jn[o];
        u.blockedOn === i && (u.blockedOn = null);
      }
      for (; 0 < Jn.length && (o = Jn[0], o.blockedOn === null); ) Py(o), o.blockedOn === null && Jn.shift();
      if (o = (i.ownerDocument || i).$$reactFormReplay, o != null) for (u = 0; u < o.length; u += 3) {
        var d = o[u], m = o[u + 1], b = d[qe] || null;
        if (typeof m == "function") b || $y(o);
        else if (b) {
          var x = null;
          if (m && m.hasAttribute("formAction")) {
            if (d = m, b = m[qe] || null) x = b.formAction;
            else if (qh(d) !== null) continue;
          } else x = b.action;
          typeof x == "function" ? o[u + 1] = x : (o.splice(u, 3), u -= 3), $y(o);
        }
      }
    }
    function tb() {
      function i(m) {
        m.canIntercept && m.info === "react-transition" && m.intercept({
          handler: function() {
            return new Promise(function(b) {
              return d = b;
            });
          },
          focusReset: "manual",
          scroll: "manual"
        });
      }
      function s() {
        d !== null && (d(), d = null), u || setTimeout(o, 20);
      }
      function o() {
        if (!u && !navigation.transition) {
          var m = navigation.currentEntry;
          m && m.url != null && navigation.navigate(m.url, {
            state: m.getState(),
            info: "react-transition",
            history: "replace"
          });
        }
      }
      if (typeof navigation == "object") {
        var u = false, d = null;
        return navigation.addEventListener("navigate", i), navigation.addEventListener("navigatesuccess", s), navigation.addEventListener("navigateerror", s), setTimeout(o, 100), function() {
          u = true, navigation.removeEventListener("navigate", i), navigation.removeEventListener("navigatesuccess", s), navigation.removeEventListener("navigateerror", s), d !== null && (d(), d = null);
        };
      }
    }
    function Yh(i) {
      this._internalRoot = i;
    }
    ec.prototype.render = Yh.prototype.render = function(i) {
      var s = this._internalRoot;
      if (s === null) throw Error(n(409));
      var o = s.current, u = ri();
      Ky(o, u, i, s, null, null);
    }, ec.prototype.unmount = Yh.prototype.unmount = function() {
      var i = this._internalRoot;
      if (i !== null) {
        this._internalRoot = null;
        var s = i.containerInfo;
        Ky(i.current, 2, null, i, null, null), No(), s[Xl] = null;
      }
    };
    function ec(i) {
      this._internalRoot = i;
    }
    ec.prototype.unstable_scheduleHydration = function(i) {
      if (i) {
        var s = ug();
        i = {
          blockedOn: null,
          target: i,
          priority: s
        };
        for (var o = 0; o < Jn.length && s !== 0 && s < Jn[o].priority; o++) ;
        Jn.splice(o, 0, i), o === 0 && Py(i);
      }
    };
    var eb = t.version;
    if (eb !== "19.2.1") throw Error(n(527, eb, "19.2.1"));
    Z.findDOMNode = function(i) {
      var s = i._reactInternals;
      if (s === void 0) throw typeof i.render == "function" ? Error(n(188)) : (i = Object.keys(i).join(","), Error(n(268, i)));
      return i = g(s), i = i !== null ? p(i) : null, i = i === null ? null : i.stateNode, i;
    };
    var CA = {
      bundleType: 0,
      version: "19.2.1",
      rendererPackageName: "react-dom",
      currentDispatcherRef: R,
      reconcilerVersion: "19.2.1"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var ic = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!ic.isDisabled && ic.supportsFiber) try {
        er = ic.inject(CA), Ie = ic;
      } catch {
      }
    }
    return Wr.createRoot = function(i, s) {
      if (!r(i)) throw Error(n(299));
      var o = false, u = "", d = o0, m = c0, b = u0;
      return s != null && (s.unstable_strictMode === true && (o = true), s.identifierPrefix !== void 0 && (u = s.identifierPrefix), s.onUncaughtError !== void 0 && (d = s.onUncaughtError), s.onCaughtError !== void 0 && (m = s.onCaughtError), s.onRecoverableError !== void 0 && (b = s.onRecoverableError)), s = Gy(i, 1, false, null, null, o, u, null, d, m, b, tb), i[Xl] = s.current, Ah(i), new Yh(s);
    }, Wr.hydrateRoot = function(i, s, o) {
      if (!r(i)) throw Error(n(299));
      var u = false, d = "", m = o0, b = c0, x = u0, C = null;
      return o != null && (o.unstable_strictMode === true && (u = true), o.identifierPrefix !== void 0 && (d = o.identifierPrefix), o.onUncaughtError !== void 0 && (m = o.onUncaughtError), o.onCaughtError !== void 0 && (b = o.onCaughtError), o.onRecoverableError !== void 0 && (x = o.onRecoverableError), o.formState !== void 0 && (C = o.formState)), s = Gy(i, 1, true, s, o ?? null, u, d, C, m, b, x, tb), s.context = Xy(null), o = s.current, u = ri(), u = Eu(u), d = zn(u), d.callback = null, Nn(o, d, u), o = u, s.current.lanes = o, nr(s, o), Ui(s), i[Xl] = s.current, Ah(i), new ec(s);
    }, Wr.version = "19.2.1", Wr;
  }
  var fb;
  function zA() {
    if (fb) return Kh.exports;
    fb = 1;
    function l() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (t) {
        console.error(t);
      }
    }
    return l(), Kh.exports = RA(), Kh.exports;
  }
  var NA = zA();
  const LA = "/bithoven/ide/assets/bithoven_bg-rkjQ2slm.wasm", HA = async (l = {}, t) => {
    let e;
    if (t.startsWith("data:")) {
      const n = t.replace(/^data:.*?base64,/, "");
      let r;
      if (typeof Buffer == "function" && typeof Buffer.from == "function") r = Buffer.from(n, "base64");
      else if (typeof atob == "function") {
        const a = atob(n);
        r = new Uint8Array(a.length);
        for (let c = 0; c < a.length; c++) r[c] = a.charCodeAt(c);
      } else throw new Error("Cannot decode base64-encoded data URL");
      e = await WebAssembly.instantiate(r, l);
    } else {
      const n = await fetch(t), r = n.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && r.startsWith("application/wasm")) e = await WebAssembly.instantiateStreaming(n, l);
      else {
        const a = await n.arrayBuffer();
        e = await WebAssembly.instantiate(a, l);
      }
    }
    return e.instance.exports;
  };
  let Tt;
  function UA(l) {
    Tt = l;
  }
  let nc = null;
  function zs() {
    return (nc === null || nc.byteLength === 0) && (nc = new Uint8Array(Tt.memory.buffer)), nc;
  }
  let Oc = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  Oc.decode();
  const VA = 2146435072;
  let Jh = 0;
  function qA(l, t) {
    return Jh += t, Jh >= VA && (Oc = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), Oc.decode(), Jh = t), Oc.decode(zs().subarray(l, l + t));
  }
  function qs(l, t) {
    return l = l >>> 0, qA(l, t);
  }
  let Ji = 0;
  const sa = new TextEncoder();
  "encodeInto" in sa || (sa.encodeInto = function(l, t) {
    const e = sa.encode(l);
    return t.set(e), {
      read: l.length,
      written: e.length
    };
  });
  function js(l, t, e) {
    if (e === void 0) {
      const f = sa.encode(l), h = t(f.length, 1) >>> 0;
      return zs().subarray(h, h + f.length).set(f), Ji = f.length, h;
    }
    let n = l.length, r = t(n, 1) >>> 0;
    const a = zs();
    let c = 0;
    for (; c < n; c++) {
      const f = l.charCodeAt(c);
      if (f > 127) break;
      a[r + c] = f;
    }
    if (c !== n) {
      c !== 0 && (l = l.slice(c)), r = e(r, n, n = c + l.length * 3, 1) >>> 0;
      const f = zs().subarray(r + c, r + n), h = sa.encodeInto(l, f);
      c += h.written, r = e(r, n, c, 1) >>> 0;
    }
    return Ji = c, r;
  }
  let Ts = null;
  function ll() {
    return (Ts === null || Ts.buffer.detached === true || Ts.buffer.detached === void 0 && Ts.buffer !== Tt.memory.buffer) && (Ts = new DataView(Tt.memory.buffer)), Ts;
  }
  function jc(l) {
    return l == null;
  }
  function Md(l) {
    const t = typeof l;
    if (t == "number" || t == "boolean" || l == null) return `${l}`;
    if (t == "string") return `"${l}"`;
    if (t == "symbol") {
      const r = l.description;
      return r == null ? "Symbol" : `Symbol(${r})`;
    }
    if (t == "function") {
      const r = l.name;
      return typeof r == "string" && r.length > 0 ? `Function(${r})` : "Function";
    }
    if (Array.isArray(l)) {
      const r = l.length;
      let a = "[";
      r > 0 && (a += Md(l[0]));
      for (let c = 1; c < r; c++) a += ", " + Md(l[c]);
      return a += "]", a;
    }
    const e = /\[object ([^\]]+)\]/.exec(toString.call(l));
    let n;
    if (e && e.length > 1) n = e[1];
    else return toString.call(l);
    if (n == "Object") try {
      return "Object(" + JSON.stringify(l) + ")";
    } catch {
      return "Object";
    }
    return l instanceof Error ? `${l.name}: ${l.message}
${l.stack}` : n;
  }
  function jA(l) {
    const t = Tt.__externref_table_alloc();
    return Tt.__wbindgen_externrefs.set(t, l), t;
  }
  function uu(l, t) {
    try {
      return l.apply(this, t);
    } catch (e) {
      const n = jA(e);
      Tt.__wbindgen_exn_store(n);
    }
  }
  function sv(l, t) {
    return l = l >>> 0, zs().subarray(l / 1, l / 1 + t);
  }
  function YA(l, t) {
    const e = t(l.length * 1, 1) >>> 0;
    return zs().set(l, e / 1), Ji = l.length, e;
  }
  function GA(l) {
    const t = Tt.__wbindgen_externrefs.get(l);
    return Tt.__externref_table_dealloc(l), t;
  }
  function XA(l) {
    const t = js(l, Tt.__wbindgen_malloc, Tt.__wbindgen_realloc), e = Ji, n = Tt.compile_program(t, e);
    if (n[2]) throw GA(n[1]);
    return Ys.__wrap(n[0]);
  }
  const Fh = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((l) => Tt.__wbg_bithovenoutput_free(l >>> 0, 1));
  class Ys {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ys.prototype);
      return e.__wbg_ptr = t, Fh.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Fh.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      Tt.__wbg_bithovenoutput_free(t, 0);
    }
    static from_object(t) {
      const e = Tt.bithovenoutput_from_object(t);
      return Ys.__wrap(e);
    }
    get asm() {
      let t, e;
      try {
        const n = Tt.bithovenoutput_asm(this.__wbg_ptr);
        return t = n[0], e = n[1], qs(n[0], n[1]);
      } finally {
        Tt.__wbindgen_free(t, e, 1);
      }
    }
    get hex() {
      let t, e;
      try {
        const n = Tt.bithovenoutput_hex(this.__wbg_ptr);
        return t = n[0], e = n[1], qs(n[0], n[1]);
      } finally {
        Tt.__wbindgen_free(t, e, 1);
      }
    }
    constructor(t, e, n) {
      const r = js(t, Tt.__wbindgen_malloc, Tt.__wbindgen_realloc), a = Ji, c = js(e, Tt.__wbindgen_malloc, Tt.__wbindgen_realloc), f = Ji, h = YA(n, Tt.__wbindgen_malloc), g = Ji, p = Tt.bithovenoutput_new(r, a, c, f, h, g);
      return this.__wbg_ptr = p >>> 0, Fh.register(this, this.__wbg_ptr, this), this;
    }
    get bytes() {
      const t = Tt.bithovenoutput_bytes(this.__wbg_ptr);
      var e = sv(t[0], t[1]).slice();
      return Tt.__wbindgen_free(t[0], t[1] * 1, 1), e;
    }
    to_object() {
      return Tt.bithovenoutput_to_object(this.__wbg_ptr);
    }
  }
  Symbol.dispose && (Ys.prototype[Symbol.dispose] = Ys.prototype.free);
  function KA(l, t) {
    return Error(qs(l, t));
  }
  function QA(l) {
    return Number(l);
  }
  function ZA(l, t) {
    const e = String(t), n = js(e, Tt.__wbindgen_malloc, Tt.__wbindgen_realloc), r = Ji;
    ll().setInt32(l + 4, r, true), ll().setInt32(l + 0, n, true);
  }
  function WA(l) {
    const t = l, e = typeof t == "boolean" ? t : void 0;
    return jc(e) ? 16777215 : e ? 1 : 0;
  }
  function JA(l, t) {
    const e = Md(t), n = js(e, Tt.__wbindgen_malloc, Tt.__wbindgen_realloc), r = Ji;
    ll().setInt32(l + 4, r, true), ll().setInt32(l + 0, n, true);
  }
  function FA(l, t) {
    return l in t;
  }
  function PA(l) {
    return typeof l == "function";
  }
  function IA(l) {
    const t = l;
    return typeof t == "object" && t !== null;
  }
  function $A(l) {
    return l === void 0;
  }
  function tC(l, t) {
    return l == t;
  }
  function eC(l, t) {
    const e = t, n = typeof e == "number" ? e : void 0;
    ll().setFloat64(l + 8, jc(n) ? 0 : n, true), ll().setInt32(l + 0, !jc(n), true);
  }
  function iC(l, t) {
    const e = t, n = typeof e == "string" ? e : void 0;
    var r = jc(n) ? 0 : js(n, Tt.__wbindgen_malloc, Tt.__wbindgen_realloc), a = Ji;
    ll().setInt32(l + 4, a, true), ll().setInt32(l + 0, r, true);
  }
  function nC(l, t) {
    throw new Error(qs(l, t));
  }
  function lC() {
    return uu(function(l, t) {
      return l.call(t);
    }, arguments);
  }
  function sC(l) {
    return l.done;
  }
  function rC(l, t) {
    return l[t >>> 0];
  }
  function aC() {
    return uu(function(l, t) {
      return Reflect.get(l, t);
    }, arguments);
  }
  function oC(l, t) {
    return l[t];
  }
  function cC(l) {
    let t;
    try {
      t = l instanceof ArrayBuffer;
    } catch {
      t = false;
    }
    return t;
  }
  function uC(l) {
    let t;
    try {
      t = l instanceof Uint8Array;
    } catch {
      t = false;
    }
    return t;
  }
  function fC(l) {
    return Array.isArray(l);
  }
  function hC(l) {
    return Number.isSafeInteger(l);
  }
  function dC() {
    return Symbol.iterator;
  }
  function mC(l) {
    return l.length;
  }
  function gC(l) {
    return l.length;
  }
  function pC() {
    return new Object();
  }
  function yC(l) {
    return new Uint8Array(l);
  }
  function bC(l, t) {
    return new Error(qs(l, t));
  }
  function vC() {
    return new Array();
  }
  function SC() {
    return uu(function(l) {
      return l.next();
    }, arguments);
  }
  function xC(l) {
    return l.next;
  }
  function wC(l, t, e) {
    Uint8Array.prototype.set.call(sv(l, t), e);
  }
  function AC(l, t, e) {
    l[t] = e;
  }
  function CC(l, t, e) {
    l[t >>> 0] = e;
  }
  function MC() {
    return uu(function(l, t, e) {
      return Reflect.set(l, t, e);
    }, arguments);
  }
  function _C(l) {
    return l.value;
  }
  function kC(l, t) {
    return qs(l, t);
  }
  function TC(l) {
    return BigInt.asUintN(64, l);
  }
  function OC(l) {
    return l;
  }
  function DC() {
    const l = Tt.__wbindgen_externrefs, t = l.grow(4);
    l.set(0, void 0), l.set(t + 0, void 0), l.set(t + 1, null), l.set(t + 2, true), l.set(t + 3, false);
  }
  URL = globalThis.URL;
  const re = await HA({
    "./bithoven_bg.js": {
      __wbg_get_with_ref_key_1dc361bd10053bfe: oC,
      __wbg_set_3f1d0b984ed272ed: AC,
      __wbg_String_8f0eb39a4a4c2f66: ZA,
      __wbg_new_e17d9f43105b08be: vC,
      __wbg_new_1acc0b6eea89d040: pC,
      __wbg_new_5a79be3ab53b8aa5: yC,
      __wbg_length_69bca3cb64fc8748: mC,
      __wbg_prototypesetcall_2a6620b6922694b2: wC,
      __wbg_done_2042aa2670fb1db1: sC,
      __wbg_value_692627309814bb8c: _C,
      __wbg_instanceof_Uint8Array_20c8e73002f7af98: uC,
      __wbg_instanceof_ArrayBuffer_70beb1189ca63b38: cC,
      __wbg_get_7bed016f185add81: rC,
      __wbg_set_c213c871859d6500: CC,
      __wbg_length_cdd215e10d9dd507: gC,
      __wbg_isArray_96e0af9891d0945d: fC,
      __wbg_new_a7442b4b19c1a356: bC,
      __wbg_isSafeInteger_d216eda7911dde36: hC,
      __wbg_iterator_e5822695327a3c39: dC,
      __wbg_call_e762c39fa8ea36bf: lC,
      __wbg_next_2c826fe5dfec6b6a: xC,
      __wbg_next_020810e0ae8ebcb0: SC,
      __wbg_get_efcb449f58ec27c2: aC,
      __wbg_set_c2abbebe8b9ebee1: MC,
      __wbg___wbindgen_number_get_a20bf9b85341449d: eC,
      __wbg___wbindgen_in_bb933bd9e1b3bc0f: FA,
      __wbg___wbindgen_throw_b855445ff6a94295: nC,
      __wbg_Number_bb48ca12f395cd08: QA,
      __wbg_Error_e83987f665cf5504: KA,
      __wbg___wbindgen_is_object_c818261d21f283a4: IA,
      __wbg___wbindgen_string_get_e4f06c90489ad01b: iC,
      __wbg___wbindgen_boolean_get_6d5a1ee65bab5f68: WA,
      __wbg___wbindgen_is_function_ee8a6c5833c90377: PA,
      __wbg___wbindgen_is_undefined_2d472862bd29a478: $A,
      __wbg___wbindgen_jsval_loose_eq_b664b38a2f582147: tC,
      __wbg___wbindgen_debug_string_df47ffb5e35e6763: JA,
      __wbindgen_init_externref_table: DC,
      __wbindgen_cast_2241b6af4c4b2941: kC,
      __wbindgen_cast_d6cd19b81560fd6e: OC,
      __wbindgen_cast_4625c577ab2ec9ee: TC
    }
  }, LA), EC = re.memory, BC = re.__wbg_bithovenoutput_free, RC = re.bithovenoutput_asm, zC = re.bithovenoutput_bytes, NC = re.bithovenoutput_from_object, LC = re.bithovenoutput_hex, HC = re.bithovenoutput_new, UC = re.bithovenoutput_to_object, VC = re.compile_program, qC = re.rustsecp256k1_v0_10_0_context_create, jC = re.rustsecp256k1_v0_10_0_context_destroy, YC = re.rustsecp256k1_v0_10_0_default_error_callback_fn, GC = re.rustsecp256k1_v0_10_0_default_illegal_callback_fn, XC = re.__wbindgen_malloc, KC = re.__wbindgen_realloc, QC = re.__wbindgen_exn_store, ZC = re.__externref_table_alloc, WC = re.__wbindgen_externrefs, JC = re.__wbindgen_free, FC = re.__externref_table_dealloc, rv = re.__wbindgen_start, PC = Object.freeze(Object.defineProperty({
    __proto__: null,
    __externref_table_alloc: ZC,
    __externref_table_dealloc: FC,
    __wbg_bithovenoutput_free: BC,
    __wbindgen_exn_store: QC,
    __wbindgen_externrefs: WC,
    __wbindgen_free: JC,
    __wbindgen_malloc: XC,
    __wbindgen_realloc: KC,
    __wbindgen_start: rv,
    bithovenoutput_asm: RC,
    bithovenoutput_bytes: zC,
    bithovenoutput_from_object: NC,
    bithovenoutput_hex: LC,
    bithovenoutput_new: HC,
    bithovenoutput_to_object: UC,
    compile_program: VC,
    memory: EC,
    rustsecp256k1_v0_10_0_context_create: qC,
    rustsecp256k1_v0_10_0_context_destroy: jC,
    rustsecp256k1_v0_10_0_default_error_callback_fn: YC,
    rustsecp256k1_v0_10_0_default_illegal_callback_fn: GC
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  UA(PC);
  rv();
  function _d() {
    return _d = Object.assign ? Object.assign.bind() : function(l) {
      for (var t = 1; t < arguments.length; t++) {
        var e = arguments[t];
        for (var n in e) ({}).hasOwnProperty.call(e, n) && (l[n] = e[n]);
      }
      return l;
    }, _d.apply(null, arguments);
  }
  function IC(l, t) {
    if (l == null) return {};
    var e = {};
    for (var n in l) if ({}.hasOwnProperty.call(l, n)) {
      if (t.indexOf(n) !== -1) continue;
      e[n] = l[n];
    }
    return e;
  }
  let kd = [], av = [];
  (() => {
    let l = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((t) => t ? parseInt(t, 36) : 1);
    for (let t = 0, e = 0; t < l.length; t++) (t % 2 ? av : kd).push(e = e + l[t]);
  })();
  function $C(l) {
    if (l < 768) return false;
    for (let t = 0, e = kd.length; ; ) {
      let n = t + e >> 1;
      if (l < kd[n]) e = n;
      else if (l >= av[n]) t = n + 1;
      else return true;
      if (t == e) return false;
    }
  }
  function hb(l) {
    return l >= 127462 && l <= 127487;
  }
  const db = 8205;
  function tM(l, t, e = true, n = true) {
    return (e ? ov : eM)(l, t, n);
  }
  function ov(l, t, e) {
    if (t == l.length) return t;
    t && cv(l.charCodeAt(t)) && uv(l.charCodeAt(t - 1)) && t--;
    let n = Ph(l, t);
    for (t += mb(n); t < l.length; ) {
      let r = Ph(l, t);
      if (n == db || r == db || e && $C(r)) t += mb(r), n = r;
      else if (hb(r)) {
        let a = 0, c = t - 2;
        for (; c >= 0 && hb(Ph(l, c)); ) a++, c -= 2;
        if (a % 2 == 0) break;
        t += 2;
      } else break;
    }
    return t;
  }
  function eM(l, t, e) {
    for (; t > 0; ) {
      let n = ov(l, t - 2, e);
      if (n < t) return n;
      t--;
    }
    return 0;
  }
  function Ph(l, t) {
    let e = l.charCodeAt(t);
    if (!uv(e) || t + 1 == l.length) return e;
    let n = l.charCodeAt(t + 1);
    return cv(n) ? (e - 55296 << 10) + (n - 56320) + 65536 : e;
  }
  function cv(l) {
    return l >= 56320 && l < 57344;
  }
  function uv(l) {
    return l >= 55296 && l < 56320;
  }
  function mb(l) {
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
      [t, e] = Gs(this, t, e);
      let r = [];
      return this.decompose(0, t, r, 2), n.length && n.decompose(0, n.length, r, 3), this.decompose(e, this.length, r, 1), Gi.from(r, this.length - (e - t) + n.length);
    }
    append(t) {
      return this.replace(this.length, this.length, t);
    }
    slice(t, e = this.length) {
      [t, e] = Gs(this, t, e);
      let n = [];
      return this.decompose(t, e, n, 0), Gi.from(n, e - t);
    }
    eq(t) {
      if (t == this) return true;
      if (t.length != this.length || t.lines != this.lines) return false;
      let e = this.scanIdentical(t, 1), n = this.length - this.scanIdentical(t, -1), r = new ra(this), a = new ra(t);
      for (let c = e, f = e; ; ) {
        if (r.next(c), a.next(c), c = 0, r.lineBreak != a.lineBreak || r.done != a.done || r.value != a.value) return false;
        if (f += r.value.length, r.done || f >= n) return true;
      }
    }
    iter(t = 1) {
      return new ra(this, t);
    }
    iterRange(t, e = this.length) {
      return new fv(this, t, e);
    }
    iterLines(t, e) {
      let n;
      if (t == null) n = this.iter();
      else {
        e == null && (e = this.lines + 1);
        let r = this.line(t).from;
        n = this.iterRange(r, Math.max(r, e == this.lines + 1 ? this.length : e <= 1 ? 0 : this.line(e - 1).to));
      }
      return new hv(n);
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
      return t.length == 1 && !t[0] ? Rt.empty : t.length <= 32 ? new se(t) : Gi.from(se.split(t, []));
    }
  }
  class se extends Rt {
    constructor(t, e = iM(t)) {
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
        let c = this.text[a], f = r + c.length;
        if ((e ? n : f) >= t) return new nM(r, f, n, c);
        r = f + 1, n++;
      }
    }
    decompose(t, e, n, r) {
      let a = t <= 0 && e >= this.length ? this : new se(gb(this.text, t, e), Math.min(e, this.length) - Math.max(0, t));
      if (r & 1) {
        let c = n.pop(), f = Dc(a.text, c.text.slice(), 0, a.length);
        if (f.length <= 32) n.push(new se(f, c.length + a.length));
        else {
          let h = f.length >> 1;
          n.push(new se(f.slice(0, h)), new se(f.slice(h)));
        }
      } else n.push(a);
    }
    replace(t, e, n) {
      if (!(n instanceof se)) return super.replace(t, e, n);
      [t, e] = Gs(this, t, e);
      let r = Dc(this.text, Dc(n.text, gb(this.text, 0, t)), e), a = this.length + n.length - (e - t);
      return r.length <= 32 ? new se(r, a) : Gi.from(se.split(r, []), a);
    }
    sliceString(t, e = this.length, n = `
`) {
      [t, e] = Gs(this, t, e);
      let r = "";
      for (let a = 0, c = 0; a <= e && c < this.text.length; c++) {
        let f = this.text[c], h = a + f.length;
        a > t && c && (r += n), t < h && e > a && (r += f.slice(Math.max(0, t - a), e - a)), a = h + 1;
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
  class Gi extends Rt {
    constructor(t, e) {
      super(), this.children = t, this.length = e, this.lines = 0;
      for (let n of t) this.lines += n.lines;
    }
    lineInner(t, e, n, r) {
      for (let a = 0; ; a++) {
        let c = this.children[a], f = r + c.length, h = n + c.lines - 1;
        if ((e ? h : f) >= t) return c.lineInner(t, e, n, r);
        r = f + 1, n = h + 1;
      }
    }
    decompose(t, e, n, r) {
      for (let a = 0, c = 0; c <= e && a < this.children.length; a++) {
        let f = this.children[a], h = c + f.length;
        if (t <= h && e >= c) {
          let g = r & ((c <= t ? 1 : 0) | (h >= e ? 2 : 0));
          c >= t && h <= e && !g ? n.push(f) : f.decompose(t - c, e - c, n, g);
        }
        c = h + 1;
      }
    }
    replace(t, e, n) {
      if ([t, e] = Gs(this, t, e), n.lines < this.lines) for (let r = 0, a = 0; r < this.children.length; r++) {
        let c = this.children[r], f = a + c.length;
        if (t >= a && e <= f) {
          let h = c.replace(t - a, e - a, n), g = this.lines - c.lines + h.lines;
          if (h.lines < g >> 4 && h.lines > g >> 6) {
            let p = this.children.slice();
            return p[r] = h, new Gi(p, this.length - (e - t) + n.length);
          }
          return super.replace(a, f, h);
        }
        a = f + 1;
      }
      return super.replace(t, e, n);
    }
    sliceString(t, e = this.length, n = `
`) {
      [t, e] = Gs(this, t, e);
      let r = "";
      for (let a = 0, c = 0; a < this.children.length && c <= e; a++) {
        let f = this.children[a], h = c + f.length;
        c > t && a && (r += n), t < h && e > c && (r += f.sliceString(t - c, e - c, n)), c = h + 1;
      }
      return r;
    }
    flatten(t) {
      for (let e of this.children) e.flatten(t);
    }
    scanIdentical(t, e) {
      if (!(t instanceof Gi)) return 0;
      let n = 0, [r, a, c, f] = e > 0 ? [
        0,
        0,
        this.children.length,
        t.children.length
      ] : [
        this.children.length - 1,
        t.children.length - 1,
        -1,
        -1
      ];
      for (; ; r += e, a += e) {
        if (r == c || a == f) return n;
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
      let r = Math.max(32, n >> 5), a = r << 1, c = r >> 1, f = [], h = 0, g = -1, p = [];
      function y(S) {
        let w;
        if (S.lines > a && S instanceof Gi) for (let A of S.children) y(A);
        else S.lines > c && (h > c || !h) ? (v(), f.push(S)) : S instanceof se && h && (w = p[p.length - 1]) instanceof se && S.lines + w.lines <= 32 ? (h += S.lines, g += S.length + 1, p[p.length - 1] = new se(w.text.concat(S.text), w.length + 1 + S.length)) : (h + S.lines > r && v(), h += S.lines, g += S.length + 1, p.push(S));
      }
      function v() {
        h != 0 && (f.push(p.length == 1 ? p[0] : Gi.from(p, g)), g = -1, h = p.length = 0);
      }
      for (let S of t) y(S);
      return v(), f.length == 1 ? f[0] : new Gi(f, e);
    }
  }
  Rt.empty = new se([
    ""
  ], 0);
  function iM(l) {
    let t = -1;
    for (let e of l) t += e.length + 1;
    return t;
  }
  function Dc(l, t, e = 0, n = 1e9) {
    for (let r = 0, a = 0, c = true; a < l.length && r <= n; a++) {
      let f = l[a], h = r + f.length;
      h >= e && (h > n && (f = f.slice(0, n - r)), r < e && (f = f.slice(e - r)), c ? (t[t.length - 1] += f, c = false) : t.push(f)), r = h + 1;
    }
    return t;
  }
  function gb(l, t, e) {
    return Dc(l, [
      ""
    ], t, e);
  }
  class ra {
    constructor(t, e = 1) {
      this.dir = e, this.done = false, this.lineBreak = false, this.value = "", this.nodes = [
        t
      ], this.offsets = [
        e > 0 ? 1 : (t instanceof se ? t.text.length : t.children.length) << 1
      ];
    }
    nextInner(t, e) {
      for (this.done = this.lineBreak = false; ; ) {
        let n = this.nodes.length - 1, r = this.nodes[n], a = this.offsets[n], c = a >> 1, f = r instanceof se ? r.text.length : r.children.length;
        if (c == (e > 0 ? f : 0)) {
          if (n == 0) return this.done = true, this.value = "", this;
          e > 0 && this.offsets[n - 1]++, this.nodes.pop(), this.offsets.pop();
        } else if ((a & 1) == (e > 0 ? 0 : 1)) {
          if (this.offsets[n] += e, t == 0) return this.lineBreak = true, this.value = `
`, this;
          t--;
        } else if (r instanceof se) {
          let h = r.text[c + (e < 0 ? -1 : 0)];
          if (this.offsets[n] += e, h.length > Math.max(0, t)) return this.value = t == 0 ? h : e > 0 ? h.slice(t) : h.slice(0, h.length - t), this;
          t -= h.length;
        } else {
          let h = r.children[c + (e < 0 ? -1 : 0)];
          t > h.length ? (t -= h.length, this.offsets[n] += e) : (e < 0 && this.offsets[n]--, this.nodes.push(h), this.offsets.push(e > 0 ? 1 : (h instanceof se ? h.text.length : h.children.length) << 1));
        }
      }
    }
    next(t = 0) {
      return t < 0 && (this.nextInner(-t, -this.dir), t = this.value.length), this.nextInner(t, this.dir);
    }
  }
  class fv {
    constructor(t, e, n) {
      this.value = "", this.done = false, this.cursor = new ra(t, e > n ? -1 : 1), this.pos = e > n ? t.length : 0, this.from = Math.min(e, n), this.to = Math.max(e, n);
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
  class hv {
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
  }, ra.prototype[Symbol.iterator] = fv.prototype[Symbol.iterator] = hv.prototype[Symbol.iterator] = function() {
    return this;
  });
  class nM {
    constructor(t, e, n, r) {
      this.from = t, this.to = e, this.number = n, this.text = r;
    }
    get length() {
      return this.to - this.from;
    }
  }
  function Gs(l, t, e) {
    return t = Math.max(0, Math.min(l.length, t)), [
      t,
      Math.max(t, Math.min(l.length, e))
    ];
  }
  function _e(l, t, e = true, n = true) {
    return tM(l, t, e, n);
  }
  function lM(l) {
    return l >= 56320 && l < 57344;
  }
  function sM(l) {
    return l >= 55296 && l < 56320;
  }
  function Ze(l, t) {
    let e = l.charCodeAt(t);
    if (!sM(e) || t + 1 == l.length) return e;
    let n = l.charCodeAt(t + 1);
    return lM(n) ? (e - 55296 << 10) + (n - 56320) + 65536 : e;
  }
  function Cm(l) {
    return l <= 65535 ? String.fromCharCode(l) : (l -= 65536, String.fromCharCode((l >> 10) + 55296, (l & 1023) + 56320));
  }
  function Xi(l) {
    return l < 65536 ? 1 : 2;
  }
  const Td = /\r\n?|\n/;
  var He = (function(l) {
    return l[l.Simple = 0] = "Simple", l[l.TrackDel = 1] = "TrackDel", l[l.TrackBefore = 2] = "TrackBefore", l[l.TrackAfter = 3] = "TrackAfter", l;
  })(He || (He = {}));
  class Fi {
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
        let a = this.sections[e++], c = this.sections[e++];
        c < 0 ? (t(n, r, a), r += a) : r += c, n += a;
      }
    }
    iterChangedRanges(t, e = false) {
      Od(this, t, e);
    }
    get invertedDesc() {
      let t = [];
      for (let e = 0; e < this.sections.length; ) {
        let n = this.sections[e++], r = this.sections[e++];
        r < 0 ? t.push(n, r) : t.push(r, n);
      }
      return new Fi(t);
    }
    composeDesc(t) {
      return this.empty ? t : t.empty ? this : dv(this, t);
    }
    mapDesc(t, e = false) {
      return t.empty ? this : Dd(this, t, e);
    }
    mapPos(t, e = -1, n = He.Simple) {
      let r = 0, a = 0;
      for (let c = 0; c < this.sections.length; ) {
        let f = this.sections[c++], h = this.sections[c++], g = r + f;
        if (h < 0) {
          if (g > t) return a + (t - r);
          a += f;
        } else {
          if (n != He.Simple && g >= t && (n == He.TrackDel && r < t && g > t || n == He.TrackBefore && r < t || n == He.TrackAfter && g > t)) return null;
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
        let a = this.sections[n++], c = this.sections[n++], f = r + a;
        if (c >= 0 && r <= e && f >= t) return r < t && f > e ? "cover" : true;
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
      return new Fi(t);
    }
    static create(t) {
      return new Fi(t);
    }
  }
  class de extends Fi {
    constructor(t, e) {
      super(t), this.inserted = e;
    }
    apply(t) {
      if (this.length != t.length) throw new RangeError("Applying change set to a document with the wrong length");
      return Od(this, (e, n, r, a, c) => t = t.replace(r, r + (n - e), c), false), t;
    }
    mapDesc(t, e = false) {
      return Dd(this, t, e, true);
    }
    invert(t) {
      let e = this.sections.slice(), n = [];
      for (let r = 0, a = 0; r < e.length; r += 2) {
        let c = e[r], f = e[r + 1];
        if (f >= 0) {
          e[r] = f, e[r + 1] = c;
          let h = r >> 1;
          for (; n.length < h; ) n.push(Rt.empty);
          n.push(c ? t.slice(a, a + c) : Rt.empty);
        }
        a += c;
      }
      return new de(e, n);
    }
    compose(t) {
      return this.empty ? t : t.empty ? this : dv(this, t, true);
    }
    map(t, e = false) {
      return t.empty ? this : Dd(this, t, e, true);
    }
    iterChanges(t, e = false) {
      Od(this, t, e);
    }
    get desc() {
      return Fi.create(this.sections);
    }
    filter(t) {
      let e = [], n = [], r = [], a = new da(this);
      t: for (let c = 0, f = 0; ; ) {
        let h = c == t.length ? 1e9 : t[c++];
        for (; f < h || f == h && a.len == 0; ) {
          if (a.done) break t;
          let p = Math.min(a.len, h - f);
          Oe(r, p, -1);
          let y = a.ins == -1 ? -1 : a.off == 0 ? a.ins : 0;
          Oe(e, p, y), y > 0 && tl(n, e, a.text), a.forward(p), f += p;
        }
        let g = t[c++];
        for (; f < g; ) {
          if (a.done) break t;
          let p = Math.min(a.len, g - f);
          Oe(e, p, -1), Oe(r, p, a.ins == -1 ? -1 : a.off == 0 ? a.ins : 0), a.forward(p), f += p;
        }
      }
      return {
        changes: new de(e, n),
        filtered: Fi.create(r)
      };
    }
    toJSON() {
      let t = [];
      for (let e = 0; e < this.sections.length; e += 2) {
        let n = this.sections[e], r = this.sections[e + 1];
        r < 0 ? t.push(n) : r == 0 ? t.push([
          n
        ]) : t.push([
          n
        ].concat(this.inserted[e >> 1].toJSON()));
      }
      return t;
    }
    static of(t, e, n) {
      let r = [], a = [], c = 0, f = null;
      function h(p = false) {
        if (!p && !r.length) return;
        c < e && Oe(r, e - c, -1);
        let y = new de(r, a);
        f = f ? f.compose(y.map(f)) : y, r = [], a = [], c = 0;
      }
      function g(p) {
        if (Array.isArray(p)) for (let y of p) g(y);
        else if (p instanceof de) {
          if (p.length != e) throw new RangeError(`Mismatched change set length (got ${p.length}, expected ${e})`);
          h(), f = f ? f.compose(p.map(f)) : p;
        } else {
          let { from: y, to: v = y, insert: S } = p;
          if (y > v || y < 0 || v > e) throw new RangeError(`Invalid change range ${y} to ${v} (in doc of length ${e})`);
          let w = S ? typeof S == "string" ? Rt.of(S.split(n || Td)) : S : Rt.empty, A = w.length;
          if (y == v && A == 0) return;
          y < c && h(), y > c && Oe(r, y - c, -1), Oe(r, v - y, A), tl(a, r, w), c = v;
        }
      }
      return g(t), h(!f), f;
    }
    static empty(t) {
      return new de(t ? [
        t,
        -1
      ] : [], []);
    }
    static fromJSON(t) {
      if (!Array.isArray(t)) throw new RangeError("Invalid JSON representation of ChangeSet");
      let e = [], n = [];
      for (let r = 0; r < t.length; r++) {
        let a = t[r];
        if (typeof a == "number") e.push(a, -1);
        else {
          if (!Array.isArray(a) || typeof a[0] != "number" || a.some((c, f) => f && typeof c != "string")) throw new RangeError("Invalid JSON representation of ChangeSet");
          if (a.length == 1) e.push(a[0], 0);
          else {
            for (; n.length < r; ) n.push(Rt.empty);
            n[r] = Rt.of(a.slice(1)), e.push(a[0], n[r].length);
          }
        }
      }
      return new de(e, n);
    }
    static createSet(t, e) {
      return new de(t, e);
    }
  }
  function Oe(l, t, e, n = false) {
    if (t == 0 && e <= 0) return;
    let r = l.length - 2;
    r >= 0 && e <= 0 && e == l[r + 1] ? l[r] += t : r >= 0 && t == 0 && l[r] == 0 ? l[r + 1] += e : n ? (l[r] += t, l[r + 1] += e) : l.push(t, e);
  }
  function tl(l, t, e) {
    if (e.length == 0) return;
    let n = t.length - 2 >> 1;
    if (n < l.length) l[l.length - 1] = l[l.length - 1].append(e);
    else {
      for (; l.length < n; ) l.push(Rt.empty);
      l.push(e);
    }
  }
  function Od(l, t, e) {
    let n = l.inserted;
    for (let r = 0, a = 0, c = 0; c < l.sections.length; ) {
      let f = l.sections[c++], h = l.sections[c++];
      if (h < 0) r += f, a += f;
      else {
        let g = r, p = a, y = Rt.empty;
        for (; g += f, p += h, h && n && (y = y.append(n[c - 2 >> 1])), !(e || c == l.sections.length || l.sections[c + 1] < 0); ) f = l.sections[c++], h = l.sections[c++];
        t(r, g, a, p, y), r = g, a = p;
      }
    }
  }
  function Dd(l, t, e, n = false) {
    let r = [], a = n ? [] : null, c = new da(l), f = new da(t);
    for (let h = -1; ; ) {
      if (c.done && f.len || f.done && c.len) throw new Error("Mismatched change set lengths");
      if (c.ins == -1 && f.ins == -1) {
        let g = Math.min(c.len, f.len);
        Oe(r, g, -1), c.forward(g), f.forward(g);
      } else if (f.ins >= 0 && (c.ins < 0 || h == c.i || c.off == 0 && (f.len < c.len || f.len == c.len && !e))) {
        let g = f.len;
        for (Oe(r, f.ins, -1); g; ) {
          let p = Math.min(c.len, g);
          c.ins >= 0 && h < c.i && c.len <= p && (Oe(r, 0, c.ins), a && tl(a, r, c.text), h = c.i), c.forward(p), g -= p;
        }
        f.next();
      } else if (c.ins >= 0) {
        let g = 0, p = c.len;
        for (; p; ) if (f.ins == -1) {
          let y = Math.min(p, f.len);
          g += y, p -= y, f.forward(y);
        } else if (f.ins == 0 && f.len < p) p -= f.len, f.next();
        else break;
        Oe(r, g, h < c.i ? c.ins : 0), a && h < c.i && tl(a, r, c.text), h = c.i, c.forward(c.len - p);
      } else {
        if (c.done && f.done) return a ? de.createSet(r, a) : Fi.create(r);
        throw new Error("Mismatched change set lengths");
      }
    }
  }
  function dv(l, t, e = false) {
    let n = [], r = e ? [] : null, a = new da(l), c = new da(t);
    for (let f = false; ; ) {
      if (a.done && c.done) return r ? de.createSet(n, r) : Fi.create(n);
      if (a.ins == 0) Oe(n, a.len, 0, f), a.next();
      else if (c.len == 0 && !c.done) Oe(n, 0, c.ins, f), r && tl(r, n, c.text), c.next();
      else {
        if (a.done || c.done) throw new Error("Mismatched change set lengths");
        {
          let h = Math.min(a.len2, c.len), g = n.length;
          if (a.ins == -1) {
            let p = c.ins == -1 ? -1 : c.off ? 0 : c.ins;
            Oe(n, h, p, f), r && p && tl(r, n, c.text);
          } else c.ins == -1 ? (Oe(n, a.off ? 0 : a.len, h, f), r && tl(r, n, a.textBit(h))) : (Oe(n, a.off ? 0 : a.len, c.off ? 0 : c.ins, f), r && !c.off && tl(r, n, c.text));
          f = (a.ins > h || c.ins >= 0 && c.len > h) && (f || n.length > g), a.forward2(h), c.forward(h);
        }
      }
    }
  }
  class da {
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
  class zl {
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
      return this.empty ? n = r = t.mapPos(this.from, e) : (n = t.mapPos(this.from, 1), r = t.mapPos(this.to, -1)), n == this.from && r == this.to ? this : new zl(n, r, this.flags);
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
      return {
        anchor: this.anchor,
        head: this.head
      };
    }
    static fromJSON(t) {
      if (!t || typeof t.anchor != "number" || typeof t.head != "number") throw new RangeError("Invalid JSON representation for SelectionRange");
      return K.range(t.anchor, t.head);
    }
    static create(t, e, n) {
      return new zl(t, e, n);
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
      return this.ranges.length == 1 ? this : new K([
        this.main
      ], 0);
    }
    addRange(t, e = true) {
      return K.create([
        t
      ].concat(this.ranges), e ? 0 : this.mainIndex + 1);
    }
    replaceRange(t, e = this.mainIndex) {
      let n = this.ranges.slice();
      return n[e] = t, K.create(n, this.mainIndex);
    }
    toJSON() {
      return {
        ranges: this.ranges.map((t) => t.toJSON()),
        main: this.mainIndex
      };
    }
    static fromJSON(t) {
      if (!t || !Array.isArray(t.ranges) || typeof t.main != "number" || t.main >= t.ranges.length) throw new RangeError("Invalid JSON representation for EditorSelection");
      return new K(t.ranges.map((e) => zl.fromJSON(e)), t.main);
    }
    static single(t, e = t) {
      return new K([
        K.range(t, e)
      ], 0);
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
      return zl.create(t, t, (e == 0 ? 0 : e < 0 ? 8 : 16) | (n == null ? 7 : Math.min(6, n)) | (r ?? 16777215) << 6);
    }
    static range(t, e, n, r) {
      let a = (n ?? 16777215) << 6 | (r == null ? 7 : Math.min(6, r));
      return e < t ? zl.create(e, t, 48 | a) : zl.create(t, e, (e > t ? 8 : 0) | a);
    }
    static normalized(t, e = 0) {
      let n = t[e];
      t.sort((r, a) => r.from - a.from), e = t.indexOf(n);
      for (let r = 1; r < t.length; r++) {
        let a = t[r], c = t[r - 1];
        if (a.empty ? a.from <= c.to : a.from < c.to) {
          let f = c.from, h = Math.max(a.to, c.to);
          r <= e && e--, t.splice(--r, 2, a.anchor > a.head ? K.range(h, f) : K.range(f, h));
        }
      }
      return new K(t, e);
    }
  }
  function mv(l, t) {
    for (let e of l.ranges) if (e.to > t) throw new RangeError("Selection points outside of document");
  }
  let Mm = 0;
  class et {
    constructor(t, e, n, r, a) {
      this.combine = t, this.compareInput = e, this.compare = n, this.isStatic = r, this.id = Mm++, this.default = t([]), this.extensions = typeof a == "function" ? a(this) : a;
    }
    get reader() {
      return this;
    }
    static define(t = {}) {
      return new et(t.combine || ((e) => e), t.compareInput || ((e, n) => e === n), t.compare || (t.combine ? (e, n) => e === n : _m), !!t.static, t.enables);
    }
    of(t) {
      return new Ec([], this, 0, t);
    }
    compute(t, e) {
      if (this.isStatic) throw new Error("Can't compute a static facet");
      return new Ec(t, this, 1, e);
    }
    computeN(t, e) {
      if (this.isStatic) throw new Error("Can't compute a static facet");
      return new Ec(t, this, 2, e);
    }
    from(t, e) {
      return e || (e = (n) => n), this.compute([
        t
      ], (n) => e(n.field(t)));
    }
  }
  function _m(l, t) {
    return l == t || l.length == t.length && l.every((e, n) => e === t[n]);
  }
  class Ec {
    constructor(t, e, n, r) {
      this.dependencies = t, this.facet = e, this.type = n, this.value = r, this.id = Mm++;
    }
    dynamicSlot(t) {
      var e;
      let n = this.value, r = this.facet.compareInput, a = this.id, c = t[a] >> 1, f = this.type == 2, h = false, g = false, p = [];
      for (let y of this.dependencies) y == "doc" ? h = true : y == "selection" ? g = true : (((e = t[y.id]) !== null && e !== void 0 ? e : 1) & 1) == 0 && p.push(t[y.id]);
      return {
        create(y) {
          return y.values[c] = n(y), 1;
        },
        update(y, v) {
          if (h && v.docChanged || g && (v.docChanged || v.selection) || Ed(y, p)) {
            let S = n(y);
            if (f ? !pb(S, y.values[c], r) : !r(S, y.values[c])) return y.values[c] = S, 1;
          }
          return 0;
        },
        reconfigure: (y, v) => {
          let S, w = v.config.address[a];
          if (w != null) {
            let A = Gc(v, w);
            if (this.dependencies.every((_) => _ instanceof et ? v.facet(_) === y.facet(_) : _ instanceof ke ? v.field(_, false) == y.field(_, false) : true) || (f ? pb(S = n(y), A, r) : r(S = n(y), A))) return y.values[c] = A, 0;
          } else S = n(y);
          return y.values[c] = S, 1;
        }
      };
    }
  }
  function pb(l, t, e) {
    if (l.length != t.length) return false;
    for (let n = 0; n < l.length; n++) if (!e(l[n], t[n])) return false;
    return true;
  }
  function Ed(l, t) {
    let e = false;
    for (let n of t) aa(l, n) & 1 && (e = true);
    return e;
  }
  function rM(l, t, e) {
    let n = e.map((h) => l[h.id]), r = e.map((h) => h.type), a = n.filter((h) => !(h & 1)), c = l[t.id] >> 1;
    function f(h) {
      let g = [];
      for (let p = 0; p < n.length; p++) {
        let y = Gc(h, n[p]);
        if (r[p] == 2) for (let v of y) g.push(v);
        else g.push(y);
      }
      return t.combine(g);
    }
    return {
      create(h) {
        for (let g of n) aa(h, g);
        return h.values[c] = f(h), 1;
      },
      update(h, g) {
        if (!Ed(h, a)) return 0;
        let p = f(h);
        return t.compare(p, h.values[c]) ? 0 : (h.values[c] = p, 1);
      },
      reconfigure(h, g) {
        let p = Ed(h, n), y = g.config.facets[t.id], v = g.facet(t);
        if (y && !p && _m(e, y)) return h.values[c] = v, 0;
        let S = f(h);
        return t.compare(S, v) ? (h.values[c] = v, 0) : (h.values[c] = S, 1);
      }
    };
  }
  const lc = et.define({
    static: true
  });
  class ke {
    constructor(t, e, n, r, a) {
      this.id = t, this.createF = e, this.updateF = n, this.compareF = r, this.spec = a, this.provides = void 0;
    }
    static define(t) {
      let e = new ke(Mm++, t.create, t.update, t.compare || ((n, r) => n === r), t);
      return t.provide && (e.provides = t.provide(e)), e;
    }
    create(t) {
      let e = t.facet(lc).find((n) => n.field == this);
      return ((e == null ? void 0 : e.create) || this.createF)(t);
    }
    slot(t) {
      let e = t[this.id] >> 1;
      return {
        create: (n) => (n.values[e] = this.create(n), 1),
        update: (n, r) => {
          let a = n.values[e], c = this.updateF(a, r);
          return this.compareF(a, c) ? 0 : (n.values[e] = c, 1);
        },
        reconfigure: (n, r) => {
          let a = n.facet(lc), c = r.facet(lc), f;
          return (f = a.find((h) => h.field == this)) && f != c.find((h) => h.field == this) ? (n.values[e] = f.create(n), 1) : r.config.address[this.id] != null ? (n.values[e] = r.field(this), 0) : (n.values[e] = this.create(n), 1);
        }
      };
    }
    init(t) {
      return [
        this,
        lc.of({
          field: this,
          create: t
        })
      ];
    }
    get extension() {
      return this;
    }
  }
  const Bl = {
    lowest: 4,
    low: 3,
    default: 2,
    high: 1,
    highest: 0
  };
  function Jr(l) {
    return (t) => new gv(t, l);
  }
  const Gl = {
    highest: Jr(Bl.highest),
    high: Jr(Bl.high),
    default: Jr(Bl.default),
    low: Jr(Bl.low),
    lowest: Jr(Bl.lowest)
  };
  class gv {
    constructor(t, e) {
      this.inner = t, this.prec = e;
    }
  }
  class fu {
    of(t) {
      return new Bd(this, t);
    }
    reconfigure(t) {
      return fu.reconfigure.of({
        compartment: this,
        extension: t
      });
    }
    get(t) {
      return t.config.compartments.get(this);
    }
  }
  class Bd {
    constructor(t, e) {
      this.compartment = t, this.inner = e;
    }
  }
  class Yc {
    constructor(t, e, n, r, a, c) {
      for (this.base = t, this.compartments = e, this.dynamicSlots = n, this.address = r, this.staticValues = a, this.facets = c, this.statusTemplate = []; this.statusTemplate.length < n.length; ) this.statusTemplate.push(0);
    }
    staticFacet(t) {
      let e = this.address[t.id];
      return e == null ? t.default : this.staticValues[e >> 1];
    }
    static resolve(t, e, n) {
      let r = [], a = /* @__PURE__ */ Object.create(null), c = /* @__PURE__ */ new Map();
      for (let v of aM(t, e, c)) v instanceof ke ? r.push(v) : (a[v.facet.id] || (a[v.facet.id] = [])).push(v);
      let f = /* @__PURE__ */ Object.create(null), h = [], g = [];
      for (let v of r) f[v.id] = g.length << 1, g.push((S) => v.slot(S));
      let p = n == null ? void 0 : n.config.facets;
      for (let v in a) {
        let S = a[v], w = S[0].facet, A = p && p[v] || [];
        if (S.every((_) => _.type == 0)) if (f[w.id] = h.length << 1 | 1, _m(A, S)) h.push(n.facet(w));
        else {
          let _ = w.combine(S.map((T) => T.value));
          h.push(n && w.compare(_, n.facet(w)) ? n.facet(w) : _);
        }
        else {
          for (let _ of S) _.type == 0 ? (f[_.id] = h.length << 1 | 1, h.push(_.value)) : (f[_.id] = g.length << 1, g.push((T) => _.dynamicSlot(T)));
          f[w.id] = g.length << 1, g.push((_) => rM(_, w, S));
        }
      }
      let y = g.map((v) => v(f));
      return new Yc(t, c, y, f, h, a);
    }
  }
  function aM(l, t, e) {
    let n = [
      [],
      [],
      [],
      [],
      []
    ], r = /* @__PURE__ */ new Map();
    function a(c, f) {
      let h = r.get(c);
      if (h != null) {
        if (h <= f) return;
        let g = n[h].indexOf(c);
        g > -1 && n[h].splice(g, 1), c instanceof Bd && e.delete(c.compartment);
      }
      if (r.set(c, f), Array.isArray(c)) for (let g of c) a(g, f);
      else if (c instanceof Bd) {
        if (e.has(c.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
        let g = t.get(c.compartment) || c.inner;
        e.set(c.compartment, g), a(g, f);
      } else if (c instanceof gv) a(c.inner, c.prec);
      else if (c instanceof ke) n[f].push(c), c.provides && a(c.provides, f);
      else if (c instanceof Ec) n[f].push(c), c.facet.extensions && a(c.facet.extensions, Bl.default);
      else {
        let g = c.extension;
        if (!g) throw new Error(`Unrecognized extension value in extension set (${c}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
        a(g, f);
      }
    }
    return a(l, Bl.default), n.reduce((c, f) => c.concat(f));
  }
  function aa(l, t) {
    if (t & 1) return 2;
    let e = t >> 1, n = l.status[e];
    if (n == 4) throw new Error("Cyclic dependency between fields and/or facets");
    if (n & 2) return n;
    l.status[e] = 4;
    let r = l.computeSlot(l, l.config.dynamicSlots[e]);
    return l.status[e] = 2 | r;
  }
  function Gc(l, t) {
    return t & 1 ? l.config.staticValues[t >> 1] : l.values[t >> 1];
  }
  const pv = et.define(), Rd = et.define({
    combine: (l) => l.some((t) => t),
    static: true
  }), yv = et.define({
    combine: (l) => l.length ? l[0] : void 0,
    static: true
  }), bv = et.define(), vv = et.define(), Sv = et.define(), xv = et.define({
    combine: (l) => l.length ? l[0] : false
  });
  class Ii {
    constructor(t, e) {
      this.type = t, this.value = e;
    }
    static define() {
      return new oM();
    }
  }
  class oM {
    of(t) {
      return new Ii(this, t);
    }
  }
  class cM {
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
      return new cM(t.map || ((e) => e));
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
  class me {
    constructor(t, e, n, r, a, c) {
      this.startState = t, this.changes = e, this.selection = n, this.effects = r, this.annotations = a, this.scrollIntoView = c, this._doc = null, this._state = null, n && mv(n, e.newLength), a.some((f) => f.type == me.time) || (this.annotations = a.concat(me.time.of(Date.now())));
    }
    static create(t, e, n, r, a, c) {
      return new me(t, e, n, r, a, c);
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
      let e = this.annotation(me.userEvent);
      return !!(e && (e == t || e.length > t.length && e.slice(0, t.length) == t && e[t.length] == "."));
    }
  }
  me.time = Ii.define();
  me.userEvent = Ii.define();
  me.addToHistory = Ii.define();
  me.remote = Ii.define();
  function uM(l, t) {
    let e = [];
    for (let n = 0, r = 0; ; ) {
      let a, c;
      if (n < l.length && (r == t.length || t[r] >= l[n])) a = l[n++], c = l[n++];
      else if (r < t.length) a = t[r++], c = t[r++];
      else return e;
      !e.length || e[e.length - 1] < a ? e.push(a, c) : e[e.length - 1] < c && (e[e.length - 1] = c);
    }
  }
  function wv(l, t, e) {
    var n;
    let r, a, c;
    return e ? (r = t.changes, a = de.empty(t.changes.length), c = l.changes.compose(t.changes)) : (r = t.changes.map(l.changes), a = l.changes.mapDesc(t.changes, true), c = l.changes.compose(r)), {
      changes: c,
      selection: t.selection ? t.selection.map(a) : (n = l.selection) === null || n === void 0 ? void 0 : n.map(r),
      effects: St.mapEffects(l.effects, r).concat(St.mapEffects(t.effects, a)),
      annotations: l.annotations.length ? l.annotations.concat(t.annotations) : t.annotations,
      scrollIntoView: l.scrollIntoView || t.scrollIntoView
    };
  }
  function zd(l, t, e) {
    let n = t.selection, r = Ns(t.annotations);
    return t.userEvent && (r = r.concat(me.userEvent.of(t.userEvent))), {
      changes: t.changes instanceof de ? t.changes : de.of(t.changes || [], e, l.facet(yv)),
      selection: n && (n instanceof K ? n : K.single(n.anchor, n.head)),
      effects: Ns(t.effects),
      annotations: r,
      scrollIntoView: !!t.scrollIntoView
    };
  }
  function Av(l, t, e) {
    let n = zd(l, t.length ? t[0] : {}, l.doc.length);
    t.length && t[0].filter === false && (e = false);
    for (let a = 1; a < t.length; a++) {
      t[a].filter === false && (e = false);
      let c = !!t[a].sequential;
      n = wv(n, zd(l, t[a], c ? n.changes.newLength : l.doc.length), c);
    }
    let r = me.create(l, n.changes, n.selection, n.effects, n.annotations, n.scrollIntoView);
    return hM(e ? fM(r) : r);
  }
  function fM(l) {
    let t = l.startState, e = true;
    for (let r of t.facet(bv)) {
      let a = r(l);
      if (a === false) {
        e = false;
        break;
      }
      Array.isArray(a) && (e = e === true ? a : uM(e, a));
    }
    if (e !== true) {
      let r, a;
      if (e === false) a = l.changes.invertedDesc, r = de.empty(t.doc.length);
      else {
        let c = l.changes.filter(e);
        r = c.changes, a = c.filtered.mapDesc(c.changes).invertedDesc;
      }
      l = me.create(t, r, l.selection && l.selection.map(a), St.mapEffects(l.effects, a), l.annotations, l.scrollIntoView);
    }
    let n = t.facet(vv);
    for (let r = n.length - 1; r >= 0; r--) {
      let a = n[r](l);
      a instanceof me ? l = a : Array.isArray(a) && a.length == 1 && a[0] instanceof me ? l = a[0] : l = Av(t, Ns(a), false);
    }
    return l;
  }
  function hM(l) {
    let t = l.startState, e = t.facet(Sv), n = l;
    for (let r = e.length - 1; r >= 0; r--) {
      let a = e[r](l);
      a && Object.keys(a).length && (n = wv(n, zd(t, a, l.changes.newLength), true));
    }
    return n == l ? l : me.create(t, l.changes, l.selection, n.effects, n.annotations, n.scrollIntoView);
  }
  const dM = [];
  function Ns(l) {
    return l == null ? dM : Array.isArray(l) ? l : [
      l
    ];
  }
  var It = (function(l) {
    return l[l.Word = 0] = "Word", l[l.Space = 1] = "Space", l[l.Other = 2] = "Other", l;
  })(It || (It = {}));
  const mM = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
  let Nd;
  try {
    Nd = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
  } catch {
  }
  function gM(l) {
    if (Nd) return Nd.test(l);
    for (let t = 0; t < l.length; t++) {
      let e = l[t];
      if (/\w/.test(e) || e > "\x80" && (e.toUpperCase() != e.toLowerCase() || mM.test(e))) return true;
    }
    return false;
  }
  function pM(l) {
    return (t) => {
      if (!/\S/.test(t)) return It.Space;
      if (gM(t)) return It.Word;
      for (let e = 0; e < l.length; e++) if (t.indexOf(l[e]) > -1) return It.Word;
      return It.Other;
    };
  }
  class Ot {
    constructor(t, e, n, r, a, c) {
      this.config = t, this.doc = e, this.selection = n, this.values = r, this.status = t.statusTemplate.slice(), this.computeSlot = a, c && (c._state = this);
      for (let f = 0; f < this.config.dynamicSlots.length; f++) aa(this, f << 1);
      this.computeSlot = null;
    }
    field(t, e = true) {
      let n = this.config.address[t.id];
      if (n == null) {
        if (e) throw new RangeError("Field is not present in this state");
        return;
      }
      return aa(this, n), Gc(this, n);
    }
    update(...t) {
      return Av(this, t, true);
    }
    applyTransaction(t) {
      let e = this.config, { base: n, compartments: r } = e;
      for (let f of t.effects) f.is(fu.reconfigure) ? (e && (r = /* @__PURE__ */ new Map(), e.compartments.forEach((h, g) => r.set(g, h)), e = null), r.set(f.value.compartment, f.value.extension)) : f.is(St.reconfigure) ? (e = null, n = f.value) : f.is(St.appendConfig) && (e = null, n = Ns(n).concat(f.value));
      let a;
      e ? a = t.startState.values.slice() : (e = Yc.resolve(n, r, this), a = new Ot(e, this.doc, this.selection, e.dynamicSlots.map(() => null), (h, g) => g.reconfigure(h, this), null).values);
      let c = t.startState.facet(Rd) ? t.newSelection : t.newSelection.asSingle();
      new Ot(e, t.newDoc, c, a, (f, h) => h.update(f, t), t);
    }
    replaceSelection(t) {
      return typeof t == "string" && (t = this.toText(t)), this.changeByRange((e) => ({
        changes: {
          from: e.from,
          to: e.to,
          insert: t
        },
        range: K.cursor(e.from + t.length)
      }));
    }
    changeByRange(t) {
      let e = this.selection, n = t(e.ranges[0]), r = this.changes(n.changes), a = [
        n.range
      ], c = Ns(n.effects);
      for (let f = 1; f < e.ranges.length; f++) {
        let h = t(e.ranges[f]), g = this.changes(h.changes), p = g.map(r);
        for (let v = 0; v < f; v++) a[v] = a[v].map(p);
        let y = r.mapDesc(g, true);
        a.push(h.range.map(y)), r = r.compose(p), c = St.mapEffects(c, p).concat(St.mapEffects(Ns(h.effects), y));
      }
      return {
        changes: r,
        selection: K.create(a, e.mainIndex),
        effects: c
      };
    }
    changes(t = []) {
      return t instanceof de ? t : de.of(t, this.doc.length, this.facet(Ot.lineSeparator));
    }
    toText(t) {
      return Rt.of(t.split(this.facet(Ot.lineSeparator) || Td));
    }
    sliceDoc(t = 0, e = this.doc.length) {
      return this.doc.sliceString(t, e, this.lineBreak);
    }
    facet(t) {
      let e = this.config.address[t.id];
      return e == null ? t.default : (aa(this, e), Gc(this, e));
    }
    toJSON(t) {
      let e = {
        doc: this.sliceDoc(),
        selection: this.selection.toJSON()
      };
      if (t) for (let n in t) {
        let r = t[n];
        r instanceof ke && this.config.address[r.id] != null && (e[n] = r.spec.toJSON(this.field(t[n]), this));
      }
      return e;
    }
    static fromJSON(t, e = {}, n) {
      if (!t || typeof t.doc != "string") throw new RangeError("Invalid JSON representation for EditorState");
      let r = [];
      if (n) {
        for (let a in n) if (Object.prototype.hasOwnProperty.call(t, a)) {
          let c = n[a], f = t[a];
          r.push(c.init((h) => c.spec.fromJSON(f, h)));
        }
      }
      return Ot.create({
        doc: t.doc,
        selection: K.fromJSON(t.selection),
        extensions: e.extensions ? r.concat([
          e.extensions
        ]) : r
      });
    }
    static create(t = {}) {
      let e = Yc.resolve(t.extensions || [], /* @__PURE__ */ new Map()), n = t.doc instanceof Rt ? t.doc : Rt.of((t.doc || "").split(e.staticFacet(Ot.lineSeparator) || Td)), r = t.selection ? t.selection instanceof K ? t.selection : K.single(t.selection.anchor, t.selection.head) : K.single(0);
      return mv(r, n.length), e.staticFacet(Rd) || (r = r.asSingle()), new Ot(e, n, r, e.dynamicSlots.map(() => null), (a, c) => c.create(a), null);
    }
    get tabSize() {
      return this.facet(Ot.tabSize);
    }
    get lineBreak() {
      return this.facet(Ot.lineSeparator) || `
`;
    }
    get readOnly() {
      return this.facet(xv);
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
      for (let a of this.facet(pv)) for (let c of a(this, e, n)) Object.prototype.hasOwnProperty.call(c, t) && r.push(c[t]);
      return r;
    }
    charCategorizer(t) {
      return pM(this.languageDataAt("wordChars", t).join(""));
    }
    wordAt(t) {
      let { text: e, from: n, length: r } = this.doc.lineAt(t), a = this.charCategorizer(t), c = t - n, f = t - n;
      for (; c > 0; ) {
        let h = _e(e, c, false);
        if (a(e.slice(h, c)) != It.Word) break;
        c = h;
      }
      for (; f < r; ) {
        let h = _e(e, f);
        if (a(e.slice(f, h)) != It.Word) break;
        f = h;
      }
      return c == f ? null : K.range(c + n, f + n);
    }
  }
  Ot.allowMultipleSelections = Rd;
  Ot.tabSize = et.define({
    combine: (l) => l.length ? l[0] : 4
  });
  Ot.lineSeparator = yv;
  Ot.readOnly = xv;
  Ot.phrases = et.define({
    compare(l, t) {
      let e = Object.keys(l), n = Object.keys(t);
      return e.length == n.length && e.every((r) => l[r] == t[r]);
    }
  });
  Ot.languageData = pv;
  Ot.changeFilter = bv;
  Ot.transactionFilter = vv;
  Ot.transactionExtender = Sv;
  fu.reconfigure = St.define();
  function $i(l, t, e = {}) {
    let n = {};
    for (let r of l) for (let a of Object.keys(r)) {
      let c = r[a], f = n[a];
      if (f === void 0) n[a] = c;
      else if (!(f === c || c === void 0)) if (Object.hasOwnProperty.call(e, a)) n[a] = e[a](f, c);
      else throw new Error("Config merge conflict for field " + a);
    }
    for (let r in t) n[r] === void 0 && (n[r] = t[r]);
    return n;
  }
  class Ul {
    eq(t) {
      return this == t;
    }
    range(t, e = t) {
      return Ld.create(t, e, this);
    }
  }
  Ul.prototype.startSide = Ul.prototype.endSide = 0;
  Ul.prototype.point = false;
  Ul.prototype.mapMode = He.TrackDel;
  let Ld = class Cv {
    constructor(t, e, n) {
      this.from = t, this.to = e, this.value = n;
    }
    static create(t, e, n) {
      return new Cv(t, e, n);
    }
  };
  function Hd(l, t) {
    return l.from - t.from || l.value.startSide - t.value.startSide;
  }
  class km {
    constructor(t, e, n, r) {
      this.from = t, this.to = e, this.value = n, this.maxPoint = r;
    }
    get length() {
      return this.to[this.to.length - 1];
    }
    findIndex(t, e, n, r = 0) {
      let a = n ? this.to : this.from;
      for (let c = r, f = a.length; ; ) {
        if (c == f) return c;
        let h = c + f >> 1, g = a[h] - t || (n ? this.value[h].endSide : this.value[h].startSide) - e;
        if (h == c) return g >= 0 ? c : f;
        g >= 0 ? f = h : c = h + 1;
      }
    }
    between(t, e, n, r) {
      for (let a = this.findIndex(e, -1e9, true), c = this.findIndex(n, 1e9, false, a); a < c; a++) if (r(this.from[a] + t, this.to[a] + t, this.value[a]) === false) return false;
    }
    map(t, e) {
      let n = [], r = [], a = [], c = -1, f = -1;
      for (let h = 0; h < this.value.length; h++) {
        let g = this.value[h], p = this.from[h] + t, y = this.to[h] + t, v, S;
        if (p == y) {
          let w = e.mapPos(p, g.startSide, g.mapMode);
          if (w == null || (v = S = w, g.startSide != g.endSide && (S = e.mapPos(p, g.endSide), S < v))) continue;
        } else if (v = e.mapPos(p, g.startSide), S = e.mapPos(y, g.endSide), v > S || v == S && g.startSide > 0 && g.endSide <= 0) continue;
        (S - v || g.endSide - g.startSide) < 0 || (c < 0 && (c = v), g.point && (f = Math.max(f, S - v)), n.push(g), r.push(v - c), a.push(S - c));
      }
      return {
        mapped: n.length ? new km(r, a, n, f) : null,
        pos: c
      };
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
      let { add: e = [], sort: n = false, filterFrom: r = 0, filterTo: a = this.length } = t, c = t.filter;
      if (e.length == 0 && !c) return this;
      if (n && (e = e.slice().sort(Hd)), this.isEmpty) return e.length ? Bt.of(e) : this;
      let f = new Mv(this, null, -1).goto(0), h = 0, g = [], p = new wn();
      for (; f.value || h < e.length; ) if (h < e.length && (f.from - e[h].from || f.startSide - e[h].value.startSide) >= 0) {
        let y = e[h++];
        p.addInner(y.from, y.to, y.value) || g.push(y);
      } else f.rangeIndex == 1 && f.chunkIndex < this.chunk.length && (h == e.length || this.chunkEnd(f.chunkIndex) < e[h].from) && (!c || r > this.chunkEnd(f.chunkIndex) || a < this.chunkPos[f.chunkIndex]) && p.addChunk(this.chunkPos[f.chunkIndex], this.chunk[f.chunkIndex]) ? f.nextChunk() : ((!c || r > f.to || a < f.from || c(f.from, f.to, f.value)) && (p.addInner(f.from, f.to, f.value) || g.push(Ld.create(f.from, f.to, f.value))), f.next());
      return p.finishInner(this.nextLayer.isEmpty && !g.length ? Bt.empty : this.nextLayer.update({
        add: g,
        filter: c,
        filterFrom: r,
        filterTo: a
      }));
    }
    map(t) {
      if (t.empty || this.isEmpty) return this;
      let e = [], n = [], r = -1;
      for (let c = 0; c < this.chunk.length; c++) {
        let f = this.chunkPos[c], h = this.chunk[c], g = t.touchesRange(f, f + h.length);
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
          let a = this.chunkPos[r], c = this.chunk[r];
          if (e >= a && t <= a + c.length && c.between(a, t - a, e - a, n) === false) return;
        }
        this.nextLayer.between(t, e, n);
      }
    }
    iter(t = 0) {
      return ma.from([
        this
      ]).goto(t);
    }
    get isEmpty() {
      return this.nextLayer == this;
    }
    static iter(t, e = 0) {
      return ma.from(t).goto(e);
    }
    static compare(t, e, n, r, a = -1) {
      let c = t.filter((y) => y.maxPoint > 0 || !y.isEmpty && y.maxPoint >= a), f = e.filter((y) => y.maxPoint > 0 || !y.isEmpty && y.maxPoint >= a), h = yb(c, f, n), g = new Fr(c, h, a), p = new Fr(f, h, a);
      n.iterGaps((y, v, S) => bb(g, y, p, v, S, r)), n.empty && n.length == 0 && bb(g, 0, p, 0, 0, r);
    }
    static eq(t, e, n = 0, r) {
      r == null && (r = 999999999);
      let a = t.filter((p) => !p.isEmpty && e.indexOf(p) < 0), c = e.filter((p) => !p.isEmpty && t.indexOf(p) < 0);
      if (a.length != c.length) return false;
      if (!a.length) return true;
      let f = yb(a, c), h = new Fr(a, f, 0).goto(n), g = new Fr(c, f, 0).goto(n);
      for (; ; ) {
        if (h.to != g.to || !Ud(h.active, g.active) || h.point && (!g.point || !h.point.eq(g.point))) return false;
        if (h.to > r) return true;
        h.next(), g.next();
      }
    }
    static spans(t, e, n, r, a = -1) {
      let c = new Fr(t, null, a).goto(e), f = e, h = c.openStart;
      for (; ; ) {
        let g = Math.min(c.to, n);
        if (c.point) {
          let p = c.activeForPoint(c.to), y = c.pointFrom < e ? p.length + 1 : c.point.startSide < 0 ? p.length : Math.min(p.length, h);
          r.point(f, g, c.point, p, y, c.pointRank), h = Math.min(c.openEnd(g), p.length);
        } else g > f && (r.span(f, g, c.active, h), h = c.openEnd(g));
        if (c.to > n) return h + (c.point && c.to > n ? 1 : 0);
        f = c.to, c.next();
      }
    }
    static of(t, e = false) {
      let n = new wn();
      for (let r of t instanceof Ld ? [
        t
      ] : e ? yM(t) : t) n.add(r.from, r.to, r.value);
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
  function yM(l) {
    if (l.length > 1) for (let t = l[0], e = 1; e < l.length; e++) {
      let n = l[e];
      if (Hd(t, n) > 0) return l.slice().sort(Hd);
      t = n;
    }
    return l;
  }
  Bt.empty.nextLayer = Bt.empty;
  class wn {
    finishChunk(t) {
      this.chunks.push(new km(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, t && (this.from = [], this.to = [], this.value = []);
    }
    constructor() {
      this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
    }
    add(t, e, n) {
      this.addInner(t, e, n) || (this.nextLayer || (this.nextLayer = new wn())).add(t, e, n);
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
  function yb(l, t, e) {
    let n = /* @__PURE__ */ new Map();
    for (let a of l) for (let c = 0; c < a.chunk.length; c++) a.chunk[c].maxPoint <= 0 && n.set(a.chunk[c], a.chunkPos[c]);
    let r = /* @__PURE__ */ new Set();
    for (let a of t) for (let c = 0; c < a.chunk.length; c++) {
      let f = n.get(a.chunk[c]);
      f != null && (e ? e.mapPos(f) : f) == a.chunkPos[c] && !(e == null ? void 0 : e.touchesRange(f, f + a.chunk[c].length)) && r.add(a.chunk[c]);
    }
    return r;
  }
  class Mv {
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
  class ma {
    constructor(t) {
      this.heap = t;
    }
    static from(t, e = null, n = -1) {
      let r = [];
      for (let a = 0; a < t.length; a++) for (let c = t[a]; !c.isEmpty; c = c.nextLayer) c.maxPoint >= n && r.push(new Mv(c, e, n, a));
      return r.length == 1 ? r[0] : new ma(r);
    }
    get startSide() {
      return this.value ? this.value.startSide : 0;
    }
    goto(t, e = -1e9) {
      for (let n of this.heap) n.goto(t, e);
      for (let n = this.heap.length >> 1; n >= 0; n--) Ih(this.heap, n);
      return this.next(), this;
    }
    forward(t, e) {
      for (let n of this.heap) n.forward(t, e);
      for (let n = this.heap.length >> 1; n >= 0; n--) Ih(this.heap, n);
      (this.to - t || this.value.endSide - e) < 0 && this.next();
    }
    next() {
      if (this.heap.length == 0) this.from = this.to = 1e9, this.value = null, this.rank = -1;
      else {
        let t = this.heap[0];
        this.from = t.from, this.to = t.to, this.value = t.value, this.rank = t.rank, t.value && t.next(), Ih(this.heap, 0);
      }
    }
  }
  function Ih(l, t) {
    for (let e = l[t]; ; ) {
      let n = (t << 1) + 1;
      if (n >= l.length) break;
      let r = l[n];
      if (n + 1 < l.length && r.compare(l[n + 1]) >= 0 && (r = l[n + 1], n++), e.compare(r) < 0) break;
      l[n] = e, l[t] = r, t = n;
    }
  }
  class Fr {
    constructor(t, e, n) {
      this.minPoint = n, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = ma.from(t, e, n);
    }
    goto(t, e = -1e9) {
      return this.cursor.goto(t, e), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = t, this.endSide = e, this.openStart = -1, this.next(), this;
    }
    forward(t, e) {
      for (; this.minActive > -1 && (this.activeTo[this.minActive] - t || this.active[this.minActive].endSide - e) < 0; ) this.removeActive(this.minActive);
      this.cursor.forward(t, e);
    }
    removeActive(t) {
      sc(this.active, t), sc(this.activeTo, t), sc(this.activeRank, t), this.minActive = vb(this.active, this.activeTo);
    }
    addActive(t) {
      let e = 0, { value: n, to: r, rank: a } = this.cursor;
      for (; e < this.activeRank.length && (a - this.activeRank[e] || r - this.activeTo[e]) > 0; ) e++;
      rc(this.active, e, n), rc(this.activeTo, e, r), rc(this.activeRank, e, a), t && rc(t, e, this.cursor.from), this.minActive = vb(this.active, this.activeTo);
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
          this.removeActive(r), n && sc(n, r);
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
  function bb(l, t, e, n, r, a) {
    l.goto(t), e.goto(n);
    let c = n + r, f = n, h = n - t;
    for (; ; ) {
      let g = l.to + h - e.to, p = g || l.endSide - e.endSide, y = p < 0 ? l.to + h : e.to, v = Math.min(y, c);
      if (l.point || e.point ? l.point && e.point && (l.point == e.point || l.point.eq(e.point)) && Ud(l.activeForPoint(l.to), e.activeForPoint(e.to)) || a.comparePoint(f, v, l.point, e.point) : v > f && !Ud(l.active, e.active) && a.compareRange(f, v, l.active, e.active), y > c) break;
      (g || l.openEnd != e.openEnd) && a.boundChange && a.boundChange(y), f = y, p <= 0 && l.next(), p >= 0 && e.next();
    }
  }
  function Ud(l, t) {
    if (l.length != t.length) return false;
    for (let e = 0; e < l.length; e++) if (l[e] != t[e] && !l[e].eq(t[e])) return false;
    return true;
  }
  function sc(l, t) {
    for (let e = t, n = l.length - 1; e < n; e++) l[e] = l[e + 1];
    l.pop();
  }
  function rc(l, t, e) {
    for (let n = l.length - 1; n >= t; n--) l[n + 1] = l[n];
    l[t] = e;
  }
  function vb(l, t) {
    let e = -1, n = 1e9;
    for (let r = 0; r < t.length; r++) (t[r] - n || l[r].endSide - l[e].endSide) < 0 && (e = r, n = t[r]);
    return e;
  }
  function Ps(l, t, e = l.length) {
    let n = 0;
    for (let r = 0; r < e && r < l.length; ) l.charCodeAt(r) == 9 ? (n += t - n % t, r++) : (n++, r = _e(l, r));
    return n;
  }
  function Vd(l, t, e, n) {
    for (let r = 0, a = 0; ; ) {
      if (a >= t) return r;
      if (r == l.length) break;
      a += l.charCodeAt(r) == 9 ? e - a % e : 1, r = _e(l, r);
    }
    return n === true ? -1 : l.length;
  }
  const qd = "\u037C", Sb = typeof Symbol > "u" ? "__" + qd : Symbol.for(qd), jd = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet"), xb = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
  class sl {
    constructor(t, e) {
      this.rules = [];
      let { finish: n } = e || {};
      function r(c) {
        return /^@/.test(c) ? [
          c
        ] : c.split(/,\s*/);
      }
      function a(c, f, h, g) {
        let p = [], y = /^@(\w+)\b/.exec(c[0]), v = y && y[1] == "keyframes";
        if (y && f == null) return h.push(c[0] + ";");
        for (let S in f) {
          let w = f[S];
          if (/&/.test(S)) a(S.split(/,\s*/).map((A) => c.map((_) => A.replace(/&/, _))).reduce((A, _) => A.concat(_)), w, h);
          else if (w && typeof w == "object") {
            if (!y) throw new RangeError("The value of a property (" + S + ") should be a primitive value.");
            a(r(S), w, p, v);
          } else w != null && p.push(S.replace(/_.*/, "").replace(/[A-Z]/g, (A) => "-" + A.toLowerCase()) + ": " + w + ";");
        }
        (p.length || v) && h.push((n && !y && !g ? c.map(n) : c).join(", ") + " {" + p.join(" ") + "}");
      }
      for (let c in t) a(r(c), t[c], this.rules);
    }
    getRules() {
      return this.rules.join(`
`);
    }
    static newName() {
      let t = xb[Sb] || 1;
      return xb[Sb] = t + 1, qd + t.toString(36);
    }
    static mount(t, e, n) {
      let r = t[jd], a = n && n.nonce;
      r ? a && r.setNonce(a) : r = new bM(t, a), r.mount(Array.isArray(e) ? e : [
        e
      ], t);
    }
  }
  let wb = /* @__PURE__ */ new Map();
  class bM {
    constructor(t, e) {
      let n = t.ownerDocument || t, r = n.defaultView;
      if (!t.head && t.adoptedStyleSheets && r.CSSStyleSheet) {
        let a = wb.get(n);
        if (a) return t[jd] = a;
        this.sheet = new r.CSSStyleSheet(), wb.set(n, this);
      } else this.styleTag = n.createElement("style"), e && this.styleTag.setAttribute("nonce", e);
      this.modules = [], t[jd] = this;
    }
    mount(t, e) {
      let n = this.sheet, r = 0, a = 0;
      for (let c = 0; c < t.length; c++) {
        let f = t[c], h = this.modules.indexOf(f);
        if (h < a && h > -1 && (this.modules.splice(h, 1), a--, h = -1), h == -1) {
          if (this.modules.splice(a++, 0, f), n) for (let g = 0; g < f.rules.length; g++) n.insertRule(f.rules[g], r++);
        } else {
          for (; a < h; ) r += this.modules[a++].rules.length;
          r += f.rules.length, a++;
        }
      }
      if (n) e.adoptedStyleSheets.indexOf(this.sheet) < 0 && (e.adoptedStyleSheets = [
        this.sheet,
        ...e.adoptedStyleSheets
      ]);
      else {
        let c = "";
        for (let h = 0; h < this.modules.length; h++) c += this.modules[h].getRules() + `
`;
        this.styleTag.textContent = c;
        let f = e.head || e;
        this.styleTag.parentNode != f && f.insertBefore(this.styleTag, f.firstChild);
      }
    }
    setNonce(t) {
      this.styleTag && this.styleTag.getAttribute("nonce") != t && this.styleTag.setAttribute("nonce", t);
    }
  }
  var rl = {
    8: "Backspace",
    9: "Tab",
    10: "Enter",
    12: "NumLock",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    44: "PrintScreen",
    45: "Insert",
    46: "Delete",
    59: ";",
    61: "=",
    91: "Meta",
    92: "Meta",
    106: "*",
    107: "+",
    108: ",",
    109: "-",
    110: ".",
    111: "/",
    144: "NumLock",
    145: "ScrollLock",
    160: "Shift",
    161: "Shift",
    162: "Control",
    163: "Control",
    164: "Alt",
    165: "Alt",
    173: "-",
    186: ";",
    187: "=",
    188: ",",
    189: "-",
    190: ".",
    191: "/",
    192: "`",
    219: "[",
    220: "\\",
    221: "]",
    222: "'"
  }, ga = {
    48: ")",
    49: "!",
    50: "@",
    51: "#",
    52: "$",
    53: "%",
    54: "^",
    55: "&",
    56: "*",
    57: "(",
    59: ":",
    61: "+",
    173: "_",
    186: ":",
    187: "+",
    188: "<",
    189: "_",
    190: ">",
    191: "?",
    192: "~",
    219: "{",
    220: "|",
    221: "}",
    222: '"'
  }, vM = typeof navigator < "u" && /Mac/.test(navigator.platform), SM = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
  for (var Ce = 0; Ce < 10; Ce++) rl[48 + Ce] = rl[96 + Ce] = String(Ce);
  for (var Ce = 1; Ce <= 24; Ce++) rl[Ce + 111] = "F" + Ce;
  for (var Ce = 65; Ce <= 90; Ce++) rl[Ce] = String.fromCharCode(Ce + 32), ga[Ce] = String.fromCharCode(Ce);
  for (var $h in rl) ga.hasOwnProperty($h) || (ga[$h] = rl[$h]);
  function xM(l) {
    var t = vM && l.metaKey && l.shiftKey && !l.ctrlKey && !l.altKey || SM && l.shiftKey && l.key && l.key.length == 1 || l.key == "Unidentified", e = !t && l.key || (l.shiftKey ? ga : rl)[l.keyCode] || l.key || "Unidentified";
    return e == "Esc" && (e = "Escape"), e == "Del" && (e = "Delete"), e == "Left" && (e = "ArrowLeft"), e == "Up" && (e = "ArrowUp"), e == "Right" && (e = "ArrowRight"), e == "Down" && (e = "ArrowDown"), e;
  }
  function Xt() {
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
    for (; t < arguments.length; t++) _v(l, arguments[t]);
    return l;
  }
  function _v(l, t) {
    if (typeof t == "string") l.appendChild(document.createTextNode(t));
    else if (t != null) if (t.nodeType != null) l.appendChild(t);
    else if (Array.isArray(t)) for (var e = 0; e < t.length; e++) _v(l, t[e]);
    else throw new RangeError("Unsupported child node: " + t);
  }
  let Le = typeof navigator < "u" ? navigator : {
    userAgent: "",
    vendor: "",
    platform: ""
  }, Yd = typeof document < "u" ? document : {
    documentElement: {
      style: {}
    }
  };
  const Gd = /Edge\/(\d+)/.exec(Le.userAgent), kv = /MSIE \d/.test(Le.userAgent), Xd = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Le.userAgent), hu = !!(kv || Xd || Gd), Ab = !hu && /gecko\/(\d+)/i.test(Le.userAgent), td = !hu && /Chrome\/(\d+)/.exec(Le.userAgent), wM = "webkitFontSmoothing" in Yd.documentElement.style, Kd = !hu && /Apple Computer/.test(Le.vendor), Cb = Kd && (/Mobile\/\w+/.test(Le.userAgent) || Le.maxTouchPoints > 2);
  var F = {
    mac: Cb || /Mac/.test(Le.platform),
    windows: /Win/.test(Le.platform),
    linux: /Linux|X11/.test(Le.platform),
    ie: hu,
    ie_version: kv ? Yd.documentMode || 6 : Xd ? +Xd[1] : Gd ? +Gd[1] : 0,
    gecko: Ab,
    gecko_version: Ab ? +(/Firefox\/(\d+)/.exec(Le.userAgent) || [
      0,
      0
    ])[1] : 0,
    chrome: !!td,
    chrome_version: td ? +td[1] : 0,
    ios: Cb,
    android: /Android\b/.test(Le.userAgent),
    webkit_version: wM ? +(/\bAppleWebKit\/(\d+)/.exec(Le.userAgent) || [
      0,
      0
    ])[1] : 0,
    safari: Kd,
    safari_version: Kd ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(Le.userAgent) || [
      0,
      0
    ])[1] : 0,
    tabSize: Yd.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
  };
  function pa(l) {
    let t;
    return l.nodeType == 11 ? t = l.getSelection ? l : l.ownerDocument : t = l, t.getSelection();
  }
  function Qd(l, t) {
    return t ? l == t || l.contains(t.nodeType != 1 ? t.parentNode : t) : false;
  }
  function Bc(l, t) {
    if (!t.anchorNode) return false;
    try {
      return Qd(l, t.anchorNode);
    } catch {
      return false;
    }
  }
  function Xs(l) {
    return l.nodeType == 3 ? ql(l, 0, l.nodeValue.length).getClientRects() : l.nodeType == 1 ? l.getClientRects() : [];
  }
  function oa(l, t, e, n) {
    return e ? Mb(l, t, e, n, -1) || Mb(l, t, e, n, 1) : false;
  }
  function Vl(l) {
    for (var t = 0; ; t++) if (l = l.previousSibling, !l) return t;
  }
  function Xc(l) {
    return l.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(l.nodeName);
  }
  function Mb(l, t, e, n, r) {
    for (; ; ) {
      if (l == e && t == n) return true;
      if (t == (r < 0 ? 0 : Pi(l))) {
        if (l.nodeName == "DIV") return false;
        let a = l.parentNode;
        if (!a || a.nodeType != 1) return false;
        t = Vl(l) + (r < 0 ? 0 : 1), l = a;
      } else if (l.nodeType == 1) {
        if (l = l.childNodes[t + (r < 0 ? -1 : 0)], l.nodeType == 1 && l.contentEditable == "false") return false;
        t = r < 0 ? Pi(l) : 0;
      } else return false;
    }
  }
  function Pi(l) {
    return l.nodeType == 3 ? l.nodeValue.length : l.childNodes.length;
  }
  function Oa(l, t) {
    let e = t ? l.left : l.right;
    return {
      left: e,
      right: e,
      top: l.top,
      bottom: l.bottom
    };
  }
  function AM(l) {
    let t = l.visualViewport;
    return t ? {
      left: 0,
      right: t.width,
      top: 0,
      bottom: t.height
    } : {
      left: 0,
      right: l.innerWidth,
      top: 0,
      bottom: l.innerHeight
    };
  }
  function Tv(l, t) {
    let e = t.width / l.offsetWidth, n = t.height / l.offsetHeight;
    return (e > 0.995 && e < 1.005 || !isFinite(e) || Math.abs(t.width - l.offsetWidth) < 1) && (e = 1), (n > 0.995 && n < 1.005 || !isFinite(n) || Math.abs(t.height - l.offsetHeight) < 1) && (n = 1), {
      scaleX: e,
      scaleY: n
    };
  }
  function CM(l, t, e, n, r, a, c, f) {
    let h = l.ownerDocument, g = h.defaultView || window;
    for (let p = l, y = false; p && !y; ) if (p.nodeType == 1) {
      let v, S = p == h.body, w = 1, A = 1;
      if (S) v = AM(g);
      else {
        if (/^(fixed|sticky)$/.test(getComputedStyle(p).position) && (y = true), p.scrollHeight <= p.clientHeight && p.scrollWidth <= p.clientWidth) {
          p = p.assignedSlot || p.parentNode;
          continue;
        }
        let j = p.getBoundingClientRect();
        ({ scaleX: w, scaleY: A } = Tv(p, j)), v = {
          left: j.left,
          right: j.left + p.clientWidth * w,
          top: j.top,
          bottom: j.top + p.clientHeight * A
        };
      }
      let _ = 0, T = 0;
      if (r == "nearest") t.top < v.top ? (T = t.top - (v.top + c), e > 0 && t.bottom > v.bottom + T && (T = t.bottom - v.bottom + c)) : t.bottom > v.bottom && (T = t.bottom - v.bottom + c, e < 0 && t.top - T < v.top && (T = t.top - (v.top + c)));
      else {
        let j = t.bottom - t.top, L = v.bottom - v.top;
        T = (r == "center" && j <= L ? t.top + j / 2 - L / 2 : r == "start" || r == "center" && e < 0 ? t.top - c : t.bottom - L + c) - v.top;
      }
      if (n == "nearest" ? t.left < v.left ? (_ = t.left - (v.left + a), e > 0 && t.right > v.right + _ && (_ = t.right - v.right + a)) : t.right > v.right && (_ = t.right - v.right + a, e < 0 && t.left < v.left + _ && (_ = t.left - (v.left + a))) : _ = (n == "center" ? t.left + (t.right - t.left) / 2 - (v.right - v.left) / 2 : n == "start" == f ? t.left - a : t.right - (v.right - v.left) + a) - v.left, _ || T) if (S) g.scrollBy(_, T);
      else {
        let j = 0, L = 0;
        if (T) {
          let Q = p.scrollTop;
          p.scrollTop += T / A, L = (p.scrollTop - Q) * A;
        }
        if (_) {
          let Q = p.scrollLeft;
          p.scrollLeft += _ / w, j = (p.scrollLeft - Q) * w;
        }
        t = {
          left: t.left - j,
          top: t.top - L,
          right: t.right - j,
          bottom: t.bottom - L
        }, j && Math.abs(j - _) < 1 && (n = "nearest"), L && Math.abs(L - T) < 1 && (r = "nearest");
      }
      if (S) break;
      (t.top < v.top || t.bottom > v.bottom || t.left < v.left || t.right > v.right) && (t = {
        left: Math.max(t.left, v.left),
        right: Math.min(t.right, v.right),
        top: Math.max(t.top, v.top),
        bottom: Math.min(t.bottom, v.bottom)
      }), p = p.assignedSlot || p.parentNode;
    } else if (p.nodeType == 11) p = p.host;
    else break;
  }
  function MM(l) {
    let t = l.ownerDocument, e, n;
    for (let r = l.parentNode; r && !(r == t.body || e && n); ) if (r.nodeType == 1) !n && r.scrollHeight > r.clientHeight && (n = r), !e && r.scrollWidth > r.clientWidth && (e = r), r = r.assignedSlot || r.parentNode;
    else if (r.nodeType == 11) r = r.host;
    else break;
    return {
      x: e,
      y: n
    };
  }
  class _M {
    constructor() {
      this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
    }
    eq(t) {
      return this.anchorNode == t.anchorNode && this.anchorOffset == t.anchorOffset && this.focusNode == t.focusNode && this.focusOffset == t.focusOffset;
    }
    setRange(t) {
      let { anchorNode: e, focusNode: n } = t;
      this.set(e, Math.min(t.anchorOffset, e ? Pi(e) : 0), n, Math.min(t.focusOffset, n ? Pi(n) : 0));
    }
    set(t, e, n, r) {
      this.anchorNode = t, this.anchorOffset = e, this.focusNode = n, this.focusOffset = r;
    }
  }
  let El = null;
  F.safari && F.safari_version >= 26 && (El = false);
  function Ov(l) {
    if (l.setActive) return l.setActive();
    if (El) return l.focus(El);
    let t = [];
    for (let e = l; e && (t.push(e, e.scrollTop, e.scrollLeft), e != e.ownerDocument); e = e.parentNode) ;
    if (l.focus(El == null ? {
      get preventScroll() {
        return El = {
          preventScroll: true
        }, true;
      }
    } : void 0), !El) {
      El = false;
      for (let e = 0; e < t.length; ) {
        let n = t[e++], r = t[e++], a = t[e++];
        n.scrollTop != r && (n.scrollTop = r), n.scrollLeft != a && (n.scrollLeft = a);
      }
    }
  }
  let _b;
  function ql(l, t, e = t) {
    let n = _b || (_b = document.createRange());
    return n.setEnd(l, e), n.setStart(l, t), n;
  }
  function Ls(l, t, e, n) {
    let r = {
      key: t,
      code: t,
      keyCode: e,
      which: e,
      cancelable: true
    };
    n && ({ altKey: r.altKey, ctrlKey: r.ctrlKey, shiftKey: r.shiftKey, metaKey: r.metaKey } = n);
    let a = new KeyboardEvent("keydown", r);
    a.synthetic = true, l.dispatchEvent(a);
    let c = new KeyboardEvent("keyup", r);
    return c.synthetic = true, l.dispatchEvent(c), a.defaultPrevented || c.defaultPrevented;
  }
  function kM(l) {
    for (; l; ) {
      if (l && (l.nodeType == 9 || l.nodeType == 11 && l.host)) return l;
      l = l.assignedSlot || l.parentNode;
    }
    return null;
  }
  function Dv(l) {
    for (; l.attributes.length; ) l.removeAttributeNode(l.attributes[0]);
  }
  function TM(l, t) {
    let e = t.focusNode, n = t.focusOffset;
    if (!e || t.anchorNode != e || t.anchorOffset != n) return false;
    for (n = Math.min(n, Pi(e)); ; ) if (n) {
      if (e.nodeType != 1) return false;
      let r = e.childNodes[n - 1];
      r.contentEditable == "false" ? n-- : (e = r, n = Pi(e));
    } else {
      if (e == l) return true;
      n = Vl(e), e = e.parentNode;
    }
  }
  function Ev(l) {
    return l.scrollTop > Math.max(1, l.scrollHeight - l.clientHeight - 4);
  }
  function Bv(l, t) {
    for (let e = l, n = t; ; ) {
      if (e.nodeType == 3 && n > 0) return {
        node: e,
        offset: n
      };
      if (e.nodeType == 1 && n > 0) {
        if (e.contentEditable == "false") return null;
        e = e.childNodes[n - 1], n = Pi(e);
      } else if (e.parentNode && !Xc(e)) n = Vl(e), e = e.parentNode;
      else return null;
    }
  }
  function Rv(l, t) {
    for (let e = l, n = t; ; ) {
      if (e.nodeType == 3 && n < e.nodeValue.length) return {
        node: e,
        offset: n
      };
      if (e.nodeType == 1 && n < e.childNodes.length) {
        if (e.contentEditable == "false") return null;
        e = e.childNodes[n], n = 0;
      } else if (e.parentNode && !Xc(e)) n = Vl(e) + 1, e = e.parentNode;
      else return null;
    }
  }
  class De {
    constructor(t, e, n = true) {
      this.node = t, this.offset = e, this.precise = n;
    }
    static before(t, e) {
      return new De(t.parentNode, Vl(t), e);
    }
    static after(t, e) {
      return new De(t.parentNode, Vl(t) + 1, e);
    }
  }
  const Tm = [];
  class Yt {
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
        for (let c of this.children) {
          if (c.flags & 7) {
            if (!c.dom && (a = r ? r.nextSibling : n.firstChild)) {
              let f = Yt.get(a);
              (!f || !f.parent && f.canReuseDOM(c)) && c.reuseDOM(a);
            }
            c.sync(t, e), c.flags &= -8;
          }
          if (a = r ? r.nextSibling : n.firstChild, e && !e.written && e.node == n && a != c.dom && (e.written = true), c.dom.parentNode == n) for (; a && a != c.dom; ) a = kb(a);
          else n.insertBefore(c.dom, a);
          r = c.dom;
        }
        for (a = r ? r.nextSibling : n.firstChild, a && e && e.node == n && (e.written = true); a; ) a = kb(a);
      } else if (this.flags & 1) for (let n of this.children) n.flags & 7 && (n.sync(t, e), n.flags &= -8);
    }
    reuseDOM(t) {
    }
    localPosFromDOM(t, e) {
      let n;
      if (t == this.dom) n = this.dom.childNodes[e];
      else {
        let r = Pi(t) == 0 ? 0 : e == 0 ? -1 : 1;
        for (; ; ) {
          let a = t.parentNode;
          if (a == this.dom) break;
          r == 0 && a.firstChild != a.lastChild && (t == a.firstChild ? r = -1 : r = 1), t = a;
        }
        r < 0 ? n = t : n = t.nextSibling;
      }
      if (n == this.dom.firstChild) return 0;
      for (; n && !Yt.get(n); ) n = n.nextSibling;
      if (!n) return this.length;
      for (let r = 0, a = 0; ; r++) {
        let c = this.children[r];
        if (c.dom == n) return a;
        a += c.length + c.breakAfter;
      }
    }
    domBoundsAround(t, e, n = 0) {
      let r = -1, a = -1, c = -1, f = -1;
      for (let h = 0, g = n, p = n; h < this.children.length; h++) {
        let y = this.children[h], v = g + y.length;
        if (g < t && v > e) return y.domBoundsAround(t, e, g);
        if (v >= t && r == -1 && (r = h, a = g), g > e && y.dom.parentNode == this.dom) {
          c = h, f = p;
          break;
        }
        p = v, g = v + y.breakAfter;
      }
      return {
        from: a,
        to: f < 0 ? n + this.length : f,
        startDOM: (r ? this.children[r - 1].dom.nextSibling : null) || this.dom.firstChild,
        endDOM: c < this.children.length && c >= 0 ? this.children[c].dom : null
      };
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
    replaceChildren(t, e, n = Tm) {
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
      return new zv(this.children, t, this.children.length);
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
    merge(t, e, n, r, a, c) {
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
  Yt.prototype.breakAfter = 0;
  function kb(l) {
    let t = l.nextSibling;
    return l.parentNode.removeChild(l), t;
  }
  class zv {
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
  function Nv(l, t, e, n, r, a, c, f, h) {
    let { children: g } = l, p = g.length ? g[t] : null, y = a.length ? a[a.length - 1] : null, v = y ? y.breakAfter : c;
    if (!(t == n && p && !c && !v && a.length < 2 && p.merge(e, r, a.length ? y : null, e == 0, f, h))) {
      if (n < g.length) {
        let S = g[n];
        S && (r < S.length || S.breakAfter && (y == null ? void 0 : y.breakAfter)) ? (t == n && (S = S.split(r), r = 0), !v && y && S.merge(0, r, y, true, 0, h) ? a[a.length - 1] = S : ((r || S.children.length && !S.children[0].length) && S.merge(0, r, null, false, 0, h), a.push(S))) : (S == null ? void 0 : S.breakAfter) && (y ? y.breakAfter = 1 : c = 1), n++;
      }
      for (p && (p.breakAfter = c, e > 0 && (!c && a.length && p.merge(e, p.length, a[0], false, f, 0) ? p.breakAfter = a.shift().breakAfter : (e < p.length || p.children.length && p.children[p.children.length - 1].length == 0) && p.merge(e, p.length, null, false, f, 0), t++)); t < n && a.length; ) if (g[n - 1].become(a[a.length - 1])) n--, a.pop(), h = a.length ? 0 : f;
      else if (g[t].become(a[0])) t++, a.shift(), f = a.length ? 0 : h;
      else break;
      !a.length && t && n < g.length && !g[t - 1].breakAfter && g[n].merge(0, 0, g[t - 1], false, f, h) && t--, (t < n || a.length) && l.replaceChildren(t, n, a);
    }
  }
  function Lv(l, t, e, n, r, a) {
    let c = l.childCursor(), { i: f, off: h } = c.findPos(e, 1), { i: g, off: p } = c.findPos(t, -1), y = t - e;
    for (let v of n) y += v.length;
    l.length += y, Nv(l, g, p, f, h, n, 0, r, a);
  }
  const OM = 256;
  class Ei extends Yt {
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
      return this.flags & 8 || n && (!(n instanceof Ei) || this.length - (e - t) + n.length > OM || n.flags & 8) ? false : (this.text = this.text.slice(0, t) + (n ? n.text : "") + this.text.slice(e), this.markDirty(), true);
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
      return {
        from: n,
        to: n + this.length,
        startDOM: this.dom,
        endDOM: this.dom.nextSibling
      };
    }
    coordsAt(t, e) {
      return DM(this.dom, t, e);
    }
  }
  class An extends Yt {
    constructor(t, e = [], n = 0) {
      super(), this.mark = t, this.children = e, this.length = n;
      for (let r of e) r.setParent(this);
    }
    setAttrs(t) {
      if (Dv(t), this.mark.class && (t.className = this.mark.class), this.mark.attrs) for (let e in this.mark.attrs) t.setAttribute(e, this.mark.attrs[e]);
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
    merge(t, e, n, r, a, c) {
      return n && (!(n instanceof An && n.mark.eq(this.mark)) || t && a <= 0 || e < this.length && c <= 0) ? false : (Lv(this, t, e, n ? n.children.slice() : [], a - 1, c - 1), this.markDirty(), true);
    }
    split(t) {
      let e = [], n = 0, r = -1, a = 0;
      for (let f of this.children) {
        let h = n + f.length;
        h > t && e.push(n < t ? f.split(t - n) : f), r < 0 && n >= t && (r = a), n = h, a++;
      }
      let c = this.length - t;
      return this.length = t, r > -1 && (this.children.length = r, this.markDirty()), new An(this.mark, e, c);
    }
    domAtPos(t) {
      return Hv(this, t);
    }
    coordsAt(t, e) {
      return Vv(this, t, e);
    }
  }
  function DM(l, t, e) {
    let n = l.nodeValue.length;
    t > n && (t = n);
    let r = t, a = t, c = 0;
    t == 0 && e < 0 || t == n && e >= 0 ? F.chrome || F.gecko || (t ? (r--, c = 1) : a < n && (a++, c = -1)) : e < 0 ? r-- : a < n && a++;
    let f = ql(l, r, a).getClientRects();
    if (!f.length) return null;
    let h = f[(c ? c < 0 : e >= 0) ? 0 : f.length - 1];
    return F.safari && !c && h.width == 0 && (h = Array.prototype.find.call(f, (g) => g.width) || h), c ? Oa(h, c < 0) : h || null;
  }
  class Sn extends Yt {
    static create(t, e, n) {
      return new Sn(t, e, n);
    }
    constructor(t, e, n) {
      super(), this.widget = t, this.length = e, this.side = n, this.prevWidget = null;
    }
    split(t) {
      let e = Sn.create(this.widget, this.length - t, this.side);
      return this.length -= t, e;
    }
    sync(t) {
      (!this.dom || !this.widget.updateDOM(this.dom, t)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(t)), this.widget.editable || (this.dom.contentEditable = "false"));
    }
    getSide() {
      return this.side;
    }
    merge(t, e, n, r, a, c) {
      return n && (!(n instanceof Sn) || !this.widget.compare(n.widget) || t > 0 && a <= 0 || e < this.length && c <= 0) ? false : (this.length = t + (n ? n.length : 0) + (this.length - e), true);
    }
    become(t) {
      return t instanceof Sn && t.side == this.side && this.widget.constructor == t.widget.constructor ? (this.widget.compare(t.widget) || this.markDirty(true), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = t.widget, this.length = t.length, true) : false;
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
      let c = this.side ? this.side < 0 : t > 0;
      for (let f = c ? r.length - 1 : 0; a = r[f], !(t > 0 ? f == 0 : f == r.length - 1 || a.top < a.bottom); f += c ? -1 : 1) ;
      return Oa(a, !c);
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
  class Ks extends Yt {
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
      return t instanceof Ks && t.side == this.side;
    }
    split() {
      return new Ks(this.side);
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
  Ei.prototype.children = Sn.prototype.children = Ks.prototype.children = Tm;
  function Hv(l, t) {
    let e = l.dom, { children: n } = l, r = 0;
    for (let a = 0; r < n.length; r++) {
      let c = n[r], f = a + c.length;
      if (!(f == a && c.getSide() <= 0)) {
        if (t > a && t < f && c.dom.parentNode == e) return c.domAtPos(t - a);
        if (t <= a) break;
        a = f;
      }
    }
    for (let a = r; a > 0; a--) {
      let c = n[a - 1];
      if (c.dom.parentNode == e) return c.domAtPos(c.length);
    }
    for (let a = r; a < n.length; a++) {
      let c = n[a];
      if (c.dom.parentNode == e) return c.domAtPos(0);
    }
    return new De(e, 0);
  }
  function Uv(l, t, e) {
    let n, { children: r } = l;
    e > 0 && t instanceof An && r.length && (n = r[r.length - 1]) instanceof An && n.mark.eq(t.mark) ? Uv(n, t.children[0], e - 1) : (r.push(t), t.setParent(l)), l.length += t.length;
  }
  function Vv(l, t, e) {
    let n = null, r = -1, a = null, c = -1;
    function f(g, p) {
      for (let y = 0, v = 0; y < g.children.length && v <= p; y++) {
        let S = g.children[y], w = v + S.length;
        w >= p && (S.children.length ? f(S, p - v) : (!a || a.isHidden && (e > 0 || BM(a, S))) && (w > p || v == w && S.getSide() > 0) ? (a = S, c = p - v) : (v < p || v == w && S.getSide() < 0 && !S.isHidden) && (n = S, r = p - v)), v = w;
      }
    }
    f(l, t);
    let h = (e < 0 ? n : a) || n || a;
    return h ? h.coordsAt(Math.max(0, h == n ? r : c), e) : EM(l);
  }
  function EM(l) {
    let t = l.dom.lastChild;
    if (!t) return l.dom.getBoundingClientRect();
    let e = Xs(t);
    return e[e.length - 1] || null;
  }
  function BM(l, t) {
    let e = l.coordsAt(0, 1), n = t.coordsAt(0, 1);
    return e && n && n.top < e.bottom;
  }
  function Zd(l, t) {
    for (let e in l) e == "class" && t.class ? t.class += " " + l.class : e == "style" && t.style ? t.style += ";" + l.style : t[e] = l[e];
    return t;
  }
  const Tb = /* @__PURE__ */ Object.create(null);
  function Kc(l, t, e) {
    if (l == t) return true;
    l || (l = Tb), t || (t = Tb);
    let n = Object.keys(l), r = Object.keys(t);
    if (n.length - (e && n.indexOf(e) > -1 ? 1 : 0) != r.length - (e && r.indexOf(e) > -1 ? 1 : 0)) return false;
    for (let a of n) if (a != e && (r.indexOf(a) == -1 || l[a] !== t[a])) return false;
    return true;
  }
  function Wd(l, t, e) {
    let n = false;
    if (t) for (let r in t) e && r in e || (n = true, r == "style" ? l.style.cssText = "" : l.removeAttribute(r));
    if (e) for (let r in e) t && t[r] == e[r] || (n = true, r == "style" ? l.style.cssText = e[r] : l.setAttribute(r, e[r]));
    return n;
  }
  function RM(l) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let e = 0; e < l.attributes.length; e++) {
      let n = l.attributes[e];
      t[n.name] = n.value;
    }
    return t;
  }
  class Mn {
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
  var Ue = (function(l) {
    return l[l.Text = 0] = "Text", l[l.WidgetBefore = 1] = "WidgetBefore", l[l.WidgetAfter = 2] = "WidgetAfter", l[l.WidgetRange = 3] = "WidgetRange", l;
  })(Ue || (Ue = {}));
  class ct extends Ul {
    constructor(t, e, n, r) {
      super(), this.startSide = t, this.endSide = e, this.widget = n, this.spec = r;
    }
    get heightRelevant() {
      return false;
    }
    static mark(t) {
      return new Da(t);
    }
    static widget(t) {
      let e = Math.max(-1e4, Math.min(1e4, t.side || 0)), n = !!t.block;
      return e += n && !t.inlineOrder ? e > 0 ? 3e8 : -4e8 : e > 0 ? 1e8 : -1e8, new al(t, e, e, n, t.widget || null, false);
    }
    static replace(t) {
      let e = !!t.block, n, r;
      if (t.isBlockGap) n = -5e8, r = 4e8;
      else {
        let { start: a, end: c } = qv(t, e);
        n = (a ? e ? -3e8 : -1 : 5e8) - 1, r = (c ? e ? 2e8 : 1 : -6e8) + 1;
      }
      return new al(t, n, r, e, t.widget || null, true);
    }
    static line(t) {
      return new Ea(t);
    }
    static set(t, e = false) {
      return Bt.of(t, e);
    }
    hasHeight() {
      return this.widget ? this.widget.estimatedHeight > -1 : false;
    }
  }
  ct.none = Bt.empty;
  class Da extends ct {
    constructor(t) {
      let { start: e, end: n } = qv(t);
      super(e ? -1 : 5e8, n ? 1 : -6e8, null, t), this.tagName = t.tagName || "span", this.class = t.class || "", this.attrs = t.attributes || null;
    }
    eq(t) {
      var e, n;
      return this == t || t instanceof Da && this.tagName == t.tagName && (this.class || ((e = this.attrs) === null || e === void 0 ? void 0 : e.class)) == (t.class || ((n = t.attrs) === null || n === void 0 ? void 0 : n.class)) && Kc(this.attrs, t.attrs, "class");
    }
    range(t, e = t) {
      if (t >= e) throw new RangeError("Mark decorations may not be empty");
      return super.range(t, e);
    }
  }
  Da.prototype.point = false;
  class Ea extends ct {
    constructor(t) {
      super(-2e8, -2e8, null, t);
    }
    eq(t) {
      return t instanceof Ea && this.spec.class == t.spec.class && Kc(this.spec.attributes, t.spec.attributes);
    }
    range(t, e = t) {
      if (e != t) throw new RangeError("Line decoration ranges must be zero-length");
      return super.range(t, e);
    }
  }
  Ea.prototype.mapMode = He.TrackBefore;
  Ea.prototype.point = true;
  class al extends ct {
    constructor(t, e, n, r, a, c) {
      super(e, n, a, t), this.block = r, this.isReplace = c, this.mapMode = r ? e <= 0 ? He.TrackBefore : He.TrackAfter : He.TrackDel;
    }
    get type() {
      return this.startSide != this.endSide ? Ue.WidgetRange : this.startSide <= 0 ? Ue.WidgetBefore : Ue.WidgetAfter;
    }
    get heightRelevant() {
      return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
    }
    eq(t) {
      return t instanceof al && zM(this.widget, t.widget) && this.block == t.block && this.startSide == t.startSide && this.endSide == t.endSide;
    }
    range(t, e = t) {
      if (this.isReplace && (t > e || t == e && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
      if (!this.isReplace && e != t) throw new RangeError("Widget decorations can only have zero-length ranges");
      return super.range(t, e);
    }
  }
  al.prototype.point = true;
  function qv(l, t = false) {
    let { inclusiveStart: e, inclusiveEnd: n } = l;
    return e == null && (e = l.inclusive), n == null && (n = l.inclusive), {
      start: e ?? t,
      end: n ?? t
    };
  }
  function zM(l, t) {
    return l == t || !!(l && t && l.compare(t));
  }
  function Rc(l, t, e, n = 0) {
    let r = e.length - 1;
    r >= 0 && e[r] + n >= l ? e[r] = Math.max(e[r], t) : e.push(l, t);
  }
  class fe extends Yt {
    constructor() {
      super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0;
    }
    merge(t, e, n, r, a, c) {
      if (n) {
        if (!(n instanceof fe)) return false;
        this.dom || n.transferDOM(this);
      }
      return r && this.setDeco(n ? n.attrs : null), Lv(this, t, e, n ? n.children.slice() : [], a, c), true;
    }
    split(t) {
      let e = new fe();
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
      Kc(this.attrs, t) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = t);
    }
    append(t, e) {
      Uv(this, t, e);
    }
    addLineDeco(t) {
      let e = t.spec.attributes, n = t.spec.class;
      e && (this.attrs = Zd(e, this.attrs || {})), n && (this.attrs = Zd({
        class: n
      }, this.attrs || {}));
    }
    domAtPos(t) {
      return Hv(this, t);
    }
    reuseDOM(t) {
      t.nodeName == "DIV" && (this.setDOM(t), this.flags |= 6);
    }
    sync(t, e) {
      var n;
      this.dom ? this.flags & 4 && (Dv(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), this.prevAttrs !== void 0 && (Wd(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(t, e);
      let r = this.dom.lastChild;
      for (; r && Yt.get(r) instanceof An; ) r = r.lastChild;
      if (!r || !this.length || r.nodeName != "BR" && ((n = Yt.get(r)) === null || n === void 0 ? void 0 : n.isEditable) == false && (!F.ios || !this.children.some((a) => a instanceof Ei))) {
        let a = document.createElement("BR");
        a.cmIgnore = true, this.dom.appendChild(a);
      }
    }
    measureTextSize() {
      if (this.children.length == 0 || this.length > 20) return null;
      let t = 0, e;
      for (let n of this.children) {
        if (!(n instanceof Ei) || /[^ -~]/.test(n.text)) return null;
        let r = Xs(n.dom);
        if (r.length != 1) return null;
        t += r[0].width, e = r[0].height;
      }
      return t ? {
        lineHeight: this.dom.getBoundingClientRect().height,
        charWidth: t / this.length,
        textHeight: e
      } : null;
    }
    coordsAt(t, e) {
      let n = Vv(this, t, e);
      if (!this.children.length && n && this.parent) {
        let { heightOracle: r } = this.parent.view.viewState, a = n.bottom - n.top;
        if (Math.abs(a - r.lineHeight) < 2 && r.textHeight < a) {
          let c = (a - r.textHeight) / 2;
          return {
            top: n.top + c,
            bottom: n.bottom - c,
            left: n.left,
            right: n.left
          };
        }
      }
      return n;
    }
    become(t) {
      return t instanceof fe && this.children.length == 0 && t.children.length == 0 && Kc(this.attrs, t.attrs) && this.breakAfter == t.breakAfter;
    }
    covers() {
      return true;
    }
    static find(t, e) {
      for (let n = 0, r = 0; n < t.children.length; n++) {
        let a = t.children[n], c = r + a.length;
        if (c >= e) {
          if (a instanceof fe) return a;
          if (c > e) break;
        }
        r = c + a.breakAfter;
      }
      return null;
    }
  }
  class xn extends Yt {
    constructor(t, e, n) {
      super(), this.widget = t, this.length = e, this.deco = n, this.breakAfter = 0, this.prevWidget = null;
    }
    merge(t, e, n, r, a, c) {
      return n && (!(n instanceof xn) || !this.widget.compare(n.widget) || t > 0 && a <= 0 || e < this.length && c <= 0) ? false : (this.length = t + (n ? n.length : 0) + (this.length - e), true);
    }
    domAtPos(t) {
      return t == 0 ? De.before(this.dom) : De.after(this.dom, t == this.length);
    }
    split(t) {
      let e = this.length - t;
      this.length = t;
      let n = new xn(this.widget, e, this.deco);
      return n.breakAfter = this.breakAfter, n;
    }
    get children() {
      return Tm;
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
      return t instanceof xn && t.widget.constructor == this.widget.constructor ? (t.widget.compare(this.widget) || this.markDirty(true), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = t.widget, this.length = t.length, this.deco = t.deco, this.breakAfter = t.breakAfter, true) : false;
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
      return n || (this.widget instanceof Jd ? null : Oa(this.dom.getBoundingClientRect(), this.length ? t == 0 : e <= 0));
    }
    destroy() {
      super.destroy(), this.dom && this.widget.destroy(this.dom);
    }
    covers(t) {
      let { startSide: e, endSide: n } = this.deco;
      return e == n ? false : t < 0 ? e < 0 : n > 0;
    }
  }
  class Jd extends Mn {
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
  class ca {
    constructor(t, e, n, r) {
      this.doc = t, this.pos = e, this.end = n, this.disallowBlockEffectsFor = r, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.bufferMarks = [], this.atCursorPos = true, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = t.iter(), this.skip = e;
    }
    posCovered() {
      if (this.content.length == 0) return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
      let t = this.content[this.content.length - 1];
      return !(t.breakAfter || t instanceof xn && t.deco.endSide < 0);
    }
    getLine() {
      return this.curLine || (this.content.push(this.curLine = new fe()), this.atCursorPos = true), this.curLine;
    }
    flushBuffer(t = this.bufferMarks) {
      this.pendingBuffer && (this.curLine.append(ac(new Ks(-1), t), t.length), this.pendingBuffer = 0);
    }
    addBlockWidget(t) {
      this.flushBuffer(), this.curLine = null, this.content.push(t);
    }
    finish(t) {
      this.pendingBuffer && t <= this.bufferMarks.length ? this.flushBuffer() : this.pendingBuffer = 0, !this.posCovered() && !(t && this.content.length && this.content[this.content.length - 1] instanceof xn) && this.getLine();
    }
    buildText(t, e, n) {
      for (; t > 0; ) {
        if (this.textOff == this.text.length) {
          let { value: c, lineBreak: f, done: h } = this.cursor.next(this.skip);
          if (this.skip = 0, h) throw new Error("Ran out of text content when drawing inline views");
          if (f) {
            this.posCovered() || this.getLine(), this.content.length ? this.content[this.content.length - 1].breakAfter = 1 : this.breakAtStart = 1, this.flushBuffer(), this.curLine = null, this.atCursorPos = true, t--;
            continue;
          } else this.text = c, this.textOff = 0;
        }
        let r = Math.min(this.text.length - this.textOff, t), a = Math.min(r, 512);
        this.flushBuffer(e.slice(e.length - n)), this.getLine().append(ac(new Ei(this.text.slice(this.textOff, this.textOff + a)), e), n), this.atCursorPos = true, this.textOff += a, t -= a, n = r <= a ? 0 : e.length;
      }
    }
    span(t, e, n, r) {
      this.buildText(e - t, n, r), this.pos = e, this.openStart < 0 && (this.openStart = r);
    }
    point(t, e, n, r, a, c) {
      if (this.disallowBlockEffectsFor[c] && n instanceof al) {
        if (n.block) throw new RangeError("Block decorations may not be specified via plugins");
        if (e > this.doc.lineAt(this.pos).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
      }
      let f = e - t;
      if (n instanceof al) if (n.block) n.startSide > 0 && !this.posCovered() && this.getLine(), this.addBlockWidget(new xn(n.widget || Qs.block, f, n));
      else {
        let h = Sn.create(n.widget || Qs.inline, f, f ? 0 : n.startSide), g = this.atCursorPos && !h.isEditable && a <= r.length && (t < e || n.startSide > 0), p = !h.isEditable && (t < e || a > r.length || n.startSide <= 0), y = this.getLine();
        this.pendingBuffer == 2 && !g && !h.isEditable && (this.pendingBuffer = 0), this.flushBuffer(r), g && (y.append(ac(new Ks(1), r), a), a = r.length + Math.max(0, a - r.length)), y.append(ac(h, r), a), this.atCursorPos = p, this.pendingBuffer = p ? t < e || a > r.length ? 1 : 2 : 0, this.pendingBuffer && (this.bufferMarks = r.slice());
      }
      else this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(n);
      f && (this.textOff + f <= this.text.length ? this.textOff += f : (this.skip += f - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = e), this.openStart < 0 && (this.openStart = a);
    }
    static build(t, e, n, r, a) {
      let c = new ca(t, e, n, a);
      return c.openEnd = Bt.spans(r, e, n, c), c.openStart < 0 && (c.openStart = c.openEnd), c.finish(c.openEnd), c;
    }
  }
  function ac(l, t) {
    for (let e of t) l = new An(e, [
      l
    ], l.length);
    return l;
  }
  class Qs extends Mn {
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
  Qs.inline = new Qs("span");
  Qs.block = new Qs("div");
  var Jt = (function(l) {
    return l[l.LTR = 0] = "LTR", l[l.RTL = 1] = "RTL", l;
  })(Jt || (Jt = {}));
  const jl = Jt.LTR, Om = Jt.RTL;
  function jv(l) {
    let t = [];
    for (let e = 0; e < l.length; e++) t.push(1 << +l[e]);
    return t;
  }
  const NM = jv("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), LM = jv("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), Fd = /* @__PURE__ */ Object.create(null), Vi = [];
  for (let l of [
    "()",
    "[]",
    "{}"
  ]) {
    let t = l.charCodeAt(0), e = l.charCodeAt(1);
    Fd[t] = e, Fd[e] = -t;
  }
  function Yv(l) {
    return l <= 247 ? NM[l] : 1424 <= l && l <= 1524 ? 2 : 1536 <= l && l <= 1785 ? LM[l - 1536] : 1774 <= l && l <= 2220 ? 4 : 8192 <= l && l <= 8204 ? 256 : 64336 <= l && l <= 65023 ? 4 : 1;
  }
  const HM = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
  class el {
    get dir() {
      return this.level % 2 ? Om : jl;
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
      for (let c = 0; c < t.length; c++) {
        let f = t[c];
        if (f.from <= e && f.to >= e) {
          if (f.level == n) return c;
          (a < 0 || (r != 0 ? r < 0 ? f.from < e : f.to > e : t[a].level > f.level)) && (a = c);
        }
      }
      if (a < 0) throw new RangeError("Index out of range");
      return a;
    }
  }
  function Gv(l, t) {
    if (l.length != t.length) return false;
    for (let e = 0; e < l.length; e++) {
      let n = l[e], r = t[e];
      if (n.from != r.from || n.to != r.to || n.direction != r.direction || !Gv(n.inner, r.inner)) return false;
    }
    return true;
  }
  const Kt = [];
  function UM(l, t, e, n, r) {
    for (let a = 0; a <= n.length; a++) {
      let c = a ? n[a - 1].to : t, f = a < n.length ? n[a].from : e, h = a ? 256 : r;
      for (let g = c, p = h, y = h; g < f; g++) {
        let v = Yv(l.charCodeAt(g));
        v == 512 ? v = p : v == 8 && y == 4 && (v = 16), Kt[g] = v == 4 ? 2 : v, v & 7 && (y = v), p = v;
      }
      for (let g = c, p = h, y = h; g < f; g++) {
        let v = Kt[g];
        if (v == 128) g < f - 1 && p == Kt[g + 1] && p & 24 ? v = Kt[g] = p : Kt[g] = 256;
        else if (v == 64) {
          let S = g + 1;
          for (; S < f && Kt[S] == 64; ) S++;
          let w = g && p == 8 || S < e && Kt[S] == 8 ? y == 1 ? 1 : 8 : 256;
          for (let A = g; A < S; A++) Kt[A] = w;
          g = S - 1;
        } else v == 8 && y == 1 && (Kt[g] = 1);
        p = v, v & 7 && (y = v);
      }
    }
  }
  function VM(l, t, e, n, r) {
    let a = r == 1 ? 2 : 1;
    for (let c = 0, f = 0, h = 0; c <= n.length; c++) {
      let g = c ? n[c - 1].to : t, p = c < n.length ? n[c].from : e;
      for (let y = g, v, S, w; y < p; y++) if (S = Fd[v = l.charCodeAt(y)]) if (S < 0) {
        for (let A = f - 3; A >= 0; A -= 3) if (Vi[A + 1] == -S) {
          let _ = Vi[A + 2], T = _ & 2 ? r : _ & 4 ? _ & 1 ? a : r : 0;
          T && (Kt[y] = Kt[Vi[A]] = T), f = A;
          break;
        }
      } else {
        if (Vi.length == 189) break;
        Vi[f++] = y, Vi[f++] = v, Vi[f++] = h;
      }
      else if ((w = Kt[y]) == 2 || w == 1) {
        let A = w == r;
        h = A ? 0 : 1;
        for (let _ = f - 3; _ >= 0; _ -= 3) {
          let T = Vi[_ + 2];
          if (T & 2) break;
          if (A) Vi[_ + 2] |= 2;
          else {
            if (T & 4) break;
            Vi[_ + 2] |= 4;
          }
        }
      }
    }
  }
  function qM(l, t, e, n) {
    for (let r = 0, a = n; r <= e.length; r++) {
      let c = r ? e[r - 1].to : l, f = r < e.length ? e[r].from : t;
      for (let h = c; h < f; ) {
        let g = Kt[h];
        if (g == 256) {
          let p = h + 1;
          for (; ; ) if (p == f) {
            if (r == e.length) break;
            p = e[r++].to, f = r < e.length ? e[r].from : t;
          } else if (Kt[p] == 256) p++;
          else break;
          let y = a == 1, v = (p < t ? Kt[p] : n) == 1, S = y == v ? y ? 1 : 2 : n;
          for (let w = p, A = r, _ = A ? e[A - 1].to : l; w > h; ) w == _ && (w = e[--A].from, _ = A ? e[A - 1].to : l), Kt[--w] = S;
          h = p;
        } else a = g, h++;
      }
    }
  }
  function Pd(l, t, e, n, r, a, c) {
    let f = n % 2 ? 2 : 1;
    if (n % 2 == r % 2) for (let h = t, g = 0; h < e; ) {
      let p = true, y = false;
      if (g == a.length || h < a[g].from) {
        let A = Kt[h];
        A != f && (p = false, y = A == 16);
      }
      let v = !p && f == 1 ? [] : null, S = p ? n : n + 1, w = h;
      t: for (; ; ) if (g < a.length && w == a[g].from) {
        if (y) break t;
        let A = a[g];
        if (!p) for (let _ = A.to, T = g + 1; ; ) {
          if (_ == e) break t;
          if (T < a.length && a[T].from == _) _ = a[T++].to;
          else {
            if (Kt[_] == f) break t;
            break;
          }
        }
        if (g++, v) v.push(A);
        else {
          A.from > h && c.push(new el(h, A.from, S));
          let _ = A.direction == jl != !(S % 2);
          Id(l, _ ? n + 1 : n, r, A.inner, A.from, A.to, c), h = A.to;
        }
        w = A.to;
      } else {
        if (w == e || (p ? Kt[w] != f : Kt[w] == f)) break;
        w++;
      }
      v ? Pd(l, h, w, n + 1, r, v, c) : h < w && c.push(new el(h, w, S)), h = w;
    }
    else for (let h = e, g = a.length; h > t; ) {
      let p = true, y = false;
      if (!g || h > a[g - 1].to) {
        let A = Kt[h - 1];
        A != f && (p = false, y = A == 16);
      }
      let v = !p && f == 1 ? [] : null, S = p ? n : n + 1, w = h;
      t: for (; ; ) if (g && w == a[g - 1].to) {
        if (y) break t;
        let A = a[--g];
        if (!p) for (let _ = A.from, T = g; ; ) {
          if (_ == t) break t;
          if (T && a[T - 1].to == _) _ = a[--T].from;
          else {
            if (Kt[_ - 1] == f) break t;
            break;
          }
        }
        if (v) v.push(A);
        else {
          A.to < h && c.push(new el(A.to, h, S));
          let _ = A.direction == jl != !(S % 2);
          Id(l, _ ? n + 1 : n, r, A.inner, A.from, A.to, c), h = A.from;
        }
        w = A.from;
      } else {
        if (w == t || (p ? Kt[w - 1] != f : Kt[w - 1] == f)) break;
        w--;
      }
      v ? Pd(l, w, h, n + 1, r, v, c) : w < h && c.push(new el(w, h, S)), h = w;
    }
  }
  function Id(l, t, e, n, r, a, c) {
    let f = t % 2 ? 2 : 1;
    UM(l, r, a, n, f), VM(l, r, a, n, f), qM(r, a, n, f), Pd(l, r, a, t, e, n, c);
  }
  function jM(l, t, e) {
    if (!l) return [
      new el(0, 0, t == Om ? 1 : 0)
    ];
    if (t == jl && !e.length && !HM.test(l)) return Xv(l.length);
    if (e.length) for (; l.length > Kt.length; ) Kt[Kt.length] = 256;
    let n = [], r = t == jl ? 0 : 1;
    return Id(l, r, r, e, 0, l.length, n), n;
  }
  function Xv(l) {
    return [
      new el(0, l, 0)
    ];
  }
  let Kv = "";
  function YM(l, t, e, n, r) {
    var a;
    let c = n.head - l.from, f = el.find(t, c, (a = n.bidiLevel) !== null && a !== void 0 ? a : -1, n.assoc), h = t[f], g = h.side(r, e);
    if (c == g) {
      let v = f += r ? 1 : -1;
      if (v < 0 || v >= t.length) return null;
      h = t[f = v], c = h.side(!r, e), g = h.side(r, e);
    }
    let p = _e(l.text, c, h.forward(r, e));
    (p < h.from || p > h.to) && (p = g), Kv = l.text.slice(Math.min(c, p), Math.max(c, p));
    let y = f == (r ? t.length - 1 : 0) ? null : t[f + (r ? 1 : -1)];
    return y && p == g && y.level + (r ? 0 : 1) < h.level ? K.cursor(y.side(!r, e) + l.from, y.forward(r, e) ? 1 : -1, y.level) : K.cursor(p + l.from, h.forward(r, e) ? -1 : 1, h.level);
  }
  function GM(l, t, e) {
    for (let n = t; n < e; n++) {
      let r = Yv(l.charCodeAt(n));
      if (r == 1) return jl;
      if (r == 2 || r == 4) return Om;
    }
    return jl;
  }
  const Qv = et.define(), Zv = et.define(), Wv = et.define(), Jv = et.define(), $d = et.define(), Fv = et.define(), Pv = et.define(), Dm = et.define(), Em = et.define(), Iv = et.define({
    combine: (l) => l.some((t) => t)
  }), $v = et.define({
    combine: (l) => l.some((t) => t)
  }), tS = et.define();
  class Hs {
    constructor(t, e = "nearest", n = "nearest", r = 5, a = 5, c = false) {
      this.range = t, this.y = e, this.x = n, this.yMargin = r, this.xMargin = a, this.isSnapshot = c;
    }
    map(t) {
      return t.empty ? this : new Hs(this.range.map(t), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
    }
    clip(t) {
      return this.range.to <= t.doc.length ? this : new Hs(K.cursor(t.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
    }
  }
  const oc = St.define({
    map: (l, t) => l.map(t)
  }), eS = St.define();
  function Je(l, t, e) {
    let n = l.facet(Jv);
    n.length ? n[0](t) : window.onerror && window.onerror(String(t), e, void 0, void 0, t) || (e ? console.error(e + ":", t) : console.error(t));
  }
  const vn = et.define({
    combine: (l) => l.length ? l[0] : true
  });
  let XM = 0;
  const Es = et.define({
    combine(l) {
      return l.filter((t, e) => {
        for (let n = 0; n < e; n++) if (l[n].plugin == t.plugin) return false;
        return true;
      });
    }
  });
  class ee {
    constructor(t, e, n, r, a) {
      this.id = t, this.create = e, this.domEventHandlers = n, this.domEventObservers = r, this.baseExtensions = a(this), this.extension = this.baseExtensions.concat(Es.of({
        plugin: this,
        arg: void 0
      }));
    }
    of(t) {
      return this.baseExtensions.concat(Es.of({
        plugin: this,
        arg: t
      }));
    }
    static define(t, e) {
      const { eventHandlers: n, eventObservers: r, provide: a, decorations: c } = e || {};
      return new ee(XM++, t, n, r, (f) => {
        let h = [];
        return c && h.push(ya.of((g) => {
          let p = g.plugin(f);
          return p ? c(p) : ct.none;
        })), a && h.push(a(f)), h;
      });
    }
    static fromClass(t, e) {
      return ee.define((n, r) => new t(n, r), e);
    }
  }
  class ed {
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
            if (Je(e.state, n, "CodeMirror plugin crashed"), this.value.destroy) try {
              this.value.destroy();
            } catch {
            }
            this.deactivate();
          }
        }
      } else if (this.spec) try {
        this.value = this.spec.plugin.create(t, this.spec.arg);
      } catch (e) {
        Je(t.state, e, "CodeMirror plugin crashed"), this.deactivate();
      }
      return this;
    }
    destroy(t) {
      var e;
      if (!((e = this.value) === null || e === void 0) && e.destroy) try {
        this.value.destroy();
      } catch (n) {
        Je(t.state, n, "CodeMirror plugin crashed");
      }
    }
    deactivate() {
      this.spec = this.value = null;
    }
  }
  const iS = et.define(), Bm = et.define(), ya = et.define(), nS = et.define(), Ba = et.define(), lS = et.define();
  function Ob(l, t) {
    let e = l.state.facet(lS);
    if (!e.length) return e;
    let n = e.map((a) => a instanceof Function ? a(l) : a), r = [];
    return Bt.spans(n, t.from, t.to, {
      point() {
      },
      span(a, c, f, h) {
        let g = a - t.from, p = c - t.from, y = r;
        for (let v = f.length - 1; v >= 0; v--, h--) {
          let S = f[v].spec.bidiIsolate, w;
          if (S == null && (S = GM(t.text, g, p)), h > 0 && y.length && (w = y[y.length - 1]).to == g && w.direction == S) w.to = p, y = w.inner;
          else {
            let A = {
              from: g,
              to: p,
              direction: S,
              inner: []
            };
            y.push(A), y = A.inner;
          }
        }
      }
    }), r;
  }
  const sS = et.define();
  function Rm(l) {
    let t = 0, e = 0, n = 0, r = 0;
    for (let a of l.state.facet(sS)) {
      let c = a(l);
      c && (c.left != null && (t = Math.max(t, c.left)), c.right != null && (e = Math.max(e, c.right)), c.top != null && (n = Math.max(n, c.top)), c.bottom != null && (r = Math.max(r, c.bottom)));
    }
    return {
      left: t,
      right: e,
      top: n,
      bottom: r
    };
  }
  const ta = et.define();
  class Ai {
    constructor(t, e, n, r) {
      this.fromA = t, this.toA = e, this.fromB = n, this.toB = r;
    }
    join(t) {
      return new Ai(Math.min(this.fromA, t.fromA), Math.max(this.toA, t.toA), Math.min(this.fromB, t.fromB), Math.max(this.toB, t.toB));
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
      for (let r = 0, a = 0, c = 0, f = 0; ; r++) {
        let h = r == t.length ? null : t[r], g = c - f, p = h ? h.fromB : 1e9;
        for (; a < e.length && e[a] < p; ) {
          let y = e[a], v = e[a + 1], S = Math.max(f, y), w = Math.min(p, v);
          if (S <= w && new Ai(S + g, w + g, S, w).addToSet(n), v > p) break;
          a += 2;
        }
        if (!h) return n;
        new Ai(h.fromA, h.toA, h.fromB, h.toB).addToSet(n), c = h.toA, f = h.toB;
      }
    }
  }
  class Qc {
    constructor(t, e, n) {
      this.view = t, this.state = e, this.transactions = n, this.flags = 0, this.startState = t.state, this.changes = de.empty(this.startState.doc.length);
      for (let a of n) this.changes = this.changes.compose(a.changes);
      let r = [];
      this.changes.iterChangedRanges((a, c, f, h) => r.push(new Ai(a, c, f, h))), this.changedRanges = r;
    }
    static create(t, e, n) {
      return new Qc(t, e, n);
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
  class Db extends Yt {
    get length() {
      return this.view.state.doc.length;
    }
    constructor(t) {
      super(), this.view = t, this.decorations = [], this.dynamicDecorationMap = [
        false
      ], this.domChanged = null, this.hasComposition = null, this.markedForComposition = /* @__PURE__ */ new Set(), this.editContextFormatting = ct.none, this.lastCompositionAfterCursor = false, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = false, this.lastUpdate = Date.now(), this.setDOM(t.contentDOM), this.children = [
        new fe()
      ], this.children[0].setParent(this), this.updateDeco(), this.updateInner([
        new Ai(0, 0, 0, t.state.doc.length)
      ], 0, null);
    }
    update(t) {
      var e;
      let n = t.changedRanges;
      this.minWidth > 0 && n.length && (n.every(({ fromA: g, toA: p }) => p < this.minWidthFrom || g > this.minWidthTo) ? (this.minWidthFrom = t.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = t.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(t);
      let r = -1;
      this.view.inputState.composing >= 0 && !this.view.observer.editContext && (!((e = this.domChanged) === null || e === void 0) && e.newSel ? r = this.domChanged.newSel.head : !PM(t.changes, this.hasComposition) && !t.selectionSet && (r = t.state.selection.main.head));
      let a = r > -1 ? QM(this.view, t.changes, r) : null;
      if (this.domChanged = null, this.hasComposition) {
        this.markedForComposition.clear();
        let { from: g, to: p } = this.hasComposition;
        n = new Ai(g, p, t.changes.mapPos(g, -1), t.changes.mapPos(p, 1)).addToSet(n.slice());
      }
      this.hasComposition = a ? {
        from: a.range.fromB,
        to: a.range.toB
      } : null, (F.ie || F.chrome) && !a && t && t.state.doc.lines != t.startState.doc.lines && (this.forceSelection = true);
      let c = this.decorations, f = this.updateDeco(), h = JM(c, f, t.changes);
      return n = Ai.extendWithRanges(n, h), !(this.flags & 7) && n.length == 0 ? false : (this.updateInner(n, t.startState.doc.length, a), t.transactions.length && (this.lastUpdate = Date.now()), true);
    }
    updateInner(t, e, n) {
      this.view.viewState.mustMeasureContent = true, this.updateChildren(t, e, n);
      let { observer: r } = this.view;
      r.ignore(() => {
        this.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
        let c = F.chrome || F.ios ? {
          node: r.selectionRange.focusNode,
          written: false
        } : void 0;
        this.sync(this.view, c), this.flags &= -8, c && (c.written || r.selectionRange.focusNode != c.node) && (this.forceSelection = true), this.dom.style.height = "";
      }), this.markedForComposition.forEach((c) => c.flags &= -9);
      let a = [];
      if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length) for (let c of this.children) c instanceof xn && c.widget instanceof Jd && a.push(c.dom);
      r.updateGaps(a);
    }
    updateChildren(t, e, n) {
      let r = n ? n.range.addToSet(t.slice()) : t, a = this.childCursor(e);
      for (let c = r.length - 1; ; c--) {
        let f = c >= 0 ? r[c] : null;
        if (!f) break;
        let { fromA: h, toA: g, fromB: p, toB: y } = f, v, S, w, A;
        if (n && n.range.fromB < y && n.range.toB > p) {
          let Q = ca.build(this.view.state.doc, p, n.range.fromB, this.decorations, this.dynamicDecorationMap), N = ca.build(this.view.state.doc, n.range.toB, y, this.decorations, this.dynamicDecorationMap);
          S = Q.breakAtStart, w = Q.openStart, A = N.openEnd;
          let G = this.compositionView(n);
          N.breakAtStart ? G.breakAfter = 1 : N.content.length && G.merge(G.length, G.length, N.content[0], false, N.openStart, 0) && (G.breakAfter = N.content[0].breakAfter, N.content.shift()), Q.content.length && G.merge(0, 0, Q.content[Q.content.length - 1], true, 0, Q.openEnd) && Q.content.pop(), v = Q.content.concat(G).concat(N.content);
        } else ({ content: v, breakAtStart: S, openStart: w, openEnd: A } = ca.build(this.view.state.doc, p, y, this.decorations, this.dynamicDecorationMap));
        let { i: _, off: T } = a.findPos(g, 1), { i: j, off: L } = a.findPos(h, -1);
        Nv(this, j, L, _, T, v, S, w, A);
      }
      n && this.fixCompositionDOM(n);
    }
    updateEditContextFormatting(t) {
      this.editContextFormatting = this.editContextFormatting.map(t.changes);
      for (let e of t.transactions) for (let n of e.effects) n.is(eS) && (this.editContextFormatting = n.value);
    }
    compositionView(t) {
      let e = new Ei(t.text.nodeValue);
      e.flags |= 8;
      for (let { deco: r } of t.marks) e = new An(r, [
        e
      ], e.length);
      let n = new fe();
      return n.append(e, 0), n;
    }
    fixCompositionDOM(t) {
      let e = (a, c) => {
        c.flags |= 8 | (c.children.some((h) => h.flags & 7) ? 1 : 0), this.markedForComposition.add(c);
        let f = Yt.get(a);
        f && f != c && (f.dom = null), c.setDOM(a);
      }, n = this.childPos(t.range.fromB, 1), r = this.children[n.i];
      e(t.line, r);
      for (let a = t.marks.length - 1; a >= -1; a--) n = r.childPos(n.off, 1), r = r.children[n.i], e(a >= 0 ? t.marks[a].node : t.text, r);
    }
    updateSelection(t = false, e = false) {
      (t || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
      let n = this.view.root.activeElement, r = n == this.dom, a = !r && !(this.view.state.facet(vn) || this.dom.tabIndex > -1) && Bc(this.dom, this.view.observer.selectionRange) && !(n && this.dom.contains(n));
      if (!(r || e || a)) return;
      let c = this.forceSelection;
      this.forceSelection = false;
      let f = this.view.state.selection.main, h = this.moveToLine(this.domAtPos(f.anchor)), g = f.empty ? h : this.moveToLine(this.domAtPos(f.head));
      if (F.gecko && f.empty && !this.hasComposition && KM(h)) {
        let y = document.createTextNode("");
        this.view.observer.ignore(() => h.node.insertBefore(y, h.node.childNodes[h.offset] || null)), h = g = new De(y, 0), c = true;
      }
      let p = this.view.observer.selectionRange;
      (c || !p.focusNode || (!oa(h.node, h.offset, p.anchorNode, p.anchorOffset) || !oa(g.node, g.offset, p.focusNode, p.focusOffset)) && !this.suppressWidgetCursorChange(p, f)) && (this.view.observer.ignore(() => {
        F.android && F.chrome && this.dom.contains(p.focusNode) && FM(p.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({
          preventScroll: true
        }));
        let y = pa(this.view.root);
        if (y) if (f.empty) {
          if (F.gecko) {
            let v = ZM(h.node, h.offset);
            if (v && v != 3) {
              let S = (v == 1 ? Bv : Rv)(h.node, h.offset);
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
          f.anchor > f.head && ([h, g] = [
            g,
            h
          ]), v.setEnd(g.node, g.offset), v.setStart(h.node, h.offset), y.removeAllRanges(), y.addRange(v);
        }
        a && this.view.root.activeElement == this.dom && (this.dom.blur(), n && n.focus());
      }), this.view.observer.setSelectionRange(h, g)), this.impreciseAnchor = h.precise ? null : new De(p.anchorNode, p.anchorOffset), this.impreciseHead = g.precise ? null : new De(p.focusNode, p.focusOffset);
    }
    suppressWidgetCursorChange(t, e) {
      return this.hasComposition && e.empty && oa(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset) && this.posFromDOM(t.focusNode, t.focusOffset) == e.head;
    }
    enforceCursorAssoc() {
      if (this.hasComposition) return;
      let { view: t } = this, e = t.state.selection.main, n = pa(t.root), { anchorNode: r, anchorOffset: a } = t.observer.selectionRange;
      if (!n || !e.empty || !e.assoc || !n.modify) return;
      let c = fe.find(this, e.head);
      if (!c) return;
      let f = c.posAtStart;
      if (e.head == f || e.head == f + c.length) return;
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
        let a = Yt.get(e.childNodes[r]);
        a instanceof fe && (n = a.domAtPos(0));
      }
      for (let r = t.offset - 1; !n && r >= 0; r--) {
        let a = Yt.get(e.childNodes[r]);
        a instanceof fe && (n = a.domAtPos(a.length));
      }
      return n ? new De(n.node, n.offset, true) : t;
    }
    nearest(t) {
      for (let e = t; e; ) {
        let n = Yt.get(e);
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
        if (n < r.length || r instanceof fe) break;
        e++, n = 0;
      }
      return this.children[e].domAtPos(n);
    }
    coordsAt(t, e) {
      let n = null, r = 0;
      for (let a = this.length, c = this.children.length - 1; c >= 0; c--) {
        let f = this.children[c], h = a - f.breakAfter, g = h - f.length;
        if (h < t) break;
        if (g <= t && (g < t || f.covers(-1)) && (h > t || f.covers(1)) && (!n || f instanceof fe && !(n instanceof fe && e >= 0))) n = f, r = g;
        else if (n && g == t && h == t && f instanceof xn && Math.abs(e) < 2) {
          if (f.deco.startSide < 0) break;
          c && (n = null);
        }
        a = g;
      }
      return n ? n.coordsAt(t - r, e) : null;
    }
    coordsForChar(t) {
      let { i: e, off: n } = this.childPos(t, 1), r = this.children[e];
      if (!(r instanceof fe)) return null;
      for (; r.children.length; ) {
        let { i: f, off: h } = r.childPos(n, 1);
        for (; ; f++) {
          if (f == r.children.length) return null;
          if ((r = r.children[f]).length) break;
        }
        n = h;
      }
      if (!(r instanceof Ei)) return null;
      let a = _e(r.text, n);
      if (a == n) return null;
      let c = ql(r.dom, n, a).getClientRects();
      for (let f = 0; f < c.length; f++) {
        let h = c[f];
        if (f == c.length - 1 || h.top < h.bottom && h.left < h.right) return h;
      }
      return null;
    }
    measureVisibleLineHeights(t) {
      let e = [], { from: n, to: r } = t, a = this.view.contentDOM.clientWidth, c = a > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, f = -1, h = this.view.textDirection == Jt.LTR;
      for (let g = 0, p = 0; p < this.children.length; p++) {
        let y = this.children[p], v = g + y.length;
        if (v > r) break;
        if (g >= n) {
          let S = y.dom.getBoundingClientRect();
          if (e.push(S.height), c) {
            let w = y.dom.lastChild, A = w ? Xs(w) : [];
            if (A.length) {
              let _ = A[A.length - 1], T = h ? _.right - S.left : S.right - _.left;
              T > f && (f = T, this.minWidth = a, this.minWidthFrom = g, this.minWidthTo = v);
            }
          }
        }
        g = v + y.breakAfter;
      }
      return e;
    }
    textDirectionAt(t) {
      let { i: e } = this.childPos(t, 1);
      return getComputedStyle(this.children[e].dom).direction == "rtl" ? Jt.RTL : Jt.LTR;
    }
    measureTextSize() {
      for (let a of this.children) if (a instanceof fe) {
        let c = a.measureTextSize();
        if (c) return c;
      }
      let t = document.createElement("div"), e, n, r;
      return t.className = "cm-line", t.style.width = "99999px", t.style.position = "absolute", t.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
        this.dom.appendChild(t);
        let a = Xs(t.firstChild)[0];
        e = t.getBoundingClientRect().height, n = a ? a.width / 27 : 7, r = a ? a.height : e, t.remove();
      }), {
        lineHeight: e,
        charWidth: n,
        textHeight: r
      };
    }
    childCursor(t = this.length) {
      let e = this.children.length;
      return e && (t -= this.children[--e].length), new zv(this.children, t, e);
    }
    computeBlockGapDeco() {
      let t = [], e = this.view.viewState;
      for (let n = 0, r = 0; ; r++) {
        let a = r == e.viewports.length ? null : e.viewports[r], c = a ? a.from - 1 : this.length;
        if (c > n) {
          let f = (e.lineBlockAt(c).bottom - e.lineBlockAt(n).top) / this.view.scaleY;
          t.push(ct.replace({
            widget: new Jd(f),
            block: true,
            inclusive: true,
            isBlockGap: true
          }).range(n, c));
        }
        if (!a) break;
        n = a.to + 1;
      }
      return ct.set(t);
    }
    updateDeco() {
      let t = 1, e = this.view.state.facet(ya).map((a) => (this.dynamicDecorationMap[t++] = typeof a == "function") ? a(this.view) : a), n = false, r = this.view.state.facet(nS).map((a, c) => {
        let f = typeof a == "function";
        return f && (n = true), f ? a(this.view) : a;
      });
      for (r.length && (this.dynamicDecorationMap[t++] = n, e.push(Bt.join(r))), this.decorations = [
        this.editContextFormatting,
        ...e,
        this.computeBlockGapDeco(),
        this.view.viewState.lineGapDeco
      ]; t < this.decorations.length; ) this.dynamicDecorationMap[t++] = false;
      return this.decorations;
    }
    scrollIntoView(t) {
      if (t.isSnapshot) {
        let g = this.view.viewState.lineBlockAt(t.range.head);
        this.view.scrollDOM.scrollTop = g.top - t.yMargin, this.view.scrollDOM.scrollLeft = t.xMargin;
        return;
      }
      for (let g of this.view.state.facet(tS)) try {
        if (g(this.view, t.range, t)) return true;
      } catch (p) {
        Je(this.view.state, p, "scroll handler");
      }
      let { range: e } = t, n = this.coordsAt(e.head, e.empty ? e.assoc : e.head > e.anchor ? -1 : 1), r;
      if (!n) return;
      !e.empty && (r = this.coordsAt(e.anchor, e.anchor > e.head ? -1 : 1)) && (n = {
        left: Math.min(n.left, r.left),
        top: Math.min(n.top, r.top),
        right: Math.max(n.right, r.right),
        bottom: Math.max(n.bottom, r.bottom)
      });
      let a = Rm(this.view), c = {
        left: n.left - a.left,
        top: n.top - a.top,
        right: n.right + a.right,
        bottom: n.bottom + a.bottom
      }, { offsetWidth: f, offsetHeight: h } = this.view.scrollDOM;
      CM(this.view.scrollDOM, c, e.head < e.anchor ? -1 : 1, t.x, t.y, Math.max(Math.min(t.xMargin, f), -f), Math.max(Math.min(t.yMargin, h), -h), this.view.textDirection == Jt.LTR);
    }
    lineHasWidget(t) {
      let { i: e } = this.childCursor().findPos(t);
      if (e == this.children.length) return false;
      let n = (r) => r instanceof Sn || r.children.some(n);
      return n(this.children[e]);
    }
  }
  function KM(l) {
    return l.node.nodeType == 1 && l.node.firstChild && (l.offset == 0 || l.node.childNodes[l.offset - 1].contentEditable == "false") && (l.offset == l.node.childNodes.length || l.node.childNodes[l.offset].contentEditable == "false");
  }
  function rS(l, t) {
    let e = l.observer.selectionRange;
    if (!e.focusNode) return null;
    let n = Bv(e.focusNode, e.focusOffset), r = Rv(e.focusNode, e.focusOffset), a = n || r;
    if (r && n && r.node != n.node) {
      let f = Yt.get(r.node);
      if (!f || f instanceof Ei && f.text != r.node.nodeValue) a = r;
      else if (l.docView.lastCompositionAfterCursor) {
        let h = Yt.get(n.node);
        !h || h instanceof Ei && h.text != n.node.nodeValue || (a = r);
      }
    }
    if (l.docView.lastCompositionAfterCursor = a != n, !a) return null;
    let c = t - a.offset;
    return {
      from: c,
      to: c + a.node.nodeValue.length,
      node: a.node
    };
  }
  function QM(l, t, e) {
    let n = rS(l, e);
    if (!n) return null;
    let { node: r, from: a, to: c } = n, f = r.nodeValue;
    if (/[\n\r]/.test(f) || l.state.doc.sliceString(n.from, n.to) != f) return null;
    let h = t.invertedDesc, g = new Ai(h.mapPos(a), h.mapPos(c), a, c), p = [];
    for (let y = r.parentNode; ; y = y.parentNode) {
      let v = Yt.get(y);
      if (v instanceof An) p.push({
        node: y,
        deco: v.mark
      });
      else {
        if (v instanceof fe || y.nodeName == "DIV" && y.parentNode == l.contentDOM) return {
          range: g,
          text: r,
          marks: p,
          line: y
        };
        if (y != l.contentDOM) p.push({
          node: y,
          deco: new Da({
            inclusive: true,
            attributes: RM(y),
            tagName: y.tagName.toLowerCase()
          })
        });
        else return null;
      }
    }
  }
  function ZM(l, t) {
    return l.nodeType != 1 ? 0 : (t && l.childNodes[t - 1].contentEditable == "false" ? 1 : 0) | (t < l.childNodes.length && l.childNodes[t].contentEditable == "false" ? 2 : 0);
  }
  let WM = class {
    constructor() {
      this.changes = [];
    }
    compareRange(t, e) {
      Rc(t, e, this.changes);
    }
    comparePoint(t, e) {
      Rc(t, e, this.changes);
    }
    boundChange(t) {
      Rc(t, t, this.changes);
    }
  };
  function JM(l, t, e) {
    let n = new WM();
    return Bt.compare(l, t, e, n), n.changes;
  }
  function FM(l, t) {
    for (let e = l; e && e != t; e = e.assignedSlot || e.parentNode) if (e.nodeType == 1 && e.contentEditable == "false") return true;
    return false;
  }
  function PM(l, t) {
    let e = false;
    return t && l.iterChangedRanges((n, r) => {
      n < t.to && r > t.from && (e = true);
    }), e;
  }
  function IM(l, t, e = 1) {
    let n = l.charCategorizer(t), r = l.doc.lineAt(t), a = t - r.from;
    if (r.length == 0) return K.cursor(t);
    a == 0 ? e = 1 : a == r.length && (e = -1);
    let c = a, f = a;
    e < 0 ? c = _e(r.text, a, false) : f = _e(r.text, a);
    let h = n(r.text.slice(c, f));
    for (; c > 0; ) {
      let g = _e(r.text, c, false);
      if (n(r.text.slice(g, c)) != h) break;
      c = g;
    }
    for (; f < r.length; ) {
      let g = _e(r.text, f);
      if (n(r.text.slice(f, g)) != h) break;
      f = g;
    }
    return K.range(c + r.from, f + r.from);
  }
  function $M(l, t) {
    return t.left > l ? t.left - l : Math.max(0, l - t.right);
  }
  function t_(l, t) {
    return t.top > l ? t.top - l : Math.max(0, l - t.bottom);
  }
  function id(l, t) {
    return l.top < t.bottom - 1 && l.bottom > t.top + 1;
  }
  function Eb(l, t) {
    return t < l.top ? {
      top: t,
      left: l.left,
      right: l.right,
      bottom: l.bottom
    } : l;
  }
  function Bb(l, t) {
    return t > l.bottom ? {
      top: l.top,
      left: l.left,
      right: l.right,
      bottom: t
    } : l;
  }
  function tm(l, t, e) {
    let n, r, a, c, f = false, h, g, p, y;
    for (let w = l.firstChild; w; w = w.nextSibling) {
      let A = Xs(w);
      for (let _ = 0; _ < A.length; _++) {
        let T = A[_];
        r && id(r, T) && (T = Eb(Bb(T, r.bottom), r.top));
        let j = $M(t, T), L = t_(e, T);
        if (j == 0 && L == 0) return w.nodeType == 3 ? Rb(w, t, e) : tm(w, t, e);
        (!n || c > L || c == L && a > j) && (n = w, r = T, a = j, c = L, f = j ? t < T.left ? _ > 0 : _ < A.length - 1 : true), j == 0 ? e > T.bottom && (!p || p.bottom < T.bottom) ? (h = w, p = T) : e < T.top && (!y || y.top > T.top) && (g = w, y = T) : p && id(p, T) ? p = Bb(p, T.bottom) : y && id(y, T) && (y = Eb(y, T.top));
      }
    }
    if (p && p.bottom >= e ? (n = h, r = p) : y && y.top <= e && (n = g, r = y), !n) return {
      node: l,
      offset: 0
    };
    let v = Math.max(r.left, Math.min(r.right, t));
    if (n.nodeType == 3) return Rb(n, v, e);
    if (f && n.contentEditable != "false") return tm(n, v, e);
    let S = Array.prototype.indexOf.call(l.childNodes, n) + (t >= (r.left + r.right) / 2 ? 1 : 0);
    return {
      node: l,
      offset: S
    };
  }
  function Rb(l, t, e) {
    let n = l.nodeValue.length, r = -1, a = 1e9, c = 0;
    for (let f = 0; f < n; f++) {
      let h = ql(l, f, f + 1).getClientRects();
      for (let g = 0; g < h.length; g++) {
        let p = h[g];
        if (p.top == p.bottom) continue;
        c || (c = t - p.left);
        let y = (p.top > e ? p.top - e : e - p.bottom) - 1;
        if (p.left - 1 <= t && p.right + 1 >= t && y < a) {
          let v = t >= (p.left + p.right) / 2, S = v;
          if (F.chrome || F.gecko) {
            let w = ql(l, f).getBoundingClientRect();
            Math.abs(w.left - p.right) < 0.1 && (S = !v);
          }
          if (y <= 0) return {
            node: l,
            offset: f + (S ? 1 : 0)
          };
          r = f + (S ? 1 : 0), a = y;
        }
      }
    }
    return {
      node: l,
      offset: r > -1 ? r : c > 0 ? l.nodeValue.length : 0
    };
  }
  function aS(l, t, e, n = -1) {
    var r, a;
    let c = l.contentDOM.getBoundingClientRect(), f = c.top + l.viewState.paddingTop, h, { docHeight: g } = l.viewState, { x: p, y } = t, v = y - f;
    if (v < 0) return 0;
    if (v > g) return l.state.doc.length;
    for (let Q = l.viewState.heightOracle.textHeight / 2, N = false; h = l.elementAtHeight(v), h.type != Ue.Text; ) for (; v = n > 0 ? h.bottom + Q : h.top - Q, !(v >= 0 && v <= g); ) {
      if (N) return e ? null : 0;
      N = true, n = -n;
    }
    y = f + v;
    let S = h.from;
    if (S < l.viewport.from) return l.viewport.from == 0 ? 0 : e ? null : zb(l, c, h, p, y);
    if (S > l.viewport.to) return l.viewport.to == l.state.doc.length ? l.state.doc.length : e ? null : zb(l, c, h, p, y);
    let w = l.dom.ownerDocument, A = l.root.elementFromPoint ? l.root : w, _ = A.elementFromPoint(p, y);
    _ && !l.contentDOM.contains(_) && (_ = null), _ || (p = Math.max(c.left + 1, Math.min(c.right - 1, p)), _ = A.elementFromPoint(p, y), _ && !l.contentDOM.contains(_) && (_ = null));
    let T, j = -1;
    if (_ && ((r = l.docView.nearest(_)) === null || r === void 0 ? void 0 : r.isEditable) != false) {
      if (w.caretPositionFromPoint) {
        let Q = w.caretPositionFromPoint(p, y);
        Q && ({ offsetNode: T, offset: j } = Q);
      } else if (w.caretRangeFromPoint) {
        let Q = w.caretRangeFromPoint(p, y);
        Q && ({ startContainer: T, startOffset: j } = Q);
      }
      T && (!l.contentDOM.contains(T) || F.safari && e_(T, j, p) || F.chrome && i_(T, j, p)) && (T = void 0), T && (j = Math.min(Pi(T), j));
    }
    if (!T || !l.docView.dom.contains(T)) {
      let Q = fe.find(l.docView, S);
      if (!Q) return v > h.top + h.height / 2 ? h.to : h.from;
      ({ node: T, offset: j } = tm(Q.dom, p, y));
    }
    let L = l.docView.nearest(T);
    if (!L) return null;
    if (L.isWidget && ((a = L.dom) === null || a === void 0 ? void 0 : a.nodeType) == 1) {
      let Q = L.dom.getBoundingClientRect();
      return t.y < Q.top || t.y <= Q.bottom && t.x <= (Q.left + Q.right) / 2 ? L.posAtStart : L.posAtEnd;
    } else return L.localPosFromDOM(T, j) + L.posAtStart;
  }
  function zb(l, t, e, n, r) {
    let a = Math.round((n - t.left) * l.defaultCharacterWidth);
    if (l.lineWrapping && e.height > l.defaultLineHeight * 1.5) {
      let f = l.viewState.heightOracle.textHeight, h = Math.floor((r - e.top - (l.defaultLineHeight - f) * 0.5) / f);
      a += h * l.viewState.heightOracle.lineLength;
    }
    let c = l.state.sliceDoc(e.from, e.to);
    return e.from + Vd(c, a, l.state.tabSize);
  }
  function oS(l, t, e) {
    let n, r = l;
    if (l.nodeType != 3 || t != (n = l.nodeValue.length)) return false;
    for (; ; ) {
      let a = r.nextSibling;
      if (a) {
        if (a.nodeName == "BR") break;
        return false;
      } else {
        let c = r.parentNode;
        if (!c || c.nodeName == "DIV") break;
        r = c;
      }
    }
    return ql(l, n - 1, n).getBoundingClientRect().right > e;
  }
  function e_(l, t, e) {
    return oS(l, t, e);
  }
  function i_(l, t, e) {
    if (t != 0) return oS(l, t, e);
    for (let r = l; ; ) {
      let a = r.parentNode;
      if (!a || a.nodeType != 1 || a.firstChild != r) return false;
      if (a.classList.contains("cm-line")) break;
      r = a;
    }
    let n = l.nodeType == 1 ? l.getBoundingClientRect() : ql(l, 0, Math.max(l.nodeValue.length, 1)).getBoundingClientRect();
    return e - n.left > 5;
  }
  function em(l, t, e) {
    let n = l.lineBlockAt(t);
    if (Array.isArray(n.type)) {
      let r;
      for (let a of n.type) {
        if (a.from > t) break;
        if (!(a.to < t)) {
          if (a.from < t && a.to > t) return a;
          (!r || a.type == Ue.Text && (r.type != a.type || (e < 0 ? a.from < t : a.to > t))) && (r = a);
        }
      }
      return r || n;
    }
    return n;
  }
  function n_(l, t, e, n) {
    let r = em(l, t.head, t.assoc || -1), a = !n || r.type != Ue.Text || !(l.lineWrapping || r.widgetLineBreaks) ? null : l.coordsAtPos(t.assoc < 0 && t.head > r.from ? t.head - 1 : t.head);
    if (a) {
      let c = l.dom.getBoundingClientRect(), f = l.textDirectionAt(r.from), h = l.posAtCoords({
        x: e == (f == Jt.LTR) ? c.right - 1 : c.left + 1,
        y: (a.top + a.bottom) / 2
      });
      if (h != null) return K.cursor(h, e ? -1 : 1);
    }
    return K.cursor(e ? r.to : r.from, e ? -1 : 1);
  }
  function Nb(l, t, e, n) {
    let r = l.state.doc.lineAt(t.head), a = l.bidiSpans(r), c = l.textDirectionAt(r.from);
    for (let f = t, h = null; ; ) {
      let g = YM(r, a, c, f, e), p = Kv;
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
  function l_(l, t, e) {
    let n = l.state.charCategorizer(t), r = n(e);
    return (a) => {
      let c = n(a);
      return r == It.Space && (r = c), r == c;
    };
  }
  function s_(l, t, e, n) {
    let r = t.head, a = e ? 1 : -1;
    if (r == (e ? l.state.doc.length : 0)) return K.cursor(r, t.assoc);
    let c = t.goalColumn, f, h = l.contentDOM.getBoundingClientRect(), g = l.coordsAtPos(r, t.assoc || -1), p = l.documentTop;
    if (g) c == null && (c = g.left - h.left), f = a < 0 ? g.top : g.bottom;
    else {
      let S = l.viewState.lineBlockAt(r);
      c == null && (c = Math.min(h.right - h.left, l.defaultCharacterWidth * (r - S.from))), f = (a < 0 ? S.top : S.bottom) + p;
    }
    let y = h.left + c, v = n ?? l.viewState.heightOracle.textHeight >> 1;
    for (let S = 0; ; S += 10) {
      let w = f + (v + S) * a, A = aS(l, {
        x: y,
        y: w
      }, false, a);
      if (w < h.top || w > h.bottom || (a < 0 ? A < r : A > r)) {
        let _ = l.docView.coordsForChar(A), T = !_ || w < _.top ? -1 : 1;
        return K.cursor(A, T, void 0, c);
      }
    }
  }
  function ua(l, t, e) {
    for (; ; ) {
      let n = 0;
      for (let r of l) r.between(t - 1, t + 1, (a, c, f) => {
        if (t > a && t < c) {
          let h = n || e || (t - a < c - t ? -1 : 1);
          t = h < 0 ? a : c, n = h;
        }
      });
      if (!n) return t;
    }
  }
  function cS(l, t) {
    let e = null;
    for (let n = 0; n < t.ranges.length; n++) {
      let r = t.ranges[n], a = null;
      if (r.empty) {
        let c = ua(l, r.from, 0);
        c != r.from && (a = K.cursor(c, -1));
      } else {
        let c = ua(l, r.from, -1), f = ua(l, r.to, 1);
        (c != r.from || f != r.to) && (a = K.range(r.from == r.anchor ? c : f, r.from == r.head ? c : f));
      }
      a && (e || (e = t.ranges.slice()), e[n] = a);
    }
    return e ? K.create(e, t.mainIndex) : t;
  }
  function nd(l, t, e) {
    let n = ua(l.state.facet(Ba).map((r) => r(l)), e.from, t.head > e.from ? -1 : 1);
    return n == e.from ? e : K.cursor(n, n < e.from ? 1 : -1);
  }
  const ea = "\uFFFF";
  class r_ {
    constructor(t, e) {
      this.points = t, this.text = "", this.lineSeparator = e.facet(Ot.lineSeparator);
    }
    append(t) {
      this.text += t;
    }
    lineBreak() {
      this.text += ea;
    }
    readRange(t, e) {
      if (!t) return this;
      let n = t.parentNode;
      for (let r = t; ; ) {
        this.findPointBefore(n, r);
        let a = this.text.length;
        this.readNode(r);
        let c = r.nextSibling;
        if (c == e) break;
        let f = Yt.get(r), h = Yt.get(c);
        (f && h ? f.breakAfter : (f ? f.breakAfter : Xc(r)) || Xc(c) && (r.nodeName != "BR" || r.cmIgnore) && this.text.length > a) && !o_(c, e) && this.lineBreak(), r = c;
      }
      return this.findPointBefore(n, e), this;
    }
    readTextNode(t) {
      let e = t.nodeValue;
      for (let n of this.points) n.node == t && (n.pos = this.text.length + Math.min(n.offset, e.length));
      for (let n = 0, r = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
        let a = -1, c = 1, f;
        if (this.lineSeparator ? (a = e.indexOf(this.lineSeparator, n), c = this.lineSeparator.length) : (f = r.exec(e)) && (a = f.index, c = f[0].length), this.append(e.slice(n, a < 0 ? e.length : a)), a < 0) break;
        if (this.lineBreak(), c > 1) for (let h of this.points) h.node == t && h.pos > this.text.length && (h.pos -= c - 1);
        n = a + c;
      }
    }
    readNode(t) {
      if (t.cmIgnore) return;
      let e = Yt.get(t), n = e && e.overrideDOMText;
      if (n != null) {
        this.findPointInside(t, n.length);
        for (let r = n.iter(); !r.next().done; ) r.lineBreak ? this.lineBreak() : this.append(r.value);
      } else t.nodeType == 3 ? this.readTextNode(t) : t.nodeName == "BR" ? t.nextSibling && this.lineBreak() : t.nodeType == 1 && this.readRange(t.firstChild, null);
    }
    findPointBefore(t, e) {
      for (let n of this.points) n.node == t && t.childNodes[n.offset] == e && (n.pos = this.text.length);
    }
    findPointInside(t, e) {
      for (let n of this.points) (t.nodeType == 3 ? n.node == t : t.contains(n.node)) && (n.pos = this.text.length + (a_(t, n.node, n.offset) ? e : 0));
    }
  }
  function a_(l, t, e) {
    for (; ; ) {
      if (!t || e < Pi(t)) return false;
      if (t == l) return true;
      e = Vl(t) + 1, t = t.parentNode;
    }
  }
  function o_(l, t) {
    let e;
    for (; !(l == t || !l); l = l.nextSibling) {
      let n = Yt.get(l);
      if (!((n == null ? void 0 : n.isWidget) || l.cmIgnore)) return false;
      n && (e || (e = [])).push(n);
    }
    if (e) for (let n of e) {
      let r = n.overrideDOMText;
      if (r == null ? void 0 : r.length) return false;
    }
    return true;
  }
  class Lb {
    constructor(t, e) {
      this.node = t, this.offset = e, this.pos = -1;
    }
  }
  class c_ {
    constructor(t, e, n, r) {
      this.typeOver = r, this.bounds = null, this.text = "", this.domChanged = e > -1;
      let { impreciseHead: a, impreciseAnchor: c } = t.docView;
      if (t.state.readOnly && e > -1) this.newSel = null;
      else if (e > -1 && (this.bounds = t.docView.domBoundsAround(e, n, 0))) {
        let f = a || c ? [] : f_(t), h = new r_(f, t.state);
        h.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = h.text, this.newSel = h_(f, this.bounds.from);
      } else {
        let f = t.observer.selectionRange, h = a && a.node == f.focusNode && a.offset == f.focusOffset || !Qd(t.contentDOM, f.focusNode) ? t.state.selection.main.head : t.docView.posFromDOM(f.focusNode, f.focusOffset), g = c && c.node == f.anchorNode && c.offset == f.anchorOffset || !Qd(t.contentDOM, f.anchorNode) ? t.state.selection.main.anchor : t.docView.posFromDOM(f.anchorNode, f.anchorOffset), p = t.viewport;
        if ((F.ios || F.chrome) && t.state.selection.main.empty && h != g && (p.from > 0 || p.to < t.state.doc.length)) {
          let y = Math.min(h, g), v = Math.max(h, g), S = p.from - y, w = p.to - v;
          (S == 0 || S == 1 || y == 0) && (w == 0 || w == -1 || v == t.state.doc.length) && (h = 0, g = t.state.doc.length);
        }
        t.inputState.composing > -1 && t.state.selection.ranges.length > 1 ? this.newSel = t.state.selection.replaceRange(K.range(g, h)) : this.newSel = K.single(g, h);
      }
    }
  }
  function uS(l, t) {
    let e, { newSel: n } = t, r = l.state.selection.main, a = l.inputState.lastKeyTime > Date.now() - 100 ? l.inputState.lastKeyCode : -1;
    if (t.bounds) {
      let { from: c, to: f } = t.bounds, h = r.from, g = null;
      (a === 8 || F.android && t.text.length < f - c) && (h = r.to, g = "end");
      let p = fS(l.state.doc.sliceString(c, f, ea), t.text, h - c, g);
      p && (F.chrome && a == 13 && p.toB == p.from + 2 && t.text.slice(p.from, p.toB) == ea + ea && p.toB--, e = {
        from: c + p.from,
        to: c + p.toA,
        insert: Rt.of(t.text.slice(p.from, p.toB).split(ea))
      });
    } else n && (!l.hasFocus && l.state.facet(vn) || n.main.eq(r)) && (n = null);
    if (!e && !n) return false;
    if (!e && t.typeOver && !r.empty && n && n.main.empty ? e = {
      from: r.from,
      to: r.to,
      insert: l.state.doc.slice(r.from, r.to)
    } : (F.mac || F.android) && e && e.from == e.to && e.from == r.head - 1 && /^\. ?$/.test(e.insert.toString()) && l.contentDOM.getAttribute("autocorrect") == "off" ? (n && e.insert.length == 2 && (n = K.single(n.main.anchor - 1, n.main.head - 1)), e = {
      from: e.from,
      to: e.to,
      insert: Rt.of([
        e.insert.toString().replace(".", " ")
      ])
    }) : e && e.from >= r.from && e.to <= r.to && (e.from != r.from || e.to != r.to) && r.to - r.from - (e.to - e.from) <= 4 ? e = {
      from: r.from,
      to: r.to,
      insert: l.state.doc.slice(r.from, e.from).append(e.insert).append(l.state.doc.slice(e.to, r.to))
    } : l.state.doc.lineAt(r.from).to < r.to && l.docView.lineHasWidget(r.to) && l.inputState.insertingTextAt > Date.now() - 50 ? e = {
      from: r.from,
      to: r.to,
      insert: l.state.toText(l.inputState.insertingText)
    } : F.chrome && e && e.from == e.to && e.from == r.head && e.insert.toString() == `
 ` && l.lineWrapping && (n && (n = K.single(n.main.anchor - 1, n.main.head - 1)), e = {
      from: r.from,
      to: r.to,
      insert: Rt.of([
        " "
      ])
    }), e) return zm(l, e, n, a);
    if (n && !n.main.eq(r)) {
      let c = false, f = "select";
      return l.inputState.lastSelectionTime > Date.now() - 50 && (l.inputState.lastSelectionOrigin == "select" && (c = true), f = l.inputState.lastSelectionOrigin, f == "select.pointer" && (n = cS(l.state.facet(Ba).map((h) => h(l)), n))), l.dispatch({
        selection: n,
        scrollIntoView: c,
        userEvent: f
      }), true;
    } else return false;
  }
  function zm(l, t, e, n = -1) {
    if (F.ios && l.inputState.flushIOSKey(t)) return true;
    let r = l.state.selection.main;
    if (F.android && (t.to == r.to && (t.from == r.from || t.from == r.from - 1 && l.state.sliceDoc(t.from, r.from) == " ") && t.insert.length == 1 && t.insert.lines == 2 && Ls(l.contentDOM, "Enter", 13) || (t.from == r.from - 1 && t.to == r.to && t.insert.length == 0 || n == 8 && t.insert.length < t.to - t.from && t.to > r.head) && Ls(l.contentDOM, "Backspace", 8) || t.from == r.from && t.to == r.to + 1 && t.insert.length == 0 && Ls(l.contentDOM, "Delete", 46))) return true;
    let a = t.insert.toString();
    l.inputState.composing >= 0 && l.inputState.composing++;
    let c, f = () => c || (c = u_(l, t, e));
    return l.state.facet(Fv).some((h) => h(l, t.from, t.to, a, f)) || l.dispatch(f()), true;
  }
  function u_(l, t, e) {
    let n, r = l.state, a = r.selection.main, c = -1;
    if (t.from == t.to && t.from < a.from || t.from > a.to) {
      let h = t.from < a.from ? -1 : 1, g = h < 0 ? a.from : a.to, p = ua(r.facet(Ba).map((y) => y(l)), g, h);
      t.from == p && (c = p);
    }
    if (c > -1) n = {
      changes: t,
      selection: K.cursor(t.from + t.insert.length, -1)
    };
    else if (t.from >= a.from && t.to <= a.to && t.to - t.from >= (a.to - a.from) / 3 && (!e || e.main.empty && e.main.from == t.from + t.insert.length) && l.inputState.composing < 0) {
      let h = a.from < t.from ? r.sliceDoc(a.from, t.from) : "", g = a.to > t.to ? r.sliceDoc(t.to, a.to) : "";
      n = r.replaceSelection(l.state.toText(h + t.insert.sliceString(0, void 0, l.state.lineBreak) + g));
    } else {
      let h = r.changes(t), g = e && e.main.to <= h.newLength ? e.main : void 0;
      if (r.selection.ranges.length > 1 && (l.inputState.composing >= 0 || l.inputState.compositionPendingChange) && t.to <= a.to + 10 && t.to >= a.to - 10) {
        let p = l.state.sliceDoc(t.from, t.to), y, v = e && rS(l, e.main.head);
        if (v) {
          let w = t.insert.length - (t.to - t.from);
          y = {
            from: v.from,
            to: v.to - w
          };
        } else y = l.state.doc.lineAt(a.head);
        let S = a.to - t.to;
        n = r.changeByRange((w) => {
          if (w.from == a.from && w.to == a.to) return {
            changes: h,
            range: g || w.map(h)
          };
          let A = w.to - S, _ = A - p.length;
          if (l.state.sliceDoc(_, A) != p || A >= y.from && _ <= y.to) return {
            range: w
          };
          let T = r.changes({
            from: _,
            to: A,
            insert: t.insert
          }), j = w.to - a.to;
          return {
            changes: T,
            range: g ? K.range(Math.max(0, g.anchor + j), Math.max(0, g.head + j)) : w.map(T)
          };
        });
      } else n = {
        changes: h,
        selection: g && r.selection.replaceRange(g)
      };
    }
    let f = "input.type";
    return (l.composing || l.inputState.compositionPendingChange && l.inputState.compositionEndedAt > Date.now() - 50) && (l.inputState.compositionPendingChange = false, f += ".compose", l.inputState.compositionFirstChange && (f += ".start", l.inputState.compositionFirstChange = false)), r.update(n, {
      userEvent: f,
      scrollIntoView: true
    });
  }
  function fS(l, t, e, n) {
    let r = Math.min(l.length, t.length), a = 0;
    for (; a < r && l.charCodeAt(a) == t.charCodeAt(a); ) a++;
    if (a == r && l.length == t.length) return null;
    let c = l.length, f = t.length;
    for (; c > 0 && f > 0 && l.charCodeAt(c - 1) == t.charCodeAt(f - 1); ) c--, f--;
    if (n == "end") {
      let h = Math.max(0, a - Math.min(c, f));
      e -= c + h - a;
    }
    if (c < a && l.length < t.length) {
      let h = e <= a && e >= c ? a - e : 0;
      a -= h, f = a + (f - c), c = a;
    } else if (f < a) {
      let h = e <= a && e >= f ? a - e : 0;
      a -= h, c = a + (c - f), f = a;
    }
    return {
      from: a,
      toA: c,
      toB: f
    };
  }
  function f_(l) {
    let t = [];
    if (l.root.activeElement != l.contentDOM) return t;
    let { anchorNode: e, anchorOffset: n, focusNode: r, focusOffset: a } = l.observer.selectionRange;
    return e && (t.push(new Lb(e, n)), (r != e || a != n) && t.push(new Lb(r, a))), t;
  }
  function h_(l, t) {
    if (l.length == 0) return null;
    let e = l[0].pos, n = l.length == 2 ? l[1].pos : e;
    return e > -1 && n > -1 ? K.single(e + t, n + t) : null;
  }
  class d_ {
    setSelectionOrigin(t) {
      this.lastSelectionOrigin = t, this.lastSelectionTime = Date.now();
    }
    constructor(t) {
      this.view = t, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = false, this.compositionPendingChange = false, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = t.hasFocus, F.safari && t.contentDOM.addEventListener("input", () => null), F.gecko && O_(t.contentDOM.ownerDocument);
    }
    handleEvent(t) {
      !x_(this.view, t) || this.ignoreDuringComposition(t) || t.type == "keydown" && this.keydown(t) || (this.view.updateState != 0 ? Promise.resolve().then(() => this.runHandlers(t.type, t)) : this.runHandlers(t.type, t));
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
      let e = m_(t), n = this.handlers, r = this.view.contentDOM;
      for (let a in e) if (a != "scroll") {
        let c = !e[a].handlers.length, f = n[a];
        f && c != !f.handlers.length && (r.removeEventListener(a, this.handleEvent), f = null), f || r.addEventListener(a, this.handleEvent, {
          passive: c
        });
      }
      for (let a in n) a != "scroll" && !e[a] && r.removeEventListener(a, this.handleEvent);
      this.handlers = e;
    }
    keydown(t) {
      if (this.lastKeyCode = t.keyCode, this.lastKeyTime = Date.now(), t.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return true;
      if (this.tabFocusMode > 0 && t.keyCode != 27 && dS.indexOf(t.keyCode) < 0 && (this.tabFocusMode = -1), F.android && F.chrome && !t.synthetic && (t.keyCode == 13 || t.keyCode == 8)) return this.view.observer.delayAndroidKey(t.key, t.keyCode), true;
      let e;
      return F.ios && !t.synthetic && !t.altKey && !t.metaKey && ((e = hS.find((n) => n.keyCode == t.keyCode)) && !t.ctrlKey || g_.indexOf(t.key) > -1 && t.ctrlKey && !t.shiftKey) ? (this.pendingIOSKey = e || t, setTimeout(() => this.flushIOSKey(), 250), true) : (t.keyCode != 229 && this.view.observer.forceFlush(), false);
    }
    flushIOSKey(t) {
      let e = this.pendingIOSKey;
      return !e || e.key == "Enter" && t && t.from < t.to && /^\S+$/.test(t.insert.toString()) ? false : (this.pendingIOSKey = void 0, Ls(this.view.contentDOM, e.key, e.keyCode, e instanceof KeyboardEvent ? e : void 0));
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
  function Hb(l, t) {
    return (e, n) => {
      try {
        return t.call(l, n, e);
      } catch (r) {
        Je(e.state, r);
      }
    };
  }
  function m_(l) {
    let t = /* @__PURE__ */ Object.create(null);
    function e(n) {
      return t[n] || (t[n] = {
        observers: [],
        handlers: []
      });
    }
    for (let n of l) {
      let r = n.spec, a = r && r.plugin.domEventHandlers, c = r && r.plugin.domEventObservers;
      if (a) for (let f in a) {
        let h = a[f];
        h && e(f).handlers.push(Hb(n.value, h));
      }
      if (c) for (let f in c) {
        let h = c[f];
        h && e(f).observers.push(Hb(n.value, h));
      }
    }
    for (let n in Bi) e(n).handlers.push(Bi[n]);
    for (let n in Mi) e(n).observers.push(Mi[n]);
    return t;
  }
  const hS = [
    {
      key: "Backspace",
      keyCode: 8,
      inputType: "deleteContentBackward"
    },
    {
      key: "Enter",
      keyCode: 13,
      inputType: "insertParagraph"
    },
    {
      key: "Enter",
      keyCode: 13,
      inputType: "insertLineBreak"
    },
    {
      key: "Delete",
      keyCode: 46,
      inputType: "deleteContentForward"
    }
  ], g_ = "dthko", dS = [
    16,
    17,
    18,
    20,
    91,
    92,
    224,
    225
  ], cc = 6;
  function uc(l) {
    return Math.max(0, l) * 0.7 + 8;
  }
  function p_(l, t) {
    return Math.max(Math.abs(l.clientX - t.clientX), Math.abs(l.clientY - t.clientY));
  }
  class y_ {
    constructor(t, e, n, r) {
      this.view = t, this.startEvent = e, this.style = n, this.mustSelect = r, this.scrollSpeed = {
        x: 0,
        y: 0
      }, this.scrolling = -1, this.lastEvent = e, this.scrollParents = MM(t.contentDOM), this.atoms = t.state.facet(Ba).map((c) => c(t));
      let a = t.contentDOM.ownerDocument;
      a.addEventListener("mousemove", this.move = this.move.bind(this)), a.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = e.shiftKey, this.multiple = t.state.facet(Ot.allowMultipleSelections) && b_(t, e), this.dragging = S_(t, e) && pS(e) == 1 ? null : false;
    }
    start(t) {
      this.dragging === false && this.select(t);
    }
    move(t) {
      if (t.buttons == 0) return this.destroy();
      if (this.dragging || this.dragging == null && p_(this.startEvent, t) < 10) return;
      this.select(this.lastEvent = t);
      let e = 0, n = 0, r = 0, a = 0, c = this.view.win.innerWidth, f = this.view.win.innerHeight;
      this.scrollParents.x && ({ left: r, right: c } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({ top: a, bottom: f } = this.scrollParents.y.getBoundingClientRect());
      let h = Rm(this.view);
      t.clientX - h.left <= r + cc ? e = -uc(r - t.clientX) : t.clientX + h.right >= c - cc && (e = uc(t.clientX - c)), t.clientY - h.top <= a + cc ? n = -uc(a - t.clientY) : t.clientY + h.bottom >= f - cc && (n = uc(t.clientY - f)), this.setScrollSpeed(e, n);
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
      this.scrollSpeed = {
        x: t,
        y: e
      }, t || e ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
    }
    scroll() {
      let { x: t, y: e } = this.scrollSpeed;
      t && this.scrollParents.x && (this.scrollParents.x.scrollLeft += t, t = 0), e && this.scrollParents.y && (this.scrollParents.y.scrollTop += e, e = 0), (t || e) && this.view.win.scrollBy(t, e), this.dragging === false && this.select(this.lastEvent);
    }
    select(t) {
      let { view: e } = this, n = cS(this.atoms, this.style.get(t, this.extend, this.multiple));
      (this.mustSelect || !n.eq(e.state.selection, this.dragging === false)) && this.view.dispatch({
        selection: n,
        userEvent: "select.pointer"
      }), this.mustSelect = false;
    }
    update(t) {
      t.transactions.some((e) => e.isUserEvent("input.type")) ? this.destroy() : this.style.update(t) && setTimeout(() => this.select(this.lastEvent), 20);
    }
  }
  function b_(l, t) {
    let e = l.state.facet(Qv);
    return e.length ? e[0](t) : F.mac ? t.metaKey : t.ctrlKey;
  }
  function v_(l, t) {
    let e = l.state.facet(Zv);
    return e.length ? e[0](t) : F.mac ? !t.altKey : !t.ctrlKey;
  }
  function S_(l, t) {
    let { main: e } = l.state.selection;
    if (e.empty) return false;
    let n = pa(l.root);
    if (!n || n.rangeCount == 0) return true;
    let r = n.getRangeAt(0).getClientRects();
    for (let a = 0; a < r.length; a++) {
      let c = r[a];
      if (c.left <= t.clientX && c.right >= t.clientX && c.top <= t.clientY && c.bottom >= t.clientY) return true;
    }
    return false;
  }
  function x_(l, t) {
    if (!t.bubbles) return true;
    if (t.defaultPrevented) return false;
    for (let e = t.target, n; e != l.contentDOM; e = e.parentNode) if (!e || e.nodeType == 11 || (n = Yt.get(e)) && n.ignoreEvent(t)) return false;
    return true;
  }
  const Bi = /* @__PURE__ */ Object.create(null), Mi = /* @__PURE__ */ Object.create(null), mS = F.ie && F.ie_version < 15 || F.ios && F.webkit_version < 604;
  function w_(l) {
    let t = l.dom.parentNode;
    if (!t) return;
    let e = t.appendChild(document.createElement("textarea"));
    e.style.cssText = "position: fixed; left: -10000px; top: 10px", e.focus(), setTimeout(() => {
      l.focus(), e.remove(), gS(l, e.value);
    }, 50);
  }
  function du(l, t, e) {
    for (let n of l.facet(t)) e = n(e, l);
    return e;
  }
  function gS(l, t) {
    t = du(l.state, Dm, t);
    let { state: e } = l, n, r = 1, a = e.toText(t), c = a.lines == e.selection.ranges.length;
    if (im != null && e.selection.ranges.every((h) => h.empty) && im == a.toString()) {
      let h = -1;
      n = e.changeByRange((g) => {
        let p = e.doc.lineAt(g.from);
        if (p.from == h) return {
          range: g
        };
        h = p.from;
        let y = e.toText((c ? a.line(r++).text : t) + e.lineBreak);
        return {
          changes: {
            from: p.from,
            insert: y
          },
          range: K.cursor(g.from + y.length)
        };
      });
    } else c ? n = e.changeByRange((h) => {
      let g = a.line(r++);
      return {
        changes: {
          from: h.from,
          to: h.to,
          insert: g.text
        },
        range: K.cursor(h.from + g.length)
      };
    }) : n = e.replaceSelection(a);
    l.dispatch(n, {
      userEvent: "input.paste",
      scrollIntoView: true
    });
  }
  Mi.scroll = (l) => {
    l.inputState.lastScrollTop = l.scrollDOM.scrollTop, l.inputState.lastScrollLeft = l.scrollDOM.scrollLeft;
  };
  Bi.keydown = (l, t) => (l.inputState.setSelectionOrigin("select"), t.keyCode == 27 && l.inputState.tabFocusMode != 0 && (l.inputState.tabFocusMode = Date.now() + 2e3), false);
  Mi.touchstart = (l, t) => {
    l.inputState.lastTouchTime = Date.now(), l.inputState.setSelectionOrigin("select.pointer");
  };
  Mi.touchmove = (l) => {
    l.inputState.setSelectionOrigin("select.pointer");
  };
  Bi.mousedown = (l, t) => {
    if (l.observer.flush(), l.inputState.lastTouchTime > Date.now() - 2e3) return false;
    let e = null;
    for (let n of l.state.facet(Wv)) if (e = n(l, t), e) break;
    if (!e && t.button == 0 && (e = M_(l, t)), e) {
      let n = !l.hasFocus;
      l.inputState.startMouseSelection(new y_(l, t, e, n)), n && l.observer.ignore(() => {
        Ov(l.contentDOM);
        let a = l.root.activeElement;
        a && !a.contains(l.contentDOM) && a.blur();
      });
      let r = l.inputState.mouseSelection;
      if (r) return r.start(t), r.dragging === false;
    } else l.inputState.setSelectionOrigin("select.pointer");
    return false;
  };
  function Ub(l, t, e, n) {
    if (n == 1) return K.cursor(t, e);
    if (n == 2) return IM(l.state, t, e);
    {
      let r = fe.find(l.docView, t), a = l.state.doc.lineAt(r ? r.posAtEnd : t), c = r ? r.posAtStart : a.from, f = r ? r.posAtEnd : a.to;
      return f < l.state.doc.length && f == a.to && f++, K.range(c, f);
    }
  }
  let Vb = (l, t, e) => t >= e.top && t <= e.bottom && l >= e.left && l <= e.right;
  function A_(l, t, e, n) {
    let r = fe.find(l.docView, t);
    if (!r) return 1;
    let a = t - r.posAtStart;
    if (a == 0) return 1;
    if (a == r.length) return -1;
    let c = r.coordsAt(a, -1);
    if (c && Vb(e, n, c)) return -1;
    let f = r.coordsAt(a, 1);
    return f && Vb(e, n, f) ? 1 : c && c.bottom >= n ? -1 : 1;
  }
  function qb(l, t) {
    let e = l.posAtCoords({
      x: t.clientX,
      y: t.clientY
    }, false);
    return {
      pos: e,
      bias: A_(l, e, t.clientX, t.clientY)
    };
  }
  const C_ = F.ie && F.ie_version <= 11;
  let jb = null, Yb = 0, Gb = 0;
  function pS(l) {
    if (!C_) return l.detail;
    let t = jb, e = Gb;
    return jb = l, Gb = Date.now(), Yb = !t || e > Date.now() - 400 && Math.abs(t.clientX - l.clientX) < 2 && Math.abs(t.clientY - l.clientY) < 2 ? (Yb + 1) % 3 : 1;
  }
  function M_(l, t) {
    let e = qb(l, t), n = pS(t), r = l.state.selection;
    return {
      update(a) {
        a.docChanged && (e.pos = a.changes.mapPos(e.pos), r = r.map(a.changes));
      },
      get(a, c, f) {
        let h = qb(l, a), g, p = Ub(l, h.pos, h.bias, n);
        if (e.pos != h.pos && !c) {
          let y = Ub(l, e.pos, e.bias, n), v = Math.min(y.from, p.from), S = Math.max(y.to, p.to);
          p = v < p.from ? K.range(v, S) : K.range(S, v);
        }
        return c ? r.replaceRange(r.main.extend(p.from, p.to)) : f && n == 1 && r.ranges.length > 1 && (g = __(r, h.pos)) ? g : f ? r.addRange(p) : K.create([
          p
        ]);
      }
    };
  }
  function __(l, t) {
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
        let a = r.posAtStart, c = a + r.length;
        (a >= e.to || c <= e.from) && (e = K.range(a, c));
      }
    }
    let { inputState: n } = l;
    return n.mouseSelection && (n.mouseSelection.dragging = true), n.draggedContent = e, t.dataTransfer && (t.dataTransfer.setData("Text", du(l.state, Em, l.state.sliceDoc(e.from, e.to))), t.dataTransfer.effectAllowed = "copyMove"), false;
  };
  Bi.dragend = (l) => (l.inputState.draggedContent = null, false);
  function Xb(l, t, e, n) {
    if (e = du(l.state, Dm, e), !e) return;
    let r = l.posAtCoords({
      x: t.clientX,
      y: t.clientY
    }, false), { draggedContent: a } = l.inputState, c = n && a && v_(l, t) ? {
      from: a.from,
      to: a.to
    } : null, f = {
      from: r,
      insert: e
    }, h = l.state.changes(c ? [
      c,
      f
    ] : f);
    l.focus(), l.dispatch({
      changes: h,
      selection: {
        anchor: h.mapPos(r, -1),
        head: h.mapPos(r, 1)
      },
      userEvent: c ? "move.drop" : "input.drop"
    }), l.inputState.draggedContent = null;
  }
  Bi.drop = (l, t) => {
    if (!t.dataTransfer) return false;
    if (l.state.readOnly) return true;
    let e = t.dataTransfer.files;
    if (e && e.length) {
      let n = Array(e.length), r = 0, a = () => {
        ++r == e.length && Xb(l, t, n.filter((c) => c != null).join(l.state.lineBreak), false);
      };
      for (let c = 0; c < e.length; c++) {
        let f = new FileReader();
        f.onerror = a, f.onload = () => {
          /[\x00-\x08\x0e-\x1f]{2}/.test(f.result) || (n[c] = f.result), a();
        }, f.readAsText(e[c]);
      }
      return true;
    } else {
      let n = t.dataTransfer.getData("Text");
      if (n) return Xb(l, t, n, true), true;
    }
    return false;
  };
  Bi.paste = (l, t) => {
    if (l.state.readOnly) return true;
    l.observer.flush();
    let e = mS ? null : t.clipboardData;
    return e ? (gS(l, e.getData("text/plain") || e.getData("text/uri-list")), true) : (w_(l), false);
  };
  function k_(l, t) {
    let e = l.dom.parentNode;
    if (!e) return;
    let n = e.appendChild(document.createElement("textarea"));
    n.style.cssText = "position: fixed; left: -10000px; top: 10px", n.value = t, n.focus(), n.selectionEnd = t.length, n.selectionStart = 0, setTimeout(() => {
      n.remove(), l.focus();
    }, 50);
  }
  function T_(l) {
    let t = [], e = [], n = false;
    for (let r of l.selection.ranges) r.empty || (t.push(l.sliceDoc(r.from, r.to)), e.push(r));
    if (!t.length) {
      let r = -1;
      for (let { from: a } of l.selection.ranges) {
        let c = l.doc.lineAt(a);
        c.number > r && (t.push(c.text), e.push({
          from: c.from,
          to: Math.min(l.doc.length, c.to + 1)
        })), r = c.number;
      }
      n = true;
    }
    return {
      text: du(l, Em, t.join(l.lineBreak)),
      ranges: e,
      linewise: n
    };
  }
  let im = null;
  Bi.copy = Bi.cut = (l, t) => {
    let { text: e, ranges: n, linewise: r } = T_(l.state);
    if (!e && !r) return false;
    im = r ? e : null, t.type == "cut" && !l.state.readOnly && l.dispatch({
      changes: n,
      scrollIntoView: true,
      userEvent: "delete.cut"
    });
    let a = mS ? null : t.clipboardData;
    return a ? (a.clearData(), a.setData("text/plain", e), true) : (k_(l, e), false);
  };
  const yS = Ii.define();
  function bS(l, t) {
    let e = [];
    for (let n of l.facet(Pv)) {
      let r = n(l, t);
      r && e.push(r);
    }
    return e.length ? l.update({
      effects: e,
      annotations: yS.of(true)
    }) : null;
  }
  function vS(l) {
    setTimeout(() => {
      let t = l.hasFocus;
      if (t != l.inputState.notifiedFocused) {
        let e = bS(l.state, t);
        e ? l.dispatch(e) : l.update([]);
      }
    }, 10);
  }
  Mi.focus = (l) => {
    l.inputState.lastFocusTime = Date.now(), !l.scrollDOM.scrollTop && (l.inputState.lastScrollTop || l.inputState.lastScrollLeft) && (l.scrollDOM.scrollTop = l.inputState.lastScrollTop, l.scrollDOM.scrollLeft = l.inputState.lastScrollLeft), vS(l);
  };
  Mi.blur = (l) => {
    l.observer.clearSelectionRange(), vS(l);
  };
  Mi.compositionstart = Mi.compositionupdate = (l) => {
    l.observer.editContext || (l.inputState.compositionFirstChange == null && (l.inputState.compositionFirstChange = true), l.inputState.composing < 0 && (l.inputState.composing = 0));
  };
  Mi.compositionend = (l) => {
    l.observer.editContext || (l.inputState.composing = -1, l.inputState.compositionEndedAt = Date.now(), l.inputState.compositionPendingKey = true, l.inputState.compositionPendingChange = l.observer.pendingRecords().length > 0, l.inputState.compositionFirstChange = null, F.chrome && F.android ? l.observer.flushSoon() : l.inputState.compositionPendingChange ? Promise.resolve().then(() => l.observer.flush()) : setTimeout(() => {
      l.inputState.composing < 0 && l.docView.hasComposition && l.update([]);
    }, 50));
  };
  Mi.contextmenu = (l) => {
    l.inputState.lastContextMenu = Date.now();
  };
  Bi.beforeinput = (l, t) => {
    var e, n;
    if ((t.inputType == "insertText" || t.inputType == "insertCompositionText") && (l.inputState.insertingText = t.data, l.inputState.insertingTextAt = Date.now()), t.inputType == "insertReplacementText" && l.observer.editContext) {
      let a = (e = t.dataTransfer) === null || e === void 0 ? void 0 : e.getData("text/plain"), c = t.getTargetRanges();
      if (a && c.length) {
        let f = c[0], h = l.posAtDOM(f.startContainer, f.startOffset), g = l.posAtDOM(f.endContainer, f.endOffset);
        return zm(l, {
          from: h,
          to: g,
          insert: l.state.toText(a)
        }, null), true;
      }
    }
    let r;
    if (F.chrome && F.android && (r = hS.find((a) => a.inputType == t.inputType)) && (l.observer.delayAndroidKey(r.key, r.keyCode), r.key == "Backspace" || r.key == "Delete")) {
      let a = ((n = window.visualViewport) === null || n === void 0 ? void 0 : n.height) || 0;
      setTimeout(() => {
        var c;
        (((c = window.visualViewport) === null || c === void 0 ? void 0 : c.height) || 0) > a + 10 && l.hasFocus && (l.contentDOM.blur(), l.focus());
      }, 100);
    }
    return F.ios && t.inputType == "deleteContentForward" && l.observer.flushSoon(), F.safari && t.inputType == "insertText" && l.inputState.composing >= 0 && setTimeout(() => Mi.compositionend(l, t), 20), false;
  };
  const Kb = /* @__PURE__ */ new Set();
  function O_(l) {
    Kb.has(l) || (Kb.add(l), l.addEventListener("copy", () => {
    }), l.addEventListener("cut", () => {
    }));
  }
  const Qb = [
    "pre-wrap",
    "normal",
    "pre-line",
    "break-spaces"
  ];
  let Zs = false;
  function Zb() {
    Zs = false;
  }
  class D_ {
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
      return Qb.indexOf(t) > -1 != this.lineWrapping;
    }
    mustRefreshForHeights(t) {
      let e = false;
      for (let n = 0; n < t.length; n++) {
        let r = t[n];
        r < 0 ? n++ : this.heightSamples[Math.floor(r * 10)] || (e = true, this.heightSamples[Math.floor(r * 10)] = true);
      }
      return e;
    }
    refresh(t, e, n, r, a, c) {
      let f = Qb.indexOf(t) > -1, h = Math.round(e) != Math.round(this.lineHeight) || this.lineWrapping != f;
      if (this.lineWrapping = f, this.lineHeight = e, this.charWidth = n, this.textHeight = r, this.lineLength = a, h) {
        this.heightSamples = {};
        for (let g = 0; g < c.length; g++) {
          let p = c[g];
          p < 0 ? g++ : this.heightSamples[Math.floor(p * 10)] = true;
        }
      }
      return h;
    }
  }
  class E_ {
    constructor(t, e) {
      this.from = t, this.heights = e, this.index = 0;
    }
    get more() {
      return this.index < this.heights.length;
    }
  }
  class Ki {
    constructor(t, e, n, r, a) {
      this.from = t, this.length = e, this.top = n, this.height = r, this._content = a;
    }
    get type() {
      return typeof this._content == "number" ? Ue.Text : Array.isArray(this._content) ? this._content : this._content.type;
    }
    get to() {
      return this.from + this.length;
    }
    get bottom() {
      return this.top + this.height;
    }
    get widget() {
      return this._content instanceof al ? this._content.widget : null;
    }
    get widgetLineBreaks() {
      return typeof this._content == "number" ? this._content : 0;
    }
    join(t) {
      let e = (Array.isArray(this._content) ? this._content : [
        this
      ]).concat(Array.isArray(t._content) ? t._content : [
        t
      ]);
      return new Ki(this.from, this.length + t.length, this.top, this.height + t.height, e);
    }
  }
  var Wt = (function(l) {
    return l[l.ByPos = 0] = "ByPos", l[l.ByHeight = 1] = "ByHeight", l[l.ByPosNoHeight = 2] = "ByPosNoHeight", l;
  })(Wt || (Wt = {}));
  const zc = 1e-3;
  class Ve {
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
      this.height != t && (Math.abs(this.height - t) > zc && (Zs = true), this.height = t);
    }
    replace(t, e, n) {
      return Ve.of(n);
    }
    decomposeLeft(t, e) {
      e.push(this);
    }
    decomposeRight(t, e) {
      e.push(this);
    }
    applyChanges(t, e, n, r) {
      let a = this, c = n.doc;
      for (let f = r.length - 1; f >= 0; f--) {
        let { fromA: h, toA: g, fromB: p, toB: y } = r[f], v = a.lineAt(h, Wt.ByPosNoHeight, n.setDoc(e), 0, 0), S = v.to >= g ? v : a.lineAt(g, Wt.ByPosNoHeight, n, 0, 0);
        for (y += S.to - g, g = S.to; f > 0 && v.from <= r[f - 1].toA; ) h = r[f - 1].fromA, p = r[f - 1].fromB, f--, h < v.from && (v = a.lineAt(h, Wt.ByPosNoHeight, n, 0, 0));
        p += v.from - h, h = v.from;
        let w = Nm.build(n.setDoc(c), t, p, y);
        a = Zc(a, a.replace(h, g, w));
      }
      return a.updateHeight(n, 0);
    }
    static empty() {
      return new oi(0, 0);
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
      let c = 0;
      return t[e - 1] == null ? (c = 1, e--) : t[e] == null && (c = 1, n++), new B_(Ve.of(t.slice(0, e)), c, Ve.of(t.slice(n)));
    }
  }
  function Zc(l, t) {
    return l == t ? l : (l.constructor != t.constructor && (Zs = true), t);
  }
  Ve.prototype.size = 1;
  class SS extends Ve {
    constructor(t, e, n) {
      super(t, e), this.deco = n;
    }
    blockAt(t, e, n, r) {
      return new Ki(r, this.length, n, this.height, this.deco || 0);
    }
    lineAt(t, e, n, r, a) {
      return this.blockAt(0, n, r, a);
    }
    forEachLine(t, e, n, r, a, c) {
      t <= a + this.length && e >= a && c(this.blockAt(0, n, r, a));
    }
    updateHeight(t, e = 0, n = false, r) {
      return r && r.from <= e && r.more && this.setHeight(r.heights[r.index++]), this.outdated = false, this;
    }
    toString() {
      return `block(${this.length})`;
    }
  }
  class oi extends SS {
    constructor(t, e) {
      super(t, e, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0;
    }
    blockAt(t, e, n, r) {
      return new Ki(r, this.length, n, this.height, this.breaks);
    }
    replace(t, e, n) {
      let r = n[0];
      return n.length == 1 && (r instanceof oi || r instanceof Ae && r.flags & 4) && Math.abs(this.length - r.length) < 10 ? (r instanceof Ae ? r = new oi(r.length, this.height) : r.height = this.height, this.outdated || (r.outdated = false), r) : Ve.of(n);
    }
    updateHeight(t, e = 0, n = false, r) {
      return r && r.from <= e && r.more ? this.setHeight(r.heights[r.index++]) : (n || this.outdated) && this.setHeight(Math.max(this.widgetHeight, t.heightForLine(this.length - this.collapsed)) + this.breaks * t.lineHeight), this.outdated = false, this;
    }
    toString() {
      return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
    }
  }
  class Ae extends Ve {
    constructor(t) {
      super(t, 0);
    }
    heightMetrics(t, e) {
      let n = t.doc.lineAt(e).number, r = t.doc.lineAt(e + this.length).number, a = r - n + 1, c, f = 0;
      if (t.lineWrapping) {
        let h = Math.min(this.height, t.lineHeight * a);
        c = h / a, this.length > a + 1 && (f = (this.height - h) / (this.length - a - 1));
      } else c = this.height / a;
      return {
        firstLine: n,
        lastLine: r,
        perLine: c,
        perChar: f
      };
    }
    blockAt(t, e, n, r) {
      let { firstLine: a, lastLine: c, perLine: f, perChar: h } = this.heightMetrics(e, r);
      if (e.lineWrapping) {
        let g = r + (t < e.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (t - n) / this.height)) * this.length)), p = e.doc.lineAt(g), y = f + p.length * h, v = Math.max(n, t - y / 2);
        return new Ki(p.from, p.length, v, y, 0);
      } else {
        let g = Math.max(0, Math.min(c - a, Math.floor((t - n) / f))), { from: p, length: y } = e.doc.line(a + g);
        return new Ki(p, y, n + f * g, f, 0);
      }
    }
    lineAt(t, e, n, r, a) {
      if (e == Wt.ByHeight) return this.blockAt(t, n, r, a);
      if (e == Wt.ByPosNoHeight) {
        let { from: S, to: w } = n.doc.lineAt(t);
        return new Ki(S, w - S, 0, 0, 0);
      }
      let { firstLine: c, perLine: f, perChar: h } = this.heightMetrics(n, a), g = n.doc.lineAt(t), p = f + g.length * h, y = g.number - c, v = r + f * y + h * (g.from - a - y);
      return new Ki(g.from, g.length, Math.max(r, Math.min(v, r + this.height - p)), p, 0);
    }
    forEachLine(t, e, n, r, a, c) {
      t = Math.max(t, a), e = Math.min(e, a + this.length);
      let { firstLine: f, perLine: h, perChar: g } = this.heightMetrics(n, a);
      for (let p = t, y = r; p <= e; ) {
        let v = n.doc.lineAt(p);
        if (p == t) {
          let w = v.number - f;
          y += h * w + g * (t - a - w);
        }
        let S = h + g * v.length;
        c(new Ki(v.from, v.length, y, S, 0)), y += S, p = v.to + 1;
      }
    }
    replace(t, e, n) {
      let r = this.length - e;
      if (r > 0) {
        let a = n[n.length - 1];
        a instanceof Ae ? n[n.length - 1] = new Ae(a.length + r) : n.push(null, new Ae(r - 1));
      }
      if (t > 0) {
        let a = n[0];
        a instanceof Ae ? n[0] = new Ae(t + a.length) : n.unshift(new Ae(t - 1), null);
      }
      return Ve.of(n);
    }
    decomposeLeft(t, e) {
      e.push(new Ae(t - 1), null);
    }
    decomposeRight(t, e) {
      e.push(null, new Ae(this.length - t - 1));
    }
    updateHeight(t, e = 0, n = false, r) {
      let a = e + this.length;
      if (r && r.from <= e + this.length && r.more) {
        let c = [], f = Math.max(e, r.from), h = -1;
        for (r.from > e && c.push(new Ae(r.from - e - 1).updateHeight(t, e)); f <= a && r.more; ) {
          let p = t.doc.lineAt(f).length;
          c.length && c.push(null);
          let y = r.heights[r.index++];
          h == -1 ? h = y : Math.abs(y - h) >= zc && (h = -2);
          let v = new oi(p, y);
          v.outdated = false, c.push(v), f += p + 1;
        }
        f <= a && c.push(null, new Ae(a - f).updateHeight(t, f));
        let g = Ve.of(c);
        return (h < 0 || Math.abs(g.height - this.height) >= zc || Math.abs(h - this.heightMetrics(t, e).perLine) >= zc) && (Zs = true), Zc(this, g);
      } else (n || this.outdated) && (this.setHeight(t.heightForGap(e, e + this.length)), this.outdated = false);
      return this;
    }
    toString() {
      return `gap(${this.length})`;
    }
  }
  class B_ extends Ve {
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
      let c = r + this.left.height, f = a + this.left.length + this.break, h = e == Wt.ByHeight ? t < c : t < f, g = h ? this.left.lineAt(t, e, n, r, a) : this.right.lineAt(t, e, n, c, f);
      if (this.break || (h ? g.to < f : g.from > f)) return g;
      let p = e == Wt.ByPosNoHeight ? Wt.ByPosNoHeight : Wt.ByPos;
      return h ? g.join(this.right.lineAt(f, p, n, c, f)) : this.left.lineAt(f, p, n, r, a).join(g);
    }
    forEachLine(t, e, n, r, a, c) {
      let f = r + this.left.height, h = a + this.left.length + this.break;
      if (this.break) t < h && this.left.forEachLine(t, e, n, r, a, c), e >= h && this.right.forEachLine(t, e, n, f, h, c);
      else {
        let g = this.lineAt(h, Wt.ByPos, n, r, a);
        t < g.from && this.left.forEachLine(t, g.from - 1, n, r, a, c), g.to >= t && g.from <= e && c(g), e > g.to && this.right.forEachLine(g.to + 1, e, n, f, h, c);
      }
    }
    replace(t, e, n) {
      let r = this.left.length + this.break;
      if (e < r) return this.balanced(this.left.replace(t, e, n), this.right);
      if (t > this.left.length) return this.balanced(this.left, this.right.replace(t - r, e - r, n));
      let a = [];
      t > 0 && this.decomposeLeft(t, a);
      let c = a.length;
      for (let f of n) a.push(f);
      if (t > 0 && Wb(a, c - 1), e < this.length) {
        let f = a.length;
        this.decomposeRight(e, a), Wb(a, f);
      }
      return Ve.of(a);
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
      return t.size > 2 * e.size || e.size > 2 * t.size ? Ve.of(this.break ? [
        t,
        null,
        e
      ] : [
        t,
        e
      ]) : (this.left = Zc(this.left, t), this.right = Zc(this.right, e), this.setHeight(t.height + e.height), this.outdated = t.outdated || e.outdated, this.size = t.size + e.size, this.length = t.length + this.break + e.length, this);
    }
    updateHeight(t, e = 0, n = false, r) {
      let { left: a, right: c } = this, f = e + a.length + this.break, h = null;
      return r && r.from <= e + a.length && r.more ? h = a = a.updateHeight(t, e, n, r) : a.updateHeight(t, e, n), r && r.from <= f + c.length && r.more ? h = c = c.updateHeight(t, f, n, r) : c.updateHeight(t, f, n), h ? this.balanced(a, c) : (this.height = this.left.height + this.right.height, this.outdated = false, this);
    }
    toString() {
      return this.left + (this.break ? " " : "-") + this.right;
    }
  }
  function Wb(l, t) {
    let e, n;
    l[t] == null && (e = l[t - 1]) instanceof Ae && (n = l[t + 1]) instanceof Ae && l.splice(t - 1, 3, new Ae(e.length + 1 + n.length));
  }
  const R_ = 5;
  class Nm {
    constructor(t, e) {
      this.pos = t, this.oracle = e, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = t;
    }
    get isCovered() {
      return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
    }
    span(t, e) {
      if (this.lineStart > -1) {
        let n = Math.min(e, this.lineEnd), r = this.nodes[this.nodes.length - 1];
        r instanceof oi ? r.length += n - this.pos : (n > this.pos || !this.isCovered) && this.nodes.push(new oi(n - this.pos, -1)), this.writtenTo = n, e > n && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
      }
      this.pos = e;
    }
    point(t, e, n) {
      if (t < e || n.heightRelevant) {
        let r = n.widget ? n.widget.estimatedHeight : 0, a = n.widget ? n.widget.lineBreaks : 0;
        r < 0 && (r = this.oracle.lineHeight);
        let c = e - t;
        n.block ? this.addBlock(new SS(c, r, n)) : (c || a || r >= R_) && this.addLineDeco(r, a, c);
      } else e > t && this.span(t, e);
      this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
    }
    enterLine() {
      if (this.lineStart > -1) return;
      let { from: t, to: e } = this.oracle.doc.lineAt(this.pos);
      this.lineStart = t, this.lineEnd = e, this.writtenTo < t && ((this.writtenTo < t - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, t - 1)), this.nodes.push(null)), this.pos > t && this.nodes.push(new oi(this.pos - t, -1)), this.writtenTo = this.pos;
    }
    blankContent(t, e) {
      let n = new Ae(e - t);
      return this.oracle.doc.lineAt(t).to == e && (n.flags |= 4), n;
    }
    ensureLine() {
      this.enterLine();
      let t = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
      if (t instanceof oi) return t;
      let e = new oi(0, -1);
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
      this.lineStart > -1 && !(e instanceof oi) && !this.isCovered ? this.nodes.push(new oi(0, -1)) : (this.writtenTo < this.pos || e == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
      let n = t;
      for (let r of this.nodes) r instanceof oi && r.updateHeight(this.oracle, n), n += r ? r.length : 1;
      return this.nodes;
    }
    static build(t, e, n, r) {
      let a = new Nm(n, t);
      return Bt.spans(e, n, r, a, 0), a.finish(n);
    }
  }
  function z_(l, t, e) {
    let n = new N_();
    return Bt.compare(l, t, e, n, 0), n.changes;
  }
  class N_ {
    constructor() {
      this.changes = [];
    }
    compareRange() {
    }
    comparePoint(t, e, n, r) {
      (t < e || n && n.heightRelevant || r && r.heightRelevant) && Rc(t, e, this.changes, 5);
    }
  }
  function L_(l, t) {
    let e = l.getBoundingClientRect(), n = l.ownerDocument, r = n.defaultView || window, a = Math.max(0, e.left), c = Math.min(r.innerWidth, e.right), f = Math.max(0, e.top), h = Math.min(r.innerHeight, e.bottom);
    for (let g = l.parentNode; g && g != n.body; ) if (g.nodeType == 1) {
      let p = g, y = window.getComputedStyle(p);
      if ((p.scrollHeight > p.clientHeight || p.scrollWidth > p.clientWidth) && y.overflow != "visible") {
        let v = p.getBoundingClientRect();
        a = Math.max(a, v.left), c = Math.min(c, v.right), f = Math.max(f, v.top), h = Math.min(g == l.parentNode ? r.innerHeight : h, v.bottom);
      }
      g = y.position == "absolute" || y.position == "fixed" ? p.offsetParent : p.parentNode;
    } else if (g.nodeType == 11) g = g.host;
    else break;
    return {
      left: a - e.left,
      right: Math.max(a, c) - e.left,
      top: f - (e.top + t),
      bottom: Math.max(f, h) - (e.top + t)
    };
  }
  function H_(l) {
    let t = l.getBoundingClientRect(), e = l.ownerDocument.defaultView || window;
    return t.left < e.innerWidth && t.right > 0 && t.top < e.innerHeight && t.bottom > 0;
  }
  function U_(l, t) {
    let e = l.getBoundingClientRect();
    return {
      left: 0,
      right: e.right - e.left,
      top: t,
      bottom: e.bottom - (e.top + t)
    };
  }
  class ld {
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
      return ct.replace({
        widget: new V_(this.displaySize * (e ? t.scaleY : t.scaleX), e)
      }).range(this.from, this.to);
    }
  }
  class V_ extends Mn {
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
  class Jb {
    constructor(t) {
      this.state = t, this.pixelViewport = {
        left: 0,
        right: window.innerWidth,
        top: 0,
        bottom: 0
      }, this.inView = true, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = false, this.scaleX = 1, this.scaleY = 1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = Fb, this.scrollTarget = null, this.printing = false, this.mustMeasureContent = true, this.defaultTextDirection = Jt.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = false;
      let e = t.facet(Bm).some((n) => typeof n != "function" && n.class == "cm-lineWrapping");
      this.heightOracle = new D_(e), this.stateDeco = t.facet(ya).filter((n) => typeof n != "function"), this.heightMap = Ve.empty().applyChanges(this.stateDeco, Rt.empty, this.heightOracle.setDoc(t.doc), [
        new Ai(0, 0, 0, t.doc.length)
      ]);
      for (let n = 0; n < 2 && (this.viewport = this.getViewport(0, null), !!this.updateForViewport()); n++) ;
      this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = ct.set(this.lineGaps.map((n) => n.draw(this, false))), this.computeVisibleRanges();
    }
    updateForViewport() {
      let t = [
        this.viewport
      ], { main: e } = this.state.selection;
      for (let n = 0; n <= 1; n++) {
        let r = n ? e.head : e.anchor;
        if (!t.some(({ from: a, to: c }) => r >= a && r <= c)) {
          let { from: a, to: c } = this.lineBlockAt(r);
          t.push(new fc(a, c));
        }
      }
      return this.viewports = t.sort((n, r) => n.from - r.from), this.updateScaler();
    }
    updateScaler() {
      let t = this.scaler;
      return this.scaler = this.heightMap.height <= 7e6 ? Fb : new Lm(this.heightOracle, this.heightMap, this.viewports), t.eq(this.scaler) ? 0 : 2;
    }
    updateViewportLines() {
      this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (t) => {
        this.viewportLines.push(ia(t, this.scaler));
      });
    }
    update(t, e = null) {
      this.state = t.state;
      let n = this.stateDeco;
      this.stateDeco = this.state.facet(ya).filter((p) => typeof p != "function");
      let r = t.changedRanges, a = Ai.extendWithRanges(r, z_(n, this.stateDeco, t ? t.changes : de.empty(this.state.doc.length))), c = this.heightMap.height, f = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
      Zb(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, t.startState.doc, this.heightOracle.setDoc(this.state.doc), a), (this.heightMap.height != c || Zs) && (t.flags |= 2), f ? (this.scrollAnchorPos = t.changes.mapPos(f.from, -1), this.scrollAnchorHeight = f.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = c);
      let h = a.length ? this.mapViewport(this.viewport, t.changes) : this.viewport;
      (e && (e.range.head < h.from || e.range.head > h.to) || !this.viewportIsAppropriate(h)) && (h = this.getViewport(0, e));
      let g = h.from != this.viewport.from || h.to != this.viewport.to;
      this.viewport = h, t.flags |= this.updateForViewport(), (g || !t.changes.empty || t.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, t.changes))), t.flags |= this.computeVisibleRanges(t.changes), e && (this.scrollTarget = e), !this.mustEnforceCursorAssoc && t.selectionSet && t.view.lineWrapping && t.state.selection.main.empty && t.state.selection.main.assoc && !t.state.facet($v) && (this.mustEnforceCursorAssoc = true);
    }
    measure(t) {
      let e = t.contentDOM, n = window.getComputedStyle(e), r = this.heightOracle, a = n.whiteSpace;
      this.defaultTextDirection = n.direction == "rtl" ? Jt.RTL : Jt.LTR;
      let c = this.heightOracle.mustRefreshForWrapping(a), f = e.getBoundingClientRect(), h = c || this.mustMeasureContent || this.contentDOMHeight != f.height;
      this.contentDOMHeight = f.height, this.mustMeasureContent = false;
      let g = 0, p = 0;
      if (f.width && f.height) {
        let { scaleX: Q, scaleY: N } = Tv(e, f);
        (Q > 5e-3 && Math.abs(this.scaleX - Q) > 5e-3 || N > 5e-3 && Math.abs(this.scaleY - N) > 5e-3) && (this.scaleX = Q, this.scaleY = N, g |= 16, c = h = true);
      }
      let y = (parseInt(n.paddingTop) || 0) * this.scaleY, v = (parseInt(n.paddingBottom) || 0) * this.scaleY;
      (this.paddingTop != y || this.paddingBottom != v) && (this.paddingTop = y, this.paddingBottom = v, g |= 18), this.editorWidth != t.scrollDOM.clientWidth && (r.lineWrapping && (h = true), this.editorWidth = t.scrollDOM.clientWidth, g |= 16);
      let S = t.scrollDOM.scrollTop * this.scaleY;
      this.scrollTop != S && (this.scrollAnchorHeight = -1, this.scrollTop = S), this.scrolledToBottom = Ev(t.scrollDOM);
      let w = (this.printing ? U_ : L_)(e, this.paddingTop), A = w.top - this.pixelViewport.top, _ = w.bottom - this.pixelViewport.bottom;
      this.pixelViewport = w;
      let T = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
      if (T != this.inView && (this.inView = T, T && (h = true)), !this.inView && !this.scrollTarget && !H_(t.dom)) return 0;
      let j = f.width;
      if ((this.contentDOMWidth != j || this.editorHeight != t.scrollDOM.clientHeight) && (this.contentDOMWidth = f.width, this.editorHeight = t.scrollDOM.clientHeight, g |= 16), h) {
        let Q = t.docView.measureVisibleLineHeights(this.viewport);
        if (r.mustRefreshForHeights(Q) && (c = true), c || r.lineWrapping && Math.abs(j - this.contentDOMWidth) > r.charWidth) {
          let { lineHeight: N, charWidth: G, textHeight: V } = t.docView.measureTextSize();
          c = N > 0 && r.refresh(a, N, G, V, Math.max(5, j / G), Q), c && (t.docView.minWidth = 0, g |= 16);
        }
        A > 0 && _ > 0 ? p = Math.max(A, _) : A < 0 && _ < 0 && (p = Math.min(A, _)), Zb();
        for (let N of this.viewports) {
          let G = N.from == this.viewport.from ? Q : t.docView.measureVisibleLineHeights(N);
          this.heightMap = (c ? Ve.empty().applyChanges(this.stateDeco, Rt.empty, this.heightOracle, [
            new Ai(0, 0, 0, t.state.doc.length)
          ]) : this.heightMap).updateHeight(r, 0, c, new E_(N.from, G));
        }
        Zs && (g |= 2);
      }
      let L = !this.viewportIsAppropriate(this.viewport, p) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
      return L && (g & 2 && (g |= this.updateScaler()), this.viewport = this.getViewport(p, this.scrollTarget), g |= this.updateForViewport()), (g & 2 || L) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(c ? [] : this.lineGaps, t)), g |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = false, t.docView.enforceCursorAssoc()), g;
    }
    get visibleTop() {
      return this.scaler.fromDOM(this.pixelViewport.top);
    }
    get visibleBottom() {
      return this.scaler.fromDOM(this.pixelViewport.bottom);
    }
    getViewport(t, e) {
      let n = 0.5 - Math.max(-0.5, Math.min(0.5, t / 1e3 / 2)), r = this.heightMap, a = this.heightOracle, { visibleTop: c, visibleBottom: f } = this, h = new fc(r.lineAt(c - n * 1e3, Wt.ByHeight, a, 0, 0).from, r.lineAt(f + (1 - n) * 1e3, Wt.ByHeight, a, 0, 0).to);
      if (e) {
        let { head: g } = e.range;
        if (g < h.from || g > h.to) {
          let p = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), y = r.lineAt(g, Wt.ByPos, a, 0, 0), v;
          e.y == "center" ? v = (y.top + y.bottom) / 2 - p / 2 : e.y == "start" || e.y == "nearest" && g < h.from ? v = y.top : v = y.bottom - p, h = new fc(r.lineAt(v - 1e3 / 2, Wt.ByHeight, a, 0, 0).from, r.lineAt(v + p + 1e3 / 2, Wt.ByHeight, a, 0, 0).to);
        }
      }
      return h;
    }
    mapViewport(t, e) {
      let n = e.mapPos(t.from, -1), r = e.mapPos(t.to, 1);
      return new fc(this.heightMap.lineAt(n, Wt.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(r, Wt.ByPos, this.heightOracle, 0, 0).to);
    }
    viewportIsAppropriate({ from: t, to: e }, n = 0) {
      if (!this.inView) return true;
      let { top: r } = this.heightMap.lineAt(t, Wt.ByPos, this.heightOracle, 0, 0), { bottom: a } = this.heightMap.lineAt(e, Wt.ByPos, this.heightOracle, 0, 0), { visibleTop: c, visibleBottom: f } = this;
      return (t == 0 || r <= c - Math.max(10, Math.min(-n, 250))) && (e == this.state.doc.length || a >= f + Math.max(10, Math.min(n, 250))) && r > c - 2 * 1e3 && a < f + 2 * 1e3;
    }
    mapLineGaps(t, e) {
      if (!t.length || e.empty) return t;
      let n = [];
      for (let r of t) e.touchesRange(r.from, r.to) || n.push(new ld(e.mapPos(r.from), e.mapPos(r.to), r.size, r.displaySize));
      return n;
    }
    ensureLineGaps(t, e) {
      let n = this.heightOracle.lineWrapping, r = n ? 1e4 : 2e3, a = r >> 1, c = r << 1;
      if (this.defaultTextDirection != Jt.LTR && !n) return [];
      let f = [], h = (p, y, v, S) => {
        if (y - p < a) return;
        let w = this.state.selection.main, A = [
          w.from
        ];
        w.empty || A.push(w.to);
        for (let T of A) if (T > p && T < y) {
          h(p, T - 10, v, S), h(T + 10, y, v, S);
          return;
        }
        let _ = j_(t, (T) => T.from >= v.from && T.to <= v.to && Math.abs(T.from - p) < a && Math.abs(T.to - y) < a && !A.some((j) => T.from < j && T.to > j));
        if (!_) {
          if (y < v.to && e && n && e.visibleRanges.some((L) => L.from <= y && L.to >= y)) {
            let L = e.moveToLineBoundary(K.cursor(y), false, true).head;
            L > p && (y = L);
          }
          let T = this.gapSize(v, p, y, S), j = n || T < 2e6 ? T : 2e6;
          _ = new ld(p, y, T, j);
        }
        f.push(_);
      }, g = (p) => {
        if (p.length < c || p.type != Ue.Text) return;
        let y = q_(p.from, p.to, this.stateDeco);
        if (y.total < c) return;
        let v = this.scrollTarget ? this.scrollTarget.range.head : null, S, w;
        if (n) {
          let A = r / this.heightOracle.lineLength * this.heightOracle.lineHeight, _, T;
          if (v != null) {
            let j = dc(y, v), L = ((this.visibleBottom - this.visibleTop) / 2 + A) / p.height;
            _ = j - L, T = j + L;
          } else _ = (this.visibleTop - p.top - A) / p.height, T = (this.visibleBottom - p.top + A) / p.height;
          S = hc(y, _), w = hc(y, T);
        } else {
          let A = y.total * this.heightOracle.charWidth, _ = r * this.heightOracle.charWidth, T = 0;
          if (A > 2e6) for (let G of t) G.from >= p.from && G.from < p.to && G.size != G.displaySize && G.from * this.heightOracle.charWidth + T < this.pixelViewport.left && (T = G.size - G.displaySize);
          let j = this.pixelViewport.left + T, L = this.pixelViewport.right + T, Q, N;
          if (v != null) {
            let G = dc(y, v), V = ((L - j) / 2 + _) / A;
            Q = G - V, N = G + V;
          } else Q = (j - _) / A, N = (L + _) / A;
          S = hc(y, Q), w = hc(y, N);
        }
        S > p.from && h(p.from, S, p, y), w < p.to && h(w, p.to, p, y);
      };
      for (let p of this.viewportLines) Array.isArray(p.type) ? p.type.forEach(g) : g(p);
      return f;
    }
    gapSize(t, e, n, r) {
      let a = dc(r, n) - dc(r, e);
      return this.heightOracle.lineWrapping ? t.height * a : r.total * this.heightOracle.charWidth * a;
    }
    updateLineGaps(t) {
      ld.same(t, this.lineGaps) || (this.lineGaps = t, this.lineGapDeco = ct.set(t.map((e) => e.draw(this, this.heightOracle.lineWrapping))));
    }
    computeVisibleRanges(t) {
      let e = this.stateDeco;
      this.lineGaps.length && (e = e.concat(this.lineGapDeco));
      let n = [];
      Bt.spans(e, this.viewport.from, this.viewport.to, {
        span(a, c) {
          n.push({
            from: a,
            to: c
          });
        },
        point() {
        }
      }, 20);
      let r = 0;
      if (n.length != this.visibleRanges.length) r = 12;
      else for (let a = 0; a < n.length && !(r & 8); a++) {
        let c = this.visibleRanges[a], f = n[a];
        (c.from != f.from || c.to != f.to) && (r |= 4, t && t.mapPos(c.from, -1) == f.from && t.mapPos(c.to, 1) == f.to || (r |= 8));
      }
      return this.visibleRanges = n, r;
    }
    lineBlockAt(t) {
      return t >= this.viewport.from && t <= this.viewport.to && this.viewportLines.find((e) => e.from <= t && e.to >= t) || ia(this.heightMap.lineAt(t, Wt.ByPos, this.heightOracle, 0, 0), this.scaler);
    }
    lineBlockAtHeight(t) {
      return t >= this.viewportLines[0].top && t <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((e) => e.top <= t && e.bottom >= t) || ia(this.heightMap.lineAt(this.scaler.fromDOM(t), Wt.ByHeight, this.heightOracle, 0, 0), this.scaler);
    }
    scrollAnchorAt(t) {
      let e = this.lineBlockAtHeight(t + 8);
      return e.from >= this.viewport.from || this.viewportLines[0].top - t > 200 ? e : this.viewportLines[0];
    }
    elementAtHeight(t) {
      return ia(this.heightMap.blockAt(this.scaler.fromDOM(t), this.heightOracle, 0, 0), this.scaler);
    }
    get docHeight() {
      return this.scaler.toDOM(this.heightMap.height);
    }
    get contentHeight() {
      return this.docHeight + this.paddingTop + this.paddingBottom;
    }
  }
  class fc {
    constructor(t, e) {
      this.from = t, this.to = e;
    }
  }
  function q_(l, t, e) {
    let n = [], r = l, a = 0;
    return Bt.spans(e, l, t, {
      span() {
      },
      point(c, f) {
        c > r && (n.push({
          from: r,
          to: c
        }), a += c - r), r = f;
      }
    }, 20), r < t && (n.push({
      from: r,
      to: t
    }), a += t - r), {
      total: a,
      ranges: n
    };
  }
  function hc({ total: l, ranges: t }, e) {
    if (e <= 0) return t[0].from;
    if (e >= 1) return t[t.length - 1].to;
    let n = Math.floor(l * e);
    for (let r = 0; ; r++) {
      let { from: a, to: c } = t[r], f = c - a;
      if (n <= f) return a + n;
      n -= f;
    }
  }
  function dc(l, t) {
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
  function j_(l, t) {
    for (let e of l) if (t(e)) return e;
  }
  const Fb = {
    toDOM(l) {
      return l;
    },
    fromDOM(l) {
      return l;
    },
    scale: 1,
    eq(l) {
      return l == this;
    }
  };
  class Lm {
    constructor(t, e, n) {
      let r = 0, a = 0, c = 0;
      this.viewports = n.map(({ from: f, to: h }) => {
        let g = e.lineAt(f, Wt.ByPos, t, 0, 0).top, p = e.lineAt(h, Wt.ByPos, t, 0, 0).bottom;
        return r += p - g, {
          from: f,
          to: h,
          top: g,
          bottom: p,
          domTop: 0,
          domBottom: 0
        };
      }), this.scale = (7e6 - r) / (e.height - r);
      for (let f of this.viewports) f.domTop = c + (f.top - a) * this.scale, c = f.domBottom = f.domTop + (f.bottom - f.top), a = f.bottom;
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
      return t instanceof Lm ? this.scale == t.scale && this.viewports.length == t.viewports.length && this.viewports.every((e, n) => e.from == t.viewports[n].from && e.to == t.viewports[n].to) : false;
    }
  }
  function ia(l, t) {
    if (t.scale == 1) return l;
    let e = t.toDOM(l.top), n = t.toDOM(l.bottom);
    return new Ki(l.from, l.length, e, n - e, Array.isArray(l._content) ? l._content.map((r) => ia(r, t)) : l._content);
  }
  const mc = et.define({
    combine: (l) => l.join(" ")
  }), nm = et.define({
    combine: (l) => l.indexOf(true) > -1
  }), lm = sl.newName(), xS = sl.newName(), wS = sl.newName(), AS = {
    "&light": "." + xS,
    "&dark": "." + wS
  };
  function sm(l, t, e) {
    return new sl(t, {
      finish(n) {
        return /&/.test(n) ? n.replace(/&\w*/, (r) => {
          if (r == "&") return l;
          if (!e || !e[r]) throw new RangeError(`Unsupported selector: ${r}`);
          return e[r];
        }) : l + " " + n;
      }
    });
  }
  const Y_ = sm("." + lm, {
    "&": {
      position: "relative !important",
      boxSizing: "border-box",
      "&.cm-focused": {
        outline: "1px dotted #212121"
      },
      display: "flex !important",
      flexDirection: "column"
    },
    ".cm-scroller": {
      display: "flex !important",
      alignItems: "flex-start !important",
      fontFamily: "monospace",
      lineHeight: 1.4,
      height: "100%",
      overflowX: "auto",
      position: "relative",
      zIndex: 0,
      overflowAnchor: "none"
    },
    ".cm-content": {
      margin: 0,
      flexGrow: 2,
      flexShrink: 0,
      display: "block",
      whiteSpace: "pre",
      wordWrap: "normal",
      boxSizing: "border-box",
      minHeight: "100%",
      padding: "4px 0",
      outline: "none",
      "&[contenteditable=true]": {
        WebkitUserModify: "read-write-plaintext-only"
      }
    },
    ".cm-lineWrapping": {
      whiteSpace_fallback: "pre-wrap",
      whiteSpace: "break-spaces",
      wordBreak: "break-word",
      overflowWrap: "anywhere",
      flexShrink: 1
    },
    "&light .cm-content": {
      caretColor: "black"
    },
    "&dark .cm-content": {
      caretColor: "white"
    },
    ".cm-line": {
      display: "block",
      padding: "0 2px 0 6px"
    },
    ".cm-layer": {
      position: "absolute",
      left: 0,
      top: 0,
      contain: "size style",
      "& > *": {
        position: "absolute"
      }
    },
    "&light .cm-selectionBackground": {
      background: "#d9d9d9"
    },
    "&dark .cm-selectionBackground": {
      background: "#222"
    },
    "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
      background: "#d7d4f0"
    },
    "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
      background: "#233"
    },
    ".cm-cursorLayer": {
      pointerEvents: "none"
    },
    "&.cm-focused > .cm-scroller > .cm-cursorLayer": {
      animation: "steps(1) cm-blink 1.2s infinite"
    },
    "@keyframes cm-blink": {
      "0%": {},
      "50%": {
        opacity: 0
      },
      "100%": {}
    },
    "@keyframes cm-blink2": {
      "0%": {},
      "50%": {
        opacity: 0
      },
      "100%": {}
    },
    ".cm-cursor, .cm-dropCursor": {
      borderLeft: "1.2px solid black",
      marginLeft: "-0.6px",
      pointerEvents: "none"
    },
    ".cm-cursor": {
      display: "none"
    },
    "&dark .cm-cursor": {
      borderLeftColor: "#ddd"
    },
    ".cm-dropCursor": {
      position: "absolute"
    },
    "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": {
      display: "block"
    },
    ".cm-iso": {
      unicodeBidi: "isolate"
    },
    ".cm-announced": {
      position: "fixed",
      top: "-10000px"
    },
    "@media print": {
      ".cm-announced": {
        display: "none"
      }
    },
    "&light .cm-activeLine": {
      backgroundColor: "#cceeff44"
    },
    "&dark .cm-activeLine": {
      backgroundColor: "#99eeff33"
    },
    "&light .cm-specialChar": {
      color: "red"
    },
    "&dark .cm-specialChar": {
      color: "#f78"
    },
    ".cm-gutters": {
      flexShrink: 0,
      display: "flex",
      height: "100%",
      boxSizing: "border-box",
      zIndex: 200
    },
    ".cm-gutters-before": {
      insetInlineStart: 0
    },
    ".cm-gutters-after": {
      insetInlineEnd: 0
    },
    "&light .cm-gutters": {
      backgroundColor: "#f5f5f5",
      color: "#6c6c6c",
      border: "0px solid #ddd",
      "&.cm-gutters-before": {
        borderRightWidth: "1px"
      },
      "&.cm-gutters-after": {
        borderLeftWidth: "1px"
      }
    },
    "&dark .cm-gutters": {
      backgroundColor: "#333338",
      color: "#ccc"
    },
    ".cm-gutter": {
      display: "flex !important",
      flexDirection: "column",
      flexShrink: 0,
      boxSizing: "border-box",
      minHeight: "100%",
      overflow: "hidden"
    },
    ".cm-gutterElement": {
      boxSizing: "border-box"
    },
    ".cm-lineNumbers .cm-gutterElement": {
      padding: "0 3px 0 5px",
      minWidth: "20px",
      textAlign: "right",
      whiteSpace: "nowrap"
    },
    "&light .cm-activeLineGutter": {
      backgroundColor: "#e2f2ff"
    },
    "&dark .cm-activeLineGutter": {
      backgroundColor: "#222227"
    },
    ".cm-panels": {
      boxSizing: "border-box",
      position: "sticky",
      left: 0,
      right: 0,
      zIndex: 300
    },
    "&light .cm-panels": {
      backgroundColor: "#f5f5f5",
      color: "black"
    },
    "&light .cm-panels-top": {
      borderBottom: "1px solid #ddd"
    },
    "&light .cm-panels-bottom": {
      borderTop: "1px solid #ddd"
    },
    "&dark .cm-panels": {
      backgroundColor: "#333338",
      color: "white"
    },
    ".cm-dialog": {
      padding: "2px 19px 4px 6px",
      position: "relative",
      "& label": {
        fontSize: "80%"
      }
    },
    ".cm-dialog-close": {
      position: "absolute",
      top: "3px",
      right: "4px",
      backgroundColor: "inherit",
      border: "none",
      font: "inherit",
      fontSize: "14px",
      padding: "0"
    },
    ".cm-tab": {
      display: "inline-block",
      overflow: "hidden",
      verticalAlign: "bottom"
    },
    ".cm-widgetBuffer": {
      verticalAlign: "text-top",
      height: "1em",
      width: 0,
      display: "inline"
    },
    ".cm-placeholder": {
      color: "#888",
      display: "inline-block",
      verticalAlign: "top",
      userSelect: "none"
    },
    ".cm-highlightSpace": {
      backgroundImage: "radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)",
      backgroundPosition: "center"
    },
    ".cm-highlightTab": {
      backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,
      backgroundSize: "auto 100%",
      backgroundPosition: "right 90%",
      backgroundRepeat: "no-repeat"
    },
    ".cm-trailingSpace": {
      backgroundColor: "#ff332255"
    },
    ".cm-button": {
      verticalAlign: "middle",
      color: "inherit",
      fontSize: "70%",
      padding: ".2em 1em",
      borderRadius: "1px"
    },
    "&light .cm-button": {
      backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
      border: "1px solid #888",
      "&:active": {
        backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
      }
    },
    "&dark .cm-button": {
      backgroundImage: "linear-gradient(#393939, #111)",
      border: "1px solid #888",
      "&:active": {
        backgroundImage: "linear-gradient(#111, #333)"
      }
    },
    ".cm-textfield": {
      verticalAlign: "middle",
      color: "inherit",
      fontSize: "70%",
      border: "1px solid silver",
      padding: ".2em .5em"
    },
    "&light .cm-textfield": {
      backgroundColor: "white"
    },
    "&dark .cm-textfield": {
      border: "1px solid #555",
      backgroundColor: "inherit"
    }
  }, AS), G_ = {
    childList: true,
    characterData: true,
    subtree: true,
    attributes: true,
    characterDataOldValue: true
  }, sd = F.ie && F.ie_version <= 11;
  class X_ {
    constructor(t) {
      this.view = t, this.active = false, this.editContext = null, this.selectionRange = new _M(), this.selectionChanged = false, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = false, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = t.contentDOM, this.observer = new MutationObserver((e) => {
        for (let n of e) this.queue.push(n);
        (F.ie && F.ie_version <= 11 || F.ios && t.composing) && e.some((n) => n.type == "childList" && n.removedNodes.length || n.type == "characterData" && n.oldValue.length > n.target.nodeValue.length) ? this.flushSoon() : this.flush();
      }), window.EditContext && F.android && t.constructor.EDIT_CONTEXT !== false && !(F.chrome && F.chrome_version < 126) && (this.editContext = new Q_(t), t.state.facet(vn) && (t.contentDOM.editContext = this.editContext.editContext)), sd && (this.onCharData = (e) => {
        this.queue.push({
          target: e.target,
          type: "characterData",
          oldValue: e.prevValue
        }), this.flushSoon();
      }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), typeof ResizeObserver == "function" && (this.resizeScroll = new ResizeObserver(() => {
        var e;
        ((e = this.view.docView) === null || e === void 0 ? void 0 : e.lastUpdate) < Date.now() - 75 && this.onResize();
      }), this.resizeScroll.observe(t.scrollDOM)), this.addWindowListeners(this.win = t.win), this.start(), typeof IntersectionObserver == "function" && (this.intersection = new IntersectionObserver((e) => {
        this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), e.length > 0 && e[e.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
      }, {
        threshold: [
          0,
          1e-3
        ]
      }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((e) => {
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
      if (n.state.facet(vn) ? n.root.activeElement != this.dom : !Bc(this.dom, r)) return;
      let a = r.anchorNode && n.docView.nearest(r.anchorNode);
      if (a && a.ignoreEvent(t)) {
        e || (this.selectionChanged = false);
        return;
      }
      (F.ie && F.ie_version <= 11 || F.android && F.chrome) && !n.state.selection.main.empty && r.focusNode && oa(r.focusNode, r.focusOffset, r.anchorNode, r.anchorOffset) ? this.flushSoon() : this.flush(false);
    }
    readSelectionRange() {
      let { view: t } = this, e = pa(t.root);
      if (!e) return false;
      let n = F.safari && t.root.nodeType == 11 && t.root.activeElement == this.dom && K_(this.view, e) || e;
      if (!n || this.selectionRange.eq(n)) return false;
      let r = Bc(this.dom, n);
      return r && !this.selectionChanged && t.inputState.lastFocusTime > Date.now() - 200 && t.inputState.lastTouchTime < Date.now() - 300 && TM(this.dom, n) ? (this.view.inputState.lastFocusTime = 0, t.docView.updateSelection(), false) : (this.selectionRange.setRange(n), r && (this.selectionChanged = true), true);
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
      this.active || (this.observer.observe(this.dom, G_), sd && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = true);
    }
    stop() {
      this.active && (this.active = false, this.observer.disconnect(), sd && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
    }
    clear() {
      this.processRecords(), this.queue.length = 0, this.selectionChanged = false;
    }
    delayAndroidKey(t, e) {
      var n;
      if (!this.delayedAndroidKey) {
        let r = () => {
          let a = this.delayedAndroidKey;
          a && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = a.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && a.force && Ls(this.dom, a.key, a.keyCode));
        };
        this.flushingAndroidKey = this.view.win.requestAnimationFrame(r);
      }
      (!this.delayedAndroidKey || t == "Enter") && (this.delayedAndroidKey = {
        key: t,
        keyCode: e,
        force: this.lastChange < Date.now() - 50 || !!(!((n = this.delayedAndroidKey) === null || n === void 0) && n.force)
      });
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
        let c = this.readMutation(a);
        c && (c.typeOver && (r = true), e == -1 ? { from: e, to: n } = c : (e = Math.min(c.from, e), n = Math.max(c.to, n)));
      }
      return {
        from: e,
        to: n,
        typeOver: r
      };
    }
    readChange() {
      let { from: t, to: e, typeOver: n } = this.processRecords(), r = this.selectionChanged && Bc(this.dom, this.selectionRange);
      if (t < 0 && !r) return null;
      t > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = false;
      let a = new c_(this.view, t, e, n);
      return this.view.docView.domChanged = {
        newSel: a.newSel ? a.newSel.main : null
      }, a;
    }
    flush(t = true) {
      if (this.delayedFlush >= 0 || this.delayedAndroidKey) return false;
      t && this.readSelectionRange();
      let e = this.readChange();
      if (!e) return this.view.requestMeasure(), false;
      let n = this.view.state, r = uS(this.view, e);
      return this.view.state == n && (e.domChanged || e.newSel && !e.newSel.main.eq(this.view.state.selection.main)) && this.view.update([]), r;
    }
    readMutation(t) {
      let e = this.view.docView.nearest(t.target);
      if (!e || e.ignoreMutation(t)) return null;
      if (e.markDirty(t.type == "attributes"), t.type == "attributes" && (e.flags |= 4), t.type == "childList") {
        let n = Pb(e, t.previousSibling || t.target.previousSibling, -1), r = Pb(e, t.nextSibling || t.target.nextSibling, 1);
        return {
          from: n ? e.posAfter(n) : e.posAtStart,
          to: r ? e.posBefore(r) : e.posAtEnd,
          typeOver: false
        };
      } else return t.type == "characterData" ? {
        from: e.posAtStart,
        to: e.posAtEnd,
        typeOver: t.target.nodeValue == t.oldValue
      } : null;
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
      this.editContext && (this.editContext.update(t), t.startState.facet(vn) != t.state.facet(vn) && (t.view.contentDOM.editContext = t.state.facet(vn) ? this.editContext.editContext : null));
    }
    destroy() {
      var t, e, n;
      this.stop(), (t = this.intersection) === null || t === void 0 || t.disconnect(), (e = this.gapIntersection) === null || e === void 0 || e.disconnect(), (n = this.resizeScroll) === null || n === void 0 || n.disconnect();
      for (let r of this.scrollTargets) r.removeEventListener("scroll", this.onScroll);
      this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy());
    }
  }
  function Pb(l, t, e) {
    for (; t; ) {
      let n = Yt.get(t);
      if (n && n.parent == l) return n;
      let r = t.parentNode;
      t = r != l.dom ? r : e > 0 ? t.nextSibling : t.previousSibling;
    }
    return null;
  }
  function Ib(l, t) {
    let e = t.startContainer, n = t.startOffset, r = t.endContainer, a = t.endOffset, c = l.docView.domAtPos(l.state.selection.main.anchor);
    return oa(c.node, c.offset, r, a) && ([e, n, r, a] = [
      r,
      a,
      e,
      n
    ]), {
      anchorNode: e,
      anchorOffset: n,
      focusNode: r,
      focusOffset: a
    };
  }
  function K_(l, t) {
    if (t.getComposedRanges) {
      let r = t.getComposedRanges(l.root)[0];
      if (r) return Ib(l, r);
    }
    let e = null;
    function n(r) {
      r.preventDefault(), r.stopImmediatePropagation(), e = r.getTargetRanges()[0];
    }
    return l.contentDOM.addEventListener("beforeinput", n, true), l.dom.ownerDocument.execCommand("indent"), l.contentDOM.removeEventListener("beforeinput", n, true), e ? Ib(l, e) : null;
  }
  class Q_ {
    constructor(t) {
      this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = /* @__PURE__ */ Object.create(null), this.composing = null, this.resetRange(t.state);
      let e = this.editContext = new window.EditContext({
        text: t.state.doc.sliceString(this.from, this.to),
        selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, t.state.selection.main.anchor))),
        selectionEnd: this.toContextPos(t.state.selection.main.head)
      });
      this.handlers.textupdate = (n) => {
        let r = t.state.selection.main, { anchor: a, head: c } = r, f = this.toEditorPos(n.updateRangeStart), h = this.toEditorPos(n.updateRangeEnd);
        t.inputState.composing >= 0 && !this.composing && (this.composing = {
          contextBase: n.updateRangeStart,
          editorBase: f,
          drifted: false
        });
        let g = h - f > n.text.length;
        f == this.from && a < this.from ? f = a : h == this.to && a > this.to && (h = a);
        let p = fS(t.state.sliceDoc(f, h), n.text, (g ? r.from : r.to) - f, g ? "end" : null);
        if (!p) {
          let v = K.single(this.toEditorPos(n.selectionStart), this.toEditorPos(n.selectionEnd));
          v.main.eq(r) || t.dispatch({
            selection: v,
            userEvent: "select"
          });
          return;
        }
        let y = {
          from: p.from + f,
          to: p.toA + f,
          insert: Rt.of(n.text.slice(p.from, p.toB).split(`
`))
        };
        if ((F.mac || F.android) && y.from == c - 1 && /^\. ?$/.test(n.text) && t.contentDOM.getAttribute("autocorrect") == "off" && (y = {
          from: f,
          to: h,
          insert: Rt.of([
            n.text.replace(".", " ")
          ])
        }), this.pendingContextChange = y, !t.state.readOnly) {
          let v = this.to - this.from + (y.to - y.from + y.insert.length);
          zm(t, y, K.single(this.toEditorPos(n.selectionStart, v), this.toEditorPos(n.selectionEnd, v)));
        }
        this.pendingContextChange && (this.revertPending(t.state), this.setSelection(t.state)), y.from < y.to && !y.insert.length && t.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(e.text.slice(Math.max(0, n.updateRangeStart - 1), Math.min(e.text.length, n.updateRangeStart + 1))) && this.handlers.compositionend(n);
      }, this.handlers.characterboundsupdate = (n) => {
        let r = [], a = null;
        for (let c = this.toEditorPos(n.rangeStart), f = this.toEditorPos(n.rangeEnd); c < f; c++) {
          let h = t.coordsForChar(c);
          a = h && new DOMRect(h.left, h.top, h.right - h.left, h.bottom - h.top) || a || new DOMRect(), r.push(a);
        }
        e.updateCharacterBounds(n.rangeStart, r);
      }, this.handlers.textformatupdate = (n) => {
        let r = [];
        for (let a of n.getTextFormats()) {
          let c = a.underlineStyle, f = a.underlineThickness;
          if (!/none/i.test(c) && !/none/i.test(f)) {
            let h = this.toEditorPos(a.rangeStart), g = this.toEditorPos(a.rangeEnd);
            if (h < g) {
              let p = `text-decoration: underline ${/^[a-z]/.test(c) ? c + " " : c == "Dashed" ? "dashed " : c == "Squiggle" ? "wavy " : ""}${/thin/i.test(f) ? 1 : 2}px`;
              r.push(ct.mark({
                attributes: {
                  style: p
                }
              }).range(h, g));
            }
          }
        }
        t.dispatch({
          effects: eS.of(ct.set(r))
        });
      }, this.handlers.compositionstart = () => {
        t.inputState.composing < 0 && (t.inputState.composing = 0, t.inputState.compositionFirstChange = true);
      }, this.handlers.compositionend = () => {
        if (t.inputState.composing = -1, t.inputState.compositionFirstChange = null, this.composing) {
          let { drifted: n } = this.composing;
          this.composing = null, n && this.reset(t.state);
        }
      };
      for (let n in this.handlers) e.addEventListener(n, this.handlers[n]);
      this.measureReq = {
        read: (n) => {
          this.editContext.updateControlBounds(n.contentDOM.getBoundingClientRect());
          let r = pa(n.root);
          r && r.rangeCount && this.editContext.updateSelectionBounds(r.getRangeAt(0).getBoundingClientRect());
        }
      };
    }
    applyEdits(t) {
      let e = 0, n = false, r = this.pendingContextChange;
      return t.changes.iterChanges((a, c, f, h, g) => {
        if (n) return;
        let p = g.length - (c - a);
        if (r && c >= r.to) if (r.from == a && r.to == c && r.insert.eq(g)) {
          r = this.pendingContextChange = null, e += p, this.to += p;
          return;
        } else r = null, this.revertPending(t.state);
        if (a += e, c += e, c <= this.from) this.from += p, this.to += p;
        else if (a < this.to) {
          if (a < this.from || c > this.to || this.to - this.from + g.length > 3e4) {
            n = true;
            return;
          }
          this.editContext.updateText(this.toContextPos(a), this.toContextPos(c), g.toString()), this.to += p;
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
      this.dispatchTransactions = t.dispatchTransactions || n && ((r) => r.forEach((a) => n(a, this))) || ((r) => this.update(r)), this.dispatch = this.dispatch.bind(this), this._root = t.root || kM(t.parent) || document, this.viewState = new Jb(t.state || Ot.create(t)), t.scrollTo && t.scrollTo.is(oc) && (this.viewState.scrollTarget = t.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(Es).map((r) => new ed(r));
      for (let r of this.plugins) r.update(this);
      this.observer = new X_(this), this.inputState = new d_(this), this.inputState.ensureHandlers(this.plugins), this.docView = new Db(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), !((e = document.fonts) === null || e === void 0) && e.ready && document.fonts.ready.then(() => this.requestMeasure());
    }
    dispatch(...t) {
      let e = t.length == 1 && t[0] instanceof me ? t : t.length == 1 && Array.isArray(t[0]) ? t[0] : [
        this.state.update(...t)
      ];
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
      let c = this.hasFocus, f = 0, h = null;
      t.some((v) => v.annotation(yS)) ? (this.inputState.notifiedFocused = c, f = 1) : c != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = c, h = bS(a, c), h || (f = 1));
      let g = this.observer.delayedAndroidKey, p = null;
      if (g ? (this.observer.clearDelayedAndroidKey(), p = this.observer.readChange(), (p && !this.state.doc.eq(a.doc) || !this.state.selection.eq(a.selection)) && (p = null)) : this.observer.clear(), a.facet(Ot.phrases) != this.state.facet(Ot.phrases)) return this.setState(a);
      r = Qc.create(this, a, t), r.flags |= f;
      let y = this.viewState.scrollTarget;
      try {
        this.updateState = 2;
        for (let v of t) {
          if (y && (y = y.map(v.changes)), v.scrollIntoView) {
            let { main: S } = v.state.selection;
            y = new Hs(S.empty ? S : K.cursor(S.head, S.head > S.anchor ? -1 : 1));
          }
          for (let S of v.effects) S.is(oc) && (y = S.value.clip(this.state));
        }
        this.viewState.update(r, y), this.bidiCache = Wc.update(this.bidiCache, r.changes), r.empty || (this.updatePlugins(r), this.inputState.update(r)), e = this.docView.update(r), this.state.facet(ta) != this.styleModules && this.mountStyles(), n = this.updateAttrs(), this.showAnnouncements(t), this.docView.updateSelection(e, t.some((v) => v.isUserEvent("select.pointer")));
      } finally {
        this.updateState = 0;
      }
      if (r.startState.facet(mc) != r.state.facet(mc) && (this.viewState.mustMeasureContent = true), (e || n || y || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), e && this.docViewUpdate(), !r.empty) for (let v of this.state.facet($d)) try {
        v(r);
      } catch (S) {
        Je(this.state, S, "update listener");
      }
      (h || p) && Promise.resolve().then(() => {
        h && this.state == h.startState && this.dispatch(h), p && !uS(this, p) && g.force && Ls(this.contentDOM, g.key, g.keyCode);
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
        this.viewState = new Jb(t), this.plugins = t.facet(Es).map((n) => new ed(n)), this.pluginMap.clear();
        for (let n of this.plugins) n.update(this);
        this.docView.destroy(), this.docView = new Db(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
      } finally {
        this.updateState = 0;
      }
      e && this.focus(), this.requestMeasure();
    }
    updatePlugins(t) {
      let e = t.startState.facet(Es), n = t.state.facet(Es);
      if (e != n) {
        let r = [];
        for (let a of n) {
          let c = e.indexOf(a);
          if (c < 0) r.push(new ed(a));
          else {
            let f = this.plugins[c];
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
          Je(this.state, n, "doc view update listener");
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
      let e = null, n = this.scrollDOM, r = n.scrollTop * this.scaleY, { scrollAnchorPos: a, scrollAnchorHeight: c } = this.viewState;
      Math.abs(r - this.viewState.scrollTop) > 1 && (c = -1), this.viewState.scrollAnchorHeight = -1;
      try {
        for (let f = 0; ; f++) {
          if (c < 0) if (Ev(n)) a = -1, c = this.viewState.heightMap.height;
          else {
            let S = this.viewState.scrollAnchorAt(r);
            a = S.from, c = S.top;
          }
          this.updateState = 1;
          let h = this.viewState.measure(this);
          if (!h && !this.measureRequests.length && this.viewState.scrollTarget == null) break;
          if (f > 5) {
            console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
            break;
          }
          let g = [];
          h & 4 || ([this.measureRequests, g] = [
            g,
            this.measureRequests
          ]);
          let p = g.map((S) => {
            try {
              return S.read(this);
            } catch (w) {
              return Je(this.state, w), $b;
            }
          }), y = Qc.create(this, this.state, []), v = false;
          y.flags |= h, e ? e.flags |= h : e = y, this.updateState = 2, y.empty || (this.updatePlugins(y), this.inputState.update(y), this.updateAttrs(), v = this.docView.update(y), v && this.docViewUpdate());
          for (let S = 0; S < g.length; S++) if (p[S] != $b) try {
            let w = g[S];
            w.write && w.write(p[S], this);
          } catch (w) {
            Je(this.state, w);
          }
          if (v && this.docView.updateSelection(true), !y.viewportChanged && this.measureRequests.length == 0) {
            if (this.viewState.editorHeight) if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, c = -1;
              continue;
            } else {
              let w = (a < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(a).top) - c;
              if (w > 1 || w < -1) {
                r = r + w, n.scrollTop = r / this.scaleY, c = -1;
                continue;
              }
            }
            break;
          }
        }
      } finally {
        this.updateState = 0, this.measureScheduled = -1;
      }
      if (e && !e.empty) for (let f of this.state.facet($d)) f(e);
    }
    get themeClasses() {
      return lm + " " + (this.state.facet(nm) ? wS : xS) + " " + this.state.facet(mc);
    }
    updateAttrs() {
      let t = t1(this, iS, {
        class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
      }), e = {
        spellcheck: "false",
        autocorrect: "off",
        autocapitalize: "off",
        writingsuggestions: "false",
        translate: "no",
        contenteditable: this.state.facet(vn) ? "true" : "false",
        class: "cm-content",
        style: `${F.tabSize}: ${this.state.tabSize}`,
        role: "textbox",
        "aria-multiline": "true"
      };
      this.state.readOnly && (e["aria-readonly"] = "true"), t1(this, Bm, e);
      let n = this.observer.ignore(() => {
        let r = Wd(this.contentDOM, this.contentAttrs, e), a = Wd(this.dom, this.editorAttrs, t);
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
      this.styleModules = this.state.facet(ta);
      let t = this.state.facet(P.cspNonce);
      sl.mount(this.root, this.styleModules.concat(Y_).reverse(), t ? {
        nonce: t
      } : void 0);
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
      return {
        top: this.viewState.paddingTop,
        bottom: this.viewState.paddingBottom
      };
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
      return nd(this, t, Nb(this, t, e, n));
    }
    moveByGroup(t, e) {
      return nd(this, t, Nb(this, t, e, (n) => l_(this, t.head, n)));
    }
    visualLineSide(t, e) {
      let n = this.bidiSpans(t), r = this.textDirectionAt(t.from), a = n[e ? n.length - 1 : 0];
      return K.cursor(a.side(e, r) + t.from, a.forward(!e, r) ? 1 : -1);
    }
    moveToLineBoundary(t, e, n = true) {
      return n_(this, t, e, n);
    }
    moveVertically(t, e, n) {
      return nd(this, t, s_(this, t, e, n));
    }
    domAtPos(t) {
      return this.docView.domAtPos(t);
    }
    posAtDOM(t, e = 0) {
      return this.docView.posFromDOM(t, e);
    }
    posAtCoords(t, e = true) {
      return this.readMeasured(), aS(this, t, e);
    }
    coordsAtPos(t, e = 1) {
      this.readMeasured();
      let n = this.docView.coordsAt(t, e);
      if (!n || n.left == n.right) return n;
      let r = this.state.doc.lineAt(t), a = this.bidiSpans(r), c = a[el.find(a, t - r.from, -1, e)];
      return Oa(n, c.dir == Jt.LTR == e > 0);
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
      return !this.state.facet(Iv) || t < this.viewport.from || t > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(t));
    }
    get lineWrapping() {
      return this.viewState.heightOracle.lineWrapping;
    }
    bidiSpans(t) {
      if (t.length > Z_) return Xv(t.length);
      let e = this.textDirectionAt(t.from), n;
      for (let a of this.bidiCache) if (a.from == t.from && a.dir == e && (a.fresh || Gv(a.isolates, n = Ob(this, t)))) return a.order;
      n || (n = Ob(this, t));
      let r = jM(t.text, e, n);
      return this.bidiCache.push(new Wc(t.from, t.to, e, n, true, r)), r;
    }
    get hasFocus() {
      var t;
      return (this.dom.ownerDocument.hasFocus() || F.safari && ((t = this.inputState) === null || t === void 0 ? void 0 : t.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
    }
    focus() {
      this.observer.ignore(() => {
        Ov(this.contentDOM), this.docView.updateSelection();
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
      return oc.of(new Hs(typeof t == "number" ? K.cursor(t) : t, e.y, e.x, e.yMargin, e.xMargin));
    }
    scrollSnapshot() {
      let { scrollTop: t, scrollLeft: e } = this.scrollDOM, n = this.viewState.scrollAnchorAt(t);
      return oc.of(new Hs(K.cursor(n.from), "start", "start", n.top - t, e, true));
    }
    setTabFocusMode(t) {
      t == null ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : typeof t == "boolean" ? this.inputState.tabFocusMode = t ? 0 : -1 : this.inputState.tabFocusMode != 0 && (this.inputState.tabFocusMode = Date.now() + t);
    }
    static domEventHandlers(t) {
      return ee.define(() => ({}), {
        eventHandlers: t
      });
    }
    static domEventObservers(t) {
      return ee.define(() => ({}), {
        eventObservers: t
      });
    }
    static theme(t, e) {
      let n = sl.newName(), r = [
        mc.of(n),
        ta.of(sm(`.${n}`, t))
      ];
      return e && e.dark && r.push(nm.of(true)), r;
    }
    static baseTheme(t) {
      return Gl.lowest(ta.of(sm("." + lm, t, AS)));
    }
    static findFromDOM(t) {
      var e;
      let n = t.querySelector(".cm-content"), r = n && Yt.get(n) || Yt.get(t);
      return ((e = r == null ? void 0 : r.rootView) === null || e === void 0 ? void 0 : e.view) || null;
    }
  }
  P.styleModule = ta;
  P.inputHandler = Fv;
  P.clipboardInputFilter = Dm;
  P.clipboardOutputFilter = Em;
  P.scrollHandler = tS;
  P.focusChangeEffect = Pv;
  P.perLineTextDirection = Iv;
  P.exceptionSink = Jv;
  P.updateListener = $d;
  P.editable = vn;
  P.mouseSelectionStyle = Wv;
  P.dragMovesSelection = Zv;
  P.clickAddsSelectionRange = Qv;
  P.decorations = ya;
  P.outerDecorations = nS;
  P.atomicRanges = Ba;
  P.bidiIsolatedRanges = lS;
  P.scrollMargins = sS;
  P.darkTheme = nm;
  P.cspNonce = et.define({
    combine: (l) => l.length ? l[0] : ""
  });
  P.contentAttributes = Bm;
  P.editorAttributes = iS;
  P.lineWrapping = P.contentAttributes.of({
    class: "cm-lineWrapping"
  });
  P.announce = St.define();
  const Z_ = 4096, $b = {};
  class Wc {
    constructor(t, e, n, r, a, c) {
      this.from = t, this.to = e, this.dir = n, this.isolates = r, this.fresh = a, this.order = c;
    }
    static update(t, e) {
      if (e.empty && !t.some((a) => a.fresh)) return t;
      let n = [], r = t.length ? t[t.length - 1].dir : Jt.LTR;
      for (let a = Math.max(0, t.length - 10); a < t.length; a++) {
        let c = t[a];
        c.dir == r && !e.touchesRange(c.from, c.to) && n.push(new Wc(e.mapPos(c.from, 1), e.mapPos(c.to, -1), c.dir, c.isolates, false, c.order));
      }
      return n;
    }
  }
  function t1(l, t, e) {
    for (let n = l.state.facet(t), r = n.length - 1; r >= 0; r--) {
      let a = n[r], c = typeof a == "function" ? a(l) : a;
      c && Zd(c, e);
    }
    return e;
  }
  const W_ = F.mac ? "mac" : F.windows ? "win" : F.linux ? "linux" : "key";
  function J_(l, t) {
    const e = l.split(/-(?!$)/);
    let n = e[e.length - 1];
    n == "Space" && (n = " ");
    let r, a, c, f;
    for (let h = 0; h < e.length - 1; ++h) {
      const g = e[h];
      if (/^(cmd|meta|m)$/i.test(g)) f = true;
      else if (/^a(lt)?$/i.test(g)) r = true;
      else if (/^(c|ctrl|control)$/i.test(g)) a = true;
      else if (/^s(hift)?$/i.test(g)) c = true;
      else if (/^mod$/i.test(g)) t == "mac" ? f = true : a = true;
      else throw new Error("Unrecognized modifier name: " + g);
    }
    return r && (n = "Alt-" + n), a && (n = "Ctrl-" + n), f && (n = "Meta-" + n), c && (n = "Shift-" + n), n;
  }
  function gc(l, t, e) {
    return t.altKey && (l = "Alt-" + l), t.ctrlKey && (l = "Ctrl-" + l), t.metaKey && (l = "Meta-" + l), e !== false && t.shiftKey && (l = "Shift-" + l), l;
  }
  const F_ = Gl.default(P.domEventHandlers({
    keydown(l, t) {
      return MS(CS(t.state), l, t, "editor");
    }
  })), mu = et.define({
    enables: F_
  }), e1 = /* @__PURE__ */ new WeakMap();
  function CS(l) {
    let t = l.facet(mu), e = e1.get(t);
    return e || e1.set(t, e = $_(t.reduce((n, r) => n.concat(r), []))), e;
  }
  function P_(l, t, e) {
    return MS(CS(l.state), t, l, e);
  }
  let $n = null;
  const I_ = 4e3;
  function $_(l, t = W_) {
    let e = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null), r = (c, f) => {
      let h = n[c];
      if (h == null) n[c] = f;
      else if (h != f) throw new Error("Key binding " + c + " is used both as a regular binding and as a multi-stroke prefix");
    }, a = (c, f, h, g, p) => {
      var y, v;
      let S = e[c] || (e[c] = /* @__PURE__ */ Object.create(null)), w = f.split(/ (?!$)/).map((T) => J_(T, t));
      for (let T = 1; T < w.length; T++) {
        let j = w.slice(0, T).join(" ");
        r(j, true), S[j] || (S[j] = {
          preventDefault: true,
          stopPropagation: false,
          run: [
            (L) => {
              let Q = $n = {
                view: L,
                prefix: j,
                scope: c
              };
              return setTimeout(() => {
                $n == Q && ($n = null);
              }, I_), true;
            }
          ]
        });
      }
      let A = w.join(" ");
      r(A, false);
      let _ = S[A] || (S[A] = {
        preventDefault: false,
        stopPropagation: false,
        run: ((v = (y = S._any) === null || y === void 0 ? void 0 : y.run) === null || v === void 0 ? void 0 : v.slice()) || []
      });
      h && _.run.push(h), g && (_.preventDefault = true), p && (_.stopPropagation = true);
    };
    for (let c of l) {
      let f = c.scope ? c.scope.split(" ") : [
        "editor"
      ];
      if (c.any) for (let g of f) {
        let p = e[g] || (e[g] = /* @__PURE__ */ Object.create(null));
        p._any || (p._any = {
          preventDefault: false,
          stopPropagation: false,
          run: []
        });
        let { any: y } = c;
        for (let v in p) p[v].run.push((S) => y(S, rm));
      }
      let h = c[t] || c.key;
      if (h) for (let g of f) a(g, h, c.run, c.preventDefault, c.stopPropagation), c.shift && a(g, "Shift-" + h, c.shift, c.preventDefault, c.stopPropagation);
    }
    return e;
  }
  let rm = null;
  function MS(l, t, e, n) {
    rm = t;
    let r = xM(t), a = Ze(r, 0), c = Xi(a) == r.length && r != " ", f = "", h = false, g = false, p = false;
    $n && $n.view == e && $n.scope == n && (f = $n.prefix + " ", dS.indexOf(t.keyCode) < 0 && (g = true, $n = null));
    let y = /* @__PURE__ */ new Set(), v = (_) => {
      if (_) {
        for (let T of _.run) if (!y.has(T) && (y.add(T), T(e))) return _.stopPropagation && (p = true), true;
        _.preventDefault && (_.stopPropagation && (p = true), g = true);
      }
      return false;
    }, S = l[n], w, A;
    return S && (v(S[f + gc(r, t, !c)]) ? h = true : c && (t.altKey || t.metaKey || t.ctrlKey) && !(F.windows && t.ctrlKey && t.altKey) && !(F.mac && t.altKey && !(t.ctrlKey || t.metaKey)) && (w = rl[t.keyCode]) && w != r ? (v(S[f + gc(w, t, true)]) || t.shiftKey && (A = ga[t.keyCode]) != r && A != w && v(S[f + gc(A, t, false)])) && (h = true) : c && t.shiftKey && v(S[f + gc(r, t, true)]) && (h = true), !h && v(S._any) && (h = true)), g && (h = true), h && p && t.stopPropagation(), rm = null, h;
  }
  class Ra {
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
        let a = _S(t);
        return [
          new Ra(e, r.left - a.left, r.top - a.top, null, r.bottom - r.top)
        ];
      } else return tk(t, e, n);
    }
  }
  function _S(l) {
    let t = l.scrollDOM.getBoundingClientRect();
    return {
      left: (l.textDirection == Jt.LTR ? t.left : t.right - l.scrollDOM.clientWidth * l.scaleX) - l.scrollDOM.scrollLeft * l.scaleX,
      top: t.top - l.scrollDOM.scrollTop * l.scaleY
    };
  }
  function i1(l, t, e, n) {
    let r = l.coordsAtPos(t, e * 2);
    if (!r) return n;
    let a = l.dom.getBoundingClientRect(), c = (r.top + r.bottom) / 2, f = l.posAtCoords({
      x: a.left + 1,
      y: c
    }), h = l.posAtCoords({
      x: a.right - 1,
      y: c
    });
    return f == null || h == null ? n : {
      from: Math.max(n.from, Math.min(f, h)),
      to: Math.min(n.to, Math.max(f, h))
    };
  }
  function tk(l, t, e) {
    if (e.to <= l.viewport.from || e.from >= l.viewport.to) return [];
    let n = Math.max(e.from, l.viewport.from), r = Math.min(e.to, l.viewport.to), a = l.textDirection == Jt.LTR, c = l.contentDOM, f = c.getBoundingClientRect(), h = _S(l), g = c.querySelector(".cm-line"), p = g && window.getComputedStyle(g), y = f.left + (p ? parseInt(p.paddingLeft) + Math.min(0, parseInt(p.textIndent)) : 0), v = f.right - (p ? parseInt(p.paddingRight) : 0), S = em(l, n, 1), w = em(l, r, -1), A = S.type == Ue.Text ? S : null, _ = w.type == Ue.Text ? w : null;
    if (A && (l.lineWrapping || S.widgetLineBreaks) && (A = i1(l, n, 1, A)), _ && (l.lineWrapping || w.widgetLineBreaks) && (_ = i1(l, r, -1, _)), A && _ && A.from == _.from && A.to == _.to) return j(L(e.from, e.to, A));
    {
      let N = A ? L(e.from, null, A) : Q(S, false), G = _ ? L(null, e.to, _) : Q(w, true), V = [];
      return (A || S).to < (_ || w).from - (A && _ ? 1 : 0) || S.widgetLineBreaks > 1 && N.bottom + l.defaultLineHeight / 2 < G.top ? V.push(T(y, N.bottom, v, G.top)) : N.bottom < G.top && l.elementAtHeight((N.bottom + G.top) / 2).type == Ue.Text && (N.bottom = G.top = (N.bottom + G.top) / 2), j(N).concat(V).concat(j(G));
    }
    function T(N, G, V, lt) {
      return new Ra(t, N - h.left, G - h.top, V - N, lt - G);
    }
    function j({ top: N, bottom: G, horizontal: V }) {
      let lt = [];
      for (let tt = 0; tt < V.length; tt += 2) lt.push(T(V[tt], N, V[tt + 1], G));
      return lt;
    }
    function L(N, G, V) {
      let lt = 1e9, tt = -1e9, pt = [];
      function at(ht, yt, R, Z, it) {
        let rt = l.coordsAtPos(ht, ht == V.to ? -2 : 2), mt = l.coordsAtPos(R, R == V.from ? 2 : -2);
        !rt || !mt || (lt = Math.min(rt.top, mt.top, lt), tt = Math.max(rt.bottom, mt.bottom, tt), it == Jt.LTR ? pt.push(a && yt ? y : rt.left, a && Z ? v : mt.right) : pt.push(!a && Z ? y : mt.left, !a && yt ? v : rt.right));
      }
      let I = N ?? V.from, ft = G ?? V.to;
      for (let ht of l.visibleRanges) if (ht.to > I && ht.from < ft) for (let yt = Math.max(ht.from, I), R = Math.min(ht.to, ft); ; ) {
        let Z = l.state.doc.lineAt(yt);
        for (let it of l.bidiSpans(Z)) {
          let rt = it.from + Z.from, mt = it.to + Z.from;
          if (rt >= R) break;
          mt > yt && at(Math.max(rt, yt), N == null && rt <= I, Math.min(mt, R), G == null && mt >= ft, it.dir);
        }
        if (yt = Z.to + 1, yt >= R) break;
      }
      return pt.length == 0 && at(I, N == null, ft, G == null, l.textDirection), {
        top: lt,
        bottom: tt,
        horizontal: pt
      };
    }
    function Q(N, G) {
      let V = f.top + (G ? N.top : N.bottom);
      return {
        top: V,
        bottom: V,
        horizontal: []
      };
    }
  }
  function ek(l, t) {
    return l.constructor == t.constructor && l.eq(t);
  }
  class ik {
    constructor(t, e) {
      this.view = t, this.layer = e, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
        read: this.measure.bind(this),
        write: this.draw.bind(this)
      }, this.dom = t.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), e.above && this.dom.classList.add("cm-layer-above"), e.class && this.dom.classList.add(e.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(t.state), t.requestMeasure(this.measureReq), e.mount && e.mount(this.dom, t);
    }
    update(t) {
      t.startState.facet(Nc) != t.state.facet(Nc) && this.setOrder(t.state), (this.layer.update(t, this.dom) || t.geometryChanged) && (this.scale(), t.view.requestMeasure(this.measureReq));
    }
    docViewUpdate(t) {
      this.layer.updateOnDocViewUpdate !== false && t.requestMeasure(this.measureReq);
    }
    setOrder(t) {
      let e = 0, n = t.facet(Nc);
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
      if (t.length != this.drawn.length || t.some((e, n) => !ek(e, this.drawn[n]))) {
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
  const Nc = et.define();
  function kS(l) {
    return [
      ee.define((t) => new ik(t, l)),
      Nc.of(l)
    ];
  }
  const ba = et.define({
    combine(l) {
      return $i(l, {
        cursorBlinkRate: 1200,
        drawRangeCursor: true
      }, {
        cursorBlinkRate: (t, e) => Math.min(t, e),
        drawRangeCursor: (t, e) => t || e
      });
    }
  });
  function nk(l = {}) {
    return [
      ba.of(l),
      lk,
      sk,
      rk,
      $v.of(true)
    ];
  }
  function TS(l) {
    return l.startState.facet(ba) != l.state.facet(ba);
  }
  const lk = kS({
    above: true,
    markers(l) {
      let { state: t } = l, e = t.facet(ba), n = [];
      for (let r of t.selection.ranges) {
        let a = r == t.selection.main;
        if (r.empty || e.drawRangeCursor) {
          let c = a ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary", f = r.empty ? r : K.cursor(r.head, r.head > r.anchor ? -1 : 1);
          for (let h of Ra.forRange(l, c, f)) n.push(h);
        }
      }
      return n;
    },
    update(l, t) {
      l.transactions.some((n) => n.selection) && (t.style.animationName = t.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
      let e = TS(l);
      return e && n1(l.state, t), l.docChanged || l.selectionSet || e;
    },
    mount(l, t) {
      n1(t.state, l);
    },
    class: "cm-cursorLayer"
  });
  function n1(l, t) {
    t.style.animationDuration = l.facet(ba).cursorBlinkRate + "ms";
  }
  const sk = kS({
    above: false,
    markers(l) {
      return l.state.selection.ranges.map((t) => t.empty ? [] : Ra.forRange(l, "cm-selectionBackground", t)).reduce((t, e) => t.concat(e));
    },
    update(l, t) {
      return l.docChanged || l.selectionSet || l.viewportChanged || TS(l);
    },
    class: "cm-selectionLayer"
  }), rk = Gl.highest(P.theme({
    ".cm-line": {
      "& ::selection, &::selection": {
        backgroundColor: "transparent !important"
      },
      caretColor: "transparent !important"
    },
    ".cm-content": {
      caretColor: "transparent !important",
      "& :focus": {
        caretColor: "initial !important",
        "&::selection, & ::selection": {
          backgroundColor: "Highlight !important"
        }
      }
    }
  })), OS = St.define({
    map(l, t) {
      return l == null ? null : t.mapPos(l);
    }
  }), na = ke.define({
    create() {
      return null;
    },
    update(l, t) {
      return l != null && (l = t.changes.mapPos(l)), t.effects.reduce((e, n) => n.is(OS) ? n.value : e, l);
    }
  }), ak = ee.fromClass(class {
    constructor(l) {
      this.view = l, this.cursor = null, this.measureReq = {
        read: this.readPos.bind(this),
        write: this.drawCursor.bind(this)
      };
    }
    update(l) {
      var t;
      let e = l.state.field(na);
      e == null ? this.cursor != null && ((t = this.cursor) === null || t === void 0 || t.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (l.startState.field(na) != e || l.docChanged || l.geometryChanged) && this.view.requestMeasure(this.measureReq));
    }
    readPos() {
      let { view: l } = this, t = l.state.field(na), e = t != null && l.coordsAtPos(t);
      if (!e) return null;
      let n = l.scrollDOM.getBoundingClientRect();
      return {
        left: e.left - n.left + l.scrollDOM.scrollLeft * l.scaleX,
        top: e.top - n.top + l.scrollDOM.scrollTop * l.scaleY,
        height: e.bottom - e.top
      };
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
      this.view.state.field(na) != l && this.view.dispatch({
        effects: OS.of(l)
      });
    }
  }, {
    eventObservers: {
      dragover(l) {
        this.setDropPos(this.view.posAtCoords({
          x: l.clientX,
          y: l.clientY
        }));
      },
      dragleave(l) {
        (l.target == this.view.contentDOM || !this.view.contentDOM.contains(l.relatedTarget)) && this.setDropPos(null);
      },
      dragend() {
        this.setDropPos(null);
      },
      drop() {
        this.setDropPos(null);
      }
    }
  });
  function ok() {
    return [
      na,
      ak
    ];
  }
  function l1(l, t, e, n, r) {
    t.lastIndex = 0;
    for (let a = l.iterRange(e, n), c = e, f; !a.next().done; c += a.value.length) if (!a.lineBreak) for (; f = t.exec(a.value); ) r(c + f.index, f);
  }
  function ck(l, t) {
    let e = l.visibleRanges;
    if (e.length == 1 && e[0].from == l.viewport.from && e[0].to == l.viewport.to) return e;
    let n = [];
    for (let { from: r, to: a } of e) r = Math.max(l.state.doc.lineAt(r).from, r - t), a = Math.min(l.state.doc.lineAt(a).to, a + t), n.length && n[n.length - 1].to >= r ? n[n.length - 1].to = a : n.push({
      from: r,
      to: a
    });
    return n;
  }
  class uk {
    constructor(t) {
      const { regexp: e, decoration: n, decorate: r, boundary: a, maxLength: c = 1e3 } = t;
      if (!e.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
      if (this.regexp = e, r) this.addMatch = (f, h, g, p) => r(p, g, g + f[0].length, f, h);
      else if (typeof n == "function") this.addMatch = (f, h, g, p) => {
        let y = n(f, h, g);
        y && p(g, g + f[0].length, y);
      };
      else if (n) this.addMatch = (f, h, g, p) => p(g, g + f[0].length, n);
      else throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
      this.boundary = a, this.maxLength = c;
    }
    createDeco(t) {
      let e = new wn(), n = e.add.bind(e);
      for (let { from: r, to: a } of ck(t, this.maxLength)) l1(t.state.doc, this.regexp, r, a, (c, f) => this.addMatch(f, t, c, n));
      return e.finish();
    }
    updateDeco(t, e) {
      let n = 1e9, r = -1;
      return t.docChanged && t.changes.iterChanges((a, c, f, h) => {
        h >= t.view.viewport.from && f <= t.view.viewport.to && (n = Math.min(f, n), r = Math.max(h, r));
      }), t.viewportMoved || r - n > 1e3 ? this.createDeco(t.view) : r > -1 ? this.updateRange(t.view, e.map(t.changes), n, r) : e;
    }
    updateRange(t, e, n, r) {
      for (let a of t.visibleRanges) {
        let c = Math.max(a.from, n), f = Math.min(a.to, r);
        if (f >= c) {
          let h = t.state.doc.lineAt(c), g = h.to < f ? t.state.doc.lineAt(f) : h, p = Math.max(a.from, h.from), y = Math.min(a.to, g.to);
          if (this.boundary) {
            for (; c > h.from; c--) if (this.boundary.test(h.text[c - 1 - h.from])) {
              p = c;
              break;
            }
            for (; f < g.to; f++) if (this.boundary.test(g.text[f - g.from])) {
              y = f;
              break;
            }
          }
          let v = [], S, w = (A, _, T) => v.push(T.range(A, _));
          if (h == g) for (this.regexp.lastIndex = p - h.from; (S = this.regexp.exec(h.text)) && S.index < y - h.from; ) this.addMatch(S, t, S.index + h.from, w);
          else l1(t.state.doc, this.regexp, p, y, (A, _) => this.addMatch(_, t, A, w));
          e = e.update({
            filterFrom: p,
            filterTo: y,
            filter: (A, _) => A < p || _ > y,
            add: v
          });
        }
      }
      return e;
    }
  }
  const am = /x/.unicode != null ? "gu" : "g", fk = new RegExp(`[\0-\b
-\x7F-\x9F\xAD\u061C\u200B\u200E\u200F\u2028\u2029\u202D\u202E\u2066\u2067\u2069\uFEFF\uFFF9-\uFFFC]`, am), hk = {
    0: "null",
    7: "bell",
    8: "backspace",
    10: "newline",
    11: "vertical tab",
    13: "carriage return",
    27: "escape",
    8203: "zero width space",
    8204: "zero width non-joiner",
    8205: "zero width joiner",
    8206: "left-to-right mark",
    8207: "right-to-left mark",
    8232: "line separator",
    8237: "left-to-right override",
    8238: "right-to-left override",
    8294: "left-to-right isolate",
    8295: "right-to-left isolate",
    8297: "pop directional isolate",
    8233: "paragraph separator",
    65279: "zero width no-break space",
    65532: "object replacement"
  };
  let rd = null;
  function dk() {
    var l;
    if (rd == null && typeof document < "u" && document.body) {
      let t = document.body.style;
      rd = ((l = t.tabSize) !== null && l !== void 0 ? l : t.MozTabSize) != null;
    }
    return rd || false;
  }
  const Lc = et.define({
    combine(l) {
      let t = $i(l, {
        render: null,
        specialChars: fk,
        addSpecialChars: null
      });
      return (t.replaceTabs = !dk()) && (t.specialChars = new RegExp("	|" + t.specialChars.source, am)), t.addSpecialChars && (t.specialChars = new RegExp(t.specialChars.source + "|" + t.addSpecialChars.source, am)), t;
    }
  });
  function mk(l = {}) {
    return [
      Lc.of(l),
      gk()
    ];
  }
  let s1 = null;
  function gk() {
    return s1 || (s1 = ee.fromClass(class {
      constructor(l) {
        this.view = l, this.decorations = ct.none, this.decorationCache = /* @__PURE__ */ Object.create(null), this.decorator = this.makeDecorator(l.state.facet(Lc)), this.decorations = this.decorator.createDeco(l);
      }
      makeDecorator(l) {
        return new uk({
          regexp: l.specialChars,
          decoration: (t, e, n) => {
            let { doc: r } = e.state, a = Ze(t[0], 0);
            if (a == 9) {
              let c = r.lineAt(n), f = e.state.tabSize, h = Ps(c.text, f, n - c.from);
              return ct.replace({
                widget: new vk((f - h % f) * this.view.defaultCharacterWidth / this.view.scaleX)
              });
            }
            return this.decorationCache[a] || (this.decorationCache[a] = ct.replace({
              widget: new bk(l, a)
            }));
          },
          boundary: l.replaceTabs ? void 0 : /[^]/
        });
      }
      update(l) {
        let t = l.state.facet(Lc);
        l.startState.facet(Lc) != t ? (this.decorator = this.makeDecorator(t), this.decorations = this.decorator.createDeco(l.view)) : this.decorations = this.decorator.updateDeco(l, this.decorations);
      }
    }, {
      decorations: (l) => l.decorations
    }));
  }
  const pk = "\u2022";
  function yk(l) {
    return l >= 32 ? pk : l == 10 ? "\u2424" : String.fromCharCode(9216 + l);
  }
  class bk extends Mn {
    constructor(t, e) {
      super(), this.options = t, this.code = e;
    }
    eq(t) {
      return t.code == this.code;
    }
    toDOM(t) {
      let e = yk(this.code), n = t.state.phrase("Control character") + " " + (hk[this.code] || "0x" + this.code.toString(16)), r = this.options.render && this.options.render(this.code, n, e);
      if (r) return r;
      let a = document.createElement("span");
      return a.textContent = e, a.title = n, a.setAttribute("aria-label", n), a.className = "cm-specialChar", a;
    }
    ignoreEvent() {
      return false;
    }
  }
  class vk extends Mn {
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
  function Sk() {
    return wk;
  }
  const xk = ct.line({
    class: "cm-activeLine"
  }), wk = ee.fromClass(class {
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
        r.from > t && (e.push(xk.range(r.from)), t = r.from);
      }
      return ct.set(e);
    }
  }, {
    decorations: (l) => l.decorations
  });
  class Ak extends Mn {
    constructor(t) {
      super(), this.content = t;
    }
    toDOM(t) {
      let e = document.createElement("span");
      return e.className = "cm-placeholder", e.style.pointerEvents = "none", e.appendChild(typeof this.content == "string" ? document.createTextNode(this.content) : typeof this.content == "function" ? this.content(t) : this.content.cloneNode(true)), e.setAttribute("aria-hidden", "true"), e;
    }
    coordsAt(t) {
      let e = t.firstChild ? Xs(t.firstChild) : [];
      if (!e.length) return null;
      let n = window.getComputedStyle(t.parentNode), r = Oa(e[0], n.direction != "rtl"), a = parseInt(n.lineHeight);
      return r.bottom - r.top > a * 1.5 ? {
        left: r.left,
        right: r.right,
        top: r.top,
        bottom: r.top + a
      } : r;
    }
    ignoreEvent() {
      return false;
    }
  }
  function Ck(l) {
    let t = ee.fromClass(class {
      constructor(e) {
        this.view = e, this.placeholder = l ? ct.set([
          ct.widget({
            widget: new Ak(l),
            side: 1
          }).range(0)
        ]) : ct.none;
      }
      get decorations() {
        return this.view.state.doc.length ? ct.none : this.placeholder;
      }
    }, {
      decorations: (e) => e.decorations
    });
    return typeof l == "string" ? [
      t,
      P.contentAttributes.of({
        "aria-placeholder": l
      })
    ] : t;
  }
  const om = 2e3;
  function Mk(l, t, e) {
    let n = Math.min(t.line, e.line), r = Math.max(t.line, e.line), a = [];
    if (t.off > om || e.off > om || t.col < 0 || e.col < 0) {
      let c = Math.min(t.off, e.off), f = Math.max(t.off, e.off);
      for (let h = n; h <= r; h++) {
        let g = l.doc.line(h);
        g.length <= f && a.push(K.range(g.from + c, g.to + f));
      }
    } else {
      let c = Math.min(t.col, e.col), f = Math.max(t.col, e.col);
      for (let h = n; h <= r; h++) {
        let g = l.doc.line(h), p = Vd(g.text, c, l.tabSize, true);
        if (p < 0) a.push(K.cursor(g.to));
        else {
          let y = Vd(g.text, f, l.tabSize);
          a.push(K.range(g.from + p, g.from + y));
        }
      }
    }
    return a;
  }
  function _k(l, t) {
    let e = l.coordsAtPos(l.viewport.from);
    return e ? Math.round(Math.abs((e.left - t) / l.defaultCharacterWidth)) : -1;
  }
  function r1(l, t) {
    let e = l.posAtCoords({
      x: t.clientX,
      y: t.clientY
    }, false), n = l.state.doc.lineAt(e), r = e - n.from, a = r > om ? -1 : r == n.length ? _k(l, t.clientX) : Ps(n.text, l.state.tabSize, e - n.from);
    return {
      line: n.number,
      col: a,
      off: r
    };
  }
  function kk(l, t) {
    let e = r1(l, t), n = l.state.selection;
    return e ? {
      update(r) {
        if (r.docChanged) {
          let a = r.changes.mapPos(r.startState.doc.line(e.line).from), c = r.state.doc.lineAt(a);
          e = {
            line: c.number,
            col: e.col,
            off: Math.min(e.off, c.length)
          }, n = n.map(r.changes);
        }
      },
      get(r, a, c) {
        let f = r1(l, r);
        if (!f) return n;
        let h = Mk(l.state, e, f);
        return h.length ? c ? K.create(h.concat(n.ranges)) : K.create(h) : n;
      }
    } : null;
  }
  function Tk(l) {
    let t = ((e) => e.altKey && e.button == 0);
    return P.mouseSelectionStyle.of((e, n) => t(n) ? kk(e, n) : null);
  }
  const Ok = {
    Alt: [
      18,
      (l) => !!l.altKey
    ],
    Control: [
      17,
      (l) => !!l.ctrlKey
    ],
    Shift: [
      16,
      (l) => !!l.shiftKey
    ],
    Meta: [
      91,
      (l) => !!l.metaKey
    ]
  }, Dk = {
    style: "cursor: crosshair"
  };
  function Ek(l = {}) {
    let [t, e] = Ok[l.key || "Alt"], n = ee.fromClass(class {
      constructor(r) {
        this.view = r, this.isDown = false;
      }
      set(r) {
        this.isDown != r && (this.isDown = r, this.view.update([]));
      }
    }, {
      eventObservers: {
        keydown(r) {
          this.set(r.keyCode == t || e(r));
        },
        keyup(r) {
          (r.keyCode == t || !e(r)) && this.set(false);
        },
        mousemove(r) {
          this.set(e(r));
        }
      }
    });
    return [
      n,
      P.contentAttributes.of((r) => {
        var a;
        return !((a = r.plugin(n)) === null || a === void 0) && a.isDown ? Dk : null;
      })
    ];
  }
  const pc = "-10000px";
  class DS {
    constructor(t, e, n, r) {
      this.facet = e, this.createTooltipView = n, this.removeTooltipView = r, this.input = t.state.facet(e), this.tooltips = this.input.filter((c) => c);
      let a = null;
      this.tooltipViews = this.tooltips.map((c) => a = n(c, a));
    }
    update(t, e) {
      var n;
      let r = t.state.facet(this.facet), a = r.filter((h) => h);
      if (r === this.input) {
        for (let h of this.tooltipViews) h.update && h.update(t);
        return false;
      }
      let c = [], f = e ? [] : null;
      for (let h = 0; h < a.length; h++) {
        let g = a[h], p = -1;
        if (g) {
          for (let y = 0; y < this.tooltips.length; y++) {
            let v = this.tooltips[y];
            v && v.create == g.create && (p = y);
          }
          if (p < 0) c[h] = this.createTooltipView(g, h ? c[h - 1] : null), f && (f[h] = !!g.above);
          else {
            let y = c[h] = this.tooltipViews[p];
            f && (f[h] = e[p]), y.update && y.update(t);
          }
        }
      }
      for (let h of this.tooltipViews) c.indexOf(h) < 0 && (this.removeTooltipView(h), (n = h.destroy) === null || n === void 0 || n.call(h));
      return e && (f.forEach((h, g) => e[g] = h), e.length = f.length), this.input = r, this.tooltips = a, this.tooltipViews = c, true;
    }
  }
  function Bk(l) {
    let t = l.dom.ownerDocument.documentElement;
    return {
      top: 0,
      left: 0,
      bottom: t.clientHeight,
      right: t.clientWidth
    };
  }
  const ad = et.define({
    combine: (l) => {
      var t, e, n;
      return {
        position: F.ios ? "absolute" : ((t = l.find((r) => r.position)) === null || t === void 0 ? void 0 : t.position) || "fixed",
        parent: ((e = l.find((r) => r.parent)) === null || e === void 0 ? void 0 : e.parent) || null,
        tooltipSpace: ((n = l.find((r) => r.tooltipSpace)) === null || n === void 0 ? void 0 : n.tooltipSpace) || Bk
      };
    }
  }), a1 = /* @__PURE__ */ new WeakMap(), Hm = ee.fromClass(class {
    constructor(l) {
      this.view = l, this.above = [], this.inView = true, this.madeAbsolute = false, this.lastTransaction = 0, this.measureTimeout = -1;
      let t = l.state.facet(ad);
      this.position = t.position, this.parent = t.parent, this.classes = l.themeClasses, this.createContainer(), this.measureReq = {
        read: this.readMeasure.bind(this),
        write: this.writeMeasure.bind(this),
        key: this
      }, this.resizeObserver = typeof ResizeObserver == "function" ? new ResizeObserver(() => this.measureSoon()) : null, this.manager = new DS(l, Um, (e, n) => this.createTooltip(e, n), (e) => {
        this.resizeObserver && this.resizeObserver.unobserve(e.dom), e.dom.remove();
      }), this.above = this.manager.tooltips.map((e) => !!e.above), this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver((e) => {
        Date.now() > this.lastTransaction - 50 && e.length > 0 && e[e.length - 1].intersectionRatio < 1 && this.measureSoon();
      }, {
        threshold: [
          1
        ]
      }) : null, this.observeIntersection(), l.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure();
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
      let e = t || l.geometryChanged, n = l.state.facet(ad);
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
      return e.dom.style.position = this.position, e.dom.style.top = pc, e.dom.style.left = "0px", this.container.insertBefore(e.dom, n), e.mount && e.mount(this.view), this.resizeObserver && this.resizeObserver.observe(e.dom), e;
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
          let c = a.getBoundingClientRect();
          e = Math.abs(c.top + 1e4) > 1 || Math.abs(c.left) > 1;
        } else e = !!a.offsetParent && a.offsetParent != this.container.ownerDocument.body;
      }
      if (e || this.position == "absolute") if (this.parent) {
        let a = this.parent.getBoundingClientRect();
        a.width && a.height && (l = a.width / this.parent.offsetWidth, t = a.height / this.parent.offsetHeight);
      } else ({ scaleX: l, scaleY: t } = this.view.viewState);
      let n = this.view.scrollDOM.getBoundingClientRect(), r = Rm(this.view);
      return {
        visible: {
          left: n.left + r.left,
          top: n.top + r.top,
          right: n.right - r.right,
          bottom: n.bottom - r.bottom
        },
        parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
        pos: this.manager.tooltips.map((a, c) => {
          let f = this.manager.tooltipViews[c];
          return f.getCoords ? f.getCoords(a.pos) : this.view.coordsAtPos(a.pos);
        }),
        size: this.manager.tooltipViews.map(({ dom: a }) => a.getBoundingClientRect()),
        space: this.view.state.facet(ad).tooltipSpace(this.view),
        scaleX: l,
        scaleY: t,
        makeAbsolute: e
      };
    }
    writeMeasure(l) {
      var t;
      if (l.makeAbsolute) {
        this.madeAbsolute = true, this.position = "absolute";
        for (let f of this.manager.tooltipViews) f.dom.style.position = "absolute";
      }
      let { visible: e, space: n, scaleX: r, scaleY: a } = l, c = [];
      for (let f = 0; f < this.manager.tooltips.length; f++) {
        let h = this.manager.tooltips[f], g = this.manager.tooltipViews[f], { dom: p } = g, y = l.pos[f], v = l.size[f];
        if (!y || h.clip !== false && (y.bottom <= Math.max(e.top, n.top) || y.top >= Math.min(e.bottom, n.bottom) || y.right < Math.max(e.left, n.left) - 0.1 || y.left > Math.min(e.right, n.right) + 0.1)) {
          p.style.top = pc;
          continue;
        }
        let S = h.arrow ? g.dom.querySelector(".cm-tooltip-arrow") : null, w = S ? 7 : 0, A = v.right - v.left, _ = (t = a1.get(g)) !== null && t !== void 0 ? t : v.bottom - v.top, T = g.offset || zk, j = this.view.textDirection == Jt.LTR, L = v.width > n.right - n.left ? j ? n.left : n.right - v.width : j ? Math.max(n.left, Math.min(y.left - (S ? 14 : 0) + T.x, n.right - A)) : Math.min(Math.max(n.left, y.left - A + (S ? 14 : 0) - T.x), n.right - A), Q = this.above[f];
        !h.strictSide && (Q ? y.top - _ - w - T.y < n.top : y.bottom + _ + w + T.y > n.bottom) && Q == n.bottom - y.bottom > y.top - n.top && (Q = this.above[f] = !Q);
        let N = (Q ? y.top - n.top : n.bottom - y.bottom) - w;
        if (N < _ && g.resize !== false) {
          if (N < this.view.defaultLineHeight) {
            p.style.top = pc;
            continue;
          }
          a1.set(g, _), p.style.height = (_ = N) / a + "px";
        } else p.style.height && (p.style.height = "");
        let G = Q ? y.top - _ - w - T.y : y.bottom + w + T.y, V = L + A;
        if (g.overlap !== true) for (let lt of c) lt.left < V && lt.right > L && lt.top < G + _ && lt.bottom > G && (G = Q ? lt.top - _ - 2 - w : lt.bottom + w + 2);
        if (this.position == "absolute" ? (p.style.top = (G - l.parent.top) / a + "px", o1(p, (L - l.parent.left) / r)) : (p.style.top = G / a + "px", o1(p, L / r)), S) {
          let lt = y.left + (j ? T.x : -T.x) - (L + 14 - 7);
          S.style.left = lt / r + "px";
        }
        g.overlap !== true && c.push({
          left: L,
          top: G,
          right: V,
          bottom: G + _
        }), p.classList.toggle("cm-tooltip-above", Q), p.classList.toggle("cm-tooltip-below", !Q), g.positioned && g.positioned(l.space);
      }
    }
    maybeMeasure() {
      if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView))) for (let l of this.manager.tooltipViews) l.dom.style.top = pc;
    }
  }, {
    eventObservers: {
      scroll() {
        this.maybeMeasure();
      }
    }
  });
  function o1(l, t) {
    let e = parseInt(l.style.left, 10);
    (isNaN(e) || Math.abs(t - e) > 1) && (l.style.left = t + "px");
  }
  const Rk = P.baseTheme({
    ".cm-tooltip": {
      zIndex: 500,
      boxSizing: "border-box"
    },
    "&light .cm-tooltip": {
      border: "1px solid #bbb",
      backgroundColor: "#f5f5f5"
    },
    "&light .cm-tooltip-section:not(:first-child)": {
      borderTop: "1px solid #bbb"
    },
    "&dark .cm-tooltip": {
      backgroundColor: "#333338",
      color: "white"
    },
    ".cm-tooltip-arrow": {
      height: "7px",
      width: "14px",
      position: "absolute",
      zIndex: -1,
      overflow: "hidden",
      "&:before, &:after": {
        content: "''",
        position: "absolute",
        width: 0,
        height: 0,
        borderLeft: "7px solid transparent",
        borderRight: "7px solid transparent"
      },
      ".cm-tooltip-above &": {
        bottom: "-7px",
        "&:before": {
          borderTop: "7px solid #bbb"
        },
        "&:after": {
          borderTop: "7px solid #f5f5f5",
          bottom: "1px"
        }
      },
      ".cm-tooltip-below &": {
        top: "-7px",
        "&:before": {
          borderBottom: "7px solid #bbb"
        },
        "&:after": {
          borderBottom: "7px solid #f5f5f5",
          top: "1px"
        }
      }
    },
    "&dark .cm-tooltip .cm-tooltip-arrow": {
      "&:before": {
        borderTopColor: "#333338",
        borderBottomColor: "#333338"
      },
      "&:after": {
        borderTopColor: "transparent",
        borderBottomColor: "transparent"
      }
    }
  }), zk = {
    x: 0,
    y: 0
  }, Um = et.define({
    enables: [
      Hm,
      Rk
    ]
  }), Jc = et.define({
    combine: (l) => l.reduce((t, e) => t.concat(e), [])
  });
  class gu {
    static create(t) {
      return new gu(t);
    }
    constructor(t) {
      this.view = t, this.mounted = false, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new DS(t, Jc, (e, n) => this.createHostedView(e, n), (e) => e.dom.remove());
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
  const Nk = Um.compute([
    Jc
  ], (l) => {
    let t = l.facet(Jc);
    return t.length === 0 ? null : {
      pos: Math.min(...t.map((e) => e.pos)),
      end: Math.max(...t.map((e) => {
        var n;
        return (n = e.end) !== null && n !== void 0 ? n : e.pos;
      })),
      create: gu.create,
      above: t[0].above,
      arrow: t.some((e) => e.arrow)
    };
  });
  class Lk {
    constructor(t, e, n, r, a) {
      this.view = t, this.source = e, this.field = n, this.setHover = r, this.hoverTime = a, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
        x: 0,
        y: 0,
        target: t.dom,
        time: 0
      }, this.checkHover = this.checkHover.bind(this), t.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), t.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this));
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
      if (n instanceof Sn) r = n.posAtStart;
      else {
        if (r = t.posAtCoords(e), r == null) return;
        let f = t.coordsAtPos(r);
        if (!f || e.y < f.top || e.y > f.bottom || e.x < f.left - t.defaultCharacterWidth || e.x > f.right + t.defaultCharacterWidth) return;
        let h = t.bidiSpans(t.state.doc.lineAt(r)).find((p) => p.from <= r && p.to >= r), g = h && h.dir == Jt.RTL ? -1 : 1;
        a = e.x < f.left ? -g : g;
      }
      let c = this.source(t, r, a);
      if (c == null ? void 0 : c.then) {
        let f = this.pending = {
          pos: r
        };
        c.then((h) => {
          this.pending == f && (this.pending = null, h && !(Array.isArray(h) && !h.length) && t.dispatch({
            effects: this.setHover.of(Array.isArray(h) ? h : [
              h
            ])
          }));
        }, (h) => Je(t.state, h, "hover tooltip"));
      } else c && !(Array.isArray(c) && !c.length) && t.dispatch({
        effects: this.setHover.of(Array.isArray(c) ? c : [
          c
        ])
      });
    }
    get tooltip() {
      let t = this.view.plugin(Hm), e = t ? t.manager.tooltips.findIndex((n) => n.create == gu.create) : -1;
      return e > -1 ? t.manager.tooltipViews[e] : null;
    }
    mousemove(t) {
      var e, n;
      this.lastMove = {
        x: t.clientX,
        y: t.clientY,
        target: t.target,
        time: Date.now()
      }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
      let { active: r, tooltip: a } = this;
      if (r.length && a && !Hk(a.dom, t) || this.pending) {
        let { pos: c } = r[0] || this.pending, f = (n = (e = r[0]) === null || e === void 0 ? void 0 : e.end) !== null && n !== void 0 ? n : c;
        (c == f ? this.view.posAtCoords(this.lastMove) != c : !Uk(this.view, c, f, t.clientX, t.clientY)) && (this.view.dispatch({
          effects: this.setHover.of([])
        }), this.pending = null);
      }
    }
    mouseleave(t) {
      clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
      let { active: e } = this;
      if (e.length) {
        let { tooltip: n } = this;
        n && n.dom.contains(t.relatedTarget) ? this.watchTooltipLeave(n.dom) : this.view.dispatch({
          effects: this.setHover.of([])
        });
      }
    }
    watchTooltipLeave(t) {
      let e = (n) => {
        t.removeEventListener("mouseleave", e), this.active.length && !this.view.dom.contains(n.relatedTarget) && this.view.dispatch({
          effects: this.setHover.of([])
        });
      };
      t.addEventListener("mouseleave", e);
    }
    destroy() {
      clearTimeout(this.hoverTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove);
    }
  }
  const yc = 4;
  function Hk(l, t) {
    let { left: e, right: n, top: r, bottom: a } = l.getBoundingClientRect(), c;
    if (c = l.querySelector(".cm-tooltip-arrow")) {
      let f = c.getBoundingClientRect();
      r = Math.min(f.top, r), a = Math.max(f.bottom, a);
    }
    return t.clientX >= e - yc && t.clientX <= n + yc && t.clientY >= r - yc && t.clientY <= a + yc;
  }
  function Uk(l, t, e, n, r, a) {
    let c = l.scrollDOM.getBoundingClientRect(), f = l.documentTop + l.documentPadding.top + l.contentHeight;
    if (c.left > n || c.right < n || c.top > r || Math.min(c.bottom, f) < r) return false;
    let h = l.posAtCoords({
      x: n,
      y: r
    }, false);
    return h >= t && h <= e;
  }
  function Vk(l, t = {}) {
    let e = St.define(), n = ke.define({
      create() {
        return [];
      },
      update(r, a) {
        if (r.length && (t.hideOnChange && (a.docChanged || a.selection) ? r = [] : t.hideOn && (r = r.filter((c) => !t.hideOn(a, c))), a.docChanged)) {
          let c = [];
          for (let f of r) {
            let h = a.changes.mapPos(f.pos, -1, He.TrackDel);
            if (h != null) {
              let g = Object.assign(/* @__PURE__ */ Object.create(null), f);
              g.pos = h, g.end != null && (g.end = a.changes.mapPos(g.end)), c.push(g);
            }
          }
          r = c;
        }
        for (let c of a.effects) c.is(e) && (r = c.value), c.is(qk) && (r = []);
        return r;
      },
      provide: (r) => Jc.from(r)
    });
    return {
      active: n,
      extension: [
        n,
        ee.define((r) => new Lk(r, l, n, e, t.hoverTime || 300)),
        Nk
      ]
    };
  }
  function ES(l, t) {
    let e = l.plugin(Hm);
    if (!e) return null;
    let n = e.manager.tooltips.indexOf(t);
    return n < 0 ? null : e.manager.tooltipViews[n];
  }
  const qk = St.define(), c1 = et.define({
    combine(l) {
      let t, e;
      for (let n of l) t = t || n.topContainer, e = e || n.bottomContainer;
      return {
        topContainer: t,
        bottomContainer: e
      };
    }
  });
  function va(l, t) {
    let e = l.plugin(BS), n = e ? e.specs.indexOf(t) : -1;
    return n > -1 ? e.panels[n] : null;
  }
  const BS = ee.fromClass(class {
    constructor(l) {
      this.input = l.state.facet(Sa), this.specs = this.input.filter((e) => e), this.panels = this.specs.map((e) => e(l));
      let t = l.state.facet(c1);
      this.top = new bc(l, true, t.topContainer), this.bottom = new bc(l, false, t.bottomContainer), this.top.sync(this.panels.filter((e) => e.top)), this.bottom.sync(this.panels.filter((e) => !e.top));
      for (let e of this.panels) e.dom.classList.add("cm-panel"), e.mount && e.mount();
    }
    update(l) {
      let t = l.state.facet(c1);
      this.top.container != t.topContainer && (this.top.sync([]), this.top = new bc(l.view, true, t.topContainer)), this.bottom.container != t.bottomContainer && (this.bottom.sync([]), this.bottom = new bc(l.view, false, t.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
      let e = l.state.facet(Sa);
      if (e != this.input) {
        let n = e.filter((h) => h), r = [], a = [], c = [], f = [];
        for (let h of n) {
          let g = this.specs.indexOf(h), p;
          g < 0 ? (p = h(l.view), f.push(p)) : (p = this.panels[g], p.update && p.update(l)), r.push(p), (p.top ? a : c).push(p);
        }
        this.specs = n, this.panels = r, this.top.sync(a), this.bottom.sync(c);
        for (let h of f) h.dom.classList.add("cm-panel"), h.mount && h.mount();
      } else for (let n of this.panels) n.update && n.update(l);
    }
    destroy() {
      this.top.sync([]), this.bottom.sync([]);
    }
  }, {
    provide: (l) => P.scrollMargins.of((t) => {
      let e = t.plugin(l);
      return e && {
        top: e.top.scrollMargin(),
        bottom: e.bottom.scrollMargin()
      };
    })
  });
  class bc {
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
        for (; t != e.dom; ) t = u1(t);
        t = t.nextSibling;
      } else this.dom.insertBefore(e.dom, t);
      for (; t; ) t = u1(t);
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
  function u1(l) {
    let t = l.nextSibling;
    return l.remove(), t;
  }
  const Sa = et.define({
    enables: BS
  });
  class Cn extends Ul {
    compare(t) {
      return this == t || this.constructor == t.constructor && this.eq(t);
    }
    eq(t) {
      return false;
    }
    destroy(t) {
    }
  }
  Cn.prototype.elementClass = "";
  Cn.prototype.toDOM = void 0;
  Cn.prototype.mapMode = He.TrackBefore;
  Cn.prototype.startSide = Cn.prototype.endSide = -1;
  Cn.prototype.point = true;
  const Hc = et.define(), jk = et.define(), Yk = {
    class: "",
    renderEmptyElements: false,
    elementStyle: "",
    markers: () => Bt.empty,
    lineMarker: () => null,
    widgetMarker: () => null,
    lineMarkerChange: null,
    initialSpacer: null,
    updateSpacer: null,
    domEventHandlers: {},
    side: "before"
  }, fa = et.define();
  function Gk(l) {
    return [
      RS(),
      fa.of({
        ...Yk,
        ...l
      })
    ];
  }
  const f1 = et.define({
    combine: (l) => l.some((t) => t)
  });
  function RS(l) {
    return [
      Xk
    ];
  }
  const Xk = ee.fromClass(class {
    constructor(l) {
      this.view = l, this.domAfter = null, this.prevViewport = l.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = l.state.facet(fa).map((t) => new d1(l, t)), this.fixed = !l.state.facet(f1);
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
      this.view.state.facet(f1) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = l.view.viewport;
    }
    syncGutters(l) {
      let t = this.dom.nextSibling;
      l && (this.dom.remove(), this.domAfter && this.domAfter.remove());
      let e = Bt.iter(this.view.state.facet(Hc), this.view.viewport.from), n = [], r = this.gutters.map((a) => new Kk(a, this.view.viewport, -this.view.documentPadding.top));
      for (let a of this.view.viewportLineBlocks) if (n.length && (n = []), Array.isArray(a.type)) {
        let c = true;
        for (let f of a.type) if (f.type == Ue.Text && c) {
          cm(e, n, f.from);
          for (let h of r) h.line(this.view, f, n);
          c = false;
        } else if (f.widget) for (let h of r) h.widget(this.view, f);
      } else if (a.type == Ue.Text) {
        cm(e, n, a.from);
        for (let c of r) c.line(this.view, a, n);
      } else if (a.widget) for (let c of r) c.widget(this.view, a);
      for (let a of r) a.finish();
      l && (this.view.scrollDOM.insertBefore(this.dom, t), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter));
    }
    updateGutters(l) {
      let t = l.startState.facet(fa), e = l.state.facet(fa), n = l.docChanged || l.heightChanged || l.viewportChanged || !Bt.eq(l.startState.facet(Hc), l.state.facet(Hc), l.view.viewport.from, l.view.viewport.to);
      if (t == e) for (let r of this.gutters) r.update(l) && (n = true);
      else {
        n = true;
        let r = [];
        for (let a of e) {
          let c = t.indexOf(a);
          c < 0 ? r.push(new d1(this.view, a)) : (this.gutters[c].update(l), r.push(this.gutters[c]));
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
  }, {
    provide: (l) => P.scrollMargins.of((t) => {
      let e = t.plugin(l);
      if (!e || e.gutters.length == 0 || !e.fixed) return null;
      let n = e.dom.offsetWidth * t.scaleX, r = e.domAfter ? e.domAfter.offsetWidth * t.scaleX : 0;
      return t.textDirection == Jt.LTR ? {
        left: n,
        right: r
      } : {
        right: n,
        left: r
      };
    })
  });
  function h1(l) {
    return Array.isArray(l) ? l : [
      l
    ];
  }
  function cm(l, t, e) {
    for (; l.value && l.from <= e; ) l.from == e && t.push(l.value), l.next();
  }
  class Kk {
    constructor(t, e, n) {
      this.gutter = t, this.height = n, this.i = 0, this.cursor = Bt.iter(t.markers, e.from);
    }
    addElement(t, e, n) {
      let { gutter: r } = this, a = (e.top - this.height) / t.scaleY, c = e.height / t.scaleY;
      if (this.i == r.elements.length) {
        let f = new zS(t, c, a, n);
        r.elements.push(f), r.dom.appendChild(f.dom);
      } else r.elements[this.i].update(t, c, a, n);
      this.height = e.bottom, this.i++;
    }
    line(t, e, n) {
      let r = [];
      cm(this.cursor, r, e.from), n.length && (r = r.concat(n));
      let a = this.gutter.config.lineMarker(t, e, r);
      a && r.unshift(a);
      let c = this.gutter;
      r.length == 0 && !c.config.renderEmptyElements || this.addElement(t, e, r);
    }
    widget(t, e) {
      let n = this.gutter.config.widgetMarker(t, e.widget, e), r = n ? [
        n
      ] : null;
      for (let a of t.state.facet(jk)) {
        let c = a(t, e.widget, e);
        c && (r || (r = [])).push(c);
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
  class d1 {
    constructor(t, e) {
      this.view = t, this.config = e, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
      for (let n in e.domEventHandlers) this.dom.addEventListener(n, (r) => {
        let a = r.target, c;
        if (a != this.dom && this.dom.contains(a)) {
          for (; a.parentNode != this.dom; ) a = a.parentNode;
          let h = a.getBoundingClientRect();
          c = (h.top + h.bottom) / 2;
        } else c = r.clientY;
        let f = t.lineBlockAtHeight(c - t.documentTop);
        e.domEventHandlers[n](t, f, r) && r.preventDefault();
      });
      this.markers = h1(e.markers(t)), e.initialSpacer && (this.spacer = new zS(t, 0, 0, [
        e.initialSpacer(t)
      ]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
    }
    update(t) {
      let e = this.markers;
      if (this.markers = h1(this.config.markers(t.view)), this.spacer && this.config.updateSpacer) {
        let r = this.config.updateSpacer(this.spacer.markers[0], t);
        r != this.spacer.markers[0] && this.spacer.update(t.view, 0, 0, [
          r
        ]);
      }
      let n = t.view.viewport;
      return !Bt.eq(this.markers, e, n.from, n.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(t) : false);
    }
    destroy() {
      for (let t of this.elements) t.destroy();
    }
  }
  class zS {
    constructor(t, e, n, r) {
      this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(t, e, n, r);
    }
    update(t, e, n, r) {
      this.height != e && (this.height = e, this.dom.style.height = e + "px"), this.above != n && (this.dom.style.marginTop = (this.above = n) ? n + "px" : ""), Qk(this.markers, r) || this.setMarkers(t, r);
    }
    setMarkers(t, e) {
      let n = "cm-gutterElement", r = this.dom.firstChild;
      for (let a = 0, c = 0; ; ) {
        let f = c, h = a < e.length ? e[a++] : null, g = false;
        if (h) {
          let p = h.elementClass;
          p && (n += " " + p);
          for (let y = c; y < this.markers.length; y++) if (this.markers[y].compare(h)) {
            f = y, g = true;
            break;
          }
        } else f = this.markers.length;
        for (; c < f; ) {
          let p = this.markers[c++];
          if (p.toDOM) {
            p.destroy(r);
            let y = r.nextSibling;
            r.remove(), r = y;
          }
        }
        if (!h) break;
        h.toDOM && (g ? r = r.nextSibling : this.dom.insertBefore(h.toDOM(t), r)), g && c++;
      }
      this.dom.className = n, this.markers = e;
    }
    destroy() {
      this.setMarkers(null, []);
    }
  }
  function Qk(l, t) {
    if (l.length != t.length) return false;
    for (let e = 0; e < l.length; e++) if (!l[e].compare(t[e])) return false;
    return true;
  }
  const Zk = et.define(), Wk = et.define(), Bs = et.define({
    combine(l) {
      return $i(l, {
        formatNumber: String,
        domEventHandlers: {}
      }, {
        domEventHandlers(t, e) {
          let n = Object.assign({}, t);
          for (let r in e) {
            let a = n[r], c = e[r];
            n[r] = a ? (f, h, g) => a(f, h, g) || c(f, h, g) : c;
          }
          return n;
        }
      });
    }
  });
  class od extends Cn {
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
  function cd(l, t) {
    return l.state.facet(Bs).formatNumber(t, l.state);
  }
  const Jk = fa.compute([
    Bs
  ], (l) => ({
    class: "cm-lineNumbers",
    renderEmptyElements: false,
    markers(t) {
      return t.state.facet(Zk);
    },
    lineMarker(t, e, n) {
      return n.some((r) => r.toDOM) ? null : new od(cd(t, t.state.doc.lineAt(e.from).number));
    },
    widgetMarker: (t, e, n) => {
      for (let r of t.state.facet(Wk)) {
        let a = r(t, e, n);
        if (a) return a;
      }
      return null;
    },
    lineMarkerChange: (t) => t.startState.facet(Bs) != t.state.facet(Bs),
    initialSpacer(t) {
      return new od(cd(t, m1(t.state.doc.lines)));
    },
    updateSpacer(t, e) {
      let n = cd(e.view, m1(e.view.state.doc.lines));
      return n == t.number ? t : new od(n);
    },
    domEventHandlers: l.facet(Bs).domEventHandlers,
    side: "before"
  }));
  function Fk(l = {}) {
    return [
      Bs.of(l),
      RS(),
      Jk
    ];
  }
  function m1(l) {
    let t = 9;
    for (; t < l; ) t = t * 10 + 9;
    return t;
  }
  const Pk = new class extends Cn {
    constructor() {
      super(...arguments), this.elementClass = "cm-activeLineGutter";
    }
  }(), Ik = Hc.compute([
    "selection"
  ], (l) => {
    let t = [], e = -1;
    for (let n of l.selection.ranges) {
      let r = l.doc.lineAt(n.head).from;
      r > e && (e = r, t.push(Pk.range(r)));
    }
    return Bt.of(t);
  });
  function $k() {
    return Ik;
  }
  const tT = 1024;
  let eT = 0;
  class ud {
    constructor(t, e) {
      this.from = t, this.to = e;
    }
  }
  class Dt {
    constructor(t = {}) {
      this.id = eT++, this.perNode = !!t.perNode, this.deserialize = t.deserialize || (() => {
        throw new Error("This node type doesn't define a deserialize function");
      }), this.combine = t.combine || null;
    }
    add(t) {
      if (this.perNode) throw new RangeError("Can't add per-node props to node types");
      return typeof t != "function" && (t = _i.match(t)), (e) => {
        let n = t(e);
        return n === void 0 ? null : [
          this,
          n
        ];
      };
    }
  }
  Dt.closedBy = new Dt({
    deserialize: (l) => l.split(" ")
  });
  Dt.openedBy = new Dt({
    deserialize: (l) => l.split(" ")
  });
  Dt.group = new Dt({
    deserialize: (l) => l.split(" ")
  });
  Dt.isolate = new Dt({
    deserialize: (l) => {
      if (l && l != "rtl" && l != "ltr" && l != "auto") throw new RangeError("Invalid value for isolate: " + l);
      return l || "auto";
    }
  });
  Dt.contextHash = new Dt({
    perNode: true
  });
  Dt.lookAhead = new Dt({
    perNode: true
  });
  Dt.mounted = new Dt({
    perNode: true
  });
  class Fc {
    constructor(t, e, n) {
      this.tree = t, this.overlay = e, this.parser = n;
    }
    static get(t) {
      return t && t.props && t.props[Dt.mounted.id];
    }
  }
  const iT = /* @__PURE__ */ Object.create(null);
  class _i {
    constructor(t, e, n, r = 0) {
      this.name = t, this.props = e, this.id = n, this.flags = r;
    }
    static define(t) {
      let e = t.props && t.props.length ? /* @__PURE__ */ Object.create(null) : iT, n = (t.top ? 1 : 0) | (t.skipped ? 2 : 0) | (t.error ? 4 : 0) | (t.name == null ? 8 : 0), r = new _i(t.name || "", e, t.id, n);
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
          let c = e[a < 0 ? n.name : r[a]];
          if (c) return c;
        }
      };
    }
  }
  _i.none = new _i("", /* @__PURE__ */ Object.create(null), 0, 8);
  const vc = /* @__PURE__ */ new WeakMap(), g1 = /* @__PURE__ */ new WeakMap();
  var Me;
  (function(l) {
    l[l.ExcludeBuffers = 1] = "ExcludeBuffers", l[l.IncludeAnonymous = 2] = "IncludeAnonymous", l[l.IgnoreMounts = 4] = "IgnoreMounts", l[l.IgnoreOverlays = 8] = "IgnoreOverlays";
  })(Me || (Me = {}));
  class Ee {
    constructor(t, e, n, r, a) {
      if (this.type = t, this.children = e, this.positions = n, this.length = r, this.props = null, a && a.length) {
        this.props = /* @__PURE__ */ Object.create(null);
        for (let [c, f] of a) this.props[typeof c == "number" ? c : c.id] = f;
      }
    }
    toString() {
      let t = Fc.get(this);
      if (t && !t.overlay) return t.tree.toString();
      let e = "";
      for (let n of this.children) {
        let r = n.toString();
        r && (e && (e += ","), e += r);
      }
      return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (e.length ? "(" + e + ")" : "") : e;
    }
    cursor(t = 0) {
      return new fm(this.topNode, t);
    }
    cursorAt(t, e = 0, n = 0) {
      let r = vc.get(this) || this.topNode, a = new fm(r);
      return a.moveTo(t, e), vc.set(this, a._tree), a;
    }
    get topNode() {
      return new Ci(this, 0, 0, null);
    }
    resolve(t, e = 0) {
      let n = xa(vc.get(this) || this.topNode, t, e, false);
      return vc.set(this, n), n;
    }
    resolveInner(t, e = 0) {
      let n = xa(g1.get(this) || this.topNode, t, e, true);
      return g1.set(this, n), n;
    }
    resolveStack(t, e = 0) {
      return sT(this, t, e);
    }
    iterate(t) {
      let { enter: e, leave: n, from: r = 0, to: a = this.length } = t, c = t.mode || 0, f = (c & Me.IncludeAnonymous) > 0;
      for (let h = this.cursor(c | Me.IncludeAnonymous); ; ) {
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
      if (this.props) for (let e in this.props) t.push([
        +e,
        this.props[e]
      ]);
      return t;
    }
    balance(t = {}) {
      return this.children.length <= 8 ? this : jm(_i.none, this.children, this.positions, 0, this.children.length, 0, this.length, (e, n, r) => new Ee(this.type, e, n, r, this.propValues), t.makeTree || ((e, n, r) => new Ee(_i.none, e, n, r)));
    }
    static build(t) {
      return rT(t);
    }
  }
  Ee.empty = new Ee(_i.none, [], [], 0);
  class Vm {
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
      return new Vm(this.buffer, this.index);
    }
  }
  class ol {
    constructor(t, e, n) {
      this.buffer = t, this.length = e, this.set = n;
    }
    get type() {
      return _i.none;
    }
    toString() {
      let t = [];
      for (let e = 0; e < this.buffer.length; ) t.push(this.childString(e)), e = this.buffer[e + 3];
      return t.join(",");
    }
    childString(t) {
      let e = this.buffer[t], n = this.buffer[t + 3], r = this.set.types[e], a = r.name;
      if (/\W/.test(a) && !r.isError && (a = JSON.stringify(a)), t += 4, n == t) return a;
      let c = [];
      for (; t < n; ) c.push(this.childString(t)), t = this.buffer[t + 3];
      return a + "(" + c.join(",") + ")";
    }
    findChild(t, e, n, r, a) {
      let { buffer: c } = this, f = -1;
      for (let h = t; h != e && !(NS(a, r, c[h + 1], c[h + 2]) && (f = h, n > 0)); h = c[h + 3]) ;
      return f;
    }
    slice(t, e, n) {
      let r = this.buffer, a = new Uint16Array(e - t), c = 0;
      for (let f = t, h = 0; f < e; ) {
        a[h++] = r[f++], a[h++] = r[f++] - n;
        let g = a[h++] = r[f++] - n;
        a[h++] = r[f++] - t, c = Math.max(c, g);
      }
      return new ol(a, c, this.set);
    }
  }
  function NS(l, t, e, n) {
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
  function xa(l, t, e, n) {
    for (var r; l.from == l.to || (e < 1 ? l.from >= t : l.from > t) || (e > -1 ? l.to <= t : l.to < t); ) {
      let c = !n && l instanceof Ci && l.index < 0 ? null : l.parent;
      if (!c) return l;
      l = c;
    }
    let a = n ? 0 : Me.IgnoreOverlays;
    if (n) for (let c = l, f = c.parent; f; c = f, f = c.parent) c instanceof Ci && c.index < 0 && ((r = f.enter(t, e, a)) === null || r === void 0 ? void 0 : r.from) != c.from && (l = f);
    for (; ; ) {
      let c = l.enter(t, e, a);
      if (!c) return l;
      l = c;
    }
  }
  class LS {
    cursor(t = 0) {
      return new fm(this, t);
    }
    getChild(t, e = null, n = null) {
      let r = p1(this, t, e, n);
      return r.length ? r[0] : null;
    }
    getChildren(t, e = null, n = null) {
      return p1(this, t, e, n);
    }
    resolve(t, e = 0) {
      return xa(this, t, e, false);
    }
    resolveInner(t, e = 0) {
      return xa(this, t, e, true);
    }
    matchContext(t) {
      return um(this.parent, t);
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
  class Ci extends LS {
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
      for (let c = this; ; ) {
        for (let { children: f, positions: h } = c._tree, g = e > 0 ? f.length : -1; t != g; t += e) {
          let p = f[t], y = h[t] + c.from;
          if (NS(r, n, y, y + p.length)) {
            if (p instanceof ol) {
              if (a & Me.ExcludeBuffers) continue;
              let v = p.findChild(0, p.buffer.length, e, n - y, r);
              if (v > -1) return new il(new nT(c, p, t, y), null, v);
            } else if (a & Me.IncludeAnonymous || !p.type.isAnonymous || qm(p)) {
              let v;
              if (!(a & Me.IgnoreMounts) && (v = Fc.get(p)) && !v.overlay) return new Ci(v.tree, y, t, c);
              let S = new Ci(p, y, t, c);
              return a & Me.IncludeAnonymous || !S.type.isAnonymous ? S : S.nextChild(e < 0 ? p.children.length - 1 : 0, e, n, r);
            }
          }
        }
        if (a & Me.IncludeAnonymous || !c.type.isAnonymous || (c.index >= 0 ? t = c.index + e : t = e < 0 ? -1 : c._parent._tree.children.length, c = c._parent, !c)) return null;
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
      if (!(n & Me.IgnoreOverlays) && (r = Fc.get(this._tree)) && r.overlay) {
        let a = t - this.from;
        for (let { from: c, to: f } of r.overlay) if ((e > 0 ? c <= a : c < a) && (e < 0 ? f >= a : f > a)) return new Ci(r.tree, r.overlay[0].from + this.from, -1, this);
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
  function p1(l, t, e, n) {
    let r = l.cursor(), a = [];
    if (!r.firstChild()) return a;
    if (e != null) {
      for (let c = false; !c; ) if (c = r.type.is(e), !r.nextSibling()) return a;
    }
    for (; ; ) {
      if (n != null && r.type.is(n)) return a;
      if (r.type.is(t) && a.push(r.node), !r.nextSibling()) return n == null ? a : [];
    }
  }
  function um(l, t, e = t.length - 1) {
    for (let n = l; e >= 0; n = n.parent) {
      if (!n) return false;
      if (!n.type.isAnonymous) {
        if (t[e] && t[e] != n.name) return false;
        e--;
      }
    }
    return true;
  }
  class nT {
    constructor(t, e, n, r) {
      this.parent = t, this.buffer = e, this.index = n, this.start = r;
    }
  }
  class il extends LS {
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
      return a < 0 ? null : new il(this.context, this, a);
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
      if (n & Me.ExcludeBuffers) return null;
      let { buffer: r } = this.context, a = r.findChild(this.index + 4, r.buffer[this.index + 3], e > 0 ? 1 : -1, t - this.context.start, e);
      return a < 0 ? null : new il(this.context, this, a);
    }
    get parent() {
      return this._parent || this.context.parent.nextSignificantParent();
    }
    externalSibling(t) {
      return this._parent ? null : this.context.parent.nextChild(this.context.index + t, t, 0, 4);
    }
    get nextSibling() {
      let { buffer: t } = this.context, e = t.buffer[this.index + 3];
      return e < (this._parent ? t.buffer[this._parent.index + 3] : t.buffer.length) ? new il(this.context, this._parent, e) : this.externalSibling(1);
    }
    get prevSibling() {
      let { buffer: t } = this.context, e = this._parent ? this._parent.index + 4 : 0;
      return this.index == e ? this.externalSibling(-1) : new il(this.context, this._parent, t.findChild(e, this.index, -1, 0, 4));
    }
    get tree() {
      return null;
    }
    toTree() {
      let t = [], e = [], { buffer: n } = this.context, r = this.index + 4, a = n.buffer[this.index + 3];
      if (a > r) {
        let c = n.buffer[this.index + 1];
        t.push(n.slice(r, a, c)), e.push(0);
      }
      return new Ee(this.type, t, e, this.to - this.from);
    }
    toString() {
      return this.context.buffer.childString(this.index);
    }
  }
  function HS(l) {
    if (!l.length) return null;
    let t = 0, e = l[0];
    for (let a = 1; a < l.length; a++) {
      let c = l[a];
      (c.from > e.from || c.to < e.to) && (e = c, t = a);
    }
    let n = e instanceof Ci && e.index < 0 ? null : e.parent, r = l.slice();
    return n ? r[t] = n : r.splice(t, 1), new lT(r, e);
  }
  class lT {
    constructor(t, e) {
      this.heads = t, this.node = e;
    }
    get next() {
      return HS(this.heads);
    }
  }
  function sT(l, t, e) {
    let n = l.resolveInner(t, e), r = null;
    for (let a = n instanceof Ci ? n : n.context.parent; a; a = a.parent) if (a.index < 0) {
      let c = a.parent;
      (r || (r = [
        n
      ])).push(c.resolve(t, e)), a = c;
    } else {
      let c = Fc.get(a.tree);
      if (c && c.overlay && c.overlay[0].from <= t && c.overlay[c.overlay.length - 1].to >= t) {
        let f = new Ci(c.tree, c.overlay[0].from + a.from, -1, a);
        (r || (r = [
          n
        ])).push(xa(f, t, e, false));
      }
    }
    return r ? HS(r) : n;
  }
  class fm {
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
      return this.buffer ? n & Me.ExcludeBuffers ? false : this.enterChild(1, t, e) : this.yield(this._tree.enter(t, e, n));
    }
    parent() {
      if (!this.buffer) return this.yieldNode(this.mode & Me.IncludeAnonymous ? this._tree._parent : this._tree.parent);
      if (this.stack.length) return this.yieldBuf(this.stack.pop());
      let t = this.mode & Me.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
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
      for (; n; { index: e, _parent: n } = n) if (e > -1) for (let a = e + t, c = t < 0 ? -1 : n._tree.children.length; a != c; a += t) {
        let f = n._tree.children[a];
        if (this.mode & Me.IncludeAnonymous || f instanceof ol || !f.type.isAnonymous || qm(f)) return false;
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
        for (let c = t; c; c = c._parent) if (c.index == r) {
          if (r == this.index) return c;
          e = c, n = a + 1;
          break t;
        }
        r = this.stack[--a];
      }
      for (let r = n; r < this.stack.length; r++) e = new il(this.buffer, e, this.stack[r]);
      return this.bufferNode = new il(this.buffer, e, this.index);
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
      if (!this.buffer) return um(this.node.parent, t);
      let { buffer: e } = this.buffer, { types: n } = e.set;
      for (let r = t.length - 1, a = this.stack.length - 1; r >= 0; a--) {
        if (a < 0) return um(this._tree, t, r);
        let c = n[e.buffer[this.stack[a]]];
        if (!c.isAnonymous) {
          if (t[r] && t[r] != c.name) return false;
          r--;
        }
      }
      return true;
    }
  }
  function qm(l) {
    return l.children.some((t) => t instanceof ol || !t.type.isAnonymous || qm(t));
  }
  function rT(l) {
    var t;
    let { buffer: e, nodeSet: n, maxBufferLength: r = tT, reused: a = [], minRepeatType: c = n.types.length } = l, f = Array.isArray(e) ? new Vm(e, e.length) : e, h = n.types, g = 0, p = 0;
    function y(N, G, V, lt, tt, pt) {
      let { id: at, start: I, end: ft, size: ht } = f, yt = p, R = g;
      if (ht < 0) if (f.next(), ht == -1) {
        let M = a[at];
        V.push(M), lt.push(I - N);
        return;
      } else if (ht == -3) {
        g = at;
        return;
      } else if (ht == -4) {
        p = at;
        return;
      } else throw new RangeError(`Unrecognized record size: ${ht}`);
      let Z = h[at], it, rt, mt = I - N;
      if (ft - I <= r && (rt = _(f.pos - G, tt))) {
        let M = new Uint16Array(rt.size - rt.skip), H = f.pos - rt.size, W = M.length;
        for (; f.pos > H; ) W = T(rt.start, M, W);
        it = new ol(M, ft - rt.start, n), mt = rt.start - N;
      } else {
        let M = f.pos - ht;
        f.next();
        let H = [], W = [], $ = at >= c ? at : -1, dt = 0, bt = ft;
        for (; f.pos > M; ) $ >= 0 && f.id == $ && f.size >= 0 ? (f.end <= bt - r && (w(H, W, I, dt, f.end, bt, $, yt, R), dt = H.length, bt = f.end), f.next()) : pt > 2500 ? v(I, M, H, W) : y(I, M, H, W, $, pt + 1);
        if ($ >= 0 && dt > 0 && dt < H.length && w(H, W, I, dt, I, bt, $, yt, R), H.reverse(), W.reverse(), $ > -1 && dt > 0) {
          let Et = S(Z, R);
          it = jm(Z, H, W, 0, H.length, 0, ft - I, Et, Et);
        } else it = A(Z, H, W, ft - I, yt - ft, R);
      }
      V.push(it), lt.push(mt);
    }
    function v(N, G, V, lt) {
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
        V.push(new ol(I, tt[2] - ft, n)), lt.push(ft - N);
      }
    }
    function S(N, G) {
      return (V, lt, tt) => {
        let pt = 0, at = V.length - 1, I, ft;
        if (at >= 0 && (I = V[at]) instanceof Ee) {
          if (!at && I.type == N && I.length == tt) return I;
          (ft = I.prop(Dt.lookAhead)) && (pt = lt[at] + I.length + ft);
        }
        return A(N, V, lt, tt, pt, G);
      };
    }
    function w(N, G, V, lt, tt, pt, at, I, ft) {
      let ht = [], yt = [];
      for (; N.length > lt; ) ht.push(N.pop()), yt.push(G.pop() + V - tt);
      N.push(A(n.types[at], ht, yt, pt - tt, I - pt, ft)), G.push(tt - V);
    }
    function A(N, G, V, lt, tt, pt, at) {
      if (pt) {
        let I = [
          Dt.contextHash,
          pt
        ];
        at = at ? [
          I
        ].concat(at) : [
          I
        ];
      }
      if (tt > 25) {
        let I = [
          Dt.lookAhead,
          tt
        ];
        at = at ? [
          I
        ].concat(at) : [
          I
        ];
      }
      return new Ee(N, G, V, lt, at);
    }
    function _(N, G) {
      let V = f.fork(), lt = 0, tt = 0, pt = 0, at = V.end - r, I = {
        size: 0,
        start: 0,
        skip: 0
      };
      t: for (let ft = V.pos - N; V.pos > ft; ) {
        let ht = V.size;
        if (V.id == G && ht >= 0) {
          I.size = lt, I.start = tt, I.skip = pt, pt += 4, lt += 4, V.next();
          continue;
        }
        let yt = V.pos - ht;
        if (ht < 0 || yt < ft || V.start < at) break;
        let R = V.id >= c ? 4 : 0, Z = V.start;
        for (V.next(); V.pos > yt; ) {
          if (V.size < 0) if (V.size == -3 || V.size == -4) R += 4;
          else break t;
          else V.id >= c && (R += 4);
          V.next();
        }
        tt = Z, lt += ht, pt += R;
      }
      return (G < 0 || lt == N) && (I.size = lt, I.start = tt, I.skip = pt), I.size > 4 ? I : void 0;
    }
    function T(N, G, V) {
      let { id: lt, start: tt, end: pt, size: at } = f;
      if (f.next(), at >= 0 && lt < c) {
        let I = V;
        if (at > 4) {
          let ft = f.pos - (at - 4);
          for (; f.pos > ft; ) V = T(N, G, V);
        }
        G[--V] = I, G[--V] = pt - N, G[--V] = tt - N, G[--V] = lt;
      } else at == -3 ? g = lt : at == -4 && (p = lt);
      return V;
    }
    let j = [], L = [];
    for (; f.pos > 0; ) y(l.start || 0, l.bufferStart || 0, j, L, -1, 0);
    let Q = (t = l.length) !== null && t !== void 0 ? t : j.length ? L[0] + j[0].length : 0;
    return new Ee(h[l.topID], j.reverse(), L.reverse(), Q);
  }
  const y1 = /* @__PURE__ */ new WeakMap();
  function Uc(l, t) {
    if (!l.isAnonymous || t instanceof ol || t.type != l) return 1;
    let e = y1.get(t);
    if (e == null) {
      e = 1;
      for (let n of t.children) {
        if (n.type != l || !(n instanceof Ee)) {
          e = 1;
          break;
        }
        e += Uc(l, n);
      }
      y1.set(t, e);
    }
    return e;
  }
  function jm(l, t, e, n, r, a, c, f, h) {
    let g = 0;
    for (let w = n; w < r; w++) g += Uc(l, t[w]);
    let p = Math.ceil(g * 1.5 / 8), y = [], v = [];
    function S(w, A, _, T, j) {
      for (let L = _; L < T; ) {
        let Q = L, N = A[L], G = Uc(l, w[L]);
        for (L++; L < T; L++) {
          let V = Uc(l, w[L]);
          if (G + V >= p) break;
          G += V;
        }
        if (L == Q + 1) {
          if (G > p) {
            let V = w[Q];
            S(V.children, V.positions, 0, V.children.length, A[Q] + j);
            continue;
          }
          y.push(w[Q]);
        } else {
          let V = A[L - 1] + w[L - 1].length - N;
          y.push(jm(l, w, A, Q, L, N, V, null, h));
        }
        v.push(N + j - a);
      }
    }
    return S(t, e, n, r, 0), (f || h)(y, v, c);
  }
  class Ll {
    constructor(t, e, n, r, a = false, c = false) {
      this.from = t, this.to = e, this.tree = n, this.offset = r, this.open = (a ? 1 : 0) | (c ? 2 : 0);
    }
    get openStart() {
      return (this.open & 1) > 0;
    }
    get openEnd() {
      return (this.open & 2) > 0;
    }
    static addTree(t, e = [], n = false) {
      let r = [
        new Ll(0, t.length, t, 0, false, n)
      ];
      for (let a of e) a.to > t.length && r.push(a);
      return r;
    }
    static applyChanges(t, e, n = 128) {
      if (!e.length) return t;
      let r = [], a = 1, c = t.length ? t[0] : null;
      for (let f = 0, h = 0, g = 0; ; f++) {
        let p = f < e.length ? e[f] : null, y = p ? p.fromA : 1e9;
        if (y - h >= n) for (; c && c.from < y; ) {
          let v = c;
          if (h >= v.from || y <= v.to || g) {
            let S = Math.max(v.from, h) - g, w = Math.min(v.to, y) - g;
            v = S >= w ? null : new Ll(S, w, v.tree, v.offset + g, f > 0, !!p);
          }
          if (v && r.push(v), c.to > y) break;
          c = a < t.length ? t[a++] : null;
        }
        if (!p) break;
        h = p.toA, g = p.toA - p.toB;
      }
      return r;
    }
  }
  class aT {
    startParse(t, e, n) {
      return typeof t == "string" && (t = new oT(t)), n = n ? n.length ? n.map((r) => new ud(r.from, r.to)) : [
        new ud(0, 0)
      ] : [
        new ud(0, t.length)
      ], this.createParse(t, e || [], n);
    }
    parse(t, e, n) {
      let r = this.startParse(t, e, n);
      for (; ; ) {
        let a = r.advance();
        if (a) return a;
      }
    }
  }
  class oT {
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
  new Dt({
    perNode: true
  });
  let cT = 0;
  class Si {
    constructor(t, e, n, r) {
      this.name = t, this.set = e, this.base = n, this.modified = r, this.id = cT++;
    }
    toString() {
      let { name: t } = this;
      for (let e of this.modified) e.name && (t = `${e.name}(${t})`);
      return t;
    }
    static define(t, e) {
      let n = typeof t == "string" ? t : "?";
      if (t instanceof Si && (e = t), e == null ? void 0 : e.base) throw new Error("Can not derive from a modified tag");
      let r = new Si(n, [], null, []);
      if (r.set.push(r), e) for (let a of e.set) r.set.push(a);
      return r;
    }
    static defineModifier(t) {
      let e = new Pc(t);
      return (n) => n.modified.indexOf(e) > -1 ? n : Pc.get(n.base || n, n.modified.concat(e).sort((r, a) => r.id - a.id));
    }
  }
  let uT = 0;
  class Pc {
    constructor(t) {
      this.name = t, this.instances = [], this.id = uT++;
    }
    static get(t, e) {
      if (!e.length) return t;
      let n = e[0].instances.find((f) => f.base == t && fT(e, f.modified));
      if (n) return n;
      let r = [], a = new Si(t.name, r, t, e);
      for (let f of e) f.instances.push(a);
      let c = hT(e);
      for (let f of t.set) if (!f.modified.length) for (let h of c) r.push(Pc.get(f, h));
      return a;
    }
  }
  function fT(l, t) {
    return l.length == t.length && l.every((e, n) => e == t[n]);
  }
  function hT(l) {
    let t = [
      []
    ];
    for (let e = 0; e < l.length; e++) for (let n = 0, r = t.length; n < r; n++) t.push(t[n].concat(l[e]));
    return t.sort((e, n) => n.length - e.length);
  }
  function dT(l) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let e in l) {
      let n = l[e];
      Array.isArray(n) || (n = [
        n
      ]);
      for (let r of e.split(" ")) if (r) {
        let a = [], c = 2, f = r;
        for (let y = 0; ; ) {
          if (f == "..." && y > 0 && y + 3 == r.length) {
            c = 1;
            break;
          }
          let v = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(f);
          if (!v) throw new RangeError("Invalid path: " + r);
          if (a.push(v[0] == "*" ? "" : v[0][0] == '"' ? JSON.parse(v[0]) : v[0]), y += v[0].length, y == r.length) break;
          let S = r[y++];
          if (y == r.length && S == "!") {
            c = 0;
            break;
          }
          if (S != "/") throw new RangeError("Invalid path: " + r);
          f = r.slice(y);
        }
        let h = a.length - 1, g = a[h];
        if (!g) throw new RangeError("Invalid path: " + r);
        let p = new wa(n, c, h > 0 ? a.slice(0, h) : null);
        t[g] = p.sort(t[g]);
      }
    }
    return US.add(t);
  }
  const US = new Dt({
    combine(l, t) {
      let e, n, r;
      for (; l || t; ) {
        if (!l || t && l.depth >= t.depth ? (r = t, t = t.next) : (r = l, l = l.next), e && e.mode == r.mode && !r.context && !e.context) continue;
        let a = new wa(r.tags, r.mode, r.context);
        e ? e.next = a : n = a, e = a;
      }
      return n;
    }
  });
  class wa {
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
  wa.empty = new wa([], 2, null);
  function VS(l, t) {
    let e = /* @__PURE__ */ Object.create(null);
    for (let a of l) if (!Array.isArray(a.tag)) e[a.tag.id] = a.class;
    else for (let c of a.tag) e[c.id] = a.class;
    let { scope: n, all: r = null } = t || {};
    return {
      style: (a) => {
        let c = r;
        for (let f of a) for (let h of f.set) {
          let g = e[h.id];
          if (g) {
            c = c ? c + " " + g : g;
            break;
          }
        }
        return c;
      },
      scope: n
    };
  }
  function mT(l, t) {
    let e = null;
    for (let n of l) {
      let r = n.style(t);
      r && (e = e ? e + " " + r : r);
    }
    return e;
  }
  function gT(l, t, e, n = 0, r = l.length) {
    let a = new pT(n, Array.isArray(t) ? t : [
      t
    ], e);
    a.highlightRange(l.cursor(), n, r, "", a.highlighters), a.flush(r);
  }
  class pT {
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
      let { type: c, from: f, to: h } = t;
      if (f >= n || h <= e) return;
      c.isTop && (a = this.highlighters.filter((S) => !S.scope || S.scope(c)));
      let g = r, p = yT(t) || wa.empty, y = mT(a, p.tags);
      if (y && (g && (g += " "), g += y, p.mode == 1 && (r += (r ? " " : "") + y)), this.startSpan(Math.max(e, f), g), p.opaque) return;
      let v = t.tree && t.tree.prop(Dt.mounted);
      if (v && v.overlay) {
        let S = t.node.enter(v.overlay[0].from + f, 1), w = this.highlighters.filter((_) => !_.scope || _.scope(v.tree.type)), A = t.firstChild();
        for (let _ = 0, T = f; ; _++) {
          let j = _ < v.overlay.length ? v.overlay[_] : null, L = j ? j.from + f : h, Q = Math.max(e, T), N = Math.min(n, L);
          if (Q < N && A) for (; t.from < N && (this.highlightRange(t, Q, N, r, a), this.startSpan(Math.min(N, t.to), g), !(t.to >= L || !t.nextSibling())); ) ;
          if (!j || L > n) break;
          T = j.to + f, T > e && (this.highlightRange(S.cursor(), Math.max(e, j.from + f), Math.min(n, T), "", w), this.startSpan(Math.min(n, T), g));
        }
        A && t.parent();
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
  function yT(l) {
    let t = l.type.prop(US);
    for (; t && t.context && !l.matchContext(t.context); ) t = t.next;
    return t || null;
  }
  const J = Si.define, Sc = J(), Pn = J(), b1 = J(Pn), v1 = J(Pn), In = J(), xc = J(In), fd = J(In), Yi = J(), Dl = J(Yi), qi = J(), ji = J(), hm = J(), Pr = J(hm), wc = J(), q = {
    comment: Sc,
    lineComment: J(Sc),
    blockComment: J(Sc),
    docComment: J(Sc),
    name: Pn,
    variableName: J(Pn),
    typeName: b1,
    tagName: J(b1),
    propertyName: v1,
    attributeName: J(v1),
    className: J(Pn),
    labelName: J(Pn),
    namespace: J(Pn),
    macroName: J(Pn),
    literal: In,
    string: xc,
    docString: J(xc),
    character: J(xc),
    attributeValue: J(xc),
    number: fd,
    integer: J(fd),
    float: J(fd),
    bool: J(In),
    regexp: J(In),
    escape: J(In),
    color: J(In),
    url: J(In),
    keyword: qi,
    self: J(qi),
    null: J(qi),
    atom: J(qi),
    unit: J(qi),
    modifier: J(qi),
    operatorKeyword: J(qi),
    controlKeyword: J(qi),
    definitionKeyword: J(qi),
    moduleKeyword: J(qi),
    operator: ji,
    derefOperator: J(ji),
    arithmeticOperator: J(ji),
    logicOperator: J(ji),
    bitwiseOperator: J(ji),
    compareOperator: J(ji),
    updateOperator: J(ji),
    definitionOperator: J(ji),
    typeOperator: J(ji),
    controlOperator: J(ji),
    punctuation: hm,
    separator: J(hm),
    bracket: Pr,
    angleBracket: J(Pr),
    squareBracket: J(Pr),
    paren: J(Pr),
    brace: J(Pr),
    content: Yi,
    heading: Dl,
    heading1: J(Dl),
    heading2: J(Dl),
    heading3: J(Dl),
    heading4: J(Dl),
    heading5: J(Dl),
    heading6: J(Dl),
    contentSeparator: J(Yi),
    list: J(Yi),
    quote: J(Yi),
    emphasis: J(Yi),
    strong: J(Yi),
    link: J(Yi),
    monospace: J(Yi),
    strikethrough: J(Yi),
    inserted: J(),
    deleted: J(),
    changed: J(),
    invalid: J(),
    meta: wc,
    documentMeta: J(wc),
    annotation: J(wc),
    processingInstruction: J(wc),
    definition: Si.defineModifier("definition"),
    constant: Si.defineModifier("constant"),
    function: Si.defineModifier("function"),
    standard: Si.defineModifier("standard"),
    local: Si.defineModifier("local"),
    special: Si.defineModifier("special")
  };
  for (let l in q) {
    let t = q[l];
    t instanceof Si && (t.name = l);
  }
  VS([
    {
      tag: q.link,
      class: "tok-link"
    },
    {
      tag: q.heading,
      class: "tok-heading"
    },
    {
      tag: q.emphasis,
      class: "tok-emphasis"
    },
    {
      tag: q.strong,
      class: "tok-strong"
    },
    {
      tag: q.keyword,
      class: "tok-keyword"
    },
    {
      tag: q.atom,
      class: "tok-atom"
    },
    {
      tag: q.bool,
      class: "tok-bool"
    },
    {
      tag: q.url,
      class: "tok-url"
    },
    {
      tag: q.labelName,
      class: "tok-labelName"
    },
    {
      tag: q.inserted,
      class: "tok-inserted"
    },
    {
      tag: q.deleted,
      class: "tok-deleted"
    },
    {
      tag: q.literal,
      class: "tok-literal"
    },
    {
      tag: q.string,
      class: "tok-string"
    },
    {
      tag: q.number,
      class: "tok-number"
    },
    {
      tag: [
        q.regexp,
        q.escape,
        q.special(q.string)
      ],
      class: "tok-string2"
    },
    {
      tag: q.variableName,
      class: "tok-variableName"
    },
    {
      tag: q.local(q.variableName),
      class: "tok-variableName tok-local"
    },
    {
      tag: q.definition(q.variableName),
      class: "tok-variableName tok-definition"
    },
    {
      tag: q.special(q.variableName),
      class: "tok-variableName2"
    },
    {
      tag: q.definition(q.propertyName),
      class: "tok-propertyName tok-definition"
    },
    {
      tag: q.typeName,
      class: "tok-typeName"
    },
    {
      tag: q.namespace,
      class: "tok-namespace"
    },
    {
      tag: q.className,
      class: "tok-className"
    },
    {
      tag: q.macroName,
      class: "tok-macroName"
    },
    {
      tag: q.propertyName,
      class: "tok-propertyName"
    },
    {
      tag: q.operator,
      class: "tok-operator"
    },
    {
      tag: q.comment,
      class: "tok-comment"
    },
    {
      tag: q.meta,
      class: "tok-meta"
    },
    {
      tag: q.invalid,
      class: "tok-invalid"
    },
    {
      tag: q.punctuation,
      class: "tok-punctuation"
    }
  ]);
  var hd;
  const la = new Dt(), bT = new Dt();
  class Qi {
    constructor(t, e, n = [], r = "") {
      this.data = t, this.name = r, Ot.prototype.hasOwnProperty("tree") || Object.defineProperty(Ot.prototype, "tree", {
        get() {
          return Be(this);
        }
      }), this.parser = e, this.extension = [
        cl.of(this),
        Ot.languageData.of((a, c, f) => {
          let h = S1(a, c, f), g = h.type.prop(la);
          if (!g) return [];
          let p = a.facet(g), y = h.type.prop(bT);
          if (y) {
            let v = h.resolve(c - h.from, f);
            for (let S of y) if (S.test(v, a)) {
              let w = a.facet(S.facet);
              return S.type == "replace" ? w : w.concat(p);
            }
          }
          return p;
        })
      ].concat(n);
    }
    isActiveAt(t, e, n = -1) {
      return S1(t, e, n).type.prop(la) == this.data;
    }
    findRegions(t) {
      let e = t.facet(cl);
      if ((e == null ? void 0 : e.data) == this.data) return [
        {
          from: 0,
          to: t.doc.length
        }
      ];
      if (!e || !e.allowsNesting) return [];
      let n = [], r = (a, c) => {
        if (a.prop(la) == this.data) {
          n.push({
            from: c,
            to: c + a.length
          });
          return;
        }
        let f = a.prop(Dt.mounted);
        if (f) {
          if (f.tree.prop(la) == this.data) {
            if (f.overlay) for (let h of f.overlay) n.push({
              from: h.from + c,
              to: h.to + c
            });
            else n.push({
              from: c,
              to: c + a.length
            });
            return;
          } else if (f.overlay) {
            let h = n.length;
            if (r(f.tree, f.overlay[0].from + c), n.length > h) return;
          }
        }
        for (let h = 0; h < a.children.length; h++) {
          let g = a.children[h];
          g instanceof Ee && r(g, a.positions[h] + c);
        }
      };
      return r(Be(t), 0), n;
    }
    get allowsNesting() {
      return true;
    }
  }
  Qi.setState = St.define();
  function S1(l, t, e) {
    let n = l.facet(cl), r = Be(l).topNode;
    if (!n || n.allowsNesting) for (let a = r; a; a = a.enter(t, e, Me.ExcludeBuffers)) a.type.isTop && (r = a);
    return r;
  }
  function Be(l) {
    let t = l.field(Qi.state, false);
    return t ? t.tree : Ee.empty;
  }
  class vT {
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
  let Ir = null;
  class Ic {
    constructor(t, e, n = [], r, a, c, f, h) {
      this.parser = t, this.state = e, this.fragments = n, this.tree = r, this.treeLen = a, this.viewport = c, this.skipped = f, this.scheduleOn = h, this.parse = null, this.tempSkipped = [];
    }
    static create(t, e, n) {
      return new Ic(t, e, [], Ee.empty, 0, n, [], null);
    }
    startParse() {
      return this.parser.startParse(new vT(this.state.doc), this.fragments);
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
          if (r) if (this.fragments = this.withoutTempSkipped(Ll.addTree(r, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (n = this.parse.stoppedAt) !== null && n !== void 0 ? n : this.state.doc.length, this.tree = r, this.parse = null, this.treeLen < (e ?? this.state.doc.length)) this.parse = this.startParse();
          else return true;
          if (t()) return false;
        }
      });
    }
    takeTree() {
      let t, e;
      this.parse && (t = this.parse.parsedPos) >= this.treeLen && ((this.parse.stoppedAt == null || this.parse.stoppedAt > t) && this.parse.stopAt(t), this.withContext(() => {
        for (; !(e = this.parse.advance()); ) ;
      }), this.treeLen = t, this.tree = e, this.fragments = this.withoutTempSkipped(Ll.addTree(this.tree, this.fragments, true)), this.parse = null);
    }
    withContext(t) {
      let e = Ir;
      Ir = this;
      try {
        return t();
      } finally {
        Ir = e;
      }
    }
    withoutTempSkipped(t) {
      for (let e; e = this.tempSkipped.pop(); ) t = x1(t, e.from, e.to);
      return t;
    }
    changes(t, e) {
      let { fragments: n, tree: r, treeLen: a, viewport: c, skipped: f } = this;
      if (this.takeTree(), !t.empty) {
        let h = [];
        if (t.iterChangedRanges((g, p, y, v) => h.push({
          fromA: g,
          toA: p,
          fromB: y,
          toB: v
        })), n = Ll.applyChanges(n, h), r = Ee.empty, a = 0, c = {
          from: t.mapPos(c.from, -1),
          to: t.mapPos(c.to, 1)
        }, this.skipped.length) {
          f = [];
          for (let g of this.skipped) {
            let p = t.mapPos(g.from, 1), y = t.mapPos(g.to, -1);
            p < y && f.push({
              from: p,
              to: y
            });
          }
        }
      }
      return new Ic(this.parser, e, n, r, a, c, f, this.scheduleOn);
    }
    updateViewport(t) {
      if (this.viewport.from == t.from && this.viewport.to == t.to) return false;
      this.viewport = t;
      let e = this.skipped.length;
      for (let n = 0; n < this.skipped.length; n++) {
        let { from: r, to: a } = this.skipped[n];
        r < t.to && a > t.from && (this.fragments = x1(this.fragments, r, a), this.skipped.splice(n--, 1));
      }
      return this.skipped.length >= e ? false : (this.reset(), true);
    }
    reset() {
      this.parse && (this.takeTree(), this.parse = null);
    }
    skipUntilInView(t, e) {
      this.skipped.push({
        from: t,
        to: e
      });
    }
    static getSkippingParser(t) {
      return new class extends aT {
        createParse(e, n, r) {
          let a = r[0].from, c = r[r.length - 1].to;
          return {
            parsedPos: a,
            advance() {
              let h = Ir;
              if (h) {
                for (let g of r) h.tempSkipped.push(g);
                t && (h.scheduleOn = h.scheduleOn ? Promise.all([
                  h.scheduleOn,
                  t
                ]) : t);
              }
              return this.parsedPos = c, new Ee(_i.none, [], [], c - a);
            },
            stoppedAt: null,
            stopAt() {
            }
          };
        }
      }();
    }
    isDone(t) {
      t = Math.min(t, this.state.doc.length);
      let e = this.fragments;
      return this.treeLen >= t && e.length && e[0].from == 0 && e[0].to >= t;
    }
    static get() {
      return Ir;
    }
  }
  function x1(l, t, e) {
    return Ll.applyChanges(l, [
      {
        fromA: t,
        toA: e,
        fromB: t,
        toB: e
      }
    ]);
  }
  class Ws {
    constructor(t) {
      this.context = t, this.tree = t.tree;
    }
    apply(t) {
      if (!t.docChanged && this.tree == this.context.tree) return this;
      let e = this.context.changes(t.changes, t.state), n = this.context.treeLen == t.startState.doc.length ? void 0 : Math.max(t.changes.mapPos(this.context.treeLen), e.viewport.to);
      return e.work(20, n) || e.takeTree(), new Ws(e);
    }
    static init(t) {
      let e = Math.min(3e3, t.doc.length), n = Ic.create(t.facet(cl).parser, t, {
        from: 0,
        to: e
      });
      return n.work(20, e) || n.takeTree(), new Ws(n);
    }
  }
  Qi.state = ke.define({
    create: Ws.init,
    update(l, t) {
      for (let e of t.effects) if (e.is(Qi.setState)) return e.value;
      return t.startState.facet(cl) != t.state.facet(cl) ? Ws.init(t.state) : l.apply(t);
    }
  });
  let qS = (l) => {
    let t = setTimeout(() => l(), 500);
    return () => clearTimeout(t);
  };
  typeof requestIdleCallback < "u" && (qS = (l) => {
    let t = -1, e = setTimeout(() => {
      t = requestIdleCallback(l, {
        timeout: 400
      });
    }, 100);
    return () => t < 0 ? clearTimeout(e) : cancelIdleCallback(t);
  });
  const dd = typeof navigator < "u" && (!((hd = navigator.scheduling) === null || hd === void 0) && hd.isInputPending) ? () => navigator.scheduling.isInputPending() : null, ST = ee.fromClass(class {
    constructor(t) {
      this.view = t, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
    }
    update(t) {
      let e = this.view.state.field(Qi.state).context;
      (e.updateViewport(t.view.viewport) || this.view.viewport.to > e.treeLen) && this.scheduleWork(), (t.docChanged || t.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(e);
    }
    scheduleWork() {
      if (this.working) return;
      let { state: t } = this.view, e = t.field(Qi.state);
      (e.tree != e.context.tree || !e.context.isDone(t.doc.length)) && (this.working = qS(this.work));
    }
    work(t) {
      this.working = null;
      let e = Date.now();
      if (this.chunkEnd < e && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = e + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
      let { state: n, viewport: { to: r } } = this.view, a = n.field(Qi.state);
      if (a.tree == a.context.tree && a.context.isDone(r + 1e5)) return;
      let c = Date.now() + Math.min(this.chunkBudget, 100, t && !dd ? Math.max(25, t.timeRemaining() - 5) : 1e9), f = a.context.treeLen < r && n.doc.length > r + 1e3, h = a.context.work(() => dd && dd() || Date.now() > c, r + (f ? 0 : 1e5));
      this.chunkBudget -= Date.now() - e, (h || this.chunkBudget <= 0) && (a.context.takeTree(), this.view.dispatch({
        effects: Qi.setState.of(new Ws(a.context))
      })), this.chunkBudget > 0 && !(h && !f) && this.scheduleWork(), this.checkAsyncSchedule(a.context);
    }
    checkAsyncSchedule(t) {
      t.scheduleOn && (this.workScheduled++, t.scheduleOn.then(() => this.scheduleWork()).catch((e) => Je(this.view.state, e)).then(() => this.workScheduled--), t.scheduleOn = null);
    }
    destroy() {
      this.working && this.working();
    }
    isWorking() {
      return !!(this.working || this.workScheduled > 0);
    }
  }, {
    eventHandlers: {
      focus() {
        this.scheduleWork();
      }
    }
  }), cl = et.define({
    combine(l) {
      return l.length ? l[0] : null;
    },
    enables: (l) => [
      Qi.state,
      ST,
      P.contentAttributes.compute([
        l
      ], (t) => {
        let e = t.facet(l);
        return e && e.name ? {
          "data-language": e.name
        } : {};
      })
    ]
  }), xT = et.define(), pu = et.define({
    combine: (l) => {
      if (!l.length) return "  ";
      let t = l[0];
      if (!t || /\S/.test(t) || Array.from(t).some((e) => e != t[0])) throw new Error("Invalid indent unit: " + JSON.stringify(l[0]));
      return t;
    }
  });
  function $c(l) {
    let t = l.facet(pu);
    return t.charCodeAt(0) == 9 ? l.tabSize * t.length : t.length;
  }
  function Aa(l, t) {
    let e = "", n = l.tabSize, r = l.facet(pu)[0];
    if (r == "	") {
      for (; t >= n; ) e += "	", t -= n;
      r = " ";
    }
    for (let a = 0; a < t; a++) e += r;
    return e;
  }
  function Ym(l, t) {
    l instanceof Ot && (l = new yu(l));
    for (let n of l.state.facet(xT)) {
      let r = n(l, t);
      if (r !== void 0) return r;
    }
    let e = Be(l.state);
    return e.length >= t ? AT(l, e, t) : null;
  }
  class yu {
    constructor(t, e = {}) {
      this.state = t, this.options = e, this.unit = $c(t);
    }
    lineAt(t, e = 1) {
      let n = this.state.doc.lineAt(t), { simulateBreak: r, simulateDoubleBreak: a } = this.options;
      return r != null && r >= n.from && r <= n.to ? a && r == t ? {
        text: "",
        from: t
      } : (e < 0 ? r < t : r <= t) ? {
        text: n.text.slice(r - n.from),
        from: r
      } : {
        text: n.text.slice(0, r - n.from),
        from: n.from
      } : n;
    }
    textAfterPos(t, e = 1) {
      if (this.options.simulateDoubleBreak && t == this.options.simulateBreak) return "";
      let { text: n, from: r } = this.lineAt(t, e);
      return n.slice(t - r, Math.min(n.length, t + 100 - r));
    }
    column(t, e = 1) {
      let { text: n, from: r } = this.lineAt(t, e), a = this.countColumn(n, t - r), c = this.options.overrideIndentation ? this.options.overrideIndentation(r) : -1;
      return c > -1 && (a += c - this.countColumn(n, n.search(/\S|$/))), a;
    }
    countColumn(t, e = t.length) {
      return Ps(t, this.state.tabSize, e);
    }
    lineIndent(t, e = 1) {
      let { text: n, from: r } = this.lineAt(t, e), a = this.options.overrideIndentation;
      if (a) {
        let c = a(r);
        if (c > -1) return c;
      }
      return this.countColumn(n, n.search(/\S|$/));
    }
    get simulatedBreak() {
      return this.options.simulateBreak || null;
    }
  }
  const wT = new Dt();
  function AT(l, t, e) {
    let n = t.resolveStack(e), r = t.resolveInner(e, -1).resolve(e, 0).enterUnfinishedNodesBefore(e);
    if (r != n.node) {
      let a = [];
      for (let c = r; c && !(c.from < n.node.from || c.to > n.node.to || c.from == n.node.from && c.type == n.node.type); c = c.parent) a.push(c);
      for (let c = a.length - 1; c >= 0; c--) n = {
        node: a[c],
        next: n
      };
    }
    return jS(n, l, e);
  }
  function jS(l, t, e) {
    for (let n = l; n; n = n.next) {
      let r = MT(n.node);
      if (r) return r(Gm.create(t, e, n));
    }
    return 0;
  }
  function CT(l) {
    return l.pos == l.options.simulateBreak && l.options.simulateDoubleBreak;
  }
  function MT(l) {
    let t = l.type.prop(wT);
    if (t) return t;
    let e = l.firstChild, n;
    if (e && (n = e.type.prop(Dt.closedBy))) {
      let r = l.lastChild, a = r && n.indexOf(r.name) > -1;
      return (c) => OT(c, true, 1, void 0, a && !CT(c) ? r.from : void 0);
    }
    return l.parent == null ? _T : null;
  }
  function _T() {
    return 0;
  }
  class Gm extends yu {
    constructor(t, e, n) {
      super(t.state, t.options), this.base = t, this.pos = e, this.context = n;
    }
    get node() {
      return this.context.node;
    }
    static create(t, e, n) {
      return new Gm(t, e, n);
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
        if (kT(n, t)) break;
        e = this.state.doc.lineAt(n.from);
      }
      return this.lineIndent(e.from);
    }
    continue() {
      return jS(this.context.next, this.base, this.pos);
    }
  }
  function kT(l, t) {
    for (let e = t; e; e = e.parent) if (l == e) return true;
    return false;
  }
  function TT(l) {
    let t = l.node, e = t.childAfter(t.from), n = t.lastChild;
    if (!e) return null;
    let r = l.options.simulateBreak, a = l.state.doc.lineAt(e.from), c = r == null || r <= a.from ? a.to : Math.min(a.to, r);
    for (let f = e.to; ; ) {
      let h = t.childAfter(f);
      if (!h || h == n) return null;
      if (!h.type.isSkipped) {
        if (h.from >= c) return null;
        let g = /^ */.exec(a.text.slice(e.to - a.from))[0].length;
        return {
          from: e.from,
          to: e.to + g
        };
      }
      f = h.to;
    }
  }
  function OT(l, t, e, n, r) {
    let a = l.textAfter, c = a.match(/^\s*/)[0].length, f = n && a.slice(c, c + n.length) == n || r == l.pos + c, h = TT(l);
    return h ? f ? l.column(h.from) : l.column(h.to) : l.baseIndent + (f ? 0 : l.unit * e);
  }
  const DT = 200;
  function ET() {
    return Ot.transactionFilter.of((l) => {
      if (!l.docChanged || !l.isUserEvent("input.type") && !l.isUserEvent("input.complete")) return l;
      let t = l.startState.languageDataAt("indentOnInput", l.startState.selection.main.head);
      if (!t.length) return l;
      let e = l.newDoc, { head: n } = l.newSelection.main, r = e.lineAt(n);
      if (n > r.from + DT) return l;
      let a = e.sliceString(r.from, n);
      if (!t.some((g) => g.test(a))) return l;
      let { state: c } = l, f = -1, h = [];
      for (let { head: g } of c.selection.ranges) {
        let p = c.doc.lineAt(g);
        if (p.from == f) continue;
        f = p.from;
        let y = Ym(c, p.from);
        if (y == null) continue;
        let v = /^\s*/.exec(p.text)[0], S = Aa(c, y);
        v != S && h.push({
          from: p.from,
          to: p.from + v.length,
          insert: S
        });
      }
      return h.length ? [
        l,
        {
          changes: h,
          sequential: true
        }
      ] : l;
    });
  }
  const BT = et.define(), RT = new Dt();
  function zT(l, t, e) {
    let n = Be(l);
    if (n.length < e) return null;
    let r = n.resolveStack(e, 1), a = null;
    for (let c = r; c; c = c.next) {
      let f = c.node;
      if (f.to <= e || f.from > e) continue;
      if (a && f.from < t) break;
      let h = f.type.prop(RT);
      if (h && (f.to < n.length - 50 || n.length == l.doc.length || !NT(f))) {
        let g = h(f, l);
        g && g.from <= e && g.from >= t && g.to > e && (a = g);
      }
    }
    return a;
  }
  function NT(l) {
    let t = l.lastChild;
    return t && t.to == l.to && t.type.isError;
  }
  function tu(l, t, e) {
    for (let n of l.facet(BT)) {
      let r = n(l, t, e);
      if (r) return r;
    }
    return zT(l, t, e);
  }
  function YS(l, t) {
    let e = t.mapPos(l.from, 1), n = t.mapPos(l.to, -1);
    return e >= n ? void 0 : {
      from: e,
      to: n
    };
  }
  const bu = St.define({
    map: YS
  }), za = St.define({
    map: YS
  });
  function GS(l) {
    let t = [];
    for (let { head: e } of l.state.selection.ranges) t.some((n) => n.from <= e && n.to >= e) || t.push(l.lineBlockAt(e));
    return t;
  }
  const Yl = ke.define({
    create() {
      return ct.none;
    },
    update(l, t) {
      t.isUserEvent("delete") && t.changes.iterChangedRanges((e, n) => l = w1(l, e, n)), l = l.map(t.changes);
      for (let e of t.effects) if (e.is(bu) && !LT(l, e.value.from, e.value.to)) {
        let { preparePlaceholder: n } = t.state.facet(QS), r = n ? ct.replace({
          widget: new GT(n(t.state, e.value))
        }) : A1;
        l = l.update({
          add: [
            r.range(e.value.from, e.value.to)
          ]
        });
      } else e.is(za) && (l = l.update({
        filter: (n, r) => e.value.from != n || e.value.to != r,
        filterFrom: e.value.from,
        filterTo: e.value.to
      }));
      return t.selection && (l = w1(l, t.selection.main.head)), l;
    },
    provide: (l) => P.decorations.from(l),
    toJSON(l, t) {
      let e = [];
      return l.between(0, t.doc.length, (n, r) => {
        e.push(n, r);
      }), e;
    },
    fromJSON(l) {
      if (!Array.isArray(l) || l.length % 2) throw new RangeError("Invalid JSON for fold state");
      let t = [];
      for (let e = 0; e < l.length; ) {
        let n = l[e++], r = l[e++];
        if (typeof n != "number" || typeof r != "number") throw new RangeError("Invalid JSON for fold state");
        t.push(A1.range(n, r));
      }
      return ct.set(t, true);
    }
  });
  function w1(l, t, e = t) {
    let n = false;
    return l.between(t, e, (r, a) => {
      r < e && a > t && (n = true);
    }), n ? l.update({
      filterFrom: t,
      filterTo: e,
      filter: (r, a) => r >= e || a <= t
    }) : l;
  }
  function eu(l, t, e) {
    var n;
    let r = null;
    return (n = l.field(Yl, false)) === null || n === void 0 || n.between(t, e, (a, c) => {
      (!r || r.from > a) && (r = {
        from: a,
        to: c
      });
    }), r;
  }
  function LT(l, t, e) {
    let n = false;
    return l.between(t, t, (r, a) => {
      r == t && a == e && (n = true);
    }), n;
  }
  function XS(l, t) {
    return l.field(Yl, false) ? t : t.concat(St.appendConfig.of(ZS()));
  }
  const HT = (l) => {
    for (let t of GS(l)) {
      let e = tu(l.state, t.from, t.to);
      if (e) return l.dispatch({
        effects: XS(l.state, [
          bu.of(e),
          KS(l, e)
        ])
      }), true;
    }
    return false;
  }, UT = (l) => {
    if (!l.state.field(Yl, false)) return false;
    let t = [];
    for (let e of GS(l)) {
      let n = eu(l.state, e.from, e.to);
      n && t.push(za.of(n), KS(l, n, false));
    }
    return t.length && l.dispatch({
      effects: t
    }), t.length > 0;
  };
  function KS(l, t, e = true) {
    let n = l.state.doc.lineAt(t.from).number, r = l.state.doc.lineAt(t.to).number;
    return P.announce.of(`${l.state.phrase(e ? "Folded lines" : "Unfolded lines")} ${n} ${l.state.phrase("to")} ${r}.`);
  }
  const VT = (l) => {
    let { state: t } = l, e = [];
    for (let n = 0; n < t.doc.length; ) {
      let r = l.lineBlockAt(n), a = tu(t, r.from, r.to);
      a && e.push(bu.of(a)), n = (a ? l.lineBlockAt(a.to) : r).to + 1;
    }
    return e.length && l.dispatch({
      effects: XS(l.state, e)
    }), !!e.length;
  }, qT = (l) => {
    let t = l.state.field(Yl, false);
    if (!t || !t.size) return false;
    let e = [];
    return t.between(0, l.state.doc.length, (n, r) => {
      e.push(za.of({
        from: n,
        to: r
      }));
    }), l.dispatch({
      effects: e
    }), true;
  }, jT = [
    {
      key: "Ctrl-Shift-[",
      mac: "Cmd-Alt-[",
      run: HT
    },
    {
      key: "Ctrl-Shift-]",
      mac: "Cmd-Alt-]",
      run: UT
    },
    {
      key: "Ctrl-Alt-[",
      run: VT
    },
    {
      key: "Ctrl-Alt-]",
      run: qT
    }
  ], YT = {
    placeholderDOM: null,
    preparePlaceholder: null,
    placeholderText: "\u2026"
  }, QS = et.define({
    combine(l) {
      return $i(l, YT);
    }
  });
  function ZS(l) {
    return [
      Yl,
      QT
    ];
  }
  function WS(l, t) {
    let { state: e } = l, n = e.facet(QS), r = (c) => {
      let f = l.lineBlockAt(l.posAtDOM(c.target)), h = eu(l.state, f.from, f.to);
      h && l.dispatch({
        effects: za.of(h)
      }), c.preventDefault();
    };
    if (n.placeholderDOM) return n.placeholderDOM(l, r, t);
    let a = document.createElement("span");
    return a.textContent = n.placeholderText, a.setAttribute("aria-label", e.phrase("folded code")), a.title = e.phrase("unfold"), a.className = "cm-foldPlaceholder", a.onclick = r, a;
  }
  const A1 = ct.replace({
    widget: new class extends Mn {
      toDOM(l) {
        return WS(l, null);
      }
    }()
  });
  class GT extends Mn {
    constructor(t) {
      super(), this.value = t;
    }
    eq(t) {
      return this.value == t.value;
    }
    toDOM(t) {
      return WS(t, this.value);
    }
  }
  const XT = {
    openText: "\u2304",
    closedText: "\u203A",
    markerDOM: null,
    domEventHandlers: {},
    foldingChanged: () => false
  };
  class md extends Cn {
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
  function KT(l = {}) {
    let t = {
      ...XT,
      ...l
    }, e = new md(t, true), n = new md(t, false), r = ee.fromClass(class {
      constructor(c) {
        this.from = c.viewport.from, this.markers = this.buildMarkers(c);
      }
      update(c) {
        (c.docChanged || c.viewportChanged || c.startState.facet(cl) != c.state.facet(cl) || c.startState.field(Yl, false) != c.state.field(Yl, false) || Be(c.startState) != Be(c.state) || t.foldingChanged(c)) && (this.markers = this.buildMarkers(c.view));
      }
      buildMarkers(c) {
        let f = new wn();
        for (let h of c.viewportLineBlocks) {
          let g = eu(c.state, h.from, h.to) ? n : tu(c.state, h.from, h.to) ? e : null;
          g && f.add(h.from, h.from, g);
        }
        return f.finish();
      }
    }), { domEventHandlers: a } = t;
    return [
      r,
      Gk({
        class: "cm-foldGutter",
        markers(c) {
          var f;
          return ((f = c.plugin(r)) === null || f === void 0 ? void 0 : f.markers) || Bt.empty;
        },
        initialSpacer() {
          return new md(t, false);
        },
        domEventHandlers: {
          ...a,
          click: (c, f, h) => {
            if (a.click && a.click(c, f, h)) return true;
            let g = eu(c.state, f.from, f.to);
            if (g) return c.dispatch({
              effects: za.of(g)
            }), true;
            let p = tu(c.state, f.from, f.to);
            return p ? (c.dispatch({
              effects: bu.of(p)
            }), true) : false;
          }
        }
      }),
      ZS()
    ];
  }
  const QT = P.baseTheme({
    ".cm-foldPlaceholder": {
      backgroundColor: "#eee",
      border: "1px solid #ddd",
      color: "#888",
      borderRadius: ".2em",
      margin: "0 1px",
      padding: "0 1px",
      cursor: "pointer"
    },
    ".cm-foldGutter span": {
      padding: "0 1px",
      cursor: "pointer"
    }
  });
  class Na {
    constructor(t, e) {
      this.specs = t;
      let n;
      function r(f) {
        let h = sl.newName();
        return (n || (n = /* @__PURE__ */ Object.create(null)))["." + h] = f, h;
      }
      const a = typeof e.all == "string" ? e.all : e.all ? r(e.all) : void 0, c = e.scope;
      this.scope = c instanceof Qi ? (f) => f.prop(la) == c.data : c ? (f) => f == c : void 0, this.style = VS(t.map((f) => ({
        tag: f.tag,
        class: f.class || r(Object.assign({}, f, {
          tag: null
        }))
      })), {
        all: a
      }).style, this.module = n ? new sl(n) : null, this.themeType = e.themeType;
    }
    static define(t, e) {
      return new Na(t, e || {});
    }
  }
  const dm = et.define(), JS = et.define({
    combine(l) {
      return l.length ? [
        l[0]
      ] : null;
    }
  });
  function gd(l) {
    let t = l.facet(dm);
    return t.length ? t : l.facet(JS);
  }
  function FS(l, t) {
    let e = [
      WT
    ], n;
    return l instanceof Na && (l.module && e.push(P.styleModule.of(l.module)), n = l.themeType), (t == null ? void 0 : t.fallback) ? e.push(JS.of(l)) : n ? e.push(dm.computeN([
      P.darkTheme
    ], (r) => r.facet(P.darkTheme) == (n == "dark") ? [
      l
    ] : [])) : e.push(dm.of(l)), e;
  }
  class ZT {
    constructor(t) {
      this.markCache = /* @__PURE__ */ Object.create(null), this.tree = Be(t.state), this.decorations = this.buildDeco(t, gd(t.state)), this.decoratedTo = t.viewport.to;
    }
    update(t) {
      let e = Be(t.state), n = gd(t.state), r = n != gd(t.startState), { viewport: a } = t.view, c = t.changes.mapPos(this.decoratedTo, 1);
      e.length < a.to && !r && e.type == this.tree.type && c >= a.to ? (this.decorations = this.decorations.map(t.changes), this.decoratedTo = c) : (e != this.tree || t.viewportChanged || r) && (this.tree = e, this.decorations = this.buildDeco(t.view, n), this.decoratedTo = a.to);
    }
    buildDeco(t, e) {
      if (!e || !this.tree.length) return ct.none;
      let n = new wn();
      for (let { from: r, to: a } of t.visibleRanges) gT(this.tree, e, (c, f, h) => {
        n.add(c, f, this.markCache[h] || (this.markCache[h] = ct.mark({
          class: h
        })));
      }, r, a);
      return n.finish();
    }
  }
  const WT = Gl.high(ee.fromClass(ZT, {
    decorations: (l) => l.decorations
  })), JT = Na.define([
    {
      tag: q.meta,
      color: "#404740"
    },
    {
      tag: q.link,
      textDecoration: "underline"
    },
    {
      tag: q.heading,
      textDecoration: "underline",
      fontWeight: "bold"
    },
    {
      tag: q.emphasis,
      fontStyle: "italic"
    },
    {
      tag: q.strong,
      fontWeight: "bold"
    },
    {
      tag: q.strikethrough,
      textDecoration: "line-through"
    },
    {
      tag: q.keyword,
      color: "#708"
    },
    {
      tag: [
        q.atom,
        q.bool,
        q.url,
        q.contentSeparator,
        q.labelName
      ],
      color: "#219"
    },
    {
      tag: [
        q.literal,
        q.inserted
      ],
      color: "#164"
    },
    {
      tag: [
        q.string,
        q.deleted
      ],
      color: "#a11"
    },
    {
      tag: [
        q.regexp,
        q.escape,
        q.special(q.string)
      ],
      color: "#e40"
    },
    {
      tag: q.definition(q.variableName),
      color: "#00f"
    },
    {
      tag: q.local(q.variableName),
      color: "#30a"
    },
    {
      tag: [
        q.typeName,
        q.namespace
      ],
      color: "#085"
    },
    {
      tag: q.className,
      color: "#167"
    },
    {
      tag: [
        q.special(q.variableName),
        q.macroName
      ],
      color: "#256"
    },
    {
      tag: q.definition(q.propertyName),
      color: "#00c"
    },
    {
      tag: q.comment,
      color: "#940"
    },
    {
      tag: q.invalid,
      color: "#f00"
    }
  ]), FT = P.baseTheme({
    "&.cm-focused .cm-matchingBracket": {
      backgroundColor: "#328c8252"
    },
    "&.cm-focused .cm-nonmatchingBracket": {
      backgroundColor: "#bb555544"
    }
  }), PS = 1e4, IS = "()[]{}", $S = et.define({
    combine(l) {
      return $i(l, {
        afterCursor: true,
        brackets: IS,
        maxScanDistance: PS,
        renderMatch: $T
      });
    }
  }), PT = ct.mark({
    class: "cm-matchingBracket"
  }), IT = ct.mark({
    class: "cm-nonmatchingBracket"
  });
  function $T(l) {
    let t = [], e = l.matched ? PT : IT;
    return t.push(e.range(l.start.from, l.start.to)), l.end && t.push(e.range(l.end.from, l.end.to)), t;
  }
  const t3 = ke.define({
    create() {
      return ct.none;
    },
    update(l, t) {
      if (!t.docChanged && !t.selection) return l;
      let e = [], n = t.state.facet($S);
      for (let r of t.state.selection.ranges) {
        if (!r.empty) continue;
        let a = Zi(t.state, r.head, -1, n) || r.head > 0 && Zi(t.state, r.head - 1, 1, n) || n.afterCursor && (Zi(t.state, r.head, 1, n) || r.head < t.state.doc.length && Zi(t.state, r.head + 1, -1, n));
        a && (e = e.concat(n.renderMatch(a, t.state)));
      }
      return ct.set(e, true);
    },
    provide: (l) => P.decorations.from(l)
  }), e3 = [
    t3,
    FT
  ];
  function i3(l = {}) {
    return [
      $S.of(l),
      e3
    ];
  }
  const n3 = new Dt();
  function mm(l, t, e) {
    let n = l.prop(t < 0 ? Dt.openedBy : Dt.closedBy);
    if (n) return n;
    if (l.name.length == 1) {
      let r = e.indexOf(l.name);
      if (r > -1 && r % 2 == (t < 0 ? 1 : 0)) return [
        e[r + t]
      ];
    }
    return null;
  }
  function gm(l) {
    let t = l.type.prop(n3);
    return t ? t(l.node) : l;
  }
  function Zi(l, t, e, n = {}) {
    let r = n.maxScanDistance || PS, a = n.brackets || IS, c = Be(l), f = c.resolveInner(t, e);
    for (let h = f; h; h = h.parent) {
      let g = mm(h.type, e, a);
      if (g && h.from < h.to) {
        let p = gm(h);
        if (p && (e > 0 ? t >= p.from && t < p.to : t > p.from && t <= p.to)) return l3(l, t, e, h, p, g, a);
      }
    }
    return s3(l, t, e, c, f.type, r, a);
  }
  function l3(l, t, e, n, r, a, c) {
    let f = n.parent, h = {
      from: r.from,
      to: r.to
    }, g = 0, p = f == null ? void 0 : f.cursor();
    if (p && (e < 0 ? p.childBefore(n.from) : p.childAfter(n.to))) do
      if (e < 0 ? p.to <= n.from : p.from >= n.to) {
        if (g == 0 && a.indexOf(p.type.name) > -1 && p.from < p.to) {
          let y = gm(p);
          return {
            start: h,
            end: y ? {
              from: y.from,
              to: y.to
            } : void 0,
            matched: true
          };
        } else if (mm(p.type, e, c)) g++;
        else if (mm(p.type, -e, c)) {
          if (g == 0) {
            let y = gm(p);
            return {
              start: h,
              end: y && y.from < y.to ? {
                from: y.from,
                to: y.to
              } : void 0,
              matched: false
            };
          }
          g--;
        }
      }
    while (e < 0 ? p.prevSibling() : p.nextSibling());
    return {
      start: h,
      matched: false
    };
  }
  function s3(l, t, e, n, r, a, c) {
    let f = e < 0 ? l.sliceDoc(t - 1, t) : l.sliceDoc(t, t + 1), h = c.indexOf(f);
    if (h < 0 || h % 2 == 0 != e > 0) return null;
    let g = {
      from: e < 0 ? t - 1 : t,
      to: e > 0 ? t + 1 : t
    }, p = l.doc.iterRange(t, e > 0 ? l.doc.length : 0), y = 0;
    for (let v = 0; !p.next().done && v <= a; ) {
      let S = p.value;
      e < 0 && (v += S.length);
      let w = t + v * e;
      for (let A = e > 0 ? 0 : S.length - 1, _ = e > 0 ? S.length : -1; A != _; A += e) {
        let T = c.indexOf(S[A]);
        if (!(T < 0 || n.resolveInner(w + A, 1).type != r)) if (T % 2 == 0 == e > 0) y++;
        else {
          if (y == 1) return {
            start: g,
            end: {
              from: w + A,
              to: w + A + 1
            },
            matched: T >> 1 == h >> 1
          };
          y--;
        }
      }
      e > 0 && (v += S.length);
    }
    return p.done ? {
      start: g,
      matched: false
    } : null;
  }
  const r3 = /* @__PURE__ */ Object.create(null), C1 = [
    _i.none
  ], M1 = [], _1 = /* @__PURE__ */ Object.create(null), a3 = /* @__PURE__ */ Object.create(null);
  for (let [l, t] of [
    [
      "variable",
      "variableName"
    ],
    [
      "variable-2",
      "variableName.special"
    ],
    [
      "string-2",
      "string.special"
    ],
    [
      "def",
      "variableName.definition"
    ],
    [
      "tag",
      "tagName"
    ],
    [
      "attribute",
      "attributeName"
    ],
    [
      "type",
      "typeName"
    ],
    [
      "builtin",
      "variableName.standard"
    ],
    [
      "qualifier",
      "modifier"
    ],
    [
      "error",
      "invalid"
    ],
    [
      "header",
      "heading"
    ],
    [
      "property",
      "propertyName"
    ]
  ]) a3[l] = o3(r3, t);
  function pd(l, t) {
    M1.indexOf(l) > -1 || (M1.push(l), console.warn(t));
  }
  function o3(l, t) {
    let e = [];
    for (let f of t.split(" ")) {
      let h = [];
      for (let g of f.split(".")) {
        let p = l[g] || q[g];
        p ? typeof p == "function" ? h.length ? h = h.map(p) : pd(g, `Modifier ${g} used at start of tag`) : h.length ? pd(g, `Tag ${g} used as modifier`) : h = Array.isArray(p) ? p : [
          p
        ] : pd(g, `Unknown highlighting tag ${g}`);
      }
      for (let g of h) e.push(g);
    }
    if (!e.length) return 0;
    let n = t.replace(/ /g, "_"), r = n + " " + e.map((f) => f.id), a = _1[r];
    if (a) return a.id;
    let c = _1[r] = _i.define({
      id: C1.length,
      name: n,
      props: [
        dT({
          [n]: e
        })
      ]
    });
    return C1.push(c), c.id;
  }
  Jt.RTL, Jt.LTR;
  const c3 = (l) => {
    let { state: t } = l, e = t.doc.lineAt(t.selection.main.from), n = Km(l.state, e.from);
    return n.line ? u3(l) : n.block ? h3(l) : false;
  };
  function Xm(l, t) {
    return ({ state: e, dispatch: n }) => {
      if (e.readOnly) return false;
      let r = l(t, e);
      return r ? (n(e.update(r)), true) : false;
    };
  }
  const u3 = Xm(g3, 0), f3 = Xm(tx, 0), h3 = Xm((l, t) => tx(l, t, m3(t)), 0);
  function Km(l, t) {
    let e = l.languageDataAt("commentTokens", t, 1);
    return e.length ? e[0] : {};
  }
  const $r = 50;
  function d3(l, { open: t, close: e }, n, r) {
    let a = l.sliceDoc(n - $r, n), c = l.sliceDoc(r, r + $r), f = /\s*$/.exec(a)[0].length, h = /^\s*/.exec(c)[0].length, g = a.length - f;
    if (a.slice(g - t.length, g) == t && c.slice(h, h + e.length) == e) return {
      open: {
        pos: n - f,
        margin: f && 1
      },
      close: {
        pos: r + h,
        margin: h && 1
      }
    };
    let p, y;
    r - n <= 2 * $r ? p = y = l.sliceDoc(n, r) : (p = l.sliceDoc(n, n + $r), y = l.sliceDoc(r - $r, r));
    let v = /^\s*/.exec(p)[0].length, S = /\s*$/.exec(y)[0].length, w = y.length - S - e.length;
    return p.slice(v, v + t.length) == t && y.slice(w, w + e.length) == e ? {
      open: {
        pos: n + v + t.length,
        margin: /\s/.test(p.charAt(v + t.length)) ? 1 : 0
      },
      close: {
        pos: r - S - e.length,
        margin: /\s/.test(y.charAt(w - 1)) ? 1 : 0
      }
    } : null;
  }
  function m3(l) {
    let t = [];
    for (let e of l.selection.ranges) {
      let n = l.doc.lineAt(e.from), r = e.to <= n.to ? n : l.doc.lineAt(e.to);
      r.from > n.from && r.from == e.to && (r = e.to == n.to + 1 ? n : l.doc.lineAt(e.to - 1));
      let a = t.length - 1;
      a >= 0 && t[a].to > n.from ? t[a].to = r.to : t.push({
        from: n.from + /^\s*/.exec(n.text)[0].length,
        to: r.to
      });
    }
    return t;
  }
  function tx(l, t, e = t.selection.ranges) {
    let n = e.map((a) => Km(t, a.from).block);
    if (!n.every((a) => a)) return null;
    let r = e.map((a, c) => d3(t, n[c], a.from, a.to));
    if (l != 2 && !r.every((a) => a)) return {
      changes: t.changes(e.map((a, c) => r[c] ? [] : [
        {
          from: a.from,
          insert: n[c].open + " "
        },
        {
          from: a.to,
          insert: " " + n[c].close
        }
      ]))
    };
    if (l != 1 && r.some((a) => a)) {
      let a = [];
      for (let c = 0, f; c < r.length; c++) if (f = r[c]) {
        let h = n[c], { open: g, close: p } = f;
        a.push({
          from: g.pos - h.open.length,
          to: g.pos + g.margin
        }, {
          from: p.pos - p.margin,
          to: p.pos + h.close.length
        });
      }
      return {
        changes: a
      };
    }
    return null;
  }
  function g3(l, t, e = t.selection.ranges) {
    let n = [], r = -1;
    for (let { from: a, to: c } of e) {
      let f = n.length, h = 1e9, g = Km(t, a).line;
      if (g) {
        for (let p = a; p <= c; ) {
          let y = t.doc.lineAt(p);
          if (y.from > r && (a == c || c > y.from)) {
            r = y.from;
            let v = /^\s*/.exec(y.text)[0].length, S = v == y.length, w = y.text.slice(v, v + g.length) == g ? v : -1;
            v < y.text.length && v < h && (h = v), n.push({
              line: y,
              comment: w,
              token: g,
              indent: v,
              empty: S,
              single: false
            });
          }
          p = y.to + 1;
        }
        if (h < 1e9) for (let p = f; p < n.length; p++) n[p].indent < n[p].line.text.length && (n[p].indent = h);
        n.length == f + 1 && (n[f].single = true);
      }
    }
    if (l != 2 && n.some((a) => a.comment < 0 && (!a.empty || a.single))) {
      let a = [];
      for (let { line: f, token: h, indent: g, empty: p, single: y } of n) (y || !p) && a.push({
        from: f.from + g,
        insert: h + " "
      });
      let c = t.changes(a);
      return {
        changes: c,
        selection: t.selection.map(c, 1)
      };
    } else if (l != 1 && n.some((a) => a.comment >= 0)) {
      let a = [];
      for (let { line: c, comment: f, token: h } of n) if (f >= 0) {
        let g = c.from + f, p = g + h.length;
        c.text[p - c.from] == " " && p++, a.push({
          from: g,
          to: p
        });
      }
      return {
        changes: a
      };
    }
    return null;
  }
  const pm = Ii.define(), p3 = Ii.define(), y3 = et.define(), ex = et.define({
    combine(l) {
      return $i(l, {
        minDepth: 100,
        newGroupDelay: 500,
        joinToEvent: (t, e) => e
      }, {
        minDepth: Math.max,
        newGroupDelay: Math.min,
        joinToEvent: (t, e) => (n, r) => t(n, r) || e(n, r)
      });
    }
  }), ix = ke.define({
    create() {
      return Wi.empty;
    },
    update(l, t) {
      let e = t.state.facet(ex), n = t.annotation(pm);
      if (n) {
        let h = Fe.fromTransaction(t, n.selection), g = n.side, p = g == 0 ? l.undone : l.done;
        return h ? p = iu(p, p.length, e.minDepth, h) : p = sx(p, t.startState.selection), new Wi(g == 0 ? n.rest : p, g == 0 ? p : n.rest);
      }
      let r = t.annotation(p3);
      if ((r == "full" || r == "before") && (l = l.isolate()), t.annotation(me.addToHistory) === false) return t.changes.empty ? l : l.addMapping(t.changes.desc);
      let a = Fe.fromTransaction(t), c = t.annotation(me.time), f = t.annotation(me.userEvent);
      return a ? l = l.addChanges(a, c, f, e, t) : t.selection && (l = l.addSelection(t.startState.selection, c, f, e.newGroupDelay)), (r == "full" || r == "after") && (l = l.isolate()), l;
    },
    toJSON(l) {
      return {
        done: l.done.map((t) => t.toJSON()),
        undone: l.undone.map((t) => t.toJSON())
      };
    },
    fromJSON(l) {
      return new Wi(l.done.map(Fe.fromJSON), l.undone.map(Fe.fromJSON));
    }
  });
  function b3(l = {}) {
    return [
      ix,
      ex.of(l),
      P.domEventHandlers({
        beforeinput(t, e) {
          let n = t.inputType == "historyUndo" ? nx : t.inputType == "historyRedo" ? ym : null;
          return n ? (t.preventDefault(), n(e)) : false;
        }
      })
    ];
  }
  function vu(l, t) {
    return function({ state: e, dispatch: n }) {
      if (!t && e.readOnly) return false;
      let r = e.field(ix, false);
      if (!r) return false;
      let a = r.pop(l, e, t);
      return a ? (n(a), true) : false;
    };
  }
  const nx = vu(0, false), ym = vu(1, false), v3 = vu(0, true), S3 = vu(1, true);
  class Fe {
    constructor(t, e, n, r, a) {
      this.changes = t, this.effects = e, this.mapped = n, this.startSelection = r, this.selectionsAfter = a;
    }
    setSelAfter(t) {
      return new Fe(this.changes, this.effects, this.mapped, this.startSelection, t);
    }
    toJSON() {
      var t, e, n;
      return {
        changes: (t = this.changes) === null || t === void 0 ? void 0 : t.toJSON(),
        mapped: (e = this.mapped) === null || e === void 0 ? void 0 : e.toJSON(),
        startSelection: (n = this.startSelection) === null || n === void 0 ? void 0 : n.toJSON(),
        selectionsAfter: this.selectionsAfter.map((r) => r.toJSON())
      };
    }
    static fromJSON(t) {
      return new Fe(t.changes && de.fromJSON(t.changes), [], t.mapped && Fi.fromJSON(t.mapped), t.startSelection && K.fromJSON(t.startSelection), t.selectionsAfter.map(K.fromJSON));
    }
    static fromTransaction(t, e) {
      let n = xi;
      for (let r of t.startState.facet(y3)) {
        let a = r(t);
        a.length && (n = n.concat(a));
      }
      return !n.length && t.changes.empty ? null : new Fe(t.changes.invert(t.startState.doc), n, void 0, e || t.startState.selection, xi);
    }
    static selection(t) {
      return new Fe(void 0, xi, void 0, void 0, t);
    }
  }
  function iu(l, t, e, n) {
    let r = t + 1 > e + 20 ? t - e - 1 : 0, a = l.slice(r, t);
    return a.push(n), a;
  }
  function x3(l, t) {
    let e = [], n = false;
    return l.iterChangedRanges((r, a) => e.push(r, a)), t.iterChangedRanges((r, a, c, f) => {
      for (let h = 0; h < e.length; ) {
        let g = e[h++], p = e[h++];
        f >= g && c <= p && (n = true);
      }
    }), n;
  }
  function w3(l, t) {
    return l.ranges.length == t.ranges.length && l.ranges.filter((e, n) => e.empty != t.ranges[n].empty).length === 0;
  }
  function lx(l, t) {
    return l.length ? t.length ? l.concat(t) : l : t;
  }
  const xi = [], A3 = 200;
  function sx(l, t) {
    if (l.length) {
      let e = l[l.length - 1], n = e.selectionsAfter.slice(Math.max(0, e.selectionsAfter.length - A3));
      return n.length && n[n.length - 1].eq(t) ? l : (n.push(t), iu(l, l.length - 1, 1e9, e.setSelAfter(n)));
    } else return [
      Fe.selection([
        t
      ])
    ];
  }
  function C3(l) {
    let t = l[l.length - 1], e = l.slice();
    return e[l.length - 1] = t.setSelAfter(t.selectionsAfter.slice(0, t.selectionsAfter.length - 1)), e;
  }
  function yd(l, t) {
    if (!l.length) return l;
    let e = l.length, n = xi;
    for (; e; ) {
      let r = M3(l[e - 1], t, n);
      if (r.changes && !r.changes.empty || r.effects.length) {
        let a = l.slice(0, e);
        return a[e - 1] = r, a;
      } else t = r.mapped, e--, n = r.selectionsAfter;
    }
    return n.length ? [
      Fe.selection(n)
    ] : xi;
  }
  function M3(l, t, e) {
    let n = lx(l.selectionsAfter.length ? l.selectionsAfter.map((f) => f.map(t)) : xi, e);
    if (!l.changes) return Fe.selection(n);
    let r = l.changes.map(t), a = t.mapDesc(l.changes, true), c = l.mapped ? l.mapped.composeDesc(a) : a;
    return new Fe(r, St.mapEffects(l.effects, t), c, l.startSelection.map(a), n);
  }
  const _3 = /^(input\.type|delete)($|\.)/;
  class Wi {
    constructor(t, e, n = 0, r = void 0) {
      this.done = t, this.undone = e, this.prevTime = n, this.prevUserEvent = r;
    }
    isolate() {
      return this.prevTime ? new Wi(this.done, this.undone) : this;
    }
    addChanges(t, e, n, r, a) {
      let c = this.done, f = c[c.length - 1];
      return f && f.changes && !f.changes.empty && t.changes && (!n || _3.test(n)) && (!f.selectionsAfter.length && e - this.prevTime < r.newGroupDelay && r.joinToEvent(a, x3(f.changes, t.changes)) || n == "input.type.compose") ? c = iu(c, c.length - 1, r.minDepth, new Fe(t.changes.compose(f.changes), lx(St.mapEffects(t.effects, f.changes), f.effects), f.mapped, f.startSelection, xi)) : c = iu(c, c.length, r.minDepth, t), new Wi(c, xi, e, n);
    }
    addSelection(t, e, n, r) {
      let a = this.done.length ? this.done[this.done.length - 1].selectionsAfter : xi;
      return a.length > 0 && e - this.prevTime < r && n == this.prevUserEvent && n && /^select($|\.)/.test(n) && w3(a[a.length - 1], t) ? this : new Wi(sx(this.done, t), this.undone, e, n);
    }
    addMapping(t) {
      return new Wi(yd(this.done, t), yd(this.undone, t), this.prevTime, this.prevUserEvent);
    }
    pop(t, e, n) {
      let r = t == 0 ? this.done : this.undone;
      if (r.length == 0) return null;
      let a = r[r.length - 1], c = a.selectionsAfter[0] || e.selection;
      if (n && a.selectionsAfter.length) return e.update({
        selection: a.selectionsAfter[a.selectionsAfter.length - 1],
        annotations: pm.of({
          side: t,
          rest: C3(r),
          selection: c
        }),
        userEvent: t == 0 ? "select.undo" : "select.redo",
        scrollIntoView: true
      });
      if (a.changes) {
        let f = r.length == 1 ? xi : r.slice(0, r.length - 1);
        return a.mapped && (f = yd(f, a.mapped)), e.update({
          changes: a.changes,
          selection: a.startSelection,
          effects: a.effects,
          annotations: pm.of({
            side: t,
            rest: f,
            selection: c
          }),
          filter: false,
          userEvent: t == 0 ? "undo" : "redo",
          scrollIntoView: true
        });
      } else return null;
    }
  }
  Wi.empty = new Wi(xi, xi);
  const k3 = [
    {
      key: "Mod-z",
      run: nx,
      preventDefault: true
    },
    {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: ym,
      preventDefault: true
    },
    {
      linux: "Ctrl-Shift-z",
      run: ym,
      preventDefault: true
    },
    {
      key: "Mod-u",
      run: v3,
      preventDefault: true
    },
    {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: S3,
      preventDefault: true
    }
  ];
  function Is(l, t) {
    return K.create(l.ranges.map(t), l.mainIndex);
  }
  function Ri(l, t) {
    return l.update({
      selection: t,
      scrollIntoView: true,
      userEvent: "select"
    });
  }
  function zi({ state: l, dispatch: t }, e) {
    let n = Is(l.selection, e);
    return n.eq(l.selection, true) ? false : (t(Ri(l, n)), true);
  }
  function Su(l, t) {
    return K.cursor(t ? l.to : l.from);
  }
  function rx(l, t) {
    return zi(l, (e) => e.empty ? l.moveByChar(e, t) : Su(e, t));
  }
  function Re(l) {
    return l.textDirectionAt(l.state.selection.main.head) == Jt.LTR;
  }
  const ax = (l) => rx(l, !Re(l)), ox = (l) => rx(l, Re(l));
  function cx(l, t) {
    return zi(l, (e) => e.empty ? l.moveByGroup(e, t) : Su(e, t));
  }
  const T3 = (l) => cx(l, !Re(l)), O3 = (l) => cx(l, Re(l));
  function D3(l, t, e) {
    if (t.type.prop(e)) return true;
    let n = t.to - t.from;
    return n && (n > 2 || /[^\s,.;:]/.test(l.sliceDoc(t.from, t.to))) || t.firstChild;
  }
  function xu(l, t, e) {
    let n = Be(l).resolveInner(t.head), r = e ? Dt.closedBy : Dt.openedBy;
    for (let h = t.head; ; ) {
      let g = e ? n.childAfter(h) : n.childBefore(h);
      if (!g) break;
      D3(l, g, r) ? n = g : h = e ? g.to : g.from;
    }
    let a = n.type.prop(r), c, f;
    return a && (c = e ? Zi(l, n.from, 1) : Zi(l, n.to, -1)) && c.matched ? f = e ? c.end.to : c.end.from : f = e ? n.to : n.from, K.cursor(f, e ? -1 : 1);
  }
  const E3 = (l) => zi(l, (t) => xu(l.state, t, !Re(l))), B3 = (l) => zi(l, (t) => xu(l.state, t, Re(l)));
  function ux(l, t) {
    return zi(l, (e) => {
      if (!e.empty) return Su(e, t);
      let n = l.moveVertically(e, t);
      return n.head != e.head ? n : l.moveToLineBoundary(e, t);
    });
  }
  const fx = (l) => ux(l, false), hx = (l) => ux(l, true);
  function dx(l) {
    let t = l.scrollDOM.clientHeight < l.scrollDOM.scrollHeight - 2, e = 0, n = 0, r;
    if (t) {
      for (let a of l.state.facet(P.scrollMargins)) {
        let c = a(l);
        (c == null ? void 0 : c.top) && (e = Math.max(c == null ? void 0 : c.top, e)), (c == null ? void 0 : c.bottom) && (n = Math.max(c == null ? void 0 : c.bottom, n));
      }
      r = l.scrollDOM.clientHeight - e - n;
    } else r = (l.dom.ownerDocument.defaultView || window).innerHeight;
    return {
      marginTop: e,
      marginBottom: n,
      selfScroll: t,
      height: Math.max(l.defaultLineHeight, r - 5)
    };
  }
  function mx(l, t) {
    let e = dx(l), { state: n } = l, r = Is(n.selection, (c) => c.empty ? l.moveVertically(c, t, e.height) : Su(c, t));
    if (r.eq(n.selection)) return false;
    let a;
    if (e.selfScroll) {
      let c = l.coordsAtPos(n.selection.main.head), f = l.scrollDOM.getBoundingClientRect(), h = f.top + e.marginTop, g = f.bottom - e.marginBottom;
      c && c.top > h && c.bottom < g && (a = P.scrollIntoView(r.main.head, {
        y: "start",
        yMargin: c.top - h
      }));
    }
    return l.dispatch(Ri(n, r), {
      effects: a
    }), true;
  }
  const k1 = (l) => mx(l, false), bm = (l) => mx(l, true);
  function ul(l, t, e) {
    let n = l.lineBlockAt(t.head), r = l.moveToLineBoundary(t, e);
    if (r.head == t.head && r.head != (e ? n.to : n.from) && (r = l.moveToLineBoundary(t, e, false)), !e && r.head == n.from && n.length) {
      let a = /^\s*/.exec(l.state.sliceDoc(n.from, Math.min(n.from + 100, n.to)))[0].length;
      a && t.head != n.from + a && (r = K.cursor(n.from + a));
    }
    return r;
  }
  const R3 = (l) => zi(l, (t) => ul(l, t, true)), z3 = (l) => zi(l, (t) => ul(l, t, false)), N3 = (l) => zi(l, (t) => ul(l, t, !Re(l))), L3 = (l) => zi(l, (t) => ul(l, t, Re(l))), H3 = (l) => zi(l, (t) => K.cursor(l.lineBlockAt(t.head).from, 1)), U3 = (l) => zi(l, (t) => K.cursor(l.lineBlockAt(t.head).to, -1));
  function V3(l, t, e) {
    let n = false, r = Is(l.selection, (a) => {
      let c = Zi(l, a.head, -1) || Zi(l, a.head, 1) || a.head > 0 && Zi(l, a.head - 1, 1) || a.head < l.doc.length && Zi(l, a.head + 1, -1);
      if (!c || !c.end) return a;
      n = true;
      let f = c.start.from == a.head ? c.end.to : c.end.from;
      return K.cursor(f);
    });
    return n ? (t(Ri(l, r)), true) : false;
  }
  const q3 = ({ state: l, dispatch: t }) => V3(l, t);
  function ki(l, t) {
    let e = Is(l.state.selection, (n) => {
      let r = t(n);
      return K.range(n.anchor, r.head, r.goalColumn, r.bidiLevel || void 0);
    });
    return e.eq(l.state.selection) ? false : (l.dispatch(Ri(l.state, e)), true);
  }
  function gx(l, t) {
    return ki(l, (e) => l.moveByChar(e, t));
  }
  const px = (l) => gx(l, !Re(l)), yx = (l) => gx(l, Re(l));
  function bx(l, t) {
    return ki(l, (e) => l.moveByGroup(e, t));
  }
  const j3 = (l) => bx(l, !Re(l)), Y3 = (l) => bx(l, Re(l)), G3 = (l) => ki(l, (t) => xu(l.state, t, !Re(l))), X3 = (l) => ki(l, (t) => xu(l.state, t, Re(l)));
  function vx(l, t) {
    return ki(l, (e) => l.moveVertically(e, t));
  }
  const Sx = (l) => vx(l, false), xx = (l) => vx(l, true);
  function wx(l, t) {
    return ki(l, (e) => l.moveVertically(e, t, dx(l).height));
  }
  const T1 = (l) => wx(l, false), O1 = (l) => wx(l, true), K3 = (l) => ki(l, (t) => ul(l, t, true)), Q3 = (l) => ki(l, (t) => ul(l, t, false)), Z3 = (l) => ki(l, (t) => ul(l, t, !Re(l))), W3 = (l) => ki(l, (t) => ul(l, t, Re(l))), J3 = (l) => ki(l, (t) => K.cursor(l.lineBlockAt(t.head).from)), F3 = (l) => ki(l, (t) => K.cursor(l.lineBlockAt(t.head).to)), D1 = ({ state: l, dispatch: t }) => (t(Ri(l, {
    anchor: 0
  })), true), E1 = ({ state: l, dispatch: t }) => (t(Ri(l, {
    anchor: l.doc.length
  })), true), B1 = ({ state: l, dispatch: t }) => (t(Ri(l, {
    anchor: l.selection.main.anchor,
    head: 0
  })), true), R1 = ({ state: l, dispatch: t }) => (t(Ri(l, {
    anchor: l.selection.main.anchor,
    head: l.doc.length
  })), true), P3 = ({ state: l, dispatch: t }) => (t(l.update({
    selection: {
      anchor: 0,
      head: l.doc.length
    },
    userEvent: "select"
  })), true), I3 = ({ state: l, dispatch: t }) => {
    let e = wu(l).map(({ from: n, to: r }) => K.range(n, Math.min(r + 1, l.doc.length)));
    return t(l.update({
      selection: K.create(e),
      userEvent: "select"
    })), true;
  }, $3 = ({ state: l, dispatch: t }) => {
    let e = Is(l.selection, (n) => {
      let r = Be(l), a = r.resolveStack(n.from, 1);
      if (n.empty) {
        let c = r.resolveStack(n.from, -1);
        c.node.from >= a.node.from && c.node.to <= a.node.to && (a = c);
      }
      for (let c = a; c; c = c.next) {
        let { node: f } = c;
        if ((f.from < n.from && f.to >= n.to || f.to > n.to && f.from <= n.from) && c.next) return K.range(f.to, f.from);
      }
      return n;
    });
    return e.eq(l.selection) ? false : (t(Ri(l, e)), true);
  };
  function Ax(l, t) {
    let { state: e } = l, n = e.selection, r = e.selection.ranges.slice();
    for (let a of e.selection.ranges) {
      let c = e.doc.lineAt(a.head);
      if (t ? c.to < l.state.doc.length : c.from > 0) for (let f = a; ; ) {
        let h = l.moveVertically(f, t);
        if (h.head < c.from || h.head > c.to) {
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
  const tO = (l) => Ax(l, false), eO = (l) => Ax(l, true), iO = ({ state: l, dispatch: t }) => {
    let e = l.selection, n = null;
    return e.ranges.length > 1 ? n = K.create([
      e.main
    ]) : e.main.empty || (n = K.create([
      K.cursor(e.main.head)
    ])), n ? (t(Ri(l, n)), true) : false;
  };
  function La(l, t) {
    if (l.state.readOnly) return false;
    let e = "delete.selection", { state: n } = l, r = n.changeByRange((a) => {
      let { from: c, to: f } = a;
      if (c == f) {
        let h = t(a);
        h < c ? (e = "delete.backward", h = Ac(l, h, false)) : h > c && (e = "delete.forward", h = Ac(l, h, true)), c = Math.min(c, h), f = Math.max(f, h);
      } else c = Ac(l, c, false), f = Ac(l, f, true);
      return c == f ? {
        range: a
      } : {
        changes: {
          from: c,
          to: f
        },
        range: K.cursor(c, c < a.head ? -1 : 1)
      };
    });
    return r.changes.empty ? false : (l.dispatch(n.update(r, {
      scrollIntoView: true,
      userEvent: e,
      effects: e == "delete.selection" ? P.announce.of(n.phrase("Selection deleted")) : void 0
    })), true);
  }
  function Ac(l, t, e) {
    if (l instanceof P) for (let n of l.state.facet(P.atomicRanges).map((r) => r(l))) n.between(t, t, (r, a) => {
      r < t && a > t && (t = e ? a : r);
    });
    return t;
  }
  const Cx = (l, t, e) => La(l, (n) => {
    let r = n.from, { state: a } = l, c = a.doc.lineAt(r), f, h;
    if (e && !t && r > c.from && r < c.from + 200 && !/[^ \t]/.test(f = c.text.slice(0, r - c.from))) {
      if (f[f.length - 1] == "	") return r - 1;
      let g = Ps(f, a.tabSize), p = g % $c(a) || $c(a);
      for (let y = 0; y < p && f[f.length - 1 - y] == " "; y++) r--;
      h = r;
    } else h = _e(c.text, r - c.from, t, t) + c.from, h == r && c.number != (t ? a.doc.lines : 1) ? h += t ? 1 : -1 : !t && /[\ufe00-\ufe0f]/.test(c.text.slice(h - c.from, r - c.from)) && (h = _e(c.text, h - c.from, false, false) + c.from);
    return h;
  }), vm = (l) => Cx(l, false, true), Mx = (l) => Cx(l, true, false), _x = (l, t) => La(l, (e) => {
    let n = e.head, { state: r } = l, a = r.doc.lineAt(n), c = r.charCategorizer(n);
    for (let f = null; ; ) {
      if (n == (t ? a.to : a.from)) {
        n == e.head && a.number != (t ? r.doc.lines : 1) && (n += t ? 1 : -1);
        break;
      }
      let h = _e(a.text, n - a.from, t) + a.from, g = a.text.slice(Math.min(n, h) - a.from, Math.max(n, h) - a.from), p = c(g);
      if (f != null && p != f) break;
      (g != " " || n != e.head) && (f = p), n = h;
    }
    return n;
  }), kx = (l) => _x(l, false), nO = (l) => _x(l, true), lO = (l) => La(l, (t) => {
    let e = l.lineBlockAt(t.head).to;
    return t.head < e ? e : Math.min(l.state.doc.length, t.head + 1);
  }), sO = (l) => La(l, (t) => {
    let e = l.moveToLineBoundary(t, false).head;
    return t.head > e ? e : Math.max(0, t.head - 1);
  }), rO = (l) => La(l, (t) => {
    let e = l.moveToLineBoundary(t, true).head;
    return t.head < e ? e : Math.min(l.state.doc.length, t.head + 1);
  }), aO = ({ state: l, dispatch: t }) => {
    if (l.readOnly) return false;
    let e = l.changeByRange((n) => ({
      changes: {
        from: n.from,
        to: n.to,
        insert: Rt.of([
          "",
          ""
        ])
      },
      range: K.cursor(n.from)
    }));
    return t(l.update(e, {
      scrollIntoView: true,
      userEvent: "input"
    })), true;
  }, oO = ({ state: l, dispatch: t }) => {
    if (l.readOnly) return false;
    let e = l.changeByRange((n) => {
      if (!n.empty || n.from == 0 || n.from == l.doc.length) return {
        range: n
      };
      let r = n.from, a = l.doc.lineAt(r), c = r == a.from ? r - 1 : _e(a.text, r - a.from, false) + a.from, f = r == a.to ? r + 1 : _e(a.text, r - a.from, true) + a.from;
      return {
        changes: {
          from: c,
          to: f,
          insert: l.doc.slice(r, f).append(l.doc.slice(c, r))
        },
        range: K.cursor(f)
      };
    });
    return e.changes.empty ? false : (t(l.update(e, {
      scrollIntoView: true,
      userEvent: "move.character"
    })), true);
  };
  function wu(l) {
    let t = [], e = -1;
    for (let n of l.selection.ranges) {
      let r = l.doc.lineAt(n.from), a = l.doc.lineAt(n.to);
      if (!n.empty && n.to == a.from && (a = l.doc.lineAt(n.to - 1)), e >= r.number) {
        let c = t[t.length - 1];
        c.to = a.to, c.ranges.push(n);
      } else t.push({
        from: r.from,
        to: a.to,
        ranges: [
          n
        ]
      });
      e = a.number + 1;
    }
    return t;
  }
  function Tx(l, t, e) {
    if (l.readOnly) return false;
    let n = [], r = [];
    for (let a of wu(l)) {
      if (e ? a.to == l.doc.length : a.from == 0) continue;
      let c = l.doc.lineAt(e ? a.to + 1 : a.from - 1), f = c.length + 1;
      if (e) {
        n.push({
          from: a.to,
          to: c.to
        }, {
          from: a.from,
          insert: c.text + l.lineBreak
        });
        for (let h of a.ranges) r.push(K.range(Math.min(l.doc.length, h.anchor + f), Math.min(l.doc.length, h.head + f)));
      } else {
        n.push({
          from: c.from,
          to: a.from
        }, {
          from: a.to,
          insert: l.lineBreak + c.text
        });
        for (let h of a.ranges) r.push(K.range(h.anchor - f, h.head - f));
      }
    }
    return n.length ? (t(l.update({
      changes: n,
      scrollIntoView: true,
      selection: K.create(r, l.selection.mainIndex),
      userEvent: "move.line"
    })), true) : false;
  }
  const cO = ({ state: l, dispatch: t }) => Tx(l, t, false), uO = ({ state: l, dispatch: t }) => Tx(l, t, true);
  function Ox(l, t, e) {
    if (l.readOnly) return false;
    let n = [];
    for (let r of wu(l)) e ? n.push({
      from: r.from,
      insert: l.doc.slice(r.from, r.to) + l.lineBreak
    }) : n.push({
      from: r.to,
      insert: l.lineBreak + l.doc.slice(r.from, r.to)
    });
    return t(l.update({
      changes: n,
      scrollIntoView: true,
      userEvent: "input.copyline"
    })), true;
  }
  const fO = ({ state: l, dispatch: t }) => Ox(l, t, false), hO = ({ state: l, dispatch: t }) => Ox(l, t, true), dO = (l) => {
    if (l.state.readOnly) return false;
    let { state: t } = l, e = t.changes(wu(t).map(({ from: r, to: a }) => (r > 0 ? r-- : a < t.doc.length && a++, {
      from: r,
      to: a
    }))), n = Is(t.selection, (r) => {
      let a;
      if (l.lineWrapping) {
        let c = l.lineBlockAt(r.head), f = l.coordsAtPos(r.head, r.assoc || 1);
        f && (a = c.bottom + l.documentTop - f.bottom + l.defaultLineHeight / 2);
      }
      return l.moveVertically(r, true, a);
    }).map(e);
    return l.dispatch({
      changes: e,
      selection: n,
      scrollIntoView: true,
      userEvent: "delete.line"
    }), true;
  };
  function mO(l, t) {
    if (/\(\)|\[\]|\{\}/.test(l.sliceDoc(t - 1, t + 1))) return {
      from: t,
      to: t
    };
    let e = Be(l).resolveInner(t), n = e.childBefore(t), r = e.childAfter(t), a;
    return n && r && n.to <= t && r.from >= t && (a = n.type.prop(Dt.closedBy)) && a.indexOf(r.name) > -1 && l.doc.lineAt(n.to).from == l.doc.lineAt(r.from).from && !/\S/.test(l.sliceDoc(n.to, r.from)) ? {
      from: n.to,
      to: r.from
    } : null;
  }
  const z1 = Dx(false), gO = Dx(true);
  function Dx(l) {
    return ({ state: t, dispatch: e }) => {
      if (t.readOnly) return false;
      let n = t.changeByRange((r) => {
        let { from: a, to: c } = r, f = t.doc.lineAt(a), h = !l && a == c && mO(t, a);
        l && (a = c = (c <= f.to ? f : t.doc.lineAt(c)).to);
        let g = new yu(t, {
          simulateBreak: a,
          simulateDoubleBreak: !!h
        }), p = Ym(g, a);
        for (p == null && (p = Ps(/^\s*/.exec(t.doc.lineAt(a).text)[0], t.tabSize)); c < f.to && /\s/.test(f.text[c - f.from]); ) c++;
        h ? { from: a, to: c } = h : a > f.from && a < f.from + 100 && !/\S/.test(f.text.slice(0, a)) && (a = f.from);
        let y = [
          "",
          Aa(t, p)
        ];
        return h && y.push(Aa(t, g.lineIndent(f.from, -1))), {
          changes: {
            from: a,
            to: c,
            insert: Rt.of(y)
          },
          range: K.cursor(a + 1 + y[1].length)
        };
      });
      return e(t.update(n, {
        scrollIntoView: true,
        userEvent: "input"
      })), true;
    };
  }
  function Qm(l, t) {
    let e = -1;
    return l.changeByRange((n) => {
      let r = [];
      for (let c = n.from; c <= n.to; ) {
        let f = l.doc.lineAt(c);
        f.number > e && (n.empty || n.to > f.from) && (t(f, r, n), e = f.number), c = f.to + 1;
      }
      let a = l.changes(r);
      return {
        changes: r,
        range: K.range(a.mapPos(n.anchor, 1), a.mapPos(n.head, 1))
      };
    });
  }
  const pO = ({ state: l, dispatch: t }) => {
    if (l.readOnly) return false;
    let e = /* @__PURE__ */ Object.create(null), n = new yu(l, {
      overrideIndentation: (a) => {
        let c = e[a];
        return c ?? -1;
      }
    }), r = Qm(l, (a, c, f) => {
      let h = Ym(n, a.from);
      if (h == null) return;
      /\S/.test(a.text) || (h = 0);
      let g = /^\s*/.exec(a.text)[0], p = Aa(l, h);
      (g != p || f.from < a.from + g.length) && (e[a.from] = h, c.push({
        from: a.from,
        to: a.from + g.length,
        insert: p
      }));
    });
    return r.changes.empty || t(l.update(r, {
      userEvent: "indent"
    })), true;
  }, Ex = ({ state: l, dispatch: t }) => l.readOnly ? false : (t(l.update(Qm(l, (e, n) => {
    n.push({
      from: e.from,
      insert: l.facet(pu)
    });
  }), {
    userEvent: "input.indent"
  })), true), Bx = ({ state: l, dispatch: t }) => l.readOnly ? false : (t(l.update(Qm(l, (e, n) => {
    let r = /^\s*/.exec(e.text)[0];
    if (!r) return;
    let a = Ps(r, l.tabSize), c = 0, f = Aa(l, Math.max(0, a - $c(l)));
    for (; c < r.length && c < f.length && r.charCodeAt(c) == f.charCodeAt(c); ) c++;
    n.push({
      from: e.from + c,
      to: e.from + r.length,
      insert: f.slice(c)
    });
  }), {
    userEvent: "delete.dedent"
  })), true), yO = (l) => (l.setTabFocusMode(), true), bO = [
    {
      key: "Ctrl-b",
      run: ax,
      shift: px,
      preventDefault: true
    },
    {
      key: "Ctrl-f",
      run: ox,
      shift: yx
    },
    {
      key: "Ctrl-p",
      run: fx,
      shift: Sx
    },
    {
      key: "Ctrl-n",
      run: hx,
      shift: xx
    },
    {
      key: "Ctrl-a",
      run: H3,
      shift: J3
    },
    {
      key: "Ctrl-e",
      run: U3,
      shift: F3
    },
    {
      key: "Ctrl-d",
      run: Mx
    },
    {
      key: "Ctrl-h",
      run: vm
    },
    {
      key: "Ctrl-k",
      run: lO
    },
    {
      key: "Ctrl-Alt-h",
      run: kx
    },
    {
      key: "Ctrl-o",
      run: aO
    },
    {
      key: "Ctrl-t",
      run: oO
    },
    {
      key: "Ctrl-v",
      run: bm
    }
  ], vO = [
    {
      key: "ArrowLeft",
      run: ax,
      shift: px,
      preventDefault: true
    },
    {
      key: "Mod-ArrowLeft",
      mac: "Alt-ArrowLeft",
      run: T3,
      shift: j3,
      preventDefault: true
    },
    {
      mac: "Cmd-ArrowLeft",
      run: N3,
      shift: Z3,
      preventDefault: true
    },
    {
      key: "ArrowRight",
      run: ox,
      shift: yx,
      preventDefault: true
    },
    {
      key: "Mod-ArrowRight",
      mac: "Alt-ArrowRight",
      run: O3,
      shift: Y3,
      preventDefault: true
    },
    {
      mac: "Cmd-ArrowRight",
      run: L3,
      shift: W3,
      preventDefault: true
    },
    {
      key: "ArrowUp",
      run: fx,
      shift: Sx,
      preventDefault: true
    },
    {
      mac: "Cmd-ArrowUp",
      run: D1,
      shift: B1
    },
    {
      mac: "Ctrl-ArrowUp",
      run: k1,
      shift: T1
    },
    {
      key: "ArrowDown",
      run: hx,
      shift: xx,
      preventDefault: true
    },
    {
      mac: "Cmd-ArrowDown",
      run: E1,
      shift: R1
    },
    {
      mac: "Ctrl-ArrowDown",
      run: bm,
      shift: O1
    },
    {
      key: "PageUp",
      run: k1,
      shift: T1
    },
    {
      key: "PageDown",
      run: bm,
      shift: O1
    },
    {
      key: "Home",
      run: z3,
      shift: Q3,
      preventDefault: true
    },
    {
      key: "Mod-Home",
      run: D1,
      shift: B1
    },
    {
      key: "End",
      run: R3,
      shift: K3,
      preventDefault: true
    },
    {
      key: "Mod-End",
      run: E1,
      shift: R1
    },
    {
      key: "Enter",
      run: z1,
      shift: z1
    },
    {
      key: "Mod-a",
      run: P3
    },
    {
      key: "Backspace",
      run: vm,
      shift: vm,
      preventDefault: true
    },
    {
      key: "Delete",
      run: Mx,
      preventDefault: true
    },
    {
      key: "Mod-Backspace",
      mac: "Alt-Backspace",
      run: kx,
      preventDefault: true
    },
    {
      key: "Mod-Delete",
      mac: "Alt-Delete",
      run: nO,
      preventDefault: true
    },
    {
      mac: "Mod-Backspace",
      run: sO,
      preventDefault: true
    },
    {
      mac: "Mod-Delete",
      run: rO,
      preventDefault: true
    }
  ].concat(bO.map((l) => ({
    mac: l.key,
    run: l.run,
    shift: l.shift
  }))), SO = [
    {
      key: "Alt-ArrowLeft",
      mac: "Ctrl-ArrowLeft",
      run: E3,
      shift: G3
    },
    {
      key: "Alt-ArrowRight",
      mac: "Ctrl-ArrowRight",
      run: B3,
      shift: X3
    },
    {
      key: "Alt-ArrowUp",
      run: cO
    },
    {
      key: "Shift-Alt-ArrowUp",
      run: fO
    },
    {
      key: "Alt-ArrowDown",
      run: uO
    },
    {
      key: "Shift-Alt-ArrowDown",
      run: hO
    },
    {
      key: "Mod-Alt-ArrowUp",
      run: tO
    },
    {
      key: "Mod-Alt-ArrowDown",
      run: eO
    },
    {
      key: "Escape",
      run: iO
    },
    {
      key: "Mod-Enter",
      run: gO
    },
    {
      key: "Alt-l",
      mac: "Ctrl-l",
      run: I3
    },
    {
      key: "Mod-i",
      run: $3,
      preventDefault: true
    },
    {
      key: "Mod-[",
      run: Bx
    },
    {
      key: "Mod-]",
      run: Ex
    },
    {
      key: "Mod-Alt-\\",
      run: pO
    },
    {
      key: "Shift-Mod-k",
      run: dO
    },
    {
      key: "Shift-Mod-\\",
      run: q3
    },
    {
      key: "Mod-/",
      run: c3
    },
    {
      key: "Alt-A",
      run: f3
    },
    {
      key: "Ctrl-m",
      mac: "Shift-Alt-m",
      run: yO
    }
  ].concat(vO), xO = {
    key: "Tab",
    run: Ex,
    shift: Bx
  }, N1 = typeof String.prototype.normalize == "function" ? (l) => l.normalize("NFKD") : (l) => l;
  class Js {
    constructor(t, e, n = 0, r = t.length, a, c) {
      this.test = c, this.value = {
        from: 0,
        to: 0
      }, this.done = false, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = t.iterRange(n, r), this.bufferStart = n, this.normalize = a ? (f) => a(N1(f)) : N1, this.query = this.normalize(e);
    }
    peek() {
      if (this.bufferPos == this.buffer.length) {
        if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
        this.bufferPos = 0, this.buffer = this.iter.value;
      }
      return Ze(this.buffer, this.bufferPos);
    }
    next() {
      for (; this.matches.length; ) this.matches.pop();
      return this.nextOverlapping();
    }
    nextOverlapping() {
      for (; ; ) {
        let t = this.peek();
        if (t < 0) return this.done = true, this;
        let e = Cm(t), n = this.bufferStart + this.bufferPos;
        this.bufferPos += Xi(t);
        let r = this.normalize(e);
        if (r.length) for (let a = 0, c = n; ; a++) {
          let f = r.charCodeAt(a), h = this.match(f, c, this.bufferPos + this.bufferStart);
          if (a == r.length - 1) {
            if (h) return this.value = h, this;
            break;
          }
          c == n && a < e.length && e.charCodeAt(a) == f && c++;
        }
      }
    }
    match(t, e, n) {
      let r = null;
      for (let a = 0; a < this.matches.length; a += 2) {
        let c = this.matches[a], f = false;
        this.query.charCodeAt(c) == t && (c == this.query.length - 1 ? r = {
          from: this.matches[a + 1],
          to: n
        } : (this.matches[a]++, f = true)), f || (this.matches.splice(a, 2), a -= 2);
      }
      return this.query.charCodeAt(0) == t && (this.query.length == 1 ? r = {
        from: e,
        to: n
      } : this.matches.push(1, e)), r && this.test && !this.test(r.from, r.to, this.buffer, this.bufferStart) && (r = null), r;
    }
  }
  typeof Symbol < "u" && (Js.prototype[Symbol.iterator] = function() {
    return this;
  });
  const Rx = {
    from: -1,
    to: -1,
    match: /.*/.exec("")
  }, Zm = "gm" + (/x/.unicode == null ? "" : "u");
  class zx {
    constructor(t, e, n, r = 0, a = t.length) {
      if (this.text = t, this.to = a, this.curLine = "", this.done = false, this.value = Rx, /\\[sWDnr]|\n|\r|\[\^/.test(e)) return new Nx(t, e, n, r, a);
      this.re = new RegExp(e, Zm + ((n == null ? void 0 : n.ignoreCase) ? "i" : "")), this.test = n == null ? void 0 : n.test, this.iter = t.iter();
      let c = t.lineAt(r);
      this.curLineStart = c.from, this.matchPos = nu(t, r), this.getLine(this.curLineStart);
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
          if (this.matchPos = nu(this.text, r + (n == r ? 1 : 0)), n == this.curLineStart + this.curLine.length && this.nextLine(), (n < r || n > this.value.to) && (!this.test || this.test(n, r, e))) return this.value = {
            from: n,
            to: r,
            match: e
          }, this;
          t = this.matchPos - this.curLineStart;
        } else if (this.curLineStart + this.curLine.length < this.to) this.nextLine(), t = 0;
        else return this.done = true, this;
      }
    }
  }
  const bd = /* @__PURE__ */ new WeakMap();
  class Us {
    constructor(t, e) {
      this.from = t, this.text = e;
    }
    get to() {
      return this.from + this.text.length;
    }
    static get(t, e, n) {
      let r = bd.get(t);
      if (!r || r.from >= n || r.to <= e) {
        let f = new Us(e, t.sliceString(e, n));
        return bd.set(t, f), f;
      }
      if (r.from == e && r.to == n) return r;
      let { text: a, from: c } = r;
      return c > e && (a = t.sliceString(e, c) + a, c = e), r.to < n && (a += t.sliceString(r.to, n)), bd.set(t, new Us(c, a)), new Us(e, a.slice(e - c, n - c));
    }
  }
  class Nx {
    constructor(t, e, n, r, a) {
      this.text = t, this.to = a, this.done = false, this.value = Rx, this.matchPos = nu(t, r), this.re = new RegExp(e, Zm + ((n == null ? void 0 : n.ignoreCase) ? "i" : "")), this.test = n == null ? void 0 : n.test, this.flat = Us.get(t, r, this.chunkEnd(r + 5e3));
    }
    chunkEnd(t) {
      return t >= this.to ? this.to : this.text.lineAt(t).to;
    }
    next() {
      for (; ; ) {
        let t = this.re.lastIndex = this.matchPos - this.flat.from, e = this.re.exec(this.flat.text);
        if (e && !e[0] && e.index == t && (this.re.lastIndex = t + 1, e = this.re.exec(this.flat.text)), e) {
          let n = this.flat.from + e.index, r = n + e[0].length;
          if ((this.flat.to >= this.to || e.index + e[0].length <= this.flat.text.length - 10) && (!this.test || this.test(n, r, e))) return this.value = {
            from: n,
            to: r,
            match: e
          }, this.matchPos = nu(this.text, r + (n == r ? 1 : 0)), this;
        }
        if (this.flat.to == this.to) return this.done = true, this;
        this.flat = Us.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + this.flat.text.length * 2));
      }
    }
  }
  typeof Symbol < "u" && (zx.prototype[Symbol.iterator] = Nx.prototype[Symbol.iterator] = function() {
    return this;
  });
  function wO(l) {
    try {
      return new RegExp(l, Zm), true;
    } catch {
      return false;
    }
  }
  function nu(l, t) {
    if (t >= l.length) return t;
    let e = l.lineAt(t), n;
    for (; t < e.to && (n = e.text.charCodeAt(t - e.from)) >= 56320 && n < 57344; ) t++;
    return t;
  }
  function Sm(l) {
    let t = String(l.state.doc.lineAt(l.state.selection.main.head).number), e = Xt("input", {
      class: "cm-textfield",
      name: "line",
      value: t
    }), n = Xt("form", {
      class: "cm-gotoLine",
      onkeydown: (a) => {
        a.keyCode == 27 ? (a.preventDefault(), l.dispatch({
          effects: ha.of(false)
        }), l.focus()) : a.keyCode == 13 && (a.preventDefault(), r());
      },
      onsubmit: (a) => {
        a.preventDefault(), r();
      }
    }, Xt("label", l.state.phrase("Go to line"), ": ", e), " ", Xt("button", {
      class: "cm-button",
      type: "submit"
    }, l.state.phrase("go")), Xt("button", {
      name: "close",
      onclick: () => {
        l.dispatch({
          effects: ha.of(false)
        }), l.focus();
      },
      "aria-label": l.state.phrase("close"),
      type: "button"
    }, [
      "\xD7"
    ]));
    function r() {
      let a = /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(e.value);
      if (!a) return;
      let { state: c } = l, f = c.doc.lineAt(c.selection.main.head), [, h, g, p, y] = a, v = p ? +p.slice(1) : 0, S = g ? +g : f.number;
      if (g && y) {
        let _ = S / 100;
        h && (_ = _ * (h == "-" ? -1 : 1) + f.number / c.doc.lines), S = Math.round(c.doc.lines * _);
      } else g && h && (S = S * (h == "-" ? -1 : 1) + f.number);
      let w = c.doc.line(Math.max(1, Math.min(c.doc.lines, S))), A = K.cursor(w.from + Math.max(0, Math.min(v, w.length)));
      l.dispatch({
        effects: [
          ha.of(false),
          P.scrollIntoView(A.from, {
            y: "center"
          })
        ],
        selection: A
      }), l.focus();
    }
    return {
      dom: n
    };
  }
  const ha = St.define(), L1 = ke.define({
    create() {
      return true;
    },
    update(l, t) {
      for (let e of t.effects) e.is(ha) && (l = e.value);
      return l;
    },
    provide: (l) => Sa.from(l, (t) => t ? Sm : null)
  }), AO = (l) => {
    let t = va(l, Sm);
    if (!t) {
      let e = [
        ha.of(true)
      ];
      l.state.field(L1, false) == null && e.push(St.appendConfig.of([
        L1,
        CO
      ])), l.dispatch({
        effects: e
      }), t = va(l, Sm);
    }
    return t && t.dom.querySelector("input").select(), true;
  }, CO = P.baseTheme({
    ".cm-panel.cm-gotoLine": {
      padding: "2px 6px 4px",
      position: "relative",
      "& label": {
        fontSize: "80%"
      },
      "& [name=close]": {
        position: "absolute",
        top: "0",
        bottom: "0",
        right: "4px",
        backgroundColor: "inherit",
        border: "none",
        font: "inherit",
        padding: "0"
      }
    }
  }), MO = {
    highlightWordAroundCursor: false,
    minSelectionLength: 1,
    maxMatches: 100,
    wholeWords: false
  }, _O = et.define({
    combine(l) {
      return $i(l, MO, {
        highlightWordAroundCursor: (t, e) => t || e,
        minSelectionLength: Math.min,
        maxMatches: Math.min
      });
    }
  });
  function kO(l) {
    return [
      BO,
      EO
    ];
  }
  const TO = ct.mark({
    class: "cm-selectionMatch"
  }), OO = ct.mark({
    class: "cm-selectionMatch cm-selectionMatch-main"
  });
  function H1(l, t, e, n) {
    return (e == 0 || l(t.sliceDoc(e - 1, e)) != It.Word) && (n == t.doc.length || l(t.sliceDoc(n, n + 1)) != It.Word);
  }
  function DO(l, t, e, n) {
    return l(t.sliceDoc(e, e + 1)) == It.Word && l(t.sliceDoc(n - 1, n)) == It.Word;
  }
  const EO = ee.fromClass(class {
    constructor(l) {
      this.decorations = this.getDeco(l);
    }
    update(l) {
      (l.selectionSet || l.docChanged || l.viewportChanged) && (this.decorations = this.getDeco(l.view));
    }
    getDeco(l) {
      let t = l.state.facet(_O), { state: e } = l, n = e.selection;
      if (n.ranges.length > 1) return ct.none;
      let r = n.main, a, c = null;
      if (r.empty) {
        if (!t.highlightWordAroundCursor) return ct.none;
        let h = e.wordAt(r.head);
        if (!h) return ct.none;
        c = e.charCategorizer(r.head), a = e.sliceDoc(h.from, h.to);
      } else {
        let h = r.to - r.from;
        if (h < t.minSelectionLength || h > 200) return ct.none;
        if (t.wholeWords) {
          if (a = e.sliceDoc(r.from, r.to), c = e.charCategorizer(r.head), !(H1(c, e, r.from, r.to) && DO(c, e, r.from, r.to))) return ct.none;
        } else if (a = e.sliceDoc(r.from, r.to), !a) return ct.none;
      }
      let f = [];
      for (let h of l.visibleRanges) {
        let g = new Js(e.doc, a, h.from, h.to);
        for (; !g.next().done; ) {
          let { from: p, to: y } = g.value;
          if ((!c || H1(c, e, p, y)) && (r.empty && p <= r.from && y >= r.to ? f.push(OO.range(p, y)) : (p >= r.to || y <= r.from) && f.push(TO.range(p, y)), f.length > t.maxMatches)) return ct.none;
        }
      }
      return ct.set(f);
    }
  }, {
    decorations: (l) => l.decorations
  }), BO = P.baseTheme({
    ".cm-selectionMatch": {
      backgroundColor: "#99ff7780"
    },
    ".cm-searchMatch .cm-selectionMatch": {
      backgroundColor: "transparent"
    }
  }), RO = ({ state: l, dispatch: t }) => {
    let { selection: e } = l, n = K.create(e.ranges.map((r) => l.wordAt(r.head) || K.cursor(r.head)), e.mainIndex);
    return n.eq(e) ? false : (t(l.update({
      selection: n
    })), true);
  };
  function zO(l, t) {
    let { main: e, ranges: n } = l.selection, r = l.wordAt(e.head), a = r && r.from == e.from && r.to == e.to;
    for (let c = false, f = new Js(l.doc, t, n[n.length - 1].to); ; ) if (f.next(), f.done) {
      if (c) return null;
      f = new Js(l.doc, t, 0, Math.max(0, n[n.length - 1].from - 1)), c = true;
    } else {
      if (c && n.some((h) => h.from == f.value.from)) continue;
      if (a) {
        let h = l.wordAt(f.value.from);
        if (!h || h.from != f.value.from || h.to != f.value.to) continue;
      }
      return f.value;
    }
  }
  const NO = ({ state: l, dispatch: t }) => {
    let { ranges: e } = l.selection;
    if (e.some((a) => a.from === a.to)) return RO({
      state: l,
      dispatch: t
    });
    let n = l.sliceDoc(e[0].from, e[0].to);
    if (l.selection.ranges.some((a) => l.sliceDoc(a.from, a.to) != n)) return false;
    let r = zO(l, n);
    return r ? (t(l.update({
      selection: l.selection.addRange(K.range(r.from, r.to), false),
      effects: P.scrollIntoView(r.to)
    })), true) : false;
  }, $s = et.define({
    combine(l) {
      return $i(l, {
        top: false,
        caseSensitive: false,
        literal: false,
        regexp: false,
        wholeWord: false,
        createPanel: (t) => new ZO(t),
        scrollToMatch: (t) => P.scrollIntoView(t)
      });
    }
  });
  class Lx {
    constructor(t) {
      this.search = t.search, this.caseSensitive = !!t.caseSensitive, this.literal = !!t.literal, this.regexp = !!t.regexp, this.replace = t.replace || "", this.valid = !!this.search && (!this.regexp || wO(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!t.wholeWord;
    }
    unquote(t) {
      return this.literal ? t : t.replace(/\\([nrt\\])/g, (e, n) => n == "n" ? `
` : n == "r" ? "\r" : n == "t" ? "	" : "\\");
    }
    eq(t) {
      return this.search == t.search && this.replace == t.replace && this.caseSensitive == t.caseSensitive && this.regexp == t.regexp && this.wholeWord == t.wholeWord;
    }
    create() {
      return this.regexp ? new VO(this) : new HO(this);
    }
    getCursor(t, e = 0, n) {
      let r = t.doc ? t : Ot.create({
        doc: t
      });
      return n == null && (n = r.doc.length), this.regexp ? Ds(this, r, e, n) : Os(this, r, e, n);
    }
  }
  class Hx {
    constructor(t) {
      this.spec = t;
    }
  }
  function Os(l, t, e, n) {
    return new Js(t.doc, l.unquoted, e, n, l.caseSensitive ? void 0 : (r) => r.toLowerCase(), l.wholeWord ? LO(t.doc, t.charCategorizer(t.selection.main.head)) : void 0);
  }
  function LO(l, t) {
    return (e, n, r, a) => ((a > e || a + r.length < n) && (a = Math.max(0, e - 2), r = l.sliceString(a, Math.min(l.length, n + 2))), (t(lu(r, e - a)) != It.Word || t(su(r, e - a)) != It.Word) && (t(su(r, n - a)) != It.Word || t(lu(r, n - a)) != It.Word));
  }
  class HO extends Hx {
    constructor(t) {
      super(t);
    }
    nextMatch(t, e, n) {
      let r = Os(this.spec, t, n, t.doc.length).nextOverlapping();
      if (r.done) {
        let a = Math.min(t.doc.length, e + this.spec.unquoted.length);
        r = Os(this.spec, t, 0, a).nextOverlapping();
      }
      return r.done || r.value.from == e && r.value.to == n ? null : r.value;
    }
    prevMatchInRange(t, e, n) {
      for (let r = n; ; ) {
        let a = Math.max(e, r - 1e4 - this.spec.unquoted.length), c = Os(this.spec, t, a, r), f = null;
        for (; !c.nextOverlapping().done; ) f = c.value;
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
      let n = Os(this.spec, t, 0, t.doc.length), r = [];
      for (; !n.next().done; ) {
        if (r.length >= e) return null;
        r.push(n.value);
      }
      return r;
    }
    highlight(t, e, n, r) {
      let a = Os(this.spec, t, Math.max(0, e - this.spec.unquoted.length), Math.min(n + this.spec.unquoted.length, t.doc.length));
      for (; !a.next().done; ) r(a.value.from, a.value.to);
    }
  }
  function Ds(l, t, e, n) {
    return new zx(t.doc, l.search, {
      ignoreCase: !l.caseSensitive,
      test: l.wholeWord ? UO(t.charCategorizer(t.selection.main.head)) : void 0
    }, e, n);
  }
  function lu(l, t) {
    return l.slice(_e(l, t, false), t);
  }
  function su(l, t) {
    return l.slice(t, _e(l, t));
  }
  function UO(l) {
    return (t, e, n) => !n[0].length || (l(lu(n.input, n.index)) != It.Word || l(su(n.input, n.index)) != It.Word) && (l(su(n.input, n.index + n[0].length)) != It.Word || l(lu(n.input, n.index + n[0].length)) != It.Word);
  }
  class VO extends Hx {
    nextMatch(t, e, n) {
      let r = Ds(this.spec, t, n, t.doc.length).next();
      return r.done && (r = Ds(this.spec, t, 0, e).next()), r.done ? null : r.value;
    }
    prevMatchInRange(t, e, n) {
      for (let r = 1; ; r++) {
        let a = Math.max(e, n - r * 1e4), c = Ds(this.spec, t, a, n), f = null;
        for (; !c.next().done; ) f = c.value;
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
      let n = Ds(this.spec, t, 0, t.doc.length), r = [];
      for (; !n.next().done; ) {
        if (r.length >= e) return null;
        r.push(n.value);
      }
      return r;
    }
    highlight(t, e, n, r) {
      let a = Ds(this.spec, t, Math.max(0, e - 250), Math.min(n + 250, t.doc.length));
      for (; !a.next().done; ) r(a.value.from, a.value.to);
    }
  }
  const Ca = St.define(), Wm = St.define(), nl = ke.define({
    create(l) {
      return new vd(xm(l).create(), null);
    },
    update(l, t) {
      for (let e of t.effects) e.is(Ca) ? l = new vd(e.value.create(), l.panel) : e.is(Wm) && (l = new vd(l.query, e.value ? Jm : null));
      return l;
    },
    provide: (l) => Sa.from(l, (t) => t.panel)
  });
  class vd {
    constructor(t, e) {
      this.query = t, this.panel = e;
    }
  }
  const qO = ct.mark({
    class: "cm-searchMatch"
  }), jO = ct.mark({
    class: "cm-searchMatch cm-searchMatch-selected"
  }), YO = ee.fromClass(class {
    constructor(l) {
      this.view = l, this.decorations = this.highlight(l.state.field(nl));
    }
    update(l) {
      let t = l.state.field(nl);
      (t != l.startState.field(nl) || l.docChanged || l.selectionSet || l.viewportChanged) && (this.decorations = this.highlight(t));
    }
    highlight({ query: l, panel: t }) {
      if (!t || !l.spec.valid) return ct.none;
      let { view: e } = this, n = new wn();
      for (let r = 0, a = e.visibleRanges, c = a.length; r < c; r++) {
        let { from: f, to: h } = a[r];
        for (; r < c - 1 && h > a[r + 1].from - 500; ) h = a[++r].to;
        l.highlight(e.state, f, h, (g, p) => {
          let y = e.state.selection.ranges.some((v) => v.from == g && v.to == p);
          n.add(g, p, y ? jO : qO);
        });
      }
      return n.finish();
    }
  }, {
    decorations: (l) => l.decorations
  });
  function Ha(l) {
    return (t) => {
      let e = t.state.field(nl, false);
      return e && e.query.spec.valid ? l(t, e) : qx(t);
    };
  }
  const ru = Ha((l, { query: t }) => {
    let { to: e } = l.state.selection.main, n = t.nextMatch(l.state, e, e);
    if (!n) return false;
    let r = K.single(n.from, n.to), a = l.state.facet($s);
    return l.dispatch({
      selection: r,
      effects: [
        Fm(l, n),
        a.scrollToMatch(r.main, l)
      ],
      userEvent: "select.search"
    }), Vx(l), true;
  }), au = Ha((l, { query: t }) => {
    let { state: e } = l, { from: n } = e.selection.main, r = t.prevMatch(e, n, n);
    if (!r) return false;
    let a = K.single(r.from, r.to), c = l.state.facet($s);
    return l.dispatch({
      selection: a,
      effects: [
        Fm(l, r),
        c.scrollToMatch(a.main, l)
      ],
      userEvent: "select.search"
    }), Vx(l), true;
  }), GO = Ha((l, { query: t }) => {
    let e = t.matchAll(l.state, 1e3);
    return !e || !e.length ? false : (l.dispatch({
      selection: K.create(e.map((n) => K.range(n.from, n.to))),
      userEvent: "select.search.matches"
    }), true);
  }), XO = ({ state: l, dispatch: t }) => {
    let e = l.selection;
    if (e.ranges.length > 1 || e.main.empty) return false;
    let { from: n, to: r } = e.main, a = [], c = 0;
    for (let f = new Js(l.doc, l.sliceDoc(n, r)); !f.next().done; ) {
      if (a.length > 1e3) return false;
      f.value.from == n && (c = a.length), a.push(K.range(f.value.from, f.value.to));
    }
    return t(l.update({
      selection: K.create(a, c),
      userEvent: "select.search.matches"
    })), true;
  }, U1 = Ha((l, { query: t }) => {
    let { state: e } = l, { from: n, to: r } = e.selection.main;
    if (e.readOnly) return false;
    let a = t.nextMatch(e, n, n);
    if (!a) return false;
    let c = a, f = [], h, g, p = [];
    c.from == n && c.to == r && (g = e.toText(t.getReplacement(c)), f.push({
      from: c.from,
      to: c.to,
      insert: g
    }), c = t.nextMatch(e, c.from, c.to), p.push(P.announce.of(e.phrase("replaced match on line $", e.doc.lineAt(n).number) + ".")));
    let y = l.state.changes(f);
    return c && (h = K.single(c.from, c.to).map(y), p.push(Fm(l, c)), p.push(e.facet($s).scrollToMatch(h.main, l))), l.dispatch({
      changes: y,
      selection: h,
      effects: p,
      userEvent: "input.replace"
    }), true;
  }), KO = Ha((l, { query: t }) => {
    if (l.state.readOnly) return false;
    let e = t.matchAll(l.state, 1e9).map((r) => {
      let { from: a, to: c } = r;
      return {
        from: a,
        to: c,
        insert: t.getReplacement(r)
      };
    });
    if (!e.length) return false;
    let n = l.state.phrase("replaced $ matches", e.length) + ".";
    return l.dispatch({
      changes: e,
      effects: P.announce.of(n),
      userEvent: "input.replace.all"
    }), true;
  });
  function Jm(l) {
    return l.state.facet($s).createPanel(l);
  }
  function xm(l, t) {
    var e, n, r, a, c;
    let f = l.selection.main, h = f.empty || f.to > f.from + 100 ? "" : l.sliceDoc(f.from, f.to);
    if (t && !h) return t;
    let g = l.facet($s);
    return new Lx({
      search: ((e = t == null ? void 0 : t.literal) !== null && e !== void 0 ? e : g.literal) ? h : h.replace(/\n/g, "\\n"),
      caseSensitive: (n = t == null ? void 0 : t.caseSensitive) !== null && n !== void 0 ? n : g.caseSensitive,
      literal: (r = t == null ? void 0 : t.literal) !== null && r !== void 0 ? r : g.literal,
      regexp: (a = t == null ? void 0 : t.regexp) !== null && a !== void 0 ? a : g.regexp,
      wholeWord: (c = t == null ? void 0 : t.wholeWord) !== null && c !== void 0 ? c : g.wholeWord
    });
  }
  function Ux(l) {
    let t = va(l, Jm);
    return t && t.dom.querySelector("[main-field]");
  }
  function Vx(l) {
    let t = Ux(l);
    t && t == l.root.activeElement && t.select();
  }
  const qx = (l) => {
    let t = l.state.field(nl, false);
    if (t && t.panel) {
      let e = Ux(l);
      if (e && e != l.root.activeElement) {
        let n = xm(l.state, t.query.spec);
        n.valid && l.dispatch({
          effects: Ca.of(n)
        }), e.focus(), e.select();
      }
    } else l.dispatch({
      effects: [
        Wm.of(true),
        t ? Ca.of(xm(l.state, t.query.spec)) : St.appendConfig.of(JO)
      ]
    });
    return true;
  }, jx = (l) => {
    let t = l.state.field(nl, false);
    if (!t || !t.panel) return false;
    let e = va(l, Jm);
    return e && e.dom.contains(l.root.activeElement) && l.focus(), l.dispatch({
      effects: Wm.of(false)
    }), true;
  }, QO = [
    {
      key: "Mod-f",
      run: qx,
      scope: "editor search-panel"
    },
    {
      key: "F3",
      run: ru,
      shift: au,
      scope: "editor search-panel",
      preventDefault: true
    },
    {
      key: "Mod-g",
      run: ru,
      shift: au,
      scope: "editor search-panel",
      preventDefault: true
    },
    {
      key: "Escape",
      run: jx,
      scope: "editor search-panel"
    },
    {
      key: "Mod-Shift-l",
      run: XO
    },
    {
      key: "Mod-Alt-g",
      run: AO
    },
    {
      key: "Mod-d",
      run: NO,
      preventDefault: true
    }
  ];
  class ZO {
    constructor(t) {
      this.view = t;
      let e = this.query = t.state.field(nl).query.spec;
      this.commit = this.commit.bind(this), this.searchField = Xt("input", {
        value: e.search,
        placeholder: ai(t, "Find"),
        "aria-label": ai(t, "Find"),
        class: "cm-textfield",
        name: "search",
        form: "",
        "main-field": "true",
        onchange: this.commit,
        onkeyup: this.commit
      }), this.replaceField = Xt("input", {
        value: e.replace,
        placeholder: ai(t, "Replace"),
        "aria-label": ai(t, "Replace"),
        class: "cm-textfield",
        name: "replace",
        form: "",
        onchange: this.commit,
        onkeyup: this.commit
      }), this.caseField = Xt("input", {
        type: "checkbox",
        name: "case",
        form: "",
        checked: e.caseSensitive,
        onchange: this.commit
      }), this.reField = Xt("input", {
        type: "checkbox",
        name: "re",
        form: "",
        checked: e.regexp,
        onchange: this.commit
      }), this.wordField = Xt("input", {
        type: "checkbox",
        name: "word",
        form: "",
        checked: e.wholeWord,
        onchange: this.commit
      });
      function n(r, a, c) {
        return Xt("button", {
          class: "cm-button",
          name: r,
          onclick: a,
          type: "button"
        }, c);
      }
      this.dom = Xt("div", {
        onkeydown: (r) => this.keydown(r),
        class: "cm-search"
      }, [
        this.searchField,
        n("next", () => ru(t), [
          ai(t, "next")
        ]),
        n("prev", () => au(t), [
          ai(t, "previous")
        ]),
        n("select", () => GO(t), [
          ai(t, "all")
        ]),
        Xt("label", null, [
          this.caseField,
          ai(t, "match case")
        ]),
        Xt("label", null, [
          this.reField,
          ai(t, "regexp")
        ]),
        Xt("label", null, [
          this.wordField,
          ai(t, "by word")
        ]),
        ...t.state.readOnly ? [] : [
          Xt("br"),
          this.replaceField,
          n("replace", () => U1(t), [
            ai(t, "replace")
          ]),
          n("replaceAll", () => KO(t), [
            ai(t, "replace all")
          ])
        ],
        Xt("button", {
          name: "close",
          onclick: () => jx(t),
          "aria-label": ai(t, "close"),
          type: "button"
        }, [
          "\xD7"
        ])
      ]);
    }
    commit() {
      let t = new Lx({
        search: this.searchField.value,
        caseSensitive: this.caseField.checked,
        regexp: this.reField.checked,
        wholeWord: this.wordField.checked,
        replace: this.replaceField.value
      });
      t.eq(this.query) || (this.query = t, this.view.dispatch({
        effects: Ca.of(t)
      }));
    }
    keydown(t) {
      P_(this.view, t, "search-panel") ? t.preventDefault() : t.keyCode == 13 && t.target == this.searchField ? (t.preventDefault(), (t.shiftKey ? au : ru)(this.view)) : t.keyCode == 13 && t.target == this.replaceField && (t.preventDefault(), U1(this.view));
    }
    update(t) {
      for (let e of t.transactions) for (let n of e.effects) n.is(Ca) && !n.value.eq(this.query) && this.setQuery(n.value);
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
      return this.view.state.facet($s).top;
    }
  }
  function ai(l, t) {
    return l.state.phrase(t);
  }
  const Cc = 30, Mc = /[\s\.,:;?!]/;
  function Fm(l, { from: t, to: e }) {
    let n = l.state.doc.lineAt(t), r = l.state.doc.lineAt(e).to, a = Math.max(n.from, t - Cc), c = Math.min(r, e + Cc), f = l.state.sliceDoc(a, c);
    if (a != n.from) {
      for (let h = 0; h < Cc; h++) if (!Mc.test(f[h + 1]) && Mc.test(f[h])) {
        f = f.slice(h);
        break;
      }
    }
    if (c != r) {
      for (let h = f.length - 1; h > f.length - Cc; h--) if (!Mc.test(f[h - 1]) && Mc.test(f[h])) {
        f = f.slice(0, h);
        break;
      }
    }
    return P.announce.of(`${l.state.phrase("current match")}. ${f} ${l.state.phrase("on line")} ${n.number}.`);
  }
  const WO = P.baseTheme({
    ".cm-panel.cm-search": {
      padding: "2px 6px 4px",
      position: "relative",
      "& [name=close]": {
        position: "absolute",
        top: "0",
        right: "4px",
        backgroundColor: "inherit",
        border: "none",
        font: "inherit",
        padding: 0,
        margin: 0
      },
      "& input, & button, & label": {
        margin: ".2em .6em .2em 0"
      },
      "& input[type=checkbox]": {
        marginRight: ".2em"
      },
      "& label": {
        fontSize: "80%",
        whiteSpace: "pre"
      }
    },
    "&light .cm-searchMatch": {
      backgroundColor: "#ffff0054"
    },
    "&dark .cm-searchMatch": {
      backgroundColor: "#00ffff8a"
    },
    "&light .cm-searchMatch-selected": {
      backgroundColor: "#ff6a0054"
    },
    "&dark .cm-searchMatch-selected": {
      backgroundColor: "#ff00ff8a"
    }
  }), JO = [
    nl,
    Gl.low(YO),
    WO
  ];
  class Yx {
    constructor(t, e, n, r) {
      this.state = t, this.pos = e, this.explicit = n, this.view = r, this.abortListeners = [], this.abortOnDocChange = false;
    }
    tokenBefore(t) {
      let e = Be(this.state).resolveInner(this.pos, -1);
      for (; e && t.indexOf(e.name) < 0; ) e = e.parent;
      return e ? {
        from: e.from,
        to: this.pos,
        text: this.state.sliceDoc(e.from, this.pos),
        type: e.type
      } : null;
    }
    matchBefore(t) {
      let e = this.state.doc.lineAt(this.pos), n = Math.max(e.from, this.pos - 250), r = e.text.slice(n - e.from, this.pos - e.from), a = r.search(Gx(t, false));
      return a < 0 ? null : {
        from: n + a,
        to: this.pos,
        text: r.slice(a)
      };
    }
    get aborted() {
      return this.abortListeners == null;
    }
    addEventListener(t, e, n) {
      t == "abort" && this.abortListeners && (this.abortListeners.push(e), n && n.onDocChange && (this.abortOnDocChange = true));
    }
  }
  function V1(l) {
    let t = Object.keys(l).join(""), e = /\w/.test(t);
    return e && (t = t.replace(/\w/g, "")), `[${e ? "\\w" : ""}${t.replace(/[^\w\s]/g, "\\$&")}]`;
  }
  function FO(l) {
    let t = /* @__PURE__ */ Object.create(null), e = /* @__PURE__ */ Object.create(null);
    for (let { label: r } of l) {
      t[r[0]] = true;
      for (let a = 1; a < r.length; a++) e[r[a]] = true;
    }
    let n = V1(t) + V1(e) + "*$";
    return [
      new RegExp("^" + n),
      new RegExp(n)
    ];
  }
  function PO(l) {
    let t = l.map((r) => typeof r == "string" ? {
      label: r
    } : r), [e, n] = t.every((r) => /^\w+$/.test(r.label)) ? [
      /\w*$/,
      /\w+$/
    ] : FO(t);
    return (r) => {
      let a = r.matchBefore(n);
      return a || r.explicit ? {
        from: a ? a.from : r.pos,
        options: t,
        validFor: e
      } : null;
    };
  }
  class q1 {
    constructor(t, e, n, r) {
      this.completion = t, this.source = e, this.match = n, this.score = r;
    }
  }
  function Hl(l) {
    return l.selection.main.from;
  }
  function Gx(l, t) {
    var e;
    let { source: n } = l, r = t && n[0] != "^", a = n[n.length - 1] != "$";
    return !r && !a ? l : new RegExp(`${r ? "^" : ""}(?:${n})${a ? "$" : ""}`, (e = l.flags) !== null && e !== void 0 ? e : l.ignoreCase ? "i" : "");
  }
  const Xx = Ii.define();
  function IO(l, t, e, n) {
    let { main: r } = l.selection, a = e - r.from, c = n - r.from;
    return {
      ...l.changeByRange((f) => {
        if (f != r && e != n && l.sliceDoc(f.from + a, f.from + c) != l.sliceDoc(e, n)) return {
          range: f
        };
        let h = l.toText(t);
        return {
          changes: {
            from: f.from + a,
            to: n == r.from ? f.to : f.from + c,
            insert: h
          },
          range: K.cursor(f.from + a + h.length)
        };
      }),
      scrollIntoView: true,
      userEvent: "input.complete"
    };
  }
  const j1 = /* @__PURE__ */ new WeakMap();
  function $O(l) {
    if (!Array.isArray(l)) return l;
    let t = j1.get(l);
    return t || j1.set(l, t = PO(l)), t;
  }
  const ou = St.define(), Ma = St.define();
  class tD {
    constructor(t) {
      this.pattern = t, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
      for (let e = 0; e < t.length; ) {
        let n = Ze(t, e), r = Xi(n);
        this.chars.push(n);
        let a = t.slice(e, e + r), c = a.toUpperCase();
        this.folded.push(Ze(c == a ? a.toLowerCase() : c, 0)), e += r;
      }
      this.astral = t.length != this.chars.length;
    }
    ret(t, e) {
      return this.score = t, this.matched = e, this;
    }
    match(t) {
      if (this.pattern.length == 0) return this.ret(-100, []);
      if (t.length < this.pattern.length) return null;
      let { chars: e, folded: n, any: r, precise: a, byWord: c } = this;
      if (e.length == 1) {
        let j = Ze(t, 0), L = Xi(j), Q = L == t.length ? 0 : -100;
        if (j != e[0]) if (j == n[0]) Q += -200;
        else return null;
        return this.ret(Q, [
          0,
          L
        ]);
      }
      let f = t.indexOf(this.pattern);
      if (f == 0) return this.ret(t.length == this.pattern.length ? 0 : -100, [
        0,
        this.pattern.length
      ]);
      let h = e.length, g = 0;
      if (f < 0) {
        for (let j = 0, L = Math.min(t.length, 200); j < L && g < h; ) {
          let Q = Ze(t, j);
          (Q == e[g] || Q == n[g]) && (r[g++] = j), j += Xi(Q);
        }
        if (g < h) return null;
      }
      let p = 0, y = 0, v = false, S = 0, w = -1, A = -1, _ = /[a-z]/.test(t), T = true;
      for (let j = 0, L = Math.min(t.length, 200), Q = 0; j < L && y < h; ) {
        let N = Ze(t, j);
        f < 0 && (p < h && N == e[p] && (a[p++] = j), S < h && (N == e[S] || N == n[S] ? (S == 0 && (w = j), A = j + 1, S++) : S = 0));
        let G, V = N < 255 ? N >= 48 && N <= 57 || N >= 97 && N <= 122 ? 2 : N >= 65 && N <= 90 ? 1 : 0 : (G = Cm(N)) != G.toLowerCase() ? 1 : G != G.toUpperCase() ? 2 : 0;
        (!j || V == 1 && _ || Q == 0 && V != 0) && (e[y] == N || n[y] == N && (v = true) ? c[y++] = j : c.length && (T = false)), Q = V, j += Xi(N);
      }
      return y == h && c[0] == 0 && T ? this.result(-100 + (v ? -200 : 0), c, t) : S == h && w == 0 ? this.ret(-200 - t.length + (A == t.length ? 0 : -100), [
        0,
        A
      ]) : f > -1 ? this.ret(-700 - t.length, [
        f,
        f + this.pattern.length
      ]) : S == h ? this.ret(-900 - t.length, [
        w,
        A
      ]) : y == h ? this.result(-100 + (v ? -200 : 0) + -700 + (T ? 0 : -1100), c, t) : e.length == 2 ? null : this.result((r[0] ? -700 : 0) + -200 + -1100, r, t);
    }
    result(t, e, n) {
      let r = [], a = 0;
      for (let c of e) {
        let f = c + (this.astral ? Xi(Ze(n, c)) : 1);
        a && r[a - 1] == c ? r[a - 1] = f : (r[a++] = c, r[a++] = f);
      }
      return this.ret(t - n.length, r);
    }
  }
  class eD {
    constructor(t) {
      this.pattern = t, this.matched = [], this.score = 0, this.folded = t.toLowerCase();
    }
    match(t) {
      if (t.length < this.pattern.length) return null;
      let e = t.slice(0, this.pattern.length), n = e == this.pattern ? 0 : e.toLowerCase() == this.folded ? -200 : null;
      return n == null ? null : (this.matched = [
        0,
        e.length
      ], this.score = n + (t.length == this.pattern.length ? 0 : -100), this);
    }
  }
  const ye = et.define({
    combine(l) {
      return $i(l, {
        activateOnTyping: true,
        activateOnCompletion: () => false,
        activateOnTypingDelay: 100,
        selectOnOpen: true,
        override: null,
        closeOnBlur: true,
        maxRenderedOptions: 100,
        defaultKeymap: true,
        tooltipClass: () => "",
        optionClass: () => "",
        aboveCursor: false,
        icons: true,
        addToOptions: [],
        positionInfo: iD,
        filterStrict: false,
        compareCompletions: (t, e) => (t.sortText || t.label).localeCompare(e.sortText || e.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (t, e) => t && e,
        closeOnBlur: (t, e) => t && e,
        icons: (t, e) => t && e,
        tooltipClass: (t, e) => (n) => Y1(t(n), e(n)),
        optionClass: (t, e) => (n) => Y1(t(n), e(n)),
        addToOptions: (t, e) => t.concat(e),
        filterStrict: (t, e) => t || e
      });
    }
  });
  function Y1(l, t) {
    return l ? t ? l + " " + t : l : t;
  }
  function iD(l, t, e, n, r, a) {
    let c = l.textDirection == Jt.RTL, f = c, h = false, g = "top", p, y, v = t.left - r.left, S = r.right - t.right, w = n.right - n.left, A = n.bottom - n.top;
    if (f && v < Math.min(w, S) ? f = false : !f && S < Math.min(w, v) && (f = true), w <= (f ? v : S)) p = Math.max(r.top, Math.min(e.top, r.bottom - A)) - t.top, y = Math.min(400, f ? v : S);
    else {
      h = true, y = Math.min(400, (c ? t.right : r.right - t.left) - 30);
      let j = r.bottom - t.bottom;
      j >= A || j > t.top ? p = e.bottom - t.top : (g = "bottom", p = t.bottom - e.top);
    }
    let _ = (t.bottom - t.top) / a.offsetHeight, T = (t.right - t.left) / a.offsetWidth;
    return {
      style: `${g}: ${p / _}px; max-width: ${y / T}px`,
      class: "cm-completionInfo-" + (h ? c ? "left-narrow" : "right-narrow" : f ? "left" : "right")
    };
  }
  function nD(l) {
    let t = l.addToOptions.slice();
    return l.icons && t.push({
      render(e) {
        let n = document.createElement("div");
        return n.classList.add("cm-completionIcon"), e.type && n.classList.add(...e.type.split(/\s+/g).map((r) => "cm-completionIcon-" + r)), n.setAttribute("aria-hidden", "true"), n;
      },
      position: 20
    }), t.push({
      render(e, n, r, a) {
        let c = document.createElement("span");
        c.className = "cm-completionLabel";
        let f = e.displayLabel || e.label, h = 0;
        for (let g = 0; g < a.length; ) {
          let p = a[g++], y = a[g++];
          p > h && c.appendChild(document.createTextNode(f.slice(h, p)));
          let v = c.appendChild(document.createElement("span"));
          v.appendChild(document.createTextNode(f.slice(p, y))), v.className = "cm-completionMatchedText", h = y;
        }
        return h < f.length && c.appendChild(document.createTextNode(f.slice(h))), c;
      },
      position: 50
    }, {
      render(e) {
        if (!e.detail) return null;
        let n = document.createElement("span");
        return n.className = "cm-completionDetail", n.textContent = e.detail, n;
      },
      position: 80
    }), t.sort((e, n) => e.position - n.position).map((e) => e.render);
  }
  function Sd(l, t, e) {
    if (l <= e) return {
      from: 0,
      to: l
    };
    if (t < 0 && (t = 0), t <= l >> 1) {
      let r = Math.floor(t / e);
      return {
        from: r * e,
        to: (r + 1) * e
      };
    }
    let n = Math.floor((l - t) / e);
    return {
      from: l - (n + 1) * e,
      to: l - n * e
    };
  }
  class lD {
    constructor(t, e, n) {
      this.view = t, this.stateField = e, this.applyCompletion = n, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
        read: () => this.measureInfo(),
        write: (h) => this.placeInfo(h),
        key: this
      }, this.space = null, this.currentClass = "";
      let r = t.state.field(e), { options: a, selected: c } = r.open, f = t.state.facet(ye);
      this.optionContent = nD(f), this.optionClass = f.optionClass, this.tooltipClass = f.tooltipClass, this.range = Sd(a.length, c, f.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(t.state), this.dom.addEventListener("mousedown", (h) => {
        let { options: g } = t.state.field(e).open;
        for (let p = h.target, y; p && p != this.dom; p = p.parentNode) if (p.nodeName == "LI" && (y = /-(\d+)$/.exec(p.id)) && +y[1] < g.length) {
          this.applyCompletion(t, g[+y[1]]), h.preventDefault();
          return;
        }
      }), this.dom.addEventListener("focusout", (h) => {
        let g = t.state.field(this.stateField, false);
        g && g.tooltip && t.state.facet(ye).closeOnBlur && h.relatedTarget != t.contentDOM && t.dispatch({
          effects: Ma.of(null)
        });
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
        let { options: a, selected: c, disabled: f } = n.open;
        (!r.open || r.open.options != a) && (this.range = Sd(a.length, c, t.state.facet(ye).maxRenderedOptions), this.showOptions(a, n.id)), this.updateSel(), f != ((e = r.open) === null || e === void 0 ? void 0 : e.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!f);
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
      (e.selected > -1 && e.selected < this.range.from || e.selected >= this.range.to) && (this.range = Sd(e.options.length, e.selected, this.view.state.facet(ye).maxRenderedOptions), this.showOptions(e.options, t.id));
      let n = this.updateSelectedOption(e.selected);
      if (n) {
        this.destroyInfo();
        let { completion: r } = e.options[e.selected], { info: a } = r;
        if (!a) return;
        let c = typeof a == "string" ? document.createTextNode(a) : a(r);
        if (!c) return;
        "then" in c ? c.then((f) => {
          f && this.view.state.field(this.stateField, false) == t && this.addInfoPane(f, r);
        }).catch((f) => Je(this.view.state, f, "completion info")) : (this.addInfoPane(c, r), n.setAttribute("aria-describedby", this.info.id));
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
      return e && rD(this.list, e), e;
    }
    measureInfo() {
      let t = this.dom.querySelector("[aria-selected]");
      if (!t || !this.info) return null;
      let e = this.dom.getBoundingClientRect(), n = this.info.getBoundingClientRect(), r = t.getBoundingClientRect(), a = this.space;
      if (!a) {
        let c = this.dom.ownerDocument.documentElement;
        a = {
          left: 0,
          top: 0,
          right: c.clientWidth,
          bottom: c.clientHeight
        };
      }
      return r.top > Math.min(a.bottom, e.bottom) - 10 || r.bottom < Math.max(a.top, e.top) + 10 ? null : this.view.state.facet(ye).positionInfo(this.view, e, r, n, a, this.dom);
    }
    placeInfo(t) {
      this.info && (t ? (t.style && (this.info.style.cssText = t.style), this.info.className = "cm-tooltip cm-completionInfo " + (t.class || "")) : this.info.style.cssText = "top: -1e6px");
    }
    createListBox(t, e, n) {
      const r = document.createElement("ul");
      r.id = e, r.setAttribute("role", "listbox"), r.setAttribute("aria-expanded", "true"), r.setAttribute("aria-label", this.view.state.phrase("Completions")), r.addEventListener("mousedown", (c) => {
        c.target == r && c.preventDefault();
      });
      let a = null;
      for (let c = n.from; c < n.to; c++) {
        let { completion: f, match: h } = t[c], { section: g } = f;
        if (g) {
          let v = typeof g == "string" ? g : g.name;
          if (v != a && (c > n.from || n.from == 0)) if (a = v, typeof g != "string" && g.header) r.appendChild(g.header(g));
          else {
            let S = r.appendChild(document.createElement("completion-section"));
            S.textContent = v;
          }
        }
        const p = r.appendChild(document.createElement("li"));
        p.id = e + "-" + c, p.setAttribute("role", "option");
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
  function sD(l, t) {
    return (e) => new lD(e, l, t);
  }
  function rD(l, t) {
    let e = l.getBoundingClientRect(), n = t.getBoundingClientRect(), r = e.height / l.offsetHeight;
    n.top < e.top ? l.scrollTop -= (e.top - n.top) / r : n.bottom > e.bottom && (l.scrollTop += (n.bottom - e.bottom) / r);
  }
  function G1(l) {
    return (l.boost || 0) * 100 + (l.apply ? 10 : 0) + (l.info ? 5 : 0) + (l.type ? 1 : 0);
  }
  function aD(l, t) {
    let e = [], n = null, r = null, a = (p) => {
      e.push(p);
      let { section: y } = p.completion;
      if (y) {
        n || (n = []);
        let v = typeof y == "string" ? y : y.name;
        n.some((S) => S.name == v) || n.push(typeof y == "string" ? {
          name: v
        } : y);
      }
    }, c = t.facet(ye);
    for (let p of l) if (p.hasResult()) {
      let y = p.result.getMatch;
      if (p.result.filter === false) for (let v of p.result.options) a(new q1(v, p.source, y ? y(v) : [], 1e9 - e.length));
      else {
        let v = t.sliceDoc(p.from, p.to), S, w = c.filterStrict ? new eD(v) : new tD(v);
        for (let A of p.result.options) if (S = w.match(A.label)) {
          let _ = A.displayLabel ? y ? y(A, S.matched) : [] : S.matched, T = S.score + (A.boost || 0);
          if (a(new q1(A, p.source, _, T)), typeof A.section == "object" && A.section.rank === "dynamic") {
            let { name: j } = A.section;
            r || (r = /* @__PURE__ */ Object.create(null)), r[j] = Math.max(T, r[j] || -1e9);
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
    let f = [], h = null, g = c.compareCompletions;
    for (let p of e.sort((y, v) => v.score - y.score || g(y.completion, v.completion))) {
      let y = p.completion;
      !h || h.label != y.label || h.detail != y.detail || h.type != null && y.type != null && h.type != y.type || h.apply != y.apply || h.boost != y.boost ? f.push(p) : G1(p.completion) > G1(h) && (f[f.length - 1] = p), h = p.completion;
    }
    return f;
  }
  class Rs {
    constructor(t, e, n, r, a, c) {
      this.options = t, this.attrs = e, this.tooltip = n, this.timestamp = r, this.selected = a, this.disabled = c;
    }
    setSelected(t, e) {
      return t == this.selected || t >= this.options.length ? this : new Rs(this.options, X1(e, t), this.tooltip, this.timestamp, t, this.disabled);
    }
    static build(t, e, n, r, a, c) {
      if (r && !c && t.some((g) => g.isPending)) return r.setDisabled();
      let f = aD(t, e);
      if (!f.length) return r && t.some((g) => g.isPending) ? r.setDisabled() : null;
      let h = e.facet(ye).selectOnOpen ? 0 : -1;
      if (r && r.selected != h && r.selected != -1) {
        let g = r.options[r.selected].completion;
        for (let p = 0; p < f.length; p++) if (f[p].completion == g) {
          h = p;
          break;
        }
      }
      return new Rs(f, X1(n, h), {
        pos: t.reduce((g, p) => p.hasResult() ? Math.min(g, p.from) : g, 1e8),
        create: dD,
        above: a.aboveCursor
      }, r ? r.timestamp : Date.now(), h, false);
    }
    map(t) {
      return new Rs(this.options, this.attrs, {
        ...this.tooltip,
        pos: t.mapPos(this.tooltip.pos)
      }, this.timestamp, this.selected, this.disabled);
    }
    setDisabled() {
      return new Rs(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, true);
    }
  }
  class cu {
    constructor(t, e, n) {
      this.active = t, this.id = e, this.open = n;
    }
    static start() {
      return new cu(fD, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
    }
    update(t) {
      let { state: e } = t, n = e.facet(ye), a = (n.override || e.languageDataAt("autocomplete", Hl(e)).map($O)).map((h) => (this.active.find((p) => p.source == h) || new wi(h, this.active.some((p) => p.state != 0) ? 1 : 0)).update(t, n));
      a.length == this.active.length && a.every((h, g) => h == this.active[g]) && (a = this.active);
      let c = this.open, f = t.effects.some((h) => h.is(Pm));
      c && t.docChanged && (c = c.map(t.changes)), t.selection || a.some((h) => h.hasResult() && t.changes.touchesRange(h.from, h.to)) || !oD(a, this.active) || f ? c = Rs.build(a, e, this.id, c, n, f) : c && c.disabled && !a.some((h) => h.isPending) && (c = null), !c && a.every((h) => !h.isPending) && a.some((h) => h.hasResult()) && (a = a.map((h) => h.hasResult() ? new wi(h.source, 0) : h));
      for (let h of t.effects) h.is(Qx) && (c = c && c.setSelected(h.value, this.id));
      return a == this.active && c == this.open ? this : new cu(a, this.id, c);
    }
    get tooltip() {
      return this.open ? this.open.tooltip : null;
    }
    get attrs() {
      return this.open ? this.open.attrs : this.active.length ? cD : uD;
    }
  }
  function oD(l, t) {
    if (l == t) return true;
    for (let e = 0, n = 0; ; ) {
      for (; e < l.length && !l[e].hasResult(); ) e++;
      for (; n < t.length && !t[n].hasResult(); ) n++;
      let r = e == l.length, a = n == t.length;
      if (r || a) return r == a;
      if (l[e++].result != t[n++].result) return false;
    }
  }
  const cD = {
    "aria-autocomplete": "list"
  }, uD = {};
  function X1(l, t) {
    let e = {
      "aria-autocomplete": "list",
      "aria-haspopup": "listbox",
      "aria-controls": l
    };
    return t > -1 && (e["aria-activedescendant"] = l + "-" + t), e;
  }
  const fD = [];
  function Kx(l, t) {
    if (l.isUserEvent("input.complete")) {
      let n = l.annotation(Xx);
      if (n && t.activateOnCompletion(n)) return 12;
    }
    let e = l.isUserEvent("input.type");
    return e && t.activateOnTyping ? 5 : e ? 1 : l.isUserEvent("delete.backward") ? 2 : l.selection ? 8 : l.docChanged ? 16 : 0;
  }
  class wi {
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
      let n = Kx(t, e), r = this;
      (n & 8 || n & 16 && this.touches(t)) && (r = new wi(r.source, 0)), n & 4 && r.state == 0 && (r = new wi(this.source, 1)), r = r.updateFor(t, n);
      for (let a of t.effects) if (a.is(ou)) r = new wi(r.source, 1, a.value);
      else if (a.is(Ma)) r = new wi(r.source, 0);
      else if (a.is(Pm)) for (let c of a.value) c.source == r.source && (r = c);
      return r;
    }
    updateFor(t, e) {
      return this.map(t.changes);
    }
    map(t) {
      return this;
    }
    touches(t) {
      return t.changes.touchesRange(Hl(t.state));
    }
  }
  class Vs extends wi {
    constructor(t, e, n, r, a, c) {
      super(t, 3, e), this.limit = n, this.result = r, this.from = a, this.to = c;
    }
    hasResult() {
      return true;
    }
    updateFor(t, e) {
      var n;
      if (!(e & 3)) return this.map(t.changes);
      let r = this.result;
      r.map && !t.changes.empty && (r = r.map(r, t.changes));
      let a = t.changes.mapPos(this.from), c = t.changes.mapPos(this.to, 1), f = Hl(t.state);
      if (f > c || !r || e & 2 && (Hl(t.startState) == this.from || f < this.limit)) return new wi(this.source, e & 4 ? 1 : 0);
      let h = t.changes.mapPos(this.limit);
      return hD(r.validFor, t.state, a, c) ? new Vs(this.source, this.explicit, h, r, a, c) : r.update && (r = r.update(r, a, c, new Yx(t.state, f, false))) ? new Vs(this.source, this.explicit, h, r, r.from, (n = r.to) !== null && n !== void 0 ? n : Hl(t.state)) : new wi(this.source, 1, this.explicit);
    }
    map(t) {
      return t.empty ? this : (this.result.map ? this.result.map(this.result, t) : this.result) ? new Vs(this.source, this.explicit, t.mapPos(this.limit), this.result, t.mapPos(this.from), t.mapPos(this.to, 1)) : new wi(this.source, 0);
    }
    touches(t) {
      return t.changes.touchesRange(this.from, this.to);
    }
  }
  function hD(l, t, e, n) {
    if (!l) return false;
    let r = t.sliceDoc(e, n);
    return typeof l == "function" ? l(r, e, n, t) : Gx(l, true).test(r);
  }
  const Pm = St.define({
    map(l, t) {
      return l.map((e) => e.map(t));
    }
  }), Qx = St.define(), We = ke.define({
    create() {
      return cu.start();
    },
    update(l, t) {
      return l.update(t);
    },
    provide: (l) => [
      Um.from(l, (t) => t.tooltip),
      P.contentAttributes.from(l, (t) => t.attrs)
    ]
  });
  function Im(l, t) {
    const e = t.completion.apply || t.completion.label;
    let n = l.state.field(We).active.find((r) => r.source == t.source);
    return n instanceof Vs ? (typeof e == "string" ? l.dispatch({
      ...IO(l.state, e, n.from, n.to),
      annotations: Xx.of(t.completion)
    }) : e(l, t.completion, n.from, n.to), true) : false;
  }
  const dD = sD(We, Im);
  function _c(l, t = "option") {
    return (e) => {
      let n = e.state.field(We, false);
      if (!n || !n.open || n.open.disabled || Date.now() - n.open.timestamp < e.state.facet(ye).interactionDelay) return false;
      let r = 1, a;
      t == "page" && (a = ES(e, n.open.tooltip)) && (r = Math.max(2, Math.floor(a.dom.offsetHeight / a.dom.querySelector("li").offsetHeight) - 1));
      let { length: c } = n.open.options, f = n.open.selected > -1 ? n.open.selected + r * (l ? 1 : -1) : l ? 0 : c - 1;
      return f < 0 ? f = t == "page" ? 0 : c - 1 : f >= c && (f = t == "page" ? c - 1 : 0), e.dispatch({
        effects: Qx.of(f)
      }), true;
    };
  }
  const mD = (l) => {
    let t = l.state.field(We, false);
    return l.state.readOnly || !t || !t.open || t.open.selected < 0 || t.open.disabled || Date.now() - t.open.timestamp < l.state.facet(ye).interactionDelay ? false : Im(l, t.open.options[t.open.selected]);
  }, xd = (l) => l.state.field(We, false) ? (l.dispatch({
    effects: ou.of(true)
  }), true) : false, gD = (l) => {
    let t = l.state.field(We, false);
    return !t || !t.active.some((e) => e.state != 0) ? false : (l.dispatch({
      effects: Ma.of(null)
    }), true);
  };
  class pD {
    constructor(t, e) {
      this.active = t, this.context = e, this.time = Date.now(), this.updates = [], this.done = void 0;
    }
  }
  const yD = 50, bD = 1e3, vD = ee.fromClass(class {
    constructor(l) {
      this.view = l, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = false, this.composing = 0;
      for (let t of l.state.field(We).active) t.isPending && this.startQuery(t);
    }
    update(l) {
      let t = l.state.field(We), e = l.state.facet(ye);
      if (!l.selectionSet && !l.docChanged && l.startState.field(We) == t) return;
      let n = l.transactions.some((a) => {
        let c = Kx(a, e);
        return c & 8 || (a.selection || a.docChanged) && !(c & 3);
      });
      for (let a = 0; a < this.running.length; a++) {
        let c = this.running[a];
        if (n || c.context.abortOnDocChange && l.docChanged || c.updates.length + l.transactions.length > yD && Date.now() - c.time > bD) {
          for (let f of c.context.abortListeners) try {
            f();
          } catch (h) {
            Je(this.view.state, h);
          }
          c.context.abortListeners = null, this.running.splice(a--, 1);
        } else c.updates.push(...l.transactions);
      }
      this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), l.transactions.some((a) => a.effects.some((c) => c.is(ou))) && (this.pendingStart = true);
      let r = this.pendingStart ? 50 : e.activateOnTypingDelay;
      if (this.debounceUpdate = t.active.some((a) => a.isPending && !this.running.some((c) => c.active.source == a.source)) ? setTimeout(() => this.startUpdate(), r) : -1, this.composing != 0) for (let a of l.transactions) a.isUserEvent("input.type") ? this.composing = 2 : this.composing == 2 && a.selection && (this.composing = 3);
    }
    startUpdate() {
      this.debounceUpdate = -1, this.pendingStart = false;
      let { state: l } = this.view, t = l.field(We);
      for (let e of t.active) e.isPending && !this.running.some((n) => n.active.source == e.source) && this.startQuery(e);
      this.running.length && t.open && t.open.disabled && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(ye).updateSyncTime));
    }
    startQuery(l) {
      let { state: t } = this.view, e = Hl(t), n = new Yx(t, e, l.explicit, this.view), r = new pD(l, n);
      this.running.push(r), Promise.resolve(l.source(n)).then((a) => {
        r.context.aborted || (r.done = a || null, this.scheduleAccept());
      }, (a) => {
        this.view.dispatch({
          effects: Ma.of(null)
        }), Je(this.view.state, a);
      });
    }
    scheduleAccept() {
      this.running.every((l) => l.done !== void 0) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(ye).updateSyncTime));
    }
    accept() {
      var l;
      this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
      let t = [], e = this.view.state.facet(ye), n = this.view.state.field(We);
      for (let r = 0; r < this.running.length; r++) {
        let a = this.running[r];
        if (a.done === void 0) continue;
        if (this.running.splice(r--, 1), a.done) {
          let f = Hl(a.updates.length ? a.updates[0].startState : this.view.state), h = Math.min(f, a.done.from + (a.active.explicit ? 0 : 1)), g = new Vs(a.active.source, a.active.explicit, h, a.done, a.done.from, (l = a.done.to) !== null && l !== void 0 ? l : f);
          for (let p of a.updates) g = g.update(p, e);
          if (g.hasResult()) {
            t.push(g);
            continue;
          }
        }
        let c = n.active.find((f) => f.source == a.active.source);
        if (c && c.isPending) if (a.done == null) {
          let f = new wi(a.active.source, 0);
          for (let h of a.updates) f = f.update(h, e);
          f.isPending || t.push(f);
        } else this.startQuery(c);
      }
      (t.length || n.open && n.open.disabled) && this.view.dispatch({
        effects: Pm.of(t)
      });
    }
  }, {
    eventHandlers: {
      blur(l) {
        let t = this.view.state.field(We, false);
        if (t && t.tooltip && this.view.state.facet(ye).closeOnBlur) {
          let e = t.open && ES(this.view, t.open.tooltip);
          (!e || !e.dom.contains(l.relatedTarget)) && setTimeout(() => this.view.dispatch({
            effects: Ma.of(null)
          }), 10);
        }
      },
      compositionstart() {
        this.composing = 1;
      },
      compositionend() {
        this.composing == 3 && setTimeout(() => this.view.dispatch({
          effects: ou.of(false)
        }), 20), this.composing = 0;
      }
    }
  }), SD = typeof navigator == "object" && /Win/.test(navigator.platform), xD = Gl.highest(P.domEventHandlers({
    keydown(l, t) {
      let e = t.state.field(We, false);
      if (!e || !e.open || e.open.disabled || e.open.selected < 0 || l.key.length > 1 || l.ctrlKey && !(SD && l.altKey) || l.metaKey) return false;
      let n = e.open.options[e.open.selected], r = e.active.find((c) => c.source == n.source), a = n.completion.commitCharacters || r.result.commitCharacters;
      return a && a.indexOf(l.key) > -1 && Im(t, n), false;
    }
  })), wD = P.baseTheme({
    ".cm-tooltip.cm-tooltip-autocomplete": {
      "& > ul": {
        fontFamily: "monospace",
        whiteSpace: "nowrap",
        overflow: "hidden auto",
        maxWidth_fallback: "700px",
        maxWidth: "min(700px, 95vw)",
        minWidth: "250px",
        maxHeight: "10em",
        height: "100%",
        listStyle: "none",
        margin: 0,
        padding: 0,
        "& > li, & > completion-section": {
          padding: "1px 3px",
          lineHeight: 1.2
        },
        "& > li": {
          overflowX: "hidden",
          textOverflow: "ellipsis",
          cursor: "pointer"
        },
        "& > completion-section": {
          display: "list-item",
          borderBottom: "1px solid silver",
          paddingLeft: "0.5em",
          opacity: 0.7
        }
      }
    },
    "&light .cm-tooltip-autocomplete ul li[aria-selected]": {
      background: "#17c",
      color: "white"
    },
    "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
      background: "#777"
    },
    "&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
      background: "#347",
      color: "white"
    },
    "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
      background: "#444"
    },
    ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
      content: '"\xB7\xB7\xB7"',
      opacity: 0.5,
      display: "block",
      textAlign: "center"
    },
    ".cm-tooltip.cm-completionInfo": {
      position: "absolute",
      padding: "3px 9px",
      width: "max-content",
      maxWidth: "400px",
      boxSizing: "border-box",
      whiteSpace: "pre-line"
    },
    ".cm-completionInfo.cm-completionInfo-left": {
      right: "100%"
    },
    ".cm-completionInfo.cm-completionInfo-right": {
      left: "100%"
    },
    ".cm-completionInfo.cm-completionInfo-left-narrow": {
      right: "30px"
    },
    ".cm-completionInfo.cm-completionInfo-right-narrow": {
      left: "30px"
    },
    "&light .cm-snippetField": {
      backgroundColor: "#00000022"
    },
    "&dark .cm-snippetField": {
      backgroundColor: "#ffffff22"
    },
    ".cm-snippetFieldPosition": {
      verticalAlign: "text-top",
      width: 0,
      height: "1.15em",
      display: "inline-block",
      margin: "0 -0.7px -.7em",
      borderLeft: "1.4px dotted #888"
    },
    ".cm-completionMatchedText": {
      textDecoration: "underline"
    },
    ".cm-completionDetail": {
      marginLeft: "0.5em",
      fontStyle: "italic"
    },
    ".cm-completionIcon": {
      fontSize: "90%",
      width: ".8em",
      display: "inline-block",
      textAlign: "center",
      paddingRight: ".6em",
      opacity: "0.6",
      boxSizing: "content-box"
    },
    ".cm-completionIcon-function, .cm-completionIcon-method": {
      "&:after": {
        content: "'\u0192'"
      }
    },
    ".cm-completionIcon-class": {
      "&:after": {
        content: "'\u25CB'"
      }
    },
    ".cm-completionIcon-interface": {
      "&:after": {
        content: "'\u25CC'"
      }
    },
    ".cm-completionIcon-variable": {
      "&:after": {
        content: "'\u{1D465}'"
      }
    },
    ".cm-completionIcon-constant": {
      "&:after": {
        content: "'\u{1D436}'"
      }
    },
    ".cm-completionIcon-type": {
      "&:after": {
        content: "'\u{1D461}'"
      }
    },
    ".cm-completionIcon-enum": {
      "&:after": {
        content: "'\u222A'"
      }
    },
    ".cm-completionIcon-property": {
      "&:after": {
        content: "'\u25A1'"
      }
    },
    ".cm-completionIcon-keyword": {
      "&:after": {
        content: "'\u{1F511}\uFE0E'"
      }
    },
    ".cm-completionIcon-namespace": {
      "&:after": {
        content: "'\u25A2'"
      }
    },
    ".cm-completionIcon-text": {
      "&:after": {
        content: "'abc'",
        fontSize: "50%",
        verticalAlign: "middle"
      }
    }
  }), _a = {
    brackets: [
      "(",
      "[",
      "{",
      "'",
      '"'
    ],
    before: ")]}:;>",
    stringPrefixes: []
  }, Nl = St.define({
    map(l, t) {
      let e = t.mapPos(l, -1, He.TrackAfter);
      return e ?? void 0;
    }
  }), $m = new class extends Ul {
  }();
  $m.startSide = 1;
  $m.endSide = -1;
  const Zx = ke.define({
    create() {
      return Bt.empty;
    },
    update(l, t) {
      if (l = l.map(t.changes), t.selection) {
        let e = t.state.doc.lineAt(t.selection.main.head);
        l = l.update({
          filter: (n) => n >= e.from && n <= e.to
        });
      }
      for (let e of t.effects) e.is(Nl) && (l = l.update({
        add: [
          $m.range(e.value, e.value + 1)
        ]
      }));
      return l;
    }
  });
  function AD() {
    return [
      MD,
      Zx
    ];
  }
  const wd = "()[]{}<>\xAB\xBB\xBB\xAB\uFF3B\uFF3D\uFF5B\uFF5D";
  function Wx(l) {
    for (let t = 0; t < wd.length; t += 2) if (wd.charCodeAt(t) == l) return wd.charAt(t + 1);
    return Cm(l < 128 ? l : l + 1);
  }
  function Jx(l, t) {
    return l.languageDataAt("closeBrackets", t)[0] || _a;
  }
  const CD = typeof navigator == "object" && /Android\b/.test(navigator.userAgent), MD = P.inputHandler.of((l, t, e, n) => {
    if ((CD ? l.composing : l.compositionStarted) || l.state.readOnly) return false;
    let r = l.state.selection.main;
    if (n.length > 2 || n.length == 2 && Xi(Ze(n, 0)) == 1 || t != r.from || e != r.to) return false;
    let a = TD(l.state, n);
    return a ? (l.dispatch(a), true) : false;
  }), _D = ({ state: l, dispatch: t }) => {
    if (l.readOnly) return false;
    let n = Jx(l, l.selection.main.head).brackets || _a.brackets, r = null, a = l.changeByRange((c) => {
      if (c.empty) {
        let f = OD(l.doc, c.head);
        for (let h of n) if (h == f && Au(l.doc, c.head) == Wx(Ze(h, 0))) return {
          changes: {
            from: c.head - h.length,
            to: c.head + h.length
          },
          range: K.cursor(c.head - h.length)
        };
      }
      return {
        range: r = c
      };
    });
    return r || t(l.update(a, {
      scrollIntoView: true,
      userEvent: "delete.backward"
    })), !r;
  }, kD = [
    {
      key: "Backspace",
      run: _D
    }
  ];
  function TD(l, t) {
    let e = Jx(l, l.selection.main.head), n = e.brackets || _a.brackets;
    for (let r of n) {
      let a = Wx(Ze(r, 0));
      if (t == r) return a == r ? BD(l, r, n.indexOf(r + r + r) > -1, e) : DD(l, r, a, e.before || _a.before);
      if (t == a && Fx(l, l.selection.main.from)) return ED(l, r, a);
    }
    return null;
  }
  function Fx(l, t) {
    let e = false;
    return l.field(Zx).between(0, l.doc.length, (n) => {
      n == t && (e = true);
    }), e;
  }
  function Au(l, t) {
    let e = l.sliceString(t, t + 2);
    return e.slice(0, Xi(Ze(e, 0)));
  }
  function OD(l, t) {
    let e = l.sliceString(t - 2, t);
    return Xi(Ze(e, 0)) == e.length ? e : e.slice(1);
  }
  function DD(l, t, e, n) {
    let r = null, a = l.changeByRange((c) => {
      if (!c.empty) return {
        changes: [
          {
            insert: t,
            from: c.from
          },
          {
            insert: e,
            from: c.to
          }
        ],
        effects: Nl.of(c.to + t.length),
        range: K.range(c.anchor + t.length, c.head + t.length)
      };
      let f = Au(l.doc, c.head);
      return !f || /\s/.test(f) || n.indexOf(f) > -1 ? {
        changes: {
          insert: t + e,
          from: c.head
        },
        effects: Nl.of(c.head + t.length),
        range: K.cursor(c.head + t.length)
      } : {
        range: r = c
      };
    });
    return r ? null : l.update(a, {
      scrollIntoView: true,
      userEvent: "input.type"
    });
  }
  function ED(l, t, e) {
    let n = null, r = l.changeByRange((a) => a.empty && Au(l.doc, a.head) == e ? {
      changes: {
        from: a.head,
        to: a.head + e.length,
        insert: e
      },
      range: K.cursor(a.head + e.length)
    } : n = {
      range: a
    });
    return n ? null : l.update(r, {
      scrollIntoView: true,
      userEvent: "input.type"
    });
  }
  function BD(l, t, e, n) {
    let r = n.stringPrefixes || _a.stringPrefixes, a = null, c = l.changeByRange((f) => {
      if (!f.empty) return {
        changes: [
          {
            insert: t,
            from: f.from
          },
          {
            insert: t,
            from: f.to
          }
        ],
        effects: Nl.of(f.to + t.length),
        range: K.range(f.anchor + t.length, f.head + t.length)
      };
      let h = f.head, g = Au(l.doc, h), p;
      if (g == t) {
        if (K1(l, h)) return {
          changes: {
            insert: t + t,
            from: h
          },
          effects: Nl.of(h + t.length),
          range: K.cursor(h + t.length)
        };
        if (Fx(l, h)) {
          let v = e && l.sliceDoc(h, h + t.length * 3) == t + t + t ? t + t + t : t;
          return {
            changes: {
              from: h,
              to: h + v.length,
              insert: v
            },
            range: K.cursor(h + v.length)
          };
        }
      } else {
        if (e && l.sliceDoc(h - 2 * t.length, h) == t + t && (p = Q1(l, h - 2 * t.length, r)) > -1 && K1(l, p)) return {
          changes: {
            insert: t + t + t + t,
            from: h
          },
          effects: Nl.of(h + t.length),
          range: K.cursor(h + t.length)
        };
        if (l.charCategorizer(h)(g) != It.Word && Q1(l, h, r) > -1 && !RD(l, h, t, r)) return {
          changes: {
            insert: t + t,
            from: h
          },
          effects: Nl.of(h + t.length),
          range: K.cursor(h + t.length)
        };
      }
      return {
        range: a = f
      };
    });
    return a ? null : l.update(c, {
      scrollIntoView: true,
      userEvent: "input.type"
    });
  }
  function K1(l, t) {
    let e = Be(l).resolveInner(t + 1);
    return e.parent && e.from == t;
  }
  function RD(l, t, e, n) {
    let r = Be(l).resolveInner(t, -1), a = n.reduce((c, f) => Math.max(c, f.length), 0);
    for (let c = 0; c < 5; c++) {
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
  function Q1(l, t, e) {
    let n = l.charCategorizer(t);
    if (n(l.sliceDoc(t - 1, t)) != It.Word) return t;
    for (let r of e) {
      let a = t - r.length;
      if (l.sliceDoc(a, t) == r && n(l.sliceDoc(a - 1, a)) != It.Word) return a;
    }
    return -1;
  }
  function zD(l = {}) {
    return [
      xD,
      We,
      ye.of(l),
      vD,
      ND,
      wD
    ];
  }
  const Px = [
    {
      key: "Ctrl-Space",
      run: xd
    },
    {
      mac: "Alt-`",
      run: xd
    },
    {
      mac: "Alt-i",
      run: xd
    },
    {
      key: "Escape",
      run: gD
    },
    {
      key: "ArrowDown",
      run: _c(true)
    },
    {
      key: "ArrowUp",
      run: _c(false)
    },
    {
      key: "PageDown",
      run: _c(true, "page")
    },
    {
      key: "PageUp",
      run: _c(false, "page")
    },
    {
      key: "Enter",
      run: mD
    }
  ], ND = Gl.highest(mu.computeN([
    ye
  ], (l) => l.facet(ye).defaultKeymap ? [
    Px
  ] : []));
  class Z1 {
    constructor(t, e, n) {
      this.from = t, this.to = e, this.diagnostic = n;
    }
  }
  class Rl {
    constructor(t, e, n) {
      this.diagnostics = t, this.panel = e, this.selected = n;
    }
    static init(t, e, n) {
      let r = n.facet(ka).markerFilter;
      r && (t = r(t, n));
      let a = t.slice().sort((S, w) => S.from - w.from || S.to - w.to), c = new wn(), f = [], h = 0, g = n.doc.iter(), p = 0, y = n.doc.length;
      for (let S = 0; ; ) {
        let w = S == a.length ? null : a[S];
        if (!w && !f.length) break;
        let A, _;
        if (f.length) A = h, _ = f.reduce((L, Q) => Math.min(L, Q.to), w && w.from > A ? w.from : 1e8);
        else {
          if (A = w.from, A > y) break;
          _ = w.to, f.push(w), S++;
        }
        for (; S < a.length; ) {
          let L = a[S];
          if (L.from == A && (L.to > L.from || L.to == A)) f.push(L), S++, _ = Math.min(L.to, _);
          else {
            _ = Math.min(L.from, _);
            break;
          }
        }
        _ = Math.min(_, y);
        let T = false;
        if (f.some((L) => L.from == A && (L.to == _ || _ == y)) && (T = A == _, !T && _ - A < 10)) {
          let L = A - (p + g.value.length);
          L > 0 && (g.next(L), p = A);
          for (let Q = A; ; ) {
            if (Q >= _) {
              T = true;
              break;
            }
            if (!g.lineBreak && p + g.value.length > Q) break;
            Q = p + g.value.length, p += g.value.length, g.next();
          }
        }
        let j = WD(f);
        if (T) c.add(A, A, ct.widget({
          widget: new XD(j),
          diagnostics: f.slice()
        }));
        else {
          let L = f.reduce((Q, N) => N.markClass ? Q + " " + N.markClass : Q, "");
          c.add(A, _, ct.mark({
            class: "cm-lintRange cm-lintRange-" + j + L,
            diagnostics: f.slice(),
            inclusiveEnd: f.some((Q) => Q.to > _)
          }));
        }
        if (h = _, h == y) break;
        for (let L = 0; L < f.length; L++) f[L].to <= h && f.splice(L--, 1);
      }
      let v = c.finish();
      return new Rl(v, e, Fs(v));
    }
  }
  function Fs(l, t = null, e = 0) {
    let n = null;
    return l.between(e, 1e9, (r, a, { spec: c }) => {
      if (!(t && c.diagnostics.indexOf(t) < 0)) if (!n) n = new Z1(r, a, t || c.diagnostics[0]);
      else {
        if (c.diagnostics.indexOf(n.diagnostic) < 0) return false;
        n = new Z1(n.from, a, n.diagnostic);
      }
    }), n;
  }
  function LD(l, t) {
    let e = t.pos, n = t.end || e, r = l.state.facet(ka).hideOn(l, e, n);
    if (r != null) return r;
    let a = l.startState.doc.lineAt(t.pos);
    return !!(l.effects.some((c) => c.is(Ix)) || l.changes.touchesRange(a.from, Math.max(a.to, n)));
  }
  function HD(l, t) {
    return l.field(ci, false) ? t : t.concat(St.appendConfig.of(JD));
  }
  const Ix = St.define(), tg = St.define(), $x = St.define(), ci = ke.define({
    create() {
      return new Rl(ct.none, null, null);
    },
    update(l, t) {
      if (t.docChanged && l.diagnostics.size) {
        let e = l.diagnostics.map(t.changes), n = null, r = l.panel;
        if (l.selected) {
          let a = t.changes.mapPos(l.selected.from, 1);
          n = Fs(e, l.selected.diagnostic, a) || Fs(e, null, a);
        }
        !e.size && r && t.state.facet(ka).autoPanel && (r = null), l = new Rl(e, r, n);
      }
      for (let e of t.effects) if (e.is(Ix)) {
        let n = t.state.facet(ka).autoPanel ? e.value.length ? Ta.open : null : l.panel;
        l = Rl.init(e.value, n, t.state);
      } else e.is(tg) ? l = new Rl(l.diagnostics, e.value ? Ta.open : null, l.selected) : e.is($x) && (l = new Rl(l.diagnostics, l.panel, e.value));
      return l;
    },
    provide: (l) => [
      Sa.from(l, (t) => t.panel),
      P.decorations.from(l, (t) => t.diagnostics)
    ]
  }), UD = ct.mark({
    class: "cm-lintRange cm-lintRange-active"
  });
  function VD(l, t, e) {
    let { diagnostics: n } = l.state.field(ci), r, a = -1, c = -1;
    n.between(t - (e < 0 ? 1 : 0), t + (e > 0 ? 1 : 0), (h, g, { spec: p }) => {
      if (t >= h && t <= g && (h == g || (t > h || e > 0) && (t < g || e < 0))) return r = p.diagnostics, a = h, c = g, false;
    });
    let f = l.state.facet(ka).tooltipFilter;
    return r && f && (r = f(r, l.state)), r ? {
      pos: a,
      end: c,
      above: l.state.doc.lineAt(a).to < c,
      create() {
        return {
          dom: qD(l, r)
        };
      }
    } : null;
  }
  function qD(l, t) {
    return Xt("ul", {
      class: "cm-tooltip-lint"
    }, t.map((e) => e2(l, e, false)));
  }
  const jD = (l) => {
    let t = l.state.field(ci, false);
    (!t || !t.panel) && l.dispatch({
      effects: HD(l.state, [
        tg.of(true)
      ])
    });
    let e = va(l, Ta.open);
    return e && e.dom.querySelector(".cm-panel-lint ul").focus(), true;
  }, W1 = (l) => {
    let t = l.state.field(ci, false);
    return !t || !t.panel ? false : (l.dispatch({
      effects: tg.of(false)
    }), true);
  }, YD = (l) => {
    let t = l.state.field(ci, false);
    if (!t) return false;
    let e = l.state.selection.main, n = t.diagnostics.iter(e.to + 1);
    return !n.value && (n = t.diagnostics.iter(0), !n.value || n.from == e.from && n.to == e.to) ? false : (l.dispatch({
      selection: {
        anchor: n.from,
        head: n.to
      },
      scrollIntoView: true
    }), true);
  }, GD = [
    {
      key: "Mod-Shift-m",
      run: jD,
      preventDefault: true
    },
    {
      key: "F8",
      run: YD
    }
  ], ka = et.define({
    combine(l) {
      return {
        sources: l.map((t) => t.source).filter((t) => t != null),
        ...$i(l.map((t) => t.config), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: J1,
          tooltipFilter: J1,
          needsRefresh: (t, e) => t ? e ? (n) => t(n) || e(n) : t : e,
          hideOn: (t, e) => t ? e ? (n, r, a) => t(n, r, a) || e(n, r, a) : t : e,
          autoPanel: (t, e) => t || e
        })
      };
    }
  });
  function J1(l, t) {
    return l ? t ? (e, n) => t(l(e, n), n) : l : t;
  }
  function t2(l) {
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
  function e2(l, t, e) {
    var n;
    let r = e ? t2(t.actions) : [];
    return Xt("li", {
      class: "cm-diagnostic cm-diagnostic-" + t.severity
    }, Xt("span", {
      class: "cm-diagnosticText"
    }, t.renderMessage ? t.renderMessage(l) : t.message), (n = t.actions) === null || n === void 0 ? void 0 : n.map((a, c) => {
      let f = false, h = (S) => {
        if (S.preventDefault(), f) return;
        f = true;
        let w = Fs(l.state.field(ci).diagnostics, t);
        w && a.apply(l, w.from, w.to);
      }, { name: g } = a, p = r[c] ? g.indexOf(r[c]) : -1, y = p < 0 ? g : [
        g.slice(0, p),
        Xt("u", g.slice(p, p + 1)),
        g.slice(p + 1)
      ], v = a.markClass ? " " + a.markClass : "";
      return Xt("button", {
        type: "button",
        class: "cm-diagnosticAction" + v,
        onclick: h,
        onmousedown: h,
        "aria-label": ` Action: ${g}${p < 0 ? "" : ` (access key "${r[c]})"`}.`
      }, y);
    }), t.source && Xt("div", {
      class: "cm-diagnosticSource"
    }, t.source));
  }
  class XD extends Mn {
    constructor(t) {
      super(), this.sev = t;
    }
    eq(t) {
      return t.sev == this.sev;
    }
    toDOM() {
      return Xt("span", {
        class: "cm-lintPoint cm-lintPoint-" + this.sev
      });
    }
  }
  class F1 {
    constructor(t, e) {
      this.diagnostic = e, this.id = "item_" + Math.floor(Math.random() * 4294967295).toString(16), this.dom = e2(t, e, true), this.dom.id = this.id, this.dom.setAttribute("role", "option");
    }
  }
  class Ta {
    constructor(t) {
      this.view = t, this.items = [];
      let e = (r) => {
        if (r.keyCode == 27) W1(this.view), this.view.focus();
        else if (r.keyCode == 38 || r.keyCode == 33) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
        else if (r.keyCode == 40 || r.keyCode == 34) this.moveSelection((this.selectedIndex + 1) % this.items.length);
        else if (r.keyCode == 36) this.moveSelection(0);
        else if (r.keyCode == 35) this.moveSelection(this.items.length - 1);
        else if (r.keyCode == 13) this.view.focus();
        else if (r.keyCode >= 65 && r.keyCode <= 90 && this.selectedIndex >= 0) {
          let { diagnostic: a } = this.items[this.selectedIndex], c = t2(a.actions);
          for (let f = 0; f < c.length; f++) if (c[f].toUpperCase().charCodeAt(0) == r.keyCode) {
            let h = Fs(this.view.state.field(ci).diagnostics, a);
            h && a.actions[f].apply(t, h.from, h.to);
          }
        } else return;
        r.preventDefault();
      }, n = (r) => {
        for (let a = 0; a < this.items.length; a++) this.items[a].dom.contains(r.target) && this.moveSelection(a);
      };
      this.list = Xt("ul", {
        tabIndex: 0,
        role: "listbox",
        "aria-label": this.view.state.phrase("Diagnostics"),
        onkeydown: e,
        onclick: n
      }), this.dom = Xt("div", {
        class: "cm-panel-lint"
      }, this.list, Xt("button", {
        type: "button",
        name: "close",
        "aria-label": this.view.state.phrase("close"),
        onclick: () => W1(this.view)
      }, "\xD7")), this.update();
    }
    get selectedIndex() {
      let t = this.view.state.field(ci).selected;
      if (!t) return -1;
      for (let e = 0; e < this.items.length; e++) if (this.items[e].diagnostic == t.diagnostic) return e;
      return -1;
    }
    update() {
      let { diagnostics: t, selected: e } = this.view.state.field(ci), n = 0, r = false, a = null, c = /* @__PURE__ */ new Set();
      for (t.between(0, this.view.state.doc.length, (f, h, { spec: g }) => {
        for (let p of g.diagnostics) {
          if (c.has(p)) continue;
          c.add(p);
          let y = -1, v;
          for (let S = n; S < this.items.length; S++) if (this.items[S].diagnostic == p) {
            y = S;
            break;
          }
          y < 0 ? (v = new F1(this.view, p), this.items.splice(n, 0, v), r = true) : (v = this.items[y], y > n && (this.items.splice(n, y - n), r = true)), e && v.diagnostic == e.diagnostic ? v.dom.hasAttribute("aria-selected") || (v.dom.setAttribute("aria-selected", "true"), a = v) : v.dom.hasAttribute("aria-selected") && v.dom.removeAttribute("aria-selected"), n++;
        }
      }); n < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0); ) r = true, this.items.pop();
      this.items.length == 0 && (this.items.push(new F1(this.view, {
        from: -1,
        to: -1,
        severity: "info",
        message: this.view.state.phrase("No diagnostics")
      })), r = true), a ? (this.list.setAttribute("aria-activedescendant", a.id), this.view.requestMeasure({
        key: this,
        read: () => ({
          sel: a.dom.getBoundingClientRect(),
          panel: this.list.getBoundingClientRect()
        }),
        write: ({ sel: f, panel: h }) => {
          let g = h.height / this.list.offsetHeight;
          f.top < h.top ? this.list.scrollTop -= (h.top - f.top) / g : f.bottom > h.bottom && (this.list.scrollTop += (f.bottom - h.bottom) / g);
        }
      })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), r && this.sync();
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
      let e = this.view.state.field(ci), n = Fs(e.diagnostics, this.items[t].diagnostic);
      n && this.view.dispatch({
        selection: {
          anchor: n.from,
          head: n.to
        },
        scrollIntoView: true,
        effects: $x.of(n)
      });
    }
    static open(t) {
      return new Ta(t);
    }
  }
  function KD(l, t = 'viewBox="0 0 40 40"') {
    return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${t}>${encodeURIComponent(l)}</svg>')`;
  }
  function kc(l) {
    return KD(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${l}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"');
  }
  const QD = P.baseTheme({
    ".cm-diagnostic": {
      padding: "3px 6px 3px 8px",
      marginLeft: "-1px",
      display: "block",
      whiteSpace: "pre-wrap"
    },
    ".cm-diagnostic-error": {
      borderLeft: "5px solid #d11"
    },
    ".cm-diagnostic-warning": {
      borderLeft: "5px solid orange"
    },
    ".cm-diagnostic-info": {
      borderLeft: "5px solid #999"
    },
    ".cm-diagnostic-hint": {
      borderLeft: "5px solid #66d"
    },
    ".cm-diagnosticAction": {
      font: "inherit",
      border: "none",
      padding: "2px 4px",
      backgroundColor: "#444",
      color: "white",
      borderRadius: "3px",
      marginLeft: "8px",
      cursor: "pointer"
    },
    ".cm-diagnosticSource": {
      fontSize: "70%",
      opacity: 0.7
    },
    ".cm-lintRange": {
      backgroundPosition: "left bottom",
      backgroundRepeat: "repeat-x",
      paddingBottom: "0.7px"
    },
    ".cm-lintRange-error": {
      backgroundImage: kc("#d11")
    },
    ".cm-lintRange-warning": {
      backgroundImage: kc("orange")
    },
    ".cm-lintRange-info": {
      backgroundImage: kc("#999")
    },
    ".cm-lintRange-hint": {
      backgroundImage: kc("#66d")
    },
    ".cm-lintRange-active": {
      backgroundColor: "#ffdd9980"
    },
    ".cm-tooltip-lint": {
      padding: 0,
      margin: 0
    },
    ".cm-lintPoint": {
      position: "relative",
      "&:after": {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: "-2px",
        borderLeft: "3px solid transparent",
        borderRight: "3px solid transparent",
        borderBottom: "4px solid #d11"
      }
    },
    ".cm-lintPoint-warning": {
      "&:after": {
        borderBottomColor: "orange"
      }
    },
    ".cm-lintPoint-info": {
      "&:after": {
        borderBottomColor: "#999"
      }
    },
    ".cm-lintPoint-hint": {
      "&:after": {
        borderBottomColor: "#66d"
      }
    },
    ".cm-panel.cm-panel-lint": {
      position: "relative",
      "& ul": {
        maxHeight: "100px",
        overflowY: "auto",
        "& [aria-selected]": {
          backgroundColor: "#ddd",
          "& u": {
            textDecoration: "underline"
          }
        },
        "&:focus [aria-selected]": {
          background_fallback: "#bdf",
          backgroundColor: "Highlight",
          color_fallback: "white",
          color: "HighlightText"
        },
        "& u": {
          textDecoration: "none"
        },
        padding: 0,
        margin: 0
      },
      "& [name=close]": {
        position: "absolute",
        top: "0",
        right: "2px",
        background: "inherit",
        border: "none",
        font: "inherit",
        padding: 0,
        margin: 0
      }
    }
  });
  function ZD(l) {
    return l == "error" ? 4 : l == "warning" ? 3 : l == "info" ? 2 : 1;
  }
  function WD(l) {
    let t = "hint", e = 1;
    for (let n of l) {
      let r = ZD(n.severity);
      r > e && (e = r, t = n.severity);
    }
    return t;
  }
  const JD = [
    ci,
    P.decorations.compute([
      ci
    ], (l) => {
      let { selected: t, panel: e } = l.field(ci);
      return !t || !e || t.from == t.to ? ct.none : ct.set([
        UD.range(t.from, t.to)
      ]);
    }),
    Vk(VD, {
      hideOn: LD
    }),
    QD
  ];
  var P1 = function(t) {
    t === void 0 && (t = {});
    var { crosshairCursor: e = false } = t, n = [];
    t.closeBracketsKeymap !== false && (n = n.concat(kD)), t.defaultKeymap !== false && (n = n.concat(SO)), t.searchKeymap !== false && (n = n.concat(QO)), t.historyKeymap !== false && (n = n.concat(k3)), t.foldKeymap !== false && (n = n.concat(jT)), t.completionKeymap !== false && (n = n.concat(Px)), t.lintKeymap !== false && (n = n.concat(GD));
    var r = [];
    return t.lineNumbers !== false && r.push(Fk()), t.highlightActiveLineGutter !== false && r.push($k()), t.highlightSpecialChars !== false && r.push(mk()), t.history !== false && r.push(b3()), t.foldGutter !== false && r.push(KT()), t.drawSelection !== false && r.push(nk()), t.dropCursor !== false && r.push(ok()), t.allowMultipleSelections !== false && r.push(Ot.allowMultipleSelections.of(true)), t.indentOnInput !== false && r.push(ET()), t.syntaxHighlighting !== false && r.push(FS(JT, {
      fallback: true
    })), t.bracketMatching !== false && r.push(i3()), t.closeBrackets !== false && r.push(AD()), t.autocompletion !== false && r.push(zD()), t.rectangularSelection !== false && r.push(Tk()), e !== false && r.push(Ek()), t.highlightActiveLine !== false && r.push(Sk()), t.highlightSelectionMatches !== false && r.push(kO()), t.tabSize && typeof t.tabSize == "number" && r.push(pu.of(" ".repeat(t.tabSize))), r.concat([
      mu.of(n.flat())
    ]).filter(Boolean);
  };
  const FD = "#e5c07b", I1 = "#e06c75", PD = "#56b6c2", ID = "#ffffff", Vc = "#abb2bf", wm = "#7d8799", $D = "#61afef", tE = "#98c379", $1 = "#d19a66", eE = "#c678dd", iE = "#21252b", tv = "#2c313a", ev = "#282c34", Ad = "#353a42", nE = "#3E4451", iv = "#528bff", lE = P.theme({
    "&": {
      color: Vc,
      backgroundColor: ev
    },
    ".cm-content": {
      caretColor: iv
    },
    ".cm-cursor, .cm-dropCursor": {
      borderLeftColor: iv
    },
    "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
      backgroundColor: nE
    },
    ".cm-panels": {
      backgroundColor: iE,
      color: Vc
    },
    ".cm-panels.cm-panels-top": {
      borderBottom: "2px solid black"
    },
    ".cm-panels.cm-panels-bottom": {
      borderTop: "2px solid black"
    },
    ".cm-searchMatch": {
      backgroundColor: "#72a1ff59",
      outline: "1px solid #457dff"
    },
    ".cm-searchMatch.cm-searchMatch-selected": {
      backgroundColor: "#6199ff2f"
    },
    ".cm-activeLine": {
      backgroundColor: "#6699ff0b"
    },
    ".cm-selectionMatch": {
      backgroundColor: "#aafe661a"
    },
    "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
      backgroundColor: "#bad0f847"
    },
    ".cm-gutters": {
      backgroundColor: ev,
      color: wm,
      border: "none"
    },
    ".cm-activeLineGutter": {
      backgroundColor: tv
    },
    ".cm-foldPlaceholder": {
      backgroundColor: "transparent",
      border: "none",
      color: "#ddd"
    },
    ".cm-tooltip": {
      border: "none",
      backgroundColor: Ad
    },
    ".cm-tooltip .cm-tooltip-arrow:before": {
      borderTopColor: "transparent",
      borderBottomColor: "transparent"
    },
    ".cm-tooltip .cm-tooltip-arrow:after": {
      borderTopColor: Ad,
      borderBottomColor: Ad
    },
    ".cm-tooltip-autocomplete": {
      "& > ul > li[aria-selected]": {
        backgroundColor: tv,
        color: Vc
      }
    }
  }, {
    dark: true
  }), sE = Na.define([
    {
      tag: q.keyword,
      color: eE
    },
    {
      tag: [
        q.name,
        q.deleted,
        q.character,
        q.propertyName,
        q.macroName
      ],
      color: I1
    },
    {
      tag: [
        q.function(q.variableName),
        q.labelName
      ],
      color: $D
    },
    {
      tag: [
        q.color,
        q.constant(q.name),
        q.standard(q.name)
      ],
      color: $1
    },
    {
      tag: [
        q.definition(q.name),
        q.separator
      ],
      color: Vc
    },
    {
      tag: [
        q.typeName,
        q.className,
        q.number,
        q.changed,
        q.annotation,
        q.modifier,
        q.self,
        q.namespace
      ],
      color: FD
    },
    {
      tag: [
        q.operator,
        q.operatorKeyword,
        q.url,
        q.escape,
        q.regexp,
        q.link,
        q.special(q.string)
      ],
      color: PD
    },
    {
      tag: [
        q.meta,
        q.comment
      ],
      color: wm
    },
    {
      tag: q.strong,
      fontWeight: "bold"
    },
    {
      tag: q.emphasis,
      fontStyle: "italic"
    },
    {
      tag: q.strikethrough,
      textDecoration: "line-through"
    },
    {
      tag: q.link,
      color: wm,
      textDecoration: "underline"
    },
    {
      tag: q.heading,
      fontWeight: "bold",
      color: I1
    },
    {
      tag: [
        q.atom,
        q.bool,
        q.special(q.variableName)
      ],
      color: $1
    },
    {
      tag: [
        q.processingInstruction,
        q.string,
        q.inserted
      ],
      color: tE
    },
    {
      tag: q.invalid,
      color: ID
    }
  ]), rE = [
    lE,
    FS(sE)
  ];
  var aE = P.theme({
    "&": {
      backgroundColor: "#fff"
    }
  }, {
    dark: false
  }), oE = function(t) {
    t === void 0 && (t = {});
    var { indentWithTab: e = true, editable: n = true, readOnly: r = false, theme: a = "light", placeholder: c = "", basicSetup: f = true } = t, h = [];
    switch (e && h.unshift(mu.of([
      xO
    ])), f && (typeof f == "boolean" ? h.unshift(P1()) : h.unshift(P1(f))), c && h.unshift(Ck(c)), a) {
      case "light":
        h.push(aE);
        break;
      case "dark":
        h.push(rE);
        break;
      case "none":
        break;
      default:
        h.push(a);
        break;
    }
    return n === false && h.push(P.editable.of(false)), r && h.push(Ot.readOnly.of(true)), [
      ...h
    ];
  }, cE = (l) => ({
    line: l.state.doc.lineAt(l.state.selection.main.from),
    lineCount: l.state.doc.lines,
    lineBreak: l.state.lineBreak,
    length: l.state.doc.length,
    readOnly: l.state.readOnly,
    tabSize: l.state.tabSize,
    selection: l.state.selection,
    selectionAsSingle: l.state.selection.asSingle().main,
    ranges: l.state.selection.ranges,
    selectionCode: l.state.sliceDoc(l.state.selection.main.from, l.state.selection.main.to),
    selections: l.state.selection.ranges.map((t) => l.state.sliceDoc(t.from, t.to)),
    selectedText: l.state.selection.ranges.some((t) => !t.empty)
  });
  class uE {
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
  class nv {
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
  var Cd = null, fE = () => typeof window > "u" ? new nv() : (Cd || (Cd = new nv()), Cd), lv = Ii.define(), hE = 200, dE = [];
  function mE(l) {
    var { value: t, selection: e, onChange: n, onStatistics: r, onCreateEditor: a, onUpdate: c, extensions: f = dE, autoFocus: h, theme: g = "light", height: p = null, minHeight: y = null, maxHeight: v = null, width: S = null, minWidth: w = null, maxWidth: A = null, placeholder: _ = "", editable: T = true, readOnly: j = false, indentWithTab: L = true, basicSetup: Q = true, root: N, initialState: G } = l, [V, lt] = Pt.useState(), [tt, pt] = Pt.useState(), [at, I] = Pt.useState(), ft = Pt.useState(() => ({
      current: null
    }))[0], ht = Pt.useState(() => ({
      current: null
    }))[0], yt = P.theme({
      "&": {
        height: p,
        minHeight: y,
        maxHeight: v,
        width: S,
        minWidth: w,
        maxWidth: A
      },
      "& .cm-scroller": {
        height: "100% !important"
      }
    }), R = P.updateListener.of((rt) => {
      if (rt.docChanged && typeof n == "function" && !rt.transactions.some((H) => H.annotation(lv))) {
        ft.current ? ft.current.reset() : (ft.current = new uE(() => {
          if (ht.current) {
            var H = ht.current;
            ht.current = null, H();
          }
          ft.current = null;
        }, hE), fE().add(ft.current));
        var mt = rt.state.doc, M = mt.toString();
        n(M, rt);
      }
      r && r(cE(rt));
    }), Z = oE({
      theme: g,
      editable: T,
      readOnly: j,
      placeholder: _,
      indentWithTab: L,
      basicSetup: Q
    }), it = [
      R,
      yt,
      ...Z
    ];
    return c && typeof c == "function" && it.push(P.updateListener.of(c)), it = it.concat(f), Pt.useLayoutEffect(() => {
      if (V && !at) {
        var rt = {
          doc: t,
          selection: e,
          extensions: it
        }, mt = G ? Ot.fromJSON(G.json, rt, G.fields) : Ot.create(rt);
        if (I(mt), !tt) {
          var M = new P({
            state: mt,
            parent: V,
            root: N
          });
          pt(M), a && a(M, mt);
        }
      }
      return () => {
        tt && (I(void 0), pt(void 0));
      };
    }, [
      V,
      at
    ]), Pt.useEffect(() => {
      l.container && lt(l.container);
    }, [
      l.container
    ]), Pt.useEffect(() => () => {
      tt && (tt.destroy(), pt(void 0)), ft.current && (ft.current.cancel(), ft.current = null);
    }, [
      tt
    ]), Pt.useEffect(() => {
      h && tt && tt.focus();
    }, [
      h,
      tt
    ]), Pt.useEffect(() => {
      tt && tt.dispatch({
        effects: St.reconfigure.of(it)
      });
    }, [
      g,
      f,
      p,
      y,
      v,
      S,
      w,
      A,
      _,
      T,
      j,
      L,
      Q,
      n,
      c
    ]), Pt.useEffect(() => {
      if (t !== void 0) {
        var rt = tt ? tt.state.doc.toString() : "";
        if (tt && t !== rt) {
          var mt = ft.current && !ft.current.isDone, M = () => {
            tt && t !== tt.state.doc.toString() && tt.dispatch({
              changes: {
                from: 0,
                to: tt.state.doc.toString().length,
                insert: t || ""
              },
              annotations: [
                lv.of(true)
              ]
            });
          };
          mt ? ht.current = M : M();
        }
      }
    }, [
      t,
      tt
    ]), {
      state: at,
      setState: I,
      view: tt,
      setView: pt,
      container: V,
      setContainer: lt
    };
  }
  var gE = [
    "className",
    "value",
    "selection",
    "extensions",
    "onChange",
    "onStatistics",
    "onCreateEditor",
    "onUpdate",
    "autoFocus",
    "theme",
    "height",
    "minHeight",
    "maxHeight",
    "width",
    "minWidth",
    "maxWidth",
    "basicSetup",
    "placeholder",
    "indentWithTab",
    "editable",
    "readOnly",
    "root",
    "initialState"
  ], i2 = Pt.forwardRef((l, t) => {
    var { className: e, value: n = "", selection: r, extensions: a = [], onChange: c, onStatistics: f, onCreateEditor: h, onUpdate: g, autoFocus: p, theme: y = "light", height: v, minHeight: S, maxHeight: w, width: A, minWidth: _, maxWidth: T, basicSetup: j, placeholder: L, indentWithTab: Q, editable: N, readOnly: G, root: V, initialState: lt } = l, tt = IC(l, gE), pt = Pt.useRef(null), { state: at, view: I, container: ft, setContainer: ht } = mE({
      root: V,
      value: n,
      autoFocus: p,
      theme: y,
      height: v,
      minHeight: S,
      maxHeight: w,
      width: A,
      minWidth: _,
      maxWidth: T,
      basicSetup: j,
      placeholder: L,
      indentWithTab: Q,
      editable: N,
      readOnly: G,
      selection: r,
      onChange: c,
      onStatistics: f,
      onCreateEditor: h,
      onUpdate: g,
      extensions: a,
      initialState: lt
    });
    Pt.useImperativeHandle(t, () => ({
      editor: pt.current,
      state: at,
      view: I
    }), [
      pt,
      ft,
      at,
      I
    ]);
    var yt = Pt.useCallback((Z) => {
      pt.current = Z, ht(Z);
    }, [
      ht
    ]);
    if (typeof n != "string") throw new Error("value must be typeof string but got " + typeof n);
    var R = typeof y == "string" ? "cm-theme-" + y : "cm-theme";
    return wt.jsx("div", _d({
      ref: yt,
      className: "" + R + (e ? " " + e : "")
    }, tt));
  });
  i2.displayName = "CodeMirror";
  const pE = ee.fromClass(class {
    constructor(l) {
      __publicField(this, "decorations");
      this.decorations = this.getDecorations(l);
    }
    update(l) {
      (l.docChanged || l.viewportChanged) && (this.decorations = this.getDecorations(l.view));
    }
    getDecorations(l) {
      const t = [], e = /(\/\/.*)/.source, n = /(\/\*[\s\S]*?\*\/)/.source, r = /("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`)/.source, a = /(\b(?:true|false)\b)/.source, c = /(\b\d+\b)/.source, f = /(\b(?:if|else|return)\b)/.source, h = /(\b(?:signature|bool|string|number)\b)/.source, g = /(\b(?:pragma|bithoven|version|target|legacy|segwit|taproot)\b)/.source, p = /(\b(?:verify|after|older)\b)/.source, y = /(\b(?:checksig|sha256|ripemd160)\b)/.source, v = /(\b(?:len)\b)/.source, S = /(==|!=|>=|<=|>|<)/.source, w = /(\|\||&&)/.source, A = /(\+\+|--|\bnegate\b|\babs\b|!)/.source, _ = /([+|-])/.source, T = /(\b(?:max|min)\b)/.source, j = new RegExp([
        e,
        n,
        r,
        a,
        c,
        f,
        h,
        g,
        p,
        y,
        v,
        S,
        w,
        A,
        _,
        T
      ].join("|"), "g");
      for (const L of l.visibleRanges) {
        const Q = l.state.doc.sliceString(L.from, L.to);
        let N;
        for (; N = j.exec(Q); ) {
          let G = "";
          N[1] || N[2] ? G = "cm-comment" : N[3] ? G = "cm-string" : N[4] ? G = "cm-bool" : N[5] ? G = "cm-number" : N[6] ? G = "cm-control" : N[7] ? G = "cm-type" : N[8] ? G = "cm-pragma" : N[9] ? G = "cm-statement" : N[10] ? G = "cm-crypto" : N[11] ? G = "cm-byte" : G = "cm-operation";
          const V = L.from + N.index, lt = V + N[0].length;
          G && t.push(ct.mark({
            class: G
          }).range(V, lt));
        }
      }
      return ct.set(t);
    }
  }, {
    decorations: (l) => l.decorations
  }), yE = "400px", qc = [
    {
      id: "htlc",
      name: "HTLC (Hash Time-Locked Contract)",
      difficulty: "intermediate",
      description: "Lightning Network standard: hash locks + timelocks",
      icon: "\u26A1",
      code: `pragma bithoven version 0.0.1;
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
`
    },
    {
      id: "singlesig",
      name: "Single Signature",
      difficulty: "beginner",
      description: "Basic P2PKH-style signature check",
      icon: "\u270D\uFE0F",
      code: `pragma bithoven version 0.0.1;
pragma bithoven target segwit;

// The most common transaction, require only the signature.
(sig_alice: signature)
{
    return checksig (sig_alice, "0245a6b3f8eeab8e88501a9a25391318dce9bf35e24c377ee82799543606bf5212");
}`
    },
    {
      id: "hashlock",
      name: "Hash Lock",
      difficulty: "beginner",
      description: "Simple SHA256 hash verification",
      icon: "\u{1F512}",
      code: `pragma bithoven version 0.0.1;
pragma bithoven target segwit;

(preimage: string, sig_alice: signature)
{
    // Alice needs to provide secret preimage to unlock hash lock.
    verify sha256 sha256 preimage == "53de742e2e323e3290234052a702458589c30d2c813bf9f866bef1b651c4e45f";
    // If hashlock satisfied, alice can redeem by providing signature.
    return checksig (sig_alice, "0345a6b3f8eeab8e88501a9a25391318dce9bf35e24c377ee82799543606bf5212");
}`
    },
    {
      id: "timelock",
      name: "Time Lock",
      difficulty: "beginner",
      description: "Absolute timelock using CLTV",
      icon: "\u23F0",
      code: `pragma bithoven version 0.0.1;
pragma bithoven target segwit;

(sig_alice: signature)
{
    // Absolute locktime for 10000000 block height.
    after 10000000;
    // If locktime satisfied, alice can redeem by providing signature.
    return checksig (sig_alice, "0245a6b3f8eeab8e88501a9a25391318dce9bf35e24c377ee82799543606bf5212");
}`
    },
    {
      id: "atomic_swap",
      name: "Atomic Swap",
      difficulty: "intermediate",
      description: "Cross-chain trustless exchange",
      icon: "\u{1F504}",
      code: `pragma bithoven version 0.0.1;
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
}`
    },
    {
      id: "escrow",
      name: "Escrow (2-of-3 Multisig)",
      difficulty: "advanced",
      description: "Marketplace with arbitrator and refunds",
      icon: "\u{1F91D}",
      code: `pragma bithoven version 0.0.1;
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
}`
    },
    {
      id: "vault",
      name: "Vault (Time-Delayed Withdrawal)",
      difficulty: "advanced",
      description: "Security wallet with cold storage recovery",
      icon: "\u{1F3E6}",
      code: `pragma bithoven version 0.0.1;
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
}`
    },
    {
      id: "multisig",
      name: "Multisig (2-of-2)",
      difficulty: "intermediate",
      description: "Taproot multi-signature authorization",
      icon: "\u{1F465}",
      code: `pragma bithoven version 0.0.1;
// Multisig uses different opcode for segwit(OP_CHECKMULTISIG) and taproot(OP_CHECKSIGADD).
pragma bithoven target taproot;

(sig_alice: signature, sig_bob: signature)
{
    // multisig use same "checksig" syntax, but different operand comes.
    // [number of signature required, (sig, pubkey)*]
    return checksig [2, (sig_alice, "0345a6b3f8eeab8e88501a9a25391318dce9bf35e24c377ee82799543606bf5212"), (sig_bob, "0245a6b3f8eeab8e88501a9a25391318dce9bf35e24c377ee82799543606bf5212")];
}`
    },
    {
      id: "multisig_voting",
      name: "Multisig Voting (2-of-3 Threshold)",
      difficulty: "advanced",
      description: "DAO treasury with democratic governance",
      icon: "\u{1F5F3}\uFE0F",
      code: `pragma bithoven version 0.0.1;
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
}`
    },
    {
      id: "inheritance",
      name: "Inheritance (Tiered Access)",
      difficulty: "advanced",
      description: "Multi-tier heir access with secrets",
      icon: "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}",
      code: `pragma bithoven version 0.0.1;
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
}`
    },
    {
      id: "prediction_market",
      name: "Prediction Market (Oracle)",
      difficulty: "expert",
      description: "Decentralized betting with hash-based oracle",
      icon: "\u{1F3B2}",
      code: `pragma bithoven version 0.0.1;
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
}`
    }
  ], Tc = qc.find((l) => l.id === "htlc");
  function bE() {
    const [l, t] = Pt.useState(Tc), [e, n] = Pt.useState(Tc.code), [r, a] = Pt.useState('Click "Compile & Run" to execute the code.'), [c, f] = Pt.useState(false), [h, g] = Pt.useState(false);
    Pt.useEffect(() => {
      const w = new URLSearchParams(window.location.search).get("example");
      if (w) {
        const A = qc.find((_) => _.id === w);
        A ? (t(A), n(A.code)) : (console.warn(`Unknown example ID in URL query parameter: "${w}". Falling back to default example.`), a("The requested example could not be found. Showing the default HTLC example instead."));
      }
    }, []), Pt.useEffect(() => {
      const S = () => {
        const A = new URLSearchParams(window.location.search).get("example");
        if (A) {
          const _ = qc.find((T) => T.id === A);
          _ && (t(_), n(_.code), a('Click "Compile & Run" to execute the code.'));
        } else t(Tc), n(Tc.code), a('Click "Compile & Run" to execute the code.');
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
    }, v = Pt.useCallback(async () => {
      f(true), a("Compiling...");
      try {
        const S = XA(e).to_object();
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
    }, [
      e
    ]);
    return wt.jsxs("div", {
      className: "ideContainer",
      children: [
        wt.jsxs("header", {
          className: "header",
          children: [
            wt.jsx("h1", {
              children: "\u20BFithoven Web IDE \u{1F3BC} \u{1F4BB} "
            }),
            wt.jsxs("div", {
              className: "header-controls",
              children: [
                wt.jsx("span", {
                  className: "onlineBadge",
                  children: "Online"
                }),
                wt.jsxs("a", {
                  href: "https://bithoven-lang.github.io/bithoven/docs/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "githubLink",
                  "aria-label": "View documentation",
                  children: [
                    wt.jsxs("svg", {
                      viewBox: "0 0 24 24",
                      width: "24",
                      height: "24",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      fill: "none",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      children: [
                        wt.jsx("path", {
                          d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                        }),
                        wt.jsx("polyline", {
                          points: "14 2 14 8 20 8"
                        }),
                        wt.jsx("line", {
                          x1: "16",
                          y1: "13",
                          x2: "8",
                          y2: "13"
                        }),
                        wt.jsx("line", {
                          x1: "16",
                          y1: "17",
                          x2: "8",
                          y2: "17"
                        }),
                        wt.jsx("polyline", {
                          points: "10 9 9 9 8 9"
                        })
                      ]
                    }),
                    wt.jsx("span", {
                      children: "Docs"
                    })
                  ]
                }),
                wt.jsxs("a", {
                  href: "https://github.com/ChrisCho-H/bithoven",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "githubLink",
                  "aria-label": "View source on GitHub",
                  children: [
                    wt.jsx("svg", {
                      viewBox: "0 0 24 24",
                      width: "24",
                      height: "24",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      fill: "none",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      children: wt.jsx("path", {
                        d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                      })
                    }),
                    wt.jsx("span", {
                      children: "GitHub"
                    })
                  ]
                })
              ]
            })
          ]
        }),
        wt.jsxs("main", {
          children: [
            wt.jsxs("div", {
              className: "exampleSelectorSection",
              children: [
                wt.jsxs("div", {
                  className: "exampleSelectorHeader",
                  children: [
                    wt.jsxs("div", {
                      children: [
                        l.icon,
                        " ",
                        l.name
                      ]
                    }),
                    wt.jsx("button", {
                      className: "exampleDropdownButton",
                      onClick: () => g(!h),
                      "aria-expanded": h,
                      "aria-label": "Toggle example selector",
                      children: h ? "\u25B2 Hide Examples" : "\u25BC Browse Examples"
                    })
                  ]
                }),
                wt.jsxs("p", {
                  className: "exampleDescription",
                  children: [
                    wt.jsx("span", {
                      className: "difficultyBadge",
                      style: {
                        backgroundColor: y(l.difficulty)
                      },
                      children: l.difficulty.toUpperCase()
                    }),
                    l.description
                  ]
                }),
                h && wt.jsx("div", {
                  className: "exampleGrid",
                  children: qc.map((S) => wt.jsxs("button", {
                    className: `exampleCard ${l.id === S.id ? "selected" : ""}`,
                    onClick: () => p(S),
                    "aria-label": `Select example: ${S.name}`,
                    "aria-pressed": l.id === S.id,
                    children: [
                      wt.jsx("div", {
                        className: "exampleIcon",
                        children: S.icon
                      }),
                      wt.jsxs("div", {
                        className: "exampleInfo",
                        children: [
                          wt.jsx("div", {
                            className: "exampleName",
                            children: S.name
                          }),
                          wt.jsx("div", {
                            className: "exampleDesc",
                            children: S.description
                          }),
                          wt.jsx("span", {
                            className: "difficultyBadgeSmall",
                            style: {
                              backgroundColor: y(S.difficulty)
                            },
                            children: S.difficulty
                          })
                        ]
                      })
                    ]
                  }, S.id))
                })
              ]
            }),
            wt.jsxs("div", {
              className: "editorSection",
              children: [
                wt.jsx("label", {
                  htmlFor: "codemirror-editor",
                  children: "Code Editor"
                }),
                wt.jsx(i2, {
                  id: "codemirror-editor",
                  value: e,
                  height: yE,
                  theme: "dark",
                  extensions: [
                    pE
                  ],
                  onChange: (S) => n(S)
                })
              ]
            }),
            wt.jsx("button", {
              className: "compileButton",
              onClick: v,
              disabled: c,
              children: c ? "Compiling..." : "\u25B6 Compile & Run"
            }),
            wt.jsxs("div", {
              className: "outputSection",
              children: [
                wt.jsx("label", {
                  htmlFor: "output",
                  children: "Output"
                }),
                wt.jsx("pre", {
                  id: "output",
                  className: "output",
                  children: r
                })
              ]
            })
          ]
        })
      ]
    });
  }
  NA.createRoot(document.getElementById("root")).render(wt.jsx(Pt.StrictMode, {
    children: wt.jsx(bE, {})
  }));
})();
