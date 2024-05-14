'use strict';
(self.webpackChunkproduction_project = self.webpackChunkproduction_project || []).push([
    [491],
    {
        './src/widgets/PageLoader/ui/PageLoader.stories.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    Dark: () => Dark,
                    Light: () => Light,
                    __namedExportsOrder: () => __namedExportsOrder,
                    default: () => PageLoader_stories,
                });
            var themeDecorator = __webpack_require__('./src/shared/config/storybook/themeDecorator.tsx'),
                ThemeProvider = __webpack_require__('./src/app/providers/ThemeProvider/index.ts'),
                jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
                Loader = __webpack_require__('./src/shared/ui/Loader/Loader.tsx'),
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
                PageLoader_module = __webpack_require__(
                    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/PageLoader/ui/PageLoader.module.scss',
                ),
                options = {};
            (options.styleTagTransform = styleTagTransform_default()),
                (options.setAttributes = setAttributesWithoutAttributes_default()),
                (options.insert = insertBySelector_default().bind(null, 'head')),
                (options.domAPI = styleDomAPI_default()),
                (options.insertStyleElement = insertStyleElement_default());
            injectStylesIntoStyleTag_default()(PageLoader_module.Z, options);
            const ui_PageLoader_module =
                PageLoader_module.Z && PageLoader_module.Z.locals ? PageLoader_module.Z.locals : void 0;
            var PageLoader = function (param) {
                var className = param.className;
                return (0, jsx_runtime.jsx)('div', {
                    className: (0, classNames.A)(ui_PageLoader_module.PageLoader, {}, [className]),
                    children: (0, jsx_runtime.jsx)(Loader.a, {}),
                });
            };
            PageLoader.__docgenInfo = {
                description: '',
                methods: [],
                displayName: 'PageLoader',
                props: { className: { required: !1, tsType: { name: 'string' }, description: '' } },
            };
            const PageLoader_stories = { title: 'widgets/PageLoader', component: PageLoader };
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
        './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Loader/Loader.scss':
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
                    '.lds-ellipsis{display:inline-block;position:relative;width:80px;height:80px}.lds-ellipsis div{position:absolute;top:33px;width:13px;height:13px;border-radius:50%;background:var(--inverted-bg-color);animation-timing-function:cubic-bezier(0, 1, 1, 0)}.lds-ellipsis div:nth-child(1){left:8px;animation:lds-ellipsis1 .6s infinite}.lds-ellipsis div:nth-child(2){left:8px;animation:lds-ellipsis2 .6s infinite}.lds-ellipsis div:nth-child(3){left:32px;animation:lds-ellipsis2 .6s infinite}.lds-ellipsis div:nth-child(4){left:56px;animation:lds-ellipsis3 .6s infinite}@keyframes lds-ellipsis1{0%{transform:scale(0)}100%{transform:scale(1)}}@keyframes lds-ellipsis3{0%{transform:scale(1)}100%{transform:scale(0)}}@keyframes lds-ellipsis2{0%{transform:translate(0, 0)}100%{transform:translate(24px, 0)}}',
                    '',
                    {
                        version: 3,
                        sources: ['webpack://./src/shared/ui/Loader/Loader.scss'],
                        names: [],
                        mappings:
                            'AAAA,cACI,oBAAA,CACA,iBAAA,CACA,UAAA,CACA,WAAA,CAGJ,kBACI,iBAAA,CACA,QAAA,CACA,UAAA,CACA,WAAA,CACA,iBAAA,CACA,mCAAA,CACA,kDAAA,CAGJ,+BACI,QAAA,CACA,oCAAA,CAGJ,+BACI,QAAA,CACA,oCAAA,CAGJ,+BACI,SAAA,CACA,oCAAA,CAGJ,+BACI,SAAA,CACA,oCAAA,CAGJ,yBACI,GACI,kBAAA,CAGJ,KACI,kBAAA,CAAA,CAIR,yBACI,GACI,kBAAA,CAGJ,KACI,kBAAA,CAAA,CAIR,yBACI,GACI,yBAAA,CAGJ,KACI,4BAAA,CAAA',
                        sourcesContent: [
                            '.lds-ellipsis {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px;\n}\n\n.lds-ellipsis div {\n    position: absolute;\n    top: 33px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: var(--inverted-bg-color);\n    animation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n\n.lds-ellipsis div:nth-child(1) {\n    left: 8px;\n    animation: lds-ellipsis1 0.6s infinite;\n}\n\n.lds-ellipsis div:nth-child(2) {\n    left: 8px;\n    animation: lds-ellipsis2 0.6s infinite;\n}\n\n.lds-ellipsis div:nth-child(3) {\n    left: 32px;\n    animation: lds-ellipsis2 0.6s infinite;\n}\n\n.lds-ellipsis div:nth-child(4) {\n    left: 56px;\n    animation: lds-ellipsis3 0.6s infinite;\n}\n\n@keyframes lds-ellipsis1 {\n    0% {\n        transform: scale(0);\n    }\n\n    100% {\n        transform: scale(1);\n    }\n}\n\n@keyframes lds-ellipsis3 {\n    0% {\n        transform: scale(1);\n    }\n\n    100% {\n        transform: scale(0);\n    }\n}\n\n@keyframes lds-ellipsis2 {\n    0% {\n        transform: translate(0, 0);\n    }\n\n    100% {\n        transform: translate(24px, 0);\n    }\n}\n',
                        ],
                        sourceRoot: '',
                    },
                ]);
                const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
            },
        './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/PageLoader/ui/PageLoader.module.scss':
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
                    '.src-widgets-PageLoader-ui-PageLoader-module__PageLoader--E86UV{display:flex;justify-content:center;align-items:center;flex-grow:1}',
                    '',
                    {
                        version: 3,
                        sources: ['webpack://./src/widgets/PageLoader/ui/PageLoader.module.scss'],
                        names: [],
                        mappings: 'AAAA,gEACI,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,WAAA',
                        sourcesContent: [
                            '.PageLoader {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-grow: 1;\r\n}\r\n',
                        ],
                        sourceRoot: '',
                    },
                ]),
                    (___CSS_LOADER_EXPORT___.locals = {
                        PageLoader: 'src-widgets-PageLoader-ui-PageLoader-module__PageLoader--E86UV',
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
        './src/shared/ui/Loader/Loader.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            __webpack_require__.d(__webpack_exports__, { a: () => Loader_Loader_Loader });
            var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
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
                Loader = __webpack_require__(
                    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Loader/Loader.scss',
                ),
                options = {};
            (options.styleTagTransform = styleTagTransform_default()),
                (options.setAttributes = setAttributesWithoutAttributes_default()),
                (options.insert = insertBySelector_default().bind(null, 'head')),
                (options.domAPI = styleDomAPI_default()),
                (options.insertStyleElement = insertStyleElement_default());
            injectStylesIntoStyleTag_default()(Loader.Z, options);
            Loader.Z && Loader.Z.locals && Loader.Z.locals;
            var Loader_Loader_Loader = function (param) {
                var className = param.className;
                return (0, jsx_runtime.jsxs)('div', {
                    className: (0, classNames.A)('lds-ellipsis', {}, [className]),
                    children: [
                        (0, jsx_runtime.jsx)('div', {}),
                        (0, jsx_runtime.jsx)('div', {}),
                        (0, jsx_runtime.jsx)('div', {}),
                        (0, jsx_runtime.jsx)('div', {}),
                    ],
                });
            };
            Loader_Loader_Loader.__docgenInfo = {
                description: '',
                methods: [],
                displayName: 'Loader',
                props: { className: { required: !1, tsType: { name: 'string' }, description: '' } },
            };
        },
    },
]);
