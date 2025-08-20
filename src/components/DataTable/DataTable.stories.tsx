import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import DataTable from './DataTable';
import type { DataTableProps, Column } from './DataTable';
import { userColumns, userData } from '../../data/userData';

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

const columns: Column<User>[] = userColumns;

const data: User[] = userData;

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
    const [ _ , setSelected] = useState<User[]>([]);
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
