import { useEffect, useState } from "react";
import { FaTrash, FaEdit, FaEye } from "react-icons/fa";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [toast, setToast] = useState("");

  const [showEditModal, setShowEditModal] = useState(false);
  const [editData, setEditData] = useState({
    id: "",
    name: "",
    business: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showViewModal, setShowViewModal] = useState(false);
  const [viewData, setViewData] = useState(null);
  
  const navigate = useNavigate();

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const fetchData = async () => {
    try {
      const res = await api.get("/all-inquiry");
      setData(res.data.data);
      setToast("Data fetched successfully");
    } catch {
      setToast("Failed to fetch data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const remove = async (id) => {
    if (!window.confirm("Delete this inquiry?")) return;

    try {
      const res = await api.delete(`/inquiry/${id}`);
      if (res.data.success) {
        setData((prev) => prev.filter((d) => d.id !== id));
        setToast("Inquiry deleted");
      }
    } catch {
      setToast("Delete failed");
    }
  };

  const openView = (item) => {
    setViewData(item);
    setShowViewModal(true);
  };

  const openEdit = (item) => {
    setEditData(item);
    setShowEditModal(true);
  };

  const updateInquiry = async () => {
    try {
      const res = await api.put(`/update-inquiry/${editData.id}`, editData);
      if (res.data.success) {
        setData((prev) =>
          prev.map((d) => (d.id === editData.id ? editData : d))
        );
        setToast("Inquiry updated");
        setShowEditModal(false);
      }
    } catch {
      setToast("Update failed");
    }
  };

  return (
    <div className="p-4 md:p-10 min-h-screen bg-[#f5deb3]">
      {toast && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow z-50">
          {toast}
        </div>
      )}
     <div className="flex items-center justify-between mb-6">
  <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
    Inquiries Dashboard
  </h1>

  <button
    className="px-4 py-2 text-sm cursor-pointer font-medium text-white bg-indigo-600 
               rounded-lg hover:bg-indigo-700 transition duration-200"
  onClick={()=>navigate("/")}>
    Back
  </button>
</div>


      {/* TABLE */}
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="w-full min-w-[900px] border-collapse">
          <thead className="bg-gray-800 text-white text-sm">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Business</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Message</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="6" className="p-4 text-center">
                  No inquiries found
                </td>
              </tr>
            ) : (
              data.map((i) => (
                <tr key={i.id} className="border-b hover:bg-gray-100">
                  <td className="p-3">{i.name}</td>
                  <td className="p-3">{i.business}</td>
                  <td className="p-3">{i.email}</td>
                  <td className="p-3">{i.phone}</td>
                  <td className="p-3 truncate max-w-xs">{i.message}</td>

                  <td className="p-3 flex justify-center gap-4">
                    <button onClick={() => openView(i)} className="text-green-600">
                      <FaEye className="cursor-pointer"/>
                    </button>
                    <button onClick={() => openEdit(i)} className="text-blue-600">
                      <FaEdit className="cursor-pointer" />
                    </button>
                    <button onClick={() => remove(i.id)} className="text-red-600">
                      <FaTrash className="cursor-pointer"/>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* VIEW MODAL */}
      {showViewModal && viewData && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Inquiry Details</h2>

            <div className="space-y-2 text-sm">
              <p><b>Name:</b> {viewData.name}</p>
              <p><b>Business:</b> {viewData.business}</p>
              <p><b>Email:</b> {viewData.email}</p>
              <p><b>Phone:</b> {viewData.phone}</p>
              <p><b>Message:</b> {viewData.message}</p>
            </div>

            <div className="text-right mt-4">
              <button
                onClick={() => setShowViewModal(false)}
                className="px-4 py-2 cursor-pointer bg-green-600 text-white rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* EDIT MODAL */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Update Inquiry</h2>

            {["name", "business", "email", "phone"].map((field) => (
              <input
                key={field}
                className="w-full border p-2 mb-3 rounded"
                placeholder={field}
                value={editData[field]}
                onChange={(e) =>
                  setEditData({ ...editData, [field]: e.target.value })
                }
              />
            ))}

            <textarea
              className="w-full border p-2 mb-4 rounded"
              placeholder="Message"
              value={editData.message}
              onChange={(e) =>
                setEditData({ ...editData, message: e.target.value })
              }
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowEditModal(false)}
                className="px-4 cursor-pointer py-2 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={updateInquiry}
                className="px-4 cursor-pointer py-2 bg-green-600 text-white rounded"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
