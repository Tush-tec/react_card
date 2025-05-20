import React from "react";
import Table from "./Table";

const columns = [
  { label: "Name", key: "name" },
  { label: "Email", key: "email" },
  { label: "Role", key: "role" },
];

const users = [
  { name: "Alice", email: "alice@example.com", role: "Admin" },
  { name: "Bob", email: "bob@example.com", role: "Editor" },
  { name: "Charlie", email: "charlie@example.com", role: "Viewer" },
];

const handleEdit = (row) => {
  alert(`Edit user: ${row.name}`);
};

const handleDelete = (row) => {
  alert(`Delete user: ${row.name}`);
};

const actions = [
  { label: "Edit", type: "edit", onClick: handleEdit },
  { label: "Delete", type: "delete", onClick: handleDelete },
];

const UsersPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">User Table</h2>
      <Table columns={columns} data={users} actions={actions} />
    </div>
  );
};

export default UsersPage;
