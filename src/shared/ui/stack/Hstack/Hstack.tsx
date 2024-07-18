import { FC } from 'react';
import { Flex, FlexProps } from '../flex/flex';

type HstackProps = Omit<FlexProps, 'direction'>;

export const Hstack: FC<HstackProps> = props => {
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Flex direction="row" {...props} />
    );
};
