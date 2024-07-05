import { VFC, SVGProps } from 'react';

export interface NavLinkI {
    Icon: VFC<SVGProps<SVGSVGElement>>;
    text: string;
    path: string;
    authOnly?: boolean;
}
