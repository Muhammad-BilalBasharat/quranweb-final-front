export function generateMetadata() {
  return {
    title: "Profile | QuranWeb",
    description: "Your profile page",
  };
}

import Profile from "@/components/profile";

export default function ProfilePage() {
    return (
        <Profile />
    );
}
