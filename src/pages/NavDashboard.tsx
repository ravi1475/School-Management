import { Link, useLocation } from "react-router-dom";

export const NavDashboard = () => {
    const location = useLocation();

    // Function to check if the current route is active
    const isActiveRoute = (path: string) => location.pathname === path;

    return (
        <Link
            to="/"
            className={`${isActiveRoute("/")
                ? "border-indigo-500 text-gray-900"
                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                } inline-flex items-center px-3 py-2 border-b-2 text-sm font-medium`}
        >
            Dashboard
        </Link>
    );
};
