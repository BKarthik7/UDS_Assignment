import './App.css'
import { useState, useEffect } from 'react'
import InputField from './components/InputField/InputField'
import DataTable from './components/DataTable/DataTable'
import type { Column } from './components/DataTable/DataTable'
import Tabs from './components/Tabs/Tabs'
import { userColumns, userData } from './data/userData'

function App() {
  const [value, setValue] = useState('')
  const [password, setPassword] = useState('')
  const [darkMode, setDarkMode] = useState(false);

  type User = {
    id: number;
    name: string;
    email: string;
    age: number;
  };

  const columns: Column<User>[] = userColumns;

  const data: User[] = userData;

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <>
      <button
        onClick={() => setDarkMode((prev) => !prev)}
        style={{ position: 'fixed', top: 16, right: 16, zIndex: 1000 }}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 gap-8">
        <h1 className="text-4xl font-bold">Hello World</h1>
        <div className="w-full max-w-xl">
          <Tabs
            tabs={[
              {
                label: 'Inputs',
                content: (
                  <div className="bg-white rounded shadow p-6">
                    <h2 className="text-2xl font-semibold mb-4">Existing Inputs</h2>
                    <div className="w-80 mb-4">
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
                    <div className="w-80 mb-4">
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
                    <div className="w-80 mb-4">
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
                ),
              },
              {
                label: 'DataTable',
                content: (
                  <div className="bg-white rounded shadow p-6">
                    <h2 className="text-2xl font-semibold mb-4">DataTable</h2>
                    <div className="mb-8">
                      <h3 className="font-bold mb-2">Basic</h3>
                      <DataTable data={data} columns={columns} />
                    </div>
                    <div className="mb-8">
                      <h3 className="font-bold mb-2">Loading</h3>
                      <DataTable data={data} columns={columns} loading />
                    </div>
                    <div className="mb-8">
                      <h3 className="font-bold mb-2">Selectable (multi)</h3>
                      <DataTable data={data} columns={columns} selectable />
                    </div>
                    <div className="mb-8">
                      <h3 className="font-bold mb-2">Selectable (single)</h3>
                      <DataTable data={data} columns={columns} selectable="single" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Empty Data</h3>
                      <DataTable data={[]} columns={columns} />
                    </div>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </div>
    </>
  )
}

export default App
