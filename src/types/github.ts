export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  language: string | null;
  topics: string[];
  fork: boolean;
  updated_at: string;
}

export interface FormattedRepo {
  id: number;
  title: string;
  desc: string;
  url: string;
  liveUrl: string | null;
  updated_at: string;
  language: string;
  topics: string[];
  stars: number;
  isFork: boolean;
  slug?: string;
}
