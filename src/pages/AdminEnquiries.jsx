import React, { useEffect, useState } from "react";

const AdminEnquiries = () => {
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
  fetch("http://localhost:8080/enquiries")
    .then((response) => {
      console.log("HTTP status:", response.status);
      console.log("Response OK:", response.ok);

      return response.json();
    })
    .then((data) => {
      console.log("Backend data:", data);
      console.log("Data type:", typeof data);
      console.log("Is array:", Array.isArray(data));

      setEnquiries(data.content);
    })
    .catch((error) => {
      console.error("Error fetching enquiries:", error);
    });
}, []);
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-3xl font-bold text-slate-800 mb-8">
        Admin Enquiries
      </h1>
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-200">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Name</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Email</th>
              <th className="p-4">Message</th>
            </tr>
          </thead>

          <tbody>
            {enquiries.map((enquiry) => (
              <tr key={enquiry.id} className="border-b">
                <td className="p-4">{enquiry.id}</td>

                <td className="p-4">{enquiry.fullname}</td>

                <td className="p-4">{enquiry.phoneNo}</td>

                <td className="p-4">{enquiry.email}</td>

                <td className="p-4">{enquiry.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminEnquiries;
