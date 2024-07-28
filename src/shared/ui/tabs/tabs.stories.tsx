import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './tabs';
import { useState } from 'react';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/entities/theme';

const TabsWrapper = () => {
    const [activeTab, setActiveTab] = useState('value 2');
    return (
        <div style={{ padding: 40 }}>
            <Tabs
                tabs={[
                    { content: 'content 1', value: 'value 1' },
                    { content: 'content 2', value: 'value 2' },
                    { content: 'content 3', value: 'value 3' },
                    { content: 'content 4', value: 'value 4' },
                ]}
                onTabClick={tab => setActiveTab(tab)}
                value={activeTab}
            />
        </div>
    );
};

const meta: Meta<typeof Tabs> = {
    title: 'shared/Tabs',
    component: TabsWrapper,
    args: {},
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Light: Story = {};
export const Dark: Story = {
    decorators: [themeDecorator(Theme.DARK)],
};
