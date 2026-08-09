import { apiRequest } from "./client";
import type {
  ContactPayload,
  ContactResponse,
  Education,
  Experience,
  HealthResponse,
  Profile,
  Project,
  Resume,
  SkillCategory,
} from "./types";

export const getHealth = () => apiRequest<HealthResponse>("/api/health");

export const getProfile = () => apiRequest<Profile>("/api/profile");

export const getResumes = () => apiRequest<Resume[]>("/api/resumes");

export const getSkills = () => apiRequest<SkillCategory[]>("/api/skills");

export const getExperiences = () => apiRequest<Experience[]>("/api/experiences");

export const getEducation = () => apiRequest<Education[]>("/api/education");

export const getProjects = () => apiRequest<Project[]>("/api/projects");

export const postContact = (payload: ContactPayload) =>
  apiRequest<ContactResponse>("/api/contact", {
    method: "POST",
    body: payload,
  });
