import {
    Settings,
    User,
    MessageSquareText,
    Library,
    BellRing,
    Users,
    UserPen,
    SquareLibrary,
    MessageSquarePlus

} from "lucide-react"

export const data = {
    user: {
        name: "Jhon Doe",
        email: "jhondoe@email.com",
        avatar: "/avatars/shadcn.jpg",
    },
    student: {
        navMain: [
            {
                title: "Class",
                url: "#",
                icon: Library,
                isActive: true,
                items: [
                    {
                        title: "Join Class",
                        url: "#",
                    },
                    {
                        title: "Enroll Class",
                        url: "#",
                    },
                ],
            },
        ],
        projects: [
            {
                name: "Profile",
                url: "#",
                icon: User,
            },
            {
                name: "Settings",
                url: "#",
                icon: Settings,
            },
            {
                name: "Notifications",
                url: "#",
                icon: BellRing,
            },
            {
                name: "Message Tutor",
                url: "#",
                icon: MessageSquareText,
            },
        ],
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
                        url: "#",
                    },
                    {
                        title: "List Students",
                        url: "#",
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
                        url: "#",
                    },
                    {
                        title: "List Teachers",
                        url: "#",
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
                        url: "#",
                    },
                    {
                        title: "List Courses",
                        url: "#",
                    },
                ],
            },
            {
                title: "Message",
                url: "#",
                icon: MessageSquarePlus,
                isActive: false,
                items: [
                    {
                        title: "Write Message",
                        url: "#",
                    },
                ],
            },
        ],
        projects: [
            {
                name: "Profile",
                url: "#",
                icon: User,
            },
            {
                name: "Settings",
                url: "#",
                icon: Settings,
            },
        ],
    },
    teacher: {
        navMain: [
            {
                title: "Class",
                url: "#",
                icon: Library,
                isActive: true,
                items: [
                    {
                        title: "Join Class",
                        url: "#",
                    },
                    {
                        title: "Enroll Class",
                        url: "#",
                    },
                ],
            },
        ],
        projects: [
            {
                name: "Profile",
                url: "#",
                icon: User,
            },
            {
                name: "Settings",
                url: "#",
                icon: Settings,
            },
            {
                name: "Notifications",
                url: "#",
                icon: BellRing,
            },
            {
                name: "Message Tutor",
                url: "#",
                icon: MessageSquareText,
            },
        ],
    }
}