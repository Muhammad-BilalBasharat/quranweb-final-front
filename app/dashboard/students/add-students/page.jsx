
export function generateMetadata() {
  return {
    title: "Add Student | QuranWeb",
    description: "Add a new student to QuranWeb.",
  };
}

import AddStudentClient from "./AddStudentClient";

export default function AddStudentPage() {
    return <AddStudentClient />;
}
