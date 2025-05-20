import React from "react";

const Table = ({ columns = [], data = [], actions = [] }) => {
  return (
    <div className="w-full overflow-x-auto rounded-lg border bg-white">
      <table className="min-w-full text-left border-collapse">
        <thead className="bg-gray-100 text-gray-700 text-sm font-semibold">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-3 border-b">
                {col.label}
              </th>
            ))}
            {actions.length > 0 && <th className="px-4 py-3 border-b">Actions</th>}
          </tr>
        </thead>
        <tbody className="text-gray-800 text-sm">
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length + (actions.length ? 1 : 0)} className="px-4 py-6 text-center text-gray-500">
                No data available.
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50">
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-3 border-b">
                    {row[col.key]}
                  </td>
                ))}
                {actions.length > 0 && (
                  <td className="px-4 py-3 border-b">
                    <div className="flex gap-2">
                      {actions.map((action, i) => (
                        <button
                          key={i}
                          onClick={() => action.onClick(row)}
                          className={`px-3 py-1 text-sm rounded ${
                            action.type === "edit"
                              ? "bg-blue-500 text-white"
                              : action.type === "delete"
                              ? "bg-red-500 text-white"
                              : "bg-gray-300 text-black"
                          } hover:opacity-80`}
                        >
                          {action.label}
                        </button>
                      ))}
                    </div>
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
