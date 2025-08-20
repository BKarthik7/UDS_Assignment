import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import InputField from './InputField';
import type { InputFieldProps } from './InputField';

const meta: Meta<InputFieldProps> = {
  title: 'Components/InputField',
  component: InputField,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<InputFieldProps>;

export const Default: Story = {
  args: {
    label: 'Default',
    placeholder: 'Type something...',
    variant: 'outlined',
    size: 'md',
  },
};

export const Filled: Story = {
  args: {
    label: 'Filled',
    placeholder: 'Filled variant',
    variant: 'filled',
    size: 'md',
  },
};

export const Ghost: Story = {
  args: {
    label: 'Ghost',
    placeholder: 'Ghost variant',
    variant: 'ghost',
    size: 'md',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    placeholder: 'Disabled input',
    disabled: true,
    variant: 'outlined',
    size: 'md',
  },
};

export const Invalid: Story = {
  args: {
    label: 'Invalid',
    placeholder: 'Invalid input',
    invalid: true,
    errorMessage: 'This field is required',
    variant: 'outlined',
    size: 'md',
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading',
    placeholder: 'Loading...',
    loading: true,
    variant: 'outlined',
    size: 'md',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Helper',
    placeholder: 'With helper text',
    helperText: 'This is some helper text.',
    variant: 'outlined',
    size: 'md',
  },
};

export const Clearable: Story = {
  render: (args) => {
    const [value, setValue] = useState('Clear me');
    return (
      <InputField {...args} value={value} onChange={e => setValue(e.target.value)} clearable />
    );
  },
  args: {
    label: 'Clearable',
    placeholder: 'Try clearing',
    variant: 'outlined',
    size: 'md',
  },
};

export const PasswordToggle: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return (
      <InputField {...args} value={value} onChange={e => setValue(e.target.value)} passwordToggle type="password" />
    );
  },
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    variant: 'outlined',
    size: 'md',
  },
};
