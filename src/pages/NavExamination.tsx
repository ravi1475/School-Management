import {useState, useRef} from 'react'
import { Link } from "react-router-dom";

export const NavExamination = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
      const dropdownRefs = {
        master: useRef<HTMLDivElement | null>(null),
        students: useRef<HTMLDivElement | null>(null),
        fees: useRef<HTMLDivElement | null>(null),
        examination: useRef<HTMLDivElement | null>(null),
      };
      const toggleDropdown = (menu: string) => {
        setActiveDropdown((prev) => (prev === menu ? null : menu));
      };
      
  return (
    <div className="relative" ref={dropdownRefs.examination}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown("examination");
                  }}
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-3 py-2 border-b-2 text-sm font-medium"
                >
                  Examination System 
                </button>
                {activeDropdown === "examination" && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                    <Link to="/examination-system" className="block px-4 py-2 text-gray-700 hover:bg-gray-200" onClick={() => setActiveDropdown(null)}>
                      Examination Dashboard
                    </Link>
                    <Link to="/examination-schedule" className="block px-4 py-2 text-gray-700 hover:bg-gray-200" onClick={() => setActiveDropdown(null)}>
                      Schedule
                    </Link>
                  </div>
                )}
              </div>
  )
}
