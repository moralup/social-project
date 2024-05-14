'use strict';
(self.webpackChunkproduction_project = self.webpackChunkproduction_project || []).push([
    [363],
    {
        './src/widgets/Sidebar/ui/Sidebar/Sidebar.stories.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    Dark: () => Dark,
                    Light: () => Light,
                    __namedExportsOrder: () => __namedExportsOrder,
                    default: () => Sidebar_stories,
                });
            var themeDecorator = __webpack_require__('./src/shared/config/storybook/themeDecorator.tsx'),
                ThemeProvider = __webpack_require__('./src/app/providers/ThemeProvider/index.ts'),
                jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
                react = __webpack_require__('./node_modules/react/index.js'),
                LangSwitcher = __webpack_require__('./src/widgets/LangSwitcher/ui/LangSwitcher.tsx'),
                ThemeSwitcher = __webpack_require__('./src/widgets/ThemeSwitcher/ui/ThemeSwitcher.tsx');
            ThemeSwitcher.O.__docgenInfo = {
                description: '',
                methods: [],
                displayName: 'ThemeSwitcher',
                props: { className: { required: !1, tsType: { name: 'string' }, description: '' } },
            };
            var Button = __webpack_require__('./src/shared/ui/Button/Button.tsx'),
                classNames = __webpack_require__('./src/shared/lib/classNames/classNames.ts'),
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
                Sidebar_module = __webpack_require__(
                    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Sidebar/ui/Sidebar/Sidebar.module.scss',
                ),
                options = {};
            (options.styleTagTransform = styleTagTransform_default()),
                (options.setAttributes = setAttributesWithoutAttributes_default()),
                (options.insert = insertBySelector_default().bind(null, 'head')),
                (options.domAPI = styleDomAPI_default()),
                (options.insertStyleElement = insertStyleElement_default());
            injectStylesIntoStyleTag_default()(Sidebar_module.Z, options);
            const Sidebar_Sidebar_module =
                Sidebar_module.Z && Sidebar_module.Z.locals ? Sidebar_module.Z.locals : void 0;
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
                    (function _unsupported_iterable_to_array(o, minLen) {
                        if (!o) return;
                        if ('string' == typeof o) return _array_like_to_array(o, minLen);
                        var n = Object.prototype.toString.call(o).slice(8, -1);
                        'Object' === n && o.constructor && (n = o.constructor.name);
                        if ('Map' === n || 'Set' === n) return Array.from(n);
                        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                            return _array_like_to_array(o, minLen);
                    })(arr, i) ||
                    (function _non_iterable_rest() {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                        );
                    })()
                );
            }
            var Sidebar = function (param) {
                var obj,
                    key,
                    value,
                    className = param.className,
                    _useState = _sliced_to_array((0, react.useState)(!1), 2),
                    collapsed = _useState[0],
                    setCollapsed = _useState[1];
                return (0, jsx_runtime.jsxs)('div', {
                    'data-testid': 'sidebar',
                    className: (0, classNames.A)(
                        Sidebar_Sidebar_module.Sidebar,
                        ((obj = {}),
                        (key = Sidebar_Sidebar_module.collapsed),
                        (value = collapsed),
                        key in obj
                            ? Object.defineProperty(obj, key, { value, enumerable: !0, configurable: !0, writable: !0 })
                            : (obj[key] = value),
                        obj),
                        [className],
                    ),
                    children: [
                        (0, jsx_runtime.jsx)(Button.z, {
                            'data-testid': 'sidebar-toggle',
                            onClick: function () {
                                setCollapsed(function (prev) {
                                    return !prev;
                                });
                            },
                            children: 'TOGGLE-TOGGLE',
                        }),
                        (0, jsx_runtime.jsxs)('div', {
                            className: Sidebar_Sidebar_module.switchers,
                            children: [
                                (0, jsx_runtime.jsx)(ThemeSwitcher.O, {}),
                                (0, jsx_runtime.jsx)(LangSwitcher.k, { className: Sidebar_Sidebar_module.lang }),
                            ],
                        }),
                    ],
                });
            };
            Sidebar.__docgenInfo = {
                description: '',
                methods: [],
                displayName: 'Sidebar',
                props: { className: { required: !1, tsType: { name: 'string' }, description: '' } },
            };
            const Sidebar_stories = { title: 'widgets/Sidebar', component: Sidebar };
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
        './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Sidebar/ui/Sidebar/Sidebar.module.scss':
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
                    '.src-widgets-Sidebar-ui-Sidebar-Sidebar-module__Sidebar--ld5FU{height:calc(100vh - var(--navbar-height));width:var(--sidebar-width);background:var(--inverted-bg-color);position:relative;transition:width .3s}.src-widgets-Sidebar-ui-Sidebar-Sidebar-module__collapsed--EudhC{width:var(--sidebar-width-collapsed)}.src-widgets-Sidebar-ui-Sidebar-Sidebar-module__switchers--QQRIw{position:absolute;bottom:20px;display:flex;justify-content:center;width:100%}.src-widgets-Sidebar-ui-Sidebar-Sidebar-module__lang--Cc0mZ{margin-left:20px}',
                    '',
                    {
                        version: 3,
                        sources: ['webpack://./src/widgets/Sidebar/ui/Sidebar/Sidebar.module.scss'],
                        names: [],
                        mappings:
                            'AAAA,+DACI,yCAAA,CACA,0BAAA,CACA,mCAAA,CACA,iBAAA,CACA,oBAAA,CAGJ,iEACI,oCAAA,CAGJ,iEACI,iBAAA,CACA,WAAA,CACA,YAAA,CACA,sBAAA,CACA,UAAA,CAGJ,4DACI,gBAAA',
                        sourcesContent: [
                            '.Sidebar {\n    height: calc(100vh - var(--navbar-height));\n    width: var(--sidebar-width);\n    background: var(--inverted-bg-color);\n    position: relative;\n    transition: width 0.3s;\n}\n\n.collapsed {\n    width: var(--sidebar-width-collapsed);\n}\n\n.switchers {\n    position: absolute;\n    bottom: 20px;\n    display: flex;\n    justify-content: center;\n    width: 100%;\n}\n\n.lang {\n    margin-left: 20px;\n}\n',
                        ],
                        sourceRoot: '',
                    },
                ]),
                    (___CSS_LOADER_EXPORT___.locals = {
                        Sidebar: 'src-widgets-Sidebar-ui-Sidebar-Sidebar-module__Sidebar--ld5FU',
                        collapsed: 'src-widgets-Sidebar-ui-Sidebar-Sidebar-module__collapsed--EudhC',
                        switchers: 'src-widgets-Sidebar-ui-Sidebar-Sidebar-module__switchers--QQRIw',
                        lang: 'src-widgets-Sidebar-ui-Sidebar-Sidebar-module__lang--Cc0mZ',
                    });
                const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
            },
        './src/widgets/ThemeSwitcher/ui/ThemeSwitcher.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { O: () => ThemeSwitcher });
            var _path,
                _path2,
                jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
                classNames = __webpack_require__('./src/shared/lib/classNames/classNames.ts'),
                ThemeProvider = __webpack_require__('./src/app/providers/ThemeProvider/index.ts'),
                Button = __webpack_require__('./src/shared/ui/Button/Button.tsx'),
                react = __webpack_require__('./node_modules/react/index.js');
            function _extends() {
                return (
                    (_extends = Object.assign
                        ? Object.assign.bind()
                        : function (target) {
                              for (var i = 1; i < arguments.length; i++) {
                                  var source = arguments[i];
                                  for (var key in source)
                                      Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                              }
                              return target;
                          }),
                    _extends.apply(this, arguments)
                );
            }
            const theme_dark = function SvgThemeDark(props) {
                return react.createElement(
                    'svg',
                    _extends({ width: 40, height: 41, fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, props),
                    _path ||
                        (_path = react.createElement('path', {
                            d: 'M10.848 1.044A12.872 12.872 0 0 0 4.931 11.88c0 4.571 2.387 8.57 5.976 10.836C4.852 22.716 0 17.87 0 11.88a10.83 10.83 0 0 1 3.177-7.662 10.854 10.854 0 0 1 7.671-3.174Z',
                            fill: '#0115C6',
                        })),
                    _path2 ||
                        (_path2 = react.createElement('path', {
                            d: 'm14.97 15.9-2.288-1.439-2.209 1.537.671-2.6-2.15-1.636 2.683-.177.887-2.542 1.006 2.502 2.683.06-2.072 1.714.79 2.58ZM21.48 8.787l-2.92-1.832-2.84 1.97.828-3.35-2.741-2.088 3.451-.236L18.402 0l1.322 3.211 3.412.06-2.663 2.226 1.006 3.29ZM33.669 4l2.82 2.817L5.78 37.493l-2.82-2.817L33.669 4ZM33.53 23.702a10.83 10.83 0 0 1-3.177 7.662 10.854 10.854 0 0 1-14.1 1.066L31.42 17.279a10.803 10.803 0 0 1 2.11 6.423ZM33.392 31.346l2.269-5.457L40 30.892l-6.608.453ZM35.66 21.574l-2.248-5.477 6.588.472-4.34 5.005ZM24.852 36.666l5.464-2.266-.474 6.6-4.99-4.334ZM15.05 34.4l5.463 2.266-4.99 4.314-.474-6.58Z',
                            fill: '#0115C6',
                        })),
                );
            };
            var theme_light_path, theme_light_path2, _path3;
            function theme_light_extends() {
                return (
                    (theme_light_extends = Object.assign
                        ? Object.assign.bind()
                        : function (target) {
                              for (var i = 1; i < arguments.length; i++) {
                                  var source = arguments[i];
                                  for (var key in source)
                                      Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                              }
                              return target;
                          }),
                    theme_light_extends.apply(this, arguments)
                );
            }
            const theme_light = function SvgThemeLight(props) {
                return react.createElement(
                    'svg',
                    theme_light_extends(
                        { width: 40, height: 41, fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
                        props,
                    ),
                    theme_light_path ||
                        (theme_light_path = react.createElement('path', {
                            d: 'M33.53 23.702a10.83 10.83 0 0 1-3.177 7.662 10.854 10.854 0 0 1-14.1 1.066L31.42 17.279a10.803 10.803 0 0 1 2.11 6.423ZM33.392 31.346l2.269-5.457L40 30.892l-6.608.453ZM35.66 21.574l-2.248-5.477 6.588.472-4.34 5.005ZM24.852 36.666l5.464-2.266-.474 6.6-4.99-4.334ZM15.05 34.4l5.463 2.266-4.99 4.314-.474-6.58ZM33.669 4l2.82 2.817L5.78 37.493l-2.82-2.817L33.669 4Z',
                            fill: '#FFC700',
                        })),
                    theme_light_path2 ||
                        (theme_light_path2 = react.createElement('path', {
                            fillRule: 'evenodd',
                            clipRule: 'evenodd',
                            d: 'm18.56 6.955 2.92 1.832-1.007-3.29 2.663-2.226-3.412-.06L18.402 0l-1.144 3.25-3.451.237 2.741 2.089-.828 3.349 2.84-1.97Zm-5.878 7.506L14.97 15.9l-.789-2.581 2.072-1.715-2.683-.059-1.006-2.502-.887 2.542-2.683.177 2.15 1.635-.67 2.601 2.208-1.537Z',
                            fill: '#FFC700',
                        })),
                    _path3 ||
                        (_path3 = react.createElement('path', {
                            d: 'M10.848 1.044A12.872 12.872 0 0 0 4.931 11.88c0 4.571 2.387 8.57 5.976 10.836C4.852 22.716 0 17.87 0 11.88a10.83 10.83 0 0 1 3.177-7.662 10.854 10.854 0 0 1 7.671-3.174Z',
                            fill: '#FFC700',
                        })),
                );
            };
            __webpack_require__('./src/app/styles/index.scss');
            var ThemeSwitcher = function (param) {
                var className = param.className,
                    _useTheme = (0, ThemeProvider.Fg)(),
                    theme = _useTheme.theme,
                    toggleTheme = _useTheme.toggleTheme;
                return (0, jsx_runtime.jsx)(Button.z, {
                    theme: Button.b.CLEAR,
                    className: (0, classNames.A)('', {}, [className]),
                    onClick: toggleTheme,
                    children:
                        theme === ThemeProvider.Q2.DARK
                            ? (0, jsx_runtime.jsx)(theme_dark, {})
                            : (0, jsx_runtime.jsx)(theme_light, {}),
                });
            };
            ThemeSwitcher.__docgenInfo = {
                description: '',
                methods: [],
                displayName: 'ThemeSwitcher',
                props: { className: { required: !1, tsType: { name: 'string' }, description: '' } },
            };
        },
    },
]);
