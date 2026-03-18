import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUser,
  faHouse,
  faLayerGroup,
  faCircleInfo,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import logo from "../../assets/Home/new logo.png";
import { useEffect } from "react";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [navSearch, setNavSearch] = useState("");
  const [mobileSearch, setMobileSearch] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  const userEmail = sessionStorage.getItem("userEmail");
  const isAdmin = userEmail && userEmail.endsWith("@eseva.com");
  /* ---------------- NOTIFICATION STATES ---------------- */

  const [unreadCount, setUnreadCount] = useState(0);
  const [notifications, setNotifications] = useState([]);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const userId = sessionStorage.getItem("userId");

  /* ---------------- CLOSE NOTIFICATION ON OUTSIDE CLICK ---------------- */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isNotificationOpen && !event.target.closest('.notification-dropdown')) {
        setIsNotificationOpen(false);
      }
      if (isDropdownOpen && !event.target.closest('.services-dropdown')) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isNotificationOpen, isDropdownOpen]);

  /* ---------------- FETCH NOTIFICATIONS ---------------- */

  const fetchNotifications = async () => {
    try {
      const res = await fetch(`https://e-seva-kendra-b.onrender.com/notifications/${userId}`);
      const data = await res.json();
      setNotifications(data.slice(0, 2)); // Only latest 2 notifications
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  useEffect(() => {
    if (!userId) return;

    const fetchUnreadCount = async () => {
      try {
        const res = await fetch(
          `https://e-seva-kendra-b.onrender.com/notifications/unread-count/${userId}`,
        );
        const count = await res.json();
        setUnreadCount(count);
      } catch (error) {
        console.error("Error fetching unread count:", error);
      }
    };

    fetchUnreadCount();
    fetchNotifications();

    const interval = setInterval(() => {
      fetchUnreadCount();
      fetchNotifications();
    }, 10000);

    return () => clearInterval(interval);
  }, [userId]);

  const services = [
    { name: "PAN Card (पॅन कार्ड)", slug: "pan" },
    { name: "Systematic Investment Plan (SIP) (सिस्टेमॅटिक इन्व्हेस्टमेंट प्लान)", slug: "sip" },
    { name: "Voter ID (मतदार ओळखपत्र)", slug: "voter" },
    { name: "Passport (पासपोर्ट)", slug: "passport" },
    { name: "Ration Card (रेशन कार्ड)", slug: "ration-card" },
    { name: "Gazette Certificate (गॅझेट प्रमाणपत्र)", slug: "gazette" },
    { name: "Shop Act (दुकान नोंदणी)", slug: "shop-act" },
    { name: "Udyam Aadhaar (उद्यम आधार)", slug: "udyog-aadhaar" },
    { name: "FSSAI Food License (फूड लायसन्स)", slug: "food" },
    { name: "Income Tax Return (ITR) (उत्पन्न कर विवरण)", slug: "ITR" },
    { name: "Import Export Code (IEC) (आयात निर्यात कोड)", slug: "iec" },
    { name: "Goods and Services Tax (GST) (वस्तू व सेवा कर)", slug: "gst" },
    { name: "Insurance (विमा)", slug: "insurance" },
    { name: "Mutual Fund (म्युच्युअल फंड)", slug: "mutual-fund" },
    { name: "Rent Agreement (भाडे करार)", slug: "rent-agreement" },
    { name: "Vehicle Insurance (वाहन विमा)", slug: "vehicle-insurance" },
    { name: "Demat Account (डीमॅट खाते)", slug: "demat-account" },
    { name: "Loan Services (कर्ज सेवा)", slug: "loan" },
    { name: "Company Registration (कंपनी नोंदणी)", slug: "company-registration" },
    { name: "Government Bonds (सरकारी रोखे)", slug: "government-bonds" },
    { name: "Driving License (वाहन चालक परवाना)", slug: "driving-license" },
    { name: "Aadhaar Card (आधार कार्ड)", slug: "aadhaar-card" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b shadow-sm">
      <div className="w-full px-4 sm:px-8">
        {/* TOP ROW */}
        <div className="flex items-center justify-between h-16 gap-2">
          {/* LOGO */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src={logo}
              alt="Shree Om Sai Multi Services"
              className="h-8 sm:h-12 w-auto object-contain hover:scale-105 transition"
            />
          </Link>

          {/* MOBILE SEARCH */}
          <div className="md:hidden flex-1 relative">
            <input
              type="text"
              placeholder="Search..."
              value={mobileSearch}
              onChange={(e) => setMobileSearch(e.target.value)}
              onFocus={() => setIsMobileSearchOpen(true)}
              onBlur={() => setTimeout(() => setIsMobileSearchOpen(false), 200)}
              className="w-full px-2 py-1.5 border rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500"
            />
            {isMobileSearchOpen && mobileSearch && (
              <div className="absolute top-full mt-2 left-[-2rem] right-[-2rem] bg-white shadow-xl rounded-xl z-50 border">
                <div className="max-h-60 overflow-y-auto">
                  {services
                    .filter((service) =>
                      service.name
                        .toLowerCase()
                        .includes(mobileSearch.toLowerCase()),
                    )
                    .map((service, index) => (
                      <Link
                        key={index}
                        to={`/apply/${service.slug}`}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          window.location.href = `/apply/${service.slug}`;
                        }}
                        className="block px-3 py-2 text-xs hover:bg-blue-50 hover:text-blue-600"
                      >
                        {service.name}
                      </Link>
                    ))}
                  {services.filter((service) =>
                    service.name
                      .toLowerCase()
                      .includes(mobileSearch.toLowerCase()),
                  ).length === 0 && (
                    <div className="px-3 py-2 text-xs text-gray-500">
                      No services found
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center text-sm font-medium text-slate-700 ml-auto transition-all duration-200">
            <NavLink
              to="/"
              onClick={() => setIsDropdownOpen(false)}
              className={({ isActive }) =>
                `px-4 flex items-center gap-2 hover:text-blue-600 relative ${
                  isActive
                    ? "text-blue-600 after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-blue-600"
                    : ""
                }`
              }
            >
              <FontAwesomeIcon icon={faHouse} className="text-xs" />
              Home
            </NavLink>

            <div className="h-5 w-px bg-slate-300" />

            {/* SERVICES DROPDOWN */}
            <div className="relative px-4 services-dropdown">
              <div className="flex items-center gap-1">
                <NavLink
                  to="/service"
                  className={({ isActive }) =>
                    `flex items-center gap-2 hover:text-blue-600 relative ${
                      isActive
                        ? "text-blue-600 after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-blue-600"
                        : ""
                    }`
                  }
                >
                  <FontAwesomeIcon icon={faLayerGroup} className="text-xs" />
                  Services
                </NavLink>

                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {isDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 w-72 bg-white shadow-2xl rounded-xl z-50 border">
                  <div className="p-3 border-b">
                    <input
                      type="text"
                      placeholder="Search service..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-3 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="max-h-80 overflow-y-auto">
                    {services
                      .filter((service) =>
                        service.name
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()),
                      )
                      .map((service, index) => (
                        <Link
                          key={index}
                          to={`/apply/${service.slug}`}
                          onClick={() => setIsDropdownOpen(false)}
                          className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600"
                        >
                          {service.name}
                        </Link>
                      ))}
                  </div>
                </div>
              )}
            </div>

            <div className="h-5 w-px bg-slate-300" />

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-4 flex items-center gap-2 hover:text-blue-600 relative ${
                  isActive
                    ? "text-blue-600 after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-blue-600"
                    : ""
                }`
              }
            >
              <FontAwesomeIcon icon={faCircleInfo} className="text-xs" />
              About
            </NavLink>

            <div className="h-5 w-px bg-slate-300" />
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-4 flex items-center gap-2 hover:text-blue-600 relative ${
                  isActive
                    ? "text-blue-600 after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-blue-600"
                    : ""
                }`
              }
            >
              <FontAwesomeIcon icon={faAddressBook} className="text-xs" />
              Contact
            </NavLink>

            <div className="h-5 w-px bg-slate-300 mx-4" />

            {/* SEARCH */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={navSearch}
                onChange={(e) => setNavSearch(e.target.value)}
                onFocus={() => setIsSearchOpen(true)}
                onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
                className="px-3 py-1.5 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 mr-6 w-56 transition-all"
              />
              {isSearchOpen && navSearch && (
                <div className="absolute top-full mt-2 w-72 bg-white shadow-xl rounded-xl z-50 right-0">
                  <div className="max-h-80 overflow-y-auto">
                    {services
                      .filter((service) =>
                        service.name
                          .toLowerCase()
                          .includes(navSearch.toLowerCase()),
                      )
                      .map((service, index) => (
                        <Link
                          key={index}
                          to={`/apply/${service.slug}`}
                          onMouseDown={(e) => {
                            e.preventDefault();
                            window.location.href = `/apply/${service.slug}`;
                          }}
                          className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600"
                        >
                          {service.name}
                        </Link>
                      ))}
                    {services.filter((service) =>
                      service.name
                        .toLowerCase()
                        .includes(navSearch.toLowerCase()),
                    ).length === 0 && (
                      <div className="px-4 py-2 text-sm text-gray-500">
                        No services found
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            {/* Desktop Buttons */}
            {!isLoggedIn || isAdmin ? (
              <>
               <Link
  to="/login"
  className="hidden md:block px-4 py-2 rounded-lg border border-slate-300 text-sm font-medium hover:bg-slate-50"
>
  Login
</Link>
<Link
  to="/register"
  className="hidden md:block px-5 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 text-white text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
>
  Get Started
</Link>
              
              </>
            ) : (
              <>
                {/* Notification */}

                {/* 🔔 NOTIFICATION BELL */}

                <div className="relative flex notification-dropdown">
                  <button
                    onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                    className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 hover:scale-105 transition"
                  >
                    <FontAwesomeIcon icon={faBell} className="text-gray-600" />

                    {/* Always show badge for testing */}
                    {unreadCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold min-w-[18px] h-[18px] flex items-center justify-center rounded-full">
                        {unreadCount}
                      </span>
                    )}
                  </button>
                  {/* 🔔 DROPDOWN */}

                  {isNotificationOpen && (
                    <div className="fixed left-1/2 -translate-x-1/2 sm:absolute sm:left-auto sm:translate-x-0 sm:right-0 top-16 sm:top-auto sm:mt-12 w-[90vw] sm:w-80 bg-white shadow-xl rounded-xl border z-50">
                      <div className="p-3 border-b font-semibold">
                        Notifications
                      </div>

                      {notifications.length === 0 ? (
                        <div className="p-4 text-sm text-gray-500">
                          No notifications
                        </div>
                      ) : (
                        notifications.map((n) => (
                          <div
                            key={n.id}
                            className="p-3 border-b hover:bg-gray-50 cursor-pointer"
                          >
                            <div className="text-sm font-medium">{n.title}</div>
                            <div className="text-xs text-gray-500">
                              {n.message}
                            </div>
                          </div>
                        ))
                      )}

                      <Link
                        to="/notifications"
                        onClick={() => setIsNotificationOpen(false)}
                        className="block text-center text-sm text-blue-600 p-3 hover:bg-gray-50"
                      >
                        View all notifications
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  to="/account"
                  className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition text-sm font-medium cursor-pointer"
                >
                  <FontAwesomeIcon icon={faUser} className="text-gray-600" />
                  Profile
                </Link>

                <button
                  onClick={() => {
                    sessionStorage.clear();
                    window.location.href = "/";
                  }}
                  className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 text-white transition text-sm font-medium cursor-pointer shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  Logout
                </button>
              </>
            )}

            {/* Mobile Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1 flex-shrink-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="w-5 h-0.5 bg-slate-800"></span>
              <span className="w-5 h-0.5 bg-slate-800"></span>
              <span className="w-5 h-0.5 bg-slate-800"></span>
            </button>
          </div>

          {/* MOBILE SLIDE MENU */}
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "max-h-screen py-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col space-y-4 px-4 text-sm font-medium text-slate-700">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>

            <Link to="/service" onClick={() => setIsMobileMenuOpen(false)}>
              Services
            </Link>

            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </Link>

            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Link>

            {!isLoggedIn || isAdmin ? (
              <>
                <Link
                  to="/login"
                  className="pt-2 border-t"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/account"
                  className="pt-2 border-t"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Profile
                </Link>

                <button
                  className="text-left"
                  onClick={() => {
                    sessionStorage.removeItem("isLoggedIn");
                    setIsMobileMenuOpen(false);
                    window.location.href = "/";
                  }}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
