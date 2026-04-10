"use client";

import NavList from "./components/NavList";
import UserProfile from "./components/UserProfile";

const DashboardLayout = () => (
  <div className="max-w-5xl mx-auto px-10 py-8">
    <h1 className="text-2xl text-black">Personal Settings</h1>
    <p className="text-sm text-grey-500 mt-3 mb-6">
      Update your basic info, career focus and account security
    </p>
    <UserProfile />
    <div>
      <aside>
        <NavList />
      </aside>
    </div>
  </div>
);

export default DashboardLayout;
