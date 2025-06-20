import { ListDataTable } from "@/components/list-data-table";

export function generateMetadata() {
  return {
    title: "List Students | QuranWeb",
    description: "View all students in QuranWeb.",
  };
}

export default function ListStudentPage() {
    return (
        <div>
            <ListDataTable />
        </div>
    )
}