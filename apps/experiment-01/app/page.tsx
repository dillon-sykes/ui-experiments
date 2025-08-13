import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Job Matcher - AI-Powered Career Intelligence",
  description: "Analyze job postings against your resume using advanced AI technology",
};

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
import { Button } from "@/components/ui/button";
import UserDropdown from "@/components/user-dropdown";
import { RiDashboardLine, RiUploadLine } from "@remixicon/react";
import { DashboardStats } from "@/components/dashboard-stats";
import { JobAnalysisTable } from "@/components/job-analysis-table";
import { ResumeUpload } from "@/components/resume-upload";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="overflow-hidden px-4 md:px-6 lg:px-8">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger className="-ms-4" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    <RiDashboardLine size={22} aria-hidden="true" />
                    <span className="sr-only">Dashboard</span>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Job Analysis</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex gap-3 ml-auto">
            <ResumeUpload />
            <UserDropdown />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 lg:gap-6 py-4 lg:py-6">
          {/* Page intro */}
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1">
              <h1 className="text-2xl font-semibold">Career Intelligence Dashboard</h1>
              <p className="text-sm text-muted-foreground">
                AI-powered job matching and career insights. Upload your resume and start analyzing job opportunities.
              </p>
            </div>
            <Button className="px-3">
              <RiUploadLine className="mr-2" size={16} />
              Analyze New Job
            </Button>
          </div>
          
          {/* Dashboard Stats */}
          <DashboardStats />
          
          {/* Job Analysis Table */}
          <div className="min-h-[100vh] flex-1 md:min-h-min">
            <JobAnalysisTable />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}