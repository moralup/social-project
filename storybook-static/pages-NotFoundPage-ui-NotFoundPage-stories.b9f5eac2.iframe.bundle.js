'use strict';
(self.webpackChunkproduction_project = self.webpackChunkproduction_project || []).push([
    [967],
    {
        './src/pages/NotFoundPage/ui/NotFoundPage.stories.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    Dark: () => Dark,
                    Light: () => Light,
                    __namedExportsOrder: () => __namedExportsOrder,
                    default: () => NotFoundPage_stories,
                });
            var themeDecorator = __webpack_require__('./src/shared/config/storybook/themeDecorator.tsx'),
                ThemeProvider = __webpack_require__('./src/app/providers/ThemeProvider/index.ts'),
                jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
                classNames = __webpack_require__('./src/shared/lib/classNames/classNames.ts'),
                useTranslation = __webpack_require__('./node_modules/react-i18next/dist/es/useTranslation.js'),
                injectStylesIntoStyleTag = __webpack_require__(
                    './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
                ),
                injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag),
                styleDomAPI = __webpack_require__('./node_modules/style-loader/dist/runtime/styleDomAPI.js'),
                styleDomAPI_default = __webpack_require__.n(styleDomAPI),
                insertBySelector = __webpack_require__('./node_modules/style-loader/dist/runtime/insertBySelector.js'),
                insertBySelector_default = __webpack_require__.n(insertBySelector),
                setAttributesWithoutAttributes = __webpack_require__(
                    './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
                ),
                setAttributesWithoutAttributes_default = __webpack_require__.n(setAttributesWithoutAttributes),
                insertStyleElement = __webpack_require__(
                    './node_modules/style-loader/dist/runtime/insertStyleElement.js',
                ),
                insertStyleElement_default = __webpack_require__.n(insertStyleElement),
                styleTagTransform = __webpack_require__(
                    './node_modules/style-loader/dist/runtime/styleTagTransform.js',
                ),
                styleTagTransform_default = __webpack_require__.n(styleTagTransform),
                NotFoundPage_module = __webpack_require__(
                    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/NotFoundPage/ui/NotFoundPage.module.scss',
                ),
                options = {};
            (options.styleTagTransform = styleTagTransform_default()),
                (options.setAttributes = setAttributesWithoutAttributes_default()),
                (options.insert = insertBySelector_default().bind(null, 'head')),
                (options.domAPI = styleDomAPI_default()),
                (options.insertStyleElement = insertStyleElement_default());
            injectStylesIntoStyleTag_default()(NotFoundPage_module.Z, options);
            const ui_NotFoundPage_module =
                NotFoundPage_module.Z && NotFoundPage_module.Z.locals ? NotFoundPage_module.Z.locals : void 0;
            var NotFoundPage = function (param) {
                var className = param.className,
                    t = (0, useTranslation.$)().t;
                return (0, jsx_runtime.jsx)('div', {
                    className: (0, classNames.A)(ui_NotFoundPage_module.NotFoundPage, {}, [className]),
                    children: t('Страница не найдена'),
                });
            };
            NotFoundPage.__docgenInfo = {
                description: '',
                methods: [],
                displayName: 'NotFoundPage',
                props: { className: { required: !1, tsType: { name: 'string' }, description: '' } },
            };
            const NotFoundPage_stories = { title: 'pages/NotFoundPage', component: NotFoundPage };
            var Light = {},
                Dark = { decorators: [(0, themeDecorator.W)(ThemeProvider.Q2.DARK)] };
            (Light.parameters = {
                ...Light.parameters,
                docs: {
                    ...Light.parameters?.docs,
                    source: { originalSource: '{}', ...Light.parameters?.docs?.source },
                },
            }),
                (Dark.parameters = {
                    ...Dark.parameters,
                    docs: {
                        ...Dark.parameters?.docs,
                        source: {
                            originalSource: '{\n  decorators: [themeDecorator(Theme.DARK)]\n}',
                            ...Dark.parameters?.docs?.source,
                        },
                    },
                });
            const __namedExportsOrder = ['Light', 'Dark'];
        },
        './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/NotFoundPage/ui/NotFoundPage.module.scss':
            (module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
                        __webpack_require__('./node_modules/css-loader/dist/runtime/sourceMaps.js'),
                    _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
                        __webpack_require__.n(
                            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
                        ),
                    _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        './node_modules/css-loader/dist/runtime/api.js',
                    ),
                    ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
                        _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
                    )()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
                ___CSS_LOADER_EXPORT___.push([
                    module.id,
                    '.src-pages-NotFoundPage-ui-NotFoundPage-module__NotFoundPage--s3qI9{display:flex;justify-content:center;align-items:center;font:var(--font-l);height:100%}',
                    '',
                    {
                        version: 3,
                        sources: ['webpack://./src/pages/NotFoundPage/ui/NotFoundPage.module.scss'],
                        names: [],
                        mappings: 'AAAA,oEACI,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,kBAAA,CACA,WAAA',
                        sourcesContent: [
                            '.NotFoundPage {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font: var(--font-l);\n    height: 100%;\n}\n',
                        ],
                        sourceRoot: '',
                    },
                ]),
                    (___CSS_LOADER_EXPORT___.locals = {
                        NotFoundPage: 'src-pages-NotFoundPage-ui-NotFoundPage-module__NotFoundPage--s3qI9',
                    });
                const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
            },
        './node_modules/react-i18next/dist/es/useTranslation.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            function _arrayLikeToArray(arr, len) {
                (null == len || len > arr.length) && (len = arr.length);
                for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
                return arr2;
            }
            function _slicedToArray(arr, i) {
                return (
                    (function _arrayWithHoles(arr) {
                        if (Array.isArray(arr)) return arr;
                    })(arr) ||
                    (function _iterableToArrayLimit(r, l) {
                        var t =
                            null == r ? null : ('undefined' != typeof Symbol && r[Symbol.iterator]) || r['@@iterator'];
                        if (null != t) {
                            var e,
                                n,
                                i,
                                u,
                                a = [],
                                f = !0,
                                o = !1;
                            try {
                                if (((i = (t = t.call(r)).next), 0 === l)) {
                                    if (Object(t) !== t) return;
                                    f = !1;
                                } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
                            } catch (r) {
                                (o = !0), (n = r);
                            } finally {
                                try {
                                    if (!f && null != t.return && ((u = t.return()), Object(u) !== u)) return;
                                } finally {
                                    if (o) throw n;
                                }
                            }
                            return a;
                        }
                    })(arr, i) ||
                    (function _unsupportedIterableToArray(o, minLen) {
                        if (o) {
                            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
                            var n = Object.prototype.toString.call(o).slice(8, -1);
                            return (
                                'Object' === n && o.constructor && (n = o.constructor.name),
                                'Map' === n || 'Set' === n
                                    ? Array.from(o)
                                    : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                    ? _arrayLikeToArray(o, minLen)
                                    : void 0
                            );
                        }
                    })(arr, i) ||
                    (function _nonIterableRest() {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                        );
                    })()
                );
            }
            function _typeof(o) {
                return (
                    (_typeof =
                        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                            ? function (o) {
                                  return typeof o;
                              }
                            : function (o) {
                                  return o &&
                                      'function' == typeof Symbol &&
                                      o.constructor === Symbol &&
                                      o !== Symbol.prototype
                                      ? 'symbol'
                                      : typeof o;
                              }),
                    _typeof(o)
                );
            }
            function toPropertyKey(t) {
                var i = (function toPrimitive(t, r) {
                    if ('object' != _typeof(t) || !t) return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var i = e.call(t, r || 'default');
                        if ('object' != _typeof(i)) return i;
                        throw new TypeError('@@toPrimitive must return a primitive value.');
                    }
                    return ('string' === r ? String : Number)(t);
                })(t, 'string');
                return 'symbol' == _typeof(i) ? i : i + '';
            }
            function _defineProperty(obj, key, value) {
                return (
                    (key = toPropertyKey(key)) in obj
                        ? Object.defineProperty(obj, key, { value, enumerable: !0, configurable: !0, writable: !0 })
                        : (obj[key] = value),
                    obj
                );
            }
            __webpack_require__.d(__webpack_exports__, { $: () => useTranslation });
            var react = __webpack_require__('./node_modules/react/index.js');
            function _defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    (descriptor.enumerable = descriptor.enumerable || !1),
                        (descriptor.configurable = !0),
                        'value' in descriptor && (descriptor.writable = !0),
                        Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
                }
            }
            var i18nInstance,
                defaultOptions = {
                    bindI18n: 'languageChanged',
                    bindI18nStore: '',
                    transEmptyNodeValue: '',
                    transSupportBasicHtmlNodes: !0,
                    transWrapTextNodes: '',
                    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
                    useSuspense: !0,
                },
                I18nContext = react.createContext();
            function getDefaults() {
                return defaultOptions;
            }
            var ReportNamespaces = (function () {
                function ReportNamespaces() {
                    !(function _classCallCheck(instance, Constructor) {
                        if (!(instance instanceof Constructor))
                            throw new TypeError('Cannot call a class as a function');
                    })(this, ReportNamespaces),
                        (this.usedNamespaces = {});
                }
                return (
                    (function _createClass(Constructor, protoProps, staticProps) {
                        return (
                            protoProps && _defineProperties(Constructor.prototype, protoProps),
                            staticProps && _defineProperties(Constructor, staticProps),
                            Object.defineProperty(Constructor, 'prototype', { writable: !1 }),
                            Constructor
                        );
                    })(ReportNamespaces, [
                        {
                            key: 'addUsedNamespaces',
                            value: function addUsedNamespaces(namespaces) {
                                var _this = this;
                                namespaces.forEach(function (ns) {
                                    _this.usedNamespaces[ns] || (_this.usedNamespaces[ns] = !0);
                                });
                            },
                        },
                        {
                            key: 'getUsedNamespaces',
                            value: function getUsedNamespaces() {
                                return Object.keys(this.usedNamespaces);
                            },
                        },
                    ]),
                    ReportNamespaces
                );
            })();
            function getI18n() {
                return i18nInstance;
            }
            function warn() {
                if (console && console.warn) {
                    for (var _console, _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)
                        args[_key] = arguments[_key];
                    'string' == typeof args[0] && (args[0] = 'react-i18next:: '.concat(args[0])),
                        (_console = console).warn.apply(_console, args);
                }
            }
            var alreadyWarned = {};
            function warnOnce() {
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)
                    args[_key2] = arguments[_key2];
                ('string' == typeof args[0] && alreadyWarned[args[0]]) ||
                    ('string' == typeof args[0] && (alreadyWarned[args[0]] = new Date()), warn.apply(void 0, args));
            }
            function loadNamespaces(i18n, ns, cb) {
                i18n.loadNamespaces(ns, function () {
                    if (i18n.isInitialized) cb();
                    else {
                        i18n.on('initialized', function initialized() {
                            setTimeout(function () {
                                i18n.off('initialized', initialized);
                            }, 0),
                                cb();
                        });
                    }
                });
            }
            function hasLoadedNamespace(ns, i18n) {
                var options = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (!i18n.languages || !i18n.languages.length)
                    return warnOnce('i18n.languages were undefined or empty', i18n.languages), !0;
                var lng = i18n.languages[0],
                    fallbackLng = !!i18n.options && i18n.options.fallbackLng,
                    lastLng = i18n.languages[i18n.languages.length - 1];
                if ('cimode' === lng.toLowerCase()) return !0;
                var loadNotPending = function loadNotPending(l, n) {
                    var loadState = i18n.services.backendConnector.state[''.concat(l, '|').concat(n)];
                    return -1 === loadState || 2 === loadState;
                };
                return (
                    !(
                        options.bindI18n &&
                        options.bindI18n.indexOf('languageChanging') > -1 &&
                        i18n.services.backendConnector.backend &&
                        i18n.isLanguageChangingTo &&
                        !loadNotPending(i18n.isLanguageChangingTo, ns)
                    ) &&
                    (!!i18n.hasResourceBundle(lng, ns) ||
                        !i18n.services.backendConnector.backend ||
                        !(!loadNotPending(lng, ns) || (fallbackLng && !loadNotPending(lastLng, ns))))
                );
            }
            function useTranslation_ownKeys(object, enumerableOnly) {
                var keys = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var symbols = Object.getOwnPropertySymbols(object);
                    enumerableOnly &&
                        (symbols = symbols.filter(function (sym) {
                            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                        })),
                        keys.push.apply(keys, symbols);
                }
                return keys;
            }
            function useTranslation_objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2
                        ? useTranslation_ownKeys(Object(source), !0).forEach(function (key) {
                              _defineProperty(target, key, source[key]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
                        : useTranslation_ownKeys(Object(source)).forEach(function (key) {
                              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                          });
                }
                return target;
            }
            function useTranslation(ns) {
                var props = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i18nFromProps = props.i18n,
                    _ref = (0, react.useContext)(I18nContext) || {},
                    i18nFromContext = _ref.i18n,
                    defaultNSFromContext = _ref.defaultNS,
                    i18n = i18nFromProps || i18nFromContext || getI18n();
                if ((i18n && !i18n.reportNamespaces && (i18n.reportNamespaces = new ReportNamespaces()), !i18n)) {
                    warnOnce('You will need to pass in an i18next instance by using initReactI18next');
                    var notReadyT = function notReadyT(k) {
                            return Array.isArray(k) ? k[k.length - 1] : k;
                        },
                        retNotReady = [notReadyT, {}, !1];
                    return (retNotReady.t = notReadyT), (retNotReady.i18n = {}), (retNotReady.ready = !1), retNotReady;
                }
                i18n.options.react &&
                    void 0 !== i18n.options.react.wait &&
                    warnOnce(
                        'It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.',
                    );
                var i18nOptions = useTranslation_objectSpread(
                        useTranslation_objectSpread(useTranslation_objectSpread({}, getDefaults()), i18n.options.react),
                        props,
                    ),
                    useSuspense = i18nOptions.useSuspense,
                    keyPrefix = i18nOptions.keyPrefix,
                    namespaces = ns || defaultNSFromContext || (i18n.options && i18n.options.defaultNS);
                (namespaces = 'string' == typeof namespaces ? [namespaces] : namespaces || ['translation']),
                    i18n.reportNamespaces.addUsedNamespaces && i18n.reportNamespaces.addUsedNamespaces(namespaces);
                var ready =
                    (i18n.isInitialized || i18n.initializedStoreOnce) &&
                    namespaces.every(function (n) {
                        return hasLoadedNamespace(n, i18n, i18nOptions);
                    });
                function getT() {
                    return i18n.getFixedT(
                        null,
                        'fallback' === i18nOptions.nsMode ? namespaces : namespaces[0],
                        keyPrefix,
                    );
                }
                var _useState = (0, react.useState)(getT),
                    _useState2 = _slicedToArray(_useState, 2),
                    t = _useState2[0],
                    setT = _useState2[1],
                    isMounted = (0, react.useRef)(!0);
                (0, react.useEffect)(
                    function () {
                        var bindI18n = i18nOptions.bindI18n,
                            bindI18nStore = i18nOptions.bindI18nStore;
                        function boundReset() {
                            isMounted.current && setT(getT);
                        }
                        return (
                            (isMounted.current = !0),
                            ready ||
                                useSuspense ||
                                loadNamespaces(i18n, namespaces, function () {
                                    isMounted.current && setT(getT);
                                }),
                            bindI18n && i18n && i18n.on(bindI18n, boundReset),
                            bindI18nStore && i18n && i18n.store.on(bindI18nStore, boundReset),
                            function () {
                                (isMounted.current = !1),
                                    bindI18n &&
                                        i18n &&
                                        bindI18n.split(' ').forEach(function (e) {
                                            return i18n.off(e, boundReset);
                                        }),
                                    bindI18nStore &&
                                        i18n &&
                                        bindI18nStore.split(' ').forEach(function (e) {
                                            return i18n.store.off(e, boundReset);
                                        });
                            }
                        );
                    },
                    [i18n, namespaces.join()],
                );
                var isInitial = (0, react.useRef)(!0);
                (0, react.useEffect)(
                    function () {
                        isMounted.current && !isInitial.current && setT(getT), (isInitial.current = !1);
                    },
                    [i18n],
                );
                var ret = [t, i18n, ready];
                if (((ret.t = t), (ret.i18n = i18n), (ret.ready = ready), ready)) return ret;
                if (!ready && !useSuspense) return ret;
                throw new Promise(function (resolve) {
                    loadNamespaces(i18n, namespaces, function () {
                        resolve();
                    });
                });
            }
        },
        './src/shared/lib/classNames/classNames.ts': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            function _array_like_to_array(arr, len) {
                (null == len || len > arr.length) && (len = arr.length);
                for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
                return arr2;
            }
            function _sliced_to_array(arr, i) {
                return (
                    (function _array_with_holes(arr) {
                        if (Array.isArray(arr)) return arr;
                    })(arr) ||
                    (function _iterable_to_array_limit(arr, i) {
                        var _i =
                            null == arr
                                ? null
                                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) || arr['@@iterator'];
                        if (null != _i) {
                            var _s,
                                _e,
                                _arr = [],
                                _n = !0,
                                _d = !1;
                            try {
                                for (
                                    _i = _i.call(arr);
                                    !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i);
                                    _n = !0
                                );
                            } catch (err) {
                                (_d = !0), (_e = err);
                            } finally {
                                try {
                                    _n || null == _i.return || _i.return();
                                } finally {
                                    if (_d) throw _e;
                                }
                            }
                            return _arr;
                        }
                    })(arr, i) ||
                    _unsupported_iterable_to_array(arr, i) ||
                    (function _non_iterable_rest() {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                        );
                    })()
                );
            }
            function _to_consumable_array(arr) {
                return (
                    (function _array_without_holes(arr) {
                        if (Array.isArray(arr)) return _array_like_to_array(arr);
                    })(arr) ||
                    (function _iterable_to_array(iter) {
                        if (
                            ('undefined' != typeof Symbol && null != iter[Symbol.iterator]) ||
                            null != iter['@@iterator']
                        )
                            return Array.from(iter);
                    })(arr) ||
                    _unsupported_iterable_to_array(arr) ||
                    (function _non_iterable_spread() {
                        throw new TypeError(
                            'Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                        );
                    })()
                );
            }
            function _unsupported_iterable_to_array(o, minLen) {
                if (o) {
                    if ('string' == typeof o) return _array_like_to_array(o, minLen);
                    var n = Object.prototype.toString.call(o).slice(8, -1);
                    return (
                        'Object' === n && o.constructor && (n = o.constructor.name),
                        'Map' === n || 'Set' === n
                            ? Array.from(n)
                            : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                            ? _array_like_to_array(o, minLen)
                            : void 0
                    );
                }
            }
            function classNames(cls) {
                var mods = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    additional = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                return [cls]
                    .concat(
                        _to_consumable_array(additional.filter(Boolean)),
                        _to_consumable_array(
                            Object.entries(mods)
                                .filter(function (param) {
                                    var value = _sliced_to_array(param, 2)[1];
                                    return Boolean(value);
                                })
                                .map(function (param) {
                                    return _sliced_to_array(param, 1)[0];
                                }),
                        ),
                    )
                    .join(' ');
            }
            __webpack_require__.d(__webpack_exports__, { A: () => classNames });
        },
    },
]);
