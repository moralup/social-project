import { FC } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    parent?: HTMLElement;
}

export const Portal: FC<PortalProps> = props => {
    const { children, parent = document.body } = props;

    return createPortal(children, parent);
    // return withoutPortal ? (children as ReactElement) : createPortal(children, parent);
};
