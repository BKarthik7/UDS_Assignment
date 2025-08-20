import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import DataTable, { type Column } from './DataTable';

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

const columns: Column<User>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'email', title: 'Email', dataIndex: 'email', sortable: true },
  { key: 'age', title: 'Age', dataIndex: 'age', sortable: true },
];

const data: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com', age: 24 },
  { id: 2, name: 'Bob', email: 'bob@example.com', age: 30 },
];

describe('DataTable', () => {
  it('renders table headers and data', () => {
    render(<DataTable data={data} columns={columns} />);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('alice@example.com')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
  });

  it('shows loading state', () => {
    render(<DataTable data={data} columns={columns} loading />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('shows empty state', () => {
    render(<DataTable data={[]} columns={columns} />);
    expect(screen.getByText('No data available.')).toBeInTheDocument();
  });

  it('sorts columns when header clicked', () => {
    render(<DataTable data={data} columns={columns} />);
    fireEvent.click(screen.getByRole('button', { name: /Sort by Name/i }));
    // After sort, Alice should be first
    const rows = screen.getAllByRole('row');
    expect(rows[1]).toHaveTextContent('Alice');
  });

  it('selects rows when checkbox clicked', () => {
    const handleSelect = jest.fn();
    render(<DataTable data={data} columns={columns} selectable onRowSelect={handleSelect} />);
    fireEvent.click(screen.getAllByRole('checkbox')[1]);
    expect(handleSelect).toHaveBeenCalled();
  });
});
