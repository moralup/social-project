'use strict';
(self.webpackChunkproduction_project = self.webpackChunkproduction_project || []).push([
    [210],
    {
        './src/shared/ui/AppLink/AppLink.stories.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    default: () => __WEBPACK_DEFAULT_EXPORT__,
                    Primary: () => Primary,
                    PrimaryDark: () => PrimaryDark,
                    Secondary: () => Secondary,
                    SecondaryDark: () => SecondaryDark,
                    Red: () => Red,
                    RedDark: () => RedDark,
                    __namedExportsOrder: () => __namedExportsOrder,
                });
            var shared_config_storybook_themeDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './src/shared/config/storybook/themeDecorator.tsx',
                ),
                app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    './src/app/providers/ThemeProvider/index.ts',
                ),
                _AppLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./src/shared/ui/AppLink/AppLink.tsx');
            const __WEBPACK_DEFAULT_EXPORT__ = {
                title: 'shared/AppLink',
                component: _AppLink__WEBPACK_IMPORTED_MODULE_2__.F,
                args: { to: '/', children: 'click me' },
            };
            var Primary = { args: { theme: _AppLink__WEBPACK_IMPORTED_MODULE_2__.u.PRIMARY } },
                PrimaryDark = {
                    args: { theme: _AppLink__WEBPACK_IMPORTED_MODULE_2__.u.PRIMARY },
                    decorators: [
                        (0, shared_config_storybook_themeDecorator__WEBPACK_IMPORTED_MODULE_0__.W)(
                            app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__.Q2.DARK,
                        ),
                    ],
                },
                Secondary = { args: { theme: _AppLink__WEBPACK_IMPORTED_MODULE_2__.u.SECONDARY } },
                SecondaryDark = {
                    args: { theme: _AppLink__WEBPACK_IMPORTED_MODULE_2__.u.SECONDARY },
                    decorators: [
                        (0, shared_config_storybook_themeDecorator__WEBPACK_IMPORTED_MODULE_0__.W)(
                            app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__.Q2.DARK,
                        ),
                    ],
                },
                Red = { args: { theme: _AppLink__WEBPACK_IMPORTED_MODULE_2__.u.RED } },
                RedDark = {
                    args: { theme: _AppLink__WEBPACK_IMPORTED_MODULE_2__.u.RED },
                    decorators: [
                        (0, shared_config_storybook_themeDecorator__WEBPACK_IMPORTED_MODULE_0__.W)(
                            app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__.Q2.DARK,
                        ),
                    ],
                };
            (Primary.parameters = {
                ...Primary.parameters,
                docs: {
                    ...Primary.parameters?.docs,
                    source: {
                        originalSource: '{\n  args: {\n    theme: AppLinkTheme.PRIMARY\n  }\n}',
                        ...Primary.parameters?.docs?.source,
                    },
                },
            }),
                (PrimaryDark.parameters = {
                    ...PrimaryDark.parameters,
                    docs: {
                        ...PrimaryDark.parameters?.docs,
                        source: {
                            originalSource:
                                '{\n  args: {\n    theme: AppLinkTheme.PRIMARY\n  },\n  decorators: [themeDecorator(Theme.DARK)]\n}',
                            ...PrimaryDark.parameters?.docs?.source,
                        },
                    },
                }),
                (Secondary.parameters = {
                    ...Secondary.parameters,
                    docs: {
                        ...Secondary.parameters?.docs,
                        source: {
                            originalSource: '{\n  args: {\n    theme: AppLinkTheme.SECONDARY\n  }\n}',
                            ...Secondary.parameters?.docs?.source,
                        },
                    },
                }),
                (SecondaryDark.parameters = {
                    ...SecondaryDark.parameters,
                    docs: {
                        ...SecondaryDark.parameters?.docs,
                        source: {
                            originalSource:
                                '{\n  args: {\n    theme: AppLinkTheme.SECONDARY\n  },\n  decorators: [themeDecorator(Theme.DARK)]\n}',
                            ...SecondaryDark.parameters?.docs?.source,
                        },
                    },
                }),
                (Red.parameters = {
                    ...Red.parameters,
                    docs: {
                        ...Red.parameters?.docs,
                        source: {
                            originalSource: '{\n  args: {\n    theme: AppLinkTheme.RED\n  }\n}',
                            ...Red.parameters?.docs?.source,
                        },
                    },
                }),
                (RedDark.parameters = {
                    ...RedDark.parameters,
                    docs: {
                        ...RedDark.parameters?.docs,
                        source: {
                            originalSource:
                                '{\n  args: {\n    theme: AppLinkTheme.RED\n  },\n  decorators: [themeDecorator(Theme.DARK)]\n}',
                            ...RedDark.parameters?.docs?.source,
                        },
                    },
                });
            const __namedExportsOrder = ['Primary', 'PrimaryDark', 'Secondary', 'SecondaryDark', 'Red', 'RedDark'];
        },
        './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/AppLink/AppLink.module.scss':
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
                    '.src-shared-ui-AppLink-AppLink-module__AppLink--mVYHW{color:var(--primary-color)}.src-shared-ui-AppLink-AppLink-module__primary--lPwbq{color:var(--primary-color)}.src-shared-ui-AppLink-AppLink-module__secondary--E8eho{color:var(--inverted-primary-color)}.src-shared-ui-AppLink-AppLink-module__red--ENIPJ{color:red}',
                    '',
                    {
                        version: 3,
                        sources: ['webpack://./src/shared/ui/AppLink/AppLink.module.scss'],
                        names: [],
                        mappings: 'AAAA,sDACI,0BAAA,CAGJ,sDACI,0BAAA,CAGJ,wDACI,mCAAA,CAGJ,kDACI,SAAA',
                        sourcesContent: [
                            '.AppLink {\n    color: var(--primary-color);\n}\n\n.primary {\n    color: var(--primary-color);\n}\n\n.secondary {\n    color: var(--inverted-primary-color);\n}\n\n.red {\n    color: red;\n}\n',
                        ],
                        sourceRoot: '',
                    },
                ]),
                    (___CSS_LOADER_EXPORT___.locals = {
                        AppLink: 'src-shared-ui-AppLink-AppLink-module__AppLink--mVYHW',
                        primary: 'src-shared-ui-AppLink-AppLink-module__primary--lPwbq',
                        secondary: 'src-shared-ui-AppLink-AppLink-module__secondary--E8eho',
                        red: 'src-shared-ui-AppLink-AppLink-module__red--ENIPJ',
                    });
                const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
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
        './src/shared/ui/AppLink/AppLink.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            __webpack_require__.d(__webpack_exports__, { F: () => AppLink, u: () => AppLinkTheme });
            var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
                classNames = __webpack_require__('./src/shared/lib/classNames/classNames.ts'),
                react_router_dom = __webpack_require__('./node_modules/react-router-dom/index.js'),
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
                AppLink_module = __webpack_require__(
                    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/AppLink/AppLink.module.scss',
                ),
                options = {};
            (options.styleTagTransform = styleTagTransform_default()),
                (options.setAttributes = setAttributesWithoutAttributes_default()),
                (options.insert = insertBySelector_default().bind(null, 'head')),
                (options.domAPI = styleDomAPI_default()),
                (options.insertStyleElement = insertStyleElement_default());
            injectStylesIntoStyleTag_default()(AppLink_module.Z, options);
            const AppLink_AppLink_module =
                AppLink_module.Z && AppLink_module.Z.locals ? AppLink_module.Z.locals : void 0;
            function _define_property(obj, key, value) {
                return (
                    key in obj
                        ? Object.defineProperty(obj, key, { value, enumerable: !0, configurable: !0, writable: !0 })
                        : (obj[key] = value),
                    obj
                );
            }
            function _object_spread_props(target, source) {
                return (
                    (source = null != source ? source : {}),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
                        : (function ownKeys(object, enumerableOnly) {
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
                          })(Object(source)).forEach(function (key) {
                              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                          }),
                    target
                );
            }
            function _object_without_properties(source, excluded) {
                if (null == source) return {};
                var key,
                    i,
                    target = (function _object_without_properties_loose(source, excluded) {
                        if (null == source) return {};
                        var key,
                            i,
                            target = {},
                            sourceKeys = Object.keys(source);
                        for (i = 0; i < sourceKeys.length; i++)
                            (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
                        return target;
                    })(source, excluded);
                if (Object.getOwnPropertySymbols) {
                    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
                    for (i = 0; i < sourceSymbolKeys.length; i++)
                        (key = sourceSymbolKeys[i]),
                            excluded.indexOf(key) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                                    (target[key] = source[key]));
                }
                return target;
            }
            var AppLinkTheme;
            !(function (AppLinkTheme) {
                (AppLinkTheme.PRIMARY = 'primary'), (AppLinkTheme.SECONDARY = 'secondary'), (AppLinkTheme.RED = 'red');
            })(AppLinkTheme || (AppLinkTheme = {}));
            var AppLink = function (props) {
                var to = props.to,
                    className = props.className,
                    children = props.children,
                    _props_theme = props.theme,
                    theme = void 0 === _props_theme ? 'primary' : _props_theme,
                    otherProps = _object_without_properties(props, ['to', 'className', 'children', 'theme']);
                return (0, jsx_runtime.jsx)(
                    react_router_dom.rU,
                    _object_spread_props(
                        (function _object_spread(target) {
                            for (var i = 1; i < arguments.length; i++) {
                                var source = null != arguments[i] ? arguments[i] : {},
                                    ownKeys = Object.keys(source);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (ownKeys = ownKeys.concat(
                                        Object.getOwnPropertySymbols(source).filter(function (sym) {
                                            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
                                        }),
                                    )),
                                    ownKeys.forEach(function (key) {
                                        _define_property(target, key, source[key]);
                                    });
                            }
                            return target;
                        })(
                            {
                                to,
                                className: (0, classNames.A)(
                                    AppLink_AppLink_module.AppLink,
                                    _define_property({}, AppLink_AppLink_module[theme], !0),
                                    [className],
                                ),
                            },
                            otherProps,
                        ),
                        { children },
                    ),
                );
            };
            AppLink.__docgenInfo = {
                description: '',
                methods: [],
                displayName: 'AppLink',
                props: {
                    className: { required: !1, tsType: { name: 'string' }, description: '' },
                    theme: { required: !1, tsType: { name: 'AppLinkTheme' }, description: '' },
                },
                composes: ['LinkProps'],
            };
        },
    },
]);
