import pe, { useState as K, useRef as J, useMemo as _r, useLayoutEffect as te, useEffect as Ve } from "react";
var re = { exports: {} }, q = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Le;
function Rr() {
  if (Le) return q;
  Le = 1;
  var s = pe, P = Symbol.for("react.element"), j = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, C = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(w, c, p) {
    var f, d = {}, g = null, A = null;
    p !== void 0 && (g = "" + p), c.key !== void 0 && (g = "" + c.key), c.ref !== void 0 && (A = c.ref);
    for (f in c) y.call(c, f) && !O.hasOwnProperty(f) && (d[f] = c[f]);
    if (w && w.defaultProps) for (f in c = w.defaultProps, c) d[f] === void 0 && (d[f] = c[f]);
    return { $$typeof: P, type: w, key: g, ref: A, props: d, _owner: C.current };
  }
  return q.Fragment = j, q.jsx = b, q.jsxs = b, q;
}
var z = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function br() {
  return Ye || (Ye = 1, process.env.NODE_ENV !== "production" && function() {
    var s = pe, P = Symbol.for("react.element"), j = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), w = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), $ = Symbol.iterator, D = "@@iterator";
    function N(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = $ && e[$] || e[D];
      return typeof r == "function" ? r : null;
    }
    var S = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        M("error", e, t);
      }
    }
    function M(e, r, t) {
      {
        var n = S.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var U = !1, V = !1, x = !1, ne = !1, G = !1, X;
    X = Symbol.for("react.module.reference");
    function ae(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === y || e === O || G || e === C || e === p || e === f || ne || e === A || U || V || x || typeof e == "object" && e !== null && (e.$$typeof === g || e.$$typeof === d || e.$$typeof === b || e.$$typeof === w || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === X || e.getModuleId !== void 0));
    }
    function ie(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function m(e) {
      return e.displayName || "Context";
    }
    function _(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case y:
          return "Fragment";
        case j:
          return "Portal";
        case O:
          return "Profiler";
        case C:
          return "StrictMode";
        case p:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case w:
            var r = e;
            return m(r) + ".Consumer";
          case b:
            var t = e;
            return m(t._context) + ".Provider";
          case c:
            return ie(e, e.render, "ForwardRef");
          case d:
            var n = e.displayName || null;
            return n !== null ? n : _(e.type) || "Memo";
          case g: {
            var o = e, u = o._payload, i = o._init;
            try {
              return _(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, W = 0, he, ge, _e, Re, be, Ee, me;
    function ye() {
    }
    ye.__reactDisabledLog = !0;
    function Be() {
      {
        if (W === 0) {
          he = console.log, ge = console.info, _e = console.warn, Re = console.error, be = console.group, Ee = console.groupCollapsed, me = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ye,
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
        W++;
      }
    }
    function Je() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, e, {
              value: he
            }),
            info: k({}, e, {
              value: ge
            }),
            warn: k({}, e, {
              value: _e
            }),
            error: k({}, e, {
              value: Re
            }),
            group: k({}, e, {
              value: be
            }),
            groupCollapsed: k({}, e, {
              value: Ee
            }),
            groupEnd: k({}, e, {
              value: me
            })
          });
        }
        W < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var oe = S.ReactCurrentDispatcher, ue;
    function H(e, r, t) {
      {
        if (ue === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            ue = n && n[1] || "";
          }
        return `
` + ue + e;
      }
    }
    var se = !1, Z;
    {
      var qe = typeof WeakMap == "function" ? WeakMap : Map;
      Z = new qe();
    }
    function we(e, r) {
      if (!e || se)
        return "";
      {
        var t = Z.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      se = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = oe.current, oe.current = null, Be();
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
            } catch (E) {
              n = E;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (E) {
              n = E;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (E) {
            n = E;
          }
          e();
        }
      } catch (E) {
        if (E && n && typeof E.stack == "string") {
          for (var a = E.stack.split(`
`), R = n.stack.split(`
`), l = a.length - 1, v = R.length - 1; l >= 1 && v >= 0 && a[l] !== R[v]; )
            v--;
          for (; l >= 1 && v >= 0; l--, v--)
            if (a[l] !== R[v]) {
              if (l !== 1 || v !== 1)
                do
                  if (l--, v--, v < 0 || a[l] !== R[v]) {
                    var T = `
` + a[l].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && Z.set(e, T), T;
                  }
                while (l >= 1 && v >= 0);
              break;
            }
        }
      } finally {
        se = !1, oe.current = u, Je(), Error.prepareStackTrace = o;
      }
      var Y = e ? e.displayName || e.name : "", I = Y ? H(Y) : "";
      return typeof e == "function" && Z.set(e, I), I;
    }
    function ze(e, r, t) {
      return we(e, !1);
    }
    function Ke(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function Q(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return we(e, Ke(e));
      if (typeof e == "string")
        return H(e);
      switch (e) {
        case p:
          return H("Suspense");
        case f:
          return H("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return ze(e.render);
          case d:
            return Q(e.type, r, t);
          case g: {
            var n = e, o = n._payload, u = n._init;
            try {
              return Q(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var B = Object.prototype.hasOwnProperty, Te = {}, xe = S.ReactDebugCurrentFrame;
    function ee(e) {
      if (e) {
        var r = e._owner, t = Q(e.type, e._source, r ? r.type : null);
        xe.setExtraStackFrame(t);
      } else
        xe.setExtraStackFrame(null);
    }
    function Ge(e, r, t, n, o) {
      {
        var u = Function.call.bind(B);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var R = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              a = l;
            }
            a && !(a instanceof Error) && (ee(o), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), ee(null)), a instanceof Error && !(a.message in Te) && (Te[a.message] = !0, ee(o), h("Failed %s type: %s", t, a.message), ee(null));
          }
      }
    }
    var Xe = Array.isArray;
    function fe(e) {
      return Xe(e);
    }
    function He(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ze(e) {
      try {
        return Ce(e), !1;
      } catch {
        return !0;
      }
    }
    function Ce(e) {
      return "" + e;
    }
    function Oe(e) {
      if (Ze(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", He(e)), Ce(e);
    }
    var Se = S.ReactCurrentOwner, Qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pe, je;
    function er(e) {
      if (B.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function rr(e) {
      if (B.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function tr(e, r) {
      typeof e.ref == "string" && Se.current;
    }
    function nr(e, r) {
      {
        var t = function() {
          Pe || (Pe = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function ar(e, r) {
      {
        var t = function() {
          je || (je = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ir = function(e, r, t, n, o, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: P,
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
    function or(e, r, t, n, o) {
      {
        var u, i = {}, a = null, R = null;
        t !== void 0 && (Oe(t), a = "" + t), rr(r) && (Oe(r.key), a = "" + r.key), er(r) && (R = r.ref, tr(r, o));
        for (u in r)
          B.call(r, u) && !Qe.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var l = e.defaultProps;
          for (u in l)
            i[u] === void 0 && (i[u] = l[u]);
        }
        if (a || R) {
          var v = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && nr(i, v), R && ar(i, v);
        }
        return ir(e, a, R, o, n, Se.current, i);
      }
    }
    var le = S.ReactCurrentOwner, ke = S.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var r = e._owner, t = Q(e.type, e._source, r ? r.type : null);
        ke.setExtraStackFrame(t);
      } else
        ke.setExtraStackFrame(null);
    }
    var ce;
    ce = !1;
    function de(e) {
      return typeof e == "object" && e !== null && e.$$typeof === P;
    }
    function Ae() {
      {
        if (le.current) {
          var e = _(le.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ur(e) {
      return "";
    }
    var De = {};
    function sr(e) {
      {
        var r = Ae();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Fe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = sr(r);
        if (De[t])
          return;
        De[t] = !0;
        var n = "";
        e && e._owner && e._owner !== le.current && (n = " It was passed a child from " + _(e._owner.type) + "."), L(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), L(null);
      }
    }
    function $e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (fe(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            de(n) && Fe(n, r);
          }
        else if (de(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = N(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              de(i.value) && Fe(i.value, r);
        }
      }
    }
    function fr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === d))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = _(r);
          Ge(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ce) {
          ce = !0;
          var o = _(r);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            L(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), L(null);
            break;
          }
        }
        e.ref !== null && (L(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), L(null));
      }
    }
    var We = {};
    function Ie(e, r, t, n, o, u) {
      {
        var i = ae(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = ur();
          R ? a += R : a += Ae();
          var l;
          e === null ? l = "null" : fe(e) ? l = "array" : e !== void 0 && e.$$typeof === P ? (l = "<" + (_(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, a);
        }
        var v = or(e, r, t, o, u);
        if (v == null)
          return v;
        if (i) {
          var T = r.children;
          if (T !== void 0)
            if (n)
              if (fe(T)) {
                for (var Y = 0; Y < T.length; Y++)
                  $e(T[Y], e);
                Object.freeze && Object.freeze(T);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              $e(T, e);
        }
        if (B.call(r, "key")) {
          var I = _(e), E = Object.keys(r).filter(function(gr) {
            return gr !== "key";
          }), ve = E.length > 0 ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!We[I + ve]) {
            var hr = E.length > 0 ? "{" + E.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ve, I, hr, I), We[I + ve] = !0;
          }
        }
        return e === y ? lr(v) : fr(v), v;
      }
    }
    function cr(e, r, t) {
      return Ie(e, r, t, !0);
    }
    function dr(e, r, t) {
      return Ie(e, r, t, !1);
    }
    var vr = dr, pr = cr;
    z.Fragment = y, z.jsx = vr, z.jsxs = pr;
  }()), z;
}
var Ne;
function Er() {
  return Ne || (Ne = 1, process.env.NODE_ENV === "production" ? re.exports = Rr() : re.exports = br()), re.exports;
}
var F = Er(), mr = "_6rou3t0", Me = "_6rou3t3 _6rou3t2 _6rou3t1", Ue = "_6rou3t4 _6rou3t2 _6rou3t1", yr = "_6rou3t5 _6rou3t2 _6rou3t1", wr = "_6rou3t6 _6rou3t2 _6rou3t1", Tr = "_6rou3t7", xr = "_6rou3t8", Cr = "_6rou3t9", Or = "_6rou3ta", Sr = "_6rou3tb", Pr = "_6rou3td", jr = "_6rou3te", kr = "_6rou3tf", Ar = "_6rou3tg", Dr = "_6rou3th";
const Fr = ({
  slidesToScroll: s,
  children: P,
  leftArrow: j,
  rightArrow: y,
  auto: C,
  interval: O,
  arrowsOverlay: b,
  arrowsAlwaysVisible: w,
  gap: c
}) => {
  const [p, f] = K(s), [d, g] = K(!1), [A, $] = K(0), [D, N] = K({ left: 0, right: 0 }), S = J(null), h = J(null), M = J(null), U = J(null), V = J(null), x = pe.Children.toArray(P), ne = _r(() => [...x.slice(-s), ...x, ...x.slice(0, s)], [s, x]), G = () => {
    d || (g(!0), p !== x.length && p + 2 * s > x.length + s ? f(x.length) : f((m) => m + s));
  }, X = () => {
    d || (g(!0), p !== s && p - s < s ? f(s) : f((m) => m - s));
  }, ae = () => {
    g(!1), p >= x.length + s && f(s), p <= 0 && f(x.length);
  };
  te(() => {
    f(s);
  }, [s]), te(() => {
    if (!b && M.current && U.current) {
      const m = M.current.offsetWidth, _ = U.current.offsetWidth;
      N({ left: m, right: _ });
    }
  }, [b, j, y]), te(() => {
    var _;
    if (!((_ = S.current) != null && _.children[0])) return;
    const m = new ResizeObserver(([k]) => {
      const W = k.target.getBoundingClientRect().width;
      $(W);
    });
    return m.observe(S.current.children[0]), () => m.disconnect();
  }, []), Ve(() => (C && !d && (V.current = setTimeout(G, O * 1e3)), () => {
    V.current && clearTimeout(V.current);
  }), [C, d, p, O]);
  const ie = b ? {} : {
    paddingLeft: `${D.left}px`,
    paddingRight: `${D.right}px`
  };
  return /* @__PURE__ */ F.jsxs("section", { className: mr, style: ie, children: [
    /* @__PURE__ */ F.jsx(
      "button",
      {
        ref: M,
        className: `${w ? Ue : Me} ${yr} ${!j && Tr}`,
        onClick: X,
        children: j
      }
    ),
    /* @__PURE__ */ F.jsxs("div", { className: Cr, ref: h, children: [
      C && /* @__PURE__ */ F.jsx(
        "div",
        {
          className: `${Pr} ${d ? kr : jr}`,
          style: { animationDuration: `${O}s` }
        },
        p
      ),
      /* @__PURE__ */ F.jsx(
        "ul",
        {
          className: `${Or} ${d ? Ar : Dr}`,
          ref: S,
          style: {
            transform: `translateX(${-(p * (A + c))}px)`,
            gap: `${c}px`
          },
          onTransitionEnd: ae,
          children: ne.map((m, _) => /* @__PURE__ */ F.jsx("li", { className: Sr, children: m }, _))
        }
      )
    ] }),
    /* @__PURE__ */ F.jsx(
      "button",
      {
        ref: U,
        className: `${w ? Ue : Me} ${wr} ${!y && xr}`,
        onClick: G,
        children: y
      }
    )
  ] });
}, Wr = ({
  slidesToScroll: s = 1,
  children: P,
  leftArrow: j,
  rightArrow: y,
  auto: C = !1,
  interval: O = 4,
  responsive: b = [],
  arrowsOverlay: w = !1,
  arrowsAlwaysVisible: c = !1,
  gap: p = 0
}) => {
  const [f, d] = K(0), g = () => {
    if (b.length > 0) {
      const A = window.innerWidth, $ = b.sort((D, N) => N.breakpoint - D.breakpoint).find((D) => A >= D.breakpoint);
      d($ ? $.slidesToScroll : s);
    } else
      d(s);
  };
  return te(() => {
    g();
  }, []), Ve(() => (window.addEventListener("resize", g), () => {
    window.removeEventListener("resize", g);
  }), [b, s]), /* @__PURE__ */ F.jsx(
    Fr,
    {
      slidesToScroll: f,
      children: P,
      gap: p,
      leftArrow: j || null,
      rightArrow: y || null,
      auto: C,
      interval: O,
      arrowsOverlay: w,
      arrowsAlwaysVisible: c,
      responsive: b
    }
  );
};
export {
  Wr as default
};
//# sourceMappingURL=index.mjs.map
