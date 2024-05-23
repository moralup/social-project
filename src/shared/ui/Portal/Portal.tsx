import { FC, ReactElement } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    parent?: HTMLElement;
    withoutPortal?: boolean;
}

export const Portal: FC<PortalProps> = props => {
    const { children, parent = document.querySelector('.app'), withoutPortal } = props;

    return withoutPortal ? (children as ReactElement) : createPortal(children, parent);
};
