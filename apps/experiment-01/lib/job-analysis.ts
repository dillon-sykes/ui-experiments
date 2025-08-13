export interface JobAnalysisRequest {
  jobTitle: string;
  company: string;
  location: string;
  jobDescription: string;
  jobUrl: string;
  platform: string;
  resumeText: string;
}

export interface JobAnalysisResult {
  matchScore: number;
  technicalMatch: number;
  experienceMatch: number;
  culturalFit: number;
  learningPotential: number;
  analysis: {
    strengths: string[];
    gaps: string[];
    recommendations: string[];
    talkingPoints: string[];
    confidenceLevel: number;
  };
}

export async function analyzeJobMatch(request: JobAnalysisRequest): Promise<JobAnalysisResult> {
  // This would typically call your Flask backend or LLM service
  // For now, we'll return mock data
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Mock analysis result
  return {
    matchScore: Math.floor(Math.random() * 40) + 60, // 60-100%
    technicalMatch: Math.floor(Math.random() * 30) + 70, // 70-100%
    experienceMatch: Math.floor(Math.random() * 35) + 65, // 65-100%
    culturalFit: Math.floor(Math.random() * 25) + 75, // 75-100%
    learningPotential: Math.floor(Math.random() * 20) + 80, // 80-100%
    analysis: {
      strengths: [
        "Strong React and TypeScript experience aligns perfectly with requirements",
        "Previous experience with modern frontend frameworks",
        "Good understanding of responsive design principles"
      ],
      gaps: [
        "Limited experience with specific testing frameworks mentioned",
        "Could benefit from more backend integration experience"
      ],
      recommendations: [
        "Highlight your component library development experience",
        "Emphasize your problem-solving approach in previous projects",
        "Prepare examples of performance optimization work"
      ],
      talkingPoints: [
        "Discuss your experience building scalable React applications",
        "Share examples of cross-functional collaboration",
        "Mention your approach to code quality and testing"
      ],
      confidenceLevel: 85
    }
  };
}

export function getMatchScoreColor(score: number): string {
  if (score >= 85) return "text-emerald-600";
  if (score >= 70) return "text-yellow-600";
  return "text-red-600";
}

export function getMatchScoreBadge(score: number): { variant: "default" | "secondary" | "destructive" | "outline", text: string } {
  if (score >= 85) return { variant: "default", text: "Excellent" };
  if (score >= 70) return { variant: "secondary", text: "Good" };
  if (score >= 50) return { variant: "outline", text: "Fair" };
  return { variant: "destructive", text: "Poor" };
}