import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          resume_text: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          full_name?: string | null;
          resume_text?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          resume_text?: string | null;
          updated_at?: string;
        };
      };
      job_analyses: {
        Row: {
          id: string;
          user_id: string;
          job_title: string;
          company: string;
          location: string;
          platform: string;
          job_url: string;
          job_description: string;
          match_score: number;
          technical_match: number;
          experience_match: number;
          cultural_fit: number;
          learning_potential: number;
          analysis_details: any;
          is_bookmarked: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          job_title: string;
          company: string;
          location: string;
          platform: string;
          job_url: string;
          job_description: string;
          match_score: number;
          technical_match: number;
          experience_match: number;
          cultural_fit: number;
          learning_potential: number;
          analysis_details?: any;
          is_bookmarked?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          job_title?: string;
          company?: string;
          location?: string;
          platform?: string;
          job_url?: string;
          job_description?: string;
          match_score?: number;
          technical_match?: number;
          experience_match?: number;
          cultural_fit?: number;
          learning_potential?: number;
          analysis_details?: any;
          is_bookmarked?: boolean;
          updated_at?: string;
        };
      };
    };
  };
};