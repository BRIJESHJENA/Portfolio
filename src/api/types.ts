export interface Profile {
  name: string;
  roles: string[];
  description: string;
  github: string | null;
  email: string;
  phone: string | null;
  location: string | null;
  linkedin: string | null;
  availability: string[];
}

export interface Resume {
  id: string;
  label: string;
  summary: string;
  file: string;
  downloadName: string;
}

export interface SkillItem {
  name: string;
  image: string;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export interface Experience {
  id: number;
  img: string | null;
  role: string;
  company: string;
  date: string;
  desc: string[];
  skills: string[];
}

export interface Education {
  id: number;
  img: string | null;
  school: string;
  date: string;
  degree: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string | null;
  tags: string[];
  github: string;
  webapp: string;
}

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  ok: boolean;
  id: number;
  createdAt: string;
}

export interface HealthResponse {
  ok: boolean;
  service: string;
}
