import React from 'react';
import DataTable from '../DataTable/DataTable';
import type { Column } from '../DataTable/DataTable';
import './DataTablePage.css';

type User = {
  id: number;
  name: string;
  email: string;
  age: number;
};

const columns: Column<User>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'email', title: 'Email', dataIndex: 'email', sortable: true },
  { key: 'age', title: 'Age', dataIndex: 'age', sortable: true },
];

const data: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com', age: 24 },
  { id: 2, name: 'Bob', email: 'bob@example.com', age: 30 },
];

export const DataTablePage: React.FC = () => (
  <article className="datatable-page-root">
    <h2>DataTable Component Demo</h2>
    <div>
      <h3>Basic</h3>
      <DataTable data={data} columns={columns} />
    </div>
    <div>
      <h3>Loading</h3>
      <DataTable data={data} columns={columns} loading />
    </div>
    <div>
      <h3>Selectable (multi)</h3>
      <DataTable data={data} columns={columns} selectable />
    </div>
    <div>
      <h3>Selectable (single)</h3>
      <DataTable data={data} columns={columns} selectable="single" />
    </div>
    <div>
      <h3>Empty Data</h3>
      <DataTable data={[]} columns={columns} />
    </div>
  </article>
);
