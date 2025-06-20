export function generateMetadata() {
  return {
    title: "Dashboard | QuranWeb",
    description: "Your dashboard overview",
  };
}

import DashboardClient from "./DashboardClient";

export default function DashboardPage() {
  return <DashboardClient />;
}
