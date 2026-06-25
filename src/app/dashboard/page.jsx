"use client";

import AppShell from "@/app/components/AppShell";

// TODO: ResumeSection
const ResumePlaceholder = () => (
  <div className="text-sm text-gray-400 mt-2">My Resume (placeholder)</div>
);

// TODO: UserCard
const UserCardPlaceholder = () => (
  <div className="mt-auto text-sm text-gray-400 py-4">UserCard (placeholder)</div>
);

// TODO: UserMenu
const UserMenuPlaceholder = () => (
  <div className="w-9 h-9 rounded-full bg-gray-200" />
);

const DashboardPage = () => {
  return (
    <AppShell
      sidebar={
        <>
          <ResumePlaceholder />
          <UserCardPlaceholder />
        </>
      }
      topRight={<UserMenuPlaceholder />}
    >
      <div className="flex-1 flex items-center justify-center">
        <p className="text-gray-400">Chat area goes here</p>
      </div>
    </AppShell>
  );
};

export default DashboardPage;
