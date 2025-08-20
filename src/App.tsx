import './App.css'
import { useState } from 'react'
import InputField from './components/InputField/InputField'

function App() {
  const [value, setValue] = useState('')
  const [password, setPassword] = useState('')
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 gap-8">
        <h1 className="text-4xl font-bold">Hello World</h1>
        <div className="w-80">
          <InputField
            label="Username"
            placeholder="Enter your username"
            value={value}
            onChange={e => setValue(e.target.value)}
            helperText="This is your unique username."
            variant="outlined"
            size="md"
            clearable
          />
        </div>
        <div className="w-80">
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
        <div className="w-80">
          <InputField
            label="Disabled"
            placeholder="Can't type here"
            disabled
            variant="ghost"
            size="lg"
          />
        </div>
        <div className="w-80">
          <InputField
            label="Loading"
            placeholder="Loading input"
            loading
            variant="outlined"
            size="sm"
          />
        </div>
      </div>
    </>
  )
}

export default App
