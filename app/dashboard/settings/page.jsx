export function generateMetadata() {
  return {
    title: "Settings | QuranWeb",
    description: "Manage your account settings and preferences.",
  };
}

import ChangePassword from "@/components/change-password";

export default function SettingsPage() {
    return (
        <>
            <ChangePassword />
        </>
    );
}
