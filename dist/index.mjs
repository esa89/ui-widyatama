import E from "react";
import { clsx as _ } from "clsx";
import { Bell as ae, ChevronDown as ne } from "lucide-react";
var T = { exports: {} }, w = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var W;
function se() {
  if (W) return w;
  W = 1;
  var i = Symbol.for("react.transitional.element"), l = Symbol.for("react.fragment");
  function s(f, n, o) {
    var x = null;
    if (o !== void 0 && (x = "" + o), n.key !== void 0 && (x = "" + n.key), "key" in n) {
      o = {};
      for (var p in n)
        p !== "key" && (o[p] = n[p]);
    } else o = n;
    return n = o.ref, {
      $$typeof: i,
      type: f,
      key: x,
      ref: n !== void 0 ? n : null,
      props: o
    };
  }
  return w.Fragment = l, w.jsx = s, w.jsxs = s, w;
}
var R = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var U;
function oe() {
  return U || (U = 1, process.env.NODE_ENV !== "production" && function() {
    function i(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ee ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case k:
          return "Fragment";
        case G:
          return "Profiler";
        case q:
          return "StrictMode";
        case H:
          return "Suspense";
        case Z:
          return "SuspenseList";
        case K:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case J:
            return "Portal";
          case X:
            return (e.displayName || "Context") + ".Provider";
          case B:
            return (e._context.displayName || "Context") + ".Consumer";
          case M:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Q:
            return r = e.displayName || null, r !== null ? r : i(e.type) || "Memo";
          case Y:
            r = e._payload, e = e._init;
            try {
              return i(e(r));
            } catch {
            }
        }
      return null;
    }
    function l(e) {
      return "" + e;
    }
    function s(e) {
      try {
        l(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var a = r.error, u = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          u
        ), l(e);
      }
    }
    function f(e) {
      if (e === k) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === Y)
        return "<...>";
      try {
        var r = i(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var e = N.A;
      return e === null ? null : e.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function x(e) {
      if (D.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function p(e, r) {
      function a() {
        F || (F = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      a.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: a,
        configurable: !0
      });
    }
    function h() {
      var e = i(this.type);
      return $[e] || ($[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function g(e, r, a, u, v, b, O, S) {
      return a = b.ref, e = {
        $$typeof: C,
        type: e,
        key: r,
        props: b,
        _owner: v
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: h
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: S
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function c(e, r, a, u, v, b, O, S) {
      var d = r.children;
      if (d !== void 0)
        if (u)
          if (re(d)) {
            for (u = 0; u < d.length; u++)
              m(d[u]);
            Object.freeze && Object.freeze(d);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(d);
      if (D.call(r, "key")) {
        d = i(e);
        var j = Object.keys(r).filter(function(te) {
          return te !== "key";
        });
        u = 0 < j.length ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}", L[d + u] || (j = 0 < j.length ? "{" + j.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          u,
          d,
          j,
          d
        ), L[d + u] = !0);
      }
      if (d = null, a !== void 0 && (s(a), d = "" + a), x(r) && (s(r.key), d = "" + r.key), "key" in r) {
        a = {};
        for (var P in r)
          P !== "key" && (a[P] = r[P]);
      } else a = r;
      return d && p(
        a,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), g(
        e,
        d,
        b,
        v,
        n(),
        a,
        O,
        S
      );
    }
    function m(e) {
      typeof e == "object" && e !== null && e.$$typeof === C && e._store && (e._store.validated = 1);
    }
    var y = E, C = Symbol.for("react.transitional.element"), J = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), G = Symbol.for("react.profiler"), B = Symbol.for("react.consumer"), X = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), Q = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), K = Symbol.for("react.activity"), ee = Symbol.for("react.client.reference"), N = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = Object.prototype.hasOwnProperty, re = Array.isArray, A = console.createTask ? console.createTask : function() {
      return null;
    };
    y = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var F, $ = {}, z = y["react-stack-bottom-frame"].bind(
      y,
      o
    )(), I = A(f(o)), L = {};
    R.Fragment = k, R.jsx = function(e, r, a, u, v) {
      var b = 1e4 > N.recentlyCreatedOwnerStacks++;
      return c(
        e,
        r,
        a,
        !1,
        u,
        v,
        b ? Error("react-stack-top-frame") : z,
        b ? A(f(e)) : I
      );
    }, R.jsxs = function(e, r, a, u, v) {
      var b = 1e4 > N.recentlyCreatedOwnerStacks++;
      return c(
        e,
        r,
        a,
        !0,
        u,
        v,
        b ? Error("react-stack-top-frame") : z,
        b ? A(f(e)) : I
      );
    };
  }()), R;
}
var V;
function le() {
  return V || (V = 1, process.env.NODE_ENV === "production" ? T.exports = se() : T.exports = oe()), T.exports;
}
var t = le();
const de = ({
  variant: i = "primary",
  iconLeft: l,
  iconRight: s,
  size: f = "md",
  className: n,
  children: o,
  ...x
}) => {
  const p = "inline-flex items-center font-normal rounded transition-all", h = {
    sm: "text-sm px-3 py-1.5 gap-1.5",
    md: "text-base px-4 py-2 gap-2",
    lg: "text-lg px-5 py-2.5 gap-2.5"
  }, g = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-primary/10 text-primary hover:bg-primary/20",
    destructive: "bg-danger text-white hover:bg-danger/90",
    "destructive-secondary": "bg-danger/10 text-danger hover:bg-danger/20",
    white: "bg-white border border-primary/20 text-primary hover:bg-primary/5",
    outline: "border border-primary text-primary hover:bg-primary/5",
    ghost: "bg-transparent text-primary hover:bg-primary/5"
  };
  return /* @__PURE__ */ t.jsxs(
    "button",
    {
      className: _(p, h[f], g[i], n, x.disabled && "opacity-50 cursor-not-allowed"),
      ...x,
      children: [
        l && /* @__PURE__ */ t.jsx("span", { className: "mr-1", children: l }),
        o,
        s && /* @__PURE__ */ t.jsx("span", { className: "ml-1", children: s })
      ]
    }
  );
}, me = ({
  label: i,
  error: l,
  disabled: s,
  className: f,
  ...n
}) => /* @__PURE__ */ t.jsxs("div", { className: "flex flex-col gap-1 text-sm w-full", children: [
  i && /* @__PURE__ */ t.jsx("label", { className: _("text-gray-700 font-medium", s && "opacity-60"), children: i }),
  /* @__PURE__ */ t.jsx(
    "input",
    {
      disabled: s,
      className: _(
        "px-3 py-2 border rounded-md text-sm transition-all placeholder-gray-400",
        "focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary",
        s && "bg-gray-100 text-gray-400 cursor-not-allowed",
        l ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300",
        f
      ),
      ...n
    }
  ),
  l && /* @__PURE__ */ t.jsx("p", { className: "text-red-500 text-xs mt-0.5", children: l })
] }), fe = ({
  title: i,
  titleIcon: l,
  menu: s,
  activeKey: f,
  onMenuClick: n,
  iconSize: o = 18,
  showFooter: x = !1,
  footerLabel: p = "Logout",
  footerIcon: h,
  onFooterClick: g
}) => /* @__PURE__ */ t.jsxs("aside", { className: "h-screen w-60 bg-[#373B85] text-white flex flex-col justify-between", children: [
  /* @__PURE__ */ t.jsxs("div", { children: [
    /* @__PURE__ */ t.jsxs("div", { className: "h-16 flex items-center gap-2 text-xl font-bold border-b border-white/20 px-4", children: [
      l && E.isValidElement(l) && E.cloneElement(l, { size: o + 2 }),
      /* @__PURE__ */ t.jsx("span", { children: i })
    ] }),
    /* @__PURE__ */ t.jsx("nav", { className: "mt-4 px-4 flex flex-col gap-6 text-sm", children: s.map((c) => /* @__PURE__ */ t.jsxs("div", { children: [
      /* @__PURE__ */ t.jsx("p", { className: "uppercase text-xs text-white/60 mb-2 tracking-wide", children: c.group }),
      /* @__PURE__ */ t.jsx("ul", { className: "flex flex-col gap-1", children: c.items.map((m) => {
        const y = m.key === f;
        return /* @__PURE__ */ t.jsxs(
          "li",
          {
            onClick: () => n == null ? void 0 : n(m.key),
            className: _(
              "flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition",
              y ? "bg-[#F79009] text-white" : "hover:bg-white/10 text-white/80"
            ),
            children: [
              m.icon && E.isValidElement(m.icon) && E.cloneElement(m.icon, { size: o }),
              /* @__PURE__ */ t.jsx("span", { children: m.label })
            ]
          },
          m.key
        );
      }) })
    ] }, c.group)) })
  ] }),
  x && /* @__PURE__ */ t.jsx("div", { className: "p-4 border-t border-white/20", children: /* @__PURE__ */ t.jsxs(
    "button",
    {
      className: "flex items-center gap-2 text-white/80 hover:text-white text-sm",
      onClick: g,
      children: [
        h && E.isValidElement(h) && E.cloneElement(h, { size: o }),
        p
      ]
    }
  ) })
] }), xe = ({
  menus: i = [],
  activeMenu: l,
  onChangeMenu: s,
  userName: f = "User",
  avatarUrl: n,
  showNotification: o = !0,
  onNotificationClick: x,
  profileMenu: p = []
}) => {
  const [h, g] = E.useState(!1);
  return /* @__PURE__ */ t.jsxs("header", { className: "w-full h-16 bg-white shadow-sm border-b flex items-center justify-between px-6 relative", children: [
    /* @__PURE__ */ t.jsx("nav", { className: "flex gap-6", children: i.map((c) => {
      const m = c.key === l;
      return /* @__PURE__ */ t.jsxs(
        "button",
        {
          onClick: () => s == null ? void 0 : s(c.key),
          className: _(
            "flex items-center gap-2 pb-1 border-b-2 text-sm font-medium transition-all",
            m ? "border-orange-500 text-orange-500" : "border-transparent text-gray-600 hover:text-gray-800"
          ),
          children: [
            c.icon,
            c.label
          ]
        },
        c.key
      );
    }) }),
    /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-4 ml-auto relative", children: [
      o && /* @__PURE__ */ t.jsxs(
        "button",
        {
          onClick: x,
          className: "relative text-gray-600 hover:text-gray-800",
          children: [
            /* @__PURE__ */ t.jsx(ae, { size: 20 }),
            /* @__PURE__ */ t.jsx("span", { className: "absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" })
          ]
        }
      ),
      /* @__PURE__ */ t.jsxs(
        "button",
        {
          onClick: () => g((c) => !c),
          className: "flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-primary",
          children: [
            n ? /* @__PURE__ */ t.jsx(
              "img",
              {
                src: n,
                alt: "avatar",
                className: "w-8 h-8 rounded-full object-cover"
              }
            ) : /* @__PURE__ */ t.jsx("div", { className: "w-8 h-8 rounded-full bg-gray-300" }),
            /* @__PURE__ */ t.jsx("span", { children: f }),
            /* @__PURE__ */ t.jsx(ne, { size: 16 })
          ]
        }
      ),
      h && /* @__PURE__ */ t.jsx("div", { className: "absolute top-14 right-0 bg-white shadow-md border rounded-md w-40 z-50", children: p.map((c, m) => /* @__PURE__ */ t.jsx(
        "button",
        {
          onClick: () => {
            c.onClick(), g(!1);
          },
          className: "w-full px-4 py-2 text-sm text-left hover:bg-gray-100",
          children: c.label
        },
        m
      )) })
    ] })
  ] });
};
export {
  de as Button,
  me as Input,
  fe as Sidebar,
  xe as Topbar
};
