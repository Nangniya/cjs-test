import fe, { useState as z, useRef as ue, useMemo as pr, useLayoutEffect as se, useEffect as hr } from "react";
var K = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function gr() {
  if ($e) return M;
  $e = 1;
  var f = fe, x = Symbol.for("react.element"), S = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, T = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(p, s, m) {
    var v, g = {}, E = null, F = null;
    m !== void 0 && (E = "" + m), s.key !== void 0 && (E = "" + s.key), s.ref !== void 0 && (F = s.ref);
    for (v in s) _.call(s, v) && !O.hasOwnProperty(v) && (g[v] = s[v]);
    if (p && p.defaultProps) for (v in s = p.defaultProps, s) g[v] === void 0 && (g[v] = s[v]);
    return { $$typeof: x, type: p, key: E, ref: F, props: g, _owner: T.current };
  }
  return M.Fragment = S, M.jsx = d, M.jsxs = d, M;
}
var U = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function br() {
  return Ie || (Ie = 1, process.env.NODE_ENV !== "production" && function() {
    var f = fe, x = Symbol.for("react.element"), S = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), p = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), $ = Symbol.iterator, w = "@@iterator";
    function G(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = $ && e[$] || e[w];
      return typeof r == "function" ? r : null;
    }
    var P = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        X("error", e, t);
      }
    }
    function X(e, r, t) {
      {
        var n = P.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var C = !1, I = !1, H = !1, Z = !1, Ye = !1, ce;
    ce = Symbol.for("react.module.reference");
    function Ne(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === _ || e === O || Ye || e === T || e === m || e === v || Z || e === F || C || I || H || typeof e == "object" && e !== null && (e.$$typeof === E || e.$$typeof === g || e.$$typeof === d || e.$$typeof === p || e.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ce || e.getModuleId !== void 0));
    }
    function Le(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function le(e) {
      return e.displayName || "Context";
    }
    function j(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case _:
          return "Fragment";
        case S:
          return "Portal";
        case O:
          return "Profiler";
        case T:
          return "StrictMode";
        case m:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            var r = e;
            return le(r) + ".Consumer";
          case d:
            var t = e;
            return le(t._context) + ".Provider";
          case s:
            return Le(e, e.render, "ForwardRef");
          case g:
            var n = e.displayName || null;
            return n !== null ? n : j(e.type) || "Memo";
          case E: {
            var o = e, u = o._payload, i = o._init;
            try {
              return j(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, N = 0, de, ve, pe, he, ge, be, Re;
    function Ee() {
    }
    Ee.__reactDisabledLog = !0;
    function Me() {
      {
        if (N === 0) {
          de = console.log, ve = console.info, pe = console.warn, he = console.error, ge = console.group, be = console.groupCollapsed, Re = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ee,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        N++;
      }
    }
    function Ue() {
      {
        if (N--, N === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, e, {
              value: de
            }),
            info: A({}, e, {
              value: ve
            }),
            warn: A({}, e, {
              value: pe
            }),
            error: A({}, e, {
              value: he
            }),
            group: A({}, e, {
              value: ge
            }),
            groupCollapsed: A({}, e, {
              value: be
            }),
            groupEnd: A({}, e, {
              value: Re
            })
          });
        }
        N < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = P.ReactCurrentDispatcher, ee;
    function V(e, r, t) {
      {
        if (ee === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            ee = n && n[1] || "";
          }
        return `
` + ee + e;
      }
    }
    var re = !1, B;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      B = new Ve();
    }
    function me(e, r) {
      if (!e || re)
        return "";
      {
        var t = B.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      re = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = Q.current, Q.current = null, Me();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (R) {
              n = R;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (R) {
              n = R;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (R) {
            n = R;
          }
          e();
        }
      } catch (R) {
        if (R && n && typeof R.stack == "string") {
          for (var a = R.stack.split(`
`), b = n.stack.split(`
`), c = a.length - 1, l = b.length - 1; c >= 1 && l >= 0 && a[c] !== b[l]; )
            l--;
          for (; c >= 1 && l >= 0; c--, l--)
            if (a[c] !== b[l]) {
              if (c !== 1 || l !== 1)
                do
                  if (c--, l--, l < 0 || a[c] !== b[l]) {
                    var y = `
` + a[c].replace(" at new ", " at ");
                    return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, y), y;
                  }
                while (c >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        re = !1, Q.current = u, Ue(), Error.prepareStackTrace = o;
      }
      var Y = e ? e.displayName || e.name : "", D = Y ? V(Y) : "";
      return typeof e == "function" && B.set(e, D), D;
    }
    function Be(e, r, t) {
      return me(e, !1);
    }
    function Je(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function J(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return me(e, Je(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case m:
          return V("Suspense");
        case v:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            return Be(e.render);
          case g:
            return J(e.type, r, t);
          case E: {
            var n = e, o = n._payload, u = n._init;
            try {
              return J(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, ye = {}, _e = P.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, t = J(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(t);
      } else
        _e.setExtraStackFrame(null);
    }
    function qe(e, r, t, n, o) {
      {
        var u = Function.call.bind(L);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var b = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              a = c;
            }
            a && !(a instanceof Error) && (q(o), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), q(null)), a instanceof Error && !(a.message in ye) && (ye[a.message] = !0, q(o), h("Failed %s type: %s", t, a.message), q(null));
          }
      }
    }
    var Ke = Array.isArray;
    function te(e) {
      return Ke(e);
    }
    function ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return we(e), !1;
      } catch {
        return !0;
      }
    }
    function we(e) {
      return "" + e;
    }
    function Te(e) {
      if (Ge(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), we(e);
    }
    var Oe = P.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ce, xe;
    function He(e) {
      if (L.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (L.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      typeof e.ref == "string" && Oe.current;
    }
    function er(e, r) {
      {
        var t = function() {
          Ce || (Ce = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          xe || (xe = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, n, o, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: x,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function nr(e, r, t, n, o) {
      {
        var u, i = {}, a = null, b = null;
        t !== void 0 && (Te(t), a = "" + t), Ze(r) && (Te(r.key), a = "" + r.key), He(r) && (b = r.ref, Qe(r, o));
        for (u in r)
          L.call(r, u) && !Xe.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (u in c)
            i[u] === void 0 && (i[u] = c[u]);
        }
        if (a || b) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && er(i, l), b && rr(i, l);
        }
        return tr(e, a, b, o, n, Oe.current, i);
      }
    }
    var ne = P.ReactCurrentOwner, Pe = P.ReactDebugCurrentFrame;
    function W(e) {
      if (e) {
        var r = e._owner, t = J(e.type, e._source, r ? r.type : null);
        Pe.setExtraStackFrame(t);
      } else
        Pe.setExtraStackFrame(null);
    }
    var ae;
    ae = !1;
    function ie(e) {
      return typeof e == "object" && e !== null && e.$$typeof === x;
    }
    function Se() {
      {
        if (ne.current) {
          var e = j(ne.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      return "";
    }
    var je = {};
    function ir(e) {
      {
        var r = Se();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ke(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (je[t])
          return;
        je[t] = !0;
        var n = "";
        e && e._owner && e._owner !== ne.current && (n = " It was passed a child from " + j(e._owner.type) + "."), W(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), W(null);
      }
    }
    function Ae(e, r) {
      {
        if (typeof e != "object")
          return;
        if (te(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ie(n) && ke(n, r);
          }
        else if (ie(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = G(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              ie(i.value) && ke(i.value, r);
        }
      }
    }
    function or(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === g))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = j(r);
          qe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ae) {
          ae = !0;
          var o = j(r);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ur(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            W(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), W(null);
            break;
          }
        }
        e.ref !== null && (W(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    var De = {};
    function Fe(e, r, t, n, o, u) {
      {
        var i = Ne(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var b = ar();
          b ? a += b : a += Se();
          var c;
          e === null ? c = "null" : te(e) ? c = "array" : e !== void 0 && e.$$typeof === x ? (c = "<" + (j(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, a);
        }
        var l = nr(e, r, t, o, u);
        if (l == null)
          return l;
        if (i) {
          var y = r.children;
          if (y !== void 0)
            if (n)
              if (te(y)) {
                for (var Y = 0; Y < y.length; Y++)
                  Ae(y[Y], e);
                Object.freeze && Object.freeze(y);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ae(y, e);
        }
        if (L.call(r, "key")) {
          var D = j(e), R = Object.keys(r).filter(function(vr) {
            return vr !== "key";
          }), oe = R.length > 0 ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!De[D + oe]) {
            var dr = R.length > 0 ? "{" + R.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, oe, D, dr, D), De[D + oe] = !0;
          }
        }
        return e === _ ? ur(l) : or(l), l;
      }
    }
    function sr(e, r, t) {
      return Fe(e, r, t, !0);
    }
    function fr(e, r, t) {
      return Fe(e, r, t, !1);
    }
    var cr = fr, lr = sr;
    U.Fragment = _, U.jsx = cr, U.jsxs = lr;
  }()), U;
}
var We;
function Rr() {
  return We || (We = 1, process.env.NODE_ENV === "production" ? K.exports = gr() : K.exports = br()), K.exports;
}
var k = Rr(), Er = "tnci970", mr = "tnci973 tnci972 tnci971", yr = "tnci974 tnci972 tnci971", _r = "tnci975", wr = "tnci976", Tr = "tnci977", Or = "tnci978", Cr = "tnci979", xr = "tnci97b", Pr = "tnci97c", Sr = "tnci97d", jr = "tnci97e", kr = "tnci97f";
const Ar = ({
  slidesToScroll: f,
  children: x,
  leftArrow: S,
  rightArrow: _,
  auto: T = !1,
  interval: O = 4
}) => {
  const [d, p] = z(1), [s, m] = z(!1), [v, g] = z(0), E = ue(null), F = ue(null), $ = ue(null), w = fe.Children.toArray(x), G = pr(() => [...w.slice(-f), ...w, ...w.slice(0, f)], [f, w]), P = () => {
    s || (m(!0), d !== w.length && d + 2 * f > w.length + f ? p(w.length) : p((C) => C + f));
  }, h = () => {
    s || (m(!0), d !== f && d - f < f ? p(f) : p((C) => C - f));
  }, X = () => {
    m(!1), d >= w.length + f && p(f), d <= 0 && p(w.length);
  };
  return se(() => {
    p(f);
  }, [f]), se(() => {
    var I;
    if (!((I = E.current) != null && I.children[0])) return;
    const C = new ResizeObserver(([H]) => {
      const Z = H.target.getBoundingClientRect().width;
      g(Z);
    });
    return C.observe(E.current.children[0]), () => C.disconnect();
  }, []), hr(() => (T && !s && ($.current = setTimeout(P, O * 1e3)), () => {
    $.current && clearTimeout($.current);
  }), [T, s, d, O]), /* @__PURE__ */ k.jsxs("section", { className: Er, children: [
    /* @__PURE__ */ k.jsx("button", { className: `${mr} ${!S && _r}`, onClick: h, children: S }),
    /* @__PURE__ */ k.jsxs("div", { className: Tr, ref: F, children: [
      T && /* @__PURE__ */ k.jsx(
        "div",
        {
          className: `${xr} ${s ? Sr : Pr}`,
          style: { animationDuration: `${O}s` }
        },
        d
      ),
      /* @__PURE__ */ k.jsx(
        "ul",
        {
          className: `${Or} ${s ? jr : kr}`,
          ref: E,
          style: {
            transform: `translateX(${-(d * v)}px)`
          },
          onTransitionEnd: X,
          children: G.map((C, I) => /* @__PURE__ */ k.jsx("li", { className: Cr, children: C }, I))
        }
      )
    ] }),
    /* @__PURE__ */ k.jsx("button", { className: `${yr} ${!_ && wr}`, onClick: P, children: _ })
  ] });
}, Fr = ({
  slidesToScroll: f = 1,
  children: x,
  leftArrow: S,
  rightArrow: _,
  auto: T = !1,
  interval: O = 4,
  responsive: d = []
}) => {
  const [p, s] = z(0);
  return se(() => {
    if (d.length > 0) {
      const m = window.innerWidth, v = d.sort((g, E) => E.breakpoint - g.breakpoint).find((g) => m >= g.breakpoint);
      s(v ? v.slidesToScroll : f);
    } else
      s(f);
  }, []), /* @__PURE__ */ k.jsx(
    Ar,
    {
      slidesToScroll: p,
      children: x,
      leftArrow: S,
      rightArrow: _,
      auto: T,
      interval: O
    }
  );
};
export {
  Fr as default
};
//# sourceMappingURL=index.mjs.map
