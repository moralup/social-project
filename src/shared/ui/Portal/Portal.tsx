import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    parent?: HTMLElement;
    children: ReactNode;
}

export const Portal: FC<PortalProps> = props => {
    const { children, parent = document.body } = props;

    return createPortal(children, parent);
    // return withoutPortal ? (children as ReactElement) : createPortal(children, parent);
};
