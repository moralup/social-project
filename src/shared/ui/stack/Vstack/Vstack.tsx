import { FC } from 'react';
import { Flex, FlexProps } from '../flex/flex';

type VstackProps = Omit<FlexProps, 'direction'>;

export const Vstack: FC<VstackProps> = props => {
    const { align = 'start' } = props;
    return (
        <Flex
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
            direction="column"
            align={align}
        />
    );
};
