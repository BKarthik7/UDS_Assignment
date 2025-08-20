import React, { useState } from 'react';

export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean | 'single';
  onRowSelect?: (selectedRows: T[]) => void;
}

function sortData<T>(data: T[], column: Column<T>, direction: 'asc' | 'desc') {
  return [...data].sort((a, b) => {
    const aValue = a[column.dataIndex];
    const bValue = b[column.dataIndex];
    if (aValue === bValue) return 0;
    if (direction === 'asc') return aValue > bValue ? 1 : -1;
    return aValue < bValue ? 1 : -1;
  });
}

export function DataTable<T extends { [key: string]: any }>({
  data,
  columns,
  loading,
  selectable,
  onRowSelect,
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

  let displayData = data;
  const sortColumn = columns.find(col => col.key === sortKey && col.sortable);
  if (sortColumn) {
    displayData = sortData(data, sortColumn, sortDir);
  }

  function handleSort(col: Column<T>) {
    if (sortKey === col.key) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(col.key);
      setSortDir('asc');
    }
  }

  function handleSelectRow(idx: number) {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(idx)) {
      newSelected.delete(idx);
    } else {
      if (selectable === 'single') {
        newSelected.clear();
      }
      newSelected.add(idx);
    }
    setSelectedRows(newSelected);
    if (onRowSelect) {
      onRowSelect(Array.from(newSelected).map(i => displayData[i]));
    }
  }

  function handleSelectAll() {
    if (selectedRows.size === displayData.length) {
      setSelectedRows(new Set());
      onRowSelect?.([]);
    } else {
      const all = new Set<number>();
      displayData.forEach((_, i) => all.add(i));
      setSelectedRows(all);
      onRowSelect?.(displayData);
    }
  }

  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full bg-white rounded shadow" aria-label="Data Table">
        <thead>
          <tr>
            {selectable && (
              <th className="px-4 py-2 align-middle w-[48px]">
                <div className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    aria-label="Select all rows"
                    checked={selectedRows.size === displayData.length && displayData.length > 0}
                    onChange={handleSelectAll}
                    disabled={loading || displayData.length === 0}
                  />
                </div>
              </th>
            )}
            {columns.map(col => {
              let ariaSort: "none" | "ascending" | "descending" | "other" | undefined = "none";
              if (sortKey === col.key) {
                ariaSort = sortDir === "asc" ? "ascending" : "descending";
              }
              return (
                <th
                  key={col.key}
                  className="px-4 py-2 text-left font-semibold bg-gray-50"
                  aria-sort={ariaSort}
                >
                  <button
                    type="button"
                    className={`flex items-center gap-1 ${col.sortable ? 'cursor-pointer' : 'cursor-default'}`}
                    onClick={() => col.sortable && handleSort(col)}
                    aria-label={col.sortable ? `Sort by ${col.title}` : undefined}
                    disabled={!col.sortable}
                  >
                    {col.title}
                    {col.sortable && sortKey === col.key && (
                      <span>{sortDir === 'asc' ? '▲' : '▼'}</span>
                    )}
                  </button>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={columns.length + (selectable ? 1 : 0)} className="text-center py-8">
                <span className="animate-pulse text-gray-400">Loading...</span>
              </td>
            </tr>
          ) : displayData.length === 0 ? (
            <tr>
              <td colSpan={columns.length + (selectable ? 1 : 0)} className="text-center py-8 text-gray-500">
                No data available.
              </td>
            </tr>
          ) : (
            displayData.map((row, idx) => (
              <tr
                key={idx}
                className={`hover:bg-gray-50 ${selectedRows.has(idx) ? 'bg-blue-50' : ''}`}
                aria-selected={selectedRows.has(idx)}
              >
                {selectable && (
                  <td className="px-4 py-2 align-middle w-[48px]">
                    <div className="flex justify-center items-center">
                      <input
                        type="checkbox"
                        aria-label={`Select row ${idx + 1}`}
                        checked={selectedRows.has(idx)}
                        onChange={() => handleSelectRow(idx)}
                        disabled={loading}
                      />
                    </div>
                  </td>
                )}
                {columns.map(col => (
                  <td key={col.key} className="px-4 py-2 border-t">
                    {String(row[col.dataIndex])}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
