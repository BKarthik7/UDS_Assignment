import React, { useState } from 'react';
import './InputField.css';

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  loading?: boolean;
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  type?: 'text' | 'password';
  clearable?: boolean;
  passwordToggle?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-3 py-2 text-base',
  lg: 'px-4 py-3 text-lg',
};

const variantClasses = {
  filled: 'bg-gray-100 border border-gray-300 focus:bg-white',
  outlined: 'bg-white border border-gray-400',
  ghost: 'bg-transparent border border-transparent',
};

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  loading,
  variant = 'outlined',
  size = 'md',
  type = 'text',
  clearable,
  passwordToggle,
  className,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = passwordToggle ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className={`flex flex-col gap-1 ${className ?? ''}`}>
      {label && (
        <label className="font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        <input
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled || loading}
          className={`
            w-full rounded transition
            ${sizeClasses[size]}
            ${variantClasses[variant]}
            ${invalid ? 'border-red-500' : ''}
            ${disabled ? 'bg-gray-200 cursor-not-allowed' : ''}
            ${loading ? 'animate-pulse' : ''}
            outline-none
          `}
        />
        {clearable && value && !disabled && (
          <button
            type="button"
            className="absolute right-2 text-gray-400 hover:text-gray-600"
            onClick={() => onChange?.({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>)}
            tabIndex={-1}
          >
            &#10005;
          </button>
        )}
        {passwordToggle && (
          <button
            type="button"
            className="absolute right-2 text-gray-400 hover:text-gray-600"
            onClick={() => setShowPassword((v) => !v)}
            tabIndex={-1}
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        )}
        {loading && (
          <span className="absolute right-2 animate-spin text-gray-400">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25"/>
              <path d="M22 12a10 10 0 01-10 10" stroke="currentColor" strokeWidth="4"/>
            </svg>
          </span>
        )}
      </div>
      {helperText && !invalid && (
        <span className="text-xs text-gray-500">{helperText}</span>
      )}
      {invalid && errorMessage && (
        <span className="text-xs text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};

export default InputField;
