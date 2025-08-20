import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import InputField from './InputField';

describe('InputField', () => {
  it('renders label and placeholder', () => {
    render(<InputField label="Test Label" placeholder="Test Placeholder" />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Test Placeholder')).toBeInTheDocument();
  });

  it('shows helper text', () => {
    render(<InputField helperText="Help me" />);
    expect(screen.getByText('Help me')).toBeInTheDocument();
  });

  it('shows error message when invalid', () => {
    render(<InputField invalid errorMessage="Error!" />);
    expect(screen.getByText('Error!')).toBeInTheDocument();
  });

  it('disables input when disabled', () => {
    render(<InputField disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('calls onChange when typing', () => {
    const handleChange = jest.fn();
    render(<InputField onChange={handleChange} />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'abc' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('clears input when clear button is clicked', () => {
    const handleChange = jest.fn();
    render(<InputField value="abc" onChange={handleChange} clearable />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleChange).toHaveBeenCalled();
  });

  it('toggles password visibility', () => {
    render(<InputField passwordToggle type="password" label="Password" />);
    const button = screen.getByRole('button');
    const input = screen.getByLabelText('Password');
    expect(input).toHaveAttribute('type', 'password');
    fireEvent.click(button);
    expect(input).toHaveAttribute('type', 'text');
  });
});
