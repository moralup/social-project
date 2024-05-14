'use strict';
(self.webpackChunkproduction_project = self.webpackChunkproduction_project || []).push([
    [242],
    {
        './src/widgets/LangSwitcher/ui/LangSwitcher.stories.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    default: () => __WEBPACK_DEFAULT_EXPORT__,
                    Light: () => Light,
                    Dark: () => Dark,
                    __namedExportsOrder: () => __namedExportsOrder,
                });
            var shared_config_storybook_themeDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './src/shared/config/storybook/themeDecorator.tsx',
                ),
                app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    './src/app/providers/ThemeProvider/index.ts',
                );
            const __WEBPACK_DEFAULT_EXPORT__ = {
                title: 'widgets/LangSwitcher',
                component: __webpack_require__('./src/widgets/LangSwitcher/ui/LangSwitcher.tsx').k,
            };
            var Light = {},
                Dark = {
                    decorators: [
                        (0, shared_config_storybook_themeDecorator__WEBPACK_IMPORTED_MODULE_0__.W)(
                            app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__.Q2.DARK,
                        ),
                    ],
                };
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
    },
]);
