import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import DataTable from './DataTable';
import type { Column } from './DataTable';
import { userColumns, userData } from '../../data/userData';

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

const columns: Column<User>[] = userColumns;

const data: User[] = userData;

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
