import React from 'react';
import DataTable from '../DataTable/DataTable';
import type { Column } from '../DataTable/DataTable';
import './DataTablePage.css';
import { userColumns, userData } from '../../data/userData';

type User = {
  id: number;
  name: string;
  email: string;
  age: number;
};

const columns: Column<User>[] = userColumns;

const data: User[] = userData;

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
