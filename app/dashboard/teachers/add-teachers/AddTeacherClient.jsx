"use client";
import AddEntityForm from "@/components/add-entity";

export default function AddTeacherClient() {
  return (
    <AddEntityForm
      formTitle="Add Teacher"
      entityType="teacher"
      onSuccess={(data) => console.log("Teacher added:", data)}
    />
  );
} 