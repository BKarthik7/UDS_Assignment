import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import DataTable from './DataTable';
import type { DataTableProps, Column } from './DataTable';

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
  { id: 3, name: 'Charlie', email: 'charlie@example.com', age: 28 },
];

const meta: Meta<DataTableProps<User>> = {
  title: 'Components/DataTable',
  component: DataTable,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<DataTableProps<User>>;

export const Default: Story = {
  args: {
    data,
    columns,
  },
};

export const Loading: Story = {
  args: {
    data,
    columns,
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns,
  },
};

export const Selectable: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<User[]>([]);
    return (
      <DataTable
        {...args}
        selectable
        onRowSelect={setSelected}
      />
    );
  },
  args: {
    data,
    columns,
  },
};

export const Sortable: Story = {
  args: {
    data,
    columns,
  },
};
