import { useState, useEffect } from "react";
import api from "../services/api";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    message: "",
    file: null,
  });

  const [toast, setToast] = useState("");
  const [toastType, setToastType] = useState("success");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      Object.keys(form).forEach(key => {
        if (form[key]) formData.append(key, form[key]);
      });

      const res = await api.post("/inquiries", formData);

      if (res.data.success) {
        setToastType("success");
        setToast(res.data.message);
        setForm({
          name: "",
          business: "",
          email: "",
          phone: "",
          message: "",
          file: null,
        });
      }
    } catch (error) {
      setToastType("error");
      setToast(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0b102a] to-[#11193d] py-20 px-6 relative">
      {toast && (
        <div
          className={`fixed top-5 right-5 px-4 py-2 rounded shadow text-white z-50
          ${toastType === "success" ? "bg-green-600" : "bg-red-600"}`}
        >
          {toast}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10"> 
        <img src="/images/map.jpg" alt="Map" className="rounded-xl w-full" />

      <div className="max-w-5xl mx-auto">
        <h2 className="text-white text-3xl font-bold mb-8">
          Send Us A Message
        </h2>

        <form onSubmit={submit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="input"
              required
            />
            <input
              placeholder="Business Name"
              value={form.business}
              onChange={(e) => setForm({ ...form, business: e.target.value })}
              className="input"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              placeholder="Email Id"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="input"
              required
            />
            <input
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="input"
            />
          </div>

          <input
            type="file"
            onChange={(e) => setForm({ ...form, file: e.target.files[0] })}
            className="file-input"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="input resize-none"
          />

          <button
            disabled={loading}
            className={`px-8 py-3 rounded font-semibold text-white cursor-pointer
              ${loading ? "bg-gray-500" : "bg-green-600 hover:bg-green-700"}`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
      </div>

      <style>
        {`
          .input {
            width: 100%;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid white;
            background: transparent;
            color: white;
            outline: none;
          }
          .input::placeholder {
            color: #d1d5db;
          }
          .file-input {
            width: 100%;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid white;
            color: white;
          }
        `}
      </style>
    </section>
  );
}
