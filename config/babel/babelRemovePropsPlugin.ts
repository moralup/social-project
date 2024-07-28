import { PluginItem } from '@babel/core';

export function babelRemovePropsPlugin(attributes: string[]): PluginItem {
    return {
        visitor: {
            JSXAttribute(path) {
                const { name } = path.node.name;
                if (attributes.includes(name as string)) {
                    path.remove();
                }
            },
        },
    };
}

// export function babelRemovePropsPlugin(): PluginItem {
//     return {
//         visitor: {
//             Program(path, state) {
//                 const forbidden = state.opts.props || [];

//                 path.traverse({
//                     JSXIdentifier(current) {
//                         const nodeName = current.node.name;

//                         if (forbidden.includes(nodeName)) {
//                             current.parentPath.remove();
//                         }
//                     },
//                 });
//             },
//         },
//     };
// }

// isTsx && [
//     babelRemovePropsPlugin,
//     {
//         props: ['data-testid'],
//     },
// ],
