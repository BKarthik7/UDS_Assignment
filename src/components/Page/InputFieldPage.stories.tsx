import type { Meta, StoryObj } from '@storybook/react';
import { InputFieldPage } from './InputFieldPage';

const meta: Meta<typeof InputFieldPage> = {
  title: 'Components/InputFieldPage',
  component: InputFieldPage,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof InputFieldPage>;

export const Default: Story = {};
