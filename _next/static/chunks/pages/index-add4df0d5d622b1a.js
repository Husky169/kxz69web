(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[405], {
    7814: function(e, t, a) {
        "use strict";
        a.d(t, {
            G: function() {
                return c
            }
        });
        var s = a(3636)
          , r = a(5697)
          , n = a.n(r)
          , i = a(7294);
        function ownKeys(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                t && (s = s.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                a.push.apply(a, s)
            }
            return a
        }
        function _objectSpread2(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ownKeys(Object(a), !0).forEach(function(t) {
                    _defineProperty(e, t, a[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : ownKeys(Object(a)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                })
            }
            return e
        }
        function _typeof(e) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function _defineProperty(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a,
            e
        }
        function _toConsumableArray(e) {
            return function(e) {
                if (Array.isArray(e))
                    return _arrayLikeToArray(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return _arrayLikeToArray(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === a && e.constructor && (a = e.constructor.name),
                    "Map" === a || "Set" === a)
                        return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                        return _arrayLikeToArray(e, t)
                }
            }(e) || function() {
                throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function _arrayLikeToArray(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var a = 0, s = Array(t); a < t; a++)
                s[a] = e[a];
            return s
        }
        function camelize(e) {
            var t;
            return (t = e - 0) == t ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(e, t) {
                return t ? t.toUpperCase() : ""
            })).substr(0, 1).toLowerCase() + e.substr(1)
        }
        var l = ["style"]
          , o = !1;
        try {
            o = !0
        } catch (e) {}
        function normalizeIconArgs(e) {
            return e && "object" === _typeof(e) && e.prefix && e.iconName && e.icon ? e : s.Qc.icon ? s.Qc.icon(e) : null === e ? null : e && "object" === _typeof(e) && e.prefix && e.iconName ? e : Array.isArray(e) && 2 === e.length ? {
                prefix: e[0],
                iconName: e[1]
            } : "string" == typeof e ? {
                prefix: "fas",
                iconName: e
            } : void 0
        }
        function objectWithKey(e, t) {
            return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? _defineProperty({}, e, t) : {}
        }
        var c = i.forwardRef(function(e, t) {
            var a, r, n, i, l, x, m, p, u, f, h, y, b, j, g, v, N, w, A, O = e.icon, k = e.mask, _ = e.symbol, S = e.className, P = e.title, L = e.titleId, E = e.maskId, C = normalizeIconArgs(O), G = objectWithKey("classes", [].concat(_toConsumableArray((r = e.beat,
            n = e.fade,
            i = e.beatFade,
            l = e.bounce,
            x = e.shake,
            m = e.flash,
            p = e.spin,
            u = e.spinPulse,
            f = e.spinReverse,
            h = e.pulse,
            y = e.fixedWidth,
            b = e.inverse,
            j = e.border,
            g = e.listItem,
            v = e.flip,
            N = e.size,
            w = e.rotation,
            A = e.pull,
            Object.keys((_defineProperty(a = {
                "fa-beat": r,
                "fa-fade": n,
                "fa-beat-fade": i,
                "fa-bounce": l,
                "fa-shake": x,
                "fa-flash": m,
                "fa-spin": p,
                "fa-spin-reverse": f,
                "fa-spin-pulse": u,
                "fa-pulse": h,
                "fa-fw": y,
                "fa-inverse": b,
                "fa-border": j,
                "fa-li": g,
                "fa-flip": !0 === v,
                "fa-flip-horizontal": "horizontal" === v || "both" === v,
                "fa-flip-vertical": "vertical" === v || "both" === v
            }, "fa-".concat(N), null != N),
            _defineProperty(a, "fa-rotate-".concat(w), null != w && 0 !== w),
            _defineProperty(a, "fa-pull-".concat(A), null != A),
            _defineProperty(a, "fa-swap-opacity", e.swapOpacity),
            a)).map(function(e) {
                return a[e] ? e : null
            }).filter(function(e) {
                return e
            }))), _toConsumableArray(S.split(" ")))), T = objectWithKey("transform", "string" == typeof e.transform ? s.Qc.transform(e.transform) : e.transform), F = objectWithKey("mask", normalizeIconArgs(k)), Q = (0,
            s.qv)(C, _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, G), T), F), {}, {
                symbol: _,
                title: P,
                titleId: L,
                maskId: E
            }));
            if (!Q)
                return !function() {
                    if (!o && console && "function" == typeof console.error) {
                        var e;
                        (e = console).error.apply(e, arguments)
                    }
                }("Could not find icon", C),
                null;
            var z = Q.abstract
              , I = {
                ref: t
            };
            return Object.keys(e).forEach(function(t) {
                c.defaultProps.hasOwnProperty(t) || (I[t] = e[t])
            }),
            d(z[0], I)
        });
        c.displayName = "FontAwesomeIcon",
        c.propTypes = {
            beat: n().bool,
            border: n().bool,
            beatFade: n().bool,
            bounce: n().bool,
            className: n().string,
            fade: n().bool,
            flash: n().bool,
            mask: n().oneOfType([n().object, n().array, n().string]),
            maskId: n().string,
            fixedWidth: n().bool,
            inverse: n().bool,
            flip: n().oneOf([!0, !1, "horizontal", "vertical", "both"]),
            icon: n().oneOfType([n().object, n().array, n().string]),
            listItem: n().bool,
            pull: n().oneOf(["right", "left"]),
            pulse: n().bool,
            rotation: n().oneOf([0, 90, 180, 270]),
            shake: n().bool,
            size: n().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
            spin: n().bool,
            spinPulse: n().bool,
            spinReverse: n().bool,
            symbol: n().oneOfType([n().bool, n().string]),
            title: n().string,
            titleId: n().string,
            transform: n().oneOfType([n().string, n().object]),
            swapOpacity: n().bool
        },
        c.defaultProps = {
            border: !1,
            className: "",
            mask: null,
            maskId: null,
            fixedWidth: !1,
            inverse: !1,
            flip: !1,
            icon: null,
            listItem: !1,
            pull: null,
            pulse: !1,
            rotation: null,
            size: null,
            spin: !1,
            spinPulse: !1,
            spinReverse: !1,
            beat: !1,
            fade: !1,
            beatFade: !1,
            bounce: !1,
            shake: !1,
            symbol: !1,
            title: "",
            titleId: null,
            transform: null,
            swapOpacity: !1
        };
        var d = (function convert(e, t) {
            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if ("string" == typeof t)
                return t;
            var s = (t.children || []).map(function(t) {
                return convert(e, t)
            })
              , r = Object.keys(t.attributes || {}).reduce(function(e, a) {
                var s = t.attributes[a];
                switch (a) {
                case "class":
                    e.attrs.className = s,
                    delete t.attributes.class;
                    break;
                case "style":
                    e.attrs.style = s.split(";").map(function(e) {
                        return e.trim()
                    }).filter(function(e) {
                        return e
                    }).reduce(function(e, t) {
                        var a = t.indexOf(":")
                          , s = camelize(t.slice(0, a))
                          , r = t.slice(a + 1).trim();
                        return s.startsWith("webkit") ? e[s.charAt(0).toUpperCase() + s.slice(1)] = r : e[s] = r,
                        e
                    }, {});
                    break;
                default:
                    0 === a.indexOf("aria-") || 0 === a.indexOf("data-") ? e.attrs[a.toLowerCase()] = s : e.attrs[camelize(a)] = s
                }
                return e
            }, {
                attrs: {}
            })
              , n = a.style
              , i = void 0 === n ? {} : n
              , o = function(e, t) {
                if (null == e)
                    return {};
                var a, s, r = function(e, t) {
                    if (null == e)
                        return {};
                    var a, s, r = {}, n = Object.keys(e);
                    for (s = 0; s < n.length; s++)
                        a = n[s],
                        t.indexOf(a) >= 0 || (r[a] = e[a]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    for (s = 0; s < n.length; s++)
                        a = n[s],
                        !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a])
                }
                return r
            }(a, l);
            return r.attrs.style = _objectSpread2(_objectSpread2({}, r.attrs.style), i),
            e.apply(void 0, [t.tag, _objectSpread2(_objectSpread2({}, r.attrs), o)].concat(_toConsumableArray(s)))
        }
        ).bind(null, i.createElement)
    },
    5557: function(e, t, a) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return a(2324)
        }
        ])
    },
    5678: function(e, t) {
        "use strict";
        t.Z = {
            src: "https://kxz-project.netlify.app/_next/logo.png",
            height: 1080,
            width: 1080,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAhFBMVEX////m5fDe3uuop88AADX////a2en+/v7///////////8AAKL+/v7+/v7+/v7////9/f39/f38/P38/P1HQa7+/v4AAKX+/v5kYbX+/v7////+/v7+/v78/P3+/v7+/v4AAKU4MKv///9OSa/9/f1fW7P////////////////+/v79/f6QxtYlAAAAKXRSTlMAAAAAAAEHFSwtLzAzOUFEVVZYXWRxdXd8g4WGiImKkaS5v9LU2eHr7cTDiXoAAABHSURBVHjaFcvFAYAwAAPA4FrcC8Ut7L8f8L+DBdF2UjlAyZvPZiPkmfquaUAy04JpLtAz16t1byB4JfFyeED94wH4uhoj4AXIuQWFWzTILgAAAABJRU5ErkJggg==",
            blurWidth: 8,
            blurHeight: 8
        }
    },
    4801: function(e, t, a) {
        "use strict";
        a.d(t, {
            Z: function() {
                return Footer
            }
        });
        var s = a(5893);
        function Footer() {
            return (0,
            s.jsx)("footer", {
                className: "bg-transparent mt-36",
                children: (0,
                s.jsx)("div", {
                    className: "w-full max-w-screen-xl mx-auto p-4 md:py-8",
                    children: (0,
                    s.jsxs)("span", {
                        className: "block text-center text-sm text-textsecundary  dark:text-textsecundary select-none",
                        children: ["\xa9 2023 - 2024 ", (0,
                        s.jsx)("a", {
                            href: "/",
                            className: "hover:underline",
                            children: "Gengar Scanner™"
                        }), ". All Rights Reserved."]
                    })
                })
            })
        }
    },
    3324: function(e, t, a) {
        "use strict";
        a.d(t, {
            Z: function() {
                return NavBar
            }
        });
        var s = a(5893)
          , r = a(5675)
          , n = a.n(r)
          , i = a(5678);
        function NavBar() {
            return (0,
            s.jsx)("nav", {
                className: "w-full z-20 top-0 left-0 bg-transparent",
                "data-aos": "fade-down",
                "data-aos-duration": "800",
                children: (0,
                s.jsxs)("div", {
                    className: "max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-12",
                    children: [(0,
                    s.jsx)("a", {
                        href: "/",
                        className: "flex items-center",
                        children: (0,
                        s.jsx)(n(), {
                            src: i.Z,
                            className: "w-16 mr-3  select-none",
                            alt: "Logo",
                            priority: !0
                        })
                    }), (0,
                    s.jsxs)("div", {
                        className: "items-center justify-center flex md:w-auto",
                        id: "navbar-sticky",
                        children: [(0,
                        s.jsxs)("ul", {
                            className: " hidden md:flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent transition-all duration-300 ease-in-out",
                            children: [(0,
                            s.jsx)("li", {
                                children: (0,
                                s.jsx)("a", {
                                    href: "/#features",
                                    className: "block relative w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-principal after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left  py-2 pl-3 pr-4 text-textsecundary rounded hover:bg-gray-400 md:hover:bg-transparent md:hover:text-textprimary md:p-0 md:dark:hover:text-textprimary dark:text-textsecundary transition-all duration-300 ease-in-out",
                                    children: "Features"
                                })
                            }), (0,
                            s.jsx)("li", {
                                children: (0,
                                s.jsx)("a", {
                                    href: "/#pricing",
                                    className: "block relative w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-principal after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left  py-2 pl-3 pr-4 text-textsecundary rounded hover:bg-gray-400 md:hover:bg-transparent md:hover:text-textprimary md:p-0 md:dark:hover:text-textprimary dark:text-textsecundary transition-all duration-300 ease-in-out",
                                    children: "Pricing"
                                })
                            }), (0,
                            s.jsx)("li", {
                                children: (0,
                                s.jsx)("a", {
                                    href: "https://discord.gg/ACzumucbyF",
                                    className: "block relative w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-principal after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left  py-2 pl-3 pr-4 text-textsecundary rounded hover:bg-gray-400 md:hover:bg-transparent md:hover:text-textprimary md:p-0 md:dark:hover:text-textprimary dark:text-textsecundary transition-all duration-300 ease-in-out",
                                    children: "Discord"
                                })
                            })]
                        }), (0,
                        s.jsx)("div", {
                            className: "flex  ml-8",
                            children: (0,
                            s.jsx)("a", {
                                href: "/dashboard",
                                type: "button",
                                className: "text-gray-200 bg-principal hover:bg-principalhover outline-none font-medium rounded-xl text-sm px-4 py-3 text-center md:mr-0 transition-colors duration-400 ease-in-out",
                                children: "Dashboard"
                            })
                        })]
                    })]
                })
            })
        }
    },
    2324: function(e, t, a) {
        "use strict";
        a.r(t),
        a.d(t, {
            default: function() {
                return Home
            }
        });
        var s = a(5893)
          , r = a(3324)
          , n = a(5675)
          , i = a.n(n)
          , l = a(9008)
          , o = a.n(l);
        a(7294),
        a(4298);
        var c = a(7814)
          , d = a(9417)
          , x = a(4801);
        a(5678);
        var m = {
            src: "/_next/static/media/undraw_articles_wbpb.725aa909.svg",
            height: 597,
            width: 492,
            blurWidth: 0,
            blurHeight: 0
        };
        function Home() {
            return (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)(o(), {
                    children: (0,
                    s.jsx)("title", {
                        children: "Gengar"
                    })
                }), (0,
                s.jsx)(r.Z, {}), (0,
                s.jsxs)("div", {
                    children: [(0,
                    s.jsxs)("section", {
                        id: "home",
                        className: "relative mt-28  x-10 flex flex-col items-center justify-center",
                        children: [(0,
                        s.jsxs)("p", {
                            className: "text-center text-3xl lg:text-6xl md:text-5xl sm:text-4xl font-semibold leading-normal text-gray-200",
                            "data-aos": "fade-up",
                            "data-aos-duration": "800",
                            children: ["Optimize your ", (0,
                            s.jsx)("span", {
                                className: "text-principal",
                                children: "screenshare"
                            })]
                        }), (0,
                        s.jsx)("p", {
                            className: "text-center text-2xl lg:text-5xl md:text-4xl sm:text-3xl font-semibold leading-normal text-gray-200",
                            "data-aos": "fade-up",
                            "data-aos-duration": "1200",
                            children: "with forensic technology."
                        }), (0,
                        s.jsxs)("div", {
                            className: "my-10",
                            children: [(0,
                            s.jsx)("a", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "2100",
                                href: "/#pricing",
                                type: "button",
                                className: "text-gray-200 bg-principal hover:bg-principalhover outline-none font-medium rounded-xl text-sm px-4 py-3 text-center md:mr-0 transition-colors duration-400 ease-in-out",
                                children: "View Products"
                            }), (0,
                            s.jsxs)("a", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "2400",
                                href: "/login",
                                type: "button",
                                className: "ml-4 text-principal bg-background outline-none font-semibold rounded-xl text-sm px-4 py-3 text-center md:mr-0 transition-colors duration-400 ease-in-out",
                                children: ["Getting Started ", (0,
                                s.jsx)(c.G, {
                                    icon: d.I4f,
                                    className: "flutuardireita ml-1"
                                })]
                            })]
                        }), (0,
                        s.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 1440 320",
                            children: (0,
                            s.jsx)("path", {
                                fill: "#0c0b0d",
                                fillOpacity: "1",
                                d: "M0,32L60,42.7C120,53,240,75,360,112C480,149,600,203,720,197.3C840,192,960,128,1080,117.3C1200,107,1320,149,1380,170.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                            })
                        })]
                    }), (0,
                    s.jsx)("svg", {
                        "data-aos": "fade",
                        "data-aos-duration": "800",
                        id: "1",
                        viewBox: "0 0 480 480",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "absolute hidden md:flex md:-left-24 md:top-56 flutuar-svg",
                        children: (0,
                        s.jsx)("path", {
                            fill: "#4b46af",
                            d: "M407,328Q341,416,233.5,426.5Q126,437,108.5,338.5Q91,240,130.5,179.5Q170,119,247.5,106Q325,93,399,166.5Q473,240,407,328Z"
                        })
                    }), (0,
                    s.jsx)("svg", {
                        "data-aos": "fade",
                        "data-aos-duration": "1200",
                        id: "2",
                        viewBox: "0 0 480 480",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "absolute hidden md:flex md:-left-24 md:top-56 flutuar-svg-bg",
                        children: (0,
                        s.jsx)("path", {
                            fill: "#4b46af20",
                            d: "M407,328Q341,416,233.5,426.5Q126,437,108.5,338.5Q91,240,130.5,179.5Q170,119,247.5,106Q325,93,399,166.5Q473,240,407,328Z"
                        })
                    }), (0,
                    s.jsx)("svg", {
                        "data-aos": "fade",
                        "data-aos-duration": "800",
                        id: "3",
                        viewBox: "0 0 480 480",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "absolute hidden md:flex md:right-2 md:top-96 flutuar-svg",
                        children: (0,
                        s.jsx)("path", {
                            fill: "#4b46af",
                            d: "M382.5,304.5Q314,369,246,358.5Q178,348,111.5,294Q45,240,111.5,186.5Q178,133,268.5,83Q359,33,405,136.5Q451,240,382.5,304.5Z"
                        })
                    }), (0,
                    s.jsx)("svg", {
                        "data-aos": "fade-left",
                        "data-aos-duration": "1200",
                        id: "4",
                        viewBox: "0 0 480 480",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "absolute hidden md:flex md:right-2 md:top-96 flutuar-svg-bg",
                        children: (0,
                        s.jsx)("path", {
                            fill: "#4b46af20",
                            d: "M382.5,304.5Q314,369,246,358.5Q178,348,111.5,294Q45,240,111.5,186.5Q178,133,268.5,83Q359,33,405,136.5Q451,240,382.5,304.5Z"
                        })
                    }), (0,
                    s.jsxs)("section", {
                        id: "features",
                        className: " flex flex-col items-center justify-center bg-[#0c0b0d] min-w-full min-h-[860px]",
                        children: [(0,
                        s.jsx)("p", {
                            className: "antialiased text-center text-lg font-normal text-textsecundary mt-16",
                            "data-aos": "fade-up",
                            "data-aos-duration": "600",
                            children: "What do we offer you?"
                        }), (0,
                        s.jsx)("h1", {
                            className: "antialiased text-center text-4xl font-semibold text-gray-200 mt-2",
                            "data-aos": "fade-up",
                            "data-aos-duration": "1200",
                            children: "Features"
                        }), (0,
                        s.jsxs)("div", {
                            className: "mt-36 flex flex-wrap justify-center gap-2",
                            children: [(0,
                            s.jsxs)("div", {
                                className: "bg-child m-2 max-w-[400px] rounded-xl shadow-lg p-6  flex flex-col text-start items-start",
                                "data-aos": "fade-up",
                                "data-aos-duration": "1200",
                                children: [(0,
                                s.jsx)("div", {
                                    className: "text-2xl flex justify-center items-center w-[60px] h-[60px] bg-principal rounded-xl",
                                    children: (0,
                                    s.jsx)(c.G, {
                                        icon: d.uKh
                                    })
                                }), (0,
                                s.jsx)("p", {
                                    className: "text-textprimary mt-2 text-xl font-semibold",
                                    children: "Advanced"
                                }), (0,
                                s.jsx)("p", {
                                    className: "text-textsecundary text-sm font-medium",
                                    children: "The scanner contains information for those who are already experienced in the area of screenshare."
                                })]
                            }), (0,
                            s.jsxs)("div", {
                                className: "bg-child m-2 max-w-[400px] rounded-xl shadow-lg p-6  flex flex-col text-start items-start",
                                "data-aos": "fade-up",
                                "data-aos-duration": "1200",
                                children: [(0,
                                s.jsx)("div", {
                                    className: "text-2xl flex justify-center items-center w-[60px] h-[60px] bg-principal rounded-xl",
                                    children: (0,
                                    s.jsx)(c.G, {
                                        icon: d.XKl
                                    })
                                }), (0,
                                s.jsx)("p", {
                                    className: "text-textprimary mt-2 text-xl font-semibold",
                                    children: "Support"
                                }), (0,
                                s.jsx)("p", {
                                    className: "text-textsecundary text-sm font-medium",
                                    children: "Our platform is always ready to meet your needs. We provide 24/7 support to ensure you're never stuck."
                                })]
                            }), (0,
                            s.jsxs)("div", {
                                className: "bg-child m-2 max-w-[400px] rounded-xl shadow-lg p-6  flex flex-col text-start items-start",
                                "data-aos": "fade-up",
                                "data-aos-duration": "1200",
                                children: [(0,
                                s.jsx)("div", {
                                    className: "text-2xl flex justify-center items-center w-[60px] h-[60px] bg-principal rounded-xl",
                                    children: (0,
                                    s.jsx)(c.G, {
                                        icon: d.TTX
                                    })
                                }), (0,
                                s.jsx)("p", {
                                    className: "text-textprimary mt-2 text-xl font-semibold",
                                    children: "Experience"
                                }), (0,
                                s.jsx)("p", {
                                    className: "text-textsecundary text-sm font-medium",
                                    children: "Gengar team has extensive experience in the ScreenShare scene, providing the best possible scanning software for FiveM."
                                })]
                            }), (0,
                            s.jsxs)("div", {
                                className: "bg-child m-2 max-w-[400px] rounded-xl shadow-lg p-6  flex flex-col text-start items-start",
                                "data-aos": "fade-up",
                                "data-aos-duration": "1200",
                                children: [(0,
                                s.jsx)("div", {
                                    className: "text-2xl flex justify-center items-center w-[60px] h-[60px] bg-principal rounded-xl",
                                    children: (0,
                                    s.jsx)(c.G, {
                                        icon: d.u34
                                    })
                                }), (0,
                                s.jsx)("p", {
                                    className: "text-textprimary mt-2 text-xl font-semibold",
                                    children: "Detections"
                                }), (0,
                                s.jsx)("p", {
                                    className: "text-textsecundary text-sm font-medium",
                                    children: "Gengar has a fully intelligent file detection algorithm to detect any type of cheat!"
                                })]
                            }), (0,
                            s.jsxs)("div", {
                                className: "bg-child m-2 max-w-[400px] rounded-xl shadow-lg p-6  flex flex-col text-start items-start",
                                "data-aos": "fade-up",
                                "data-aos-duration": "1200",
                                children: [(0,
                                s.jsx)("div", {
                                    className: "text-2xl flex justify-center items-center w-[60px] h-[60px] bg-principal rounded-xl",
                                    children: (0,
                                    s.jsx)(c.G, {
                                        icon: d.isG
                                    })
                                }), (0,
                                s.jsx)("p", {
                                    className: "text-textprimary mt-2 text-xl font-semibold",
                                    children: "Protection"
                                }), (0,
                                s.jsx)("p", {
                                    className: "text-textsecundary text-sm font-medium",
                                    children: "We have a protection system that keeps the tool as safe as possible."
                                })]
                            }), (0,
                            s.jsxs)("div", {
                                className: "bg-child m-2 max-w-[400px] rounded-xl shadow-lg p-6  flex flex-col text-start items-start",
                                "data-aos": "fade-up",
                                "data-aos-duration": "1200",
                                children: [(0,
                                s.jsx)("div", {
                                    className: "text-2xl flex justify-center items-center w-[60px] h-[60px] bg-principal rounded-xl",
                                    children: (0,
                                    s.jsx)(c.G, {
                                        icon: d.Ljc
                                    })
                                }), (0,
                                s.jsx)("p", {
                                    className: "text-textprimary mt-2 text-xl font-semibold",
                                    children: "Easy of Use"
                                }), (0,
                                s.jsx)("p", {
                                    className: "text-textsecundary text-sm font-medium",
                                    children: "The scanner is quick and easy to use, with a focus on simplicity."
                                })]
                            })]
                        })]
                    }), (0,
                    s.jsx)("div", {
                        "data-aos": "fade",
                        className: "absolute hidden md:flex left-0 top-0 bg-principal rounded-full w-24 h-24 transform -translate-x-1/2 -translate-y-1/2 blur-[100px] z-[0]"
                    }), (0,
                    s.jsx)("div", {
                        "data-aos": "fade",
                        className: "absolute hidden md:flex right-0 top-3/4 bg-principal rounded-full w-24 h-24 transform -translate-x-1/2 -translate-y-1/2 blur-[100px] z-[0]"
                    }), (0,
                    s.jsxs)("section", {
                        id: "reference",
                        className: " flex flex-col items-center justify-center bg-[#0c0b0d] min-w-full",
                        children: [(0,
                        s.jsx)("p", {
                            className: "antialiased text-center text-lg font-normal text-textsecundary mt-24",
                            "data-aos": "fade-up",
                            "data-aos-duration": "600",
                            children: "What changes?"
                        }), (0,
                        s.jsx)("h1", {
                            className: "antialiased text-center text-4xl font-semibold text-gray-200 mt-2",
                            "data-aos": "fade-up",
                            "data-aos-duration": "1200",
                            children: "Why use Gengar?"
                        }), (0,
                        s.jsxs)("div", {
                            className: "mt-12 gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6",
                            "data-aos": "fade",
                            "data-aos-duration": "2400",
                            children: [(0,
                            s.jsx)(i(), {
                                className: "hidden dark:block ml-auto mr-8",
                                src: m,
                                width: 320,
                                height: 320,
                                alt: "articles image"
                            }), (0,
                            s.jsxs)("div", {
                                className: "mt-4 md:mt-0 mr-auto",
                                children: [(0,
                                s.jsxs)("div", {
                                    className: "flex text-start items-center p-2",
                                    children: [(0,
                                    s.jsx)("div", {
                                        className: "w-[40px] h-[40px] bg-quarta text-principal rounded-full flex items-center justify-center",
                                        children: (0,
                                        s.jsx)("p", {
                                            children: "1."
                                        })
                                    }), (0,
                                    s.jsx)("p", {
                                        className: "text-textsecundary  text-sm font-medium mx-2",
                                        children: "Can improve your screenshare duration."
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: "flex text-start items-center p-2",
                                    children: [(0,
                                    s.jsx)("div", {
                                        className: "w-[40px] h-[40px] bg-quarta text-principal rounded-full flex items-center justify-center",
                                        children: (0,
                                        s.jsx)("p", {
                                            children: "2."
                                        })
                                    }), (0,
                                    s.jsx)("p", {
                                        className: "text-textsecundary  text-sm font-medium mx-2",
                                        children: "Performs private checks to detect any type of bypass attempt."
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: "flex text-start items-center p-2",
                                    children: [(0,
                                    s.jsx)("div", {
                                        className: "w-[40px] h-[40px] bg-quarta text-principal rounded-full flex items-center justify-center",
                                        children: (0,
                                        s.jsx)("p", {
                                            children: "3."
                                        })
                                    }), (0,
                                    s.jsx)("p", {
                                        className: "text-textsecundary  text-sm font-medium mx-2",
                                        children: "Our team is always open to new suggestions."
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: "flex text-start items-center p-2",
                                    children: [(0,
                                    s.jsx)("div", {
                                        className: "w-[40px] h-[40px] bg-quarta text-principal rounded-full flex items-center justify-center",
                                        children: (0,
                                        s.jsx)("p", {
                                            children: "4."
                                        })
                                    }), (0,
                                    s.jsx)("p", {
                                        className: "text-textsecundary  text-sm font-medium mx-2",
                                        children: "Constant updates to keep things running smoothly."
                                    })]
                                })]
                            })]
                        })]
                    }), (0,
                    s.jsxs)("section", {
                        id: "pricing",
                        className: " flex flex-col items-center justify-center bg-[#0c0b0d] min-w-full min-h-[900px]",
                        children: [(0,
                        s.jsx)("p", {
                            className: "antialiased text-center text-lg font-normal text-textsecundary mt-36",
                            "data-aos": "fade-up",
                            "data-aos-duration": "600",
                            children: "What is the price for our services?"
                        }), (0,
                        s.jsx)("h1", {
                            className: "antialiased text-center text-4xl font-semibold text-gray-200 mt-2",
                            "data-aos": "fade-up",
                            "data-aos-duration": "1200",
                            children: "Pricing"
                        }), (0,
                        s.jsxs)("div", {
                            className: "flex flex-wrap justify-center mt-20 gap-2 sm:gap-8 mb-12",
                            children: [(0,
                            s.jsxs)("div", {
                                className: "mt-10 mx-1 w-[340px] flex flex-col bg-child shadow-lg text-left rounded-2xl p-6 transition duration-200 ease-linear",
                                "data-aos": "fade-up",
                                "data-aos-duration": "1400",
                                children: [(0,
                                s.jsxs)("div", {
                                    className: "flex",
                                    children: [(0,
                                    s.jsx)("div", {
                                        className: "w-[52px] h-[52px] flex justify-center items-center bg-principal rounded-xl",
                                        children: (0,
                                        s.jsx)(c.G, {
                                            icon: d.BC0,
                                            className: "text-2xl text-white"
                                        })
                                    }), (0,
                                    s.jsxs)("div", {
                                        className: "flex flex-col",
                                        children: [(0,
                                        s.jsx)("p", {
                                            className: "ml-4 text-lg font-semibold  text-textprimary",
                                            children: "Monthly"
                                        }), (0,
                                        s.jsx)("p", {
                                            className: "ml-4 font-medium text-sm text-textsecundary",
                                            children: "Worth a try."
                                        })]
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: "mt-4 flex text-sm items-center",
                                    children: [(0,
                                    s.jsx)(c.G, {
                                        icon: d.LEp,
                                        className: " text-principal"
                                    }), (0,
                                    s.jsx)("p", {
                                        className: "ml-2 text-sm font-medium text-textsecundary",
                                        children: "All Detections."
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: "mt-1 flex text-sm items-center",
                                    children: [(0,
                                    s.jsx)(c.G, {
                                        icon: d.LEp,
                                        className: " text-principal"
                                    }), (0,
                                    s.jsx)("p", {
                                        className: "ml-2 text-sm font-medium text-textsecundary",
                                        children: "24/7 Support."
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: "mt-1 flex text-sm items-center",
                                    children: [(0,
                                    s.jsx)(c.G, {
                                        icon: d.LEp,
                                        className: " text-principal"
                                    }), (0,
                                    s.jsx)("p", {
                                        className: "ml-2 text-sm font-medium text-textsecundary",
                                        children: "Custom Role in Discord"
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: "mt-1 flex text-sm items-center",
                                    children: [(0,
                                    s.jsx)(c.G, {
                                        icon: d.LEp,
                                        className: " text-principal"
                                    }), (0,
                                    s.jsxs)("p", {
                                        className: "ml-2 text-sm font-medium text-textsecundary",
                                        children: ["License with ", (0,
                                        s.jsx)("span", {
                                            className: "text-textprimary",
                                            children: "1 month"
                                        }), " of duration"]
                                    })]
                                }), (0,
                                s.jsxs)("span", {
                                    className: "mt-4 text-left font-bold text-xl text-white",
                                    children: ["59,99R$ ", (0,
                                    s.jsx)("span", {
                                        className: "text-sm font-medium text-zinc-500",
                                        children: "/month"
                                    })]
                                }), (0,
                                s.jsx)("a", {
                                    href: "https://discord.gg/ACzumucbyF",
                                    type: "button",
                                    className: "mt-2 text-gray-200 bg-principal hover:bg-principalhover outline-none font-medium rounded-xl text-sm px-3 py-2 text-center md:mr-0 transition-colors duration-400 ease-in-out",
                                    children: "Purchase"
                                })]
                            }), (0,
                            s.jsxs)("div", {
                                className: "mt-10 mx-1 w-[340px] flex flex-col bg-child shadow-lg text-left rounded-2xl p-6 transition duration-200 ease-linear",
                                "data-aos": "fade-up",
                                "data-aos-duration": "1400",
                                children: [(0,
                                s.jsxs)("div", {
                                    className: "flex",
                                    children: [(0,
                                    s.jsx)("div", {
                                        className: "w-[52px] h-[52px] flex justify-center items-center bg-principal rounded-xl",
                                        children: (0,
                                        s.jsx)(c.G, {
                                            icon: d.r$M,
                                            className: "text-2xl text-white"
                                        })
                                    }), (0,
                                    s.jsxs)("div", {
                                        className: "flex flex-col",
                                        children: [(0,
                                        s.jsx)("p", {
                                            className: "ml-4 text-lg font-semibold  text-textprimary",
                                            children: "Extended"
                                        }), (0,
                                        s.jsx)("p", {
                                            className: "ml-4 font-medium text-sm text-textsecundary",
                                            children: "Do you need a little more time?"
                                        })]
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: "mt-4 flex text-sm items-center",
                                    children: [(0,
                                    s.jsx)(c.G, {
                                        icon: d.LEp,
                                        className: " text-principal"
                                    }), (0,
                                    s.jsx)("p", {
                                        className: "ml-2 text-sm font-medium text-textsecundary",
                                        children: "All Detections."
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: "mt-1 flex text-sm items-center",
                                    children: [(0,
                                    s.jsx)(c.G, {
                                        icon: d.LEp,
                                        className: " text-principal"
                                    }), (0,
                                    s.jsx)("p", {
                                        className: "ml-2 text-sm font-medium text-textsecundary",
                                        children: "24/7 Support."
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: "mt-1 flex text-sm items-center",
                                    children: [(0,
                                    s.jsx)(c.G, {
                                        icon: d.LEp,
                                        className: " text-principal"
                                    }), (0,
                                    s.jsx)("p", {
                                        className: "ml-2 text-sm font-medium text-textsecundary",
                                        children: "Custom Role in Discord"
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: "mt-1 flex text-sm items-center",
                                    children: [(0,
                                    s.jsx)(c.G, {
                                        icon: d.LEp,
                                        className: " text-principal"
                                    }), (0,
                                    s.jsxs)("p", {
                                        className: "ml-2 text-sm font-medium text-textsecundary",
                                        children: ["License with ", (0,
                                        s.jsx)("span", {
                                            className: "text-textprimary",
                                            children: "3 months"
                                        }), " of duration"]
                                    })]
                                }), (0,
                                s.jsxs)("span", {
                                    className: "mt-4 text-left font-bold text-xl text-white",
                                    children: ["99,99R$ ", (0,
                                    s.jsx)("span", {
                                        className: "text-sm font-medium text-zinc-500",
                                        children: "/three-month"
                                    })]
                                }), (0,
                                s.jsx)("a", {
                                    href: "https://discord.gg/ACzumucbyF",
                                    type: "button",
                                    className: "mt-2 text-gray-200 bg-principal hover:bg-principalhover outline-none font-medium rounded-xl text-sm px-3 py-2 text-center md:mr-0 transition-colors duration-400 ease-in-out",
                                    children: "Purchase"
                                })]
                            }), (0,
                            s.jsxs)("div", {
                                className: "mt-10 mx-1 w-[340px] flex flex-col bg-child shadow-lg text-left rounded-2xl p-6 transition duration-200 ease-linear",
                                "data-aos": "fade-up",
                                "data-aos-duration": "1400",
                                children: [(0,
                                s.jsxs)("div", {
                                    className: "flex",
                                    children: [(0,
                                    s.jsx)("div", {
                                        className: "w-[52px] h-[52px] flex justify-center items-center bg-principal rounded-xl",
                                        children: (0,
                                        s.jsx)(c.G, {
                                            icon: d.Tab,
                                            className: "text-2xl text-white"
                                        })
                                    }), (0,
                                    s.jsxs)("div", {
                                        className: "flex flex-col",
                                        children: [(0,
                                        s.jsx)("p", {
                                            className: "ml-4 text-lg font-semibold  text-textprimary",
                                            children: "Yearly"
                                        }), (0,
                                        s.jsx)("p", {
                                            className: "ml-4 font-medium text-sm text-textsecundary",
                                            children: "Together until the end!"
                                        })]
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: "mt-4 flex text-sm items-center",
                                    children: [(0,
                                    s.jsx)(c.G, {
                                        icon: d.LEp,
                                        className: " text-principal"
                                    }), (0,
                                    s.jsx)("p", {
                                        className: "ml-2 text-sm font-medium text-textsecundary",
                                        children: "All Detections."
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: "mt-1 flex text-sm items-center",
                                    children: [(0,
                                    s.jsx)(c.G, {
                                        icon: d.LEp,
                                        className: " text-principal"
                                    }), (0,
                                    s.jsx)("p", {
                                        className: "ml-2 text-sm font-medium text-textsecundary",
                                        children: "24/7 Support."
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: "mt-1 flex text-sm items-center",
                                    children: [(0,
                                    s.jsx)(c.G, {
                                        icon: d.LEp,
                                        className: " text-principal"
                                    }), (0,
                                    s.jsx)("p", {
                                        className: "ml-2 text-sm font-medium text-textsecundary",
                                        children: "Custom Role in Discord"
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: "mt-1 flex text-sm items-center",
                                    children: [(0,
                                    s.jsx)(c.G, {
                                        icon: d.LEp,
                                        className: " text-principal"
                                    }), (0,
                                    s.jsxs)("p", {
                                        className: "ml-2 text-sm font-medium text-textsecundary",
                                        children: ["License with ", (0,
                                        s.jsx)("span", {
                                            className: "text-textprimary",
                                            children: "1 year"
                                        }), " of duration"]
                                    })]
                                }), (0,
                                s.jsxs)("span", {
                                    className: "mt-4 text-left font-bold text-xl text-white",
                                    children: ["199,99R$ ", (0,
                                    s.jsx)("span", {
                                        className: "text-sm font-medium text-zinc-500",
                                        children: "/year"
                                    })]
                                }), (0,
                                s.jsx)("a", {
                                    href: "https://discord.gg/ACzumucbyF",
                                    type: "button",
                                    className: "mt-2 text-gray-200 bg-principal hover:bg-principalhover outline-none font-medium rounded-xl text-sm px-3 py-2 text-center md:mr-0 transition-colors duration-400 ease-in-out",
                                    children: "Purchase"
                                })]
                            })]
                        }), (0,
                        s.jsx)(x.Z, {})]
                    })]
                })]
            })
        }
    },
    4298: function(e, t, a) {
        a(5354)
    },
    2703: function(e, t, a) {
        "use strict";
        var s = a(414);
        function emptyFunction() {}
        function emptyFunctionWithReset() {}
        emptyFunctionWithReset.resetWarningCache = emptyFunction,
        e.exports = function() {
            function shim(e, t, a, r, n, i) {
                if (i !== s) {
                    var l = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw l.name = "Invariant Violation",
                    l
                }
            }
            function getShim() {
                return shim
            }
            shim.isRequired = shim;
            var e = {
                array: shim,
                bigint: shim,
                bool: shim,
                func: shim,
                number: shim,
                object: shim,
                string: shim,
                symbol: shim,
                any: shim,
                arrayOf: getShim,
                element: shim,
                elementType: shim,
                instanceOf: getShim,
                node: shim,
                objectOf: getShim,
                oneOf: getShim,
                oneOfType: getShim,
                shape: getShim,
                exact: getShim,
                checkPropTypes: emptyFunctionWithReset,
                resetWarningCache: emptyFunction
            };
            return e.PropTypes = e,
            e
        }
    },
    5697: function(e, t, a) {
        e.exports = a(2703)()
    },
    414: function(e) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    }
}, function(e) {
    e.O(0, [976, 675, 774, 888, 179], function() {
        return e(e.s = 5557)
    }),
    _N_E = e.O()
}
]);
