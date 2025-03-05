import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { School, CreditCard, Settings, LogOut, FileText, Bell } from "lucide-react";
import { NavDashboard } from "../pages/NavDashboard";
import {NavMaster} from "../pages/NavMaster";
import { NavStudent } from "../pages/NavStudent";
import { NavFees } from "../pages/NavFees";
import {NavExamination} from "../pages/NavExamination"
// interface LayoutProps {
//   children: React.ReactNode;
// }

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRefs = {
    master: useRef<HTMLDivElement | null>(null),
    students: useRef<HTMLDivElement | null>(null),
    fees: useRef<HTMLDivElement | null>(null),
    examination: useRef<HTMLDivElement | null>(null),
  };

  // const toggleDropdown = (menu: string) => {
  //   setActiveDropdown((prev) => (prev === menu ? null : menu)`);
  // };

  // const isActiveRoute = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      let clickedInsideDropdown = false;
      Object.values(dropdownRefs).forEach((ref) => {
        if (ref.current && ref.current.contains(event.target as Node)) {
          clickedInsideDropdown = true;
        }
      });

      if (!clickedInsideDropdown) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <div className="flex items-center">
              <School className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900"></span>
            </div>

            {/* Navigation Links */}
            <div className="hidden sm:flex sm:space-x-8 items-center">
              {/* Dashboard (No Dropdown) */}
              < NavDashboard />

              {/* Master Dropdown */}
              < NavMaster />

              {/* Students Dropdown */}
              < NavStudent />              

              {/* Fees Dropdown */}
              < NavFees />

              {/* Examination System Dropdown */}
              < NavExamination />

              {/* Notifications & Reports (No Dropdowns) */}
              <Link to="/notifications" className="px-3 py-2 text-gray-500 hover:border-gray-300 hover:text-gray-700 border-b-2 text-sm font-medium">
                <Bell className="h-4 w-4 mr-1 inline" /> Notifications
              </Link>
              <Link to="/reports" className="px-3 py-2 text-gray-500 hover:border-gray-300 hover:text-gray-700 border-b-2 text-sm font-medium">
                Reports
              </Link>
            </div>

            {/* Settings & Logout Icons */}
            <div className="hidden sm:flex sm:items-center space-x-4">
              <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none">
                <Settings className="h-6 w-6" />
              </button>
              <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none">
                <LogOut className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
};

export default Layout;
