import React, { useState } from 'react';
import InputField from '../InputField/InputField';
import './InputFieldPage.css';

export const InputFieldPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  return (
    <article className={`inputfield-page-root${darkMode ? ' dark' : ''}`}>
      <button
        onClick={() => setDarkMode((prev) => !prev)}
        style={{ position: 'absolute', top: 16, right: 16, zIndex: 1000 }}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <h2>InputField Component Demo</h2>
      <div>
        <InputField
          label="Username"
          placeholder="Enter your username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          helperText="This is your unique username."
          variant="outlined"
          size="md"
          clearable
        />
      </div>
      <div>
        <InputField
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          variant="filled"
          size="md"
          passwordToggle
          type="password"
          invalid={password.length < 6 && password.length > 0}
          errorMessage={password.length < 6 && password.length > 0 ? "Password too short" : undefined}
        />
      </div>
      <div>
        <InputField
          label="Disabled"
          placeholder="Can't type here"
          disabled
          variant="ghost"
          size="lg"
        />
      </div>
      <div>
        <InputField
          label="Loading"
          placeholder="Loading input"
          loading
          variant="outlined"
          size="sm"
        />
      </div>
    </article>
  );
};
