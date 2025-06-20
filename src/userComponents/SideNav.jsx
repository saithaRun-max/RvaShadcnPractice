
"use client";

import React from "react";

import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import LineChartInteractive from "./LineChartInteractive";

const SideNav = () => {
  return (
    <SidebarProvider >
      <AppSidebar />
     

    </SidebarProvider>
  );
};

export default SideNav;
