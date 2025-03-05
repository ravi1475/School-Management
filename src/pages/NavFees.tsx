import {useRef, useState} from 'react'
import { Link } from "react-router-dom";
export const NavFees = () => {

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
    <div className="relative" ref={dropdownRefs.fees}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDropdown("fees");
                      }}
                      className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-3 py-2 border-b-2 text-sm font-medium"
                    >
                      Fees 
                    </button>
                    {activeDropdown === "fees" && (
                      <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                        <Link to="/fee-structure" className="block px-4 py-2 text-gray-700 hover:bg-gray-200" onClick={() => setActiveDropdown(null)}>
                          Fee Structure
                        </Link>
                        <Link to="/fees/history" className="block px-4 py-2 text-gray-700 hover:bg-gray-200" onClick={() => setActiveDropdown(null)}>
                          Fee History
                        </Link>
                      </div>
                    )}
                  </div>
  )
}
