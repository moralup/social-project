try {
    (() => {
        var o = __REACT__,
            {
                Children: Ae,
                Component: Re,
                Fragment: Ce,
                Profiler: Vr,
                PureComponent: $r,
                StrictMode: Yr,
                Suspense: Jr,
                __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: qr,
                cloneElement: Xr,
                createContext: K,
                createElement: Zr,
                createFactory: Kr,
                createRef: Qr,
                forwardRef: en,
                isValidElement: tn,
                lazy: rn,
                memo: k,
                startTransition: nn,
                unstable_act: an,
                useCallback: N,
                useContext: Q,
                useDebugValue: on,
                useDeferredValue: sn,
                useEffect: ln,
                useId: un,
                useImperativeHandle: cn,
                useInsertionEffect: pn,
                useLayoutEffect: we,
                useMemo: xe,
                useReducer: fn,
                useRef: dn,
                useState: G,
                useSyncExternalStore: mn,
                useTransition: bn,
                version: gn,
            } = __REACT__;
        var Tn = __STORYBOOK_API__,
            {
                ActiveTabs: vn,
                Consumer: _n,
                ManagerContext: Sn,
                Provider: An,
                addons: ee,
                combineParameters: Rn,
                controlOrMetaKey: Cn,
                controlOrMetaSymbol: wn,
                eventMatchesShortcut: xn,
                eventToShortcut: Nn,
                isMacLike: Ln,
                isShortcutTaken: In,
                keyToSymbol: Dn,
                merge: Mn,
                mockChannel: Pn,
                optionOrAltSymbol: Bn,
                shortcutMatchesShortcut: Fn,
                shortcutToHumanString: zn,
                types: Ne,
                useAddonState: Le,
                useArgTypes: Hn,
                useArgs: jn,
                useChannel: Ie,
                useGlobalTypes: Un,
                useGlobals: kn,
                useParameter: Gn,
                useSharedState: Wn,
                useStoryPrepared: Vn,
                useStorybookApi: $n,
                useStorybookState: Yn,
            } = __STORYBOOK_API__;
        var Kn = __STORYBOOK_CORE_EVENTS__,
            {
                CHANNEL_CREATED: Qn,
                CHANNEL_WS_DISCONNECT: ea,
                CONFIG_ERROR: ta,
                CURRENT_STORY_WAS_SET: ra,
                DOCS_PREPARED: na,
                DOCS_RENDERED: aa,
                FORCE_REMOUNT: oa,
                FORCE_RE_RENDER: ia,
                GLOBALS_UPDATED: sa,
                NAVIGATE_URL: la,
                PLAY_FUNCTION_THREW_EXCEPTION: ua,
                PRELOAD_ENTRIES: ca,
                PREVIEW_BUILDER_PROGRESS: pa,
                PREVIEW_KEYDOWN: fa,
                REGISTER_SUBSCRIPTION: da,
                REQUEST_WHATS_NEW_DATA: ma,
                RESET_STORY_ARGS: ba,
                RESULT_WHATS_NEW_DATA: ga,
                SELECT_STORY: ha,
                SET_CONFIG: Ea,
                SET_CURRENT_STORY: ya,
                SET_GLOBALS: Oa,
                SET_INDEX: Ta,
                SET_STORIES: va,
                SET_WHATS_NEW_CACHE: _a,
                SHARED_STATE_CHANGED: Sa,
                SHARED_STATE_SET: Aa,
                STORIES_COLLAPSE_ALL: Ra,
                STORIES_EXPAND_ALL: Ca,
                STORY_ARGS_UPDATED: wa,
                STORY_CHANGED: W,
                STORY_ERRORED: xa,
                STORY_INDEX_INVALIDATED: Na,
                STORY_MISSING: La,
                STORY_PREPARED: Ia,
                STORY_RENDERED: Da,
                STORY_RENDER_PHASE_CHANGED: Ma,
                STORY_SPECIFIED: Pa,
                STORY_THREW_EXCEPTION: Ba,
                STORY_UNCHANGED: Fa,
                TELEMETRY_ERROR: za,
                TOGGLE_WHATS_NEW_NOTIFICATIONS: Ha,
                UNHANDLED_ERRORS_WHILE_PLAYING: ja,
                UPDATE_GLOBALS: Ua,
                UPDATE_QUERY_PARAMS: ka,
                UPDATE_STORY_ARGS: Ga,
            } = __STORYBOOK_CORE_EVENTS__;
        var Ja = __STORYBOOK_COMPONENTS__,
            {
                A: qa,
                ActionBar: De,
                AddonPanel: Xa,
                Badge: Me,
                Bar: Za,
                Blockquote: Ka,
                Button: Qa,
                ClipboardCode: eo,
                Code: to,
                DL: ro,
                Div: no,
                DocumentWrapper: ao,
                EmptyTabContent: oo,
                ErrorFormatter: io,
                FlexBar: so,
                Form: lo,
                H1: uo,
                H2: co,
                H3: po,
                H4: fo,
                H5: mo,
                H6: bo,
                HR: go,
                IconButton: ho,
                IconButtonSkeleton: Eo,
                Icons: yo,
                Img: Oo,
                LI: To,
                Link: vo,
                ListItem: _o,
                Loader: So,
                OL: Ao,
                P: Ro,
                Placeholder: Co,
                Pre: wo,
                ResetWrapper: xo,
                ScrollArea: Pe,
                Separator: No,
                Spaced: Be,
                Span: Lo,
                StorybookIcon: Io,
                StorybookLogo: Do,
                Symbols: Mo,
                SyntaxHighlighter: Po,
                TT: Bo,
                TabBar: Fo,
                TabButton: zo,
                TabWrapper: Ho,
                Table: jo,
                Tabs: Uo,
                TabsState: ko,
                TooltipLinkList: Go,
                TooltipMessage: Wo,
                TooltipNote: Vo,
                UL: $o,
                WithTooltip: Yo,
                WithTooltipPure: Jo,
                Zoom: qo,
                codeCommon: Xo,
                components: Zo,
                createCopyToClipboardFunction: Ko,
                getStoryHref: Qo,
                icons: ei,
                interleaveSeparators: ti,
                nameSpaceClassNames: ri,
                resetComponents: ni,
                withReset: ai,
            } = __STORYBOOK_COMPONENTS__;
        var Fe = Object.prototype.hasOwnProperty;
        function ze(e, t, r) {
            for (r of e.keys()) if (L(r, t)) return r;
        }
        function L(e, t) {
            var r, n, a;
            if (e === t) return !0;
            if (e && t && (r = e.constructor) === t.constructor) {
                if (r === Date) return e.getTime() === t.getTime();
                if (r === RegExp) return e.toString() === t.toString();
                if (r === Array) {
                    if ((n = e.length) === t.length) for (; n-- && L(e[n], t[n]); );
                    return n === -1;
                }
                if (r === Set) {
                    if (e.size !== t.size) return !1;
                    for (n of e)
                        if (((a = n), (a && typeof a == 'object' && ((a = ze(t, a)), !a)) || !t.has(a))) return !1;
                    return !0;
                }
                if (r === Map) {
                    if (e.size !== t.size) return !1;
                    for (n of e)
                        if (((a = n[0]), (a && typeof a == 'object' && ((a = ze(t, a)), !a)) || !L(n[1], t.get(a))))
                            return !1;
                    return !0;
                }
                if (r === ArrayBuffer) (e = new Uint8Array(e)), (t = new Uint8Array(t));
                else if (r === DataView) {
                    if ((n = e.byteLength) === t.byteLength) for (; n-- && e.getInt8(n) === t.getInt8(n); );
                    return n === -1;
                }
                if (ArrayBuffer.isView(e)) {
                    if ((n = e.byteLength) === t.byteLength) for (; n-- && e[n] === t[n]; );
                    return n === -1;
                }
                if (!r || typeof e == 'object') {
                    n = 0;
                    for (r in e) if ((Fe.call(e, r) && ++n && !Fe.call(t, r)) || !(r in t) || !L(e[r], t[r])) return !1;
                    return Object.keys(t).length === n;
                }
            }
            return e !== e && t !== t;
        }
        var di = __STORYBOOK_THEMING__,
            {
                CacheProvider: mi,
                ClassNames: bi,
                Global: gi,
                ThemeProvider: hi,
                background: Ei,
                color: yi,
                convert: Oi,
                create: Ti,
                createCache: vi,
                createGlobal: _i,
                createReset: Si,
                css: Ai,
                darken: Ri,
                ensure: Ci,
                ignoreSsrWarning: wi,
                isPropValid: xi,
                jsx: Ni,
                keyframes: Li,
                lighten: Ii,
                styled: B,
                themes: Di,
                typography: Mi,
                useTheme: Pi,
                withTheme: He,
            } = __STORYBOOK_THEMING__;
        function O() {
            return (
                (O = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var r = arguments[t];
                              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                          }
                          return e;
                      }),
                O.apply(this, arguments)
            );
        }
        function te(e) {
            if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
        }
        function A(e, t) {
            return (
                (A = Object.setPrototypeOf
                    ? Object.setPrototypeOf.bind()
                    : function (n, a) {
                          return (n.__proto__ = a), n;
                      }),
                A(e, t)
            );
        }
        function re(e, t) {
            (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), A(e, t);
        }
        function F(e) {
            return (
                (F = Object.setPrototypeOf
                    ? Object.getPrototypeOf.bind()
                    : function (r) {
                          return r.__proto__ || Object.getPrototypeOf(r);
                      }),
                F(e)
            );
        }
        function ne(e) {
            try {
                return Function.toString.call(e).indexOf('[native code]') !== -1;
            } catch {
                return typeof e == 'function';
            }
        }
        function V() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
            } catch {}
            return (V = function () {
                return !!e;
            })();
        }
        function ae(e, t, r) {
            if (V()) return Reflect.construct.apply(null, arguments);
            var n = [null];
            n.push.apply(n, t);
            var a = new (e.bind.apply(e, n))();
            return r && A(a, r.prototype), a;
        }
        function z(e) {
            var t = typeof Map == 'function' ? new Map() : void 0;
            return (
                (z = function (n) {
                    if (n === null || !ne(n)) return n;
                    if (typeof n != 'function')
                        throw new TypeError('Super expression must either be null or a function');
                    if (typeof t < 'u') {
                        if (t.has(n)) return t.get(n);
                        t.set(n, a);
                    }
                    function a() {
                        return ae(n, arguments, F(this).constructor);
                    }
                    return (
                        (a.prototype = Object.create(n.prototype, {
                            constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
                        })),
                        A(a, n)
                    );
                }),
                z(e)
            );
        }
        var v = (function (e) {
            re(t, e);
            function t(r) {
                var n;
                if (1)
                    n =
                        e.call(
                            this,
                            'An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#' +
                                r +
                                ' for more information.',
                        ) || this;
                else for (var a, i, s; s < a; s++);
                return te(n);
            }
            return t;
        })(z(Error));
        function je(e, t) {
            return e.substr(-t.length) === t;
        }
        var st = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
        function Ue(e) {
            if (typeof e != 'string') return e;
            var t = e.match(st);
            return t ? parseFloat(e) : e;
        }
        var lt = function (t) {
                return function (r, n) {
                    n === void 0 && (n = '16px');
                    var a = r,
                        i = n;
                    if (typeof r == 'string') {
                        if (!je(r, 'px')) throw new v(69, t, r);
                        a = Ue(r);
                    }
                    if (typeof n == 'string') {
                        if (!je(n, 'px')) throw new v(70, t, n);
                        i = Ue(n);
                    }
                    if (typeof a == 'string') throw new v(71, r, t);
                    if (typeof i == 'string') throw new v(72, n, t);
                    return '' + a / i + t;
                };
            },
            Ge = lt,
            Hs = Ge('em');
        var js = Ge('rem');
        function oe(e) {
            return Math.round(e * 255);
        }
        function ut(e, t, r) {
            return oe(e) + ',' + oe(t) + ',' + oe(r);
        }
        function H(e, t, r, n) {
            if ((n === void 0 && (n = ut), t === 0)) return n(r, r, r);
            var a = (((e % 360) + 360) % 360) / 60,
                i = (1 - Math.abs(2 * r - 1)) * t,
                s = i * (1 - Math.abs((a % 2) - 1)),
                l = 0,
                u = 0,
                c = 0;
            a >= 0 && a < 1
                ? ((l = i), (u = s))
                : a >= 1 && a < 2
                ? ((l = s), (u = i))
                : a >= 2 && a < 3
                ? ((u = i), (c = s))
                : a >= 3 && a < 4
                ? ((u = s), (c = i))
                : a >= 4 && a < 5
                ? ((l = s), (c = i))
                : a >= 5 && a < 6 && ((l = i), (c = s));
            var p = r - i / 2,
                d = l + p,
                f = u + p,
                E = c + p;
            return n(d, f, E);
        }
        var ke = {
            aliceblue: 'f0f8ff',
            antiquewhite: 'faebd7',
            aqua: '00ffff',
            aquamarine: '7fffd4',
            azure: 'f0ffff',
            beige: 'f5f5dc',
            bisque: 'ffe4c4',
            black: '000',
            blanchedalmond: 'ffebcd',
            blue: '0000ff',
            blueviolet: '8a2be2',
            brown: 'a52a2a',
            burlywood: 'deb887',
            cadetblue: '5f9ea0',
            chartreuse: '7fff00',
            chocolate: 'd2691e',
            coral: 'ff7f50',
            cornflowerblue: '6495ed',
            cornsilk: 'fff8dc',
            crimson: 'dc143c',
            cyan: '00ffff',
            darkblue: '00008b',
            darkcyan: '008b8b',
            darkgoldenrod: 'b8860b',
            darkgray: 'a9a9a9',
            darkgreen: '006400',
            darkgrey: 'a9a9a9',
            darkkhaki: 'bdb76b',
            darkmagenta: '8b008b',
            darkolivegreen: '556b2f',
            darkorange: 'ff8c00',
            darkorchid: '9932cc',
            darkred: '8b0000',
            darksalmon: 'e9967a',
            darkseagreen: '8fbc8f',
            darkslateblue: '483d8b',
            darkslategray: '2f4f4f',
            darkslategrey: '2f4f4f',
            darkturquoise: '00ced1',
            darkviolet: '9400d3',
            deeppink: 'ff1493',
            deepskyblue: '00bfff',
            dimgray: '696969',
            dimgrey: '696969',
            dodgerblue: '1e90ff',
            firebrick: 'b22222',
            floralwhite: 'fffaf0',
            forestgreen: '228b22',
            fuchsia: 'ff00ff',
            gainsboro: 'dcdcdc',
            ghostwhite: 'f8f8ff',
            gold: 'ffd700',
            goldenrod: 'daa520',
            gray: '808080',
            green: '008000',
            greenyellow: 'adff2f',
            grey: '808080',
            honeydew: 'f0fff0',
            hotpink: 'ff69b4',
            indianred: 'cd5c5c',
            indigo: '4b0082',
            ivory: 'fffff0',
            khaki: 'f0e68c',
            lavender: 'e6e6fa',
            lavenderblush: 'fff0f5',
            lawngreen: '7cfc00',
            lemonchiffon: 'fffacd',
            lightblue: 'add8e6',
            lightcoral: 'f08080',
            lightcyan: 'e0ffff',
            lightgoldenrodyellow: 'fafad2',
            lightgray: 'd3d3d3',
            lightgreen: '90ee90',
            lightgrey: 'd3d3d3',
            lightpink: 'ffb6c1',
            lightsalmon: 'ffa07a',
            lightseagreen: '20b2aa',
            lightskyblue: '87cefa',
            lightslategray: '789',
            lightslategrey: '789',
            lightsteelblue: 'b0c4de',
            lightyellow: 'ffffe0',
            lime: '0f0',
            limegreen: '32cd32',
            linen: 'faf0e6',
            magenta: 'f0f',
            maroon: '800000',
            mediumaquamarine: '66cdaa',
            mediumblue: '0000cd',
            mediumorchid: 'ba55d3',
            mediumpurple: '9370db',
            mediumseagreen: '3cb371',
            mediumslateblue: '7b68ee',
            mediumspringgreen: '00fa9a',
            mediumturquoise: '48d1cc',
            mediumvioletred: 'c71585',
            midnightblue: '191970',
            mintcream: 'f5fffa',
            mistyrose: 'ffe4e1',
            moccasin: 'ffe4b5',
            navajowhite: 'ffdead',
            navy: '000080',
            oldlace: 'fdf5e6',
            olive: '808000',
            olivedrab: '6b8e23',
            orange: 'ffa500',
            orangered: 'ff4500',
            orchid: 'da70d6',
            palegoldenrod: 'eee8aa',
            palegreen: '98fb98',
            paleturquoise: 'afeeee',
            palevioletred: 'db7093',
            papayawhip: 'ffefd5',
            peachpuff: 'ffdab9',
            peru: 'cd853f',
            pink: 'ffc0cb',
            plum: 'dda0dd',
            powderblue: 'b0e0e6',
            purple: '800080',
            rebeccapurple: '639',
            red: 'f00',
            rosybrown: 'bc8f8f',
            royalblue: '4169e1',
            saddlebrown: '8b4513',
            salmon: 'fa8072',
            sandybrown: 'f4a460',
            seagreen: '2e8b57',
            seashell: 'fff5ee',
            sienna: 'a0522d',
            silver: 'c0c0c0',
            skyblue: '87ceeb',
            slateblue: '6a5acd',
            slategray: '708090',
            slategrey: '708090',
            snow: 'fffafa',
            springgreen: '00ff7f',
            steelblue: '4682b4',
            tan: 'd2b48c',
            teal: '008080',
            thistle: 'd8bfd8',
            tomato: 'ff6347',
            turquoise: '40e0d0',
            violet: 'ee82ee',
            wheat: 'f5deb3',
            white: 'fff',
            whitesmoke: 'f5f5f5',
            yellow: 'ff0',
            yellowgreen: '9acd32',
        };
        function ct(e) {
            if (typeof e != 'string') return e;
            var t = e.toLowerCase();
            return ke[t] ? '#' + ke[t] : e;
        }
        var pt = /^#[a-fA-F0-9]{6}$/,
            ft = /^#[a-fA-F0-9]{8}$/,
            dt = /^#[a-fA-F0-9]{3}$/,
            mt = /^#[a-fA-F0-9]{4}$/,
            ie = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
            bt =
                /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
            gt =
                /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
            ht =
                /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
        function I(e) {
            if (typeof e != 'string') throw new v(3);
            var t = ct(e);
            if (t.match(pt))
                return {
                    red: parseInt('' + t[1] + t[2], 16),
                    green: parseInt('' + t[3] + t[4], 16),
                    blue: parseInt('' + t[5] + t[6], 16),
                };
            if (t.match(ft)) {
                var r = parseFloat((parseInt('' + t[7] + t[8], 16) / 255).toFixed(2));
                return {
                    red: parseInt('' + t[1] + t[2], 16),
                    green: parseInt('' + t[3] + t[4], 16),
                    blue: parseInt('' + t[5] + t[6], 16),
                    alpha: r,
                };
            }
            if (t.match(dt))
                return {
                    red: parseInt('' + t[1] + t[1], 16),
                    green: parseInt('' + t[2] + t[2], 16),
                    blue: parseInt('' + t[3] + t[3], 16),
                };
            if (t.match(mt)) {
                var n = parseFloat((parseInt('' + t[4] + t[4], 16) / 255).toFixed(2));
                return {
                    red: parseInt('' + t[1] + t[1], 16),
                    green: parseInt('' + t[2] + t[2], 16),
                    blue: parseInt('' + t[3] + t[3], 16),
                    alpha: n,
                };
            }
            var a = ie.exec(t);
            if (a)
                return { red: parseInt('' + a[1], 10), green: parseInt('' + a[2], 10), blue: parseInt('' + a[3], 10) };
            var i = bt.exec(t.substring(0, 50));
            if (i)
                return {
                    red: parseInt('' + i[1], 10),
                    green: parseInt('' + i[2], 10),
                    blue: parseInt('' + i[3], 10),
                    alpha: parseFloat('' + i[4]) > 1 ? parseFloat('' + i[4]) / 100 : parseFloat('' + i[4]),
                };
            var s = gt.exec(t);
            if (s) {
                var l = parseInt('' + s[1], 10),
                    u = parseInt('' + s[2], 10) / 100,
                    c = parseInt('' + s[3], 10) / 100,
                    p = 'rgb(' + H(l, u, c) + ')',
                    d = ie.exec(p);
                if (!d) throw new v(4, t, p);
                return { red: parseInt('' + d[1], 10), green: parseInt('' + d[2], 10), blue: parseInt('' + d[3], 10) };
            }
            var f = ht.exec(t.substring(0, 50));
            if (f) {
                var E = parseInt('' + f[1], 10),
                    m = parseInt('' + f[2], 10) / 100,
                    y = parseInt('' + f[3], 10) / 100,
                    T = 'rgb(' + H(E, m, y) + ')',
                    x = ie.exec(T);
                if (!x) throw new v(4, t, T);
                return {
                    red: parseInt('' + x[1], 10),
                    green: parseInt('' + x[2], 10),
                    blue: parseInt('' + x[3], 10),
                    alpha: parseFloat('' + f[4]) > 1 ? parseFloat('' + f[4]) / 100 : parseFloat('' + f[4]),
                };
            }
            throw new v(5);
        }
        function Et(e) {
            var t = e.red / 255,
                r = e.green / 255,
                n = e.blue / 255,
                a = Math.max(t, r, n),
                i = Math.min(t, r, n),
                s = (a + i) / 2;
            if (a === i)
                return e.alpha !== void 0
                    ? { hue: 0, saturation: 0, lightness: s, alpha: e.alpha }
                    : { hue: 0, saturation: 0, lightness: s };
            var l,
                u = a - i,
                c = s > 0.5 ? u / (2 - a - i) : u / (a + i);
            switch (a) {
                case t:
                    l = (r - n) / u + (r < n ? 6 : 0);
                    break;
                case r:
                    l = (n - t) / u + 2;
                    break;
                default:
                    l = (t - r) / u + 4;
                    break;
            }
            return (
                (l *= 60),
                e.alpha !== void 0
                    ? { hue: l, saturation: c, lightness: s, alpha: e.alpha }
                    : { hue: l, saturation: c, lightness: s }
            );
        }
        function R(e) {
            return Et(I(e));
        }
        var yt = function (t) {
                return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6] ? '#' + t[1] + t[3] + t[5] : t;
            },
            le = yt;
        function w(e) {
            var t = e.toString(16);
            return t.length === 1 ? '0' + t : t;
        }
        function se(e) {
            return w(Math.round(e * 255));
        }
        function Ot(e, t, r) {
            return le('#' + se(e) + se(t) + se(r));
        }
        function $(e, t, r) {
            return H(e, t, r, Ot);
        }
        function Tt(e, t, r) {
            if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number') return $(e, t, r);
            if (typeof e == 'object' && t === void 0 && r === void 0) return $(e.hue, e.saturation, e.lightness);
            throw new v(1);
        }
        function vt(e, t, r, n) {
            if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number' && typeof n == 'number')
                return n >= 1 ? $(e, t, r) : 'rgba(' + H(e, t, r) + ',' + n + ')';
            if (typeof e == 'object' && t === void 0 && r === void 0 && n === void 0)
                return e.alpha >= 1
                    ? $(e.hue, e.saturation, e.lightness)
                    : 'rgba(' + H(e.hue, e.saturation, e.lightness) + ',' + e.alpha + ')';
            throw new v(2);
        }
        function ue(e, t, r) {
            if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number')
                return le('#' + w(e) + w(t) + w(r));
            if (typeof e == 'object' && t === void 0 && r === void 0)
                return le('#' + w(e.red) + w(e.green) + w(e.blue));
            throw new v(6);
        }
        function Y(e, t, r, n) {
            if (typeof e == 'string' && typeof t == 'number') {
                var a = I(e);
                return 'rgba(' + a.red + ',' + a.green + ',' + a.blue + ',' + t + ')';
            } else {
                if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number' && typeof n == 'number')
                    return n >= 1 ? ue(e, t, r) : 'rgba(' + e + ',' + t + ',' + r + ',' + n + ')';
                if (typeof e == 'object' && t === void 0 && r === void 0 && n === void 0)
                    return e.alpha >= 1
                        ? ue(e.red, e.green, e.blue)
                        : 'rgba(' + e.red + ',' + e.green + ',' + e.blue + ',' + e.alpha + ')';
            }
            throw new v(7);
        }
        var _t = function (t) {
                return (
                    typeof t.red == 'number' &&
                    typeof t.green == 'number' &&
                    typeof t.blue == 'number' &&
                    (typeof t.alpha != 'number' || typeof t.alpha > 'u')
                );
            },
            St = function (t) {
                return (
                    typeof t.red == 'number' &&
                    typeof t.green == 'number' &&
                    typeof t.blue == 'number' &&
                    typeof t.alpha == 'number'
                );
            },
            At = function (t) {
                return (
                    typeof t.hue == 'number' &&
                    typeof t.saturation == 'number' &&
                    typeof t.lightness == 'number' &&
                    (typeof t.alpha != 'number' || typeof t.alpha > 'u')
                );
            },
            Rt = function (t) {
                return (
                    typeof t.hue == 'number' &&
                    typeof t.saturation == 'number' &&
                    typeof t.lightness == 'number' &&
                    typeof t.alpha == 'number'
                );
            };
        function C(e) {
            if (typeof e != 'object') throw new v(8);
            if (St(e)) return Y(e);
            if (_t(e)) return ue(e);
            if (Rt(e)) return vt(e);
            if (At(e)) return Tt(e);
            throw new v(8);
        }
        function We(e, t, r) {
            return function () {
                var a = r.concat(Array.prototype.slice.call(arguments));
                return a.length >= t ? e.apply(this, a) : We(e, t, a);
            };
        }
        function _(e) {
            return We(e, e.length, []);
        }
        function Ct(e, t) {
            if (t === 'transparent') return t;
            var r = R(t);
            return C(O({}, r, { hue: r.hue + parseFloat(e) }));
        }
        var Us = _(Ct);
        function D(e, t, r) {
            return Math.max(e, Math.min(t, r));
        }
        function wt(e, t) {
            if (t === 'transparent') return t;
            var r = R(t);
            return C(O({}, r, { lightness: D(0, 1, r.lightness - parseFloat(e)) }));
        }
        var ks = _(wt);
        function xt(e, t) {
            if (t === 'transparent') return t;
            var r = R(t);
            return C(O({}, r, { saturation: D(0, 1, r.saturation - parseFloat(e)) }));
        }
        var Gs = _(xt);
        function Nt(e, t) {
            if (t === 'transparent') return t;
            var r = R(t);
            return C(O({}, r, { lightness: D(0, 1, r.lightness + parseFloat(e)) }));
        }
        var Ws = _(Nt);
        function Lt(e, t, r) {
            if (t === 'transparent') return r;
            if (r === 'transparent') return t;
            if (e === 0) return r;
            var n = I(t),
                a = O({}, n, { alpha: typeof n.alpha == 'number' ? n.alpha : 1 }),
                i = I(r),
                s = O({}, i, { alpha: typeof i.alpha == 'number' ? i.alpha : 1 }),
                l = a.alpha - s.alpha,
                u = parseFloat(e) * 2 - 1,
                c = u * l === -1 ? u : u + l,
                p = 1 + u * l,
                d = (c / p + 1) / 2,
                f = 1 - d,
                E = {
                    red: Math.floor(a.red * d + s.red * f),
                    green: Math.floor(a.green * d + s.green * f),
                    blue: Math.floor(a.blue * d + s.blue * f),
                    alpha: a.alpha * parseFloat(e) + s.alpha * (1 - parseFloat(e)),
                };
            return Y(E);
        }
        var It = _(Lt),
            Ve = It;
        function Dt(e, t) {
            if (t === 'transparent') return t;
            var r = I(t),
                n = typeof r.alpha == 'number' ? r.alpha : 1,
                a = O({}, r, { alpha: D(0, 1, (n * 100 + parseFloat(e) * 100) / 100) });
            return Y(a);
        }
        var Mt = _(Dt),
            $e = Mt;
        function Pt(e, t) {
            if (t === 'transparent') return t;
            var r = R(t);
            return C(O({}, r, { saturation: D(0, 1, r.saturation + parseFloat(e)) }));
        }
        var Vs = _(Pt);
        function Bt(e, t) {
            return t === 'transparent' ? t : C(O({}, R(t), { hue: parseFloat(e) }));
        }
        var $s = _(Bt);
        function Ft(e, t) {
            return t === 'transparent' ? t : C(O({}, R(t), { lightness: parseFloat(e) }));
        }
        var Ys = _(Ft);
        function zt(e, t) {
            return t === 'transparent' ? t : C(O({}, R(t), { saturation: parseFloat(e) }));
        }
        var Js = _(zt);
        function Ht(e, t) {
            return t === 'transparent' ? t : Ve(parseFloat(e), 'rgb(0, 0, 0)', t);
        }
        var qs = _(Ht);
        function jt(e, t) {
            return t === 'transparent' ? t : Ve(parseFloat(e), 'rgb(255, 255, 255)', t);
        }
        var Xs = _(jt);
        function Ut(e, t) {
            if (t === 'transparent') return t;
            var r = I(t),
                n = typeof r.alpha == 'number' ? r.alpha : 1,
                a = O({}, r, { alpha: D(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100) });
            return Y(a);
        }
        var Zs = _(Ut);
        var kt = Object.create,
            be = Object.defineProperty,
            Gt = Object.getOwnPropertyDescriptor,
            Ze = Object.getOwnPropertyNames,
            Wt = Object.getPrototypeOf,
            Vt = Object.prototype.hasOwnProperty,
            ge = (e, t) =>
                function () {
                    return t || (0, e[Ze(e)[0]])((t = { exports: {} }).exports, t), t.exports;
                },
            $t = (e, t) => {
                for (var r in t) be(e, r, { get: t[r], enumerable: !0 });
            },
            Yt = (e, t, r, n) => {
                if ((t && typeof t == 'object') || typeof t == 'function')
                    for (let a of Ze(t))
                        !Vt.call(e, a) &&
                            a !== r &&
                            be(e, a, { get: () => t[a], enumerable: !(n = Gt(t, a)) || n.enumerable });
                return e;
            },
            Jt = (e, t, r) => (
                (r = e != null ? kt(Wt(e)) : {}),
                Yt(t || !e || !e.__esModule ? be(r, 'default', { value: e, enumerable: !0 }) : r, e)
            ),
            qt = ge({
                'node_modules/is-object/index.js'(e, t) {
                    t.exports = function (r) {
                        return typeof r == 'object' && r !== null;
                    };
                },
            }),
            Xt = ge({
                'node_modules/is-window/index.js'(e, t) {
                    t.exports = function (r) {
                        if (r == null) return !1;
                        var n = Object(r);
                        return n === n.window;
                    };
                },
            }),
            Zt = ge({
                'node_modules/is-dom/index.js'(e, t) {
                    var r = qt(),
                        n = Xt();
                    function a(i) {
                        return !r(i) || !n(window) || typeof window.Node != 'function'
                            ? !1
                            : typeof i.nodeType == 'number' && typeof i.nodeName == 'string';
                    }
                    t.exports = a;
                },
            }),
            X = {};
        $t(X, { chromeDark: () => Kt, chromeLight: () => Qt });
        var Kt = {
                BASE_FONT_FAMILY: 'Menlo, monospace',
                BASE_FONT_SIZE: '11px',
                BASE_LINE_HEIGHT: 1.2,
                BASE_BACKGROUND_COLOR: 'rgb(36, 36, 36)',
                BASE_COLOR: 'rgb(213, 213, 213)',
                OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
                OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
                OBJECT_NAME_COLOR: 'rgb(227, 110, 236)',
                OBJECT_VALUE_NULL_COLOR: 'rgb(127, 127, 127)',
                OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(127, 127, 127)',
                OBJECT_VALUE_REGEXP_COLOR: 'rgb(233, 63, 59)',
                OBJECT_VALUE_STRING_COLOR: 'rgb(233, 63, 59)',
                OBJECT_VALUE_SYMBOL_COLOR: 'rgb(233, 63, 59)',
                OBJECT_VALUE_NUMBER_COLOR: 'hsl(252, 100%, 75%)',
                OBJECT_VALUE_BOOLEAN_COLOR: 'hsl(252, 100%, 75%)',
                OBJECT_VALUE_FUNCTION_PREFIX_COLOR: 'rgb(85, 106, 242)',
                HTML_TAG_COLOR: 'rgb(93, 176, 215)',
                HTML_TAGNAME_COLOR: 'rgb(93, 176, 215)',
                HTML_TAGNAME_TEXT_TRANSFORM: 'lowercase',
                HTML_ATTRIBUTE_NAME_COLOR: 'rgb(155, 187, 220)',
                HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(242, 151, 102)',
                HTML_COMMENT_COLOR: 'rgb(137, 137, 137)',
                HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)',
                ARROW_COLOR: 'rgb(145, 145, 145)',
                ARROW_MARGIN_RIGHT: 3,
                ARROW_FONT_SIZE: 12,
                ARROW_ANIMATION_DURATION: '0',
                TREENODE_FONT_FAMILY: 'Menlo, monospace',
                TREENODE_FONT_SIZE: '11px',
                TREENODE_LINE_HEIGHT: 1.2,
                TREENODE_PADDING_LEFT: 12,
                TABLE_BORDER_COLOR: 'rgb(85, 85, 85)',
                TABLE_TH_BACKGROUND_COLOR: 'rgb(44, 44, 44)',
                TABLE_TH_HOVER_COLOR: 'rgb(48, 48, 48)',
                TABLE_SORT_ICON_COLOR: 'black',
                TABLE_DATA_BACKGROUND_IMAGE:
                    'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))',
                TABLE_DATA_BACKGROUND_SIZE: '128px 32px',
            },
            Qt = {
                BASE_FONT_FAMILY: 'Menlo, monospace',
                BASE_FONT_SIZE: '11px',
                BASE_LINE_HEIGHT: 1.2,
                BASE_BACKGROUND_COLOR: 'white',
                BASE_COLOR: 'black',
                OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
                OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
                OBJECT_NAME_COLOR: 'rgb(136, 19, 145)',
                OBJECT_VALUE_NULL_COLOR: 'rgb(128, 128, 128)',
                OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(128, 128, 128)',
                OBJECT_VALUE_REGEXP_COLOR: 'rgb(196, 26, 22)',
                OBJECT_VALUE_STRING_COLOR: 'rgb(196, 26, 22)',
                OBJECT_VALUE_SYMBOL_COLOR: 'rgb(196, 26, 22)',
                OBJECT_VALUE_NUMBER_COLOR: 'rgb(28, 0, 207)',
                OBJECT_VALUE_BOOLEAN_COLOR: 'rgb(28, 0, 207)',
                OBJECT_VALUE_FUNCTION_PREFIX_COLOR: 'rgb(13, 34, 170)',
                HTML_TAG_COLOR: 'rgb(168, 148, 166)',
                HTML_TAGNAME_COLOR: 'rgb(136, 18, 128)',
                HTML_TAGNAME_TEXT_TRANSFORM: 'lowercase',
                HTML_ATTRIBUTE_NAME_COLOR: 'rgb(153, 69, 0)',
                HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(26, 26, 166)',
                HTML_COMMENT_COLOR: 'rgb(35, 110, 37)',
                HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)',
                ARROW_COLOR: '#6e6e6e',
                ARROW_MARGIN_RIGHT: 3,
                ARROW_FONT_SIZE: 12,
                ARROW_ANIMATION_DURATION: '0',
                TREENODE_FONT_FAMILY: 'Menlo, monospace',
                TREENODE_FONT_SIZE: '11px',
                TREENODE_LINE_HEIGHT: 1.2,
                TREENODE_PADDING_LEFT: 12,
                TABLE_BORDER_COLOR: '#aaa',
                TABLE_TH_BACKGROUND_COLOR: '#eee',
                TABLE_TH_HOVER_COLOR: 'hsla(0, 0%, 90%, 1)',
                TABLE_SORT_ICON_COLOR: '#6e6e6e',
                TABLE_DATA_BACKGROUND_IMAGE:
                    'linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))',
                TABLE_DATA_BACKGROUND_SIZE: '128px 32px',
            },
            Ke = K([{}, () => {}]),
            ce = {
                WebkitTouchCallout: 'none',
                WebkitUserSelect: 'none',
                KhtmlUserSelect: 'none',
                MozUserSelect: 'none',
                msUserSelect: 'none',
                OUserSelect: 'none',
                userSelect: 'none',
            },
            J = (e) => ({
                DOMNodePreview: {
                    htmlOpenTag: {
                        base: { color: e.HTML_TAG_COLOR },
                        tagName: { color: e.HTML_TAGNAME_COLOR, textTransform: e.HTML_TAGNAME_TEXT_TRANSFORM },
                        htmlAttributeName: { color: e.HTML_ATTRIBUTE_NAME_COLOR },
                        htmlAttributeValue: { color: e.HTML_ATTRIBUTE_VALUE_COLOR },
                    },
                    htmlCloseTag: {
                        base: { color: e.HTML_TAG_COLOR },
                        offsetLeft: { marginLeft: -e.TREENODE_PADDING_LEFT },
                        tagName: { color: e.HTML_TAGNAME_COLOR, textTransform: e.HTML_TAGNAME_TEXT_TRANSFORM },
                    },
                    htmlComment: { color: e.HTML_COMMENT_COLOR },
                    htmlDoctype: { color: e.HTML_DOCTYPE_COLOR },
                },
                ObjectPreview: {
                    objectDescription: { fontStyle: 'italic' },
                    preview: { fontStyle: 'italic' },
                    arrayMaxProperties: e.OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES,
                    objectMaxProperties: e.OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES,
                },
                ObjectName: { base: { color: e.OBJECT_NAME_COLOR }, dimmed: { opacity: 0.6 } },
                ObjectValue: {
                    objectValueNull: { color: e.OBJECT_VALUE_NULL_COLOR },
                    objectValueUndefined: { color: e.OBJECT_VALUE_UNDEFINED_COLOR },
                    objectValueRegExp: { color: e.OBJECT_VALUE_REGEXP_COLOR },
                    objectValueString: { color: e.OBJECT_VALUE_STRING_COLOR },
                    objectValueSymbol: { color: e.OBJECT_VALUE_SYMBOL_COLOR },
                    objectValueNumber: { color: e.OBJECT_VALUE_NUMBER_COLOR },
                    objectValueBoolean: { color: e.OBJECT_VALUE_BOOLEAN_COLOR },
                    objectValueFunctionPrefix: { color: e.OBJECT_VALUE_FUNCTION_PREFIX_COLOR, fontStyle: 'italic' },
                    objectValueFunctionName: { fontStyle: 'italic' },
                },
                TreeView: { treeViewOutline: { padding: 0, margin: 0, listStyleType: 'none' } },
                TreeNode: {
                    treeNodeBase: {
                        color: e.BASE_COLOR,
                        backgroundColor: e.BASE_BACKGROUND_COLOR,
                        lineHeight: e.TREENODE_LINE_HEIGHT,
                        cursor: 'default',
                        boxSizing: 'border-box',
                        listStyle: 'none',
                        fontFamily: e.TREENODE_FONT_FAMILY,
                        fontSize: e.TREENODE_FONT_SIZE,
                    },
                    treeNodePreviewContainer: {},
                    treeNodePlaceholder: {
                        whiteSpace: 'pre',
                        fontSize: e.ARROW_FONT_SIZE,
                        marginRight: e.ARROW_MARGIN_RIGHT,
                        ...ce,
                    },
                    treeNodeArrow: {
                        base: {
                            color: e.ARROW_COLOR,
                            display: 'inline-block',
                            fontSize: e.ARROW_FONT_SIZE,
                            marginRight: e.ARROW_MARGIN_RIGHT,
                            ...(parseFloat(e.ARROW_ANIMATION_DURATION) > 0
                                ? { transition: `transform ${e.ARROW_ANIMATION_DURATION} ease 0s` }
                                : {}),
                            ...ce,
                        },
                        expanded: {
                            WebkitTransform: 'rotateZ(90deg)',
                            MozTransform: 'rotateZ(90deg)',
                            transform: 'rotateZ(90deg)',
                        },
                        collapsed: {
                            WebkitTransform: 'rotateZ(0deg)',
                            MozTransform: 'rotateZ(0deg)',
                            transform: 'rotateZ(0deg)',
                        },
                    },
                    treeNodeChildNodesContainer: { margin: 0, paddingLeft: e.TREENODE_PADDING_LEFT },
                },
                TableInspector: {
                    base: {
                        color: e.BASE_COLOR,
                        position: 'relative',
                        border: `1px solid ${e.TABLE_BORDER_COLOR}`,
                        fontFamily: e.BASE_FONT_FAMILY,
                        fontSize: e.BASE_FONT_SIZE,
                        lineHeight: '120%',
                        boxSizing: 'border-box',
                        cursor: 'default',
                    },
                },
                TableInspectorHeaderContainer: {
                    base: { top: 0, height: '17px', left: 0, right: 0, overflowX: 'hidden' },
                    table: {
                        tableLayout: 'fixed',
                        borderSpacing: 0,
                        borderCollapse: 'separate',
                        height: '100%',
                        width: '100%',
                        margin: 0,
                    },
                },
                TableInspectorDataContainer: {
                    tr: { display: 'table-row' },
                    td: {
                        boxSizing: 'border-box',
                        border: 'none',
                        height: '16px',
                        verticalAlign: 'top',
                        padding: '1px 4px',
                        WebkitUserSelect: 'text',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        lineHeight: '14px',
                    },
                    div: {
                        position: 'static',
                        top: '17px',
                        bottom: 0,
                        overflowY: 'overlay',
                        transform: 'translateZ(0)',
                        left: 0,
                        right: 0,
                        overflowX: 'hidden',
                    },
                    table: {
                        positon: 'static',
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        borderTop: '0 none transparent',
                        margin: 0,
                        backgroundImage: e.TABLE_DATA_BACKGROUND_IMAGE,
                        backgroundSize: e.TABLE_DATA_BACKGROUND_SIZE,
                        tableLayout: 'fixed',
                        borderSpacing: 0,
                        borderCollapse: 'separate',
                        width: '100%',
                        fontSize: e.BASE_FONT_SIZE,
                        lineHeight: '120%',
                    },
                },
                TableInspectorTH: {
                    base: {
                        position: 'relative',
                        height: 'auto',
                        textAlign: 'left',
                        backgroundColor: e.TABLE_TH_BACKGROUND_COLOR,
                        borderBottom: `1px solid ${e.TABLE_BORDER_COLOR}`,
                        fontWeight: 'normal',
                        verticalAlign: 'middle',
                        padding: '0 4px',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        lineHeight: '14px',
                        ':hover': { backgroundColor: e.TABLE_TH_HOVER_COLOR },
                    },
                    div: {
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        fontSize: e.BASE_FONT_SIZE,
                        lineHeight: '120%',
                    },
                },
                TableInspectorLeftBorder: {
                    none: { borderLeft: 'none' },
                    solid: { borderLeft: `1px solid ${e.TABLE_BORDER_COLOR}` },
                },
                TableInspectorSortIcon: {
                    display: 'block',
                    marginRight: 3,
                    width: 8,
                    height: 7,
                    marginTop: -7,
                    color: e.TABLE_SORT_ICON_COLOR,
                    fontSize: 12,
                    ...ce,
                },
            }),
            pe = 'chromeLight',
            Qe = K(J(X[pe])),
            S = (e) => Q(Qe)[e],
            he =
                (e) =>
                ({ theme: t = pe, ...r }) => {
                    let n = xe(() => {
                        switch (Object.prototype.toString.call(t)) {
                            case '[object String]':
                                return J(X[t]);
                            case '[object Object]':
                                return J(t);
                            default:
                                return J(X[pe]);
                        }
                    }, [t]);
                    return o.createElement(Qe.Provider, { value: n }, o.createElement(e, { ...r }));
                },
            er = ({ expanded: e, styles: t }) =>
                o.createElement('span', { style: { ...t.base, ...(e ? t.expanded : t.collapsed) } }, '\u25B6'),
            tr = k((e) => {
                e = {
                    expanded: !0,
                    nodeRenderer: ({ name: p }) => o.createElement('span', null, p),
                    onClick: () => {},
                    shouldShowArrow: !1,
                    shouldShowPlaceholder: !0,
                    ...e,
                };
                let {
                        expanded: t,
                        onClick: r,
                        children: n,
                        nodeRenderer: a,
                        title: i,
                        shouldShowArrow: s,
                        shouldShowPlaceholder: l,
                    } = e,
                    u = S('TreeNode'),
                    c = a;
                return o.createElement(
                    'li',
                    { 'aria-expanded': t, role: 'treeitem', style: u.treeNodeBase, title: i },
                    o.createElement(
                        'div',
                        { style: u.treeNodePreviewContainer, onClick: r },
                        s || Ae.count(n) > 0
                            ? o.createElement(er, { expanded: t, styles: u.treeNodeArrow })
                            : l && o.createElement('span', { style: u.treeNodePlaceholder }, '\xA0'),
                        o.createElement(c, { ...e }),
                    ),
                    o.createElement('ol', { role: 'group', style: u.treeNodeChildNodesContainer }, t ? n : void 0),
                );
            }),
            Z = '$',
            Ye = '*';
        function q(e, t) {
            return !t(e).next().done;
        }
        var rr = (e) => Array.from({ length: e }, (t, r) => [Z].concat(Array.from({ length: r }, () => '*')).join('.')),
            nr = (e, t, r, n, a) => {
                let i = []
                        .concat(rr(n))
                        .concat(r)
                        .filter((l) => typeof l == 'string'),
                    s = [];
                return (
                    i.forEach((l) => {
                        let u = l.split('.'),
                            c = (p, d, f) => {
                                if (f === u.length) {
                                    s.push(d);
                                    return;
                                }
                                let E = u[f];
                                if (f === 0) q(p, t) && (E === Z || E === Ye) && c(p, Z, f + 1);
                                else if (E === Ye)
                                    for (let { name: m, data: y } of t(p)) q(y, t) && c(y, `${d}.${m}`, f + 1);
                                else {
                                    let m = p[E];
                                    q(m, t) && c(m, `${d}.${E}`, f + 1);
                                }
                            };
                        c(e, '', 0);
                    }),
                    s.reduce((l, u) => ((l[u] = !0), l), { ...a })
                );
            },
            et = k((e) => {
                let { data: t, dataIterator: r, path: n, depth: a, nodeRenderer: i } = e,
                    [s, l] = Q(Ke),
                    u = q(t, r),
                    c = !!s[n],
                    p = N(() => u && l((d) => ({ ...d, [n]: !c })), [u, l, n, c]);
                return o.createElement(
                    tr,
                    {
                        expanded: c,
                        onClick: p,
                        shouldShowArrow: u,
                        shouldShowPlaceholder: a > 0,
                        nodeRenderer: i,
                        ...e,
                    },
                    c
                        ? [...r(t)].map(({ name: d, data: f, ...E }) =>
                              o.createElement(et, {
                                  name: d,
                                  data: f,
                                  depth: a + 1,
                                  path: `${n}.${d}`,
                                  key: d,
                                  dataIterator: r,
                                  nodeRenderer: i,
                                  ...E,
                              }),
                          )
                        : null,
                );
            }),
            tt = k(({ name: e, data: t, dataIterator: r, nodeRenderer: n, expandPaths: a, expandLevel: i }) => {
                let s = S('TreeView'),
                    l = G({}),
                    [, u] = l;
                return (
                    we(() => u((c) => nr(t, r, a, i, c)), [t, r, a, i]),
                    o.createElement(
                        Ke.Provider,
                        { value: l },
                        o.createElement(
                            'ol',
                            { role: 'tree', style: s.treeViewOutline },
                            o.createElement(et, {
                                name: e,
                                data: t,
                                dataIterator: r,
                                depth: 0,
                                path: Z,
                                nodeRenderer: n,
                            }),
                        ),
                    )
                );
            }),
            Ee = ({ name: e, dimmed: t = !1, styles: r = {} }) => {
                let n = S('ObjectName'),
                    a = { ...n.base, ...(t ? n.dimmed : {}), ...r };
                return o.createElement('span', { style: a }, e);
            },
            j = ({ object: e, styles: t }) => {
                let r = S('ObjectValue'),
                    n = (a) => ({ ...r[a], ...t });
                switch (typeof e) {
                    case 'bigint':
                        return o.createElement('span', { style: n('objectValueNumber') }, String(e), 'n');
                    case 'number':
                        return o.createElement('span', { style: n('objectValueNumber') }, String(e));
                    case 'string':
                        return o.createElement('span', { style: n('objectValueString') }, '"', e, '"');
                    case 'boolean':
                        return o.createElement('span', { style: n('objectValueBoolean') }, String(e));
                    case 'undefined':
                        return o.createElement('span', { style: n('objectValueUndefined') }, 'undefined');
                    case 'object':
                        return e === null
                            ? o.createElement('span', { style: n('objectValueNull') }, 'null')
                            : e instanceof Date
                            ? o.createElement('span', null, e.toString())
                            : e instanceof RegExp
                            ? o.createElement('span', { style: n('objectValueRegExp') }, e.toString())
                            : Array.isArray(e)
                            ? o.createElement('span', null, `Array(${e.length})`)
                            : e.constructor
                            ? typeof e.constructor.isBuffer == 'function' && e.constructor.isBuffer(e)
                                ? o.createElement('span', null, `Buffer[${e.length}]`)
                                : o.createElement('span', null, e.constructor.name)
                            : o.createElement('span', null, 'Object');
                    case 'function':
                        return o.createElement(
                            'span',
                            null,
                            o.createElement('span', { style: n('objectValueFunctionPrefix') }, '\u0192\xA0'),
                            o.createElement('span', { style: n('objectValueFunctionName') }, e.name, '()'),
                        );
                    case 'symbol':
                        return o.createElement('span', { style: n('objectValueSymbol') }, e.toString());
                    default:
                        return o.createElement('span', null);
                }
            },
            rt = Object.prototype.hasOwnProperty,
            ar = Object.prototype.propertyIsEnumerable;
        function fe(e, t) {
            let r = Object.getOwnPropertyDescriptor(e, t);
            if (r.get)
                try {
                    return r.get();
                } catch {
                    return r.get;
                }
            return e[t];
        }
        function Je(e, t) {
            return e.length === 0 ? [] : e.slice(1).reduce((r, n) => r.concat([t, n]), [e[0]]);
        }
        var de = ({ data: e }) => {
                let t = S('ObjectPreview'),
                    r = e;
                if (typeof r != 'object' || r === null || r instanceof Date || r instanceof RegExp)
                    return o.createElement(j, { object: r });
                if (Array.isArray(r)) {
                    let n = t.arrayMaxProperties,
                        a = r.slice(0, n).map((s, l) => o.createElement(j, { key: l, object: s }));
                    r.length > n && a.push(o.createElement('span', { key: 'ellipsis' }, '\u2026'));
                    let i = r.length;
                    return o.createElement(
                        o.Fragment,
                        null,
                        o.createElement('span', { style: t.objectDescription }, i === 0 ? '' : `(${i})\xA0`),
                        o.createElement('span', { style: t.preview }, '[', Je(a, ', '), ']'),
                    );
                } else {
                    let n = t.objectMaxProperties,
                        a = [];
                    for (let s in r)
                        if (rt.call(r, s)) {
                            let l;
                            a.length === n - 1 &&
                                Object.keys(r).length > n &&
                                (l = o.createElement('span', { key: 'ellipsis' }, '\u2026'));
                            let u = fe(r, s);
                            if (
                                (a.push(
                                    o.createElement(
                                        'span',
                                        { key: s },
                                        o.createElement(Ee, { name: s || '""' }),
                                        ':\xA0',
                                        o.createElement(j, { object: u }),
                                        l,
                                    ),
                                ),
                                l)
                            )
                                break;
                        }
                    let i = r.constructor ? r.constructor.name : 'Object';
                    return o.createElement(
                        o.Fragment,
                        null,
                        o.createElement('span', { style: t.objectDescription }, i === 'Object' ? '' : `${i} `),
                        o.createElement('span', { style: t.preview }, '{', Je(a, ', '), '}'),
                    );
                }
            },
            or = ({ name: e, data: t }) =>
                typeof e == 'string'
                    ? o.createElement(
                          'span',
                          null,
                          o.createElement(Ee, { name: e }),
                          o.createElement('span', null, ': '),
                          o.createElement(de, { data: t }),
                      )
                    : o.createElement(de, { data: t }),
            ir = ({ name: e, data: t, isNonenumerable: r = !1 }) => {
                let n = t;
                return o.createElement(
                    'span',
                    null,
                    typeof e == 'string'
                        ? o.createElement(Ee, { name: e, dimmed: r })
                        : o.createElement(de, { data: e }),
                    o.createElement('span', null, ': '),
                    o.createElement(j, { object: n }),
                );
            },
            sr = (e, t) =>
                function* (r) {
                    if (!((typeof r == 'object' && r !== null) || typeof r == 'function')) return;
                    let n = Array.isArray(r);
                    if (!n && r[Symbol.iterator]) {
                        let a = 0;
                        for (let i of r) {
                            if (Array.isArray(i) && i.length === 2) {
                                let [s, l] = i;
                                yield { name: s, data: l };
                            } else yield { name: a.toString(), data: i };
                            a++;
                        }
                    } else {
                        let a = Object.getOwnPropertyNames(r);
                        t === !0 && !n ? a.sort() : typeof t == 'function' && a.sort(t);
                        for (let i of a)
                            if (ar.call(r, i)) {
                                let s = fe(r, i);
                                yield { name: i || '""', data: s };
                            } else if (e) {
                                let s;
                                try {
                                    s = fe(r, i);
                                } catch {}
                                s !== void 0 && (yield { name: i, data: s, isNonenumerable: !0 });
                            }
                        e &&
                            r !== Object.prototype &&
                            (yield { name: '__proto__', data: Object.getPrototypeOf(r), isNonenumerable: !0 });
                    }
                },
            lr = ({ depth: e, name: t, data: r, isNonenumerable: n }) =>
                e === 0
                    ? o.createElement(or, { name: t, data: r })
                    : o.createElement(ir, { name: t, data: r, isNonenumerable: n }),
            ur = ({ showNonenumerable: e = !1, sortObjectKeys: t, nodeRenderer: r, ...n }) => {
                let a = sr(e, t),
                    i = r || lr;
                return o.createElement(tt, { nodeRenderer: i, dataIterator: a, ...n });
            },
            cr = he(ur);
        function pr(e) {
            if (typeof e == 'object') {
                let t = [];
                if (Array.isArray(e)) {
                    let n = e.length;
                    t = [...Array(n).keys()];
                } else e !== null && (t = Object.keys(e));
                let r = t.reduce((n, a) => {
                    let i = e[a];
                    return (
                        typeof i == 'object' &&
                            i !== null &&
                            Object.keys(i).reduce((s, l) => (s.includes(l) || s.push(l), s), n),
                        n
                    );
                }, []);
                return { rowHeaders: t, colHeaders: r };
            }
        }
        var fr = ({ rows: e, columns: t, rowsData: r }) => {
                let n = S('TableInspectorDataContainer'),
                    a = S('TableInspectorLeftBorder');
                return o.createElement(
                    'div',
                    { style: n.div },
                    o.createElement(
                        'table',
                        { style: n.table },
                        o.createElement('colgroup', null),
                        o.createElement(
                            'tbody',
                            null,
                            e.map((i, s) =>
                                o.createElement(
                                    'tr',
                                    { key: i, style: n.tr },
                                    o.createElement('td', { style: { ...n.td, ...a.none } }, i),
                                    t.map((l) => {
                                        let u = r[s];
                                        return typeof u == 'object' && u !== null && rt.call(u, l)
                                            ? o.createElement(
                                                  'td',
                                                  { key: l, style: { ...n.td, ...a.solid } },
                                                  o.createElement(j, { object: u[l] }),
                                              )
                                            : o.createElement('td', { key: l, style: { ...n.td, ...a.solid } });
                                    }),
                                ),
                            ),
                        ),
                    ),
                );
            },
            dr = (e) =>
                o.createElement(
                    'div',
                    {
                        style: {
                            position: 'absolute',
                            top: 1,
                            right: 0,
                            bottom: 1,
                            display: 'flex',
                            alignItems: 'center',
                        },
                    },
                    e.children,
                ),
            mr = ({ sortAscending: e }) => {
                let t = S('TableInspectorSortIcon'),
                    r = e ? '\u25B2' : '\u25BC';
                return o.createElement('div', { style: t }, r);
            },
            qe = ({
                sortAscending: e = !1,
                sorted: t = !1,
                onClick: r = void 0,
                borderStyle: n = {},
                children: a,
                ...i
            }) => {
                let s = S('TableInspectorTH'),
                    [l, u] = G(!1),
                    c = N(() => u(!0), []),
                    p = N(() => u(!1), []);
                return o.createElement(
                    'th',
                    {
                        ...i,
                        style: { ...s.base, ...n, ...(l ? s.base[':hover'] : {}) },
                        onMouseEnter: c,
                        onMouseLeave: p,
                        onClick: r,
                    },
                    o.createElement('div', { style: s.div }, a),
                    t && o.createElement(dr, null, o.createElement(mr, { sortAscending: e })),
                );
            },
            br = ({
                indexColumnText: e = '(index)',
                columns: t = [],
                sorted: r,
                sortIndexColumn: n,
                sortColumn: a,
                sortAscending: i,
                onTHClick: s,
                onIndexTHClick: l,
            }) => {
                let u = S('TableInspectorHeaderContainer'),
                    c = S('TableInspectorLeftBorder');
                return o.createElement(
                    'div',
                    { style: u.base },
                    o.createElement(
                        'table',
                        { style: u.table },
                        o.createElement(
                            'tbody',
                            null,
                            o.createElement(
                                'tr',
                                null,
                                o.createElement(
                                    qe,
                                    { borderStyle: c.none, sorted: r && n, sortAscending: i, onClick: l },
                                    e,
                                ),
                                t.map((p) =>
                                    o.createElement(
                                        qe,
                                        {
                                            borderStyle: c.solid,
                                            key: p,
                                            sorted: r && a === p,
                                            sortAscending: i,
                                            onClick: s.bind(null, p),
                                        },
                                        p,
                                    ),
                                ),
                            ),
                        ),
                    ),
                );
            },
            gr = ({ data: e, columns: t }) => {
                let r = S('TableInspector'),
                    [{ sorted: n, sortIndexColumn: a, sortColumn: i, sortAscending: s }, l] = G({
                        sorted: !1,
                        sortIndexColumn: !1,
                        sortColumn: void 0,
                        sortAscending: !1,
                    }),
                    u = N(() => {
                        l(({ sortIndexColumn: m, sortAscending: y }) => ({
                            sorted: !0,
                            sortIndexColumn: !0,
                            sortColumn: void 0,
                            sortAscending: m ? !y : !0,
                        }));
                    }, []),
                    c = N((m) => {
                        l(({ sortColumn: y, sortAscending: T }) => ({
                            sorted: !0,
                            sortIndexColumn: !1,
                            sortColumn: m,
                            sortAscending: m === y ? !T : !0,
                        }));
                    }, []);
                if (typeof e != 'object' || e === null) return o.createElement('div', null);
                let { rowHeaders: p, colHeaders: d } = pr(e);
                t !== void 0 && (d = t);
                let f = p.map((m) => e[m]),
                    E;
                if (
                    (i !== void 0
                        ? (E = f.map((m, y) => (typeof m == 'object' && m !== null ? [m[i], y] : [void 0, y])))
                        : a && (E = p.map((m, y) => [p[y], y])),
                    E !== void 0)
                ) {
                    let m = (T, x) => (ot, it) => {
                            let ye = T(ot),
                                Oe = T(it),
                                Te = typeof ye,
                                ve = typeof Oe,
                                _e = (P, Se) => (P < Se ? -1 : P > Se ? 1 : 0),
                                M;
                            if (Te === ve) M = _e(ye, Oe);
                            else {
                                let P = {
                                    string: 0,
                                    number: 1,
                                    object: 2,
                                    symbol: 3,
                                    boolean: 4,
                                    undefined: 5,
                                    function: 6,
                                };
                                M = _e(P[Te], P[ve]);
                            }
                            return x || (M = -M), M;
                        },
                        y = E.sort(m((T) => T[0], s)).map((T) => T[1]);
                    (p = y.map((T) => p[T])), (f = y.map((T) => f[T]));
                }
                return o.createElement(
                    'div',
                    { style: r.base },
                    o.createElement(br, {
                        columns: d,
                        sorted: n,
                        sortIndexColumn: a,
                        sortColumn: i,
                        sortAscending: s,
                        onTHClick: c,
                        onIndexTHClick: u,
                    }),
                    o.createElement(fr, { rows: p, columns: d, rowsData: f }),
                );
            },
            hr = he(gr),
            Er = 80,
            nt = (e) =>
                e.childNodes.length === 0 ||
                (e.childNodes.length === 1 && e.childNodes[0].nodeType === Node.TEXT_NODE && e.textContent.length < Er),
            yr = ({ tagName: e, attributes: t, styles: r }) =>
                o.createElement(
                    'span',
                    { style: r.base },
                    '<',
                    o.createElement('span', { style: r.tagName }, e),
                    (() => {
                        if (t) {
                            let n = [];
                            for (let a = 0; a < t.length; a++) {
                                let i = t[a];
                                n.push(
                                    o.createElement(
                                        'span',
                                        { key: a },
                                        ' ',
                                        o.createElement('span', { style: r.htmlAttributeName }, i.name),
                                        '="',
                                        o.createElement('span', { style: r.htmlAttributeValue }, i.value),
                                        '"',
                                    ),
                                );
                            }
                            return n;
                        }
                    })(),
                    '>',
                ),
            Xe = ({ tagName: e, isChildNode: t = !1, styles: r }) =>
                o.createElement(
                    'span',
                    { style: Object.assign({}, r.base, t && r.offsetLeft) },
                    '</',
                    o.createElement('span', { style: r.tagName }, e),
                    '>',
                ),
            Or = {
                1: 'ELEMENT_NODE',
                3: 'TEXT_NODE',
                7: 'PROCESSING_INSTRUCTION_NODE',
                8: 'COMMENT_NODE',
                9: 'DOCUMENT_NODE',
                10: 'DOCUMENT_TYPE_NODE',
                11: 'DOCUMENT_FRAGMENT_NODE',
            },
            Tr = ({ isCloseTag: e, data: t, expanded: r }) => {
                let n = S('DOMNodePreview');
                if (e) return o.createElement(Xe, { styles: n.htmlCloseTag, isChildNode: !0, tagName: t.tagName });
                switch (t.nodeType) {
                    case Node.ELEMENT_NODE:
                        return o.createElement(
                            'span',
                            null,
                            o.createElement(yr, {
                                tagName: t.tagName,
                                attributes: t.attributes,
                                styles: n.htmlOpenTag,
                            }),
                            nt(t) ? t.textContent : !r && '\u2026',
                            !r && o.createElement(Xe, { tagName: t.tagName, styles: n.htmlCloseTag }),
                        );
                    case Node.TEXT_NODE:
                        return o.createElement('span', null, t.textContent);
                    case Node.CDATA_SECTION_NODE:
                        return o.createElement('span', null, '<![CDATA[' + t.textContent + ']]>');
                    case Node.COMMENT_NODE:
                        return o.createElement('span', { style: n.htmlComment }, '<!--', t.textContent, '-->');
                    case Node.PROCESSING_INSTRUCTION_NODE:
                        return o.createElement('span', null, t.nodeName);
                    case Node.DOCUMENT_TYPE_NODE:
                        return o.createElement(
                            'span',
                            { style: n.htmlDoctype },
                            '<!DOCTYPE ',
                            t.name,
                            t.publicId ? ` PUBLIC "${t.publicId}"` : '',
                            !t.publicId && t.systemId ? ' SYSTEM' : '',
                            t.systemId ? ` "${t.systemId}"` : '',
                            '>',
                        );
                    case Node.DOCUMENT_NODE:
                        return o.createElement('span', null, t.nodeName);
                    case Node.DOCUMENT_FRAGMENT_NODE:
                        return o.createElement('span', null, t.nodeName);
                    default:
                        return o.createElement('span', null, Or[t.nodeType]);
                }
            },
            vr = function* (e) {
                if (e && e.childNodes) {
                    if (nt(e)) return;
                    for (let t = 0; t < e.childNodes.length; t++) {
                        let r = e.childNodes[t];
                        (r.nodeType === Node.TEXT_NODE && r.textContent.trim().length === 0) ||
                            (yield { name: `${r.tagName}[${t}]`, data: r });
                    }
                    e.tagName && (yield { name: 'CLOSE_TAG', data: { tagName: e.tagName }, isCloseTag: !0 });
                }
            },
            _r = (e) => o.createElement(tt, { nodeRenderer: Tr, dataIterator: vr, ...e }),
            Sr = he(_r),
            Ar = Jt(Zt()),
            Rr = ({ table: e = !1, data: t, ...r }) =>
                e
                    ? o.createElement(hr, { data: t, ...r })
                    : (0, Ar.default)(t)
                    ? o.createElement(Sr, { data: t, ...r })
                    : o.createElement(cr, { data: t, ...r }),
            Cr = B.div({
                display: 'flex',
                padding: 0,
                borderLeft: '5px solid transparent',
                borderBottom: '1px solid transparent',
                transition: 'all 0.1s',
                alignItems: 'flex-start',
                whiteSpace: 'pre',
            }),
            wr = B.div(({ theme: e }) => ({
                backgroundColor: $e(0.5, e.appBorderColor),
                color: e.color.inverseText,
                fontSize: e.typography.size.s1,
                fontWeight: e.typography.weight.bold,
                lineHeight: 1,
                padding: '1px 5px',
                borderRadius: 20,
                margin: '2px 0px',
            })),
            xr = B.div({ flex: 1, padding: '0 0 0 5px' }),
            Nr = ({ children: e, className: t }) =>
                o.createElement(Pe, { horizontal: !0, vertical: !0, className: t }, e),
            Lr = B(Nr)({ margin: 0, padding: '10px 5px 20px' }),
            Ir = He(({ theme: e, ...t }) =>
                o.createElement(Rr, { theme: e.addonActionsTheme || 'chromeLight', table: !1, ...t }),
            ),
            Dr = ({ actions: e, onClear: t }) =>
                o.createElement(
                    Ce,
                    null,
                    o.createElement(
                        Lr,
                        null,
                        e.map((r) =>
                            o.createElement(
                                Cr,
                                { key: r.id },
                                r.count > 1 && o.createElement(wr, null, r.count),
                                o.createElement(
                                    xr,
                                    null,
                                    o.createElement(Ir, {
                                        sortObjectKeys: !0,
                                        showNonenumerable: !1,
                                        name: r.data.name,
                                        data: r.data.args || r.data,
                                    }),
                                ),
                            ),
                        ),
                    ),
                    o.createElement(De, { actionItems: [{ title: 'Clear', onClick: t }] }),
                ),
            Mr = 'actions',
            U = 'storybook/actions',
            Pr = `${U}/panel`,
            me = `${U}/action-event`,
            at = `${U}/action-clear`,
            Br = (e, t) => {
                try {
                    return L(e, t);
                } catch {
                    return !1;
                }
            },
            Fr = class extends Re {
                constructor(e) {
                    super(e),
                        (this.handleStoryChange = () => {
                            let { actions: t } = this.state;
                            t.length > 0 && t[0].options.clearOnStoryChange && this.clearActions();
                        }),
                        (this.addAction = (t) => {
                            this.setState((r) => {
                                let n = [...r.actions],
                                    a = n.length && n[0];
                                return (
                                    a && Br(a.data, t.data) ? a.count++ : ((t.count = 1), n.unshift(t)),
                                    { actions: n.slice(0, t.options.limit) }
                                );
                            });
                        }),
                        (this.clearActions = () => {
                            let { api: t } = this.props;
                            t.emit(at), this.setState({ actions: [] });
                        }),
                        (this.mounted = !1),
                        (this.state = { actions: [] });
                }
                componentDidMount() {
                    this.mounted = !0;
                    let { api: e } = this.props;
                    e.on(me, this.addAction), e.on(W, this.handleStoryChange);
                }
                componentWillUnmount() {
                    this.mounted = !1;
                    let { api: e } = this.props;
                    e.off(W, this.handleStoryChange), e.off(me, this.addAction);
                }
                render() {
                    let { actions: e = [] } = this.state,
                        { active: t } = this.props,
                        r = { actions: e, onClear: this.clearActions };
                    return t ? o.createElement(Dr, { ...r }) : null;
                }
            };
        function zr() {
            let [{ count: e }, t] = Le(U, { count: 0 });
            return (
                Ie({
                    [me]: () => {
                        t((r) => ({ ...r, count: r.count + 1 }));
                    },
                    [W]: () => {
                        t((r) => ({ ...r, count: 0 }));
                    },
                    [at]: () => {
                        t((r) => ({ ...r, count: 0 }));
                    },
                }),
                o.createElement(
                    'div',
                    null,
                    o.createElement(
                        Be,
                        { col: 1 },
                        o.createElement(
                            'span',
                            { style: { display: 'inline-block', verticalAlign: 'middle' } },
                            'Actions',
                        ),
                        e === 0 ? '' : o.createElement(Me, { status: 'neutral' }, e),
                    ),
                )
            );
        }
        ee.register(U, (e) => {
            ee.add(Pr, {
                title: zr,
                type: Ne.PANEL,
                render: ({ active: t }) => o.createElement(Fr, { api: e, active: !!t }),
                paramKey: Mr,
            });
        });
    })();
} catch (e) {
    console.error('[Storybook] One of your manager-entries failed: ' + import.meta.url, e);
}
