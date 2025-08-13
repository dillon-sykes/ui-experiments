# Job Matcher - AI-Powered Career Intelligence

A comprehensive full-stack application that analyzes job postings against your resume using advanced LLM technology, featuring a modern web dashboard with AI-powered insights.

## 🚀 Features

### Core Functionality
- **Smart Job Analysis**: Uses AI to analyze complete job descriptions against your resume
- **Multi-Platform Support**: Works with LinkedIn, Indeed, Glassdoor, Stack Overflow Jobs, and more
- **Interactive Dashboard**: Modern web interface to view and manage job analyses
- **Comprehensive Scoring**: Multi-dimensional analysis including technical skills, experience level, cultural fit, and learning potential

### Advanced Capabilities
- **Reliability**: Multiple evaluation consensus system for consistent results
- **Context-Aware**: Understands implicit requirements, company stage, and role nuances
- **Adaptive Matching**: Different strategies for junior vs senior roles
- **Historical Tracking**: Track all analyzed jobs with detailed analytics
- **Export Functionality**: Download analysis data for further review

## 🎯 Usage

### Getting Started

1. **Upload Your Resume**
   - Click "Upload Resume" in the top navigation
   - Upload your resume in text, PDF, or DOCX format
   - The system will store and process your resume for matching

2. **Analyze Jobs**
   - Click "Analyze New Job" to manually input job details
   - Or use the Chrome extension (coming soon) for seamless analysis
   - View results immediately in the dashboard

### Dashboard Features

- **Overview Stats**: Total jobs analyzed, good matches, match rate, average score
- **Job List**: All analyzed jobs with match scores and detailed breakdowns
- **Individual Analysis**: Detailed view of each job match including:
  - Overall match score (0-100%)
  - Technical skills alignment
  - Experience level assessment
  - Cultural fit analysis
  - Learning potential evaluation
  - Specific recommendations and talking points

## 🧠 How It Works

### AI-Based Analysis

The system uses a sophisticated AI analysis approach:

1. **Multiple Evaluations**: Runs multiple analyses for reliability
2. **Consensus Building**: Combines results using variance analysis
3. **Context-Aware Prompting**: Adapts analysis based on role level and company type
4. **Structured Output**: Returns consistent format with detailed breakdowns

### Reliability Features

- **Validation**: Extensive output validation and error handling
- **Fallback Systems**: Graceful degradation when AI calls fail
- **Confidence Scoring**: Every analysis includes confidence metrics
- **Quality Monitoring**: Logs and tracks analysis quality over time

## 🛠 Technology Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **UI Components**: shadcn/ui with Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **AI Integration**: Google Gemini API
- **File Upload**: React Dropzone
- **State Management**: React Query

## 📊 Analysis Metrics

Each job analysis provides:

- **Match Score**: Overall compatibility percentage
- **Technical Skills**: Alignment with required technologies
- **Experience Level**: Seniority and responsibility match
- **Cultural Fit**: Company culture and values alignment
- **Learning Potential**: Growth opportunities and skill development

## 🔮 Coming Soon

- **Chrome Extension**: One-click analysis while browsing job sites
- **Advanced Analytics**: Trend analysis and career insights
- **Job Recommendations**: AI-suggested positions based on your profile
- **Interview Preparation**: Tailored questions and talking points
- **Salary Insights**: Market rate analysis and negotiation tips