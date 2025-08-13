import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Job Matcher - AI-Powered Career Intelligence",
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
import FeedbackDialog from "@/components/feedback-dialog";
import JobAnalysisTable from "@/components/job-analysis-table";
import { RiBrainLine } from "@remixicon/react";
import { StatsGrid } from "@/components/stats-grid";

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
                    <RiBrainLine size={22} aria-hidden="true" />
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
            <FeedbackDialog />
            <UserDropdown />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 lg:gap-6 py-4 lg:py-6">
          {/* Page intro */}
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1">
              <h1 className="text-2xl font-semibold">Welcome back, Sarah!</h1>
              <p className="text-sm text-muted-foreground">
                Here&rsquo;s your AI-powered job matching dashboard. Analyze new opportunities and track your career progress.
              </p>
            </div>
            <Button className="px-3">Upload Resume</Button>
          </div>
          {/* Analytics */}
          <StatsGrid
            stats={[
              {
                title: "Jobs Analyzed",
                value: "127",
                change: {
                  value: "+23%",
                  trend: "up",
                },
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    fill="currentColor"
                  >
                    <path d="M9 0v2.013a8.001 8.001 0 1 0 5.905 14.258l1.424 1.422A9.958 9.958 0 0 1 10 19.951c-5.523 0-10-4.478-10-10C0 4.765 3.947.5 9 0Zm10.95 10.95a9.954 9.954 0 0 1-2.207 5.329l-1.423-1.423a7.96 7.96 0 0 0 1.618-3.905h2.013ZM11.002 0c4.724.47 8.48 4.227 8.95 8.95h-2.013a8.004 8.004 0 0 0-6.937-6.937V0Z" />
                  </svg>
                ),
              },
              {
                title: "Good Matches",
                value: "42",
                change: {
                  value: "+18%",
                  trend: "up",
                },
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={19}
                    fill="currentColor"
                  >
                    <path d="M9 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S-1 15.523-1 10 3.477 0 9 0Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm3.833 3.337a.596.596 0 0 1 .763.067.59.59 0 0 1 .063.76c-2.18 3.046-3.38 4.678-3.598 4.897a1.5 1.5 0 0 1-2.122-2.122c.374-.373 2.005-1.574 4.894-3.602ZM15.5 9a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-11 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm2.318-3.596a1 1 0 1 1-1.414 1.414 1 1 0 0 1 1.414-1.414ZM10 3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
                  </svg>
                ),
              },
              {
                title: "Match Rate",
                value: "78%",
                change: {
                  value: "+12%",
                  trend: "up",
                },
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    fill="currentColor"
                  >
                    <path d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm3.833 3.337a.596.596 0 0 1 .763.067.59.59 0 0 1 .063.76c-2.18 3.046-3.38 4.678-3.598 4.897a1.5 1.5 0 0 1-2.122-2.122c.374-.373 2.005-1.574 4.894-3.602ZM15.5 9a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-11 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm2.318-3.596a1 1 0 1 1-1.414 1.414 1 1 0 0 1 1.414-1.414ZM10 3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
                  </svg>
                ),
              },
              {
                title: "Avg Score",
                value: "84.2",
                change: {
                  value: "+5.3",
                  trend: "up",
                },
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={21}
                    height={21}
                    fill="currentColor"
                  >
                    <path d="M10.5 0c5.799 0 10.5 4.701 10.5 10.5S16.299 21 10.5 21 0 16.299 0 10.5 4.701 0 10.5 0Zm0 2C5.806 2 2 5.806 2 10.5S5.806 19 10.5 19s8.5-3.806 8.5-8.5S15.194 2 10.5 2Zm4.5 8.5a1 1 0 0 1 0 2h-4a1 1 0 0 1-1-1V6a1 1 0 0 1 2 0v4.5H15Z" />
                  </svg>
                ),
              },
            ]}
          />
          {/* Table */}
          <div className="min-h-[100vh] flex-1 md:min-h-min">
            <JobAnalysisTable />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}