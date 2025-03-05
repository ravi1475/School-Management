import { useRef, useState, } from 'react'
import { Link } from "react-router-dom";

export const NavStudent = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const dropdownRefs = {
        students: useRef<HTMLDivElement | null>(null)
    };
    const toggleDropdown = (menu: string) => {
        setActiveDropdown((prev) => (prev === menu ? null : menu));
    };
    return (
        <div className="relative" ref={dropdownRefs.students}>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown("students");
                }}
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-3 py-2 border-b-2 text-sm font-medium"
            >
                Students
            </button>
            {activeDropdown === "students" && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                    <Link to="/students" className="block px-4 py-2 text-gray-700 hover:bg-gray-200" onClick={() => setActiveDropdown(null)}>
                        Student List
                    </Link>
                    <Link to="/StudentRegistrationForm" className="block px-4 py-2 text-gray-700 hover:bg-gray-200" onClick={() => setActiveDropdown(null)}>
                        Add Student
                    </Link>
                </div>
            )}
        </div>
    )
}
