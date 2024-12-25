import React, { useState, useEffect } from "react";

const AllUsers = () => {
  const [users, setUsers] = useState([]); // To store the list of users
  const [loading, setLoading] = useState(true); // To handle the loading state
  const [error, setError] = useState(null); // To handle any errors

  useEffect(() => {
    // Fetch users data from the server
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://bookshop-server-theta.vercel.app/users");
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText} (Status: ${response.status})`);
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Unexpected response format: Expected an array of users.");
        }

        setUsers(data); // Set users data to state
      } catch (error) {
        setError(error.message); // Set error message
      } finally {
        setLoading(false); // Set loading to false once the request is complete
      }
    };

    fetchUsers();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  const handleRoleChange = (userId, newRole) => {
    // Handle role change (send update request to server or change state locally)
    console.log(`Changing role of user with id ${userId} to ${newRole}`);
    // Example: send a PUT request to update the user's role on the server
  };

  const handleActionChange = (userId, action) => {
    switch (action) {
      case "makeAdmin":
        handleRoleChange(userId, "admin");
        break;
      case "makeSeller":
        handleRoleChange(userId, "seller");
        break;
      case "edit":
        handleEditUser(userId);
        break;
      case "delete":
        handleDeleteUser(userId);
        break;
      default:
        break;
    }
  };

  const handleEditUser = (userId) => {
    console.log(`Edit user with id: ${userId}`);
    // Implement edit functionality here
  };

  const handleDeleteUser = (userId) => {
    console.log(`Delete user with id: ${userId}`);
    // Implement delete functionality here
  };

  if (loading) {
    return <div className="text-center py-10 text-lg">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-lg text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">All Users</h1>
      {users.length === 0 ? (
        <p className="text-center">No users found</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto bg-white shadow-lg rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Image</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Full Name</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Email</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Role</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Status</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="border-t hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <img
                      src={user.image || "https://via.placeholder.com/50"}
                      alt={user.fullName}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </td>
                  <td className="py-4 px-6">{user.fullName}</td>
                  <td className="py-4 px-6">{user.email}</td>
                  <td className="py-4 px-6">{user.role}</td>
                  <td className="py-4 px-6">{user.status}</td>
                  <td className="py-4 px-6">
                    <select
                      onChange={(e) => handleActionChange(user._id, e.target.value)}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg"
                    >
                      <option value="">Select Action</option>
                      {user.role !== "admin" && (
                        <option value="makeAdmin">Make Admin</option>
                      )}
                      {user.role !== "seller" && (
                        <option value="makeSeller">Make Seller</option>
                      )}
                      <option value="edit">Edit</option>
                      <option value="delete">Delete</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllUsers;
