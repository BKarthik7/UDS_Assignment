import React, { useState } from 'react';
import InputField from '../InputField/InputField';

export const InputFieldPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <article style={{ padding: 32, maxWidth: 400 }}>
      <h2>InputField Component Demo</h2>
      <div style={{ marginBottom: 24 }}>
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
      <div style={{ marginBottom: 24 }}>
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
      <div style={{ marginBottom: 24 }}>
        <InputField
          label="Disabled"
          placeholder="Can't type here"
          disabled
          variant="ghost"
          size="lg"
        />
      </div>
      <div style={{ marginBottom: 24 }}>
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
