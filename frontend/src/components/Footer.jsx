import { Linkedin, Instagram, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-slate-500 border-t">
      {/* Header Row */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="images/footerlogo.jpg" alt="ShipX" className="h-8" />
          <div className="flex items-center gap-2">
            <a className="w-8 h-8 flex items-center justify-center rounded-full border" href="#">
              <X size={14} />
            </a>
            <a className="w-8 h-8 flex items-center justify-center rounded-full border" href="#">
              <Instagram size={14} />
            </a>
            <a className="w-8 h-8 flex items-center justify-center rounded-full border" href="#">
              <Linkedin size={14} />
            </a>
          </div>
        </div>
        <p className="text-sm">©2025 ShipX. All Rights Reserved.</p>
      </div>

      <div className="border-t"></div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Subscribe */}
        <div className="space-y-4">
          <h4 className="font-semibold text-slate-900">Subscribe to Chainex</h4>
          <div className="flex items-center border rounded-full overflow-hidden max-w-sm">
            <input
              type="email"
              placeholder="Enter your Email"
              className="flex-1 px-4 py-2 outline-none text-sm"
            />
            <button className="bg-indigo-500 text-white px-5 py-2 rounded-full text-sm">
              Sign up
            </button>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-semibold text-slate-900 mb-4">Explore</h4>
          <ul className="space-y-3 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Solutions</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="font-semibold text-slate-900 mb-4">Solutions</h4>
          <ul className="space-y-3 text-sm">
            <li>Freight Management</li>
            <li>Order Tracking</li>
            <li>Carrier Integration</li>
            <li>Analytics Dashboard</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold text-slate-900 mb-4">Resources</h4>
          <ul className="space-y-3 text-sm">
            <li>Help Center</li>
            <li>FAQs</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
