var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
(async () => {
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
    new MutationObserver((r) => {
      for (const o of r) if (o.type === "childList") for (const u of o.addedNodes) u.tagName === "LINK" && u.rel === "modulepreload" && n(u);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function e(r) {
      const o = {};
      return r.integrity && (o.integrity = r.integrity), r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? o.credentials = "include" : r.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
    }
    function n(r) {
      if (r.ep) return;
      r.ep = true;
      const o = e(r);
      fetch(r.href, o);
    }
  })();
  var jh = {
    exports: {}
  }, Zr = {};
  var tb;
  function CA() {
    if (tb) return Zr;
    tb = 1;
    var l = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
    function e(n, r, o) {
      var u = null;
      if (o !== void 0 && (u = "" + o), r.key !== void 0 && (u = "" + r.key), "key" in r) {
        o = {};
        for (var f in r) f !== "key" && (o[f] = r[f]);
      } else o = r;
      return r = o.ref, {
        $$typeof: l,
        type: n,
        key: u,
        ref: r !== void 0 ? r : null,
        props: o
      };
    }
    return Zr.Fragment = t, Zr.jsx = e, Zr.jsxs = e, Zr;
  }
  var eb;
  function MA() {
    return eb || (eb = 1, jh.exports = CA()), jh.exports;
  }
  var ue = MA(), Yh = {
    exports: {}
  }, gt = {};
  var ib;
  function _A() {
    if (ib) return gt;
    ib = 1;
    var l = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), o = Symbol.for("react.consumer"), u = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), y = Symbol.for("react.activity"), v = Symbol.iterator;
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
    }, C = Object.assign, _ = {};
    function O(M, H, W) {
      this.props = M, this.context = H, this.refs = _, this.updater = W || w;
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
      this.props = M, this.context = H, this.refs = _, this.updater = W || w;
    }
    var Q = L.prototype = new j();
    Q.constructor = L, C(Q, O.prototype), Q.isPureReactComponent = true;
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
    function ot(M) {
      return typeof M == "object" && M !== null && M.$$typeof === l;
    }
    function P(M) {
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
      return typeof M == "object" && M !== null && M.key != null ? P("" + M.key) : H.toString(36);
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
      var Dt = false;
      if (M === null) Dt = true;
      else switch (bt) {
        case "bigint":
        case "string":
        case "number":
          Dt = true;
          break;
        case "object":
          switch (M.$$typeof) {
            case l:
            case t:
              Dt = true;
              break;
            case p:
              return Dt = M._init, R(Dt(M._payload), H, W, $, dt);
          }
      }
      if (Dt) return dt = dt(M), Dt = $ === "" ? "." + ht(M, 0) : $, N(dt) ? (W = "", Dt != null && (W = Dt.replace(ft, "$&/") + "/"), R(dt, H, W, "", function(tr) {
        return tr;
      })) : dt != null && (ot(dt) && (dt = pt(dt, W + (dt.key == null || M && M.key === dt.key ? "" : ("" + dt.key).replace(ft, "$&/") + "/") + Dt)), H.push(dt)), 1;
      Dt = 0;
      var ze = $ === "" ? "." : $ + ":";
      if (N(M)) for (var te = 0; te < M.length; te++) $ = M[te], bt = ze + ht($, te), Dt += R($, H, W, bt, dt);
      else if (te = S(M), typeof te == "function") for (M = te.call(M), te = 0; !($ = M.next()).done; ) $ = $.value, bt = ze + ht($, te++), Dt += R($, H, W, bt, dt);
      else if (bt === "object") {
        if (typeof M.then == "function") return R(yt(M), H, W, $, dt);
        throw H = String(M), Error("Objects are not valid as a React child (found: " + (H === "[object Object]" ? "object with keys {" + Object.keys(M).join(", ") + "}" : H) + "). If you meant to render a collection of children, use an array instead.");
      }
      return Dt;
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
        if (!ot(M)) throw Error("React.Children.only expected to receive a single React element child.");
        return M;
      }
    };
    return gt.Activity = y, gt.Children = mt, gt.Component = O, gt.Fragment = e, gt.Profiler = r, gt.PureComponent = L, gt.StrictMode = n, gt.Suspense = h, gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = V, gt.__COMPILER_RUNTIME = {
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
      var $ = C({}, M.props), dt = M.key;
      if (H != null) for (bt in H.key !== void 0 && (dt = "" + H.key), H) !lt.call(H, bt) || bt === "key" || bt === "__self" || bt === "__source" || bt === "ref" && H.ref === void 0 || ($[bt] = H[bt]);
      var bt = arguments.length - 2;
      if (bt === 1) $.children = W;
      else if (1 < bt) {
        for (var Dt = Array(bt), ze = 0; ze < bt; ze++) Dt[ze] = arguments[ze + 2];
        $.children = Dt;
      }
      return tt(M.type, dt, $);
    }, gt.createContext = function(M) {
      return M = {
        $$typeof: u,
        _currentValue: M,
        _currentValue2: M,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      }, M.Provider = M, M.Consumer = {
        $$typeof: o,
        _context: M
      }, M;
    }, gt.createElement = function(M, H, W) {
      var $, dt = {}, bt = null;
      if (H != null) for ($ in H.key !== void 0 && (bt = "" + H.key), H) lt.call(H, $) && $ !== "key" && $ !== "__self" && $ !== "__source" && (dt[$] = H[$]);
      var Dt = arguments.length - 2;
      if (Dt === 1) dt.children = W;
      else if (1 < Dt) {
        for (var ze = Array(Dt), te = 0; te < Dt; te++) ze[te] = arguments[te + 2];
        dt.children = ze;
      }
      if (M && M.defaultProps) for ($ in Dt = M.defaultProps, Dt) dt[$] === void 0 && (dt[$] = Dt[$]);
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
    }, gt.isValidElement = ot, gt.lazy = function(M) {
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
  var nb;
  function xm() {
    return nb || (nb = 1, Yh.exports = _A()), Yh.exports;
  }
  var ce = xm(), Gh = {
    exports: {}
  }, Wr = {}, Xh = {
    exports: {}
  }, Kh = {};
  var lb;
  function TA() {
    return lb || (lb = 1, (function(l) {
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
        var o = performance;
        l.unstable_now = function() {
          return o.now();
        };
      } else {
        var u = Date, f = u.now();
        l.unstable_now = function() {
          return u.now() - f;
        };
      }
      var h = [], g = [], p = 1, y = null, v = 3, S = false, w = false, C = false, _ = false, O = typeof setTimeout == "function" ? setTimeout : null, j = typeof clearTimeout == "function" ? clearTimeout : null, L = typeof setImmediate < "u" ? setImmediate : null;
      function Q(R) {
        for (var Z = e(g); Z !== null; ) {
          if (Z.callback === null) n(g);
          else if (Z.startTime <= R) n(g), Z.sortIndex = Z.expirationTime, t(h, Z);
          else break;
          Z = e(g);
        }
      }
      function N(R) {
        if (C = false, Q(R), !w) if (e(h) !== null) w = true, G || (G = true, P());
        else {
          var Z = e(g);
          Z !== null && yt(N, Z.startTime - R);
        }
      }
      var G = false, V = -1, lt = 5, tt = -1;
      function pt() {
        return _ ? true : !(l.unstable_now() - tt < lt);
      }
      function ot() {
        if (_ = false, G) {
          var R = l.unstable_now();
          tt = R;
          var Z = true;
          try {
            t: {
              w = false, C && (C = false, j(V), V = -1), S = true;
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
            Z ? P() : G = false;
          }
        }
      }
      var P;
      if (typeof L == "function") P = function() {
        L(ot);
      };
      else if (typeof MessageChannel < "u") {
        var ft = new MessageChannel(), ht = ft.port2;
        ft.port1.onmessage = ot, P = function() {
          ht.postMessage(null);
        };
      } else P = function() {
        O(ot, 0);
      };
      function yt(R, Z) {
        V = O(function() {
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
        }, it > rt ? (R.sortIndex = it, t(g, R), e(h) === null && R === e(g) && (C ? (j(V), V = -1) : C = true, yt(N, it - rt))) : (R.sortIndex = mt, t(h, R), w || S || (w = true, G || (G = true, P()))), R;
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
    })(Kh)), Kh;
  }
  var sb;
  function kA() {
    return sb || (sb = 1, Xh.exports = TA()), Xh.exports;
  }
  var Qh = {
    exports: {}
  }, ke = {};
  var rb;
  function OA() {
    if (rb) return ke;
    rb = 1;
    var l = xm();
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
    function o(h, g, p) {
      var y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: r,
        key: y == null ? null : "" + y,
        children: h,
        containerInfo: g,
        implementation: p
      };
    }
    var u = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function f(h, g) {
      if (h === "font") return "";
      if (typeof g == "string") return g === "use-credentials" ? g : "";
    }
    return ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = n, ke.createPortal = function(h, g) {
      var p = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11) throw Error(t(299));
      return o(h, g, null, p);
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
    }, ke.preinitModule = function(h, g) {
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
    }, ke.preload = function(h, g) {
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
    }, ke.preloadModule = function(h, g) {
      if (typeof h == "string") if (g) {
        var p = f(g.as, g.crossOrigin);
        n.d.m(h, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: p,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
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
  var ob;
  function DA() {
    if (ob) return Qh.exports;
    ob = 1;
    function l() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (t) {
        console.error(t);
      }
    }
    return l(), Qh.exports = OA(), Qh.exports;
  }
  var ab;
  function EA() {
    if (ab) return Wr;
    ab = 1;
    var l = kA(), t = xm(), e = DA();
    function n(i) {
      var s = "https://react.dev/errors/" + i;
      if (1 < arguments.length) {
        s += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var a = 2; a < arguments.length; a++) s += "&args[]=" + encodeURIComponent(arguments[a]);
      }
      return "Minified React error #" + i + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function r(i) {
      return !(!i || i.nodeType !== 1 && i.nodeType !== 9 && i.nodeType !== 11);
    }
    function o(i) {
      var s = i, a = i;
      if (i.alternate) for (; s.return; ) s = s.return;
      else {
        i = s;
        do
          s = i, (s.flags & 4098) !== 0 && (a = s.return), i = s.return;
        while (i);
      }
      return s.tag === 3 ? a : null;
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
      if (o(i) !== i) throw Error(n(188));
    }
    function g(i) {
      var s = i.alternate;
      if (!s) {
        if (s = o(i), s === null) throw Error(n(188));
        return s !== i ? null : i;
      }
      for (var a = i, c = s; ; ) {
        var d = a.return;
        if (d === null) break;
        var m = d.alternate;
        if (m === null) {
          if (c = d.return, c !== null) {
            a = c;
            continue;
          }
          break;
        }
        if (d.child === m.child) {
          for (m = d.child; m; ) {
            if (m === a) return h(d), i;
            if (m === c) return h(d), s;
            m = m.sibling;
          }
          throw Error(n(188));
        }
        if (a.return !== c.return) a = d, c = m;
        else {
          for (var b = false, x = d.child; x; ) {
            if (x === a) {
              b = true, a = d, c = m;
              break;
            }
            if (x === c) {
              b = true, c = d, a = m;
              break;
            }
            x = x.sibling;
          }
          if (!b) {
            for (x = m.child; x; ) {
              if (x === a) {
                b = true, a = m, c = d;
                break;
              }
              if (x === c) {
                b = true, c = m, a = d;
                break;
              }
              x = x.sibling;
            }
            if (!b) throw Error(n(189));
          }
        }
        if (a.alternate !== c) throw Error(n(190));
      }
      if (a.tag !== 3) throw Error(n(188));
      return a.stateNode.current === a ? i : s;
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
    var y = Object.assign, v = Symbol.for("react.element"), S = Symbol.for("react.transitional.element"), w = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), j = Symbol.for("react.consumer"), L = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), G = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), lt = Symbol.for("react.lazy"), tt = Symbol.for("react.activity"), pt = Symbol.for("react.memo_cache_sentinel"), ot = Symbol.iterator;
    function P(i) {
      return i === null || typeof i != "object" ? null : (i = ot && i[ot] || i["@@iterator"], typeof i == "function" ? i : null);
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
    var $ = M(null), dt = M(null), bt = M(null), Dt = M(null);
    function ze(i, s) {
      switch (W(bt, s), W(dt, i), W($, null), s.nodeType) {
        case 9:
        case 11:
          i = (i = s.documentElement) && (i = i.namespaceURI) ? Ay(i) : 0;
          break;
        default:
          if (i = s.tagName, s = s.namespaceURI) s = Ay(s), i = Cy(s, i);
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
    function te() {
      H($), H(dt), H(bt);
    }
    function tr(i) {
      i.memoizedState !== null && W(Dt, i);
      var s = $.current, a = Cy(s, i.type);
      s !== a && (W(dt, i), W($, a));
    }
    function Vo(i) {
      dt.current === i && (H($), H(dt)), Dt.current === i && (H(Dt), Gr._currentValue = it);
    }
    var wc, $m;
    function fl(i) {
      if (wc === void 0) try {
        throw Error();
      } catch (a) {
        var s = a.stack.trim().match(/\n( *(at )?)/);
        wc = s && s[1] || "", $m = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
      return `
` + wc + i + $m;
    }
    var Ac = false;
    function Cc(i, s) {
      if (!i || Ac) return "";
      Ac = true;
      var a = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var c = {
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
        c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var d = Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot, "name");
        d && d.configurable && Object.defineProperty(c.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot"
        });
        var m = c.DetermineComponentFrameRoot(), b = m[0], x = m[1];
        if (b && x) {
          var A = b.split(`
`), E = x.split(`
`);
          for (d = c = 0; c < A.length && !A[c].includes("DetermineComponentFrameRoot"); ) c++;
          for (; d < E.length && !E[d].includes("DetermineComponentFrameRoot"); ) d++;
          if (c === A.length || d === E.length) for (c = A.length - 1, d = E.length - 1; 1 <= c && 0 <= d && A[c] !== E[d]; ) d--;
          for (; 1 <= c && 0 <= d; c--, d--) if (A[c] !== E[d]) {
            if (c !== 1 || d !== 1) do
              if (c--, d--, 0 > d || A[c] !== E[d]) {
                var U = `
` + A[c].replace(" at new ", " at ");
                return i.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", i.displayName)), U;
              }
            while (1 <= c && 0 <= d);
            break;
          }
        }
      } finally {
        Ac = false, Error.prepareStackTrace = a;
      }
      return (a = i ? i.displayName || i.name : "") ? fl(a) : "";
    }
    function e2(i, s) {
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
          return Cc(i.type, false);
        case 11:
          return Cc(i.type.render, false);
        case 1:
          return Cc(i.type, true);
        case 31:
          return fl("Activity");
        default:
          return "";
      }
    }
    function tg(i) {
      try {
        var s = "", a = null;
        do
          s += e2(i, a), a = i, i = i.return;
        while (i);
        return s;
      } catch (c) {
        return `
Error generating stack: ` + c.message + `
` + c.stack;
      }
    }
    var Mc = Object.prototype.hasOwnProperty, _c = l.unstable_scheduleCallback, Tc = l.unstable_cancelCallback, i2 = l.unstable_shouldYield, n2 = l.unstable_requestPaint, Ie = l.unstable_now, l2 = l.unstable_getCurrentPriorityLevel, eg = l.unstable_ImmediatePriority, ig = l.unstable_UserBlockingPriority, qo = l.unstable_NormalPriority, s2 = l.unstable_LowPriority, ng = l.unstable_IdlePriority, r2 = l.log, o2 = l.unstable_setDisableYieldValue, er = null, Pe = null;
    function _n(i) {
      if (typeof r2 == "function" && o2(i), Pe && typeof Pe.setStrictMode == "function") try {
        Pe.setStrictMode(er, i);
      } catch {
      }
    }
    var $e = Math.clz32 ? Math.clz32 : c2, a2 = Math.log, u2 = Math.LN2;
    function c2(i) {
      return i >>>= 0, i === 0 ? 32 : 31 - (a2(i) / u2 | 0) | 0;
    }
    var jo = 256, Yo = 262144, Go = 4194304;
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
    function Xo(i, s, a) {
      var c = i.pendingLanes;
      if (c === 0) return 0;
      var d = 0, m = i.suspendedLanes, b = i.pingedLanes;
      i = i.warmLanes;
      var x = c & 134217727;
      return x !== 0 ? (c = x & ~m, c !== 0 ? d = hl(c) : (b &= x, b !== 0 ? d = hl(b) : a || (a = x & ~i, a !== 0 && (d = hl(a))))) : (x = c & ~m, x !== 0 ? d = hl(x) : b !== 0 ? d = hl(b) : a || (a = c & ~i, a !== 0 && (d = hl(a)))), d === 0 ? 0 : s !== 0 && s !== d && (s & m) === 0 && (m = d & -d, a = s & -s, m >= a || m === 32 && (a & 4194048) !== 0) ? s : d;
    }
    function ir(i, s) {
      return (i.pendingLanes & ~(i.suspendedLanes & ~i.pingedLanes) & s) === 0;
    }
    function f2(i, s) {
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
    function lg() {
      var i = Go;
      return Go <<= 1, (Go & 62914560) === 0 && (Go = 4194304), i;
    }
    function kc(i) {
      for (var s = [], a = 0; 31 > a; a++) s.push(i);
      return s;
    }
    function nr(i, s) {
      i.pendingLanes |= s, s !== 268435456 && (i.suspendedLanes = 0, i.pingedLanes = 0, i.warmLanes = 0);
    }
    function h2(i, s, a, c, d, m) {
      var b = i.pendingLanes;
      i.pendingLanes = a, i.suspendedLanes = 0, i.pingedLanes = 0, i.warmLanes = 0, i.expiredLanes &= a, i.entangledLanes &= a, i.errorRecoveryDisabledLanes &= a, i.shellSuspendCounter = 0;
      var x = i.entanglements, A = i.expirationTimes, E = i.hiddenUpdates;
      for (a = b & ~a; 0 < a; ) {
        var U = 31 - $e(a), X = 1 << U;
        x[U] = 0, A[U] = -1;
        var B = E[U];
        if (B !== null) for (E[U] = null, U = 0; U < B.length; U++) {
          var z = B[U];
          z !== null && (z.lane &= -536870913);
        }
        a &= ~X;
      }
      c !== 0 && sg(i, c, 0), m !== 0 && d === 0 && i.tag !== 0 && (i.suspendedLanes |= m & ~(b & ~s));
    }
    function sg(i, s, a) {
      i.pendingLanes |= s, i.suspendedLanes &= ~s;
      var c = 31 - $e(s);
      i.entangledLanes |= s, i.entanglements[c] = i.entanglements[c] | 1073741824 | a & 261930;
    }
    function rg(i, s) {
      var a = i.entangledLanes |= s;
      for (i = i.entanglements; a; ) {
        var c = 31 - $e(a), d = 1 << c;
        d & s | i[c] & s && (i[c] |= s), a &= ~d;
      }
    }
    function og(i, s) {
      var a = s & -s;
      return a = (a & 42) !== 0 ? 1 : Oc(a), (a & (i.suspendedLanes | s)) !== 0 ? 0 : a;
    }
    function Oc(i) {
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
    function Dc(i) {
      return i &= -i, 2 < i ? 8 < i ? (i & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
    }
    function ag() {
      var i = Z.p;
      return i !== 0 ? i : (i = window.event, i === void 0 ? 32 : Zy(i.type));
    }
    function ug(i, s) {
      var a = Z.p;
      try {
        return Z.p = i, s();
      } finally {
        Z.p = a;
      }
    }
    var Tn = Math.random().toString(36).slice(2), be = "__reactFiber$" + Tn, qe = "__reactProps$" + Tn, Xl = "__reactContainer$" + Tn, Ec = "__reactEvents$" + Tn, d2 = "__reactListeners$" + Tn, m2 = "__reactHandles$" + Tn, cg = "__reactResources$" + Tn, lr = "__reactMarker$" + Tn;
    function Bc(i) {
      delete i[be], delete i[qe], delete i[Ec], delete i[d2], delete i[m2];
    }
    function Kl(i) {
      var s = i[be];
      if (s) return s;
      for (var a = i.parentNode; a; ) {
        if (s = a[Xl] || a[be]) {
          if (a = s.alternate, s.child !== null || a !== null && a.child !== null) for (i = Ey(i); i !== null; ) {
            if (a = i[be]) return a;
            i = Ey(i);
          }
          return s;
        }
        i = a, a = i.parentNode;
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
      var s = i[cg];
      return s || (s = i[cg] = {
        hoistableStyles: /* @__PURE__ */ new Map(),
        hoistableScripts: /* @__PURE__ */ new Map()
      }), s;
    }
    function ge(i) {
      i[lr] = true;
    }
    var fg = /* @__PURE__ */ new Set(), hg = {};
    function dl(i, s) {
      Wl(i, s), Wl(i + "Capture", s);
    }
    function Wl(i, s) {
      for (hg[i] = s, i = 0; i < s.length; i++) fg.add(s[i]);
    }
    var g2 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), dg = {}, mg = {};
    function p2(i) {
      return Mc.call(mg, i) ? true : Mc.call(dg, i) ? false : g2.test(i) ? mg[i] = true : (dg[i] = true, false);
    }
    function Ko(i, s, a) {
      if (p2(s)) if (a === null) i.removeAttribute(s);
      else {
        switch (typeof a) {
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
        i.setAttribute(s, "" + a);
      }
    }
    function Qo(i, s, a) {
      if (a === null) i.removeAttribute(s);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            i.removeAttribute(s);
            return;
        }
        i.setAttribute(s, "" + a);
      }
    }
    function tn(i, s, a, c) {
      if (c === null) i.removeAttribute(a);
      else {
        switch (typeof c) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            i.removeAttribute(a);
            return;
        }
        i.setAttributeNS(s, a, "" + c);
      }
    }
    function ci(i) {
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
    function gg(i) {
      var s = i.type;
      return (i = i.nodeName) && i.toLowerCase() === "input" && (s === "checkbox" || s === "radio");
    }
    function y2(i, s, a) {
      var c = Object.getOwnPropertyDescriptor(i.constructor.prototype, s);
      if (!i.hasOwnProperty(s) && typeof c < "u" && typeof c.get == "function" && typeof c.set == "function") {
        var d = c.get, m = c.set;
        return Object.defineProperty(i, s, {
          configurable: true,
          get: function() {
            return d.call(this);
          },
          set: function(b) {
            a = "" + b, m.call(this, b);
          }
        }), Object.defineProperty(i, s, {
          enumerable: c.enumerable
        }), {
          getValue: function() {
            return a;
          },
          setValue: function(b) {
            a = "" + b;
          },
          stopTracking: function() {
            i._valueTracker = null, delete i[s];
          }
        };
      }
    }
    function Rc(i) {
      if (!i._valueTracker) {
        var s = gg(i) ? "checked" : "value";
        i._valueTracker = y2(i, s, "" + i[s]);
      }
    }
    function pg(i) {
      if (!i) return false;
      var s = i._valueTracker;
      if (!s) return true;
      var a = s.getValue(), c = "";
      return i && (c = gg(i) ? i.checked ? "true" : "false" : i.value), i = c, i !== a ? (s.setValue(i), true) : false;
    }
    function Zo(i) {
      if (i = i || (typeof document < "u" ? document : void 0), typeof i > "u") return null;
      try {
        return i.activeElement || i.body;
      } catch {
        return i.body;
      }
    }
    var b2 = /[\n"\\]/g;
    function fi(i) {
      return i.replace(b2, function(s) {
        return "\\" + s.charCodeAt(0).toString(16) + " ";
      });
    }
    function zc(i, s, a, c, d, m, b, x) {
      i.name = "", b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? i.type = b : i.removeAttribute("type"), s != null ? b === "number" ? (s === 0 && i.value === "" || i.value != s) && (i.value = "" + ci(s)) : i.value !== "" + ci(s) && (i.value = "" + ci(s)) : b !== "submit" && b !== "reset" || i.removeAttribute("value"), s != null ? Nc(i, b, ci(s)) : a != null ? Nc(i, b, ci(a)) : c != null && i.removeAttribute("value"), d == null && m != null && (i.defaultChecked = !!m), d != null && (i.checked = d && typeof d != "function" && typeof d != "symbol"), x != null && typeof x != "function" && typeof x != "symbol" && typeof x != "boolean" ? i.name = "" + ci(x) : i.removeAttribute("name");
    }
    function yg(i, s, a, c, d, m, b, x) {
      if (m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (i.type = m), s != null || a != null) {
        if (!(m !== "submit" && m !== "reset" || s != null)) {
          Rc(i);
          return;
        }
        a = a != null ? "" + ci(a) : "", s = s != null ? "" + ci(s) : a, x || s === i.value || (i.value = s), i.defaultValue = s;
      }
      c = c ?? d, c = typeof c != "function" && typeof c != "symbol" && !!c, i.checked = x ? i.checked : !!c, i.defaultChecked = !!c, b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" && (i.name = b), Rc(i);
    }
    function Nc(i, s, a) {
      s === "number" && Zo(i.ownerDocument) === i || i.defaultValue === "" + a || (i.defaultValue = "" + a);
    }
    function Jl(i, s, a, c) {
      if (i = i.options, s) {
        s = {};
        for (var d = 0; d < a.length; d++) s["$" + a[d]] = true;
        for (a = 0; a < i.length; a++) d = s.hasOwnProperty("$" + i[a].value), i[a].selected !== d && (i[a].selected = d), d && c && (i[a].defaultSelected = true);
      } else {
        for (a = "" + ci(a), s = null, d = 0; d < i.length; d++) {
          if (i[d].value === a) {
            i[d].selected = true, c && (i[d].defaultSelected = true);
            return;
          }
          s !== null || i[d].disabled || (s = i[d]);
        }
        s !== null && (s.selected = true);
      }
    }
    function bg(i, s, a) {
      if (s != null && (s = "" + ci(s), s !== i.value && (i.value = s), a == null)) {
        i.defaultValue !== s && (i.defaultValue = s);
        return;
      }
      i.defaultValue = a != null ? "" + ci(a) : "";
    }
    function vg(i, s, a, c) {
      if (s == null) {
        if (c != null) {
          if (a != null) throw Error(n(92));
          if (yt(c)) {
            if (1 < c.length) throw Error(n(93));
            c = c[0];
          }
          a = c;
        }
        a == null && (a = ""), s = a;
      }
      a = ci(s), i.defaultValue = a, c = i.textContent, c === a && c !== "" && c !== null && (i.value = c), Rc(i);
    }
    function Fl(i, s) {
      if (s) {
        var a = i.firstChild;
        if (a && a === i.lastChild && a.nodeType === 3) {
          a.nodeValue = s;
          return;
        }
      }
      i.textContent = s;
    }
    var v2 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function Sg(i, s, a) {
      var c = s.indexOf("--") === 0;
      a == null || typeof a == "boolean" || a === "" ? c ? i.setProperty(s, "") : s === "float" ? i.cssFloat = "" : i[s] = "" : c ? i.setProperty(s, a) : typeof a != "number" || a === 0 || v2.has(s) ? s === "float" ? i.cssFloat = a : i[s] = ("" + a).trim() : i[s] = a + "px";
    }
    function xg(i, s, a) {
      if (s != null && typeof s != "object") throw Error(n(62));
      if (i = i.style, a != null) {
        for (var c in a) !a.hasOwnProperty(c) || s != null && s.hasOwnProperty(c) || (c.indexOf("--") === 0 ? i.setProperty(c, "") : c === "float" ? i.cssFloat = "" : i[c] = "");
        for (var d in s) c = s[d], s.hasOwnProperty(d) && a[d] !== c && Sg(i, d, c);
      } else for (var m in s) s.hasOwnProperty(m) && Sg(i, m, s[m]);
    }
    function Lc(i) {
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
    var S2 = /* @__PURE__ */ new Map([
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
    ]), x2 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Wo(i) {
      return x2.test("" + i) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : i;
    }
    function en() {
    }
    var Hc = null;
    function Uc(i) {
      return i = i.target || i.srcElement || window, i.correspondingUseElement && (i = i.correspondingUseElement), i.nodeType === 3 ? i.parentNode : i;
    }
    var Il = null, Pl = null;
    function wg(i) {
      var s = Ql(i);
      if (s && (i = s.stateNode)) {
        var a = i[qe] || null;
        t: switch (i = s.stateNode, s.type) {
          case "input":
            if (zc(i, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), s = a.name, a.type === "radio" && s != null) {
              for (a = i; a.parentNode; ) a = a.parentNode;
              for (a = a.querySelectorAll('input[name="' + fi("" + s) + '"][type="radio"]'), s = 0; s < a.length; s++) {
                var c = a[s];
                if (c !== i && c.form === i.form) {
                  var d = c[qe] || null;
                  if (!d) throw Error(n(90));
                  zc(c, d.value, d.defaultValue, d.defaultValue, d.checked, d.defaultChecked, d.type, d.name);
                }
              }
              for (s = 0; s < a.length; s++) c = a[s], c.form === i.form && pg(c);
            }
            break t;
          case "textarea":
            bg(i, a.value, a.defaultValue);
            break t;
          case "select":
            s = a.value, s != null && Jl(i, !!a.multiple, s, false);
        }
      }
    }
    var Vc = false;
    function Ag(i, s, a) {
      if (Vc) return i(s, a);
      Vc = true;
      try {
        var c = i(s);
        return c;
      } finally {
        if (Vc = false, (Il !== null || Pl !== null) && (Na(), Il && (s = Il, i = Pl, Pl = Il = null, wg(s), i))) for (s = 0; s < i.length; s++) wg(i[s]);
      }
    }
    function rr(i, s) {
      var a = i.stateNode;
      if (a === null) return null;
      var c = a[qe] || null;
      if (c === null) return null;
      a = c[s];
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
      if (a && typeof a != "function") throw Error(n(231, s, typeof a));
      return a;
    }
    var nn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), qc = false;
    if (nn) try {
      var or = {};
      Object.defineProperty(or, "passive", {
        get: function() {
          qc = true;
        }
      }), window.addEventListener("test", or, or), window.removeEventListener("test", or, or);
    } catch {
      qc = false;
    }
    var kn = null, jc = null, Jo = null;
    function Cg() {
      if (Jo) return Jo;
      var i, s = jc, a = s.length, c, d = "value" in kn ? kn.value : kn.textContent, m = d.length;
      for (i = 0; i < a && s[i] === d[i]; i++) ;
      var b = a - i;
      for (c = 1; c <= b && s[a - c] === d[m - c]; c++) ;
      return Jo = d.slice(i, 1 < c ? 1 - c : void 0);
    }
    function Fo(i) {
      var s = i.keyCode;
      return "charCode" in i ? (i = i.charCode, i === 0 && s === 13 && (i = 13)) : i = s, i === 10 && (i = 13), 32 <= i || i === 13 ? i : 0;
    }
    function Io() {
      return true;
    }
    function Mg() {
      return false;
    }
    function je(i) {
      function s(a, c, d, m, b) {
        this._reactName = a, this._targetInst = d, this.type = c, this.nativeEvent = m, this.target = b, this.currentTarget = null;
        for (var x in i) i.hasOwnProperty(x) && (a = i[x], this[x] = a ? a(m) : m[x]);
        return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === false) ? Io : Mg, this.isPropagationStopped = Mg, this;
      }
      return y(s.prototype, {
        preventDefault: function() {
          this.defaultPrevented = true;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = false), this.isDefaultPrevented = Io);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = true), this.isPropagationStopped = Io);
        },
        persist: function() {
        },
        isPersistent: Io
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
    }, Po = je(ml), ar = y({}, ml, {
      view: 0,
      detail: 0
    }), w2 = je(ar), Yc, Gc, ur, $o = y({}, ar, {
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
      getModifierState: Kc,
      button: 0,
      buttons: 0,
      relatedTarget: function(i) {
        return i.relatedTarget === void 0 ? i.fromElement === i.srcElement ? i.toElement : i.fromElement : i.relatedTarget;
      },
      movementX: function(i) {
        return "movementX" in i ? i.movementX : (i !== ur && (ur && i.type === "mousemove" ? (Yc = i.screenX - ur.screenX, Gc = i.screenY - ur.screenY) : Gc = Yc = 0, ur = i), Yc);
      },
      movementY: function(i) {
        return "movementY" in i ? i.movementY : Gc;
      }
    }), _g = je($o), A2 = y({}, $o, {
      dataTransfer: 0
    }), C2 = je(A2), M2 = y({}, ar, {
      relatedTarget: 0
    }), Xc = je(M2), _2 = y({}, ml, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), T2 = je(_2), k2 = y({}, ml, {
      clipboardData: function(i) {
        return "clipboardData" in i ? i.clipboardData : window.clipboardData;
      }
    }), O2 = je(k2), D2 = y({}, ml, {
      data: 0
    }), Tg = je(D2), E2 = {
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
    }, B2 = {
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
    }, R2 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function z2(i) {
      var s = this.nativeEvent;
      return s.getModifierState ? s.getModifierState(i) : (i = R2[i]) ? !!s[i] : false;
    }
    function Kc() {
      return z2;
    }
    var N2 = y({}, ar, {
      key: function(i) {
        if (i.key) {
          var s = E2[i.key] || i.key;
          if (s !== "Unidentified") return s;
        }
        return i.type === "keypress" ? (i = Fo(i), i === 13 ? "Enter" : String.fromCharCode(i)) : i.type === "keydown" || i.type === "keyup" ? B2[i.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Kc,
      charCode: function(i) {
        return i.type === "keypress" ? Fo(i) : 0;
      },
      keyCode: function(i) {
        return i.type === "keydown" || i.type === "keyup" ? i.keyCode : 0;
      },
      which: function(i) {
        return i.type === "keypress" ? Fo(i) : i.type === "keydown" || i.type === "keyup" ? i.keyCode : 0;
      }
    }), L2 = je(N2), H2 = y({}, $o, {
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
    }), kg = je(H2), U2 = y({}, ar, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Kc
    }), V2 = je(U2), q2 = y({}, ml, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), j2 = je(q2), Y2 = y({}, $o, {
      deltaX: function(i) {
        return "deltaX" in i ? i.deltaX : "wheelDeltaX" in i ? -i.wheelDeltaX : 0;
      },
      deltaY: function(i) {
        return "deltaY" in i ? i.deltaY : "wheelDeltaY" in i ? -i.wheelDeltaY : "wheelDelta" in i ? -i.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), G2 = je(Y2), X2 = y({}, ml, {
      newState: 0,
      oldState: 0
    }), K2 = je(X2), Q2 = [
      9,
      13,
      27,
      32
    ], Qc = nn && "CompositionEvent" in window, cr = null;
    nn && "documentMode" in document && (cr = document.documentMode);
    var Z2 = nn && "TextEvent" in window && !cr, Og = nn && (!Qc || cr && 8 < cr && 11 >= cr), Dg = " ", Eg = false;
    function Bg(i, s) {
      switch (i) {
        case "keyup":
          return Q2.indexOf(s.keyCode) !== -1;
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
    function Rg(i) {
      return i = i.detail, typeof i == "object" && "data" in i ? i.data : null;
    }
    var $l = false;
    function W2(i, s) {
      switch (i) {
        case "compositionend":
          return Rg(s);
        case "keypress":
          return s.which !== 32 ? null : (Eg = true, Dg);
        case "textInput":
          return i = s.data, i === Dg && Eg ? null : i;
        default:
          return null;
      }
    }
    function J2(i, s) {
      if ($l) return i === "compositionend" || !Qc && Bg(i, s) ? (i = Cg(), Jo = jc = kn = null, $l = false, i) : null;
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
          return Og && s.locale !== "ko" ? null : s.data;
        default:
          return null;
      }
    }
    var F2 = {
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
    function zg(i) {
      var s = i && i.nodeName && i.nodeName.toLowerCase();
      return s === "input" ? !!F2[i.type] : s === "textarea";
    }
    function Ng(i, s, a, c) {
      Il ? Pl ? Pl.push(c) : Pl = [
        c
      ] : Il = c, s = Ya(s, "onChange"), 0 < s.length && (a = new Po("onChange", "change", null, a, c), i.push({
        event: a,
        listeners: s
      }));
    }
    var fr = null, hr = null;
    function I2(i) {
      yy(i, 0);
    }
    function ta(i) {
      var s = sr(i);
      if (pg(s)) return i;
    }
    function Lg(i, s) {
      if (i === "change") return s;
    }
    var Hg = false;
    if (nn) {
      var Zc;
      if (nn) {
        var Wc = "oninput" in document;
        if (!Wc) {
          var Ug = document.createElement("div");
          Ug.setAttribute("oninput", "return;"), Wc = typeof Ug.oninput == "function";
        }
        Zc = Wc;
      } else Zc = false;
      Hg = Zc && (!document.documentMode || 9 < document.documentMode);
    }
    function Vg() {
      fr && (fr.detachEvent("onpropertychange", qg), hr = fr = null);
    }
    function qg(i) {
      if (i.propertyName === "value" && ta(hr)) {
        var s = [];
        Ng(s, hr, i, Uc(i)), Ag(I2, s);
      }
    }
    function P2(i, s, a) {
      i === "focusin" ? (Vg(), fr = s, hr = a, fr.attachEvent("onpropertychange", qg)) : i === "focusout" && Vg();
    }
    function $2(i) {
      if (i === "selectionchange" || i === "keyup" || i === "keydown") return ta(hr);
    }
    function tw(i, s) {
      if (i === "click") return ta(s);
    }
    function ew(i, s) {
      if (i === "input" || i === "change") return ta(s);
    }
    function iw(i, s) {
      return i === s && (i !== 0 || 1 / i === 1 / s) || i !== i && s !== s;
    }
    var ti = typeof Object.is == "function" ? Object.is : iw;
    function dr(i, s) {
      if (ti(i, s)) return true;
      if (typeof i != "object" || i === null || typeof s != "object" || s === null) return false;
      var a = Object.keys(i), c = Object.keys(s);
      if (a.length !== c.length) return false;
      for (c = 0; c < a.length; c++) {
        var d = a[c];
        if (!Mc.call(s, d) || !ti(i[d], s[d])) return false;
      }
      return true;
    }
    function jg(i) {
      for (; i && i.firstChild; ) i = i.firstChild;
      return i;
    }
    function Yg(i, s) {
      var a = jg(i);
      i = 0;
      for (var c; a; ) {
        if (a.nodeType === 3) {
          if (c = i + a.textContent.length, i <= s && c >= s) return {
            node: a,
            offset: s - i
          };
          i = c;
        }
        t: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break t;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = jg(a);
      }
    }
    function Gg(i, s) {
      return i && s ? i === s ? true : i && i.nodeType === 3 ? false : s && s.nodeType === 3 ? Gg(i, s.parentNode) : "contains" in i ? i.contains(s) : i.compareDocumentPosition ? !!(i.compareDocumentPosition(s) & 16) : false : false;
    }
    function Xg(i) {
      i = i != null && i.ownerDocument != null && i.ownerDocument.defaultView != null ? i.ownerDocument.defaultView : window;
      for (var s = Zo(i.document); s instanceof i.HTMLIFrameElement; ) {
        try {
          var a = typeof s.contentWindow.location.href == "string";
        } catch {
          a = false;
        }
        if (a) i = s.contentWindow;
        else break;
        s = Zo(i.document);
      }
      return s;
    }
    function Jc(i) {
      var s = i && i.nodeName && i.nodeName.toLowerCase();
      return s && (s === "input" && (i.type === "text" || i.type === "search" || i.type === "tel" || i.type === "url" || i.type === "password") || s === "textarea" || i.contentEditable === "true");
    }
    var nw = nn && "documentMode" in document && 11 >= document.documentMode, ts = null, Fc = null, mr = null, Ic = false;
    function Kg(i, s, a) {
      var c = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      Ic || ts == null || ts !== Zo(c) || (c = ts, "selectionStart" in c && Jc(c) ? c = {
        start: c.selectionStart,
        end: c.selectionEnd
      } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
        anchorNode: c.anchorNode,
        anchorOffset: c.anchorOffset,
        focusNode: c.focusNode,
        focusOffset: c.focusOffset
      }), mr && dr(mr, c) || (mr = c, c = Ya(Fc, "onSelect"), 0 < c.length && (s = new Po("onSelect", "select", null, s, a), i.push({
        event: s,
        listeners: c
      }), s.target = ts)));
    }
    function gl(i, s) {
      var a = {};
      return a[i.toLowerCase()] = s.toLowerCase(), a["Webkit" + i] = "webkit" + s, a["Moz" + i] = "moz" + s, a;
    }
    var es = {
      animationend: gl("Animation", "AnimationEnd"),
      animationiteration: gl("Animation", "AnimationIteration"),
      animationstart: gl("Animation", "AnimationStart"),
      transitionrun: gl("Transition", "TransitionRun"),
      transitionstart: gl("Transition", "TransitionStart"),
      transitioncancel: gl("Transition", "TransitionCancel"),
      transitionend: gl("Transition", "TransitionEnd")
    }, Pc = {}, Qg = {};
    nn && (Qg = document.createElement("div").style, "AnimationEvent" in window || (delete es.animationend.animation, delete es.animationiteration.animation, delete es.animationstart.animation), "TransitionEvent" in window || delete es.transitionend.transition);
    function pl(i) {
      if (Pc[i]) return Pc[i];
      if (!es[i]) return i;
      var s = es[i], a;
      for (a in s) if (s.hasOwnProperty(a) && a in Qg) return Pc[i] = s[a];
      return i;
    }
    var Zg = pl("animationend"), Wg = pl("animationiteration"), Jg = pl("animationstart"), lw = pl("transitionrun"), sw = pl("transitionstart"), rw = pl("transitioncancel"), Fg = pl("transitionend"), Ig = /* @__PURE__ */ new Map(), $c = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    $c.push("scrollEnd");
    function ki(i, s) {
      Ig.set(i, s), dl(s, [
        i
      ]);
    }
    var ea = typeof reportError == "function" ? reportError : function(i) {
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
    }, hi = [], is = 0, tf = 0;
    function ia() {
      for (var i = is, s = tf = is = 0; s < i; ) {
        var a = hi[s];
        hi[s++] = null;
        var c = hi[s];
        hi[s++] = null;
        var d = hi[s];
        hi[s++] = null;
        var m = hi[s];
        if (hi[s++] = null, c !== null && d !== null) {
          var b = c.pending;
          b === null ? d.next = d : (d.next = b.next, b.next = d), c.pending = d;
        }
        m !== 0 && Pg(a, d, m);
      }
    }
    function na(i, s, a, c) {
      hi[is++] = i, hi[is++] = s, hi[is++] = a, hi[is++] = c, tf |= c, i.lanes |= c, i = i.alternate, i !== null && (i.lanes |= c);
    }
    function ef(i, s, a, c) {
      return na(i, s, a, c), la(i);
    }
    function yl(i, s) {
      return na(i, null, null, s), la(i);
    }
    function Pg(i, s, a) {
      i.lanes |= a;
      var c = i.alternate;
      c !== null && (c.lanes |= a);
      for (var d = false, m = i.return; m !== null; ) m.childLanes |= a, c = m.alternate, c !== null && (c.childLanes |= a), m.tag === 22 && (i = m.stateNode, i === null || i._visibility & 1 || (d = true)), i = m, m = m.return;
      return i.tag === 3 ? (m = i.stateNode, d && s !== null && (d = 31 - $e(a), i = m.hiddenUpdates, c = i[d], c === null ? i[d] = [
        s
      ] : c.push(s), s.lane = a | 536870912), m) : null;
    }
    function la(i) {
      if (50 < Lr) throw Lr = 0, fh = null, Error(n(185));
      for (var s = i.return; s !== null; ) i = s, s = i.return;
      return i.tag === 3 ? i.stateNode : null;
    }
    var ns = {};
    function ow(i, s, a, c) {
      this.tag = i, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = s, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function ei(i, s, a, c) {
      return new ow(i, s, a, c);
    }
    function nf(i) {
      return i = i.prototype, !(!i || !i.isReactComponent);
    }
    function ln(i, s) {
      var a = i.alternate;
      return a === null ? (a = ei(i.tag, s, i.key, i.mode), a.elementType = i.elementType, a.type = i.type, a.stateNode = i.stateNode, a.alternate = i, i.alternate = a) : (a.pendingProps = s, a.type = i.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = i.flags & 65011712, a.childLanes = i.childLanes, a.lanes = i.lanes, a.child = i.child, a.memoizedProps = i.memoizedProps, a.memoizedState = i.memoizedState, a.updateQueue = i.updateQueue, s = i.dependencies, a.dependencies = s === null ? null : {
        lanes: s.lanes,
        firstContext: s.firstContext
      }, a.sibling = i.sibling, a.index = i.index, a.ref = i.ref, a.refCleanup = i.refCleanup, a;
    }
    function $g(i, s) {
      i.flags &= 65011714;
      var a = i.alternate;
      return a === null ? (i.childLanes = 0, i.lanes = s, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, s = a.dependencies, i.dependencies = s === null ? null : {
        lanes: s.lanes,
        firstContext: s.firstContext
      }), i;
    }
    function sa(i, s, a, c, d, m) {
      var b = 0;
      if (c = i, typeof i == "function") nf(i) && (b = 1);
      else if (typeof i == "string") b = hA(i, a, $.current) ? 26 : i === "html" || i === "head" || i === "body" ? 27 : 5;
      else t: switch (i) {
        case tt:
          return i = ei(31, a, s, d), i.elementType = tt, i.lanes = m, i;
        case C:
          return bl(a.children, d, m, s);
        case _:
          b = 8, d |= 24;
          break;
        case O:
          return i = ei(12, a, s, d | 2), i.elementType = O, i.lanes = m, i;
        case N:
          return i = ei(13, a, s, d), i.elementType = N, i.lanes = m, i;
        case G:
          return i = ei(19, a, s, d), i.elementType = G, i.lanes = m, i;
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
          b = 29, a = Error(n(130, i === null ? "null" : typeof i, "")), c = null;
      }
      return s = ei(b, a, s, d), s.elementType = i, s.type = c, s.lanes = m, s;
    }
    function bl(i, s, a, c) {
      return i = ei(7, i, c, s), i.lanes = a, i;
    }
    function lf(i, s, a) {
      return i = ei(6, i, null, s), i.lanes = a, i;
    }
    function tp(i) {
      var s = ei(18, null, null, 0);
      return s.stateNode = i, s;
    }
    function sf(i, s, a) {
      return s = ei(4, i.children !== null ? i.children : [], i.key, s), s.lanes = a, s.stateNode = {
        containerInfo: i.containerInfo,
        pendingChildren: null,
        implementation: i.implementation
      }, s;
    }
    var ep = /* @__PURE__ */ new WeakMap();
    function di(i, s) {
      if (typeof i == "object" && i !== null) {
        var a = ep.get(i);
        return a !== void 0 ? a : (s = {
          value: i,
          source: s,
          stack: tg(s)
        }, ep.set(i, s), s);
      }
      return {
        value: i,
        source: s,
        stack: tg(s)
      };
    }
    var ls = [], ss = 0, ra = null, gr = 0, mi = [], gi = 0, On = null, Ni = 1, Li = "";
    function sn(i, s) {
      ls[ss++] = gr, ls[ss++] = ra, ra = i, gr = s;
    }
    function ip(i, s, a) {
      mi[gi++] = Ni, mi[gi++] = Li, mi[gi++] = On, On = i;
      var c = Ni;
      i = Li;
      var d = 32 - $e(c) - 1;
      c &= ~(1 << d), a += 1;
      var m = 32 - $e(s) + d;
      if (30 < m) {
        var b = d - d % 5;
        m = (c & (1 << b) - 1).toString(32), c >>= b, d -= b, Ni = 1 << 32 - $e(s) + d | a << d | c, Li = m + i;
      } else Ni = 1 << m | a << d | c, Li = i;
    }
    function rf(i) {
      i.return !== null && (sn(i, 1), ip(i, 1, 0));
    }
    function of(i) {
      for (; i === ra; ) ra = ls[--ss], ls[ss] = null, gr = ls[--ss], ls[ss] = null;
      for (; i === On; ) On = mi[--gi], mi[gi] = null, Li = mi[--gi], mi[gi] = null, Ni = mi[--gi], mi[gi] = null;
    }
    function np(i, s) {
      mi[gi++] = Ni, mi[gi++] = Li, mi[gi++] = On, Ni = s.id, Li = s.overflow, On = i;
    }
    var ve = null, Kt = null, _t = false, Dn = null, pi = false, af = Error(n(519));
    function En(i) {
      var s = Error(n(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
      throw pr(di(s, i)), af;
    }
    function lp(i) {
      var s = i.stateNode, a = i.type, c = i.memoizedProps;
      switch (s[be] = i, s[qe] = c, a) {
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
          for (a = 0; a < Ur.length; a++) At(Ur[a], s);
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
          At("invalid", s), yg(s, c.value, c.defaultValue, c.checked, c.defaultChecked, c.type, c.name, true);
          break;
        case "select":
          At("invalid", s);
          break;
        case "textarea":
          At("invalid", s), vg(s, c.value, c.defaultValue, c.children);
      }
      a = c.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || s.textContent === "" + a || c.suppressHydrationWarning === true || xy(s.textContent, a) ? (c.popover != null && (At("beforetoggle", s), At("toggle", s)), c.onScroll != null && At("scroll", s), c.onScrollEnd != null && At("scrollend", s), c.onClick != null && (s.onclick = en), s = true) : s = false, s || En(i, true);
    }
    function sp(i) {
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
      if (!_t) return sp(i), _t = true, false;
      var s = i.tag, a;
      if ((a = s !== 3 && s !== 27) && ((a = s === 5) && (a = i.type, a = !(a !== "form" && a !== "button") || _h(i.type, i.memoizedProps)), a = !a), a && Kt && En(i), sp(i), s === 13) {
        if (i = i.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(n(317));
        Kt = Dy(i);
      } else if (s === 31) {
        if (i = i.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(n(317));
        Kt = Dy(i);
      } else s === 27 ? (s = Kt, Kn(i.type) ? (i = Eh, Eh = null, Kt = i) : Kt = s) : Kt = ve ? bi(i.stateNode.nextSibling) : null;
      return true;
    }
    function vl() {
      Kt = ve = null, _t = false;
    }
    function uf() {
      var i = Dn;
      return i !== null && (Ke === null ? Ke = i : Ke.push.apply(Ke, i), Dn = null), i;
    }
    function pr(i) {
      Dn === null ? Dn = [
        i
      ] : Dn.push(i);
    }
    var cf = M(null), Sl = null, rn = null;
    function Bn(i, s, a) {
      W(cf, s._currentValue), s._currentValue = a;
    }
    function on(i) {
      i._currentValue = cf.current, H(cf);
    }
    function ff(i, s, a) {
      for (; i !== null; ) {
        var c = i.alternate;
        if ((i.childLanes & s) !== s ? (i.childLanes |= s, c !== null && (c.childLanes |= s)) : c !== null && (c.childLanes & s) !== s && (c.childLanes |= s), i === a) break;
        i = i.return;
      }
    }
    function hf(i, s, a, c) {
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
              m.lanes |= a, x = m.alternate, x !== null && (x.lanes |= a), ff(m.return, a, i), c || (b = null);
              break t;
            }
            m = x.next;
          }
        } else if (d.tag === 18) {
          if (b = d.return, b === null) throw Error(n(341));
          b.lanes |= a, m = b.alternate, m !== null && (m.lanes |= a), ff(b, a, i), b = null;
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
    function os(i, s, a, c) {
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
        } else if (d === Dt.current) {
          if (b = d.alternate, b === null) throw Error(n(387));
          b.memoizedState.memoizedState !== d.memoizedState.memoizedState && (i !== null ? i.push(Gr) : i = [
            Gr
          ]);
        }
        d = d.return;
      }
      i !== null && hf(s, i, a, c), s.flags |= 262144;
    }
    function oa(i) {
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
      return rp(Sl, i);
    }
    function aa(i, s) {
      return Sl === null && xl(i), rp(i, s);
    }
    function rp(i, s) {
      var a = s._currentValue;
      if (s = {
        context: s,
        memoizedValue: a,
        next: null
      }, rn === null) {
        if (i === null) throw Error(n(308));
        rn = s, i.dependencies = {
          lanes: 0,
          firstContext: s
        }, i.flags |= 524288;
      } else rn = rn.next = s;
      return a;
    }
    var aw = typeof AbortController < "u" ? AbortController : function() {
      var i = [], s = this.signal = {
        aborted: false,
        addEventListener: function(a, c) {
          i.push(c);
        }
      };
      this.abort = function() {
        s.aborted = true, i.forEach(function(a) {
          return a();
        });
      };
    }, uw = l.unstable_scheduleCallback, cw = l.unstable_NormalPriority, se = {
      $$typeof: L,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };
    function df() {
      return {
        controller: new aw(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function yr(i) {
      i.refCount--, i.refCount === 0 && uw(cw, function() {
        i.controller.abort();
      });
    }
    var br = null, mf = 0, as = 0, us = null;
    function fw(i, s) {
      if (br === null) {
        var a = br = [];
        mf = 0, as = yh(), us = {
          status: "pending",
          value: void 0,
          then: function(c) {
            a.push(c);
          }
        };
      }
      return mf++, s.then(op, op), s;
    }
    function op() {
      if (--mf === 0 && br !== null) {
        us !== null && (us.status = "fulfilled");
        var i = br;
        br = null, as = 0, us = null;
        for (var s = 0; s < i.length; s++) (0, i[s])();
      }
    }
    function hw(i, s) {
      var a = [], c = {
        status: "pending",
        value: null,
        reason: null,
        then: function(d) {
          a.push(d);
        }
      };
      return i.then(function() {
        c.status = "fulfilled", c.value = s;
        for (var d = 0; d < a.length; d++) (0, a[d])(s);
      }, function(d) {
        for (c.status = "rejected", c.reason = d, d = 0; d < a.length; d++) (0, a[d])(void 0);
      }), c;
    }
    var ap = R.S;
    R.S = function(i, s) {
      K0 = Ie(), typeof s == "object" && s !== null && typeof s.then == "function" && fw(i, s), ap !== null && ap(i, s);
    };
    var wl = M(null);
    function gf() {
      var i = wl.current;
      return i !== null ? i : Yt.pooledCache;
    }
    function ua(i, s) {
      s === null ? W(wl, wl.current) : W(wl, s.pool);
    }
    function up() {
      var i = gf();
      return i === null ? null : {
        parent: se._currentValue,
        pool: i
      };
    }
    var cs = Error(n(460)), pf = Error(n(474)), ca = Error(n(542)), fa = {
      then: function() {
      }
    };
    function cp(i) {
      return i = i.status, i === "fulfilled" || i === "rejected";
    }
    function fp(i, s, a) {
      switch (a = i[a], a === void 0 ? i.push(s) : a !== s && (s.then(en, en), s = a), s.status) {
        case "fulfilled":
          return s.value;
        case "rejected":
          throw i = s.reason, dp(i), i;
        default:
          if (typeof s.status == "string") s.then(en, en);
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
              throw i = s.reason, dp(i), i;
          }
          throw Cl = s, cs;
      }
    }
    function Al(i) {
      try {
        var s = i._init;
        return s(i._payload);
      } catch (a) {
        throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Cl = a, cs) : a;
      }
    }
    var Cl = null;
    function hp() {
      if (Cl === null) throw Error(n(459));
      var i = Cl;
      return Cl = null, i;
    }
    function dp(i) {
      if (i === cs || i === ca) throw Error(n(483));
    }
    var fs = null, vr = 0;
    function ha(i) {
      var s = vr;
      return vr += 1, fs === null && (fs = []), fp(fs, i, s);
    }
    function Sr(i, s) {
      s = s.props.ref, i.ref = s !== void 0 ? s : null;
    }
    function da(i, s) {
      throw s.$$typeof === v ? Error(n(525)) : (i = Object.prototype.toString.call(s), Error(n(31, i === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : i)));
    }
    function mp(i) {
      function s(k, T) {
        if (i) {
          var D = k.deletions;
          D === null ? (k.deletions = [
            T
          ], k.flags |= 16) : D.push(T);
        }
      }
      function a(k, T) {
        if (!i) return null;
        for (; T !== null; ) s(k, T), T = T.sibling;
        return null;
      }
      function c(k) {
        for (var T = /* @__PURE__ */ new Map(); k !== null; ) k.key !== null ? T.set(k.key, k) : T.set(k.index, k), k = k.sibling;
        return T;
      }
      function d(k, T) {
        return k = ln(k, T), k.index = 0, k.sibling = null, k;
      }
      function m(k, T, D) {
        return k.index = D, i ? (D = k.alternate, D !== null ? (D = D.index, D < T ? (k.flags |= 67108866, T) : D) : (k.flags |= 67108866, T)) : (k.flags |= 1048576, T);
      }
      function b(k) {
        return i && k.alternate === null && (k.flags |= 67108866), k;
      }
      function x(k, T, D, Y) {
        return T === null || T.tag !== 6 ? (T = lf(D, k.mode, Y), T.return = k, T) : (T = d(T, D), T.return = k, T);
      }
      function A(k, T, D, Y) {
        var at = D.type;
        return at === C ? U(k, T, D.props.children, Y, D.key) : T !== null && (T.elementType === at || typeof at == "object" && at !== null && at.$$typeof === lt && Al(at) === T.type) ? (T = d(T, D.props), Sr(T, D), T.return = k, T) : (T = sa(D.type, D.key, D.props, null, k.mode, Y), Sr(T, D), T.return = k, T);
      }
      function E(k, T, D, Y) {
        return T === null || T.tag !== 4 || T.stateNode.containerInfo !== D.containerInfo || T.stateNode.implementation !== D.implementation ? (T = sf(D, k.mode, Y), T.return = k, T) : (T = d(T, D.children || []), T.return = k, T);
      }
      function U(k, T, D, Y, at) {
        return T === null || T.tag !== 7 ? (T = bl(D, k.mode, Y, at), T.return = k, T) : (T = d(T, D), T.return = k, T);
      }
      function X(k, T, D) {
        if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint") return T = lf("" + T, k.mode, D), T.return = k, T;
        if (typeof T == "object" && T !== null) {
          switch (T.$$typeof) {
            case S:
              return D = sa(T.type, T.key, T.props, null, k.mode, D), Sr(D, T), D.return = k, D;
            case w:
              return T = sf(T, k.mode, D), T.return = k, T;
            case lt:
              return T = Al(T), X(k, T, D);
          }
          if (yt(T) || P(T)) return T = bl(T, k.mode, D, null), T.return = k, T;
          if (typeof T.then == "function") return X(k, ha(T), D);
          if (T.$$typeof === L) return X(k, aa(k, T), D);
          da(k, T);
        }
        return null;
      }
      function B(k, T, D, Y) {
        var at = T !== null ? T.key : null;
        if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint") return at !== null ? null : x(k, T, "" + D, Y);
        if (typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case S:
              return D.key === at ? A(k, T, D, Y) : null;
            case w:
              return D.key === at ? E(k, T, D, Y) : null;
            case lt:
              return D = Al(D), B(k, T, D, Y);
          }
          if (yt(D) || P(D)) return at !== null ? null : U(k, T, D, Y, null);
          if (typeof D.then == "function") return B(k, T, ha(D), Y);
          if (D.$$typeof === L) return B(k, T, aa(k, D), Y);
          da(k, D);
        }
        return null;
      }
      function z(k, T, D, Y, at) {
        if (typeof Y == "string" && Y !== "" || typeof Y == "number" || typeof Y == "bigint") return k = k.get(D) || null, x(T, k, "" + Y, at);
        if (typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case S:
              return k = k.get(Y.key === null ? D : Y.key) || null, A(T, k, Y, at);
            case w:
              return k = k.get(Y.key === null ? D : Y.key) || null, E(T, k, Y, at);
            case lt:
              return Y = Al(Y), z(k, T, D, Y, at);
          }
          if (yt(Y) || P(Y)) return k = k.get(D) || null, U(T, k, Y, at, null);
          if (typeof Y.then == "function") return z(k, T, D, ha(Y), at);
          if (Y.$$typeof === L) return z(k, T, D, aa(T, Y), at);
          da(T, Y);
        }
        return null;
      }
      function nt(k, T, D, Y) {
        for (var at = null, Rt = null, st = T, xt = T = 0, Mt = null; st !== null && xt < D.length; xt++) {
          st.index > xt ? (Mt = st, st = null) : Mt = st.sibling;
          var zt = B(k, st, D[xt], Y);
          if (zt === null) {
            st === null && (st = Mt);
            break;
          }
          i && st && zt.alternate === null && s(k, st), T = m(zt, T, xt), Rt === null ? at = zt : Rt.sibling = zt, Rt = zt, st = Mt;
        }
        if (xt === D.length) return a(k, st), _t && sn(k, xt), at;
        if (st === null) {
          for (; xt < D.length; xt++) st = X(k, D[xt], Y), st !== null && (T = m(st, T, xt), Rt === null ? at = st : Rt.sibling = st, Rt = st);
          return _t && sn(k, xt), at;
        }
        for (st = c(st); xt < D.length; xt++) Mt = z(st, k, xt, D[xt], Y), Mt !== null && (i && Mt.alternate !== null && st.delete(Mt.key === null ? xt : Mt.key), T = m(Mt, T, xt), Rt === null ? at = Mt : Rt.sibling = Mt, Rt = Mt);
        return i && st.forEach(function(Fn) {
          return s(k, Fn);
        }), _t && sn(k, xt), at;
      }
      function ct(k, T, D, Y) {
        if (D == null) throw Error(n(151));
        for (var at = null, Rt = null, st = T, xt = T = 0, Mt = null, zt = D.next(); st !== null && !zt.done; xt++, zt = D.next()) {
          st.index > xt ? (Mt = st, st = null) : Mt = st.sibling;
          var Fn = B(k, st, zt.value, Y);
          if (Fn === null) {
            st === null && (st = Mt);
            break;
          }
          i && st && Fn.alternate === null && s(k, st), T = m(Fn, T, xt), Rt === null ? at = Fn : Rt.sibling = Fn, Rt = Fn, st = Mt;
        }
        if (zt.done) return a(k, st), _t && sn(k, xt), at;
        if (st === null) {
          for (; !zt.done; xt++, zt = D.next()) zt = X(k, zt.value, Y), zt !== null && (T = m(zt, T, xt), Rt === null ? at = zt : Rt.sibling = zt, Rt = zt);
          return _t && sn(k, xt), at;
        }
        for (st = c(st); !zt.done; xt++, zt = D.next()) zt = z(st, k, xt, zt.value, Y), zt !== null && (i && zt.alternate !== null && st.delete(zt.key === null ? xt : zt.key), T = m(zt, T, xt), Rt === null ? at = zt : Rt.sibling = zt, Rt = zt);
        return i && st.forEach(function(AA) {
          return s(k, AA);
        }), _t && sn(k, xt), at;
      }
      function qt(k, T, D, Y) {
        if (typeof D == "object" && D !== null && D.type === C && D.key === null && (D = D.props.children), typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case S:
              t: {
                for (var at = D.key; T !== null; ) {
                  if (T.key === at) {
                    if (at = D.type, at === C) {
                      if (T.tag === 7) {
                        a(k, T.sibling), Y = d(T, D.props.children), Y.return = k, k = Y;
                        break t;
                      }
                    } else if (T.elementType === at || typeof at == "object" && at !== null && at.$$typeof === lt && Al(at) === T.type) {
                      a(k, T.sibling), Y = d(T, D.props), Sr(Y, D), Y.return = k, k = Y;
                      break t;
                    }
                    a(k, T);
                    break;
                  } else s(k, T);
                  T = T.sibling;
                }
                D.type === C ? (Y = bl(D.props.children, k.mode, Y, D.key), Y.return = k, k = Y) : (Y = sa(D.type, D.key, D.props, null, k.mode, Y), Sr(Y, D), Y.return = k, k = Y);
              }
              return b(k);
            case w:
              t: {
                for (at = D.key; T !== null; ) {
                  if (T.key === at) if (T.tag === 4 && T.stateNode.containerInfo === D.containerInfo && T.stateNode.implementation === D.implementation) {
                    a(k, T.sibling), Y = d(T, D.children || []), Y.return = k, k = Y;
                    break t;
                  } else {
                    a(k, T);
                    break;
                  }
                  else s(k, T);
                  T = T.sibling;
                }
                Y = sf(D, k.mode, Y), Y.return = k, k = Y;
              }
              return b(k);
            case lt:
              return D = Al(D), qt(k, T, D, Y);
          }
          if (yt(D)) return nt(k, T, D, Y);
          if (P(D)) {
            if (at = P(D), typeof at != "function") throw Error(n(150));
            return D = at.call(D), ct(k, T, D, Y);
          }
          if (typeof D.then == "function") return qt(k, T, ha(D), Y);
          if (D.$$typeof === L) return qt(k, T, aa(k, D), Y);
          da(k, D);
        }
        return typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint" ? (D = "" + D, T !== null && T.tag === 6 ? (a(k, T.sibling), Y = d(T, D), Y.return = k, k = Y) : (a(k, T), Y = lf(D, k.mode, Y), Y.return = k, k = Y), b(k)) : a(k, T);
      }
      return function(k, T, D, Y) {
        try {
          vr = 0;
          var at = qt(k, T, D, Y);
          return fs = null, at;
        } catch (st) {
          if (st === cs || st === ca) throw st;
          var Rt = ei(29, st, null, k.mode);
          return Rt.lanes = Y, Rt.return = k, Rt;
        } finally {
        }
      };
    }
    var Ml = mp(true), gp = mp(false), Rn = false;
    function yf(i) {
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
    function bf(i, s) {
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
    function Nn(i, s, a) {
      var c = i.updateQueue;
      if (c === null) return null;
      if (c = c.shared, (Nt & 2) !== 0) {
        var d = c.pending;
        return d === null ? s.next = s : (s.next = d.next, d.next = s), c.pending = s, s = la(i), Pg(i, null, a), s;
      }
      return na(i, c, s, a), la(i);
    }
    function xr(i, s, a) {
      if (s = s.updateQueue, s !== null && (s = s.shared, (a & 4194048) !== 0)) {
        var c = s.lanes;
        c &= i.pendingLanes, a |= c, s.lanes = a, rg(i, a);
      }
    }
    function vf(i, s) {
      var a = i.updateQueue, c = i.alternate;
      if (c !== null && (c = c.updateQueue, a === c)) {
        var d = null, m = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var b = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            m === null ? d = m = b : m = m.next = b, a = a.next;
          } while (a !== null);
          m === null ? d = m = s : m = m.next = s;
        } else d = m = s;
        a = {
          baseState: c.baseState,
          firstBaseUpdate: d,
          lastBaseUpdate: m,
          shared: c.shared,
          callbacks: c.callbacks
        }, i.updateQueue = a;
        return;
      }
      i = a.lastBaseUpdate, i === null ? a.firstBaseUpdate = s : i.next = s, a.lastBaseUpdate = s;
    }
    var Sf = false;
    function wr() {
      if (Sf) {
        var i = us;
        if (i !== null) throw i;
      }
    }
    function Ar(i, s, a, c) {
      Sf = false;
      var d = i.updateQueue;
      Rn = false;
      var m = d.firstBaseUpdate, b = d.lastBaseUpdate, x = d.shared.pending;
      if (x !== null) {
        d.shared.pending = null;
        var A = x, E = A.next;
        A.next = null, b === null ? m = E : b.next = E, b = A;
        var U = i.alternate;
        U !== null && (U = U.updateQueue, x = U.lastBaseUpdate, x !== b && (x === null ? U.firstBaseUpdate = E : x.next = E, U.lastBaseUpdate = A));
      }
      if (m !== null) {
        var X = d.baseState;
        b = 0, U = E = A = null, x = m;
        do {
          var B = x.lane & -536870913, z = B !== x.lane;
          if (z ? (Ct & B) === B : (c & B) === B) {
            B !== 0 && B === as && (Sf = true), U !== null && (U = U.next = {
              lane: 0,
              tag: x.tag,
              payload: x.payload,
              callback: null,
              next: null
            });
            t: {
              var nt = i, ct = x;
              B = s;
              var qt = a;
              switch (ct.tag) {
                case 1:
                  if (nt = ct.payload, typeof nt == "function") {
                    X = nt.call(qt, X, B);
                    break t;
                  }
                  X = nt;
                  break t;
                case 3:
                  nt.flags = nt.flags & -65537 | 128;
                case 0:
                  if (nt = ct.payload, B = typeof nt == "function" ? nt.call(qt, X, B) : nt, B == null) break t;
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
          }, U === null ? (E = U = z, A = X) : U = U.next = z, b |= B;
          if (x = x.next, x === null) {
            if (x = d.shared.pending, x === null) break;
            z = x, x = z.next, z.next = null, d.lastBaseUpdate = z, d.shared.pending = null;
          }
        } while (true);
        U === null && (A = X), d.baseState = A, d.firstBaseUpdate = E, d.lastBaseUpdate = U, m === null && (d.shared.lanes = 0), qn |= b, i.lanes = b, i.memoizedState = X;
      }
    }
    function pp(i, s) {
      if (typeof i != "function") throw Error(n(191, i));
      i.call(s);
    }
    function yp(i, s) {
      var a = i.callbacks;
      if (a !== null) for (i.callbacks = null, i = 0; i < a.length; i++) pp(a[i], s);
    }
    var hs = M(null), ma = M(0);
    function bp(i, s) {
      i = pn, W(ma, i), W(hs, s), pn = i | s.baseLanes;
    }
    function xf() {
      W(ma, pn), W(hs, hs.current);
    }
    function wf() {
      pn = ma.current, H(hs), H(ma);
    }
    var ii = M(null), yi = null;
    function Ln(i) {
      var s = i.alternate;
      W(ee, ee.current & 1), W(ii, i), yi === null && (s === null || hs.current !== null || s.memoizedState !== null) && (yi = i);
    }
    function Af(i) {
      W(ee, ee.current), W(ii, i), yi === null && (yi = i);
    }
    function vp(i) {
      i.tag === 22 ? (W(ee, ee.current), W(ii, i), yi === null && (yi = i)) : Hn();
    }
    function Hn() {
      W(ee, ee.current), W(ii, ii.current);
    }
    function ni(i) {
      H(ii), yi === i && (yi = null), H(ee);
    }
    var ee = M(0);
    function ga(i) {
      for (var s = i; s !== null; ) {
        if (s.tag === 13) {
          var a = s.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || Oh(a) || Dh(a))) return s;
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
    var an = 0, vt = null, Ut = null, re = null, pa = false, ds = false, _l = false, ya = 0, Cr = 0, ms = null, dw = 0;
    function It() {
      throw Error(n(321));
    }
    function Cf(i, s) {
      if (s === null) return false;
      for (var a = 0; a < s.length && a < i.length; a++) if (!ti(i[a], s[a])) return false;
      return true;
    }
    function Mf(i, s, a, c, d, m) {
      return an = m, vt = s, s.memoizedState = null, s.updateQueue = null, s.lanes = 0, R.H = i === null || i.memoizedState === null ? i0 : qf, _l = false, m = a(c, d), _l = false, ds && (m = xp(s, a, c, d)), Sp(i), m;
    }
    function Sp(i) {
      R.H = Tr;
      var s = Ut !== null && Ut.next !== null;
      if (an = 0, re = Ut = vt = null, pa = false, Cr = 0, ms = null, s) throw Error(n(300));
      i === null || oe || (i = i.dependencies, i !== null && oa(i) && (oe = true));
    }
    function xp(i, s, a, c) {
      vt = i;
      var d = 0;
      do {
        if (ds && (ms = null), Cr = 0, ds = false, 25 <= d) throw Error(n(301));
        if (d += 1, re = Ut = null, i.updateQueue != null) {
          var m = i.updateQueue;
          m.lastEffect = null, m.events = null, m.stores = null, m.memoCache != null && (m.memoCache.index = 0);
        }
        R.H = n0, m = s(a, c);
      } while (ds);
      return m;
    }
    function mw() {
      var i = R.H, s = i.useState()[0];
      return s = typeof s.then == "function" ? Mr(s) : s, i = i.useState()[0], (Ut !== null ? Ut.memoizedState : null) !== i && (vt.flags |= 1024), s;
    }
    function _f() {
      var i = ya !== 0;
      return ya = 0, i;
    }
    function Tf(i, s, a) {
      s.updateQueue = i.updateQueue, s.flags &= -2053, i.lanes &= ~a;
    }
    function kf(i) {
      if (pa) {
        for (i = i.memoizedState; i !== null; ) {
          var s = i.queue;
          s !== null && (s.pending = null), i = i.next;
        }
        pa = false;
      }
      an = 0, re = Ut = vt = null, ds = false, Cr = ya = 0, ms = null;
    }
    function Ne() {
      var i = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return re === null ? vt.memoizedState = re = i : re = re.next = i, re;
    }
    function ie() {
      if (Ut === null) {
        var i = vt.alternate;
        i = i !== null ? i.memoizedState : null;
      } else i = Ut.next;
      var s = re === null ? vt.memoizedState : re.next;
      if (s !== null) re = s, Ut = i;
      else {
        if (i === null) throw vt.alternate === null ? Error(n(467)) : Error(n(310));
        Ut = i, i = {
          memoizedState: Ut.memoizedState,
          baseState: Ut.baseState,
          baseQueue: Ut.baseQueue,
          queue: Ut.queue,
          next: null
        }, re === null ? vt.memoizedState = re = i : re = re.next = i;
      }
      return re;
    }
    function ba() {
      return {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null
      };
    }
    function Mr(i) {
      var s = Cr;
      return Cr += 1, ms === null && (ms = []), i = fp(ms, i, s), s = vt, (re === null ? s.memoizedState : re.next) === null && (s = s.alternate, R.H = s === null || s.memoizedState === null ? i0 : qf), i;
    }
    function va(i) {
      if (i !== null && typeof i == "object") {
        if (typeof i.then == "function") return Mr(i);
        if (i.$$typeof === L) return Se(i);
      }
      throw Error(n(438, String(i)));
    }
    function Of(i) {
      var s = null, a = vt.updateQueue;
      if (a !== null && (s = a.memoCache), s == null) {
        var c = vt.alternate;
        c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (s = {
          data: c.data.map(function(d) {
            return d.slice();
          }),
          index: 0
        })));
      }
      if (s == null && (s = {
        data: [],
        index: 0
      }), a === null && (a = ba(), vt.updateQueue = a), a.memoCache = s, a = s.data[s.index], a === void 0) for (a = s.data[s.index] = Array(i), c = 0; c < i; c++) a[c] = pt;
      return s.index++, a;
    }
    function un(i, s) {
      return typeof s == "function" ? s(i) : s;
    }
    function Sa(i) {
      var s = ie();
      return Df(s, Ut, i);
    }
    function Df(i, s, a) {
      var c = i.queue;
      if (c === null) throw Error(n(311));
      c.lastRenderedReducer = a;
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
        var x = b = null, A = null, E = s, U = false;
        do {
          var X = E.lane & -536870913;
          if (X !== E.lane ? (Ct & X) === X : (an & X) === X) {
            var B = E.revertLane;
            if (B === 0) A !== null && (A = A.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null
            }), X === as && (U = true);
            else if ((an & B) === B) {
              E = E.next, B === as && (U = true);
              continue;
            } else X = {
              lane: 0,
              revertLane: E.revertLane,
              gesture: null,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null
            }, A === null ? (x = A = X, b = m) : A = A.next = X, vt.lanes |= B, qn |= B;
            X = E.action, _l && a(m, X), m = E.hasEagerState ? E.eagerState : a(m, X);
          } else B = {
            lane: X,
            revertLane: E.revertLane,
            gesture: E.gesture,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null
          }, A === null ? (x = A = B, b = m) : A = A.next = B, vt.lanes |= X, qn |= X;
          E = E.next;
        } while (E !== null && E !== s);
        if (A === null ? b = m : A.next = x, !ti(m, i.memoizedState) && (oe = true, U && (a = us, a !== null))) throw a;
        i.memoizedState = m, i.baseState = b, i.baseQueue = A, c.lastRenderedState = m;
      }
      return d === null && (c.lanes = 0), [
        i.memoizedState,
        c.dispatch
      ];
    }
    function Ef(i) {
      var s = ie(), a = s.queue;
      if (a === null) throw Error(n(311));
      a.lastRenderedReducer = i;
      var c = a.dispatch, d = a.pending, m = s.memoizedState;
      if (d !== null) {
        a.pending = null;
        var b = d = d.next;
        do
          m = i(m, b.action), b = b.next;
        while (b !== d);
        ti(m, s.memoizedState) || (oe = true), s.memoizedState = m, s.baseQueue === null && (s.baseState = m), a.lastRenderedState = m;
      }
      return [
        m,
        c
      ];
    }
    function wp(i, s, a) {
      var c = vt, d = ie(), m = _t;
      if (m) {
        if (a === void 0) throw Error(n(407));
        a = a();
      } else a = s();
      var b = !ti((Ut || d).memoizedState, a);
      if (b && (d.memoizedState = a, oe = true), d = d.queue, zf(Mp.bind(null, c, d, i), [
        i
      ]), d.getSnapshot !== s || b || re !== null && re.memoizedState.tag & 1) {
        if (c.flags |= 2048, gs(9, {
          destroy: void 0
        }, Cp.bind(null, c, d, a, s), null), Yt === null) throw Error(n(349));
        m || (an & 127) !== 0 || Ap(c, s, a);
      }
      return a;
    }
    function Ap(i, s, a) {
      i.flags |= 16384, i = {
        getSnapshot: s,
        value: a
      }, s = vt.updateQueue, s === null ? (s = ba(), vt.updateQueue = s, s.stores = [
        i
      ]) : (a = s.stores, a === null ? s.stores = [
        i
      ] : a.push(i));
    }
    function Cp(i, s, a, c) {
      s.value = a, s.getSnapshot = c, _p(s) && Tp(i);
    }
    function Mp(i, s, a) {
      return a(function() {
        _p(s) && Tp(i);
      });
    }
    function _p(i) {
      var s = i.getSnapshot;
      i = i.value;
      try {
        var a = s();
        return !ti(i, a);
      } catch {
        return true;
      }
    }
    function Tp(i) {
      var s = yl(i, 2);
      s !== null && Qe(s, i, 2);
    }
    function Bf(i) {
      var s = Ne();
      if (typeof i == "function") {
        var a = i;
        if (i = a(), _l) {
          _n(true);
          try {
            a();
          } finally {
            _n(false);
          }
        }
      }
      return s.memoizedState = s.baseState = i, s.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: un,
        lastRenderedState: i
      }, s;
    }
    function kp(i, s, a, c) {
      return i.baseState = a, Df(i, Ut, typeof c == "function" ? c : un);
    }
    function gw(i, s, a, c, d) {
      if (Aa(i)) throw Error(n(485));
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
        R.T !== null ? a(true) : m.isTransition = false, c(m), a = s.pending, a === null ? (m.next = s.pending = m, Op(s, m)) : (m.next = a.next, s.pending = a.next = m);
      }
    }
    function Op(i, s) {
      var a = s.action, c = s.payload, d = i.state;
      if (s.isTransition) {
        var m = R.T, b = {};
        R.T = b;
        try {
          var x = a(d, c), A = R.S;
          A !== null && A(b, x), Dp(i, s, x);
        } catch (E) {
          Rf(i, s, E);
        } finally {
          m !== null && b.types !== null && (m.types = b.types), R.T = m;
        }
      } else try {
        m = a(d, c), Dp(i, s, m);
      } catch (E) {
        Rf(i, s, E);
      }
    }
    function Dp(i, s, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(c) {
        Ep(i, s, c);
      }, function(c) {
        return Rf(i, s, c);
      }) : Ep(i, s, a);
    }
    function Ep(i, s, a) {
      s.status = "fulfilled", s.value = a, Bp(s), i.state = a, s = i.pending, s !== null && (a = s.next, a === s ? i.pending = null : (a = a.next, s.next = a, Op(i, a)));
    }
    function Rf(i, s, a) {
      var c = i.pending;
      if (i.pending = null, c !== null) {
        c = c.next;
        do
          s.status = "rejected", s.reason = a, Bp(s), s = s.next;
        while (s !== c);
      }
      i.action = null;
    }
    function Bp(i) {
      i = i.listeners;
      for (var s = 0; s < i.length; s++) (0, i[s])();
    }
    function Rp(i, s) {
      return s;
    }
    function zp(i, s) {
      if (_t) {
        var a = Yt.formState;
        if (a !== null) {
          t: {
            var c = vt;
            if (_t) {
              if (Kt) {
                e: {
                  for (var d = Kt, m = pi; d.nodeType !== 8; ) {
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
                  Kt = bi(d.nextSibling), c = d.data === "F!";
                  break t;
                }
              }
              En(c);
            }
            c = false;
          }
          c && (s = a[0]);
        }
      }
      return a = Ne(), a.memoizedState = a.baseState = s, c = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Rp,
        lastRenderedState: s
      }, a.queue = c, a = $p.bind(null, vt, c), c.dispatch = a, c = Bf(false), m = Vf.bind(null, vt, false, c.queue), c = Ne(), d = {
        state: s,
        dispatch: null,
        action: i,
        pending: null
      }, c.queue = d, a = gw.bind(null, vt, d, m, a), d.dispatch = a, c.memoizedState = i, [
        s,
        a,
        false
      ];
    }
    function Np(i) {
      var s = ie();
      return Lp(s, Ut, i);
    }
    function Lp(i, s, a) {
      if (s = Df(i, s, Rp)[0], i = Sa(un)[0], typeof s == "object" && s !== null && typeof s.then == "function") try {
        var c = Mr(s);
      } catch (b) {
        throw b === cs ? ca : b;
      }
      else c = s;
      s = ie();
      var d = s.queue, m = d.dispatch;
      return a !== s.memoizedState && (vt.flags |= 2048, gs(9, {
        destroy: void 0
      }, pw.bind(null, d, a), null)), [
        c,
        m,
        i
      ];
    }
    function pw(i, s) {
      i.action = s;
    }
    function Hp(i) {
      var s = ie(), a = Ut;
      if (a !== null) return Lp(s, a, i);
      ie(), s = s.memoizedState, a = ie();
      var c = a.queue.dispatch;
      return a.memoizedState = i, [
        s,
        c,
        false
      ];
    }
    function gs(i, s, a, c) {
      return i = {
        tag: i,
        create: a,
        deps: c,
        inst: s,
        next: null
      }, s = vt.updateQueue, s === null && (s = ba(), vt.updateQueue = s), a = s.lastEffect, a === null ? s.lastEffect = i.next = i : (c = a.next, a.next = i, i.next = c, s.lastEffect = i), i;
    }
    function Up() {
      return ie().memoizedState;
    }
    function xa(i, s, a, c) {
      var d = Ne();
      vt.flags |= i, d.memoizedState = gs(1 | s, {
        destroy: void 0
      }, a, c === void 0 ? null : c);
    }
    function wa(i, s, a, c) {
      var d = ie();
      c = c === void 0 ? null : c;
      var m = d.memoizedState.inst;
      Ut !== null && c !== null && Cf(c, Ut.memoizedState.deps) ? d.memoizedState = gs(s, m, a, c) : (vt.flags |= i, d.memoizedState = gs(1 | s, m, a, c));
    }
    function Vp(i, s) {
      xa(8390656, 8, i, s);
    }
    function zf(i, s) {
      wa(2048, 8, i, s);
    }
    function yw(i) {
      vt.flags |= 4;
      var s = vt.updateQueue;
      if (s === null) s = ba(), vt.updateQueue = s, s.events = [
        i
      ];
      else {
        var a = s.events;
        a === null ? s.events = [
          i
        ] : a.push(i);
      }
    }
    function qp(i) {
      var s = ie().memoizedState;
      return yw({
        ref: s,
        nextImpl: i
      }), function() {
        if ((Nt & 2) !== 0) throw Error(n(440));
        return s.impl.apply(void 0, arguments);
      };
    }
    function jp(i, s) {
      return wa(4, 2, i, s);
    }
    function Yp(i, s) {
      return wa(4, 4, i, s);
    }
    function Gp(i, s) {
      if (typeof s == "function") {
        i = i();
        var a = s(i);
        return function() {
          typeof a == "function" ? a() : s(null);
        };
      }
      if (s != null) return i = i(), s.current = i, function() {
        s.current = null;
      };
    }
    function Xp(i, s, a) {
      a = a != null ? a.concat([
        i
      ]) : null, wa(4, 4, Gp.bind(null, s, i), a);
    }
    function Nf() {
    }
    function Kp(i, s) {
      var a = ie();
      s = s === void 0 ? null : s;
      var c = a.memoizedState;
      return s !== null && Cf(s, c[1]) ? c[0] : (a.memoizedState = [
        i,
        s
      ], i);
    }
    function Qp(i, s) {
      var a = ie();
      s = s === void 0 ? null : s;
      var c = a.memoizedState;
      if (s !== null && Cf(s, c[1])) return c[0];
      if (c = i(), _l) {
        _n(true);
        try {
          i();
        } finally {
          _n(false);
        }
      }
      return a.memoizedState = [
        c,
        s
      ], c;
    }
    function Lf(i, s, a) {
      return a === void 0 || (an & 1073741824) !== 0 && (Ct & 261930) === 0 ? i.memoizedState = s : (i.memoizedState = a, i = Z0(), vt.lanes |= i, qn |= i, a);
    }
    function Zp(i, s, a, c) {
      return ti(a, s) ? a : hs.current !== null ? (i = Lf(i, a, c), ti(i, s) || (oe = true), i) : (an & 42) === 0 || (an & 1073741824) !== 0 && (Ct & 261930) === 0 ? (oe = true, i.memoizedState = a) : (i = Z0(), vt.lanes |= i, qn |= i, s);
    }
    function Wp(i, s, a, c, d) {
      var m = Z.p;
      Z.p = m !== 0 && 8 > m ? m : 8;
      var b = R.T, x = {};
      R.T = x, Vf(i, false, s, a);
      try {
        var A = d(), E = R.S;
        if (E !== null && E(x, A), A !== null && typeof A == "object" && typeof A.then == "function") {
          var U = hw(A, c);
          _r(i, s, U, ri(i));
        } else _r(i, s, c, ri(i));
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
    function bw() {
    }
    function Hf(i, s, a, c) {
      if (i.tag !== 5) throw Error(n(476));
      var d = Jp(i).queue;
      Wp(i, d, s, it, a === null ? bw : function() {
        return Fp(i), a(c);
      });
    }
    function Jp(i) {
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
          lastRenderedReducer: un,
          lastRenderedState: it
        },
        next: null
      };
      var a = {};
      return s.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: un,
          lastRenderedState: a
        },
        next: null
      }, i.memoizedState = s, i = i.alternate, i !== null && (i.memoizedState = s), s;
    }
    function Fp(i) {
      var s = Jp(i);
      s.next === null && (s = i.alternate.memoizedState), _r(i, s.next.queue, {}, ri());
    }
    function Uf() {
      return Se(Gr);
    }
    function Ip() {
      return ie().memoizedState;
    }
    function Pp() {
      return ie().memoizedState;
    }
    function vw(i) {
      for (var s = i.return; s !== null; ) {
        switch (s.tag) {
          case 24:
          case 3:
            var a = ri();
            i = zn(a);
            var c = Nn(s, i, a);
            c !== null && (Qe(c, s, a), xr(c, s, a)), s = {
              cache: df()
            }, i.payload = s;
            return;
        }
        s = s.return;
      }
    }
    function Sw(i, s, a) {
      var c = ri();
      a = {
        lane: c,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, Aa(i) ? t0(s, a) : (a = ef(i, s, a, c), a !== null && (Qe(a, i, c), e0(a, s, c)));
    }
    function $p(i, s, a) {
      var c = ri();
      _r(i, s, a, c);
    }
    function _r(i, s, a, c) {
      var d = {
        lane: c,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (Aa(i)) t0(s, d);
      else {
        var m = i.alternate;
        if (i.lanes === 0 && (m === null || m.lanes === 0) && (m = s.lastRenderedReducer, m !== null)) try {
          var b = s.lastRenderedState, x = m(b, a);
          if (d.hasEagerState = true, d.eagerState = x, ti(x, b)) return na(i, s, d, 0), Yt === null && ia(), false;
        } catch {
        } finally {
        }
        if (a = ef(i, s, d, c), a !== null) return Qe(a, i, c), e0(a, s, c), true;
      }
      return false;
    }
    function Vf(i, s, a, c) {
      if (c = {
        lane: 2,
        revertLane: yh(),
        gesture: null,
        action: c,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, Aa(i)) {
        if (s) throw Error(n(479));
      } else s = ef(i, a, c, 2), s !== null && Qe(s, i, 2);
    }
    function Aa(i) {
      var s = i.alternate;
      return i === vt || s !== null && s === vt;
    }
    function t0(i, s) {
      ds = pa = true;
      var a = i.pending;
      a === null ? s.next = s : (s.next = a.next, a.next = s), i.pending = s;
    }
    function e0(i, s, a) {
      if ((a & 4194048) !== 0) {
        var c = s.lanes;
        c &= i.pendingLanes, a |= c, s.lanes = a, rg(i, a);
      }
    }
    var Tr = {
      readContext: Se,
      use: va,
      useCallback: It,
      useContext: It,
      useEffect: It,
      useImperativeHandle: It,
      useLayoutEffect: It,
      useInsertionEffect: It,
      useMemo: It,
      useReducer: It,
      useRef: It,
      useState: It,
      useDebugValue: It,
      useDeferredValue: It,
      useTransition: It,
      useSyncExternalStore: It,
      useId: It,
      useHostTransitionStatus: It,
      useFormState: It,
      useActionState: It,
      useOptimistic: It,
      useMemoCache: It,
      useCacheRefresh: It
    };
    Tr.useEffectEvent = It;
    var i0 = {
      readContext: Se,
      use: va,
      useCallback: function(i, s) {
        return Ne().memoizedState = [
          i,
          s === void 0 ? null : s
        ], i;
      },
      useContext: Se,
      useEffect: Vp,
      useImperativeHandle: function(i, s, a) {
        a = a != null ? a.concat([
          i
        ]) : null, xa(4194308, 4, Gp.bind(null, s, i), a);
      },
      useLayoutEffect: function(i, s) {
        return xa(4194308, 4, i, s);
      },
      useInsertionEffect: function(i, s) {
        xa(4, 2, i, s);
      },
      useMemo: function(i, s) {
        var a = Ne();
        s = s === void 0 ? null : s;
        var c = i();
        if (_l) {
          _n(true);
          try {
            i();
          } finally {
            _n(false);
          }
        }
        return a.memoizedState = [
          c,
          s
        ], c;
      },
      useReducer: function(i, s, a) {
        var c = Ne();
        if (a !== void 0) {
          var d = a(s);
          if (_l) {
            _n(true);
            try {
              a(s);
            } finally {
              _n(false);
            }
          }
        } else d = s;
        return c.memoizedState = c.baseState = d, i = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: i,
          lastRenderedState: d
        }, c.queue = i, i = i.dispatch = Sw.bind(null, vt, i), [
          c.memoizedState,
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
        i = Bf(i);
        var s = i.queue, a = $p.bind(null, vt, s);
        return s.dispatch = a, [
          i.memoizedState,
          a
        ];
      },
      useDebugValue: Nf,
      useDeferredValue: function(i, s) {
        var a = Ne();
        return Lf(a, i, s);
      },
      useTransition: function() {
        var i = Bf(false);
        return i = Wp.bind(null, vt, i.queue, true, false), Ne().memoizedState = i, [
          false,
          i
        ];
      },
      useSyncExternalStore: function(i, s, a) {
        var c = vt, d = Ne();
        if (_t) {
          if (a === void 0) throw Error(n(407));
          a = a();
        } else {
          if (a = s(), Yt === null) throw Error(n(349));
          (Ct & 127) !== 0 || Ap(c, s, a);
        }
        d.memoizedState = a;
        var m = {
          value: a,
          getSnapshot: s
        };
        return d.queue = m, Vp(Mp.bind(null, c, m, i), [
          i
        ]), c.flags |= 2048, gs(9, {
          destroy: void 0
        }, Cp.bind(null, c, m, a, s), null), a;
      },
      useId: function() {
        var i = Ne(), s = Yt.identifierPrefix;
        if (_t) {
          var a = Li, c = Ni;
          a = (c & ~(1 << 32 - $e(c) - 1)).toString(32) + a, s = "_" + s + "R_" + a, a = ya++, 0 < a && (s += "H" + a.toString(32)), s += "_";
        } else a = dw++, s = "_" + s + "r_" + a.toString(32) + "_";
        return i.memoizedState = s;
      },
      useHostTransitionStatus: Uf,
      useFormState: zp,
      useActionState: zp,
      useOptimistic: function(i) {
        var s = Ne();
        s.memoizedState = s.baseState = i;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return s.queue = a, s = Vf.bind(null, vt, true, a), a.dispatch = s, [
          i,
          s
        ];
      },
      useMemoCache: Of,
      useCacheRefresh: function() {
        return Ne().memoizedState = vw.bind(null, vt);
      },
      useEffectEvent: function(i) {
        var s = Ne(), a = {
          impl: i
        };
        return s.memoizedState = a, function() {
          if ((Nt & 2) !== 0) throw Error(n(440));
          return a.impl.apply(void 0, arguments);
        };
      }
    }, qf = {
      readContext: Se,
      use: va,
      useCallback: Kp,
      useContext: Se,
      useEffect: zf,
      useImperativeHandle: Xp,
      useInsertionEffect: jp,
      useLayoutEffect: Yp,
      useMemo: Qp,
      useReducer: Sa,
      useRef: Up,
      useState: function() {
        return Sa(un);
      },
      useDebugValue: Nf,
      useDeferredValue: function(i, s) {
        var a = ie();
        return Zp(a, Ut.memoizedState, i, s);
      },
      useTransition: function() {
        var i = Sa(un)[0], s = ie().memoizedState;
        return [
          typeof i == "boolean" ? i : Mr(i),
          s
        ];
      },
      useSyncExternalStore: wp,
      useId: Ip,
      useHostTransitionStatus: Uf,
      useFormState: Np,
      useActionState: Np,
      useOptimistic: function(i, s) {
        var a = ie();
        return kp(a, Ut, i, s);
      },
      useMemoCache: Of,
      useCacheRefresh: Pp
    };
    qf.useEffectEvent = qp;
    var n0 = {
      readContext: Se,
      use: va,
      useCallback: Kp,
      useContext: Se,
      useEffect: zf,
      useImperativeHandle: Xp,
      useInsertionEffect: jp,
      useLayoutEffect: Yp,
      useMemo: Qp,
      useReducer: Ef,
      useRef: Up,
      useState: function() {
        return Ef(un);
      },
      useDebugValue: Nf,
      useDeferredValue: function(i, s) {
        var a = ie();
        return Ut === null ? Lf(a, i, s) : Zp(a, Ut.memoizedState, i, s);
      },
      useTransition: function() {
        var i = Ef(un)[0], s = ie().memoizedState;
        return [
          typeof i == "boolean" ? i : Mr(i),
          s
        ];
      },
      useSyncExternalStore: wp,
      useId: Ip,
      useHostTransitionStatus: Uf,
      useFormState: Hp,
      useActionState: Hp,
      useOptimistic: function(i, s) {
        var a = ie();
        return Ut !== null ? kp(a, Ut, i, s) : (a.baseState = i, [
          i,
          a.queue.dispatch
        ]);
      },
      useMemoCache: Of,
      useCacheRefresh: Pp
    };
    n0.useEffectEvent = qp;
    function jf(i, s, a, c) {
      s = i.memoizedState, a = a(c, s), a = a == null ? s : y({}, s, a), i.memoizedState = a, i.lanes === 0 && (i.updateQueue.baseState = a);
    }
    var Yf = {
      enqueueSetState: function(i, s, a) {
        i = i._reactInternals;
        var c = ri(), d = zn(c);
        d.payload = s, a != null && (d.callback = a), s = Nn(i, d, c), s !== null && (Qe(s, i, c), xr(s, i, c));
      },
      enqueueReplaceState: function(i, s, a) {
        i = i._reactInternals;
        var c = ri(), d = zn(c);
        d.tag = 1, d.payload = s, a != null && (d.callback = a), s = Nn(i, d, c), s !== null && (Qe(s, i, c), xr(s, i, c));
      },
      enqueueForceUpdate: function(i, s) {
        i = i._reactInternals;
        var a = ri(), c = zn(a);
        c.tag = 2, s != null && (c.callback = s), s = Nn(i, c, a), s !== null && (Qe(s, i, a), xr(s, i, a));
      }
    };
    function l0(i, s, a, c, d, m, b) {
      return i = i.stateNode, typeof i.shouldComponentUpdate == "function" ? i.shouldComponentUpdate(c, m, b) : s.prototype && s.prototype.isPureReactComponent ? !dr(a, c) || !dr(d, m) : true;
    }
    function s0(i, s, a, c) {
      i = s.state, typeof s.componentWillReceiveProps == "function" && s.componentWillReceiveProps(a, c), typeof s.UNSAFE_componentWillReceiveProps == "function" && s.UNSAFE_componentWillReceiveProps(a, c), s.state !== i && Yf.enqueueReplaceState(s, s.state, null);
    }
    function Tl(i, s) {
      var a = s;
      if ("ref" in s) {
        a = {};
        for (var c in s) c !== "ref" && (a[c] = s[c]);
      }
      if (i = i.defaultProps) {
        a === s && (a = y({}, a));
        for (var d in i) a[d] === void 0 && (a[d] = i[d]);
      }
      return a;
    }
    function r0(i) {
      ea(i);
    }
    function o0(i) {
      console.error(i);
    }
    function a0(i) {
      ea(i);
    }
    function Ca(i, s) {
      try {
        var a = i.onUncaughtError;
        a(s.value, {
          componentStack: s.stack
        });
      } catch (c) {
        setTimeout(function() {
          throw c;
        });
      }
    }
    function u0(i, s, a) {
      try {
        var c = i.onCaughtError;
        c(a.value, {
          componentStack: a.stack,
          errorBoundary: s.tag === 1 ? s.stateNode : null
        });
      } catch (d) {
        setTimeout(function() {
          throw d;
        });
      }
    }
    function Gf(i, s, a) {
      return a = zn(a), a.tag = 3, a.payload = {
        element: null
      }, a.callback = function() {
        Ca(i, s);
      }, a;
    }
    function c0(i) {
      return i = zn(i), i.tag = 3, i;
    }
    function f0(i, s, a, c) {
      var d = a.type.getDerivedStateFromError;
      if (typeof d == "function") {
        var m = c.value;
        i.payload = function() {
          return d(m);
        }, i.callback = function() {
          u0(s, a, c);
        };
      }
      var b = a.stateNode;
      b !== null && typeof b.componentDidCatch == "function" && (i.callback = function() {
        u0(s, a, c), typeof d != "function" && (jn === null ? jn = /* @__PURE__ */ new Set([
          this
        ]) : jn.add(this));
        var x = c.stack;
        this.componentDidCatch(c.value, {
          componentStack: x !== null ? x : ""
        });
      });
    }
    function xw(i, s, a, c, d) {
      if (a.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
        if (s = a.alternate, s !== null && os(s, a, d, true), a = ii.current, a !== null) {
          switch (a.tag) {
            case 31:
            case 13:
              return yi === null ? La() : a.alternate === null && Pt === 0 && (Pt = 3), a.flags &= -257, a.flags |= 65536, a.lanes = d, c === fa ? a.flags |= 16384 : (s = a.updateQueue, s === null ? a.updateQueue = /* @__PURE__ */ new Set([
                c
              ]) : s.add(c), mh(i, c, d)), false;
            case 22:
              return a.flags |= 65536, c === fa ? a.flags |= 16384 : (s = a.updateQueue, s === null ? (s = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([
                  c
                ])
              }, a.updateQueue = s) : (a = s.retryQueue, a === null ? s.retryQueue = /* @__PURE__ */ new Set([
                c
              ]) : a.add(c)), mh(i, c, d)), false;
          }
          throw Error(n(435, a.tag));
        }
        return mh(i, c, d), La(), false;
      }
      if (_t) return s = ii.current, s !== null ? ((s.flags & 65536) === 0 && (s.flags |= 256), s.flags |= 65536, s.lanes = d, c !== af && (i = Error(n(422), {
        cause: c
      }), pr(di(i, a)))) : (c !== af && (s = Error(n(423), {
        cause: c
      }), pr(di(s, a))), i = i.current.alternate, i.flags |= 65536, d &= -d, i.lanes |= d, c = di(c, a), d = Gf(i.stateNode, c, d), vf(i, d), Pt !== 4 && (Pt = 2)), false;
      var m = Error(n(520), {
        cause: c
      });
      if (m = di(m, a), Nr === null ? Nr = [
        m
      ] : Nr.push(m), Pt !== 4 && (Pt = 2), s === null) return true;
      c = di(c, a), a = s;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, i = d & -d, a.lanes |= i, i = Gf(a.stateNode, c, i), vf(a, i), false;
          case 1:
            if (s = a.type, m = a.stateNode, (a.flags & 128) === 0 && (typeof s.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (jn === null || !jn.has(m)))) return a.flags |= 65536, d &= -d, a.lanes |= d, d = c0(d), f0(d, i, a, c), vf(a, d), false;
        }
        a = a.return;
      } while (a !== null);
      return false;
    }
    var Xf = Error(n(461)), oe = false;
    function xe(i, s, a, c) {
      s.child = i === null ? gp(s, null, a, c) : Ml(s, i.child, a, c);
    }
    function h0(i, s, a, c, d) {
      a = a.render;
      var m = s.ref;
      if ("ref" in c) {
        var b = {};
        for (var x in c) x !== "ref" && (b[x] = c[x]);
      } else b = c;
      return xl(s), c = Mf(i, s, a, b, m, d), x = _f(), i !== null && !oe ? (Tf(i, s, d), cn(i, s, d)) : (_t && x && rf(s), s.flags |= 1, xe(i, s, c, d), s.child);
    }
    function d0(i, s, a, c, d) {
      if (i === null) {
        var m = a.type;
        return typeof m == "function" && !nf(m) && m.defaultProps === void 0 && a.compare === null ? (s.tag = 15, s.type = m, m0(i, s, m, c, d)) : (i = sa(a.type, null, c, s, s.mode, d), i.ref = s.ref, i.return = s, s.child = i);
      }
      if (m = i.child, !Pf(i, d)) {
        var b = m.memoizedProps;
        if (a = a.compare, a = a !== null ? a : dr, a(b, c) && i.ref === s.ref) return cn(i, s, d);
      }
      return s.flags |= 1, i = ln(m, c), i.ref = s.ref, i.return = s, s.child = i;
    }
    function m0(i, s, a, c, d) {
      if (i !== null) {
        var m = i.memoizedProps;
        if (dr(m, c) && i.ref === s.ref) if (oe = false, s.pendingProps = c = m, Pf(i, d)) (i.flags & 131072) !== 0 && (oe = true);
        else return s.lanes = i.lanes, cn(i, s, d);
      }
      return Kf(i, s, a, c, d);
    }
    function g0(i, s, a, c) {
      var d = c.children, m = i !== null ? i.memoizedState : null;
      if (i === null && s.stateNode === null && (s.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), c.mode === "hidden") {
        if ((s.flags & 128) !== 0) {
          if (m = m !== null ? m.baseLanes | a : a, i !== null) {
            for (c = s.child = i.child, d = 0; c !== null; ) d = d | c.lanes | c.childLanes, c = c.sibling;
            c = d & ~m;
          } else c = 0, s.child = null;
          return p0(i, s, m, a, c);
        }
        if ((a & 536870912) !== 0) s.memoizedState = {
          baseLanes: 0,
          cachePool: null
        }, i !== null && ua(s, m !== null ? m.cachePool : null), m !== null ? bp(s, m) : xf(), vp(s);
        else return c = s.lanes = 536870912, p0(i, s, m !== null ? m.baseLanes | a : a, a, c);
      } else m !== null ? (ua(s, m.cachePool), bp(s, m), Hn(), s.memoizedState = null) : (i !== null && ua(s, null), xf(), Hn());
      return xe(i, s, d, a), s.child;
    }
    function kr(i, s) {
      return i !== null && i.tag === 22 || s.stateNode !== null || (s.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), s.sibling;
    }
    function p0(i, s, a, c, d) {
      var m = gf();
      return m = m === null ? null : {
        parent: se._currentValue,
        pool: m
      }, s.memoizedState = {
        baseLanes: a,
        cachePool: m
      }, i !== null && ua(s, null), xf(), vp(s), i !== null && os(i, s, c, true), s.childLanes = d, null;
    }
    function Ma(i, s) {
      return s = Ta({
        mode: s.mode,
        children: s.children
      }, i.mode), s.ref = i.ref, i.child = s, s.return = i, s;
    }
    function y0(i, s, a) {
      return Ml(s, i.child, null, a), i = Ma(s, s.pendingProps), i.flags |= 2, ni(s), s.memoizedState = null, i;
    }
    function ww(i, s, a) {
      var c = s.pendingProps, d = (s.flags & 128) !== 0;
      if (s.flags &= -129, i === null) {
        if (_t) {
          if (c.mode === "hidden") return i = Ma(s, c), s.lanes = 536870912, kr(null, i);
          if (Af(s), (i = Kt) ? (i = Oy(i, pi), i = i !== null && i.data === "&" ? i : null, i !== null && (s.memoizedState = {
            dehydrated: i,
            treeContext: On !== null ? {
              id: Ni,
              overflow: Li
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, a = tp(i), a.return = s, s.child = a, ve = s, Kt = null)) : i = null, i === null) throw En(s);
          return s.lanes = 536870912, null;
        }
        return Ma(s, c);
      }
      var m = i.memoizedState;
      if (m !== null) {
        var b = m.dehydrated;
        if (Af(s), d) if (s.flags & 256) s.flags &= -257, s = y0(i, s, a);
        else if (s.memoizedState !== null) s.child = i.child, s.flags |= 128, s = null;
        else throw Error(n(558));
        else if (oe || os(i, s, a, false), d = (a & i.childLanes) !== 0, oe || d) {
          if (c = Yt, c !== null && (b = og(c, a), b !== 0 && b !== m.retryLane)) throw m.retryLane = b, yl(i, b), Qe(c, i, b), Xf;
          La(), s = y0(i, s, a);
        } else i = m.treeContext, Kt = bi(b.nextSibling), ve = s, _t = true, Dn = null, pi = false, i !== null && np(s, i), s = Ma(s, c), s.flags |= 4096;
        return s;
      }
      return i = ln(i.child, {
        mode: c.mode,
        children: c.children
      }), i.ref = s.ref, s.child = i, i.return = s, i;
    }
    function _a(i, s) {
      var a = s.ref;
      if (a === null) i !== null && i.ref !== null && (s.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object") throw Error(n(284));
        (i === null || i.ref !== a) && (s.flags |= 4194816);
      }
    }
    function Kf(i, s, a, c, d) {
      return xl(s), a = Mf(i, s, a, c, void 0, d), c = _f(), i !== null && !oe ? (Tf(i, s, d), cn(i, s, d)) : (_t && c && rf(s), s.flags |= 1, xe(i, s, a, d), s.child);
    }
    function b0(i, s, a, c, d, m) {
      return xl(s), s.updateQueue = null, a = xp(s, c, a, d), Sp(i), c = _f(), i !== null && !oe ? (Tf(i, s, m), cn(i, s, m)) : (_t && c && rf(s), s.flags |= 1, xe(i, s, a, m), s.child);
    }
    function v0(i, s, a, c, d) {
      if (xl(s), s.stateNode === null) {
        var m = ns, b = a.contextType;
        typeof b == "object" && b !== null && (m = Se(b)), m = new a(c, m), s.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null, m.updater = Yf, s.stateNode = m, m._reactInternals = s, m = s.stateNode, m.props = c, m.state = s.memoizedState, m.refs = {}, yf(s), b = a.contextType, m.context = typeof b == "object" && b !== null ? Se(b) : ns, m.state = s.memoizedState, b = a.getDerivedStateFromProps, typeof b == "function" && (jf(s, a, b, c), m.state = s.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof m.getSnapshotBeforeUpdate == "function" || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (b = m.state, typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount(), b !== m.state && Yf.enqueueReplaceState(m, m.state, null), Ar(s, c, m, d), wr(), m.state = s.memoizedState), typeof m.componentDidMount == "function" && (s.flags |= 4194308), c = true;
      } else if (i === null) {
        m = s.stateNode;
        var x = s.memoizedProps, A = Tl(a, x);
        m.props = A;
        var E = m.context, U = a.contextType;
        b = ns, typeof U == "object" && U !== null && (b = Se(U));
        var X = a.getDerivedStateFromProps;
        U = typeof X == "function" || typeof m.getSnapshotBeforeUpdate == "function", x = s.pendingProps !== x, U || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (x || E !== b) && s0(s, m, c, b), Rn = false;
        var B = s.memoizedState;
        m.state = B, Ar(s, c, m, d), wr(), E = s.memoizedState, x || B !== E || Rn ? (typeof X == "function" && (jf(s, a, X, c), E = s.memoizedState), (A = Rn || l0(s, a, A, c, B, E, b)) ? (U || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (s.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (s.flags |= 4194308), s.memoizedProps = c, s.memoizedState = E), m.props = c, m.state = E, m.context = b, c = A) : (typeof m.componentDidMount == "function" && (s.flags |= 4194308), c = false);
      } else {
        m = s.stateNode, bf(i, s), b = s.memoizedProps, U = Tl(a, b), m.props = U, X = s.pendingProps, B = m.context, E = a.contextType, A = ns, typeof E == "object" && E !== null && (A = Se(E)), x = a.getDerivedStateFromProps, (E = typeof x == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (b !== X || B !== A) && s0(s, m, c, A), Rn = false, B = s.memoizedState, m.state = B, Ar(s, c, m, d), wr();
        var z = s.memoizedState;
        b !== X || B !== z || Rn || i !== null && i.dependencies !== null && oa(i.dependencies) ? (typeof x == "function" && (jf(s, a, x, c), z = s.memoizedState), (U = Rn || l0(s, a, U, c, B, z, A) || i !== null && i.dependencies !== null && oa(i.dependencies)) ? (E || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(c, z, A), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(c, z, A)), typeof m.componentDidUpdate == "function" && (s.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (s.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || b === i.memoizedProps && B === i.memoizedState || (s.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || b === i.memoizedProps && B === i.memoizedState || (s.flags |= 1024), s.memoizedProps = c, s.memoizedState = z), m.props = c, m.state = z, m.context = A, c = U) : (typeof m.componentDidUpdate != "function" || b === i.memoizedProps && B === i.memoizedState || (s.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || b === i.memoizedProps && B === i.memoizedState || (s.flags |= 1024), c = false);
      }
      return m = c, _a(i, s), c = (s.flags & 128) !== 0, m || c ? (m = s.stateNode, a = c && typeof a.getDerivedStateFromError != "function" ? null : m.render(), s.flags |= 1, i !== null && c ? (s.child = Ml(s, i.child, null, d), s.child = Ml(s, null, a, d)) : xe(i, s, a, d), s.memoizedState = m.state, i = s.child) : i = cn(i, s, d), i;
    }
    function S0(i, s, a, c) {
      return vl(), s.flags |= 256, xe(i, s, a, c), s.child;
    }
    var Qf = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    };
    function Zf(i) {
      return {
        baseLanes: i,
        cachePool: up()
      };
    }
    function Wf(i, s, a) {
      return i = i !== null ? i.childLanes & ~a : 0, s && (i |= si), i;
    }
    function x0(i, s, a) {
      var c = s.pendingProps, d = false, m = (s.flags & 128) !== 0, b;
      if ((b = m) || (b = i !== null && i.memoizedState === null ? false : (ee.current & 2) !== 0), b && (d = true, s.flags &= -129), b = (s.flags & 32) !== 0, s.flags &= -33, i === null) {
        if (_t) {
          if (d ? Ln(s) : Hn(), (i = Kt) ? (i = Oy(i, pi), i = i !== null && i.data !== "&" ? i : null, i !== null && (s.memoizedState = {
            dehydrated: i,
            treeContext: On !== null ? {
              id: Ni,
              overflow: Li
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, a = tp(i), a.return = s, s.child = a, ve = s, Kt = null)) : i = null, i === null) throw En(s);
          return Dh(i) ? s.lanes = 32 : s.lanes = 536870912, null;
        }
        var x = c.children;
        return c = c.fallback, d ? (Hn(), d = s.mode, x = Ta({
          mode: "hidden",
          children: x
        }, d), c = bl(c, d, a, null), x.return = s, c.return = s, x.sibling = c, s.child = x, c = s.child, c.memoizedState = Zf(a), c.childLanes = Wf(i, b, a), s.memoizedState = Qf, kr(null, c)) : (Ln(s), Jf(s, x));
      }
      var A = i.memoizedState;
      if (A !== null && (x = A.dehydrated, x !== null)) {
        if (m) s.flags & 256 ? (Ln(s), s.flags &= -257, s = Ff(i, s, a)) : s.memoizedState !== null ? (Hn(), s.child = i.child, s.flags |= 128, s = null) : (Hn(), x = c.fallback, d = s.mode, c = Ta({
          mode: "visible",
          children: c.children
        }, d), x = bl(x, d, a, null), x.flags |= 2, c.return = s, x.return = s, c.sibling = x, s.child = c, Ml(s, i.child, null, a), c = s.child, c.memoizedState = Zf(a), c.childLanes = Wf(i, b, a), s.memoizedState = Qf, s = kr(null, c));
        else if (Ln(s), Dh(x)) {
          if (b = x.nextSibling && x.nextSibling.dataset, b) var E = b.dgst;
          b = E, c = Error(n(419)), c.stack = "", c.digest = b, pr({
            value: c,
            source: null,
            stack: null
          }), s = Ff(i, s, a);
        } else if (oe || os(i, s, a, false), b = (a & i.childLanes) !== 0, oe || b) {
          if (b = Yt, b !== null && (c = og(b, a), c !== 0 && c !== A.retryLane)) throw A.retryLane = c, yl(i, c), Qe(b, i, c), Xf;
          Oh(x) || La(), s = Ff(i, s, a);
        } else Oh(x) ? (s.flags |= 192, s.child = i.child, s = null) : (i = A.treeContext, Kt = bi(x.nextSibling), ve = s, _t = true, Dn = null, pi = false, i !== null && np(s, i), s = Jf(s, c.children), s.flags |= 4096);
        return s;
      }
      return d ? (Hn(), x = c.fallback, d = s.mode, A = i.child, E = A.sibling, c = ln(A, {
        mode: "hidden",
        children: c.children
      }), c.subtreeFlags = A.subtreeFlags & 65011712, E !== null ? x = ln(E, x) : (x = bl(x, d, a, null), x.flags |= 2), x.return = s, c.return = s, c.sibling = x, s.child = c, kr(null, c), c = s.child, x = i.child.memoizedState, x === null ? x = Zf(a) : (d = x.cachePool, d !== null ? (A = se._currentValue, d = d.parent !== A ? {
        parent: A,
        pool: A
      } : d) : d = up(), x = {
        baseLanes: x.baseLanes | a,
        cachePool: d
      }), c.memoizedState = x, c.childLanes = Wf(i, b, a), s.memoizedState = Qf, kr(i.child, c)) : (Ln(s), a = i.child, i = a.sibling, a = ln(a, {
        mode: "visible",
        children: c.children
      }), a.return = s, a.sibling = null, i !== null && (b = s.deletions, b === null ? (s.deletions = [
        i
      ], s.flags |= 16) : b.push(i)), s.child = a, s.memoizedState = null, a);
    }
    function Jf(i, s) {
      return s = Ta({
        mode: "visible",
        children: s
      }, i.mode), s.return = i, i.child = s;
    }
    function Ta(i, s) {
      return i = ei(22, i, null, s), i.lanes = 0, i;
    }
    function Ff(i, s, a) {
      return Ml(s, i.child, null, a), i = Jf(s, s.pendingProps.children), i.flags |= 2, s.memoizedState = null, i;
    }
    function w0(i, s, a) {
      i.lanes |= s;
      var c = i.alternate;
      c !== null && (c.lanes |= s), ff(i.return, s, a);
    }
    function If(i, s, a, c, d, m) {
      var b = i.memoizedState;
      b === null ? i.memoizedState = {
        isBackwards: s,
        rendering: null,
        renderingStartTime: 0,
        last: c,
        tail: a,
        tailMode: d,
        treeForkCount: m
      } : (b.isBackwards = s, b.rendering = null, b.renderingStartTime = 0, b.last = c, b.tail = a, b.tailMode = d, b.treeForkCount = m);
    }
    function A0(i, s, a) {
      var c = s.pendingProps, d = c.revealOrder, m = c.tail;
      c = c.children;
      var b = ee.current, x = (b & 2) !== 0;
      if (x ? (b = b & 1 | 2, s.flags |= 128) : b &= 1, W(ee, b), xe(i, s, c, a), c = _t ? gr : 0, !x && i !== null && (i.flags & 128) !== 0) t: for (i = s.child; i !== null; ) {
        if (i.tag === 13) i.memoizedState !== null && w0(i, a, s);
        else if (i.tag === 19) w0(i, a, s);
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
          for (a = s.child, d = null; a !== null; ) i = a.alternate, i !== null && ga(i) === null && (d = a), a = a.sibling;
          a = d, a === null ? (d = s.child, s.child = null) : (d = a.sibling, a.sibling = null), If(s, false, d, a, m, c);
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (a = null, d = s.child, s.child = null; d !== null; ) {
            if (i = d.alternate, i !== null && ga(i) === null) {
              s.child = d;
              break;
            }
            i = d.sibling, d.sibling = a, a = d, d = i;
          }
          If(s, true, a, null, m, c);
          break;
        case "together":
          If(s, false, null, null, void 0, c);
          break;
        default:
          s.memoizedState = null;
      }
      return s.child;
    }
    function cn(i, s, a) {
      if (i !== null && (s.dependencies = i.dependencies), qn |= s.lanes, (a & s.childLanes) === 0) if (i !== null) {
        if (os(i, s, a, false), (a & s.childLanes) === 0) return null;
      } else return null;
      if (i !== null && s.child !== i.child) throw Error(n(153));
      if (s.child !== null) {
        for (i = s.child, a = ln(i, i.pendingProps), s.child = a, a.return = s; i.sibling !== null; ) i = i.sibling, a = a.sibling = ln(i, i.pendingProps), a.return = s;
        a.sibling = null;
      }
      return s.child;
    }
    function Pf(i, s) {
      return (i.lanes & s) !== 0 ? true : (i = i.dependencies, !!(i !== null && oa(i)));
    }
    function Aw(i, s, a) {
      switch (s.tag) {
        case 3:
          ze(s, s.stateNode.containerInfo), Bn(s, se, i.memoizedState.cache), vl();
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
          if (s.memoizedState !== null) return s.flags |= 128, Af(s), null;
          break;
        case 13:
          var c = s.memoizedState;
          if (c !== null) return c.dehydrated !== null ? (Ln(s), s.flags |= 128, null) : (a & s.child.childLanes) !== 0 ? x0(i, s, a) : (Ln(s), i = cn(i, s, a), i !== null ? i.sibling : null);
          Ln(s);
          break;
        case 19:
          var d = (i.flags & 128) !== 0;
          if (c = (a & s.childLanes) !== 0, c || (os(i, s, a, false), c = (a & s.childLanes) !== 0), d) {
            if (c) return A0(i, s, a);
            s.flags |= 128;
          }
          if (d = s.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), W(ee, ee.current), c) break;
          return null;
        case 22:
          return s.lanes = 0, g0(i, s, a, s.pendingProps);
        case 24:
          Bn(s, se, i.memoizedState.cache);
      }
      return cn(i, s, a);
    }
    function C0(i, s, a) {
      if (i !== null) if (i.memoizedProps !== s.pendingProps) oe = true;
      else {
        if (!Pf(i, a) && (s.flags & 128) === 0) return oe = false, Aw(i, s, a);
        oe = (i.flags & 131072) !== 0;
      }
      else oe = false, _t && (s.flags & 1048576) !== 0 && ip(s, gr, s.index);
      switch (s.lanes = 0, s.tag) {
        case 16:
          t: {
            var c = s.pendingProps;
            if (i = Al(s.elementType), s.type = i, typeof i == "function") nf(i) ? (c = Tl(i, c), s.tag = 1, s = v0(null, s, i, c, a)) : (s.tag = 0, s = Kf(null, s, i, c, a));
            else {
              if (i != null) {
                var d = i.$$typeof;
                if (d === Q) {
                  s.tag = 11, s = h0(null, s, i, c, a);
                  break t;
                } else if (d === V) {
                  s.tag = 14, s = d0(null, s, i, c, a);
                  break t;
                }
              }
              throw s = ht(i) || i, Error(n(306, s, ""));
            }
          }
          return s;
        case 0:
          return Kf(i, s, s.type, s.pendingProps, a);
        case 1:
          return c = s.type, d = Tl(c, s.pendingProps), v0(i, s, c, d, a);
        case 3:
          t: {
            if (ze(s, s.stateNode.containerInfo), i === null) throw Error(n(387));
            c = s.pendingProps;
            var m = s.memoizedState;
            d = m.element, bf(i, s), Ar(s, c, null, a);
            var b = s.memoizedState;
            if (c = b.cache, Bn(s, se, c), c !== m.cache && hf(s, [
              se
            ], a, true), wr(), c = b.element, m.isDehydrated) if (m = {
              element: c,
              isDehydrated: false,
              cache: b.cache
            }, s.updateQueue.baseState = m, s.memoizedState = m, s.flags & 256) {
              s = S0(i, s, c, a);
              break t;
            } else if (c !== d) {
              d = di(Error(n(424)), s), pr(d), s = S0(i, s, c, a);
              break t;
            } else {
              switch (i = s.stateNode.containerInfo, i.nodeType) {
                case 9:
                  i = i.body;
                  break;
                default:
                  i = i.nodeName === "HTML" ? i.ownerDocument.body : i;
              }
              for (Kt = bi(i.firstChild), ve = s, _t = true, Dn = null, pi = true, a = gp(s, null, c, a), s.child = a; a; ) a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
            else {
              if (vl(), c === d) {
                s = cn(i, s, a);
                break t;
              }
              xe(i, s, c, a);
            }
            s = s.child;
          }
          return s;
        case 26:
          return _a(i, s), i === null ? (a = Ny(s.type, null, s.pendingProps, null)) ? s.memoizedState = a : _t || (a = s.type, i = s.pendingProps, c = Ga(bt.current).createElement(a), c[be] = s, c[qe] = i, we(c, a, i), ge(c), s.stateNode = c) : s.memoizedState = Ny(s.type, i.memoizedProps, s.pendingProps, i.memoizedState), null;
        case 27:
          return tr(s), i === null && _t && (c = s.stateNode = By(s.type, s.pendingProps, bt.current), ve = s, pi = true, d = Kt, Kn(s.type) ? (Eh = d, Kt = bi(c.firstChild)) : Kt = d), xe(i, s, s.pendingProps.children, a), _a(i, s), i === null && (s.flags |= 4194304), s.child;
        case 5:
          return i === null && _t && ((d = c = Kt) && (c = $w(c, s.type, s.pendingProps, pi), c !== null ? (s.stateNode = c, ve = s, Kt = bi(c.firstChild), pi = false, d = true) : d = false), d || En(s)), tr(s), d = s.type, m = s.pendingProps, b = i !== null ? i.memoizedProps : null, c = m.children, _h(d, m) ? c = null : b !== null && _h(d, b) && (s.flags |= 32), s.memoizedState !== null && (d = Mf(i, s, mw, null, null, a), Gr._currentValue = d), _a(i, s), xe(i, s, c, a), s.child;
        case 6:
          return i === null && _t && ((i = a = Kt) && (a = tA(a, s.pendingProps, pi), a !== null ? (s.stateNode = a, ve = s, Kt = null, i = true) : i = false), i || En(s)), null;
        case 13:
          return x0(i, s, a);
        case 4:
          return ze(s, s.stateNode.containerInfo), c = s.pendingProps, i === null ? s.child = Ml(s, null, c, a) : xe(i, s, c, a), s.child;
        case 11:
          return h0(i, s, s.type, s.pendingProps, a);
        case 7:
          return xe(i, s, s.pendingProps, a), s.child;
        case 8:
          return xe(i, s, s.pendingProps.children, a), s.child;
        case 12:
          return xe(i, s, s.pendingProps.children, a), s.child;
        case 10:
          return c = s.pendingProps, Bn(s, s.type, c.value), xe(i, s, c.children, a), s.child;
        case 9:
          return d = s.type._context, c = s.pendingProps.children, xl(s), d = Se(d), c = c(d), s.flags |= 1, xe(i, s, c, a), s.child;
        case 14:
          return d0(i, s, s.type, s.pendingProps, a);
        case 15:
          return m0(i, s, s.type, s.pendingProps, a);
        case 19:
          return A0(i, s, a);
        case 31:
          return ww(i, s, a);
        case 22:
          return g0(i, s, a, s.pendingProps);
        case 24:
          return xl(s), c = Se(se), i === null ? (d = gf(), d === null && (d = Yt, m = df(), d.pooledCache = m, m.refCount++, m !== null && (d.pooledCacheLanes |= a), d = m), s.memoizedState = {
            parent: c,
            cache: d
          }, yf(s), Bn(s, se, d)) : ((i.lanes & a) !== 0 && (bf(i, s), Ar(s, null, null, a), wr()), d = i.memoizedState, m = s.memoizedState, d.parent !== c ? (d = {
            parent: c,
            cache: c
          }, s.memoizedState = d, s.lanes === 0 && (s.memoizedState = s.updateQueue.baseState = d), Bn(s, se, c)) : (c = m.cache, Bn(s, se, c), c !== d.cache && hf(s, [
            se
          ], a, true))), xe(i, s, s.pendingProps.children, a), s.child;
        case 29:
          throw s.pendingProps;
      }
      throw Error(n(156, s.tag));
    }
    function fn(i) {
      i.flags |= 4;
    }
    function $f(i, s, a, c, d) {
      if ((s = (i.mode & 32) !== 0) && (s = false), s) {
        if (i.flags |= 16777216, (d & 335544128) === d) if (i.stateNode.complete) i.flags |= 8192;
        else if (I0()) i.flags |= 8192;
        else throw Cl = fa, pf;
      } else i.flags &= -16777217;
    }
    function M0(i, s) {
      if (s.type !== "stylesheet" || (s.state.loading & 4) !== 0) i.flags &= -16777217;
      else if (i.flags |= 16777216, !qy(s)) if (I0()) i.flags |= 8192;
      else throw Cl = fa, pf;
    }
    function ka(i, s) {
      s !== null && (i.flags |= 4), i.flags & 16384 && (s = i.tag !== 22 ? lg() : 536870912, i.lanes |= s, vs |= s);
    }
    function Or(i, s) {
      if (!_t) switch (i.tailMode) {
        case "hidden":
          s = i.tail;
          for (var a = null; s !== null; ) s.alternate !== null && (a = s), s = s.sibling;
          a === null ? i.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = i.tail;
          for (var c = null; a !== null; ) a.alternate !== null && (c = a), a = a.sibling;
          c === null ? s || i.tail === null ? i.tail = null : i.tail.sibling = null : c.sibling = null;
      }
    }
    function Qt(i) {
      var s = i.alternate !== null && i.alternate.child === i.child, a = 0, c = 0;
      if (s) for (var d = i.child; d !== null; ) a |= d.lanes | d.childLanes, c |= d.subtreeFlags & 65011712, c |= d.flags & 65011712, d.return = i, d = d.sibling;
      else for (d = i.child; d !== null; ) a |= d.lanes | d.childLanes, c |= d.subtreeFlags, c |= d.flags, d.return = i, d = d.sibling;
      return i.subtreeFlags |= c, i.childLanes = a, s;
    }
    function Cw(i, s, a) {
      var c = s.pendingProps;
      switch (of(s), s.tag) {
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
          return a = s.stateNode, c = null, i !== null && (c = i.memoizedState.cache), s.memoizedState.cache !== c && (s.flags |= 2048), on(se), te(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (i === null || i.child === null) && (rs(s) ? fn(s) : i === null || i.memoizedState.isDehydrated && (s.flags & 256) === 0 || (s.flags |= 1024, uf())), Qt(s), null;
        case 26:
          var d = s.type, m = s.memoizedState;
          return i === null ? (fn(s), m !== null ? (Qt(s), M0(s, m)) : (Qt(s), $f(s, d, null, c, a))) : m ? m !== i.memoizedState ? (fn(s), Qt(s), M0(s, m)) : (Qt(s), s.flags &= -16777217) : (i = i.memoizedProps, i !== c && fn(s), Qt(s), $f(s, d, i, c, a)), null;
        case 27:
          if (Vo(s), a = bt.current, d = s.type, i !== null && s.stateNode != null) i.memoizedProps !== c && fn(s);
          else {
            if (!c) {
              if (s.stateNode === null) throw Error(n(166));
              return Qt(s), null;
            }
            i = $.current, rs(s) ? lp(s) : (i = By(d, c, a), s.stateNode = i, fn(s));
          }
          return Qt(s), null;
        case 5:
          if (Vo(s), d = s.type, i !== null && s.stateNode != null) i.memoizedProps !== c && fn(s);
          else {
            if (!c) {
              if (s.stateNode === null) throw Error(n(166));
              return Qt(s), null;
            }
            if (m = $.current, rs(s)) lp(s);
            else {
              var b = Ga(bt.current);
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
                      m = typeof c.is == "string" ? b.createElement("select", {
                        is: c.is
                      }) : b.createElement("select"), c.multiple ? m.multiple = true : c.size && (m.size = c.size);
                      break;
                    default:
                      m = typeof c.is == "string" ? b.createElement(d, {
                        is: c.is
                      }) : b.createElement(d);
                  }
              }
              m[be] = s, m[qe] = c;
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
              t: switch (we(m, d, c), d) {
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
              c && fn(s);
            }
          }
          return Qt(s), $f(s, s.type, i === null ? null : i.memoizedProps, s.pendingProps, a), null;
        case 6:
          if (i && s.stateNode != null) i.memoizedProps !== c && fn(s);
          else {
            if (typeof c != "string" && s.stateNode === null) throw Error(n(166));
            if (i = bt.current, rs(s)) {
              if (i = s.stateNode, a = s.memoizedProps, c = null, d = ve, d !== null) switch (d.tag) {
                case 27:
                case 5:
                  c = d.memoizedProps;
              }
              i[be] = s, i = !!(i.nodeValue === a || c !== null && c.suppressHydrationWarning === true || xy(i.nodeValue, a)), i || En(s, true);
            } else i = Ga(i).createTextNode(c), i[be] = s, s.stateNode = i;
          }
          return Qt(s), null;
        case 31:
          if (a = s.memoizedState, i === null || i.memoizedState !== null) {
            if (c = rs(s), a !== null) {
              if (i === null) {
                if (!c) throw Error(n(318));
                if (i = s.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(n(557));
                i[be] = s;
              } else vl(), (s.flags & 128) === 0 && (s.memoizedState = null), s.flags |= 4;
              Qt(s), i = false;
            } else a = uf(), i !== null && i.memoizedState !== null && (i.memoizedState.hydrationErrors = a), i = true;
            if (!i) return s.flags & 256 ? (ni(s), s) : (ni(s), null);
            if ((s.flags & 128) !== 0) throw Error(n(558));
          }
          return Qt(s), null;
        case 13:
          if (c = s.memoizedState, i === null || i.memoizedState !== null && i.memoizedState.dehydrated !== null) {
            if (d = rs(s), c !== null && c.dehydrated !== null) {
              if (i === null) {
                if (!d) throw Error(n(318));
                if (d = s.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(n(317));
                d[be] = s;
              } else vl(), (s.flags & 128) === 0 && (s.memoizedState = null), s.flags |= 4;
              Qt(s), d = false;
            } else d = uf(), i !== null && i.memoizedState !== null && (i.memoizedState.hydrationErrors = d), d = true;
            if (!d) return s.flags & 256 ? (ni(s), s) : (ni(s), null);
          }
          return ni(s), (s.flags & 128) !== 0 ? (s.lanes = a, s) : (a = c !== null, i = i !== null && i.memoizedState !== null, a && (c = s.child, d = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (d = c.alternate.memoizedState.cachePool.pool), m = null, c.memoizedState !== null && c.memoizedState.cachePool !== null && (m = c.memoizedState.cachePool.pool), m !== d && (c.flags |= 2048)), a !== i && a && (s.child.flags |= 8192), ka(s, s.updateQueue), Qt(s), null);
        case 4:
          return te(), i === null && xh(s.stateNode.containerInfo), Qt(s), null;
        case 10:
          return on(s.type), Qt(s), null;
        case 19:
          if (H(ee), c = s.memoizedState, c === null) return Qt(s), null;
          if (d = (s.flags & 128) !== 0, m = c.rendering, m === null) if (d) Or(c, false);
          else {
            if (Pt !== 0 || i !== null && (i.flags & 128) !== 0) for (i = s.child; i !== null; ) {
              if (m = ga(i), m !== null) {
                for (s.flags |= 128, Or(c, false), i = m.updateQueue, s.updateQueue = i, ka(s, i), s.subtreeFlags = 0, i = a, a = s.child; a !== null; ) $g(a, i), a = a.sibling;
                return W(ee, ee.current & 1 | 2), _t && sn(s, c.treeForkCount), s.child;
              }
              i = i.sibling;
            }
            c.tail !== null && Ie() > Ra && (s.flags |= 128, d = true, Or(c, false), s.lanes = 4194304);
          }
          else {
            if (!d) if (i = ga(m), i !== null) {
              if (s.flags |= 128, d = true, i = i.updateQueue, s.updateQueue = i, ka(s, i), Or(c, true), c.tail === null && c.tailMode === "hidden" && !m.alternate && !_t) return Qt(s), null;
            } else 2 * Ie() - c.renderingStartTime > Ra && a !== 536870912 && (s.flags |= 128, d = true, Or(c, false), s.lanes = 4194304);
            c.isBackwards ? (m.sibling = s.child, s.child = m) : (i = c.last, i !== null ? i.sibling = m : s.child = m, c.last = m);
          }
          return c.tail !== null ? (i = c.tail, c.rendering = i, c.tail = i.sibling, c.renderingStartTime = Ie(), i.sibling = null, a = ee.current, W(ee, d ? a & 1 | 2 : a & 1), _t && sn(s, c.treeForkCount), i) : (Qt(s), null);
        case 22:
        case 23:
          return ni(s), wf(), c = s.memoizedState !== null, i !== null ? i.memoizedState !== null !== c && (s.flags |= 8192) : c && (s.flags |= 8192), c ? (a & 536870912) !== 0 && (s.flags & 128) === 0 && (Qt(s), s.subtreeFlags & 6 && (s.flags |= 8192)) : Qt(s), a = s.updateQueue, a !== null && ka(s, a.retryQueue), a = null, i !== null && i.memoizedState !== null && i.memoizedState.cachePool !== null && (a = i.memoizedState.cachePool.pool), c = null, s.memoizedState !== null && s.memoizedState.cachePool !== null && (c = s.memoizedState.cachePool.pool), c !== a && (s.flags |= 2048), i !== null && H(wl), null;
        case 24:
          return a = null, i !== null && (a = i.memoizedState.cache), s.memoizedState.cache !== a && (s.flags |= 2048), on(se), Qt(s), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(n(156, s.tag));
    }
    function Mw(i, s) {
      switch (of(s), s.tag) {
        case 1:
          return i = s.flags, i & 65536 ? (s.flags = i & -65537 | 128, s) : null;
        case 3:
          return on(se), te(), i = s.flags, (i & 65536) !== 0 && (i & 128) === 0 ? (s.flags = i & -65537 | 128, s) : null;
        case 26:
        case 27:
        case 5:
          return Vo(s), null;
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
          return H(ee), null;
        case 4:
          return te(), null;
        case 10:
          return on(s.type), null;
        case 22:
        case 23:
          return ni(s), wf(), i !== null && H(wl), i = s.flags, i & 65536 ? (s.flags = i & -65537 | 128, s) : null;
        case 24:
          return on(se), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function _0(i, s) {
      switch (of(s), s.tag) {
        case 3:
          on(se), te();
          break;
        case 26:
        case 27:
        case 5:
          Vo(s);
          break;
        case 4:
          te();
          break;
        case 31:
          s.memoizedState !== null && ni(s);
          break;
        case 13:
          ni(s);
          break;
        case 19:
          H(ee);
          break;
        case 10:
          on(s.type);
          break;
        case 22:
        case 23:
          ni(s), wf(), i !== null && H(wl);
          break;
        case 24:
          on(se);
      }
    }
    function Dr(i, s) {
      try {
        var a = s.updateQueue, c = a !== null ? a.lastEffect : null;
        if (c !== null) {
          var d = c.next;
          a = d;
          do {
            if ((a.tag & i) === i) {
              c = void 0;
              var m = a.create, b = a.inst;
              c = m(), b.destroy = c;
            }
            a = a.next;
          } while (a !== d);
        }
      } catch (x) {
        Ht(s, s.return, x);
      }
    }
    function Un(i, s, a) {
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
                var A = a, E = x;
                try {
                  E();
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
    function T0(i) {
      var s = i.updateQueue;
      if (s !== null) {
        var a = i.stateNode;
        try {
          yp(s, a);
        } catch (c) {
          Ht(i, i.return, c);
        }
      }
    }
    function k0(i, s, a) {
      a.props = Tl(i.type, i.memoizedProps), a.state = i.memoizedState;
      try {
        a.componentWillUnmount();
      } catch (c) {
        Ht(i, s, c);
      }
    }
    function Er(i, s) {
      try {
        var a = i.ref;
        if (a !== null) {
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
          typeof a == "function" ? i.refCleanup = a(c) : a.current = c;
        }
      } catch (d) {
        Ht(i, s, d);
      }
    }
    function Hi(i, s) {
      var a = i.ref, c = i.refCleanup;
      if (a !== null) if (typeof c == "function") try {
        c();
      } catch (d) {
        Ht(i, s, d);
      } finally {
        i.refCleanup = null, i = i.alternate, i != null && (i.refCleanup = null);
      }
      else if (typeof a == "function") try {
        a(null);
      } catch (d) {
        Ht(i, s, d);
      }
      else a.current = null;
    }
    function O0(i) {
      var s = i.type, a = i.memoizedProps, c = i.stateNode;
      try {
        t: switch (s) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            a.autoFocus && c.focus();
            break t;
          case "img":
            a.src ? c.src = a.src : a.srcSet && (c.srcset = a.srcSet);
        }
      } catch (d) {
        Ht(i, i.return, d);
      }
    }
    function th(i, s, a) {
      try {
        var c = i.stateNode;
        Zw(c, i.type, a, s), c[qe] = s;
      } catch (d) {
        Ht(i, i.return, d);
      }
    }
    function D0(i) {
      return i.tag === 5 || i.tag === 3 || i.tag === 26 || i.tag === 27 && Kn(i.type) || i.tag === 4;
    }
    function eh(i) {
      t: for (; ; ) {
        for (; i.sibling === null; ) {
          if (i.return === null || D0(i.return)) return null;
          i = i.return;
        }
        for (i.sibling.return = i.return, i = i.sibling; i.tag !== 5 && i.tag !== 6 && i.tag !== 18; ) {
          if (i.tag === 27 && Kn(i.type) || i.flags & 2 || i.child === null || i.tag === 4) continue t;
          i.child.return = i, i = i.child;
        }
        if (!(i.flags & 2)) return i.stateNode;
      }
    }
    function ih(i, s, a) {
      var c = i.tag;
      if (c === 5 || c === 6) i = i.stateNode, s ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(i, s) : (s = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, s.appendChild(i), a = a._reactRootContainer, a != null || s.onclick !== null || (s.onclick = en));
      else if (c !== 4 && (c === 27 && Kn(i.type) && (a = i.stateNode, s = null), i = i.child, i !== null)) for (ih(i, s, a), i = i.sibling; i !== null; ) ih(i, s, a), i = i.sibling;
    }
    function Oa(i, s, a) {
      var c = i.tag;
      if (c === 5 || c === 6) i = i.stateNode, s ? a.insertBefore(i, s) : a.appendChild(i);
      else if (c !== 4 && (c === 27 && Kn(i.type) && (a = i.stateNode), i = i.child, i !== null)) for (Oa(i, s, a), i = i.sibling; i !== null; ) Oa(i, s, a), i = i.sibling;
    }
    function E0(i) {
      var s = i.stateNode, a = i.memoizedProps;
      try {
        for (var c = i.type, d = s.attributes; d.length; ) s.removeAttributeNode(d[0]);
        we(s, c, a), s[be] = i, s[qe] = a;
      } catch (m) {
        Ht(i, i.return, m);
      }
    }
    var hn = false, ae = false, nh = false, B0 = typeof WeakSet == "function" ? WeakSet : Set, pe = null;
    function _w(i, s) {
      if (i = i.containerInfo, Ch = Fa, i = Xg(i), Jc(i)) {
        if ("selectionStart" in i) var a = {
          start: i.selectionStart,
          end: i.selectionEnd
        };
        else t: {
          a = (a = i.ownerDocument) && a.defaultView || window;
          var c = a.getSelection && a.getSelection();
          if (c && c.rangeCount !== 0) {
            a = c.anchorNode;
            var d = c.anchorOffset, m = c.focusNode;
            c = c.focusOffset;
            try {
              a.nodeType, m.nodeType;
            } catch {
              a = null;
              break t;
            }
            var b = 0, x = -1, A = -1, E = 0, U = 0, X = i, B = null;
            e: for (; ; ) {
              for (var z; X !== a || d !== 0 && X.nodeType !== 3 || (x = b + d), X !== m || c !== 0 && X.nodeType !== 3 || (A = b + c), X.nodeType === 3 && (b += X.nodeValue.length), (z = X.firstChild) !== null; ) B = X, X = z;
              for (; ; ) {
                if (X === i) break e;
                if (B === a && ++E === d && (x = b), B === m && ++U === c && (A = b), (z = X.nextSibling) !== null) break;
                X = B, B = X.parentNode;
              }
              X = z;
            }
            a = x === -1 || A === -1 ? null : {
              start: x,
              end: A
            };
          } else a = null;
        }
        a = a || {
          start: 0,
          end: 0
        };
      } else a = null;
      for (Mh = {
        focusedElem: i,
        selectionRange: a
      }, Fa = false, pe = s; pe !== null; ) if (s = pe, i = s.child, (s.subtreeFlags & 1028) !== 0 && i !== null) i.return = s, pe = i;
      else for (; pe !== null; ) {
        switch (s = pe, m = s.alternate, i = s.flags, s.tag) {
          case 0:
            if ((i & 4) !== 0 && (i = s.updateQueue, i = i !== null ? i.events : null, i !== null)) for (a = 0; a < i.length; a++) d = i[a], d.ref.impl = d.nextImpl;
            break;
          case 11:
          case 15:
            break;
          case 1:
            if ((i & 1024) !== 0 && m !== null) {
              i = void 0, a = s, d = m.memoizedProps, m = m.memoizedState, c = a.stateNode;
              try {
                var nt = Tl(a.type, d);
                i = c.getSnapshotBeforeUpdate(nt, m), c.__reactInternalSnapshotBeforeUpdate = i;
              } catch (ct) {
                Ht(a, a.return, ct);
              }
            }
            break;
          case 3:
            if ((i & 1024) !== 0) {
              if (i = s.stateNode.containerInfo, a = i.nodeType, a === 9) kh(i);
              else if (a === 1) switch (i.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  kh(i);
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
    function R0(i, s, a) {
      var c = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          mn(i, a), c & 4 && Dr(5, a);
          break;
        case 1:
          if (mn(i, a), c & 4) if (i = a.stateNode, s === null) try {
            i.componentDidMount();
          } catch (b) {
            Ht(a, a.return, b);
          }
          else {
            var d = Tl(a.type, s.memoizedProps);
            s = s.memoizedState;
            try {
              i.componentDidUpdate(d, s, i.__reactInternalSnapshotBeforeUpdate);
            } catch (b) {
              Ht(a, a.return, b);
            }
          }
          c & 64 && T0(a), c & 512 && Er(a, a.return);
          break;
        case 3:
          if (mn(i, a), c & 64 && (i = a.updateQueue, i !== null)) {
            if (s = null, a.child !== null) switch (a.child.tag) {
              case 27:
              case 5:
                s = a.child.stateNode;
                break;
              case 1:
                s = a.child.stateNode;
            }
            try {
              yp(i, s);
            } catch (b) {
              Ht(a, a.return, b);
            }
          }
          break;
        case 27:
          s === null && c & 4 && E0(a);
        case 26:
        case 5:
          mn(i, a), s === null && c & 4 && O0(a), c & 512 && Er(a, a.return);
          break;
        case 12:
          mn(i, a);
          break;
        case 31:
          mn(i, a), c & 4 && L0(i, a);
          break;
        case 13:
          mn(i, a), c & 4 && H0(i, a), c & 64 && (i = a.memoizedState, i !== null && (i = i.dehydrated, i !== null && (a = Nw.bind(null, a), eA(i, a))));
          break;
        case 22:
          if (c = a.memoizedState !== null || hn, !c) {
            s = s !== null && s.memoizedState !== null || ae, d = hn;
            var m = ae;
            hn = c, (ae = s) && !m ? gn(i, a, (a.subtreeFlags & 8772) !== 0) : mn(i, a), hn = d, ae = m;
          }
          break;
        case 30:
          break;
        default:
          mn(i, a);
      }
    }
    function z0(i) {
      var s = i.alternate;
      s !== null && (i.alternate = null, z0(s)), i.child = null, i.deletions = null, i.sibling = null, i.tag === 5 && (s = i.stateNode, s !== null && Bc(s)), i.stateNode = null, i.return = null, i.dependencies = null, i.memoizedProps = null, i.memoizedState = null, i.pendingProps = null, i.stateNode = null, i.updateQueue = null;
    }
    var Jt = null, Ye = false;
    function dn(i, s, a) {
      for (a = a.child; a !== null; ) N0(i, s, a), a = a.sibling;
    }
    function N0(i, s, a) {
      if (Pe && typeof Pe.onCommitFiberUnmount == "function") try {
        Pe.onCommitFiberUnmount(er, a);
      } catch {
      }
      switch (a.tag) {
        case 26:
          ae || Hi(a, s), dn(i, s, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
          break;
        case 27:
          ae || Hi(a, s);
          var c = Jt, d = Ye;
          Kn(a.type) && (Jt = a.stateNode, Ye = false), dn(i, s, a), qr(a.stateNode), Jt = c, Ye = d;
          break;
        case 5:
          ae || Hi(a, s);
        case 6:
          if (c = Jt, d = Ye, Jt = null, dn(i, s, a), Jt = c, Ye = d, Jt !== null) if (Ye) try {
            (Jt.nodeType === 9 ? Jt.body : Jt.nodeName === "HTML" ? Jt.ownerDocument.body : Jt).removeChild(a.stateNode);
          } catch (m) {
            Ht(a, s, m);
          }
          else try {
            Jt.removeChild(a.stateNode);
          } catch (m) {
            Ht(a, s, m);
          }
          break;
        case 18:
          Jt !== null && (Ye ? (i = Jt, Ty(i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i, a.stateNode), Ts(i)) : Ty(Jt, a.stateNode));
          break;
        case 4:
          c = Jt, d = Ye, Jt = a.stateNode.containerInfo, Ye = true, dn(i, s, a), Jt = c, Ye = d;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Un(2, a, s), ae || Un(4, a, s), dn(i, s, a);
          break;
        case 1:
          ae || (Hi(a, s), c = a.stateNode, typeof c.componentWillUnmount == "function" && k0(a, s, c)), dn(i, s, a);
          break;
        case 21:
          dn(i, s, a);
          break;
        case 22:
          ae = (c = ae) || a.memoizedState !== null, dn(i, s, a), ae = c;
          break;
        default:
          dn(i, s, a);
      }
    }
    function L0(i, s) {
      if (s.memoizedState === null && (i = s.alternate, i !== null && (i = i.memoizedState, i !== null))) {
        i = i.dehydrated;
        try {
          Ts(i);
        } catch (a) {
          Ht(s, s.return, a);
        }
      }
    }
    function H0(i, s) {
      if (s.memoizedState === null && (i = s.alternate, i !== null && (i = i.memoizedState, i !== null && (i = i.dehydrated, i !== null)))) try {
        Ts(i);
      } catch (a) {
        Ht(s, s.return, a);
      }
    }
    function Tw(i) {
      switch (i.tag) {
        case 31:
        case 13:
        case 19:
          var s = i.stateNode;
          return s === null && (s = i.stateNode = new B0()), s;
        case 22:
          return i = i.stateNode, s = i._retryCache, s === null && (s = i._retryCache = new B0()), s;
        default:
          throw Error(n(435, i.tag));
      }
    }
    function Da(i, s) {
      var a = Tw(i);
      s.forEach(function(c) {
        if (!a.has(c)) {
          a.add(c);
          var d = Lw.bind(null, i, c);
          c.then(d, d);
        }
      });
    }
    function Ge(i, s) {
      var a = s.deletions;
      if (a !== null) for (var c = 0; c < a.length; c++) {
        var d = a[c], m = i, b = s, x = b;
        t: for (; x !== null; ) {
          switch (x.tag) {
            case 27:
              if (Kn(x.type)) {
                Jt = x.stateNode, Ye = false;
                break t;
              }
              break;
            case 5:
              Jt = x.stateNode, Ye = false;
              break t;
            case 3:
            case 4:
              Jt = x.stateNode.containerInfo, Ye = true;
              break t;
          }
          x = x.return;
        }
        if (Jt === null) throw Error(n(160));
        N0(m, b, d), Jt = null, Ye = false, m = d.alternate, m !== null && (m.return = null), d.return = null;
      }
      if (s.subtreeFlags & 13886) for (s = s.child; s !== null; ) U0(s, i), s = s.sibling;
    }
    var Oi = null;
    function U0(i, s) {
      var a = i.alternate, c = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ge(s, i), Xe(i), c & 4 && (Un(3, i, i.return), Dr(3, i), Un(5, i, i.return));
          break;
        case 1:
          Ge(s, i), Xe(i), c & 512 && (ae || a === null || Hi(a, a.return)), c & 64 && hn && (i = i.updateQueue, i !== null && (c = i.callbacks, c !== null && (a = i.shared.hiddenCallbacks, i.shared.hiddenCallbacks = a === null ? c : a.concat(c))));
          break;
        case 26:
          var d = Oi;
          if (Ge(s, i), Xe(i), c & 512 && (ae || a === null || Hi(a, a.return)), c & 4) {
            var m = a !== null ? a.memoizedState : null;
            if (c = i.memoizedState, a === null) if (c === null) if (i.stateNode === null) {
              t: {
                c = i.type, a = i.memoizedProps, d = d.ownerDocument || d;
                e: switch (c) {
                  case "title":
                    m = d.getElementsByTagName("title")[0], (!m || m[lr] || m[be] || m.namespaceURI === "http://www.w3.org/2000/svg" || m.hasAttribute("itemprop")) && (m = d.createElement(c), d.head.insertBefore(m, d.querySelector("head > title"))), we(m, c, a), m[be] = i, ge(m), c = m;
                    break t;
                  case "link":
                    var b = Uy("link", "href", d).get(c + (a.href || ""));
                    if (b) {
                      for (var x = 0; x < b.length; x++) if (m = b[x], m.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && m.getAttribute("rel") === (a.rel == null ? null : a.rel) && m.getAttribute("title") === (a.title == null ? null : a.title) && m.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                        b.splice(x, 1);
                        break e;
                      }
                    }
                    m = d.createElement(c), we(m, c, a), d.head.appendChild(m);
                    break;
                  case "meta":
                    if (b = Uy("meta", "content", d).get(c + (a.content || ""))) {
                      for (x = 0; x < b.length; x++) if (m = b[x], m.getAttribute("content") === (a.content == null ? null : "" + a.content) && m.getAttribute("name") === (a.name == null ? null : a.name) && m.getAttribute("property") === (a.property == null ? null : a.property) && m.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && m.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                        b.splice(x, 1);
                        break e;
                      }
                    }
                    m = d.createElement(c), we(m, c, a), d.head.appendChild(m);
                    break;
                  default:
                    throw Error(n(468, c));
                }
                m[be] = i, ge(m), c = m;
              }
              i.stateNode = c;
            } else Vy(d, i.type, i.stateNode);
            else i.stateNode = Hy(d, c, i.memoizedProps);
            else m !== c ? (m === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : m.count--, c === null ? Vy(d, i.type, i.stateNode) : Hy(d, c, i.memoizedProps)) : c === null && i.stateNode !== null && th(i, i.memoizedProps, a.memoizedProps);
          }
          break;
        case 27:
          Ge(s, i), Xe(i), c & 512 && (ae || a === null || Hi(a, a.return)), a !== null && c & 4 && th(i, i.memoizedProps, a.memoizedProps);
          break;
        case 5:
          if (Ge(s, i), Xe(i), c & 512 && (ae || a === null || Hi(a, a.return)), i.flags & 32) {
            d = i.stateNode;
            try {
              Fl(d, "");
            } catch (nt) {
              Ht(i, i.return, nt);
            }
          }
          c & 4 && i.stateNode != null && (d = i.memoizedProps, th(i, d, a !== null ? a.memoizedProps : d)), c & 1024 && (nh = true);
          break;
        case 6:
          if (Ge(s, i), Xe(i), c & 4) {
            if (i.stateNode === null) throw Error(n(162));
            c = i.memoizedProps, a = i.stateNode;
            try {
              a.nodeValue = c;
            } catch (nt) {
              Ht(i, i.return, nt);
            }
          }
          break;
        case 3:
          if (Qa = null, d = Oi, Oi = Xa(s.containerInfo), Ge(s, i), Oi = d, Xe(i), c & 4 && a !== null && a.memoizedState.isDehydrated) try {
            Ts(s.containerInfo);
          } catch (nt) {
            Ht(i, i.return, nt);
          }
          nh && (nh = false, V0(i));
          break;
        case 4:
          c = Oi, Oi = Xa(i.stateNode.containerInfo), Ge(s, i), Xe(i), Oi = c;
          break;
        case 12:
          Ge(s, i), Xe(i);
          break;
        case 31:
          Ge(s, i), Xe(i), c & 4 && (c = i.updateQueue, c !== null && (i.updateQueue = null, Da(i, c)));
          break;
        case 13:
          Ge(s, i), Xe(i), i.child.flags & 8192 && i.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Ba = Ie()), c & 4 && (c = i.updateQueue, c !== null && (i.updateQueue = null, Da(i, c)));
          break;
        case 22:
          d = i.memoizedState !== null;
          var A = a !== null && a.memoizedState !== null, E = hn, U = ae;
          if (hn = E || d, ae = U || A, Ge(s, i), ae = U, hn = E, Xe(i), c & 8192) t: for (s = i.stateNode, s._visibility = d ? s._visibility & -2 : s._visibility | 1, d && (a === null || A || hn || ae || kl(i)), a = null, s = i; ; ) {
            if (s.tag === 5 || s.tag === 26) {
              if (a === null) {
                A = a = s;
                try {
                  if (m = A.stateNode, d) b = m.style, typeof b.setProperty == "function" ? b.setProperty("display", "none", "important") : b.display = "none";
                  else {
                    x = A.stateNode;
                    var X = A.memoizedProps.style, B = X != null && X.hasOwnProperty("display") ? X.display : null;
                    x.style.display = B == null || typeof B == "boolean" ? "" : ("" + B).trim();
                  }
                } catch (nt) {
                  Ht(A, A.return, nt);
                }
              }
            } else if (s.tag === 6) {
              if (a === null) {
                A = s;
                try {
                  A.stateNode.nodeValue = d ? "" : A.memoizedProps;
                } catch (nt) {
                  Ht(A, A.return, nt);
                }
              }
            } else if (s.tag === 18) {
              if (a === null) {
                A = s;
                try {
                  var z = A.stateNode;
                  d ? ky(z, true) : ky(A.stateNode, false);
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
              a === s && (a = null), s = s.return;
            }
            a === s && (a = null), s.sibling.return = s.return, s = s.sibling;
          }
          c & 4 && (c = i.updateQueue, c !== null && (a = c.retryQueue, a !== null && (c.retryQueue = null, Da(i, a))));
          break;
        case 19:
          Ge(s, i), Xe(i), c & 4 && (c = i.updateQueue, c !== null && (i.updateQueue = null, Da(i, c)));
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
          for (var a, c = i.return; c !== null; ) {
            if (D0(c)) {
              a = c;
              break;
            }
            c = c.return;
          }
          if (a == null) throw Error(n(160));
          switch (a.tag) {
            case 27:
              var d = a.stateNode, m = eh(i);
              Oa(i, m, d);
              break;
            case 5:
              var b = a.stateNode;
              a.flags & 32 && (Fl(b, ""), a.flags &= -33);
              var x = eh(i);
              Oa(i, x, b);
              break;
            case 3:
            case 4:
              var A = a.stateNode.containerInfo, E = eh(i);
              ih(i, E, A);
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
    function V0(i) {
      if (i.subtreeFlags & 1024) for (i = i.child; i !== null; ) {
        var s = i;
        V0(s), s.tag === 5 && s.flags & 1024 && s.stateNode.reset(), i = i.sibling;
      }
    }
    function mn(i, s) {
      if (s.subtreeFlags & 8772) for (s = s.child; s !== null; ) R0(i, s.alternate, s), s = s.sibling;
    }
    function kl(i) {
      for (i = i.child; i !== null; ) {
        var s = i;
        switch (s.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            Un(4, s, s.return), kl(s);
            break;
          case 1:
            Hi(s, s.return);
            var a = s.stateNode;
            typeof a.componentWillUnmount == "function" && k0(s, s.return, a), kl(s);
            break;
          case 27:
            qr(s.stateNode);
          case 26:
          case 5:
            Hi(s, s.return), kl(s);
            break;
          case 22:
            s.memoizedState === null && kl(s);
            break;
          case 30:
            kl(s);
            break;
          default:
            kl(s);
        }
        i = i.sibling;
      }
    }
    function gn(i, s, a) {
      for (a = a && (s.subtreeFlags & 8772) !== 0, s = s.child; s !== null; ) {
        var c = s.alternate, d = i, m = s, b = m.flags;
        switch (m.tag) {
          case 0:
          case 11:
          case 15:
            gn(d, m, a), Dr(4, m);
            break;
          case 1:
            if (gn(d, m, a), c = m, d = c.stateNode, typeof d.componentDidMount == "function") try {
              d.componentDidMount();
            } catch (E) {
              Ht(c, c.return, E);
            }
            if (c = m, d = c.updateQueue, d !== null) {
              var x = c.stateNode;
              try {
                var A = d.shared.hiddenCallbacks;
                if (A !== null) for (d.shared.hiddenCallbacks = null, d = 0; d < A.length; d++) pp(A[d], x);
              } catch (E) {
                Ht(c, c.return, E);
              }
            }
            a && b & 64 && T0(m), Er(m, m.return);
            break;
          case 27:
            E0(m);
          case 26:
          case 5:
            gn(d, m, a), a && c === null && b & 4 && O0(m), Er(m, m.return);
            break;
          case 12:
            gn(d, m, a);
            break;
          case 31:
            gn(d, m, a), a && b & 4 && L0(d, m);
            break;
          case 13:
            gn(d, m, a), a && b & 4 && H0(d, m);
            break;
          case 22:
            m.memoizedState === null && gn(d, m, a), Er(m, m.return);
            break;
          case 30:
            break;
          default:
            gn(d, m, a);
        }
        s = s.sibling;
      }
    }
    function lh(i, s) {
      var a = null;
      i !== null && i.memoizedState !== null && i.memoizedState.cachePool !== null && (a = i.memoizedState.cachePool.pool), i = null, s.memoizedState !== null && s.memoizedState.cachePool !== null && (i = s.memoizedState.cachePool.pool), i !== a && (i != null && i.refCount++, a != null && yr(a));
    }
    function sh(i, s) {
      i = null, s.alternate !== null && (i = s.alternate.memoizedState.cache), s = s.memoizedState.cache, s !== i && (s.refCount++, i != null && yr(i));
    }
    function Di(i, s, a, c) {
      if (s.subtreeFlags & 10256) for (s = s.child; s !== null; ) q0(i, s, a, c), s = s.sibling;
    }
    function q0(i, s, a, c) {
      var d = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          Di(i, s, a, c), d & 2048 && Dr(9, s);
          break;
        case 1:
          Di(i, s, a, c);
          break;
        case 3:
          Di(i, s, a, c), d & 2048 && (i = null, s.alternate !== null && (i = s.alternate.memoizedState.cache), s = s.memoizedState.cache, s !== i && (s.refCount++, i != null && yr(i)));
          break;
        case 12:
          if (d & 2048) {
            Di(i, s, a, c), i = s.stateNode;
            try {
              var m = s.memoizedProps, b = m.id, x = m.onPostCommit;
              typeof x == "function" && x(b, s.alternate === null ? "mount" : "update", i.passiveEffectDuration, -0);
            } catch (A) {
              Ht(s, s.return, A);
            }
          } else Di(i, s, a, c);
          break;
        case 31:
          Di(i, s, a, c);
          break;
        case 13:
          Di(i, s, a, c);
          break;
        case 23:
          break;
        case 22:
          m = s.stateNode, b = s.alternate, s.memoizedState !== null ? m._visibility & 2 ? Di(i, s, a, c) : Br(i, s) : m._visibility & 2 ? Di(i, s, a, c) : (m._visibility |= 2, ps(i, s, a, c, (s.subtreeFlags & 10256) !== 0 || false)), d & 2048 && lh(b, s);
          break;
        case 24:
          Di(i, s, a, c), d & 2048 && sh(s.alternate, s);
          break;
        default:
          Di(i, s, a, c);
      }
    }
    function ps(i, s, a, c, d) {
      for (d = d && ((s.subtreeFlags & 10256) !== 0 || false), s = s.child; s !== null; ) {
        var m = i, b = s, x = a, A = c, E = b.flags;
        switch (b.tag) {
          case 0:
          case 11:
          case 15:
            ps(m, b, x, A, d), Dr(8, b);
            break;
          case 23:
            break;
          case 22:
            var U = b.stateNode;
            b.memoizedState !== null ? U._visibility & 2 ? ps(m, b, x, A, d) : Br(m, b) : (U._visibility |= 2, ps(m, b, x, A, d)), d && E & 2048 && lh(b.alternate, b);
            break;
          case 24:
            ps(m, b, x, A, d), d && E & 2048 && sh(b.alternate, b);
            break;
          default:
            ps(m, b, x, A, d);
        }
        s = s.sibling;
      }
    }
    function Br(i, s) {
      if (s.subtreeFlags & 10256) for (s = s.child; s !== null; ) {
        var a = i, c = s, d = c.flags;
        switch (c.tag) {
          case 22:
            Br(a, c), d & 2048 && lh(c.alternate, c);
            break;
          case 24:
            Br(a, c), d & 2048 && sh(c.alternate, c);
            break;
          default:
            Br(a, c);
        }
        s = s.sibling;
      }
    }
    var Rr = 8192;
    function ys(i, s, a) {
      if (i.subtreeFlags & Rr) for (i = i.child; i !== null; ) j0(i, s, a), i = i.sibling;
    }
    function j0(i, s, a) {
      switch (i.tag) {
        case 26:
          ys(i, s, a), i.flags & Rr && i.memoizedState !== null && dA(a, Oi, i.memoizedState, i.memoizedProps);
          break;
        case 5:
          ys(i, s, a);
          break;
        case 3:
        case 4:
          var c = Oi;
          Oi = Xa(i.stateNode.containerInfo), ys(i, s, a), Oi = c;
          break;
        case 22:
          i.memoizedState === null && (c = i.alternate, c !== null && c.memoizedState !== null ? (c = Rr, Rr = 16777216, ys(i, s, a), Rr = c) : ys(i, s, a));
          break;
        default:
          ys(i, s, a);
      }
    }
    function Y0(i) {
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
        if (s !== null) for (var a = 0; a < s.length; a++) {
          var c = s[a];
          pe = c, X0(c, i);
        }
        Y0(i);
      }
      if (i.subtreeFlags & 10256) for (i = i.child; i !== null; ) G0(i), i = i.sibling;
    }
    function G0(i) {
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
          i.memoizedState !== null && s._visibility & 2 && (i.return === null || i.return.tag !== 13) ? (s._visibility &= -3, Ea(i)) : zr(i);
          break;
        default:
          zr(i);
      }
    }
    function Ea(i) {
      var s = i.deletions;
      if ((i.flags & 16) !== 0) {
        if (s !== null) for (var a = 0; a < s.length; a++) {
          var c = s[a];
          pe = c, X0(c, i);
        }
        Y0(i);
      }
      for (i = i.child; i !== null; ) {
        switch (s = i, s.tag) {
          case 0:
          case 11:
          case 15:
            Un(8, s, s.return), Ea(s);
            break;
          case 22:
            a = s.stateNode, a._visibility & 2 && (a._visibility &= -3, Ea(s));
            break;
          default:
            Ea(s);
        }
        i = i.sibling;
      }
    }
    function X0(i, s) {
      for (; pe !== null; ) {
        var a = pe;
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            Un(8, a, s);
            break;
          case 23:
          case 22:
            if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
              var c = a.memoizedState.cachePool.pool;
              c != null && c.refCount++;
            }
            break;
          case 24:
            yr(a.memoizedState.cache);
        }
        if (c = a.child, c !== null) c.return = a, pe = c;
        else t: for (a = i; pe !== null; ) {
          c = pe;
          var d = c.sibling, m = c.return;
          if (z0(c), c === a) {
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
    var kw = {
      getCacheForType: function(i) {
        var s = Se(se), a = s.data.get(i);
        return a === void 0 && (a = i(), s.data.set(i, a)), a;
      },
      cacheSignal: function() {
        return Se(se).controller.signal;
      }
    }, Ow = typeof WeakMap == "function" ? WeakMap : Map, Nt = 0, Yt = null, wt = null, Ct = 0, Lt = 0, li = null, Vn = false, bs = false, rh = false, pn = 0, Pt = 0, qn = 0, Ol = 0, oh = 0, si = 0, vs = 0, Nr = null, Ke = null, ah = false, Ba = 0, K0 = 0, Ra = 1 / 0, za = null, jn = null, he = 0, Yn = null, Ss = null, yn = 0, uh = 0, ch = null, Q0 = null, Lr = 0, fh = null;
    function ri() {
      return (Nt & 2) !== 0 && Ct !== 0 ? Ct & -Ct : R.T !== null ? yh() : ag();
    }
    function Z0() {
      if (si === 0) if ((Ct & 536870912) === 0 || _t) {
        var i = Yo;
        Yo <<= 1, (Yo & 3932160) === 0 && (Yo = 262144), si = i;
      } else si = 536870912;
      return i = ii.current, i !== null && (i.flags |= 32), si;
    }
    function Qe(i, s, a) {
      (i === Yt && (Lt === 2 || Lt === 9) || i.cancelPendingCommit !== null) && (xs(i, 0), Gn(i, Ct, si, false)), nr(i, a), ((Nt & 2) === 0 || i !== Yt) && (i === Yt && ((Nt & 2) === 0 && (Ol |= a), Pt === 4 && Gn(i, Ct, si, false)), Ui(i));
    }
    function W0(i, s, a) {
      if ((Nt & 6) !== 0) throw Error(n(327));
      var c = !a && (s & 127) === 0 && (s & i.expiredLanes) === 0 || ir(i, s), d = c ? Bw(i, s) : dh(i, s, true), m = c;
      do {
        if (d === 0) {
          bs && !c && Gn(i, s, 0, false);
          break;
        } else {
          if (a = i.current.alternate, m && !Dw(a)) {
            d = dh(i, s, false), m = false;
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
                var A = x.current.memoizedState.isDehydrated;
                if (A && (xs(x, b).flags |= 256), b = dh(x, b, false), b !== 2) {
                  if (rh && !A) {
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
            switch (c = i, m = d, m) {
              case 0:
              case 1:
                throw Error(n(345));
              case 4:
                if ((s & 4194048) !== s) break;
              case 6:
                Gn(c, s, si, !Vn);
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
            if ((s & 62914560) === s && (d = Ba + 300 - Ie(), 10 < d)) {
              if (Gn(c, s, si, !Vn), Xo(c, 0, true) !== 0) break t;
              yn = s, c.timeoutHandle = My(J0.bind(null, c, a, Ke, za, ah, s, si, Ol, vs, Vn, m, "Throttled", -0, 0), d);
              break t;
            }
            J0(c, a, Ke, za, ah, s, si, Ol, vs, Vn, m, null, -0, 0);
          }
        }
        break;
      } while (true);
      Ui(i);
    }
    function J0(i, s, a, c, d, m, b, x, A, E, U, X, B, z) {
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
        }, j0(s, m, X);
        var nt = (m & 62914560) === m ? Ba - Ie() : (m & 4194048) === m ? K0 - Ie() : 0;
        if (nt = mA(X, nt), nt !== null) {
          yn = m, i.cancelPendingCommit = nt(ny.bind(null, i, s, m, a, c, d, b, x, A, U, X, null, B, z)), Gn(i, m, b, !E);
          return;
        }
      }
      ny(i, s, m, a, c, d, b, x, A);
    }
    function Dw(i) {
      for (var s = i; ; ) {
        var a = s.tag;
        if ((a === 0 || a === 11 || a === 15) && s.flags & 16384 && (a = s.updateQueue, a !== null && (a = a.stores, a !== null))) for (var c = 0; c < a.length; c++) {
          var d = a[c], m = d.getSnapshot;
          d = d.value;
          try {
            if (!ti(m(), d)) return false;
          } catch {
            return false;
          }
        }
        if (a = s.child, s.subtreeFlags & 16384 && a !== null) a.return = s, s = a;
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
    function Gn(i, s, a, c) {
      s &= ~oh, s &= ~Ol, i.suspendedLanes |= s, i.pingedLanes &= ~s, c && (i.warmLanes |= s), c = i.expirationTimes;
      for (var d = s; 0 < d; ) {
        var m = 31 - $e(d), b = 1 << m;
        c[m] = -1, d &= ~b;
      }
      a !== 0 && sg(i, a, s);
    }
    function Na() {
      return (Nt & 6) === 0 ? (Hr(0), false) : true;
    }
    function hh() {
      if (wt !== null) {
        if (Lt === 0) var i = wt.return;
        else i = wt, rn = Sl = null, kf(i), fs = null, vr = 0, i = wt;
        for (; i !== null; ) _0(i.alternate, i), i = i.return;
        wt = null;
      }
    }
    function xs(i, s) {
      var a = i.timeoutHandle;
      a !== -1 && (i.timeoutHandle = -1, Fw(a)), a = i.cancelPendingCommit, a !== null && (i.cancelPendingCommit = null, a()), yn = 0, hh(), Yt = i, wt = a = ln(i.current, null), Ct = s, Lt = 0, li = null, Vn = false, bs = ir(i, s), rh = false, vs = si = oh = Ol = qn = Pt = 0, Ke = Nr = null, ah = false, (s & 8) !== 0 && (s |= s & 32);
      var c = i.entangledLanes;
      if (c !== 0) for (i = i.entanglements, c &= s; 0 < c; ) {
        var d = 31 - $e(c), m = 1 << d;
        s |= i[d], c &= ~m;
      }
      return pn = s, ia(), a;
    }
    function F0(i, s) {
      vt = null, R.H = Tr, s === cs || s === ca ? (s = hp(), Lt = 3) : s === pf ? (s = hp(), Lt = 4) : Lt = s === Xf ? 8 : s !== null && typeof s == "object" && typeof s.then == "function" ? 6 : 1, li = s, wt === null && (Pt = 1, Ca(i, di(s, i.current)));
    }
    function I0() {
      var i = ii.current;
      return i === null ? true : (Ct & 4194048) === Ct ? yi === null : (Ct & 62914560) === Ct || (Ct & 536870912) !== 0 ? i === yi : false;
    }
    function P0() {
      var i = R.H;
      return R.H = Tr, i === null ? Tr : i;
    }
    function $0() {
      var i = R.A;
      return R.A = kw, i;
    }
    function La() {
      Pt = 4, Vn || (Ct & 4194048) !== Ct && ii.current !== null || (bs = true), (qn & 134217727) === 0 && (Ol & 134217727) === 0 || Yt === null || Gn(Yt, Ct, si, false);
    }
    function dh(i, s, a) {
      var c = Nt;
      Nt |= 2;
      var d = P0(), m = $0();
      (Yt !== i || Ct !== s) && (za = null, xs(i, s)), s = false;
      var b = Pt;
      t: do
        try {
          if (Lt !== 0 && wt !== null) {
            var x = wt, A = li;
            switch (Lt) {
              case 8:
                hh(), b = 6;
                break t;
              case 3:
              case 2:
              case 9:
              case 6:
                ii.current === null && (s = true);
                var E = Lt;
                if (Lt = 0, li = null, ws(i, x, A, E), a && bs) {
                  b = 0;
                  break t;
                }
                break;
              default:
                E = Lt, Lt = 0, li = null, ws(i, x, A, E);
            }
          }
          Ew(), b = Pt;
          break;
        } catch (U) {
          F0(i, U);
        }
      while (true);
      return s && i.shellSuspendCounter++, rn = Sl = null, Nt = c, R.H = d, R.A = m, wt === null && (Yt = null, Ct = 0, ia()), b;
    }
    function Ew() {
      for (; wt !== null; ) ty(wt);
    }
    function Bw(i, s) {
      var a = Nt;
      Nt |= 2;
      var c = P0(), d = $0();
      Yt !== i || Ct !== s ? (za = null, Ra = Ie() + 500, xs(i, s)) : bs = ir(i, s);
      t: do
        try {
          if (Lt !== 0 && wt !== null) {
            s = wt;
            var m = li;
            e: switch (Lt) {
              case 1:
                Lt = 0, li = null, ws(i, s, m, 1);
                break;
              case 2:
              case 9:
                if (cp(m)) {
                  Lt = 0, li = null, ey(s);
                  break;
                }
                s = function() {
                  Lt !== 2 && Lt !== 9 || Yt !== i || (Lt = 7), Ui(i);
                }, m.then(s, s);
                break t;
              case 3:
                Lt = 7;
                break t;
              case 4:
                Lt = 5;
                break t;
              case 7:
                cp(m) ? (Lt = 0, li = null, ey(s)) : (Lt = 0, li = null, ws(i, s, m, 7));
                break;
              case 5:
                var b = null;
                switch (wt.tag) {
                  case 26:
                    b = wt.memoizedState;
                  case 5:
                  case 27:
                    var x = wt;
                    if (b ? qy(b) : x.stateNode.complete) {
                      Lt = 0, li = null;
                      var A = x.sibling;
                      if (A !== null) wt = A;
                      else {
                        var E = x.return;
                        E !== null ? (wt = E, Ha(E)) : wt = null;
                      }
                      break e;
                    }
                }
                Lt = 0, li = null, ws(i, s, m, 5);
                break;
              case 6:
                Lt = 0, li = null, ws(i, s, m, 6);
                break;
              case 8:
                hh(), Pt = 6;
                break t;
              default:
                throw Error(n(462));
            }
          }
          Rw();
          break;
        } catch (U) {
          F0(i, U);
        }
      while (true);
      return rn = Sl = null, R.H = c, R.A = d, Nt = a, wt !== null ? 0 : (Yt = null, Ct = 0, ia(), Pt);
    }
    function Rw() {
      for (; wt !== null && !i2(); ) ty(wt);
    }
    function ty(i) {
      var s = C0(i.alternate, i, pn);
      i.memoizedProps = i.pendingProps, s === null ? Ha(i) : wt = s;
    }
    function ey(i) {
      var s = i, a = s.alternate;
      switch (s.tag) {
        case 15:
        case 0:
          s = b0(a, s, s.pendingProps, s.type, void 0, Ct);
          break;
        case 11:
          s = b0(a, s, s.pendingProps, s.type.render, s.ref, Ct);
          break;
        case 5:
          kf(s);
        default:
          _0(a, s), s = wt = $g(s, pn), s = C0(a, s, pn);
      }
      i.memoizedProps = i.pendingProps, s === null ? Ha(i) : wt = s;
    }
    function ws(i, s, a, c) {
      rn = Sl = null, kf(s), fs = null, vr = 0;
      var d = s.return;
      try {
        if (xw(i, d, s, a, Ct)) {
          Pt = 1, Ca(i, di(a, i.current)), wt = null;
          return;
        }
      } catch (m) {
        if (d !== null) throw wt = d, m;
        Pt = 1, Ca(i, di(a, i.current)), wt = null;
        return;
      }
      s.flags & 32768 ? (_t || c === 1 ? i = true : bs || (Ct & 536870912) !== 0 ? i = false : (Vn = i = true, (c === 2 || c === 9 || c === 3 || c === 6) && (c = ii.current, c !== null && c.tag === 13 && (c.flags |= 16384))), iy(s, i)) : Ha(s);
    }
    function Ha(i) {
      var s = i;
      do {
        if ((s.flags & 32768) !== 0) {
          iy(s, Vn);
          return;
        }
        i = s.return;
        var a = Cw(s.alternate, s, pn);
        if (a !== null) {
          wt = a;
          return;
        }
        if (s = s.sibling, s !== null) {
          wt = s;
          return;
        }
        wt = s = i;
      } while (s !== null);
      Pt === 0 && (Pt = 5);
    }
    function iy(i, s) {
      do {
        var a = Mw(i.alternate, i);
        if (a !== null) {
          a.flags &= 32767, wt = a;
          return;
        }
        if (a = i.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !s && (i = i.sibling, i !== null)) {
          wt = i;
          return;
        }
        wt = i = a;
      } while (i !== null);
      Pt = 6, wt = null;
    }
    function ny(i, s, a, c, d, m, b, x, A) {
      i.cancelPendingCommit = null;
      do
        Ua();
      while (he !== 0);
      if ((Nt & 6) !== 0) throw Error(n(327));
      if (s !== null) {
        if (s === i.current) throw Error(n(177));
        if (m = s.lanes | s.childLanes, m |= tf, h2(i, a, m, b, x, A), i === Yt && (wt = Yt = null, Ct = 0), Ss = s, Yn = i, yn = a, uh = m, ch = d, Q0 = c, (s.subtreeFlags & 10256) !== 0 || (s.flags & 10256) !== 0 ? (i.callbackNode = null, i.callbackPriority = 0, Hw(qo, function() {
          return ay(), null;
        })) : (i.callbackNode = null, i.callbackPriority = 0), c = (s.flags & 13878) !== 0, (s.subtreeFlags & 13878) !== 0 || c) {
          c = R.T, R.T = null, d = Z.p, Z.p = 2, b = Nt, Nt |= 4;
          try {
            _w(i, s, a);
          } finally {
            Nt = b, Z.p = d, R.T = c;
          }
        }
        he = 1, ly(), sy(), ry();
      }
    }
    function ly() {
      if (he === 1) {
        he = 0;
        var i = Yn, s = Ss, a = (s.flags & 13878) !== 0;
        if ((s.subtreeFlags & 13878) !== 0 || a) {
          a = R.T, R.T = null;
          var c = Z.p;
          Z.p = 2;
          var d = Nt;
          Nt |= 4;
          try {
            U0(s, i);
            var m = Mh, b = Xg(i.containerInfo), x = m.focusedElem, A = m.selectionRange;
            if (b !== x && x && x.ownerDocument && Gg(x.ownerDocument.documentElement, x)) {
              if (A !== null && Jc(x)) {
                var E = A.start, U = A.end;
                if (U === void 0 && (U = E), "selectionStart" in x) x.selectionStart = E, x.selectionEnd = Math.min(U, x.value.length);
                else {
                  var X = x.ownerDocument || document, B = X && X.defaultView || window;
                  if (B.getSelection) {
                    var z = B.getSelection(), nt = x.textContent.length, ct = Math.min(A.start, nt), qt = A.end === void 0 ? ct : Math.min(A.end, nt);
                    !z.extend && ct > qt && (b = qt, qt = ct, ct = b);
                    var k = Yg(x, ct), T = Yg(x, qt);
                    if (k && T && (z.rangeCount !== 1 || z.anchorNode !== k.node || z.anchorOffset !== k.offset || z.focusNode !== T.node || z.focusOffset !== T.offset)) {
                      var D = X.createRange();
                      D.setStart(k.node, k.offset), z.removeAllRanges(), ct > qt ? (z.addRange(D), z.extend(T.node, T.offset)) : (D.setEnd(T.node, T.offset), z.addRange(D));
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
            Fa = !!Ch, Mh = Ch = null;
          } finally {
            Nt = d, Z.p = c, R.T = a;
          }
        }
        i.current = s, he = 2;
      }
    }
    function sy() {
      if (he === 2) {
        he = 0;
        var i = Yn, s = Ss, a = (s.flags & 8772) !== 0;
        if ((s.subtreeFlags & 8772) !== 0 || a) {
          a = R.T, R.T = null;
          var c = Z.p;
          Z.p = 2;
          var d = Nt;
          Nt |= 4;
          try {
            R0(i, s.alternate, s);
          } finally {
            Nt = d, Z.p = c, R.T = a;
          }
        }
        he = 3;
      }
    }
    function ry() {
      if (he === 4 || he === 3) {
        he = 0, n2();
        var i = Yn, s = Ss, a = yn, c = Q0;
        (s.subtreeFlags & 10256) !== 0 || (s.flags & 10256) !== 0 ? he = 5 : (he = 0, Ss = Yn = null, oy(i, i.pendingLanes));
        var d = i.pendingLanes;
        if (d === 0 && (jn = null), Dc(a), s = s.stateNode, Pe && typeof Pe.onCommitFiberRoot == "function") try {
          Pe.onCommitFiberRoot(er, s, void 0, (s.current.flags & 128) === 128);
        } catch {
        }
        if (c !== null) {
          s = R.T, d = Z.p, Z.p = 2, R.T = null;
          try {
            for (var m = i.onRecoverableError, b = 0; b < c.length; b++) {
              var x = c[b];
              m(x.value, {
                componentStack: x.stack
              });
            }
          } finally {
            R.T = s, Z.p = d;
          }
        }
        (yn & 3) !== 0 && Ua(), Ui(i), d = i.pendingLanes, (a & 261930) !== 0 && (d & 42) !== 0 ? i === fh ? Lr++ : (Lr = 0, fh = i) : Lr = 0, Hr(0);
      }
    }
    function oy(i, s) {
      (i.pooledCacheLanes &= s) === 0 && (s = i.pooledCache, s != null && (i.pooledCache = null, yr(s)));
    }
    function Ua() {
      return ly(), sy(), ry(), ay();
    }
    function ay() {
      if (he !== 5) return false;
      var i = Yn, s = uh;
      uh = 0;
      var a = Dc(yn), c = R.T, d = Z.p;
      try {
        Z.p = 32 > a ? 32 : a, R.T = null, a = ch, ch = null;
        var m = Yn, b = yn;
        if (he = 0, Ss = Yn = null, yn = 0, (Nt & 6) !== 0) throw Error(n(331));
        var x = Nt;
        if (Nt |= 4, G0(m.current), q0(m, m.current, b, a), Nt = x, Hr(0, false), Pe && typeof Pe.onPostCommitFiberRoot == "function") try {
          Pe.onPostCommitFiberRoot(er, m);
        } catch {
        }
        return true;
      } finally {
        Z.p = d, R.T = c, oy(i, s);
      }
    }
    function uy(i, s, a) {
      s = di(a, s), s = Gf(i.stateNode, s, 2), i = Nn(i, s, 2), i !== null && (nr(i, 2), Ui(i));
    }
    function Ht(i, s, a) {
      if (i.tag === 3) uy(i, i, a);
      else for (; s !== null; ) {
        if (s.tag === 3) {
          uy(s, i, a);
          break;
        } else if (s.tag === 1) {
          var c = s.stateNode;
          if (typeof s.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (jn === null || !jn.has(c))) {
            i = di(a, i), a = c0(2), c = Nn(s, a, 2), c !== null && (f0(a, c, s, i), nr(c, 2), Ui(c));
            break;
          }
        }
        s = s.return;
      }
    }
    function mh(i, s, a) {
      var c = i.pingCache;
      if (c === null) {
        c = i.pingCache = new Ow();
        var d = /* @__PURE__ */ new Set();
        c.set(s, d);
      } else d = c.get(s), d === void 0 && (d = /* @__PURE__ */ new Set(), c.set(s, d));
      d.has(a) || (rh = true, d.add(a), i = zw.bind(null, i, s, a), s.then(i, i));
    }
    function zw(i, s, a) {
      var c = i.pingCache;
      c !== null && c.delete(s), i.pingedLanes |= i.suspendedLanes & a, i.warmLanes &= ~a, Yt === i && (Ct & a) === a && (Pt === 4 || Pt === 3 && (Ct & 62914560) === Ct && 300 > Ie() - Ba ? (Nt & 2) === 0 && xs(i, 0) : oh |= a, vs === Ct && (vs = 0)), Ui(i);
    }
    function cy(i, s) {
      s === 0 && (s = lg()), i = yl(i, s), i !== null && (nr(i, s), Ui(i));
    }
    function Nw(i) {
      var s = i.memoizedState, a = 0;
      s !== null && (a = s.retryLane), cy(i, a);
    }
    function Lw(i, s) {
      var a = 0;
      switch (i.tag) {
        case 31:
        case 13:
          var c = i.stateNode, d = i.memoizedState;
          d !== null && (a = d.retryLane);
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
      c !== null && c.delete(s), cy(i, a);
    }
    function Hw(i, s) {
      return _c(i, s);
    }
    var Va = null, As = null, gh = false, qa = false, ph = false, Xn = 0;
    function Ui(i) {
      i !== As && i.next === null && (As === null ? Va = As = i : As = As.next = i), qa = true, gh || (gh = true, Vw());
    }
    function Hr(i, s) {
      if (!ph && qa) {
        ph = true;
        do
          for (var a = false, c = Va; c !== null; ) {
            if (i !== 0) {
              var d = c.pendingLanes;
              if (d === 0) var m = 0;
              else {
                var b = c.suspendedLanes, x = c.pingedLanes;
                m = (1 << 31 - $e(42 | i) + 1) - 1, m &= d & ~(b & ~x), m = m & 201326741 ? m & 201326741 | 1 : m ? m | 2 : 0;
              }
              m !== 0 && (a = true, my(c, m));
            } else m = Ct, m = Xo(c, c === Yt ? m : 0, c.cancelPendingCommit !== null || c.timeoutHandle !== -1), (m & 3) === 0 || ir(c, m) || (a = true, my(c, m));
            c = c.next;
          }
        while (a);
        ph = false;
      }
    }
    function Uw() {
      fy();
    }
    function fy() {
      qa = gh = false;
      var i = 0;
      Xn !== 0 && Jw() && (i = Xn);
      for (var s = Ie(), a = null, c = Va; c !== null; ) {
        var d = c.next, m = hy(c, s);
        m === 0 ? (c.next = null, a === null ? Va = d : a.next = d, d === null && (As = a)) : (a = c, (i !== 0 || (m & 3) !== 0) && (qa = true)), c = d;
      }
      he !== 0 && he !== 5 || Hr(i), Xn !== 0 && (Xn = 0);
    }
    function hy(i, s) {
      for (var a = i.suspendedLanes, c = i.pingedLanes, d = i.expirationTimes, m = i.pendingLanes & -62914561; 0 < m; ) {
        var b = 31 - $e(m), x = 1 << b, A = d[b];
        A === -1 ? ((x & a) === 0 || (x & c) !== 0) && (d[b] = f2(x, s)) : A <= s && (i.expiredLanes |= x), m &= ~x;
      }
      if (s = Yt, a = Ct, a = Xo(i, i === s ? a : 0, i.cancelPendingCommit !== null || i.timeoutHandle !== -1), c = i.callbackNode, a === 0 || i === s && (Lt === 2 || Lt === 9) || i.cancelPendingCommit !== null) return c !== null && c !== null && Tc(c), i.callbackNode = null, i.callbackPriority = 0;
      if ((a & 3) === 0 || ir(i, a)) {
        if (s = a & -a, s === i.callbackPriority) return s;
        switch (c !== null && Tc(c), Dc(a)) {
          case 2:
          case 8:
            a = ig;
            break;
          case 32:
            a = qo;
            break;
          case 268435456:
            a = ng;
            break;
          default:
            a = qo;
        }
        return c = dy.bind(null, i), a = _c(a, c), i.callbackPriority = s, i.callbackNode = a, s;
      }
      return c !== null && c !== null && Tc(c), i.callbackPriority = 2, i.callbackNode = null, 2;
    }
    function dy(i, s) {
      if (he !== 0 && he !== 5) return i.callbackNode = null, i.callbackPriority = 0, null;
      var a = i.callbackNode;
      if (Ua() && i.callbackNode !== a) return null;
      var c = Ct;
      return c = Xo(i, i === Yt ? c : 0, i.cancelPendingCommit !== null || i.timeoutHandle !== -1), c === 0 ? null : (W0(i, c, s), hy(i, Ie()), i.callbackNode != null && i.callbackNode === a ? dy.bind(null, i) : null);
    }
    function my(i, s) {
      if (Ua()) return null;
      W0(i, s, true);
    }
    function Vw() {
      Iw(function() {
        (Nt & 6) !== 0 ? _c(eg, Uw) : fy();
      });
    }
    function yh() {
      if (Xn === 0) {
        var i = as;
        i === 0 && (i = jo, jo <<= 1, (jo & 261888) === 0 && (jo = 256)), Xn = i;
      }
      return Xn;
    }
    function gy(i) {
      return i == null || typeof i == "symbol" || typeof i == "boolean" ? null : typeof i == "function" ? i : Wo("" + i);
    }
    function py(i, s) {
      var a = s.ownerDocument.createElement("input");
      return a.name = s.name, a.value = s.value, i.id && a.setAttribute("form", i.id), s.parentNode.insertBefore(a, s), i = new FormData(i), a.parentNode.removeChild(a), i;
    }
    function qw(i, s, a, c, d) {
      if (s === "submit" && a && a.stateNode === d) {
        var m = gy((d[qe] || null).action), b = c.submitter;
        b && (s = (s = b[qe] || null) ? gy(s.formAction) : b.getAttribute("formAction"), s !== null && (m = s, b = null));
        var x = new Po("action", "action", null, c, d);
        i.push({
          event: x,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (c.defaultPrevented) {
                  if (Xn !== 0) {
                    var A = b ? py(d, b) : new FormData(d);
                    Hf(a, {
                      pending: true,
                      data: A,
                      method: d.method,
                      action: m
                    }, null, A);
                  }
                } else typeof m == "function" && (x.preventDefault(), A = b ? py(d, b) : new FormData(d), Hf(a, {
                  pending: true,
                  data: A,
                  method: d.method,
                  action: m
                }, m, A));
              },
              currentTarget: d
            }
          ]
        });
      }
    }
    for (var bh = 0; bh < $c.length; bh++) {
      var vh = $c[bh], jw = vh.toLowerCase(), Yw = vh[0].toUpperCase() + vh.slice(1);
      ki(jw, "on" + Yw);
    }
    ki(Zg, "onAnimationEnd"), ki(Wg, "onAnimationIteration"), ki(Jg, "onAnimationStart"), ki("dblclick", "onDoubleClick"), ki("focusin", "onFocus"), ki("focusout", "onBlur"), ki(lw, "onTransitionRun"), ki(sw, "onTransitionStart"), ki(rw, "onTransitionCancel"), ki(Fg, "onTransitionEnd"), Wl("onMouseEnter", [
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
    var Ur = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Gw = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ur));
    function yy(i, s) {
      s = (s & 4) !== 0;
      for (var a = 0; a < i.length; a++) {
        var c = i[a], d = c.event;
        c = c.listeners;
        t: {
          var m = void 0;
          if (s) for (var b = c.length - 1; 0 <= b; b--) {
            var x = c[b], A = x.instance, E = x.currentTarget;
            if (x = x.listener, A !== m && d.isPropagationStopped()) break t;
            m = x, d.currentTarget = E;
            try {
              m(d);
            } catch (U) {
              ea(U);
            }
            d.currentTarget = null, m = A;
          }
          else for (b = 0; b < c.length; b++) {
            if (x = c[b], A = x.instance, E = x.currentTarget, x = x.listener, A !== m && d.isPropagationStopped()) break t;
            m = x, d.currentTarget = E;
            try {
              m(d);
            } catch (U) {
              ea(U);
            }
            d.currentTarget = null, m = A;
          }
        }
      }
    }
    function At(i, s) {
      var a = s[Ec];
      a === void 0 && (a = s[Ec] = /* @__PURE__ */ new Set());
      var c = i + "__bubble";
      a.has(c) || (by(s, i, 2, false), a.add(c));
    }
    function Sh(i, s, a) {
      var c = 0;
      s && (c |= 4), by(a, i, c, s);
    }
    var ja = "_reactListening" + Math.random().toString(36).slice(2);
    function xh(i) {
      if (!i[ja]) {
        i[ja] = true, fg.forEach(function(a) {
          a !== "selectionchange" && (Gw.has(a) || Sh(a, false, i), Sh(a, true, i));
        });
        var s = i.nodeType === 9 ? i : i.ownerDocument;
        s === null || s[ja] || (s[ja] = true, Sh("selectionchange", false, s));
      }
    }
    function by(i, s, a, c) {
      switch (Zy(s)) {
        case 2:
          var d = yA;
          break;
        case 8:
          d = bA;
          break;
        default:
          d = Lh;
      }
      a = d.bind(null, s, a, i), d = void 0, !qc || s !== "touchstart" && s !== "touchmove" && s !== "wheel" || (d = true), c ? d !== void 0 ? i.addEventListener(s, a, {
        capture: true,
        passive: d
      }) : i.addEventListener(s, a, true) : d !== void 0 ? i.addEventListener(s, a, {
        passive: d
      }) : i.addEventListener(s, a, false);
    }
    function wh(i, s, a, c, d) {
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
            if (b = Kl(x), b === null) return;
            if (A = b.tag, A === 5 || A === 6 || A === 26 || A === 27) {
              c = m = b;
              continue t;
            }
            x = x.parentNode;
          }
        }
        c = c.return;
      }
      Ag(function() {
        var E = m, U = Uc(a), X = [];
        t: {
          var B = Ig.get(i);
          if (B !== void 0) {
            var z = Po, nt = i;
            switch (i) {
              case "keypress":
                if (Fo(a) === 0) break t;
              case "keydown":
              case "keyup":
                z = L2;
                break;
              case "focusin":
                nt = "focus", z = Xc;
                break;
              case "focusout":
                nt = "blur", z = Xc;
                break;
              case "beforeblur":
              case "afterblur":
                z = Xc;
                break;
              case "click":
                if (a.button === 2) break t;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                z = _g;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                z = C2;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                z = V2;
                break;
              case Zg:
              case Wg:
              case Jg:
                z = T2;
                break;
              case Fg:
                z = j2;
                break;
              case "scroll":
              case "scrollend":
                z = w2;
                break;
              case "wheel":
                z = G2;
                break;
              case "copy":
              case "cut":
              case "paste":
                z = O2;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                z = kg;
                break;
              case "toggle":
              case "beforetoggle":
                z = K2;
            }
            var ct = (s & 4) !== 0, qt = !ct && (i === "scroll" || i === "scrollend"), k = ct ? B !== null ? B + "Capture" : null : B;
            ct = [];
            for (var T = E, D; T !== null; ) {
              var Y = T;
              if (D = Y.stateNode, Y = Y.tag, Y !== 5 && Y !== 26 && Y !== 27 || D === null || k === null || (Y = rr(T, k), Y != null && ct.push(Vr(T, Y, D))), qt) break;
              T = T.return;
            }
            0 < ct.length && (B = new z(B, nt, null, a, U), X.push({
              event: B,
              listeners: ct
            }));
          }
        }
        if ((s & 7) === 0) {
          t: {
            if (B = i === "mouseover" || i === "pointerover", z = i === "mouseout" || i === "pointerout", B && a !== Hc && (nt = a.relatedTarget || a.fromElement) && (Kl(nt) || nt[Xl])) break t;
            if ((z || B) && (B = U.window === U ? U : (B = U.ownerDocument) ? B.defaultView || B.parentWindow : window, z ? (nt = a.relatedTarget || a.toElement, z = E, nt = nt ? Kl(nt) : null, nt !== null && (qt = o(nt), ct = nt.tag, nt !== qt || ct !== 5 && ct !== 27 && ct !== 6) && (nt = null)) : (z = null, nt = E), z !== nt)) {
              if (ct = _g, Y = "onMouseLeave", k = "onMouseEnter", T = "mouse", (i === "pointerout" || i === "pointerover") && (ct = kg, Y = "onPointerLeave", k = "onPointerEnter", T = "pointer"), qt = z == null ? B : sr(z), D = nt == null ? B : sr(nt), B = new ct(Y, T + "leave", z, a, U), B.target = qt, B.relatedTarget = D, Y = null, Kl(U) === E && (ct = new ct(k, T + "enter", nt, a, U), ct.target = D, ct.relatedTarget = qt, Y = ct), qt = Y, z && nt) e: {
                for (ct = Xw, k = z, T = nt, D = 0, Y = k; Y; Y = ct(Y)) D++;
                Y = 0;
                for (var at = T; at; at = ct(at)) Y++;
                for (; 0 < D - Y; ) k = ct(k), D--;
                for (; 0 < Y - D; ) T = ct(T), Y--;
                for (; D--; ) {
                  if (k === T || T !== null && k === T.alternate) {
                    ct = k;
                    break e;
                  }
                  k = ct(k), T = ct(T);
                }
                ct = null;
              }
              else ct = null;
              z !== null && vy(X, B, z, ct, false), nt !== null && qt !== null && vy(X, qt, nt, ct, true);
            }
          }
          t: {
            if (B = E ? sr(E) : window, z = B.nodeName && B.nodeName.toLowerCase(), z === "select" || z === "input" && B.type === "file") var Rt = Lg;
            else if (zg(B)) if (Hg) Rt = ew;
            else {
              Rt = $2;
              var st = P2;
            }
            else z = B.nodeName, !z || z.toLowerCase() !== "input" || B.type !== "checkbox" && B.type !== "radio" ? E && Lc(E.elementType) && (Rt = Lg) : Rt = tw;
            if (Rt && (Rt = Rt(i, E))) {
              Ng(X, Rt, a, U);
              break t;
            }
            st && st(i, B, E), i === "focusout" && E && B.type === "number" && E.memoizedProps.value != null && Nc(B, "number", B.value);
          }
          switch (st = E ? sr(E) : window, i) {
            case "focusin":
              (zg(st) || st.contentEditable === "true") && (ts = st, Fc = E, mr = null);
              break;
            case "focusout":
              mr = Fc = ts = null;
              break;
            case "mousedown":
              Ic = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Ic = false, Kg(X, a, U);
              break;
            case "selectionchange":
              if (nw) break;
            case "keydown":
            case "keyup":
              Kg(X, a, U);
          }
          var xt;
          if (Qc) t: {
            switch (i) {
              case "compositionstart":
                var Mt = "onCompositionStart";
                break t;
              case "compositionend":
                Mt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                Mt = "onCompositionUpdate";
                break t;
            }
            Mt = void 0;
          }
          else $l ? Bg(i, a) && (Mt = "onCompositionEnd") : i === "keydown" && a.keyCode === 229 && (Mt = "onCompositionStart");
          Mt && (Og && a.locale !== "ko" && ($l || Mt !== "onCompositionStart" ? Mt === "onCompositionEnd" && $l && (xt = Cg()) : (kn = U, jc = "value" in kn ? kn.value : kn.textContent, $l = true)), st = Ya(E, Mt), 0 < st.length && (Mt = new Tg(Mt, i, null, a, U), X.push({
            event: Mt,
            listeners: st
          }), xt ? Mt.data = xt : (xt = Rg(a), xt !== null && (Mt.data = xt)))), (xt = Z2 ? W2(i, a) : J2(i, a)) && (Mt = Ya(E, "onBeforeInput"), 0 < Mt.length && (st = new Tg("onBeforeInput", "beforeinput", null, a, U), X.push({
            event: st,
            listeners: Mt
          }), st.data = xt)), qw(X, i, E, a, U);
        }
        yy(X, s);
      });
    }
    function Vr(i, s, a) {
      return {
        instance: i,
        listener: s,
        currentTarget: a
      };
    }
    function Ya(i, s) {
      for (var a = s + "Capture", c = []; i !== null; ) {
        var d = i, m = d.stateNode;
        if (d = d.tag, d !== 5 && d !== 26 && d !== 27 || m === null || (d = rr(i, a), d != null && c.unshift(Vr(i, d, m)), d = rr(i, s), d != null && c.push(Vr(i, d, m))), i.tag === 3) return c;
        i = i.return;
      }
      return [];
    }
    function Xw(i) {
      if (i === null) return null;
      do
        i = i.return;
      while (i && i.tag !== 5 && i.tag !== 27);
      return i || null;
    }
    function vy(i, s, a, c, d) {
      for (var m = s._reactName, b = []; a !== null && a !== c; ) {
        var x = a, A = x.alternate, E = x.stateNode;
        if (x = x.tag, A !== null && A === c) break;
        x !== 5 && x !== 26 && x !== 27 || E === null || (A = E, d ? (E = rr(a, m), E != null && b.unshift(Vr(a, E, A))) : d || (E = rr(a, m), E != null && b.push(Vr(a, E, A)))), a = a.return;
      }
      b.length !== 0 && i.push({
        event: s,
        listeners: b
      });
    }
    var Kw = /\r\n?/g, Qw = /\u0000|\uFFFD/g;
    function Sy(i) {
      return (typeof i == "string" ? i : "" + i).replace(Kw, `
`).replace(Qw, "");
    }
    function xy(i, s) {
      return s = Sy(s), Sy(i) === s;
    }
    function Vt(i, s, a, c, d, m) {
      switch (a) {
        case "children":
          typeof c == "string" ? s === "body" || s === "textarea" && c === "" || Fl(i, c) : (typeof c == "number" || typeof c == "bigint") && s !== "body" && Fl(i, "" + c);
          break;
        case "className":
          Qo(i, "class", c);
          break;
        case "tabIndex":
          Qo(i, "tabindex", c);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Qo(i, a, c);
          break;
        case "style":
          xg(i, c, m);
          break;
        case "data":
          if (s !== "object") {
            Qo(i, "data", c);
            break;
          }
        case "src":
        case "href":
          if (c === "" && (s !== "a" || a !== "href")) {
            i.removeAttribute(a);
            break;
          }
          if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
            i.removeAttribute(a);
            break;
          }
          c = Wo("" + c), i.setAttribute(a, c);
          break;
        case "action":
        case "formAction":
          if (typeof c == "function") {
            i.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
            break;
          } else typeof m == "function" && (a === "formAction" ? (s !== "input" && Vt(i, s, "name", d.name, d, null), Vt(i, s, "formEncType", d.formEncType, d, null), Vt(i, s, "formMethod", d.formMethod, d, null), Vt(i, s, "formTarget", d.formTarget, d, null)) : (Vt(i, s, "encType", d.encType, d, null), Vt(i, s, "method", d.method, d, null), Vt(i, s, "target", d.target, d, null)));
          if (c == null || typeof c == "symbol" || typeof c == "boolean") {
            i.removeAttribute(a);
            break;
          }
          c = Wo("" + c), i.setAttribute(a, c);
          break;
        case "onClick":
          c != null && (i.onclick = en);
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
            if (a = c.__html, a != null) {
              if (d.children != null) throw Error(n(60));
              i.innerHTML = a;
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
          a = Wo("" + c), i.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          c != null && typeof c != "function" && typeof c != "symbol" ? i.setAttribute(a, "" + c) : i.removeAttribute(a);
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
          c && typeof c != "function" && typeof c != "symbol" ? i.setAttribute(a, "") : i.removeAttribute(a);
          break;
        case "capture":
        case "download":
          c === true ? i.setAttribute(a, "") : c !== false && c != null && typeof c != "function" && typeof c != "symbol" ? i.setAttribute(a, c) : i.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? i.setAttribute(a, c) : i.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? i.removeAttribute(a) : i.setAttribute(a, c);
          break;
        case "popover":
          At("beforetoggle", i), At("toggle", i), Ko(i, "popover", c);
          break;
        case "xlinkActuate":
          tn(i, "http://www.w3.org/1999/xlink", "xlink:actuate", c);
          break;
        case "xlinkArcrole":
          tn(i, "http://www.w3.org/1999/xlink", "xlink:arcrole", c);
          break;
        case "xlinkRole":
          tn(i, "http://www.w3.org/1999/xlink", "xlink:role", c);
          break;
        case "xlinkShow":
          tn(i, "http://www.w3.org/1999/xlink", "xlink:show", c);
          break;
        case "xlinkTitle":
          tn(i, "http://www.w3.org/1999/xlink", "xlink:title", c);
          break;
        case "xlinkType":
          tn(i, "http://www.w3.org/1999/xlink", "xlink:type", c);
          break;
        case "xmlBase":
          tn(i, "http://www.w3.org/XML/1998/namespace", "xml:base", c);
          break;
        case "xmlLang":
          tn(i, "http://www.w3.org/XML/1998/namespace", "xml:lang", c);
          break;
        case "xmlSpace":
          tn(i, "http://www.w3.org/XML/1998/namespace", "xml:space", c);
          break;
        case "is":
          Ko(i, "is", c);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = S2.get(a) || a, Ko(i, a, c));
      }
    }
    function Ah(i, s, a, c, d, m) {
      switch (a) {
        case "style":
          xg(i, c, m);
          break;
        case "dangerouslySetInnerHTML":
          if (c != null) {
            if (typeof c != "object" || !("__html" in c)) throw Error(n(61));
            if (a = c.__html, a != null) {
              if (d.children != null) throw Error(n(60));
              i.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof c == "string" ? Fl(i, c) : (typeof c == "number" || typeof c == "bigint") && Fl(i, "" + c);
          break;
        case "onScroll":
          c != null && At("scroll", i);
          break;
        case "onScrollEnd":
          c != null && At("scrollend", i);
          break;
        case "onClick":
          c != null && (i.onclick = en);
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
          if (!hg.hasOwnProperty(a)) t: {
            if (a[0] === "o" && a[1] === "n" && (d = a.endsWith("Capture"), s = a.slice(2, d ? a.length - 7 : void 0), m = i[qe] || null, m = m != null ? m[a] : null, typeof m == "function" && i.removeEventListener(s, m, d), typeof c == "function")) {
              typeof m != "function" && m !== null && (a in i ? i[a] = null : i.hasAttribute(a) && i.removeAttribute(a)), i.addEventListener(s, c, d);
              break t;
            }
            a in i ? i[a] = c : c === true ? i.setAttribute(a, "") : Ko(i, a, c);
          }
      }
    }
    function we(i, s, a) {
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
          for (m in a) if (a.hasOwnProperty(m)) {
            var b = a[m];
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
                Vt(i, s, m, b, a, null);
            }
          }
          d && Vt(i, s, "srcSet", a.srcSet, a, null), c && Vt(i, s, "src", a.src, a, null);
          return;
        case "input":
          At("invalid", i);
          var x = m = b = d = null, A = null, E = null;
          for (c in a) if (a.hasOwnProperty(c)) {
            var U = a[c];
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
                Vt(i, s, c, U, a, null);
            }
          }
          yg(i, m, x, A, E, b, d, false);
          return;
        case "select":
          At("invalid", i), c = b = m = null;
          for (d in a) if (a.hasOwnProperty(d) && (x = a[d], x != null)) switch (d) {
            case "value":
              m = x;
              break;
            case "defaultValue":
              b = x;
              break;
            case "multiple":
              c = x;
            default:
              Vt(i, s, d, x, a, null);
          }
          s = m, a = b, i.multiple = !!c, s != null ? Jl(i, !!c, s, false) : a != null && Jl(i, !!c, a, true);
          return;
        case "textarea":
          At("invalid", i), m = d = c = null;
          for (b in a) if (a.hasOwnProperty(b) && (x = a[b], x != null)) switch (b) {
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
              Vt(i, s, b, x, a, null);
          }
          vg(i, c, d, m);
          return;
        case "option":
          for (A in a) if (a.hasOwnProperty(A) && (c = a[A], c != null)) switch (A) {
            case "selected":
              i.selected = c && typeof c != "function" && typeof c != "symbol";
              break;
            default:
              Vt(i, s, A, c, a, null);
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
          for (c = 0; c < Ur.length; c++) At(Ur[c], i);
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
          for (E in a) if (a.hasOwnProperty(E) && (c = a[E], c != null)) switch (E) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(n(137, s));
            default:
              Vt(i, s, E, c, a, null);
          }
          return;
        default:
          if (Lc(s)) {
            for (U in a) a.hasOwnProperty(U) && (c = a[U], c !== void 0 && Ah(i, s, U, c, a, void 0));
            return;
          }
      }
      for (x in a) a.hasOwnProperty(x) && (c = a[x], c != null && Vt(i, s, x, c, a, null));
    }
    function Zw(i, s, a, c) {
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
          var d = null, m = null, b = null, x = null, A = null, E = null, U = null;
          for (z in a) {
            var X = a[z];
            if (a.hasOwnProperty(z) && X != null) switch (z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                A = X;
              default:
                c.hasOwnProperty(z) || Vt(i, s, z, null, c, X);
            }
          }
          for (var B in c) {
            var z = c[B];
            if (X = a[B], c.hasOwnProperty(B) && (z != null || X != null)) switch (B) {
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
                z !== X && Vt(i, s, B, z, c, X);
            }
          }
          zc(i, b, x, A, E, U, m, d);
          return;
        case "select":
          z = b = x = B = null;
          for (m in a) if (A = a[m], a.hasOwnProperty(m) && A != null) switch (m) {
            case "value":
              break;
            case "multiple":
              z = A;
            default:
              c.hasOwnProperty(m) || Vt(i, s, m, null, c, A);
          }
          for (d in c) if (m = c[d], A = a[d], c.hasOwnProperty(d) && (m != null || A != null)) switch (d) {
            case "value":
              B = m;
              break;
            case "defaultValue":
              x = m;
              break;
            case "multiple":
              b = m;
            default:
              m !== A && Vt(i, s, d, m, c, A);
          }
          s = x, a = b, c = z, B != null ? Jl(i, !!a, B, false) : !!c != !!a && (s != null ? Jl(i, !!a, s, true) : Jl(i, !!a, a ? [] : "", false));
          return;
        case "textarea":
          z = B = null;
          for (x in a) if (d = a[x], a.hasOwnProperty(x) && d != null && !c.hasOwnProperty(x)) switch (x) {
            case "value":
              break;
            case "children":
              break;
            default:
              Vt(i, s, x, null, c, d);
          }
          for (b in c) if (d = c[b], m = a[b], c.hasOwnProperty(b) && (d != null || m != null)) switch (b) {
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
              d !== m && Vt(i, s, b, d, c, m);
          }
          bg(i, B, z);
          return;
        case "option":
          for (var nt in a) if (B = a[nt], a.hasOwnProperty(nt) && B != null && !c.hasOwnProperty(nt)) switch (nt) {
            case "selected":
              i.selected = false;
              break;
            default:
              Vt(i, s, nt, null, c, B);
          }
          for (A in c) if (B = c[A], z = a[A], c.hasOwnProperty(A) && B !== z && (B != null || z != null)) switch (A) {
            case "selected":
              i.selected = B && typeof B != "function" && typeof B != "symbol";
              break;
            default:
              Vt(i, s, A, B, c, z);
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
          for (var ct in a) B = a[ct], a.hasOwnProperty(ct) && B != null && !c.hasOwnProperty(ct) && Vt(i, s, ct, null, c, B);
          for (E in c) if (B = c[E], z = a[E], c.hasOwnProperty(E) && B !== z && (B != null || z != null)) switch (E) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (B != null) throw Error(n(137, s));
              break;
            default:
              Vt(i, s, E, B, c, z);
          }
          return;
        default:
          if (Lc(s)) {
            for (var qt in a) B = a[qt], a.hasOwnProperty(qt) && B !== void 0 && !c.hasOwnProperty(qt) && Ah(i, s, qt, void 0, c, B);
            for (U in c) B = c[U], z = a[U], !c.hasOwnProperty(U) || B === z || B === void 0 && z === void 0 || Ah(i, s, U, B, c, z);
            return;
          }
      }
      for (var k in a) B = a[k], a.hasOwnProperty(k) && B != null && !c.hasOwnProperty(k) && Vt(i, s, k, null, c, B);
      for (X in c) B = c[X], z = a[X], !c.hasOwnProperty(X) || B === z || B == null && z == null || Vt(i, s, X, B, c, z);
    }
    function wy(i) {
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
    function Ww() {
      if (typeof performance.getEntriesByType == "function") {
        for (var i = 0, s = 0, a = performance.getEntriesByType("resource"), c = 0; c < a.length; c++) {
          var d = a[c], m = d.transferSize, b = d.initiatorType, x = d.duration;
          if (m && x && wy(b)) {
            for (b = 0, x = d.responseEnd, c += 1; c < a.length; c++) {
              var A = a[c], E = A.startTime;
              if (E > x) break;
              var U = A.transferSize, X = A.initiatorType;
              U && wy(X) && (A = A.responseEnd, b += U * (A < x ? 1 : (x - E) / (A - E)));
            }
            if (--c, s += 8 * (m + b) / (d.duration / 1e3), i++, 10 < i) break;
          }
        }
        if (0 < i) return s / i / 1e6;
      }
      return navigator.connection && (i = navigator.connection.downlink, typeof i == "number") ? i : 5;
    }
    var Ch = null, Mh = null;
    function Ga(i) {
      return i.nodeType === 9 ? i : i.ownerDocument;
    }
    function Ay(i) {
      switch (i) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function Cy(i, s) {
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
    function _h(i, s) {
      return i === "textarea" || i === "noscript" || typeof s.children == "string" || typeof s.children == "number" || typeof s.children == "bigint" || typeof s.dangerouslySetInnerHTML == "object" && s.dangerouslySetInnerHTML !== null && s.dangerouslySetInnerHTML.__html != null;
    }
    var Th = null;
    function Jw() {
      var i = window.event;
      return i && i.type === "popstate" ? i === Th ? false : (Th = i, true) : (Th = null, false);
    }
    var My = typeof setTimeout == "function" ? setTimeout : void 0, Fw = typeof clearTimeout == "function" ? clearTimeout : void 0, _y = typeof Promise == "function" ? Promise : void 0, Iw = typeof queueMicrotask == "function" ? queueMicrotask : typeof _y < "u" ? function(i) {
      return _y.resolve(null).then(i).catch(Pw);
    } : My;
    function Pw(i) {
      setTimeout(function() {
        throw i;
      });
    }
    function Kn(i) {
      return i === "head";
    }
    function Ty(i, s) {
      var a = s, c = 0;
      do {
        var d = a.nextSibling;
        if (i.removeChild(a), d && d.nodeType === 8) if (a = d.data, a === "/$" || a === "/&") {
          if (c === 0) {
            i.removeChild(d), Ts(s);
            return;
          }
          c--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&") c++;
        else if (a === "html") qr(i.ownerDocument.documentElement);
        else if (a === "head") {
          a = i.ownerDocument.head, qr(a);
          for (var m = a.firstChild; m; ) {
            var b = m.nextSibling, x = m.nodeName;
            m[lr] || x === "SCRIPT" || x === "STYLE" || x === "LINK" && m.rel.toLowerCase() === "stylesheet" || a.removeChild(m), m = b;
          }
        } else a === "body" && qr(i.ownerDocument.body);
        a = d;
      } while (a);
      Ts(s);
    }
    function ky(i, s) {
      var a = i;
      i = 0;
      do {
        var c = a.nextSibling;
        if (a.nodeType === 1 ? s ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (s ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), c && c.nodeType === 8) if (a = c.data, a === "/$") {
          if (i === 0) break;
          i--;
        } else a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || i++;
        a = c;
      } while (a);
    }
    function kh(i) {
      var s = i.firstChild;
      for (s && s.nodeType === 10 && (s = s.nextSibling); s; ) {
        var a = s;
        switch (s = s.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            kh(a), Bc(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        i.removeChild(a);
      }
    }
    function $w(i, s, a, c) {
      for (; i.nodeType === 1; ) {
        var d = a;
        if (i.nodeName.toLowerCase() !== s.toLowerCase()) {
          if (!c && (i.nodeName !== "INPUT" || i.type !== "hidden")) break;
        } else if (c) {
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
    function tA(i, s, a) {
      if (s === "") return null;
      for (; i.nodeType !== 3; ) if ((i.nodeType !== 1 || i.nodeName !== "INPUT" || i.type !== "hidden") && !a || (i = bi(i.nextSibling), i === null)) return null;
      return i;
    }
    function Oy(i, s) {
      for (; i.nodeType !== 8; ) if ((i.nodeType !== 1 || i.nodeName !== "INPUT" || i.type !== "hidden") && !s || (i = bi(i.nextSibling), i === null)) return null;
      return i;
    }
    function Oh(i) {
      return i.data === "$?" || i.data === "$~";
    }
    function Dh(i) {
      return i.data === "$!" || i.data === "$?" && i.ownerDocument.readyState !== "loading";
    }
    function eA(i, s) {
      var a = i.ownerDocument;
      if (i.data === "$~") i._reactRetry = s;
      else if (i.data !== "$?" || a.readyState !== "loading") s();
      else {
        var c = function() {
          s(), a.removeEventListener("DOMContentLoaded", c);
        };
        a.addEventListener("DOMContentLoaded", c), i._reactRetry = c;
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
    var Eh = null;
    function Dy(i) {
      i = i.nextSibling;
      for (var s = 0; i; ) {
        if (i.nodeType === 8) {
          var a = i.data;
          if (a === "/$" || a === "/&") {
            if (s === 0) return bi(i.nextSibling);
            s--;
          } else a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || s++;
        }
        i = i.nextSibling;
      }
      return null;
    }
    function Ey(i) {
      i = i.previousSibling;
      for (var s = 0; i; ) {
        if (i.nodeType === 8) {
          var a = i.data;
          if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
            if (s === 0) return i;
            s--;
          } else a !== "/$" && a !== "/&" || s++;
        }
        i = i.previousSibling;
      }
      return null;
    }
    function By(i, s, a) {
      switch (s = Ga(a), i) {
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
      Bc(i);
    }
    var vi = /* @__PURE__ */ new Map(), Ry = /* @__PURE__ */ new Set();
    function Xa(i) {
      return typeof i.getRootNode == "function" ? i.getRootNode() : i.nodeType === 9 ? i : i.ownerDocument;
    }
    var bn = Z.d;
    Z.d = {
      f: iA,
      r: nA,
      D: lA,
      C: sA,
      L: rA,
      m: oA,
      X: uA,
      S: aA,
      M: cA
    };
    function iA() {
      var i = bn.f(), s = Na();
      return i || s;
    }
    function nA(i) {
      var s = Ql(i);
      s !== null && s.tag === 5 && s.type === "form" ? Fp(s) : bn.r(i);
    }
    var Cs = typeof document > "u" ? null : document;
    function zy(i, s, a) {
      var c = Cs;
      if (c && typeof s == "string" && s) {
        var d = fi(s);
        d = 'link[rel="' + i + '"][href="' + d + '"]', typeof a == "string" && (d += '[crossorigin="' + a + '"]'), Ry.has(d) || (Ry.add(d), i = {
          rel: i,
          crossOrigin: a,
          href: s
        }, c.querySelector(d) === null && (s = c.createElement("link"), we(s, "link", i), ge(s), c.head.appendChild(s)));
      }
    }
    function lA(i) {
      bn.D(i), zy("dns-prefetch", i, null);
    }
    function sA(i, s) {
      bn.C(i, s), zy("preconnect", i, s);
    }
    function rA(i, s, a) {
      bn.L(i, s, a);
      var c = Cs;
      if (c && i && s) {
        var d = 'link[rel="preload"][as="' + fi(s) + '"]';
        s === "image" && a && a.imageSrcSet ? (d += '[imagesrcset="' + fi(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (d += '[imagesizes="' + fi(a.imageSizes) + '"]')) : d += '[href="' + fi(i) + '"]';
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
          href: s === "image" && a && a.imageSrcSet ? void 0 : i,
          as: s
        }, a), vi.set(m, i), c.querySelector(d) !== null || s === "style" && c.querySelector(jr(m)) || s === "script" && c.querySelector(Yr(m)) || (s = c.createElement("link"), we(s, "link", i), ge(s), c.head.appendChild(s)));
      }
    }
    function oA(i, s) {
      bn.m(i, s);
      var a = Cs;
      if (a && i) {
        var c = s && typeof s.as == "string" ? s.as : "script", d = 'link[rel="modulepreload"][as="' + fi(c) + '"][href="' + fi(i) + '"]', m = d;
        switch (c) {
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
        }, s), vi.set(m, i), a.querySelector(d) === null)) {
          switch (c) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (a.querySelector(Yr(m))) return;
          }
          c = a.createElement("link"), we(c, "link", i), ge(c), a.head.appendChild(c);
        }
      }
    }
    function aA(i, s, a) {
      bn.S(i, s, a);
      var c = Cs;
      if (c && i) {
        var d = Zl(c).hoistableStyles, m = Ms(i);
        s = s || "default";
        var b = d.get(m);
        if (!b) {
          var x = {
            loading: 0,
            preload: null
          };
          if (b = c.querySelector(jr(m))) x.loading = 5;
          else {
            i = y({
              rel: "stylesheet",
              href: i,
              "data-precedence": s
            }, a), (a = vi.get(m)) && Bh(i, a);
            var A = b = c.createElement("link");
            ge(A), we(A, "link", i), A._p = new Promise(function(E, U) {
              A.onload = E, A.onerror = U;
            }), A.addEventListener("load", function() {
              x.loading |= 1;
            }), A.addEventListener("error", function() {
              x.loading |= 2;
            }), x.loading |= 4, Ka(b, s, c);
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
    function uA(i, s) {
      bn.X(i, s);
      var a = Cs;
      if (a && i) {
        var c = Zl(a).hoistableScripts, d = _s(i), m = c.get(d);
        m || (m = a.querySelector(Yr(d)), m || (i = y({
          src: i,
          async: true
        }, s), (s = vi.get(d)) && Rh(i, s), m = a.createElement("script"), ge(m), we(m, "link", i), a.head.appendChild(m)), m = {
          type: "script",
          instance: m,
          count: 1,
          state: null
        }, c.set(d, m));
      }
    }
    function cA(i, s) {
      bn.M(i, s);
      var a = Cs;
      if (a && i) {
        var c = Zl(a).hoistableScripts, d = _s(i), m = c.get(d);
        m || (m = a.querySelector(Yr(d)), m || (i = y({
          src: i,
          async: true,
          type: "module"
        }, s), (s = vi.get(d)) && Rh(i, s), m = a.createElement("script"), ge(m), we(m, "link", i), a.head.appendChild(m)), m = {
          type: "script",
          instance: m,
          count: 1,
          state: null
        }, c.set(d, m));
      }
    }
    function Ny(i, s, a, c) {
      var d = (d = bt.current) ? Xa(d) : null;
      if (!d) throw Error(n(446));
      switch (i) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (s = Ms(a.href), a = Zl(d).hoistableStyles, c = a.get(s), c || (c = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, a.set(s, c)), c) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            i = Ms(a.href);
            var m = Zl(d).hoistableStyles, b = m.get(i);
            if (b || (d = d.ownerDocument || d, b = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            }, m.set(i, b), (m = d.querySelector(jr(i))) && !m._p && (b.instance = m, b.state.loading = 5), vi.has(i) || (a = {
              rel: "preload",
              as: "style",
              href: a.href,
              crossOrigin: a.crossOrigin,
              integrity: a.integrity,
              media: a.media,
              hrefLang: a.hrefLang,
              referrerPolicy: a.referrerPolicy
            }, vi.set(i, a), m || fA(d, i, a, b.state))), s && c === null) throw Error(n(528, ""));
            return b;
          }
          if (s && c !== null) throw Error(n(529, ""));
          return null;
        case "script":
          return s = a.async, a = a.src, typeof a == "string" && s && typeof s != "function" && typeof s != "symbol" ? (s = _s(a), a = Zl(d).hoistableScripts, c = a.get(s), c || (c = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, a.set(s, c)), c) : {
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
    function Ly(i) {
      return y({}, i, {
        "data-precedence": i.precedence,
        precedence: null
      });
    }
    function fA(i, s, a, c) {
      i.querySelector('link[rel="preload"][as="style"][' + s + "]") ? c.loading = 1 : (s = i.createElement("link"), c.preload = s, s.addEventListener("load", function() {
        return c.loading |= 1;
      }), s.addEventListener("error", function() {
        return c.loading |= 2;
      }), we(s, "link", a), ge(s), i.head.appendChild(s));
    }
    function _s(i) {
      return '[src="' + fi(i) + '"]';
    }
    function Yr(i) {
      return "script[async]" + i;
    }
    function Hy(i, s, a) {
      if (s.count++, s.instance === null) switch (s.type) {
        case "style":
          var c = i.querySelector('style[data-href~="' + fi(a.href) + '"]');
          if (c) return s.instance = c, ge(c), c;
          var d = y({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return c = (i.ownerDocument || i).createElement("style"), ge(c), we(c, "style", d), Ka(c, a.precedence, i), s.instance = c;
        case "stylesheet":
          d = Ms(a.href);
          var m = i.querySelector(jr(d));
          if (m) return s.state.loading |= 4, s.instance = m, ge(m), m;
          c = Ly(a), (d = vi.get(d)) && Bh(c, d), m = (i.ownerDocument || i).createElement("link"), ge(m);
          var b = m;
          return b._p = new Promise(function(x, A) {
            b.onload = x, b.onerror = A;
          }), we(m, "link", c), s.state.loading |= 4, Ka(m, a.precedence, i), s.instance = m;
        case "script":
          return m = _s(a.src), (d = i.querySelector(Yr(m))) ? (s.instance = d, ge(d), d) : (c = a, (d = vi.get(m)) && (c = y({}, a), Rh(c, d)), i = i.ownerDocument || i, d = i.createElement("script"), ge(d), we(d, "link", c), i.head.appendChild(d), s.instance = d);
        case "void":
          return null;
        default:
          throw Error(n(443, s.type));
      }
      else s.type === "stylesheet" && (s.state.loading & 4) === 0 && (c = s.instance, s.state.loading |= 4, Ka(c, a.precedence, i));
      return s.instance;
    }
    function Ka(i, s, a) {
      for (var c = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), d = c.length ? c[c.length - 1] : null, m = d, b = 0; b < c.length; b++) {
        var x = c[b];
        if (x.dataset.precedence === s) m = x;
        else if (m !== d) break;
      }
      m ? m.parentNode.insertBefore(i, m.nextSibling) : (s = a.nodeType === 9 ? a.head : a, s.insertBefore(i, s.firstChild));
    }
    function Bh(i, s) {
      i.crossOrigin == null && (i.crossOrigin = s.crossOrigin), i.referrerPolicy == null && (i.referrerPolicy = s.referrerPolicy), i.title == null && (i.title = s.title);
    }
    function Rh(i, s) {
      i.crossOrigin == null && (i.crossOrigin = s.crossOrigin), i.referrerPolicy == null && (i.referrerPolicy = s.referrerPolicy), i.integrity == null && (i.integrity = s.integrity);
    }
    var Qa = null;
    function Uy(i, s, a) {
      if (Qa === null) {
        var c = /* @__PURE__ */ new Map(), d = Qa = /* @__PURE__ */ new Map();
        d.set(a, c);
      } else d = Qa, c = d.get(a), c || (c = /* @__PURE__ */ new Map(), d.set(a, c));
      if (c.has(i)) return c;
      for (c.set(i, null), a = a.getElementsByTagName(i), d = 0; d < a.length; d++) {
        var m = a[d];
        if (!(m[lr] || m[be] || i === "link" && m.getAttribute("rel") === "stylesheet") && m.namespaceURI !== "http://www.w3.org/2000/svg") {
          var b = m.getAttribute(s) || "";
          b = i + b;
          var x = c.get(b);
          x ? x.push(m) : c.set(b, [
            m
          ]);
        }
      }
      return c;
    }
    function Vy(i, s, a) {
      i = i.ownerDocument || i, i.head.insertBefore(a, s === "title" ? i.querySelector("head > title") : null);
    }
    function hA(i, s, a) {
      if (a === 1 || s.itemProp != null) return false;
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
    function qy(i) {
      return !(i.type === "stylesheet" && (i.state.loading & 3) === 0);
    }
    function dA(i, s, a, c) {
      if (a.type === "stylesheet" && (typeof c.media != "string" || matchMedia(c.media).matches !== false) && (a.state.loading & 4) === 0) {
        if (a.instance === null) {
          var d = Ms(c.href), m = s.querySelector(jr(d));
          if (m) {
            s = m._p, s !== null && typeof s == "object" && typeof s.then == "function" && (i.count++, i = Za.bind(i), s.then(i, i)), a.state.loading |= 4, a.instance = m, ge(m);
            return;
          }
          m = s.ownerDocument || s, c = Ly(c), (d = vi.get(d)) && Bh(c, d), m = m.createElement("link"), ge(m);
          var b = m;
          b._p = new Promise(function(x, A) {
            b.onload = x, b.onerror = A;
          }), we(m, "link", c), a.instance = m;
        }
        i.stylesheets === null && (i.stylesheets = /* @__PURE__ */ new Map()), i.stylesheets.set(a, s), (s = a.state.preload) && (a.state.loading & 3) === 0 && (i.count++, a = Za.bind(i), s.addEventListener("load", a), s.addEventListener("error", a));
      }
    }
    var zh = 0;
    function mA(i, s) {
      return i.stylesheets && i.count === 0 && Ja(i, i.stylesheets), 0 < i.count || 0 < i.imgCount ? function(a) {
        var c = setTimeout(function() {
          if (i.stylesheets && Ja(i, i.stylesheets), i.unsuspend) {
            var m = i.unsuspend;
            i.unsuspend = null, m();
          }
        }, 6e4 + s);
        0 < i.imgBytes && zh === 0 && (zh = 62500 * Ww());
        var d = setTimeout(function() {
          if (i.waitingForImages = false, i.count === 0 && (i.stylesheets && Ja(i, i.stylesheets), i.unsuspend)) {
            var m = i.unsuspend;
            i.unsuspend = null, m();
          }
        }, (i.imgBytes > zh ? 50 : 800) + s);
        return i.unsuspend = a, function() {
          i.unsuspend = null, clearTimeout(c), clearTimeout(d);
        };
      } : null;
    }
    function Za() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets) Ja(this, this.stylesheets);
        else if (this.unsuspend) {
          var i = this.unsuspend;
          this.unsuspend = null, i();
        }
      }
    }
    var Wa = null;
    function Ja(i, s) {
      i.stylesheets = null, i.unsuspend !== null && (i.count++, Wa = /* @__PURE__ */ new Map(), s.forEach(gA, i), Wa = null, Za.call(i));
    }
    function gA(i, s) {
      if (!(s.state.loading & 4)) {
        var a = Wa.get(i);
        if (a) var c = a.get(null);
        else {
          a = /* @__PURE__ */ new Map(), Wa.set(i, a);
          for (var d = i.querySelectorAll("link[data-precedence],style[data-precedence]"), m = 0; m < d.length; m++) {
            var b = d[m];
            (b.nodeName === "LINK" || b.getAttribute("media") !== "not all") && (a.set(b.dataset.precedence, b), c = b);
          }
          c && a.set(null, c);
        }
        d = s.instance, b = d.getAttribute("data-precedence"), m = a.get(b) || c, m === c && a.set(null, d), a.set(b, d), this.count++, c = Za.bind(this), d.addEventListener("load", c), d.addEventListener("error", c), m ? m.parentNode.insertBefore(d, m.nextSibling) : (i = i.nodeType === 9 ? i.head : i, i.insertBefore(d, i.firstChild)), s.state.loading |= 4;
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
    function pA(i, s, a, c, d, m, b, x, A) {
      this.tag = 1, this.containerInfo = i, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = kc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = kc(0), this.hiddenUpdates = kc(null), this.identifierPrefix = c, this.onUncaughtError = d, this.onCaughtError = m, this.onRecoverableError = b, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = A, this.incompleteTransitions = /* @__PURE__ */ new Map();
    }
    function jy(i, s, a, c, d, m, b, x, A, E, U, X) {
      return i = new pA(i, s, a, b, A, E, U, X, x), s = 1, m === true && (s |= 24), m = ei(3, null, null, s), i.current = m, m.stateNode = i, s = df(), s.refCount++, i.pooledCache = s, s.refCount++, m.memoizedState = {
        element: c,
        isDehydrated: a,
        cache: s
      }, yf(m), i;
    }
    function Yy(i) {
      return i ? (i = ns, i) : ns;
    }
    function Gy(i, s, a, c, d, m) {
      d = Yy(d), c.context === null ? c.context = d : c.pendingContext = d, c = zn(s), c.payload = {
        element: a
      }, m = m === void 0 ? null : m, m !== null && (c.callback = m), a = Nn(i, c, s), a !== null && (Qe(a, i, s), xr(a, i, s));
    }
    function Xy(i, s) {
      if (i = i.memoizedState, i !== null && i.dehydrated !== null) {
        var a = i.retryLane;
        i.retryLane = a !== 0 && a < s ? a : s;
      }
    }
    function Nh(i, s) {
      Xy(i, s), (i = i.alternate) && Xy(i, s);
    }
    function Ky(i) {
      if (i.tag === 13 || i.tag === 31) {
        var s = yl(i, 67108864);
        s !== null && Qe(s, i, 67108864), Nh(i, 67108864);
      }
    }
    function Qy(i) {
      if (i.tag === 13 || i.tag === 31) {
        var s = ri();
        s = Oc(s);
        var a = yl(i, s);
        a !== null && Qe(a, i, s), Nh(i, s);
      }
    }
    var Fa = true;
    function yA(i, s, a, c) {
      var d = R.T;
      R.T = null;
      var m = Z.p;
      try {
        Z.p = 2, Lh(i, s, a, c);
      } finally {
        Z.p = m, R.T = d;
      }
    }
    function bA(i, s, a, c) {
      var d = R.T;
      R.T = null;
      var m = Z.p;
      try {
        Z.p = 8, Lh(i, s, a, c);
      } finally {
        Z.p = m, R.T = d;
      }
    }
    function Lh(i, s, a, c) {
      if (Fa) {
        var d = Hh(c);
        if (d === null) wh(i, s, c, Ia, a), Wy(i, c);
        else if (SA(d, i, s, a, c)) c.stopPropagation();
        else if (Wy(i, c), s & 4 && -1 < vA.indexOf(i)) {
          for (; d !== null; ) {
            var m = Ql(d);
            if (m !== null) switch (m.tag) {
              case 3:
                if (m = m.stateNode, m.current.memoizedState.isDehydrated) {
                  var b = hl(m.pendingLanes);
                  if (b !== 0) {
                    var x = m;
                    for (x.pendingLanes |= 2, x.entangledLanes |= 2; b; ) {
                      var A = 1 << 31 - $e(b);
                      x.entanglements[1] |= A, b &= ~A;
                    }
                    Ui(m), (Nt & 6) === 0 && (Ra = Ie() + 500, Hr(0));
                  }
                }
                break;
              case 31:
              case 13:
                x = yl(m, 2), x !== null && Qe(x, m, 2), Na(), Nh(m, 2);
            }
            if (m = Hh(c), m === null && wh(i, s, c, Ia, a), m === d) break;
            d = m;
          }
          d !== null && c.stopPropagation();
        } else wh(i, s, c, null, a);
      }
    }
    function Hh(i) {
      return i = Uc(i), Uh(i);
    }
    var Ia = null;
    function Uh(i) {
      if (Ia = null, i = Kl(i), i !== null) {
        var s = o(i);
        if (s === null) i = null;
        else {
          var a = s.tag;
          if (a === 13) {
            if (i = u(s), i !== null) return i;
            i = null;
          } else if (a === 31) {
            if (i = f(s), i !== null) return i;
            i = null;
          } else if (a === 3) {
            if (s.stateNode.current.memoizedState.isDehydrated) return s.tag === 3 ? s.stateNode.containerInfo : null;
            i = null;
          } else s !== i && (i = null);
        }
      }
      return Ia = i, null;
    }
    function Zy(i) {
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
          switch (l2()) {
            case eg:
              return 2;
            case ig:
              return 8;
            case qo:
            case s2:
              return 32;
            case ng:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var Vh = false, Qn = null, Zn = null, Wn = null, Xr = /* @__PURE__ */ new Map(), Kr = /* @__PURE__ */ new Map(), Jn = [], vA = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Wy(i, s) {
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
    function Qr(i, s, a, c, d, m) {
      return i === null || i.nativeEvent !== m ? (i = {
        blockedOn: s,
        domEventName: a,
        eventSystemFlags: c,
        nativeEvent: m,
        targetContainers: [
          d
        ]
      }, s !== null && (s = Ql(s), s !== null && Ky(s)), i) : (i.eventSystemFlags |= c, s = i.targetContainers, d !== null && s.indexOf(d) === -1 && s.push(d), i);
    }
    function SA(i, s, a, c, d) {
      switch (s) {
        case "focusin":
          return Qn = Qr(Qn, i, s, a, c, d), true;
        case "dragenter":
          return Zn = Qr(Zn, i, s, a, c, d), true;
        case "mouseover":
          return Wn = Qr(Wn, i, s, a, c, d), true;
        case "pointerover":
          var m = d.pointerId;
          return Xr.set(m, Qr(Xr.get(m) || null, i, s, a, c, d)), true;
        case "gotpointercapture":
          return m = d.pointerId, Kr.set(m, Qr(Kr.get(m) || null, i, s, a, c, d)), true;
      }
      return false;
    }
    function Jy(i) {
      var s = Kl(i.target);
      if (s !== null) {
        var a = o(s);
        if (a !== null) {
          if (s = a.tag, s === 13) {
            if (s = u(a), s !== null) {
              i.blockedOn = s, ug(i.priority, function() {
                Qy(a);
              });
              return;
            }
          } else if (s === 31) {
            if (s = f(a), s !== null) {
              i.blockedOn = s, ug(i.priority, function() {
                Qy(a);
              });
              return;
            }
          } else if (s === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            i.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      i.blockedOn = null;
    }
    function Pa(i) {
      if (i.blockedOn !== null) return false;
      for (var s = i.targetContainers; 0 < s.length; ) {
        var a = Hh(i.nativeEvent);
        if (a === null) {
          a = i.nativeEvent;
          var c = new a.constructor(a.type, a);
          Hc = c, a.target.dispatchEvent(c), Hc = null;
        } else return s = Ql(a), s !== null && Ky(s), i.blockedOn = a, false;
        s.shift();
      }
      return true;
    }
    function Fy(i, s, a) {
      Pa(i) && a.delete(s);
    }
    function xA() {
      Vh = false, Qn !== null && Pa(Qn) && (Qn = null), Zn !== null && Pa(Zn) && (Zn = null), Wn !== null && Pa(Wn) && (Wn = null), Xr.forEach(Fy), Kr.forEach(Fy);
    }
    function $a(i, s) {
      i.blockedOn === s && (i.blockedOn = null, Vh || (Vh = true, l.unstable_scheduleCallback(l.unstable_NormalPriority, xA)));
    }
    var tu = null;
    function Iy(i) {
      tu !== i && (tu = i, l.unstable_scheduleCallback(l.unstable_NormalPriority, function() {
        tu === i && (tu = null);
        for (var s = 0; s < i.length; s += 3) {
          var a = i[s], c = i[s + 1], d = i[s + 2];
          if (typeof c != "function") {
            if (Uh(c || a) === null) continue;
            break;
          }
          var m = Ql(a);
          m !== null && (i.splice(s, 3), s -= 3, Hf(m, {
            pending: true,
            data: d,
            method: a.method,
            action: c
          }, c, d));
        }
      }));
    }
    function Ts(i) {
      function s(A) {
        return $a(A, i);
      }
      Qn !== null && $a(Qn, i), Zn !== null && $a(Zn, i), Wn !== null && $a(Wn, i), Xr.forEach(s), Kr.forEach(s);
      for (var a = 0; a < Jn.length; a++) {
        var c = Jn[a];
        c.blockedOn === i && (c.blockedOn = null);
      }
      for (; 0 < Jn.length && (a = Jn[0], a.blockedOn === null); ) Jy(a), a.blockedOn === null && Jn.shift();
      if (a = (i.ownerDocument || i).$$reactFormReplay, a != null) for (c = 0; c < a.length; c += 3) {
        var d = a[c], m = a[c + 1], b = d[qe] || null;
        if (typeof m == "function") b || Iy(a);
        else if (b) {
          var x = null;
          if (m && m.hasAttribute("formAction")) {
            if (d = m, b = m[qe] || null) x = b.formAction;
            else if (Uh(d) !== null) continue;
          } else x = b.action;
          typeof x == "function" ? a[c + 1] = x : (a.splice(c, 3), c -= 3), Iy(a);
        }
      }
    }
    function Py() {
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
        d !== null && (d(), d = null), c || setTimeout(a, 20);
      }
      function a() {
        if (!c && !navigation.transition) {
          var m = navigation.currentEntry;
          m && m.url != null && navigation.navigate(m.url, {
            state: m.getState(),
            info: "react-transition",
            history: "replace"
          });
        }
      }
      if (typeof navigation == "object") {
        var c = false, d = null;
        return navigation.addEventListener("navigate", i), navigation.addEventListener("navigatesuccess", s), navigation.addEventListener("navigateerror", s), setTimeout(a, 100), function() {
          c = true, navigation.removeEventListener("navigate", i), navigation.removeEventListener("navigatesuccess", s), navigation.removeEventListener("navigateerror", s), d !== null && (d(), d = null);
        };
      }
    }
    function qh(i) {
      this._internalRoot = i;
    }
    eu.prototype.render = qh.prototype.render = function(i) {
      var s = this._internalRoot;
      if (s === null) throw Error(n(409));
      var a = s.current, c = ri();
      Gy(a, c, i, s, null, null);
    }, eu.prototype.unmount = qh.prototype.unmount = function() {
      var i = this._internalRoot;
      if (i !== null) {
        this._internalRoot = null;
        var s = i.containerInfo;
        Gy(i.current, 2, null, i, null, null), Na(), s[Xl] = null;
      }
    };
    function eu(i) {
      this._internalRoot = i;
    }
    eu.prototype.unstable_scheduleHydration = function(i) {
      if (i) {
        var s = ag();
        i = {
          blockedOn: null,
          target: i,
          priority: s
        };
        for (var a = 0; a < Jn.length && s !== 0 && s < Jn[a].priority; a++) ;
        Jn.splice(a, 0, i), a === 0 && Jy(i);
      }
    };
    var $y = t.version;
    if ($y !== "19.2.1") throw Error(n(527, $y, "19.2.1"));
    Z.findDOMNode = function(i) {
      var s = i._reactInternals;
      if (s === void 0) throw typeof i.render == "function" ? Error(n(188)) : (i = Object.keys(i).join(","), Error(n(268, i)));
      return i = g(s), i = i !== null ? p(i) : null, i = i === null ? null : i.stateNode, i;
    };
    var wA = {
      bundleType: 0,
      version: "19.2.1",
      rendererPackageName: "react-dom",
      currentDispatcherRef: R,
      reconcilerVersion: "19.2.1"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var iu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!iu.isDisabled && iu.supportsFiber) try {
        er = iu.inject(wA), Pe = iu;
      } catch {
      }
    }
    return Wr.createRoot = function(i, s) {
      if (!r(i)) throw Error(n(299));
      var a = false, c = "", d = r0, m = o0, b = a0;
      return s != null && (s.unstable_strictMode === true && (a = true), s.identifierPrefix !== void 0 && (c = s.identifierPrefix), s.onUncaughtError !== void 0 && (d = s.onUncaughtError), s.onCaughtError !== void 0 && (m = s.onCaughtError), s.onRecoverableError !== void 0 && (b = s.onRecoverableError)), s = jy(i, 1, false, null, null, a, c, null, d, m, b, Py), i[Xl] = s.current, xh(i), new qh(s);
    }, Wr.hydrateRoot = function(i, s, a) {
      if (!r(i)) throw Error(n(299));
      var c = false, d = "", m = r0, b = o0, x = a0, A = null;
      return a != null && (a.unstable_strictMode === true && (c = true), a.identifierPrefix !== void 0 && (d = a.identifierPrefix), a.onUncaughtError !== void 0 && (m = a.onUncaughtError), a.onCaughtError !== void 0 && (b = a.onCaughtError), a.onRecoverableError !== void 0 && (x = a.onRecoverableError), a.formState !== void 0 && (A = a.formState)), s = jy(i, 1, true, s, a ?? null, c, d, A, m, b, x, Py), s.context = Yy(null), a = s.current, c = ri(), c = Oc(c), d = zn(c), d.callback = null, Nn(a, d, c), a = c, s.current.lanes = a, nr(s, a), Ui(s), i[Xl] = s.current, xh(i), new eu(s);
    }, Wr.version = "19.2.1", Wr;
  }
  var ub;
  function BA() {
    if (ub) return Gh.exports;
    ub = 1;
    function l() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (t) {
        console.error(t);
      }
    }
    return l(), Gh.exports = EA(), Gh.exports;
  }
  var RA = BA();
  const zA = "/bithoven/ide/assets/bithoven_bg-rkjQ2slm.wasm", NA = async (l = {}, t) => {
    let e;
    if (t.startsWith("data:")) {
      const n = t.replace(/^data:.*?base64,/, "");
      let r;
      if (typeof Buffer == "function" && typeof Buffer.from == "function") r = Buffer.from(n, "base64");
      else if (typeof atob == "function") {
        const o = atob(n);
        r = new Uint8Array(o.length);
        for (let u = 0; u < o.length; u++) r[u] = o.charCodeAt(u);
      } else throw new Error("Cannot decode base64-encoded data URL");
      e = await WebAssembly.instantiate(r, l);
    } else {
      const n = await fetch(t), r = n.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && r.startsWith("application/wasm")) e = await WebAssembly.instantiateStreaming(n, l);
      else {
        const o = await n.arrayBuffer();
        e = await WebAssembly.instantiate(o, l);
      }
    }
    return e.instance.exports;
  };
  let Tt;
  function LA(l) {
    Tt = l;
  }
  let nu = null;
  function zs() {
    return (nu === null || nu.byteLength === 0) && (nu = new Uint8Array(Tt.memory.buffer)), nu;
  }
  let ku = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  ku.decode();
  const HA = 2146435072;
  let Zh = 0;
  function UA(l, t) {
    return Zh += t, Zh >= HA && (ku = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), ku.decode(), Zh = t), ku.decode(zs().subarray(l, l + t));
  }
  function qs(l, t) {
    return l = l >>> 0, UA(l, t);
  }
  let Ji = 0;
  const so = new TextEncoder();
  "encodeInto" in so || (so.encodeInto = function(l, t) {
    const e = so.encode(l);
    return t.set(e), {
      read: l.length,
      written: e.length
    };
  });
  function js(l, t, e) {
    if (e === void 0) {
      const f = so.encode(l), h = t(f.length, 1) >>> 0;
      return zs().subarray(h, h + f.length).set(f), Ji = f.length, h;
    }
    let n = l.length, r = t(n, 1) >>> 0;
    const o = zs();
    let u = 0;
    for (; u < n; u++) {
      const f = l.charCodeAt(u);
      if (f > 127) break;
      o[r + u] = f;
    }
    if (u !== n) {
      u !== 0 && (l = l.slice(u)), r = e(r, n, n = u + l.length * 3, 1) >>> 0;
      const f = zs().subarray(r + u, r + n), h = so.encodeInto(l, f);
      u += h.written, r = e(r, n, u, 1) >>> 0;
    }
    return Ji = u, r;
  }
  let ks = null;
  function ll() {
    return (ks === null || ks.buffer.detached === true || ks.buffer.detached === void 0 && ks.buffer !== Tt.memory.buffer) && (ks = new DataView(Tt.memory.buffer)), ks;
  }
  function Vu(l) {
    return l == null;
  }
  function Ad(l) {
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
      let o = "[";
      r > 0 && (o += Ad(l[0]));
      for (let u = 1; u < r; u++) o += ", " + Ad(l[u]);
      return o += "]", o;
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
  function VA(l) {
    const t = Tt.__externref_table_alloc();
    return Tt.__wbindgen_externrefs.set(t, l), t;
  }
  function ac(l, t) {
    try {
      return l.apply(this, t);
    } catch (e) {
      const n = VA(e);
      Tt.__wbindgen_exn_store(n);
    }
  }
  function nv(l, t) {
    return l = l >>> 0, zs().subarray(l / 1, l / 1 + t);
  }
  function qA(l, t) {
    const e = t(l.length * 1, 1) >>> 0;
    return zs().set(l, e / 1), Ji = l.length, e;
  }
  function jA(l) {
    const t = Tt.__wbindgen_externrefs.get(l);
    return Tt.__externref_table_dealloc(l), t;
  }
  function YA(l) {
    const t = js(l, Tt.__wbindgen_malloc, Tt.__wbindgen_realloc), e = Ji, n = Tt.compile_program(t, e);
    if (n[2]) throw jA(n[1]);
    return Ys.__wrap(n[0]);
  }
  const Wh = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((l) => Tt.__wbg_bithovenoutput_free(l >>> 0, 1));
  class Ys {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ys.prototype);
      return e.__wbg_ptr = t, Wh.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Wh.unregister(this), t;
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
      const r = js(t, Tt.__wbindgen_malloc, Tt.__wbindgen_realloc), o = Ji, u = js(e, Tt.__wbindgen_malloc, Tt.__wbindgen_realloc), f = Ji, h = qA(n, Tt.__wbindgen_malloc), g = Ji, p = Tt.bithovenoutput_new(r, o, u, f, h, g);
      return this.__wbg_ptr = p >>> 0, Wh.register(this, this.__wbg_ptr, this), this;
    }
    get bytes() {
      const t = Tt.bithovenoutput_bytes(this.__wbg_ptr);
      var e = nv(t[0], t[1]).slice();
      return Tt.__wbindgen_free(t[0], t[1] * 1, 1), e;
    }
    to_object() {
      return Tt.bithovenoutput_to_object(this.__wbg_ptr);
    }
  }
  Symbol.dispose && (Ys.prototype[Symbol.dispose] = Ys.prototype.free);
  function GA(l, t) {
    return Error(qs(l, t));
  }
  function XA(l) {
    return Number(l);
  }
  function KA(l, t) {
    const e = String(t), n = js(e, Tt.__wbindgen_malloc, Tt.__wbindgen_realloc), r = Ji;
    ll().setInt32(l + 4, r, true), ll().setInt32(l + 0, n, true);
  }
  function QA(l) {
    const t = l, e = typeof t == "boolean" ? t : void 0;
    return Vu(e) ? 16777215 : e ? 1 : 0;
  }
  function ZA(l, t) {
    const e = Ad(t), n = js(e, Tt.__wbindgen_malloc, Tt.__wbindgen_realloc), r = Ji;
    ll().setInt32(l + 4, r, true), ll().setInt32(l + 0, n, true);
  }
  function WA(l, t) {
    return l in t;
  }
  function JA(l) {
    return typeof l == "function";
  }
  function FA(l) {
    const t = l;
    return typeof t == "object" && t !== null;
  }
  function IA(l) {
    return l === void 0;
  }
  function PA(l, t) {
    return l == t;
  }
  function $A(l, t) {
    const e = t, n = typeof e == "number" ? e : void 0;
    ll().setFloat64(l + 8, Vu(n) ? 0 : n, true), ll().setInt32(l + 0, !Vu(n), true);
  }
  function tC(l, t) {
    const e = t, n = typeof e == "string" ? e : void 0;
    var r = Vu(n) ? 0 : js(n, Tt.__wbindgen_malloc, Tt.__wbindgen_realloc), o = Ji;
    ll().setInt32(l + 4, o, true), ll().setInt32(l + 0, r, true);
  }
  function eC(l, t) {
    throw new Error(qs(l, t));
  }
  function iC() {
    return ac(function(l, t) {
      return l.call(t);
    }, arguments);
  }
  function nC(l) {
    return l.done;
  }
  function lC(l, t) {
    return l[t >>> 0];
  }
  function sC() {
    return ac(function(l, t) {
      return Reflect.get(l, t);
    }, arguments);
  }
  function rC(l, t) {
    return l[t];
  }
  function oC(l) {
    let t;
    try {
      t = l instanceof ArrayBuffer;
    } catch {
      t = false;
    }
    return t;
  }
  function aC(l) {
    let t;
    try {
      t = l instanceof Uint8Array;
    } catch {
      t = false;
    }
    return t;
  }
  function uC(l) {
    return Array.isArray(l);
  }
  function cC(l) {
    return Number.isSafeInteger(l);
  }
  function fC() {
    return Symbol.iterator;
  }
  function hC(l) {
    return l.length;
  }
  function dC(l) {
    return l.length;
  }
  function mC() {
    return new Object();
  }
  function gC(l) {
    return new Uint8Array(l);
  }
  function pC(l, t) {
    return new Error(qs(l, t));
  }
  function yC() {
    return new Array();
  }
  function bC() {
    return ac(function(l) {
      return l.next();
    }, arguments);
  }
  function vC(l) {
    return l.next;
  }
  function SC(l, t, e) {
    Uint8Array.prototype.set.call(nv(l, t), e);
  }
  function xC(l, t, e) {
    l[t] = e;
  }
  function wC(l, t, e) {
    l[t >>> 0] = e;
  }
  function AC() {
    return ac(function(l, t, e) {
      return Reflect.set(l, t, e);
    }, arguments);
  }
  function CC(l) {
    return l.value;
  }
  function MC(l, t) {
    return qs(l, t);
  }
  function _C(l) {
    return BigInt.asUintN(64, l);
  }
  function TC(l) {
    return l;
  }
  function kC() {
    const l = Tt.__wbindgen_externrefs, t = l.grow(4);
    l.set(0, void 0), l.set(t + 0, void 0), l.set(t + 1, null), l.set(t + 2, true), l.set(t + 3, false);
  }
  URL = globalThis.URL;
  const le = await NA({
    "./bithoven_bg.js": {
      __wbg_get_with_ref_key_1dc361bd10053bfe: rC,
      __wbg_set_3f1d0b984ed272ed: xC,
      __wbg_String_8f0eb39a4a4c2f66: KA,
      __wbg_new_e17d9f43105b08be: yC,
      __wbg_new_1acc0b6eea89d040: mC,
      __wbg_new_5a79be3ab53b8aa5: gC,
      __wbg_length_69bca3cb64fc8748: hC,
      __wbg_prototypesetcall_2a6620b6922694b2: SC,
      __wbg_done_2042aa2670fb1db1: nC,
      __wbg_value_692627309814bb8c: CC,
      __wbg_instanceof_Uint8Array_20c8e73002f7af98: aC,
      __wbg_instanceof_ArrayBuffer_70beb1189ca63b38: oC,
      __wbg_get_7bed016f185add81: lC,
      __wbg_set_c213c871859d6500: wC,
      __wbg_length_cdd215e10d9dd507: dC,
      __wbg_isArray_96e0af9891d0945d: uC,
      __wbg_new_a7442b4b19c1a356: pC,
      __wbg_isSafeInteger_d216eda7911dde36: cC,
      __wbg_iterator_e5822695327a3c39: fC,
      __wbg_call_e762c39fa8ea36bf: iC,
      __wbg_next_2c826fe5dfec6b6a: vC,
      __wbg_next_020810e0ae8ebcb0: bC,
      __wbg_get_efcb449f58ec27c2: sC,
      __wbg_set_c2abbebe8b9ebee1: AC,
      __wbg___wbindgen_number_get_a20bf9b85341449d: $A,
      __wbg___wbindgen_in_bb933bd9e1b3bc0f: WA,
      __wbg___wbindgen_throw_b855445ff6a94295: eC,
      __wbg_Number_bb48ca12f395cd08: XA,
      __wbg_Error_e83987f665cf5504: GA,
      __wbg___wbindgen_is_object_c818261d21f283a4: FA,
      __wbg___wbindgen_string_get_e4f06c90489ad01b: tC,
      __wbg___wbindgen_boolean_get_6d5a1ee65bab5f68: QA,
      __wbg___wbindgen_is_function_ee8a6c5833c90377: JA,
      __wbg___wbindgen_is_undefined_2d472862bd29a478: IA,
      __wbg___wbindgen_jsval_loose_eq_b664b38a2f582147: PA,
      __wbg___wbindgen_debug_string_df47ffb5e35e6763: ZA,
      __wbindgen_init_externref_table: kC,
      __wbindgen_cast_2241b6af4c4b2941: MC,
      __wbindgen_cast_d6cd19b81560fd6e: TC,
      __wbindgen_cast_4625c577ab2ec9ee: _C
    }
  }, zA), OC = le.memory, DC = le.__wbg_bithovenoutput_free, EC = le.bithovenoutput_asm, BC = le.bithovenoutput_bytes, RC = le.bithovenoutput_from_object, zC = le.bithovenoutput_hex, NC = le.bithovenoutput_new, LC = le.bithovenoutput_to_object, HC = le.compile_program, UC = le.rustsecp256k1_v0_10_0_context_create, VC = le.rustsecp256k1_v0_10_0_context_destroy, qC = le.rustsecp256k1_v0_10_0_default_error_callback_fn, jC = le.rustsecp256k1_v0_10_0_default_illegal_callback_fn, YC = le.__wbindgen_malloc, GC = le.__wbindgen_realloc, XC = le.__wbindgen_exn_store, KC = le.__externref_table_alloc, QC = le.__wbindgen_externrefs, ZC = le.__wbindgen_free, WC = le.__externref_table_dealloc, lv = le.__wbindgen_start, JC = Object.freeze(Object.defineProperty({
    __proto__: null,
    __externref_table_alloc: KC,
    __externref_table_dealloc: WC,
    __wbg_bithovenoutput_free: DC,
    __wbindgen_exn_store: XC,
    __wbindgen_externrefs: QC,
    __wbindgen_free: ZC,
    __wbindgen_malloc: YC,
    __wbindgen_realloc: GC,
    __wbindgen_start: lv,
    bithovenoutput_asm: EC,
    bithovenoutput_bytes: BC,
    bithovenoutput_from_object: RC,
    bithovenoutput_hex: zC,
    bithovenoutput_new: NC,
    bithovenoutput_to_object: LC,
    compile_program: HC,
    memory: OC,
    rustsecp256k1_v0_10_0_context_create: UC,
    rustsecp256k1_v0_10_0_context_destroy: VC,
    rustsecp256k1_v0_10_0_default_error_callback_fn: qC,
    rustsecp256k1_v0_10_0_default_illegal_callback_fn: jC
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  LA(JC);
  lv();
  function Cd() {
    return Cd = Object.assign ? Object.assign.bind() : function(l) {
      for (var t = 1; t < arguments.length; t++) {
        var e = arguments[t];
        for (var n in e) ({}).hasOwnProperty.call(e, n) && (l[n] = e[n]);
      }
      return l;
    }, Cd.apply(null, arguments);
  }
  function FC(l, t) {
    if (l == null) return {};
    var e = {};
    for (var n in l) if ({}.hasOwnProperty.call(l, n)) {
      if (t.indexOf(n) !== -1) continue;
      e[n] = l[n];
    }
    return e;
  }
  let Md = [], sv = [];
  (() => {
    let l = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((t) => t ? parseInt(t, 36) : 1);
    for (let t = 0, e = 0; t < l.length; t++) (t % 2 ? sv : Md).push(e = e + l[t]);
  })();
  function IC(l) {
    if (l < 768) return false;
    for (let t = 0, e = Md.length; ; ) {
      let n = t + e >> 1;
      if (l < Md[n]) e = n;
      else if (l >= sv[n]) t = n + 1;
      else return true;
      if (t == e) return false;
    }
  }
  function cb(l) {
    return l >= 127462 && l <= 127487;
  }
  const fb = 8205;
  function PC(l, t, e = true, n = true) {
    return (e ? rv : $C)(l, t, n);
  }
  function rv(l, t, e) {
    if (t == l.length) return t;
    t && ov(l.charCodeAt(t)) && av(l.charCodeAt(t - 1)) && t--;
    let n = Jh(l, t);
    for (t += hb(n); t < l.length; ) {
      let r = Jh(l, t);
      if (n == fb || r == fb || e && IC(r)) t += hb(r), n = r;
      else if (cb(r)) {
        let o = 0, u = t - 2;
        for (; u >= 0 && cb(Jh(l, u)); ) o++, u -= 2;
        if (o % 2 == 0) break;
        t += 2;
      } else break;
    }
    return t;
  }
  function $C(l, t, e) {
    for (; t > 0; ) {
      let n = rv(l, t - 2, e);
      if (n < t) return n;
      t--;
    }
    return 0;
  }
  function Jh(l, t) {
    let e = l.charCodeAt(t);
    if (!av(e) || t + 1 == l.length) return e;
    let n = l.charCodeAt(t + 1);
    return ov(n) ? (e - 55296 << 10) + (n - 56320) + 65536 : e;
  }
  function ov(l) {
    return l >= 56320 && l < 57344;
  }
  function av(l) {
    return l >= 55296 && l < 56320;
  }
  function hb(l) {
    return l < 65536 ? 1 : 2;
  }
  class Bt {
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
      let e = this.scanIdentical(t, 1), n = this.length - this.scanIdentical(t, -1), r = new ro(this), o = new ro(t);
      for (let u = e, f = e; ; ) {
        if (r.next(u), o.next(u), u = 0, r.lineBreak != o.lineBreak || r.done != o.done || r.value != o.value) return false;
        if (f += r.value.length, r.done || f >= n) return true;
      }
    }
    iter(t = 1) {
      return new ro(this, t);
    }
    iterRange(t, e = this.length) {
      return new uv(this, t, e);
    }
    iterLines(t, e) {
      let n;
      if (t == null) n = this.iter();
      else {
        e == null && (e = this.lines + 1);
        let r = this.line(t).from;
        n = this.iterRange(r, Math.max(r, e == this.lines + 1 ? this.length : e <= 1 ? 0 : this.line(e - 1).to));
      }
      return new cv(n);
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
      return t.length == 1 && !t[0] ? Bt.empty : t.length <= 32 ? new ne(t) : Gi.from(ne.split(t, []));
    }
  }
  class ne extends Bt {
    constructor(t, e = tM(t)) {
      super(), this.text = t, this.length = e;
    }
    get lines() {
      return this.text.length;
    }
    get children() {
      return null;
    }
    lineInner(t, e, n, r) {
      for (let o = 0; ; o++) {
        let u = this.text[o], f = r + u.length;
        if ((e ? n : f) >= t) return new eM(r, f, n, u);
        r = f + 1, n++;
      }
    }
    decompose(t, e, n, r) {
      let o = t <= 0 && e >= this.length ? this : new ne(db(this.text, t, e), Math.min(e, this.length) - Math.max(0, t));
      if (r & 1) {
        let u = n.pop(), f = Ou(o.text, u.text.slice(), 0, o.length);
        if (f.length <= 32) n.push(new ne(f, u.length + o.length));
        else {
          let h = f.length >> 1;
          n.push(new ne(f.slice(0, h)), new ne(f.slice(h)));
        }
      } else n.push(o);
    }
    replace(t, e, n) {
      if (!(n instanceof ne)) return super.replace(t, e, n);
      [t, e] = Gs(this, t, e);
      let r = Ou(this.text, Ou(n.text, db(this.text, 0, t)), e), o = this.length + n.length - (e - t);
      return r.length <= 32 ? new ne(r, o) : Gi.from(ne.split(r, []), o);
    }
    sliceString(t, e = this.length, n = `
`) {
      [t, e] = Gs(this, t, e);
      let r = "";
      for (let o = 0, u = 0; o <= e && u < this.text.length; u++) {
        let f = this.text[u], h = o + f.length;
        o > t && u && (r += n), t < h && e > o && (r += f.slice(Math.max(0, t - o), e - o)), o = h + 1;
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
      for (let o of t) n.push(o), r += o.length + 1, n.length == 32 && (e.push(new ne(n, r)), n = [], r = -1);
      return r > -1 && e.push(new ne(n, r)), e;
    }
  }
  class Gi extends Bt {
    constructor(t, e) {
      super(), this.children = t, this.length = e, this.lines = 0;
      for (let n of t) this.lines += n.lines;
    }
    lineInner(t, e, n, r) {
      for (let o = 0; ; o++) {
        let u = this.children[o], f = r + u.length, h = n + u.lines - 1;
        if ((e ? h : f) >= t) return u.lineInner(t, e, n, r);
        r = f + 1, n = h + 1;
      }
    }
    decompose(t, e, n, r) {
      for (let o = 0, u = 0; u <= e && o < this.children.length; o++) {
        let f = this.children[o], h = u + f.length;
        if (t <= h && e >= u) {
          let g = r & ((u <= t ? 1 : 0) | (h >= e ? 2 : 0));
          u >= t && h <= e && !g ? n.push(f) : f.decompose(t - u, e - u, n, g);
        }
        u = h + 1;
      }
    }
    replace(t, e, n) {
      if ([t, e] = Gs(this, t, e), n.lines < this.lines) for (let r = 0, o = 0; r < this.children.length; r++) {
        let u = this.children[r], f = o + u.length;
        if (t >= o && e <= f) {
          let h = u.replace(t - o, e - o, n), g = this.lines - u.lines + h.lines;
          if (h.lines < g >> 4 && h.lines > g >> 6) {
            let p = this.children.slice();
            return p[r] = h, new Gi(p, this.length - (e - t) + n.length);
          }
          return super.replace(o, f, h);
        }
        o = f + 1;
      }
      return super.replace(t, e, n);
    }
    sliceString(t, e = this.length, n = `
`) {
      [t, e] = Gs(this, t, e);
      let r = "";
      for (let o = 0, u = 0; o < this.children.length && u <= e; o++) {
        let f = this.children[o], h = u + f.length;
        u > t && o && (r += n), t < h && e > u && (r += f.sliceString(t - u, e - u, n)), u = h + 1;
      }
      return r;
    }
    flatten(t) {
      for (let e of this.children) e.flatten(t);
    }
    scanIdentical(t, e) {
      if (!(t instanceof Gi)) return 0;
      let n = 0, [r, o, u, f] = e > 0 ? [
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
      for (; ; r += e, o += e) {
        if (r == u || o == f) return n;
        let h = this.children[r], g = t.children[o];
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
        return new ne(S, e);
      }
      let r = Math.max(32, n >> 5), o = r << 1, u = r >> 1, f = [], h = 0, g = -1, p = [];
      function y(S) {
        let w;
        if (S.lines > o && S instanceof Gi) for (let C of S.children) y(C);
        else S.lines > u && (h > u || !h) ? (v(), f.push(S)) : S instanceof ne && h && (w = p[p.length - 1]) instanceof ne && S.lines + w.lines <= 32 ? (h += S.lines, g += S.length + 1, p[p.length - 1] = new ne(w.text.concat(S.text), w.length + 1 + S.length)) : (h + S.lines > r && v(), h += S.lines, g += S.length + 1, p.push(S));
      }
      function v() {
        h != 0 && (f.push(p.length == 1 ? p[0] : Gi.from(p, g)), g = -1, h = p.length = 0);
      }
      for (let S of t) y(S);
      return v(), f.length == 1 ? f[0] : new Gi(f, e);
    }
  }
  Bt.empty = new ne([
    ""
  ], 0);
  function tM(l) {
    let t = -1;
    for (let e of l) t += e.length + 1;
    return t;
  }
  function Ou(l, t, e = 0, n = 1e9) {
    for (let r = 0, o = 0, u = true; o < l.length && r <= n; o++) {
      let f = l[o], h = r + f.length;
      h >= e && (h > n && (f = f.slice(0, n - r)), r < e && (f = f.slice(e - r)), u ? (t[t.length - 1] += f, u = false) : t.push(f)), r = h + 1;
    }
    return t;
  }
  function db(l, t, e) {
    return Ou(l, [
      ""
    ], t, e);
  }
  class ro {
    constructor(t, e = 1) {
      this.dir = e, this.done = false, this.lineBreak = false, this.value = "", this.nodes = [
        t
      ], this.offsets = [
        e > 0 ? 1 : (t instanceof ne ? t.text.length : t.children.length) << 1
      ];
    }
    nextInner(t, e) {
      for (this.done = this.lineBreak = false; ; ) {
        let n = this.nodes.length - 1, r = this.nodes[n], o = this.offsets[n], u = o >> 1, f = r instanceof ne ? r.text.length : r.children.length;
        if (u == (e > 0 ? f : 0)) {
          if (n == 0) return this.done = true, this.value = "", this;
          e > 0 && this.offsets[n - 1]++, this.nodes.pop(), this.offsets.pop();
        } else if ((o & 1) == (e > 0 ? 0 : 1)) {
          if (this.offsets[n] += e, t == 0) return this.lineBreak = true, this.value = `
`, this;
          t--;
        } else if (r instanceof ne) {
          let h = r.text[u + (e < 0 ? -1 : 0)];
          if (this.offsets[n] += e, h.length > Math.max(0, t)) return this.value = t == 0 ? h : e > 0 ? h.slice(t) : h.slice(0, h.length - t), this;
          t -= h.length;
        } else {
          let h = r.children[u + (e < 0 ? -1 : 0)];
          t > h.length ? (t -= h.length, this.offsets[n] += e) : (e < 0 && this.offsets[n]--, this.nodes.push(h), this.offsets.push(e > 0 ? 1 : (h instanceof ne ? h.text.length : h.children.length) << 1));
        }
      }
    }
    next(t = 0) {
      return t < 0 && (this.nextInner(-t, -this.dir), t = this.value.length), this.nextInner(t, this.dir);
    }
  }
  class uv {
    constructor(t, e, n) {
      this.value = "", this.done = false, this.cursor = new ro(t, e > n ? -1 : 1), this.pos = e > n ? t.length : 0, this.from = Math.min(e, n), this.to = Math.max(e, n);
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
  class cv {
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
  typeof Symbol < "u" && (Bt.prototype[Symbol.iterator] = function() {
    return this.iter();
  }, ro.prototype[Symbol.iterator] = uv.prototype[Symbol.iterator] = cv.prototype[Symbol.iterator] = function() {
    return this;
  });
  class eM {
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
    return PC(l, t, e, n);
  }
  function iM(l) {
    return l >= 56320 && l < 57344;
  }
  function nM(l) {
    return l >= 55296 && l < 56320;
  }
  function Ze(l, t) {
    let e = l.charCodeAt(t);
    if (!nM(e) || t + 1 == l.length) return e;
    let n = l.charCodeAt(t + 1);
    return iM(n) ? (e - 55296 << 10) + (n - 56320) + 65536 : e;
  }
  function wm(l) {
    return l <= 65535 ? String.fromCharCode(l) : (l -= 65536, String.fromCharCode((l >> 10) + 55296, (l & 1023) + 56320));
  }
  function Xi(l) {
    return l < 65536 ? 1 : 2;
  }
  const _d = /\r\n?|\n/;
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
        let o = this.sections[e++], u = this.sections[e++];
        u < 0 ? (t(n, r, o), r += o) : r += u, n += o;
      }
    }
    iterChangedRanges(t, e = false) {
      Td(this, t, e);
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
      return this.empty ? t : t.empty ? this : fv(this, t);
    }
    mapDesc(t, e = false) {
      return t.empty ? this : kd(this, t, e);
    }
    mapPos(t, e = -1, n = He.Simple) {
      let r = 0, o = 0;
      for (let u = 0; u < this.sections.length; ) {
        let f = this.sections[u++], h = this.sections[u++], g = r + f;
        if (h < 0) {
          if (g > t) return o + (t - r);
          o += f;
        } else {
          if (n != He.Simple && g >= t && (n == He.TrackDel && r < t && g > t || n == He.TrackBefore && r < t || n == He.TrackAfter && g > t)) return null;
          if (g > t || g == t && e < 0 && !f) return t == r || e < 0 ? o : o + h;
          o += h;
        }
        r = g;
      }
      if (t > r) throw new RangeError(`Position ${t} is out of range for changeset of length ${r}`);
      return o;
    }
    touchesRange(t, e = t) {
      for (let n = 0, r = 0; n < this.sections.length && r <= e; ) {
        let o = this.sections[n++], u = this.sections[n++], f = r + o;
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
      return Td(this, (e, n, r, o, u) => t = t.replace(r, r + (n - e), u), false), t;
    }
    mapDesc(t, e = false) {
      return kd(this, t, e, true);
    }
    invert(t) {
      let e = this.sections.slice(), n = [];
      for (let r = 0, o = 0; r < e.length; r += 2) {
        let u = e[r], f = e[r + 1];
        if (f >= 0) {
          e[r] = f, e[r + 1] = u;
          let h = r >> 1;
          for (; n.length < h; ) n.push(Bt.empty);
          n.push(u ? t.slice(o, o + u) : Bt.empty);
        }
        o += u;
      }
      return new de(e, n);
    }
    compose(t) {
      return this.empty ? t : t.empty ? this : fv(this, t, true);
    }
    map(t, e = false) {
      return t.empty ? this : kd(this, t, e, true);
    }
    iterChanges(t, e = false) {
      Td(this, t, e);
    }
    get desc() {
      return Fi.create(this.sections);
    }
    filter(t) {
      let e = [], n = [], r = [], o = new mo(this);
      t: for (let u = 0, f = 0; ; ) {
        let h = u == t.length ? 1e9 : t[u++];
        for (; f < h || f == h && o.len == 0; ) {
          if (o.done) break t;
          let p = Math.min(o.len, h - f);
          Oe(r, p, -1);
          let y = o.ins == -1 ? -1 : o.off == 0 ? o.ins : 0;
          Oe(e, p, y), y > 0 && tl(n, e, o.text), o.forward(p), f += p;
        }
        let g = t[u++];
        for (; f < g; ) {
          if (o.done) break t;
          let p = Math.min(o.len, g - f);
          Oe(e, p, -1), Oe(r, p, o.ins == -1 ? -1 : o.off == 0 ? o.ins : 0), o.forward(p), f += p;
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
      let r = [], o = [], u = 0, f = null;
      function h(p = false) {
        if (!p && !r.length) return;
        u < e && Oe(r, e - u, -1);
        let y = new de(r, o);
        f = f ? f.compose(y.map(f)) : y, r = [], o = [], u = 0;
      }
      function g(p) {
        if (Array.isArray(p)) for (let y of p) g(y);
        else if (p instanceof de) {
          if (p.length != e) throw new RangeError(`Mismatched change set length (got ${p.length}, expected ${e})`);
          h(), f = f ? f.compose(p.map(f)) : p;
        } else {
          let { from: y, to: v = y, insert: S } = p;
          if (y > v || y < 0 || v > e) throw new RangeError(`Invalid change range ${y} to ${v} (in doc of length ${e})`);
          let w = S ? typeof S == "string" ? Bt.of(S.split(n || _d)) : S : Bt.empty, C = w.length;
          if (y == v && C == 0) return;
          y < u && h(), y > u && Oe(r, y - u, -1), Oe(r, v - y, C), tl(o, r, w), u = v;
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
        let o = t[r];
        if (typeof o == "number") e.push(o, -1);
        else {
          if (!Array.isArray(o) || typeof o[0] != "number" || o.some((u, f) => f && typeof u != "string")) throw new RangeError("Invalid JSON representation of ChangeSet");
          if (o.length == 1) e.push(o[0], 0);
          else {
            for (; n.length < r; ) n.push(Bt.empty);
            n[r] = Bt.of(o.slice(1)), e.push(o[0], n[r].length);
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
      for (; l.length < n; ) l.push(Bt.empty);
      l.push(e);
    }
  }
  function Td(l, t, e) {
    let n = l.inserted;
    for (let r = 0, o = 0, u = 0; u < l.sections.length; ) {
      let f = l.sections[u++], h = l.sections[u++];
      if (h < 0) r += f, o += f;
      else {
        let g = r, p = o, y = Bt.empty;
        for (; g += f, p += h, h && n && (y = y.append(n[u - 2 >> 1])), !(e || u == l.sections.length || l.sections[u + 1] < 0); ) f = l.sections[u++], h = l.sections[u++];
        t(r, g, o, p, y), r = g, o = p;
      }
    }
  }
  function kd(l, t, e, n = false) {
    let r = [], o = n ? [] : null, u = new mo(l), f = new mo(t);
    for (let h = -1; ; ) {
      if (u.done && f.len || f.done && u.len) throw new Error("Mismatched change set lengths");
      if (u.ins == -1 && f.ins == -1) {
        let g = Math.min(u.len, f.len);
        Oe(r, g, -1), u.forward(g), f.forward(g);
      } else if (f.ins >= 0 && (u.ins < 0 || h == u.i || u.off == 0 && (f.len < u.len || f.len == u.len && !e))) {
        let g = f.len;
        for (Oe(r, f.ins, -1); g; ) {
          let p = Math.min(u.len, g);
          u.ins >= 0 && h < u.i && u.len <= p && (Oe(r, 0, u.ins), o && tl(o, r, u.text), h = u.i), u.forward(p), g -= p;
        }
        f.next();
      } else if (u.ins >= 0) {
        let g = 0, p = u.len;
        for (; p; ) if (f.ins == -1) {
          let y = Math.min(p, f.len);
          g += y, p -= y, f.forward(y);
        } else if (f.ins == 0 && f.len < p) p -= f.len, f.next();
        else break;
        Oe(r, g, h < u.i ? u.ins : 0), o && h < u.i && tl(o, r, u.text), h = u.i, u.forward(u.len - p);
      } else {
        if (u.done && f.done) return o ? de.createSet(r, o) : Fi.create(r);
        throw new Error("Mismatched change set lengths");
      }
    }
  }
  function fv(l, t, e = false) {
    let n = [], r = e ? [] : null, o = new mo(l), u = new mo(t);
    for (let f = false; ; ) {
      if (o.done && u.done) return r ? de.createSet(n, r) : Fi.create(n);
      if (o.ins == 0) Oe(n, o.len, 0, f), o.next();
      else if (u.len == 0 && !u.done) Oe(n, 0, u.ins, f), r && tl(r, n, u.text), u.next();
      else {
        if (o.done || u.done) throw new Error("Mismatched change set lengths");
        {
          let h = Math.min(o.len2, u.len), g = n.length;
          if (o.ins == -1) {
            let p = u.ins == -1 ? -1 : u.off ? 0 : u.ins;
            Oe(n, h, p, f), r && p && tl(r, n, u.text);
          } else u.ins == -1 ? (Oe(n, o.off ? 0 : o.len, h, f), r && tl(r, n, o.textBit(h))) : (Oe(n, o.off ? 0 : o.len, u.off ? 0 : u.ins, f), r && !u.off && tl(r, n, u.text));
          f = (o.ins > h || u.ins >= 0 && u.len > h) && (f || n.length > g), o.forward2(h), u.forward(h);
        }
      }
    }
  }
  class mo {
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
      return e >= t.length ? Bt.empty : t[e];
    }
    textBit(t) {
      let { inserted: e } = this.set, n = this.i - 2 >> 1;
      return n >= e.length && !t ? Bt.empty : e[n].slice(this.off, t == null ? void 0 : this.off + t);
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
        let o = t[r];
        if (o.empty ? o.from <= n : o.from < n) return K.normalized(t.slice(), e);
        n = o.to;
      }
      return new K(t, e);
    }
    static cursor(t, e = 0, n, r) {
      return zl.create(t, t, (e == 0 ? 0 : e < 0 ? 8 : 16) | (n == null ? 7 : Math.min(6, n)) | (r ?? 16777215) << 6);
    }
    static range(t, e, n, r) {
      let o = (n ?? 16777215) << 6 | (r == null ? 7 : Math.min(6, r));
      return e < t ? zl.create(e, t, 48 | o) : zl.create(t, e, (e > t ? 8 : 0) | o);
    }
    static normalized(t, e = 0) {
      let n = t[e];
      t.sort((r, o) => r.from - o.from), e = t.indexOf(n);
      for (let r = 1; r < t.length; r++) {
        let o = t[r], u = t[r - 1];
        if (o.empty ? o.from <= u.to : o.from < u.to) {
          let f = u.from, h = Math.max(o.to, u.to);
          r <= e && e--, t.splice(--r, 2, o.anchor > o.head ? K.range(h, f) : K.range(f, h));
        }
      }
      return new K(t, e);
    }
  }
  function hv(l, t) {
    for (let e of l.ranges) if (e.to > t) throw new RangeError("Selection points outside of document");
  }
  let Am = 0;
  class et {
    constructor(t, e, n, r, o) {
      this.combine = t, this.compareInput = e, this.compare = n, this.isStatic = r, this.id = Am++, this.default = t([]), this.extensions = typeof o == "function" ? o(this) : o;
    }
    get reader() {
      return this;
    }
    static define(t = {}) {
      return new et(t.combine || ((e) => e), t.compareInput || ((e, n) => e === n), t.compare || (t.combine ? (e, n) => e === n : Cm), !!t.static, t.enables);
    }
    of(t) {
      return new Du([], this, 0, t);
    }
    compute(t, e) {
      if (this.isStatic) throw new Error("Can't compute a static facet");
      return new Du(t, this, 1, e);
    }
    computeN(t, e) {
      if (this.isStatic) throw new Error("Can't compute a static facet");
      return new Du(t, this, 2, e);
    }
    from(t, e) {
      return e || (e = (n) => n), this.compute([
        t
      ], (n) => e(n.field(t)));
    }
  }
  function Cm(l, t) {
    return l == t || l.length == t.length && l.every((e, n) => e === t[n]);
  }
  class Du {
    constructor(t, e, n, r) {
      this.dependencies = t, this.facet = e, this.type = n, this.value = r, this.id = Am++;
    }
    dynamicSlot(t) {
      var e;
      let n = this.value, r = this.facet.compareInput, o = this.id, u = t[o] >> 1, f = this.type == 2, h = false, g = false, p = [];
      for (let y of this.dependencies) y == "doc" ? h = true : y == "selection" ? g = true : (((e = t[y.id]) !== null && e !== void 0 ? e : 1) & 1) == 0 && p.push(t[y.id]);
      return {
        create(y) {
          return y.values[u] = n(y), 1;
        },
        update(y, v) {
          if (h && v.docChanged || g && (v.docChanged || v.selection) || Od(y, p)) {
            let S = n(y);
            if (f ? !mb(S, y.values[u], r) : !r(S, y.values[u])) return y.values[u] = S, 1;
          }
          return 0;
        },
        reconfigure: (y, v) => {
          let S, w = v.config.address[o];
          if (w != null) {
            let C = ju(v, w);
            if (this.dependencies.every((_) => _ instanceof et ? v.facet(_) === y.facet(_) : _ instanceof Te ? v.field(_, false) == y.field(_, false) : true) || (f ? mb(S = n(y), C, r) : r(S = n(y), C))) return y.values[u] = C, 0;
          } else S = n(y);
          return y.values[u] = S, 1;
        }
      };
    }
  }
  function mb(l, t, e) {
    if (l.length != t.length) return false;
    for (let n = 0; n < l.length; n++) if (!e(l[n], t[n])) return false;
    return true;
  }
  function Od(l, t) {
    let e = false;
    for (let n of t) oo(l, n) & 1 && (e = true);
    return e;
  }
  function lM(l, t, e) {
    let n = e.map((h) => l[h.id]), r = e.map((h) => h.type), o = n.filter((h) => !(h & 1)), u = l[t.id] >> 1;
    function f(h) {
      let g = [];
      for (let p = 0; p < n.length; p++) {
        let y = ju(h, n[p]);
        if (r[p] == 2) for (let v of y) g.push(v);
        else g.push(y);
      }
      return t.combine(g);
    }
    return {
      create(h) {
        for (let g of n) oo(h, g);
        return h.values[u] = f(h), 1;
      },
      update(h, g) {
        if (!Od(h, o)) return 0;
        let p = f(h);
        return t.compare(p, h.values[u]) ? 0 : (h.values[u] = p, 1);
      },
      reconfigure(h, g) {
        let p = Od(h, n), y = g.config.facets[t.id], v = g.facet(t);
        if (y && !p && Cm(e, y)) return h.values[u] = v, 0;
        let S = f(h);
        return t.compare(S, v) ? (h.values[u] = v, 0) : (h.values[u] = S, 1);
      }
    };
  }
  const lu = et.define({
    static: true
  });
  class Te {
    constructor(t, e, n, r, o) {
      this.id = t, this.createF = e, this.updateF = n, this.compareF = r, this.spec = o, this.provides = void 0;
    }
    static define(t) {
      let e = new Te(Am++, t.create, t.update, t.compare || ((n, r) => n === r), t);
      return t.provide && (e.provides = t.provide(e)), e;
    }
    create(t) {
      let e = t.facet(lu).find((n) => n.field == this);
      return ((e == null ? void 0 : e.create) || this.createF)(t);
    }
    slot(t) {
      let e = t[this.id] >> 1;
      return {
        create: (n) => (n.values[e] = this.create(n), 1),
        update: (n, r) => {
          let o = n.values[e], u = this.updateF(o, r);
          return this.compareF(o, u) ? 0 : (n.values[e] = u, 1);
        },
        reconfigure: (n, r) => {
          let o = n.facet(lu), u = r.facet(lu), f;
          return (f = o.find((h) => h.field == this)) && f != u.find((h) => h.field == this) ? (n.values[e] = f.create(n), 1) : r.config.address[this.id] != null ? (n.values[e] = r.field(this), 0) : (n.values[e] = this.create(n), 1);
        }
      };
    }
    init(t) {
      return [
        this,
        lu.of({
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
    return (t) => new dv(t, l);
  }
  const Gl = {
    highest: Jr(Bl.highest),
    high: Jr(Bl.high),
    default: Jr(Bl.default),
    low: Jr(Bl.low),
    lowest: Jr(Bl.lowest)
  };
  class dv {
    constructor(t, e) {
      this.inner = t, this.prec = e;
    }
  }
  class uc {
    of(t) {
      return new Dd(this, t);
    }
    reconfigure(t) {
      return uc.reconfigure.of({
        compartment: this,
        extension: t
      });
    }
    get(t) {
      return t.config.compartments.get(this);
    }
  }
  class Dd {
    constructor(t, e) {
      this.compartment = t, this.inner = e;
    }
  }
  class qu {
    constructor(t, e, n, r, o, u) {
      for (this.base = t, this.compartments = e, this.dynamicSlots = n, this.address = r, this.staticValues = o, this.facets = u, this.statusTemplate = []; this.statusTemplate.length < n.length; ) this.statusTemplate.push(0);
    }
    staticFacet(t) {
      let e = this.address[t.id];
      return e == null ? t.default : this.staticValues[e >> 1];
    }
    static resolve(t, e, n) {
      let r = [], o = /* @__PURE__ */ Object.create(null), u = /* @__PURE__ */ new Map();
      for (let v of sM(t, e, u)) v instanceof Te ? r.push(v) : (o[v.facet.id] || (o[v.facet.id] = [])).push(v);
      let f = /* @__PURE__ */ Object.create(null), h = [], g = [];
      for (let v of r) f[v.id] = g.length << 1, g.push((S) => v.slot(S));
      let p = n == null ? void 0 : n.config.facets;
      for (let v in o) {
        let S = o[v], w = S[0].facet, C = p && p[v] || [];
        if (S.every((_) => _.type == 0)) if (f[w.id] = h.length << 1 | 1, Cm(C, S)) h.push(n.facet(w));
        else {
          let _ = w.combine(S.map((O) => O.value));
          h.push(n && w.compare(_, n.facet(w)) ? n.facet(w) : _);
        }
        else {
          for (let _ of S) _.type == 0 ? (f[_.id] = h.length << 1 | 1, h.push(_.value)) : (f[_.id] = g.length << 1, g.push((O) => _.dynamicSlot(O)));
          f[w.id] = g.length << 1, g.push((_) => lM(_, w, S));
        }
      }
      let y = g.map((v) => v(f));
      return new qu(t, u, y, f, h, o);
    }
  }
  function sM(l, t, e) {
    let n = [
      [],
      [],
      [],
      [],
      []
    ], r = /* @__PURE__ */ new Map();
    function o(u, f) {
      let h = r.get(u);
      if (h != null) {
        if (h <= f) return;
        let g = n[h].indexOf(u);
        g > -1 && n[h].splice(g, 1), u instanceof Dd && e.delete(u.compartment);
      }
      if (r.set(u, f), Array.isArray(u)) for (let g of u) o(g, f);
      else if (u instanceof Dd) {
        if (e.has(u.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
        let g = t.get(u.compartment) || u.inner;
        e.set(u.compartment, g), o(g, f);
      } else if (u instanceof dv) o(u.inner, u.prec);
      else if (u instanceof Te) n[f].push(u), u.provides && o(u.provides, f);
      else if (u instanceof Du) n[f].push(u), u.facet.extensions && o(u.facet.extensions, Bl.default);
      else {
        let g = u.extension;
        if (!g) throw new Error(`Unrecognized extension value in extension set (${u}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
        o(g, f);
      }
    }
    return o(l, Bl.default), n.reduce((u, f) => u.concat(f));
  }
  function oo(l, t) {
    if (t & 1) return 2;
    let e = t >> 1, n = l.status[e];
    if (n == 4) throw new Error("Cyclic dependency between fields and/or facets");
    if (n & 2) return n;
    l.status[e] = 4;
    let r = l.computeSlot(l, l.config.dynamicSlots[e]);
    return l.status[e] = 2 | r;
  }
  function ju(l, t) {
    return t & 1 ? l.config.staticValues[t >> 1] : l.values[t >> 1];
  }
  const mv = et.define(), Ed = et.define({
    combine: (l) => l.some((t) => t),
    static: true
  }), gv = et.define({
    combine: (l) => l.length ? l[0] : void 0,
    static: true
  }), pv = et.define(), yv = et.define(), bv = et.define(), vv = et.define({
    combine: (l) => l.length ? l[0] : false
  });
  class Pi {
    constructor(t, e) {
      this.type = t, this.value = e;
    }
    static define() {
      return new rM();
    }
  }
  class rM {
    of(t) {
      return new Pi(this, t);
    }
  }
  class oM {
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
      return new oM(t.map || ((e) => e));
    }
    static mapEffects(t, e) {
      if (!t.length) return t;
      let n = [];
      for (let r of t) {
        let o = r.map(e);
        o && n.push(o);
      }
      return n;
    }
  }
  St.reconfigure = St.define();
  St.appendConfig = St.define();
  class me {
    constructor(t, e, n, r, o, u) {
      this.startState = t, this.changes = e, this.selection = n, this.effects = r, this.annotations = o, this.scrollIntoView = u, this._doc = null, this._state = null, n && hv(n, e.newLength), o.some((f) => f.type == me.time) || (this.annotations = o.concat(me.time.of(Date.now())));
    }
    static create(t, e, n, r, o, u) {
      return new me(t, e, n, r, o, u);
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
  me.time = Pi.define();
  me.userEvent = Pi.define();
  me.addToHistory = Pi.define();
  me.remote = Pi.define();
  function aM(l, t) {
    let e = [];
    for (let n = 0, r = 0; ; ) {
      let o, u;
      if (n < l.length && (r == t.length || t[r] >= l[n])) o = l[n++], u = l[n++];
      else if (r < t.length) o = t[r++], u = t[r++];
      else return e;
      !e.length || e[e.length - 1] < o ? e.push(o, u) : e[e.length - 1] < u && (e[e.length - 1] = u);
    }
  }
  function Sv(l, t, e) {
    var n;
    let r, o, u;
    return e ? (r = t.changes, o = de.empty(t.changes.length), u = l.changes.compose(t.changes)) : (r = t.changes.map(l.changes), o = l.changes.mapDesc(t.changes, true), u = l.changes.compose(r)), {
      changes: u,
      selection: t.selection ? t.selection.map(o) : (n = l.selection) === null || n === void 0 ? void 0 : n.map(r),
      effects: St.mapEffects(l.effects, r).concat(St.mapEffects(t.effects, o)),
      annotations: l.annotations.length ? l.annotations.concat(t.annotations) : t.annotations,
      scrollIntoView: l.scrollIntoView || t.scrollIntoView
    };
  }
  function Bd(l, t, e) {
    let n = t.selection, r = Ns(t.annotations);
    return t.userEvent && (r = r.concat(me.userEvent.of(t.userEvent))), {
      changes: t.changes instanceof de ? t.changes : de.of(t.changes || [], e, l.facet(gv)),
      selection: n && (n instanceof K ? n : K.single(n.anchor, n.head)),
      effects: Ns(t.effects),
      annotations: r,
      scrollIntoView: !!t.scrollIntoView
    };
  }
  function xv(l, t, e) {
    let n = Bd(l, t.length ? t[0] : {}, l.doc.length);
    t.length && t[0].filter === false && (e = false);
    for (let o = 1; o < t.length; o++) {
      t[o].filter === false && (e = false);
      let u = !!t[o].sequential;
      n = Sv(n, Bd(l, t[o], u ? n.changes.newLength : l.doc.length), u);
    }
    let r = me.create(l, n.changes, n.selection, n.effects, n.annotations, n.scrollIntoView);
    return cM(e ? uM(r) : r);
  }
  function uM(l) {
    let t = l.startState, e = true;
    for (let r of t.facet(pv)) {
      let o = r(l);
      if (o === false) {
        e = false;
        break;
      }
      Array.isArray(o) && (e = e === true ? o : aM(e, o));
    }
    if (e !== true) {
      let r, o;
      if (e === false) o = l.changes.invertedDesc, r = de.empty(t.doc.length);
      else {
        let u = l.changes.filter(e);
        r = u.changes, o = u.filtered.mapDesc(u.changes).invertedDesc;
      }
      l = me.create(t, r, l.selection && l.selection.map(o), St.mapEffects(l.effects, o), l.annotations, l.scrollIntoView);
    }
    let n = t.facet(yv);
    for (let r = n.length - 1; r >= 0; r--) {
      let o = n[r](l);
      o instanceof me ? l = o : Array.isArray(o) && o.length == 1 && o[0] instanceof me ? l = o[0] : l = xv(t, Ns(o), false);
    }
    return l;
  }
  function cM(l) {
    let t = l.startState, e = t.facet(bv), n = l;
    for (let r = e.length - 1; r >= 0; r--) {
      let o = e[r](l);
      o && Object.keys(o).length && (n = Sv(n, Bd(t, o, l.changes.newLength), true));
    }
    return n == l ? l : me.create(t, l.changes, l.selection, n.effects, n.annotations, n.scrollIntoView);
  }
  const fM = [];
  function Ns(l) {
    return l == null ? fM : Array.isArray(l) ? l : [
      l
    ];
  }
  var Ft = (function(l) {
    return l[l.Word = 0] = "Word", l[l.Space = 1] = "Space", l[l.Other = 2] = "Other", l;
  })(Ft || (Ft = {}));
  const hM = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
  let Rd;
  try {
    Rd = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
  } catch {
  }
  function dM(l) {
    if (Rd) return Rd.test(l);
    for (let t = 0; t < l.length; t++) {
      let e = l[t];
      if (/\w/.test(e) || e > "\x80" && (e.toUpperCase() != e.toLowerCase() || hM.test(e))) return true;
    }
    return false;
  }
  function mM(l) {
    return (t) => {
      if (!/\S/.test(t)) return Ft.Space;
      if (dM(t)) return Ft.Word;
      for (let e = 0; e < l.length; e++) if (t.indexOf(l[e]) > -1) return Ft.Word;
      return Ft.Other;
    };
  }
  class kt {
    constructor(t, e, n, r, o, u) {
      this.config = t, this.doc = e, this.selection = n, this.values = r, this.status = t.statusTemplate.slice(), this.computeSlot = o, u && (u._state = this);
      for (let f = 0; f < this.config.dynamicSlots.length; f++) oo(this, f << 1);
      this.computeSlot = null;
    }
    field(t, e = true) {
      let n = this.config.address[t.id];
      if (n == null) {
        if (e) throw new RangeError("Field is not present in this state");
        return;
      }
      return oo(this, n), ju(this, n);
    }
    update(...t) {
      return xv(this, t, true);
    }
    applyTransaction(t) {
      let e = this.config, { base: n, compartments: r } = e;
      for (let f of t.effects) f.is(uc.reconfigure) ? (e && (r = /* @__PURE__ */ new Map(), e.compartments.forEach((h, g) => r.set(g, h)), e = null), r.set(f.value.compartment, f.value.extension)) : f.is(St.reconfigure) ? (e = null, n = f.value) : f.is(St.appendConfig) && (e = null, n = Ns(n).concat(f.value));
      let o;
      e ? o = t.startState.values.slice() : (e = qu.resolve(n, r, this), o = new kt(e, this.doc, this.selection, e.dynamicSlots.map(() => null), (h, g) => g.reconfigure(h, this), null).values);
      let u = t.startState.facet(Ed) ? t.newSelection : t.newSelection.asSingle();
      new kt(e, t.newDoc, u, o, (f, h) => h.update(f, t), t);
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
      let e = this.selection, n = t(e.ranges[0]), r = this.changes(n.changes), o = [
        n.range
      ], u = Ns(n.effects);
      for (let f = 1; f < e.ranges.length; f++) {
        let h = t(e.ranges[f]), g = this.changes(h.changes), p = g.map(r);
        for (let v = 0; v < f; v++) o[v] = o[v].map(p);
        let y = r.mapDesc(g, true);
        o.push(h.range.map(y)), r = r.compose(p), u = St.mapEffects(u, p).concat(St.mapEffects(Ns(h.effects), y));
      }
      return {
        changes: r,
        selection: K.create(o, e.mainIndex),
        effects: u
      };
    }
    changes(t = []) {
      return t instanceof de ? t : de.of(t, this.doc.length, this.facet(kt.lineSeparator));
    }
    toText(t) {
      return Bt.of(t.split(this.facet(kt.lineSeparator) || _d));
    }
    sliceDoc(t = 0, e = this.doc.length) {
      return this.doc.sliceString(t, e, this.lineBreak);
    }
    facet(t) {
      let e = this.config.address[t.id];
      return e == null ? t.default : (oo(this, e), ju(this, e));
    }
    toJSON(t) {
      let e = {
        doc: this.sliceDoc(),
        selection: this.selection.toJSON()
      };
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
        for (let o in n) if (Object.prototype.hasOwnProperty.call(t, o)) {
          let u = n[o], f = t[o];
          r.push(u.init((h) => u.spec.fromJSON(f, h)));
        }
      }
      return kt.create({
        doc: t.doc,
        selection: K.fromJSON(t.selection),
        extensions: e.extensions ? r.concat([
          e.extensions
        ]) : r
      });
    }
    static create(t = {}) {
      let e = qu.resolve(t.extensions || [], /* @__PURE__ */ new Map()), n = t.doc instanceof Bt ? t.doc : Bt.of((t.doc || "").split(e.staticFacet(kt.lineSeparator) || _d)), r = t.selection ? t.selection instanceof K ? t.selection : K.single(t.selection.anchor, t.selection.head) : K.single(0);
      return hv(r, n.length), e.staticFacet(Ed) || (r = r.asSingle()), new kt(e, n, r, e.dynamicSlots.map(() => null), (o, u) => u.create(o), null);
    }
    get tabSize() {
      return this.facet(kt.tabSize);
    }
    get lineBreak() {
      return this.facet(kt.lineSeparator) || `
`;
    }
    get readOnly() {
      return this.facet(vv);
    }
    phrase(t, ...e) {
      for (let n of this.facet(kt.phrases)) if (Object.prototype.hasOwnProperty.call(n, t)) {
        t = n[t];
        break;
      }
      return e.length && (t = t.replace(/\$(\$|\d*)/g, (n, r) => {
        if (r == "$") return "$";
        let o = +(r || 1);
        return !o || o > e.length ? n : e[o - 1];
      })), t;
    }
    languageDataAt(t, e, n = -1) {
      let r = [];
      for (let o of this.facet(mv)) for (let u of o(this, e, n)) Object.prototype.hasOwnProperty.call(u, t) && r.push(u[t]);
      return r;
    }
    charCategorizer(t) {
      return mM(this.languageDataAt("wordChars", t).join(""));
    }
    wordAt(t) {
      let { text: e, from: n, length: r } = this.doc.lineAt(t), o = this.charCategorizer(t), u = t - n, f = t - n;
      for (; u > 0; ) {
        let h = _e(e, u, false);
        if (o(e.slice(h, u)) != Ft.Word) break;
        u = h;
      }
      for (; f < r; ) {
        let h = _e(e, f);
        if (o(e.slice(f, h)) != Ft.Word) break;
        f = h;
      }
      return u == f ? null : K.range(u + n, f + n);
    }
  }
  kt.allowMultipleSelections = Ed;
  kt.tabSize = et.define({
    combine: (l) => l.length ? l[0] : 4
  });
  kt.lineSeparator = gv;
  kt.readOnly = vv;
  kt.phrases = et.define({
    compare(l, t) {
      let e = Object.keys(l), n = Object.keys(t);
      return e.length == n.length && e.every((r) => l[r] == t[r]);
    }
  });
  kt.languageData = mv;
  kt.changeFilter = pv;
  kt.transactionFilter = yv;
  kt.transactionExtender = bv;
  uc.reconfigure = St.define();
  function $i(l, t, e = {}) {
    let n = {};
    for (let r of l) for (let o of Object.keys(r)) {
      let u = r[o], f = n[o];
      if (f === void 0) n[o] = u;
      else if (!(f === u || u === void 0)) if (Object.hasOwnProperty.call(e, o)) n[o] = e[o](f, u);
      else throw new Error("Config merge conflict for field " + o);
    }
    for (let r in t) n[r] === void 0 && (n[r] = t[r]);
    return n;
  }
  class Ul {
    eq(t) {
      return this == t;
    }
    range(t, e = t) {
      return zd.create(t, e, this);
    }
  }
  Ul.prototype.startSide = Ul.prototype.endSide = 0;
  Ul.prototype.point = false;
  Ul.prototype.mapMode = He.TrackDel;
  let zd = class wv {
    constructor(t, e, n) {
      this.from = t, this.to = e, this.value = n;
    }
    static create(t, e, n) {
      return new wv(t, e, n);
    }
  };
  function Nd(l, t) {
    return l.from - t.from || l.value.startSide - t.value.startSide;
  }
  class Mm {
    constructor(t, e, n, r) {
      this.from = t, this.to = e, this.value = n, this.maxPoint = r;
    }
    get length() {
      return this.to[this.to.length - 1];
    }
    findIndex(t, e, n, r = 0) {
      let o = n ? this.to : this.from;
      for (let u = r, f = o.length; ; ) {
        if (u == f) return u;
        let h = u + f >> 1, g = o[h] - t || (n ? this.value[h].endSide : this.value[h].startSide) - e;
        if (h == u) return g >= 0 ? u : f;
        g >= 0 ? f = h : u = h + 1;
      }
    }
    between(t, e, n, r) {
      for (let o = this.findIndex(e, -1e9, true), u = this.findIndex(n, 1e9, false, o); o < u; o++) if (r(this.from[o] + t, this.to[o] + t, this.value[o]) === false) return false;
    }
    map(t, e) {
      let n = [], r = [], o = [], u = -1, f = -1;
      for (let h = 0; h < this.value.length; h++) {
        let g = this.value[h], p = this.from[h] + t, y = this.to[h] + t, v, S;
        if (p == y) {
          let w = e.mapPos(p, g.startSide, g.mapMode);
          if (w == null || (v = S = w, g.startSide != g.endSide && (S = e.mapPos(p, g.endSide), S < v))) continue;
        } else if (v = e.mapPos(p, g.startSide), S = e.mapPos(y, g.endSide), v > S || v == S && g.startSide > 0 && g.endSide <= 0) continue;
        (S - v || g.endSide - g.startSide) < 0 || (u < 0 && (u = v), g.point && (f = Math.max(f, S - v)), n.push(g), r.push(v - u), o.push(S - u));
      }
      return {
        mapped: n.length ? new Mm(r, o, n, f) : null,
        pos: u
      };
    }
  }
  class Et {
    constructor(t, e, n, r) {
      this.chunkPos = t, this.chunk = e, this.nextLayer = n, this.maxPoint = r;
    }
    static create(t, e, n, r) {
      return new Et(t, e, n, r);
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
      let { add: e = [], sort: n = false, filterFrom: r = 0, filterTo: o = this.length } = t, u = t.filter;
      if (e.length == 0 && !u) return this;
      if (n && (e = e.slice().sort(Nd)), this.isEmpty) return e.length ? Et.of(e) : this;
      let f = new Av(this, null, -1).goto(0), h = 0, g = [], p = new wn();
      for (; f.value || h < e.length; ) if (h < e.length && (f.from - e[h].from || f.startSide - e[h].value.startSide) >= 0) {
        let y = e[h++];
        p.addInner(y.from, y.to, y.value) || g.push(y);
      } else f.rangeIndex == 1 && f.chunkIndex < this.chunk.length && (h == e.length || this.chunkEnd(f.chunkIndex) < e[h].from) && (!u || r > this.chunkEnd(f.chunkIndex) || o < this.chunkPos[f.chunkIndex]) && p.addChunk(this.chunkPos[f.chunkIndex], this.chunk[f.chunkIndex]) ? f.nextChunk() : ((!u || r > f.to || o < f.from || u(f.from, f.to, f.value)) && (p.addInner(f.from, f.to, f.value) || g.push(zd.create(f.from, f.to, f.value))), f.next());
      return p.finishInner(this.nextLayer.isEmpty && !g.length ? Et.empty : this.nextLayer.update({
        add: g,
        filter: u,
        filterFrom: r,
        filterTo: o
      }));
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
      let o = this.nextLayer.map(t);
      return e.length == 0 ? o : new Et(n, e, o || Et.empty, r);
    }
    between(t, e, n) {
      if (!this.isEmpty) {
        for (let r = 0; r < this.chunk.length; r++) {
          let o = this.chunkPos[r], u = this.chunk[r];
          if (e >= o && t <= o + u.length && u.between(o, t - o, e - o, n) === false) return;
        }
        this.nextLayer.between(t, e, n);
      }
    }
    iter(t = 0) {
      return go.from([
        this
      ]).goto(t);
    }
    get isEmpty() {
      return this.nextLayer == this;
    }
    static iter(t, e = 0) {
      return go.from(t).goto(e);
    }
    static compare(t, e, n, r, o = -1) {
      let u = t.filter((y) => y.maxPoint > 0 || !y.isEmpty && y.maxPoint >= o), f = e.filter((y) => y.maxPoint > 0 || !y.isEmpty && y.maxPoint >= o), h = gb(u, f, n), g = new Fr(u, h, o), p = new Fr(f, h, o);
      n.iterGaps((y, v, S) => pb(g, y, p, v, S, r)), n.empty && n.length == 0 && pb(g, 0, p, 0, 0, r);
    }
    static eq(t, e, n = 0, r) {
      r == null && (r = 999999999);
      let o = t.filter((p) => !p.isEmpty && e.indexOf(p) < 0), u = e.filter((p) => !p.isEmpty && t.indexOf(p) < 0);
      if (o.length != u.length) return false;
      if (!o.length) return true;
      let f = gb(o, u), h = new Fr(o, f, 0).goto(n), g = new Fr(u, f, 0).goto(n);
      for (; ; ) {
        if (h.to != g.to || !Ld(h.active, g.active) || h.point && (!g.point || !h.point.eq(g.point))) return false;
        if (h.to > r) return true;
        h.next(), g.next();
      }
    }
    static spans(t, e, n, r, o = -1) {
      let u = new Fr(t, null, o).goto(e), f = e, h = u.openStart;
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
      let n = new wn();
      for (let r of t instanceof zd ? [
        t
      ] : e ? gM(t) : t) n.add(r.from, r.to, r.value);
      return n.finish();
    }
    static join(t) {
      if (!t.length) return Et.empty;
      let e = t[t.length - 1];
      for (let n = t.length - 2; n >= 0; n--) for (let r = t[n]; r != Et.empty; r = r.nextLayer) e = new Et(r.chunkPos, r.chunk, e, Math.max(r.maxPoint, e.maxPoint));
      return e;
    }
  }
  Et.empty = new Et([], [], null, -1);
  function gM(l) {
    if (l.length > 1) for (let t = l[0], e = 1; e < l.length; e++) {
      let n = l[e];
      if (Nd(t, n) > 0) return l.slice().sort(Nd);
      t = n;
    }
    return l;
  }
  Et.empty.nextLayer = Et.empty;
  class wn {
    finishChunk(t) {
      this.chunks.push(new Mm(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, t && (this.from = [], this.to = [], this.value = []);
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
      return this.finishInner(Et.empty);
    }
    finishInner(t) {
      if (this.from.length && this.finishChunk(false), this.chunks.length == 0) return t;
      let e = Et.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(t) : t, this.setMaxPoint);
      return this.from = null, e;
    }
  }
  function gb(l, t, e) {
    let n = /* @__PURE__ */ new Map();
    for (let o of l) for (let u = 0; u < o.chunk.length; u++) o.chunk[u].maxPoint <= 0 && n.set(o.chunk[u], o.chunkPos[u]);
    let r = /* @__PURE__ */ new Set();
    for (let o of t) for (let u = 0; u < o.chunk.length; u++) {
      let f = n.get(o.chunk[u]);
      f != null && (e ? e.mapPos(f) : f) == o.chunkPos[u] && !(e == null ? void 0 : e.touchesRange(f, f + o.chunk[u].length)) && r.add(o.chunk[u]);
    }
    return r;
  }
  class Av {
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
  class go {
    constructor(t) {
      this.heap = t;
    }
    static from(t, e = null, n = -1) {
      let r = [];
      for (let o = 0; o < t.length; o++) for (let u = t[o]; !u.isEmpty; u = u.nextLayer) u.maxPoint >= n && r.push(new Av(u, e, n, o));
      return r.length == 1 ? r[0] : new go(r);
    }
    get startSide() {
      return this.value ? this.value.startSide : 0;
    }
    goto(t, e = -1e9) {
      for (let n of this.heap) n.goto(t, e);
      for (let n = this.heap.length >> 1; n >= 0; n--) Fh(this.heap, n);
      return this.next(), this;
    }
    forward(t, e) {
      for (let n of this.heap) n.forward(t, e);
      for (let n = this.heap.length >> 1; n >= 0; n--) Fh(this.heap, n);
      (this.to - t || this.value.endSide - e) < 0 && this.next();
    }
    next() {
      if (this.heap.length == 0) this.from = this.to = 1e9, this.value = null, this.rank = -1;
      else {
        let t = this.heap[0];
        this.from = t.from, this.to = t.to, this.value = t.value, this.rank = t.rank, t.value && t.next(), Fh(this.heap, 0);
      }
    }
  }
  function Fh(l, t) {
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
      this.minPoint = n, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = go.from(t, e, n);
    }
    goto(t, e = -1e9) {
      return this.cursor.goto(t, e), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = t, this.endSide = e, this.openStart = -1, this.next(), this;
    }
    forward(t, e) {
      for (; this.minActive > -1 && (this.activeTo[this.minActive] - t || this.active[this.minActive].endSide - e) < 0; ) this.removeActive(this.minActive);
      this.cursor.forward(t, e);
    }
    removeActive(t) {
      su(this.active, t), su(this.activeTo, t), su(this.activeRank, t), this.minActive = yb(this.active, this.activeTo);
    }
    addActive(t) {
      let e = 0, { value: n, to: r, rank: o } = this.cursor;
      for (; e < this.activeRank.length && (o - this.activeRank[e] || r - this.activeTo[e]) > 0; ) e++;
      ru(this.active, e, n), ru(this.activeTo, e, r), ru(this.activeRank, e, o), t && ru(t, e, this.cursor.from), this.minActive = yb(this.active, this.activeTo);
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
          this.removeActive(r), n && su(n, r);
        } else if (this.cursor.value) if (this.cursor.from > t) {
          this.to = this.cursor.from, this.endSide = this.cursor.startSide;
          break;
        } else {
          let o = this.cursor.value;
          if (!o.point) this.addActive(n), this.cursor.next();
          else if (e && this.cursor.to == this.to && this.cursor.from < this.cursor.to) this.cursor.next();
          else {
            this.point = o, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = o.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
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
  function pb(l, t, e, n, r, o) {
    l.goto(t), e.goto(n);
    let u = n + r, f = n, h = n - t;
    for (; ; ) {
      let g = l.to + h - e.to, p = g || l.endSide - e.endSide, y = p < 0 ? l.to + h : e.to, v = Math.min(y, u);
      if (l.point || e.point ? l.point && e.point && (l.point == e.point || l.point.eq(e.point)) && Ld(l.activeForPoint(l.to), e.activeForPoint(e.to)) || o.comparePoint(f, v, l.point, e.point) : v > f && !Ld(l.active, e.active) && o.compareRange(f, v, l.active, e.active), y > u) break;
      (g || l.openEnd != e.openEnd) && o.boundChange && o.boundChange(y), f = y, p <= 0 && l.next(), p >= 0 && e.next();
    }
  }
  function Ld(l, t) {
    if (l.length != t.length) return false;
    for (let e = 0; e < l.length; e++) if (l[e] != t[e] && !l[e].eq(t[e])) return false;
    return true;
  }
  function su(l, t) {
    for (let e = t, n = l.length - 1; e < n; e++) l[e] = l[e + 1];
    l.pop();
  }
  function ru(l, t, e) {
    for (let n = l.length - 1; n >= t; n--) l[n + 1] = l[n];
    l[t] = e;
  }
  function yb(l, t) {
    let e = -1, n = 1e9;
    for (let r = 0; r < t.length; r++) (t[r] - n || l[r].endSide - l[e].endSide) < 0 && (e = r, n = t[r]);
    return e;
  }
  function Is(l, t, e = l.length) {
    let n = 0;
    for (let r = 0; r < e && r < l.length; ) l.charCodeAt(r) == 9 ? (n += t - n % t, r++) : (n++, r = _e(l, r));
    return n;
  }
  function Hd(l, t, e, n) {
    for (let r = 0, o = 0; ; ) {
      if (o >= t) return r;
      if (r == l.length) break;
      o += l.charCodeAt(r) == 9 ? e - o % e : 1, r = _e(l, r);
    }
    return n === true ? -1 : l.length;
  }
  const Ud = "\u037C", bb = typeof Symbol > "u" ? "__" + Ud : Symbol.for(Ud), Vd = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet"), vb = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
  class sl {
    constructor(t, e) {
      this.rules = [];
      let { finish: n } = e || {};
      function r(u) {
        return /^@/.test(u) ? [
          u
        ] : u.split(/,\s*/);
      }
      function o(u, f, h, g) {
        let p = [], y = /^@(\w+)\b/.exec(u[0]), v = y && y[1] == "keyframes";
        if (y && f == null) return h.push(u[0] + ";");
        for (let S in f) {
          let w = f[S];
          if (/&/.test(S)) o(S.split(/,\s*/).map((C) => u.map((_) => C.replace(/&/, _))).reduce((C, _) => C.concat(_)), w, h);
          else if (w && typeof w == "object") {
            if (!y) throw new RangeError("The value of a property (" + S + ") should be a primitive value.");
            o(r(S), w, p, v);
          } else w != null && p.push(S.replace(/_.*/, "").replace(/[A-Z]/g, (C) => "-" + C.toLowerCase()) + ": " + w + ";");
        }
        (p.length || v) && h.push((n && !y && !g ? u.map(n) : u).join(", ") + " {" + p.join(" ") + "}");
      }
      for (let u in t) o(r(u), t[u], this.rules);
    }
    getRules() {
      return this.rules.join(`
`);
    }
    static newName() {
      let t = vb[bb] || 1;
      return vb[bb] = t + 1, Ud + t.toString(36);
    }
    static mount(t, e, n) {
      let r = t[Vd], o = n && n.nonce;
      r ? o && r.setNonce(o) : r = new pM(t, o), r.mount(Array.isArray(e) ? e : [
        e
      ], t);
    }
  }
  let Sb = /* @__PURE__ */ new Map();
  class pM {
    constructor(t, e) {
      let n = t.ownerDocument || t, r = n.defaultView;
      if (!t.head && t.adoptedStyleSheets && r.CSSStyleSheet) {
        let o = Sb.get(n);
        if (o) return t[Vd] = o;
        this.sheet = new r.CSSStyleSheet(), Sb.set(n, this);
      } else this.styleTag = n.createElement("style"), e && this.styleTag.setAttribute("nonce", e);
      this.modules = [], t[Vd] = this;
    }
    mount(t, e) {
      let n = this.sheet, r = 0, o = 0;
      for (let u = 0; u < t.length; u++) {
        let f = t[u], h = this.modules.indexOf(f);
        if (h < o && h > -1 && (this.modules.splice(h, 1), o--, h = -1), h == -1) {
          if (this.modules.splice(o++, 0, f), n) for (let g = 0; g < f.rules.length; g++) n.insertRule(f.rules[g], r++);
        } else {
          for (; o < h; ) r += this.modules[o++].rules.length;
          r += f.rules.length, o++;
        }
      }
      if (n) e.adoptedStyleSheets.indexOf(this.sheet) < 0 && (e.adoptedStyleSheets = [
        this.sheet,
        ...e.adoptedStyleSheets
      ]);
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
  }, po = {
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
  }, yM = typeof navigator < "u" && /Mac/.test(navigator.platform), bM = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
  for (var Ce = 0; Ce < 10; Ce++) rl[48 + Ce] = rl[96 + Ce] = String(Ce);
  for (var Ce = 1; Ce <= 24; Ce++) rl[Ce + 111] = "F" + Ce;
  for (var Ce = 65; Ce <= 90; Ce++) rl[Ce] = String.fromCharCode(Ce + 32), po[Ce] = String.fromCharCode(Ce);
  for (var Ih in rl) po.hasOwnProperty(Ih) || (po[Ih] = rl[Ih]);
  function vM(l) {
    var t = yM && l.metaKey && l.shiftKey && !l.ctrlKey && !l.altKey || bM && l.shiftKey && l.key && l.key.length == 1 || l.key == "Unidentified", e = !t && l.key || (l.shiftKey ? po : rl)[l.keyCode] || l.key || "Unidentified";
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
    for (; t < arguments.length; t++) Cv(l, arguments[t]);
    return l;
  }
  function Cv(l, t) {
    if (typeof t == "string") l.appendChild(document.createTextNode(t));
    else if (t != null) if (t.nodeType != null) l.appendChild(t);
    else if (Array.isArray(t)) for (var e = 0; e < t.length; e++) Cv(l, t[e]);
    else throw new RangeError("Unsupported child node: " + t);
  }
  let Le = typeof navigator < "u" ? navigator : {
    userAgent: "",
    vendor: "",
    platform: ""
  }, qd = typeof document < "u" ? document : {
    documentElement: {
      style: {}
    }
  };
  const jd = /Edge\/(\d+)/.exec(Le.userAgent), Mv = /MSIE \d/.test(Le.userAgent), Yd = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Le.userAgent), cc = !!(Mv || Yd || jd), xb = !cc && /gecko\/(\d+)/i.test(Le.userAgent), Ph = !cc && /Chrome\/(\d+)/.exec(Le.userAgent), SM = "webkitFontSmoothing" in qd.documentElement.style, Gd = !cc && /Apple Computer/.test(Le.vendor), wb = Gd && (/Mobile\/\w+/.test(Le.userAgent) || Le.maxTouchPoints > 2);
  var F = {
    mac: wb || /Mac/.test(Le.platform),
    windows: /Win/.test(Le.platform),
    linux: /Linux|X11/.test(Le.platform),
    ie: cc,
    ie_version: Mv ? qd.documentMode || 6 : Yd ? +Yd[1] : jd ? +jd[1] : 0,
    gecko: xb,
    gecko_version: xb ? +(/Firefox\/(\d+)/.exec(Le.userAgent) || [
      0,
      0
    ])[1] : 0,
    chrome: !!Ph,
    chrome_version: Ph ? +Ph[1] : 0,
    ios: wb,
    android: /Android\b/.test(Le.userAgent),
    webkit_version: SM ? +(/\bAppleWebKit\/(\d+)/.exec(Le.userAgent) || [
      0,
      0
    ])[1] : 0,
    safari: Gd,
    safari_version: Gd ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(Le.userAgent) || [
      0,
      0
    ])[1] : 0,
    tabSize: qd.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
  };
  function yo(l) {
    let t;
    return l.nodeType == 11 ? t = l.getSelection ? l : l.ownerDocument : t = l, t.getSelection();
  }
  function Xd(l, t) {
    return t ? l == t || l.contains(t.nodeType != 1 ? t.parentNode : t) : false;
  }
  function Eu(l, t) {
    if (!t.anchorNode) return false;
    try {
      return Xd(l, t.anchorNode);
    } catch {
      return false;
    }
  }
  function Xs(l) {
    return l.nodeType == 3 ? ql(l, 0, l.nodeValue.length).getClientRects() : l.nodeType == 1 ? l.getClientRects() : [];
  }
  function ao(l, t, e, n) {
    return e ? Ab(l, t, e, n, -1) || Ab(l, t, e, n, 1) : false;
  }
  function Vl(l) {
    for (var t = 0; ; t++) if (l = l.previousSibling, !l) return t;
  }
  function Yu(l) {
    return l.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(l.nodeName);
  }
  function Ab(l, t, e, n, r) {
    for (; ; ) {
      if (l == e && t == n) return true;
      if (t == (r < 0 ? 0 : Ii(l))) {
        if (l.nodeName == "DIV") return false;
        let o = l.parentNode;
        if (!o || o.nodeType != 1) return false;
        t = Vl(l) + (r < 0 ? 0 : 1), l = o;
      } else if (l.nodeType == 1) {
        if (l = l.childNodes[t + (r < 0 ? -1 : 0)], l.nodeType == 1 && l.contentEditable == "false") return false;
        t = r < 0 ? Ii(l) : 0;
      } else return false;
    }
  }
  function Ii(l) {
    return l.nodeType == 3 ? l.nodeValue.length : l.childNodes.length;
  }
  function Do(l, t) {
    let e = t ? l.left : l.right;
    return {
      left: e,
      right: e,
      top: l.top,
      bottom: l.bottom
    };
  }
  function xM(l) {
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
  function _v(l, t) {
    let e = t.width / l.offsetWidth, n = t.height / l.offsetHeight;
    return (e > 0.995 && e < 1.005 || !isFinite(e) || Math.abs(t.width - l.offsetWidth) < 1) && (e = 1), (n > 0.995 && n < 1.005 || !isFinite(n) || Math.abs(t.height - l.offsetHeight) < 1) && (n = 1), {
      scaleX: e,
      scaleY: n
    };
  }
  function wM(l, t, e, n, r, o, u, f) {
    let h = l.ownerDocument, g = h.defaultView || window;
    for (let p = l, y = false; p && !y; ) if (p.nodeType == 1) {
      let v, S = p == h.body, w = 1, C = 1;
      if (S) v = xM(g);
      else {
        if (/^(fixed|sticky)$/.test(getComputedStyle(p).position) && (y = true), p.scrollHeight <= p.clientHeight && p.scrollWidth <= p.clientWidth) {
          p = p.assignedSlot || p.parentNode;
          continue;
        }
        let j = p.getBoundingClientRect();
        ({ scaleX: w, scaleY: C } = _v(p, j)), v = {
          left: j.left,
          right: j.left + p.clientWidth * w,
          top: j.top,
          bottom: j.top + p.clientHeight * C
        };
      }
      let _ = 0, O = 0;
      if (r == "nearest") t.top < v.top ? (O = t.top - (v.top + u), e > 0 && t.bottom > v.bottom + O && (O = t.bottom - v.bottom + u)) : t.bottom > v.bottom && (O = t.bottom - v.bottom + u, e < 0 && t.top - O < v.top && (O = t.top - (v.top + u)));
      else {
        let j = t.bottom - t.top, L = v.bottom - v.top;
        O = (r == "center" && j <= L ? t.top + j / 2 - L / 2 : r == "start" || r == "center" && e < 0 ? t.top - u : t.bottom - L + u) - v.top;
      }
      if (n == "nearest" ? t.left < v.left ? (_ = t.left - (v.left + o), e > 0 && t.right > v.right + _ && (_ = t.right - v.right + o)) : t.right > v.right && (_ = t.right - v.right + o, e < 0 && t.left < v.left + _ && (_ = t.left - (v.left + o))) : _ = (n == "center" ? t.left + (t.right - t.left) / 2 - (v.right - v.left) / 2 : n == "start" == f ? t.left - o : t.right - (v.right - v.left) + o) - v.left, _ || O) if (S) g.scrollBy(_, O);
      else {
        let j = 0, L = 0;
        if (O) {
          let Q = p.scrollTop;
          p.scrollTop += O / C, L = (p.scrollTop - Q) * C;
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
        }, j && Math.abs(j - _) < 1 && (n = "nearest"), L && Math.abs(L - O) < 1 && (r = "nearest");
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
  function AM(l) {
    let t = l.ownerDocument, e, n;
    for (let r = l.parentNode; r && !(r == t.body || e && n); ) if (r.nodeType == 1) !n && r.scrollHeight > r.clientHeight && (n = r), !e && r.scrollWidth > r.clientWidth && (e = r), r = r.assignedSlot || r.parentNode;
    else if (r.nodeType == 11) r = r.host;
    else break;
    return {
      x: e,
      y: n
    };
  }
  class CM {
    constructor() {
      this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
    }
    eq(t) {
      return this.anchorNode == t.anchorNode && this.anchorOffset == t.anchorOffset && this.focusNode == t.focusNode && this.focusOffset == t.focusOffset;
    }
    setRange(t) {
      let { anchorNode: e, focusNode: n } = t;
      this.set(e, Math.min(t.anchorOffset, e ? Ii(e) : 0), n, Math.min(t.focusOffset, n ? Ii(n) : 0));
    }
    set(t, e, n, r) {
      this.anchorNode = t, this.anchorOffset = e, this.focusNode = n, this.focusOffset = r;
    }
  }
  let El = null;
  F.safari && F.safari_version >= 26 && (El = false);
  function Tv(l) {
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
        let n = t[e++], r = t[e++], o = t[e++];
        n.scrollTop != r && (n.scrollTop = r), n.scrollLeft != o && (n.scrollLeft = o);
      }
    }
  }
  let Cb;
  function ql(l, t, e = t) {
    let n = Cb || (Cb = document.createRange());
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
    let o = new KeyboardEvent("keydown", r);
    o.synthetic = true, l.dispatchEvent(o);
    let u = new KeyboardEvent("keyup", r);
    return u.synthetic = true, l.dispatchEvent(u), o.defaultPrevented || u.defaultPrevented;
  }
  function MM(l) {
    for (; l; ) {
      if (l && (l.nodeType == 9 || l.nodeType == 11 && l.host)) return l;
      l = l.assignedSlot || l.parentNode;
    }
    return null;
  }
  function kv(l) {
    for (; l.attributes.length; ) l.removeAttributeNode(l.attributes[0]);
  }
  function _M(l, t) {
    let e = t.focusNode, n = t.focusOffset;
    if (!e || t.anchorNode != e || t.anchorOffset != n) return false;
    for (n = Math.min(n, Ii(e)); ; ) if (n) {
      if (e.nodeType != 1) return false;
      let r = e.childNodes[n - 1];
      r.contentEditable == "false" ? n-- : (e = r, n = Ii(e));
    } else {
      if (e == l) return true;
      n = Vl(e), e = e.parentNode;
    }
  }
  function Ov(l) {
    return l.scrollTop > Math.max(1, l.scrollHeight - l.clientHeight - 4);
  }
  function Dv(l, t) {
    for (let e = l, n = t; ; ) {
      if (e.nodeType == 3 && n > 0) return {
        node: e,
        offset: n
      };
      if (e.nodeType == 1 && n > 0) {
        if (e.contentEditable == "false") return null;
        e = e.childNodes[n - 1], n = Ii(e);
      } else if (e.parentNode && !Yu(e)) n = Vl(e), e = e.parentNode;
      else return null;
    }
  }
  function Ev(l, t) {
    for (let e = l, n = t; ; ) {
      if (e.nodeType == 3 && n < e.nodeValue.length) return {
        node: e,
        offset: n
      };
      if (e.nodeType == 1 && n < e.childNodes.length) {
        if (e.contentEditable == "false") return null;
        e = e.childNodes[n], n = 0;
      } else if (e.parentNode && !Yu(e)) n = Vl(e) + 1, e = e.parentNode;
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
  const _m = [];
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
        let n = this.dom, r = null, o;
        for (let u of this.children) {
          if (u.flags & 7) {
            if (!u.dom && (o = r ? r.nextSibling : n.firstChild)) {
              let f = jt.get(o);
              (!f || !f.parent && f.canReuseDOM(u)) && u.reuseDOM(o);
            }
            u.sync(t, e), u.flags &= -8;
          }
          if (o = r ? r.nextSibling : n.firstChild, e && !e.written && e.node == n && o != u.dom && (e.written = true), u.dom.parentNode == n) for (; o && o != u.dom; ) o = Mb(o);
          else n.insertBefore(u.dom, o);
          r = u.dom;
        }
        for (o = r ? r.nextSibling : n.firstChild, o && e && e.node == n && (e.written = true); o; ) o = Mb(o);
      } else if (this.flags & 1) for (let n of this.children) n.flags & 7 && (n.sync(t, e), n.flags &= -8);
    }
    reuseDOM(t) {
    }
    localPosFromDOM(t, e) {
      let n;
      if (t == this.dom) n = this.dom.childNodes[e];
      else {
        let r = Ii(t) == 0 ? 0 : e == 0 ? -1 : 1;
        for (; ; ) {
          let o = t.parentNode;
          if (o == this.dom) break;
          r == 0 && o.firstChild != o.lastChild && (t == o.firstChild ? r = -1 : r = 1), t = o;
        }
        r < 0 ? n = t : n = t.nextSibling;
      }
      if (n == this.dom.firstChild) return 0;
      for (; n && !jt.get(n); ) n = n.nextSibling;
      if (!n) return this.length;
      for (let r = 0, o = 0; ; r++) {
        let u = this.children[r];
        if (u.dom == n) return o;
        o += u.length + u.breakAfter;
      }
    }
    domBoundsAround(t, e, n = 0) {
      let r = -1, o = -1, u = -1, f = -1;
      for (let h = 0, g = n, p = n; h < this.children.length; h++) {
        let y = this.children[h], v = g + y.length;
        if (g < t && v > e) return y.domBoundsAround(t, e, g);
        if (v >= t && r == -1 && (r = h, o = g), g > e && y.dom.parentNode == this.dom) {
          u = h, f = p;
          break;
        }
        p = v, g = v + y.breakAfter;
      }
      return {
        from: o,
        to: f < 0 ? n + this.length : f,
        startDOM: (r ? this.children[r - 1].dom.nextSibling : null) || this.dom.firstChild,
        endDOM: u < this.children.length && u >= 0 ? this.children[u].dom : null
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
    replaceChildren(t, e, n = _m) {
      this.markDirty();
      for (let r = t; r < e; r++) {
        let o = this.children[r];
        o.parent == this && n.indexOf(o) < 0 && o.destroy();
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
      return new Bv(this.children, t, this.children.length);
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
    merge(t, e, n, r, o, u) {
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
  function Mb(l) {
    let t = l.nextSibling;
    return l.parentNode.removeChild(l), t;
  }
  class Bv {
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
  function Rv(l, t, e, n, r, o, u, f, h) {
    let { children: g } = l, p = g.length ? g[t] : null, y = o.length ? o[o.length - 1] : null, v = y ? y.breakAfter : u;
    if (!(t == n && p && !u && !v && o.length < 2 && p.merge(e, r, o.length ? y : null, e == 0, f, h))) {
      if (n < g.length) {
        let S = g[n];
        S && (r < S.length || S.breakAfter && (y == null ? void 0 : y.breakAfter)) ? (t == n && (S = S.split(r), r = 0), !v && y && S.merge(0, r, y, true, 0, h) ? o[o.length - 1] = S : ((r || S.children.length && !S.children[0].length) && S.merge(0, r, null, false, 0, h), o.push(S))) : (S == null ? void 0 : S.breakAfter) && (y ? y.breakAfter = 1 : u = 1), n++;
      }
      for (p && (p.breakAfter = u, e > 0 && (!u && o.length && p.merge(e, p.length, o[0], false, f, 0) ? p.breakAfter = o.shift().breakAfter : (e < p.length || p.children.length && p.children[p.children.length - 1].length == 0) && p.merge(e, p.length, null, false, f, 0), t++)); t < n && o.length; ) if (g[n - 1].become(o[o.length - 1])) n--, o.pop(), h = o.length ? 0 : f;
      else if (g[t].become(o[0])) t++, o.shift(), f = o.length ? 0 : h;
      else break;
      !o.length && t && n < g.length && !g[t - 1].breakAfter && g[n].merge(0, 0, g[t - 1], false, f, h) && t--, (t < n || o.length) && l.replaceChildren(t, n, o);
    }
  }
  function zv(l, t, e, n, r, o) {
    let u = l.childCursor(), { i: f, off: h } = u.findPos(e, 1), { i: g, off: p } = u.findPos(t, -1), y = t - e;
    for (let v of n) y += v.length;
    l.length += y, Rv(l, g, p, f, h, n, 0, r, o);
  }
  const TM = 256;
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
      return this.flags & 8 || n && (!(n instanceof Ei) || this.length - (e - t) + n.length > TM || n.flags & 8) ? false : (this.text = this.text.slice(0, t) + (n ? n.text : "") + this.text.slice(e), this.markDirty(), true);
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
      return kM(this.dom, t, e);
    }
  }
  class An extends jt {
    constructor(t, e = [], n = 0) {
      super(), this.mark = t, this.children = e, this.length = n;
      for (let r of e) r.setParent(this);
    }
    setAttrs(t) {
      if (kv(t), this.mark.class && (t.className = this.mark.class), this.mark.attrs) for (let e in this.mark.attrs) t.setAttribute(e, this.mark.attrs[e]);
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
    merge(t, e, n, r, o, u) {
      return n && (!(n instanceof An && n.mark.eq(this.mark)) || t && o <= 0 || e < this.length && u <= 0) ? false : (zv(this, t, e, n ? n.children.slice() : [], o - 1, u - 1), this.markDirty(), true);
    }
    split(t) {
      let e = [], n = 0, r = -1, o = 0;
      for (let f of this.children) {
        let h = n + f.length;
        h > t && e.push(n < t ? f.split(t - n) : f), r < 0 && n >= t && (r = o), n = h, o++;
      }
      let u = this.length - t;
      return this.length = t, r > -1 && (this.children.length = r, this.markDirty()), new An(this.mark, e, u);
    }
    domAtPos(t) {
      return Nv(this, t);
    }
    coordsAt(t, e) {
      return Hv(this, t, e);
    }
  }
  function kM(l, t, e) {
    let n = l.nodeValue.length;
    t > n && (t = n);
    let r = t, o = t, u = 0;
    t == 0 && e < 0 || t == n && e >= 0 ? F.chrome || F.gecko || (t ? (r--, u = 1) : o < n && (o++, u = -1)) : e < 0 ? r-- : o < n && o++;
    let f = ql(l, r, o).getClientRects();
    if (!f.length) return null;
    let h = f[(u ? u < 0 : e >= 0) ? 0 : f.length - 1];
    return F.safari && !u && h.width == 0 && (h = Array.prototype.find.call(f, (g) => g.width) || h), u ? Do(h, u < 0) : h || null;
  }
  class Sn extends jt {
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
    merge(t, e, n, r, o, u) {
      return n && (!(n instanceof Sn) || !this.widget.compare(n.widget) || t > 0 && o <= 0 || e < this.length && u <= 0) ? false : (this.length = t + (n ? n.length : 0) + (this.length - e), true);
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
      if (this.length == 0) return Bt.empty;
      let t = this;
      for (; t.parent; ) t = t.parent;
      let { view: e } = t, n = e && e.state.doc, r = this.posAtStart;
      return n ? n.slice(r, r + this.length) : Bt.empty;
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
      let r = this.dom.getClientRects(), o = null;
      if (!r.length) return null;
      let u = this.side ? this.side < 0 : t > 0;
      for (let f = u ? r.length - 1 : 0; o = r[f], !(t > 0 ? f == 0 : f == r.length - 1 || o.top < o.bottom); f += u ? -1 : 1) ;
      return Do(o, !u);
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
  class Ks extends jt {
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
      return Bt.empty;
    }
    get isHidden() {
      return true;
    }
  }
  Ei.prototype.children = Sn.prototype.children = Ks.prototype.children = _m;
  function Nv(l, t) {
    let e = l.dom, { children: n } = l, r = 0;
    for (let o = 0; r < n.length; r++) {
      let u = n[r], f = o + u.length;
      if (!(f == o && u.getSide() <= 0)) {
        if (t > o && t < f && u.dom.parentNode == e) return u.domAtPos(t - o);
        if (t <= o) break;
        o = f;
      }
    }
    for (let o = r; o > 0; o--) {
      let u = n[o - 1];
      if (u.dom.parentNode == e) return u.domAtPos(u.length);
    }
    for (let o = r; o < n.length; o++) {
      let u = n[o];
      if (u.dom.parentNode == e) return u.domAtPos(0);
    }
    return new De(e, 0);
  }
  function Lv(l, t, e) {
    let n, { children: r } = l;
    e > 0 && t instanceof An && r.length && (n = r[r.length - 1]) instanceof An && n.mark.eq(t.mark) ? Lv(n, t.children[0], e - 1) : (r.push(t), t.setParent(l)), l.length += t.length;
  }
  function Hv(l, t, e) {
    let n = null, r = -1, o = null, u = -1;
    function f(g, p) {
      for (let y = 0, v = 0; y < g.children.length && v <= p; y++) {
        let S = g.children[y], w = v + S.length;
        w >= p && (S.children.length ? f(S, p - v) : (!o || o.isHidden && (e > 0 || DM(o, S))) && (w > p || v == w && S.getSide() > 0) ? (o = S, u = p - v) : (v < p || v == w && S.getSide() < 0 && !S.isHidden) && (n = S, r = p - v)), v = w;
      }
    }
    f(l, t);
    let h = (e < 0 ? n : o) || n || o;
    return h ? h.coordsAt(Math.max(0, h == n ? r : u), e) : OM(l);
  }
  function OM(l) {
    let t = l.dom.lastChild;
    if (!t) return l.dom.getBoundingClientRect();
    let e = Xs(t);
    return e[e.length - 1] || null;
  }
  function DM(l, t) {
    let e = l.coordsAt(0, 1), n = t.coordsAt(0, 1);
    return e && n && n.top < e.bottom;
  }
  function Kd(l, t) {
    for (let e in l) e == "class" && t.class ? t.class += " " + l.class : e == "style" && t.style ? t.style += ";" + l.style : t[e] = l[e];
    return t;
  }
  const _b = /* @__PURE__ */ Object.create(null);
  function Gu(l, t, e) {
    if (l == t) return true;
    l || (l = _b), t || (t = _b);
    let n = Object.keys(l), r = Object.keys(t);
    if (n.length - (e && n.indexOf(e) > -1 ? 1 : 0) != r.length - (e && r.indexOf(e) > -1 ? 1 : 0)) return false;
    for (let o of n) if (o != e && (r.indexOf(o) == -1 || l[o] !== t[o])) return false;
    return true;
  }
  function Qd(l, t, e) {
    let n = false;
    if (t) for (let r in t) e && r in e || (n = true, r == "style" ? l.style.cssText = "" : l.removeAttribute(r));
    if (e) for (let r in e) t && t[r] == e[r] || (n = true, r == "style" ? l.style.cssText = e[r] : l.setAttribute(r, e[r]));
    return n;
  }
  function EM(l) {
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
  class ut extends Ul {
    constructor(t, e, n, r) {
      super(), this.startSide = t, this.endSide = e, this.widget = n, this.spec = r;
    }
    get heightRelevant() {
      return false;
    }
    static mark(t) {
      return new Eo(t);
    }
    static widget(t) {
      let e = Math.max(-1e4, Math.min(1e4, t.side || 0)), n = !!t.block;
      return e += n && !t.inlineOrder ? e > 0 ? 3e8 : -4e8 : e > 0 ? 1e8 : -1e8, new ol(t, e, e, n, t.widget || null, false);
    }
    static replace(t) {
      let e = !!t.block, n, r;
      if (t.isBlockGap) n = -5e8, r = 4e8;
      else {
        let { start: o, end: u } = Uv(t, e);
        n = (o ? e ? -3e8 : -1 : 5e8) - 1, r = (u ? e ? 2e8 : 1 : -6e8) + 1;
      }
      return new ol(t, n, r, e, t.widget || null, true);
    }
    static line(t) {
      return new Bo(t);
    }
    static set(t, e = false) {
      return Et.of(t, e);
    }
    hasHeight() {
      return this.widget ? this.widget.estimatedHeight > -1 : false;
    }
  }
  ut.none = Et.empty;
  class Eo extends ut {
    constructor(t) {
      let { start: e, end: n } = Uv(t);
      super(e ? -1 : 5e8, n ? 1 : -6e8, null, t), this.tagName = t.tagName || "span", this.class = t.class || "", this.attrs = t.attributes || null;
    }
    eq(t) {
      var e, n;
      return this == t || t instanceof Eo && this.tagName == t.tagName && (this.class || ((e = this.attrs) === null || e === void 0 ? void 0 : e.class)) == (t.class || ((n = t.attrs) === null || n === void 0 ? void 0 : n.class)) && Gu(this.attrs, t.attrs, "class");
    }
    range(t, e = t) {
      if (t >= e) throw new RangeError("Mark decorations may not be empty");
      return super.range(t, e);
    }
  }
  Eo.prototype.point = false;
  class Bo extends ut {
    constructor(t) {
      super(-2e8, -2e8, null, t);
    }
    eq(t) {
      return t instanceof Bo && this.spec.class == t.spec.class && Gu(this.spec.attributes, t.spec.attributes);
    }
    range(t, e = t) {
      if (e != t) throw new RangeError("Line decoration ranges must be zero-length");
      return super.range(t, e);
    }
  }
  Bo.prototype.mapMode = He.TrackBefore;
  Bo.prototype.point = true;
  class ol extends ut {
    constructor(t, e, n, r, o, u) {
      super(e, n, o, t), this.block = r, this.isReplace = u, this.mapMode = r ? e <= 0 ? He.TrackBefore : He.TrackAfter : He.TrackDel;
    }
    get type() {
      return this.startSide != this.endSide ? Ue.WidgetRange : this.startSide <= 0 ? Ue.WidgetBefore : Ue.WidgetAfter;
    }
    get heightRelevant() {
      return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
    }
    eq(t) {
      return t instanceof ol && BM(this.widget, t.widget) && this.block == t.block && this.startSide == t.startSide && this.endSide == t.endSide;
    }
    range(t, e = t) {
      if (this.isReplace && (t > e || t == e && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
      if (!this.isReplace && e != t) throw new RangeError("Widget decorations can only have zero-length ranges");
      return super.range(t, e);
    }
  }
  ol.prototype.point = true;
  function Uv(l, t = false) {
    let { inclusiveStart: e, inclusiveEnd: n } = l;
    return e == null && (e = l.inclusive), n == null && (n = l.inclusive), {
      start: e ?? t,
      end: n ?? t
    };
  }
  function BM(l, t) {
    return l == t || !!(l && t && l.compare(t));
  }
  function Bu(l, t, e, n = 0) {
    let r = e.length - 1;
    r >= 0 && e[r] + n >= l ? e[r] = Math.max(e[r], t) : e.push(l, t);
  }
  class fe extends jt {
    constructor() {
      super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0;
    }
    merge(t, e, n, r, o, u) {
      if (n) {
        if (!(n instanceof fe)) return false;
        this.dom || n.transferDOM(this);
      }
      return r && this.setDeco(n ? n.attrs : null), zv(this, t, e, n ? n.children.slice() : [], o, u), true;
    }
    split(t) {
      let e = new fe();
      if (e.breakAfter = this.breakAfter, this.length == 0) return e;
      let { i: n, off: r } = this.childPos(t);
      r && (e.append(this.children[n].split(r), 0), this.children[n].merge(r, this.children[n].length, null, false, 0, 0), n++);
      for (let o = n; o < this.children.length; o++) e.append(this.children[o], 0);
      for (; n > 0 && this.children[n - 1].length == 0; ) this.children[--n].destroy();
      return this.children.length = n, this.markDirty(), this.length = t, e;
    }
    transferDOM(t) {
      this.dom && (this.markDirty(), t.setDOM(this.dom), t.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs, this.prevAttrs = void 0, this.dom = null);
    }
    setDeco(t) {
      Gu(this.attrs, t) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = t);
    }
    append(t, e) {
      Lv(this, t, e);
    }
    addLineDeco(t) {
      let e = t.spec.attributes, n = t.spec.class;
      e && (this.attrs = Kd(e, this.attrs || {})), n && (this.attrs = Kd({
        class: n
      }, this.attrs || {}));
    }
    domAtPos(t) {
      return Nv(this, t);
    }
    reuseDOM(t) {
      t.nodeName == "DIV" && (this.setDOM(t), this.flags |= 6);
    }
    sync(t, e) {
      var n;
      this.dom ? this.flags & 4 && (kv(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), this.prevAttrs !== void 0 && (Qd(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(t, e);
      let r = this.dom.lastChild;
      for (; r && jt.get(r) instanceof An; ) r = r.lastChild;
      if (!r || !this.length || r.nodeName != "BR" && ((n = jt.get(r)) === null || n === void 0 ? void 0 : n.isEditable) == false && (!F.ios || !this.children.some((o) => o instanceof Ei))) {
        let o = document.createElement("BR");
        o.cmIgnore = true, this.dom.appendChild(o);
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
      let n = Hv(this, t, e);
      if (!this.children.length && n && this.parent) {
        let { heightOracle: r } = this.parent.view.viewState, o = n.bottom - n.top;
        if (Math.abs(o - r.lineHeight) < 2 && r.textHeight < o) {
          let u = (o - r.textHeight) / 2;
          return {
            top: n.top + u,
            bottom: n.bottom - u,
            left: n.left,
            right: n.left
          };
        }
      }
      return n;
    }
    become(t) {
      return t instanceof fe && this.children.length == 0 && t.children.length == 0 && Gu(this.attrs, t.attrs) && this.breakAfter == t.breakAfter;
    }
    covers() {
      return true;
    }
    static find(t, e) {
      for (let n = 0, r = 0; n < t.children.length; n++) {
        let o = t.children[n], u = r + o.length;
        if (u >= e) {
          if (o instanceof fe) return o;
          if (u > e) break;
        }
        r = u + o.breakAfter;
      }
      return null;
    }
  }
  class xn extends jt {
    constructor(t, e, n) {
      super(), this.widget = t, this.length = e, this.deco = n, this.breakAfter = 0, this.prevWidget = null;
    }
    merge(t, e, n, r, o, u) {
      return n && (!(n instanceof xn) || !this.widget.compare(n.widget) || t > 0 && o <= 0 || e < this.length && u <= 0) ? false : (this.length = t + (n ? n.length : 0) + (this.length - e), true);
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
      return _m;
    }
    sync(t) {
      (!this.dom || !this.widget.updateDOM(this.dom, t)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(t)), this.widget.editable || (this.dom.contentEditable = "false"));
    }
    get overrideDOMText() {
      return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : Bt.empty;
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
      return n || (this.widget instanceof Zd ? null : Do(this.dom.getBoundingClientRect(), this.length ? t == 0 : e <= 0));
    }
    destroy() {
      super.destroy(), this.dom && this.widget.destroy(this.dom);
    }
    covers(t) {
      let { startSide: e, endSide: n } = this.deco;
      return e == n ? false : t < 0 ? e < 0 : n > 0;
    }
  }
  class Zd extends Mn {
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
  class uo {
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
      this.pendingBuffer && (this.curLine.append(ou(new Ks(-1), t), t.length), this.pendingBuffer = 0);
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
          let { value: u, lineBreak: f, done: h } = this.cursor.next(this.skip);
          if (this.skip = 0, h) throw new Error("Ran out of text content when drawing inline views");
          if (f) {
            this.posCovered() || this.getLine(), this.content.length ? this.content[this.content.length - 1].breakAfter = 1 : this.breakAtStart = 1, this.flushBuffer(), this.curLine = null, this.atCursorPos = true, t--;
            continue;
          } else this.text = u, this.textOff = 0;
        }
        let r = Math.min(this.text.length - this.textOff, t), o = Math.min(r, 512);
        this.flushBuffer(e.slice(e.length - n)), this.getLine().append(ou(new Ei(this.text.slice(this.textOff, this.textOff + o)), e), n), this.atCursorPos = true, this.textOff += o, t -= o, n = r <= o ? 0 : e.length;
      }
    }
    span(t, e, n, r) {
      this.buildText(e - t, n, r), this.pos = e, this.openStart < 0 && (this.openStart = r);
    }
    point(t, e, n, r, o, u) {
      if (this.disallowBlockEffectsFor[u] && n instanceof ol) {
        if (n.block) throw new RangeError("Block decorations may not be specified via plugins");
        if (e > this.doc.lineAt(this.pos).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
      }
      let f = e - t;
      if (n instanceof ol) if (n.block) n.startSide > 0 && !this.posCovered() && this.getLine(), this.addBlockWidget(new xn(n.widget || Qs.block, f, n));
      else {
        let h = Sn.create(n.widget || Qs.inline, f, f ? 0 : n.startSide), g = this.atCursorPos && !h.isEditable && o <= r.length && (t < e || n.startSide > 0), p = !h.isEditable && (t < e || o > r.length || n.startSide <= 0), y = this.getLine();
        this.pendingBuffer == 2 && !g && !h.isEditable && (this.pendingBuffer = 0), this.flushBuffer(r), g && (y.append(ou(new Ks(1), r), o), o = r.length + Math.max(0, o - r.length)), y.append(ou(h, r), o), this.atCursorPos = p, this.pendingBuffer = p ? t < e || o > r.length ? 1 : 2 : 0, this.pendingBuffer && (this.bufferMarks = r.slice());
      }
      else this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(n);
      f && (this.textOff + f <= this.text.length ? this.textOff += f : (this.skip += f - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = e), this.openStart < 0 && (this.openStart = o);
    }
    static build(t, e, n, r, o) {
      let u = new uo(t, e, n, o);
      return u.openEnd = Et.spans(r, e, n, u), u.openStart < 0 && (u.openStart = u.openEnd), u.finish(u.openEnd), u;
    }
  }
  function ou(l, t) {
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
  var Wt = (function(l) {
    return l[l.LTR = 0] = "LTR", l[l.RTL = 1] = "RTL", l;
  })(Wt || (Wt = {}));
  const jl = Wt.LTR, Tm = Wt.RTL;
  function Vv(l) {
    let t = [];
    for (let e = 0; e < l.length; e++) t.push(1 << +l[e]);
    return t;
  }
  const RM = Vv("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), zM = Vv("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), Wd = /* @__PURE__ */ Object.create(null), Vi = [];
  for (let l of [
    "()",
    "[]",
    "{}"
  ]) {
    let t = l.charCodeAt(0), e = l.charCodeAt(1);
    Wd[t] = e, Wd[e] = -t;
  }
  function qv(l) {
    return l <= 247 ? RM[l] : 1424 <= l && l <= 1524 ? 2 : 1536 <= l && l <= 1785 ? zM[l - 1536] : 1774 <= l && l <= 2220 ? 4 : 8192 <= l && l <= 8204 ? 256 : 64336 <= l && l <= 65023 ? 4 : 1;
  }
  const NM = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
  class el {
    get dir() {
      return this.level % 2 ? Tm : jl;
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
      let o = -1;
      for (let u = 0; u < t.length; u++) {
        let f = t[u];
        if (f.from <= e && f.to >= e) {
          if (f.level == n) return u;
          (o < 0 || (r != 0 ? r < 0 ? f.from < e : f.to > e : t[o].level > f.level)) && (o = u);
        }
      }
      if (o < 0) throw new RangeError("Index out of range");
      return o;
    }
  }
  function jv(l, t) {
    if (l.length != t.length) return false;
    for (let e = 0; e < l.length; e++) {
      let n = l[e], r = t[e];
      if (n.from != r.from || n.to != r.to || n.direction != r.direction || !jv(n.inner, r.inner)) return false;
    }
    return true;
  }
  const Xt = [];
  function LM(l, t, e, n, r) {
    for (let o = 0; o <= n.length; o++) {
      let u = o ? n[o - 1].to : t, f = o < n.length ? n[o].from : e, h = o ? 256 : r;
      for (let g = u, p = h, y = h; g < f; g++) {
        let v = qv(l.charCodeAt(g));
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
  function HM(l, t, e, n, r) {
    let o = r == 1 ? 2 : 1;
    for (let u = 0, f = 0, h = 0; u <= n.length; u++) {
      let g = u ? n[u - 1].to : t, p = u < n.length ? n[u].from : e;
      for (let y = g, v, S, w; y < p; y++) if (S = Wd[v = l.charCodeAt(y)]) if (S < 0) {
        for (let C = f - 3; C >= 0; C -= 3) if (Vi[C + 1] == -S) {
          let _ = Vi[C + 2], O = _ & 2 ? r : _ & 4 ? _ & 1 ? o : r : 0;
          O && (Xt[y] = Xt[Vi[C]] = O), f = C;
          break;
        }
      } else {
        if (Vi.length == 189) break;
        Vi[f++] = y, Vi[f++] = v, Vi[f++] = h;
      }
      else if ((w = Xt[y]) == 2 || w == 1) {
        let C = w == r;
        h = C ? 0 : 1;
        for (let _ = f - 3; _ >= 0; _ -= 3) {
          let O = Vi[_ + 2];
          if (O & 2) break;
          if (C) Vi[_ + 2] |= 2;
          else {
            if (O & 4) break;
            Vi[_ + 2] |= 4;
          }
        }
      }
    }
  }
  function UM(l, t, e, n) {
    for (let r = 0, o = n; r <= e.length; r++) {
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
          let y = o == 1, v = (p < t ? Xt[p] : n) == 1, S = y == v ? y ? 1 : 2 : n;
          for (let w = p, C = r, _ = C ? e[C - 1].to : l; w > h; ) w == _ && (w = e[--C].from, _ = C ? e[C - 1].to : l), Xt[--w] = S;
          h = p;
        } else o = g, h++;
      }
    }
  }
  function Jd(l, t, e, n, r, o, u) {
    let f = n % 2 ? 2 : 1;
    if (n % 2 == r % 2) for (let h = t, g = 0; h < e; ) {
      let p = true, y = false;
      if (g == o.length || h < o[g].from) {
        let C = Xt[h];
        C != f && (p = false, y = C == 16);
      }
      let v = !p && f == 1 ? [] : null, S = p ? n : n + 1, w = h;
      t: for (; ; ) if (g < o.length && w == o[g].from) {
        if (y) break t;
        let C = o[g];
        if (!p) for (let _ = C.to, O = g + 1; ; ) {
          if (_ == e) break t;
          if (O < o.length && o[O].from == _) _ = o[O++].to;
          else {
            if (Xt[_] == f) break t;
            break;
          }
        }
        if (g++, v) v.push(C);
        else {
          C.from > h && u.push(new el(h, C.from, S));
          let _ = C.direction == jl != !(S % 2);
          Fd(l, _ ? n + 1 : n, r, C.inner, C.from, C.to, u), h = C.to;
        }
        w = C.to;
      } else {
        if (w == e || (p ? Xt[w] != f : Xt[w] == f)) break;
        w++;
      }
      v ? Jd(l, h, w, n + 1, r, v, u) : h < w && u.push(new el(h, w, S)), h = w;
    }
    else for (let h = e, g = o.length; h > t; ) {
      let p = true, y = false;
      if (!g || h > o[g - 1].to) {
        let C = Xt[h - 1];
        C != f && (p = false, y = C == 16);
      }
      let v = !p && f == 1 ? [] : null, S = p ? n : n + 1, w = h;
      t: for (; ; ) if (g && w == o[g - 1].to) {
        if (y) break t;
        let C = o[--g];
        if (!p) for (let _ = C.from, O = g; ; ) {
          if (_ == t) break t;
          if (O && o[O - 1].to == _) _ = o[--O].from;
          else {
            if (Xt[_ - 1] == f) break t;
            break;
          }
        }
        if (v) v.push(C);
        else {
          C.to < h && u.push(new el(C.to, h, S));
          let _ = C.direction == jl != !(S % 2);
          Fd(l, _ ? n + 1 : n, r, C.inner, C.from, C.to, u), h = C.from;
        }
        w = C.from;
      } else {
        if (w == t || (p ? Xt[w - 1] != f : Xt[w - 1] == f)) break;
        w--;
      }
      v ? Jd(l, w, h, n + 1, r, v, u) : w < h && u.push(new el(w, h, S)), h = w;
    }
  }
  function Fd(l, t, e, n, r, o, u) {
    let f = t % 2 ? 2 : 1;
    LM(l, r, o, n, f), HM(l, r, o, n, f), UM(r, o, n, f), Jd(l, r, o, t, e, n, u);
  }
  function VM(l, t, e) {
    if (!l) return [
      new el(0, 0, t == Tm ? 1 : 0)
    ];
    if (t == jl && !e.length && !NM.test(l)) return Yv(l.length);
    if (e.length) for (; l.length > Xt.length; ) Xt[Xt.length] = 256;
    let n = [], r = t == jl ? 0 : 1;
    return Fd(l, r, r, e, 0, l.length, n), n;
  }
  function Yv(l) {
    return [
      new el(0, l, 0)
    ];
  }
  let Gv = "";
  function qM(l, t, e, n, r) {
    var o;
    let u = n.head - l.from, f = el.find(t, u, (o = n.bidiLevel) !== null && o !== void 0 ? o : -1, n.assoc), h = t[f], g = h.side(r, e);
    if (u == g) {
      let v = f += r ? 1 : -1;
      if (v < 0 || v >= t.length) return null;
      h = t[f = v], u = h.side(!r, e), g = h.side(r, e);
    }
    let p = _e(l.text, u, h.forward(r, e));
    (p < h.from || p > h.to) && (p = g), Gv = l.text.slice(Math.min(u, p), Math.max(u, p));
    let y = f == (r ? t.length - 1 : 0) ? null : t[f + (r ? 1 : -1)];
    return y && p == g && y.level + (r ? 0 : 1) < h.level ? K.cursor(y.side(!r, e) + l.from, y.forward(r, e) ? 1 : -1, y.level) : K.cursor(p + l.from, h.forward(r, e) ? -1 : 1, h.level);
  }
  function jM(l, t, e) {
    for (let n = t; n < e; n++) {
      let r = qv(l.charCodeAt(n));
      if (r == 1) return jl;
      if (r == 2 || r == 4) return Tm;
    }
    return jl;
  }
  const Xv = et.define(), Kv = et.define(), Qv = et.define(), Zv = et.define(), Id = et.define(), Wv = et.define(), Jv = et.define(), km = et.define(), Om = et.define(), Fv = et.define({
    combine: (l) => l.some((t) => t)
  }), Iv = et.define({
    combine: (l) => l.some((t) => t)
  }), Pv = et.define();
  class Hs {
    constructor(t, e = "nearest", n = "nearest", r = 5, o = 5, u = false) {
      this.range = t, this.y = e, this.x = n, this.yMargin = r, this.xMargin = o, this.isSnapshot = u;
    }
    map(t) {
      return t.empty ? this : new Hs(this.range.map(t), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
    }
    clip(t) {
      return this.range.to <= t.doc.length ? this : new Hs(K.cursor(t.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
    }
  }
  const au = St.define({
    map: (l, t) => l.map(t)
  }), $v = St.define();
  function Je(l, t, e) {
    let n = l.facet(Zv);
    n.length ? n[0](t) : window.onerror && window.onerror(String(t), e, void 0, void 0, t) || (e ? console.error(e + ":", t) : console.error(t));
  }
  const vn = et.define({
    combine: (l) => l.length ? l[0] : true
  });
  let YM = 0;
  const Es = et.define({
    combine(l) {
      return l.filter((t, e) => {
        for (let n = 0; n < e; n++) if (l[n].plugin == t.plugin) return false;
        return true;
      });
    }
  });
  class $t {
    constructor(t, e, n, r, o) {
      this.id = t, this.create = e, this.domEventHandlers = n, this.domEventObservers = r, this.baseExtensions = o(this), this.extension = this.baseExtensions.concat(Es.of({
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
      const { eventHandlers: n, eventObservers: r, provide: o, decorations: u } = e || {};
      return new $t(YM++, t, n, r, (f) => {
        let h = [];
        return u && h.push(bo.of((g) => {
          let p = g.plugin(f);
          return p ? u(p) : ut.none;
        })), o && h.push(o(f)), h;
      });
    }
    static fromClass(t, e) {
      return $t.define((n, r) => new t(n, r), e);
    }
  }
  class $h {
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
  const tS = et.define(), Dm = et.define(), bo = et.define(), eS = et.define(), Ro = et.define(), iS = et.define();
  function Tb(l, t) {
    let e = l.state.facet(iS);
    if (!e.length) return e;
    let n = e.map((o) => o instanceof Function ? o(l) : o), r = [];
    return Et.spans(n, t.from, t.to, {
      point() {
      },
      span(o, u, f, h) {
        let g = o - t.from, p = u - t.from, y = r;
        for (let v = f.length - 1; v >= 0; v--, h--) {
          let S = f[v].spec.bidiIsolate, w;
          if (S == null && (S = jM(t.text, g, p)), h > 0 && y.length && (w = y[y.length - 1]).to == g && w.direction == S) w.to = p, y = w.inner;
          else {
            let C = {
              from: g,
              to: p,
              direction: S,
              inner: []
            };
            y.push(C), y = C.inner;
          }
        }
      }
    }), r;
  }
  const nS = et.define();
  function Em(l) {
    let t = 0, e = 0, n = 0, r = 0;
    for (let o of l.state.facet(nS)) {
      let u = o(l);
      u && (u.left != null && (t = Math.max(t, u.left)), u.right != null && (e = Math.max(e, u.right)), u.top != null && (n = Math.max(n, u.top)), u.bottom != null && (r = Math.max(r, u.bottom)));
    }
    return {
      left: t,
      right: e,
      top: n,
      bottom: r
    };
  }
  const to = et.define();
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
      for (let r = 0, o = 0, u = 0, f = 0; ; r++) {
        let h = r == t.length ? null : t[r], g = u - f, p = h ? h.fromB : 1e9;
        for (; o < e.length && e[o] < p; ) {
          let y = e[o], v = e[o + 1], S = Math.max(f, y), w = Math.min(p, v);
          if (S <= w && new Ai(S + g, w + g, S, w).addToSet(n), v > p) break;
          o += 2;
        }
        if (!h) return n;
        new Ai(h.fromA, h.toA, h.fromB, h.toB).addToSet(n), u = h.toA, f = h.toB;
      }
    }
  }
  class Xu {
    constructor(t, e, n) {
      this.view = t, this.state = e, this.transactions = n, this.flags = 0, this.startState = t.state, this.changes = de.empty(this.startState.doc.length);
      for (let o of n) this.changes = this.changes.compose(o.changes);
      let r = [];
      this.changes.iterChangedRanges((o, u, f, h) => r.push(new Ai(o, u, f, h))), this.changedRanges = r;
    }
    static create(t, e, n) {
      return new Xu(t, e, n);
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
  class kb extends jt {
    get length() {
      return this.view.state.doc.length;
    }
    constructor(t) {
      super(), this.view = t, this.decorations = [], this.dynamicDecorationMap = [
        false
      ], this.domChanged = null, this.hasComposition = null, this.markedForComposition = /* @__PURE__ */ new Set(), this.editContextFormatting = ut.none, this.lastCompositionAfterCursor = false, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = false, this.lastUpdate = Date.now(), this.setDOM(t.contentDOM), this.children = [
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
      this.view.inputState.composing >= 0 && !this.view.observer.editContext && (!((e = this.domChanged) === null || e === void 0) && e.newSel ? r = this.domChanged.newSel.head : !JM(t.changes, this.hasComposition) && !t.selectionSet && (r = t.state.selection.main.head));
      let o = r > -1 ? XM(this.view, t.changes, r) : null;
      if (this.domChanged = null, this.hasComposition) {
        this.markedForComposition.clear();
        let { from: g, to: p } = this.hasComposition;
        n = new Ai(g, p, t.changes.mapPos(g, -1), t.changes.mapPos(p, 1)).addToSet(n.slice());
      }
      this.hasComposition = o ? {
        from: o.range.fromB,
        to: o.range.toB
      } : null, (F.ie || F.chrome) && !o && t && t.state.doc.lines != t.startState.doc.lines && (this.forceSelection = true);
      let u = this.decorations, f = this.updateDeco(), h = ZM(u, f, t.changes);
      return n = Ai.extendWithRanges(n, h), !(this.flags & 7) && n.length == 0 ? false : (this.updateInner(n, t.startState.doc.length, o), t.transactions.length && (this.lastUpdate = Date.now()), true);
    }
    updateInner(t, e, n) {
      this.view.viewState.mustMeasureContent = true, this.updateChildren(t, e, n);
      let { observer: r } = this.view;
      r.ignore(() => {
        this.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
        let u = F.chrome || F.ios ? {
          node: r.selectionRange.focusNode,
          written: false
        } : void 0;
        this.sync(this.view, u), this.flags &= -8, u && (u.written || r.selectionRange.focusNode != u.node) && (this.forceSelection = true), this.dom.style.height = "";
      }), this.markedForComposition.forEach((u) => u.flags &= -9);
      let o = [];
      if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length) for (let u of this.children) u instanceof xn && u.widget instanceof Zd && o.push(u.dom);
      r.updateGaps(o);
    }
    updateChildren(t, e, n) {
      let r = n ? n.range.addToSet(t.slice()) : t, o = this.childCursor(e);
      for (let u = r.length - 1; ; u--) {
        let f = u >= 0 ? r[u] : null;
        if (!f) break;
        let { fromA: h, toA: g, fromB: p, toB: y } = f, v, S, w, C;
        if (n && n.range.fromB < y && n.range.toB > p) {
          let Q = uo.build(this.view.state.doc, p, n.range.fromB, this.decorations, this.dynamicDecorationMap), N = uo.build(this.view.state.doc, n.range.toB, y, this.decorations, this.dynamicDecorationMap);
          S = Q.breakAtStart, w = Q.openStart, C = N.openEnd;
          let G = this.compositionView(n);
          N.breakAtStart ? G.breakAfter = 1 : N.content.length && G.merge(G.length, G.length, N.content[0], false, N.openStart, 0) && (G.breakAfter = N.content[0].breakAfter, N.content.shift()), Q.content.length && G.merge(0, 0, Q.content[Q.content.length - 1], true, 0, Q.openEnd) && Q.content.pop(), v = Q.content.concat(G).concat(N.content);
        } else ({ content: v, breakAtStart: S, openStart: w, openEnd: C } = uo.build(this.view.state.doc, p, y, this.decorations, this.dynamicDecorationMap));
        let { i: _, off: O } = o.findPos(g, 1), { i: j, off: L } = o.findPos(h, -1);
        Rv(this, j, L, _, O, v, S, w, C);
      }
      n && this.fixCompositionDOM(n);
    }
    updateEditContextFormatting(t) {
      this.editContextFormatting = this.editContextFormatting.map(t.changes);
      for (let e of t.transactions) for (let n of e.effects) n.is($v) && (this.editContextFormatting = n.value);
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
      let e = (o, u) => {
        u.flags |= 8 | (u.children.some((h) => h.flags & 7) ? 1 : 0), this.markedForComposition.add(u);
        let f = jt.get(o);
        f && f != u && (f.dom = null), u.setDOM(o);
      }, n = this.childPos(t.range.fromB, 1), r = this.children[n.i];
      e(t.line, r);
      for (let o = t.marks.length - 1; o >= -1; o--) n = r.childPos(n.off, 1), r = r.children[n.i], e(o >= 0 ? t.marks[o].node : t.text, r);
    }
    updateSelection(t = false, e = false) {
      (t || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
      let n = this.view.root.activeElement, r = n == this.dom, o = !r && !(this.view.state.facet(vn) || this.dom.tabIndex > -1) && Eu(this.dom, this.view.observer.selectionRange) && !(n && this.dom.contains(n));
      if (!(r || e || o)) return;
      let u = this.forceSelection;
      this.forceSelection = false;
      let f = this.view.state.selection.main, h = this.moveToLine(this.domAtPos(f.anchor)), g = f.empty ? h : this.moveToLine(this.domAtPos(f.head));
      if (F.gecko && f.empty && !this.hasComposition && GM(h)) {
        let y = document.createTextNode("");
        this.view.observer.ignore(() => h.node.insertBefore(y, h.node.childNodes[h.offset] || null)), h = g = new De(y, 0), u = true;
      }
      let p = this.view.observer.selectionRange;
      (u || !p.focusNode || (!ao(h.node, h.offset, p.anchorNode, p.anchorOffset) || !ao(g.node, g.offset, p.focusNode, p.focusOffset)) && !this.suppressWidgetCursorChange(p, f)) && (this.view.observer.ignore(() => {
        F.android && F.chrome && this.dom.contains(p.focusNode) && WM(p.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({
          preventScroll: true
        }));
        let y = yo(this.view.root);
        if (y) if (f.empty) {
          if (F.gecko) {
            let v = KM(h.node, h.offset);
            if (v && v != 3) {
              let S = (v == 1 ? Dv : Ev)(h.node, h.offset);
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
        o && this.view.root.activeElement == this.dom && (this.dom.blur(), n && n.focus());
      }), this.view.observer.setSelectionRange(h, g)), this.impreciseAnchor = h.precise ? null : new De(p.anchorNode, p.anchorOffset), this.impreciseHead = g.precise ? null : new De(p.focusNode, p.focusOffset);
    }
    suppressWidgetCursorChange(t, e) {
      return this.hasComposition && e.empty && ao(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset) && this.posFromDOM(t.focusNode, t.focusOffset) == e.head;
    }
    enforceCursorAssoc() {
      if (this.hasComposition) return;
      let { view: t } = this, e = t.state.selection.main, n = yo(t.root), { anchorNode: r, anchorOffset: o } = t.observer.selectionRange;
      if (!n || !e.empty || !e.assoc || !n.modify) return;
      let u = fe.find(this, e.head);
      if (!u) return;
      let f = u.posAtStart;
      if (e.head == f || e.head == f + u.length) return;
      let h = this.coordsAt(e.head, -1), g = this.coordsAt(e.head, 1);
      if (!h || !g || h.bottom > g.top) return;
      let p = this.domAtPos(e.head + e.assoc);
      n.collapse(p.node, p.offset), n.modify("move", e.assoc < 0 ? "forward" : "backward", "lineboundary"), t.observer.readSelectionRange();
      let y = t.observer.selectionRange;
      t.docView.posFromDOM(y.anchorNode, y.anchorOffset) != e.from && n.collapse(r, o);
    }
    moveToLine(t) {
      let e = this.dom, n;
      if (t.node != e) return t;
      for (let r = t.offset; !n && r < e.childNodes.length; r++) {
        let o = jt.get(e.childNodes[r]);
        o instanceof fe && (n = o.domAtPos(0));
      }
      for (let r = t.offset - 1; !n && r >= 0; r--) {
        let o = jt.get(e.childNodes[r]);
        o instanceof fe && (n = o.domAtPos(o.length));
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
        if (n < r.length || r instanceof fe) break;
        e++, n = 0;
      }
      return this.children[e].domAtPos(n);
    }
    coordsAt(t, e) {
      let n = null, r = 0;
      for (let o = this.length, u = this.children.length - 1; u >= 0; u--) {
        let f = this.children[u], h = o - f.breakAfter, g = h - f.length;
        if (h < t) break;
        if (g <= t && (g < t || f.covers(-1)) && (h > t || f.covers(1)) && (!n || f instanceof fe && !(n instanceof fe && e >= 0))) n = f, r = g;
        else if (n && g == t && h == t && f instanceof xn && Math.abs(e) < 2) {
          if (f.deco.startSide < 0) break;
          u && (n = null);
        }
        o = g;
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
      let o = _e(r.text, n);
      if (o == n) return null;
      let u = ql(r.dom, n, o).getClientRects();
      for (let f = 0; f < u.length; f++) {
        let h = u[f];
        if (f == u.length - 1 || h.top < h.bottom && h.left < h.right) return h;
      }
      return null;
    }
    measureVisibleLineHeights(t) {
      let e = [], { from: n, to: r } = t, o = this.view.contentDOM.clientWidth, u = o > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, f = -1, h = this.view.textDirection == Wt.LTR;
      for (let g = 0, p = 0; p < this.children.length; p++) {
        let y = this.children[p], v = g + y.length;
        if (v > r) break;
        if (g >= n) {
          let S = y.dom.getBoundingClientRect();
          if (e.push(S.height), u) {
            let w = y.dom.lastChild, C = w ? Xs(w) : [];
            if (C.length) {
              let _ = C[C.length - 1], O = h ? _.right - S.left : S.right - _.left;
              O > f && (f = O, this.minWidth = o, this.minWidthFrom = g, this.minWidthTo = v);
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
      for (let o of this.children) if (o instanceof fe) {
        let u = o.measureTextSize();
        if (u) return u;
      }
      let t = document.createElement("div"), e, n, r;
      return t.className = "cm-line", t.style.width = "99999px", t.style.position = "absolute", t.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
        this.dom.appendChild(t);
        let o = Xs(t.firstChild)[0];
        e = t.getBoundingClientRect().height, n = o ? o.width / 27 : 7, r = o ? o.height : e, t.remove();
      }), {
        lineHeight: e,
        charWidth: n,
        textHeight: r
      };
    }
    childCursor(t = this.length) {
      let e = this.children.length;
      return e && (t -= this.children[--e].length), new Bv(this.children, t, e);
    }
    computeBlockGapDeco() {
      let t = [], e = this.view.viewState;
      for (let n = 0, r = 0; ; r++) {
        let o = r == e.viewports.length ? null : e.viewports[r], u = o ? o.from - 1 : this.length;
        if (u > n) {
          let f = (e.lineBlockAt(u).bottom - e.lineBlockAt(n).top) / this.view.scaleY;
          t.push(ut.replace({
            widget: new Zd(f),
            block: true,
            inclusive: true,
            isBlockGap: true
          }).range(n, u));
        }
        if (!o) break;
        n = o.to + 1;
      }
      return ut.set(t);
    }
    updateDeco() {
      let t = 1, e = this.view.state.facet(bo).map((o) => (this.dynamicDecorationMap[t++] = typeof o == "function") ? o(this.view) : o), n = false, r = this.view.state.facet(eS).map((o, u) => {
        let f = typeof o == "function";
        return f && (n = true), f ? o(this.view) : o;
      });
      for (r.length && (this.dynamicDecorationMap[t++] = n, e.push(Et.join(r))), this.decorations = [
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
      for (let g of this.view.state.facet(Pv)) try {
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
      let o = Em(this.view), u = {
        left: n.left - o.left,
        top: n.top - o.top,
        right: n.right + o.right,
        bottom: n.bottom + o.bottom
      }, { offsetWidth: f, offsetHeight: h } = this.view.scrollDOM;
      wM(this.view.scrollDOM, u, e.head < e.anchor ? -1 : 1, t.x, t.y, Math.max(Math.min(t.xMargin, f), -f), Math.max(Math.min(t.yMargin, h), -h), this.view.textDirection == Wt.LTR);
    }
    lineHasWidget(t) {
      let { i: e } = this.childCursor().findPos(t);
      if (e == this.children.length) return false;
      let n = (r) => r instanceof Sn || r.children.some(n);
      return n(this.children[e]);
    }
  }
  function GM(l) {
    return l.node.nodeType == 1 && l.node.firstChild && (l.offset == 0 || l.node.childNodes[l.offset - 1].contentEditable == "false") && (l.offset == l.node.childNodes.length || l.node.childNodes[l.offset].contentEditable == "false");
  }
  function lS(l, t) {
    let e = l.observer.selectionRange;
    if (!e.focusNode) return null;
    let n = Dv(e.focusNode, e.focusOffset), r = Ev(e.focusNode, e.focusOffset), o = n || r;
    if (r && n && r.node != n.node) {
      let f = jt.get(r.node);
      if (!f || f instanceof Ei && f.text != r.node.nodeValue) o = r;
      else if (l.docView.lastCompositionAfterCursor) {
        let h = jt.get(n.node);
        !h || h instanceof Ei && h.text != n.node.nodeValue || (o = r);
      }
    }
    if (l.docView.lastCompositionAfterCursor = o != n, !o) return null;
    let u = t - o.offset;
    return {
      from: u,
      to: u + o.node.nodeValue.length,
      node: o.node
    };
  }
  function XM(l, t, e) {
    let n = lS(l, e);
    if (!n) return null;
    let { node: r, from: o, to: u } = n, f = r.nodeValue;
    if (/[\n\r]/.test(f) || l.state.doc.sliceString(n.from, n.to) != f) return null;
    let h = t.invertedDesc, g = new Ai(h.mapPos(o), h.mapPos(u), o, u), p = [];
    for (let y = r.parentNode; ; y = y.parentNode) {
      let v = jt.get(y);
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
          deco: new Eo({
            inclusive: true,
            attributes: EM(y),
            tagName: y.tagName.toLowerCase()
          })
        });
        else return null;
      }
    }
  }
  function KM(l, t) {
    return l.nodeType != 1 ? 0 : (t && l.childNodes[t - 1].contentEditable == "false" ? 1 : 0) | (t < l.childNodes.length && l.childNodes[t].contentEditable == "false" ? 2 : 0);
  }
  let QM = class {
    constructor() {
      this.changes = [];
    }
    compareRange(t, e) {
      Bu(t, e, this.changes);
    }
    comparePoint(t, e) {
      Bu(t, e, this.changes);
    }
    boundChange(t) {
      Bu(t, t, this.changes);
    }
  };
  function ZM(l, t, e) {
    let n = new QM();
    return Et.compare(l, t, e, n), n.changes;
  }
  function WM(l, t) {
    for (let e = l; e && e != t; e = e.assignedSlot || e.parentNode) if (e.nodeType == 1 && e.contentEditable == "false") return true;
    return false;
  }
  function JM(l, t) {
    let e = false;
    return t && l.iterChangedRanges((n, r) => {
      n < t.to && r > t.from && (e = true);
    }), e;
  }
  function FM(l, t, e = 1) {
    let n = l.charCategorizer(t), r = l.doc.lineAt(t), o = t - r.from;
    if (r.length == 0) return K.cursor(t);
    o == 0 ? e = 1 : o == r.length && (e = -1);
    let u = o, f = o;
    e < 0 ? u = _e(r.text, o, false) : f = _e(r.text, o);
    let h = n(r.text.slice(u, f));
    for (; u > 0; ) {
      let g = _e(r.text, u, false);
      if (n(r.text.slice(g, u)) != h) break;
      u = g;
    }
    for (; f < r.length; ) {
      let g = _e(r.text, f);
      if (n(r.text.slice(f, g)) != h) break;
      f = g;
    }
    return K.range(u + r.from, f + r.from);
  }
  function IM(l, t) {
    return t.left > l ? t.left - l : Math.max(0, l - t.right);
  }
  function PM(l, t) {
    return t.top > l ? t.top - l : Math.max(0, l - t.bottom);
  }
  function td(l, t) {
    return l.top < t.bottom - 1 && l.bottom > t.top + 1;
  }
  function Ob(l, t) {
    return t < l.top ? {
      top: t,
      left: l.left,
      right: l.right,
      bottom: l.bottom
    } : l;
  }
  function Db(l, t) {
    return t > l.bottom ? {
      top: l.top,
      left: l.left,
      right: l.right,
      bottom: t
    } : l;
  }
  function Pd(l, t, e) {
    let n, r, o, u, f = false, h, g, p, y;
    for (let w = l.firstChild; w; w = w.nextSibling) {
      let C = Xs(w);
      for (let _ = 0; _ < C.length; _++) {
        let O = C[_];
        r && td(r, O) && (O = Ob(Db(O, r.bottom), r.top));
        let j = IM(t, O), L = PM(e, O);
        if (j == 0 && L == 0) return w.nodeType == 3 ? Eb(w, t, e) : Pd(w, t, e);
        (!n || u > L || u == L && o > j) && (n = w, r = O, o = j, u = L, f = j ? t < O.left ? _ > 0 : _ < C.length - 1 : true), j == 0 ? e > O.bottom && (!p || p.bottom < O.bottom) ? (h = w, p = O) : e < O.top && (!y || y.top > O.top) && (g = w, y = O) : p && td(p, O) ? p = Db(p, O.bottom) : y && td(y, O) && (y = Ob(y, O.top));
      }
    }
    if (p && p.bottom >= e ? (n = h, r = p) : y && y.top <= e && (n = g, r = y), !n) return {
      node: l,
      offset: 0
    };
    let v = Math.max(r.left, Math.min(r.right, t));
    if (n.nodeType == 3) return Eb(n, v, e);
    if (f && n.contentEditable != "false") return Pd(n, v, e);
    let S = Array.prototype.indexOf.call(l.childNodes, n) + (t >= (r.left + r.right) / 2 ? 1 : 0);
    return {
      node: l,
      offset: S
    };
  }
  function Eb(l, t, e) {
    let n = l.nodeValue.length, r = -1, o = 1e9, u = 0;
    for (let f = 0; f < n; f++) {
      let h = ql(l, f, f + 1).getClientRects();
      for (let g = 0; g < h.length; g++) {
        let p = h[g];
        if (p.top == p.bottom) continue;
        u || (u = t - p.left);
        let y = (p.top > e ? p.top - e : e - p.bottom) - 1;
        if (p.left - 1 <= t && p.right + 1 >= t && y < o) {
          let v = t >= (p.left + p.right) / 2, S = v;
          if (F.chrome || F.gecko) {
            let w = ql(l, f).getBoundingClientRect();
            Math.abs(w.left - p.right) < 0.1 && (S = !v);
          }
          if (y <= 0) return {
            node: l,
            offset: f + (S ? 1 : 0)
          };
          r = f + (S ? 1 : 0), o = y;
        }
      }
    }
    return {
      node: l,
      offset: r > -1 ? r : u > 0 ? l.nodeValue.length : 0
    };
  }
  function sS(l, t, e, n = -1) {
    var r, o;
    let u = l.contentDOM.getBoundingClientRect(), f = u.top + l.viewState.paddingTop, h, { docHeight: g } = l.viewState, { x: p, y } = t, v = y - f;
    if (v < 0) return 0;
    if (v > g) return l.state.doc.length;
    for (let Q = l.viewState.heightOracle.textHeight / 2, N = false; h = l.elementAtHeight(v), h.type != Ue.Text; ) for (; v = n > 0 ? h.bottom + Q : h.top - Q, !(v >= 0 && v <= g); ) {
      if (N) return e ? null : 0;
      N = true, n = -n;
    }
    y = f + v;
    let S = h.from;
    if (S < l.viewport.from) return l.viewport.from == 0 ? 0 : e ? null : Bb(l, u, h, p, y);
    if (S > l.viewport.to) return l.viewport.to == l.state.doc.length ? l.state.doc.length : e ? null : Bb(l, u, h, p, y);
    let w = l.dom.ownerDocument, C = l.root.elementFromPoint ? l.root : w, _ = C.elementFromPoint(p, y);
    _ && !l.contentDOM.contains(_) && (_ = null), _ || (p = Math.max(u.left + 1, Math.min(u.right - 1, p)), _ = C.elementFromPoint(p, y), _ && !l.contentDOM.contains(_) && (_ = null));
    let O, j = -1;
    if (_ && ((r = l.docView.nearest(_)) === null || r === void 0 ? void 0 : r.isEditable) != false) {
      if (w.caretPositionFromPoint) {
        let Q = w.caretPositionFromPoint(p, y);
        Q && ({ offsetNode: O, offset: j } = Q);
      } else if (w.caretRangeFromPoint) {
        let Q = w.caretRangeFromPoint(p, y);
        Q && ({ startContainer: O, startOffset: j } = Q);
      }
      O && (!l.contentDOM.contains(O) || F.safari && $M(O, j, p) || F.chrome && t_(O, j, p)) && (O = void 0), O && (j = Math.min(Ii(O), j));
    }
    if (!O || !l.docView.dom.contains(O)) {
      let Q = fe.find(l.docView, S);
      if (!Q) return v > h.top + h.height / 2 ? h.to : h.from;
      ({ node: O, offset: j } = Pd(Q.dom, p, y));
    }
    let L = l.docView.nearest(O);
    if (!L) return null;
    if (L.isWidget && ((o = L.dom) === null || o === void 0 ? void 0 : o.nodeType) == 1) {
      let Q = L.dom.getBoundingClientRect();
      return t.y < Q.top || t.y <= Q.bottom && t.x <= (Q.left + Q.right) / 2 ? L.posAtStart : L.posAtEnd;
    } else return L.localPosFromDOM(O, j) + L.posAtStart;
  }
  function Bb(l, t, e, n, r) {
    let o = Math.round((n - t.left) * l.defaultCharacterWidth);
    if (l.lineWrapping && e.height > l.defaultLineHeight * 1.5) {
      let f = l.viewState.heightOracle.textHeight, h = Math.floor((r - e.top - (l.defaultLineHeight - f) * 0.5) / f);
      o += h * l.viewState.heightOracle.lineLength;
    }
    let u = l.state.sliceDoc(e.from, e.to);
    return e.from + Hd(u, o, l.state.tabSize);
  }
  function rS(l, t, e) {
    let n, r = l;
    if (l.nodeType != 3 || t != (n = l.nodeValue.length)) return false;
    for (; ; ) {
      let o = r.nextSibling;
      if (o) {
        if (o.nodeName == "BR") break;
        return false;
      } else {
        let u = r.parentNode;
        if (!u || u.nodeName == "DIV") break;
        r = u;
      }
    }
    return ql(l, n - 1, n).getBoundingClientRect().right > e;
  }
  function $M(l, t, e) {
    return rS(l, t, e);
  }
  function t_(l, t, e) {
    if (t != 0) return rS(l, t, e);
    for (let r = l; ; ) {
      let o = r.parentNode;
      if (!o || o.nodeType != 1 || o.firstChild != r) return false;
      if (o.classList.contains("cm-line")) break;
      r = o;
    }
    let n = l.nodeType == 1 ? l.getBoundingClientRect() : ql(l, 0, Math.max(l.nodeValue.length, 1)).getBoundingClientRect();
    return e - n.left > 5;
  }
  function $d(l, t, e) {
    let n = l.lineBlockAt(t);
    if (Array.isArray(n.type)) {
      let r;
      for (let o of n.type) {
        if (o.from > t) break;
        if (!(o.to < t)) {
          if (o.from < t && o.to > t) return o;
          (!r || o.type == Ue.Text && (r.type != o.type || (e < 0 ? o.from < t : o.to > t))) && (r = o);
        }
      }
      return r || n;
    }
    return n;
  }
  function e_(l, t, e, n) {
    let r = $d(l, t.head, t.assoc || -1), o = !n || r.type != Ue.Text || !(l.lineWrapping || r.widgetLineBreaks) ? null : l.coordsAtPos(t.assoc < 0 && t.head > r.from ? t.head - 1 : t.head);
    if (o) {
      let u = l.dom.getBoundingClientRect(), f = l.textDirectionAt(r.from), h = l.posAtCoords({
        x: e == (f == Wt.LTR) ? u.right - 1 : u.left + 1,
        y: (o.top + o.bottom) / 2
      });
      if (h != null) return K.cursor(h, e ? -1 : 1);
    }
    return K.cursor(e ? r.to : r.from, e ? -1 : 1);
  }
  function Rb(l, t, e, n) {
    let r = l.state.doc.lineAt(t.head), o = l.bidiSpans(r), u = l.textDirectionAt(r.from);
    for (let f = t, h = null; ; ) {
      let g = qM(r, o, u, f, e), p = Gv;
      if (!g) {
        if (r.number == (e ? l.state.doc.lines : 1)) return f;
        p = `
`, r = l.state.doc.line(r.number + (e ? 1 : -1)), o = l.bidiSpans(r), g = l.visualLineSide(r, !e);
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
  function i_(l, t, e) {
    let n = l.state.charCategorizer(t), r = n(e);
    return (o) => {
      let u = n(o);
      return r == Ft.Space && (r = u), r == u;
    };
  }
  function n_(l, t, e, n) {
    let r = t.head, o = e ? 1 : -1;
    if (r == (e ? l.state.doc.length : 0)) return K.cursor(r, t.assoc);
    let u = t.goalColumn, f, h = l.contentDOM.getBoundingClientRect(), g = l.coordsAtPos(r, t.assoc || -1), p = l.documentTop;
    if (g) u == null && (u = g.left - h.left), f = o < 0 ? g.top : g.bottom;
    else {
      let S = l.viewState.lineBlockAt(r);
      u == null && (u = Math.min(h.right - h.left, l.defaultCharacterWidth * (r - S.from))), f = (o < 0 ? S.top : S.bottom) + p;
    }
    let y = h.left + u, v = n ?? l.viewState.heightOracle.textHeight >> 1;
    for (let S = 0; ; S += 10) {
      let w = f + (v + S) * o, C = sS(l, {
        x: y,
        y: w
      }, false, o);
      if (w < h.top || w > h.bottom || (o < 0 ? C < r : C > r)) {
        let _ = l.docView.coordsForChar(C), O = !_ || w < _.top ? -1 : 1;
        return K.cursor(C, O, void 0, u);
      }
    }
  }
  function co(l, t, e) {
    for (; ; ) {
      let n = 0;
      for (let r of l) r.between(t - 1, t + 1, (o, u, f) => {
        if (t > o && t < u) {
          let h = n || e || (t - o < u - t ? -1 : 1);
          t = h < 0 ? o : u, n = h;
        }
      });
      if (!n) return t;
    }
  }
  function oS(l, t) {
    let e = null;
    for (let n = 0; n < t.ranges.length; n++) {
      let r = t.ranges[n], o = null;
      if (r.empty) {
        let u = co(l, r.from, 0);
        u != r.from && (o = K.cursor(u, -1));
      } else {
        let u = co(l, r.from, -1), f = co(l, r.to, 1);
        (u != r.from || f != r.to) && (o = K.range(r.from == r.anchor ? u : f, r.from == r.head ? u : f));
      }
      o && (e || (e = t.ranges.slice()), e[n] = o);
    }
    return e ? K.create(e, t.mainIndex) : t;
  }
  function ed(l, t, e) {
    let n = co(l.state.facet(Ro).map((r) => r(l)), e.from, t.head > e.from ? -1 : 1);
    return n == e.from ? e : K.cursor(n, n < e.from ? 1 : -1);
  }
  const eo = "\uFFFF";
  class l_ {
    constructor(t, e) {
      this.points = t, this.text = "", this.lineSeparator = e.facet(kt.lineSeparator);
    }
    append(t) {
      this.text += t;
    }
    lineBreak() {
      this.text += eo;
    }
    readRange(t, e) {
      if (!t) return this;
      let n = t.parentNode;
      for (let r = t; ; ) {
        this.findPointBefore(n, r);
        let o = this.text.length;
        this.readNode(r);
        let u = r.nextSibling;
        if (u == e) break;
        let f = jt.get(r), h = jt.get(u);
        (f && h ? f.breakAfter : (f ? f.breakAfter : Yu(r)) || Yu(u) && (r.nodeName != "BR" || r.cmIgnore) && this.text.length > o) && !r_(u, e) && this.lineBreak(), r = u;
      }
      return this.findPointBefore(n, e), this;
    }
    readTextNode(t) {
      let e = t.nodeValue;
      for (let n of this.points) n.node == t && (n.pos = this.text.length + Math.min(n.offset, e.length));
      for (let n = 0, r = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
        let o = -1, u = 1, f;
        if (this.lineSeparator ? (o = e.indexOf(this.lineSeparator, n), u = this.lineSeparator.length) : (f = r.exec(e)) && (o = f.index, u = f[0].length), this.append(e.slice(n, o < 0 ? e.length : o)), o < 0) break;
        if (this.lineBreak(), u > 1) for (let h of this.points) h.node == t && h.pos > this.text.length && (h.pos -= u - 1);
        n = o + u;
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
      for (let n of this.points) (t.nodeType == 3 ? n.node == t : t.contains(n.node)) && (n.pos = this.text.length + (s_(t, n.node, n.offset) ? e : 0));
    }
  }
  function s_(l, t, e) {
    for (; ; ) {
      if (!t || e < Ii(t)) return false;
      if (t == l) return true;
      e = Vl(t) + 1, t = t.parentNode;
    }
  }
  function r_(l, t) {
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
  class zb {
    constructor(t, e) {
      this.node = t, this.offset = e, this.pos = -1;
    }
  }
  class o_ {
    constructor(t, e, n, r) {
      this.typeOver = r, this.bounds = null, this.text = "", this.domChanged = e > -1;
      let { impreciseHead: o, impreciseAnchor: u } = t.docView;
      if (t.state.readOnly && e > -1) this.newSel = null;
      else if (e > -1 && (this.bounds = t.docView.domBoundsAround(e, n, 0))) {
        let f = o || u ? [] : u_(t), h = new l_(f, t.state);
        h.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = h.text, this.newSel = c_(f, this.bounds.from);
      } else {
        let f = t.observer.selectionRange, h = o && o.node == f.focusNode && o.offset == f.focusOffset || !Xd(t.contentDOM, f.focusNode) ? t.state.selection.main.head : t.docView.posFromDOM(f.focusNode, f.focusOffset), g = u && u.node == f.anchorNode && u.offset == f.anchorOffset || !Xd(t.contentDOM, f.anchorNode) ? t.state.selection.main.anchor : t.docView.posFromDOM(f.anchorNode, f.anchorOffset), p = t.viewport;
        if ((F.ios || F.chrome) && t.state.selection.main.empty && h != g && (p.from > 0 || p.to < t.state.doc.length)) {
          let y = Math.min(h, g), v = Math.max(h, g), S = p.from - y, w = p.to - v;
          (S == 0 || S == 1 || y == 0) && (w == 0 || w == -1 || v == t.state.doc.length) && (h = 0, g = t.state.doc.length);
        }
        t.inputState.composing > -1 && t.state.selection.ranges.length > 1 ? this.newSel = t.state.selection.replaceRange(K.range(g, h)) : this.newSel = K.single(g, h);
      }
    }
  }
  function aS(l, t) {
    let e, { newSel: n } = t, r = l.state.selection.main, o = l.inputState.lastKeyTime > Date.now() - 100 ? l.inputState.lastKeyCode : -1;
    if (t.bounds) {
      let { from: u, to: f } = t.bounds, h = r.from, g = null;
      (o === 8 || F.android && t.text.length < f - u) && (h = r.to, g = "end");
      let p = uS(l.state.doc.sliceString(u, f, eo), t.text, h - u, g);
      p && (F.chrome && o == 13 && p.toB == p.from + 2 && t.text.slice(p.from, p.toB) == eo + eo && p.toB--, e = {
        from: u + p.from,
        to: u + p.toA,
        insert: Bt.of(t.text.slice(p.from, p.toB).split(eo))
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
      insert: Bt.of([
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
      insert: Bt.of([
        " "
      ])
    }), e) return Bm(l, e, n, o);
    if (n && !n.main.eq(r)) {
      let u = false, f = "select";
      return l.inputState.lastSelectionTime > Date.now() - 50 && (l.inputState.lastSelectionOrigin == "select" && (u = true), f = l.inputState.lastSelectionOrigin, f == "select.pointer" && (n = oS(l.state.facet(Ro).map((h) => h(l)), n))), l.dispatch({
        selection: n,
        scrollIntoView: u,
        userEvent: f
      }), true;
    } else return false;
  }
  function Bm(l, t, e, n = -1) {
    if (F.ios && l.inputState.flushIOSKey(t)) return true;
    let r = l.state.selection.main;
    if (F.android && (t.to == r.to && (t.from == r.from || t.from == r.from - 1 && l.state.sliceDoc(t.from, r.from) == " ") && t.insert.length == 1 && t.insert.lines == 2 && Ls(l.contentDOM, "Enter", 13) || (t.from == r.from - 1 && t.to == r.to && t.insert.length == 0 || n == 8 && t.insert.length < t.to - t.from && t.to > r.head) && Ls(l.contentDOM, "Backspace", 8) || t.from == r.from && t.to == r.to + 1 && t.insert.length == 0 && Ls(l.contentDOM, "Delete", 46))) return true;
    let o = t.insert.toString();
    l.inputState.composing >= 0 && l.inputState.composing++;
    let u, f = () => u || (u = a_(l, t, e));
    return l.state.facet(Wv).some((h) => h(l, t.from, t.to, o, f)) || l.dispatch(f()), true;
  }
  function a_(l, t, e) {
    let n, r = l.state, o = r.selection.main, u = -1;
    if (t.from == t.to && t.from < o.from || t.from > o.to) {
      let h = t.from < o.from ? -1 : 1, g = h < 0 ? o.from : o.to, p = co(r.facet(Ro).map((y) => y(l)), g, h);
      t.from == p && (u = p);
    }
    if (u > -1) n = {
      changes: t,
      selection: K.cursor(t.from + t.insert.length, -1)
    };
    else if (t.from >= o.from && t.to <= o.to && t.to - t.from >= (o.to - o.from) / 3 && (!e || e.main.empty && e.main.from == t.from + t.insert.length) && l.inputState.composing < 0) {
      let h = o.from < t.from ? r.sliceDoc(o.from, t.from) : "", g = o.to > t.to ? r.sliceDoc(t.to, o.to) : "";
      n = r.replaceSelection(l.state.toText(h + t.insert.sliceString(0, void 0, l.state.lineBreak) + g));
    } else {
      let h = r.changes(t), g = e && e.main.to <= h.newLength ? e.main : void 0;
      if (r.selection.ranges.length > 1 && (l.inputState.composing >= 0 || l.inputState.compositionPendingChange) && t.to <= o.to + 10 && t.to >= o.to - 10) {
        let p = l.state.sliceDoc(t.from, t.to), y, v = e && lS(l, e.main.head);
        if (v) {
          let w = t.insert.length - (t.to - t.from);
          y = {
            from: v.from,
            to: v.to - w
          };
        } else y = l.state.doc.lineAt(o.head);
        let S = o.to - t.to;
        n = r.changeByRange((w) => {
          if (w.from == o.from && w.to == o.to) return {
            changes: h,
            range: g || w.map(h)
          };
          let C = w.to - S, _ = C - p.length;
          if (l.state.sliceDoc(_, C) != p || C >= y.from && _ <= y.to) return {
            range: w
          };
          let O = r.changes({
            from: _,
            to: C,
            insert: t.insert
          }), j = w.to - o.to;
          return {
            changes: O,
            range: g ? K.range(Math.max(0, g.anchor + j), Math.max(0, g.head + j)) : w.map(O)
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
  function uS(l, t, e, n) {
    let r = Math.min(l.length, t.length), o = 0;
    for (; o < r && l.charCodeAt(o) == t.charCodeAt(o); ) o++;
    if (o == r && l.length == t.length) return null;
    let u = l.length, f = t.length;
    for (; u > 0 && f > 0 && l.charCodeAt(u - 1) == t.charCodeAt(f - 1); ) u--, f--;
    if (n == "end") {
      let h = Math.max(0, o - Math.min(u, f));
      e -= u + h - o;
    }
    if (u < o && l.length < t.length) {
      let h = e <= o && e >= u ? o - e : 0;
      o -= h, f = o + (f - u), u = o;
    } else if (f < o) {
      let h = e <= o && e >= f ? o - e : 0;
      o -= h, u = o + (u - f), f = o;
    }
    return {
      from: o,
      toA: u,
      toB: f
    };
  }
  function u_(l) {
    let t = [];
    if (l.root.activeElement != l.contentDOM) return t;
    let { anchorNode: e, anchorOffset: n, focusNode: r, focusOffset: o } = l.observer.selectionRange;
    return e && (t.push(new zb(e, n)), (r != e || o != n) && t.push(new zb(r, o))), t;
  }
  function c_(l, t) {
    if (l.length == 0) return null;
    let e = l[0].pos, n = l.length == 2 ? l[1].pos : e;
    return e > -1 && n > -1 ? K.single(e + t, n + t) : null;
  }
  class f_ {
    setSelectionOrigin(t) {
      this.lastSelectionOrigin = t, this.lastSelectionTime = Date.now();
    }
    constructor(t) {
      this.view = t, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = false, this.compositionPendingChange = false, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = t.hasFocus, F.safari && t.contentDOM.addEventListener("input", () => null), F.gecko && T_(t.contentDOM.ownerDocument);
    }
    handleEvent(t) {
      !v_(this.view, t) || this.ignoreDuringComposition(t) || t.type == "keydown" && this.keydown(t) || (this.view.updateState != 0 ? Promise.resolve().then(() => this.runHandlers(t.type, t)) : this.runHandlers(t.type, t));
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
      let e = h_(t), n = this.handlers, r = this.view.contentDOM;
      for (let o in e) if (o != "scroll") {
        let u = !e[o].handlers.length, f = n[o];
        f && u != !f.handlers.length && (r.removeEventListener(o, this.handleEvent), f = null), f || r.addEventListener(o, this.handleEvent, {
          passive: u
        });
      }
      for (let o in n) o != "scroll" && !e[o] && r.removeEventListener(o, this.handleEvent);
      this.handlers = e;
    }
    keydown(t) {
      if (this.lastKeyCode = t.keyCode, this.lastKeyTime = Date.now(), t.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return true;
      if (this.tabFocusMode > 0 && t.keyCode != 27 && fS.indexOf(t.keyCode) < 0 && (this.tabFocusMode = -1), F.android && F.chrome && !t.synthetic && (t.keyCode == 13 || t.keyCode == 8)) return this.view.observer.delayAndroidKey(t.key, t.keyCode), true;
      let e;
      return F.ios && !t.synthetic && !t.altKey && !t.metaKey && ((e = cS.find((n) => n.keyCode == t.keyCode)) && !t.ctrlKey || d_.indexOf(t.key) > -1 && t.ctrlKey && !t.shiftKey) ? (this.pendingIOSKey = e || t, setTimeout(() => this.flushIOSKey(), 250), true) : (t.keyCode != 229 && this.view.observer.forceFlush(), false);
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
  function Nb(l, t) {
    return (e, n) => {
      try {
        return t.call(l, n, e);
      } catch (r) {
        Je(e.state, r);
      }
    };
  }
  function h_(l) {
    let t = /* @__PURE__ */ Object.create(null);
    function e(n) {
      return t[n] || (t[n] = {
        observers: [],
        handlers: []
      });
    }
    for (let n of l) {
      let r = n.spec, o = r && r.plugin.domEventHandlers, u = r && r.plugin.domEventObservers;
      if (o) for (let f in o) {
        let h = o[f];
        h && e(f).handlers.push(Nb(n.value, h));
      }
      if (u) for (let f in u) {
        let h = u[f];
        h && e(f).observers.push(Nb(n.value, h));
      }
    }
    for (let n in Bi) e(n).handlers.push(Bi[n]);
    for (let n in Mi) e(n).observers.push(Mi[n]);
    return t;
  }
  const cS = [
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
  ], d_ = "dthko", fS = [
    16,
    17,
    18,
    20,
    91,
    92,
    224,
    225
  ], uu = 6;
  function cu(l) {
    return Math.max(0, l) * 0.7 + 8;
  }
  function m_(l, t) {
    return Math.max(Math.abs(l.clientX - t.clientX), Math.abs(l.clientY - t.clientY));
  }
  class g_ {
    constructor(t, e, n, r) {
      this.view = t, this.startEvent = e, this.style = n, this.mustSelect = r, this.scrollSpeed = {
        x: 0,
        y: 0
      }, this.scrolling = -1, this.lastEvent = e, this.scrollParents = AM(t.contentDOM), this.atoms = t.state.facet(Ro).map((u) => u(t));
      let o = t.contentDOM.ownerDocument;
      o.addEventListener("mousemove", this.move = this.move.bind(this)), o.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = e.shiftKey, this.multiple = t.state.facet(kt.allowMultipleSelections) && p_(t, e), this.dragging = b_(t, e) && mS(e) == 1 ? null : false;
    }
    start(t) {
      this.dragging === false && this.select(t);
    }
    move(t) {
      if (t.buttons == 0) return this.destroy();
      if (this.dragging || this.dragging == null && m_(this.startEvent, t) < 10) return;
      this.select(this.lastEvent = t);
      let e = 0, n = 0, r = 0, o = 0, u = this.view.win.innerWidth, f = this.view.win.innerHeight;
      this.scrollParents.x && ({ left: r, right: u } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({ top: o, bottom: f } = this.scrollParents.y.getBoundingClientRect());
      let h = Em(this.view);
      t.clientX - h.left <= r + uu ? e = -cu(r - t.clientX) : t.clientX + h.right >= u - uu && (e = cu(t.clientX - u)), t.clientY - h.top <= o + uu ? n = -cu(o - t.clientY) : t.clientY + h.bottom >= f - uu && (n = cu(t.clientY - f)), this.setScrollSpeed(e, n);
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
      let { view: e } = this, n = oS(this.atoms, this.style.get(t, this.extend, this.multiple));
      (this.mustSelect || !n.eq(e.state.selection, this.dragging === false)) && this.view.dispatch({
        selection: n,
        userEvent: "select.pointer"
      }), this.mustSelect = false;
    }
    update(t) {
      t.transactions.some((e) => e.isUserEvent("input.type")) ? this.destroy() : this.style.update(t) && setTimeout(() => this.select(this.lastEvent), 20);
    }
  }
  function p_(l, t) {
    let e = l.state.facet(Xv);
    return e.length ? e[0](t) : F.mac ? t.metaKey : t.ctrlKey;
  }
  function y_(l, t) {
    let e = l.state.facet(Kv);
    return e.length ? e[0](t) : F.mac ? !t.altKey : !t.ctrlKey;
  }
  function b_(l, t) {
    let { main: e } = l.state.selection;
    if (e.empty) return false;
    let n = yo(l.root);
    if (!n || n.rangeCount == 0) return true;
    let r = n.getRangeAt(0).getClientRects();
    for (let o = 0; o < r.length; o++) {
      let u = r[o];
      if (u.left <= t.clientX && u.right >= t.clientX && u.top <= t.clientY && u.bottom >= t.clientY) return true;
    }
    return false;
  }
  function v_(l, t) {
    if (!t.bubbles) return true;
    if (t.defaultPrevented) return false;
    for (let e = t.target, n; e != l.contentDOM; e = e.parentNode) if (!e || e.nodeType == 11 || (n = jt.get(e)) && n.ignoreEvent(t)) return false;
    return true;
  }
  const Bi = /* @__PURE__ */ Object.create(null), Mi = /* @__PURE__ */ Object.create(null), hS = F.ie && F.ie_version < 15 || F.ios && F.webkit_version < 604;
  function S_(l) {
    let t = l.dom.parentNode;
    if (!t) return;
    let e = t.appendChild(document.createElement("textarea"));
    e.style.cssText = "position: fixed; left: -10000px; top: 10px", e.focus(), setTimeout(() => {
      l.focus(), e.remove(), dS(l, e.value);
    }, 50);
  }
  function fc(l, t, e) {
    for (let n of l.facet(t)) e = n(e, l);
    return e;
  }
  function dS(l, t) {
    t = fc(l.state, km, t);
    let { state: e } = l, n, r = 1, o = e.toText(t), u = o.lines == e.selection.ranges.length;
    if (tm != null && e.selection.ranges.every((h) => h.empty) && tm == o.toString()) {
      let h = -1;
      n = e.changeByRange((g) => {
        let p = e.doc.lineAt(g.from);
        if (p.from == h) return {
          range: g
        };
        h = p.from;
        let y = e.toText((u ? o.line(r++).text : t) + e.lineBreak);
        return {
          changes: {
            from: p.from,
            insert: y
          },
          range: K.cursor(g.from + y.length)
        };
      });
    } else u ? n = e.changeByRange((h) => {
      let g = o.line(r++);
      return {
        changes: {
          from: h.from,
          to: h.to,
          insert: g.text
        },
        range: K.cursor(h.from + g.length)
      };
    }) : n = e.replaceSelection(o);
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
    for (let n of l.state.facet(Qv)) if (e = n(l, t), e) break;
    if (!e && t.button == 0 && (e = A_(l, t)), e) {
      let n = !l.hasFocus;
      l.inputState.startMouseSelection(new g_(l, t, e, n)), n && l.observer.ignore(() => {
        Tv(l.contentDOM);
        let o = l.root.activeElement;
        o && !o.contains(l.contentDOM) && o.blur();
      });
      let r = l.inputState.mouseSelection;
      if (r) return r.start(t), r.dragging === false;
    } else l.inputState.setSelectionOrigin("select.pointer");
    return false;
  };
  function Lb(l, t, e, n) {
    if (n == 1) return K.cursor(t, e);
    if (n == 2) return FM(l.state, t, e);
    {
      let r = fe.find(l.docView, t), o = l.state.doc.lineAt(r ? r.posAtEnd : t), u = r ? r.posAtStart : o.from, f = r ? r.posAtEnd : o.to;
      return f < l.state.doc.length && f == o.to && f++, K.range(u, f);
    }
  }
  let Hb = (l, t, e) => t >= e.top && t <= e.bottom && l >= e.left && l <= e.right;
  function x_(l, t, e, n) {
    let r = fe.find(l.docView, t);
    if (!r) return 1;
    let o = t - r.posAtStart;
    if (o == 0) return 1;
    if (o == r.length) return -1;
    let u = r.coordsAt(o, -1);
    if (u && Hb(e, n, u)) return -1;
    let f = r.coordsAt(o, 1);
    return f && Hb(e, n, f) ? 1 : u && u.bottom >= n ? -1 : 1;
  }
  function Ub(l, t) {
    let e = l.posAtCoords({
      x: t.clientX,
      y: t.clientY
    }, false);
    return {
      pos: e,
      bias: x_(l, e, t.clientX, t.clientY)
    };
  }
  const w_ = F.ie && F.ie_version <= 11;
  let Vb = null, qb = 0, jb = 0;
  function mS(l) {
    if (!w_) return l.detail;
    let t = Vb, e = jb;
    return Vb = l, jb = Date.now(), qb = !t || e > Date.now() - 400 && Math.abs(t.clientX - l.clientX) < 2 && Math.abs(t.clientY - l.clientY) < 2 ? (qb + 1) % 3 : 1;
  }
  function A_(l, t) {
    let e = Ub(l, t), n = mS(t), r = l.state.selection;
    return {
      update(o) {
        o.docChanged && (e.pos = o.changes.mapPos(e.pos), r = r.map(o.changes));
      },
      get(o, u, f) {
        let h = Ub(l, o), g, p = Lb(l, h.pos, h.bias, n);
        if (e.pos != h.pos && !u) {
          let y = Lb(l, e.pos, e.bias, n), v = Math.min(y.from, p.from), S = Math.max(y.to, p.to);
          p = v < p.from ? K.range(v, S) : K.range(S, v);
        }
        return u ? r.replaceRange(r.main.extend(p.from, p.to)) : f && n == 1 && r.ranges.length > 1 && (g = C_(r, h.pos)) ? g : f ? r.addRange(p) : K.create([
          p
        ]);
      }
    };
  }
  function C_(l, t) {
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
        let o = r.posAtStart, u = o + r.length;
        (o >= e.to || u <= e.from) && (e = K.range(o, u));
      }
    }
    let { inputState: n } = l;
    return n.mouseSelection && (n.mouseSelection.dragging = true), n.draggedContent = e, t.dataTransfer && (t.dataTransfer.setData("Text", fc(l.state, Om, l.state.sliceDoc(e.from, e.to))), t.dataTransfer.effectAllowed = "copyMove"), false;
  };
  Bi.dragend = (l) => (l.inputState.draggedContent = null, false);
  function Yb(l, t, e, n) {
    if (e = fc(l.state, km, e), !e) return;
    let r = l.posAtCoords({
      x: t.clientX,
      y: t.clientY
    }, false), { draggedContent: o } = l.inputState, u = n && o && y_(l, t) ? {
      from: o.from,
      to: o.to
    } : null, f = {
      from: r,
      insert: e
    }, h = l.state.changes(u ? [
      u,
      f
    ] : f);
    l.focus(), l.dispatch({
      changes: h,
      selection: {
        anchor: h.mapPos(r, -1),
        head: h.mapPos(r, 1)
      },
      userEvent: u ? "move.drop" : "input.drop"
    }), l.inputState.draggedContent = null;
  }
  Bi.drop = (l, t) => {
    if (!t.dataTransfer) return false;
    if (l.state.readOnly) return true;
    let e = t.dataTransfer.files;
    if (e && e.length) {
      let n = Array(e.length), r = 0, o = () => {
        ++r == e.length && Yb(l, t, n.filter((u) => u != null).join(l.state.lineBreak), false);
      };
      for (let u = 0; u < e.length; u++) {
        let f = new FileReader();
        f.onerror = o, f.onload = () => {
          /[\x00-\x08\x0e-\x1f]{2}/.test(f.result) || (n[u] = f.result), o();
        }, f.readAsText(e[u]);
      }
      return true;
    } else {
      let n = t.dataTransfer.getData("Text");
      if (n) return Yb(l, t, n, true), true;
    }
    return false;
  };
  Bi.paste = (l, t) => {
    if (l.state.readOnly) return true;
    l.observer.flush();
    let e = hS ? null : t.clipboardData;
    return e ? (dS(l, e.getData("text/plain") || e.getData("text/uri-list")), true) : (S_(l), false);
  };
  function M_(l, t) {
    let e = l.dom.parentNode;
    if (!e) return;
    let n = e.appendChild(document.createElement("textarea"));
    n.style.cssText = "position: fixed; left: -10000px; top: 10px", n.value = t, n.focus(), n.selectionEnd = t.length, n.selectionStart = 0, setTimeout(() => {
      n.remove(), l.focus();
    }, 50);
  }
  function __(l) {
    let t = [], e = [], n = false;
    for (let r of l.selection.ranges) r.empty || (t.push(l.sliceDoc(r.from, r.to)), e.push(r));
    if (!t.length) {
      let r = -1;
      for (let { from: o } of l.selection.ranges) {
        let u = l.doc.lineAt(o);
        u.number > r && (t.push(u.text), e.push({
          from: u.from,
          to: Math.min(l.doc.length, u.to + 1)
        })), r = u.number;
      }
      n = true;
    }
    return {
      text: fc(l, Om, t.join(l.lineBreak)),
      ranges: e,
      linewise: n
    };
  }
  let tm = null;
  Bi.copy = Bi.cut = (l, t) => {
    let { text: e, ranges: n, linewise: r } = __(l.state);
    if (!e && !r) return false;
    tm = r ? e : null, t.type == "cut" && !l.state.readOnly && l.dispatch({
      changes: n,
      scrollIntoView: true,
      userEvent: "delete.cut"
    });
    let o = hS ? null : t.clipboardData;
    return o ? (o.clearData(), o.setData("text/plain", e), true) : (M_(l, e), false);
  };
  const gS = Pi.define();
  function pS(l, t) {
    let e = [];
    for (let n of l.facet(Jv)) {
      let r = n(l, t);
      r && e.push(r);
    }
    return e.length ? l.update({
      effects: e,
      annotations: gS.of(true)
    }) : null;
  }
  function yS(l) {
    setTimeout(() => {
      let t = l.hasFocus;
      if (t != l.inputState.notifiedFocused) {
        let e = pS(l.state, t);
        e ? l.dispatch(e) : l.update([]);
      }
    }, 10);
  }
  Mi.focus = (l) => {
    l.inputState.lastFocusTime = Date.now(), !l.scrollDOM.scrollTop && (l.inputState.lastScrollTop || l.inputState.lastScrollLeft) && (l.scrollDOM.scrollTop = l.inputState.lastScrollTop, l.scrollDOM.scrollLeft = l.inputState.lastScrollLeft), yS(l);
  };
  Mi.blur = (l) => {
    l.observer.clearSelectionRange(), yS(l);
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
      let o = (e = t.dataTransfer) === null || e === void 0 ? void 0 : e.getData("text/plain"), u = t.getTargetRanges();
      if (o && u.length) {
        let f = u[0], h = l.posAtDOM(f.startContainer, f.startOffset), g = l.posAtDOM(f.endContainer, f.endOffset);
        return Bm(l, {
          from: h,
          to: g,
          insert: l.state.toText(o)
        }, null), true;
      }
    }
    let r;
    if (F.chrome && F.android && (r = cS.find((o) => o.inputType == t.inputType)) && (l.observer.delayAndroidKey(r.key, r.keyCode), r.key == "Backspace" || r.key == "Delete")) {
      let o = ((n = window.visualViewport) === null || n === void 0 ? void 0 : n.height) || 0;
      setTimeout(() => {
        var u;
        (((u = window.visualViewport) === null || u === void 0 ? void 0 : u.height) || 0) > o + 10 && l.hasFocus && (l.contentDOM.blur(), l.focus());
      }, 100);
    }
    return F.ios && t.inputType == "deleteContentForward" && l.observer.flushSoon(), F.safari && t.inputType == "insertText" && l.inputState.composing >= 0 && setTimeout(() => Mi.compositionend(l, t), 20), false;
  };
  const Gb = /* @__PURE__ */ new Set();
  function T_(l) {
    Gb.has(l) || (Gb.add(l), l.addEventListener("copy", () => {
    }), l.addEventListener("cut", () => {
    }));
  }
  const Xb = [
    "pre-wrap",
    "normal",
    "pre-line",
    "break-spaces"
  ];
  let Zs = false;
  function Kb() {
    Zs = false;
  }
  class k_ {
    constructor(t) {
      this.lineWrapping = t, this.doc = Bt.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30;
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
      return Xb.indexOf(t) > -1 != this.lineWrapping;
    }
    mustRefreshForHeights(t) {
      let e = false;
      for (let n = 0; n < t.length; n++) {
        let r = t[n];
        r < 0 ? n++ : this.heightSamples[Math.floor(r * 10)] || (e = true, this.heightSamples[Math.floor(r * 10)] = true);
      }
      return e;
    }
    refresh(t, e, n, r, o, u) {
      let f = Xb.indexOf(t) > -1, h = Math.round(e) != Math.round(this.lineHeight) || this.lineWrapping != f;
      if (this.lineWrapping = f, this.lineHeight = e, this.charWidth = n, this.textHeight = r, this.lineLength = o, h) {
        this.heightSamples = {};
        for (let g = 0; g < u.length; g++) {
          let p = u[g];
          p < 0 ? g++ : this.heightSamples[Math.floor(p * 10)] = true;
        }
      }
      return h;
    }
  }
  class O_ {
    constructor(t, e) {
      this.from = t, this.heights = e, this.index = 0;
    }
    get more() {
      return this.index < this.heights.length;
    }
  }
  class Ki {
    constructor(t, e, n, r, o) {
      this.from = t, this.length = e, this.top = n, this.height = r, this._content = o;
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
      return this._content instanceof ol ? this._content.widget : null;
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
  var Zt = (function(l) {
    return l[l.ByPos = 0] = "ByPos", l[l.ByHeight = 1] = "ByHeight", l[l.ByPosNoHeight = 2] = "ByPosNoHeight", l;
  })(Zt || (Zt = {}));
  const Ru = 1e-3;
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
      this.height != t && (Math.abs(this.height - t) > Ru && (Zs = true), this.height = t);
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
      let o = this, u = n.doc;
      for (let f = r.length - 1; f >= 0; f--) {
        let { fromA: h, toA: g, fromB: p, toB: y } = r[f], v = o.lineAt(h, Zt.ByPosNoHeight, n.setDoc(e), 0, 0), S = v.to >= g ? v : o.lineAt(g, Zt.ByPosNoHeight, n, 0, 0);
        for (y += S.to - g, g = S.to; f > 0 && v.from <= r[f - 1].toA; ) h = r[f - 1].fromA, p = r[f - 1].fromB, f--, h < v.from && (v = o.lineAt(h, Zt.ByPosNoHeight, n, 0, 0));
        p += v.from - h, h = v.from;
        let w = Rm.build(n.setDoc(u), t, p, y);
        o = Ku(o, o.replace(h, g, w));
      }
      return o.updateHeight(n, 0);
    }
    static empty() {
      return new ai(0, 0);
    }
    static of(t) {
      if (t.length == 1) return t[0];
      let e = 0, n = t.length, r = 0, o = 0;
      for (; ; ) if (e == n) if (r > o * 2) {
        let f = t[e - 1];
        f.break ? t.splice(--e, 1, f.left, null, f.right) : t.splice(--e, 1, f.left, f.right), n += 1 + f.break, r -= f.size;
      } else if (o > r * 2) {
        let f = t[n];
        f.break ? t.splice(n, 1, f.left, null, f.right) : t.splice(n, 1, f.left, f.right), n += 2 + f.break, o -= f.size;
      } else break;
      else if (r < o) {
        let f = t[e++];
        f && (r += f.size);
      } else {
        let f = t[--n];
        f && (o += f.size);
      }
      let u = 0;
      return t[e - 1] == null ? (u = 1, e--) : t[e] == null && (u = 1, n++), new D_(Ve.of(t.slice(0, e)), u, Ve.of(t.slice(n)));
    }
  }
  function Ku(l, t) {
    return l == t ? l : (l.constructor != t.constructor && (Zs = true), t);
  }
  Ve.prototype.size = 1;
  class bS extends Ve {
    constructor(t, e, n) {
      super(t, e), this.deco = n;
    }
    blockAt(t, e, n, r) {
      return new Ki(r, this.length, n, this.height, this.deco || 0);
    }
    lineAt(t, e, n, r, o) {
      return this.blockAt(0, n, r, o);
    }
    forEachLine(t, e, n, r, o, u) {
      t <= o + this.length && e >= o && u(this.blockAt(0, n, r, o));
    }
    updateHeight(t, e = 0, n = false, r) {
      return r && r.from <= e && r.more && this.setHeight(r.heights[r.index++]), this.outdated = false, this;
    }
    toString() {
      return `block(${this.length})`;
    }
  }
  class ai extends bS {
    constructor(t, e) {
      super(t, e, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0;
    }
    blockAt(t, e, n, r) {
      return new Ki(r, this.length, n, this.height, this.breaks);
    }
    replace(t, e, n) {
      let r = n[0];
      return n.length == 1 && (r instanceof ai || r instanceof Ae && r.flags & 4) && Math.abs(this.length - r.length) < 10 ? (r instanceof Ae ? r = new ai(r.length, this.height) : r.height = this.height, this.outdated || (r.outdated = false), r) : Ve.of(n);
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
      let n = t.doc.lineAt(e).number, r = t.doc.lineAt(e + this.length).number, o = r - n + 1, u, f = 0;
      if (t.lineWrapping) {
        let h = Math.min(this.height, t.lineHeight * o);
        u = h / o, this.length > o + 1 && (f = (this.height - h) / (this.length - o - 1));
      } else u = this.height / o;
      return {
        firstLine: n,
        lastLine: r,
        perLine: u,
        perChar: f
      };
    }
    blockAt(t, e, n, r) {
      let { firstLine: o, lastLine: u, perLine: f, perChar: h } = this.heightMetrics(e, r);
      if (e.lineWrapping) {
        let g = r + (t < e.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (t - n) / this.height)) * this.length)), p = e.doc.lineAt(g), y = f + p.length * h, v = Math.max(n, t - y / 2);
        return new Ki(p.from, p.length, v, y, 0);
      } else {
        let g = Math.max(0, Math.min(u - o, Math.floor((t - n) / f))), { from: p, length: y } = e.doc.line(o + g);
        return new Ki(p, y, n + f * g, f, 0);
      }
    }
    lineAt(t, e, n, r, o) {
      if (e == Zt.ByHeight) return this.blockAt(t, n, r, o);
      if (e == Zt.ByPosNoHeight) {
        let { from: S, to: w } = n.doc.lineAt(t);
        return new Ki(S, w - S, 0, 0, 0);
      }
      let { firstLine: u, perLine: f, perChar: h } = this.heightMetrics(n, o), g = n.doc.lineAt(t), p = f + g.length * h, y = g.number - u, v = r + f * y + h * (g.from - o - y);
      return new Ki(g.from, g.length, Math.max(r, Math.min(v, r + this.height - p)), p, 0);
    }
    forEachLine(t, e, n, r, o, u) {
      t = Math.max(t, o), e = Math.min(e, o + this.length);
      let { firstLine: f, perLine: h, perChar: g } = this.heightMetrics(n, o);
      for (let p = t, y = r; p <= e; ) {
        let v = n.doc.lineAt(p);
        if (p == t) {
          let w = v.number - f;
          y += h * w + g * (t - o - w);
        }
        let S = h + g * v.length;
        u(new Ki(v.from, v.length, y, S, 0)), y += S, p = v.to + 1;
      }
    }
    replace(t, e, n) {
      let r = this.length - e;
      if (r > 0) {
        let o = n[n.length - 1];
        o instanceof Ae ? n[n.length - 1] = new Ae(o.length + r) : n.push(null, new Ae(r - 1));
      }
      if (t > 0) {
        let o = n[0];
        o instanceof Ae ? n[0] = new Ae(t + o.length) : n.unshift(new Ae(t - 1), null);
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
      let o = e + this.length;
      if (r && r.from <= e + this.length && r.more) {
        let u = [], f = Math.max(e, r.from), h = -1;
        for (r.from > e && u.push(new Ae(r.from - e - 1).updateHeight(t, e)); f <= o && r.more; ) {
          let p = t.doc.lineAt(f).length;
          u.length && u.push(null);
          let y = r.heights[r.index++];
          h == -1 ? h = y : Math.abs(y - h) >= Ru && (h = -2);
          let v = new ai(p, y);
          v.outdated = false, u.push(v), f += p + 1;
        }
        f <= o && u.push(null, new Ae(o - f).updateHeight(t, f));
        let g = Ve.of(u);
        return (h < 0 || Math.abs(g.height - this.height) >= Ru || Math.abs(h - this.heightMetrics(t, e).perLine) >= Ru) && (Zs = true), Ku(this, g);
      } else (n || this.outdated) && (this.setHeight(t.heightForGap(e, e + this.length)), this.outdated = false);
      return this;
    }
    toString() {
      return `gap(${this.length})`;
    }
  }
  class D_ extends Ve {
    constructor(t, e, n) {
      super(t.length + e + n.length, t.height + n.height, e | (t.outdated || n.outdated ? 2 : 0)), this.left = t, this.right = n, this.size = t.size + n.size;
    }
    get break() {
      return this.flags & 1;
    }
    blockAt(t, e, n, r) {
      let o = n + this.left.height;
      return t < o ? this.left.blockAt(t, e, n, r) : this.right.blockAt(t, e, o, r + this.left.length + this.break);
    }
    lineAt(t, e, n, r, o) {
      let u = r + this.left.height, f = o + this.left.length + this.break, h = e == Zt.ByHeight ? t < u : t < f, g = h ? this.left.lineAt(t, e, n, r, o) : this.right.lineAt(t, e, n, u, f);
      if (this.break || (h ? g.to < f : g.from > f)) return g;
      let p = e == Zt.ByPosNoHeight ? Zt.ByPosNoHeight : Zt.ByPos;
      return h ? g.join(this.right.lineAt(f, p, n, u, f)) : this.left.lineAt(f, p, n, r, o).join(g);
    }
    forEachLine(t, e, n, r, o, u) {
      let f = r + this.left.height, h = o + this.left.length + this.break;
      if (this.break) t < h && this.left.forEachLine(t, e, n, r, o, u), e >= h && this.right.forEachLine(t, e, n, f, h, u);
      else {
        let g = this.lineAt(h, Zt.ByPos, n, r, o);
        t < g.from && this.left.forEachLine(t, g.from - 1, n, r, o, u), g.to >= t && g.from <= e && u(g), e > g.to && this.right.forEachLine(g.to + 1, e, n, f, h, u);
      }
    }
    replace(t, e, n) {
      let r = this.left.length + this.break;
      if (e < r) return this.balanced(this.left.replace(t, e, n), this.right);
      if (t > this.left.length) return this.balanced(this.left, this.right.replace(t - r, e - r, n));
      let o = [];
      t > 0 && this.decomposeLeft(t, o);
      let u = o.length;
      for (let f of n) o.push(f);
      if (t > 0 && Qb(o, u - 1), e < this.length) {
        let f = o.length;
        this.decomposeRight(e, o), Qb(o, f);
      }
      return Ve.of(o);
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
      ]) : (this.left = Ku(this.left, t), this.right = Ku(this.right, e), this.setHeight(t.height + e.height), this.outdated = t.outdated || e.outdated, this.size = t.size + e.size, this.length = t.length + this.break + e.length, this);
    }
    updateHeight(t, e = 0, n = false, r) {
      let { left: o, right: u } = this, f = e + o.length + this.break, h = null;
      return r && r.from <= e + o.length && r.more ? h = o = o.updateHeight(t, e, n, r) : o.updateHeight(t, e, n), r && r.from <= f + u.length && r.more ? h = u = u.updateHeight(t, f, n, r) : u.updateHeight(t, f, n), h ? this.balanced(o, u) : (this.height = this.left.height + this.right.height, this.outdated = false, this);
    }
    toString() {
      return this.left + (this.break ? " " : "-") + this.right;
    }
  }
  function Qb(l, t) {
    let e, n;
    l[t] == null && (e = l[t - 1]) instanceof Ae && (n = l[t + 1]) instanceof Ae && l.splice(t - 1, 3, new Ae(e.length + 1 + n.length));
  }
  const E_ = 5;
  class Rm {
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
        let r = n.widget ? n.widget.estimatedHeight : 0, o = n.widget ? n.widget.lineBreaks : 0;
        r < 0 && (r = this.oracle.lineHeight);
        let u = e - t;
        n.block ? this.addBlock(new bS(u, r, n)) : (u || o || r >= E_) && this.addLineDeco(r, o, u);
      } else e > t && this.span(t, e);
      this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
    }
    enterLine() {
      if (this.lineStart > -1) return;
      let { from: t, to: e } = this.oracle.doc.lineAt(this.pos);
      this.lineStart = t, this.lineEnd = e, this.writtenTo < t && ((this.writtenTo < t - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, t - 1)), this.nodes.push(null)), this.pos > t && this.nodes.push(new ai(this.pos - t, -1)), this.writtenTo = this.pos;
    }
    blankContent(t, e) {
      let n = new Ae(e - t);
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
      let o = new Rm(n, t);
      return Et.spans(e, n, r, o, 0), o.finish(n);
    }
  }
  function B_(l, t, e) {
    let n = new R_();
    return Et.compare(l, t, e, n, 0), n.changes;
  }
  class R_ {
    constructor() {
      this.changes = [];
    }
    compareRange() {
    }
    comparePoint(t, e, n, r) {
      (t < e || n && n.heightRelevant || r && r.heightRelevant) && Bu(t, e, this.changes, 5);
    }
  }
  function z_(l, t) {
    let e = l.getBoundingClientRect(), n = l.ownerDocument, r = n.defaultView || window, o = Math.max(0, e.left), u = Math.min(r.innerWidth, e.right), f = Math.max(0, e.top), h = Math.min(r.innerHeight, e.bottom);
    for (let g = l.parentNode; g && g != n.body; ) if (g.nodeType == 1) {
      let p = g, y = window.getComputedStyle(p);
      if ((p.scrollHeight > p.clientHeight || p.scrollWidth > p.clientWidth) && y.overflow != "visible") {
        let v = p.getBoundingClientRect();
        o = Math.max(o, v.left), u = Math.min(u, v.right), f = Math.max(f, v.top), h = Math.min(g == l.parentNode ? r.innerHeight : h, v.bottom);
      }
      g = y.position == "absolute" || y.position == "fixed" ? p.offsetParent : p.parentNode;
    } else if (g.nodeType == 11) g = g.host;
    else break;
    return {
      left: o - e.left,
      right: Math.max(o, u) - e.left,
      top: f - (e.top + t),
      bottom: Math.max(f, h) - (e.top + t)
    };
  }
  function N_(l) {
    let t = l.getBoundingClientRect(), e = l.ownerDocument.defaultView || window;
    return t.left < e.innerWidth && t.right > 0 && t.top < e.innerHeight && t.bottom > 0;
  }
  function L_(l, t) {
    let e = l.getBoundingClientRect();
    return {
      left: 0,
      right: e.right - e.left,
      top: t,
      bottom: e.bottom - (e.top + t)
    };
  }
  class id {
    constructor(t, e, n, r) {
      this.from = t, this.to = e, this.size = n, this.displaySize = r;
    }
    static same(t, e) {
      if (t.length != e.length) return false;
      for (let n = 0; n < t.length; n++) {
        let r = t[n], o = e[n];
        if (r.from != o.from || r.to != o.to || r.size != o.size) return false;
      }
      return true;
    }
    draw(t, e) {
      return ut.replace({
        widget: new H_(this.displaySize * (e ? t.scaleY : t.scaleX), e)
      }).range(this.from, this.to);
    }
  }
  class H_ extends Mn {
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
  class Zb {
    constructor(t) {
      this.state = t, this.pixelViewport = {
        left: 0,
        right: window.innerWidth,
        top: 0,
        bottom: 0
      }, this.inView = true, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = false, this.scaleX = 1, this.scaleY = 1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = Wb, this.scrollTarget = null, this.printing = false, this.mustMeasureContent = true, this.defaultTextDirection = Wt.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = false;
      let e = t.facet(Dm).some((n) => typeof n != "function" && n.class == "cm-lineWrapping");
      this.heightOracle = new k_(e), this.stateDeco = t.facet(bo).filter((n) => typeof n != "function"), this.heightMap = Ve.empty().applyChanges(this.stateDeco, Bt.empty, this.heightOracle.setDoc(t.doc), [
        new Ai(0, 0, 0, t.doc.length)
      ]);
      for (let n = 0; n < 2 && (this.viewport = this.getViewport(0, null), !!this.updateForViewport()); n++) ;
      this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = ut.set(this.lineGaps.map((n) => n.draw(this, false))), this.computeVisibleRanges();
    }
    updateForViewport() {
      let t = [
        this.viewport
      ], { main: e } = this.state.selection;
      for (let n = 0; n <= 1; n++) {
        let r = n ? e.head : e.anchor;
        if (!t.some(({ from: o, to: u }) => r >= o && r <= u)) {
          let { from: o, to: u } = this.lineBlockAt(r);
          t.push(new fu(o, u));
        }
      }
      return this.viewports = t.sort((n, r) => n.from - r.from), this.updateScaler();
    }
    updateScaler() {
      let t = this.scaler;
      return this.scaler = this.heightMap.height <= 7e6 ? Wb : new zm(this.heightOracle, this.heightMap, this.viewports), t.eq(this.scaler) ? 0 : 2;
    }
    updateViewportLines() {
      this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (t) => {
        this.viewportLines.push(io(t, this.scaler));
      });
    }
    update(t, e = null) {
      this.state = t.state;
      let n = this.stateDeco;
      this.stateDeco = this.state.facet(bo).filter((p) => typeof p != "function");
      let r = t.changedRanges, o = Ai.extendWithRanges(r, B_(n, this.stateDeco, t ? t.changes : de.empty(this.state.doc.length))), u = this.heightMap.height, f = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
      Kb(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, t.startState.doc, this.heightOracle.setDoc(this.state.doc), o), (this.heightMap.height != u || Zs) && (t.flags |= 2), f ? (this.scrollAnchorPos = t.changes.mapPos(f.from, -1), this.scrollAnchorHeight = f.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = u);
      let h = o.length ? this.mapViewport(this.viewport, t.changes) : this.viewport;
      (e && (e.range.head < h.from || e.range.head > h.to) || !this.viewportIsAppropriate(h)) && (h = this.getViewport(0, e));
      let g = h.from != this.viewport.from || h.to != this.viewport.to;
      this.viewport = h, t.flags |= this.updateForViewport(), (g || !t.changes.empty || t.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, t.changes))), t.flags |= this.computeVisibleRanges(t.changes), e && (this.scrollTarget = e), !this.mustEnforceCursorAssoc && t.selectionSet && t.view.lineWrapping && t.state.selection.main.empty && t.state.selection.main.assoc && !t.state.facet(Iv) && (this.mustEnforceCursorAssoc = true);
    }
    measure(t) {
      let e = t.contentDOM, n = window.getComputedStyle(e), r = this.heightOracle, o = n.whiteSpace;
      this.defaultTextDirection = n.direction == "rtl" ? Wt.RTL : Wt.LTR;
      let u = this.heightOracle.mustRefreshForWrapping(o), f = e.getBoundingClientRect(), h = u || this.mustMeasureContent || this.contentDOMHeight != f.height;
      this.contentDOMHeight = f.height, this.mustMeasureContent = false;
      let g = 0, p = 0;
      if (f.width && f.height) {
        let { scaleX: Q, scaleY: N } = _v(e, f);
        (Q > 5e-3 && Math.abs(this.scaleX - Q) > 5e-3 || N > 5e-3 && Math.abs(this.scaleY - N) > 5e-3) && (this.scaleX = Q, this.scaleY = N, g |= 16, u = h = true);
      }
      let y = (parseInt(n.paddingTop) || 0) * this.scaleY, v = (parseInt(n.paddingBottom) || 0) * this.scaleY;
      (this.paddingTop != y || this.paddingBottom != v) && (this.paddingTop = y, this.paddingBottom = v, g |= 18), this.editorWidth != t.scrollDOM.clientWidth && (r.lineWrapping && (h = true), this.editorWidth = t.scrollDOM.clientWidth, g |= 16);
      let S = t.scrollDOM.scrollTop * this.scaleY;
      this.scrollTop != S && (this.scrollAnchorHeight = -1, this.scrollTop = S), this.scrolledToBottom = Ov(t.scrollDOM);
      let w = (this.printing ? L_ : z_)(e, this.paddingTop), C = w.top - this.pixelViewport.top, _ = w.bottom - this.pixelViewport.bottom;
      this.pixelViewport = w;
      let O = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
      if (O != this.inView && (this.inView = O, O && (h = true)), !this.inView && !this.scrollTarget && !N_(t.dom)) return 0;
      let j = f.width;
      if ((this.contentDOMWidth != j || this.editorHeight != t.scrollDOM.clientHeight) && (this.contentDOMWidth = f.width, this.editorHeight = t.scrollDOM.clientHeight, g |= 16), h) {
        let Q = t.docView.measureVisibleLineHeights(this.viewport);
        if (r.mustRefreshForHeights(Q) && (u = true), u || r.lineWrapping && Math.abs(j - this.contentDOMWidth) > r.charWidth) {
          let { lineHeight: N, charWidth: G, textHeight: V } = t.docView.measureTextSize();
          u = N > 0 && r.refresh(o, N, G, V, Math.max(5, j / G), Q), u && (t.docView.minWidth = 0, g |= 16);
        }
        C > 0 && _ > 0 ? p = Math.max(C, _) : C < 0 && _ < 0 && (p = Math.min(C, _)), Kb();
        for (let N of this.viewports) {
          let G = N.from == this.viewport.from ? Q : t.docView.measureVisibleLineHeights(N);
          this.heightMap = (u ? Ve.empty().applyChanges(this.stateDeco, Bt.empty, this.heightOracle, [
            new Ai(0, 0, 0, t.state.doc.length)
          ]) : this.heightMap).updateHeight(r, 0, u, new O_(N.from, G));
        }
        Zs && (g |= 2);
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
      let n = 0.5 - Math.max(-0.5, Math.min(0.5, t / 1e3 / 2)), r = this.heightMap, o = this.heightOracle, { visibleTop: u, visibleBottom: f } = this, h = new fu(r.lineAt(u - n * 1e3, Zt.ByHeight, o, 0, 0).from, r.lineAt(f + (1 - n) * 1e3, Zt.ByHeight, o, 0, 0).to);
      if (e) {
        let { head: g } = e.range;
        if (g < h.from || g > h.to) {
          let p = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), y = r.lineAt(g, Zt.ByPos, o, 0, 0), v;
          e.y == "center" ? v = (y.top + y.bottom) / 2 - p / 2 : e.y == "start" || e.y == "nearest" && g < h.from ? v = y.top : v = y.bottom - p, h = new fu(r.lineAt(v - 1e3 / 2, Zt.ByHeight, o, 0, 0).from, r.lineAt(v + p + 1e3 / 2, Zt.ByHeight, o, 0, 0).to);
        }
      }
      return h;
    }
    mapViewport(t, e) {
      let n = e.mapPos(t.from, -1), r = e.mapPos(t.to, 1);
      return new fu(this.heightMap.lineAt(n, Zt.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(r, Zt.ByPos, this.heightOracle, 0, 0).to);
    }
    viewportIsAppropriate({ from: t, to: e }, n = 0) {
      if (!this.inView) return true;
      let { top: r } = this.heightMap.lineAt(t, Zt.ByPos, this.heightOracle, 0, 0), { bottom: o } = this.heightMap.lineAt(e, Zt.ByPos, this.heightOracle, 0, 0), { visibleTop: u, visibleBottom: f } = this;
      return (t == 0 || r <= u - Math.max(10, Math.min(-n, 250))) && (e == this.state.doc.length || o >= f + Math.max(10, Math.min(n, 250))) && r > u - 2 * 1e3 && o < f + 2 * 1e3;
    }
    mapLineGaps(t, e) {
      if (!t.length || e.empty) return t;
      let n = [];
      for (let r of t) e.touchesRange(r.from, r.to) || n.push(new id(e.mapPos(r.from), e.mapPos(r.to), r.size, r.displaySize));
      return n;
    }
    ensureLineGaps(t, e) {
      let n = this.heightOracle.lineWrapping, r = n ? 1e4 : 2e3, o = r >> 1, u = r << 1;
      if (this.defaultTextDirection != Wt.LTR && !n) return [];
      let f = [], h = (p, y, v, S) => {
        if (y - p < o) return;
        let w = this.state.selection.main, C = [
          w.from
        ];
        w.empty || C.push(w.to);
        for (let O of C) if (O > p && O < y) {
          h(p, O - 10, v, S), h(O + 10, y, v, S);
          return;
        }
        let _ = V_(t, (O) => O.from >= v.from && O.to <= v.to && Math.abs(O.from - p) < o && Math.abs(O.to - y) < o && !C.some((j) => O.from < j && O.to > j));
        if (!_) {
          if (y < v.to && e && n && e.visibleRanges.some((L) => L.from <= y && L.to >= y)) {
            let L = e.moveToLineBoundary(K.cursor(y), false, true).head;
            L > p && (y = L);
          }
          let O = this.gapSize(v, p, y, S), j = n || O < 2e6 ? O : 2e6;
          _ = new id(p, y, O, j);
        }
        f.push(_);
      }, g = (p) => {
        if (p.length < u || p.type != Ue.Text) return;
        let y = U_(p.from, p.to, this.stateDeco);
        if (y.total < u) return;
        let v = this.scrollTarget ? this.scrollTarget.range.head : null, S, w;
        if (n) {
          let C = r / this.heightOracle.lineLength * this.heightOracle.lineHeight, _, O;
          if (v != null) {
            let j = du(y, v), L = ((this.visibleBottom - this.visibleTop) / 2 + C) / p.height;
            _ = j - L, O = j + L;
          } else _ = (this.visibleTop - p.top - C) / p.height, O = (this.visibleBottom - p.top + C) / p.height;
          S = hu(y, _), w = hu(y, O);
        } else {
          let C = y.total * this.heightOracle.charWidth, _ = r * this.heightOracle.charWidth, O = 0;
          if (C > 2e6) for (let G of t) G.from >= p.from && G.from < p.to && G.size != G.displaySize && G.from * this.heightOracle.charWidth + O < this.pixelViewport.left && (O = G.size - G.displaySize);
          let j = this.pixelViewport.left + O, L = this.pixelViewport.right + O, Q, N;
          if (v != null) {
            let G = du(y, v), V = ((L - j) / 2 + _) / C;
            Q = G - V, N = G + V;
          } else Q = (j - _) / C, N = (L + _) / C;
          S = hu(y, Q), w = hu(y, N);
        }
        S > p.from && h(p.from, S, p, y), w < p.to && h(w, p.to, p, y);
      };
      for (let p of this.viewportLines) Array.isArray(p.type) ? p.type.forEach(g) : g(p);
      return f;
    }
    gapSize(t, e, n, r) {
      let o = du(r, n) - du(r, e);
      return this.heightOracle.lineWrapping ? t.height * o : r.total * this.heightOracle.charWidth * o;
    }
    updateLineGaps(t) {
      id.same(t, this.lineGaps) || (this.lineGaps = t, this.lineGapDeco = ut.set(t.map((e) => e.draw(this, this.heightOracle.lineWrapping))));
    }
    computeVisibleRanges(t) {
      let e = this.stateDeco;
      this.lineGaps.length && (e = e.concat(this.lineGapDeco));
      let n = [];
      Et.spans(e, this.viewport.from, this.viewport.to, {
        span(o, u) {
          n.push({
            from: o,
            to: u
          });
        },
        point() {
        }
      }, 20);
      let r = 0;
      if (n.length != this.visibleRanges.length) r = 12;
      else for (let o = 0; o < n.length && !(r & 8); o++) {
        let u = this.visibleRanges[o], f = n[o];
        (u.from != f.from || u.to != f.to) && (r |= 4, t && t.mapPos(u.from, -1) == f.from && t.mapPos(u.to, 1) == f.to || (r |= 8));
      }
      return this.visibleRanges = n, r;
    }
    lineBlockAt(t) {
      return t >= this.viewport.from && t <= this.viewport.to && this.viewportLines.find((e) => e.from <= t && e.to >= t) || io(this.heightMap.lineAt(t, Zt.ByPos, this.heightOracle, 0, 0), this.scaler);
    }
    lineBlockAtHeight(t) {
      return t >= this.viewportLines[0].top && t <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((e) => e.top <= t && e.bottom >= t) || io(this.heightMap.lineAt(this.scaler.fromDOM(t), Zt.ByHeight, this.heightOracle, 0, 0), this.scaler);
    }
    scrollAnchorAt(t) {
      let e = this.lineBlockAtHeight(t + 8);
      return e.from >= this.viewport.from || this.viewportLines[0].top - t > 200 ? e : this.viewportLines[0];
    }
    elementAtHeight(t) {
      return io(this.heightMap.blockAt(this.scaler.fromDOM(t), this.heightOracle, 0, 0), this.scaler);
    }
    get docHeight() {
      return this.scaler.toDOM(this.heightMap.height);
    }
    get contentHeight() {
      return this.docHeight + this.paddingTop + this.paddingBottom;
    }
  }
  class fu {
    constructor(t, e) {
      this.from = t, this.to = e;
    }
  }
  function U_(l, t, e) {
    let n = [], r = l, o = 0;
    return Et.spans(e, l, t, {
      span() {
      },
      point(u, f) {
        u > r && (n.push({
          from: r,
          to: u
        }), o += u - r), r = f;
      }
    }, 20), r < t && (n.push({
      from: r,
      to: t
    }), o += t - r), {
      total: o,
      ranges: n
    };
  }
  function hu({ total: l, ranges: t }, e) {
    if (e <= 0) return t[0].from;
    if (e >= 1) return t[t.length - 1].to;
    let n = Math.floor(l * e);
    for (let r = 0; ; r++) {
      let { from: o, to: u } = t[r], f = u - o;
      if (n <= f) return o + n;
      n -= f;
    }
  }
  function du(l, t) {
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
  function V_(l, t) {
    for (let e of l) if (t(e)) return e;
  }
  const Wb = {
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
  class zm {
    constructor(t, e, n) {
      let r = 0, o = 0, u = 0;
      this.viewports = n.map(({ from: f, to: h }) => {
        let g = e.lineAt(f, Zt.ByPos, t, 0, 0).top, p = e.lineAt(h, Zt.ByPos, t, 0, 0).bottom;
        return r += p - g, {
          from: f,
          to: h,
          top: g,
          bottom: p,
          domTop: 0,
          domBottom: 0
        };
      }), this.scale = (7e6 - r) / (e.height - r);
      for (let f of this.viewports) f.domTop = u + (f.top - o) * this.scale, u = f.domBottom = f.domTop + (f.bottom - f.top), o = f.bottom;
    }
    toDOM(t) {
      for (let e = 0, n = 0, r = 0; ; e++) {
        let o = e < this.viewports.length ? this.viewports[e] : null;
        if (!o || t < o.top) return r + (t - n) * this.scale;
        if (t <= o.bottom) return o.domTop + (t - o.top);
        n = o.bottom, r = o.domBottom;
      }
    }
    fromDOM(t) {
      for (let e = 0, n = 0, r = 0; ; e++) {
        let o = e < this.viewports.length ? this.viewports[e] : null;
        if (!o || t < o.domTop) return n + (t - r) / this.scale;
        if (t <= o.domBottom) return o.top + (t - o.domTop);
        n = o.bottom, r = o.domBottom;
      }
    }
    eq(t) {
      return t instanceof zm ? this.scale == t.scale && this.viewports.length == t.viewports.length && this.viewports.every((e, n) => e.from == t.viewports[n].from && e.to == t.viewports[n].to) : false;
    }
  }
  function io(l, t) {
    if (t.scale == 1) return l;
    let e = t.toDOM(l.top), n = t.toDOM(l.bottom);
    return new Ki(l.from, l.length, e, n - e, Array.isArray(l._content) ? l._content.map((r) => io(r, t)) : l._content);
  }
  const mu = et.define({
    combine: (l) => l.join(" ")
  }), em = et.define({
    combine: (l) => l.indexOf(true) > -1
  }), im = sl.newName(), vS = sl.newName(), SS = sl.newName(), xS = {
    "&light": "." + vS,
    "&dark": "." + SS
  };
  function nm(l, t, e) {
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
  const q_ = nm("." + im, {
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
  }, xS), j_ = {
    childList: true,
    characterData: true,
    subtree: true,
    attributes: true,
    characterDataOldValue: true
  }, nd = F.ie && F.ie_version <= 11;
  class Y_ {
    constructor(t) {
      this.view = t, this.active = false, this.editContext = null, this.selectionRange = new CM(), this.selectionChanged = false, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = false, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = t.contentDOM, this.observer = new MutationObserver((e) => {
        for (let n of e) this.queue.push(n);
        (F.ie && F.ie_version <= 11 || F.ios && t.composing) && e.some((n) => n.type == "childList" && n.removedNodes.length || n.type == "characterData" && n.oldValue.length > n.target.nodeValue.length) ? this.flushSoon() : this.flush();
      }), window.EditContext && F.android && t.constructor.EDIT_CONTEXT !== false && !(F.chrome && F.chrome_version < 126) && (this.editContext = new X_(t), t.state.facet(vn) && (t.contentDOM.editContext = this.editContext.editContext)), nd && (this.onCharData = (e) => {
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
      if (n.state.facet(vn) ? n.root.activeElement != this.dom : !Eu(this.dom, r)) return;
      let o = r.anchorNode && n.docView.nearest(r.anchorNode);
      if (o && o.ignoreEvent(t)) {
        e || (this.selectionChanged = false);
        return;
      }
      (F.ie && F.ie_version <= 11 || F.android && F.chrome) && !n.state.selection.main.empty && r.focusNode && ao(r.focusNode, r.focusOffset, r.anchorNode, r.anchorOffset) ? this.flushSoon() : this.flush(false);
    }
    readSelectionRange() {
      let { view: t } = this, e = yo(t.root);
      if (!e) return false;
      let n = F.safari && t.root.nodeType == 11 && t.root.activeElement == this.dom && G_(this.view, e) || e;
      if (!n || this.selectionRange.eq(n)) return false;
      let r = Eu(this.dom, n);
      return r && !this.selectionChanged && t.inputState.lastFocusTime > Date.now() - 200 && t.inputState.lastTouchTime < Date.now() - 300 && _M(this.dom, n) ? (this.view.inputState.lastFocusTime = 0, t.docView.updateSelection(), false) : (this.selectionRange.setRange(n), r && (this.selectionChanged = true), true);
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
      this.active || (this.observer.observe(this.dom, j_), nd && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = true);
    }
    stop() {
      this.active && (this.active = false, this.observer.disconnect(), nd && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
    }
    clear() {
      this.processRecords(), this.queue.length = 0, this.selectionChanged = false;
    }
    delayAndroidKey(t, e) {
      var n;
      if (!this.delayedAndroidKey) {
        let r = () => {
          let o = this.delayedAndroidKey;
          o && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = o.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && o.force && Ls(this.dom, o.key, o.keyCode));
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
      for (let o of t) {
        let u = this.readMutation(o);
        u && (u.typeOver && (r = true), e == -1 ? { from: e, to: n } = u : (e = Math.min(u.from, e), n = Math.max(u.to, n)));
      }
      return {
        from: e,
        to: n,
        typeOver: r
      };
    }
    readChange() {
      let { from: t, to: e, typeOver: n } = this.processRecords(), r = this.selectionChanged && Eu(this.dom, this.selectionRange);
      if (t < 0 && !r) return null;
      t > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = false;
      let o = new o_(this.view, t, e, n);
      return this.view.docView.domChanged = {
        newSel: o.newSel ? o.newSel.main : null
      }, o;
    }
    flush(t = true) {
      if (this.delayedFlush >= 0 || this.delayedAndroidKey) return false;
      t && this.readSelectionRange();
      let e = this.readChange();
      if (!e) return this.view.requestMeasure(), false;
      let n = this.view.state, r = aS(this.view, e);
      return this.view.state == n && (e.domChanged || e.newSel && !e.newSel.main.eq(this.view.state.selection.main)) && this.view.update([]), r;
    }
    readMutation(t) {
      let e = this.view.docView.nearest(t.target);
      if (!e || e.ignoreMutation(t)) return null;
      if (e.markDirty(t.type == "attributes"), t.type == "attributes" && (e.flags |= 4), t.type == "childList") {
        let n = Jb(e, t.previousSibling || t.target.previousSibling, -1), r = Jb(e, t.nextSibling || t.target.nextSibling, 1);
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
  function Jb(l, t, e) {
    for (; t; ) {
      let n = jt.get(t);
      if (n && n.parent == l) return n;
      let r = t.parentNode;
      t = r != l.dom ? r : e > 0 ? t.nextSibling : t.previousSibling;
    }
    return null;
  }
  function Fb(l, t) {
    let e = t.startContainer, n = t.startOffset, r = t.endContainer, o = t.endOffset, u = l.docView.domAtPos(l.state.selection.main.anchor);
    return ao(u.node, u.offset, r, o) && ([e, n, r, o] = [
      r,
      o,
      e,
      n
    ]), {
      anchorNode: e,
      anchorOffset: n,
      focusNode: r,
      focusOffset: o
    };
  }
  function G_(l, t) {
    if (t.getComposedRanges) {
      let r = t.getComposedRanges(l.root)[0];
      if (r) return Fb(l, r);
    }
    let e = null;
    function n(r) {
      r.preventDefault(), r.stopImmediatePropagation(), e = r.getTargetRanges()[0];
    }
    return l.contentDOM.addEventListener("beforeinput", n, true), l.dom.ownerDocument.execCommand("indent"), l.contentDOM.removeEventListener("beforeinput", n, true), e ? Fb(l, e) : null;
  }
  class X_ {
    constructor(t) {
      this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = /* @__PURE__ */ Object.create(null), this.composing = null, this.resetRange(t.state);
      let e = this.editContext = new window.EditContext({
        text: t.state.doc.sliceString(this.from, this.to),
        selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, t.state.selection.main.anchor))),
        selectionEnd: this.toContextPos(t.state.selection.main.head)
      });
      this.handlers.textupdate = (n) => {
        let r = t.state.selection.main, { anchor: o, head: u } = r, f = this.toEditorPos(n.updateRangeStart), h = this.toEditorPos(n.updateRangeEnd);
        t.inputState.composing >= 0 && !this.composing && (this.composing = {
          contextBase: n.updateRangeStart,
          editorBase: f,
          drifted: false
        });
        let g = h - f > n.text.length;
        f == this.from && o < this.from ? f = o : h == this.to && o > this.to && (h = o);
        let p = uS(t.state.sliceDoc(f, h), n.text, (g ? r.from : r.to) - f, g ? "end" : null);
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
          insert: Bt.of(n.text.slice(p.from, p.toB).split(`
`))
        };
        if ((F.mac || F.android) && y.from == u - 1 && /^\. ?$/.test(n.text) && t.contentDOM.getAttribute("autocorrect") == "off" && (y = {
          from: f,
          to: h,
          insert: Bt.of([
            n.text.replace(".", " ")
          ])
        }), this.pendingContextChange = y, !t.state.readOnly) {
          let v = this.to - this.from + (y.to - y.from + y.insert.length);
          Bm(t, y, K.single(this.toEditorPos(n.selectionStart, v), this.toEditorPos(n.selectionEnd, v)));
        }
        this.pendingContextChange && (this.revertPending(t.state), this.setSelection(t.state)), y.from < y.to && !y.insert.length && t.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(e.text.slice(Math.max(0, n.updateRangeStart - 1), Math.min(e.text.length, n.updateRangeStart + 1))) && this.handlers.compositionend(n);
      }, this.handlers.characterboundsupdate = (n) => {
        let r = [], o = null;
        for (let u = this.toEditorPos(n.rangeStart), f = this.toEditorPos(n.rangeEnd); u < f; u++) {
          let h = t.coordsForChar(u);
          o = h && new DOMRect(h.left, h.top, h.right - h.left, h.bottom - h.top) || o || new DOMRect(), r.push(o);
        }
        e.updateCharacterBounds(n.rangeStart, r);
      }, this.handlers.textformatupdate = (n) => {
        let r = [];
        for (let o of n.getTextFormats()) {
          let u = o.underlineStyle, f = o.underlineThickness;
          if (!/none/i.test(u) && !/none/i.test(f)) {
            let h = this.toEditorPos(o.rangeStart), g = this.toEditorPos(o.rangeEnd);
            if (h < g) {
              let p = `text-decoration: underline ${/^[a-z]/.test(u) ? u + " " : u == "Dashed" ? "dashed " : u == "Squiggle" ? "wavy " : ""}${/thin/i.test(f) ? 1 : 2}px`;
              r.push(ut.mark({
                attributes: {
                  style: p
                }
              }).range(h, g));
            }
          }
        }
        t.dispatch({
          effects: $v.of(ut.set(r))
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
          let r = yo(n.root);
          r && r.rangeCount && this.editContext.updateSelectionBounds(r.getRangeAt(0).getBoundingClientRect());
        }
      };
    }
    applyEdits(t) {
      let e = 0, n = false, r = this.pendingContextChange;
      return t.changes.iterChanges((o, u, f, h, g) => {
        if (n) return;
        let p = g.length - (u - o);
        if (r && u >= r.to) if (r.from == o && r.to == u && r.insert.eq(g)) {
          r = this.pendingContextChange = null, e += p, this.to += p;
          return;
        } else r = null, this.revertPending(t.state);
        if (o += e, u += e, u <= this.from) this.from += p, this.to += p;
        else if (o < this.to) {
          if (o < this.from || u > this.to || this.to - this.from + g.length > 3e4) {
            n = true;
            return;
          }
          this.editContext.updateText(this.toContextPos(o), this.toContextPos(u), g.toString()), this.to += p;
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
  class I {
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
      this.dispatchTransactions = t.dispatchTransactions || n && ((r) => r.forEach((o) => n(o, this))) || ((r) => this.update(r)), this.dispatch = this.dispatch.bind(this), this._root = t.root || MM(t.parent) || document, this.viewState = new Zb(t.state || kt.create(t)), t.scrollTo && t.scrollTo.is(au) && (this.viewState.scrollTarget = t.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(Es).map((r) => new $h(r));
      for (let r of this.plugins) r.update(this);
      this.observer = new Y_(this), this.inputState = new f_(this), this.inputState.ensureHandlers(this.plugins), this.docView = new kb(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), !((e = document.fonts) === null || e === void 0) && e.ready && document.fonts.ready.then(() => this.requestMeasure());
    }
    dispatch(...t) {
      let e = t.length == 1 && t[0] instanceof me ? t : t.length == 1 && Array.isArray(t[0]) ? t[0] : [
        this.state.update(...t)
      ];
      this.dispatchTransactions(e, this);
    }
    update(t) {
      if (this.updateState != 0) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
      let e = false, n = false, r, o = this.state;
      for (let v of t) {
        if (v.startState != o) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
        o = v.state;
      }
      if (this.destroyed) {
        this.viewState.state = o;
        return;
      }
      let u = this.hasFocus, f = 0, h = null;
      t.some((v) => v.annotation(gS)) ? (this.inputState.notifiedFocused = u, f = 1) : u != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = u, h = pS(o, u), h || (f = 1));
      let g = this.observer.delayedAndroidKey, p = null;
      if (g ? (this.observer.clearDelayedAndroidKey(), p = this.observer.readChange(), (p && !this.state.doc.eq(o.doc) || !this.state.selection.eq(o.selection)) && (p = null)) : this.observer.clear(), o.facet(kt.phrases) != this.state.facet(kt.phrases)) return this.setState(o);
      r = Xu.create(this, o, t), r.flags |= f;
      let y = this.viewState.scrollTarget;
      try {
        this.updateState = 2;
        for (let v of t) {
          if (y && (y = y.map(v.changes)), v.scrollIntoView) {
            let { main: S } = v.state.selection;
            y = new Hs(S.empty ? S : K.cursor(S.head, S.head > S.anchor ? -1 : 1));
          }
          for (let S of v.effects) S.is(au) && (y = S.value.clip(this.state));
        }
        this.viewState.update(r, y), this.bidiCache = Qu.update(this.bidiCache, r.changes), r.empty || (this.updatePlugins(r), this.inputState.update(r)), e = this.docView.update(r), this.state.facet(to) != this.styleModules && this.mountStyles(), n = this.updateAttrs(), this.showAnnouncements(t), this.docView.updateSelection(e, t.some((v) => v.isUserEvent("select.pointer")));
      } finally {
        this.updateState = 0;
      }
      if (r.startState.facet(mu) != r.state.facet(mu) && (this.viewState.mustMeasureContent = true), (e || n || y || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), e && this.docViewUpdate(), !r.empty) for (let v of this.state.facet(Id)) try {
        v(r);
      } catch (S) {
        Je(this.state, S, "update listener");
      }
      (h || p) && Promise.resolve().then(() => {
        h && this.state == h.startState && this.dispatch(h), p && !aS(this, p) && g.force && Ls(this.contentDOM, g.key, g.keyCode);
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
        this.viewState = new Zb(t), this.plugins = t.facet(Es).map((n) => new $h(n)), this.pluginMap.clear();
        for (let n of this.plugins) n.update(this);
        this.docView.destroy(), this.docView = new kb(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
      } finally {
        this.updateState = 0;
      }
      e && this.focus(), this.requestMeasure();
    }
    updatePlugins(t) {
      let e = t.startState.facet(Es), n = t.state.facet(Es);
      if (e != n) {
        let r = [];
        for (let o of n) {
          let u = e.indexOf(o);
          if (u < 0) r.push(new $h(o));
          else {
            let f = this.plugins[u];
            f.mustUpdate = t, r.push(f);
          }
        }
        for (let o of this.plugins) o.mustUpdate != t && o.destroy(this);
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
      let e = null, n = this.scrollDOM, r = n.scrollTop * this.scaleY, { scrollAnchorPos: o, scrollAnchorHeight: u } = this.viewState;
      Math.abs(r - this.viewState.scrollTop) > 1 && (u = -1), this.viewState.scrollAnchorHeight = -1;
      try {
        for (let f = 0; ; f++) {
          if (u < 0) if (Ov(n)) o = -1, u = this.viewState.heightMap.height;
          else {
            let S = this.viewState.scrollAnchorAt(r);
            o = S.from, u = S.top;
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
              return Je(this.state, w), Ib;
            }
          }), y = Xu.create(this, this.state, []), v = false;
          y.flags |= h, e ? e.flags |= h : e = y, this.updateState = 2, y.empty || (this.updatePlugins(y), this.inputState.update(y), this.updateAttrs(), v = this.docView.update(y), v && this.docViewUpdate());
          for (let S = 0; S < g.length; S++) if (p[S] != Ib) try {
            let w = g[S];
            w.write && w.write(p[S], this);
          } catch (w) {
            Je(this.state, w);
          }
          if (v && this.docView.updateSelection(true), !y.viewportChanged && this.measureRequests.length == 0) {
            if (this.viewState.editorHeight) if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, u = -1;
              continue;
            } else {
              let w = (o < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(o).top) - u;
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
      if (e && !e.empty) for (let f of this.state.facet(Id)) f(e);
    }
    get themeClasses() {
      return im + " " + (this.state.facet(em) ? SS : vS) + " " + this.state.facet(mu);
    }
    updateAttrs() {
      let t = Pb(this, tS, {
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
      this.state.readOnly && (e["aria-readonly"] = "true"), Pb(this, Dm, e);
      let n = this.observer.ignore(() => {
        let r = Qd(this.contentDOM, this.contentAttrs, e), o = Qd(this.dom, this.editorAttrs, t);
        return r || o;
      });
      return this.editorAttrs = t, this.contentAttrs = e, n;
    }
    showAnnouncements(t) {
      let e = true;
      for (let n of t) for (let r of n.effects) if (r.is(I.announce)) {
        e && (this.announceDOM.textContent = ""), e = false;
        let o = this.announceDOM.appendChild(document.createElement("div"));
        o.textContent = r.value;
      }
    }
    mountStyles() {
      this.styleModules = this.state.facet(to);
      let t = this.state.facet(I.cspNonce);
      sl.mount(this.root, this.styleModules.concat(q_).reverse(), t ? {
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
      return ed(this, t, Rb(this, t, e, n));
    }
    moveByGroup(t, e) {
      return ed(this, t, Rb(this, t, e, (n) => i_(this, t.head, n)));
    }
    visualLineSide(t, e) {
      let n = this.bidiSpans(t), r = this.textDirectionAt(t.from), o = n[e ? n.length - 1 : 0];
      return K.cursor(o.side(e, r) + t.from, o.forward(!e, r) ? 1 : -1);
    }
    moveToLineBoundary(t, e, n = true) {
      return e_(this, t, e, n);
    }
    moveVertically(t, e, n) {
      return ed(this, t, n_(this, t, e, n));
    }
    domAtPos(t) {
      return this.docView.domAtPos(t);
    }
    posAtDOM(t, e = 0) {
      return this.docView.posFromDOM(t, e);
    }
    posAtCoords(t, e = true) {
      return this.readMeasured(), sS(this, t, e);
    }
    coordsAtPos(t, e = 1) {
      this.readMeasured();
      let n = this.docView.coordsAt(t, e);
      if (!n || n.left == n.right) return n;
      let r = this.state.doc.lineAt(t), o = this.bidiSpans(r), u = o[el.find(o, t - r.from, -1, e)];
      return Do(n, u.dir == Wt.LTR == e > 0);
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
      return !this.state.facet(Fv) || t < this.viewport.from || t > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(t));
    }
    get lineWrapping() {
      return this.viewState.heightOracle.lineWrapping;
    }
    bidiSpans(t) {
      if (t.length > K_) return Yv(t.length);
      let e = this.textDirectionAt(t.from), n;
      for (let o of this.bidiCache) if (o.from == t.from && o.dir == e && (o.fresh || jv(o.isolates, n = Tb(this, t)))) return o.order;
      n || (n = Tb(this, t));
      let r = VM(t.text, e, n);
      return this.bidiCache.push(new Qu(t.from, t.to, e, n, true, r)), r;
    }
    get hasFocus() {
      var t;
      return (this.dom.ownerDocument.hasFocus() || F.safari && ((t = this.inputState) === null || t === void 0 ? void 0 : t.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
    }
    focus() {
      this.observer.ignore(() => {
        Tv(this.contentDOM), this.docView.updateSelection();
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
      return au.of(new Hs(typeof t == "number" ? K.cursor(t) : t, e.y, e.x, e.yMargin, e.xMargin));
    }
    scrollSnapshot() {
      let { scrollTop: t, scrollLeft: e } = this.scrollDOM, n = this.viewState.scrollAnchorAt(t);
      return au.of(new Hs(K.cursor(n.from), "start", "start", n.top - t, e, true));
    }
    setTabFocusMode(t) {
      t == null ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : typeof t == "boolean" ? this.inputState.tabFocusMode = t ? 0 : -1 : this.inputState.tabFocusMode != 0 && (this.inputState.tabFocusMode = Date.now() + t);
    }
    static domEventHandlers(t) {
      return $t.define(() => ({}), {
        eventHandlers: t
      });
    }
    static domEventObservers(t) {
      return $t.define(() => ({}), {
        eventObservers: t
      });
    }
    static theme(t, e) {
      let n = sl.newName(), r = [
        mu.of(n),
        to.of(nm(`.${n}`, t))
      ];
      return e && e.dark && r.push(em.of(true)), r;
    }
    static baseTheme(t) {
      return Gl.lowest(to.of(nm("." + im, t, xS)));
    }
    static findFromDOM(t) {
      var e;
      let n = t.querySelector(".cm-content"), r = n && jt.get(n) || jt.get(t);
      return ((e = r == null ? void 0 : r.rootView) === null || e === void 0 ? void 0 : e.view) || null;
    }
  }
  I.styleModule = to;
  I.inputHandler = Wv;
  I.clipboardInputFilter = km;
  I.clipboardOutputFilter = Om;
  I.scrollHandler = Pv;
  I.focusChangeEffect = Jv;
  I.perLineTextDirection = Fv;
  I.exceptionSink = Zv;
  I.updateListener = Id;
  I.editable = vn;
  I.mouseSelectionStyle = Qv;
  I.dragMovesSelection = Kv;
  I.clickAddsSelectionRange = Xv;
  I.decorations = bo;
  I.outerDecorations = eS;
  I.atomicRanges = Ro;
  I.bidiIsolatedRanges = iS;
  I.scrollMargins = nS;
  I.darkTheme = em;
  I.cspNonce = et.define({
    combine: (l) => l.length ? l[0] : ""
  });
  I.contentAttributes = Dm;
  I.editorAttributes = tS;
  I.lineWrapping = I.contentAttributes.of({
    class: "cm-lineWrapping"
  });
  I.announce = St.define();
  const K_ = 4096, Ib = {};
  class Qu {
    constructor(t, e, n, r, o, u) {
      this.from = t, this.to = e, this.dir = n, this.isolates = r, this.fresh = o, this.order = u;
    }
    static update(t, e) {
      if (e.empty && !t.some((o) => o.fresh)) return t;
      let n = [], r = t.length ? t[t.length - 1].dir : Wt.LTR;
      for (let o = Math.max(0, t.length - 10); o < t.length; o++) {
        let u = t[o];
        u.dir == r && !e.touchesRange(u.from, u.to) && n.push(new Qu(e.mapPos(u.from, 1), e.mapPos(u.to, -1), u.dir, u.isolates, false, u.order));
      }
      return n;
    }
  }
  function Pb(l, t, e) {
    for (let n = l.state.facet(t), r = n.length - 1; r >= 0; r--) {
      let o = n[r], u = typeof o == "function" ? o(l) : o;
      u && Kd(u, e);
    }
    return e;
  }
  const Q_ = F.mac ? "mac" : F.windows ? "win" : F.linux ? "linux" : "key";
  function Z_(l, t) {
    const e = l.split(/-(?!$)/);
    let n = e[e.length - 1];
    n == "Space" && (n = " ");
    let r, o, u, f;
    for (let h = 0; h < e.length - 1; ++h) {
      const g = e[h];
      if (/^(cmd|meta|m)$/i.test(g)) f = true;
      else if (/^a(lt)?$/i.test(g)) r = true;
      else if (/^(c|ctrl|control)$/i.test(g)) o = true;
      else if (/^s(hift)?$/i.test(g)) u = true;
      else if (/^mod$/i.test(g)) t == "mac" ? f = true : o = true;
      else throw new Error("Unrecognized modifier name: " + g);
    }
    return r && (n = "Alt-" + n), o && (n = "Ctrl-" + n), f && (n = "Meta-" + n), u && (n = "Shift-" + n), n;
  }
  function gu(l, t, e) {
    return t.altKey && (l = "Alt-" + l), t.ctrlKey && (l = "Ctrl-" + l), t.metaKey && (l = "Meta-" + l), e !== false && t.shiftKey && (l = "Shift-" + l), l;
  }
  const W_ = Gl.default(I.domEventHandlers({
    keydown(l, t) {
      return AS(wS(t.state), l, t, "editor");
    }
  })), hc = et.define({
    enables: W_
  }), $b = /* @__PURE__ */ new WeakMap();
  function wS(l) {
    let t = l.facet(hc), e = $b.get(t);
    return e || $b.set(t, e = I_(t.reduce((n, r) => n.concat(r), []))), e;
  }
  function J_(l, t, e) {
    return AS(wS(l.state), t, l, e);
  }
  let $n = null;
  const F_ = 4e3;
  function I_(l, t = Q_) {
    let e = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null), r = (u, f) => {
      let h = n[u];
      if (h == null) n[u] = f;
      else if (h != f) throw new Error("Key binding " + u + " is used both as a regular binding and as a multi-stroke prefix");
    }, o = (u, f, h, g, p) => {
      var y, v;
      let S = e[u] || (e[u] = /* @__PURE__ */ Object.create(null)), w = f.split(/ (?!$)/).map((O) => Z_(O, t));
      for (let O = 1; O < w.length; O++) {
        let j = w.slice(0, O).join(" ");
        r(j, true), S[j] || (S[j] = {
          preventDefault: true,
          stopPropagation: false,
          run: [
            (L) => {
              let Q = $n = {
                view: L,
                prefix: j,
                scope: u
              };
              return setTimeout(() => {
                $n == Q && ($n = null);
              }, F_), true;
            }
          ]
        });
      }
      let C = w.join(" ");
      r(C, false);
      let _ = S[C] || (S[C] = {
        preventDefault: false,
        stopPropagation: false,
        run: ((v = (y = S._any) === null || y === void 0 ? void 0 : y.run) === null || v === void 0 ? void 0 : v.slice()) || []
      });
      h && _.run.push(h), g && (_.preventDefault = true), p && (_.stopPropagation = true);
    };
    for (let u of l) {
      let f = u.scope ? u.scope.split(" ") : [
        "editor"
      ];
      if (u.any) for (let g of f) {
        let p = e[g] || (e[g] = /* @__PURE__ */ Object.create(null));
        p._any || (p._any = {
          preventDefault: false,
          stopPropagation: false,
          run: []
        });
        let { any: y } = u;
        for (let v in p) p[v].run.push((S) => y(S, lm));
      }
      let h = u[t] || u.key;
      if (h) for (let g of f) o(g, h, u.run, u.preventDefault, u.stopPropagation), u.shift && o(g, "Shift-" + h, u.shift, u.preventDefault, u.stopPropagation);
    }
    return e;
  }
  let lm = null;
  function AS(l, t, e, n) {
    lm = t;
    let r = vM(t), o = Ze(r, 0), u = Xi(o) == r.length && r != " ", f = "", h = false, g = false, p = false;
    $n && $n.view == e && $n.scope == n && (f = $n.prefix + " ", fS.indexOf(t.keyCode) < 0 && (g = true, $n = null));
    let y = /* @__PURE__ */ new Set(), v = (_) => {
      if (_) {
        for (let O of _.run) if (!y.has(O) && (y.add(O), O(e))) return _.stopPropagation && (p = true), true;
        _.preventDefault && (_.stopPropagation && (p = true), g = true);
      }
      return false;
    }, S = l[n], w, C;
    return S && (v(S[f + gu(r, t, !u)]) ? h = true : u && (t.altKey || t.metaKey || t.ctrlKey) && !(F.windows && t.ctrlKey && t.altKey) && !(F.mac && t.altKey && !(t.ctrlKey || t.metaKey)) && (w = rl[t.keyCode]) && w != r ? (v(S[f + gu(w, t, true)]) || t.shiftKey && (C = po[t.keyCode]) != r && C != w && v(S[f + gu(C, t, false)])) && (h = true) : u && t.shiftKey && v(S[f + gu(r, t, true)]) && (h = true), !h && v(S._any) && (h = true)), g && (h = true), h && p && t.stopPropagation(), lm = null, h;
  }
  class zo {
    constructor(t, e, n, r, o) {
      this.className = t, this.left = e, this.top = n, this.width = r, this.height = o;
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
        let o = CS(t);
        return [
          new zo(e, r.left - o.left, r.top - o.top, null, r.bottom - r.top)
        ];
      } else return P_(t, e, n);
    }
  }
  function CS(l) {
    let t = l.scrollDOM.getBoundingClientRect();
    return {
      left: (l.textDirection == Wt.LTR ? t.left : t.right - l.scrollDOM.clientWidth * l.scaleX) - l.scrollDOM.scrollLeft * l.scaleX,
      top: t.top - l.scrollDOM.scrollTop * l.scaleY
    };
  }
  function t1(l, t, e, n) {
    let r = l.coordsAtPos(t, e * 2);
    if (!r) return n;
    let o = l.dom.getBoundingClientRect(), u = (r.top + r.bottom) / 2, f = l.posAtCoords({
      x: o.left + 1,
      y: u
    }), h = l.posAtCoords({
      x: o.right - 1,
      y: u
    });
    return f == null || h == null ? n : {
      from: Math.max(n.from, Math.min(f, h)),
      to: Math.min(n.to, Math.max(f, h))
    };
  }
  function P_(l, t, e) {
    if (e.to <= l.viewport.from || e.from >= l.viewport.to) return [];
    let n = Math.max(e.from, l.viewport.from), r = Math.min(e.to, l.viewport.to), o = l.textDirection == Wt.LTR, u = l.contentDOM, f = u.getBoundingClientRect(), h = CS(l), g = u.querySelector(".cm-line"), p = g && window.getComputedStyle(g), y = f.left + (p ? parseInt(p.paddingLeft) + Math.min(0, parseInt(p.textIndent)) : 0), v = f.right - (p ? parseInt(p.paddingRight) : 0), S = $d(l, n, 1), w = $d(l, r, -1), C = S.type == Ue.Text ? S : null, _ = w.type == Ue.Text ? w : null;
    if (C && (l.lineWrapping || S.widgetLineBreaks) && (C = t1(l, n, 1, C)), _ && (l.lineWrapping || w.widgetLineBreaks) && (_ = t1(l, r, -1, _)), C && _ && C.from == _.from && C.to == _.to) return j(L(e.from, e.to, C));
    {
      let N = C ? L(e.from, null, C) : Q(S, false), G = _ ? L(null, e.to, _) : Q(w, true), V = [];
      return (C || S).to < (_ || w).from - (C && _ ? 1 : 0) || S.widgetLineBreaks > 1 && N.bottom + l.defaultLineHeight / 2 < G.top ? V.push(O(y, N.bottom, v, G.top)) : N.bottom < G.top && l.elementAtHeight((N.bottom + G.top) / 2).type == Ue.Text && (N.bottom = G.top = (N.bottom + G.top) / 2), j(N).concat(V).concat(j(G));
    }
    function O(N, G, V, lt) {
      return new zo(t, N - h.left, G - h.top, V - N, lt - G);
    }
    function j({ top: N, bottom: G, horizontal: V }) {
      let lt = [];
      for (let tt = 0; tt < V.length; tt += 2) lt.push(O(V[tt], N, V[tt + 1], G));
      return lt;
    }
    function L(N, G, V) {
      let lt = 1e9, tt = -1e9, pt = [];
      function ot(ht, yt, R, Z, it) {
        let rt = l.coordsAtPos(ht, ht == V.to ? -2 : 2), mt = l.coordsAtPos(R, R == V.from ? 2 : -2);
        !rt || !mt || (lt = Math.min(rt.top, mt.top, lt), tt = Math.max(rt.bottom, mt.bottom, tt), it == Wt.LTR ? pt.push(o && yt ? y : rt.left, o && Z ? v : mt.right) : pt.push(!o && Z ? y : mt.left, !o && yt ? v : rt.right));
      }
      let P = N ?? V.from, ft = G ?? V.to;
      for (let ht of l.visibleRanges) if (ht.to > P && ht.from < ft) for (let yt = Math.max(ht.from, P), R = Math.min(ht.to, ft); ; ) {
        let Z = l.state.doc.lineAt(yt);
        for (let it of l.bidiSpans(Z)) {
          let rt = it.from + Z.from, mt = it.to + Z.from;
          if (rt >= R) break;
          mt > yt && ot(Math.max(rt, yt), N == null && rt <= P, Math.min(mt, R), G == null && mt >= ft, it.dir);
        }
        if (yt = Z.to + 1, yt >= R) break;
      }
      return pt.length == 0 && ot(P, N == null, ft, G == null, l.textDirection), {
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
  function $_(l, t) {
    return l.constructor == t.constructor && l.eq(t);
  }
  class tT {
    constructor(t, e) {
      this.view = t, this.layer = e, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
        read: this.measure.bind(this),
        write: this.draw.bind(this)
      }, this.dom = t.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), e.above && this.dom.classList.add("cm-layer-above"), e.class && this.dom.classList.add(e.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(t.state), t.requestMeasure(this.measureReq), e.mount && e.mount(this.dom, t);
    }
    update(t) {
      t.startState.facet(zu) != t.state.facet(zu) && this.setOrder(t.state), (this.layer.update(t, this.dom) || t.geometryChanged) && (this.scale(), t.view.requestMeasure(this.measureReq));
    }
    docViewUpdate(t) {
      this.layer.updateOnDocViewUpdate !== false && t.requestMeasure(this.measureReq);
    }
    setOrder(t) {
      let e = 0, n = t.facet(zu);
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
      if (t.length != this.drawn.length || t.some((e, n) => !$_(e, this.drawn[n]))) {
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
  const zu = et.define();
  function MS(l) {
    return [
      $t.define((t) => new tT(t, l)),
      zu.of(l)
    ];
  }
  const vo = et.define({
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
  function eT(l = {}) {
    return [
      vo.of(l),
      iT,
      nT,
      lT,
      Iv.of(true)
    ];
  }
  function _S(l) {
    return l.startState.facet(vo) != l.state.facet(vo);
  }
  const iT = MS({
    above: true,
    markers(l) {
      let { state: t } = l, e = t.facet(vo), n = [];
      for (let r of t.selection.ranges) {
        let o = r == t.selection.main;
        if (r.empty || e.drawRangeCursor) {
          let u = o ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary", f = r.empty ? r : K.cursor(r.head, r.head > r.anchor ? -1 : 1);
          for (let h of zo.forRange(l, u, f)) n.push(h);
        }
      }
      return n;
    },
    update(l, t) {
      l.transactions.some((n) => n.selection) && (t.style.animationName = t.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
      let e = _S(l);
      return e && e1(l.state, t), l.docChanged || l.selectionSet || e;
    },
    mount(l, t) {
      e1(t.state, l);
    },
    class: "cm-cursorLayer"
  });
  function e1(l, t) {
    t.style.animationDuration = l.facet(vo).cursorBlinkRate + "ms";
  }
  const nT = MS({
    above: false,
    markers(l) {
      return l.state.selection.ranges.map((t) => t.empty ? [] : zo.forRange(l, "cm-selectionBackground", t)).reduce((t, e) => t.concat(e));
    },
    update(l, t) {
      return l.docChanged || l.selectionSet || l.viewportChanged || _S(l);
    },
    class: "cm-selectionLayer"
  }), lT = Gl.highest(I.theme({
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
  })), TS = St.define({
    map(l, t) {
      return l == null ? null : t.mapPos(l);
    }
  }), no = Te.define({
    create() {
      return null;
    },
    update(l, t) {
      return l != null && (l = t.changes.mapPos(l)), t.effects.reduce((e, n) => n.is(TS) ? n.value : e, l);
    }
  }), sT = $t.fromClass(class {
    constructor(l) {
      this.view = l, this.cursor = null, this.measureReq = {
        read: this.readPos.bind(this),
        write: this.drawCursor.bind(this)
      };
    }
    update(l) {
      var t;
      let e = l.state.field(no);
      e == null ? this.cursor != null && ((t = this.cursor) === null || t === void 0 || t.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (l.startState.field(no) != e || l.docChanged || l.geometryChanged) && this.view.requestMeasure(this.measureReq));
    }
    readPos() {
      let { view: l } = this, t = l.state.field(no), e = t != null && l.coordsAtPos(t);
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
      this.view.state.field(no) != l && this.view.dispatch({
        effects: TS.of(l)
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
  function rT() {
    return [
      no,
      sT
    ];
  }
  function i1(l, t, e, n, r) {
    t.lastIndex = 0;
    for (let o = l.iterRange(e, n), u = e, f; !o.next().done; u += o.value.length) if (!o.lineBreak) for (; f = t.exec(o.value); ) r(u + f.index, f);
  }
  function oT(l, t) {
    let e = l.visibleRanges;
    if (e.length == 1 && e[0].from == l.viewport.from && e[0].to == l.viewport.to) return e;
    let n = [];
    for (let { from: r, to: o } of e) r = Math.max(l.state.doc.lineAt(r).from, r - t), o = Math.min(l.state.doc.lineAt(o).to, o + t), n.length && n[n.length - 1].to >= r ? n[n.length - 1].to = o : n.push({
      from: r,
      to: o
    });
    return n;
  }
  class aT {
    constructor(t) {
      const { regexp: e, decoration: n, decorate: r, boundary: o, maxLength: u = 1e3 } = t;
      if (!e.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
      if (this.regexp = e, r) this.addMatch = (f, h, g, p) => r(p, g, g + f[0].length, f, h);
      else if (typeof n == "function") this.addMatch = (f, h, g, p) => {
        let y = n(f, h, g);
        y && p(g, g + f[0].length, y);
      };
      else if (n) this.addMatch = (f, h, g, p) => p(g, g + f[0].length, n);
      else throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
      this.boundary = o, this.maxLength = u;
    }
    createDeco(t) {
      let e = new wn(), n = e.add.bind(e);
      for (let { from: r, to: o } of oT(t, this.maxLength)) i1(t.state.doc, this.regexp, r, o, (u, f) => this.addMatch(f, t, u, n));
      return e.finish();
    }
    updateDeco(t, e) {
      let n = 1e9, r = -1;
      return t.docChanged && t.changes.iterChanges((o, u, f, h) => {
        h >= t.view.viewport.from && f <= t.view.viewport.to && (n = Math.min(f, n), r = Math.max(h, r));
      }), t.viewportMoved || r - n > 1e3 ? this.createDeco(t.view) : r > -1 ? this.updateRange(t.view, e.map(t.changes), n, r) : e;
    }
    updateRange(t, e, n, r) {
      for (let o of t.visibleRanges) {
        let u = Math.max(o.from, n), f = Math.min(o.to, r);
        if (f >= u) {
          let h = t.state.doc.lineAt(u), g = h.to < f ? t.state.doc.lineAt(f) : h, p = Math.max(o.from, h.from), y = Math.min(o.to, g.to);
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
          let v = [], S, w = (C, _, O) => v.push(O.range(C, _));
          if (h == g) for (this.regexp.lastIndex = p - h.from; (S = this.regexp.exec(h.text)) && S.index < y - h.from; ) this.addMatch(S, t, S.index + h.from, w);
          else i1(t.state.doc, this.regexp, p, y, (C, _) => this.addMatch(_, t, C, w));
          e = e.update({
            filterFrom: p,
            filterTo: y,
            filter: (C, _) => C < p || _ > y,
            add: v
          });
        }
      }
      return e;
    }
  }
  const sm = /x/.unicode != null ? "gu" : "g", uT = new RegExp(`[\0-\b
-\x7F-\x9F\xAD\u061C\u200B\u200E\u200F\u2028\u2029\u202D\u202E\u2066\u2067\u2069\uFEFF\uFFF9-\uFFFC]`, sm), cT = {
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
  let ld = null;
  function fT() {
    var l;
    if (ld == null && typeof document < "u" && document.body) {
      let t = document.body.style;
      ld = ((l = t.tabSize) !== null && l !== void 0 ? l : t.MozTabSize) != null;
    }
    return ld || false;
  }
  const Nu = et.define({
    combine(l) {
      let t = $i(l, {
        render: null,
        specialChars: uT,
        addSpecialChars: null
      });
      return (t.replaceTabs = !fT()) && (t.specialChars = new RegExp("	|" + t.specialChars.source, sm)), t.addSpecialChars && (t.specialChars = new RegExp(t.specialChars.source + "|" + t.addSpecialChars.source, sm)), t;
    }
  });
  function hT(l = {}) {
    return [
      Nu.of(l),
      dT()
    ];
  }
  let n1 = null;
  function dT() {
    return n1 || (n1 = $t.fromClass(class {
      constructor(l) {
        this.view = l, this.decorations = ut.none, this.decorationCache = /* @__PURE__ */ Object.create(null), this.decorator = this.makeDecorator(l.state.facet(Nu)), this.decorations = this.decorator.createDeco(l);
      }
      makeDecorator(l) {
        return new aT({
          regexp: l.specialChars,
          decoration: (t, e, n) => {
            let { doc: r } = e.state, o = Ze(t[0], 0);
            if (o == 9) {
              let u = r.lineAt(n), f = e.state.tabSize, h = Is(u.text, f, n - u.from);
              return ut.replace({
                widget: new yT((f - h % f) * this.view.defaultCharacterWidth / this.view.scaleX)
              });
            }
            return this.decorationCache[o] || (this.decorationCache[o] = ut.replace({
              widget: new pT(l, o)
            }));
          },
          boundary: l.replaceTabs ? void 0 : /[^]/
        });
      }
      update(l) {
        let t = l.state.facet(Nu);
        l.startState.facet(Nu) != t ? (this.decorator = this.makeDecorator(t), this.decorations = this.decorator.createDeco(l.view)) : this.decorations = this.decorator.updateDeco(l, this.decorations);
      }
    }, {
      decorations: (l) => l.decorations
    }));
  }
  const mT = "\u2022";
  function gT(l) {
    return l >= 32 ? mT : l == 10 ? "\u2424" : String.fromCharCode(9216 + l);
  }
  class pT extends Mn {
    constructor(t, e) {
      super(), this.options = t, this.code = e;
    }
    eq(t) {
      return t.code == this.code;
    }
    toDOM(t) {
      let e = gT(this.code), n = t.state.phrase("Control character") + " " + (cT[this.code] || "0x" + this.code.toString(16)), r = this.options.render && this.options.render(this.code, n, e);
      if (r) return r;
      let o = document.createElement("span");
      return o.textContent = e, o.title = n, o.setAttribute("aria-label", n), o.className = "cm-specialChar", o;
    }
    ignoreEvent() {
      return false;
    }
  }
  class yT extends Mn {
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
  function bT() {
    return ST;
  }
  const vT = ut.line({
    class: "cm-activeLine"
  }), ST = $t.fromClass(class {
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
        r.from > t && (e.push(vT.range(r.from)), t = r.from);
      }
      return ut.set(e);
    }
  }, {
    decorations: (l) => l.decorations
  });
  class xT extends Mn {
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
      let n = window.getComputedStyle(t.parentNode), r = Do(e[0], n.direction != "rtl"), o = parseInt(n.lineHeight);
      return r.bottom - r.top > o * 1.5 ? {
        left: r.left,
        right: r.right,
        top: r.top,
        bottom: r.top + o
      } : r;
    }
    ignoreEvent() {
      return false;
    }
  }
  function wT(l) {
    let t = $t.fromClass(class {
      constructor(e) {
        this.view = e, this.placeholder = l ? ut.set([
          ut.widget({
            widget: new xT(l),
            side: 1
          }).range(0)
        ]) : ut.none;
      }
      get decorations() {
        return this.view.state.doc.length ? ut.none : this.placeholder;
      }
    }, {
      decorations: (e) => e.decorations
    });
    return typeof l == "string" ? [
      t,
      I.contentAttributes.of({
        "aria-placeholder": l
      })
    ] : t;
  }
  const rm = 2e3;
  function AT(l, t, e) {
    let n = Math.min(t.line, e.line), r = Math.max(t.line, e.line), o = [];
    if (t.off > rm || e.off > rm || t.col < 0 || e.col < 0) {
      let u = Math.min(t.off, e.off), f = Math.max(t.off, e.off);
      for (let h = n; h <= r; h++) {
        let g = l.doc.line(h);
        g.length <= f && o.push(K.range(g.from + u, g.to + f));
      }
    } else {
      let u = Math.min(t.col, e.col), f = Math.max(t.col, e.col);
      for (let h = n; h <= r; h++) {
        let g = l.doc.line(h), p = Hd(g.text, u, l.tabSize, true);
        if (p < 0) o.push(K.cursor(g.to));
        else {
          let y = Hd(g.text, f, l.tabSize);
          o.push(K.range(g.from + p, g.from + y));
        }
      }
    }
    return o;
  }
  function CT(l, t) {
    let e = l.coordsAtPos(l.viewport.from);
    return e ? Math.round(Math.abs((e.left - t) / l.defaultCharacterWidth)) : -1;
  }
  function l1(l, t) {
    let e = l.posAtCoords({
      x: t.clientX,
      y: t.clientY
    }, false), n = l.state.doc.lineAt(e), r = e - n.from, o = r > rm ? -1 : r == n.length ? CT(l, t.clientX) : Is(n.text, l.state.tabSize, e - n.from);
    return {
      line: n.number,
      col: o,
      off: r
    };
  }
  function MT(l, t) {
    let e = l1(l, t), n = l.state.selection;
    return e ? {
      update(r) {
        if (r.docChanged) {
          let o = r.changes.mapPos(r.startState.doc.line(e.line).from), u = r.state.doc.lineAt(o);
          e = {
            line: u.number,
            col: e.col,
            off: Math.min(e.off, u.length)
          }, n = n.map(r.changes);
        }
      },
      get(r, o, u) {
        let f = l1(l, r);
        if (!f) return n;
        let h = AT(l.state, e, f);
        return h.length ? u ? K.create(h.concat(n.ranges)) : K.create(h) : n;
      }
    } : null;
  }
  function _T(l) {
    let t = ((e) => e.altKey && e.button == 0);
    return I.mouseSelectionStyle.of((e, n) => t(n) ? MT(e, n) : null);
  }
  const TT = {
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
  }, kT = {
    style: "cursor: crosshair"
  };
  function OT(l = {}) {
    let [t, e] = TT[l.key || "Alt"], n = $t.fromClass(class {
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
      I.contentAttributes.of((r) => {
        var o;
        return !((o = r.plugin(n)) === null || o === void 0) && o.isDown ? kT : null;
      })
    ];
  }
  const pu = "-10000px";
  class kS {
    constructor(t, e, n, r) {
      this.facet = e, this.createTooltipView = n, this.removeTooltipView = r, this.input = t.state.facet(e), this.tooltips = this.input.filter((u) => u);
      let o = null;
      this.tooltipViews = this.tooltips.map((u) => o = n(u, o));
    }
    update(t, e) {
      var n;
      let r = t.state.facet(this.facet), o = r.filter((h) => h);
      if (r === this.input) {
        for (let h of this.tooltipViews) h.update && h.update(t);
        return false;
      }
      let u = [], f = e ? [] : null;
      for (let h = 0; h < o.length; h++) {
        let g = o[h], p = -1;
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
      return e && (f.forEach((h, g) => e[g] = h), e.length = f.length), this.input = r, this.tooltips = o, this.tooltipViews = u, true;
    }
  }
  function DT(l) {
    let t = l.dom.ownerDocument.documentElement;
    return {
      top: 0,
      left: 0,
      bottom: t.clientHeight,
      right: t.clientWidth
    };
  }
  const sd = et.define({
    combine: (l) => {
      var t, e, n;
      return {
        position: F.ios ? "absolute" : ((t = l.find((r) => r.position)) === null || t === void 0 ? void 0 : t.position) || "fixed",
        parent: ((e = l.find((r) => r.parent)) === null || e === void 0 ? void 0 : e.parent) || null,
        tooltipSpace: ((n = l.find((r) => r.tooltipSpace)) === null || n === void 0 ? void 0 : n.tooltipSpace) || DT
      };
    }
  }), s1 = /* @__PURE__ */ new WeakMap(), Nm = $t.fromClass(class {
    constructor(l) {
      this.view = l, this.above = [], this.inView = true, this.madeAbsolute = false, this.lastTransaction = 0, this.measureTimeout = -1;
      let t = l.state.facet(sd);
      this.position = t.position, this.parent = t.parent, this.classes = l.themeClasses, this.createContainer(), this.measureReq = {
        read: this.readMeasure.bind(this),
        write: this.writeMeasure.bind(this),
        key: this
      }, this.resizeObserver = typeof ResizeObserver == "function" ? new ResizeObserver(() => this.measureSoon()) : null, this.manager = new kS(l, Lm, (e, n) => this.createTooltip(e, n), (e) => {
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
      let e = t || l.geometryChanged, n = l.state.facet(sd);
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
      return e.dom.style.position = this.position, e.dom.style.top = pu, e.dom.style.left = "0px", this.container.insertBefore(e.dom, n), e.mount && e.mount(this.view), this.resizeObserver && this.resizeObserver.observe(e.dom), e;
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
        let { dom: o } = this.manager.tooltipViews[0];
        if (F.safari) {
          let u = o.getBoundingClientRect();
          e = Math.abs(u.top + 1e4) > 1 || Math.abs(u.left) > 1;
        } else e = !!o.offsetParent && o.offsetParent != this.container.ownerDocument.body;
      }
      if (e || this.position == "absolute") if (this.parent) {
        let o = this.parent.getBoundingClientRect();
        o.width && o.height && (l = o.width / this.parent.offsetWidth, t = o.height / this.parent.offsetHeight);
      } else ({ scaleX: l, scaleY: t } = this.view.viewState);
      let n = this.view.scrollDOM.getBoundingClientRect(), r = Em(this.view);
      return {
        visible: {
          left: n.left + r.left,
          top: n.top + r.top,
          right: n.right - r.right,
          bottom: n.bottom - r.bottom
        },
        parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
        pos: this.manager.tooltips.map((o, u) => {
          let f = this.manager.tooltipViews[u];
          return f.getCoords ? f.getCoords(o.pos) : this.view.coordsAtPos(o.pos);
        }),
        size: this.manager.tooltipViews.map(({ dom: o }) => o.getBoundingClientRect()),
        space: this.view.state.facet(sd).tooltipSpace(this.view),
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
      let { visible: e, space: n, scaleX: r, scaleY: o } = l, u = [];
      for (let f = 0; f < this.manager.tooltips.length; f++) {
        let h = this.manager.tooltips[f], g = this.manager.tooltipViews[f], { dom: p } = g, y = l.pos[f], v = l.size[f];
        if (!y || h.clip !== false && (y.bottom <= Math.max(e.top, n.top) || y.top >= Math.min(e.bottom, n.bottom) || y.right < Math.max(e.left, n.left) - 0.1 || y.left > Math.min(e.right, n.right) + 0.1)) {
          p.style.top = pu;
          continue;
        }
        let S = h.arrow ? g.dom.querySelector(".cm-tooltip-arrow") : null, w = S ? 7 : 0, C = v.right - v.left, _ = (t = s1.get(g)) !== null && t !== void 0 ? t : v.bottom - v.top, O = g.offset || BT, j = this.view.textDirection == Wt.LTR, L = v.width > n.right - n.left ? j ? n.left : n.right - v.width : j ? Math.max(n.left, Math.min(y.left - (S ? 14 : 0) + O.x, n.right - C)) : Math.min(Math.max(n.left, y.left - C + (S ? 14 : 0) - O.x), n.right - C), Q = this.above[f];
        !h.strictSide && (Q ? y.top - _ - w - O.y < n.top : y.bottom + _ + w + O.y > n.bottom) && Q == n.bottom - y.bottom > y.top - n.top && (Q = this.above[f] = !Q);
        let N = (Q ? y.top - n.top : n.bottom - y.bottom) - w;
        if (N < _ && g.resize !== false) {
          if (N < this.view.defaultLineHeight) {
            p.style.top = pu;
            continue;
          }
          s1.set(g, _), p.style.height = (_ = N) / o + "px";
        } else p.style.height && (p.style.height = "");
        let G = Q ? y.top - _ - w - O.y : y.bottom + w + O.y, V = L + C;
        if (g.overlap !== true) for (let lt of u) lt.left < V && lt.right > L && lt.top < G + _ && lt.bottom > G && (G = Q ? lt.top - _ - 2 - w : lt.bottom + w + 2);
        if (this.position == "absolute" ? (p.style.top = (G - l.parent.top) / o + "px", r1(p, (L - l.parent.left) / r)) : (p.style.top = G / o + "px", r1(p, L / r)), S) {
          let lt = y.left + (j ? O.x : -O.x) - (L + 14 - 7);
          S.style.left = lt / r + "px";
        }
        g.overlap !== true && u.push({
          left: L,
          top: G,
          right: V,
          bottom: G + _
        }), p.classList.toggle("cm-tooltip-above", Q), p.classList.toggle("cm-tooltip-below", !Q), g.positioned && g.positioned(l.space);
      }
    }
    maybeMeasure() {
      if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView))) for (let l of this.manager.tooltipViews) l.dom.style.top = pu;
    }
  }, {
    eventObservers: {
      scroll() {
        this.maybeMeasure();
      }
    }
  });
  function r1(l, t) {
    let e = parseInt(l.style.left, 10);
    (isNaN(e) || Math.abs(t - e) > 1) && (l.style.left = t + "px");
  }
  const ET = I.baseTheme({
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
  }), BT = {
    x: 0,
    y: 0
  }, Lm = et.define({
    enables: [
      Nm,
      ET
    ]
  }), Zu = et.define({
    combine: (l) => l.reduce((t, e) => t.concat(e), [])
  });
  class dc {
    static create(t) {
      return new dc(t);
    }
    constructor(t) {
      this.view = t, this.mounted = false, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new kS(t, Zu, (e, n) => this.createHostedView(e, n), (e) => e.dom.remove());
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
  const RT = Lm.compute([
    Zu
  ], (l) => {
    let t = l.facet(Zu);
    return t.length === 0 ? null : {
      pos: Math.min(...t.map((e) => e.pos)),
      end: Math.max(...t.map((e) => {
        var n;
        return (n = e.end) !== null && n !== void 0 ? n : e.pos;
      })),
      create: dc.create,
      above: t[0].above,
      arrow: t.some((e) => e.arrow)
    };
  });
  class zT {
    constructor(t, e, n, r, o) {
      this.view = t, this.source = e, this.field = n, this.setHover = r, this.hoverTime = o, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
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
      let r, o = 1;
      if (n instanceof Sn) r = n.posAtStart;
      else {
        if (r = t.posAtCoords(e), r == null) return;
        let f = t.coordsAtPos(r);
        if (!f || e.y < f.top || e.y > f.bottom || e.x < f.left - t.defaultCharacterWidth || e.x > f.right + t.defaultCharacterWidth) return;
        let h = t.bidiSpans(t.state.doc.lineAt(r)).find((p) => p.from <= r && p.to >= r), g = h && h.dir == Wt.RTL ? -1 : 1;
        o = e.x < f.left ? -g : g;
      }
      let u = this.source(t, r, o);
      if (u == null ? void 0 : u.then) {
        let f = this.pending = {
          pos: r
        };
        u.then((h) => {
          this.pending == f && (this.pending = null, h && !(Array.isArray(h) && !h.length) && t.dispatch({
            effects: this.setHover.of(Array.isArray(h) ? h : [
              h
            ])
          }));
        }, (h) => Je(t.state, h, "hover tooltip"));
      } else u && !(Array.isArray(u) && !u.length) && t.dispatch({
        effects: this.setHover.of(Array.isArray(u) ? u : [
          u
        ])
      });
    }
    get tooltip() {
      let t = this.view.plugin(Nm), e = t ? t.manager.tooltips.findIndex((n) => n.create == dc.create) : -1;
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
      let { active: r, tooltip: o } = this;
      if (r.length && o && !NT(o.dom, t) || this.pending) {
        let { pos: u } = r[0] || this.pending, f = (n = (e = r[0]) === null || e === void 0 ? void 0 : e.end) !== null && n !== void 0 ? n : u;
        (u == f ? this.view.posAtCoords(this.lastMove) != u : !LT(this.view, u, f, t.clientX, t.clientY)) && (this.view.dispatch({
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
  const yu = 4;
  function NT(l, t) {
    let { left: e, right: n, top: r, bottom: o } = l.getBoundingClientRect(), u;
    if (u = l.querySelector(".cm-tooltip-arrow")) {
      let f = u.getBoundingClientRect();
      r = Math.min(f.top, r), o = Math.max(f.bottom, o);
    }
    return t.clientX >= e - yu && t.clientX <= n + yu && t.clientY >= r - yu && t.clientY <= o + yu;
  }
  function LT(l, t, e, n, r, o) {
    let u = l.scrollDOM.getBoundingClientRect(), f = l.documentTop + l.documentPadding.top + l.contentHeight;
    if (u.left > n || u.right < n || u.top > r || Math.min(u.bottom, f) < r) return false;
    let h = l.posAtCoords({
      x: n,
      y: r
    }, false);
    return h >= t && h <= e;
  }
  function HT(l, t = {}) {
    let e = St.define(), n = Te.define({
      create() {
        return [];
      },
      update(r, o) {
        if (r.length && (t.hideOnChange && (o.docChanged || o.selection) ? r = [] : t.hideOn && (r = r.filter((u) => !t.hideOn(o, u))), o.docChanged)) {
          let u = [];
          for (let f of r) {
            let h = o.changes.mapPos(f.pos, -1, He.TrackDel);
            if (h != null) {
              let g = Object.assign(/* @__PURE__ */ Object.create(null), f);
              g.pos = h, g.end != null && (g.end = o.changes.mapPos(g.end)), u.push(g);
            }
          }
          r = u;
        }
        for (let u of o.effects) u.is(e) && (r = u.value), u.is(UT) && (r = []);
        return r;
      },
      provide: (r) => Zu.from(r)
    });
    return {
      active: n,
      extension: [
        n,
        $t.define((r) => new zT(r, l, n, e, t.hoverTime || 300)),
        RT
      ]
    };
  }
  function OS(l, t) {
    let e = l.plugin(Nm);
    if (!e) return null;
    let n = e.manager.tooltips.indexOf(t);
    return n < 0 ? null : e.manager.tooltipViews[n];
  }
  const UT = St.define(), o1 = et.define({
    combine(l) {
      let t, e;
      for (let n of l) t = t || n.topContainer, e = e || n.bottomContainer;
      return {
        topContainer: t,
        bottomContainer: e
      };
    }
  });
  function So(l, t) {
    let e = l.plugin(DS), n = e ? e.specs.indexOf(t) : -1;
    return n > -1 ? e.panels[n] : null;
  }
  const DS = $t.fromClass(class {
    constructor(l) {
      this.input = l.state.facet(xo), this.specs = this.input.filter((e) => e), this.panels = this.specs.map((e) => e(l));
      let t = l.state.facet(o1);
      this.top = new bu(l, true, t.topContainer), this.bottom = new bu(l, false, t.bottomContainer), this.top.sync(this.panels.filter((e) => e.top)), this.bottom.sync(this.panels.filter((e) => !e.top));
      for (let e of this.panels) e.dom.classList.add("cm-panel"), e.mount && e.mount();
    }
    update(l) {
      let t = l.state.facet(o1);
      this.top.container != t.topContainer && (this.top.sync([]), this.top = new bu(l.view, true, t.topContainer)), this.bottom.container != t.bottomContainer && (this.bottom.sync([]), this.bottom = new bu(l.view, false, t.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
      let e = l.state.facet(xo);
      if (e != this.input) {
        let n = e.filter((h) => h), r = [], o = [], u = [], f = [];
        for (let h of n) {
          let g = this.specs.indexOf(h), p;
          g < 0 ? (p = h(l.view), f.push(p)) : (p = this.panels[g], p.update && p.update(l)), r.push(p), (p.top ? o : u).push(p);
        }
        this.specs = n, this.panels = r, this.top.sync(o), this.bottom.sync(u);
        for (let h of f) h.dom.classList.add("cm-panel"), h.mount && h.mount();
      } else for (let n of this.panels) n.update && n.update(l);
    }
    destroy() {
      this.top.sync([]), this.bottom.sync([]);
    }
  }, {
    provide: (l) => I.scrollMargins.of((t) => {
      let e = t.plugin(l);
      return e && {
        top: e.top.scrollMargin(),
        bottom: e.bottom.scrollMargin()
      };
    })
  });
  class bu {
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
        for (; t != e.dom; ) t = a1(t);
        t = t.nextSibling;
      } else this.dom.insertBefore(e.dom, t);
      for (; t; ) t = a1(t);
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
  function a1(l) {
    let t = l.nextSibling;
    return l.remove(), t;
  }
  const xo = et.define({
    enables: DS
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
  const Lu = et.define(), VT = et.define(), qT = {
    class: "",
    renderEmptyElements: false,
    elementStyle: "",
    markers: () => Et.empty,
    lineMarker: () => null,
    widgetMarker: () => null,
    lineMarkerChange: null,
    initialSpacer: null,
    updateSpacer: null,
    domEventHandlers: {},
    side: "before"
  }, fo = et.define();
  function jT(l) {
    return [
      ES(),
      fo.of({
        ...qT,
        ...l
      })
    ];
  }
  const u1 = et.define({
    combine: (l) => l.some((t) => t)
  });
  function ES(l) {
    return [
      YT
    ];
  }
  const YT = $t.fromClass(class {
    constructor(l) {
      this.view = l, this.domAfter = null, this.prevViewport = l.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = l.state.facet(fo).map((t) => new f1(l, t)), this.fixed = !l.state.facet(u1);
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
      this.view.state.facet(u1) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = l.view.viewport;
    }
    syncGutters(l) {
      let t = this.dom.nextSibling;
      l && (this.dom.remove(), this.domAfter && this.domAfter.remove());
      let e = Et.iter(this.view.state.facet(Lu), this.view.viewport.from), n = [], r = this.gutters.map((o) => new GT(o, this.view.viewport, -this.view.documentPadding.top));
      for (let o of this.view.viewportLineBlocks) if (n.length && (n = []), Array.isArray(o.type)) {
        let u = true;
        for (let f of o.type) if (f.type == Ue.Text && u) {
          om(e, n, f.from);
          for (let h of r) h.line(this.view, f, n);
          u = false;
        } else if (f.widget) for (let h of r) h.widget(this.view, f);
      } else if (o.type == Ue.Text) {
        om(e, n, o.from);
        for (let u of r) u.line(this.view, o, n);
      } else if (o.widget) for (let u of r) u.widget(this.view, o);
      for (let o of r) o.finish();
      l && (this.view.scrollDOM.insertBefore(this.dom, t), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter));
    }
    updateGutters(l) {
      let t = l.startState.facet(fo), e = l.state.facet(fo), n = l.docChanged || l.heightChanged || l.viewportChanged || !Et.eq(l.startState.facet(Lu), l.state.facet(Lu), l.view.viewport.from, l.view.viewport.to);
      if (t == e) for (let r of this.gutters) r.update(l) && (n = true);
      else {
        n = true;
        let r = [];
        for (let o of e) {
          let u = t.indexOf(o);
          u < 0 ? r.push(new f1(this.view, o)) : (this.gutters[u].update(l), r.push(this.gutters[u]));
        }
        for (let o of this.gutters) o.dom.remove(), r.indexOf(o) < 0 && o.destroy();
        for (let o of r) o.config.side == "after" ? this.getDOMAfter().appendChild(o.dom) : this.dom.appendChild(o.dom);
        this.gutters = r;
      }
      return n;
    }
    destroy() {
      for (let l of this.gutters) l.destroy();
      this.dom.remove(), this.domAfter && this.domAfter.remove();
    }
  }, {
    provide: (l) => I.scrollMargins.of((t) => {
      let e = t.plugin(l);
      if (!e || e.gutters.length == 0 || !e.fixed) return null;
      let n = e.dom.offsetWidth * t.scaleX, r = e.domAfter ? e.domAfter.offsetWidth * t.scaleX : 0;
      return t.textDirection == Wt.LTR ? {
        left: n,
        right: r
      } : {
        right: n,
        left: r
      };
    })
  });
  function c1(l) {
    return Array.isArray(l) ? l : [
      l
    ];
  }
  function om(l, t, e) {
    for (; l.value && l.from <= e; ) l.from == e && t.push(l.value), l.next();
  }
  class GT {
    constructor(t, e, n) {
      this.gutter = t, this.height = n, this.i = 0, this.cursor = Et.iter(t.markers, e.from);
    }
    addElement(t, e, n) {
      let { gutter: r } = this, o = (e.top - this.height) / t.scaleY, u = e.height / t.scaleY;
      if (this.i == r.elements.length) {
        let f = new BS(t, u, o, n);
        r.elements.push(f), r.dom.appendChild(f.dom);
      } else r.elements[this.i].update(t, u, o, n);
      this.height = e.bottom, this.i++;
    }
    line(t, e, n) {
      let r = [];
      om(this.cursor, r, e.from), n.length && (r = r.concat(n));
      let o = this.gutter.config.lineMarker(t, e, r);
      o && r.unshift(o);
      let u = this.gutter;
      r.length == 0 && !u.config.renderEmptyElements || this.addElement(t, e, r);
    }
    widget(t, e) {
      let n = this.gutter.config.widgetMarker(t, e.widget, e), r = n ? [
        n
      ] : null;
      for (let o of t.state.facet(VT)) {
        let u = o(t, e.widget, e);
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
  class f1 {
    constructor(t, e) {
      this.view = t, this.config = e, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
      for (let n in e.domEventHandlers) this.dom.addEventListener(n, (r) => {
        let o = r.target, u;
        if (o != this.dom && this.dom.contains(o)) {
          for (; o.parentNode != this.dom; ) o = o.parentNode;
          let h = o.getBoundingClientRect();
          u = (h.top + h.bottom) / 2;
        } else u = r.clientY;
        let f = t.lineBlockAtHeight(u - t.documentTop);
        e.domEventHandlers[n](t, f, r) && r.preventDefault();
      });
      this.markers = c1(e.markers(t)), e.initialSpacer && (this.spacer = new BS(t, 0, 0, [
        e.initialSpacer(t)
      ]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
    }
    update(t) {
      let e = this.markers;
      if (this.markers = c1(this.config.markers(t.view)), this.spacer && this.config.updateSpacer) {
        let r = this.config.updateSpacer(this.spacer.markers[0], t);
        r != this.spacer.markers[0] && this.spacer.update(t.view, 0, 0, [
          r
        ]);
      }
      let n = t.view.viewport;
      return !Et.eq(this.markers, e, n.from, n.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(t) : false);
    }
    destroy() {
      for (let t of this.elements) t.destroy();
    }
  }
  class BS {
    constructor(t, e, n, r) {
      this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(t, e, n, r);
    }
    update(t, e, n, r) {
      this.height != e && (this.height = e, this.dom.style.height = e + "px"), this.above != n && (this.dom.style.marginTop = (this.above = n) ? n + "px" : ""), XT(this.markers, r) || this.setMarkers(t, r);
    }
    setMarkers(t, e) {
      let n = "cm-gutterElement", r = this.dom.firstChild;
      for (let o = 0, u = 0; ; ) {
        let f = u, h = o < e.length ? e[o++] : null, g = false;
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
  function XT(l, t) {
    if (l.length != t.length) return false;
    for (let e = 0; e < l.length; e++) if (!l[e].compare(t[e])) return false;
    return true;
  }
  const KT = et.define(), QT = et.define(), Bs = et.define({
    combine(l) {
      return $i(l, {
        formatNumber: String,
        domEventHandlers: {}
      }, {
        domEventHandlers(t, e) {
          let n = Object.assign({}, t);
          for (let r in e) {
            let o = n[r], u = e[r];
            n[r] = o ? (f, h, g) => o(f, h, g) || u(f, h, g) : u;
          }
          return n;
        }
      });
    }
  });
  class rd extends Cn {
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
  function od(l, t) {
    return l.state.facet(Bs).formatNumber(t, l.state);
  }
  const ZT = fo.compute([
    Bs
  ], (l) => ({
    class: "cm-lineNumbers",
    renderEmptyElements: false,
    markers(t) {
      return t.state.facet(KT);
    },
    lineMarker(t, e, n) {
      return n.some((r) => r.toDOM) ? null : new rd(od(t, t.state.doc.lineAt(e.from).number));
    },
    widgetMarker: (t, e, n) => {
      for (let r of t.state.facet(QT)) {
        let o = r(t, e, n);
        if (o) return o;
      }
      return null;
    },
    lineMarkerChange: (t) => t.startState.facet(Bs) != t.state.facet(Bs),
    initialSpacer(t) {
      return new rd(od(t, h1(t.state.doc.lines)));
    },
    updateSpacer(t, e) {
      let n = od(e.view, h1(e.view.state.doc.lines));
      return n == t.number ? t : new rd(n);
    },
    domEventHandlers: l.facet(Bs).domEventHandlers,
    side: "before"
  }));
  function WT(l = {}) {
    return [
      Bs.of(l),
      ES(),
      ZT
    ];
  }
  function h1(l) {
    let t = 9;
    for (; t < l; ) t = t * 10 + 9;
    return t;
  }
  const JT = new class extends Cn {
    constructor() {
      super(...arguments), this.elementClass = "cm-activeLineGutter";
    }
  }(), FT = Lu.compute([
    "selection"
  ], (l) => {
    let t = [], e = -1;
    for (let n of l.selection.ranges) {
      let r = l.doc.lineAt(n.head).from;
      r > e && (e = r, t.push(JT.range(r)));
    }
    return Et.of(t);
  });
  function IT() {
    return FT;
  }
  const PT = 1024;
  let $T = 0;
  class ad {
    constructor(t, e) {
      this.from = t, this.to = e;
    }
  }
  class Ot {
    constructor(t = {}) {
      this.id = $T++, this.perNode = !!t.perNode, this.deserialize = t.deserialize || (() => {
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
  Ot.closedBy = new Ot({
    deserialize: (l) => l.split(" ")
  });
  Ot.openedBy = new Ot({
    deserialize: (l) => l.split(" ")
  });
  Ot.group = new Ot({
    deserialize: (l) => l.split(" ")
  });
  Ot.isolate = new Ot({
    deserialize: (l) => {
      if (l && l != "rtl" && l != "ltr" && l != "auto") throw new RangeError("Invalid value for isolate: " + l);
      return l || "auto";
    }
  });
  Ot.contextHash = new Ot({
    perNode: true
  });
  Ot.lookAhead = new Ot({
    perNode: true
  });
  Ot.mounted = new Ot({
    perNode: true
  });
  class Wu {
    constructor(t, e, n) {
      this.tree = t, this.overlay = e, this.parser = n;
    }
    static get(t) {
      return t && t.props && t.props[Ot.mounted.id];
    }
  }
  const tk = /* @__PURE__ */ Object.create(null);
  class _i {
    constructor(t, e, n, r = 0) {
      this.name = t, this.props = e, this.id = n, this.flags = r;
    }
    static define(t) {
      let e = t.props && t.props.length ? /* @__PURE__ */ Object.create(null) : tk, n = (t.top ? 1 : 0) | (t.skipped ? 2 : 0) | (t.error ? 4 : 0) | (t.name == null ? 8 : 0), r = new _i(t.name || "", e, t.id, n);
      if (t.props) {
        for (let o of t.props) if (Array.isArray(o) || (o = o(r)), o) {
          if (o[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
          e[o[0].id] = o[1];
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
        let e = this.prop(Ot.group);
        return e ? e.indexOf(t) > -1 : false;
      }
      return this.id == t;
    }
    static match(t) {
      let e = /* @__PURE__ */ Object.create(null);
      for (let n in t) for (let r of n.split(" ")) e[r] = t[n];
      return (n) => {
        for (let r = n.prop(Ot.group), o = -1; o < (r ? r.length : 0); o++) {
          let u = e[o < 0 ? n.name : r[o]];
          if (u) return u;
        }
      };
    }
  }
  _i.none = new _i("", /* @__PURE__ */ Object.create(null), 0, 8);
  const vu = /* @__PURE__ */ new WeakMap(), d1 = /* @__PURE__ */ new WeakMap();
  var Me;
  (function(l) {
    l[l.ExcludeBuffers = 1] = "ExcludeBuffers", l[l.IncludeAnonymous = 2] = "IncludeAnonymous", l[l.IgnoreMounts = 4] = "IgnoreMounts", l[l.IgnoreOverlays = 8] = "IgnoreOverlays";
  })(Me || (Me = {}));
  class Ee {
    constructor(t, e, n, r, o) {
      if (this.type = t, this.children = e, this.positions = n, this.length = r, this.props = null, o && o.length) {
        this.props = /* @__PURE__ */ Object.create(null);
        for (let [u, f] of o) this.props[typeof u == "number" ? u : u.id] = f;
      }
    }
    toString() {
      let t = Wu.get(this);
      if (t && !t.overlay) return t.tree.toString();
      let e = "";
      for (let n of this.children) {
        let r = n.toString();
        r && (e && (e += ","), e += r);
      }
      return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (e.length ? "(" + e + ")" : "") : e;
    }
    cursor(t = 0) {
      return new um(this.topNode, t);
    }
    cursorAt(t, e = 0, n = 0) {
      let r = vu.get(this) || this.topNode, o = new um(r);
      return o.moveTo(t, e), vu.set(this, o._tree), o;
    }
    get topNode() {
      return new Ci(this, 0, 0, null);
    }
    resolve(t, e = 0) {
      let n = wo(vu.get(this) || this.topNode, t, e, false);
      return vu.set(this, n), n;
    }
    resolveInner(t, e = 0) {
      let n = wo(d1.get(this) || this.topNode, t, e, true);
      return d1.set(this, n), n;
    }
    resolveStack(t, e = 0) {
      return nk(this, t, e);
    }
    iterate(t) {
      let { enter: e, leave: n, from: r = 0, to: o = this.length } = t, u = t.mode || 0, f = (u & Me.IncludeAnonymous) > 0;
      for (let h = this.cursor(u | Me.IncludeAnonymous); ; ) {
        let g = false;
        if (h.from <= o && h.to >= r && (!f && h.type.isAnonymous || e(h) !== false)) {
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
      return this.children.length <= 8 ? this : Vm(_i.none, this.children, this.positions, 0, this.children.length, 0, this.length, (e, n, r) => new Ee(this.type, e, n, r, this.propValues), t.makeTree || ((e, n, r) => new Ee(_i.none, e, n, r)));
    }
    static build(t) {
      return lk(t);
    }
  }
  Ee.empty = new Ee(_i.none, [], [], 0);
  class Hm {
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
      return new Hm(this.buffer, this.index);
    }
  }
  class al {
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
      let e = this.buffer[t], n = this.buffer[t + 3], r = this.set.types[e], o = r.name;
      if (/\W/.test(o) && !r.isError && (o = JSON.stringify(o)), t += 4, n == t) return o;
      let u = [];
      for (; t < n; ) u.push(this.childString(t)), t = this.buffer[t + 3];
      return o + "(" + u.join(",") + ")";
    }
    findChild(t, e, n, r, o) {
      let { buffer: u } = this, f = -1;
      for (let h = t; h != e && !(RS(o, r, u[h + 1], u[h + 2]) && (f = h, n > 0)); h = u[h + 3]) ;
      return f;
    }
    slice(t, e, n) {
      let r = this.buffer, o = new Uint16Array(e - t), u = 0;
      for (let f = t, h = 0; f < e; ) {
        o[h++] = r[f++], o[h++] = r[f++] - n;
        let g = o[h++] = r[f++] - n;
        o[h++] = r[f++] - t, u = Math.max(u, g);
      }
      return new al(o, u, this.set);
    }
  }
  function RS(l, t, e, n) {
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
  function wo(l, t, e, n) {
    for (var r; l.from == l.to || (e < 1 ? l.from >= t : l.from > t) || (e > -1 ? l.to <= t : l.to < t); ) {
      let u = !n && l instanceof Ci && l.index < 0 ? null : l.parent;
      if (!u) return l;
      l = u;
    }
    let o = n ? 0 : Me.IgnoreOverlays;
    if (n) for (let u = l, f = u.parent; f; u = f, f = u.parent) u instanceof Ci && u.index < 0 && ((r = f.enter(t, e, o)) === null || r === void 0 ? void 0 : r.from) != u.from && (l = f);
    for (; ; ) {
      let u = l.enter(t, e, o);
      if (!u) return l;
      l = u;
    }
  }
  class zS {
    cursor(t = 0) {
      return new um(this, t);
    }
    getChild(t, e = null, n = null) {
      let r = m1(this, t, e, n);
      return r.length ? r[0] : null;
    }
    getChildren(t, e = null, n = null) {
      return m1(this, t, e, n);
    }
    resolve(t, e = 0) {
      return wo(this, t, e, false);
    }
    resolveInner(t, e = 0) {
      return wo(this, t, e, true);
    }
    matchContext(t) {
      return am(this.parent, t);
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
  class Ci extends zS {
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
    nextChild(t, e, n, r, o = 0) {
      for (let u = this; ; ) {
        for (let { children: f, positions: h } = u._tree, g = e > 0 ? f.length : -1; t != g; t += e) {
          let p = f[t], y = h[t] + u.from;
          if (RS(r, n, y, y + p.length)) {
            if (p instanceof al) {
              if (o & Me.ExcludeBuffers) continue;
              let v = p.findChild(0, p.buffer.length, e, n - y, r);
              if (v > -1) return new il(new ek(u, p, t, y), null, v);
            } else if (o & Me.IncludeAnonymous || !p.type.isAnonymous || Um(p)) {
              let v;
              if (!(o & Me.IgnoreMounts) && (v = Wu.get(p)) && !v.overlay) return new Ci(v.tree, y, t, u);
              let S = new Ci(p, y, t, u);
              return o & Me.IncludeAnonymous || !S.type.isAnonymous ? S : S.nextChild(e < 0 ? p.children.length - 1 : 0, e, n, r);
            }
          }
        }
        if (o & Me.IncludeAnonymous || !u.type.isAnonymous || (u.index >= 0 ? t = u.index + e : t = e < 0 ? -1 : u._parent._tree.children.length, u = u._parent, !u)) return null;
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
      if (!(n & Me.IgnoreOverlays) && (r = Wu.get(this._tree)) && r.overlay) {
        let o = t - this.from;
        for (let { from: u, to: f } of r.overlay) if ((e > 0 ? u <= o : u < o) && (e < 0 ? f >= o : f > o)) return new Ci(r.tree, r.overlay[0].from + this.from, -1, this);
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
  function m1(l, t, e, n) {
    let r = l.cursor(), o = [];
    if (!r.firstChild()) return o;
    if (e != null) {
      for (let u = false; !u; ) if (u = r.type.is(e), !r.nextSibling()) return o;
    }
    for (; ; ) {
      if (n != null && r.type.is(n)) return o;
      if (r.type.is(t) && o.push(r.node), !r.nextSibling()) return n == null ? o : [];
    }
  }
  function am(l, t, e = t.length - 1) {
    for (let n = l; e >= 0; n = n.parent) {
      if (!n) return false;
      if (!n.type.isAnonymous) {
        if (t[e] && t[e] != n.name) return false;
        e--;
      }
    }
    return true;
  }
  class ek {
    constructor(t, e, n, r) {
      this.parent = t, this.buffer = e, this.index = n, this.start = r;
    }
  }
  class il extends zS {
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
      let { buffer: r } = this.context, o = r.findChild(this.index + 4, r.buffer[this.index + 3], t, e - this.context.start, n);
      return o < 0 ? null : new il(this.context, this, o);
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
      let { buffer: r } = this.context, o = r.findChild(this.index + 4, r.buffer[this.index + 3], e > 0 ? 1 : -1, t - this.context.start, e);
      return o < 0 ? null : new il(this.context, this, o);
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
      let t = [], e = [], { buffer: n } = this.context, r = this.index + 4, o = n.buffer[this.index + 3];
      if (o > r) {
        let u = n.buffer[this.index + 1];
        t.push(n.slice(r, o, u)), e.push(0);
      }
      return new Ee(this.type, t, e, this.to - this.from);
    }
    toString() {
      return this.context.buffer.childString(this.index);
    }
  }
  function NS(l) {
    if (!l.length) return null;
    let t = 0, e = l[0];
    for (let o = 1; o < l.length; o++) {
      let u = l[o];
      (u.from > e.from || u.to < e.to) && (e = u, t = o);
    }
    let n = e instanceof Ci && e.index < 0 ? null : e.parent, r = l.slice();
    return n ? r[t] = n : r.splice(t, 1), new ik(r, e);
  }
  class ik {
    constructor(t, e) {
      this.heads = t, this.node = e;
    }
    get next() {
      return NS(this.heads);
    }
  }
  function nk(l, t, e) {
    let n = l.resolveInner(t, e), r = null;
    for (let o = n instanceof Ci ? n : n.context.parent; o; o = o.parent) if (o.index < 0) {
      let u = o.parent;
      (r || (r = [
        n
      ])).push(u.resolve(t, e)), o = u;
    } else {
      let u = Wu.get(o.tree);
      if (u && u.overlay && u.overlay[0].from <= t && u.overlay[u.overlay.length - 1].to >= t) {
        let f = new Ci(u.tree, u.overlay[0].from + o.from, -1, o);
        (r || (r = [
          n
        ])).push(wo(f, t, e, false));
      }
    }
    return r ? NS(r) : n;
  }
  class um {
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
      let { buffer: r } = this.buffer, o = r.findChild(this.index + 4, r.buffer[this.index + 3], t, e - this.buffer.start, n);
      return o < 0 ? false : (this.stack.push(this.index), this.yieldBuf(o));
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
        } else for (let o = 0; o < this.index; o++) if (r.buffer.buffer[o + 3] < this.index) return false;
        ({ index: e, parent: n } = r);
      } else ({ index: e, _parent: n } = this._tree);
      for (; n; { index: e, _parent: n } = n) if (e > -1) for (let o = e + t, u = t < 0 ? -1 : n._tree.children.length; o != u; o += t) {
        let f = n._tree.children[o];
        if (this.mode & Me.IncludeAnonymous || f instanceof al || !f.type.isAnonymous || Um(f)) return false;
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
      if (t && t.context == this.buffer) t: for (let r = this.index, o = this.stack.length; o >= 0; ) {
        for (let u = t; u; u = u._parent) if (u.index == r) {
          if (r == this.index) return u;
          e = u, n = o + 1;
          break t;
        }
        r = this.stack[--o];
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
      if (!this.buffer) return am(this.node.parent, t);
      let { buffer: e } = this.buffer, { types: n } = e.set;
      for (let r = t.length - 1, o = this.stack.length - 1; r >= 0; o--) {
        if (o < 0) return am(this._tree, t, r);
        let u = n[e.buffer[this.stack[o]]];
        if (!u.isAnonymous) {
          if (t[r] && t[r] != u.name) return false;
          r--;
        }
      }
      return true;
    }
  }
  function Um(l) {
    return l.children.some((t) => t instanceof al || !t.type.isAnonymous || Um(t));
  }
  function lk(l) {
    var t;
    let { buffer: e, nodeSet: n, maxBufferLength: r = PT, reused: o = [], minRepeatType: u = n.types.length } = l, f = Array.isArray(e) ? new Hm(e, e.length) : e, h = n.types, g = 0, p = 0;
    function y(N, G, V, lt, tt, pt) {
      let { id: ot, start: P, end: ft, size: ht } = f, yt = p, R = g;
      if (ht < 0) if (f.next(), ht == -1) {
        let M = o[ot];
        V.push(M), lt.push(P - N);
        return;
      } else if (ht == -3) {
        g = ot;
        return;
      } else if (ht == -4) {
        p = ot;
        return;
      } else throw new RangeError(`Unrecognized record size: ${ht}`);
      let Z = h[ot], it, rt, mt = P - N;
      if (ft - P <= r && (rt = _(f.pos - G, tt))) {
        let M = new Uint16Array(rt.size - rt.skip), H = f.pos - rt.size, W = M.length;
        for (; f.pos > H; ) W = O(rt.start, M, W);
        it = new al(M, ft - rt.start, n), mt = rt.start - N;
      } else {
        let M = f.pos - ht;
        f.next();
        let H = [], W = [], $ = ot >= u ? ot : -1, dt = 0, bt = ft;
        for (; f.pos > M; ) $ >= 0 && f.id == $ && f.size >= 0 ? (f.end <= bt - r && (w(H, W, P, dt, f.end, bt, $, yt, R), dt = H.length, bt = f.end), f.next()) : pt > 2500 ? v(P, M, H, W) : y(P, M, H, W, $, pt + 1);
        if ($ >= 0 && dt > 0 && dt < H.length && w(H, W, P, dt, P, bt, $, yt, R), H.reverse(), W.reverse(), $ > -1 && dt > 0) {
          let Dt = S(Z, R);
          it = Vm(Z, H, W, 0, H.length, 0, ft - P, Dt, Dt);
        } else it = C(Z, H, W, ft - P, yt - ft, R);
      }
      V.push(it), lt.push(mt);
    }
    function v(N, G, V, lt) {
      let tt = [], pt = 0, ot = -1;
      for (; f.pos > G; ) {
        let { id: P, start: ft, end: ht, size: yt } = f;
        if (yt > 4) f.next();
        else {
          if (ot > -1 && ft < ot) break;
          ot < 0 && (ot = ht - r), tt.push(P, ft, ht), pt++, f.next();
        }
      }
      if (pt) {
        let P = new Uint16Array(pt * 4), ft = tt[tt.length - 2];
        for (let ht = tt.length - 3, yt = 0; ht >= 0; ht -= 3) P[yt++] = tt[ht], P[yt++] = tt[ht + 1] - ft, P[yt++] = tt[ht + 2] - ft, P[yt++] = yt;
        V.push(new al(P, tt[2] - ft, n)), lt.push(ft - N);
      }
    }
    function S(N, G) {
      return (V, lt, tt) => {
        let pt = 0, ot = V.length - 1, P, ft;
        if (ot >= 0 && (P = V[ot]) instanceof Ee) {
          if (!ot && P.type == N && P.length == tt) return P;
          (ft = P.prop(Ot.lookAhead)) && (pt = lt[ot] + P.length + ft);
        }
        return C(N, V, lt, tt, pt, G);
      };
    }
    function w(N, G, V, lt, tt, pt, ot, P, ft) {
      let ht = [], yt = [];
      for (; N.length > lt; ) ht.push(N.pop()), yt.push(G.pop() + V - tt);
      N.push(C(n.types[ot], ht, yt, pt - tt, P - pt, ft)), G.push(tt - V);
    }
    function C(N, G, V, lt, tt, pt, ot) {
      if (pt) {
        let P = [
          Ot.contextHash,
          pt
        ];
        ot = ot ? [
          P
        ].concat(ot) : [
          P
        ];
      }
      if (tt > 25) {
        let P = [
          Ot.lookAhead,
          tt
        ];
        ot = ot ? [
          P
        ].concat(ot) : [
          P
        ];
      }
      return new Ee(N, G, V, lt, ot);
    }
    function _(N, G) {
      let V = f.fork(), lt = 0, tt = 0, pt = 0, ot = V.end - r, P = {
        size: 0,
        start: 0,
        skip: 0
      };
      t: for (let ft = V.pos - N; V.pos > ft; ) {
        let ht = V.size;
        if (V.id == G && ht >= 0) {
          P.size = lt, P.start = tt, P.skip = pt, pt += 4, lt += 4, V.next();
          continue;
        }
        let yt = V.pos - ht;
        if (ht < 0 || yt < ft || V.start < ot) break;
        let R = V.id >= u ? 4 : 0, Z = V.start;
        for (V.next(); V.pos > yt; ) {
          if (V.size < 0) if (V.size == -3 || V.size == -4) R += 4;
          else break t;
          else V.id >= u && (R += 4);
          V.next();
        }
        tt = Z, lt += ht, pt += R;
      }
      return (G < 0 || lt == N) && (P.size = lt, P.start = tt, P.skip = pt), P.size > 4 ? P : void 0;
    }
    function O(N, G, V) {
      let { id: lt, start: tt, end: pt, size: ot } = f;
      if (f.next(), ot >= 0 && lt < u) {
        let P = V;
        if (ot > 4) {
          let ft = f.pos - (ot - 4);
          for (; f.pos > ft; ) V = O(N, G, V);
        }
        G[--V] = P, G[--V] = pt - N, G[--V] = tt - N, G[--V] = lt;
      } else ot == -3 ? g = lt : ot == -4 && (p = lt);
      return V;
    }
    let j = [], L = [];
    for (; f.pos > 0; ) y(l.start || 0, l.bufferStart || 0, j, L, -1, 0);
    let Q = (t = l.length) !== null && t !== void 0 ? t : j.length ? L[0] + j[0].length : 0;
    return new Ee(h[l.topID], j.reverse(), L.reverse(), Q);
  }
  const g1 = /* @__PURE__ */ new WeakMap();
  function Hu(l, t) {
    if (!l.isAnonymous || t instanceof al || t.type != l) return 1;
    let e = g1.get(t);
    if (e == null) {
      e = 1;
      for (let n of t.children) {
        if (n.type != l || !(n instanceof Ee)) {
          e = 1;
          break;
        }
        e += Hu(l, n);
      }
      g1.set(t, e);
    }
    return e;
  }
  function Vm(l, t, e, n, r, o, u, f, h) {
    let g = 0;
    for (let w = n; w < r; w++) g += Hu(l, t[w]);
    let p = Math.ceil(g * 1.5 / 8), y = [], v = [];
    function S(w, C, _, O, j) {
      for (let L = _; L < O; ) {
        let Q = L, N = C[L], G = Hu(l, w[L]);
        for (L++; L < O; L++) {
          let V = Hu(l, w[L]);
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
          let V = C[L - 1] + w[L - 1].length - N;
          y.push(Vm(l, w, C, Q, L, N, V, null, h));
        }
        v.push(N + j - o);
      }
    }
    return S(t, e, n, r, 0), (f || h)(y, v, u);
  }
  class Ll {
    constructor(t, e, n, r, o = false, u = false) {
      this.from = t, this.to = e, this.tree = n, this.offset = r, this.open = (o ? 1 : 0) | (u ? 2 : 0);
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
      for (let o of e) o.to > t.length && r.push(o);
      return r;
    }
    static applyChanges(t, e, n = 128) {
      if (!e.length) return t;
      let r = [], o = 1, u = t.length ? t[0] : null;
      for (let f = 0, h = 0, g = 0; ; f++) {
        let p = f < e.length ? e[f] : null, y = p ? p.fromA : 1e9;
        if (y - h >= n) for (; u && u.from < y; ) {
          let v = u;
          if (h >= v.from || y <= v.to || g) {
            let S = Math.max(v.from, h) - g, w = Math.min(v.to, y) - g;
            v = S >= w ? null : new Ll(S, w, v.tree, v.offset + g, f > 0, !!p);
          }
          if (v && r.push(v), u.to > y) break;
          u = o < t.length ? t[o++] : null;
        }
        if (!p) break;
        h = p.toA, g = p.toA - p.toB;
      }
      return r;
    }
  }
  class sk {
    startParse(t, e, n) {
      return typeof t == "string" && (t = new rk(t)), n = n ? n.length ? n.map((r) => new ad(r.from, r.to)) : [
        new ad(0, 0)
      ] : [
        new ad(0, t.length)
      ], this.createParse(t, e || [], n);
    }
    parse(t, e, n) {
      let r = this.startParse(t, e, n);
      for (; ; ) {
        let o = r.advance();
        if (o) return o;
      }
    }
  }
  class rk {
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
  new Ot({
    perNode: true
  });
  let ok = 0;
  class Si {
    constructor(t, e, n, r) {
      this.name = t, this.set = e, this.base = n, this.modified = r, this.id = ok++;
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
      if (r.set.push(r), e) for (let o of e.set) r.set.push(o);
      return r;
    }
    static defineModifier(t) {
      let e = new Ju(t);
      return (n) => n.modified.indexOf(e) > -1 ? n : Ju.get(n.base || n, n.modified.concat(e).sort((r, o) => r.id - o.id));
    }
  }
  let ak = 0;
  class Ju {
    constructor(t) {
      this.name = t, this.instances = [], this.id = ak++;
    }
    static get(t, e) {
      if (!e.length) return t;
      let n = e[0].instances.find((f) => f.base == t && uk(e, f.modified));
      if (n) return n;
      let r = [], o = new Si(t.name, r, t, e);
      for (let f of e) f.instances.push(o);
      let u = ck(e);
      for (let f of t.set) if (!f.modified.length) for (let h of u) r.push(Ju.get(f, h));
      return o;
    }
  }
  function uk(l, t) {
    return l.length == t.length && l.every((e, n) => e == t[n]);
  }
  function ck(l) {
    let t = [
      []
    ];
    for (let e = 0; e < l.length; e++) for (let n = 0, r = t.length; n < r; n++) t.push(t[n].concat(l[e]));
    return t.sort((e, n) => n.length - e.length);
  }
  function fk(l) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let e in l) {
      let n = l[e];
      Array.isArray(n) || (n = [
        n
      ]);
      for (let r of e.split(" ")) if (r) {
        let o = [], u = 2, f = r;
        for (let y = 0; ; ) {
          if (f == "..." && y > 0 && y + 3 == r.length) {
            u = 1;
            break;
          }
          let v = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(f);
          if (!v) throw new RangeError("Invalid path: " + r);
          if (o.push(v[0] == "*" ? "" : v[0][0] == '"' ? JSON.parse(v[0]) : v[0]), y += v[0].length, y == r.length) break;
          let S = r[y++];
          if (y == r.length && S == "!") {
            u = 0;
            break;
          }
          if (S != "/") throw new RangeError("Invalid path: " + r);
          f = r.slice(y);
        }
        let h = o.length - 1, g = o[h];
        if (!g) throw new RangeError("Invalid path: " + r);
        let p = new Ao(n, u, h > 0 ? o.slice(0, h) : null);
        t[g] = p.sort(t[g]);
      }
    }
    return LS.add(t);
  }
  const LS = new Ot({
    combine(l, t) {
      let e, n, r;
      for (; l || t; ) {
        if (!l || t && l.depth >= t.depth ? (r = t, t = t.next) : (r = l, l = l.next), e && e.mode == r.mode && !r.context && !e.context) continue;
        let o = new Ao(r.tags, r.mode, r.context);
        e ? e.next = o : n = o, e = o;
      }
      return n;
    }
  });
  class Ao {
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
  Ao.empty = new Ao([], 2, null);
  function HS(l, t) {
    let e = /* @__PURE__ */ Object.create(null);
    for (let o of l) if (!Array.isArray(o.tag)) e[o.tag.id] = o.class;
    else for (let u of o.tag) e[u.id] = o.class;
    let { scope: n, all: r = null } = t || {};
    return {
      style: (o) => {
        let u = r;
        for (let f of o) for (let h of f.set) {
          let g = e[h.id];
          if (g) {
            u = u ? u + " " + g : g;
            break;
          }
        }
        return u;
      },
      scope: n
    };
  }
  function hk(l, t) {
    let e = null;
    for (let n of l) {
      let r = n.style(t);
      r && (e = e ? e + " " + r : r);
    }
    return e;
  }
  function dk(l, t, e, n = 0, r = l.length) {
    let o = new mk(n, Array.isArray(t) ? t : [
      t
    ], e);
    o.highlightRange(l.cursor(), n, r, "", o.highlighters), o.flush(r);
  }
  class mk {
    constructor(t, e, n) {
      this.at = t, this.highlighters = e, this.span = n, this.class = "";
    }
    startSpan(t, e) {
      e != this.class && (this.flush(t), t > this.at && (this.at = t), this.class = e);
    }
    flush(t) {
      t > this.at && this.class && this.span(this.at, t, this.class);
    }
    highlightRange(t, e, n, r, o) {
      let { type: u, from: f, to: h } = t;
      if (f >= n || h <= e) return;
      u.isTop && (o = this.highlighters.filter((S) => !S.scope || S.scope(u)));
      let g = r, p = gk(t) || Ao.empty, y = hk(o, p.tags);
      if (y && (g && (g += " "), g += y, p.mode == 1 && (r += (r ? " " : "") + y)), this.startSpan(Math.max(e, f), g), p.opaque) return;
      let v = t.tree && t.tree.prop(Ot.mounted);
      if (v && v.overlay) {
        let S = t.node.enter(v.overlay[0].from + f, 1), w = this.highlighters.filter((_) => !_.scope || _.scope(v.tree.type)), C = t.firstChild();
        for (let _ = 0, O = f; ; _++) {
          let j = _ < v.overlay.length ? v.overlay[_] : null, L = j ? j.from + f : h, Q = Math.max(e, O), N = Math.min(n, L);
          if (Q < N && C) for (; t.from < N && (this.highlightRange(t, Q, N, r, o), this.startSpan(Math.min(N, t.to), g), !(t.to >= L || !t.nextSibling())); ) ;
          if (!j || L > n) break;
          O = j.to + f, O > e && (this.highlightRange(S.cursor(), Math.max(e, j.from + f), Math.min(n, O), "", w), this.startSpan(Math.min(n, O), g));
        }
        C && t.parent();
      } else if (t.firstChild()) {
        v && (r = "");
        do
          if (!(t.to <= e)) {
            if (t.from >= n) break;
            this.highlightRange(t, e, n, r, o), this.startSpan(Math.min(n, t.to), g);
          }
        while (t.nextSibling());
        t.parent();
      }
    }
  }
  function gk(l) {
    let t = l.type.prop(LS);
    for (; t && t.context && !l.matchContext(t.context); ) t = t.next;
    return t || null;
  }
  const J = Si.define, Su = J(), In = J(), p1 = J(In), y1 = J(In), Pn = J(), xu = J(Pn), ud = J(Pn), Yi = J(), Dl = J(Yi), qi = J(), ji = J(), cm = J(), Ir = J(cm), wu = J(), q = {
    comment: Su,
    lineComment: J(Su),
    blockComment: J(Su),
    docComment: J(Su),
    name: In,
    variableName: J(In),
    typeName: p1,
    tagName: J(p1),
    propertyName: y1,
    attributeName: J(y1),
    className: J(In),
    labelName: J(In),
    namespace: J(In),
    macroName: J(In),
    literal: Pn,
    string: xu,
    docString: J(xu),
    character: J(xu),
    attributeValue: J(xu),
    number: ud,
    integer: J(ud),
    float: J(ud),
    bool: J(Pn),
    regexp: J(Pn),
    escape: J(Pn),
    color: J(Pn),
    url: J(Pn),
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
    punctuation: cm,
    separator: J(cm),
    bracket: Ir,
    angleBracket: J(Ir),
    squareBracket: J(Ir),
    paren: J(Ir),
    brace: J(Ir),
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
    meta: wu,
    documentMeta: J(wu),
    annotation: J(wu),
    processingInstruction: J(wu),
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
  HS([
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
  var cd;
  const lo = new Ot(), pk = new Ot();
  class Qi {
    constructor(t, e, n = [], r = "") {
      this.data = t, this.name = r, kt.prototype.hasOwnProperty("tree") || Object.defineProperty(kt.prototype, "tree", {
        get() {
          return Be(this);
        }
      }), this.parser = e, this.extension = [
        ul.of(this),
        kt.languageData.of((o, u, f) => {
          let h = b1(o, u, f), g = h.type.prop(lo);
          if (!g) return [];
          let p = o.facet(g), y = h.type.prop(pk);
          if (y) {
            let v = h.resolve(u - h.from, f);
            for (let S of y) if (S.test(v, o)) {
              let w = o.facet(S.facet);
              return S.type == "replace" ? w : w.concat(p);
            }
          }
          return p;
        })
      ].concat(n);
    }
    isActiveAt(t, e, n = -1) {
      return b1(t, e, n).type.prop(lo) == this.data;
    }
    findRegions(t) {
      let e = t.facet(ul);
      if ((e == null ? void 0 : e.data) == this.data) return [
        {
          from: 0,
          to: t.doc.length
        }
      ];
      if (!e || !e.allowsNesting) return [];
      let n = [], r = (o, u) => {
        if (o.prop(lo) == this.data) {
          n.push({
            from: u,
            to: u + o.length
          });
          return;
        }
        let f = o.prop(Ot.mounted);
        if (f) {
          if (f.tree.prop(lo) == this.data) {
            if (f.overlay) for (let h of f.overlay) n.push({
              from: h.from + u,
              to: h.to + u
            });
            else n.push({
              from: u,
              to: u + o.length
            });
            return;
          } else if (f.overlay) {
            let h = n.length;
            if (r(f.tree, f.overlay[0].from + u), n.length > h) return;
          }
        }
        for (let h = 0; h < o.children.length; h++) {
          let g = o.children[h];
          g instanceof Ee && r(g, o.positions[h] + u);
        }
      };
      return r(Be(t), 0), n;
    }
    get allowsNesting() {
      return true;
    }
  }
  Qi.setState = St.define();
  function b1(l, t, e) {
    let n = l.facet(ul), r = Be(l).topNode;
    if (!n || n.allowsNesting) for (let o = r; o; o = o.enter(t, e, Me.ExcludeBuffers)) o.type.isTop && (r = o);
    return r;
  }
  function Be(l) {
    let t = l.field(Qi.state, false);
    return t ? t.tree : Ee.empty;
  }
  class yk {
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
  let Pr = null;
  class Fu {
    constructor(t, e, n = [], r, o, u, f, h) {
      this.parser = t, this.state = e, this.fragments = n, this.tree = r, this.treeLen = o, this.viewport = u, this.skipped = f, this.scheduleOn = h, this.parse = null, this.tempSkipped = [];
    }
    static create(t, e, n) {
      return new Fu(t, e, [], Ee.empty, 0, n, [], null);
    }
    startParse() {
      return this.parser.startParse(new yk(this.state.doc), this.fragments);
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
      let e = Pr;
      Pr = this;
      try {
        return t();
      } finally {
        Pr = e;
      }
    }
    withoutTempSkipped(t) {
      for (let e; e = this.tempSkipped.pop(); ) t = v1(t, e.from, e.to);
      return t;
    }
    changes(t, e) {
      let { fragments: n, tree: r, treeLen: o, viewport: u, skipped: f } = this;
      if (this.takeTree(), !t.empty) {
        let h = [];
        if (t.iterChangedRanges((g, p, y, v) => h.push({
          fromA: g,
          toA: p,
          fromB: y,
          toB: v
        })), n = Ll.applyChanges(n, h), r = Ee.empty, o = 0, u = {
          from: t.mapPos(u.from, -1),
          to: t.mapPos(u.to, 1)
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
      return new Fu(this.parser, e, n, r, o, u, f, this.scheduleOn);
    }
    updateViewport(t) {
      if (this.viewport.from == t.from && this.viewport.to == t.to) return false;
      this.viewport = t;
      let e = this.skipped.length;
      for (let n = 0; n < this.skipped.length; n++) {
        let { from: r, to: o } = this.skipped[n];
        r < t.to && o > t.from && (this.fragments = v1(this.fragments, r, o), this.skipped.splice(n--, 1));
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
      return new class extends sk {
        createParse(e, n, r) {
          let o = r[0].from, u = r[r.length - 1].to;
          return {
            parsedPos: o,
            advance() {
              let h = Pr;
              if (h) {
                for (let g of r) h.tempSkipped.push(g);
                t && (h.scheduleOn = h.scheduleOn ? Promise.all([
                  h.scheduleOn,
                  t
                ]) : t);
              }
              return this.parsedPos = u, new Ee(_i.none, [], [], u - o);
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
      return Pr;
    }
  }
  function v1(l, t, e) {
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
      let e = Math.min(3e3, t.doc.length), n = Fu.create(t.facet(ul).parser, t, {
        from: 0,
        to: e
      });
      return n.work(20, e) || n.takeTree(), new Ws(n);
    }
  }
  Qi.state = Te.define({
    create: Ws.init,
    update(l, t) {
      for (let e of t.effects) if (e.is(Qi.setState)) return e.value;
      return t.startState.facet(ul) != t.state.facet(ul) ? Ws.init(t.state) : l.apply(t);
    }
  });
  let US = (l) => {
    let t = setTimeout(() => l(), 500);
    return () => clearTimeout(t);
  };
  typeof requestIdleCallback < "u" && (US = (l) => {
    let t = -1, e = setTimeout(() => {
      t = requestIdleCallback(l, {
        timeout: 400
      });
    }, 100);
    return () => t < 0 ? clearTimeout(e) : cancelIdleCallback(t);
  });
  const fd = typeof navigator < "u" && (!((cd = navigator.scheduling) === null || cd === void 0) && cd.isInputPending) ? () => navigator.scheduling.isInputPending() : null, bk = $t.fromClass(class {
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
      (e.tree != e.context.tree || !e.context.isDone(t.doc.length)) && (this.working = US(this.work));
    }
    work(t) {
      this.working = null;
      let e = Date.now();
      if (this.chunkEnd < e && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = e + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
      let { state: n, viewport: { to: r } } = this.view, o = n.field(Qi.state);
      if (o.tree == o.context.tree && o.context.isDone(r + 1e5)) return;
      let u = Date.now() + Math.min(this.chunkBudget, 100, t && !fd ? Math.max(25, t.timeRemaining() - 5) : 1e9), f = o.context.treeLen < r && n.doc.length > r + 1e3, h = o.context.work(() => fd && fd() || Date.now() > u, r + (f ? 0 : 1e5));
      this.chunkBudget -= Date.now() - e, (h || this.chunkBudget <= 0) && (o.context.takeTree(), this.view.dispatch({
        effects: Qi.setState.of(new Ws(o.context))
      })), this.chunkBudget > 0 && !(h && !f) && this.scheduleWork(), this.checkAsyncSchedule(o.context);
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
  }), ul = et.define({
    combine(l) {
      return l.length ? l[0] : null;
    },
    enables: (l) => [
      Qi.state,
      bk,
      I.contentAttributes.compute([
        l
      ], (t) => {
        let e = t.facet(l);
        return e && e.name ? {
          "data-language": e.name
        } : {};
      })
    ]
  }), vk = et.define(), mc = et.define({
    combine: (l) => {
      if (!l.length) return "  ";
      let t = l[0];
      if (!t || /\S/.test(t) || Array.from(t).some((e) => e != t[0])) throw new Error("Invalid indent unit: " + JSON.stringify(l[0]));
      return t;
    }
  });
  function Iu(l) {
    let t = l.facet(mc);
    return t.charCodeAt(0) == 9 ? l.tabSize * t.length : t.length;
  }
  function Co(l, t) {
    let e = "", n = l.tabSize, r = l.facet(mc)[0];
    if (r == "	") {
      for (; t >= n; ) e += "	", t -= n;
      r = " ";
    }
    for (let o = 0; o < t; o++) e += r;
    return e;
  }
  function qm(l, t) {
    l instanceof kt && (l = new gc(l));
    for (let n of l.state.facet(vk)) {
      let r = n(l, t);
      if (r !== void 0) return r;
    }
    let e = Be(l.state);
    return e.length >= t ? xk(l, e, t) : null;
  }
  class gc {
    constructor(t, e = {}) {
      this.state = t, this.options = e, this.unit = Iu(t);
    }
    lineAt(t, e = 1) {
      let n = this.state.doc.lineAt(t), { simulateBreak: r, simulateDoubleBreak: o } = this.options;
      return r != null && r >= n.from && r <= n.to ? o && r == t ? {
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
      let { text: n, from: r } = this.lineAt(t, e), o = this.countColumn(n, t - r), u = this.options.overrideIndentation ? this.options.overrideIndentation(r) : -1;
      return u > -1 && (o += u - this.countColumn(n, n.search(/\S|$/))), o;
    }
    countColumn(t, e = t.length) {
      return Is(t, this.state.tabSize, e);
    }
    lineIndent(t, e = 1) {
      let { text: n, from: r } = this.lineAt(t, e), o = this.options.overrideIndentation;
      if (o) {
        let u = o(r);
        if (u > -1) return u;
      }
      return this.countColumn(n, n.search(/\S|$/));
    }
    get simulatedBreak() {
      return this.options.simulateBreak || null;
    }
  }
  const Sk = new Ot();
  function xk(l, t, e) {
    let n = t.resolveStack(e), r = t.resolveInner(e, -1).resolve(e, 0).enterUnfinishedNodesBefore(e);
    if (r != n.node) {
      let o = [];
      for (let u = r; u && !(u.from < n.node.from || u.to > n.node.to || u.from == n.node.from && u.type == n.node.type); u = u.parent) o.push(u);
      for (let u = o.length - 1; u >= 0; u--) n = {
        node: o[u],
        next: n
      };
    }
    return VS(n, l, e);
  }
  function VS(l, t, e) {
    for (let n = l; n; n = n.next) {
      let r = Ak(n.node);
      if (r) return r(jm.create(t, e, n));
    }
    return 0;
  }
  function wk(l) {
    return l.pos == l.options.simulateBreak && l.options.simulateDoubleBreak;
  }
  function Ak(l) {
    let t = l.type.prop(Sk);
    if (t) return t;
    let e = l.firstChild, n;
    if (e && (n = e.type.prop(Ot.closedBy))) {
      let r = l.lastChild, o = r && n.indexOf(r.name) > -1;
      return (u) => Tk(u, true, 1, void 0, o && !wk(u) ? r.from : void 0);
    }
    return l.parent == null ? Ck : null;
  }
  function Ck() {
    return 0;
  }
  class jm extends gc {
    constructor(t, e, n) {
      super(t.state, t.options), this.base = t, this.pos = e, this.context = n;
    }
    get node() {
      return this.context.node;
    }
    static create(t, e, n) {
      return new jm(t, e, n);
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
        if (Mk(n, t)) break;
        e = this.state.doc.lineAt(n.from);
      }
      return this.lineIndent(e.from);
    }
    continue() {
      return VS(this.context.next, this.base, this.pos);
    }
  }
  function Mk(l, t) {
    for (let e = t; e; e = e.parent) if (l == e) return true;
    return false;
  }
  function _k(l) {
    let t = l.node, e = t.childAfter(t.from), n = t.lastChild;
    if (!e) return null;
    let r = l.options.simulateBreak, o = l.state.doc.lineAt(e.from), u = r == null || r <= o.from ? o.to : Math.min(o.to, r);
    for (let f = e.to; ; ) {
      let h = t.childAfter(f);
      if (!h || h == n) return null;
      if (!h.type.isSkipped) {
        if (h.from >= u) return null;
        let g = /^ */.exec(o.text.slice(e.to - o.from))[0].length;
        return {
          from: e.from,
          to: e.to + g
        };
      }
      f = h.to;
    }
  }
  function Tk(l, t, e, n, r) {
    let o = l.textAfter, u = o.match(/^\s*/)[0].length, f = n && o.slice(u, u + n.length) == n || r == l.pos + u, h = _k(l);
    return h ? f ? l.column(h.from) : l.column(h.to) : l.baseIndent + (f ? 0 : l.unit * e);
  }
  const kk = 200;
  function Ok() {
    return kt.transactionFilter.of((l) => {
      if (!l.docChanged || !l.isUserEvent("input.type") && !l.isUserEvent("input.complete")) return l;
      let t = l.startState.languageDataAt("indentOnInput", l.startState.selection.main.head);
      if (!t.length) return l;
      let e = l.newDoc, { head: n } = l.newSelection.main, r = e.lineAt(n);
      if (n > r.from + kk) return l;
      let o = e.sliceString(r.from, n);
      if (!t.some((g) => g.test(o))) return l;
      let { state: u } = l, f = -1, h = [];
      for (let { head: g } of u.selection.ranges) {
        let p = u.doc.lineAt(g);
        if (p.from == f) continue;
        f = p.from;
        let y = qm(u, p.from);
        if (y == null) continue;
        let v = /^\s*/.exec(p.text)[0], S = Co(u, y);
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
  const Dk = et.define(), Ek = new Ot();
  function Bk(l, t, e) {
    let n = Be(l);
    if (n.length < e) return null;
    let r = n.resolveStack(e, 1), o = null;
    for (let u = r; u; u = u.next) {
      let f = u.node;
      if (f.to <= e || f.from > e) continue;
      if (o && f.from < t) break;
      let h = f.type.prop(Ek);
      if (h && (f.to < n.length - 50 || n.length == l.doc.length || !Rk(f))) {
        let g = h(f, l);
        g && g.from <= e && g.from >= t && g.to > e && (o = g);
      }
    }
    return o;
  }
  function Rk(l) {
    let t = l.lastChild;
    return t && t.to == l.to && t.type.isError;
  }
  function Pu(l, t, e) {
    for (let n of l.facet(Dk)) {
      let r = n(l, t, e);
      if (r) return r;
    }
    return Bk(l, t, e);
  }
  function qS(l, t) {
    let e = t.mapPos(l.from, 1), n = t.mapPos(l.to, -1);
    return e >= n ? void 0 : {
      from: e,
      to: n
    };
  }
  const pc = St.define({
    map: qS
  }), No = St.define({
    map: qS
  });
  function jS(l) {
    let t = [];
    for (let { head: e } of l.state.selection.ranges) t.some((n) => n.from <= e && n.to >= e) || t.push(l.lineBlockAt(e));
    return t;
  }
  const Yl = Te.define({
    create() {
      return ut.none;
    },
    update(l, t) {
      t.isUserEvent("delete") && t.changes.iterChangedRanges((e, n) => l = S1(l, e, n)), l = l.map(t.changes);
      for (let e of t.effects) if (e.is(pc) && !zk(l, e.value.from, e.value.to)) {
        let { preparePlaceholder: n } = t.state.facet(XS), r = n ? ut.replace({
          widget: new jk(n(t.state, e.value))
        }) : x1;
        l = l.update({
          add: [
            r.range(e.value.from, e.value.to)
          ]
        });
      } else e.is(No) && (l = l.update({
        filter: (n, r) => e.value.from != n || e.value.to != r,
        filterFrom: e.value.from,
        filterTo: e.value.to
      }));
      return t.selection && (l = S1(l, t.selection.main.head)), l;
    },
    provide: (l) => I.decorations.from(l),
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
        t.push(x1.range(n, r));
      }
      return ut.set(t, true);
    }
  });
  function S1(l, t, e = t) {
    let n = false;
    return l.between(t, e, (r, o) => {
      r < e && o > t && (n = true);
    }), n ? l.update({
      filterFrom: t,
      filterTo: e,
      filter: (r, o) => r >= e || o <= t
    }) : l;
  }
  function $u(l, t, e) {
    var n;
    let r = null;
    return (n = l.field(Yl, false)) === null || n === void 0 || n.between(t, e, (o, u) => {
      (!r || r.from > o) && (r = {
        from: o,
        to: u
      });
    }), r;
  }
  function zk(l, t, e) {
    let n = false;
    return l.between(t, t, (r, o) => {
      r == t && o == e && (n = true);
    }), n;
  }
  function YS(l, t) {
    return l.field(Yl, false) ? t : t.concat(St.appendConfig.of(KS()));
  }
  const Nk = (l) => {
    for (let t of jS(l)) {
      let e = Pu(l.state, t.from, t.to);
      if (e) return l.dispatch({
        effects: YS(l.state, [
          pc.of(e),
          GS(l, e)
        ])
      }), true;
    }
    return false;
  }, Lk = (l) => {
    if (!l.state.field(Yl, false)) return false;
    let t = [];
    for (let e of jS(l)) {
      let n = $u(l.state, e.from, e.to);
      n && t.push(No.of(n), GS(l, n, false));
    }
    return t.length && l.dispatch({
      effects: t
    }), t.length > 0;
  };
  function GS(l, t, e = true) {
    let n = l.state.doc.lineAt(t.from).number, r = l.state.doc.lineAt(t.to).number;
    return I.announce.of(`${l.state.phrase(e ? "Folded lines" : "Unfolded lines")} ${n} ${l.state.phrase("to")} ${r}.`);
  }
  const Hk = (l) => {
    let { state: t } = l, e = [];
    for (let n = 0; n < t.doc.length; ) {
      let r = l.lineBlockAt(n), o = Pu(t, r.from, r.to);
      o && e.push(pc.of(o)), n = (o ? l.lineBlockAt(o.to) : r).to + 1;
    }
    return e.length && l.dispatch({
      effects: YS(l.state, e)
    }), !!e.length;
  }, Uk = (l) => {
    let t = l.state.field(Yl, false);
    if (!t || !t.size) return false;
    let e = [];
    return t.between(0, l.state.doc.length, (n, r) => {
      e.push(No.of({
        from: n,
        to: r
      }));
    }), l.dispatch({
      effects: e
    }), true;
  }, Vk = [
    {
      key: "Ctrl-Shift-[",
      mac: "Cmd-Alt-[",
      run: Nk
    },
    {
      key: "Ctrl-Shift-]",
      mac: "Cmd-Alt-]",
      run: Lk
    },
    {
      key: "Ctrl-Alt-[",
      run: Hk
    },
    {
      key: "Ctrl-Alt-]",
      run: Uk
    }
  ], qk = {
    placeholderDOM: null,
    preparePlaceholder: null,
    placeholderText: "\u2026"
  }, XS = et.define({
    combine(l) {
      return $i(l, qk);
    }
  });
  function KS(l) {
    return [
      Yl,
      Xk
    ];
  }
  function QS(l, t) {
    let { state: e } = l, n = e.facet(XS), r = (u) => {
      let f = l.lineBlockAt(l.posAtDOM(u.target)), h = $u(l.state, f.from, f.to);
      h && l.dispatch({
        effects: No.of(h)
      }), u.preventDefault();
    };
    if (n.placeholderDOM) return n.placeholderDOM(l, r, t);
    let o = document.createElement("span");
    return o.textContent = n.placeholderText, o.setAttribute("aria-label", e.phrase("folded code")), o.title = e.phrase("unfold"), o.className = "cm-foldPlaceholder", o.onclick = r, o;
  }
  const x1 = ut.replace({
    widget: new class extends Mn {
      toDOM(l) {
        return QS(l, null);
      }
    }()
  });
  class jk extends Mn {
    constructor(t) {
      super(), this.value = t;
    }
    eq(t) {
      return this.value == t.value;
    }
    toDOM(t) {
      return QS(t, this.value);
    }
  }
  const Yk = {
    openText: "\u2304",
    closedText: "\u203A",
    markerDOM: null,
    domEventHandlers: {},
    foldingChanged: () => false
  };
  class hd extends Cn {
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
  function Gk(l = {}) {
    let t = {
      ...Yk,
      ...l
    }, e = new hd(t, true), n = new hd(t, false), r = $t.fromClass(class {
      constructor(u) {
        this.from = u.viewport.from, this.markers = this.buildMarkers(u);
      }
      update(u) {
        (u.docChanged || u.viewportChanged || u.startState.facet(ul) != u.state.facet(ul) || u.startState.field(Yl, false) != u.state.field(Yl, false) || Be(u.startState) != Be(u.state) || t.foldingChanged(u)) && (this.markers = this.buildMarkers(u.view));
      }
      buildMarkers(u) {
        let f = new wn();
        for (let h of u.viewportLineBlocks) {
          let g = $u(u.state, h.from, h.to) ? n : Pu(u.state, h.from, h.to) ? e : null;
          g && f.add(h.from, h.from, g);
        }
        return f.finish();
      }
    }), { domEventHandlers: o } = t;
    return [
      r,
      jT({
        class: "cm-foldGutter",
        markers(u) {
          var f;
          return ((f = u.plugin(r)) === null || f === void 0 ? void 0 : f.markers) || Et.empty;
        },
        initialSpacer() {
          return new hd(t, false);
        },
        domEventHandlers: {
          ...o,
          click: (u, f, h) => {
            if (o.click && o.click(u, f, h)) return true;
            let g = $u(u.state, f.from, f.to);
            if (g) return u.dispatch({
              effects: No.of(g)
            }), true;
            let p = Pu(u.state, f.from, f.to);
            return p ? (u.dispatch({
              effects: pc.of(p)
            }), true) : false;
          }
        }
      }),
      KS()
    ];
  }
  const Xk = I.baseTheme({
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
  class Lo {
    constructor(t, e) {
      this.specs = t;
      let n;
      function r(f) {
        let h = sl.newName();
        return (n || (n = /* @__PURE__ */ Object.create(null)))["." + h] = f, h;
      }
      const o = typeof e.all == "string" ? e.all : e.all ? r(e.all) : void 0, u = e.scope;
      this.scope = u instanceof Qi ? (f) => f.prop(lo) == u.data : u ? (f) => f == u : void 0, this.style = HS(t.map((f) => ({
        tag: f.tag,
        class: f.class || r(Object.assign({}, f, {
          tag: null
        }))
      })), {
        all: o
      }).style, this.module = n ? new sl(n) : null, this.themeType = e.themeType;
    }
    static define(t, e) {
      return new Lo(t, e || {});
    }
  }
  const fm = et.define(), ZS = et.define({
    combine(l) {
      return l.length ? [
        l[0]
      ] : null;
    }
  });
  function dd(l) {
    let t = l.facet(fm);
    return t.length ? t : l.facet(ZS);
  }
  function WS(l, t) {
    let e = [
      Qk
    ], n;
    return l instanceof Lo && (l.module && e.push(I.styleModule.of(l.module)), n = l.themeType), (t == null ? void 0 : t.fallback) ? e.push(ZS.of(l)) : n ? e.push(fm.computeN([
      I.darkTheme
    ], (r) => r.facet(I.darkTheme) == (n == "dark") ? [
      l
    ] : [])) : e.push(fm.of(l)), e;
  }
  class Kk {
    constructor(t) {
      this.markCache = /* @__PURE__ */ Object.create(null), this.tree = Be(t.state), this.decorations = this.buildDeco(t, dd(t.state)), this.decoratedTo = t.viewport.to;
    }
    update(t) {
      let e = Be(t.state), n = dd(t.state), r = n != dd(t.startState), { viewport: o } = t.view, u = t.changes.mapPos(this.decoratedTo, 1);
      e.length < o.to && !r && e.type == this.tree.type && u >= o.to ? (this.decorations = this.decorations.map(t.changes), this.decoratedTo = u) : (e != this.tree || t.viewportChanged || r) && (this.tree = e, this.decorations = this.buildDeco(t.view, n), this.decoratedTo = o.to);
    }
    buildDeco(t, e) {
      if (!e || !this.tree.length) return ut.none;
      let n = new wn();
      for (let { from: r, to: o } of t.visibleRanges) dk(this.tree, e, (u, f, h) => {
        n.add(u, f, this.markCache[h] || (this.markCache[h] = ut.mark({
          class: h
        })));
      }, r, o);
      return n.finish();
    }
  }
  const Qk = Gl.high($t.fromClass(Kk, {
    decorations: (l) => l.decorations
  })), Zk = Lo.define([
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
  ]), Wk = I.baseTheme({
    "&.cm-focused .cm-matchingBracket": {
      backgroundColor: "#328c8252"
    },
    "&.cm-focused .cm-nonmatchingBracket": {
      backgroundColor: "#bb555544"
    }
  }), JS = 1e4, FS = "()[]{}", IS = et.define({
    combine(l) {
      return $i(l, {
        afterCursor: true,
        brackets: FS,
        maxScanDistance: JS,
        renderMatch: Ik
      });
    }
  }), Jk = ut.mark({
    class: "cm-matchingBracket"
  }), Fk = ut.mark({
    class: "cm-nonmatchingBracket"
  });
  function Ik(l) {
    let t = [], e = l.matched ? Jk : Fk;
    return t.push(e.range(l.start.from, l.start.to)), l.end && t.push(e.range(l.end.from, l.end.to)), t;
  }
  const Pk = Te.define({
    create() {
      return ut.none;
    },
    update(l, t) {
      if (!t.docChanged && !t.selection) return l;
      let e = [], n = t.state.facet(IS);
      for (let r of t.state.selection.ranges) {
        if (!r.empty) continue;
        let o = Zi(t.state, r.head, -1, n) || r.head > 0 && Zi(t.state, r.head - 1, 1, n) || n.afterCursor && (Zi(t.state, r.head, 1, n) || r.head < t.state.doc.length && Zi(t.state, r.head + 1, -1, n));
        o && (e = e.concat(n.renderMatch(o, t.state)));
      }
      return ut.set(e, true);
    },
    provide: (l) => I.decorations.from(l)
  }), $k = [
    Pk,
    Wk
  ];
  function tO(l = {}) {
    return [
      IS.of(l),
      $k
    ];
  }
  const eO = new Ot();
  function hm(l, t, e) {
    let n = l.prop(t < 0 ? Ot.openedBy : Ot.closedBy);
    if (n) return n;
    if (l.name.length == 1) {
      let r = e.indexOf(l.name);
      if (r > -1 && r % 2 == (t < 0 ? 1 : 0)) return [
        e[r + t]
      ];
    }
    return null;
  }
  function dm(l) {
    let t = l.type.prop(eO);
    return t ? t(l.node) : l;
  }
  function Zi(l, t, e, n = {}) {
    let r = n.maxScanDistance || JS, o = n.brackets || FS, u = Be(l), f = u.resolveInner(t, e);
    for (let h = f; h; h = h.parent) {
      let g = hm(h.type, e, o);
      if (g && h.from < h.to) {
        let p = dm(h);
        if (p && (e > 0 ? t >= p.from && t < p.to : t > p.from && t <= p.to)) return iO(l, t, e, h, p, g, o);
      }
    }
    return nO(l, t, e, u, f.type, r, o);
  }
  function iO(l, t, e, n, r, o, u) {
    let f = n.parent, h = {
      from: r.from,
      to: r.to
    }, g = 0, p = f == null ? void 0 : f.cursor();
    if (p && (e < 0 ? p.childBefore(n.from) : p.childAfter(n.to))) do
      if (e < 0 ? p.to <= n.from : p.from >= n.to) {
        if (g == 0 && o.indexOf(p.type.name) > -1 && p.from < p.to) {
          let y = dm(p);
          return {
            start: h,
            end: y ? {
              from: y.from,
              to: y.to
            } : void 0,
            matched: true
          };
        } else if (hm(p.type, e, u)) g++;
        else if (hm(p.type, -e, u)) {
          if (g == 0) {
            let y = dm(p);
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
  function nO(l, t, e, n, r, o, u) {
    let f = e < 0 ? l.sliceDoc(t - 1, t) : l.sliceDoc(t, t + 1), h = u.indexOf(f);
    if (h < 0 || h % 2 == 0 != e > 0) return null;
    let g = {
      from: e < 0 ? t - 1 : t,
      to: e > 0 ? t + 1 : t
    }, p = l.doc.iterRange(t, e > 0 ? l.doc.length : 0), y = 0;
    for (let v = 0; !p.next().done && v <= o; ) {
      let S = p.value;
      e < 0 && (v += S.length);
      let w = t + v * e;
      for (let C = e > 0 ? 0 : S.length - 1, _ = e > 0 ? S.length : -1; C != _; C += e) {
        let O = u.indexOf(S[C]);
        if (!(O < 0 || n.resolveInner(w + C, 1).type != r)) if (O % 2 == 0 == e > 0) y++;
        else {
          if (y == 1) return {
            start: g,
            end: {
              from: w + C,
              to: w + C + 1
            },
            matched: O >> 1 == h >> 1
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
  const lO = /* @__PURE__ */ Object.create(null), w1 = [
    _i.none
  ], A1 = [], C1 = /* @__PURE__ */ Object.create(null), sO = /* @__PURE__ */ Object.create(null);
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
  ]) sO[l] = rO(lO, t);
  function md(l, t) {
    A1.indexOf(l) > -1 || (A1.push(l), console.warn(t));
  }
  function rO(l, t) {
    let e = [];
    for (let f of t.split(" ")) {
      let h = [];
      for (let g of f.split(".")) {
        let p = l[g] || q[g];
        p ? typeof p == "function" ? h.length ? h = h.map(p) : md(g, `Modifier ${g} used at start of tag`) : h.length ? md(g, `Tag ${g} used as modifier`) : h = Array.isArray(p) ? p : [
          p
        ] : md(g, `Unknown highlighting tag ${g}`);
      }
      for (let g of h) e.push(g);
    }
    if (!e.length) return 0;
    let n = t.replace(/ /g, "_"), r = n + " " + e.map((f) => f.id), o = C1[r];
    if (o) return o.id;
    let u = C1[r] = _i.define({
      id: w1.length,
      name: n,
      props: [
        fk({
          [n]: e
        })
      ]
    });
    return w1.push(u), u.id;
  }
  Wt.RTL, Wt.LTR;
  const oO = (l) => {
    let { state: t } = l, e = t.doc.lineAt(t.selection.main.from), n = Gm(l.state, e.from);
    return n.line ? aO(l) : n.block ? cO(l) : false;
  };
  function Ym(l, t) {
    return ({ state: e, dispatch: n }) => {
      if (e.readOnly) return false;
      let r = l(t, e);
      return r ? (n(e.update(r)), true) : false;
    };
  }
  const aO = Ym(dO, 0), uO = Ym(PS, 0), cO = Ym((l, t) => PS(l, t, hO(t)), 0);
  function Gm(l, t) {
    let e = l.languageDataAt("commentTokens", t, 1);
    return e.length ? e[0] : {};
  }
  const $r = 50;
  function fO(l, { open: t, close: e }, n, r) {
    let o = l.sliceDoc(n - $r, n), u = l.sliceDoc(r, r + $r), f = /\s*$/.exec(o)[0].length, h = /^\s*/.exec(u)[0].length, g = o.length - f;
    if (o.slice(g - t.length, g) == t && u.slice(h, h + e.length) == e) return {
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
  function hO(l) {
    let t = [];
    for (let e of l.selection.ranges) {
      let n = l.doc.lineAt(e.from), r = e.to <= n.to ? n : l.doc.lineAt(e.to);
      r.from > n.from && r.from == e.to && (r = e.to == n.to + 1 ? n : l.doc.lineAt(e.to - 1));
      let o = t.length - 1;
      o >= 0 && t[o].to > n.from ? t[o].to = r.to : t.push({
        from: n.from + /^\s*/.exec(n.text)[0].length,
        to: r.to
      });
    }
    return t;
  }
  function PS(l, t, e = t.selection.ranges) {
    let n = e.map((o) => Gm(t, o.from).block);
    if (!n.every((o) => o)) return null;
    let r = e.map((o, u) => fO(t, n[u], o.from, o.to));
    if (l != 2 && !r.every((o) => o)) return {
      changes: t.changes(e.map((o, u) => r[u] ? [] : [
        {
          from: o.from,
          insert: n[u].open + " "
        },
        {
          from: o.to,
          insert: " " + n[u].close
        }
      ]))
    };
    if (l != 1 && r.some((o) => o)) {
      let o = [];
      for (let u = 0, f; u < r.length; u++) if (f = r[u]) {
        let h = n[u], { open: g, close: p } = f;
        o.push({
          from: g.pos - h.open.length,
          to: g.pos + g.margin
        }, {
          from: p.pos - p.margin,
          to: p.pos + h.close.length
        });
      }
      return {
        changes: o
      };
    }
    return null;
  }
  function dO(l, t, e = t.selection.ranges) {
    let n = [], r = -1;
    for (let { from: o, to: u } of e) {
      let f = n.length, h = 1e9, g = Gm(t, o).line;
      if (g) {
        for (let p = o; p <= u; ) {
          let y = t.doc.lineAt(p);
          if (y.from > r && (o == u || u > y.from)) {
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
    if (l != 2 && n.some((o) => o.comment < 0 && (!o.empty || o.single))) {
      let o = [];
      for (let { line: f, token: h, indent: g, empty: p, single: y } of n) (y || !p) && o.push({
        from: f.from + g,
        insert: h + " "
      });
      let u = t.changes(o);
      return {
        changes: u,
        selection: t.selection.map(u, 1)
      };
    } else if (l != 1 && n.some((o) => o.comment >= 0)) {
      let o = [];
      for (let { line: u, comment: f, token: h } of n) if (f >= 0) {
        let g = u.from + f, p = g + h.length;
        u.text[p - u.from] == " " && p++, o.push({
          from: g,
          to: p
        });
      }
      return {
        changes: o
      };
    }
    return null;
  }
  const mm = Pi.define(), mO = Pi.define(), gO = et.define(), $S = et.define({
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
  }), tx = Te.define({
    create() {
      return Wi.empty;
    },
    update(l, t) {
      let e = t.state.facet($S), n = t.annotation(mm);
      if (n) {
        let h = Fe.fromTransaction(t, n.selection), g = n.side, p = g == 0 ? l.undone : l.done;
        return h ? p = tc(p, p.length, e.minDepth, h) : p = nx(p, t.startState.selection), new Wi(g == 0 ? n.rest : p, g == 0 ? p : n.rest);
      }
      let r = t.annotation(mO);
      if ((r == "full" || r == "before") && (l = l.isolate()), t.annotation(me.addToHistory) === false) return t.changes.empty ? l : l.addMapping(t.changes.desc);
      let o = Fe.fromTransaction(t), u = t.annotation(me.time), f = t.annotation(me.userEvent);
      return o ? l = l.addChanges(o, u, f, e, t) : t.selection && (l = l.addSelection(t.startState.selection, u, f, e.newGroupDelay)), (r == "full" || r == "after") && (l = l.isolate()), l;
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
  function pO(l = {}) {
    return [
      tx,
      $S.of(l),
      I.domEventHandlers({
        beforeinput(t, e) {
          let n = t.inputType == "historyUndo" ? ex : t.inputType == "historyRedo" ? gm : null;
          return n ? (t.preventDefault(), n(e)) : false;
        }
      })
    ];
  }
  function yc(l, t) {
    return function({ state: e, dispatch: n }) {
      if (!t && e.readOnly) return false;
      let r = e.field(tx, false);
      if (!r) return false;
      let o = r.pop(l, e, t);
      return o ? (n(o), true) : false;
    };
  }
  const ex = yc(0, false), gm = yc(1, false), yO = yc(0, true), bO = yc(1, true);
  class Fe {
    constructor(t, e, n, r, o) {
      this.changes = t, this.effects = e, this.mapped = n, this.startSelection = r, this.selectionsAfter = o;
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
      for (let r of t.startState.facet(gO)) {
        let o = r(t);
        o.length && (n = n.concat(o));
      }
      return !n.length && t.changes.empty ? null : new Fe(t.changes.invert(t.startState.doc), n, void 0, e || t.startState.selection, xi);
    }
    static selection(t) {
      return new Fe(void 0, xi, void 0, void 0, t);
    }
  }
  function tc(l, t, e, n) {
    let r = t + 1 > e + 20 ? t - e - 1 : 0, o = l.slice(r, t);
    return o.push(n), o;
  }
  function vO(l, t) {
    let e = [], n = false;
    return l.iterChangedRanges((r, o) => e.push(r, o)), t.iterChangedRanges((r, o, u, f) => {
      for (let h = 0; h < e.length; ) {
        let g = e[h++], p = e[h++];
        f >= g && u <= p && (n = true);
      }
    }), n;
  }
  function SO(l, t) {
    return l.ranges.length == t.ranges.length && l.ranges.filter((e, n) => e.empty != t.ranges[n].empty).length === 0;
  }
  function ix(l, t) {
    return l.length ? t.length ? l.concat(t) : l : t;
  }
  const xi = [], xO = 200;
  function nx(l, t) {
    if (l.length) {
      let e = l[l.length - 1], n = e.selectionsAfter.slice(Math.max(0, e.selectionsAfter.length - xO));
      return n.length && n[n.length - 1].eq(t) ? l : (n.push(t), tc(l, l.length - 1, 1e9, e.setSelAfter(n)));
    } else return [
      Fe.selection([
        t
      ])
    ];
  }
  function wO(l) {
    let t = l[l.length - 1], e = l.slice();
    return e[l.length - 1] = t.setSelAfter(t.selectionsAfter.slice(0, t.selectionsAfter.length - 1)), e;
  }
  function gd(l, t) {
    if (!l.length) return l;
    let e = l.length, n = xi;
    for (; e; ) {
      let r = AO(l[e - 1], t, n);
      if (r.changes && !r.changes.empty || r.effects.length) {
        let o = l.slice(0, e);
        return o[e - 1] = r, o;
      } else t = r.mapped, e--, n = r.selectionsAfter;
    }
    return n.length ? [
      Fe.selection(n)
    ] : xi;
  }
  function AO(l, t, e) {
    let n = ix(l.selectionsAfter.length ? l.selectionsAfter.map((f) => f.map(t)) : xi, e);
    if (!l.changes) return Fe.selection(n);
    let r = l.changes.map(t), o = t.mapDesc(l.changes, true), u = l.mapped ? l.mapped.composeDesc(o) : o;
    return new Fe(r, St.mapEffects(l.effects, t), u, l.startSelection.map(o), n);
  }
  const CO = /^(input\.type|delete)($|\.)/;
  class Wi {
    constructor(t, e, n = 0, r = void 0) {
      this.done = t, this.undone = e, this.prevTime = n, this.prevUserEvent = r;
    }
    isolate() {
      return this.prevTime ? new Wi(this.done, this.undone) : this;
    }
    addChanges(t, e, n, r, o) {
      let u = this.done, f = u[u.length - 1];
      return f && f.changes && !f.changes.empty && t.changes && (!n || CO.test(n)) && (!f.selectionsAfter.length && e - this.prevTime < r.newGroupDelay && r.joinToEvent(o, vO(f.changes, t.changes)) || n == "input.type.compose") ? u = tc(u, u.length - 1, r.minDepth, new Fe(t.changes.compose(f.changes), ix(St.mapEffects(t.effects, f.changes), f.effects), f.mapped, f.startSelection, xi)) : u = tc(u, u.length, r.minDepth, t), new Wi(u, xi, e, n);
    }
    addSelection(t, e, n, r) {
      let o = this.done.length ? this.done[this.done.length - 1].selectionsAfter : xi;
      return o.length > 0 && e - this.prevTime < r && n == this.prevUserEvent && n && /^select($|\.)/.test(n) && SO(o[o.length - 1], t) ? this : new Wi(nx(this.done, t), this.undone, e, n);
    }
    addMapping(t) {
      return new Wi(gd(this.done, t), gd(this.undone, t), this.prevTime, this.prevUserEvent);
    }
    pop(t, e, n) {
      let r = t == 0 ? this.done : this.undone;
      if (r.length == 0) return null;
      let o = r[r.length - 1], u = o.selectionsAfter[0] || e.selection;
      if (n && o.selectionsAfter.length) return e.update({
        selection: o.selectionsAfter[o.selectionsAfter.length - 1],
        annotations: mm.of({
          side: t,
          rest: wO(r),
          selection: u
        }),
        userEvent: t == 0 ? "select.undo" : "select.redo",
        scrollIntoView: true
      });
      if (o.changes) {
        let f = r.length == 1 ? xi : r.slice(0, r.length - 1);
        return o.mapped && (f = gd(f, o.mapped)), e.update({
          changes: o.changes,
          selection: o.startSelection,
          effects: o.effects,
          annotations: mm.of({
            side: t,
            rest: f,
            selection: u
          }),
          filter: false,
          userEvent: t == 0 ? "undo" : "redo",
          scrollIntoView: true
        });
      } else return null;
    }
  }
  Wi.empty = new Wi(xi, xi);
  const MO = [
    {
      key: "Mod-z",
      run: ex,
      preventDefault: true
    },
    {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: gm,
      preventDefault: true
    },
    {
      linux: "Ctrl-Shift-z",
      run: gm,
      preventDefault: true
    },
    {
      key: "Mod-u",
      run: yO,
      preventDefault: true
    },
    {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: bO,
      preventDefault: true
    }
  ];
  function Ps(l, t) {
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
    let n = Ps(l.selection, e);
    return n.eq(l.selection, true) ? false : (t(Ri(l, n)), true);
  }
  function bc(l, t) {
    return K.cursor(t ? l.to : l.from);
  }
  function lx(l, t) {
    return zi(l, (e) => e.empty ? l.moveByChar(e, t) : bc(e, t));
  }
  function Re(l) {
    return l.textDirectionAt(l.state.selection.main.head) == Wt.LTR;
  }
  const sx = (l) => lx(l, !Re(l)), rx = (l) => lx(l, Re(l));
  function ox(l, t) {
    return zi(l, (e) => e.empty ? l.moveByGroup(e, t) : bc(e, t));
  }
  const _O = (l) => ox(l, !Re(l)), TO = (l) => ox(l, Re(l));
  function kO(l, t, e) {
    if (t.type.prop(e)) return true;
    let n = t.to - t.from;
    return n && (n > 2 || /[^\s,.;:]/.test(l.sliceDoc(t.from, t.to))) || t.firstChild;
  }
  function vc(l, t, e) {
    let n = Be(l).resolveInner(t.head), r = e ? Ot.closedBy : Ot.openedBy;
    for (let h = t.head; ; ) {
      let g = e ? n.childAfter(h) : n.childBefore(h);
      if (!g) break;
      kO(l, g, r) ? n = g : h = e ? g.to : g.from;
    }
    let o = n.type.prop(r), u, f;
    return o && (u = e ? Zi(l, n.from, 1) : Zi(l, n.to, -1)) && u.matched ? f = e ? u.end.to : u.end.from : f = e ? n.to : n.from, K.cursor(f, e ? -1 : 1);
  }
  const OO = (l) => zi(l, (t) => vc(l.state, t, !Re(l))), DO = (l) => zi(l, (t) => vc(l.state, t, Re(l)));
  function ax(l, t) {
    return zi(l, (e) => {
      if (!e.empty) return bc(e, t);
      let n = l.moveVertically(e, t);
      return n.head != e.head ? n : l.moveToLineBoundary(e, t);
    });
  }
  const ux = (l) => ax(l, false), cx = (l) => ax(l, true);
  function fx(l) {
    let t = l.scrollDOM.clientHeight < l.scrollDOM.scrollHeight - 2, e = 0, n = 0, r;
    if (t) {
      for (let o of l.state.facet(I.scrollMargins)) {
        let u = o(l);
        (u == null ? void 0 : u.top) && (e = Math.max(u == null ? void 0 : u.top, e)), (u == null ? void 0 : u.bottom) && (n = Math.max(u == null ? void 0 : u.bottom, n));
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
  function hx(l, t) {
    let e = fx(l), { state: n } = l, r = Ps(n.selection, (u) => u.empty ? l.moveVertically(u, t, e.height) : bc(u, t));
    if (r.eq(n.selection)) return false;
    let o;
    if (e.selfScroll) {
      let u = l.coordsAtPos(n.selection.main.head), f = l.scrollDOM.getBoundingClientRect(), h = f.top + e.marginTop, g = f.bottom - e.marginBottom;
      u && u.top > h && u.bottom < g && (o = I.scrollIntoView(r.main.head, {
        y: "start",
        yMargin: u.top - h
      }));
    }
    return l.dispatch(Ri(n, r), {
      effects: o
    }), true;
  }
  const M1 = (l) => hx(l, false), pm = (l) => hx(l, true);
  function cl(l, t, e) {
    let n = l.lineBlockAt(t.head), r = l.moveToLineBoundary(t, e);
    if (r.head == t.head && r.head != (e ? n.to : n.from) && (r = l.moveToLineBoundary(t, e, false)), !e && r.head == n.from && n.length) {
      let o = /^\s*/.exec(l.state.sliceDoc(n.from, Math.min(n.from + 100, n.to)))[0].length;
      o && t.head != n.from + o && (r = K.cursor(n.from + o));
    }
    return r;
  }
  const EO = (l) => zi(l, (t) => cl(l, t, true)), BO = (l) => zi(l, (t) => cl(l, t, false)), RO = (l) => zi(l, (t) => cl(l, t, !Re(l))), zO = (l) => zi(l, (t) => cl(l, t, Re(l))), NO = (l) => zi(l, (t) => K.cursor(l.lineBlockAt(t.head).from, 1)), LO = (l) => zi(l, (t) => K.cursor(l.lineBlockAt(t.head).to, -1));
  function HO(l, t, e) {
    let n = false, r = Ps(l.selection, (o) => {
      let u = Zi(l, o.head, -1) || Zi(l, o.head, 1) || o.head > 0 && Zi(l, o.head - 1, 1) || o.head < l.doc.length && Zi(l, o.head + 1, -1);
      if (!u || !u.end) return o;
      n = true;
      let f = u.start.from == o.head ? u.end.to : u.end.from;
      return K.cursor(f);
    });
    return n ? (t(Ri(l, r)), true) : false;
  }
  const UO = ({ state: l, dispatch: t }) => HO(l, t);
  function Ti(l, t) {
    let e = Ps(l.state.selection, (n) => {
      let r = t(n);
      return K.range(n.anchor, r.head, r.goalColumn, r.bidiLevel || void 0);
    });
    return e.eq(l.state.selection) ? false : (l.dispatch(Ri(l.state, e)), true);
  }
  function dx(l, t) {
    return Ti(l, (e) => l.moveByChar(e, t));
  }
  const mx = (l) => dx(l, !Re(l)), gx = (l) => dx(l, Re(l));
  function px(l, t) {
    return Ti(l, (e) => l.moveByGroup(e, t));
  }
  const VO = (l) => px(l, !Re(l)), qO = (l) => px(l, Re(l)), jO = (l) => Ti(l, (t) => vc(l.state, t, !Re(l))), YO = (l) => Ti(l, (t) => vc(l.state, t, Re(l)));
  function yx(l, t) {
    return Ti(l, (e) => l.moveVertically(e, t));
  }
  const bx = (l) => yx(l, false), vx = (l) => yx(l, true);
  function Sx(l, t) {
    return Ti(l, (e) => l.moveVertically(e, t, fx(l).height));
  }
  const _1 = (l) => Sx(l, false), T1 = (l) => Sx(l, true), GO = (l) => Ti(l, (t) => cl(l, t, true)), XO = (l) => Ti(l, (t) => cl(l, t, false)), KO = (l) => Ti(l, (t) => cl(l, t, !Re(l))), QO = (l) => Ti(l, (t) => cl(l, t, Re(l))), ZO = (l) => Ti(l, (t) => K.cursor(l.lineBlockAt(t.head).from)), WO = (l) => Ti(l, (t) => K.cursor(l.lineBlockAt(t.head).to)), k1 = ({ state: l, dispatch: t }) => (t(Ri(l, {
    anchor: 0
  })), true), O1 = ({ state: l, dispatch: t }) => (t(Ri(l, {
    anchor: l.doc.length
  })), true), D1 = ({ state: l, dispatch: t }) => (t(Ri(l, {
    anchor: l.selection.main.anchor,
    head: 0
  })), true), E1 = ({ state: l, dispatch: t }) => (t(Ri(l, {
    anchor: l.selection.main.anchor,
    head: l.doc.length
  })), true), JO = ({ state: l, dispatch: t }) => (t(l.update({
    selection: {
      anchor: 0,
      head: l.doc.length
    },
    userEvent: "select"
  })), true), FO = ({ state: l, dispatch: t }) => {
    let e = Sc(l).map(({ from: n, to: r }) => K.range(n, Math.min(r + 1, l.doc.length)));
    return t(l.update({
      selection: K.create(e),
      userEvent: "select"
    })), true;
  }, IO = ({ state: l, dispatch: t }) => {
    let e = Ps(l.selection, (n) => {
      let r = Be(l), o = r.resolveStack(n.from, 1);
      if (n.empty) {
        let u = r.resolveStack(n.from, -1);
        u.node.from >= o.node.from && u.node.to <= o.node.to && (o = u);
      }
      for (let u = o; u; u = u.next) {
        let { node: f } = u;
        if ((f.from < n.from && f.to >= n.to || f.to > n.to && f.from <= n.from) && u.next) return K.range(f.to, f.from);
      }
      return n;
    });
    return e.eq(l.selection) ? false : (t(Ri(l, e)), true);
  };
  function xx(l, t) {
    let { state: e } = l, n = e.selection, r = e.selection.ranges.slice();
    for (let o of e.selection.ranges) {
      let u = e.doc.lineAt(o.head);
      if (t ? u.to < l.state.doc.length : u.from > 0) for (let f = o; ; ) {
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
  const PO = (l) => xx(l, false), $O = (l) => xx(l, true), tD = ({ state: l, dispatch: t }) => {
    let e = l.selection, n = null;
    return e.ranges.length > 1 ? n = K.create([
      e.main
    ]) : e.main.empty || (n = K.create([
      K.cursor(e.main.head)
    ])), n ? (t(Ri(l, n)), true) : false;
  };
  function Ho(l, t) {
    if (l.state.readOnly) return false;
    let e = "delete.selection", { state: n } = l, r = n.changeByRange((o) => {
      let { from: u, to: f } = o;
      if (u == f) {
        let h = t(o);
        h < u ? (e = "delete.backward", h = Au(l, h, false)) : h > u && (e = "delete.forward", h = Au(l, h, true)), u = Math.min(u, h), f = Math.max(f, h);
      } else u = Au(l, u, false), f = Au(l, f, true);
      return u == f ? {
        range: o
      } : {
        changes: {
          from: u,
          to: f
        },
        range: K.cursor(u, u < o.head ? -1 : 1)
      };
    });
    return r.changes.empty ? false : (l.dispatch(n.update(r, {
      scrollIntoView: true,
      userEvent: e,
      effects: e == "delete.selection" ? I.announce.of(n.phrase("Selection deleted")) : void 0
    })), true);
  }
  function Au(l, t, e) {
    if (l instanceof I) for (let n of l.state.facet(I.atomicRanges).map((r) => r(l))) n.between(t, t, (r, o) => {
      r < t && o > t && (t = e ? o : r);
    });
    return t;
  }
  const wx = (l, t, e) => Ho(l, (n) => {
    let r = n.from, { state: o } = l, u = o.doc.lineAt(r), f, h;
    if (e && !t && r > u.from && r < u.from + 200 && !/[^ \t]/.test(f = u.text.slice(0, r - u.from))) {
      if (f[f.length - 1] == "	") return r - 1;
      let g = Is(f, o.tabSize), p = g % Iu(o) || Iu(o);
      for (let y = 0; y < p && f[f.length - 1 - y] == " "; y++) r--;
      h = r;
    } else h = _e(u.text, r - u.from, t, t) + u.from, h == r && u.number != (t ? o.doc.lines : 1) ? h += t ? 1 : -1 : !t && /[\ufe00-\ufe0f]/.test(u.text.slice(h - u.from, r - u.from)) && (h = _e(u.text, h - u.from, false, false) + u.from);
    return h;
  }), ym = (l) => wx(l, false, true), Ax = (l) => wx(l, true, false), Cx = (l, t) => Ho(l, (e) => {
    let n = e.head, { state: r } = l, o = r.doc.lineAt(n), u = r.charCategorizer(n);
    for (let f = null; ; ) {
      if (n == (t ? o.to : o.from)) {
        n == e.head && o.number != (t ? r.doc.lines : 1) && (n += t ? 1 : -1);
        break;
      }
      let h = _e(o.text, n - o.from, t) + o.from, g = o.text.slice(Math.min(n, h) - o.from, Math.max(n, h) - o.from), p = u(g);
      if (f != null && p != f) break;
      (g != " " || n != e.head) && (f = p), n = h;
    }
    return n;
  }), Mx = (l) => Cx(l, false), eD = (l) => Cx(l, true), iD = (l) => Ho(l, (t) => {
    let e = l.lineBlockAt(t.head).to;
    return t.head < e ? e : Math.min(l.state.doc.length, t.head + 1);
  }), nD = (l) => Ho(l, (t) => {
    let e = l.moveToLineBoundary(t, false).head;
    return t.head > e ? e : Math.max(0, t.head - 1);
  }), lD = (l) => Ho(l, (t) => {
    let e = l.moveToLineBoundary(t, true).head;
    return t.head < e ? e : Math.min(l.state.doc.length, t.head + 1);
  }), sD = ({ state: l, dispatch: t }) => {
    if (l.readOnly) return false;
    let e = l.changeByRange((n) => ({
      changes: {
        from: n.from,
        to: n.to,
        insert: Bt.of([
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
  }, rD = ({ state: l, dispatch: t }) => {
    if (l.readOnly) return false;
    let e = l.changeByRange((n) => {
      if (!n.empty || n.from == 0 || n.from == l.doc.length) return {
        range: n
      };
      let r = n.from, o = l.doc.lineAt(r), u = r == o.from ? r - 1 : _e(o.text, r - o.from, false) + o.from, f = r == o.to ? r + 1 : _e(o.text, r - o.from, true) + o.from;
      return {
        changes: {
          from: u,
          to: f,
          insert: l.doc.slice(r, f).append(l.doc.slice(u, r))
        },
        range: K.cursor(f)
      };
    });
    return e.changes.empty ? false : (t(l.update(e, {
      scrollIntoView: true,
      userEvent: "move.character"
    })), true);
  };
  function Sc(l) {
    let t = [], e = -1;
    for (let n of l.selection.ranges) {
      let r = l.doc.lineAt(n.from), o = l.doc.lineAt(n.to);
      if (!n.empty && n.to == o.from && (o = l.doc.lineAt(n.to - 1)), e >= r.number) {
        let u = t[t.length - 1];
        u.to = o.to, u.ranges.push(n);
      } else t.push({
        from: r.from,
        to: o.to,
        ranges: [
          n
        ]
      });
      e = o.number + 1;
    }
    return t;
  }
  function _x(l, t, e) {
    if (l.readOnly) return false;
    let n = [], r = [];
    for (let o of Sc(l)) {
      if (e ? o.to == l.doc.length : o.from == 0) continue;
      let u = l.doc.lineAt(e ? o.to + 1 : o.from - 1), f = u.length + 1;
      if (e) {
        n.push({
          from: o.to,
          to: u.to
        }, {
          from: o.from,
          insert: u.text + l.lineBreak
        });
        for (let h of o.ranges) r.push(K.range(Math.min(l.doc.length, h.anchor + f), Math.min(l.doc.length, h.head + f)));
      } else {
        n.push({
          from: u.from,
          to: o.from
        }, {
          from: o.to,
          insert: l.lineBreak + u.text
        });
        for (let h of o.ranges) r.push(K.range(h.anchor - f, h.head - f));
      }
    }
    return n.length ? (t(l.update({
      changes: n,
      scrollIntoView: true,
      selection: K.create(r, l.selection.mainIndex),
      userEvent: "move.line"
    })), true) : false;
  }
  const oD = ({ state: l, dispatch: t }) => _x(l, t, false), aD = ({ state: l, dispatch: t }) => _x(l, t, true);
  function Tx(l, t, e) {
    if (l.readOnly) return false;
    let n = [];
    for (let r of Sc(l)) e ? n.push({
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
  const uD = ({ state: l, dispatch: t }) => Tx(l, t, false), cD = ({ state: l, dispatch: t }) => Tx(l, t, true), fD = (l) => {
    if (l.state.readOnly) return false;
    let { state: t } = l, e = t.changes(Sc(t).map(({ from: r, to: o }) => (r > 0 ? r-- : o < t.doc.length && o++, {
      from: r,
      to: o
    }))), n = Ps(t.selection, (r) => {
      let o;
      if (l.lineWrapping) {
        let u = l.lineBlockAt(r.head), f = l.coordsAtPos(r.head, r.assoc || 1);
        f && (o = u.bottom + l.documentTop - f.bottom + l.defaultLineHeight / 2);
      }
      return l.moveVertically(r, true, o);
    }).map(e);
    return l.dispatch({
      changes: e,
      selection: n,
      scrollIntoView: true,
      userEvent: "delete.line"
    }), true;
  };
  function hD(l, t) {
    if (/\(\)|\[\]|\{\}/.test(l.sliceDoc(t - 1, t + 1))) return {
      from: t,
      to: t
    };
    let e = Be(l).resolveInner(t), n = e.childBefore(t), r = e.childAfter(t), o;
    return n && r && n.to <= t && r.from >= t && (o = n.type.prop(Ot.closedBy)) && o.indexOf(r.name) > -1 && l.doc.lineAt(n.to).from == l.doc.lineAt(r.from).from && !/\S/.test(l.sliceDoc(n.to, r.from)) ? {
      from: n.to,
      to: r.from
    } : null;
  }
  const B1 = kx(false), dD = kx(true);
  function kx(l) {
    return ({ state: t, dispatch: e }) => {
      if (t.readOnly) return false;
      let n = t.changeByRange((r) => {
        let { from: o, to: u } = r, f = t.doc.lineAt(o), h = !l && o == u && hD(t, o);
        l && (o = u = (u <= f.to ? f : t.doc.lineAt(u)).to);
        let g = new gc(t, {
          simulateBreak: o,
          simulateDoubleBreak: !!h
        }), p = qm(g, o);
        for (p == null && (p = Is(/^\s*/.exec(t.doc.lineAt(o).text)[0], t.tabSize)); u < f.to && /\s/.test(f.text[u - f.from]); ) u++;
        h ? { from: o, to: u } = h : o > f.from && o < f.from + 100 && !/\S/.test(f.text.slice(0, o)) && (o = f.from);
        let y = [
          "",
          Co(t, p)
        ];
        return h && y.push(Co(t, g.lineIndent(f.from, -1))), {
          changes: {
            from: o,
            to: u,
            insert: Bt.of(y)
          },
          range: K.cursor(o + 1 + y[1].length)
        };
      });
      return e(t.update(n, {
        scrollIntoView: true,
        userEvent: "input"
      })), true;
    };
  }
  function Xm(l, t) {
    let e = -1;
    return l.changeByRange((n) => {
      let r = [];
      for (let u = n.from; u <= n.to; ) {
        let f = l.doc.lineAt(u);
        f.number > e && (n.empty || n.to > f.from) && (t(f, r, n), e = f.number), u = f.to + 1;
      }
      let o = l.changes(r);
      return {
        changes: r,
        range: K.range(o.mapPos(n.anchor, 1), o.mapPos(n.head, 1))
      };
    });
  }
  const mD = ({ state: l, dispatch: t }) => {
    if (l.readOnly) return false;
    let e = /* @__PURE__ */ Object.create(null), n = new gc(l, {
      overrideIndentation: (o) => {
        let u = e[o];
        return u ?? -1;
      }
    }), r = Xm(l, (o, u, f) => {
      let h = qm(n, o.from);
      if (h == null) return;
      /\S/.test(o.text) || (h = 0);
      let g = /^\s*/.exec(o.text)[0], p = Co(l, h);
      (g != p || f.from < o.from + g.length) && (e[o.from] = h, u.push({
        from: o.from,
        to: o.from + g.length,
        insert: p
      }));
    });
    return r.changes.empty || t(l.update(r, {
      userEvent: "indent"
    })), true;
  }, Ox = ({ state: l, dispatch: t }) => l.readOnly ? false : (t(l.update(Xm(l, (e, n) => {
    n.push({
      from: e.from,
      insert: l.facet(mc)
    });
  }), {
    userEvent: "input.indent"
  })), true), Dx = ({ state: l, dispatch: t }) => l.readOnly ? false : (t(l.update(Xm(l, (e, n) => {
    let r = /^\s*/.exec(e.text)[0];
    if (!r) return;
    let o = Is(r, l.tabSize), u = 0, f = Co(l, Math.max(0, o - Iu(l)));
    for (; u < r.length && u < f.length && r.charCodeAt(u) == f.charCodeAt(u); ) u++;
    n.push({
      from: e.from + u,
      to: e.from + r.length,
      insert: f.slice(u)
    });
  }), {
    userEvent: "delete.dedent"
  })), true), gD = (l) => (l.setTabFocusMode(), true), pD = [
    {
      key: "Ctrl-b",
      run: sx,
      shift: mx,
      preventDefault: true
    },
    {
      key: "Ctrl-f",
      run: rx,
      shift: gx
    },
    {
      key: "Ctrl-p",
      run: ux,
      shift: bx
    },
    {
      key: "Ctrl-n",
      run: cx,
      shift: vx
    },
    {
      key: "Ctrl-a",
      run: NO,
      shift: ZO
    },
    {
      key: "Ctrl-e",
      run: LO,
      shift: WO
    },
    {
      key: "Ctrl-d",
      run: Ax
    },
    {
      key: "Ctrl-h",
      run: ym
    },
    {
      key: "Ctrl-k",
      run: iD
    },
    {
      key: "Ctrl-Alt-h",
      run: Mx
    },
    {
      key: "Ctrl-o",
      run: sD
    },
    {
      key: "Ctrl-t",
      run: rD
    },
    {
      key: "Ctrl-v",
      run: pm
    }
  ], yD = [
    {
      key: "ArrowLeft",
      run: sx,
      shift: mx,
      preventDefault: true
    },
    {
      key: "Mod-ArrowLeft",
      mac: "Alt-ArrowLeft",
      run: _O,
      shift: VO,
      preventDefault: true
    },
    {
      mac: "Cmd-ArrowLeft",
      run: RO,
      shift: KO,
      preventDefault: true
    },
    {
      key: "ArrowRight",
      run: rx,
      shift: gx,
      preventDefault: true
    },
    {
      key: "Mod-ArrowRight",
      mac: "Alt-ArrowRight",
      run: TO,
      shift: qO,
      preventDefault: true
    },
    {
      mac: "Cmd-ArrowRight",
      run: zO,
      shift: QO,
      preventDefault: true
    },
    {
      key: "ArrowUp",
      run: ux,
      shift: bx,
      preventDefault: true
    },
    {
      mac: "Cmd-ArrowUp",
      run: k1,
      shift: D1
    },
    {
      mac: "Ctrl-ArrowUp",
      run: M1,
      shift: _1
    },
    {
      key: "ArrowDown",
      run: cx,
      shift: vx,
      preventDefault: true
    },
    {
      mac: "Cmd-ArrowDown",
      run: O1,
      shift: E1
    },
    {
      mac: "Ctrl-ArrowDown",
      run: pm,
      shift: T1
    },
    {
      key: "PageUp",
      run: M1,
      shift: _1
    },
    {
      key: "PageDown",
      run: pm,
      shift: T1
    },
    {
      key: "Home",
      run: BO,
      shift: XO,
      preventDefault: true
    },
    {
      key: "Mod-Home",
      run: k1,
      shift: D1
    },
    {
      key: "End",
      run: EO,
      shift: GO,
      preventDefault: true
    },
    {
      key: "Mod-End",
      run: O1,
      shift: E1
    },
    {
      key: "Enter",
      run: B1,
      shift: B1
    },
    {
      key: "Mod-a",
      run: JO
    },
    {
      key: "Backspace",
      run: ym,
      shift: ym,
      preventDefault: true
    },
    {
      key: "Delete",
      run: Ax,
      preventDefault: true
    },
    {
      key: "Mod-Backspace",
      mac: "Alt-Backspace",
      run: Mx,
      preventDefault: true
    },
    {
      key: "Mod-Delete",
      mac: "Alt-Delete",
      run: eD,
      preventDefault: true
    },
    {
      mac: "Mod-Backspace",
      run: nD,
      preventDefault: true
    },
    {
      mac: "Mod-Delete",
      run: lD,
      preventDefault: true
    }
  ].concat(pD.map((l) => ({
    mac: l.key,
    run: l.run,
    shift: l.shift
  }))), bD = [
    {
      key: "Alt-ArrowLeft",
      mac: "Ctrl-ArrowLeft",
      run: OO,
      shift: jO
    },
    {
      key: "Alt-ArrowRight",
      mac: "Ctrl-ArrowRight",
      run: DO,
      shift: YO
    },
    {
      key: "Alt-ArrowUp",
      run: oD
    },
    {
      key: "Shift-Alt-ArrowUp",
      run: uD
    },
    {
      key: "Alt-ArrowDown",
      run: aD
    },
    {
      key: "Shift-Alt-ArrowDown",
      run: cD
    },
    {
      key: "Mod-Alt-ArrowUp",
      run: PO
    },
    {
      key: "Mod-Alt-ArrowDown",
      run: $O
    },
    {
      key: "Escape",
      run: tD
    },
    {
      key: "Mod-Enter",
      run: dD
    },
    {
      key: "Alt-l",
      mac: "Ctrl-l",
      run: FO
    },
    {
      key: "Mod-i",
      run: IO,
      preventDefault: true
    },
    {
      key: "Mod-[",
      run: Dx
    },
    {
      key: "Mod-]",
      run: Ox
    },
    {
      key: "Mod-Alt-\\",
      run: mD
    },
    {
      key: "Shift-Mod-k",
      run: fD
    },
    {
      key: "Shift-Mod-\\",
      run: UO
    },
    {
      key: "Mod-/",
      run: oO
    },
    {
      key: "Alt-A",
      run: uO
    },
    {
      key: "Ctrl-m",
      mac: "Shift-Alt-m",
      run: gD
    }
  ].concat(yD), vD = {
    key: "Tab",
    run: Ox,
    shift: Dx
  }, R1 = typeof String.prototype.normalize == "function" ? (l) => l.normalize("NFKD") : (l) => l;
  class Js {
    constructor(t, e, n = 0, r = t.length, o, u) {
      this.test = u, this.value = {
        from: 0,
        to: 0
      }, this.done = false, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = t.iterRange(n, r), this.bufferStart = n, this.normalize = o ? (f) => o(R1(f)) : R1, this.query = this.normalize(e);
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
        let e = wm(t), n = this.bufferStart + this.bufferPos;
        this.bufferPos += Xi(t);
        let r = this.normalize(e);
        if (r.length) for (let o = 0, u = n; ; o++) {
          let f = r.charCodeAt(o), h = this.match(f, u, this.bufferPos + this.bufferStart);
          if (o == r.length - 1) {
            if (h) return this.value = h, this;
            break;
          }
          u == n && o < e.length && e.charCodeAt(o) == f && u++;
        }
      }
    }
    match(t, e, n) {
      let r = null;
      for (let o = 0; o < this.matches.length; o += 2) {
        let u = this.matches[o], f = false;
        this.query.charCodeAt(u) == t && (u == this.query.length - 1 ? r = {
          from: this.matches[o + 1],
          to: n
        } : (this.matches[o]++, f = true)), f || (this.matches.splice(o, 2), o -= 2);
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
  const Ex = {
    from: -1,
    to: -1,
    match: /.*/.exec("")
  }, Km = "gm" + (/x/.unicode == null ? "" : "u");
  class Bx {
    constructor(t, e, n, r = 0, o = t.length) {
      if (this.text = t, this.to = o, this.curLine = "", this.done = false, this.value = Ex, /\\[sWDnr]|\n|\r|\[\^/.test(e)) return new Rx(t, e, n, r, o);
      this.re = new RegExp(e, Km + ((n == null ? void 0 : n.ignoreCase) ? "i" : "")), this.test = n == null ? void 0 : n.test, this.iter = t.iter();
      let u = t.lineAt(r);
      this.curLineStart = u.from, this.matchPos = ec(t, r), this.getLine(this.curLineStart);
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
          if (this.matchPos = ec(this.text, r + (n == r ? 1 : 0)), n == this.curLineStart + this.curLine.length && this.nextLine(), (n < r || n > this.value.to) && (!this.test || this.test(n, r, e))) return this.value = {
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
  const pd = /* @__PURE__ */ new WeakMap();
  class Us {
    constructor(t, e) {
      this.from = t, this.text = e;
    }
    get to() {
      return this.from + this.text.length;
    }
    static get(t, e, n) {
      let r = pd.get(t);
      if (!r || r.from >= n || r.to <= e) {
        let f = new Us(e, t.sliceString(e, n));
        return pd.set(t, f), f;
      }
      if (r.from == e && r.to == n) return r;
      let { text: o, from: u } = r;
      return u > e && (o = t.sliceString(e, u) + o, u = e), r.to < n && (o += t.sliceString(r.to, n)), pd.set(t, new Us(u, o)), new Us(e, o.slice(e - u, n - u));
    }
  }
  class Rx {
    constructor(t, e, n, r, o) {
      this.text = t, this.to = o, this.done = false, this.value = Ex, this.matchPos = ec(t, r), this.re = new RegExp(e, Km + ((n == null ? void 0 : n.ignoreCase) ? "i" : "")), this.test = n == null ? void 0 : n.test, this.flat = Us.get(t, r, this.chunkEnd(r + 5e3));
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
          }, this.matchPos = ec(this.text, r + (n == r ? 1 : 0)), this;
        }
        if (this.flat.to == this.to) return this.done = true, this;
        this.flat = Us.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + this.flat.text.length * 2));
      }
    }
  }
  typeof Symbol < "u" && (Bx.prototype[Symbol.iterator] = Rx.prototype[Symbol.iterator] = function() {
    return this;
  });
  function SD(l) {
    try {
      return new RegExp(l, Km), true;
    } catch {
      return false;
    }
  }
  function ec(l, t) {
    if (t >= l.length) return t;
    let e = l.lineAt(t), n;
    for (; t < e.to && (n = e.text.charCodeAt(t - e.from)) >= 56320 && n < 57344; ) t++;
    return t;
  }
  function bm(l) {
    let t = String(l.state.doc.lineAt(l.state.selection.main.head).number), e = Gt("input", {
      class: "cm-textfield",
      name: "line",
      value: t
    }), n = Gt("form", {
      class: "cm-gotoLine",
      onkeydown: (o) => {
        o.keyCode == 27 ? (o.preventDefault(), l.dispatch({
          effects: ho.of(false)
        }), l.focus()) : o.keyCode == 13 && (o.preventDefault(), r());
      },
      onsubmit: (o) => {
        o.preventDefault(), r();
      }
    }, Gt("label", l.state.phrase("Go to line"), ": ", e), " ", Gt("button", {
      class: "cm-button",
      type: "submit"
    }, l.state.phrase("go")), Gt("button", {
      name: "close",
      onclick: () => {
        l.dispatch({
          effects: ho.of(false)
        }), l.focus();
      },
      "aria-label": l.state.phrase("close"),
      type: "button"
    }, [
      "\xD7"
    ]));
    function r() {
      let o = /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(e.value);
      if (!o) return;
      let { state: u } = l, f = u.doc.lineAt(u.selection.main.head), [, h, g, p, y] = o, v = p ? +p.slice(1) : 0, S = g ? +g : f.number;
      if (g && y) {
        let _ = S / 100;
        h && (_ = _ * (h == "-" ? -1 : 1) + f.number / u.doc.lines), S = Math.round(u.doc.lines * _);
      } else g && h && (S = S * (h == "-" ? -1 : 1) + f.number);
      let w = u.doc.line(Math.max(1, Math.min(u.doc.lines, S))), C = K.cursor(w.from + Math.max(0, Math.min(v, w.length)));
      l.dispatch({
        effects: [
          ho.of(false),
          I.scrollIntoView(C.from, {
            y: "center"
          })
        ],
        selection: C
      }), l.focus();
    }
    return {
      dom: n
    };
  }
  const ho = St.define(), z1 = Te.define({
    create() {
      return true;
    },
    update(l, t) {
      for (let e of t.effects) e.is(ho) && (l = e.value);
      return l;
    },
    provide: (l) => xo.from(l, (t) => t ? bm : null)
  }), xD = (l) => {
    let t = So(l, bm);
    if (!t) {
      let e = [
        ho.of(true)
      ];
      l.state.field(z1, false) == null && e.push(St.appendConfig.of([
        z1,
        wD
      ])), l.dispatch({
        effects: e
      }), t = So(l, bm);
    }
    return t && t.dom.querySelector("input").select(), true;
  }, wD = I.baseTheme({
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
  }), AD = {
    highlightWordAroundCursor: false,
    minSelectionLength: 1,
    maxMatches: 100,
    wholeWords: false
  }, CD = et.define({
    combine(l) {
      return $i(l, AD, {
        highlightWordAroundCursor: (t, e) => t || e,
        minSelectionLength: Math.min,
        maxMatches: Math.min
      });
    }
  });
  function MD(l) {
    return [
      DD,
      OD
    ];
  }
  const _D = ut.mark({
    class: "cm-selectionMatch"
  }), TD = ut.mark({
    class: "cm-selectionMatch cm-selectionMatch-main"
  });
  function N1(l, t, e, n) {
    return (e == 0 || l(t.sliceDoc(e - 1, e)) != Ft.Word) && (n == t.doc.length || l(t.sliceDoc(n, n + 1)) != Ft.Word);
  }
  function kD(l, t, e, n) {
    return l(t.sliceDoc(e, e + 1)) == Ft.Word && l(t.sliceDoc(n - 1, n)) == Ft.Word;
  }
  const OD = $t.fromClass(class {
    constructor(l) {
      this.decorations = this.getDeco(l);
    }
    update(l) {
      (l.selectionSet || l.docChanged || l.viewportChanged) && (this.decorations = this.getDeco(l.view));
    }
    getDeco(l) {
      let t = l.state.facet(CD), { state: e } = l, n = e.selection;
      if (n.ranges.length > 1) return ut.none;
      let r = n.main, o, u = null;
      if (r.empty) {
        if (!t.highlightWordAroundCursor) return ut.none;
        let h = e.wordAt(r.head);
        if (!h) return ut.none;
        u = e.charCategorizer(r.head), o = e.sliceDoc(h.from, h.to);
      } else {
        let h = r.to - r.from;
        if (h < t.minSelectionLength || h > 200) return ut.none;
        if (t.wholeWords) {
          if (o = e.sliceDoc(r.from, r.to), u = e.charCategorizer(r.head), !(N1(u, e, r.from, r.to) && kD(u, e, r.from, r.to))) return ut.none;
        } else if (o = e.sliceDoc(r.from, r.to), !o) return ut.none;
      }
      let f = [];
      for (let h of l.visibleRanges) {
        let g = new Js(e.doc, o, h.from, h.to);
        for (; !g.next().done; ) {
          let { from: p, to: y } = g.value;
          if ((!u || N1(u, e, p, y)) && (r.empty && p <= r.from && y >= r.to ? f.push(TD.range(p, y)) : (p >= r.to || y <= r.from) && f.push(_D.range(p, y)), f.length > t.maxMatches)) return ut.none;
        }
      }
      return ut.set(f);
    }
  }, {
    decorations: (l) => l.decorations
  }), DD = I.baseTheme({
    ".cm-selectionMatch": {
      backgroundColor: "#99ff7780"
    },
    ".cm-searchMatch .cm-selectionMatch": {
      backgroundColor: "transparent"
    }
  }), ED = ({ state: l, dispatch: t }) => {
    let { selection: e } = l, n = K.create(e.ranges.map((r) => l.wordAt(r.head) || K.cursor(r.head)), e.mainIndex);
    return n.eq(e) ? false : (t(l.update({
      selection: n
    })), true);
  };
  function BD(l, t) {
    let { main: e, ranges: n } = l.selection, r = l.wordAt(e.head), o = r && r.from == e.from && r.to == e.to;
    for (let u = false, f = new Js(l.doc, t, n[n.length - 1].to); ; ) if (f.next(), f.done) {
      if (u) return null;
      f = new Js(l.doc, t, 0, Math.max(0, n[n.length - 1].from - 1)), u = true;
    } else {
      if (u && n.some((h) => h.from == f.value.from)) continue;
      if (o) {
        let h = l.wordAt(f.value.from);
        if (!h || h.from != f.value.from || h.to != f.value.to) continue;
      }
      return f.value;
    }
  }
  const RD = ({ state: l, dispatch: t }) => {
    let { ranges: e } = l.selection;
    if (e.some((o) => o.from === o.to)) return ED({
      state: l,
      dispatch: t
    });
    let n = l.sliceDoc(e[0].from, e[0].to);
    if (l.selection.ranges.some((o) => l.sliceDoc(o.from, o.to) != n)) return false;
    let r = BD(l, n);
    return r ? (t(l.update({
      selection: l.selection.addRange(K.range(r.from, r.to), false),
      effects: I.scrollIntoView(r.to)
    })), true) : false;
  }, $s = et.define({
    combine(l) {
      return $i(l, {
        top: false,
        caseSensitive: false,
        literal: false,
        regexp: false,
        wholeWord: false,
        createPanel: (t) => new KD(t),
        scrollToMatch: (t) => I.scrollIntoView(t)
      });
    }
  });
  class zx {
    constructor(t) {
      this.search = t.search, this.caseSensitive = !!t.caseSensitive, this.literal = !!t.literal, this.regexp = !!t.regexp, this.replace = t.replace || "", this.valid = !!this.search && (!this.regexp || SD(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!t.wholeWord;
    }
    unquote(t) {
      return this.literal ? t : t.replace(/\\([nrt\\])/g, (e, n) => n == "n" ? `
` : n == "r" ? "\r" : n == "t" ? "	" : "\\");
    }
    eq(t) {
      return this.search == t.search && this.replace == t.replace && this.caseSensitive == t.caseSensitive && this.regexp == t.regexp && this.wholeWord == t.wholeWord;
    }
    create() {
      return this.regexp ? new HD(this) : new ND(this);
    }
    getCursor(t, e = 0, n) {
      let r = t.doc ? t : kt.create({
        doc: t
      });
      return n == null && (n = r.doc.length), this.regexp ? Ds(this, r, e, n) : Os(this, r, e, n);
    }
  }
  class Nx {
    constructor(t) {
      this.spec = t;
    }
  }
  function Os(l, t, e, n) {
    return new Js(t.doc, l.unquoted, e, n, l.caseSensitive ? void 0 : (r) => r.toLowerCase(), l.wholeWord ? zD(t.doc, t.charCategorizer(t.selection.main.head)) : void 0);
  }
  function zD(l, t) {
    return (e, n, r, o) => ((o > e || o + r.length < n) && (o = Math.max(0, e - 2), r = l.sliceString(o, Math.min(l.length, n + 2))), (t(ic(r, e - o)) != Ft.Word || t(nc(r, e - o)) != Ft.Word) && (t(nc(r, n - o)) != Ft.Word || t(ic(r, n - o)) != Ft.Word));
  }
  class ND extends Nx {
    constructor(t) {
      super(t);
    }
    nextMatch(t, e, n) {
      let r = Os(this.spec, t, n, t.doc.length).nextOverlapping();
      if (r.done) {
        let o = Math.min(t.doc.length, e + this.spec.unquoted.length);
        r = Os(this.spec, t, 0, o).nextOverlapping();
      }
      return r.done || r.value.from == e && r.value.to == n ? null : r.value;
    }
    prevMatchInRange(t, e, n) {
      for (let r = n; ; ) {
        let o = Math.max(e, r - 1e4 - this.spec.unquoted.length), u = Os(this.spec, t, o, r), f = null;
        for (; !u.nextOverlapping().done; ) f = u.value;
        if (f) return f;
        if (o == e) return null;
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
      let o = Os(this.spec, t, Math.max(0, e - this.spec.unquoted.length), Math.min(n + this.spec.unquoted.length, t.doc.length));
      for (; !o.next().done; ) r(o.value.from, o.value.to);
    }
  }
  function Ds(l, t, e, n) {
    return new Bx(t.doc, l.search, {
      ignoreCase: !l.caseSensitive,
      test: l.wholeWord ? LD(t.charCategorizer(t.selection.main.head)) : void 0
    }, e, n);
  }
  function ic(l, t) {
    return l.slice(_e(l, t, false), t);
  }
  function nc(l, t) {
    return l.slice(t, _e(l, t));
  }
  function LD(l) {
    return (t, e, n) => !n[0].length || (l(ic(n.input, n.index)) != Ft.Word || l(nc(n.input, n.index)) != Ft.Word) && (l(nc(n.input, n.index + n[0].length)) != Ft.Word || l(ic(n.input, n.index + n[0].length)) != Ft.Word);
  }
  class HD extends Nx {
    nextMatch(t, e, n) {
      let r = Ds(this.spec, t, n, t.doc.length).next();
      return r.done && (r = Ds(this.spec, t, 0, e).next()), r.done ? null : r.value;
    }
    prevMatchInRange(t, e, n) {
      for (let r = 1; ; r++) {
        let o = Math.max(e, n - r * 1e4), u = Ds(this.spec, t, o, n), f = null;
        for (; !u.next().done; ) f = u.value;
        if (f && (o == e || f.from > o + 10)) return f;
        if (o == e) return null;
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
          let o = +n.slice(0, r);
          if (o > 0 && o < t.match.length) return t.match[o] + n.slice(r);
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
      let o = Ds(this.spec, t, Math.max(0, e - 250), Math.min(n + 250, t.doc.length));
      for (; !o.next().done; ) r(o.value.from, o.value.to);
    }
  }
  const Mo = St.define(), Qm = St.define(), nl = Te.define({
    create(l) {
      return new yd(vm(l).create(), null);
    },
    update(l, t) {
      for (let e of t.effects) e.is(Mo) ? l = new yd(e.value.create(), l.panel) : e.is(Qm) && (l = new yd(l.query, e.value ? Zm : null));
      return l;
    },
    provide: (l) => xo.from(l, (t) => t.panel)
  });
  class yd {
    constructor(t, e) {
      this.query = t, this.panel = e;
    }
  }
  const UD = ut.mark({
    class: "cm-searchMatch"
  }), VD = ut.mark({
    class: "cm-searchMatch cm-searchMatch-selected"
  }), qD = $t.fromClass(class {
    constructor(l) {
      this.view = l, this.decorations = this.highlight(l.state.field(nl));
    }
    update(l) {
      let t = l.state.field(nl);
      (t != l.startState.field(nl) || l.docChanged || l.selectionSet || l.viewportChanged) && (this.decorations = this.highlight(t));
    }
    highlight({ query: l, panel: t }) {
      if (!t || !l.spec.valid) return ut.none;
      let { view: e } = this, n = new wn();
      for (let r = 0, o = e.visibleRanges, u = o.length; r < u; r++) {
        let { from: f, to: h } = o[r];
        for (; r < u - 1 && h > o[r + 1].from - 500; ) h = o[++r].to;
        l.highlight(e.state, f, h, (g, p) => {
          let y = e.state.selection.ranges.some((v) => v.from == g && v.to == p);
          n.add(g, p, y ? VD : UD);
        });
      }
      return n.finish();
    }
  }, {
    decorations: (l) => l.decorations
  });
  function Uo(l) {
    return (t) => {
      let e = t.state.field(nl, false);
      return e && e.query.spec.valid ? l(t, e) : Ux(t);
    };
  }
  const lc = Uo((l, { query: t }) => {
    let { to: e } = l.state.selection.main, n = t.nextMatch(l.state, e, e);
    if (!n) return false;
    let r = K.single(n.from, n.to), o = l.state.facet($s);
    return l.dispatch({
      selection: r,
      effects: [
        Wm(l, n),
        o.scrollToMatch(r.main, l)
      ],
      userEvent: "select.search"
    }), Hx(l), true;
  }), sc = Uo((l, { query: t }) => {
    let { state: e } = l, { from: n } = e.selection.main, r = t.prevMatch(e, n, n);
    if (!r) return false;
    let o = K.single(r.from, r.to), u = l.state.facet($s);
    return l.dispatch({
      selection: o,
      effects: [
        Wm(l, r),
        u.scrollToMatch(o.main, l)
      ],
      userEvent: "select.search"
    }), Hx(l), true;
  }), jD = Uo((l, { query: t }) => {
    let e = t.matchAll(l.state, 1e3);
    return !e || !e.length ? false : (l.dispatch({
      selection: K.create(e.map((n) => K.range(n.from, n.to))),
      userEvent: "select.search.matches"
    }), true);
  }), YD = ({ state: l, dispatch: t }) => {
    let e = l.selection;
    if (e.ranges.length > 1 || e.main.empty) return false;
    let { from: n, to: r } = e.main, o = [], u = 0;
    for (let f = new Js(l.doc, l.sliceDoc(n, r)); !f.next().done; ) {
      if (o.length > 1e3) return false;
      f.value.from == n && (u = o.length), o.push(K.range(f.value.from, f.value.to));
    }
    return t(l.update({
      selection: K.create(o, u),
      userEvent: "select.search.matches"
    })), true;
  }, L1 = Uo((l, { query: t }) => {
    let { state: e } = l, { from: n, to: r } = e.selection.main;
    if (e.readOnly) return false;
    let o = t.nextMatch(e, n, n);
    if (!o) return false;
    let u = o, f = [], h, g, p = [];
    u.from == n && u.to == r && (g = e.toText(t.getReplacement(u)), f.push({
      from: u.from,
      to: u.to,
      insert: g
    }), u = t.nextMatch(e, u.from, u.to), p.push(I.announce.of(e.phrase("replaced match on line $", e.doc.lineAt(n).number) + ".")));
    let y = l.state.changes(f);
    return u && (h = K.single(u.from, u.to).map(y), p.push(Wm(l, u)), p.push(e.facet($s).scrollToMatch(h.main, l))), l.dispatch({
      changes: y,
      selection: h,
      effects: p,
      userEvent: "input.replace"
    }), true;
  }), GD = Uo((l, { query: t }) => {
    if (l.state.readOnly) return false;
    let e = t.matchAll(l.state, 1e9).map((r) => {
      let { from: o, to: u } = r;
      return {
        from: o,
        to: u,
        insert: t.getReplacement(r)
      };
    });
    if (!e.length) return false;
    let n = l.state.phrase("replaced $ matches", e.length) + ".";
    return l.dispatch({
      changes: e,
      effects: I.announce.of(n),
      userEvent: "input.replace.all"
    }), true;
  });
  function Zm(l) {
    return l.state.facet($s).createPanel(l);
  }
  function vm(l, t) {
    var e, n, r, o, u;
    let f = l.selection.main, h = f.empty || f.to > f.from + 100 ? "" : l.sliceDoc(f.from, f.to);
    if (t && !h) return t;
    let g = l.facet($s);
    return new zx({
      search: ((e = t == null ? void 0 : t.literal) !== null && e !== void 0 ? e : g.literal) ? h : h.replace(/\n/g, "\\n"),
      caseSensitive: (n = t == null ? void 0 : t.caseSensitive) !== null && n !== void 0 ? n : g.caseSensitive,
      literal: (r = t == null ? void 0 : t.literal) !== null && r !== void 0 ? r : g.literal,
      regexp: (o = t == null ? void 0 : t.regexp) !== null && o !== void 0 ? o : g.regexp,
      wholeWord: (u = t == null ? void 0 : t.wholeWord) !== null && u !== void 0 ? u : g.wholeWord
    });
  }
  function Lx(l) {
    let t = So(l, Zm);
    return t && t.dom.querySelector("[main-field]");
  }
  function Hx(l) {
    let t = Lx(l);
    t && t == l.root.activeElement && t.select();
  }
  const Ux = (l) => {
    let t = l.state.field(nl, false);
    if (t && t.panel) {
      let e = Lx(l);
      if (e && e != l.root.activeElement) {
        let n = vm(l.state, t.query.spec);
        n.valid && l.dispatch({
          effects: Mo.of(n)
        }), e.focus(), e.select();
      }
    } else l.dispatch({
      effects: [
        Qm.of(true),
        t ? Mo.of(vm(l.state, t.query.spec)) : St.appendConfig.of(ZD)
      ]
    });
    return true;
  }, Vx = (l) => {
    let t = l.state.field(nl, false);
    if (!t || !t.panel) return false;
    let e = So(l, Zm);
    return e && e.dom.contains(l.root.activeElement) && l.focus(), l.dispatch({
      effects: Qm.of(false)
    }), true;
  }, XD = [
    {
      key: "Mod-f",
      run: Ux,
      scope: "editor search-panel"
    },
    {
      key: "F3",
      run: lc,
      shift: sc,
      scope: "editor search-panel",
      preventDefault: true
    },
    {
      key: "Mod-g",
      run: lc,
      shift: sc,
      scope: "editor search-panel",
      preventDefault: true
    },
    {
      key: "Escape",
      run: Vx,
      scope: "editor search-panel"
    },
    {
      key: "Mod-Shift-l",
      run: YD
    },
    {
      key: "Mod-Alt-g",
      run: xD
    },
    {
      key: "Mod-d",
      run: RD,
      preventDefault: true
    }
  ];
  class KD {
    constructor(t) {
      this.view = t;
      let e = this.query = t.state.field(nl).query.spec;
      this.commit = this.commit.bind(this), this.searchField = Gt("input", {
        value: e.search,
        placeholder: oi(t, "Find"),
        "aria-label": oi(t, "Find"),
        class: "cm-textfield",
        name: "search",
        form: "",
        "main-field": "true",
        onchange: this.commit,
        onkeyup: this.commit
      }), this.replaceField = Gt("input", {
        value: e.replace,
        placeholder: oi(t, "Replace"),
        "aria-label": oi(t, "Replace"),
        class: "cm-textfield",
        name: "replace",
        form: "",
        onchange: this.commit,
        onkeyup: this.commit
      }), this.caseField = Gt("input", {
        type: "checkbox",
        name: "case",
        form: "",
        checked: e.caseSensitive,
        onchange: this.commit
      }), this.reField = Gt("input", {
        type: "checkbox",
        name: "re",
        form: "",
        checked: e.regexp,
        onchange: this.commit
      }), this.wordField = Gt("input", {
        type: "checkbox",
        name: "word",
        form: "",
        checked: e.wholeWord,
        onchange: this.commit
      });
      function n(r, o, u) {
        return Gt("button", {
          class: "cm-button",
          name: r,
          onclick: o,
          type: "button"
        }, u);
      }
      this.dom = Gt("div", {
        onkeydown: (r) => this.keydown(r),
        class: "cm-search"
      }, [
        this.searchField,
        n("next", () => lc(t), [
          oi(t, "next")
        ]),
        n("prev", () => sc(t), [
          oi(t, "previous")
        ]),
        n("select", () => jD(t), [
          oi(t, "all")
        ]),
        Gt("label", null, [
          this.caseField,
          oi(t, "match case")
        ]),
        Gt("label", null, [
          this.reField,
          oi(t, "regexp")
        ]),
        Gt("label", null, [
          this.wordField,
          oi(t, "by word")
        ]),
        ...t.state.readOnly ? [] : [
          Gt("br"),
          this.replaceField,
          n("replace", () => L1(t), [
            oi(t, "replace")
          ]),
          n("replaceAll", () => GD(t), [
            oi(t, "replace all")
          ])
        ],
        Gt("button", {
          name: "close",
          onclick: () => Vx(t),
          "aria-label": oi(t, "close"),
          type: "button"
        }, [
          "\xD7"
        ])
      ]);
    }
    commit() {
      let t = new zx({
        search: this.searchField.value,
        caseSensitive: this.caseField.checked,
        regexp: this.reField.checked,
        wholeWord: this.wordField.checked,
        replace: this.replaceField.value
      });
      t.eq(this.query) || (this.query = t, this.view.dispatch({
        effects: Mo.of(t)
      }));
    }
    keydown(t) {
      J_(this.view, t, "search-panel") ? t.preventDefault() : t.keyCode == 13 && t.target == this.searchField ? (t.preventDefault(), (t.shiftKey ? sc : lc)(this.view)) : t.keyCode == 13 && t.target == this.replaceField && (t.preventDefault(), L1(this.view));
    }
    update(t) {
      for (let e of t.transactions) for (let n of e.effects) n.is(Mo) && !n.value.eq(this.query) && this.setQuery(n.value);
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
  function oi(l, t) {
    return l.state.phrase(t);
  }
  const Cu = 30, Mu = /[\s\.,:;?!]/;
  function Wm(l, { from: t, to: e }) {
    let n = l.state.doc.lineAt(t), r = l.state.doc.lineAt(e).to, o = Math.max(n.from, t - Cu), u = Math.min(r, e + Cu), f = l.state.sliceDoc(o, u);
    if (o != n.from) {
      for (let h = 0; h < Cu; h++) if (!Mu.test(f[h + 1]) && Mu.test(f[h])) {
        f = f.slice(h);
        break;
      }
    }
    if (u != r) {
      for (let h = f.length - 1; h > f.length - Cu; h--) if (!Mu.test(f[h - 1]) && Mu.test(f[h])) {
        f = f.slice(0, h);
        break;
      }
    }
    return I.announce.of(`${l.state.phrase("current match")}. ${f} ${l.state.phrase("on line")} ${n.number}.`);
  }
  const QD = I.baseTheme({
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
  }), ZD = [
    nl,
    Gl.low(qD),
    QD
  ];
  class qx {
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
      let e = this.state.doc.lineAt(this.pos), n = Math.max(e.from, this.pos - 250), r = e.text.slice(n - e.from, this.pos - e.from), o = r.search(jx(t, false));
      return o < 0 ? null : {
        from: n + o,
        to: this.pos,
        text: r.slice(o)
      };
    }
    get aborted() {
      return this.abortListeners == null;
    }
    addEventListener(t, e, n) {
      t == "abort" && this.abortListeners && (this.abortListeners.push(e), n && n.onDocChange && (this.abortOnDocChange = true));
    }
  }
  function H1(l) {
    let t = Object.keys(l).join(""), e = /\w/.test(t);
    return e && (t = t.replace(/\w/g, "")), `[${e ? "\\w" : ""}${t.replace(/[^\w\s]/g, "\\$&")}]`;
  }
  function WD(l) {
    let t = /* @__PURE__ */ Object.create(null), e = /* @__PURE__ */ Object.create(null);
    for (let { label: r } of l) {
      t[r[0]] = true;
      for (let o = 1; o < r.length; o++) e[r[o]] = true;
    }
    let n = H1(t) + H1(e) + "*$";
    return [
      new RegExp("^" + n),
      new RegExp(n)
    ];
  }
  function JD(l) {
    let t = l.map((r) => typeof r == "string" ? {
      label: r
    } : r), [e, n] = t.every((r) => /^\w+$/.test(r.label)) ? [
      /\w*$/,
      /\w+$/
    ] : WD(t);
    return (r) => {
      let o = r.matchBefore(n);
      return o || r.explicit ? {
        from: o ? o.from : r.pos,
        options: t,
        validFor: e
      } : null;
    };
  }
  class U1 {
    constructor(t, e, n, r) {
      this.completion = t, this.source = e, this.match = n, this.score = r;
    }
  }
  function Hl(l) {
    return l.selection.main.from;
  }
  function jx(l, t) {
    var e;
    let { source: n } = l, r = t && n[0] != "^", o = n[n.length - 1] != "$";
    return !r && !o ? l : new RegExp(`${r ? "^" : ""}(?:${n})${o ? "$" : ""}`, (e = l.flags) !== null && e !== void 0 ? e : l.ignoreCase ? "i" : "");
  }
  const Yx = Pi.define();
  function FD(l, t, e, n) {
    let { main: r } = l.selection, o = e - r.from, u = n - r.from;
    return {
      ...l.changeByRange((f) => {
        if (f != r && e != n && l.sliceDoc(f.from + o, f.from + u) != l.sliceDoc(e, n)) return {
          range: f
        };
        let h = l.toText(t);
        return {
          changes: {
            from: f.from + o,
            to: n == r.from ? f.to : f.from + u,
            insert: h
          },
          range: K.cursor(f.from + o + h.length)
        };
      }),
      scrollIntoView: true,
      userEvent: "input.complete"
    };
  }
  const V1 = /* @__PURE__ */ new WeakMap();
  function ID(l) {
    if (!Array.isArray(l)) return l;
    let t = V1.get(l);
    return t || V1.set(l, t = JD(l)), t;
  }
  const rc = St.define(), _o = St.define();
  class PD {
    constructor(t) {
      this.pattern = t, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
      for (let e = 0; e < t.length; ) {
        let n = Ze(t, e), r = Xi(n);
        this.chars.push(n);
        let o = t.slice(e, e + r), u = o.toUpperCase();
        this.folded.push(Ze(u == o ? o.toLowerCase() : u, 0)), e += r;
      }
      this.astral = t.length != this.chars.length;
    }
    ret(t, e) {
      return this.score = t, this.matched = e, this;
    }
    match(t) {
      if (this.pattern.length == 0) return this.ret(-100, []);
      if (t.length < this.pattern.length) return null;
      let { chars: e, folded: n, any: r, precise: o, byWord: u } = this;
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
      let p = 0, y = 0, v = false, S = 0, w = -1, C = -1, _ = /[a-z]/.test(t), O = true;
      for (let j = 0, L = Math.min(t.length, 200), Q = 0; j < L && y < h; ) {
        let N = Ze(t, j);
        f < 0 && (p < h && N == e[p] && (o[p++] = j), S < h && (N == e[S] || N == n[S] ? (S == 0 && (w = j), C = j + 1, S++) : S = 0));
        let G, V = N < 255 ? N >= 48 && N <= 57 || N >= 97 && N <= 122 ? 2 : N >= 65 && N <= 90 ? 1 : 0 : (G = wm(N)) != G.toLowerCase() ? 1 : G != G.toUpperCase() ? 2 : 0;
        (!j || V == 1 && _ || Q == 0 && V != 0) && (e[y] == N || n[y] == N && (v = true) ? u[y++] = j : u.length && (O = false)), Q = V, j += Xi(N);
      }
      return y == h && u[0] == 0 && O ? this.result(-100 + (v ? -200 : 0), u, t) : S == h && w == 0 ? this.ret(-200 - t.length + (C == t.length ? 0 : -100), [
        0,
        C
      ]) : f > -1 ? this.ret(-700 - t.length, [
        f,
        f + this.pattern.length
      ]) : S == h ? this.ret(-900 - t.length, [
        w,
        C
      ]) : y == h ? this.result(-100 + (v ? -200 : 0) + -700 + (O ? 0 : -1100), u, t) : e.length == 2 ? null : this.result((r[0] ? -700 : 0) + -200 + -1100, r, t);
    }
    result(t, e, n) {
      let r = [], o = 0;
      for (let u of e) {
        let f = u + (this.astral ? Xi(Ze(n, u)) : 1);
        o && r[o - 1] == u ? r[o - 1] = f : (r[o++] = u, r[o++] = f);
      }
      return this.ret(t - n.length, r);
    }
  }
  class $D {
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
        positionInfo: tE,
        filterStrict: false,
        compareCompletions: (t, e) => (t.sortText || t.label).localeCompare(e.sortText || e.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (t, e) => t && e,
        closeOnBlur: (t, e) => t && e,
        icons: (t, e) => t && e,
        tooltipClass: (t, e) => (n) => q1(t(n), e(n)),
        optionClass: (t, e) => (n) => q1(t(n), e(n)),
        addToOptions: (t, e) => t.concat(e),
        filterStrict: (t, e) => t || e
      });
    }
  });
  function q1(l, t) {
    return l ? t ? l + " " + t : l : t;
  }
  function tE(l, t, e, n, r, o) {
    let u = l.textDirection == Wt.RTL, f = u, h = false, g = "top", p, y, v = t.left - r.left, S = r.right - t.right, w = n.right - n.left, C = n.bottom - n.top;
    if (f && v < Math.min(w, S) ? f = false : !f && S < Math.min(w, v) && (f = true), w <= (f ? v : S)) p = Math.max(r.top, Math.min(e.top, r.bottom - C)) - t.top, y = Math.min(400, f ? v : S);
    else {
      h = true, y = Math.min(400, (u ? t.right : r.right - t.left) - 30);
      let j = r.bottom - t.bottom;
      j >= C || j > t.top ? p = e.bottom - t.top : (g = "bottom", p = t.bottom - e.top);
    }
    let _ = (t.bottom - t.top) / o.offsetHeight, O = (t.right - t.left) / o.offsetWidth;
    return {
      style: `${g}: ${p / _}px; max-width: ${y / O}px`,
      class: "cm-completionInfo-" + (h ? u ? "left-narrow" : "right-narrow" : f ? "left" : "right")
    };
  }
  function eE(l) {
    let t = l.addToOptions.slice();
    return l.icons && t.push({
      render(e) {
        let n = document.createElement("div");
        return n.classList.add("cm-completionIcon"), e.type && n.classList.add(...e.type.split(/\s+/g).map((r) => "cm-completionIcon-" + r)), n.setAttribute("aria-hidden", "true"), n;
      },
      position: 20
    }), t.push({
      render(e, n, r, o) {
        let u = document.createElement("span");
        u.className = "cm-completionLabel";
        let f = e.displayLabel || e.label, h = 0;
        for (let g = 0; g < o.length; ) {
          let p = o[g++], y = o[g++];
          p > h && u.appendChild(document.createTextNode(f.slice(h, p)));
          let v = u.appendChild(document.createElement("span"));
          v.appendChild(document.createTextNode(f.slice(p, y))), v.className = "cm-completionMatchedText", h = y;
        }
        return h < f.length && u.appendChild(document.createTextNode(f.slice(h))), u;
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
  function bd(l, t, e) {
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
  class iE {
    constructor(t, e, n) {
      this.view = t, this.stateField = e, this.applyCompletion = n, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
        read: () => this.measureInfo(),
        write: (h) => this.placeInfo(h),
        key: this
      }, this.space = null, this.currentClass = "";
      let r = t.state.field(e), { options: o, selected: u } = r.open, f = t.state.facet(ye);
      this.optionContent = eE(f), this.optionClass = f.optionClass, this.tooltipClass = f.tooltipClass, this.range = bd(o.length, u, f.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(t.state), this.dom.addEventListener("mousedown", (h) => {
        let { options: g } = t.state.field(e).open;
        for (let p = h.target, y; p && p != this.dom; p = p.parentNode) if (p.nodeName == "LI" && (y = /-(\d+)$/.exec(p.id)) && +y[1] < g.length) {
          this.applyCompletion(t, g[+y[1]]), h.preventDefault();
          return;
        }
      }), this.dom.addEventListener("focusout", (h) => {
        let g = t.state.field(this.stateField, false);
        g && g.tooltip && t.state.facet(ye).closeOnBlur && h.relatedTarget != t.contentDOM && t.dispatch({
          effects: _o.of(null)
        });
      }), this.showOptions(o, r.id);
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
        let { options: o, selected: u, disabled: f } = n.open;
        (!r.open || r.open.options != o) && (this.range = bd(o.length, u, t.state.facet(ye).maxRenderedOptions), this.showOptions(o, n.id)), this.updateSel(), f != ((e = r.open) === null || e === void 0 ? void 0 : e.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!f);
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
      (e.selected > -1 && e.selected < this.range.from || e.selected >= this.range.to) && (this.range = bd(e.options.length, e.selected, this.view.state.facet(ye).maxRenderedOptions), this.showOptions(e.options, t.id));
      let n = this.updateSelectedOption(e.selected);
      if (n) {
        this.destroyInfo();
        let { completion: r } = e.options[e.selected], { info: o } = r;
        if (!o) return;
        let u = typeof o == "string" ? document.createTextNode(o) : o(r);
        if (!u) return;
        "then" in u ? u.then((f) => {
          f && this.view.state.field(this.stateField, false) == t && this.addInfoPane(f, r);
        }).catch((f) => Je(this.view.state, f, "completion info")) : (this.addInfoPane(u, r), n.setAttribute("aria-describedby", this.info.id));
      }
    }
    addInfoPane(t, e) {
      this.destroyInfo();
      let n = this.info = document.createElement("div");
      if (n.className = "cm-tooltip cm-completionInfo", n.id = "cm-completionInfo-" + Math.floor(Math.random() * 65535).toString(16), t.nodeType != null) n.appendChild(t), this.infoDestroy = null;
      else {
        let { dom: r, destroy: o } = t;
        n.appendChild(r), this.infoDestroy = o || null;
      }
      this.dom.appendChild(n), this.view.requestMeasure(this.placeInfoReq);
    }
    updateSelectedOption(t) {
      let e = null;
      for (let n = this.list.firstChild, r = this.range.from; n; n = n.nextSibling, r++) n.nodeName != "LI" || !n.id ? r-- : r == t ? n.hasAttribute("aria-selected") || (n.setAttribute("aria-selected", "true"), e = n) : n.hasAttribute("aria-selected") && (n.removeAttribute("aria-selected"), n.removeAttribute("aria-describedby"));
      return e && lE(this.list, e), e;
    }
    measureInfo() {
      let t = this.dom.querySelector("[aria-selected]");
      if (!t || !this.info) return null;
      let e = this.dom.getBoundingClientRect(), n = this.info.getBoundingClientRect(), r = t.getBoundingClientRect(), o = this.space;
      if (!o) {
        let u = this.dom.ownerDocument.documentElement;
        o = {
          left: 0,
          top: 0,
          right: u.clientWidth,
          bottom: u.clientHeight
        };
      }
      return r.top > Math.min(o.bottom, e.bottom) - 10 || r.bottom < Math.max(o.top, e.top) + 10 ? null : this.view.state.facet(ye).positionInfo(this.view, e, r, n, o, this.dom);
    }
    placeInfo(t) {
      this.info && (t ? (t.style && (this.info.style.cssText = t.style), this.info.className = "cm-tooltip cm-completionInfo " + (t.class || "")) : this.info.style.cssText = "top: -1e6px");
    }
    createListBox(t, e, n) {
      const r = document.createElement("ul");
      r.id = e, r.setAttribute("role", "listbox"), r.setAttribute("aria-expanded", "true"), r.setAttribute("aria-label", this.view.state.phrase("Completions")), r.addEventListener("mousedown", (u) => {
        u.target == r && u.preventDefault();
      });
      let o = null;
      for (let u = n.from; u < n.to; u++) {
        let { completion: f, match: h } = t[u], { section: g } = f;
        if (g) {
          let v = typeof g == "string" ? g : g.name;
          if (v != o && (u > n.from || n.from == 0)) if (o = v, typeof g != "string" && g.header) r.appendChild(g.header(g));
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
  function nE(l, t) {
    return (e) => new iE(e, l, t);
  }
  function lE(l, t) {
    let e = l.getBoundingClientRect(), n = t.getBoundingClientRect(), r = e.height / l.offsetHeight;
    n.top < e.top ? l.scrollTop -= (e.top - n.top) / r : n.bottom > e.bottom && (l.scrollTop += (n.bottom - e.bottom) / r);
  }
  function j1(l) {
    return (l.boost || 0) * 100 + (l.apply ? 10 : 0) + (l.info ? 5 : 0) + (l.type ? 1 : 0);
  }
  function sE(l, t) {
    let e = [], n = null, r = null, o = (p) => {
      e.push(p);
      let { section: y } = p.completion;
      if (y) {
        n || (n = []);
        let v = typeof y == "string" ? y : y.name;
        n.some((S) => S.name == v) || n.push(typeof y == "string" ? {
          name: v
        } : y);
      }
    }, u = t.facet(ye);
    for (let p of l) if (p.hasResult()) {
      let y = p.result.getMatch;
      if (p.result.filter === false) for (let v of p.result.options) o(new U1(v, p.source, y ? y(v) : [], 1e9 - e.length));
      else {
        let v = t.sliceDoc(p.from, p.to), S, w = u.filterStrict ? new $D(v) : new PD(v);
        for (let C of p.result.options) if (S = w.match(C.label)) {
          let _ = C.displayLabel ? y ? y(C, S.matched) : [] : S.matched, O = S.score + (C.boost || 0);
          if (o(new U1(C, p.source, _, O)), typeof C.section == "object" && C.section.rank === "dynamic") {
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
      !h || h.label != y.label || h.detail != y.detail || h.type != null && y.type != null && h.type != y.type || h.apply != y.apply || h.boost != y.boost ? f.push(p) : j1(p.completion) > j1(h) && (f[f.length - 1] = p), h = p.completion;
    }
    return f;
  }
  class Rs {
    constructor(t, e, n, r, o, u) {
      this.options = t, this.attrs = e, this.tooltip = n, this.timestamp = r, this.selected = o, this.disabled = u;
    }
    setSelected(t, e) {
      return t == this.selected || t >= this.options.length ? this : new Rs(this.options, Y1(e, t), this.tooltip, this.timestamp, t, this.disabled);
    }
    static build(t, e, n, r, o, u) {
      if (r && !u && t.some((g) => g.isPending)) return r.setDisabled();
      let f = sE(t, e);
      if (!f.length) return r && t.some((g) => g.isPending) ? r.setDisabled() : null;
      let h = e.facet(ye).selectOnOpen ? 0 : -1;
      if (r && r.selected != h && r.selected != -1) {
        let g = r.options[r.selected].completion;
        for (let p = 0; p < f.length; p++) if (f[p].completion == g) {
          h = p;
          break;
        }
      }
      return new Rs(f, Y1(n, h), {
        pos: t.reduce((g, p) => p.hasResult() ? Math.min(g, p.from) : g, 1e8),
        create: fE,
        above: o.aboveCursor
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
  class oc {
    constructor(t, e, n) {
      this.active = t, this.id = e, this.open = n;
    }
    static start() {
      return new oc(uE, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
    }
    update(t) {
      let { state: e } = t, n = e.facet(ye), o = (n.override || e.languageDataAt("autocomplete", Hl(e)).map(ID)).map((h) => (this.active.find((p) => p.source == h) || new wi(h, this.active.some((p) => p.state != 0) ? 1 : 0)).update(t, n));
      o.length == this.active.length && o.every((h, g) => h == this.active[g]) && (o = this.active);
      let u = this.open, f = t.effects.some((h) => h.is(Jm));
      u && t.docChanged && (u = u.map(t.changes)), t.selection || o.some((h) => h.hasResult() && t.changes.touchesRange(h.from, h.to)) || !rE(o, this.active) || f ? u = Rs.build(o, e, this.id, u, n, f) : u && u.disabled && !o.some((h) => h.isPending) && (u = null), !u && o.every((h) => !h.isPending) && o.some((h) => h.hasResult()) && (o = o.map((h) => h.hasResult() ? new wi(h.source, 0) : h));
      for (let h of t.effects) h.is(Xx) && (u = u && u.setSelected(h.value, this.id));
      return o == this.active && u == this.open ? this : new oc(o, this.id, u);
    }
    get tooltip() {
      return this.open ? this.open.tooltip : null;
    }
    get attrs() {
      return this.open ? this.open.attrs : this.active.length ? oE : aE;
    }
  }
  function rE(l, t) {
    if (l == t) return true;
    for (let e = 0, n = 0; ; ) {
      for (; e < l.length && !l[e].hasResult(); ) e++;
      for (; n < t.length && !t[n].hasResult(); ) n++;
      let r = e == l.length, o = n == t.length;
      if (r || o) return r == o;
      if (l[e++].result != t[n++].result) return false;
    }
  }
  const oE = {
    "aria-autocomplete": "list"
  }, aE = {};
  function Y1(l, t) {
    let e = {
      "aria-autocomplete": "list",
      "aria-haspopup": "listbox",
      "aria-controls": l
    };
    return t > -1 && (e["aria-activedescendant"] = l + "-" + t), e;
  }
  const uE = [];
  function Gx(l, t) {
    if (l.isUserEvent("input.complete")) {
      let n = l.annotation(Yx);
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
      let n = Gx(t, e), r = this;
      (n & 8 || n & 16 && this.touches(t)) && (r = new wi(r.source, 0)), n & 4 && r.state == 0 && (r = new wi(this.source, 1)), r = r.updateFor(t, n);
      for (let o of t.effects) if (o.is(rc)) r = new wi(r.source, 1, o.value);
      else if (o.is(_o)) r = new wi(r.source, 0);
      else if (o.is(Jm)) for (let u of o.value) u.source == r.source && (r = u);
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
    constructor(t, e, n, r, o, u) {
      super(t, 3, e), this.limit = n, this.result = r, this.from = o, this.to = u;
    }
    hasResult() {
      return true;
    }
    updateFor(t, e) {
      var n;
      if (!(e & 3)) return this.map(t.changes);
      let r = this.result;
      r.map && !t.changes.empty && (r = r.map(r, t.changes));
      let o = t.changes.mapPos(this.from), u = t.changes.mapPos(this.to, 1), f = Hl(t.state);
      if (f > u || !r || e & 2 && (Hl(t.startState) == this.from || f < this.limit)) return new wi(this.source, e & 4 ? 1 : 0);
      let h = t.changes.mapPos(this.limit);
      return cE(r.validFor, t.state, o, u) ? new Vs(this.source, this.explicit, h, r, o, u) : r.update && (r = r.update(r, o, u, new qx(t.state, f, false))) ? new Vs(this.source, this.explicit, h, r, r.from, (n = r.to) !== null && n !== void 0 ? n : Hl(t.state)) : new wi(this.source, 1, this.explicit);
    }
    map(t) {
      return t.empty ? this : (this.result.map ? this.result.map(this.result, t) : this.result) ? new Vs(this.source, this.explicit, t.mapPos(this.limit), this.result, t.mapPos(this.from), t.mapPos(this.to, 1)) : new wi(this.source, 0);
    }
    touches(t) {
      return t.changes.touchesRange(this.from, this.to);
    }
  }
  function cE(l, t, e, n) {
    if (!l) return false;
    let r = t.sliceDoc(e, n);
    return typeof l == "function" ? l(r, e, n, t) : jx(l, true).test(r);
  }
  const Jm = St.define({
    map(l, t) {
      return l.map((e) => e.map(t));
    }
  }), Xx = St.define(), We = Te.define({
    create() {
      return oc.start();
    },
    update(l, t) {
      return l.update(t);
    },
    provide: (l) => [
      Lm.from(l, (t) => t.tooltip),
      I.contentAttributes.from(l, (t) => t.attrs)
    ]
  });
  function Fm(l, t) {
    const e = t.completion.apply || t.completion.label;
    let n = l.state.field(We).active.find((r) => r.source == t.source);
    return n instanceof Vs ? (typeof e == "string" ? l.dispatch({
      ...FD(l.state, e, n.from, n.to),
      annotations: Yx.of(t.completion)
    }) : e(l, t.completion, n.from, n.to), true) : false;
  }
  const fE = nE(We, Fm);
  function _u(l, t = "option") {
    return (e) => {
      let n = e.state.field(We, false);
      if (!n || !n.open || n.open.disabled || Date.now() - n.open.timestamp < e.state.facet(ye).interactionDelay) return false;
      let r = 1, o;
      t == "page" && (o = OS(e, n.open.tooltip)) && (r = Math.max(2, Math.floor(o.dom.offsetHeight / o.dom.querySelector("li").offsetHeight) - 1));
      let { length: u } = n.open.options, f = n.open.selected > -1 ? n.open.selected + r * (l ? 1 : -1) : l ? 0 : u - 1;
      return f < 0 ? f = t == "page" ? 0 : u - 1 : f >= u && (f = t == "page" ? u - 1 : 0), e.dispatch({
        effects: Xx.of(f)
      }), true;
    };
  }
  const hE = (l) => {
    let t = l.state.field(We, false);
    return l.state.readOnly || !t || !t.open || t.open.selected < 0 || t.open.disabled || Date.now() - t.open.timestamp < l.state.facet(ye).interactionDelay ? false : Fm(l, t.open.options[t.open.selected]);
  }, vd = (l) => l.state.field(We, false) ? (l.dispatch({
    effects: rc.of(true)
  }), true) : false, dE = (l) => {
    let t = l.state.field(We, false);
    return !t || !t.active.some((e) => e.state != 0) ? false : (l.dispatch({
      effects: _o.of(null)
    }), true);
  };
  class mE {
    constructor(t, e) {
      this.active = t, this.context = e, this.time = Date.now(), this.updates = [], this.done = void 0;
    }
  }
  const gE = 50, pE = 1e3, yE = $t.fromClass(class {
    constructor(l) {
      this.view = l, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = false, this.composing = 0;
      for (let t of l.state.field(We).active) t.isPending && this.startQuery(t);
    }
    update(l) {
      let t = l.state.field(We), e = l.state.facet(ye);
      if (!l.selectionSet && !l.docChanged && l.startState.field(We) == t) return;
      let n = l.transactions.some((o) => {
        let u = Gx(o, e);
        return u & 8 || (o.selection || o.docChanged) && !(u & 3);
      });
      for (let o = 0; o < this.running.length; o++) {
        let u = this.running[o];
        if (n || u.context.abortOnDocChange && l.docChanged || u.updates.length + l.transactions.length > gE && Date.now() - u.time > pE) {
          for (let f of u.context.abortListeners) try {
            f();
          } catch (h) {
            Je(this.view.state, h);
          }
          u.context.abortListeners = null, this.running.splice(o--, 1);
        } else u.updates.push(...l.transactions);
      }
      this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), l.transactions.some((o) => o.effects.some((u) => u.is(rc))) && (this.pendingStart = true);
      let r = this.pendingStart ? 50 : e.activateOnTypingDelay;
      if (this.debounceUpdate = t.active.some((o) => o.isPending && !this.running.some((u) => u.active.source == o.source)) ? setTimeout(() => this.startUpdate(), r) : -1, this.composing != 0) for (let o of l.transactions) o.isUserEvent("input.type") ? this.composing = 2 : this.composing == 2 && o.selection && (this.composing = 3);
    }
    startUpdate() {
      this.debounceUpdate = -1, this.pendingStart = false;
      let { state: l } = this.view, t = l.field(We);
      for (let e of t.active) e.isPending && !this.running.some((n) => n.active.source == e.source) && this.startQuery(e);
      this.running.length && t.open && t.open.disabled && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(ye).updateSyncTime));
    }
    startQuery(l) {
      let { state: t } = this.view, e = Hl(t), n = new qx(t, e, l.explicit, this.view), r = new mE(l, n);
      this.running.push(r), Promise.resolve(l.source(n)).then((o) => {
        r.context.aborted || (r.done = o || null, this.scheduleAccept());
      }, (o) => {
        this.view.dispatch({
          effects: _o.of(null)
        }), Je(this.view.state, o);
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
        let o = this.running[r];
        if (o.done === void 0) continue;
        if (this.running.splice(r--, 1), o.done) {
          let f = Hl(o.updates.length ? o.updates[0].startState : this.view.state), h = Math.min(f, o.done.from + (o.active.explicit ? 0 : 1)), g = new Vs(o.active.source, o.active.explicit, h, o.done, o.done.from, (l = o.done.to) !== null && l !== void 0 ? l : f);
          for (let p of o.updates) g = g.update(p, e);
          if (g.hasResult()) {
            t.push(g);
            continue;
          }
        }
        let u = n.active.find((f) => f.source == o.active.source);
        if (u && u.isPending) if (o.done == null) {
          let f = new wi(o.active.source, 0);
          for (let h of o.updates) f = f.update(h, e);
          f.isPending || t.push(f);
        } else this.startQuery(u);
      }
      (t.length || n.open && n.open.disabled) && this.view.dispatch({
        effects: Jm.of(t)
      });
    }
  }, {
    eventHandlers: {
      blur(l) {
        let t = this.view.state.field(We, false);
        if (t && t.tooltip && this.view.state.facet(ye).closeOnBlur) {
          let e = t.open && OS(this.view, t.open.tooltip);
          (!e || !e.dom.contains(l.relatedTarget)) && setTimeout(() => this.view.dispatch({
            effects: _o.of(null)
          }), 10);
        }
      },
      compositionstart() {
        this.composing = 1;
      },
      compositionend() {
        this.composing == 3 && setTimeout(() => this.view.dispatch({
          effects: rc.of(false)
        }), 20), this.composing = 0;
      }
    }
  }), bE = typeof navigator == "object" && /Win/.test(navigator.platform), vE = Gl.highest(I.domEventHandlers({
    keydown(l, t) {
      let e = t.state.field(We, false);
      if (!e || !e.open || e.open.disabled || e.open.selected < 0 || l.key.length > 1 || l.ctrlKey && !(bE && l.altKey) || l.metaKey) return false;
      let n = e.open.options[e.open.selected], r = e.active.find((u) => u.source == n.source), o = n.completion.commitCharacters || r.result.commitCharacters;
      return o && o.indexOf(l.key) > -1 && Fm(t, n), false;
    }
  })), SE = I.baseTheme({
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
  }), To = {
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
  }), Im = new class extends Ul {
  }();
  Im.startSide = 1;
  Im.endSide = -1;
  const Kx = Te.define({
    create() {
      return Et.empty;
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
          Im.range(e.value, e.value + 1)
        ]
      }));
      return l;
    }
  });
  function xE() {
    return [
      AE,
      Kx
    ];
  }
  const Sd = "()[]{}<>\xAB\xBB\xBB\xAB\uFF3B\uFF3D\uFF5B\uFF5D";
  function Qx(l) {
    for (let t = 0; t < Sd.length; t += 2) if (Sd.charCodeAt(t) == l) return Sd.charAt(t + 1);
    return wm(l < 128 ? l : l + 1);
  }
  function Zx(l, t) {
    return l.languageDataAt("closeBrackets", t)[0] || To;
  }
  const wE = typeof navigator == "object" && /Android\b/.test(navigator.userAgent), AE = I.inputHandler.of((l, t, e, n) => {
    if ((wE ? l.composing : l.compositionStarted) || l.state.readOnly) return false;
    let r = l.state.selection.main;
    if (n.length > 2 || n.length == 2 && Xi(Ze(n, 0)) == 1 || t != r.from || e != r.to) return false;
    let o = _E(l.state, n);
    return o ? (l.dispatch(o), true) : false;
  }), CE = ({ state: l, dispatch: t }) => {
    if (l.readOnly) return false;
    let n = Zx(l, l.selection.main.head).brackets || To.brackets, r = null, o = l.changeByRange((u) => {
      if (u.empty) {
        let f = TE(l.doc, u.head);
        for (let h of n) if (h == f && xc(l.doc, u.head) == Qx(Ze(h, 0))) return {
          changes: {
            from: u.head - h.length,
            to: u.head + h.length
          },
          range: K.cursor(u.head - h.length)
        };
      }
      return {
        range: r = u
      };
    });
    return r || t(l.update(o, {
      scrollIntoView: true,
      userEvent: "delete.backward"
    })), !r;
  }, ME = [
    {
      key: "Backspace",
      run: CE
    }
  ];
  function _E(l, t) {
    let e = Zx(l, l.selection.main.head), n = e.brackets || To.brackets;
    for (let r of n) {
      let o = Qx(Ze(r, 0));
      if (t == r) return o == r ? DE(l, r, n.indexOf(r + r + r) > -1, e) : kE(l, r, o, e.before || To.before);
      if (t == o && Wx(l, l.selection.main.from)) return OE(l, r, o);
    }
    return null;
  }
  function Wx(l, t) {
    let e = false;
    return l.field(Kx).between(0, l.doc.length, (n) => {
      n == t && (e = true);
    }), e;
  }
  function xc(l, t) {
    let e = l.sliceString(t, t + 2);
    return e.slice(0, Xi(Ze(e, 0)));
  }
  function TE(l, t) {
    let e = l.sliceString(t - 2, t);
    return Xi(Ze(e, 0)) == e.length ? e : e.slice(1);
  }
  function kE(l, t, e, n) {
    let r = null, o = l.changeByRange((u) => {
      if (!u.empty) return {
        changes: [
          {
            insert: t,
            from: u.from
          },
          {
            insert: e,
            from: u.to
          }
        ],
        effects: Nl.of(u.to + t.length),
        range: K.range(u.anchor + t.length, u.head + t.length)
      };
      let f = xc(l.doc, u.head);
      return !f || /\s/.test(f) || n.indexOf(f) > -1 ? {
        changes: {
          insert: t + e,
          from: u.head
        },
        effects: Nl.of(u.head + t.length),
        range: K.cursor(u.head + t.length)
      } : {
        range: r = u
      };
    });
    return r ? null : l.update(o, {
      scrollIntoView: true,
      userEvent: "input.type"
    });
  }
  function OE(l, t, e) {
    let n = null, r = l.changeByRange((o) => o.empty && xc(l.doc, o.head) == e ? {
      changes: {
        from: o.head,
        to: o.head + e.length,
        insert: e
      },
      range: K.cursor(o.head + e.length)
    } : n = {
      range: o
    });
    return n ? null : l.update(r, {
      scrollIntoView: true,
      userEvent: "input.type"
    });
  }
  function DE(l, t, e, n) {
    let r = n.stringPrefixes || To.stringPrefixes, o = null, u = l.changeByRange((f) => {
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
      let h = f.head, g = xc(l.doc, h), p;
      if (g == t) {
        if (G1(l, h)) return {
          changes: {
            insert: t + t,
            from: h
          },
          effects: Nl.of(h + t.length),
          range: K.cursor(h + t.length)
        };
        if (Wx(l, h)) {
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
        if (e && l.sliceDoc(h - 2 * t.length, h) == t + t && (p = X1(l, h - 2 * t.length, r)) > -1 && G1(l, p)) return {
          changes: {
            insert: t + t + t + t,
            from: h
          },
          effects: Nl.of(h + t.length),
          range: K.cursor(h + t.length)
        };
        if (l.charCategorizer(h)(g) != Ft.Word && X1(l, h, r) > -1 && !EE(l, h, t, r)) return {
          changes: {
            insert: t + t,
            from: h
          },
          effects: Nl.of(h + t.length),
          range: K.cursor(h + t.length)
        };
      }
      return {
        range: o = f
      };
    });
    return o ? null : l.update(u, {
      scrollIntoView: true,
      userEvent: "input.type"
    });
  }
  function G1(l, t) {
    let e = Be(l).resolveInner(t + 1);
    return e.parent && e.from == t;
  }
  function EE(l, t, e, n) {
    let r = Be(l).resolveInner(t, -1), o = n.reduce((u, f) => Math.max(u, f.length), 0);
    for (let u = 0; u < 5; u++) {
      let f = l.sliceDoc(r.from, Math.min(r.to, r.from + e.length + o)), h = f.indexOf(e);
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
  function X1(l, t, e) {
    let n = l.charCategorizer(t);
    if (n(l.sliceDoc(t - 1, t)) != Ft.Word) return t;
    for (let r of e) {
      let o = t - r.length;
      if (l.sliceDoc(o, t) == r && n(l.sliceDoc(o - 1, o)) != Ft.Word) return o;
    }
    return -1;
  }
  function BE(l = {}) {
    return [
      vE,
      We,
      ye.of(l),
      yE,
      RE,
      SE
    ];
  }
  const Jx = [
    {
      key: "Ctrl-Space",
      run: vd
    },
    {
      mac: "Alt-`",
      run: vd
    },
    {
      mac: "Alt-i",
      run: vd
    },
    {
      key: "Escape",
      run: dE
    },
    {
      key: "ArrowDown",
      run: _u(true)
    },
    {
      key: "ArrowUp",
      run: _u(false)
    },
    {
      key: "PageDown",
      run: _u(true, "page")
    },
    {
      key: "PageUp",
      run: _u(false, "page")
    },
    {
      key: "Enter",
      run: hE
    }
  ], RE = Gl.highest(hc.computeN([
    ye
  ], (l) => l.facet(ye).defaultKeymap ? [
    Jx
  ] : []));
  class K1 {
    constructor(t, e, n) {
      this.from = t, this.to = e, this.diagnostic = n;
    }
  }
  class Rl {
    constructor(t, e, n) {
      this.diagnostics = t, this.panel = e, this.selected = n;
    }
    static init(t, e, n) {
      let r = n.facet(ko).markerFilter;
      r && (t = r(t, n));
      let o = t.slice().sort((S, w) => S.from - w.from || S.to - w.to), u = new wn(), f = [], h = 0, g = n.doc.iter(), p = 0, y = n.doc.length;
      for (let S = 0; ; ) {
        let w = S == o.length ? null : o[S];
        if (!w && !f.length) break;
        let C, _;
        if (f.length) C = h, _ = f.reduce((L, Q) => Math.min(L, Q.to), w && w.from > C ? w.from : 1e8);
        else {
          if (C = w.from, C > y) break;
          _ = w.to, f.push(w), S++;
        }
        for (; S < o.length; ) {
          let L = o[S];
          if (L.from == C && (L.to > L.from || L.to == C)) f.push(L), S++, _ = Math.min(L.to, _);
          else {
            _ = Math.min(L.from, _);
            break;
          }
        }
        _ = Math.min(_, y);
        let O = false;
        if (f.some((L) => L.from == C && (L.to == _ || _ == y)) && (O = C == _, !O && _ - C < 10)) {
          let L = C - (p + g.value.length);
          L > 0 && (g.next(L), p = C);
          for (let Q = C; ; ) {
            if (Q >= _) {
              O = true;
              break;
            }
            if (!g.lineBreak && p + g.value.length > Q) break;
            Q = p + g.value.length, p += g.value.length, g.next();
          }
        }
        let j = QE(f);
        if (O) u.add(C, C, ut.widget({
          widget: new YE(j),
          diagnostics: f.slice()
        }));
        else {
          let L = f.reduce((Q, N) => N.markClass ? Q + " " + N.markClass : Q, "");
          u.add(C, _, ut.mark({
            class: "cm-lintRange cm-lintRange-" + j + L,
            diagnostics: f.slice(),
            inclusiveEnd: f.some((Q) => Q.to > _)
          }));
        }
        if (h = _, h == y) break;
        for (let L = 0; L < f.length; L++) f[L].to <= h && f.splice(L--, 1);
      }
      let v = u.finish();
      return new Rl(v, e, Fs(v));
    }
  }
  function Fs(l, t = null, e = 0) {
    let n = null;
    return l.between(e, 1e9, (r, o, { spec: u }) => {
      if (!(t && u.diagnostics.indexOf(t) < 0)) if (!n) n = new K1(r, o, t || u.diagnostics[0]);
      else {
        if (u.diagnostics.indexOf(n.diagnostic) < 0) return false;
        n = new K1(n.from, o, n.diagnostic);
      }
    }), n;
  }
  function zE(l, t) {
    let e = t.pos, n = t.end || e, r = l.state.facet(ko).hideOn(l, e, n);
    if (r != null) return r;
    let o = l.startState.doc.lineAt(t.pos);
    return !!(l.effects.some((u) => u.is(Fx)) || l.changes.touchesRange(o.from, Math.max(o.to, n)));
  }
  function NE(l, t) {
    return l.field(ui, false) ? t : t.concat(St.appendConfig.of(ZE));
  }
  const Fx = St.define(), Pm = St.define(), Ix = St.define(), ui = Te.define({
    create() {
      return new Rl(ut.none, null, null);
    },
    update(l, t) {
      if (t.docChanged && l.diagnostics.size) {
        let e = l.diagnostics.map(t.changes), n = null, r = l.panel;
        if (l.selected) {
          let o = t.changes.mapPos(l.selected.from, 1);
          n = Fs(e, l.selected.diagnostic, o) || Fs(e, null, o);
        }
        !e.size && r && t.state.facet(ko).autoPanel && (r = null), l = new Rl(e, r, n);
      }
      for (let e of t.effects) if (e.is(Fx)) {
        let n = t.state.facet(ko).autoPanel ? e.value.length ? Oo.open : null : l.panel;
        l = Rl.init(e.value, n, t.state);
      } else e.is(Pm) ? l = new Rl(l.diagnostics, e.value ? Oo.open : null, l.selected) : e.is(Ix) && (l = new Rl(l.diagnostics, l.panel, e.value));
      return l;
    },
    provide: (l) => [
      xo.from(l, (t) => t.panel),
      I.decorations.from(l, (t) => t.diagnostics)
    ]
  }), LE = ut.mark({
    class: "cm-lintRange cm-lintRange-active"
  });
  function HE(l, t, e) {
    let { diagnostics: n } = l.state.field(ui), r, o = -1, u = -1;
    n.between(t - (e < 0 ? 1 : 0), t + (e > 0 ? 1 : 0), (h, g, { spec: p }) => {
      if (t >= h && t <= g && (h == g || (t > h || e > 0) && (t < g || e < 0))) return r = p.diagnostics, o = h, u = g, false;
    });
    let f = l.state.facet(ko).tooltipFilter;
    return r && f && (r = f(r, l.state)), r ? {
      pos: o,
      end: u,
      above: l.state.doc.lineAt(o).to < u,
      create() {
        return {
          dom: UE(l, r)
        };
      }
    } : null;
  }
  function UE(l, t) {
    return Gt("ul", {
      class: "cm-tooltip-lint"
    }, t.map((e) => $x(l, e, false)));
  }
  const VE = (l) => {
    let t = l.state.field(ui, false);
    (!t || !t.panel) && l.dispatch({
      effects: NE(l.state, [
        Pm.of(true)
      ])
    });
    let e = So(l, Oo.open);
    return e && e.dom.querySelector(".cm-panel-lint ul").focus(), true;
  }, Q1 = (l) => {
    let t = l.state.field(ui, false);
    return !t || !t.panel ? false : (l.dispatch({
      effects: Pm.of(false)
    }), true);
  }, qE = (l) => {
    let t = l.state.field(ui, false);
    if (!t) return false;
    let e = l.state.selection.main, n = t.diagnostics.iter(e.to + 1);
    return !n.value && (n = t.diagnostics.iter(0), !n.value || n.from == e.from && n.to == e.to) ? false : (l.dispatch({
      selection: {
        anchor: n.from,
        head: n.to
      },
      scrollIntoView: true
    }), true);
  }, jE = [
    {
      key: "Mod-Shift-m",
      run: VE,
      preventDefault: true
    },
    {
      key: "F8",
      run: qE
    }
  ], ko = et.define({
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
          markerFilter: Z1,
          tooltipFilter: Z1,
          needsRefresh: (t, e) => t ? e ? (n) => t(n) || e(n) : t : e,
          hideOn: (t, e) => t ? e ? (n, r, o) => t(n, r, o) || e(n, r, o) : t : e,
          autoPanel: (t, e) => t || e
        })
      };
    }
  });
  function Z1(l, t) {
    return l ? t ? (e, n) => t(l(e, n), n) : l : t;
  }
  function Px(l) {
    let t = [];
    if (l) t: for (let { name: e } of l) {
      for (let n = 0; n < e.length; n++) {
        let r = e[n];
        if (/[a-zA-Z]/.test(r) && !t.some((o) => o.toLowerCase() == r.toLowerCase())) {
          t.push(r);
          continue t;
        }
      }
      t.push("");
    }
    return t;
  }
  function $x(l, t, e) {
    var n;
    let r = e ? Px(t.actions) : [];
    return Gt("li", {
      class: "cm-diagnostic cm-diagnostic-" + t.severity
    }, Gt("span", {
      class: "cm-diagnosticText"
    }, t.renderMessage ? t.renderMessage(l) : t.message), (n = t.actions) === null || n === void 0 ? void 0 : n.map((o, u) => {
      let f = false, h = (S) => {
        if (S.preventDefault(), f) return;
        f = true;
        let w = Fs(l.state.field(ui).diagnostics, t);
        w && o.apply(l, w.from, w.to);
      }, { name: g } = o, p = r[u] ? g.indexOf(r[u]) : -1, y = p < 0 ? g : [
        g.slice(0, p),
        Gt("u", g.slice(p, p + 1)),
        g.slice(p + 1)
      ], v = o.markClass ? " " + o.markClass : "";
      return Gt("button", {
        type: "button",
        class: "cm-diagnosticAction" + v,
        onclick: h,
        onmousedown: h,
        "aria-label": ` Action: ${g}${p < 0 ? "" : ` (access key "${r[u]})"`}.`
      }, y);
    }), t.source && Gt("div", {
      class: "cm-diagnosticSource"
    }, t.source));
  }
  class YE extends Mn {
    constructor(t) {
      super(), this.sev = t;
    }
    eq(t) {
      return t.sev == this.sev;
    }
    toDOM() {
      return Gt("span", {
        class: "cm-lintPoint cm-lintPoint-" + this.sev
      });
    }
  }
  class W1 {
    constructor(t, e) {
      this.diagnostic = e, this.id = "item_" + Math.floor(Math.random() * 4294967295).toString(16), this.dom = $x(t, e, true), this.dom.id = this.id, this.dom.setAttribute("role", "option");
    }
  }
  class Oo {
    constructor(t) {
      this.view = t, this.items = [];
      let e = (r) => {
        if (r.keyCode == 27) Q1(this.view), this.view.focus();
        else if (r.keyCode == 38 || r.keyCode == 33) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
        else if (r.keyCode == 40 || r.keyCode == 34) this.moveSelection((this.selectedIndex + 1) % this.items.length);
        else if (r.keyCode == 36) this.moveSelection(0);
        else if (r.keyCode == 35) this.moveSelection(this.items.length - 1);
        else if (r.keyCode == 13) this.view.focus();
        else if (r.keyCode >= 65 && r.keyCode <= 90 && this.selectedIndex >= 0) {
          let { diagnostic: o } = this.items[this.selectedIndex], u = Px(o.actions);
          for (let f = 0; f < u.length; f++) if (u[f].toUpperCase().charCodeAt(0) == r.keyCode) {
            let h = Fs(this.view.state.field(ui).diagnostics, o);
            h && o.actions[f].apply(t, h.from, h.to);
          }
        } else return;
        r.preventDefault();
      }, n = (r) => {
        for (let o = 0; o < this.items.length; o++) this.items[o].dom.contains(r.target) && this.moveSelection(o);
      };
      this.list = Gt("ul", {
        tabIndex: 0,
        role: "listbox",
        "aria-label": this.view.state.phrase("Diagnostics"),
        onkeydown: e,
        onclick: n
      }), this.dom = Gt("div", {
        class: "cm-panel-lint"
      }, this.list, Gt("button", {
        type: "button",
        name: "close",
        "aria-label": this.view.state.phrase("close"),
        onclick: () => Q1(this.view)
      }, "\xD7")), this.update();
    }
    get selectedIndex() {
      let t = this.view.state.field(ui).selected;
      if (!t) return -1;
      for (let e = 0; e < this.items.length; e++) if (this.items[e].diagnostic == t.diagnostic) return e;
      return -1;
    }
    update() {
      let { diagnostics: t, selected: e } = this.view.state.field(ui), n = 0, r = false, o = null, u = /* @__PURE__ */ new Set();
      for (t.between(0, this.view.state.doc.length, (f, h, { spec: g }) => {
        for (let p of g.diagnostics) {
          if (u.has(p)) continue;
          u.add(p);
          let y = -1, v;
          for (let S = n; S < this.items.length; S++) if (this.items[S].diagnostic == p) {
            y = S;
            break;
          }
          y < 0 ? (v = new W1(this.view, p), this.items.splice(n, 0, v), r = true) : (v = this.items[y], y > n && (this.items.splice(n, y - n), r = true)), e && v.diagnostic == e.diagnostic ? v.dom.hasAttribute("aria-selected") || (v.dom.setAttribute("aria-selected", "true"), o = v) : v.dom.hasAttribute("aria-selected") && v.dom.removeAttribute("aria-selected"), n++;
        }
      }); n < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0); ) r = true, this.items.pop();
      this.items.length == 0 && (this.items.push(new W1(this.view, {
        from: -1,
        to: -1,
        severity: "info",
        message: this.view.state.phrase("No diagnostics")
      })), r = true), o ? (this.list.setAttribute("aria-activedescendant", o.id), this.view.requestMeasure({
        key: this,
        read: () => ({
          sel: o.dom.getBoundingClientRect(),
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
      let e = this.view.state.field(ui), n = Fs(e.diagnostics, this.items[t].diagnostic);
      n && this.view.dispatch({
        selection: {
          anchor: n.from,
          head: n.to
        },
        scrollIntoView: true,
        effects: Ix.of(n)
      });
    }
    static open(t) {
      return new Oo(t);
    }
  }
  function GE(l, t = 'viewBox="0 0 40 40"') {
    return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${t}>${encodeURIComponent(l)}</svg>')`;
  }
  function Tu(l) {
    return GE(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${l}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"');
  }
  const XE = I.baseTheme({
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
      backgroundImage: Tu("#d11")
    },
    ".cm-lintRange-warning": {
      backgroundImage: Tu("orange")
    },
    ".cm-lintRange-info": {
      backgroundImage: Tu("#999")
    },
    ".cm-lintRange-hint": {
      backgroundImage: Tu("#66d")
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
  function KE(l) {
    return l == "error" ? 4 : l == "warning" ? 3 : l == "info" ? 2 : 1;
  }
  function QE(l) {
    let t = "hint", e = 1;
    for (let n of l) {
      let r = KE(n.severity);
      r > e && (e = r, t = n.severity);
    }
    return t;
  }
  const ZE = [
    ui,
    I.decorations.compute([
      ui
    ], (l) => {
      let { selected: t, panel: e } = l.field(ui);
      return !t || !e || t.from == t.to ? ut.none : ut.set([
        LE.range(t.from, t.to)
      ]);
    }),
    HT(HE, {
      hideOn: zE
    }),
    XE
  ];
  var J1 = function(t) {
    t === void 0 && (t = {});
    var { crosshairCursor: e = false } = t, n = [];
    t.closeBracketsKeymap !== false && (n = n.concat(ME)), t.defaultKeymap !== false && (n = n.concat(bD)), t.searchKeymap !== false && (n = n.concat(XD)), t.historyKeymap !== false && (n = n.concat(MO)), t.foldKeymap !== false && (n = n.concat(Vk)), t.completionKeymap !== false && (n = n.concat(Jx)), t.lintKeymap !== false && (n = n.concat(jE));
    var r = [];
    return t.lineNumbers !== false && r.push(WT()), t.highlightActiveLineGutter !== false && r.push(IT()), t.highlightSpecialChars !== false && r.push(hT()), t.history !== false && r.push(pO()), t.foldGutter !== false && r.push(Gk()), t.drawSelection !== false && r.push(eT()), t.dropCursor !== false && r.push(rT()), t.allowMultipleSelections !== false && r.push(kt.allowMultipleSelections.of(true)), t.indentOnInput !== false && r.push(Ok()), t.syntaxHighlighting !== false && r.push(WS(Zk, {
      fallback: true
    })), t.bracketMatching !== false && r.push(tO()), t.closeBrackets !== false && r.push(xE()), t.autocompletion !== false && r.push(BE()), t.rectangularSelection !== false && r.push(_T()), e !== false && r.push(OT()), t.highlightActiveLine !== false && r.push(bT()), t.highlightSelectionMatches !== false && r.push(MD()), t.tabSize && typeof t.tabSize == "number" && r.push(mc.of(" ".repeat(t.tabSize))), r.concat([
      hc.of(n.flat())
    ]).filter(Boolean);
  };
  const WE = "#e5c07b", F1 = "#e06c75", JE = "#56b6c2", FE = "#ffffff", Uu = "#abb2bf", Sm = "#7d8799", IE = "#61afef", PE = "#98c379", I1 = "#d19a66", $E = "#c678dd", t3 = "#21252b", P1 = "#2c313a", $1 = "#282c34", xd = "#353a42", e3 = "#3E4451", tv = "#528bff", i3 = I.theme({
    "&": {
      color: Uu,
      backgroundColor: $1
    },
    ".cm-content": {
      caretColor: tv
    },
    ".cm-cursor, .cm-dropCursor": {
      borderLeftColor: tv
    },
    "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
      backgroundColor: e3
    },
    ".cm-panels": {
      backgroundColor: t3,
      color: Uu
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
      backgroundColor: $1,
      color: Sm,
      border: "none"
    },
    ".cm-activeLineGutter": {
      backgroundColor: P1
    },
    ".cm-foldPlaceholder": {
      backgroundColor: "transparent",
      border: "none",
      color: "#ddd"
    },
    ".cm-tooltip": {
      border: "none",
      backgroundColor: xd
    },
    ".cm-tooltip .cm-tooltip-arrow:before": {
      borderTopColor: "transparent",
      borderBottomColor: "transparent"
    },
    ".cm-tooltip .cm-tooltip-arrow:after": {
      borderTopColor: xd,
      borderBottomColor: xd
    },
    ".cm-tooltip-autocomplete": {
      "& > ul > li[aria-selected]": {
        backgroundColor: P1,
        color: Uu
      }
    }
  }, {
    dark: true
  }), n3 = Lo.define([
    {
      tag: q.keyword,
      color: $E
    },
    {
      tag: [
        q.name,
        q.deleted,
        q.character,
        q.propertyName,
        q.macroName
      ],
      color: F1
    },
    {
      tag: [
        q.function(q.variableName),
        q.labelName
      ],
      color: IE
    },
    {
      tag: [
        q.color,
        q.constant(q.name),
        q.standard(q.name)
      ],
      color: I1
    },
    {
      tag: [
        q.definition(q.name),
        q.separator
      ],
      color: Uu
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
      color: WE
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
      color: JE
    },
    {
      tag: [
        q.meta,
        q.comment
      ],
      color: Sm
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
      color: Sm,
      textDecoration: "underline"
    },
    {
      tag: q.heading,
      fontWeight: "bold",
      color: F1
    },
    {
      tag: [
        q.atom,
        q.bool,
        q.special(q.variableName)
      ],
      color: I1
    },
    {
      tag: [
        q.processingInstruction,
        q.string,
        q.inserted
      ],
      color: PE
    },
    {
      tag: q.invalid,
      color: FE
    }
  ]), l3 = [
    i3,
    WS(n3)
  ];
  var s3 = I.theme({
    "&": {
      backgroundColor: "#fff"
    }
  }, {
    dark: false
  }), r3 = function(t) {
    t === void 0 && (t = {});
    var { indentWithTab: e = true, editable: n = true, readOnly: r = false, theme: o = "light", placeholder: u = "", basicSetup: f = true } = t, h = [];
    switch (e && h.unshift(hc.of([
      vD
    ])), f && (typeof f == "boolean" ? h.unshift(J1()) : h.unshift(J1(f))), u && h.unshift(wT(u)), o) {
      case "light":
        h.push(s3);
        break;
      case "dark":
        h.push(l3);
        break;
      case "none":
        break;
      default:
        h.push(o);
        break;
    }
    return n === false && h.push(I.editable.of(false)), r && h.push(kt.readOnly.of(true)), [
      ...h
    ];
  }, o3 = (l) => ({
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
  class a3 {
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
  class ev {
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
  var wd = null, u3 = () => typeof window > "u" ? new ev() : (wd || (wd = new ev()), wd), iv = Pi.define(), c3 = 200, f3 = [];
  function h3(l) {
    var { value: t, selection: e, onChange: n, onStatistics: r, onCreateEditor: o, onUpdate: u, extensions: f = f3, autoFocus: h, theme: g = "light", height: p = null, minHeight: y = null, maxHeight: v = null, width: S = null, minWidth: w = null, maxWidth: C = null, placeholder: _ = "", editable: O = true, readOnly: j = false, indentWithTab: L = true, basicSetup: Q = true, root: N, initialState: G } = l, [V, lt] = ce.useState(), [tt, pt] = ce.useState(), [ot, P] = ce.useState(), ft = ce.useState(() => ({
      current: null
    }))[0], ht = ce.useState(() => ({
      current: null
    }))[0], yt = I.theme({
      "&": {
        height: p,
        minHeight: y,
        maxHeight: v,
        width: S,
        minWidth: w,
        maxWidth: C
      },
      "& .cm-scroller": {
        height: "100% !important"
      }
    }), R = I.updateListener.of((rt) => {
      if (rt.docChanged && typeof n == "function" && !rt.transactions.some((H) => H.annotation(iv))) {
        ft.current ? ft.current.reset() : (ft.current = new a3(() => {
          if (ht.current) {
            var H = ht.current;
            ht.current = null, H();
          }
          ft.current = null;
        }, c3), u3().add(ft.current));
        var mt = rt.state.doc, M = mt.toString();
        n(M, rt);
      }
      r && r(o3(rt));
    }), Z = r3({
      theme: g,
      editable: O,
      readOnly: j,
      placeholder: _,
      indentWithTab: L,
      basicSetup: Q
    }), it = [
      R,
      yt,
      ...Z
    ];
    return u && typeof u == "function" && it.push(I.updateListener.of(u)), it = it.concat(f), ce.useLayoutEffect(() => {
      if (V && !ot) {
        var rt = {
          doc: t,
          selection: e,
          extensions: it
        }, mt = G ? kt.fromJSON(G.json, rt, G.fields) : kt.create(rt);
        if (P(mt), !tt) {
          var M = new I({
            state: mt,
            parent: V,
            root: N
          });
          pt(M), o && o(M, mt);
        }
      }
      return () => {
        tt && (P(void 0), pt(void 0));
      };
    }, [
      V,
      ot
    ]), ce.useEffect(() => {
      l.container && lt(l.container);
    }, [
      l.container
    ]), ce.useEffect(() => () => {
      tt && (tt.destroy(), pt(void 0)), ft.current && (ft.current.cancel(), ft.current = null);
    }, [
      tt
    ]), ce.useEffect(() => {
      h && tt && tt.focus();
    }, [
      h,
      tt
    ]), ce.useEffect(() => {
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
      C,
      _,
      O,
      j,
      L,
      Q,
      n,
      u
    ]), ce.useEffect(() => {
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
                iv.of(true)
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
      state: ot,
      setState: P,
      view: tt,
      setView: pt,
      container: V,
      setContainer: lt
    };
  }
  var d3 = [
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
  ], t2 = ce.forwardRef((l, t) => {
    var { className: e, value: n = "", selection: r, extensions: o = [], onChange: u, onStatistics: f, onCreateEditor: h, onUpdate: g, autoFocus: p, theme: y = "light", height: v, minHeight: S, maxHeight: w, width: C, minWidth: _, maxWidth: O, basicSetup: j, placeholder: L, indentWithTab: Q, editable: N, readOnly: G, root: V, initialState: lt } = l, tt = FC(l, d3), pt = ce.useRef(null), { state: ot, view: P, container: ft, setContainer: ht } = h3({
      root: V,
      value: n,
      autoFocus: p,
      theme: y,
      height: v,
      minHeight: S,
      maxHeight: w,
      width: C,
      minWidth: _,
      maxWidth: O,
      basicSetup: j,
      placeholder: L,
      indentWithTab: Q,
      editable: N,
      readOnly: G,
      selection: r,
      onChange: u,
      onStatistics: f,
      onCreateEditor: h,
      onUpdate: g,
      extensions: o,
      initialState: lt
    });
    ce.useImperativeHandle(t, () => ({
      editor: pt.current,
      state: ot,
      view: P
    }), [
      pt,
      ft,
      ot,
      P
    ]);
    var yt = ce.useCallback((Z) => {
      pt.current = Z, ht(Z);
    }, [
      ht
    ]);
    if (typeof n != "string") throw new Error("value must be typeof string but got " + typeof n);
    var R = typeof y == "string" ? "cm-theme-" + y : "cm-theme";
    return ue.jsx("div", Cd({
      ref: yt,
      className: "" + R + (e ? " " + e : "")
    }, tt));
  });
  t2.displayName = "CodeMirror";
  const m3 = $t.fromClass(class {
    constructor(l) {
      __publicField(this, "decorations");
      this.decorations = this.getDecorations(l);
    }
    update(l) {
      (l.docChanged || l.viewportChanged) && (this.decorations = this.getDecorations(l.view));
    }
    getDecorations(l) {
      const t = [], e = /(\/\/.*)/.source, n = /(\/\*[\s\S]*?\*\/)/.source, r = /("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`)/.source, o = /(\b(?:true|false)\b)/.source, u = /(\b\d+\b)/.source, f = /(\b(?:if|else|return)\b)/.source, h = /(\b(?:signature|bool|string|number)\b)/.source, g = /(\b(?:pragma|bithoven|version|target|legacy|segwit|taproot)\b)/.source, p = /(\b(?:verify|after|older)\b)/.source, y = /(\b(?:checksig|sha256|ripemd160)\b)/.source, v = /(\b(?:len)\b)/.source, S = /(==|!=|>=|<=|>|<)/.source, w = /(\|\||&&)/.source, C = /(\+\+|--|\bnegate\b|\babs\b|!)/.source, _ = /([+|-])/.source, O = /(\b(?:max|min)\b)/.source, j = new RegExp([
        e,
        n,
        r,
        o,
        u,
        f,
        h,
        g,
        p,
        y,
        v,
        S,
        w,
        C,
        _,
        O
      ].join("|"), "g");
      for (const L of l.visibleRanges) {
        const Q = l.state.doc.sliceString(L.from, L.to);
        let N;
        for (; N = j.exec(Q); ) {
          let G = "";
          N[1] || N[2] ? G = "cm-comment" : N[3] ? G = "cm-string" : N[4] ? G = "cm-bool" : N[5] ? G = "cm-number" : N[6] ? G = "cm-control" : N[7] ? G = "cm-type" : N[8] ? G = "cm-pragma" : N[9] ? G = "cm-statement" : N[10] ? G = "cm-crypto" : N[11] ? G = "cm-byte" : G = "cm-operation";
          const V = L.from + N.index, lt = V + N[0].length;
          G && t.push(ut.mark({
            class: G
          }).range(V, lt));
        }
      }
      return ut.set(t);
    }
  }, {
    decorations: (l) => l.decorations
  }), g3 = `pragma bithoven version 0.0.1;
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
`;
  function p3() {
    const [l, t] = ce.useState(g3), [e, n] = ce.useState('Click "Compile & Run" to execute the code.'), [r, o] = ce.useState(false), u = ce.useCallback(async () => {
      o(true), n("Compiling...");
      try {
        const f = YA(l).to_object();
        n(JSON.stringify(f, null, 2));
      } catch (f) {
        console.log(f), console.error("Execution error:", f);
        const h = f instanceof Error ? f.message : String(f);
        n(`\u274C Error:

${h}`);
      } finally {
        o(false);
      }
    }, [
      l
    ]);
    return ue.jsxs("div", {
      className: "ideContainer",
      children: [
        ue.jsxs("header", {
          className: "header",
          children: [
            ue.jsx("h1", {
              children: "\u20BFithoven Web IDE \u{1F3BC} \u{1F4BB} "
            }),
            ue.jsxs("div", {
              className: "header-controls",
              children: [
                ue.jsx("span", {
                  className: "onlineBadge",
                  children: "Online"
                }),
                ue.jsxs("a", {
                  href: "https://github.com/ChrisCho-H/bithoven",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "githubLink",
                  "aria-label": "View source on GitHub",
                  children: [
                    ue.jsx("svg", {
                      viewBox: "0 0 24 24",
                      width: "24",
                      height: "24",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      fill: "none",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      children: ue.jsx("path", {
                        d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                      })
                    }),
                    ue.jsx("span", {
                      children: "GitHub"
                    })
                  ]
                })
              ]
            })
          ]
        }),
        ue.jsxs("main", {
          children: [
            ue.jsxs("div", {
              className: "editorSection",
              children: [
                ue.jsx("label", {
                  htmlFor: "codemirror-editor",
                  children: "Code Editor (pretty)"
                }),
                ue.jsx(t2, {
                  id: "codemirror-editor",
                  value: l,
                  height: "300px",
                  theme: "dark",
                  extensions: [
                    m3
                  ],
                  onChange: (f) => t(f)
                })
              ]
            }),
            ue.jsx("button", {
              className: "compileButton",
              onClick: u,
              disabled: r,
              children: r ? "Compiling..." : "Compile & Run"
            }),
            ue.jsxs("div", {
              className: "outputSection",
              children: [
                ue.jsx("label", {
                  htmlFor: "output",
                  children: "Output"
                }),
                ue.jsx("pre", {
                  id: "output",
                  className: "output",
                  children: e
                })
              ]
            })
          ]
        })
      ]
    });
  }
  RA.createRoot(document.getElementById("root")).render(ue.jsx(ce.StrictMode, {
    children: ue.jsx(p3, {})
  }));
})();
