import {
    Settings,
    User,
    Users,
    UserPen,
    SquareLibrary,
    MessageSquarePlus,
    Contact
} from "lucide-react"

export const data = {
    user: {
        name: "Jhon Doe",
        email: "jhondoe@email.com",
        avatar: "/avatars/shadcn.jpg",
    },
    admin: {
        navMain: [
            {
                title: "Students",
                url: "#",
                icon: Users,
                isActive: true,
                items: [
                    {
                        title: "Add Students",
                        url: "/dashboard/students/add-students",
                    },
                    {
                        title: "List Students",
                        url: "/dashboard/students/list-students",
                    },
                ],
            },
            {
                title: "Teachers",
                url: "#",
                icon: UserPen,
                isActive: false,
                items: [
                    {
                        title: "Add Teachers",
                        url: "/dashboard/teachers/add-teachers",
                    },
                    {
                        title: "List Teachers",
                        url: "/dashboard/teachers/list-teachers",
                    },
                ],
            },
            {
                title: "Courses",
                url: "#",
                icon: SquareLibrary,
                isActive: false,
                items: [
                    {
                        title: "Add Courses",
                        url: "/dashboard/courses/add-courses",
                    },
                    {
                        title: "List Courses",
                        url: "/dashboard/courses/list-courses",
                    },
                ],
            },
        ],
        generals: [
            {
                name: "Profile",
                url: "/dashboard/profile",
                icon: User,
            },
            {
                name: "Settings",
                url: "/dashboard/settings",
                icon: Settings,
            },
            {
                name: "Contact Info",
                url: "/dashboard/contact-info",
                icon: Contact,
            },
        ],
    }
}