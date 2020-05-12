! function (t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("index.js", [], e) : "object" == typeof exports ? exports["index.js"] = e() : t["index.js"] = e()
}(window, (function () {
  return function (t) {
    var e = {};

    function n(r) {
      if (e[r]) return e[r].exports;
      var i = e[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    return n.m = t, n.c = e, n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: r
      })
    }, n.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      })
    }, n.t = function (t, e) {
      if (1 & e && (t = n(t)), 8 & e) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
          enumerable: !0,
          value: t
        }), 2 & e && "string" != typeof t)
        for (var i in t) n.d(r, i, function (e) {
          return t[e]
        }.bind(null, i));
      return r
    }, n.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default
      } : function () {
        return t
      };
      return n.d(e, "a", e), e
    }, n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 33)
  }([function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
      return r
    })), n.d(e, "b", (function () {
      return o
    })), n.d(e, "h", (function () {
      return s
    })), n.d(e, "i", (function () {
      return a
    })), n.d(e, "g", (function () {
      return u
    })), n.d(e, "c", (function () {
      return l
    })), n.d(e, "j", (function () {
      return c
    })), n.d(e, "f", (function () {
      return h
    })), n.d(e, "d", (function () {
      return p
    })), n.d(e, "e", (function () {
      return f
    })), n.d(e, "k", (function () {
      return g
    }));
    var r = 6371008.8,
      i = {
        meters: r,
        metres: r,
        millimeters: 1e3 * r,
        millimetres: 1e3 * r,
        centimeters: 100 * r,
        centimetres: 100 * r,
        kilometers: r / 1e3,
        kilometres: r / 1e3,
        miles: r / 1609.344,
        nauticalmiles: r / 1852,
        inches: 39.37 * r,
        yards: r / 1.0936,
        feet: 3.28084 * r,
        radians: 1,
        degrees: r / 111325
      };

    function o(t, e, n) {
      if (!f(n = n || {})) throw new Error("options is invalid");
      var r = n.bbox,
        i = n.id;
      if (void 0 === t) throw new Error("geometry is required");
      if (e && e.constructor !== Object) throw new Error("properties must be an Object");
      r && g(r), i && d(i);
      var o = {
        type: "Feature"
      };
      return i && (o.id = i), r && (o.bbox = r), o.properties = e || {}, o.geometry = t, o
    }

    function s(t, e, n) {
      if (!t) throw new Error("coordinates is required");
      if (!Array.isArray(t)) throw new Error("coordinates must be an Array");
      if (t.length < 2) throw new Error("coordinates must be at least 2 numbers long");
      if (!p(t[0]) || !p(t[1])) throw new Error("coordinates must contain numbers");
      return o({
        type: "Point",
        coordinates: t
      }, e, n)
    }

    function a(t, e, n) {
      if (!t) throw new Error("coordinates is required");
      for (var r = 0; r < t.length; r++) {
        var i = t[r];
        if (i.length < 4) throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");
        for (var s = 0; s < i[i.length - 1].length; s++) {
          if (0 === r && 0 === s && !p(i[0][0]) || !p(i[0][1])) throw new Error("coordinates must contain numbers");
          if (i[i.length - 1][s] !== i[0][s]) throw new Error("First and last Position are not equivalent.")
        }
      }
      return o({
        type: "Polygon",
        coordinates: t
      }, e, n)
    }

    function u(t, e, n) {
      if (!t) throw new Error("coordinates is required");
      if (t.length < 2) throw new Error("coordinates must be an array of two or more positions");
      if (!p(t[0][1]) || !p(t[0][1])) throw new Error("coordinates must contain numbers");
      return o({
        type: "LineString",
        coordinates: t
      }, e, n)
    }

    function l(t, e) {
      if (!f(e = e || {})) throw new Error("options is invalid");
      var n = e.bbox,
        r = e.id;
      if (!t) throw new Error("No features passed");
      if (!Array.isArray(t)) throw new Error("features must be an Array");
      n && g(n), r && d(r);
      var i = {
        type: "FeatureCollection"
      };
      return r && (i.id = r), n && (i.bbox = n), i.features = t, i
    }

    function c(t, e) {
      if (null == t) throw new Error("radians is required");
      if (e && "string" != typeof e) throw new Error("units must be a string");
      var n = i[e || "kilometers"];
      if (!n) throw new Error(e + " units is invalid");
      return t * n
    }

    function h(t, e) {
      if (null == t) throw new Error("distance is required");
      if (e && "string" != typeof e) throw new Error("units must be a string");
      var n = i[e || "kilometers"];
      if (!n) throw new Error(e + " units is invalid");
      return t / n
    }

    function p(t) {
      return !isNaN(t) && null !== t && !Array.isArray(t)
    }

    function f(t) {
      return !!t && t.constructor === Object
    }

    function g(t) {
      if (!t) throw new Error("bbox is required");
      if (!Array.isArray(t)) throw new Error("bbox must be an Array");
      if (4 !== t.length && 6 !== t.length) throw new Error("bbox must be an Array of 4 or 6 numbers");
      t.forEach((function (t) {
        if (!p(t)) throw new Error("bbox must only contain numbers")
      }))
    }

    function d(t) {
      if (!t) throw new Error("id is required");
      if (-1 === ["string", "number"].indexOf(typeof t)) throw new Error("id must be a number or a string")
    }
  }, function (t, e) {
    const n = {
        kind: "null"
      },
      r = {
        kind: "number"
      },
      i = {
        kind: "string"
      },
      o = {
        kind: "boolean"
      },
      s = {
        kind: "color"
      },
      a = {
        kind: "object"
      },
      u = {
        kind: "value"
      };

    function l(t, e) {
      return {
        kind: "array",
        itemType: t,
        N: e
      }
    }

    function c(t) {
      if ("array" === t.kind) {
        const e = c(t.itemType);
        return "number" == typeof t.N ? `array<${e}, ${t.N}>` : "value" === t.itemType.kind ? "array" : `array<${e}>`
      }
      return t.kind
    }
    const h = [n, r, i, o, s, a, l(u)];
    t.exports = {
      NullType: n,
      NumberType: r,
      StringType: i,
      BooleanType: o,
      ColorType: s,
      ObjectType: a,
      ValueType: u,
      array: l,
      ErrorType: {
        kind: "error"
      },
      toString: c,
      checkSubtype: function t(e, n) {
        if ("error" === n.kind) return null;
        if ("array" === e.kind) {
          if ("array" === n.kind && !t(e.itemType, n.itemType) && ("number" != typeof e.N || e.N === n.N)) return null
        } else {
          if (e.kind === n.kind) return null;
          if ("value" === e.kind)
            for (const e of h)
              if (!t(e, n)) return null
        }
        return `Expected ${c(e)} but found ${c(n)} instead.`
      }
    }
  }, function (t, e, n) {
    "use strict";
    (function (e) {
      var r = n(44);
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
       * @license  MIT
       */
      function i(t, e) {
        if (t === e) return 0;
        for (var n = t.length, r = e.length, i = 0, o = Math.min(n, r); i < o; ++i)
          if (t[i] !== e[i]) {
            n = t[i], r = e[i];
            break
          } return n < r ? -1 : r < n ? 1 : 0
      }

      function o(t) {
        return e.Buffer && "function" == typeof e.Buffer.isBuffer ? e.Buffer.isBuffer(t) : !(null == t || !t._isBuffer)
      }
      var s = n(45),
        a = Object.prototype.hasOwnProperty,
        u = Array.prototype.slice,
        l = "foo" === function () {}.name;

      function c(t) {
        return Object.prototype.toString.call(t)
      }

      function h(t) {
        return !o(t) && ("function" == typeof e.ArrayBuffer && ("function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : !!t && (t instanceof DataView || !!(t.buffer && t.buffer instanceof ArrayBuffer))))
      }
      var p = t.exports = m,
        f = /\s*function\s+([^\(\s]*)\s*/;

      function g(t) {
        if (s.isFunction(t)) {
          if (l) return t.name;
          var e = t.toString().match(f);
          return e && e[1]
        }
      }

      function d(t, e) {
        return "string" == typeof t ? t.length < e ? t : t.slice(0, e) : t
      }

      function y(t) {
        if (l || !s.isFunction(t)) return s.inspect(t);
        var e = g(t);
        return "[Function" + (e ? ": " + e : "") + "]"
      }

      function _(t, e, n, r, i) {
        throw new p.AssertionError({
          message: n,
          actual: t,
          expected: e,
          operator: r,
          stackStartFunction: i
        })
      }

      function m(t, e) {
        t || _(t, !0, e, "==", p.ok)
      }

      function v(t, e, n, r) {
        if (t === e) return !0;
        if (o(t) && o(e)) return 0 === i(t, e);
        if (s.isDate(t) && s.isDate(e)) return t.getTime() === e.getTime();
        if (s.isRegExp(t) && s.isRegExp(e)) return t.source === e.source && t.global === e.global && t.multiline === e.multiline && t.lastIndex === e.lastIndex && t.ignoreCase === e.ignoreCase;
        if (null !== t && "object" == typeof t || null !== e && "object" == typeof e) {
          if (h(t) && h(e) && c(t) === c(e) && !(t instanceof Float32Array || t instanceof Float64Array)) return 0 === i(new Uint8Array(t.buffer), new Uint8Array(e.buffer));
          if (o(t) !== o(e)) return !1;
          var a = (r = r || {
            actual: [],
            expected: []
          }).actual.indexOf(t);
          return -1 !== a && a === r.expected.indexOf(e) || (r.actual.push(t), r.expected.push(e), function (t, e, n, r) {
            if (null == t || null == e) return !1;
            if (s.isPrimitive(t) || s.isPrimitive(e)) return t === e;
            if (n && Object.getPrototypeOf(t) !== Object.getPrototypeOf(e)) return !1;
            var i = x(t),
              o = x(e);
            if (i && !o || !i && o) return !1;
            if (i) return t = u.call(t), e = u.call(e), v(t, e, n);
            var a, l, c = I(t),
              h = I(e);
            if (c.length !== h.length) return !1;
            for (c.sort(), h.sort(), l = c.length - 1; l >= 0; l--)
              if (c[l] !== h[l]) return !1;
            for (l = c.length - 1; l >= 0; l--)
              if (a = c[l], !v(t[a], e[a], n, r)) return !1;
            return !0
          }(t, e, n, r))
        }
        return n ? t === e : t == e
      }

      function x(t) {
        return "[object Arguments]" == Object.prototype.toString.call(t)
      }

      function E(t, e) {
        if (!t || !e) return !1;
        if ("[object RegExp]" == Object.prototype.toString.call(e)) return e.test(t);
        try {
          if (t instanceof e) return !0
        } catch (t) {}
        return !Error.isPrototypeOf(e) && !0 === e.call({}, t)
      }

      function b(t, e, n, r) {
        var i;
        if ("function" != typeof e) throw new TypeError('"block" argument must be a function');
        "string" == typeof n && (r = n, n = null), i = function (t) {
          var e;
          try {
            t()
          } catch (t) {
            e = t
          }
          return e
        }(e), r = (n && n.name ? " (" + n.name + ")." : ".") + (r ? " " + r : "."), t && !i && _(i, n, "Missing expected exception" + r);
        var o = "string" == typeof r,
          a = !t && i && !n;
        if ((!t && s.isError(i) && o && E(i, n) || a) && _(i, n, "Got unwanted exception" + r), t && i && n && !E(i, n) || !t && i) throw i
      }
      p.AssertionError = function (t) {
        this.name = "AssertionError", this.actual = t.actual, this.expected = t.expected, this.operator = t.operator, t.message ? (this.message = t.message, this.generatedMessage = !1) : (this.message = function (t) {
          return d(y(t.actual), 128) + " " + t.operator + " " + d(y(t.expected), 128)
        }(this), this.generatedMessage = !0);
        var e = t.stackStartFunction || _;
        if (Error.captureStackTrace) Error.captureStackTrace(this, e);
        else {
          var n = new Error;
          if (n.stack) {
            var r = n.stack,
              i = g(e),
              o = r.indexOf("\n" + i);
            if (o >= 0) {
              var s = r.indexOf("\n", o + 1);
              r = r.substring(s + 1)
            }
            this.stack = r
          }
        }
      }, s.inherits(p.AssertionError, Error), p.fail = _, p.ok = m, p.equal = function (t, e, n) {
        t != e && _(t, e, n, "==", p.equal)
      }, p.notEqual = function (t, e, n) {
        t == e && _(t, e, n, "!=", p.notEqual)
      }, p.deepEqual = function (t, e, n) {
        v(t, e, !1) || _(t, e, n, "deepEqual", p.deepEqual)
      }, p.deepStrictEqual = function (t, e, n) {
        v(t, e, !0) || _(t, e, n, "deepStrictEqual", p.deepStrictEqual)
      }, p.notDeepEqual = function (t, e, n) {
        v(t, e, !1) && _(t, e, n, "notDeepEqual", p.notDeepEqual)
      }, p.notDeepStrictEqual = function t(e, n, r) {
        v(e, n, !0) && _(e, n, r, "notDeepStrictEqual", t)
      }, p.strictEqual = function (t, e, n) {
        t !== e && _(t, e, n, "===", p.strictEqual)
      }, p.notStrictEqual = function (t, e, n) {
        t === e && _(t, e, n, "!==", p.notStrictEqual)
      }, p.throws = function (t, e, n) {
        b(!0, t, e, n)
      }, p.doesNotThrow = function (t, e, n) {
        b(!1, t, e, n)
      }, p.ifError = function (t) {
        if (t) throw t
      }, p.strict = r((function t(e, n) {
        e || _(e, !0, n, "==", t)
      }), p, {
        equal: p.strictEqual,
        deepEqual: p.deepStrictEqual,
        notEqual: p.notStrictEqual,
        notDeepEqual: p.notDeepStrictEqual
      }), p.strict.strict = p.strict;
      var I = Object.keys || function (t) {
        var e = [];
        for (var n in t) a.call(t, n) && e.push(n);
        return e
      }
    }).call(this, n(43))
  }, function (t, e, n) {
    const r = n(2),
      i = n(6),
      {
        NullType: o,
        NumberType: s,
        StringType: a,
        BooleanType: u,
        ColorType: l,
        ObjectType: c,
        ValueType: h,
        array: p
      } = n(1);
    t.exports = {
      Color: i,
      validateRGBA: function (t, e, n, r) {
        if (!("number" == typeof t && t >= 0 && t <= 255 && "number" == typeof e && e >= 0 && e <= 255 && "number" == typeof n && n >= 0 && n <= 255)) {
          return `Invalid rgba value [${("number"==typeof r?[t,e,n,r]:[t,e,n]).join(", ")}]: 'r', 'g', and 'b' must be between 0 and 255.`
        }
        return void 0 === r || "number" == typeof r && r >= 0 && r <= 1 ? null : `Invalid rgba value [${[t,e,n,r].join(", ")}]: 'a' must be between 0 and 1.`
      },
      isValue: function t(e) {
        if (null === e) return !0;
        if ("string" == typeof e) return !0;
        if ("boolean" == typeof e) return !0;
        if ("number" == typeof e) return !0;
        if (e instanceof i) return !0;
        if (Array.isArray(e)) {
          for (const n of e)
            if (!t(n)) return !1;
          return !0
        }
        if ("object" == typeof e) {
          for (const n in e)
            if (!t(e[n])) return !1;
          return !0
        }
        return !1
      },
      typeOf: function t(e) {
        if (null === e) return o;
        if ("string" == typeof e) return a;
        if ("boolean" == typeof e) return u;
        if ("number" == typeof e) return s;
        if (e instanceof i) return l;
        if (Array.isArray(e)) {
          const n = e.length;
          let r;
          for (const n of e) {
            const e = t(n);
            if (r) {
              if (r === e) continue;
              r = h;
              break
            }
            r = e
          }
          return p(r || h, n)
        }
        return r("object" == typeof e), c
      }
    }
  }, function (t, e, n) {
    ! function (t) {
      "use strict";

      function e() {}

      function n(t) {
        this.message = t || ""
      }

      function r(t) {
        this.message = t || ""
      }

      function i(t) {
        this.message = t || ""
      }

      function o() {}

      function s(t) {
        return null === t ? Dt : t.color
      }

      function a(t) {
        return null === t ? null : t.parent
      }

      function u(t, e) {
        null !== t && (t.color = e)
      }

      function l(t) {
        return null === t ? null : t.left
      }

      function c(t) {
        return null === t ? null : t.right
      }

      function h() {
        this.root_ = null, this.size_ = 0
      }

      function p() {}

      function f() {
        this.array_ = [], arguments[0] instanceof xt && this.addAll(arguments[0])
      }

      function g() {}

      function d(t) {
        this.message = t || ""
      }

      function y() {
        this.array_ = []
      }
      "fill" in Array.prototype || Object.defineProperty(Array.prototype, "fill", {
        configurable: !0,
        value: function (t) {
          if (null == this) throw new TypeError(this + " is not an object");
          var e = Object(this),
            n = Math.max(Math.min(e.length, 9007199254740991), 0) || 0,
            r = 1 in arguments && parseInt(Number(arguments[1]), 10) || 0;
          r = r < 0 ? Math.max(n + r, 0) : Math.min(r, n);
          var i = 2 in arguments && void 0 !== arguments[2] ? parseInt(Number(arguments[2]), 10) || 0 : n;
          for (i = i < 0 ? Math.max(n + arguments[2], 0) : Math.min(i, n); r < i;) e[r] = t, ++r;
          return e
        },
        writable: !0
      }), Number.isFinite = Number.isFinite || function (t) {
        return "number" == typeof t && isFinite(t)
      }, Number.isInteger = Number.isInteger || function (t) {
        return "number" == typeof t && isFinite(t) && Math.floor(t) === t
      }, Number.parseFloat = Number.parseFloat || parseFloat, Number.isNaN = Number.isNaN || function (t) {
        return t != t
      }, Math.trunc = Math.trunc || function (t) {
        return t < 0 ? Math.ceil(t) : Math.floor(t)
      };
      var _ = function () {};
      _.prototype.interfaces_ = function () {
        return []
      }, _.prototype.getClass = function () {
        return _
      }, _.prototype.equalsWithTolerance = function (t, e, n) {
        return Math.abs(t - e) <= n
      };
      var m = function (t) {
          function e(e) {
            t.call(this, e), this.name = "IllegalArgumentException", this.message = e, this.stack = (new t).stack
          }
          return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
        }(Error),
        v = function () {},
        x = {
          MAX_VALUE: {
            configurable: !0
          }
        };
      v.isNaN = function (t) {
        return Number.isNaN(t)
      }, v.doubleToLongBits = function (t) {
        return t
      }, v.longBitsToDouble = function (t) {
        return t
      }, v.isInfinite = function (t) {
        return !Number.isFinite(t)
      }, x.MAX_VALUE.get = function () {
        return Number.MAX_VALUE
      }, Object.defineProperties(v, x);
      var E = function () {},
        b = function () {},
        I = function () {},
        N = function t() {
          if (this.x = null, this.y = null, this.z = null, 0 === arguments.length) this.x = 0, this.y = 0, this.z = t.NULL_ORDINATE;
          else if (1 === arguments.length) {
            var e = arguments[0];
            this.x = e.x, this.y = e.y, this.z = e.z
          } else 2 === arguments.length ? (this.x = arguments[0], this.y = arguments[1], this.z = t.NULL_ORDINATE) : 3 === arguments.length && (this.x = arguments[0], this.y = arguments[1], this.z = arguments[2])
        },
        w = {
          DimensionalComparator: {
            configurable: !0
          },
          serialVersionUID: {
            configurable: !0
          },
          NULL_ORDINATE: {
            configurable: !0
          },
          X: {
            configurable: !0
          },
          Y: {
            configurable: !0
          },
          Z: {
            configurable: !0
          }
        };
      N.prototype.setOrdinate = function (t, e) {
        switch (t) {
          case N.X:
            this.x = e;
            break;
          case N.Y:
            this.y = e;
            break;
          case N.Z:
            this.z = e;
            break;
          default:
            throw new m("Invalid ordinate index: " + t)
        }
      }, N.prototype.equals2D = function () {
        if (1 === arguments.length) {
          var t = arguments[0];
          return this.x === t.x && this.y === t.y
        }
        if (2 === arguments.length) {
          var e = arguments[0],
            n = arguments[1];
          return !!_.equalsWithTolerance(this.x, e.x, n) && !!_.equalsWithTolerance(this.y, e.y, n)
        }
      }, N.prototype.getOrdinate = function (t) {
        switch (t) {
          case N.X:
            return this.x;
          case N.Y:
            return this.y;
          case N.Z:
            return this.z
        }
        throw new m("Invalid ordinate index: " + t)
      }, N.prototype.equals3D = function (t) {
        return this.x === t.x && this.y === t.y && (this.z === t.z || v.isNaN(this.z)) && v.isNaN(t.z)
      }, N.prototype.equals = function (t) {
        return t instanceof N && this.equals2D(t)
      }, N.prototype.equalInZ = function (t, e) {
        return _.equalsWithTolerance(this.z, t.z, e)
      }, N.prototype.compareTo = function (t) {
        var e = t;
        return this.x < e.x ? -1 : this.x > e.x ? 1 : this.y < e.y ? -1 : this.y > e.y ? 1 : 0
      }, N.prototype.clone = function () {}, N.prototype.copy = function () {
        return new N(this)
      }, N.prototype.toString = function () {
        return "(" + this.x + ", " + this.y + ", " + this.z + ")"
      }, N.prototype.distance3D = function (t) {
        var e = this.x - t.x,
          n = this.y - t.y,
          r = this.z - t.z;
        return Math.sqrt(e * e + n * n + r * r)
      }, N.prototype.distance = function (t) {
        var e = this.x - t.x,
          n = this.y - t.y;
        return Math.sqrt(e * e + n * n)
      }, N.prototype.hashCode = function () {
        var t = 17;
        return 37 * (t = 37 * t + N.hashCode(this.x)) + N.hashCode(this.y)
      }, N.prototype.setCoordinate = function (t) {
        this.x = t.x, this.y = t.y, this.z = t.z
      }, N.prototype.interfaces_ = function () {
        return [E, b, e]
      }, N.prototype.getClass = function () {
        return N
      }, N.hashCode = function () {
        if (1 === arguments.length) {
          var t = arguments[0],
            e = v.doubleToLongBits(t);
          return Math.trunc((e ^ e) >>> 32)
        }
      }, w.DimensionalComparator.get = function () {
        return C
      }, w.serialVersionUID.get = function () {
        return 0x5cbf2c235c7e5800
      }, w.NULL_ORDINATE.get = function () {
        return v.NaN
      }, w.X.get = function () {
        return 0
      }, w.Y.get = function () {
        return 1
      }, w.Z.get = function () {
        return 2
      }, Object.defineProperties(N, w);
      var C = function (t) {
        if (this._dimensionsToTest = 2, 0 === arguments.length);
        else if (1 === arguments.length) {
          var e = arguments[0];
          if (2 !== e && 3 !== e) throw new m("only 2 or 3 dimensions may be specified");
          this._dimensionsToTest = e
        }
      };
      C.prototype.compare = function (t, e) {
        var n = t,
          r = e,
          i = C.compare(n.x, r.x);
        if (0 !== i) return i;
        var o = C.compare(n.y, r.y);
        return 0 !== o ? o : this._dimensionsToTest <= 2 ? 0 : C.compare(n.z, r.z)
      }, C.prototype.interfaces_ = function () {
        return [I]
      }, C.prototype.getClass = function () {
        return C
      }, C.compare = function (t, e) {
        return t < e ? -1 : t > e ? 1 : v.isNaN(t) ? v.isNaN(e) ? 0 : -1 : v.isNaN(e) ? 1 : 0
      };
      var S = function () {};
      S.prototype.create = function () {}, S.prototype.interfaces_ = function () {
        return []
      }, S.prototype.getClass = function () {
        return S
      };
      var L = function () {},
        O = {
          INTERIOR: {
            configurable: !0
          },
          BOUNDARY: {
            configurable: !0
          },
          EXTERIOR: {
            configurable: !0
          },
          NONE: {
            configurable: !0
          }
        };
      L.prototype.interfaces_ = function () {
        return []
      }, L.prototype.getClass = function () {
        return L
      }, L.toLocationSymbol = function (t) {
        switch (t) {
          case L.EXTERIOR:
            return "e";
          case L.BOUNDARY:
            return "b";
          case L.INTERIOR:
            return "i";
          case L.NONE:
            return "-"
        }
        throw new m("Unknown location value: " + t)
      }, O.INTERIOR.get = function () {
        return 0
      }, O.BOUNDARY.get = function () {
        return 1
      }, O.EXTERIOR.get = function () {
        return 2
      }, O.NONE.get = function () {
        return -1
      }, Object.defineProperties(L, O);
      var T = function (t, e) {
          return t.interfaces_ && t.interfaces_().indexOf(e) > -1
        },
        M = function () {},
        P = {
          LOG_10: {
            configurable: !0
          }
        };
      M.prototype.interfaces_ = function () {
        return []
      }, M.prototype.getClass = function () {
        return M
      }, M.log10 = function (t) {
        var e = Math.log(t);
        return v.isInfinite(e) || v.isNaN(e) ? e : e / M.LOG_10
      }, M.min = function (t, e, n, r) {
        var i = t;
        return e < i && (i = e), n < i && (i = n), r < i && (i = r), i
      }, M.clamp = function () {
        if ("number" == typeof arguments[2] && "number" == typeof arguments[0] && "number" == typeof arguments[1]) {
          var t = arguments[0],
            e = arguments[1],
            n = arguments[2];
          return t < e ? e : t > n ? n : t
        }
        if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
          var r = arguments[0],
            i = arguments[1],
            o = arguments[2];
          return r < i ? i : r > o ? o : r
        }
      }, M.wrap = function (t, e) {
        return t < 0 ? e - -t % e : t % e
      }, M.max = function () {
        if (3 === arguments.length) {
          var t = arguments[0],
            e = arguments[1],
            n = arguments[2],
            r = t;
          return e > r && (r = e), n > r && (r = n), r
        }
        if (4 === arguments.length) {
          var i = arguments[0],
            o = arguments[1],
            s = arguments[2],
            a = arguments[3],
            u = i;
          return o > u && (u = o), s > u && (u = s), a > u && (u = a), u
        }
      }, M.average = function (t, e) {
        return (t + e) / 2
      }, P.LOG_10.get = function () {
        return Math.log(10)
      }, Object.defineProperties(M, P);
      var R = function (t) {
        this.str = t
      };
      R.prototype.append = function (t) {
        this.str += t
      }, R.prototype.setCharAt = function (t, e) {
        this.str = this.str.substr(0, t) + e + this.str.substr(t + 1)
      }, R.prototype.toString = function (t) {
        return this.str
      };
      var D = function (t) {
        this.value = t
      };
      D.prototype.intValue = function () {
        return this.value
      }, D.prototype.compareTo = function (t) {
        return this.value < t ? -1 : this.value > t ? 1 : 0
      }, D.isNaN = function (t) {
        return Number.isNaN(t)
      };
      var A = function () {};
      A.isWhitespace = function (t) {
        return t <= 32 && t >= 0 || 127 === t
      }, A.toUpperCase = function (t) {
        return t.toUpperCase()
      };
      var F = function t() {
          if (this._hi = 0, this._lo = 0, 0 === arguments.length) this.init(0);
          else if (1 === arguments.length) {
            if ("number" == typeof arguments[0]) {
              var e = arguments[0];
              this.init(e)
            } else if (arguments[0] instanceof t) {
              var n = arguments[0];
              this.init(n)
            } else if ("string" == typeof arguments[0]) {
              var r = arguments[0];
              t.call(this, t.parse(r))
            }
          } else if (2 === arguments.length) {
            var i = arguments[0],
              o = arguments[1];
            this.init(i, o)
          }
        },
        G = {
          PI: {
            configurable: !0
          },
          TWO_PI: {
            configurable: !0
          },
          PI_2: {
            configurable: !0
          },
          E: {
            configurable: !0
          },
          NaN: {
            configurable: !0
          },
          EPS: {
            configurable: !0
          },
          SPLIT: {
            configurable: !0
          },
          MAX_PRINT_DIGITS: {
            configurable: !0
          },
          TEN: {
            configurable: !0
          },
          ONE: {
            configurable: !0
          },
          SCI_NOT_EXPONENT_CHAR: {
            configurable: !0
          },
          SCI_NOT_ZERO: {
            configurable: !0
          }
        };
      F.prototype.le = function (t) {
        return (this._hi < t._hi || this._hi === t._hi) && this._lo <= t._lo
      }, F.prototype.extractSignificantDigits = function (t, e) {
        var n = this.abs(),
          r = F.magnitude(n._hi),
          i = F.TEN.pow(r);
        (n = n.divide(i)).gt(F.TEN) ? (n = n.divide(F.TEN), r += 1) : n.lt(F.ONE) && (n = n.multiply(F.TEN), r -= 1);
        for (var o = r + 1, s = new R, a = F.MAX_PRINT_DIGITS - 1, u = 0; u <= a; u++) {
          t && u === o && s.append(".");
          var l = Math.trunc(n._hi);
          if (l < 0) break;
          var c = !1,
            h = 0;
          l > 9 ? (c = !0, h = "9") : h = "0" + l, s.append(h), n = n.subtract(F.valueOf(l)).multiply(F.TEN), c && n.selfAdd(F.TEN);
          var p = !0,
            f = F.magnitude(n._hi);
          if (f < 0 && Math.abs(f) >= a - u && (p = !1), !p) break
        }
        return e[0] = r, s.toString()
      }, F.prototype.sqr = function () {
        return this.multiply(this)
      }, F.prototype.doubleValue = function () {
        return this._hi + this._lo
      }, F.prototype.subtract = function () {
        if (arguments[0] instanceof F) {
          var t = arguments[0];
          return this.add(t.negate())
        }
        if ("number" == typeof arguments[0]) {
          var e = arguments[0];
          return this.add(-e)
        }
      }, F.prototype.equals = function () {
        if (1 === arguments.length) {
          var t = arguments[0];
          return this._hi === t._hi && this._lo === t._lo
        }
      }, F.prototype.isZero = function () {
        return 0 === this._hi && 0 === this._lo
      }, F.prototype.selfSubtract = function () {
        if (arguments[0] instanceof F) {
          var t = arguments[0];
          return this.isNaN() ? this : this.selfAdd(-t._hi, -t._lo)
        }
        if ("number" == typeof arguments[0]) {
          var e = arguments[0];
          return this.isNaN() ? this : this.selfAdd(-e, 0)
        }
      }, F.prototype.getSpecialNumberString = function () {
        return this.isZero() ? "0.0" : this.isNaN() ? "NaN " : null
      }, F.prototype.min = function (t) {
        return this.le(t) ? this : t
      }, F.prototype.selfDivide = function () {
        if (1 === arguments.length) {
          if (arguments[0] instanceof F) {
            var t = arguments[0];
            return this.selfDivide(t._hi, t._lo)
          }
          if ("number" == typeof arguments[0]) {
            var e = arguments[0];
            return this.selfDivide(e, 0)
          }
        } else if (2 === arguments.length) {
          var n = arguments[0],
            r = arguments[1],
            i = null,
            o = null,
            s = null,
            a = null,
            u = null,
            l = null,
            c = null,
            h = null;
          return u = this._hi / n, h = (i = (l = F.SPLIT * u) - (i = l - u)) * (s = (h = F.SPLIT * n) - (s = h - n)) - (c = u * n) + i * (a = n - s) + (o = u - i) * s + o * a, h = u + (l = (this._hi - c - h + this._lo - u * r) / n), this._hi = h, this._lo = u - h + l, this
        }
      }, F.prototype.dump = function () {
        return "DD<" + this._hi + ", " + this._lo + ">"
      }, F.prototype.divide = function () {
        if (arguments[0] instanceof F) {
          var t = arguments[0],
            e = null,
            n = null,
            r = null,
            i = null,
            o = null,
            s = null,
            a = null,
            u = null;
          return n = (o = this._hi / t._hi) - (e = (s = F.SPLIT * o) - (e = s - o)), u = e * (r = (u = F.SPLIT * t._hi) - (r = u - t._hi)) - (a = o * t._hi) + e * (i = t._hi - r) + n * r + n * i, s = (this._hi - a - u + this._lo - o * t._lo) / t._hi, new F(u = o + s, o - u + s)
        }
        if ("number" == typeof arguments[0]) {
          var l = arguments[0];
          return v.isNaN(l) ? F.createNaN() : F.copy(this).selfDivide(l, 0)
        }
      }, F.prototype.ge = function (t) {
        return (this._hi > t._hi || this._hi === t._hi) && this._lo >= t._lo
      }, F.prototype.pow = function (t) {
        if (0 === t) return F.valueOf(1);
        var e = new F(this),
          n = F.valueOf(1),
          r = Math.abs(t);
        if (r > 1)
          for (; r > 0;) r % 2 == 1 && n.selfMultiply(e), (r /= 2) > 0 && (e = e.sqr());
        else n = e;
        return t < 0 ? n.reciprocal() : n
      }, F.prototype.ceil = function () {
        if (this.isNaN()) return F.NaN;
        var t = Math.ceil(this._hi),
          e = 0;
        return t === this._hi && (e = Math.ceil(this._lo)), new F(t, e)
      }, F.prototype.compareTo = function (t) {
        var e = t;
        return this._hi < e._hi ? -1 : this._hi > e._hi ? 1 : this._lo < e._lo ? -1 : this._lo > e._lo ? 1 : 0
      }, F.prototype.rint = function () {
        return this.isNaN() ? this : this.add(.5).floor()
      }, F.prototype.setValue = function () {
        if (arguments[0] instanceof F) {
          var t = arguments[0];
          return this.init(t), this
        }
        if ("number" == typeof arguments[0]) {
          var e = arguments[0];
          return this.init(e), this
        }
      }, F.prototype.max = function (t) {
        return this.ge(t) ? this : t
      }, F.prototype.sqrt = function () {
        if (this.isZero()) return F.valueOf(0);
        if (this.isNegative()) return F.NaN;
        var t = 1 / Math.sqrt(this._hi),
          e = this._hi * t,
          n = F.valueOf(e),
          r = this.subtract(n.sqr())._hi * (.5 * t);
        return n.add(r)
      }, F.prototype.selfAdd = function () {
        if (1 === arguments.length) {
          if (arguments[0] instanceof F) {
            var t = arguments[0];
            return this.selfAdd(t._hi, t._lo)
          }
          if ("number" == typeof arguments[0]) {
            var e = arguments[0],
              n = null,
              r = null,
              i = null,
              o = null,
              s = null,
              a = null;
            return o = (i = this._hi + e) - (s = i - this._hi), r = (a = (o = e - s + (this._hi - o)) + this._lo) + (i - (n = i + a)), this._hi = n + r, this._lo = r + (n - this._hi), this
          }
        } else if (2 === arguments.length) {
          var u = arguments[0],
            l = arguments[1],
            c = null,
            h = null,
            p = null,
            f = null,
            g = null,
            d = null,
            y = null;
          f = this._hi + u, h = this._lo + l, g = f - (d = f - this._hi), p = h - (y = h - this._lo);
          var _ = (c = f + (d = (g = u - d + (this._hi - g)) + h)) + (d = (p = l - y + (this._lo - p)) + (d + (f - c))),
            m = d + (c - _);
          return this._hi = _, this._lo = m, this
        }
      }, F.prototype.selfMultiply = function () {
        if (1 === arguments.length) {
          if (arguments[0] instanceof F) {
            var t = arguments[0];
            return this.selfMultiply(t._hi, t._lo)
          }
          if ("number" == typeof arguments[0]) {
            var e = arguments[0];
            return this.selfMultiply(e, 0)
          }
        } else if (2 === arguments.length) {
          var n = arguments[0],
            r = arguments[1],
            i = null,
            o = null,
            s = null,
            a = null,
            u = null,
            l = null;
          i = (u = F.SPLIT * this._hi) - this._hi, l = F.SPLIT * n, i = u - i, o = this._hi - i, s = l - n;
          var c = (u = this._hi * n) + (l = i * (s = l - s) - u + i * (a = n - s) + o * s + o * a + (this._hi * r + this._lo * n)),
            h = l + (i = u - c);
          return this._hi = c, this._lo = h, this
        }
      }, F.prototype.selfSqr = function () {
        return this.selfMultiply(this)
      }, F.prototype.floor = function () {
        if (this.isNaN()) return F.NaN;
        var t = Math.floor(this._hi),
          e = 0;
        return t === this._hi && (e = Math.floor(this._lo)), new F(t, e)
      }, F.prototype.negate = function () {
        return this.isNaN() ? this : new F(-this._hi, -this._lo)
      }, F.prototype.clone = function () {}, F.prototype.multiply = function () {
        if (arguments[0] instanceof F) {
          var t = arguments[0];
          return t.isNaN() ? F.createNaN() : F.copy(this).selfMultiply(t)
        }
        if ("number" == typeof arguments[0]) {
          var e = arguments[0];
          return v.isNaN(e) ? F.createNaN() : F.copy(this).selfMultiply(e, 0)
        }
      }, F.prototype.isNaN = function () {
        return v.isNaN(this._hi)
      }, F.prototype.intValue = function () {
        return Math.trunc(this._hi)
      }, F.prototype.toString = function () {
        var t = F.magnitude(this._hi);
        return t >= -3 && t <= 20 ? this.toStandardNotation() : this.toSciNotation()
      }, F.prototype.toStandardNotation = function () {
        var t = this.getSpecialNumberString();
        if (null !== t) return t;
        var e = new Array(1).fill(null),
          n = this.extractSignificantDigits(!0, e),
          r = e[0] + 1,
          i = n;
        if ("." === n.charAt(0)) i = "0" + n;
        else if (r < 0) i = "0." + F.stringOfChar("0", -r) + n;
        else if (-1 === n.indexOf(".")) {
          var o = r - n.length;
          i = n + F.stringOfChar("0", o) + ".0"
        }
        return this.isNegative() ? "-" + i : i
      }, F.prototype.reciprocal = function () {
        var t, e, n, r, i = null,
          o = null,
          s = null,
          a = null;
        t = (n = 1 / this._hi) - (i = (s = F.SPLIT * n) - (i = s - n)), o = (a = F.SPLIT * this._hi) - this._hi;
        var u = n + (s = (1 - (r = n * this._hi) - (a = i * (o = a - o) - r + i * (e = this._hi - o) + t * o + t * e) - n * this._lo) / this._hi);
        return new F(u, n - u + s)
      }, F.prototype.toSciNotation = function () {
        if (this.isZero()) return F.SCI_NOT_ZERO;
        var t = this.getSpecialNumberString();
        if (null !== t) return t;
        var e = new Array(1).fill(null),
          n = this.extractSignificantDigits(!1, e),
          r = F.SCI_NOT_EXPONENT_CHAR + e[0];
        if ("0" === n.charAt(0)) throw new Error("Found leading zero: " + n);
        var i = "";
        n.length > 1 && (i = n.substring(1));
        var o = n.charAt(0) + "." + i;
        return this.isNegative() ? "-" + o + r : o + r
      }, F.prototype.abs = function () {
        return this.isNaN() ? F.NaN : this.isNegative() ? this.negate() : new F(this)
      }, F.prototype.isPositive = function () {
        return (this._hi > 0 || 0 === this._hi) && this._lo > 0
      }, F.prototype.lt = function (t) {
        return (this._hi < t._hi || this._hi === t._hi) && this._lo < t._lo
      }, F.prototype.add = function () {
        if (arguments[0] instanceof F) {
          var t = arguments[0];
          return F.copy(this).selfAdd(t)
        }
        if ("number" == typeof arguments[0]) {
          var e = arguments[0];
          return F.copy(this).selfAdd(e)
        }
      }, F.prototype.init = function () {
        if (1 === arguments.length) {
          if ("number" == typeof arguments[0]) {
            var t = arguments[0];
            this._hi = t, this._lo = 0
          } else if (arguments[0] instanceof F) {
            var e = arguments[0];
            this._hi = e._hi, this._lo = e._lo
          }
        } else if (2 === arguments.length) {
          var n = arguments[0],
            r = arguments[1];
          this._hi = n, this._lo = r
        }
      }, F.prototype.gt = function (t) {
        return (this._hi > t._hi || this._hi === t._hi) && this._lo > t._lo
      }, F.prototype.isNegative = function () {
        return (this._hi < 0 || 0 === this._hi) && this._lo < 0
      }, F.prototype.trunc = function () {
        return this.isNaN() ? F.NaN : this.isPositive() ? this.floor() : this.ceil()
      }, F.prototype.signum = function () {
        return this._hi > 0 ? 1 : this._hi < 0 ? -1 : this._lo > 0 ? 1 : this._lo < 0 ? -1 : 0
      }, F.prototype.interfaces_ = function () {
        return [e, E, b]
      }, F.prototype.getClass = function () {
        return F
      }, F.sqr = function (t) {
        return F.valueOf(t).selfMultiply(t)
      }, F.valueOf = function () {
        if ("string" == typeof arguments[0]) {
          var t = arguments[0];
          return F.parse(t)
        }
        if ("number" == typeof arguments[0]) {
          var e = arguments[0];
          return new F(e)
        }
      }, F.sqrt = function (t) {
        return F.valueOf(t).sqrt()
      }, F.parse = function (t) {
        for (var e = 0, n = t.length; A.isWhitespace(t.charAt(e));) e++;
        var r = !1;
        if (e < n) {
          var i = t.charAt(e);
          "-" !== i && "+" !== i || (e++, "-" === i && (r = !0))
        }
        for (var o = new F, s = 0, a = 0, u = 0; !(e >= n);) {
          var l = t.charAt(e);
          if (e++, A.isDigit(l)) {
            var c = l - "0";
            o.selfMultiply(F.TEN), o.selfAdd(c), s++
          } else {
            if ("." !== l) {
              if ("e" === l || "E" === l) {
                var h = t.substring(e);
                try {
                  u = D.parseInt(h)
                } catch (e) {
                  throw e instanceof Error ? new Error("Invalid exponent " + h + " in string " + t) : e
                }
                break
              }
              throw new Error("Unexpected character '" + l + "' at position " + e + " in string " + t)
            }
            a = s
          }
        }
        var p = o,
          f = s - a - u;
        if (0 === f) p = o;
        else if (f > 0) {
          var g = F.TEN.pow(f);
          p = o.divide(g)
        } else if (f < 0) {
          var d = F.TEN.pow(-f);
          p = o.multiply(d)
        }
        return r ? p.negate() : p
      }, F.createNaN = function () {
        return new F(v.NaN, v.NaN)
      }, F.copy = function (t) {
        return new F(t)
      }, F.magnitude = function (t) {
        var e = Math.abs(t),
          n = Math.log(e) / Math.log(10),
          r = Math.trunc(Math.floor(n));
        return 10 * Math.pow(10, r) <= e && (r += 1), r
      }, F.stringOfChar = function (t, e) {
        for (var n = new R, r = 0; r < e; r++) n.append(t);
        return n.toString()
      }, G.PI.get = function () {
        return new F(3.141592653589793, 12246467991473532e-32)
      }, G.TWO_PI.get = function () {
        return new F(6.283185307179586, 24492935982947064e-32)
      }, G.PI_2.get = function () {
        return new F(1.5707963267948966, 6123233995736766e-32)
      }, G.E.get = function () {
        return new F(2.718281828459045, 14456468917292502e-32)
      }, G.NaN.get = function () {
        return new F(v.NaN, v.NaN)
      }, G.EPS.get = function () {
        return 123259516440783e-46
      }, G.SPLIT.get = function () {
        return 134217729
      }, G.MAX_PRINT_DIGITS.get = function () {
        return 32
      }, G.TEN.get = function () {
        return F.valueOf(10)
      }, G.ONE.get = function () {
        return F.valueOf(1)
      }, G.SCI_NOT_EXPONENT_CHAR.get = function () {
        return "E"
      }, G.SCI_NOT_ZERO.get = function () {
        return "0.0E0"
      }, Object.defineProperties(F, G);
      var z = function () {},
        q = {
          DP_SAFE_EPSILON: {
            configurable: !0
          }
        };
      z.prototype.interfaces_ = function () {
        return []
      }, z.prototype.getClass = function () {
        return z
      }, z.orientationIndex = function (t, e, n) {
        var r = z.orientationIndexFilter(t, e, n);
        if (r <= 1) return r;
        var i = F.valueOf(e.x).selfAdd(-t.x),
          o = F.valueOf(e.y).selfAdd(-t.y),
          s = F.valueOf(n.x).selfAdd(-e.x),
          a = F.valueOf(n.y).selfAdd(-e.y);
        return i.selfMultiply(a).selfSubtract(o.selfMultiply(s)).signum()
      }, z.signOfDet2x2 = function (t, e, n, r) {
        return t.multiply(r).selfSubtract(e.multiply(n)).signum()
      }, z.intersection = function (t, e, n, r) {
        var i = F.valueOf(r.y).selfSubtract(n.y).selfMultiply(F.valueOf(e.x).selfSubtract(t.x)),
          o = F.valueOf(r.x).selfSubtract(n.x).selfMultiply(F.valueOf(e.y).selfSubtract(t.y)),
          s = i.subtract(o),
          a = F.valueOf(r.x).selfSubtract(n.x).selfMultiply(F.valueOf(t.y).selfSubtract(n.y)),
          u = F.valueOf(r.y).selfSubtract(n.y).selfMultiply(F.valueOf(t.x).selfSubtract(n.x)),
          l = a.subtract(u).selfDivide(s).doubleValue(),
          c = F.valueOf(t.x).selfAdd(F.valueOf(e.x).selfSubtract(t.x).selfMultiply(l)).doubleValue(),
          h = F.valueOf(e.x).selfSubtract(t.x).selfMultiply(F.valueOf(t.y).selfSubtract(n.y)),
          p = F.valueOf(e.y).selfSubtract(t.y).selfMultiply(F.valueOf(t.x).selfSubtract(n.x)),
          f = h.subtract(p).selfDivide(s).doubleValue(),
          g = F.valueOf(n.y).selfAdd(F.valueOf(r.y).selfSubtract(n.y).selfMultiply(f)).doubleValue();
        return new N(c, g)
      }, z.orientationIndexFilter = function (t, e, n) {
        var r = null,
          i = (t.x - n.x) * (e.y - n.y),
          o = (t.y - n.y) * (e.x - n.x),
          s = i - o;
        if (i > 0) {
          if (o <= 0) return z.signum(s);
          r = i + o
        } else {
          if (!(i < 0)) return z.signum(s);
          if (o >= 0) return z.signum(s);
          r = -i - o
        }
        var a = z.DP_SAFE_EPSILON * r;
        return s >= a || -s >= a ? z.signum(s) : 2
      }, z.signum = function (t) {
        return t > 0 ? 1 : t < 0 ? -1 : 0
      }, q.DP_SAFE_EPSILON.get = function () {
        return 1e-15
      }, Object.defineProperties(z, q);
      var B = function () {},
        k = {
          X: {
            configurable: !0
          },
          Y: {
            configurable: !0
          },
          Z: {
            configurable: !0
          },
          M: {
            configurable: !0
          }
        };
      k.X.get = function () {
        return 0
      }, k.Y.get = function () {
        return 1
      }, k.Z.get = function () {
        return 2
      }, k.M.get = function () {
        return 3
      }, B.prototype.setOrdinate = function (t, e, n) {}, B.prototype.size = function () {}, B.prototype.getOrdinate = function (t, e) {}, B.prototype.getCoordinate = function () {}, B.prototype.getCoordinateCopy = function (t) {}, B.prototype.getDimension = function () {}, B.prototype.getX = function (t) {}, B.prototype.clone = function () {}, B.prototype.expandEnvelope = function (t) {}, B.prototype.copy = function () {}, B.prototype.getY = function (t) {}, B.prototype.toCoordinateArray = function () {}, B.prototype.interfaces_ = function () {
        return [b]
      }, B.prototype.getClass = function () {
        return B
      }, Object.defineProperties(B, k);
      var j = function () {},
        V = function (t) {
          function e() {
            t.call(this, "Projective point not representable on the Cartesian plane.")
          }
          return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.interfaces_ = function () {
            return []
          }, e.prototype.getClass = function () {
            return e
          }, e
        }(j),
        U = function () {};
      U.arraycopy = function (t, e, n, r, i) {
        for (var o = 0, s = e; s < e + i; s++) n[r + o] = t[s], o++
      }, U.getProperty = function (t) {
        return {
          "line.separator": "\n"
        } [t]
      };
      var X = function t() {
        if (this.x = null, this.y = null, this.w = null, 0 === arguments.length) this.x = 0, this.y = 0, this.w = 1;
        else if (1 === arguments.length) {
          var e = arguments[0];
          this.x = e.x, this.y = e.y, this.w = 1
        } else if (2 === arguments.length) {
          if ("number" == typeof arguments[0] && "number" == typeof arguments[1]) {
            var n = arguments[0],
              r = arguments[1];
            this.x = n, this.y = r, this.w = 1
          } else if (arguments[0] instanceof t && arguments[1] instanceof t) {
            var i = arguments[0],
              o = arguments[1];
            this.x = i.y * o.w - o.y * i.w, this.y = o.x * i.w - i.x * o.w, this.w = i.x * o.y - o.x * i.y
          } else if (arguments[0] instanceof N && arguments[1] instanceof N) {
            var s = arguments[0],
              a = arguments[1];
            this.x = s.y - a.y, this.y = a.x - s.x, this.w = s.x * a.y - a.x * s.y
          }
        } else if (3 === arguments.length) {
          var u = arguments[0],
            l = arguments[1],
            c = arguments[2];
          this.x = u, this.y = l, this.w = c
        } else if (4 === arguments.length) {
          var h = arguments[0],
            p = arguments[1],
            f = arguments[2],
            g = arguments[3],
            d = h.y - p.y,
            y = p.x - h.x,
            _ = h.x * p.y - p.x * h.y,
            m = f.y - g.y,
            v = g.x - f.x,
            x = f.x * g.y - g.x * f.y;
          this.x = y * x - v * _, this.y = m * _ - d * x, this.w = d * v - m * y
        }
      };
      X.prototype.getY = function () {
        var t = this.y / this.w;
        if (v.isNaN(t) || v.isInfinite(t)) throw new V;
        return t
      }, X.prototype.getX = function () {
        var t = this.x / this.w;
        if (v.isNaN(t) || v.isInfinite(t)) throw new V;
        return t
      }, X.prototype.getCoordinate = function () {
        var t = new N;
        return t.x = this.getX(), t.y = this.getY(), t
      }, X.prototype.interfaces_ = function () {
        return []
      }, X.prototype.getClass = function () {
        return X
      }, X.intersection = function (t, e, n, r) {
        var i = t.y - e.y,
          o = e.x - t.x,
          s = t.x * e.y - e.x * t.y,
          a = n.y - r.y,
          u = r.x - n.x,
          l = n.x * r.y - r.x * n.y,
          c = i * u - a * o,
          h = (o * l - u * s) / c,
          p = (a * s - i * l) / c;
        if (v.isNaN(h) || v.isInfinite(h) || v.isNaN(p) || v.isInfinite(p)) throw new V;
        return new N(h, p)
      };
      var Y = function t() {
          if (this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, 0 === arguments.length) this.init();
          else if (1 === arguments.length) {
            if (arguments[0] instanceof N) {
              var e = arguments[0];
              this.init(e.x, e.x, e.y, e.y)
            } else if (arguments[0] instanceof t) {
              var n = arguments[0];
              this.init(n)
            }
          } else if (2 === arguments.length) {
            var r = arguments[0],
              i = arguments[1];
            this.init(r.x, i.x, r.y, i.y)
          } else if (4 === arguments.length) {
            var o = arguments[0],
              s = arguments[1],
              a = arguments[2],
              u = arguments[3];
            this.init(o, s, a, u)
          }
        },
        H = {
          serialVersionUID: {
            configurable: !0
          }
        };
      Y.prototype.getArea = function () {
        return this.getWidth() * this.getHeight()
      }, Y.prototype.equals = function (t) {
        if (!(t instanceof Y)) return !1;
        var e = t;
        return this.isNull() ? e.isNull() : this._maxx === e.getMaxX() && this._maxy === e.getMaxY() && this._minx === e.getMinX() && this._miny === e.getMinY()
      }, Y.prototype.intersection = function (t) {
        if (this.isNull() || t.isNull() || !this.intersects(t)) return new Y;
        var e = this._minx > t._minx ? this._minx : t._minx,
          n = this._miny > t._miny ? this._miny : t._miny,
          r = this._maxx < t._maxx ? this._maxx : t._maxx,
          i = this._maxy < t._maxy ? this._maxy : t._maxy;
        return new Y(e, r, n, i)
      }, Y.prototype.isNull = function () {
        return this._maxx < this._minx
      }, Y.prototype.getMaxX = function () {
        return this._maxx
      }, Y.prototype.covers = function () {
        if (1 === arguments.length) {
          if (arguments[0] instanceof N) {
            var t = arguments[0];
            return this.covers(t.x, t.y)
          }
          if (arguments[0] instanceof Y) {
            var e = arguments[0];
            return !this.isNull() && !e.isNull() && e.getMinX() >= this._minx && e.getMaxX() <= this._maxx && e.getMinY() >= this._miny && e.getMaxY() <= this._maxy
          }
        } else if (2 === arguments.length) {
          var n = arguments[0],
            r = arguments[1];
          return !this.isNull() && n >= this._minx && n <= this._maxx && r >= this._miny && r <= this._maxy
        }
      }, Y.prototype.intersects = function () {
        if (1 === arguments.length) {
          if (arguments[0] instanceof Y) {
            var t = arguments[0];
            return !this.isNull() && !t.isNull() && !(t._minx > this._maxx || t._maxx < this._minx || t._miny > this._maxy || t._maxy < this._miny)
          }
          if (arguments[0] instanceof N) {
            var e = arguments[0];
            return this.intersects(e.x, e.y)
          }
        } else if (2 === arguments.length) {
          var n = arguments[0],
            r = arguments[1];
          return !this.isNull() && !(n > this._maxx || n < this._minx || r > this._maxy || r < this._miny)
        }
      }, Y.prototype.getMinY = function () {
        return this._miny
      }, Y.prototype.getMinX = function () {
        return this._minx
      }, Y.prototype.expandToInclude = function () {
        if (1 === arguments.length) {
          if (arguments[0] instanceof N) {
            var t = arguments[0];
            this.expandToInclude(t.x, t.y)
          } else if (arguments[0] instanceof Y) {
            var e = arguments[0];
            if (e.isNull()) return null;
            this.isNull() ? (this._minx = e.getMinX(), this._maxx = e.getMaxX(), this._miny = e.getMinY(), this._maxy = e.getMaxY()) : (e._minx < this._minx && (this._minx = e._minx), e._maxx > this._maxx && (this._maxx = e._maxx), e._miny < this._miny && (this._miny = e._miny), e._maxy > this._maxy && (this._maxy = e._maxy))
          }
        } else if (2 === arguments.length) {
          var n = arguments[0],
            r = arguments[1];
          this.isNull() ? (this._minx = n, this._maxx = n, this._miny = r, this._maxy = r) : (n < this._minx && (this._minx = n), n > this._maxx && (this._maxx = n), r < this._miny && (this._miny = r), r > this._maxy && (this._maxy = r))
        }
      }, Y.prototype.minExtent = function () {
        if (this.isNull()) return 0;
        var t = this.getWidth(),
          e = this.getHeight();
        return t < e ? t : e
      }, Y.prototype.getWidth = function () {
        return this.isNull() ? 0 : this._maxx - this._minx
      }, Y.prototype.compareTo = function (t) {
        var e = t;
        return this.isNull() ? e.isNull() ? 0 : -1 : e.isNull() ? 1 : this._minx < e._minx ? -1 : this._minx > e._minx ? 1 : this._miny < e._miny ? -1 : this._miny > e._miny ? 1 : this._maxx < e._maxx ? -1 : this._maxx > e._maxx ? 1 : this._maxy < e._maxy ? -1 : this._maxy > e._maxy ? 1 : 0
      }, Y.prototype.translate = function (t, e) {
        if (this.isNull()) return null;
        this.init(this.getMinX() + t, this.getMaxX() + t, this.getMinY() + e, this.getMaxY() + e)
      }, Y.prototype.toString = function () {
        return "Env[" + this._minx + " : " + this._maxx + ", " + this._miny + " : " + this._maxy + "]"
      }, Y.prototype.setToNull = function () {
        this._minx = 0, this._maxx = -1, this._miny = 0, this._maxy = -1
      }, Y.prototype.getHeight = function () {
        return this.isNull() ? 0 : this._maxy - this._miny
      }, Y.prototype.maxExtent = function () {
        if (this.isNull()) return 0;
        var t = this.getWidth(),
          e = this.getHeight();
        return t > e ? t : e
      }, Y.prototype.expandBy = function () {
        if (1 === arguments.length) {
          var t = arguments[0];
          this.expandBy(t, t)
        } else if (2 === arguments.length) {
          var e = arguments[0],
            n = arguments[1];
          if (this.isNull()) return null;
          this._minx -= e, this._maxx += e, this._miny -= n, this._maxy += n, (this._minx > this._maxx || this._miny > this._maxy) && this.setToNull()
        }
      }, Y.prototype.contains = function () {
        if (1 === arguments.length) {
          if (arguments[0] instanceof Y) {
            var t = arguments[0];
            return this.covers(t)
          }
          if (arguments[0] instanceof N) {
            var e = arguments[0];
            return this.covers(e)
          }
        } else if (2 === arguments.length) {
          var n = arguments[0],
            r = arguments[1];
          return this.covers(n, r)
        }
      }, Y.prototype.centre = function () {
        return this.isNull() ? null : new N((this.getMinX() + this.getMaxX()) / 2, (this.getMinY() + this.getMaxY()) / 2)
      }, Y.prototype.init = function () {
        if (0 === arguments.length) this.setToNull();
        else if (1 === arguments.length) {
          if (arguments[0] instanceof N) {
            var t = arguments[0];
            this.init(t.x, t.x, t.y, t.y)
          } else if (arguments[0] instanceof Y) {
            var e = arguments[0];
            this._minx = e._minx, this._maxx = e._maxx, this._miny = e._miny, this._maxy = e._maxy
          }
        } else if (2 === arguments.length) {
          var n = arguments[0],
            r = arguments[1];
          this.init(n.x, r.x, n.y, r.y)
        } else if (4 === arguments.length) {
          var i = arguments[0],
            o = arguments[1],
            s = arguments[2],
            a = arguments[3];
          i < o ? (this._minx = i, this._maxx = o) : (this._minx = o, this._maxx = i), s < a ? (this._miny = s, this._maxy = a) : (this._miny = a, this._maxy = s)
        }
      }, Y.prototype.getMaxY = function () {
        return this._maxy
      }, Y.prototype.distance = function (t) {
        if (this.intersects(t)) return 0;
        var e = 0;
        this._maxx < t._minx ? e = t._minx - this._maxx : this._minx > t._maxx && (e = this._minx - t._maxx);
        var n = 0;
        return this._maxy < t._miny ? n = t._miny - this._maxy : this._miny > t._maxy && (n = this._miny - t._maxy), 0 === e ? n : 0 === n ? e : Math.sqrt(e * e + n * n)
      }, Y.prototype.hashCode = function () {
        var t = 17;
        return 37 * (t = 37 * (t = 37 * (t = 37 * t + N.hashCode(this._minx)) + N.hashCode(this._maxx)) + N.hashCode(this._miny)) + N.hashCode(this._maxy)
      }, Y.prototype.interfaces_ = function () {
        return [E, e]
      }, Y.prototype.getClass = function () {
        return Y
      }, Y.intersects = function () {
        if (3 === arguments.length) {
          var t = arguments[0],
            e = arguments[1],
            n = arguments[2];
          return n.x >= (t.x < e.x ? t.x : e.x) && n.x <= (t.x > e.x ? t.x : e.x) && n.y >= (t.y < e.y ? t.y : e.y) && n.y <= (t.y > e.y ? t.y : e.y)
        }
        if (4 === arguments.length) {
          var r = arguments[0],
            i = arguments[1],
            o = arguments[2],
            s = arguments[3],
            a = Math.min(o.x, s.x),
            u = Math.max(o.x, s.x),
            l = Math.min(r.x, i.x),
            c = Math.max(r.x, i.x);
          return !(l > u || c < a || (a = Math.min(o.y, s.y), u = Math.max(o.y, s.y), l = Math.min(r.y, i.y), c = Math.max(r.y, i.y), l > u || c < a))
        }
      }, H.serialVersionUID.get = function () {
        return 0x51845cd552189800
      }, Object.defineProperties(Y, H);
      var W = {
          typeStr: /^\s*(\w+)\s*\(\s*(.*)\s*\)\s*$/,
          emptyTypeStr: /^\s*(\w+)\s*EMPTY\s*$/,
          spaces: /\s+/,
          parenComma: /\)\s*,\s*\(/,
          doubleParenComma: /\)\s*\)\s*,\s*\(\s*\(/,
          trimParens: /^\s*\(?(.*?)\)?\s*$/
        },
        Z = function (t) {
          this.geometryFactory = t || new _e
        };
      Z.prototype.read = function (t) {
        var e, n, r;
        t = t.replace(/[\n\r]/g, " ");
        var i = W.typeStr.exec(t);
        if (-1 !== t.search("EMPTY") && ((i = W.emptyTypeStr.exec(t))[2] = void 0), i && (n = i[1].toLowerCase(), r = i[2], J[n] && (e = J[n].apply(this, [r]))), void 0 === e) throw new Error("Could not parse WKT " + t);
        return e
      }, Z.prototype.write = function (t) {
        return this.extractGeometry(t)
      }, Z.prototype.extractGeometry = function (t) {
        var e = t.getGeometryType().toLowerCase();
        if (!$[e]) return null;
        var n = e.toUpperCase();
        return t.isEmpty() ? n + " EMPTY" : n + "(" + $[e].apply(this, [t]) + ")"
      };
      var $ = {
          coordinate: function (t) {
            return t.x + " " + t.y
          },
          point: function (t) {
            return $.coordinate.call(this, t._coordinates._coordinates[0])
          },
          multipoint: function (t) {
            for (var e = [], n = 0, r = t._geometries.length; n < r; ++n) e.push("(" + $.point.apply(this, [t._geometries[n]]) + ")");
            return e.join(",")
          },
          linestring: function (t) {
            for (var e = [], n = 0, r = t._points._coordinates.length; n < r; ++n) e.push($.coordinate.apply(this, [t._points._coordinates[n]]));
            return e.join(",")
          },
          linearring: function (t) {
            for (var e = [], n = 0, r = t._points._coordinates.length; n < r; ++n) e.push($.coordinate.apply(this, [t._points._coordinates[n]]));
            return e.join(",")
          },
          multilinestring: function (t) {
            for (var e = [], n = 0, r = t._geometries.length; n < r; ++n) e.push("(" + $.linestring.apply(this, [t._geometries[n]]) + ")");
            return e.join(",")
          },
          polygon: function (t) {
            var e = [];
            e.push("(" + $.linestring.apply(this, [t._shell]) + ")");
            for (var n = 0, r = t._holes.length; n < r; ++n) e.push("(" + $.linestring.apply(this, [t._holes[n]]) + ")");
            return e.join(",")
          },
          multipolygon: function (t) {
            for (var e = [], n = 0, r = t._geometries.length; n < r; ++n) e.push("(" + $.polygon.apply(this, [t._geometries[n]]) + ")");
            return e.join(",")
          },
          geometrycollection: function (t) {
            for (var e = [], n = 0, r = t._geometries.length; n < r; ++n) e.push(this.extractGeometry(t._geometries[n]));
            return e.join(",")
          }
        },
        J = {
          point: function (t) {
            if (void 0 === t) return this.geometryFactory.createPoint();
            var e = t.trim().split(W.spaces);
            return this.geometryFactory.createPoint(new N(Number.parseFloat(e[0]), Number.parseFloat(e[1])))
          },
          multipoint: function (t) {
            if (void 0 === t) return this.geometryFactory.createMultiPoint();
            for (var e, n = t.trim().split(","), r = [], i = 0, o = n.length; i < o; ++i) e = n[i].replace(W.trimParens, "$1"), r.push(J.point.apply(this, [e]));
            return this.geometryFactory.createMultiPoint(r)
          },
          linestring: function (t) {
            if (void 0 === t) return this.geometryFactory.createLineString();
            for (var e, n = t.trim().split(","), r = [], i = 0, o = n.length; i < o; ++i) e = n[i].trim().split(W.spaces), r.push(new N(Number.parseFloat(e[0]), Number.parseFloat(e[1])));
            return this.geometryFactory.createLineString(r)
          },
          linearring: function (t) {
            if (void 0 === t) return this.geometryFactory.createLinearRing();
            for (var e, n = t.trim().split(","), r = [], i = 0, o = n.length; i < o; ++i) e = n[i].trim().split(W.spaces), r.push(new N(Number.parseFloat(e[0]), Number.parseFloat(e[1])));
            return this.geometryFactory.createLinearRing(r)
          },
          multilinestring: function (t) {
            if (void 0 === t) return this.geometryFactory.createMultiLineString();
            for (var e, n = t.trim().split(W.parenComma), r = [], i = 0, o = n.length; i < o; ++i) e = n[i].replace(W.trimParens, "$1"), r.push(J.linestring.apply(this, [e]));
            return this.geometryFactory.createMultiLineString(r)
          },
          polygon: function (t) {
            if (void 0 === t) return this.geometryFactory.createPolygon();
            for (var e, n, r, i, o = t.trim().split(W.parenComma), s = [], a = 0, u = o.length; a < u; ++a) e = o[a].replace(W.trimParens, "$1"), n = J.linestring.apply(this, [e]), r = this.geometryFactory.createLinearRing(n._points), 0 === a ? i = r : s.push(r);
            return this.geometryFactory.createPolygon(i, s)
          },
          multipolygon: function (t) {
            if (void 0 === t) return this.geometryFactory.createMultiPolygon();
            for (var e, n = t.trim().split(W.doubleParenComma), r = [], i = 0, o = n.length; i < o; ++i) e = n[i].replace(W.trimParens, "$1"), r.push(J.polygon.apply(this, [e]));
            return this.geometryFactory.createMultiPolygon(r)
          },
          geometrycollection: function (t) {
            if (void 0 === t) return this.geometryFactory.createGeometryCollection();
            for (var e = (t = t.replace(/,\s*([A-Za-z])/g, "|$1")).trim().split("|"), n = [], r = 0, i = e.length; r < i; ++r) n.push(this.read(e[r]));
            return this.geometryFactory.createGeometryCollection(n)
          }
        },
        K = function (t) {
          this.parser = new Z(t)
        };
      K.prototype.write = function (t) {
        return this.parser.write(t)
      }, K.toLineString = function (t, e) {
        if (2 !== arguments.length) throw new Error("Not implemented");
        return "LINESTRING ( " + t.x + " " + t.y + ", " + e.x + " " + e.y + " )"
      };
      var Q = function (t) {
          function e(e) {
            t.call(this, e), this.name = "RuntimeException", this.message = e, this.stack = (new t).stack
          }
          return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
        }(Error),
        tt = function (t) {
          function e() {
            if (t.call(this), 0 === arguments.length) t.call(this);
            else if (1 === arguments.length) {
              var e = arguments[0];
              t.call(this, e)
            }
          }
          return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.interfaces_ = function () {
            return []
          }, e.prototype.getClass = function () {
            return e
          }, e
        }(Q),
        et = function () {};
      et.prototype.interfaces_ = function () {
        return []
      }, et.prototype.getClass = function () {
        return et
      }, et.shouldNeverReachHere = function () {
        if (0 === arguments.length) et.shouldNeverReachHere(null);
        else if (1 === arguments.length) {
          var t = arguments[0];
          throw new tt("Should never reach here" + (null !== t ? ": " + t : ""))
        }
      }, et.isTrue = function () {
        var t, e;
        if (1 === arguments.length) t = arguments[0], et.isTrue(t, null);
        else if (2 === arguments.length && (t = arguments[0], e = arguments[1], !t)) throw null === e ? new tt : new tt(e)
      }, et.equals = function () {
        var t, e, n;
        if (2 === arguments.length) t = arguments[0], e = arguments[1], et.equals(t, e, null);
        else if (3 === arguments.length && (t = arguments[0], e = arguments[1], n = arguments[2], !e.equals(t))) throw new tt("Expected " + t + " but encountered " + e + (null !== n ? ": " + n : ""))
      };
      var nt = function () {
          this._result = null, this._inputLines = Array(2).fill().map((function () {
            return Array(2)
          })), this._intPt = new Array(2).fill(null), this._intLineIndex = null, this._isProper = null, this._pa = null, this._pb = null, this._precisionModel = null, this._intPt[0] = new N, this._intPt[1] = new N, this._pa = this._intPt[0], this._pb = this._intPt[1], this._result = 0
        },
        rt = {
          DONT_INTERSECT: {
            configurable: !0
          },
          DO_INTERSECT: {
            configurable: !0
          },
          COLLINEAR: {
            configurable: !0
          },
          NO_INTERSECTION: {
            configurable: !0
          },
          POINT_INTERSECTION: {
            configurable: !0
          },
          COLLINEAR_INTERSECTION: {
            configurable: !0
          }
        };
      nt.prototype.getIndexAlongSegment = function (t, e) {
        return this.computeIntLineIndex(), this._intLineIndex[t][e]
      }, nt.prototype.getTopologySummary = function () {
        var t = new R;
        return this.isEndPoint() && t.append(" endpoint"), this._isProper && t.append(" proper"), this.isCollinear() && t.append(" collinear"), t.toString()
      }, nt.prototype.computeIntersection = function (t, e, n, r) {
        this._inputLines[0][0] = t, this._inputLines[0][1] = e, this._inputLines[1][0] = n, this._inputLines[1][1] = r, this._result = this.computeIntersect(t, e, n, r)
      }, nt.prototype.getIntersectionNum = function () {
        return this._result
      }, nt.prototype.computeIntLineIndex = function () {
        if (0 === arguments.length) null === this._intLineIndex && (this._intLineIndex = Array(2).fill().map((function () {
          return Array(2)
        })), this.computeIntLineIndex(0), this.computeIntLineIndex(1));
        else if (1 === arguments.length) {
          var t = arguments[0];
          this.getEdgeDistance(t, 0) > this.getEdgeDistance(t, 1) ? (this._intLineIndex[t][0] = 0, this._intLineIndex[t][1] = 1) : (this._intLineIndex[t][0] = 1, this._intLineIndex[t][1] = 0)
        }
      }, nt.prototype.isProper = function () {
        return this.hasIntersection() && this._isProper
      }, nt.prototype.setPrecisionModel = function (t) {
        this._precisionModel = t
      }, nt.prototype.isInteriorIntersection = function () {
        if (0 === arguments.length) return !!this.isInteriorIntersection(0) || !!this.isInteriorIntersection(1);
        if (1 === arguments.length) {
          for (var t = arguments[0], e = 0; e < this._result; e++)
            if (!this._intPt[e].equals2D(this._inputLines[t][0]) && !this._intPt[e].equals2D(this._inputLines[t][1])) return !0;
          return !1
        }
      }, nt.prototype.getIntersection = function (t) {
        return this._intPt[t]
      }, nt.prototype.isEndPoint = function () {
        return this.hasIntersection() && !this._isProper
      }, nt.prototype.hasIntersection = function () {
        return this._result !== nt.NO_INTERSECTION
      }, nt.prototype.getEdgeDistance = function (t, e) {
        return nt.computeEdgeDistance(this._intPt[e], this._inputLines[t][0], this._inputLines[t][1])
      }, nt.prototype.isCollinear = function () {
        return this._result === nt.COLLINEAR_INTERSECTION
      }, nt.prototype.toString = function () {
        return K.toLineString(this._inputLines[0][0], this._inputLines[0][1]) + " - " + K.toLineString(this._inputLines[1][0], this._inputLines[1][1]) + this.getTopologySummary()
      }, nt.prototype.getEndpoint = function (t, e) {
        return this._inputLines[t][e]
      }, nt.prototype.isIntersection = function (t) {
        for (var e = 0; e < this._result; e++)
          if (this._intPt[e].equals2D(t)) return !0;
        return !1
      }, nt.prototype.getIntersectionAlongSegment = function (t, e) {
        return this.computeIntLineIndex(), this._intPt[this._intLineIndex[t][e]]
      }, nt.prototype.interfaces_ = function () {
        return []
      }, nt.prototype.getClass = function () {
        return nt
      }, nt.computeEdgeDistance = function (t, e, n) {
        var r = Math.abs(n.x - e.x),
          i = Math.abs(n.y - e.y),
          o = -1;
        if (t.equals(e)) o = 0;
        else if (t.equals(n)) o = r > i ? r : i;
        else {
          var s = Math.abs(t.x - e.x),
            a = Math.abs(t.y - e.y);
          0 !== (o = r > i ? s : a) || t.equals(e) || (o = Math.max(s, a))
        }
        return et.isTrue(!(0 === o && !t.equals(e)), "Bad distance calculation"), o
      }, nt.nonRobustComputeEdgeDistance = function (t, e, n) {
        var r = t.x - e.x,
          i = t.y - e.y,
          o = Math.sqrt(r * r + i * i);
        return et.isTrue(!(0 === o && !t.equals(e)), "Invalid distance calculation"), o
      }, rt.DONT_INTERSECT.get = function () {
        return 0
      }, rt.DO_INTERSECT.get = function () {
        return 1
      }, rt.COLLINEAR.get = function () {
        return 2
      }, rt.NO_INTERSECTION.get = function () {
        return 0
      }, rt.POINT_INTERSECTION.get = function () {
        return 1
      }, rt.COLLINEAR_INTERSECTION.get = function () {
        return 2
      }, Object.defineProperties(nt, rt);
      var it = function (t) {
          function e() {
            t.apply(this, arguments)
          }
          return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.isInSegmentEnvelopes = function (t) {
            var e = new Y(this._inputLines[0][0], this._inputLines[0][1]),
              n = new Y(this._inputLines[1][0], this._inputLines[1][1]);
            return e.contains(t) && n.contains(t)
          }, e.prototype.computeIntersection = function () {
            if (3 !== arguments.length) return t.prototype.computeIntersection.apply(this, arguments);
            var e = arguments[0],
              n = arguments[1],
              r = arguments[2];
            if (this._isProper = !1, Y.intersects(n, r, e) && 0 === at.orientationIndex(n, r, e) && 0 === at.orientationIndex(r, n, e)) return this._isProper = !0, (e.equals(n) || e.equals(r)) && (this._isProper = !1), this._result = t.POINT_INTERSECTION, null;
            this._result = t.NO_INTERSECTION
          }, e.prototype.normalizeToMinimum = function (t, e, n, r, i) {
            i.x = this.smallestInAbsValue(t.x, e.x, n.x, r.x), i.y = this.smallestInAbsValue(t.y, e.y, n.y, r.y), t.x -= i.x, t.y -= i.y, e.x -= i.x, e.y -= i.y, n.x -= i.x, n.y -= i.y, r.x -= i.x, r.y -= i.y
          }, e.prototype.safeHCoordinateIntersection = function (t, n, r, i) {
            var o = null;
            try {
              o = X.intersection(t, n, r, i)
            } catch (s) {
              if (!(s instanceof V)) throw s;
              o = e.nearestEndpoint(t, n, r, i)
            }
            return o
          }, e.prototype.intersection = function (t, n, r, i) {
            var o = this.intersectionWithNormalization(t, n, r, i);
            return this.isInSegmentEnvelopes(o) || (o = new N(e.nearestEndpoint(t, n, r, i))), null !== this._precisionModel && this._precisionModel.makePrecise(o), o
          }, e.prototype.smallestInAbsValue = function (t, e, n, r) {
            var i = t,
              o = Math.abs(i);
            return Math.abs(e) < o && (i = e, o = Math.abs(e)), Math.abs(n) < o && (i = n, o = Math.abs(n)), Math.abs(r) < o && (i = r), i
          }, e.prototype.checkDD = function (t, e, n, r, i) {
            var o = z.intersection(t, e, n, r),
              s = this.isInSegmentEnvelopes(o);
            U.out.println("DD in env = " + s + "  --------------------- " + o), i.distance(o) > 1e-4 && U.out.println("Distance = " + i.distance(o))
          }, e.prototype.intersectionWithNormalization = function (t, e, n, r) {
            var i = new N(t),
              o = new N(e),
              s = new N(n),
              a = new N(r),
              u = new N;
            this.normalizeToEnvCentre(i, o, s, a, u);
            var l = this.safeHCoordinateIntersection(i, o, s, a);
            return l.x += u.x, l.y += u.y, l
          }, e.prototype.computeCollinearIntersection = function (e, n, r, i) {
            var o = Y.intersects(e, n, r),
              s = Y.intersects(e, n, i),
              a = Y.intersects(r, i, e),
              u = Y.intersects(r, i, n);
            return o && s ? (this._intPt[0] = r, this._intPt[1] = i, t.COLLINEAR_INTERSECTION) : a && u ? (this._intPt[0] = e, this._intPt[1] = n, t.COLLINEAR_INTERSECTION) : o && a ? (this._intPt[0] = r, this._intPt[1] = e, !r.equals(e) || s || u ? t.COLLINEAR_INTERSECTION : t.POINT_INTERSECTION) : o && u ? (this._intPt[0] = r, this._intPt[1] = n, !r.equals(n) || s || a ? t.COLLINEAR_INTERSECTION : t.POINT_INTERSECTION) : s && a ? (this._intPt[0] = i, this._intPt[1] = e, !i.equals(e) || o || u ? t.COLLINEAR_INTERSECTION : t.POINT_INTERSECTION) : s && u ? (this._intPt[0] = i, this._intPt[1] = n, !i.equals(n) || o || a ? t.COLLINEAR_INTERSECTION : t.POINT_INTERSECTION) : t.NO_INTERSECTION
          }, e.prototype.normalizeToEnvCentre = function (t, e, n, r, i) {
            var o = t.x < e.x ? t.x : e.x,
              s = t.y < e.y ? t.y : e.y,
              a = t.x > e.x ? t.x : e.x,
              u = t.y > e.y ? t.y : e.y,
              l = n.x < r.x ? n.x : r.x,
              c = n.y < r.y ? n.y : r.y,
              h = n.x > r.x ? n.x : r.x,
              p = n.y > r.y ? n.y : r.y,
              f = ((o > l ? o : l) + (a < h ? a : h)) / 2,
              g = ((s > c ? s : c) + (u < p ? u : p)) / 2;
            i.x = f, i.y = g, t.x -= i.x, t.y -= i.y, e.x -= i.x, e.y -= i.y, n.x -= i.x, n.y -= i.y, r.x -= i.x, r.y -= i.y
          }, e.prototype.computeIntersect = function (e, n, r, i) {
            if (this._isProper = !1, !Y.intersects(e, n, r, i)) return t.NO_INTERSECTION;
            var o = at.orientationIndex(e, n, r),
              s = at.orientationIndex(e, n, i);
            if (o > 0 && s > 0 || o < 0 && s < 0) return t.NO_INTERSECTION;
            var a = at.orientationIndex(r, i, e),
              u = at.orientationIndex(r, i, n);
            return a > 0 && u > 0 || a < 0 && u < 0 ? t.NO_INTERSECTION : 0 === o && 0 === s && 0 === a && 0 === u ? this.computeCollinearIntersection(e, n, r, i) : (0 === o || 0 === s || 0 === a || 0 === u ? (this._isProper = !1, e.equals2D(r) || e.equals2D(i) ? this._intPt[0] = e : n.equals2D(r) || n.equals2D(i) ? this._intPt[0] = n : 0 === o ? this._intPt[0] = new N(r) : 0 === s ? this._intPt[0] = new N(i) : 0 === a ? this._intPt[0] = new N(e) : 0 === u && (this._intPt[0] = new N(n))) : (this._isProper = !0, this._intPt[0] = this.intersection(e, n, r, i)), t.POINT_INTERSECTION)
          }, e.prototype.interfaces_ = function () {
            return []
          }, e.prototype.getClass = function () {
            return e
          }, e.nearestEndpoint = function (t, e, n, r) {
            var i = t,
              o = at.distancePointLine(t, n, r),
              s = at.distancePointLine(e, n, r);
            return s < o && (o = s, i = e), (s = at.distancePointLine(n, t, e)) < o && (o = s, i = n), (s = at.distancePointLine(r, t, e)) < o && (o = s, i = r), i
          }, e
        }(nt),
        ot = function () {};
      ot.prototype.interfaces_ = function () {
        return []
      }, ot.prototype.getClass = function () {
        return ot
      }, ot.orientationIndex = function (t, e, n) {
        var r = e.x - t.x,
          i = e.y - t.y,
          o = n.x - e.x,
          s = n.y - e.y;
        return ot.signOfDet2x2(r, i, o, s)
      }, ot.signOfDet2x2 = function (t, e, n, r) {
        var i = null,
          o = null,
          s = null;
        if (i = 1, 0 === t || 0 === r) return 0 === e || 0 === n ? 0 : e > 0 ? n > 0 ? -i : i : n > 0 ? i : -i;
        if (0 === e || 0 === n) return r > 0 ? t > 0 ? i : -i : t > 0 ? -i : i;
        if (e > 0 ? r > 0 ? e <= r || (i = -i, o = t, t = n, n = o, o = e, e = r, r = o) : e <= -r ? (i = -i, n = -n, r = -r) : (o = t, t = -n, n = o, o = e, e = -r, r = o) : r > 0 ? -e <= r ? (i = -i, t = -t, e = -e) : (o = -t, t = n, n = o, o = -e, e = r, r = o) : e >= r ? (t = -t, e = -e, n = -n, r = -r) : (i = -i, o = -t, t = -n, n = o, o = -e, e = -r, r = o), t > 0) {
          if (!(n > 0)) return i;
          if (!(t <= n)) return i
        } else {
          if (n > 0) return -i;
          if (!(t >= n)) return -i;
          i = -i, t = -t, n = -n
        }
        for (;;) {
          if ((r -= (s = Math.floor(n / t)) * e) < 0) return -i;
          if (r > e) return i;
          if (t > (n -= s * t) + n) {
            if (e < r + r) return i
          } else {
            if (e > r + r) return -i;
            n = t - n, r = e - r, i = -i
          }
          if (0 === r) return 0 === n ? 0 : -i;
          if (0 === n) return i;
          if ((e -= (s = Math.floor(t / n)) * r) < 0) return i;
          if (e > r) return -i;
          if (n > (t -= s * n) + t) {
            if (r < e + e) return -i
          } else {
            if (r > e + e) return i;
            t = n - t, e = r - e, i = -i
          }
          if (0 === e) return 0 === t ? 0 : i;
          if (0 === t) return -i
        }
      };
      var st = function () {
        this._p = null, this._crossingCount = 0, this._isPointOnSegment = !1;
        var t = arguments[0];
        this._p = t
      };
      st.prototype.countSegment = function (t, e) {
        if (t.x < this._p.x && e.x < this._p.x) return null;
        if (this._p.x === e.x && this._p.y === e.y) return this._isPointOnSegment = !0, null;
        if (t.y === this._p.y && e.y === this._p.y) {
          var n = t.x,
            r = e.x;
          return n > r && (n = e.x, r = t.x), this._p.x >= n && this._p.x <= r && (this._isPointOnSegment = !0), null
        }
        if (t.y > this._p.y && e.y <= this._p.y || e.y > this._p.y && t.y <= this._p.y) {
          var i = t.x - this._p.x,
            o = t.y - this._p.y,
            s = e.x - this._p.x,
            a = e.y - this._p.y,
            u = ot.signOfDet2x2(i, o, s, a);
          if (0 === u) return this._isPointOnSegment = !0, null;
          a < o && (u = -u), u > 0 && this._crossingCount++
        }
      }, st.prototype.isPointInPolygon = function () {
        return this.getLocation() !== L.EXTERIOR
      }, st.prototype.getLocation = function () {
        return this._isPointOnSegment ? L.BOUNDARY : this._crossingCount % 2 == 1 ? L.INTERIOR : L.EXTERIOR
      }, st.prototype.isOnSegment = function () {
        return this._isPointOnSegment
      }, st.prototype.interfaces_ = function () {
        return []
      }, st.prototype.getClass = function () {
        return st
      }, st.locatePointInRing = function () {
        if (arguments[0] instanceof N && T(arguments[1], B)) {
          for (var t = arguments[0], e = arguments[1], n = new st(t), r = new N, i = new N, o = 1; o < e.size(); o++)
            if (e.getCoordinate(o, r), e.getCoordinate(o - 1, i), n.countSegment(r, i), n.isOnSegment()) return n.getLocation();
          return n.getLocation()
        }
        if (arguments[0] instanceof N && arguments[1] instanceof Array) {
          for (var s = arguments[0], a = arguments[1], u = new st(s), l = 1; l < a.length; l++) {
            var c = a[l],
              h = a[l - 1];
            if (u.countSegment(c, h), u.isOnSegment()) return u.getLocation()
          }
          return u.getLocation()
        }
      };
      var at = function () {},
        ut = {
          CLOCKWISE: {
            configurable: !0
          },
          RIGHT: {
            configurable: !0
          },
          COUNTERCLOCKWISE: {
            configurable: !0
          },
          LEFT: {
            configurable: !0
          },
          COLLINEAR: {
            configurable: !0
          },
          STRAIGHT: {
            configurable: !0
          }
        };
      at.prototype.interfaces_ = function () {
        return []
      }, at.prototype.getClass = function () {
        return at
      }, at.orientationIndex = function (t, e, n) {
        return z.orientationIndex(t, e, n)
      }, at.signedArea = function () {
        if (arguments[0] instanceof Array) {
          var t = arguments[0];
          if (t.length < 3) return 0;
          for (var e = 0, n = t[0].x, r = 1; r < t.length - 1; r++) {
            var i = t[r].x - n,
              o = t[r + 1].y;
            e += i * (t[r - 1].y - o)
          }
          return e / 2
        }
        if (T(arguments[0], B)) {
          var s = arguments[0],
            a = s.size();
          if (a < 3) return 0;
          var u = new N,
            l = new N,
            c = new N;
          s.getCoordinate(0, l), s.getCoordinate(1, c);
          var h = l.x;
          c.x -= h;
          for (var p = 0, f = 1; f < a - 1; f++) u.y = l.y, l.x = c.x, l.y = c.y, s.getCoordinate(f + 1, c), c.x -= h, p += l.x * (u.y - c.y);
          return p / 2
        }
      }, at.distanceLineLine = function (t, e, n, r) {
        if (t.equals(e)) return at.distancePointLine(t, n, r);
        if (n.equals(r)) return at.distancePointLine(r, t, e);
        var i = !1;
        if (Y.intersects(t, e, n, r)) {
          var o = (e.x - t.x) * (r.y - n.y) - (e.y - t.y) * (r.x - n.x);
          if (0 === o) i = !0;
          else {
            var s = (t.y - n.y) * (r.x - n.x) - (t.x - n.x) * (r.y - n.y),
              a = ((t.y - n.y) * (e.x - t.x) - (t.x - n.x) * (e.y - t.y)) / o,
              u = s / o;
            (u < 0 || u > 1 || a < 0 || a > 1) && (i = !0)
          }
        } else i = !0;
        return i ? M.min(at.distancePointLine(t, n, r), at.distancePointLine(e, n, r), at.distancePointLine(n, t, e), at.distancePointLine(r, t, e)) : 0
      }, at.isPointInRing = function (t, e) {
        return at.locatePointInRing(t, e) !== L.EXTERIOR
      }, at.computeLength = function (t) {
        var e = t.size();
        if (e <= 1) return 0;
        var n = 0,
          r = new N;
        t.getCoordinate(0, r);
        for (var i = r.x, o = r.y, s = 1; s < e; s++) {
          t.getCoordinate(s, r);
          var a = r.x,
            u = r.y,
            l = a - i,
            c = u - o;
          n += Math.sqrt(l * l + c * c), i = a, o = u
        }
        return n
      }, at.isCCW = function (t) {
        var e = t.length - 1;
        if (e < 3) throw new m("Ring has fewer than 4 points, so orientation cannot be determined");
        for (var n = t[0], r = 0, i = 1; i <= e; i++) {
          var o = t[i];
          o.y > n.y && (n = o, r = i)
        }
        var s = r;
        do {
          (s -= 1) < 0 && (s = e)
        } while (t[s].equals2D(n) && s !== r);
        var a = r;
        do {
          a = (a + 1) % e
        } while (t[a].equals2D(n) && a !== r);
        var u = t[s],
          l = t[a];
        if (u.equals2D(n) || l.equals2D(n) || u.equals2D(l)) return !1;
        var c = at.computeOrientation(u, n, l);
        return 0 === c ? u.x > l.x : c > 0
      }, at.locatePointInRing = function (t, e) {
        return st.locatePointInRing(t, e)
      }, at.distancePointLinePerpendicular = function (t, e, n) {
        var r = (n.x - e.x) * (n.x - e.x) + (n.y - e.y) * (n.y - e.y),
          i = ((e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)) / r;
        return Math.abs(i) * Math.sqrt(r)
      }, at.computeOrientation = function (t, e, n) {
        return at.orientationIndex(t, e, n)
      }, at.distancePointLine = function () {
        if (2 === arguments.length) {
          var t = arguments[0],
            e = arguments[1];
          if (0 === e.length) throw new m("Line array must contain at least one vertex");
          for (var n = t.distance(e[0]), r = 0; r < e.length - 1; r++) {
            var i = at.distancePointLine(t, e[r], e[r + 1]);
            i < n && (n = i)
          }
          return n
        }
        if (3 === arguments.length) {
          var o = arguments[0],
            s = arguments[1],
            a = arguments[2];
          if (s.x === a.x && s.y === a.y) return o.distance(s);
          var u = (a.x - s.x) * (a.x - s.x) + (a.y - s.y) * (a.y - s.y),
            l = ((o.x - s.x) * (a.x - s.x) + (o.y - s.y) * (a.y - s.y)) / u;
          if (l <= 0) return o.distance(s);
          if (l >= 1) return o.distance(a);
          var c = ((s.y - o.y) * (a.x - s.x) - (s.x - o.x) * (a.y - s.y)) / u;
          return Math.abs(c) * Math.sqrt(u)
        }
      }, at.isOnLine = function (t, e) {
        for (var n = new it, r = 1; r < e.length; r++) {
          var i = e[r - 1],
            o = e[r];
          if (n.computeIntersection(t, i, o), n.hasIntersection()) return !0
        }
        return !1
      }, ut.CLOCKWISE.get = function () {
        return -1
      }, ut.RIGHT.get = function () {
        return at.CLOCKWISE
      }, ut.COUNTERCLOCKWISE.get = function () {
        return 1
      }, ut.LEFT.get = function () {
        return at.COUNTERCLOCKWISE
      }, ut.COLLINEAR.get = function () {
        return 0
      }, ut.STRAIGHT.get = function () {
        return at.COLLINEAR
      }, Object.defineProperties(at, ut);
      var lt = function () {};
      lt.prototype.filter = function (t) {}, lt.prototype.interfaces_ = function () {
        return []
      }, lt.prototype.getClass = function () {
        return lt
      };
      var ct = function () {
          var t = arguments[0];
          this._envelope = null, this._factory = null, this._SRID = null, this._userData = null, this._factory = t, this._SRID = t.getSRID()
        },
        ht = {
          serialVersionUID: {
            configurable: !0
          },
          SORTINDEX_POINT: {
            configurable: !0
          },
          SORTINDEX_MULTIPOINT: {
            configurable: !0
          },
          SORTINDEX_LINESTRING: {
            configurable: !0
          },
          SORTINDEX_LINEARRING: {
            configurable: !0
          },
          SORTINDEX_MULTILINESTRING: {
            configurable: !0
          },
          SORTINDEX_POLYGON: {
            configurable: !0
          },
          SORTINDEX_MULTIPOLYGON: {
            configurable: !0
          },
          SORTINDEX_GEOMETRYCOLLECTION: {
            configurable: !0
          },
          geometryChangedFilter: {
            configurable: !0
          }
        };
      ct.prototype.isGeometryCollection = function () {
        return this.getSortIndex() === ct.SORTINDEX_GEOMETRYCOLLECTION
      }, ct.prototype.getFactory = function () {
        return this._factory
      }, ct.prototype.getGeometryN = function (t) {
        return this
      }, ct.prototype.getArea = function () {
        return 0
      }, ct.prototype.isRectangle = function () {
        return !1
      }, ct.prototype.equals = function () {
        if (arguments[0] instanceof ct) {
          var t = arguments[0];
          return null !== t && this.equalsTopo(t)
        }
        if (arguments[0] instanceof Object) {
          var e = arguments[0];
          if (!(e instanceof ct)) return !1;
          var n = e;
          return this.equalsExact(n)
        }
      }, ct.prototype.equalsExact = function (t) {
        return this === t || this.equalsExact(t, 0)
      }, ct.prototype.geometryChanged = function () {
        this.apply(ct.geometryChangedFilter)
      }, ct.prototype.geometryChangedAction = function () {
        this._envelope = null
      }, ct.prototype.equalsNorm = function (t) {
        return null !== t && this.norm().equalsExact(t.norm())
      }, ct.prototype.getLength = function () {
        return 0
      }, ct.prototype.getNumGeometries = function () {
        return 1
      }, ct.prototype.compareTo = function () {
        if (1 === arguments.length) {
          var t = arguments[0],
            e = t;
          return this.getSortIndex() !== e.getSortIndex() ? this.getSortIndex() - e.getSortIndex() : this.isEmpty() && e.isEmpty() ? 0 : this.isEmpty() ? -1 : e.isEmpty() ? 1 : this.compareToSameClass(t)
        }
        if (2 === arguments.length) {
          var n = arguments[0],
            r = arguments[1];
          return this.getSortIndex() !== n.getSortIndex() ? this.getSortIndex() - n.getSortIndex() : this.isEmpty() && n.isEmpty() ? 0 : this.isEmpty() ? -1 : n.isEmpty() ? 1 : this.compareToSameClass(n, r)
        }
      }, ct.prototype.getUserData = function () {
        return this._userData
      }, ct.prototype.getSRID = function () {
        return this._SRID
      }, ct.prototype.getEnvelope = function () {
        return this.getFactory().toGeometry(this.getEnvelopeInternal())
      }, ct.prototype.checkNotGeometryCollection = function (t) {
        if (t.getSortIndex() === ct.SORTINDEX_GEOMETRYCOLLECTION) throw new m("This method does not support GeometryCollection arguments")
      }, ct.prototype.equal = function (t, e, n) {
        return 0 === n ? t.equals(e) : t.distance(e) <= n
      }, ct.prototype.norm = function () {
        var t = this.copy();
        return t.normalize(), t
      }, ct.prototype.getPrecisionModel = function () {
        return this._factory.getPrecisionModel()
      }, ct.prototype.getEnvelopeInternal = function () {
        return null === this._envelope && (this._envelope = this.computeEnvelopeInternal()), new Y(this._envelope)
      }, ct.prototype.setSRID = function (t) {
        this._SRID = t
      }, ct.prototype.setUserData = function (t) {
        this._userData = t
      }, ct.prototype.compare = function (t, e) {
        for (var n = t.iterator(), r = e.iterator(); n.hasNext() && r.hasNext();) {
          var i = n.next(),
            o = r.next(),
            s = i.compareTo(o);
          if (0 !== s) return s
        }
        return n.hasNext() ? 1 : r.hasNext() ? -1 : 0
      }, ct.prototype.hashCode = function () {
        return this.getEnvelopeInternal().hashCode()
      }, ct.prototype.isGeometryCollectionOrDerived = function () {
        return this.getSortIndex() === ct.SORTINDEX_GEOMETRYCOLLECTION || this.getSortIndex() === ct.SORTINDEX_MULTIPOINT || this.getSortIndex() === ct.SORTINDEX_MULTILINESTRING || this.getSortIndex() === ct.SORTINDEX_MULTIPOLYGON
      }, ct.prototype.interfaces_ = function () {
        return [b, E, e]
      }, ct.prototype.getClass = function () {
        return ct
      }, ct.hasNonEmptyElements = function (t) {
        for (var e = 0; e < t.length; e++)
          if (!t[e].isEmpty()) return !0;
        return !1
      }, ct.hasNullElements = function (t) {
        for (var e = 0; e < t.length; e++)
          if (null === t[e]) return !0;
        return !1
      }, ht.serialVersionUID.get = function () {
        return 0x799ea46522854c00
      }, ht.SORTINDEX_POINT.get = function () {
        return 0
      }, ht.SORTINDEX_MULTIPOINT.get = function () {
        return 1
      }, ht.SORTINDEX_LINESTRING.get = function () {
        return 2
      }, ht.SORTINDEX_LINEARRING.get = function () {
        return 3
      }, ht.SORTINDEX_MULTILINESTRING.get = function () {
        return 4
      }, ht.SORTINDEX_POLYGON.get = function () {
        return 5
      }, ht.SORTINDEX_MULTIPOLYGON.get = function () {
        return 6
      }, ht.SORTINDEX_GEOMETRYCOLLECTION.get = function () {
        return 7
      }, ht.geometryChangedFilter.get = function () {
        return pt
      }, Object.defineProperties(ct, ht);
      var pt = function () {};
      pt.interfaces_ = function () {
        return [lt]
      }, pt.filter = function (t) {
        t.geometryChangedAction()
      };
      var ft = function () {};
      ft.prototype.filter = function (t) {}, ft.prototype.interfaces_ = function () {
        return []
      }, ft.prototype.getClass = function () {
        return ft
      };
      var gt = function () {},
        dt = {
          Mod2BoundaryNodeRule: {
            configurable: !0
          },
          EndPointBoundaryNodeRule: {
            configurable: !0
          },
          MultiValentEndPointBoundaryNodeRule: {
            configurable: !0
          },
          MonoValentEndPointBoundaryNodeRule: {
            configurable: !0
          },
          MOD2_BOUNDARY_RULE: {
            configurable: !0
          },
          ENDPOINT_BOUNDARY_RULE: {
            configurable: !0
          },
          MULTIVALENT_ENDPOINT_BOUNDARY_RULE: {
            configurable: !0
          },
          MONOVALENT_ENDPOINT_BOUNDARY_RULE: {
            configurable: !0
          },
          OGC_SFS_BOUNDARY_RULE: {
            configurable: !0
          }
        };
      gt.prototype.isInBoundary = function (t) {}, gt.prototype.interfaces_ = function () {
        return []
      }, gt.prototype.getClass = function () {
        return gt
      }, dt.Mod2BoundaryNodeRule.get = function () {
        return yt
      }, dt.EndPointBoundaryNodeRule.get = function () {
        return _t
      }, dt.MultiValentEndPointBoundaryNodeRule.get = function () {
        return mt
      }, dt.MonoValentEndPointBoundaryNodeRule.get = function () {
        return vt
      }, dt.MOD2_BOUNDARY_RULE.get = function () {
        return new yt
      }, dt.ENDPOINT_BOUNDARY_RULE.get = function () {
        return new _t
      }, dt.MULTIVALENT_ENDPOINT_BOUNDARY_RULE.get = function () {
        return new mt
      }, dt.MONOVALENT_ENDPOINT_BOUNDARY_RULE.get = function () {
        return new vt
      }, dt.OGC_SFS_BOUNDARY_RULE.get = function () {
        return gt.MOD2_BOUNDARY_RULE
      }, Object.defineProperties(gt, dt);
      var yt = function () {};
      yt.prototype.isInBoundary = function (t) {
        return t % 2 == 1
      }, yt.prototype.interfaces_ = function () {
        return [gt]
      }, yt.prototype.getClass = function () {
        return yt
      };
      var _t = function () {};
      _t.prototype.isInBoundary = function (t) {
        return t > 0
      }, _t.prototype.interfaces_ = function () {
        return [gt]
      }, _t.prototype.getClass = function () {
        return _t
      };
      var mt = function () {};
      mt.prototype.isInBoundary = function (t) {
        return t > 1
      }, mt.prototype.interfaces_ = function () {
        return [gt]
      }, mt.prototype.getClass = function () {
        return mt
      };
      var vt = function () {};
      vt.prototype.isInBoundary = function (t) {
        return 1 === t
      }, vt.prototype.interfaces_ = function () {
        return [gt]
      }, vt.prototype.getClass = function () {
        return vt
      };
      var xt = function () {};
      xt.prototype.add = function () {}, xt.prototype.addAll = function () {}, xt.prototype.isEmpty = function () {}, xt.prototype.iterator = function () {}, xt.prototype.size = function () {}, xt.prototype.toArray = function () {}, xt.prototype.remove = function () {}, (n.prototype = new Error).name = "IndexOutOfBoundsException";
      var Et = function () {};
      Et.prototype.hasNext = function () {}, Et.prototype.next = function () {}, Et.prototype.remove = function () {};
      var bt = function (t) {
        function e() {
          t.apply(this, arguments)
        }
        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.get = function () {}, e.prototype.set = function () {}, e.prototype.isEmpty = function () {}, e
      }(xt);
      (r.prototype = new Error).name = "NoSuchElementException";
      var It = function (t) {
          function e() {
            t.call(this), this.array_ = [], arguments[0] instanceof xt && this.addAll(arguments[0])
          }
          return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.ensureCapacity = function () {}, e.prototype.interfaces_ = function () {
            return [t, xt]
          }, e.prototype.add = function (t) {
            return 1 === arguments.length ? this.array_.push(t) : this.array_.splice(arguments[0], arguments[1]), !0
          }, e.prototype.clear = function () {
            this.array_ = []
          }, e.prototype.addAll = function (t) {
            for (var e = t.iterator(); e.hasNext();) this.add(e.next());
            return !0
          }, e.prototype.set = function (t, e) {
            var n = this.array_[t];
            return this.array_[t] = e, n
          }, e.prototype.iterator = function () {
            return new Nt(this)
          }, e.prototype.get = function (t) {
            if (t < 0 || t >= this.size()) throw new n;
            return this.array_[t]
          }, e.prototype.isEmpty = function () {
            return 0 === this.array_.length
          }, e.prototype.size = function () {
            return this.array_.length
          }, e.prototype.toArray = function () {
            for (var t = [], e = 0, n = this.array_.length; e < n; e++) t.push(this.array_[e]);
            return t
          }, e.prototype.remove = function (t) {
            for (var e = !1, n = 0, r = this.array_.length; n < r; n++)
              if (this.array_[n] === t) {
                this.array_.splice(n, 1), e = !0;
                break
              } return e
          }, e
        }(bt),
        Nt = function (t) {
          function e(e) {
            t.call(this), this.arrayList_ = e, this.position_ = 0
          }
          return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.next = function () {
            if (this.position_ === this.arrayList_.size()) throw new r;
            return this.arrayList_.get(this.position_++)
          }, e.prototype.hasNext = function () {
            return this.position_ < this.arrayList_.size()
          }, e.prototype.set = function (t) {
            return this.arrayList_.set(this.position_ - 1, t)
          }, e.prototype.remove = function () {
            this.arrayList_.remove(this.arrayList_.get(this.position_))
          }, e
        }(Et),
        wt = function (t) {
          function e() {
            if (t.call(this), 0 === arguments.length);
            else if (1 === arguments.length) {
              var e = arguments[0];
              this.ensureCapacity(e.length), this.add(e, !0)
            } else if (2 === arguments.length) {
              var n = arguments[0],
                r = arguments[1];
              this.ensureCapacity(n.length), this.add(n, r)
            }
          }
          t && (e.__proto__ = t), (e.prototype = Object.create(t && t.prototype)).constructor = e;
          var n = {
            coordArrayType: {
              configurable: !0
            }
          };
          return n.coordArrayType.get = function () {
            return new Array(0).fill(null)
          }, e.prototype.getCoordinate = function (t) {
            return this.get(t)
          }, e.prototype.addAll = function () {
            if (2 === arguments.length) {
              for (var e = arguments[0], n = arguments[1], r = !1, i = e.iterator(); i.hasNext();) this.add(i.next(), n), r = !0;
              return r
            }
            return t.prototype.addAll.apply(this, arguments)
          }, e.prototype.clone = function () {
            for (var e = t.prototype.clone.call(this), n = 0; n < this.size(); n++) e.add(n, this.get(n).copy());
            return e
          }, e.prototype.toCoordinateArray = function () {
            return this.toArray(e.coordArrayType)
          }, e.prototype.add = function () {
            if (1 === arguments.length) {
              var e = arguments[0];
              t.prototype.add.call(this, e)
            } else if (2 === arguments.length) {
              if (arguments[0] instanceof Array && "boolean" == typeof arguments[1]) {
                var n = arguments[0],
                  r = arguments[1];
                return this.add(n, r, !0), !0
              }
              if (arguments[0] instanceof N && "boolean" == typeof arguments[1]) {
                var i = arguments[0];
                if (!arguments[1] && this.size() >= 1 && this.get(this.size() - 1).equals2D(i)) return null;
                t.prototype.add.call(this, i)
              } else if (arguments[0] instanceof Object && "boolean" == typeof arguments[1]) {
                var o = arguments[0],
                  s = arguments[1];
                return this.add(o, s), !0
              }
            } else if (3 === arguments.length) {
              if ("boolean" == typeof arguments[2] && arguments[0] instanceof Array && "boolean" == typeof arguments[1]) {
                var a = arguments[0],
                  u = arguments[1];
                if (arguments[2])
                  for (var l = 0; l < a.length; l++) this.add(a[l], u);
                else
                  for (var c = a.length - 1; c >= 0; c--) this.add(a[c], u);
                return !0
              }
              if ("boolean" == typeof arguments[2] && Number.isInteger(arguments[0]) && arguments[1] instanceof N) {
                var h = arguments[0],
                  p = arguments[1];
                if (!arguments[2]) {
                  var f = this.size();
                  if (f > 0) {
                    if (h > 0 && this.get(h - 1).equals2D(p)) return null;
                    if (h < f && this.get(h).equals2D(p)) return null
                  }
                }
                t.prototype.add.call(this, h, p)
              }
            } else if (4 === arguments.length) {
              var g = arguments[0],
                d = arguments[1],
                y = arguments[2],
                _ = arguments[3],
                m = 1;
              y > _ && (m = -1);
              for (var v = y; v !== _; v += m) this.add(g[v], d);
              return !0
            }
          }, e.prototype.closeRing = function () {
            this.size() > 0 && this.add(new N(this.get(0)), !1)
          }, e.prototype.interfaces_ = function () {
            return []
          }, e.prototype.getClass = function () {
            return e
          }, Object.defineProperties(e, n), e
        }(It),
        Ct = function () {},
        St = {
          ForwardComparator: {
            configurable: !0
          },
          BidirectionalComparator: {
            configurable: !0
          },
          coordArrayType: {
            configurable: !0
          }
        };
      St.ForwardComparator.get = function () {
        return Lt
      }, St.BidirectionalComparator.get = function () {
        return Ot
      }, St.coordArrayType.get = function () {
        return new Array(0).fill(null)
      }, Ct.prototype.interfaces_ = function () {
        return []
      }, Ct.prototype.getClass = function () {
        return Ct
      }, Ct.isRing = function (t) {
        return !(t.length < 4 || !t[0].equals2D(t[t.length - 1]))
      }, Ct.ptNotInList = function (t, e) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          if (Ct.indexOf(r, e) < 0) return r
        }
        return null
      }, Ct.scroll = function (t, e) {
        var n = Ct.indexOf(e, t);
        if (n < 0) return null;
        var r = new Array(t.length).fill(null);
        U.arraycopy(t, n, r, 0, t.length - n), U.arraycopy(t, 0, r, t.length - n, n), U.arraycopy(r, 0, t, 0, t.length)
      }, Ct.equals = function () {
        if (2 === arguments.length) {
          var t = arguments[0],
            e = arguments[1];
          if (t === e) return !0;
          if (null === t || null === e) return !1;
          if (t.length !== e.length) return !1;
          for (var n = 0; n < t.length; n++)
            if (!t[n].equals(e[n])) return !1;
          return !0
        }
        if (3 === arguments.length) {
          var r = arguments[0],
            i = arguments[1],
            o = arguments[2];
          if (r === i) return !0;
          if (null === r || null === i) return !1;
          if (r.length !== i.length) return !1;
          for (var s = 0; s < r.length; s++)
            if (0 !== o.compare(r[s], i[s])) return !1;
          return !0
        }
      }, Ct.intersection = function (t, e) {
        for (var n = new wt, r = 0; r < t.length; r++) e.intersects(t[r]) && n.add(t[r], !0);
        return n.toCoordinateArray()
      }, Ct.hasRepeatedPoints = function (t) {
        for (var e = 1; e < t.length; e++)
          if (t[e - 1].equals(t[e])) return !0;
        return !1
      }, Ct.removeRepeatedPoints = function (t) {
        return Ct.hasRepeatedPoints(t) ? new wt(t, !1).toCoordinateArray() : t
      }, Ct.reverse = function (t) {
        for (var e = t.length - 1, n = Math.trunc(e / 2), r = 0; r <= n; r++) {
          var i = t[r];
          t[r] = t[e - r], t[e - r] = i
        }
      }, Ct.removeNull = function (t) {
        for (var e = 0, n = 0; n < t.length; n++) null !== t[n] && e++;
        var r = new Array(e).fill(null);
        if (0 === e) return r;
        for (var i = 0, o = 0; o < t.length; o++) null !== t[o] && (r[i++] = t[o]);
        return r
      }, Ct.copyDeep = function () {
        if (1 === arguments.length) {
          for (var t = arguments[0], e = new Array(t.length).fill(null), n = 0; n < t.length; n++) e[n] = new N(t[n]);
          return e
        }
        if (5 === arguments.length)
          for (var r = arguments[0], i = arguments[1], o = arguments[2], s = arguments[3], a = arguments[4], u = 0; u < a; u++) o[s + u] = new N(r[i + u])
      }, Ct.isEqualReversed = function (t, e) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n],
            i = e[t.length - n - 1];
          if (0 !== r.compareTo(i)) return !1
        }
        return !0
      }, Ct.envelope = function (t) {
        for (var e = new Y, n = 0; n < t.length; n++) e.expandToInclude(t[n]);
        return e
      }, Ct.toCoordinateArray = function (t) {
        return t.toArray(Ct.coordArrayType)
      }, Ct.atLeastNCoordinatesOrNothing = function (t, e) {
        return e.length >= t ? e : []
      }, Ct.indexOf = function (t, e) {
        for (var n = 0; n < e.length; n++)
          if (t.equals(e[n])) return n;
        return -1
      }, Ct.increasingDirection = function (t) {
        for (var e = 0; e < Math.trunc(t.length / 2); e++) {
          var n = t.length - 1 - e,
            r = t[e].compareTo(t[n]);
          if (0 !== r) return r
        }
        return 1
      }, Ct.compare = function (t, e) {
        for (var n = 0; n < t.length && n < e.length;) {
          var r = t[n].compareTo(e[n]);
          if (0 !== r) return r;
          n++
        }
        return n < e.length ? -1 : n < t.length ? 1 : 0
      }, Ct.minCoordinate = function (t) {
        for (var e = null, n = 0; n < t.length; n++)(null === e || e.compareTo(t[n]) > 0) && (e = t[n]);
        return e
      }, Ct.extract = function (t, e, n) {
        e = M.clamp(e, 0, t.length);
        var r = (n = M.clamp(n, -1, t.length)) - e + 1;
        n < 0 && (r = 0), e >= t.length && (r = 0), n < e && (r = 0);
        var i = new Array(r).fill(null);
        if (0 === r) return i;
        for (var o = 0, s = e; s <= n; s++) i[o++] = t[s];
        return i
      }, Object.defineProperties(Ct, St);
      var Lt = function () {};
      Lt.prototype.compare = function (t, e) {
        return Ct.compare(t, e)
      }, Lt.prototype.interfaces_ = function () {
        return [I]
      }, Lt.prototype.getClass = function () {
        return Lt
      };
      var Ot = function () {};
      Ot.prototype.compare = function (t, e) {
        var n = t,
          r = e;
        if (n.length < r.length) return -1;
        if (n.length > r.length) return 1;
        if (0 === n.length) return 0;
        var i = Ct.compare(n, r);
        return Ct.isEqualReversed(n, r) ? 0 : i
      }, Ot.prototype.OLDcompare = function (t, e) {
        var n = t,
          r = e;
        if (n.length < r.length) return -1;
        if (n.length > r.length) return 1;
        if (0 === n.length) return 0;
        for (var i = Ct.increasingDirection(n), o = Ct.increasingDirection(r), s = i > 0 ? 0 : n.length - 1, a = o > 0 ? 0 : n.length - 1, u = 0; u < n.length; u++) {
          var l = n[s].compareTo(r[a]);
          if (0 !== l) return l;
          s += i, a += o
        }
        return 0
      }, Ot.prototype.interfaces_ = function () {
        return [I]
      }, Ot.prototype.getClass = function () {
        return Ot
      };
      var Tt = function () {};
      Tt.prototype.get = function () {}, Tt.prototype.put = function () {}, Tt.prototype.size = function () {}, Tt.prototype.values = function () {}, Tt.prototype.entrySet = function () {};
      var Mt = function (t) {
        function e() {
          t.apply(this, arguments)
        }
        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
      }(Tt);
      (i.prototype = new Error).name = "OperationNotSupported", (o.prototype = new xt).contains = function () {};
      var Pt = function (t) {
          function e() {
            t.call(this), this.array_ = [], arguments[0] instanceof xt && this.addAll(arguments[0])
          }
          return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.contains = function (t) {
            for (var e = 0, n = this.array_.length; e < n; e++)
              if (this.array_[e] === t) return !0;
            return !1
          }, e.prototype.add = function (t) {
            return !this.contains(t) && (this.array_.push(t), !0)
          }, e.prototype.addAll = function (t) {
            for (var e = t.iterator(); e.hasNext();) this.add(e.next());
            return !0
          }, e.prototype.remove = function (t) {
            throw new Error
          }, e.prototype.size = function () {
            return this.array_.length
          }, e.prototype.isEmpty = function () {
            return 0 === this.array_.length
          }, e.prototype.toArray = function () {
            for (var t = [], e = 0, n = this.array_.length; e < n; e++) t.push(this.array_[e]);
            return t
          }, e.prototype.iterator = function () {
            return new Rt(this)
          }, e
        }(o),
        Rt = function (t) {
          function e(e) {
            t.call(this), this.hashSet_ = e, this.position_ = 0
          }
          return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.next = function () {
            if (this.position_ === this.hashSet_.size()) throw new r;
            return this.hashSet_.array_[this.position_++]
          }, e.prototype.hasNext = function () {
            return this.position_ < this.hashSet_.size()
          }, e.prototype.remove = function () {
            throw new i
          }, e
        }(Et),
        Dt = 0;
      (h.prototype = new Mt).get = function (t) {
        for (var e = this.root_; null !== e;) {
          var n = t.compareTo(e.key);
          if (n < 0) e = e.left;
          else {
            if (!(n > 0)) return e.value;
            e = e.right
          }
        }
        return null
      }, h.prototype.put = function (t, e) {
        if (null === this.root_) return this.root_ = {
          key: t,
          value: e,
          left: null,
          right: null,
          parent: null,
          color: Dt,
          getValue: function () {
            return this.value
          },
          getKey: function () {
            return this.key
          }
        }, this.size_ = 1, null;
        var n, r, i = this.root_;
        do {
          if (n = i, (r = t.compareTo(i.key)) < 0) i = i.left;
          else {
            if (!(r > 0)) {
              var o = i.value;
              return i.value = e, o
            }
            i = i.right
          }
        } while (null !== i);
        var s = {
          key: t,
          left: null,
          right: null,
          value: e,
          parent: n,
          color: Dt,
          getValue: function () {
            return this.value
          },
          getKey: function () {
            return this.key
          }
        };
        return r < 0 ? n.left = s : n.right = s, this.fixAfterInsertion(s), this.size_++, null
      }, h.prototype.fixAfterInsertion = function (t) {
        for (t.color = 1; null != t && t !== this.root_ && 1 === t.parent.color;)
          if (a(t) === l(a(a(t)))) {
            var e = c(a(a(t)));
            1 === s(e) ? (u(a(t), Dt), u(e, Dt), u(a(a(t)), 1), t = a(a(t))) : (t === c(a(t)) && (t = a(t), this.rotateLeft(t)), u(a(t), Dt), u(a(a(t)), 1), this.rotateRight(a(a(t))))
          } else {
            var n = l(a(a(t)));
            1 === s(n) ? (u(a(t), Dt), u(n, Dt), u(a(a(t)), 1), t = a(a(t))) : (t === l(a(t)) && (t = a(t), this.rotateRight(t)), u(a(t), Dt), u(a(a(t)), 1), this.rotateLeft(a(a(t))))
          } this.root_.color = Dt
      }, h.prototype.values = function () {
        var t = new It,
          e = this.getFirstEntry();
        if (null !== e)
          for (t.add(e.value); null !== (e = h.successor(e));) t.add(e.value);
        return t
      }, h.prototype.entrySet = function () {
        var t = new Pt,
          e = this.getFirstEntry();
        if (null !== e)
          for (t.add(e); null !== (e = h.successor(e));) t.add(e);
        return t
      }, h.prototype.rotateLeft = function (t) {
        if (null != t) {
          var e = t.right;
          t.right = e.left, null != e.left && (e.left.parent = t), e.parent = t.parent, null === t.parent ? this.root_ = e : t.parent.left === t ? t.parent.left = e : t.parent.right = e, e.left = t, t.parent = e
        }
      }, h.prototype.rotateRight = function (t) {
        if (null != t) {
          var e = t.left;
          t.left = e.right, null != e.right && (e.right.parent = t), e.parent = t.parent, null === t.parent ? this.root_ = e : t.parent.right === t ? t.parent.right = e : t.parent.left = e, e.right = t, t.parent = e
        }
      }, h.prototype.getFirstEntry = function () {
        var t = this.root_;
        if (null != t)
          for (; null != t.left;) t = t.left;
        return t
      }, h.successor = function (t) {
        if (null === t) return null;
        if (null !== t.right) {
          for (var e = t.right; null !== e.left;) e = e.left;
          return e
        }
        for (var n = t.parent, r = t; null !== n && r === n.right;) r = n, n = n.parent;
        return n
      }, h.prototype.size = function () {
        return this.size_
      };
      var At = function () {};
      At.prototype.interfaces_ = function () {
        return []
      }, At.prototype.getClass = function () {
        return At
      }, p.prototype = new o, (f.prototype = new p).contains = function (t) {
        for (var e = 0, n = this.array_.length; e < n; e++)
          if (0 === this.array_[e].compareTo(t)) return !0;
        return !1
      }, f.prototype.add = function (t) {
        if (this.contains(t)) return !1;
        for (var e = 0, n = this.array_.length; e < n; e++)
          if (1 === this.array_[e].compareTo(t)) return this.array_.splice(e, 0, t), !0;
        return this.array_.push(t), !0
      }, f.prototype.addAll = function (t) {
        for (var e = t.iterator(); e.hasNext();) this.add(e.next());
        return !0
      }, f.prototype.remove = function (t) {
        throw new i
      }, f.prototype.size = function () {
        return this.array_.length
      }, f.prototype.isEmpty = function () {
        return 0 === this.array_.length
      }, f.prototype.toArray = function () {
        for (var t = [], e = 0, n = this.array_.length; e < n; e++) t.push(this.array_[e]);
        return t
      }, f.prototype.iterator = function () {
        return new Ft(this)
      };
      var Ft = function (t) {
        this.treeSet_ = t, this.position_ = 0
      };
      Ft.prototype.next = function () {
        if (this.position_ === this.treeSet_.size()) throw new r;
        return this.treeSet_.array_[this.position_++]
      }, Ft.prototype.hasNext = function () {
        return this.position_ < this.treeSet_.size()
      }, Ft.prototype.remove = function () {
        throw new i
      };
      var Gt = function () {};
      Gt.sort = function () {
        var t, e, n, r, i = arguments[0];
        if (1 === arguments.length) r = function (t, e) {
          return t.compareTo(e)
        }, i.sort(r);
        else if (2 === arguments.length) n = arguments[1], r = function (t, e) {
          return n.compare(t, e)
        }, i.sort(r);
        else if (3 === arguments.length) {
          (e = i.slice(arguments[1], arguments[2])).sort();
          var o = i.slice(0, arguments[1]).concat(e, i.slice(arguments[2], i.length));
          for (i.splice(0, i.length), t = 0; t < o.length; t++) i.push(o[t])
        } else if (4 === arguments.length)
          for (e = i.slice(arguments[1], arguments[2]), n = arguments[3], r = function (t, e) {
              return n.compare(t, e)
            }, e.sort(r), o = i.slice(0, arguments[1]).concat(e, i.slice(arguments[2], i.length)), i.splice(0, i.length), t = 0; t < o.length; t++) i.push(o[t])
      }, Gt.asList = function (t) {
        for (var e = new It, n = 0, r = t.length; n < r; n++) e.add(t[n]);
        return e
      };
      var zt = function () {},
        qt = {
          P: {
            configurable: !0
          },
          L: {
            configurable: !0
          },
          A: {
            configurable: !0
          },
          FALSE: {
            configurable: !0
          },
          TRUE: {
            configurable: !0
          },
          DONTCARE: {
            configurable: !0
          },
          SYM_FALSE: {
            configurable: !0
          },
          SYM_TRUE: {
            configurable: !0
          },
          SYM_DONTCARE: {
            configurable: !0
          },
          SYM_P: {
            configurable: !0
          },
          SYM_L: {
            configurable: !0
          },
          SYM_A: {
            configurable: !0
          }
        };
      qt.P.get = function () {
        return 0
      }, qt.L.get = function () {
        return 1
      }, qt.A.get = function () {
        return 2
      }, qt.FALSE.get = function () {
        return -1
      }, qt.TRUE.get = function () {
        return -2
      }, qt.DONTCARE.get = function () {
        return -3
      }, qt.SYM_FALSE.get = function () {
        return "F"
      }, qt.SYM_TRUE.get = function () {
        return "T"
      }, qt.SYM_DONTCARE.get = function () {
        return "*"
      }, qt.SYM_P.get = function () {
        return "0"
      }, qt.SYM_L.get = function () {
        return "1"
      }, qt.SYM_A.get = function () {
        return "2"
      }, zt.prototype.interfaces_ = function () {
        return []
      }, zt.prototype.getClass = function () {
        return zt
      }, zt.toDimensionSymbol = function (t) {
        switch (t) {
          case zt.FALSE:
            return zt.SYM_FALSE;
          case zt.TRUE:
            return zt.SYM_TRUE;
          case zt.DONTCARE:
            return zt.SYM_DONTCARE;
          case zt.P:
            return zt.SYM_P;
          case zt.L:
            return zt.SYM_L;
          case zt.A:
            return zt.SYM_A
        }
        throw new m("Unknown dimension value: " + t)
      }, zt.toDimensionValue = function (t) {
        switch (A.toUpperCase(t)) {
          case zt.SYM_FALSE:
            return zt.FALSE;
          case zt.SYM_TRUE:
            return zt.TRUE;
          case zt.SYM_DONTCARE:
            return zt.DONTCARE;
          case zt.SYM_P:
            return zt.P;
          case zt.SYM_L:
            return zt.L;
          case zt.SYM_A:
            return zt.A
        }
        throw new m("Unknown dimension symbol: " + t)
      }, Object.defineProperties(zt, qt);
      var Bt = function () {};
      Bt.prototype.filter = function (t) {}, Bt.prototype.interfaces_ = function () {
        return []
      }, Bt.prototype.getClass = function () {
        return Bt
      };
      var kt = function () {};
      kt.prototype.filter = function (t, e) {}, kt.prototype.isDone = function () {}, kt.prototype.isGeometryChanged = function () {}, kt.prototype.interfaces_ = function () {
        return []
      }, kt.prototype.getClass = function () {
        return kt
      };
      var jt = function (t) {
          function e(e, n) {
            if (t.call(this, n), this._geometries = e || [], t.hasNullElements(this._geometries)) throw new m("geometries must not contain null elements")
          }
          t && (e.__proto__ = t), (e.prototype = Object.create(t && t.prototype)).constructor = e;
          var n = {
            serialVersionUID: {
              configurable: !0
            }
          };
          return e.prototype.computeEnvelopeInternal = function () {
            for (var t = new Y, e = 0; e < this._geometries.length; e++) t.expandToInclude(this._geometries[e].getEnvelopeInternal());
            return t
          }, e.prototype.getGeometryN = function (t) {
            return this._geometries[t]
          }, e.prototype.getSortIndex = function () {
            return t.SORTINDEX_GEOMETRYCOLLECTION
          }, e.prototype.getCoordinates = function () {
            for (var t = new Array(this.getNumPoints()).fill(null), e = -1, n = 0; n < this._geometries.length; n++)
              for (var r = this._geometries[n].getCoordinates(), i = 0; i < r.length; i++) t[++e] = r[i];
            return t
          }, e.prototype.getArea = function () {
            for (var t = 0, e = 0; e < this._geometries.length; e++) t += this._geometries[e].getArea();
            return t
          }, e.prototype.equalsExact = function () {
            if (2 === arguments.length) {
              var e = arguments[0],
                n = arguments[1];
              if (!this.isEquivalentClass(e)) return !1;
              var r = e;
              if (this._geometries.length !== r._geometries.length) return !1;
              for (var i = 0; i < this._geometries.length; i++)
                if (!this._geometries[i].equalsExact(r._geometries[i], n)) return !1;
              return !0
            }
            return t.prototype.equalsExact.apply(this, arguments)
          }, e.prototype.normalize = function () {
            for (var t = 0; t < this._geometries.length; t++) this._geometries[t].normalize();
            Gt.sort(this._geometries)
          }, e.prototype.getCoordinate = function () {
            return this.isEmpty() ? null : this._geometries[0].getCoordinate()
          }, e.prototype.getBoundaryDimension = function () {
            for (var t = zt.FALSE, e = 0; e < this._geometries.length; e++) t = Math.max(t, this._geometries[e].getBoundaryDimension());
            return t
          }, e.prototype.getDimension = function () {
            for (var t = zt.FALSE, e = 0; e < this._geometries.length; e++) t = Math.max(t, this._geometries[e].getDimension());
            return t
          }, e.prototype.getLength = function () {
            for (var t = 0, e = 0; e < this._geometries.length; e++) t += this._geometries[e].getLength();
            return t
          }, e.prototype.getNumPoints = function () {
            for (var t = 0, e = 0; e < this._geometries.length; e++) t += this._geometries[e].getNumPoints();
            return t
          }, e.prototype.getNumGeometries = function () {
            return this._geometries.length
          }, e.prototype.reverse = function () {
            for (var t = this._geometries.length, e = new Array(t).fill(null), n = 0; n < this._geometries.length; n++) e[n] = this._geometries[n].reverse();
            return this.getFactory().createGeometryCollection(e)
          }, e.prototype.compareToSameClass = function () {
            if (1 === arguments.length) {
              var t = arguments[0],
                e = new f(Gt.asList(this._geometries)),
                n = new f(Gt.asList(t._geometries));
              return this.compare(e, n)
            }
            if (2 === arguments.length) {
              for (var r = arguments[0], i = arguments[1], o = r, s = this.getNumGeometries(), a = o.getNumGeometries(), u = 0; u < s && u < a;) {
                var l = this.getGeometryN(u),
                  c = o.getGeometryN(u),
                  h = l.compareToSameClass(c, i);
                if (0 !== h) return h;
                u++
              }
              return u < s ? 1 : u < a ? -1 : 0
            }
          }, e.prototype.apply = function () {
            if (T(arguments[0], ft))
              for (var t = arguments[0], e = 0; e < this._geometries.length; e++) this._geometries[e].apply(t);
            else if (T(arguments[0], kt)) {
              var n = arguments[0];
              if (0 === this._geometries.length) return null;
              for (var r = 0; r < this._geometries.length && (this._geometries[r].apply(n), !n.isDone()); r++);
              n.isGeometryChanged() && this.geometryChanged()
            } else if (T(arguments[0], Bt)) {
              var i = arguments[0];
              i.filter(this);
              for (var o = 0; o < this._geometries.length; o++) this._geometries[o].apply(i)
            } else if (T(arguments[0], lt)) {
              var s = arguments[0];
              s.filter(this);
              for (var a = 0; a < this._geometries.length; a++) this._geometries[a].apply(s)
            }
          }, e.prototype.getBoundary = function () {
            return this.checkNotGeometryCollection(this), et.shouldNeverReachHere(), null
          }, e.prototype.clone = function () {
            var e = t.prototype.clone.call(this);
            e._geometries = new Array(this._geometries.length).fill(null);
            for (var n = 0; n < this._geometries.length; n++) e._geometries[n] = this._geometries[n].clone();
            return e
          }, e.prototype.getGeometryType = function () {
            return "GeometryCollection"
          }, e.prototype.copy = function () {
            for (var t = new Array(this._geometries.length).fill(null), n = 0; n < t.length; n++) t[n] = this._geometries[n].copy();
            return new e(t, this._factory)
          }, e.prototype.isEmpty = function () {
            for (var t = 0; t < this._geometries.length; t++)
              if (!this._geometries[t].isEmpty()) return !1;
            return !0
          }, e.prototype.interfaces_ = function () {
            return []
          }, e.prototype.getClass = function () {
            return e
          }, n.serialVersionUID.get = function () {
            return -0x4f07bcb1f857d800
          }, Object.defineProperties(e, n), e
        }(ct),
        Vt = function (t) {
          function e() {
            t.apply(this, arguments)
          }
          t && (e.__proto__ = t), (e.prototype = Object.create(t && t.prototype)).constructor = e;
          var n = {
            serialVersionUID: {
              configurable: !0
            }
          };
          return e.prototype.getSortIndex = function () {
            return ct.SORTINDEX_MULTILINESTRING
          }, e.prototype.equalsExact = function () {
            if (2 === arguments.length) {
              var e = arguments[0],
                n = arguments[1];
              return !!this.isEquivalentClass(e) && t.prototype.equalsExact.call(this, e, n)
            }
            return t.prototype.equalsExact.apply(this, arguments)
          }, e.prototype.getBoundaryDimension = function () {
            return this.isClosed() ? zt.FALSE : 0
          }, e.prototype.isClosed = function () {
            if (this.isEmpty()) return !1;
            for (var t = 0; t < this._geometries.length; t++)
              if (!this._geometries[t].isClosed()) return !1;
            return !0
          }, e.prototype.getDimension = function () {
            return 1
          }, e.prototype.reverse = function () {
            for (var t = this._geometries.length, e = new Array(t).fill(null), n = 0; n < this._geometries.length; n++) e[t - 1 - n] = this._geometries[n].reverse();
            return this.getFactory().createMultiLineString(e)
          }, e.prototype.getBoundary = function () {
            return new Ut(this).getBoundary()
          }, e.prototype.getGeometryType = function () {
            return "MultiLineString"
          }, e.prototype.copy = function () {
            for (var t = new Array(this._geometries.length).fill(null), n = 0; n < t.length; n++) t[n] = this._geometries[n].copy();
            return new e(t, this._factory)
          }, e.prototype.interfaces_ = function () {
            return [At]
          }, e.prototype.getClass = function () {
            return e
          }, n.serialVersionUID.get = function () {
            return 0x7155d2ab4afa8000
          }, Object.defineProperties(e, n), e
        }(jt),
        Ut = function () {
          if (this._geom = null, this._geomFact = null, this._bnRule = null, this._endpointMap = null, 1 === arguments.length) {
            var t = arguments[0],
              e = gt.MOD2_BOUNDARY_RULE;
            this._geom = t, this._geomFact = t.getFactory(), this._bnRule = e
          } else if (2 === arguments.length) {
            var n = arguments[0],
              r = arguments[1];
            this._geom = n, this._geomFact = n.getFactory(), this._bnRule = r
          }
        };
      Ut.prototype.boundaryMultiLineString = function (t) {
        if (this._geom.isEmpty()) return this.getEmptyMultiPoint();
        var e = this.computeBoundaryCoordinates(t);
        return 1 === e.length ? this._geomFact.createPoint(e[0]) : this._geomFact.createMultiPointFromCoords(e)
      }, Ut.prototype.getBoundary = function () {
        return this._geom instanceof Zt ? this.boundaryLineString(this._geom) : this._geom instanceof Vt ? this.boundaryMultiLineString(this._geom) : this._geom.getBoundary()
      }, Ut.prototype.boundaryLineString = function (t) {
        return this._geom.isEmpty() ? this.getEmptyMultiPoint() : t.isClosed() ? this._bnRule.isInBoundary(2) ? t.getStartPoint() : this._geomFact.createMultiPoint() : this._geomFact.createMultiPoint([t.getStartPoint(), t.getEndPoint()])
      }, Ut.prototype.getEmptyMultiPoint = function () {
        return this._geomFact.createMultiPoint()
      }, Ut.prototype.computeBoundaryCoordinates = function (t) {
        var e = new It;
        this._endpointMap = new h;
        for (var n = 0; n < t.getNumGeometries(); n++) {
          var r = t.getGeometryN(n);
          0 !== r.getNumPoints() && (this.addEndpoint(r.getCoordinateN(0)), this.addEndpoint(r.getCoordinateN(r.getNumPoints() - 1)))
        }
        for (var i = this._endpointMap.entrySet().iterator(); i.hasNext();) {
          var o = i.next(),
            s = o.getValue().count;
          this._bnRule.isInBoundary(s) && e.add(o.getKey())
        }
        return Ct.toCoordinateArray(e)
      }, Ut.prototype.addEndpoint = function (t) {
        var e = this._endpointMap.get(t);
        null === e && (e = new Xt, this._endpointMap.put(t, e)), e.count++
      }, Ut.prototype.interfaces_ = function () {
        return []
      }, Ut.prototype.getClass = function () {
        return Ut
      }, Ut.getBoundary = function () {
        if (1 === arguments.length) {
          var t = arguments[0];
          return new Ut(t).getBoundary()
        }
        if (2 === arguments.length) {
          var e = arguments[0],
            n = arguments[1];
          return new Ut(e, n).getBoundary()
        }
      };
      var Xt = function () {
        this.count = null
      };
      Xt.prototype.interfaces_ = function () {
        return []
      }, Xt.prototype.getClass = function () {
        return Xt
      };
      var Yt = function () {},
        Ht = {
          NEWLINE: {
            configurable: !0
          },
          SIMPLE_ORDINATE_FORMAT: {
            configurable: !0
          }
        };
      Yt.prototype.interfaces_ = function () {
        return []
      }, Yt.prototype.getClass = function () {
        return Yt
      }, Yt.chars = function (t, e) {
        for (var n = new Array(e).fill(null), r = 0; r < e; r++) n[r] = t;
        return String(n)
      }, Yt.getStackTrace = function () {
        if (1 === arguments.length) {
          var t = arguments[0],
            e = new function () {},
            n = new function () {}(e);
          return t.printStackTrace(n), e.toString()
        }
        if (2 === arguments.length) {
          for (var r = arguments[0], i = arguments[1], o = "", s = new function () {}(new function () {}(Yt.getStackTrace(r))), a = 0; a < i; a++) try {
            o += s.readLine() + Yt.NEWLINE
          } catch (t) {
            if (!(t instanceof g)) throw t;
            et.shouldNeverReachHere()
          }
          return o
        }
      }, Yt.split = function (t, e) {
        for (var n = e.length, r = new It, i = "" + t, o = i.indexOf(e); o >= 0;) {
          var s = i.substring(0, o);
          r.add(s), o = (i = i.substring(o + n)).indexOf(e)
        }
        i.length > 0 && r.add(i);
        for (var a = new Array(r.size()).fill(null), u = 0; u < a.length; u++) a[u] = r.get(u);
        return a
      }, Yt.toString = function () {
        if (1 === arguments.length) {
          var t = arguments[0];
          return Yt.SIMPLE_ORDINATE_FORMAT.format(t)
        }
      }, Yt.spaces = function (t) {
        return Yt.chars(" ", t)
      }, Ht.NEWLINE.get = function () {
        return U.getProperty("line.separator")
      }, Ht.SIMPLE_ORDINATE_FORMAT.get = function () {
        return new function () {}("0.#")
      }, Object.defineProperties(Yt, Ht);
      var Wt = function () {};
      Wt.prototype.interfaces_ = function () {
        return []
      }, Wt.prototype.getClass = function () {
        return Wt
      }, Wt.copyCoord = function (t, e, n, r) {
        for (var i = Math.min(t.getDimension(), n.getDimension()), o = 0; o < i; o++) n.setOrdinate(r, o, t.getOrdinate(e, o))
      }, Wt.isRing = function (t) {
        var e = t.size();
        return 0 === e || !(e <= 3) && t.getOrdinate(0, B.X) === t.getOrdinate(e - 1, B.X) && t.getOrdinate(0, B.Y) === t.getOrdinate(e - 1, B.Y)
      }, Wt.isEqual = function (t, e) {
        var n = t.size();
        if (n !== e.size()) return !1;
        for (var r = Math.min(t.getDimension(), e.getDimension()), i = 0; i < n; i++)
          for (var o = 0; o < r; o++) {
            var s = t.getOrdinate(i, o),
              a = e.getOrdinate(i, o);
            if (!(t.getOrdinate(i, o) === e.getOrdinate(i, o) || v.isNaN(s) && v.isNaN(a))) return !1
          }
        return !0
      }, Wt.extend = function (t, e, n) {
        var r = t.create(n, e.getDimension()),
          i = e.size();
        if (Wt.copy(e, 0, r, 0, i), i > 0)
          for (var o = i; o < n; o++) Wt.copy(e, i - 1, r, o, 1);
        return r
      }, Wt.reverse = function (t) {
        for (var e = t.size() - 1, n = Math.trunc(e / 2), r = 0; r <= n; r++) Wt.swap(t, r, e - r)
      }, Wt.swap = function (t, e, n) {
        if (e === n) return null;
        for (var r = 0; r < t.getDimension(); r++) {
          var i = t.getOrdinate(e, r);
          t.setOrdinate(e, r, t.getOrdinate(n, r)), t.setOrdinate(n, r, i)
        }
      }, Wt.copy = function (t, e, n, r, i) {
        for (var o = 0; o < i; o++) Wt.copyCoord(t, e + o, n, r + o)
      }, Wt.toString = function () {
        if (1 === arguments.length) {
          var t = arguments[0],
            e = t.size();
          if (0 === e) return "()";
          var n = t.getDimension(),
            r = new R;
          r.append("(");
          for (var i = 0; i < e; i++) {
            i > 0 && r.append(" ");
            for (var o = 0; o < n; o++) o > 0 && r.append(","), r.append(Yt.toString(t.getOrdinate(i, o)))
          }
          return r.append(")"), r.toString()
        }
      }, Wt.ensureValidRing = function (t, e) {
        var n = e.size();
        return 0 === n ? e : n <= 3 ? Wt.createClosedRing(t, e, 4) : e.getOrdinate(0, B.X) === e.getOrdinate(n - 1, B.X) && e.getOrdinate(0, B.Y) === e.getOrdinate(n - 1, B.Y) ? e : Wt.createClosedRing(t, e, n + 1)
      }, Wt.createClosedRing = function (t, e, n) {
        var r = t.create(n, e.getDimension()),
          i = e.size();
        Wt.copy(e, 0, r, 0, i);
        for (var o = i; o < n; o++) Wt.copy(e, 0, r, o, 1);
        return r
      };
      var Zt = function (t) {
          function e(e, n) {
            t.call(this, n), this._points = null, this.init(e)
          }
          t && (e.__proto__ = t), (e.prototype = Object.create(t && t.prototype)).constructor = e;
          var n = {
            serialVersionUID: {
              configurable: !0
            }
          };
          return e.prototype.computeEnvelopeInternal = function () {
            return this.isEmpty() ? new Y : this._points.expandEnvelope(new Y)
          }, e.prototype.isRing = function () {
            return this.isClosed() && this.isSimple()
          }, e.prototype.getSortIndex = function () {
            return t.SORTINDEX_LINESTRING
          }, e.prototype.getCoordinates = function () {
            return this._points.toCoordinateArray()
          }, e.prototype.equalsExact = function () {
            if (2 === arguments.length) {
              var e = arguments[0],
                n = arguments[1];
              if (!this.isEquivalentClass(e)) return !1;
              var r = e;
              if (this._points.size() !== r._points.size()) return !1;
              for (var i = 0; i < this._points.size(); i++)
                if (!this.equal(this._points.getCoordinate(i), r._points.getCoordinate(i), n)) return !1;
              return !0
            }
            return t.prototype.equalsExact.apply(this, arguments)
          }, e.prototype.normalize = function () {
            for (var t = 0; t < Math.trunc(this._points.size() / 2); t++) {
              var e = this._points.size() - 1 - t;
              if (!this._points.getCoordinate(t).equals(this._points.getCoordinate(e))) return this._points.getCoordinate(t).compareTo(this._points.getCoordinate(e)) > 0 && Wt.reverse(this._points), null
            }
          }, e.prototype.getCoordinate = function () {
            return this.isEmpty() ? null : this._points.getCoordinate(0)
          }, e.prototype.getBoundaryDimension = function () {
            return this.isClosed() ? zt.FALSE : 0
          }, e.prototype.isClosed = function () {
            return !this.isEmpty() && this.getCoordinateN(0).equals2D(this.getCoordinateN(this.getNumPoints() - 1))
          }, e.prototype.getEndPoint = function () {
            return this.isEmpty() ? null : this.getPointN(this.getNumPoints() - 1)
          }, e.prototype.getDimension = function () {
            return 1
          }, e.prototype.getLength = function () {
            return at.computeLength(this._points)
          }, e.prototype.getNumPoints = function () {
            return this._points.size()
          }, e.prototype.reverse = function () {
            var t = this._points.copy();
            return Wt.reverse(t), this.getFactory().createLineString(t)
          }, e.prototype.compareToSameClass = function () {
            if (1 === arguments.length) {
              for (var t = arguments[0], e = 0, n = 0; e < this._points.size() && n < t._points.size();) {
                var r = this._points.getCoordinate(e).compareTo(t._points.getCoordinate(n));
                if (0 !== r) return r;
                e++, n++
              }
              return e < this._points.size() ? 1 : n < t._points.size() ? -1 : 0
            }
            if (2 === arguments.length) {
              var i = arguments[0];
              return arguments[1].compare(this._points, i._points)
            }
          }, e.prototype.apply = function () {
            if (T(arguments[0], ft))
              for (var t = arguments[0], e = 0; e < this._points.size(); e++) t.filter(this._points.getCoordinate(e));
            else if (T(arguments[0], kt)) {
              var n = arguments[0];
              if (0 === this._points.size()) return null;
              for (var r = 0; r < this._points.size() && (n.filter(this._points, r), !n.isDone()); r++);
              n.isGeometryChanged() && this.geometryChanged()
            } else(T(arguments[0], Bt) || T(arguments[0], lt)) && arguments[0].filter(this)
          }, e.prototype.getBoundary = function () {
            return new Ut(this).getBoundary()
          }, e.prototype.isEquivalentClass = function (t) {
            return t instanceof e
          }, e.prototype.clone = function () {
            var e = t.prototype.clone.call(this);
            return e._points = this._points.clone(), e
          }, e.prototype.getCoordinateN = function (t) {
            return this._points.getCoordinate(t)
          }, e.prototype.getGeometryType = function () {
            return "LineString"
          }, e.prototype.copy = function () {
            return new e(this._points.copy(), this._factory)
          }, e.prototype.getCoordinateSequence = function () {
            return this._points
          }, e.prototype.isEmpty = function () {
            return 0 === this._points.size()
          }, e.prototype.init = function (t) {
            if (null === t && (t = this.getFactory().getCoordinateSequenceFactory().create([])), 1 === t.size()) throw new m("Invalid number of points in LineString (found " + t.size() + " - must be 0 or >= 2)");
            this._points = t
          }, e.prototype.isCoordinate = function (t) {
            for (var e = 0; e < this._points.size(); e++)
              if (this._points.getCoordinate(e).equals(t)) return !0;
            return !1
          }, e.prototype.getStartPoint = function () {
            return this.isEmpty() ? null : this.getPointN(0)
          }, e.prototype.getPointN = function (t) {
            return this.getFactory().createPoint(this._points.getCoordinate(t))
          }, e.prototype.interfaces_ = function () {
            return [At]
          }, e.prototype.getClass = function () {
            return e
          }, n.serialVersionUID.get = function () {
            return 0x2b2b51ba435c8e00
          }, Object.defineProperties(e, n), e
        }(ct),
        $t = function () {};
      $t.prototype.interfaces_ = function () {
        return []
      }, $t.prototype.getClass = function () {
        return $t
      };
      var Jt = function (t) {
          function e(e, n) {
            t.call(this, n), this._coordinates = e || null, this.init(this._coordinates)
          }
          t && (e.__proto__ = t), (e.prototype = Object.create(t && t.prototype)).constructor = e;
          var n = {
            serialVersionUID: {
              configurable: !0
            }
          };
          return e.prototype.computeEnvelopeInternal = function () {
            if (this.isEmpty()) return new Y;
            var t = new Y;
            return t.expandToInclude(this._coordinates.getX(0), this._coordinates.getY(0)), t
          }, e.prototype.getSortIndex = function () {
            return t.SORTINDEX_POINT
          }, e.prototype.getCoordinates = function () {
            return this.isEmpty() ? [] : [this.getCoordinate()]
          }, e.prototype.equalsExact = function () {
            if (2 === arguments.length) {
              var e = arguments[0],
                n = arguments[1];
              return !!this.isEquivalentClass(e) && (!(!this.isEmpty() || !e.isEmpty()) || this.isEmpty() === e.isEmpty() && this.equal(e.getCoordinate(), this.getCoordinate(), n))
            }
            return t.prototype.equalsExact.apply(this, arguments)
          }, e.prototype.normalize = function () {}, e.prototype.getCoordinate = function () {
            return 0 !== this._coordinates.size() ? this._coordinates.getCoordinate(0) : null
          }, e.prototype.getBoundaryDimension = function () {
            return zt.FALSE
          }, e.prototype.getDimension = function () {
            return 0
          }, e.prototype.getNumPoints = function () {
            return this.isEmpty() ? 0 : 1
          }, e.prototype.reverse = function () {
            return this.copy()
          }, e.prototype.getX = function () {
            if (null === this.getCoordinate()) throw new Error("getX called on empty Point");
            return this.getCoordinate().x
          }, e.prototype.compareToSameClass = function () {
            if (1 === arguments.length) {
              var t = arguments[0];
              return this.getCoordinate().compareTo(t.getCoordinate())
            }
            if (2 === arguments.length) {
              var e = arguments[0];
              return arguments[1].compare(this._coordinates, e._coordinates)
            }
          }, e.prototype.apply = function () {
            if (T(arguments[0], ft)) {
              var t = arguments[0];
              if (this.isEmpty()) return null;
              t.filter(this.getCoordinate())
            } else if (T(arguments[0], kt)) {
              var e = arguments[0];
              if (this.isEmpty()) return null;
              e.filter(this._coordinates, 0), e.isGeometryChanged() && this.geometryChanged()
            } else(T(arguments[0], Bt) || T(arguments[0], lt)) && arguments[0].filter(this)
          }, e.prototype.getBoundary = function () {
            return this.getFactory().createGeometryCollection(null)
          }, e.prototype.clone = function () {
            var e = t.prototype.clone.call(this);
            return e._coordinates = this._coordinates.clone(), e
          }, e.prototype.getGeometryType = function () {
            return "Point"
          }, e.prototype.copy = function () {
            return new e(this._coordinates.copy(), this._factory)
          }, e.prototype.getCoordinateSequence = function () {
            return this._coordinates
          }, e.prototype.getY = function () {
            if (null === this.getCoordinate()) throw new Error("getY called on empty Point");
            return this.getCoordinate().y
          }, e.prototype.isEmpty = function () {
            return 0 === this._coordinates.size()
          }, e.prototype.init = function (t) {
            null === t && (t = this.getFactory().getCoordinateSequenceFactory().create([])), et.isTrue(t.size() <= 1), this._coordinates = t
          }, e.prototype.isSimple = function () {
            return !0
          }, e.prototype.interfaces_ = function () {
            return [$t]
          }, e.prototype.getClass = function () {
            return e
          }, n.serialVersionUID.get = function () {
            return 0x44077bad161cbc00
          }, Object.defineProperties(e, n), e
        }(ct),
        Kt = function () {};
      Kt.prototype.interfaces_ = function () {
        return []
      }, Kt.prototype.getClass = function () {
        return Kt
      };
      var Qt = function (t) {
          function e(e, n, r) {
            if (t.call(this, r), this._shell = null, this._holes = null, null === e && (e = this.getFactory().createLinearRing()), null === n && (n = []), t.hasNullElements(n)) throw new m("holes must not contain null elements");
            if (e.isEmpty() && t.hasNonEmptyElements(n)) throw new m("shell is empty but holes are not");
            this._shell = e, this._holes = n
          }
          t && (e.__proto__ = t), (e.prototype = Object.create(t && t.prototype)).constructor = e;
          var n = {
            serialVersionUID: {
              configurable: !0
            }
          };
          return e.prototype.computeEnvelopeInternal = function () {
            return this._shell.getEnvelopeInternal()
          }, e.prototype.getSortIndex = function () {
            return t.SORTINDEX_POLYGON
          }, e.prototype.getCoordinates = function () {
            if (this.isEmpty()) return [];
            for (var t = new Array(this.getNumPoints()).fill(null), e = -1, n = this._shell.getCoordinates(), r = 0; r < n.length; r++) t[++e] = n[r];
            for (var i = 0; i < this._holes.length; i++)
              for (var o = this._holes[i].getCoordinates(), s = 0; s < o.length; s++) t[++e] = o[s];
            return t
          }, e.prototype.getArea = function () {
            var t = 0;
            t += Math.abs(at.signedArea(this._shell.getCoordinateSequence()));
            for (var e = 0; e < this._holes.length; e++) t -= Math.abs(at.signedArea(this._holes[e].getCoordinateSequence()));
            return t
          }, e.prototype.isRectangle = function () {
            if (0 !== this.getNumInteriorRing()) return !1;
            if (null === this._shell) return !1;
            if (5 !== this._shell.getNumPoints()) return !1;
            for (var t = this._shell.getCoordinateSequence(), e = this.getEnvelopeInternal(), n = 0; n < 5; n++) {
              var r = t.getX(n);
              if (r !== e.getMinX() && r !== e.getMaxX()) return !1;
              var i = t.getY(n);
              if (i !== e.getMinY() && i !== e.getMaxY()) return !1
            }
            for (var o = t.getX(0), s = t.getY(0), a = 1; a <= 4; a++) {
              var u = t.getX(a),
                l = t.getY(a);
              if (u !== o == (l !== s)) return !1;
              o = u, s = l
            }
            return !0
          }, e.prototype.equalsExact = function () {
            if (2 === arguments.length) {
              var e = arguments[0],
                n = arguments[1];
              if (!this.isEquivalentClass(e)) return !1;
              var r = e,
                i = this._shell,
                o = r._shell;
              if (!i.equalsExact(o, n)) return !1;
              if (this._holes.length !== r._holes.length) return !1;
              for (var s = 0; s < this._holes.length; s++)
                if (!this._holes[s].equalsExact(r._holes[s], n)) return !1;
              return !0
            }
            return t.prototype.equalsExact.apply(this, arguments)
          }, e.prototype.normalize = function () {
            if (0 === arguments.length) {
              this.normalize(this._shell, !0);
              for (var t = 0; t < this._holes.length; t++) this.normalize(this._holes[t], !1);
              Gt.sort(this._holes)
            } else if (2 === arguments.length) {
              var e = arguments[0],
                n = arguments[1];
              if (e.isEmpty()) return null;
              var r = new Array(e.getCoordinates().length - 1).fill(null);
              U.arraycopy(e.getCoordinates(), 0, r, 0, r.length);
              var i = Ct.minCoordinate(e.getCoordinates());
              Ct.scroll(r, i), U.arraycopy(r, 0, e.getCoordinates(), 0, r.length), e.getCoordinates()[r.length] = r[0], at.isCCW(e.getCoordinates()) === n && Ct.reverse(e.getCoordinates())
            }
          }, e.prototype.getCoordinate = function () {
            return this._shell.getCoordinate()
          }, e.prototype.getNumInteriorRing = function () {
            return this._holes.length
          }, e.prototype.getBoundaryDimension = function () {
            return 1
          }, e.prototype.getDimension = function () {
            return 2
          }, e.prototype.getLength = function () {
            var t = 0;
            t += this._shell.getLength();
            for (var e = 0; e < this._holes.length; e++) t += this._holes[e].getLength();
            return t
          }, e.prototype.getNumPoints = function () {
            for (var t = this._shell.getNumPoints(), e = 0; e < this._holes.length; e++) t += this._holes[e].getNumPoints();
            return t
          }, e.prototype.reverse = function () {
            var t = this.copy();
            t._shell = this._shell.copy().reverse(), t._holes = new Array(this._holes.length).fill(null);
            for (var e = 0; e < this._holes.length; e++) t._holes[e] = this._holes[e].copy().reverse();
            return t
          }, e.prototype.convexHull = function () {
            return this.getExteriorRing().convexHull()
          }, e.prototype.compareToSameClass = function () {
            if (1 === arguments.length) {
              var t = arguments[0],
                e = this._shell,
                n = t._shell;
              return e.compareToSameClass(n)
            }
            if (2 === arguments.length) {
              var r = arguments[0],
                i = arguments[1],
                o = r,
                s = this._shell,
                a = o._shell,
                u = s.compareToSameClass(a, i);
              if (0 !== u) return u;
              for (var l = this.getNumInteriorRing(), c = o.getNumInteriorRing(), h = 0; h < l && h < c;) {
                var p = this.getInteriorRingN(h),
                  f = o.getInteriorRingN(h),
                  g = p.compareToSameClass(f, i);
                if (0 !== g) return g;
                h++
              }
              return h < l ? 1 : h < c ? -1 : 0
            }
          }, e.prototype.apply = function (t) {
            if (T(t, ft)) {
              this._shell.apply(t);
              for (var e = 0; e < this._holes.length; e++) this._holes[e].apply(t)
            } else if (T(t, kt)) {
              if (this._shell.apply(t), !t.isDone())
                for (var n = 0; n < this._holes.length && (this._holes[n].apply(t), !t.isDone()); n++);
              t.isGeometryChanged() && this.geometryChanged()
            } else if (T(t, Bt)) t.filter(this);
            else if (T(t, lt)) {
              t.filter(this), this._shell.apply(t);
              for (var r = 0; r < this._holes.length; r++) this._holes[r].apply(t)
            }
          }, e.prototype.getBoundary = function () {
            if (this.isEmpty()) return this.getFactory().createMultiLineString();
            var t = new Array(this._holes.length + 1).fill(null);
            t[0] = this._shell;
            for (var e = 0; e < this._holes.length; e++) t[e + 1] = this._holes[e];
            return t.length <= 1 ? this.getFactory().createLinearRing(t[0].getCoordinateSequence()) : this.getFactory().createMultiLineString(t)
          }, e.prototype.clone = function () {
            var e = t.prototype.clone.call(this);
            e._shell = this._shell.clone(), e._holes = new Array(this._holes.length).fill(null);
            for (var n = 0; n < this._holes.length; n++) e._holes[n] = this._holes[n].clone();
            return e
          }, e.prototype.getGeometryType = function () {
            return "Polygon"
          }, e.prototype.copy = function () {
            for (var t = this._shell.copy(), n = new Array(this._holes.length).fill(null), r = 0; r < n.length; r++) n[r] = this._holes[r].copy();
            return new e(t, n, this._factory)
          }, e.prototype.getExteriorRing = function () {
            return this._shell
          }, e.prototype.isEmpty = function () {
            return this._shell.isEmpty()
          }, e.prototype.getInteriorRingN = function (t) {
            return this._holes[t]
          }, e.prototype.interfaces_ = function () {
            return [Kt]
          }, e.prototype.getClass = function () {
            return e
          }, n.serialVersionUID.get = function () {
            return -0x307ffefd8dc97200
          }, Object.defineProperties(e, n), e
        }(ct),
        te = function (t) {
          function e() {
            t.apply(this, arguments)
          }
          t && (e.__proto__ = t), (e.prototype = Object.create(t && t.prototype)).constructor = e;
          var n = {
            serialVersionUID: {
              configurable: !0
            }
          };
          return e.prototype.getSortIndex = function () {
            return ct.SORTINDEX_MULTIPOINT
          }, e.prototype.isValid = function () {
            return !0
          }, e.prototype.equalsExact = function () {
            if (2 === arguments.length) {
              var e = arguments[0],
                n = arguments[1];
              return !!this.isEquivalentClass(e) && t.prototype.equalsExact.call(this, e, n)
            }
            return t.prototype.equalsExact.apply(this, arguments)
          }, e.prototype.getCoordinate = function () {
            if (1 === arguments.length) {
              var e = arguments[0];
              return this._geometries[e].getCoordinate()
            }
            return t.prototype.getCoordinate.apply(this, arguments)
          }, e.prototype.getBoundaryDimension = function () {
            return zt.FALSE
          }, e.prototype.getDimension = function () {
            return 0
          }, e.prototype.getBoundary = function () {
            return this.getFactory().createGeometryCollection(null)
          }, e.prototype.getGeometryType = function () {
            return "MultiPoint"
          }, e.prototype.copy = function () {
            for (var t = new Array(this._geometries.length).fill(null), n = 0; n < t.length; n++) t[n] = this._geometries[n].copy();
            return new e(t, this._factory)
          }, e.prototype.interfaces_ = function () {
            return [$t]
          }, e.prototype.getClass = function () {
            return e
          }, n.serialVersionUID.get = function () {
            return -0x6fb1ed4162e0fc00
          }, Object.defineProperties(e, n), e
        }(jt),
        ee = function (t) {
          function e(e, n) {
            e instanceof N && n instanceof _e && (e = n.getCoordinateSequenceFactory().create(e)), t.call(this, e, n), this.validateConstruction()
          }
          t && (e.__proto__ = t), (e.prototype = Object.create(t && t.prototype)).constructor = e;
          var n = {
            MINIMUM_VALID_SIZE: {
              configurable: !0
            },
            serialVersionUID: {
              configurable: !0
            }
          };
          return e.prototype.getSortIndex = function () {
            return ct.SORTINDEX_LINEARRING
          }, e.prototype.getBoundaryDimension = function () {
            return zt.FALSE
          }, e.prototype.isClosed = function () {
            return !!this.isEmpty() || t.prototype.isClosed.call(this)
          }, e.prototype.reverse = function () {
            var t = this._points.copy();
            return Wt.reverse(t), this.getFactory().createLinearRing(t)
          }, e.prototype.validateConstruction = function () {
            if (!this.isEmpty() && !t.prototype.isClosed.call(this)) throw new m("Points of LinearRing do not form a closed linestring");
            if (this.getCoordinateSequence().size() >= 1 && this.getCoordinateSequence().size() < e.MINIMUM_VALID_SIZE) throw new m("Invalid number of points in LinearRing (found " + this.getCoordinateSequence().size() + " - must be 0 or >= 4)")
          }, e.prototype.getGeometryType = function () {
            return "LinearRing"
          }, e.prototype.copy = function () {
            return new e(this._points.copy(), this._factory)
          }, e.prototype.interfaces_ = function () {
            return []
          }, e.prototype.getClass = function () {
            return e
          }, n.MINIMUM_VALID_SIZE.get = function () {
            return 4
          }, n.serialVersionUID.get = function () {
            return -0x3b229e262367a600
          }, Object.defineProperties(e, n), e
        }(Zt),
        ne = function (t) {
          function e() {
            t.apply(this, arguments)
          }
          t && (e.__proto__ = t), (e.prototype = Object.create(t && t.prototype)).constructor = e;
          var n = {
            serialVersionUID: {
              configurable: !0
            }
          };
          return e.prototype.getSortIndex = function () {
            return ct.SORTINDEX_MULTIPOLYGON
          }, e.prototype.equalsExact = function () {
            if (2 === arguments.length) {
              var e = arguments[0],
                n = arguments[1];
              return !!this.isEquivalentClass(e) && t.prototype.equalsExact.call(this, e, n)
            }
            return t.prototype.equalsExact.apply(this, arguments)
          }, e.prototype.getBoundaryDimension = function () {
            return 1
          }, e.prototype.getDimension = function () {
            return 2
          }, e.prototype.reverse = function () {
            for (var t = this._geometries.length, e = new Array(t).fill(null), n = 0; n < this._geometries.length; n++) e[n] = this._geometries[n].reverse();
            return this.getFactory().createMultiPolygon(e)
          }, e.prototype.getBoundary = function () {
            if (this.isEmpty()) return this.getFactory().createMultiLineString();
            for (var t = new It, e = 0; e < this._geometries.length; e++)
              for (var n = this._geometries[e].getBoundary(), r = 0; r < n.getNumGeometries(); r++) t.add(n.getGeometryN(r));
            var i = new Array(t.size()).fill(null);
            return this.getFactory().createMultiLineString(t.toArray(i))
          }, e.prototype.getGeometryType = function () {
            return "MultiPolygon"
          }, e.prototype.copy = function () {
            for (var t = new Array(this._geometries.length).fill(null), n = 0; n < t.length; n++) t[n] = this._geometries[n].copy();
            return new e(t, this._factory)
          }, e.prototype.interfaces_ = function () {
            return [Kt]
          }, e.prototype.getClass = function () {
            return e
          }, n.serialVersionUID.get = function () {
            return -0x7a5aa1369171980
          }, Object.defineProperties(e, n), e
        }(jt),
        re = function (t) {
          this._factory = t || null, this._isUserDataCopied = !1
        },
        ie = {
          NoOpGeometryOperation: {
            configurable: !0
          },
          CoordinateOperation: {
            configurable: !0
          },
          CoordinateSequenceOperation: {
            configurable: !0
          }
        };
      re.prototype.setCopyUserData = function (t) {
        this._isUserDataCopied = t
      }, re.prototype.edit = function (t, e) {
        if (null === t) return null;
        var n = this.editInternal(t, e);
        return this._isUserDataCopied && n.setUserData(t.getUserData()), n
      }, re.prototype.editInternal = function (t, e) {
        return null === this._factory && (this._factory = t.getFactory()), t instanceof jt ? this.editGeometryCollection(t, e) : t instanceof Qt ? this.editPolygon(t, e) : t instanceof Jt || t instanceof Zt ? e.edit(t, this._factory) : (et.shouldNeverReachHere("Unsupported Geometry class: " + t.getClass().getName()), null)
      }, re.prototype.editGeometryCollection = function (t, e) {
        for (var n = e.edit(t, this._factory), r = new It, i = 0; i < n.getNumGeometries(); i++) {
          var o = this.edit(n.getGeometryN(i), e);
          null === o || o.isEmpty() || r.add(o)
        }
        return n.getClass() === te ? this._factory.createMultiPoint(r.toArray([])) : n.getClass() === Vt ? this._factory.createMultiLineString(r.toArray([])) : n.getClass() === ne ? this._factory.createMultiPolygon(r.toArray([])) : this._factory.createGeometryCollection(r.toArray([]))
      }, re.prototype.editPolygon = function (t, e) {
        var n = e.edit(t, this._factory);
        if (null === n && (n = this._factory.createPolygon(null)), n.isEmpty()) return n;
        var r = this.edit(n.getExteriorRing(), e);
        if (null === r || r.isEmpty()) return this._factory.createPolygon();
        for (var i = new It, o = 0; o < n.getNumInteriorRing(); o++) {
          var s = this.edit(n.getInteriorRingN(o), e);
          null === s || s.isEmpty() || i.add(s)
        }
        return this._factory.createPolygon(r, i.toArray([]))
      }, re.prototype.interfaces_ = function () {
        return []
      }, re.prototype.getClass = function () {
        return re
      }, re.GeometryEditorOperation = function () {}, ie.NoOpGeometryOperation.get = function () {
        return oe
      }, ie.CoordinateOperation.get = function () {
        return se
      }, ie.CoordinateSequenceOperation.get = function () {
        return ae
      }, Object.defineProperties(re, ie);
      var oe = function () {};
      oe.prototype.edit = function (t, e) {
        return t
      }, oe.prototype.interfaces_ = function () {
        return [re.GeometryEditorOperation]
      }, oe.prototype.getClass = function () {
        return oe
      };
      var se = function () {};
      se.prototype.edit = function (t, e) {
        var n = this.editCoordinates(t.getCoordinates(), t);
        return null === n ? t : t instanceof ee ? e.createLinearRing(n) : t instanceof Zt ? e.createLineString(n) : t instanceof Jt ? n.length > 0 ? e.createPoint(n[0]) : e.createPoint() : t
      }, se.prototype.interfaces_ = function () {
        return [re.GeometryEditorOperation]
      }, se.prototype.getClass = function () {
        return se
      };
      var ae = function () {};
      ae.prototype.edit = function (t, e) {
        return t instanceof ee ? e.createLinearRing(this.edit(t.getCoordinateSequence(), t)) : t instanceof Zt ? e.createLineString(this.edit(t.getCoordinateSequence(), t)) : t instanceof Jt ? e.createPoint(this.edit(t.getCoordinateSequence(), t)) : t
      }, ae.prototype.interfaces_ = function () {
        return [re.GeometryEditorOperation]
      }, ae.prototype.getClass = function () {
        return ae
      };
      var ue = function () {
          if (this._dimension = 3, this._coordinates = null, 1 === arguments.length) {
            if (arguments[0] instanceof Array) this._coordinates = arguments[0], this._dimension = 3;
            else if (Number.isInteger(arguments[0])) {
              var t = arguments[0];
              this._coordinates = new Array(t).fill(null);
              for (var e = 0; e < t; e++) this._coordinates[e] = new N
            } else if (T(arguments[0], B)) {
              var n = arguments[0];
              if (null === n) return this._coordinates = new Array(0).fill(null), null;
              this._dimension = n.getDimension(), this._coordinates = new Array(n.size()).fill(null);
              for (var r = 0; r < this._coordinates.length; r++) this._coordinates[r] = n.getCoordinateCopy(r)
            }
          } else if (2 === arguments.length)
            if (arguments[0] instanceof Array && Number.isInteger(arguments[1])) {
              var i = arguments[0],
                o = arguments[1];
              this._coordinates = i, this._dimension = o, null === i && (this._coordinates = new Array(0).fill(null))
            } else if (Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
            var s = arguments[0],
              a = arguments[1];
            this._coordinates = new Array(s).fill(null), this._dimension = a;
            for (var u = 0; u < s; u++) this._coordinates[u] = new N
          }
        },
        le = {
          serialVersionUID: {
            configurable: !0
          }
        };
      ue.prototype.setOrdinate = function (t, e, n) {
        switch (e) {
          case B.X:
            this._coordinates[t].x = n;
            break;
          case B.Y:
            this._coordinates[t].y = n;
            break;
          case B.Z:
            this._coordinates[t].z = n;
            break;
          default:
            throw new m("invalid ordinateIndex")
        }
      }, ue.prototype.size = function () {
        return this._coordinates.length
      }, ue.prototype.getOrdinate = function (t, e) {
        switch (e) {
          case B.X:
            return this._coordinates[t].x;
          case B.Y:
            return this._coordinates[t].y;
          case B.Z:
            return this._coordinates[t].z
        }
        return v.NaN
      }, ue.prototype.getCoordinate = function () {
        if (1 === arguments.length) {
          var t = arguments[0];
          return this._coordinates[t]
        }
        if (2 === arguments.length) {
          var e = arguments[0],
            n = arguments[1];
          n.x = this._coordinates[e].x, n.y = this._coordinates[e].y, n.z = this._coordinates[e].z
        }
      }, ue.prototype.getCoordinateCopy = function (t) {
        return new N(this._coordinates[t])
      }, ue.prototype.getDimension = function () {
        return this._dimension
      }, ue.prototype.getX = function (t) {
        return this._coordinates[t].x
      }, ue.prototype.clone = function () {
        for (var t = new Array(this.size()).fill(null), e = 0; e < this._coordinates.length; e++) t[e] = this._coordinates[e].clone();
        return new ue(t, this._dimension)
      }, ue.prototype.expandEnvelope = function (t) {
        for (var e = 0; e < this._coordinates.length; e++) t.expandToInclude(this._coordinates[e]);
        return t
      }, ue.prototype.copy = function () {
        for (var t = new Array(this.size()).fill(null), e = 0; e < this._coordinates.length; e++) t[e] = this._coordinates[e].copy();
        return new ue(t, this._dimension)
      }, ue.prototype.toString = function () {
        if (this._coordinates.length > 0) {
          var t = new R(17 * this._coordinates.length);
          t.append("("), t.append(this._coordinates[0]);
          for (var e = 1; e < this._coordinates.length; e++) t.append(", "), t.append(this._coordinates[e]);
          return t.append(")"), t.toString()
        }
        return "()"
      }, ue.prototype.getY = function (t) {
        return this._coordinates[t].y
      }, ue.prototype.toCoordinateArray = function () {
        return this._coordinates
      }, ue.prototype.interfaces_ = function () {
        return [B, e]
      }, ue.prototype.getClass = function () {
        return ue
      }, le.serialVersionUID.get = function () {
        return -0xcb44a778db18e00
      }, Object.defineProperties(ue, le);
      var ce = function () {},
        he = {
          serialVersionUID: {
            configurable: !0
          },
          instanceObject: {
            configurable: !0
          }
        };
      ce.prototype.readResolve = function () {
        return ce.instance()
      }, ce.prototype.create = function () {
        if (1 === arguments.length) {
          if (arguments[0] instanceof Array) {
            var t = arguments[0];
            return new ue(t)
          }
          if (T(arguments[0], B)) {
            var e = arguments[0];
            return new ue(e)
          }
        } else if (2 === arguments.length) {
          var n = arguments[0],
            r = arguments[1];
          return r > 3 && (r = 3), r < 2 ? new ue(n) : new ue(n, r)
        }
      }, ce.prototype.interfaces_ = function () {
        return [S, e]
      }, ce.prototype.getClass = function () {
        return ce
      }, ce.instance = function () {
        return ce.instanceObject
      }, he.serialVersionUID.get = function () {
        return -0x38e49fa6cf6f2e00
      }, he.instanceObject.get = function () {
        return new ce
      }, Object.defineProperties(ce, he);
      var pe = function (t) {
          function e() {
            t.call(this), this.map_ = new Map
          }
          return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.get = function (t) {
            return this.map_.get(t) || null
          }, e.prototype.put = function (t, e) {
            return this.map_.set(t, e), e
          }, e.prototype.values = function () {
            for (var t = new It, e = this.map_.values(), n = e.next(); !n.done;) t.add(n.value), n = e.next();
            return t
          }, e.prototype.entrySet = function () {
            var t = new Pt;
            return this.map_.entries().forEach((function (e) {
              return t.add(e)
            })), t
          }, e.prototype.size = function () {
            return this.map_.size()
          }, e
        }(Tt),
        fe = function t() {
          if (this._modelType = null, this._scale = null, 0 === arguments.length) this._modelType = t.FLOATING;
          else if (1 === arguments.length)
            if (arguments[0] instanceof de) {
              var e = arguments[0];
              this._modelType = e, e === t.FIXED && this.setScale(1)
            } else if ("number" == typeof arguments[0]) {
            var n = arguments[0];
            this._modelType = t.FIXED, this.setScale(n)
          } else if (arguments[0] instanceof t) {
            var r = arguments[0];
            this._modelType = r._modelType, this._scale = r._scale
          }
        },
        ge = {
          serialVersionUID: {
            configurable: !0
          },
          maximumPreciseValue: {
            configurable: !0
          }
        };
      fe.prototype.equals = function (t) {
        if (!(t instanceof fe)) return !1;
        var e = t;
        return this._modelType === e._modelType && this._scale === e._scale
      }, fe.prototype.compareTo = function (t) {
        var e = t,
          n = this.getMaximumSignificantDigits(),
          r = e.getMaximumSignificantDigits();
        return new D(n).compareTo(new D(r))
      }, fe.prototype.getScale = function () {
        return this._scale
      }, fe.prototype.isFloating = function () {
        return this._modelType === fe.FLOATING || this._modelType === fe.FLOATING_SINGLE
      }, fe.prototype.getType = function () {
        return this._modelType
      }, fe.prototype.toString = function () {
        var t = "UNKNOWN";
        return this._modelType === fe.FLOATING ? t = "Floating" : this._modelType === fe.FLOATING_SINGLE ? t = "Floating-Single" : this._modelType === fe.FIXED && (t = "Fixed (Scale=" + this.getScale() + ")"), t
      }, fe.prototype.makePrecise = function () {
        if ("number" == typeof arguments[0]) {
          var t = arguments[0];
          return v.isNaN(t) || this._modelType === fe.FLOATING_SINGLE ? t : this._modelType === fe.FIXED ? Math.round(t * this._scale) / this._scale : t
        }
        if (arguments[0] instanceof N) {
          var e = arguments[0];
          if (this._modelType === fe.FLOATING) return null;
          e.x = this.makePrecise(e.x), e.y = this.makePrecise(e.y)
        }
      }, fe.prototype.getMaximumSignificantDigits = function () {
        var t = 16;
        return this._modelType === fe.FLOATING ? t = 16 : this._modelType === fe.FLOATING_SINGLE ? t = 6 : this._modelType === fe.FIXED && (t = 1 + Math.trunc(Math.ceil(Math.log(this.getScale()) / Math.log(10)))), t
      }, fe.prototype.setScale = function (t) {
        this._scale = Math.abs(t)
      }, fe.prototype.interfaces_ = function () {
        return [e, E]
      }, fe.prototype.getClass = function () {
        return fe
      }, fe.mostPrecise = function (t, e) {
        return t.compareTo(e) >= 0 ? t : e
      }, ge.serialVersionUID.get = function () {
        return 0x6bee6404e9a25c00
      }, ge.maximumPreciseValue.get = function () {
        return 9007199254740992
      }, Object.defineProperties(fe, ge);
      var de = function t(e) {
          this._name = e || null, t.nameToTypeMap.put(e, this)
        },
        ye = {
          serialVersionUID: {
            configurable: !0
          },
          nameToTypeMap: {
            configurable: !0
          }
        };
      de.prototype.readResolve = function () {
        return de.nameToTypeMap.get(this._name)
      }, de.prototype.toString = function () {
        return this._name
      }, de.prototype.interfaces_ = function () {
        return [e]
      }, de.prototype.getClass = function () {
        return de
      }, ye.serialVersionUID.get = function () {
        return -552860263173159e4
      }, ye.nameToTypeMap.get = function () {
        return new pe
      }, Object.defineProperties(de, ye), fe.Type = de, fe.FIXED = new de("FIXED"), fe.FLOATING = new de("FLOATING"), fe.FLOATING_SINGLE = new de("FLOATING SINGLE");
      var _e = function t() {
          this._precisionModel = new fe, this._SRID = 0, this._coordinateSequenceFactory = t.getDefaultCoordinateSequenceFactory(), 0 === arguments.length || (1 === arguments.length ? T(arguments[0], S) ? this._coordinateSequenceFactory = arguments[0] : arguments[0] instanceof fe && (this._precisionModel = arguments[0]) : 2 === arguments.length ? (this._precisionModel = arguments[0], this._SRID = arguments[1]) : 3 === arguments.length && (this._precisionModel = arguments[0], this._SRID = arguments[1], this._coordinateSequenceFactory = arguments[2]))
        },
        me = {
          serialVersionUID: {
            configurable: !0
          }
        };
      _e.prototype.toGeometry = function (t) {
        return t.isNull() ? this.createPoint(null) : t.getMinX() === t.getMaxX() && t.getMinY() === t.getMaxY() ? this.createPoint(new N(t.getMinX(), t.getMinY())) : t.getMinX() === t.getMaxX() || t.getMinY() === t.getMaxY() ? this.createLineString([new N(t.getMinX(), t.getMinY()), new N(t.getMaxX(), t.getMaxY())]) : this.createPolygon(this.createLinearRing([new N(t.getMinX(), t.getMinY()), new N(t.getMinX(), t.getMaxY()), new N(t.getMaxX(), t.getMaxY()), new N(t.getMaxX(), t.getMinY()), new N(t.getMinX(), t.getMinY())]), null)
      }, _e.prototype.createLineString = function (t) {
        return t ? t instanceof Array ? new Zt(this.getCoordinateSequenceFactory().create(t), this) : T(t, B) ? new Zt(t, this) : void 0 : new Zt(this.getCoordinateSequenceFactory().create([]), this)
      }, _e.prototype.createMultiLineString = function () {
        if (0 === arguments.length) return new Vt(null, this);
        if (1 === arguments.length) {
          var t = arguments[0];
          return new Vt(t, this)
        }
      }, _e.prototype.buildGeometry = function (t) {
        for (var e = null, n = !1, r = !1, i = t.iterator(); i.hasNext();) {
          var o = i.next(),
            s = o.getClass();
          null === e && (e = s), s !== e && (n = !0), o.isGeometryCollectionOrDerived() && (r = !0)
        }
        if (null === e) return this.createGeometryCollection();
        if (n || r) return this.createGeometryCollection(_e.toGeometryArray(t));
        var a = t.iterator().next();
        if (t.size() > 1) {
          if (a instanceof Qt) return this.createMultiPolygon(_e.toPolygonArray(t));
          if (a instanceof Zt) return this.createMultiLineString(_e.toLineStringArray(t));
          if (a instanceof Jt) return this.createMultiPoint(_e.toPointArray(t));
          et.shouldNeverReachHere("Unhandled class: " + a.getClass().getName())
        }
        return a
      }, _e.prototype.createMultiPointFromCoords = function (t) {
        return this.createMultiPoint(null !== t ? this.getCoordinateSequenceFactory().create(t) : null)
      }, _e.prototype.createPoint = function () {
        if (0 === arguments.length) return this.createPoint(this.getCoordinateSequenceFactory().create([]));
        if (1 === arguments.length) {
          if (arguments[0] instanceof N) {
            var t = arguments[0];
            return this.createPoint(null !== t ? this.getCoordinateSequenceFactory().create([t]) : null)
          }
          if (T(arguments[0], B)) {
            var e = arguments[0];
            return new Jt(e, this)
          }
        }
      }, _e.prototype.getCoordinateSequenceFactory = function () {
        return this._coordinateSequenceFactory
      }, _e.prototype.createPolygon = function () {
        if (0 === arguments.length) return new Qt(null, null, this);
        if (1 === arguments.length) {
          if (T(arguments[0], B)) {
            var t = arguments[0];
            return this.createPolygon(this.createLinearRing(t))
          }
          if (arguments[0] instanceof Array) {
            var e = arguments[0];
            return this.createPolygon(this.createLinearRing(e))
          }
          if (arguments[0] instanceof ee) {
            var n = arguments[0];
            return this.createPolygon(n, null)
          }
        } else if (2 === arguments.length) {
          var r = arguments[0],
            i = arguments[1];
          return new Qt(r, i, this)
        }
      }, _e.prototype.getSRID = function () {
        return this._SRID
      }, _e.prototype.createGeometryCollection = function () {
        if (0 === arguments.length) return new jt(null, this);
        if (1 === arguments.length) {
          var t = arguments[0];
          return new jt(t, this)
        }
      }, _e.prototype.createGeometry = function (t) {
        return new re(this).edit(t, {
          edit: function () {
            if (2 === arguments.length) {
              var t = arguments[0];
              return this._coordinateSequenceFactory.create(t)
            }
          }
        })
      }, _e.prototype.getPrecisionModel = function () {
        return this._precisionModel
      }, _e.prototype.createLinearRing = function () {
        if (0 === arguments.length) return this.createLinearRing(this.getCoordinateSequenceFactory().create([]));
        if (1 === arguments.length) {
          if (arguments[0] instanceof Array) {
            var t = arguments[0];
            return this.createLinearRing(null !== t ? this.getCoordinateSequenceFactory().create(t) : null)
          }
          if (T(arguments[0], B)) {
            var e = arguments[0];
            return new ee(e, this)
          }
        }
      }, _e.prototype.createMultiPolygon = function () {
        if (0 === arguments.length) return new ne(null, this);
        if (1 === arguments.length) {
          var t = arguments[0];
          return new ne(t, this)
        }
      }, _e.prototype.createMultiPoint = function () {
        if (0 === arguments.length) return new te(null, this);
        if (1 === arguments.length) {
          if (arguments[0] instanceof Array) {
            var t = arguments[0];
            return new te(t, this)
          }
          if (arguments[0] instanceof Array) {
            var e = arguments[0];
            return this.createMultiPoint(null !== e ? this.getCoordinateSequenceFactory().create(e) : null)
          }
          if (T(arguments[0], B)) {
            var n = arguments[0];
            if (null === n) return this.createMultiPoint(new Array(0).fill(null));
            for (var r = new Array(n.size()).fill(null), i = 0; i < n.size(); i++) {
              var o = this.getCoordinateSequenceFactory().create(1, n.getDimension());
              Wt.copy(n, i, o, 0, 1), r[i] = this.createPoint(o)
            }
            return this.createMultiPoint(r)
          }
        }
      }, _e.prototype.interfaces_ = function () {
        return [e]
      }, _e.prototype.getClass = function () {
        return _e
      }, _e.toMultiPolygonArray = function (t) {
        var e = new Array(t.size()).fill(null);
        return t.toArray(e)
      }, _e.toGeometryArray = function (t) {
        if (null === t) return null;
        var e = new Array(t.size()).fill(null);
        return t.toArray(e)
      }, _e.getDefaultCoordinateSequenceFactory = function () {
        return ce.instance()
      }, _e.toMultiLineStringArray = function (t) {
        var e = new Array(t.size()).fill(null);
        return t.toArray(e)
      }, _e.toLineStringArray = function (t) {
        var e = new Array(t.size()).fill(null);
        return t.toArray(e)
      }, _e.toMultiPointArray = function (t) {
        var e = new Array(t.size()).fill(null);
        return t.toArray(e)
      }, _e.toLinearRingArray = function (t) {
        var e = new Array(t.size()).fill(null);
        return t.toArray(e)
      }, _e.toPointArray = function (t) {
        var e = new Array(t.size()).fill(null);
        return t.toArray(e)
      }, _e.toPolygonArray = function (t) {
        var e = new Array(t.size()).fill(null);
        return t.toArray(e)
      }, _e.createPointFromInternalCoord = function (t, e) {
        return e.getPrecisionModel().makePrecise(t), e.getFactory().createPoint(t)
      }, me.serialVersionUID.get = function () {
        return -0x5ea75f2051eeb400
      }, Object.defineProperties(_e, me);
      var ve = ["Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon"],
        xe = function (t) {
          this.geometryFactory = t || new _e
        };
      xe.prototype.read = function (t) {
        var e, n = (e = "string" == typeof t ? JSON.parse(t) : t).type;
        if (!Ee[n]) throw new Error("Unknown GeoJSON type: " + e.type);
        return -1 !== ve.indexOf(n) ? Ee[n].apply(this, [e.coordinates]) : "GeometryCollection" === n ? Ee[n].apply(this, [e.geometries]) : Ee[n].apply(this, [e])
      }, xe.prototype.write = function (t) {
        var e = t.getGeometryType();
        if (!be[e]) throw new Error("Geometry is not supported");
        return be[e].apply(this, [t])
      };
      var Ee = {
          Feature: function (t) {
            var e = {};
            for (var n in t) e[n] = t[n];
            if (t.geometry) {
              var r = t.geometry.type;
              if (!Ee[r]) throw new Error("Unknown GeoJSON type: " + t.type);
              e.geometry = this.read(t.geometry)
            }
            return t.bbox && (e.bbox = Ee.bbox.apply(this, [t.bbox])), e
          },
          FeatureCollection: function (t) {
            var e = {};
            if (t.features) {
              e.features = [];
              for (var n = 0; n < t.features.length; ++n) e.features.push(this.read(t.features[n]))
            }
            return t.bbox && (e.bbox = this.parse.bbox.apply(this, [t.bbox])), e
          },
          coordinates: function (t) {
            for (var e = [], n = 0; n < t.length; ++n) {
              var r = t[n];
              e.push(new N(r[0], r[1]))
            }
            return e
          },
          bbox: function (t) {
            return this.geometryFactory.createLinearRing([new N(t[0], t[1]), new N(t[2], t[1]), new N(t[2], t[3]), new N(t[0], t[3]), new N(t[0], t[1])])
          },
          Point: function (t) {
            var e = new N(t[0], t[1]);
            return this.geometryFactory.createPoint(e)
          },
          MultiPoint: function (t) {
            for (var e = [], n = 0; n < t.length; ++n) e.push(Ee.Point.apply(this, [t[n]]));
            return this.geometryFactory.createMultiPoint(e)
          },
          LineString: function (t) {
            var e = Ee.coordinates.apply(this, [t]);
            return this.geometryFactory.createLineString(e)
          },
          MultiLineString: function (t) {
            for (var e = [], n = 0; n < t.length; ++n) e.push(Ee.LineString.apply(this, [t[n]]));
            return this.geometryFactory.createMultiLineString(e)
          },
          Polygon: function (t) {
            for (var e = Ee.coordinates.apply(this, [t[0]]), n = this.geometryFactory.createLinearRing(e), r = [], i = 1; i < t.length; ++i) {
              var o = t[i],
                s = Ee.coordinates.apply(this, [o]),
                a = this.geometryFactory.createLinearRing(s);
              r.push(a)
            }
            return this.geometryFactory.createPolygon(n, r)
          },
          MultiPolygon: function (t) {
            for (var e = [], n = 0; n < t.length; ++n) {
              var r = t[n];
              e.push(Ee.Polygon.apply(this, [r]))
            }
            return this.geometryFactory.createMultiPolygon(e)
          },
          GeometryCollection: function (t) {
            for (var e = [], n = 0; n < t.length; ++n) {
              var r = t[n];
              e.push(this.read(r))
            }
            return this.geometryFactory.createGeometryCollection(e)
          }
        },
        be = {
          coordinate: function (t) {
            return [t.x, t.y]
          },
          Point: function (t) {
            return {
              type: "Point",
              coordinates: be.coordinate.apply(this, [t.getCoordinate()])
            }
          },
          MultiPoint: function (t) {
            for (var e = [], n = 0; n < t._geometries.length; ++n) {
              var r = t._geometries[n],
                i = be.Point.apply(this, [r]);
              e.push(i.coordinates)
            }
            return {
              type: "MultiPoint",
              coordinates: e
            }
          },
          LineString: function (t) {
            for (var e = [], n = t.getCoordinates(), r = 0; r < n.length; ++r) {
              var i = n[r];
              e.push(be.coordinate.apply(this, [i]))
            }
            return {
              type: "LineString",
              coordinates: e
            }
          },
          MultiLineString: function (t) {
            for (var e = [], n = 0; n < t._geometries.length; ++n) {
              var r = t._geometries[n],
                i = be.LineString.apply(this, [r]);
              e.push(i.coordinates)
            }
            return {
              type: "MultiLineString",
              coordinates: e
            }
          },
          Polygon: function (t) {
            var e = [],
              n = be.LineString.apply(this, [t._shell]);
            e.push(n.coordinates);
            for (var r = 0; r < t._holes.length; ++r) {
              var i = t._holes[r],
                o = be.LineString.apply(this, [i]);
              e.push(o.coordinates)
            }
            return {
              type: "Polygon",
              coordinates: e
            }
          },
          MultiPolygon: function (t) {
            for (var e = [], n = 0; n < t._geometries.length; ++n) {
              var r = t._geometries[n],
                i = be.Polygon.apply(this, [r]);
              e.push(i.coordinates)
            }
            return {
              type: "MultiPolygon",
              coordinates: e
            }
          },
          GeometryCollection: function (t) {
            for (var e = [], n = 0; n < t._geometries.length; ++n) {
              var r = t._geometries[n],
                i = r.getGeometryType();
              e.push(be[i].apply(this, [r]))
            }
            return {
              type: "GeometryCollection",
              geometries: e
            }
          }
        },
        Ie = function (t) {
          this.geometryFactory = t || new _e, this.precisionModel = this.geometryFactory.getPrecisionModel(), this.parser = new xe(this.geometryFactory)
        };
      Ie.prototype.read = function (t) {
        var e = this.parser.read(t);
        return this.precisionModel.getType() === fe.FIXED && this.reducePrecision(e), e
      }, Ie.prototype.reducePrecision = function (t) {
        var e, n;
        if (t.coordinate) this.precisionModel.makePrecise(t.coordinate);
        else if (t.points)
          for (e = 0, n = t.points.length; e < n; e++) this.precisionModel.makePrecise(t.points[e]);
        else if (t.geometries)
          for (e = 0, n = t.geometries.length; e < n; e++) this.reducePrecision(t.geometries[e])
      };
      var Ne = function () {
        this.parser = new xe(this.geometryFactory)
      };
      Ne.prototype.write = function (t) {
        return this.parser.write(t)
      };
      var we = function () {},
        Ce = {
          ON: {
            configurable: !0
          },
          LEFT: {
            configurable: !0
          },
          RIGHT: {
            configurable: !0
          }
        };
      we.prototype.interfaces_ = function () {
        return []
      }, we.prototype.getClass = function () {
        return we
      }, we.opposite = function (t) {
        return t === we.LEFT ? we.RIGHT : t === we.RIGHT ? we.LEFT : t
      }, Ce.ON.get = function () {
        return 0
      }, Ce.LEFT.get = function () {
        return 1
      }, Ce.RIGHT.get = function () {
        return 2
      }, Object.defineProperties(we, Ce), (d.prototype = new Error).name = "EmptyStackException", (y.prototype = new bt).add = function (t) {
        return this.array_.push(t), !0
      }, y.prototype.get = function (t) {
        if (t < 0 || t >= this.size()) throw new Error;
        return this.array_[t]
      }, y.prototype.push = function (t) {
        return this.array_.push(t), t
      }, y.prototype.pop = function (t) {
        if (0 === this.array_.length) throw new d;
        return this.array_.pop()
      }, y.prototype.peek = function () {
        if (0 === this.array_.length) throw new d;
        return this.array_[this.array_.length - 1]
      }, y.prototype.empty = function () {
        return 0 === this.array_.length
      }, y.prototype.isEmpty = function () {
        return this.empty()
      }, y.prototype.search = function (t) {
        return this.array_.indexOf(t)
      }, y.prototype.size = function () {
        return this.array_.length
      }, y.prototype.toArray = function () {
        for (var t = [], e = 0, n = this.array_.length; e < n; e++) t.push(this.array_[e]);
        return t
      };
      var Se = function () {
        this._minIndex = -1, this._minCoord = null, this._minDe = null, this._orientedDe = null
      };
      Se.prototype.getCoordinate = function () {
        return this._minCoord
      }, Se.prototype.getRightmostSide = function (t, e) {
        var n = this.getRightmostSideOfSegment(t, e);
        return n < 0 && (n = this.getRightmostSideOfSegment(t, e - 1)), n < 0 && (this._minCoord = null, this.checkForRightmostCoordinate(t)), n
      }, Se.prototype.findRightmostEdgeAtVertex = function () {
        var t = this._minDe.getEdge().getCoordinates();
        et.isTrue(this._minIndex > 0 && this._minIndex < t.length, "rightmost point expected to be interior vertex of edge");
        var e = t[this._minIndex - 1],
          n = t[this._minIndex + 1],
          r = at.computeOrientation(this._minCoord, n, e),
          i = !1;
        (e.y < this._minCoord.y && n.y < this._minCoord.y && r === at.COUNTERCLOCKWISE || e.y > this._minCoord.y && n.y > this._minCoord.y && r === at.CLOCKWISE) && (i = !0), i && (this._minIndex = this._minIndex - 1)
      }, Se.prototype.getRightmostSideOfSegment = function (t, e) {
        var n = t.getEdge().getCoordinates();
        if (e < 0 || e + 1 >= n.length) return -1;
        if (n[e].y === n[e + 1].y) return -1;
        var r = we.LEFT;
        return n[e].y < n[e + 1].y && (r = we.RIGHT), r
      }, Se.prototype.getEdge = function () {
        return this._orientedDe
      }, Se.prototype.checkForRightmostCoordinate = function (t) {
        for (var e = t.getEdge().getCoordinates(), n = 0; n < e.length - 1; n++)(null === this._minCoord || e[n].x > this._minCoord.x) && (this._minDe = t, this._minIndex = n, this._minCoord = e[n])
      }, Se.prototype.findRightmostEdgeAtNode = function () {
        var t = this._minDe.getNode().getEdges();
        this._minDe = t.getRightmostEdge(), this._minDe.isForward() || (this._minDe = this._minDe.getSym(), this._minIndex = this._minDe.getEdge().getCoordinates().length - 1)
      }, Se.prototype.findEdge = function (t) {
        for (var e = t.iterator(); e.hasNext();) {
          var n = e.next();
          n.isForward() && this.checkForRightmostCoordinate(n)
        }
        et.isTrue(0 !== this._minIndex || this._minCoord.equals(this._minDe.getCoordinate()), "inconsistency in rightmost processing"), 0 === this._minIndex ? this.findRightmostEdgeAtNode() : this.findRightmostEdgeAtVertex(), this._orientedDe = this._minDe, this.getRightmostSide(this._minDe, this._minIndex) === we.LEFT && (this._orientedDe = this._minDe.getSym())
      }, Se.prototype.interfaces_ = function () {
        return []
      }, Se.prototype.getClass = function () {
        return Se
      };
      var Le = function (t) {
          function e(n, r) {
            t.call(this, e.msgWithCoord(n, r)), this.pt = r ? new N(r) : null, this.name = "TopologyException"
          }
          return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getCoordinate = function () {
            return this.pt
          }, e.prototype.interfaces_ = function () {
            return []
          }, e.prototype.getClass = function () {
            return e
          }, e.msgWithCoord = function (t, e) {
            return e ? t : t + " [ " + e + " ]"
          }, e
        }(Q),
        Oe = function () {
          this.array_ = []
        };
      Oe.prototype.addLast = function (t) {
        this.array_.push(t)
      }, Oe.prototype.removeFirst = function () {
        return this.array_.shift()
      }, Oe.prototype.isEmpty = function () {
        return 0 === this.array_.length
      };
      var Te = function () {
        this._finder = null, this._dirEdgeList = new It, this._nodes = new It, this._rightMostCoord = null, this._env = null, this._finder = new Se
      };
      Te.prototype.clearVisitedEdges = function () {
        for (var t = this._dirEdgeList.iterator(); t.hasNext();) t.next().setVisited(!1)
      }, Te.prototype.getRightmostCoordinate = function () {
        return this._rightMostCoord
      }, Te.prototype.computeNodeDepth = function (t) {
        for (var e = null, n = t.getEdges().iterator(); n.hasNext();) {
          var r = n.next();
          if (r.isVisited() || r.getSym().isVisited()) {
            e = r;
            break
          }
        }
        if (null === e) throw new Le("unable to find edge to compute depths at " + t.getCoordinate());
        t.getEdges().computeDepths(e);
        for (var i = t.getEdges().iterator(); i.hasNext();) {
          var o = i.next();
          o.setVisited(!0), this.copySymDepths(o)
        }
      }, Te.prototype.computeDepth = function (t) {
        this.clearVisitedEdges();
        var e = this._finder.getEdge();
        e.setEdgeDepths(we.RIGHT, t), this.copySymDepths(e), this.computeDepths(e)
      }, Te.prototype.create = function (t) {
        this.addReachable(t), this._finder.findEdge(this._dirEdgeList), this._rightMostCoord = this._finder.getCoordinate()
      }, Te.prototype.findResultEdges = function () {
        for (var t = this._dirEdgeList.iterator(); t.hasNext();) {
          var e = t.next();
          e.getDepth(we.RIGHT) >= 1 && e.getDepth(we.LEFT) <= 0 && !e.isInteriorAreaEdge() && e.setInResult(!0)
        }
      }, Te.prototype.computeDepths = function (t) {
        var e = new Pt,
          n = new Oe,
          r = t.getNode();
        for (n.addLast(r), e.add(r), t.setVisited(!0); !n.isEmpty();) {
          var i = n.removeFirst();
          e.add(i), this.computeNodeDepth(i);
          for (var o = i.getEdges().iterator(); o.hasNext();) {
            var s = o.next().getSym();
            if (!s.isVisited()) {
              var a = s.getNode();
              e.contains(a) || (n.addLast(a), e.add(a))
            }
          }
        }
      }, Te.prototype.compareTo = function (t) {
        var e = t;
        return this._rightMostCoord.x < e._rightMostCoord.x ? -1 : this._rightMostCoord.x > e._rightMostCoord.x ? 1 : 0
      }, Te.prototype.getEnvelope = function () {
        if (null === this._env) {
          for (var t = new Y, e = this._dirEdgeList.iterator(); e.hasNext();)
            for (var n = e.next().getEdge().getCoordinates(), r = 0; r < n.length - 1; r++) t.expandToInclude(n[r]);
          this._env = t
        }
        return this._env
      }, Te.prototype.addReachable = function (t) {
        var e = new y;
        for (e.add(t); !e.empty();) {
          var n = e.pop();
          this.add(n, e)
        }
      }, Te.prototype.copySymDepths = function (t) {
        var e = t.getSym();
        e.setDepth(we.LEFT, t.getDepth(we.RIGHT)), e.setDepth(we.RIGHT, t.getDepth(we.LEFT))
      }, Te.prototype.add = function (t, e) {
        t.setVisited(!0), this._nodes.add(t);
        for (var n = t.getEdges().iterator(); n.hasNext();) {
          var r = n.next();
          this._dirEdgeList.add(r);
          var i = r.getSym().getNode();
          i.isVisited() || e.push(i)
        }
      }, Te.prototype.getNodes = function () {
        return this._nodes
      }, Te.prototype.getDirectedEdges = function () {
        return this._dirEdgeList
      }, Te.prototype.interfaces_ = function () {
        return [E]
      }, Te.prototype.getClass = function () {
        return Te
      };
      var Me = function t() {
        if (this.location = null, 1 === arguments.length) {
          if (arguments[0] instanceof Array) {
            var e = arguments[0];
            this.init(e.length)
          } else if (Number.isInteger(arguments[0])) {
            var n = arguments[0];
            this.init(1), this.location[we.ON] = n
          } else if (arguments[0] instanceof t) {
            var r = arguments[0];
            if (this.init(r.location.length), null !== r)
              for (var i = 0; i < this.location.length; i++) this.location[i] = r.location[i]
          }
        } else if (3 === arguments.length) {
          var o = arguments[0],
            s = arguments[1],
            a = arguments[2];
          this.init(3), this.location[we.ON] = o, this.location[we.LEFT] = s, this.location[we.RIGHT] = a
        }
      };
      Me.prototype.setAllLocations = function (t) {
        for (var e = 0; e < this.location.length; e++) this.location[e] = t
      }, Me.prototype.isNull = function () {
        for (var t = 0; t < this.location.length; t++)
          if (this.location[t] !== L.NONE) return !1;
        return !0
      }, Me.prototype.setAllLocationsIfNull = function (t) {
        for (var e = 0; e < this.location.length; e++) this.location[e] === L.NONE && (this.location[e] = t)
      }, Me.prototype.isLine = function () {
        return 1 === this.location.length
      }, Me.prototype.merge = function (t) {
        if (t.location.length > this.location.length) {
          var e = new Array(3).fill(null);
          e[we.ON] = this.location[we.ON], e[we.LEFT] = L.NONE, e[we.RIGHT] = L.NONE, this.location = e
        }
        for (var n = 0; n < this.location.length; n++) this.location[n] === L.NONE && n < t.location.length && (this.location[n] = t.location[n])
      }, Me.prototype.getLocations = function () {
        return this.location
      }, Me.prototype.flip = function () {
        if (this.location.length <= 1) return null;
        var t = this.location[we.LEFT];
        this.location[we.LEFT] = this.location[we.RIGHT], this.location[we.RIGHT] = t
      }, Me.prototype.toString = function () {
        var t = new R;
        return this.location.length > 1 && t.append(L.toLocationSymbol(this.location[we.LEFT])), t.append(L.toLocationSymbol(this.location[we.ON])), this.location.length > 1 && t.append(L.toLocationSymbol(this.location[we.RIGHT])), t.toString()
      }, Me.prototype.setLocations = function (t, e, n) {
        this.location[we.ON] = t, this.location[we.LEFT] = e, this.location[we.RIGHT] = n
      }, Me.prototype.get = function (t) {
        return t < this.location.length ? this.location[t] : L.NONE
      }, Me.prototype.isArea = function () {
        return this.location.length > 1
      }, Me.prototype.isAnyNull = function () {
        for (var t = 0; t < this.location.length; t++)
          if (this.location[t] === L.NONE) return !0;
        return !1
      }, Me.prototype.setLocation = function () {
        if (1 === arguments.length) {
          var t = arguments[0];
          this.setLocation(we.ON, t)
        } else if (2 === arguments.length) {
          var e = arguments[0],
            n = arguments[1];
          this.location[e] = n
        }
      }, Me.prototype.init = function (t) {
        this.location = new Array(t).fill(null), this.setAllLocations(L.NONE)
      }, Me.prototype.isEqualOnSide = function (t, e) {
        return this.location[e] === t.location[e]
      }, Me.prototype.allPositionsEqual = function (t) {
        for (var e = 0; e < this.location.length; e++)
          if (this.location[e] !== t) return !1;
        return !0
      }, Me.prototype.interfaces_ = function () {
        return []
      }, Me.prototype.getClass = function () {
        return Me
      };
      var Pe = function t() {
        if (this.elt = new Array(2).fill(null), 1 === arguments.length) {
          if (Number.isInteger(arguments[0])) {
            var e = arguments[0];
            this.elt[0] = new Me(e), this.elt[1] = new Me(e)
          } else if (arguments[0] instanceof t) {
            var n = arguments[0];
            this.elt[0] = new Me(n.elt[0]), this.elt[1] = new Me(n.elt[1])
          }
        } else if (2 === arguments.length) {
          var r = arguments[0],
            i = arguments[1];
          this.elt[0] = new Me(L.NONE), this.elt[1] = new Me(L.NONE), this.elt[r].setLocation(i)
        } else if (3 === arguments.length) {
          var o = arguments[0],
            s = arguments[1],
            a = arguments[2];
          this.elt[0] = new Me(o, s, a), this.elt[1] = new Me(o, s, a)
        } else if (4 === arguments.length) {
          var u = arguments[0],
            l = arguments[1],
            c = arguments[2],
            h = arguments[3];
          this.elt[0] = new Me(L.NONE, L.NONE, L.NONE), this.elt[1] = new Me(L.NONE, L.NONE, L.NONE), this.elt[u].setLocations(l, c, h)
        }
      };
      Pe.prototype.getGeometryCount = function () {
        var t = 0;
        return this.elt[0].isNull() || t++, this.elt[1].isNull() || t++, t
      }, Pe.prototype.setAllLocations = function (t, e) {
        this.elt[t].setAllLocations(e)
      }, Pe.prototype.isNull = function (t) {
        return this.elt[t].isNull()
      }, Pe.prototype.setAllLocationsIfNull = function () {
        if (1 === arguments.length) {
          var t = arguments[0];
          this.setAllLocationsIfNull(0, t), this.setAllLocationsIfNull(1, t)
        } else if (2 === arguments.length) {
          var e = arguments[0],
            n = arguments[1];
          this.elt[e].setAllLocationsIfNull(n)
        }
      }, Pe.prototype.isLine = function (t) {
        return this.elt[t].isLine()
      }, Pe.prototype.merge = function (t) {
        for (var e = 0; e < 2; e++) null === this.elt[e] && null !== t.elt[e] ? this.elt[e] = new Me(t.elt[e]) : this.elt[e].merge(t.elt[e])
      }, Pe.prototype.flip = function () {
        this.elt[0].flip(), this.elt[1].flip()
      }, Pe.prototype.getLocation = function () {
        if (1 === arguments.length) {
          var t = arguments[0];
          return this.elt[t].get(we.ON)
        }
        if (2 === arguments.length) {
          var e = arguments[0],
            n = arguments[1];
          return this.elt[e].get(n)
        }
      }, Pe.prototype.toString = function () {
        var t = new R;
        return null !== this.elt[0] && (t.append("A:"), t.append(this.elt[0].toString())), null !== this.elt[1] && (t.append(" B:"), t.append(this.elt[1].toString())), t.toString()
      }, Pe.prototype.isArea = function () {
        if (0 === arguments.length) return this.elt[0].isArea() || this.elt[1].isArea();
        if (1 === arguments.length) {
          var t = arguments[0];
          return this.elt[t].isArea()
        }
      }, Pe.prototype.isAnyNull = function (t) {
        return this.elt[t].isAnyNull()
      }, Pe.prototype.setLocation = function () {
        if (2 === arguments.length) {
          var t = arguments[0],
            e = arguments[1];
          this.elt[t].setLocation(we.ON, e)
        } else if (3 === arguments.length) {
          var n = arguments[0],
            r = arguments[1],
            i = arguments[2];
          this.elt[n].setLocation(r, i)
        }
      }, Pe.prototype.isEqualOnSide = function (t, e) {
        return this.elt[0].isEqualOnSide(t.elt[0], e) && this.elt[1].isEqualOnSide(t.elt[1], e)
      }, Pe.prototype.allPositionsEqual = function (t, e) {
        return this.elt[t].allPositionsEqual(e)
      }, Pe.prototype.toLine = function (t) {
        this.elt[t].isArea() && (this.elt[t] = new Me(this.elt[t].location[0]))
      }, Pe.prototype.interfaces_ = function () {
        return []
      }, Pe.prototype.getClass = function () {
        return Pe
      }, Pe.toLineLabel = function (t) {
        for (var e = new Pe(L.NONE), n = 0; n < 2; n++) e.setLocation(n, t.getLocation(n));
        return e
      };
      var Re = function () {
        this._startDe = null, this._maxNodeDegree = -1, this._edges = new It, this._pts = new It, this._label = new Pe(L.NONE), this._ring = null, this._isHole = null, this._shell = null, this._holes = new It, this._geometryFactory = null;
        var t = arguments[0],
          e = arguments[1];
        this._geometryFactory = e, this.computePoints(t), this.computeRing()
      };
      Re.prototype.computeRing = function () {
        if (null !== this._ring) return null;
        for (var t = new Array(this._pts.size()).fill(null), e = 0; e < this._pts.size(); e++) t[e] = this._pts.get(e);
        this._ring = this._geometryFactory.createLinearRing(t), this._isHole = at.isCCW(this._ring.getCoordinates())
      }, Re.prototype.isIsolated = function () {
        return 1 === this._label.getGeometryCount()
      }, Re.prototype.computePoints = function (t) {
        this._startDe = t;
        var e = t,
          n = !0;
        do {
          if (null === e) throw new Le("Found null DirectedEdge");
          if (e.getEdgeRing() === this) throw new Le("Directed Edge visited twice during ring-building at " + e.getCoordinate());
          this._edges.add(e);
          var r = e.getLabel();
          et.isTrue(r.isArea()), this.mergeLabel(r), this.addPoints(e.getEdge(), e.isForward(), n), n = !1, this.setEdgeRing(e, this), e = this.getNext(e)
        } while (e !== this._startDe)
      }, Re.prototype.getLinearRing = function () {
        return this._ring
      }, Re.prototype.getCoordinate = function (t) {
        return this._pts.get(t)
      }, Re.prototype.computeMaxNodeDegree = function () {
        this._maxNodeDegree = 0;
        var t = this._startDe;
        do {
          var e = t.getNode().getEdges().getOutgoingDegree(this);
          e > this._maxNodeDegree && (this._maxNodeDegree = e), t = this.getNext(t)
        } while (t !== this._startDe);
        this._maxNodeDegree *= 2
      }, Re.prototype.addPoints = function (t, e, n) {
        var r = t.getCoordinates();
        if (e) {
          var i = 1;
          n && (i = 0);
          for (var o = i; o < r.length; o++) this._pts.add(r[o])
        } else {
          var s = r.length - 2;
          n && (s = r.length - 1);
          for (var a = s; a >= 0; a--) this._pts.add(r[a])
        }
      }, Re.prototype.isHole = function () {
        return this._isHole
      }, Re.prototype.setInResult = function () {
        var t = this._startDe;
        do {
          t.getEdge().setInResult(!0), t = t.getNext()
        } while (t !== this._startDe)
      }, Re.prototype.containsPoint = function (t) {
        var e = this.getLinearRing();
        if (!e.getEnvelopeInternal().contains(t)) return !1;
        if (!at.isPointInRing(t, e.getCoordinates())) return !1;
        for (var n = this._holes.iterator(); n.hasNext();)
          if (n.next().containsPoint(t)) return !1;
        return !0
      }, Re.prototype.addHole = function (t) {
        this._holes.add(t)
      }, Re.prototype.isShell = function () {
        return null === this._shell
      }, Re.prototype.getLabel = function () {
        return this._label
      }, Re.prototype.getEdges = function () {
        return this._edges
      }, Re.prototype.getMaxNodeDegree = function () {
        return this._maxNodeDegree < 0 && this.computeMaxNodeDegree(), this._maxNodeDegree
      }, Re.prototype.getShell = function () {
        return this._shell
      }, Re.prototype.mergeLabel = function () {
        if (1 === arguments.length) {
          var t = arguments[0];
          this.mergeLabel(t, 0), this.mergeLabel(t, 1)
        } else if (2 === arguments.length) {
          var e = arguments[0],
            n = arguments[1],
            r = e.getLocation(n, we.RIGHT);
          if (r === L.NONE) return null;
          if (this._label.getLocation(n) === L.NONE) return this._label.setLocation(n, r), null
        }
      }, Re.prototype.setShell = function (t) {
        this._shell = t, null !== t && t.addHole(this)
      }, Re.prototype.toPolygon = function (t) {
        for (var e = new Array(this._holes.size()).fill(null), n = 0; n < this._holes.size(); n++) e[n] = this._holes.get(n).getLinearRing();
        return t.createPolygon(this.getLinearRing(), e)
      }, Re.prototype.interfaces_ = function () {
        return []
      }, Re.prototype.getClass = function () {
        return Re
      };
      var De = function (t) {
          function e() {
            var e = arguments[0],
              n = arguments[1];
            t.call(this, e, n)
          }
          return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.setEdgeRing = function (t, e) {
            t.setMinEdgeRing(e)
          }, e.prototype.getNext = function (t) {
            return t.getNextMin()
          }, e.prototype.interfaces_ = function () {
            return []
          }, e.prototype.getClass = function () {
            return e
          }, e
        }(Re),
        Ae = function (t) {
          function e() {
            var e = arguments[0],
              n = arguments[1];
            t.call(this, e, n)
          }
          return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.buildMinimalRings = function () {
            var t = new It,
              e = this._startDe;
            do {
              if (null === e.getMinEdgeRing()) {
                var n = new De(e, this._geometryFactory);
                t.add(n)
              }
              e = e.getNext()
            } while (e !== this._startDe);
            return t
          }, e.prototype.setEdgeRing = function (t, e) {
            t.setEdgeRing(e)
          }, e.prototype.linkDirectedEdgesForMinimalEdgeRings = function () {
            var t = this._startDe;
            do {
              t.getNode().getEdges().linkMinimalDirectedEdges(this), t = t.getNext()
            } while (t !== this._startDe)
          }, e.prototype.getNext = function (t) {
            return t.getNext()
          }, e.prototype.interfaces_ = function () {
            return []
          }, e.prototype.getClass = function () {
            return e
          }, e
        }(Re),
        Fe = function () {
          if (this._label = null, this._isInResult = !1, this._isCovered = !1, this._isCoveredSet = !1, this._isVisited = !1, 0 === arguments.length);
          else if (1 === arguments.length) {
            var t = arguments[0];
            this._label = t
          }
        };
      Fe.prototype.setVisited = function (t) {
        this._isVisited = t
      }, Fe.prototype.setInResult = function (t) {
        this._isInResult = t
      }, Fe.prototype.isCovered = function () {
        return this._isCovered
      }, Fe.prototype.isCoveredSet = function () {
        return this._isCoveredSet
      }, Fe.prototype.setLabel = function (t) {
        this._label = t
      }, Fe.prototype.getLabel = function () {
        return this._label
      }, Fe.prototype.setCovered = function (t) {
        this._isCovered = t, this._isCoveredSet = !0
      }, Fe.prototype.updateIM = function (t) {
        et.isTrue(this._label.getGeometryCount() >= 2, "found partial label"), this.computeIM(t)
      }, Fe.prototype.isInResult = function () {
        return this._isInResult
      }, Fe.prototype.isVisited = function () {
        return this._isVisited
      }, Fe.prototype.interfaces_ = function () {
        return []
      }, Fe.prototype.getClass = function () {
        return Fe
      };
      var Ge = function (t) {
          function e() {
            t.call(this), this._coord = null, this._edges = null;
            var e = arguments[0],
              n = arguments[1];
            this._coord = e, this._edges = n, this._label = new Pe(0, L.NONE)
          }
          return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.isIncidentEdgeInResult = function () {
            for (var t = this.getEdges().getEdges().iterator(); t.hasNext();)
              if (t.next().getEdge().isInResult()) return !0;
            return !1
          }, e.prototype.isIsolated = function () {
            return 1 === this._label.getGeometryCount()
          }, e.prototype.getCoordinate = function () {
            return this._coord
          }, e.prototype.print = function (t) {
            t.println("node " + this._coord + " lbl: " + this._label)
          }, e.prototype.computeIM = function (t) {}, e.prototype.computeMergedLocation = function (t, e) {
            var n = L.NONE;
            if (n = this._label.getLocation(e), !t.isNull(e)) {
              var r = t.getLocation(e);
              n !== L.BOUNDARY && (n = r)
            }
            return n
          }, e.prototype.setLabel = function () {
            if (2 !== arguments.length) return t.prototype.setLabel.apply(this, arguments);
            var e = arguments[0],
              n = arguments[1];
            null === this._label ? this._label = new Pe(e, n) : this._label.setLocation(e, n)
          }, e.prototype.getEdges = function () {
            return this._edges
          }, e.prototype.mergeLabel = function () {
            if (arguments[0] instanceof e) {
              var t = arguments[0];
              this.mergeLabel(t._label)
            } else if (arguments[0] instanceof Pe)
              for (var n = arguments[0], r = 0; r < 2; r++) {
                var i = this.computeMergedLocation(n, r);
                this._label.getLocation(r) === L.NONE && this._label.setLocation(r, i)
              }
          }, e.prototype.add = function (t) {
            this._edges.insert(t), t.setNode(this)
          }, e.prototype.setLabelBoundary = function (t) {
            if (null === this._label) return null;
            var e = L.NONE;
            null !== this._label && (e = this._label.getLocation(t));
            var n = null;
            switch (e) {
              case L.BOUNDARY:
                n = L.INTERIOR;
                break;
              case L.INTERIOR:
              default:
                n = L.BOUNDARY
            }
            this._label.setLocation(t, n)
          }, e.prototype.interfaces_ = function () {
            return []
          }, e.prototype.getClass = function () {
            return e
          }, e
        }(Fe),
        ze = function () {
          this.nodeMap = new h, this.nodeFact = null;
          var t = arguments[0];
          this.nodeFact = t
        };
      ze.prototype.find = function (t) {
        return this.nodeMap.get(t)
      }, ze.prototype.addNode = function () {
        if (arguments[0] instanceof N) {
          var t = arguments[0],
            e = this.nodeMap.get(t);
          return null === e && (e = this.nodeFact.createNode(t), this.nodeMap.put(t, e)), e
        }
        if (arguments[0] instanceof Ge) {
          var n = arguments[0],
            r = this.nodeMap.get(n.getCoordinate());
          return null === r ? (this.nodeMap.put(n.getCoordinate(), n), n) : (r.mergeLabel(n), r)
        }
      }, ze.prototype.print = function (t) {
        for (var e = this.iterator(); e.hasNext();) e.next().print(t)
      }, ze.prototype.iterator = function () {
        return this.nodeMap.values().iterator()
      }, ze.prototype.values = function () {
        return this.nodeMap.values()
      }, ze.prototype.getBoundaryNodes = function (t) {
        for (var e = new It, n = this.iterator(); n.hasNext();) {
          var r = n.next();
          r.getLabel().getLocation(t) === L.BOUNDARY && e.add(r)
        }
        return e
      }, ze.prototype.add = function (t) {
        var e = t.getCoordinate();
        this.addNode(e).add(t)
      }, ze.prototype.interfaces_ = function () {
        return []
      }, ze.prototype.getClass = function () {
        return ze
      };
      var qe = function () {},
        Be = {
          NE: {
            configurable: !0
          },
          NW: {
            configurable: !0
          },
          SW: {
            configurable: !0
          },
          SE: {
            configurable: !0
          }
        };
      qe.prototype.interfaces_ = function () {
        return []
      }, qe.prototype.getClass = function () {
        return qe
      }, qe.isNorthern = function (t) {
        return t === qe.NE || t === qe.NW
      }, qe.isOpposite = function (t, e) {
        return t !== e && 2 == (t - e + 4) % 4
      }, qe.commonHalfPlane = function (t, e) {
        if (t === e) return t;
        if (2 == (t - e + 4) % 4) return -1;
        var n = t < e ? t : e;
        return 0 === n && 3 === (t > e ? t : e) ? 3 : n
      }, qe.isInHalfPlane = function (t, e) {
        return e === qe.SE ? t === qe.SE || t === qe.SW : t === e || t === e + 1
      }, qe.quadrant = function () {
        if ("number" == typeof arguments[0] && "number" == typeof arguments[1]) {
          var t = arguments[0],
            e = arguments[1];
          if (0 === t && 0 === e) throw new m("Cannot compute the quadrant for point ( " + t + ", " + e + " )");
          return t >= 0 ? e >= 0 ? qe.NE : qe.SE : e >= 0 ? qe.NW : qe.SW
        }
        if (arguments[0] instanceof N && arguments[1] instanceof N) {
          var n = arguments[0],
            r = arguments[1];
          if (r.x === n.x && r.y === n.y) throw new m("Cannot compute the quadrant for two identical points " + n);
          return r.x >= n.x ? r.y >= n.y ? qe.NE : qe.SE : r.y >= n.y ? qe.NW : qe.SW
        }
      }, Be.NE.get = function () {
        return 0
      }, Be.NW.get = function () {
        return 1
      }, Be.SW.get = function () {
        return 2
      }, Be.SE.get = function () {
        return 3
      }, Object.defineProperties(qe, Be);
      var ke = function () {
        if (this._edge = null, this._label = null, this._node = null, this._p0 = null, this._p1 = null, this._dx = null, this._dy = null, this._quadrant = null, 1 === arguments.length) {
          var t = arguments[0];
          this._edge = t
        } else if (3 === arguments.length) {
          var e = arguments[0],
            n = arguments[1],
            r = arguments[2];
          this._edge = e, this.init(n, r), this._label = null
        } else if (4 === arguments.length) {
          var i = arguments[0],
            o = arguments[1],
            s = arguments[2],
            a = arguments[3];
          this._edge = i, this.init(o, s), this._label = a
        }
      };
      ke.prototype.compareDirection = function (t) {
        return this._dx === t._dx && this._dy === t._dy ? 0 : this._quadrant > t._quadrant ? 1 : this._quadrant < t._quadrant ? -1 : at.computeOrientation(t._p0, t._p1, this._p1)
      }, ke.prototype.getDy = function () {
        return this._dy
      }, ke.prototype.getCoordinate = function () {
        return this._p0
      }, ke.prototype.setNode = function (t) {
        this._node = t
      }, ke.prototype.print = function (t) {
        var e = Math.atan2(this._dy, this._dx),
          n = this.getClass().getName(),
          r = n.lastIndexOf("."),
          i = n.substring(r + 1);
        t.print("  " + i + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + e + "   " + this._label)
      }, ke.prototype.compareTo = function (t) {
        var e = t;
        return this.compareDirection(e)
      }, ke.prototype.getDirectedCoordinate = function () {
        return this._p1
      }, ke.prototype.getDx = function () {
        return this._dx
      }, ke.prototype.getLabel = function () {
        return this._label
      }, ke.prototype.getEdge = function () {
        return this._edge
      }, ke.prototype.getQuadrant = function () {
        return this._quadrant
      }, ke.prototype.getNode = function () {
        return this._node
      }, ke.prototype.toString = function () {
        var t = Math.atan2(this._dy, this._dx),
          e = this.getClass().getName(),
          n = e.lastIndexOf(".");
        return "  " + e.substring(n + 1) + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + t + "   " + this._label
      }, ke.prototype.computeLabel = function (t) {}, ke.prototype.init = function (t, e) {
        this._p0 = t, this._p1 = e, this._dx = e.x - t.x, this._dy = e.y - t.y, this._quadrant = qe.quadrant(this._dx, this._dy), et.isTrue(!(0 === this._dx && 0 === this._dy), "EdgeEnd with identical endpoints found")
      }, ke.prototype.interfaces_ = function () {
        return [E]
      }, ke.prototype.getClass = function () {
        return ke
      };
      var je = function (t) {
          function e() {
            var e = arguments[0],
              n = arguments[1];
            if (t.call(this, e), this._isForward = null, this._isInResult = !1, this._isVisited = !1, this._sym = null, this._next = null, this._nextMin = null, this._edgeRing = null, this._minEdgeRing = null, this._depth = [0, -999, -999], this._isForward = n, n) this.init(e.getCoordinate(0), e.getCoordinate(1));
            else {
              var r = e.getNumPoints() - 1;
              this.init(e.getCoordinate(r), e.getCoordinate(r - 1))
            }
            this.computeDirectedLabel()
          }
          return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getNextMin = function () {
            return this._nextMin
          }, e.prototype.getDepth = function (t) {
            return this._depth[t]
          }, e.prototype.setVisited = function (t) {
            this._isVisited = t
          }, e.prototype.computeDirectedLabel = function () {
            this._label = new Pe(this._edge.getLabel()), this._isForward || this._label.flip()
          }, e.prototype.getNext = function () {
            return this._next
          }, e.prototype.setDepth = function (t, e) {
            if (-999 !== this._depth[t] && this._depth[t] !== e) throw new Le("assigned depths do not match", this.getCoordinate());
            this._depth[t] = e
          }, e.prototype.isInteriorAreaEdge = function () {
            for (var t = !0, e = 0; e < 2; e++) this._label.isArea(e) && this._label.getLocation(e, we.LEFT) === L.INTERIOR && this._label.getLocation(e, we.RIGHT) === L.INTERIOR || (t = !1);
            return t
          }, e.prototype.setNextMin = function (t) {
            this._nextMin = t
          }, e.prototype.print = function (e) {
            t.prototype.print.call(this, e), e.print(" " + this._depth[we.LEFT] + "/" + this._depth[we.RIGHT]), e.print(" (" + this.getDepthDelta() + ")"), this._isInResult && e.print(" inResult")
          }, e.prototype.setMinEdgeRing = function (t) {
            this._minEdgeRing = t
          }, e.prototype.isLineEdge = function () {
            var t = this._label.isLine(0) || this._label.isLine(1),
              e = !this._label.isArea(0) || this._label.allPositionsEqual(0, L.EXTERIOR),
              n = !this._label.isArea(1) || this._label.allPositionsEqual(1, L.EXTERIOR);
            return t && e && n
          }, e.prototype.setEdgeRing = function (t) {
            this._edgeRing = t
          }, e.prototype.getMinEdgeRing = function () {
            return this._minEdgeRing
          }, e.prototype.getDepthDelta = function () {
            var t = this._edge.getDepthDelta();
            return this._isForward || (t = -t), t
          }, e.prototype.setInResult = function (t) {
            this._isInResult = t
          }, e.prototype.getSym = function () {
            return this._sym
          }, e.prototype.isForward = function () {
            return this._isForward
          }, e.prototype.getEdge = function () {
            return this._edge
          }, e.prototype.printEdge = function (t) {
            this.print(t), t.print(" "), this._isForward ? this._edge.print(t) : this._edge.printReverse(t)
          }, e.prototype.setSym = function (t) {
            this._sym = t
          }, e.prototype.setVisitedEdge = function (t) {
            this.setVisited(t), this._sym.setVisited(t)
          }, e.prototype.setEdgeDepths = function (t, e) {
            var n = this.getEdge().getDepthDelta();
            this._isForward || (n = -n);
            var r = 1;
            t === we.LEFT && (r = -1);
            var i = we.opposite(t),
              o = e + n * r;
            this.setDepth(t, e), this.setDepth(i, o)
          }, e.prototype.getEdgeRing = function () {
            return this._edgeRing
          }, e.prototype.isInResult = function () {
            return this._isInResult
          }, e.prototype.setNext = function (t) {
            this._next = t
          }, e.prototype.isVisited = function () {
            return this._isVisited
          }, e.prototype.interfaces_ = function () {
            return []
          }, e.prototype.getClass = function () {
            return e
          }, e.depthFactor = function (t, e) {
            return t === L.EXTERIOR && e === L.INTERIOR ? 1 : t === L.INTERIOR && e === L.EXTERIOR ? -1 : 0
          }, e
        }(ke),
        Ve = function () {};
      Ve.prototype.createNode = function (t) {
        return new Ge(t, null)
      }, Ve.prototype.interfaces_ = function () {
        return []
      }, Ve.prototype.getClass = function () {
        return Ve
      };
      var Ue = function () {
        if (this._edges = new It, this._nodes = null, this._edgeEndList = new It, 0 === arguments.length) this._nodes = new ze(new Ve);
        else if (1 === arguments.length) {
          var t = arguments[0];
          this._nodes = new ze(t)
        }
      };
      Ue.prototype.printEdges = function (t) {
        t.println("Edges:");
        for (var e = 0; e < this._edges.size(); e++) {
          t.println("edge " + e + ":");
          var n = this._edges.get(e);
          n.print(t), n.eiList.print(t)
        }
      }, Ue.prototype.find = function (t) {
        return this._nodes.find(t)
      }, Ue.prototype.addNode = function () {
        if (arguments[0] instanceof Ge) {
          var t = arguments[0];
          return this._nodes.addNode(t)
        }
        if (arguments[0] instanceof N) {
          var e = arguments[0];
          return this._nodes.addNode(e)
        }
      }, Ue.prototype.getNodeIterator = function () {
        return this._nodes.iterator()
      }, Ue.prototype.linkResultDirectedEdges = function () {
        for (var t = this._nodes.iterator(); t.hasNext();) t.next().getEdges().linkResultDirectedEdges()
      }, Ue.prototype.debugPrintln = function (t) {
        U.out.println(t)
      }, Ue.prototype.isBoundaryNode = function (t, e) {
        var n = this._nodes.find(e);
        if (null === n) return !1;
        var r = n.getLabel();
        return null !== r && r.getLocation(t) === L.BOUNDARY
      }, Ue.prototype.linkAllDirectedEdges = function () {
        for (var t = this._nodes.iterator(); t.hasNext();) t.next().getEdges().linkAllDirectedEdges()
      }, Ue.prototype.matchInSameDirection = function (t, e, n, r) {
        return !!t.equals(n) && at.computeOrientation(t, e, r) === at.COLLINEAR && qe.quadrant(t, e) === qe.quadrant(n, r)
      }, Ue.prototype.getEdgeEnds = function () {
        return this._edgeEndList
      }, Ue.prototype.debugPrint = function (t) {
        U.out.print(t)
      }, Ue.prototype.getEdgeIterator = function () {
        return this._edges.iterator()
      }, Ue.prototype.findEdgeInSameDirection = function (t, e) {
        for (var n = 0; n < this._edges.size(); n++) {
          var r = this._edges.get(n),
            i = r.getCoordinates();
          if (this.matchInSameDirection(t, e, i[0], i[1])) return r;
          if (this.matchInSameDirection(t, e, i[i.length - 1], i[i.length - 2])) return r
        }
        return null
      }, Ue.prototype.insertEdge = function (t) {
        this._edges.add(t)
      }, Ue.prototype.findEdgeEnd = function (t) {
        for (var e = this.getEdgeEnds().iterator(); e.hasNext();) {
          var n = e.next();
          if (n.getEdge() === t) return n
        }
        return null
      }, Ue.prototype.addEdges = function (t) {
        for (var e = t.iterator(); e.hasNext();) {
          var n = e.next();
          this._edges.add(n);
          var r = new je(n, !0),
            i = new je(n, !1);
          r.setSym(i), i.setSym(r), this.add(r), this.add(i)
        }
      }, Ue.prototype.add = function (t) {
        this._nodes.add(t), this._edgeEndList.add(t)
      }, Ue.prototype.getNodes = function () {
        return this._nodes.values()
      }, Ue.prototype.findEdge = function (t, e) {
        for (var n = 0; n < this._edges.size(); n++) {
          var r = this._edges.get(n),
            i = r.getCoordinates();
          if (t.equals(i[0]) && e.equals(i[1])) return r
        }
        return null
      }, Ue.prototype.interfaces_ = function () {
        return []
      }, Ue.prototype.getClass = function () {
        return Ue
      }, Ue.linkResultDirectedEdges = function (t) {
        for (var e = t.iterator(); e.hasNext();) e.next().getEdges().linkResultDirectedEdges()
      };
      var Xe = function () {
        this._geometryFactory = null, this._shellList = new It;
        var t = arguments[0];
        this._geometryFactory = t
      };
      Xe.prototype.sortShellsAndHoles = function (t, e, n) {
        for (var r = t.iterator(); r.hasNext();) {
          var i = r.next();
          i.isHole() ? n.add(i) : e.add(i)
        }
      }, Xe.prototype.computePolygons = function (t) {
        for (var e = new It, n = t.iterator(); n.hasNext();) {
          var r = n.next().toPolygon(this._geometryFactory);
          e.add(r)
        }
        return e
      }, Xe.prototype.placeFreeHoles = function (t, e) {
        for (var n = e.iterator(); n.hasNext();) {
          var r = n.next();
          if (null === r.getShell()) {
            var i = this.findEdgeRingContaining(r, t);
            if (null === i) throw new Le("unable to assign hole to a shell", r.getCoordinate(0));
            r.setShell(i)
          }
        }
      }, Xe.prototype.buildMinimalEdgeRings = function (t, e, n) {
        for (var r = new It, i = t.iterator(); i.hasNext();) {
          var o = i.next();
          if (o.getMaxNodeDegree() > 2) {
            o.linkDirectedEdgesForMinimalEdgeRings();
            var s = o.buildMinimalRings(),
              a = this.findShell(s);
            null !== a ? (this.placePolygonHoles(a, s), e.add(a)) : n.addAll(s)
          } else r.add(o)
        }
        return r
      }, Xe.prototype.containsPoint = function (t) {
        for (var e = this._shellList.iterator(); e.hasNext();)
          if (e.next().containsPoint(t)) return !0;
        return !1
      }, Xe.prototype.buildMaximalEdgeRings = function (t) {
        for (var e = new It, n = t.iterator(); n.hasNext();) {
          var r = n.next();
          if (r.isInResult() && r.getLabel().isArea() && null === r.getEdgeRing()) {
            var i = new Ae(r, this._geometryFactory);
            e.add(i), i.setInResult()
          }
        }
        return e
      }, Xe.prototype.placePolygonHoles = function (t, e) {
        for (var n = e.iterator(); n.hasNext();) {
          var r = n.next();
          r.isHole() && r.setShell(t)
        }
      }, Xe.prototype.getPolygons = function () {
        return this.computePolygons(this._shellList)
      }, Xe.prototype.findEdgeRingContaining = function (t, e) {
        for (var n = t.getLinearRing(), r = n.getEnvelopeInternal(), i = n.getCoordinateN(0), o = null, s = null, a = e.iterator(); a.hasNext();) {
          var u = a.next(),
            l = u.getLinearRing(),
            c = l.getEnvelopeInternal();
          null !== o && (s = o.getLinearRing().getEnvelopeInternal());
          var h = !1;
          c.contains(r) && at.isPointInRing(i, l.getCoordinates()) && (h = !0), h && (null === o || s.contains(c)) && (o = u)
        }
        return o
      }, Xe.prototype.findShell = function (t) {
        for (var e = 0, n = null, r = t.iterator(); r.hasNext();) {
          var i = r.next();
          i.isHole() || (n = i, e++)
        }
        return et.isTrue(e <= 1, "found two shells in MinimalEdgeRing list"), n
      }, Xe.prototype.add = function () {
        if (1 === arguments.length) {
          var t = arguments[0];
          this.add(t.getEdgeEnds(), t.getNodes())
        } else if (2 === arguments.length) {
          var e = arguments[0],
            n = arguments[1];
          Ue.linkResultDirectedEdges(n);
          var r = this.buildMaximalEdgeRings(e),
            i = new It,
            o = this.buildMinimalEdgeRings(r, this._shellList, i);
          this.sortShellsAndHoles(o, this._shellList, i), this.placeFreeHoles(this._shellList, i)
        }
      }, Xe.prototype.interfaces_ = function () {
        return []
      }, Xe.prototype.getClass = function () {
        return Xe
      };
      var Ye = function () {};
      Ye.prototype.getBounds = function () {}, Ye.prototype.interfaces_ = function () {
        return []
      }, Ye.prototype.getClass = function () {
        return Ye
      };
      var He = function () {
        this._bounds = null, this._item = null;
        var t = arguments[0],
          e = arguments[1];
        this._bounds = t, this._item = e
      };
      He.prototype.getItem = function () {
        return this._item
      }, He.prototype.getBounds = function () {
        return this._bounds
      }, He.prototype.interfaces_ = function () {
        return [Ye, e]
      }, He.prototype.getClass = function () {
        return He
      };
      var We = function () {
        this._size = null, this._items = null, this._size = 0, this._items = new It, this._items.add(null)
      };
      We.prototype.poll = function () {
        if (this.isEmpty()) return null;
        var t = this._items.get(1);
        return this._items.set(1, this._items.get(this._size)), this._size -= 1, this.reorder(1), t
      }, We.prototype.size = function () {
        return this._size
      }, We.prototype.reorder = function (t) {
        for (var e = null, n = this._items.get(t); 2 * t <= this._size && ((e = 2 * t) !== this._size && this._items.get(e + 1).compareTo(this._items.get(e)) < 0 && e++, this._items.get(e).compareTo(n) < 0); t = e) this._items.set(t, this._items.get(e));
        this._items.set(t, n)
      }, We.prototype.clear = function () {
        this._size = 0, this._items.clear()
      }, We.prototype.isEmpty = function () {
        return 0 === this._size
      }, We.prototype.add = function (t) {
        this._items.add(null), this._size += 1;
        var e = this._size;
        for (this._items.set(0, t); t.compareTo(this._items.get(Math.trunc(e / 2))) < 0; e /= 2) this._items.set(e, this._items.get(Math.trunc(e / 2)));
        this._items.set(e, t)
      }, We.prototype.interfaces_ = function () {
        return []
      }, We.prototype.getClass = function () {
        return We
      };
      var Ze = function () {};
      Ze.prototype.visitItem = function (t) {}, Ze.prototype.interfaces_ = function () {
        return []
      }, Ze.prototype.getClass = function () {
        return Ze
      };
      var $e = function () {};
      $e.prototype.insert = function (t, e) {}, $e.prototype.remove = function (t, e) {}, $e.prototype.query = function () {}, $e.prototype.interfaces_ = function () {
        return []
      }, $e.prototype.getClass = function () {
        return $e
      };
      var Je = function () {
          if (this._childBoundables = new It, this._bounds = null, this._level = null, 0 === arguments.length);
          else if (1 === arguments.length) {
            var t = arguments[0];
            this._level = t
          }
        },
        Ke = {
          serialVersionUID: {
            configurable: !0
          }
        };
      Je.prototype.getLevel = function () {
        return this._level
      }, Je.prototype.size = function () {
        return this._childBoundables.size()
      }, Je.prototype.getChildBoundables = function () {
        return this._childBoundables
      }, Je.prototype.addChildBoundable = function (t) {
        et.isTrue(null === this._bounds), this._childBoundables.add(t)
      }, Je.prototype.isEmpty = function () {
        return this._childBoundables.isEmpty()
      }, Je.prototype.getBounds = function () {
        return null === this._bounds && (this._bounds = this.computeBounds()), this._bounds
      }, Je.prototype.interfaces_ = function () {
        return [Ye, e]
      }, Je.prototype.getClass = function () {
        return Je
      }, Ke.serialVersionUID.get = function () {
        return 0x5a1e55ec41369800
      }, Object.defineProperties(Je, Ke);
      var Qe = function () {};
      Qe.reverseOrder = function () {
        return {
          compare: function (t, e) {
            return e.compareTo(t)
          }
        }
      }, Qe.min = function (t) {
        return Qe.sort(t), t.get(0)
      }, Qe.sort = function (t, e) {
        var n = t.toArray();
        e ? Gt.sort(n, e) : Gt.sort(n);
        for (var r = t.iterator(), i = 0, o = n.length; i < o; i++) r.next(), r.set(n[i])
      }, Qe.singletonList = function (t) {
        var e = new It;
        return e.add(t), e
      };
      var tn = function () {
        this._boundable1 = null, this._boundable2 = null, this._distance = null, this._itemDistance = null;
        var t = arguments[0],
          e = arguments[1],
          n = arguments[2];
        this._boundable1 = t, this._boundable2 = e, this._itemDistance = n, this._distance = this.distance()
      };
      tn.prototype.expandToQueue = function (t, e) {
        var n = tn.isComposite(this._boundable1),
          r = tn.isComposite(this._boundable2);
        if (n && r) return tn.area(this._boundable1) > tn.area(this._boundable2) ? (this.expand(this._boundable1, this._boundable2, t, e), null) : (this.expand(this._boundable2, this._boundable1, t, e), null);
        if (n) return this.expand(this._boundable1, this._boundable2, t, e), null;
        if (r) return this.expand(this._boundable2, this._boundable1, t, e), null;
        throw new m("neither boundable is composite")
      }, tn.prototype.isLeaves = function () {
        return !(tn.isComposite(this._boundable1) || tn.isComposite(this._boundable2))
      }, tn.prototype.compareTo = function (t) {
        var e = t;
        return this._distance < e._distance ? -1 : this._distance > e._distance ? 1 : 0
      }, tn.prototype.expand = function (t, e, n, r) {
        for (var i = t.getChildBoundables().iterator(); i.hasNext();) {
          var o = i.next(),
            s = new tn(o, e, this._itemDistance);
          s.getDistance() < r && n.add(s)
        }
      }, tn.prototype.getBoundable = function (t) {
        return 0 === t ? this._boundable1 : this._boundable2
      }, tn.prototype.getDistance = function () {
        return this._distance
      }, tn.prototype.distance = function () {
        return this.isLeaves() ? this._itemDistance.distance(this._boundable1, this._boundable2) : this._boundable1.getBounds().distance(this._boundable2.getBounds())
      }, tn.prototype.interfaces_ = function () {
        return [E]
      }, tn.prototype.getClass = function () {
        return tn
      }, tn.area = function (t) {
        return t.getBounds().getArea()
      }, tn.isComposite = function (t) {
        return t instanceof Je
      };
      var en = function t() {
          if (this._root = null, this._built = !1, this._itemBoundables = new It, this._nodeCapacity = null, 0 === arguments.length) {
            var e = t.DEFAULT_NODE_CAPACITY;
            this._nodeCapacity = e
          } else if (1 === arguments.length) {
            var n = arguments[0];
            et.isTrue(n > 1, "Node capacity must be greater than 1"), this._nodeCapacity = n
          }
        },
        nn = {
          IntersectsOp: {
            configurable: !0
          },
          serialVersionUID: {
            configurable: !0
          },
          DEFAULT_NODE_CAPACITY: {
            configurable: !0
          }
        };
      en.prototype.getNodeCapacity = function () {
        return this._nodeCapacity
      }, en.prototype.lastNode = function (t) {
        return t.get(t.size() - 1)
      }, en.prototype.size = function () {
        if (0 === arguments.length) return this.isEmpty() ? 0 : (this.build(), this.size(this._root));
        if (1 === arguments.length) {
          for (var t = 0, e = arguments[0].getChildBoundables().iterator(); e.hasNext();) {
            var n = e.next();
            n instanceof Je ? t += this.size(n) : n instanceof He && (t += 1)
          }
          return t
        }
      }, en.prototype.removeItem = function (t, e) {
        for (var n = null, r = t.getChildBoundables().iterator(); r.hasNext();) {
          var i = r.next();
          i instanceof He && i.getItem() === e && (n = i)
        }
        return null !== n && (t.getChildBoundables().remove(n), !0)
      }, en.prototype.itemsTree = function () {
        if (0 === arguments.length) {
          this.build();
          var t = this.itemsTree(this._root);
          return null === t ? new It : t
        }
        if (1 === arguments.length) {
          for (var e = arguments[0], n = new It, r = e.getChildBoundables().iterator(); r.hasNext();) {
            var i = r.next();
            if (i instanceof Je) {
              var o = this.itemsTree(i);
              null !== o && n.add(o)
            } else i instanceof He ? n.add(i.getItem()) : et.shouldNeverReachHere()
          }
          return n.size() <= 0 ? null : n
        }
      }, en.prototype.insert = function (t, e) {
        et.isTrue(!this._built, "Cannot insert items into an STR packed R-tree after it has been built."), this._itemBoundables.add(new He(t, e))
      }, en.prototype.boundablesAtLevel = function () {
        if (1 === arguments.length) {
          var t = arguments[0],
            e = new It;
          return this.boundablesAtLevel(t, this._root, e), e
        }
        if (3 === arguments.length) {
          var n = arguments[0],
            r = arguments[1],
            i = arguments[2];
          if (et.isTrue(n > -2), r.getLevel() === n) return i.add(r), null;
          for (var o = r.getChildBoundables().iterator(); o.hasNext();) {
            var s = o.next();
            s instanceof Je ? this.boundablesAtLevel(n, s, i) : (et.isTrue(s instanceof He), -1 === n && i.add(s))
          }
          return null
        }
      }, en.prototype.query = function () {
        if (1 === arguments.length) {
          var t = arguments[0];
          this.build();
          var e = new It;
          return this.isEmpty() || this.getIntersectsOp().intersects(this._root.getBounds(), t) && this.query(t, this._root, e), e
        }
        if (2 === arguments.length) {
          var n = arguments[0],
            r = arguments[1];
          if (this.build(), this.isEmpty()) return null;
          this.getIntersectsOp().intersects(this._root.getBounds(), n) && this.query(n, this._root, r)
        } else if (3 === arguments.length)
          if (T(arguments[2], Ze) && arguments[0] instanceof Object && arguments[1] instanceof Je)
            for (var i = arguments[0], o = arguments[1], s = arguments[2], a = o.getChildBoundables(), u = 0; u < a.size(); u++) {
              var l = a.get(u);
              this.getIntersectsOp().intersects(l.getBounds(), i) && (l instanceof Je ? this.query(i, l, s) : l instanceof He ? s.visitItem(l.getItem()) : et.shouldNeverReachHere())
            } else if (T(arguments[2], bt) && arguments[0] instanceof Object && arguments[1] instanceof Je)
              for (var c = arguments[0], h = arguments[1], p = arguments[2], f = h.getChildBoundables(), g = 0; g < f.size(); g++) {
                var d = f.get(g);
                this.getIntersectsOp().intersects(d.getBounds(), c) && (d instanceof Je ? this.query(c, d, p) : d instanceof He ? p.add(d.getItem()) : et.shouldNeverReachHere())
              }
      }, en.prototype.build = function () {
        if (this._built) return null;
        this._root = this._itemBoundables.isEmpty() ? this.createNode(0) : this.createHigherLevels(this._itemBoundables, -1), this._itemBoundables = null, this._built = !0
      }, en.prototype.getRoot = function () {
        return this.build(), this._root
      }, en.prototype.remove = function () {
        if (2 === arguments.length) {
          var t = arguments[0],
            e = arguments[1];
          return this.build(), !!this.getIntersectsOp().intersects(this._root.getBounds(), t) && this.remove(t, this._root, e)
        }
        if (3 === arguments.length) {
          var n = arguments[0],
            r = arguments[1],
            i = arguments[2],
            o = this.removeItem(r, i);
          if (o) return !0;
          for (var s = null, a = r.getChildBoundables().iterator(); a.hasNext();) {
            var u = a.next();
            if (this.getIntersectsOp().intersects(u.getBounds(), n) && u instanceof Je && (o = this.remove(n, u, i))) {
              s = u;
              break
            }
          }
          return null !== s && s.getChildBoundables().isEmpty() && r.getChildBoundables().remove(s), o
        }
      }, en.prototype.createHigherLevels = function (t, e) {
        et.isTrue(!t.isEmpty());
        var n = this.createParentBoundables(t, e + 1);
        return 1 === n.size() ? n.get(0) : this.createHigherLevels(n, e + 1)
      }, en.prototype.depth = function () {
        if (0 === arguments.length) return this.isEmpty() ? 0 : (this.build(), this.depth(this._root));
        if (1 === arguments.length) {
          for (var t = 0, e = arguments[0].getChildBoundables().iterator(); e.hasNext();) {
            var n = e.next();
            if (n instanceof Je) {
              var r = this.depth(n);
              r > t && (t = r)
            }
          }
          return t + 1
        }
      }, en.prototype.createParentBoundables = function (t, e) {
        et.isTrue(!t.isEmpty());
        var n = new It;
        n.add(this.createNode(e));
        var r = new It(t);
        Qe.sort(r, this.getComparator());
        for (var i = r.iterator(); i.hasNext();) {
          var o = i.next();
          this.lastNode(n).getChildBoundables().size() === this.getNodeCapacity() && n.add(this.createNode(e)), this.lastNode(n).addChildBoundable(o)
        }
        return n
      }, en.prototype.isEmpty = function () {
        return this._built ? this._root.isEmpty() : this._itemBoundables.isEmpty()
      }, en.prototype.interfaces_ = function () {
        return [e]
      }, en.prototype.getClass = function () {
        return en
      }, en.compareDoubles = function (t, e) {
        return t > e ? 1 : t < e ? -1 : 0
      }, nn.IntersectsOp.get = function () {
        return rn
      }, nn.serialVersionUID.get = function () {
        return -0x35ef64c82d4c5400
      }, nn.DEFAULT_NODE_CAPACITY.get = function () {
        return 10
      }, Object.defineProperties(en, nn);
      var rn = function () {},
        on = function () {};
      on.prototype.distance = function (t, e) {}, on.prototype.interfaces_ = function () {
        return []
      }, on.prototype.getClass = function () {
        return on
      };
      var sn = function (t) {
          function n(e) {
            e = e || n.DEFAULT_NODE_CAPACITY, t.call(this, e)
          }
          t && (n.__proto__ = t), (n.prototype = Object.create(t && t.prototype)).constructor = n;
          var r = {
            STRtreeNode: {
              configurable: !0
            },
            serialVersionUID: {
              configurable: !0
            },
            xComparator: {
              configurable: !0
            },
            yComparator: {
              configurable: !0
            },
            intersectsOp: {
              configurable: !0
            },
            DEFAULT_NODE_CAPACITY: {
              configurable: !0
            }
          };
          return n.prototype.createParentBoundablesFromVerticalSlices = function (t, e) {
            et.isTrue(t.length > 0);
            for (var n = new It, r = 0; r < t.length; r++) n.addAll(this.createParentBoundablesFromVerticalSlice(t[r], e));
            return n
          }, n.prototype.createNode = function (t) {
            return new an(t)
          }, n.prototype.size = function () {
            return 0 === arguments.length ? t.prototype.size.call(this) : t.prototype.size.apply(this, arguments)
          }, n.prototype.insert = function () {
            if (2 !== arguments.length) return t.prototype.insert.apply(this, arguments);
            var e = arguments[0],
              n = arguments[1];
            if (e.isNull()) return null;
            t.prototype.insert.call(this, e, n)
          }, n.prototype.getIntersectsOp = function () {
            return n.intersectsOp
          }, n.prototype.verticalSlices = function (t, e) {
            for (var n = Math.trunc(Math.ceil(t.size() / e)), r = new Array(e).fill(null), i = t.iterator(), o = 0; o < e; o++) {
              r[o] = new It;
              for (var s = 0; i.hasNext() && s < n;) {
                var a = i.next();
                r[o].add(a), s++
              }
            }
            return r
          }, n.prototype.query = function () {
            if (1 === arguments.length) {
              var e = arguments[0];
              return t.prototype.query.call(this, e)
            }
            if (2 === arguments.length) {
              var n = arguments[0],
                r = arguments[1];
              t.prototype.query.call(this, n, r)
            } else if (3 === arguments.length)
              if (T(arguments[2], Ze) && arguments[0] instanceof Object && arguments[1] instanceof Je) {
                var i = arguments[0],
                  o = arguments[1],
                  s = arguments[2];
                t.prototype.query.call(this, i, o, s)
              } else if (T(arguments[2], bt) && arguments[0] instanceof Object && arguments[1] instanceof Je) {
              var a = arguments[0],
                u = arguments[1],
                l = arguments[2];
              t.prototype.query.call(this, a, u, l)
            }
          }, n.prototype.getComparator = function () {
            return n.yComparator
          }, n.prototype.createParentBoundablesFromVerticalSlice = function (e, n) {
            return t.prototype.createParentBoundables.call(this, e, n)
          }, n.prototype.remove = function () {
            if (2 === arguments.length) {
              var e = arguments[0],
                n = arguments[1];
              return t.prototype.remove.call(this, e, n)
            }
            return t.prototype.remove.apply(this, arguments)
          }, n.prototype.depth = function () {
            return 0 === arguments.length ? t.prototype.depth.call(this) : t.prototype.depth.apply(this, arguments)
          }, n.prototype.createParentBoundables = function (t, e) {
            et.isTrue(!t.isEmpty());
            var r = Math.trunc(Math.ceil(t.size() / this.getNodeCapacity())),
              i = new It(t);
            Qe.sort(i, n.xComparator);
            var o = this.verticalSlices(i, Math.trunc(Math.ceil(Math.sqrt(r))));
            return this.createParentBoundablesFromVerticalSlices(o, e)
          }, n.prototype.nearestNeighbour = function () {
            if (1 === arguments.length) {
              if (T(arguments[0], on)) {
                var t = arguments[0],
                  e = new tn(this.getRoot(), this.getRoot(), t);
                return this.nearestNeighbour(e)
              }
              if (arguments[0] instanceof tn) {
                var r = arguments[0];
                return this.nearestNeighbour(r, v.POSITIVE_INFINITY)
              }
            } else if (2 === arguments.length) {
              if (arguments[0] instanceof n && T(arguments[1], on)) {
                var i = arguments[0],
                  o = arguments[1],
                  s = new tn(this.getRoot(), i.getRoot(), o);
                return this.nearestNeighbour(s)
              }
              if (arguments[0] instanceof tn && "number" == typeof arguments[1]) {
                var a = arguments[0],
                  u = arguments[1],
                  l = null,
                  c = new We;
                for (c.add(a); !c.isEmpty() && u > 0;) {
                  var h = c.poll(),
                    p = h.getDistance();
                  if (p >= u) break;
                  h.isLeaves() ? (u = p, l = h) : h.expandToQueue(c, u)
                }
                return [l.getBoundable(0).getItem(), l.getBoundable(1).getItem()]
              }
            } else if (3 === arguments.length) {
              var f = arguments[0],
                g = arguments[1],
                d = arguments[2],
                y = new He(f, g),
                _ = new tn(this.getRoot(), y, d);
              return this.nearestNeighbour(_)[0]
            }
          }, n.prototype.interfaces_ = function () {
            return [$e, e]
          }, n.prototype.getClass = function () {
            return n
          }, n.centreX = function (t) {
            return n.avg(t.getMinX(), t.getMaxX())
          }, n.avg = function (t, e) {
            return (t + e) / 2
          }, n.centreY = function (t) {
            return n.avg(t.getMinY(), t.getMaxY())
          }, r.STRtreeNode.get = function () {
            return an
          }, r.serialVersionUID.get = function () {
            return 0x39920f7d5f261e0
          }, r.xComparator.get = function () {
            return {
              interfaces_: function () {
                return [I]
              },
              compare: function (e, r) {
                return t.compareDoubles(n.centreX(e.getBounds()), n.centreX(r.getBounds()))
              }
            }
          }, r.yComparator.get = function () {
            return {
              interfaces_: function () {
                return [I]
              },
              compare: function (e, r) {
                return t.compareDoubles(n.centreY(e.getBounds()), n.centreY(r.getBounds()))
              }
            }
          }, r.intersectsOp.get = function () {
            return {
              interfaces_: function () {
                return [t.IntersectsOp]
              },
              intersects: function (t, e) {
                return t.intersects(e)
              }
            }
          }, r.DEFAULT_NODE_CAPACITY.get = function () {
            return 10
          }, Object.defineProperties(n, r), n
        }(en),
        an = function (t) {
          function e() {
            var e = arguments[0];
            t.call(this, e)
          }
          return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.computeBounds = function () {
            for (var t = null, e = this.getChildBoundables().iterator(); e.hasNext();) {
              var n = e.next();
              null === t ? t = new Y(n.getBounds()) : t.expandToInclude(n.getBounds())
            }
            return t
          }, e.prototype.interfaces_ = function () {
            return []
          }, e.prototype.getClass = function () {
            return e
          }, e
        }(Je),
        un = function () {};
      un.prototype.interfaces_ = function () {
        return []
      }, un.prototype.getClass = function () {
        return un
      }, un.relativeSign = function (t, e) {
        return t < e ? -1 : t > e ? 1 : 0
      }, un.compare = function (t, e, n) {
        if (e.equals2D(n)) return 0;
        var r = un.relativeSign(e.x, n.x),
          i = un.relativeSign(e.y, n.y);
        switch (t) {
          case 0:
            return un.compareValue(r, i);
          case 1:
            return un.compareValue(i, r);
          case 2:
            return un.compareValue(i, -r);
          case 3:
            return un.compareValue(-r, i);
          case 4:
            return un.compareValue(-r, -i);
          case 5:
            return un.compareValue(-i, -r);
          case 6:
            return un.compareValue(-i, r);
          case 7:
            return un.compareValue(r, -i)
        }
        return et.shouldNeverReachHere("invalid octant value"), 0
      }, un.compareValue = function (t, e) {
        return t < 0 ? -1 : t > 0 ? 1 : e < 0 ? -1 : e > 0 ? 1 : 0
      };
      var ln = function () {
        this._segString = null, this.coord = null, this.segmentIndex = null, this._segmentOctant = null, this._isInterior = null;
        var t = arguments[0],
          e = arguments[1],
          n = arguments[2],
          r = arguments[3];
        this._segString = t, this.coord = new N(e), this.segmentIndex = n, this._segmentOctant = r, this._isInterior = !e.equals2D(t.getCoordinate(n))
      };
      ln.prototype.getCoordinate = function () {
        return this.coord
      }, ln.prototype.print = function (t) {
        t.print(this.coord), t.print(" seg # = " + this.segmentIndex)
      }, ln.prototype.compareTo = function (t) {
        var e = t;
        return this.segmentIndex < e.segmentIndex ? -1 : this.segmentIndex > e.segmentIndex ? 1 : this.coord.equals2D(e.coord) ? 0 : un.compare(this._segmentOctant, this.coord, e.coord)
      }, ln.prototype.isEndPoint = function (t) {
        return 0 === this.segmentIndex && !this._isInterior || this.segmentIndex === t
      }, ln.prototype.isInterior = function () {
        return this._isInterior
      }, ln.prototype.interfaces_ = function () {
        return [E]
      }, ln.prototype.getClass = function () {
        return ln
      };
      var cn = function () {
        this._nodeMap = new h, this._edge = null;
        var t = arguments[0];
        this._edge = t
      };
      cn.prototype.getSplitCoordinates = function () {
        var t = new wt;
        this.addEndpoints();
        for (var e = this.iterator(), n = e.next(); e.hasNext();) {
          var r = e.next();
          this.addEdgeCoordinates(n, r, t), n = r
        }
        return t.toCoordinateArray()
      }, cn.prototype.addCollapsedNodes = function () {
        var t = new It;
        this.findCollapsesFromInsertedNodes(t), this.findCollapsesFromExistingVertices(t);
        for (var e = t.iterator(); e.hasNext();) {
          var n = e.next().intValue();
          this.add(this._edge.getCoordinate(n), n)
        }
      }, cn.prototype.print = function (t) {
        t.println("Intersections:");
        for (var e = this.iterator(); e.hasNext();) e.next().print(t)
      }, cn.prototype.findCollapsesFromExistingVertices = function (t) {
        for (var e = 0; e < this._edge.size() - 2; e++) {
          var n = this._edge.getCoordinate(e),
            r = this._edge.getCoordinate(e + 2);
          n.equals2D(r) && t.add(new D(e + 1))
        }
      }, cn.prototype.addEdgeCoordinates = function (t, e, n) {
        var r = this._edge.getCoordinate(e.segmentIndex),
          i = e.isInterior() || !e.coord.equals2D(r);
        n.add(new N(t.coord), !1);
        for (var o = t.segmentIndex + 1; o <= e.segmentIndex; o++) n.add(this._edge.getCoordinate(o));
        i && n.add(new N(e.coord))
      }, cn.prototype.iterator = function () {
        return this._nodeMap.values().iterator()
      }, cn.prototype.addSplitEdges = function (t) {
        this.addEndpoints(), this.addCollapsedNodes();
        for (var e = this.iterator(), n = e.next(); e.hasNext();) {
          var r = e.next(),
            i = this.createSplitEdge(n, r);
          t.add(i), n = r
        }
      }, cn.prototype.findCollapseIndex = function (t, e, n) {
        if (!t.coord.equals2D(e.coord)) return !1;
        var r = e.segmentIndex - t.segmentIndex;
        return e.isInterior() || r--, 1 === r && (n[0] = t.segmentIndex + 1, !0)
      }, cn.prototype.findCollapsesFromInsertedNodes = function (t) {
        for (var e = new Array(1).fill(null), n = this.iterator(), r = n.next(); n.hasNext();) {
          var i = n.next();
          this.findCollapseIndex(r, i, e) && t.add(new D(e[0])), r = i
        }
      }, cn.prototype.getEdge = function () {
        return this._edge
      }, cn.prototype.addEndpoints = function () {
        var t = this._edge.size() - 1;
        this.add(this._edge.getCoordinate(0), 0), this.add(this._edge.getCoordinate(t), t)
      }, cn.prototype.createSplitEdge = function (t, e) {
        var n = e.segmentIndex - t.segmentIndex + 2,
          r = this._edge.getCoordinate(e.segmentIndex),
          i = e.isInterior() || !e.coord.equals2D(r);
        i || n--;
        var o = new Array(n).fill(null),
          s = 0;
        o[s++] = new N(t.coord);
        for (var a = t.segmentIndex + 1; a <= e.segmentIndex; a++) o[s++] = this._edge.getCoordinate(a);
        return i && (o[s] = new N(e.coord)), new gn(o, this._edge.getData())
      }, cn.prototype.add = function (t, e) {
        var n = new ln(this._edge, t, e, this._edge.getSegmentOctant(e)),
          r = this._nodeMap.get(n);
        return null !== r ? (et.isTrue(r.coord.equals2D(t), "Found equal nodes with different coordinates"), r) : (this._nodeMap.put(n, n), n)
      }, cn.prototype.checkSplitEdgesCorrectness = function (t) {
        var e = this._edge.getCoordinates(),
          n = t.get(0).getCoordinate(0);
        if (!n.equals2D(e[0])) throw new Q("bad split edge start point at " + n);
        var r = t.get(t.size() - 1).getCoordinates(),
          i = r[r.length - 1];
        if (!i.equals2D(e[e.length - 1])) throw new Q("bad split edge end point at " + i)
      }, cn.prototype.interfaces_ = function () {
        return []
      }, cn.prototype.getClass = function () {
        return cn
      };
      var hn = function () {};
      hn.prototype.interfaces_ = function () {
        return []
      }, hn.prototype.getClass = function () {
        return hn
      }, hn.octant = function () {
        if ("number" == typeof arguments[0] && "number" == typeof arguments[1]) {
          var t = arguments[0],
            e = arguments[1];
          if (0 === t && 0 === e) throw new m("Cannot compute the octant for point ( " + t + ", " + e + " )");
          var n = Math.abs(t),
            r = Math.abs(e);
          return t >= 0 ? e >= 0 ? n >= r ? 0 : 1 : n >= r ? 7 : 6 : e >= 0 ? n >= r ? 3 : 2 : n >= r ? 4 : 5
        }
        if (arguments[0] instanceof N && arguments[1] instanceof N) {
          var i = arguments[0],
            o = arguments[1],
            s = o.x - i.x,
            a = o.y - i.y;
          if (0 === s && 0 === a) throw new m("Cannot compute the octant for two identical points " + i);
          return hn.octant(s, a)
        }
      };
      var pn = function () {};
      pn.prototype.getCoordinates = function () {}, pn.prototype.size = function () {}, pn.prototype.getCoordinate = function (t) {}, pn.prototype.isClosed = function () {}, pn.prototype.setData = function (t) {}, pn.prototype.getData = function () {}, pn.prototype.interfaces_ = function () {
        return []
      }, pn.prototype.getClass = function () {
        return pn
      };
      var fn = function () {};
      fn.prototype.addIntersection = function (t, e) {}, fn.prototype.interfaces_ = function () {
        return [pn]
      }, fn.prototype.getClass = function () {
        return fn
      };
      var gn = function () {
        this._nodeList = new cn(this), this._pts = null, this._data = null;
        var t = arguments[0],
          e = arguments[1];
        this._pts = t, this._data = e
      };
      gn.prototype.getCoordinates = function () {
        return this._pts
      }, gn.prototype.size = function () {
        return this._pts.length
      }, gn.prototype.getCoordinate = function (t) {
        return this._pts[t]
      }, gn.prototype.isClosed = function () {
        return this._pts[0].equals(this._pts[this._pts.length - 1])
      }, gn.prototype.getSegmentOctant = function (t) {
        return t === this._pts.length - 1 ? -1 : this.safeOctant(this.getCoordinate(t), this.getCoordinate(t + 1))
      }, gn.prototype.setData = function (t) {
        this._data = t
      }, gn.prototype.safeOctant = function (t, e) {
        return t.equals2D(e) ? 0 : hn.octant(t, e)
      }, gn.prototype.getData = function () {
        return this._data
      }, gn.prototype.addIntersection = function () {
        if (2 === arguments.length) {
          var t = arguments[0],
            e = arguments[1];
          this.addIntersectionNode(t, e)
        } else if (4 === arguments.length) {
          var n = arguments[0],
            r = arguments[1],
            i = arguments[3],
            o = new N(n.getIntersection(i));
          this.addIntersection(o, r)
        }
      }, gn.prototype.toString = function () {
        return K.toLineString(new ue(this._pts))
      }, gn.prototype.getNodeList = function () {
        return this._nodeList
      }, gn.prototype.addIntersectionNode = function (t, e) {
        var n = e,
          r = n + 1;
        if (r < this._pts.length) {
          var i = this._pts[r];
          t.equals2D(i) && (n = r)
        }
        return this._nodeList.add(t, n)
      }, gn.prototype.addIntersections = function (t, e, n) {
        for (var r = 0; r < t.getIntersectionNum(); r++) this.addIntersection(t, e, n, r)
      }, gn.prototype.interfaces_ = function () {
        return [fn]
      }, gn.prototype.getClass = function () {
        return gn
      }, gn.getNodedSubstrings = function () {
        if (1 === arguments.length) {
          var t = arguments[0],
            e = new It;
          return gn.getNodedSubstrings(t, e), e
        }
        if (2 === arguments.length)
          for (var n = arguments[0], r = arguments[1], i = n.iterator(); i.hasNext();) i.next().getNodeList().addSplitEdges(r)
      };
      var dn = function () {
          if (this.p0 = null, this.p1 = null, 0 === arguments.length) this.p0 = new N, this.p1 = new N;
          else if (1 === arguments.length) {
            var t = arguments[0];
            this.p0 = new N(t.p0), this.p1 = new N(t.p1)
          } else if (2 === arguments.length) this.p0 = arguments[0], this.p1 = arguments[1];
          else if (4 === arguments.length) {
            var e = arguments[0],
              n = arguments[1],
              r = arguments[2],
              i = arguments[3];
            this.p0 = new N(e, n), this.p1 = new N(r, i)
          }
        },
        yn = {
          serialVersionUID: {
            configurable: !0
          }
        };
      dn.prototype.minX = function () {
        return Math.min(this.p0.x, this.p1.x)
      }, dn.prototype.orientationIndex = function () {
        if (arguments[0] instanceof dn) {
          var t = arguments[0],
            e = at.orientationIndex(this.p0, this.p1, t.p0),
            n = at.orientationIndex(this.p0, this.p1, t.p1);
          return e >= 0 && n >= 0 || e <= 0 && n <= 0 ? Math.max(e, n) : 0
        }
        if (arguments[0] instanceof N) {
          var r = arguments[0];
          return at.orientationIndex(this.p0, this.p1, r)
        }
      }, dn.prototype.toGeometry = function (t) {
        return t.createLineString([this.p0, this.p1])
      }, dn.prototype.isVertical = function () {
        return this.p0.x === this.p1.x
      }, dn.prototype.equals = function (t) {
        if (!(t instanceof dn)) return !1;
        var e = t;
        return this.p0.equals(e.p0) && this.p1.equals(e.p1)
      }, dn.prototype.intersection = function (t) {
        var e = new it;
        return e.computeIntersection(this.p0, this.p1, t.p0, t.p1), e.hasIntersection() ? e.getIntersection(0) : null
      }, dn.prototype.project = function () {
        if (arguments[0] instanceof N) {
          var t = arguments[0];
          if (t.equals(this.p0) || t.equals(this.p1)) return new N(t);
          var e = this.projectionFactor(t),
            n = new N;
          return n.x = this.p0.x + e * (this.p1.x - this.p0.x), n.y = this.p0.y + e * (this.p1.y - this.p0.y), n
        }
        if (arguments[0] instanceof dn) {
          var r = arguments[0],
            i = this.projectionFactor(r.p0),
            o = this.projectionFactor(r.p1);
          if (i >= 1 && o >= 1) return null;
          if (i <= 0 && o <= 0) return null;
          var s = this.project(r.p0);
          i < 0 && (s = this.p0), i > 1 && (s = this.p1);
          var a = this.project(r.p1);
          return o < 0 && (a = this.p0), o > 1 && (a = this.p1), new dn(s, a)
        }
      }, dn.prototype.normalize = function () {
        this.p1.compareTo(this.p0) < 0 && this.reverse()
      }, dn.prototype.angle = function () {
        return Math.atan2(this.p1.y - this.p0.y, this.p1.x - this.p0.x)
      }, dn.prototype.getCoordinate = function (t) {
        return 0 === t ? this.p0 : this.p1
      }, dn.prototype.distancePerpendicular = function (t) {
        return at.distancePointLinePerpendicular(t, this.p0, this.p1)
      }, dn.prototype.minY = function () {
        return Math.min(this.p0.y, this.p1.y)
      }, dn.prototype.midPoint = function () {
        return dn.midPoint(this.p0, this.p1)
      }, dn.prototype.projectionFactor = function (t) {
        if (t.equals(this.p0)) return 0;
        if (t.equals(this.p1)) return 1;
        var e = this.p1.x - this.p0.x,
          n = this.p1.y - this.p0.y,
          r = e * e + n * n;
        return r <= 0 ? v.NaN : ((t.x - this.p0.x) * e + (t.y - this.p0.y) * n) / r
      }, dn.prototype.closestPoints = function (t) {
        var e = this.intersection(t);
        if (null !== e) return [e, e];
        var n = new Array(2).fill(null),
          r = v.MAX_VALUE,
          i = null,
          o = this.closestPoint(t.p0);
        r = o.distance(t.p0), n[0] = o, n[1] = t.p0;
        var s = this.closestPoint(t.p1);
        (i = s.distance(t.p1)) < r && (r = i, n[0] = s, n[1] = t.p1);
        var a = t.closestPoint(this.p0);
        (i = a.distance(this.p0)) < r && (r = i, n[0] = this.p0, n[1] = a);
        var u = t.closestPoint(this.p1);
        return (i = u.distance(this.p1)) < r && (r = i, n[0] = this.p1, n[1] = u), n
      }, dn.prototype.closestPoint = function (t) {
        var e = this.projectionFactor(t);
        return e > 0 && e < 1 ? this.project(t) : this.p0.distance(t) < this.p1.distance(t) ? this.p0 : this.p1
      }, dn.prototype.maxX = function () {
        return Math.max(this.p0.x, this.p1.x)
      }, dn.prototype.getLength = function () {
        return this.p0.distance(this.p1)
      }, dn.prototype.compareTo = function (t) {
        var e = t,
          n = this.p0.compareTo(e.p0);
        return 0 !== n ? n : this.p1.compareTo(e.p1)
      }, dn.prototype.reverse = function () {
        var t = this.p0;
        this.p0 = this.p1, this.p1 = t
      }, dn.prototype.equalsTopo = function (t) {
        return this.p0.equals(t.p0) && (this.p1.equals(t.p1) || this.p0.equals(t.p1)) && this.p1.equals(t.p0)
      }, dn.prototype.lineIntersection = function (t) {
        try {
          return X.intersection(this.p0, this.p1, t.p0, t.p1)
        } catch (t) {
          if (!(t instanceof V)) throw t
        }
        return null
      }, dn.prototype.maxY = function () {
        return Math.max(this.p0.y, this.p1.y)
      }, dn.prototype.pointAlongOffset = function (t, e) {
        var n = this.p0.x + t * (this.p1.x - this.p0.x),
          r = this.p0.y + t * (this.p1.y - this.p0.y),
          i = this.p1.x - this.p0.x,
          o = this.p1.y - this.p0.y,
          s = Math.sqrt(i * i + o * o),
          a = 0,
          u = 0;
        if (0 !== e) {
          if (s <= 0) throw new Error("Cannot compute offset from zero-length line segment");
          a = e * i / s, u = e * o / s
        }
        return new N(n - u, r + a)
      }, dn.prototype.setCoordinates = function () {
        if (1 === arguments.length) {
          var t = arguments[0];
          this.setCoordinates(t.p0, t.p1)
        } else if (2 === arguments.length) {
          var e = arguments[0],
            n = arguments[1];
          this.p0.x = e.x, this.p0.y = e.y, this.p1.x = n.x, this.p1.y = n.y
        }
      }, dn.prototype.segmentFraction = function (t) {
        var e = this.projectionFactor(t);
        return e < 0 ? e = 0 : (e > 1 || v.isNaN(e)) && (e = 1), e
      }, dn.prototype.toString = function () {
        return "LINESTRING( " + this.p0.x + " " + this.p0.y + ", " + this.p1.x + " " + this.p1.y + ")"
      }, dn.prototype.isHorizontal = function () {
        return this.p0.y === this.p1.y
      }, dn.prototype.distance = function () {
        if (arguments[0] instanceof dn) {
          var t = arguments[0];
          return at.distanceLineLine(this.p0, this.p1, t.p0, t.p1)
        }
        if (arguments[0] instanceof N) {
          var e = arguments[0];
          return at.distancePointLine(e, this.p0, this.p1)
        }
      }, dn.prototype.pointAlong = function (t) {
        var e = new N;
        return e.x = this.p0.x + t * (this.p1.x - this.p0.x), e.y = this.p0.y + t * (this.p1.y - this.p0.y), e
      }, dn.prototype.hashCode = function () {
        var t = v.doubleToLongBits(this.p0.x);
        t ^= 31 * v.doubleToLongBits(this.p0.y);
        var e = Math.trunc(t) ^ Math.trunc(t >> 32),
          n = v.doubleToLongBits(this.p1.x);
        return n ^= 31 * v.doubleToLongBits(this.p1.y), e ^ Math.trunc(n) ^ Math.trunc(n >> 32)
      }, dn.prototype.interfaces_ = function () {
        return [E, e]
      }, dn.prototype.getClass = function () {
        return dn
      }, dn.midPoint = function (t, e) {
        return new N((t.x + e.x) / 2, (t.y + e.y) / 2)
      }, yn.serialVersionUID.get = function () {
        return 0x2d2172135f411c00
      }, Object.defineProperties(dn, yn);
      var _n = function () {
        this.tempEnv1 = new Y, this.tempEnv2 = new Y, this._overlapSeg1 = new dn, this._overlapSeg2 = new dn
      };
      _n.prototype.overlap = function () {
        if (2 === arguments.length);
        else if (4 === arguments.length) {
          var t = arguments[0],
            e = arguments[1],
            n = arguments[2],
            r = arguments[3];
          t.getLineSegment(e, this._overlapSeg1), n.getLineSegment(r, this._overlapSeg2), this.overlap(this._overlapSeg1, this._overlapSeg2)
        }
      }, _n.prototype.interfaces_ = function () {
        return []
      }, _n.prototype.getClass = function () {
        return _n
      };
      var mn = function () {
        this._pts = null, this._start = null, this._end = null, this._env = null, this._context = null, this._id = null;
        var t = arguments[0],
          e = arguments[1],
          n = arguments[2],
          r = arguments[3];
        this._pts = t, this._start = e, this._end = n, this._context = r
      };
      mn.prototype.getLineSegment = function (t, e) {
        e.p0 = this._pts[t], e.p1 = this._pts[t + 1]
      }, mn.prototype.computeSelect = function (t, e, n, r) {
        var i = this._pts[e],
          o = this._pts[n];
        if (r.tempEnv1.init(i, o), n - e == 1) return r.select(this, e), null;
        if (!t.intersects(r.tempEnv1)) return null;
        var s = Math.trunc((e + n) / 2);
        e < s && this.computeSelect(t, e, s, r), s < n && this.computeSelect(t, s, n, r)
      }, mn.prototype.getCoordinates = function () {
        for (var t = new Array(this._end - this._start + 1).fill(null), e = 0, n = this._start; n <= this._end; n++) t[e++] = this._pts[n];
        return t
      }, mn.prototype.computeOverlaps = function (t, e) {
        this.computeOverlapsInternal(this._start, this._end, t, t._start, t._end, e)
      }, mn.prototype.setId = function (t) {
        this._id = t
      }, mn.prototype.select = function (t, e) {
        this.computeSelect(t, this._start, this._end, e)
      }, mn.prototype.getEnvelope = function () {
        if (null === this._env) {
          var t = this._pts[this._start],
            e = this._pts[this._end];
          this._env = new Y(t, e)
        }
        return this._env
      }, mn.prototype.getEndIndex = function () {
        return this._end
      }, mn.prototype.getStartIndex = function () {
        return this._start
      }, mn.prototype.getContext = function () {
        return this._context
      }, mn.prototype.getId = function () {
        return this._id
      }, mn.prototype.computeOverlapsInternal = function (t, e, n, r, i, o) {
        var s = this._pts[t],
          a = this._pts[e],
          u = n._pts[r],
          l = n._pts[i];
        if (e - t == 1 && i - r == 1) return o.overlap(this, t, n, r), null;
        if (o.tempEnv1.init(s, a), o.tempEnv2.init(u, l), !o.tempEnv1.intersects(o.tempEnv2)) return null;
        var c = Math.trunc((t + e) / 2),
          h = Math.trunc((r + i) / 2);
        t < c && (r < h && this.computeOverlapsInternal(t, c, n, r, h, o), h < i && this.computeOverlapsInternal(t, c, n, h, i, o)), c < e && (r < h && this.computeOverlapsInternal(c, e, n, r, h, o), h < i && this.computeOverlapsInternal(c, e, n, h, i, o))
      }, mn.prototype.interfaces_ = function () {
        return []
      }, mn.prototype.getClass = function () {
        return mn
      };
      var vn = function () {};
      vn.prototype.interfaces_ = function () {
        return []
      }, vn.prototype.getClass = function () {
        return vn
      }, vn.getChainStartIndices = function (t) {
        var e = 0,
          n = new It;
        n.add(new D(e));
        do {
          var r = vn.findChainEnd(t, e);
          n.add(new D(r)), e = r
        } while (e < t.length - 1);
        return vn.toIntArray(n)
      }, vn.findChainEnd = function (t, e) {
        for (var n = e; n < t.length - 1 && t[n].equals2D(t[n + 1]);) n++;
        if (n >= t.length - 1) return t.length - 1;
        for (var r = qe.quadrant(t[n], t[n + 1]), i = e + 1; i < t.length && (t[i - 1].equals2D(t[i]) || qe.quadrant(t[i - 1], t[i]) === r);) i++;
        return i - 1
      }, vn.getChains = function () {
        if (1 === arguments.length) {
          var t = arguments[0];
          return vn.getChains(t, null)
        }
        if (2 === arguments.length) {
          for (var e = arguments[0], n = arguments[1], r = new It, i = vn.getChainStartIndices(e), o = 0; o < i.length - 1; o++) {
            var s = new mn(e, i[o], i[o + 1], n);
            r.add(s)
          }
          return r
        }
      }, vn.toIntArray = function (t) {
        for (var e = new Array(t.size()).fill(null), n = 0; n < e.length; n++) e[n] = t.get(n).intValue();
        return e
      };
      var xn = function () {};
      xn.prototype.computeNodes = function (t) {}, xn.prototype.getNodedSubstrings = function () {}, xn.prototype.interfaces_ = function () {
        return []
      }, xn.prototype.getClass = function () {
        return xn
      };
      var En = function () {
        if (this._segInt = null, 0 === arguments.length);
        else if (1 === arguments.length) {
          var t = arguments[0];
          this.setSegmentIntersector(t)
        }
      };
      En.prototype.setSegmentIntersector = function (t) {
        this._segInt = t
      }, En.prototype.interfaces_ = function () {
        return [xn]
      }, En.prototype.getClass = function () {
        return En
      };
      var bn = function (t) {
          function e(e) {
            e ? t.call(this, e) : t.call(this), this._monoChains = new It, this._index = new sn, this._idCounter = 0, this._nodedSegStrings = null, this._nOverlaps = 0
          }
          t && (e.__proto__ = t), (e.prototype = Object.create(t && t.prototype)).constructor = e;
          var n = {
            SegmentOverlapAction: {
              configurable: !0
            }
          };
          return e.prototype.getMonotoneChains = function () {
            return this._monoChains
          }, e.prototype.getNodedSubstrings = function () {
            return gn.getNodedSubstrings(this._nodedSegStrings)
          }, e.prototype.getIndex = function () {
            return this._index
          }, e.prototype.add = function (t) {
            for (var e = vn.getChains(t.getCoordinates(), t).iterator(); e.hasNext();) {
              var n = e.next();
              n.setId(this._idCounter++), this._index.insert(n.getEnvelope(), n), this._monoChains.add(n)
            }
          }, e.prototype.computeNodes = function (t) {
            this._nodedSegStrings = t;
            for (var e = t.iterator(); e.hasNext();) this.add(e.next());
            this.intersectChains()
          }, e.prototype.intersectChains = function () {
            for (var t = new In(this._segInt), e = this._monoChains.iterator(); e.hasNext();)
              for (var n = e.next(), r = this._index.query(n.getEnvelope()).iterator(); r.hasNext();) {
                var i = r.next();
                if (i.getId() > n.getId() && (n.computeOverlaps(i, t), this._nOverlaps++), this._segInt.isDone()) return null
              }
          }, e.prototype.interfaces_ = function () {
            return []
          }, e.prototype.getClass = function () {
            return e
          }, n.SegmentOverlapAction.get = function () {
            return In
          }, Object.defineProperties(e, n), e
        }(En),
        In = function (t) {
          function e() {
            t.call(this), this._si = null;
            var e = arguments[0];
            this._si = e
          }
          return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.overlap = function () {
            if (4 !== arguments.length) return t.prototype.overlap.apply(this, arguments);
            var e = arguments[0],
              n = arguments[1],
              r = arguments[2],
              i = arguments[3],
              o = e.getContext(),
              s = r.getContext();
            this._si.processIntersections(o, n, s, i)
          }, e.prototype.interfaces_ = function () {
            return []
          }, e.prototype.getClass = function () {
            return e
          }, e
        }(_n),
        Nn = function t() {
          if (this._quadrantSegments = t.DEFAULT_QUADRANT_SEGMENTS, this._endCapStyle = t.CAP_ROUND, this._joinStyle = t.JOIN_ROUND, this._mitreLimit = t.DEFAULT_MITRE_LIMIT, this._isSingleSided = !1, this._simplifyFactor = t.DEFAULT_SIMPLIFY_FACTOR, 0 === arguments.length);
          else if (1 === arguments.length) {
            var e = arguments[0];
            this.setQuadrantSegments(e)
          } else if (2 === arguments.length) {
            var n = arguments[0],
              r = arguments[1];
            this.setQuadrantSegments(n), this.setEndCapStyle(r)
          } else if (4 === arguments.length) {
            var i = arguments[0],
              o = arguments[1],
              s = arguments[2],
              a = arguments[3];
            this.setQuadrantSegments(i), this.setEndCapStyle(o), this.setJoinStyle(s), this.setMitreLimit(a)
          }
        },
        wn = {
          CAP_ROUND: {
            configurable: !0
          },
          CAP_FLAT: {
            configurable: !0
          },
          CAP_SQUARE: {
            configurable: !0
          },
          JOIN_ROUND: {
            configurable: !0
          },
          JOIN_MITRE: {
            configurable: !0
          },
          JOIN_BEVEL: {
            configurable: !0
          },
          DEFAULT_QUADRANT_SEGMENTS: {
            configurable: !0
          },
          DEFAULT_MITRE_LIMIT: {
            configurable: !0
          },
          DEFAULT_SIMPLIFY_FACTOR: {
            configurable: !0
          }
        };
      Nn.prototype.getEndCapStyle = function () {
        return this._endCapStyle
      }, Nn.prototype.isSingleSided = function () {
        return this._isSingleSided
      }, Nn.prototype.setQuadrantSegments = function (t) {
        this._quadrantSegments = t, 0 === this._quadrantSegments && (this._joinStyle = Nn.JOIN_BEVEL), this._quadrantSegments < 0 && (this._joinStyle = Nn.JOIN_MITRE, this._mitreLimit = Math.abs(this._quadrantSegments)), t <= 0 && (this._quadrantSegments = 1), this._joinStyle !== Nn.JOIN_ROUND && (this._quadrantSegments = Nn.DEFAULT_QUADRANT_SEGMENTS)
      }, Nn.prototype.getJoinStyle = function () {
        return this._joinStyle
      }, Nn.prototype.setJoinStyle = function (t) {
        this._joinStyle = t
      }, Nn.prototype.setSimplifyFactor = function (t) {
        this._simplifyFactor = t < 0 ? 0 : t
      }, Nn.prototype.getSimplifyFactor = function () {
        return this._simplifyFactor
      }, Nn.prototype.getQuadrantSegments = function () {
        return this._quadrantSegments
      }, Nn.prototype.setEndCapStyle = function (t) {
        this._endCapStyle = t
      }, Nn.prototype.getMitreLimit = function () {
        return this._mitreLimit
      }, Nn.prototype.setMitreLimit = function (t) {
        this._mitreLimit = t
      }, Nn.prototype.setSingleSided = function (t) {
        this._isSingleSided = t
      }, Nn.prototype.interfaces_ = function () {
        return []
      }, Nn.prototype.getClass = function () {
        return Nn
      }, Nn.bufferDistanceError = function (t) {
        var e = Math.PI / 2 / t;
        return 1 - Math.cos(e / 2)
      }, wn.CAP_ROUND.get = function () {
        return 1
      }, wn.CAP_FLAT.get = function () {
        return 2
      }, wn.CAP_SQUARE.get = function () {
        return 3
      }, wn.JOIN_ROUND.get = function () {
        return 1
      }, wn.JOIN_MITRE.get = function () {
        return 2
      }, wn.JOIN_BEVEL.get = function () {
        return 3
      }, wn.DEFAULT_QUADRANT_SEGMENTS.get = function () {
        return 8
      }, wn.DEFAULT_MITRE_LIMIT.get = function () {
        return 5
      }, wn.DEFAULT_SIMPLIFY_FACTOR.get = function () {
        return .01
      }, Object.defineProperties(Nn, wn);
      var Cn = function (t) {
          this._distanceTol = null, this._isDeleted = null, this._angleOrientation = at.COUNTERCLOCKWISE, this._inputLine = t || null
        },
        Sn = {
          INIT: {
            configurable: !0
          },
          DELETE: {
            configurable: !0
          },
          KEEP: {
            configurable: !0
          },
          NUM_PTS_TO_CHECK: {
            configurable: !0
          }
        };
      Cn.prototype.isDeletable = function (t, e, n, r) {
        var i = this._inputLine[t],
          o = this._inputLine[e],
          s = this._inputLine[n];
        return !!this.isConcave(i, o, s) && !!this.isShallow(i, o, s, r) && this.isShallowSampled(i, o, t, n, r)
      }, Cn.prototype.deleteShallowConcavities = function () {
        for (var t = 1, e = this.findNextNonDeletedIndex(t), n = this.findNextNonDeletedIndex(e), r = !1; n < this._inputLine.length;) {
          var i = !1;
          this.isDeletable(t, e, n, this._distanceTol) && (this._isDeleted[e] = Cn.DELETE, i = !0, r = !0), t = i ? n : e, e = this.findNextNonDeletedIndex(t), n = this.findNextNonDeletedIndex(e)
        }
        return r
      }, Cn.prototype.isShallowConcavity = function (t, e, n, r) {
        return at.computeOrientation(t, e, n) === this._angleOrientation && at.distancePointLine(e, t, n) < r
      }, Cn.prototype.isShallowSampled = function (t, e, n, r, i) {
        var o = Math.trunc((r - n) / Cn.NUM_PTS_TO_CHECK);
        o <= 0 && (o = 1);
        for (var s = n; s < r; s += o)
          if (!this.isShallow(t, e, this._inputLine[s], i)) return !1;
        return !0
      }, Cn.prototype.isConcave = function (t, e, n) {
        return at.computeOrientation(t, e, n) === this._angleOrientation
      }, Cn.prototype.simplify = function (t) {
        this._distanceTol = Math.abs(t), t < 0 && (this._angleOrientation = at.CLOCKWISE), this._isDeleted = new Array(this._inputLine.length).fill(null);
        var e = !1;
        do {
          e = this.deleteShallowConcavities()
        } while (e);
        return this.collapseLine()
      }, Cn.prototype.findNextNonDeletedIndex = function (t) {
        for (var e = t + 1; e < this._inputLine.length && this._isDeleted[e] === Cn.DELETE;) e++;
        return e
      }, Cn.prototype.isShallow = function (t, e, n, r) {
        return at.distancePointLine(e, t, n) < r
      }, Cn.prototype.collapseLine = function () {
        for (var t = new wt, e = 0; e < this._inputLine.length; e++) this._isDeleted[e] !== Cn.DELETE && t.add(this._inputLine[e]);
        return t.toCoordinateArray()
      }, Cn.prototype.interfaces_ = function () {
        return []
      }, Cn.prototype.getClass = function () {
        return Cn
      }, Cn.simplify = function (t, e) {
        return new Cn(t).simplify(e)
      }, Sn.INIT.get = function () {
        return 0
      }, Sn.DELETE.get = function () {
        return 1
      }, Sn.KEEP.get = function () {
        return 1
      }, Sn.NUM_PTS_TO_CHECK.get = function () {
        return 10
      }, Object.defineProperties(Cn, Sn);
      var Ln = function () {
          this._ptList = null, this._precisionModel = null, this._minimimVertexDistance = 0, this._ptList = new It
        },
        On = {
          COORDINATE_ARRAY_TYPE: {
            configurable: !0
          }
        };
      Ln.prototype.getCoordinates = function () {
        return this._ptList.toArray(Ln.COORDINATE_ARRAY_TYPE)
      }, Ln.prototype.setPrecisionModel = function (t) {
        this._precisionModel = t
      }, Ln.prototype.addPt = function (t) {
        var e = new N(t);
        if (this._precisionModel.makePrecise(e), this.isRedundant(e)) return null;
        this._ptList.add(e)
      }, Ln.prototype.revere = function () {}, Ln.prototype.addPts = function (t, e) {
        if (e)
          for (var n = 0; n < t.length; n++) this.addPt(t[n]);
        else
          for (var r = t.length - 1; r >= 0; r--) this.addPt(t[r])
      }, Ln.prototype.isRedundant = function (t) {
        if (this._ptList.size() < 1) return !1;
        var e = this._ptList.get(this._ptList.size() - 1);
        return t.distance(e) < this._minimimVertexDistance
      }, Ln.prototype.toString = function () {
        return (new _e).createLineString(this.getCoordinates()).toString()
      }, Ln.prototype.closeRing = function () {
        if (this._ptList.size() < 1) return null;
        var t = new N(this._ptList.get(0)),
          e = this._ptList.get(this._ptList.size() - 1);
        if (t.equals(e)) return null;
        this._ptList.add(t)
      }, Ln.prototype.setMinimumVertexDistance = function (t) {
        this._minimimVertexDistance = t
      }, Ln.prototype.interfaces_ = function () {
        return []
      }, Ln.prototype.getClass = function () {
        return Ln
      }, On.COORDINATE_ARRAY_TYPE.get = function () {
        return new Array(0).fill(null)
      }, Object.defineProperties(Ln, On);
      var Tn = function () {},
        Mn = {
          PI_TIMES_2: {
            configurable: !0
          },
          PI_OVER_2: {
            configurable: !0
          },
          PI_OVER_4: {
            configurable: !0
          },
          COUNTERCLOCKWISE: {
            configurable: !0
          },
          CLOCKWISE: {
            configurable: !0
          },
          NONE: {
            configurable: !0
          }
        };
      Tn.prototype.interfaces_ = function () {
        return []
      }, Tn.prototype.getClass = function () {
        return Tn
      }, Tn.toDegrees = function (t) {
        return 180 * t / Math.PI
      }, Tn.normalize = function (t) {
        for (; t > Math.PI;) t -= Tn.PI_TIMES_2;
        for (; t <= -Math.PI;) t += Tn.PI_TIMES_2;
        return t
      }, Tn.angle = function () {
        if (1 === arguments.length) {
          var t = arguments[0];
          return Math.atan2(t.y, t.x)
        }
        if (2 === arguments.length) {
          var e = arguments[0],
            n = arguments[1],
            r = n.x - e.x,
            i = n.y - e.y;
          return Math.atan2(i, r)
        }
      }, Tn.isAcute = function (t, e, n) {
        var r = t.x - e.x,
          i = t.y - e.y;
        return r * (n.x - e.x) + i * (n.y - e.y) > 0
      }, Tn.isObtuse = function (t, e, n) {
        var r = t.x - e.x,
          i = t.y - e.y;
        return r * (n.x - e.x) + i * (n.y - e.y) < 0
      }, Tn.interiorAngle = function (t, e, n) {
        var r = Tn.angle(e, t),
          i = Tn.angle(e, n);
        return Math.abs(i - r)
      }, Tn.normalizePositive = function (t) {
        if (t < 0) {
          for (; t < 0;) t += Tn.PI_TIMES_2;
          t >= Tn.PI_TIMES_2 && (t = 0)
        } else {
          for (; t >= Tn.PI_TIMES_2;) t -= Tn.PI_TIMES_2;
          t < 0 && (t = 0)
        }
        return t
      }, Tn.angleBetween = function (t, e, n) {
        var r = Tn.angle(e, t),
          i = Tn.angle(e, n);
        return Tn.diff(r, i)
      }, Tn.diff = function (t, e) {
        var n = null;
        return (n = t < e ? e - t : t - e) > Math.PI && (n = 2 * Math.PI - n), n
      }, Tn.toRadians = function (t) {
        return t * Math.PI / 180
      }, Tn.getTurn = function (t, e) {
        var n = Math.sin(e - t);
        return n > 0 ? Tn.COUNTERCLOCKWISE : n < 0 ? Tn.CLOCKWISE : Tn.NONE
      }, Tn.angleBetweenOriented = function (t, e, n) {
        var r = Tn.angle(e, t),
          i = Tn.angle(e, n) - r;
        return i <= -Math.PI ? i + Tn.PI_TIMES_2 : i > Math.PI ? i - Tn.PI_TIMES_2 : i
      }, Mn.PI_TIMES_2.get = function () {
        return 2 * Math.PI
      }, Mn.PI_OVER_2.get = function () {
        return Math.PI / 2
      }, Mn.PI_OVER_4.get = function () {
        return Math.PI / 4
      }, Mn.COUNTERCLOCKWISE.get = function () {
        return at.COUNTERCLOCKWISE
      }, Mn.CLOCKWISE.get = function () {
        return at.CLOCKWISE
      }, Mn.NONE.get = function () {
        return at.COLLINEAR
      }, Object.defineProperties(Tn, Mn);
      var Pn = function t() {
          this._maxCurveSegmentError = 0, this._filletAngleQuantum = null, this._closingSegLengthFactor = 1, this._segList = null, this._distance = 0, this._precisionModel = null, this._bufParams = null, this._li = null, this._s0 = null, this._s1 = null, this._s2 = null, this._seg0 = new dn, this._seg1 = new dn, this._offset0 = new dn, this._offset1 = new dn, this._side = 0, this._hasNarrowConcaveAngle = !1;
          var e = arguments[0],
            n = arguments[1],
            r = arguments[2];
          this._precisionModel = e, this._bufParams = n, this._li = new it, this._filletAngleQuantum = Math.PI / 2 / n.getQuadrantSegments(), n.getQuadrantSegments() >= 8 && n.getJoinStyle() === Nn.JOIN_ROUND && (this._closingSegLengthFactor = t.MAX_CLOSING_SEG_LEN_FACTOR), this.init(r)
        },
        Rn = {
          OFFSET_SEGMENT_SEPARATION_FACTOR: {
            configurable: !0
          },
          INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR: {
            configurable: !0
          },
          CURVE_VERTEX_SNAP_DISTANCE_FACTOR: {
            configurable: !0
          },
          MAX_CLOSING_SEG_LEN_FACTOR: {
            configurable: !0
          }
        };
      Pn.prototype.addNextSegment = function (t, e) {
        if (this._s0 = this._s1, this._s1 = this._s2, this._s2 = t, this._seg0.setCoordinates(this._s0, this._s1), this.computeOffsetSegment(this._seg0, this._side, this._distance, this._offset0), this._seg1.setCoordinates(this._s1, this._s2), this.computeOffsetSegment(this._seg1, this._side, this._distance, this._offset1), this._s1.equals(this._s2)) return null;
        var n = at.computeOrientation(this._s0, this._s1, this._s2),
          r = n === at.CLOCKWISE && this._side === we.LEFT || n === at.COUNTERCLOCKWISE && this._side === we.RIGHT;
        0 === n ? this.addCollinear(e) : r ? this.addOutsideTurn(n, e) : this.addInsideTurn(n, e)
      }, Pn.prototype.addLineEndCap = function (t, e) {
        var n = new dn(t, e),
          r = new dn;
        this.computeOffsetSegment(n, we.LEFT, this._distance, r);
        var i = new dn;
        this.computeOffsetSegment(n, we.RIGHT, this._distance, i);
        var o = e.x - t.x,
          s = e.y - t.y,
          a = Math.atan2(s, o);
        switch (this._bufParams.getEndCapStyle()) {
          case Nn.CAP_ROUND:
            this._segList.addPt(r.p1), this.addFilletArc(e, a + Math.PI / 2, a - Math.PI / 2, at.CLOCKWISE, this._distance), this._segList.addPt(i.p1);
            break;
          case Nn.CAP_FLAT:
            this._segList.addPt(r.p1), this._segList.addPt(i.p1);
            break;
          case Nn.CAP_SQUARE:
            var u = new N;
            u.x = Math.abs(this._distance) * Math.cos(a), u.y = Math.abs(this._distance) * Math.sin(a);
            var l = new N(r.p1.x + u.x, r.p1.y + u.y),
              c = new N(i.p1.x + u.x, i.p1.y + u.y);
            this._segList.addPt(l), this._segList.addPt(c)
        }
      }, Pn.prototype.getCoordinates = function () {
        return this._segList.getCoordinates()
      }, Pn.prototype.addMitreJoin = function (t, e, n, r) {
        var i = !0,
          o = null;
        try {
          o = X.intersection(e.p0, e.p1, n.p0, n.p1), (r <= 0 ? 1 : o.distance(t) / Math.abs(r)) > this._bufParams.getMitreLimit() && (i = !1)
        } catch (t) {
          if (!(t instanceof V)) throw t;
          o = new N(0, 0), i = !1
        }
        i ? this._segList.addPt(o) : this.addLimitedMitreJoin(e, n, r, this._bufParams.getMitreLimit())
      }, Pn.prototype.addFilletCorner = function (t, e, n, r, i) {
        var o = e.x - t.x,
          s = e.y - t.y,
          a = Math.atan2(s, o),
          u = n.x - t.x,
          l = n.y - t.y,
          c = Math.atan2(l, u);
        r === at.CLOCKWISE ? a <= c && (a += 2 * Math.PI) : a >= c && (a -= 2 * Math.PI), this._segList.addPt(e), this.addFilletArc(t, a, c, r, i), this._segList.addPt(n)
      }, Pn.prototype.addOutsideTurn = function (t, e) {
        if (this._offset0.p1.distance(this._offset1.p0) < this._distance * Pn.OFFSET_SEGMENT_SEPARATION_FACTOR) return this._segList.addPt(this._offset0.p1), null;
        this._bufParams.getJoinStyle() === Nn.JOIN_MITRE ? this.addMitreJoin(this._s1, this._offset0, this._offset1, this._distance) : this._bufParams.getJoinStyle() === Nn.JOIN_BEVEL ? this.addBevelJoin(this._offset0, this._offset1) : (e && this._segList.addPt(this._offset0.p1), this.addFilletCorner(this._s1, this._offset0.p1, this._offset1.p0, t, this._distance), this._segList.addPt(this._offset1.p0))
      }, Pn.prototype.createSquare = function (t) {
        this._segList.addPt(new N(t.x + this._distance, t.y + this._distance)), this._segList.addPt(new N(t.x + this._distance, t.y - this._distance)), this._segList.addPt(new N(t.x - this._distance, t.y - this._distance)), this._segList.addPt(new N(t.x - this._distance, t.y + this._distance)), this._segList.closeRing()
      }, Pn.prototype.addSegments = function (t, e) {
        this._segList.addPts(t, e)
      }, Pn.prototype.addFirstSegment = function () {
        this._segList.addPt(this._offset1.p0)
      }, Pn.prototype.addLastSegment = function () {
        this._segList.addPt(this._offset1.p1)
      }, Pn.prototype.initSideSegments = function (t, e, n) {
        this._s1 = t, this._s2 = e, this._side = n, this._seg1.setCoordinates(t, e), this.computeOffsetSegment(this._seg1, n, this._distance, this._offset1)
      }, Pn.prototype.addLimitedMitreJoin = function (t, e, n, r) {
        var i = this._seg0.p1,
          o = Tn.angle(i, this._seg0.p0),
          s = Tn.angleBetweenOriented(this._seg0.p0, i, this._seg1.p1) / 2,
          a = Tn.normalize(o + s),
          u = Tn.normalize(a + Math.PI),
          l = r * n,
          c = n - l * Math.abs(Math.sin(s)),
          h = i.x + l * Math.cos(u),
          p = i.y + l * Math.sin(u),
          f = new N(h, p),
          g = new dn(i, f),
          d = g.pointAlongOffset(1, c),
          y = g.pointAlongOffset(1, -c);
        this._side === we.LEFT ? (this._segList.addPt(d), this._segList.addPt(y)) : (this._segList.addPt(y), this._segList.addPt(d))
      }, Pn.prototype.computeOffsetSegment = function (t, e, n, r) {
        var i = e === we.LEFT ? 1 : -1,
          o = t.p1.x - t.p0.x,
          s = t.p1.y - t.p0.y,
          a = Math.sqrt(o * o + s * s),
          u = i * n * o / a,
          l = i * n * s / a;
        r.p0.x = t.p0.x - l, r.p0.y = t.p0.y + u, r.p1.x = t.p1.x - l, r.p1.y = t.p1.y + u
      }, Pn.prototype.addFilletArc = function (t, e, n, r, i) {
        var o = r === at.CLOCKWISE ? -1 : 1,
          s = Math.abs(e - n),
          a = Math.trunc(s / this._filletAngleQuantum + .5);
        if (a < 1) return null;
        for (var u = s / a, l = 0, c = new N; l < s;) {
          var h = e + o * l;
          c.x = t.x + i * Math.cos(h), c.y = t.y + i * Math.sin(h), this._segList.addPt(c), l += u
        }
      }, Pn.prototype.addInsideTurn = function (t, e) {
        if (this._li.computeIntersection(this._offset0.p0, this._offset0.p1, this._offset1.p0, this._offset1.p1), this._li.hasIntersection()) this._segList.addPt(this._li.getIntersection(0));
        else if (this._hasNarrowConcaveAngle = !0, this._offset0.p1.distance(this._offset1.p0) < this._distance * Pn.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR) this._segList.addPt(this._offset0.p1);
        else {
          if (this._segList.addPt(this._offset0.p1), this._closingSegLengthFactor > 0) {
            var n = new N((this._closingSegLengthFactor * this._offset0.p1.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset0.p1.y + this._s1.y) / (this._closingSegLengthFactor + 1));
            this._segList.addPt(n);
            var r = new N((this._closingSegLengthFactor * this._offset1.p0.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset1.p0.y + this._s1.y) / (this._closingSegLengthFactor + 1));
            this._segList.addPt(r)
          } else this._segList.addPt(this._s1);
          this._segList.addPt(this._offset1.p0)
        }
      }, Pn.prototype.createCircle = function (t) {
        var e = new N(t.x + this._distance, t.y);
        this._segList.addPt(e), this.addFilletArc(t, 0, 2 * Math.PI, -1, this._distance), this._segList.closeRing()
      }, Pn.prototype.addBevelJoin = function (t, e) {
        this._segList.addPt(t.p1), this._segList.addPt(e.p0)
      }, Pn.prototype.init = function (t) {
        this._distance = t, this._maxCurveSegmentError = t * (1 - Math.cos(this._filletAngleQuantum / 2)), this._segList = new Ln, this._segList.setPrecisionModel(this._precisionModel), this._segList.setMinimumVertexDistance(t * Pn.CURVE_VERTEX_SNAP_DISTANCE_FACTOR)
      }, Pn.prototype.addCollinear = function (t) {
        this._li.computeIntersection(this._s0, this._s1, this._s1, this._s2), this._li.getIntersectionNum() >= 2 && (this._bufParams.getJoinStyle() === Nn.JOIN_BEVEL || this._bufParams.getJoinStyle() === Nn.JOIN_MITRE ? (t && this._segList.addPt(this._offset0.p1), this._segList.addPt(this._offset1.p0)) : this.addFilletCorner(this._s1, this._offset0.p1, this._offset1.p0, at.CLOCKWISE, this._distance))
      }, Pn.prototype.closeRing = function () {
        this._segList.closeRing()
      }, Pn.prototype.hasNarrowConcaveAngle = function () {
        return this._hasNarrowConcaveAngle
      }, Pn.prototype.interfaces_ = function () {
        return []
      }, Pn.prototype.getClass = function () {
        return Pn
      }, Rn.OFFSET_SEGMENT_SEPARATION_FACTOR.get = function () {
        return .001
      }, Rn.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR.get = function () {
        return .001
      }, Rn.CURVE_VERTEX_SNAP_DISTANCE_FACTOR.get = function () {
        return 1e-6
      }, Rn.MAX_CLOSING_SEG_LEN_FACTOR.get = function () {
        return 80
      }, Object.defineProperties(Pn, Rn);
      var Dn = function () {
        this._distance = 0, this._precisionModel = null, this._bufParams = null;
        var t = arguments[0],
          e = arguments[1];
        this._precisionModel = t, this._bufParams = e
      };
      Dn.prototype.getOffsetCurve = function (t, e) {
        if (this._distance = e, 0 === e) return null;
        var n = e < 0,
          r = Math.abs(e),
          i = this.getSegGen(r);
        t.length <= 1 ? this.computePointCurve(t[0], i) : this.computeOffsetCurve(t, n, i);
        var o = i.getCoordinates();
        return n && Ct.reverse(o), o
      }, Dn.prototype.computeSingleSidedBufferCurve = function (t, e, n) {
        var r = this.simplifyTolerance(this._distance);
        if (e) {
          n.addSegments(t, !0);
          var i = Cn.simplify(t, -r),
            o = i.length - 1;
          n.initSideSegments(i[o], i[o - 1], we.LEFT), n.addFirstSegment();
          for (var s = o - 2; s >= 0; s--) n.addNextSegment(i[s], !0)
        } else {
          n.addSegments(t, !1);
          var a = Cn.simplify(t, r),
            u = a.length - 1;
          n.initSideSegments(a[0], a[1], we.LEFT), n.addFirstSegment();
          for (var l = 2; l <= u; l++) n.addNextSegment(a[l], !0)
        }
        n.addLastSegment(), n.closeRing()
      }, Dn.prototype.computeRingBufferCurve = function (t, e, n) {
        var r = this.simplifyTolerance(this._distance);
        e === we.RIGHT && (r = -r);
        var i = Cn.simplify(t, r),
          o = i.length - 1;
        n.initSideSegments(i[o - 1], i[0], e);
        for (var s = 1; s <= o; s++) {
          var a = 1 !== s;
          n.addNextSegment(i[s], a)
        }
        n.closeRing()
      }, Dn.prototype.computeLineBufferCurve = function (t, e) {
        var n = this.simplifyTolerance(this._distance),
          r = Cn.simplify(t, n),
          i = r.length - 1;
        e.initSideSegments(r[0], r[1], we.LEFT);
        for (var o = 2; o <= i; o++) e.addNextSegment(r[o], !0);
        e.addLastSegment(), e.addLineEndCap(r[i - 1], r[i]);
        var s = Cn.simplify(t, -n),
          a = s.length - 1;
        e.initSideSegments(s[a], s[a - 1], we.LEFT);
        for (var u = a - 2; u >= 0; u--) e.addNextSegment(s[u], !0);
        e.addLastSegment(), e.addLineEndCap(s[1], s[0]), e.closeRing()
      }, Dn.prototype.computePointCurve = function (t, e) {
        switch (this._bufParams.getEndCapStyle()) {
          case Nn.CAP_ROUND:
            e.createCircle(t);
            break;
          case Nn.CAP_SQUARE:
            e.createSquare(t)
        }
      }, Dn.prototype.getLineCurve = function (t, e) {
        if (this._distance = e, e < 0 && !this._bufParams.isSingleSided()) return null;
        if (0 === e) return null;
        var n = Math.abs(e),
          r = this.getSegGen(n);
        if (t.length <= 1) this.computePointCurve(t[0], r);
        else if (this._bufParams.isSingleSided()) {
          var i = e < 0;
          this.computeSingleSidedBufferCurve(t, i, r)
        } else this.computeLineBufferCurve(t, r);
        return r.getCoordinates()
      }, Dn.prototype.getBufferParameters = function () {
        return this._bufParams
      }, Dn.prototype.simplifyTolerance = function (t) {
        return t * this._bufParams.getSimplifyFactor()
      }, Dn.prototype.getRingCurve = function (t, e, n) {
        if (this._distance = n, t.length <= 2) return this.getLineCurve(t, n);
        if (0 === n) return Dn.copyCoordinates(t);
        var r = this.getSegGen(n);
        return this.computeRingBufferCurve(t, e, r), r.getCoordinates()
      }, Dn.prototype.computeOffsetCurve = function (t, e, n) {
        var r = this.simplifyTolerance(this._distance);
        if (e) {
          var i = Cn.simplify(t, -r),
            o = i.length - 1;
          n.initSideSegments(i[o], i[o - 1], we.LEFT), n.addFirstSegment();
          for (var s = o - 2; s >= 0; s--) n.addNextSegment(i[s], !0)
        } else {
          var a = Cn.simplify(t, r),
            u = a.length - 1;
          n.initSideSegments(a[0], a[1], we.LEFT), n.addFirstSegment();
          for (var l = 2; l <= u; l++) n.addNextSegment(a[l], !0)
        }
        n.addLastSegment()
      }, Dn.prototype.getSegGen = function (t) {
        return new Pn(this._precisionModel, this._bufParams, t)
      }, Dn.prototype.interfaces_ = function () {
        return []
      }, Dn.prototype.getClass = function () {
        return Dn
      }, Dn.copyCoordinates = function (t) {
        for (var e = new Array(t.length).fill(null), n = 0; n < e.length; n++) e[n] = new N(t[n]);
        return e
      };
      var An = function () {
          this._subgraphs = null, this._seg = new dn, this._cga = new at;
          var t = arguments[0];
          this._subgraphs = t
        },
        Fn = {
          DepthSegment: {
            configurable: !0
          }
        };
      An.prototype.findStabbedSegments = function () {
        if (1 === arguments.length) {
          for (var t = arguments[0], e = new It, n = this._subgraphs.iterator(); n.hasNext();) {
            var r = n.next(),
              i = r.getEnvelope();
            t.y < i.getMinY() || t.y > i.getMaxY() || this.findStabbedSegments(t, r.getDirectedEdges(), e)
          }
          return e
        }
        if (3 === arguments.length)
          if (T(arguments[2], bt) && arguments[0] instanceof N && arguments[1] instanceof je) {
            for (var o = arguments[0], s = arguments[1], a = arguments[2], u = s.getEdge().getCoordinates(), l = 0; l < u.length - 1; l++)
              if (this._seg.p0 = u[l], this._seg.p1 = u[l + 1], this._seg.p0.y > this._seg.p1.y && this._seg.reverse(), !(Math.max(this._seg.p0.x, this._seg.p1.x) < o.x || this._seg.isHorizontal() || o.y < this._seg.p0.y || o.y > this._seg.p1.y || at.computeOrientation(this._seg.p0, this._seg.p1, o) === at.RIGHT)) {
                var c = s.getDepth(we.LEFT);
                this._seg.p0.equals(u[l]) || (c = s.getDepth(we.RIGHT));
                var h = new Gn(this._seg, c);
                a.add(h)
              }
          } else if (T(arguments[2], bt) && arguments[0] instanceof N && T(arguments[1], bt))
          for (var p = arguments[0], f = arguments[1], g = arguments[2], d = f.iterator(); d.hasNext();) {
            var y = d.next();
            y.isForward() && this.findStabbedSegments(p, y, g)
          }
      }, An.prototype.getDepth = function (t) {
        var e = this.findStabbedSegments(t);
        return 0 === e.size() ? 0 : Qe.min(e)._leftDepth
      }, An.prototype.interfaces_ = function () {
        return []
      }, An.prototype.getClass = function () {
        return An
      }, Fn.DepthSegment.get = function () {
        return Gn
      }, Object.defineProperties(An, Fn);
      var Gn = function () {
        this._upwardSeg = null, this._leftDepth = null;
        var t = arguments[0],
          e = arguments[1];
        this._upwardSeg = new dn(t), this._leftDepth = e
      };
      Gn.prototype.compareTo = function (t) {
        var e = t;
        if (this._upwardSeg.minX() >= e._upwardSeg.maxX()) return 1;
        if (this._upwardSeg.maxX() <= e._upwardSeg.minX()) return -1;
        var n = this._upwardSeg.orientationIndex(e._upwardSeg);
        return 0 !== n || 0 != (n = -1 * e._upwardSeg.orientationIndex(this._upwardSeg)) ? n : this._upwardSeg.compareTo(e._upwardSeg)
      }, Gn.prototype.compareX = function (t, e) {
        var n = t.p0.compareTo(e.p0);
        return 0 !== n ? n : t.p1.compareTo(e.p1)
      }, Gn.prototype.toString = function () {
        return this._upwardSeg.toString()
      }, Gn.prototype.interfaces_ = function () {
        return [E]
      }, Gn.prototype.getClass = function () {
        return Gn
      };
      var zn = function (t, e, n) {
        this.p0 = t || null, this.p1 = e || null, this.p2 = n || null
      };
      zn.prototype.area = function () {
        return zn.area(this.p0, this.p1, this.p2)
      }, zn.prototype.signedArea = function () {
        return zn.signedArea(this.p0, this.p1, this.p2)
      }, zn.prototype.interpolateZ = function (t) {
        if (null === t) throw new m("Supplied point is null.");
        return zn.interpolateZ(t, this.p0, this.p1, this.p2)
      }, zn.prototype.longestSideLength = function () {
        return zn.longestSideLength(this.p0, this.p1, this.p2)
      }, zn.prototype.isAcute = function () {
        return zn.isAcute(this.p0, this.p1, this.p2)
      }, zn.prototype.circumcentre = function () {
        return zn.circumcentre(this.p0, this.p1, this.p2)
      }, zn.prototype.area3D = function () {
        return zn.area3D(this.p0, this.p1, this.p2)
      }, zn.prototype.centroid = function () {
        return zn.centroid(this.p0, this.p1, this.p2)
      }, zn.prototype.inCentre = function () {
        return zn.inCentre(this.p0, this.p1, this.p2)
      }, zn.prototype.interfaces_ = function () {
        return []
      }, zn.prototype.getClass = function () {
        return zn
      }, zn.area = function (t, e, n) {
        return Math.abs(((n.x - t.x) * (e.y - t.y) - (e.x - t.x) * (n.y - t.y)) / 2)
      }, zn.signedArea = function (t, e, n) {
        return ((n.x - t.x) * (e.y - t.y) - (e.x - t.x) * (n.y - t.y)) / 2
      }, zn.det = function (t, e, n, r) {
        return t * r - e * n
      }, zn.interpolateZ = function (t, e, n, r) {
        var i = e.x,
          o = e.y,
          s = n.x - i,
          a = r.x - i,
          u = n.y - o,
          l = r.y - o,
          c = s * l - a * u,
          h = t.x - i,
          p = t.y - o,
          f = (l * h - a * p) / c,
          g = (-u * h + s * p) / c;
        return e.z + f * (n.z - e.z) + g * (r.z - e.z)
      }, zn.longestSideLength = function (t, e, n) {
        var r = t.distance(e),
          i = e.distance(n),
          o = n.distance(t),
          s = r;
        return i > s && (s = i), o > s && (s = o), s
      }, zn.isAcute = function (t, e, n) {
        return !!Tn.isAcute(t, e, n) && !!Tn.isAcute(e, n, t) && !!Tn.isAcute(n, t, e)
      }, zn.circumcentre = function (t, e, n) {
        var r = n.x,
          i = n.y,
          o = t.x - r,
          s = t.y - i,
          a = e.x - r,
          u = e.y - i,
          l = 2 * zn.det(o, s, a, u),
          c = zn.det(s, o * o + s * s, u, a * a + u * u),
          h = zn.det(o, o * o + s * s, a, a * a + u * u);
        return new N(r - c / l, i + h / l)
      }, zn.perpendicularBisector = function (t, e) {
        var n = e.x - t.x,
          r = e.y - t.y,
          i = new X(t.x + n / 2, t.y + r / 2, 1),
          o = new X(t.x - r + n / 2, t.y + n + r / 2, 1);
        return new X(i, o)
      }, zn.angleBisector = function (t, e, n) {
        var r = e.distance(t),
          i = r / (r + e.distance(n)),
          o = n.x - t.x,
          s = n.y - t.y;
        return new N(t.x + i * o, t.y + i * s)
      }, zn.area3D = function (t, e, n) {
        var r = e.x - t.x,
          i = e.y - t.y,
          o = e.z - t.z,
          s = n.x - t.x,
          a = n.y - t.y,
          u = n.z - t.z,
          l = i * u - o * a,
          c = o * s - r * u,
          h = r * a - i * s,
          p = l * l + c * c + h * h;
        return Math.sqrt(p) / 2
      }, zn.centroid = function (t, e, n) {
        var r = (t.x + e.x + n.x) / 3,
          i = (t.y + e.y + n.y) / 3;
        return new N(r, i)
      }, zn.inCentre = function (t, e, n) {
        var r = e.distance(n),
          i = t.distance(n),
          o = t.distance(e),
          s = r + i + o,
          a = (r * t.x + i * e.x + o * n.x) / s,
          u = (r * t.y + i * e.y + o * n.y) / s;
        return new N(a, u)
      };
      var qn = function () {
        this._inputGeom = null, this._distance = null, this._curveBuilder = null, this._curveList = new It;
        var t = arguments[0],
          e = arguments[1],
          n = arguments[2];
        this._inputGeom = t, this._distance = e, this._curveBuilder = n
      };
      qn.prototype.addPoint = function (t) {
        if (this._distance <= 0) return null;
        var e = t.getCoordinates(),
          n = this._curveBuilder.getLineCurve(e, this._distance);
        this.addCurve(n, L.EXTERIOR, L.INTERIOR)
      }, qn.prototype.addPolygon = function (t) {
        var e = this._distance,
          n = we.LEFT;
        this._distance < 0 && (e = -this._distance, n = we.RIGHT);
        var r = t.getExteriorRing(),
          i = Ct.removeRepeatedPoints(r.getCoordinates());
        if (this._distance < 0 && this.isErodedCompletely(r, this._distance)) return null;
        if (this._distance <= 0 && i.length < 3) return null;
        this.addPolygonRing(i, e, n, L.EXTERIOR, L.INTERIOR);
        for (var o = 0; o < t.getNumInteriorRing(); o++) {
          var s = t.getInteriorRingN(o),
            a = Ct.removeRepeatedPoints(s.getCoordinates());
          this._distance > 0 && this.isErodedCompletely(s, -this._distance) || this.addPolygonRing(a, e, we.opposite(n), L.INTERIOR, L.EXTERIOR)
        }
      }, qn.prototype.isTriangleErodedCompletely = function (t, e) {
        var n = new zn(t[0], t[1], t[2]),
          r = n.inCentre();
        return at.distancePointLine(r, n.p0, n.p1) < Math.abs(e)
      }, qn.prototype.addLineString = function (t) {
        if (this._distance <= 0 && !this._curveBuilder.getBufferParameters().isSingleSided()) return null;
        var e = Ct.removeRepeatedPoints(t.getCoordinates()),
          n = this._curveBuilder.getLineCurve(e, this._distance);
        this.addCurve(n, L.EXTERIOR, L.INTERIOR)
      }, qn.prototype.addCurve = function (t, e, n) {
        if (null === t || t.length < 2) return null;
        var r = new gn(t, new Pe(0, L.BOUNDARY, e, n));
        this._curveList.add(r)
      }, qn.prototype.getCurves = function () {
        return this.add(this._inputGeom), this._curveList
      }, qn.prototype.addPolygonRing = function (t, e, n, r, i) {
        if (0 === e && t.length < ee.MINIMUM_VALID_SIZE) return null;
        var o = r,
          s = i;
        t.length >= ee.MINIMUM_VALID_SIZE && at.isCCW(t) && (o = i, s = r, n = we.opposite(n));
        var a = this._curveBuilder.getRingCurve(t, n, e);
        this.addCurve(a, o, s)
      }, qn.prototype.add = function (t) {
        if (t.isEmpty()) return null;
        t instanceof Qt ? this.addPolygon(t) : t instanceof Zt ? this.addLineString(t) : t instanceof Jt ? this.addPoint(t) : (t instanceof te || t instanceof Vt || t instanceof ne || t instanceof jt) && this.addCollection(t)
      }, qn.prototype.isErodedCompletely = function (t, e) {
        var n = t.getCoordinates();
        if (n.length < 4) return e < 0;
        if (4 === n.length) return this.isTriangleErodedCompletely(n, e);
        var r = t.getEnvelopeInternal(),
          i = Math.min(r.getHeight(), r.getWidth());
        return e < 0 && 2 * Math.abs(e) > i
      }, qn.prototype.addCollection = function (t) {
        for (var e = 0; e < t.getNumGeometries(); e++) {
          var n = t.getGeometryN(e);
          this.add(n)
        }
      }, qn.prototype.interfaces_ = function () {
        return []
      }, qn.prototype.getClass = function () {
        return qn
      };
      var Bn = function () {};
      Bn.prototype.locate = function (t) {}, Bn.prototype.interfaces_ = function () {
        return []
      }, Bn.prototype.getClass = function () {
        return Bn
      };
      var kn = function () {
        this._parent = null, this._atStart = null, this._max = null, this._index = null, this._subcollectionIterator = null;
        var t = arguments[0];
        this._parent = t, this._atStart = !0, this._index = 0, this._max = t.getNumGeometries()
      };
      kn.prototype.next = function () {
        if (this._atStart) return this._atStart = !1, kn.isAtomic(this._parent) && this._index++, this._parent;
        if (null !== this._subcollectionIterator) {
          if (this._subcollectionIterator.hasNext()) return this._subcollectionIterator.next();
          this._subcollectionIterator = null
        }
        if (this._index >= this._max) throw new r;
        var t = this._parent.getGeometryN(this._index++);
        return t instanceof jt ? (this._subcollectionIterator = new kn(t), this._subcollectionIterator.next()) : t
      }, kn.prototype.remove = function () {
        throw new Error(this.getClass().getName())
      }, kn.prototype.hasNext = function () {
        if (this._atStart) return !0;
        if (null !== this._subcollectionIterator) {
          if (this._subcollectionIterator.hasNext()) return !0;
          this._subcollectionIterator = null
        }
        return !(this._index >= this._max)
      }, kn.prototype.interfaces_ = function () {
        return [Et]
      }, kn.prototype.getClass = function () {
        return kn
      }, kn.isAtomic = function (t) {
        return !(t instanceof jt)
      };
      var jn = function () {
        this._geom = null;
        var t = arguments[0];
        this._geom = t
      };
      jn.prototype.locate = function (t) {
        return jn.locate(t, this._geom)
      }, jn.prototype.interfaces_ = function () {
        return [Bn]
      }, jn.prototype.getClass = function () {
        return jn
      }, jn.isPointInRing = function (t, e) {
        return !!e.getEnvelopeInternal().intersects(t) && at.isPointInRing(t, e.getCoordinates())
      }, jn.containsPointInPolygon = function (t, e) {
        if (e.isEmpty()) return !1;
        var n = e.getExteriorRing();
        if (!jn.isPointInRing(t, n)) return !1;
        for (var r = 0; r < e.getNumInteriorRing(); r++) {
          var i = e.getInteriorRingN(r);
          if (jn.isPointInRing(t, i)) return !1
        }
        return !0
      }, jn.containsPoint = function (t, e) {
        if (e instanceof Qt) return jn.containsPointInPolygon(t, e);
        if (e instanceof jt)
          for (var n = new kn(e); n.hasNext();) {
            var r = n.next();
            if (r !== e && jn.containsPoint(t, r)) return !0
          }
        return !1
      }, jn.locate = function (t, e) {
        return e.isEmpty() ? L.EXTERIOR : jn.containsPoint(t, e) ? L.INTERIOR : L.EXTERIOR
      };
      var Vn = function () {
        this._edgeMap = new h, this._edgeList = null, this._ptInAreaLocation = [L.NONE, L.NONE]
      };
      Vn.prototype.getNextCW = function (t) {
        this.getEdges();
        var e = this._edgeList.indexOf(t),
          n = e - 1;
        return 0 === e && (n = this._edgeList.size() - 1), this._edgeList.get(n)
      }, Vn.prototype.propagateSideLabels = function (t) {
        for (var e = L.NONE, n = this.iterator(); n.hasNext();) {
          var r = n.next().getLabel();
          r.isArea(t) && r.getLocation(t, we.LEFT) !== L.NONE && (e = r.getLocation(t, we.LEFT))
        }
        if (e === L.NONE) return null;
        for (var i = e, o = this.iterator(); o.hasNext();) {
          var s = o.next(),
            a = s.getLabel();
          if (a.getLocation(t, we.ON) === L.NONE && a.setLocation(t, we.ON, i), a.isArea(t)) {
            var u = a.getLocation(t, we.LEFT),
              l = a.getLocation(t, we.RIGHT);
            if (l !== L.NONE) {
              if (l !== i) throw new Le("side location conflict", s.getCoordinate());
              u === L.NONE && et.shouldNeverReachHere("found single null side (at " + s.getCoordinate() + ")"), i = u
            } else et.isTrue(a.getLocation(t, we.LEFT) === L.NONE, "found single null side"), a.setLocation(t, we.RIGHT, i), a.setLocation(t, we.LEFT, i)
          }
        }
      }, Vn.prototype.getCoordinate = function () {
        var t = this.iterator();
        return t.hasNext() ? t.next().getCoordinate() : null
      }, Vn.prototype.print = function (t) {
        U.out.println("EdgeEndStar:   " + this.getCoordinate());
        for (var e = this.iterator(); e.hasNext();) e.next().print(t)
      }, Vn.prototype.isAreaLabelsConsistent = function (t) {
        return this.computeEdgeEndLabels(t.getBoundaryNodeRule()), this.checkAreaLabelsConsistent(0)
      }, Vn.prototype.checkAreaLabelsConsistent = function (t) {
        var e = this.getEdges();
        if (e.size() <= 0) return !0;
        var n = e.size() - 1,
          r = e.get(n).getLabel().getLocation(t, we.LEFT);
        et.isTrue(r !== L.NONE, "Found unlabelled area edge");
        for (var i = r, o = this.iterator(); o.hasNext();) {
          var s = o.next().getLabel();
          et.isTrue(s.isArea(t), "Found non-area edge");
          var a = s.getLocation(t, we.LEFT),
            u = s.getLocation(t, we.RIGHT);
          if (a === u) return !1;
          if (u !== i) return !1;
          i = a
        }
        return !0
      }, Vn.prototype.findIndex = function (t) {
        this.iterator();
        for (var e = 0; e < this._edgeList.size(); e++)
          if (this._edgeList.get(e) === t) return e;
        return -1
      }, Vn.prototype.iterator = function () {
        return this.getEdges().iterator()
      }, Vn.prototype.getEdges = function () {
        return null === this._edgeList && (this._edgeList = new It(this._edgeMap.values())), this._edgeList
      }, Vn.prototype.getLocation = function (t, e, n) {
        return this._ptInAreaLocation[t] === L.NONE && (this._ptInAreaLocation[t] = jn.locate(e, n[t].getGeometry())), this._ptInAreaLocation[t]
      }, Vn.prototype.toString = function () {
        var t = new R;
        t.append("EdgeEndStar:   " + this.getCoordinate()), t.append("\n");
        for (var e = this.iterator(); e.hasNext();) {
          var n = e.next();
          t.append(n), t.append("\n")
        }
        return t.toString()
      }, Vn.prototype.computeEdgeEndLabels = function (t) {
        for (var e = this.iterator(); e.hasNext();) e.next().computeLabel(t)
      }, Vn.prototype.computeLabelling = function (t) {
        this.computeEdgeEndLabels(t[0].getBoundaryNodeRule()), this.propagateSideLabels(0), this.propagateSideLabels(1);
        for (var e = [!1, !1], n = this.iterator(); n.hasNext();)
          for (var r = n.next().getLabel(), i = 0; i < 2; i++) r.isLine(i) && r.getLocation(i) === L.BOUNDARY && (e[i] = !0);
        for (var o = this.iterator(); o.hasNext();)
          for (var s = o.next(), a = s.getLabel(), u = 0; u < 2; u++)
            if (a.isAnyNull(u)) {
              var l = L.NONE;
              if (e[u]) l = L.EXTERIOR;
              else {
                var c = s.getCoordinate();
                l = this.getLocation(u, c, t)
              }
              a.setAllLocationsIfNull(u, l)
            }
      }, Vn.prototype.getDegree = function () {
        return this._edgeMap.size()
      }, Vn.prototype.insertEdgeEnd = function (t, e) {
        this._edgeMap.put(t, e), this._edgeList = null
      }, Vn.prototype.interfaces_ = function () {
        return []
      }, Vn.prototype.getClass = function () {
        return Vn
      };
      var Un = function (t) {
          function e() {
            t.call(this), this._resultAreaEdgeList = null, this._label = null, this._SCANNING_FOR_INCOMING = 1, this._LINKING_TO_OUTGOING = 2
          }
          return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.linkResultDirectedEdges = function () {
            this.getResultAreaEdges();
            for (var t = null, e = null, n = this._SCANNING_FOR_INCOMING, r = 0; r < this._resultAreaEdgeList.size(); r++) {
              var i = this._resultAreaEdgeList.get(r),
                o = i.getSym();
              if (i.getLabel().isArea()) switch (null === t && i.isInResult() && (t = i), n) {
                case this._SCANNING_FOR_INCOMING:
                  if (!o.isInResult()) continue;
                  e = o, n = this._LINKING_TO_OUTGOING;
                  break;
                case this._LINKING_TO_OUTGOING:
                  if (!i.isInResult()) continue;
                  e.setNext(i), n = this._SCANNING_FOR_INCOMING
              }
            }
            if (n === this._LINKING_TO_OUTGOING) {
              if (null === t) throw new Le("no outgoing dirEdge found", this.getCoordinate());
              et.isTrue(t.isInResult(), "unable to link last incoming dirEdge"), e.setNext(t)
            }
          }, e.prototype.insert = function (t) {
            var e = t;
            this.insertEdgeEnd(e, e)
          }, e.prototype.getRightmostEdge = function () {
            var t = this.getEdges(),
              e = t.size();
            if (e < 1) return null;
            var n = t.get(0);
            if (1 === e) return n;
            var r = t.get(e - 1),
              i = n.getQuadrant(),
              o = r.getQuadrant();
            return qe.isNorthern(i) && qe.isNorthern(o) ? n : qe.isNorthern(i) || qe.isNorthern(o) ? 0 !== n.getDy() ? n : 0 !== r.getDy() ? r : (et.shouldNeverReachHere("found two horizontal edges incident on node"), null) : r
          }, e.prototype.print = function (t) {
            U.out.println("DirectedEdgeStar: " + this.getCoordinate());
            for (var e = this.iterator(); e.hasNext();) {
              var n = e.next();
              t.print("out "), n.print(t), t.println(), t.print("in "), n.getSym().print(t), t.println()
            }
          }, e.prototype.getResultAreaEdges = function () {
            if (null !== this._resultAreaEdgeList) return this._resultAreaEdgeList;
            this._resultAreaEdgeList = new It;
            for (var t = this.iterator(); t.hasNext();) {
              var e = t.next();
              (e.isInResult() || e.getSym().isInResult()) && this._resultAreaEdgeList.add(e)
            }
            return this._resultAreaEdgeList
          }, e.prototype.updateLabelling = function (t) {
            for (var e = this.iterator(); e.hasNext();) {
              var n = e.next().getLabel();
              n.setAllLocationsIfNull(0, t.getLocation(0)), n.setAllLocationsIfNull(1, t.getLocation(1))
            }
          }, e.prototype.linkAllDirectedEdges = function () {
            this.getEdges();
            for (var t = null, e = null, n = this._edgeList.size() - 1; n >= 0; n--) {
              var r = this._edgeList.get(n),
                i = r.getSym();
              null === e && (e = i), null !== t && i.setNext(t), t = r
            }
            e.setNext(t)
          }, e.prototype.computeDepths = function () {
            if (1 === arguments.length) {
              var t = arguments[0],
                e = this.findIndex(t),
                n = t.getDepth(we.LEFT),
                r = t.getDepth(we.RIGHT),
                i = this.computeDepths(e + 1, this._edgeList.size(), n);
              if (this.computeDepths(0, e, i) !== r) throw new Le("depth mismatch at " + t.getCoordinate())
            } else if (3 === arguments.length) {
              for (var o = arguments[0], s = arguments[1], a = arguments[2], u = o; u < s; u++) {
                var l = this._edgeList.get(u);
                l.setEdgeDepths(we.RIGHT, a), a = l.getDepth(we.LEFT)
              }
              return a
            }
          }, e.prototype.mergeSymLabels = function () {
            for (var t = this.iterator(); t.hasNext();) {
              var e = t.next();
              e.getLabel().merge(e.getSym().getLabel())
            }
          }, e.prototype.linkMinimalDirectedEdges = function (t) {
            for (var e = null, n = null, r = this._SCANNING_FOR_INCOMING, i = this._resultAreaEdgeList.size() - 1; i >= 0; i--) {
              var o = this._resultAreaEdgeList.get(i),
                s = o.getSym();
              switch (null === e && o.getEdgeRing() === t && (e = o), r) {
                case this._SCANNING_FOR_INCOMING:
                  if (s.getEdgeRing() !== t) continue;
                  n = s, r = this._LINKING_TO_OUTGOING;
                  break;
                case this._LINKING_TO_OUTGOING:
                  if (o.getEdgeRing() !== t) continue;
                  n.setNextMin(o), r = this._SCANNING_FOR_INCOMING
              }
            }
            r === this._LINKING_TO_OUTGOING && (et.isTrue(null !== e, "found null for first outgoing dirEdge"), et.isTrue(e.getEdgeRing() === t, "unable to link last incoming dirEdge"), n.setNextMin(e))
          }, e.prototype.getOutgoingDegree = function () {
            if (0 === arguments.length) {
              for (var t = 0, e = this.iterator(); e.hasNext();) e.next().isInResult() && t++;
              return t
            }
            if (1 === arguments.length) {
              for (var n = arguments[0], r = 0, i = this.iterator(); i.hasNext();) i.next().getEdgeRing() === n && r++;
              return r
            }
          }, e.prototype.getLabel = function () {
            return this._label
          }, e.prototype.findCoveredLineEdges = function () {
            for (var t = L.NONE, e = this.iterator(); e.hasNext();) {
              var n = e.next(),
                r = n.getSym();
              if (!n.isLineEdge()) {
                if (n.isInResult()) {
                  t = L.INTERIOR;
                  break
                }
                if (r.isInResult()) {
                  t = L.EXTERIOR;
                  break
                }
              }
            }
            if (t === L.NONE) return null;
            for (var i = t, o = this.iterator(); o.hasNext();) {
              var s = o.next(),
                a = s.getSym();
              s.isLineEdge() ? s.getEdge().setCovered(i === L.INTERIOR) : (s.isInResult() && (i = L.EXTERIOR), a.isInResult() && (i = L.INTERIOR))
            }
          }, e.prototype.computeLabelling = function (e) {
            t.prototype.computeLabelling.call(this, e), this._label = new Pe(L.NONE);
            for (var n = this.iterator(); n.hasNext();)
              for (var r = n.next().getEdge().getLabel(), i = 0; i < 2; i++) {
                var o = r.getLocation(i);
                o !== L.INTERIOR && o !== L.BOUNDARY || this._label.setLocation(i, L.INTERIOR)
              }
          }, e.prototype.interfaces_ = function () {
            return []
          }, e.prototype.getClass = function () {
            return e
          }, e
        }(Vn),
        Xn = function (t) {
          function e() {
            t.apply(this, arguments)
          }
          return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.createNode = function (t) {
            return new Ge(t, new Un)
          }, e.prototype.interfaces_ = function () {
            return []
          }, e.prototype.getClass = function () {
            return e
          }, e
        }(Ve),
        Yn = function t() {
          this._pts = null, this._orientation = null;
          var e = arguments[0];
          this._pts = e, this._orientation = t.orientation(e)
        };
      Yn.prototype.compareTo = function (t) {
        var e = t;
        return Yn.compareOriented(this._pts, this._orientation, e._pts, e._orientation)
      }, Yn.prototype.interfaces_ = function () {
        return [E]
      }, Yn.prototype.getClass = function () {
        return Yn
      }, Yn.orientation = function (t) {
        return 1 === Ct.increasingDirection(t)
      }, Yn.compareOriented = function (t, e, n, r) {
        for (var i = e ? 1 : -1, o = r ? 1 : -1, s = e ? t.length : -1, a = r ? n.length : -1, u = e ? 0 : t.length - 1, l = r ? 0 : n.length - 1;;) {
          var c = t[u].compareTo(n[l]);
          if (0 !== c) return c;
          var h = (u += i) === s,
            p = (l += o) === a;
          if (h && !p) return -1;
          if (!h && p) return 1;
          if (h && p) return 0
        }
      };
      var Hn = function () {
        this._edges = new It, this._ocaMap = new h
      };
      Hn.prototype.print = function (t) {
        t.print("MULTILINESTRING ( ");
        for (var e = 0; e < this._edges.size(); e++) {
          var n = this._edges.get(e);
          e > 0 && t.print(","), t.print("(");
          for (var r = n.getCoordinates(), i = 0; i < r.length; i++) i > 0 && t.print(","), t.print(r[i].x + " " + r[i].y);
          t.println(")")
        }
        t.print(")  ")
      }, Hn.prototype.addAll = function (t) {
        for (var e = t.iterator(); e.hasNext();) this.add(e.next())
      }, Hn.prototype.findEdgeIndex = function (t) {
        for (var e = 0; e < this._edges.size(); e++)
          if (this._edges.get(e).equals(t)) return e;
        return -1
      }, Hn.prototype.iterator = function () {
        return this._edges.iterator()
      }, Hn.prototype.getEdges = function () {
        return this._edges
      }, Hn.prototype.get = function (t) {
        return this._edges.get(t)
      }, Hn.prototype.findEqualEdge = function (t) {
        var e = new Yn(t.getCoordinates());
        return this._ocaMap.get(e)
      }, Hn.prototype.add = function (t) {
        this._edges.add(t);
        var e = new Yn(t.getCoordinates());
        this._ocaMap.put(e, t)
      }, Hn.prototype.interfaces_ = function () {
        return []
      }, Hn.prototype.getClass = function () {
        return Hn
      };
      var Wn = function () {};
      Wn.prototype.processIntersections = function (t, e, n, r) {}, Wn.prototype.isDone = function () {}, Wn.prototype.interfaces_ = function () {
        return []
      }, Wn.prototype.getClass = function () {
        return Wn
      };
      var Zn = function () {
        this._hasIntersection = !1, this._hasProper = !1, this._hasProperInterior = !1, this._hasInterior = !1, this._properIntersectionPoint = null, this._li = null, this._isSelfIntersection = null, this.numIntersections = 0, this.numInteriorIntersections = 0, this.numProperIntersections = 0, this.numTests = 0;
        var t = arguments[0];
        this._li = t
      };
      Zn.prototype.isTrivialIntersection = function (t, e, n, r) {
        if (t === n && 1 === this._li.getIntersectionNum()) {
          if (Zn.isAdjacentSegments(e, r)) return !0;
          if (t.isClosed()) {
            var i = t.size() - 1;
            if (0 === e && r === i || 0 === r && e === i) return !0
          }
        }
        return !1
      }, Zn.prototype.getProperIntersectionPoint = function () {
        return this._properIntersectionPoint
      }, Zn.prototype.hasProperInteriorIntersection = function () {
        return this._hasProperInterior
      }, Zn.prototype.getLineIntersector = function () {
        return this._li
      }, Zn.prototype.hasProperIntersection = function () {
        return this._hasProper
      }, Zn.prototype.processIntersections = function (t, e, n, r) {
        if (t === n && e === r) return null;
        this.numTests++;
        var i = t.getCoordinates()[e],
          o = t.getCoordinates()[e + 1],
          s = n.getCoordinates()[r],
          a = n.getCoordinates()[r + 1];
        this._li.computeIntersection(i, o, s, a), this._li.hasIntersection() && (this.numIntersections++, this._li.isInteriorIntersection() && (this.numInteriorIntersections++, this._hasInterior = !0), this.isTrivialIntersection(t, e, n, r) || (this._hasIntersection = !0, t.addIntersections(this._li, e, 0), n.addIntersections(this._li, r, 1), this._li.isProper() && (this.numProperIntersections++, this._hasProper = !0, this._hasProperInterior = !0)))
      }, Zn.prototype.hasIntersection = function () {
        return this._hasIntersection
      }, Zn.prototype.isDone = function () {
        return !1
      }, Zn.prototype.hasInteriorIntersection = function () {
        return this._hasInterior
      }, Zn.prototype.interfaces_ = function () {
        return [Wn]
      }, Zn.prototype.getClass = function () {
        return Zn
      }, Zn.isAdjacentSegments = function (t, e) {
        return 1 === Math.abs(t - e)
      };
      var $n = function () {
        this.coord = null, this.segmentIndex = null, this.dist = null;
        var t = arguments[0],
          e = arguments[1],
          n = arguments[2];
        this.coord = new N(t), this.segmentIndex = e, this.dist = n
      };
      $n.prototype.getSegmentIndex = function () {
        return this.segmentIndex
      }, $n.prototype.getCoordinate = function () {
        return this.coord
      }, $n.prototype.print = function (t) {
        t.print(this.coord), t.print(" seg # = " + this.segmentIndex), t.println(" dist = " + this.dist)
      }, $n.prototype.compareTo = function (t) {
        var e = t;
        return this.compare(e.segmentIndex, e.dist)
      }, $n.prototype.isEndPoint = function (t) {
        return 0 === this.segmentIndex && 0 === this.dist || this.segmentIndex === t
      }, $n.prototype.toString = function () {
        return this.coord + " seg # = " + this.segmentIndex + " dist = " + this.dist
      }, $n.prototype.getDistance = function () {
        return this.dist
      }, $n.prototype.compare = function (t, e) {
        return this.segmentIndex < t ? -1 : this.segmentIndex > t ? 1 : this.dist < e ? -1 : this.dist > e ? 1 : 0
      }, $n.prototype.interfaces_ = function () {
        return [E]
      }, $n.prototype.getClass = function () {
        return $n
      };
      var Jn = function () {
        this._nodeMap = new h, this.edge = null;
        var t = arguments[0];
        this.edge = t
      };
      Jn.prototype.print = function (t) {
        t.println("Intersections:");
        for (var e = this.iterator(); e.hasNext();) e.next().print(t)
      }, Jn.prototype.iterator = function () {
        return this._nodeMap.values().iterator()
      }, Jn.prototype.addSplitEdges = function (t) {
        this.addEndpoints();
        for (var e = this.iterator(), n = e.next(); e.hasNext();) {
          var r = e.next(),
            i = this.createSplitEdge(n, r);
          t.add(i), n = r
        }
      }, Jn.prototype.addEndpoints = function () {
        var t = this.edge.pts.length - 1;
        this.add(this.edge.pts[0], 0, 0), this.add(this.edge.pts[t], t, 0)
      }, Jn.prototype.createSplitEdge = function (t, e) {
        var n = e.segmentIndex - t.segmentIndex + 2,
          r = this.edge.pts[e.segmentIndex],
          i = e.dist > 0 || !e.coord.equals2D(r);
        i || n--;
        var o = new Array(n).fill(null),
          s = 0;
        o[s++] = new N(t.coord);
        for (var a = t.segmentIndex + 1; a <= e.segmentIndex; a++) o[s++] = this.edge.pts[a];
        return i && (o[s] = e.coord), new nr(o, new Pe(this.edge._label))
      }, Jn.prototype.add = function (t, e, n) {
        var r = new $n(t, e, n),
          i = this._nodeMap.get(r);
        return null !== i ? i : (this._nodeMap.put(r, r), r)
      }, Jn.prototype.isIntersection = function (t) {
        for (var e = this.iterator(); e.hasNext();)
          if (e.next().coord.equals(t)) return !0;
        return !1
      }, Jn.prototype.interfaces_ = function () {
        return []
      }, Jn.prototype.getClass = function () {
        return Jn
      };
      var Kn = function () {};
      Kn.prototype.getChainStartIndices = function (t) {
        var e = 0,
          n = new It;
        n.add(new D(e));
        do {
          var r = this.findChainEnd(t, e);
          n.add(new D(r)), e = r
        } while (e < t.length - 1);
        return Kn.toIntArray(n)
      }, Kn.prototype.findChainEnd = function (t, e) {
        for (var n = qe.quadrant(t[e], t[e + 1]), r = e + 1; r < t.length && qe.quadrant(t[r - 1], t[r]) === n;) r++;
        return r - 1
      }, Kn.prototype.interfaces_ = function () {
        return []
      }, Kn.prototype.getClass = function () {
        return Kn
      }, Kn.toIntArray = function (t) {
        for (var e = new Array(t.size()).fill(null), n = 0; n < e.length; n++) e[n] = t.get(n).intValue();
        return e
      };
      var Qn = function () {
        this.e = null, this.pts = null, this.startIndex = null, this.env1 = new Y, this.env2 = new Y;
        var t = arguments[0];
        this.e = t, this.pts = t.getCoordinates();
        var e = new Kn;
        this.startIndex = e.getChainStartIndices(this.pts)
      };
      Qn.prototype.getCoordinates = function () {
        return this.pts
      }, Qn.prototype.getMaxX = function (t) {
        var e = this.pts[this.startIndex[t]].x,
          n = this.pts[this.startIndex[t + 1]].x;
        return e > n ? e : n
      }, Qn.prototype.getMinX = function (t) {
        var e = this.pts[this.startIndex[t]].x,
          n = this.pts[this.startIndex[t + 1]].x;
        return e < n ? e : n
      }, Qn.prototype.computeIntersectsForChain = function () {
        if (4 === arguments.length) {
          var t = arguments[0],
            e = arguments[1],
            n = arguments[2],
            r = arguments[3];
          this.computeIntersectsForChain(this.startIndex[t], this.startIndex[t + 1], e, e.startIndex[n], e.startIndex[n + 1], r)
        } else if (6 === arguments.length) {
          var i = arguments[0],
            o = arguments[1],
            s = arguments[2],
            a = arguments[3],
            u = arguments[4],
            l = arguments[5],
            c = this.pts[i],
            h = this.pts[o],
            p = s.pts[a],
            f = s.pts[u];
          if (o - i == 1 && u - a == 1) return l.addIntersections(this.e, i, s.e, a), null;
          if (this.env1.init(c, h), this.env2.init(p, f), !this.env1.intersects(this.env2)) return null;
          var g = Math.trunc((i + o) / 2),
            d = Math.trunc((a + u) / 2);
          i < g && (a < d && this.computeIntersectsForChain(i, g, s, a, d, l), d < u && this.computeIntersectsForChain(i, g, s, d, u, l)), g < o && (a < d && this.computeIntersectsForChain(g, o, s, a, d, l), d < u && this.computeIntersectsForChain(g, o, s, d, u, l))
        }
      }, Qn.prototype.getStartIndexes = function () {
        return this.startIndex
      }, Qn.prototype.computeIntersects = function (t, e) {
        for (var n = 0; n < this.startIndex.length - 1; n++)
          for (var r = 0; r < t.startIndex.length - 1; r++) this.computeIntersectsForChain(n, t, r, e)
      }, Qn.prototype.interfaces_ = function () {
        return []
      }, Qn.prototype.getClass = function () {
        return Qn
      };
      var tr = function t() {
          this._depth = Array(2).fill().map((function () {
            return Array(3)
          }));
          for (var e = 0; e < 2; e++)
            for (var n = 0; n < 3; n++) this._depth[e][n] = t.NULL_VALUE
        },
        er = {
          NULL_VALUE: {
            configurable: !0
          }
        };
      tr.prototype.getDepth = function (t, e) {
        return this._depth[t][e]
      }, tr.prototype.setDepth = function (t, e, n) {
        this._depth[t][e] = n
      }, tr.prototype.isNull = function () {
        if (0 === arguments.length) {
          for (var t = 0; t < 2; t++)
            for (var e = 0; e < 3; e++)
              if (this._depth[t][e] !== tr.NULL_VALUE) return !1;
          return !0
        }
        if (1 === arguments.length) {
          var n = arguments[0];
          return this._depth[n][1] === tr.NULL_VALUE
        }
        if (2 === arguments.length) {
          var r = arguments[0],
            i = arguments[1];
          return this._depth[r][i] === tr.NULL_VALUE
        }
      }, tr.prototype.normalize = function () {
        for (var t = 0; t < 2; t++)
          if (!this.isNull(t)) {
            var e = this._depth[t][1];
            this._depth[t][2] < e && (e = this._depth[t][2]), e < 0 && (e = 0);
            for (var n = 1; n < 3; n++) {
              var r = 0;
              this._depth[t][n] > e && (r = 1), this._depth[t][n] = r
            }
          }
      }, tr.prototype.getDelta = function (t) {
        return this._depth[t][we.RIGHT] - this._depth[t][we.LEFT]
      }, tr.prototype.getLocation = function (t, e) {
        return this._depth[t][e] <= 0 ? L.EXTERIOR : L.INTERIOR
      }, tr.prototype.toString = function () {
        return "A: " + this._depth[0][1] + "," + this._depth[0][2] + " B: " + this._depth[1][1] + "," + this._depth[1][2]
      }, tr.prototype.add = function () {
        if (1 === arguments.length)
          for (var t = arguments[0], e = 0; e < 2; e++)
            for (var n = 1; n < 3; n++) {
              var r = t.getLocation(e, n);
              r !== L.EXTERIOR && r !== L.INTERIOR || (this.isNull(e, n) ? this._depth[e][n] = tr.depthAtLocation(r) : this._depth[e][n] += tr.depthAtLocation(r))
            } else if (3 === arguments.length) {
              var i = arguments[0],
                o = arguments[1];
              arguments[2] === L.INTERIOR && this._depth[i][o]++
            }
      }, tr.prototype.interfaces_ = function () {
        return []
      }, tr.prototype.getClass = function () {
        return tr
      }, tr.depthAtLocation = function (t) {
        return t === L.EXTERIOR ? 0 : t === L.INTERIOR ? 1 : tr.NULL_VALUE
      }, er.NULL_VALUE.get = function () {
        return -1
      }, Object.defineProperties(tr, er);
      var nr = function (t) {
          function e() {
            if (t.call(this), this.pts = null, this._env = null, this.eiList = new Jn(this), this._name = null, this._mce = null, this._isIsolated = !0, this._depth = new tr, this._depthDelta = 0, 1 === arguments.length) {
              var n = arguments[0];
              e.call(this, n, null)
            } else if (2 === arguments.length) {
              var r = arguments[0],
                i = arguments[1];
              this.pts = r, this._label = i
            }
          }
          return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getDepth = function () {
            return this._depth
          }, e.prototype.getCollapsedEdge = function () {
            var t = new Array(2).fill(null);
            return t[0] = this.pts[0], t[1] = this.pts[1], new e(t, Pe.toLineLabel(this._label))
          }, e.prototype.isIsolated = function () {
            return this._isIsolated
          }, e.prototype.getCoordinates = function () {
            return this.pts
          }, e.prototype.setIsolated = function (t) {
            this._isIsolated = t
          }, e.prototype.setName = function (t) {
            this._name = t
          }, e.prototype.equals = function (t) {
            if (!(t instanceof e)) return !1;
            var n = t;
            if (this.pts.length !== n.pts.length) return !1;
            for (var r = !0, i = !0, o = this.pts.length, s = 0; s < this.pts.length; s++)
              if (this.pts[s].equals2D(n.pts[s]) || (r = !1), this.pts[s].equals2D(n.pts[--o]) || (i = !1), !r && !i) return !1;
            return !0
          }, e.prototype.getCoordinate = function () {
            if (0 === arguments.length) return this.pts.length > 0 ? this.pts[0] : null;
            if (1 === arguments.length) {
              var t = arguments[0];
              return this.pts[t]
            }
          }, e.prototype.print = function (t) {
            t.print("edge " + this._name + ": "), t.print("LINESTRING (");
            for (var e = 0; e < this.pts.length; e++) e > 0 && t.print(","), t.print(this.pts[e].x + " " + this.pts[e].y);
            t.print(")  " + this._label + " " + this._depthDelta)
          }, e.prototype.computeIM = function (t) {
            e.updateIM(this._label, t)
          }, e.prototype.isCollapsed = function () {
            return !!this._label.isArea() && 3 === this.pts.length && !!this.pts[0].equals(this.pts[2])
          }, e.prototype.isClosed = function () {
            return this.pts[0].equals(this.pts[this.pts.length - 1])
          }, e.prototype.getMaximumSegmentIndex = function () {
            return this.pts.length - 1
          }, e.prototype.getDepthDelta = function () {
            return this._depthDelta
          }, e.prototype.getNumPoints = function () {
            return this.pts.length
          }, e.prototype.printReverse = function (t) {
            t.print("edge " + this._name + ": ");
            for (var e = this.pts.length - 1; e >= 0; e--) t.print(this.pts[e] + " ");
            t.println("")
          }, e.prototype.getMonotoneChainEdge = function () {
            return null === this._mce && (this._mce = new Qn(this)), this._mce
          }, e.prototype.getEnvelope = function () {
            if (null === this._env) {
              this._env = new Y;
              for (var t = 0; t < this.pts.length; t++) this._env.expandToInclude(this.pts[t])
            }
            return this._env
          }, e.prototype.addIntersection = function (t, e, n, r) {
            var i = new N(t.getIntersection(r)),
              o = e,
              s = t.getEdgeDistance(n, r),
              a = o + 1;
            if (a < this.pts.length) {
              var u = this.pts[a];
              i.equals2D(u) && (o = a, s = 0)
            }
            this.eiList.add(i, o, s)
          }, e.prototype.toString = function () {
            var t = new R;
            t.append("edge " + this._name + ": "), t.append("LINESTRING (");
            for (var e = 0; e < this.pts.length; e++) e > 0 && t.append(","), t.append(this.pts[e].x + " " + this.pts[e].y);
            return t.append(")  " + this._label + " " + this._depthDelta), t.toString()
          }, e.prototype.isPointwiseEqual = function (t) {
            if (this.pts.length !== t.pts.length) return !1;
            for (var e = 0; e < this.pts.length; e++)
              if (!this.pts[e].equals2D(t.pts[e])) return !1;
            return !0
          }, e.prototype.setDepthDelta = function (t) {
            this._depthDelta = t
          }, e.prototype.getEdgeIntersectionList = function () {
            return this.eiList
          }, e.prototype.addIntersections = function (t, e, n) {
            for (var r = 0; r < t.getIntersectionNum(); r++) this.addIntersection(t, e, n, r)
          }, e.prototype.interfaces_ = function () {
            return []
          }, e.prototype.getClass = function () {
            return e
          }, e.updateIM = function () {
            if (2 !== arguments.length) return t.prototype.updateIM.apply(this, arguments);
            var e = arguments[0],
              n = arguments[1];
            n.setAtLeastIfValid(e.getLocation(0, we.ON), e.getLocation(1, we.ON), 1), e.isArea() && (n.setAtLeastIfValid(e.getLocation(0, we.LEFT), e.getLocation(1, we.LEFT), 2), n.setAtLeastIfValid(e.getLocation(0, we.RIGHT), e.getLocation(1, we.RIGHT), 2))
          }, e
        }(Fe),
        rr = function (t) {
          this._workingPrecisionModel = null, this._workingNoder = null, this._geomFact = null, this._graph = null, this._edgeList = new Hn, this._bufParams = t || null
        };
      rr.prototype.setWorkingPrecisionModel = function (t) {
        this._workingPrecisionModel = t
      }, rr.prototype.insertUniqueEdge = function (t) {
        var e = this._edgeList.findEqualEdge(t);
        if (null !== e) {
          var n = e.getLabel(),
            r = t.getLabel();
          e.isPointwiseEqual(t) || (r = new Pe(t.getLabel())).flip(), n.merge(r);
          var i = rr.depthDelta(r),
            o = e.getDepthDelta() + i;
          e.setDepthDelta(o)
        } else this._edgeList.add(t), t.setDepthDelta(rr.depthDelta(t.getLabel()))
      }, rr.prototype.buildSubgraphs = function (t, e) {
        for (var n = new It, r = t.iterator(); r.hasNext();) {
          var i = r.next(),
            o = i.getRightmostCoordinate(),
            s = new An(n).getDepth(o);
          i.computeDepth(s), i.findResultEdges(), n.add(i), e.add(i.getDirectedEdges(), i.getNodes())
        }
      }, rr.prototype.createSubgraphs = function (t) {
        for (var e = new It, n = t.getNodes().iterator(); n.hasNext();) {
          var r = n.next();
          if (!r.isVisited()) {
            var i = new Te;
            i.create(r), e.add(i)
          }
        }
        return Qe.sort(e, Qe.reverseOrder()), e
      }, rr.prototype.createEmptyResultGeometry = function () {
        return this._geomFact.createPolygon()
      }, rr.prototype.getNoder = function (t) {
        if (null !== this._workingNoder) return this._workingNoder;
        var e = new bn,
          n = new it;
        return n.setPrecisionModel(t), e.setSegmentIntersector(new Zn(n)), e
      }, rr.prototype.buffer = function (t, e) {
        var n = this._workingPrecisionModel;
        null === n && (n = t.getPrecisionModel()), this._geomFact = t.getFactory();
        var r = new Dn(n, this._bufParams),
          i = new qn(t, e, r).getCurves();
        if (i.size() <= 0) return this.createEmptyResultGeometry();
        this.computeNodedEdges(i, n), this._graph = new Ue(new Xn), this._graph.addEdges(this._edgeList.getEdges());
        var o = this.createSubgraphs(this._graph),
          s = new Xe(this._geomFact);
        this.buildSubgraphs(o, s);
        var a = s.getPolygons();
        return a.size() <= 0 ? this.createEmptyResultGeometry() : this._geomFact.buildGeometry(a)
      }, rr.prototype.computeNodedEdges = function (t, e) {
        var n = this.getNoder(e);
        n.computeNodes(t);
        for (var r = n.getNodedSubstrings().iterator(); r.hasNext();) {
          var i = r.next(),
            o = i.getCoordinates();
          if (2 !== o.length || !o[0].equals2D(o[1])) {
            var s = i.getData(),
              a = new nr(i.getCoordinates(), new Pe(s));
            this.insertUniqueEdge(a)
          }
        }
      }, rr.prototype.setNoder = function (t) {
        this._workingNoder = t
      }, rr.prototype.interfaces_ = function () {
        return []
      }, rr.prototype.getClass = function () {
        return rr
      }, rr.depthDelta = function (t) {
        var e = t.getLocation(0, we.LEFT),
          n = t.getLocation(0, we.RIGHT);
        return e === L.INTERIOR && n === L.EXTERIOR ? 1 : e === L.EXTERIOR && n === L.INTERIOR ? -1 : 0
      }, rr.convertSegStrings = function (t) {
        for (var e = new _e, n = new It; t.hasNext();) {
          var r = t.next(),
            i = e.createLineString(r.getCoordinates());
          n.add(i)
        }
        return e.buildGeometry(n)
      };
      var ir = function () {
        if (this._noder = null, this._scaleFactor = null, this._offsetX = null, this._offsetY = null, this._isScaled = !1, 2 === arguments.length) {
          var t = arguments[0],
            e = arguments[1];
          this._noder = t, this._scaleFactor = e, this._offsetX = 0, this._offsetY = 0, this._isScaled = !this.isIntegerPrecision()
        } else if (4 === arguments.length) {
          var n = arguments[0],
            r = arguments[1],
            i = arguments[2],
            o = arguments[3];
          this._noder = n, this._scaleFactor = r, this._offsetX = i, this._offsetY = o, this._isScaled = !this.isIntegerPrecision()
        }
      };
      ir.prototype.rescale = function () {
        if (T(arguments[0], xt))
          for (var t = arguments[0].iterator(); t.hasNext();) {
            var e = t.next();
            this.rescale(e.getCoordinates())
          } else if (arguments[0] instanceof Array) {
            for (var n = arguments[0], r = 0; r < n.length; r++) n[r].x = n[r].x / this._scaleFactor + this._offsetX, n[r].y = n[r].y / this._scaleFactor + this._offsetY;
            2 === n.length && n[0].equals2D(n[1]) && U.out.println(n)
          }
      }, ir.prototype.scale = function () {
        if (T(arguments[0], xt)) {
          for (var t = arguments[0], e = new It, n = t.iterator(); n.hasNext();) {
            var r = n.next();
            e.add(new gn(this.scale(r.getCoordinates()), r.getData()))
          }
          return e
        }
        if (arguments[0] instanceof Array) {
          for (var i = arguments[0], o = new Array(i.length).fill(null), s = 0; s < i.length; s++) o[s] = new N(Math.round((i[s].x - this._offsetX) * this._scaleFactor), Math.round((i[s].y - this._offsetY) * this._scaleFactor), i[s].z);
          return Ct.removeRepeatedPoints(o)
        }
      }, ir.prototype.isIntegerPrecision = function () {
        return 1 === this._scaleFactor
      }, ir.prototype.getNodedSubstrings = function () {
        var t = this._noder.getNodedSubstrings();
        return this._isScaled && this.rescale(t), t
      }, ir.prototype.computeNodes = function (t) {
        var e = t;
        this._isScaled && (e = this.scale(t)), this._noder.computeNodes(e)
      }, ir.prototype.interfaces_ = function () {
        return [xn]
      }, ir.prototype.getClass = function () {
        return ir
      };
      var or = function () {
          this._li = new it, this._segStrings = null;
          var t = arguments[0];
          this._segStrings = t
        },
        sr = {
          fact: {
            configurable: !0
          }
        };
      or.prototype.checkEndPtVertexIntersections = function () {
        if (0 === arguments.length)
          for (var t = this._segStrings.iterator(); t.hasNext();) {
            var e = t.next().getCoordinates();
            this.checkEndPtVertexIntersections(e[0], this._segStrings), this.checkEndPtVertexIntersections(e[e.length - 1], this._segStrings)
          } else if (2 === arguments.length)
            for (var n = arguments[0], r = arguments[1].iterator(); r.hasNext();)
              for (var i = r.next().getCoordinates(), o = 1; o < i.length - 1; o++)
                if (i[o].equals(n)) throw new Q("found endpt/interior pt intersection at index " + o + " :pt " + n)
      }, or.prototype.checkInteriorIntersections = function () {
        if (0 === arguments.length)
          for (var t = this._segStrings.iterator(); t.hasNext();)
            for (var e = t.next(), n = this._segStrings.iterator(); n.hasNext();) {
              var r = n.next();
              this.checkInteriorIntersections(e, r)
            } else if (2 === arguments.length)
              for (var i = arguments[0], o = arguments[1], s = i.getCoordinates(), a = o.getCoordinates(), u = 0; u < s.length - 1; u++)
                for (var l = 0; l < a.length - 1; l++) this.checkInteriorIntersections(i, u, o, l);
            else if (4 === arguments.length) {
          var c = arguments[0],
            h = arguments[1],
            p = arguments[2],
            f = arguments[3];
          if (c === p && h === f) return null;
          var g = c.getCoordinates()[h],
            d = c.getCoordinates()[h + 1],
            y = p.getCoordinates()[f],
            _ = p.getCoordinates()[f + 1];
          if (this._li.computeIntersection(g, d, y, _), this._li.hasIntersection() && (this._li.isProper() || this.hasInteriorIntersection(this._li, g, d) || this.hasInteriorIntersection(this._li, y, _))) throw new Q("found non-noded intersection at " + g + "-" + d + " and " + y + "-" + _)
        }
      }, or.prototype.checkValid = function () {
        this.checkEndPtVertexIntersections(), this.checkInteriorIntersections(), this.checkCollapses()
      }, or.prototype.checkCollapses = function () {
        if (0 === arguments.length)
          for (var t = this._segStrings.iterator(); t.hasNext();) {
            var e = t.next();
            this.checkCollapses(e)
          } else if (1 === arguments.length)
            for (var n = arguments[0].getCoordinates(), r = 0; r < n.length - 2; r++) this.checkCollapse(n[r], n[r + 1], n[r + 2])
      }, or.prototype.hasInteriorIntersection = function (t, e, n) {
        for (var r = 0; r < t.getIntersectionNum(); r++) {
          var i = t.getIntersection(r);
          if (!i.equals(e) && !i.equals(n)) return !0
        }
        return !1
      }, or.prototype.checkCollapse = function (t, e, n) {
        if (t.equals(n)) throw new Q("found non-noded collapse at " + or.fact.createLineString([t, e, n]))
      }, or.prototype.interfaces_ = function () {
        return []
      }, or.prototype.getClass = function () {
        return or
      }, sr.fact.get = function () {
        return new _e
      }, Object.defineProperties(or, sr);
      var ar = function () {
          this._li = null, this._pt = null, this._originalPt = null, this._ptScaled = null, this._p0Scaled = null, this._p1Scaled = null, this._scaleFactor = null, this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, this._corner = new Array(4).fill(null), this._safeEnv = null;
          var t = arguments[0],
            e = arguments[1],
            n = arguments[2];
          if (this._originalPt = t, this._pt = t, this._scaleFactor = e, this._li = n, e <= 0) throw new m("Scale factor must be non-zero");
          1 !== e && (this._pt = new N(this.scale(t.x), this.scale(t.y)), this._p0Scaled = new N, this._p1Scaled = new N), this.initCorners(this._pt)
        },
        ur = {
          SAFE_ENV_EXPANSION_FACTOR: {
            configurable: !0
          }
        };
      ar.prototype.intersectsScaled = function (t, e) {
        var n = Math.min(t.x, e.x),
          r = Math.max(t.x, e.x),
          i = Math.min(t.y, e.y),
          o = Math.max(t.y, e.y),
          s = this._maxx < n || this._minx > r || this._maxy < i || this._miny > o;
        if (s) return !1;
        var a = this.intersectsToleranceSquare(t, e);
        return et.isTrue(!(s && a), "Found bad envelope test"), a
      }, ar.prototype.initCorners = function (t) {
        this._minx = t.x - .5, this._maxx = t.x + .5, this._miny = t.y - .5, this._maxy = t.y + .5, this._corner[0] = new N(this._maxx, this._maxy), this._corner[1] = new N(this._minx, this._maxy), this._corner[2] = new N(this._minx, this._miny), this._corner[3] = new N(this._maxx, this._miny)
      }, ar.prototype.intersects = function (t, e) {
        return 1 === this._scaleFactor ? this.intersectsScaled(t, e) : (this.copyScaled(t, this._p0Scaled), this.copyScaled(e, this._p1Scaled), this.intersectsScaled(this._p0Scaled, this._p1Scaled))
      }, ar.prototype.scale = function (t) {
        return Math.round(t * this._scaleFactor)
      }, ar.prototype.getCoordinate = function () {
        return this._originalPt
      }, ar.prototype.copyScaled = function (t, e) {
        e.x = this.scale(t.x), e.y = this.scale(t.y)
      }, ar.prototype.getSafeEnvelope = function () {
        if (null === this._safeEnv) {
          var t = ar.SAFE_ENV_EXPANSION_FACTOR / this._scaleFactor;
          this._safeEnv = new Y(this._originalPt.x - t, this._originalPt.x + t, this._originalPt.y - t, this._originalPt.y + t)
        }
        return this._safeEnv
      }, ar.prototype.intersectsPixelClosure = function (t, e) {
        return this._li.computeIntersection(t, e, this._corner[0], this._corner[1]), !!(this._li.hasIntersection() || (this._li.computeIntersection(t, e, this._corner[1], this._corner[2]), this._li.hasIntersection() || (this._li.computeIntersection(t, e, this._corner[2], this._corner[3]), this._li.hasIntersection() || (this._li.computeIntersection(t, e, this._corner[3], this._corner[0]), this._li.hasIntersection()))))
      }, ar.prototype.intersectsToleranceSquare = function (t, e) {
        var n = !1,
          r = !1;
        return this._li.computeIntersection(t, e, this._corner[0], this._corner[1]), !!(this._li.isProper() || (this._li.computeIntersection(t, e, this._corner[1], this._corner[2]), this._li.isProper() || (this._li.hasIntersection() && (n = !0), this._li.computeIntersection(t, e, this._corner[2], this._corner[3]), this._li.isProper() || (this._li.hasIntersection() && (r = !0), this._li.computeIntersection(t, e, this._corner[3], this._corner[0]), this._li.isProper() || n && r || t.equals(this._pt) || e.equals(this._pt)))))
      }, ar.prototype.addSnappedNode = function (t, e) {
        var n = t.getCoordinate(e),
          r = t.getCoordinate(e + 1);
        return !!this.intersects(n, r) && (t.addIntersection(this.getCoordinate(), e), !0)
      }, ar.prototype.interfaces_ = function () {
        return []
      }, ar.prototype.getClass = function () {
        return ar
      }, ur.SAFE_ENV_EXPANSION_FACTOR.get = function () {
        return .75
      }, Object.defineProperties(ar, ur);
      var lr = function () {
        this.tempEnv1 = new Y, this.selectedSegment = new dn
      };
      lr.prototype.select = function () {
        if (1 === arguments.length);
        else if (2 === arguments.length) {
          var t = arguments[0],
            e = arguments[1];
          t.getLineSegment(e, this.selectedSegment), this.select(this.selectedSegment)
        }
      }, lr.prototype.interfaces_ = function () {
        return []
      }, lr.prototype.getClass = function () {
        return lr
      };
      var cr = function () {
          this._index = null;
          var t = arguments[0];
          this._index = t
        },
        hr = {
          HotPixelSnapAction: {
            configurable: !0
          }
        };
      cr.prototype.snap = function () {
        if (1 === arguments.length) {
          var t = arguments[0];
          return this.snap(t, null, -1)
        }
        if (3 === arguments.length) {
          var e = arguments[0],
            n = arguments[1],
            r = arguments[2],
            i = e.getSafeEnvelope(),
            o = new pr(e, n, r);
          return this._index.query(i, {
            interfaces_: function () {
              return [Ze]
            },
            visitItem: function (t) {
              t.select(i, o)
            }
          }), o.isNodeAdded()
        }
      }, cr.prototype.interfaces_ = function () {
        return []
      }, cr.prototype.getClass = function () {
        return cr
      }, hr.HotPixelSnapAction.get = function () {
        return pr
      }, Object.defineProperties(cr, hr);
      var pr = function (t) {
          function e() {
            t.call(this), this._hotPixel = null, this._parentEdge = null, this._hotPixelVertexIndex = null, this._isNodeAdded = !1;
            var e = arguments[0],
              n = arguments[1],
              r = arguments[2];
            this._hotPixel = e, this._parentEdge = n, this._hotPixelVertexIndex = r
          }
          return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.isNodeAdded = function () {
            return this._isNodeAdded
          }, e.prototype.select = function () {
            if (2 !== arguments.length) return t.prototype.select.apply(this, arguments);
            var e = arguments[0],
              n = arguments[1],
              r = e.getContext();
            if (null !== this._parentEdge && r === this._parentEdge && n === this._hotPixelVertexIndex) return null;
            this._isNodeAdded = this._hotPixel.addSnappedNode(r, n)
          }, e.prototype.interfaces_ = function () {
            return []
          }, e.prototype.getClass = function () {
            return e
          }, e
        }(lr),
        fr = function () {
          this._li = null, this._interiorIntersections = null;
          var t = arguments[0];
          this._li = t, this._interiorIntersections = new It
        };
      fr.prototype.processIntersections = function (t, e, n, r) {
        if (t === n && e === r) return null;
        var i = t.getCoordinates()[e],
          o = t.getCoordinates()[e + 1],
          s = n.getCoordinates()[r],
          a = n.getCoordinates()[r + 1];
        if (this._li.computeIntersection(i, o, s, a), this._li.hasIntersection() && this._li.isInteriorIntersection()) {
          for (var u = 0; u < this._li.getIntersectionNum(); u++) this._interiorIntersections.add(this._li.getIntersection(u));
          t.addIntersections(this._li, e, 0), n.addIntersections(this._li, r, 1)
        }
      }, fr.prototype.isDone = function () {
        return !1
      }, fr.prototype.getInteriorIntersections = function () {
        return this._interiorIntersections
      }, fr.prototype.interfaces_ = function () {
        return [Wn]
      }, fr.prototype.getClass = function () {
        return fr
      };
      var gr = function () {
        this._pm = null, this._li = null, this._scaleFactor = null, this._noder = null, this._pointSnapper = null, this._nodedSegStrings = null;
        var t = arguments[0];
        this._pm = t, this._li = new it, this._li.setPrecisionModel(t), this._scaleFactor = t.getScale()
      };
      gr.prototype.checkCorrectness = function (t) {
        var e = gn.getNodedSubstrings(t),
          n = new or(e);
        try {
          n.checkValid()
        } catch (t) {
          if (!(t instanceof j)) throw t;
          t.printStackTrace()
        }
      }, gr.prototype.getNodedSubstrings = function () {
        return gn.getNodedSubstrings(this._nodedSegStrings)
      }, gr.prototype.snapRound = function (t, e) {
        var n = this.findInteriorIntersections(t, e);
        this.computeIntersectionSnaps(n), this.computeVertexSnaps(t)
      }, gr.prototype.findInteriorIntersections = function (t, e) {
        var n = new fr(e);
        return this._noder.setSegmentIntersector(n), this._noder.computeNodes(t), n.getInteriorIntersections()
      }, gr.prototype.computeVertexSnaps = function () {
        if (T(arguments[0], xt))
          for (var t = arguments[0].iterator(); t.hasNext();) {
            var e = t.next();
            this.computeVertexSnaps(e)
          } else if (arguments[0] instanceof gn)
            for (var n = arguments[0], r = n.getCoordinates(), i = 0; i < r.length; i++) {
              var o = new ar(r[i], this._scaleFactor, this._li);
              this._pointSnapper.snap(o, n, i) && n.addIntersection(r[i], i)
            }
      }, gr.prototype.computeNodes = function (t) {
        this._nodedSegStrings = t, this._noder = new bn, this._pointSnapper = new cr(this._noder.getIndex()), this.snapRound(t, this._li)
      }, gr.prototype.computeIntersectionSnaps = function (t) {
        for (var e = t.iterator(); e.hasNext();) {
          var n = e.next(),
            r = new ar(n, this._scaleFactor, this._li);
          this._pointSnapper.snap(r)
        }
      }, gr.prototype.interfaces_ = function () {
        return [xn]
      }, gr.prototype.getClass = function () {
        return gr
      };
      var dr = function () {
          if (this._argGeom = null, this._distance = null, this._bufParams = new Nn, this._resultGeometry = null, this._saveException = null, 1 === arguments.length) {
            var t = arguments[0];
            this._argGeom = t
          } else if (2 === arguments.length) {
            var e = arguments[0],
              n = arguments[1];
            this._argGeom = e, this._bufParams = n
          }
        },
        yr = {
          CAP_ROUND: {
            configurable: !0
          },
          CAP_BUTT: {
            configurable: !0
          },
          CAP_FLAT: {
            configurable: !0
          },
          CAP_SQUARE: {
            configurable: !0
          },
          MAX_PRECISION_DIGITS: {
            configurable: !0
          }
        };
      dr.prototype.bufferFixedPrecision = function (t) {
        var e = new ir(new gr(new fe(1)), t.getScale()),
          n = new rr(this._bufParams);
        n.setWorkingPrecisionModel(t), n.setNoder(e), this._resultGeometry = n.buffer(this._argGeom, this._distance)
      }, dr.prototype.bufferReducedPrecision = function () {
        var t = this;
        if (0 === arguments.length) {
          for (var e = dr.MAX_PRECISION_DIGITS; e >= 0; e--) {
            try {
              t.bufferReducedPrecision(e)
            } catch (e) {
              if (!(e instanceof Le)) throw e;
              t._saveException = e
            }
            if (null !== t._resultGeometry) return null
          }
          throw this._saveException
        }
        if (1 === arguments.length) {
          var n = arguments[0],
            r = dr.precisionScaleFactor(this._argGeom, this._distance, n),
            i = new fe(r);
          this.bufferFixedPrecision(i)
        }
      }, dr.prototype.computeGeometry = function () {
        if (this.bufferOriginalPrecision(), null !== this._resultGeometry) return null;
        var t = this._argGeom.getFactory().getPrecisionModel();
        t.getType() === fe.FIXED ? this.bufferFixedPrecision(t) : this.bufferReducedPrecision()
      }, dr.prototype.setQuadrantSegments = function (t) {
        this._bufParams.setQuadrantSegments(t)
      }, dr.prototype.bufferOriginalPrecision = function () {
        try {
          var t = new rr(this._bufParams);
          this._resultGeometry = t.buffer(this._argGeom, this._distance)
        } catch (t) {
          if (!(t instanceof Q)) throw t;
          this._saveException = t
        }
      }, dr.prototype.getResultGeometry = function (t) {
        return this._distance = t, this.computeGeometry(), this._resultGeometry
      }, dr.prototype.setEndCapStyle = function (t) {
        this._bufParams.setEndCapStyle(t)
      }, dr.prototype.interfaces_ = function () {
        return []
      }, dr.prototype.getClass = function () {
        return dr
      }, dr.bufferOp = function () {
        if (2 === arguments.length) {
          var t = arguments[0],
            e = arguments[1];
          return new dr(t).getResultGeometry(e)
        }
        if (3 === arguments.length) {
          if (Number.isInteger(arguments[2]) && arguments[0] instanceof ct && "number" == typeof arguments[1]) {
            var n = arguments[0],
              r = arguments[1],
              i = arguments[2],
              o = new dr(n);
            return o.setQuadrantSegments(i), o.getResultGeometry(r)
          }
          if (arguments[2] instanceof Nn && arguments[0] instanceof ct && "number" == typeof arguments[1]) {
            var s = arguments[0],
              a = arguments[1],
              u = arguments[2];
            return new dr(s, u).getResultGeometry(a)
          }
        } else if (4 === arguments.length) {
          var l = arguments[0],
            c = arguments[1],
            h = arguments[2],
            p = arguments[3],
            f = new dr(l);
          return f.setQuadrantSegments(h), f.setEndCapStyle(p), f.getResultGeometry(c)
        }
      }, dr.precisionScaleFactor = function (t, e, n) {
        var r = t.getEnvelopeInternal(),
          i = M.max(Math.abs(r.getMaxX()), Math.abs(r.getMaxY()), Math.abs(r.getMinX()), Math.abs(r.getMinY())) + 2 * (e > 0 ? e : 0),
          o = n - Math.trunc(Math.log(i) / Math.log(10) + 1);
        return Math.pow(10, o)
      }, yr.CAP_ROUND.get = function () {
        return Nn.CAP_ROUND
      }, yr.CAP_BUTT.get = function () {
        return Nn.CAP_FLAT
      }, yr.CAP_FLAT.get = function () {
        return Nn.CAP_FLAT
      }, yr.CAP_SQUARE.get = function () {
        return Nn.CAP_SQUARE
      }, yr.MAX_PRECISION_DIGITS.get = function () {
        return 12
      }, Object.defineProperties(dr, yr);
      var _r = function () {
        this._pt = [new N, new N], this._distance = v.NaN, this._isNull = !0
      };
      _r.prototype.getCoordinates = function () {
        return this._pt
      }, _r.prototype.getCoordinate = function (t) {
        return this._pt[t]
      }, _r.prototype.setMinimum = function () {
        if (1 === arguments.length) {
          var t = arguments[0];
          this.setMinimum(t._pt[0], t._pt[1])
        } else if (2 === arguments.length) {
          var e = arguments[0],
            n = arguments[1];
          if (this._isNull) return this.initialize(e, n), null;
          var r = e.distance(n);
          r < this._distance && this.initialize(e, n, r)
        }
      }, _r.prototype.initialize = function () {
        if (0 === arguments.length) this._isNull = !0;
        else if (2 === arguments.length) {
          var t = arguments[0],
            e = arguments[1];
          this._pt[0].setCoordinate(t), this._pt[1].setCoordinate(e), this._distance = t.distance(e), this._isNull = !1
        } else if (3 === arguments.length) {
          var n = arguments[0],
            r = arguments[1],
            i = arguments[2];
          this._pt[0].setCoordinate(n), this._pt[1].setCoordinate(r), this._distance = i, this._isNull = !1
        }
      }, _r.prototype.getDistance = function () {
        return this._distance
      }, _r.prototype.setMaximum = function () {
        if (1 === arguments.length) {
          var t = arguments[0];
          this.setMaximum(t._pt[0], t._pt[1])
        } else if (2 === arguments.length) {
          var e = arguments[0],
            n = arguments[1];
          if (this._isNull) return this.initialize(e, n), null;
          var r = e.distance(n);
          r > this._distance && this.initialize(e, n, r)
        }
      }, _r.prototype.interfaces_ = function () {
        return []
      }, _r.prototype.getClass = function () {
        return _r
      };
      var mr = function () {};
      mr.prototype.interfaces_ = function () {
        return []
      }, mr.prototype.getClass = function () {
        return mr
      }, mr.computeDistance = function () {
        if (arguments[2] instanceof _r && arguments[0] instanceof Zt && arguments[1] instanceof N)
          for (var t = arguments[0], e = arguments[1], n = arguments[2], r = t.getCoordinates(), i = new dn, o = 0; o < r.length - 1; o++) {
            i.setCoordinates(r[o], r[o + 1]);
            var s = i.closestPoint(e);
            n.setMinimum(s, e)
          } else if (arguments[2] instanceof _r && arguments[0] instanceof Qt && arguments[1] instanceof N) {
            var a = arguments[0],
              u = arguments[1],
              l = arguments[2];
            mr.computeDistance(a.getExteriorRing(), u, l);
            for (var c = 0; c < a.getNumInteriorRing(); c++) mr.computeDistance(a.getInteriorRingN(c), u, l)
          } else if (arguments[2] instanceof _r && arguments[0] instanceof ct && arguments[1] instanceof N) {
          var h = arguments[0],
            p = arguments[1],
            f = arguments[2];
          if (h instanceof Zt) mr.computeDistance(h, p, f);
          else if (h instanceof Qt) mr.computeDistance(h, p, f);
          else if (h instanceof jt)
            for (var g = h, d = 0; d < g.getNumGeometries(); d++) {
              var y = g.getGeometryN(d);
              mr.computeDistance(y, p, f)
            } else f.setMinimum(h.getCoordinate(), p)
        } else if (arguments[2] instanceof _r && arguments[0] instanceof dn && arguments[1] instanceof N) {
          var _ = arguments[0],
            m = arguments[1],
            v = arguments[2],
            x = _.closestPoint(m);
          v.setMinimum(x, m)
        }
      };
      var vr = function (t) {
          this._maxPtDist = new _r, this._inputGeom = t || null
        },
        xr = {
          MaxPointDistanceFilter: {
            configurable: !0
          },
          MaxMidpointDistanceFilter: {
            configurable: !0
          }
        };
      vr.prototype.computeMaxMidpointDistance = function (t) {
        var e = new br(this._inputGeom);
        t.apply(e), this._maxPtDist.setMaximum(e.getMaxPointDistance())
      }, vr.prototype.computeMaxVertexDistance = function (t) {
        var e = new Er(this._inputGeom);
        t.apply(e), this._maxPtDist.setMaximum(e.getMaxPointDistance())
      }, vr.prototype.findDistance = function (t) {
        return this.computeMaxVertexDistance(t), this.computeMaxMidpointDistance(t), this._maxPtDist.getDistance()
      }, vr.prototype.getDistancePoints = function () {
        return this._maxPtDist
      }, vr.prototype.interfaces_ = function () {
        return []
      }, vr.prototype.getClass = function () {
        return vr
      }, xr.MaxPointDistanceFilter.get = function () {
        return Er
      }, xr.MaxMidpointDistanceFilter.get = function () {
        return br
      }, Object.defineProperties(vr, xr);
      var Er = function (t) {
        this._maxPtDist = new _r, this._minPtDist = new _r, this._geom = t || null
      };
      Er.prototype.filter = function (t) {
        this._minPtDist.initialize(), mr.computeDistance(this._geom, t, this._minPtDist), this._maxPtDist.setMaximum(this._minPtDist)
      }, Er.prototype.getMaxPointDistance = function () {
        return this._maxPtDist
      }, Er.prototype.interfaces_ = function () {
        return [ft]
      }, Er.prototype.getClass = function () {
        return Er
      };
      var br = function (t) {
        this._maxPtDist = new _r, this._minPtDist = new _r, this._geom = t || null
      };
      br.prototype.filter = function (t, e) {
        if (0 === e) return null;
        var n = t.getCoordinate(e - 1),
          r = t.getCoordinate(e),
          i = new N((n.x + r.x) / 2, (n.y + r.y) / 2);
        this._minPtDist.initialize(), mr.computeDistance(this._geom, i, this._minPtDist), this._maxPtDist.setMaximum(this._minPtDist)
      }, br.prototype.isDone = function () {
        return !1
      }, br.prototype.isGeometryChanged = function () {
        return !1
      }, br.prototype.getMaxPointDistance = function () {
        return this._maxPtDist
      }, br.prototype.interfaces_ = function () {
        return [kt]
      }, br.prototype.getClass = function () {
        return br
      };
      var Ir = function (t) {
        this._comps = t || null
      };
      Ir.prototype.filter = function (t) {
        t instanceof Qt && this._comps.add(t)
      }, Ir.prototype.interfaces_ = function () {
        return [Bt]
      }, Ir.prototype.getClass = function () {
        return Ir
      }, Ir.getPolygons = function () {
        if (1 === arguments.length) {
          var t = arguments[0];
          return Ir.getPolygons(t, new It)
        }
        if (2 === arguments.length) {
          var e = arguments[0],
            n = arguments[1];
          return e instanceof Qt ? n.add(e) : e instanceof jt && e.apply(new Ir(n)), n
        }
      };
      var Nr = function () {
        if (this._lines = null, this._isForcedToLineString = !1, 1 === arguments.length) {
          var t = arguments[0];
          this._lines = t
        } else if (2 === arguments.length) {
          var e = arguments[0],
            n = arguments[1];
          this._lines = e, this._isForcedToLineString = n
        }
      };
      Nr.prototype.filter = function (t) {
        if (this._isForcedToLineString && t instanceof ee) {
          var e = t.getFactory().createLineString(t.getCoordinateSequence());
          return this._lines.add(e), null
        }
        t instanceof Zt && this._lines.add(t)
      }, Nr.prototype.setForceToLineString = function (t) {
        this._isForcedToLineString = t
      }, Nr.prototype.interfaces_ = function () {
        return [lt]
      }, Nr.prototype.getClass = function () {
        return Nr
      }, Nr.getGeometry = function () {
        if (1 === arguments.length) {
          var t = arguments[0];
          return t.getFactory().buildGeometry(Nr.getLines(t))
        }
        if (2 === arguments.length) {
          var e = arguments[0],
            n = arguments[1];
          return e.getFactory().buildGeometry(Nr.getLines(e, n))
        }
      }, Nr.getLines = function () {
        if (1 === arguments.length) {
          var t = arguments[0];
          return Nr.getLines(t, !1)
        }
        if (2 === arguments.length) {
          if (T(arguments[0], xt) && T(arguments[1], xt)) {
            for (var e = arguments[0], n = arguments[1], r = e.iterator(); r.hasNext();) {
              var i = r.next();
              Nr.getLines(i, n)
            }
            return n
          }
          if (arguments[0] instanceof ct && "boolean" == typeof arguments[1]) {
            var o = arguments[0],
              s = arguments[1],
              a = new It;
            return o.apply(new Nr(a, s)), a
          }
          if (arguments[0] instanceof ct && T(arguments[1], xt)) {
            var u = arguments[0],
              l = arguments[1];
            return u instanceof Zt ? l.add(u) : u.apply(new Nr(l)), l
          }
        } else if (3 === arguments.length) {
          if ("boolean" == typeof arguments[2] && T(arguments[0], xt) && T(arguments[1], xt)) {
            for (var c = arguments[0], h = arguments[1], p = arguments[2], f = c.iterator(); f.hasNext();) {
              var g = f.next();
              Nr.getLines(g, h, p)
            }
            return h
          }
          if ("boolean" == typeof arguments[2] && arguments[0] instanceof ct && T(arguments[1], xt)) {
            var d = arguments[0],
              y = arguments[1],
              _ = arguments[2];
            return d.apply(new Nr(y, _)), y
          }
        }
      };
      var wr = function () {
        if (this._boundaryRule = gt.OGC_SFS_BOUNDARY_RULE, this._isIn = null, this._numBoundaries = null, 0 === arguments.length);
        else if (1 === arguments.length) {
          var t = arguments[0];
          if (null === t) throw new m("Rule must be non-null");
          this._boundaryRule = t
        }
      };
      wr.prototype.locateInternal = function () {
        if (arguments[0] instanceof N && arguments[1] instanceof Qt) {
          var t = arguments[0],
            e = arguments[1];
          if (e.isEmpty()) return L.EXTERIOR;
          var n = e.getExteriorRing(),
            r = this.locateInPolygonRing(t, n);
          if (r === L.EXTERIOR) return L.EXTERIOR;
          if (r === L.BOUNDARY) return L.BOUNDARY;
          for (var i = 0; i < e.getNumInteriorRing(); i++) {
            var o = e.getInteriorRingN(i),
              s = this.locateInPolygonRing(t, o);
            if (s === L.INTERIOR) return L.EXTERIOR;
            if (s === L.BOUNDARY) return L.BOUNDARY
          }
          return L.INTERIOR
        }
        if (arguments[0] instanceof N && arguments[1] instanceof Zt) {
          var a = arguments[0],
            u = arguments[1];
          if (!u.getEnvelopeInternal().intersects(a)) return L.EXTERIOR;
          var l = u.getCoordinates();
          return u.isClosed() || !a.equals(l[0]) && !a.equals(l[l.length - 1]) ? at.isOnLine(a, l) ? L.INTERIOR : L.EXTERIOR : L.BOUNDARY
        }
        if (arguments[0] instanceof N && arguments[1] instanceof Jt) {
          var c = arguments[0];
          return arguments[1].getCoordinate().equals2D(c) ? L.INTERIOR : L.EXTERIOR
        }
      }, wr.prototype.locateInPolygonRing = function (t, e) {
        return e.getEnvelopeInternal().intersects(t) ? at.locatePointInRing(t, e.getCoordinates()) : L.EXTERIOR
      }, wr.prototype.intersects = function (t, e) {
        return this.locate(t, e) !== L.EXTERIOR
      }, wr.prototype.updateLocationInfo = function (t) {
        t === L.INTERIOR && (this._isIn = !0), t === L.BOUNDARY && this._numBoundaries++
      }, wr.prototype.computeLocation = function (t, e) {
        if (e instanceof Jt && this.updateLocationInfo(this.locateInternal(t, e)), e instanceof Zt) this.updateLocationInfo(this.locateInternal(t, e));
        else if (e instanceof Qt) this.updateLocationInfo(this.locateInternal(t, e));
        else if (e instanceof Vt)
          for (var n = e, r = 0; r < n.getNumGeometries(); r++) {
            var i = n.getGeometryN(r);
            this.updateLocationInfo(this.locateInternal(t, i))
          } else if (e instanceof ne)
            for (var o = e, s = 0; s < o.getNumGeometries(); s++) {
              var a = o.getGeometryN(s);
              this.updateLocationInfo(this.locateInternal(t, a))
            } else if (e instanceof jt)
              for (var u = new kn(e); u.hasNext();) {
                var l = u.next();
                l !== e && this.computeLocation(t, l)
              }
      }, wr.prototype.locate = function (t, e) {
        return e.isEmpty() ? L.EXTERIOR : e instanceof Zt || e instanceof Qt ? this.locateInternal(t, e) : (this._isIn = !1, this._numBoundaries = 0, this.computeLocation(t, e), this._boundaryRule.isInBoundary(this._numBoundaries) ? L.BOUNDARY : this._numBoundaries > 0 || this._isIn ? L.INTERIOR : L.EXTERIOR)
      }, wr.prototype.interfaces_ = function () {
        return []
      }, wr.prototype.getClass = function () {
        return wr
      };
      var Cr = function t() {
          if (this._component = null, this._segIndex = null, this._pt = null, 2 === arguments.length) {
            var e = arguments[0],
              n = arguments[1];
            t.call(this, e, t.INSIDE_AREA, n)
          } else if (3 === arguments.length) {
            var r = arguments[0],
              i = arguments[1],
              o = arguments[2];
            this._component = r, this._segIndex = i, this._pt = o
          }
        },
        Sr = {
          INSIDE_AREA: {
            configurable: !0
          }
        };
      Cr.prototype.isInsideArea = function () {
        return this._segIndex === Cr.INSIDE_AREA
      }, Cr.prototype.getCoordinate = function () {
        return this._pt
      }, Cr.prototype.getGeometryComponent = function () {
        return this._component
      }, Cr.prototype.getSegmentIndex = function () {
        return this._segIndex
      }, Cr.prototype.interfaces_ = function () {
        return []
      }, Cr.prototype.getClass = function () {
        return Cr
      }, Sr.INSIDE_AREA.get = function () {
        return -1
      }, Object.defineProperties(Cr, Sr);
      var Lr = function (t) {
        this._pts = t || null
      };
      Lr.prototype.filter = function (t) {
        t instanceof Jt && this._pts.add(t)
      }, Lr.prototype.interfaces_ = function () {
        return [Bt]
      }, Lr.prototype.getClass = function () {
        return Lr
      }, Lr.getPoints = function () {
        if (1 === arguments.length) {
          var t = arguments[0];
          return t instanceof Jt ? Qe.singletonList(t) : Lr.getPoints(t, new It)
        }
        if (2 === arguments.length) {
          var e = arguments[0],
            n = arguments[1];
          return e instanceof Jt ? n.add(e) : e instanceof jt && e.apply(new Lr(n)), n
        }
      };
      var Or = function () {
        this._locations = null;
        var t = arguments[0];
        this._locations = t
      };
      Or.prototype.filter = function (t) {
        (t instanceof Jt || t instanceof Zt || t instanceof Qt) && this._locations.add(new Cr(t, 0, t.getCoordinate()))
      }, Or.prototype.interfaces_ = function () {
        return [Bt]
      }, Or.prototype.getClass = function () {
        return Or
      }, Or.getLocations = function (t) {
        var e = new It;
        return t.apply(new Or(e)), e
      };
      var Tr = function () {
        if (this._geom = null, this._terminateDistance = 0, this._ptLocator = new wr, this._minDistanceLocation = null, this._minDistance = v.MAX_VALUE, 2 === arguments.length) {
          var t = arguments[0],
            e = arguments[1];
          this._geom = [t, e], this._terminateDistance = 0
        } else if (3 === arguments.length) {
          var n = arguments[0],
            r = arguments[1],
            i = arguments[2];
          this._geom = new Array(2).fill(null), this._geom[0] = n, this._geom[1] = r, this._terminateDistance = i
        }
      };
      Tr.prototype.computeContainmentDistance = function () {
        if (0 === arguments.length) {
          var t = new Array(2).fill(null);
          if (this.computeContainmentDistance(0, t), this._minDistance <= this._terminateDistance) return null;
          this.computeContainmentDistance(1, t)
        } else if (2 === arguments.length) {
          var e = arguments[0],
            n = arguments[1],
            r = 1 - e,
            i = Ir.getPolygons(this._geom[e]);
          if (i.size() > 0) {
            var o = Or.getLocations(this._geom[r]);
            if (this.computeContainmentDistance(o, i, n), this._minDistance <= this._terminateDistance) return this._minDistanceLocation[r] = n[0], this._minDistanceLocation[e] = n[1], null
          }
        } else if (3 === arguments.length)
          if (arguments[2] instanceof Array && T(arguments[0], bt) && T(arguments[1], bt)) {
            for (var s = arguments[0], a = arguments[1], u = arguments[2], l = 0; l < s.size(); l++)
              for (var c = s.get(l), h = 0; h < a.size(); h++)
                if (this.computeContainmentDistance(c, a.get(h), u), this._minDistance <= this._terminateDistance) return null
          } else if (arguments[2] instanceof Array && arguments[0] instanceof Cr && arguments[1] instanceof Qt) {
          var p = arguments[0],
            f = arguments[1],
            g = arguments[2],
            d = p.getCoordinate();
          if (L.EXTERIOR !== this._ptLocator.locate(d, f)) return this._minDistance = 0, g[0] = p, g[1] = new Cr(f, d), null
        }
      }, Tr.prototype.computeMinDistanceLinesPoints = function (t, e, n) {
        for (var r = 0; r < t.size(); r++)
          for (var i = t.get(r), o = 0; o < e.size(); o++) {
            var s = e.get(o);
            if (this.computeMinDistance(i, s, n), this._minDistance <= this._terminateDistance) return null
          }
      }, Tr.prototype.computeFacetDistance = function () {
        var t = new Array(2).fill(null),
          e = Nr.getLines(this._geom[0]),
          n = Nr.getLines(this._geom[1]),
          r = Lr.getPoints(this._geom[0]),
          i = Lr.getPoints(this._geom[1]);
        return this.computeMinDistanceLines(e, n, t), this.updateMinDistance(t, !1), this._minDistance <= this._terminateDistance ? null : (t[0] = null, t[1] = null, this.computeMinDistanceLinesPoints(e, i, t), this.updateMinDistance(t, !1), this._minDistance <= this._terminateDistance ? null : (t[0] = null, t[1] = null, this.computeMinDistanceLinesPoints(n, r, t), this.updateMinDistance(t, !0), this._minDistance <= this._terminateDistance ? null : (t[0] = null, t[1] = null, this.computeMinDistancePoints(r, i, t), void this.updateMinDistance(t, !1))))
      }, Tr.prototype.nearestLocations = function () {
        return this.computeMinDistance(), this._minDistanceLocation
      }, Tr.prototype.updateMinDistance = function (t, e) {
        if (null === t[0]) return null;
        e ? (this._minDistanceLocation[0] = t[1], this._minDistanceLocation[1] = t[0]) : (this._minDistanceLocation[0] = t[0], this._minDistanceLocation[1] = t[1])
      }, Tr.prototype.nearestPoints = function () {
        return this.computeMinDistance(), [this._minDistanceLocation[0].getCoordinate(), this._minDistanceLocation[1].getCoordinate()]
      }, Tr.prototype.computeMinDistance = function () {
        if (0 === arguments.length) {
          if (null !== this._minDistanceLocation) return null;
          if (this._minDistanceLocation = new Array(2).fill(null), this.computeContainmentDistance(), this._minDistance <= this._terminateDistance) return null;
          this.computeFacetDistance()
        } else if (3 === arguments.length)
          if (arguments[2] instanceof Array && arguments[0] instanceof Zt && arguments[1] instanceof Jt) {
            var t = arguments[0],
              e = arguments[1],
              n = arguments[2];
            if (t.getEnvelopeInternal().distance(e.getEnvelopeInternal()) > this._minDistance) return null;
            for (var r = t.getCoordinates(), i = e.getCoordinate(), o = 0; o < r.length - 1; o++) {
              var s = at.distancePointLine(i, r[o], r[o + 1]);
              if (s < this._minDistance) {
                this._minDistance = s;
                var a = new dn(r[o], r[o + 1]).closestPoint(i);
                n[0] = new Cr(t, o, a), n[1] = new Cr(e, 0, i)
              }
              if (this._minDistance <= this._terminateDistance) return null
            }
          } else if (arguments[2] instanceof Array && arguments[0] instanceof Zt && arguments[1] instanceof Zt) {
          var u = arguments[0],
            l = arguments[1],
            c = arguments[2];
          if (u.getEnvelopeInternal().distance(l.getEnvelopeInternal()) > this._minDistance) return null;
          for (var h = u.getCoordinates(), p = l.getCoordinates(), f = 0; f < h.length - 1; f++)
            for (var g = 0; g < p.length - 1; g++) {
              var d = at.distanceLineLine(h[f], h[f + 1], p[g], p[g + 1]);
              if (d < this._minDistance) {
                this._minDistance = d;
                var y = new dn(h[f], h[f + 1]),
                  _ = new dn(p[g], p[g + 1]),
                  m = y.closestPoints(_);
                c[0] = new Cr(u, f, m[0]), c[1] = new Cr(l, g, m[1])
              }
              if (this._minDistance <= this._terminateDistance) return null
            }
        }
      }, Tr.prototype.computeMinDistancePoints = function (t, e, n) {
        for (var r = 0; r < t.size(); r++)
          for (var i = t.get(r), o = 0; o < e.size(); o++) {
            var s = e.get(o),
              a = i.getCoordinate().distance(s.getCoordinate());
            if (a < this._minDistance && (this._minDistance = a, n[0] = new Cr(i, 0, i.getCoordinate()), n[1] = new Cr(s, 0, s.getCoordinate())), this._minDistance <= this._terminateDistance) return null
          }
      }, Tr.prototype.distance = function () {
        if (null === this._geom[0] || null === this._geom[1]) throw new m("null geometries are not supported");
        return this._geom[0].isEmpty() || this._geom[1].isEmpty() ? 0 : (this.computeMinDistance(), this._minDistance)
      }, Tr.prototype.computeMinDistanceLines = function (t, e, n) {
        for (var r = 0; r < t.size(); r++)
          for (var i = t.get(r), o = 0; o < e.size(); o++) {
            var s = e.get(o);
            if (this.computeMinDistance(i, s, n), this._minDistance <= this._terminateDistance) return null
          }
      }, Tr.prototype.interfaces_ = function () {
        return []
      }, Tr.prototype.getClass = function () {
        return Tr
      }, Tr.distance = function (t, e) {
        return new Tr(t, e).distance()
      }, Tr.isWithinDistance = function (t, e, n) {
        return new Tr(t, e, n).distance() <= n
      }, Tr.nearestPoints = function (t, e) {
        return new Tr(t, e).nearestPoints()
      };
      var Mr = function () {
        this._pt = [new N, new N], this._distance = v.NaN, this._isNull = !0
      };
      Mr.prototype.getCoordinates = function () {
        return this._pt
      }, Mr.prototype.getCoordinate = function (t) {
        return this._pt[t]
      }, Mr.prototype.setMinimum = function () {
        if (1 === arguments.length) {
          var t = arguments[0];
          this.setMinimum(t._pt[0], t._pt[1])
        } else if (2 === arguments.length) {
          var e = arguments[0],
            n = arguments[1];
          if (this._isNull) return this.initialize(e, n), null;
          var r = e.distance(n);
          r < this._distance && this.initialize(e, n, r)
        }
      }, Mr.prototype.initialize = function () {
        if (0 === arguments.length) this._isNull = !0;
        else if (2 === arguments.length) {
          var t = arguments[0],
            e = arguments[1];
          this._pt[0].setCoordinate(t), this._pt[1].setCoordinate(e), this._distance = t.distance(e), this._isNull = !1
        } else if (3 === arguments.length) {
          var n = arguments[0],
            r = arguments[1],
            i = arguments[2];
          this._pt[0].setCoordinate(n), this._pt[1].setCoordinate(r), this._distance = i, this._isNull = !1
        }
      }, Mr.prototype.toString = function () {
        return K.toLineString(this._pt[0], this._pt[1])
      }, Mr.prototype.getDistance = function () {
        return this._distance
      }, Mr.prototype.setMaximum = function () {
        if (1 === arguments.length) {
          var t = arguments[0];
          this.setMaximum(t._pt[0], t._pt[1])
        } else if (2 === arguments.length) {
          var e = arguments[0],
            n = arguments[1];
          if (this._isNull) return this.initialize(e, n), null;
          var r = e.distance(n);
          r > this._distance && this.initialize(e, n, r)
        }
      }, Mr.prototype.interfaces_ = function () {
        return []
      }, Mr.prototype.getClass = function () {
        return Mr
      };
      var Pr = function () {};
      Pr.prototype.interfaces_ = function () {
        return []
      }, Pr.prototype.getClass = function () {
        return Pr
      }, Pr.computeDistance = function () {
        if (arguments[2] instanceof Mr && arguments[0] instanceof Zt && arguments[1] instanceof N)
          for (var t = arguments[0], e = arguments[1], n = arguments[2], r = new dn, i = t.getCoordinates(), o = 0; o < i.length - 1; o++) {
            r.setCoordinates(i[o], i[o + 1]);
            var s = r.closestPoint(e);
            n.setMinimum(s, e)
          } else if (arguments[2] instanceof Mr && arguments[0] instanceof Qt && arguments[1] instanceof N) {
            var a = arguments[0],
              u = arguments[1],
              l = arguments[2];
            Pr.computeDistance(a.getExteriorRing(), u, l);
            for (var c = 0; c < a.getNumInteriorRing(); c++) Pr.computeDistance(a.getInteriorRingN(c), u, l)
          } else if (arguments[2] instanceof Mr && arguments[0] instanceof ct && arguments[1] instanceof N) {
          var h = arguments[0],
            p = arguments[1],
            f = arguments[2];
          if (h instanceof Zt) Pr.computeDistance(h, p, f);
          else if (h instanceof Qt) Pr.computeDistance(h, p, f);
          else if (h instanceof jt)
            for (var g = h, d = 0; d < g.getNumGeometries(); d++) {
              var y = g.getGeometryN(d);
              Pr.computeDistance(y, p, f)
            } else f.setMinimum(h.getCoordinate(), p)
        } else if (arguments[2] instanceof Mr && arguments[0] instanceof dn && arguments[1] instanceof N) {
          var _ = arguments[0],
            m = arguments[1],
            v = arguments[2],
            x = _.closestPoint(m);
          v.setMinimum(x, m)
        }
      };
      var Rr = function () {
          this._g0 = null, this._g1 = null, this._ptDist = new Mr, this._densifyFrac = 0;
          var t = arguments[0],
            e = arguments[1];
          this._g0 = t, this._g1 = e
        },
        Dr = {
          MaxPointDistanceFilter: {
            configurable: !0
          },
          MaxDensifiedByFractionDistanceFilter: {
            configurable: !0
          }
        };
      Rr.prototype.getCoordinates = function () {
        return this._ptDist.getCoordinates()
      }, Rr.prototype.setDensifyFraction = function (t) {
        if (t > 1 || t <= 0) throw new m("Fraction is not in range (0.0 - 1.0]");
        this._densifyFrac = t
      }, Rr.prototype.compute = function (t, e) {
        this.computeOrientedDistance(t, e, this._ptDist), this.computeOrientedDistance(e, t, this._ptDist)
      }, Rr.prototype.distance = function () {
        return this.compute(this._g0, this._g1), this._ptDist.getDistance()
      }, Rr.prototype.computeOrientedDistance = function (t, e, n) {
        var r = new Ar(e);
        if (t.apply(r), n.setMaximum(r.getMaxPointDistance()), this._densifyFrac > 0) {
          var i = new Fr(e, this._densifyFrac);
          t.apply(i), n.setMaximum(i.getMaxPointDistance())
        }
      }, Rr.prototype.orientedDistance = function () {
        return this.computeOrientedDistance(this._g0, this._g1, this._ptDist), this._ptDist.getDistance()
      }, Rr.prototype.interfaces_ = function () {
        return []
      }, Rr.prototype.getClass = function () {
        return Rr
      }, Rr.distance = function () {
        if (2 === arguments.length) {
          var t = arguments[0],
            e = arguments[1];
          return new Rr(t, e).distance()
        }
        if (3 === arguments.length) {
          var n = arguments[0],
            r = arguments[1],
            i = arguments[2],
            o = new Rr(n, r);
          return o.setDensifyFraction(i), o.distance()
        }
      }, Dr.MaxPointDistanceFilter.get = function () {
        return Ar
      }, Dr.MaxDensifiedByFractionDistanceFilter.get = function () {
        return Fr
      }, Object.defineProperties(Rr, Dr);
      var Ar = function () {
        this._maxPtDist = new Mr, this._minPtDist = new Mr, this._euclideanDist = new Pr, this._geom = null;
        var t = arguments[0];
        this._geom = t
      };
      Ar.prototype.filter = function (t) {
        this._minPtDist.initialize(), Pr.computeDistance(this._geom, t, this._minPtDist), this._maxPtDist.setMaximum(this._minPtDist)
      }, Ar.prototype.getMaxPointDistance = function () {
        return this._maxPtDist
      }, Ar.prototype.interfaces_ = function () {
        return [ft]
      }, Ar.prototype.getClass = function () {
        return Ar
      };
      var Fr = function () {
        this._maxPtDist = new Mr, this._minPtDist = new Mr, this._geom = null, this._numSubSegs = 0;
        var t = arguments[0],
          e = arguments[1];
        this._geom = t, this._numSubSegs = Math.trunc(Math.round(1 / e))
      };
      Fr.prototype.filter = function (t, e) {
        if (0 === e) return null;
        for (var n = t.getCoordinate(e - 1), r = t.getCoordinate(e), i = (r.x - n.x) / this._numSubSegs, o = (r.y - n.y) / this._numSubSegs, s = 0; s < this._numSubSegs; s++) {
          var a = n.x + s * i,
            u = n.y + s * o,
            l = new N(a, u);
          this._minPtDist.initialize(), Pr.computeDistance(this._geom, l, this._minPtDist), this._maxPtDist.setMaximum(this._minPtDist)
        }
      }, Fr.prototype.isDone = function () {
        return !1
      }, Fr.prototype.isGeometryChanged = function () {
        return !1
      }, Fr.prototype.getMaxPointDistance = function () {
        return this._maxPtDist
      }, Fr.prototype.interfaces_ = function () {
        return [kt]
      }, Fr.prototype.getClass = function () {
        return Fr
      };
      var Gr = function (t, e, n) {
          this._minValidDistance = null, this._maxValidDistance = null, this._minDistanceFound = null, this._maxDistanceFound = null, this._isValid = !0, this._errMsg = null, this._errorLocation = null, this._errorIndicator = null, this._input = t || null, this._bufDistance = e || null, this._result = n || null
        },
        zr = {
          VERBOSE: {
            configurable: !0
          },
          MAX_DISTANCE_DIFF_FRAC: {
            configurable: !0
          }
        };
      Gr.prototype.checkMaximumDistance = function (t, e, n) {
        var r = new Rr(e, t);
        if (r.setDensifyFraction(.25), this._maxDistanceFound = r.orientedDistance(), this._maxDistanceFound > n) {
          this._isValid = !1;
          var i = r.getCoordinates();
          this._errorLocation = i[1], this._errorIndicator = t.getFactory().createLineString(i), this._errMsg = "Distance between buffer curve and input is too large (" + this._maxDistanceFound + " at " + K.toLineString(i[0], i[1]) + ")"
        }
      }, Gr.prototype.isValid = function () {
        var t = Math.abs(this._bufDistance),
          e = Gr.MAX_DISTANCE_DIFF_FRAC * t;
        return this._minValidDistance = t - e, this._maxValidDistance = t + e, !(!this._input.isEmpty() && !this._result.isEmpty()) || (this._bufDistance > 0 ? this.checkPositiveValid() : this.checkNegativeValid(), Gr.VERBOSE && U.out.println("Min Dist= " + this._minDistanceFound + "  err= " + (1 - this._minDistanceFound / this._bufDistance) + "  Max Dist= " + this._maxDistanceFound + "  err= " + (this._maxDistanceFound / this._bufDistance - 1)), this._isValid)
      }, Gr.prototype.checkNegativeValid = function () {
        if (!(this._input instanceof Qt || this._input instanceof ne || this._input instanceof jt)) return null;
        var t = this.getPolygonLines(this._input);
        if (this.checkMinimumDistance(t, this._result, this._minValidDistance), !this._isValid) return null;
        this.checkMaximumDistance(t, this._result, this._maxValidDistance)
      }, Gr.prototype.getErrorIndicator = function () {
        return this._errorIndicator
      }, Gr.prototype.checkMinimumDistance = function (t, e, n) {
        var r = new Tr(t, e, n);
        if (this._minDistanceFound = r.distance(), this._minDistanceFound < n) {
          this._isValid = !1;
          var i = r.nearestPoints();
          this._errorLocation = r.nearestPoints()[1], this._errorIndicator = t.getFactory().createLineString(i), this._errMsg = "Distance between buffer curve and input is too small (" + this._minDistanceFound + " at " + K.toLineString(i[0], i[1]) + " )"
        }
      }, Gr.prototype.checkPositiveValid = function () {
        var t = this._result.getBoundary();
        if (this.checkMinimumDistance(this._input, t, this._minValidDistance), !this._isValid) return null;
        this.checkMaximumDistance(this._input, t, this._maxValidDistance)
      }, Gr.prototype.getErrorLocation = function () {
        return this._errorLocation
      }, Gr.prototype.getPolygonLines = function (t) {
        for (var e = new It, n = new Nr(e), r = Ir.getPolygons(t).iterator(); r.hasNext();) r.next().apply(n);
        return t.getFactory().buildGeometry(e)
      }, Gr.prototype.getErrorMessage = function () {
        return this._errMsg
      }, Gr.prototype.interfaces_ = function () {
        return []
      }, Gr.prototype.getClass = function () {
        return Gr
      }, zr.VERBOSE.get = function () {
        return !1
      }, zr.MAX_DISTANCE_DIFF_FRAC.get = function () {
        return .012
      }, Object.defineProperties(Gr, zr);
      var qr = function (t, e, n) {
          this._isValid = !0, this._errorMsg = null, this._errorLocation = null, this._errorIndicator = null, this._input = t || null, this._distance = e || null, this._result = n || null
        },
        Br = {
          VERBOSE: {
            configurable: !0
          },
          MAX_ENV_DIFF_FRAC: {
            configurable: !0
          }
        };
      qr.prototype.isValid = function () {
        return this.checkPolygonal(), this._isValid ? (this.checkExpectedEmpty(), this._isValid ? (this.checkEnvelope(), this._isValid ? (this.checkArea(), this._isValid ? (this.checkDistance(), this._isValid) : this._isValid) : this._isValid) : this._isValid) : this._isValid
      }, qr.prototype.checkEnvelope = function () {
        if (this._distance < 0) return null;
        var t = this._distance * qr.MAX_ENV_DIFF_FRAC;
        0 === t && (t = .001);
        var e = new Y(this._input.getEnvelopeInternal());
        e.expandBy(this._distance);
        var n = new Y(this._result.getEnvelopeInternal());
        n.expandBy(t), n.contains(e) || (this._isValid = !1, this._errorMsg = "Buffer envelope is incorrect", this._errorIndicator = this._input.getFactory().toGeometry(n)), this.report("Envelope")
      }, qr.prototype.checkDistance = function () {
        var t = new Gr(this._input, this._distance, this._result);
        t.isValid() || (this._isValid = !1, this._errorMsg = t.getErrorMessage(), this._errorLocation = t.getErrorLocation(), this._errorIndicator = t.getErrorIndicator()), this.report("Distance")
      }, qr.prototype.checkArea = function () {
        var t = this._input.getArea(),
          e = this._result.getArea();
        this._distance > 0 && t > e && (this._isValid = !1, this._errorMsg = "Area of positive buffer is smaller than input", this._errorIndicator = this._result), this._distance < 0 && t < e && (this._isValid = !1, this._errorMsg = "Area of negative buffer is larger than input", this._errorIndicator = this._result), this.report("Area")
      }, qr.prototype.checkPolygonal = function () {
        this._result instanceof Qt || this._result instanceof ne || (this._isValid = !1), this._errorMsg = "Result is not polygonal", this._errorIndicator = this._result, this.report("Polygonal")
      }, qr.prototype.getErrorIndicator = function () {
        return this._errorIndicator
      }, qr.prototype.getErrorLocation = function () {
        return this._errorLocation
      }, qr.prototype.checkExpectedEmpty = function () {
        return this._input.getDimension() >= 2 || this._distance > 0 ? null : (this._result.isEmpty() || (this._isValid = !1, this._errorMsg = "Result is non-empty", this._errorIndicator = this._result), void this.report("ExpectedEmpty"))
      }, qr.prototype.report = function (t) {
        if (!qr.VERBOSE) return null;
        U.out.println("Check " + t + ": " + (this._isValid ? "passed" : "FAILED"))
      }, qr.prototype.getErrorMessage = function () {
        return this._errorMsg
      }, qr.prototype.interfaces_ = function () {
        return []
      }, qr.prototype.getClass = function () {
        return qr
      }, qr.isValidMsg = function (t, e, n) {
        var r = new qr(t, e, n);
        return r.isValid() ? null : r.getErrorMessage()
      }, qr.isValid = function (t, e, n) {
        return !!new qr(t, e, n).isValid()
      }, Br.VERBOSE.get = function () {
        return !1
      }, Br.MAX_ENV_DIFF_FRAC.get = function () {
        return .012
      }, Object.defineProperties(qr, Br);
      var kr = function () {
        this._pts = null, this._data = null;
        var t = arguments[0],
          e = arguments[1];
        this._pts = t, this._data = e
      };
      kr.prototype.getCoordinates = function () {
        return this._pts
      }, kr.prototype.size = function () {
        return this._pts.length
      }, kr.prototype.getCoordinate = function (t) {
        return this._pts[t]
      }, kr.prototype.isClosed = function () {
        return this._pts[0].equals(this._pts[this._pts.length - 1])
      }, kr.prototype.getSegmentOctant = function (t) {
        return t === this._pts.length - 1 ? -1 : hn.octant(this.getCoordinate(t), this.getCoordinate(t + 1))
      }, kr.prototype.setData = function (t) {
        this._data = t
      }, kr.prototype.getData = function () {
        return this._data
      }, kr.prototype.toString = function () {
        return K.toLineString(new ue(this._pts))
      }, kr.prototype.interfaces_ = function () {
        return [pn]
      }, kr.prototype.getClass = function () {
        return kr
      };
      var jr = function () {
        this._findAllIntersections = !1, this._isCheckEndSegmentsOnly = !1, this._li = null, this._interiorIntersection = null, this._intSegments = null, this._intersections = new It, this._intersectionCount = 0, this._keepIntersections = !0;
        var t = arguments[0];
        this._li = t, this._interiorIntersection = null
      };
      jr.prototype.getInteriorIntersection = function () {
        return this._interiorIntersection
      }, jr.prototype.setCheckEndSegmentsOnly = function (t) {
        this._isCheckEndSegmentsOnly = t
      }, jr.prototype.getIntersectionSegments = function () {
        return this._intSegments
      }, jr.prototype.count = function () {
        return this._intersectionCount
      }, jr.prototype.getIntersections = function () {
        return this._intersections
      }, jr.prototype.setFindAllIntersections = function (t) {
        this._findAllIntersections = t
      }, jr.prototype.setKeepIntersections = function (t) {
        this._keepIntersections = t
      }, jr.prototype.processIntersections = function (t, e, n, r) {
        if (!this._findAllIntersections && this.hasIntersection()) return null;
        if (t === n && e === r) return null;
        if (this._isCheckEndSegmentsOnly && !this.isEndSegment(t, e) && !this.isEndSegment(n, r)) return null;
        var i = t.getCoordinates()[e],
          o = t.getCoordinates()[e + 1],
          s = n.getCoordinates()[r],
          a = n.getCoordinates()[r + 1];
        this._li.computeIntersection(i, o, s, a), this._li.hasIntersection() && this._li.isInteriorIntersection() && (this._intSegments = new Array(4).fill(null), this._intSegments[0] = i, this._intSegments[1] = o, this._intSegments[2] = s, this._intSegments[3] = a, this._interiorIntersection = this._li.getIntersection(0), this._keepIntersections && this._intersections.add(this._interiorIntersection), this._intersectionCount++)
      }, jr.prototype.isEndSegment = function (t, e) {
        return 0 === e || e >= t.size() - 2
      }, jr.prototype.hasIntersection = function () {
        return null !== this._interiorIntersection
      }, jr.prototype.isDone = function () {
        return !this._findAllIntersections && null !== this._interiorIntersection
      }, jr.prototype.interfaces_ = function () {
        return [Wn]
      }, jr.prototype.getClass = function () {
        return jr
      }, jr.createAllIntersectionsFinder = function (t) {
        var e = new jr(t);
        return e.setFindAllIntersections(!0), e
      }, jr.createAnyIntersectionFinder = function (t) {
        return new jr(t)
      }, jr.createIntersectionCounter = function (t) {
        var e = new jr(t);
        return e.setFindAllIntersections(!0), e.setKeepIntersections(!1), e
      };
      var Vr = function () {
        this._li = new it, this._segStrings = null, this._findAllIntersections = !1, this._segInt = null, this._isValid = !0;
        var t = arguments[0];
        this._segStrings = t
      };
      Vr.prototype.execute = function () {
        if (null !== this._segInt) return null;
        this.checkInteriorIntersections()
      }, Vr.prototype.getIntersections = function () {
        return this._segInt.getIntersections()
      }, Vr.prototype.isValid = function () {
        return this.execute(), this._isValid
      }, Vr.prototype.setFindAllIntersections = function (t) {
        this._findAllIntersections = t
      }, Vr.prototype.checkInteriorIntersections = function () {
        this._isValid = !0, this._segInt = new jr(this._li), this._segInt.setFindAllIntersections(this._findAllIntersections);
        var t = new bn;
        if (t.setSegmentIntersector(this._segInt), t.computeNodes(this._segStrings), this._segInt.hasIntersection()) return this._isValid = !1, null
      }, Vr.prototype.checkValid = function () {
        if (this.execute(), !this._isValid) throw new Le(this.getErrorMessage(), this._segInt.getInteriorIntersection())
      }, Vr.prototype.getErrorMessage = function () {
        if (this._isValid) return "no intersections found";
        var t = this._segInt.getIntersectionSegments();
        return "found non-noded intersection between " + K.toLineString(t[0], t[1]) + " and " + K.toLineString(t[2], t[3])
      }, Vr.prototype.interfaces_ = function () {
        return []
      }, Vr.prototype.getClass = function () {
        return Vr
      }, Vr.computeIntersections = function (t) {
        var e = new Vr(t);
        return e.setFindAllIntersections(!0), e.isValid(), e.getIntersections()
      };
      var Ur = function t() {
        this._nv = null;
        var e = arguments[0];
        this._nv = new Vr(t.toSegmentStrings(e))
      };
      Ur.prototype.checkValid = function () {
        this._nv.checkValid()
      }, Ur.prototype.interfaces_ = function () {
        return []
      }, Ur.prototype.getClass = function () {
        return Ur
      }, Ur.toSegmentStrings = function (t) {
        for (var e = new It, n = t.iterator(); n.hasNext();) {
          var r = n.next();
          e.add(new kr(r.getCoordinates(), r))
        }
        return e
      }, Ur.checkValid = function (t) {
        new Ur(t).checkValid()
      };
      var Xr = function (t) {
        this._mapOp = t
      };
      Xr.prototype.map = function (t) {
        for (var e = new It, n = 0; n < t.getNumGeometries(); n++) {
          var r = this._mapOp.map(t.getGeometryN(n));
          r.isEmpty() || e.add(r)
        }
        return t.getFactory().createGeometryCollection(_e.toGeometryArray(e))
      }, Xr.prototype.interfaces_ = function () {
        return []
      }, Xr.prototype.getClass = function () {
        return Xr
      }, Xr.map = function (t, e) {
        return new Xr(e).map(t)
      };
      var Yr = function () {
        this._op = null, this._geometryFactory = null, this._ptLocator = null, this._lineEdgesList = new It, this._resultLineList = new It;
        var t = arguments[0],
          e = arguments[1],
          n = arguments[2];
        this._op = t, this._geometryFactory = e, this._ptLocator = n
      };
      Yr.prototype.collectLines = function (t) {
        for (var e = this._op.getGraph().getEdgeEnds().iterator(); e.hasNext();) {
          var n = e.next();
          this.collectLineEdge(n, t, this._lineEdgesList), this.collectBoundaryTouchEdge(n, t, this._lineEdgesList)
        }
      }, Yr.prototype.labelIsolatedLine = function (t, e) {
        var n = this._ptLocator.locate(t.getCoordinate(), this._op.getArgGeometry(e));
        t.getLabel().setLocation(e, n)
      }, Yr.prototype.build = function (t) {
        return this.findCoveredLineEdges(), this.collectLines(t), this.buildLines(t), this._resultLineList
      }, Yr.prototype.collectLineEdge = function (t, e, n) {
        var r = t.getLabel(),
          i = t.getEdge();
        t.isLineEdge() && (t.isVisited() || !Ci.isResultOfOp(r, e) || i.isCovered() || (n.add(i), t.setVisitedEdge(!0)))
      }, Yr.prototype.findCoveredLineEdges = function () {
        for (var t = this._op.getGraph().getNodes().iterator(); t.hasNext();) t.next().getEdges().findCoveredLineEdges();
        for (var e = this._op.getGraph().getEdgeEnds().iterator(); e.hasNext();) {
          var n = e.next(),
            r = n.getEdge();
          if (n.isLineEdge() && !r.isCoveredSet()) {
            var i = this._op.isCoveredByA(n.getCoordinate());
            r.setCovered(i)
          }
        }
      }, Yr.prototype.labelIsolatedLines = function (t) {
        for (var e = t.iterator(); e.hasNext();) {
          var n = e.next(),
            r = n.getLabel();
          n.isIsolated() && (r.isNull(0) ? this.labelIsolatedLine(n, 0) : this.labelIsolatedLine(n, 1))
        }
      }, Yr.prototype.buildLines = function (t) {
        for (var e = this._lineEdgesList.iterator(); e.hasNext();) {
          var n = e.next(),
            r = this._geometryFactory.createLineString(n.getCoordinates());
          this._resultLineList.add(r), n.setInResult(!0)
        }
      }, Yr.prototype.collectBoundaryTouchEdge = function (t, e, n) {
        var r = t.getLabel();
        return t.isLineEdge() || t.isVisited() || t.isInteriorAreaEdge() || t.getEdge().isInResult() ? null : (et.isTrue(!(t.isInResult() || t.getSym().isInResult()) || !t.getEdge().isInResult()), void(Ci.isResultOfOp(r, e) && e === Ci.INTERSECTION && (n.add(t.getEdge()), t.setVisitedEdge(!0))))
      }, Yr.prototype.interfaces_ = function () {
        return []
      }, Yr.prototype.getClass = function () {
        return Yr
      };
      var Hr = function () {
        this._op = null, this._geometryFactory = null, this._resultPointList = new It;
        var t = arguments[0],
          e = arguments[1];
        this._op = t, this._geometryFactory = e
      };
      Hr.prototype.filterCoveredNodeToPoint = function (t) {
        var e = t.getCoordinate();
        if (!this._op.isCoveredByLA(e)) {
          var n = this._geometryFactory.createPoint(e);
          this._resultPointList.add(n)
        }
      }, Hr.prototype.extractNonCoveredResultNodes = function (t) {
        for (var e = this._op.getGraph().getNodes().iterator(); e.hasNext();) {
          var n = e.next();
          if (!(n.isInResult() || n.isIncidentEdgeInResult() || 0 !== n.getEdges().getDegree() && t !== Ci.INTERSECTION)) {
            var r = n.getLabel();
            Ci.isResultOfOp(r, t) && this.filterCoveredNodeToPoint(n)
          }
        }
      }, Hr.prototype.build = function (t) {
        return this.extractNonCoveredResultNodes(t), this._resultPointList
      }, Hr.prototype.interfaces_ = function () {
        return []
      }, Hr.prototype.getClass = function () {
        return Hr
      };
      var Wr = function () {
        this._inputGeom = null, this._factory = null, this._pruneEmptyGeometry = !0, this._preserveGeometryCollectionType = !0, this._preserveCollections = !1, this._preserveType = !1
      };
      Wr.prototype.transformPoint = function (t, e) {
        return this._factory.createPoint(this.transformCoordinates(t.getCoordinateSequence(), t))
      }, Wr.prototype.transformPolygon = function (t, e) {
        var n = !0,
          r = this.transformLinearRing(t.getExteriorRing(), t);
        null !== r && r instanceof ee && !r.isEmpty() || (n = !1);
        for (var i = new It, o = 0; o < t.getNumInteriorRing(); o++) {
          var s = this.transformLinearRing(t.getInteriorRingN(o), t);
          null === s || s.isEmpty() || (s instanceof ee || (n = !1), i.add(s))
        }
        if (n) return this._factory.createPolygon(r, i.toArray([]));
        var a = new It;
        return null !== r && a.add(r), a.addAll(i), this._factory.buildGeometry(a)
      }, Wr.prototype.createCoordinateSequence = function (t) {
        return this._factory.getCoordinateSequenceFactory().create(t)
      }, Wr.prototype.getInputGeometry = function () {
        return this._inputGeom
      }, Wr.prototype.transformMultiLineString = function (t, e) {
        for (var n = new It, r = 0; r < t.getNumGeometries(); r++) {
          var i = this.transformLineString(t.getGeometryN(r), t);
          null !== i && (i.isEmpty() || n.add(i))
        }
        return this._factory.buildGeometry(n)
      }, Wr.prototype.transformCoordinates = function (t, e) {
        return this.copy(t)
      }, Wr.prototype.transformLineString = function (t, e) {
        return this._factory.createLineString(this.transformCoordinates(t.getCoordinateSequence(), t))
      }, Wr.prototype.transformMultiPoint = function (t, e) {
        for (var n = new It, r = 0; r < t.getNumGeometries(); r++) {
          var i = this.transformPoint(t.getGeometryN(r), t);
          null !== i && (i.isEmpty() || n.add(i))
        }
        return this._factory.buildGeometry(n)
      }, Wr.prototype.transformMultiPolygon = function (t, e) {
        for (var n = new It, r = 0; r < t.getNumGeometries(); r++) {
          var i = this.transformPolygon(t.getGeometryN(r), t);
          null !== i && (i.isEmpty() || n.add(i))
        }
        return this._factory.buildGeometry(n)
      }, Wr.prototype.copy = function (t) {
        return t.copy()
      }, Wr.prototype.transformGeometryCollection = function (t, e) {
        for (var n = new It, r = 0; r < t.getNumGeometries(); r++) {
          var i = this.transform(t.getGeometryN(r));
          null !== i && (this._pruneEmptyGeometry && i.isEmpty() || n.add(i))
        }
        return this._preserveGeometryCollectionType ? this._factory.createGeometryCollection(_e.toGeometryArray(n)) : this._factory.buildGeometry(n)
      }, Wr.prototype.transform = function (t) {
        if (this._inputGeom = t, this._factory = t.getFactory(), t instanceof Jt) return this.transformPoint(t, null);
        if (t instanceof te) return this.transformMultiPoint(t, null);
        if (t instanceof ee) return this.transformLinearRing(t, null);
        if (t instanceof Zt) return this.transformLineString(t, null);
        if (t instanceof Vt) return this.transformMultiLineString(t, null);
        if (t instanceof Qt) return this.transformPolygon(t, null);
        if (t instanceof ne) return this.transformMultiPolygon(t, null);
        if (t instanceof jt) return this.transformGeometryCollection(t, null);
        throw new m("Unknown Geometry subtype: " + t.getClass().getName())
      }, Wr.prototype.transformLinearRing = function (t, e) {
        var n = this.transformCoordinates(t.getCoordinateSequence(), t);
        if (null === n) return this._factory.createLinearRing(null);
        var r = n.size();
        return r > 0 && r < 4 && !this._preserveType ? this._factory.createLineString(n) : this._factory.createLinearRing(n)
      }, Wr.prototype.interfaces_ = function () {
        return []
      }, Wr.prototype.getClass = function () {
        return Wr
      };
      var Zr = function t() {
        if (this._snapTolerance = 0, this._srcPts = null, this._seg = new dn, this._allowSnappingToSourceVertices = !1, this._isClosed = !1, arguments[0] instanceof Zt && "number" == typeof arguments[1]) {
          var e = arguments[0],
            n = arguments[1];
          t.call(this, e.getCoordinates(), n)
        } else if (arguments[0] instanceof Array && "number" == typeof arguments[1]) {
          var r = arguments[0],
            i = arguments[1];
          this._srcPts = r, this._isClosed = t.isClosed(r), this._snapTolerance = i
        }
      };
      Zr.prototype.snapVertices = function (t, e) {
        for (var n = this._isClosed ? t.size() - 1 : t.size(), r = 0; r < n; r++) {
          var i = t.get(r),
            o = this.findSnapForVertex(i, e);
          null !== o && (t.set(r, new N(o)), 0 === r && this._isClosed && t.set(t.size() - 1, new N(o)))
        }
      }, Zr.prototype.findSnapForVertex = function (t, e) {
        for (var n = 0; n < e.length; n++) {
          if (t.equals2D(e[n])) return null;
          if (t.distance(e[n]) < this._snapTolerance) return e[n]
        }
        return null
      }, Zr.prototype.snapTo = function (t) {
        var e = new wt(this._srcPts);
        return this.snapVertices(e, t), this.snapSegments(e, t), e.toCoordinateArray()
      }, Zr.prototype.snapSegments = function (t, e) {
        if (0 === e.length) return null;
        var n = e.length;
        e[0].equals2D(e[e.length - 1]) && (n = e.length - 1);
        for (var r = 0; r < n; r++) {
          var i = e[r],
            o = this.findSegmentIndexToSnap(i, t);
          o >= 0 && t.add(o + 1, new N(i), !1)
        }
      }, Zr.prototype.findSegmentIndexToSnap = function (t, e) {
        for (var n = v.MAX_VALUE, r = -1, i = 0; i < e.size() - 1; i++) {
          if (this._seg.p0 = e.get(i), this._seg.p1 = e.get(i + 1), this._seg.p0.equals2D(t) || this._seg.p1.equals2D(t)) {
            if (this._allowSnappingToSourceVertices) continue;
            return -1
          }
          var o = this._seg.distance(t);
          o < this._snapTolerance && o < n && (n = o, r = i)
        }
        return r
      }, Zr.prototype.setAllowSnappingToSourceVertices = function (t) {
        this._allowSnappingToSourceVertices = t
      }, Zr.prototype.interfaces_ = function () {
        return []
      }, Zr.prototype.getClass = function () {
        return Zr
      }, Zr.isClosed = function (t) {
        return !(t.length <= 1) && t[0].equals2D(t[t.length - 1])
      };
      var $r = function (t) {
          this._srcGeom = t || null
        },
        Jr = {
          SNAP_PRECISION_FACTOR: {
            configurable: !0
          }
        };
      $r.prototype.snapTo = function (t, e) {
        var n = this.extractTargetCoordinates(t);
        return new Kr(e, n).transform(this._srcGeom)
      }, $r.prototype.snapToSelf = function (t, e) {
        var n = this.extractTargetCoordinates(this._srcGeom),
          r = new Kr(t, n, !0).transform(this._srcGeom),
          i = r;
        return e && T(i, Kt) && (i = r.buffer(0)), i
      }, $r.prototype.computeSnapTolerance = function (t) {
        return this.computeMinimumSegmentLength(t) / 10
      }, $r.prototype.extractTargetCoordinates = function (t) {
        for (var e = new f, n = t.getCoordinates(), r = 0; r < n.length; r++) e.add(n[r]);
        return e.toArray(new Array(0).fill(null))
      }, $r.prototype.computeMinimumSegmentLength = function (t) {
        for (var e = v.MAX_VALUE, n = 0; n < t.length - 1; n++) {
          var r = t[n].distance(t[n + 1]);
          r < e && (e = r)
        }
        return e
      }, $r.prototype.interfaces_ = function () {
        return []
      }, $r.prototype.getClass = function () {
        return $r
      }, $r.snap = function (t, e, n) {
        var r = new Array(2).fill(null),
          i = new $r(t);
        r[0] = i.snapTo(e, n);
        var o = new $r(e);
        return r[1] = o.snapTo(r[0], n), r
      }, $r.computeOverlaySnapTolerance = function () {
        if (1 === arguments.length) {
          var t = arguments[0],
            e = $r.computeSizeBasedSnapTolerance(t),
            n = t.getPrecisionModel();
          if (n.getType() === fe.FIXED) {
            var r = 1 / n.getScale() * 2 / 1.415;
            r > e && (e = r)
          }
          return e
        }
        if (2 === arguments.length) {
          var i = arguments[0],
            o = arguments[1];
          return Math.min($r.computeOverlaySnapTolerance(i), $r.computeOverlaySnapTolerance(o))
        }
      }, $r.computeSizeBasedSnapTolerance = function (t) {
        var e = t.getEnvelopeInternal();
        return Math.min(e.getHeight(), e.getWidth()) * $r.SNAP_PRECISION_FACTOR
      }, $r.snapToSelf = function (t, e, n) {
        return new $r(t).snapToSelf(e, n)
      }, Jr.SNAP_PRECISION_FACTOR.get = function () {
        return 1e-9
      }, Object.defineProperties($r, Jr);
      var Kr = function (t) {
          function e(e, n, r) {
            t.call(this), this._snapTolerance = e || null, this._snapPts = n || null, this._isSelfSnap = void 0 !== r && r
          }
          return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.snapLine = function (t, e) {
            var n = new Zr(t, this._snapTolerance);
            return n.setAllowSnappingToSourceVertices(this._isSelfSnap), n.snapTo(e)
          }, e.prototype.transformCoordinates = function (t, e) {
            var n = t.toCoordinateArray(),
              r = this.snapLine(n, this._snapPts);
            return this._factory.getCoordinateSequenceFactory().create(r)
          }, e.prototype.interfaces_ = function () {
            return []
          }, e.prototype.getClass = function () {
            return e
          }, e
        }(Wr),
        Qr = function () {
          this._isFirst = !0, this._commonMantissaBitsCount = 53, this._commonBits = 0, this._commonSignExp = null
        };
      Qr.prototype.getCommon = function () {
        return v.longBitsToDouble(this._commonBits)
      }, Qr.prototype.add = function (t) {
        var e = v.doubleToLongBits(t);
        return this._isFirst ? (this._commonBits = e, this._commonSignExp = Qr.signExpBits(this._commonBits), this._isFirst = !1, null) : Qr.signExpBits(e) !== this._commonSignExp ? (this._commonBits = 0, null) : (this._commonMantissaBitsCount = Qr.numCommonMostSigMantissaBits(this._commonBits, e), void(this._commonBits = Qr.zeroLowerBits(this._commonBits, 64 - (12 + this._commonMantissaBitsCount))))
      }, Qr.prototype.toString = function () {
        if (1 === arguments.length) {
          var t = arguments[0],
            e = v.longBitsToDouble(t),
            n = "0000000000000000000000000000000000000000000000000000000000000000" + v.toBinaryString(t),
            r = n.substring(n.length - 64);
          return r.substring(0, 1) + "  " + r.substring(1, 12) + "(exp) " + r.substring(12) + " [ " + e + " ]"
        }
      }, Qr.prototype.interfaces_ = function () {
        return []
      }, Qr.prototype.getClass = function () {
        return Qr
      }, Qr.getBit = function (t, e) {
        return 0 != (t & 1 << e) ? 1 : 0
      }, Qr.signExpBits = function (t) {
        return t >> 52
      }, Qr.zeroLowerBits = function (t, e) {
        return t & ~((1 << e) - 1)
      }, Qr.numCommonMostSigMantissaBits = function (t, e) {
        for (var n = 0, r = 52; r >= 0; r--) {
          if (Qr.getBit(t, r) !== Qr.getBit(e, r)) return n;
          n++
        }
        return 52
      };
      var ti = function () {
          this._commonCoord = null, this._ccFilter = new ni
        },
        ei = {
          CommonCoordinateFilter: {
            configurable: !0
          },
          Translater: {
            configurable: !0
          }
        };
      ti.prototype.addCommonBits = function (t) {
        var e = new ri(this._commonCoord);
        t.apply(e), t.geometryChanged()
      }, ti.prototype.removeCommonBits = function (t) {
        if (0 === this._commonCoord.x && 0 === this._commonCoord.y) return t;
        var e = new N(this._commonCoord);
        e.x = -e.x, e.y = -e.y;
        var n = new ri(e);
        return t.apply(n), t.geometryChanged(), t
      }, ti.prototype.getCommonCoordinate = function () {
        return this._commonCoord
      }, ti.prototype.add = function (t) {
        t.apply(this._ccFilter), this._commonCoord = this._ccFilter.getCommonCoordinate()
      }, ti.prototype.interfaces_ = function () {
        return []
      }, ti.prototype.getClass = function () {
        return ti
      }, ei.CommonCoordinateFilter.get = function () {
        return ni
      }, ei.Translater.get = function () {
        return ri
      }, Object.defineProperties(ti, ei);
      var ni = function () {
        this._commonBitsX = new Qr, this._commonBitsY = new Qr
      };
      ni.prototype.filter = function (t) {
        this._commonBitsX.add(t.x), this._commonBitsY.add(t.y)
      }, ni.prototype.getCommonCoordinate = function () {
        return new N(this._commonBitsX.getCommon(), this._commonBitsY.getCommon())
      }, ni.prototype.interfaces_ = function () {
        return [ft]
      }, ni.prototype.getClass = function () {
        return ni
      };
      var ri = function () {
        this.trans = null;
        var t = arguments[0];
        this.trans = t
      };
      ri.prototype.filter = function (t, e) {
        var n = t.getOrdinate(e, 0) + this.trans.x,
          r = t.getOrdinate(e, 1) + this.trans.y;
        t.setOrdinate(e, 0, n), t.setOrdinate(e, 1, r)
      }, ri.prototype.isDone = function () {
        return !1
      }, ri.prototype.isGeometryChanged = function () {
        return !0
      }, ri.prototype.interfaces_ = function () {
        return [kt]
      }, ri.prototype.getClass = function () {
        return ri
      };
      var ii = function (t, e) {
        this._geom = new Array(2).fill(null), this._snapTolerance = null, this._cbr = null, this._geom[0] = t, this._geom[1] = e, this.computeSnapTolerance()
      };
      ii.prototype.selfSnap = function (t) {
        return new $r(t).snapTo(t, this._snapTolerance)
      }, ii.prototype.removeCommonBits = function (t) {
        this._cbr = new ti, this._cbr.add(t[0]), this._cbr.add(t[1]);
        var e = new Array(2).fill(null);
        return e[0] = this._cbr.removeCommonBits(t[0].copy()), e[1] = this._cbr.removeCommonBits(t[1].copy()), e
      }, ii.prototype.prepareResult = function (t) {
        return this._cbr.addCommonBits(t), t
      }, ii.prototype.getResultGeometry = function (t) {
        var e = this.snap(this._geom),
          n = Ci.overlayOp(e[0], e[1], t);
        return this.prepareResult(n)
      }, ii.prototype.checkValid = function (t) {
        t.isValid() || U.out.println("Snapped geometry is invalid")
      }, ii.prototype.computeSnapTolerance = function () {
        this._snapTolerance = $r.computeOverlaySnapTolerance(this._geom[0], this._geom[1])
      }, ii.prototype.snap = function (t) {
        var e = this.removeCommonBits(t);
        return $r.snap(e[0], e[1], this._snapTolerance)
      }, ii.prototype.interfaces_ = function () {
        return []
      }, ii.prototype.getClass = function () {
        return ii
      }, ii.overlayOp = function (t, e, n) {
        return new ii(t, e).getResultGeometry(n)
      }, ii.union = function (t, e) {
        return ii.overlayOp(t, e, Ci.UNION)
      }, ii.intersection = function (t, e) {
        return ii.overlayOp(t, e, Ci.INTERSECTION)
      }, ii.symDifference = function (t, e) {
        return ii.overlayOp(t, e, Ci.SYMDIFFERENCE)
      }, ii.difference = function (t, e) {
        return ii.overlayOp(t, e, Ci.DIFFERENCE)
      };
      var oi = function (t, e) {
        this._geom = new Array(2).fill(null), this._geom[0] = t, this._geom[1] = e
      };
      oi.prototype.getResultGeometry = function (t) {
        var e = null,
          n = !1,
          r = null;
        try {
          e = Ci.overlayOp(this._geom[0], this._geom[1], t), n = !0
        } catch (t) {
          if (!(t instanceof Q)) throw t;
          r = t
        }
        if (!n) try {
          e = ii.overlayOp(this._geom[0], this._geom[1], t)
        } catch (t) {
          throw t instanceof Q ? r : t
        }
        return e
      }, oi.prototype.interfaces_ = function () {
        return []
      }, oi.prototype.getClass = function () {
        return oi
      }, oi.overlayOp = function (t, e, n) {
        return new oi(t, e).getResultGeometry(n)
      }, oi.union = function (t, e) {
        return oi.overlayOp(t, e, Ci.UNION)
      }, oi.intersection = function (t, e) {
        return oi.overlayOp(t, e, Ci.INTERSECTION)
      }, oi.symDifference = function (t, e) {
        return oi.overlayOp(t, e, Ci.SYMDIFFERENCE)
      }, oi.difference = function (t, e) {
        return oi.overlayOp(t, e, Ci.DIFFERENCE)
      };
      var si = function () {
        this.mce = null, this.chainIndex = null;
        var t = arguments[0],
          e = arguments[1];
        this.mce = t, this.chainIndex = e
      };
      si.prototype.computeIntersections = function (t, e) {
        this.mce.computeIntersectsForChain(this.chainIndex, t.mce, t.chainIndex, e)
      }, si.prototype.interfaces_ = function () {
        return []
      }, si.prototype.getClass = function () {
        return si
      };
      var ai = function t() {
          if (this._label = null, this._xValue = null, this._eventType = null, this._insertEvent = null, this._deleteEventIndex = null, this._obj = null, 2 === arguments.length) {
            var e = arguments[0],
              n = arguments[1];
            this._eventType = t.DELETE, this._xValue = e, this._insertEvent = n
          } else if (3 === arguments.length) {
            var r = arguments[0],
              i = arguments[1],
              o = arguments[2];
            this._eventType = t.INSERT, this._label = r, this._xValue = i, this._obj = o
          }
        },
        ui = {
          INSERT: {
            configurable: !0
          },
          DELETE: {
            configurable: !0
          }
        };
      ai.prototype.isDelete = function () {
        return this._eventType === ai.DELETE
      }, ai.prototype.setDeleteEventIndex = function (t) {
        this._deleteEventIndex = t
      }, ai.prototype.getObject = function () {
        return this._obj
      }, ai.prototype.compareTo = function (t) {
        var e = t;
        return this._xValue < e._xValue ? -1 : this._xValue > e._xValue ? 1 : this._eventType < e._eventType ? -1 : this._eventType > e._eventType ? 1 : 0
      }, ai.prototype.getInsertEvent = function () {
        return this._insertEvent
      }, ai.prototype.isInsert = function () {
        return this._eventType === ai.INSERT
      }, ai.prototype.isSameLabel = function (t) {
        return null !== this._label && this._label === t._label
      }, ai.prototype.getDeleteEventIndex = function () {
        return this._deleteEventIndex
      }, ai.prototype.interfaces_ = function () {
        return [E]
      }, ai.prototype.getClass = function () {
        return ai
      }, ui.INSERT.get = function () {
        return 1
      }, ui.DELETE.get = function () {
        return 2
      }, Object.defineProperties(ai, ui);
      var li = function () {};
      li.prototype.interfaces_ = function () {
        return []
      }, li.prototype.getClass = function () {
        return li
      };
      var ci = function () {
        this._hasIntersection = !1, this._hasProper = !1, this._hasProperInterior = !1, this._properIntersectionPoint = null, this._li = null, this._includeProper = null, this._recordIsolated = null, this._isSelfIntersection = null, this._numIntersections = 0, this.numTests = 0, this._bdyNodes = null, this._isDone = !1, this._isDoneWhenProperInt = !1;
        var t = arguments[0],
          e = arguments[1],
          n = arguments[2];
        this._li = t, this._includeProper = e, this._recordIsolated = n
      };
      ci.prototype.isTrivialIntersection = function (t, e, n, r) {
        if (t === n && 1 === this._li.getIntersectionNum()) {
          if (ci.isAdjacentSegments(e, r)) return !0;
          if (t.isClosed()) {
            var i = t.getNumPoints() - 1;
            if (0 === e && r === i || 0 === r && e === i) return !0
          }
        }
        return !1
      }, ci.prototype.getProperIntersectionPoint = function () {
        return this._properIntersectionPoint
      }, ci.prototype.setIsDoneIfProperInt = function (t) {
        this._isDoneWhenProperInt = t
      }, ci.prototype.hasProperInteriorIntersection = function () {
        return this._hasProperInterior
      }, ci.prototype.isBoundaryPointInternal = function (t, e) {
        for (var n = e.iterator(); n.hasNext();) {
          var r = n.next().getCoordinate();
          if (t.isIntersection(r)) return !0
        }
        return !1
      }, ci.prototype.hasProperIntersection = function () {
        return this._hasProper
      }, ci.prototype.hasIntersection = function () {
        return this._hasIntersection
      }, ci.prototype.isDone = function () {
        return this._isDone
      }, ci.prototype.isBoundaryPoint = function (t, e) {
        return !(null === e || !this.isBoundaryPointInternal(t, e[0]) && !this.isBoundaryPointInternal(t, e[1]))
      }, ci.prototype.setBoundaryNodes = function (t, e) {
        this._bdyNodes = new Array(2).fill(null), this._bdyNodes[0] = t, this._bdyNodes[1] = e
      }, ci.prototype.addIntersections = function (t, e, n, r) {
        if (t === n && e === r) return null;
        this.numTests++;
        var i = t.getCoordinates()[e],
          o = t.getCoordinates()[e + 1],
          s = n.getCoordinates()[r],
          a = n.getCoordinates()[r + 1];
        this._li.computeIntersection(i, o, s, a), this._li.hasIntersection() && (this._recordIsolated && (t.setIsolated(!1), n.setIsolated(!1)), this._numIntersections++, this.isTrivialIntersection(t, e, n, r) || (this._hasIntersection = !0, !this._includeProper && this._li.isProper() || (t.addIntersections(this._li, e, 0), n.addIntersections(this._li, r, 1)), this._li.isProper() && (this._properIntersectionPoint = this._li.getIntersection(0).copy(), this._hasProper = !0, this._isDoneWhenProperInt && (this._isDone = !0), this.isBoundaryPoint(this._li, this._bdyNodes) || (this._hasProperInterior = !0))))
      }, ci.prototype.interfaces_ = function () {
        return []
      }, ci.prototype.getClass = function () {
        return ci
      }, ci.isAdjacentSegments = function (t, e) {
        return 1 === Math.abs(t - e)
      };
      var hi = function (t) {
          function e() {
            t.call(this), this.events = new It, this.nOverlaps = null
          }
          return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.prepareEvents = function () {
            Qe.sort(this.events);
            for (var t = 0; t < this.events.size(); t++) {
              var e = this.events.get(t);
              e.isDelete() && e.getInsertEvent().setDeleteEventIndex(t)
            }
          }, e.prototype.computeIntersections = function () {
            if (1 === arguments.length) {
              var t = arguments[0];
              this.nOverlaps = 0, this.prepareEvents();
              for (var e = 0; e < this.events.size(); e++) {
                var n = this.events.get(e);
                if (n.isInsert() && this.processOverlaps(e, n.getDeleteEventIndex(), n, t), t.isDone()) break
              }
            } else if (3 === arguments.length)
              if (arguments[2] instanceof ci && T(arguments[0], bt) && T(arguments[1], bt)) {
                var r = arguments[0],
                  i = arguments[1],
                  o = arguments[2];
                this.addEdges(r, r), this.addEdges(i, i), this.computeIntersections(o)
              } else if ("boolean" == typeof arguments[2] && T(arguments[0], bt) && arguments[1] instanceof ci) {
              var s = arguments[0],
                a = arguments[1];
              arguments[2] ? this.addEdges(s, null) : this.addEdges(s), this.computeIntersections(a)
            }
          }, e.prototype.addEdge = function (t, e) {
            for (var n = t.getMonotoneChainEdge(), r = n.getStartIndexes(), i = 0; i < r.length - 1; i++) {
              var o = new si(n, i),
                s = new ai(e, n.getMinX(i), o);
              this.events.add(s), this.events.add(new ai(n.getMaxX(i), s))
            }
          }, e.prototype.processOverlaps = function (t, e, n, r) {
            for (var i = n.getObject(), o = t; o < e; o++) {
              var s = this.events.get(o);
              if (s.isInsert()) {
                var a = s.getObject();
                n.isSameLabel(s) || (i.computeIntersections(a, r), this.nOverlaps++)
              }
            }
          }, e.prototype.addEdges = function () {
            if (1 === arguments.length)
              for (var t = arguments[0].iterator(); t.hasNext();) {
                var e = t.next();
                this.addEdge(e, e)
              } else if (2 === arguments.length)
                for (var n = arguments[0], r = arguments[1], i = n.iterator(); i.hasNext();) {
                  var o = i.next();
                  this.addEdge(o, r)
                }
          }, e.prototype.interfaces_ = function () {
            return []
          }, e.prototype.getClass = function () {
            return e
          }, e
        }(li),
        pi = function () {
          this._min = v.POSITIVE_INFINITY, this._max = v.NEGATIVE_INFINITY
        },
        fi = {
          NodeComparator: {
            configurable: !0
          }
        };
      pi.prototype.getMin = function () {
        return this._min
      }, pi.prototype.intersects = function (t, e) {
        return !(this._min > e || this._max < t)
      }, pi.prototype.getMax = function () {
        return this._max
      }, pi.prototype.toString = function () {
        return K.toLineString(new N(this._min, 0), new N(this._max, 0))
      }, pi.prototype.interfaces_ = function () {
        return []
      }, pi.prototype.getClass = function () {
        return pi
      }, fi.NodeComparator.get = function () {
        return gi
      }, Object.defineProperties(pi, fi);
      var gi = function () {};
      gi.prototype.compare = function (t, e) {
        var n = t,
          r = e,
          i = (n._min + n._max) / 2,
          o = (r._min + r._max) / 2;
        return i < o ? -1 : i > o ? 1 : 0
      }, gi.prototype.interfaces_ = function () {
        return [I]
      }, gi.prototype.getClass = function () {
        return gi
      };
      var di = function (t) {
          function e() {
            t.call(this), this._item = null;
            var e = arguments[0],
              n = arguments[1],
              r = arguments[2];
            this._min = e, this._max = n, this._item = r
          }
          return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.query = function (t, e, n) {
            if (!this.intersects(t, e)) return null;
            n.visitItem(this._item)
          }, e.prototype.interfaces_ = function () {
            return []
          }, e.prototype.getClass = function () {
            return e
          }, e
        }(pi),
        yi = function (t) {
          function e() {
            t.call(this), this._node1 = null, this._node2 = null;
            var e = arguments[0],
              n = arguments[1];
            this._node1 = e, this._node2 = n, this.buildExtent(this._node1, this._node2)
          }
          return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.buildExtent = function (t, e) {
            this._min = Math.min(t._min, e._min), this._max = Math.max(t._max, e._max)
          }, e.prototype.query = function (t, e, n) {
            if (!this.intersects(t, e)) return null;
            null !== this._node1 && this._node1.query(t, e, n), null !== this._node2 && this._node2.query(t, e, n)
          }, e.prototype.interfaces_ = function () {
            return []
          }, e.prototype.getClass = function () {
            return e
          }, e
        }(pi),
        _i = function () {
          this._leaves = new It, this._root = null, this._level = 0
        };
      _i.prototype.buildTree = function () {
        Qe.sort(this._leaves, new pi.NodeComparator);
        for (var t = this._leaves, e = null, n = new It;;) {
          if (this.buildLevel(t, n), 1 === n.size()) return n.get(0);
          e = t, t = n, n = e
        }
      }, _i.prototype.insert = function (t, e, n) {
        if (null !== this._root) throw new Error("Index cannot be added to once it has been queried");
        this._leaves.add(new di(t, e, n))
      }, _i.prototype.query = function (t, e, n) {
        this.init(), this._root.query(t, e, n)
      }, _i.prototype.buildRoot = function () {
        if (null !== this._root) return null;
        this._root = this.buildTree()
      }, _i.prototype.printNode = function (t) {
        U.out.println(K.toLineString(new N(t._min, this._level), new N(t._max, this._level)))
      }, _i.prototype.init = function () {
        if (null !== this._root) return null;
        this.buildRoot()
      }, _i.prototype.buildLevel = function (t, e) {
        this._level++, e.clear();
        for (var n = 0; n < t.size(); n += 2) {
          var r = t.get(n);
          if (null === (n + 1 < t.size() ? t.get(n) : null)) e.add(r);
          else {
            var i = new yi(t.get(n), t.get(n + 1));
            e.add(i)
          }
        }
      }, _i.prototype.interfaces_ = function () {
        return []
      }, _i.prototype.getClass = function () {
        return _i
      };
      var mi = function () {
        this._items = new It
      };
      mi.prototype.visitItem = function (t) {
        this._items.add(t)
      }, mi.prototype.getItems = function () {
        return this._items
      }, mi.prototype.interfaces_ = function () {
        return [Ze]
      }, mi.prototype.getClass = function () {
        return mi
      };
      var vi = function () {
          this._index = null;
          var t = arguments[0];
          if (!T(t, Kt)) throw new m("Argument must be Polygonal");
          this._index = new bi(t)
        },
        xi = {
          SegmentVisitor: {
            configurable: !0
          },
          IntervalIndexedGeometry: {
            configurable: !0
          }
        };
      vi.prototype.locate = function (t) {
        var e = new st(t),
          n = new Ei(e);
        return this._index.query(t.y, t.y, n), e.getLocation()
      }, vi.prototype.interfaces_ = function () {
        return [Bn]
      }, vi.prototype.getClass = function () {
        return vi
      }, xi.SegmentVisitor.get = function () {
        return Ei
      }, xi.IntervalIndexedGeometry.get = function () {
        return bi
      }, Object.defineProperties(vi, xi);
      var Ei = function () {
        this._counter = null;
        var t = arguments[0];
        this._counter = t
      };
      Ei.prototype.visitItem = function (t) {
        var e = t;
        this._counter.countSegment(e.getCoordinate(0), e.getCoordinate(1))
      }, Ei.prototype.interfaces_ = function () {
        return [Ze]
      }, Ei.prototype.getClass = function () {
        return Ei
      };
      var bi = function () {
        this._index = new _i;
        var t = arguments[0];
        this.init(t)
      };
      bi.prototype.init = function (t) {
        for (var e = Nr.getLines(t).iterator(); e.hasNext();) {
          var n = e.next().getCoordinates();
          this.addLine(n)
        }
      }, bi.prototype.addLine = function (t) {
        for (var e = 1; e < t.length; e++) {
          var n = new dn(t[e - 1], t[e]),
            r = Math.min(n.p0.y, n.p1.y),
            i = Math.max(n.p0.y, n.p1.y);
          this._index.insert(r, i, n)
        }
      }, bi.prototype.query = function () {
        if (2 === arguments.length) {
          var t = arguments[0],
            e = arguments[1],
            n = new mi;
          return this._index.query(t, e, n), n.getItems()
        }
        if (3 === arguments.length) {
          var r = arguments[0],
            i = arguments[1],
            o = arguments[2];
          this._index.query(r, i, o)
        }
      }, bi.prototype.interfaces_ = function () {
        return []
      }, bi.prototype.getClass = function () {
        return bi
      };
      var Ii = function (t) {
          function e() {
            if (t.call(this), this._parentGeom = null, this._lineEdgeMap = new pe, this._boundaryNodeRule = null, this._useBoundaryDeterminationRule = !0, this._argIndex = null, this._boundaryNodes = null, this._hasTooFewPoints = !1, this._invalidPoint = null, this._areaPtLocator = null, this._ptLocator = new wr, 2 === arguments.length) {
              var e = arguments[0],
                n = arguments[1],
                r = gt.OGC_SFS_BOUNDARY_RULE;
              this._argIndex = e, this._parentGeom = n, this._boundaryNodeRule = r, null !== n && this.add(n)
            } else if (3 === arguments.length) {
              var i = arguments[0],
                o = arguments[1],
                s = arguments[2];
              this._argIndex = i, this._parentGeom = o, this._boundaryNodeRule = s, null !== o && this.add(o)
            }
          }
          return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.insertBoundaryPoint = function (t, n) {
            var r = this._nodes.addNode(n).getLabel(),
              i = 1;
            r.getLocation(t, we.ON) === L.BOUNDARY && i++;
            var o = e.determineBoundary(this._boundaryNodeRule, i);
            r.setLocation(t, o)
          }, e.prototype.computeSelfNodes = function () {
            if (2 === arguments.length) {
              var t = arguments[0],
                e = arguments[1];
              return this.computeSelfNodes(t, e, !1)
            }
            if (3 === arguments.length) {
              var n = arguments[0],
                r = arguments[1],
                i = arguments[2],
                o = new ci(n, !0, !1);
              o.setIsDoneIfProperInt(i);
              var s = this.createEdgeSetIntersector(),
                a = this._parentGeom instanceof ee || this._parentGeom instanceof Qt || this._parentGeom instanceof ne,
                u = r || !a;
              return s.computeIntersections(this._edges, o, u), this.addSelfIntersectionNodes(this._argIndex), o
            }
          }, e.prototype.computeSplitEdges = function (t) {
            for (var e = this._edges.iterator(); e.hasNext();) e.next().eiList.addSplitEdges(t)
          }, e.prototype.computeEdgeIntersections = function (t, e, n) {
            var r = new ci(e, n, !0);
            return r.setBoundaryNodes(this.getBoundaryNodes(), t.getBoundaryNodes()), this.createEdgeSetIntersector().computeIntersections(this._edges, t._edges, r), r
          }, e.prototype.getGeometry = function () {
            return this._parentGeom
          }, e.prototype.getBoundaryNodeRule = function () {
            return this._boundaryNodeRule
          }, e.prototype.hasTooFewPoints = function () {
            return this._hasTooFewPoints
          }, e.prototype.addPoint = function () {
            if (arguments[0] instanceof Jt) {
              var t = arguments[0].getCoordinate();
              this.insertPoint(this._argIndex, t, L.INTERIOR)
            } else if (arguments[0] instanceof N) {
              var e = arguments[0];
              this.insertPoint(this._argIndex, e, L.INTERIOR)
            }
          }, e.prototype.addPolygon = function (t) {
            this.addPolygonRing(t.getExteriorRing(), L.EXTERIOR, L.INTERIOR);
            for (var e = 0; e < t.getNumInteriorRing(); e++) {
              var n = t.getInteriorRingN(e);
              this.addPolygonRing(n, L.INTERIOR, L.EXTERIOR)
            }
          }, e.prototype.addEdge = function (t) {
            this.insertEdge(t);
            var e = t.getCoordinates();
            this.insertPoint(this._argIndex, e[0], L.BOUNDARY), this.insertPoint(this._argIndex, e[e.length - 1], L.BOUNDARY)
          }, e.prototype.addLineString = function (t) {
            var e = Ct.removeRepeatedPoints(t.getCoordinates());
            if (e.length < 2) return this._hasTooFewPoints = !0, this._invalidPoint = e[0], null;
            var n = new nr(e, new Pe(this._argIndex, L.INTERIOR));
            this._lineEdgeMap.put(t, n), this.insertEdge(n), et.isTrue(e.length >= 2, "found LineString with single point"), this.insertBoundaryPoint(this._argIndex, e[0]), this.insertBoundaryPoint(this._argIndex, e[e.length - 1])
          }, e.prototype.getInvalidPoint = function () {
            return this._invalidPoint
          }, e.prototype.getBoundaryPoints = function () {
            for (var t = this.getBoundaryNodes(), e = new Array(t.size()).fill(null), n = 0, r = t.iterator(); r.hasNext();) {
              var i = r.next();
              e[n++] = i.getCoordinate().copy()
            }
            return e
          }, e.prototype.getBoundaryNodes = function () {
            return null === this._boundaryNodes && (this._boundaryNodes = this._nodes.getBoundaryNodes(this._argIndex)), this._boundaryNodes
          }, e.prototype.addSelfIntersectionNode = function (t, e, n) {
            if (this.isBoundaryNode(t, e)) return null;
            n === L.BOUNDARY && this._useBoundaryDeterminationRule ? this.insertBoundaryPoint(t, e) : this.insertPoint(t, e, n)
          }, e.prototype.addPolygonRing = function (t, e, n) {
            if (t.isEmpty()) return null;
            var r = Ct.removeRepeatedPoints(t.getCoordinates());
            if (r.length < 4) return this._hasTooFewPoints = !0, this._invalidPoint = r[0], null;
            var i = e,
              o = n;
            at.isCCW(r) && (i = n, o = e);
            var s = new nr(r, new Pe(this._argIndex, L.BOUNDARY, i, o));
            this._lineEdgeMap.put(t, s), this.insertEdge(s), this.insertPoint(this._argIndex, r[0], L.BOUNDARY)
          }, e.prototype.insertPoint = function (t, e, n) {
            var r = this._nodes.addNode(e),
              i = r.getLabel();
            null === i ? r._label = new Pe(t, n) : i.setLocation(t, n)
          }, e.prototype.createEdgeSetIntersector = function () {
            return new hi
          }, e.prototype.addSelfIntersectionNodes = function (t) {
            for (var e = this._edges.iterator(); e.hasNext();)
              for (var n = e.next(), r = n.getLabel().getLocation(t), i = n.eiList.iterator(); i.hasNext();) {
                var o = i.next();
                this.addSelfIntersectionNode(t, o.coord, r)
              }
          }, e.prototype.add = function () {
            if (1 !== arguments.length) return t.prototype.add.apply(this, arguments);
            var e = arguments[0];
            if (e.isEmpty()) return null;
            if (e instanceof ne && (this._useBoundaryDeterminationRule = !1), e instanceof Qt) this.addPolygon(e);
            else if (e instanceof Zt) this.addLineString(e);
            else if (e instanceof Jt) this.addPoint(e);
            else if (e instanceof te) this.addCollection(e);
            else if (e instanceof Vt) this.addCollection(e);
            else if (e instanceof ne) this.addCollection(e);
            else {
              if (!(e instanceof jt)) throw new Error(e.getClass().getName());
              this.addCollection(e)
            }
          }, e.prototype.addCollection = function (t) {
            for (var e = 0; e < t.getNumGeometries(); e++) {
              var n = t.getGeometryN(e);
              this.add(n)
            }
          }, e.prototype.locate = function (t) {
            return T(this._parentGeom, Kt) && this._parentGeom.getNumGeometries() > 50 ? (null === this._areaPtLocator && (this._areaPtLocator = new vi(this._parentGeom)), this._areaPtLocator.locate(t)) : this._ptLocator.locate(t, this._parentGeom)
          }, e.prototype.findEdge = function () {
            if (1 === arguments.length) {
              var e = arguments[0];
              return this._lineEdgeMap.get(e)
            }
            return t.prototype.findEdge.apply(this, arguments)
          }, e.prototype.interfaces_ = function () {
            return []
          }, e.prototype.getClass = function () {
            return e
          }, e.determineBoundary = function (t, e) {
            return t.isInBoundary(e) ? L.BOUNDARY : L.INTERIOR
          }, e
        }(Ue),
        Ni = function () {
          if (this._li = new it, this._resultPrecisionModel = null, this._arg = null, 1 === arguments.length) {
            var t = arguments[0];
            this.setComputationPrecision(t.getPrecisionModel()), this._arg = new Array(1).fill(null), this._arg[0] = new Ii(0, t)
          } else if (2 === arguments.length) {
            var e = arguments[0],
              n = arguments[1],
              r = gt.OGC_SFS_BOUNDARY_RULE;
            e.getPrecisionModel().compareTo(n.getPrecisionModel()) >= 0 ? this.setComputationPrecision(e.getPrecisionModel()) : this.setComputationPrecision(n.getPrecisionModel()), this._arg = new Array(2).fill(null), this._arg[0] = new Ii(0, e, r), this._arg[1] = new Ii(1, n, r)
          } else if (3 === arguments.length) {
            var i = arguments[0],
              o = arguments[1],
              s = arguments[2];
            i.getPrecisionModel().compareTo(o.getPrecisionModel()) >= 0 ? this.setComputationPrecision(i.getPrecisionModel()) : this.setComputationPrecision(o.getPrecisionModel()), this._arg = new Array(2).fill(null), this._arg[0] = new Ii(0, i, s), this._arg[1] = new Ii(1, o, s)
          }
        };
      Ni.prototype.getArgGeometry = function (t) {
        return this._arg[t].getGeometry()
      }, Ni.prototype.setComputationPrecision = function (t) {
        this._resultPrecisionModel = t, this._li.setPrecisionModel(this._resultPrecisionModel)
      }, Ni.prototype.interfaces_ = function () {
        return []
      }, Ni.prototype.getClass = function () {
        return Ni
      };
      var wi = function () {};
      wi.prototype.interfaces_ = function () {
        return []
      }, wi.prototype.getClass = function () {
        return wi
      }, wi.map = function () {
        if (arguments[0] instanceof ct && T(arguments[1], wi.MapOp)) {
          for (var t = arguments[0], e = arguments[1], n = new It, r = 0; r < t.getNumGeometries(); r++) {
            var i = e.map(t.getGeometryN(r));
            null !== i && n.add(i)
          }
          return t.getFactory().buildGeometry(n)
        }
        if (T(arguments[0], xt) && T(arguments[1], wi.MapOp)) {
          for (var o = arguments[0], s = arguments[1], a = new It, u = o.iterator(); u.hasNext();) {
            var l = u.next(),
              c = s.map(l);
            null !== c && a.add(c)
          }
          return a
        }
      }, wi.MapOp = function () {};
      var Ci = function (t) {
        function e() {
          var e = arguments[0],
            n = arguments[1];
          t.call(this, e, n), this._ptLocator = new wr, this._geomFact = null, this._resultGeom = null, this._graph = null, this._edgeList = new Hn, this._resultPolyList = new It, this._resultLineList = new It, this._resultPointList = new It, this._graph = new Ue(new Xn), this._geomFact = e.getFactory()
        }
        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.insertUniqueEdge = function (t) {
          var e = this._edgeList.findEqualEdge(t);
          if (null !== e) {
            var n = e.getLabel(),
              r = t.getLabel();
            e.isPointwiseEqual(t) || (r = new Pe(t.getLabel())).flip();
            var i = e.getDepth();
            i.isNull() && i.add(n), i.add(r), n.merge(r)
          } else this._edgeList.add(t)
        }, e.prototype.getGraph = function () {
          return this._graph
        }, e.prototype.cancelDuplicateResultEdges = function () {
          for (var t = this._graph.getEdgeEnds().iterator(); t.hasNext();) {
            var e = t.next(),
              n = e.getSym();
            e.isInResult() && n.isInResult() && (e.setInResult(!1), n.setInResult(!1))
          }
        }, e.prototype.isCoveredByLA = function (t) {
          return !!this.isCovered(t, this._resultLineList) || !!this.isCovered(t, this._resultPolyList)
        }, e.prototype.computeGeometry = function (t, n, r, i) {
          var o = new It;
          return o.addAll(t), o.addAll(n), o.addAll(r), o.isEmpty() ? e.createEmptyResult(i, this._arg[0].getGeometry(), this._arg[1].getGeometry(), this._geomFact) : this._geomFact.buildGeometry(o)
        }, e.prototype.mergeSymLabels = function () {
          for (var t = this._graph.getNodes().iterator(); t.hasNext();) t.next().getEdges().mergeSymLabels()
        }, e.prototype.isCovered = function (t, e) {
          for (var n = e.iterator(); n.hasNext();) {
            var r = n.next();
            if (this._ptLocator.locate(t, r) !== L.EXTERIOR) return !0
          }
          return !1
        }, e.prototype.replaceCollapsedEdges = function () {
          for (var t = new It, e = this._edgeList.iterator(); e.hasNext();) {
            var n = e.next();
            n.isCollapsed() && (e.remove(), t.add(n.getCollapsedEdge()))
          }
          this._edgeList.addAll(t)
        }, e.prototype.updateNodeLabelling = function () {
          for (var t = this._graph.getNodes().iterator(); t.hasNext();) {
            var e = t.next(),
              n = e.getEdges().getLabel();
            e.getLabel().merge(n)
          }
        }, e.prototype.getResultGeometry = function (t) {
          return this.computeOverlay(t), this._resultGeom
        }, e.prototype.insertUniqueEdges = function (t) {
          for (var e = t.iterator(); e.hasNext();) {
            var n = e.next();
            this.insertUniqueEdge(n)
          }
        }, e.prototype.computeOverlay = function (t) {
          this.copyPoints(0), this.copyPoints(1), this._arg[0].computeSelfNodes(this._li, !1), this._arg[1].computeSelfNodes(this._li, !1), this._arg[0].computeEdgeIntersections(this._arg[1], this._li, !0);
          var e = new It;
          this._arg[0].computeSplitEdges(e), this._arg[1].computeSplitEdges(e), this.insertUniqueEdges(e), this.computeLabelsFromDepths(), this.replaceCollapsedEdges(), Ur.checkValid(this._edgeList.getEdges()), this._graph.addEdges(this._edgeList.getEdges()), this.computeLabelling(), this.labelIncompleteNodes(), this.findResultAreaEdges(t), this.cancelDuplicateResultEdges();
          var n = new Xe(this._geomFact);
          n.add(this._graph), this._resultPolyList = n.getPolygons();
          var r = new Yr(this, this._geomFact, this._ptLocator);
          this._resultLineList = r.build(t);
          var i = new Hr(this, this._geomFact, this._ptLocator);
          this._resultPointList = i.build(t), this._resultGeom = this.computeGeometry(this._resultPointList, this._resultLineList, this._resultPolyList, t)
        }, e.prototype.labelIncompleteNode = function (t, e) {
          var n = this._ptLocator.locate(t.getCoordinate(), this._arg[e].getGeometry());
          t.getLabel().setLocation(e, n)
        }, e.prototype.copyPoints = function (t) {
          for (var e = this._arg[t].getNodeIterator(); e.hasNext();) {
            var n = e.next();
            this._graph.addNode(n.getCoordinate()).setLabel(t, n.getLabel().getLocation(t))
          }
        }, e.prototype.findResultAreaEdges = function (t) {
          for (var n = this._graph.getEdgeEnds().iterator(); n.hasNext();) {
            var r = n.next(),
              i = r.getLabel();
            i.isArea() && !r.isInteriorAreaEdge() && e.isResultOfOp(i.getLocation(0, we.RIGHT), i.getLocation(1, we.RIGHT), t) && r.setInResult(!0)
          }
        }, e.prototype.computeLabelsFromDepths = function () {
          for (var t = this._edgeList.iterator(); t.hasNext();) {
            var e = t.next(),
              n = e.getLabel(),
              r = e.getDepth();
            if (!r.isNull()) {
              r.normalize();
              for (var i = 0; i < 2; i++) n.isNull(i) || !n.isArea() || r.isNull(i) || (0 === r.getDelta(i) ? n.toLine(i) : (et.isTrue(!r.isNull(i, we.LEFT), "depth of LEFT side has not been initialized"), n.setLocation(i, we.LEFT, r.getLocation(i, we.LEFT)), et.isTrue(!r.isNull(i, we.RIGHT), "depth of RIGHT side has not been initialized"), n.setLocation(i, we.RIGHT, r.getLocation(i, we.RIGHT))))
            }
          }
        }, e.prototype.computeLabelling = function () {
          for (var t = this._graph.getNodes().iterator(); t.hasNext();) t.next().getEdges().computeLabelling(this._arg);
          this.mergeSymLabels(), this.updateNodeLabelling()
        }, e.prototype.labelIncompleteNodes = function () {
          for (var t = this._graph.getNodes().iterator(); t.hasNext();) {
            var e = t.next(),
              n = e.getLabel();
            e.isIsolated() && (n.isNull(0) ? this.labelIncompleteNode(e, 0) : this.labelIncompleteNode(e, 1)), e.getEdges().updateLabelling(n)
          }
        }, e.prototype.isCoveredByA = function (t) {
          return !!this.isCovered(t, this._resultPolyList)
        }, e.prototype.interfaces_ = function () {
          return []
        }, e.prototype.getClass = function () {
          return e
        }, e
      }(Ni);
      Ci.overlayOp = function (t, e, n) {
        return new Ci(t, e).getResultGeometry(n)
      }, Ci.intersection = function (t, e) {
        if (t.isEmpty() || e.isEmpty()) return Ci.createEmptyResult(Ci.INTERSECTION, t, e, t.getFactory());
        if (t.isGeometryCollection()) {
          var n = e;
          return Xr.map(t, {
            interfaces_: function () {
              return [wi.MapOp]
            },
            map: function (t) {
              return t.intersection(n)
            }
          })
        }
        return t.checkNotGeometryCollection(t), t.checkNotGeometryCollection(e), oi.overlayOp(t, e, Ci.INTERSECTION)
      }, Ci.symDifference = function (t, e) {
        if (t.isEmpty() || e.isEmpty()) {
          if (t.isEmpty() && e.isEmpty()) return Ci.createEmptyResult(Ci.SYMDIFFERENCE, t, e, t.getFactory());
          if (t.isEmpty()) return e.copy();
          if (e.isEmpty()) return t.copy()
        }
        return t.checkNotGeometryCollection(t), t.checkNotGeometryCollection(e), oi.overlayOp(t, e, Ci.SYMDIFFERENCE)
      }, Ci.resultDimension = function (t, e, n) {
        var r = e.getDimension(),
          i = n.getDimension(),
          o = -1;
        switch (t) {
          case Ci.INTERSECTION:
            o = Math.min(r, i);
            break;
          case Ci.UNION:
            o = Math.max(r, i);
            break;
          case Ci.DIFFERENCE:
            o = r;
            break;
          case Ci.SYMDIFFERENCE:
            o = Math.max(r, i)
        }
        return o
      }, Ci.createEmptyResult = function (t, e, n, r) {
        var i = null;
        switch (Ci.resultDimension(t, e, n)) {
          case -1:
            i = r.createGeometryCollection(new Array(0).fill(null));
            break;
          case 0:
            i = r.createPoint();
            break;
          case 1:
            i = r.createLineString();
            break;
          case 2:
            i = r.createPolygon()
        }
        return i
      }, Ci.difference = function (t, e) {
        return t.isEmpty() ? Ci.createEmptyResult(Ci.DIFFERENCE, t, e, t.getFactory()) : e.isEmpty() ? t.copy() : (t.checkNotGeometryCollection(t), t.checkNotGeometryCollection(e), oi.overlayOp(t, e, Ci.DIFFERENCE))
      }, Ci.isResultOfOp = function () {
        if (2 === arguments.length) {
          var t = arguments[0],
            e = arguments[1],
            n = t.getLocation(0),
            r = t.getLocation(1);
          return Ci.isResultOfOp(n, r, e)
        }
        if (3 === arguments.length) {
          var i = arguments[0],
            o = arguments[1],
            s = arguments[2];
          switch (i === L.BOUNDARY && (i = L.INTERIOR), o === L.BOUNDARY && (o = L.INTERIOR), s) {
            case Ci.INTERSECTION:
              return i === L.INTERIOR && o === L.INTERIOR;
            case Ci.UNION:
              return i === L.INTERIOR || o === L.INTERIOR;
            case Ci.DIFFERENCE:
              return i === L.INTERIOR && o !== L.INTERIOR;
            case Ci.SYMDIFFERENCE:
              return i === L.INTERIOR && o !== L.INTERIOR || i !== L.INTERIOR && o === L.INTERIOR
          }
          return !1
        }
      }, Ci.INTERSECTION = 1, Ci.UNION = 2, Ci.DIFFERENCE = 3, Ci.SYMDIFFERENCE = 4;
      var Si = function () {
        this._g = null, this._boundaryDistanceTolerance = null, this._linework = null, this._ptLocator = new wr, this._seg = new dn;
        var t = arguments[0],
          e = arguments[1];
        this._g = t, this._boundaryDistanceTolerance = e, this._linework = this.extractLinework(t)
      };
      Si.prototype.isWithinToleranceOfBoundary = function (t) {
        for (var e = 0; e < this._linework.getNumGeometries(); e++)
          for (var n = this._linework.getGeometryN(e).getCoordinateSequence(), r = 0; r < n.size() - 1; r++)
            if (n.getCoordinate(r, this._seg.p0), n.getCoordinate(r + 1, this._seg.p1), this._seg.distance(t) <= this._boundaryDistanceTolerance) return !0;
        return !1
      }, Si.prototype.getLocation = function (t) {
        return this.isWithinToleranceOfBoundary(t) ? L.BOUNDARY : this._ptLocator.locate(t, this._g)
      }, Si.prototype.extractLinework = function (t) {
        var e = new Li;
        t.apply(e);
        var n = e.getLinework(),
          r = _e.toLineStringArray(n);
        return t.getFactory().createMultiLineString(r)
      }, Si.prototype.interfaces_ = function () {
        return []
      }, Si.prototype.getClass = function () {
        return Si
      };
      var Li = function () {
        this._linework = null, this._linework = new It
      };
      Li.prototype.getLinework = function () {
        return this._linework
      }, Li.prototype.filter = function (t) {
        if (t instanceof Qt) {
          var e = t;
          this._linework.add(e.getExteriorRing());
          for (var n = 0; n < e.getNumInteriorRing(); n++) this._linework.add(e.getInteriorRingN(n))
        }
      }, Li.prototype.interfaces_ = function () {
        return [Bt]
      }, Li.prototype.getClass = function () {
        return Li
      };
      var Oi = function () {
        this._g = null, this._doLeft = !0, this._doRight = !0;
        var t = arguments[0];
        this._g = t
      };
      Oi.prototype.extractPoints = function (t, e, n) {
        for (var r = t.getCoordinates(), i = 0; i < r.length - 1; i++) this.computeOffsetPoints(r[i], r[i + 1], e, n)
      }, Oi.prototype.setSidesToGenerate = function (t, e) {
        this._doLeft = t, this._doRight = e
      }, Oi.prototype.getPoints = function (t) {
        for (var e = new It, n = Nr.getLines(this._g).iterator(); n.hasNext();) {
          var r = n.next();
          this.extractPoints(r, t, e)
        }
        return e
      }, Oi.prototype.computeOffsetPoints = function (t, e, n, r) {
        var i = e.x - t.x,
          o = e.y - t.y,
          s = Math.sqrt(i * i + o * o),
          a = n * i / s,
          u = n * o / s,
          l = (e.x + t.x) / 2,
          c = (e.y + t.y) / 2;
        if (this._doLeft) {
          var h = new N(l - u, c + a);
          r.add(h)
        }
        if (this._doRight) {
          var p = new N(l + u, c - a);
          r.add(p)
        }
      }, Oi.prototype.interfaces_ = function () {
        return []
      }, Oi.prototype.getClass = function () {
        return Oi
      };
      var Ti = function t() {
          this._geom = null, this._locFinder = null, this._location = new Array(3).fill(null), this._invalidLocation = null, this._boundaryDistanceTolerance = t.TOLERANCE, this._testCoords = new It;
          var e = arguments[0],
            n = arguments[1],
            r = arguments[2];
          this._boundaryDistanceTolerance = t.computeBoundaryDistanceTolerance(e, n), this._geom = [e, n, r], this._locFinder = [new Si(this._geom[0], this._boundaryDistanceTolerance), new Si(this._geom[1], this._boundaryDistanceTolerance), new Si(this._geom[2], this._boundaryDistanceTolerance)]
        },
        Mi = {
          TOLERANCE: {
            configurable: !0
          }
        };
      Ti.prototype.reportResult = function (t, e, n) {
        U.out.println("Overlay result invalid - A:" + L.toLocationSymbol(e[0]) + " B:" + L.toLocationSymbol(e[1]) + " expected:" + (n ? "i" : "e") + " actual:" + L.toLocationSymbol(e[2]))
      }, Ti.prototype.isValid = function (t) {
        return this.addTestPts(this._geom[0]), this.addTestPts(this._geom[1]), this.checkValid(t)
      }, Ti.prototype.checkValid = function () {
        if (1 === arguments.length) {
          for (var t = arguments[0], e = 0; e < this._testCoords.size(); e++) {
            var n = this._testCoords.get(e);
            if (!this.checkValid(t, n)) return this._invalidLocation = n, !1
          }
          return !0
        }
        if (2 === arguments.length) {
          var r = arguments[0],
            i = arguments[1];
          return this._location[0] = this._locFinder[0].getLocation(i), this._location[1] = this._locFinder[1].getLocation(i), this._location[2] = this._locFinder[2].getLocation(i), !!Ti.hasLocation(this._location, L.BOUNDARY) || this.isValidResult(r, this._location)
        }
      }, Ti.prototype.addTestPts = function (t) {
        var e = new Oi(t);
        this._testCoords.addAll(e.getPoints(5 * this._boundaryDistanceTolerance))
      }, Ti.prototype.isValidResult = function (t, e) {
        var n = Ci.isResultOfOp(e[0], e[1], t),
          r = !(n ^ e[2] === L.INTERIOR);
        return r || this.reportResult(t, e, n), r
      }, Ti.prototype.getInvalidLocation = function () {
        return this._invalidLocation
      }, Ti.prototype.interfaces_ = function () {
        return []
      }, Ti.prototype.getClass = function () {
        return Ti
      }, Ti.hasLocation = function (t, e) {
        for (var n = 0; n < 3; n++)
          if (t[n] === e) return !0;
        return !1
      }, Ti.computeBoundaryDistanceTolerance = function (t, e) {
        return Math.min($r.computeSizeBasedSnapTolerance(t), $r.computeSizeBasedSnapTolerance(e))
      }, Ti.isValid = function (t, e, n, r) {
        return new Ti(t, e, r).isValid(n)
      }, Mi.TOLERANCE.get = function () {
        return 1e-6
      }, Object.defineProperties(Ti, Mi);
      var Pi = function t(e) {
        this._geomFactory = null, this._skipEmpty = !1, this._inputGeoms = null, this._geomFactory = t.extractFactory(e), this._inputGeoms = e
      };
      Pi.prototype.extractElements = function (t, e) {
        if (null === t) return null;
        for (var n = 0; n < t.getNumGeometries(); n++) {
          var r = t.getGeometryN(n);
          this._skipEmpty && r.isEmpty() || e.add(r)
        }
      }, Pi.prototype.combine = function () {
        for (var t = new It, e = this._inputGeoms.iterator(); e.hasNext();) {
          var n = e.next();
          this.extractElements(n, t)
        }
        return 0 === t.size() ? null !== this._geomFactory ? this._geomFactory.createGeometryCollection(null) : null : this._geomFactory.buildGeometry(t)
      }, Pi.prototype.interfaces_ = function () {
        return []
      }, Pi.prototype.getClass = function () {
        return Pi
      }, Pi.combine = function () {
        if (1 === arguments.length) {
          var t = arguments[0];
          return new Pi(t).combine()
        }
        if (2 === arguments.length) {
          var e = arguments[0],
            n = arguments[1];
          return new Pi(Pi.createList(e, n)).combine()
        }
        if (3 === arguments.length) {
          var r = arguments[0],
            i = arguments[1],
            o = arguments[2];
          return new Pi(Pi.createList(r, i, o)).combine()
        }
      }, Pi.extractFactory = function (t) {
        return t.isEmpty() ? null : t.iterator().next().getFactory()
      }, Pi.createList = function () {
        if (2 === arguments.length) {
          var t = arguments[0],
            e = arguments[1],
            n = new It;
          return n.add(t), n.add(e), n
        }
        if (3 === arguments.length) {
          var r = arguments[0],
            i = arguments[1],
            o = arguments[2],
            s = new It;
          return s.add(r), s.add(i), s.add(o), s
        }
      };
      var Ri = function () {
          this._inputPolys = null, this._geomFactory = null;
          var t = arguments[0];
          this._inputPolys = t, null === this._inputPolys && (this._inputPolys = new It)
        },
        Di = {
          STRTREE_NODE_CAPACITY: {
            configurable: !0
          }
        };
      Ri.prototype.reduceToGeometries = function (t) {
        for (var e = new It, n = t.iterator(); n.hasNext();) {
          var r = n.next(),
            i = null;
          T(r, bt) ? i = this.unionTree(r) : r instanceof ct && (i = r), e.add(i)
        }
        return e
      }, Ri.prototype.extractByEnvelope = function (t, e, n) {
        for (var r = new It, i = 0; i < e.getNumGeometries(); i++) {
          var o = e.getGeometryN(i);
          o.getEnvelopeInternal().intersects(t) ? r.add(o) : n.add(o)
        }
        return this._geomFactory.buildGeometry(r)
      }, Ri.prototype.unionOptimized = function (t, e) {
        var n = t.getEnvelopeInternal(),
          r = e.getEnvelopeInternal();
        if (!n.intersects(r)) return Pi.combine(t, e);
        if (t.getNumGeometries() <= 1 && e.getNumGeometries() <= 1) return this.unionActual(t, e);
        var i = n.intersection(r);
        return this.unionUsingEnvelopeIntersection(t, e, i)
      }, Ri.prototype.union = function () {
        if (null === this._inputPolys) throw new Error("union() method cannot be called twice");
        if (this._inputPolys.isEmpty()) return null;
        this._geomFactory = this._inputPolys.iterator().next().getFactory();
        for (var t = new sn(Ri.STRTREE_NODE_CAPACITY), e = this._inputPolys.iterator(); e.hasNext();) {
          var n = e.next();
          t.insert(n.getEnvelopeInternal(), n)
        }
        this._inputPolys = null;
        var r = t.itemsTree();
        return this.unionTree(r)
      }, Ri.prototype.binaryUnion = function () {
        if (1 === arguments.length) {
          var t = arguments[0];
          return this.binaryUnion(t, 0, t.size())
        }
        if (3 === arguments.length) {
          var e = arguments[0],
            n = arguments[1],
            r = arguments[2];
          if (r - n <= 1) {
            var i = Ri.getGeometry(e, n);
            return this.unionSafe(i, null)
          }
          if (r - n == 2) return this.unionSafe(Ri.getGeometry(e, n), Ri.getGeometry(e, n + 1));
          var o = Math.trunc((r + n) / 2),
            s = this.binaryUnion(e, n, o),
            a = this.binaryUnion(e, o, r);
          return this.unionSafe(s, a)
        }
      }, Ri.prototype.repeatedUnion = function (t) {
        for (var e = null, n = t.iterator(); n.hasNext();) {
          var r = n.next();
          e = null === e ? r.copy() : e.union(r)
        }
        return e
      }, Ri.prototype.unionSafe = function (t, e) {
        return null === t && null === e ? null : null === t ? e.copy() : null === e ? t.copy() : this.unionOptimized(t, e)
      }, Ri.prototype.unionActual = function (t, e) {
        return Ri.restrictToPolygons(t.union(e))
      }, Ri.prototype.unionTree = function (t) {
        var e = this.reduceToGeometries(t);
        return this.binaryUnion(e)
      }, Ri.prototype.unionUsingEnvelopeIntersection = function (t, e, n) {
        var r = new It,
          i = this.extractByEnvelope(n, t, r),
          o = this.extractByEnvelope(n, e, r),
          s = this.unionActual(i, o);
        return r.add(s), Pi.combine(r)
      }, Ri.prototype.bufferUnion = function () {
        if (1 === arguments.length) {
          var t = arguments[0];
          return t.get(0).getFactory().buildGeometry(t).buffer(0)
        }
        if (2 === arguments.length) {
          var e = arguments[0],
            n = arguments[1];
          return e.getFactory().createGeometryCollection([e, n]).buffer(0)
        }
      }, Ri.prototype.interfaces_ = function () {
        return []
      }, Ri.prototype.getClass = function () {
        return Ri
      }, Ri.restrictToPolygons = function (t) {
        if (T(t, Kt)) return t;
        var e = Ir.getPolygons(t);
        return 1 === e.size() ? e.get(0) : t.getFactory().createMultiPolygon(_e.toPolygonArray(e))
      }, Ri.getGeometry = function (t, e) {
        return e >= t.size() ? null : t.get(e)
      }, Ri.union = function (t) {
        return new Ri(t).union()
      }, Di.STRTREE_NODE_CAPACITY.get = function () {
        return 4
      }, Object.defineProperties(Ri, Di);
      var Ai = function () {};
      Ai.prototype.interfaces_ = function () {
        return []
      }, Ai.prototype.getClass = function () {
        return Ai
      }, Ai.union = function (t, e) {
        if (t.isEmpty() || e.isEmpty()) {
          if (t.isEmpty() && e.isEmpty()) return Ci.createEmptyResult(Ci.UNION, t, e, t.getFactory());
          if (t.isEmpty()) return e.copy();
          if (e.isEmpty()) return t.copy()
        }
        return t.checkNotGeometryCollection(t), t.checkNotGeometryCollection(e), oi.overlayOp(t, e, Ci.UNION)
      }, t.GeoJSONReader = Ie, t.GeoJSONWriter = Ne, t.OverlayOp = Ci, t.UnionOp = Ai, t.BufferOp = dr, Object.defineProperty(t, "__esModule", {
        value: !0
      })
    }(e)
  }, function (t, e) {
    t.exports = class {
      constructor(t) {
        this.name = "ExpressionEvaluationError", this.message = t
      }
      toJSON() {
        return this.message
      }
    }
  }, function (t, e, n) {
    const {
      parseCSSColor: r
    } = n(40);
    class i {
      constructor(t, e, n, r = 1) {
        this.r = t, this.g = e, this.b = n, this.a = r
      }
      static parse(t) {
        if (!t) return;
        if (t instanceof i) return t;
        if ("string" != typeof t) return;
        const e = r(t);
        return e ? new i(e[0] / 255 * e[3], e[1] / 255 * e[3], e[2] / 255 * e[3], e[3]) : void 0
      }
      toString() {
        return `rgba(${[this.r,this.g,this.b].map(t=>Math.round(255*t/this.a)).concat(this.a).join(",")})`
      }
    }
    i.black = new i(0, 0, 0, 1), i.white = new i(1, 1, 1, 1), i.transparent = new i(0, 0, 0, 0), t.exports = i
  }, function (t, e, n) {
    const {
      toString: r
    } = n(1), i = n(20), o = (n(13), n(2));
    class s {
      constructor(t, e, n, r) {
        this.name = t, this.type = e, this._evaluate = n, this.args = r
      }
      evaluate(t) {
        return this._evaluate(t, this.args)
      }
      eachChild(t) {
        this.args.forEach(t)
      }
      possibleOutputs() {
        return [void 0]
      }
      static parse(t, e) {
        const n = t[0],
          a = s.definitions[n];
        if (!a) return e.error(`Unknown expression "${n}". If you wanted a literal array, use ["literal", [...]].`, 0);
        const u = Array.isArray(a) ? a[0] : a.type,
          l = Array.isArray(a) ? [
            [a[1], a[2]]
          ] : a.overloads,
          c = l.filter(([e]) => !Array.isArray(e) || e.length === t.length - 1),
          h = [];
        for (let n = 1; n < t.length; n++) {
          const r = t[n];
          let i;
          if (1 === c.length) {
            const t = c[0][0];
            i = Array.isArray(t) ? t[n - 1] : t.type
          }
          const o = e.parse(r, 1 + h.length, i);
          if (!o) return null;
          h.push(o)
        }
        let p = null;
        for (const [t, r] of c)
          if (p = new i(e.registry, e.path, null, e.scope), Array.isArray(t) && t.length !== h.length) p.error(`Expected ${t.length} arguments, but found ${h.length} instead.`);
          else {
            for (let e = 0; e < h.length; e++) {
              const n = Array.isArray(t) ? t[e] : t.type,
                r = h[e];
              p.concat(e + 1).checkSubtype(n, r.type)
            }
            if (0 === p.errors.length) return new s(n, u, r, h)
          } if (o(!p || p.errors.length > 0), 1 === c.length) e.errors.push.apply(e.errors, p.errors);
        else {
          const t = (c.length ? c : l).map(([t]) => {
              return e = t, Array.isArray(e) ? `(${e.map(r).join(", ")})` : `(${r(e.type)}...)`;
              var e
            }).join(" | "),
            n = h.map(t => r(t.type)).join(", ");
          e.error(`Expected arguments of type ${t}, but found (${n}) instead.`)
        }
        return null
      }
      static register(t, e) {
        o(!s.definitions), s.definitions = e;
        for (const n in e) t[n] = s
      }
    }
    t.exports = {
      CompoundExpression: s,
      varargs: function (t) {
        return {
          type: t
        }
      }
    }
  }, function (t, e, n) {
    const r = n(9).wrap;
    class i {
      constructor(t, e) {
        if (isNaN(t) || isNaN(e)) throw new Error(`Invalid LngLat object: (${t}, ${e})`);
        if (this.lng = +t, this.lat = +e, this.lat > 90 || this.lat < -90) throw new Error("Invalid LngLat latitude value: must be between -90 and 90")
      }
      wrap() {
        return new i(r(this.lng, -180, 180), this.lat)
      }
      toArray() {
        return [this.lng, this.lat]
      }
      toString() {
        return `LngLat(${this.lng}, ${this.lat})`
      }
      toBounds(t) {
        const e = 360 * t / 40075017,
          r = e / Math.cos(Math.PI / 180 * this.lat);
        return new(n(12))(new i(this.lng - r, this.lat - e), new i(this.lng + r, this.lat + e))
      }
      static convert(t) {
        if (t instanceof i) return t;
        if (Array.isArray(t) && (2 === t.length || 3 === t.length)) return new i(Number(t[0]), Number(t[1]));
        if (!Array.isArray(t) && "object" == typeof t && null !== t) return new i(Number(t.lng), Number(t.lat));
        throw new Error("`LngLatLike` argument must be specified as a LngLat instance, an object {lng: <lng>, lat: <lat>}, or an array of [<lng>, <lat>]")
      }
    }
    t.exports = i
  }, function (t, e, n) {
    const r = n(15),
      i = n(10);
    n(16);
    e.easeCubicInOut = function (t) {
      if (t <= 0) return 0;
      if (t >= 1) return 1;
      const e = t * t,
        n = e * t;
      return 4 * (t < .5 ? n : 3 * (t - e) + n - .75)
    }, e.bezier = function (t, e, n, i) {
      const o = new r(t, e, n, i);
      return function (t) {
        return o.solve(t)
      }
    }, e.ease = e.bezier(.25, .1, .25, 1), e.clamp = function (t, e, n) {
      return Math.min(n, Math.max(e, t))
    }, e.wrap = function (t, e, n) {
      const r = n - e,
        i = ((t - e) % r + r) % r + e;
      return i === e ? n : i
    }, e.asyncAll = function (t, e, n) {
      if (!t.length) return n(null, []);
      let r = t.length;
      const i = new Array(t.length);
      let o = null;
      t.forEach((t, s) => {
        e(t, (t, e) => {
          t && (o = t), i[s] = e, 0 == --r && n(o, i)
        })
      })
    }, e.values = function (t) {
      const e = [];
      for (const n in t) e.push(t[n]);
      return e
    }, e.keysDifference = function (t, e) {
      const n = [];
      for (const r in t) r in e || n.push(r);
      return n
    }, e.extend = function (t, ...e) {
      for (const n of e)
        for (const e in n) t[e] = n[e];
      return t
    }, e.pick = function (t, e) {
      const n = {};
      for (let r = 0; r < e.length; r++) {
        const i = e[r];
        i in t && (n[i] = t[i])
      }
      return n
    };
    let o = 1;
    e.uniqueId = function () {
      return o++
    }, e.bindAll = function (t, e) {
      t.forEach(t => {
        e[t] && (e[t] = e[t].bind(e))
      })
    }, e.getCoordinatesCenter = function (t) {
      let e = 1 / 0,
        n = 1 / 0,
        r = -1 / 0,
        o = -1 / 0;
      for (let i = 0; i < t.length; i++) e = Math.min(e, t[i].column), n = Math.min(n, t[i].row), r = Math.max(r, t[i].column), o = Math.max(o, t[i].row);
      const s = r - e,
        a = o - n,
        u = Math.max(s, a),
        l = Math.max(0, Math.floor(-Math.log(u) / Math.LN2));
      return new i((e + r) / 2, (n + o) / 2, 0).zoomTo(l)
    }, e.endsWith = function (t, e) {
      return -1 !== t.indexOf(e, t.length - e.length)
    }, e.mapObject = function (t, e, n) {
      const r = {};
      for (const i in t) r[i] = e.call(n || this, t[i], i, t);
      return r
    }, e.filterObject = function (t, e, n) {
      const r = {};
      for (const i in t) e.call(n || this, t[i], i, t) && (r[i] = t[i]);
      return r
    }, e.deepEqual = n(37), e.clone = function (t) {
      return Array.isArray(t) ? t.map(e.clone) : "object" == typeof t && t ? e.mapObject(t, e.clone) : t
    }, e.arraysIntersect = function (t, e) {
      for (let n = 0; n < t.length; n++)
        if (e.indexOf(t[n]) >= 0) return !0;
      return !1
    };
    const s = {};
    e.warnOnce = function (t) {
      s[t] || ("undefined" != typeof console && console.warn(t), s[t] = !0)
    }, e.isCounterClockwise = function (t, e, n) {
      return (n.y - t.y) * (e.x - t.x) > (e.y - t.y) * (n.x - t.x)
    }, e.calculateSignedArea = function (t) {
      let e = 0;
      for (let n, r, i = 0, o = t.length, s = o - 1; i < o; s = i++) n = t[i], r = t[s], e += (r.x - n.x) * (n.y + r.y);
      return e
    }, e.isClosedPolygon = function (t) {
      if (t.length < 4) return !1;
      const n = t[0],
        r = t[t.length - 1];
      return !(Math.abs(n.x - r.x) > 0 || Math.abs(n.y - r.y) > 0) && Math.abs(e.calculateSignedArea(t)) > .01
    }, e.sphericalToCartesian = function ([t, e, n]) {
      return e += 90, e *= Math.PI / 180, n *= Math.PI / 180, {
        x: t * Math.cos(e) * Math.sin(n),
        y: t * Math.sin(e) * Math.sin(n),
        z: t * Math.cos(n)
      }
    }, e.parseCacheControl = function (t) {
      const e = {};
      if (t.replace(/(?:^|(?:\s*\,\s*))([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)(?:\=(?:([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)|(?:\"((?:[^"\\]|\\.)*)\")))?/g, (t, n, r, i) => {
          const o = r || i;
          return e[n] = !o || o.toLowerCase(), ""
        }), e["max-age"]) {
        const t = parseInt(e["max-age"], 10);
        isNaN(t) ? delete e["max-age"] : e["max-age"] = t
      }
      return e
    }
  }, function (t, e) {
    class n {
      constructor(t, e, n) {
        this.column = t, this.row = e, this.zoom = n
      }
      clone() {
        return new n(this.column, this.row, this.zoom)
      }
      zoomTo(t) {
        return this.clone()._zoomTo(t)
      }
      sub(t) {
        return this.clone()._sub(t)
      }
      _zoomTo(t) {
        const e = Math.pow(2, t - this.zoom);
        return this.column *= e, this.row *= e, this.zoom = t, this
      }
      _sub(t) {
        return t = t.zoomTo(this.zoom), this.column -= t.column, this.row -= t.row, this
      }
    }
    t.exports = n
  }, function (t, e, n) {
    const r = n(6);

    function i(t, e, n) {
      return t * (1 - n) + e * n
    }
    t.exports = {
      number: i,
      color: function (t, e, n) {
        return new r(i(t.r, e.r, n), i(t.g, e.g, n), i(t.b, e.b, n), i(t.a, e.a, n))
      },
      array: function (t, e, n) {
        return t.map((t, r) => i(t, e[r], n))
      }
    }
  }, function (t, e, n) {
    const r = n(8);
    class i {
      constructor(t, e) {
        t && (e ? this.setSouthWest(t).setNorthEast(e) : 4 === t.length ? this.setSouthWest([t[0], t[1]]).setNorthEast([t[2], t[3]]) : this.setSouthWest(t[0]).setNorthEast(t[1]))
      }
      setNorthEast(t) {
        return this._ne = t instanceof r ? new r(t.lng, t.lat) : r.convert(t), this
      }
      setSouthWest(t) {
        return this._sw = t instanceof r ? new r(t.lng, t.lat) : r.convert(t), this
      }
      extend(t) {
        const e = this._sw,
          n = this._ne;
        let o, s;
        if (t instanceof r) o = t, s = t;
        else {
          if (!(t instanceof i)) return Array.isArray(t) ? t.every(Array.isArray) ? this.extend(i.convert(t)) : this.extend(r.convert(t)) : this;
          if (o = t._sw, s = t._ne, !o || !s) return this
        }
        return e || n ? (e.lng = Math.min(o.lng, e.lng), e.lat = Math.min(o.lat, e.lat), n.lng = Math.max(s.lng, n.lng), n.lat = Math.max(s.lat, n.lat)) : (this._sw = new r(o.lng, o.lat), this._ne = new r(s.lng, s.lat)), this
      }
      getCenter() {
        return new r((this._sw.lng + this._ne.lng) / 2, (this._sw.lat + this._ne.lat) / 2)
      }
      getSouthWest() {
        return this._sw
      }
      getNorthEast() {
        return this._ne
      }
      getNorthWest() {
        return new r(this.getWest(), this.getNorth())
      }
      getSouthEast() {
        return new r(this.getEast(), this.getSouth())
      }
      getWest() {
        return this._sw.lng
      }
      getSouth() {
        return this._sw.lat
      }
      getEast() {
        return this._ne.lng
      }
      getNorth() {
        return this._ne.lat
      }
      toArray() {
        return [this._sw.toArray(), this._ne.toArray()]
      }
      toString() {
        return `LngLatBounds(${this._sw.toString()}, ${this._ne.toString()})`
      }
      isEmpty() {
        return !(this._sw && this._ne)
      }
      static convert(t) {
        return !t || t instanceof i ? t : new i(t)
      }
    }
    t.exports = i
  }, function (t, e, n) {
    const r = n(2),
      i = n(21),
      {
        Color: o
      } = n(3),
      s = ["Unknown", "Point", "LineString", "Polygon"];
    t.exports = class {
      constructor() {
        this.scope = new i, this._parseColorCache = {}
      }
      id() {
        return this.feature && "id" in this.feature ? this.feature.id : null
      }
      geometryType() {
        return this.feature ? "number" == typeof this.feature.type ? s[this.feature.type] : this.feature.type : null
      }
      properties() {
        return this.feature && this.feature.properties || {}
      }
      pushScope(t) {
        this.scope = this.scope.concat(t)
      }
      popScope() {
        r(this.scope.parent), this.scope = this.scope.parent
      }
      parseColor(t) {
        let e = this._parseColorCache[t];
        return e || (e = this._parseColorCache[t] = o.parse(t)), e
      }
    }
  }, function (t, e, n) {
    const r = n(15),
      i = n(11),
      {
        toString: o,
        NumberType: s
      } = n(1),
      {
        findStopLessThanOrEqualTo: a
      } = n(29);
    class u {
      constructor(t, e, n, r) {
        this.type = t, this.interpolation = e, this.input = n, this.labels = [], this.outputs = [];
        for (const [t, e] of r) this.labels.push(t), this.outputs.push(e)
      }
      static interpolationFactor(t, e, n, i) {
        let o = 0;
        if ("exponential" === t.name) o = l(e, t.base, n, i);
        else if ("linear" === t.name) o = l(e, 1, n, i);
        else if ("cubic-bezier" === t.name) {
          const s = t.controlPoints;
          o = new r(s[0], s[1], s[2], s[3]).solve(l(e, 1, n, i))
        }
        return o
      }
      static parse(t, e) {
        let [, n, r, ...i] = t;
        if (!Array.isArray(n) || 0 === n.length) return e.error("Expected an interpolation type expression.", 1);
        if ("linear" === n[0]) n = {
          name: "linear"
        };
        else if ("exponential" === n[0]) {
          const t = n[1];
          if ("number" != typeof t) return e.error("Exponential interpolation requires a numeric base.", 1, 1);
          n = {
            name: "exponential",
            base: t
          }
        } else {
          if ("cubic-bezier" !== n[0]) return e.error("Unknown interpolation type " + String(n[0]), 1, 0); {
            const t = n.slice(1);
            if (4 !== t.length || t.some(t => "number" != typeof t || t < 0 || t > 1)) return e.error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1.", 1);
            n = {
              name: "cubic-bezier",
              controlPoints: t
            }
          }
        }
        if (t.length - 1 < 4) return e.error(`Expected at least 4 arguments, but found only ${t.length-1}.`);
        if ((t.length - 1) % 2 != 0) return e.error("Expected an even number of arguments.");
        if (r = e.parse(r, 2, s), !r) return null;
        const a = [];
        let l = null;
        e.expectedType && "value" !== e.expectedType.kind && (l = e.expectedType);
        for (let t = 0; t < i.length; t += 2) {
          const n = i[t],
            r = i[t + 1],
            o = t + 3,
            s = t + 4;
          if ("number" != typeof n) return e.error('Input/output pairs for "interpolate" expressions must be defined using literal numeric values (not computed expressions) for the input values.', o);
          if (a.length && a[a.length - 1][0] >= n) return e.error('Input/output pairs for "interpolate" expressions must be arranged with input values in strictly ascending order.', o);
          const u = e.parse(r, s, l);
          if (!u) return null;
          l = l || u.type, a.push([n, u])
        }
        return "number" === l.kind || "color" === l.kind || "array" === l.kind && "number" === l.itemType.kind && "number" == typeof l.N ? new u(l, n, r, a) : e.error(`Type ${o(l)} is not interpolatable.`)
      }
      evaluate(t) {
        const e = this.labels,
          n = this.outputs;
        if (1 === e.length) return n[0].evaluate(t);
        const r = this.input.evaluate(t);
        if (r <= e[0]) return n[0].evaluate(t);
        const o = e.length;
        if (r >= e[o - 1]) return n[o - 1].evaluate(t);
        const s = a(e, r),
          l = e[s],
          c = e[s + 1],
          h = u.interpolationFactor(this.interpolation, r, l, c),
          p = n[s].evaluate(t),
          f = n[s + 1].evaluate(t);
        return i[this.type.kind.toLowerCase()](p, f, h)
      }
      eachChild(t) {
        t(this.input);
        for (const e of this.outputs) t(e)
      }
      possibleOutputs() {
        return [].concat(...this.outputs.map(t => t.possibleOutputs()))
      }
    }

    function l(t, e, n, r) {
      const i = r - n,
        o = t - n;
      return 0 === i ? 0 : 1 === e ? o / i : (Math.pow(e, o) - 1) / (Math.pow(e, i) - 1)
    }
    t.exports = u
  }, function (t, e) {
    function n(t, e, n, r) {
      this.cx = 3 * t, this.bx = 3 * (n - t) - this.cx, this.ax = 1 - this.cx - this.bx, this.cy = 3 * e, this.by = 3 * (r - e) - this.cy, this.ay = 1 - this.cy - this.by, this.p1x = t, this.p1y = r, this.p2x = n, this.p2y = r
    }
    t.exports = n, n.prototype.sampleCurveX = function (t) {
      return ((this.ax * t + this.bx) * t + this.cx) * t
    }, n.prototype.sampleCurveY = function (t) {
      return ((this.ay * t + this.by) * t + this.cy) * t
    }, n.prototype.sampleCurveDerivativeX = function (t) {
      return (3 * this.ax * t + 2 * this.bx) * t + this.cx
    }, n.prototype.solveCurveX = function (t, e) {
      var n, r, i, o, s;
      for (void 0 === e && (e = 1e-6), i = t, s = 0; s < 8; s++) {
        if (o = this.sampleCurveX(i) - t, Math.abs(o) < e) return i;
        var a = this.sampleCurveDerivativeX(i);
        if (Math.abs(a) < 1e-6) break;
        i -= o / a
      }
      if ((i = t) < (n = 0)) return n;
      if (i > (r = 1)) return r;
      for (; n < r;) {
        if (o = this.sampleCurveX(i), Math.abs(o - t) < e) return i;
        t > o ? n = i : r = i, i = .5 * (r - n) + n
      }
      return i
    }, n.prototype.solve = function (t, e) {
      return this.sampleCurveY(this.solveCurveX(t, e))
    }
  }, function (t, e, n) {
    "use strict";

    function r(t, e) {
      this.x = t, this.y = e
    }
    t.exports = r, r.prototype = {
      clone: function () {
        return new r(this.x, this.y)
      },
      add: function (t) {
        return this.clone()._add(t)
      },
      sub: function (t) {
        return this.clone()._sub(t)
      },
      multByPoint: function (t) {
        return this.clone()._multByPoint(t)
      },
      divByPoint: function (t) {
        return this.clone()._divByPoint(t)
      },
      mult: function (t) {
        return this.clone()._mult(t)
      },
      div: function (t) {
        return this.clone()._div(t)
      },
      rotate: function (t) {
        return this.clone()._rotate(t)
      },
      rotateAround: function (t, e) {
        return this.clone()._rotateAround(t, e)
      },
      matMult: function (t) {
        return this.clone()._matMult(t)
      },
      unit: function () {
        return this.clone()._unit()
      },
      perp: function () {
        return this.clone()._perp()
      },
      round: function () {
        return this.clone()._round()
      },
      mag: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y)
      },
      equals: function (t) {
        return this.x === t.x && this.y === t.y
      },
      dist: function (t) {
        return Math.sqrt(this.distSqr(t))
      },
      distSqr: function (t) {
        var e = t.x - this.x,
          n = t.y - this.y;
        return e * e + n * n
      },
      angle: function () {
        return Math.atan2(this.y, this.x)
      },
      angleTo: function (t) {
        return Math.atan2(this.y - t.y, this.x - t.x)
      },
      angleWith: function (t) {
        return this.angleWithSep(t.x, t.y)
      },
      angleWithSep: function (t, e) {
        return Math.atan2(this.x * e - this.y * t, this.x * t + this.y * e)
      },
      _matMult: function (t) {
        var e = t[0] * this.x + t[1] * this.y,
          n = t[2] * this.x + t[3] * this.y;
        return this.x = e, this.y = n, this
      },
      _add: function (t) {
        return this.x += t.x, this.y += t.y, this
      },
      _sub: function (t) {
        return this.x -= t.x, this.y -= t.y, this
      },
      _mult: function (t) {
        return this.x *= t, this.y *= t, this
      },
      _div: function (t) {
        return this.x /= t, this.y /= t, this
      },
      _multByPoint: function (t) {
        return this.x *= t.x, this.y *= t.y, this
      },
      _divByPoint: function (t) {
        return this.x /= t.x, this.y /= t.y, this
      },
      _unit: function () {
        return this._div(this.mag()), this
      },
      _perp: function () {
        var t = this.y;
        return this.y = this.x, this.x = -t, this
      },
      _rotate: function (t) {
        var e = Math.cos(t),
          n = Math.sin(t),
          r = e * this.x - n * this.y,
          i = n * this.x + e * this.y;
        return this.x = r, this.y = i, this
      },
      _rotateAround: function (t, e) {
        var n = Math.cos(t),
          r = Math.sin(t),
          i = e.x + n * (this.x - e.x) - r * (this.y - e.y),
          o = e.y + r * (this.x - e.x) + n * (this.y - e.y);
        return this.x = i, this.y = o, this
      },
      _round: function () {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this
      }
    }, r.convert = function (t) {
      return t instanceof r ? t : Array.isArray(t) ? new r(t[0], t[1]) : t
    }
  }, function (t, e, n) {
    const r = n(42),
      i = n(2),
      {
        register: o
      } = n(49),
      s = n(10);
    class a {
      constructor(t, e, n) {
        i(t >= 0 && t <= 25), i(e >= 0 && e < Math.pow(2, t)), i(n >= 0 && n < Math.pow(2, t)), this.z = t, this.x = e, this.y = n, this.key = c(0, t, e, n)
      }
      equals(t) {
        return this.z === t.z && this.x === t.x && this.y === t.y
      }
      url(t, e) {
        const n = r.getTileBBox(this.x, this.y, this.z),
          i = function (t, e, n) {
            let r, i = "";
            for (let o = t; o > 0; o--) r = 1 << o - 1, i += (e & r ? 1 : 0) + (n & r ? 2 : 0);
            return i
          }(this.z, this.x, this.y);
        return t[(this.x + this.y) % t.length].replace("{prefix}", (this.x % 16).toString(16) + (this.y % 16).toString(16)).replace("{z}", String(this.z)).replace("{x}", String(this.x)).replace("{y}", String("tms" === e ? Math.pow(2, this.z) - this.y - 1 : this.y)).replace("{quadkey}", i).replace("{bbox-epsg-3857}", n)
      }
    }
    class u {
      constructor(t, e) {
        this.wrap = t, this.canonical = e, this.key = c(t, e.z, e.x, e.y)
      }
    }
    class l {
      constructor(t, e, n, r, o) {
        i(t >= n), this.overscaledZ = t, this.wrap = e, this.canonical = new a(n, +r, +o), this.key = c(e, t, r, o)
      }
      scaledTo(t) {
        i(t <= this.overscaledZ);
        const e = this.canonical.z - t;
        return t > this.canonical.z ? new l(t, this.wrap, this.canonical.z, this.canonical.x, this.canonical.y) : new l(t, this.wrap, t, this.canonical.x >> e, this.canonical.y >> e)
      }
      isChildOf(t) {
        const e = this.canonical.z - t.canonical.z;
        return 0 === t.overscaledZ || t.overscaledZ < this.overscaledZ && t.canonical.x === this.canonical.x >> e && t.canonical.y === this.canonical.y >> e
      }
      children(t) {
        if (this.overscaledZ >= t) return [new l(this.overscaledZ + 1, this.wrap, this.canonical.z, this.canonical.x, this.canonical.y)];
        const e = this.canonical.z + 1,
          n = 2 * this.canonical.x,
          r = 2 * this.canonical.y;
        return [new l(e, this.wrap, e, n, r), new l(e, this.wrap, e, n + 1, r), new l(e, this.wrap, e, n, r + 1), new l(e, this.wrap, e, n + 1, r + 1)]
      }
      isLessThan(t) {
        return this.wrap < t.wrap || !(this.wrap > t.wrap) && (this.overscaledZ < t.overscaledZ || !(this.overscaledZ > t.overscaledZ) && (this.canonical.x < t.canonical.x || !(this.canonical.x > t.canonical.x) && this.canonical.y < t.canonical.y))
      }
      wrapped() {
        return new l(this.overscaledZ, 0, this.canonical.z, this.canonical.x, this.canonical.y)
      }
      overscaleFactor() {
        return Math.pow(2, this.overscaledZ - this.canonical.z)
      }
      toUnwrapped() {
        return new u(this.wrap, this.canonical)
      }
      toString() {
        return `${this.overscaledZ}/${this.canonical.x}/${this.canonical.y}`
      }
      toCoordinate() {
        return new s(this.canonical.x + Math.pow(2, this.wrap), this.canonical.y, this.canonical.z)
      }
    }

    function c(t, e, n, r) {
      (t *= 2) < 0 && (t = -1 * t - 1);
      const i = 1 << e;
      return 32 * (i * i * t + i * r + n) + e
    }
    o("CanonicalTileID", a), o("OverscaledTileID", l, {
      omit: ["posMatrix"]
    }), t.exports = {
      CanonicalTileID: a,
      OverscaledTileID: l,
      UnwrappedTileID: u
    }
  }, function (t, e) {
    t.exports = function (t, ...e) {
      for (const n of e)
        for (const e in n) t[e] = n[e];
      return t
    }
  }, function (t, e) {
    class n extends Error {
      constructor(t, e) {
        super(e), this.message = e, this.key = t
      }
    }
    t.exports = n
  }, function (t, e, n) {
    const r = n(21),
      {
        checkSubtype: i
      } = n(1),
      o = n(19),
      s = n(22),
      a = n(23),
      u = n(24),
      l = n(25);
    class c {
      constructor(t, e = [], n, i = new r, o = []) {
        this.registry = t, this.path = e, this.key = e.map(t => `[${t}]`).join(""), this.scope = i, this.errors = o, this.expectedType = n
      }
      parse(t, e, r, i, o = {}) {
        let c = this;
        if (e && (c = c.concat(e, r, i)), null !== t && "string" != typeof t && "boolean" != typeof t && "number" != typeof t || (t = ["literal", t]), Array.isArray(t)) {
          if (0 === t.length) return c.error('Expected an array with at least one element. If you wanted a literal array, use ["literal", []].');
          const e = t[0];
          if ("string" != typeof e) return c.error(`Expression name must be a string, but found ${typeof e} instead. If you wanted a literal array, use ["literal", [...]].`, 0), null;
          const r = c.registry[e];
          if (r) {
            let e = r.parse(t, c);
            if (!e) return null;
            if (c.expectedType) {
              const t = c.expectedType,
                n = e.type;
              if ("string" !== t.kind && "number" !== t.kind && "boolean" !== t.kind || "value" !== n.kind)
                if ("array" === t.kind && "value" === n.kind) o.omitTypeAnnotations || (e = new u(t, e));
                else if ("color" !== t.kind || "value" !== n.kind && "string" !== n.kind) {
                if (c.checkSubtype(c.expectedType, e.type)) return null
              } else o.omitTypeAnnotations || (e = new l(t, [e]));
              else o.omitTypeAnnotations || (e = new a(t, [e]))
            }
            if (!(e instanceof s) && function (t) {
                const {
                  CompoundExpression: e
                } = n(7), {
                  isGlobalPropertyConstant: r,
                  isFeatureConstant: i
                } = n(26), o = n(27);
                if (t instanceof o) return !1;
                if (t instanceof e && "error" === t.name) return !1;
                let a = !0;
                if (t.eachChild(t => {
                    t instanceof s || (a = !1)
                  }), !a) return !1;
                return i(t) && r(t, ["zoom", "heatmap-density"])
              }(e)) {
              const t = new(n(13));
              try {
                e = new s(e.type, e.evaluate(t))
              } catch (t) {
                return c.error(t.message), null
              }
            }
            return e
          }
          return c.error(`Unknown expression "${e}". If you wanted a literal array, use ["literal", [...]].`, 0)
        }
        return void 0 === t ? c.error("'undefined' value invalid. Use null instead.") : "object" == typeof t ? c.error('Bare objects invalid. Use ["literal", {...}] instead.') : c.error(`Expected an array, but found ${typeof t} instead.`)
      }
      concat(t, e, n) {
        const r = "number" == typeof t ? this.path.concat(t) : this.path,
          i = n ? this.scope.concat(n) : this.scope;
        return new c(this.registry, r, e || null, i, this.errors)
      }
      error(t, ...e) {
        const n = `${this.key}${e.map(t=>`[${t}]`).join("")}`;
        this.errors.push(new o(n, t))
      }
      checkSubtype(t, e) {
        const n = i(t, e);
        return n && this.error(n), n
      }
    }
    t.exports = c
  }, function (t, e) {
    class n {
      constructor(t, e = []) {
        this.parent = t, this.bindings = {};
        for (const [t, n] of e) this.bindings[t] = n
      }
      concat(t) {
        return new n(this, t)
      }
      get(t) {
        if (this.bindings[t]) return this.bindings[t];
        if (this.parent) return this.parent.get(t);
        throw new Error(t + " not found in scope.")
      }
      has(t) {
        return !!this.bindings[t] || !!this.parent && this.parent.has(t)
      }
    }
    t.exports = n
  }, function (t, e, n) {
    const {
      isValue: r,
      typeOf: i
    } = n(3);
    class o {
      constructor(t, e) {
        this.type = t, this.value = e
      }
      static parse(t, e) {
        if (2 !== t.length) return e.error(`'literal' expression requires exactly one argument, but found ${t.length-1} instead.`);
        if (!r(t[1])) return e.error("invalid value");
        const n = t[1];
        let s = i(n);
        const a = e.expectedType;
        return "array" !== s.kind || 0 !== s.N || !a || "array" !== a.kind || "number" == typeof a.N && 0 !== a.N || (s = a), new o(s, n)
      }
      evaluate() {
        return this.value
      }
      eachChild() {}
      possibleOutputs() {
        return [this.value]
      }
    }
    t.exports = o
  }, function (t, e, n) {
    const r = n(2),
      {
        ObjectType: i,
        ValueType: o,
        StringType: s,
        NumberType: a,
        BooleanType: u
      } = n(1),
      l = n(5),
      {
        checkSubtype: c,
        toString: h
      } = n(1),
      {
        typeOf: p
      } = n(3),
      f = {
        string: s,
        number: a,
        boolean: u,
        object: i
      };
    class g {
      constructor(t, e) {
        this.type = t, this.args = e
      }
      static parse(t, e) {
        if (t.length < 2) return e.error("Expected at least one argument.");
        const n = t[0];
        r(f[n], n);
        const i = f[n],
          s = [];
        for (let n = 1; n < t.length; n++) {
          const r = e.parse(t[n], n, o);
          if (!r) return null;
          s.push(r)
        }
        return new g(i, s)
      }
      evaluate(t) {
        for (let e = 0; e < this.args.length; e++) {
          const n = this.args[e].evaluate(t);
          if (!c(this.type, p(n))) return n;
          if (e === this.args.length - 1) throw new l(`Expected value to be of type ${h(this.type)}, but found ${h(p(n))} instead.`)
        }
        return r(!1), null
      }
      eachChild(t) {
        this.args.forEach(t)
      }
      possibleOutputs() {
        return [].concat(...this.args.map(t => t.possibleOutputs()))
      }
    }
    t.exports = g
  }, function (t, e, n) {
    const {
      toString: r,
      array: i,
      ValueType: o,
      StringType: s,
      NumberType: a,
      BooleanType: u,
      checkSubtype: l
    } = n(1), {
      typeOf: c
    } = n(3), h = n(5), p = {
      string: s,
      number: a,
      boolean: u
    };
    class f {
      constructor(t, e) {
        this.type = t, this.input = e
      }
      static parse(t, e) {
        if (t.length < 2 || t.length > 4) return e.error(`Expected 1, 2, or 3 arguments, but found ${t.length-1} instead.`);
        let n, r;
        if (t.length > 2) {
          const r = t[1];
          if ("string" != typeof r || !(r in p)) return e.error('The item type argument of "array" must be one of string, number, boolean', 1);
          n = p[r]
        } else n = o;
        if (t.length > 3) {
          if ("number" != typeof t[2] || t[2] < 0 || t[2] !== Math.floor(t[2])) return e.error('The length argument to "array" must be a positive integer literal', 2);
          r = t[2]
        }
        const s = i(n, r),
          a = e.parse(t[t.length - 1], t.length - 1, o);
        return a ? new f(s, a) : null
      }
      evaluate(t) {
        const e = this.input.evaluate(t);
        if (l(this.type, c(e))) throw new h(`Expected value to be of type ${r(this.type)}, but found ${r(c(e))} instead.`);
        return e
      }
      eachChild(t) {
        t(this.input)
      }
      possibleOutputs() {
        return this.input.possibleOutputs()
      }
    }
    t.exports = f
  }, function (t, e, n) {
    const r = n(2),
      {
        ColorType: i,
        ValueType: o,
        NumberType: s
      } = n(1),
      {
        Color: a,
        validateRGBA: u
      } = n(3),
      l = n(5),
      c = {
        "to-number": s,
        "to-color": i
      };
    class h {
      constructor(t, e) {
        this.type = t, this.args = e
      }
      static parse(t, e) {
        if (t.length < 2) return e.error("Expected at least one argument.");
        const n = t[0];
        r(c[n], n);
        const i = c[n],
          s = [];
        for (let n = 1; n < t.length; n++) {
          const r = e.parse(t[n], n, o);
          if (!r) return null;
          s.push(r)
        }
        return new h(i, s)
      }
      evaluate(t) {
        if ("color" === this.type.kind) {
          let e, n;
          for (const r of this.args)
            if (e = r.evaluate(t), n = null, "string" == typeof e) {
              const n = t.parseColor(e);
              if (n) return n
            } else if (Array.isArray(e) && (n = e.length < 3 || e.length > 4 ? `Invalid rbga value ${JSON.stringify(e)}: expected an array containing either three or four numeric values.` : u(e[0], e[1], e[2], e[3]), !n)) return new a(e[0] / 255, e[1] / 255, e[2] / 255, e[3]);
          throw new l(n || `Could not parse color from value '${"string"==typeof e?e:JSON.stringify(e)}'`)
        } {
          let e = null;
          for (const n of this.args) {
            if (e = n.evaluate(t), null === e) continue;
            const r = Number(e);
            if (!isNaN(r)) return r
          }
          throw new l(`Could not convert ${JSON.stringify(e)} to number.`)
        }
      }
      eachChild(t) {
        this.args.forEach(t)
      }
      possibleOutputs() {
        return [].concat(...this.args.map(t => t.possibleOutputs()))
      }
    }
    t.exports = h
  }, function (t, e, n) {
    const {
      CompoundExpression: r
    } = n(7);
    t.exports = {
      isFeatureConstant: function t(e) {
        if (e instanceof r) {
          if ("get" === e.name && 1 === e.args.length) return !1;
          if ("has" === e.name && 1 === e.args.length) return !1;
          if ("properties" === e.name || "geometry-type" === e.name || "id" === e.name) return !1;
          if (/^filter-/.test(e.name)) return !1
        }
        let n = !0;
        return e.eachChild(e => {
          n && !t(e) && (n = !1)
        }), n
      },
      isGlobalPropertyConstant: function t(e, n) {
        if (e instanceof r && n.indexOf(e.name) >= 0) return !1;
        let i = !0;
        return e.eachChild(e => {
          i && !t(e, n) && (i = !1)
        }), i
      }
    }
  }, function (t, e) {
    class n {
      constructor(t, e) {
        this.type = e, this.name = t
      }
      static parse(t, e) {
        if (2 !== t.length || "string" != typeof t[1]) return e.error("'var' expression requires exactly one string literal argument.");
        const r = t[1];
        return e.scope.has(r) ? new n(r, e.scope.get(r).type) : e.error(`Unknown variable "${r}". Make sure "${r}" has been bound in an enclosing "let" expression before using it.`, 1)
      }
      evaluate(t) {
        return t.scope.get(this.name).evaluate(t)
      }
      eachChild() {}
      possibleOutputs() {
        return [void 0]
      }
    }
    t.exports = n
  }, function (t, e, n) {
    const {
      NumberType: r
    } = n(1), {
      findStopLessThanOrEqualTo: i
    } = n(29);
    class o {
      constructor(t, e, n) {
        this.type = t, this.input = e, this.labels = [], this.outputs = [];
        for (const [t, e] of n) this.labels.push(t), this.outputs.push(e)
      }
      static parse(t, e) {
        let [, n, ...i] = t;
        if (t.length - 1 < 4) return e.error(`Expected at least 4 arguments, but found only ${t.length-1}.`);
        if ((t.length - 1) % 2 != 0) return e.error("Expected an even number of arguments.");
        if (n = e.parse(n, 1, r), !n) return null;
        const s = [];
        let a = null;
        e.expectedType && "value" !== e.expectedType.kind && (a = e.expectedType), i.unshift(-1 / 0);
        for (let t = 0; t < i.length; t += 2) {
          const n = i[t],
            r = i[t + 1],
            o = t + 1,
            u = t + 2;
          if ("number" != typeof n) return e.error('Input/output pairs for "step" expressions must be defined using literal numeric values (not computed expressions) for the input values.', o);
          if (s.length && s[s.length - 1][0] >= n) return e.error('Input/output pairs for "step" expressions must be arranged with input values in strictly ascending order.', o);
          const l = e.parse(r, u, a);
          if (!l) return null;
          a = a || l.type, s.push([n, l])
        }
        return new o(a, n, s)
      }
      evaluate(t) {
        const e = this.labels,
          n = this.outputs;
        if (1 === e.length) return n[0].evaluate(t);
        const r = this.input.evaluate(t);
        if (r <= e[0]) return n[0].evaluate(t);
        const o = e.length;
        return r >= e[o - 1] ? n[o - 1].evaluate(t) : n[i(e, r)].evaluate(t)
      }
      eachChild(t) {
        t(this.input);
        for (const e of this.outputs) t(e)
      }
      possibleOutputs() {
        return [].concat(...this.outputs.map(t => t.possibleOutputs()))
      }
    }
    t.exports = o
  }, function (t, e, n) {
    const r = n(5);
    t.exports = {
      findStopLessThanOrEqualTo: function (t, e) {
        let n, i, o = 0,
          s = t.length - 1,
          a = 0;
        for (; o <= s;) {
          if (a = Math.floor((o + s) / 2), n = t[a], i = t[a + 1], e === n || e > n && e < i) return a;
          if (n < e) o = a + 1;
          else {
            if (!(n > e)) throw new r("Input is not a number.");
            s = a - 1
          }
        }
        return Math.max(a - 1, 0)
      }
    }
  }, function (t, e, n) {
    const r = n(2),
      {
        checkSubtype: i,
        ValueType: o
      } = n(1);
    class s {
      constructor(t, e) {
        this.type = t, this.args = e
      }
      static parse(t, e) {
        if (t.length < 2) return e.error("Expectected at least one argument.");
        let n = null;
        const a = e.expectedType;
        a && "value" !== a.kind && (n = a);
        const u = [];
        for (const r of t.slice(1)) {
          const t = e.parse(r, 1 + u.length, n, void 0, {
            omitTypeAnnotations: !0
          });
          if (!t) return null;
          n = n || t.type, u.push(t)
        }
        r(n);
        const l = a && u.some(t => i(a, t.type));
        return new s(l ? o : n, u)
      }
      evaluate(t) {
        let e = null;
        for (const n of this.args)
          if (e = n.evaluate(t), null !== e) break;
        return e
      }
      eachChild(t) {
        this.args.forEach(t)
      }
      possibleOutputs() {
        return [].concat(...this.args.map(t => t.possibleOutputs()))
      }
    }
    t.exports = s
  }, function (t, e) {
    class n {
      constructor(t, e) {
        this.type = e.type, this.bindings = [].concat(t), this.result = e
      }
      evaluate(t) {
        t.pushScope(this.bindings);
        const e = this.result.evaluate(t);
        return t.popScope(), e
      }
      eachChild(t) {
        for (const e of this.bindings) t(e[1]);
        t(this.result)
      }
      static parse(t, e) {
        if (t.length < 4) return e.error(`Expected at least 3 arguments, but found ${t.length-1} instead.`);
        const r = [];
        for (let n = 1; n < t.length - 1; n += 2) {
          const i = t[n];
          if ("string" != typeof i) return e.error(`Expected string, but found ${typeof i} instead.`, n);
          if (/[^a-zA-Z0-9_]/.test(i)) return e.error("Variable names must contain only alphanumeric characters or '_'.", n);
          const o = e.parse(t[n + 1], n + 1);
          if (!o) return null;
          r.push([i, o])
        }
        const i = e.parse(t[t.length - 1], t.length - 1, void 0, r);
        return i ? new n(r, i) : null
      }
      possibleOutputs() {
        return this.result.possibleOutputs()
      }
    }
    t.exports = n
  }, function (t, e, n) {
    const {
      NumberType: r,
      StringType: i,
      BooleanType: o,
      ColorType: s,
      ObjectType: a,
      ValueType: u,
      ErrorType: l,
      array: c,
      toString: h
    } = n(1), {
      typeOf: p,
      Color: f,
      validateRGBA: g
    } = n(3), {
      CompoundExpression: d,
      varargs: y
    } = n(7), _ = n(5), m = n(31), v = n(27), x = n(22), E = n(23), b = n(24), I = n(25), N = n(52), w = n(53), C = n(54), S = n(28), L = n(14), O = n(30), {
      Equals: T,
      NotEquals: M
    } = n(55), P = {
      "==": T,
      "!=": M,
      array: b,
      at: N,
      boolean: E,
      case: C,
      coalesce: O,
      interpolate: L,
      let: m,
      literal: x,
      match: w,
      number: E,
      object: E,
      step: S,
      string: E,
      "to-color": I,
      "to-number": I,
      var: v
    };

    function R(t, [e, n, r, i]) {
      e = e.evaluate(t), n = n.evaluate(t), r = r.evaluate(t);
      const o = i ? i.evaluate(t) : 1,
        s = g(e, n, r, o);
      if (s) throw new _(s);
      return new f(e / 255 * o, n / 255 * o, r / 255 * o, o)
    }

    function D(t, e) {
      return t in e
    }

    function A(t, e) {
      const n = e[t];
      return void 0 === n ? null : n
    }

    function F(t, [e]) {
      return e.evaluate(t).length
    }

    function G(t, [e, n]) {
      return e.evaluate(t) < n.evaluate(t)
    }

    function z(t, [e, n]) {
      return e.evaluate(t) > n.evaluate(t)
    }

    function q(t, [e, n]) {
      return e.evaluate(t) <= n.evaluate(t)
    }

    function B(t, [e, n]) {
      return e.evaluate(t) >= n.evaluate(t)
    }
    d.register(P, {
      error: [l, [i], (t, [e]) => {
        throw new _(e.evaluate(t))
      }],
      typeof: [i, [u], (t, [e]) => h(p(e.evaluate(t)))],
      "to-string": [i, [u], (t, [e]) => {
        const n = typeof (e = e.evaluate(t));
        return null === e || "string" === n || "number" === n || "boolean" === n ? String(e) : e instanceof f ? e.toString() : JSON.stringify(e)
      }],
      "to-boolean": [o, [u], (t, [e]) => Boolean(e.evaluate(t))],
      "to-rgba": [c(r, 4), [s], (t, [e]) => {
        const {
          r: n,
          g: r,
          b: i,
          a: o
        } = e.evaluate(t);
        return [255 * n / o, 255 * r / o, 255 * i / o, o]
      }],
      rgb: [s, [r, r, r], R],
      rgba: [s, [r, r, r, r], R],
      length: {
        type: r,
        overloads: [
          [
            [i], F
          ],
          [
            [c(u)], F
          ]
        ]
      },
      has: {
        type: o,
        overloads: [
          [
            [i], (t, [e]) => D(e.evaluate(t), t.properties())
          ],
          [
            [i, a], (t, [e, n]) => D(e.evaluate(t), n.evaluate(t))
          ]
        ]
      },
      get: {
        type: u,
        overloads: [
          [
            [i], (t, [e]) => A(e.evaluate(t), t.properties())
          ],
          [
            [i, a], (t, [e, n]) => A(e.evaluate(t), n.evaluate(t))
          ]
        ]
      },
      properties: [a, [], t => t.properties()],
      "geometry-type": [i, [], t => t.geometryType()],
      id: [u, [], t => t.id()],
      zoom: [r, [], t => t.globals.zoom],
      "heatmap-density": [r, [], t => t.globals.heatmapDensity || 0],
      "+": [r, y(r), (t, e) => {
        let n = 0;
        for (const r of e) n += r.evaluate(t);
        return n
      }],
      "*": [r, y(r), (t, e) => {
        let n = 1;
        for (const r of e) n *= r.evaluate(t);
        return n
      }],
      "-": {
        type: r,
        overloads: [
          [
            [r, r], (t, [e, n]) => e.evaluate(t) - n.evaluate(t)
          ],
          [
            [r], (t, [e]) => -e.evaluate(t)
          ]
        ]
      },
      "/": [r, [r, r], (t, [e, n]) => e.evaluate(t) / n.evaluate(t)],
      "%": [r, [r, r], (t, [e, n]) => e.evaluate(t) % n.evaluate(t)],
      ln2: [r, [], () => Math.LN2],
      pi: [r, [], () => Math.PI],
      e: [r, [], () => Math.E],
      "^": [r, [r, r], (t, [e, n]) => Math.pow(e.evaluate(t), n.evaluate(t))],
      sqrt: [r, [r], (t, [e]) => Math.sqrt(e.evaluate(t))],
      log10: [r, [r], (t, [e]) => Math.log10(e.evaluate(t))],
      ln: [r, [r], (t, [e]) => Math.log(e.evaluate(t))],
      log2: [r, [r], (t, [e]) => Math.log2(e.evaluate(t))],
      sin: [r, [r], (t, [e]) => Math.sin(e.evaluate(t))],
      cos: [r, [r], (t, [e]) => Math.cos(e.evaluate(t))],
      tan: [r, [r], (t, [e]) => Math.tan(e.evaluate(t))],
      asin: [r, [r], (t, [e]) => Math.asin(e.evaluate(t))],
      acos: [r, [r], (t, [e]) => Math.acos(e.evaluate(t))],
      atan: [r, [r], (t, [e]) => Math.atan(e.evaluate(t))],
      min: [r, y(r), (t, e) => Math.min(...e.map(e => e.evaluate(t)))],
      max: [r, y(r), (t, e) => Math.max(...e.map(e => e.evaluate(t)))],
      "filter-==": [o, [i, u], (t, [e, n]) => t.properties()[e.value] === n.value],
      "filter-id-==": [o, [u], (t, [e]) => t.id() === e.value],
      "filter-type-==": [o, [i], (t, [e]) => t.geometryType() === e.value],
      "filter-<": [o, [i, u], (t, [e, n]) => {
        const r = t.properties()[e.value],
          i = n.value;
        return typeof r == typeof i && r < i
      }],
      "filter-id-<": [o, [u], (t, [e]) => {
        const n = t.id(),
          r = e.value;
        return typeof n == typeof r && n < r
      }],
      "filter->": [o, [i, u], (t, [e, n]) => {
        const r = t.properties()[e.value],
          i = n.value;
        return typeof r == typeof i && r > i
      }],
      "filter-id->": [o, [u], (t, [e]) => {
        const n = t.id(),
          r = e.value;
        return typeof n == typeof r && n > r
      }],
      "filter-<=": [o, [i, u], (t, [e, n]) => {
        const r = t.properties()[e.value],
          i = n.value;
        return typeof r == typeof i && r <= i
      }],
      "filter-id-<=": [o, [u], (t, [e]) => {
        const n = t.id(),
          r = e.value;
        return typeof n == typeof r && n <= r
      }],
      "filter->=": [o, [i, u], (t, [e, n]) => {
        const r = t.properties()[e.value],
          i = n.value;
        return typeof r == typeof i && r >= i
      }],
      "filter-id->=": [o, [u], (t, [e]) => {
        const n = t.id(),
          r = e.value;
        return typeof n == typeof r && n >= r
      }],
      "filter-has": [o, [u], (t, [e]) => e.value in t.properties()],
      "filter-has-id": [o, [], t => null !== t.id()],
      "filter-type-in": [o, [c(i)], (t, [e]) => e.value.indexOf(t.geometryType()) >= 0],
      "filter-id-in": [o, [c(u)], (t, [e]) => e.value.indexOf(t.id()) >= 0],
      "filter-in-small": [o, [i, c(u)], (t, [e, n]) => n.value.indexOf(t.properties()[e.value]) >= 0],
      "filter-in-large": [o, [i, c(u)], (t, [e, n]) => function (t, e, n, r) {
        for (; n <= r;) {
          const i = n + r >> 1;
          if (e[i] === t) return !0;
          e[i] > t ? r = i - 1 : n = i + 1
        }
        return !1
      }(t.properties()[e.value], n.value, 0, n.value.length - 1)],
      ">": {
        type: o,
        overloads: [
          [
            [r, r], z
          ],
          [
            [i, i], z
          ]
        ]
      },
      "<": {
        type: o,
        overloads: [
          [
            [r, r], G
          ],
          [
            [i, i], G
          ]
        ]
      },
      ">=": {
        type: o,
        overloads: [
          [
            [r, r], B
          ],
          [
            [i, i], B
          ]
        ]
      },
      "<=": {
        type: o,
        overloads: [
          [
            [r, r], q
          ],
          [
            [i, i], q
          ]
        ]
      },
      all: {
        type: o,
        overloads: [
          [
            [o, o], (t, [e, n]) => e.evaluate(t) && n.evaluate(t)
          ],
          [y(o), (t, e) => {
            for (const n of e)
              if (!n.evaluate(t)) return !1;
            return !0
          }]
        ]
      },
      any: {
        type: o,
        overloads: [
          [
            [o, o], (t, [e, n]) => e.evaluate(t) || n.evaluate(t)
          ],
          [y(o), (t, e) => {
            for (const n of e)
              if (n.evaluate(t)) return !0;
            return !1
          }]
        ]
      },
      "!": [o, [o], (t, [e]) => !e.evaluate(t)],
      upcase: [i, [i], (t, [e]) => e.evaluate(t).toUpperCase()],
      downcase: [i, [i], (t, [e]) => e.evaluate(t).toLowerCase()],
      concat: [i, y(i), (t, e) => e.map(e => e.evaluate(t)).join("")]
    }), t.exports = P
  }, function (t, e, n) {
    function r() {}
    r.prototype.addTo = function () {}, r.prototype.onAdd = function () {}, r.prototype.onRemove = function () {}, r.prototype.on = function () {}, t.exports = {
      Map: n(34),
      LngLat: n(8),
      LngLatBounds: n(12),
      NavigationControl: r,
      ScaleControl: r,
      AttributionControl: r,
      GeolocateControl: r,
      Marker: n(64)
    }
  }, function (t, e, n) {
    var r = n(35),
      i = n(36),
      o = n(65),
      s = n(8),
      a = n(12),
      u = n(38),
      l = n(39),
      c = n(9),
      h = n(63),
      p = {
        doubleClickZoom: !0
      };

    function f(t) {
      return {
        name: t,
        secureConnectionStart: 0,
        redirectEnd: 0,
        redirectStart: 0,
        workerStart: 0,
        startTime: 2886.775,
        connectStart: 2886.775,
        connectEnd: 2886.875,
        fetchStart: 2886.875,
        domainLookupStart: 2886.775,
        domainLookupEnd: 2886.875,
        requestStart: 2890.3700000000003,
        responseStart: 2893.1650000000004,
        responseEnd: 2893.78,
        duration: 7.005000000000109,
        entryType: "resource",
        initiatorType: "xmlhttprequest",
        nextHopProtocol: "http/1.1",
        encodedBodySize: 155,
        decodedBodySize: 155,
        serverTiming: [],
        transferSize: 443
      }
    }
    var g = function (t) {
      var e = new u;
      this.on = e.on, this.once = e.once, this.off = e.off, this.fire = e.fire, this.listens = e.listens, this.layerData = [], this.options = c.extend(t || {}, p), this._events = {}, this._sources = {}, this._collectResourceTiming = !!this.options.collectResourceTiming, this.pitch = this.options.pitch || 0, this.bearing = this.options.bearing || 0, this.zoom = this.options.zoom || 0, this.bearing = this.options.bearing || 0, this.center = this.options.center ? new s(this.options.center[0], this.options.center[1]) : new s(0, 0), this.maxBounds = this.options.maxBounds || [0, 0, 0, 0], this.style = new h, this.transform = new l, this._controlCorners = {
        "top-left": {
          appendChild: function () {}
        }
      }, this.dragRotate = {
        enabled: !0,
        isEnabled: function () {
          return this.enabled
        },
        disable: function () {
          this.enabled = !1
        },
        enable: function () {
          this.enabled = !0
        }
      }, this.touchZoomRotate = {
        enabled: !0,
        isEnabled: function () {
          return this.enabled
        },
        disable: function () {
          this.enabled = !1
        },
        disableRotation: function () {
          this.enabled = !1
        },
        enable: function () {
          this.enabled = !0
        }
      }, setTimeout(function () {
        this.fire("load"), this.fire("style.load")
      }.bind(this), 0);
      for (var n, r = ["jumpTo", "panTo", "panBy", "setZoom", "fitBounds", "resetNorth", "snapToNorth", "setMaxBounds", "setMinZoom", "setMaxZoom", "setLayoutProperty", "setPaintProperty"], i = (n = this, function () {
          return n
        }), o = 0; o < r.length; o++) this[r[o]] = i
    };
    g.prototype.setBearing = function (t) {
      this.bearing = t, this.fire("rotate")
    }, g.prototype.getBearing = function () {
      return this.bearing
    }, g.prototype.addControl = function (t) {
      t.onAdd(this)
    }, g.prototype.getContainer = function () {
      var t = {
        parentNode: t,
        appendChild: function () {},
        removeChild: function () {},
        getElementsByClassName: function () {
          return [t]
        },
        addEventListener: function (t, e) {},
        removeEventListener: function () {},
        classList: {
          add: function () {},
          remove: function () {}
        }
      };
      return t
    }, g.prototype.getSource = function (t) {
      if (this._sources[t]) return {
        setData: function (e) {
          if (this._sources[t].data = e, "geojson" === this._sources[t].type) {
            const n = {
              type: "data",
              sourceDataType: "content",
              sourceId: t,
              isSourceLoaded: !0,
              dataType: "source",
              source: this._sources[t]
            };
            this._collectResourceTiming && e && "string" == typeof e && (n.resourceTiming = [f(e)]), this.fire("data", n)
          }
        }.bind(this),
        loadTile: function () {}
      }
    }, g.prototype.loaded = function () {
      return !0
    }, g.prototype.addSource = function (t, e) {
      if (this._sources[t] = e, "geojson" === e.type) {
        const n = {
          type: "data",
          sourceDataType: "metadata",
          sourceId: t,
          isSourceLoaded: !0,
          dataType: "source",
          source: e
        };
        this._collectResourceTiming && e.data && "string" == typeof e.data && (n.resourceTiming = [f(e.data)]), this.fire("data", n)
      }
    }, g.prototype.removeSource = function (t) {
      delete this._sources[t]
    }, g.prototype.addLayer = function (t, e) {
      this.layerData.push(t.id)
    }, g.prototype.removeLayer = function (t) {}, g.prototype.getLayer = function (t) {
      if (this.layerData.indexOf(t) > -1) return {
        serialize: () => ({}),
        id: t
      }
    }, g.prototype.getZoom = function () {
      return this.zoom
    }, g.prototype.getPitch = function () {
      return this.pitch
    }, g.prototype.setPitch = function (t) {
      this.pitch = t
    }, g.prototype.getCenter = function () {
      return this.center
    }, g.prototype.setCenter = function (t) {
      this.center = new s(t[0], t[1])
    }, g.prototype.getMaxBounds = function () {
      return this.maxBounds
    }, g.prototype.setMaxBounds = function (t) {
      this.maxBounds = t
    }, g.prototype.getBounds = function () {
      return new a(this.maxBounds)
    }, g.prototype.setBounds = function (t) {
      this.maxBounds = t
    }, g.prototype.easeTo = function (t) {
      if (t.center)
        if (Array.isArray(t.center)) this.setCenter(t.center);
        else {
          const e = [t.center.lng, t.center.lat];
          this.setCenter(e)
        }
      "number" == typeof t.bearing && this.setBearing(t.bearing)
    }, g.prototype.flyTo = function (t) {
      if (t.center)
        if (Array.isArray(t.center)) this.setCenter(t.center);
        else {
          const e = [t.center.lng, t.center.lat];
          this.setCenter(e)
        }
      "number" == typeof t.bearing && this.setBearing(t.bearing)
    }, g.prototype.getStyle = function () {
      return {
        layers: []
      }
    }, g.prototype.querySourceFeatures = function () {
      return []
    }, g.prototype.isStyleLoaded = function () {
      return null !== this.style
    }, g.prototype.isSourceLoaded = function () {}, g.prototype.plugins = {}, g.prototype.doubleClickZoom = {
      disable: function () {},
      enable: function () {}
    }, g.prototype.boxZoom = {
      disable: function () {},
      enable: function () {}
    }, g.prototype.dragPan = {
      disable: function () {},
      enable: function () {}
    }, g.prototype.project = function () {}, g.prototype.setFeatureState = function () {}, g.prototype.queryRenderedFeatures = function (t, e) {
      var n = [];
      n = void 0 !== t[0].x ? [Math.min(t[0].x, t[1].x), Math.min(t[0].y, t[1].y), Math.max(t[0].x, t[1].y), Math.max(t[0].x, t[1].y)] : [Math.min(t[0][0], t[1][0]), Math.min(t[0][1], t[1][1]), Math.max(t[0][0], t[1][0]), Math.max(t[0][1], t[1][1])];
      var s = i(n),
        a = Object.keys(this._sources).reduce((t, e) => t.concat(this._sources[e].data.features), []);
      return a = a.filter(t => {
        var e = [];
        if (t.geometry.type.startsWith("Multi")) {
          var n = t.geometry.type.replace("Multi", "");
          e = t.geometry.coordinates.map(e => ({
            type: "Feature",
            properties: t.properties,
            geometry: {
              type: n,
              coordinates: e
            }
          }))
        } else e.push(t);
        return (e = e.map(t => "Point" === t.geometry.type || "LineString" === t.geometry.type ? o(t, 1e-8, "kilometers") : t)).some(t => "Polygon" === r(t, s).geometry.type)
      })
    }, g.prototype.remove = function () {
      this._events = [], this.sources = []
    }, g.prototype.setFilter = function () {}, t.exports = g
  }, function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(4);
    e.default = function () {
      for (var t = new r.GeoJSONReader, e = t.read(JSON.stringify(arguments[0].geometry)), n = 1; n < arguments.length; n++) e = r.UnionOp.union(e, t.read(JSON.stringify(arguments[n].geometry)));
      var i = new r.GeoJSONWriter;
      return {
        type: "Feature",
        geometry: e = i.write(e),
        properties: arguments[0].properties
      }
    }
  }, function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(0);
    e.default = function (t) {
      Object(r.k)(t);
      var e = Number(t[0]),
        n = Number(t[1]),
        i = Number(t[2]),
        o = Number(t[3]);
      if (6 === t.length) throw new Error("@turf/bbox-polygon does not support BBox with 6 positions");
      var s = [e, n],
        a = [e, o],
        u = [i, o],
        l = [i, n];
      return Object(r.i)([
        [s, l, u, a, s]
      ])
    }
  }, function (t, e) {
    t.exports = function t(e, n) {
      if (Array.isArray(e)) {
        if (!Array.isArray(n) || e.length !== n.length) return !1;
        for (let r = 0; r < e.length; r++)
          if (!t(e[r], n[r])) return !1;
        return !0
      }
      if ("object" == typeof e && null !== e && null !== n) {
        if ("object" != typeof n) return !1;
        if (Object.keys(e).length !== Object.keys(n).length) return !1;
        for (const r in e)
          if (!t(e[r], n[r])) return !1;
        return !0
      }
      return e === n
    }
  }, function (t, e, n) {
    const r = n(9);

    function i(t, e, n) {
      n[t] = n[t] || [], n[t].push(e)
    }

    function o(t, e, n) {
      if (n && n[t]) {
        const r = n[t].indexOf(e); - 1 !== r && n[t].splice(r, 1)
      }
    }
    t.exports = class {
      on(t, e) {
        return this._listeners = this._listeners || {}, i(t, e, this._listeners), this
      }
      off(t, e) {
        return o(t, e, this._listeners), o(t, e, this._oneTimeListeners), this
      }
      once(t, e) {
        return this._oneTimeListeners = this._oneTimeListeners || {}, i(t, e, this._oneTimeListeners), this
      }
      fire(t, e) {
        if (this.listens(t)) {
          e = r.extend({}, e, {
            type: t,
            target: this
          });
          const n = this._listeners && this._listeners[t] ? this._listeners[t].slice() : [];
          for (const t of n) t.call(this, e);
          const i = this._oneTimeListeners && this._oneTimeListeners[t] ? this._oneTimeListeners[t].slice() : [];
          for (const n of i) o(t, n, this._oneTimeListeners), n.call(this, e);
          this._eventedParent && this._eventedParent.fire(t, r.extend({}, e, "function" == typeof this._eventedParentData ? this._eventedParentData() : this._eventedParentData))
        } else r.endsWith(t, "error") && console.error(e && e.error || e || "Empty error event");
        return this
      }
      listens(t) {
        return this._listeners && this._listeners[t] && this._listeners[t].length > 0 || this._oneTimeListeners && this._oneTimeListeners[t] && this._oneTimeListeners[t].length > 0 || this._eventedParent && this._eventedParent.listens(t)
      }
      setEventedParent(t, e) {
        return this._eventedParent = t, this._eventedParentData = e, this
      }
    }
  }, function (t, e, n) {
    const r = n(8),
      i = n(16),
      o = n(10),
      s = n(9),
      a = n(11).number,
      u = n(41),
      {
        CanonicalTileID: l,
        UnwrappedTileID: c
      } = n(17),
      h = n(61),
      p = n(62),
      f = p.vec4,
      g = p.mat4,
      d = p.mat2;
    class y {
      constructor(t, e, n) {
        this.tileSize = 512, this._renderWorldCopies = void 0 === n || n, this._minZoom = t || 0, this._maxZoom = e || 22, this.latRange = [-85.05113, 85.05113], this.width = 0, this.height = 0, this._center = new r(0, 0), this.zoom = 0, this.angle = 0, this._fov = .6435011087932844, this._pitch = 0, this._unmodified = !0, this._posMatrixCache = {}, this._alignedPosMatrixCache = {}
      }
      clone() {
        const t = new y(this._minZoom, this._maxZoom, this._renderWorldCopies);
        return t.tileSize = this.tileSize, t.latRange = this.latRange, t.width = this.width, t.height = this.height, t._center = this._center, t.zoom = this.zoom, t.angle = this.angle, t._fov = this._fov, t._pitch = this._pitch, t._unmodified = this._unmodified, t._calcMatrices(), t
      }
      get minZoom() {
        return this._minZoom
      }
      set minZoom(t) {
        this._minZoom !== t && (this._minZoom = t, this.zoom = Math.max(this.zoom, t))
      }
      get maxZoom() {
        return this._maxZoom
      }
      set maxZoom(t) {
        this._maxZoom !== t && (this._maxZoom = t, this.zoom = Math.min(this.zoom, t))
      }
      get renderWorldCopies() {
        return this._renderWorldCopies
      }
      get worldSize() {
        return this.tileSize * this.scale
      }
      get centerPoint() {
        return this.size._div(2)
      }
      get size() {
        return new i(this.width, this.height)
      }
      get bearing() {
        return -this.angle / Math.PI * 180
      }
      set bearing(t) {
        const e = -s.wrap(t, -180, 180) * Math.PI / 180;
        this.angle !== e && (this._unmodified = !1, this.angle = e, this._calcMatrices(), this.rotationMatrix = d.create(), d.rotate(this.rotationMatrix, this.rotationMatrix, this.angle))
      }
      get pitch() {
        return this._pitch / Math.PI * 180
      }
      set pitch(t) {
        const e = s.clamp(t, 0, 60) / 180 * Math.PI;
        this._pitch !== e && (this._unmodified = !1, this._pitch = e, this._calcMatrices())
      }
      get fov() {
        return this._fov / Math.PI * 180
      }
      set fov(t) {
        t = Math.max(.01, Math.min(60, t)), this._fov !== t && (this._unmodified = !1, this._fov = t / 180 * Math.PI, this._calcMatrices())
      }
      get zoom() {
        return this._zoom
      }
      set zoom(t) {
        const e = Math.min(Math.max(t, this.minZoom), this.maxZoom);
        this._zoom !== e && (this._unmodified = !1, this._zoom = e, this.scale = this.zoomScale(e), this.tileZoom = Math.floor(e), this.zoomFraction = e - this.tileZoom, this._constrain(), this._calcMatrices())
      }
      get center() {
        return this._center
      }
      set center(t) {
        t.lat === this._center.lat && t.lng === this._center.lng || (this._unmodified = !1, this._center = t, this._constrain(), this._calcMatrices())
      }
      coveringZoomLevel(t) {
        return (t.roundZoom ? Math.round : Math.floor)(this.zoom + this.scaleZoom(this.tileSize / t.tileSize))
      }
      getVisibleUnwrappedCoordinates(t) {
        const e = this.pointCoordinate(new i(0, 0), 0),
          n = this.pointCoordinate(new i(this.width, 0), 0),
          r = Math.floor(e.column),
          o = Math.floor(n.column),
          s = [new c(0, t)];
        if (this._renderWorldCopies)
          for (let e = r; e <= o; e++) 0 !== e && s.push(new c(e, t));
        return s
      }
      coveringTiles(t) {
        let e = this.coveringZoomLevel(t);
        const n = e;
        if (void 0 !== t.minzoom && e < t.minzoom) return [];
        void 0 !== t.maxzoom && e > t.maxzoom && (e = t.maxzoom);
        const r = this.pointCoordinate(this.centerPoint, e),
          o = new i(r.column - .5, r.row - .5),
          s = [this.pointCoordinate(new i(0, 0), e), this.pointCoordinate(new i(this.width, 0), e), this.pointCoordinate(new i(this.width, this.height), e), this.pointCoordinate(new i(0, this.height), e)];
        return u(e, s, t.reparseOverscaled ? n : e, this._renderWorldCopies).sort((t, e) => o.dist(t.canonical) - o.dist(e.canonical))
      }
      resize(t, e) {
        this.width = t, this.height = e, this.pixelsToGLUnits = [2 / t, -2 / e], this._constrain(), this._calcMatrices()
      }
      get unmodified() {
        return this._unmodified
      }
      zoomScale(t) {
        return Math.pow(2, t)
      }
      scaleZoom(t) {
        return Math.log(t) / Math.LN2
      }
      project(t) {
        return new i(this.lngX(t.lng), this.latY(t.lat))
      }
      unproject(t) {
        return new r(this.xLng(t.x), this.yLat(t.y))
      }
      get x() {
        return this.lngX(this.center.lng)
      }
      get y() {
        return this.latY(this.center.lat)
      }
      get point() {
        return new i(this.x, this.y)
      }
      lngX(t) {
        return (180 + t) * this.worldSize / 360
      }
      latY(t) {
        return (180 - 180 / Math.PI * Math.log(Math.tan(Math.PI / 4 + t * Math.PI / 360))) * this.worldSize / 360
      }
      xLng(t) {
        return 360 * t / this.worldSize - 180
      }
      yLat(t) {
        const e = 180 - 360 * t / this.worldSize;
        return 360 / Math.PI * Math.atan(Math.exp(e * Math.PI / 180)) - 90
      }
      setLocationAtPoint(t, e) {
        const n = this.pointCoordinate(e)._sub(this.pointCoordinate(this.centerPoint));
        this.center = this.coordinateLocation(this.locationCoordinate(t)._sub(n)), this._renderWorldCopies && (this.center = this.center.wrap())
      }
      locationPoint(t) {
        return this.coordinatePoint(this.locationCoordinate(t))
      }
      pointLocation(t) {
        return this.coordinateLocation(this.pointCoordinate(t))
      }
      locationCoordinate(t) {
        return new o(this.lngX(t.lng) / this.tileSize, this.latY(t.lat) / this.tileSize, this.zoom).zoomTo(this.tileZoom)
      }
      coordinateLocation(t) {
        const e = t.zoomTo(this.zoom);
        return new r(this.xLng(e.column * this.tileSize), this.yLat(e.row * this.tileSize))
      }
      pointCoordinate(t, e) {
        void 0 === e && (e = this.tileZoom);
        const n = [t.x, t.y, 0, 1],
          r = [t.x, t.y, 1, 1];
        f.transformMat4(n, n, this.pixelMatrixInverse), f.transformMat4(r, r, this.pixelMatrixInverse);
        const i = n[3],
          s = r[3],
          u = n[1] / i,
          l = r[1] / s,
          c = n[2] / i,
          h = r[2] / s,
          p = c === h ? 0 : (0 - c) / (h - c);
        return new o(a(n[0] / i, r[0] / s, p) / this.tileSize, a(u, l, p) / this.tileSize, this.zoom)._zoomTo(e)
      }
      coordinatePoint(t) {
        const e = t.zoomTo(this.zoom),
          n = [e.column * this.tileSize, e.row * this.tileSize, 0, 1];
        return f.transformMat4(n, n, this.pixelMatrix), new i(n[0] / n[3], n[1] / n[3])
      }
      calculatePosMatrix(t, e = !1) {
        const n = t.key,
          r = e ? this._alignedPosMatrixCache : this._posMatrixCache;
        if (r[n]) return r[n];
        const i = t.canonical,
          o = this.worldSize / this.zoomScale(i.z),
          s = i.x + Math.pow(2, i.z) * t.wrap,
          a = g.identity(new Float64Array(16));
        return g.translate(a, a, [s * o, i.y * o, 0]), g.scale(a, a, [o / h, o / h, 1]), g.multiply(a, e ? this.alignedProjMatrix : this.projMatrix, a), r[n] = new Float32Array(a), r[n]
      }
      _constrain() {
        if (!this.center || !this.width || !this.height || this._constraining) return;
        this._constraining = !0;
        let t, e, n, r, o = -90,
          s = 90,
          a = -180,
          u = 180;
        const l = this.size,
          c = this._unmodified;
        if (this.latRange) {
          const e = this.latRange;
          o = this.latY(e[1]), s = this.latY(e[0]), t = s - o < l.y ? l.y / (s - o) : 0
        }
        if (this.lngRange) {
          const t = this.lngRange;
          a = this.lngX(t[0]), u = this.lngX(t[1]), e = u - a < l.x ? l.x / (u - a) : 0
        }
        const h = Math.max(e || 0, t || 0);
        if (h) return this.center = this.unproject(new i(e ? (u + a) / 2 : this.x, t ? (s + o) / 2 : this.y)), this.zoom += this.scaleZoom(h), this._unmodified = c, void(this._constraining = !1);
        if (this.latRange) {
          const t = this.y,
            e = l.y / 2;
          t - e < o && (r = o + e), t + e > s && (r = s - e)
        }
        if (this.lngRange) {
          const t = this.x,
            e = l.x / 2;
          t - e < a && (n = a + e), t + e > u && (n = u - e)
        }
        void 0 === n && void 0 === r || (this.center = this.unproject(new i(void 0 !== n ? n : this.x, void 0 !== r ? r : this.y))), this._unmodified = c, this._constraining = !1
      }
      _calcMatrices() {
        if (!this.height) return;
        this.cameraToCenterDistance = .5 / Math.tan(this._fov / 2) * this.height;
        const t = this._fov / 2,
          e = Math.PI / 2 + this._pitch,
          n = Math.sin(t) * this.cameraToCenterDistance / Math.sin(Math.PI - e - t),
          r = this.x,
          i = this.y,
          o = 1.01 * (Math.cos(Math.PI / 2 - this._pitch) * n + this.cameraToCenterDistance);
        let s = new Float64Array(16);
        g.perspective(s, this._fov, this.width / this.height, 1, o), g.scale(s, s, [1, -1, 1]), g.translate(s, s, [0, 0, -this.cameraToCenterDistance]), g.rotateX(s, s, this._pitch), g.rotateZ(s, s, this.angle), g.translate(s, s, [-r, -i, 0]);
        const a = this.worldSize / (2 * Math.PI * 6378137 * Math.abs(Math.cos(this.center.lat * (Math.PI / 180))));
        g.scale(s, s, [1, 1, a, 1]), this.projMatrix = s;
        const u = this.width % 2 / 2,
          l = this.height % 2 / 2,
          c = Math.cos(this.angle),
          h = Math.sin(this.angle),
          p = r - Math.round(r) + c * u + h * l,
          f = i - Math.round(i) + c * l + h * u,
          d = new Float64Array(s);
        if (g.translate(d, d, [p > .5 ? p - 1 : p, f > .5 ? f - 1 : f, 0]), this.alignedProjMatrix = d, s = g.create(), g.scale(s, s, [this.width / 2, -this.height / 2, 1]), g.translate(s, s, [1, -1, 0]), this.pixelMatrix = g.multiply(new Float64Array(16), s, this.projMatrix), s = g.invert(new Float64Array(16), this.pixelMatrix), !s) throw new Error("failed to invert matrix");
        this.pixelMatrixInverse = s, this._posMatrixCache = {}, this._alignedPosMatrixCache = {}
      }
    }
    t.exports = y
  }, function (t, e) {
    var n = {
      transparent: [0, 0, 0, 0],
      aliceblue: [240, 248, 255, 1],
      antiquewhite: [250, 235, 215, 1],
      aqua: [0, 255, 255, 1],
      aquamarine: [127, 255, 212, 1],
      azure: [240, 255, 255, 1],
      beige: [245, 245, 220, 1],
      bisque: [255, 228, 196, 1],
      black: [0, 0, 0, 1],
      blanchedalmond: [255, 235, 205, 1],
      blue: [0, 0, 255, 1],
      blueviolet: [138, 43, 226, 1],
      brown: [165, 42, 42, 1],
      burlywood: [222, 184, 135, 1],
      cadetblue: [95, 158, 160, 1],
      chartreuse: [127, 255, 0, 1],
      chocolate: [210, 105, 30, 1],
      coral: [255, 127, 80, 1],
      cornflowerblue: [100, 149, 237, 1],
      cornsilk: [255, 248, 220, 1],
      crimson: [220, 20, 60, 1],
      cyan: [0, 255, 255, 1],
      darkblue: [0, 0, 139, 1],
      darkcyan: [0, 139, 139, 1],
      darkgoldenrod: [184, 134, 11, 1],
      darkgray: [169, 169, 169, 1],
      darkgreen: [0, 100, 0, 1],
      darkgrey: [169, 169, 169, 1],
      darkkhaki: [189, 183, 107, 1],
      darkmagenta: [139, 0, 139, 1],
      darkolivegreen: [85, 107, 47, 1],
      darkorange: [255, 140, 0, 1],
      darkorchid: [153, 50, 204, 1],
      darkred: [139, 0, 0, 1],
      darksalmon: [233, 150, 122, 1],
      darkseagreen: [143, 188, 143, 1],
      darkslateblue: [72, 61, 139, 1],
      darkslategray: [47, 79, 79, 1],
      darkslategrey: [47, 79, 79, 1],
      darkturquoise: [0, 206, 209, 1],
      darkviolet: [148, 0, 211, 1],
      deeppink: [255, 20, 147, 1],
      deepskyblue: [0, 191, 255, 1],
      dimgray: [105, 105, 105, 1],
      dimgrey: [105, 105, 105, 1],
      dodgerblue: [30, 144, 255, 1],
      firebrick: [178, 34, 34, 1],
      floralwhite: [255, 250, 240, 1],
      forestgreen: [34, 139, 34, 1],
      fuchsia: [255, 0, 255, 1],
      gainsboro: [220, 220, 220, 1],
      ghostwhite: [248, 248, 255, 1],
      gold: [255, 215, 0, 1],
      goldenrod: [218, 165, 32, 1],
      gray: [128, 128, 128, 1],
      green: [0, 128, 0, 1],
      greenyellow: [173, 255, 47, 1],
      grey: [128, 128, 128, 1],
      honeydew: [240, 255, 240, 1],
      hotpink: [255, 105, 180, 1],
      indianred: [205, 92, 92, 1],
      indigo: [75, 0, 130, 1],
      ivory: [255, 255, 240, 1],
      khaki: [240, 230, 140, 1],
      lavender: [230, 230, 250, 1],
      lavenderblush: [255, 240, 245, 1],
      lawngreen: [124, 252, 0, 1],
      lemonchiffon: [255, 250, 205, 1],
      lightblue: [173, 216, 230, 1],
      lightcoral: [240, 128, 128, 1],
      lightcyan: [224, 255, 255, 1],
      lightgoldenrodyellow: [250, 250, 210, 1],
      lightgray: [211, 211, 211, 1],
      lightgreen: [144, 238, 144, 1],
      lightgrey: [211, 211, 211, 1],
      lightpink: [255, 182, 193, 1],
      lightsalmon: [255, 160, 122, 1],
      lightseagreen: [32, 178, 170, 1],
      lightskyblue: [135, 206, 250, 1],
      lightslategray: [119, 136, 153, 1],
      lightslategrey: [119, 136, 153, 1],
      lightsteelblue: [176, 196, 222, 1],
      lightyellow: [255, 255, 224, 1],
      lime: [0, 255, 0, 1],
      limegreen: [50, 205, 50, 1],
      linen: [250, 240, 230, 1],
      magenta: [255, 0, 255, 1],
      maroon: [128, 0, 0, 1],
      mediumaquamarine: [102, 205, 170, 1],
      mediumblue: [0, 0, 205, 1],
      mediumorchid: [186, 85, 211, 1],
      mediumpurple: [147, 112, 219, 1],
      mediumseagreen: [60, 179, 113, 1],
      mediumslateblue: [123, 104, 238, 1],
      mediumspringgreen: [0, 250, 154, 1],
      mediumturquoise: [72, 209, 204, 1],
      mediumvioletred: [199, 21, 133, 1],
      midnightblue: [25, 25, 112, 1],
      mintcream: [245, 255, 250, 1],
      mistyrose: [255, 228, 225, 1],
      moccasin: [255, 228, 181, 1],
      navajowhite: [255, 222, 173, 1],
      navy: [0, 0, 128, 1],
      oldlace: [253, 245, 230, 1],
      olive: [128, 128, 0, 1],
      olivedrab: [107, 142, 35, 1],
      orange: [255, 165, 0, 1],
      orangered: [255, 69, 0, 1],
      orchid: [218, 112, 214, 1],
      palegoldenrod: [238, 232, 170, 1],
      palegreen: [152, 251, 152, 1],
      paleturquoise: [175, 238, 238, 1],
      palevioletred: [219, 112, 147, 1],
      papayawhip: [255, 239, 213, 1],
      peachpuff: [255, 218, 185, 1],
      peru: [205, 133, 63, 1],
      pink: [255, 192, 203, 1],
      plum: [221, 160, 221, 1],
      powderblue: [176, 224, 230, 1],
      purple: [128, 0, 128, 1],
      rebeccapurple: [102, 51, 153, 1],
      red: [255, 0, 0, 1],
      rosybrown: [188, 143, 143, 1],
      royalblue: [65, 105, 225, 1],
      saddlebrown: [139, 69, 19, 1],
      salmon: [250, 128, 114, 1],
      sandybrown: [244, 164, 96, 1],
      seagreen: [46, 139, 87, 1],
      seashell: [255, 245, 238, 1],
      sienna: [160, 82, 45, 1],
      silver: [192, 192, 192, 1],
      skyblue: [135, 206, 235, 1],
      slateblue: [106, 90, 205, 1],
      slategray: [112, 128, 144, 1],
      slategrey: [112, 128, 144, 1],
      snow: [255, 250, 250, 1],
      springgreen: [0, 255, 127, 1],
      steelblue: [70, 130, 180, 1],
      tan: [210, 180, 140, 1],
      teal: [0, 128, 128, 1],
      thistle: [216, 191, 216, 1],
      tomato: [255, 99, 71, 1],
      turquoise: [64, 224, 208, 1],
      violet: [238, 130, 238, 1],
      wheat: [245, 222, 179, 1],
      white: [255, 255, 255, 1],
      whitesmoke: [245, 245, 245, 1],
      yellow: [255, 255, 0, 1],
      yellowgreen: [154, 205, 50, 1]
    };

    function r(t) {
      return (t = Math.round(t)) < 0 ? 0 : t > 255 ? 255 : t
    }

    function i(t) {
      return t < 0 ? 0 : t > 1 ? 1 : t
    }

    function o(t) {
      return "%" === t[t.length - 1] ? r(parseFloat(t) / 100 * 255) : r(parseInt(t))
    }

    function s(t) {
      return "%" === t[t.length - 1] ? i(parseFloat(t) / 100) : i(parseFloat(t))
    }

    function a(t, e, n) {
      return n < 0 ? n += 1 : n > 1 && (n -= 1), 6 * n < 1 ? t + (e - t) * n * 6 : 2 * n < 1 ? e : 3 * n < 2 ? t + (e - t) * (2 / 3 - n) * 6 : t
    }
    try {
      e.parseCSSColor = function (t) {
        var e, i = t.replace(/ /g, "").toLowerCase();
        if (i in n) return n[i].slice();
        if ("#" === i[0]) return 4 === i.length ? (e = parseInt(i.substr(1), 16)) >= 0 && e <= 4095 ? [(3840 & e) >> 4 | (3840 & e) >> 8, 240 & e | (240 & e) >> 4, 15 & e | (15 & e) << 4, 1] : null : 7 === i.length && (e = parseInt(i.substr(1), 16)) >= 0 && e <= 16777215 ? [(16711680 & e) >> 16, (65280 & e) >> 8, 255 & e, 1] : null;
        var u = i.indexOf("("),
          l = i.indexOf(")");
        if (-1 !== u && l + 1 === i.length) {
          var c = i.substr(0, u),
            h = i.substr(u + 1, l - (u + 1)).split(","),
            p = 1;
          switch (c) {
            case "rgba":
              if (4 !== h.length) return null;
              p = s(h.pop());
            case "rgb":
              return 3 !== h.length ? null : [o(h[0]), o(h[1]), o(h[2]), p];
            case "hsla":
              if (4 !== h.length) return null;
              p = s(h.pop());
            case "hsl":
              if (3 !== h.length) return null;
              var f = (parseFloat(h[0]) % 360 + 360) % 360 / 360,
                g = s(h[1]),
                d = s(h[2]),
                y = d <= .5 ? d * (g + 1) : d + g - d * g,
                _ = 2 * d - y;
              return [r(255 * a(_, y, f + 1 / 3)), r(255 * a(_, y, f)), r(255 * a(_, y, f - 1 / 3)), p];
            default:
              return null
          }
        }
        return null
      }
    } catch (t) {}
  }, function (t, e, n) {
    n(10);
    const {
      OverscaledTileID: r
    } = n(17);

    function i(t, e) {
      if (t.row > e.row) {
        const n = t;
        t = e, e = n
      }
      return {
        x0: t.column,
        y0: t.row,
        x1: e.column,
        y1: e.row,
        dx: e.column - t.column,
        dy: e.row - t.row
      }
    }

    function o(t, e, n, r, i) {
      const o = Math.max(n, Math.floor(e.y0)),
        s = Math.min(r, Math.ceil(e.y1));
      if (t.x0 === e.x0 && t.y0 === e.y0 ? t.x0 + e.dy / t.dy * t.dx < e.x1 : t.x1 - e.dy / t.dy * t.dx < e.x0) {
        const n = t;
        t = e, e = n
      }
      const a = t.dx / t.dy,
        u = e.dx / e.dy,
        l = t.dx > 0,
        c = e.dx < 0;
      for (let n = o; n < s; n++) {
        const r = a * Math.max(0, Math.min(t.dy, n + l - t.y0)) + t.x0,
          o = u * Math.max(0, Math.min(e.dy, n + c - e.y0)) + e.x0;
        i(Math.floor(o), Math.ceil(r), n)
      }
    }

    function s(t, e, n, r, s, a) {
      let u, l = i(t, e),
        c = i(e, n),
        h = i(n, t);
      l.dy > c.dy && (u = l, l = c, c = u), l.dy > h.dy && (u = l, l = h, h = u), c.dy > h.dy && (u = c, c = h, h = u), l.dy && o(h, l, r, s, a), c.dy && o(h, c, r, s, a)
    }
    t.exports = function (t, e, n, i) {
      void 0 === i && (i = !0);
      const o = 1 << t,
        a = {};

      function u(e, s, u) {
        let l, c, h, p;
        if (u >= 0 && u <= o)
          for (l = e; l < s; l++) c = Math.floor(l / o), h = (l % o + o) % o, 0 !== c && !0 !== i || (p = new r(n, c, t, h, u), a[p.key] = p)
      }
      return s(e[0], e[1], e[2], 0, o, u), s(e[2], e[3], e[0], 0, o, u), Object.keys(a).map(t => a[t])
    }
  }, function (t, e, n) {
    ! function (t) {
      function e(t, e, r) {
        var i = n(256 * t, 256 * (e = Math.pow(2, r) - e - 1), r),
          o = n(256 * (t + 1), 256 * (e + 1), r);
        return i[0] + "," + i[1] + "," + o[0] + "," + o[1]
      }

      function n(t, e, n) {
        var r = 2 * Math.PI * 6378137 / 256 / Math.pow(2, n);
        return [t * r - 2 * Math.PI * 6378137 / 2, e * r - 2 * Math.PI * 6378137 / 2]
      }
      t.getURL = function (t, n, r, i, o, s) {
        return s = s || {}, t + "?" + ["bbox=" + e(r, i, o), "format=" + (s.format || "image/png"), "service=" + (s.service || "WMS"), "version=" + (s.version || "1.1.1"), "request=" + (s.request || "GetMap"), "srs=" + (s.srs || "EPSG:3857"), "width=" + (s.width || 256), "height=" + (s.height || 256), "layers=" + n].join("&")
      }, t.getTileBBox = e, t.getMercCoords = n, Object.defineProperty(t, "__esModule", {
        value: !0
      })
    }(e)
  }, function (t, e) {
    var n;
    n = function () {
      return this
    }();
    try {
      n = n || new Function("return this")()
    } catch (t) {
      "object" == typeof window && (n = window)
    }
    t.exports = n
  }, function (t, e, n) {
    "use strict";
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    var r = Object.getOwnPropertySymbols,
      i = Object.prototype.hasOwnProperty,
      o = Object.prototype.propertyIsEnumerable;

    function s(t) {
      if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
      return Object(t)
    }
    t.exports = function () {
      try {
        if (!Object.assign) return !1;
        var t = new String("abc");
        if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
        for (var e = {}, n = 0; n < 10; n++) e["_" + String.fromCharCode(n)] = n;
        if ("0123456789" !== Object.getOwnPropertyNames(e).map((function (t) {
            return e[t]
          })).join("")) return !1;
        var r = {};
        return "abcdefghijklmnopqrst".split("").forEach((function (t) {
          r[t] = t
        })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
      } catch (t) {
        return !1
      }
    }() ? Object.assign : function (t, e) {
      for (var n, a, u = s(t), l = 1; l < arguments.length; l++) {
        for (var c in n = Object(arguments[l])) i.call(n, c) && (u[c] = n[c]);
        if (r) {
          a = r(n);
          for (var h = 0; h < a.length; h++) o.call(n, a[h]) && (u[a[h]] = n[a[h]])
        }
      }
      return u
    }
  }, function (t, e, n) {
    (function (t) {
      var r = Object.getOwnPropertyDescriptors || function (t) {
          for (var e = Object.keys(t), n = {}, r = 0; r < e.length; r++) n[e[r]] = Object.getOwnPropertyDescriptor(t, e[r]);
          return n
        },
        i = /%[sdj%]/g;
      e.format = function (t) {
        if (!_(t)) {
          for (var e = [], n = 0; n < arguments.length; n++) e.push(a(arguments[n]));
          return e.join(" ")
        }
        n = 1;
        for (var r = arguments, o = r.length, s = String(t).replace(i, (function (t) {
            if ("%%" === t) return "%";
            if (n >= o) return t;
            switch (t) {
              case "%s":
                return String(r[n++]);
              case "%d":
                return Number(r[n++]);
              case "%j":
                try {
                  return JSON.stringify(r[n++])
                } catch (t) {
                  return "[Circular]"
                }
                default:
                  return t
            }
          })), u = r[n]; n < o; u = r[++n]) d(u) || !x(u) ? s += " " + u : s += " " + a(u);
        return s
      }, e.deprecate = function (n, r) {
        if (void 0 !== t && !0 === t.noDeprecation) return n;
        if (void 0 === t) return function () {
          return e.deprecate(n, r).apply(this, arguments)
        };
        var i = !1;
        return function () {
          if (!i) {
            if (t.throwDeprecation) throw new Error(r);
            t.traceDeprecation ? console.trace(r) : console.error(r), i = !0
          }
          return n.apply(this, arguments)
        }
      };
      var o, s = {};

      function a(t, n) {
        var r = {
          seen: [],
          stylize: l
        };
        return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), g(n) ? r.showHidden = n : n && e._extend(r, n), m(r.showHidden) && (r.showHidden = !1), m(r.depth) && (r.depth = 2), m(r.colors) && (r.colors = !1), m(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = u), c(r, t, r.depth)
      }

      function u(t, e) {
        var n = a.styles[e];
        return n ? "[" + a.colors[n][0] + "m" + t + "[" + a.colors[n][1] + "m" : t
      }

      function l(t, e) {
        return t
      }

      function c(t, n, r) {
        if (t.customInspect && n && I(n.inspect) && n.inspect !== e.inspect && (!n.constructor || n.constructor.prototype !== n)) {
          var i = n.inspect(r, t);
          return _(i) || (i = c(t, i, r)), i
        }
        var o = function (t, e) {
          if (m(e)) return t.stylize("undefined", "undefined");
          if (_(e)) {
            var n = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
            return t.stylize(n, "string")
          }
          if (y(e)) return t.stylize("" + e, "number");
          if (g(e)) return t.stylize("" + e, "boolean");
          if (d(e)) return t.stylize("null", "null")
        }(t, n);
        if (o) return o;
        var s = Object.keys(n),
          a = function (t) {
            var e = {};
            return t.forEach((function (t, n) {
              e[t] = !0
            })), e
          }(s);
        if (t.showHidden && (s = Object.getOwnPropertyNames(n)), b(n) && (s.indexOf("message") >= 0 || s.indexOf("description") >= 0)) return h(n);
        if (0 === s.length) {
          if (I(n)) {
            var u = n.name ? ": " + n.name : "";
            return t.stylize("[Function" + u + "]", "special")
          }
          if (v(n)) return t.stylize(RegExp.prototype.toString.call(n), "regexp");
          if (E(n)) return t.stylize(Date.prototype.toString.call(n), "date");
          if (b(n)) return h(n)
        }
        var l, x = "",
          N = !1,
          w = ["{", "}"];
        (f(n) && (N = !0, w = ["[", "]"]), I(n)) && (x = " [Function" + (n.name ? ": " + n.name : "") + "]");
        return v(n) && (x = " " + RegExp.prototype.toString.call(n)), E(n) && (x = " " + Date.prototype.toUTCString.call(n)), b(n) && (x = " " + h(n)), 0 !== s.length || N && 0 != n.length ? r < 0 ? v(n) ? t.stylize(RegExp.prototype.toString.call(n), "regexp") : t.stylize("[Object]", "special") : (t.seen.push(n), l = N ? function (t, e, n, r, i) {
          for (var o = [], s = 0, a = e.length; s < a; ++s) L(e, String(s)) ? o.push(p(t, e, n, r, String(s), !0)) : o.push("");
          return i.forEach((function (i) {
            i.match(/^\d+$/) || o.push(p(t, e, n, r, i, !0))
          })), o
        }(t, n, r, a, s) : s.map((function (e) {
          return p(t, n, r, a, e, N)
        })), t.seen.pop(), function (t, e, n) {
          if (t.reduce((function (t, e) {
              return e.indexOf("\n") >= 0 && 0, t + e.replace(/\u001b\[\d\d?m/g, "").length + 1
            }), 0) > 60) return n[0] + ("" === e ? "" : e + "\n ") + " " + t.join(",\n  ") + " " + n[1];
          return n[0] + e + " " + t.join(", ") + " " + n[1]
        }(l, x, w)) : w[0] + x + w[1]
      }

      function h(t) {
        return "[" + Error.prototype.toString.call(t) + "]"
      }

      function p(t, e, n, r, i, o) {
        var s, a, u;
        if ((u = Object.getOwnPropertyDescriptor(e, i) || {
            value: e[i]
          }).get ? a = u.set ? t.stylize("[Getter/Setter]", "special") : t.stylize("[Getter]", "special") : u.set && (a = t.stylize("[Setter]", "special")), L(r, i) || (s = "[" + i + "]"), a || (t.seen.indexOf(u.value) < 0 ? (a = d(n) ? c(t, u.value, null) : c(t, u.value, n - 1)).indexOf("\n") > -1 && (a = o ? a.split("\n").map((function (t) {
            return "  " + t
          })).join("\n").substr(2) : "\n" + a.split("\n").map((function (t) {
            return "   " + t
          })).join("\n")) : a = t.stylize("[Circular]", "special")), m(s)) {
          if (o && i.match(/^\d+$/)) return a;
          (s = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2), s = t.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s = t.stylize(s, "string"))
        }
        return s + ": " + a
      }

      function f(t) {
        return Array.isArray(t)
      }

      function g(t) {
        return "boolean" == typeof t
      }

      function d(t) {
        return null === t
      }

      function y(t) {
        return "number" == typeof t
      }

      function _(t) {
        return "string" == typeof t
      }

      function m(t) {
        return void 0 === t
      }

      function v(t) {
        return x(t) && "[object RegExp]" === N(t)
      }

      function x(t) {
        return "object" == typeof t && null !== t
      }

      function E(t) {
        return x(t) && "[object Date]" === N(t)
      }

      function b(t) {
        return x(t) && ("[object Error]" === N(t) || t instanceof Error)
      }

      function I(t) {
        return "function" == typeof t
      }

      function N(t) {
        return Object.prototype.toString.call(t)
      }

      function w(t) {
        return t < 10 ? "0" + t.toString(10) : t.toString(10)
      }
      e.debuglog = function (n) {
        if (m(o) && (o = t.env.NODE_DEBUG || ""), n = n.toUpperCase(), !s[n])
          if (new RegExp("\\b" + n + "\\b", "i").test(o)) {
            var r = t.pid;
            s[n] = function () {
              var t = e.format.apply(e, arguments);
              console.error("%s %d: %s", n, r, t)
            }
          } else s[n] = function () {};
        return s[n]
      }, e.inspect = a, a.colors = {
        bold: [1, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        white: [37, 39],
        grey: [90, 39],
        black: [30, 39],
        blue: [34, 39],
        cyan: [36, 39],
        green: [32, 39],
        magenta: [35, 39],
        red: [31, 39],
        yellow: [33, 39]
      }, a.styles = {
        special: "cyan",
        number: "yellow",
        boolean: "yellow",
        undefined: "grey",
        null: "bold",
        string: "green",
        date: "magenta",
        regexp: "red"
      }, e.isArray = f, e.isBoolean = g, e.isNull = d, e.isNullOrUndefined = function (t) {
        return null == t
      }, e.isNumber = y, e.isString = _, e.isSymbol = function (t) {
        return "symbol" == typeof t
      }, e.isUndefined = m, e.isRegExp = v, e.isObject = x, e.isDate = E, e.isError = b, e.isFunction = I, e.isPrimitive = function (t) {
        return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == typeof t || void 0 === t
      }, e.isBuffer = n(47);
      var C = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

      function S() {
        var t = new Date,
          e = [w(t.getHours()), w(t.getMinutes()), w(t.getSeconds())].join(":");
        return [t.getDate(), C[t.getMonth()], e].join(" ")
      }

      function L(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }
      e.log = function () {
        console.log("%s - %s", S(), e.format.apply(e, arguments))
      }, e.inherits = n(48), e._extend = function (t, e) {
        if (!e || !x(e)) return t;
        for (var n = Object.keys(e), r = n.length; r--;) t[n[r]] = e[n[r]];
        return t
      };
      var O = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;

      function T(t, e) {
        if (!t) {
          var n = new Error("Promise was rejected with a falsy value");
          n.reason = t, t = n
        }
        return e(t)
      }
      e.promisify = function (t) {
        if ("function" != typeof t) throw new TypeError('The "original" argument must be of type Function');
        if (O && t[O]) {
          var e;
          if ("function" != typeof (e = t[O])) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
          return Object.defineProperty(e, O, {
            value: e,
            enumerable: !1,
            writable: !1,
            configurable: !0
          }), e
        }

        function e() {
          for (var e, n, r = new Promise((function (t, r) {
              e = t, n = r
            })), i = [], o = 0; o < arguments.length; o++) i.push(arguments[o]);
          i.push((function (t, r) {
            t ? n(t) : e(r)
          }));
          try {
            t.apply(this, i)
          } catch (t) {
            n(t)
          }
          return r
        }
        return Object.setPrototypeOf(e, Object.getPrototypeOf(t)), O && Object.defineProperty(e, O, {
          value: e,
          enumerable: !1,
          writable: !1,
          configurable: !0
        }), Object.defineProperties(e, r(t))
      }, e.promisify.custom = O, e.callbackify = function (e) {
        if ("function" != typeof e) throw new TypeError('The "original" argument must be of type Function');

        function n() {
          for (var n = [], r = 0; r < arguments.length; r++) n.push(arguments[r]);
          var i = n.pop();
          if ("function" != typeof i) throw new TypeError("The last argument must be of type Function");
          var o = this,
            s = function () {
              return i.apply(o, arguments)
            };
          e.apply(this, n).then((function (e) {
            t.nextTick(s, null, e)
          }), (function (e) {
            t.nextTick(T, e, s)
          }))
        }
        return Object.setPrototypeOf(n, Object.getPrototypeOf(e)), Object.defineProperties(n, r(e)), n
      }
    }).call(this, n(46))
  }, function (t, e) {
    var n, r, i = t.exports = {};

    function o() {
      throw new Error("setTimeout has not been defined")
    }

    function s() {
      throw new Error("clearTimeout has not been defined")
    }

    function a(t) {
      if (n === setTimeout) return setTimeout(t, 0);
      if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
      try {
        return n(t, 0)
      } catch (e) {
        try {
          return n.call(null, t, 0)
        } catch (e) {
          return n.call(this, t, 0)
        }
      }
    }! function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : o
      } catch (t) {
        n = o
      }
      try {
        r = "function" == typeof clearTimeout ? clearTimeout : s
      } catch (t) {
        r = s
      }
    }();
    var u, l = [],
      c = !1,
      h = -1;

    function p() {
      c && u && (c = !1, u.length ? l = u.concat(l) : h = -1, l.length && f())
    }

    function f() {
      if (!c) {
        var t = a(p);
        c = !0;
        for (var e = l.length; e;) {
          for (u = l, l = []; ++h < e;) u && u[h].run();
          h = -1, e = l.length
        }
        u = null, c = !1,
          function (t) {
            if (r === clearTimeout) return clearTimeout(t);
            if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
            try {
              r(t)
            } catch (e) {
              try {
                return r.call(null, t)
              } catch (e) {
                return r.call(this, t)
              }
            }
          }(t)
      }
    }

    function g(t, e) {
      this.fun = t, this.array = e
    }

    function d() {}
    i.nextTick = function (t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
      l.push(new g(t, e)), 1 !== l.length || c || a(f)
    }, g.prototype.run = function () {
      this.fun.apply(null, this.array)
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = d, i.addListener = d, i.once = d, i.off = d, i.removeListener = d, i.removeAllListeners = d, i.emit = d, i.prependListener = d, i.prependOnceListener = d, i.listeners = function (t) {
      return []
    }, i.binding = function (t) {
      throw new Error("process.binding is not supported")
    }, i.cwd = function () {
      return "/"
    }, i.chdir = function (t) {
      throw new Error("process.chdir is not supported")
    }, i.umask = function () {
      return 0
    }
  }, function (t, e) {
    t.exports = function (t) {
      return t && "object" == typeof t && "function" == typeof t.copy && "function" == typeof t.fill && "function" == typeof t.readUInt8
    }
  }, function (t, e) {
    "function" == typeof Object.create ? t.exports = function (t, e) {
      t.super_ = e, t.prototype = Object.create(e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })
    } : t.exports = function (t, e) {
      t.super_ = e;
      var n = function () {};
      n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t
    }
  }, function (t, e, n) {
    const r = n(2),
      i = n(50),
      o = n(6),
      {
        StylePropertyFunction: s,
        StyleExpression: a,
        StyleExpressionWithErrorHandling: u,
        ZoomDependentExpression: l,
        ZoomConstantExpression: c
      } = n(51),
      {
        CompoundExpression: h
      } = n(7),
      p = n(32),
      {
        ImageData: f
      } = n(60),
      g = {};

    function d(t, e, n = {}) {
      r(!g[t], t + " is already registered."), Object.defineProperty(e, "_classRegistryKey", {
        value: t,
        writeable: !1
      }), g[t] = {
        klass: e,
        omit: n.omit || [],
        shallow: n.shallow || []
      }
    }
    d("Object", Object), i.serialize = function (t, e) {
      const n = t.toArrayBuffer();
      return e && e.push(n), n
    }, i.deserialize = function (t) {
      return new i(t)
    }, d("Grid", i), d("Color", o), d("StylePropertyFunction", s), d("StyleExpression", a, {
      omit: ["_evaluator"]
    }), d("StyleExpressionWithErrorHandling", u, {
      omit: ["_evaluator"]
    }), d("ZoomDependentExpression", l), d("ZoomConstantExpression", c), d("CompoundExpression", h, {
      omit: ["_evaluate"]
    });
    for (const t in p) p[t]._classRegistryKey || d("Expression_" + t, p[t]);
    t.exports = {
      register: d,
      serialize: function t(e, n) {
        if (null == e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || e instanceof Boolean || e instanceof Number || e instanceof String || e instanceof Date || e instanceof RegExp) return e;
        if (e instanceof ArrayBuffer) return n && n.push(e), e;
        if (ArrayBuffer.isView(e)) {
          const t = e;
          return n && n.push(t.buffer), t
        }
        if (e instanceof f) return n && n.push(e.data.buffer), e;
        if (Array.isArray(e)) {
          const r = [];
          for (const i of e) r.push(t(i, n));
          return r
        }
        if ("object" == typeof e) {
          const i = e.constructor,
            o = i._classRegistryKey;
          if (!o) throw new Error("can't serialize object of unregistered class");
          r(g[o]);
          const s = {};
          if (i.serialize) s._serialized = i.serialize(e, n);
          else
            for (const r in e) {
              if (!e.hasOwnProperty(r)) continue;
              if (g[o].omit.indexOf(r) >= 0) continue;
              const i = e[r];
              s[r] = g[o].shallow.indexOf(r) >= 0 ? i : t(i, n)
            }
          return {
            name: o,
            properties: s
          }
        }
        throw new Error("can't serialize object of type " + typeof e)
      },
      deserialize: function t(e) {
        if (null == e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || e instanceof Boolean || e instanceof Number || e instanceof String || e instanceof Date || e instanceof RegExp || e instanceof ArrayBuffer || ArrayBuffer.isView(e) || e instanceof f) return e;
        if (Array.isArray(e)) return e.map(e => t(e));
        if ("object" == typeof e) {
          const {
            name: n,
            properties: r
          } = e;
          if (!n) throw new Error("can't deserialize object of anonymous class");
          const {
            klass: i
          } = g[n];
          if (!i) throw new Error("can't deserialize unregistered class " + n);
          if (i.deserialize) return i.deserialize(r._serialized);
          const o = Object.create(i.prototype);
          for (const e of Object.keys(r)) o[e] = g[n].shallow.indexOf(e) >= 0 ? r[e] : t(r[e]);
          return o
        }
        throw new Error("can't deserialize object of type " + typeof e)
      }
    }
  }, function (t, e, n) {
    "use strict";
    t.exports = r;

    function r(t, e, n) {
      var r = this.cells = [];
      if (t instanceof ArrayBuffer) {
        this.arrayBuffer = t;
        var i = new Int32Array(this.arrayBuffer);
        t = i[0], e = i[1], n = i[2], this.d = e + 2 * n;
        for (var o = 0; o < this.d * this.d; o++) {
          var s = i[3 + o],
            a = i[3 + o + 1];
          r.push(s === a ? null : i.subarray(s, a))
        }
        var u = i[3 + r.length],
          l = i[3 + r.length + 1];
        this.keys = i.subarray(u, l), this.bboxes = i.subarray(l), this.insert = this._insertReadonly
      } else {
        this.d = e + 2 * n;
        for (var c = 0; c < this.d * this.d; c++) r.push([]);
        this.keys = [], this.bboxes = []
      }
      this.n = e, this.extent = t, this.padding = n, this.scale = e / t, this.uid = 0;
      var h = n / e * t;
      this.min = -h, this.max = t + h
    }
    r.prototype.insert = function (t, e, n, r, i) {
      this._forEachCell(e, n, r, i, this._insertCell, this.uid++), this.keys.push(t), this.bboxes.push(e), this.bboxes.push(n), this.bboxes.push(r), this.bboxes.push(i)
    }, r.prototype._insertReadonly = function () {
      throw "Cannot insert into a GridIndex created from an ArrayBuffer."
    }, r.prototype._insertCell = function (t, e, n, r, i, o) {
      this.cells[i].push(o)
    }, r.prototype.query = function (t, e, n, r) {
      var i = this.min,
        o = this.max;
      if (t <= i && e <= i && o <= n && o <= r) return Array.prototype.slice.call(this.keys);
      var s = [];
      return this._forEachCell(t, e, n, r, this._queryCell, s, {}), s
    }, r.prototype._queryCell = function (t, e, n, r, i, o, s) {
      var a = this.cells[i];
      if (null !== a)
        for (var u = this.keys, l = this.bboxes, c = 0; c < a.length; c++) {
          var h = a[c];
          if (void 0 === s[h]) {
            var p = 4 * h;
            t <= l[p + 2] && e <= l[p + 3] && n >= l[p + 0] && r >= l[p + 1] ? (s[h] = !0, o.push(u[h])) : s[h] = !1
          }
        }
    }, r.prototype._forEachCell = function (t, e, n, r, i, o, s) {
      for (var a = this._convertToCellCoord(t), u = this._convertToCellCoord(e), l = this._convertToCellCoord(n), c = this._convertToCellCoord(r), h = a; h <= l; h++)
        for (var p = u; p <= c; p++) {
          var f = this.d * p + h;
          if (i.call(this, t, e, n, r, f, o, s)) return
        }
    }, r.prototype._convertToCellCoord = function (t) {
      return Math.max(0, Math.min(this.d - 1, Math.floor(t * this.scale) + this.padding))
    }, r.prototype.toArrayBuffer = function () {
      if (this.arrayBuffer) return this.arrayBuffer;
      for (var t = this.cells, e = 3 + this.cells.length + 1 + 1, n = 0, r = 0; r < this.cells.length; r++) n += this.cells[r].length;
      var i = new Int32Array(e + n + this.keys.length + this.bboxes.length);
      i[0] = this.extent, i[1] = this.n, i[2] = this.padding;
      for (var o = e, s = 0; s < t.length; s++) {
        var a = t[s];
        i[3 + s] = o, i.set(a, o), o += a.length
      }
      return i[3 + t.length] = o, i.set(this.keys, o), o += this.keys.length, i[3 + t.length + 1] = o, i.set(this.bboxes, o), o += this.bboxes.length, i.buffer
    }
  }, function (t, e, n) {
    const r = n(2),
      i = n(18),
      o = n(19),
      s = n(20),
      a = n(13),
      {
        CompoundExpression: u
      } = n(7),
      l = n(28),
      c = n(14),
      h = n(30),
      p = n(31),
      f = n(32),
      g = n(26),
      d = n(5),
      {
        success: y,
        error: _
      } = n(56);
    class m {
      constructor(t) {
        this.expression = t
      }
      evaluate(t, e) {
        return this._evaluator || (this._evaluator = new a), this._evaluator.globals = t, this._evaluator.feature = e, this.expression.evaluate(this._evaluator)
      }
    }
    class v extends m {
      constructor(t, e) {
        var n;
        super(t), this._warningHistory = {}, this._defaultValue = "color" === (n = e).type && w(n.default) ? new S(0, 0, 0, 0) : "color" === n.type ? S.parse(n.default) || null : void 0 === n.default ? null : n.default, "enum" === e.type && (this._enumValues = e.values)
      }
      evaluate(t, e) {
        this._evaluator || (this._evaluator = new a), this._evaluator.globals = t, this._evaluator.feature = e;
        try {
          const t = this.expression.evaluate(this._evaluator);
          if (null == t) return this._defaultValue;
          if (this._enumValues && !(t in this._enumValues)) throw new d(`Expected value to be one of ${Object.keys(this._enumValues).map(t=>JSON.stringify(t)).join(", ")}, but found ${JSON.stringify(t)} instead.`);
          return t
        } catch (t) {
          return this._warningHistory[t.message] || (this._warningHistory[t.message] = !0, "undefined" != typeof console && console.warn(t.message)), this._defaultValue
        }
      }
    }

    function x(t) {
      return Array.isArray(t) && t.length > 0 && "string" == typeof t[0] && t[0] in f
    }

    function E(t, e, n = {}) {
      const i = new s(f, [], function (t) {
          const e = {
            color: O,
            string: T,
            number: M,
            enum: T,
            boolean: P
          };
          if ("array" === t.type) return D(e[t.value] || R, t.length);
          return e[t.type] || null
        }(e)),
        o = i.parse(t);
      return o ? !1 === n.handleErrors ? y(new m(o)) : y(new v(o, e)) : (r(i.errors.length > 0), _(i.errors))
    }
    class b {
      constructor(t, e) {
        this.kind = t, this._styleExpression = e
      }
      evaluate(t, e) {
        return this._styleExpression.evaluate(t, e)
      }
    }
    class I {
      constructor(t, e, n) {
        this.kind = t, this.zoomStops = n.labels, this._styleExpression = e, n instanceof c && (this._interpolationType = n.interpolation)
      }
      evaluate(t, e) {
        return this._styleExpression.evaluate(t, e)
      }
      interpolationFactor(t, e, n) {
        return this._interpolationType ? c.interpolationFactor(this._interpolationType, t, e, n) : 0
      }
    }

    function N(t, e, n = {}) {
      if ("error" === (t = E(t, e, n)).result) return t;
      const r = t.value.expression,
        i = g.isFeatureConstant(r);
      if (!i && !e["property-function"]) return _([new o("", "property expressions not supported")]);
      const s = g.isGlobalPropertyConstant(r, ["zoom"]);
      if (!s && !1 === e["zoom-function"]) return _([new o("", "zoom expressions not supported")]);
      const a = function t(e) {
        let n = null;
        if (e instanceof p) n = t(e.result);
        else if (e instanceof h) {
          for (const r of e.args)
            if (n = t(r), n) break
        } else(e instanceof l || e instanceof c) && e.input instanceof u && "zoom" === e.input.name && (n = e);
        if (n instanceof o) return n;
        return e.eachChild(e => {
          const r = t(e);
          r instanceof o ? n = r : !n && r ? n = new o("", '"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.') : n && r && n !== r && (n = new o("", 'Only one zoom-based "step" or "interpolate" subexpression may be used in an expression.'))
        }), n
      }(r);
      return a || s ? a instanceof o ? _([a]) : a instanceof c && "piecewise-constant" === e.function ? _([new o("", '"interpolate" expressions cannot be used with this property')]) : y(a ? new I(i ? "camera" : "composite", t.value, a) : new b(i ? "constant" : "source", t.value)) : _([new o("", '"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.')])
    }
    const {
      isFunction: w,
      createFunction: C
    } = n(57), {
      Color: S
    } = n(3);
    class L {
      constructor(t, e) {
        this._parameters = t, this._specification = e, i(this, C(this._parameters, this._specification))
      }
      static deserialize(t) {
        return new L(t._parameters, t._specification)
      }
      static serialize(t) {
        return {
          _parameters: t._parameters,
          _specification: t._specification
        }
      }
    }
    t.exports = {
      StyleExpression: m,
      StyleExpressionWithErrorHandling: v,
      isExpression: x,
      createExpression: E,
      createPropertyExpression: N,
      normalizePropertyExpression: function (t, e) {
        if (w(t)) return new L(t, e);
        if (x(t)) {
          const n = N(t, e);
          if ("error" === n.result) throw new Error(n.value.map(t => `${t.key}: ${t.message}`).join(", "));
          return n.value
        } {
          let n = t;
          return "string" == typeof t && "color" === e.type && (n = S.parse(t)), {
            kind: "constant",
            evaluate: () => n
          }
        }
      },
      ZoomConstantExpression: b,
      ZoomDependentExpression: I,
      StylePropertyFunction: L
    };
    const {
      ColorType: O,
      StringType: T,
      NumberType: M,
      BooleanType: P,
      ValueType: R,
      array: D
    } = n(1)
  }, function (t, e, n) {
    const {
      array: r,
      ValueType: i,
      NumberType: o
    } = n(1), s = n(5);
    class a {
      constructor(t, e, n) {
        this.type = t, this.index = e, this.input = n
      }
      static parse(t, e) {
        if (3 !== t.length) return e.error(`Expected 2 arguments, but found ${t.length-1} instead.`);
        const n = e.parse(t[1], 1, o),
          s = e.parse(t[2], 2, r(e.expectedType || i));
        if (!n || !s) return null;
        const u = s.type;
        return new a(u.itemType, n, s)
      }
      evaluate(t) {
        const e = this.index.evaluate(t),
          n = this.input.evaluate(t);
        if (e < 0 || e >= n.length) throw new s(`Array index out of bounds: ${e} > ${n.length}.`);
        if (e !== Math.floor(e)) throw new s(`Array index must be an integer, but found ${e} instead.`);
        return n[e]
      }
      eachChild(t) {
        t(this.index), t(this.input)
      }
      possibleOutputs() {
        return [void 0]
      }
    }
    t.exports = a
  }, function (t, e, n) {
    const r = n(2),
      {
        typeOf: i
      } = n(3);
    class o {
      constructor(t, e, n, r, i, o) {
        this.inputType = t, this.type = e, this.input = n, this.cases = r, this.outputs = i, this.otherwise = o
      }
      static parse(t, e) {
        if (t.length < 5) return e.error(`Expected at least 4 arguments, but found only ${t.length-1}.`);
        if (t.length % 2 != 1) return e.error("Expected an even number of arguments.");
        let n, s;
        e.expectedType && "value" !== e.expectedType.kind && (s = e.expectedType);
        const a = {},
          u = [];
        for (let r = 2; r < t.length - 1; r += 2) {
          let o = t[r];
          const l = t[r + 1];
          Array.isArray(o) || (o = [o]);
          const c = e.concat(r);
          if (0 === o.length) return c.error("Expected at least one branch label.");
          for (const t of o) {
            if ("number" != typeof t && "string" != typeof t) return c.error("Branch labels must be numbers or strings.");
            if ("number" == typeof t && Math.abs(t) > Number.MAX_SAFE_INTEGER) return c.error(`Branch labels must be integers no larger than ${Number.MAX_SAFE_INTEGER}.`);
            if ("number" == typeof t && Math.floor(t) !== t) return c.error("Numeric branch labels must be integer values.");
            if (n) {
              if (c.checkSubtype(n, i(t))) return null
            } else n = i(t);
            if (void 0 !== a[String(t)]) return c.error("Branch labels must be unique.");
            a[String(t)] = u.length
          }
          const h = e.parse(l, r, s);
          if (!h) return null;
          s = s || h.type, u.push(h)
        }
        const l = e.parse(t[1], 1, n);
        if (!l) return null;
        const c = e.parse(t[t.length - 1], t.length - 1, s);
        return c ? (r(n && s), new o(n, s, l, a, u, c)) : null
      }
      evaluate(t) {
        const e = this.input.evaluate(t);
        return (this.outputs[this.cases[e]] || this.otherwise).evaluate(t)
      }
      eachChild(t) {
        t(this.input), this.outputs.forEach(t), t(this.otherwise)
      }
      possibleOutputs() {
        return [].concat(...this.outputs.map(t => t.possibleOutputs())).concat(this.otherwise.possibleOutputs())
      }
    }
    t.exports = o
  }, function (t, e, n) {
    const r = n(2),
      {
        BooleanType: i
      } = n(1);
    class o {
      constructor(t, e, n) {
        this.type = t, this.branches = e, this.otherwise = n
      }
      static parse(t, e) {
        if (t.length < 4) return e.error(`Expected at least 3 arguments, but found only ${t.length-1}.`);
        if (t.length % 2 != 0) return e.error("Expected an odd number of arguments.");
        let n;
        e.expectedType && "value" !== e.expectedType.kind && (n = e.expectedType);
        const s = [];
        for (let r = 1; r < t.length - 1; r += 2) {
          const o = e.parse(t[r], r, i);
          if (!o) return null;
          const a = e.parse(t[r + 1], r + 1, n);
          if (!a) return null;
          s.push([o, a]), n = n || a.type
        }
        const a = e.parse(t[t.length - 1], t.length - 1, n);
        return a ? (r(n), new o(n, s, a)) : null
      }
      evaluate(t) {
        for (const [e, n] of this.branches)
          if (e.evaluate(t)) return n.evaluate(t);
        return this.otherwise.evaluate(t)
      }
      eachChild(t) {
        for (const [e, n] of this.branches) t(e), t(n);
        t(this.otherwise)
      }
      possibleOutputs() {
        return [].concat(...this.branches.map(([t, e]) => e.possibleOutputs())).concat(this.otherwise.possibleOutputs())
      }
    }
    t.exports = o
  }, function (t, e, n) {
    const {
      ValueType: r,
      BooleanType: i
    } = n(1), {
      toString: o
    } = n(1);

    function s(t) {
      return "string" === t.kind || "number" === t.kind || "boolean" === t.kind || "null" === t.kind
    }

    function a(t) {
      return class e {
        constructor(t, e) {
          this.type = i, this.lhs = t, this.rhs = e
        }
        static parse(t, n) {
          if (3 !== t.length) return n.error("Expected two arguments.");
          const i = n.parse(t[1], 1, r);
          if (!i) return null;
          const a = n.parse(t[2], 2, r);
          return a ? s(i.type) || s(a.type) ? i.type.kind !== a.type.kind && "value" !== i.type.kind && "value" !== a.type.kind ? n.error(`Cannot compare ${o(i.type)} and ${o(a.type)}.`) : new e(i, a) : n.error(`Expected at least one argument to be a string, number, boolean, or null, but found (${o(i.type)}, ${o(a.type)}) instead.`) : null
        }
        evaluate(e) {
          return t(this.lhs.evaluate(e), this.rhs.evaluate(e))
        }
        eachChild(t) {
          t(this.lhs), t(this.rhs)
        }
        possibleOutputs() {
          return [!0, !1]
        }
      }
    }
    t.exports = {
      Equals: a((t, e) => t === e),
      NotEquals: a((t, e) => t !== e)
    }
  }, function (t, e) {
    t.exports = {
      success: function (t) {
        return {
          result: "success",
          value: t
        }
      },
      error: function (t) {
        return {
          result: "error",
          value: t
        }
      }
    }
  }, function (t, e, n) {
    const r = n(58),
      i = n(6),
      o = n(18),
      s = n(59),
      a = n(11),
      u = n(14);

    function l(t) {
      return t
    }

    function c(t, e, n) {
      return void 0 !== t ? t : void 0 !== e ? e : void 0 !== n ? n : void 0
    }

    function h(t, e, n, r, i) {
      return c(typeof n === i ? r[n] : void 0, t.default, e.default)
    }

    function p(t, e, n) {
      if ("number" !== s(n)) return c(t.default, e.default);
      const r = t.stops.length;
      if (1 === r) return t.stops[0][1];
      if (n <= t.stops[0][0]) return t.stops[0][1];
      if (n >= t.stops[r - 1][0]) return t.stops[r - 1][1];
      const i = d(t.stops, n);
      return t.stops[i][1]
    }

    function f(t, e, n) {
      const i = void 0 !== t.base ? t.base : 1;
      if ("number" !== s(n)) return c(t.default, e.default);
      const o = t.stops.length;
      if (1 === o) return t.stops[0][1];
      if (n <= t.stops[0][0]) return t.stops[0][1];
      if (n >= t.stops[o - 1][0]) return t.stops[o - 1][1];
      const u = d(t.stops, n),
        h = function (t, e, n, r) {
          const i = r - n,
            o = t - n;
          return 0 === i ? 0 : 1 === e ? o / i : (Math.pow(e, o) - 1) / (Math.pow(e, i) - 1)
        }(n, i, t.stops[u][0], t.stops[u + 1][0]),
        p = t.stops[u][1],
        f = t.stops[u + 1][1];
      let g = a[e.type] || l;
      if (t.colorSpace && "rgb" !== t.colorSpace) {
        const e = r[t.colorSpace];
        g = (t, n) => e.reverse(e.interpolate(e.forward(t), e.forward(n), h))
      }
      return "function" == typeof p.evaluate ? {
        evaluate(...t) {
          const e = p.evaluate.apply(void 0, t),
            n = f.evaluate.apply(void 0, t);
          if (void 0 !== e && void 0 !== n) return g(e, n, h)
        }
      } : g(p, f, h)
    }

    function g(t, e, n) {
      return "color" === e.type ? n = i.parse(n) : s(n) === e.type || "enum" === e.type && e.values[n] || (n = void 0), c(n, t.default, e.default)
    }

    function d(t, e) {
      let n, r, i = 0,
        o = t.length - 1,
        s = 0;
      for (; i <= o;) {
        if (s = Math.floor((i + o) / 2), n = t[s][0], r = t[s + 1][0], e === n || e > n && e < r) return s;
        n < e ? i = s + 1 : n > e && (o = s - 1)
      }
      return Math.max(s - 1, 0)
    }
    t.exports = {
      createFunction: function t(e, n) {
        const s = "color" === n.type,
          a = e.stops && "object" == typeof e.stops[0][0],
          l = a || void 0 !== e.property,
          d = a || !l,
          y = e.type || ("interpolated" === n.function ? "exponential" : "interval");
        if (s && ((e = o({}, e)).stops && (e.stops = e.stops.map(t => [t[0], i.parse(t[1])])), e.default ? e.default = i.parse(e.default) : e.default = i.parse(n.default)), e.colorSpace && "rgb" !== e.colorSpace && !r[e.colorSpace]) throw new Error("Unknown color space: " + e.colorSpace);
        let _, m, v;
        if ("exponential" === y) _ = f;
        else if ("interval" === y) _ = p;
        else if ("categorical" === y) {
          _ = h, m = Object.create(null);
          for (const t of e.stops) m[t[0]] = t[1];
          v = typeof e.stops[0][0]
        } else {
          if ("identity" !== y) throw new Error(`Unknown function type "${y}"`);
          _ = g
        }
        if (a) {
          const r = {},
            i = [];
          for (let t = 0; t < e.stops.length; t++) {
            const n = e.stops[t],
              o = n[0].zoom;
            void 0 === r[o] && (r[o] = {
              zoom: o,
              type: e.type,
              property: e.property,
              default: e.default,
              stops: []
            }, i.push(o)), r[o].stops.push([n[0].value, n[1]])
          }
          const o = [];
          for (const e of i) o.push([r[e].zoom, t(r[e], n)]);
          return {
            kind: "composite",
            interpolationFactor: u.interpolationFactor.bind(void 0, {
              name: "linear"
            }),
            zoomStops: o.map(t => t[0]),
            evaluate: ({
              zoom: t
            }, r) => f({
              stops: o,
              base: e.base
            }, n, t).evaluate(t, r)
          }
        }
        return d ? {
          kind: "camera",
          interpolationFactor: "exponential" === y ? u.interpolationFactor.bind(void 0, {
            name: "exponential",
            base: void 0 !== e.base ? e.base : 1
          }) : () => 0,
          zoomStops: e.stops.map(t => t[0]),
          evaluate: ({
            zoom: t
          }) => _(e, n, t, m, v)
        } : {
          kind: "source",
          evaluate(t, r) {
            const i = r && r.properties ? r.properties[e.property] : void 0;
            return void 0 === i ? c(e.default, n.default) : _(e, n, i, m, v)
          }
        }
      },
      isFunction: function (t) {
        return "object" == typeof t && null !== t && !Array.isArray(t)
      }
    }
  }, function (t, e, n) {
    const r = n(6),
      i = n(11).number,
      o = 6 / 29,
      s = 3 * o * o,
      a = Math.PI / 180,
      u = 180 / Math.PI;

    function l(t) {
      return t > .008856451679035631 ? Math.pow(t, 1 / 3) : t / s + 4 / 29
    }

    function c(t) {
      return t > o ? t * t * t : s * (t - 4 / 29)
    }

    function h(t) {
      return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
    }

    function p(t) {
      return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
    }

    function f(t) {
      const e = p(t.r),
        n = p(t.g),
        r = p(t.b),
        i = l((.4124564 * e + .3575761 * n + .1804375 * r) / .95047),
        o = l((.2126729 * e + .7151522 * n + .072175 * r) / 1);
      return {
        l: 116 * o - 16,
        a: 500 * (i - o),
        b: 200 * (o - l((.0193339 * e + .119192 * n + .9503041 * r) / 1.08883)),
        alpha: t.a
      }
    }

    function g(t) {
      let e = (t.l + 16) / 116,
        n = isNaN(t.a) ? e : e + t.a / 500,
        i = isNaN(t.b) ? e : e - t.b / 200;
      return e = 1 * c(e), n = .95047 * c(n), i = 1.08883 * c(i), new r(h(3.2404542 * n - 1.5371385 * e - .4985314 * i), h(-.969266 * n + 1.8760108 * e + .041556 * i), h(.0556434 * n - .2040259 * e + 1.0572252 * i), t.alpha)
    }

    function d(t, e, n) {
      const r = e - t;
      return t + n * (r > 180 || r < -180 ? r - 360 * Math.round(r / 360) : r)
    }
    t.exports = {
      lab: {
        forward: f,
        reverse: g,
        interpolate: function (t, e, n) {
          return {
            l: i(t.l, e.l, n),
            a: i(t.a, e.a, n),
            b: i(t.b, e.b, n),
            alpha: i(t.alpha, e.alpha, n)
          }
        }
      },
      hcl: {
        forward: function (t) {
          const {
            l: e,
            a: n,
            b: r
          } = f(t), i = Math.atan2(r, n) * u;
          return {
            h: i < 0 ? i + 360 : i,
            c: Math.sqrt(n * n + r * r),
            l: e,
            alpha: t.a
          }
        },
        reverse: function (t) {
          const e = t.h * a,
            n = t.c;
          return g({
            l: t.l,
            a: Math.cos(e) * n,
            b: Math.sin(e) * n,
            alpha: t.alpha
          })
        },
        interpolate: function (t, e, n) {
          return {
            h: d(t.h, e.h, n),
            c: i(t.c, e.c, n),
            l: i(t.l, e.l, n),
            alpha: i(t.alpha, e.alpha, n)
          }
        }
      }
    }
  }, function (t, e) {
    t.exports = function (t) {
      return t instanceof Number ? "number" : t instanceof String ? "string" : t instanceof Boolean ? "boolean" : Array.isArray(t) ? "array" : null === t ? "null" : typeof t
    }
  }, function (t, e) {
    t.exports = self
  }, function (t, e) {
    t.exports = 8192
  }, function (t, e, n) {
    t.exports = function () {
      "use strict";
      var t;
      return (t = new Float32Array(3))[0] = 0, t[1] = 0, t[2] = 0,
        function () {
          var t = new Float32Array(4);
          t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0
        }(), {
          vec3: {
            transformMat3: function (t, e, n) {
              var r = e[0],
                i = e[1],
                o = e[2];
              return t[0] = r * n[0] + i * n[3] + o * n[6], t[1] = r * n[1] + i * n[4] + o * n[7], t[2] = r * n[2] + i * n[5] + o * n[8], t
            }
          },
          vec4: {
            transformMat4: function (t, e, n) {
              var r = e[0],
                i = e[1],
                o = e[2],
                s = e[3];
              return t[0] = n[0] * r + n[4] * i + n[8] * o + n[12] * s, t[1] = n[1] * r + n[5] * i + n[9] * o + n[13] * s, t[2] = n[2] * r + n[6] * i + n[10] * o + n[14] * s, t[3] = n[3] * r + n[7] * i + n[11] * o + n[15] * s, t
            }
          },
          mat2: {
            create: function () {
              var t = new Float32Array(4);
              return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t
            },
            rotate: function (t, e, n) {
              var r = e[0],
                i = e[1],
                o = e[2],
                s = e[3],
                a = Math.sin(n),
                u = Math.cos(n);
              return t[0] = r * u + o * a, t[1] = i * u + s * a, t[2] = r * -a + o * u, t[3] = i * -a + s * u, t
            },
            scale: function (t, e, n) {
              var r = e[0],
                i = e[1],
                o = e[2],
                s = e[3],
                a = n[0],
                u = n[1];
              return t[0] = r * a, t[1] = i * a, t[2] = o * u, t[3] = s * u, t
            }
          },
          mat3: {
            create: function () {
              var t = new Float32Array(9);
              return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
            },
            fromRotation: function (t, e) {
              var n = Math.sin(e),
                r = Math.cos(e);
              return t[0] = r, t[1] = n, t[2] = 0, t[3] = -n, t[4] = r, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
            }
          },
          mat4: {
            create: function () {
              var t = new Float32Array(16);
              return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
            },
            identity: function (t) {
              return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
            },
            translate: function (t, e, n) {
              var r, i, o, s, a, u, l, c, h, p, f, g, d = n[0],
                y = n[1],
                _ = n[2];
              return e === t ? (t[12] = e[0] * d + e[4] * y + e[8] * _ + e[12], t[13] = e[1] * d + e[5] * y + e[9] * _ + e[13], t[14] = e[2] * d + e[6] * y + e[10] * _ + e[14], t[15] = e[3] * d + e[7] * y + e[11] * _ + e[15]) : (r = e[0], i = e[1], o = e[2], s = e[3], a = e[4], u = e[5], l = e[6], c = e[7], h = e[8], p = e[9], f = e[10], g = e[11], t[0] = r, t[1] = i, t[2] = o, t[3] = s, t[4] = a, t[5] = u, t[6] = l, t[7] = c, t[8] = h, t[9] = p, t[10] = f, t[11] = g, t[12] = r * d + a * y + h * _ + e[12], t[13] = i * d + u * y + p * _ + e[13], t[14] = o * d + l * y + f * _ + e[14], t[15] = s * d + c * y + g * _ + e[15]), t
            },
            scale: function (t, e, n) {
              var r = n[0],
                i = n[1],
                o = n[2];
              return t[0] = e[0] * r, t[1] = e[1] * r, t[2] = e[2] * r, t[3] = e[3] * r, t[4] = e[4] * i, t[5] = e[5] * i, t[6] = e[6] * i, t[7] = e[7] * i, t[8] = e[8] * o, t[9] = e[9] * o, t[10] = e[10] * o, t[11] = e[11] * o, t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
            },
            multiply: function (t, e, n) {
              var r = e[0],
                i = e[1],
                o = e[2],
                s = e[3],
                a = e[4],
                u = e[5],
                l = e[6],
                c = e[7],
                h = e[8],
                p = e[9],
                f = e[10],
                g = e[11],
                d = e[12],
                y = e[13],
                _ = e[14],
                m = e[15],
                v = n[0],
                x = n[1],
                E = n[2],
                b = n[3];
              return t[0] = v * r + x * a + E * h + b * d, t[1] = v * i + x * u + E * p + b * y, t[2] = v * o + x * l + E * f + b * _, t[3] = v * s + x * c + E * g + b * m, v = n[4], x = n[5], E = n[6], b = n[7], t[4] = v * r + x * a + E * h + b * d, t[5] = v * i + x * u + E * p + b * y, t[6] = v * o + x * l + E * f + b * _, t[7] = v * s + x * c + E * g + b * m, v = n[8], x = n[9], E = n[10], b = n[11], t[8] = v * r + x * a + E * h + b * d, t[9] = v * i + x * u + E * p + b * y, t[10] = v * o + x * l + E * f + b * _, t[11] = v * s + x * c + E * g + b * m, v = n[12], x = n[13], E = n[14], b = n[15], t[12] = v * r + x * a + E * h + b * d, t[13] = v * i + x * u + E * p + b * y, t[14] = v * o + x * l + E * f + b * _, t[15] = v * s + x * c + E * g + b * m, t
            },
            perspective: function (t, e, n, r, i) {
              var o = 1 / Math.tan(e / 2),
                s = 1 / (r - i);
              return t[0] = o / n, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = o, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = (i + r) * s, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = 2 * i * r * s, t[15] = 0, t
            },
            rotateX: function (t, e, n) {
              var r = Math.sin(n),
                i = Math.cos(n),
                o = e[4],
                s = e[5],
                a = e[6],
                u = e[7],
                l = e[8],
                c = e[9],
                h = e[10],
                p = e[11];
              return e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[4] = o * i + l * r, t[5] = s * i + c * r, t[6] = a * i + h * r, t[7] = u * i + p * r, t[8] = l * i - o * r, t[9] = c * i - s * r, t[10] = h * i - a * r, t[11] = p * i - u * r, t
            },
            rotateZ: function (t, e, n) {
              var r = Math.sin(n),
                i = Math.cos(n),
                o = e[0],
                s = e[1],
                a = e[2],
                u = e[3],
                l = e[4],
                c = e[5],
                h = e[6],
                p = e[7];
              return e !== t && (t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[0] = o * i + l * r, t[1] = s * i + c * r, t[2] = a * i + h * r, t[3] = u * i + p * r, t[4] = l * i - o * r, t[5] = c * i - s * r, t[6] = h * i - a * r, t[7] = p * i - u * r, t
            },
            invert: function (t, e) {
              var n = e[0],
                r = e[1],
                i = e[2],
                o = e[3],
                s = e[4],
                a = e[5],
                u = e[6],
                l = e[7],
                c = e[8],
                h = e[9],
                p = e[10],
                f = e[11],
                g = e[12],
                d = e[13],
                y = e[14],
                _ = e[15],
                m = n * a - r * s,
                v = n * u - i * s,
                x = n * l - o * s,
                E = r * u - i * a,
                b = r * l - o * a,
                I = i * l - o * u,
                N = c * d - h * g,
                w = c * y - p * g,
                C = c * _ - f * g,
                S = h * y - p * d,
                L = h * _ - f * d,
                O = p * _ - f * y,
                T = m * O - v * L + x * S + E * C - b * w + I * N;
              return T ? (T = 1 / T, t[0] = (a * O - u * L + l * S) * T, t[1] = (i * L - r * O - o * S) * T, t[2] = (d * I - y * b + _ * E) * T, t[3] = (p * b - h * I - f * E) * T, t[4] = (u * C - s * O - l * w) * T, t[5] = (n * O - i * C + o * w) * T, t[6] = (y * x - g * I - _ * v) * T, t[7] = (c * I - p * x + f * v) * T, t[8] = (s * L - a * C + l * N) * T, t[9] = (r * C - n * L - o * N) * T, t[10] = (g * b - d * x + _ * m) * T, t[11] = (h * x - c * b - f * m) * T, t[12] = (a * w - s * S - u * N) * T, t[13] = (n * S - r * w + i * N) * T, t[14] = (d * v - g * E - y * m) * T, t[15] = (c * E - h * v + p * m) * T, t) : null
            },
            ortho: function (t, e, n, r, i, o, s) {
              var a = 1 / (e - n),
                u = 1 / (r - i),
                l = 1 / (o - s);
              return t[0] = -2 * a, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * u, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * l, t[11] = 0, t[12] = (e + n) * a, t[13] = (i + r) * u, t[14] = (s + o) * l, t[15] = 1, t
            }
          }
        }
    }()
  }, function (t, e) {
    var n = t.exports = function () {};
    n.prototype.stylesheet = {
      owner: "mapbox",
      id: "testmap"
    }, n.prototype.loaded = function () {}
  }, function (t, e) {
    t.exports = function (t) {
      this.latlong = null, this.setLngLat = function (t) {
        return this.latlong = t, this
      }, this.getLngLat = function () {
        return this.latlong
      }, this.setOffset = function (t) {
        return this.offset = t, this
      }, this.getOffset = function () {
        return this.offset
      }, this.addTo = function (t) {
        return this
      }, this.remove = function () {}
    }
  }, function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(0);

    function i(t, e, n) {
      if (null !== t)
        for (var r, o, s, a, u, l, c, h, p = 0, f = 0, g = t.type, d = "FeatureCollection" === g, y = "Feature" === g, _ = d ? t.features.length : 1, m = 0; m < _; m++) {
          u = (h = !!(c = d ? t.features[m].geometry : y ? t.geometry : t) && "GeometryCollection" === c.type) ? c.geometries.length : 1;
          for (var v = 0; v < u; v++) {
            var x = 0,
              E = 0;
            if (null !== (a = h ? c.geometries[v] : c)) {
              l = a.coordinates;
              var b = a.type;
              switch (p = !n || "Polygon" !== b && "MultiPolygon" !== b ? 0 : 1, b) {
                case null:
                  break;
                case "Point":
                  if (!1 === e(l, f, m, x, E)) return !1;
                  f++, x++;
                  break;
                case "LineString":
                case "MultiPoint":
                  for (r = 0; r < l.length; r++) {
                    if (!1 === e(l[r], f, m, x, E)) return !1;
                    f++, "MultiPoint" === b && x++
                  }
                  "LineString" === b && x++;
                  break;
                case "Polygon":
                case "MultiLineString":
                  for (r = 0; r < l.length; r++) {
                    for (o = 0; o < l[r].length - p; o++) {
                      if (!1 === e(l[r][o], f, m, x, E)) return !1;
                      f++
                    }
                    "MultiLineString" === b && x++, "Polygon" === b && E++
                  }
                  "Polygon" === b && x++;
                  break;
                case "MultiPolygon":
                  for (r = 0; r < l.length; r++) {
                    for ("MultiPolygon" === b && (E = 0), o = 0; o < l[r].length; o++) {
                      for (s = 0; s < l[r][o].length - p; s++) {
                        if (!1 === e(l[r][o][s], f, m, x, E)) return !1;
                        f++
                      }
                      E++
                    }
                    x++
                  }
                  break;
                case "GeometryCollection":
                  for (r = 0; r < a.geometries.length; r++)
                    if (!1 === i(a.geometries[r], e, n)) return !1;
                  break;
                default:
                  throw new Error("Unknown Geometry Type")
              }
            }
          }
        }
    }

    function o(t, e) {
      if ("Feature" === t.type) e(t, 0);
      else if ("FeatureCollection" === t.type)
        for (var n = 0; n < t.features.length && !1 !== e(t.features[n], n); n++);
    }

    function s(t, e) {
      var n, r, i, o, s, a, u, l, c, h, p = 0,
        f = "FeatureCollection" === t.type,
        g = "Feature" === t.type,
        d = f ? t.features.length : 1;
      for (n = 0; n < d; n++) {
        for (a = f ? t.features[n].geometry : g ? t.geometry : t, l = f ? t.features[n].properties : g ? t.properties : {}, c = f ? t.features[n].bbox : g ? t.bbox : void 0, h = f ? t.features[n].id : g ? t.id : void 0, s = (u = !!a && "GeometryCollection" === a.type) ? a.geometries.length : 1, i = 0; i < s; i++)
          if (null !== (o = u ? a.geometries[i] : a)) switch (o.type) {
            case "Point":
            case "LineString":
            case "MultiPoint":
            case "Polygon":
            case "MultiLineString":
            case "MultiPolygon":
              if (!1 === e(o, p, l, c, h)) return !1;
              break;
            case "GeometryCollection":
              for (r = 0; r < o.geometries.length; r++)
                if (!1 === e(o.geometries[r], p, l, c, h)) return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type")
          } else if (!1 === e(null, p, l, c, h)) return !1;
        p++
      }
    }
    var a = function (t) {
      var e = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
      return i(t, (function (t) {
        e[0] > t[0] && (e[0] = t[0]), e[1] > t[1] && (e[1] = t[1]), e[2] < t[0] && (e[2] = t[0]), e[3] < t[1] && (e[3] = t[1])
      })), e
    };
    var u = function (t, e) {
        if (e = e || {}, !Object(r.e)(e)) throw new Error("options is invalid");
        var n = e.properties;
        if (!t) throw new Error("geojson is required");
        var i = a(t),
          o = (i[0] + i[2]) / 2,
          s = (i[1] + i[3]) / 2;
        return Object(r.h)([o, s], n)
      },
      l = n(4);

    function c(t) {
      var e = {
        type: "Feature"
      };
      return Object.keys(t).forEach((function (n) {
        switch (n) {
          case "type":
          case "properties":
          case "geometry":
            return;
          default:
            e[n] = t[n]
        }
      })), e.properties = function t(e) {
        var n = {};
        return e ? (Object.keys(e).forEach((function (r) {
          var i = e[r];
          "object" == typeof i ? null === i ? n[r] = null : i.length ? n[r] = i.map((function (t) {
            return t
          })) : n[r] = t(i) : n[r] = i
        })), n) : n
      }(t.properties), e.geometry = h(t.geometry), e
    }

    function h(t) {
      var e = {
        type: t.type
      };
      return t.bbox && (e.bbox = t.bbox), "GeometryCollection" === t.type ? (e.geometries = t.geometries.map((function (t) {
        return h(t)
      })), e) : (e.coordinates = function t(e) {
        if ("object" != typeof e[0]) return e.slice();
        return e.map((function (e) {
          return t(e)
        }))
      }(t.coordinates), e)
    }
    var p = function (t) {
      if (!t) throw new Error("geojson is required");
      switch (t.type) {
        case "Feature":
          return c(t);
        case "FeatureCollection":
          return function (t) {
            var e = {
              type: "FeatureCollection"
            };
            return Object.keys(t).forEach((function (n) {
              switch (n) {
                case "type":
                case "features":
                  return;
                default:
                  e[n] = t[n]
              }
            })), e.features = t.features.map((function (t) {
              return c(t)
            })), e
          }(t);
        case "Point":
        case "LineString":
        case "Polygon":
        case "MultiPoint":
        case "MultiLineString":
        case "MultiPolygon":
        case "GeometryCollection":
          return h(t);
        default:
          throw new Error("unknown GeoJSON type")
      }
    };

    function f(t, e, n) {
      if (n = n || {}, !Object(r.e)(n)) throw new Error("options is invalid");
      var o = n.mutate;
      if (!t) throw new Error("geojson is required");
      return Array.isArray(t) && Object(r.d)(t[0]) ? t = "mercator" === e ? g(t) : d(t) : (!0 !== o && (t = p(t)), i(t, (function (t) {
        var n = "mercator" === e ? g(t) : d(t);
        t[0] = n[0], t[1] = n[1]
      }))), t
    }

    function g(t) {
      var e, n = Math.PI / 180,
        r = 6378137,
        i = 20037508.342789244,
        o = [r * (Math.abs(t[0]) <= 180 ? t[0] : t[0] - 360 * ((e = t[0]) < 0 ? -1 : e > 0 ? 1 : 0)) * n, r * Math.log(Math.tan(.25 * Math.PI + .5 * t[1] * n))];
      return o[0] > i && (o[0] = i), o[0] < -i && (o[0] = -i), o[1] > i && (o[1] = i), o[1] < -i && (o[1] = -i), o
    }

    function d(t) {
      var e = 180 / Math.PI,
        n = 6378137;
      return [t[0] * e / n, (.5 * Math.PI - 2 * Math.atan(Math.exp(-t[1] / n))) * e]
    }
    var y = function () {
      return new _
    };

    function _() {
      this.reset()
    }
    _.prototype = {
      constructor: _,
      reset: function () {
        this.s = this.t = 0
      },
      add: function (t) {
        v(m, t, this.t), v(this, m.s, this.s), this.s ? this.t += m.t : this.s = m.t
      },
      valueOf: function () {
        return this.s
      }
    };
    var m = new _;

    function v(t, e, n) {
      var r = t.s = e + n,
        i = r - e,
        o = r - i;
      t.t = e - o + (n - i)
    }
    var x = 1e-6,
      E = Math.PI,
      b = E / 2,
      I = E / 4,
      N = 2 * E,
      w = 180 / E,
      C = E / 180,
      S = Math.abs,
      L = Math.atan,
      O = Math.atan2,
      T = Math.cos,
      M = (Math.ceil, Math.exp),
      P = (Math.floor, Math.log),
      R = (Math.pow, Math.sin),
      D = (Math.sign, Math.sqrt),
      A = Math.tan;

    function F(t) {
      return t > 1 ? 0 : t < -1 ? E : Math.acos(t)
    }

    function G(t) {
      return t > 1 ? b : t < -1 ? -b : Math.asin(t)
    }

    function z() {}

    function q(t, e) {
      t && k.hasOwnProperty(t.type) && k[t.type](t, e)
    }
    var B = {
        Feature: function (t, e) {
          q(t.geometry, e)
        },
        FeatureCollection: function (t, e) {
          for (var n = t.features, r = -1, i = n.length; ++r < i;) q(n[r].geometry, e)
        }
      },
      k = {
        Sphere: function (t, e) {
          e.sphere()
        },
        Point: function (t, e) {
          t = t.coordinates, e.point(t[0], t[1], t[2])
        },
        MultiPoint: function (t, e) {
          for (var n = t.coordinates, r = -1, i = n.length; ++r < i;) t = n[r], e.point(t[0], t[1], t[2])
        },
        LineString: function (t, e) {
          j(t.coordinates, e, 0)
        },
        MultiLineString: function (t, e) {
          for (var n = t.coordinates, r = -1, i = n.length; ++r < i;) j(n[r], e, 0)
        },
        Polygon: function (t, e) {
          V(t.coordinates, e)
        },
        MultiPolygon: function (t, e) {
          for (var n = t.coordinates, r = -1, i = n.length; ++r < i;) V(n[r], e)
        },
        GeometryCollection: function (t, e) {
          for (var n = t.geometries, r = -1, i = n.length; ++r < i;) q(n[r], e)
        }
      };

    function j(t, e, n) {
      var r, i = -1,
        o = t.length - n;
      for (e.lineStart(); ++i < o;) r = t[i], e.point(r[0], r[1], r[2]);
      e.lineEnd()
    }

    function V(t, e) {
      var n = -1,
        r = t.length;
      for (e.polygonStart(); ++n < r;) j(t[n], e, 1);
      e.polygonEnd()
    }
    var U = function (t, e) {
      t && B.hasOwnProperty(t.type) ? B[t.type](t, e) : q(t, e)
    };
    y(), y();

    function X(t) {
      return [O(t[1], t[0]), G(t[2])]
    }

    function Y(t) {
      var e = t[0],
        n = t[1],
        r = T(n);
      return [r * T(e), r * R(e), R(n)]
    }

    function H(t, e) {
      return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
    }

    function W(t, e) {
      return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
    }

    function Z(t, e) {
      t[0] += e[0], t[1] += e[1], t[2] += e[2]
    }

    function $(t, e) {
      return [t[0] * e, t[1] * e, t[2] * e]
    }

    function J(t) {
      var e = D(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
      t[0] /= e, t[1] /= e, t[2] /= e
    }
    y();
    var K = function (t, e) {
      function n(n, r) {
        return n = t(n, r), e(n[0], n[1])
      }
      return t.invert && e.invert && (n.invert = function (n, r) {
        return (n = e.invert(n, r)) && t.invert(n[0], n[1])
      }), n
    };

    function Q(t, e) {
      return [t > E ? t - N : t < -E ? t + N : t, e]
    }

    function tt(t, e, n) {
      return (t %= N) ? e || n ? K(nt(t), rt(e, n)) : nt(t) : e || n ? rt(e, n) : Q
    }

    function et(t) {
      return function (e, n) {
        return [(e += t) > E ? e - N : e < -E ? e + N : e, n]
      }
    }

    function nt(t) {
      var e = et(t);
      return e.invert = et(-t), e
    }

    function rt(t, e) {
      var n = T(t),
        r = R(t),
        i = T(e),
        o = R(e);

      function s(t, e) {
        var s = T(e),
          a = T(t) * s,
          u = R(t) * s,
          l = R(e),
          c = l * n + a * r;
        return [O(u * i - c * o, a * n - l * r), G(c * i + u * o)]
      }
      return s.invert = function (t, e) {
        var s = T(e),
          a = T(t) * s,
          u = R(t) * s,
          l = R(e),
          c = l * i - u * o;
        return [O(u * i + l * o, a * n + c * r), G(c * n - a * r)]
      }, s
    }
    Q.invert = Q;

    function it(t, e, n, r, i, o) {
      if (n) {
        var s = T(e),
          a = R(e),
          u = r * n;
        null == i ? (i = e + r * N, o = e - u / 2) : (i = ot(s, i), o = ot(s, o), (r > 0 ? i < o : i > o) && (i += r * N));
        for (var l, c = i; r > 0 ? c > o : c < o; c -= u) l = X([s, -a * T(c), -a * R(c)]), t.point(l[0], l[1])
      }
    }

    function ot(t, e) {
      (e = Y(e))[0] -= t, J(e);
      var n = F(-e[1]);
      return ((-e[2] < 0 ? -n : n) + N - x) % N
    }
    var st = function () {
        var t, e = [];
        return {
          point: function (e, n) {
            t.push([e, n])
          },
          lineStart: function () {
            e.push(t = [])
          },
          lineEnd: z,
          rejoin: function () {
            e.length > 1 && e.push(e.pop().concat(e.shift()))
          },
          result: function () {
            var n = e;
            return e = [], t = null, n
          }
        }
      },
      at = function (t, e) {
        return S(t[0] - e[0]) < x && S(t[1] - e[1]) < x
      };

    function ut(t, e, n, r) {
      this.x = t, this.z = e, this.o = n, this.e = r, this.v = !1, this.n = this.p = null
    }
    var lt = function (t, e, n, r, i) {
      var o, s, a = [],
        u = [];
      if (t.forEach((function (t) {
          if (!((e = t.length - 1) <= 0)) {
            var e, n, r = t[0],
              s = t[e];
            if (at(r, s)) {
              for (i.lineStart(), o = 0; o < e; ++o) i.point((r = t[o])[0], r[1]);
              i.lineEnd()
            } else a.push(n = new ut(r, t, null, !0)), u.push(n.o = new ut(r, null, n, !1)), a.push(n = new ut(s, t, null, !1)), u.push(n.o = new ut(s, null, n, !0))
          }
        })), a.length) {
        for (u.sort(e), ct(a), ct(u), o = 0, s = u.length; o < s; ++o) u[o].e = n = !n;
        for (var l, c, h = a[0];;) {
          for (var p = h, f = !0; p.v;)
            if ((p = p.n) === h) return;
          l = p.z, i.lineStart();
          do {
            if (p.v = p.o.v = !0, p.e) {
              if (f)
                for (o = 0, s = l.length; o < s; ++o) i.point((c = l[o])[0], c[1]);
              else r(p.x, p.n.x, 1, i);
              p = p.n
            } else {
              if (f)
                for (l = p.p.z, o = l.length - 1; o >= 0; --o) i.point((c = l[o])[0], c[1]);
              else r(p.x, p.p.x, -1, i);
              p = p.p
            }
            l = (p = p.o).z, f = !f
          } while (!p.v);
          i.lineEnd()
        }
      }
    };

    function ct(t) {
      if (e = t.length) {
        for (var e, n, r = 0, i = t[0]; ++r < e;) i.n = n = t[r], n.p = i, i = n;
        i.n = n = t[0], n.p = i
      }
    }
    var ht = function (t, e) {
      return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
    };
    var pt, ft;
    1 === (pt = ht).length && (ft = pt, pt = function (t, e) {
      return ht(ft(t), e)
    });
    var gt = Array.prototype;
    gt.slice, gt.map, Math.sqrt(50), Math.sqrt(10), Math.sqrt(2);
    var dt = function (t) {
      for (var e, n, r, i = t.length, o = -1, s = 0; ++o < i;) s += t[o].length;
      for (n = new Array(s); --i >= 0;)
        for (e = (r = t[i]).length; --e >= 0;) n[--s] = r[e];
      return n
    };

    function yt(t, e, n, r) {
      function i(i, o) {
        return t <= i && i <= n && e <= o && o <= r
      }

      function o(i, o, a, l) {
        var c = 0,
          h = 0;
        if (null == i || (c = s(i, a)) !== (h = s(o, a)) || u(i, o) < 0 ^ a > 0)
          do {
            l.point(0 === c || 3 === c ? t : n, c > 1 ? r : e)
          } while ((c = (c + a + 4) % 4) !== h);
        else l.point(o[0], o[1])
      }

      function s(r, i) {
        return S(r[0] - t) < x ? i > 0 ? 0 : 3 : S(r[0] - n) < x ? i > 0 ? 2 : 1 : S(r[1] - e) < x ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2
      }

      function a(t, e) {
        return u(t.x, e.x)
      }

      function u(t, e) {
        var n = s(t, 1),
          r = s(e, 1);
        return n !== r ? n - r : 0 === n ? e[1] - t[1] : 1 === n ? t[0] - e[0] : 2 === n ? t[1] - e[1] : e[0] - t[0]
      }
      return function (s) {
        var u, l, c, h, p, f, g, d, y, _, m, v = s,
          x = st(),
          E = {
            point: b,
            lineStart: function () {
              E.point = I, l && l.push(c = []);
              _ = !0, y = !1, g = d = NaN
            },
            lineEnd: function () {
              u && (I(h, p), f && y && x.rejoin(), u.push(x.result()));
              E.point = b, y && v.lineEnd()
            },
            polygonStart: function () {
              v = x, u = [], l = [], m = !0
            },
            polygonEnd: function () {
              var e = function () {
                  for (var e = 0, n = 0, i = l.length; n < i; ++n)
                    for (var o, s, a = l[n], u = 1, c = a.length, h = a[0], p = h[0], f = h[1]; u < c; ++u) o = p, s = f, h = a[u], p = h[0], f = h[1], s <= r ? f > r && (p - o) * (r - s) > (f - s) * (t - o) && ++e : f <= r && (p - o) * (r - s) < (f - s) * (t - o) && --e;
                  return e
                }(),
                n = m && e,
                i = (u = dt(u)).length;
              (n || i) && (s.polygonStart(), n && (s.lineStart(), o(null, null, 1, s), s.lineEnd()), i && lt(u, a, e, o, s), s.polygonEnd());
              v = s, u = l = c = null
            }
          };

        function b(t, e) {
          i(t, e) && v.point(t, e)
        }

        function I(o, s) {
          var a = i(o, s);
          if (l && c.push([o, s]), _) h = o, p = s, f = a, _ = !1, a && (v.lineStart(), v.point(o, s));
          else if (a && y) v.point(o, s);
          else {
            var u = [g = Math.max(-1e9, Math.min(1e9, g)), d = Math.max(-1e9, Math.min(1e9, d))],
              x = [o = Math.max(-1e9, Math.min(1e9, o)), s = Math.max(-1e9, Math.min(1e9, s))];
            ! function (t, e, n, r, i, o) {
              var s, a = t[0],
                u = t[1],
                l = 0,
                c = 1,
                h = e[0] - a,
                p = e[1] - u;
              if (s = n - a, h || !(s > 0)) {
                if (s /= h, h < 0) {
                  if (s < l) return;
                  s < c && (c = s)
                } else if (h > 0) {
                  if (s > c) return;
                  s > l && (l = s)
                }
                if (s = i - a, h || !(s < 0)) {
                  if (s /= h, h < 0) {
                    if (s > c) return;
                    s > l && (l = s)
                  } else if (h > 0) {
                    if (s < l) return;
                    s < c && (c = s)
                  }
                  if (s = r - u, p || !(s > 0)) {
                    if (s /= p, p < 0) {
                      if (s < l) return;
                      s < c && (c = s)
                    } else if (p > 0) {
                      if (s > c) return;
                      s > l && (l = s)
                    }
                    if (s = o - u, p || !(s < 0)) {
                      if (s /= p, p < 0) {
                        if (s > c) return;
                        s > l && (l = s)
                      } else if (p > 0) {
                        if (s < l) return;
                        s < c && (c = s)
                      }
                      return l > 0 && (t[0] = a + l * h, t[1] = u + l * p), c < 1 && (e[0] = a + c * h, e[1] = u + c * p), !0
                    }
                  }
                }
              }
            }(u, x, t, e, n, r) ? a && (v.lineStart(), v.point(o, s), m = !1): (y || (v.lineStart(), v.point(u[0], u[1])), v.point(x[0], x[1]), a || v.lineEnd(), m = !1)
          }
          g = o, d = s, y = a
        }
        return E
      }
    }
    var _t = y(),
      mt = function (t, e) {
        var n = e[0],
          r = e[1],
          i = [R(n), -T(n), 0],
          o = 0,
          s = 0;
        _t.reset();
        for (var a = 0, u = t.length; a < u; ++a)
          if (c = (l = t[a]).length)
            for (var l, c, h = l[c - 1], p = h[0], f = h[1] / 2 + I, g = R(f), d = T(f), y = 0; y < c; ++y, p = m, g = b, d = w, h = _) {
              var _ = l[y],
                m = _[0],
                v = _[1] / 2 + I,
                b = R(v),
                w = T(v),
                C = m - p,
                S = C >= 0 ? 1 : -1,
                L = S * C,
                M = L > E,
                P = g * b;
              if (_t.add(O(P * S * R(L), d * w + P * T(L))), o += M ? C + S * N : C, M ^ p >= n ^ m >= n) {
                var D = W(Y(h), Y(_));
                J(D);
                var A = W(i, D);
                J(A);
                var F = (M ^ C >= 0 ? -1 : 1) * G(A[2]);
                (r > F || r === F && (D[0] || D[1])) && (s += M ^ C >= 0 ? 1 : -1)
              }
            }
        return (o < -x || o < x && _t < -x) ^ 1 & s
      };
    y();
    var vt = function (t) {
      return t
    };
    y(), y();
    var xt = 1 / 0,
      Et = xt,
      bt = -xt,
      It = bt;
    var Nt = {
      point: function (t, e) {
        t < xt && (xt = t);
        t > bt && (bt = t);
        e < Et && (Et = e);
        e > It && (It = e)
      },
      lineStart: z,
      lineEnd: z,
      polygonStart: z,
      polygonEnd: z,
      result: function () {
        var t = [
          [xt, Et],
          [bt, It]
        ];
        return bt = It = -(Et = xt = 1 / 0), t
      }
    };

    function wt(t) {
      this._context = t
    }
    wt.prototype = {
      _radius: 4.5,
      pointRadius: function (t) {
        return this._radius = t, this
      },
      polygonStart: function () {
        this._line = 0
      },
      polygonEnd: function () {
        this._line = NaN
      },
      lineStart: function () {
        this._point = 0
      },
      lineEnd: function () {
        0 === this._line && this._context.closePath(), this._point = NaN
      },
      point: function (t, e) {
        switch (this._point) {
          case 0:
            this._context.moveTo(t, e), this._point = 1;
            break;
          case 1:
            this._context.lineTo(t, e);
            break;
          default:
            this._context.moveTo(t + this._radius, e), this._context.arc(t, e, this._radius, 0, N)
        }
      },
      result: z
    };
    y();

    function Ct() {
      this._string = []
    }

    function St(t) {
      return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
    }
    Ct.prototype = {
      _radius: 4.5,
      _circle: St(4.5),
      pointRadius: function (t) {
        return (t = +t) !== this._radius && (this._radius = t, this._circle = null), this
      },
      polygonStart: function () {
        this._line = 0
      },
      polygonEnd: function () {
        this._line = NaN
      },
      lineStart: function () {
        this._point = 0
      },
      lineEnd: function () {
        0 === this._line && this._string.push("Z"), this._point = NaN
      },
      point: function (t, e) {
        switch (this._point) {
          case 0:
            this._string.push("M", t, ",", e), this._point = 1;
            break;
          case 1:
            this._string.push("L", t, ",", e);
            break;
          default:
            null == this._circle && (this._circle = St(this._radius)), this._string.push("M", t, ",", e, this._circle)
        }
      },
      result: function () {
        if (this._string.length) {
          var t = this._string.join("");
          return this._string = [], t
        }
        return null
      }
    };
    var Lt = function (t, e, n, r) {
      return function (i, o) {
        var s, a, u, l = e(o),
          c = i.invert(r[0], r[1]),
          h = st(),
          p = e(h),
          f = !1,
          g = {
            point: d,
            lineStart: _,
            lineEnd: m,
            polygonStart: function () {
              g.point = v, g.lineStart = x, g.lineEnd = E, a = [], s = []
            },
            polygonEnd: function () {
              g.point = d, g.lineStart = _, g.lineEnd = m, a = dt(a);
              var t = mt(s, c);
              a.length ? (f || (o.polygonStart(), f = !0), lt(a, Tt, t, n, o)) : t && (f || (o.polygonStart(), f = !0), o.lineStart(), n(null, null, 1, o), o.lineEnd()), f && (o.polygonEnd(), f = !1), a = s = null
            },
            sphere: function () {
              o.polygonStart(), o.lineStart(), n(null, null, 1, o), o.lineEnd(), o.polygonEnd()
            }
          };

        function d(e, n) {
          var r = i(e, n);
          t(e = r[0], n = r[1]) && o.point(e, n)
        }

        function y(t, e) {
          var n = i(t, e);
          l.point(n[0], n[1])
        }

        function _() {
          g.point = y, l.lineStart()
        }

        function m() {
          g.point = d, l.lineEnd()
        }

        function v(t, e) {
          u.push([t, e]);
          var n = i(t, e);
          p.point(n[0], n[1])
        }

        function x() {
          p.lineStart(), u = []
        }

        function E() {
          v(u[0][0], u[0][1]), p.lineEnd();
          var t, e, n, r, i = p.clean(),
            l = h.result(),
            c = l.length;
          if (u.pop(), s.push(u), u = null, c)
            if (1 & i) {
              if ((e = (n = l[0]).length - 1) > 0) {
                for (f || (o.polygonStart(), f = !0), o.lineStart(), t = 0; t < e; ++t) o.point((r = n[t])[0], r[1]);
                o.lineEnd()
              }
            } else c > 1 && 2 & i && l.push(l.pop().concat(l.shift())), a.push(l.filter(Ot))
        }
        return g
      }
    };

    function Ot(t) {
      return t.length > 1
    }

    function Tt(t, e) {
      return ((t = t.x)[0] < 0 ? t[1] - b - x : b - t[1]) - ((e = e.x)[0] < 0 ? e[1] - b - x : b - e[1])
    }
    var Mt = Lt((function () {
      return !0
    }), (function (t) {
      var e, n = NaN,
        r = NaN,
        i = NaN;
      return {
        lineStart: function () {
          t.lineStart(), e = 1
        },
        point: function (o, s) {
          var a = o > 0 ? E : -E,
            u = S(o - n);
          S(u - E) < x ? (t.point(n, r = (r + s) / 2 > 0 ? b : -b), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(a, r), t.point(o, r), e = 0) : i !== a && u >= E && (S(n - i) < x && (n -= i * x), S(o - a) < x && (o -= a * x), r = function (t, e, n, r) {
            var i, o, s = R(t - n);
            return S(s) > x ? L((R(e) * (o = T(r)) * R(n) - R(r) * (i = T(e)) * R(t)) / (i * o * s)) : (e + r) / 2
          }(n, r, o, s), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(a, r), e = 0), t.point(n = o, r = s), i = a
        },
        lineEnd: function () {
          t.lineEnd(), n = r = NaN
        },
        clean: function () {
          return 2 - e
        }
      }
    }), (function (t, e, n, r) {
      var i;
      if (null == t) i = n * b, r.point(-E, i), r.point(0, i), r.point(E, i), r.point(E, 0), r.point(E, -i), r.point(0, -i), r.point(-E, -i), r.point(-E, 0), r.point(-E, i);
      else if (S(t[0] - e[0]) > x) {
        var o = t[0] < e[0] ? E : -E;
        i = n * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i)
      } else r.point(e[0], e[1])
    }), [-E, -b]);
    var Pt = function (t, e) {
      var n = T(t),
        r = n > 0,
        i = S(n) > x;

      function o(t, e) {
        return T(t) * T(e) > n
      }

      function s(t, e, r) {
        var i = [1, 0, 0],
          o = W(Y(t), Y(e)),
          s = H(o, o),
          a = o[0],
          u = s - a * a;
        if (!u) return !r && t;
        var l = n * s / u,
          c = -n * a / u,
          h = W(i, o),
          p = $(i, l);
        Z(p, $(o, c));
        var f = h,
          g = H(p, f),
          d = H(f, f),
          y = g * g - d * (H(p, p) - 1);
        if (!(y < 0)) {
          var _ = D(y),
            m = $(f, (-g - _) / d);
          if (Z(m, p), m = X(m), !r) return m;
          var v, b = t[0],
            I = e[0],
            N = t[1],
            w = e[1];
          I < b && (v = b, b = I, I = v);
          var C = I - b,
            L = S(C - E) < x;
          if (!L && w < N && (v = N, N = w, w = v), L || C < x ? L ? N + w > 0 ^ m[1] < (S(m[0] - b) < x ? N : w) : N <= m[1] && m[1] <= w : C > E ^ (b <= m[0] && m[0] <= I)) {
            var O = $(f, (-g + _) / d);
            return Z(O, p), [m, X(O)]
          }
        }
      }

      function a(e, n) {
        var i = r ? t : E - t,
          o = 0;
        return e < -i ? o |= 1 : e > i && (o |= 2), n < -i ? o |= 4 : n > i && (o |= 8), o
      }
      return Lt(o, (function (t) {
        var e, n, u, l, c;
        return {
          lineStart: function () {
            l = u = !1, c = 1
          },
          point: function (h, p) {
            var f, g = [h, p],
              d = o(h, p),
              y = r ? d ? 0 : a(h, p) : d ? a(h + (h < 0 ? E : -E), p) : 0;
            if (!e && (l = u = d) && t.lineStart(), d !== u && (!(f = s(e, g)) || at(e, f) || at(g, f)) && (g[0] += x, g[1] += x, d = o(g[0], g[1])), d !== u) c = 0, d ? (t.lineStart(), f = s(g, e), t.point(f[0], f[1])) : (f = s(e, g), t.point(f[0], f[1]), t.lineEnd()), e = f;
            else if (i && e && r ^ d) {
              var _;
              y & n || !(_ = s(g, e, !0)) || (c = 0, r ? (t.lineStart(), t.point(_[0][0], _[0][1]), t.point(_[1][0], _[1][1]), t.lineEnd()) : (t.point(_[1][0], _[1][1]), t.lineEnd(), t.lineStart(), t.point(_[0][0], _[0][1])))
            }!d || e && at(e, g) || t.point(g[0], g[1]), e = g, u = d, n = y
          },
          lineEnd: function () {
            u && t.lineEnd(), e = null
          },
          clean: function () {
            return c | (l && u) << 1
          }
        }
      }), (function (n, r, i, o) {
        it(o, t, e, i, n, r)
      }), r ? [0, -t] : [-E, t - E])
    };

    function Rt(t) {
      return function (e) {
        var n = new Dt;
        for (var r in t) n[r] = t[r];
        return n.stream = e, n
      }
    }

    function Dt() {}

    function At(t, e, n) {
      var r = e[1][0] - e[0][0],
        i = e[1][1] - e[0][1],
        o = t.clipExtent && t.clipExtent();
      t.scale(150).translate([0, 0]), null != o && t.clipExtent(null), U(n, t.stream(Nt));
      var s = Nt.result(),
        a = Math.min(r / (s[1][0] - s[0][0]), i / (s[1][1] - s[0][1])),
        u = +e[0][0] + (r - a * (s[1][0] + s[0][0])) / 2,
        l = +e[0][1] + (i - a * (s[1][1] + s[0][1])) / 2;
      return null != o && t.clipExtent(o), t.scale(150 * a).translate([u, l])
    }

    function Ft(t, e, n) {
      return At(t, [
        [0, 0], e
      ], n)
    }
    Dt.prototype = {
      constructor: Dt,
      point: function (t, e) {
        this.stream.point(t, e)
      },
      sphere: function () {
        this.stream.sphere()
      },
      lineStart: function () {
        this.stream.lineStart()
      },
      lineEnd: function () {
        this.stream.lineEnd()
      },
      polygonStart: function () {
        this.stream.polygonStart()
      },
      polygonEnd: function () {
        this.stream.polygonEnd()
      }
    };
    var Gt = T(30 * C),
      zt = function (t, e) {
        return +e ? function (t, e) {
          function n(r, i, o, s, a, u, l, c, h, p, f, g, d, y) {
            var _ = l - r,
              m = c - i,
              v = _ * _ + m * m;
            if (v > 4 * e && d--) {
              var E = s + p,
                b = a + f,
                I = u + g,
                N = D(E * E + b * b + I * I),
                w = G(I /= N),
                C = S(S(I) - 1) < x || S(o - h) < x ? (o + h) / 2 : O(b, E),
                L = t(C, w),
                T = L[0],
                M = L[1],
                P = T - r,
                R = M - i,
                A = m * P - _ * R;
              (A * A / v > e || S((_ * P + m * R) / v - .5) > .3 || s * p + a * f + u * g < Gt) && (n(r, i, o, s, a, u, T, M, C, E /= N, b /= N, I, d, y), y.point(T, M), n(T, M, C, E, b, I, l, c, h, p, f, g, d, y))
            }
          }
          return function (e) {
            var r, i, o, s, a, u, l, c, h, p, f, g, d = {
              point: y,
              lineStart: _,
              lineEnd: v,
              polygonStart: function () {
                e.polygonStart(), d.lineStart = x
              },
              polygonEnd: function () {
                e.polygonEnd(), d.lineStart = _
              }
            };

            function y(n, r) {
              n = t(n, r), e.point(n[0], n[1])
            }

            function _() {
              c = NaN, d.point = m, e.lineStart()
            }

            function m(r, i) {
              var o = Y([r, i]),
                s = t(r, i);
              n(c, h, l, p, f, g, c = s[0], h = s[1], l = r, p = o[0], f = o[1], g = o[2], 16, e), e.point(c, h)
            }

            function v() {
              d.point = y, e.lineEnd()
            }

            function x() {
              _(), d.point = E, d.lineEnd = b
            }

            function E(t, e) {
              m(r = t, e), i = c, o = h, s = p, a = f, u = g, d.point = m
            }

            function b() {
              n(c, h, l, p, f, g, i, o, r, s, a, u, 16, e), d.lineEnd = v, v()
            }
            return d
          }
        }(t, e) : function (t) {
          return Rt({
            point: function (e, n) {
              e = t(e, n), this.stream.point(e[0], e[1])
            }
          })
        }(t)
      };
    var qt = Rt({
      point: function (t, e) {
        this.stream.point(t * C, e * C)
      }
    });

    function Bt(t) {
      return kt((function () {
        return t
      }))()
    }

    function kt(t) {
      var e, n, r, i, o, s, a, u, l, c, h = 150,
        p = 480,
        f = 250,
        g = 0,
        d = 0,
        y = 0,
        _ = 0,
        m = 0,
        v = null,
        x = Mt,
        E = null,
        b = vt,
        I = .5,
        N = zt(O, I);

      function S(t) {
        return [(t = o(t[0] * C, t[1] * C))[0] * h + n, r - t[1] * h]
      }

      function L(t) {
        return (t = o.invert((t[0] - n) / h, (r - t[1]) / h)) && [t[0] * w, t[1] * w]
      }

      function O(t, i) {
        return [(t = e(t, i))[0] * h + n, r - t[1] * h]
      }

      function T() {
        o = K(i = tt(y, _, m), e);
        var t = e(g, d);
        return n = p - t[0] * h, r = f + t[1] * h, M()
      }

      function M() {
        return l = c = null, S
      }
      return S.stream = function (t) {
          return l && c === t ? l : l = qt(x(i, N(b(c = t))))
        }, S.clipAngle = function (t) {
          return arguments.length ? (x = +t ? Pt(v = t * C, 6 * C) : (v = null, Mt), M()) : v * w
        }, S.clipExtent = function (t) {
          return arguments.length ? (b = null == t ? (E = s = a = u = null, vt) : yt(E = +t[0][0], s = +t[0][1], a = +t[1][0], u = +t[1][1]), M()) : null == E ? null : [
            [E, s],
            [a, u]
          ]
        }, S.scale = function (t) {
          return arguments.length ? (h = +t, T()) : h
        }, S.translate = function (t) {
          return arguments.length ? (p = +t[0], f = +t[1], T()) : [p, f]
        }, S.center = function (t) {
          return arguments.length ? (g = t[0] % 360 * C, d = t[1] % 360 * C, T()) : [g * w, d * w]
        }, S.rotate = function (t) {
          return arguments.length ? (y = t[0] % 360 * C, _ = t[1] % 360 * C, m = t.length > 2 ? t[2] % 360 * C : 0, T()) : [y * w, _ * w, m * w]
        }, S.precision = function (t) {
          return arguments.length ? (N = zt(O, I = t * t), M()) : D(I)
        }, S.fitExtent = function (t, e) {
          return At(S, t, e)
        }, S.fitSize = function (t, e) {
          return Ft(S, t, e)
        },
        function () {
          return e = t.apply(this, arguments), S.invert = e.invert && L, T()
        }
    }

    function jt(t) {
      return function (e, n) {
        var r = T(e),
          i = T(n),
          o = t(r * i);
        return [o * i * R(e), o * R(n)]
      }
    }

    function Vt(t) {
      return function (e, n) {
        var r = D(e * e + n * n),
          i = t(r),
          o = R(i),
          s = T(i);
        return [O(e * o, r * s), G(r && n * o / r)]
      }
    }
    var Ut = jt((function (t) {
      return D(2 / (1 + t))
    }));
    Ut.invert = Vt((function (t) {
      return 2 * G(t / 2)
    }));
    var Xt = jt((function (t) {
      return (t = F(t)) && t / R(t)
    }));
    Xt.invert = Vt((function (t) {
      return t
    }));

    function Yt(t, e) {
      return [t, P(A((b + e) / 2))]
    }
    Yt.invert = function (t, e) {
      return [t, 2 * L(M(e)) - b]
    };

    function Ht(t) {
      var e, n, r, i = Bt(t),
        o = i.center,
        s = i.scale,
        a = i.translate,
        u = i.clipExtent,
        l = null;

      function c() {
        var o = E * s(),
          a = i(function (t) {
            function e(e) {
              return (e = t(e[0] * C, e[1] * C))[0] *= w, e[1] *= w, e
            }
            return t = tt(t[0] * C, t[1] * C, t.length > 2 ? t[2] * C : 0), e.invert = function (e) {
              return (e = t.invert(e[0] * C, e[1] * C))[0] *= w, e[1] *= w, e
            }, e
          }(i.rotate()).invert([0, 0]));
        return u(null == l ? [
          [a[0] - o, a[1] - o],
          [a[0] + o, a[1] + o]
        ] : t === Yt ? [
          [Math.max(a[0] - o, l), e],
          [Math.min(a[0] + o, n), r]
        ] : [
          [l, Math.max(a[1] - o, e)],
          [n, Math.min(a[1] + o, r)]
        ])
      }
      return i.scale = function (t) {
        return arguments.length ? (s(t), c()) : s()
      }, i.translate = function (t) {
        return arguments.length ? (a(t), c()) : a()
      }, i.center = function (t) {
        return arguments.length ? (o(t), c()) : o()
      }, i.clipExtent = function (t) {
        return arguments.length ? (null == t ? l = e = n = r = null : (l = +t[0][0], e = +t[0][1], n = +t[1][0], r = +t[1][1]), c()) : null == l ? null : [
          [l, e],
          [n, r]
        ]
      }, c()
    }

    function Wt(t, e) {
      return [t, e]
    }
    Wt.invert = Wt;

    function Zt(t, e) {
      var n = T(e),
        r = T(t) * n;
      return [n * R(t) / r, R(e) / r]
    }
    Zt.invert = Vt(L);

    function $t(t, e) {
      var n = e * e,
        r = n * n;
      return [t * (.8707 - .131979 * n + r * (r * (.003971 * n - .001529 * r) - .013791)), e * (1.007226 + n * (.015085 + r * (.028874 * n - .044475 - .005916 * r)))]
    }
    $t.invert = function (t, e) {
      var n, r = e,
        i = 25;
      do {
        var o = r * r,
          s = o * o;
        r -= n = (r * (1.007226 + o * (.015085 + s * (.028874 * o - .044475 - .005916 * s))) - e) / (1.007226 + o * (.045255 + s * (.259866 * o - .311325 - .005916 * 11 * s)))
      } while (S(n) > x && --i > 0);
      return [t / (.8707 + (o = r * r) * (o * (o * o * o * (.003971 - .001529 * o) - .013791) - .131979)), r]
    };

    function Jt(t, e) {
      return [T(e) * R(t), R(e)]
    }
    Jt.invert = Vt(G);

    function Kt(t, e) {
      var n = T(e),
        r = 1 + T(t) * n;
      return [n * R(t) / r, R(e) / r]
    }
    Kt.invert = Vt((function (t) {
      return 2 * L(t)
    }));

    function Qt(t, e) {
      return [P(A((b + e) / 2)), -t]
    }
    Qt.invert = function (t, e) {
      return [-e, 2 * L(M(t)) - b]
    };

    function te(t, e, n, i) {
      var o, u = t.properties || {},
        c = "Feature" === t.type ? t.geometry : t;
      if ("GeometryCollection" === c.type) {
        var h = [];
        return s(t, (function (t) {
          var r = te(t, e, n, i);
          r && h.push(r)
        })), Object(r.c)(h)
      }
      var p = a(t),
        g = p[1] > 50 && p[3] > 50;
      o = g ? {
        type: c.type,
        coordinates: ee(c.coordinates, re(c))
      } : function (t, e) {
        return f(t, "mercator", e)
      }(c);
      var d, y = (new l.GeoJSONReader).read(o),
        _ = Object(r.j)(Object(r.f)(e, n), "meters"),
        m = l.BufferOp.bufferOp(y, _);
      if (! function t(e) {
          return Array.isArray(e[0]) ? t(e[0]) : isNaN(e[0])
        }((m = (new l.GeoJSONWriter).write(m)).coordinates)) return (d = g ? {
        type: m.type,
        coordinates: ne(m.coordinates, re(c))
      } : function (t, e) {
        return f(t, "wgs84", e)
      }(m)).geometry ? d : Object(r.b)(d, u)
    }

    function ee(t, e) {
      return "object" != typeof t[0] ? e(t) : t.map((function (t) {
        return ee(t, e)
      }))
    }

    function ne(t, e) {
      return "object" != typeof t[0] ? e.invert(t) : t.map((function (t) {
        return ne(t, e)
      }))
    }

    function re(t) {
      var e = u(t).geometry.coordinates.reverse(),
        n = e.map((function (t) {
          return -t
        }));
      return function () {
        var t = Ht(Qt),
          e = t.center,
          n = t.rotate;
        return t.center = function (t) {
          return arguments.length ? e([-t[1], t[0]]) : [(t = e())[1], -t[0]]
        }, t.rotate = function (t) {
          return arguments.length ? n([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : [(t = n())[0], t[1], t[2] - 90]
        }, n([0, 0, 90]).scale(159.155)
      }().center(e).rotate(n).scale(r.a)
    }
    e.default = function (t, e, n) {
      var i = (n = n || {}).units,
        a = n.steps || 64;
      if (!t) throw new Error("geojson is required");
      if ("object" != typeof n) throw new Error("options must be an object");
      if ("number" != typeof a) throw new Error("steps must be an number");
      if (void 0 === e) throw new Error("radius is required");
      if (a <= 0) throw new Error("steps must be greater than 0");
      a = a || 64, i = i || "kilometers";
      var u = [];
      switch (t.type) {
        case "GeometryCollection":
          return s(t, (function (t) {
            var n = te(t, e, i, a);
            n && u.push(n)
          })), Object(r.c)(u);
        case "FeatureCollection":
          return o(t, (function (t) {
            var n = te(t, e, i, a);
            n && o(n, (function (t) {
              t && u.push(t)
            }))
          })), Object(r.c)(u)
      }
      return te(t, e, i, a)
    }
  }])
}));