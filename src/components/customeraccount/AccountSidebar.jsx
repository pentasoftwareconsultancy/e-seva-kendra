import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import {
    faChartLine,
    faFileAlt,
    faCreditCard,
    faUserCog,
    faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function AccountSidebar({ activeSection, setActiveSection }) {
    const menuItems = [
        { id: "overview", label: "Overview", icon: faChartLine },
        { id: "applications", label: "My Applications", icon: faFileAlt },
        { id: "payments", label: "Payments", icon: faCreditCard },
        { id: "settings", label: "Profile Settings", icon: faUserCog },
    ];

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        window.location.href = "/";
    };

    return (
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between h-full border border-gray-100">
            <div>
                <h3 className="flex items-center gap-3 text-lg font-semibold text-gray-800 mb-6">
                    <FontAwesomeIcon icon={faUserCircle} className="text-blue-600 text-xl" />
                    My Account
                </h3>

                <div className="flex flex-col space-y-2">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveSection(item.id)}
                            className={`flex items-center gap-3 w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${activeSection === item.id
                                    ? "bg-blue-600 text-white shadow-sm"
                                    : "text-gray-600 hover:bg-gray-100"
                                }`}
                        >
                            <FontAwesomeIcon icon={item.icon} />
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="pt-6 border-t mt-6">
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition"
                >
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    Logout
                </button>
            </div>
        </div>
    );
}