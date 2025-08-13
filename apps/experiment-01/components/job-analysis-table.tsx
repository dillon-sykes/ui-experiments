"use client";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  RiExternalLinkLine,
  RiEyeLine,
  RiDeleteBinLine,
  RiSearch2Line,
  RiCloseCircleLine,
  RiMoreLine,
  RiStarLine,
  RiBookmarkLine,
} from "@remixicon/react";
import { useRef, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type JobAnalysis = {
  id: string;
  jobTitle: string;
  company: string;
  location: string;
  platform: string;
  matchScore: number;
  technicalMatch: number;
  experienceMatch: number;
  culturalFit: number;
  learningPotential: number;
  analyzedDate: string;
  jobUrl: string;
  isBookmarked: boolean;
};

// Mock data for demonstration
const mockJobAnalyses: JobAnalysis[] = [
  {
    id: "1",
    jobTitle: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    platform: "LinkedIn",
    matchScore: 92,
    technicalMatch: 95,
    experienceMatch: 88,
    culturalFit: 90,
    learningPotential: 85,
    analyzedDate: "2025-01-10",
    jobUrl: "https://linkedin.com/jobs/123",
    isBookmarked: true,
  },
  {
    id: "2",
    jobTitle: "React Developer",
    company: "StartupXYZ",
    location: "Remote",
    platform: "Indeed",
    matchScore: 87,
    technicalMatch: 90,
    experienceMatch: 85,
    culturalFit: 88,
    learningPotential: 92,
    analyzedDate: "2025-01-09",
    jobUrl: "https://indeed.com/jobs/456",
    isBookmarked: false,
  },
  {
    id: "3",
    jobTitle: "Full Stack Engineer",
    company: "MegaCorp",
    location: "New York, NY",
    platform: "Glassdoor",
    matchScore: 78,
    technicalMatch: 82,
    experienceMatch: 75,
    culturalFit: 80,
    learningPotential: 88,
    analyzedDate: "2025-01-08",
    jobUrl: "https://glassdoor.com/jobs/789",
    isBookmarked: false,
  },
  {
    id: "4",
    jobTitle: "JavaScript Developer",
    company: "InnovateLab",
    location: "Austin, TX",
    platform: "Stack Overflow",
    matchScore: 84,
    technicalMatch: 88,
    experienceMatch: 80,
    culturalFit: 85,
    learningPotential: 90,
    analyzedDate: "2025-01-07",
    jobUrl: "https://stackoverflow.com/jobs/101",
    isBookmarked: true,
  },
  {
    id: "5",
    jobTitle: "Frontend Engineer",
    company: "DesignStudio",
    location: "Los Angeles, CA",
    platform: "LinkedIn",
    matchScore: 71,
    technicalMatch: 75,
    experienceMatch: 68,
    culturalFit: 72,
    learningPotential: 85,
    analyzedDate: "2025-01-06",
    jobUrl: "https://linkedin.com/jobs/202",
    isBookmarked: false,
  },
];

function getMatchScoreColor(score: number): string {
  if (score >= 85) return "text-emerald-600";
  if (score >= 70) return "text-yellow-600";
  return "text-red-600";
}

function getMatchScoreBadge(score: number): { variant: "default" | "secondary" | "destructive" | "outline", text: string } {
  if (score >= 85) return { variant: "default", text: "Excellent" };
  if (score >= 70) return { variant: "secondary", text: "Good" };
  if (score >= 50) return { variant: "outline", text: "Fair" };
  return { variant: "destructive", text: "Poor" };
}

export function JobAnalysisTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState<JobAnalysis[]>(mockJobAnalyses);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredData = data.filter(
    (job) =>
      job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBookmark = (id: string) => {
    setData(prev => 
      prev.map(job => 
        job.id === id ? { ...job, isBookmarked: !job.isBookmarked } : job
      )
    );
  };

  const handleDelete = (id: string) => {
    setData(prev => prev.filter(job => job.id !== id));
  };

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Input
            ref={inputRef}
            className={cn(
              "peer ps-9 bg-background bg-gradient-to-br from-accent/60 to-accent",
              Boolean(searchTerm) && "pe-9",
            )}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search jobs, companies, or locations..."
            type="text"
            aria-label="Search job analyses"
          />
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 text-muted-foreground/60 peer-disabled:opacity-50">
            <RiSearch2Line size={20} aria-hidden="true" />
          </div>
          {Boolean(searchTerm) && (
            <button
              className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/60 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Clear search"
              onClick={() => {
                setSearchTerm("");
                if (inputRef.current) {
                  inputRef.current.focus();
                }
              }}
            >
              <RiCloseCircleLine size={16} aria-hidden="true" />
            </button>
          )}
        </div>
      </div>

      {/* Table */}
      <Table className="table-fixed border-separate border-spacing-0 [&_tr:not(:last-child)_td]:border-b">
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[300px] h-9 select-none bg-sidebar border-y border-border first:border-l first:rounded-l-lg last:border-r last:rounded-r-lg">
              Job Details
            </TableHead>
            <TableHead className="w-[120px] h-9 select-none bg-sidebar border-y border-border first:border-l first:rounded-l-lg last:border-r last:rounded-r-lg">
              Platform
            </TableHead>
            <TableHead className="w-[100px] h-9 select-none bg-sidebar border-y border-border first:border-l first:rounded-l-lg last:border-r last:rounded-r-lg">
              Match Score
            </TableHead>
            <TableHead className="w-[120px] h-9 select-none bg-sidebar border-y border-border first:border-l first:rounded-l-lg last:border-r last:rounded-r-lg">
              Technical
            </TableHead>
            <TableHead className="w-[120px] h-9 select-none bg-sidebar border-y border-border first:border-l first:rounded-l-lg last:border-r last:rounded-r-lg">
              Experience
            </TableHead>
            <TableHead className="w-[100px] h-9 select-none bg-sidebar border-y border-border first:border-l first:rounded-l-lg last:border-r last:rounded-r-lg">
              Date
            </TableHead>
            <TableHead className="w-[60px] h-9 select-none bg-sidebar border-y border-border first:border-l first:rounded-l-lg last:border-r last:rounded-r-lg">
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <tbody aria-hidden="true" className="table-row h-1"></tbody>
        <TableBody>
          {filteredData.length > 0 ? (
            filteredData.map((job) => (
              <TableRow
                key={job.id}
                className="border-0 [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg h-px hover:bg-accent/50"
              >
                <TableCell className="h-[inherit]">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="font-medium">{job.jobTitle}</div>
                      {job.isBookmarked && (
                        <RiStarLine className="text-yellow-500" size={14} />
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">{job.company}</div>
                    <div className="text-xs text-muted-foreground/70">{job.location}</div>
                  </div>
                </TableCell>
                <TableCell className="h-[inherit]">
                  <Badge variant="outline" className="text-xs">
                    {job.platform}
                  </Badge>
                </TableCell>
                <TableCell className="h-[inherit]">
                  <div className="flex items-center gap-2">
                    <span className={cn("font-semibold", getMatchScoreColor(job.matchScore))}>
                      {job.matchScore}%
                    </span>
                    <Badge {...getMatchScoreBadge(job.matchScore)} className="text-xs">
                      {getMatchScoreBadge(job.matchScore).text}
                    </Badge>
                  </div>
                </TableCell>
                <TableCell className="h-[inherit]">
                  <TooltipProvider delayDuration={0}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex h-full w-full items-center">
                          <Progress className="h-2 max-w-20" value={job.technicalMatch} />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent align="start" sideOffset={-8}>
                        <p>Technical Skills: {job.technicalMatch}%</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableCell>
                <TableCell className="h-[inherit]">
                  <TooltipProvider delayDuration={0}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex h-full w-full items-center">
                          <Progress className="h-2 max-w-20" value={job.experienceMatch} />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent align="start" sideOffset={-8}>
                        <p>Experience Level: {job.experienceMatch}%</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableCell>
                <TableCell className="h-[inherit]">
                  <span className="text-sm text-muted-foreground">
                    {new Date(job.analyzedDate).toLocaleDateString()}
                  </span>
                </TableCell>
                <TableCell className="h-[inherit]">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className="flex justify-end">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="shadow-none text-muted-foreground/60"
                          aria-label="Job actions"
                        >
                          <RiMoreLine className="size-5" size={20} aria-hidden="true" />
                        </Button>
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-auto">
                      <DropdownMenuItem>
                        <RiEyeLine className="mr-2" size={16} />
                        View Analysis
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <RiExternalLinkLine className="mr-2" size={16} />
                        Open Job Posting
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleBookmark(job.id)}>
                        <RiBookmarkLine className="mr-2" size={16} />
                        {job.isBookmarked ? "Remove Bookmark" : "Bookmark"}
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={() => handleDelete(job.id)}
                        variant="destructive"
                        className="dark:data-[variant=destructive]:focus:bg-destructive/10"
                      >
                        <RiDeleteBinLine className="mr-2" size={16} />
                        Delete Analysis
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow className="hover:bg-transparent [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
              <TableCell colSpan={7} className="h-24 text-center">
                {searchTerm ? "No jobs match your search." : "No job analyses yet. Upload your resume and start analyzing jobs!"}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <tbody aria-hidden="true" className="table-row h-1"></tbody>
      </Table>
    </div>
  );
}