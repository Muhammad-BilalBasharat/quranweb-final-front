"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { data } from "@/data/pagesLinks"

export function AppSidebar({
  ...props
}) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/* The Header Content Like Web Name And Icon Will Go Here */}
      </SidebarHeader>

{/* Data Will Be Shown According To the Roles */}
      <SidebarContent>
        {/* Dropdown Content */}
        <NavMain items={data.teacher.navMain} />
        {/* Pages Content */}
        <NavProjects projects={data.teacher.projects} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
