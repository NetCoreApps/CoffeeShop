var Ys = Object.defineProperty;
var eo = (e, t, l) => t in e ? Ys(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l;
var Ce = (e, t, l) => (eo(e, typeof t != "symbol" ? t + "" : t, l), l);
import { defineComponent as ce, computed as f, openBlock as a, createElementBlock as u, normalizeClass as w, unref as o, createElementVNode as s, createCommentVNode as k, renderSlot as Z, ref as A, toDisplayString as T, inject as Ne, nextTick as xt, isRef as Qn, mergeProps as Me, withModifiers as Ue, h as gt, resolveComponent as X, createBlock as se, withCtx as ke, useAttrs as to, createVNode as $e, createTextVNode as we, watchEffect as hl, normalizeStyle as Xl, Fragment as Te, renderList as Ie, withDirectives as kt, vModelCheckbox as Yl, withKeys as Kn, createStaticVNode as wl, vModelSelect as lo, useSlots as en, getCurrentInstance as Be, onMounted as tt, createSlots as tn, normalizeProps as jt, guardReactiveProps as gl, vModelDynamic as no, onUnmounted as Rt, watch as Lt, vModelText as so, resolveDynamicComponent as Zn, provide as Xt, resolveDirective as oo } from "vue";
import { errorResponseExcept as ao, dateFmt as Gn, toTime as io, omit as dt, enc as Hl, setQueryString as ro, appendQueryString as Kt, nameOf as uo, ApiResult as Je, lastRightPart as $t, leftPart as xl, map as qe, toDate as Vt, toDateTime as co, toCamelCase as fo, mapGet as ye, chop as mo, fromXsdDuration as Wn, isDate as kl, timeFmt12 as vo, apiValue as ho, indexOfAny as go, createBus as po, toKebabCase as En, humanize as He, delaySet as Jn, rightPart as dl, queryString as zl, combinePaths as yo, toPascalCase as st, errorResponse as mt, trimEnd as bo, $1 as pl, lastLeftPart as wo, ResponseStatus as Bl, ResponseError as Hn, HttpMethods as ln, uniqueKeys as Nl, humanify as Xn, each as xo } from "@servicestack/client";
const ko = { class: "flex items-center" }, $o = {
  key: 0,
  class: "flex-shrink-0 mr-3"
}, Co = {
  key: 0,
  class: "h-5 w-5 text-yellow-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, _o = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
  "clip-rule": "evenodd"
}, null, -1), Lo = [
  _o
], Vo = {
  key: 1,
  class: "h-5 w-5 text-red-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, So = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z",
  "clip-rule": "evenodd"
}, null, -1), Mo = [
  So
], Ao = {
  key: 2,
  class: "h-5 w-5 text-blue-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, To = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z",
  "clip-rule": "evenodd"
}, null, -1), Fo = [
  To
], Io = {
  key: 3,
  class: "h-5 w-5 text-green-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Do = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  "clip-rule": "evenodd"
}, null, -1), jo = [
  Do
], Oo = /* @__PURE__ */ ce({
  __name: "Alert",
  props: {
    type: { default: "warn" },
    hideIcon: { type: Boolean }
  },
  setup(e) {
    const t = e, l = f(() => t.type == "info" ? "bg-blue-50 dark:bg-blue-200" : t.type == "error" ? "bg-red-50 dark:bg-red-200" : t.type == "success" ? "bg-green-50 dark:bg-green-200" : "bg-yellow-50 dark:bg-yellow-200"), n = f(() => t.type == "info" ? "border-blue-400" : t.type == "error" ? "border-red-400" : t.type == "success" ? "border-green-400" : "border-yellow-400"), i = f(() => t.type == "info" ? "text-blue-700" : t.type == "error" ? "text-red-700" : t.type == "success" ? "text-green-700" : "text-yellow-700");
    return (r, d) => (a(), u("div", {
      class: w([o(l), o(n), "border-l-4 p-4"])
    }, [
      s("div", ko, [
        e.hideIcon ? k("", !0) : (a(), u("div", $o, [
          e.type == "warn" ? (a(), u("svg", Co, Lo)) : e.type == "error" ? (a(), u("svg", Vo, Mo)) : e.type == "info" ? (a(), u("svg", Ao, Fo)) : e.type == "success" ? (a(), u("svg", Io, jo)) : k("", !0)
        ])),
        s("div", null, [
          s("p", {
            class: w([o(i), "text-sm"])
          }, [
            Z(r.$slots, "default")
          ], 2)
        ])
      ])
    ], 2));
  }
}), Po = {
  key: 0,
  class: "rounded-md bg-green-50 dark:bg-green-200 p-4",
  role: "alert"
}, Bo = { class: "flex" }, Ro = /* @__PURE__ */ s("div", { class: "flex-shrink-0" }, [
  /* @__PURE__ */ s("svg", {
    class: "h-5 w-5 text-green-400 dark:text-green-500",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    /* @__PURE__ */ s("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 13l4 4L19 7"
    })
  ])
], -1), Eo = { class: "ml-3" }, Ho = { class: "text-sm font-medium text-green-800" }, zo = { key: 0 }, No = { class: "ml-auto pl-3" }, Uo = { class: "-mx-1.5 -my-1.5" }, qo = /* @__PURE__ */ s("span", { class: "sr-only" }, "Dismiss", -1), Qo = /* @__PURE__ */ s("svg", {
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
], -1), Ko = [
  qo,
  Qo
], Zo = /* @__PURE__ */ ce({
  __name: "AlertSuccess",
  props: {
    message: null
  },
  setup(e) {
    const t = A(!1);
    return (l, n) => t.value ? k("", !0) : (a(), u("div", Po, [
      s("div", Bo, [
        Ro,
        s("div", Eo, [
          s("h3", Ho, [
            e.message ? (a(), u("span", zo, T(e.message), 1)) : Z(l.$slots, "default", { key: 1 })
          ])
        ]),
        s("div", No, [
          s("div", Uo, [
            s("button", {
              type: "button",
              class: "inline-flex rounded-md bg-green-50 dark:bg-green-200 p-1.5 text-green-500 dark:text-green-600 hover:bg-green-100 dark:hover:bg-green-700 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50 dark:ring-offset-green-200",
              onClick: n[0] || (n[0] = (i) => t.value = !0)
            }, Ko)
          ])
        ])
      ])
    ]));
  }
}), Go = { class: "flex" }, Wo = /* @__PURE__ */ s("div", { class: "flex-shrink-0" }, [
  /* @__PURE__ */ s("svg", {
    class: "h-5 w-5 text-red-400",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ s("path", {
      fill: "currentColor",
      d: "M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12S6.47 2 12 2m3.59 5L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z"
    })
  ])
], -1), Jo = { class: "ml-3" }, Xo = { class: "text-sm text-red-700 dark:text-red-200" }, Yo = /* @__PURE__ */ ce({
  __name: "ErrorSummary",
  props: {
    status: null,
    except: null,
    class: null
  },
  setup(e) {
    const t = e;
    let l = Ne("ApiState", void 0);
    const n = f(() => t.status || l != null && l.error.value ? ao.call({ responseStatus: t.status ?? (l == null ? void 0 : l.error.value) }, t.except ?? []) : null);
    return (i, r) => o(n) ? (a(), u("div", {
      key: 0,
      class: w(`bg-red-50 dark:bg-red-900 border-l-4 border-red-400 p-4 ${i.$props.class}`)
    }, [
      s("div", Go, [
        Wo,
        s("div", Jo, [
          s("p", Xo, T(o(n)), 1)
        ])
      ])
    ], 2)) : k("", !0);
  }
}), ea = ["id", "aria-describedby"], ta = /* @__PURE__ */ ce({
  __name: "InputDescription",
  props: {
    id: null,
    description: null
  },
  setup(e) {
    return (t, l) => e.description ? (a(), u("div", {
      key: "description",
      class: "mt-2 text-sm text-gray-500",
      id: `${e.id}-description`,
      "aria-describedby": `${e.id}-description`
    }, [
      s("div", null, T(e.description), 1)
    ], 8, ea)) : k("", !0);
  }
});
function $l(e) {
  return Gn(e).replace(/\//g, "-");
}
function Yn(e) {
  return e == null ? "" : io(e);
}
function es(e, t) {
  e.value = null, xt(() => e.value = t);
}
function Tt(e) {
  return Object.keys(e).forEach((t) => {
    const l = e[t];
    e[t] = Qn(l) ? o(l) : l;
  }), e;
}
function Ct(e, t, l) {
  l ? (t.value = e.entering.cls + " " + e.entering.from, setTimeout(() => t.value = e.entering.cls + " " + e.entering.to, 0)) : (t.value = e.leaving.cls + " " + e.leaving.from, setTimeout(() => t.value = e.leaving.cls + " " + e.leaving.to, 0));
}
function cl(e) {
  if (typeof document > "u")
    return;
  let t = (e == null ? void 0 : e.after) || document.activeElement, l = t && t.form;
  if (l) {
    let n = ':not([disabled]):not([tabindex="-1"])', i = l.querySelectorAll(`a:not([disabled]), button${n}, input[type=text]${n}, [tabindex]${n}`), r = Array.prototype.filter.call(
      i,
      (c) => c.offsetWidth > 0 || c.offsetHeight > 0 || c === t
    ), d = r.indexOf(t);
    d > -1 && (r[d + 1] || r[0]).focus();
  }
}
function Et(e) {
  if (!e)
    return null;
  if (typeof e == "string")
    return e;
  const t = typeof e == "function" ? new e() : typeof e == "object" ? e : null;
  if (!t)
    throw new Error(`Invalid DTO Type '${typeof e}'`);
  if (typeof t.getTypeName != "function")
    throw new Error(`${JSON.stringify(t)} is not a Request DTO`);
  const l = t.getTypeName();
  if (!l)
    throw new Error("DTO Required");
  return l;
}
function rt(e, t, l) {
  l || (l = {});
  let n = l.cls || l.className || l.class;
  return n && (l = dt(l, ["cls", "class", "className"]), l.class = n), t == null ? `<${e}` + Ul(l) + "/>" : `<${e}` + Ul(l) + `>${t || ""}</${e}>`;
}
function Ul(e) {
  return Object.keys(e).reduce((t, l) => `${t} ${l}="${Hl(e[l])}"`, "");
}
function Cl(e) {
  return Object.assign({ target: "_blank", rel: "noopener", class: "text-blue-600" }, e);
}
function Dt(e) {
  return xn(e);
}
let la = ["string", "number", "boolean", "null", "undefined"];
function _t(e) {
  return la.indexOf(typeof e) >= 0 || e instanceof Date;
}
function Zt(e) {
  return !_t(e);
}
class ts {
  get length() {
    return typeof localStorage > "u" ? 0 : localStorage.length;
  }
  getItem(t) {
    return typeof localStorage > "u" ? null : localStorage.getItem(t);
  }
  setItem(t, l) {
    typeof localStorage > "u" || localStorage.setItem(t, l);
  }
  removeItem(t) {
    typeof localStorage > "u" || localStorage.removeItem(t);
  }
  clear() {
    typeof localStorage > "u" || localStorage.clear();
  }
  key(t) {
    return typeof localStorage > "u" ? null : localStorage.key(t);
  }
}
function yl(e) {
  return typeof e == "string" ? JSON.parse(e) : null;
}
function nn(e) {
  if (typeof history < "u") {
    const t = ro(location.href, e);
    history.pushState({}, "", t);
  }
}
function sn(e, t) {
  if (["function", "Function", "eval", "=>", ";"].some((i) => e.includes(i)))
    throw new Error(`Unsafe script: '${e}'`);
  const n = Object.assign(
    Object.keys(globalThis).reduce((i, r) => (i[r] = void 0, i), {}),
    t
  );
  return new Function("with(this) { return (" + e + ") }").call(n);
}
function ql(e) {
  typeof navigator < "u" && navigator.clipboard.writeText(e);
}
function on(e) {
  const t = ne.config.storage.getItem(e);
  return t ? JSON.parse(t) : null;
}
function _l(e, t) {
  return Kt(`swr.${uo(e)}`, t ? Object.assign({}, e, t) : e);
}
function na(e) {
  if (e.request) {
    const t = _l(e.request, e.args);
    ne.config.storage.removeItem(t);
  }
}
async function ls(e, t, l, n, i) {
  const r = _l(t, n);
  l(new Je({ response: on(r) }));
  const d = await e.api(t, n, i);
  if (d.succeeded && d.response) {
    d.response._date = (/* @__PURE__ */ new Date()).valueOf();
    const c = JSON.stringify(d.response);
    ne.config.storage.setItem(r, c), l(d);
  }
  return d;
}
function ns(e, t) {
  let l = null;
  return (...n) => {
    l && clearTimeout(l), l = setTimeout(() => {
      e(...n);
    }, t || 100);
  };
}
function pt(e) {
  return typeof e == "string" ? e.split(",") : e || [];
}
function wt(e, t) {
  const l = pt(t);
  return e.reduce((n, i) => (n[i] = !l.includes(i), n), {});
}
function ss() {
  return {
    LocalStore: ts,
    dateInputFormat: $l,
    timeInputFormat: Yn,
    setRef: es,
    unRefs: Tt,
    transition: Ct,
    focusNextElement: cl,
    getTypeName: Et,
    htmlTag: rt,
    htmlAttrs: Ul,
    linkAttrs: Cl,
    toAppUrl: Dt,
    isPrimitive: _t,
    isComplexType: Zt,
    pushState: nn,
    scopedExpr: sn,
    copyText: ql,
    fromCache: on,
    swrCacheKey: _l,
    swrClear: na,
    swrApi: ls,
    asStrings: pt,
    asOptions: wt,
    createDebounce: ns
  };
}
const os = "png,jpg,jpeg,jfif,gif,svg,webp".split(","), as = {
  img: "png,jpg,jpeg,gif,svg,webp,png,jpg,jpeg,gif,bmp,tif,tiff,webp,ai,psd,ps".split(","),
  vid: "avi,m4v,mov,mp4,mpg,mpeg,wmv,webm".split(","),
  aud: "mp3,mpa,ogg,wav,wma,mid,webm".split(","),
  ppt: "key,odp,pps,ppt,pptx".split(","),
  xls: "xls,xlsm,xlsx,ods,csv,tsv".split(","),
  doc: "doc,docx,pdf,rtf,tex,txt,md,rst,xls,xlsm,xlsx,ods,key,odp,pps,ppt,pptx".split(","),
  zip: "zip,tar,gz,7z,rar,gzip,deflate,br,iso,dmg,z,lz,lz4,lzh,s7z,apl,arg,jar,war".split(","),
  exe: "exe,bat,sh,cmd,com,app,msi,run,vb,vbs,js,ws,wsh".split(","),
  att: "bin,oct,dat".split(",")
  //attachment
}, zn = Object.keys(as), ft = (e, t) => `<svg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' role='img' preserveAspectRatio='xMidYMid meet' viewBox='${e}'>${t}</svg>`, fl = {
  img: ft("4 4 16 16", "<path fill='currentColor' d='M20 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-2 0H6v6.38l2.19-2.19l5.23 5.23l1-1a1.59 1.59 0 0 1 2.11.11L18 16V6zm-5 3.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0z'/>"),
  vid: ft("0 0 24 24", "<path fill='currentColor' d='m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8m4 18V9h-5V4H6v16h12m-2-2l-2.5-1.7V18H8v-5h5.5v1.7L16 13v5Z'/>"),
  aud: ft("0 0 24 24", "<path fill='currentColor' d='M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6zm10-9h-4v3.88a2.247 2.247 0 0 0-3.5 1.87c0 1.24 1.01 2.25 2.25 2.25S13 17.99 13 16.75V13h3v-2z'/>"),
  ppt: ft("0 0 48 48", "<g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'><path d='M4 8h40'/><path d='M8 8h32v26H8V8Z' clip-rule='evenodd'/><path d='m22 16l5 5l-5 5m-6 16l8-8l8 8'/></g>"),
  xls: ft("0 0 256 256", "<path fill='currentColor' d='M200 26H72a14 14 0 0 0-14 14v26H40a14 14 0 0 0-14 14v96a14 14 0 0 0 14 14h18v26a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14Zm-42 76h44v52h-44Zm44-62v50h-44V80a14 14 0 0 0-14-14h-2V38h58a2 2 0 0 1 2 2ZM70 40a2 2 0 0 1 2-2h58v28H70ZM38 176V80a2 2 0 0 1 2-2h104a2 2 0 0 1 2 2v96a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2Zm32 40v-26h60v28H72a2 2 0 0 1-2-2Zm130 2h-58v-28h2a14 14 0 0 0 14-14v-10h44v50a2 2 0 0 1-2 2ZM69.2 148.4L84.5 128l-15.3-20.4a6 6 0 1 1 9.6-7.2L92 118l13.2-17.6a6 6 0 0 1 9.6 7.2L99.5 128l15.3 20.4a6 6 0 0 1-9.6 7.2L92 138l-13.2 17.6a6 6 0 1 1-9.6-7.2Z'/>"),
  doc: ft("0 0 32 32", "<path fill='currentColor' d='M26 30H11a2.002 2.002 0 0 1-2-2v-6h2v6h15V6h-9V4h9a2.002 2.002 0 0 1 2 2v22a2.002 2.002 0 0 1-2 2Z'/><path fill='currentColor' d='M17 10h7v2h-7zm-1 5h8v2h-8zm-1 5h9v2h-9zm-6-1a5.005 5.005 0 0 1-5-5V3h2v11a3 3 0 0 0 6 0V5a1 1 0 0 0-2 0v10H8V5a3 3 0 0 1 6 0v9a5.005 5.005 0 0 1-5 5z'/>"),
  zip: ft("0 0 16 16", "<g fill='currentColor'><path d='M6.5 7.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v.938l.4 1.599a1 1 0 0 1-.416 1.074l-.93.62a1 1 0 0 1-1.109 0l-.93-.62a1 1 0 0 1-.415-1.074l.4-1.599V7.5zm2 0h-1v.938a1 1 0 0 1-.03.243l-.4 1.598l.93.62l.93-.62l-.4-1.598a1 1 0 0 1-.03-.243V7.5z'/><path d='M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm5.5-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9v1H8v1h1v1H8v1h1v1H7.5V5h-1V4h1V3h-1V2h1V1z'/></g>"),
  exe: ft("0 0 16 16", "<path fill='currentColor' fill-rule='evenodd' d='M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM2.575 15.202H.785v-1.073H2.47v-.606H.785v-1.025h1.79v-.648H0v3.999h2.575v-.647ZM6.31 11.85h-.893l-.823 1.439h-.036l-.832-1.439h-.931l1.227 1.983l-1.239 2.016h.861l.853-1.415h.035l.85 1.415h.908l-1.254-1.992L6.31 11.85Zm1.025 3.352h1.79v.647H6.548V11.85h2.576v.648h-1.79v1.025h1.684v.606H7.334v1.073Z'/>"),
  att: ft("0 0 24 24", "<path fill='currentColor' d='M14 0a5 5 0 0 1 5 5v12a7 7 0 1 1-14 0V9h2v8a5 5 0 0 0 10 0V5a3 3 0 1 0-6 0v12a1 1 0 1 0 2 0V6h2v11a3 3 0 1 1-6 0V5a5 5 0 0 1 5-5Z'/>")
}, sa = /[\r\n%#()<>?[\\\]^`{|}]/g, Nn = 1024, oa = ["Bytes", "KB", "MB", "GB", "TB"], aa = (() => {
  const e = "application/", t = e + "vnd.openxmlformats-officedocument.", l = "image/", n = "text/", i = "audio/", r = "video/", d = {
    jpg: l + "jpeg",
    tif: l + "tiff",
    svg: l + "svg+xml",
    ico: l + "x-icon",
    ts: n + "typescript",
    py: n + "x-python",
    sh: n + "x-sh",
    mp3: i + "mpeg3",
    mpg: r + "mpeg",
    ogv: r + "ogg",
    xlsx: t + "spreadsheetml.sheet",
    xltx: t + "spreadsheetml.template",
    docx: t + "wordprocessingml.document",
    dotx: t + "wordprocessingml.template",
    pptx: t + "presentationml.presentation",
    potx: t + "presentationml.template",
    ppsx: t + "presentationml.slideshow",
    mdb: e + "vnd.ms-access"
  };
  function c(m, y) {
    m.split(",").forEach((b) => d[b] = y);
  }
  function h(m, y) {
    m.split(",").forEach((b) => d[b] = y(b));
  }
  return h("jpeg,gif,png,tiff,bmp,webp", (m) => l + m), h("jsx,csv,css", (m) => n + m), h("aac,ac3,aiff,m4a,m4b,m4p,mid,midi,wav", (m) => i + m), h("3gpp,avi,dv,divx,ogg,mp4,webm", (m) => r + m), h("rtf,pdf", (m) => e + m), c("htm,html,shtm", n + "html"), c("js,mjs,cjs", n + "javascript"), c("yml,yaml", e + "yaml"), c("bat,cmd", e + "bat"), c("xml,csproj,fsproj,vbproj", n + "xml"), c("txt,ps1", n + "plain"), c("qt,mov", r + "quicktime"), c("doc,dot", e + "msword"), c("xls,xlt,xla", e + "excel"), c("ppt,oit,pps,ppa", e + "vnd.ms-powerpoint"), c("cer,crt,der", e + "x-x509-ca-cert"), c("gz,tgz,zip,rar,lzh,z", e + "x-compressed"), c("aaf,aca,asd,bin,cab,chm,class,cur,db,dat,deploy,dll,dsp,exe,fla,ics,inf,mix,msi,mso,obj,ocx,prm,prx,psd,psp,qxd,sea,snp,so,sqlite,toc,ttf,u32,xmp,xsn,xtp", e + "octet-stream"), d;
})();
let Ql = [];
function is(e) {
  return e = e.replace(/"/g, "'"), e = e.replace(/>\s+</g, "><"), e = e.replace(/\s{2,}/g, " "), e.replace(sa, encodeURIComponent);
}
function an(e) {
  return "data:image/svg+xml;utf8," + is(e);
}
function rs(e) {
  let t = URL.createObjectURL(e);
  return Ql.push(t), t;
}
function us() {
  Ql.forEach((e) => {
    try {
      URL.revokeObjectURL(e);
    } catch (t) {
      console.error("URL.revokeObjectURL", t);
    }
  }), Ql = [];
}
function rn(e) {
  if (!e)
    return null;
  let t = xl(e, "?");
  return $t(t, "/");
}
function Yt(e) {
  let t = rn(e);
  return t == null || t.indexOf(".") === -1 ? null : $t(t, ".").toLowerCase();
}
function un(e) {
  let t = Yt(e.name);
  return t && os.indexOf(t) >= 0 ? rs(e) : yt(e.name);
}
function dn(e) {
  if (!e)
    return !1;
  if (e.startsWith("blob:") || e.startsWith("data:"))
    return !0;
  let t = Yt(e);
  return t && os.indexOf(t) >= 0 || !1;
}
function yt(e) {
  if (!e)
    return null;
  let t = Yt(e);
  return t == null || dn(e) ? e : Qt(t) || an(fl.doc);
}
function Qt(e) {
  let t = ds(e);
  return t && an(t) || null;
}
function ds(e) {
  if (fl[e])
    return fl[e];
  for (let t = 0; t < zn.length; t++) {
    let l = zn[t];
    if (as[l].indexOf(e) >= 0)
      return fl[l];
  }
  return null;
}
function cn(e, t = 2) {
  if (e === 0)
    return "0 Bytes";
  const l = t < 0 ? 0 : t, n = Math.floor(Math.log(e) / Math.log(Nn));
  return parseFloat((e / Math.pow(Nn, n)).toFixed(l)) + " " + oa[n];
}
function ia(e) {
  return e.files && Array.from(e.files).map((t) => ({ fileName: t.name, contentLength: t.size, filePath: un(t) }));
}
function Ll(e, t) {
  e.onerror = null, e.src = fn(e.src, t) || "";
}
function fn(e, t) {
  return Qt($t(e, ".").toLowerCase()) || (t ? Qt(t) || t : null) || Qt("doc");
}
function Kl(e) {
  if (!e)
    throw new Error("fileNameOrExt required");
  const t = $t(e, ".").toLowerCase();
  return aa[t] || "application/" + t;
}
function bh() {
  return {
    extSvg: ds,
    extSrc: Qt,
    getExt: Yt,
    encodeSvg: is,
    canPreview: dn,
    getFileName: rn,
    getMimeType: Kl,
    formatBytes: cn,
    filePathUri: yt,
    svgToDataUri: an,
    fileImageUri: un,
    objectUrl: rs,
    flush: us,
    inputFiles: ia,
    iconOnError: Ll,
    iconFallbackSrc: fn
  };
}
class ra {
  constructor(t) {
    Ce(this, "view");
    Ce(this, "includeTypes");
    Object.assign(this, t);
  }
  getTypeName() {
    return "MetadataApp";
  }
  getMethod() {
    return "GET";
  }
  createResponse() {
    return {};
  }
}
const Ot = "/metadata/app.json", ua = {
  Boolean: "checkbox",
  DateTime: "date",
  DateOnly: "date",
  DateTimeOffset: "date",
  TimeSpan: "time",
  TimeOnly: "time",
  Byte: "number",
  Short: "number",
  Int64: "number",
  Int32: "number",
  UInt16: "number",
  UInt32: "number",
  UInt64: "number",
  Single: "number",
  Double: "number",
  Decimal: "number",
  String: "text",
  Guid: "text",
  Uri: "text"
}, da = {
  number: "Int32",
  checkbox: "Boolean",
  date: "DateTime",
  "datetime-local": "DateTime",
  time: "TimeSpan"
}, Zl = {
  Byte: "byte",
  Int16: "short",
  Int32: "int",
  Int64: "long",
  UInt16: "ushort",
  Unt32: "uint",
  UInt64: "ulong",
  Single: "float",
  Double: "double",
  Decimal: "decimal"
};
[...Object.keys(Zl), ...Object.values(Zl)];
const ca = {
  String: "string",
  Boolean: "bool",
  ...Zl
};
function rl(e) {
  return ca[e] || e;
}
function cs(e, t) {
  return e ? (t || (t = []), e === "Nullable`1" ? rl(t[0]) + "?" : e.endsWith("[]") ? `List<${rl(e.substring(0, e.length - 2))}>` : t.length === 0 ? rl(e) : xl(rl(e), "`") + "<" + t.join(",") + ">") : "";
}
function fa(e) {
  return e && cs(e.name, e.genericArgs);
}
class Pt {
  constructor() {
    Ce(this, "Query");
    Ce(this, "QueryInto");
    Ce(this, "Create");
    Ce(this, "Update");
    Ce(this, "Patch");
    Ce(this, "Delete");
  }
  get AnyQuery() {
    return this.Query || this.QueryInto;
  }
  get AnyUpdate() {
    return this.Patch || this.Update;
  }
  toArray() {
    return [this.Query, this.QueryInto, this.Create, this.Update, this.Patch, this.Delete].filter((l) => !!l).map((l) => l);
  }
  get empty() {
    return !this.Query && !this.QueryInto && !this.Create && !this.Update && !this.Patch && !this.Delete;
  }
  add(t) {
    ze.isQueryInto(t) && !this.QueryInto ? this.QueryInto = t : ze.isQuery(t) && !this.Query ? this.Query = t : ze.isCreate(t) && !this.Create ? this.Create = t : ze.isUpdate(t) && !this.Update ? this.Update = t : ze.isPatch(t) && !this.Patch ? this.Patch = t : ze.isDelete(t) && !this.Delete && (this.Delete = t);
  }
  static from(t) {
    const l = new Pt();
    return t.forEach((n) => {
      l.add(n);
    }), l;
  }
  static forType(t, l) {
    var i;
    let n = new Pt();
    return t && (l ?? (l = (i = ne.metadata.value) == null ? void 0 : i.api), l == null || l.operations.forEach((r) => {
      var d;
      ((d = r.dataModel) == null ? void 0 : d.name) == t && n.add(r);
    })), n;
  }
}
const ze = {
  Create: "ICreateDb`1",
  Update: "IUpdateDb`1",
  Patch: "IPatchDb`1",
  Delete: "IDeleteDb`1",
  AnyRead: ["QueryDb`1", "QueryDb`2"],
  AnyWrite: ["ICreateDb`1", "IUpdateDb`1", "IPatchDb`1", "IDeleteDb`1"],
  isAnyQuery: (e) => qe(e.request.inherits, (t) => ze.AnyRead.indexOf(t.name) >= 0),
  isQuery: (e) => qe(e.request.inherits, (t) => t.name === "QueryDb`1"),
  isQueryInto: (e) => qe(e.request.inherits, (t) => t.name === "QueryDb`2"),
  isCrud: (e) => {
    var t;
    return (t = e.request.implements) == null ? void 0 : t.some((l) => ze.AnyWrite.indexOf(l.name) >= 0);
  },
  isCreate: (e) => ul(e, ze.Create),
  isUpdate: (e) => ul(e, ze.Update),
  isPatch: (e) => ul(e, ze.Patch),
  isDelete: (e) => ul(e, ze.Delete),
  model: (e) => {
    var t, l, n;
    return e ? qe(e.inherits, (i) => ze.AnyRead.indexOf(i.name) >= 0) ? (t = e.inherits) == null ? void 0 : t.genericArgs[0] : (n = (l = e.implements) == null ? void 0 : l.find((i) => ze.AnyWrite.indexOf(i.name) >= 0)) == null ? void 0 : n.genericArgs[0] : null;
  }
};
function ma(e) {
  var t;
  return ((t = e.input) == null ? void 0 : t.type) || Vl(mn(e));
}
function fs(e) {
  return e.endsWith("?") ? mo(e, 1) : e;
}
function Vl(e) {
  return ua[fs(e)];
}
function va(e) {
  return e && da[e] || "String";
}
function mn(e) {
  return e.type === "Nullable`1" ? e.genericArgs[0] : e.type;
}
function Gl(e) {
  return e && Vl(e) == "number" || !1;
}
function ms(e) {
  return e && e.toLowerCase() == "string" || !1;
}
function ha(e) {
  return e == "List`1" || e.startsWith("List<") || e.endsWith("[]");
}
function vs(e) {
  if (!(e != null && e.type))
    return !1;
  const t = mn(e);
  return e.isValueType && t.indexOf("`") == -1 || e.isEnum ? !1 : Vl(e.type) == null;
}
function hs(e) {
  var l, n, i, r;
  if (!(e != null && e.type))
    return !1;
  const t = mn(e);
  return e.isValueType && t.indexOf("`") == -1 || e.isEnum || ((l = e.input) == null ? void 0 : l.type) == "hidden" || ((n = e.input) == null ? void 0 : n.type) == "file" || ((i = e.input) == null ? void 0 : i.type) == "tag" || ((r = e.input) == null ? void 0 : r.type) == "combobox" ? !0 : Vl(e.type) != null;
}
function Gt(e, t) {
  let l = typeof e == "string" ? Sl(e) : e;
  l || (console.warn(`Metadata not found for: ${e}`), l = { request: { name: e } });
  let n = (
    /** @class */
    function() {
      return function(r) {
        Object.assign(this, r);
      };
    }()
  ), i = (
    /** @class */
    function() {
      function r(d) {
        Object.assign(this, d);
      }
      return r.prototype.createResponse = function() {
        return l.returnsVoid ? void 0 : new n();
      }, r.prototype.getTypeName = function() {
        return l.request.name;
      }, r.prototype.getMethod = function() {
        return l.method || "POST";
      }, r;
    }()
  );
  return new i(t);
}
function ga(e, t, l = {}) {
  let n = (
    /** @class */
    function() {
      return function(r) {
        Object.assign(this, r);
      };
    }()
  ), i = (
    /** @class */
    function() {
      function r(d) {
        Object.assign(this, d);
      }
      return r.prototype.createResponse = function() {
        return typeof l.createResponse == "function" ? l.createResponse() : new n();
      }, r.prototype.getTypeName = function() {
        return e;
      }, r.prototype.getMethod = function() {
        return l.method || "POST";
      }, r;
    }()
  );
  return new i(t);
}
function ml(e, t) {
  return e ? (Object.keys(e).forEach((l) => {
    let n = e[l];
    typeof n == "string" ? n.startsWith("/Date") && (e[l] = $l(Vt(n))) : typeof n == "object" && (Array.isArray(n) ? e[l] = Array.from(n) : e[l] = Object.assign({}, n));
  }), e) : {};
}
function pa(e, t) {
  let l = {};
  return Array.from(e.elements).forEach((n) => {
    var y;
    let i = n;
    if (!i.id || i.value == null || i.value === "")
      return;
    const r = i.id.toLowerCase(), d = t && t.find((b) => b.name.toLowerCase() == r);
    let c = d == null ? void 0 : d.type, h = (y = d == null ? void 0 : d.genericArgs) == null ? void 0 : y[0], m = i.type === "checkbox" ? i.checked : i.value;
    Gl(c) ? m = Number(m) : c === "List`1" && typeof m == "string" && (m = m.split(",").map((b) => Gl(h) ? Number(b) : b)), l[i.id] = m;
  }), l;
}
function vn(e) {
  var t;
  return ((t = e == null ? void 0 : e.api) == null ? void 0 : t.operations) && e.api.operations.length > 0;
}
function ya(e) {
  if (e != null && e.assert && !ne.metadata.value)
    throw new Error("useMetadata() not configured, see: https://docs.servicestack.net/vue/use-metadata");
  return ne.metadata.value;
}
function Wt(e) {
  return e && vn(e) ? (e.date = co(/* @__PURE__ */ new Date()), ne.metadata.value = e, typeof localStorage < "u" && localStorage.setItem(Ot, JSON.stringify(e)), !0) : !1;
}
function ba() {
  ne.metadata.value = null, typeof localStorage < "u" && localStorage.removeItem(Ot);
}
function gs() {
  if (ne.metadata.value != null)
    return !0;
  let e = globalThis.Server;
  if (vn(e))
    Wt(e);
  else {
    const t = typeof localStorage < "u" ? localStorage.getItem(Ot) : null;
    if (t)
      try {
        Wt(JSON.parse(t));
      } catch {
        console.error(`Could not JSON.parse ${Ot} from localStorage`);
      }
  }
  return ne.metadata.value != null;
}
async function Un(e, t) {
  let l = t ? await t() : await fetch(e);
  if (l.ok) {
    let n = await l.text();
    Wt(JSON.parse(n));
  } else
    console.error(`Could not download ${t ? "AppMetadata" : e}: ${l.statusText}`);
  vn(ne.metadata.value) || console.warn("AppMetadata is not available");
}
async function wa(e) {
  var r;
  const { olderThan: t, resolvePath: l, resolve: n } = e || {};
  let i = gs() && t !== 0;
  if (i && t) {
    let d = Vt((r = ne.metadata.value) == null ? void 0 : r.date);
    (!d || (/* @__PURE__ */ new Date()).getTime() - d.getTime() > t) && (i = !1);
  }
  if (!i) {
    if ((l || n) && (await Un(l || Ot, n), ne.metadata.value != null))
      return;
    const d = Ne("client");
    if (d != null) {
      const c = await d.api(new ra());
      c.succeeded && Wt(c.response);
    }
    if (ne.metadata.value != null)
      return;
    await Un(Ot);
  }
  return ne.metadata.value;
}
function ot(e, t) {
  var d;
  let l = (d = ne.metadata.value) == null ? void 0 : d.api;
  if (!l || !e)
    return null;
  let n = l.types.find((c) => c.name.toLowerCase() === e.toLowerCase() && (!t || c.namespace == t));
  if (n)
    return n;
  let i = Sl(e);
  if (i)
    return i.request;
  let r = l.operations.find((c) => c.response && c.response.name.toLowerCase() === e.toLowerCase() && (!t || c.response.namespace == t));
  return r ? r.response : null;
}
function Sl(e) {
  var n;
  let t = (n = ne.metadata.value) == null ? void 0 : n.api;
  return t ? t.operations.find((i) => i.request.name.toLowerCase() === e.toLowerCase()) : null;
}
function xa({ dataModel: e }) {
  var n;
  const t = (n = ne.metadata.value) == null ? void 0 : n.api;
  if (!t)
    return [];
  let l = t.operations;
  if (e) {
    const i = typeof e == "string" ? ot(e) : e;
    l = l.filter((r) => ps(r.dataModel, i));
  }
  return l;
}
function hn(e) {
  return e ? ot(e.name, e.namespace) : null;
}
function ps(e, t) {
  return e && t && e.name === t.name && (!e.namespace || !t.namespace || e.namespace === t.namespace);
}
function ka(e, t) {
  let l = ot(e);
  return l && l.properties && l.properties.find((i) => i.name.toLowerCase() === t.toLowerCase());
}
function ys(e) {
  return bs(ot(e));
}
function bs(e) {
  if (e && e.isEnum && e.enumNames != null) {
    let t = {};
    for (let l = 0; l < e.enumNames.length; l++) {
      const n = (e.enumDescriptions ? e.enumDescriptions[l] : null) || e.enumNames[l], i = (e.enumValues != null ? e.enumValues[l] : null) || e.enumNames[l];
      t[i] = n;
    }
    return t;
  }
  return null;
}
function ws(e) {
  if (!e)
    return null;
  let t = {}, l = e.input && e.input.allowableEntries;
  if (l) {
    for (let i = 0; i < l.length; i++) {
      let r = l[i];
      t[r.key] = r.value;
    }
    return t;
  }
  let n = e.allowableValues || (e.input ? e.input.allowableValues : null);
  if (n) {
    for (let i = 0; i < n.length; i++) {
      let r = n[i];
      t[r] = r;
    }
    return t;
  }
  if (e.isEnum) {
    const i = e.genericArgs && e.genericArgs.length == 1 ? e.genericArgs[0] : e.type, r = ot(i);
    if (r)
      return bs(r);
  }
  return null;
}
function gn(e) {
  if (!e)
    return;
  const t = [];
  return Object.keys(e).forEach((l) => t.push({ key: l, value: e[l] })), t;
}
function $a(e, t) {
  const n = ((i, r) => Object.assign({
    id: i,
    name: i,
    type: r
  }, t))(e.name, (t == null ? void 0 : t.type) || ma(e) || "text");
  return e.isEnum && (n.type = "select", n.allowableEntries = gn(ws(e))), n;
}
function Ca(e) {
  let t = [];
  if (e) {
    const l = et(e), n = Sl(e.name), i = hn(n == null ? void 0 : n.dataModel);
    l.forEach((r) => {
      var c, h, m;
      if (!hs(r))
        return;
      const d = $a(r, r.input);
      if (d.id = fo(d.id), d.type == "file" && r.uploadTo && !d.accept) {
        const y = (h = (c = ne.metadata.value) == null ? void 0 : c.plugins.filesUpload) == null ? void 0 : h.locations.find((b) => b.name == r.uploadTo);
        y && !d.accept && y.allowExtensions && (d.accept = y.allowExtensions.map((b) => b.startsWith(".") ? b : `.${b}`).join(","));
      }
      if (i) {
        const y = (m = i.properties) == null ? void 0 : m.find((b) => b.name == r.name);
        r.ref || (r.ref = y == null ? void 0 : y.ref);
      }
      if (d.options)
        try {
          const y = {
            input: d,
            $typeFields: l.map((p) => p.name),
            $dataModelFields: i ? et(i).map((p) => p.name) : [],
            ...ne.config.scopeWhitelist
          }, b = sn(d.options, y);
          Object.keys(b).forEach((p) => {
            d[p] = b[p];
          });
        } catch {
          console.error(`failed to evaluate '${d.options}'`);
        }
      t.push(d);
    });
  }
  return t;
}
function pn(e, t) {
  var i, r;
  if (!t.type)
    return console.error("enumDescriptions missing {type:'EnumType'} options"), [`${e}`];
  const l = ot(t.type);
  if (!(l != null && l.enumValues))
    return console.error(`Could not find metadata for ${t.type}`), [`${e}`];
  const n = [];
  for (let d = 0; d < l.enumValues.length; d++) {
    const c = parseInt(l.enumValues[d]);
    c > 0 && (c & e) === c && n.push(((i = l.enumDescriptions) == null ? void 0 : i[d]) || ((r = l.enumNames) == null ? void 0 : r[d]) || `${e}`);
  }
  return n;
}
function xs(e) {
  return (t) => typeof t == "number" ? pn(t, { type: e }) : t;
}
function et(e) {
  if (!e)
    return [];
  let t = [], l = {};
  function n(i) {
    i.forEach((r) => {
      l[r.name] || (l[r.name] = 1, t.push(r));
    });
  }
  for (; e; )
    e.properties && n(e.properties), e = e.inherits ? hn(e.inherits) : null;
  return t.map((i) => i.type.endsWith("[]") ? { ...i, type: "List`1", genericArgs: [i.type.substring(0, i.type.length - 2)] } : i);
}
function ul(e, t) {
  var l;
  return ((l = e.request.implements) == null ? void 0 : l.some((n) => n.name === t)) || !1;
}
function el(e) {
  return e ? ks(e, et(e)) : null;
}
function ks(e, t) {
  let l = t.find((r) => r.name.toLowerCase() === "id");
  if (l && l.isPrimaryKey)
    return l;
  let i = t.find((r) => r.isPrimaryKey) || l;
  if (!i) {
    let r = ze.model(e);
    if (r)
      return qe(ot(r), (d) => el(d));
    console.error(`Primary Key not found in ${e.name}`);
  }
  return i || null;
}
function _a(e, t) {
  return qe(el(e), (l) => ye(t, l.name));
}
function $s(e, t, l) {
  return e && e.valueType === "none" ? "" : l.key === "%In" || l.key === "%Between" ? `(${l.value})` : La(t, l.value);
}
function La(e, t) {
  return e ? (e = fs(e), Gl(e) || e === "Boolean" ? t : ha(e) ? `[${t}]` : `'${t}'`) : t;
}
function at() {
  const e = f(() => {
    var n;
    return ((n = ne.metadata.value) == null ? void 0 : n.app) || null;
  }), t = f(() => {
    var n;
    return ((n = ne.metadata.value) == null ? void 0 : n.api) || null;
  }), l = f(() => {
    var n;
    return ((n = ne.metadata.value) == null ? void 0 : n.plugins.autoQuery.viewerConventions) || [];
  });
  return gs(), {
    loadMetadata: wa,
    getMetadata: ya,
    setMetadata: Wt,
    clearMetadata: ba,
    metadataApp: e,
    metadataApi: t,
    filterDefinitions: l,
    typeOf: ot,
    typeOfRef: hn,
    typeEquals: ps,
    apiOf: Sl,
    findApis: xa,
    typeName: fa,
    typeName2: cs,
    property: ka,
    enumOptions: ys,
    propertyOptions: ws,
    createFormLayout: Ca,
    typeProperties: et,
    supportsProp: hs,
    Crud: ze,
    Apis: Pt,
    getPrimaryKey: el,
    getPrimaryKeyByProps: ks,
    getId: _a,
    createDto: Gt,
    makeDto: ga,
    toFormValues: ml,
    formValues: pa,
    isComplexProp: vs,
    asKvps: gn,
    expandEnumFlags: pn,
    enumFlagsConverter: xs
  };
}
const Xe = class Xe {
  static async getOrFetchValue(t, l, n, i, r, d, c) {
    const h = Xe.getValue(n, c, r);
    return h ?? (await Xe.fetchLookupIds(t, l, n, i, r, d, [c]), Xe.getValue(n, c, r));
  }
  static getValue(t, l, n) {
    const i = Xe.Lookup[t];
    if (i) {
      const r = i[l];
      if (r)
        return n = n.toLowerCase(), r[n];
    }
  }
  static setValue(t, l, n, i) {
    const r = Xe.Lookup[t] ?? (Xe.Lookup[t] = {}), d = r[l] ?? (r[l] = {});
    n = n.toLowerCase(), d[n] = i;
  }
  static setRefValue(t, l) {
    const n = ye(l, t.refId);
    if (n == null || t.refLabel == null)
      return null;
    const i = ye(l, t.refLabel);
    return Xe.setValue(t.model, n, t.refLabel, i), i;
  }
  static async fetchLookupIds(t, l, n, i, r, d, c) {
    const h = l.operations.find((m) => {
      var y;
      return ze.isAnyQuery(m) && ((y = m.dataModel) == null ? void 0 : y.name) == n;
    });
    if (h) {
      const m = Xe.Lookup[n] ?? (Xe.Lookup[n] = {}), y = [];
      Object.keys(m).forEach((N) => {
        const ee = m[N];
        ye(ee, r) && y.push(N);
      });
      const b = c.filter((N) => !y.includes(N));
      if (b.length == 0)
        return;
      const p = d ? null : `${i},${r}`, v = {
        [i + "In"]: b.join(",")
      };
      p && (v.fields = p);
      const g = Gt(h, v), O = await t.api(g, { jsconfig: "edv,eccn" });
      if (O.succeeded)
        (ye(O.response, "results") || []).forEach((ee) => {
          if (!ye(ee, i)) {
            console.error(`result[${i}] == null`, ee);
            return;
          }
          const P = `${ye(ee, i)}`, z = ye(ee, r);
          r = r.toLowerCase();
          const F = m[P] ?? (m[P] = {});
          F[r] = `${z}`;
        });
      else {
        console.error(`Failed to call ${h.request.name}`);
        return;
      }
    }
  }
};
Ce(Xe, "Lookup", {});
let Ft = Xe, Wl = () => (/* @__PURE__ */ new Date()).getTime(), Va = ["/", "T", ":", "-"], ut = {
  //locale: null,
  assumeUtc: !0,
  //number: null,
  date: {
    method: "Intl.DateTimeFormat",
    options: "{dateStyle:'medium'}"
  },
  maxFieldLength: 150,
  maxNestedFields: 2,
  maxNestedFieldLength: 30
}, Sa = new Intl.RelativeTimeFormat(ut.locale, {}), qn = 24 * 60 * 60 * 1e3 * 365, Rl = {
  year: qn,
  month: qn / 12,
  day: 24 * 60 * 60 * 1e3,
  hour: 60 * 60 * 1e3,
  minute: 60 * 1e3,
  second: 1e3
}, bt = {
  currency: _s,
  bytes: Ls,
  link: Vs,
  linkTel: Ss,
  linkMailTo: Ms,
  icon: As,
  iconRounded: Ts,
  attachment: Fs,
  hidden: Is,
  time: Ds,
  relativeTime: bn,
  relativeTimeFromMs: Ml,
  enumFlags: Os,
  formatDate: Ht,
  formatNumber: yn
};
"iconOnError" in globalThis || (globalThis.iconOnError = Ll);
class Ke {
}
Ce(Ke, "currency", { method: "currency" }), Ce(Ke, "bytes", { method: "bytes" }), Ce(Ke, "link", { method: "link" }), Ce(Ke, "linkTel", { method: "linkTel" }), Ce(Ke, "linkMailTo", { method: "linkMailTo" }), Ce(Ke, "icon", { method: "icon" }), Ce(Ke, "iconRounded", { method: "iconRounded" }), Ce(Ke, "attachment", { method: "attachment" }), Ce(Ke, "time", { method: "time" }), Ce(Ke, "relativeTime", { method: "relativeTime" }), Ce(Ke, "relativeTimeFromMs", { method: "relativeTimeFromMs" }), Ce(Ke, "date", { method: "formatDate" }), Ce(Ke, "number", { method: "formatNumber" }), Ce(Ke, "hidden", { method: "hidden" }), Ce(Ke, "enumFlags", { method: "enumFlags" });
function Ma(e) {
  ut = Object.assign({}, ut, e);
}
function Aa(e) {
  Object.keys(e || {}).forEach((t) => {
    typeof e[t] == "function" && (bt[t] = e[t]);
  });
}
function Cs() {
  return bt;
}
function tl(e, t) {
  return t ? rt("span", e, t) : e;
}
function _s(e, t) {
  const l = dt(t, ["currency"]);
  return tl(new Intl.NumberFormat(void 0, { style: "currency", currency: (t == null ? void 0 : t.currency) || "USD" }).format(e), l);
}
function Ls(e, t) {
  return tl(cn(e), t);
}
function Vs(e, t) {
  return rt("a", e, Cl({ ...t, href: e }));
}
function Ss(e, t) {
  return rt("a", e, Cl({ ...t, href: `tel:${e}` }));
}
function Ms(e, t) {
  t || (t = {});
  let { subject: l, body: n } = t, i = dt(t, ["subject", "body"]), r = {};
  return l && (r.subject = l), n && (r.body = n), rt("a", e, Cl({ ...i, href: `mailto:${Kt(e, r)}` }));
}
function As(e, t) {
  return rt("img", void 0, Object.assign({ class: "w-6 h-6", title: e, src: Dt(e), onerror: "iconOnError(this)" }, t));
}
function Ts(e, t) {
  return rt("img", void 0, Object.assign({ class: "w-8 h-8 rounded-full", title: e, src: Dt(e), onerror: "iconOnError(this)" }, t));
}
function Fs(e, t) {
  let l = rn(e), i = Yt(l) == null || dn(e) ? Dt(e) : fn(e);
  const r = Dt(i);
  let d = t && (t["icon-class"] || t.iconClass), c = rt("img", void 0, Object.assign({ class: "w-6 h-6", src: r, onerror: "iconOnError(this,'att')" }, d ? { class: d } : null)), h = `<span class="pl-1">${l}</span>`;
  return rt("a", c + h, Object.assign({ class: "flex", href: Dt(e), title: e }, t ? dt(t, ["icon-class", "iconClass"]) : null));
}
function Is(e) {
  return "";
}
function Ds(e, t) {
  let l = typeof e == "string" ? new Date(Wn(e) * 1e3) : kl(e) ? Vt(e) : null;
  return tl(l ? vo(l) : e, t);
}
function Ht(e, t) {
  if (e == null)
    return "";
  let l = typeof e == "number" ? new Date(e) : typeof e == "string" ? Vt(e) : e;
  if (!kl(l))
    return console.warn(`${l} is not a Date value`), e == null ? "" : `${e}`;
  let n = ut.date ? Al(ut.date) : null;
  return tl(typeof n == "function" ? n(l) : Gn(l), t);
}
function yn(e, t) {
  if (typeof e != "number")
    return e;
  let l = ut.number ? Al(ut.number) : null, n = typeof l == "function" ? l(e) : `${e}`;
  return n === "" && (console.warn(`formatNumber(${e}) => ${n}`, l), n = `${e}`), tl(n, t);
}
function js(e, t, l) {
  let n = ho(e), i = t ? Al(t) : null;
  if (typeof i == "function") {
    let d = l;
    if (t != null && t.options)
      try {
        d = sn(t.options, l);
      } catch (c) {
        console.error(`Could not evaluate '${t.options}'`, c, ", with scope:", l);
      }
    return i(e, d);
  }
  let r = n != null ? kl(n) ? Ht(n, l) : typeof n == "number" ? yn(n, l) : n : null;
  return r ?? "";
}
function Jt(e, t, l) {
  return _t(e) ? js(e, t, l) : ja(e, t, l);
}
function Ta(e) {
  if (e == null)
    return NaN;
  if (typeof e == "number")
    return e;
  if (kl(e))
    return e.getTime() - Wl();
  if (typeof e == "string") {
    let t = Number(e);
    if (!isNaN(t))
      return t;
    if (e[0] === "P" || e.startsWith("-P"))
      return Wn(e) * 1e3 * -1;
    if (go(e, Va) >= 0)
      return Vt(e).getTime() - Wl();
  }
  return NaN;
}
function Ml(e, t) {
  for (let l in Rl)
    if (Math.abs(e) > Rl[l] || l === "second")
      return (t || Sa).format(Math.round(e / Rl[l]), l);
}
function bn(e, t) {
  let l = Ta(e);
  return isNaN(l) ? "" : Ml(l, t);
}
function Fa(e, t) {
  return Ml(e.getTime() - (t ? t.getTime() : Wl()));
}
function Os(e, t) {
  return pn(e, t).join(", ");
}
function Al(e) {
  if (!e)
    return null;
  let { method: t, options: l } = e, n = `${t}(${l})`, i = bt[n] || bt[t];
  if (typeof i == "function")
    return i;
  let r = e.locale || ut.locale;
  if (t.startsWith("Intl.")) {
    let d = r ? `'${r}'` : "undefined", c = `return new ${t}(${d},${l || "undefined"})`;
    try {
      let h = Function(c)();
      return i = t === "Intl.DateTimeFormat" ? (m) => h.format(Vt(m)) : t === "Intl.NumberFormat" ? (m) => h.format(Number(m)) : t === "Intl.RelativeTimeFormat" ? (m) => bn(m, h) : (m) => h.format(m), bt[n] = i;
    } catch (h) {
      console.error(`Invalid format: ${c}`, h);
    }
  } else {
    let d = globalThis[t];
    if (typeof d == "function") {
      let c = l != null ? Function("return " + l)() : void 0;
      return i = (h) => d(h, c, r), bt[n] = i;
    }
    console.error(`No '${t}' function exists`, Object.keys(bt));
  }
  return null;
}
function Ps(e, t) {
  return e ? e.length > t ? e.substring(0, t) + "..." : e : "";
}
function Bs(e) {
  return e.substring(0, 6) === "/Date(" ? Ht(Vt(e)) : e;
}
function Ia(e) {
  return wn(Bt(e)).replace(/"/g, "");
}
function Rs(e) {
  if (e == null || e === "")
    return "";
  if (typeof e == "string")
    try {
      return JSON.parse(e);
    } catch {
      console.warn("couldn't parse as JSON", e);
    }
  return e;
}
function wn(e, t = 4) {
  return e = Rs(e), typeof e != "object" ? typeof e == "string" ? e : `${e}` : JSON.stringify(e, void 0, t);
}
function Da(e) {
  return e = Rs(e), typeof e != "object" ? typeof e == "string" ? e : `${e}` : (e = Object.assign({}, e), e = Bt(e), wn(e));
}
function Bt(e) {
  if (e == null)
    return null;
  if (typeof e == "string")
    return Bs(e);
  if (_t(e))
    return e;
  if (e instanceof Date)
    return Ht(e);
  if (Array.isArray(e))
    return e.map(Bt);
  if (typeof e == "object") {
    let t = {};
    return Object.keys(e).forEach((l) => {
      l != "__type" && (t[l] = Bt(e[l]));
    }), t;
  }
  return e;
}
function ja(e, t, l) {
  let n = e;
  if (Array.isArray(e)) {
    if (_t(e[0]))
      return n.join(",");
    e[0] != null && (n = e[0]);
  }
  if (n == null)
    return "";
  if (n instanceof Date)
    return Ht(n, l);
  let i = Object.keys(n), r = [];
  for (let d = 0; d < Math.min(ut.maxNestedFields, i.length); d++) {
    let c = i[d], h = `${Bt(n[c])}`;
    r.push(`<b class="font-medium">${c}</b>: ${Hl(Ps(Bs(h), ut.maxNestedFieldLength))}`);
  }
  return i.length > 2 && r.push("..."), rt("span", "{ " + r.join(", ") + " }", Object.assign({ title: Hl(Ia(e)) }, l));
}
function wh() {
  return {
    Formats: Ke,
    setDefaultFormats: Ma,
    getFormatters: Cs,
    setFormatters: Aa,
    formatValue: Jt,
    formatter: Al,
    dateInputFormat: $l,
    currency: _s,
    bytes: Ls,
    link: Vs,
    linkTel: Ss,
    linkMailTo: Ms,
    icon: As,
    iconRounded: Ts,
    attachment: Fs,
    hidden: Is,
    time: Ds,
    relativeTime: bn,
    relativeTimeFromDate: Fa,
    relativeTimeFromMs: Ml,
    enumFlags: Os,
    formatDate: Ht,
    formatNumber: yn,
    indentJson: wn,
    prettyJson: Da,
    scrub: Bt,
    truncate: Ps,
    apiValueFmt: js,
    iconOnError: Ll
  };
}
const Oa = ["onClick", "title"], Pa = /* @__PURE__ */ ce({
  __name: "RouterLink",
  props: {
    to: null
  },
  setup(e) {
    const t = e, { config: l } = St(), n = () => l.value.navigate(t.to ?? "/");
    return (i, r) => (a(), u("a", Me({
      onClick: Ue(n, ["prevent"]),
      title: e.to,
      href: "javascript:void(0)"
    }, i.$attrs), [
      Z(i.$slots, "default")
    ], 16, Oa));
  }
});
class Ba {
  constructor() {
    Ce(this, "callbacks", {});
  }
  register(t, l) {
    this.callbacks[t] = l;
  }
  has(t) {
    return !!this.callbacks[t];
  }
  invoke(t, l) {
    const n = this.callbacks[t];
    typeof n == "function" && n(t, l);
  }
}
const Ye = class Ye {
  static component(t) {
    const l = Ye.components[t];
    if (l)
      return l;
    const n = En(t), i = Object.keys(Ye.components).find((r) => En(r) === n);
    return i && Ye.components[i] || null;
  }
};
Ce(Ye, "config", {
  redirectSignIn: "/signin",
  redirectSignOut: "/auth/logout",
  navigate: (t) => location.href = t,
  assetsPathResolver: (t) => t,
  fallbackPathResolver: (t) => t,
  storage: new ts(),
  tableIcon: { svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g fill='none' stroke='currentColor' stroke-width='1.5'><path d='M5 12v6s0 3 7 3s7-3 7-3v-6'/><path d='M5 6v6s0 3 7 3s7-3 7-3V6'/><path d='M12 3c7 0 7 3 7 3s0 3-7 3s-7-3-7-3s0-3 7-3Z'/></g></svg>" },
  scopeWhitelist: {
    enumFlagsConverter: xs,
    ...Cs()
  }
}), Ce(Ye, "autoQueryGridDefaults", {
  deny: [],
  hide: [],
  toolbarButtonClass: void 0,
  tableStyle: "stripedRows",
  take: 25,
  maxFieldLength: 150
}), Ce(Ye, "events", po()), Ce(Ye, "user", A(null)), Ce(Ye, "metadata", A(null)), Ce(Ye, "components", {
  RouterLink: Pa
}), Ce(Ye, "interceptors", new Ba());
let ne = Ye;
function Ra(e) {
  ne.config = Object.assign(ne.config, e);
}
function Ea(e) {
  ne.autoQueryGridDefaults = Object.assign(ne.autoQueryGridDefaults, e);
}
function xn(e) {
  return e && ne.config.assetsPathResolver ? ne.config.assetsPathResolver(e) : e;
}
function Ha(e) {
  return e && ne.config.fallbackPathResolver ? ne.config.fallbackPathResolver(e) : e;
}
function za(e, t) {
  ne.interceptors.register(e, t);
}
function St() {
  const e = f(() => ne.config), t = f(() => ne.autoQueryGridDefaults), l = ne.events;
  return {
    config: e,
    setConfig: Ra,
    events: l,
    autoQueryGridDefaults: t,
    setAutoQueryGridDefaults: Ea,
    assetsPathResolver: xn,
    fallbackPathResolver: Ha,
    registerInterceptor: za
  };
}
const Es = ce({
  inheritAttrs: !1,
  props: {
    image: Object,
    svg: String,
    src: String,
    alt: String,
    type: String
  },
  setup(e, { attrs: t }) {
    return () => {
      let l = e.image;
      if (e.type) {
        const { typeOf: r } = at(), d = r(e.type);
        d || console.warn(`Type ${e.type} does not exist`), d != null && d.icon ? l = d == null ? void 0 : d.icon : console.warn(`Type ${e.type} does not have a [Svg] icon`);
      }
      let n = e.svg || (l == null ? void 0 : l.svg) || "";
      if (n.startsWith("<svg ")) {
        let d = xl(n, ">").indexOf("class="), c = `${(l == null ? void 0 : l.cls) || ""} ${t.class || ""}`;
        if (d == -1)
          n = `<svg class="${c}" ${n.substring(4)}`;
        else {
          const h = d + 6 + 1;
          n = `${n.substring(0, h) + c} ${n.substring(h)}`;
        }
        return gt("span", { innerHTML: n });
      } else
        return gt("img", {
          class: [l == null ? void 0 : l.cls, t.class],
          src: xn(e.src || (l == null ? void 0 : l.uri)),
          onError: (r) => Ll(r.target)
        });
    };
  }
}), Na = { class: "text-2xl font-semibold text-gray-900 dark:text-gray-300" }, Ua = { class: "flex" }, qa = /* @__PURE__ */ s("path", {
  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
  fill: "currentColor"
}, null, -1), Qa = /* @__PURE__ */ s("path", {
  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
  fill: "currentFill"
}, null, -1), Ka = [
  qa,
  Qa
], Za = /* @__PURE__ */ ce({
  __name: "Loading",
  props: {
    imageClass: { default: "w-6 h-6" }
  },
  setup(e) {
    return (t, l) => (a(), u("div", Na, [
      s("div", Ua, [
        (a(), u("svg", {
          class: w(["self-center inline mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300", e.imageClass]),
          role: "status",
          viewBox: "0 0 100 101",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, Ka, 2)),
        s("span", null, [
          Z(t.$slots, "default")
        ])
      ])
    ]));
  }
}), Ga = ["href", "onClick"], Wa = ["type"], Ja = /* @__PURE__ */ ce({
  __name: "OutlineButton",
  props: {
    type: { default: "submit" },
    href: null
  },
  setup(e) {
    const t = "inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 disabled:text-gray-400 bg-white dark:bg-black hover:bg-gray-50 hover:dark:bg-gray-900 disabled:hover:bg-white dark:disabled:hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black";
    return (l, n) => {
      const i = X("router-link");
      return e.href ? (a(), se(i, {
        key: 0,
        to: e.href
      }, {
        default: ke(({ navigate: r }) => [
          s("button", {
            class: w(t),
            href: e.href,
            onClick: r
          }, [
            Z(l.$slots, "default")
          ], 8, Ga)
        ]),
        _: 3
      }, 8, ["to"])) : (a(), u("button", Me({
        key: 1,
        type: e.type,
        class: t
      }, l.$attrs), [
        Z(l.$slots, "default")
      ], 16, Wa));
    };
  }
}), Xa = ["href", "onClick"], Ya = ["type"], ei = /* @__PURE__ */ ce({
  __name: "PrimaryButton",
  props: {
    type: { default: "submit" },
    href: null,
    color: { default: "indigo" }
  },
  setup(e) {
    const t = e, l = {
      blue: "text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:hover:bg-blue-400 focus:ring-indigo-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
      purple: "text-white bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 disabled:hover:bg-purple-400 focus:ring-indigo-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
      red: "focus:ring-red-500 text-white bg-red-600 hover:bg-red-700 disabled:bg-red-400 disabled:hover:bg-red-400 focus:ring-red-500 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-500",
      green: "focus:ring-green-300 text-white bg-green-600 hover:bg-green-700 disabled:bg-green-400 disabled:hover:bg-green-400 focus:ring-green-500 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-500",
      sky: "focus:ring-sky-300 text-white bg-sky-600 hover:bg-sky-700 disabled:bg-sky-400 disabled:hover:bg-sky-400 focus:ring-sky-500 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-500",
      cyan: "focus:ring-cyan-300 text-white bg-cyan-600 hover:bg-cyan-700 disabled:bg-cyan-400 disabled:hover:bg-cyan-400 focus:ring-cyan-500 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-500",
      indigo: "focus:ring-2 focus:ring-offset-2 text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 disabled:hover:bg-indigo-400 focus:ring-indigo-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    }, n = f(() => "inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-black " + (l[t.color] || l.indigo));
    return (i, r) => {
      const d = X("router-link");
      return e.href ? (a(), se(d, {
        key: 0,
        to: e.href
      }, {
        default: ke(({ navigate: c }) => [
          s("button", {
            class: w(o(n)),
            href: e.href,
            onClick: c
          }, [
            Z(i.$slots, "default")
          ], 10, Xa)
        ]),
        _: 3
      }, 8, ["to"])) : (a(), u("button", Me({
        key: 1,
        type: e.type,
        class: o(n)
      }, i.$attrs), [
        Z(i.$slots, "default")
      ], 16, Ya));
    };
  }
}), ti = ["type", "href", "onClick"], li = ["type"], ni = /* @__PURE__ */ ce({
  __name: "SecondaryButton",
  props: {
    type: null,
    href: null
  },
  setup(e) {
    const t = "inline-flex justify-center rounded-md border border-gray-300 py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-black";
    return (l, n) => {
      const i = X("router-link");
      return e.href ? (a(), se(i, {
        key: 0,
        to: e.href
      }, {
        default: ke(({ navigate: r }) => [
          s("button", {
            type: e.type ?? "button",
            class: w(t),
            href: e.href,
            onClick: r
          }, [
            Z(l.$slots, "default")
          ], 8, ti)
        ]),
        _: 3
      }, 8, ["to"])) : (a(), u("button", Me({
        key: 1,
        type: e.type ?? "button",
        class: t
      }, l.$attrs), [
        Z(l.$slots, "default")
      ], 16, li));
    };
  }
});
function We(e, t) {
  return Array.isArray(e) ? e.indexOf(t) >= 0 : e == t || e.includes(t);
}
const bl = {
  blue: "text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200",
  purple: "text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200",
  red: "text-red-700 dark:text-red-400 hover:text-red-900 dark:hover:text-red-200",
  green: "text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200",
  sky: "text-sky-600 dark:text-sky-400 hover:text-sky-800 dark:hover:text-sky-200",
  cyan: "text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-200",
  indigo: "text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200"
}, nt = {
  base: "block w-full sm:text-sm rounded-md dark:text-white dark:bg-gray-900 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none",
  invalid: "pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500",
  valid: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:border-gray-600"
}, qt = {
  panelClass: "shadow sm:rounded-md",
  formClass: "space-y-6 bg-white dark:bg-black py-6 px-4 sm:p-6",
  headingClass: "text-lg font-medium leading-6 text-gray-900 dark:text-gray-100",
  subHeadingClass: "mt-1 text-sm text-gray-500 dark:text-gray-400"
}, It = {
  panelClass: "pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg",
  formClass: "flex h-full flex-col divide-y divide-gray-200 dark:divide-gray-700 shadow-xl bg-white dark:bg-black",
  titlebarClass: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6",
  headingClass: "text-lg font-medium text-gray-900 dark:text-gray-100",
  subHeadingClass: "mt-1 text-sm text-gray-500 dark:text-gray-400",
  closeButtonClass: "rounded-md bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:ring-offset-black"
}, Jl = {
  modalClass: "relative transform overflow-hidden rounded-lg bg-white dark:bg-black text-left shadow-xl transition-all sm:my-8",
  sizeClass: "sm:max-w-prose lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl sm:w-full"
}, Ze = {
  panelClass(e = "slideOver") {
    return e == "card" ? qt.panelClass : It.panelClass;
  },
  formClass(e = "slideOver") {
    return e == "card" ? qt.formClass : It.formClass;
  },
  headingClass(e = "slideOver") {
    return e == "card" ? qt.headingClass : It.headingClass;
  },
  subHeadingClass(e = "slideOver") {
    return e == "card" ? qt.subHeadingClass : It.subHeadingClass;
  },
  buttonsClass: "mt-4 px-4 py-3 bg-gray-50 dark:bg-gray-900 sm:px-6 flex flex-wrap justify-between",
  legendClass: "text-base font-medium text-gray-900 dark:text-gray-100 text-center mb-4"
}, ge = {
  getGridClass(e = "stripedRows") {
    return ge.gridClass;
  },
  getGrid2Class(e = "stripedRows") {
    return We(e, "fullWidth") ? "overflow-x-auto" : ge.grid2Class;
  },
  getGrid3Class(e = "stripedRows") {
    return We(e, "fullWidth") ? "inline-block min-w-full py-2 align-middle" : ge.grid3Class;
  },
  getGrid4Class(e = "stripedRows") {
    return We(e, "whiteBackground") ? "" : We(e, "fullWidth") ? "overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5" : ge.grid4Class;
  },
  getTableClass(e = "stripedRows") {
    return We(e, "fullWidth") || We(e, "verticalLines") ? "min-w-full divide-y divide-gray-300" : ge.tableClass;
  },
  getTheadClass(e = "stripedRows") {
    return We(e, "whiteBackground") ? "" : ge.theadClass;
  },
  getTheadRowClass(e = "stripedRows") {
    return ge.theadRowClass + (We(e, "verticalLines") ? " divide-x divide-gray-200 dark:divide-gray-700" : "");
  },
  getTheadCellClass(e = "stripedRows") {
    return ge.theadCellClass + (We(e, "uppercaseHeadings") ? " uppercase" : "");
  },
  getTbodyClass(e = "stripedRows") {
    return (We(e, "whiteBackground") || We(e, "verticalLines") ? "divide-y divide-gray-200 dark:divide-gray-800" : ge.tableClass) + (We(e, "verticalLines") ? " bg-white" : "");
  },
  getTableRowClass(e = "stripedRows", t, l, n) {
    return (n ? "cursor-pointer " : "") + (l ? "bg-indigo-100 dark:bg-blue-800" : (n ? "hover:bg-yellow-50 dark:hover:bg-blue-900 " : "") + (We(e, "stripedRows") ? t % 2 == 0 ? "bg-white dark:bg-black" : "bg-gray-50 dark:bg-gray-800" : "bg-white dark:bg-black")) + (We(e, "verticalLines") ? " divide-x divide-gray-200 dark:divide-gray-700" : "");
  },
  gridClass: "flex flex-col",
  //original -margins + padding forces scroll bars when parent is w-full for no clear benefits?
  //original: -my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8
  grid2Class: "",
  //original: inline-block min-w-full py-2 align-middle md:px-6 lg:px-8
  grid3Class: "inline-block min-w-full py-2 align-middle",
  grid4Class: "overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg",
  tableClass: "min-w-full divide-y divide-gray-200 dark:divide-gray-700",
  theadClass: "bg-gray-50 dark:bg-gray-900",
  tableCellClass: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400",
  theadRowClass: "select-none",
  theadCellClass: "px-6 py-4 text-left text-sm font-medium tracking-wider whitespace-nowrap",
  toolbarButtonClass: "inline-flex items-center px-2.5 py-1.5 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-black hover:bg-gray-50 dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black"
}, si = {
  colspans: "col-span-3 sm:col-span-3"
}, xh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  a: bl,
  card: qt,
  dummy: si,
  form: Ze,
  grid: ge,
  input: nt,
  modal: Jl,
  slideOver: It
}, Symbol.toStringTag, { value: "Module" })), oi = /* @__PURE__ */ ce({
  __name: "TextLink",
  props: {
    color: { default: "blue" }
  },
  setup(e) {
    const t = e, l = to(), n = f(() => (bl[t.color] || bl.blue) + (l.href ? "" : " cursor-pointer"));
    return (i, r) => (a(), u("a", {
      class: w(o(n))
    }, [
      Z(i.$slots, "default")
    ], 2));
  }
}), ai = {
  class: "flex",
  "aria-label": "Breadcrumb"
}, ii = {
  role: "list",
  class: "flex items-center space-x-4"
}, ri = ["href", "title"], ui = /* @__PURE__ */ s("svg", {
  class: "h-6 w-6 flex-shrink-0",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z",
    "clip-rule": "evenodd"
  })
], -1), di = { class: "sr-only" }, ci = /* @__PURE__ */ ce({
  __name: "Breadcrumbs",
  props: {
    homeHref: { default: "/" },
    homeLabel: { default: "Home" }
  },
  setup(e) {
    return (t, l) => (a(), u("nav", ai, [
      s("ol", ii, [
        s("li", null, [
          s("div", null, [
            s("a", {
              href: e.homeHref,
              class: "text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400",
              title: e.homeLabel
            }, [
              ui,
              s("span", di, T(e.homeLabel), 1)
            ], 8, ri)
          ])
        ]),
        Z(t.$slots, "default")
      ])
    ]));
  }
}), fi = { class: "flex items-center" }, mi = /* @__PURE__ */ s("svg", {
  class: "h-6 w-6 flex-shrink-0 text-gray-400 dark:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
    "clip-rule": "evenodd"
  })
], -1), vi = ["href", "title"], hi = ["title"], gi = /* @__PURE__ */ ce({
  __name: "Breadcrumb",
  props: {
    href: null,
    title: null
  },
  setup(e) {
    return (t, l) => (a(), u("li", null, [
      s("div", fi, [
        mi,
        e.href ? (a(), u("a", {
          key: 0,
          href: e.href,
          class: "ml-4 text-lg font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300",
          title: e.title
        }, [
          Z(t.$slots, "default")
        ], 8, vi)) : (a(), u("span", {
          key: 1,
          class: "ml-4 text-lg font-medium text-gray-700 dark:text-gray-300",
          title: e.title
        }, [
          Z(t.$slots, "default")
        ], 8, hi))
      ])
    ]));
  }
}), pi = {
  key: 0,
  class: "text-base font-semibold text-gray-500 dark:text-gray-400"
}, yi = {
  role: "list",
  class: "mt-4 divide-y divide-gray-200 dark:divide-gray-800 border-t border-b border-gray-200 dark:border-gray-800"
}, bi = /* @__PURE__ */ ce({
  __name: "NavList",
  props: {
    title: null
  },
  setup(e) {
    return (t, l) => (a(), u("div", null, [
      e.title ? (a(), u("h2", pi, T(e.title), 1)) : k("", !0),
      s("ul", yi, [
        Z(t.$slots, "default")
      ])
    ]));
  }
}), wi = { class: "relative flex items-start space-x-4 py-6" }, xi = { class: "flex-shrink-0" }, ki = { class: "flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900" }, $i = { class: "min-w-0 flex-1" }, Ci = { class: "text-base font-medium text-gray-900 dark:text-gray-100" }, _i = { class: "rounded-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2" }, Li = ["href"], Vi = /* @__PURE__ */ s("span", {
  class: "absolute inset-0",
  "aria-hidden": "true"
}, null, -1), Si = { class: "text-base text-gray-500" }, Mi = /* @__PURE__ */ s("div", { class: "flex-shrink-0 self-center" }, [
  /* @__PURE__ */ s("svg", {
    class: "h-5 w-5 text-gray-400",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ s("path", {
      "fill-rule": "evenodd",
      d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
      "clip-rule": "evenodd"
    })
  ])
], -1), Ai = /* @__PURE__ */ ce({
  __name: "NavListItem",
  props: {
    title: null,
    href: null,
    icon: null,
    iconSvg: null,
    iconSrc: null,
    iconAlt: null
  },
  setup(e) {
    return (t, l) => {
      const n = X("Icon");
      return a(), u("li", wi, [
        s("div", xi, [
          s("span", ki, [
            $e(n, {
              class: "w-6 h-6 text-indigo-700 dark:text-indigo-300",
              image: e.icon,
              src: e.iconSrc,
              svg: e.iconSvg,
              alt: e.iconAlt
            }, null, 8, ["image", "src", "svg", "alt"])
          ])
        ]),
        s("div", $i, [
          s("h3", Ci, [
            s("span", _i, [
              s("a", {
                href: e.href,
                class: "focus:outline-none"
              }, [
                Vi,
                we(" " + T(e.title), 1)
              ], 8, Li)
            ])
          ]),
          s("p", Si, [
            Z(t.$slots, "default")
          ])
        ]),
        Mi
      ]);
    };
  }
});
function Ti(e) {
  ne.user.value = e, ne.events.publish("signIn", e);
}
function Fi() {
  ne.user.value = null, ne.events.publish("signOut", null);
}
function Hs(e) {
  var t;
  return (((t = ne.user.value) == null ? void 0 : t.roles) || []).indexOf(e) >= 0;
}
function Ii(e) {
  var t;
  return (((t = ne.user.value) == null ? void 0 : t.permissions) || []).indexOf(e) >= 0;
}
function kn() {
  return Hs("Admin");
}
function vl(e) {
  if (!e)
    return !1;
  if (!e.requiresAuth)
    return !0;
  const t = ne.user.value;
  if (!t)
    return !1;
  if (kn())
    return !0;
  let [l, n] = [t.roles || [], t.permissions || []], [i, r, d, c] = [
    e.requiredRoles || [],
    e.requiredPermissions || [],
    e.requiresAnyRole || [],
    e.requiresAnyPermission || []
  ];
  return !(!i.every((h) => l.indexOf(h) >= 0) || d.length > 0 && !d.some((h) => l.indexOf(h) >= 0) || !r.every((h) => n.indexOf(h) >= 0) || c.length > 0 && !c.every((h) => n.indexOf(h) >= 0));
}
function Di(e) {
  if (!e || !e.requiresAuth)
    return null;
  const t = ne.user.value;
  if (!t)
    return `<b>${e.request.name}</b> requires Authentication`;
  if (kn())
    return null;
  let [l, n] = [t.roles || [], t.permissions || []], [i, r, d, c] = [
    e.requiredRoles || [],
    e.requiredPermissions || [],
    e.requiresAnyRole || [],
    e.requiresAnyPermission || []
  ], h = i.filter((y) => l.indexOf(y) < 0);
  if (h.length > 0)
    return `Requires ${h.map((y) => "<b>" + y + "</b>").join(", ")} Role` + (h.length > 1 ? "s" : "");
  let m = r.filter((y) => n.indexOf(y) < 0);
  return m.length > 0 ? `Requires ${m.map((y) => "<b>" + y + "</b>").join(", ")} Permission` + (m.length > 1 ? "s" : "") : d.length > 0 && !d.some((y) => l.indexOf(y) >= 0) ? `Requires any ${d.filter((y) => l.indexOf(y) < 0).map((y) => "<b>" + y + "</b>").join(", ")} Role` + (h.length > 1 ? "s" : "") : c.length > 0 && !c.every((y) => n.indexOf(y) >= 0) ? `Requires any ${c.filter((y) => n.indexOf(y) < 0).map((y) => "<b>" + y + "</b>").join(", ")} Permission` + (m.length > 1 ? "s" : "") : null;
}
function $n() {
  const e = f(() => ne.user.value || null), t = f(() => ne.user.value != null);
  return { signIn: Ti, signOut: Fi, user: e, isAuthenticated: t, hasRole: Hs, hasPermission: Ii, isAdmin: kn, canAccess: vl, invalidAccessMessage: Di };
}
const ji = { key: 0 }, Oi = { class: "md:p-4" }, zs = /* @__PURE__ */ ce({
  __name: "EnsureAccess",
  props: {
    invalidAccess: null,
    alertClass: null
  },
  emits: ["done"],
  setup(e) {
    const { isAuthenticated: t } = $n(), { config: l } = St(), n = () => {
      let r = location.href.substring(location.origin.length) || "/";
      const d = Kt(l.value.redirectSignIn, { redirect: r });
      l.value.navigate(d);
    }, i = () => {
      let r = location.href.substring(location.origin.length) || "/";
      const d = Kt(l.value.redirectSignOut, { ReturnUrl: r });
      l.value.navigate(d);
    };
    return (r, d) => {
      const c = X("Alert"), h = X("SecondaryButton");
      return e.invalidAccess ? (a(), u("div", ji, [
        $e(c, {
          class: w(e.alertClass),
          innerHTML: e.invalidAccess
        }, null, 8, ["class", "innerHTML"]),
        s("div", Oi, [
          o(t) ? (a(), se(h, {
            key: 1,
            onClick: i
          }, {
            default: ke(() => [
              we("Sign Out")
            ]),
            _: 1
          })) : (a(), se(h, {
            key: 0,
            onClick: n
          }, {
            default: ke(() => [
              we("Sign In")
            ]),
            _: 1
          }))
        ])
      ])) : k("", !0);
    };
  }
}), Pi = { class: "absolute top-0 right-0 bg-white dark:bg-black border dark:border-gray-800 rounded normal-case text-sm shadow w-80" }, Bi = { class: "p-4" }, Ri = /* @__PURE__ */ s("h3", { class: "text-base font-medium mb-3 dark:text-gray-100" }, "Sort", -1), Ei = { class: "flex w-full justify-center" }, Hi = /* @__PURE__ */ s("svg", {
  class: "w-6 h-6",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16"
}, [
  /* @__PURE__ */ s("g", { fill: "currentColor" }, [
    /* @__PURE__ */ s("path", {
      "fill-rule": "evenodd",
      d: "M10.082 5.629L9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"
    }),
    /* @__PURE__ */ s("path", { d: "M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zm-8.46-.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999l.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z" })
  ])
], -1), zi = /* @__PURE__ */ s("span", null, "ASC", -1), Ni = [
  Hi,
  zi
], Ui = /* @__PURE__ */ wl('<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="currentColor"><path d="M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z"></path><path fill-rule="evenodd" d="M10.082 12.629L9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z"></path><path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999l.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"></path></g></svg><span>DESC</span>', 2), qi = [
  Ui
], Qi = /* @__PURE__ */ s("h3", { class: "text-base font-medium mt-4 mb-2" }, " Filter ", -1), Ki = { key: 0 }, Zi = ["id", "value"], Gi = ["for"], Wi = { key: 1 }, Ji = { class: "mb-2" }, Xi = { class: "inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 text-indigo-700" }, Yi = ["onClick"], er = /* @__PURE__ */ s("svg", {
  class: "h-2 w-2",
  stroke: "currentColor",
  fill: "none",
  viewBox: "0 0 8 8"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-width": "1.5",
    d: "M1 1l6 6m0-6L1 7"
  })
], -1), tr = [
  er
], lr = { class: "flex" }, nr = /* @__PURE__ */ s("svg", {
  class: "h-6 w-6",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
    "clip-rule": "evenodd"
  })
], -1), sr = [
  nr
], or = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, Cn = /* @__PURE__ */ ce({
  __name: "FilterColumn",
  props: {
    definitions: null,
    column: null,
    topLeft: null
  },
  emits: ["done", "save"],
  setup(e, { emit: t }) {
    const l = e, n = A(), i = A(""), r = A(""), d = A([]), c = f(() => l.column.meta.isEnum == !0), h = f(() => ot(l.column.meta.type === "Nullable`1" ? l.column.meta.genericArgs[0] : l.column.meta.type)), m = f(() => l.column.meta.isEnum == !0 ? gn(ys(h.value.name)) : []), y = f(() => {
      var j;
      return ((j = v(l.column.type)) == null ? void 0 : j.map((S) => ({ key: S.value, value: S.name }))) || [];
    }), b = A({ filters: [] }), p = f(() => b.value.filters);
    hl(() => b.value = Object.assign({}, l.column.settings, {
      filters: Array.from(l.column.settings.filters)
    })), hl(() => {
      var S, U, te, R, J;
      let j = ((te = (U = (S = l.column.settings.filters) == null ? void 0 : S[0]) == null ? void 0 : U.value) == null ? void 0 : te.split(",")) || [];
      if (j.length > 0 && ((R = h.value) != null && R.isEnumInt)) {
        const Y = parseInt(j[0]);
        j = ((J = h.value.enumValues) == null ? void 0 : J.filter((G) => (Y & parseInt(G)) > 0)) || [];
      }
      d.value = j;
    });
    function v(j) {
      let S = l.definitions;
      return ms(j) || (S = S.filter((U) => U.types !== "string")), S;
    }
    function g(j, S) {
      return v(j).find((U) => U.value === S);
    }
    function O() {
      var S;
      if (!i.value)
        return;
      let j = (S = g(l.column.type, i.value)) == null ? void 0 : S.name;
      j && (b.value.filters.push({ key: i.value, name: j, value: r.value }), i.value = r.value = "");
    }
    function N(j) {
      b.value.filters.splice(j, 1);
    }
    function ee(j) {
      return $s(g(l.column.type, j.key), l.column.type, j);
    }
    function P() {
      t("done");
    }
    function z() {
      var j;
      i.value = "%", (j = n.value) == null || j.focus();
    }
    function F() {
      var j;
      if (r.value && O(), c.value) {
        let S = Object.values(d.value).filter((U) => U);
        b.value.filters = S.length > 0 ? (j = h.value) != null && j.isEnumInt ? [{ key: "%HasAny", name: "HasAny", value: S.map((U) => parseInt(U)).reduce((U, te) => U + te, 0).toString() }] : [{ key: "%In", name: "In", value: S.join(",") }] : [];
      }
      t("save", b.value), t("done");
    }
    function W(j) {
      b.value.sort = j === b.value.sort ? void 0 : j, xt(F);
    }
    return (j, S) => {
      var Y;
      const U = X("SelectInput"), te = X("TextInput"), R = X("PrimaryButton"), J = X("SecondaryButton");
      return a(), u("div", {
        class: "fixed z-20 inset-0 overflow-y-auto",
        onClick: P,
        onVnodeMounted: z
      }, [
        s("div", {
          class: "absolute",
          style: Xl(`top:${e.topLeft.y}px;left:${e.topLeft.x}px`),
          onClick: S[5] || (S[5] = Ue(() => {
          }, ["stop"]))
        }, [
          s("div", Pi, [
            s("div", Bi, [
              Ri,
              s("div", Ei, [
                s("button", {
                  type: "button",
                  title: "Sort Ascending",
                  onClick: S[0] || (S[0] = (G) => W("ASC")),
                  class: w(`${b.value.sort === "ASC" ? "bg-indigo-100 border-indigo-500" : "bg-white hover:bg-gray-50 border-gray-300"} mr-1 inline-flex items-center px-2.5 py-1.5 border shadow-sm text-sm font-medium rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`)
                }, Ni, 2),
                s("button", {
                  type: "button",
                  title: "Sort Descending",
                  onClick: S[1] || (S[1] = (G) => W("DESC")),
                  class: w(`${b.value.sort === "DESC" ? "bg-indigo-100 border-indigo-500" : "bg-white hover:bg-gray-50 border-gray-300"} ml-1 inline-flex items-center px-2.5 py-1.5 border shadow-sm text-sm font-medium rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`)
                }, qi, 2)
              ]),
              Qi,
              o(c) ? (a(), u("div", Ki, [
                (a(!0), u(Te, null, Ie(o(m), (G) => (a(), u("div", {
                  key: G.key,
                  class: "flex items-center"
                }, [
                  kt(s("input", {
                    type: "checkbox",
                    id: G.key,
                    value: G.key,
                    "onUpdate:modelValue": S[2] || (S[2] = (M) => d.value = M),
                    class: "h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  }, null, 8, Zi), [
                    [Yl, d.value]
                  ]),
                  s("label", {
                    for: G.key,
                    class: "ml-3"
                  }, T(G.value), 9, Gi)
                ]))), 128))
              ])) : (a(), u("div", Wi, [
                (a(!0), u(Te, null, Ie(o(p), (G, M) => (a(), u("div", Ji, [
                  s("span", Xi, [
                    we(T(e.column.name) + " " + T(G.name) + " " + T(ee(G)) + " ", 1),
                    s("button", {
                      type: "button",
                      onClick: (le) => N(M),
                      class: "flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
                    }, tr, 8, Yi)
                  ])
                ]))), 256)),
                s("div", lr, [
                  $e(U, {
                    id: "filterRule",
                    class: "w-32 mr-1",
                    modelValue: i.value,
                    "onUpdate:modelValue": S[3] || (S[3] = (G) => i.value = G),
                    entries: o(y),
                    label: "",
                    placeholder: ""
                  }, null, 8, ["modelValue", "entries"]),
                  ((Y = g(e.column.type, i.value)) == null ? void 0 : Y.valueType) !== "none" ? (a(), se(te, {
                    key: 0,
                    ref_key: "txtFilter",
                    ref: n,
                    id: "filterValue",
                    class: "w-32 mr-1",
                    type: "text",
                    modelValue: r.value,
                    "onUpdate:modelValue": S[4] || (S[4] = (G) => r.value = G),
                    onKeyup: Kn(O, ["enter"]),
                    label: "",
                    placeholder: ""
                  }, null, 8, ["modelValue", "onKeyup"])) : k("", !0),
                  s("div", { class: "pt-1" }, [
                    s("button", {
                      type: "button",
                      onClick: O,
                      class: "inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    }, sr)
                  ])
                ])
              ]))
            ]),
            s("div", or, [
              $e(R, {
                onClick: F,
                color: "red",
                class: "ml-2"
              }, {
                default: ke(() => [
                  we(" Save ")
                ]),
                _: 1
              }),
              $e(J, { onClick: P }, {
                default: ke(() => [
                  we(" Cancel ")
                ]),
                _: 1
              })
            ])
          ])
        ], 4)
      ], 512);
    };
  }
}), ar = { class: "px-4 sm:px-6 lg:px-8 text-sm" }, ir = { class: "flex flex-wrap" }, rr = { class: "group pr-4 sm:pr-6 lg:pr-8" }, ur = { class: "flex justify-between w-full font-medium" }, dr = { class: "w-6 flex justify-end" }, cr = { class: "hidden group-hover:inline" }, fr = ["onClick", "title"], mr = /* @__PURE__ */ s("svg", {
  class: "h-2 w-2",
  stroke: "currentColor",
  fill: "none",
  viewBox: "0 0 8 8"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-width": "1.5",
    d: "M1 1l6 6m0-6L1 7"
  })
], -1), vr = [
  mr
], hr = {
  key: 0,
  class: "pt-2"
}, gr = { class: "ml-2" }, pr = { key: 1 }, yr = { class: "pt-2" }, br = { class: "inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 text-indigo-700" }, wr = ["onClick"], xr = /* @__PURE__ */ s("svg", {
  class: "h-2 w-2",
  stroke: "currentColor",
  fill: "none",
  viewBox: "0 0 8 8"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-width": "1.5",
    d: "M1 1l6 6m0-6L1 7"
  })
], -1), kr = [
  xr
], $r = /* @__PURE__ */ s("span", null, "Clear All", -1), Cr = [
  $r
], _n = /* @__PURE__ */ ce({
  __name: "FilterViews",
  props: {
    definitions: null,
    columns: null
  },
  emits: ["done", "change"],
  setup(e, { emit: t }) {
    const l = e, n = f(() => l.columns.filter((b) => b.settings.filters.length > 0));
    function i(b) {
      var p, v;
      return (v = (p = b == null ? void 0 : b[0]) == null ? void 0 : p.value) == null ? void 0 : v.split(",");
    }
    function r(b) {
      let p = l.definitions;
      return ms(b) || (p = p.filter((v) => v.types !== "string")), p;
    }
    function d(b, p) {
      return r(b).find((v) => v.value === p);
    }
    function c(b, p) {
      return $s(d(b.type, p.value), b.type, p);
    }
    function h(b) {
      b.settings.filters = [], t("change", b);
    }
    function m(b, p) {
      b.settings.filters.splice(p, 1), t("change", b);
    }
    function y() {
      l.columns.forEach((b) => {
        b.settings.filters = [], t("change", b);
      }), t("done");
    }
    return (b, p) => (a(), u("div", ar, [
      s("div", ir, [
        (a(!0), u(Te, null, Ie(o(n), (v) => (a(), u("fieldset", rr, [
          s("legend", ur, [
            s("span", null, T(o(He)(v.name)), 1),
            s("span", dr, [
              s("span", cr, [
                s("button", {
                  onClick: (g) => h(v),
                  title: `Clear all ${o(He)(v.name)} filters`,
                  class: "flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-red-600 hover:bg-red-200 hover:text-red-500 focus:outline-none focus:bg-red-500 focus:text-white"
                }, vr, 8, fr)
              ])
            ])
          ]),
          v.meta.isEnum ? (a(), u("div", hr, [
            (a(!0), u(Te, null, Ie(i(v.settings.filters), (g) => (a(), u("div", {
              key: g,
              class: "flex items-center"
            }, [
              s("label", gr, T(g), 1)
            ]))), 128))
          ])) : (a(), u("div", pr, [
            (a(!0), u(Te, null, Ie(v.settings.filters, (g, O) => (a(), u("div", yr, [
              s("span", br, [
                we(T(v.name) + " " + T(g.name) + " " + T(c(v, g)) + " ", 1),
                s("button", {
                  type: "button",
                  onClick: (N) => m(v, O),
                  class: "flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
                }, kr, 8, wr)
              ])
            ]))), 256))
          ]))
        ]))), 256))
      ]),
      s("div", { class: "flex justify-center pt-4" }, [
        s("button", {
          type: "button",
          onClick: y,
          class: "inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        }, Cr)
      ])
    ]));
  }
}), _r = { class: "bg-white dark:bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, Lr = { class: "" }, Vr = { class: "mt-3 text-center sm:mt-0 sm:mx-4 sm:text-left" }, Sr = /* @__PURE__ */ s("h3", { class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-100" }, "Query Preferences", -1), Mr = { class: "mt-4" }, Ar = ["for"], Tr = ["id"], Fr = ["value", "selected"], Ir = { class: "mt-4 flex items-center py-4 border-b border-gray-200 dark:border-gray-800" }, Dr = ["id", "checked"], jr = ["for"], Or = { class: "mt-4" }, Pr = { class: "pb-2 px-4" }, Br = { class: "" }, Rr = ["id", "value"], Er = ["for"], Hr = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, Ln = /* @__PURE__ */ ce({
  __name: "QueryPrefs",
  props: {
    id: { default: "QueryPrefs" },
    columns: null,
    prefs: null,
    maxLimit: null
  },
  emits: ["done", "save"],
  setup(e, { emit: t }) {
    const l = e, { autoQueryGridDefaults: n } = St(), i = A({});
    hl(() => i.value = Object.assign({
      take: n.value.take,
      selectedColumns: []
    }, l.prefs));
    const r = [10, 25, 50, 100, 250, 500, 1e3];
    function d() {
      t("done");
    }
    function c() {
      t("save", i.value);
    }
    return (h, m) => {
      const y = X("PrimaryButton"), b = X("SecondaryButton"), p = X("ModalDialog");
      return a(), se(p, {
        id: e.id,
        onDone: d,
        "size-class": "w-full sm:max-w-prose"
      }, {
        default: ke(() => [
          s("div", _r, [
            s("div", Lr, [
              s("div", Vr, [
                Sr,
                s("div", Mr, [
                  s("label", {
                    for: `${e.id}-take`,
                    class: "block text-sm font-medium text-gray-700 dark:text-gray-300"
                  }, "Results per page", 8, Ar),
                  kt(s("select", {
                    id: `${e.id}-take`,
                    "onUpdate:modelValue": m[0] || (m[0] = (v) => i.value.take = v),
                    class: "mt-1 block w-full pl-3 pr-10 py-2 text-base bg-white dark:bg-black border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  }, [
                    (a(!0), u(Te, null, Ie(r.filter((v) => l.maxLimit == null || v <= l.maxLimit), (v) => (a(), u("option", {
                      value: v,
                      selected: v === i.value.take
                    }, T(v), 9, Fr))), 256))
                  ], 8, Tr), [
                    [lo, i.value.take]
                  ])
                ]),
                s("div", Ir, [
                  s("input", {
                    type: "radio",
                    id: `${e.id}-allColumns`,
                    onClick: m[1] || (m[1] = (v) => i.value.selectedColumns = []),
                    checked: i.value.selectedColumns.length === 0,
                    class: "focus:ring-indigo-500 h-4 w-4 bg-white dark:bg-black text-indigo-600 dark:text-indigo-400 border-gray-300 dark:border-gray-700"
                  }, null, 8, Dr),
                  s("label", {
                    class: "ml-3 block text-gray-700 dark:text-gray-300",
                    for: `${e.id}-allColumns`
                  }, "View all columns", 8, jr)
                ]),
                s("div", Or, [
                  s("div", Pr, [
                    s("div", Br, [
                      (a(!0), u(Te, null, Ie(e.columns, (v) => (a(), u("div", {
                        key: v.name,
                        class: "flex items-center"
                      }, [
                        kt(s("input", {
                          type: "checkbox",
                          id: v.name,
                          value: v.name,
                          "onUpdate:modelValue": m[2] || (m[2] = (g) => i.value.selectedColumns = g),
                          class: "h-4 w-4 bg-white dark:bg-black border-gray-300 dark:border-gray-700 rounded text-indigo-600 dark:text-indigo-400 focus:ring-indigo-500"
                        }, null, 8, Rr), [
                          [Yl, i.value.selectedColumns]
                        ]),
                        s("label", {
                          for: v.name,
                          class: "ml-3"
                        }, T(v.name), 9, Er)
                      ]))), 128))
                    ])
                  ])
                ])
              ])
            ])
          ]),
          s("div", Hr, [
            $e(y, {
              onClick: c,
              color: "red",
              class: "ml-2"
            }, {
              default: ke(() => [
                we(" Save ")
              ]),
              _: 1
            }),
            $e(b, { onClick: d }, {
              default: ke(() => [
                we(" Cancel ")
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }, 8, ["id"]);
    };
  }
}), zr = { key: 0 }, Nr = { key: 1 }, Ur = {
  key: 2,
  class: "pt-1"
}, qr = { key: 0 }, Qr = { key: 1 }, Kr = { key: 3 }, Zr = { class: "pl-1 pt-1 flex flex-wrap" }, Gr = { class: "flex mt-1" }, Wr = ["title"], Jr = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("g", {
    "stroke-width": "1.5",
    fill: "none"
  }, [
    /* @__PURE__ */ s("path", {
      d: "M9 3H3.6a.6.6 0 0 0-.6.6v16.8a.6.6 0 0 0 .6.6H9M9 3v18M9 3h6M9 21h6m0-18h5.4a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H15m0-18v18",
      stroke: "currentColor"
    })
  ])
], -1), Xr = [
  Jr
], Yr = ["disabled"], eu = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6l6 6zM6 6h2v12H6z",
    fill: "currentColor"
  })
], -1), tu = [
  eu
], lu = ["disabled"], nu = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z",
    fill: "currentColor"
  })
], -1), su = [
  nu
], ou = ["disabled"], au = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z",
    fill: "currentColor"
  })
], -1), iu = [
  au
], ru = ["disabled"], uu = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6l-6-6zM16 6h2v12h-2z",
    fill: "currentColor"
  })
], -1), du = [
  uu
], cu = {
  key: 0,
  class: "flex mt-1"
}, fu = { class: "px-4 text-lg text-black dark:text-white" }, mu = { key: 0 }, vu = { key: 1 }, hu = /* @__PURE__ */ s("span", { class: "hidden xl:inline" }, " Showing Results ", -1), gu = { key: 2 }, pu = { class: "flex flex-wrap" }, yu = {
  key: 0,
  class: "pl-2 mt-1"
}, bu = /* @__PURE__ */ s("svg", {
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M20 20v-5h-5M4 4v5h5m10.938 2A8.001 8.001 0 0 0 5.07 8m-1.008 5a8.001 8.001  0 0 0 14.868 3"
  })
], -1), wu = [
  bu
], xu = {
  key: 1,
  class: "pl-2 mt-1"
}, ku = /* @__PURE__ */ wl('<svg class="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M28.781 4.405h-10.13V2.018L2 4.588v22.527l16.651 2.868v-3.538h10.13A1.162 1.162 0 0 0 30 25.349V5.5a1.162 1.162 0 0 0-1.219-1.095zm.16 21.126H18.617l-.017-1.889h2.487v-2.2h-2.506l-.012-1.3h2.518v-2.2H18.55l-.012-1.3h2.549v-2.2H18.53v-1.3h2.557v-2.2H18.53v-1.3h2.557v-2.2H18.53v-2h10.411z" fill="#20744a" fill-rule="evenodd"></path><path fill="#20744a" d="M22.487 7.439h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 10.94h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 14.441h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 17.942h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 21.443h4.323v2.2h-4.323z"></path><path fill="#fff" fill-rule="evenodd" d="M6.347 10.673l2.146-.123l1.349 3.709l1.594-3.862l2.146-.123l-2.606 5.266l2.606 5.279l-2.269-.153l-1.532-4.024l-1.533 3.871l-2.085-.184l2.422-4.663l-2.238-4.993z"></path></svg><span class="text-green-900 dark:text-green-100">Excel</span>', 2), $u = [
  ku
], Cu = {
  key: 2,
  class: "pl-2 mt-1"
}, _u = {
  key: 0,
  class: "w-5 h-5 mr-1 text-green-600 dark:text-green-400",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Lu = /* @__PURE__ */ s("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M5 13l4 4L19 7"
}, null, -1), Vu = [
  Lu
], Su = {
  key: 1,
  class: "w-5 h-5 mr-1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Mu = /* @__PURE__ */ s("g", { fill: "none" }, [
  /* @__PURE__ */ s("path", {
    d: "M8 4v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.242a2 2 0 0 0-.602-1.43L16.083 2.57A2 2 0 0 0 14.685 2H10a2 2 0 0 0-2 2z",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }),
  /* @__PURE__ */ s("path", {
    d: "M16 18v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })
], -1), Au = [
  Mu
], Tu = /* @__PURE__ */ s("span", { class: "whitespace-nowrap" }, "Copy URL", -1), Fu = {
  key: 3,
  class: "pl-2 mt-1"
}, Iu = /* @__PURE__ */ s("svg", {
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    fill: "currentColor",
    d: "M6.78 2.72a.75.75 0 0 1 0 1.06L4.56 6h8.69a7.75 7.75 0 1 1-7.75 7.75a.75.75 0 0 1 1.5 0a6.25 6.25 0 1 0 6.25-6.25H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0Z"
  })
], -1), Du = [
  Iu
], ju = {
  key: 4,
  class: "pl-2 mt-1"
}, Ou = /* @__PURE__ */ s("svg", {
  class: "flex-none w-5 h-5 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
    "clip-rule": "evenodd"
  })
], -1), Pu = { class: "mr-1" }, Bu = {
  key: 0,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Ru = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
  "clip-rule": "evenodd"
}, null, -1), Eu = [
  Ru
], Hu = {
  key: 1,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, zu = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",
  "clip-rule": "evenodd"
}, null, -1), Nu = [
  zu
], Uu = {
  key: 5,
  class: "pl-2 mt-1"
}, qu = ["title"], Qu = /* @__PURE__ */ s("svg", {
  class: "w-5 h-5 mr-1 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
    fill: "currentColor"
  })
], -1), Ku = { class: "whitespace-nowrap" }, Zu = { key: 7 }, Gu = {
  key: 0,
  class: "cursor-pointer flex justify-between items-center hover:text-gray-900 dark:hover:text-gray-50"
}, Wu = { class: "mr-1 select-none" }, Ju = {
  key: 1,
  class: "flex justify-between items-center"
}, Xu = { class: "mr-1 select-none" }, Yu = /* @__PURE__ */ ce({
  __name: "AutoQueryGrid",
  props: {
    filterDefinitions: null,
    id: { default: "AutoQueryGrid" },
    apis: null,
    type: null,
    prefs: null,
    deny: null,
    hide: null,
    selectedColumns: null,
    toolbarButtonClass: null,
    tableStyle: null,
    gridClass: null,
    grid2Class: null,
    grid3Class: null,
    grid4Class: null,
    tableClass: null,
    theadClass: null,
    tbodyClass: null,
    theadRowClass: null,
    theadCellClass: null,
    headerTitle: null,
    headerTitles: null,
    visibleFrom: null,
    rowClass: null,
    rowStyle: null,
    apiPrefs: null,
    canFilter: null,
    disableKeyBindings: null,
    configureField: null,
    skip: { default: 0 },
    create: { type: Boolean },
    edit: null,
    filters: null
  },
  emits: ["headerSelected", "rowSelected"],
  setup(e, { expose: t, emit: l }) {
    const n = e, { config: i, autoQueryGridDefaults: r } = St(), d = r, c = Ne("client"), h = i.value.storage, m = "filtering,queryString,queryFilters".split(","), y = "copyApiUrl,downloadCsv,filtersView,newItem,pagingInfo,pagingNav,preferences,refresh,resetPreferences,toolbar".split(","), b = f(() => n.deny ? wt(m, n.deny) : wt(m, d.value.deny)), p = f(() => n.hide ? wt(y, n.hide) : wt(y, d.value.hide));
    function v($) {
      return b.value[$];
    }
    function g($) {
      return p.value[$];
    }
    const O = f(() => n.tableStyle ?? d.value.tableStyle), N = f(() => n.gridClass ?? ge.getGridClass(O.value)), ee = f(() => n.grid2Class ?? ge.getGrid2Class(O.value)), P = f(() => n.grid3Class ?? ge.getGrid3Class(O.value)), z = f(() => n.grid4Class ?? ge.getGrid4Class(O.value)), F = f(() => n.tableClass ?? ge.getTableClass(O.value)), W = f(() => n.theadClass ?? ge.getTheadClass(O.value)), j = f(() => n.theadRowClass ?? ge.getTheadRowClass(O.value)), S = f(() => n.theadCellClass ?? ge.getTheadCellClass(O.value)), U = f(() => n.toolbarButtonClass ?? ge.toolbarButtonClass);
    function te($, D) {
      var Ae;
      if (n.rowClass)
        return n.rowClass($, D);
      const me = !!be.value.AnyUpdate, pe = ((Ae = Ve.value) != null && Ae.name ? ye($, Ve.value.name) : null) == L.value;
      return ge.getTableRowClass(n.tableStyle, D, pe, me);
    }
    const R = en(), J = f(() => {
      var $;
      return jl((($ = be.value.AnyQuery.viewModel) == null ? void 0 : $.name) || be.value.AnyQuery.dataModel.name);
    }), Y = f(() => {
      const $ = Object.keys(R).map((D) => D.toLowerCase());
      return et(J.value).filter((D) => $.includes(D.name.toLowerCase()) || $.includes(D.name.toLowerCase() + "-header")).map((D) => D.name);
    });
    function G() {
      let $ = pt(n.selectedColumns);
      return $.length > 0 ? $ : Y.value.length > 0 ? Y.value : [];
    }
    const M = f(() => {
      let D = G().map((ae) => ae.toLowerCase());
      const me = et(J.value);
      return D.length > 0 ? D.map((ae) => me.find((pe) => pe.name.toLowerCase() === ae)).filter((ae) => ae != null) : me;
    }), le = f(() => {
      let $ = M.value.map((me) => me.name), D = pt(de.value.selectedColumns).map((me) => me.toLowerCase());
      return D.length > 0 ? $.filter((me) => D.includes(me.toLowerCase())) : $;
    }), x = A([]), K = A(new Je()), E = A(new Je()), q = A(), C = A(!1), L = A(), B = A(), fe = A(!1), I = A(), V = A(n.skip), oe = A(!1), Le = 25, de = A({ take: Le }), ue = A(!1), _ = f(() => x.value.some(($) => $.settings.filters.length > 0 || !!$.settings.sort) || de.value.selectedColumns), ie = f(() => x.value.map(($) => $.settings.filters.length).reduce(($, D) => $ + D, 0)), xe = f(() => {
      var $;
      return et(jl(At.value || (($ = be.value.AnyQuery) == null ? void 0 : $.dataModel.name)));
    }), Ve = f(() => {
      var $;
      return el(jl(At.value || (($ = be.value.AnyQuery) == null ? void 0 : $.dataModel.name)));
    }), he = f(() => de.value.take ?? Le), De = f(() => K.value.response ? ye(K.value.response, "results") : []), Q = f(() => {
      var $;
      return (($ = K.value.response) == null ? void 0 : $.total) ?? De.value.length ?? 0;
    }), H = f(() => V.value > 0), re = f(() => V.value > 0), ve = f(() => De.value.length >= he.value), Se = f(() => De.value.length >= he.value), Oe = A(), Re = A(), _e = {
      NoQuery: "No Query API was found"
    };
    t({ update: lt, search: Sn, createRequestArgs: Il, reset: Bn, createDone: Nt, createSave: Pl, editDone: zt, editSave: al, forceUpdate: Vn, setEdit: Fl, edit: B }), ne.interceptors.has("AutoQueryGrid.new") && ne.interceptors.invoke("AutoQueryGrid.new", { props: n });
    function Fe($) {
      if ($) {
        if (n.canFilter)
          return n.canFilter($);
        const D = xe.value.find((me) => me.name.toLowerCase() == $.toLowerCase());
        if (D)
          return !vs(D);
      }
      return !1;
    }
    function Qe($) {
      v("queryString") && nn($);
    }
    async function je($) {
      V.value += $, V.value < 0 && (V.value = 0);
      const D = Math.floor(Q.value / he.value) * he.value;
      V.value > D && (V.value = D), Qe({ skip: V.value || void 0 }), await lt();
    }
    async function Ge($, D) {
      var pe, Ae;
      if (B.value = null, L.value = D, !$ || !D)
        return;
      let me = Gt(be.value.AnyQuery, { [$]: D });
      const ae = await c.api(me);
      if (ae.succeeded) {
        let Ee = (pe = ye(ae.response, "results")) == null ? void 0 : pe[0];
        Ee || console.warn(`API ${(Ae = be.value.AnyQuery) == null ? void 0 : Ae.request.name}(${$}:${D}) returned no results`), B.value = Ee;
      }
    }
    async function Mt($, D) {
      var pe;
      l("rowSelected", $, D);
      const me = (pe = Ve.value) == null ? void 0 : pe.name, ae = me ? ye($, me) : null;
      !me || !ae || (Qe({ edit: ae }), Ge(me, ae));
    }
    function vt($, D) {
      var ae;
      if (!v("filtering"))
        return;
      let me = D.target;
      if (Fe($) && (me == null ? void 0 : me.tagName) !== "TD") {
        let pe = (ae = me == null ? void 0 : me.closest("TABLE")) == null ? void 0 : ae.getBoundingClientRect(), Ae = x.value.find((Ee) => Ee.name.toLowerCase() == $.toLowerCase());
        if (Ae && pe) {
          let Ee = 318, it = pe.x + Ee + 10;
          I.value = {
            column: Ae,
            topLeft: {
              x: Math.max(Math.floor(D.clientX + Ee / 2), it),
              y: pe.y + 45
            }
          };
        }
      }
      l("headerSelected", $, D);
    }
    function ll() {
      I.value = null;
    }
    async function nl($) {
      var me;
      let D = (me = I.value) == null ? void 0 : me.column;
      D && (D.settings = $, h.setItem(sl(D.name), JSON.stringify(D.settings)), await lt()), I.value = null;
    }
    async function Ns($) {
      h.setItem(sl($.name), JSON.stringify($.settings)), await lt();
    }
    async function Us($) {
      fe.value = !1, de.value = $, h.setItem(Dl(), JSON.stringify($)), await lt();
    }
    function Fl($) {
      Object.assign(B.value, $), Vn();
    }
    function Vn() {
      var D, me, ae;
      (D = Oe.value) == null || D.forceUpdate(), (me = Re.value) == null || me.forceUpdate();
      const $ = Be();
      (ae = $ == null ? void 0 : $.proxy) == null || ae.$forceUpdate();
    }
    async function lt() {
      await Sn(Il());
    }
    async function qs() {
      await lt();
    }
    async function Sn($) {
      const D = be.value.AnyQuery;
      if (!D) {
        console.error(_e.NoQuery);
        return;
      }
      let me = Gt(D, $), ae = Jn((Ee) => {
        K.value.response = K.value.error = void 0, ue.value = Ee;
      }), pe = await c.api(me);
      ae(), xt(() => K.value = pe);
      let Ae = ye(pe.response, "results") || [];
      !pe.succeeded || Ae.label == 0;
    }
    function Il() {
      let $ = {
        include: "total",
        take: he.value
      }, D = pt(de.value.selectedColumns || n.selectedColumns);
      if (D.length > 0) {
        let ae = Ve.value;
        ae && !D.includes(ae.name) && (D = [ae.name, ...D]);
        const pe = xe.value, Ae = [];
        D.forEach((Ee) => {
          var il;
          const it = pe.find((Pe) => Pe.name.toLowerCase() == Ee.toLowerCase());
          (il = it == null ? void 0 : it.ref) != null && il.selfId && Ae.push(it.ref.selfId), ye(R, Ee) && Ae.push(...pe.filter((Pe) => {
            var ht, Ut;
            return ((Ut = (ht = Pe.ref) == null ? void 0 : ht.selfId) == null ? void 0 : Ut.toLowerCase()) == Ee.toLowerCase();
          }).map((Pe) => Pe.name));
        }), Ae.forEach((Ee) => {
          D.includes(Ee) || D.push(Ee);
        }), $.fields = D.join(",");
      }
      let me = [];
      if (x.value.forEach((ae) => {
        ae.settings.sort && me.push((ae.settings.sort === "DESC" ? "-" : "") + ae.name), ae.settings.filters.forEach((pe) => {
          let Ae = pe.key.replace("%", ae.name);
          $[Ae] = pe.value;
        });
      }), n.filters && Object.keys(n.filters).forEach((ae) => {
        $[ae] = n.filters[ae];
      }), v("queryString") && v("queryFilters")) {
        const ae = location.search ? location.search : location.hash.includes("?") ? "?" + dl(location.hash, "?") : "";
        let pe = zl(ae);
        if (Object.keys(pe).forEach((Ae) => {
          M.value.find((it) => it.name.toLowerCase() === Ae.toLowerCase()) && ($[Ae] = pe[Ae]);
        }), typeof pe.skip < "u") {
          const Ae = parseInt(pe.skip);
          isNaN(Ae) || (V.value = $.skip = Ae);
        }
      }
      return typeof $.skip > "u" && V.value > 0 && ($.skip = V.value), me.length > 0 && ($.orderBy = me.join(",")), $;
    }
    function Qs() {
      const $ = Mn("csv");
      ql($), typeof window < "u" && window.open($);
    }
    function Ks() {
      const $ = Mn("json");
      ql($), oe.value = !0, setTimeout(() => oe.value = !1, 3e3);
    }
    function Mn($ = "json") {
      var Ae;
      const D = Il(), me = `/api/${(Ae = be.value.AnyQuery) == null ? void 0 : Ae.request.name}`, ae = yo(c.baseUrl, Kt(me, { ...D, jsconfig: "edv" }));
      return ae.indexOf("?") >= 0 ? xl(ae, "?") + "." + $ + "?" + dl(ae, "?") : ae + ".json";
    }
    async function Zs() {
      x.value.forEach(($) => {
        $.settings = { filters: [] }, h.removeItem(sl($.name));
      }), de.value = { take: Le }, h.removeItem(Dl()), await lt();
    }
    function Gs() {
      C.value = !0, Qe({ create: null });
    }
    const At = f(() => Et(n.type)), ct = f(() => {
      var $;
      return At.value || (($ = be.value.AnyQuery) == null ? void 0 : $.dataModel.name);
    }), Dl = () => {
      var $;
      return `${n.id}/ApiPrefs/${At.value || (($ = be.value.AnyQuery) == null ? void 0 : $.dataModel.name)}`;
    }, sl = ($) => {
      var D;
      return `Column/${n.id}:${At.value || ((D = be.value.AnyQuery) == null ? void 0 : D.dataModel.name)}.${$}`;
    }, { metadataApi: An, typeOf: jl, apiOf: Tn, filterDefinitions: Ws } = at(), { invalidAccessMessage: Ol } = $n(), Fn = f(() => n.filterDefinitions || Ws.value), be = f(() => {
      let $ = pt(n.apis);
      return $.length > 0 ? Pt.from($.map((D) => Tn(D)).filter((D) => D != null).map((D) => D)) : Pt.forType(At.value, An.value);
    }), ol = ($) => `<span class="text-yellow-700">${$}</span>`, In = f(() => {
      if (!An.value)
        return ol(`AppMetadata not loaded, see <a class="${bl.blue}" href="https://docs.servicestack.net/vue/use-metadata" target="_blank">useMetadata()</a>`);
      let D = pt(n.apis).map((ae) => Tn(ae) == null ? ae : null).filter((ae) => ae != null);
      if (D.length > 0)
        return ol(`Unknown API${D.length > 1 ? "s" : ""}: ${D.join(", ")}`);
      let me = be.value;
      return me.empty ? ol("Mising DataModel in property 'type' or AutoQuery APIs to use in property 'apis'") : me.AnyQuery ? null : ol(_e.NoQuery);
    }), Dn = f(() => be.value.AnyQuery && Ol(be.value.AnyQuery)), jn = f(() => be.value.Create && Ol(be.value.Create)), On = f(() => be.value.AnyUpdate && Ol(be.value.AnyUpdate)), Js = f(() => vl(be.value.Create));
    f(() => vl(be.value.AnyUpdate));
    const Pn = f(() => vl(be.value.Delete));
    function zt() {
      B.value = null, L.value = null, Qe({ edit: void 0 });
    }
    function Nt() {
      C.value = !1, Qe({ create: void 0 });
    }
    async function al() {
      await lt(), zt();
    }
    async function Pl() {
      await lt(), Nt();
    }
    function Bn() {
      var me;
      K.value = new Je(), E.value = new Je(), C.value = !1, L.value = null, B.value = null, fe.value = !1, I.value = null, V.value = n.skip, oe.value = !1, de.value = { take: Le }, ue.value = !1;
      const $ = n.prefs || yl(h.getItem(Dl()));
      $ && (de.value = $), x.value = M.value.map((ae) => ({
        name: ae.name,
        type: ae.type,
        meta: ae,
        settings: Object.assign(
          {
            filters: []
          },
          yl(h.getItem(sl(ae.name)))
        )
      })), isNaN(n.skip) || (V.value = n.skip);
      let D = (me = Ve.value) == null ? void 0 : me.name;
      if (v("queryString")) {
        const ae = location.search ? location.search : location.hash.includes("?") ? "?" + dl(location.hash, "?") : "";
        let pe = zl(ae);
        typeof pe.create < "u" ? C.value = typeof pe.create < "u" : D && (typeof pe.edit == "string" || typeof pe.edit == "number") && Ge(D, pe.edit);
      }
      n.create === !0 && (C.value = !0), D && n.edit != null && Ge(D, n.edit);
    }
    return tt(async () => {
      Bn(), await lt();
    }), ($, D) => {
      const me = X("Alert"), ae = X("EnsureAccessDialog"), pe = X("AutoCreateForm"), Ae = X("AutoEditForm"), Ee = X("ErrorSummary"), it = X("Loading"), Rn = X("SettingsIcons"), il = X("DataGrid");
      return o(In) ? (a(), u("div", zr, [
        $e(me, { innerHTML: o(In) }, null, 8, ["innerHTML"])
      ])) : o(Dn) ? (a(), u("div", Nr, [
        $e(zs, { "invalid-access": o(Dn) }, null, 8, ["invalid-access"])
      ])) : (a(), u("div", Ur, [
        C.value && o(be).Create ? (a(), u("div", qr, [
          o(jn) ? (a(), se(ae, {
            key: 0,
            title: `Create ${o(ct)}`,
            "invalid-access": o(jn),
            "alert-class": "text-yellow-700",
            onDone: Nt
          }, null, 8, ["title", "invalid-access"])) : o(R).createform ? Z($.$slots, "createform", {
            key: 1,
            type: o(be).Create.request.name,
            configure: e.configureField,
            done: Nt,
            save: Pl
          }) : (a(), se(pe, {
            key: 2,
            ref_key: "createForm",
            ref: Oe,
            type: o(be).Create.request.name,
            configure: e.configureField,
            onDone: Nt,
            onSave: Pl
          }, {
            header: ke(() => [
              Z($.$slots, "formheader", {
                form: "create",
                formInstance: Oe.value,
                apis: o(be),
                type: o(ct)
              })
            ]),
            footer: ke(() => [
              Z($.$slots, "formfooter", {
                form: "create",
                formInstance: Oe.value,
                apis: o(be),
                type: o(ct)
              })
            ]),
            _: 3
          }, 8, ["type", "configure"]))
        ])) : B.value && o(be).AnyUpdate ? (a(), u("div", Qr, [
          o(On) ? (a(), se(ae, {
            key: 0,
            title: `Update ${o(ct)}`,
            "invalid-access": o(On),
            "alert-class": "text-yellow-700",
            onDone: zt
          }, null, 8, ["title", "invalid-access"])) : o(R).editform ? Z($.$slots, "editform", {
            key: 1,
            model: B.value,
            type: o(be).AnyUpdate.request.name,
            deleteType: o(Pn) ? o(be).Delete.request.name : null,
            configure: e.configureField,
            done: zt,
            save: al
          }) : (a(), se(Ae, {
            key: 2,
            ref_key: "editForm",
            ref: Re,
            modelValue: B.value,
            "onUpdate:modelValue": D[0] || (D[0] = (Pe) => B.value = Pe),
            type: o(be).AnyUpdate.request.name,
            deleteType: o(Pn) ? o(be).Delete.request.name : null,
            configure: e.configureField,
            onDone: zt,
            onSave: al,
            onDelete: al
          }, {
            header: ke(() => [
              Z($.$slots, "formheader", {
                form: "edit",
                formInstance: Re.value,
                apis: o(be),
                type: o(ct),
                model: B.value,
                id: L.value,
                updateModel: Fl
              })
            ]),
            footer: ke(() => [
              Z($.$slots, "formfooter", {
                form: "edit",
                formInstance: Re.value,
                apis: o(be),
                type: o(ct),
                model: B.value,
                id: L.value,
                updateModel: Fl
              })
            ]),
            _: 3
          }, 8, ["modelValue", "type", "deleteType", "configure"]))
        ])) : k("", !0),
        o(R).toolbar ? Z($.$slots, "toolbar", { key: 2 }) : g("toolbar") ? (a(), u("div", Kr, [
          fe.value ? (a(), se(Ln, {
            key: 0,
            columns: o(M),
            prefs: de.value,
            onDone: D[1] || (D[1] = (Pe) => fe.value = !1),
            onSave: Us
          }, null, 8, ["columns", "prefs"])) : k("", !0),
          s("div", Zr, [
            s("div", Gr, [
              g("preferences") ? (a(), u("button", {
                key: 0,
                type: "button",
                class: "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400",
                title: `${o(ct)} Preferences`,
                onClick: D[2] || (D[2] = (Pe) => fe.value = !fe.value)
              }, Xr, 8, Wr)) : k("", !0),
              g("pagingNav") ? (a(), u("button", {
                key: 1,
                type: "button",
                class: w(["pl-2", o(H) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "First page",
                disabled: !o(H),
                onClick: D[3] || (D[3] = (Pe) => je(-o(Q)))
              }, tu, 10, Yr)) : k("", !0),
              g("pagingNav") ? (a(), u("button", {
                key: 2,
                type: "button",
                class: w(["pl-2", o(re) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "Previous page",
                disabled: !o(re),
                onClick: D[4] || (D[4] = (Pe) => je(-o(he)))
              }, su, 10, lu)) : k("", !0),
              g("pagingNav") ? (a(), u("button", {
                key: 3,
                type: "button",
                class: w(["pl-2", o(ve) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "Next page",
                disabled: !o(ve),
                onClick: D[5] || (D[5] = (Pe) => je(o(he)))
              }, iu, 10, ou)) : k("", !0),
              g("pagingNav") ? (a(), u("button", {
                key: 4,
                type: "button",
                class: w(["pl-2", o(Se) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "Last page",
                disabled: !o(Se),
                onClick: D[6] || (D[6] = (Pe) => je(o(Q)))
              }, du, 10, ru)) : k("", !0)
            ]),
            g("pagingInfo") ? (a(), u("div", cu, [
              s("div", fu, [
                ue.value ? (a(), u("span", mu, "Querying...")) : k("", !0),
                o(De).length ? (a(), u("span", vu, [
                  hu,
                  we(" " + T(V.value + 1) + " - " + T(Math.min(V.value + o(De).length, o(Q))) + " ", 1),
                  s("span", null, " of " + T(o(Q)), 1)
                ])) : K.value.completed ? (a(), u("span", gu, "No Results")) : k("", !0)
              ])
            ])) : k("", !0),
            s("div", pu, [
              g("refresh") ? (a(), u("div", yu, [
                s("button", {
                  type: "button",
                  onClick: qs,
                  title: "Refresh",
                  class: w(o(U))
                }, wu, 2)
              ])) : k("", !0),
              g("downloadCsv") ? (a(), u("div", xu, [
                s("button", {
                  type: "button",
                  onClick: Qs,
                  title: "Download CSV",
                  class: w(o(U))
                }, $u, 2)
              ])) : k("", !0),
              g("copyApiUrl") ? (a(), u("div", Cu, [
                s("button", {
                  type: "button",
                  onClick: Ks,
                  title: "Copy API URL",
                  class: w(o(U))
                }, [
                  oe.value ? (a(), u("svg", _u, Vu)) : (a(), u("svg", Su, Au)),
                  Tu
                ], 2)
              ])) : k("", !0),
              o(_) && g("resetPreferences") ? (a(), u("div", Fu, [
                s("button", {
                  type: "button",
                  onClick: Zs,
                  title: "Reset Preferences & Filters",
                  class: w(o(U))
                }, Du, 2)
              ])) : k("", !0),
              g("filtersView") && o(ie) > 0 ? (a(), u("div", ju, [
                s("button", {
                  type: "button",
                  onClick: D[7] || (D[7] = (Pe) => q.value = q.value == "filters" ? null : "filters"),
                  class: w(o(U)),
                  "aria-expanded": "false"
                }, [
                  Ou,
                  s("span", Pu, T(o(ie)) + " " + T(o(ie) == 1 ? "Filter" : "Filters"), 1),
                  q.value != "filters" ? (a(), u("svg", Bu, Eu)) : (a(), u("svg", Hu, Nu))
                ], 2)
              ])) : k("", !0),
              g("newItem") && o(be).Create && o(Js) ? (a(), u("div", Uu, [
                s("button", {
                  type: "button",
                  onClick: Gs,
                  title: o(ct),
                  class: w(o(U))
                }, [
                  Qu,
                  s("span", Ku, "New " + T(o(ct)), 1)
                ], 10, qu)
              ])) : k("", !0),
              o(R).toolbarbuttons ? Z($.$slots, "toolbarbuttons", {
                key: 6,
                toolbarButtonClass: o(U)
              }) : k("", !0)
            ])
          ])
        ])) : k("", !0),
        q.value == "filters" ? (a(), se(_n, {
          key: 4,
          class: "border-y border-gray-200 dark:border-gray-800 py-8 my-2",
          definitions: o(Fn),
          columns: x.value,
          onDone: D[8] || (D[8] = (Pe) => q.value = null),
          onChange: Ns
        }, null, 8, ["definitions", "columns"])) : k("", !0),
        E.value.error ?? K.value.error ? (a(), se(Ee, {
          key: 5,
          status: E.value.error ?? K.value.error
        }, null, 8, ["status"])) : ue.value ? (a(), se(it, {
          key: 6,
          class: "p-2"
        })) : k("", !0),
        I.value ? (a(), u("div", Zu, [
          $e(Cn, {
            definitions: o(Fn),
            column: I.value.column,
            "top-left": I.value.topLeft,
            onDone: ll,
            onSave: nl
          }, null, 8, ["definitions", "column", "top-left"])
        ])) : k("", !0),
        o(De).length ? (a(), se(il, {
          key: 8,
          id: e.id,
          items: o(De),
          type: e.type,
          "selected-columns": o(le),
          class: "mt-1",
          onFiltersChanged: lt,
          tableStyle: o(O),
          gridClass: o(N),
          grid2Class: o(ee),
          grid3Class: o(P),
          grid4Class: o(z),
          tableClass: o(F),
          theadClass: o(W),
          theadRowClass: o(j),
          theadCellClass: o(S),
          tbodyClass: e.tbodyClass,
          rowClass: te,
          onRowSelected: Mt,
          rowStyle: e.rowStyle,
          headerTitle: e.headerTitle,
          headerTitles: e.headerTitles,
          visibleFrom: e.visibleFrom,
          onHeaderSelected: vt
        }, tn({
          header: ke(({ column: Pe, label: ht }) => {
            var Ut;
            return [
              v("filtering") && Fe(Pe) ? (a(), u("div", Gu, [
                s("span", Wu, T(ht), 1),
                $e(Rn, {
                  column: x.value.find((Xs) => Xs.name.toLowerCase() === Pe.toLowerCase()),
                  "is-open": ((Ut = I.value) == null ? void 0 : Ut.column.name) === Pe
                }, null, 8, ["column", "is-open"])
              ])) : (a(), u("div", Ju, [
                s("span", Xu, T(ht), 1)
              ]))
            ];
          }),
          _: 2
        }, [
          Ie(Object.keys(o(R)), (Pe) => ({
            name: Pe,
            fn: ke((ht) => [
              Z($.$slots, Pe, jt(gl(ht)))
            ])
          }))
        ]), 1032, ["id", "items", "type", "selected-columns", "tableStyle", "gridClass", "grid2Class", "grid3Class", "grid4Class", "tableClass", "theadClass", "theadRowClass", "theadCellClass", "tbodyClass", "rowStyle", "headerTitle", "headerTitles", "visibleFrom"])) : k("", !0)
      ]));
    };
  }
}), ed = { class: "flex" }, td = {
  key: 0,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ld = /* @__PURE__ */ s("g", { fill: "none" }, [
  /* @__PURE__ */ s("path", {
    d: "M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2.586a1 1 0 0 1-.293.707l-6.414 6.414a1 1 0 0 0-.293.707V17l-4 4v-6.586a1 1 0 0 0-.293-.707L3.293 7.293A1 1 0 0 1 3 6.586V4z",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })
], -1), nd = [
  ld
], sd = /* @__PURE__ */ s("path", {
  d: "M505.5 658.7c3.2 4.4 9.7 4.4 12.9 0l178-246c3.8-5.3 0-12.7-6.5-12.7H643c-10.2 0-19.9 4.9-25.9 13.2L512 558.6L406.8 413.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246z",
  fill: "currentColor"
}, null, -1), od = /* @__PURE__ */ s("path", {
  d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z",
  fill: "currentColor"
}, null, -1), ad = [
  sd,
  od
], id = {
  key: 2,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, rd = /* @__PURE__ */ s("g", { fill: "none" }, [
  /* @__PURE__ */ s("path", {
    d: "M8.998 4.71L6.354 7.354a.5.5 0 1 1-.708-.707L9.115 3.18A.499.499 0 0 1 9.498 3H9.5a.5.5 0 0 1 .354.147l.01.01l3.49 3.49a.5.5 0 1 1-.707.707l-2.65-2.649V16.5a.5.5 0 0 1-1 0V4.71z",
    fill: "currentColor"
  })
], -1), ud = [
  rd
], dd = {
  key: 3,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, cd = /* @__PURE__ */ s("g", { fill: "none" }, [
  /* @__PURE__ */ s("path", {
    d: "M10.002 15.29l2.645-2.644a.5.5 0 0 1 .707.707L9.886 16.82a.5.5 0 0 1-.384.179h-.001a.5.5 0 0 1-.354-.147l-.01-.01l-3.49-3.49a.5.5 0 1 1 .707-.707l2.648 2.649V3.5a.5.5 0 0 1 1 0v11.79z",
    fill: "currentColor"
  })
], -1), fd = [
  cd
], md = /* @__PURE__ */ ce({
  __name: "SettingsIcons",
  props: {
    column: null,
    isOpen: { type: Boolean }
  },
  setup(e) {
    return (t, l) => {
      var n, i, r, d, c, h, m;
      return a(), u("div", ed, [
        (r = (i = (n = e.column) == null ? void 0 : n.settings) == null ? void 0 : i.filters) != null && r.length ? (a(), u("svg", td, nd)) : (a(), u("svg", {
          key: 1,
          class: w(["w-4 h-4 transition-transform", e.isOpen ? "rotate-180" : ""]),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 1024 1024"
        }, ad, 2)),
        ((c = (d = e.column) == null ? void 0 : d.settings) == null ? void 0 : c.sort) === "ASC" ? (a(), u("svg", id, ud)) : ((m = (h = e.column) == null ? void 0 : h.settings) == null ? void 0 : m.sort) === "DESC" ? (a(), u("svg", dd, fd)) : k("", !0)
      ]);
    };
  }
}), vd = /* @__PURE__ */ ce({
  __name: "EnsureAccessDialog",
  props: {
    title: null,
    subtitle: null,
    invalidAccess: null,
    alertClass: null
  },
  emits: ["done"],
  setup(e) {
    return (t, l) => {
      const n = X("EnsureAccess"), i = X("SlideOver");
      return e.invalidAccess ? (a(), se(i, {
        key: 0,
        title: e.title,
        onDone: l[0] || (l[0] = (r) => t.$emit("done")),
        "content-class": "relative flex-1"
      }, tn({
        default: ke(() => [
          $e(n, {
            alertClass: e.alertClass,
            invalidAccess: e.invalidAccess
          }, null, 8, ["alertClass", "invalidAccess"])
        ]),
        _: 2
      }, [
        e.subtitle ? {
          name: "subtitle",
          fn: ke(() => [
            we(T(e.subtitle), 1)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["title"])) : k("", !0);
    };
  }
}), hd = ["for"], gd = { class: "mt-1 relative rounded-md shadow-sm" }, pd = ["type", "name", "id", "placeholder", "value", "aria-invalid", "aria-describedby"], yd = {
  key: 0,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
}, bd = /* @__PURE__ */ s("svg", {
  class: "h-5 w-5 text-red-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
    "clip-rule": "evenodd"
  })
], -1), wd = [
  bd
], xd = ["id"], kd = ["id"], $d = {
  inheritAttrs: !1
}, Cd = /* @__PURE__ */ ce({
  ...$d,
  __name: "TextInput",
  props: {
    status: null,
    id: null,
    type: null,
    inputClass: null,
    label: null,
    labelClass: null,
    help: null,
    placeholder: null,
    modelValue: null
  },
  setup(e, { expose: t }) {
    const l = e, n = (p) => p.value;
    t({
      focus: r
    });
    const i = A();
    function r() {
      var p;
      (p = i.value) == null || p.focus();
    }
    const d = f(() => l.type || "text"), c = f(() => l.label ?? He(st(l.id))), h = f(() => l.placeholder ?? c.value);
    let m = Ne("ApiState", void 0);
    const y = f(() => mt.call({ responseStatus: l.status ?? (m == null ? void 0 : m.error.value) }, l.id)), b = f(() => [nt.base, y.value ? nt.invalid : nt.valid, l.inputClass]);
    return (p, v) => (a(), u("div", {
      class: w([p.$attrs.class])
    }, [
      Z(p.$slots, "header", Me({
        inputElement: i.value,
        id: e.id,
        modelValue: e.modelValue,
        status: e.status
      }, p.$attrs)),
      o(c) ? (a(), u("label", {
        key: 0,
        for: e.id,
        class: w(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, T(o(c)), 11, hd)) : k("", !0),
      s("div", gd, [
        s("input", Me({
          ref_key: "inputElement",
          ref: i,
          type: o(d),
          name: e.id,
          id: e.id,
          class: o(b),
          placeholder: o(h),
          value: e.modelValue,
          onInput: v[0] || (v[0] = (g) => p.$emit("update:modelValue", n(g.target))),
          "aria-invalid": o(y) != null,
          "aria-describedby": `${e.id}-error`,
          step: "any"
        }, o(dt)(p.$attrs, ["class"])), null, 16, pd),
        o(y) ? (a(), u("div", yd, wd)) : k("", !0)
      ]),
      o(y) ? (a(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, T(o(y)), 9, xd)) : e.help ? (a(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, T(e.help), 9, kd)) : k("", !0),
      Z(p.$slots, "footer", Me({
        inputElement: i.value,
        id: e.id,
        modelValue: e.modelValue,
        status: e.status
      }, p.$attrs))
    ], 2));
  }
}), _d = ["for"], Ld = { class: "mt-1 relative rounded-md shadow-sm" }, Vd = ["name", "id", "placeholder", "aria-invalid", "aria-describedby"], Sd = ["id"], Md = ["id"], Ad = {
  inheritAttrs: !1
}, Td = /* @__PURE__ */ ce({
  ...Ad,
  __name: "TextareaInput",
  props: {
    status: null,
    id: null,
    inputClass: null,
    label: null,
    labelClass: null,
    help: null,
    placeholder: null,
    modelValue: null
  },
  setup(e) {
    const t = e, l = (h) => h.value, n = f(() => t.label ?? He(st(t.id))), i = f(() => t.placeholder ?? n.value);
    let r = Ne("ApiState", void 0);
    const d = f(() => mt.call({ responseStatus: t.status ?? (r == null ? void 0 : r.error.value) }, t.id)), c = f(() => ["shadow-sm " + nt.base, d.value ? "text-red-900 focus:ring-red-500 focus:border-red-500 border-red-300" : "text-gray-900 " + nt.valid, t.inputClass]);
    return (h, m) => (a(), u("div", {
      class: w([h.$attrs.class])
    }, [
      o(n) ? (a(), u("label", {
        key: 0,
        for: e.id,
        class: w(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, T(o(n)), 11, _d)) : k("", !0),
      s("div", Ld, [
        s("textarea", Me({
          name: e.id,
          id: e.id,
          class: o(c),
          placeholder: o(i),
          onInput: m[0] || (m[0] = (y) => h.$emit("update:modelValue", l(y.target))),
          "aria-invalid": o(d) != null,
          "aria-describedby": `${e.id}-error`
        }, o(dt)(h.$attrs, ["class"])), T(e.modelValue), 17, Vd)
      ]),
      o(d) ? (a(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, T(o(d)), 9, Sd)) : e.help ? (a(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, T(e.help), 9, Md)) : k("", !0)
    ], 2));
  }
}), Fd = ["for"], Id = ["id", "name", "value", "aria-invalid", "aria-describedby"], Dd = ["value"], jd = ["id"], Od = {
  inheritAttrs: !1
}, Pd = /* @__PURE__ */ ce({
  ...Od,
  __name: "SelectInput",
  props: {
    status: null,
    id: null,
    modelValue: null,
    inputClass: null,
    label: null,
    labelClass: null,
    options: null,
    values: null,
    entries: null
  },
  setup(e) {
    const t = e, l = (c) => c.value, n = f(() => t.label ?? He(st(t.id)));
    let i = Ne("ApiState", void 0);
    const r = f(() => mt.call({ responseStatus: t.status ?? (i == null ? void 0 : i.error.value) }, t.id)), d = f(() => t.entries || (t.values ? t.values.map((c) => ({ key: c, value: c })) : t.options ? Object.keys(t.options).map((c) => ({ key: c, value: t.options[c] })) : []));
    return (c, h) => (a(), u("div", {
      class: w([c.$attrs.class])
    }, [
      o(n) ? (a(), u("label", {
        key: 0,
        for: e.id,
        class: w(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, T(o(n)), 11, Fd)) : k("", !0),
      s("select", Me({
        id: e.id,
        name: e.id,
        class: [
          "mt-1 block w-full pl-3 pr-10 py-2 text-base focus:outline-none sm:text-sm rounded-md dark:text-white dark:bg-gray-900 dark:border-gray-600",
          o(r) ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : "border-gray-300 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500",
          e.inputClass
        ],
        value: e.modelValue,
        onInput: h[0] || (h[0] = (m) => c.$emit("update:modelValue", l(m.target))),
        "aria-invalid": o(r) != null,
        "aria-describedby": `${e.id}-error`
      }, o(dt)(c.$attrs, ["class"])), [
        (a(!0), u(Te, null, Ie(o(d), (m) => (a(), u("option", {
          value: m.key
        }, T(m.value), 9, Dd))), 256))
      ], 16, Id),
      o(r) ? (a(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, T(o(r)), 9, jd)) : k("", !0)
    ], 2));
  }
}), Bd = { class: "flex items-center h-5" }, Rd = ["id", "name", "checked"], Ed = { class: "ml-3 text-sm" }, Hd = ["for"], zd = {
  key: 0,
  class: "mt-2 text-sm text-red-500",
  id: "`${id}-error`"
}, Nd = {
  key: 1,
  class: "mt-2 text-sm text-gray-500",
  id: "`${id}-description`"
}, Ud = {
  inheritAttrs: !1
}, qd = /* @__PURE__ */ ce({
  ...Ud,
  __name: "CheckboxInput",
  props: {
    modelValue: { type: Boolean },
    status: null,
    id: null,
    inputClass: null,
    label: null,
    labelClass: null,
    help: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e, n = f(() => l.label ?? He(st(l.id)));
    let i = Ne("ApiState", void 0);
    const r = f(() => mt.call({ responseStatus: l.status ?? (i == null ? void 0 : i.error.value) }, l.id));
    return (d, c) => (a(), u("div", {
      class: w(["relative flex items-start", d.$attrs.class])
    }, [
      s("div", Bd, [
        s("input", Me({
          id: e.id,
          name: e.id,
          type: "checkbox",
          checked: e.modelValue,
          onInput: c[0] || (c[0] = (h) => d.$emit("update:modelValue", h.target.checked)),
          class: ["focus:ring-indigo-500 h-4 w-4 text-indigo-600 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800", e.inputClass]
        }, o(dt)(d.$attrs, ["class"])), null, 16, Rd)
      ]),
      s("div", Ed, [
        s("label", {
          for: e.id,
          class: w(`font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
        }, T(o(n)), 11, Hd),
        o(r) ? (a(), u("p", zd, T(o(r)), 1)) : e.help ? (a(), u("p", Nd, T(e.help), 1)) : k("", !0)
      ])
    ], 2));
  }
}), Qd = ["id"], Kd = ["for"], Zd = { class: "mt-1 relative rounded-md shadow-sm" }, Gd = ["id", "name", "value"], Wd = ["onClick"], Jd = { class: "flex flex-wrap pb-1.5" }, Xd = { class: "pt-1.5 pl-1" }, Yd = { class: "inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-300" }, ec = ["onClick"], tc = /* @__PURE__ */ s("svg", {
  class: "h-2 w-2",
  stroke: "currentColor",
  fill: "none",
  viewBox: "0 0 8 8"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-width": "1.5",
    d: "M1 1l6 6m0-6L1 7"
  })
], -1), lc = [
  tc
], nc = { class: "pt-1.5 pl-1 shrink" }, sc = ["type", "name", "id", "aria-invalid", "aria-describedby", "onPaste"], oc = ["id"], ac = ["onMouseover", "onClick"], ic = { class: "block truncate" }, rc = {
  key: 1,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
}, uc = /* @__PURE__ */ s("svg", {
  class: "h-5 w-5 text-red-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
    "clip-rule": "evenodd"
  })
], -1), dc = [
  uc
], cc = ["id"], fc = ["id"], mc = {
  inheritAttrs: !1
}, vc = /* @__PURE__ */ ce({
  ...mc,
  __name: "TagInput",
  props: {
    status: null,
    id: null,
    type: null,
    inputClass: null,
    label: null,
    labelClass: null,
    help: null,
    modelValue: { default: () => [] },
    delimiters: { default: () => [","] },
    allowableValues: null,
    string: { type: Boolean },
    converter: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e;
    function n(x) {
      return l.converter ? l.converter(x) : x;
    }
    const i = f(() => qe(n(l.modelValue), (x) => typeof x == "string" ? x.trim().length == 0 ? [] : x.split(",") : x) || []), r = A(), d = A(!1), c = f(() => !l.allowableValues || l.allowableValues.length == 0 ? [] : l.allowableValues.filter((x) => !i.value.includes(x) && x.toLowerCase().includes(y.value.toLowerCase())));
    function h(x) {
      r.value = x;
    }
    const m = A(null), y = A(""), b = f(() => l.type || "text"), p = f(() => l.label ?? He(st(l.id)));
    let v = Ne("ApiState", void 0);
    const g = f(() => mt.call({ responseStatus: l.status ?? (v == null ? void 0 : v.error.value) }, l.id)), O = f(() => [
      "w-full cursor-text flex flex-wrap sm:text-sm rounded-md dark:text-white dark:bg-gray-900 border focus-within:border-transparent focus-within:ring-1 focus-within:outline-none",
      g.value ? "pr-10 border-red-300 text-red-900 placeholder-red-300 focus-within:outline-none focus-within:ring-red-500 focus-within:border-red-500" : "shadow-sm border-gray-300 dark:border-gray-600 focus-within:ring-indigo-500 focus-within:border-indigo-500",
      l.inputClass
    ]), N = (x) => j(i.value.filter((K) => K != x));
    function ee(x) {
      var K;
      document.activeElement === x.target && ((K = m.value) == null || K.focus());
    }
    const P = A();
    function z() {
      d.value = !0, P.value = !0;
    }
    function F() {
      z();
    }
    function W() {
      G(U()), P.value = !1, setTimeout(() => {
        P.value || (d.value = !1);
      }, 200);
    }
    function j(x) {
      const K = l.string ? x.join(",") : x;
      t("update:modelValue", K);
    }
    function S(x) {
      if (x.key == "Backspace" && y.value.length == 0 && i.value.length > 0 && N(i.value[i.value.length - 1]), !(!l.allowableValues || l.allowableValues.length == 0))
        if (x.code == "Escape" || x.code == "Tab")
          d.value = !1;
        else if (x.code == "Home")
          r.value = c.value[0], J();
        else if (x.code == "End")
          r.value = c.value[c.value.length - 1], J();
        else if (x.code == "ArrowDown") {
          if (d.value = !0, !r.value)
            r.value = c.value[0];
          else {
            const K = c.value.indexOf(r.value);
            r.value = K + 1 < c.value.length ? c.value[K + 1] : c.value[0];
          }
          Y();
        } else if (x.code == "ArrowUp") {
          if (!r.value)
            r.value = c.value[c.value.length - 1];
          else {
            const K = c.value.indexOf(r.value);
            r.value = K - 1 >= 0 ? c.value[K - 1] : c.value[c.value.length - 1];
          }
          Y();
        } else
          x.code == "Enter" ? r.value && d.value ? (G(r.value), x.preventDefault()) : d.value = !1 : d.value = c.value.length > 0;
    }
    function U() {
      if (y.value.length == 0)
        return "";
      let x = bo(y.value.trim(), ",");
      return x[0] == "," && (x = x.substring(1)), x = x.trim(), x.length == 0 && d.value && c.value.length > 0 ? r.value : x;
    }
    function te(x) {
      const K = U();
      if (K.length > 0) {
        const E = l.delimiters.some((C) => C == x.key);
        if (E && x.preventDefault(), x.key == "Enter" || x.key == "NumpadEnter" || x.key.length == 1 && E) {
          G(K);
          return;
        }
      }
    }
    const R = { behavior: "smooth", block: "nearest", inline: "nearest", scrollMode: "if-needed" };
    function J() {
      setTimeout(() => {
        let x = pl(`#${l.id}-tag li.active`);
        x && x.scrollIntoView(R);
      }, 0);
    }
    function Y() {
      setTimeout(() => {
        let x = pl(`#${l.id}-tag li.active`);
        x && ("scrollIntoViewIfNeeded" in x ? x.scrollIntoViewIfNeeded(R) : x.scrollIntoView(R));
      }, 0);
    }
    function G(x) {
      if (x.length === 0)
        return;
      const K = Array.from(i.value);
      K.indexOf(x) == -1 && K.push(x), j(K), y.value = "", d.value = !1;
    }
    function M(x) {
      var E;
      const K = (E = x.clipboardData) == null ? void 0 : E.getData("Text");
      le(K);
    }
    function le(x) {
      if (!x)
        return;
      const K = new RegExp(`\\n|\\t|${l.delimiters.join("|")}`), E = Array.from(i.value);
      x.split(K).map((C) => C.trim()).forEach((C) => {
        E.indexOf(C) == -1 && E.push(C);
      }), j(E), y.value = "";
    }
    return (x, K) => (a(), u("div", {
      class: w([x.$attrs.class]),
      id: `${e.id}-tag`,
      onmousemove: "cancelBlur=true"
    }, [
      o(p) ? (a(), u("label", {
        key: 0,
        for: e.id,
        class: w(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, T(o(p)), 11, Kd)) : k("", !0),
      s("div", Zd, [
        s("input", {
          type: "hidden",
          id: e.id,
          name: e.id,
          value: o(i).join(",")
        }, null, 8, Gd),
        s("button", {
          class: w(o(O)),
          onClick: Ue(ee, ["prevent"]),
          onFocus: K[2] || (K[2] = (E) => d.value = !0),
          tabindex: "-1"
        }, [
          s("div", Jd, [
            (a(!0), u(Te, null, Ie(o(i), (E) => (a(), u("div", Xd, [
              s("span", Yd, [
                we(T(E) + " ", 1),
                s("button", {
                  type: "button",
                  onClick: (q) => N(E),
                  class: "flex-shrink-0 ml-1 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 dark:text-indigo-500 hover:bg-indigo-200 dark:hover:bg-indigo-800 hover:text-indigo-500 dark:hover:text-indigo-400 focus:outline-none focus:bg-indigo-500 focus:text-white dark:focus:text-black"
                }, lc, 8, ec)
              ])
            ]))), 256)),
            s("div", nc, [
              kt(s("input", Me({
                ref_key: "txtInput",
                ref: m,
                type: o(b),
                role: "combobox",
                "aria-controls": "options",
                "aria-expanded": "false",
                autocomplete: "off",
                spellcheck: "false",
                name: `${e.id}-txt`,
                id: `${e.id}-txt`,
                class: "p-0 dark:bg-transparent rounded-md border-none focus:!border-none focus:!outline-none",
                style: `box-shadow:none !important;width:${y.value.length + 1}ch`,
                "onUpdate:modelValue": K[0] || (K[0] = (E) => y.value = E),
                "aria-invalid": o(g) != null,
                "aria-describedby": `${e.id}-error`,
                onKeydown: S,
                onKeypress: te,
                onPaste: Ue(M, ["prevent", "stop"]),
                onFocus: F,
                onBlur: W,
                onClick: K[1] || (K[1] = (E) => d.value = !0)
              }, o(dt)(x.$attrs, ["class", "required"])), null, 16, sc), [
                [no, y.value]
              ])
            ])
          ])
        ], 42, Wd),
        d.value && o(c).length ? (a(), u("ul", {
          key: 0,
          class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-black py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
          onKeydown: S,
          id: `${e.id}-options`,
          role: "listbox"
        }, [
          (a(!0), u(Te, null, Ie(o(c), (E) => (a(), u("li", {
            class: w([E === r.value ? "active bg-indigo-600 text-white" : "text-gray-900 dark:text-gray-100", "relative cursor-default select-none py-2 pl-3 pr-9"]),
            onMouseover: (q) => h(E),
            onClick: (q) => G(E),
            role: "option",
            tabindex: "-1"
          }, [
            s("span", ic, T(E), 1)
          ], 42, ac))), 256))
        ], 40, oc)) : k("", !0),
        o(g) ? (a(), u("div", rc, dc)) : k("", !0)
      ]),
      o(g) ? (a(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, T(o(g)), 9, cc)) : e.help ? (a(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, T(e.help), 9, fc)) : k("", !0)
    ], 10, Qd));
  }
}), hc = { class: "relative flex-grow mr-2 sm:mr-4" }, gc = ["for"], pc = { class: "block mt-2" }, yc = { class: "sr-only" }, bc = ["multiple", "name", "id", "placeholder", "aria-invalid", "aria-describedby"], wc = {
  key: 0,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
}, xc = /* @__PURE__ */ s("svg", {
  class: "h-5 w-5 text-red-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
    "clip-rule": "evenodd"
  })
], -1), kc = [
  xc
], $c = ["id"], Cc = ["id"], _c = { key: 0 }, Lc = ["title"], Vc = ["alt", "src"], Sc = {
  key: 1,
  class: "mt-3"
}, Mc = { class: "w-full" }, Ac = { class: "pr-6 align-bottom pb-2" }, Tc = ["title"], Fc = ["src", "onError"], Ic = ["href"], Dc = {
  key: 1,
  class: "overflow-hidden"
}, jc = { class: "align-top pb-2 whitespace-nowrap" }, Oc = {
  key: 0,
  class: "text-gray-500 dark:text-gray-400 text-sm bg-white dark:bg-black"
}, Pc = /* @__PURE__ */ ce({
  __name: "FileInput",
  props: {
    multiple: { type: Boolean },
    status: null,
    id: null,
    inputClass: null,
    label: null,
    labelClass: null,
    help: null,
    placeholder: null,
    modelValue: null,
    values: null,
    files: null
  },
  setup(e) {
    var F;
    const t = e, l = A(null), { assetsPathResolver: n, fallbackPathResolver: i } = St(), r = {}, d = A(), c = A(((F = t.files) == null ? void 0 : F.map(h)) || []);
    function h(W) {
      return W.filePath = n(W.filePath), W;
    }
    t.values && t.values.length > 0 && (c.value = t.values.map((W) => {
      let j = W.replace(/\\/g, "/");
      return { fileName: wo($t(j, "/"), "."), filePath: j, contentType: Kl(j) };
    }).map(h));
    const m = f(() => t.label ?? He(st(t.id))), y = f(() => t.placeholder ?? m.value);
    let b = Ne("ApiState", void 0);
    const p = f(() => mt.call({ responseStatus: t.status ?? (b == null ? void 0 : b.error.value) }, t.id)), v = f(() => [
      "block w-full sm:text-sm rounded-md dark:text-white dark:bg-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 dark:file:bg-violet-900 file:text-violet-700 dark:file:text-violet-200 hover:file:bg-violet-100 dark:hover:file:bg-violet-800",
      p.value ? "pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500" : "text-slate-500 dark:text-slate-400",
      t.inputClass
    ]), g = (W) => {
      let j = W.target;
      d.value = "", c.value = Array.from(j.files || []).map((S) => ({
        fileName: S.name,
        filePath: un(S),
        contentLength: S.size,
        contentType: S.type || Kl(S.name)
      }));
    }, O = () => {
      var W;
      return (W = l.value) == null ? void 0 : W.click();
    }, N = (W) => W == null ? !1 : W.startsWith("data:") || W.startsWith("blob:"), ee = f(() => {
      if (c.value.length > 0)
        return c.value[0].filePath;
      let W = typeof t.modelValue == "string" ? t.modelValue : t.values && t.values[0];
      return W && yt(n(W)) || null;
    }), P = (W) => !W || W.startsWith("data:") || W.endsWith(".svg") ? "" : "rounded-full object-cover";
    function z(W) {
      d.value = i(ee.value);
    }
    return Rt(us), (W, j) => (a(), u("div", {
      class: w(["flex", e.multiple ? "flex-col" : "justify-between"])
    }, [
      s("div", hc, [
        o(m) ? (a(), u("label", {
          key: 0,
          for: e.id,
          class: w(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
        }, T(o(m)), 11, gc)) : k("", !0),
        s("div", pc, [
          s("span", yc, T(e.help ?? o(m)), 1),
          s("input", Me({
            ref_key: "input",
            ref: l,
            type: "file",
            multiple: e.multiple,
            name: e.id,
            id: e.id,
            class: o(v),
            placeholder: o(y),
            "aria-invalid": o(p) != null,
            "aria-describedby": `${e.id}-error`
          }, W.$attrs, { onChange: g }), null, 16, bc),
          o(p) ? (a(), u("div", wc, kc)) : k("", !0)
        ]),
        o(p) ? (a(), u("p", {
          key: 1,
          class: "mt-2 text-sm text-red-500",
          id: `${e.id}-error`
        }, T(o(p)), 9, $c)) : e.help ? (a(), u("p", {
          key: 2,
          class: "mt-2 text-sm text-gray-500",
          id: `${e.id}-description`
        }, T(e.help), 9, Cc)) : k("", !0)
      ]),
      e.multiple ? (a(), u("div", Sc, [
        s("table", Mc, [
          (a(!0), u(Te, null, Ie(c.value, (S) => (a(), u("tr", null, [
            s("td", Ac, [
              s("div", {
                class: "flex w-full",
                title: N(S.filePath) ? "" : S.filePath
              }, [
                s("img", {
                  src: r[o(yt)(S.filePath)] || o(n)(o(yt)(S.filePath)),
                  class: w(["mr-2 h-8 w-8", P(S.filePath)]),
                  onError: (U) => r[o(yt)(S.filePath)] = o(i)(o(yt)(S.filePath))
                }, null, 42, Fc),
                N(S.filePath) ? (a(), u("span", Dc, T(S.fileName), 1)) : (a(), u("a", {
                  key: 0,
                  href: o(n)(S.filePath || ""),
                  target: "_blank",
                  class: "overflow-hidden"
                }, T(S.fileName), 9, Ic))
              ], 8, Tc)
            ]),
            s("td", jc, [
              S.contentLength && S.contentLength > 0 ? (a(), u("span", Oc, T(o(cn)(S.contentLength)), 1)) : k("", !0)
            ])
          ]))), 256))
        ])
      ])) : (a(), u("div", _c, [
        o(ee) ? (a(), u("div", {
          key: 0,
          class: "shrink-0 cursor-pointer",
          title: N(o(ee)) ? "" : o(ee)
        }, [
          s("img", {
            onClick: O,
            class: w(["h-16 w-16", P(o(ee))]),
            alt: `Current ${o(m) ?? ""}`,
            src: d.value || o(n)(o(ee)),
            onError: z
          }, null, 42, Vc)
        ], 8, Lc)) : k("", !0)
      ]))
    ], 2));
  }
}), Bc = ["id"], Rc = ["for"], Ec = { class: "relative mt-1" }, Hc = ["id", "placeholder"], zc = /* @__PURE__ */ s("svg", {
  class: "h-5 w-5 text-gray-400 dark:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z",
    "clip-rule": "evenodd"
  })
], -1), Nc = [
  zc
], Uc = ["id"], qc = ["onMouseover", "onClick"], Qc = /* @__PURE__ */ s("svg", {
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",
    "clip-rule": "evenodd"
  })
], -1), Kc = [
  Qc
], Zc = {
  key: 2,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",
  tabindex: "-1"
}, Gc = /* @__PURE__ */ s("svg", {
  class: "h-5 w-5 text-red-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
    "clip-rule": "evenodd"
  })
], -1), Wc = [
  Gc
], Jc = ["id"], Xc = ["id"], Yc = /* @__PURE__ */ ce({
  __name: "Autocomplete",
  props: {
    status: null,
    id: null,
    type: null,
    label: null,
    help: null,
    placeholder: null,
    multiple: { type: Boolean, default: !1 },
    required: { type: Boolean },
    options: { default: () => [] },
    modelValue: null,
    match: null,
    viewCount: { default: 100 },
    pageSize: { default: 8 }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t, emit: l }) {
    const n = e, i = A(!1);
    t({ toggle: R });
    function r(M) {
      return Array.isArray(n.modelValue) && n.modelValue.indexOf(M) >= 0;
    }
    const d = f(() => n.label ?? He(st(n.id)));
    let c = Ne("ApiState", void 0);
    const h = f(() => mt.call({ responseStatus: n.status ?? (c == null ? void 0 : c.error.value) }, n.id)), m = f(() => [nt.base, h.value ? nt.invalid : nt.valid]), y = A(null), b = A(""), p = A(null), v = A(n.viewCount), g = A([]), O = f(() => b.value ? n.options.filter((le) => n.match(le, b.value)).slice(0, v.value) : n.options), N = ["Tab", "Escape", "ArrowDown", "ArrowUp", "Enter", "PageUp", "PageDown", "Home", "End"];
    function ee(M) {
      p.value = M, g.value.indexOf(M) > Math.floor(v.value * 0.9) && (v.value += n.viewCount, G());
    }
    const P = [",", `
`, "	"];
    function z(M) {
      var x;
      const le = (x = M.clipboardData) == null ? void 0 : x.getData("Text");
      F(le);
    }
    function F(M) {
      if (!M)
        return;
      const le = P.some((x) => M.includes(x));
      if (!n.multiple || !le) {
        const x = n.options.filter((K) => n.match(K, M));
        x.length == 1 && (Y(x[0]), i.value = !1, cl());
      } else if (le) {
        const x = new RegExp("\\r|\\n|\\t|,"), E = M.split(x).filter((q) => q.trim()).map((q) => n.options.find((C) => n.match(C, q))).filter((q) => !!q);
        if (E.length > 0) {
          b.value = "", i.value = !1, p.value = null;
          let q = Array.from(n.modelValue || []);
          E.forEach((C) => {
            r(C) ? q = q.filter((L) => L != C) : q.push(C);
          }), l("update:modelValue", q), cl();
        }
      }
    }
    function W(M) {
      N.indexOf(M.code) || J();
    }
    function j(M) {
      if (!(M.shiftKey || M.ctrlKey || M.altKey)) {
        if (!i.value) {
          M.code == "ArrowDown" && (i.value = !0, p.value = g.value[0]);
          return;
        }
        if (M.code == "Escape")
          i.value && (M.stopPropagation(), i.value = !1);
        else if (M.code == "Tab")
          i.value = !1;
        else if (M.code == "Home")
          p.value = g.value[0], U();
        else if (M.code == "End")
          p.value = g.value[g.value.length - 1], U();
        else if (M.code == "ArrowDown") {
          if (!p.value)
            p.value = g.value[0];
          else {
            const le = g.value.indexOf(p.value);
            p.value = le + 1 < g.value.length ? g.value[le + 1] : g.value[0];
          }
          te();
        } else if (M.code == "ArrowUp") {
          if (!p.value)
            p.value = g.value[g.value.length - 1];
          else {
            const le = g.value.indexOf(p.value);
            p.value = le - 1 >= 0 ? g.value[le - 1] : g.value[g.value.length - 1];
          }
          te();
        } else
          M.code == "Enter" && (p.value ? (Y(p.value), n.multiple || (M.preventDefault(), cl())) : i.value = !1);
      }
    }
    const S = { behavior: "smooth", block: "nearest", inline: "nearest", scrollMode: "if-needed" };
    function U() {
      setTimeout(() => {
        let M = pl(`#${n.id}-autocomplete li.active`);
        M && M.scrollIntoView(S);
      }, 0);
    }
    function te() {
      setTimeout(() => {
        let M = pl(`#${n.id}-autocomplete li.active`);
        M && ("scrollIntoViewIfNeeded" in M ? M.scrollIntoViewIfNeeded(S) : M.scrollIntoView(S));
      }, 0);
    }
    function R(M) {
      var le;
      i.value = M, M && (J(), (le = y.value) == null || le.focus());
    }
    function J() {
      i.value = !0, G();
    }
    function Y(M) {
      if (b.value = "", i.value = !1, n.multiple) {
        let le = Array.from(n.modelValue || []);
        r(M) ? le = le.filter((x) => x != M) : le.push(M), p.value = null, l("update:modelValue", le);
      } else {
        let le = M;
        n.modelValue == M && (le = null), l("update:modelValue", le);
      }
    }
    function G() {
      g.value = O.value;
    }
    return Lt(b, G), (M, le) => (a(), u("div", {
      id: `${e.id}-autocomplete`
    }, [
      o(d) ? (a(), u("label", {
        key: 0,
        for: `${e.id}-text`,
        class: "block text-sm font-medium text-gray-700 dark:text-gray-300"
      }, T(o(d)), 9, Rc)) : k("", !0),
      s("div", Ec, [
        kt(s("input", Me({
          ref_key: "txtInput",
          ref: y,
          id: `${e.id}-text`,
          type: "text",
          role: "combobox",
          "aria-controls": "options",
          "aria-expanded": "false",
          autocomplete: "off",
          spellcheck: "false",
          "onUpdate:modelValue": le[0] || (le[0] = (x) => b.value = x),
          class: o(m),
          placeholder: e.multiple || !e.modelValue ? e.placeholder : "",
          onFocus: J,
          onKeydown: j,
          onKeyup: W,
          onClick: J,
          onPaste: z,
          required: !1
        }, M.$attrs), null, 16, Hc), [
          [so, b.value]
        ]),
        s("button", {
          type: "button",
          onClick: le[1] || (le[1] = (x) => R(!i.value)),
          class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none",
          tabindex: "-1"
        }, Nc),
        i.value ? (a(), u("ul", {
          key: 0,
          class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-black py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
          onKeydown: j,
          id: `${e.id}-options`,
          role: "listbox"
        }, [
          (a(!0), u(Te, null, Ie(g.value, (x) => (a(), u("li", {
            class: w([x === p.value ? "active bg-indigo-600 text-white" : "text-gray-900 dark:text-gray-100", "relative cursor-default select-none py-2 pl-3 pr-9"]),
            onMouseover: (K) => ee(x),
            onClick: (K) => Y(x),
            role: "option",
            tabindex: "-1"
          }, [
            Z(M.$slots, "item", jt(gl(x))),
            r(x) ? (a(), u("span", {
              key: 0,
              class: w(["absolute inset-y-0 right-0 flex items-center pr-4", x === p.value ? "text-white" : "text-indigo-600"])
            }, Kc, 2)) : k("", !0)
          ], 42, qc))), 256))
        ], 40, Uc)) : !e.multiple && e.modelValue ? (a(), u("div", {
          key: 1,
          onKeydown: j,
          onClick: le[2] || (le[2] = (x) => R(!i.value)),
          class: "h-8 -mt-8 ml-3 pt-0.5"
        }, [
          Z(M.$slots, "item", jt(gl(e.modelValue)))
        ], 32)) : k("", !0),
        o(h) ? (a(), u("div", Zc, Wc)) : k("", !0)
      ]),
      o(h) ? (a(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, T(o(h)), 9, Jc)) : e.help ? (a(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, T(e.help), 9, Xc)) : k("", !0)
    ], 8, Bc));
  }
}), e0 = ["id", "name", "value"], t0 = { class: "block truncate" }, l0 = /* @__PURE__ */ ce({
  __name: "Combobox",
  props: {
    id: null,
    modelValue: null,
    multiple: { type: Boolean },
    options: null,
    values: null,
    entries: null
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t, emit: l }) {
    const n = e;
    t({
      toggle(p) {
        var v;
        (v = d.value) == null || v.toggle(p);
      }
    });
    function i(p) {
      l("update:modelValue", p);
    }
    const r = f(() => n.multiple != null ? n.multiple : Array.isArray(n.modelValue)), d = A();
    function c(p, v) {
      return !v || p.value.toLowerCase().includes(v.toLowerCase());
    }
    const h = f(() => n.entries || (n.values ? n.values.map((p) => ({ key: p, value: p })) : n.options ? Object.keys(n.options).map((p) => ({ key: p, value: n.options[p] })) : [])), m = A(r.value ? [] : null);
    function y() {
      let p = n.modelValue && typeof n.modelValue == "object" ? n.modelValue.key : n.modelValue;
      p == null || p === "" ? m.value = r.value ? [] : null : typeof p == "string" ? m.value = h.value.find((v) => v.key === p) || null : Array.isArray(p) && (m.value = h.value.filter((v) => p.includes(v.key)));
    }
    tt(y);
    const b = f(() => m.value == null ? "" : Array.isArray(m.value) ? m.value.map((p) => encodeURIComponent(p.key)).join(",") : m.value.key);
    return (p, v) => {
      const g = X("Autocomplete");
      return a(), u(Te, null, [
        s("input", {
          type: "hidden",
          id: e.id,
          name: e.id,
          value: o(b)
        }, null, 8, e0),
        $e(g, Me({
          ref_key: "input",
          ref: d,
          id: e.id,
          options: o(h),
          match: c,
          multiple: o(r)
        }, p.$attrs, {
          modelValue: m.value,
          "onUpdate:modelValue": [
            v[0] || (v[0] = (O) => m.value = O),
            i
          ]
        }), {
          item: ke(({ key: O, value: N }) => [
            s("span", t0, T(N), 1)
          ]),
          _: 1
        }, 16, ["id", "options", "multiple", "modelValue"])
      ], 64);
    };
  }
}), n0 = /* @__PURE__ */ ce({
  __name: "DynamicInput",
  props: {
    input: null,
    modelValue: null,
    api: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e, n = f(() => l.input.type || "text"), i = "ignore,css,options,meta,allowableValues,allowableEntries,op,prop,type,id,name".split(","), r = f(() => dt(l.input, i)), d = A(qe(
      l.modelValue[l.input.id],
      (h) => l.input.type === "file" ? null : l.input.type === "date" && h instanceof Date ? $l(h) : l.input.type === "time" ? Yn(h) : h
    ));
    Lt(d, () => {
      l.modelValue[l.input.id] = d.value, t("update:modelValue", l.modelValue);
    });
    const c = f(() => {
      const h = l.modelValue[l.input.id];
      if (l.input.type !== "file" || !h)
        return [];
      if (typeof h == "string")
        return [{ filePath: h, fileName: $t(h, "/") }];
      if (!Array.isArray(h) && typeof h == "object")
        return h;
      if (Array.isArray(h)) {
        const m = [];
        return h.forEach((y) => {
          typeof y == "string" ? m.push({ filePath: y, fileName: $t(y, "/") }) : typeof y == "object" && m.push(y);
        }), m;
      }
    });
    return (h, m) => {
      var P, z, F, W, j, S, U, te, R, J, Y, G, M, le, x, K, E, q, C, L, B, fe, I, V, oe, Le, de, ue;
      const y = X("SelectInput"), b = X("CheckboxInput"), p = X("TagInput"), v = X("Combobox"), g = X("FileInput"), O = X("TextareaInput"), N = X("MarkdownInput"), ee = X("TextInput");
      return o(ne).component(o(n)) ? (a(), se(Zn(o(ne).component(o(n))), Me({
        key: 0,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": m[0] || (m[0] = (_) => d.value = _),
        status: (P = e.api) == null ? void 0 : P.error,
        "input-class": (z = e.input.css) == null ? void 0 : z.input,
        "label-class": (F = e.input.css) == null ? void 0 : F.label
      }, o(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : o(n) == "select" ? (a(), se(y, Me({
        key: 1,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": m[1] || (m[1] = (_) => d.value = _),
        status: (W = e.api) == null ? void 0 : W.error,
        "input-class": (j = e.input.css) == null ? void 0 : j.input,
        "label-class": (S = e.input.css) == null ? void 0 : S.label,
        entries: e.input.allowableEntries,
        values: e.input.allowableValues
      }, o(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class", "entries", "values"])) : o(n) == "checkbox" ? (a(), se(b, Me({
        key: 2,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": m[2] || (m[2] = (_) => d.value = _),
        status: (U = e.api) == null ? void 0 : U.error,
        "input-class": (te = e.input.css) == null ? void 0 : te.input,
        "label-class": (R = e.input.css) == null ? void 0 : R.label
      }, o(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : o(n) == "tag" ? (a(), se(p, Me({
        key: 3,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": m[3] || (m[3] = (_) => d.value = _),
        status: (J = e.api) == null ? void 0 : J.error,
        "input-class": (Y = e.input.css) == null ? void 0 : Y.input,
        "label-class": (G = e.input.css) == null ? void 0 : G.label,
        allowableValues: e.input.allowableValues,
        string: ((M = e.input.prop) == null ? void 0 : M.type) == "String"
      }, o(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class", "allowableValues", "string"])) : o(n) == "combobox" ? (a(), se(v, Me({
        key: 4,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": m[4] || (m[4] = (_) => d.value = _),
        status: (le = e.api) == null ? void 0 : le.error,
        "input-class": (x = e.input.css) == null ? void 0 : x.input,
        "label-class": (K = e.input.css) == null ? void 0 : K.label,
        entries: e.input.allowableEntries,
        values: e.input.allowableValues
      }, o(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class", "entries", "values"])) : o(n) == "file" ? (a(), se(g, Me({
        key: 5,
        id: e.input.id,
        status: (E = e.api) == null ? void 0 : E.error,
        modelValue: d.value,
        "onUpdate:modelValue": m[5] || (m[5] = (_) => d.value = _),
        "input-class": (q = e.input.css) == null ? void 0 : q.input,
        "label-class": (C = e.input.css) == null ? void 0 : C.label,
        files: o(c)
      }, o(r)), null, 16, ["id", "status", "modelValue", "input-class", "label-class", "files"])) : o(n) == "textarea" ? (a(), se(O, Me({
        key: 6,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": m[6] || (m[6] = (_) => d.value = _),
        status: (L = e.api) == null ? void 0 : L.error,
        "input-class": (B = e.input.css) == null ? void 0 : B.input,
        "label-class": (fe = e.input.css) == null ? void 0 : fe.label
      }, o(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : o(n) == "MarkdownInput" ? (a(), se(N, Me({
        key: 7,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": m[7] || (m[7] = (_) => d.value = _),
        status: (I = e.api) == null ? void 0 : I.error,
        "input-class": (V = e.input.css) == null ? void 0 : V.input,
        "label-class": (oe = e.input.css) == null ? void 0 : oe.label
      }, o(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : (a(), se(ee, Me({
        key: 8,
        type: o(n),
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": m[8] || (m[8] = (_) => d.value = _),
        status: (Le = e.api) == null ? void 0 : Le.error,
        "input-class": (de = e.input.css) == null ? void 0 : de.input,
        "label-class": (ue = e.input.css) == null ? void 0 : ue.label
      }, o(r)), null, 16, ["type", "id", "modelValue", "status", "input-class", "label-class"]));
    };
  }
}), s0 = { class: "lookup-field" }, o0 = ["name", "value"], a0 = {
  key: 0,
  class: "flex justify-between"
}, i0 = ["for"], r0 = {
  key: 0,
  class: "flex items-center"
}, u0 = { class: "text-sm text-gray-500 dark:text-gray-400 pr-1" }, d0 = /* @__PURE__ */ s("span", { class: "sr-only" }, "Clear", -1), c0 = /* @__PURE__ */ s("svg", {
  class: "h-4 w-4",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), f0 = [
  d0,
  c0
], m0 = {
  key: 1,
  class: "mt-1 relative"
}, v0 = { class: "w-full inline-flex truncate" }, h0 = { class: "text-blue-700 dark:text-blue-300 flex cursor-pointer" }, g0 = /* @__PURE__ */ s("span", { class: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none" }, [
  /* @__PURE__ */ s("svg", {
    class: "h-5 w-5 text-gray-400 dark:text-gray-500",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ s("path", {
      "fill-rule": "evenodd",
      d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
      "clip-rule": "evenodd"
    })
  ])
], -1), p0 = ["id"], y0 = ["id"], b0 = /* @__PURE__ */ ce({
  __name: "LookupInput",
  props: {
    id: null,
    status: null,
    input: null,
    metadataType: null,
    modelValue: null,
    label: null,
    labelClass: null,
    help: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e, { config: n } = St(), { metadataApi: i } = at(), r = f(() => l.id || l.input.id), d = f(() => l.label ?? He(st(r.value)));
    let c = Ne("ApiState", void 0);
    const h = Ne("client"), m = f(() => mt.call({ responseStatus: l.status ?? (c == null ? void 0 : c.error.value) }, r.value)), y = A(""), b = A(""), p = f(() => ye(l.modelValue, r.value)), v = f(() => et(l.metadataType).find((P) => P.name.toLowerCase() == r.value.toLowerCase())), g = f(() => {
      var P, z, F;
      return ((F = ot((z = (P = v.value) == null ? void 0 : P.ref) == null ? void 0 : z.model)) == null ? void 0 : F.icon) || n.value.tableIcon;
    });
    let O;
    function N(P) {
      if (P) {
        if (O == null) {
          console.warn("No ModalProvider required by LookupInput");
          return;
        }
        O.openModal({ name: "ModalLookup", ref: P }, (z) => {
          if (console.debug("openModal", y.value, " -> ", z, Ft.setRefValue(P, z), P), z) {
            const F = ye(z, P.refId);
            y.value = Ft.setRefValue(P, z) || F;
            const W = o(l.modelValue);
            W[r.value] = F, t("update:modelValue", W);
          }
        });
      }
    }
    function ee() {
      l.modelValue[r.value] = null, y.value = "";
    }
    return tt(async () => {
      var U, te;
      O = Ne("ModalProvider", void 0);
      const P = l.modelValue;
      l.modelValue[r.value] || (l.modelValue[r.value] = null);
      const z = v.value, F = z == null ? void 0 : z.ref;
      if (!F) {
        console.warn(`No RefInfo for property '${r.value}'`);
        return;
      }
      y.value = "";
      let W = F.selfId == null ? ye(P, z.name) : ye(P, F.selfId);
      if (Zt(W) && (W = ye(P, F.refId)), W == null)
        return;
      if (((U = i.value) == null ? void 0 : U.operations.find((R) => {
        var J;
        return ((J = R.dataModel) == null ? void 0 : J.name) == F.model;
      })) != null) {
        const R = ye(P, z.name);
        if (Zt(R))
          return;
        if (y.value = `${R}`, b.value = z.name, F.refLabel != null) {
          const J = et(l.metadataType).find((G) => G.type == F.model);
          J == null && console.warn(`Could not find ${F.model} Property on ${l.metadataType.name}`);
          const Y = J != null ? ye(P, J.name) : null;
          if (Y != null) {
            let G = ye(Y, F.refLabel);
            G && (y.value = `${G}`, Ft.setValue(F.model, W, F.refLabel, G));
          } else {
            const G = ((te = z.attributes) == null ? void 0 : te.some((le) => le.name == "Computed")) == !0;
            let M = await Ft.getOrFetchValue(h, i.value, F.model, F.refId, F.refLabel, G, W);
            y.value = M || `${F.model}: ${y.value}`;
          }
        }
      }
    }), (P, z) => {
      var W;
      const F = X("Icon");
      return a(), u("div", s0, [
        s("input", {
          type: "hidden",
          name: o(r),
          value: o(p)
        }, null, 8, o0),
        o(d) ? (a(), u("div", a0, [
          s("label", {
            for: o(r),
            class: w(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
          }, T(o(d)), 11, i0),
          o(p) ? (a(), u("div", r0, [
            s("span", u0, T(o(p)), 1),
            s("button", {
              onClick: ee,
              type: "button",
              title: "clear",
              class: "mr-1 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:ring-offset-black"
            }, f0)
          ])) : k("", !0)
        ])) : k("", !0),
        (W = o(v)) != null && W.ref ? (a(), u("div", m0, [
          s("button", {
            type: "button",
            class: "lookup flex relative w-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-md shadow-sm pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
            onClick: z[0] || (z[0] = (j) => N(o(v).ref)),
            "aria-haspopup": "listbox",
            "aria-expanded": "true",
            "aria-labelledby": "listbox-label"
          }, [
            s("span", v0, [
              s("span", h0, [
                $e(F, {
                  class: "mr-1 w-5 h-5",
                  image: o(g)
                }, null, 8, ["image"]),
                s("span", null, T(y.value), 1)
              ])
            ]),
            g0
          ])
        ])) : k("", !0),
        o(m) ? (a(), u("p", {
          key: 2,
          class: "mt-2 text-sm text-red-500",
          id: `${o(r)}-error`
        }, T(o(m)), 9, p0)) : e.help ? (a(), u("p", {
          key: 3,
          class: "mt-2 text-sm text-gray-500",
          id: `${o(r)}-description`
        }, T(e.help), 9, y0)) : k("", !0)
      ]);
    };
  }
}), w0 = /* @__PURE__ */ ce({
  __name: "AutoFormFields",
  props: {
    modelValue: null,
    type: null,
    api: null,
    formLayout: null,
    configureField: null,
    configureFormLayout: null,
    hideSummary: { type: Boolean },
    flexClass: { default: "flex flex-1 flex-col justify-between" },
    divideClass: { default: "divide-y divide-gray-200 px-4 sm:px-6" },
    spaceClass: { default: "space-y-6 pt-6 pb-5" },
    fieldsetClass: { default: "grid grid-cols-12 gap-6" }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t, emit: l }) {
    const n = e;
    t({ forceUpdate: i, props: n, updateValue: d });
    function i() {
      var z;
      const P = Be();
      (z = P == null ? void 0 : P.proxy) == null || z.$forceUpdate();
    }
    function r(P, z) {
      d(P.id, ye(z, P.id));
    }
    function d(P, z) {
      n.modelValue[P] = z, l("update:modelValue", n.modelValue), i();
    }
    const { metadataApi: c, apiOf: h, typeOf: m, typeOfRef: y, createFormLayout: b, Crud: p } = at(), v = f(() => n.type || Et(n.modelValue)), g = f(() => m(v.value)), O = f(() => {
      var P, z;
      return y((z = (P = c.value) == null ? void 0 : P.operations.find((F) => F.request.name == v.value)) == null ? void 0 : z.dataModel) || g.value;
    }), N = f(() => {
      const P = g.value;
      if (!P) {
        if (n.formLayout) {
          const U = n.formLayout.map((te) => {
            const R = { name: te.id, type: va(te.type) }, J = Object.assign({ prop: R }, te);
            return n.configureField && n.configureField(J), J;
          });
          return n.configureFormLayout && n.configureFormLayout(U), U;
        }
        throw new Error(`MetadataType for ${v.value} not found`);
      }
      const z = et(P), F = O.value, W = n.formLayout ? n.formLayout : b(P), j = [], S = h(P.name);
      return W.forEach((U) => {
        var Y;
        const te = z.find((G) => G.name == U.name);
        if (U.ignore)
          return;
        const R = ((Y = F == null ? void 0 : F.properties) == null ? void 0 : Y.find((G) => {
          var M;
          return G.name.toLowerCase() == ((M = U.name) == null ? void 0 : M.toLowerCase());
        })) ?? te, J = Object.assign({ prop: R, op: S }, U);
        n.configureField && n.configureField(J), j.push(J);
      }), n.configureFormLayout && n.configureFormLayout(j), j;
    }), ee = f(() => N.value.filter((P) => P.type != "hidden").map((P) => P.id));
    return (P, z) => {
      var S;
      const F = X("ErrorSummary"), W = X("LookupInput"), j = X("DynamicInput");
      return a(), u(Te, null, [
        e.hideSummary ? k("", !0) : (a(), se(F, {
          key: 0,
          status: (S = e.api) == null ? void 0 : S.error,
          except: o(ee)
        }, null, 8, ["status", "except"])),
        s("div", {
          class: w(e.flexClass)
        }, [
          s("div", {
            class: w(e.divideClass)
          }, [
            s("div", {
              class: w(e.spaceClass)
            }, [
              s("fieldset", {
                class: w(e.fieldsetClass)
              }, [
                (a(!0), u(Te, null, Ie(o(N), (U) => {
                  var te, R, J;
                  return a(), u("div", {
                    key: U.id,
                    class: w([
                      "w-full",
                      ((te = U.css) == null ? void 0 : te.field) ?? (U.type == "textarea" ? "col-span-12" : "col-span-12 xl:col-span-6" + (U.type == "checkbox" ? " flex items-center" : "")),
                      U.type == "hidden" ? "hidden" : ""
                    ])
                  }, [
                    ((R = U.prop) == null ? void 0 : R.ref) != null && U.type != "file" && !U.prop.isPrimaryKey ? (a(), se(W, {
                      key: 0,
                      metadataType: o(O),
                      input: U,
                      modelValue: e.modelValue,
                      "onUpdate:modelValue": (Y) => r(U, Y),
                      status: (J = e.api) == null ? void 0 : J.error
                    }, null, 8, ["metadataType", "input", "modelValue", "onUpdate:modelValue", "status"])) : (a(), se(j, {
                      key: 1,
                      input: U,
                      modelValue: e.modelValue,
                      "onUpdate:modelValue": z[0] || (z[0] = (Y) => P.$emit("update:modelValue", Y)),
                      api: e.api
                    }, null, 8, ["input", "modelValue", "api"]))
                  ], 2);
                }), 128))
              ], 2)
            ], 2)
          ], 2)
        ], 2)
      ], 64);
    };
  }
});
function Tl() {
  const e = A(!1), t = A(), l = A(), n = Ne("client");
  function i({ message: v, errorCode: g, fieldName: O, errors: N }) {
    return g || (g = "Exception"), N || (N = []), t.value = O ? new Bl({
      errorCode: g,
      message: v,
      errors: [new Hn({ fieldName: O, errorCode: g, message: v })]
    }) : new Bl({ errorCode: g, message: v, errors: N });
  }
  function r({ fieldName: v, message: g, errorCode: O }) {
    if (O || (O = "Exception"), !t.value)
      i({ fieldName: v, message: g, errorCode: O });
    else {
      let N = new Bl(t.value);
      N.errors = [
        ...(N.errors || []).filter((ee) => {
          var P;
          return ((P = ee.fieldName) == null ? void 0 : P.toLowerCase()) !== (v == null ? void 0 : v.toLowerCase());
        }),
        new Hn({ fieldName: v, message: g, errorCode: O })
      ], t.value = N;
    }
  }
  async function d(v, g, O) {
    e.value = !0;
    let N = await n.api(Tt(v), g, O);
    return e.value = !1, l.value = N.response, t.value = N.error, N;
  }
  async function c(v, g, O) {
    e.value = !0;
    let N = await n.apiVoid(Tt(v), g, O);
    return e.value = !1, l.value = N.response, t.value = N.error, N;
  }
  async function h(v, g, O, N) {
    e.value = !0;
    let ee = await n.apiForm(Tt(v), g, O, N);
    return e.value = !1, l.value = ee.response, t.value = ee.error, ee;
  }
  async function m(v, g, O, N) {
    e.value = !0;
    let ee = await n.apiFormVoid(Tt(v), g, O, N);
    return e.value = !1, l.value = ee.response, t.value = ee.error, ee;
  }
  async function y(v, g, O, N) {
    return ls(n, v, g, O, N);
  }
  function b(v, g) {
    const O = A(new Je()), N = ns(async (ee) => {
      O.value = await n.api(ee);
    }, g == null ? void 0 : g.delayMs);
    return hl(async () => {
      const ee = v(), P = on(_l(ee));
      P && (O.value = new Je({ response: P })), (g == null ? void 0 : g.delayMs) === 0 ? O.value = await n.api(ee) : N(ee);
    }), (async () => O.value = await n.api(v(), g == null ? void 0 : g.args, g == null ? void 0 : g.method))(), O;
  }
  let p = { setError: i, addFieldError: r, loading: e, error: t, api: d, apiVoid: c, apiForm: h, apiFormVoid: m, swr: y, swrEffect: b, unRefs: Tt, setRef: es };
  return Xt("ApiState", p), p;
}
const x0 = { key: 0 }, k0 = { class: "text-red-700" }, $0 = /* @__PURE__ */ s("b", null, "type", -1), C0 = { key: 0 }, _0 = { key: 2 }, L0 = ["innerHTML"], V0 = /* @__PURE__ */ s("input", {
  type: "submit",
  class: "hidden"
}, null, -1), S0 = { class: "flex justify-end" }, M0 = /* @__PURE__ */ s("div", null, null, -1), A0 = {
  key: 2,
  class: "relative z-10",
  "aria-labelledby": "slide-over-title",
  role: "dialog",
  "aria-modal": "true"
}, T0 = /* @__PURE__ */ s("div", { class: "fixed inset-0" }, null, -1), F0 = { class: "fixed inset-0 overflow-hidden" }, I0 = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, D0 = { class: "flex-1" }, j0 = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, O0 = { class: "flex items-start justify-between space-x-3" }, P0 = { class: "space-y-1" }, B0 = { key: 0 }, R0 = { key: 2 }, E0 = ["innerHTML"], H0 = { class: "flex h-7 items-center" }, z0 = { class: "flex justify-end" }, N0 = /* @__PURE__ */ ce({
  __name: "AutoForm",
  props: {
    type: null,
    modelValue: null,
    heading: null,
    subHeading: null,
    showLoading: { type: Boolean, default: !0 },
    jsconfig: { default: "eccn,edv" },
    formStyle: { default: "card" },
    configureField: null,
    configureFormLayout: null,
    panelClass: null,
    bodyClass: null,
    formClass: null,
    innerFormClass: null,
    headerClass: { default: "p-6" },
    buttonsClass: null,
    headingClass: null,
    subHeadingClass: null,
    submitLabel: { default: "Submit" },
    allowSubmit: null
  },
  emits: ["success", "error", "update:modelValue", "done"],
  setup(e, { expose: t, emit: l }) {
    const n = e, i = A(), r = A(1), d = A();
    t({ forceUpdate: c, props: n, setModel: h, formFields: i, submit: K, close: fe });
    function c() {
      var oe;
      r.value++, Y.value = J();
      const V = Be();
      (oe = V == null ? void 0 : V.proxy) == null || oe.$forceUpdate();
    }
    async function h(V) {
      Object.assign(Y.value, V), c(), await xt(() => null);
    }
    Xt("ModalProvider", {
      openModal: p
    });
    const y = A(), b = A();
    function p(V, oe) {
      y.value = V, b.value = oe;
    }
    async function v(V) {
      b.value && b.value(V), y.value = void 0, b.value = void 0;
    }
    const g = Tl(), { getTypeName: O } = ss(), { typeOf: N, Crud: ee, createDto: P } = at(), z = A(new Je()), F = f(() => n.panelClass || Ze.panelClass(n.formStyle)), W = f(() => n.formClass || n.formStyle == "card" ? "shadow sm:rounded-md" : It.formClass), j = f(() => n.headingClass || Ze.headingClass(n.formStyle)), S = f(() => n.subHeadingClass || Ze.subHeadingClass(n.formStyle)), U = f(() => typeof n.buttonsClass == "string" ? n.buttonsClass : Ze.buttonsClass), te = f(() => {
      var V;
      return n.type ? O(n.type) : (V = n.modelValue) != null && V.getTypeName ? n.modelValue.getTypeName() : null;
    }), R = f(() => N(te.value)), J = () => n.modelValue || le(), Y = A(J()), G = f(() => g.loading.value), M = f(() => {
      var V;
      return n.heading || ((V = N(te.value)) == null ? void 0 : V.description) || He(te.value);
    });
    function le() {
      return typeof n.type == "string" ? P(n.type) : n.type ? new n.type() : n.modelValue;
    }
    async function x(V) {
      if (!V || V.tagName != "FORM") {
        console.error("Not a valid form", V);
        return;
      }
      const oe = le();
      let Le = qe(oe == null ? void 0 : oe.getMethod, (_) => typeof _ == "function" ? _() : null) || "POST", de = qe(oe == null ? void 0 : oe.createResponse, (_) => typeof _ == "function" ? _() : null) == null;
      const ue = n.jsconfig;
      if (ln.hasRequestBody(Le)) {
        let _ = new oe.constructor(), ie = new FormData(V);
        console.debug("AutoForm.submitForm", _, ie), de ? z.value = await g.apiFormVoid(_, ie, { jsconfig: ue }) : z.value = await g.apiForm(_, ie, { jsconfig: ue });
      } else {
        let _ = new oe.constructor(Y.value);
        console.debug("AutoForm.submit", _), de ? z.value = await g.apiVoid(_, { jsconfig: ue }) : z.value = await g.api(_, { jsconfig: ue });
      }
      z.value.succeeded ? (l("success", z.value.response), fe()) : l("error", z.value.error);
    }
    async function K() {
      x(d.value);
    }
    function E(V) {
      l("update:modelValue", V);
    }
    function q() {
      l("done");
    }
    const C = A(!1), L = A(""), B = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    Lt(C, () => {
      Ct(B, L, C.value), C.value || setTimeout(q, 700);
    }), C.value = !0;
    function fe() {
      n.formStyle == "slideOver" ? C.value = !1 : q();
    }
    const I = (V) => {
      V.key === "Escape" && fe();
    };
    return tt(() => window.addEventListener("keydown", I)), Rt(() => window.removeEventListener("keydown", I)), (V, oe) => {
      var Ve, he, De, Q, H, re, ve, Se, Oe, Re, _e;
      const Le = X("AutoFormFields"), de = X("FormLoading"), ue = X("PrimaryButton"), _ = X("CloseButton"), ie = X("SecondaryButton"), xe = X("ModalLookup");
      return a(), u("div", null, [
        o(R) ? e.formStyle == "card" ? (a(), u("div", {
          key: 1,
          class: w(o(F))
        }, [
          s("form", {
            ref_key: "elForm",
            ref: d,
            onSubmit: oe[0] || (oe[0] = Ue((Fe) => x(Fe.target), ["prevent"])),
            autocomplete: "off",
            class: w(e.innerFormClass)
          }, [
            s("div", {
              class: w(e.bodyClass)
            }, [
              s("div", {
                class: w(e.headerClass)
              }, [
                V.$slots.heading ? (a(), u("div", C0, [
                  Z(V.$slots, "heading")
                ])) : (a(), u("h3", {
                  key: 1,
                  class: w(o(j))
                }, T(o(M)), 3)),
                V.$slots.subheading ? (a(), u("div", _0, [
                  Z(V.$slots, "subheading")
                ])) : e.subHeading ? (a(), u("p", {
                  key: 3,
                  class: w(o(S))
                }, T(e.subHeading), 3)) : (Ve = o(R)) != null && Ve.notes ? (a(), u("p", {
                  key: 4,
                  class: w(["notes", o(S)]),
                  innerHTML: (he = o(R)) == null ? void 0 : he.notes
                }, null, 10, L0)) : k("", !0)
              ], 2),
              Z(V.$slots, "header", {
                instance: (De = Be()) == null ? void 0 : De.exposed,
                model: Y.value
              }),
              V0,
              (a(), se(Le, {
                ref_key: "formFields",
                ref: i,
                key: r.value,
                type: e.type,
                modelValue: Y.value,
                "onUpdate:modelValue": E,
                api: z.value,
                configureField: e.configureField,
                configureFormLayout: e.configureFormLayout
              }, null, 8, ["type", "modelValue", "api", "configureField", "configureFormLayout"])),
              Z(V.$slots, "footer", {
                instance: (Q = Be()) == null ? void 0 : Q.exposed,
                model: Y.value
              })
            ], 2),
            Z(V.$slots, "buttons", {}, () => {
              var Fe, Qe;
              return [
                s("div", {
                  class: w(o(U))
                }, [
                  s("div", null, [
                    Z(V.$slots, "leftbuttons", {
                      instance: (Fe = Be()) == null ? void 0 : Fe.exposed,
                      model: Y.value
                    })
                  ]),
                  s("div", null, [
                    e.showLoading && o(G) ? (a(), se(de, { key: 0 })) : k("", !0)
                  ]),
                  s("div", S0, [
                    M0,
                    $e(ue, {
                      disabled: e.allowSubmit ? !e.allowSubmit(Y.value) : !1
                    }, {
                      default: ke(() => [
                        we(T(e.submitLabel), 1)
                      ]),
                      _: 1
                    }, 8, ["disabled"]),
                    Z(V.$slots, "rightbuttons", {
                      instance: (Qe = Be()) == null ? void 0 : Qe.exposed,
                      model: Y.value
                    })
                  ])
                ], 2)
              ];
            })
          ], 34)
        ], 2)) : (a(), u("div", A0, [
          T0,
          s("div", F0, [
            s("div", {
              onMousedown: fe,
              class: "absolute inset-0 overflow-hidden"
            }, [
              s("div", {
                onMousedown: oe[2] || (oe[2] = Ue(() => {
                }, ["stop"])),
                class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
              }, [
                s("div", {
                  class: w(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", L.value])
                }, [
                  s("form", {
                    ref_key: "elForm",
                    ref: d,
                    class: w(o(W)),
                    onSubmit: oe[1] || (oe[1] = Ue((Fe) => x(Fe.target), ["prevent"]))
                  }, [
                    s("div", I0, [
                      s("div", D0, [
                        s("div", j0, [
                          s("div", O0, [
                            s("div", P0, [
                              V.$slots.heading ? (a(), u("div", B0, [
                                Z(V.$slots, "heading")
                              ])) : (a(), u("h3", {
                                key: 1,
                                class: w(o(j))
                              }, T(o(M)), 3)),
                              V.$slots.subheading ? (a(), u("div", R0, [
                                Z(V.$slots, "subheading")
                              ])) : e.subHeading ? (a(), u("p", {
                                key: 3,
                                class: w(o(S))
                              }, T(e.subHeading), 3)) : (H = o(R)) != null && H.notes ? (a(), u("p", {
                                key: 4,
                                class: w(["notes", o(S)]),
                                innerHTML: (re = o(R)) == null ? void 0 : re.notes
                              }, null, 10, E0)) : k("", !0)
                            ]),
                            s("div", H0, [
                              $e(_, {
                                "button-class": "bg-gray-50 dark:bg-gray-900",
                                onClose: fe
                              })
                            ])
                          ])
                        ]),
                        Z(V.$slots, "header", {
                          instance: (ve = Be()) == null ? void 0 : ve.exposed,
                          model: Y.value
                        }),
                        (a(), se(Le, {
                          ref_key: "formFields",
                          ref: i,
                          key: r.value,
                          type: e.type,
                          modelValue: Y.value,
                          "onUpdate:modelValue": E,
                          api: z.value,
                          configureField: e.configureField,
                          configureFormLayout: e.configureFormLayout
                        }, null, 8, ["type", "modelValue", "api", "configureField", "configureFormLayout"])),
                        Z(V.$slots, "footer", {
                          instance: (Se = Be()) == null ? void 0 : Se.exposed,
                          model: Y.value
                        })
                      ])
                    ]),
                    s("div", {
                      class: w(o(U))
                    }, [
                      s("div", null, [
                        Z(V.$slots, "leftbuttons", {
                          instance: (Oe = Be()) == null ? void 0 : Oe.exposed,
                          model: Y.value
                        })
                      ]),
                      s("div", null, [
                        e.showLoading && o(G) ? (a(), se(de, { key: 0 })) : k("", !0)
                      ]),
                      s("div", z0, [
                        $e(ie, {
                          onClick: fe,
                          disabled: o(G)
                        }, {
                          default: ke(() => [
                            we("Cancel")
                          ]),
                          _: 1
                        }, 8, ["disabled"]),
                        $e(ue, {
                          class: "ml-4",
                          disabled: e.allowSubmit ? !e.allowSubmit(Y.value) : !1
                        }, {
                          default: ke(() => [
                            we(T(e.submitLabel), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"]),
                        Z(V.$slots, "rightbuttons", {
                          instance: (Re = Be()) == null ? void 0 : Re.exposed,
                          model: Y.value
                        })
                      ])
                    ], 2)
                  ], 34)
                ], 2)
              ], 32)
            ], 32)
          ])
        ])) : (a(), u("div", x0, [
          s("p", k0, [
            we("Could not create form for unknown "),
            $0,
            we(" " + T(o(te)), 1)
          ])
        ])),
        ((_e = y.value) == null ? void 0 : _e.name) == "ModalLookup" && y.value.ref ? (a(), se(xe, {
          key: 3,
          "ref-info": y.value.ref,
          onDone: v
        }, null, 8, ["ref-info"])) : k("", !0)
      ]);
    };
  }
}), U0 = { key: 0 }, q0 = { class: "text-red-700" }, Q0 = /* @__PURE__ */ s("b", null, "type", -1), K0 = ["onSubmit"], Z0 = { key: 0 }, G0 = { key: 2 }, W0 = ["innerHTML"], J0 = { class: "flex justify-end" }, X0 = {
  key: 2,
  class: "relative z-10",
  "aria-labelledby": "slide-over-title",
  role: "dialog",
  "aria-modal": "true"
}, Y0 = /* @__PURE__ */ s("div", { class: "fixed inset-0" }, null, -1), ef = { class: "fixed inset-0 overflow-hidden" }, tf = ["onSubmit"], lf = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, nf = { class: "flex-1" }, sf = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, of = { class: "flex items-start justify-between space-x-3" }, af = { class: "space-y-1" }, rf = { key: 0 }, uf = { key: 2 }, df = ["innerHTML"], cf = { class: "flex h-7 items-center" }, ff = { class: "flex justify-end" }, mf = /* @__PURE__ */ ce({
  __name: "AutoCreateForm",
  props: {
    type: null,
    formStyle: { default: "slideOver" },
    panelClass: null,
    formClass: null,
    headingClass: null,
    subHeadingClass: null,
    buttonsClass: null,
    heading: null,
    subHeading: null,
    autosave: { type: Boolean, default: !0 },
    showLoading: { type: Boolean, default: !0 },
    showCancel: { type: Boolean, default: !0 },
    configureField: null,
    configureFormLayout: null
  },
  emits: ["done", "save", "error"],
  setup(e, { expose: t, emit: l }) {
    const n = e, i = A(), r = A(1);
    t({ forceUpdate: d, props: n, setModel: c, formFields: i });
    function d() {
      var V, oe;
      r.value++, (V = i.value) == null || V.forceUpdate();
      const I = Be();
      (oe = I == null ? void 0 : I.proxy) == null || oe.$forceUpdate();
    }
    function c(I) {
      Object.assign(j.value, I), d();
    }
    function h(I) {
    }
    Xt("ModalProvider", {
      openModal: p
    });
    const y = A(), b = A();
    function p(I, V) {
      y.value = I, b.value = V;
    }
    async function v(I) {
      b.value && b.value(I), y.value = void 0, b.value = void 0;
    }
    const { typeOf: g, typeProperties: O, Crud: N, createDto: ee, formValues: P } = at(), z = f(() => Et(n.type)), F = f(() => g(z.value)), j = A((() => typeof n.type == "string" ? ee(n.type) : n.type ? new n.type() : null)()), S = f(() => n.panelClass || Ze.panelClass(n.formStyle)), U = f(() => n.formClass || Ze.formClass(n.formStyle)), te = f(() => n.headingClass || Ze.headingClass(n.formStyle)), R = f(() => n.subHeadingClass || Ze.subHeadingClass(n.formStyle)), J = f(() => n.buttonsClass || Ze.buttonsClass), Y = f(() => N.model(F.value)), G = f(() => {
      var I;
      return n.heading || ((I = g(z.value)) == null ? void 0 : I.description) || (Y.value ? `New ${He(Y.value)}` : He(z.value));
    }), M = A(new Je());
    let le = Tl(), x = f(() => le.loading.value);
    ne.interceptors.has("AutoCreateForm.new") && ne.interceptors.invoke("AutoCreateForm.new", { props: n, model: j });
    async function K(I) {
      var de, ue;
      let V = I.target;
      if (!n.autosave) {
        l("save", new j.value.constructor(P(V, O(F.value))));
        return;
      }
      let oe = qe((de = j.value) == null ? void 0 : de.getMethod, (_) => typeof _ == "function" ? _() : null) || "POST", Le = qe((ue = j.value) == null ? void 0 : ue.createResponse, (_) => typeof _ == "function" ? _() : null) == null;
      if (ln.hasRequestBody(oe)) {
        let _ = new j.value.constructor(), ie = new FormData(V);
        Le ? M.value = await le.apiFormVoid(_, ie, { jsconfig: "eccn" }) : M.value = await le.apiForm(_, ie, { jsconfig: "eccn" });
      } else {
        let _ = P(V, O(F.value)), ie = new j.value.constructor(_);
        Le ? M.value = await le.apiVoid(ie, { jsconfig: "eccn" }) : M.value = await le.api(ie, { jsconfig: "eccn" });
      }
      M.value.succeeded ? (V.reset(), l("save", M.value.response)) : l("error", M.value.error);
    }
    function E() {
      l("done");
    }
    const q = A(!1), C = A(""), L = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    Lt(q, () => {
      Ct(L, C, q.value), q.value || setTimeout(E, 700);
    }), q.value = !0;
    function B() {
      n.formStyle == "slideOver" ? q.value = !1 : E();
    }
    const fe = (I) => {
      I.key === "Escape" && B();
    };
    return tt(() => window.addEventListener("keydown", fe)), Rt(() => window.removeEventListener("keydown", fe)), (I, V) => {
      var xe, Ve, he, De, Q, H, re, ve, Se;
      const oe = X("AutoFormFields"), Le = X("FormLoading"), de = X("SecondaryButton"), ue = X("PrimaryButton"), _ = X("CloseButton"), ie = X("ModalLookup");
      return a(), u("div", null, [
        o(F) ? e.formStyle == "card" ? (a(), u("div", {
          key: 1,
          class: w(o(S))
        }, [
          s("form", {
            onSubmit: Ue(K, ["prevent"])
          }, [
            s("div", {
              class: w(o(U))
            }, [
              s("div", null, [
                I.$slots.heading ? (a(), u("div", Z0, [
                  Z(I.$slots, "heading")
                ])) : (a(), u("h3", {
                  key: 1,
                  class: w(o(te))
                }, T(o(G)), 3)),
                I.$slots.subheading ? (a(), u("div", G0, [
                  Z(I.$slots, "subheading")
                ])) : e.subHeading ? (a(), u("p", {
                  key: 3,
                  class: w(o(R))
                }, T(e.subHeading), 3)) : (xe = o(F)) != null && xe.notes ? (a(), u("p", {
                  key: 4,
                  class: w(["notes", o(R)]),
                  innerHTML: (Ve = o(F)) == null ? void 0 : Ve.notes
                }, null, 10, W0)) : k("", !0)
              ]),
              Z(I.$slots, "header", {
                formInstance: (he = Be()) == null ? void 0 : he.exposed,
                model: j.value
              }),
              (a(), se(oe, {
                ref_key: "formFields",
                ref: i,
                key: r.value,
                modelValue: j.value,
                "onUpdate:modelValue": h,
                api: M.value,
                configureField: e.configureField,
                configureFormLayout: e.configureFormLayout
              }, null, 8, ["modelValue", "api", "configureField", "configureFormLayout"])),
              Z(I.$slots, "footer", {
                formInstance: (De = Be()) == null ? void 0 : De.exposed,
                model: j.value
              })
            ], 2),
            s("div", {
              class: w(o(J))
            }, [
              s("div", null, [
                e.showLoading && o(x) ? (a(), se(Le, { key: 0 })) : k("", !0)
              ]),
              s("div", J0, [
                e.showCancel ? (a(), se(de, {
                  key: 0,
                  onClick: B,
                  disabled: o(x)
                }, {
                  default: ke(() => [
                    we("Cancel")
                  ]),
                  _: 1
                }, 8, ["disabled"])) : k("", !0),
                $e(ue, {
                  type: "submit",
                  class: "ml-4",
                  disabled: o(x)
                }, {
                  default: ke(() => [
                    we("Save")
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ], 2)
          ], 40, K0)
        ], 2)) : (a(), u("div", X0, [
          Y0,
          s("div", ef, [
            s("div", {
              onMousedown: B,
              class: "absolute inset-0 overflow-hidden"
            }, [
              s("div", {
                onMousedown: V[0] || (V[0] = Ue(() => {
                }, ["stop"])),
                class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
              }, [
                s("div", {
                  class: w(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", C.value])
                }, [
                  s("form", {
                    class: w(o(U)),
                    onSubmit: Ue(K, ["prevent"])
                  }, [
                    s("div", lf, [
                      s("div", nf, [
                        s("div", sf, [
                          s("div", of, [
                            s("div", af, [
                              I.$slots.heading ? (a(), u("div", rf, [
                                Z(I.$slots, "heading")
                              ])) : (a(), u("h3", {
                                key: 1,
                                class: w(o(te))
                              }, T(o(G)), 3)),
                              I.$slots.subheading ? (a(), u("div", uf, [
                                Z(I.$slots, "subheading")
                              ])) : e.subHeading ? (a(), u("p", {
                                key: 3,
                                class: w(o(R))
                              }, T(e.subHeading), 3)) : (Q = o(F)) != null && Q.notes ? (a(), u("p", {
                                key: 4,
                                class: w(["notes", o(R)]),
                                innerHTML: (H = o(F)) == null ? void 0 : H.notes
                              }, null, 10, df)) : k("", !0)
                            ]),
                            s("div", cf, [
                              $e(_, {
                                "button-class": "bg-gray-50 dark:bg-gray-900",
                                onClose: B
                              })
                            ])
                          ])
                        ]),
                        Z(I.$slots, "header", {
                          formInstance: (re = Be()) == null ? void 0 : re.exposed,
                          model: j.value
                        }),
                        (a(), se(oe, {
                          ref_key: "formFields",
                          ref: i,
                          key: r.value,
                          modelValue: j.value,
                          "onUpdate:modelValue": h,
                          api: M.value,
                          configureField: e.configureField,
                          configureFormLayout: e.configureFormLayout
                        }, null, 8, ["modelValue", "api", "configureField", "configureFormLayout"])),
                        Z(I.$slots, "footer", {
                          formInstance: (ve = Be()) == null ? void 0 : ve.exposed,
                          model: j.value
                        })
                      ])
                    ]),
                    s("div", {
                      class: w(o(J))
                    }, [
                      s("div", null, [
                        e.showLoading && o(x) ? (a(), se(Le, { key: 0 })) : k("", !0)
                      ]),
                      s("div", ff, [
                        e.showCancel ? (a(), se(de, {
                          key: 0,
                          onClick: B,
                          disabled: o(x)
                        }, {
                          default: ke(() => [
                            we("Cancel")
                          ]),
                          _: 1
                        }, 8, ["disabled"])) : k("", !0),
                        $e(ue, {
                          type: "submit",
                          class: "ml-4",
                          disabled: o(x)
                        }, {
                          default: ke(() => [
                            we("Save")
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ], 2)
                  ], 42, tf)
                ], 2)
              ], 32)
            ], 32)
          ])
        ])) : (a(), u("div", U0, [
          s("p", q0, [
            we("Could not create form for unknown "),
            Q0,
            we(" " + T(o(z)), 1)
          ])
        ])),
        ((Se = y.value) == null ? void 0 : Se.name) == "ModalLookup" && y.value.ref ? (a(), se(ie, {
          key: 3,
          "ref-info": y.value.ref,
          onDone: v
        }, null, 8, ["ref-info"])) : k("", !0)
      ]);
    };
  }
}), vf = { key: 0 }, hf = { class: "text-red-700" }, gf = /* @__PURE__ */ s("b", null, "type", -1), pf = ["onSubmit"], yf = { key: 0 }, bf = { key: 2 }, wf = ["innerHTML"], xf = { class: "flex justify-end" }, kf = {
  key: 2,
  class: "relative z-10",
  "aria-labelledby": "slide-over-title",
  role: "dialog",
  "aria-modal": "true"
}, $f = /* @__PURE__ */ s("div", { class: "fixed inset-0" }, null, -1), Cf = { class: "fixed inset-0 overflow-hidden" }, _f = ["onSubmit"], Lf = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, Vf = { class: "flex-1" }, Sf = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, Mf = { class: "flex items-start justify-between space-x-3" }, Af = { class: "space-y-1" }, Tf = { key: 0 }, Ff = { key: 2 }, If = ["innerHTML"], Df = { class: "flex h-7 items-center" }, jf = { class: "flex justify-end" }, Of = /* @__PURE__ */ ce({
  __name: "AutoEditForm",
  props: {
    modelValue: null,
    type: null,
    deleteType: null,
    formStyle: { default: "slideOver" },
    panelClass: null,
    formClass: null,
    headingClass: null,
    subHeadingClass: null,
    heading: null,
    subHeading: null,
    autosave: { type: Boolean, default: !0 },
    showLoading: { type: Boolean, default: !0 },
    configureField: null,
    configureFormLayout: null
  },
  emits: ["done", "save", "delete", "error"],
  setup(e, { expose: t, emit: l }) {
    const n = e, i = A(), r = A(1);
    t({ forceUpdate: d, props: n, setModel: c, formFields: i });
    function d() {
      var ie;
      r.value++, te.value = U();
      const _ = Be();
      (ie = _ == null ? void 0 : _.proxy) == null || ie.$forceUpdate();
    }
    function c(_) {
      Object.assign(te.value, _);
    }
    function h(_) {
    }
    Xt("ModalProvider", {
      openModal: p
    });
    const y = A(), b = A();
    function p(_, ie) {
      y.value = _, b.value = ie;
    }
    async function v(_) {
      b.value && b.value(_), y.value = void 0, b.value = void 0;
    }
    const { typeOf: g, apiOf: O, typeProperties: N, createFormLayout: ee, getPrimaryKey: P, Crud: z, createDto: F, formValues: W } = at(), j = f(() => Et(n.type)), S = f(() => g(j.value)), U = () => typeof n.type == "string" ? F(n.type, ml(n.modelValue)) : n.type ? new n.type(ml(n.modelValue)) : null, te = A(U()), R = f(() => n.panelClass || Ze.panelClass(n.formStyle)), J = f(() => n.formClass || Ze.formClass(n.formStyle)), Y = f(() => n.headingClass || Ze.headingClass(n.formStyle)), G = f(() => n.subHeadingClass || Ze.subHeadingClass(n.formStyle)), M = f(() => z.model(S.value)), le = f(() => {
      var _;
      return n.heading || ((_ = g(j.value)) == null ? void 0 : _.description) || (M.value ? `Update ${He(M.value)}` : He(j.value));
    }), x = A(new Je());
    let K = Object.assign({}, ml(n.modelValue));
    ne.interceptors.has("AutoEditForm.new") && ne.interceptors.invoke("AutoEditForm.new", { props: n, model: te, origModel: K });
    let E = Tl(), q = f(() => E.loading.value);
    const C = () => qe(g(z.model(S.value)), (_) => P(_));
    function L(_) {
      const { op: ie, prop: xe } = _;
      ie && (z.isPatch(ie) || z.isUpdate(ie)) && (_.disabled = xe == null ? void 0 : xe.isPrimaryKey), n.configureField && n.configureField(_);
    }
    async function B(_) {
      var De, Q;
      let ie = _.target;
      if (!n.autosave) {
        l("save", new te.value.constructor(W(ie, N(S.value))));
        return;
      }
      let xe = qe((De = te.value) == null ? void 0 : De.getMethod, (H) => typeof H == "function" ? H() : null) || "POST", Ve = qe((Q = te.value) == null ? void 0 : Q.createResponse, (H) => typeof H == "function" ? H() : null) == null, he = C();
      if (ln.hasRequestBody(xe)) {
        let H = new te.value.constructor(), re = ye(n.modelValue, he.name), ve = new FormData(ie);
        he && !Array.from(ve.keys()).some((_e) => _e.toLowerCase() == he.name.toLowerCase()) && ve.append(he.name, re);
        let Se = [];
        const Oe = j.value && O(j.value);
        if (Oe && z.isPatch(Oe)) {
          let _e = ee(S.value), Fe = {};
          if (he && (Fe[he.name] = re), _e.forEach((je) => {
            let Ge = je.id, Mt = ye(K, Ge);
            if (he && he.name.toLowerCase() === Ge.toLowerCase())
              return;
            let vt = ve.get(Ge);
            ne.interceptors.has("AutoEditForm.save.formLayout") && ne.interceptors.invoke("AutoEditForm.save.formLayout", { origValue: Mt, formLayout: _e, input: je, newValue: vt });
            let ll = vt != null, nl = je.type === "checkbox" ? ll !== !!Mt : je.type === "file" ? ll : vt != Mt;
            !vt && !Mt && (nl = !1), nl && (vt ? Fe[Ge] = vt : je.type !== "file" && Se.push(Ge));
          }), ne.interceptors.has("AutoEditForm.save") && ne.interceptors.invoke("AutoEditForm.save", { origModel: K, formLayout: _e, dirtyValues: Fe }), Array.from(ve.keys()).filter((je) => !Fe[je]).forEach((je) => ve.delete(je)), Array.from(ve.keys()).filter((je) => je.toLowerCase() != he.name.toLowerCase()).length == 0 && Se.length == 0) {
            de();
            return;
          }
        }
        const Re = Se.length > 0 ? { jsconfig: "eccn", reset: Se } : { jsconfig: "eccn" };
        Ve ? x.value = await E.apiFormVoid(H, ve, Re) : x.value = await E.apiForm(H, ve, Re);
      } else {
        let H = W(ie, N(S.value));
        he && !ye(H, he.name) && (H[he.name] = ye(n.modelValue, he.name));
        let re = new te.value.constructor(H);
        Ve ? x.value = await E.apiVoid(re, { jsconfig: "eccn" }) : x.value = await E.api(re, { jsconfig: "eccn" });
      }
      x.value.succeeded ? (ie.reset(), l("save", x.value.response)) : l("error", x.value.error);
    }
    async function fe(_) {
      let ie = C();
      const xe = ie ? ye(n.modelValue, ie.name) : null;
      if (!xe) {
        console.error(`Could not find Primary Key for Type ${j.value} (${M.value})`);
        return;
      }
      const Ve = { [ie.name]: xe }, he = typeof n.deleteType == "string" ? F(n.deleteType, Ve) : n.deleteType ? new n.deleteType(Ve) : null;
      qe(he.createResponse, (Q) => typeof Q == "function" ? Q() : null) == null ? x.value = await E.apiVoid(he) : x.value = await E.api(he), x.value.succeeded ? l("delete", x.value.response) : l("error", x.value.error);
    }
    function I() {
      l("done");
    }
    const V = A(!1), oe = A(""), Le = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    Lt(V, () => {
      Ct(Le, oe, V.value), V.value || setTimeout(I, 700);
    }), V.value = !0;
    function de() {
      n.formStyle == "slideOver" ? V.value = !1 : I();
    }
    const ue = (_) => {
      _.key === "Escape" && de();
    };
    return tt(() => window.addEventListener("keydown", ue)), Rt(() => window.removeEventListener("keydown", ue)), (_, ie) => {
      var ve, Se, Oe, Re, _e, Fe, Qe, je, Ge;
      const xe = X("AutoFormFields"), Ve = X("ConfirmDelete"), he = X("FormLoading"), De = X("SecondaryButton"), Q = X("PrimaryButton"), H = X("CloseButton"), re = X("ModalLookup");
      return a(), u("div", null, [
        o(S) ? e.formStyle == "card" ? (a(), u("div", {
          key: 1,
          class: w(o(R))
        }, [
          s("form", {
            onSubmit: Ue(B, ["prevent"])
          }, [
            s("div", {
              class: w(o(J))
            }, [
              s("div", null, [
                _.$slots.heading ? (a(), u("div", yf, [
                  Z(_.$slots, "heading")
                ])) : (a(), u("h3", {
                  key: 1,
                  class: w(o(Y))
                }, T(o(le)), 3)),
                _.$slots.subheading ? (a(), u("div", bf, [
                  Z(_.$slots, "subheading")
                ])) : e.subHeading ? (a(), u("p", {
                  key: 3,
                  class: w(o(G))
                }, T(e.subHeading), 3)) : (ve = o(S)) != null && ve.notes ? (a(), u("p", {
                  key: 4,
                  class: w(["notes", o(G)]),
                  innerHTML: (Se = o(S)) == null ? void 0 : Se.notes
                }, null, 10, wf)) : k("", !0)
              ]),
              Z(_.$slots, "header", {
                formInstance: (Oe = Be()) == null ? void 0 : Oe.exposed,
                model: te.value
              }),
              (a(), se(xe, {
                ref_key: "formFields",
                ref: i,
                key: r.value,
                modelValue: te.value,
                "onUpdate:modelValue": h,
                api: x.value,
                configureField: e.configureField,
                configureFormLayout: e.configureFormLayout
              }, null, 8, ["modelValue", "api", "configureField", "configureFormLayout"])),
              Z(_.$slots, "footer", {
                formInstance: (Re = Be()) == null ? void 0 : Re.exposed,
                model: te.value
              })
            ], 2),
            s("div", {
              class: w(o(Ze).buttonsClass)
            }, [
              s("div", null, [
                e.deleteType ? (a(), se(Ve, {
                  key: 0,
                  onDelete: fe
                })) : k("", !0)
              ]),
              s("div", null, [
                e.showLoading && o(q) ? (a(), se(he, { key: 0 })) : k("", !0)
              ]),
              s("div", xf, [
                $e(De, {
                  onClick: de,
                  disabled: o(q)
                }, {
                  default: ke(() => [
                    we("Cancel")
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                $e(Q, {
                  type: "submit",
                  class: "ml-4",
                  disabled: o(q)
                }, {
                  default: ke(() => [
                    we("Save")
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ], 2)
          ], 40, pf)
        ], 2)) : (a(), u("div", kf, [
          $f,
          s("div", Cf, [
            s("div", {
              onMousedown: de,
              class: "absolute inset-0 overflow-hidden"
            }, [
              s("div", {
                onMousedown: ie[0] || (ie[0] = Ue(() => {
                }, ["stop"])),
                class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
              }, [
                s("div", {
                  class: w(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", oe.value])
                }, [
                  s("form", {
                    class: w(o(J)),
                    onSubmit: Ue(B, ["prevent"])
                  }, [
                    s("div", Lf, [
                      s("div", Vf, [
                        s("div", Sf, [
                          s("div", Mf, [
                            s("div", Af, [
                              _.$slots.heading ? (a(), u("div", Tf, [
                                Z(_.$slots, "heading")
                              ])) : (a(), u("h3", {
                                key: 1,
                                class: w(o(Y))
                              }, T(o(le)), 3)),
                              _.$slots.subheading ? (a(), u("div", Ff, [
                                Z(_.$slots, "subheading")
                              ])) : e.subHeading ? (a(), u("p", {
                                key: 3,
                                class: w(o(G))
                              }, T(e.subHeading), 3)) : (_e = o(S)) != null && _e.notes ? (a(), u("p", {
                                key: 4,
                                class: w(["notes", o(G)]),
                                innerHTML: (Fe = o(S)) == null ? void 0 : Fe.notes
                              }, null, 10, If)) : k("", !0)
                            ]),
                            s("div", Df, [
                              $e(H, {
                                "button-class": "bg-gray-50 dark:bg-gray-900",
                                onClose: de
                              })
                            ])
                          ])
                        ]),
                        Z(_.$slots, "header", {
                          formInstance: (Qe = Be()) == null ? void 0 : Qe.exposed,
                          model: te.value
                        }),
                        (a(), se(xe, {
                          ref_key: "formFields",
                          ref: i,
                          key: r.value,
                          modelValue: te.value,
                          "onUpdate:modelValue": h,
                          api: x.value,
                          configureField: L,
                          configureFormLayout: e.configureFormLayout
                        }, null, 8, ["modelValue", "api", "configureFormLayout"])),
                        Z(_.$slots, "footer", {
                          formInstance: (je = Be()) == null ? void 0 : je.exposed,
                          model: te.value
                        })
                      ])
                    ]),
                    s("div", {
                      class: w(o(Ze).buttonsClass)
                    }, [
                      s("div", null, [
                        e.deleteType ? (a(), se(Ve, {
                          key: 0,
                          onDelete: fe
                        })) : k("", !0)
                      ]),
                      s("div", null, [
                        e.showLoading && o(q) ? (a(), se(he, { key: 0 })) : k("", !0)
                      ]),
                      s("div", jf, [
                        $e(De, {
                          onClick: de,
                          disabled: o(q)
                        }, {
                          default: ke(() => [
                            we("Cancel")
                          ]),
                          _: 1
                        }, 8, ["disabled"]),
                        $e(Q, {
                          type: "submit",
                          class: "ml-4",
                          disabled: o(q)
                        }, {
                          default: ke(() => [
                            we("Save")
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ], 2)
                  ], 42, _f)
                ], 2)
              ], 32)
            ], 32)
          ])
        ])) : (a(), u("div", vf, [
          s("p", hf, [
            we("Could not create form for unknown "),
            gf,
            we(" " + T(o(j)), 1)
          ])
        ])),
        ((Ge = y.value) == null ? void 0 : Ge.name) == "ModalLookup" && y.value.ref ? (a(), se(re, {
          key: 3,
          "ref-info": y.value.ref,
          onDone: v
        }, null, 8, ["ref-info"])) : k("", !0)
      ]);
    };
  }
}), Pf = /* @__PURE__ */ s("label", {
  for: "confirmDelete",
  class: "ml-2 mr-2 select-none"
}, "confirm", -1), Bf = ["onClick"], Rf = /* @__PURE__ */ ce({
  __name: "ConfirmDelete",
  emits: ["delete"],
  setup(e, { emit: t }) {
    let l = A(!1);
    const n = () => {
      l.value && t("delete");
    }, i = f(() => [
      "select-none inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white",
      l.value ? "cursor-pointer bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" : "bg-red-400"
    ]);
    return (r, d) => (a(), u(Te, null, [
      kt(s("input", {
        id: "confirmDelete",
        type: "checkbox",
        class: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-black",
        "onUpdate:modelValue": d[0] || (d[0] = (c) => Qn(l) ? l.value = c : l = c)
      }, null, 512), [
        [Yl, o(l)]
      ]),
      Pf,
      s("span", Me({
        onClick: Ue(n, ["prevent"]),
        class: o(i)
      }, r.$attrs), [
        Z(r.$slots, "default", {}, () => [
          we("Delete")
        ])
      ], 16, Bf)
    ], 64));
  }
}), Ef = {
  class: "flex",
  title: "loading..."
}, Hf = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  width: "24px",
  height: "30px",
  viewBox: "0 0 24 30"
}, zf = /* @__PURE__ */ wl('<rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="8" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="16" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate></rect>', 3), Nf = [
  zf
], Uf = { class: "ml-2 mt-1 text-gray-400" }, qf = /* @__PURE__ */ ce({
  __name: "FormLoading",
  props: {
    icon: { type: Boolean, default: !0 },
    text: { default: "loading..." }
  },
  setup(e) {
    return Ne("ApiState", void 0), (t, l) => (a(), u("div", Ef, [
      e.icon ? (a(), u("svg", Hf, Nf)) : k("", !0),
      s("span", Uf, T(e.text), 1)
    ]));
  }
}), Qf = ["onClick"], Kf = {
  key: 3,
  class: "flex justify-between items-center"
}, Zf = { class: "mr-1 select-none" }, Gf = ["onClick"], Wf = /* @__PURE__ */ ce({
  __name: "DataGrid",
  props: {
    items: { default: () => [] },
    id: { default: "DataGrid" },
    type: null,
    tableStyle: { default: "stripedRows" },
    selectedColumns: null,
    gridClass: null,
    grid2Class: null,
    grid3Class: null,
    grid4Class: null,
    tableClass: null,
    theadClass: null,
    tbodyClass: null,
    theadRowClass: null,
    theadCellClass: null,
    isSelected: null,
    headerTitle: null,
    headerTitles: null,
    visibleFrom: null,
    rowClass: null,
    rowStyle: null
  },
  emits: ["headerSelected", "rowSelected"],
  setup(e, { emit: t }) {
    const l = e, n = A(), i = A(null), r = (E) => i.value === E, d = en(), c = (E) => Object.keys(d).find((q) => q.toLowerCase() == E.toLowerCase() + "-header"), h = (E) => Object.keys(d).find((q) => q.toLowerCase() == E.toLowerCase()), m = f(() => Nl(l.items).filter((E) => !!(d[E] || d[E + "-header"]))), { typeOf: y, typeProperties: b } = at(), p = f(() => Et(l.type)), v = f(() => y(p.value)), g = f(() => b(v.value));
    function O(E) {
      const q = l.headerTitles && ye(l.headerTitles, E) || E;
      return l.headerTitle ? l.headerTitle(q) : Xn(q);
    }
    function N(E) {
      const q = E.toLowerCase();
      return g.value.find((C) => C.name.toLowerCase() == q);
    }
    function ee(E) {
      const q = N(E);
      return q != null && q.format ? q.format : (q == null ? void 0 : q.type) == "TimeSpan" || (q == null ? void 0 : q.type) == "TimeOnly" ? { method: "time" } : null;
    }
    const P = {
      xs: "xs:table-cell",
      sm: "sm:table-cell",
      md: "md:table-cell",
      lg: "lg:table-cell",
      xl: "xl:table-cell",
      "2xl": "2xl:table-cell",
      never: ""
    };
    function z(E) {
      const q = l.visibleFrom && ye(l.visibleFrom, E);
      return q && qe(P[q], (C) => `hidden ${C}`);
    }
    const F = f(() => l.gridClass ?? ge.getGridClass(l.tableStyle)), W = f(() => l.grid2Class ?? ge.getGrid2Class(l.tableStyle)), j = f(() => l.grid3Class ?? ge.getGrid3Class(l.tableStyle)), S = f(() => l.grid4Class ?? ge.getGrid4Class(l.tableStyle)), U = f(() => l.tableClass ?? ge.getTableClass(l.tableStyle)), te = f(() => l.tbodyClass ?? ge.getTbodyClass(l.tbodyClass)), R = f(() => l.theadClass ?? ge.getTheadClass(l.tableStyle)), J = f(() => l.theadRowClass ?? ge.getTheadRowClass(l.tableStyle)), Y = f(() => l.theadCellClass ?? ge.getTheadCellClass(l.tableStyle));
    function G(E, q) {
      return l.rowClass ? l.rowClass(E, q) : ge.getTableRowClass(l.tableStyle, q, !!(l.isSelected && l.isSelected(E)), l.isSelected != null);
    }
    function M(E, q) {
      return l.rowStyle ? l.rowStyle(E, q) : void 0;
    }
    const le = f(() => {
      const E = (typeof l.selectedColumns == "string" ? l.selectedColumns.split(",") : l.selectedColumns) || (m.value.length > 0 ? m.value : Nl(l.items)), q = g.value.reduce((C, L) => (C[L.name.toLowerCase()] = L.format, C), {});
      return E.filter((C) => {
        var L;
        return ((L = q[C.toLowerCase()]) == null ? void 0 : L.method) != "hidden";
      });
    });
    function x(E, q) {
      t("headerSelected", q, E);
    }
    function K(E, q, C) {
      t("rowSelected", C, E);
    }
    return (E, q) => {
      const C = X("CellFormat"), L = X("PreviewFormat");
      return e.items.length ? (a(), u("div", {
        key: 0,
        ref_key: "refResults",
        ref: n,
        class: w(o(F))
      }, [
        s("div", {
          class: w(o(W))
        }, [
          s("div", {
            class: w(o(j))
          }, [
            s("div", {
              class: w(o(S))
            }, [
              s("table", {
                class: w(o(U))
              }, [
                s("thead", {
                  class: w(o(R))
                }, [
                  s("tr", {
                    class: w(o(J))
                  }, [
                    (a(!0), u(Te, null, Ie(o(le), (B) => (a(), u("td", {
                      class: w([z(B), o(Y), r(B) ? "text-gray-900 dark:text-gray-50" : "text-gray-500 dark:text-gray-400"])
                    }, [
                      s("div", {
                        onClick: (fe) => x(fe, B)
                      }, [
                        o(d)[B + "-header"] ? Z(E.$slots, B + "-header", {
                          key: 0,
                          column: B
                        }) : c(B) ? Z(E.$slots, c(B), {
                          key: 1,
                          column: B
                        }) : o(d).header ? Z(E.$slots, "header", {
                          key: 2,
                          column: B,
                          label: O(B)
                        }) : (a(), u("div", Kf, [
                          s("span", Zf, T(O(B)), 1)
                        ]))
                      ], 8, Qf)
                    ], 2))), 256))
                  ], 2)
                ], 2),
                s("tbody", {
                  class: w(o(te))
                }, [
                  (a(!0), u(Te, null, Ie(e.items, (B, fe) => (a(), u("tr", {
                    class: w(G(B, fe)),
                    style: Xl(M(B, fe)),
                    onClick: (I) => K(I, fe, B)
                  }, [
                    (a(!0), u(Te, null, Ie(o(le), (I) => (a(), u("td", {
                      class: w([z(I), o(ge).tableCellClass])
                    }, [
                      o(d)[I] ? Z(E.$slots, I, jt(Me({ key: 0 }, B))) : h(I) ? Z(E.$slots, h(I), jt(Me({ key: 1 }, B))) : N(I) ? (a(), se(C, {
                        key: 2,
                        type: o(v),
                        propType: N(I),
                        modelValue: B
                      }, null, 8, ["type", "propType", "modelValue"])) : (a(), se(L, {
                        key: 3,
                        value: o(ye)(B, I),
                        format: ee(I)
                      }, null, 8, ["value", "format"]))
                    ], 2))), 256))
                  ], 14, Gf))), 256))
                ], 2)
              ], 2)
            ], 2)
          ], 2)
        ], 2)
      ], 2)) : k("", !0);
    };
  }
}), Jf = ce({
  props: {
    type: Object,
    propType: Object,
    modelValue: Object
  },
  setup(e, { attrs: t }) {
    const { typeOf: l } = at();
    function n(i) {
      return i != null && i.format ? i.format : (i == null ? void 0 : i.type) == "TimeSpan" || (i == null ? void 0 : i.type) == "TimeOnly" ? { method: "time" } : null;
    }
    return () => {
      var ee;
      const i = n(e.propType), r = ye(e.modelValue, e.propType.name), d = Object.assign({}, e, t), c = gt("span", { innerHTML: Jt(r, i, d) }), h = Zt(r) && Array.isArray(r) ? gt("span", {}, [
        gt("span", { class: "mr-2" }, `${r.length}`),
        c
      ]) : c, m = (ee = e.propType) == null ? void 0 : ee.ref;
      if (!m)
        return h;
      const b = et(e.type).find((P) => P.type === m.model);
      if (!b)
        return h;
      const p = ye(e.modelValue, b.name), v = p && m.refLabel && ye(p, m.refLabel);
      if (!v)
        return h;
      const g = l(m.model), O = g == null ? void 0 : g.icon, N = O ? gt(Es, { image: O, class: "w-5 h-5 mr-1" }) : null;
      return gt("span", { class: "flex", title: `${m.model} ${r}` }, [
        N,
        v
      ]);
    };
  }
}), Xf = { key: 0 }, Yf = {
  key: 0,
  class: "mr-2"
}, e1 = ["innerHTML"], t1 = ["innerHTML"], l1 = {
  inheritAttrs: !1
}, n1 = /* @__PURE__ */ ce({
  ...l1,
  __name: "PreviewFormat",
  props: {
    value: null,
    format: null,
    includeIcon: { type: Boolean, default: !0 },
    includeCount: { type: Boolean, default: !0 },
    maxFieldLength: { default: 150 },
    maxNestedFields: { default: 2 },
    maxNestedFieldLength: { default: 30 }
  },
  setup(e) {
    const t = e, l = f(() => Array.isArray(t.value));
    return (n, i) => o(Zt)(e.value) ? (a(), u("span", Xf, [
      e.includeCount && o(l) ? (a(), u("span", Yf, T(e.value.length), 1)) : k("", !0),
      s("span", {
        innerHTML: o(Jt)(e.value, e.format, n.$attrs)
      }, null, 8, e1)
    ])) : (a(), u("span", {
      key: 1,
      innerHTML: o(Jt)(e.value, e.format, n.$attrs)
    }, null, 8, t1));
  }
}), s1 = ["innerHTML"], o1 = { key: 0 }, a1 = /* @__PURE__ */ s("b", null, null, -1), i1 = { key: 2 }, r1 = /* @__PURE__ */ ce({
  __name: "HtmlFormat",
  props: {
    value: null,
    depth: { default: 0 },
    fieldAttrs: null,
    classes: { type: Function, default: (e, t, l, n, i) => n }
  },
  setup(e) {
    const t = e, l = f(() => _t(t.value)), n = f(() => Array.isArray(t.value)), i = (h) => Xn(h), r = (h) => t.fieldAttrs ? t.fieldAttrs(h) : null, d = f(() => Nl(t.value)), c = (h) => h ? Object.keys(h).map((m) => ({ key: i(m), val: h[m] })) : [];
    return (h, m) => {
      const y = X("HtmlFormat", !0);
      return a(), u("div", {
        class: w(e.depth == 0 ? "prose html-format" : "")
      }, [
        o(l) ? (a(), u("div", {
          key: 0,
          innerHTML: o(Jt)(e.value)
        }, null, 8, s1)) : o(n) ? (a(), u("div", {
          key: 1,
          class: w(e.classes("array", "div", e.depth, o(ge).gridClass))
        }, [
          o(_t)(e.value[0]) ? (a(), u("div", o1, "[ " + T(e.value.join(", ")) + " ]", 1)) : (a(), u("div", {
            key: 1,
            class: w(e.classes("array", "div", e.depth, o(ge).grid2Class))
          }, [
            s("div", {
              class: w(e.classes("array", "div", e.depth, o(ge).grid3Class))
            }, [
              s("div", {
                class: w(e.classes("array", "div", e.depth, o(ge).grid4Class))
              }, [
                s("table", {
                  class: w(e.classes("object", "table", e.depth, o(ge).tableClass))
                }, [
                  s("thead", {
                    class: w(e.classes("array", "thead", e.depth, o(ge).theadClass))
                  }, [
                    s("tr", null, [
                      (a(!0), u(Te, null, Ie(o(d), (b) => (a(), u("th", {
                        class: w(e.classes("array", "th", e.depth, o(ge).theadCellClass + " whitespace-nowrap"))
                      }, [
                        a1,
                        we(T(i(b)), 1)
                      ], 2))), 256))
                    ])
                  ], 2),
                  s("tbody", null, [
                    (a(!0), u(Te, null, Ie(e.value, (b, p) => (a(), u("tr", {
                      class: w(e.classes("array", "tr", e.depth, p % 2 == 0 ? "bg-white" : "bg-gray-50", p))
                    }, [
                      (a(!0), u(Te, null, Ie(o(d), (v) => (a(), u("td", {
                        class: w(e.classes("array", "td", e.depth, o(ge).tableCellClass))
                      }, [
                        $e(y, Me({
                          value: b[v],
                          "field-attrs": e.fieldAttrs,
                          depth: e.depth + 1,
                          classes: e.classes
                        }, r(v)), null, 16, ["value", "field-attrs", "depth", "classes"])
                      ], 2))), 256))
                    ], 2))), 256))
                  ])
                ], 2)
              ], 2)
            ], 2)
          ], 2))
        ], 2)) : (a(), u("div", i1, [
          s("table", {
            class: w(e.classes("object", "table", e.depth, "table-object"))
          }, [
            (a(!0), u(Te, null, Ie(c(e.value), (b) => (a(), u("tr", {
              class: w(e.classes("object", "tr", e.depth, ""))
            }, [
              s("th", {
                class: w(e.classes("object", "th", e.depth, "align-top py-2 px-4 text-left text-sm font-medium tracking-wider whitespace-nowrap"))
              }, T(b.key), 3),
              s("td", {
                class: w(e.classes("object", "td", e.depth, "align-top py-2 px-4 text-sm"))
              }, [
                $e(y, Me({
                  value: b.val,
                  "field-attrs": e.fieldAttrs,
                  depth: e.depth + 1,
                  classes: e.classes
                }, r(b.key)), null, 16, ["value", "field-attrs", "depth", "classes"])
              ], 2)
            ], 2))), 256))
          ], 2)
        ]))
      ], 2);
    };
  }
}), u1 = { class: "absolute top-0 right-0 pt-4 pr-4" }, d1 = /* @__PURE__ */ s("span", { class: "sr-only" }, "Close", -1), c1 = /* @__PURE__ */ s("svg", {
  class: "h-6 w-6",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), f1 = [
  d1,
  c1
], m1 = /* @__PURE__ */ ce({
  __name: "CloseButton",
  props: {
    buttonClass: { default: "bg-white dark:bg-black" }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    return (l, n) => (a(), u("div", u1, [
      s("button", {
        type: "button",
        onClick: n[0] || (n[0] = (i) => l.$emit("close")),
        class: w([e.buttonClass, "rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black"])
      }, f1, 2)
    ]));
  }
}), v1 = ["id", "aria-labelledby"], h1 = /* @__PURE__ */ s("div", { class: "fixed inset-0" }, null, -1), g1 = { class: "fixed inset-0 overflow-hidden" }, p1 = { class: "flex h-full flex-col bg-white dark:bg-black shadow-xl" }, y1 = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, b1 = { class: "flex-1" }, w1 = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, x1 = { class: "flex items-start justify-between space-x-3" }, k1 = { class: "space-y-1" }, $1 = ["id"], C1 = {
  key: 1,
  class: "text-sm text-gray-500"
}, _1 = { class: "flex h-7 items-center" }, L1 = { class: "flex-shrink-0 border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6" }, V1 = /* @__PURE__ */ ce({
  __name: "SlideOver",
  props: {
    id: { default: "SlideOver" },
    title: null,
    contentClass: { default: "relative mt-6 flex-1 px-4 sm:px-6" }
  },
  emits: ["done"],
  setup(e, { emit: t }) {
    const l = A(!1), n = A(""), i = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    Lt(l, () => {
      Ct(i, n, l.value), l.value || setTimeout(() => t("done"), 700);
    }), l.value = !0;
    const r = () => l.value = !1, d = (c) => {
      c.key === "Escape" && r();
    };
    return tt(() => window.addEventListener("keydown", d)), Rt(() => window.removeEventListener("keydown", d)), (c, h) => {
      const m = X("CloseButton");
      return a(), u("div", {
        id: e.id,
        class: "relative z-10",
        "aria-labelledby": e.id + "-title",
        role: "dialog",
        "aria-modal": "true"
      }, [
        h1,
        s("div", g1, [
          s("div", {
            onMousedown: r,
            class: "absolute inset-0 overflow-hidden"
          }, [
            s("div", {
              onMousedown: h[0] || (h[0] = Ue(() => {
              }, ["stop"])),
              class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
            }, [
              s("div", {
                class: w(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", n.value])
              }, [
                s("div", p1, [
                  s("div", y1, [
                    s("div", b1, [
                      s("div", w1, [
                        s("div", x1, [
                          s("div", k1, [
                            e.title ? (a(), u("h2", {
                              key: 0,
                              class: "text-lg font-medium text-gray-900 dark:text-gray-50",
                              id: e.id + "-title"
                            }, T(e.title), 9, $1)) : k("", !0),
                            c.$slots.subtitle ? (a(), u("p", C1, [
                              Z(c.$slots, "subtitle")
                            ])) : k("", !0)
                          ]),
                          s("div", _1, [
                            $e(m, {
                              "button-class": "bg-gray-50 dark:bg-gray-900",
                              onClose: r
                            })
                          ])
                        ])
                      ]),
                      s("div", {
                        class: w(e.contentClass)
                      }, [
                        Z(c.$slots, "default")
                      ], 2)
                    ])
                  ]),
                  s("div", L1, [
                    Z(c.$slots, "footer")
                  ])
                ])
              ], 2)
            ], 32)
          ], 32)
        ])
      ], 8, v1);
    };
  }
}), S1 = ["id", "data-transition-for", "aria-labelledby"], M1 = { class: "fixed inset-0 z-10 overflow-y-auto" }, A1 = { class: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" }, T1 = /* @__PURE__ */ s("span", { class: "sr-only" }, "Close", -1), F1 = /* @__PURE__ */ s("svg", {
  class: "h-6 w-6",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), I1 = [
  T1,
  F1
], D1 = /* @__PURE__ */ ce({
  __name: "ModalDialog",
  props: {
    id: { default: "ModalDialog" },
    modalClass: { default: Jl.modalClass },
    sizeClass: { default: Jl.sizeClass }
  },
  emits: ["done"],
  setup(e, { emit: t }) {
    const l = A(!1), n = A(""), i = {
      entering: { cls: "ease-out duration-300", from: "opacity-0", to: "opacity-100" },
      leaving: { cls: "ease-in duration-200", from: "opacity-100", to: "opacity-0" }
    }, r = A(""), d = {
      entering: { cls: "ease-out duration-300", from: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", to: "opacity-100 translate-y-0 sm:scale-100" },
      leaving: { cls: "ease-in duration-200", from: "opacity-100 translate-y-0 sm:scale-100", to: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" }
    };
    Lt(l, () => {
      Ct(i, n, l.value), Ct(d, r, l.value), l.value || setTimeout(() => t("done"), 200);
    }), l.value = !0;
    const c = () => l.value = !1;
    Xt("ModalProvider", {
      openModal: b
    });
    const m = A(), y = A();
    function b(g, O) {
      m.value = g, y.value = O;
    }
    async function p(g) {
      y.value && y.value(g), m.value = void 0, y.value = void 0;
    }
    const v = (g) => {
      g.key === "Escape" && c();
    };
    return tt(() => window.addEventListener("keydown", v)), Rt(() => window.removeEventListener("keydown", v)), (g, O) => {
      var ee;
      const N = X("ModalLookup");
      return a(), u("div", {
        id: e.id,
        "data-transition-for": e.id,
        onMousedown: c,
        class: "relative z-10",
        "aria-labelledby": `${e.id}-title`,
        role: "dialog",
        "aria-modal": "true"
      }, [
        s("div", {
          class: w(["fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity", n.value])
        }, null, 2),
        s("div", M1, [
          s("div", A1, [
            s("div", {
              class: w([e.modalClass, e.sizeClass, r.value]),
              onMousedown: O[0] || (O[0] = Ue(() => {
              }, ["stop"]))
            }, [
              s("div", null, [
                s("div", { class: "hidden sm:block absolute top-0 right-0 pt-4 pr-4 z-10" }, [
                  s("button", {
                    type: "button",
                    onClick: c,
                    class: "bg-white dark:bg-black rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black"
                  }, I1)
                ]),
                Z(g.$slots, "default")
              ])
            ], 34)
          ])
        ]),
        ((ee = m.value) == null ? void 0 : ee.name) == "ModalLookup" && m.value.ref ? (a(), se(N, {
          key: 0,
          "ref-info": m.value.ref,
          onDone: p
        }, null, 8, ["ref-info"])) : k("", !0)
      ], 40, S1);
    };
  }
}), j1 = {
  class: "pt-2 overflow-auto",
  style: { "min-height": "620px" }
}, O1 = { class: "mt-3 pl-5 flex flex-wrap items-center" }, P1 = { class: "hidden sm:block text-xl leading-6 font-medium text-gray-900 dark:text-gray-50 mr-3" }, B1 = { class: "hidden md:inline" }, R1 = { class: "flex pb-1 sm:pb-0" }, E1 = ["title"], H1 = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("g", {
    "stroke-width": "1.5",
    fill: "none"
  }, [
    /* @__PURE__ */ s("path", {
      d: "M9 3H3.6a.6.6 0 0 0-.6.6v16.8a.6.6 0 0 0 .6.6H9M9 3v18M9 3h6M9 21h6m0-18h5.4a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H15m0-18v18",
      stroke: "currentColor"
    })
  ])
], -1), z1 = [
  H1
], N1 = ["disabled"], U1 = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6l6 6zM6 6h2v12H6z",
    fill: "currentColor"
  })
], -1), q1 = [
  U1
], Q1 = ["disabled"], K1 = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z",
    fill: "currentColor"
  })
], -1), Z1 = [
  K1
], G1 = ["disabled"], W1 = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z",
    fill: "currentColor"
  })
], -1), J1 = [
  W1
], X1 = ["disabled"], Y1 = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6l-6-6zM16 6h2v12h-2z",
    fill: "currentColor"
  })
], -1), em = [
  Y1
], tm = {
  key: 0,
  class: "flex pb-1 sm:pb-0"
}, lm = { class: "px-4 text-lg text-black dark:text-white" }, nm = { key: 0 }, sm = { key: 1 }, om = /* @__PURE__ */ s("span", { class: "hidden xl:inline" }, " Showing Results ", -1), am = { key: 2 }, im = {
  key: 1,
  class: "pl-2"
}, rm = /* @__PURE__ */ s("svg", {
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    fill: "currentColor",
    d: "M6.78 2.72a.75.75 0 0 1 0 1.06L4.56 6h8.69a7.75 7.75 0 1 1-7.75 7.75a.75.75 0 0 1 1.5 0a6.25 6.25 0 1 0 6.25-6.25H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0Z"
  })
], -1), um = [
  rm
], dm = { class: "flex pb-1 sm:pb-0" }, cm = {
  key: 0,
  class: "pl-2"
}, fm = /* @__PURE__ */ s("svg", {
  class: "flex-none w-5 h-5 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
    "clip-rule": "evenodd"
  })
], -1), mm = { class: "mr-1" }, vm = {
  key: 0,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, hm = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
  "clip-rule": "evenodd"
}, null, -1), gm = [
  hm
], pm = {
  key: 1,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, ym = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",
  "clip-rule": "evenodd"
}, null, -1), bm = [
  ym
], wm = { key: 1 }, xm = { key: 4 }, km = { key: 0 }, $m = {
  key: 0,
  class: "cursor-pointer flex justify-between items-center hover:text-gray-900 dark:hover:text-gray-50"
}, Cm = { class: "mr-1 select-none" }, _m = {
  key: 1,
  class: "flex justify-between items-center"
}, Lm = { class: "mr-1 select-none" }, Vm = /* @__PURE__ */ ce({
  __name: "ModalLookup",
  props: {
    id: { default: "ModalLookup" },
    refInfo: null,
    skip: { default: 0 },
    prefs: null,
    selectedColumns: null,
    allowFiltering: { type: [Boolean, null], default: !0 },
    showPreferences: { type: [Boolean, null], default: !0 },
    showPagingNav: { type: [Boolean, null], default: !0 },
    showPagingInfo: { type: [Boolean, null], default: !0 },
    showResetPreferences: { type: [Boolean, null], default: !0 },
    showFiltersView: { type: [Boolean, null], default: !0 },
    toolbarButtonClass: null,
    canFilter: null
  },
  emits: ["done"],
  setup(e, { emit: t }) {
    const l = e, n = en(), { config: i } = St(), { metadataApi: r, filterDefinitions: d } = at(), c = Ne("client"), h = i.value.storage, m = f(() => l.toolbarButtonClass ?? ge.toolbarButtonClass), y = f(() => d.value), b = 25, p = A({ take: b }), v = A(new Je()), g = A(l.skip), O = A(!1), N = A(), ee = (Q) => typeof Q == "string" ? Q.split(",") : Q || [];
    function P(Q, H) {
      return ge.getTableRowClass("fullWidth", H, !1, !0);
    }
    function z() {
      let Q = ee(l.selectedColumns);
      return Q.length > 0 ? Q : [];
    }
    const F = f(() => ot(l.refInfo.model)), W = f(() => {
      let H = z().map((ve) => ve.toLowerCase());
      const re = et(F.value);
      return H.length > 0 ? H.map((ve) => re.find((Se) => Se.name.toLowerCase() === ve)).filter((ve) => ve != null) : re;
    }), j = f(() => {
      let Q = W.value.map((re) => re.name), H = ee(p.value.selectedColumns).map((re) => re.toLowerCase());
      return H.length > 0 ? Q.filter((re) => H.includes(re.toLowerCase())) : Q;
    }), S = f(() => p.value.take ?? b), U = f(() => v.value.response ? ye(v.value.response, "results") : []), te = f(() => {
      var Q;
      return ((Q = v.value.response) == null ? void 0 : Q.total) ?? U.value.length ?? 0;
    }), R = f(() => g.value > 0), J = f(() => g.value > 0), Y = f(() => U.value.length >= S.value), G = f(() => U.value.length >= S.value), M = A([]), le = f(() => M.value.some((Q) => Q.settings.filters.length > 0 || !!Q.settings.sort)), x = f(() => M.value.map((Q) => Q.settings.filters.length).reduce((Q, H) => Q + H, 0)), K = f(() => el(F.value)), E = f(() => {
      var Q;
      return (Q = r.value) == null ? void 0 : Q.operations.find((H) => {
        var re;
        return ((re = H.dataModel) == null ? void 0 : re.name) == l.refInfo.model && ze.isAnyQuery(H);
      });
    }), q = A(), C = A(!1), L = A(), B = () => `${l.id}/ApiPrefs/${l.refInfo.model}`, fe = (Q) => `Column/${l.id}:${l.refInfo.model}.${Q}`;
    async function I(Q) {
      g.value += Q, g.value < 0 && (g.value = 0);
      var H = Math.floor(te.value / S.value) * S.value;
      g.value > H && (g.value = H), await xe();
    }
    async function V(Q, H) {
      t("done", Q);
    }
    function oe() {
      t("done", null);
    }
    function Le(Q, H) {
      var ve, Se, Oe;
      let re = H.target;
      if ((re == null ? void 0 : re.tagName) !== "TD") {
        let Re = (ve = re == null ? void 0 : re.closest("TABLE")) == null ? void 0 : ve.getBoundingClientRect(), _e = M.value.find((Fe) => Fe.name.toLowerCase() == Q.toLowerCase());
        if (_e && Re) {
          let Fe = 318, je = (((Se = H.target) == null ? void 0 : Se.tagName) === "DIV" ? H.target : (Oe = H.target) == null ? void 0 : Oe.closest("DIV")).getBoundingClientRect(), Ge = Fe + 25;
          L.value = {
            column: _e,
            topLeft: {
              x: Math.max(Math.floor(je.x + 25), Ge),
              y: Math.floor(115)
            }
          };
        }
      }
    }
    function de() {
      L.value = null;
    }
    async function ue(Q) {
      var re;
      let H = (re = L.value) == null ? void 0 : re.column;
      H && (H.settings = Q, h.setItem(fe(H.name), JSON.stringify(H.settings)), await xe()), L.value = null;
    }
    async function _(Q) {
      h.setItem(fe(Q.name), JSON.stringify(Q.settings)), await xe();
    }
    async function ie(Q) {
      C.value = !1, p.value = Q, h.setItem(B(), JSON.stringify(Q)), await xe();
    }
    async function xe() {
      await Ve(he());
    }
    async function Ve(Q) {
      const H = E.value;
      if (!H) {
        console.error(`No Query API was found for ${l.refInfo.model}`);
        return;
      }
      let re = Gt(H, Q), ve = Jn((Re) => {
        v.value.response = v.value.error = void 0, O.value = Re;
      }), Se = await c.api(re);
      ve(), xt(() => v.value = Se);
      let Oe = ye(Se.response, "results") || [];
      !Se.succeeded || Oe.label == 0;
    }
    function he() {
      let Q = {
        include: "total",
        take: S.value
      }, H = ee(p.value.selectedColumns || l.selectedColumns);
      if (H.length > 0) {
        let ve = K.value;
        ve && H.includes(ve.name) && (H = [ve.name, ...H]), Q.fields = H.join(",");
      }
      let re = [];
      return M.value.forEach((ve) => {
        ve.settings.sort && re.push((ve.settings.sort === "DESC" ? "-" : "") + ve.name), ve.settings.filters.forEach((Se) => {
          let Oe = Se.key.replace("%", ve.name);
          Q[Oe] = Se.value;
        });
      }), typeof Q.skip > "u" && g.value > 0 && (Q.skip = g.value), re.length > 0 && (Q.orderBy = re.join(",")), Q;
    }
    async function De() {
      M.value.forEach((Q) => {
        Q.settings = { filters: [] }, h.removeItem(fe(Q.name));
      }), await xe();
    }
    return tt(async () => {
      const Q = l.prefs || yl(h.getItem(B()));
      Q && (p.value = Q), M.value = W.value.map((H) => ({
        name: H.name,
        type: H.type,
        meta: H,
        settings: Object.assign(
          {
            filters: []
          },
          yl(h.getItem(fe(H.name)))
        )
      })), isNaN(l.skip) || (g.value = l.skip), await xe();
    }), (Q, H) => {
      const re = X("ErrorSummary"), ve = X("Loading"), Se = X("SettingsIcons"), Oe = X("DataGrid"), Re = X("ModalDialog");
      return a(), u(Te, null, [
        e.refInfo ? (a(), se(Re, {
          key: 0,
          ref_key: "modalDialog",
          ref: q,
          id: e.id,
          onDone: oe
        }, {
          default: ke(() => [
            s("div", j1, [
              s("div", O1, [
                s("h3", P1, [
                  we(" Select "),
                  s("span", B1, T(o(He)(e.refInfo.model)), 1)
                ]),
                s("div", R1, [
                  e.showPreferences ? (a(), u("button", {
                    key: 0,
                    type: "button",
                    class: "pl-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400",
                    title: `${e.refInfo.model} Preferences`,
                    onClick: H[0] || (H[0] = (_e) => C.value = !C.value)
                  }, z1, 8, E1)) : k("", !0),
                  e.showPagingNav ? (a(), u("button", {
                    key: 1,
                    type: "button",
                    class: w(["pl-2", o(R) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "First page",
                    disabled: !o(R),
                    onClick: H[1] || (H[1] = (_e) => I(-o(te)))
                  }, q1, 10, N1)) : k("", !0),
                  e.showPagingNav ? (a(), u("button", {
                    key: 2,
                    type: "button",
                    class: w(["pl-2", o(J) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "Previous page",
                    disabled: !o(J),
                    onClick: H[2] || (H[2] = (_e) => I(-o(S)))
                  }, Z1, 10, Q1)) : k("", !0),
                  e.showPagingNav ? (a(), u("button", {
                    key: 3,
                    type: "button",
                    class: w(["pl-2", o(Y) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "Next page",
                    disabled: !o(Y),
                    onClick: H[3] || (H[3] = (_e) => I(o(S)))
                  }, J1, 10, G1)) : k("", !0),
                  e.showPagingNav ? (a(), u("button", {
                    key: 4,
                    type: "button",
                    class: w(["pl-2", o(G) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "Last page",
                    disabled: !o(G),
                    onClick: H[4] || (H[4] = (_e) => I(o(te)))
                  }, em, 10, X1)) : k("", !0)
                ]),
                e.showPagingInfo ? (a(), u("div", tm, [
                  s("div", lm, [
                    O.value ? (a(), u("span", nm, "Querying...")) : k("", !0),
                    o(U).length ? (a(), u("span", sm, [
                      om,
                      we(" " + T(g.value + 1) + " - " + T(Math.min(g.value + o(U).length, o(te))) + " ", 1),
                      s("span", null, " of " + T(o(te)), 1)
                    ])) : v.value.completed ? (a(), u("span", am, "No Results")) : k("", !0)
                  ])
                ])) : k("", !0),
                o(le) && e.showResetPreferences ? (a(), u("div", im, [
                  s("button", {
                    type: "button",
                    onClick: De,
                    title: "Reset Preferences & Filters",
                    class: w(o(m))
                  }, um, 2)
                ])) : k("", !0),
                s("div", dm, [
                  e.showFiltersView && o(x) > 0 ? (a(), u("div", cm, [
                    s("button", {
                      type: "button",
                      onClick: H[5] || (H[5] = (_e) => N.value = N.value == "filters" ? null : "filters"),
                      class: w(o(m)),
                      "aria-expanded": "false"
                    }, [
                      fm,
                      s("span", mm, T(o(x)) + " " + T(o(x) == 1 ? "Filter" : "Filters"), 1),
                      N.value != "filters" ? (a(), u("svg", vm, gm)) : (a(), u("svg", pm, bm))
                    ], 2)
                  ])) : k("", !0)
                ])
              ]),
              N.value == "filters" ? (a(), se(_n, {
                key: 0,
                class: "border-y border-gray-200 dark:border-gray-800 py-8 my-2",
                definitions: o(y),
                columns: M.value,
                onDone: H[6] || (H[6] = (_e) => N.value = null),
                onChange: _
              }, null, 8, ["definitions", "columns"])) : k("", !0),
              L.value ? (a(), u("div", wm, [
                $e(Cn, {
                  definitions: o(y),
                  column: L.value.column,
                  "top-left": L.value.topLeft,
                  onDone: de,
                  onSave: ue
                }, null, 8, ["definitions", "column", "top-left"])
              ])) : k("", !0),
              v.value.error ? (a(), se(re, {
                key: 2,
                status: v.value.error
              }, null, 8, ["status"])) : O.value ? (a(), se(ve, { key: 3 })) : (a(), u("div", xm, [
                o(U).length ? (a(), u("div", km, [
                  $e(Oe, {
                    id: e.id,
                    items: o(U),
                    type: e.refInfo.model,
                    "selected-columns": o(j),
                    onFiltersChanged: xe,
                    tableStyle: "fullWidth",
                    rowClass: P,
                    onRowSelected: V,
                    onHeaderSelected: Le
                  }, tn({
                    header: ke(({ column: _e, label: Fe }) => {
                      var Qe;
                      return [
                        e.allowFiltering && (!l.canFilter || l.canFilter(_e)) ? (a(), u("div", $m, [
                          s("span", Cm, T(Fe), 1),
                          $e(Se, {
                            column: M.value.find((je) => je.name.toLowerCase() === _e.toLowerCase()),
                            "is-open": ((Qe = L.value) == null ? void 0 : Qe.column.name) === _e
                          }, null, 8, ["column", "is-open"])
                        ])) : (a(), u("div", _m, [
                          s("span", Lm, T(Fe), 1)
                        ]))
                      ];
                    }),
                    _: 2
                  }, [
                    Ie(Object.keys(o(n)), (_e) => ({
                      name: _e,
                      fn: ke((Fe) => [
                        Z(Q.$slots, _e, jt(gl(Fe)))
                      ])
                    }))
                  ]), 1032, ["id", "items", "type", "selected-columns"])
                ])) : k("", !0)
              ]))
            ])
          ]),
          _: 3
        }, 8, ["id"])) : k("", !0),
        C.value ? (a(), se(Ln, {
          key: 1,
          columns: o(W),
          prefs: p.value,
          onDone: H[7] || (H[7] = (_e) => C.value = !1),
          onSave: ie
        }, null, 8, ["columns", "prefs"])) : k("", !0)
      ], 64);
    };
  }
}), Sm = { class: "sm:hidden" }, Mm = ["for"], Am = ["id", "name"], Tm = ["value"], Fm = { class: "hidden sm:block" }, Im = { class: "border-b border-gray-200" }, Dm = {
  class: "-mb-px flex",
  "aria-label": "Tabs"
}, jm = ["onClick"], Om = /* @__PURE__ */ ce({
  __name: "Tabs",
  props: {
    tabs: null,
    id: { default: "tabs" },
    param: { default: "tab" },
    label: { type: Function, default: (e) => He(e) },
    selected: null,
    tabClass: null,
    bodyClass: { default: "p-4" },
    url: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, l = f(() => Object.keys(t.tabs)), n = (y) => t.label ? t.label(y) : He(y), i = f(() => t.id || "tabs"), r = f(() => t.param || "tab"), d = A();
    function c(y) {
      if (d.value = y, t.url) {
        const b = l.value[0];
        nn({ tab: y === b ? void 0 : y });
      }
    }
    function h(y) {
      return d.value === y;
    }
    const m = f(() => `${100 / Object.keys(t.tabs).length}%`);
    return tt(() => {
      if (d.value = t.selected || Object.keys(t.tabs)[0], t.url) {
        const y = location.search ? location.search : location.hash.includes("?") ? "?" + dl(location.hash, "?") : "", p = zl(y)[r.value];
        p && (d.value = p);
      }
    }), (y, b) => (a(), u("div", null, [
      s("div", Sm, [
        s("label", {
          for: o(i),
          class: "sr-only"
        }, "Select a tab", 8, Mm),
        s("select", {
          id: o(i),
          name: o(i),
          class: "block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",
          onChange: b[0] || (b[0] = (p) => {
            var v;
            return c((v = p.target) == null ? void 0 : v.value);
          })
        }, [
          (a(!0), u(Te, null, Ie(o(l), (p) => (a(), u("option", {
            key: p,
            value: p
          }, T(n(p)), 9, Tm))), 128))
        ], 40, Am)
      ]),
      s("div", Fm, [
        s("div", Im, [
          s("nav", Dm, [
            (a(!0), u(Te, null, Ie(o(l), (p) => (a(), u("a", {
              href: "#",
              onClick: Ue((v) => c(p), ["prevent"]),
              style: Xl({ width: o(m) }),
              class: w([h(p) ? "border-indigo-500 text-indigo-600 py-4 px-1 text-center border-b-2 font-medium text-sm" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 text-center border-b-2 font-medium text-sm", e.tabClass])
            }, T(n(p)), 15, jm))), 256))
          ])
        ])
      ]),
      s("div", {
        class: w(e.bodyClass)
      }, [
        (a(), se(Zn(e.tabs[d.value])))
      ], 2)
    ]));
  }
}), Pm = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-4 w-4 text-gray-400",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
}, [
  /* @__PURE__ */ s("path", {
    fill: "currentColor",
    d: "M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"
  })
], -1), Bm = [
  Pm
], Rm = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-4 w-4 text-indigo-600",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
}, [
  /* @__PURE__ */ s("path", {
    fill: "currentColor",
    d: "M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"
  })
], -1), Em = [
  Rm
], Hm = /* @__PURE__ */ ce({
  __name: "DarkModeToggle",
  setup(e) {
    const t = typeof document < "u" ? document.querySelector("html") : null;
    let l = A(t == null ? void 0 : t.classList.contains("dark"));
    function n() {
      l.value ? t == null || t.classList.remove("dark") : t == null || t.classList.add("dark"), l.value = !l.value, localStorage.setItem("color-scheme", l.value ? "dark" : "light");
    }
    return (i, r) => (a(), u("button", {
      type: "button",
      class: "bg-gray-200 dark:bg-gray-700 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black",
      role: "switch",
      "aria-checked": "false",
      onClick: r[0] || (r[0] = (d) => n())
    }, [
      s("span", {
        class: w(`${o(l) ? "translate-x-0" : "translate-x-5"} pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white dark:bg-black shadow transform ring-0 transition ease-in-out duration-200`)
      }, [
        s("span", {
          class: w(`${o(l) ? "opacity-100 ease-in duration-200" : "opacity-0 ease-out duration-100"} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`),
          "aria-hidden": "true"
        }, Bm, 2),
        s("span", {
          class: w(`${o(l) ? "opacity-0 ease-out duration-100" : "opacity-100 ease-in duration-200"} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`),
          "aria-hidden": "true"
        }, Em, 2)
      ], 2)
    ]));
  }
}), zm = { key: 0 }, Nm = {
  key: 1,
  class: "min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8"
}, Um = { class: "sm:mx-auto sm:w-full sm:max-w-md" }, qm = { class: "mt-6 text-center text-3xl font-extrabold text-gray-900" }, Qm = {
  key: 0,
  class: "mt-4 text-center text-sm text-gray-600"
}, Km = { class: "relative z-0 inline-flex shadow-sm rounded-md" }, Zm = ["onClick"], Gm = { class: "mt-8 sm:mx-auto sm:w-full sm:max-w-md" }, Wm = { class: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10" }, Jm = ["onSubmit"], Xm = { class: "mt-8" }, Ym = {
  key: 1,
  class: "mt-6"
}, ev = /* @__PURE__ */ wl('<div class="relative"><div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-300"></div></div><div class="relative flex justify-center text-sm"><span class="px-2 bg-white text-gray-500"> Or continue with </span></div></div>', 1), tv = { class: "mt-6 grid grid-cols-3 gap-3" }, lv = ["href", "title"], nv = {
  key: 1,
  class: "h-5 w-5 text-gray-700",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, sv = /* @__PURE__ */ s("path", {
  d: "M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5z",
  fill: "currentColor"
}, null, -1), ov = /* @__PURE__ */ s("path", {
  d: "M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2zm7.992 22.926A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0z",
  fill: "currentColor"
}, null, -1), av = [
  sv,
  ov
], iv = /* @__PURE__ */ ce({
  __name: "SignIn",
  props: {
    provider: null,
    title: { default: "Sign In" },
    tabs: { type: [Boolean, String], default: !0 },
    oauth: { type: [Boolean, String], default: !0 }
  },
  emits: ["login"],
  setup(e, { emit: t }) {
    const l = e, { getMetadata: n, createDto: i } = at(), r = Tl(), d = Ne("client"), { signIn: c } = $n(), h = n({ assert: !0 }), m = h.plugins.auth, y = document.baseURI, b = h.app.baseUrl, p = A(i("Authenticate")), v = A(new Je()), g = A(l.provider);
    tt(() => {
      m == null || m.authProviders.map((R) => R.formLayout).filter((R) => R).forEach((R) => R.forEach((J) => p.value[J.id] = ""));
    });
    const O = f(() => (m == null ? void 0 : m.authProviders.filter((R) => R.formLayout)) || []), N = f(() => O.value[0] || {}), ee = f(() => O.value[Math.max(O.value.length - 1, 0)] || {}), P = f(() => (g.value ? m == null ? void 0 : m.authProviders.find((R) => R.name === g.value) : null) ?? N.value), z = (R) => R === !1 || R === "false";
    function F(R) {
      return R.label || R.navItem && R.navItem.label;
    }
    const W = f(() => {
      var R;
      return (((R = P.value) == null ? void 0 : R.formLayout) || []).map((J) => {
        var Y, G;
        return Object.assign({}, J, {
          type: (Y = J.type) == null ? void 0 : Y.toLowerCase(),
          autocomplete: J.autocomplete || (((G = J.type) == null ? void 0 : G.toLowerCase()) === "password" ? "current-password" : void 0) || (J.id.toLowerCase() === "username" ? "username" : void 0),
          css: Object.assign({ field: "col-span-12" }, J.css)
        });
      });
    }), j = f(() => z(l.oauth) ? [] : (m == null ? void 0 : m.authProviders.filter((R) => R.type === "oauth")) || []), S = f(() => {
      let R = xo(
        m == null ? void 0 : m.authProviders.filter((Y) => Y.formLayout && Y.formLayout.length > 0),
        (Y, G) => {
          let M = F(G) || st(G.name);
          Y[M] = G.name === N.value.name ? "" : G.name;
        }
      );
      const J = P.value;
      return J && z(l.tabs) && (R = { [F(J) || st(J.name)]: J }), R;
    }), U = f(() => {
      let R = W.value.map((J) => J.id).filter((J) => J);
      return v.value.summaryMessage(R);
    });
    async function te() {
      if (p.value.provider = P.value.name, P.value.name === "authsecret" && (d.headers.set("authsecret", p.value.authsecret), p.value = i("Authenticate")), v.value = await r.api(p.value), v.value.succeeded) {
        const R = v.value.response;
        c(R), t("login", R), v.value = new Je(), p.value = i("Authenticate");
      }
    }
    return (R, J) => {
      const Y = X("ErrorSummary"), G = X("AutoFormFields"), M = X("PrimaryButton"), le = X("Icon"), x = oo("href");
      return o(m) ? (a(), u("div", Nm, [
        s("div", Um, [
          s("h2", qm, T(e.title), 1),
          Object.keys(o(S)).length > 1 ? (a(), u("p", Qm, [
            s("span", Km, [
              (a(!0), u(Te, null, Ie(o(S), (K, E) => kt((a(), u("a", {
                onClick: (q) => g.value = K,
                class: w([
                  K === "" || K === o(N).name ? "rounded-l-md" : K === o(ee).name ? "rounded-r-md -ml-px" : "-ml-px",
                  g.value === K ? "z-10 outline-none ring-1 ring-indigo-500 border-indigo-500" : "",
                  "cursor-pointer relative inline-flex items-center px-4 py-1 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                ])
              }, [
                we(T(E), 1)
              ], 10, Zm)), [
                [x, { provider: K }]
              ])), 256))
            ])
          ])) : k("", !0)
        ]),
        s("div", Gm, [
          o(U) ? (a(), se(Y, {
            key: 0,
            class: "mb-3",
            errorSummary: o(U)
          }, null, 8, ["errorSummary"])) : k("", !0),
          s("div", Wm, [
            o(W).length ? (a(), u("form", {
              key: 0,
              onSubmit: Ue(te, ["prevent"])
            }, [
              $e(G, {
                modelValue: p.value,
                formLayout: o(W),
                api: v.value,
                hideSummary: !0,
                "divide-class": "",
                "space-class": "space-y-6"
              }, null, 8, ["modelValue", "formLayout", "api"]),
              s("div", Xm, [
                $e(M, { class: "w-full" }, {
                  default: ke(() => [
                    we("Sign In")
                  ]),
                  _: 1
                })
              ])
            ], 40, Jm)) : k("", !0),
            o(j).length ? (a(), u("div", Ym, [
              ev,
              s("div", tv, [
                (a(!0), u(Te, null, Ie(o(j), (K) => (a(), u("div", null, [
                  s("a", {
                    href: o(b) + K.navItem.href + "?continue=" + o(y),
                    title: F(K),
                    class: "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  }, [
                    K.icon ? (a(), se(le, {
                      key: 0,
                      image: K.icon,
                      class: "h-5 w-5 text-gray-700"
                    }, null, 8, ["image"])) : (a(), u("svg", nv, av))
                  ], 8, lv)
                ]))), 256))
              ])
            ])) : k("", !0)
          ])
        ])
      ])) : (a(), u("div", zm, "No Auth Plugin"));
    };
  }
}), rv = ["for"], uv = {
  key: 1,
  class: "border border-gray-200 flex justify-between"
}, dv = { class: "p-2 flex flex-wrap gap-x-4" }, cv = /* @__PURE__ */ s("title", null, "Bold text (CTRL+B)", -1), fv = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79c0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79c0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"
}, null, -1), mv = [
  cv,
  fv
], vv = /* @__PURE__ */ s("title", null, "Italics (CTRL+I)", -1), hv = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4h-8z"
}, null, -1), gv = [
  vv,
  hv
], pv = /* @__PURE__ */ s("title", null, "Insert Link (CTRL+K)", -1), yv = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7a5 5 0 0 0-5 5a5 5 0 0 0 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8v2m9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1c0 1.71-1.39 3.1-3.1 3.1h-4V17h4a5 5 0 0 0 5-5a5 5 0 0 0-5-5Z"
}, null, -1), bv = [
  pv,
  yv
], wv = /* @__PURE__ */ s("title", null, "Blockquote (CTRL+Q)", -1), xv = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "m15 17l2-4h-4V6h7v7l-2 4h-3Zm-9 0l2-4H4V6h7v7l-2 4H6Z"
}, null, -1), kv = [
  wv,
  xv
], $v = /* @__PURE__ */ s("title", null, "Insert Image (CTRL+SHIFT+L)", -1), Cv = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M2.992 21A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992ZM20 15V5H4v14L14 9l6 6Zm0 2.828l-6-6L6.828 19H20v-1.172ZM8 11a2 2 0 1 1 0-4a2 2 0 0 1 0 4Z"
}, null, -1), _v = [
  $v,
  Cv
], Lv = /* @__PURE__ */ s("title", null, "Insert Code (CTRL+<)", -1), Vv = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "m8 18l-6-6l6-6l1.425 1.425l-4.6 4.6L9.4 16.6L8 18Zm8 0l-1.425-1.425l4.6-4.6L14.6 7.4L16 6l6 6l-6 6Z"
}, null, -1), Sv = [
  Lv,
  Vv
], Mv = /* @__PURE__ */ s("title", null, "H2 Heading (CTRL+H)", -1), Av = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M7 20V7H2V4h13v3h-5v13H7Zm9 0v-8h-3V9h9v3h-3v8h-3Z"
}, null, -1), Tv = [
  Mv,
  Av
], Fv = /* @__PURE__ */ s("title", null, "Numbered List (ALT+1)", -1), Iv = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M3 22v-1.5h2.5v-.75H4v-1.5h1.5v-.75H3V16h3q.425 0 .713.288T7 17v1q0 .425-.288.713T6 19q.425 0 .713.288T7 20v1q0 .425-.288.713T6 22H3Zm0-7v-2.75q0-.425.288-.713T4 11.25h1.5v-.75H3V9h3q.425 0 .713.288T7 10v1.75q0 .425-.288.713T6 12.75H4.5v.75H7V15H3Zm1.5-7V3.5H3V2h3v6H4.5ZM9 19v-2h12v2H9Zm0-6v-2h12v2H9Zm0-6V5h12v2H9Z"
}, null, -1), Dv = [
  Fv,
  Iv
], jv = /* @__PURE__ */ s("title", null, "Bulleted List (ALT+-)", -1), Ov = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M9 19v-2h12v2H9Zm0-6v-2h12v2H9Zm0-6V5h12v2H9ZM5 20q-.825 0-1.413-.588T3 18q0-.825.588-1.413T5 16q.825 0 1.413.588T7 18q0 .825-.588 1.413T5 20Zm0-6q-.825 0-1.413-.588T3 12q0-.825.588-1.413T5 10q.825 0 1.413.588T7 12q0 .825-.588 1.413T5 14Zm0-6q-.825 0-1.413-.588T3 6q0-.825.588-1.413T5 4q.825 0 1.413.588T7 6q0 .825-.588 1.413T5 8Z"
}, null, -1), Pv = [
  jv,
  Ov
], Bv = /* @__PURE__ */ s("title", null, "Strike Through (ALT+S)", -1), Rv = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z"
}, null, -1), Ev = [
  Bv,
  Rv
], Hv = /* @__PURE__ */ s("title", null, "Undo (CTRL+Z)", -1), zv = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88c3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"
}, null, -1), Nv = [
  Hv,
  zv
], Uv = /* @__PURE__ */ s("title", null, "Redo (CTRL+SHIFT+Z)", -1), qv = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8.002 8.002 0 0 1 7.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"
}, null, -1), Qv = [
  Uv,
  qv
], Kv = {
  key: 0,
  class: "p-2 flex flex-wrap gap-x-4"
}, Zv = ["href"], Gv = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5c0-2.21-1.79-4-4-4z"
}, null, -1), Wv = [
  Gv
], Jv = { class: "" }, Xv = ["name", "id", "label", "value", "rows", "disabled", "onKeydown"], Yv = ["id"], eh = ["id"], th = /* @__PURE__ */ ce({
  __name: "MarkdownInput",
  props: {
    status: null,
    id: null,
    inputClass: null,
    label: null,
    labelClass: null,
    help: null,
    placeholder: null,
    modelValue: null,
    counter: { type: Boolean },
    rows: null,
    errorMessages: null,
    lang: null,
    autoFocus: { type: Boolean },
    disabled: { type: Boolean },
    helpUrl: { default: "https://guides.github.com/features/mastering-markdown/" },
    hide: null
  },
  emits: ["update:modelValue", "close"],
  setup(e, { expose: t, emit: l }) {
    const n = e;
    let i = [], r = [], d = Ne("ApiState", void 0);
    const c = f(() => mt.call({ responseStatus: n.status ?? (d == null ? void 0 : d.error.value) }, n.id)), h = f(() => n.label ?? He(st(n.id))), m = "bold,italics,link,image,blockquote,code,heading,orderedList,unorderedList,strikethrough,undo,redo,help".split(","), y = f(() => n.hide ? wt(m, n.hide) : wt(m, []));
    function b(C) {
      return y.value[C];
    }
    const p = f(() => ["shadow-sm font-mono" + nt.base.replace("rounded-md", ""), c.value ? "text-red-900 focus:ring-red-500 focus:border-red-500 border-red-300" : "text-gray-900 " + nt.valid, n.inputClass]), v = "w-5 h-5 cursor-pointer select-none text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400", g = A();
    t({ props: n, textarea: g, updateModelValue: O, selection: ee, hasSelection: N, selectionInfo: P, insert: F, replace: z });
    function O(C) {
      l("update:modelValue", C);
    }
    function N() {
      return g.value.selectionStart !== g.value.selectionEnd;
    }
    function ee() {
      const C = g.value;
      return C.value.substring(C.selectionStart, C.selectionEnd) || "";
    }
    function P() {
      const C = g.value, L = C.value, B = C.selectionStart, fe = L.substring(B, C.selectionEnd) || "", I = L.substring(0, B), V = I.lastIndexOf(`
`);
      return {
        value: L,
        sel: fe,
        selPos: B,
        beforeSel: I,
        afterSel: L.substring(B),
        prevCRPos: V,
        beforeCR: V >= 0 ? I.substring(0, V + 1) : "",
        afterCR: V >= 0 ? I.substring(V + 1) : ""
      };
    }
    function z({ value: C, selectionStart: L, selectionEnd: B }) {
      B == null && (B = L), O(C), xt(() => {
        g.value.focus(), g.value.setSelectionRange(L, B);
      });
    }
    function F(C, L, B = "", { selectionAtEnd: fe, offsetStart: I, offsetEnd: V, filterValue: oe, filterSelection: Le } = {}) {
      const de = g.value;
      let ue = de.value, _ = de.selectionEnd;
      i.push({ value: ue, selectionStart: de.selectionStart, selectionEnd: de.selectionEnd }), r = [];
      const ie = de.selectionStart, xe = de.selectionEnd;
      let Ve = ue.substring(0, ie), he = ue.substring(xe);
      const De = C && Ve.endsWith(C) && he.startsWith(L);
      if (ie == xe) {
        if (De ? (ue = Ve.substring(0, Ve.length - C.length) + he.substring(L.length), _ += -L.length) : (ue = Ve + C + B + L + he, _ += C.length, I = 0, V = (B == null ? void 0 : B.length) || 0, fe && (_ += V, V = 0)), oe) {
          var H = { pos: _ };
          ue = oe(ue, H), _ = H.pos;
        }
      } else {
        var re = ue.substring(ie, xe);
        Le && (re = Le(re)), De ? (ue = Ve.substring(0, Ve.length - C.length) + re + he.substring(L.length), I = -re.length - C.length, V = re.length) : (ue = Ve + C + re + L + he, I ? _ += (C + L).length : (_ = ie, I = C.length, V = re.length));
      }
      O(ue), xt(() => {
        de.focus(), I = _ + (I || 0), V = (I || 0) + (V || 0), de.setSelectionRange(I, V);
      });
    }
    const W = () => F("**", "**", "bold"), j = () => F("_", "_", "italics"), S = () => F("~~", "~~", "strikethrough"), U = () => F("[", "](https://)", "", { offsetStart: -9, offsetEnd: 8 }), te = () => F(`
> `, `
`, "Blockquote", {}), R = () => F("![](", ")");
    function J(C) {
      const L = ee();
      if (L && !C.shiftKey)
        F("`", "`", "code");
      else {
        const B = n.lang || "js";
        L.indexOf(`
`) === -1 ? F("\n```" + B + `
`, "\n```\n", "// code") : F("```" + B + `
`, "```\n", "");
      }
    }
    function Y() {
      if (N()) {
        let { sel: C, selPos: L, beforeSel: B, afterSel: fe, prevCRPos: I, beforeCR: V, afterCR: oe } = P();
        if (C.indexOf(`
`) === -1)
          F(`
 1. `, `
`);
        else if (!C.startsWith(" 1. ")) {
          let ue = 1;
          F("", "", " - ", {
            selectionAtEnd: !0,
            filterSelection: (_) => " 1. " + _.replace(/\n$/, "").replace(/\n/g, (ie) => `
 ${++ue}. `) + `
`
          });
        } else
          F("", "", "", {
            filterValue: (ue, _) => {
              if (I >= 0) {
                let ie = oe.replace(/^ - /, "");
                B = V + ie, _.pos -= oe.length - ie.length;
              }
              return B + fe;
            },
            filterSelection: (ue) => ue.replace(/^ 1. /g, "").replace(/\n \d+. /g, `
`)
          });
      } else
        F(`
 1. `, `
`, "List Item", { offsetStart: -10, offsetEnd: 9 });
    }
    function G() {
      if (N()) {
        let { sel: C, selPos: L, beforeSel: B, afterSel: fe, prevCRPos: I, beforeCR: V, afterCR: oe } = P();
        C.indexOf(`
`) === -1 ? F(`
 - `, `
`) : !C.startsWith(" - ") ? F("", "", " - ", {
          selectionAtEnd: !0,
          filterSelection: (ue) => " - " + ue.replace(/\n$/, "").replace(/\n/g, `
 - `) + `
`
        }) : F("", "", "", {
          filterValue: (ue, _) => {
            if (I >= 0) {
              let ie = oe.replace(/^ - /, "");
              B = V + ie, _.pos -= oe.length - ie.length;
            }
            return B + fe;
          },
          filterSelection: (ue) => ue.replace(/^ - /g, "").replace(/\n - /g, `
`)
        });
      } else
        F(`
 - `, `
`, "List Item", { offsetStart: -10, offsetEnd: 9 });
    }
    function M() {
      const C = ee(), L = C.indexOf(`
`) === -1;
      C ? L ? F(`
## `, `
`, "") : F("## ", "", "") : F(`
## `, `
`, "Heading", { offsetStart: -8, offsetEnd: 7 });
    }
    function le() {
      let { sel: C, selPos: L, beforeSel: B, afterSel: fe, prevCRPos: I, beforeCR: V, afterCR: oe } = P();
      !C.startsWith("//") && !oe.startsWith("//") ? C ? F("", "", "//", {
        selectionAtEnd: !0,
        filterSelection: (de) => "//" + de.replace(/\n$/, "").replace(/\n/g, `
//`) + `
`
      }) : z({
        value: V + "//" + oe + fe,
        selectionStart: L + 2
      }) : F("", "", "", {
        filterValue: (de, ue) => {
          if (I >= 0) {
            let _ = oe.replace(/^\/\//, "");
            B = V + _, ue.pos -= oe.length - _.length;
          }
          return B + fe;
        },
        filterSelection: (de) => de.replace(/^\/\//g, "").replace(/\n\/\//g, `
`)
      });
    }
    const x = () => F(`/*
`, `*/
`, "");
    function K() {
      if (i.length === 0)
        return !1;
      const C = g.value, L = i.pop();
      return r.push({ value: C.value, selectionStart: C.selectionStart, selectionEnd: C.selectionEnd }), z(L), !0;
    }
    function E() {
      if (r.length === 0)
        return !1;
      const C = g.value, L = r.pop();
      return i.push({ value: C.value, selectionStart: C.selectionStart, selectionEnd: C.selectionEnd }), z(L), !0;
    }
    const q = () => null;
    return tt(() => {
      i = [], r = [];
      const C = g.value;
      C.onkeydown = (L) => {
        if (L.key === "Escape" || L.keyCode === 27) {
          l("close");
          return;
        }
        const B = String.fromCharCode(L.keyCode).toLowerCase();
        B === "	" ? (!L.shiftKey ? F("", "", "    ", {
          selectionAtEnd: !0,
          filterSelection: (I) => "    " + I.replace(/\n$/, "").replace(/\n/g, `
    `) + `
`
        }) : F("", "", "", {
          filterValue: (I, V) => {
            let { selPos: oe, beforeSel: Le, afterSel: de, prevCRPos: ue, beforeCR: _, afterCR: ie } = P();
            if (ue >= 0) {
              let xe = ie.replace(/\t/g, "    ").replace(/^ ? ? ? ?/, "");
              Le = _ + xe, V.pos -= ie.length - xe.length;
            }
            return Le + de;
          },
          filterSelection: (I) => I.replace(/\t/g, "    ").replace(/^ ? ? ? ?/g, "").replace(/\n    /g, `
`)
        }), L.preventDefault()) : L.ctrlKey ? B === "z" ? L.shiftKey ? E() && L.preventDefault() : K() && L.preventDefault() : B === "b" && !L.shiftKey ? (W(), L.preventDefault()) : B === "h" && !L.shiftKey ? (M(), L.preventDefault()) : B === "i" && !L.shiftKey ? (j(), L.preventDefault()) : B === "q" && !L.shiftKey ? (te(), L.preventDefault()) : B === "k" ? L.shiftKey ? (R(), L.preventDefault()) : (U(), L.preventDefault()) : B === "," || L.key === "<" || L.key === ">" || L.keyCode === 188 ? (J(L), L.preventDefault()) : B === "/" || L.key === "/" ? (le(), L.preventDefault()) : (B === "?" || L.key === "?") && L.shiftKey && (x(), L.preventDefault()) : L.altKey && (L.key === "1" || L.key === "0" ? (Y(), L.preventDefault()) : L.key === "-" ? (G(), L.preventDefault()) : L.key === "s" && (S(), L.preventDefault()));
      };
    }), (C, L) => {
      var B;
      return a(), u("div", null, [
        Z(C.$slots, "header", Me({
          inputElement: g.value,
          id: e.id,
          modelValue: e.modelValue,
          status: e.status
        }, C.$attrs)),
        o(h) ? (a(), u("label", {
          key: 0,
          for: e.id,
          class: w(`mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
        }, T(o(h)), 11, rv)) : k("", !0),
        e.disabled ? k("", !0) : (a(), u("div", uv, [
          s("div", dv, [
            b("bold") ? (a(), u("svg", {
              key: 0,
              class: w(v),
              onClick: W,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, mv)) : k("", !0),
            b("italics") ? (a(), u("svg", {
              key: 1,
              class: w(v),
              onClick: j,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, gv)) : k("", !0),
            b("link") ? (a(), u("svg", {
              key: 2,
              class: w(v),
              onClick: U,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, bv)) : k("", !0),
            b("blockquote") ? (a(), u("svg", {
              key: 3,
              class: w(v),
              onClick: te,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, kv)) : k("", !0),
            b("image") ? (a(), u("svg", {
              key: 4,
              class: w(v),
              onClick: R,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, _v)) : k("", !0),
            b("code") ? (a(), u("svg", {
              key: 5,
              class: w(v),
              onClick: J,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, Sv)) : k("", !0),
            b("heading") ? (a(), u("svg", {
              key: 6,
              class: w(v),
              onClick: M,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, Tv)) : k("", !0),
            b("orderedList") ? (a(), u("svg", {
              key: 7,
              class: w(v),
              icon: "",
              onClick: Y,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, Dv)) : k("", !0),
            b("unorderedList") ? (a(), u("svg", {
              key: 8,
              class: w(v),
              onClick: G,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, Pv)) : k("", !0),
            b("strikethrough") ? (a(), u("svg", {
              key: 9,
              class: w(v),
              onClick: S,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, Ev)) : k("", !0),
            b("undo") ? (a(), u("svg", {
              key: 10,
              class: w(v),
              onClick: K,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, Nv)) : k("", !0),
            b("redo") ? (a(), u("svg", {
              key: 11,
              class: w(v),
              onClick: E,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, Qv)) : k("", !0),
            Z(C.$slots, "toolbarbuttons", {
              instance: (B = Be()) == null ? void 0 : B.exposed
            })
          ]),
          b("help") && e.helpUrl ? (a(), u("div", Kv, [
            s("a", {
              title: "formatting help",
              target: "_blank",
              href: e.helpUrl,
              tabindex: "-1"
            }, [
              (a(), u("svg", {
                class: w(v),
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
              }, Wv))
            ], 8, Zv)
          ])) : k("", !0)
        ])),
        s("div", Jv, [
          s("textarea", {
            ref_key: "txt",
            ref: g,
            name: e.id,
            id: e.id,
            class: w(o(p)),
            label: e.label,
            value: e.modelValue,
            rows: e.rows || 6,
            disabled: e.disabled,
            onInput: L[0] || (L[0] = (fe) => {
              var I;
              return O(((I = fe.target) == null ? void 0 : I.value) || "");
            }),
            onKeydown: Kn(q, ["tab"])
          }, null, 42, Xv)
        ]),
        o(c) ? (a(), u("p", {
          key: 2,
          class: "mt-2 text-sm text-red-500",
          id: `${e.id}-error`
        }, T(o(c)), 9, Yv)) : e.help ? (a(), u("p", {
          key: 3,
          class: "mt-2 text-sm text-gray-500",
          id: `${e.id}-description`
        }, T(e.help), 9, eh)) : k("", !0),
        Z(C.$slots, "footer", Me({
          inputElement: g.value,
          id: e.id,
          modelValue: e.modelValue,
          status: e.status
        }, C.$attrs))
      ]);
    };
  }
}), lh = {
  key: 0,
  class: "relative z-10 lg:hidden",
  role: "dialog",
  "aria-modal": "true"
}, nh = { class: "fixed inset-0 flex" }, sh = /* @__PURE__ */ s("span", { class: "sr-only" }, "Close sidebar", -1), oh = /* @__PURE__ */ s("svg", {
  class: "h-6 w-6 text-white",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), ah = [
  sh,
  oh
], ih = { class: "flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2" }, rh = { class: "hidden lg:fixed lg:inset-y-0 lg:z-10 lg:flex lg:w-72 lg:flex-col" }, uh = { class: "flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6" }, dh = {
  class: /* @__PURE__ */ w(["sticky top-0 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden"])
}, ch = /* @__PURE__ */ s("span", { class: "sr-only" }, "Open sidebar", -1), fh = /* @__PURE__ */ s("svg", {
  class: "h-6 w-6",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
  })
], -1), mh = [
  ch,
  fh
], vh = /* @__PURE__ */ ce({
  __name: "SidebarLayout",
  setup(e, { expose: t }) {
    const { transition: l } = ss(), n = A(!0), i = A(""), r = {
      entering: { cls: "transition-opacity ease-linear duration-300", from: "opacity-0", to: "opacity-100" },
      leaving: { cls: "transition-opacity ease-linear duration-300", from: "opacity-100", to: "opacity-0" }
    }, d = A(""), c = {
      entering: { cls: "transition ease-in-out duration-300 transform", from: "-translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transition ease-in-out duration-300 transform", from: "translate-x-0", to: "-translate-x-full" }
    }, h = A(""), m = {
      entering: { cls: "ease-in-out duration-300", from: "opacity-0", to: "opacity-100" },
      leaving: { cls: "ease-in-out duration-300", from: "opacity-100", to: "opacity-0" }
    };
    function y(v) {
      l(r, i, v), l(c, d, v), l(m, h, v), setTimeout(() => n.value = v, 300);
    }
    function b() {
      y(!0);
    }
    function p() {
      y(!1);
    }
    return t({ show: b, hide: p, toggle: y }), (v, g) => (a(), u("div", null, [
      n.value ? (a(), u("div", lh, [
        s("div", {
          class: w(["fixed inset-0 bg-gray-900/80", i.value])
        }, null, 2),
        s("div", nh, [
          s("div", {
            class: w(["relative mr-16 flex w-full max-w-xs flex-1", d.value])
          }, [
            s("div", {
              class: w(["absolute left-full top-0 flex w-16 justify-center pt-5", h.value])
            }, [
              s("button", {
                type: "button",
                onClick: p,
                class: "-m-2.5 p-2.5"
              }, ah)
            ], 2),
            s("div", ih, [
              Z(v.$slots, "default")
            ])
          ], 2)
        ])
      ])) : k("", !0),
      s("div", rh, [
        s("div", uh, [
          Z(v.$slots, "default")
        ])
      ]),
      s("div", dh, [
        s("button", {
          type: "button",
          onClick: b,
          class: "-m-2.5 p-2.5 text-gray-700 lg:hidden"
        }, mh),
        Z(v.$slots, "mobiletitlebar")
      ])
    ]));
  }
}), hh = {
  Alert: Oo,
  AlertSuccess: Zo,
  ErrorSummary: Yo,
  InputDescription: ta,
  Icon: Es,
  Loading: Za,
  OutlineButton: Ja,
  PrimaryButton: ei,
  SecondaryButton: ni,
  TextLink: oi,
  Breadcrumbs: ci,
  Breadcrumb: gi,
  NavList: bi,
  NavListItem: Ai,
  AutoQueryGrid: Yu,
  SettingsIcons: md,
  FilterViews: _n,
  FilterColumn: Cn,
  QueryPrefs: Ln,
  EnsureAccess: zs,
  EnsureAccessDialog: vd,
  TextInput: Cd,
  TextareaInput: Td,
  SelectInput: Pd,
  CheckboxInput: qd,
  TagInput: vc,
  FileInput: Pc,
  Autocomplete: Yc,
  Combobox: l0,
  DynamicInput: n0,
  LookupInput: b0,
  AutoFormFields: w0,
  AutoForm: N0,
  AutoCreateForm: mf,
  AutoEditForm: Of,
  ConfirmDelete: Rf,
  FormLoading: qf,
  DataGrid: Wf,
  CellFormat: Jf,
  PreviewFormat: n1,
  HtmlFormat: r1,
  CloseButton: m1,
  SlideOver: V1,
  ModalDialog: D1,
  ModalLookup: Vm,
  Tabs: Om,
  DarkModeToggle: Hm,
  SignIn: iv,
  MarkdownInput: th,
  SidebarLayout: vh
}, El = hh, kh = {
  install(e) {
    Object.keys(El).forEach((l) => {
      e.component(l, El[l]);
    });
    function t(l) {
      const i = Object.keys(l).filter((r) => l[r]).map((r) => `${encodeURIComponent(r)}=${encodeURIComponent(l[r])}`).join("&");
      return i ? "?" + i : "./";
    }
    e.directive("href", function(l, n) {
      l.href = t(n.value), l.onclick = (i) => {
        i.preventDefault(), history.pushState(n.value, "", t(n.value));
      };
    });
  },
  component(e, t) {
    return e ? t ? ne.components[e] = t : ne.components[e] || El[e] || null : null;
  }
};
export {
  xh as css,
  kh as default,
  $n as useAuth,
  Tl as useClient,
  St as useConfig,
  bh as useFiles,
  wh as useFormatters,
  at as useMetadata,
  ss as useUtils
};
