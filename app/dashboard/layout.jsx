"use client";
import { AppSidebar } from "@/components/app-sidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"

export default function RootLayout({ children }) {

    const pathname = usePathname();
    const segments = pathname.replace(/^\/|\/$/g, "").split("/");

    const labelMap = {
        dashboard: "Dashboard",
        profile: "Profile",
        settings: "Settings",
    };

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header
                    className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
                        <Breadcrumb>
                            <BreadcrumbList>
                                {segments.map((seg, idx) => (
                                    <span key={seg} className="flex items-center">
                                        <BreadcrumbItem>
                                            {idx < segments.length - 1 ? (
                                                <BreadcrumbLink href={"/" + segments.slice(0, idx + 1).join("/")}>
                                                    {labelMap[seg] || seg.charAt(0).toUpperCase() + seg.slice(1)}
                                                </BreadcrumbLink>
                                            ) : (
                                                <BreadcrumbPage>
                                                    {labelMap[seg] || seg.charAt(0).toUpperCase() + seg.slice(1)}
                                                </BreadcrumbPage>
                                            )}
                                        </BreadcrumbItem>
                                        {idx < segments.length - 1 && (
                                            <BreadcrumbSeparator />
                                        )}
                                    </span>
                                ))}
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}