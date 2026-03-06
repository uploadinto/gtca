!function() {
    function e(t, n, o) {
        function i(a, c) {
            if (!n[a]) {
                if (!t[a]) {
                    var s = "function" == typeof require && require;
                    if (!c && s)
                        return s(a, !0);
                    if (r)
                        return r(a, !0);
                    var u = new Error("Cannot find module '" + a + "'");
                    throw u.code = "MODULE_NOT_FOUND",
                    u
                }
                var l = n[a] = {
                    exports: {}
                };
                t[a][0].call(l.exports, function(e) {
                    return i(t[a][1][e] || e)
                }, l, l.exports, e, t, n, o)
            }
            return n[a].exports
        }
        for (var r = "function" == typeof require && require, a = 0; a < o.length; a++)
            i(o[a]);
        return i
    }
    return e
}()({
    1: [function(e, t, n) {
        "use strict";
        function o() {
            var e = Math.abs(window.orientation);
            90 == e || 270 == e ? ((0,
            c.$)("#aviso-rotacao").style.display = "block",
            (0,
            c.$)("#tela").style.display = "none") : ((0,
            c.$)("#aviso-rotacao").style.display = "",
            (0,
            c.$)("#tela").style.display = "")
        }
        function i() {
            function e() {
                pbjs.initAdserverSet || (pbjs.initAdserverSet = !0,
                googletag.cmd.push(function() {
                    pbjs.que.push(function() {
                        pbjs.setTargetingForGPTAsync(),
                        googletag.pubads().refresh()
                    })
                }))
            }
            function t() {
                i && clearInterval(i),
                i = setInterval(function() {
                    pbjs.que.push(function() {
                        pbjs.requestBids({
                            bidsBackHandler: function() {
                                pbjs.setTargetingForGPTAsync(),
                                googletag.pubads().refresh()
                            },
                            timeout: n
                        })
                    })
                }, 9e4)
            }
            var n = 2e3
              , o = [{
                code: "/245385116/Gartic_PWA",
                mediaTypes: {
                    banner: {
                        sizes: [320, 50]
                    }
                },
                bids: [{
                    bidder: "appnexus",
                    params: {
                        placementId: 13728724
                    }
                }, {
                    bidder: "criteo",
                    params: {
                        networkId: 1521907
                    }
                }]
            }];
            googletag.cmd.push(function() {
                googletag.pubads().disableInitialLoad()
            }),
            pbjs.que.push(function() {
                pbjs.setConfig({
                    priceGranularity: "dense"
                }),
                pbjs.addAdUnits(o),
                pbjs.requestBids({
                    bidsBackHandler: e
                })
            });
            var i = !1;
            setTimeout(function() {
                e(),
                t()
            }, n),
            document.addEventListener("visibilitychange", function() {
                document.hidden ? (i && clearInterval(i),
                i = !1) : i || t()
            }, !1),
            googletag.cmd.push(function() {
                u = googletag.defineOutOfPageSlot("/245385116/teste", googletag.enums.OutOfPageFormat.INTERSTITIAL),
                u && u.addService(googletag.pubads()),
                googletag.defineSlot("/245385116/Gartic_PWA", [320, 50], "div-gpt-ad-1533918100755-0").addService(googletag.pubads()),
                googletag.pubads().enableSingleRequest(),
                googletag.enableServices()
            }),
            googletag.cmd.push(function() {
                googletag.display("div-gpt-ad-1533918100755-0")
            })
        }
        var r = e("fastclick")
          , a = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(r)
          , c = e("./includes/util.js")
          , s = location.pathname
          , u = void 0;
        window.PLATAFORMA = 4,
        window.ENDERECO = "https://gartic.com.br/",
        window.addEventListener("DOMContentLoaded", o, !1),
        window.addEventListener("orientationchange", o, !1),
        window.addEventListener("load", function() {
            "serviceWorker"in navigator && navigator.serviceWorker.register("service-worker.js").then(function(e) {
                e.onupdatefound = function() {
                    var t = e.installing;
                    t.onstatechange = function() {
                        switch (t.state) {
                        case "installed":
                            navigator.serviceWorker.controller ? console.log("New or updated content is available.") : console.log("Content is now available offline!");
                            break;
                        case "redundant":
                            console.error("The installing service worker became redundant.")
                        }
                    }
                }
            }).catch(function(e) {
                console.error("Error during service worker registration:", e)
            }),
            /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && (0,
            a.default)(document.body);
            var e = "";
            -1 != s.search(/^\/0[0-9]+$/) ? window.handleOpenURL("https://gartic.com.br" + s) : -1 != ["contato", "opcoes", "tiposSala", "regras", "privacidade", "seguranca", "ranking", "escolherSala"].indexOf(s.replace("/", "")) && (e = s.replace("/", "")),
            window.carregar(function() {
                e && tela.abrir(e)
            }),
            i(),
            window.tela.on("preload", function(e, t) {
                "jogo" == e && u && googletag.cmd.push(function() {
                    googletag.display(u)
                })
            })
        }, !1),
        window.fbAsyncInit = function() {
            FB.init({
                appId: "1224974710879255",
                cookie: !0,
                xfbml: !0,
                version: "v2.8"
            })
        }
    }
    , {
        "./includes/util.js": 2,
        fastclick: 3
    }],
    2: [function(e, t, n) {
        "use strict";
        "user strict";
        function o(e, t) {
            return (t || document).querySelector(e)
        }
        function i(e, t) {
            return (t || document).querySelectorAll(e)
        }
        function r(e, t, n, o) {
            var i = void 0
              , r = void 0
              , a = void 0
              , c = void 0;
            n.addEventListener("touchstart", function(e) {
                a = c = performance.now(),
                i = r = {
                    x: e.touches[0].clientX,
                    y: e.touches[0].clientY
                },
                document.addEventListener("touchmove", s, !0),
                document.addEventListener("touchend", u, !0),
                document.addEventListener("touchcancel", l, !0)
            }, !0);
            var s = function(e) {
                c = performance.now(),
                r = {
                    x: e.touches[0].clientX,
                    y: e.touches[0].clientY
                }
            }
              , u = function n(u) {
                document.removeEventListener("touchmove", s, !0),
                document.removeEventListener("touchend", n, !0),
                document.removeEventListener("touchcancel", l, !0);
                var d = Math.round(c - a);
                if (d) {
                    var h = Math.abs(r.x - i.x);
                    if (!(h < Math.abs(r.y - i.y))) {
                        if (!(h / d < .5)) {
                            switch (e) {
                            case "direita":
                                r.x - i.x >= t && o instanceof Function && o(u.target);
                                break;
                            case "esquerda":
                                r.x - i.x <= t && o instanceof Function && o(u.target)
                            }
                            u.stopPropagation(),
                            u.preventDefault()
                        }
                    }
                }
            }
              , l = function e(t) {
                document.removeEventListener("touchmove", s, !0),
                document.removeEventListener("touchend", u, !0),
                document.removeEventListener("touchcancel", e, !0),
                t.stopPropagation(),
                t.preventDefault()
            }
        }
        function a(e, t, n, o) {
            if (e.className = e.className.replace(new RegExp("avt\\d*"), ""),
            t || !n || "~" == n.charAt(0))
                e.style.backgroundImage = "",
                void 0 === t && (t = 0),
                e.classList.add("avt" + t);
            else {
                var i = "";
                n.toLowerCase() == u.nick.toLowerCase() && (i = "_" + u.avatarVersao);
                var r = "https://gartic.com.br/avatar.php?nick=" + n + "&app=1&rand=" + s + i;
                o && (r += "&pendente=1",
                e.parentNode.classList.add("pendente")),
                e.style.backgroundImage = "url(" + r + ")"
            }
        }
        function c(e, t) {
            s = "c" + e,
            u = t
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = 0
          , u = null;
        n.$ = o,
        n._ = i,
        n.swipe = r,
        n.aplicarAvatar = a,
        n.atualizarRand = c
    }
    , {}],
    3: [function(e, t, n) {
        !function() {
            "use strict";
            function e(t, n) {
                var i;
                if (n = n || {},
                this.trackingClick = !1,
                this.trackingClickStart = 0,
                this.targetElement = null,
                this.touchStartX = 0,
                this.touchStartY = 0,
                this.lastTouchIdentifier = 0,
                this.touchBoundary = n.touchBoundary || 10,
                this.layer = t,
                this.tapDelay = n.tapDelay || 200,
                this.tapTimeout = n.tapTimeout || 700,
                !e.notNeeded(t)) {
                    for (var r = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], a = this, c = 0, s = r.length; c < s; c++)
                        a[r[c]] = function(e, t) {
                            return function() {
                                return e.apply(t, arguments)
                            }
                        }(a[r[c]], a);
                    o && (t.addEventListener("mouseover", this.onMouse, !0),
                    t.addEventListener("mousedown", this.onMouse, !0),
                    t.addEventListener("mouseup", this.onMouse, !0)),
                    t.addEventListener("click", this.onClick, !0),
                    t.addEventListener("touchstart", this.onTouchStart, !1),
                    t.addEventListener("touchmove", this.onTouchMove, !1),
                    t.addEventListener("touchend", this.onTouchEnd, !1),
                    t.addEventListener("touchcancel", this.onTouchCancel, !1),
                    Event.prototype.stopImmediatePropagation || (t.removeEventListener = function(e, n, o) {
                        var i = Node.prototype.removeEventListener;
                        "click" === e ? i.call(t, e, n.hijacked || n, o) : i.call(t, e, n, o)
                    }
                    ,
                    t.addEventListener = function(e, n, o) {
                        var i = Node.prototype.addEventListener;
                        "click" === e ? i.call(t, e, n.hijacked || (n.hijacked = function(e) {
                            e.propagationStopped || n(e)
                        }
                        ), o) : i.call(t, e, n, o)
                    }
                    ),
                    "function" == typeof t.onclick && (i = t.onclick,
                    t.addEventListener("click", function(e) {
                        i(e)
                    }, !1),
                    t.onclick = null)
                }
            }
            var n = navigator.userAgent.indexOf("Windows Phone") >= 0
              , o = navigator.userAgent.indexOf("Android") > 0 && !n
              , i = /iP(ad|hone|od)/.test(navigator.userAgent) && !n
              , r = i && /OS 4_\d(_\d)?/.test(navigator.userAgent)
              , a = i && /OS [6-7]_\d/.test(navigator.userAgent)
              , c = navigator.userAgent.indexOf("BB10") > 0;
            e.prototype.needsClick = function(e) {
                switch (e.nodeName.toLowerCase()) {
                case "button":
                case "select":
                case "textarea":
                    if (e.disabled)
                        return !0;
                    break;
                case "input":
                    if (i && "file" === e.type || e.disabled)
                        return !0;
                    break;
                case "label":
                case "iframe":
                case "video":
                    return !0
                }
                return /\bneedsclick\b/.test(e.className)
            }
            ,
            e.prototype.needsFocus = function(e) {
                switch (e.nodeName.toLowerCase()) {
                case "textarea":
                    return !0;
                case "select":
                    return !o;
                case "input":
                    switch (e.type) {
                    case "button":
                    case "checkbox":
                    case "file":
                    case "image":
                    case "radio":
                    case "submit":
                        return !1
                    }
                    return !e.disabled && !e.readOnly;
                default:
                    return /\bneedsfocus\b/.test(e.className)
                }
            }
            ,
            e.prototype.sendClick = function(e, t) {
                var n, o;
                document.activeElement && document.activeElement !== e && document.activeElement.blur(),
                o = t.changedTouches[0],
                n = document.createEvent("MouseEvents"),
                n.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, o.screenX, o.screenY, o.clientX, o.clientY, !1, !1, !1, !1, 0, null),
                n.forwardedTouchEvent = !0,
                e.dispatchEvent(n)
            }
            ,
            e.prototype.determineEventType = function(e) {
                return o && "select" === e.tagName.toLowerCase() ? "mousedown" : "click"
            }
            ,
            e.prototype.focus = function(e) {
                var t;
                i && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type && "month" !== e.type && "email" !== e.type ? (t = e.value.length,
                e.setSelectionRange(t, t)) : e.focus()
            }
            ,
            e.prototype.updateScrollParent = function(e) {
                var t, n;
                if (!(t = e.fastClickScrollParent) || !t.contains(e)) {
                    n = e;
                    do {
                        if (n.scrollHeight > n.offsetHeight) {
                            t = n,
                            e.fastClickScrollParent = n;
                            break
                        }
                        n = n.parentElement
                    } while (n)
                }
                t && (t.fastClickLastScrollTop = t.scrollTop)
            }
            ,
            e.prototype.getTargetElementFromEventTarget = function(e) {
                return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
            }
            ,
            e.prototype.onTouchStart = function(e) {
                var t, n, o;
                if (e.targetTouches.length > 1)
                    return !0;
                if (t = this.getTargetElementFromEventTarget(e.target),
                n = e.targetTouches[0],
                i) {
                    if (o = window.getSelection(),
                    o.rangeCount && !o.isCollapsed)
                        return !0;
                    if (!r) {
                        if (n.identifier && n.identifier === this.lastTouchIdentifier)
                            return e.preventDefault(),
                            !1;
                        this.lastTouchIdentifier = n.identifier,
                        this.updateScrollParent(t)
                    }
                }
                return this.trackingClick = !0,
                this.trackingClickStart = e.timeStamp,
                this.targetElement = t,
                this.touchStartX = n.pageX,
                this.touchStartY = n.pageY,
                e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(),
                !0
            }
            ,
            e.prototype.touchHasMoved = function(e) {
                var t = e.changedTouches[0]
                  , n = this.touchBoundary;
                return Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n
            }
            ,
            e.prototype.onTouchMove = function(e) {
                return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1,
                this.targetElement = null),
                !0)
            }
            ,
            e.prototype.findControl = function(e) {
                return void 0 !== e.control ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
            }
            ,
            e.prototype.onTouchEnd = function(e) {
                var t, n, c, s, u, l = this.targetElement;
                if (!this.trackingClick)
                    return !0;
                if (e.timeStamp - this.lastClickTime < this.tapDelay)
                    return this.cancelNextClick = !0,
                    !0;
                if (e.timeStamp - this.trackingClickStart > this.tapTimeout)
                    return !0;
                if (this.cancelNextClick = !1,
                this.lastClickTime = e.timeStamp,
                n = this.trackingClickStart,
                this.trackingClick = !1,
                this.trackingClickStart = 0,
                a && (u = e.changedTouches[0],
                l = document.elementFromPoint(u.pageX - window.pageXOffset, u.pageY - window.pageYOffset) || l,
                l.fastClickScrollParent = this.targetElement.fastClickScrollParent),
                "label" === (c = l.tagName.toLowerCase())) {
                    if (t = this.findControl(l)) {
                        if (this.focus(l),
                        o)
                            return !1;
                        l = t
                    }
                } else if (this.needsFocus(l))
                    return e.timeStamp - n > 100 || i && window.top !== window && "input" === c ? (this.targetElement = null,
                    !1) : (this.focus(l),
                    this.sendClick(l, e),
                    i && "select" === c || (this.targetElement = null,
                    e.preventDefault()),
                    !1);
                return !(!i || r || !(s = l.fastClickScrollParent) || s.fastClickLastScrollTop === s.scrollTop) || (this.needsClick(l) || (e.preventDefault(),
                this.sendClick(l, e)),
                !1)
            }
            ,
            e.prototype.onTouchCancel = function() {
                this.trackingClick = !1,
                this.targetElement = null
            }
            ,
            e.prototype.onMouse = function(e) {
                return !this.targetElement || (!!e.forwardedTouchEvent || (!e.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0,
                e.stopPropagation(),
                e.preventDefault(),
                !1))))
            }
            ,
            e.prototype.onClick = function(e) {
                var t;
                return this.trackingClick ? (this.targetElement = null,
                this.trackingClick = !1,
                !0) : "submit" === e.target.type && 0 === e.detail || (t = this.onMouse(e),
                t || (this.targetElement = null),
                t)
            }
            ,
            e.prototype.destroy = function() {
                var e = this.layer;
                o && (e.removeEventListener("mouseover", this.onMouse, !0),
                e.removeEventListener("mousedown", this.onMouse, !0),
                e.removeEventListener("mouseup", this.onMouse, !0)),
                e.removeEventListener("click", this.onClick, !0),
                e.removeEventListener("touchstart", this.onTouchStart, !1),
                e.removeEventListener("touchmove", this.onTouchMove, !1),
                e.removeEventListener("touchend", this.onTouchEnd, !1),
                e.removeEventListener("touchcancel", this.onTouchCancel, !1)
            }
            ,
            e.notNeeded = function(e) {
                var t, n, i;
                if (void 0 === window.ontouchstart)
                    return !0;
                if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
                    if (!o)
                        return !0;
                    if (t = document.querySelector("meta[name=viewport]")) {
                        if (-1 !== t.content.indexOf("user-scalable=no"))
                            return !0;
                        if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth)
                            return !0
                    }
                }
                if (c && (i = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),
                i[1] >= 10 && i[2] >= 3 && (t = document.querySelector("meta[name=viewport]")))) {
                    if (-1 !== t.content.indexOf("user-scalable=no"))
                        return !0;
                    if (document.documentElement.scrollWidth <= window.outerWidth)
                        return !0
                }
                return "none" === e.style.msTouchAction || "manipulation" === e.style.touchAction || (!!(+(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1] >= 27 && (t = document.querySelector("meta[name=viewport]")) && (-1 !== t.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) || ("none" === e.style.touchAction || "manipulation" === e.style.touchAction))
            }
            ,
            e.attach = function(t, n) {
                return new e(t,n)
            }
            ,
            "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
                return e
            }) : void 0 !== t && t.exports ? (t.exports = e.attach,
            t.exports.FastClick = e) : window.FastClick = e
        }()
    }
    , {}]
}, {}, [1]);
