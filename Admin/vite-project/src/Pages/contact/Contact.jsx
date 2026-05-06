// src/components/ContactList.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Name",
    selector: (row) => row.usernamee,
    sortable: true,
    cell: (row) => (
      <div className="font-medium text-gray-900">{row.usernamee}</div>
    ),
  },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Phone",
    selector: (row) => row.phone,
    sortable: true,
  },
  {
    name: "Message",
    selector: (row) => row.message,
    sortable: false,
    wrap: true,
    grow: 2,
  },
  {
    name: "Submitted At",
    selector: (row) => row.createdAt,
    sortable: true,
    format: (row) => new Date(row.createdAt).toLocaleString(),
  },
  {
    name: "Actions",
    right: true,
    cell: (row) => (
      <button
        onClick={() => row.handleDelete(row._id)}
        className="text-red-600 hover:text-red-800 font-medium transition-colors px-3 py-1 rounded hover:bg-red-50"
      >
        Delete
      </button>
    ),
  },
];

const customStyles = {
  table: {
    style: {
      backgroundColor: "transparent",
      color: "#111827",
    },
  },
  headRow: {
    style: {
      backgroundColor: "#f9fafb",
      borderBottom: "2px solid #e5e7eb",
      color: "#111827",
    },
  },
  headCells: {
    style: {
      fontSize: "0.95rem",
      fontWeight: 600,
      padding: "12px 16px",
      color: "#111827",
    },
  },
  rows: {
    style: {
      backgroundColor: "#ffffff",
      borderBottom: "1px solid #f3f4f6",
      fontSize: "0.95rem",
      "&:hover": {
        backgroundColor: "#f9fafb !important",
      },
    },
  },
  cells: {
    style: {
      padding: "12px 16px",
    },
  },
  pagination: {
    style: {
      backgroundColor: "#ffffff",
      color: "#374151",
      borderTop: "1px solid #e5e7eb",
      minHeight: "52px",
    },
    pageButtonsStyle: {
      color: "#374151",
      fill: "#374151",
      backgroundColor: "transparent",
      borderRadius: "4px",
      "&:hover:not(:disabled)": {
        backgroundColor: "#f3f4f6",
      },
      "&:focus": {
        outline: "none",
        backgroundColor: "#e5e7eb",
      },
    },
  },
};

const Contact = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterText, setFilterText] = useState("");

  const fetchContacts = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get("http://localhost:8000/api/contact");

      const result = response.data;
      // Assuming the response is { data: [...] } or just [...]
      const contacts = Array.isArray(result) ? result : result.data || [];
      setData(contacts);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message || "Failed to load contacts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) {
      return;
    }

    try {
      await axios.delete(`http://localhost:8000/api/contact/${id}`);

      // Remove from UI
      setData((prev) => prev.filter((item) => item._id !== id));
      alert("Contact deleted successfully");
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete contact: " + err.message);
    }
  };

  // Add delete handler to each row object
  const rowsWithDelete = data.map((row) => ({
    ...row,
    handleDelete,
  }));

  const filteredItems = rowsWithDelete.filter(
    (item) =>
      (item.usernamee?.toLowerCase() || "").includes(
        filterText.toLowerCase(),
      ) ||
      (item.email?.toLowerCase() || "").includes(filterText.toLowerCase()) ||
      (item.phone?.toLowerCase() || "").includes(filterText.toLowerCase()) ||
      (item.message?.toLowerCase() || "").includes(filterText.toLowerCase()),
  );

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="p-5 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-xl font-semibold text-gray-900">
          Contact Messages
        </h2>

        <input
          type="text"
          placeholder="Search by name, email, phone or message..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="bg-white border border-gray-300 text-gray-900 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500/40 w-full sm:w-96 transition"
        />
      </div>

      {loading ? (
        <div className="py-16 text-center text-gray-500">
          <div className="animate-spin inline-block w-8 h-8 border-4 border-red-500 border-t-transparent rounded-full mb-4"></div>
          <p>Loading contacts...</p>
        </div>
      ) : error ? (
        <div className="py-16 text-center">
          <p className="text-red-600 mb-4">Error: {error}</p>
          <button
            onClick={fetchContacts}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            Try Again
          </button>
        </div>
      ) : (
        <DataTable
          columns={columns}
          data={filteredItems}
          customStyles={customStyles}
          pagination
          paginationPerPage={10}
          paginationRowsPerPageOptions={[5, 10, 15, 20, 30]}
          highlightOnHover
          pointerOnHover
          responsive
          noDataComponent={
            <div className="py-10 text-gray-500 text-center">
              No matching contacts found
            </div>
          }
        />
      )}
    </div>
  );
};

export default Contact;
