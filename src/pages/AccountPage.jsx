import { useState } from "react";
import AccountSidebar from "../components/customeraccount/AccountSidebar";
import AccountOverview from "../components/customeraccount/AccountOverview";
import MyApplicationsSection from "../components/customeraccount/MyApplicationsSection";
import PaymentsSection from "../components/customeraccount/PaymentsSection";
import ProfileSettingsSection from "../components/customeraccount/ProfileSettingsSection";

export default function AccountPage() {
    const [activeSection, setActiveSection] = useState("overview");

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Sidebar */}
                <div className="md:col-span-1">
                    <AccountSidebar
                        activeSection={activeSection}
                        setActiveSection={setActiveSection}
                    />
                </div>

                {/* Main Content */}
                <div className="md:col-span-3">
                    <div className="transition-opacity duration-300 ease-in-out">
                        {activeSection === "overview" && <AccountOverview />}
                        {activeSection === "applications" && <MyApplicationsSection />}
                        {activeSection === "payments" && <PaymentsSection />}
                        {activeSection === "settings" && <ProfileSettingsSection />}
                    </div>

                </div>

            </div>
        </div>
    );
}