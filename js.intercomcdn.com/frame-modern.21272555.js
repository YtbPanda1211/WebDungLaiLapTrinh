! function(e) {
    function t(t) {
        for (var r, s, a = t[0], c = t[1], u = t[2], l = 0, p = []; l < a.length; l++) s = a[l], Object.prototype.hasOwnProperty.call(i, s) && i[s] && p.push(i[s][0]), i[s] = 0;
        for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
        for (d && d(t); p.length;) p.shift()();
        return o.push.apply(o, u || []), n()
    }

    function n() {
        for (var e, t = 0; t < o.length; t++) {
            for (var n = o[t], r = !0, a = 1; a < n.length; a++) {
                var c = n[a];
                0 !== i[c] && (r = !1)
            }
            r && (o.splice(t--, 1), e = s(s.s = n[0]))
        }
        return e
    }
    var r = {},
        i = {
            4: 0
        },
        o = [];

    function s(t) {
        if (r[t]) return r[t].exports;
        var n = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, s), n.l = !0, n.exports
    }
    s.e = function(e) {
        var t = [],
            n = i[e];
        if (0 !== n)
            if (n) t.push(n[2]);
            else {
                var r = new Promise((function(t, r) {
                    n = i[e] = [t, r]
                }));
                t.push(n[2] = r);
                var o, a = document.createElement("script");
                a.charset = "utf-8", a.timeout = 120, s.nc && a.setAttribute("nonce", s.nc), a.src = function(e) {
                    return s.p + "" + ({
                        0: "app",
                        1: "banner",
                        2: "bound-events",
                        3: "confetti",
                        5: "install",
                        6: "launcher-discovery",
                        7: "locale-ar-json",
                        8: "locale-bg-json",
                        9: "locale-bs-json",
                        10: "locale-ca-json",
                        11: "locale-cs-json",
                        12: "locale-da-json",
                        13: "locale-de-form-json",
                        14: "locale-de-json",
                        15: "locale-el-json",
                        16: "locale-es-json",
                        17: "locale-et-json",
                        18: "locale-fi-json",
                        19: "locale-fr-json",
                        20: "locale-he-json",
                        21: "locale-hr-json",
                        22: "locale-hu-json",
                        23: "locale-id-json",
                        24: "locale-it-json",
                        25: "locale-ja-json",
                        26: "locale-ko-json",
                        27: "locale-lt-json",
                        28: "locale-lv-json",
                        29: "locale-mn-json",
                        30: "locale-nb-json",
                        31: "locale-nl-json",
                        32: "locale-package-json",
                        33: "locale-pl-json",
                        34: "locale-pt-BR-json",
                        35: "locale-pt-json",
                        36: "locale-ro-json",
                        37: "locale-ru-json",
                        38: "locale-sl-json",
                        39: "locale-sr-json",
                        40: "locale-sv-json",
                        41: "locale-tr-json",
                        42: "locale-vi-json",
                        43: "locale-zh-CN-json",
                        44: "locale-zh-TW-json",
                        45: "message",
                        46: "sentry",
                        47: "survey",
                        49: "vendors~app",
                        50: "vendors~bound-events",
                        51: "vendors~message",
                        52: "vendors~sentry"
                    }[e] || e) + "-modern." + {
                        0: "6b149d76",
                        1: "892a2c05",
                        2: "40ac4866",
                        3: "ac272bdd",
                        5: "2a719281",
                        6: "20679dde",
                        7: "24dc1e0f",
                        8: "18165f6c",
                        9: "5dbb9374",
                        10: "e92e5b20",
                        11: "95943a82",
                        12: "4d74f584",
                        13: "d5760dd3",
                        14: "36de2061",
                        15: "39595e07",
                        16: "b5e4dad4",
                        17: "70c0a5ed",
                        18: "d27e6100",
                        19: "347805a9",
                        20: "a6cd770f",
                        21: "6899eb4a",
                        22: "33d88f30",
                        23: "f59df947",
                        24: "cbd450d1",
                        25: "39d56ea5",
                        26: "494c22c9",
                        27: "c6f8bef0",
                        28: "39de021a",
                        29: "b1b40591",
                        30: "a968d860",
                        31: "bca0cc47",
                        32: "91a41fcc",
                        33: "5739aab3",
                        34: "18bbc88d",
                        35: "607a935a",
                        36: "0c9fbc52",
                        37: "1f07152f",
                        38: "903a5134",
                        39: "100f4bd1",
                        40: "3f3106d4",
                        41: "6d2c4100",
                        42: "96e0f3ea",
                        43: "0f192310",
                        44: "397c44fd",
                        45: "7d3f7c0c",
                        46: "8ca3bc4c",
                        47: "e101f3fd",
                        49: "e7096d30",
                        50: "8b6d7107",
                        51: "beb3e457",
                        52: "b62559f5"
                    }[e] + ".js"
                }(e);
                var c = new Error;
                o = function(t) {
                    a.onerror = a.onload = null, clearTimeout(u);
                    var n = i[e];
                    if (0 !== n) {
                        if (n) {
                            var r = t && ("load" === t.type ? "missing" : t.type),
                                o = t && t.target && t.target.src;
                            c.message = "Loading chunk " + e + " failed.\n(" + r + ": " + o + ")", c.name = "ChunkLoadError", c.type = r, c.request = o, n[1](c)
                        }
                        i[e] = void 0
                    }
                };
                var u = setTimeout((function() {
                    o({
                        type: "timeout",
                        target: a
                    })
                }), 12e4);
                a.onerror = a.onload = o, document.head.appendChild(a)
            }
        return Promise.all(t)
    }, s.m = e, s.c = r, s.d = function(e, t, n) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, s.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.t = function(e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) s.d(n, r, function(t) {
                return e[t]
            }.bind(null, r));
        return n
    }, s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return s.d(t, "a", t), t
    }, s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.p = "https://js.intercomcdn.com/", s.oe = function(e) {
        throw console.error(e), e
    };
    var a = window.webpackJsonp = window.webpackJsonp || [],
        c = a.push.bind(a);
    a.push = t, a = a.slice();
    for (var u = 0; u < a.length; u++) t(a[u]);
    var d = c;
    o.push([257, 48]), n()
}([function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return r
    })), n.d(t, "a", (function() {
        return i
    })), n.d(t, "c", (function() {
        return o
    })), n.d(t, "d", (function() {
        return s
    })), n.d(t, "e", (function() {
        return a
    })), n.d(t, "f", (function() {
        return c
    })), n.d(t, "g", (function() {
        return u
    })), n.d(t, "h", (function() {
        return d
    })), n.d(t, "i", (function() {
        return l
    })), n.d(t, "k", (function() {
        return p
    })), n.d(t, "l", (function() {
        return f
    })), n.d(t, "m", (function() {
        return b
    })), n.d(t, "n", (function() {
        return h
    })), n.d(t, "o", (function() {
        return g
    })), n.d(t, "p", (function() {
        return m
    })), n.d(t, "q", (function() {
        return v
    })), n.d(t, "r", (function() {
        return O
    })), n.d(t, "s", (function() {
        return y
    })), n.d(t, "t", (function() {
        return _
    })), n.d(t, "u", (function() {
        return C
    })), n.d(t, "v", (function() {
        return S
    })), n.d(t, "w", (function() {
        return j
    })), n.d(t, "x", (function() {
        return w
    })), n.d(t, "y", (function() {
        return E
    })), n.d(t, "A", (function() {
        return I
    })), n.d(t, "B", (function() {
        return A
    })), n.d(t, "D", (function() {
        return T
    })), n.d(t, "C", (function() {
        return R
    })), n.d(t, "E", (function() {
        return P
    })), n.d(t, "F", (function() {
        return M
    })), n.d(t, "G", (function() {
        return D
    })), n.d(t, "H", (function() {
        return k
    })), n.d(t, "I", (function() {
        return N
    })), n.d(t, "J", (function() {
        return U
    })), n.d(t, "K", (function() {
        return L
    })), n.d(t, "L", (function() {
        return x
    })), n.d(t, "M", (function() {
        return B
    })), n.d(t, "O", (function() {
        return $
    })), n.d(t, "N", (function() {
        return F
    })), n.d(t, "P", (function() {
        return V
    })), n.d(t, "Q", (function() {
        return H
    })), n.d(t, "R", (function() {
        return G
    })), n.d(t, "S", (function() {
        return q
    })), n.d(t, "T", (function() {
        return z
    })), n.d(t, "U", (function() {
        return W
    })), n.d(t, "V", (function() {
        return J
    })), n.d(t, "W", (function() {
        return K
    })), n.d(t, "X", (function() {
        return Y
    })), n.d(t, "Y", (function() {
        return Q
    })), n.d(t, "Z", (function() {
        return X
    })), n.d(t, "ab", (function() {
        return Z
    })), n.d(t, "bb", (function() {
        return ee
    })), n.d(t, "cb", (function() {
        return te
    })), n.d(t, "db", (function() {
        return ne
    })), n.d(t, "nc", (function() {
        return re
    })), n.d(t, "eb", (function() {
        return ie
    })), n.d(t, "z", (function() {
        return oe
    })), n.d(t, "fb", (function() {
        return se
    })), n.d(t, "gb", (function() {
        return ae
    })), n.d(t, "hb", (function() {
        return ce
    })), n.d(t, "ib", (function() {
        return ue
    })), n.d(t, "jb", (function() {
        return de
    })), n.d(t, "kb", (function() {
        return le
    })), n.d(t, "lb", (function() {
        return pe
    })), n.d(t, "mb", (function() {
        return fe
    })), n.d(t, "nb", (function() {
        return be
    })), n.d(t, "ob", (function() {
        return he
    })), n.d(t, "pb", (function() {
        return ge
    })), n.d(t, "qb", (function() {
        return me
    })), n.d(t, "rb", (function() {
        return ve
    })), n.d(t, "sb", (function() {
        return Oe
    })), n.d(t, "tb", (function() {
        return ye
    })), n.d(t, "xb", (function() {
        return _e
    })), n.d(t, "yb", (function() {
        return Ce
    })), n.d(t, "zb", (function() {
        return Se
    })), n.d(t, "ub", (function() {
        return je
    })), n.d(t, "vb", (function() {
        return we
    })), n.d(t, "wb", (function() {
        return Ee
    })), n.d(t, "Ab", (function() {
        return Ie
    })), n.d(t, "Bb", (function() {
        return Ae
    })), n.d(t, "Cb", (function() {
        return Te
    })), n.d(t, "Db", (function() {
        return Re
    })), n.d(t, "Eb", (function() {
        return Pe
    })), n.d(t, "Fb", (function() {
        return Me
    })), n.d(t, "Gb", (function() {
        return De
    })), n.d(t, "Hb", (function() {
        return ke
    })), n.d(t, "Ib", (function() {
        return Ne
    })), n.d(t, "Jb", (function() {
        return Ue
    })), n.d(t, "Kb", (function() {
        return Le
    })), n.d(t, "Lb", (function() {
        return xe
    })), n.d(t, "Mb", (function() {
        return Be
    })), n.d(t, "Nb", (function() {
        return $e
    })), n.d(t, "Ob", (function() {
        return Fe
    })), n.d(t, "Pb", (function() {
        return Ve
    })), n.d(t, "Rb", (function() {
        return He
    })), n.d(t, "j", (function() {
        return Ge
    })), n.d(t, "Sb", (function() {
        return qe
    })), n.d(t, "Tb", (function() {
        return ze
    })), n.d(t, "Ub", (function() {
        return We
    })), n.d(t, "Vb", (function() {
        return Je
    })), n.d(t, "Wb", (function() {
        return Ke
    })), n.d(t, "Xb", (function() {
        return Ye
    })), n.d(t, "Yb", (function() {
        return Qe
    })), n.d(t, "ac", (function() {
        return Xe
    })), n.d(t, "Zb", (function() {
        return Ze
    })), n.d(t, "Qb", (function() {
        return et
    })), n.d(t, "cc", (function() {
        return tt
    })), n.d(t, "dc", (function() {
        return nt
    })), n.d(t, "bc", (function() {
        return rt
    })), n.d(t, "ec", (function() {
        return it
    })), n.d(t, "gc", (function() {
        return ot
    })), n.d(t, "fc", (function() {
        return st
    })), n.d(t, "hc", (function() {
        return at
    })), n.d(t, "ic", (function() {
        return ct
    })), n.d(t, "jc", (function() {
        return ut
    })), n.d(t, "kc", (function() {
        return dt
    })), n.d(t, "lc", (function() {
        return lt
    })), n.d(t, "mc", (function() {
        return pt
    })), n.d(t, "oc", (function() {
        return ft
    })), n.d(t, "pc", (function() {
        return bt
    })), n.d(t, "qc", (function() {
        return ht
    })), n.d(t, "rc", (function() {
        return gt
    })), n.d(t, "Xc", (function() {
        return mt
    })), n.d(t, "sc", (function() {
        return vt
    })), n.d(t, "tc", (function() {
        return Ot
    })), n.d(t, "uc", (function() {
        return yt
    })), n.d(t, "vc", (function() {
        return _t
    })), n.d(t, "xc", (function() {
        return Ct
    })), n.d(t, "zc", (function() {
        return St
    })), n.d(t, "yc", (function() {
        return jt
    })), n.d(t, "wc", (function() {
        return wt
    })), n.d(t, "Ac", (function() {
        return Et
    })), n.d(t, "Bc", (function() {
        return It
    })), n.d(t, "Cc", (function() {
        return At
    })), n.d(t, "Dc", (function() {
        return Tt
    })), n.d(t, "Ec", (function() {
        return Rt
    })), n.d(t, "Fc", (function() {
        return Pt
    })), n.d(t, "Hc", (function() {
        return Mt
    })), n.d(t, "Ic", (function() {
        return Dt
    })), n.d(t, "Gc", (function() {
        return kt
    })), n.d(t, "Jc", (function() {
        return Nt
    })), n.d(t, "Kc", (function() {
        return Ut
    })), n.d(t, "Lc", (function() {
        return Lt
    })), n.d(t, "Mc", (function() {
        return xt
    })), n.d(t, "Nc", (function() {
        return Bt
    })), n.d(t, "Oc", (function() {
        return $t
    })), n.d(t, "Pc", (function() {
        return Ft
    })), n.d(t, "Qc", (function() {
        return Vt
    })), n.d(t, "Rc", (function() {
        return Ht
    })), n.d(t, "Sc", (function() {
        return Gt
    })), n.d(t, "Tc", (function() {
        return qt
    })), n.d(t, "Uc", (function() {
        return zt
    })), n.d(t, "Vc", (function() {
        return Wt
    })), n.d(t, "Wc", (function() {
        return Jt
    })), n.d(t, "Yc", (function() {
        return Kt
    })), n.d(t, "Zc", (function() {
        return Yt
    })), n.d(t, "bd", (function() {
        return Qt
    })), n.d(t, "ad", (function() {
        return Xt
    })), n.d(t, "cd", (function() {
        return Zt
    })), n.d(t, "dd", (function() {
        return en
    })), n.d(t, "ed", (function() {
        return tn
    })), n.d(t, "fd", (function() {
        return nn
    })), n.d(t, "gd", (function() {
        return rn
    })), n.d(t, "hd", (function() {
        return on
    })), n.d(t, "id", (function() {
        return sn
    })), n.d(t, "jd", (function() {
        return an
    })), n.d(t, "kd", (function() {
        return cn
    })), n.d(t, "ld", (function() {
        return un
    })), n.d(t, "md", (function() {
        return dn
    })), n.d(t, "nd", (function() {
        return ln
    })), n.d(t, "od", (function() {
        return pn
    })), n.d(t, "pd", (function() {
        return fn
    })), n.d(t, "qd", (function() {
        return bn
    })), n.d(t, "rd", (function() {
        return hn
    })), n.d(t, "sd", (function() {
        return gn
    })), n.d(t, "td", (function() {
        return mn
    })), n.d(t, "ud", (function() {
        return vn
    })), n.d(t, "vd", (function() {
        return On
    })), n.d(t, "wd", (function() {
        return yn
    })), n.d(t, "xd", (function() {
        return _n
    })), n.d(t, "yd", (function() {
        return Cn
    })), n.d(t, "zd", (function() {
        return Sn
    })), n.d(t, "Ad", (function() {
        return jn
    })), n.d(t, "Bd", (function() {
        return wn
    })), n.d(t, "Cd", (function() {
        return En
    })), n.d(t, "Dd", (function() {
        return In
    })), n.d(t, "Ed", (function() {
        return An
    })), n.d(t, "Fd", (function() {
        return Tn
    })), n.d(t, "Gd", (function() {
        return Rn
    }));
    const r = "ACTIVATE_TRIGGER_FAILED",
        i = "ACTIVATE_TRIGGER",
        o = "ADD_CONVERSATION_RATING_REMARK",
        s = "ADD_INBOUND_SUGGESTIONS",
        a = "ADD_TRIGGER",
        c = "ADMIN_IS_TYPING",
        u = "ANONYMOUS_SESSION_CHANGED",
        d = "ARTICLE_GO_BACK",
        l = "ARTICLE_LOADED",
        p = "CHANGE_BOUND_EVENT_CREATOR_STAGE",
        f = "CHANGE_CONVERSATION_RATING_INDEX",
        b = "CHANGE_VIDEO_MUTED",
        h = "CLEAR_OPEN_ON_BOOT",
        g = "CLEAR_VALIDATION_STATE",
        m = "CLOSE_ALERT",
        v = "CLOSE_ARTICLE",
        O = "CLOSE_BOUND_EVENT_CREATOR",
        y = "CLOSE_INSTALL_MODE",
        _ = "CLOSE_LAUNCHER_DISCOVERY_MODE",
        C = "CLOSE_MESSAGE",
        S = "CLOSE_MESSENGER",
        j = "CLOSE_POINTER_MESSAGE",
        w = "CLOSE_SHEET",
        E = "COLLECT_EMAIL_FROM_BANNER",
        I = "COMPLETE_TOUR",
        A = "COMPOSER_CONTENT_CHANGED",
        T = "CONVERSATION_READ_ELSEWHERE",
        R = "CONVERSATIONS_SCROLLED",
        P = "CREATE_ARTICLE_REACTION_REQUEST",
        M = "CREATE_BANNER_CUSTOMIZATION_OVERRIDE",
        D = "CREATE_COMMENT_FAILURE",
        k = "CREATE_COMMENT_REQUEST",
        N = "CREATE_COMMENT_SUCCESS",
        U = "CREATE_CONVERSATION_FAILURE",
        L = "CREATE_CONVERSATION_REQUEST",
        x = "CREATE_CONVERSATION_SUCCESS",
        B = "CREATE_CUSTOMIZATION_OVERRIDE",
        $ = "CREATE_EVENT_FAILED",
        F = "CREATE_EVENT",
        V = "CREATE_OR_UPDATE_USER_FAILURE",
        H = "CREATE_OR_UPDATE_USER_REQUEST",
        G = "CREATE_OR_UPDATE_USER_SUCCESS",
        q = "CREATE_REACTION_FAILURE",
        z = "CREATE_REACTION_REQUEST",
        W = "CREATE_REACTION_SUCCESS",
        J = "DEACTIVATE_TRIGGER",
        K = "DELIVER_BOT_INTRO",
        Y = "DESTROY_SESSION",
        Q = "DISABLE_LAUNCHER_DISCOVERY_MODE",
        X = "DISMISS_BANNER",
        Z = "DISMISS_NOTIFICATIONS_FAILURE",
        ee = "DISMISS_NOTIFICATIONS_REQUEST",
        te = "DISMISS_NOTIFICATIONS_SUCCESS",
        ne = "DISMISS_POINTER_MESSAGE",
        re = "RECORD_SURVEY_STEP_VALIDATION_RESULT",
        ie = "DISMISS_SURVEY",
        oe = "COMPLETE_SURVEY",
        se = "EMAIL_ATTRIBUTE_COLLECTOR_INSERTED",
        ae = "ENTER_STANDALONE_MODE",
        ce = "EXPANSION_TRANSITION_COMPLETE",
        ue = "FETCH_BANNER_VIEW",
        de = "FETCH_MESSENGER_SHEET_DATA_FAILURE",
        le = "FETCH_MESSENGER_SHEET_DATA_REQUEST",
        pe = "FETCH_MESSENGER_SHEET_DATA_SUCCESS",
        fe = "FETCH_TOUR_FAILURE",
        be = "FETCH_TOUR_REQUEST",
        he = "FETCH_TOUR_SUCCESS",
        ge = "FINISH_NAVIGATION",
        me = "GET_CARD_CONTENT_FAILURE",
        ve = "GET_CARD_CONTENT_REQUEST",
        Oe = "GET_CARD_CONTENT_SUCCESS",
        ye = "GET_CARD_VIEW_FAILURE",
        _e = "GET_CONVERSATION_FAILURE",
        Ce = "GET_CONVERSATION_REQUEST",
        Se = "GET_CONVERSATION_SUCCESS",
        je = "GET_CONVERSATIONS_FAILURE",
        we = "GET_CONVERSATIONS_REQUEST",
        Ee = "GET_CONVERSATIONS_SUCCESS",
        Ie = "GET_HOME_SCREEN_CARDS_FAILURE",
        Ae = "GET_HOME_SCREEN_CARDS_REQUEST",
        Te = "GET_HOME_SCREEN_CARDS_SUCCESS",
        Re = "GET_HOME_SCREEN_CONVERSATIONS_SUCCESS",
        Pe = "GET_UNREAD_CONVERSATIONS_REQUEST",
        Me = "GET_UNREAD_CONVERSATIONS_SUCCESS",
        De = "HIDE_SEARCH_BROWSE",
        ke = "INPUT_VALUE_CHANGED",
        Ne = "MARK_ACTIVE_TOUR_AS_COMPLETED",
        Ue = "MARK_CONVERSATION_AS_READ_FAILURE",
        Le = "MARK_CONVERSATION_AS_READ_REQUEST",
        xe = "MARK_CONVERSATION_AS_READ_SUCCESS",
        Be = "MESSENGER_NAVIGATE_BACK",
        $e = "MESSENGER_OPEN_REQUEST_FAILED",
        Fe = "MESSENGER_OPEN_REQUEST_SENT",
        Ve = "MESSENGER_OPEN_REQUEST_SUCCESS",
        He = "OPEN_ARTICLE",
        Ge = "CHANGE_ARTICLE_LOCALE",
        qe = "OPEN_BORDERLESS_CONVERSATION",
        ze = "OPEN_BOUND_EVENT_CREATOR",
        We = "OPEN_INSTALL_MODE",
        Je = "OPEN_LAUNCHER_DISCOVERY_MODE",
        Ke = "OPEN_MESSAGE",
        Ye = "OPEN_MESSENGER",
        Qe = "OPEN_POINTER_MESSAGE",
        Xe = "OPEN_SHEET_WITH_TOKEN",
        Ze = "OPEN_SHEET",
        et = "OPENING_MESSENGER_FROM_LAUNCHER_DISCOVERY_MODE",
        tt = "PROGRESS_TOUR_REQUEST_FINISHED",
        nt = "PROGRESS_TOUR_REQUEST_STARTED",
        rt = "PROGRESS_TOUR",
        it = "REACT_TO_BANNER",
        ot = "RECEIVE_ARTICLE_COLLECTIONS",
        st = "RECEIVE_ARTICLE",
        at = "RECEIVE_BANNERS",
        ct = "RECEIVE_HOME_SCREEN_ARTICLE_SUGGESTIONS",
        ut = "RECEIVE_SURVEY",
        dt = "RECEIVE_SURVEY_STEP",
        lt = "RECORD_MESSAGE_SENT",
        pt = "RECORD_SURVEY_RESPONSE",
        ft = "REHYDRATE",
        bt = "REMOVE_INBOUND_SUGGESTIONS",
        ht = "REMOVE_TRIGGER",
        gt = "RESET_TOUR",
        mt = "SNOOZE_TOUR",
        vt = "SAVE_BOUND_EVENT",
        Ot = "SEARCH_ARTICLES_FAILURE",
        yt = "SEARCH_ARTICLES_REQUEST",
        _t = "SEARCH_ARTICLES_SUCCESS",
        Ct = "SEARCH_BROWSE_CLOSE_TRANSITION_ENDED",
        St = "SEARCH_BROWSE_GO_BACK_COMPLETE",
        jt = "SEARCH_BROWSE_GO_BACK",
        wt = "SEARCH_BROWSE_CLOSE",
        Et = "SEARCH_BROWSE_SET_SEARCH_FOCUS",
        It = "SEARCH_GIFS_FAILURE",
        At = "SEARCH_GIFS_REQUEST",
        Tt = "SEARCH_GIFS_SUCCESS",
        Rt = "SELECT_ARTICLE_COLLECTION",
        Pt = "SET_ACCESSIBILITY_THEME",
        Mt = "SET_COMPOSER_SUGGESTIONS_DISMISSED",
        Dt = "SET_COMPOSER_SUGGESTIONS_LOADING",
        kt = "SET_COMPOSER_SUGGESTIONS",
        Nt = "SET_LIGHTWEIGHT_APP_ACTIVE",
        Ut = "SET_NEW_CONVERSATION_COMPOSER_STATE",
        Lt = "SET_PREDICTIVE_ANSWERS",
        xt = "SET_PROXY_LOADED_STATUS",
        Bt = "SET_SHEET_TITLE",
        $t = "SET_TAB_NAVIGATION",
        Ft = "SHOW_ALERT",
        Vt = "SHOW_CONVERSATION",
        Ht = "SHOW_CONVERSATIONS",
        Gt = "SHOW_EMPTY_SCREEN",
        qt = "SHOW_HOME_SCREEN",
        zt = "SHOW_MESSENGER_TRIGGER_SCREEN",
        Wt = "SHOW_NEW_CONVERSATION",
        Jt = "SHOW_SEARCH_BROWSE",
        Kt = "START_NAVIGATION",
        Yt = "START_TOUR_PREVIEW",
        Qt = "STOP_TOUR_PREVIEW",
        Xt = "STOP_TOUR",
        Zt = "SUBMIT_MESSENGER_CARD_ACTION_FAILURE",
        en = "SUBMIT_MESSENGER_CARD_ACTION_REQUEST",
        tn = "SUBMIT_MESSENGER_CARD_ACTION_SUCCESS",
        nn = "TOGGLE_ARTICLE_EXPANDED_MODE",
        rn = "TOGGLE_UPFRONT_EMAIL_COLLECTOR_STATE",
        on = "TOUR_UPDATE_FAILED",
        sn = "TRIGGER_TRANSITIONS_FAILURE",
        an = "TRIGGER_TRANSITIONS_REQUEST",
        cn = "TRIGGER_TRANSITIONS_SUCCESS",
        un = "UPDATE_BOUND_EVENT_DATA",
        dn = "UPDATE_CONVERSATION_FORM_FAILURE",
        ln = "UPDATE_CONVERSATION_FORM_REQUEST",
        pn = "UPDATE_CONVERSATION_FORM_SUCCESS",
        fn = "UPDATE_NOTIFICATION_TYPE_OVERRIDES",
        bn = "UPDATE_PHONE_NUMBER_FAILURE",
        hn = "UPDATE_PHONE_NUMBER_REQUEST",
        gn = "UPDATE_PHONE_NUMBER_SUCCESS",
        mn = "UPDATE_PREVIEW_INBOUND_SUGGESTIONS",
        vn = "UPDATE_SEARCH_BROWSE_QUERY",
        On = "UPDATE_SERVER_SIDE_INBOUND_SUGGESTIONS",
        yn = "UPDATE_UPLOAD_PROGRESS",
        _n = "UPDATE_USER_SUPPLIED_EMAIL_REQUEST",
        Cn = "UPDATE_USER_SUPPLIED_EMAIL_SUCCESS",
        Sn = "UPFRONT_EMAIL_COLLECTION_SUBMITTED",
        jn = "USER_CONTENT_SEEN_BY_ADMIN",
        wn = "USER_IS_ABSENT",
        En = "USER_IS_INTERACTING",
        In = "USER_IS_PRESENT",
        An = "USER_IS_TYPING",
        Tn = "VISITOR_AUTO_MESSAGE_CONDITION_SATISFIED_ERROR",
        Rn = "VISITOR_AUTO_MESSAGE_CONDITION_SATISFIED_SUCCESS"
}, , function(e, t, n) {
    "use strict";
    var r = n(10),
        i = n.n(r),
        o = n(24);
    var s = n(64),
        a = n(3),
        c = n(112),
        u = n(55);

    function d(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function l(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? d(Object(n), !0).forEach((function(t) {
                p(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function p(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    n.d(t, "n", (function() {
        return j
    })), n.d(t, "h", (function() {
        return A
    })), n.d(t, "l", (function() {
        return T
    })), n.d(t, "i", (function() {
        return R
    })), n.d(t, "m", (function() {
        return P
    })), n.d(t, "d", (function() {
        return M
    })), n.d(t, "b", (function() {
        return D
    })), n.d(t, "c", (function() {
        return k
    })), n.d(t, "a", (function() {
        return N
    })), n.d(t, "f", (function() {
        return U
    })), n.d(t, "o", (function() {
        return x
    })), n.d(t, "k", (function() {
        return B
    })), n.d(t, "g", (function() {
        return F
    })), n.d(t, "e", (function() {
        return H
    }));
    const f = 100;
    let b, h, g = 0,
        m = null,
        v = null;
    const O = [],
        y = {},
        _ = [],
        C = [],
        S = [],
        j = e => v = e;

    function w(e, t) {
        return e.splice(0, Math.min(e.length, t))
    }

    function E(e = !1) {
        if (!Object(u.a)(v)) return;
        if (g >= 5) return;
        const t = w(O, f);
        if (_.length > 0 || t.length > 0) {
            const n = w(C, f),
                r = w(S, f),
                i = w(_, f);
            e ? a.d.createMetricsWithBeacon(b, t, n, r, i) : a.d.createMetrics(b, t, n, r, i).catch((() => {
                var e, o, s, a;
                g++, e = t, o = n, s = r, a = i, Array.prototype.unshift.apply(O, e), Array.prototype.unshift.apply(C, o), Array.prototype.unshift.apply(S, s), Array.prototype.unshift.apply(_, a)
            }))
        }
    }

    function I() {
        clearInterval(m), m = null, E()
    }

    function A(e, t, n, r, i, o = {}, s = "m4_metric") {
        if (Object(u.a)(e)) {
            P(R(e, t, n, r, i, o, s))
        }
    }

    function T() {
        return h
    }

    function R(e, t, n, r, i, s = {}, a = "m4_metric") {
        if (!Object(u.a)(e)) return {};
        const c = e && e.id ? e.id : null,
            d = l(l({}, s), {}, {
                version: void 0
            });
        return {
            id: o.a.generateUUID(),
            name: a,
            created_at: Math.round(Date.now() / 1e3),
            metadata: Object.assign({
                user_id: c,
                action: t,
                object: n,
                place: r,
                context: i
            }, d)
        }
    }

    function P(e) {
        i()(e) || O.push(e)
    }

    function M(e) {
        Object(c.c)() && C.push({
            level: "info",
            text: e
        })
    }

    function D(e) {
        Object(c.c)() && C.length < 30 && C.push({
            level: "error",
            text: e
        })
    }

    function k(e, t) {
        L({
            name: e,
            type: "inc"
        }, t)
    }

    function N(e, t, n) {
        L({
            name: e,
            type: "count",
            value: t
        }, n)
    }

    function U(e, t, n) {
        L({
            name: e,
            type: "timing",
            value: t
        }, n)
    }

    function L(e, t) {
        S.length > 50 || (t && (e.tags = t), S.push(e))
    }

    function x(e, t) {
        y[e] = {
            start: t
        }
    }

    function B(e) {
        y.hasOwnProperty(e) && y[e].hasOwnProperty("start") && (F(e, {
            duration: Date.now() - y[e].start
        }), delete y[e])
    }

    function $(e, t = {}) {
        return {
            id: o.a.generateUUID(),
            name: e,
            createdAt: Date.now(),
            screenWidth: screen.width,
            screenHeight: screen.height,
            additionalMetaData: t,
            sessionId: b && b.sessionId
        }
    }

    function F(e, t, n = !1) {
        const r = ((e = !1) => e ? 1 : 20)(Object(s.a)() || Object(c.c)());
        if (void 0 === h && (h = ((e = 20) => 1 === e || Math.random() < 1 / e)(r)), h || n) {
            V($(e, l({
                sample_rate: n ? 1 : r
            }, t)))
        }
    }

    function V(e) {
        _.length < 30 && _.push(e)
    }

    function H(e, t, n, r, i, o) {
        A(v, e, t, n, r, i, o)
    }
    t.j = {
        metrics: O,
        hcMetrics: _,
        logs: C,
        opMetrics: S,
        pushMetric: P,
        startMetricsPolling: function(e, t) {
            return b = e, null === m && (m = setInterval((() => E()), 3e4)), t.addEventListener("beforeunload", (() => E(!0))), I
        },
        buildAndAddMetric: A,
        buildAndAddHcMetric: F,
        buildMetric: R,
        buildHcMetric: $,
        addHcMetric: V,
        addInfoLog: M,
        addErrorLog: D,
        addIncrementOpMetric: k,
        addCountOpMetric: N,
        addTimingOpMetric: U,
        clearMetricsState: function() {
            O.splice(0), C.splice(0), S.splice(0), _.splice(0), _.splice(0);
            for (const e in y) delete y[e];
            g = 0
        },
        getShouldSample: T,
        startTimingMetric: x,
        endTimingMetric: B
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "g", (function() {
        return w
    })), n.d(t, "e", (function() {
        return R
    })), n.d(t, "a", (function() {
        return U
    })), n.d(t, "b", (function() {
        return J
    })), n.d(t, "c", (function() {
        return K
    })), n.d(t, "f", (function() {
        return Ie
    }));
    var r = n(103),
        i = n.n(r),
        o = n(76),
        s = n.n(o),
        a = n(10),
        c = n.n(a),
        u = n(224),
        d = n(4),
        l = n(178),
        p = n(30),
        f = n(132),
        b = n(31),
        h = n(8),
        g = n(172),
        m = n(105);
    const v = ["custom_bot", "composer_suggestions", "predictive_answers_suggestions"];

    function O(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function y(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? O(Object(n), !0).forEach((function(t) {
                _(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function C(e, t) {
        if (null == e) return {};
        var n, r, i = function(e, t) {
            if (null == e) return {};
            var n, r, i = {},
                o = Object.keys(e);
            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
    }
    const {
        assign: S
    } = Object, j = Object(u.b)();

    function w(e) {
        const t = `${j.api_base}/messenger/web/help_center_content`;
        return d.b.post({
            url: t,
            session: e
        }).then((({
            collections: e,
            article_suggestions: t
        }) => ({
            articleSuggestions: t,
            articleCollections: e.map(x)
        })))
    }

    function E(e, t, n, r, i, o = null, s = !1, a = null, c = null, u = !1) {
        const d = {
            created_at: t,
            self_serve_suggestions_match: s
        };
        r && (d.client_assigned_uuid = r), i && (d.email = i), o && (d.composer_suggestions = JSON.stringify(o.suggestions)), a && (d.bot_intro = a), c && (d.resolution_bot_behavior_version_id = c), u && (d.search_browse = !0);
        const l = e[0];
        if ("paragraph" === l.type) e = e.map((e => ({
            type: e.type,
            text: Object(f.b)(e.text)
        }))), d.blocks = JSON.stringify(e);
        else if ("image" === l.type) n && (l.url = n.publicUrl), d.blocks = JSON.stringify(e);
        else if ("attachmentList" === l.type && n) {
            const t = l.attachments[0];
            t.id = n.id, t.url = n.publicUrl, t.contentType = n.contentType, d.blocks = JSON.stringify(e)
        }
        return d
    }

    function I(e, t, n, r) {
        return {
            metrics: JSON.stringify(e),
            logs: JSON.stringify(t),
            op_metrics: JSON.stringify(n),
            hc_metrics: JSON.stringify(r)
        }
    }

    function A(e) {
        return e ? {
            banner_view_id: e
        } : {}
    }

    function T(e) {
        return e ? {
            progress_id: e
        } : {}
    }

    function R(e, t, n) {
        const r = `${j.api_base}/messenger/web/self_serve_suggestions`,
            i = {
                query: t,
                answers_limit: n
            };
        return d.b.post({
            url: r,
            session: e,
            params: i
        })
    }

    function P(e) {
        return {
            conversations: e.conversations.map(U),
            pages: D(e.pages)
        }
    }

    function M(e) {
        return {
            unreadConversationIds: (e.unread_conversation_ids || []).map((e => e.toString())),
            unreadDismissedConversationIds: (e.unread_dismissed_conversation_ids || []).map((e => e.toString()))
        }
    }

    function D(e) {
        return {
            page: e.page,
            perPage: e.per_page,
            totalPages: e.total_pages
        }
    }

    function k(e) {
        if (e.conversation_message.team_author) {
            return 0 === (e.conversation_parts ? e.conversation_parts.conversation_parts || e.conversation_parts : []).filter((e => e.author.is_admin && !e.author.is_bot)).length
        }
        return !1
    }

    function N(e) {
        return k(e) || !e.last_participating_admin ? void 0 : oe(e.last_participating_admin)
    }

    function U(e) {
        return {
            composerState: L(e.composer_state),
            dismissed: e.dismissed,
            id: e.id,
            intercomLinkSolution: e.intercom_link_solution,
            lastPartCreatedAt: Object(p.c)(e.updated_at),
            lastParticipatingAdmin: N(e),
            participants: e.participants || [],
            parts: [V(e), ...Q(e)],
            preventEndUserReplies: e.prevent_end_user_replies,
            inboundConversationsDisabled: e.inbound_conversations_disabled,
            read: e.read,
            readAt: e.read_at ? Object(p.c)(e.read_at) : void 0,
            replyPlaceholder: e.reply_area_placeholder,
            userParticipated: e.user_participated,
            notificationStatus: e.notification_status,
            currentChannel: e.current_channel,
            analyticsMetadata: {
                customBotId: e.analytics_metadata ? e.analytics_metadata.custom_bot_id : void 0
            },
            isInbound: e.is_inbound,
            state: e.state
        }
    }

    function L(e) {
        if (e) return {
            visible: e.visible,
            customBotActive: e.custom_bot_active,
            selfServeSuggestionsEnabled: e.self_serve_suggestions_enabled
        }
    }

    function x(e) {
        return {
            id: e.id,
            name: e.name,
            description: e.description,
            sections: e.sections,
            articleCount: e.article_count
        }
    }

    function B(e) {
        return {
            articles: e.articles.map((e => {
                var t, n, r;
                const o = {
                    id: e.id,
                    url: e.url
                };
                var s, a;
                if (null !== (t = e.highlight) && void 0 !== t && t.title) o.title = null === (s = e.highlight) || void 0 === s || null === (a = s.title) || void 0 === a ? void 0 : a[0];
                else if (null !== (n = e.highlight) && void 0 !== n && n.summary) {
                    var c;
                    o.title = e.title, o.summary = i()(null === (c = e.highlight) || void 0 === c ? void 0 : c.summary) || e.summary
                } else if (null !== (r = e.highlight) && void 0 !== r && r.body) {
                    var u;
                    o.title = e.title, o.summary = i()(null === (u = e.highlight) || void 0 === u ? void 0 : u.body) || e.summary
                } else o.title = e.title;
                return o
            }))
        }
    }

    function $(e) {
        return {
            author: (t = e.author, {
                avatar: {
                    square128: t.avatar
                },
                firstName: t.first_name || t.name,
                name: t.name
            }),
            available_locales: e.available_locales,
            blocks: e.blocks,
            contentId: e.content_id,
            description: e.description,
            id: e.id,
            reactionsReply: me(e.reactions_reply),
            title: e.title,
            updatedAt: e.updated_at,
            url: e.url,
            alexandriaData: e.alexandria_data,
            publicUrl: e.public_url
        };
        var t
    }

    function F(e) {
        return k(e) ? {
            admins: (e.conversation_message.team_author.last_active_admins || []).map(oe),
            name: e.conversation_message.team_author.name
        } : void 0
    }

    function V(e) {
        const t = e.conversation_message;
        return {
            author: H(t.author),
            body: ge(t.blocks || [], t.attachments || []),
            clientId: t.client_assigned_uuid,
            createdAt: Object(p.c)(t.created_at),
            eventData: {},
            form: t.form,
            id: `message-${t.id}`,
            isMessage: !0,
            messageType: pe(t),
            notificationType: (n = t.delivery_option, {
                badge: "badge",
                full: "full",
                summary: "snippet"
            }[n]),
            partType: "message",
            pointerSelector: t.pointer_selector,
            reactionsReply: t.reactions_reply ? me(t.reactions_reply) : void 0,
            replyOptions: t.reply_options || [],
            replyType: t.reply_type,
            seenState: be(t.seen_by_admin),
            sentAt: Object(p.c)(t.sent_at),
            showCreatedAt: t.show_created_at,
            teamAuthor: F(e)
        };
        var n
    }

    function H(e) {
        return {
            admins: e.authors ? e.authors.map(G) : [],
            avatar: ue(e.avatar),
            firstName: q(e.first_name),
            id: e.id,
            initial: e.initial,
            isAdmin: e.is_admin,
            isBot: e.is_bot,
            isSelf: e.is_self,
            type: e.type.toLowerCase()
        }
    }

    function G(e) {
        return {
            avatar: ue(e.avatar),
            firstName: q(e.first_name)
        }
    }

    function q(e) {
        return e || ""
    }

    function z(e = []) {
        return e.map(W)
    }

    function W(e) {
        const t = e.from ? oe(e.from) : null;
        return y(y({}, e), {}, {
            from: t,
            reaction_set: (e.reaction_set || []).map(ve)
        })
    }

    function J(e) {
        if (!e) return;
        const t = e.sender ? oe(e.sender) : null;
        return {
            id: e.id,
            format: e.format,
            sender: t,
            surveyProgressId: e.survey_progress_id,
            steps: e.steps.map(K),
            activeStepId: e.steps[0].id,
            dismissed: !1,
            hidden: !1,
            completed: !1,
            customizationOptions: y({}, Object(m.a)(e.customization_options))
        }
    }

    function K(e) {
        return {
            id: e.id,
            blocks: e.blocks,
            questions: e.questions.map(Y)
        }
    }

    function Y(e) {
        return {
            id: e.id,
            blocks: e.blocks,
            data: Object(m.a)(e.data),
            questionType: e.question_type
        }
    }

    function Q(e) {
        let t = [];
        return e.conversation_parts && (t = e.conversation_parts.conversation_parts || e.conversation_parts), t.filter((e => "lightweight_reply_user_response" !== e.part_type)).map(X)
    }

    function X(e) {
        return {
            author: {
                avatar: ue(e.author.avatar),
                firstName: q(e.author.first_name),
                id: e.author.id,
                initial: e.author.initial,
                isAdmin: e.author.is_admin,
                isBot: e.author.is_bot,
                isSelf: e.author.is_self,
                type: e.author.is_admin ? "admin" : "user"
            },
            body: ge(e.blocks || [], e.attachments || []),
            clientId: e.client_assigned_uuid,
            conversationRating: Oe(e),
            createdAt: Object(p.c)(e.created_at),
            eventData: le(e.event_data, e.part_type),
            form: e.form,
            id: e.id,
            isMessage: !1,
            messageType: pe(e),
            partType: e.part_type,
            replyOptions: e.reply_options || [],
            seenState: be(e.seen_by_admin),
            showCreatedAt: !0
        }
    }

    function Z(e) {
        return {
            slotType: e.slot_type,
            messengerCardId: e.messenger_card_id
        }
    }

    function ee(e) {
        return e ? (Object(h.e)("Tour received", e), {
            id: e.id.toString(),
            activeStepId: e.active_step_id.toString(),
            author: e.author ? H(e.author) : null,
            steps: (t = e.steps, s()(t, ["order"], ["asc"])).map((e => {
                return {
                    id: (t = e).id.toString(),
                    blocks: t.blocks,
                    order: t.order,
                    progressionBehavior: ne(t.progression_behavior),
                    placement: t.placement,
                    pointerSize: t.pointer_size,
                    selector: t.selector,
                    selectors: t.selectors,
                    url: t.url,
                    buttonText: t.button_text
                };
                var t
            })),
            title: e.title,
            url: e.url,
            restartable: e.restartable,
            snoozeable: e.snoozeable,
            endTourAnimation: e.end_tour_animation,
            progressStartUrl: e.start_url,
            progressId: e.progress_id,
            buttonColor: e.button_color,
            snoozeButtonText: e.snooze_button_text,
            restartButtonText: e.restart_button_text
        }) : {};
        var t
    }
    const te = ["manual", "click", "type"];

    function ne(e) {
        return te[e]
    }

    function re(e) {
        const t = e.install_mode;
        if (t) {
            const e = t.active_subscription,
                n = t.user_hash_verified,
                r = t.secure_install_v2,
                i = t.messenger_enabled_for_visitors;
            return {
                activeSubscription: e,
                messengerEnabledForUsers: t.messenger_enabled_for_users,
                messengerEnabledForVisitors: i,
                secureInstallV2: r,
                userHashVerified: n
            }
        }
    }

    function ie(e) {
        const {
            app: t
        } = e, n = function(e) {
            return {
                anonymousInboundMessages: e.inbound_lead_messaging || e.inbound_lead_messaging_docs_site,
                composerSuggestionsAsQuickReplies: e.composer_suggestions_as_quick_replies,
                googleAnalytics: e.google_analytics,
                hubspotInstalled: e.hubspot_installed,
                inboundMessages: e.inbound_messages,
                launcherDiscoveryMode: e.launcher_discovery_mode,
                marketoEnrichmentInstalled: e.marketo_enrichment_installed,
                outboundMessages: e.outbound_messages,
                singlePageAppRateLimiting: e.single_page_app_rate_limiting,
                crossSiteCookies: e.cross_site_cookies,
                renderNativePickerInMobile: e.render_native_picker_in_mobile,
                homeScreenArticleSuggestions: e.home_screen_article_suggestions
            }
        }(e.modules.messages.features);
        return {
            activeAdmins: (t.active_admins || []).map(oe),
            alignment: e.modules.customization.alignment,
            backgroundImage: t.messenger_background,
            boundWebEvents: (r = e.bound_web_events, r ? r.map(ye) : []),
            color: e.modules.messages.colors.base,
            customGoogleAnalyticsTrackerId: e.modules.messages.google_analytics_tracking_id,
            expectedResponseDelayTranslationKey: t.expected_response_delay_translation_key,
            launcherExpectedResponseDelayTranslationKey: t.launcher_expected_response_delay_translation_key,
            features: n,
            helpCenterSiteUrl: t.help_center_site_url || void 0,
            horizontalPadding: e.modules.customization.horizontal_padding,
            inboundConversationsDisabled: t.inbound_conversations_disabled || !1,
            accessToTeammateEnabled: t.access_to_teammate_enabled,
            isAudioEnabled: t.audio_enabled || !1,
            isDeveloperWorkspace: t.developer_workspace || !1,
            isErrorReportingDisabled: e.modules.error_reporting && e.modules.error_reporting.disabled,
            isInstantBootEnabled: !0 === e.modules.messages.instant_boot_enabled,
            isIntercomLinkEnabled: t.show_powered_by,
            temporaryExpectationsMessage: t.temporary_expectations_message,
            isLauncherEnabled: !0 === e.modules.messages.use_activator,
            isOverrideSamplingEnabled: e.modules.metrics && e.modules.metrics.enabled,
            logoUrl: t.messenger_logo_url,
            launcherLogoUrl: t.launcher_logo_url,
            name: t.name,
            officeHoursResponse: t.office_hours_response || void 0,
            originCookieDomain: e.origin_cookie_domain,
            realtimeConfig: {
                endpoints: e.modules.rtm.endpoints
            },
            secondaryColor: e.modules.messages.colors.secondary,
            selfServeSuggestionsMatch: t.self_serve_suggestions_match || !1,
            smsEnabled: t.sms_notifications_enabled || !1,
            teamGreeting: t.team_greeting,
            teamIntro: t.team_intro,
            upfrontEmailCollectionSetting: t.upfront_email_collection_setting,
            useCacheFor: t.use_cache_for,
            userConversationAttachmentsEnabled: t.user_conversation_attachments_enabled,
            userConversationGifsEnabled: t.user_conversation_gifs_enabled,
            verticalPadding: e.modules.customization.vertical_padding
        };
        var r
    }

    function oe(e) {
        return {
            avatar: ue(e.avatar),
            calendarUrl: se(e.calendar_url),
            firstName: q(e.first_name),
            initial: e.initial || e.avatar.initials,
            intro: se(e.intro),
            isActive: e.is_active,
            isAdmin: !0,
            isBot: e.is_bot,
            isSelf: !1,
            jobTitle: se(e.job_title),
            lastActiveAt: Object(p.c)(e.last_active_at),
            location: e.location ? ae(e.location) : void 0,
            socialAccounts: (e.social_accounts || []).map(ce)
        }
    }

    function se(e) {
        if (e && 0 !== e.trim().length) return e
    }

    function ae(e) {
        return {
            cityName: e.city_name,
            countryCode: e.country_code,
            countryName: e.country_name,
            timezoneOffset: e.timezone_offset
        }
    }

    function ce(e) {
        return {
            imageUrl: e.image_url,
            profileUrl: e.profile_url,
            provider: e.provider,
            username: e.username
        }
    }

    function ue(e) {
        let t;
        return e.square_128 ? t = e.square_128 : e.image_urls && e.image_urls.square_128 && (t = e.image_urls.square_128), t ? {
            square128: t
        } : {}
    }

    function de(e) {
        return e
    }

    function le(e, t) {
        return "participant_added" !== t && "participant_removed" !== t || (e.participant.avatar = ue(e.participant.avatar)), e || {}
    }

    function pe(e) {
        const t = ["chat", "post", "note", "video", "pointer"][e.message_style];
        return t || ("attribute_collector" === e.part_type ? "attributeCollector" : fe(e, "link") || function(e, t) {
            let n = !0;
            return e.blocks.forEach((e => {
                e.type !== t && (n = !1)
            })), n && e.blocks.length > 1
        }(e, "link") ? "link" : fe(e, "notificationChannelsCard") ? "notificationChannels" : fe(e, "conversationRating") ? "conversationRating" : void 0)
    }

    function fe(e, t) {
        const n = e.blocks && 1 === e.blocks.length && e.blocks[0];
        return n && n.type === t
    }

    function be(e) {
        return {
            unseen: "not-seen-yet",
            seen: "seen"
        }[e] || "not-seen-yet"
    }

    function he(e) {
        return {
            contact_role: "lead",
            user_role: "user",
            visitor_role: "visitor"
        }[e]
    }

    function ge(e, t) {
        if (function(e) {
                return 1 === e.length && "videoReply" === e[0].type
            }(e)) return e;
        if (function(e) {
                return 1 === e.length && "videoFile" === e[0].type
            }(e)) return function(e) {
            return [Object.assign({}, e[0])]
        }(e);
        const n = [];
        return function(e, t) {
            if (0 === e.length) return t;
            const n = [];
            return e.map((e => {
                e.attachments.map((e => n.push(e.url)))
            })), t.filter((e => n.indexOf(e.url) < 0))
        }(e.filter((e => "attachmentList" === e.type)), t).forEach((e => {
            ! function(e) {
                return e.content_type.indexOf("image") >= 0
            }(e) ? n.push(function(e) {
                return {
                    type: "attachmentList",
                    attachments: [{
                        contentType: e.content_type,
                        name: e.name,
                        size: e.size,
                        url: e.url
                    }]
                }
            }(e)): n.push(function(e) {
                return {
                    height: parseInt(e.height, 10),
                    type: "image",
                    url: e.url,
                    width: parseInt(e.width, 10)
                }
            }(e))
        })), e.concat(n)
    }

    function me(e) {
        return {
            reactionIndex: e.reaction_index,
            reactionSet: (e.reaction_set || []).map(ve)
        }
    }

    function ve(e) {
        return {
            emoji: e.unicode_emoticon,
            index: e.index
        }
    }

    function Oe(e) {
        if ("conversationRating" !== pe(e)) return {};
        const {
            remark: t
        } = e.blocks[0];
        return {
            chosenRating: e.blocks[0].rating_index,
            remark: t
        }
    }

    function ye(e) {
        return {
            id: e.id,
            description: e.description,
            name: e.name,
            selector: e.selector,
            sourceUrl: e.source_url,
            trigger: e.trigger,
            urlRegex: e.url_regex
        }
    }

    function _e(e) {
        return {
            cards: e.cards,
            cardsSuccess: e.cards_success,
            conversations: e.conversations.map(U),
            hasMoreConversations: e.has_more_conversations,
            openInboundConversationIds: e.open_inbound_conversation_ids
        }
    }

    function Ce(e) {
        return e ? e.map((e => y(y({}, e), {}, {
            serialized_object: Se(e.ruleset_link_object_type, e.serialized_object)
        }))) : []
    }

    function Se(e, t) {
        switch (e) {
            case "inbound_trigger":
            case "inbound_custom_bot":
                return je(t);
            case "messenger_trigger":
            case "button_custom_bot":
                return {
                    id: (n = t).id,
                    event: n.event,
                    preAction: n.messenger_pre_action,
                    selector: n.selector
                };
            default:
                return t
        }
        var n
    }

    function je(e) {
        return e ? {
            composerDisabled: e.composer_disabled,
            prompt: e.prompt,
            rulesetId: e.ruleset_id,
            suggestions: e.suggestions.map((e => function(e) {
                return {
                    preAction: e.pre_action,
                    text: e.text,
                    uuid: e.uuid
                }
            }(e))),
            updatedAt: e.updated_at,
            priority: e.priority
        } : null
    }

    function we(e) {
        return e ? {
            id: e.id,
            parts: e.parts,
            operator: H(e.operator)
        } : null
    }

    function Ee(e) {
        const t = Object(g.b)(window);
        t && (e.sdk_webview_platform = t)
    }

    function Ie() {
        return `${j.api_base}/messenger/web/conversations/transcript`
    }
    t.d = {
        addConversationRatingRemark: function(e, t, n) {
            const r = `${j.api_base}/messenger/web/conversations/${t}/remark`,
                i = {
                    remark: n
                };
            return d.b.post({
                url: r,
                session: e,
                params: i
            }).then((() => {}))
        },
        buildBanner: W,
        buildComment: X,
        buildComposerSuggestions: je,
        buildBotIntro: we,
        buildTour: ee,
        changeConversationRatingIndex: function(e, t, n) {
            const r = `${j.api_base}/messenger/web/conversations/${t}/rate`,
                i = {
                    rating_index: n
                };
            return d.b.post({
                url: r,
                session: e,
                params: i
            }).then((() => {}))
        },
        collectEmailFromBanner: function(e, t, n, r) {
            const i = `${j.api_base}/messenger/web/banners/${t}/collect_email`,
                o = Object.assign({
                    email: r
                }, A(n));
            return d.b.post({
                url: i,
                session: e,
                params: o
            })
        },
        completeTour: function(e, t, n) {
            const r = `${j.api_base}/messenger/web/tours/${t}/complete`,
                i = T(n);
            return d.b.post({
                url: r,
                session: e,
                params: i
            })
        },
        createArticleReaction: function(e, t, n, r = !1, i = null, o = "help_center", s = null) {
            const a = `${j.api_base}/messenger/web/articles/${t}/react`,
                c = {
                    reaction_index: n,
                    allow_auto_responses: r,
                    article_content_id: i,
                    article_channel: o,
                    article_source: s
                };
            return d.b.post({
                url: a,
                session: e,
                params: c
            }).then((() => {}))
        },
        createComment: function(e, t, n, r, i, o, s) {
            const a = `${j.api_base}/messenger/web/conversations/${t}/reply`,
                c = E(r, i, o, n, s);
            return d.b.post({
                url: a,
                session: e,
                params: c
            }).then((e => Object.assign({}, X(e), {
                clientId: n
            })))
        },
        createConversation: function(e, {
            blocks: t,
            createdAt: n,
            upload: r,
            email: i,
            composerSuggestions: o,
            selfServeSuggestionsMatch: s,
            resolutionBotBehaviorVersionId: a,
            botIntro: c,
            currentUrl: u,
            startedFromSearchBrowse: l = !1
        }) {
            const p = {
                url: `${j.api_base}/messenger/web/messages`,
                session: e,
                params: E(t, n, r, null, i, o, s, c, a, l)
            };
            return u && (p.currentUrl = u), d.b.post(p).then(U)
        },
        createEvent: function(e, t, n) {
            const r = `${j.api_base}/messenger/web/events`,
                i = {
                    event_name: t,
                    metadata: n
                },
                o = {
                    event_list: JSON.stringify({
                        data: [i]
                    })
                };
            return d.b.post({
                url: r,
                session: e,
                params: o
            }).then((e => {
                if (!c()(e)) return function(e) {
                    const {
                        banner: t,
                        custom_bot: n,
                        client_matches: r,
                        tour: i
                    } = e[0];
                    return {
                        banner: t ? W(t) : t,
                        customBot: n ? U(n) : n,
                        clientsideRulesetConditions: Ce(r || []),
                        tour: i ? ee(i) : i
                    }
                }(e)
            }))
        },
        createMetrics: function(e, t, n = [], r = [], i = []) {
            const o = `${j.api_base}/messenger/web/metrics`,
                s = I(t, n, r, i);
            return d.b.post({
                url: o,
                session: e,
                params: s,
                shouldSetUserData: !1
            })
        },
        createMetricsWithBeacon: function(e, t, n = [], r = [], i = []) {
            const o = I(t, n, r, i);
            return d.b.sendBeacon({
                url: `${j.api_base}/messenger/web/metrics`,
                session: e,
                params: o,
                shouldSetUserData: !1
            })
        },
        createOrUpdateUser: function(e, t = {}, n, r, i, o, s = !1) {
            t = S({}, t), void 0 !== n && (t.anonymous_email = n);
            const a = {
                source: i,
                sampling: s
            };
            void 0 !== r && (a._intercomEncryptedPayload = r);
            const c = `${j.api_base}/messenger/web/ping`;
            return d.b.post({
                url: c,
                session: e,
                params: a,
                customAttributes: t,
                internal: o
            }).then((e => {
                const {
                    errors: t
                } = e;
                return t ? {
                    errors: t
                } : function(e) {
                    var t, n, r;
                    const {
                        user: i
                    } = e;
                    e.active_tour && Object(h.e)("Tour attempting to resume from ping", e.active_tour);
                    return {
                        id: i.id,
                        activeCompanyId: i.active_company_id || "-1",
                        activeTour: ee(e.active_tour),
                        anonymousId: i.anonymous_id,
                        anonymousSession: e.anonymous_session,
                        app: ie(e),
                        articleConversationId: JSON.stringify(e.article_conversation_id),
                        banners: z(e.banners),
                        cdasBreachingLimit: e.cdas_breaching_limit || [],
                        clientsideMessageConditions: e.client_messages,
                        clientsideRulesetConditions: Ce(e.client_matches),
                        botIntro: we(e.bot_intro),
                        requiresCookieConsent: i.requires_cookie_consent,
                        resolutionBotBehaviorVersionId: e.resolution_bot_behavior_version_id,
                        countryCode: i.country_code,
                        hasConversations: !1 !== i.has_conversations,
                        homeScreenSlots: (null === (t = i.home_screen_slots) || void 0 === t ? void 0 : t.map(Z)) || [],
                        identityVerificationReady: e.identity_verification_ready,
                        identityVerified: e.identity_verified,
                        installModeConfig: re(e),
                        lastContactedAt: i.last_contacted_at,
                        locale: i.locale,
                        newConversationComposerState: L(e.composer_state),
                        notificationLinkConversationId: e.notification_link_conversation_id,
                        phoneNumber: i.phone_number,
                        role: he(i.role),
                        unreadConversationIds: null === (n = e.unread_conversation_ids) || void 0 === n ? void 0 : n.map((e => e.toString())),
                        unreadDismissedConversationIds: null === (r = e.unread_dismissed_conversation_ids) || void 0 === r ? void 0 : r.map((e => e.toString())),
                        userSuppliedEmail: i.anonymous_email,
                        newSession: i.new_session,
                        searchRequiredBeforeConversation: i.help_center_require_search,
                        survey: J(e.survey),
                        preventMultipleInboundConversation: i.prevent_multiple_inbound_conversation,
                        testAssignments: i.user_assignments
                    }
                }(e)
            }))
        },
        sendMessengerOpen: function(e, t) {
            const n = {};
            t && (n.initial_view = t);
            const r = `${j.api_base}/messenger/web/open`;
            return d.b.post({
                url: r,
                session: e,
                params: n
            }).then((e => {
                const {
                    errors: t
                } = e;
                return t ? {
                    errors: t
                } : {
                    composerSuggestions: je(e.composer_suggestions),
                    clientsideRulesetConditions: Ce(e.client_matches),
                    testAssignments: e.user_assignments
                }
            }))
        },
        createReaction: function(e, t, n) {
            const r = `${j.api_base}/messenger/web/conversations/${t}/react`,
                i = {
                    reaction_index: n
                };
            return d.b.post({
                url: r,
                session: e,
                params: i
            }).then((() => {}))
        },
        createUpload: function(e, t, n) {
            return new Promise(((r, i) => {
                const o = new FormData;
                o.append("key", e.key), o.append("acl", e.acl), o.append("Content-Type", e.content_type), o.append("AWSAccessKeyId", e.aws_access_key), o.append("policy", e.policy), o.append("signature", e.signature), o.append("success_action_status", e.success_action_status), o.append("file", t);
                const s = new XMLHttpRequest;
                s.upload.addEventListener("progress", (function(e) {
                    const {
                        lengthComputable: t,
                        loaded: r,
                        total: i
                    } = e;
                    if (!n || !t) return;
                    const o = parseInt(r / i * 100);
                    n(o)
                }), !1), s.addEventListener("error", (function() {
                    i()
                }), !1), s.addEventListener("abort", (function() {
                    i()
                }), !1), s.addEventListener("load", (function(t) {
                    201 === t.target.status ? r({
                        id: e.id,
                        publicUrl: e.public_url,
                        contentType: e.content_type
                    }) : i()
                }), !1), s.open("POST", e.upload_destination, !0), s.send(o)
            }))
        },
        createUploadPolicy: function(e, t, n, r) {
            const i = `${j.api_base}/messenger/web/uploads`,
                o = {
                    upload: JSON.stringify({
                        original_filename: Object(l.a)(t.name),
                        size_in_bytes: t.size,
                        content_type: t.type,
                        width: n,
                        height: r
                    })
                };
            return d.b.post({
                url: i,
                session: e,
                params: o
            }).then(de)
        },
        disableInstallMode: function(e) {
            const t = `${j.api_base}/messenger/web/install`;
            return d.b.post({
                url: t,
                session: e
            })
        },
        dismissBanner: function(e, t, n) {
            const r = `${j.api_base}/messenger/web/banners/${t}/dismiss`,
                i = A(n);
            return d.b.post({
                url: r,
                session: e,
                params: i
            })
        },
        dismissNotifications: function(e, t) {
            const n = `${j.api_base}/messenger/web/conversations/dismiss`,
                r = {
                    conversation_ids: t
                };
            return d.b.post({
                url: n,
                session: e,
                params: r
            }).then((() => {}))
        },
        fetchBannerView: function(e, t) {
            const n = `${j.api_base}/messenger/web/banners/${t}/fetch`;
            return d.b.post({
                url: n,
                session: e
            }).then((e => W(e.banner)))
        },
        fetchMessengerSheetData: function(e, t, n, r) {
            const i = `${j.api_base}/messenger/web/sheets/open`,
                o = {
                    action_id: n,
                    uri: t,
                    values: JSON.stringify(r)
                };
            return d.b.post({
                url: i,
                session: e,
                params: o
            })
        },
        fetchMessengerSheetDataWithToken: function(e, t, n) {
            const r = `${j.api_base}/messenger/web/messenger_card_view/open_sheet`,
                i = {
                    action_id: t,
                    token: e,
                    values: JSON.stringify(n)
                };
            return d.b.post({
                url: r,
                params: i
            })
        },
        fetchSurvey: function({
            session: e,
            rulesetId: t,
            token: n
        } = {}) {
            return e || n ? e ? (Object(b.f)("Attempting to fetch survey with session data."), d.b.post({
                url: `${j.api_base}/messenger/web/surveys/${t}/fetch`,
                session: e
            }).then((e => J(e.survey)))) : void 0 : (Object(b.f)("A session or a token must be supplied when fetching a survey"), Promise.reject("missing_session_and_token"))
        },
        fetchTour: function({
            session: e,
            tourId: t,
            token: n
        } = {}) {
            if (!e && !n) return Object(h.e)("A session or a token must be supplied when fetching a tour"), Promise.reject("missing_session_and_token");
            if (e) return Object(h.e)("Attempting to fetch tour with session data."), d.b.post({
                url: `${j.api_base}/messenger/web/tours/${t}/fetch`,
                session: e
            }).then(ee); {
                Object(h.e)("Attempting to fetch tour for messenger card in fallback state.");
                const e = {
                    token: n
                };
                return d.b.post({
                    url: `${j.api_base}/messenger/web/tours/${t}/fetch_with_token`,
                    params: e
                }).then(ee)
            }
        },
        fireComposerSuggestion: function(e, {
            conversationId: t,
            suggestion: n,
            clientId: r,
            botIntro: i,
            resolutionBotBehaviorVersionId: o,
            articleUrl: s = null
        }) {
            const a = t ? `${j.api_base}/messenger/web/conversations/${t}/reply` : `${j.api_base}/messenger/web/messages`,
                c = {
                    composer_suggestion: JSON.stringify(n),
                    client_assigned_uuid: r
                };
            return t && (c.conversation_id = t), i && (c.bot_intro = i), o && (c.resolution_bot_behavior_version_id = o), s && (c.search_browse = !0), d.b.post({
                url: a,
                session: e,
                params: c,
                currentUrl: s
            }).then(t ? X : U)
        },
        fireTrigger: function(e, {
            triggerId: t,
            clientAssignedUUID: n
        }) {
            const r = `${j.api_base}/messenger/web/triggers/${t}/fire`,
                i = {
                    client_assigned_uuid: n
                };
            return d.b.post({
                url: r,
                session: e,
                params: i
            })
        },
        getArticle: function(e, t, n, r = !1) {
            const i = `${j.api_base}/messenger/web/articles/${t}`,
                o = function(e, t) {
                    return {
                        conversation_id: e,
                        browse_mode: t
                    }
                }(n, r);
            return d.b.post({
                url: i,
                session: e,
                params: o
            }).then($)
        },
        getArticleByURL: function(e, t) {
            const n = `${j.api_base}/messenger/web/articles/url`,
                r = {
                    url: t
                };
            return d.b.post({
                url: n,
                session: e,
                params: r
            }).then($)
        },
        getArticleReaction: function(e, t, n, r) {
            const i = `${j.api_base}/messenger/web/articles/get_reaction`,
                o = {
                    article_id: t,
                    article_content_id: n
                };
            d.b.post({
                url: i,
                session: e,
                params: o
            }).then((e => {
                e ? r(null, e) : r()
            })).catch((e => {
                r(e)
            }))
        },
        getCardView: function(e) {
            const t = `${j.api_base}/messenger/web/messenger_card_view/`,
                n = {
                    token: e
                };
            return d.b.post({
                url: t,
                params: n
            })
        },
        getConversation: function(e, t, n) {
            const r = `${j.api_base}/messenger/web/conversations/${t}`,
                i = {
                    self_serve_suggestions_match: n
                };
            return d.b.post({
                url: r,
                session: e,
                params: i
            }).then(U)
        },
        getConversationTranscriptURL: Ie,
        getConversations: function(e, {
            source: t,
            page: n,
            perPage: r,
            selfServeSuggestionsMatch: i
        }) {
            const o = `${j.api_base}/messenger/web/conversations`,
                s = {
                    page: n,
                    per_page: r,
                    source: t,
                    self_serve_suggestions_match: i
                };
            return d.b.post({
                url: o,
                session: e,
                params: s
            }).then(P)
        },
        getHomeScreenCards: function(e, {
            homeScreenSlots: t,
            selfServeSuggestionsMatch: n
        }) {
            const r = `${j.api_base}/messenger/web/home_cards`,
                i = {
                    slot_card_ids: t.map((e => e.messengerCardId)),
                    self_serve_suggestions_match: n
                };
            return d.b.post({
                url: r,
                session: e,
                params: i
            }).then(_e)
        },
        getMessengerCanvasContentWithToken: function(e, t) {
            const n = `${j.api_base}/messenger/web/messenger_card_view/live_content`,
                r = {
                    token: e,
                    canvas_id: t
                };
            return d.b.post({
                url: n,
                params: r
            }).then((e => Object.assign(e, {
                id: t
            })))
        },
        getMessengerCanvasWithContent: function(e, t, n) {
            const r = `${j.api_base}/messenger/web/messenger_cards/content`,
                i = {
                    canvas_id: t,
                    uri: n
                };
            return Ee(i), d.b.post({
                url: r,
                session: e,
                params: i
            }).then((e => Object.assign(e, {
                id: t
            })))
        },
        getUnreadConversations: function(e) {
            const t = `${j.api_base}/messenger/web/conversations/unread`;
            return d.b.post({
                url: t,
                session: e
            }).then(M)
        },
        markConversationAsRead: function(e, t) {
            const n = `${j.api_base}/messenger/web/conversations/${t}/read`;
            return d.b.post({
                url: n,
                session: e
            }).then(U)
        },
        outboundPreview: function(e, t) {
            const n = `${j.api_base}/messenger/web/custom_bots/${t}/outbound_preview`;
            return d.b.post({
                url: n,
                session: e
            })
        },
        progressTour: function(e, t, n, r) {
            const i = Object.assign({
                step_id: n
            }, T(r));
            return d.b.sendBeacon({
                url: `${j.api_base}/messenger/web/tours/${t}/progress`,
                session: e,
                params: i
            })
        },
        quickReply: function(e, t, n, r, i) {
            const o = `${j.api_base}/messenger/web/conversations/${t}/quick_reply`,
                s = function(e, t, n) {
                    return {
                        client_assigned_uuid: n,
                        conversation_part: JSON.stringify({
                            id: e,
                            reply_option: t
                        })
                    }
                }(n, r, i);
            return d.b.post({
                url: o,
                session: e,
                params: s
            }).then(X)
        },
        reactToBanner: function(e, t, n, r) {
            const i = `${j.api_base}/messenger/web/banners/${t}/react`,
                o = Object.assign({
                    reaction: r
                }, A(n));
            return d.b.post({
                url: i,
                session: e,
                params: o
            })
        },
        recordInteractions: function(e, t, n) {
            const r = `${j.api_base}/messenger/web/conversations/${t}/record_interactions`,
                i = {
                    interactions: n
                };
            return d.b.post({
                url: r,
                session: e,
                params: i
            }).then((() => {}))
        },
        recordTourFailure: function(e, t, n, r, i, o) {
            const s = `${j.api_base}/messenger/web/tours/${t}/record_failure`,
                a = {
                    failed_selector: r,
                    failure_url: i,
                    tour_step_id: n
                },
                c = Object.assign(a, T(o));
            return d.b.post({
                url: s,
                session: e,
                params: c
            })
        },
        rulesetConditionSatisfied: function(e, t, n, r, i, o, s, a, c) {
            const u = `${j.api_base}/messenger/web/rulesets/${t}/match`,
                l = {
                    user_id: r,
                    company_id: i,
                    ruleset_link_id: n,
                    predicates: JSON.stringify(o)
                };
            return s && (l.checkpoint_id = s), a && (l.notification_record_id = a), c && (l.extra_context = JSON.stringify(c)), d.b.post({
                url: u,
                session: e,
                params: l
            }).then((e => {
                let {
                    custom_bot: t,
                    composer_suggestions: n,
                    predictive_answers_suggestions: r
                } = e;
                return y(y({}, C(e, v)), {}, {
                    customBot: t,
                    composerSuggestions: je(n),
                    answerbotPredictiveContexts: r
                })
            }))
        },
        searchGifs: function(e, t) {
            const n = `${j.api_base}/messenger/web/gifs`,
                r = {
                    query: t
                };
            return d.b.post({
                url: n,
                session: e,
                params: r
            })
        },
        sendBeaconEvent: function(e, t, n) {
            const r = {
                event_name: t,
                metadata: n
            };
            return d.b.sendBeacon({
                url: `${j.api_base}/messenger/web/events`,
                session: e,
                params: {
                    event_list: JSON.stringify({
                        data: [r]
                    })
                }
            })
        },
        snoozeContentObjectInstance: function(e, t, n, r) {
            const i = `${j.api_base}/messenger/web/snooze`,
                o = {
                    object_type: t,
                    object_id: n,
                    instance_id: r
                };
            return d.b.post({
                url: i,
                session: e,
                params: o
            })
        },
        startConversationFromSuggestion: function(e, {
            suggestionUuid: t,
            clientAssignedUUID: n,
            selfServeSuggestionsMatch: r,
            articleUrl: i = null
        }) {
            const o = `${j.api_base}/messenger/web/custom_bots/trigger_inbound_conversation`,
                s = {
                    id: t,
                    client_assigned_uuid: n,
                    self_serve_suggestions_match: r
                };
            return i && (s.search_browse = !0), d.b.post({
                url: o,
                session: e,
                params: s,
                currentUrl: i
            }).then(U)
        },
        stopTour: function(e, t, n) {
            const r = `${j.api_base}/messenger/web/tours/${t}/stop`,
                i = T(n);
            return d.b.post({
                url: r,
                session: e,
                params: i
            })
        },
        submitSurvey: function(e, t, n, r, i) {
            const o = `${j.api_base}/messenger/web/surveys/${t}/submit`,
                s = {
                    survey_progress_id: n,
                    current_step_id: r,
                    responses: JSON.stringify(i)
                };
            return d.b.post({
                url: o,
                session: e,
                params: s
            })
        },
        dismissSurvey: function(e, t, n) {
            const r = `${j.api_base}/messenger/web/surveys/${t}/dismiss`,
                i = {
                    survey_progress_id: n
                };
            return d.b.post({
                url: r,
                session: e,
                params: i
            })
        },
        resetTour: function(e, t) {
            const n = `${j.api_base}/messenger/web/tours/${t}/reset`;
            return d.b.post({
                url: n,
                session: e
            })
        },
        searchArticles: function(e, t) {
            const n = `${j.api_base}/messenger/web/articles/search`,
                r = {
                    phrase: t
                };
            return d.b.post({
                url: n,
                session: e,
                params: r
            }).then(B)
        },
        submitMessengerCardAction: function(e, t, n, r) {
            const i = `${j.api_base}/messenger/web/messenger_cards`,
                o = {
                    action_id: n,
                    uri: t,
                    values: JSON.stringify(r)
                };
            return Ee(o), d.b.post({
                url: i,
                session: e,
                params: o
            })
        },
        submitMessengerCardActionWithToken: function(e, t, n) {
            const r = `${j.api_base}/messenger/web/messenger_card_view/submit`,
                i = {
                    action_id: t,
                    token: e,
                    values: JSON.stringify(n)
                };
            return d.b.post({
                url: r,
                params: i
            })
        },
        submitSheet: function(e, t, n) {
            const r = `${j.api_base}/messenger/web/sheets/submit`,
                i = {
                    uri: t,
                    sheet_values: JSON.stringify(n)
                };
            return d.b.post({
                url: r,
                session: e,
                params: i
            })
        },
        submitSheetWithToken: function(e, t) {
            const n = `${j.api_base}/messenger/web/messenger_card_view/submit_sheet`,
                r = {
                    token: e,
                    sheet_values: JSON.stringify(t)
                };
            return d.b.post({
                url: n,
                params: r
            })
        },
        triggerTransitions: function(e, t, n) {
            const r = `${j.api_base}/messenger/web/operator/trigger`,
                i = function(e, {
                    type: t,
                    payload: {
                        composerHasContent: n,
                        executionTime: r
                    } = {}
                }) {
                    return {
                        type: t,
                        payload: JSON.stringify({
                            composer_has_content: n,
                            execution_time: r
                        }),
                        meta: JSON.stringify({
                            conversation_id: e
                        })
                    }
                }(t, n);
            return d.b.post({
                url: r,
                session: e,
                params: i
            }).then(U)
        },
        updateConversationForm: function(e, t, n, r, i, o) {
            const s = o ? {
                    identifier: r,
                    value: i,
                    conversation_part_id: n,
                    upfront_email_collection: o
                } : {
                    identifier: r,
                    value: i,
                    conversation_part_id: n
                },
                a = `${j.api_base}/messenger/web/conversations/${t}/form`,
                c = {
                    form_params: JSON.stringify(s)
                };
            return d.b.post({
                url: a,
                session: e,
                params: c
            }).then(U)
        },
        updatePhoneNumber: function(e, t) {
            const n = `${j.api_base}/apps/${e.appId}/notification_channels/phone_number`,
                r = {
                    phone_number: t
                };
            return d.b.post({
                url: n,
                session: e,
                params: r
            })
        },
        visitorAutoMessageConditionSatisfied: function(e, t) {
            const n = `${j.api_base}/messenger/web/messages/${t.id}/match`,
                r = {
                    predicates: JSON.stringify(t.predicates)
                };
            return d.b.post({
                url: n,
                session: e,
                params: r
            }).then((e => {
                if (!c()(e)) return U(e)
            }))
        },
        generateArticleCard: function(e, t) {
            const n = `${j.api_base}/messenger/web/articles/${t}/card`;
            return d.b.post({
                url: n,
                session: e
            })
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(9);
    var i = function(e, t, n, r, i, o) {
        const s = new XMLHttpRequest;
        s.onerror = () => o(), s.onabort = () => o(), s.onload = () => {
            const {
                readyState: e,
                status: t,
                response: n
            } = s;
            4 === e && (t >= 200 && t < 300 ? i(n) : o(n))
        }, s.open(t, e, !0), s.withCredentials = !0, Object.keys(n).forEach((e => {
            s.setRequestHeader(e, n[e])
        })), s.send(r)
    };
    const o = r.a.hasXhr2Support();
    var s = (e, t, n) => new Promise(((r, s) => {
        if (!o) throw new Error("Browser does not support XMLHttpRequest.");
        i(e, "POST", t, n, r, s)
    }));

    function a(e) {
        return Math.floor(4294967296 * (1 + e())).toString(16).substring(1)
    }
    var c = n(99),
        u = n(18);
    n.d(t, "a", (function() {
        return d
    }));

    function d(e, t, n, i, o, s, d, l = !0) {
        var p;
        i = i || (null === (p = Object(u.d)()) || void 0 === p ? void 0 : p.href), s = s || Object(u.e)(), i = Object(c.b)(i), s = Object(c.b)(s), r.a.isNativeMobile() && (i = void 0), o = o || function(e = Math.random) {
            return a(e) + a(e)
        }();
        const {
            appId: f,
            anonymousSession: b,
            sessionId: h,
            hostUserAgent: g,
            activeCompanyId: m
        } = e, v = {
            app_id: f,
            v: 3,
            g: void 0,
            s: h,
            r: s,
            platform: r.a.isMobileBrowser() ? "mobile_web" : "web",
            "Idempotency-Key": o,
            internal: d ? JSON.stringify(d) : "",
            page_title: Object(u.b)(),
            user_active_company_id: m
        };
        l && (v.user_data = function(e, t) {
            const {
                userId: n,
                email: r,
                userHash: i,
                anonymousId: o
            } = e, s = Object.assign({
                email: r,
                user_id: n,
                user_hash: i,
                anonymous_id: o
            }, t);
            return JSON.stringify(s)
        }(e, n));
        const O = Object.assign(v, t);
        return void 0 !== i && (O.referer = i), void 0 !== b && (O.anonymous_session = b), void 0 !== g && (O.host_user_agent = g), O
    }

    function l(e) {
        const t = [];
        return Object.keys(e).forEach((n => {
            const r = e[n];
            n = encodeURIComponent(n), Array.isArray(r) ? r.forEach((e => t.push(`${n}[]=${encodeURIComponent(e)}`))) : t.push(`${n}=${encodeURIComponent(r)}`)
        })), t.join("&")
    }

    function p(e) {
        try {
            return JSON.parse(e)
        } catch (t) {
            return e
        }
    }
    t.b = {
        buildBody: d,
        post: function({
            url: e,
            session: t = {},
            params: n = {},
            customAttributes: r = null,
            currentUrl: i = null,
            idempotencyKey: o = null,
            referrer: a = null,
            internal: c = null,
            shouldSetUserData: u = !0
        }) {
            if (!t) return Promise.reject("http_post_session_empty");
            const f = d(t, n, r, i, o, a, c, u);
            return s(e, {
                "Content-Type": "application/x-www-form-urlencoded"
            }, l(f)).then(p)
        },
        sendBeacon: function({
            url: e,
            session: t = {},
            params: n = {},
            customAttributes: r = null,
            currentUrl: i = null,
            idempotencyKey: o = null,
            referrer: a = null,
            internal: c = null,
            shouldSetUserData: u = !0
        }) {
            var f, b, h;
            if (!t) return Promise.reject("http_post_session_empty");
            const g = d(t, n, r, i, o, a, c, u);
            if (null !== (f = window) && void 0 !== f && null !== (b = f.parent) && void 0 !== b && null !== (h = b.navigator) && void 0 !== h && h.sendBeacon) {
                const t = {
                    type: "application/x-www-form-urlencoded"
                };
                return window.parent.navigator.sendBeacon(e, new Blob([l(g)], t)) ? Promise.resolve() : Promise.reject()
            }
            return s(e, {
                "Content-Type": "application/x-www-form-urlencoded"
            }, l(g)).then(p)
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    }));
    const r = () => window.INTERCOM_PRIVILEGE_SEPARATION
}, function(e, t, n) {
    "use strict";
    n.d(t, "l", (function() {
        return O
    })), n.d(t, "o", (function() {
        return y
    })), n.d(t, "m", (function() {
        return _
    })), n.d(t, "c", (function() {
        return C
    })), n.d(t, "t", (function() {
        return S
    })), n.d(t, "k", (function() {
        return j
    })), n.d(t, "j", (function() {
        return w
    })), n.d(t, "h", (function() {
        return E
    })), n.d(t, "i", (function() {
        return I
    })), n.d(t, "g", (function() {
        return A
    })), n.d(t, "e", (function() {
        return T
    })), n.d(t, "f", (function() {
        return R
    })), n.d(t, "d", (function() {
        return P
    })), n.d(t, "q", (function() {
        return M
    })), n.d(t, "a", (function() {
        return N
    })), n.d(t, "u", (function() {
        return U
    })), n.d(t, "b", (function() {
        return L
    })), n.d(t, "s", (function() {
        return x
    })), n.d(t, "n", (function() {
        return B
    })), n.d(t, "r", (function() {
        return F
    })), n.d(t, "p", (function() {
        return V
    }));
    var r = n(9),
        i = n(33),
        o = n(7),
        s = n(23),
        a = n(3),
        c = n(4),
        u = n(229),
        d = n(2),
        l = n(21),
        p = n(30),
        f = n(64),
        b = n(179),
        h = n(12),
        g = n(232),
        m = n(52),
        v = n(0);

    function O(e, t, n = !1, r = null) {
        return (i, s) => {
            i(function(e, t = !1) {
                return {
                    type: v.yb,
                    conversationId: e,
                    isUpdating: t
                }
            }(t, n));
            const {
                session: a,
                operator: c,
                app: u
            } = s();
            return e.getConversation(a, t, u.selfServeSuggestionsMatch).then((t => {
                if (i(function(e) {
                        return (t, n) => {
                            const r = n(),
                                {
                                    newConversation: i
                                } = r,
                                s = Object(h.f)(r);
                            try {
                                Object(o.e)(e).clientId === Object(o.e)(i).clientId && "conversation" !== s && (t(I(e, null, null, Date.now(), "custom_bot")), t(Object(m.a)(e.id, !0)))
                            } catch (e) {}
                        }
                    }(t)), i(y(e, t, !1, Date.now())), c) {
                    const {
                        lastComposerEvent: e,
                        userCreatedConversationAt: n,
                        lastTriggerTransitionTimestamp: r
                    } = c;
                    Object(l.j)(t, r), Object(l.i)(t, n, e)
                }
                r && Object(f.a)() && Object(d.g)("newCommentEvent", {
                    duration_ms: Object(p.a)(r)
                })
            })).catch((e => i(function(e, t) {
                return {
                    type: v.xb,
                    conversationId: e,
                    error: t
                }
            }(t, e))))
        }
    }

    function y(e, t, n, r) {
        return s => {
            Object(o.s)(t).forEach((t => s(Object(i.a)(e, t, !1)))), s(function(e, t = !1, n) {
                return {
                    type: v.zb,
                    conversation: e,
                    skipNotification: t,
                    createdAt: n
                }
            }(t, n, r))
        }
    }

    function _(e, t) {
        return (n, r) => {
            n(function(e) {
                return {
                    type: v.Kb,
                    conversationId: e
                }
            }(t));
            const {
                session: i
            } = r();
            return e.markConversationAsRead(i, t).then((() => n(function(e) {
                return {
                    type: v.Lb,
                    conversationId: e
                }
            }(t)))).catch((e => n(function(e, t) {
                return {
                    type: v.Jb,
                    conversationId: e,
                    error: t
                }
            }(t, e))))
        }
    }

    function C(e) {
        return {
            type: v.D,
            conversationId: e
        }
    }

    function S(e) {
        return {
            type: v.Ad,
            conversationId: e
        }
    }

    function j(e, t, n, r) {
        return (i, o) => {
            i(function(e, t, n) {
                return {
                    type: v.T,
                    conversationId: e,
                    reactionIndex: t,
                    isFromConversation: !!n
                }
            }(t, n, r));
            const {
                session: s
            } = o();
            return e.createReaction(s, t, n).then((() => i(function(e, t) {
                return {
                    type: v.U,
                    conversationId: e,
                    reactionIndex: t
                }
            }(t, n)))).catch((e => i(function(e, t, n) {
                return {
                    type: v.S,
                    conversationId: e,
                    reactionIndex: t,
                    error: n
                }
            }(t, n, e))))
        }
    }

    function w(e, t, n, r = !1, i = !1, o = null, s = null, a = !1, c) {
        return void 0 === t ? function(e, t, n = !1, r, i, o) {
            return (s, a) => {
                const c = a(),
                    {
                        session: u,
                        app: d,
                        user: l,
                        newConversation: p
                    } = c,
                    {
                        body: f,
                        createdAt: b
                    } = t,
                    h = p ? p.botIntroId : null;
                s(E(t, n, o, Date.now())), o && s($());
                let m = null;
                return o || h || (m = Object(g.a)(c)), D(e, u, t, (e => s(k(t, e)))).then((t => {
                    const n = {
                        blocks: f,
                        createdAt: b,
                        upload: t,
                        email: o,
                        composerSuggestions: m,
                        selfServeSuggestionsMatch: d.selfServeSuggestionsMatch,
                        botIntro: h,
                        resolutionBotBehaviorVersionId: l ? l.resolutionBotBehaviorVersionId : null
                    };
                    return p && p.articleUrl && (n.currentUrl = p.articleUrl, n.startedFromSearchBrowse = !0), e.createConversation(u, n)
                })).then((e => {
                    s(I(e, r, i, Date.now()))
                })).catch((e => s(A(e))))
            }
        }(e, n, r, s, a, c) : function(e, t, n, r = !1, i = !1, o, s, a, c) {
            return (u, d) => {
                const {
                    session: l
                } = d(), {
                    body: p,
                    createdAt: f,
                    clientId: b
                } = n;
                return u(T(t, n, r, c)), c && u($()), D(e, l, n, (e => u(k(n, e, t)))).then((n => e.createComment(l, t, b, p, f, n, c))).then((e => {
                    u(R(t, e, i, o, s, a, Date.now()))
                })).catch((e => u(P(t, n, e))))
            }
        }(e, t, n, r, i, o, s, a, c)
    }

    function E(e, t, n, r = Date.now()) {
        return {
            type: v.K,
            part: e,
            isRetry: t,
            timestamp: r,
            email: n
        }
    }

    function I(e, t, n, r, i) {
        return {
            type: v.L,
            conversation: e,
            officeHoursResponse: t,
            isAnnotatedImage: n,
            createdAt: r,
            conversationTriggerType: i
        }
    }

    function A(e) {
        return {
            type: v.J,
            reason: e
        }
    }

    function T(e, t, n, r) {
        return {
            type: v.H,
            conversationId: e,
            part: t,
            isRetry: n,
            email: r
        }
    }

    function R(e, t, n, r, i, o, s, a = !1) {
        return {
            type: v.I,
            conversationId: e,
            part: t,
            isBorderless: n,
            lastParticipatingAdmin: r,
            officeHoursResponse: i,
            isAnnotatedImage: o,
            createdAt: s,
            fromMessengerSuggestedContent: a
        }
    }

    function P(e, t, n) {
        return {
            type: v.G,
            conversationId: e,
            part: t,
            reason: n
        }
    }

    function M(e, t, n) {
        const {
            id: r
        } = t;
        return i => {
            if (n.selectedReplyOption || n.composerSuggestionItem) {
                let r, o;
                return n.selectedReplyOption ? (r = n.selectedReplyOption.replyOption, o = n.selectedReplyOption.quickReplyPart) : r = n.composerSuggestionItem, i(Object(b.a)(e, t, r, !0, o))
            }
            return i(w(e, r, n, !0))
        }
    }

    function D(e, t, n, r) {
        const {
            file: i,
            body: o
        } = n, {
            width: s,
            height: a
        } = o[0];
        return i ? i.size > 41943040 ? Promise.reject("file_size") : e.createUploadPolicy(t, i, s, a).then((t => e.createUpload(t, i, r))) : Promise.resolve()
    }

    function k(e, t, n) {
        return {
            type: v.wd,
            conversationId: n,
            part: e,
            progress: t
        }
    }

    function N(e, t, n, r, i = new Date) {
        return {
            type: v.f,
            conversationId: e,
            adminId: t,
            firstName: n,
            avatarUrl: r,
            lastActiveAt: i
        }
    }

    function U(e) {
        return {
            type: v.Ed,
            conversationId: e
        }
    }

    function L(e, t, n = new Date) {
        return {
            type: v.B,
            conversationId: e,
            composerContent: t,
            lastActiveAt: n
        }
    }

    function x(e, t, n, r, i, o, s, a, c) {
        return (d, l) => {
            const {
                session: p,
                user: f
            } = l();
            return d(function(e, t, n, r, i, o, s) {
                return {
                    type: v.nd,
                    conversationId: e,
                    partId: t,
                    identifier: n,
                    value: r,
                    identifierType: i,
                    formType: o,
                    isCustomData: s
                }
            }(t, n, r, i, o, s, a)), e.updateConversationForm(p, t, n, r, i, c).then((e => {
                d(function(e, t, n, r) {
                    return {
                        type: v.od,
                        conversation: e,
                        partId: t,
                        identifier: n,
                        createdAt: r
                    }
                }(e, n, r, Date.now())), "email" === r && d(Object(u.d)(f, i))
            })).catch((e => {
                d(function(e, t, n, r) {
                    return {
                        type: v.md,
                        conversationId: e,
                        partId: t,
                        identifier: n,
                        error: r
                    }
                }(t, n, r, e, Date.now()))
            }))
        }
    }

    function B(e) {
        return (t, n) => {
            const {
                session: i
            } = n();
            let o = Object(a.f)();
            Object(r.j)() && (o += `?v=${Math.floor(1e8*Math.random())}`), Object(s.w)(o, Object(c.a)(i, {
                conversation_id: e
            }))
        }
    }

    function $() {
        return {
            type: v.zd
        }
    }

    function F(e) {
        return {
            type: v.Kc,
            composerState: e
        }
    }

    function V(e, t, n) {
        return (r, i) => {
            const {
                session: o
            } = i();
            return e.recordInteractions(o, t, n)
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return y
    })), n.d(t, "d", (function() {
        return _
    })), n.d(t, "a", (function() {
        return C
    })), n.d(t, "j", (function() {
        return S
    })), n.d(t, "i", (function() {
        return j
    })), n.d(t, "l", (function() {
        return w
    })), n.d(t, "q", (function() {
        return E
    })), n.d(t, "p", (function() {
        return I
    })), n.d(t, "g", (function() {
        return A
    })), n.d(t, "m", (function() {
        return T
    })), n.d(t, "r", (function() {
        return R
    })), n.d(t, "e", (function() {
        return P
    })), n.d(t, "f", (function() {
        return M
    })), n.d(t, "k", (function() {
        return D
    })), n.d(t, "c", (function() {
        return k
    })), n.d(t, "s", (function() {
        return U
    })), n.d(t, "h", (function() {
        return L
    })), n.d(t, "t", (function() {
        return x
    })), n.d(t, "o", (function() {
        return B
    })), n.d(t, "n", (function() {
        return $
    }));
    var r = n(76),
        i = n.n(r),
        o = n(10),
        s = n.n(o),
        a = n(77),
        c = n.n(a),
        u = n(130),
        d = n.n(u),
        l = n(102),
        p = n.n(l),
        f = n(161),
        b = n.n(f),
        h = n(245),
        g = n.n(h),
        m = n(19),
        v = n(2);
    const {
        assign: O
    } = Object, y = e => e.parts.filter((e => e.author.isAdmin))[0], _ = e => Object(m.a)(e.parts.filter((e => e.author.isAdmin))), C = e => e.parts.reduce(((e, t) => e + (t.author.isAdmin ? 1 : 0)), 0), S = e => 1 === e.parts.length && "chat" === e.parts[0].messageType, j = e => e.parts.length > 1 && Object(m.a)(e.parts).author.isAdmin, w = e => e.author.isBot && "Operator" === e.author.firstName, E = (e, t) => {
        if (!s()(t)) {
            const n = e => e.clientId || e.id,
                r = t.parts || [],
                o = c()([...e.parts, ...r], n);
            return i()(o, ["createdAt"], ["asc"])
        }
        return e.parts
    }, I = (e, t) => {
        if (!s()(t) && t.composerState) {
            if (t.composerState.version > e.composerState.version) return t.composerState;
            t.composerState.version === e.composerState.version && t.composerState.visible !== e.composerState.visible && Object(v.b)(`Different composerState visibibility with same version number for conversation with id=${e.id}`)
        }
        return e.composerState
    }, A = e => {
        if (e && e.parts && 0 !== e.parts.length) return `${e.id}-${Object(m.a)(e.parts).id}`
    }, T = e => "partial" === e.fetchState, R = e => {
        const t = _(e);
        return 1 === e.parts.length ? P(e) : O({}, t, {
            messageType: M(t)
        })
    }, P = e => {
        const {
            lastParticipatingAdmin: t
        } = e, n = t ? t.lastActiveAt : void 0, r = t ? t.isActive : void 0;
        return O({}, e.parts[0], {
            lastActiveAt: n,
            isActive: r
        })
    }, M = e => e.messageType || "adminReply", D = e => !(!e.identifier.startsWith("custom_data.") && !e.identifier.startsWith("company.custom_data.")), k = (e, t) => {
        const n = e.attributes.find((e => e.identifier === t));
        if (n) return "string" === n.type && Array.isArray(n.options) ? "list" : "email" === n.identifier ? "email" : "phone" === n.identifier ? "phone" : n.type
    }, N = e => {
        const t = b()(e.parts, (e => e.body));
        return p()(t, (e => "messengerCard" === e.type))
    }, U = e => b()(N(e), (e => d()(e, "type"))), L = (e, t) => g()(N(e), {
        uri: t
    }), x = e => e.sort(((e, t) => t.lastPartCreatedAt - e.lastPartCreatedAt)), B = e => (e => e.composerState.visible && !e.inboundConversationsDisabled && !e.preventEndUserReplies)(e) && !(e => "attribute_collector" === e.parts[0].replyType)(e), $ = e => e.parts && Object(m.a)(e.parts) && "pointer" === Object(m.a)(e.parts).messageType
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return l
    })), n.d(t, "c", (function() {
        return p
    })), n.d(t, "d", (function() {
        return findAndValidateInputField
    })), n.d(t, "e", (function() {
        return b
    })), n.d(t, "a", (function() {
        return DelayedNodeVisibilityCheck
    })), n.d(t, "f", (function() {
        return h
    }));
    var r = n(171),
        i = n.n(r),
        o = n(23),
        s = n(22),
        a = n.n(s),
        c = n(13),
        u = n(5),
        d = n(26);

    function l(e) {
        const t = "tour_triggered_from_url",
            n = JSON.parse(c.b.get(t));
        if (n) {
            const r = n.indexOf(e.toString()); - 1 !== r && (n.splice(r, 1), c.b.set(t, JSON.stringify(n)))
        }
    }

    function p(e, t) {
        return t.hostname === e.hostname && t.pathname === e.pathname && t.hash === e.hash
    }
    const f = e => e.replace(/[\u200B-\u200D\uFEFF]/g, "");
    class findAndValidateInputField {
        constructor(e, t) {
            this.elements = void 0, this.callback = void 0, this.destroyed = void 0, this.validateInputs = () => {
                let e = !0;
                this.elements.forEach((t => {
                    "checkbox" !== t.type && "radio" !== t.type && this.elementHasEmptyValue(t) && (e = !1)
                })), this.onChange(e)
            }, this.callback = t, this.destroyed = !1, this.elements = [];
            const n = window.parent.document.querySelector(e);
            if (n) {
                const e = n.tagName.toLowerCase(),
                    t = "input" === e || "textarea" === e || "select" === e || n.isContentEditable;
                this.elements = t ? [n] : Array.from(n.querySelectorAll("input, textarea, select, div[contenteditable]"))
            }
        }
        onChange(e) {
            this.destroyed || this.callback(e)
        }
        destroy() {
            this.destroyed = !0, this.removeListeners()
        }
        elementHasEmptyValue(e) {
            return e instanceof HTMLSelectElement ? !f(e.options[e.selectedIndex].value) : e.isContentEditable ? !f(e.innerText || "") : !f(e.value)
        }
        addListeners() {
            this.elements.forEach((e => {
                "select" === e.tagName.toLowerCase() ? e.addEventListener("change", this.validateInputs) : e.addEventListener("input", this.validateInputs)
            }))
        }
        removeListeners() {
            this.elements.forEach((e => {
                "select" === e.type ? e.removeEventListener("change", this.validateInputs) : e.removeEventListener("input", this.validateInputs)
            }))
        }
        run() {
            if (!this.elements.length) return this.callback(!0);
            this.validateInputs(), this.addListeners()
        }
    }
    const b = a()("tours:debug");
    class DelayedNodeVisibilityCheck {
        constructor(e, t, n, r) {
            this.selector = void 0, this.timeoutValue = void 0, this.callback = void 0, this.timeout = void 0, this.waitTimeout = void 0, this.document = void 0, this.observer = void 0, Object(u.a)() ? Object(d.d)({
                selector: e,
                timeoutValue: t,
                wait: n
            }, r) : (this.selector = e, this.timeoutValue = t, this.document = window.parent.document, this.callback = r, this.observer = new MutationObserver(i()(this._check.bind(this), 200)), this.waitTimeout = setTimeout((() => {
                this._initObserver(), this._startTimer(), this._check()
            }), n || 0))
        }
        _initObserver() {
            this.document.body && this.observer.observe(this.document.body, {
                attributes: !0,
                childList: !0,
                subtree: !0
            })
        }
        _check() {
            const e = this.document.querySelector(this.selector);
            Object(o.u)(e) ? (this.callback(!0), this.cancel()) : this.callback(!1)
        }
        _startTimer() {
            (this.timeoutValue || 0 === this.timeoutValue) && (this.timeout = setTimeout((() => {
                this.callback(!1), this.cancel()
            }), this.timeoutValue))
        }
        cancel() {
            this.observer.disconnect(), this.timeout && clearTimeout(this.timeout), this.waitTimeout && clearTimeout(this.waitTimeout)
        }
    }
    const h = (e, t) => e.length <= t ? e : `${e.slice(0,t)}...`
}, function(e, t, n) {
    "use strict";
    n.d(t, "d", (function() {
        return a
    })), n.d(t, "c", (function() {
        return c
    })), n.d(t, "i", (function() {
        return u
    })), n.d(t, "j", (function() {
        return d
    })), n.d(t, "e", (function() {
        return l
    })), n.d(t, "b", (function() {
        return p
    })), n.d(t, "f", (function() {
        return f
    })), n.d(t, "g", (function() {
        return b
    })), n.d(t, "h", (function() {
        return h
    })), n.d(t, "l", (function() {
        return g
    })), n.d(t, "k", (function() {
        return m
    }));
    var r = n(5);
    const i = /iphone|ipad|ipod|android|blackberry|opera mini|iemobile/i,
        o = [".intercom-lightweight-app-launcher", ".intercom-launcher-frame", "#intercom-container", ".intercom-messenger", ".intercom-notifications"];

    function s(e) {
        try {
            if (!(e in window)) return !1;
            const t = window[e];
            return null !== t && (t.setItem("intercom-test", "0"), t.removeItem("intercom-test"), !0)
        } catch (e) {
            return !1
        }
    }

    function a() {
        return s("localStorage")
    }

    function c() {
        return !!(window.FileReader && window.File && window.FileList && window.FormData)
    }

    function u() {
        const e = p().userAgent;
        return !!e && (null !== e.match(i) && void 0 !== window.parent)
    }

    function d() {
        const e = p().vendor || "",
            t = p().userAgent || "";
        return 0 === e.indexOf("Apple") && /\sSafari\//.test(t)
    }

    function l(e = window) {
        const t = p(),
            n = "Google Inc." === t.vendor && !e.chrome;
        return "" === t.languages && (t.webdriver || n)
    }

    function p() {
        return navigator || {}
    }

    function f(e = p().userAgent) {
        return /iPad|iPhone|iPod/.test(e) && !window.MSStream
    }

    function b() {
        var e;
        return (null === (e = function() {
            if (f()) {
                const e = p().appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                return {
                    major: parseInt(e[1], 10),
                    minor: parseInt(e[2], 10),
                    patch: parseInt(e[3] || 0, 10)
                }
            }
            return null
        }()) || void 0 === e ? void 0 : e.major) >= 15
    }

    function h() {
        const e = p().userAgent,
            t = f(e),
            n = !!e.match(/WebKit/i);
        return t && n && !e.match(/CriOS/i) && b()
    }

    function g() {
        return !Object(r.a)() && o.some((e => {
            const t = window.parent.document.querySelector(e);
            if (t) {
                const e = window.getComputedStyle(t);
                return null === e || "none" === e.display
            }
        }))
    }
    const m = () => "ontouchstart" in window || navigator.maxTouchPoints > 0;
    t.a = {
        hasXhr2Support: function() {
            return "XMLHttpRequest" in window && "withCredentials" in new XMLHttpRequest
        },
        hasLocalStorageSupport: a,
        hasSessionStorageSupport: function() {
            return s("sessionStorage")
        },
        hasFileSupport: c,
        hasAudioSupport: function() {
            const e = document.createElement("audio");
            return !!e.canPlayType && !!e.canPlayType("audio/mpeg;").replace(/^no$/, "")
        },
        hasVisibilitySupport: function() {
            return void 0 !== document.hidden || void 0 !== document.mozHidden || void 0 !== document.msHidden || void 0 !== document.webkitHidden
        },
        messengerIsVisible: function() {
            return !!Object(r.a)() || o.some((e => {
                const t = window.parent.document.querySelector(e);
                if (t) {
                    const e = t.getBoundingClientRect();
                    return e && e.width > 0 && e.height > 0
                }
            }))
        },
        messengerHasDisplayNoneSet: g,
        isMobileBrowser: u,
        isIOSFirefox: function() {
            return !!p().userAgent.match("FxiOS")
        },
        isFirefox: function() {
            return !!p().userAgent.match("Firefox")
        },
        isSafari: d,
        isElectron: function() {
            const e = p().userAgent || "",
                t = (Object(r.a)() ? window : window.parent) || {},
                n = t.process && t.versions && t.versions.electron;
            return /\sElectron\//.test(e) || n
        },
        isIE: function() {
            const e = p().userAgent || "";
            return e.indexOf("MSIE") > 0 || e.indexOf("Trident") > 0
        },
        isEdge: function() {
            return (p().userAgent || "").indexOf("Edge") > 0
        },
        isNativeMobile: function() {
            return p().isNativeMobile
        },
        isChrome: function() {
            const e = window.chrome,
                t = p().vendor,
                n = p().userAgent.indexOf("OPR") > -1,
                r = p().userAgent.indexOf("Edge") > -1;
            return !!p().userAgent.match("CriOS") || null != e && "Google Inc." === t && !1 === n && !1 === r
        },
        isIOS: f,
        isIOS15: b,
        isIOS15Safari: h,
        isAndroid: function(e = p().userAgent) {
            return e && e.toLowerCase().indexOf("android") > -1
        }
    }
}, , function(e, t, n) {
    "use strict";
    var r = n(12),
        i = n(100),
        o = n(46),
        s = n(79),
        a = n(1),
        c = Object(a.createSelector)((e => Object(s.a)(e.conversations.byId)), (e => e.filter((e => !e.read && e.dismissed)))),
        u = n(60),
        d = n(66),
        l = n(3),
        p = n(6),
        f = n(74),
        b = n(52),
        h = n(2);
    const g = "delivered",
        m = "renotifying";
    var v = n(0);
    n.d(t, "e", (function() {
        return y
    })), n.d(t, "l", (function() {
        return _
    })), n.d(t, "a", (function() {
        return S
    })), n.d(t, "j", (function() {
        return j
    })), n.d(t, "k", (function() {
        return w
    })), n.d(t, "i", (function() {
        return E
    })), n.d(t, "h", (function() {
        return T
    })), n.d(t, "f", (function() {
        return P
    })), n.d(t, "g", (function() {
        return M
    })), n.d(t, "c", (function() {
        return k
    })), n.d(t, "d", (function() {
        return x
    })), n.d(t, "m", (function() {
        return B
    }));
    const {
        assign: O
    } = Object;

    function y() {
        return (e, t) => {
            const {
                launcherDiscoveryMode: {
                    isLauncherDiscoveryModeOpening: n
                }
            } = t();
            n ? (e(Object(i.d)()), setTimeout((() => e(_())), 100), setTimeout((() => e(Object(i.a)())), 100)) : e(_())
        }
    }

    function _() {
        return (e, t) => {
            const {
                conversations: n,
                borderless: {
                    conversationId: r
                }
            } = t(), i = n.byId[r];
            r ? (e(M(r)), function(e) {
                return e && -1 !== [g, m].indexOf(e.notificationStatus)
            }(i) && e(Object(p.p)(l.d, r, ["opened"]))) : e(((e, t) => {
                const {
                    app: {
                        isMessengerOpen: n
                    }
                } = t();
                e(n ? S() : e => {
                    e(N()), e(C()), e(Object(f.a)())
                })
            }))
        }
    }

    function C(e = !1) {
        return {
            type: v.Xb,
            hideLightweightAppMessenger: e
        }
    }

    function S(e = !1) {
        return {
            type: v.v,
            fromCloseButton: e
        }
    }

    function j(e = "", t = !1, n = null) {
        return {
            type: v.Vc,
            defaultMessage: e,
            replaceCurrentView: t,
            articleUrl: n
        }
    }

    function w(e = !1) {
        return {
            type: v.Wc,
            skipOpenAnimation: e
        }
    }

    function E() {
        return {
            type: v.Rc
        }
    }

    function I() {
        return {
            type: v.Sc
        }
    }

    function A(e = !1) {
        return {
            type: v.Uc,
            replaceCurrentView: e
        }
    }

    function T() {
        return e => {
            e(A(!0)), e(C())
        }
    }

    function R() {
        return {
            type: v.Tc
        }
    }

    function P(e) {
        return t => {
            t(Object(b.a)(e)), t(C())
        }
    }

    function M(e) {
        return t => {
            t(Object(f.a)()), t(P(e)), t(Object(p.l)(l.d, e))
        }
    }

    function D(e) {
        return t => {
            t(Object(b.a)(e)), t(Object(p.l)(l.d, e))
        }
    }

    function k(e) {
        return t => t(Object(p.l)(l.d, e)).then((() => t(P(e))))
    }

    function N() {
        return (e, t) => {
            const n = t(),
                {
                    app: r,
                    user: i,
                    message: s
                } = n,
                {
                    features: a,
                    inboundConversationsDisabled: l,
                    viewStack: p,
                    isBooting: b
                } = r,
                {
                    hasConversations: h,
                    articleConversationId: g
                } = i,
                m = Object(u.b)(n),
                v = Object(d.l)(n),
                O = Object(o.a)(n),
                y = c(n),
                _ = function(e, t) {
                    return "user" === e.role && t.inboundMessages || "user" !== e.role && t.anonymousInboundMessages
                }(i, a);
            b || (_ ? m > 1 ? (e(R()), U(i, "homescreen")) : s && s.conversationId ? (e(D(s.conversationId)), e(Object(f.a)()), U(i, "conversation-from-auto-message")) : 1 === O.length ? (e(D(O[0].id)), U(i, "conversation-from-notification")) : 1 === y.length ? (e(D(y[0].id)), U(i, "conversation-from-dismissed")) : g ? (e(D(g)), U(i, "conversation-from-article")) : p.length || (v || h ? (e(R()), U(i, "homescreen")) : l ? v ? (e(R()), U(i, "homescreen")) : (e(I()), U(i, "empty-screen")) : (e(j()), U(i, "new-conversation"))) : (e(I()), U(i, "empty-screen")))
        }
    }

    function U(e, t = "homescreen") {
        h.j.buildAndAddMetric(e, t, "initial-screen", "messenger", "from_launcher")
    }

    function L(e, t) {
        const n = t(),
            i = function(e) {
                return O({}, e, {
                    viewStack: e.viewStack.slice(0, -1)
                })
            }(n.app);
        Object(r.h)(n) && "messenger-trigger" === Object(r.e)(i) ? e(R()) : Object(r.h)(n) ? e({
            type: v.Mb
        }) : e(R())
    }

    function x() {
        return L
    }

    function B() {
        return {
            type: v.gd
        }
    }
    t.b = {
        closeMessenger: S,
        getAndOpenConversation: k,
        navigateBack: x,
        onLauncherClick: y,
        openConversation: P,
        openConversationInMessenger: M,
        openConversations: function() {
            return e => {
                e(E()), e(C())
            }
        },
        openMessenger: C,
        openNewConversation: function(e) {
            return (t, n) => {
                n().app.inboundConversationsDisabled || t(j(e)), t(C())
            }
        },
        showAndGetConversation: D,
        showConversation: b.a,
        showConversations: E,
        showEmptyScreen: I,
        showMessengerTriggerScreen: A,
        showInitialScreen: N,
        showNewConversation: j,
        showSearchBrowse: w,
        toggleMessenger: _,
        toggleUpfrontEmailCollectorState: B,
        openMessengerLoadingView: T
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "g", (function() {
        return u
    })), n.d(t, "e", (function() {
        return p
    })), n.d(t, "k", (function() {
        return f
    })), n.d(t, "a", (function() {
        return b
    })), n.d(t, "f", (function() {
        return h
    })), n.d(t, "h", (function() {
        return g
    })), n.d(t, "b", (function() {
        return m
    })), n.d(t, "n", (function() {
        return v
    })), n.d(t, "c", (function() {
        return O
    })), n.d(t, "l", (function() {
        return y
    })), n.d(t, "q", (function() {
        return _
    })), n.d(t, "m", (function() {
        return C
    })), n.d(t, "j", (function() {
        return S
    })), n.d(t, "d", (function() {
        return j
    })), n.d(t, "p", (function() {
        return w
    })), n.d(t, "o", (function() {
        return E
    })), n.d(t, "i", (function() {
        return I
    }));
    var r = n(1),
        i = n(47),
        o = n(7),
        s = n(19),
        a = n(88),
        c = n(133);
    const u = ({
            app: e
        }) => e.features || {},
        d = ({
            viewStack: e
        }) => e,
        l = Object(r.createSelector)(d, (e => !!e && e.length > 1)),
        p = Object(r.createSelector)(d, (e => e && e.length > 0 ? e[e.length - 1] : void 0)),
        f = Object(r.createSelector)(d, (e => !e || 0 === e.length)),
        b = e => e.app.accessToTeammateEnabled,
        h = ({
            app: e
        }) => p(e),
        g = ({
            app: e
        }) => l(e),
        m = Object(r.createSelector)((e => e.app), (e => e.user), (e => e.article), c.a, ((e, t, n, r) => !(n.articleId && !n.inSearchBrowse && n.isStandalone) && (!e.inboundConversationsDisabled && (t.preventMultipleInboundConversation ? !r : "user" === t.role ? e.features.inboundMessages : e.features.anonymousInboundMessages)))),
        v = e => {
            const {
                app: t
            } = e;
            return t.launcherLogoUrl
        },
        O = Object(r.createSelector)([m, e => e.app.helpCenterSiteUrl], ((e, t) => !e && !!t)),
        y = (e, {
            currentView: t
        }) => "home-screen" !== t && "empty-screen" !== t,
        _ = e => {
            if (!e) return !1;
            const {
                officeHoursResponse: t
            } = e.app, n = {
                only_outside_of_office_hours: !!t,
                always: !0,
                never: !1
            }, {
                role: r,
                userSuppliedEmail: a
            } = e.user, {
                upfrontEmailCollectionSetting: c,
                upfrontEmailCollectionSubmitted: u
            } = e.app.upfrontEmailCollection, d = e.session && e.session.email, l = Object(i.b)(e);
            return (!l || !l.isEmailAttributeCollectorInserted) && (!a && (-1 !== ["visitor", "lead"].indexOf(r) && (!d && (!u && (! function(e) {
                return !!e && (Object(o.i)(e) && !Object(s.a)(e.parts).author.isBot)
            }(l) && n[c])))))
        };
    const C = Object(r.createSelector)((e => e.app.isIntercomLinkEnabled), a.c, ((e, t) => e && !t)),
        S = Object(r.createSelector)(a.g, h, ((e, t) => !(!e || "new-conversation" !== t))),
        j = e => e.app.color,
        w = e => e.user.searchRequiredBeforeConversation,
        E = Object(r.createSelector)(w, m, b, ((e, t, n) => e && t && n)),
        I = e => e.app.hideLightweightAppMessenger
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return a
    })), n.d(t, "b", (function() {
        return c
    }));
    var r = n(5),
        i = n(104),
        o = n(9);
    const s = e => ({
            get: t => {
                try {
                    return e.getItem(`intercom.${t}`)
                } catch (e) {}
            },
            set: (t, n) => {
                try {
                    return e.setItem(`intercom.${t}`, n || "")
                } catch (e) {}
            },
            remove: t => {
                try {
                    return e.removeItem(`intercom.${t}`)
                } catch (e) {}
            },
            clear: () => {
                try {
                    e.clear()
                } catch (e) {}
            }
        }),
        a = Object(r.a)() ? Object(i.b)() : o.a.hasLocalStorageSupport() ? s(localStorage) : {
            get: () => {},
            set: () => {},
            remove: () => {},
            clear: () => {}
        },
        c = Object(r.a)() ? Object(i.c)() : o.a.hasSessionStorageSupport() ? s(sessionStorage) : {
            get: () => {},
            set: () => {},
            remove: () => {},
            clear: () => {}
        }
}, function(e, t, n) {
    "use strict";
    let r = 0;
    t.a = (e, t = {}, n) => {
        const i = {
            type: e,
            payload: t
        };
        if (n) {
            i.callbackId = r++;
            const e = t => {
                const {
                    type: r,
                    callbackId: o,
                    payload: s
                } = t.data;
                "intercom:callback" === r && o === i.callbackId && (window.removeEventListener("message", e), n(s))
            };
            window.addEventListener("message", e)
        }
        window.parent.postMessage(i, "*")
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        console && console.warn(e)
    }

    function i(e) {
        console && console.error(e)
    }
    n.d(t, "b", (function() {
        return r
    })), n.d(t, "a", (function() {
        return i
    }))
}, function(e, t, n) {
    "use strict";
    n.d(t, "k", (function() {
        return o
    })), n.d(t, "c", (function() {
        return s
    })), n.d(t, "i", (function() {
        return a
    })), n.d(t, "g", (function() {
        return c
    })), n.d(t, "a", (function() {
        return u
    })), n.d(t, "j", (function() {
        return d
    })), n.d(t, "d", (function() {
        return l
    })), n.d(t, "e", (function() {
        return p
    })), n.d(t, "f", (function() {
        return f
    })), n.d(t, "l", (function() {
        return b
    })), n.d(t, "o", (function() {
        return h
    })), n.d(t, "n", (function() {
        return g
    })), n.d(t, "b", (function() {
        return m
    })), n.d(t, "m", (function() {
        return O
    })), n.d(t, "h", (function() {
        return y
    }));
    var r = n(1);
    const i = e => e.tour,
        o = (Object(r.createSelector)(i, (e => e.isFetching)), Object(r.createSelector)(i, (e => e.isFetched))),
        s = (Object(r.createSelector)(i, (e => e.fetchingFailed)), Object(r.createSelector)(i, (e => e.activeTour))),
        a = Object(r.createSelector)(i, (e => e.isPreviewing)),
        c = Object(r.createSelector)(i, (e => e.updateFailed)),
        u = Object(r.createSelector)(i, (e => {
            if (e.activeTour) return e.activeTour.author
        })),
        d = Object(r.createSelector)(i, (e => !(!e.activeTour || !e.activeTour.isCompleted))),
        l = Object(r.createSelector)(i, (e => {
            if (e.activeTour) return e.activeTour.steps.length
        })),
        p = Object(r.createSelector)(i, (e => {
            const t = e.activeTour;
            if (t) return t.steps.findIndex((e => e.id === t.activeStepId))
        })),
        f = Object(r.createSelector)(i, (e => {
            const t = e.activeTour;
            if (!t) return;
            const {
                steps: n,
                activeStepId: r
            } = t;
            return t ? n.find((e => e.id === r)) : void 0
        })),
        b = Object(r.createSelector)(i, (e => {
            const t = e.activeTour;
            if (!t) return;
            const {
                steps: n,
                activeStepId: r
            } = t, i = n.findIndex((e => e.id === r));
            return n[i + 1]
        })),
        h = Object(r.createSelector)(i, (e => e.videoAudioMuted)),
        g = Object(r.createSelector)(i, (e => e.userHasInteractedWithVideo)),
        m = Object(r.createSelector)(i, (e => {
            const t = e.activeTour;
            if (t) return t.endTourAnimation
        })),
        v = Object(r.createSelector)(p, l, ((e, t) => e + 1 === t)),
        O = Object(r.createSelector)(m, v, ((e, t) => "confetti" === e && t)),
        y = Object(r.createSelector)(i, (e => e.isAwaitingProgress))
}, , function(e, t, n) {
    "use strict";
    n.d(t, "h", (function() {
        return l
    })), n.d(t, "b", (function() {
        return p
    })), n.d(t, "d", (function() {
        return f
    })), n.d(t, "e", (function() {
        return b
    })), n.d(t, "i", (function() {
        return h
    })), n.d(t, "c", (function() {
        return g
    })), n.d(t, "a", (function() {
        return m
    })), n.d(t, "f", (function() {
        return v
    })), n.d(t, "g", (function() {
        return O
    }));
    var r, i = n(5),
        o = n(26);

    function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function a(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? s(Object(n), !0).forEach((function(t) {
                c(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let u = null === (r = window) || void 0 === r ? void 0 : r.parent,
        d = [];
    const l = e => {
            u = e, Object(i.a)() || window.parent.addEventListener("resize", (e => d.forEach((t => t(e)))))
        },
        p = () => {
            var e, t;
            return Object(i.a)() ? u.title : null === (e = u) || void 0 === e || null === (t = e.document) || void 0 === t ? void 0 : t.title
        },
        f = () => {
            var e;
            return Object(i.a)() ? u.location : null === (e = u) || void 0 === e ? void 0 : e.location
        },
        b = () => {
            var e, t;
            return Object(i.a)() ? u.referrer : null === (e = u) || void 0 === e || null === (t = e.document) || void 0 === t ? void 0 : t.referrer
        },
        h = e => {
            Object(i.a)() && (u = a(a({}, u), e), d.forEach((e => e(u))))
        },
        g = () => {
            var e, t;
            return {
                innerWidth: null === (e = u) || void 0 === e ? void 0 : e.innerWidth,
                innerHeight: null === (t = u) || void 0 === t ? void 0 : t.innerHeight
            }
        },
        m = e => {
            d.push(e)
        },
        v = e => d = d.filter((t => t !== e)),
        O = e => Object(o.k)(e)
}, function(e, t, n) {
    "use strict";
    t.a = e => {
        if (e) return e[e.length - 1]
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "j", (function() {
        return r
    })), n.d(t, "k", (function() {
        return i
    })), n.d(t, "d", (function() {
        return o
    })), n.d(t, "g", (function() {
        return s
    })), n.d(t, "e", (function() {
        return a
    })), n.d(t, "f", (function() {
        return c
    })), n.d(t, "h", (function() {
        return u
    })), n.d(t, "i", (function() {
        return d
    })), n.d(t, "l", (function() {
        return l
    })), n.d(t, "m", (function() {
        return p
    })), n.d(t, "n", (function() {
        return f
    })), n.d(t, "a", (function() {
        return b
    })), n.d(t, "b", (function() {
        return h
    })), n.d(t, "c", (function() {
        return g
    }));
    const r = "search_browse_card",
        i = "search_browse_card_input",
        o = "article",
        s = "collection",
        a = "article_suggestion",
        c = "article_suggestions",
        u = "input",
        d = "reaction",
        l = "search_browse",
        p = "search_browse",
        f = "search_browse_card",
        b = "messenger",
        h = "search_browse",
        g = "search_browse_article"
}, function(e, t, n) {
    "use strict";
    n.d(t, "f", (function() {
        return f
    })), n.d(t, "d", (function() {
        return b
    })), n.d(t, "e", (function() {
        return h
    })), n.d(t, "h", (function() {
        return g
    })), n.d(t, "m", (function() {
        return m
    })), n.d(t, "a", (function() {
        return v
    })), n.d(t, "l", (function() {
        return O
    })), n.d(t, "c", (function() {
        return y
    })), n.d(t, "j", (function() {
        return _
    })), n.d(t, "i", (function() {
        return C
    })), n.d(t, "k", (function() {
        return w
    })), n.d(t, "b", (function() {
        return E
    })), n.d(t, "g", (function() {
        return I
    }));
    var r = n(10),
        i = n.n(r),
        o = n(9),
        s = n(15),
        a = n(2);
    let c = !1,
        u = !1,
        d = !1,
        l = !1,
        p = !1;
    const f = e => !!e && !!e[0] && "attachmentList" === e[0].type,
        b = e => {
            if (e) return e.isActive ? "active" : "away"
        },
        h = e => {
            if (!e || !e.lastActiveAt) return;
            const t = new Date;
            return Math.round((t.getTime() - e.lastActiveAt.getTime()) / 6e4)
        },
        g = e => i()(e),
        m = e => {
            c = e
        },
        v = () => c,
        O = e => {
            u = e
        },
        y = () => u;

    function _(e, t) {
        try {
            const n = j(),
                r = e.parts[e.parts.length - 1].author.isBot;
            if (n || !r || !t) return;
            Object(a.g)("timeToFirstBotResponse", {
                duration_ms: Date.now() - t
            }), S(!0)
        } catch (e) {
            Object(s.a)(`Failure while recording trigger transition duration ${e}`)
        }
    }

    function C(e, t, n) {
        try {
            let r = p;
            const i = e.parts[e.parts.length - 1].author.isBot;
            if (r || !i || !t || Math.abs(n - t) > 50) return void(p = !0);
            Object(a.g)("durationFromCreateConversationToOperatorReply", {
                duration_ms: Date.now() - t
            }), p = !0
        } catch (e) {
            Object(s.a)(`Failure while recording trigger transition duration ${e}`)
        }
    }
    const S = e => {
            l = e
        },
        j = () => l,
        w = e => {
            d = e
        },
        E = () => d,
        I = e => !!e && o.a.messengerIsVisible()
}, , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return i
    })), n.d(t, "l", (function() {
        return o
    })), n.d(t, "m", (function() {
        return s
    })), n.d(t, "B", (function() {
        return a
    })), n.d(t, "s", (function() {
        return c
    })), n.d(t, "f", (function() {
        return u
    })), n.d(t, "r", (function() {
        return d
    })), n.d(t, "z", (function() {
        return l
    })), n.d(t, "e", (function() {
        return p
    })), n.d(t, "A", (function() {
        return f
    })), n.d(t, "b", (function() {
        return b
    })), n.d(t, "x", (function() {
        return h
    })), n.d(t, "c", (function() {
        return g
    })), n.d(t, "y", (function() {
        return m
    })), n.d(t, "d", (function() {
        return v
    })), n.d(t, "j", (function() {
        return O
    })), n.d(t, "o", (function() {
        return y
    })), n.d(t, "h", (function() {
        return _
    })), n.d(t, "g", (function() {
        return C
    })), n.d(t, "q", (function() {
        return S
    })), n.d(t, "n", (function() {
        return j
    })), n.d(t, "w", (function() {
        return w
    })), n.d(t, "v", (function() {
        return E
    })), n.d(t, "t", (function() {
        return I
    })), n.d(t, "u", (function() {
        return A
    })), n.d(t, "p", (function() {
        return T
    })), n.d(t, "i", (function() {
        return R
    })), n.d(t, "k", (function() {
        return P
    }));
    var r = n(40);
    const i = {
            TAB: 9,
            ENTER: 13,
            ESC: 27,
            SPACE: 32,
            BACKSPACE: 8,
            DELETE: 46
        },
        o = e => e.scrollHeight - e.clientHeight - e.scrollTop,
        s = e => e.scrollTop / (e.scrollHeight - e.clientHeight),
        a = (e, t = 0) => {
            e && (e.scrollTop = t)
        },
        c = (e, t = 0) => {
            const {
                scrollTop: n,
                scrollHeight: r,
                clientHeight: i
            } = e;
            return r - n - i < t + 1
        },
        u = e => {
            if (!e) return 0;
            const {
                scrollTop: t,
                scrollHeight: n,
                clientHeight: r
            } = e;
            return n - r - t
        },
        d = e => {
            const {
                scrollHeight: t,
                clientHeight: n
            } = e;
            return t > n
        },
        l = e => {
            const {
                scrollHeight: t,
                clientHeight: n
            } = e;
            e.scrollTop = t - n
        },
        p = e => {
            const {
                scrollHeight: t,
                clientHeight: n
            } = e;
            if (!e.scrollBy) return l(e);
            e.scrollBy({
                top: t - n,
                left: 0,
                behavior: "smooth"
            })
        },
        f = (e, t) => {
            const {
                bottom: n,
                top: r,
                height: i
            } = e.getBoundingClientRect(), {
                bottom: o,
                top: s,
                height: a
            } = t.getBoundingClientRect();
            if (!(r < s) && !(n > o)) return;
            let c = e.offsetTop;
            for (; e;) {
                const {
                    position: t
                } = window.getComputedStyle(e);
                "relative" === t && (c += e.offsetTop - e.scrollTop + e.clientTop), e = e.offsetParent
            }
            t.scrollTop = c - Math.trunc(a / 2) + Math.trunc(i / 2)
        },
        b = (e, t) => {
            const n = e.className.split(" ");
            n.some((e => e === t)) || (n.push(t), e.className = n.join(" ").trim())
        },
        h = (e, t) => {
            e.className = e.className.split(" ").filter((e => e !== t)).join(" ")
        },
        g = (e, t, n, r = !1) => {
            null != e && (e.addEventListener ? e.addEventListener(t, n, r) : e.attachEvent && e.attachEvent(`on${t}`, n))
        },
        m = (e, t, n) => {
            null != e && (e.removeEventListener ? e.removeEventListener(t, n) : e.detachEvent && e.detachEvent(`on${t}`, n))
        },
        v = e => {
            const t = e.currentTarget,
                {
                    scrollTop: n,
                    scrollHeight: r,
                    clientHeight: i
                } = t,
                {
                    deltaY: o
                } = e,
                s = o > 0;
            s && o > r - i - n ? t.scrollTop = r : !s && -o > n ? t.scrollTop = 0 : e.stopPropagation()
        },
        O = e => {
            if (e && "selectionStart" in e) return e.selectionStart
        },
        y = (e, t, n) => e.slice(0, n) + t + e.slice(n),
        _ = (e, t = -1) => {
            e && (e.focus(), "setSelectionRange" in e && t >= 0 && e.setSelectionRange(t, t))
        };

    function C(e, t, n) {
        const r = e.document || e.ownerDocument;
        return e => {
            const i = [];
            Array.from(r.querySelectorAll(t)).forEach((e => i.push(e)));
            let {
                target: o
            } = e;
            for (; o && o !== this;) {
                if (i.indexOf(o) > -1) {
                    n.call(o, e);
                    break
                }
                o = o.parentNode
            }
        }
    }
    const S = e => void 0 !== e.hidden ? !e.hidden : void 0 !== e.mozHidden ? !e.mozHidden : void 0 !== e.msHidden ? !e.msHidden : void 0 === e.webkitHidden || !e.webkitHidden,
        j = () => {
            let e;
            return void 0 !== document.hidden ? e = "visibilitychange" : void 0 !== document.mozHidden ? e = "mozvisibilitychange" : void 0 !== document.msHidden ? e = "msvisibilitychange" : void 0 !== document.webkitHidden && (e = "webkitvisibilitychange"), e
        },
        w = (e, t = {}) => {
            const n = document.createElement("form");
            n.setAttribute("target", "_blank"), n.setAttribute("method", "post"), n.setAttribute("action", e), Object.keys(t).forEach((e => {
                const r = document.createElement("input");
                r.type = "hidden", r.name = e, r.value = t[e], n.appendChild(r)
            })), document.body.appendChild(n), n.submit(), document.body.removeChild(n)
        },
        E = e => t => (t.keyCode === i.ENTER || t.keyCode === i.SPACE) && e(t),
        I = e => e.keyCode === i.TAB && !(-1 !== ["INPUT", "TEXTAREA", "BUTTON"].indexOf(e.target.tagName)),
        A = e => {
            if (e) return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        },
        T = e => e.keyCode === i.ESC,
        R = e => Array.from(e.querySelectorAll('button, [href], input:not([type="file"]):not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])')).filter((e => !e.closest('[aria-hidden="true"]'))),
        P = e => Object(r.b)(e) ? "rtl" : "ltr"
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return r
    }));

    function r() {
        const e = (new Date).getTime();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t => {
            const n = (e + 16 * Math.random()) % 16 | 0;
            return ("x" === t ? n : 3 & n | 8).toString(16)
        }))
    }
    t.a = {
        generateUUID: r
    }
}, , function(e, t, n) {
    "use strict";
    var r = e => ({
            data: t
        }) => {
            const {
                type: n,
                payload: r
            } = t, i = e[n];
            i && i(r)
        },
        i = n(14),
        o = () => Object(i.a)("intercom:ready"),
        s = (e, t, n) => Object(i.a)("intercom:create-or-update-frame", {
            name: e,
            styles: t
        }, n),
        a = e => Object(i.a)("intercom:destroy-frame", {
            name: e
        }),
        c = e => Object(i.a)("intercom:write-cookie", {
            cookie: e
        }),
        u = e => Object(i.a)("intercom:request-animation-frame", {}, e),
        d = (e, t) => Object(i.a)("intercom:open-url", {
            url: e,
            openNatively: t
        }),
        l = (e, t, n) => Object(i.a)("intercom:set-storage-item", {
            key: e,
            value: t,
            type: n
        }),
        p = (e, t) => Object(i.a)("intercom:remove-storage-item", {
            key: e,
            type: t
        }),
        f = e => Object(i.a)("intercom:get-storage", {}, e),
        b = (e, t) => Object(i.a)("intercom:get-dom-element", {
            selector: e
        }, t),
        h = (e, t) => Object(i.a)("intercom:delayed-node-visibility-check", e, t);
    let g = 0;
    var m = (e, t = {}, n) => {
        const r = g++,
            i = {
                type: "intercom:add-event-listener",
                event: e,
                payload: t,
                listenerId: r
            },
            o = e => {
                const {
                    type: t,
                    listenerId: r,
                    payload: o
                } = e.data;
                "intercom:event" === t && r === i.listenerId && n(o)
            };
        return window.addEventListener("message", o), window.parent.postMessage(i, "*"), () => {
            (e => {
                window.parent.postMessage({
                    type: "intercom:remove-event-listener",
                    listenerId: e
                }, "*")
            })(r), window.removeEventListener("message", o)
        }
    };
    n.d(t, "b", (function() {
        return r
    })), n.d(t, "i", (function() {
        return o
    })), n.d(t, "c", (function() {
        return s
    })), n.d(t, "e", (function() {
        return a
    })), n.d(t, "m", (function() {
        return c
    })), n.d(t, "l", (function() {
        return l
    })), n.d(t, "j", (function() {
        return p
    })), n.d(t, "g", (function() {
        return f
    })), n.d(t, "k", (function() {
        return u
    })), n.d(t, "h", (function() {
        return d
    })), n.d(t, "f", (function() {
        return b
    })), n.d(t, "d", (function() {
        return h
    })), n.d(t, "a", (function() {
        return m
    }))
}, function(e, t, n) {
    "use strict";
    n.d(t, "d", (function() {
        return r
    })), n.d(t, "a", (function() {
        return i
    })), n.d(t, "b", (function() {
        return o
    })), n.d(t, "e", (function() {
        return s
    })), n.d(t, "c", (function() {
        return a
    })), n.d(t, "f", (function() {
        return c
    }));
    const r = () => "intercom-id",
        i = e => `intercom-id-${e}`,
        o = e => `intercom-session-${e}`,
        s = () => "_mkto_trk",
        a = () => "hubspotutk",
        c = () => "1" === navigator.doNotTrack
}, , function(e, t, n) {
    "use strict";
    var r = n(79),
        i = n(1),
        o = n(7);
    t.a = Object(i.createSelector)([e => Object(r.a)(e.conversations.byId), e => e.notificationTypeOverrides], ((e, t) => e.filter((e => !Object(o.m)(e))).map((e => ((e, t) => {
        const n = Object(o.g)(e);
        return Object.assign({}, e, {
            suppress: (null == t ? void 0 : t.suppress[n]) || !1,
            forceSnippet: (null == t ? void 0 : t.forceSnippet[n]) || !1
        })
    })(e, t)))))
}, function(e, t, n) {
    "use strict";

    function r(e) {
        if (null != e) return new Date(1e3 * e)
    }

    function i(e) {
        return Date.now() - 1e3 * e
    }
    n.d(t, "c", (function() {
        return r
    })), n.d(t, "a", (function() {
        return i
    })), t.b = {
        timestampToDate: r,
        now: function() {
            return function() {
                const e = Date.now;
                return "function" == typeof e && !("prototype" in e)
            }() ? Date.now() : (new Date).getTime()
        },
        calculateDurationInMs: i
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
        return f
    })), n.d(t, "e", (function() {
        return b
    })), n.d(t, "f", (function() {
        return h
    })), n.d(t, "d", (function() {
        return g
    })), n.d(t, "g", (function() {
        return m
    })), n.d(t, "a", (function() {
        return v
    })), n.d(t, "b", (function() {
        return O
    }));
    var r = n(10),
        i = n.n(r),
        o = n(170),
        s = n(163),
        a = n(168),
        c = n(51),
        u = n(22),
        d = n.n(u),
        l = n(45),
        p = n.n(l);
    const f = ({
            primaryColor: e,
            secondaryColor: t
        }) => {
            const n = p()({
                    primaryColor: e,
                    secondaryColor: t
                }),
                r = "#D22628",
                i = "#FFFFFF";
            return {
                primaryColor: e,
                secondaryColor: t,
                primaryTextColor: n.primary_on_white_contrast > 1.6 ? i : "#222",
                secondaryTextColor: n.secondary_on_white_contrast > 1.6 ? i : "#222",
                isPrimaryColorLight: "light" === n.primary_type,
                isSecondaryColorLight: "light" === n.secondary_type,
                bannerErrorText: Object(s.b)(r, e) > 3 ? r : i
            }
        },
        b = e => ({
            theme: t
        }) => {
            if (t) return t.surveyColorPalette[e]
        },
        h = d()("surveys:debug"),
        g = e => null != e && -1 !== Object.values(c.d).indexOf(e),
        m = (e, t) => {
            var n;
            let r = null;
            const {
                required: s
            } = t;
            if (s && i()(e)) r = c.d.required;
            else if (t.validation && null != t && null !== (n = t.validation) && void 0 !== n && n.type) {
                const n = t.validation.type,
                    i = ((e, t) => {
                        switch (t) {
                            case c.d.email:
                                return Object(o.a)(e);
                            case c.d.number:
                                return !isNaN(e);
                            case c.d.phone:
                                return Object(a.d)(e);
                            default:
                                return null
                        }
                    })(e, n);
                i || (r = n)
            }
            return {
                failedValidation: g(r),
                validationError: r
            }
        },
        v = {
            container: {
                default: "660px",
                withSender: "716px"
            },
            wrapper: {
                default: "484px",
                withSender: "540px"
            }
        },
        O = {
            large: "661px",
            medium: "556px",
            small: "477px"
        }
}, , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return s
    }));
    var r = n(15),
        i = n(53),
        o = n(0);
    const s = (e, t, n) => (o, s) => {
            const {
                messengerCards: l
            } = s(), p = n && l && l[t.uri], f = Object(i.c)(t);
            if (o(c(f)), p && a(p.card) && !f.canvas.content && (f.canvas = Object.assign({}, f.canvas, p.card.canvas)), f.canvas.content) return void o(u(f, f.canvas.content));
            const {
                session: b
            } = s();
            return e.getMessengerCanvasWithContent(b, f.canvas.id, f.uri).then((e => {
                o(u(f, e.content))
            })).catch((e => {
                o(d(f)), Object(r.a)(`There was a problem retrieving the live card content: ${e}`)
            }))
        },
        a = e => !(!e || !e.canvas),
        c = e => ({
            type: o.rb,
            card: e
        }),
        u = (e, t) => ({
            type: o.sb,
            card: e,
            content: t
        }),
        d = e => ({
            type: o.qb,
            card: e
        })
}, function(e, t, n) {
    "use strict";
    var r = n(10),
        i = n.n(r),
        o = n(39),
        s = n.n(o),
        a = n(16),
        c = n(11),
        u = n(135),
        d = n(42),
        l = n(2),
        p = n(8),
        f = n(3),
        b = n(64);
    class tour_progress_CheckIfTourReadyToProgress {
        constructor(e, t) {
            this.whenReady = void 0, this.state = void 0, this.activeStep = void 0, this.nextStep = void 0, this.state = e, this.whenReady = t, this.activeStep = Object(a.f)(e), this.nextStep = Object(a.l)(e), this._check()
        }
        _check() {
            return "click" === this.activeStep.progressionBehavior ? (Object(p.e)("Click to progress behavior detected."), this._evaluateProgressionByClick()) : this.whenReady()
        }
        _evaluateProgressionByClick() {
            let e = 0,
                t = 0;
            this._pageNeedsRedirection() ? (Object(p.e)("Step url for the next step is different so the tour will wait 2s for the page to reload"), e = 2e3) : Object(p.e)("No page redirection detected."), this._nextStepIsPointer() && (Object(p.e)("The page is going to wait upto 5s for the next step's selector to become visible in page"), t = 5e3), new p.a(this.nextStep.selector, t, e, this.whenReady)
        }
        _pageNeedsRedirection() {
            return this.activeStep.url !== this.nextStep.url
        }
        _nextStepIsPointer() {
            return !!this.nextStep.selector
        }
    }
    var h = n(13),
        g = n(9),
        m = n(0);
    n.d(t, "e", (function() {
        return O
    })), n.d(t, "h", (function() {
        return y
    })), n.d(t, "i", (function() {
        return _
    })), n.d(t, "c", (function() {
        return j
    })), n.d(t, "f", (function() {
        return w
    })), n.d(t, "b", (function() {
        return E
    })), n.d(t, "d", (function() {
        return A
    })), n.d(t, "a", (function() {
        return R
    })), n.d(t, "l", (function() {
        return P
    })), n.d(t, "j", (function() {
        return M
    })), n.d(t, "g", (function() {
        return D
    })), n.d(t, "k", (function() {
        return k
    }));

    function v(e) {
        return Object(a.g)(e) || Object(a.i)(e) || Object(a.j)(e)
    }

    function O() {
        return async (e, t) => {
            const n = t(),
                {
                    session: r
                } = t(),
                {
                    id: i,
                    progressId: o
                } = Object(a.c)(n),
                s = Object(a.l)(n);
            if (s) {
                if (Object(p.e)(`Tour with id ${i} is attempting to progress to step ${s}`), !v(n)) {
                    e({
                        type: m.dc
                    });
                    try {
                        await f.d.progressTour(r, i, s.id, o)
                    } catch (t) {
                        e({
                            type: m.hd
                        }), Object(p.e)(`Could not update tour due to e=${t}`)
                    }
                }
                Object(a.i)(n) && h.b.set("tour_progress_preview", s.id), new tour_progress_CheckIfTourReadyToProgress(n, (() => {
                    e(function(e, t) {
                        return {
                            type: m.bc,
                            activeStepId: e,
                            progressId: t
                        }
                    }(s.id, o)), e({
                        type: m.cc
                    })
                }))
            } else window.parent && window.parent.postMessage("exit_tour_preview", "*"),
                function(e) {
                    C("intercom:tourComplete", {
                        tourId: e
                    })
                }(i), e(function(e) {
                    return {
                        type: m.A,
                        progressId: e
                    }
                }(o))
        }
    }

    function y() {
        return async (e, t) => {
            const n = t(),
                r = Object(a.c)(n),
                {
                    session: i
                } = t(),
                o = window.parent;
            if (Object(a.i)(n)) h.b.remove("tour_progress_preview"), o.__intercomAssignLocation(r.url);
            else {
                e({
                    type: m.rc
                });
                try {
                    const e = await f.d.resetTour(i, null == r ? void 0 : r.id);
                    Object(p.b)(null == r ? void 0 : r.id), e.progress_start_url ? o.__intercomAssignLocation(e.progress_start_url) : Object(p.e)("Could not redirect Tour due to in valid progress URL")
                } catch (e) {
                    Object(p.e)(`Could not reset tour due to exception - ${e}`)
                }
            }
        }
    }

    function _() {
        return async (e, t) => {
            const n = t(),
                {
                    session: r
                } = t(),
                {
                    id: i,
                    progressId: o
                } = Object(a.c)(n);
            if (Object(a.i)(n)) e(N(""));
            else {
                e({
                    type: "SNOOZE_TOUR"
                });
                try {
                    const e = u.a.TOUR;
                    f.d.snoozeContentObjectInstance(r, e, i, o)
                } catch (e) {
                    Object(p.e)(`Could not snooze tour due to exception - ${e}`)
                }
            }
        }
    }

    function C(e, t) {
        if (!Object(b.a)()) return;
        const n = new CustomEvent(e, {
            detail: t
        });
        window.parent.document.dispatchEvent(n)
    }

    function S(e) {
        C("intercom:tourError", {
            tourId: e
        })
    }

    function j() {
        return (e, t) => {
            const n = t(),
                {
                    id: r,
                    progressId: i
                } = Object(a.c)(n),
                {
                    session: o
                } = t();
            Object(p.e)(`Tour with id ${r} marked as complete`), v(n) || (e({
                type: m.Ib
            }), f.d.completeTour(o, r, i))
        }
    }

    function w() {
        return (e, t) => {
            const n = t(),
                {
                    id: r,
                    progressId: i
                } = Object(a.c)(n),
                o = Object(a.f)(n);
            var s, c, u;
            if (!v(n)) return S(r), f.d.recordTourFailure(n.session, r, null == o ? void 0 : o.id, null == o ? void 0 : o.selector, null === (s = window) || void 0 === s || null === (c = s.parent) || void 0 === c || null === (u = c.location) || void 0 === u ? void 0 : u.pathname, i)
        }
    }

    function E() {
        return e => {
            var t, n;
            if (Object(g.i)()) return;
            const r = I(null === (t = window) || void 0 === t || null === (n = t.parent) || void 0 === n ? void 0 : n.location);
            if (Object(p.e)("Checking if URL has tour attached"), r) {
                const t = "tour_triggered_from_url";
                let n = JSON.parse(h.b.get(t));
                n = n || [];
                n.indexOf(r) > -1 ? Object(p.e)(`Tour with id ${r} has already been triggered`) : (Object(p.e)(`Tour id ${r} attached in the url`), e(A(r)), n.push(r), h.b.set(t, JSON.stringify(n)))
            } else Object(p.e)("No attached tour found in the URL")
        }
    }
    const I = e => {
        if (!e) return;
        let t = Object(d.a)(e).product_tour_id;
        if (!t) {
            const n = e.toString();
            if (!n) return;
            const r = n.match(/product_tour_id=(\d+)/i);
            r && (t = r[1])
        }
        return t
    };

    function A(e) {
        return async (t, n) => {
            const r = Object(a.c)(n()),
                {
                    session: i
                } = n();
            if (r) Object(p.e)(`Active tour with id ${r.id} already found so tour id ${e} won't be fetched`);
            else {
                Object(p.e)(`Will attempt to fetch tour with id ${e}`);
                try {
                    t(P(await f.d.fetchTour({
                        session: i,
                        tourId: e
                    })))
                } catch (t) {
                    e && S(e), Object(p.e)(`Could not fetch or start tour due to e=${t}`)
                }
            }
        }
    }

    function T(e, t) {
        return {
            type: m.ob,
            tour: e,
            isPreviewingTour: t
        }
    }

    function R(e) {
        return {
            type: m.m,
            muted: e
        }
    }

    function P(e) {
        return (t, n) => {
            if (i()(e)) return;
            const {
                user: r
            } = n(), o = Object(a.c)(n());
            if (!i()(o)) return Object(p.e)("There is already an active tour", o), void Object(p.e)("The tour won't attempt to start", e);
            const u = function(e) {
                if (!e.steps) return;
                const {
                    activeStepId: t,
                    steps: n
                } = e, r = n.findIndex((e => parseInt(e.id, 10) === parseInt(t, 10))), i = n.slice(r).find((e => !s()(e.selector)));
                return i ? i.selector : void 0
            }(e);
            u ? (Object(p.e)("Checking if selector of the first active pointer step is visible on the page", e), new p.a(u, 0, 0, (n => {
                n ? (Object(p.e)("Node is visible. Tour is attempting to start", e), t(T(e, !1)), t(Object(c.a)()), Object(l.h)(r, "received", "tour", "messenger", null, {
                    tour_id: e.id
                })) : (Object(p.e)("Node is not visible. Tour will not start", e), function(e, t) {
                    Object(b.a)() && (Object(l.c)("tour_failed_css_evaluation", {
                        tour_id: e
                    }), Object(l.b)(`tour_failed_css_evaluation tour_id=${e}`)), Object(l.h)(t, "received_but_failed_css_evaluation", "tour", "messenger", null, {
                        tour_id: e
                    })
                }(e.id, r), S(e.id))
            }))) : (Object(p.e)("Tour is attempting to start", e), t(T(e, !1)), t(Object(c.a)()), Object(l.h)(r, "received", "tour", "messenger", null, {
                tour_id: e.id
            }))
        }
    }

    function M(e) {
        return t => {
            t(T(e, !0)), t(Object(c.a)())
        }
    }

    function D(e) {
        return async (t, n) => {
            const {
                session: r
            } = n();
            try {
                var i, o;
                const n = await f.d.fetchTour({
                        session: r,
                        tourId: e
                    }),
                    s = window.parent,
                    a = Object(d.b)(n.url);
                n.url && !Object(p.c)(a, null === (i = window) || void 0 === i || null === (o = i.parent) || void 0 === o ? void 0 : o.location) ? s.__intercomAssignLocation(n.url) : (t(T(n, !1)), t(Object(c.a)()))
            } catch (t) {
                S(e), Object(p.e)(`Could not fetch or start tour due to e=${t}`)
            }
        }
    }

    function k() {
        return (e, t) => {
            const n = t();
            if (v(n)) e(N(""));
            else {
                const {
                    session: r
                } = t(), {
                    id: i,
                    progressId: o
                } = Object(a.c)(n);
                e(N(o)), f.d.stopTour(r, i, o)
            }
        }
    }

    function N(e) {
        return {
            type: m.ad,
            progressId: e
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(106);
    t.a = {
        read(e, t) {
            t = t || Object(r.a)();
            const n = "(?:(?:^|[^]*;)\\s*" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$",
                i = t.match(new RegExp(n));
            if (null !== i && void 0 !== i[1]) return decodeURIComponent(i[1])
        },
        write(e, t, n = {}) {
            const {
                domain: i,
                path: o,
                expires: s,
                secure: a,
                sameSite: c
            } = n;
            let u = `${e}=${t}`;
            return i && (u += `; domain=${i}`), o && (u += `; path=${o}`), s && (u += `; expires=${s.toUTCString()}`), c && (u += `; samesite=${c}`), a && (u += "; secure"), Object(r.c)(u), u
        },
        clear(e, t = {}) {
            const {
                domain: n,
                path: r
            } = t, i = new Date(0);
            return this.write(e, "", {
                domain: n,
                path: r,
                expires: i
            })
        }
    }
}, , , function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return s
    })), n.d(t, "a", (function() {
        return a
    })), n.d(t, "c", (function() {
        return c
    })), n.d(t, "f", (function() {
        return u
    })), n.d(t, "h", (function() {
        return d
    })), n.d(t, "g", (function() {
        return l
    })), n.d(t, "e", (function() {
        return p
    })), n.d(t, "d", (function() {
        return f
    }));
    const r = ["https://app.intercom.com", "https://app.intercom.io"];

    function i(e, t) {
        e.opener && e.opener.postMessage(t, "*")
    }

    function o(e, t = {}) {
        return {
            boundEventCreator: Object.assign({
                type: e
            }, t)
        }
    }
    const s = {
            CLICK: {
                key: "click",
                title: "Clicks",
                description: "When people click on a button or link"
            },
            VISIT: {
                key: "visit",
                title: "Page views",
                description: "When people view a page"
            }
        },
        a = {
            CHOOSE_EVENT_TYPE: "CHOOSE_EVENT_TYPE",
            CONFIRM_URL: "CONFIRM_URL",
            SELECT_CLICK_ELEMENT: "SELECT_CLICK_ELEMENT"
        };

    function c(e, t) {
        e.addEventListener("message", (e => {
            if (-1 === r.indexOf(e.origin)) return;
            const {
                boundEventCreator: n
            } = e.data;
            n && "open" === n.type && t(n.boundEventCreatorState)
        }))
    }

    function u(e) {
        i(e, o("ready"))
    }

    function d(e, t) {
        i(e, o("updateStage", {
            newStage: t
        }))
    }

    function l(e, t) {
        i(e, o("updateData", {
            eventData: t
        }))
    }

    function p(e, t) {
        i(e, o("newEvent", {
            newEvent: t
        }))
    }

    function f(e) {
        i(e, o("closed"))
    }
}, , function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
        return a
    })), n.d(t, "d", (function() {
        return p
    })), n.d(t, "a", (function() {
        return f
    })), n.d(t, "e", (function() {
        return b
    })), n.d(t, "b", (function() {
        return h
    }));
    var r = n(2),
        i = n(15),
        o = n(128);
    const s = ["ar", "bg", "bs", "ca", "cs", "da", "de", "de-form", "el", "en", "es", "et", "fi", "fr", "he", "hr", "hu", "id", "it", "ja", "ko", "lt", "lv", "mn", "nb", "nl", "pl", "pt", "pt-BR", "ro", "ru", "sl", "sr", "sv", "tr", "vi", "zh-CN", "zh-TW"],
        a = ["ar", "he"],
        c = {};
    c.en = n(226);
    let u = c,
        d = "en";
    const l = (e, t) => e && e.replace(/{([\s\S]+?)}/g, ((e, n) => t[n])),
        p = async e => {
            if (-1 === s.indexOf(e)) return Object(i.b)(`Unsupported locale: ${e}`);
            if (!c[e]) {
                const t = await Object(o.a)({
                    promise: () => n(393)(`./${e}.json`)
                });
                c[e] = t
            }
            d = e
        },
        f = () => d,
        b = (e, t) => {
            const n = u[d];
            if (!n) return Object(r.b)(`Unknown locale '${d}'`), "";
            const i = n[e];
            if (!i) return Object(r.b)(`Unknown key '${e}' in locale '${d}'`), l(u.en[e], t) || "";
            try {
                return l(i, t)
            } catch (t) {
                return Object(r.b)(`Interpolation failed for key '${e}' in locale '${d}'`), ""
            }
        },
        h = e => -1 !== a.indexOf(e)
}, , function(e, t, n) {
    "use strict";

    function r(e) {
        const t = document.createElement("a");
        return t.href = e, {
            protocol: t.protocol,
            host: t.host,
            port: t.port,
            pathname: t.pathname,
            hash: t.hash,
            search: t.search,
            hostname: t.hostname,
            origin: t.origin
        }
    }

    function i(e) {
        const t = r(e.toString()).search;
        return t ? (/^[?#]/.test(t) ? t.slice(1) : t).split("&").reduce(((e, t) => {
            const [n, r] = t.split("=");
            return e[n] = r ? decodeURIComponent(r.replace(/\+/g, " ")) : "", e
        }), {}) : {}
    }
    n.d(t, "b", (function() {
        return r
    })), n.d(t, "a", (function() {
        return i
    }))
}, function(e, t, n) {
    "use strict";
    var r = n(40),
        i = n(78),
        o = n.n(i),
        s = n(132);
    n.d(t, "g", (function() {
        return d
    })), n.d(t, "f", (function() {
        return l
    })), n.d(t, "d", (function() {
        return p
    })), n.d(t, "e", (function() {
        return f
    })), n.d(t, "c", (function() {
        return b
    })), n.d(t, "a", (function() {
        return h
    })), n.d(t, "b", (function() {
        return g
    }));
    const a = ["image", "attachmentList", "video", "videoReply", "videoFile", "messengerCard"],
        c = ["image", "video", "videoReply", "videoFile", "notificationChannelsCard"],
        u = [{
            user: "sent_an_image",
            admin: "sent_you_an_image"
        }, {
            user: "sent_an_attachment",
            admin: "sent_you_an_attachment"
        }, {
            user: "sent_a_video",
            admin: "sent_you_a_video"
        }, {
            user: "sent_a_video_reply",
            admin: "sent_you_a_video_reply"
        }, {
            user: "sent_a_video",
            admin: "sent_you_a_video"
        }, {
            user: "sent_an_app",
            admin: "sent_you_an_app"
        }],
        d = e => e && e.type && "videoFile" === e.type,
        l = e => c.indexOf(e.type) > -1,
        p = e => e.text || e.content,
        f = e => {
            const t = e[e.length - 1],
                n = t.body,
                i = t.author;
            let o, s = t.body.some(l);
            C(n[0]) && (o = O(n));
            const a = v(n),
                c = _(n, i);
            return o = 0 === a.length && c ? c : a, "quick_reply" === t.partType ? f(e.slice(0, e.length - 1)) : (function(e) {
                return "attribute_collector" === e.partType
            }(t) && (o = Object(r.e)("operator_asked_for_attribute", {
                attribute: m(t)
            }), s = !0), {
                author: i,
                summaryText: o,
                isMetadata: s
            })
        },
        b = e => {
            const t = Object(s.a)(e);
            return S(t).map((e => ({
                type: "paragraph",
                text: e
            })))
        },
        h = (e, t, n) => [{
            type: "attachmentList",
            attachments: [{
                contentType: t,
                name: e,
                size: n
            }]
        }],
        g = (e, t, n, r, i) => [{
            type: "image",
            url: e,
            width: t,
            height: n,
            attribution: r,
            title: i
        }],
        m = e => {
            const t = e.form.attributes[0];
            return t.name || t.identifier.toLowerCase().replace(".", " ")
        },
        v = e => {
            const t = e.filter((e => "button" !== e.type && !C(e))).map((e => y(e))).filter((e => !!e)).join(" ");
            return o()(t.replace(/<br>/g, " "))
        },
        O = e => {
            const t = e.filter((e => C(e)))[0];
            if (t && t.title) return o()(t.title)
        },
        y = e => {
            switch (e.type) {
                case "videoFile":
                case "messengerCard":
                    return "";
                case "orderedList":
                    return e.items.map(((e, t) => `${t+1}. ${e}`)).join(", ");
                case "unorderedList":
                    return e.items.join(", ");
                default:
                    return e.text || e.content
            }
        },
        _ = (e, t) => {
            const n = (e => e.filter((e => a.indexOf(e.type) > -1))[0])(e);
            if (!n) return;
            const i = a.indexOf(n.type),
                o = u[i];
            return t.isAdmin ? Object(r.e)(o.admin) : Object(r.e)(o.user)
        },
        C = e => e && e.type && "link" === e.type,
        S = e => {
            const t = e.split("\n\n");
            for (let e = 0; e < t.length; e++) t[e] = t[e].replace(/\n/g, "<br>");
            return t.filter((e => e))
        }
}, , , function(e, t, n) {
    "use strict";
    var r = n(1),
        i = n(7),
        o = n(29),
        s = n(19),
        a = n(111);
    t.a = Object(r.createSelector)(o.a, (e => e.filter((e => {
        return !Object(i.m)(e) && (!e.read && !e.dismissed && !Object(a.a)(Object(s.a)(e.parts).partType) && !e.suppress && (t = e, "snippet" === Object(s.a)(t.parts).notificationType || t.forceSnippet) && !Object(i.n)(e));
        var t
    }))))
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return i
    })), n.d(t, "a", (function() {
        return o
    }));
    var r = n(1);
    const i = Object(r.createSelector)([e => e.app.conversationId, e => e.conversations.byId, e => e.newConversation], ((e, t, n) => {
            const r = null === e ? n : t[e];
            if (r) return r.composerState || (r.composerState = n.composerState), r
        })),
        o = e => Object(r.createSelector)([e => e.conversations.byId], (t => t && t[e]))
}, function(e, t, n) {
    "use strict";
    n.d(t, "d", (function() {
        return a
    })), n.d(t, "b", (function() {
        return l
    })), n.d(t, "a", (function() {
        return b
    })), n.d(t, "c", (function() {
        return h
    })), n.d(t, "e", (function() {
        return g
    }));
    var r = n(33),
        i = n(7),
        o = n(230),
        s = n(0);

    function a(e, t = "unknown", n = 1, o = 10) {
        return (s, a) => {
            s(c());
            const {
                session: l,
                app: p
            } = a();
            return e.getConversations(l, {
                source: t,
                page: n,
                perPage: o,
                selfServeSuggestionsMatch: p.selfServeSuggestionsMatch
            }).then((t => {
                t.conversations.forEach((t => {
                    Object(i.s)(t).forEach((t => {
                        s(Object(r.a)(e, t))
                    }))
                })), s(g(t)), s(u(t))
            })).catch((() => {
                s(d())
            }))
        }
    }

    function c() {
        return {
            type: s.vb
        }
    }

    function u(e) {
        return {
            type: s.wb,
            conversations: e
        }
    }

    function d(e) {
        return {
            type: s.ub,
            error: e
        }
    }

    function l(e, t) {
        return (n, r) => {
            n(p(t));
            const {
                session: i
            } = r();
            return e.dismissNotifications(i, t).then((() => n(f(t))))
        }
    }

    function p(e) {
        return {
            type: s.bb,
            conversationIds: e
        }
    }

    function f(e) {
        return {
            type: s.cb,
            conversationIds: e
        }
    }

    function b(e) {
        return {
            type: s.C,
            scrollPosition: e
        }
    }

    function h(e) {
        return {
            type: s.fb,
            conversationId: e
        }
    }

    function g(e) {
        return t => {
            const n = e.conversations;
            n && n.forEach((e => {
                Object(i.n)(e) && e.read && t(Object(o.a)(e.id))
            }))
        }
    }
}, , , function(e, t, n) {
    "use strict";
    let r, i, o, s;
    n.d(t, "a", (function() {
            return r
        })), n.d(t, "c", (function() {
            return i
        })), n.d(t, "d", (function() {
            return o
        })), n.d(t, "b", (function() {
            return s
        })),
        function(e) {
            e[e.input = 0] = "input", e[e.text = 1] = "text", e[e.dropdown = 2] = "dropdown", e[e.scale = 3] = "scale", e[e.multiSelect = 4] = "multiSelect"
        }(r || (r = {})),
        function(e) {
            e[e.banner = 0] = "banner", e[e.post = 1] = "post"
        }(i || (i = {})),
        function(e) {
            e[e.required = -1] = "required", e[e.text = 0] = "text", e[e.number = 1] = "number", e[e.email = 2] = "email", e[e.phone = 3] = "phone"
        }(o || (o = {})),
        function(e) {
            e[e.numeric = 0] = "numeric", e[e.emoji = 1] = "emoji", e[e.stars = 2] = "stars", e[e.nps = 3] = "nps"
        }(s || (s = {}))
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return i
    }));
    var r = n(0);

    function i(e, t = !1) {
        const n = {
            type: r.Qc,
            conversationId: e
        };
        return t && (n.replaceCurrentView = t), n
    }
}, function(e, t, n) {
    "use strict";
    var r = n(65),
        i = n.n(r),
        o = n(162),
        s = n.n(o),
        a = n(86),
        c = n.n(a),
        u = n(105),
        d = n(81),
        l = n.n(d),
        p = n(139),
        f = n.n(p),
        b = n(247),
        h = n.n(b);
    const g = {
        button: function(e) {
            return e.action.id ? (e.id = e.action.id, f()(e, "action.id"), e) : e
        },
        input: function(e) {
            return e.action && e.action.id ? (e.id = e.action.id, f()(e, "action.id"), e) : e
        },
        list: function(e) {
            const t = e.items.map((e => {
                if (e.action) {
                    if (!e.action.id) return e;
                    e.id = e.action.id, f()(e, "action.id")
                }
                return e
            }));
            return e.items = t, e
        }
    };

    function m(e) {
        return e.components.map((e => function(e) {
            const t = h()({}, e);
            return l()(g, e.type, (() => {}))(t), t
        }(e)))
    }
    var v = n(164);

    function O(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function y(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    n.d(t, "a", (function() {
        return C
    })), n.d(t, "c", (function() {
        return S
    })), n.d(t, "e", (function() {
        return j
    })), n.d(t, "b", (function() {
        return E
    })), n.d(t, "d", (function() {
        return I
    }));
    const _ = e => e ? Object(v.a)(e.toString()) : "",
        C = (e, t) => {
            switch (e.type) {
                case "button":
                    return `button-${_(e.id)}`;
                case "text":
                    return `text-${t}-${_(e.text)}`;
                case "input":
                    return `input-${_(e.id)}`;
                case "spacer":
                    return `spacer-${t}`;
                case "divider":
                    return `divider-${t}`;
                case "image":
                    return `image-${t}-${_(e.url)}`;
                case "list":
                    return `list-${e.items.map((e=>_(e.id))).join("-")}`;
                case "dropdown":
                    return `dropdown-${_(e.id)}`;
                case "single-select":
                    return `single-select-${_(e.id)}`;
                default:
                    return `unknown-${t}`
            }
        },
        S = e => e.state ? {
            uri: e.uri,
            canvas: {
                id: "",
                content: e.state
            }
        } : e,
        j = e => {
            const t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(n), !0).forEach((function(t) {
                        y(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }({}, e);
            return i()(t, ["canvas", "content"], (e => (e => "0.1" === e.version ? e : {
                version: "0.1",
                components: m(e)
            })(c()(e)))), i()(t, ["canvas", "content", "components"], (e => e.map(u.a)))
        },
        w = (e, t, n) => {
            const r = [];
            return e.forEach((e => {
                "list" === e.type ? r.push(...e.items) : r.push(e)
            })), r.find((e => e[t] && (!n || e[t] === n)))
        },
        E = (e, t, n) => !!w(e, t, n),
        I = (e, t, n = !0) => {
            const r = ((e, t) => w(e, "id", t))(t, e),
                i = A(r, t);
            return i && r && r.type ? "button" === r.type || "item" === r.type ? s()(c()(t), `${i}.loading`, n, c.a) : "input" === r.type || "dropdown" === r.type || "single-select" === r.type ? s()(c()(t), `${i}.saveState`, n ? "saving" : "unsaved", c.a) : void 0 : t
        },
        A = (e, t) => {
            for (const n in t)
                if (t.hasOwnProperty(n)) {
                    if (e === t[n]) return `[${n}]`;
                    if (t[n] && "object" == typeof t[n]) {
                        const r = A(e, t[n]);
                        if (r) return `[${n}]` + r
                    }
                }
        }
}, function(e, t, n) {
    "use strict";
    n.d(t, "f", (function() {
        return c
    })), n.d(t, "d", (function() {
        return u
    })), n.d(t, "a", (function() {
        return d
    })), n.d(t, "b", (function() {
        return l
    })), n.d(t, "e", (function() {
        return p
    })), n.d(t, "c", (function() {
        return f
    }));
    var r = n(3),
        i = n(134),
        o = n(67),
        s = n(2),
        a = n(0);

    function c(e) {
        return {
            type: a.hc,
            banners: e
        }
    }

    function u(e) {
        return (t, n) => {
            const r = n(),
                {
                    verticalPadding: s
                } = Object(o.a)(r),
                {
                    customizationOverrides: a = {}
                } = r,
                {
                    isSetByBanner: c
                } = a;
            (20 === s || c) && t(Object(i.a)({
                verticalPadding: e
            }))
        }
    }

    function d(e, t, n) {
        return (i, o) => {
            const {
                session: s
            } = o();
            i(function(e, t) {
                return {
                    type: a.y,
                    bannerId: e,
                    email: t
                }
            }(e, n)), r.d.collectEmailFromBanner(s, e, t, n)
        }
    }

    function l(e, t) {
        return (n, i) => {
            const {
                session: o
            } = i();
            n({
                type: a.Z
            }), r.d.dismissBanner(o, e, t);
            const s = [];
            for (const t of i().banners) t.banner_id !== e && s.push(t);
            n(c(s))
        }
    }

    function p(e, t, n) {
        return (i, o) => {
            const {
                session: s
            } = o();
            i(function(e, t) {
                return {
                    type: a.ec,
                    bannerId: e,
                    reaction: t
                }
            }(e, n)), r.d.reactToBanner(s, e, t, n)
        }
    }

    function f(e) {
        return async (t, n) => {
            const {
                session: i
            } = n();
            try {
                t(function(e) {
                    return {
                        type: a.ib,
                        bannerViewId: e
                    }
                }(e));
                const n = [],
                    o = await r.d.fetchBannerView(i, e);
                if (!o) return;
                n.push(o), t(c(n))
            } catch (e) {
                Object(s.b)(`Could not fetch banner_view due to e=${e}`)
            }
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return i
    })), n.d(t, "a", (function() {
        return o
    }));
    var r = n(35);

    function i(e) {
        return e.requiresCookieConsent || !1
    }

    function o(e) {
        if (!e) return !0;
        if (!(e.requiresCookieConsent || !1)) return !0;
        const t = r.a.read("gtm_cookie_consent");
        if (!t) return !1;
        const n = function(e) {
            const {
                advertising: t,
                marketing: n,
                analytics: r,
                performance: i
            } = Object.fromEntries(e.split("+").map((e => [e, !0])));
            return {
                advertising: !!t,
                analytics: !!r,
                marketing: !!n,
                performance: !!i
            }
        }(t);
        return n.analytics
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
        return d
    })), n.d(t, "a", (function() {
        return l
    })), n.d(t, "e", (function() {
        return p
    })), n.d(t, "d", (function() {
        return f
    })), n.d(t, "b", (function() {
        return b
    }));
    var r = n(22),
        i = n.n(r),
        o = n(6),
        s = n(24),
        a = n(43),
        c = n(0);
    const u = i()("intercom.actions.inbound-triggers");

    function d(e, t, n = !1) {
        return async (r, i) => {
            try {
                const c = i(),
                    {
                        app: u,
                        session: d,
                        newConversation: l
                    } = c,
                    p = Object(s.b)(),
                    f = {
                        clientId: p,
                        body: Object(a.c)(t.text),
                        createdAt: new Date,
                        composerSuggestionItem: t
                    },
                    b = l.composerState.visible;
                r(function(e) {
                    if ("close-composer" === e.preAction) return Object(o.r)({
                        visible: !1
                    });
                    throw `Invalid PRE ACTION type for suggestion=${e.preAction}`
                }(t)), r(Object(o.h)(f, n));
                const h = await e.startConversationFromSuggestion(d, {
                    suggestionUuid: t.uuid,
                    clientAssignedUUID: p,
                    selfServeSuggestionsMatch: u.selfServeSuggestionsMatch,
                    articleUrl: l.articleUrl
                });
                r(Object(o.i)(h, null, null, Date.now(), "custom_bot")), b && r(Object(o.r)({
                    visible: !0
                }))
            } catch (e) {
                r(Object(o.g)(null)), u(`Couldnt start conversation from suggestion due to e=${e}`)
            }
        }
    }

    function l(e) {
        return {
            type: c.d,
            composerSuggestions: e
        }
    }

    function p(e) {
        return {
            type: c.vd,
            composerSuggestions: e
        }
    }

    function f(e) {
        return {
            type: c.td,
            composerSuggestions: e
        }
    }

    function b(e) {
        return {
            type: c.pc,
            rulesetId: e
        }
    }
}, , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return c
    })), n.d(t, "c", (function() {
        return u
    })), n.d(t, "b", (function() {
        return d
    }));
    var r = n(12),
        i = n(79),
        o = n(1),
        s = n(7),
        a = n(73);
    const c = (e, t) => !e.read && "whatsapp" !== e.currentChannel && Number(e.id) !== Number(t) && (e.dismissed || !Object(s.m)(e)),
        u = Object(o.createSelector)((e => Object(i.a)(e.conversations.byId)), (e => {
            const {
                app: {
                    conversationId: t,
                    isMessengerOpen: n
                },
                user: {
                    isPresent: i
                }
            } = e;
            if (n && "conversation" === Object(r.f)(e)) return t;
            if (!n) {
                const t = Object(a.a)(e);
                if (1 === t.length && i) return t[0].id
            }
        }), ((e, t) => e.reduce(((e, n) => (c(n, t) && e.push(n.id), e)), []))),
        d = Object(o.createSelector)(u, (e => e.length))
}, function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
        return C
    })), n.d(t, "a", (function() {
        return S
    })), n.d(t, "e", (function() {
        return j
    })), n.d(t, "b", (function() {
        return w
    })), n.d(t, "d", (function() {
        return E
    }));
    var r, i, o = n(250),
        s = n.n(o),
        a = n(28),
        c = n.n(a),
        u = n(251),
        d = n.n(u),
        l = n(234),
        p = n.n(l),
        f = n(128),
        b = n(5);
    const h = "1" === window.navigator.doNotTrack,
        g = ["address", "addresses", "email", "emailAddress", "emailAddresses", "phoneNumber", "phone", "number", "name", "firstName", "lastName", "userSuppliedEmail", "initial", "socialAccounts", "text", "messengerCards", "url"],
        m = [];
    let v, O;
    const y = e => d()(e, ((e, t, n) => {
            g.indexOf(n) >= 0 ? e[n] = "removedIdentifyingInfo" : c()(t) && !s()(t) ? e[n] = y(t.toJS ? t.toJS() : t) : e[n] = t
        })),
        _ = e => h ? "removedIdentifyingInfo" : (e => {
            const t = p()(e);
            return y(t)
        })(e),
        C = async e => {
            const {
                addTag: t,
                addExtra: r,
                logError: i,
                addBreadcrumb: o
            } = await Object(f.a)({
                promise: () => Promise.all([n.e(52), n.e(46)]).then(n.bind(null, 468))
            });
            t("app.id", v), m.forEach((({
                type: e
            }) => o("redux-action", e))), O && O.getState && r("state", _(O.getState())), i(e)
        },
        S = e => {
            e.onerror = (e, t, n, r, i) => C(i), e.onunhandledrejection = e => C(e.reason)
        },
        j = e => {
            e && (v = e)
        },
        w = e => {
            e && (O = e)
        },
        E = () => function(e) {
            return function(t) {
                return m.push({
                    type: t.type,
                    timestamp: +new Date
                }), e(t)
            }
        };
    !Object(b.a)() && null !== (r = window) && void 0 !== r && null !== (i = r.parent) && void 0 !== i && i.intercomSettings && j(window.parent.intercomSettings.app_id)
}, function(e, t, n) {
    "use strict";
    var r = n(10),
        i = n.n(r),
        o = n(100),
        s = n(11),
        a = n(54),
        c = n(63),
        u = n(3),
        d = n(48),
        l = n(6),
        p = n(80),
        f = n(137),
        b = n(160);
    var h = n(2),
        g = n(30);
    const m = e => {
            let t;
            return (...n) => {
                const r = () => e(...n);
                return t = Promise.resolve(t).then(r, r), t
            }
        },
        v = (e, t, n, r) => {
            let i = 0,
                o = 0;
            return (...s) => {
                const a = g.b.now();
                return a - o >= n && (i = 0, o = a), i++, i <= t ? e(...s) : (Object(h.c)(`rate_limiting.${r}`), Object(h.g)(`rate_limit_check_${r}`, {
                    rate_limited: !0,
                    rate_limit_count: n
                }, !0), Promise.reject("rate_limited_update"))
            }
        };
    var O = n(31),
        y = n(8),
        _ = n(61),
        C = n(15);
    const S = e => {
        if ("rate_limited_update" === e) return null;
        try {
            return e.errors || JSON.parse(e).errors
        } catch (t) {
            Object(C.a)(e), Object(_.c)(e)
        }
    };
    var j = n(42),
        w = n(34),
        E = n(24),
        I = n(9);
    const A = "https://docs.intercom.com/configure-intercom-for-your-product-or-site/staying-secure/enable-identity-verification-on-your-web-product",
        T = {
            IDENTITY_VERIFICATION_READY_WARNING: `Intercom Messenger warning: Identity Verification is set up correctly but not enabled. For details on how to enable it, see ${A}.`,
            IDENTITY_VERIFICATION_FAILURE_WITH_USER_ID_WARNING: `Intercom Messenger warning: Your Identity Verification user_hash is invalid. Check that you are generating the user_hash with your user's user_id and your app's secret key. For more details, see ${A}.`,
            IDENTITY_VERIFICATION_FAILURE_WITH_EMAIL_WARNING: `Intercom Messenger warning: Your Identity Verification user_hash is invalid. Check that you are generating the user_hash with your user's email and your app's secret key. For more details, see ${A}.`
        };
    var R = n(5),
        P = n(22),
        M = n.n(P),
        D = n(12),
        k = n(0);
    n.d(t, "b", (function() {
        return B
    })), n.d(t, "a", (function() {
        return z
    })), n.d(t, "f", (function() {
        return W
    })), n.d(t, "e", (function() {
        return J
    })), n.d(t, "d", (function() {
        return K
    }));
    const N = M()("intercom.actions.user");
    let U, L;
    const x = ((e, t = 6e4) => {
        let n;
        const r = () => {
                n = {}
            },
            i = (...r) => {
                const i = e(...r),
                    o = n[i],
                    s = Date.now();
                return !((e, n) => void 0 === n || e - n > t)(s, o) || (n[i] = s, !1)
            };
        return i.reset = r, r(), i
    })(((e, t, n, r) => {
        const {
            email: i,
            userId: o,
            userHash: s,
            anonymousId: a
        } = e;
        return JSON.stringify(Object.assign({
            encryptedPayload: r
        }, {
            url: t,
            email: i,
            userId: o,
            userHash: s,
            anonymousId: a
        }, n))
    }), 6e4);

    function B(e, t, n, r, u, g, m, v = !1, _, A = "unknown", T, P) {
        return async (M, D) => {
            var k;
            let N, {
                app: B,
                session: H
            } = D();
            if ((!U || L !== n && B && B.features && B.features.singlePageAppRateLimiting) && Y(n), H = t || H, H.sessionId || (H.sessionId = E.a.generateUUID()), M($(H, n, r, u, g, m, T)), !v && x(H, n, r, _)) return null;
            try {
                N = await U(e, D, r, _, A, T)
            } catch (e) {
                const t = S(e);
                if ("403" === (e => e && e[0].code)(t) && P) return Object(C.b)("This domain is not allowed for the Intercom Messenger. Add your domain here: https://app.intercom.com/a/apps/_/messenger"), P(!0), null;
                t && t.find((e => "App Not Found" === e.message)) && Object(C.b)("The App ID in your code snippet is incorrect. Change it to your App ID found in settings to complete installation: http://app.intercom.com/a/apps/_/settings/web");
                M(V(e, ee(e)));
                const n = (e => {
                    const t = S(e);
                    if (!t) return;
                    const n = t.find((e => e.data));
                    if (!n) return;
                    const r = n.data;
                    return {
                        activeSubscription: r.active_subscription,
                        userHashVerified: r.user_hash_verified,
                        secureInstallV2: r.secure_install_v2,
                        messengerEnabledForVisitors: r.messenger_enabled_for_visitors,
                        messengerEnabledForUsers: r.messenger_enabled_for_users
                    }
                })(e);
                return n && M(Object(b.c)(n)), null
            }
            Object(h.n)(N);
            const {
                errors: G,
                installModeConfig: q,
                notificationLinkConversationId: z
            } = N;
            if (q && M(Object(b.c)(q)), G) return null;
            if (Z(N, H, q), X(N), M(F(N)), N.newConversationComposerState && M(Object(l.r)(N.newConversationComposerState)), Object(R.a)() || (M(Object(w.b)()), M(Object(c.a)())), M(Object(p.a)({
                    color: N.app.color,
                    secondaryColor: N.app.secondaryColor
                })), z && M(Object(s.c)(z)), (null === (k = N.unreadConversationIds) || void 0 === k ? void 0 : k.length) > 0) {
                const t = D();
                Object(f.a)(t, N.unreadConversationIds) ? M(Object(l.l)(e, t.app.conversationId)) : M(Object(d.d)(e, "createOrUpdateUser"))
            }
            if (!Object(I.i)() && N.app.features.launcherDiscoveryMode && M(Object(o.e)()), !Object(R.a)()) {
                var W, J, K;
                const {
                    activeTour: e
                } = N, t = null === (W = Object(j.a)(null === (J = window) || void 0 === J || null === (K = J.parent) || void 0 === K ? void 0 : K.location)) || void 0 === W ? void 0 : W.product_tour_id;
                i()(e) || (i()(t) ? M(Object(w.l)(e)) : Object(y.e)(`Tour with id ${e.id} received from ping won't start because there is a tourId in the query params`))
            }
            if (!Object(R.a)()) {
                const {
                    banners: e
                } = N;
                i()(e) || M(Object(a.f)(e))
            }
            if (!Object(R.a)()) {
                var Q, te, ne;
                const {
                    survey: e
                } = N, t = null === (Q = Object(j.a)(null === (te = window) || void 0 === te || null === (ne = te.parent) || void 0 === ne ? void 0 : ne.location)) || void 0 === Q ? void 0 : Q.intercom_survey_id;
                i()(e) || (i()(t) ? M(Object(c.e)(e)) : Object(O.f)(`Survey with id ${e.id} received from ping won't start because there is a Survey in the query params`))
            }
            return N
        }
    }

    function $(e, t, n, r, i, o, s) {
        return {
            type: k.Q,
            session: e,
            url: t,
            customAttributes: n,
            launcherEnabledOverride: r,
            anonymousSessionDuration: i,
            customizationAttributes: o,
            internal: s
        }
    }

    function F(e) {
        return {
            type: k.R,
            user: e
        }
    }

    function V(e, t = !1) {
        return {
            type: k.P,
            error: e,
            isIdentityVerificationError: t
        }
    }

    function H() {
        return {
            type: k.Ob
        }
    }

    function G(e) {
        return {
            type: k.Pb,
            response: e
        }
    }

    function q(e) {
        return {
            type: k.Nb,
            error: e
        }
    }

    function z(e) {
        return {
            type: k.g,
            anonymousSession: e
        }
    }

    function W() {
        return {
            type: k.Dd
        }
    }

    function J() {
        return {
            type: k.Bd
        }
    }

    function K(e, t, n) {
        return (r, i) => {
            const {
                session: o
            } = i();
            if (o) return r({
                type: k.N,
                name: t,
                boundEventMetadata: n
            }), e.sendBeaconEvent(o, t).catch((() => r({
                type: k.O
            })))
        }
    }

    function Y(e) {
        Q(30, 18e5, e)
    }

    function Q(e, t, n) {
        L = n, U = ((e, t, n, r) => m(v(e, t, n, r)))(((e, t, n, r, i, o) => {
            const {
                session: s
            } = t();
            return e.createOrUpdateUser(s, n, void 0, r, i, o, Object(h.l)())
        }), e, t, "user_update")
    }

    function X(e) {
        const t = e.cdasBreachingLimit;
        if (!t.length) return;
        const n = 1 === t.length ? "attribute" : "attributes",
            r = t.join(", ");
        Object(C.b)(`You have reached your CDA limit and we were not able to create or update the following ${n}: ${r}. For more details, see: https://www.intercom.com/help/configure-intercom/customize-intercom-to-be-about-your-users/send-custom-user-attributes-to-intercom`)
    }

    function Z(e, t, n = {}) {
        const {
            userHash: r,
            userId: i,
            email: o
        } = t, {
            secureInstallV2: s,
            secureInstallV3: a
        } = n;
        if (s || a) {
            if (!i && !o) return
        } else if (!r) return;
        const c = function(e, t) {
            if (e.identityVerificationReady) return T.IDENTITY_VERIFICATION_READY_WARNING;
            if (!e.identityVerified && t.userId) return T.IDENTITY_VERIFICATION_FAILURE_WITH_USER_ID_WARNING;
            if (!e.identityVerified && !t.userId) return T.IDENTITY_VERIFICATION_FAILURE_WITH_EMAIL_WARNING;
            return null
        }(e, t);
        c && Object(C.b)(c)
    }

    function ee(e) {
        const t = S(e);
        if (!t) return !1;
        let n = !1;
        return t.forEach((e => {
            -1 !== e.code.indexOf("identity_verification") && (n = !0, Object(C.a)(`Intercom Messenger error: ${e.message} For more details, see ${A}.`))
        })), n
    }
    t.c = {
        createOrUpdateUser: B,
        createOrUpdateUserRequest: $,
        createOrUpdateUserSuccess: F,
        createOrUpdateUserFailure: V,
        sendMessengerOpen: function(e) {
            return async (t, n) => {
                const r = n(),
                    i = Object(D.f)(r),
                    {
                        session: o
                    } = r;
                let s;
                t(H());
                try {
                    s = await e.sendMessengerOpen(o, i)
                } catch (e) {
                    return N("Request to messenger open failed", e), t(q(e)), null
                }
                return t(G(s)), s
            }
        },
        messengerOpenRequestSent: H,
        messengerOpenRequestSuccess: G,
        messengerOpenRequestFailed: q,
        destroySession: function(e = !0) {
            return {
                type: k.X,
                clearCookies: e
            }
        },
        anonymousSessionChanged: z,
        userIsPresent: W,
        userIsAbsent: J,
        createEvent: function(e, t, n) {
            return (r, i) => {
                const {
                    session: o
                } = i();
                if (o) return r({
                    type: k.N,
                    name: t,
                    metadata: n
                }), e.createEvent(o, t, n).then((t => {
                    const {
                        banner: n,
                        customBot: i
                    } = t;
                    return Object(R.a)() || n && r(Object(a.f)([n])), i && r(Object(l.o)(e, Object(u.a)(i))), t
                })).catch((() => r({
                    type: k.O
                })))
            }
        },
        triggerBoundEvent: K,
        setupCreateOrUpdateUserRateLimiting: Q,
        setupDefaultCreateOrUpdateUserRateLimiting: Y,
        isDuplicateCreateOrUpdateUserRequest: x,
        checkCdasBreachingLimit: X,
        checkIdentityVerificationInstall: Z,
        checkIdentityVerificationError: ee
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "e", (function() {
        return l
    })), n.d(t, "f", (function() {
        return p
    })), n.d(t, "b", (function() {
        return b
    })), n.d(t, "h", (function() {
        return h
    })), n.d(t, "g", (function() {
        return g
    })), n.d(t, "c", (function() {
        return m
    })), n.d(t, "d", (function() {
        return v
    })), n.d(t, "a", (function() {
        return O
    }));
    var r = n(10),
        i = n.n(r),
        o = n(3),
        s = n(84),
        a = n(0),
        c = n(31),
        u = n(51),
        d = n(42);

    function l(e) {
        return {
            type: a.jc,
            survey: e
        }
    }

    function p(e, t) {
        return {
            type: a.mc,
            questionId: e,
            response: t
        }
    }

    function f(e, t, n) {
        return {
            type: a.nc,
            surveyId: e,
            stepId: t,
            validationResult: n
        }
    }

    function b(e) {
        return {
            type: a.o,
            questionId: e
        }
    }

    function h(e) {
        return (t, n) => {
            var r;
            const i = n(),
                o = Object(s.b)(i),
                a = Object(s.c)(i),
                d = null == a || null === (r = a.questions) || void 0 === r ? void 0 : r.find((t => t.id === e));
            if (!o || !a || !d) return;
            const {
                failedValidation: l,
                validationError: p
            } = Object(c.g)(d.response, d.data);
            l && p !== u.d.required && t(f(o.id, a.id, {
                [d.id]: p
            }))
        }
    }

    function g(e, t, n) {
        return (r, u) => {
            const d = u(),
                l = Object(s.c)(d),
                p = {};
            null == l || l.questions.forEach((e => {
                const {
                    failedValidation: t,
                    validationError: n
                } = Object(c.g)(e.response, e.data);
                t && (p[e.id] = n)
            })), r(f(e, n, p)), i()(p) && r(function(e, t, n) {
                return async (r, i) => {
                    const c = i(),
                        u = Object(s.a)(c),
                        d = await o.d.submitSurvey(c.session, e, t, n, u),
                        {
                            complete: l,
                            next_step: p,
                            survey_id: f
                        } = d;
                    f === e && r(l && !p ? {
                        type: a.z
                    } : function(e, t, n) {
                        return {
                            type: a.kc,
                            surveyId: e,
                            surveyStep: t,
                            completed: n
                        }
                    }(e, Object(o.c)(p), l))
                }
            }(e, t, n))
        }
    }

    function m(e, t) {
        return (n, r) => {
            const i = r(),
                c = Object(s.b)(i);
            if (n(function(e) {
                    return {
                        type: a.eb,
                        surveyId: e
                    }
                }(e)), null != c && c.completed) return;
            const {
                session: u
            } = i;
            o.d.dismissSurvey(u, e, t)
        }
    }

    function v(e) {
        return async (t, n) => {
            Object(c.f)(`Will attempt to fetch survey ruleset with id ${e}`);
            const {
                session: r
            } = n();
            t(l(await o.d.fetchSurvey({
                session: r,
                rulesetId: e
            })))
        }
    }

    function O() {
        return e => {
            var t, n;
            Object(c.f)("Checking for survey in URL");
            const r = y(null === (t = window) || void 0 === t || null === (n = t.parent) || void 0 === n ? void 0 : n.location);
            r ? (Object(c.f)(`Survey ruleset id ${r} attached in the url`), e(v(r))) : Object(c.f)("No attached survey found in the URL")
        }
    }
    const y = e => {
        if (!e) return;
        let t = Object(d.a)(e).intercom_survey_id;
        if (!t) {
            const n = e.toString();
            if (!n) return;
            const r = n.match(/intercom_survey_id=(\d+)/i);
            r && (t = r[1])
        }
        return t
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return i
    }));
    var r = n(5);
    const i = () => !Object(r.a)() && window.parent && window.parent.intercomSettings && "tx2p130c" === window.parent.intercomSettings.app_id
}, , function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
        return u
    })), n.d(t, "h", (function() {
        return d
    })), n.d(t, "l", (function() {
        return l
    })), n.d(t, "f", (function() {
        return p
    })), n.d(t, "j", (function() {
        return h
    })), n.d(t, "k", (function() {
        return v
    })), n.d(t, "a", (function() {
        return y
    })), n.d(t, "e", (function() {
        return m
    })), n.d(t, "g", (function() {
        return b
    })), n.d(t, "b", (function() {
        return g
    })), n.d(t, "i", (function() {
        return O
    })), n.d(t, "d", (function() {
        return a
    }));
    var r = n(1),
        i = n(231),
        o = n(12),
        s = n(29);
    const a = e => e.homeScreen,
        c = (e, t) => e.some((e => e.slotType === t)),
        u = Object(r.createSelector)(a, (({
            matchedSlots: e = []
        } = {}) => c(e, "help_center"))),
        d = Object(r.createSelector)(a, (({
            fetchedSlots: e = []
        } = {}) => c(e, "help_center"))),
        l = Object(r.createSelector)(a, (({
            matchedSlots: e = []
        }) => c(e, "help_center") || c(e, "messenger_app"))),
        p = Object(r.createSelector)([d, o.p, o.b], ((e, t, n) => (!e || !t) && n)),
        f = Object(r.createSelector)(a, (({
            fetchedSlots: e = []
        }) => 0 === e.findIndex((e => "new_conversation_card" === e.slotType)))),
        b = Object(r.createSelector)([i.a], ((e = []) => e.length > 0)),
        h = Object(r.createSelector)([b, f], ((e, t) => !!e || !t)),
        g = Object(r.createSelector)([s.a, e => e.homeScreen.hasMoreConversations], ((e, t) => e.length > 0 || t)),
        m = Object(r.createSelector)([b, g], ((e, t) => !e && t)),
        v = o.o,
        O = Object(r.createSelector)([b, p, g], ((e, t, n) => !e && !t && n)),
        y = Object(r.createSelector)(a, (({
            articleSuggestions: e = []
        } = {}) => e))
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return a
    }));
    var r = n(1);
    const i = ["left", "right"],
        o = e => Math.max(e || 20, 20),
        s = e => (e => i.indexOf(e) >= 0)(e) ? e : "right",
        a = Object(r.createSelector)((e => e.app), (e => e.customizationOverrides), ((e, t = {}) => {
            const {
                alignment: n,
                horizontalPadding: r,
                verticalPadding: i,
                color: a,
                secondaryColor: c
            } = e, {
                alignment: u,
                horizontalPadding: d,
                verticalPadding: l,
                color: p,
                secondaryColor: f
            } = t;
            return {
                alignment: s(u || n),
                horizontalPadding: o(d || r),
                verticalPadding: o(l || i),
                color: p || a,
                secondaryColor: f || c
            }
        }));
    t.b = a
}, , , , , , function(e, t, n) {
    "use strict";
    var r = n(1),
        i = n(29),
        o = n(7);
    const s = Object(r.createSelector)(i.a, (e => e.filter((e => {
        return !e.read && "whatsapp" !== e.currentChannel && !e.forceSnippet && (1 === (t = e).parts.length && "full" === t.parts[0].notificationType || Object(o.i)(e)) && "pointer" !== e.messageType && !Object(o.n)(e) && !e.preventEndUserReplies;
        var t
    }))));
    t.a = Object(r.createSelector)((e => {
        const {
            conversations: {
                byId: t
            },
            message: {
                conversationId: n
            }
        } = e;
        return t[n]
    }), s, ((e, t) => {
        return n = t, void 0 === (r = e) || ((e, t) => void 0 !== e.find((e => e.id === t.id)))(n, r) || Object(o.n)(r) ? n : n.concat(r);
        var n, r
    }))
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return i
    })), n.d(t, "a", (function() {
        return o
    })), n.d(t, "c", (function() {
        return s
    }));
    var r = n(0);

    function i(e, t) {
        return {
            type: r.Wb,
            conversationId: e,
            partId: t
        }
    }

    function o() {
        return {
            type: r.u
        }
    }

    function s(e, t) {
        return {
            type: r.lc,
            conversationId: e,
            partId: t
        }
    }
}, , , , , function(e, t, n) {
    "use strict";
    t.a = e => Object.keys(e).map((t => e[t]))
}, function(e, t, n) {
    "use strict";
    const r = 1 / 12.92;

    function i(e) {
        return Math.pow((e + .055) / 1.055, 2.4)
    }

    function o(e) {
        const t = e[0] / 255,
            n = e[1] / 255,
            o = e[2] / 255;
        return .2126 * (t <= .03928 ? t * r : i(t)) + .7152 * (n <= .03928 ? n * r : i(n)) + .0722 * (o <= .03928 ? o * r : i(o))
    }

    function s(e) {
        let t = 255;
        8 === (e = e.replace(/^#/, "")).length && (t = parseInt(e.slice(6, 8), 16), e = e.substring(0, 6)), 4 === e.length && (t = parseInt(e.slice(3, 4).repeat(2), 16), e = e.substring(0, 3)), 3 === e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
        const n = parseInt(e, 16);
        return [n >> 16, n >> 8 & 255, 255 & n, t]
    }

    function a(e, t) {
        return function(e, t) {
            return (Math.max(e, t) + .05) / (Math.min(e, t) + .05)
        }(o(e), o(t))
    }

    function c(e, t) {
        return a(s(e), s(t))
    }
    var u = n(101),
        d = n(0);
    n.d(t, "b", (function() {
        return p
    })), n.d(t, "a", (function() {
        return f
    }));
    const l = (e, t, n, r) => (c(t[r], e) >= n ? r : null) || Object.keys(t).find((r => c(t[r], e) >= n)) || r,
        p = e => ({
            type: d.Oc,
            tabNavigation: e
        }),
        f = ({
            color: e,
            secondaryColor: t
        }) => ({
            type: d.Fc,
            accessibilityTheme: l(e, u.a, 2, "default"),
            secondaryAccessibilityTheme: l(t, u.a, 2, "light")
        })
}, , function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
        return r
    })), n.d(t, "d", (function() {
        return i
    })), n.d(t, "e", (function() {
        return o
    })), n.d(t, "a", (function() {
        return s
    })), n.d(t, "h", (function() {
        return a
    })), n.d(t, "g", (function() {
        return c
    })), n.d(t, "b", (function() {
        return u
    })), n.d(t, "f", (function() {
        return d
    })), n.d(t, "i", (function() {
        return l
    }));
    const r = "send-data-to-messenger",
        i = "send-data-to-sheet",
        o = "set-iframe-src",
        s = "close",
        a = "submit-sheet",
        c = "start-navigation",
        u = "finish-navigation",
        d = "set-title";

    function l(e, t, n) {
        return {
            intercomSheet: {
                type: e,
                payload: t,
                meta: {
                    proxy: n
                }
            }
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return d
    }));
    var r = n(5),
        i = n(13),
        o = n(0);

    function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function a(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? s(Object(n), !0).forEach((function(t) {
                c(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const u = (() => {
        var e, t, n;
        const i = "composer-suggestions-disabled-at";
        if (Object(r.a)()) return i;
        const o = null === (e = window) || void 0 === e || null === (t = e.parent) || void 0 === t || null === (n = t.intercomSettings) || void 0 === n ? void 0 : n.app_id;
        return o ? `${o}-${i}` : i
    })();
    const d = {
        loading: !1,
        isViewed: !1,
        isDismissed: function() {
            const e = parseInt(i.a.get(u));
            return !!e && Date.now() - e < 2592e6
        }() || !1,
        suggestions: [],
        prompt: [],
        priority: 0
    };
    t.a = function(e = d, t) {
        switch (t.type) {
            case o.B:
                return "" === t.composerContent ? a(a({}, e), {}, {
                    isViewed: !1
                }) : e;
            case o.Gc:
                {
                    var n, r;
                    const {
                        priority: i
                    } = t,
                    o = e.isViewed || ((null == t || null === (n = t.composerSuggestions) || void 0 === n || null === (r = n.suggestions) || void 0 === r ? void 0 : r.length) || 0) > 0;
                    return (i || 0) < ((null == e ? void 0 : e.priority) || 0) ? e : t.composerSuggestions ? a(a(a({}, e), t.composerSuggestions), {}, {
                        priority: i,
                        loading: !1,
                        isViewed: o
                    }) : a(a({}, d), {}, {
                        isViewed: e.isViewed,
                        isDismissed: e.isDismissed,
                        priority: i
                    })
                }
            case o.Ic:
                return a(a({}, e), {}, {
                    loading: t.loadingStatus
                });
            case o.Hc:
                return s = Date.now(), i.a.set(u, s), a(a({}, e), {}, {
                    isDismissed: !0
                });
            default:
                return e
        }
        var s
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return s
    })), n.d(t, "a", (function() {
        return a
    })), n.d(t, "c", (function() {
        return c
    }));
    var r = n(10),
        i = n.n(r),
        o = n(1);
    const s = Object(o.createSelector)([e => e.survey], (e => {
            if (!i()(e)) return e
        })),
        a = Object(o.createSelector)(s, (e => {
            if (!e) return [];
            const t = [];
            return e.steps.forEach((e => {
                e.questions.forEach((e => {
                    t.push({
                        question_id: e.id,
                        response: e.response
                    })
                }))
            })), t
        })),
        c = Object(o.createSelector)(s, (e => {
            if (!e) return;
            const {
                activeStepId: t
            } = e;
            return e.steps.find((e => e.id === t))
        }))
}, function(e, t, n) {
    "use strict";
    var r = n(32),
        i = n.n(r),
        o = n(138),
        s = n(11),
        a = n(52),
        c = n(6),
        u = n(12);
    var d = n(24);
    const l = {};
    var p = n(22),
        f = n.n(p),
        b = n(0);
    n.d(t, "a", (function() {
        return O
    })), n.d(t, "b", (function() {
        return y
    })), n.d(t, "c", (function() {
        return _
    })), n.d(t, "d", (function() {
        return C
    })), n.d(t, "e", (function() {
        return S
    }));
    const h = f()("intercom.actions.triggers"),
        g = {
            "open-messenger-loading-view": s.h
        },
        m = {
            "show-conversation": function(e, t) {
                return async (n, r) => {
                    if ("conversation" !== Object(u.f)(r())) return await n(Object(c.l)(e, t.id)), n(Object(a.a)(t.id, !0))
                }
            }
        },
        v = {};

    function O(e, t) {
        return n => {
            n(function(e) {
                    return {
                        type: b.e,
                        trigger: e
                    }
                }(e)),
                function(e, t, n) {
                    try {
                        const {
                            selector: r,
                            event: o,
                            id: s
                        } = e, a = window.parent.document.querySelector(r), c = i()((() => function(e, t, n) {
                            h(`Handling event (triggerId=${e})`), t(_(e, n))
                        }(s, t, n)), 3e3, {
                            leading: !0,
                            trailing: !1
                        }), u = () => {
                            h(`${o} event fired from ${r} (triggerId=${s})`), c()
                        };
                        null == a || a.addEventListener(o, u), v[s] = {
                            targetElement: a,
                            boundHandler: u
                        }, h(`Attached ${o} event handler to ${r}`)
                    } catch (e) {
                        h(`Couldnt attach the messenger trigger to the DOM due to e=${e}`)
                    }
                }(e, n, t)
        }
    }

    function y(e) {
        return (t, n) => {
            ! function(e, t) {
                try {
                    const {
                        selector: n,
                        event: r
                    } = Object(o.c)(e)(t), {
                        targetElement: i,
                        boundHandler: s
                    } = v[e];
                    null == i || i.removeEventListener(r, s), h(`Detached ${r} event handler from ${n}`)
                } catch (e) {
                    h(`Couldn't detach the messenger trigger to the DOM due to e=${e}`)
                } finally {
                    delete v[e]
                }
            }(e, n()), t(function(e) {
                return {
                    type: b.qc,
                    triggerId: e
                }
            }(e))
        }
    }

    function _(e, t) {
        return async (n, r) => {
            const i = Object(o.c)(e);
            try {
                i(r())
            } catch (t) {
                return void h(`Rejected trigger=${e} as it's no longer present in the store`)
            }
            try {
                await async function(e) {
                    return new Promise((t => {
                        if (l[e]) throw new Error(`Multiple events of type=${e} fired`);
                        l[e] = !0, setTimeout((async () => {
                            l[e] = !1, t()
                        }), 0)
                    }))
                }("messenger-trigger-fire")
            } catch (t) {
                return void h(`Rejected trigger=${e} as multiple triggers were fired in same tick`)
            }
            try {
                const o = r(),
                    {
                        session: s
                    } = o,
                    a = i(o),
                    u = Object(d.b)(),
                    l = {
                        clientId: u,
                        createdAt: new Date
                    };
                n(function(e) {
                    return {
                        type: b.a,
                        triggerId: e
                    }
                }(e)), n(function(e) {
                    return t => {
                        const n = g[e.preAction];
                        if ("function" == typeof n) return t(n());
                        throw `Invalid PRE ACTION type for trigger=${e.id}`
                    }
                }(a)), n(Object(c.h)(l, !1));
                const p = await t.fireTrigger(s, {
                    triggerId: String(e),
                    clientAssignedUUID: u
                });
                n(j(t, p)), n({
                    type: b.V
                })
            } catch (e) {
                n({
                    type: b.b
                }), n(Object(c.g)(null)), h(`Couldnt fire messenger trigger due to e=${e}`)
            }
        }
    }

    function C(e, t) {
        return async (n, r) => {
            const i = r(),
                {
                    session: o
                } = i,
                s = await e.outboundPreview(o, t);
            n(j(e, s))
        }
    }

    function S(e) {
        return (t, n) => {
            try {
                const r = n();
                t(_(Object(o.a)(r).id, e))
            } catch (e) {
                h("Couldnt retry firing messenger trigger")
            }
        }
    }

    function j(e, t) {
        return n => {
            const {
                action: r,
                data: i
            } = t, o = m[r];
            if (o) return n(o(e, i));
            throw `Invalid POST ACTION type for trigger_action=${r}`
        }
    }
}, , function(e, t, n) {
    "use strict";
    var r = n(18),
        i = n(5);
    n.d(t, "a", (function() {
        return s
    })), n.d(t, "c", (function() {
        return a
    })), n.d(t, "b", (function() {
        return c
    })), n.d(t, "d", (function() {
        return l
    }));
    const o = [],
        s = e => {
            u(e);
            const t = document.createElement("meta");
            t.id = "intercom-viewport-meta", t.name = "viewport", t.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0", e.document.getElementsByTagName("head")[0].appendChild(t)
        },
        a = e => {
            const t = e.document.getElementById("intercom-viewport-meta");
            t && (t.parentNode.removeChild(t), d(e))
        },
        c = () => {
            const e = Object(r.c)();
            return e.innerWidth <= 450 || e.innerWidth <= 900 && e.innerHeight <= 450
        },
        u = e => {
            [].slice.call(e.document.getElementsByTagName("meta")).forEach((e => {
                "viewport" === e.name && (o.push(e.cloneNode()), e.parentNode.removeChild(e))
            }))
        },
        d = e => {
            const t = o.length;
            for (let n = 0; n < t; n++) e.document.getElementsByTagName("head")[0].appendChild(o.pop())
        },
        l = () => {
            if (!Object(i.a)()) try {
                c() && !window.parent.navigator.standalone && window.parent.scrollTo(0, 0)
            } catch (e) {}
        }
}, function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
        return o
    })), n.d(t, "g", (function() {
        return s
    })), n.d(t, "e", (function() {
        return a
    })), n.d(t, "h", (function() {
        return c
    })), n.d(t, "i", (function() {
        return u
    })), n.d(t, "f", (function() {
        return d
    })), n.d(t, "a", (function() {
        return l
    })), n.d(t, "d", (function() {
        return p
    })), n.d(t, "b", (function() {
        return f
    }));
    var r = n(1);
    const i = e => e.browseMode,
        o = Object(r.createSelector)(i, (({
            isOpen: e
        }) => e)),
        s = Object(r.createSelector)(i, (({
            routedToNewConversation: e
        }) => e)),
        a = e => {
            var t;
            return null === (t = e.browseMode) || void 0 === t ? void 0 : t.phrase
        },
        c = e => {
            var t;
            return null === (t = e.browseMode) || void 0 === t ? void 0 : t.searchedPhrase
        },
        u = (Object(r.createSelector)(i, (e => e.articleHistory || [])), Object(r.createSelector)(i, (e => e.skipOpenAnimation))),
        d = Object(r.createSelector)(o, s, u, (e => e.user), ((e, t, n, r) => ({
            isOpen: e,
            transitioningToNewConversation: t,
            skipOpenAnimation: n,
            user: r
        }))),
        l = Object(r.createSelector)(i, (({
            hasViewedAnArticle: e
        }) => e)),
        p = Object(r.createSelector)(i, (({
            phrase: e,
            hideResultsWithDelay: t,
            searchResults: n
        }) => (e || t) && 0 === n.length)),
        f = Object(r.createSelector)(i, (({
            closeTransitionEnded: e
        } = {}) => !e))
}, , , , , , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return o
    })), n.d(t, "b", (function() {
        return s
    }));
    var r = n(18);
    const i = ["password", "passwd", "secret", "api_key", "apikey", "access_token", "auth_token", "credentials", "mysql_pwd", "stripetoken"],
        o = () => {
            var e;
            return null === (e = Object(r.d)()) || void 0 === e ? void 0 : e.host
        },
        s = e => e ? (i.forEach((t => {
            e = a(e, t, "***")
        })), e) : e,
        a = (e, t, n) => {
            const r = new RegExp("([?&])" + t + "=.*?(&|$)", "i");
            return e.match(r) ? e.replace(r, "$1" + t + "=" + n + "$2") : e
        }
}, function(e, t, n) {
    "use strict";
    n.d(t, "e", (function() {
        return s
    })), n.d(t, "b", (function() {
        return a
    })), n.d(t, "c", (function() {
        return c
    })), n.d(t, "d", (function() {
        return d
    })), n.d(t, "a", (function() {
        return l
    }));
    var r = n(0);
    let i, o;

    function s() {
        return (e, t) => {
            const {
                launcherDiscoveryMode: {
                    hasDiscoveredLauncher: n,
                    isLauncherDiscoveryModeOpening: i,
                    isLauncherDiscoveryModeClosing: o
                }
            } = t();
            n || i || o || (setTimeout((() => {
                e({
                    type: r.Vb
                })
            }), 6e3), u(e))
        }
    }

    function a() {
        i && clearTimeout(i), o && clearTimeout(o)
    }

    function c() {
        return e => {
            u(e)
        }
    }
    const u = e => {
        i = setTimeout((() => e({
            type: r.t
        })), 9500), o = setTimeout((() => e(l())), 10200)
    };

    function d() {
        return {
            type: r.Qb
        }
    }

    function l() {
        return {
            type: r.Y
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    }));
    const r = {
        default: "#3b99fc",
        dark: "#38373e",
        light: "#cdcecd"
    }
}, , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return u
    })), n.d(t, "b", (function() {
        return d
    })), n.d(t, "c", (function() {
        return l
    }));
    var r = n(5),
        i = n(9),
        o = n(26);
    let s = {},
        a = {};
    const c = (e, t) => ({
            get: t => {
                const n = e[`intercom.${t}`];
                return void 0 === n ? null : n
            },
            set: (n, r) => {
                Object(o.l)(`intercom.${n}`, r, t), e[`intercom.${n}`] = r
            },
            remove: e => Object(o.j)(`intercom.${e}`, t),
            clear: () => {}
        }),
        u = () => {
            Object(r.a)() && Object(o.g)((e => {
                a = i.a.hasLocalStorageSupport() ? e.sessionStorage : {}, s = i.a.hasLocalStorageSupport() ? e.localStorage : {}
            }))
        },
        d = () => c(s, "localStorage"),
        l = () => c(a, "sessionStorage")
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return a
    }));
    var r = n(159),
        i = n.n(r),
        o = n(246),
        s = n.n(o);
    const a = e => {
        if (!i()(e)) return e;
        const t = {};
        return Object.keys(e).forEach((n => {
            let r = a(e[n]);
            Array.isArray(r) && (r = r.map((e => a(e)))), t[s()(n)] = r
        })), t
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return s
    })), n.d(t, "b", (function() {
        return a
    })), n.d(t, "c", (function() {
        return c
    }));
    var r = n(5),
        i = n(26);
    let o = "";
    const s = () => Object(r.a)() ? o : parent.document.cookie,
        a = e => o = e,
        c = e => (Object(r.a)() ? (Object(i.m)(e), a(e)) : parent.document.cookie = e, e)
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return d
    })), n.d(t, "a", (function() {
        return l
    }));
    var r = n(22),
        i = n.n(r),
        o = n(6),
        s = n(24),
        a = n(43),
        c = n(0);
    const u = i()("intercom.actions.predictive-answers");

    function d(e, t, n = !1) {
        return async (r, i) => {
            try {
                const c = void 0,
                    u = i(),
                    {
                        session: d,
                        newConversation: p,
                        user: f
                    } = u,
                    b = Object(s.b)(),
                    h = {
                        clientId: b,
                        body: Object(a.c)(t.text),
                        createdAt: new Date,
                        composerSuggestionItem: t
                    };
                r(l(null)), r(Object(o.h)(h, n));
                const g = await e.fireComposerSuggestion(d, {
                    conversationId: c,
                    suggestion: t,
                    clientId: b,
                    botIntro: p ? p.botIntroId : null,
                    articleUrl: p ? p.articleUrl : null,
                    resolutionBotBehaviorVersionId: f ? f.resolutionBotBehaviorVersionId : null
                });
                r(Object(o.i)(g, null, null, Date.now(), "predictive_answer"))
            } catch (e) {
                r(Object(o.g)(null)), u(`Couldnt start conversation from suggestion due to e=${e}`)
            }
        }
    }

    function l(e) {
        return {
            type: c.Lc,
            predictiveAnswersSuggestions: e
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(0);

    function i(e, t) {
        return async (n, i) => {
            const o = i(),
                {
                    session: s
                } = o;
            let a;
            if (!t.payload || !t.payload.conversationId) throw new Error("conversationId needs to be provided as a parameter");
            a = t.payload.conversationId;
            try {
                n({
                    type: r.jd,
                    payload: {
                        timestamp: Date.now()
                    }
                });
                n(function(e) {
                    return {
                        type: r.kd,
                        payload: e,
                        conversation: e
                    }
                }(await e.triggerTransitions(s, a, t)))
            } catch (e) {
                n((c = e, {
                    type: r.id,
                    error: !0,
                    payload: new Error((c || "An error occured when triggering Operator transition.").toString())
                }))
            }
            var c
        }
    }
    var o = n(3),
        s = n(2),
        a = n(20),
        c = n(88),
        u = n(165);

    function d(e) {
        return {
            type: r.fc,
            article: e
        }
    }

    function l(e, t, n = !1, i = !1, o = null, s = "", a) {
        return {
            type: r.Rb,
            articleId: e,
            fromBrowseMode: n,
            metricMetadata: t,
            conversationId: o,
            forceTransitionComplete: i,
            hash: s,
            fromHomeScreenSuggestions: a
        }
    }

    function p(e, t, n = !1) {
        return async (i, s) => {
            const {
                session: a,
                article: {
                    viewStack: c
                }
            } = s();
            if (e === c[c.length - 1]) return;
            const u = await o.d.getArticle(a, e, null, !1);
            u && (i({
                type: r.gb
            }), i(d(u)), i(l(e, t, !1, !0, null, "", n)))
        }
    }

    function f(e, t, n = !1) {
        return async (t, r) => {
            const {
                session: i,
                app: s
            } = r(), {
                conversationId: a
            } = s;
            return t(d(await o.d.getArticle(i, e, a, n)))
        }
    }

    function b(e, t, n = !1, r = !1, i = !1) {
        return async (o, s) => {
            const {
                app: a
            } = s(), {
                conversationId: c
            } = a;
            await o(f(e, 0, n)), o(l(e, t, n, r, c, "", i))
        }
    }

    function h(e) {
        return async (t, n) => {
            const {
                session: r
            } = n(), i = await o.d.getArticleByURL(r, e.url);
            await t(d(i)), await t({
                type: "CHANGE_ARTICLE_LOCALE",
                articleId: i.id,
                articleLocale: e
            })
        }
    }

    function g(e) {
        return (t, n) => {
            const {
                session: r
            } = n(), i = e.split("#")[1] || "";
            return o.d.getArticleByURL(r, e).then((e => {
                t(d(e)), t(l(e.id, null, !0, !0, null, i))
            })).catch((() => {
                const t = Object(u.b)().createElement("a");
                t.target = "_blank", t.href = e, t.click()
            }))
        }
    }

    function m(e) {
        return (t, n) => {
            const {
                user: i,
                article: o
            } = n(), c = e ? "expanded" : "collapsed";
            Object(s.h)(i, c, a.d, a.m, "messenger", {
                article_id: null == o ? void 0 : o.activeArticleId
            }), t({
                type: r.fd,
                isExpanded: e
            })
        }
    }

    function v() {
        return {
            type: r.hb
        }
    }

    function O() {
        return {
            type: r.h
        }
    }

    function y(e) {
        return (t, n) => {
            const o = n(),
                u = Object(c.c)(o);
            t({
                type: r.q,
                closedAt: new Date
            });
            const {
                conversationId: d
            } = o.app;
            if (u) {
                const {
                    user: e,
                    article: t
                } = o;
                Object(s.h)(e, "closed", a.d, a.m, "messenger", {
                    article_id: null == t ? void 0 : t.activeArticleId
                })
            } else d && t(i(e, {
                type: "closed_article",
                payload: {
                    conversationId: d
                }
            }))
        }
    }

    function _(e, t, n, i) {
        return (o, c) => {
            const {
                user: u
            } = c();
            return Object(s.h)(u, "clicked", a.i, a.m, "messenger", {
                reaction_index: n
            }), o(function(e, t, n, i, o = "help_center", s = null) {
                return (a, c) => {
                    a({
                        type: r.E,
                        articleId: t,
                        reactionIndex: n
                    });
                    const {
                        session: u
                    } = c(), d = !1;
                    return e.createArticleReaction(u, t, n, d, i, o, s)
                }
            }(e, t, n, i, "messenger", "search_browse"))
        }
    }

    function C() {
        return {
            type: r.i
        }
    }
    n.d(t, "i", (function() {
        return l
    })), n.d(t, "g", (function() {
        return p
    })), n.d(t, "h", (function() {
        return f
    })), n.d(t, "f", (function() {
        return b
    })), n.d(t, "j", (function() {
        return h
    })), n.d(t, "k", (function() {
        return g
    })), n.d(t, "l", (function() {
        return m
    })), n.d(t, "e", (function() {
        return v
    })), n.d(t, "a", (function() {
        return O
    })), n.d(t, "c", (function() {
        return y
    })), n.d(t, "d", (function() {
        return _
    })), n.d(t, "b", (function() {
        return C
    }))
}, function(e, t, n) {
    "use strict";
    var r = n(10),
        i = n.n(r),
        o = n(1),
        s = n(13),
        a = n(228);
    t.a = Object(o.createSelector)([e => e.app, e => e.user, e => e.launcher, a.a], ((e, t, n, r) => !r && function(e, t) {
        const {
            inboundMessages: n,
            outboundMessages: r,
            anonymousInboundMessages: i
        } = e.features;
        return "user" === t.role ? n || r : i
    }(e, t) && function(e) {
        switch (e.launcherEnabledOverride) {
            case "show":
                return !0;
            case "hide":
                return !1;
            default:
                return e.isLauncherEnabled
        }
    }(n) && ! function() {
        const e = s.b.get("intercom-snippet__intersection-mode");
        return !(i()(e) || -1 !== ["inbound-custom-bot-preview", "outbound-custom-bot-preview"].indexOf(e))
    }()))
}, , function(e, t, n) {
    "use strict";
    t.a = e => "participant_added" === e || "participant_removed" === e || "article_feedback_requested" === e || "temporary_expectations" === e
}, function(e, t, n) {
    "use strict";
    let r, i;
    n.d(t, "a", (function() {
        return s
    })), n.d(t, "f", (function() {
        return a
    })), n.d(t, "e", (function() {
        return c
    })), n.d(t, "c", (function() {
        return u
    })), n.d(t, "b", (function() {
        return d
    })), n.d(t, "d", (function() {
        return l
    }));
    let o = !1;
    const s = () => r,
        a = e => r = e,
        c = e => i = e,
        u = () => i,
        d = () => !o,
        l = e => o = e
}, , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var r = n(2),
        i = n(5);
    t.a = ({
        promise: e,
        maxRetries: t = 3
    }) => {
        let n = 0;
        const o = Object(i.a)() ? window.requestAnimationFrame : window.parent.requestAnimationFrame,
            s = (i, a) => {
                e().then((e => i(e)), (e => {
                    n < t && o ? (n += 1, window.setTimeout((() => o((() => s(i, a)))), 1e3 * n)) : (Object(r.g)("dynamicImportCdnError", {
                        message: e && e.message
                    }), a(e))
                }))
            };
        return new Promise(((e, t) => s(e, t)))
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "d", (function() {
        return o
    })), n.d(t, "c", (function() {
        return s
    })), n.d(t, "e", (function() {
        return a
    })), n.d(t, "a", (function() {
        return c
    })), n.d(t, "b", (function() {
        return u
    })), n.d(t, "g", (function() {
        return d
    })), n.d(t, "f", (function() {
        return l
    })), n.d(t, "h", (function() {
        return f
    }));
    var r = n(1);
    const i = e => e.messengerSheet,
        o = (Object(r.createSelector)(i, (e => e.isSheetsDataLoading)), Object(r.createSelector)(i, (e => e.isSheetsDataLoaded))),
        s = Object(r.createSelector)(i, (e => e.isProxyLoaded)),
        a = Object(r.createSelector)(i, (e => e.sheetTitle)),
        c = Object(r.createSelector)(i, (e => e.isNavigating)),
        u = Object(r.createSelector)(i, (e => e.isOpen)),
        d = Object(r.createSelector)(i, (e => e.sourceCard)),
        l = Object(r.createSelector)(i, (e => e.url)),
        p = Object(r.createSelector)(i, (e => e.data)),
        f = Object(r.createSelector)(p, (e => JSON.stringify(e)))
}, , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return i
    })), n.d(t, "b", (function() {
        return o
    }));
    const r = e => {
            const t = function(t) {
                    return e[t]
                },
                n = "(?:" + Object.keys(e).join("|") + ")",
                r = RegExp(n),
                i = RegExp(n, "g");
            return function(e) {
                return e = null == e ? "" : "" + e, r.test(e) ? e.replace(i, t) : e
            }
        },
        i = r({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        }),
        o = r({
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#x27;": "'",
            "&#x60;": "`",
            "&#39;": "'"
        })
}, function(e, t, n) {
    "use strict";
    var r = n(1);
    t.a = Object(r.createSelector)((e => e.openInboundConversationIds), (e => (null == e ? void 0 : e.length) > 0))
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return i
    })), n.d(t, "a", (function() {
        return o
    }));
    var r = n(0);

    function i(e) {
        return {
            type: r.M,
            customizationAttributes: e
        }
    }

    function o(e) {
        return {
            type: r.F,
            customizationAttributes: e
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    }));
    const r = {
        TOUR: 0,
        BANNER_VIEW: 11
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return o
    }));
    var r = n(0);
    let i;

    function o(e, t) {
        return n => {
            const o = {
                type: r.Pc,
                payload: {
                    alertType: e,
                    alertPayload: t
                }
            };
            n(o), i && clearTimeout(i), i = setTimeout((() => {
                n({
                    type: r.p
                })
            }), 5e3)
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return a
    })), n.d(t, "a", (function() {
        return c
    }));
    var r = n(6),
        i = n(48),
        o = n(12),
        s = n(0);

    function a(e) {
        return (t, n) => {
            t(u());
            const {
                session: o
            } = n();
            return e.getUnreadConversations(o).then((o => {
                ! function(e, t, n, o) {
                    n(d(e));
                    const {
                        unreadConversationIds: s
                    } = e;
                    s.length > 0 && n(Object(i.d)(t, "handleUnreadConversations"));
                    const a = o(),
                        {
                            conversationId: u
                        } = a.app;
                    c(a, s) && n(Object(r.l)(t, u))
                }(o, e, t, n)
            })).catch((() => {}))
        }
    }

    function c(e, t) {
        const {
            conversationId: n
        } = e.app;
        return "conversation" === Object(o.f)(e) && -1 !== t.indexOf(n)
    }

    function u() {
        return {
            type: s.Eb
        }
    }

    function d(e) {
        return {
            type: s.Fb,
            unreadConversations: e
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return a
    })), n.d(t, "c", (function() {
        return c
    })), n.d(t, "a", (function() {
        return u
    }));
    var r = n(1);
    const i = e => e.triggers,
        o = Object(r.createSelector)(i, (e => e.triggers)),
        s = Object(r.createSelector)(i, (e => e.active)),
        a = Object(r.createSelector)(i, (e => e.failed)),
        c = e => Object(r.createSelector)(o, (t => {
            const n = t[e];
            if (n) return n;
            throw new Error(`Can't find the messenger trigger of id=${e}`)
        })),
        u = Object(r.createSelector)(o, s, ((e, t) => {
            const n = e[t];
            if (n) return n;
            throw new Error("No messenger trigger is active")
        }))
}, , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
        return o
    })), n.d(t, "a", (function() {
        return s
    })), n.d(t, "b", (function() {
        return a
    }));
    var r = n(3),
        i = n(0);

    function o(e) {
        const {
            activeSubscription: t,
            userHashVerified: n,
            secureInstallV2: r,
            messengerEnabledForVisitors: o,
            messengerEnabledForUsers: s
        } = e;
        return {
            type: i.Ub,
            activeSubscription: t,
            userHashVerified: n,
            secureInstallV2: r,
            messengerEnabledForVisitors: o,
            messengerEnabledForUsers: s
        }
    }

    function s() {
        return {
            type: i.s
        }
    }

    function a() {
        return (e, t) => {
            const {
                session: n
            } = t();
            return r.d.disableInstallMode(n).then((() => {
                e(s())
            }))
        }
    }
}, , , function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
        return i
    })), n.d(t, "a", (function() {
        return o
    })), n.d(t, "b", (function() {
        return s
    }));
    var r = n(45);
    const i = (e, t) => Object(r.tinycolor)(e).darken(t).toHexString(),
        o = (e, t) => Object(r.tinycolor)(e).setAlpha(Math.min(Math.max(t, 0), 1)).toRgbString(),
        s = (e, t) => Math.round(1e3 * r.tinycolor.readability(e, t)) / 1e3
}, function(e, t, n) {
    "use strict";
    t.a = e => {
        try {
            return window.btoa(unescape(encodeURIComponent(e)))
        } catch (t) {
            return e
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "f", (function() {
        return s
    })), n.d(t, "d", (function() {
        return a
    })), n.d(t, "e", (function() {
        return c
    })), n.d(t, "a", (function() {
        return u
    })), n.d(t, "c", (function() {
        return d
    })), n.d(t, "b", (function() {
        return l
    })), n.d(t, "g", (function() {
        return f
    })), n.d(t, "h", (function() {
        return b
    }));
    var r = n(23),
        i = n(18);
    const o = e => {
            var t, n;
            if (null !== (t = window) && void 0 !== t && null !== (n = t.parent) && void 0 !== n && n.document) return window.parent.document.querySelector(e)
        },
        s = () => {
            var e;
            return (null === (e = Object(i.c)()) || void 0 === e ? void 0 : e.innerHeight) || 0
        },
        a = () => o('[name="intercom-modal-frame"]'),
        c = () => o('[name="intercom-note-frame"]'),
        u = () => o('[name="intercom-borderless-frame"]'),
        d = () => o('[name="intercom-messenger-frame"]'),
        l = () => {
            const e = d();
            if (e) return e.contentDocument
        },
        p = () => {
            const e = o('[name="intercom-launcher-frame"]');
            if (e) return e.contentDocument
        },
        f = () => p() && Object(r.i)(p())[0],
        b = () => l() && Object(r.i)(l())[0]
}, function(e, t) {
    e.exports = {
        source_map: "hidden-source-map",
        api_base: "https://api-iam.intercom.io",
        public_path: "https://js.intercomcdn.com/",
        sheets_proxy_path: "https://intercom-sheets.com/sheets_proxy",
        sentry_proxy_path: "https://www.intercom-reporting.com/sentry/index.html",
        install_mode_base: "https://app.intercom.com",
        sentry_dsn: "https://f305de69cac64a84a494556d5303dc2d@app.getsentry.com/24287",
        intersection_js: "https://js.intercomcdn.com/intersection/assets/app.js",
        intersection_styles: "https://js.intercomcdn.com/intersection/assets/styles.js",
        article_search_messenger_app_id: 27,
        mode: "production",
        priv_sep_html_path: "https://www.intercom-reporting.com"
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "i", (function() {
        return u
    })), n.d(t, "h", (function() {
        return d
    })), n.d(t, "a", (function() {
        return l
    })), n.d(t, "b", (function() {
        return p
    })), n.d(t, "d", (function() {
        return f
    })), n.d(t, "c", (function() {
        return b
    })), n.d(t, "e", (function() {
        return h
    })), n.d(t, "f", (function() {
        return g
    })), n.d(t, "g", (function() {
        return m
    }));
    var r = n(238),
        i = n(2),
        o = n(11),
        s = n(20),
        a = n(3),
        c = n(0);

    function u(e, t) {
        return n => {
            "" !== e && n(Object(r.a)(e)), n({
                type: c.ud,
                phrase: e,
                hideResultsWithDelay: t
            })
        }
    }

    function d(e) {
        return (t, n) => {
            const r = n(),
                {
                    user: o
                } = r;
            Object(i.h)(o, "clicked", s.g, s.m, s.a, {
                collection_id: e
            }), t({
                type: c.Ec,
                collectionId: e
            })
        }
    }

    function l({
        object: e,
        place: t,
        metadata: n = {}
    }) {
        return (r, o) => {
            const {
                user: a
            } = o();
            Object(i.h)(a, "clicked", e, t, s.a, n)
        }
    }

    function p({
        object: e,
        place: t,
        metadata: n = {}
    }) {
        return (r, o) => {
            const {
                user: a
            } = o();
            Object(i.h)(a, "viewed", e, t, s.a, n)
        }
    }

    function f() {
        return (e, t) => {
            const n = t(),
                {
                    articleCollections: r
                } = n;
            e(Object(o.k)()), 1 === r.length && e(d(r[0].id))
        }
    }

    function b() {
        return (e, t) => {
            const {
                session: n
            } = t();
            Object(a.g)(n).then((({
                articleCollections: t,
                articleSuggestions: n
            }) => {
                e(function(e) {
                    return {
                        type: c.gc,
                        articleCollections: e
                    }
                }(t)), e(function(e) {
                    return {
                        type: c.ic,
                        articleSuggestions: e
                    }
                }(n))
            }))
        }
    }

    function h() {
        return (e, t) => {
            const n = t(),
                {
                    articleCollections: r
                } = n;
            1 === r.length ? e({
                type: c.wc
            }) : e({
                type: c.yc
            })
        }
    }

    function g() {
        return {
            type: c.zc
        }
    }

    function m(e) {
        return {
            type: c.Ac,
            value: e
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "d", (function() {
        return p
    })), n.d(t, "c", (function() {
        return f
    })), n.d(t, "b", (function() {
        return b
    })), n.d(t, "a", (function() {
        return h
    }));
    const r = /\s+/g,
        i = /^(00)|(\+)/i,
        o = /[^(\d|\s|\+|\.|\(|\)|\-)]/g,
        s = /\D/g,
        a = "that_number_needs_a_prefix",
        c = "that_number_doesnt_look_quite_right",
        u = "that_country_code_doesnt_look_quite_right",
        d = "that_number_is_missing_a_few_digits",
        l = "that_number_has_too_many_digits",
        p = e => void 0 === f(e),
        f = e => {
            if (!g(e)) return a;
            if ((e = e.replace(i, "")).match(o)) return c;
            if ((e = e.replace(s, "")).length > 15) return l;
            const t = h(e);
            return t && (e = e.substring(t.dialCode.length)), e.length < 6 ? d : t ? void 0 : u
        },
        b = e => {
            const t = C[e];
            return t ? `+${t.dialCode}` : "+1"
        },
        h = e => {
            if ((e = m(e)).length < 4) return;
            const t = v(e);
            return _(t)
        },
        g = e => e.match(i),
        m = e => (e = (e = (e = e.replace(r, "")).replace(i, "")).replace(o, "")).slice(0, 4),
        v = e => {
            const t = [],
                n = Object.keys(C);
            for (let r = 0; r <= n.length - 1; r++) {
                const i = O(n[r]),
                    o = y(i);
                if (o.indexOf(e) > -1) {
                    t.push(i);
                    break
                }
                o.some((t => e.startsWith(t))) && t.push(i)
            }
            return t
        },
        O = e => Object.assign(C[e], {
            code: e
        }),
        y = e => {
            const {
                dialCode: t,
                areaCodes: n
            } = e;
            return n ? n.map((e => `${t}${e}`)) : [t]
        },
        _ = e => {
            if (1 === e.length) return e[0];
            if (e.length > 1) {
                if (1 === new Set(e.map((e => e.dialCode))).size) return e.find((e => 0 === e.priority))
            }
        },
        C = {
            af: {
                dialCode: "93",
                areaCodes: null,
                priority: 0
            },
            al: {
                dialCode: "355",
                areaCodes: null,
                priority: 0
            },
            dz: {
                dialCode: "213",
                areaCodes: null,
                priority: 0
            },
            as: {
                dialCode: "1684",
                areaCodes: null,
                priority: 0
            },
            ad: {
                dialCode: "376",
                areaCodes: null,
                priority: 0
            },
            ao: {
                dialCode: "244",
                areaCodes: null,
                priority: 0
            },
            ai: {
                dialCode: "1264",
                areaCodes: null,
                priority: 0
            },
            ag: {
                dialCode: "1268",
                areaCodes: null,
                priority: 0
            },
            ar: {
                dialCode: "54",
                areaCodes: null,
                priority: 0
            },
            am: {
                dialCode: "374",
                areaCodes: null,
                priority: 0
            },
            aw: {
                dialCode: "297",
                areaCodes: null,
                priority: 0
            },
            au: {
                dialCode: "61",
                areaCodes: null,
                priority: 0
            },
            at: {
                dialCode: "43",
                areaCodes: null,
                priority: 0
            },
            az: {
                dialCode: "994",
                areaCodes: null,
                priority: 0
            },
            bs: {
                dialCode: "1242",
                areaCodes: null,
                priority: 0
            },
            bh: {
                dialCode: "973",
                areaCodes: null,
                priority: 0
            },
            bd: {
                dialCode: "880",
                areaCodes: null,
                priority: 0
            },
            bb: {
                dialCode: "1246",
                areaCodes: null,
                priority: 0
            },
            by: {
                dialCode: "375",
                areaCodes: null,
                priority: 0
            },
            be: {
                dialCode: "32",
                areaCodes: null,
                priority: 0
            },
            bz: {
                dialCode: "501",
                areaCodes: null,
                priority: 0
            },
            bj: {
                dialCode: "229",
                areaCodes: null,
                priority: 0
            },
            bm: {
                dialCode: "1441",
                areaCodes: null,
                priority: 0
            },
            bt: {
                dialCode: "975",
                areaCodes: null,
                priority: 0
            },
            bo: {
                dialCode: "591",
                areaCodes: null,
                priority: 0
            },
            ba: {
                dialCode: "387",
                areaCodes: null,
                priority: 0
            },
            bw: {
                dialCode: "267",
                areaCodes: null,
                priority: 0
            },
            br: {
                dialCode: "55",
                areaCodes: null,
                priority: 0
            },
            io: {
                dialCode: "246",
                areaCodes: null,
                priority: 0
            },
            vg: {
                dialCode: "1284",
                areaCodes: null,
                priority: 0
            },
            bn: {
                dialCode: "673",
                areaCodes: null,
                priority: 0
            },
            bg: {
                dialCode: "359",
                areaCodes: null,
                priority: 0
            },
            bf: {
                dialCode: "226",
                areaCodes: null,
                priority: 0
            },
            bi: {
                dialCode: "257",
                areaCodes: null,
                priority: 0
            },
            kh: {
                dialCode: "855",
                areaCodes: null,
                priority: 0
            },
            cm: {
                dialCode: "237",
                areaCodes: null,
                priority: 0
            },
            ca: {
                dialCode: "1",
                areaCodes: ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"],
                priority: 1
            },
            cv: {
                dialCode: "238",
                areaCodes: null,
                priority: 0
            },
            bq: {
                dialCode: "599",
                areaCodes: null,
                priority: 1
            },
            ky: {
                dialCode: "1345",
                areaCodes: null,
                priority: 0
            },
            cf: {
                dialCode: "236",
                areaCodes: null,
                priority: 0
            },
            td: {
                dialCode: "235",
                areaCodes: null,
                priority: 0
            },
            cl: {
                dialCode: "56",
                areaCodes: null,
                priority: 0
            },
            cn: {
                dialCode: "86",
                areaCodes: null,
                priority: 0
            },
            cx: {
                dialCode: "61",
                areaCodes: null,
                priority: 2
            },
            cc: {
                dialCode: "61",
                areaCodes: null,
                priority: 1
            },
            co: {
                dialCode: "57",
                areaCodes: null,
                priority: 0
            },
            km: {
                dialCode: "269",
                areaCodes: null,
                priority: 0
            },
            cd: {
                dialCode: "243",
                areaCodes: null,
                priority: 0
            },
            cg: {
                dialCode: "242",
                areaCodes: null,
                priority: 0
            },
            ck: {
                dialCode: "682",
                areaCodes: null,
                priority: 0
            },
            cr: {
                dialCode: "506",
                areaCodes: null,
                priority: 0
            },
            ci: {
                dialCode: "225",
                areaCodes: null,
                priority: 0
            },
            hr: {
                dialCode: "385",
                areaCodes: null,
                priority: 0
            },
            cu: {
                dialCode: "53",
                areaCodes: null,
                priority: 0
            },
            cw: {
                dialCode: "599",
                areaCodes: null,
                priority: 0
            },
            cy: {
                dialCode: "357",
                areaCodes: null,
                priority: 0
            },
            cz: {
                dialCode: "420",
                areaCodes: null,
                priority: 0
            },
            dk: {
                dialCode: "45",
                areaCodes: null,
                priority: 0
            },
            dj: {
                dialCode: "253",
                areaCodes: null,
                priority: 0
            },
            dm: {
                dialCode: "1767",
                areaCodes: null,
                priority: 0
            },
            do: {
                dialCode: "1",
                areaCodes: ["809", "829", "849"],
                priority: 2
            },
            ec: {
                dialCode: "593",
                areaCodes: null,
                priority: 0
            },
            eg: {
                dialCode: "20",
                areaCodes: null,
                priority: 0
            },
            sv: {
                dialCode: "503",
                areaCodes: null,
                priority: 0
            },
            gq: {
                dialCode: "240",
                areaCodes: null,
                priority: 0
            },
            er: {
                dialCode: "291",
                areaCodes: null,
                priority: 0
            },
            ee: {
                dialCode: "372",
                areaCodes: null,
                priority: 0
            },
            et: {
                dialCode: "251",
                areaCodes: null,
                priority: 0
            },
            fk: {
                dialCode: "500",
                areaCodes: null,
                priority: 0
            },
            fo: {
                dialCode: "298",
                areaCodes: null,
                priority: 0
            },
            fj: {
                dialCode: "679",
                areaCodes: null,
                priority: 0
            },
            fi: {
                dialCode: "358",
                areaCodes: null,
                priority: 0
            },
            fr: {
                dialCode: "33",
                areaCodes: null,
                priority: 0
            },
            gf: {
                dialCode: "594",
                areaCodes: null,
                priority: 0
            },
            pf: {
                dialCode: "689",
                areaCodes: null,
                priority: 0
            },
            ga: {
                dialCode: "241",
                areaCodes: null,
                priority: 0
            },
            gm: {
                dialCode: "220",
                areaCodes: null,
                priority: 0
            },
            ge: {
                dialCode: "995",
                areaCodes: null,
                priority: 0
            },
            de: {
                dialCode: "49",
                areaCodes: null,
                priority: 0
            },
            gh: {
                dialCode: "233",
                areaCodes: null,
                priority: 0
            },
            gi: {
                dialCode: "350",
                areaCodes: null,
                priority: 0
            },
            gr: {
                dialCode: "30",
                areaCodes: null,
                priority: 0
            },
            gl: {
                dialCode: "299",
                areaCodes: null,
                priority: 0
            },
            gd: {
                dialCode: "1473",
                areaCodes: null,
                priority: 0
            },
            gp: {
                dialCode: "590",
                areaCodes: null,
                priority: 0
            },
            gu: {
                dialCode: "1671",
                areaCodes: null,
                priority: 0
            },
            gt: {
                dialCode: "502",
                areaCodes: null,
                priority: 0
            },
            gg: {
                dialCode: "44",
                areaCodes: null,
                priority: 1
            },
            gn: {
                dialCode: "224",
                areaCodes: null,
                priority: 0
            },
            gw: {
                dialCode: "245",
                areaCodes: null,
                priority: 0
            },
            gy: {
                dialCode: "592",
                areaCodes: null,
                priority: 0
            },
            ht: {
                dialCode: "509",
                areaCodes: null,
                priority: 0
            },
            hn: {
                dialCode: "504",
                areaCodes: null,
                priority: 0
            },
            hk: {
                dialCode: "852",
                areaCodes: null,
                priority: 0
            },
            hu: {
                dialCode: "36",
                areaCodes: null,
                priority: 0
            },
            is: {
                dialCode: "354",
                areaCodes: null,
                priority: 0
            },
            in: {
                dialCode: "91",
                areaCodes: null,
                priority: 0
            },
            id: {
                dialCode: "62",
                areaCodes: null,
                priority: 0
            },
            ir: {
                dialCode: "98",
                areaCodes: null,
                priority: 0
            },
            iq: {
                dialCode: "964",
                areaCodes: null,
                priority: 0
            },
            ie: {
                dialCode: "353",
                areaCodes: null,
                priority: 0
            },
            im: {
                dialCode: "44",
                areaCodes: null,
                priority: 2
            },
            il: {
                dialCode: "972",
                areaCodes: null,
                priority: 0
            },
            it: {
                dialCode: "39",
                areaCodes: null,
                priority: 0
            },
            jm: {
                dialCode: "1876",
                areaCodes: null,
                priority: 0
            },
            jp: {
                dialCode: "81",
                areaCodes: null,
                priority: 0
            },
            je: {
                dialCode: "44",
                areaCodes: null,
                priority: 3
            },
            jo: {
                dialCode: "962",
                areaCodes: null,
                priority: 0
            },
            kz: {
                dialCode: "7",
                areaCodes: null,
                priority: 1
            },
            ke: {
                dialCode: "254",
                areaCodes: null,
                priority: 0
            },
            ki: {
                dialCode: "686",
                areaCodes: null,
                priority: 0
            },
            xk: {
                dialCode: "383",
                areaCodes: null,
                priority: 0
            },
            kw: {
                dialCode: "965",
                areaCodes: null,
                priority: 0
            },
            kg: {
                dialCode: "996",
                areaCodes: null,
                priority: 0
            },
            la: {
                dialCode: "856",
                areaCodes: null,
                priority: 0
            },
            lv: {
                dialCode: "371",
                areaCodes: null,
                priority: 0
            },
            lb: {
                dialCode: "961",
                areaCodes: null,
                priority: 0
            },
            ls: {
                dialCode: "266",
                areaCodes: null,
                priority: 0
            },
            lr: {
                dialCode: "231",
                areaCodes: null,
                priority: 0
            },
            ly: {
                dialCode: "218",
                areaCodes: null,
                priority: 0
            },
            li: {
                dialCode: "423",
                areaCodes: null,
                priority: 0
            },
            lt: {
                dialCode: "370",
                areaCodes: null,
                priority: 0
            },
            lu: {
                dialCode: "352",
                areaCodes: null,
                priority: 0
            },
            mo: {
                dialCode: "853",
                areaCodes: null,
                priority: 0
            },
            mk: {
                dialCode: "389",
                areaCodes: null,
                priority: 0
            },
            mg: {
                dialCode: "261",
                areaCodes: null,
                priority: 0
            },
            mw: {
                dialCode: "265",
                areaCodes: null,
                priority: 0
            },
            my: {
                dialCode: "60",
                areaCodes: null,
                priority: 0
            },
            mv: {
                dialCode: "960",
                areaCodes: null,
                priority: 0
            },
            ml: {
                dialCode: "223",
                areaCodes: null,
                priority: 0
            },
            mt: {
                dialCode: "356",
                areaCodes: null,
                priority: 0
            },
            mh: {
                dialCode: "692",
                areaCodes: null,
                priority: 0
            },
            mq: {
                dialCode: "596",
                areaCodes: null,
                priority: 0
            },
            mr: {
                dialCode: "222",
                areaCodes: null,
                priority: 0
            },
            mu: {
                dialCode: "230",
                areaCodes: null,
                priority: 0
            },
            yt: {
                dialCode: "262",
                areaCodes: null,
                priority: 1
            },
            mx: {
                dialCode: "52",
                areaCodes: null,
                priority: 0
            },
            fm: {
                dialCode: "691",
                areaCodes: null,
                priority: 0
            },
            md: {
                dialCode: "373",
                areaCodes: null,
                priority: 0
            },
            mc: {
                dialCode: "377",
                areaCodes: null,
                priority: 0
            },
            mn: {
                dialCode: "976",
                areaCodes: null,
                priority: 0
            },
            me: {
                dialCode: "382",
                areaCodes: null,
                priority: 0
            },
            ms: {
                dialCode: "1664",
                areaCodes: null,
                priority: 0
            },
            ma: {
                dialCode: "212",
                areaCodes: null,
                priority: 0
            },
            mz: {
                dialCode: "258",
                areaCodes: null,
                priority: 0
            },
            mm: {
                dialCode: "95",
                areaCodes: null,
                priority: 0
            },
            na: {
                dialCode: "264",
                areaCodes: null,
                priority: 0
            },
            nr: {
                dialCode: "674",
                areaCodes: null,
                priority: 0
            },
            np: {
                dialCode: "977",
                areaCodes: null,
                priority: 0
            },
            nl: {
                dialCode: "31",
                areaCodes: null,
                priority: 0
            },
            nc: {
                dialCode: "687",
                areaCodes: null,
                priority: 0
            },
            nz: {
                dialCode: "64",
                areaCodes: null,
                priority: 0
            },
            ni: {
                dialCode: "505",
                areaCodes: null,
                priority: 0
            },
            ne: {
                dialCode: "227",
                areaCodes: null,
                priority: 0
            },
            ng: {
                dialCode: "234",
                areaCodes: null,
                priority: 0
            },
            nu: {
                dialCode: "683",
                areaCodes: null,
                priority: 0
            },
            nf: {
                dialCode: "672",
                areaCodes: null,
                priority: 0
            },
            kp: {
                dialCode: "850",
                areaCodes: null,
                priority: 0
            },
            mp: {
                dialCode: "1670",
                areaCodes: null,
                priority: 0
            },
            no: {
                dialCode: "47",
                areaCodes: null,
                priority: 0
            },
            om: {
                dialCode: "968",
                areaCodes: null,
                priority: 0
            },
            pk: {
                dialCode: "92",
                areaCodes: null,
                priority: 0
            },
            pw: {
                dialCode: "680",
                areaCodes: null,
                priority: 0
            },
            ps: {
                dialCode: "970",
                areaCodes: null,
                priority: 0
            },
            pa: {
                dialCode: "507",
                areaCodes: null,
                priority: 0
            },
            pg: {
                dialCode: "675",
                areaCodes: null,
                priority: 0
            },
            py: {
                dialCode: "595",
                areaCodes: null,
                priority: 0
            },
            pe: {
                dialCode: "51",
                areaCodes: null,
                priority: 0
            },
            ph: {
                dialCode: "63",
                areaCodes: null,
                priority: 0
            },
            pl: {
                dialCode: "48",
                areaCodes: null,
                priority: 0
            },
            pt: {
                dialCode: "351",
                areaCodes: null,
                priority: 0
            },
            pr: {
                dialCode: "1",
                areaCodes: ["787", "939"],
                priority: 3
            },
            qa: {
                dialCode: "974",
                areaCodes: null,
                priority: 0
            },
            re: {
                dialCode: "262",
                areaCodes: null,
                priority: 0
            },
            ro: {
                dialCode: "40",
                areaCodes: null,
                priority: 0
            },
            ru: {
                dialCode: "7",
                areaCodes: null,
                priority: 0
            },
            rw: {
                dialCode: "250",
                areaCodes: null,
                priority: 0
            },
            bl: {
                dialCode: "590",
                areaCodes: null,
                priority: 1
            },
            sh: {
                dialCode: "290",
                areaCodes: null,
                priority: 0
            },
            kn: {
                dialCode: "1869",
                areaCodes: null,
                priority: 0
            },
            lc: {
                dialCode: "1758",
                areaCodes: null,
                priority: 0
            },
            mf: {
                dialCode: "590",
                areaCodes: null,
                priority: 2
            },
            pm: {
                dialCode: "508",
                areaCodes: null,
                priority: 0
            },
            vc: {
                dialCode: "1784",
                areaCodes: null,
                priority: 0
            },
            ws: {
                dialCode: "685",
                areaCodes: null,
                priority: 0
            },
            sm: {
                dialCode: "378",
                areaCodes: null,
                priority: 0
            },
            st: {
                dialCode: "239",
                areaCodes: null,
                priority: 0
            },
            sa: {
                dialCode: "966",
                areaCodes: null,
                priority: 0
            },
            sn: {
                dialCode: "221",
                areaCodes: null,
                priority: 0
            },
            rs: {
                dialCode: "381",
                areaCodes: null,
                priority: 0
            },
            sc: {
                dialCode: "248",
                areaCodes: null,
                priority: 0
            },
            sl: {
                dialCode: "232",
                areaCodes: null,
                priority: 0
            },
            sg: {
                dialCode: "65",
                areaCodes: null,
                priority: 0
            },
            sx: {
                dialCode: "1721",
                areaCodes: null,
                priority: 0
            },
            sk: {
                dialCode: "421",
                areaCodes: null,
                priority: 0
            },
            si: {
                dialCode: "386",
                areaCodes: null,
                priority: 0
            },
            sb: {
                dialCode: "677",
                areaCodes: null,
                priority: 0
            },
            so: {
                dialCode: "252",
                areaCodes: null,
                priority: 0
            },
            za: {
                dialCode: "27",
                areaCodes: null,
                priority: 0
            },
            kr: {
                dialCode: "82",
                areaCodes: null,
                priority: 0
            },
            ss: {
                dialCode: "211",
                areaCodes: null,
                priority: 0
            },
            es: {
                dialCode: "34",
                areaCodes: null,
                priority: 0
            },
            lk: {
                dialCode: "94",
                areaCodes: null,
                priority: 0
            },
            sd: {
                dialCode: "249",
                areaCodes: null,
                priority: 0
            },
            sr: {
                dialCode: "597",
                areaCodes: null,
                priority: 0
            },
            sj: {
                dialCode: "47",
                areaCodes: null,
                priority: 1
            },
            sz: {
                dialCode: "268",
                areaCodes: null,
                priority: 0
            },
            se: {
                dialCode: "46",
                areaCodes: null,
                priority: 0
            },
            ch: {
                dialCode: "41",
                areaCodes: null,
                priority: 0
            },
            sy: {
                dialCode: "963",
                areaCodes: null,
                priority: 0
            },
            tw: {
                dialCode: "886",
                areaCodes: null,
                priority: 0
            },
            tj: {
                dialCode: "992",
                areaCodes: null,
                priority: 0
            },
            tz: {
                dialCode: "255",
                areaCodes: null,
                priority: 0
            },
            th: {
                dialCode: "66",
                areaCodes: null,
                priority: 0
            },
            tl: {
                dialCode: "670",
                areaCodes: null,
                priority: 0
            },
            tg: {
                dialCode: "228",
                areaCodes: null,
                priority: 0
            },
            tk: {
                dialCode: "690",
                areaCodes: null,
                priority: 0
            },
            to: {
                dialCode: "676",
                areaCodes: null,
                priority: 0
            },
            tt: {
                dialCode: "1868",
                areaCodes: null,
                priority: 0
            },
            tn: {
                dialCode: "216",
                areaCodes: null,
                priority: 0
            },
            tr: {
                dialCode: "90",
                areaCodes: null,
                priority: 0
            },
            tm: {
                dialCode: "993",
                areaCodes: null,
                priority: 0
            },
            tc: {
                dialCode: "1649",
                areaCodes: null,
                priority: 0
            },
            tv: {
                dialCode: "688",
                areaCodes: null,
                priority: 0
            },
            vi: {
                dialCode: "1340",
                areaCodes: null,
                priority: 0
            },
            ug: {
                dialCode: "256",
                areaCodes: null,
                priority: 0
            },
            ua: {
                dialCode: "380",
                areaCodes: null,
                priority: 0
            },
            ae: {
                dialCode: "971",
                areaCodes: null,
                priority: 0
            },
            gb: {
                dialCode: "44",
                areaCodes: null,
                priority: 0
            },
            us: {
                dialCode: "1",
                areaCodes: null,
                priority: 0
            },
            uy: {
                dialCode: "598",
                areaCodes: null,
                priority: 0
            },
            uz: {
                dialCode: "998",
                areaCodes: null,
                priority: 0
            },
            vu: {
                dialCode: "678",
                areaCodes: null,
                priority: 0
            },
            va: {
                dialCode: "39",
                areaCodes: null,
                priority: 1
            },
            ve: {
                dialCode: "58",
                areaCodes: null,
                priority: 0
            },
            vn: {
                dialCode: "84",
                areaCodes: null,
                priority: 0
            },
            wf: {
                dialCode: "681",
                areaCodes: null,
                priority: 0
            },
            eh: {
                dialCode: "212",
                areaCodes: null,
                priority: 1
            },
            ye: {
                dialCode: "967",
                areaCodes: null,
                priority: 0
            },
            zm: {
                dialCode: "260",
                areaCodes: null,
                priority: 0
            },
            zw: {
                dialCode: "263",
                areaCodes: null,
                priority: 0
            },
            ax: {
                dialCode: "358",
                areaCodes: null,
                priority: 1
            }
        }
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return r
    })), n.d(t, "a", (function() {
        return i
    }));
    const r = 300,
        i = "ease-in-out"
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    }));
    const r = e => /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
}, , function(e, t, n) {
    "use strict";

    function r(e) {
        return void 0 !== e.AndroidHost ? e.AndroidHost : void 0 !== e.iOSHost ? e.iOSHost : void 0
    }

    function i(e) {
        return void 0 !== e.AndroidHost ? "android" : void 0 !== e.iOSHost ? "ios" : void 0
    }
    n.d(t, "a", (function() {
        return r
    })), n.d(t, "b", (function() {
        return i
    }))
}, function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
        return h
    })), n.d(t, "d", (function() {
        return m
    })), n.d(t, "a", (function() {
        return v
    })), n.d(t, "b", (function() {
        return y
    }));
    var r = n(32),
        i = n.n(r),
        o = n(3),
        s = n(6),
        a = n(24),
        c = n(43),
        u = n(2),
        d = n(47),
        l = n(0);
    let p = 0,
        f = "",
        b = !1;

    function h(e, t) {
        return (n, r) => {
            const i = r(),
                {
                    composerSuggestions: o
                } = Object(d.b)(i);
            if (!o || !o.isDismissed) return f = e, g(n, r, t)
        }
    }
    const g = i()((function e(t, n, r) {
        const i = ++p,
            s = f,
            a = n(),
            {
                session: c
            } = a,
            {
                composerSuggestions: l
            } = Object(d.b)(a);
        if (!l || !l.loading) return b = !1, t(O(!0, r)), Object(o.e)(c, s, 3).then((o => {
            if (t(O(!1, r)), t(v(o, r, i)), b && f !== s) return g.cancel(), void e(t, n, r);
            const a = Object.assign({}, {
                query: s,
                conversation_id: r
            }, o);
            Object(u.e)("received", "composer_smart_suggestions", "messenger", {}, a, "m4_metric")
        }));
        b = !0
    }), 150, {
        leading: !1,
        trailing: !0
    });

    function m(e, t, n, r = !1, i, o) {
        return async (u, d) => {
            const l = d(),
                p = (null == t ? void 0 : t.id) || null,
                {
                    session: f,
                    newConversation: b,
                    user: h
                } = l,
                g = Object(a.b)(),
                m = new Date;
            if (u(v(null, p)), p) {
                const a = {
                    conversationId: p,
                    clientId: g,
                    createdAt: m,
                    body: Object(c.c)(n.text),
                    composerSuggestionItem: n
                };
                try {
                    u(Object(s.e)(p, a, r)), await e.fireComposerSuggestion(f, {
                        conversationId: p,
                        suggestion: n,
                        clientId: g
                    }), u(Object(s.f)(p, a, i, t.lastParticipatingAdmin, o, !1, m, !0))
                } catch (e) {
                    u(Object(s.d)(p, a, e))
                }
            } else {
                const t = {
                    clientId: g,
                    body: Object(c.c)(n.text),
                    createdAt: m,
                    composerSuggestionItem: n
                };
                try {
                    u(Object(s.h)(t, r));
                    const i = await e.fireComposerSuggestion(f, {
                        conversationId: p,
                        suggestion: n,
                        clientId: g,
                        botIntro: b ? b.botIntroId : null,
                        articleUrl: b ? b.articleUrl : null,
                        resolutionBotBehaviorVersionId: h ? h.resolutionBotBehaviorVersionId : null
                    });
                    u(Object(s.i)(i, null, null, m, "resolution_bot_auto_suggest"))
                } catch (e) {
                    u(Object(s.g)(null))
                }
            }
        }
    }

    function v(e, t, n = ++p) {
        return {
            type: l.Gc,
            conversationId: t,
            composerSuggestions: e,
            priority: n
        }
    }

    function O(e, t) {
        return {
            type: l.Ic,
            conversationId: t,
            loadingStatus: e
        }
    }

    function y(e) {
        return {
            type: l.Hc,
            conversationId: e
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "d", (function() {
        return h
    })), n.d(t, "b", (function() {
        return g
    })), n.d(t, "h", (function() {
        return m
    })), n.d(t, "a", (function() {
        return v
    })), n.d(t, "f", (function() {
        return O
    })), n.d(t, "g", (function() {
        return y
    })), n.d(t, "c", (function() {
        return _
    })), n.d(t, "e", (function() {
        return C
    }));
    var r = n(175),
        i = n(33),
        o = n(169),
        s = n(82),
        a = n(233),
        c = n(129),
        u = n(11),
        d = n(12),
        l = n(2),
        p = n(136),
        f = n(74),
        b = n(0);

    function h(e, t) {
        return (n, r) => {
            const {
                intercomSheet: i
            } = t.data || {}, o = r(), u = Object(c.g)(o);
            if (!i) return null;
            switch (i.type) {
                case a.b:
                    n(_());
                    break;
                case s.g:
                    n(y());
                    break;
                case s.b:
                    n(_());
                    break;
                case s.a:
                    n(v("sheet_api_close"));
                    break;
                case s.f:
                    if (!i.payload) return;
                    n(O(i.payload.title));
                    break;
                case s.h:
                    if (!u) return null;
                    n(y()), n(m(e, i.payload))
            }
        }
    }

    function g(e, t, n, r, i) {
        return (o, s) => {
            const {
                app: {
                    isMessengerOpen: a
                },
                session: c
            } = s();
            return a || o(Object(u.l)()), o(function(e, t, n) {
                return {
                    type: b.Zb,
                    url: e,
                    cardUri: t,
                    componentId: n
                }
            }(r, t, n)), o(S()), o(Object(f.a)()), e.fetchMessengerSheetData(c, t, n, i).then((e => {
                o(j(e))
            })).catch((() => {
                o(w())
            }))
        }
    }

    function m(e, t) {
        return (n, s) => {
            const a = s(),
                {
                    cardUri: u
                } = Object(c.g)(a),
                {
                    session: d
                } = a;
            return e.submitSheet(d, u, t).then((t => {
                n(Object(r.b)(t)), n(Object(i.a)(e, t))
            })).then((() => new Promise((e => setTimeout(e, 2 * o.b))))).then((() => {
                n(_()), n(v("sheet_api_submit"))
            })).catch((() => {
                n(Object(p.a)("MessengerSheetSubmitError", {
                    sheetValues: t
                }))
            }))
        }
    }

    function v(e) {
        return (t, n) => {
            const r = n(),
                i = Object(c.g)(r),
                {
                    cardUri: o
                } = i,
                {
                    card: s
                } = r.messengerCards[o];
            if (s) {
                const {
                    url: t
                } = r.messengerSheet, {
                    user: n,
                    app: {
                        conversationId: i
                    }
                } = r;
                ! function(e, t, n, r, i, o) {
                    l.j.buildAndAddMetric(e, "closed", "messenger_sheet", "messenger", t, {
                        url: n,
                        messenger_card_uri: r,
                        messenger_app_id: i,
                        conversation_id: o
                    }, "m4_metric")
                }(n, "sheet_api_submit" === e || "sheet_api_close" === e ? e : Object(d.f)(r), t, o, s.messenger_app_id, i)
            }
            t({
                type: b.x
            })
        }
    }

    function O(e) {
        return {
            type: b.Nc,
            sheetTitle: e
        }
    }

    function y() {
        return {
            type: b.Yc
        }
    }

    function _() {
        return {
            type: b.pb
        }
    }

    function C(e = !1) {
        return {
            type: b.Mc,
            isLoaded: e
        }
    }
    const S = () => ({
            type: b.kb
        }),
        j = e => ({
            type: b.lb,
            data: e
        }),
        w = () => ({
            type: b.jb
        })
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return a
    })), n.d(t, "b", (function() {
        return u
    }));
    var r = n(53),
        i = n(33),
        o = n(136),
        s = n(0);
    const a = (e, t, n, r) => (s, a) => {
            const {
                session: l
            } = a();
            return s(c(t, n)), e.submitMessengerCardAction(l, t, n, r).then((t => {
                s(u(t)), s(Object(i.a)(e, t))
            })).catch((() => {
                s(d(t, n)), s(Object(o.a)("MessengerCardSubmitError", {
                    cardUri: t,
                    componentId: n,
                    inputValues: r
                }))
            }))
        },
        c = (e, t) => ({
            type: s.dd,
            cardUri: e,
            componentId: t
        }),
        u = e => ({
            type: s.ed,
            card: Object(r.c)(e)
        }),
        d = (e, t) => ({
            type: s.cd,
            cardUri: e,
            componentId: t
        })
}, function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
        return o
    })), n.d(t, "a", (function() {
        return s
    })), n.d(t, "e", (function() {
        return a
    })), n.d(t, "b", (function() {
        return c
    })), n.d(t, "d", (function() {
        return u
    }));
    var r = n(38),
        i = n(0);

    function o(e) {
        return {
            type: i.Tb,
            stage: e.stage,
            eventData: e.eventData
        }
    }

    function s(e, t) {
        return Object(r.h)(e, t), {
            type: i.k,
            newStage: t
        }
    }

    function a(e, t) {
        return Object(r.g)(e, t), {
            type: i.ld,
            eventData: t
        }
    }

    function c(e) {
        return Object(r.d)(e), {
            type: i.r
        }
    }

    function u(e, t) {
        return Object(r.e)(e, t), {
            type: i.sc,
            eventData: t
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(29),
        i = n(7),
        o = n(1);
    const s = Object(o.createSelector)([r.a, e => e.dismissedPointers], ((e, t) => e.filter((e => !(e.read && t[e.id]) && Object(i.n)(e)))));
    t.a = Object(o.createSelector)((e => {
        const {
            conversations: {
                byId: t
            },
            pointerMessage: {
                conversationId: n
            }
        } = e;
        return t[n]
    }), s, ((e, t) => {
        return n = t, void 0 !== (r = e) && !((e, t) => void 0 !== e.find((e => e.id === t.id)))(n, r) && Object(i.n)(r) ? n.concat(r) : n;
        var n, r
    }))
}, function(e, t, n) {
    "use strict";
    var r = n(9);
    const i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    n.d(t, "a", (function() {
        return o
    })), n.d(t, "b", (function() {
        return s
    }));
    const o = e => {
            const t = (e = e || "").match(/[^\x00-\x7F]/);
            if (!e || r.a.isSafari() && t) {
                const t = e.split(".");
                e = `File${(new Date).getTime()}`, t.length > 1 && (e += `.${t[t.length-1]}`)
            }
            return e
        },
        s = (e, t, n) => {
            if (!e) return;
            let r;
            if (e.split(",")[0].indexOf("base64") >= 0) {
                const t = e.split(",")[1];
                r = window.atob ? atob(t) : (e => {
                    if (!e || e.length % 4 != 0) throw new Error("Invalid string. Length must be a multiple of 4");
                    let t = 0;
                    const n = e.length,
                        r = e.indexOf("=") > 0 ? e.length - e.indexOf("=") : 0,
                        o = new Uint8Array(3 * n / 4 - r),
                        s = new Array(4);
                    for (let n = 0; n < e.length; n += 4) s[0] = i.indexOf(e[n]), s[1] = i.indexOf(e[n + 1]), s[2] = i.indexOf(e[n + 2]), s[3] = i.indexOf(e[n + 3]), o[t++] = 255 & (s[0] << 2 | s[1] >> 4), s[2] < 64 && (o[t++] = 255 & (s[1] << 4 | s[2] >> 2), s[3] < 64 && (o[t++] = 255 & (s[2] << 6 | s[3])));
                    let a = "";
                    for (let e = 0; e < o.length; e++) a += String.fromCharCode(parseInt(o[e]));
                    return a
                })(t)
            } else r = unescape(e.split(",")[1]);
            const o = new Uint8Array(r.length);
            for (let e = 0; e < r.length; e++) o[e] = r.charCodeAt(e);
            const s = new Blob([o], {
                type: n
            });
            return s.lastModifiedDate = new Date, s.name = t, s
        }
}, function(e, t, n) {
    "use strict";
    var r = n(173),
        i = n(107),
        o = n(56),
        s = n(6),
        a = n(11),
        c = n(43),
        u = n(24);

    function d(e, t, n, r, i = null, o = !1, d = !1, l, p) {
        return (f, b) => {
            const h = b(),
                {
                    session: g,
                    borderless: m
                } = h;
            let v;
            v = "message" === n.partType ? null : n.id;
            const O = function(e) {
                    if (e && e.clientId) return e.clientId;
                    return Object(u.b)()
                }(i),
                y = new Date,
                _ = Object(c.c)(r.text),
                C = {
                    conversationId: t,
                    clientId: O,
                    createdAt: y,
                    body: _,
                    selectedReplyOption: {
                        replyOption: r,
                        quickReplyPart: n
                    }
                };
            return f(Object(s.e)(t, C, o)), m && m.conversationId || f(Object(a.f)(t)), e.quickReply(g, t, v, r, O).then((e => {
                f(Object(s.f)(t, e, d, l, p, !1, y))
            })).catch((e => {
                f(Object(s.d)(t, C, e))
            }))
        }
    }
    var l = n(2);

    function p(e, t, n, s = !1, a, c, u) {
        return "messenger_suggested_content" === n.type ? Object(r.d)(e, t, n, s, c, u) : "quick_reply" === n.type ? (a.replyOptions && -1 === a.replyOptions.map((e => e.uuid)).indexOf(n.uuid) && (Object(l.c)("quick_reply_uuid_mismatch"), Object(l.g)("quick_reply_uuid_mismatch"), Object(l.b)(`quick_reply_uuid_mismatch partId=${a.id} uuid=${n.uuid}`)), d(e, t.id, a, n)) : "predictive_answer" === n.type ? Object(i.b)(e, n, s) : Object(o.c)(e, n, s)
    }
    n.d(t, "a", (function() {
        return p
    }))
}, , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    t.a = function(e) {
        var t;
        e && e.Element && ("function" != typeof(t = e.Element.prototype).matches && (t.matches = t.msMatchesSelector || t.mozMatchesSelector || t.webkitMatchesSelector || function(e) {
            const t = this,
                n = (t.document || t.ownerDocument).querySelectorAll(e);
            let r = 0;
            for (; n[r] && n[r] !== t;) ++r;
            return Boolean(n[r])
        }), "function" != typeof t.closest && (t.closest = function(e) {
            let t = this;
            for (; t && 1 === t.nodeType;) {
                if (t.matches(e)) return t;
                t = t.parentNode
            }
            return null
        }))
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return a
    })), n.d(t, "b", (function() {
        return d
    })), n.d(t, "c", (function() {
        return l
    }));
    var r = n(5);

    function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function o(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? i(Object(n), !0).forEach((function(t) {
                s(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const a = n(166),
        {
            assign: c
        } = Object;

    function u() {
        var e;
        if (Object(r.a)()) return;
        const t = window.parent || window;
        return t ? (null == t || null === (e = t.intercomSettings) || void 0 === e ? void 0 : e.api_base) || function(e) {
            const t = e.document.querySelector("meta[name=intercom-js-api-base]");
            return null == t ? void 0 : t.content
        }(t) : void 0
    }

    function d() {
        const e = c({}, a),
            t = {
                api_base: u()
            };
        return t.api_base ? (console.log("Overriding config", t), o(o({}, e), t)) : e
    }

    function l() {
        return !1
    }
}, , , , function(e, t, n) {
    "use strict";
    var r = n(1);
    t.a = Object(r.createSelector)([e => e.session], (e => !(!e || !e.token)))
}, function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
        return o
    })), n.d(t, "d", (function() {
        return a
    })), n.d(t, "b", (function() {
        return c
    })), n.d(t, "a", (function() {
        return u
    }));
    var r = n(48),
        i = n(0);

    function o(e, t) {
        return (n, i) => {
            const {
                session: o
            } = i();
            return n(s(o, t)), e.createOrUpdateUser(o, null, t, "updateUserSuppliedEmail").then((i => {
                var o;
                n(a(i, t)), (null === (o = i.unreadConversationIds) || void 0 === o ? void 0 : o.length) > 0 && n(Object(r.d)(e, "updateUserSuppliedEmail"))
            }))
        }
    }

    function s(e, t) {
        return {
            type: i.xd,
            session: e,
            userSuppliedEmail: t
        }
    }

    function a(e, t) {
        return {
            type: i.yd,
            user: e,
            userSuppliedEmail: t
        }
    }

    function c(e, t) {
        return (n, r) => {
            const {
                session: o
            } = r();
            return n({
                type: i.rd
            }), e.updatePhoneNumber(o, t).then((() => {
                n(function(e) {
                    return {
                        type: i.sd,
                        phoneNumber: e
                    }
                }(t))
            })).catch((e => {
                let t;
                e && (t = JSON.parse(e).message), n(function(e) {
                    return {
                        type: i.qd,
                        message: e
                    }
                }(t))
            }))
        }
    }

    function u() {
        return {
            type: i.Hb
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return i
    }));
    var r = n(0);
    const i = e => ({
        type: r.db,
        conversationId: e
    })
}, function(e, t, n) {
    "use strict";
    var r = n(1),
        i = n(244);
    t.a = Object(r.createSelector)(i.a, (({
        recentConversations: e
    }) => e.filter((e => !e.preventEndUserReplies))))
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return c
    }));
    var r = n(103),
        i = n.n(r),
        o = n(76),
        s = n.n(o),
        a = n(1);
    const c = Object(a.createSelector)((e => e.inboundSuggestions), (e => {
        if (!e) return null;
        if (e.previewSuggestions) return e.previewSuggestions;
        return e.allSuggestions && e.allSuggestions.length > 0 ? i()(s()(e.allSuggestions, "priority", "asc")) : null
    }))
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    })), n.d(t, "b", (function() {
        return i
    }));
    const r = "html-loaded",
        i = "sheet-loaded"
}, , function(e, t, n) {
    var r = {
        "./failed.mp3": 421,
        "./notification.mp3": 422,
        "./operator.mp3": 423,
        "./submit.mp3": 424
    };

    function i(e) {
        var t = o(e);
        return n(t)
    }

    function o(e) {
        if (!n.o(r, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
        }
        return r[e]
    }
    i.keys = function() {
        return Object.keys(r)
    }, i.resolve = o, e.exports = i, i.id = 235
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return i
    }));
    var r = n(13);
    const i = () => !!r.b.get("intercom-snippet__intersection-mode")
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return f
    })), n.d(t, "b", (function() {
        return b
    }));
    var r = n(130),
        i = n.n(r),
        o = n(57),
        s = n.n(o),
        a = n(33),
        c = n(48),
        u = n(3),
        d = n(66),
        l = n(167),
        p = n(0);
    const f = () => (e, t) => {
            const {
                matchedSlots: n,
                fetchedSlots: r,
                isFetched: o,
                isFetching: a
            } = t().homeScreen;
            if (a) return;
            const c = !s()(n, r.map((e => i()(e, "uri"))));
            return !o || c ? e(b(u.d)) : void 0
        },
        b = e => async (t, n) => {
            t(h());
            const r = n(),
                {
                    session: i,
                    app: o,
                    homeScreen: s
                } = r;
            Object(d.c)(r) && t(Object(l.c)());
            const u = await e.getHomeScreenCards(i, {
                homeScreenSlots: s.matchedSlots,
                selfServeSuggestionsMatch: o.selfServeSuggestionsMatch
            });
            if (t(Object(c.e)(u)), !1 === u.cardsSuccess) return t(m(u.conversations)), t(v("Couldn't load apps"));
            const p = u.cards || u;
            return p.forEach((n => t(Object(a.a)(e, n)))), t(g(p.map((e => ({
                uri: e.uri,
                messengerCardId: e.messenger_card_id
            }))), u.conversations, u.hasMoreConversations, u.openInboundConversationIds))
        },
        h = () => ({
            type: p.Bb
        }),
        g = (e, t, n, r) => ({
            type: p.Cb,
            cards: e,
            conversations: t,
            hasMoreConversations: n,
            openInboundConversationIds: r
        }),
        m = e => ({
            type: p.Db,
            conversations: e
        }),
        v = e => ({
            type: p.Ab,
            error: e
        })
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return u
    })), n.d(t, "a", (function() {
        return l
    }));
    var r = n(32),
        i = n.n(r),
        o = n(3),
        s = n(2),
        a = n(20),
        c = n(0);

    function u(e, t = !0) {
        return (n, r) => {
            const {
                session: i,
                user: u
            } = r();
            return Object(s.h)(u, "submitted", a.h, a.m, "messenger", {
                phrase: e
            }), n(function(e, t) {
                return {
                    type: c.uc,
                    phrase: e,
                    immediate: t
                }
            }(e, t)), o.d.searchArticles(i, e).then((t => {
                n(function(e, t) {
                    return {
                        type: c.vc,
                        searchResults: t.articles,
                        phrase: e
                    }
                }(e, t))
            })).catch((() => {
                n(function(e) {
                    return {
                        type: c.tc,
                        phrase: e
                    }
                }(e))
            }))
        }
    }
    const d = i()(((e, t) => e(u(t, !1))), 500, {
        leading: !1,
        trailing: !0
    });

    function l(e) {
        return t => {
            d(t, e)
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(1);
    t.a = Object(r.createSelector)([e => e.app], (e => e.isMessengerOpen))
}, function(e, t, n) {
    "use strict";
    var r = n(1);
    t.a = Object(r.createSelector)([e => e.accessibility], (e => e))
}, function(e, t, n) {
    "use strict";
    var r = n(1),
        i = n(45),
        o = n.n(i),
        s = n(67);
    t.a = Object(r.createSelector)(s.b, (({
        color: e,
        secondaryColor: t
    }) => {
        if (!e || !t) return {};
        const {
            gradient_start_color: n,
            gradient_end_color: r,
            button_text_color: i
        } = o()({
            primaryColor: e,
            secondaryColor: t,
            darkenAmount: 20
        });
        return {
            primaryColor: e,
            secondaryColor: t,
            gradientStartColor: n,
            gradientEndColor: r,
            buttonTextColor: i
        }
    }))
}, function(e, t, n) {
    "use strict";
    var r = n(1);
    t.a = Object(r.createSelector)([e => e.app], (e => e.isBooted || e.bootFailed || e.isBooting && e.isInstantBootEnabled))
}, function(e, t, n) {
    "use strict";
    var r = n(1);
    t.a = Object(r.createSelector)([e => e.user], (e => e ? e.locale : void 0))
}, function(e, t, n) {
    "use strict";
    var r = n(77),
        i = n.n(r),
        o = n(1),
        s = n(29),
        a = n(7),
        c = n(133),
        u = Object(o.createSelector)((e => e.user), s.a, (e => e.openInboundConversationIds), c.a, ((e, t, n, r) => {
            const i = Object(a.t)(t);
            return r && e.preventMultipleInboundConversation && (null == i ? void 0 : i.length) > 0 ? i.filter((o = n, e => -1 !== o.indexOf(e.id))) : [];
            var o
        }));
    t.a = Object(o.createSelector)(s.a, (e => e.newConversation), u, ((e, t, n) => {
        const r = Object(a.t)(e),
            o = i()([...n, ...r.filter(d)], (e => e.id));
        return t && 1 === t.parts.length && "saving" === t.parts[0].saveState && o.unshift(t), {
            recentConversations: o
        }
    }));

    function d(e) {
        const t = Date.now() - 2592e5;
        return e.lastPartCreatedAt > t
    }
}, , , , , , , , , , , , , function(e, t, n) {
    e.exports = n(258)
}, function(e, t, n) {
    "use strict";
    n.r(t);
    n(259);
    var r = n(5);
    void 0 !== window && void 0 !== window.Object && (!Object(r.a)() && window.parent.__INTERCOM_REACT_DEV_TOOLS__ && (window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = window.parent.__REACT_DEVTOOLS_GLOBAL_HOOK__), n(429))
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    var r = {
        "./ar.json": [430, 7],
        "./bg.json": [431, 8],
        "./bs.json": [432, 9],
        "./ca.json": [433, 10],
        "./cs.json": [434, 11],
        "./da.json": [435, 12],
        "./de-form.json": [436, 13],
        "./de.json": [437, 14],
        "./el.json": [438, 15],
        "./en.json": [226],
        "./es.json": [439, 16],
        "./et.json": [440, 17],
        "./fi.json": [441, 18],
        "./fr.json": [442, 19],
        "./he.json": [443, 20],
        "./hr.json": [444, 21],
        "./hu.json": [445, 22],
        "./id.json": [446, 23],
        "./it.json": [447, 24],
        "./ja.json": [448, 25],
        "./ko.json": [449, 26],
        "./lt.json": [450, 27],
        "./lv.json": [451, 28],
        "./mn.json": [452, 29],
        "./nb.json": [453, 30],
        "./nl.json": [454, 31],
        "./package.json": [455, 32],
        "./pl.json": [456, 33],
        "./pt-BR.json": [457, 34],
        "./pt.json": [458, 35],
        "./ro.json": [459, 36],
        "./ru.json": [460, 37],
        "./sl.json": [461, 38],
        "./sr.json": [462, 39],
        "./sv.json": [463, 40],
        "./tr.json": [464, 41],
        "./vi.json": [465, 42],
        "./zh-CN.json": [466, 43],
        "./zh-TW.json": [467, 44]
    };

    function i(e) {
        if (!n.o(r, e)) return Promise.resolve().then((function() {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
        }));
        var t = r[e],
            i = t[0];
        return Promise.all(t.slice(1).map(n.e)).then((function() {
            return n.t(i, 3)
        }))
    }
    i.keys = function() {
        return Object.keys(r)
    }, i.id = 393, e.exports = i
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    e.exports = n.p + "audio/failed.4da3027c.mp3"
}, function(e, t, n) {
    e.exports = n.p + "audio/notification.20576730.mp3"
}, function(e, t, n) {
    e.exports = n.p + "audio/operator.2b750c4a.mp3"
}, function(e, t, n) {
    e.exports = n.p + "audio/submit.3abafccd.mp3"
}, , , , , function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(192),
        i = n(12),
        o = n(87),
        s = n(35),
        a = n(27),
        c = n(109),
        u = n(21),
        d = n(56),
        l = n(134),
        p = n(34),
        f = n(174),
        b = n(3),
        h = n(1);
    const g = e => e.operator,
        m = Object(h.createSelector)(g, (e => e.lastComposerEvent)),
        v = Object(h.createSelector)(g, (e => e.clientsideMessageConditions));
    class Predicate {
        constructor(e) {
            this.chain = e, this.matched = !1
        }
        trigger() {
            this.triggering || (this.triggering = !0, this.matched = !0, this.chain.evaluate(), this.triggering = !1)
        }
        evaluate() {
            return this.matched
        }
        cancel() {}
    }
    class composite_predicate_CompositePredicate extends Predicate {
        constructor(e, t) {
            super(e), this.predicates = t
        }
        cancel() {
            this.predicates.forEach((e => e.cancel()))
        }
    }
    class and_predicate_AndPredicate extends composite_predicate_CompositePredicate {
        evaluate() {
            return this.predicates.every((e => e.evaluate()))
        }
    }
    class duration_predicate_DurationPredicate extends Predicate {
        constructor(e, t) {
            super(e), this.interval = t, this.timer = setTimeout((() => this.trigger()), t)
        }
        cancel() {
            clearTimeout(this.timer)
        }
    }
    var O = n(18);
    class time_on_page_predicate_TimeOnPagePredicate extends Predicate {
        constructor(e, t) {
            super(e), this._getURL = () => {
                var e;
                return null === (e = Object(O.d)()) || void 0 === e ? void 0 : e.href.toLowerCase()
            }, this._setURL = () => this.url = this._getURL(), this.interval = t, this._setTimeOnPageTimeout()
        }
        _check() {
            this.url !== this._getURL() && this._resetTimeOnPage()
        }
        _resetTimeOnPage() {
            this.cancel(), this.matched = !1, this._setTimeOnPageTimeout()
        }
        _setTimeOnPageTimeout() {
            this.timer = setTimeout((() => this.trigger()), this.interval), this.urlCheckInterval = setInterval((() => this._check()), 100), this._setURL()
        }
        evaluate() {
            return this._check(), this.matched
        }
        cancel() {
            clearTimeout(this.timer), clearInterval(this.urlCheckInterval)
        }
    }
    class duration_delta_predicate_DurationDeltaPredicate extends Predicate {
        constructor(e, t, n) {
            super(e), this.attribute = n, this.interval = t, setTimeout((() => this._createDeltaTimer()), 0)
        }
        _createDeltaTimer() {
            this.timer = setTimeout((() => {
                this._evaluateDeltaPredicate() ? this.trigger() : this._createDeltaTimer()
            }), this._getInterval())
        }
        _getInterval() {
            const e = this.getTimestamp();
            if (!e) return this.interval;
            const t = Date.now() - e;
            return Math.max(100, this.interval - t)
        }
        _evaluateDeltaPredicate() {
            const e = this.getTimestamp();
            if (!e) return !1;
            return Date.now() - e > this.interval
        }
        getTimestamp() {
            return this.chain.getAttribute(this.attribute)
        }
        cancel() {
            clearTimeout(this.timer)
        }
    }
    class periodic_predicate_PeriodicPredicate extends Predicate {
        constructor(e, t, n) {
            super(e), this.missing = n || !1, this.interval = t, this.intervalTimer = setInterval((() => {
                this._check()
            }), t)
        }
        _check() {
            this.check() ? this.trigger() : this.matched = !1
        }
        evaluate() {
            return this._check(), this.matched
        }
        cancel() {
            clearInterval(this.intervalTimer)
        }
    }
    class duration_since_predicate_DurationSincePredicate extends periodic_predicate_PeriodicPredicate {
        constructor(e, t, n, r) {
            super(e, t, r), this.attribute = n
        }
        check() {
            const e = this.chain.getAttribute(this.attribute);
            if (!e) return this.missing;
            return Date.now() - e >= this.interval
        }
    }
    class equals_predicate_EqualsPredicate extends periodic_predicate_PeriodicPredicate {
        constructor(e, t, n, r, i) {
            super(e, t), this.attribute = n, this.value = r, this.other = i
        }
        check() {
            return this.other ? this.chain.getAttribute(this.other) === this.chain.getAttribute(this.attribute) : this.value === this.chain.getAttribute(this.attribute)
        }
    }
    class or_predicate_OrPredicate extends composite_predicate_CompositePredicate {
        evaluate() {
            return this.predicates.some((e => e.evaluate()))
        }
    }
    var y = n(23),
        _ = n(26);
    var C = n(5);
    class css_selector_predicate_CssSelectorPredicate extends Predicate {
        constructor(e, t) {
            super(e), this._check = e => {
                if (this.isNodeVisible(e)) {
                    if (this.matched) return;
                    this.trigger()
                } else this.matched = !1
            }, this.selector = t
        }
        evaluate() {
            if (Object(C.a)()) this.matched || (e = this.selector, t = e => {
                this._check(e)
            }, Object(_.f)(e, (e => t => e({
                offsetWidth: t.offsetWidth,
                offsetHeight: t.offsetHeight,
                getClientRects: () => t.clientRects
            }))(t)));
            else {
                const e = window.parent.document.querySelector(this.selector);
                this._check(e)
            }
            var e, t;
            return this.matched
        }
        isNodeVisible(e) {
            return e && Object(y.u)(e)
        }
    }
    class string_predicate_StringPredicate extends Predicate {
        constructor(e, t, n, r) {
            super(e), this.targetString = t, this.comparison = n, this.candidateString = r
        }
        evaluate() {
            return this.matched = this._check(), this.matched
        }
        _check() {
            switch (this.comparison) {
                case "eq":
                    return this.candidateString === this.targetString;
                case "ne":
                    return this.candidateString !== this.targetString;
                case "starts_with":
                    return this.targetString.startsWith(this.candidateString);
                case "ends_with":
                    return this.targetString.endsWith(this.candidateString);
                case "contains":
                    return -1 !== this.targetString.indexOf(this.candidateString);
                case "not_contains":
                    return !(-1 !== this.targetString.indexOf(this.candidateString));
                case "known":
                    return !!this.targetString && "" !== this.targetString;
                default:
                    return !1
            }
        }
    }
    class url_predicate_UrlPredicate extends string_predicate_StringPredicate {
        constructor(e, t, n) {
            super(e), this._getURL = () => {
                var e;
                return null === (e = Object(O.d)()) || void 0 === e ? void 0 : e.href.toLowerCase()
            }, this.targetString = this._getURL(), this.comparison = t, this.candidateString = null == n ? void 0 : n.toLowerCase(), setTimeout((() => this.evaluate()), 0), this.interval = setInterval((() => this.evaluate()), 1e3)
        }
        evaluate() {
            return this.targetString = this._getURL(), this._check() ? this.trigger() : this.matched = !1, this.matched
        }
        _check() {
            if ("regex" === this.comparison) {
                return new RegExp(this.candidateString).test(this.targetString)
            }
            return super._check()
        }
        cancel() {
            clearInterval(this.interval)
        }
    }
    class predicate_chain_PredicateChain {
        constructor(e, t) {
            this.condition = e, this.callback = t, this.root = new and_predicate_AndPredicate(this, this.processSubpredicates(e.predicates))
        }
        evaluate() {
            if (!this.evaluating) {
                this.evaluating = !0;
                const e = this.root.evaluate();
                return e && (this.cancel(), setTimeout((() => this.callback(this.condition)), 0)), this.evaluating = !1, e
            }
        }
        cancel() {
            this.root.cancel()
        }
        setContext(e) {
            this.context = e
        }
        getAttribute(e) {
            if (this.context) return this.context[e]
        }
        processPredicate(e) {
            var t;
            switch (e.type) {
                case "or":
                    return new or_predicate_OrPredicate(this, this.processSubpredicates(e.predicates));
                case "and":
                    return new and_predicate_AndPredicate(this, this.processSubpredicates(e.predicates));
                case "eq":
                    return new equals_predicate_EqualsPredicate(this, this.parseInterval(e.interval), e.attribute, e.value, e.other);
                case "string":
                    if ("client_attributes.last_visited_url" === e.attribute) return new url_predicate_UrlPredicate(this, e.comparison, e.value);
                case "duration_integer":
                    return null !== (t = e.attribute) && void 0 !== t && -1 !== t.indexOf("time_on_page") ? new time_on_page_predicate_TimeOnPagePredicate(this, 1e3 * this.parseInterval(e.value)) : new duration_predicate_DurationPredicate(this, 1e3 * this.parseInterval(e.value));
                case "duration_integer_ms":
                    return new duration_predicate_DurationPredicate(this, this.parseInterval(e.value));
                case "duration_delta":
                    return new duration_delta_predicate_DurationDeltaPredicate(this, this.parseInterval(e.value), e.attribute);
                case "duration_since":
                    return new duration_since_predicate_DurationSincePredicate(this, this.parseInterval(e.value), e.attribute, e.missing);
                case "css_selector":
                    return new css_selector_predicate_CssSelectorPredicate(this, e.value)
            }
        }
        parseInterval(e) {
            return parseInt(e, 10)
        }
        processSubpredicates(e) {
            return e ? e.map((e => this.processPredicate(e))).filter(Boolean) : []
        }
    }
    class predicates_matcher_PredicatesMatcher {
        constructor(e) {
            this.callback = e, this.isStarted = !1, this.context = {}
        }
        start(e) {
            this.isStarted && this.shutdown(), this.conditions = e, this._setupPredicates(e), this.isStarted = !0
        }
        shutdown() {
            this.predicateChains && this.predicateChains.forEach((e => e.cancel())), this.isStarted = !1
        }
        setContext(e) {
            this.predicateChains && this.predicateChains.forEach((t => t.setContext(e)))
        }
        _setupPredicates(e) {
            this.predicateChains = e.map((e => new predicate_chain_PredicateChain(e, this.callback)))
        }
    }
    var S = n(6),
        j = n(33),
        w = n(7),
        E = n(0);

    function I(e) {
        return (t, n) => {
            const {
                session: r
            } = n();
            return b.d.visitorAutoMessageConditionSatisfied(r, e).then((e => {
                e && (Object(w.s)(e).forEach((e => t(Object(j.a)(b.d, e, !1)))), t({
                    type: E.Gd
                }), t(Object(S.o)(b.d, e, !1, Date.now())))
            }), (() => t({
                type: E.Fd
            })))
        }
    }
    const A = Object(h.createStructuredSelector)({
        clientsideMessageConditions: v
    });
    var T = function(e) {
            const t = new predicates_matcher_PredicatesMatcher((t => {
                e.dispatch(I(t))
            }));
            return () => {
                const {
                    clientsideMessageConditions: n
                } = A(e.getState()), {
                    conditions: r
                } = t;
                ((e, t) => {
                    if (!t) return !1;
                    if (!e && t) return !0;
                    if (e.length !== t.length) return !0;
                    const n = e.map((e => e.id)),
                        r = t.map((e => e.id));
                    return !n.every((e => r.indexOf(e) >= 0))
                })(r, n) && t.start(n)
            }
        },
        R = n(57),
        P = n.n(R),
        M = n(73),
        D = n(46);
    var k = n(19),
        N = n(2),
        U = n(9);

    function L(e) {
        return e.reduce(((e, t) => (Object(w.m)(t) || (e[Object(w.g)(t)] = !0), e)), {})
    }

    function x(e, t) {
        const n = Object(D.a)(t).length > 0 && function(e, t) {
            const {
                forceSnippet: n
            } = t.notificationTypeOverrides;
            return e.filter((e => {
                if (Object(w.m)(e)) return !1;
                const t = `${e.id}-${Object(k.a)(e.parts).id}`;
                return void 0 === n[t]
            }))
        }(e, t).length > 0;
        if (Object(U.i)() && void 0 !== e.find((e => Object(w.i)(e)))) return !0;
        const r = new Date;
        r.setDate(r.getDate() - 2);
        return !((t.user ? new Date(t.user.lastContactedAt) : new Date) < r) && (e.length > 1 || n)
    }
    var B = function(e) {
            return () => {
                const t = e.getState(),
                    n = L(Object(D.a)(t).slice(0, -3)),
                    r = Object(M.a)(t),
                    i = L(x(r, t) ? r : []);
                var o, s;
                (Object.keys(n).length > 0 || Object.keys(i).length > 0) && function(e, t, n) {
                    const r = (e => e.notificationTypeOverrides.suppress)(e),
                        i = (e => e.notificationTypeOverrides.forceSnippet)(e);
                    return !P()(r, t) || !P()(i, n)
                }(t, n, i) && e.dispatch((o = n, s = i, {
                        type: E.pd,
                        suppress: o,
                        forceSnippet: s
                    })),
                    function(e, t, n) {
                        if (Object.keys(e).length <= 1) return;
                        const r = t.filter((e => !e.dismissed));
                        if (1 !== r.length || "full" !== r[0].parts[0].notificationType) return;
                        Object(N.g)("fullMessageSuppressed", {
                            messageType: r[0].parts[0].messageType,
                            dismissedCount: t.length - r.length,
                            isLauncherEnabled: n.isLauncherEnabled
                        })
                    }(i, r, t.launcher)
            }
        },
        $ = n(75),
        F = n(248),
        V = n.n(F);

    function H(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function G(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? H(Object(n), !0).forEach((function(t) {
                q(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : H(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function q(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const {
        assign: z
    } = Object, W = {
        isBooting: !1,
        isBooted: !1,
        bootFailed: !1,
        isRehydrated: !1,
        isMessengerOpen: !1,
        isWaitingForOpenContent: !1,
        isErrorReportingDisabled: !1,
        isOverrideSamplingEnabled: !1,
        isIntercomLinkEnabled: !1,
        conversationId: null,
        features: {
            anonymousInboundMessages: !1,
            googleAnalytics: !1,
            inboundMessages: !1,
            outboundMessages: !1
        },
        boundWebEvents: [],
        isBoundEventCreatorOpen: !1,
        isInstantBootEnabled: !0,
        cookieDomain: void 0,
        viewStack: [],
        userConversationAttachmentsEnabled: !0,
        userConversationGifsEnabled: !0,
        isDeveloperWorkspace: !1,
        upfrontEmailCollection: {
            upfrontEmailCollectionSubmitted: !1,
            upfrontEmailCollectionSetting: "never",
            upfrontEmailCollectorShowing: !1
        },
        launcherLogoUrl: void 0,
        customGoogleAnalyticsTrackerId: void 0,
        temporaryExpectationsMessage: void 0,
        hideLightweightAppMessenger: !1,
        hasTheMessengerBeenOpened: !1
    };

    function J(e, t) {
        if (t === Object(i.e)(e)) return z({}, e);
        const n = [].concat(e.viewStack, [t]);
        return z({}, e, {
            viewStack: n
        })
    }

    function K(e) {
        return z({}, e, {
            viewStack: []
        })
    }

    function Y(e) {
        return z({}, e, {
            viewStack: e.viewStack.slice(0, -1)
        })
    }
    const {
        assign: Q
    } = Object, X = {
        isLauncherEnabled: !1,
        launcherEnabledOverride: "not-present"
    };
    const {
        assign: Z
    } = Object, ee = {
        isPresent: !1
    };
    const {
        assign: te
    } = Object;

    function ne(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function re(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? ne(Object(n), !0).forEach((function(t) {
                ie(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ne(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function ie(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const oe = {
        id: null,
        parts: [],
        operator: null
    };
    const se = {};
    const ae = {};

    function ce(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function ue(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? ce(Object(n), !0).forEach((function(t) {
                de(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ce(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function de(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const le = {};
    var pe = n(39),
        fe = n.n(pe),
        be = n(13);

    function he(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function ge(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? he(Object(n), !0).forEach((function(t) {
                me(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : he(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function me(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const ve = "intercom-article-expanded-mode",
        {
            assign: Oe
        } = Object,
        ye = {
            activeArticleId: null,
            isExpanded: !1,
            expansionTransitionComplete: !1,
            isLoaded: !1,
            viewStack: [],
            transitioningBack: !1,
            inSearchBrowse: !1,
            hash: "",
            articleLocale: null,
            isStandalone: !1
        };

    function _e(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Ce(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? _e(Object(n), !0).forEach((function(t) {
                Se(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _e(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function Se(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const je = {};
    const we = [];
    var Ee = n(131),
        Ie = n.n(Ee),
        Ae = n(81),
        Te = n.n(Ae);
    var Re = function(e, t) {
        switch (t.type) {
            case E.kd:
            case E.L:
            case E.zb:
                return Object.assign({}, e, {
                    attributes: e.attributes.map((e => Object.assign({}, e, {
                        saveState: fe()(e.value) || "" === e.value ? "unsaved" : "saved"
                    })))
                });
            case E.nd:
                {
                    const {
                        identifier: n,
                        value: r
                    } = t;
                    return Object.assign({}, e, {
                        attributes: e.attributes.map((e => e.identifier === n ? Object.assign({}, e, {
                            value: r,
                            saveState: "saving"
                        }) : e))
                    })
                }
            case E.od:
                return Object.assign({}, e, {
                    attributes: e.attributes.map((e => e.identifier === t.identifier ? Object.assign({}, e, {
                        saveState: "saved"
                    }) : e))
                });
            case E.md:
                return Object.assign({}, e, {
                    attributes: e.attributes.map((e => e.identifier === t.identifier ? Object.assign({}, e, {
                        saveState: "failed"
                    }) : e))
                });
            default:
                return e
        }
    };
    const {
        assign: Pe
    } = Object;

    function Me({
        createdAt: e,
        body: t,
        clientId: n,
        file: r,
        isMessage: i,
        selectedReplyOption: o,
        composerSuggestionItem: s
    }) {
        return {
            body: t,
            createdAt: e,
            clientId: n,
            isMessage: i,
            file: r,
            selectedReplyOption: o,
            composerSuggestionItem: s,
            partType: i ? "message" : "comment",
            eventData: {},
            saveState: "saving",
            seenState: "not-seen-yet",
            replyOptions: [],
            author: {
                isAdmin: !1,
                isSelf: !0
            }
        }
    }
    var De = function(e = [], t) {
            switch (t.type) {
                case E.K:
                    {
                        const {
                            body: n,
                            createdAt: r,
                            file: i,
                            composerSuggestionItem: o,
                            clientId: s
                        } = t.part;
                        return t.isRetry ? e.map((e => Pe({}, e, {
                            saveState: "saving"
                        }))) : e.concat(Me({
                            createdAt: r,
                            body: n,
                            file: i,
                            isMessage: !0,
                            composerSuggestionItem: o,
                            clientId: s
                        }))
                    }
                case E.J:
                    return e.map((e => Pe({}, e, {
                        saveState: "failed",
                        saveFailureReason: t.reason
                    })));
                case E.H:
                    {
                        const {
                            body: n,
                            createdAt: r,
                            clientId: i,
                            file: o,
                            selectedReplyOption: s
                        } = t.part;
                        return t.isRetry ? e.map((e => i === e.clientId ? Pe({}, e, {
                            saveState: "saving"
                        }) : e)) : e.concat(Me({
                            createdAt: r,
                            body: n,
                            clientId: i,
                            file: o,
                            isMessage: !1,
                            selectedReplyOption: s
                        }))
                    }
                case E.I:
                    return e.map((e => t.part.clientId === e.clientId ? Pe({}, e, t.part, {
                        saveState: "saved"
                    }) : e));
                case E.G:
                    return e.map((e => t.part.clientId === e.clientId ? Pe({}, e, {
                        saveState: "failed",
                        saveFailureReason: t.reason
                    }) : e));
                case E.kd:
                case E.zb:
                case E.L:
                    return t.conversation.parts.map((e => e.form ? Pe({}, e, {
                        form: Re(e.form, t),
                        saveState: e.saveState || "saved"
                    }) : Pe({}, e, {
                        saveState: e.saveState || "saved"
                    })));
                case E.S:
                case E.T:
                    return e.map((e => e.reactionsReply ? Pe({}, e, {
                        reactionsReply: {
                            reactionIndex: t.reactionIndex,
                            reactionSet: e.reactionsReply.reactionSet
                        }
                    }) : e));
                case E.l:
                    return e.map((e => "conversationRating" === e.messageType ? Pe({}, e, {
                        conversationRating: {
                            chosenRating: t.ratingIndex
                        }
                    }) : e));
                case E.c:
                    return e.map((e => "conversationRating" === e.messageType ? Pe({}, e, {
                        conversationRating: Pe({}, e.conversationRating, {
                            remark: t.remark,
                            submitted: !0
                        })
                    }) : e));
                case E.wd:
                    return e.map((e => t.part.clientId === e.clientId ? Pe({}, e, {
                        body: [Pe({}, e.body[0], {
                            progress: t.progress
                        })]
                    }) : e));
                case E.Ad:
                case E.f:
                    return e.map((e => "not-seen-yet" === e.seenState ? Pe({}, e, {
                        seenState: "seen"
                    }) : e));
                case E.nd:
                case E.od:
                case E.md:
                    return e.map((e => e.id === t.partId ? Pe({}, e, {
                        form: Re(e.form, t)
                    }) : e));
                default:
                    return e
            }
        },
        ke = function(e = {}, t) {
            if (t.type === E.f) {
                const {
                    lastActiveAt: e,
                    firstName: n,
                    avatarUrl: r,
                    adminId: i
                } = t;
                return {
                    id: i,
                    lastActiveAt: e,
                    firstName: n,
                    avatar: {
                        square128: r
                    }
                }
            }
            return e
        },
        Ne = n(83);

    function Ue(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Le(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Ue(Object(n), !0).forEach((function(t) {
                xe(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ue(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function xe(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const {
        assign: Be
    } = Object, $e = {
        fetchState: "partial",
        isFetching: !1,
        isUpdating: !1,
        read: !0,
        dismissed: !1,
        preventEndUserReplies: !1,
        parts: [],
        participants: [],
        isEmailAttributeCollectorInserted: !1,
        composerSuggestions: Ne.b
    };

    function Fe(e, t) {
        return void 0 !== e ? e : t
    }
    var Ve = function(e = $e, t) {
        switch (t.type) {
            case E.yb:
                {
                    const {
                        conversationId: n,
                        isUpdating: r
                    } = t;
                    return Be({}, e, {
                        id: Fe(e.id, n),
                        fetchState: Fe(e.fetchState, "partial"),
                        isFetching: !0,
                        isUpdating: r,
                        read: Fe(e.read, !0),
                        dismissed: Fe(e.dismissed, !1),
                        preventEndUserReplies: Fe(e.preventEndUserReplies, !1),
                        parts: Fe(e.parts, [])
                    })
                }
            case E.kd:
            case E.zb:
                {
                    const {
                        conversation: n
                    } = t,
                    r = n.parts.some((e => !e.author.isAdmin));
                    return n.parts = Object(w.q)(n, e),
                    n.composerState = Object(w.p)(n, e),
                    Be({}, e, n, {
                        fetchState: "all",
                        isFetching: !1,
                        isUpdating: !1,
                        userParticipated: r,
                        parts: De(e.parts, t)
                    })
                }
            case E.md:
            case E.od:
            case E.L:
                {
                    const {
                        conversation: n
                    } = t;
                    return Be({}, e, n, {
                        fetchState: "all",
                        isFetching: !1,
                        isUpdating: !1,
                        userParticipated: !0,
                        parts: De(e.parts, t)
                    })
                }
            case E.D:
            case E.Kb:
                return Be({}, e, {
                    read: !0
                });
            case E.bb:
                return Be({}, e, {
                    dismissed: !0
                });
            case E.I:
            case E.H:
                {
                    const {
                        createdAt: n
                    } = t.part;
                    return Be({}, e, {
                        userParticipated: !0,
                        lastPartCreatedAt: n,
                        parts: De(e.parts, t)
                    })
                }
            case E.nd:
            case E.T:
            case E.G:
            case E.wd:
            case E.l:
            case E.c:
            case E.Ad:
                return Be({}, e, {
                    parts: De(e.parts, t)
                });
            case E.f:
                return Be({}, e, {
                    lastTypingAdmin: ke(e.lastTypingAdmin, t),
                    parts: De(e.parts, t)
                });
            case E.fb:
                return Be({}, e, {
                    isEmailAttributeCollectorInserted: !0
                });
            case E.B:
            case E.Gc:
            case E.Hc:
            case E.Ic:
                return null == t.conversationId ? e : Le(Le({}, e), {}, {
                    composerSuggestions: Object(Ne.a)(e.composerSuggestions, t)
                });
            default:
                return e
        }
    };
    const {
        assign: He
    } = Object, Ge = {
        isFetching: !1,
        pagesFetched: 0,
        scrollPosition: 0,
        byId: {}
    };

    function qe(e = {}, t, n, r) {
        const {
            fetchState: i
        } = e;
        return He({}, e, {
            id: t,
            fetchState: i || "partial",
            dismissed: n,
            read: r
        })
    }

    function ze(e = {}, t) {
        switch (t.type) {
            case E.R:
            case E.yd:
                {
                    const {
                        unreadConversationIds: n,
                        unreadDismissedConversationIds: r
                    } = t.user || {};
                    if (fe()(n) && fe()(r)) return e;
                    const i = {};
                    return r && r.forEach((t => i[t] = qe(e[t], t, !0, !1))),
                    n && n.forEach((t => i[t] = qe(e[t], t, !1, !1))),
                    He({}, e, i)
                }
            case E.Fb:
                {
                    const {
                        unreadConversationIds: n,
                        unreadDismissedConversationIds: r
                    } = t.unreadConversations || {},
                    i = {};
                    return null == r || r.forEach((t => i[t] = qe(e[t], t, !0, !1))),
                    null == n || n.forEach((t => i[t] = qe(e[t], t, !1, !1))),
                    He({}, e, i)
                }
            case E.wb:
            case E.Db:
            case E.Cb:
                {
                    var n;
                    const r = ((null == t || null === (n = t.conversations) || void 0 === n ? void 0 : n.conversations) || t.conversations).reduce(((t, n) => {
                        const {
                            id: r
                        } = n;
                        return e[r] && "all" === e[r].fetchState && ! function(e, t, n) {
                            var r, i;
                            const o = Te()(t, [e, "parts"]),
                                s = Te()(n, "parts");
                            return (null === (r = Ie()(o)) || void 0 === r ? void 0 : r.id) !== (null === (i = Ie()(s)) || void 0 === i ? void 0 : i.id)
                        }(r, e, n) || (t[r] = function(e = {}) {
                            return He({}, e, {
                                fetchState: "summary",
                                isFetching: !1,
                                isUpdating: !1,
                                parts: null == e ? void 0 : e.parts.map((e => He({}, e, {
                                    saveState: "saved"
                                })))
                            })
                        }(n)), t
                    }), {});
                    return He({}, e, r)
                }
            case E.od:
            case E.L:
            case E.zb:
            case E.kd:
                {
                    const {
                        id: n
                    } = t.conversation || {},
                    r = {
                        [n]: Ve(e[n], t)
                    };
                    return He({}, e, r)
                }
            case E.nd:
            case E.T:
            case E.U:
            case E.yb:
            case E.H:
            case E.I:
            case E.G:
            case E.D:
            case E.Kb:
            case E.l:
            case E.md:
            case E.c:
            case E.Hc:
            case E.Gc:
            case E.Ic:
                {
                    const n = t.conversationId;
                    if (null == n) return e;
                    const r = {
                        [n]: Ve(e[n], t)
                    };
                    return He({}, e, r)
                }
            case E.f:
            case E.Ad:
                {
                    const n = t.conversationId;
                    if (void 0 === e[n]) return e;
                    const r = {
                        [n]: Ve(e[n], t)
                    };
                    return He({}, e, r)
                }
            case E.wd:
                {
                    const n = t.conversationId;
                    if (void 0 === n) return e;
                    const r = {
                        [n]: Ve(e[n], t)
                    };
                    return He({}, e, r)
                }
            case E.bb:
                {
                    var r;
                    const n = null == t || null === (r = t.conversationIds) || void 0 === r ? void 0 : r.reduce(((n, r) => (n[r] = Ve(e[r], t), n)), {});
                    return He({}, e, n)
                }
            case E.fb:
                {
                    const n = t.conversationId;
                    if (void 0 === e[n]) return e;
                    const r = {
                        [n]: Ve(e[n], t)
                    };
                    return He({}, e, r)
                }
            default:
                return e
        }
    }

    function We(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Je(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? We(Object(n), !0).forEach((function(t) {
                Ke(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : We(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function Ke(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const {
        assign: Ye
    } = Object, Qe = {
        isFetching: !1,
        isUpdating: !1,
        fetchState: "all",
        read: !0,
        intercomLinkSolution: "live-chat",
        parts: [],
        participants: [],
        composerState: {
            visible: !0
        },
        composerSuggestions: Ne.b,
        botIntroId: null,
        articleUrl: null
    };
    const Xe = {};
    const Ze = {
        suppress: {},
        forceSnippet: {}
    };
    const {
        assign: et
    } = Object, tt = {
        isSaving: !1,
        showErrorMessage: !1,
        errorMessage: null
    };
    const {
        assign: nt
    } = Object, rt = {
        isInstallModeOpen: !1,
        installModeConfig: {
            activeSubscription: !1,
            userHashVerified: !1,
            secureInstallV2: !1,
            messengerEnabledForVisitors: !0,
            messengerEnabledForUsers: !0
        }
    };
    const {
        assign: it
    } = Object, ot = {
        isFetching: !1,
        gifs: [],
        fetchingFailed: !1,
        searchTerm: null
    };
    var st = n(38);
    const at = {
        eventData: {
            selector: "",
            eventTrigger: st.b.CLICK.key,
            name: "",
            sourceUrl: "",
            urlRegex: ""
        },
        stage: st.a.CHOOSE_EVENT_TYPE
    };
    var ct = n(10),
        ut = n.n(ct);
    const {
        assign: dt
    } = Object, lt = {
        isLauncherDiscoveryModeEnabled: !1,
        isLauncherDiscoveryModeOpening: !1,
        isLauncherDiscoveryModeClosing: !1,
        hasDiscoveredLauncher: !1
    };

    function pt(e) {
        const {
            app: {
                features: t,
                inboundConversationsDisabled: n,
                officeHoursResponse: r
            },
            clientsideMessageConditions: i,
            clientsideRulesetConditions: o,
            role: s
        } = e;
        return !!t.launcherDiscoveryMode && (!n && (!(!ut()(i) || !ut()(o)) && (!!fe()(r) && "visitor" === s)))
    }
    var ft = n(65),
        bt = n.n(ft),
        ht = n(25),
        gt = n.n(ht),
        mt = n(53);

    function vt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Ot(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? vt(Object(n), !0).forEach((function(t) {
                yt(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : vt(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function yt(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const _t = {};
    const Ct = {
        isFetching: !1,
        isFetched: !1,
        isFailed: !1,
        matchedSlots: [],
        fetchedSlots: [],
        hasMoreConversations: !1,
        articleSuggestions: null
    };

    function St(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function jt(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? St(Object(n), !0).forEach((function(t) {
                wt(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : St(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function wt(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const Et = {
        isOpen: !1,
        isSheetsDataLoading: !1,
        isSheetsDataLoaded: !1,
        isProxyLoaded: !1,
        isNavigating: !1,
        sourceCard: null,
        data: null,
        url: null,
        sheetTitle: ""
    };

    function It(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function At(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? It(Object(n), !0).forEach((function(t) {
                Tt(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : It(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function Tt(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const Rt = {
        composerHasContent: !1,
        lastComposerEvent: 0,
        lastArticleClosedAt: null,
        conversationIdOfLastViewedArticle: null,
        clientsideMessageConditions: null,
        clientsideRulesetConditions: null,
        lastTriggerTransitionTimestamp: null,
        userCreatedConversationAt: null
    };

    function Pt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Mt(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Pt(Object(n), !0).forEach((function(t) {
                Dt(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pt(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function Dt(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const kt = {
        isShown: !1,
        alertType: void 0,
        alertPayload: void 0
    };

    function Nt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Ut(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Nt(Object(n), !0).forEach((function(t) {
                Lt(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nt(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function Lt(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const xt = {};

    function Bt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function $t(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Bt(Object(n), !0).forEach((function(t) {
                Ft(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Bt(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function Ft(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const Vt = {
        tabNavigation: !1,
        accessibilityTheme: "default",
        secondaryAccessibilityTheme: "light"
    };

    function Ht(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Gt(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Ht(Object(n), !0).forEach((function(t) {
                qt(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ht(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function qt(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const zt = {
        isFetching: !1,
        isFetched: !1,
        isPreviewing: !1,
        fetchingFailed: !1,
        activeTour: void 0,
        updateFailed: !1,
        videoAudioMuted: !0,
        userHasInteractedWithVideo: !1,
        endTourAnimation: "",
        isAwaitingProgress: !1
    };

    function Wt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Jt(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Wt(Object(n), !0).forEach((function(t) {
                Kt(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wt(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function Kt(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const Yt = {
        triggers: {},
        active: null,
        failed: !1
    };
    var Qt = n(77),
        Xt = n.n(Qt),
        Zt = n(102),
        en = n.n(Zt);

    function tn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function nn(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? tn(Object(n), !0).forEach((function(t) {
                rn(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tn(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function rn(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const on = {
        allSuggestions: [],
        isDismissed: !1,
        serverSideSuggestions: null,
        previewSuggestions: null
    };
    const sn = [];

    function an(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function cn(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? an(Object(n), !0).forEach((function(t) {
                un(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : an(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function un(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const dn = {
        content: null
    };

    function ln(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function pn(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? ln(Object(n), !0).forEach((function(t) {
                fn(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ln(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function fn(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const bn = {
        composerSuggestions: null
    };

    function hn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function gn(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? hn(Object(n), !0).forEach((function(t) {
                mn(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : hn(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function mn(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const vn = {
        isActive: !1
    };

    function On(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function yn(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? On(Object(n), !0).forEach((function(t) {
                _n(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : On(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function _n(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const Cn = {
        type: null,
        metadata: {}
    };

    function Sn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function jn(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Sn(Object(n), !0).forEach((function(t) {
                wn(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sn(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function wn(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const En = {
        isOpen: !1,
        isFetching: !0,
        fetchingFailed: !1,
        phrase: "",
        searchResults: [],
        selectedArticleCollectionId: null,
        showArticleCollection: !1,
        showSearchResults: !1,
        hasSearchResults: !1,
        routedToNewConversation: !1,
        immediateSearch: !1,
        hideResultsWithDelay: !1,
        closeTransitionEnded: !0,
        searchedPhrase: "",
        hasViewedAnArticle: !1,
        skipOpenAnimation: !1,
        isViewingArticle: !1,
        isSearchFocused: !1
    };
    const In = [];

    function An(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Tn(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? An(Object(n), !0).forEach((function(t) {
                Rn(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : An(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function Rn(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var Pn = Object($.combineReducers)({
            app: function(e = W, t) {
                switch (t.type) {
                    case E.Q:
                        {
                            const {
                                cookieDomain: n
                            } = t.customizationAttributes;
                            return z({}, e, {
                                bootFailed: !1,
                                isBooting: !e.isBooted,
                                cookieDomain: n
                            })
                        }
                    case E.R:
                        {
                            const {
                                activeAdmins: n,
                                alignment: r,
                                backgroundImage: i,
                                boundWebEvents: o,
                                color: s,
                                customGoogleAnalyticsTrackerId: a,
                                expectedResponseDelay: c,
                                expectedResponseDelayTranslationKey: u,
                                features: d,
                                helpCenterSiteUrl: l,
                                horizontalPadding: p,
                                accessToTeammateEnabled: f,
                                isAudioEnabled: b,
                                isDeveloperWorkspace: h,
                                isErrorReportingDisabled: g,
                                isInstantBootEnabled: m,
                                isIntercomLinkEnabled: v,
                                isOverrideSamplingEnabled: O,
                                lastActiveAt: y,
                                launcherExpectedResponseDelayTranslationKey: _,
                                launcherLogoUrl: C,
                                logoUrl: S,
                                name: j,
                                officeHoursResponse: w,
                                originCookieDomain: E,
                                realtimeConfig: I,
                                secondaryColor: A,
                                selfServeSuggestionsMatch: T,
                                smsEnabled: R,
                                teamGreeting: P,
                                teamIntro: M,
                                temporaryExpectationsMessage: D,
                                upfrontEmailCollectionSetting: k,
                                useCacheFor: N,
                                userConversationAttachmentsEnabled: U,
                                userConversationGifsEnabled: L,
                                verticalPadding: x
                            } = t.user.app,
                            B = null != N && -1 !== N.indexOf("inbound_conversations_disabled") && (e.isRehydrated || e.isBooted) ? e.inboundConversationsDisabled : t.user.app.inboundConversationsDisabled;
                            return z({}, e, {
                                activeAdmins: n,
                                alignment: r,
                                backgroundImage: i,
                                bootFailed: !1,
                                boundWebEvents: o,
                                color: s,
                                customGoogleAnalyticsTrackerId: a,
                                expectedResponseDelay: c,
                                expectedResponseDelayTranslationKey: u,
                                features: d,
                                helpCenterSiteUrl: l,
                                horizontalPadding: p,
                                inboundConversationsDisabled: B,
                                accessToTeammateEnabled: f,
                                isAudioEnabled: b,
                                isBooted: !0,
                                isBooting: !1,
                                isDeveloperWorkspace: h,
                                isErrorReportingDisabled: g,
                                isInstantBootEnabled: m,
                                isIntercomLinkEnabled: v,
                                isOverrideSamplingEnabled: O,
                                lastActiveAt: y,
                                launcherExpectedResponseDelayTranslationKey: _,
                                launcherLogoUrl: C,
                                logoUrl: S,
                                name: j,
                                officeHoursResponse: w,
                                originCookieDomain: E,
                                realtimeConfig: I,
                                secondaryColor: A,
                                selfServeSuggestionsMatch: T,
                                smsEnabled: R,
                                teamGreeting: P,
                                teamIntro: M,
                                temporaryExpectationsMessage: D,
                                userConversationAttachmentsEnabled: U,
                                userConversationGifsEnabled: L,
                                verticalPadding: x,
                                upfrontEmailCollection: G(G({}, e.upfrontEmailCollection), {}, {
                                    upfrontEmailCollectionSetting: k
                                })
                            })
                        }
                    case E.P:
                        return t.isIdentityVerificationError ? z({}, e, {
                            bootFailed: !0,
                            isBooting: !1,
                            isBooted: !1
                        }) : z({}, e, {
                            bootFailed: e.isBooting
                        });
                    case E.Ob:
                        return z({}, e, {
                            isWaitingForOpenContent: !0
                        });
                    case E.Pb:
                    case E.Nb:
                        return z({}, e, {
                            isWaitingForOpenContent: !1
                        });
                    case E.Xb:
                        return z({}, e, {
                            isMessengerOpen: !0,
                            viewStack: Object(i.k)(e) ? ["home-screen"] : e.viewStack,
                            hideLightweightAppMessenger: t.hideLightweightAppMessenger,
                            hasTheMessengerBeenOpened: !0
                        });
                    case E.v:
                        return z({}, e, {
                            isMessengerOpen: !1
                        });
                    case E.Vc:
                        return z(J(t.replaceCurrentView ? Y(e) : e, "new-conversation"), {
                            conversationId: null
                        });
                    case E.Wc:
                        return z(e, {
                            conversationId: null
                        });
                    case E.Qc:
                        return z(J(t.replaceCurrentView ? Y(e) : e, "conversation"), {
                            conversationId: t.conversationId
                        });
                    case E.Rc:
                        return t.resetNavigationHistory ? J(K(e), "conversations") : J(e, "conversations");
                    case E.xb:
                        if (e.conversationId === t.conversationId) {
                            let t = z(e, {
                                conversationId: null
                            });
                            return "conversation" === t.viewStack.slice(-1)[0] && (t = Y(t)), Object(i.k)(t) && (t = z(t, {
                                viewStack: ["home-screen"]
                            })), t
                        }
                        return e;
                    case E.Sc:
                        return J(e, "empty-screen");
                    case E.Uc:
                        return J(t.replaceCurrentView ? Y(e) : e, "messenger-trigger");
                    case E.Tc:
                        return J(e, "home-screen");
                    case E.L:
                        return "new-conversation" === Object(i.e)(e) ? z({}, J(Y(e), "conversation"), {
                            conversationId: t.conversation.id
                        }) : e;
                    case E.Sb:
                        return z({}, e, {
                            conversationId: t.conversationId
                        });
                    case E.oc:
                        return z({}, e, t.state.app, {
                            features: z({}, e.features, t.state.app.features),
                            isRehydrated: !0
                        });
                    case E.Tb:
                        return z({}, e, {
                            isBoundEventCreatorOpen: !0
                        });
                    case E.Mb:
                        return P()(e.viewStack.slice(-2), ["browse-mode", "conversation"]) ? J(K(e), "home-screen") : Y(e);
                    case E.gd:
                        return z({}, e, {
                            upfrontEmailCollection: G(G({}, e.upfrontEmailCollection), {}, {
                                upfrontEmailCollectorShowing: !e.upfrontEmailCollection.upfrontEmailCollectorShowing
                            })
                        });
                    case E.zd:
                        return z({}, e, {
                            upfrontEmailCollection: G(G({}, e.upfrontEmailCollection), {}, {
                                upfrontEmailCollectionSubmitted: !0
                            })
                        });
                    default:
                        return e
                }
            },
            launcher: function(e = X, t) {
                switch (t.type) {
                    case E.Q:
                        {
                            const n = "not-present" === t.launcherEnabledOverride ? e.launcherEnabledOverride : t.launcherEnabledOverride;
                            return Q({}, e, {
                                launcherEnabledOverride: n
                            })
                        }
                    case E.R:
                        {
                            const {
                                isLauncherEnabled: n
                            } = t.user.app;
                            return Q({}, e, {
                                isLauncherEnabled: n
                            })
                        }
                    case E.P:
                        return t.isIdentityVerificationError ? Q({}, e, {
                            isLauncherEnabled: !1
                        }) : e;
                    case E.oc:
                        return Q({}, e, t.state.launcher);
                    default:
                        return e
                }
            },
            botIntro: function(e = oe, t) {
                if (t.type === E.R) {
                    const n = t.user.botIntro;
                    return n ? re(re({}, e), {}, {
                        id: n.id,
                        parts: n.parts,
                        operator: n.operator
                    }) : e
                }
                return e
            },
            user: function(e = ee, t) {
                var n;
                switch (t.type) {
                    case E.Q:
                        {
                            const {
                                url: n,
                                customAttributes: r,
                                anonymousSessionDuration: i,
                                activeCompanyId: o
                            } = t;
                            return Z({}, e, {
                                url: n,
                                customAttributes: r,
                                anonymousSessionDuration: i,
                                activeCompanyId: o
                            })
                        }
                    case E.R:
                        {
                            var r;
                            const {
                                id: n,
                                locale: i,
                                countryCode: o,
                                role: s,
                                name: a,
                                userSuppliedEmail: c,
                                unreadConversationIds: u,
                                unreadDismissedConversationIds: d,
                                notificationLinkConversationId: l,
                                phoneNumber: p,
                                articleConversationId: f,
                                cdasBreachingLimit: b,
                                lastContactedAt: h,
                                requiresCookieConsent: g,
                                resolutionBotBehaviorVersionId: m,
                                searchRequiredBeforeConversation: v,
                                preventMultipleInboundConversation: O,
                                testAssignments: y
                            } = t.user,
                            _ = (null == t || null === (r = t.user) || void 0 === r ? void 0 : r.hasConversations) || ((null == u ? void 0 : u.length) || 0) > 0 || ((null == d ? void 0 : d.length) || 0) > 0,
                            C = Z({}, e.testAssignments, y);
                            return Z({}, e, {
                                id: n,
                                locale: i,
                                countryCode: o,
                                role: s,
                                name: a,
                                userSuppliedEmail: c,
                                hasConversations: _,
                                phoneNumber: p,
                                articleConversationId: f,
                                notificationLinkConversationId: l,
                                cdasBreachingLimit: b,
                                lastContactedAt: h,
                                requiresCookieConsent: g,
                                resolutionBotBehaviorVersionId: m,
                                searchRequiredBeforeConversation: v,
                                preventMultipleInboundConversation: O,
                                testAssignments: C
                            })
                        }
                    case E.K:
                    case E.Gd:
                    case E.zb:
                        return Z({}, e, {
                            hasConversations: !0
                        });
                    case E.wb:
                        {
                            const {
                                conversations: n
                            } = t.conversations || {},
                            r = void 0 !== n && n.length > 0;
                            return Z({}, e, {
                                hasConversations: r
                            })
                        }
                    case E.yd:
                        {
                            const {
                                userSuppliedEmail: n
                            } = t;
                            return Z({}, e, {
                                userSuppliedEmail: n
                            })
                        }
                    case E.sd:
                        {
                            const {
                                phoneNumber: n
                            } = t;
                            return Z({}, e, {
                                phoneNumber: n
                            })
                        }
                    case E.Dd:
                        return Z({}, e, {
                            isPresent: !0
                        });
                    case E.Bd:
                        return Z({}, e, {
                            isPresent: !1
                        });
                    case E.oc:
                        return Z({}, e, null == t || null === (n = t.state) || void 0 === n ? void 0 : n.user);
                    case E.Pb:
                        {
                            var i;
                            const n = Z({}, e.testAssignments, null == t || null === (i = t.response) || void 0 === i ? void 0 : i.testAssignments);
                            return Z({}, e, {
                                testAssignments: n
                            })
                        }
                    default:
                        return e
                }
            },
            session: function(e = null, t) {
                switch (t.type) {
                    case E.Q:
                        {
                            const {
                                appId: n,
                                userId: r,
                                email: i,
                                userHash: o,
                                anonymousId: s,
                                anonymousSession: a,
                                sessionId: c
                            } = t.session;
                            return te({}, e, {
                                appId: n,
                                userId: r,
                                email: i,
                                userHash: o,
                                anonymousId: s,
                                anonymousSession: a,
                                sessionId: c
                            })
                        }
                    case E.R:
                        {
                            const {
                                anonymousId: n,
                                anonymousSession: r,
                                activeCompanyId: i,
                                newSession: o
                            } = t.user;
                            return te({}, e, {
                                anonymousId: n || (null == e ? void 0 : e.anonymousId),
                                anonymousSession: r || (null == e ? void 0 : e.anonymousSession),
                                activeCompanyId: i,
                                newSession: o
                            })
                        }
                    case E.X:
                        return null;
                    case E.g:
                        return te({}, e, {
                            anonymousSession: t.anonymousSession
                        });
                    default:
                        return e
                }
            },
            openOnBoot: function(e = Cn, t) {
                var n;
                switch (t.type) {
                    case E.v:
                        return e.metadata.isViewingArticle ? e : Cn;
                    case E.Mb:
                    case E.Tc:
                    case E.Gb:
                    case E.n:
                    case E.X:
                        return Cn;
                    case E.Qc:
                        return {
                            type: "conversation",
                            metadata: {
                                conversationId: t.conversationId
                            }
                        };
                    case E.L:
                        return {
                            type: "conversation",
                            metadata: {
                                conversationId: t.conversation.id
                            }
                        };
                    case E.Vc:
                        return {
                            type: "new_conversation",
                            metadata: {}
                        };
                    case E.Zb:
                        if ("article-link" === t.componentId) {
                            const n = yn({}, e);
                            return {
                                type: "article",
                                metadata: {
                                    url: t.url,
                                    cardUri: t.cardUri,
                                    componentId: t.componentId,
                                    previousState: n
                                }
                            }
                        }
                        return e;
                    case E.x:
                        return null !== (n = e.metadata) && void 0 !== n && n.previousState ? yn({}, e.metadata.previousState) : yn({}, Cn);
                    case E.Rb:
                        {
                            const {
                                articleIds: n
                            } = e.metadata;
                            return t.fromBrowseMode ? {
                                type: "search_browse_article",
                                metadata: {
                                    articleIds: n ? [...n, t.articleId].filter(Boolean) : [t.articleId].filter(Boolean)
                                }
                            } : yn(yn({}, e), {}, {
                                metadata: yn(yn({}, e.metadata), {}, {
                                    articleIds: n ? [...n, t.articleId].filter(Boolean) : [t.articleId].filter(Boolean),
                                    openArticleStandalone: !0
                                })
                            })
                        }
                    case E.q:
                        return "search_browse_article" === e.type && e.metadata.articleIds.length > 1 ? {
                            type: "search_browse_article",
                            metadata: {
                                articleIds: e.metadata.articleIds.slice(0, e.metadata.articleIds.length - 1)
                            }
                        } : Cn;
                    case E.oc:
                        return yn(yn({}, e), t.state.openOnBoot);
                    default:
                        return e
                }
            },
            operator: (e = Rt, t) => {
                switch (t.type) {
                    case E.Vc:
                    case E.Qc:
                        return At(At({}, e), {}, {
                            lastArticleClosedAt: null,
                            conversationIdOfLastViewedArticle: null
                        });
                    case E.B:
                        return At(At({}, e), {}, {
                            lastComposerEvent: t.lastActiveAt.getTime(),
                            composerHasContent: "" !== t.composerContent
                        });
                    case E.K:
                        return At(At({}, e), {}, {
                            userCreatedConversationAt: t.timestamp
                        });
                    case E.Rb:
                        return At(At({}, e), {}, {
                            lastArticleClosedAt: null,
                            conversationIdOfLastViewedArticle: t.conversationId
                        });
                    case E.q:
                        return At(At({}, e), {}, {
                            lastArticleClosedAt: t.closedAt
                        });
                    case E.R:
                    case E.yd:
                        return At(At({}, e), {}, {
                            clientsideMessageConditions: t.user.clientsideMessageConditions,
                            clientsideRulesetConditions: t.user.clientsideRulesetConditions
                        });
                    case E.jd:
                        return At(At({}, e), {}, {
                            lastTriggerTransitionTimestamp: t.payload.timestamp
                        });
                    case E.oc:
                        return At(At({}, e), t.state.operator);
                    default:
                        return e
                }
            },
            message: function(e = se, t) {
                switch (t.type) {
                    case E.Wb:
                        {
                            const {
                                conversationId: e,
                                partId: n
                            } = t;
                            return {
                                conversationId: e,
                                partId: n
                            }
                        }
                    case E.u:
                        return se;
                    default:
                        return e
                }
            },
            pointerMessage: function(e = ae, t) {
                switch (t.type) {
                    case E.Yb:
                        {
                            const {
                                conversationId: e,
                                partId: n
                            } = t;
                            return {
                                conversationId: e,
                                partId: n
                            }
                        }
                    case E.w:
                        return ae;
                    default:
                        return e
                }
            },
            dismissedPointers: function(e = le, t) {
                return t.type === E.db ? ue(ue({}, e), {}, {
                    [t.conversationId]: !0
                }) : e
            },
            article: function(e = ye, t) {
                switch (t.type) {
                    case E.Rb:
                        {
                            if (parseInt(e.activeArticleId || "") === parseInt(t.articleId || "")) return e;
                            const n = JSON.parse(be.a.get(ve)),
                                r = !!fe()(n) || n;
                            return ge(ge({}, e), {}, {
                                activeArticleId: t.articleId,
                                inSearchBrowse: t.fromBrowseMode,
                                isExpanded: r,
                                expansionTransitionComplete: t.forceTransitionComplete || !r,
                                viewStack: [...e.viewStack || [], t.articleId],
                                isLoaded: !1,
                                hash: t.hash
                            })
                        }
                    case E.j:
                        var n, r;
                        return (null == e || null === (n = e.articleLocale) || void 0 === n ? void 0 : n.url) === (null == t || null === (r = t.articleLocale) || void 0 === r ? void 0 : r.url) ? e : ge(ge({}, e), {}, {
                            activeArticleId: t.articleId,
                            isLoaded: !1,
                            articleLocale: t.articleLocale
                        });
                    case E.q:
                        {
                            const {
                                viewStack: t = []
                            } = e;
                            return t.pop(),
                            t.length > 0 ? ge(ge({}, e), {}, {
                                activeArticleId: t[t.length - 1],
                                isLoaded: !1,
                                transitioningBack: !1
                            }) : ye
                        }
                    case E.xc:
                    case E.Wc:
                        return ye;
                    case E.i:
                        return ge(ge({}, e), {}, {
                            isLoaded: !0
                        });
                    case E.fd:
                        return be.a.set(ve, JSON.stringify(t.isExpanded)), Oe({}, e, {
                            isExpanded: t.isExpanded
                        });
                    case E.hb:
                        return ge(ge({}, e), {}, {
                            expansionTransitionComplete: !0
                        });
                    case E.h:
                        return ge(ge({}, e), {}, {
                            transitioningBack: !0
                        });
                    case E.gb:
                        return ge(ge({}, e), {}, {
                            isStandalone: !0,
                            isLoaded: !1,
                            activeArticleId: null
                        });
                    case E.Xb:
                        return e.activeArticleId ? ge(ge({}, e), {}, {
                            isLoaded: !1
                        }) : e;
                    case E.Vc:
                        return ye;
                    default:
                        return e
                }
            },
            articles: function(e = je, t) {
                switch (t.type) {
                    case E.fc:
                        return Ce(Ce({}, e), {}, {
                            [t.article.id]: t.article
                        });
                    case E.E:
                        {
                            const {
                                articleId: n,
                                reactionIndex: r
                            } = t;
                            if (!e.hasOwnProperty(n)) return e;
                            const i = e[n];
                            return Ce(Ce({}, e), {}, {
                                [n]: Ce(Ce({}, i), {}, {
                                    reactionsReply: Ce(Ce({}, i.reactionsReply), {}, {
                                        reactionIndex: r
                                    })
                                })
                            })
                        }
                }
                return e
            },
            articleCollections: function(e = we, t) {
                if (t.type === E.gc)
                    if (t.articleCollections.length > 0) return t.articleCollections;
                return e
            },
            conversations: function(e = Ge, t) {
                switch (t.type) {
                    case E.R:
                    case E.yd:
                    case E.Fb:
                        return He({}, e, {
                            byId: ze(e.byId, t)
                        });
                    case E.vb:
                        return He({}, e, {
                            isFetching: !0
                        });
                    case E.wb:
                        {
                            var n;
                            const {
                                page: r,
                                totalPages: i
                            } = (null == t || null === (n = t.conversations) || void 0 === n ? void 0 : n.pages) || {};
                            return He({}, e, {
                                isFetching: !1,
                                pagesFetched: r,
                                totalPages: i,
                                byId: ze(e.byId, t)
                            })
                        }
                    case E.ub:
                        return He({}, e, {
                            isFetching: !1
                        });
                    case E.nd:
                    case E.T:
                    case E.S:
                    case E.yb:
                    case E.zb:
                    case E.H:
                    case E.I:
                    case E.G:
                    case E.D:
                    case E.Kb:
                    case E.bb:
                    case E.L:
                    case E.f:
                    case E.wd:
                    case E.l:
                    case E.c:
                    case E.od:
                    case E.Ad:
                    case E.md:
                    case E.kd:
                    case E.Cb:
                    case E.Db:
                    case E.Hc:
                    case E.B:
                    case E.Gc:
                    case E.Ic:
                        return He({}, e, {
                            byId: ze(e.byId, t)
                        });
                    case E.C:
                        return He({}, e, {
                            scrollPosition: t.scrollPosition
                        });
                    case E.fb:
                        return He({}, e, {
                            byId: ze(e.byId, t)
                        });
                    default:
                        return e
                }
            },
            newConversation: function(e = Qe, t) {
                switch (t.type) {
                    case E.Vc:
                        return Ye({}, e, {
                            defaultMessage: t.defaultMessage,
                            articleUrl: t.articleUrl || null
                        });
                    case E.Mb:
                        return Ye({}, e, {
                            articleUrl: null
                        });
                    case E.K:
                    case E.J:
                        return Ye({}, e, {
                            userParticipated: !0,
                            parts: De(e.parts, t)
                        });
                    case E.Kc:
                        return Ye({}, e, {
                            composerState: t.composerState
                        });
                    case E.L:
                        return Ye({}, Qe, {
                            composerState: e.composerState
                        });
                    case E.wd:
                        {
                            const {
                                conversationId: n
                            } = t;
                            return void 0 !== n ? e : Ye({}, e, {
                                parts: De(e.parts, t)
                            })
                        }
                    case E.B:
                    case E.Gc:
                    case E.Hc:
                    case E.Ic:
                        return Je(Je({}, e), {}, {
                            composerSuggestions: Object(Ne.a)(e.composerSuggestions, t)
                        });
                    case E.W:
                        var n, r;
                        return Je(Je({}, e), {}, {
                            parts: null == t || null === (n = t.botIntro) || void 0 === n ? void 0 : n.parts.map(((e, n) => {
                                var r;
                                return {
                                    id: `bot-intro-${n}`,
                                    author: null == t || null === (r = t.botIntro) || void 0 === r ? void 0 : r.operator,
                                    createdAt: t.createdAt,
                                    partType: "bot_intro",
                                    body: e,
                                    showCreatedAt: !0
                                }
                            })),
                            botIntroId: null == t || null === (r = t.botIntro) || void 0 === r ? void 0 : r.id
                        });
                    default:
                        return e
                }
            },
            borderless: function(e = Xe, t) {
                switch (t.type) {
                    case E.Sb:
                        return Object.assign({}, e, {
                            conversationId: t.conversationId
                        });
                    case E.u:
                        return Xe;
                    default:
                        return e
                }
            },
            notificationChannels: function(e = tt, t) {
                switch (t.type) {
                    case E.xd:
                        return et({}, e, {
                            isSaving: !0
                        });
                    case E.R:
                    case E.yd:
                        return et({}, e, {
                            isSaving: !1
                        });
                    case E.rd:
                        return et({}, e, {
                            isSaving: !0,
                            errorMessage: null,
                            showErrorMessage: !1
                        });
                    case E.sd:
                        return et({}, e, {
                            phoneNumber: t.phoneNumber,
                            isSaving: !1
                        });
                    case E.qd:
                        return et({}, e, {
                            errorMessage: t.message,
                            isSaving: !1,
                            showErrorMessage: !0
                        });
                    case E.Hb:
                        return et({}, e, {
                            errorMessage: null,
                            showErrorMessage: !1
                        });
                    default:
                        return e
                }
            },
            notificationTypeOverrides: function(e = Ze, t) {
                return t.type === E.pd ? Object.assign({}, e, {
                    suppress: Object.assign({}, e.suppress, t.suppress),
                    forceSnippet: Object.assign({}, e.forceSnippet, t.forceSnippet)
                }) : e
            },
            install: function(e = rt, t) {
                switch (t.type) {
                    case E.Ub:
                        {
                            const {
                                activeSubscription: n,
                                userHashVerified: r,
                                secureInstallV2: i,
                                messengerEnabledForVisitors: o,
                                messengerEnabledForUsers: s
                            } = t;
                            return nt({}, e, {
                                isInstallModeOpen: !0,
                                installModeConfig: {
                                    activeSubscription: n,
                                    userHashVerified: r,
                                    secureInstallV2: i,
                                    messengerEnabledForVisitors: o,
                                    messengerEnabledForUsers: s
                                }
                            })
                        }
                    case E.s:
                        return nt({}, e, {
                            isInstallModeOpen: !1
                        });
                    default:
                        return e
                }
            },
            gifs: function(e = ot, t) {
                switch (t.type) {
                    case E.Cc:
                        {
                            const {
                                searchTerm: n
                            } = t;
                            return it({}, e, {
                                isFetching: !0,
                                fetchingFailed: !1,
                                searchTerm: n
                            })
                        }
                    case E.Dc:
                        {
                            const {
                                gifs: n,
                                searchTerm: r
                            } = t;
                            return r !== e.searchTerm ? e : it({}, e, {
                                isFetching: !1,
                                gifs: n,
                                fetchingFailed: !1,
                                searchTerm: r
                            })
                        }
                    case E.Bc:
                        {
                            const {
                                searchTerm: n
                            } = t;
                            return n !== e.searchTerm ? e : it({}, e, {
                                isFetching: !1,
                                fetchingFailed: !0,
                                searchTerm: n
                            })
                        }
                    default:
                        return e
                }
            },
            boundEventCreator: function(e = at, t) {
                switch (t.type) {
                    case E.Tb:
                        return {
                            stage: t.stage,
                            eventData: Object.assign({}, e.eventData, t.eventData)
                        };
                    case E.k:
                        return Object.assign({}, e, {
                            stage: t.newStage
                        });
                    case E.ld:
                        return Object.assign({}, e, {
                            eventData: Object.assign({}, e.eventData, t.eventData)
                        });
                    case E.r:
                        return at;
                    default:
                        return e
                }
            },
            launcherDiscoveryMode: (e = lt, t) => {
                const {
                    isLauncherDiscoveryModeEnabled: n
                } = e;
                switch (t.type) {
                    case E.R:
                        {
                            const {
                                user: n
                            } = t;
                            return dt({}, e, {
                                isLauncherDiscoveryModeEnabled: pt(n)
                            })
                        }
                    case E.vb:
                        return dt({}, e, {
                            isLauncherDiscoveryModeEnabled: !1,
                            hasDiscoveredLauncher: !0
                        });
                    case E.Xb:
                        return dt({}, e, {
                            hasDiscoveredLauncher: !0,
                            isLauncherDiscoveryModeEnabled: !1
                        });
                    case E.Vb:
                        return dt({}, e, {
                            isLauncherDiscoveryModeOpening: n,
                            hasDiscoveredLauncher: !0
                        });
                    case E.t:
                        return dt({}, e, {
                            isLauncherDiscoveryModeOpening: !1,
                            isLauncherDiscoveryModeClosing: n
                        });
                    case E.Vc:
                    case E.Qb:
                        return dt({}, e, {
                            isLauncherDiscoveryModeClosing: !1,
                            isLauncherDiscoveryModeOpening: !1
                        });
                    case E.Y:
                        return dt({}, e, {
                            isLauncherDiscoveryModeEnabled: !1,
                            isLauncherDiscoveryModeClosing: !1
                        });
                    case E.oc:
                        {
                            const {
                                launcherDiscoveryMode: n
                            } = t.state;
                            return dt({}, e, n)
                        }
                    default:
                        return e
                }
            },
            messengerCards: (e = _t, t) => {
                switch (t.type) {
                    case E.cd:
                        {
                            const n = t.componentId,
                                r = Ot({}, e);
                            return gt()(r, `${t.cardUri}.isFetching`, !1),
                            bt()(r, `${t.cardUri}.card.canvas.content.components`, (e => Object(mt.d)(n, e, !1)))
                        }
                    case E.ed:
                        {
                            const n = Ot({}, e);
                            return gt()(n, `${t.card.uri}.isFetching`, !1),
                            gt()(n, `${t.card.uri}.isFetched`, !0),
                            gt()(n, `${t.card.uri}.partialCard`, t.card)
                        }
                    case E.dd:
                        {
                            const n = t.componentId,
                                r = Ot({}, e);
                            return gt()(r, `${t.cardUri}.isFetching`, !0),
                            bt()(r, `${t.cardUri}.card.canvas.content.components`, (e => Object(mt.d)(n, e, !0)))
                        }
                    case E.rb:
                        {
                            const n = Ot({}, e);
                            return gt()(n, `${t.card.uri}.isContentFetching`, !0)
                        }
                    case E.sb:
                        {
                            const n = Ot({}, e);
                            return gt()(n, `${t.card.uri}.isFetching`, !1),
                            gt()(n, `${t.card.uri}.isFetched`, !0),
                            gt()(n, `${t.card.uri}.isContentFetched`, !0),
                            gt()(n, `${t.card.uri}.isContentError`, !1),
                            gt()(n, `${t.card.uri}.isContentFetching`, !1),
                            gt()(n, `${t.card.uri}.card`, t.card),
                            gt()(n, `${t.card.uri}.card.canvas.content`, t.content),
                            bt()(n, `${t.card.uri}.card`, mt.e)
                        }
                    case E.qb:
                        {
                            const n = Ot({}, e);
                            return gt()(n, `${t.card.uri}.isContentError`, !0),
                            gt()(n, `${t.card.uri}.isContentFetching`, !1),
                            gt()(n, `${t.card.uri}.partialCard`, t.card)
                        }
                    default:
                        return e
                }
            },
            homeScreen: (e = Ct, t) => {
                var n, r, i;
                switch (t.type) {
                    case E.R:
                        return Object.assign({}, e, {
                            matchedSlots: null == t || null === (n = t.user) || void 0 === n ? void 0 : n.homeScreenSlots
                        });
                    case E.Bb:
                        return Object.assign({}, e, {
                            isFetching: !0,
                            isFetched: !1,
                            isFailed: !1
                        });
                    case E.Cb:
                        return Object.assign({}, e, {
                            isFetching: !1,
                            isFetched: !0,
                            isFailed: !1,
                            fetchedSlots: (r = e.matchedSlots, i = t.cards, r.map((e => {
                                if ("messenger_app" !== e.slotType) return Object.assign({}, e);
                                const t = null == i ? void 0 : i.find((t => t.messengerCardId === e.messengerCardId));
                                return Object.assign({}, e, {
                                    uri: (null == t ? void 0 : t.uri) || null
                                })
                            }))),
                            hasMoreConversations: t.hasMoreConversations
                        });
                    case E.ic:
                        return Object.assign({}, e, {
                            articleSuggestions: t.articleSuggestions
                        });
                    case E.Ab:
                        return Object.assign({}, e, {
                            isFetching: !1,
                            isFetched: !1,
                            isFailed: !0,
                            fetchedSlots: e.matchedSlots.filter((e => "new_conversation_card" === e.slotType)),
                            error: t.error
                        });
                    default:
                        return e
                }
            },
            messengerSheet: (e = Et, t) => {
                switch (t.type) {
                    case E.Yc:
                        return jt(jt({}, e), {}, {
                            isNavigating: !0
                        });
                    case E.pb:
                        return jt(jt({}, e), {}, {
                            isNavigating: !1
                        });
                    case E.Mc:
                        return jt(jt({}, e), {}, {
                            isProxyLoaded: t.isLoaded
                        });
                    case E.Zb:
                        return jt(jt({}, e), {}, {
                            url: t.url,
                            isOpen: !0,
                            sourceCard: {
                                cardUri: t.cardUri,
                                componentId: t.componentId
                            }
                        });
                    case E.ac:
                        return jt(jt({}, e), {}, {
                            url: t.url,
                            isOpen: !0,
                            sourceCard: {
                                token: t.token,
                                componentId: t.componentId
                            }
                        });
                    case E.x:
                        return Et;
                    case E.Nc:
                        return jt(jt({}, e), {}, {
                            sheetTitle: t.sheetTitle
                        });
                    case E.kb:
                        return jt(jt({}, e), {}, {
                            isSheetsDataLoading: !0
                        });
                    case E.lb:
                        return jt(jt({}, e), {}, {
                            isSheetsDataLoading: !1,
                            isSheetsDataLoaded: !0,
                            data: t.data
                        });
                    case E.jb:
                        return jt(jt({}, e), {}, {
                            isSheetsDataLoading: !1
                        });
                    default:
                        return e
                }
            },
            messengerAlerts: function(e = kt, t) {
                switch (t.type) {
                    case E.Pc:
                        return Mt(Mt({}, e), {}, {
                            isShown: !0,
                            alertType: t.payload.alertType,
                            alertPayload: t.payload.alertPayload
                        });
                    case E.p:
                        return kt;
                    default:
                        return e
                }
            },
            customizationOverrides: function(e = xt, t) {
                switch (t.type) {
                    case E.M:
                        return Ut(Ut({}, e), t.customizationAttributes);
                    case E.F:
                        return Ut(Ut(Ut({}, e), t.customizationAttributes), {}, {
                            isSetByBanner: !0
                        });
                    default:
                        return e
                }
            },
            accessibility: function(e = Vt, t) {
                switch (t.type) {
                    case E.Oc:
                        return $t($t({}, e), {}, {
                            tabNavigation: t.tabNavigation
                        });
                    case E.Fc:
                        return $t($t({}, e), {}, {
                            accessibilityTheme: t.accessibilityTheme,
                            secondaryAccessibilityTheme: t.secondaryAccessibilityTheme
                        });
                    default:
                        return e
                }
            },
            tour: (e = zt, t) => {
                switch (t.type) {
                    case E.nb:
                        return Gt(Gt({}, e), {}, {
                            isFetching: !0,
                            isFetched: !1,
                            fetchingFailed: !1
                        });
                    case E.hd:
                        return Gt(Gt({}, e), {}, {
                            updateFailed: !0
                        });
                    case E.ob:
                        return Gt(Gt({}, e), {}, {
                            isFetching: !1,
                            isFetched: !0,
                            fetchingFailed: !1,
                            isPreviewing: t.isPreviewingTour,
                            activeTour: t.tour
                        });
                    case E.mb:
                        return Gt(Gt({}, e), {}, {
                            isFetching: !1,
                            isFetched: !1,
                            fetchingFailed: !0
                        });
                    case E.bc:
                        return e.activeTour ? Gt(Gt({}, e), {}, {
                            activeTour: Gt(Gt({}, e.activeTour), {}, {
                                activeStepId: t.activeStepId
                            })
                        }) : Gt({}, e);
                    case E.Zc:
                        return Gt(Gt({}, e), {}, {
                            isFetched: !0,
                            isPreviewing: !0,
                            activeTour: t.tour
                        });
                    case E.bd:
                        return Gt(Gt({}, e), {}, {
                            isFetched: !1,
                            isPreviewing: !1,
                            activeTour: void 0
                        });
                    case E.A:
                    case E.rc:
                    case E.Xc:
                    case E.ad:
                        return zt;
                    case E.Ib:
                        return e.activeTour ? Gt(Gt({}, e), {}, {
                            activeTour: Gt(Gt({}, e.activeTour), {}, {
                                isCompleted: !0
                            })
                        }) : Gt({}, e);
                    case E.m:
                        return Gt(Gt({}, e), {}, {
                            videoAudioMuted: t.muted,
                            userHasInteractedWithVideo: !0
                        });
                    case E.dc:
                        return Gt(Gt({}, e), {}, {
                            isAwaitingProgress: !0
                        });
                    case E.cc:
                        return Gt(Gt({}, e), {}, {
                            isAwaitingProgress: !1
                        });
                    default:
                        return e
                }
            },
            triggers: function(e = Yt, t) {
                const n = Jt({}, e.triggers);
                switch (t.type) {
                    case E.e:
                        return n[t.trigger.id] = t.trigger, Jt(Jt({}, e), {}, {
                            triggers: n
                        });
                    case E.qc:
                        return delete n[t.triggerId], Jt(Jt({}, e), {}, {
                            triggers: n
                        });
                    case E.a:
                        return Jt(Jt({}, e), {}, {
                            active: t.triggerId,
                            failed: !1
                        });
                    case E.V:
                        return Jt(Jt({}, e), {}, {
                            active: null
                        });
                    case E.b:
                        return Jt(Jt({}, e), {}, {
                            failed: !0
                        });
                    default:
                        return e
                }
            },
            inboundSuggestions: function(e = on, t) {
                switch (t.type) {
                    case E.d:
                        return nn(nn({}, e), {}, {
                            allSuggestions: [...e.allSuggestions, t.composerSuggestions]
                        });
                    case E.pc:
                        return nn(nn({}, e), {}, {
                            allSuggestions: en()(e.allSuggestions, (e => e.rulesetId !== t.rulesetId))
                        });
                    case E.vd:
                        {
                            let n = e.allSuggestions;
                            return e.serverSideSuggestions && (n = en()(n, (t => e.serverSideSuggestions && t.rulesetId !== e.serverSideSuggestions.rulesetId))),
                            t.composerSuggestions && (n = Xt()([...n, t.composerSuggestions], "rulesetId")),
                            nn(nn({}, e), {}, {
                                allSuggestions: n,
                                serverSideSuggestions: t.composerSuggestions
                            })
                        }
                    case E.td:
                        return nn(nn({}, e), {}, {
                            previewSuggestions: t.composerSuggestions
                        });
                    default:
                        return e
                }
            },
            banners: function(e = sn, t) {
                switch (t.type) {
                    case E.hc:
                        if (t.banners) return t.banners;
                        break;
                    case E.ec:
                        if (t.bannerId && t.reaction) return e.map((e => e.banner_id === t.bannerId ? Object.assign({}, e, {
                            selected_reaction: t.reaction
                        }) : e))
                }
                return e
            },
            composer: (e = dn, t) => t.type === E.B ? cn(cn({}, e), {}, {
                content: t.composerContent
            }) : e,
            predictiveAnswers: (e = bn, t) => t.type === E.Lc ? pn(pn({}, e), {}, {
                composerSuggestions: t.predictiveAnswersSuggestions
            }) : e,
            lightweightApp: (e = vn, t) => t.type === E.Jc ? gn(gn({}, e), {}, {
                isActive: t.isActive
            }) : e,
            browseMode: function(e = En, t) {
                switch (t.type) {
                    case E.Wc:
                        return jn(jn({}, En), {}, {
                            isOpen: !0,
                            closeTransitionEnded: !1,
                            isFetching: e.isFetching,
                            hasViewedAnArticle: e.hasViewedAnArticle,
                            skipOpenAnimation: t.skipOpenAnimation
                        });
                    case E.xc:
                        return jn(jn({}, e), {}, {
                            closeTransitionEnded: !0
                        });
                    case E.yc:
                        return !e.showArticleCollection || e.showSearchResults || e.hasSearchResults ? jn(jn({}, En), {}, {
                            closeTransitionEnded: !1,
                            isFetching: e.isFetching,
                            hasViewedAnArticle: e.hasViewedAnArticle
                        }) : jn(jn({}, e), {}, {
                            phrase: "",
                            searchResults: [],
                            showSearchResults: !1,
                            hasSearchResults: !1,
                            showArticleCollection: !1
                        });
                    case E.wc:
                        return jn(jn({}, e), {}, {
                            isOpen: !1,
                            searchedPhrase: "",
                            phrase: "",
                            hasSearchResults: !1,
                            showSearchResults: !1,
                            searchResults: [],
                            showArticleCollection: !1
                        });
                    case E.zc:
                        return e.showSearchResults || e.hasSearchResults ? jn(jn({}, e), {}, {
                            closeTransitionEnded: !0
                        }) : jn(jn({}, e), {}, {
                            selectedArticleCollectionId: null
                        });
                    case E.Ac:
                        {
                            const {
                                value: n
                            } = t;
                            return jn(jn({}, e), {}, {
                                isSearchFocused: n
                            })
                        }
                    case E.Vc:
                        return e.isOpen ? jn(jn({}, e), {}, {
                            isOpen: !1,
                            routedToNewConversation: !0
                        }) : jn(jn({}, e), {}, {
                            routedToNewConversation: !1
                        });
                    case E.ud:
                        {
                            const {
                                phrase: n,
                                hideResultsWithDelay: r
                            } = t,
                            i = e.hasSearchResults && 0 === (null == n ? void 0 : n.trim().length);
                            return jn(jn({}, e), {}, {
                                phrase: n,
                                hideResultsWithDelay: r,
                                showSearchResults: !i && e.showSearchResults,
                                hasSearchResults: !i && e.hasSearchResults
                            })
                        }
                    case E.uc:
                        {
                            const n = e.immediateSearch || t.immediate;
                            return jn(jn({}, e), {}, {
                                immediateSearch: n,
                                isFetchingSearchResults: !0
                            })
                        }
                    case E.vc:
                        {
                            const {
                                searchResults: n,
                                phrase: r
                            } = t,
                            i = jn(jn({}, e), {}, {
                                isFetchingSearchResults: !1
                            });
                            return r !== i.phrase ? i : jn(jn({}, i), {}, {
                                fetchingFailed: !1,
                                hasSearchResults: !0,
                                showSearchResults: e.immediateSearch,
                                searchResults: n,
                                immediateSearch: !1,
                                searchedPhrase: r
                            })
                        }
                    case E.tc:
                        {
                            const {
                                phrase: n
                            } = t,
                            r = jn(jn({}, e), {}, {
                                isFetchingSearchResults: !1
                            });
                            return n !== r.phrase ? r : jn(jn({}, r), {}, {
                                isFetching: !1,
                                fetchingFailed: !0,
                                immediateSearch: !1
                            })
                        }
                    case E.Ec:
                        return jn(jn({}, e), {}, {
                            selectedArticleCollectionId: t.collectionId,
                            showArticleCollection: !0
                        });
                    case E.gc:
                        var n;
                        return 1 === (null == t || null === (n = t.articleCollections) || void 0 === n ? void 0 : n.length) ? jn(jn({}, e), {}, {
                            selectedArticleCollectionId: t.articleCollections[0].id,
                            showArticleCollection: !0,
                            isFetching: !1
                        }) : jn(jn({}, e), {}, {
                            isFetching: !1
                        });
                    case E.i:
                        return jn(jn({}, e), {}, {
                            isViewingArticle: !0
                        });
                    case E.q:
                        return e.isOpen ? jn(jn({}, e), {}, {
                            hasViewedAnArticle: !0,
                            isViewingArticle: !1
                        }) : e;
                    case E.Mb:
                        return jn(jn({}, En), {}, {
                            isFetching: e.isFetching,
                            hasViewedAnArticle: e.hasViewedAnArticle
                        });
                    case E.Xb:
                        if (e.isViewingArticle && e.isOpen) return jn(jn({}, e), {}, {
                            skipOpenAnimation: !0
                        });
                        if (!e.skipOpenAnimation) return jn(jn({}, En), {}, {
                            isFetching: e.isFetching
                        });
                        break;
                    case E.v:
                        return e.isOpen ? e : jn(jn({}, e), {}, {
                            skipOpenAnimation: !1
                        })
                }
                return e
            },
            openInboundConversationIds: function(e = In, t) {
                switch (t.type) {
                    case E.Cb:
                        return (null == t ? void 0 : t.openInboundConversationIds) || [];
                    case E.L:
                    case E.zb:
                        const {
                            conversation: n
                        } = t;
                        return n.isInbound ? "state_closed" === n.state ? e.filter((e => e !== n.id)) : "state_open" === n.state && -1 === e.indexOf(n.id) ? [...e, n.id] : e : e;
                    default:
                        return e
                }
            },
            survey: function(e = null, t) {
                switch (t.type) {
                    case E.jc:
                        if (t.survey) return t.survey;
                        break;
                    case E.kc:
                        var n;
                        return t.surveyId !== (null == e ? void 0 : e.id) ? e : Tn(Tn({}, e), {}, {
                            steps: [...(null == e ? void 0 : e.steps) || [], t.surveyStep],
                            activeStepId: null == t || null === (n = t.surveyStep) || void 0 === n ? void 0 : n.id,
                            completed: t.completed
                        });
                    case E.mc:
                        var r;
                        return Tn(Tn({}, e), {}, {
                            steps: null == e || null === (r = e.steps) || void 0 === r ? void 0 : r.map((e => Tn(Tn({}, e), {}, {
                                questions: e.questions.map((e => e.id !== t.questionId ? Tn({}, e) : Tn(Tn({}, e), {}, {
                                    response: t.response
                                })))
                            })))
                        });
                    case E.nc:
                        var i;
                        return t.surveyId !== (null == e ? void 0 : e.id) ? e : Tn(Tn({}, e), {}, {
                            steps: null == e || null === (i = e.steps) || void 0 === i ? void 0 : i.map((e => e.id !== t.stepId ? Tn({}, e) : Tn(Tn({}, e), {}, {
                                questions: e.questions.map((e => Tn(Tn({}, e), {}, {
                                    validationError: (null == t ? void 0 : t.validationResult)[e.id] || null
                                })))
                            })))
                        });
                    case E.o:
                        return Tn(Tn({}, e), {}, {
                            steps: e.steps.map((e => Tn(Tn({}, e), {}, {
                                questions: e.questions.map((e => e.id !== t.questionId ? Tn({}, e) : Tn(Tn({}, e), {}, {
                                    validationError: null
                                })))
                            })))
                        });
                    case E.eb:
                        if (t.surveyId) return (null == e ? void 0 : e.id) === t.surveyId ? Tn(Tn({}, e), {}, {
                            dismissed: !0
                        }) : e;
                        break;
                    case E.z:
                        return e ? Tn(Tn({}, e), {}, {
                            completed: !0
                        }) : e;
                    case E.Xb:
                        return e ? Tn(Tn({}, e), {}, {
                            hidden: !0
                        }) : e;
                    case E.v:
                        return e && e.hidden ? Tn(Tn({}, e), {}, {
                            hidden: !1
                        }) : e;
                    default:
                        return e
                }
            }
        }),
        Mn = n(249),
        Dn = n.n(Mn),
        kn = n(17),
        Nn = n.n(kn),
        Un = n(15);

    function Ln(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function xn(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Ln(Object(n), !0).forEach((function(t) {
                Bn(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ln(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function Bn(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const $n = e => {
            if (!(() => {
                    var e, t;
                    if (Object(C.a)()) return;
                    const n = null === (e = window) || void 0 === e || null === (t = e.parent) || void 0 === t ? void 0 : t.ga;
                    return "function" == typeof n && "function" == typeof(null == n ? void 0 : n.getAll) && (null == n ? void 0 : n.loaded)
                })()) return;
            const t = window.parent.ga.getAll();
            if (Nn()(t) && t.length) {
                if (e) {
                    const n = Fn(t, e);
                    return n || (window.parent.ga("create", e, "auto", "intercomMessenger"), Fn(window.parent.ga.getAll(), e))
                }
                return t[0]
            }
        },
        Fn = (e, t) => Dn()(e, (function(e) {
            try {
                return e.b.data.values[":trackingId"] === t
            } catch (n) {
                if ("function" == typeof e.get) return t === e.get("trackingId")
            }
        })),
        Vn = e => Object.entries(e).reduce(((e, [t, n]) => {
            if (n) return e ? e + `, ${t}: ${n}` : `${t}: '${n}'`
        }), null),
        Hn = (e, t) => {
            var n;
            const {
                parts: r
            } = e, i = r[0], o = t || i && i.id, s = o && -1 !== o.indexOf("message-"), a = {
                isAdmin: i && i.author && r[0] && r[0].author.isAdmin,
                customBotId: null === (n = e.analyticsMetadata) || void 0 === n ? void 0 : n.customBotId
            }, c = {
                messageId: o && o.replace("message-", "")
            };
            return xn(xn({}, a), s ? c : {})
        },
        Gn = ["OPEN_MESSENGER", "CLOSE_MESSENGER", "CREATE_CONVERSATION_SUCCESS", "CREATE_COMMENT_SUCCESS", "UPDATE_USER_SUPPLIED_EMAIL_SUCCESS", E.ed, "RECORD_MESSAGE_SENT", "MARK_CONVERSATION_AS_READ_REQUEST", "UPFRONT_EMAIL_COLLECTION_SUBMITTED"];
    var qn = e => t => n => {
            const r = e.getState(),
                i = t(n);
            if (-1 === Gn.indexOf(n.type) || !r.app.features.googleAnalytics) return i;
            const o = r.app.customGoogleAnalyticsTrackerId,
                s = $n(o);
            if (!s) return Object(Un.b)("Intercom - Google Analytics is not installed or configured, have you forgotten to include it?"), i;
            const a = (e => ({
                name: t,
                metadata: n = {},
                nonInteraction: r = !1
            } = {}) => {
                try {
                    e.send("event", xn({
                        eventCategory: "Intercom Messenger",
                        eventAction: t,
                        eventLabel: Vn(n)
                    }, r ? {
                        nonInteraction: r
                    } : {}))
                } catch (e) {
                    Object(Un.b)("Intercom - Something went wrong sending the Google Analytics event", e)
                }
            })(s);
            switch (n.type) {
                case E.Xb:
                    a({
                        name: "Opened Messenger"
                    });
                    break;
                case E.v:
                    a({
                        name: "Closed Messenger"
                    });
                    break;
                case E.L:
                    a({
                        name: "Started New Conversation"
                    });
                    break;
                case E.I:
                    {
                        const e = r.conversations.byId[n.conversationId],
                            {
                                customBotId: t,
                                messageId: i,
                                isAdmin: o
                            } = Hn(e),
                            s = xn({}, t ? {
                                "Custom Bot ID": t || i
                            } : {
                                "Message ID": i
                            });a({
                            name: "Sent a Reply",
                            metadata: o || t ? s : void 0
                        });
                        break
                    }
                case E.zd:
                case E.yd:
                    a({
                        name: "Provided Email Address"
                    });
                    break;
                case E.ed:
                    a({
                        name: n.card.completed ? "Completed App Flow" : "Interacted with App",
                        metadata: {
                            "App Name": n.card.app_package_name,
                            Location: (c = r.app.viewStack, c.length > 0 ? {
                                "home-screen": "Home",
                                conversation: "Conversation"
                            }[c[c.length - 1]] : "Conversation")
                        }
                    });
                    break;
                case E.lc:
                    {
                        const e = r.conversations.byId[n.conversationId],
                            {
                                customBotId: t,
                                messageId: i
                            } = Hn(e, n.partId);i && a({
                            name: "Triggered Message",
                            metadata: xn({}, t ? {
                                "Custom Bot ID": t || i
                            } : {
                                "Message ID": i
                            }),
                            nonInteraction: !0
                        });
                        break
                    }
                case E.Kb:
                    {
                        if (r.conversations.byId[n.conversationId].read) return;
                        const e = r.conversations.byId[n.conversationId],
                            {
                                customBotId: t,
                                messageId: i
                            } = Hn(e);a({
                            name: "Viewed Message",
                            metadata: xn({}, t ? {
                                "Custom Bot ID": t || i
                            } : {
                                "Message ID": i
                            }),
                            nonInteraction: !0
                        });
                        break
                    }
            }
            var c;
            return i
        },
        zn = n(30),
        Wn = n(99),
        Jn = n(55);

    function Kn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Yn(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Kn(Object(n), !0).forEach((function(t) {
                Qn(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Kn(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function Qn(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const Xn = "/";

    function Zn(e, t) {
        return void 0 !== t && t !== e
    }

    function er(e, t, n, r, i, o) {
        e.write(t, n, {
            domain: i,
            path: Xn,
            expires: new Date(zn.b.now() + r),
            sameSite: o ? "none" : "lax",
            secure: o
        })
    }

    function tr(e, t) {
        return function(e) {
            return null != e
        }(e) ? e : t
    }

    function nr({
        domainSetting: e,
        originCookieDomain: t,
        meta: n = {}
    }) {
        if ("none" !== e) {
            if (void 0 !== e && Object(Un.b)("Intercom Messenger error: cookie_domain attribute supports only `none` option"), t) return `.${t}`; {
                const e = Object(Wn.a)(),
                    t = (e || "").split(":")[0];
                return Object(N.g)("missingOriginDomain", Yn(Yn({}, n), {}, {
                    host: t,
                    rawHost: e
                })), "localhost" === t ? "" : t
            }
        }
    }
    var rr = n(61),
        ir = n(32),
        or = n.n(ir),
        sr = n(252),
        ar = n.n(sr),
        cr = n(47),
        ur = n(29);
    const dr = Object(h.createSelector)((e => e.app.hasTheMessengerBeenOpened), ur.a, ((e, t) => e && !!t.length));
    var lr = n(54),
        pr = n(135),
        fr = n(137);
    const br = "disconnected",
        hr = "ConversationSeen",
        gr = "NewComment",
        mr = "ConversationPartUpdated",
        vr = "UserIsTyping",
        Or = "MessengerCardUpdated",
        yr = {
            increment: N.c,
            count: N.a,
            timing: N.f
        },
        _r = {
            info: N.d,
            error: N.b
        };

    function Cr(e, t, n, r, i) {
        let o;
        try {
            o = new t(e.endpoints, _r, yr, n, r, (() => {}), i)
        } catch (e) {
            Object(N.b)(e), Sr(o)
        }
        return o
    }

    function Sr(e) {
        if (void 0 !== e) try {
            e.shutdown()
        } catch (e) {
            Object(N.b)(e)
        }
    }

    function jr(e, t, n, r, i, o, s, a, c, u) {
        if (!Dr(t, n, c)) return e;
        if (Sr(e), !Rr(n)) return;
        let d = "pending";
        const l = Cr(n, ar.a, (() => {
            d = Er(d, r)
        }), (() => {
            d = Ir()
        }), u);
        try {
            l.subscribeToAllTopics(), Ar(l, r, i, o, s, a, p.g, lr.c)
        } catch (e) {
            Object(N.b)(e), Sr(l)
        }
        return l
    }
    const wr = or()((e => e()), 5e3, {
        leading: !0,
        trailing: !0
    });

    function Er(e, t) {
        return e === br && dr(t.getState()) && (Object(N.g)("nexusReconnectedGettingConversations"), wr((() => t.dispatch(Object(fr.b)(b.d))))), Object(u.c)() || (Object(N.g)("realTimeConnected"), Object(u.l)(!0)), "connected"
    }

    function Ir() {
        return br
    }

    function Ar(e, t, n, r, i, o, s, a) {
        const c = or()((e => e()), 5e3);
        e.addListener(gr, (e => {
            const {
                deliveryChannel: r,
                conversationId: i,
                createdByUserId: o,
                createdAt: s
            } = e.eventData;
            if (r && -1 === r.indexOf("web")) return;
            const {
                user: a
            } = t.getState(), u = () => t.dispatch(n(b.d, i, !0, s));
            o === a.id ? c(u) : u()
        })), e.addListener("UserContentSeenByAdmin", (e => {
            const {
                conversationId: n
            } = e.eventData;
            t.dispatch(r(n))
        })), e.addListener(hr, (e => {
            const {
                conversationId: n
            } = e.eventData;
            t.dispatch(o(n))
        })), e.addListener("AdminIsTyping", (e => {
            const {
                conversationId: n,
                adminId: r,
                adminName: o,
                adminAvatar: s,
                hasDefaultAvatar: a
            } = e.eventData;
            t.dispatch(i(n, r, o, Tr(s, a)))
        })), e.addListener(Or, (e => {
            const {
                cardUri: r
            } = e.eventData, i = Object(cr.b)(t.getState());
            i && Object(w.h)(i, r) && t.dispatch(n(b.d, i.id, !0))
        })), e.addListener(mr, (e => {
            const {
                conversationId: r
            } = e.eventData;
            Object(cr.b)(t.getState()).id === String(r) && t.dispatch(n(b.d, r, !0))
        })), e.addListener("StartTour", (e => {
            const {
                tour: n
            } = e.eventData, {
                user: r
            } = t.getState();
            Object(N.h)(r, "received_nexus", "tour", "messenger", null, {
                tour_id: n.id
            }), r.isPresent && t.dispatch(s(n.id))
        })), e.addListener("NewContent", (e => {
            const {
                entity_id: n,
                entity_type: r
            } = e.eventData, {
                user: i
            } = t.getState();
            Object(N.h)(i, "received_nexus", "new_content", "messenger", null, {
                entity_id: n,
                entity_type: r
            }), r === pr.a.BANNER_VIEW && t.dispatch(a(n))
        }))
    }
    const Tr = (e, t) => t || 0 !== e.indexOf("http") ? void 0 : e,
        Rr = e => void 0 !== e && Array.isArray(e.endpoints) && e.endpoints.length > 0,
        Pr = e => Object(k.a)(e.split("/")).split("-")[0],
        Mr = (e, t) => Pr(e) !== Pr(t),
        Dr = (e, t, n) => Rr(e) && Rr(t) ? n || Mr(e.endpoints[0], t.endpoints[0]) : !Rr(e) && Rr(t) || Rr(e) && !Rr(t);
    const kr = e => {
            const {
                app: {
                    color: t,
                    secondaryColor: n,
                    selfServeSuggestionsMatch: r,
                    name: i,
                    features: {
                        anonymousInboundMessages: o,
                        googleAnalytics: s,
                        hubspotInstalled: a,
                        inboundMessages: c,
                        marketoEnrichmentInstalled: u,
                        outboundMessages: d
                    },
                    launcherLogoUrl: l,
                    boundWebEvents: p,
                    helpCenterSiteUrl: f,
                    inboundConversationsDisabled: b,
                    isInstantBootEnabled: h,
                    alignment: g,
                    horizontalPadding: v,
                    verticalPadding: O,
                    isDeveloperWorkspace: y,
                    upfrontEmailCollectionSetting: _,
                    customGoogleAnalyticsTrackerId: C
                },
                launcher: {
                    isLauncherEnabled: S
                },
                launcherDiscoveryMode: {
                    hasDiscoveredLauncher: j
                },
                message: {
                    conversationId: w
                },
                openOnBoot: {
                    type: E,
                    metadata: I
                },
                user: {
                    role: A,
                    locale: T,
                    hasConversations: R
                }
            } = e, {
                conversations: P
            } = e, M = P ? P.byId : {};
            return {
                app: {
                    color: t,
                    secondaryColor: n,
                    selfServeSuggestionsMatch: r,
                    name: i,
                    features: {
                        anonymousInboundMessages: o,
                        googleAnalytics: s,
                        hubspotInstalled: a,
                        inboundMessages: c,
                        marketoEnrichmentInstalled: u,
                        outboundMessages: d
                    },
                    launcherLogoUrl: l,
                    boundWebEvents: p,
                    helpCenterSiteUrl: f,
                    inboundConversationsDisabled: b,
                    isInstantBootEnabled: h,
                    alignment: g,
                    horizontalPadding: v,
                    verticalPadding: O,
                    isDeveloperWorkspace: y,
                    upfrontEmailCollectionSetting: _,
                    customGoogleAnalyticsTrackerId: C
                },
                launcher: {
                    isLauncherEnabled: S
                },
                launcherDiscoveryMode: {
                    hasDiscoveredLauncher: j
                },
                user: {
                    role: A,
                    locale: T,
                    hasConversations: R
                },
                message: {
                    conversationId: w
                },
                conversations: {
                    byId: Nr(M)
                },
                openOnBoot: {
                    type: E,
                    metadata: I
                },
                operator: {
                    lastComposerEvent: m(e)
                }
            }
        },
        Nr = e => {
            const t = Object.keys(e),
                n = {};
            return t.forEach((t => {
                const {
                    dismissed: r,
                    read: i
                } = e[t];
                n[t] = {
                    fetchState: "partial",
                    dismissed: r,
                    read: i
                }
            })), n
        };
    let Ur, Lr, xr;
    var Br = ({
        updateRealtimeClient: e,
        shutdownRealtimeClient: t,
        getConversation: n,
        userContentSeenByAdmin: r,
        adminIsTyping: i,
        conversationReadElsewhere: o
    }) => s => a => c => {
        const u = a(c);
        switch (c.type) {
            case E.R:
                {
                    const t = c.user.app.realtimeConfig,
                        a = c.user.id;Ur = e(Ur, Lr, t, s, n, r, i, o, a !== xr, c.user.role),
                    Lr = t,
                    xr = a;
                    break
                }
            case E.X:
                t(Ur), Ur = void 0, Lr = void 0, xr = void 0
        }
        if (!Ur) return u;
        switch (c.type) {
            case E.Kb:
                Ur.sendEvent(hr, {
                    conversationId: c.conversationId
                });
                break;
            case E.Ed:
                Ur.throttleSendEvent(vr, {
                    conversationId: c.conversationId
                }, !0);
                break;
            case E.ed:
                Ur.sendEvent(Or, {
                    cardUri: c.card.uri
                })
        }
        return u
    };
    const $r = e => (!Object(C.a)() && window.parent && window.parent.intercomSettings && window.parent.intercomSettings.app_id && (e = `${e}-${window.parent.intercomSettings.app_id}`), e),
        Fr = e => {
            try {
                return JSON.parse(be.a.get(e))
            } catch (e) {
                Object(N.c)("hydrate_read_error")
            }
        },
        Vr = (e, t) => {
            try {
                be.a.set(e, JSON.stringify(t))
            } catch (e) {
                Object(N.c)("hydrate_write_error")
            }
        };
    const Hr = e => ({
        type: E.oc,
        state: e
    });
    var Gr = (e, t = "intercom-state") => n => (...r) => {
        const i = n(...r);
        if (t = $r(t), !Object(U.d)()) return i;
        const o = Fr(t);
        if (o) {
            const e = i.getState();
            try {
                i.dispatch(Hr(o))
            } catch (n) {
                Object(N.c)("hydrate_error"),
                    function(e) {
                        try {
                            be.a.remove(e)
                        } catch (e) {
                            Object(N.c)("hydrate_remove_error")
                        }
                    }(t), i.dispatch(Hr(e))
            }
        }
        return i.subscribe((() => {
            Vr(t, e(i.getState()))
        })), i
    };
    var qr = () => e => t => {
            const n = e(t);
            if (t.type === E.X) Object(U.d)() && t.clearCookies && be.a.remove($r("intercom-state"));
            return n
        },
        zr = {
            play(e) {
                if (!U.a.hasAudioSupport()) return;
                const t = this.load(e);
                if (t) {
                    const e = t.play();
                    e && e.catch((() => {}))
                }
            },
            playFile(e) {
                e && U.a.hasAudioSupport() && this.play(n(235)(`./${e}`))
            },
            load(e) {
                return this.audio[e] || (this.audio[e] = new Audio(e)), this.audio[e]
            },
            playNotification: or()((function(e) {
                this.play(n(235)(`./${e}`))
            }), 3e3, {
                leading: !0,
                trailing: !1
            }),
            audio: {}
        },
        Wr = n(111);
    const Jr = "played-notifications";
    let Kr = (() => {
        const e = be.b.get(Jr);
        return e ? JSON.parse(e) : {}
    })();
    const Yr = (e, t) => {
            Kr[e] = t, be.b.set(Jr, JSON.stringify(Kr))
        },
        Qr = (e, t) => {
            const n = Object(k.a)(e.parts);
            return !((e, t) => {
                const n = Kr[e];
                return n === t || -1 === n
            })(e.id, n.id) || ((e, t) => {
                const {
                    notificationStatus: n
                } = e;
                return "renotifying" === n && t
            })(e, t)
        },
        Xr = (e, t, n) => {
            let r = !1;
            e.forEach((e => {
                const n = Object(k.a)(e.parts);
                Qr(e, t) && (r = !0), Yr(e.id, n.id)
            })), r && zr.playNotification(n)
        },
        Zr = (e, t) => {
            switch (e) {
                case E.G:
                case E.J:
                    return "failed.mp3";
                case E.H:
                case E.K:
                    return "submit.mp3";
                default:
                    return t && t.author.isBot ? "operator.mp3" : "notification.mp3"
            }
        };
    var ei = e => t => n => {
            const r = t(n),
                i = e.getState();
            if (i.app.isAudioEnabled && !i.app.isBoundEventCreatorOpen) {
                switch (n.type) {
                    case E.H:
                    case E.K:
                    case E.G:
                    case E.J:
                        zr.playFile(Zr(n.type));
                        break;
                    case E.Wb:
                        {
                            const e = i.conversations.byId[n.conversationId];Xr([e], i.session.newSession, Zr(n.type));
                            break
                        }
                    case E.zb:
                        {
                            const {
                                conversation: e,
                                skipNotification: t
                            } = n;
                            if (e.read) return;
                            const r = Object(k.a)(e.parts);
                            if (!0 === t || Object(Wr.a)(r.partType)) return void Yr(e.id, r.id);Xr([e], i.session.newSession, Zr(n.type, r));
                            break
                        }
                    case E.wb:
                        {
                            const e = Object(D.a)(i);Xr(e, i.session.newSession, Zr(n.type));
                            break
                        }
                    case E.R:
                        {
                            const {
                                unreadDismissedConversationIds: e
                            } = n.user;e && e.forEach((e => {
                                Yr(e, -1)
                            }));
                            break
                        }
                }
                return r
            }
        },
        ti = n(20);
    const ni = [],
        ri = [];
    var ii = ({
            getState: e
        }) => t => n => (function(e, t) {
            const {
                user: n,
                app: r,
                article: i
            } = e();
            switch (t.type) {
                case E.Vb:
                    return [Object(N.i)(n, "received", "message", "messenger", "from_launcher_discovery_mode")];
                case E.I:
                    return [Object(N.i)(n, "sent", "reply", t.isBorderless ? "borderless" : "messenger", "in_conversation", {
                        conversation_id: t.conversationId,
                        comment_id: t.part.id,
                        is_attachment: Object(u.f)(t.part.body),
                        is_annotated: t.isAnnotatedImage || !1,
                        within_office_hours: Object(u.h)(t.officeHoursResponse),
                        teammate_status: Object(u.d)(t.lastParticipatingAdmin),
                        time_since_last_active_in_minutes: Object(u.e)(t.lastParticipatingAdmin),
                        from_messenger_suggested_content: t.fromMessengerSuggestedContent
                    })];
                case E.L:
                    const e = -1 !== ["custom_bot", "resolution_bot_auto_suggest"].indexOf(t.conversationTriggerType),
                        o = "resolution_bot_auto_suggest" === t.conversationTriggerType;
                    return [Object(N.i)(n, "sent", "message", "messenger", "in_new_conversation", {
                        conversation_id: t.conversation.id,
                        is_attachment: Object(u.f)(t.conversation.parts[0].body),
                        is_annotated: t.isAnnotatedImage || !1,
                        within_office_hours: Object(u.h)(t.officeHoursResponse),
                        from_suggestion: e,
                        from_messenger_suggested_content: o,
                        trigger_type: t.conversationTriggerType
                    })];
                case E.nd:
                    return [Object(N.i)(n, "sent", "reply", "messenger", "in_conversation", {
                        type: "automated_lead_qualification",
                        conversation_id: t.conversationId,
                        part_id: t.partId,
                        attribute_identifier: t.identifier,
                        reply: t.value,
                        attribute_type: t.identifierType,
                        form_type: t.formType,
                        attribute_is_custom_data: t.isCustomData
                    })];
                case E.T:
                    return [Object(N.i)(n, "sent", "reaction", t.isFromConversation ? "messenger" : "in_app", t.isFromConversation ? "in_conversation" : "from_full", {
                        conversation_id: t.conversationId
                    })];
                case E.Rb:
                    if (t.fromHomeScreenSuggestions) return [];
                    const s = Object.assign({
                        owner: "educate",
                        article_id: t.articleId,
                        conversation_id: t.conversationId
                    }, t.metricMetadata || {}, !t.fromBrowseMode && {
                        article_channel: "messenger",
                        article_source: "conversation"
                    });
                    return [t.fromBrowseMode && Object(N.i)(n, "clicked", ti.d, ti.m, "messenger", s), !!t.metricMetadata && !t.fromBrowseMode && Object(N.i)(n, "viewed", "article", "in_app", "from_conversation", s, "educate_event")].filter(Boolean);
                case E.E:
                    const {
                        activeArticle: a
                    } = i, c = a && a.reactionsReply && a.reactionsReply.reactionSet[t.reactionIndex] && a.reactionsReply.reactionSet[t.reactionIndex].emoji;
                    return [Object(N.i)(n, "sent", "reaction", "in_app", "on_article", {
                        owner: "educate",
                        reaction: c,
                        article_id: t.articleId,
                        conversation_id: r.conversationId
                    }, "educate_event")];
                case E.N:
                    return t.boundEventMetadata ? [Object(N.i)(n, "triggered", "bound_event", "in_app", "from_customer_site", Object.assign(t.boundEventMetadata, {
                        event_name: t.name
                    }))] : [];
                default:
                    return []
            }
        }(e, n).forEach((e => Object(N.m)(e))), "DESTROY_SESSION" === n.type && (ni.splice(0), ri.splice(0)), t(n)),
        oi = !Object(C.a)() && !0 === parent.__INTERCOM_REDUX_DEV_TOOLS__ && parent.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? parent.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            trace: !1,
            traceLimit: 25
        }) : () => e => e;
    const si = Br({
            updateRealtimeClient: jr,
            shutdownRealtimeClient: Sr,
            getConversation: S.l,
            userContentSeenByAdmin: S.t,
            adminIsTyping: S.a,
            conversationReadElsewhere: S.c
        }),
        ai = function(e) {
            let t, n;
            return r => i => o => {
                const s = r.getState();
                switch (o.type) {
                    case E.R:
                        {
                            if (!s.session) return;
                            const {
                                appId: r
                            } = s.session,
                            {
                                anonymousSessionDuration: i
                            } = s.user,
                            {
                                anonymousId: c,
                                anonymousSession: u
                            } = o.user,
                            {
                                originCookieDomain: d
                            } = o.user.app,
                            {
                                crossSiteCookies: l
                            } = o.user.app.features,
                            p = nr({
                                domainSetting: s.app.cookieDomain,
                                originCookieDomain: d,
                                meta: {
                                    action: o.type,
                                    role: o.user && o.user.role
                                }
                            });
                            if (Zn(t, c)) {
                                const n = tr(i, Object(Jn.b)(o.user) ? 6048e5 : 2333e7);
                                er(e, Object(a.a)(r), c, n, p, l), t = c
                            }
                            if (Zn(n, u)) {
                                const t = tr(i, 6048e5);
                                er(e, Object(a.b)(r), u, t, p, l), n = u
                            }
                            break
                        }
                    case E.X:
                        {
                            const {
                                session: t
                            } = s,
                            {
                                originCookieDomain: n
                            } = s.app,
                            r = nr({
                                domainSetting: s.app.cookieDomain,
                                originCookieDomain: n,
                                meta: {
                                    action: o.type,
                                    role: o.user && o.user.role
                                }
                            });
                            if (t && o.clearCookies) {
                                const {
                                    appId: n
                                } = t;
                                e.clear(Object(a.b)(n), {
                                    domain: r,
                                    path: Xn
                                }), e.clear(Object(a.a)(n), {
                                    domain: r,
                                    path: Xn
                                }), e.clear(Object(a.d)(n), {
                                    domain: r,
                                    path: Xn
                                })
                            }
                            break
                        }
                }
                return i(o)
            }
        }(s.a),
        ci = oi(),
        ui = Gr(kr);
    var di = e => Object($.createStore)(Pn, e, Object($.compose)(Object($.applyMiddleware)(V.a, ii, ei, qn, si, ai, qr, rr.d), ui, ci));
    var li = n(11),
        pi = n(62),
        fi = n(85),
        bi = n(60);
    const hi = 0,
        gi = 12,
        mi = 14;
    var vi = n(253),
        Oi = n.n(vi),
        yi = n(254),
        _i = n.n(yi);
    const Ci = "#IntercomDefaultWidget",
        Si = ["app_id", "user_id", "email", "user_hash", "session_duration", "custom_data", "user_data", "widget", "custom_launcher_selector", "hide_default_launcher", "alignment", "horizontal_padding", "vertical_padding", "cookie_domain", "background_color", "action_color", "api_base"];

    function ji(e) {
        return !ut()(e)
    }

    function wi(e) {
        return Si.indexOf(e) < 0
    }

    function Ei(e) {
        return Object.keys(e).filter(wi).filter(ji).reduce(((t, n) => (t[n] = e[n], t)), {})
    }

    function Ii(e) {
        return Object.keys(e).filter(ji).reduce(((t, n) => {
            const r = e[n];
            return function(e) {
                return null != e
            }(r) && (t[n] = r), t
        }), {})
    }

    function Ai(e) {
        return Object.assign(function(e) {
            return e.custom_data ? Ei(e.custom_data) : {}
        }(e), Ei(e))
    }

    function Ti(e) {
        return function(e) {
            if (!e.user_data) return;
            return Ii({
                appId: e.app_id,
                email: e.user_data.email,
                userId: e.user_data.user_id,
                userHash: e.user_data.user_hash
            })
        }(e) || function(e) {
            return Ii({
                appId: e.app_id,
                email: e.email,
                userId: e.user_id,
                userHash: e.user_hash
            })
        }(e)
    }

    function Ri(e) {
        return e && e.widget && !ut()(e.widget.activator) && e.widget.activator !== Ci ? e.widget.activator : null
    }

    function Pi(e) {
        return ut()(e.custom_launcher_selector) ? Ri(e) : e.custom_launcher_selector
    }

    function Mi(e) {
        return _i()(e.hide_default_launcher) ? e.hide_default_launcher ? "hide" : "show" : function(e) {
            return e.widget && e.widget.activator === Ci ? "show" : "not-present"
        }(e)
    }

    function Di(e) {
        return e.session_duration || null
    }

    function ki(e) {
        const t = {
            alignment: e.alignment,
            horizontalPadding: e.horizontal_padding,
            verticalPadding: e.vertical_padding,
            cookieDomain: e.cookie_domain,
            color: e.action_color,
            secondaryColor: e.background_color
        };
        return Oi()(t, (e => void 0 !== e))
    }
    var Ni = n(24),
        Ui = n(176),
        Li = n(22),
        xi = n.n(Li);
    const Bi = xi()("intercom.client-matching.client-match-object.base");
    class base_BaseClientMatchObject {
        constructor(e) {
            this._ruleset = void 0, this._predicateChain = void 0, this._ruleset = e, this._predicateChain = new predicate_chain_PredicateChain(e, (() => {}))
        }
        getRuleset() {
            return this._ruleset
        }
        getRulesetId() {
            return this._ruleset.ruleset_id
        }
        getObjectType() {
            return this._ruleset.ruleset_link_object_type
        }
        getSerializedObject() {
            return this._ruleset.serialized_object
        }
        isMatchableInLocation(e) {
            return !this._ruleset.matching_locations || -1 !== this._ruleset.matching_locations.indexOf(e)
        }
        evaluatePredicates() {
            return !(!this.matchOnMobileBrowser() && Object(U.i)()) && this._predicateChain.evaluate()
        }
        canRematch() {
            return "transient_match" === this.getRuleset().ruleset_match_behavior
        }
        matchOnMobileBrowser() {
            return !0
        }
        refreshActiveMatch(e) {
            this.onRefreshActiveMatch(this._ruleset.serialized_object, e)
        }
        async match(e, t) {
            Bi(`.match called [${this.getObjectType()}]`, this.getRuleset());
            const n = e.getState(),
                r = this.getRuleset(),
                i = this.onPreMatch(e);
            let o;
            try {
                const e = b.d.rulesetConditionSatisfied(n.session, r.ruleset_id, r.ruleset_link_id, r.user_id, r.company_id, r.predicates, r.checkpoint_id, r.notification_record_id, r.extra_context).then((e => this.selectMatchObject(e))),
                    t = this.getSerializedObject();
                o = t ? await Promise.resolve(t) : await e
            } catch (e) {
                return Object(N.b)(`Call to /match failed, unable to complete client match rulesetId=${this.getRulesetId()}`)
            }
            this.onMatch(o, e, i, t)
        }
        selectMatchObject(e) {
            return e
        }
        onPreMatch(e) {}
        onMatch(e, t, n, r) {}
        onRefreshActiveMatch(e, t) {}
        unmatch(e) {
            Bi(`.unmatch called [${this.getObjectType()}]`, this.getRuleset()), this.onUnmatch(e)
        }
        onUnmatch(e) {}
    }
    class banner_BannerClientMatchObject extends base_BaseClientMatchObject {
        selectMatchObject(e) {
            return e.banner
        }
        onMatch(e, t) {
            if (!e) return;
            const n = b.d.buildBanner(e);
            let {
                banners: r
            } = t.getState();
            r = r.concat(n), t.dispatch(Object(lr.f)(r))
        }
        canRematch() {
            return !0
        }
        onUnmatch(e) {
            let {
                banners: t
            } = e.getState();
            t = t.filter((e => e.ruleset_id !== this.getRuleset().ruleset_id)), e.dispatch(Object(lr.f)(t))
        }
    }
    class tour_TourClientMatchObject extends base_BaseClientMatchObject {
        selectMatchObject(e) {
            return e.tour
        }
        matchOnMobileBrowser() {
            return !1
        }
        onPreMatch() {
            var e, t, n;
            return Object(C.a)() ? {} : {
                currentUrl: null === (e = window) || void 0 === e || null === (t = e.parent) || void 0 === t || null === (n = t.location) || void 0 === n ? void 0 : n.pathname
            }
        }
        onMatch(e, t, n) {
            var r, i, o;
            t.dispatch(Object(p.l)(b.d.buildTour(e))), Object(C.a)() || n.currentUrl === (null === (r = window) || void 0 === r || null === (i = r.parent) || void 0 === i || null === (o = i.location) || void 0 === o ? void 0 : o.pathname) || (Object(N.c)("tour_match_url_mismatch"), Object(N.b)(`tour_match_url_mismatch rulesetId=${this.getRulesetId()}`))
        }
    }
    class inbound_trigger_InboundTriggerClientMatchObject extends base_BaseClientMatchObject {
        selectMatchObject(e) {
            return e.composerSuggestions
        }
        onMatch(e, t) {
            t.dispatch(Object(d.a)(e))
        }
        onUnmatch(e) {
            e.dispatch(Object(d.b)(this.getRulesetId()))
        }
    }
    var $i = n(107);
    class answerbot_predictive_context_AnswerbotPredictiveContextClientMatchObject extends base_BaseClientMatchObject {
        selectMatchObject(e) {
            return e.answerbotPredictiveContexts
        }
        onMatch(e, t) {
            t.dispatch(Object($i.a)(e))
        }
        onUnmatch(e) {
            e.dispatch(Object($i.a)(null))
        }
    }
    const Fi = xi()("intercom.client-match-object.messenger-trigger");
    class messenger_trigger_MessengerTriggerClientMatchObject extends base_BaseClientMatchObject {
        constructor(...e) {
            super(...e), this._node = void 0
        }
        selectMatchObject() {
            return null
        }
        onMatch(e, t) {
            this._node = this._findDOMNode(e), t.dispatch(Object(fi.a)(e, b.d))
        }
        onUnmatch(e) {
            e.dispatch(Object(fi.b)(this.messengerTriggerId()))
        }
        onRefreshActiveMatch(e, t) {
            this._shouldRefreshActiveMatch() && (Fi(`TriggerId=${e.id} (${e.selector}) is missing from the page, re-attaching listener`), this.onUnmatch(t), this.onMatch(e, t))
        }
        messengerTriggerId() {
            return this.getSerializedObject().id
        }
        _shouldRefreshActiveMatch() {
            return Boolean(this._node && !this._documentContains(this._node))
        }
        _findDOMNode(e) {
            return window.parent.document.querySelector(e.selector)
        }
        _documentContains(e) {
            return window.parent.document.contains ? window.parent.document.contains(e) : window.parent.document.body.contains(e)
        }
    }
    class chat_ChatClientMatchObject extends base_BaseClientMatchObject {
        selectMatchObject(e) {
            return e.chat
        }
        onMatch(e, t) {
            e && t.dispatch(Object(S.o)(b.d, Object(b.a)(e)))
        }
    }
    class custom_bot_CustomBotClientMatchObject extends base_BaseClientMatchObject {
        selectMatchObject(e) {
            return e.customBot
        }
        onMatch(e, t) {
            e && t.dispatch(Object(S.o)(b.d, Object(b.a)(e)))
        }
    }
    class post_PostClientMatchObject extends base_BaseClientMatchObject {
        selectMatchObject(e) {
            return e.post
        }
        onMatch(e, t) {
            e && t.dispatch(Object(S.o)(b.d, Object(b.a)(e)))
        }
    }
    var Vi = n(63);
    class survey_SurveyClientMatchObject extends base_BaseClientMatchObject {
        selectMatchObject(e) {
            return e.survey
        }
        onMatch(e, t) {
            if (!e) return;
            const n = Object(b.b)(e);
            t.dispatch(Object(Vi.e)(n))
        }
    }
    class seriesCondition_SeriesConditionClientMatchObject extends base_BaseClientMatchObject {
        selectMatchObject(e) {
            return e.seriesCondition
        }
        onMatch(e, t, n, r) {
            r.createOrUpdateUser({}, "apiUpdate", !0)
        }
    }

    function Hi(e) {
        switch (e.ruleset_link_object_type) {
            case "banner":
                return new banner_BannerClientMatchObject(e);
            case "tour":
                return new tour_TourClientMatchObject(e);
            case "survey":
                return new survey_SurveyClientMatchObject(e);
            case "inbound_trigger":
            case "inbound_custom_bot":
                return new inbound_trigger_InboundTriggerClientMatchObject(e);
            case "chat":
                return new chat_ChatClientMatchObject(e);
            case "custom_bot":
                return new custom_bot_CustomBotClientMatchObject(e);
            case "post":
                return new post_PostClientMatchObject(e);
            case "messenger_trigger":
            case "button_custom_bot":
                return new messenger_trigger_MessengerTriggerClientMatchObject(e);
            case "answerbot_predictive_context":
                return new answerbot_predictive_context_AnswerbotPredictiveContextClientMatchObject(e);
            case "series_condition":
                return new seriesCondition_SeriesConditionClientMatchObject(e);
            default:
                return new base_BaseClientMatchObject(e)
        }
    }
    const Gi = xi()("intercom.client-matching.client-match-runner");
    class client_match_runner_ClientMatchRunner {
        constructor(e, t) {
            this.clientMatches = [], this.activeClientMatchIds = {}, this.evalLoop = void 0, this.store = void 0, this.session = void 0, this.store = e, this.session = t
        }
        start() {
            void 0 === this.evalLoop && (Gi("Starting evaluation loop"), this.evalLoop = setInterval((() => this.performClientMatching()), 500))
        }
        stop() {
            void 0 !== this.evalLoop && (Gi("Stopping evaluation loop"), window.clearInterval(this.evalLoop), this.evalLoop = void 0)
        }
        updateClientMatches(e, t) {
            this._removeMissingMatches(e, t), this._addNewMatches(e), this.performClientMatching()
        }
        performClientMatching() {
            const e = this._evaluateClientMatches();
            this._processResults(e)
        }
        _evaluateClientMatches() {
            const e = {
                positiveMatches: [],
                negativeMatches: []
            };
            return this.clientMatches.forEach((t => {
                t.evaluatePredicates() ? e.positiveMatches.push(t) : e.negativeMatches.push(t)
            })), e
        }
        _processResults(e) {
            e.negativeMatches.forEach((e => {
                const t = e.getRulesetId();
                this.activeClientMatchIds[t] && (e.unmatch(this.store), delete this.activeClientMatchIds[t], e.canRematch() || this._removeClientMatch(e))
            })), e.positiveMatches.forEach((e => {
                const t = e.getRulesetId();
                this.activeClientMatchIds[t] ? e.refreshActiveMatch(this.store) : (e.match(this.store, this.session), this.activeClientMatchIds[t] = !0)
            }))
        }
        _addNewMatches(e) {
            for (const t of e) this.clientMatches.find((e => e.getRulesetId() === t.ruleset_id)) || this.clientMatches.push(Hi(t));
            this._evaluateClientMatches()
        }
        _removeMissingMatches(e, t) {
            for (const n of this.clientMatches) n.isMatchableInLocation(t) && !e.find((e => e.ruleset_id === n.getRulesetId())) && (this.activeClientMatchIds[n.getRulesetId()] && n.unmatch(this.store), this._removeClientMatch(n))
        }
        _removeClientMatch(e) {
            this.clientMatches.splice(this.clientMatches.indexOf(e), 1)
        }
    }
    var qi = n(236);
    const zi = e => {
            try {
                return e.self !== e.top
            } catch (e) {
                return !1
            }
        },
        Wi = e => {
            try {
                return e.document.body.text.length > 0
            } catch (e) {
                return !1
            }
        };
    var Ji = n(237),
        Ki = n(108),
        Yi = n(66);
    const {
        assign: Qi
    } = Object;

    function Xi(e, t, n) {
        let r = t(e.getState());
        return () => {
            const i = t(e.getState());
            r !== i && (r = i, n(i))
        }
    }

    function Zi(e) {
        return e.intercomSettings
    }
    var eo = class session_Session {
            constructor(e, t, n) {
                this.handleCustomLauncherClick = e => {
                    e.preventDefault(), this.toggleMessenger(), this.addLauncherClickedMetric();
                    return Ri(Zi(this.window)) && (N.j.addIncrementOpMetric("legacyCustomLauncherClick"), N.j.buildAndAddHcMetric("legacyCustomLauncherClick")), !1
                }, this.handleMessengerChange = e => {
                    (e ? this.messengerOpenCallbacks : this.messengerCloseCallbacks).forEach((e => e())), e && this.sendMessengerOpenRequest(), e || "messenger-trigger" !== Object(i.f)(this.store.getState()) || this.store.dispatch(li.b.navigateBack())
                }, this.handleUnreadConversationCountChange = e => {
                    this.unreadConversationCountChangeCallbacks.forEach((t => t(e)))
                }, this.window = e, this.store = t || (e => {
                    const t = di(e);
                    return t.subscribe(T(t)), t.subscribe(B(t)), t
                })(), this.destroyApp = n, this.isReady = !1, this.hasScrapedCookies = !1, this.readyCallbacks = [], this.messengerOpenCallbacks = [], this.messengerCloseCallbacks = [], this.unreadConversationCountChangeCallbacks = [], this.storeSubscribers = [], this.clientMatchRunner = new client_match_runner_ClientMatchRunner(this.store, this), this.startClientMatchRunner(), this.createMessengerChangeSubscriber(), this.createUnreadConversationCountChangeSubscriber()
            }
            createOrUpdateUser(e = {}, t, n = !1) {
                const r = this.getSettings(e),
                    i = this.window.intercomEncryptedPayload;
                const o = this.store.getState().app;
                let {
                    session: c
                } = this.store.getState();
                const d = Ti(r);
                if (c = Qi({}, c, d), ! function(e) {
                        return e && e.appId
                    }(c)) return N.j.addIncrementOpMetric("bailed_ping_request_because_of_invalid_session"), Promise.resolve();
                const {
                    appId: l
                } = c;
                (({
                    appWindow: e,
                    appId: t
                }) => {
                    if (zi(e)) {
                        const n = zi(e.parent),
                            r = Wi(e),
                            {
                                referrer: i
                            } = e.document;
                        Object(N.d)(`messenger_sandboxed - referrer=${i}`), Object(N.c)("messenger_sandboxed", {
                            appId: t,
                            appSandboxed: n,
                            hasBodyText: r
                        })
                    }
                })({
                    appWindow: this.window,
                    appId: l
                }), c = Qi({}, c, function(e) {
                    const t = {},
                        n = s.a.read(Object(a.a)(e)) || s.a.read(Object(a.d)(e)),
                        r = s.a.read(Object(a.b)(e));
                    n && Qi(t, {
                        anonymousId: n
                    });
                    r && Qi(t, {
                        anonymousSession: r
                    });
                    return t
                }(l));
                const p = Ai(r),
                    f = {};
                if (Object(a.f)()) f.marketo_tracking_cookie = null, f.hubspot_tracking_cookie = null;
                else {
                    if (o.features.marketoEnrichmentInstalled) {
                        this.hasScrapedCookies = !0;
                        const e = s.a.read(Object(a.e)());
                        e && (f.marketo_tracking_cookie = e)
                    }
                    if (o.features.hubspotInstalled) {
                        this.hasScrapedCookies = !0;
                        const e = s.a.read(Object(a.c)());
                        e && (f.hubspot_tracking_cookie = e)
                    }
                }
                const h = Pi(r);
                h && this.enableCustomLauncher(h), this.stopMetricsPolling = N.j.startMetricsPolling(c, this.window), Object(u.a)() || (N.j.buildAndAddHcMetric("apiBoot"), Object(u.m)(!0));
                const g = this.window.document.URL,
                    m = ki(r);
                return function(e, t) {
                    Object(st.c)(e, (e => t.dispatch(Object(Ui.c)(e)))), Object(st.f)(e)
                }(this.window, this.store), this.store.dispatch(pi.c.createOrUpdateUser(b.d, c, g, p, Mi(r), Di(r), m, n, i, t, f, this.destroyApp)).then((e => e && this.handleUserCreateOrUpdate(e, r)))
            }
            sendMessengerOpenRequest() {
                this.whenReady((() => this.store.dispatch(pi.c.sendMessengerOpen(b.d)).then((e => e && this.handleMessengerOpen(e)))))
            }
            handleMessengerOpen(e) {
                const {
                    clientsideRulesetConditions: t,
                    composerSuggestions: n
                } = e;
                this.store.dispatch(Object(d.e)(n)), this.clientMatchRunner.updateClientMatches(t, mi)
            }
            createCustomizationOverride(e) {
                const t = ki(this.getSettings(e));
                return this.store.dispatch(Object(l.b)(t))
            }
            destroy(e = !0) {
                this.store.dispatch(pi.c.destroySession(e)), this.stopMetricsPolling && this.stopMetricsPolling(), this.disableCustomLauncher(), this.removeStoreSubscribers(), this.stopClientMatchRunner(), pi.c.setupDefaultCreateOrUpdateUserRateLimiting(), pi.c.isDuplicateCreateOrUpdateUserRequest.reset()
            }
            openMessenger() {
                this.whenReady((() => {
                    const {
                        borderless: e
                    } = this.store.getState();
                    e.conversationId ? this.store.dispatch(li.b.openConversationInMessenger(e.conversationId)) : (this.store.dispatch(li.b.showInitialScreen()), this.store.dispatch(li.b.openMessenger()))
                }))
            }
            openOnBoot() {
                const {
                    getState: e,
                    dispatch: t
                } = this.store, n = e().openOnBoot;
                if (!Object(o.b)() && n) switch (n.type) {
                    case "conversation":
                        const e = n.metadata.conversationId;
                        e && t(li.b.openConversationInMessenger(e));
                        break;
                    case "new_conversation":
                        t(li.b.openMessenger()), t(li.b.showNewConversation());
                        break;
                    case "article":
                        if ("article-link" === n.metadata.componentId && n.metadata.url) {
                            var r, i;
                            const e = null === (r = n.metadata) || void 0 === r || null === (i = r.previousState) || void 0 === i ? void 0 : i.metadata;
                            if (e) {
                                const n = e.conversationId;
                                n && t(li.b.openConversationInMessenger(n))
                            }
                            t(Object(f.b)(b.d, n.metadata.cardUri, n.metadata.componentId, n.metadata.url, {}))
                        }
                }
                n.metadata.openArticleStandalone && this.showArticle(n.metadata.articleIds[n.metadata.articleIds.length - 1])
            }
            openOnBootAfterUserLoaded() {
                const {
                    getState: e
                } = this.store, t = e().openOnBoot;
                if (!Object(o.b)() && t && "search_browse_article" === t.type) return this.openIntoSearchBrowseArticle(t)
            }
            async openIntoSearchBrowseArticle(e) {
                const {
                    dispatch: t,
                    getState: n
                } = this.store, {
                    articleIds: r
                } = e.metadata, i = r.pop();
                Object(Yi.c)(n()) ? (await t(Object(Ji.b)(b.d)), t(li.b.showSearchBrowse(!0)), t(Object(Ki.i)(i, null, !0, !0)), t(li.b.openMessenger(!0)), t(Object(Ki.h)(i, null, !0))) : t({
                    type: E.n
                })
            }
            async showConversation(e) {
                this.whenReady((async () => {
                    this.store.dispatch(li.b.getAndOpenConversation(e))
                }))
            }
            closeMessenger() {
                this.whenReady((() => {
                    this.store.dispatch(li.b.closeMessenger())
                }))
            }
            toggleMessenger() {
                this.whenReady((() => {
                    this.store.dispatch(li.b.toggleMessenger())
                }))
            }
            showConversations() {
                this.whenReady((() => {
                    this.store.dispatch(li.b.openConversations())
                }))
            }
            showNewConversation(e) {
                this.whenReady((() => {
                    this.store.dispatch(li.b.openNewConversation(e))
                }))
            }
            startSurvey(e) {
                this.whenReady((() => {
                    this.store.dispatch(Object(Vi.d)(e))
                }))
            }
            startTour(e) {
                this.whenReady((() => {
                    this.store.dispatch(Object(p.d)(e))
                }))
            }
            createEvent(e, t) {
                this.whenReady((() => {
                    this.store.dispatch(pi.c.createEvent(b.d, e, t)).then((e => {
                        if (!e) return;
                        const {
                            clientsideRulesetConditions: t,
                            tour: n
                        } = e;
                        t && t.length > 0 ? this.clientMatchRunner.updateClientMatches(t, gi) : n && this.store.dispatch(Object(p.l)(n))
                    }))
                }))
            }
            createArticleReaction(e, t, n) {
                this.whenReady((() => {
                    const {
                        session: r,
                        app: {
                            isMessengerOpen: o
                        }
                    } = this.store.getState(), s = !("conversation" === Object(i.f)(this.store.getState()) && o);
                    b.d.createArticleReaction(r, e, t, s, n)
                }))
            }
            previewInboundCustomBot(e) {
                this.whenReady((() => {
                    e = b.d.buildComposerSuggestions(e), this.store.dispatch(Object(d.d)(e))
                }))
            }
            previewOutboundCustomBot(e) {
                this.store.dispatch(Object(fi.d)(b.d, e))
            }
            createMetric(e, t) {
                this.whenReady((() => {
                    const {
                        session: n,
                        user: r
                    } = this.store.getState();
                    t = Qi({
                        anonymous_id: n.anonymousId,
                        end_user_id: r.id,
                        user_id: r.id,
                        user_role: r.role
                    }, t);
                    const i = n.appId,
                        o = [{
                            name: e.toString(),
                            id: Ni.a.generateUUID(),
                            app_id_code: i,
                            created_at: Math.round(Date.now() / 1e3),
                            metadata: t
                        }];
                    Object(Jn.a)(r) && b.d.createMetrics(n, o)
                }))
            }
            trigger(e) {
                this.store.dispatch(Object(fi.c)(e, b.d))
            }
            getSettings(e) {
                return Qi({}, Zi(this.window), e)
            }
            setSetting(e, t) {
                Zi(this.window)[e] = t
            }
            getArticleReaction(e, t, n) {
                this.whenReady((() => {
                    const {
                        session: r
                    } = this.store.getState();
                    b.d.getArticleReaction(r, e, t, n)
                }))
            }
            enterTourPreviewMode(e) {
                this.whenReady((() => {
                    this.store.dispatch(Object(p.j)(b.d.buildTour(e), !0))
                }))
            }
            exitTourPreviewMode() {
                this.whenReady((() => {
                    this.store.dispatch(Object(p.k)())
                }))
            }
            getVisitorId() {
                const {
                    session: e
                } = this.store.getState();
                if (!e) return;
                const {
                    appId: t
                } = e;
                return s.a.read(Object(a.a)(t)) || s.a.read(Object(a.d)(t))
            }
            onMessengerOpen(e) {
                this.messengerOpenCallbacks.push(e)
            }
            onMessengerClose(e) {
                this.messengerCloseCallbacks.push(e)
            }
            onUnreadConversationCountChange(e) {
                const t = this.store.getState(),
                    n = Object(bi.b)(t);
                this.unreadConversationCountChangeCallbacks.push(e), e(n)
            }
            enableCustomLauncher(e) {
                if (Object(C.a)()) return;
                this.disableCustomLauncher();
                const t = this.window.document.getElementsByTagName("body")[0];
                this.customLauncherClickHandler = Object(y.g)(t, e, this.handleCustomLauncherClick), Object(y.c)(t, "click", this.customLauncherClickHandler)
            }
            disableCustomLauncher() {
                if (!this.customLauncherClickHandler) return;
                const e = this.window.document.getElementsByTagName("body")[0];
                Object(y.y)(e, "click", this.customLauncherClickHandler), this.customLauncherClickHandler = null
            }
            whenReady(e) {
                if (this.isReady) return setTimeout(e, 1);
                this.readyCallbacks.push(e)
            }
            executeReadyCallbacks() {
                const {
                    readyCallbacks: e
                } = this;
                for (; e.length;) e.shift()();
                this.readyCallbacks = []
            }
            addLauncherClickedMetric() {
                this.whenReady((() => {
                    const {
                        user: e,
                        app: {
                            isMessengerOpen: t
                        }
                    } = this.store.getState(), n = {
                        is_messenger_open: t,
                        is_custom_launcher: !0
                    };
                    N.j.buildAndAddMetric(e, "clicked", "launcher", "in_app", "", n)
                }))
            }
            handleUserCreateOrUpdate(e, t) {
                if (this.shouldSendTrackingCookies() && this.createOrUpdateUser(t, "apiUpdate"), e.clientsideRulesetConditions && this.clientMatchRunner.updateClientMatches(e.clientsideRulesetConditions, hi), this.isReady) return e;
                if (this.executeReadyCallbacks(), this.isReady = !0, Object(qi.a)() && this.window.parent.postMessage("messenger_session_ready", "*"), !Object(u.b)()) {
                    const e = this.store.getState(),
                        t = Object(c.a)(e),
                        n = Object(U.l)();
                    N.j.buildAndAddHcMetric("createOrUpdateUser", {
                        messengerIsVisible: Object(u.g)(t),
                        isLauncherEnabled: t,
                        hasDisplayNoneSet: n
                    }), Object(u.k)(!0)
                }
                return this.openOnBootAfterUserLoaded(), e
            }
            showArticle(e) {
                const {
                    dispatch: t,
                    getState: n
                } = this.store;
                this.whenReady((async () => {
                    const {
                        app: {
                            isMessengerOpen: r
                        }
                    } = n();
                    r || this.openMessenger(), t(Object(Ki.g)(e, {}))
                }))
            }
            shouldSendTrackingCookies() {
                const e = this.store.getState().app;
                return !this.hasScrapedCookies && (e.features.hubspotInstalled || e.features.marketoEnrichmentInstalled)
            }
            startClientMatchRunner() {
                this.clientMatchRunner.start()
            }
            stopClientMatchRunner() {
                this.clientMatchRunner.stop()
            }
            createMessengerChangeSubscriber() {
                this.addStoreSubscriber(Xi(this.store, (e => e.app.isMessengerOpen), this.handleMessengerChange))
            }
            createUnreadConversationCountChangeSubscriber() {
                this.addStoreSubscriber(Xi(this.store, bi.b, this.handleUnreadConversationCountChange))
            }
            addStoreSubscriber(e) {
                this.storeSubscribers.push(this.store.subscribe(e))
            }
            removeStoreSubscribers() {
                this.storeSubscribers.forEach((e => !!e && e()))
            }
        },
        to = n(255),
        no = n.n(to),
        ro = n(239),
        io = n(67),
        oo = n(240),
        so = n(241),
        ao = n(101);
    const co = ({
        isLauncherEnabled: e,
        customization: {
            verticalPadding: t
        }
    }) => e ? t + 60 + 20 : t;
    var uo = e => `\n  @keyframes intercom-lightweight-app-launcher {\n    from {\n      opacity: 0;\n      transform: scale(0.5);\n    }\n    to {\n      opacity: 1;\n      transform: scale(1);\n    }\n  }\n\n  @keyframes intercom-lightweight-app-gradient {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n\n  @keyframes intercom-lightweight-app-messenger {\n    from {\n      opacity: 0;\n      transform: translateY(20px);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n\n  .intercom-lightweight-app {\n    position: fixed;\n    z-index: 2147483001;\n    width: 0;\n    height: 0;\n    font-family: intercom-font, "Helvetica Neue", "Apple Color Emoji", Helvetica, Arial, sans-serif;\n  }\n\n  .intercom-lightweight-app-gradient {\n    position: fixed;\n    z-index: 2147483002;\n    width: 500px;\n    height: 500px;\n    bottom: 0;\n    ${e.customization.alignment}: 0;\n    pointer-events: none;\n    background: radial-gradient(\n      ellipse at bottom ${e.customization.alignment},\n      rgba(29, 39, 54, 0.16) 0%,\n      rgba(29, 39, 54, 0) 72%);\n    animation: intercom-lightweight-app-gradient 200ms ease-out;\n  }\n\n  .intercom-lightweight-app-launcher {\n    position: fixed;\n    z-index: 2147483003;\n    bottom: ${(({isMobile:e,customization:t})=>e?20:t.verticalPadding)(e)}px;\n    ${e.customization.alignment}: ${(({isMobile:e,customization:t})=>e?20:t.horizontalPadding)(e)}px;\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n    background: ${e.colors.primaryColor};\n    cursor: pointer;\n    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.06), 0 2px 32px 0 rgba(0, 0, 0, 0.16);\n    animation: intercom-lightweight-app-launcher 250ms ease;\n  }\n\n  .intercom-lightweight-app-launcher:focus {\n    outline: none;\n    ${e.accessibility.tabNavigation?`box-shadow: inset 0 0 0 5px ${(({accessibility:e})=>ao.a[e.accessibilityTheme])(e)};`:""}\n  }\n\n  .intercom-lightweight-app-launcher-icon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 60px;\n    height: 60px;\n    transition: transform 100ms linear, opacity 80ms linear;\n  }\n\n  .intercom-lightweight-app-launcher-icon-open {\n    ${e.isMessengerOpen&&!e.hideLightweightAppMessenger?"\n        opacity: 0;\n        transform: rotate(30deg) scale(0);\n      ":"\n        opacity: 1;\n        transform: rotate(0deg) scale(1);\n      "}\n  }\n\n  .intercom-lightweight-app-launcher-icon-open svg {\n    width: 28px;\n    height: 32px;\n  }\n\n  .intercom-lightweight-app-launcher-icon-open svg path {\n    fill: ${e.colors.buttonTextColor};\n  }\n\n  .intercom-lightweight-app-launcher-icon-self-serve {\n    ${e.isMessengerOpen&&!e.hideLightweightAppMessenger?"\n        opacity: 0;\n        transform: rotate(30deg) scale(0);\n      ":"\n        opacity: 1;\n        transform: rotate(0deg) scale(1);\n      "}\n  }\n\n  .intercom-lightweight-app-launcher-icon-self-serve svg {\n    height: 56px;\n  }\n\n  .intercom-lightweight-app-launcher-icon-self-serve svg path {\n    fill: ${e.colors.buttonTextColor};\n  }\n\n  .intercom-lightweight-app-launcher-custom-icon-open {\n    max-height: 36px;\n    max-width: 36px;\n    ${e.isMessengerOpen&&!e.hideLightweightAppMessenger?"\n        opacity: 0;\n        transform: rotate(30deg) scale(0);\n      ":"\n        opacity: 1;\n        transform: rotate(0deg) scale(1);\n      "}\n  }\n\n  .intercom-lightweight-app-launcher-icon-minimize {\n    ${e.isMessengerOpen&&!e.hideLightweightAppMessenger?"\n        opacity: 1;\n        transform: rotate(0deg) scale(1);\n      ":"\n        opacity: 0;\n        transform: rotate(-60deg) scale(0);\n      "}\n  }\n\n  .intercom-lightweight-app-launcher-icon-minimize svg {\n    width: 16px;\n  }\n\n  .intercom-lightweight-app-launcher-icon-minimize svg path {\n    fill: ${e.colors.buttonTextColor};\n  }\n\n  .intercom-lightweight-app-messenger {\n    position: fixed;\n    z-index: 2147483003;\n    overflow: hidden;\n    background-color: white;\n    animation: intercom-lightweight-app-messenger 250ms ease-out;\n    ${e.isMobile?"\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n      ":`\n        width: 376px;\n        height: calc(100% - ${20+co(e)}px);\n        max-height: 704px;\n        min-height: 250px;\n        ${e.customization.alignment}: ${e.customization.horizontalPadding}px;\n        bottom: ${co(e)}px;\n        box-shadow: 0 5px 40px rgba(0,0,0,0.16);\n        border-radius: 8px;\n      `}\n  }\n\n  .intercom-lightweight-app-messenger-header {\n    height: 75px;\n    background: linear-gradient(\n      135deg,\n      ${e.colors.gradientStartColor} 0%,\n      ${e.colors.gradientEndColor} 100%\n    );\n  }\n\n  @media print {\n    .intercom-lightweight-app {\n      display: none;\n    }\n  }\n`,
        lo = n(40);
    const po = (e, t) => {
            const {
                onLauncherClick: n,
                launcherLogoUrl: r,
                allowSelfServeIcon: i
            } = t, o = ho(t), s = e.document.createElement("div");
            s.addEventListener("click", n, !0), s.addEventListener("keydown", o, !0), s.setAttribute("class", "intercom-lightweight-app-launcher intercom-launcher"), s.setAttribute("role", "button"), s.setAttribute("tabindex", "0"), s.setAttribute("aria-label", Object(lo.e)("open_intercom_messenger")), s.setAttribute("aria-live", "polite");
            const a = e.document.createElement("div");
            if (a.setAttribute("class", "intercom-lightweight-app-launcher-icon intercom-lightweight-app-launcher-icon-open"), r) {
                const t = e.document.createElement("img");
                t.setAttribute("src", r), t.setAttribute("alt", ""), t.setAttribute("class", "intercom-lightweight-app-launcher-custom-icon-open"), a.appendChild(t)
            } else i ? (a.setAttribute("class", "intercom-lightweight-app-launcher-icon intercom-lightweight-app-launcher-icon-self-serve"), a.innerHTML = '<svg aria-hidden="true" viewBox="1 1 60 60"><path d="M27.765 42.244c-8.614 0-15.622-7.008-15.622-15.622S19.151 11 27.765 11s15.622 7.008 15.622 15.622-7.007 15.622-15.622 15.622zm0-28.398c-7.045 0-12.775 5.73-12.775 12.775s5.73 12.775 12.775 12.775 12.775-5.73 12.775-12.775-5.73-12.775-12.775-12.775z"/><path d="M34.869 39.146l4.014-3.738 9.286 9.114a3.164 3.164 0 01-.07 4.562l-.071.066a3.163 3.163 0 01-4.561-.257l-8.598-9.747zM27.77 34.173c-2.882 0-5.412-.876-7.656-2.526a1.002 1.002 0 01-.35-.81c.008-.461.445-.969 1.02-.959.284.005.493.153.713.308 1.837 1.302 3.832 1.971 6.275 1.971 1.875 0 4.492-.476 6.314-2.118a.98.98 0 01.638-.261.92.92 0 01.686.241c.222.209.33.527.336.735a1.02 1.02 0 01-.318.775c-1.333 1.237-4.262 2.644-7.658 2.644z"/></svg>\n') : a.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 32"><path d="M28 32s-4.714-1.855-8.527-3.34H3.437C1.54 28.66 0 27.026 0 25.013V3.644C0 1.633 1.54 0 3.437 0h21.125c1.898 0 3.437 1.632 3.437 3.645v18.404H28V32zm-4.139-11.982a.88.88 0 00-1.292-.105c-.03.026-3.015 2.681-8.57 2.681-5.486 0-8.517-2.636-8.571-2.684a.88.88 0 00-1.29.107 1.01 1.01 0 00-.219.708.992.992 0 00.318.664c.142.128 3.537 3.15 9.762 3.15 6.226 0 9.621-3.022 9.763-3.15a.992.992 0 00.317-.664 1.01 1.01 0 00-.218-.707z"/></svg>';
            s.appendChild(a);
            const c = e.document.createElement("div");
            return c.setAttribute("class", "intercom-lightweight-app-launcher-icon intercom-lightweight-app-launcher-icon-minimize"), c.innerHTML = '<svg viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M.116 4.884l1.768-1.768L8 9.232l6.116-6.116 1.768 1.768L8 12.768.116 4.884z"/></svg>', s.appendChild(c), s
        },
        fo = (e, t, n, r, i, o) => s => {
            if (o.textContent = uo(s), t.locale !== s.locale && Object(lo.d)(s.locale), !t.isAppActive && s.isAppActive ? e.document.body.appendChild(n) : t.isAppActive && !s.isAppActive && e.document.body.removeChild(n), !t.isLauncherEnabled && s.isLauncherEnabled) {
                const t = po(e, s);
                n.appendChild(t)
            } else if (t.isLauncherEnabled && !s.isLauncherEnabled) {
                const t = (e => e.document.querySelector(".intercom-lightweight-app-launcher"))(e);
                t && n.contains(t) && n.removeChild(t)
            }
            t.isMessengerOpen || !s.isMessengerOpen || s.hideLightweightAppMessenger ? t.isMessengerOpen && !s.isMessengerOpen && (n.removeChild(r), n.removeChild(i)) : (n.appendChild(r), n.appendChild(i)), t = s
        },
        bo = (e, t) => () => {
            const {
                body: n
            } = e.document;
            t && n.contains(t) && n.removeChild(t)
        },
        ho = ({
            onLauncherKeypress: e
        }) => ({
            keyCode: t
        }) => {
            t !== y.a.ENTER && t !== y.a.SPACE || e()
        },
        go = ({
            onTabKeyDown: e
        }) => ({
            keyCode: t
        }) => {
            t === y.a.TAB && e()
        },
        mo = ({
            onClick: e
        }) => () => {
            e()
        };
    var vo = (e, t) => {
            const {
                isAppActive: n,
                isLauncherEnabled: r,
                isMessengerOpen: i,
                locale: o
            } = t;
            void 0 !== o && Object(lo.d)(o);
            const s = go(t),
                a = mo(t);
            e.document.addEventListener("keydown", s, !0), e.document.addEventListener("click", a, !1);
            const c = e.document.createElement("div");
            if (c.setAttribute("class", "intercom-lightweight-app"), n && e.document.body.appendChild(c), r) {
                const n = po(e, t);
                c.appendChild(n)
            }
            const u = e.document.createElement("div");
            u.setAttribute("class", "intercom-lightweight-app-messenger intercom-messenger"), u.setAttribute("aria-live", "polite");
            const d = e.document.createElement("div");
            d.setAttribute("class", "intercom-lightweight-app-messenger-header"), u.appendChild(d);
            const l = e.document.createElement("div");
            l.setAttribute("class", "intercom-lightweight-app-gradient"), i && (c.appendChild(u), c.appendChild(l));
            const p = e.document.createElement("style");
            p.setAttribute("id", "intercom-lightweight-app-style"), p.setAttribute("type", "text/css");
            const f = e.document.createTextNode(uo(t));
            p.appendChild(f), c.appendChild(p);
            return {
                updateLightweightApp: fo(e, t, c, u, l, f),
                removeLightweightApp: bo(e, c)
            }
        },
        Oo = n(242),
        yo = n(243);
    const _o = e => ({
        type: E.Jc,
        isActive: e
    });
    var Co = n(80);

    function So(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function jo(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? So(Object(n), !0).forEach((function(t) {
                wo(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : So(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function wo(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const Eo = Object(h.createStructuredSelector)({
            isAppActive: Oo.a,
            isLauncherEnabled: c.a,
            isMessengerOpen: ro.a,
            customization: io.b,
            accessibility: oo.a,
            colors: so.a,
            launcherLogoUrl: i.n,
            allowSelfServeIcon: i.c,
            locale: yo.a,
            hideLightweightAppMessenger: i.i
        }),
        Io = e => {
            Object(N.e)("clicked", "launcher", "in_app", "", {
                is_messenger_open: !1,
                is_custom_launcher: !1,
                is_borderless_open: !1
            }), e.dispatch(Object(li.l)())
        };
    var Ao = (e, t) => {
            const n = ((e, t) => ({
                    isMobile: Object(o.b)(),
                    onLauncherClick: () => {
                        t.dispatch(Object(Co.b)(!1)), Io(t)
                    },
                    onLauncherKeypress: () => {
                        Io(t)
                    },
                    onClick: () => {
                        t.dispatch(Object(Co.b)(!1))
                    },
                    onTabKeyDown: () => {
                        t.dispatch(Object(Co.b)(!0))
                    }
                }))(0, t),
                r = Eo(t.getState()),
                i = jo(jo({}, r), n),
                {
                    updateLightweightApp: s,
                    removeLightweightApp: a
                } = vo(e, i);
            t.dispatch(_o(!0));
            const c = t.subscribe((() => {
                const e = Eo(t.getState());
                if (e === r) return;
                const i = jo(jo({}, e), n);
                s(i)
            }));
            return () => {
                c(), a(e), t.dispatch(_o(!1))
            }
        },
        To = n(177);
    const Ro = Object(h.createSelector)([e => e.app.isMessengerOpen], (e => e)),
        Po = Object(h.createSelector)([M.a], (e => e.length > 0)),
        Mo = Object(h.createSelector)([D.a], (e => e.length > 0)),
        Do = Object(h.createSelector)([To.a], (e => e.length > 0)),
        ko = Object(h.createSelector)([e => e.install.isInstallModeOpen], (e => e)),
        No = Object(h.createSelector)([e => e.banners], (e => e.length > 0)),
        Uo = Object(h.createSelector)([bi.b], (e => e > 0)),
        Lo = Object(h.createSelector)([e => e.launcherDiscoveryMode.isLauncherDiscoveryModeOpening], (e => e)),
        xo = Object(h.createSelector)([e => e.tour.activeTour], (e => null != e)),
        Bo = Object(h.createSelector)([e => e.survey], (e => !!e));
    var $o = Object(h.createSelector)([Ro, Po, Mo, Do, ko, No, Uo, Lo, xo, Bo], ((e, t, n, r, i, o, s, a, c, u) => Boolean(e || t || n || r || i || o || s || a || c || u)));
    const Fo = e => new Promise((t => {
            const n = e.subscribe((() => {
                $o(e.getState()) && (n(), t())
            }))
        })),
        Vo = async (e = 3) => {
            try {
                const t = Date.now(),
                    r = await no()((async () => await Promise.all([n.e(49), n.e(0)]).then(n.bind(null, 873))), {
                        retries: e
                    }),
                    i = Date.now();
                return Object(N.f)("load_app_bundle_duration", i - t), r.default
            } catch (e) {
                throw Object(N.c)("load_app_bundle_failed"), e
            }
        },
        Ho = async e => {
            try {
                const n = e.getState(),
                    {
                        launcherLogoUrl: r
                    } = n.app;
                if (!r) return;
                await (t = r, new Promise(((e, n) => {
                    const r = new Image;
                    r.addEventListener("load", (() => e(r))), r.addEventListener("error", (() => n(r))), r.src = t
                })))
            } catch (e) {
                Object(N.c)("load_launcher_image_failed")
            }
            var t
        };
    var Go = async (e, t) => {
        await Ho(t);
        const n = Ao(e, t);
        let r, i = !0;
        return Promise.race([new Promise((e => {
            Object(C.a)() && e()
        })), Fo(t)]).then((async () => {
            if (!i) return;
            const [, o] = await Promise.all([(s = 250, new Promise((e => {
                setTimeout(e, s)
            }))), Vo()]);
            var s;
            r = await o(e, t), n()
        })), () => {
            i && (r ? r() : n(), i = !1)
        }
    };
    var qo = class app_App {
        constructor(e) {
            this.destroySession = e => {
                this.session.destroy(e), this.session = new eo(this.window), this.renderApp && this.renderApp.then((e => e())), this.renderApp = void 0
            }, this.window = e, this.session = new eo(this.window, null, this.destroySession)
        }
        createOrUpdateUser(e, t) {
            const n = this.session.createOrUpdateUser(e, t);
            return this.renderApp || (this.renderApp = Go(this.window, this.session.store)), n
        }
        openOnBoot() {
            this.session.openOnBoot()
        }
        createCustomizationOverride(e) {
            return this.session.createCustomizationOverride(e)
        }
        openMessenger() {
            this.session.openMessenger()
        }
        openMessengerFromAPI() {
            this.session.openMessenger();
            const {
                user: e
            } = this.session.store.getState();
            Object(N.h)(e, "opened", "messenger", "in_app", "from_api")
        }
        showArticle(e) {
            this.session.showArticle(e)
        }
        closeMessenger() {
            this.session.closeMessenger()
        }
        closeMessengerFromAPI() {
            this.session.closeMessenger();
            const {
                user: e
            } = this.session.store.getState();
            Object(N.h)(e, "closed", "messenger", "messenger", "from_api")
        }
        showConversations() {
            this.session.showConversations()
        }
        showNewConversation(e) {
            this.session.showNewConversation(e)
        }
        showConversation(e) {
            this.session.showConversation(e)
        }
        startSurvey(e) {
            const t = parseInt(e, 10);
            if (isNaN(t)) return void Object(Un.a)("Invalid surveyId passed to startSurvey. surveyId must be a number");
            this.session.startSurvey(t);
            const {
                user: n
            } = this.session.store.getState();
            Object(N.h)(n, "requested", "messenger", "survey", "from_api", {
                ruleset_id: t
            })
        }
        startTour(e) {
            const t = parseInt(e, 10);
            if (isNaN(t)) return void Object(Un.a)("Invalid tourId passed to startTour. tourId must be a number");
            this.session.startTour(t);
            const {
                user: n
            } = this.session.store.getState();
            Object(N.h)(n, "requested", "messenger", "tour", "from_api", {
                tour_id: t
            })
        }
        createEvent(e, t) {
            this.session.createEvent(e, t)
        }
        onMessengerOpen(e) {
            this.session.onMessengerOpen(e)
        }
        onMessengerClose(e) {
            this.session.onMessengerClose(e)
        }
        onUnreadConversationCountChange(e) {
            this.session.onUnreadConversationCountChange(e)
        }
        getArticleReaction(e, t, n) {
            this.session.getArticleReaction(e, t, n)
        }
        createArticleReaction(e, t, n) {
            this.session.createArticleReaction(e, t, n)
        }
        previewInboundCustomBot(e) {
            this.session.previewInboundCustomBot(e)
        }
        previewOutboundCustomBot(e) {
            this.session.previewOutboundCustomBot(e)
        }
        createMetric(e, t) {
            this.session.createMetric(e, t)
        }
        getVisitorId() {
            return this.session.getVisitorId()
        }
        enterTourPreviewMode(e) {
            return this.session.enterTourPreviewMode(e)
        }
        exitTourPreviewMode() {
            return this.session.exitTourPreviewMode()
        }
        trigger(e) {
            if (this.session.isReady) return this.session.trigger(e);
            Object(Un.a)("Intercom is not ready. Aborting MessengerTrigger request")
        }
    };

    function zo(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Wo(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? zo(Object(n), !0).forEach((function(t) {
                Jo(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : zo(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function Jo(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function Ko(e) {
        return (...t) => {
            const n = {
                    boot(t = {}) {
                        const n = e.session.getSettings();
                        Wo(Wo({}, n), t).disabled || (n.disabled && e.session.setSetting("disabled", !1), e.createCustomizationOverride(t), e.createOrUpdateUser(t, "apiBoot"), e.openOnBoot())
                    },
                    update(t) {
                        e.createCustomizationOverride(t), e.createOrUpdateUser(t, "apiUpdate")
                    },
                    shutdown(t = !0) {
                        e.destroySession(t)
                    },
                    show() {
                        e.openMessengerFromAPI()
                    },
                    showArticle(t) {
                        e.showArticle(t)
                    },
                    showMessages() {
                        e.showConversations()
                    },
                    showNewMessage(t) {
                        e.showNewConversation(t)
                    },
                    startSurvey(t) {
                        e.startSurvey(t)
                    },
                    startTour(t) {
                        e.startTour(t)
                    },
                    hide() {
                        e.closeMessengerFromAPI()
                    },
                    trackEvent(t, n) {
                        e.createEvent(t, n)
                    },
                    onShow(t) {
                        e.onMessengerOpen(t)
                    },
                    onHide(t) {
                        e.onMessengerClose(t)
                    },
                    onUnreadCountChange(t) {
                        e.onUnreadConversationCountChange(t)
                    },
                    trigger(t) {
                        e.trigger(t)
                    },
                    getVisitorId: () => e.getVisitorId(),
                    version() {},
                    "private:getArticleReaction": (t, n, r) => {
                        e.getArticleReaction(t, n, r)
                    },
                    "private:createMetric": (t, n) => {
                        e.createMetric(t, n)
                    },
                    "private:createArticleReaction": (t, n, r) => {
                        e.createArticleReaction(t, n, r)
                    },
                    "private:enterTourPreviewMode": t => {
                        e.enterTourPreviewMode(t)
                    },
                    "private:exitTourPreviewMode": () => {
                        e.exitTourPreviewMode()
                    },
                    "private:previewInboundCustomBot": t => {
                        e.previewInboundCustomBot(t)
                    },
                    "private:previewOutboundCustomBot": t => {
                        e.previewOutboundCustomBot(t)
                    },
                    "private:showConversation": t => {
                        e.showConversation(t)
                    }
                },
                r = t[0];
            if (!r || !n[r]) return;
            return e.session.getSettings().disabled && "boot" !== r ? void 0 : n[r](...t.slice(1))
        }
    }

    function Yo(e, t) {
        t.Intercom = e, t.Intercom.booted = !0
    }

    function Qo(e) {
        const t = function(e) {
            return e.Intercom
        }(e);
        return t && t.q || []
    }

    function Xo(e) {
        return Qo(e).some((e => "boot" === e[0] || "shutdown" === e[0]))
    }

    function Zo(e, t) {
        const n = Qo(t);
        for (; n.length;) e(...n.shift())
    }
    var es = n(78),
        ts = n.n(es);
    const ns = n(166),
        rs = "intercom-snippet__intersection-mode",
        is = "intersection-frame",
        os = "intersection-container";
    var ss = n(14),
        as = n(106),
        cs = n(104),
        us = n(42);
    if (Object(C.a)()) {
        const e = JSON.parse(Object(us.a)(window.location.href).window);
        Object(O.h)(e), Object(cs.a)()
    } else Object(O.h)(window.parent);
    Object(r.a)(window),
        function(e) {
            if (void 0 !== e) try {
                const t = new e.CustomEvent("test", {
                    cancelable: !0
                });
                if (t.preventDefault(), !0 !== t.defaultPrevented) throw new Error("Could not prevent default")
            } catch (t) {
                const n = function(e, t) {
                    (t = t || {}).bubbles = !!t.bubbles, t.cancelable = !!t.cancelable;
                    const n = document.createEvent("CustomEvent");
                    n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail);
                    const r = n.preventDefault;
                    return n.preventDefault = function() {
                        r.call(this);
                        try {
                            Object.defineProperty(this, "defaultPrevented", {
                                get: function() {
                                    return !0
                                }
                            })
                        } catch (e) {
                            this.defaultPrevented = !0
                        }
                    }, n
                };
                n.prototype = e.Event.prototype, e.CustomEvent = n
            }
        }(window), Object(C.a)() || (window.requestAnimationFrame = window.parent.requestAnimationFrame || window.requestAnimationFrame), Object(C.a)();
    const ds = Object(C.a)() ? window : parent;
    Object(rr.a)(window);
    const ls = new qo(ds);
    Object(rr.b)(ls.session.store);
    const ps = Ko(ls),
        fs = Xo(ds);
    Zo(ps, ds), Yo(ps, ds), fs || ps("boot"), new class intersection_Intersection {
        constructor(e) {
            this.intercomDomains = ["http://intercom.test", "http://app.intercom.test", "https://app.intercom.com", "https://app.intercom.io", "https://app.eu.intercom.com", "https://intercomrades.intercom.io", "https://intercomrades.intercom.com", "https://intercomrades.eu.intercom.com"], this.window = e, this.setupIntersection()
        }
        setupIntersection() {
            this.openerExists() && (this.modeExists() ? this.injectIntersection() : (this.setupMessageListener(), this.sendMessageToOpener({
                type: "intercom-snippet__ready"
            })))
        }
        sendMessageToOpener(e) {
            this.window.opener.postMessage(e, "*")
        }
        openerExists() {
            return !!this.window.opener
        }
        modeExists() {
            return !!be.b.get(rs)
        }
        setupMessageListener() {
            this.window.addEventListener("message", this.bootIntersection.bind(this))
        }
        getMode() {
            return be.b.get(rs)
        }
        getAppId() {
            return be.b.get("intercom-snippet__intersection-app-id")
        }
        bootIntersection(e) {
            -1 !== this.intercomDomains.indexOf(e.origin) && "intercom-snippet__boot-intersection" === e.data.type && (this.removeMessageListener(), this.saveOpenerOrigin(e.origin), this.injectIntersection(e.data.mode, e.data.appId))
        }
        removeMessageListener() {
            this.window.removeEventListener("message", this.bootIntersection.bind(this))
        }
        saveOpenerOrigin(e) {
            be.b.set("intercom-snippet__intersection-opener-origin", e)
        }
        injectIntersection(e, t) {
            this.window.document.getElementById(os) || (this.injectIntersectionFrame(), this.injectEmberApp(e, t))
        }
        injectIntersectionFrame() {
            const e = this.window.document.createElement("div"),
                t = this.window.document.createElement("iframe");
            e.id = os, t.id = is, t.frameBorder = 0, e.appendChild(t), this.window.document.body.insertAdjacentElement("beforeend", e)
        }
        createScriptTag(e) {
            const t = document.createElement("script");
            return t.type = "text/javascript", t.charset = "utf-8", t.src = e, t
        }
        injectFrameTemplate(e, t = this.getMode(), n = this.getAppId()) {
            const r = ts()(t),
                i = ts()(n);
            e.open(), e.write(`\n    <!doctype html>\n      <head>\n        <title>Intersection </title>\n        <meta name="intersection-mode" content=${r}>\n        <meta name="intersection-appId" content=${i}>\n      </head>\n      <body></body>\n    </html>\n    `), e.close()
        }
        injectIntersectionScripts(e) {
            const t = this.createScriptTag(ns.intersection_js),
                n = this.createScriptTag(ns.intersection_styles);
            e.contentWindow.document.head.appendChild(t), e.contentWindow.document.head.appendChild(n)
        }
        injectEmberApp(e, t) {
            const n = this.window.document.getElementById(is);
            this.injectFrameTemplate(n.contentDocument, e, t), this.injectIntersectionScripts(n)
        }
    }(ds), Object(C.a)() && (window.addEventListener("message", Object(_.b)({
        "intercom:boot": ({
            settings: e
        }) => {
            ls.createOrUpdateUser(e)
        },
        "intercom:window-resize": ({
            updates: e
        }) => {
            Object(O.i)(e)
        },
        "intercom:api-call": ({
            args: e
        }) => {
            ps(...e)
        },
        "intercom:ready-for-boot": ({
            cookie: e
        }) => {
            Object(as.b)(e), Object(_.i)()
        }
    })), Object(ss.a)("intercom:prepare-for-boot"))
}]);