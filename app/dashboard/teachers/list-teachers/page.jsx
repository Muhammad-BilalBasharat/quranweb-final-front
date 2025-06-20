import { ListDataTable } from "@/components/list-data-table";

export function generateMetadata() {
  return {
    title: "List Teachers | QuranWeb",
    description: "View all teachers in QuranWeb.",
  };
}

export default function ListTeachersPage() {
    return (
        <div>
            <ListDataTable entityType="teacher" />
        </div>
    );
}
