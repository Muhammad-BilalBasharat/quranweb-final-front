"use client";
import AddEntityForm from "@/components/add-entity";

export default function AddStudentPage() {
    return (
        <>
            <AddEntityForm
                formTitle="Add Student"
                entityType="student"
                onSuccess={(data) => console.log("Student added:", data)}
            />
        </>
    );
}
