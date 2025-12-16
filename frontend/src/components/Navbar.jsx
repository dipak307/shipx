import { useState } from "react";
import { Menu, X } from "lucide-react";
import {useNavigate} from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="absolute top-0 left-0 w-full z-50 text-white">
      <div className="px-4 sm:px-8 py-5 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/images/navlogo.jpg" alt="ShipX" className="h-8" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-sm">
          <li className="opacity-90 cursor-pointer">Home</li>
          <li className="opacity-70 hover:opacity-100 cursor-pointer">About</li>
          <li className="opacity-70 hover:opacity-100 cursor-pointer">Solutions</li>
          <li className="opacity-70 hover:opacity-100 cursor-pointer">Blog</li>
           <div className="opacity-70 cursor-pointer" onClick={()=>navigate("/dashboard")}>Dashboard →</div>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block bg-white/10 backdrop-blur px-6 py-2 rounded-full border border-white/20 hover:bg-white/20 transition">
          Get Started →
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-black/70 backdrop-blur border-t border-white/10 px-6 py-6 space-y-4 text-sm">
          <div className="opacity-90">Home</div>
          <div className="opacity-70">About</div>
          <div className="opacity-70">Solutions</div>
          <div className="opacity-70">Blog</div>
          <div className="opacity-70 cursor-pointer" onClick={()=>navigate("/dashboard")}>Dashboard →</div>

          <button className="w-full mt-4 bg-white/10 px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition">
            Get Started →
          </button>
        </div>
      )}
    </nav>
  );
}
