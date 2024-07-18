import { FC } from 'react';
import { Flex, FlexProps } from '../flex/flex';

type VstackProps = Omit<FlexProps, 'direction'>;

export const Vstack: FC<VstackProps> = props => {
    const { align = 'start' } = props;
    return (
        <Flex
            {...props}
            direction="column"
            align={align}
        />
    );
};
