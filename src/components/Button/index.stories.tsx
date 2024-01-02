import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';
import './style.module.css';


const meta: Meta<typeof Button> = {
    component: Button,
    title: 'Button',
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Primary Button',
        type: 'primary',
        size: 'big',
        disabled: false,
    },
};

export const Secondary: Story = {
    args: {
        children: 'Secondary Button',
        type: 'secondary',
        size: 'medium',
        disabled: false,
    },
};

export const Tertiary: Story = {
    args: {
        children: 'Tertiary Button',
        type: 'tertiary',
        size: 'small',
        disabled: true,
    },
};

export const Danger: Story = {
    args: {
        children: 'Danger Button',
        type: 'danger',
        size: 'full',
        disabled: false,
    },
};
