import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { School, CreditCard, Settings, LogOut, FileText, Bell } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const isActiveRoute = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
              <Link
                to="/"
                className={`${
                  isActiveRoute("/")
                    ? "border-indigo-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                } inline-flex items-center px-3 py-2 border-b-2 text-sm font-medium`}
              >
                Dashboard
              </Link>

              {/* Master Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => toggleDropdown("master")}
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-3 py-2 border-b-2 text-sm font-medium"
                >
                  Master ▼
                </button>
                {activeDropdown === "master" && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                    <Link to="/master" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                      Master Dashboard
                    </Link>
                    {/* Sub-dropdown inside Master */}
                    <div className="relative group">
                      <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200">
                        More Options →
                      </button>
                      <div className="absolute top-0 left-full mt-[-5px] w-40 bg-white shadow-lg rounded-md hidden group-hover:block">
                        <Link to="/master/option1" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                          Option 1
                        </Link>
                        <Link to="/master/option2" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                          Option 2
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Students Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("students")}
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-3 py-2 border-b-2 text-sm font-medium"
                >
                  Students ▼
                </button>
                {activeDropdown === "students" && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                    <Link to="/students" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                      Student List
                    </Link>
                    {/* Sub-dropdown */}
                    <div className="relative group">
                      <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200">
                        Student Actions →
                      </button>
                      <div className="absolute top-0 left-full mt-[-5px] w-40 bg-white shadow-lg rounded-md hidden group-hover:block">
                        <Link to="/students/add" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                          Add Student
                        </Link>
                        <Link to="/students/edit" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                          Edit Student
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Fees Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("fees")}
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-3 py-2 border-b-2 text-sm font-medium"
                >
                  Fees ▼
                </button>
                {activeDropdown === "fees" && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                    <Link to="/fee-structure" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                      Fee Structure
                    </Link>
                  </div>
                )}
              </div>

              {/* Examination System Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("examination")}
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-3 py-2 border-b-2 text-sm font-medium"
                >
                  Examination System ▼
                </button>
                {activeDropdown === "examination" && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                    <Link to="/examination-system" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                      Examination System
                    </Link>
                  </div>
                )}
              </div>

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
