(self.webpackChunknotion_next = self.webpackChunknotion_next || []).push([
    [181], {
        65651: (t, e, r) => {
            "use strict";
            r.r(e), r.d(e, {
                createClient: () => i
            });
            var n = r(4615),
                o = r(95477);

            function i(t) {
                const e = r(27121),
                    {
                        maxReconnectDelayMs: i,
                        minReconnectDelayMs: s
                    } = t,
                    a = (0, n.ZP)();
                return new e("".concat(o.default.messageStore.url, "?sessionId=").concat(encodeURIComponent(a)), {
                    reconnect: {
                        max: i,
                        min: s,
                        retries: 1e20
                    }
                })
            }
        },
        27121: function(t, e, r) {
            var n;
            ! function(o, i, s, a) {
                i[o] = s.call(i);
                for (var c = 0; c < a.length; c++) a[c](i[o]);
                t.exports ? t.exports = i[o] : void 0 === (n = function() {
                    return i[o]
                }.call(e, r, e, t)) || (t.exports = n)
            }("Primus", this || {}, (function() {
                return function t(e, r, n) {
                    function o(s, a) {
                        if (!r[s]) {
                            if (!e[s]) {
                                if (i) return i(s, !0);
                                var c = new Error("Cannot find module '" + s + "'");
                                throw c.code = "MODULE_NOT_FOUND", c
                            }
                            var u = r[s] = {
                                exports: {}
                            };
                            e[s][0].call(u.exports, (function(t) {
                                return o(e[s][1][t] || t)
                            }), u, u.exports, t, e, r, n)
                        }
                        return r[s].exports
                    }
                    for (var i = void 0, s = 0; s < n.length; s++) o(n[s]);
                    return o
                }({
                    1: [function(t, e, r) {
                        "use strict";
                        e.exports = function(t, e) {
                            var r = /[, ]+/;

                            function n(t, n) {
                                if (e[t]) {
                                    if ("string" == typeof e[t] && (e[t] = e[t].split(r)), "function" == typeof e[t]) return e[t].call(n);
                                    for (var o, i, s = 0; s < e[t].length; s++) "function" === (o = typeof(i = e[t][s])) ? i.call(n) : "string" === o && "function" == typeof n[i] && n[i]()
                                }
                            }
                            return e = e || {}, "string" == typeof(t = t || []) && (t = t.split(r)),
                                function() {
                                    var e, r = this,
                                        o = 0;
                                    if (null === r[t[0]]) return !1;
                                    for (n("before", r); o < t.length; o++) r[e = t[o]] && ("function" == typeof r[e].destroy && r[e].destroy(), r[e] = null);
                                    return r.emit && r.emit("destroy"), n("after", r), !0
                                }
                        }
                    }, {}],
                    2: [function(t, e, r) {
                        "use strict";
                        e.exports = function() {
                            for (var t, e = this, r = 0, n = arguments.length, o = new Array(n); r < n; r++) o[r] = arguments[r];
                            return "function" != typeof o[o.length - 1] ? function() {
                                for (var t = 0, r = arguments.length, n = new Array(r); t < r; t++) n[t] = arguments[t];
                                return e.emit.apply(e, o.concat(n))
                            } : (t = o.pop(), function() {
                                for (var r = 0, n = arguments.length, i = new Array(n + 1); r < n; r++) i[r + 1] = arguments[r];
                                return i[0] = function(t, r) {
                                    if (t) return e.emit("error", t);
                                    i = void 0 === r ? i.slice(1) : null === r ? [] : r, e.emit.apply(e, o.concat(i))
                                }, t.apply(e, i), !0
                            })
                        }
                    }, {}],
                    3: [function(t, e, r) {
                        "use strict";
                        var n = Object.prototype.hasOwnProperty,
                            o = "~";

                        function i() {}

                        function s(t, e, r) {
                            this.fn = t, this.context = e, this.once = r || !1
                        }

                        function a(t, e, r, n, i) {
                            if ("function" != typeof r) throw new TypeError("The listener must be a function");
                            var a = new s(r, n || t, i),
                                c = o ? o + e : e;
                            return t._events[c] ? t._events[c].fn ? t._events[c] = [t._events[c], a] : t._events[c].push(a) : (t._events[c] = a, t._eventsCount++), t
                        }

                        function c(t, e) {
                            0 == --t._eventsCount ? t._events = new i : delete t._events[e]
                        }

                        function u() {
                            this._events = new i, this._eventsCount = 0
                        }
                        Object.create && (i.prototype = Object.create(null), (new i).__proto__ || (o = !1)), u.prototype.eventNames = function() {
                            var t, e, r = [];
                            if (0 === this._eventsCount) return r;
                            for (e in t = this._events) n.call(t, e) && r.push(o ? e.slice(1) : e);
                            return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(t)) : r
                        }, u.prototype.listeners = function(t) {
                            var e = o ? o + t : t,
                                r = this._events[e];
                            if (!r) return [];
                            if (r.fn) return [r.fn];
                            for (var n = 0, i = r.length, s = new Array(i); n < i; n++) s[n] = r[n].fn;
                            return s
                        }, u.prototype.listenerCount = function(t) {
                            var e = o ? o + t : t,
                                r = this._events[e];
                            return r ? r.fn ? 1 : r.length : 0
                        }, u.prototype.emit = function(t, e, r, n, i, s) {
                            var a = o ? o + t : t;
                            if (!this._events[a]) return !1;
                            var c, u, p = this._events[a],
                                h = arguments.length;
                            if (p.fn) {
                                switch (p.once && this.removeListener(t, p.fn, void 0, !0), h) {
                                    case 1:
                                        return p.fn.call(p.context), !0;
                                    case 2:
                                        return p.fn.call(p.context, e), !0;
                                    case 3:
                                        return p.fn.call(p.context, e, r), !0;
                                    case 4:
                                        return p.fn.call(p.context, e, r, n), !0;
                                    case 5:
                                        return p.fn.call(p.context, e, r, n, i), !0;
                                    case 6:
                                        return p.fn.call(p.context, e, r, n, i, s), !0
                                }
                                for (u = 1, c = new Array(h - 1); u < h; u++) c[u - 1] = arguments[u];
                                p.fn.apply(p.context, c)
                            } else {
                                var f, l = p.length;
                                for (u = 0; u < l; u++) switch (p[u].once && this.removeListener(t, p[u].fn, void 0, !0), h) {
                                    case 1:
                                        p[u].fn.call(p[u].context);
                                        break;
                                    case 2:
                                        p[u].fn.call(p[u].context, e);
                                        break;
                                    case 3:
                                        p[u].fn.call(p[u].context, e, r);
                                        break;
                                    case 4:
                                        p[u].fn.call(p[u].context, e, r, n);
                                        break;
                                    default:
                                        if (!c)
                                            for (f = 1, c = new Array(h - 1); f < h; f++) c[f - 1] = arguments[f];
                                        p[u].fn.apply(p[u].context, c)
                                }
                            }
                            return !0
                        }, u.prototype.on = function(t, e, r) {
                            return a(this, t, e, r, !1)
                        }, u.prototype.once = function(t, e, r) {
                            return a(this, t, e, r, !0)
                        }, u.prototype.removeListener = function(t, e, r, n) {
                            var i = o ? o + t : t;
                            if (!this._events[i]) return this;
                            if (!e) return c(this, i), this;
                            var s = this._events[i];
                            if (s.fn) s.fn !== e || n && !s.once || r && s.context !== r || c(this, i);
                            else {
                                for (var a = 0, u = [], p = s.length; a < p; a++)(s[a].fn !== e || n && !s[a].once || r && s[a].context !== r) && u.push(s[a]);
                                u.length ? this._events[i] = 1 === u.length ? u[0] : u : c(this, i)
                            }
                            return this
                        }, u.prototype.removeAllListeners = function(t) {
                            var e;
                            return t ? (e = o ? o + t : t, this._events[e] && c(this, e)) : (this._events = new i, this._eventsCount = 0), this
                        }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = o, u.EventEmitter = u, void 0 !== e && (e.exports = u)
                    }, {}],
                    4: [function(t, e, r) {
                        "function" == typeof Object.create ? e.exports = function(t, e) {
                            t.super_ = e, t.prototype = Object.create(e.prototype, {
                                constructor: {
                                    value: t,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            })
                        } : e.exports = function(t, e) {
                            t.super_ = e;
                            var r = function() {};
                            r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
                        }
                    }, {}],
                    5: [function(t, e, r) {
                        "use strict";
                        var n = new RegExp("^((?:\\d+)?\\.?\\d+) *(" + ["milliseconds?", "msecs?", "ms", "seconds?", "secs?", "s", "minutes?", "mins?", "m", "hours?", "hrs?", "h", "days?", "d", "weeks?", "wks?", "w", "years?", "yrs?", "y"].join("|") + ")?$", "i"),
                            o = 36e5,
                            i = 24 * o;
                        e.exports = function(t) {
                            var e, r, s = typeof t;
                            if ("number" === s) return t;
                            if ("string" !== s || "0" === t || !t) return 0;
                            if (+t) return +t;
                            if (t.length > 1e4 || !(r = n.exec(t))) return 0;
                            switch (e = parseFloat(r[1]), r[2].toLowerCase()) {
                                case "years":
                                case "year":
                                case "yrs":
                                case "yr":
                                case "y":
                                    return 31536e6 * e;
                                case "weeks":
                                case "week":
                                case "wks":
                                case "wk":
                                case "w":
                                    return 6048e5 * e;
                                case "days":
                                case "day":
                                case "d":
                                    return e * i;
                                case "hours":
                                case "hour":
                                case "hrs":
                                case "hr":
                                case "h":
                                    return e * o;
                                case "minutes":
                                case "minute":
                                case "mins":
                                case "min":
                                case "m":
                                    return 6e4 * e;
                                case "seconds":
                                case "second":
                                case "secs":
                                case "sec":
                                case "s":
                                    return 1e3 * e;
                                default:
                                    return e
                            }
                        }
                    }, {}],
                    6: [function(t, e, r) {
                        "use strict";
                        e.exports = function(t) {
                            var e, r = 0;

                            function n() {
                                return r || (r = 1, e = t.apply(this, arguments), t = null), e
                            }
                            return n.displayName = t.displayName || t.name || n.displayName || n.name, n
                        }
                    }, {}],
                    7: [function(t, e, r) {
                        "use strict";
                        var n = Object.prototype.hasOwnProperty;

                        function o(t) {
                            return decodeURIComponent(t.replace(/\+/g, " "))
                        }
                        r.stringify = function(t, e) {
                            e = e || "";
                            var r = [];
                            for (var o in "string" != typeof e && (e = "?"), t) n.call(t, o) && r.push(encodeURIComponent(o) + "=" + encodeURIComponent(t[o]));
                            return r.length ? e + r.join("&") : ""
                        }, r.parse = function(t) {
                            for (var e, r = /([^=?&]+)=?([^&]*)/g, n = {}; e = r.exec(t);) {
                                var i = o(e[1]),
                                    s = o(e[2]);
                                i in n || (n[i] = s)
                            }
                            return n
                        }
                    }, {}],
                    8: [function(t, e, r) {
                        "use strict";
                        var n = t("eventemitter3"),
                            o = t("millisecond"),
                            i = t("demolish"),
                            s = t("tick-tock"),
                            a = t("one-time");

                        function c(t, e, r) {
                            return o(t in r ? r[t] : t in e ? e[t] : u[t])
                        }

                        function u(t) {
                            var e = this;
                            if (!(e instanceof u)) return new u(t);
                            t = t || {}, e.attempt = null, e._fn = null, e["reconnect timeout"] = c("reconnect timeout", e, t), e.retries = c("retries", e, t), e.factor = c("factor", e, t), e.max = c("max", e, t), e.min = c("min", e, t), e.timers = new s(e)
                        }
                        u.prototype = new n, u.prototype.constructor = u, u["reconnect timeout"] = "30 seconds", u.max = 1 / 0, u.min = "500 ms", u.retries = 10, u.factor = 2, u.prototype.reconnect = function() {
                            var t = this;
                            return t.backoff((function(e, r) {
                                if (r.duration = +new Date - r.start, e) return t.emit("reconnect failed", e, r);
                                t.emit("reconnected", r)
                            }), t.attempt)
                        }, u.prototype.backoff = function(t, e) {
                            var r = this;
                            return (e = e || r.attempt || {}).backoff ? r : (e["reconnect timeout"] = c("reconnect timeout", r, e), e.retries = c("retries", r, e), e.factor = c("factor", r, e), e.max = c("max", r, e), e.min = c("min", r, e), e.start = +e.start || +new Date, e.duration = +e.duration || 0, e.attempt = +e.attempt || 0, e.attempt === e.retries ? (t.call(r, new Error("Unable to recover"), e), r) : (e.backoff = !0, e.attempt++, r.attempt = e, e.scheduled = 1 !== e.attempt ? Math.min(Math.round((Math.random() + 1) * e.min * Math.pow(e.factor, e.attempt - 1)), e.max) : e.min, r.timers.setTimeout("reconnect", (function() {
                                e.duration = +new Date - e.start, e.backoff = !1, r.timers.clear("reconnect, timeout");
                                var n = r._fn = a((function(n) {
                                    if (r.reset(), n) return r.backoff(t, e);
                                    t.call(r, void 0, e)
                                }));
                                r.emit("reconnect", e, n), r.timers.setTimeout("timeout", (function() {
                                    var t = new Error("Failed to reconnect in a timely manner");
                                    e.duration = +new Date - e.start, r.emit("reconnect timeout", t, e), n(t)
                                }), e["reconnect timeout"])
                            }), e.scheduled), r.emit("reconnect scheduled", e), r))
                        }, u.prototype.reconnecting = function() {
                            return !!this.attempt
                        }, u.prototype.reconnected = function(t) {
                            return this._fn && this._fn(t), this
                        }, u.prototype.reset = function() {
                            return this._fn = this.attempt = null, this.timers.clear("reconnect, timeout"), this
                        }, u.prototype.destroy = i("timers attempt _fn"), e.exports = u
                    }, {
                        demolish: 1,
                        eventemitter3: 9,
                        millisecond: 5,
                        "one-time": 6,
                        "tick-tock": 11
                    }],
                    9: [function(t, e, r) {
                        "use strict";
                        var n = "function" != typeof Object.create && "~";

                        function o(t, e, r) {
                            this.fn = t, this.context = e, this.once = r || !1
                        }

                        function i() {}
                        i.prototype._events = void 0, i.prototype.listeners = function(t, e) {
                            var r = n ? n + t : t,
                                o = this._events && this._events[r];
                            if (e) return !!o;
                            if (!o) return [];
                            if (o.fn) return [o.fn];
                            for (var i = 0, s = o.length, a = new Array(s); i < s; i++) a[i] = o[i].fn;
                            return a
                        }, i.prototype.emit = function(t, e, r, o, i, s) {
                            var a = n ? n + t : t;
                            if (!this._events || !this._events[a]) return !1;
                            var c, u, p = this._events[a],
                                h = arguments.length;
                            if ("function" == typeof p.fn) {
                                switch (p.once && this.removeListener(t, p.fn, void 0, !0), h) {
                                    case 1:
                                        return p.fn.call(p.context), !0;
                                    case 2:
                                        return p.fn.call(p.context, e), !0;
                                    case 3:
                                        return p.fn.call(p.context, e, r), !0;
                                    case 4:
                                        return p.fn.call(p.context, e, r, o), !0;
                                    case 5:
                                        return p.fn.call(p.context, e, r, o, i), !0;
                                    case 6:
                                        return p.fn.call(p.context, e, r, o, i, s), !0
                                }
                                for (u = 1, c = new Array(h - 1); u < h; u++) c[u - 1] = arguments[u];
                                p.fn.apply(p.context, c)
                            } else {
                                var f, l = p.length;
                                for (u = 0; u < l; u++) switch (p[u].once && this.removeListener(t, p[u].fn, void 0, !0), h) {
                                    case 1:
                                        p[u].fn.call(p[u].context);
                                        break;
                                    case 2:
                                        p[u].fn.call(p[u].context, e);
                                        break;
                                    case 3:
                                        p[u].fn.call(p[u].context, e, r);
                                        break;
                                    default:
                                        if (!c)
                                            for (f = 1, c = new Array(h - 1); f < h; f++) c[f - 1] = arguments[f];
                                        p[u].fn.apply(p[u].context, c)
                                }
                            }
                            return !0
                        }, i.prototype.on = function(t, e, r) {
                            var i = new o(e, r || this),
                                s = n ? n + t : t;
                            return this._events || (this._events = n ? {} : Object.create(null)), this._events[s] ? this._events[s].fn ? this._events[s] = [this._events[s], i] : this._events[s].push(i) : this._events[s] = i, this
                        }, i.prototype.once = function(t, e, r) {
                            var i = new o(e, r || this, !0),
                                s = n ? n + t : t;
                            return this._events || (this._events = n ? {} : Object.create(null)), this._events[s] ? this._events[s].fn ? this._events[s] = [this._events[s], i] : this._events[s].push(i) : this._events[s] = i, this
                        }, i.prototype.removeListener = function(t, e, r, o) {
                            var i = n ? n + t : t;
                            if (!this._events || !this._events[i]) return this;
                            var s = this._events[i],
                                a = [];
                            if (e)
                                if (s.fn)(s.fn !== e || o && !s.once || r && s.context !== r) && a.push(s);
                                else
                                    for (var c = 0, u = s.length; c < u; c++)(s[c].fn !== e || o && !s[c].once || r && s[c].context !== r) && a.push(s[c]);
                            return a.length ? this._events[i] = 1 === a.length ? a[0] : a : delete this._events[i], this
                        }, i.prototype.removeAllListeners = function(t) {
                            return this._events ? (t ? delete this._events[n ? n + t : t] : this._events = n ? {} : Object.create(null), this) : this
                        }, i.prototype.off = i.prototype.removeListener, i.prototype.addListener = i.prototype.on, i.prototype.setMaxListeners = function() {
                            return this
                        }, i.prefixed = n, void 0 !== e && (e.exports = i)
                    }, {}],
                    10: [function(t, e, r) {
                        "use strict";
                        e.exports = function(t, e) {
                            if (e = e.split(":")[0], !(t = +t)) return !1;
                            switch (e) {
                                case "http":
                                case "ws":
                                    return 80 !== t;
                                case "https":
                                case "wss":
                                    return 443 !== t;
                                case "ftp":
                                    return 21 !== t;
                                case "gopher":
                                    return 70 !== t;
                                case "file":
                                    return !1
                            }
                            return 0 !== t
                        }
                    }, {}],
                    11: [function(t, e, r) {
                        "use strict";
                        var n = Object.prototype.hasOwnProperty,
                            o = t("millisecond");

                        function i(t, e, r, n) {
                            this.start = +new Date, this.duration = r, this.clear = e, this.timer = t, this.fns = [n]
                        }

                        function s(t) {
                            clearTimeout(t)
                        }

                        function a(t) {
                            clearInterval(t)
                        }

                        function c(t) {
                            clearImmediate(t)
                        }

                        function u(t) {
                            if (!(this instanceof u)) return new u(t);
                            this.timers = {}, this.context = t || this
                        }
                        i.prototype.remaining = function() {
                            return this.duration - this.taken()
                        }, i.prototype.taken = function() {
                            return +new Date - this.start
                        }, u.prototype.tock = function(t, e) {
                            var r = this;
                            return function() {
                                if (t in r.timers) {
                                    var n = r.timers[t].fns.slice(),
                                        o = n.length,
                                        i = 0;
                                    for (e ? r.clear(t) : r.start = +new Date; i < o; i++) n[i].call(r.context)
                                }
                            }
                        }, u.prototype.setTimeout = function(t, e, r) {
                            var n, a = this;
                            return a.timers[t] ? (a.timers[t].fns.push(e), a) : (n = o(r), a.timers[t] = new i(setTimeout(a.tock(t, !0), o(r)), s, n, e), a)
                        }, u.prototype.setInterval = function(t, e, r) {
                            var n, s = this;
                            return s.timers[t] ? (s.timers[t].fns.push(e), s) : (n = o(r), s.timers[t] = new i(setInterval(s.tock(t), o(r)), a, n, e), s)
                        }, u.prototype.setImmediate = function(t, e) {
                            var r = this;
                            return "function" != typeof setImmediate ? r.setTimeout(t, e, 0) : r.timers[t] ? (r.timers[t].fns.push(e), r) : (r.timers[t] = new i(setImmediate(r.tock(t, !0)), c, 0, e), r)
                        }, u.prototype.active = function(t) {
                            return t in this.timers
                        }, u.prototype.clear = function() {
                            var t, e, r, o = arguments.length ? arguments : [],
                                i = this;
                            if (1 === o.length && "string" == typeof o[0] && (o = o[0].split(/[, ]+/)), !o.length)
                                for (t in i.timers) n.call(i.timers, t) && o.push(t);
                            for (e = 0, r = o.length; e < r; e++)(t = i.timers[o[e]]) && (t.clear(t.timer), t.fns = t.timer = t.clear = null, delete i.timers[o[e]]);
                            return i
                        }, u.prototype.adjust = function(t, e) {
                            var r, n = this,
                                i = o(e),
                                s = n.timers[t];
                            return s ? (r = s.clear === a, s.clear(s.timer), s.start = +new Date, s.duration = i, s.timer = (r ? setInterval : setTimeout)(n.tock(t, !r), i), n) : n
                        }, u.prototype.end = u.prototype.destroy = function() {
                            return !!this.context && (this.clear(), this.context = this.timers = null, !0)
                        }, u.Timer = i, e.exports = u
                    }, {
                        millisecond: 5
                    }],
                    12: [function(t, e, n) {
                        (function(r) {
                            "use strict";
                            var n = t("requires-port"),
                                o = t("querystringify"),
                                i = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
                                s = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
                                a = [
                                    ["#", "hash"],
                                    ["?", "query"],
                                    ["/", "pathname"],
                                    ["@", "auth", 1],
                                    [NaN, "host", void 0, 1, 1],
                                    [/:(\d+)$/, "port", void 0, 1],
                                    [NaN, "hostname", void 0, 1, 1]
                                ],
                                c = {
                                    hash: 1,
                                    query: 1
                                };

                            function u(t) {
                                var e, n = {},
                                    o = typeof(t = t || r.location || {});
                                if ("blob:" === t.protocol) n = new h(unescape(t.pathname), {});
                                else if ("string" === o)
                                    for (e in n = new h(t, {}), c) delete n[e];
                                else if ("object" === o) {
                                    for (e in t) e in c || (n[e] = t[e]);
                                    void 0 === n.slashes && (n.slashes = s.test(t.href))
                                }
                                return n
                            }

                            function p(t) {
                                var e = i.exec(t);
                                return {
                                    protocol: e[1] ? e[1].toLowerCase() : "",
                                    slashes: !!e[2],
                                    rest: e[3]
                                }
                            }

                            function h(t, e, r) {
                                if (!(this instanceof h)) return new h(t, e, r);
                                var i, s, c, f, l, d, y = a.slice(),
                                    m = typeof e,
                                    v = this,
                                    g = 0;
                                for ("object" !== m && "string" !== m && (r = e, e = null), r && "function" != typeof r && (r = o.parse), e = u(e), i = !(s = p(t || "")).protocol && !s.slashes, v.slashes = s.slashes || i && e.slashes, v.protocol = s.protocol || e.protocol || "", t = s.rest, s.slashes || (y[2] = [/(.*)/, "pathname"]); g < y.length; g++) c = (f = y[g])[0], d = f[1], c != c ? v[d] = t : "string" == typeof c ? ~(l = t.indexOf(c)) && ("number" == typeof f[2] ? (v[d] = t.slice(0, l), t = t.slice(l + f[2])) : (v[d] = t.slice(l), t = t.slice(0, l))) : (l = c.exec(t)) && (v[d] = l[1], t = t.slice(0, l.index)), v[d] = v[d] || i && f[3] && e[d] || "", f[4] && (v[d] = v[d].toLowerCase());
                                r && (v.query = r(v.query)), i && e.slashes && "/" !== v.pathname.charAt(0) && ("" !== v.pathname || "" !== e.pathname) && (v.pathname = function(t, e) {
                                    for (var r = (e || "/").split("/").slice(0, -1).concat(t.split("/")), n = r.length, o = r[n - 1], i = !1, s = 0; n--;) "." === r[n] ? r.splice(n, 1) : ".." === r[n] ? (r.splice(n, 1), s++) : s && (0 === n && (i = !0), r.splice(n, 1), s--);
                                    return i && r.unshift(""), "." !== o && ".." !== o || r.push(""), r.join("/")
                                }(v.pathname, e.pathname)), n(v.port, v.protocol) || (v.host = v.hostname, v.port = ""), v.username = v.password = "", v.auth && (f = v.auth.split(":"), v.username = f[0] || "", v.password = f[1] || ""), v.origin = v.protocol && v.host && "file:" !== v.protocol ? v.protocol + "//" + v.host : "null", v.href = v.toString()
                            }
                            h.prototype = {
                                set: function(t, e, r) {
                                    var i = this;
                                    switch (t) {
                                        case "query":
                                            "string" == typeof e && e.length && (e = (r || o.parse)(e)), i[t] = e;
                                            break;
                                        case "port":
                                            i[t] = e, n(e, i.protocol) ? e && (i.host = i.hostname + ":" + e) : (i.host = i.hostname, i[t] = "");
                                            break;
                                        case "hostname":
                                            i[t] = e, i.port && (e += ":" + i.port), i.host = e;
                                            break;
                                        case "host":
                                            i[t] = e, /:\d+$/.test(e) ? (e = e.split(":"), i.port = e.pop(), i.hostname = e.join(":")) : (i.hostname = e, i.port = "");
                                            break;
                                        case "protocol":
                                            i.protocol = e.toLowerCase(), i.slashes = !r;
                                            break;
                                        case "pathname":
                                        case "hash":
                                            if (e) {
                                                var s = "pathname" === t ? "/" : "#";
                                                i[t] = e.charAt(0) !== s ? s + e : e
                                            } else i[t] = e;
                                            break;
                                        default:
                                            i[t] = e
                                    }
                                    for (var c = 0; c < a.length; c++) {
                                        var u = a[c];
                                        u[4] && (i[u[1]] = i[u[1]].toLowerCase())
                                    }
                                    return i.origin = i.protocol && i.host && "file:" !== i.protocol ? i.protocol + "//" + i.host : "null", i.href = i.toString(), i
                                },
                                toString: function(t) {
                                    t && "function" == typeof t || (t = o.stringify);
                                    var e, r = this,
                                        n = r.protocol;
                                    n && ":" !== n.charAt(n.length - 1) && (n += ":");
                                    var i = n + (r.slashes ? "//" : "");
                                    return r.username && (i += r.username, r.password && (i += ":" + r.password), i += "@"), i += r.host + r.pathname, (e = "object" == typeof r.query ? t(r.query) : r.query) && (i += "?" !== e.charAt(0) ? "?" + e : e), r.hash && (i += r.hash), i
                                }
                            }, h.extractProtocol = p, h.location = u, h.qs = o, e.exports = h
                        }).call(this, void 0 !== r.g ? r.g : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {
                        querystringify: 7,
                        "requires-port": 10
                    }],
                    13: [function(t, e, r) {
                        "use strict";
                        var n, o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
                            i = {},
                            s = 0,
                            a = 0;

                        function c(t) {
                            var e = "";
                            do {
                                e = o[t % 64] + e, t = Math.floor(t / 64)
                            } while (t > 0);
                            return e
                        }

                        function u() {
                            var t = c(+new Date);
                            return t !== n ? (s = 0, n = t) : t + "." + c(s++)
                        }
                        for (; a < 64; a++) i[o[a]] = a;
                        u.encode = c, u.decode = function(t) {
                            var e = 0;
                            for (a = 0; a < t.length; a++) e = 64 * e + i[t.charAt(a)];
                            return e
                        }, e.exports = u
                    }, {}],
                    14: [function(t, e, r) {
                        "use strict";
                        var n, o = t("eventemitter3"),
                            i = t("tick-tock"),
                            s = t("recovery"),
                            a = t("querystringify"),
                            c = t("inherits"),
                            u = t("demolish"),
                            p = t("yeast"),
                            h = /\u2028/g,
                            f = /\u2029/g;

                        function l(t, e) {
                            if (!(t instanceof d)) {
                                var r = new Error("Primus#" + e + "'s context should called with a Primus instance");
                                if ("function" != typeof t.listeners || !t.listeners("error").length) throw r;
                                t.emit("error", r)
                            }
                        }
                        try {
                            n = location.origin ? location.origin : location.protocol + "//" + location.host
                        } catch (g) {
                            n = "http://127.0.0.1"
                        }

                        function d(t, e) {
                            if (!(this instanceof d)) return new d(t, e);
                            if (d.Stream.call(this), "function" != typeof this.client) return this.critical(new Error("The client library has not been compiled correctly, see https://github.com/primus/primus#client-library for more details"));
                            if ("object" == typeof t ? t = (e = t).url || e.uri || n : e = e || {}, "ping" in e || "pong" in e) return this.critical(new Error("The `ping` and `pong` options have been removed"));
                            var r = this;
                            e.queueSize = "queueSize" in e ? e.queueSize : 1 / 0, e.timeout = "timeout" in e ? e.timeout : 1e4, e.reconnect = "reconnect" in e ? e.reconnect : {}, e.pingTimeout = "pingTimeout" in e ? e.pingTimeout : 45e3, e.strategy = "strategy" in e ? e.strategy : [], e.transport = "transport" in e ? e.transport : {}, r.buffer = [], r.writable = !0, r.readable = !0, r.url = r.parse(t || n), r.readyState = d.CLOSED, r.options = e, r.timers = new i(this), r.socket = null, r.disconnect = !1, r.transport = e.transport, r.transformers = {
                                outgoing: [],
                                incoming: []
                            }, r.recovery = new s(e.reconnect), "string" == typeof e.strategy && (e.strategy = e.strategy.split(/\s?,\s?/g)), !1 === e.strategy ? e.strategy = [] : e.strategy.length || (e.strategy.push("disconnect", "online"), this.authorization || e.strategy.push("timeout")), e.strategy = e.strategy.join(",").toLowerCase(), "websockets" in e && (r.AVOID_WEBSOCKETS = !e.websockets), "network" in e && (r.NETWORK_EVENTS = e.network), e.manual || r.timers.setTimeout("open", (function() {
                                r.timers.clear("open"), r.open()
                            }), 0), r.initialise(e)
                        }
                        d.requires = d.require = function(e) {
                            if ("function" == typeof t) return t(e)
                        };
                        try {
                            d.Stream = d.requires("stream")
                        } catch (g) {}
                        d.Stream || (d.Stream = o), c(d, d.Stream), d.OPENING = 1, d.CLOSED = 2, d.OPEN = 3, d.prototype.AVOID_WEBSOCKETS = !1, d.prototype.NETWORK_EVENTS = !1, d.prototype.online = !0;
                        try {
                            (d.prototype.NETWORK_EVENTS = "onLine" in navigator && (window.addEventListener || document.body.attachEvent)) && (navigator.onLine || (d.prototype.online = !1))
                        } catch (g) {}
                        if (d.prototype.ark = {}, d.prototype.emits = t("emits"), d.prototype.plugin = function(t) {
                                if (l(this, "plugin"), t) return this.ark[t];
                                var e = {};
                                for (t in this.ark) e[t] = this.ark[t];
                                return e
                            }, d.prototype.reserved = function(t) {
                                return /^(incoming|outgoing)::/.test(t) || t in this.reserved.events
                            }, d.prototype.reserved.events = {
                                "reconnect scheduled": 1,
                                "reconnect timeout": 1,
                                readyStateChange: 1,
                                "reconnect failed": 1,
                                reconnected: 1,
                                reconnect: 1,
                                offline: 1,
                                timeout: 1,
                                destroy: 1,
                                online: 1,
                                error: 1,
                                close: 1,
                                open: 1,
                                data: 1,
                                end: 1
                            }, d.prototype.initialise = function(t) {
                                var e = this;
                                for (var r in e.recovery.on("reconnected", e.emits("reconnected")).on("reconnect failed", e.emits("reconnect failed", (function(t) {
                                        e.emit("end"), t()
                                    }))).on("reconnect timeout", e.emits("reconnect timeout")).on("reconnect scheduled", e.emits("reconnect scheduled")).on("reconnect", e.emits("reconnect", (function(t) {
                                        e.emit("outgoing::reconnect"), t()
                                    }))), e.on("outgoing::open", (function() {
                                        var t = e.readyState;
                                        e.readyState = d.OPENING, t !== e.readyState && e.emit("readyStateChange", "opening")
                                    })), e.on("incoming::open", (function() {
                                        var t = e.readyState;
                                        if (e.recovery.reconnecting() && e.recovery.reconnected(), e.writable = !0, e.readable = !0, e.online || (e.online = !0, e.emit("online")), e.readyState = d.OPEN, t !== e.readyState && e.emit("readyStateChange", "open"), e.heartbeat(), e.buffer.length) {
                                            var r = e.buffer.slice(),
                                                n = r.length,
                                                o = 0;
                                            for (e.buffer.length = 0; o < n; o++) e._write(r[o])
                                        }
                                        e.emit("open")
                                    })), e.on("incoming::ping", (function(t) {
                                        e.online = !0, e.heartbeat(), e.emit("outgoing::pong", t), e._write("primus::pong::" + t)
                                    })), e.on("incoming::error", (function(t) {
                                        var r = e.timers.active("connect"),
                                            n = t;
                                        if ("string" == typeof t) n = new Error(t);
                                        else if (!(t instanceof Error) && "object" == typeof t)
                                            for (var o in n = new Error(t.message || t.reason), t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
                                        if (e.recovery.reconnecting()) return e.recovery.reconnected(n);
                                        e.listeners("error").length && e.emit("error", n), r && (~e.options.strategy.indexOf("timeout") ? e.recovery.reconnect() : e.end())
                                    })), e.on("incoming::data", (function(t) {
                                        e.decoder(t, (function(r, n) {
                                            if (r) return e.listeners("error").length && e.emit("error", r);
                                            e.protocol(n) || e.transforms(e, e, "incoming", n, t)
                                        }))
                                    })), e.on("incoming::end", (function() {
                                        var t = e.readyState;
                                        return e.disconnect ? (e.disconnect = !1, e.end()) : (e.readyState = d.CLOSED, t !== e.readyState && e.emit("readyStateChange", "end"), e.timers.active("connect") && e.end(), t !== d.OPEN ? !!e.recovery.reconnecting() && e.recovery.reconnect() : (this.writable = !1, this.readable = !1, this.timers.clear(), e.emit("close"), ~e.options.strategy.indexOf("disconnect") ? e.recovery.reconnect() : (e.emit("outgoing::end"), void e.emit("end"))))
                                    })), e.client(), e.ark) e.ark[r].call(e, e, t);
                                return e.NETWORK_EVENTS ? (e.offlineHandler = function() {
                                    e.online && (e.online = !1, e.emit("offline"), e.end(), e.recovery.reset())
                                }, e.onlineHandler = function() {
                                    e.online || (e.online = !0, e.emit("online"), ~e.options.strategy.indexOf("online") && e.recovery.reconnect())
                                }, window.addEventListener ? (window.addEventListener("offline", e.offlineHandler, !1), window.addEventListener("online", e.onlineHandler, !1)) : document.body.attachEvent && (document.body.attachEvent("onoffline", e.offlineHandler), document.body.attachEvent("ononline", e.onlineHandler)), e) : e
                            }, d.prototype.protocol = function(t) {
                                if ("string" != typeof t || 0 !== t.indexOf("primus::")) return !1;
                                var e = t.indexOf(":", 8),
                                    r = t.slice(e + 2);
                                switch (t.slice(8, e)) {
                                    case "ping":
                                        this.emit("incoming::ping", +r);
                                        break;
                                    case "server":
                                        "close" === r && (this.disconnect = !0);
                                        break;
                                    case "id":
                                        this.emit("incoming::id", r);
                                        break;
                                    default:
                                        return !1
                                }
                                return !0
                            }, d.prototype.transforms = function(t, e, r, n, o) {
                                var i = {
                                        data: n
                                    },
                                    s = t.transformers[r];
                                return function t(r, n) {
                                    var o = s[r++];
                                    if (!o) return n();
                                    if (1 === o.length) {
                                        if (!1 === o.call(e, i)) return;
                                        return t(r, n)
                                    }
                                    o.call(e, i, (function(o, i) {
                                        if (o) return e.emit("error", o);
                                        !1 !== i && t(r, n)
                                    }))
                                }(0, (function() {
                                    if ("incoming" === r) return e.emit("data", i.data, o);
                                    e._write(i.data)
                                })), this
                            }, d.prototype.id = function(t) {
                                return this.socket && this.socket.id ? t(this.socket.id) : (this._write("primus::id::"), this.once("incoming::id", t))
                            }, d.prototype.open = function() {
                                return l(this, "open"), !this.recovery.reconnecting() && this.options.timeout && this.timeout(), this.emit("outgoing::open"), this
                            }, d.prototype.write = function(t) {
                                return l(this, "write"), this.transforms(this, this, "outgoing", t), !0
                            }, d.prototype._write = function(t) {
                                var e = this;
                                return d.OPEN !== e.readyState ? (this.buffer.length === this.options.queueSize && this.buffer.splice(0, 1), this.buffer.push(t), !1) : (e.encoder(t, (function(t, r) {
                                    if (t) return e.listeners("error").length && e.emit("error", t);
                                    "string" == typeof r && (~r.indexOf("\u2028") && (r = r.replace(h, "\\u2028")), ~r.indexOf("\u2029") && (r = r.replace(f, "\\u2029"))), e.emit("outgoing::data", r)
                                })), !0)
                            }, d.prototype.heartbeat = function() {
                                return this.options.pingTimeout ? (this.timers.clear("heartbeat"), this.timers.setTimeout("heartbeat", (function() {
                                    this.online && (this.online = !1, this.emit("offline"), this.emit("incoming::end"))
                                }), this.options.pingTimeout), this) : this
                            }, d.prototype.timeout = function() {
                                var t = this;

                                function e() {
                                    t.removeListener("error", e).removeListener("open", e).removeListener("end", e).timers.clear("connect")
                                }
                                return t.timers.setTimeout("connect", (function() {
                                    e(), t.readyState === d.OPEN || t.recovery.reconnecting() || (t.emit("timeout"), ~t.options.strategy.indexOf("timeout") ? t.recovery.reconnect() : t.end())
                                }), t.options.timeout), t.on("error", e).on("open", e).on("end", e)
                            }, d.prototype.end = function(t) {
                                if (l(this, "end"), this.readyState === d.CLOSED && !this.timers.active("connect") && !this.timers.active("open")) return this.recovery.reconnecting() && (this.recovery.reset(), this.emit("end")), this;
                                void 0 !== t && this.write(t), this.writable = !1, this.readable = !1;
                                var e = this.readyState;
                                return this.readyState = d.CLOSED, e !== this.readyState && this.emit("readyStateChange", "end"), this.timers.clear(), this.emit("outgoing::end"), this.emit("close"), this.emit("end"), this
                            }, d.prototype.destroy = u("url timers options recovery socket transport transformers", {
                                before: "end",
                                after: ["removeAllListeners", function() {
                                    this.NETWORK_EVENTS && (window.addEventListener ? (window.removeEventListener("offline", this.offlineHandler), window.removeEventListener("online", this.onlineHandler)) : document.body.attachEvent && (document.body.detachEvent("onoffline", this.offlineHandler), document.body.detachEvent("ononline", this.onlineHandler)))
                                }]
                            }), d.prototype.clone = function(t) {
                                return this.merge({}, t)
                            }, d.prototype.merge = function(t) {
                                for (var e, r, n = 1; n < arguments.length; n++)
                                    for (e in r = arguments[n]) Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
                                return t
                            }, d.prototype.parse = t("url-parse"), d.prototype.querystring = a.parse, d.prototype.querystringify = a.stringify, d.prototype.uri = function(t) {
                                var e = this.url,
                                    r = [],
                                    n = !1;
                                t.query && (n = !0), (t = t || {}).protocol = "protocol" in t ? t.protocol : "http:", t.query = !(!e.query || !n) && e.query.slice(1), t.secure = "secure" in t ? t.secure : "https:" === e.protocol || "wss:" === e.protocol, t.auth = "auth" in t ? t.auth : e.auth, t.pathname = "pathname" in t ? t.pathname : this.pathname, t.port = "port" in t ? +t.port : +e.port || (t.secure ? 443 : 80);
                                var o = this.querystring(t.query || "");
                                return o._primuscb = p(), t.query = this.querystringify(o), this.emit("outgoing::url", t), r.push(t.secure ? t.protocol.replace(":", "s:") : t.protocol, ""), r.push(t.auth ? t.auth + "@" + e.host : e.host), t.pathname && r.push(t.pathname.slice(1)), n ? r[r.length - 1] += "?" + t.query : delete t.query, t.object ? t : r.join("/")
                            }, d.prototype.transform = function(t, e) {
                                return l(this, "transform"), t in this.transformers ? (this.transformers[t].push(e), this) : this.critical(new Error("Invalid transformer type"))
                            }, d.prototype.critical = function(t) {
                                if (this.emit("error", t)) return this;
                                throw t
                            }, d.connect = function(t, e) {
                                return new d(t, e)
                            }, d.EventEmitter = o, d.prototype.client = function() {
                                var t, e = this.emits("incoming::data"),
                                    r = this.emits("incoming::error"),
                                    n = this.emits("incoming::open"),
                                    o = this.emits("incoming::end"),
                                    i = this,
                                    s = function() {
                                        if ("undefined" != typeof eio) return eio;
                                        try {
                                            return d.requires("engine.io-client")
                                        } catch (g) {}
                                    }();
                                if (!s) return i.critical(new Error("Missing required `engine.io-client` module. Please run `npm install --save engine.io-client`"));
                                i.on("outgoing::open", (function() {
                                    i.emit("outgoing::end"), i.socket = t = s(i.merge(i.transport, i.url, i.uri({
                                        protocol: "http:",
                                        query: !0,
                                        object: !0
                                    }), {
                                        rememberUpgrade: !1,
                                        forceBase64: !0,
                                        enablesXDR: !1,
                                        timestampRequests: !0,
                                        path: this.pathname,
                                        transports: i.AVOID_WEBSOCKETS ? ["polling"] : ["polling", "websocket"]
                                    })), s.sockets && s.sockets.length && (s.sockets.length = 0), t.on("message", e), t.on("error", r), t.on("close", o), t.on("open", n)
                                })), i.on("outgoing::data", (function(e) {
                                    t && t.send(e)
                                })), i.on("outgoing::reconnect", (function() {
                                    i.emit("outgoing::open")
                                })), i.on("outgoing::end", (function() {
                                    t && (t.removeListener("message", e), t.removeListener("error", r), t.removeListener("close", o), t.removeListener("open", n), t.close(), t = null)
                                }))
                            }, d.prototype.authorization = !1, d.prototype.pathname = "/primus", d.prototype.encoder = function(t, e) {
                                var r;
                                try {
                                    t = JSON.stringify(t)
                                } catch (g) {
                                    r = g
                                }
                                e(r, t)
                            }, d.prototype.decoder = function(t, e) {
                                var r;
                                if ("string" != typeof t) return e(r, t);
                                try {
                                    t = JSON.parse(t)
                                } catch (g) {
                                    r = g
                                }
                                e(r, t)
                            }, d.prototype.version = "7.2.2", "undefined" != typeof document && "undefined" != typeof navigator) {
                            document.addEventListener && document.addEventListener("keydown", (function(t) {
                                27 === t.keyCode && t.preventDefault && t.preventDefault()
                            }), !1);
                            var y = (navigator.userAgent || "").toLowerCase(),
                                m = y.match(/.+(?:rv|it|ra|ie)[/: ](\d+)\.(\d+)(?:\.(\d+))?/) || [],
                                v = +[m[1], m[2]].join(".");
                            !~y.indexOf("chrome") && ~y.indexOf("safari") && v < 534.54 && (d.prototype.AVOID_WEBSOCKETS = !0)
                        }
                        e.exports = d
                    }, {
                        demolish: 1,
                        emits: 2,
                        eventemitter3: 3,
                        inherits: 4,
                        querystringify: 7,
                        recovery: 8,
                        "tick-tock": 11,
                        "url-parse": 12,
                        yeast: 13
                    }]
                }, {}, [14])(14)
            }), [function(t) {
                var e;
                "undefined" != typeof window ? e = window : "undefined" != typeof self && (e = self), e.eio = function t(e, r, n) {
                    function o(s, a) {
                        if (!r[s]) {
                            if (!e[s]) {
                                if (i) return i(s, !0);
                                var c = new Error("Cannot find module '" + s + "'");
                                throw c.code = "MODULE_NOT_FOUND", c
                            }
                            var u = r[s] = {
                                exports: {}
                            };
                            e[s][0].call(u.exports, (function(t) {
                                var r = e[s][1][t];
                                return o(r || t)
                            }), u, u.exports, t, e, r, n)
                        }
                        return r[s].exports
                    }
                    for (var i = void 0, s = 0; s < n.length; s++) o(n[s]);
                    return o
                }({
                    1: [function(t, e, r) {
                        e.exports = t("./socket"), e.exports.parser = t("engine.io-parser")
                    }, {
                        "./socket": 2,
                        "engine.io-parser": 16
                    }],
                    2: [function(t, e, r) {
                        (function(r) {
                            var n = t("./transports/index"),
                                o = t("component-emitter"),
                                i = t("indexof"),
                                s = t("engine.io-parser"),
                                a = t("parseuri"),
                                c = t("parsejson"),
                                u = t("parseqs");

                            function p(t, e) {
                                if (!(this instanceof p)) return new p(t, e);
                                e = e || {}, t && "object" == typeof t && (e = t, t = null), t ? (t = a(t), e.hostname = t.host, e.secure = "https" === t.protocol || "wss" === t.protocol, e.port = t.port, t.query && (e.query = t.query)) : e.host && (e.hostname = a(e.host).host), this.secure = null != e.secure ? e.secure : r.location && "https:" === location.protocol, e.hostname && !e.port && (e.port = this.secure ? "443" : "80"), this.agent = e.agent || !1, this.hostname = e.hostname || (r.location ? location.hostname : "localhost"), this.port = e.port || (r.location && location.port ? location.port : this.secure ? 443 : 80), this.query = e.query || {}, "string" == typeof this.query && (this.query = u.decode(this.query)), this.upgrade = !1 !== e.upgrade, this.path = (e.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!e.forceJSONP, this.jsonp = !1 !== e.jsonp, this.forceBase64 = !!e.forceBase64, this.enablesXDR = !!e.enablesXDR, this.timestampParam = e.timestampParam || "t", this.timestampRequests = e.timestampRequests, this.transports = e.transports || ["polling", "websocket"], this.transportOptions = e.transportOptions || {}, this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = e.policyPort || 843, this.rememberUpgrade = e.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = e.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== e.perMessageDeflate && (e.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = e.pfx || null, this.key = e.key || null, this.passphrase = e.passphrase || null, this.cert = e.cert || null, this.ca = e.ca || null, this.ciphers = e.ciphers || null, this.rejectUnauthorized = void 0 === e.rejectUnauthorized || e.rejectUnauthorized, this.forceNode = !!e.forceNode;
                                var n = "object" == typeof r && r;
                                n.global === n && (e.extraHeaders && Object.keys(e.extraHeaders).length > 0 && (this.extraHeaders = e.extraHeaders), e.localAddress && (this.localAddress = e.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open()
                            }

                            function h(t) {
                                var e = {};
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                                return e
                            }
                            e.exports = p, p.priorWebsocketSuccess = !1, o(p.prototype), p.protocol = s.protocol, p.Socket = p, p.Transport = t("./transport"), p.transports = t("./transports/index"), p.parser = t("engine.io-parser"), p.prototype.createTransport = function(t) {
                                var e = h(this.query);
                                e.EIO = s.protocol, e.transport = t;
                                var r = this.transportOptions[t] || {};
                                return this.id && (e.sid = this.id), new n[t]({
                                    query: e,
                                    socket: this,
                                    agent: r.agent || this.agent,
                                    hostname: r.hostname || this.hostname,
                                    port: r.port || this.port,
                                    secure: r.secure || this.secure,
                                    path: r.path || this.path,
                                    forceJSONP: r.forceJSONP || this.forceJSONP,
                                    jsonp: r.jsonp || this.jsonp,
                                    forceBase64: r.forceBase64 || this.forceBase64,
                                    enablesXDR: r.enablesXDR || this.enablesXDR,
                                    timestampRequests: r.timestampRequests || this.timestampRequests,
                                    timestampParam: r.timestampParam || this.timestampParam,
                                    policyPort: r.policyPort || this.policyPort,
                                    pfx: r.pfx || this.pfx,
                                    key: r.key || this.key,
                                    passphrase: r.passphrase || this.passphrase,
                                    cert: r.cert || this.cert,
                                    ca: r.ca || this.ca,
                                    ciphers: r.ciphers || this.ciphers,
                                    rejectUnauthorized: r.rejectUnauthorized || this.rejectUnauthorized,
                                    perMessageDeflate: r.perMessageDeflate || this.perMessageDeflate,
                                    extraHeaders: r.extraHeaders || this.extraHeaders,
                                    forceNode: r.forceNode || this.forceNode,
                                    localAddress: r.localAddress || this.localAddress,
                                    requestTimeout: r.requestTimeout || this.requestTimeout,
                                    protocols: r.protocols || void 0
                                })
                            }, p.prototype.open = function() {
                                var t;
                                if (this.rememberUpgrade && p.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) t = "websocket";
                                else {
                                    if (0 === this.transports.length) {
                                        var e = this;
                                        return void setTimeout((function() {
                                            e.emit("error", "No transports available")
                                        }), 0)
                                    }
                                    t = this.transports[0]
                                }
                                this.readyState = "opening";
                                try {
                                    t = this.createTransport(t)
                                } catch (r) {
                                    return this.transports.shift(), void this.open()
                                }
                                t.open(), this.setTransport(t)
                            }, p.prototype.setTransport = function(t) {
                                var e = this;
                                this.transport && this.transport.removeAllListeners(), this.transport = t, t.on("drain", (function() {
                                    e.onDrain()
                                })).on("packet", (function(t) {
                                    e.onPacket(t)
                                })).on("error", (function(t) {
                                    e.onError(t)
                                })).on("close", (function() {
                                    e.onClose("transport close")
                                }))
                            }, p.prototype.probe = function(t) {
                                var e = this.createTransport(t, {
                                        probe: 1
                                    }),
                                    r = !1,
                                    n = this;

                                function o() {
                                    if (n.onlyBinaryUpgrades) {
                                        var t = !this.supportsBinary && n.transport.supportsBinary;
                                        r = r || t
                                    }
                                    r || (e.send([{
                                        type: "ping",
                                        data: "probe"
                                    }]), e.once("packet", (function(t) {
                                        if (!r)
                                            if ("pong" === t.type && "probe" === t.data) {
                                                if (n.upgrading = !0, n.emit("upgrading", e), !e) return;
                                                p.priorWebsocketSuccess = "websocket" === e.name, n.transport.pause((function() {
                                                    r || "closed" !== n.readyState && (h(), n.setTransport(e), e.send([{
                                                        type: "upgrade"
                                                    }]), n.emit("upgrade", e), e = null, n.upgrading = !1, n.flush())
                                                }))
                                            } else {
                                                var o = new Error("probe error");
                                                o.transport = e.name, n.emit("upgradeError", o)
                                            }
                                    })))
                                }

                                function i() {
                                    r || (r = !0, h(), e.close(), e = null)
                                }

                                function s(t) {
                                    var r = new Error("probe error: " + t);
                                    r.transport = e.name, i(), n.emit("upgradeError", r)
                                }

                                function a() {
                                    s("transport closed")
                                }

                                function c() {
                                    s("socket closed")
                                }

                                function u(t) {
                                    e && t.name !== e.name && i()
                                }

                                function h() {
                                    e.removeListener("open", o), e.removeListener("error", s), e.removeListener("close", a), n.removeListener("close", c), n.removeListener("upgrading", u)
                                }
                                p.priorWebsocketSuccess = !1, e.once("open", o), e.once("error", s), e.once("close", a), this.once("close", c), this.once("upgrading", u), e.open()
                            }, p.prototype.onOpen = function() {
                                if (this.readyState = "open", p.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause)
                                    for (var t = 0, e = this.upgrades.length; t < e; t++) this.probe(this.upgrades[t])
                            }, p.prototype.onPacket = function(t) {
                                if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (this.emit("packet", t), this.emit("heartbeat"), t.type) {
                                    case "open":
                                        this.onHandshake(c(t.data));
                                        break;
                                    case "pong":
                                        this.setPing(), this.emit("pong");
                                        break;
                                    case "error":
                                        var e = new Error("server error");
                                        e.code = t.data, this.onError(e);
                                        break;
                                    case "message":
                                        this.emit("data", t.data), this.emit("message", t.data)
                                }
                            }, p.prototype.onHandshake = function(t) {
                                this.emit("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.onOpen(), "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
                            }, p.prototype.onHeartbeat = function(t) {
                                clearTimeout(this.pingTimeoutTimer);
                                var e = this;
                                e.pingTimeoutTimer = setTimeout((function() {
                                    "closed" !== e.readyState && e.onClose("ping timeout")
                                }), t || e.pingInterval + e.pingTimeout)
                            }, p.prototype.setPing = function() {
                                var t = this;
                                clearTimeout(t.pingIntervalTimer), t.pingIntervalTimer = setTimeout((function() {
                                    t.ping(), t.onHeartbeat(t.pingTimeout)
                                }), t.pingInterval)
                            }, p.prototype.ping = function() {
                                var t = this;
                                this.sendPacket("ping", (function() {
                                    t.emit("ping")
                                }))
                            }, p.prototype.onDrain = function() {
                                this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
                            }, p.prototype.flush = function() {
                                "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
                            }, p.prototype.write = p.prototype.send = function(t, e, r) {
                                return this.sendPacket("message", t, e, r), this
                            }, p.prototype.sendPacket = function(t, e, r, n) {
                                if ("function" == typeof e && (n = e, e = void 0), "function" == typeof r && (n = r, r = null), "closing" !== this.readyState && "closed" !== this.readyState) {
                                    (r = r || {}).compress = !1 !== r.compress;
                                    var o = {
                                        type: t,
                                        data: e,
                                        options: r
                                    };
                                    this.emit("packetCreate", o), this.writeBuffer.push(o), n && this.once("flush", n), this.flush()
                                }
                            }, p.prototype.close = function() {
                                if ("opening" === this.readyState || "open" === this.readyState) {
                                    this.readyState = "closing";
                                    var t = this;
                                    this.writeBuffer.length ? this.once("drain", (function() {
                                        this.upgrading ? n() : e()
                                    })) : this.upgrading ? n() : e()
                                }

                                function e() {
                                    t.onClose("forced close"), t.transport.close()
                                }

                                function r() {
                                    t.removeListener("upgrade", r), t.removeListener("upgradeError", r), e()
                                }

                                function n() {
                                    t.once("upgrade", r), t.once("upgradeError", r)
                                }
                                return this
                            }, p.prototype.onError = function(t) {
                                p.priorWebsocketSuccess = !1, this.emit("error", t), this.onClose("transport error", t)
                            }, p.prototype.onClose = function(t, e) {
                                if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
                                    var r = this;
                                    clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", t, e), r.writeBuffer = [], r.prevBufferLen = 0
                                }
                            }, p.prototype.filterUpgrades = function(t) {
                                for (var e = [], r = 0, n = t.length; r < n; r++) ~i(this.transports, t[r]) && e.push(t[r]);
                                return e
                            }
                        }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {
                        "./transport": 3,
                        "./transports/index": 4,
                        "component-emitter": 14,
                        "engine.io-parser": 16,
                        indexof: 21,
                        parsejson: 23,
                        parseqs: 24,
                        parseuri: 25
                    }],
                    3: [function(t, e, r) {
                        var n = t("engine.io-parser"),
                            o = t("component-emitter");

                        function i(t) {
                            this.path = t.path, this.hostname = t.hostname, this.port = t.port, this.secure = t.secure, this.query = t.query, this.timestampParam = t.timestampParam, this.timestampRequests = t.timestampRequests, this.readyState = "", this.agent = t.agent || !1, this.socket = t.socket, this.enablesXDR = t.enablesXDR, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.forceNode = t.forceNode, this.extraHeaders = t.extraHeaders, this.localAddress = t.localAddress
                        }
                        e.exports = i, o(i.prototype), i.prototype.onError = function(t, e) {
                            var r = new Error(t);
                            return r.type = "TransportError", r.description = e, this.emit("error", r), this
                        }, i.prototype.open = function() {
                            return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this
                        }, i.prototype.close = function() {
                            return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this
                        }, i.prototype.send = function(t) {
                            if ("open" !== this.readyState) throw new Error("Transport not open");
                            this.write(t)
                        }, i.prototype.onOpen = function() {
                            this.readyState = "open", this.writable = !0, this.emit("open")
                        }, i.prototype.onData = function(t) {
                            var e = n.decodePacket(t, this.socket.binaryType);
                            this.onPacket(e)
                        }, i.prototype.onPacket = function(t) {
                            this.emit("packet", t)
                        }, i.prototype.onClose = function() {
                            this.readyState = "closed", this.emit("close")
                        }
                    }, {
                        "component-emitter": 14,
                        "engine.io-parser": 16
                    }],
                    4: [function(t, e, r) {
                        (function(e) {
                            var n = t("xmlhttprequest-ssl"),
                                o = t("./polling-xhr"),
                                i = t("./polling-jsonp"),
                                s = t("./websocket");

                            function a(t) {
                                var r = !1,
                                    s = !1,
                                    a = !1 !== t.jsonp;
                                if (e.location) {
                                    var c = "https:" === location.protocol,
                                        u = location.port;
                                    u || (u = c ? 443 : 80), r = t.hostname !== location.hostname || u !== t.port, s = t.secure !== c
                                }
                                if (t.xdomain = r, t.xscheme = s, "open" in new n(t) && !t.forceJSONP) return new o(t);
                                if (!a) throw new Error("JSONP disabled");
                                return new i(t)
                            }
                            r.polling = a, r.websocket = s
                        }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {
                        "./polling-jsonp": 5,
                        "./polling-xhr": 6,
                        "./websocket": 8,
                        "xmlhttprequest-ssl": 9
                    }],
                    5: [function(t, e, r) {
                        (function(r) {
                            var n = t("./polling"),
                                o = t("component-inherit");
                            e.exports = u;
                            var i, s = /\n/g,
                                a = /\\n/g;

                            function c() {}

                            function u(t) {
                                n.call(this, t), this.query = this.query || {}, i || (r.___eio || (r.___eio = []), i = r.___eio), this.index = i.length;
                                var e = this;
                                i.push((function(t) {
                                    e.onData(t)
                                })), this.query.j = this.index, r.document && r.addEventListener && r.addEventListener("beforeunload", (function() {
                                    e.script && (e.script.onerror = c)
                                }), !1)
                            }
                            o(u, n), u.prototype.supportsBinary = !1, u.prototype.doClose = function() {
                                this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), n.prototype.doClose.call(this)
                            }, u.prototype.doPoll = function() {
                                var t = this,
                                    e = document.createElement("script");
                                this.script && (this.script.parentNode.removeChild(this.script), this.script = null), e.async = !0, e.src = this.uri(), e.onerror = function(e) {
                                    t.onError("jsonp poll error", e)
                                };
                                var r = document.getElementsByTagName("script")[0];
                                r ? r.parentNode.insertBefore(e, r) : (document.head || document.body).appendChild(e), this.script = e, "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout((function() {
                                    var t = document.createElement("iframe");
                                    document.body.appendChild(t), document.body.removeChild(t)
                                }), 100)
                            }, u.prototype.doWrite = function(t, e) {
                                var r = this;
                                if (!this.form) {
                                    var n, o = document.createElement("form"),
                                        i = document.createElement("textarea"),
                                        c = this.iframeId = "eio_iframe_" + this.index;
                                    o.className = "socketio", o.style.position = "absolute", o.style.top = "-1000px", o.style.left = "-1000px", o.target = c, o.method = "POST", o.setAttribute("accept-charset", "utf-8"), i.name = "d", o.appendChild(i), document.body.appendChild(o), this.form = o, this.area = i
                                }

                                function u() {
                                    p(), e()
                                }

                                function p() {
                                    if (r.iframe) try {
                                        r.form.removeChild(r.iframe)
                                    } catch (e) {
                                        r.onError("jsonp polling iframe removal error", e)
                                    }
                                    try {
                                        var t = '<iframe src="javascript:0" name="' + r.iframeId + '">';
                                        n = document.createElement(t)
                                    } catch (e) {
                                        (n = document.createElement("iframe")).name = r.iframeId, n.src = "javascript:0"
                                    }
                                    n.id = r.iframeId, r.form.appendChild(n), r.iframe = n
                                }
                                this.form.action = this.uri(), p(), t = t.replace(a, "\\\n"), this.area.value = t.replace(s, "\\n");
                                try {
                                    this.form.submit()
                                } catch (h) {}
                                this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
                                    "complete" === r.iframe.readyState && u()
                                } : this.iframe.onload = u
                            }
                        }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {
                        "./polling": 7,
                        "component-inherit": 15
                    }],
                    6: [function(t, e, r) {
                        (function(r) {
                            var n = t("xmlhttprequest-ssl"),
                                o = t("./polling"),
                                i = t("component-emitter"),
                                s = t("component-inherit");

                            function a() {}

                            function c(t) {
                                if (o.call(this, t), this.requestTimeout = t.requestTimeout, this.extraHeaders = t.extraHeaders, r.location) {
                                    var e = "https:" === location.protocol,
                                        n = location.port;
                                    n || (n = e ? 443 : 80), this.xd = t.hostname !== r.location.hostname || n !== t.port, this.xs = t.secure !== e
                                }
                            }

                            function u(t) {
                                this.method = t.method || "GET", this.uri = t.uri, this.xd = !!t.xd, this.xs = !!t.xs, this.async = !1 !== t.async, this.data = void 0 !== t.data ? t.data : null, this.agent = t.agent, this.isBinary = t.isBinary, this.supportsBinary = t.supportsBinary, this.enablesXDR = t.enablesXDR, this.requestTimeout = t.requestTimeout, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.extraHeaders = t.extraHeaders, this.create()
                            }

                            function p() {
                                for (var t in u.requests) u.requests.hasOwnProperty(t) && u.requests[t].abort()
                            }
                            e.exports = c, e.exports.Request = u, s(c, o), c.prototype.supportsBinary = !0, c.prototype.request = function(t) {
                                return (t = t || {}).uri = this.uri(), t.xd = this.xd, t.xs = this.xs, t.agent = this.agent || !1, t.supportsBinary = this.supportsBinary, t.enablesXDR = this.enablesXDR, t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized, t.requestTimeout = this.requestTimeout, t.extraHeaders = this.extraHeaders, new u(t)
                            }, c.prototype.doWrite = function(t, e) {
                                var r = "string" != typeof t && void 0 !== t,
                                    n = this.request({
                                        method: "POST",
                                        data: t,
                                        isBinary: r
                                    }),
                                    o = this;
                                n.on("success", e), n.on("error", (function(t) {
                                    o.onError("xhr post error", t)
                                })), this.sendXhr = n
                            }, c.prototype.doPoll = function() {
                                var t = this.request(),
                                    e = this;
                                t.on("data", (function(t) {
                                    e.onData(t)
                                })), t.on("error", (function(t) {
                                    e.onError("xhr poll error", t)
                                })), this.pollXhr = t
                            }, i(u.prototype), u.prototype.create = function() {
                                var t = {
                                    agent: this.agent,
                                    xdomain: this.xd,
                                    xscheme: this.xs,
                                    enablesXDR: this.enablesXDR
                                };
                                t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized;
                                var e = this.xhr = new n(t),
                                    o = this;
                                try {
                                    e.open(this.method, this.uri, this.async);
                                    try {
                                        if (this.extraHeaders)
                                            for (var i in e.setDisableHeaderCheck && e.setDisableHeaderCheck(!0), this.extraHeaders) this.extraHeaders.hasOwnProperty(i) && e.setRequestHeader(i, this.extraHeaders[i])
                                    } catch (s) {}
                                    if (this.supportsBinary && (e.responseType = "arraybuffer"), "POST" === this.method) try {
                                        this.isBinary ? e.setRequestHeader("Content-type", "application/octet-stream") : e.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                                    } catch (s) {}
                                    try {
                                        e.setRequestHeader("Accept", "*/*")
                                    } catch (s) {}
                                    "withCredentials" in e && (e.withCredentials = !0), this.requestTimeout && (e.timeout = this.requestTimeout), this.hasXDR() ? (e.onload = function() {
                                        o.onLoad()
                                    }, e.onerror = function() {
                                        o.onError(e.responseText)
                                    }) : e.onreadystatechange = function() {
                                        4 === e.readyState && (200 === e.status || 1223 === e.status ? o.onLoad() : setTimeout((function() {
                                            o.onError(e.status)
                                        }), 0))
                                    }, e.send(this.data)
                                } catch (s) {
                                    return void setTimeout((function() {
                                        o.onError(s)
                                    }), 0)
                                }
                                r.document && (this.index = u.requestsCount++, u.requests[this.index] = this)
                            }, u.prototype.onSuccess = function() {
                                this.emit("success"), this.cleanup()
                            }, u.prototype.onData = function(t) {
                                this.emit("data", t), this.onSuccess()
                            }, u.prototype.onError = function(t) {
                                this.emit("error", t), this.cleanup(!0)
                            }, u.prototype.cleanup = function(t) {
                                if (void 0 !== this.xhr && null !== this.xhr) {
                                    if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = a : this.xhr.onreadystatechange = a, t) try {
                                        this.xhr.abort()
                                    } catch (e) {}
                                    r.document && delete u.requests[this.index], this.xhr = null
                                }
                            }, u.prototype.onLoad = function() {
                                var t;
                                try {
                                    var e;
                                    try {
                                        e = this.xhr.getResponseHeader("Content-Type").split(";")[0]
                                    } catch (s) {}
                                    if ("application/octet-stream" === e) t = this.xhr.response || this.xhr.responseText;
                                    else if (this.supportsBinary) try {
                                        t = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response))
                                    } catch (s) {
                                        for (var r = new Uint8Array(this.xhr.response), n = [], o = 0, i = r.length; o < i; o++) n.push(r[o]);
                                        t = String.fromCharCode.apply(null, n)
                                    } else t = this.xhr.responseText
                                } catch (s) {
                                    this.onError(s)
                                }
                                null != t && this.onData(t)
                            }, u.prototype.hasXDR = function() {
                                return void 0 !== r.XDomainRequest && !this.xs && this.enablesXDR
                            }, u.prototype.abort = function() {
                                this.cleanup()
                            }, u.requestsCount = 0, u.requests = {}, r.document && (r.attachEvent ? r.attachEvent("onunload", p) : r.addEventListener && r.addEventListener("beforeunload", p, !1))
                        }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {
                        "./polling": 7,
                        "component-emitter": 14,
                        "component-inherit": 15,
                        "xmlhttprequest-ssl": 9
                    }],
                    7: [function(t, e, r) {
                        var n = t("../transport"),
                            o = t("parseqs"),
                            i = t("engine.io-parser"),
                            s = t("component-inherit"),
                            a = t("yeast");
                        e.exports = u;
                        var c = null != new(t("xmlhttprequest-ssl"))({
                            xdomain: !1
                        }).responseType;

                        function u(t) {
                            var e = t && t.forceBase64;
                            c && !e || (this.supportsBinary = !1), n.call(this, t)
                        }
                        s(u, n), u.prototype.name = "polling", u.prototype.doOpen = function() {
                            this.poll()
                        }, u.prototype.pause = function(t) {
                            var e = this;

                            function r() {
                                e.readyState = "paused", t()
                            }
                            if (this.readyState = "pausing", this.polling || !this.writable) {
                                var n = 0;
                                this.polling && (n++, this.once("pollComplete", (function() {
                                    --n || r()
                                }))), this.writable || (n++, this.once("drain", (function() {
                                    --n || r()
                                })))
                            } else r()
                        }, u.prototype.poll = function() {
                            this.polling = !0, this.doPoll(), this.emit("poll")
                        }, u.prototype.onData = function(t) {
                            var e = this,
                                r = function(t, r, n) {
                                    if ("opening" === e.readyState && e.onOpen(), "close" === t.type) return e.onClose(), !1;
                                    e.onPacket(t)
                                };
                            i.decodePayload(t, this.socket.binaryType, this.supportsBinary, r), "closed" !== this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" === this.readyState && this.poll())
                        }, u.prototype.doClose = function() {
                            var t = this;

                            function e() {
                                t.write([{
                                    type: "close"
                                }])
                            }
                            "open" === this.readyState ? e() : this.once("open", e)
                        }, u.prototype.write = function(t) {
                            var e = this;
                            this.writable = !1;
                            var r = function() {
                                e.writable = !0, e.emit("drain")
                            };
                            i.encodePayload(t, this.supportsBinary, (function(t) {
                                e.doWrite(t, r)
                            }))
                        }, u.prototype.uri = function() {
                            var t = this.query || {},
                                e = this.secure ? "https" : "http",
                                r = "";
                            return !1 !== this.timestampRequests && (t[this.timestampParam] = a()), this.supportsBinary || t.sid || (t.b64 = 1), t = o.encode(t), this.port && ("https" === e && 443 !== Number(this.port) || "http" === e && 80 !== Number(this.port)) && (r = ":" + this.port), t.length && (t = "?" + t), e + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + r + this.path + t
                        }
                    }, {
                        "../transport": 3,
                        "component-inherit": 15,
                        "engine.io-parser": 16,
                        parseqs: 24,
                        "xmlhttprequest-ssl": 9,
                        yeast: 26
                    }],
                    8: [function(t, e, r) {
                        (function(r) {
                            var n, o = t("../transport"),
                                i = t("engine.io-parser"),
                                s = t("parseqs"),
                                a = t("component-inherit"),
                                c = t("yeast"),
                                u = r.WebSocket || r.MozWebSocket;
                            if ("undefined" == typeof window) try {
                                n = t("ws")
                            } catch (f) {}
                            var p = u;

                            function h(t) {
                                t && t.forceBase64 && (this.supportsBinary = !1), this.perMessageDeflate = t.perMessageDeflate, this.usingBrowserWebSocket = u && !t.forceNode, this.protocols = t.protocols, this.usingBrowserWebSocket || (p = n), o.call(this, t)
                            }
                            p || "undefined" != typeof window || (p = n), e.exports = h, a(h, o), h.prototype.name = "websocket", h.prototype.supportsBinary = !0, h.prototype.doOpen = function() {
                                if (this.check()) {
                                    var t = this.uri(),
                                        e = this.protocols,
                                        r = {
                                            agent: this.agent,
                                            perMessageDeflate: this.perMessageDeflate
                                        };
                                    r.pfx = this.pfx, r.key = this.key, r.passphrase = this.passphrase, r.cert = this.cert, r.ca = this.ca, r.ciphers = this.ciphers, r.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (r.headers = this.extraHeaders), this.localAddress && (r.localAddress = this.localAddress);
                                    try {
                                        this.ws = this.usingBrowserWebSocket ? e ? new p(t, e) : new p(t) : new p(t, e, r)
                                    } catch (n) {
                                        return this.emit("error", n)
                                    }
                                    void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners()
                                }
                            }, h.prototype.addEventListeners = function() {
                                var t = this;
                                this.ws.onopen = function() {
                                    t.onOpen()
                                }, this.ws.onclose = function() {
                                    t.onClose()
                                }, this.ws.onmessage = function(e) {
                                    t.onData(e.data)
                                }, this.ws.onerror = function(e) {
                                    t.onError("websocket error", e)
                                }
                            }, h.prototype.write = function(t) {
                                var e = this;
                                this.writable = !1;
                                for (var n = t.length, o = 0, s = n; o < s; o++) ! function(t) {
                                    i.encodePacket(t, e.supportsBinary, (function(o) {
                                        if (!e.usingBrowserWebSocket) {
                                            var i = {};
                                            t.options && (i.compress = t.options.compress), e.perMessageDeflate && ("string" == typeof o ? r.Buffer.byteLength(o) : o.length) < e.perMessageDeflate.threshold && (i.compress = !1)
                                        }
                                        try {
                                            e.usingBrowserWebSocket ? e.ws.send(o) : e.ws.send(o, i)
                                        } catch (f) {}--n || a()
                                    }))
                                }(t[o]);

                                function a() {
                                    e.emit("flush"), setTimeout((function() {
                                        e.writable = !0, e.emit("drain")
                                    }), 0)
                                }
                            }, h.prototype.onClose = function() {
                                o.prototype.onClose.call(this)
                            }, h.prototype.doClose = function() {
                                void 0 !== this.ws && this.ws.close()
                            }, h.prototype.uri = function() {
                                var t = this.query || {},
                                    e = this.secure ? "wss" : "ws",
                                    r = "";
                                return this.port && ("wss" === e && 443 !== Number(this.port) || "ws" === e && 80 !== Number(this.port)) && (r = ":" + this.port), this.timestampRequests && (t[this.timestampParam] = c()), this.supportsBinary || (t.b64 = 1), (t = s.encode(t)).length && (t = "?" + t), e + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + r + this.path + t
                            }, h.prototype.check = function() {
                                return !(!p || "__initialize" in p && this.name === h.prototype.name)
                            }
                        }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {
                        "../transport": 3,
                        "component-inherit": 15,
                        "engine.io-parser": 16,
                        parseqs: 24,
                        ws: void 0,
                        yeast: 26
                    }],
                    9: [function(t, e, r) {
                        (function(r) {
                            var n = t("has-cors");
                            e.exports = function(t) {
                                var e = t.xdomain,
                                    o = t.xscheme,
                                    i = t.enablesXDR;
                                try {
                                    if ("undefined" != typeof XMLHttpRequest && (!e || n)) return new XMLHttpRequest
                                } catch (s) {}
                                try {
                                    if ("undefined" != typeof XDomainRequest && !o && i) return new XDomainRequest
                                } catch (s) {}
                                if (!e) try {
                                    return new(r[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                                } catch (s) {}
                            }
                        }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {
                        "has-cors": 20
                    }],
                    10: [function(t, e, r) {
                        function n(t, e, r) {
                            var n = !1;
                            return r = r || o, i.count = t, 0 === t ? e() : i;

                            function i(t, o) {
                                if (i.count <= 0) throw new Error("after called too many times");
                                --i.count, t ? (n = !0, e(t), e = r) : 0 !== i.count || n || e(null, o)
                            }
                        }

                        function o() {}
                        e.exports = n
                    }, {}],
                    11: [function(t, e, r) {
                        e.exports = function(t, e, r) {
                            var n = t.byteLength;
                            if (e = e || 0, r = r || n, t.slice) return t.slice(e, r);
                            if (e < 0 && (e += n), r < 0 && (r += n), r > n && (r = n), e >= n || e >= r || 0 === n) return new ArrayBuffer(0);
                            for (var o = new Uint8Array(t), i = new Uint8Array(r - e), s = e, a = 0; s < r; s++, a++) i[a] = o[s];
                            return i.buffer
                        }
                    }, {}],
                    12: [function(t, e, r) {
                        ! function() {
                            "use strict";
                            for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", e = new Uint8Array(256), n = 0; n < t.length; n++) e[t.charCodeAt(n)] = n;
                            r.encode = function(e) {
                                var r, n = new Uint8Array(e),
                                    o = n.length,
                                    i = "";
                                for (r = 0; r < o; r += 3) i += t[n[r] >> 2], i += t[(3 & n[r]) << 4 | n[r + 1] >> 4], i += t[(15 & n[r + 1]) << 2 | n[r + 2] >> 6], i += t[63 & n[r + 2]];
                                return o % 3 == 2 ? i = i.substring(0, i.length - 1) + "=" : o % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="), i
                            }, r.decode = function(t) {
                                var r, n, o, i, s, a = .75 * t.length,
                                    c = t.length,
                                    u = 0;
                                "=" === t[t.length - 1] && (a--, "=" === t[t.length - 2] && a--);
                                var p = new ArrayBuffer(a),
                                    h = new Uint8Array(p);
                                for (r = 0; r < c; r += 4) n = e[t.charCodeAt(r)], o = e[t.charCodeAt(r + 1)], i = e[t.charCodeAt(r + 2)], s = e[t.charCodeAt(r + 3)], h[u++] = n << 2 | o >> 4, h[u++] = (15 & o) << 4 | i >> 2, h[u++] = (3 & i) << 6 | 63 & s;
                                return p
                            }
                        }()
                    }, {}],
                    13: [function(t, e, r) {
                        (function(t) {
                            var r = t.BlobBuilder || t.WebKitBlobBuilder || t.MSBlobBuilder || t.MozBlobBuilder,
                                n = function() {
                                    try {
                                        return 2 === new Blob(["hi"]).size
                                    } catch (t) {
                                        return !1
                                    }
                                }(),
                                o = n && function() {
                                    try {
                                        return 2 === new Blob([new Uint8Array([1, 2])]).size
                                    } catch (t) {
                                        return !1
                                    }
                                }(),
                                i = r && r.prototype.append && r.prototype.getBlob;

                            function s(t) {
                                for (var e = 0; e < t.length; e++) {
                                    var r = t[e];
                                    if (r.buffer instanceof ArrayBuffer) {
                                        var n = r.buffer;
                                        if (r.byteLength !== n.byteLength) {
                                            var o = new Uint8Array(r.byteLength);
                                            o.set(new Uint8Array(n, r.byteOffset, r.byteLength)), n = o.buffer
                                        }
                                        t[e] = n
                                    }
                                }
                            }

                            function a(t, e) {
                                e = e || {};
                                var n = new r;
                                s(t);
                                for (var o = 0; o < t.length; o++) n.append(t[o]);
                                return e.type ? n.getBlob(e.type) : n.getBlob()
                            }

                            function c(t, e) {
                                return s(t), new Blob(t, e || {})
                            }
                            e.exports = n ? o ? t.Blob : c : i ? a : void 0
                        }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {}],
                    14: [function(t, e, r) {
                        function n(t) {
                            if (t) return o(t)
                        }

                        function o(t) {
                            for (var e in n.prototype) t[e] = n.prototype[e];
                            return t
                        }
                        void 0 !== e && (e.exports = n), n.prototype.on = n.prototype.addEventListener = function(t, e) {
                            return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this
                        }, n.prototype.once = function(t, e) {
                            function r() {
                                this.off(t, r), e.apply(this, arguments)
                            }
                            return r.fn = e, this.on(t, r), this
                        }, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function(t, e) {
                            if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
                            var r, n = this._callbacks["$" + t];
                            if (!n) return this;
                            if (1 == arguments.length) return delete this._callbacks["$" + t], this;
                            for (var o = 0; o < n.length; o++)
                                if ((r = n[o]) === e || r.fn === e) {
                                    n.splice(o, 1);
                                    break
                                }
                            return this
                        }, n.prototype.emit = function(t) {
                            this._callbacks = this._callbacks || {};
                            var e = [].slice.call(arguments, 1),
                                r = this._callbacks["$" + t];
                            if (r)
                                for (var n = 0, o = (r = r.slice(0)).length; n < o; ++n) r[n].apply(this, e);
                            return this
                        }, n.prototype.listeners = function(t) {
                            return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
                        }, n.prototype.hasListeners = function(t) {
                            return !!this.listeners(t).length
                        }
                    }, {}],
                    15: [function(t, e, r) {
                        e.exports = function(t, e) {
                            var r = function() {};
                            r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
                        }
                    }, {}],
                    16: [function(t, e, r) {
                        (function(e) {
                            var n, o = t("./keys"),
                                i = t("has-binary2"),
                                s = t("arraybuffer.slice"),
                                a = t("after"),
                                c = t("./utf8");
                            e && e.ArrayBuffer && (n = t("base64-arraybuffer"));
                            var u = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent),
                                p = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent),
                                h = u || p;
                            r.protocol = 3;
                            var f = r.packets = {
                                    open: 0,
                                    close: 1,
                                    ping: 2,
                                    pong: 3,
                                    message: 4,
                                    upgrade: 5,
                                    noop: 6
                                },
                                l = o(f),
                                d = {
                                    type: "error",
                                    data: "parser error"
                                },
                                y = t("blob");

                            function m(t, e) {
                                return e("b" + r.packets[t.type] + t.data.data)
                            }

                            function v(t, e, n) {
                                if (!e) return r.encodeBase64Packet(t, n);
                                var o = t.data,
                                    i = new Uint8Array(o),
                                    s = new Uint8Array(1 + o.byteLength);
                                s[0] = f[t.type];
                                for (var a = 0; a < i.length; a++) s[a + 1] = i[a];
                                return n(s.buffer)
                            }

                            function g(t, e, n) {
                                if (!e) return r.encodeBase64Packet(t, n);
                                var o = new FileReader;
                                return o.onload = function() {
                                    t.data = o.result, r.encodePacket(t, e, !0, n)
                                }, o.readAsArrayBuffer(t.data)
                            }

                            function w(t, e, n) {
                                if (!e) return r.encodeBase64Packet(t, n);
                                if (h) return g(t, e, n);
                                var o = new Uint8Array(1);
                                return o[0] = f[t.type], n(new y([o.buffer, t.data]))
                            }

                            function b(t) {
                                try {
                                    t = c.decode(t, {
                                        strict: !1
                                    })
                                } catch (e) {
                                    return !1
                                }
                                return t
                            }

                            function x(t, e, r) {
                                for (var n = new Array(t.length), o = a(t.length, r), i = function(t, r, o) {
                                        e(r, (function(e, r) {
                                            n[t] = r, o(e, n)
                                        }))
                                    }, s = 0; s < t.length; s++) i(s, t[s], o)
                            }
                            r.encodePacket = function(t, r, n, o) {
                                "function" == typeof r && (o = r, r = !1), "function" == typeof n && (o = n, n = null);
                                var i = void 0 === t.data ? void 0 : t.data.buffer || t.data;
                                if (e.ArrayBuffer && i instanceof ArrayBuffer) return v(t, r, o);
                                if (y && i instanceof e.Blob) return w(t, r, o);
                                if (i && i.base64) return m(t, o);
                                var s = f[t.type];
                                return void 0 !== t.data && (s += n ? c.encode(String(t.data), {
                                    strict: !1
                                }) : String(t.data)), o("" + s)
                            }, r.encodeBase64Packet = function(t, n) {
                                var o, i = "b" + r.packets[t.type];
                                if (y && t.data instanceof e.Blob) {
                                    var s = new FileReader;
                                    return s.onload = function() {
                                        var t = s.result.split(",")[1];
                                        n(i + t)
                                    }, s.readAsDataURL(t.data)
                                }
                                try {
                                    o = String.fromCharCode.apply(null, new Uint8Array(t.data))
                                } catch (p) {
                                    for (var a = new Uint8Array(t.data), c = new Array(a.length), u = 0; u < a.length; u++) c[u] = a[u];
                                    o = String.fromCharCode.apply(null, c)
                                }
                                return i += e.btoa(o), n(i)
                            }, r.decodePacket = function(t, e, n) {
                                if (void 0 === t) return d;
                                if ("string" == typeof t) {
                                    if ("b" === t.charAt(0)) return r.decodeBase64Packet(t.substr(1), e);
                                    if (n && !1 === (t = b(t))) return d;
                                    var o = t.charAt(0);
                                    return Number(o) == o && l[o] ? t.length > 1 ? {
                                        type: l[o],
                                        data: t.substring(1)
                                    } : {
                                        type: l[o]
                                    } : d
                                }
                                o = new Uint8Array(t)[0];
                                var i = s(t, 1);
                                return y && "blob" === e && (i = new y([i])), {
                                    type: l[o],
                                    data: i
                                }
                            }, r.decodeBase64Packet = function(t, e) {
                                var r = l[t.charAt(0)];
                                if (!n) return {
                                    type: r,
                                    data: {
                                        base64: !0,
                                        data: t.substr(1)
                                    }
                                };
                                var o = n.decode(t.substr(1));
                                return "blob" === e && y && (o = new y([o])), {
                                    type: r,
                                    data: o
                                }
                            }, r.encodePayload = function(t, e, n) {
                                "function" == typeof e && (n = e, e = null);
                                var o = i(t);
                                if (e && o) return y && !h ? r.encodePayloadAsBlob(t, n) : r.encodePayloadAsArrayBuffer(t, n);
                                if (!t.length) return n("0:");

                                function s(t) {
                                    return t.length + ":" + t
                                }

                                function a(t, n) {
                                    r.encodePacket(t, !!o && e, !1, (function(t) {
                                        n(null, s(t))
                                    }))
                                }
                                x(t, a, (function(t, e) {
                                    return n(e.join(""))
                                }))
                            }, r.decodePayload = function(t, e, n, o) {
                                if ("string" != typeof t) return r.decodePayloadAsBinary(t, e, o);
                                var i;
                                if ("function" == typeof e && (o = e, e = null), "function" == typeof n && (o = n, n = null), "" === t) return o(d, 0, 1);
                                if (n && !1 === (t = b(t))) return o(d, 0, 1);
                                for (var s, a, c = "", u = 0, p = t.length; u < p; u++) {
                                    var h = t.charAt(u);
                                    if (":" === h) {
                                        if ("" === c || c != (s = Number(c))) return o(d, 0, 1);
                                        if (c != (a = t.substr(u + 1, s)).length) return o(d, 0, 1);
                                        if (a.length) {
                                            if (i = r.decodePacket(a, e, !1), d.type === i.type && d.data === i.data) return o(d, 0, 1);
                                            if (!1 === o(i, u + s, p)) return
                                        }
                                        u += s, c = ""
                                    } else c += h
                                }
                                return "" !== c ? o(d, 0, 1) : void 0
                            }, r.encodePayloadAsArrayBuffer = function(t, e) {
                                if (!t.length) return e(new ArrayBuffer(0));

                                function n(t, e) {
                                    r.encodePacket(t, !0, !0, (function(t) {
                                        return e(null, t)
                                    }))
                                }
                                x(t, n, (function(t, r) {
                                    var n = r.reduce((function(t, e) {
                                            var r;
                                            return t + (r = "string" == typeof e ? e.length : e.byteLength).toString().length + r + 2
                                        }), 0),
                                        o = new Uint8Array(n),
                                        i = 0;
                                    return r.forEach((function(t) {
                                        var e = "string" == typeof t,
                                            r = t;
                                        if (e) {
                                            for (var n = new Uint8Array(t.length), s = 0; s < t.length; s++) n[s] = t.charCodeAt(s);
                                            r = n.buffer
                                        }
                                        o[i++] = e ? 0 : 1;
                                        var a = r.byteLength.toString();
                                        for (s = 0; s < a.length; s++) o[i++] = parseInt(a[s]);
                                        for (o[i++] = 255, n = new Uint8Array(r), s = 0; s < n.length; s++) o[i++] = n[s]
                                    })), e(o.buffer)
                                }))
                            }, r.encodePayloadAsBlob = function(t, e) {
                                function n(t, e) {
                                    r.encodePacket(t, !0, !0, (function(t) {
                                        var r = new Uint8Array(1);
                                        if (r[0] = 1, "string" == typeof t) {
                                            for (var n = new Uint8Array(t.length), o = 0; o < t.length; o++) n[o] = t.charCodeAt(o);
                                            t = n.buffer, r[0] = 0
                                        }
                                        var i = (t instanceof ArrayBuffer ? t.byteLength : t.size).toString(),
                                            s = new Uint8Array(i.length + 1);
                                        for (o = 0; o < i.length; o++) s[o] = parseInt(i[o]);
                                        if (s[i.length] = 255, y) {
                                            var a = new y([r.buffer, s.buffer, t]);
                                            e(null, a)
                                        }
                                    }))
                                }
                                x(t, n, (function(t, r) {
                                    return e(new y(r))
                                }))
                            }, r.decodePayloadAsBinary = function(t, e, n) {
                                "function" == typeof e && (n = e, e = null);
                                for (var o = t, i = []; o.byteLength > 0;) {
                                    for (var a = new Uint8Array(o), c = 0 === a[0], u = "", p = 1; 255 !== a[p]; p++) {
                                        if (u.length > 310) return n(d, 0, 1);
                                        u += a[p]
                                    }
                                    o = s(o, 2 + u.length), u = parseInt(u);
                                    var h = s(o, 0, u);
                                    if (c) try {
                                        h = String.fromCharCode.apply(null, new Uint8Array(h))
                                    } catch (y) {
                                        var f = new Uint8Array(h);
                                        for (h = "", p = 0; p < f.length; p++) h += String.fromCharCode(f[p])
                                    }
                                    i.push(h), o = s(o, u)
                                }
                                var l = i.length;
                                i.forEach((function(t, o) {
                                    n(r.decodePacket(t, e, !0), o, l)
                                }))
                            }
                        }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {
                        "./keys": 17,
                        "./utf8": 18,
                        after: 10,
                        "arraybuffer.slice": 11,
                        "base64-arraybuffer": 12,
                        blob: 13,
                        "has-binary2": 19
                    }],
                    17: [function(t, e, r) {
                        e.exports = Object.keys || function(t) {
                            var e = [],
                                r = Object.prototype.hasOwnProperty;
                            for (var n in t) r.call(t, n) && e.push(n);
                            return e
                        }
                    }, {}],
                    18: [function(t, e, r) {
                        (function(t) {
                            ! function(n) {
                                var o = "object" == typeof r && r,
                                    i = "object" == typeof e && e && e.exports == o && e,
                                    s = "object" == typeof t && t;
                                s.global !== s && s.window !== s || (n = s);
                                var a, c, u, p = String.fromCharCode;

                                function h(t) {
                                    for (var e, r, n = [], o = 0, i = t.length; o < i;)(e = t.charCodeAt(o++)) >= 55296 && e <= 56319 && o < i ? 56320 == (64512 & (r = t.charCodeAt(o++))) ? n.push(((1023 & e) << 10) + (1023 & r) + 65536) : (n.push(e), o--) : n.push(e);
                                    return n
                                }

                                function f(t) {
                                    for (var e, r = t.length, n = -1, o = ""; ++n < r;)(e = t[n]) > 65535 && (o += p((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), o += p(e);
                                    return o
                                }

                                function l(t, e) {
                                    if (t >= 55296 && t <= 57343) {
                                        if (e) throw Error("Lone surrogate U+" + t.toString(16).toUpperCase() + " is not a scalar value");
                                        return !1
                                    }
                                    return !0
                                }

                                function d(t, e) {
                                    return p(t >> e & 63 | 128)
                                }

                                function y(t, e) {
                                    if (0 == (4294967168 & t)) return p(t);
                                    var r = "";
                                    return 0 == (4294965248 & t) ? r = p(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (l(t, e) || (t = 65533), r = p(t >> 12 & 15 | 224), r += d(t, 6)) : 0 == (4292870144 & t) && (r = p(t >> 18 & 7 | 240), r += d(t, 12), r += d(t, 6)), r += p(63 & t | 128)
                                }

                                function m(t, e) {
                                    for (var r = !1 !== (e = e || {}).strict, n = h(t), o = n.length, i = -1, s = ""; ++i < o;) s += y(n[i], r);
                                    return s
                                }

                                function v() {
                                    if (u >= c) throw Error("Invalid byte index");
                                    var t = 255 & a[u];
                                    if (u++, 128 == (192 & t)) return 63 & t;
                                    throw Error("Invalid continuation byte")
                                }

                                function g(t) {
                                    var e, r;
                                    if (u > c) throw Error("Invalid byte index");
                                    if (u == c) return !1;
                                    if (e = 255 & a[u], u++, 0 == (128 & e)) return e;
                                    if (192 == (224 & e)) {
                                        if ((r = (31 & e) << 6 | v()) >= 128) return r;
                                        throw Error("Invalid continuation byte")
                                    }
                                    if (224 == (240 & e)) {
                                        if ((r = (15 & e) << 12 | v() << 6 | v()) >= 2048) return l(r, t) ? r : 65533;
                                        throw Error("Invalid continuation byte")
                                    }
                                    if (240 == (248 & e) && (r = (7 & e) << 18 | v() << 12 | v() << 6 | v()) >= 65536 && r <= 1114111) return r;
                                    throw Error("Invalid UTF-8 detected")
                                }

                                function w(t, e) {
                                    var r = !1 !== (e = e || {}).strict;
                                    a = h(t), c = a.length, u = 0;
                                    for (var n, o = []; !1 !== (n = g(r));) o.push(n);
                                    return f(o)
                                }
                                var b = {
                                    version: "2.1.2",
                                    encode: m,
                                    decode: w
                                };
                                if (o && !o.nodeType)
                                    if (i) i.exports = b;
                                    else {
                                        var x = {}.hasOwnProperty;
                                        for (var k in b) x.call(b, k) && (o[k] = b[k])
                                    }
                                else n.utf8 = b
                            }(this)
                        }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {}],
                    19: [function(t, e, r) {
                        (function(r) {
                            var n = t("isarray");

                            function o(t) {
                                if (!t || "object" != typeof t) return !1;
                                if (n(t)) {
                                    for (var e = 0, i = t.length; e < i; e++)
                                        if (o(t[e])) return !0;
                                    return !1
                                }
                                if ("function" == typeof r.Buffer && r.Buffer.isBuffer && r.Buffer.isBuffer(t) || "function" == typeof r.ArrayBuffer && t instanceof ArrayBuffer || "function" == typeof r.Blob && t instanceof Blob || "function" == typeof r.File && t instanceof File) return !0;
                                if (t.toJSON && "function" == typeof t.toJSON && 1 === arguments.length) return o(t.toJSON(), !0);
                                for (var s in t)
                                    if (Object.prototype.hasOwnProperty.call(t, s) && o(t[s])) return !0;
                                return !1
                            }
                            e.exports = o
                        }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {
                        isarray: 22
                    }],
                    20: [function(t, e, r) {
                        try {
                            e.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
                        } catch (n) {
                            e.exports = !1
                        }
                    }, {}],
                    21: [function(t, e, r) {
                        var n = [].indexOf;
                        e.exports = function(t, e) {
                            if (n) return t.indexOf(e);
                            for (var r = 0; r < t.length; ++r)
                                if (t[r] === e) return r;
                            return -1
                        }
                    }, {}],
                    22: [function(t, e, r) {
                        var n = {}.toString;
                        e.exports = Array.isArray || function(t) {
                            return "[object Array]" == n.call(t)
                        }
                    }, {}],
                    23: [function(t, e, r) {
                        (function(t) {
                            var r = /^[\],:{}\s]*$/,
                                n = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                                o = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                                i = /(?:^|:|,)(?:\s*\[)+/g,
                                s = /^\s+/,
                                a = /\s+$/;
                            e.exports = function(e) {
                                return "string" == typeof e && e ? (e = e.replace(s, "").replace(a, ""), t.JSON && JSON.parse ? JSON.parse(e) : r.test(e.replace(n, "@").replace(o, "]").replace(i, "")) ? new Function("return " + e)() : void 0) : null
                            }
                        }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {}],
                    24: [function(t, e, r) {
                        r.encode = function(t) {
                            var e = "";
                            for (var r in t) t.hasOwnProperty(r) && (e.length && (e += "&"), e += encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
                            return e
                        }, r.decode = function(t) {
                            for (var e = {}, r = t.split("&"), n = 0, o = r.length; n < o; n++) {
                                var i = r[n].split("=");
                                e[decodeURIComponent(i[0])] = decodeURIComponent(i[1])
                            }
                            return e
                        }
                    }, {}],
                    25: [function(t, e, r) {
                        var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
                            o = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
                        e.exports = function(t) {
                            var e = t,
                                r = t.indexOf("["),
                                i = t.indexOf("]"); - 1 != r && -1 != i && (t = t.substring(0, r) + t.substring(r, i).replace(/:/g, ";") + t.substring(i, t.length));
                            for (var s = n.exec(t || ""), a = {}, c = 14; c--;) a[o[c]] = s[c] || "";
                            return -1 != r && -1 != i && (a.source = e, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a
                        }
                    }, {}],
                    26: [function(t, e, r) {
                        "use strict";
                        var n, o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
                            i = 64,
                            s = {},
                            a = 0,
                            c = 0;

                        function u(t) {
                            var e = "";
                            do {
                                e = o[t % i] + e, t = Math.floor(t / i)
                            } while (t > 0);
                            return e
                        }

                        function p(t) {
                            var e = 0;
                            for (c = 0; c < t.length; c++) e = e * i + s[t.charAt(c)];
                            return e
                        }

                        function h() {
                            var t = u(+new Date);
                            return t !== n ? (a = 0, n = t) : t + "." + u(a++)
                        }
                        for (; c < i; c++) s[o[c]] = c;
                        h.encode = u, h.decode = p, e.exports = h
                    }, {}],
                    27: [function(t, e, r) {
                        e.exports = t("./lib/index")
                    }, {
                        "./lib/index": 1
                    }]
                }, {}, [27])(27)
            }])
        }
    }
]);