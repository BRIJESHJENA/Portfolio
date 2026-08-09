import React, { createContext, useContext, useMemo } from "react";
import {
  Bio as staticBio,
  education as staticEducation,
  experiences as staticExperiences,
  projects as staticProjects,
  resumes as staticResumes,
  skills as staticSkills,
} from "../data/contents.ts";
import {
  getEducation,
  getExperiences,
  getProfile,
  getProjects,
  getResumes,
  getSkills,
} from "../api/portfolio.ts";
import type {
  Education,
  Experience,
  Profile,
  Project,
  Resume,
  SkillCategory,
} from "../api/types.ts";
import { useAsyncResource, type AsyncResource } from "../hooks/useAsyncResource.ts";

const profileFallback: Profile = {
  name: staticBio.name,
  roles: staticBio.roles,
  description: staticBio.description,
  github: staticBio.github,
  email: staticBio.email,
  phone: String(staticBio.phone),
  location: staticBio.location,
  linkedin: staticBio.linkedin,
  availability: ["Open to full-time", "Freelance", "Remote"],
};

const resumeFallback: Resume[] = staticResumes.map(({ id, label, summary, file, downloadName }) => ({
  id,
  label,
  summary,
  file,
  downloadName,
}));

const projectFallback: Project[] = staticProjects.map((p) => ({
  id: p.id,
  title: p.title,
  description: p.description,
  image: typeof p.image === "string" ? p.image : String(p.image),
  tags: p.tags,
  github: p.github,
  webapp: p.webapp,
}));

interface PortfolioDataValue {
  profile: AsyncResource<Profile>;
  resumes: AsyncResource<Resume[]>;
  skills: AsyncResource<SkillCategory[]>;
  experiences: AsyncResource<Experience[]>;
  education: AsyncResource<Education[]>;
  projects: AsyncResource<Project[]>;
}

const PortfolioDataContext = createContext<PortfolioDataValue | null>(null);

export const PortfolioDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const profile = useAsyncResource(getProfile, profileFallback);
  const resumes = useAsyncResource(getResumes, resumeFallback);
  const skills = useAsyncResource(getSkills, staticSkills);
  const experiences = useAsyncResource(getExperiences, staticExperiences);
  const education = useAsyncResource(getEducation, staticEducation);
  const projects = useAsyncResource(getProjects, projectFallback);

  const value = useMemo(
    () => ({ profile, resumes, skills, experiences, education, projects }),
    [profile, resumes, skills, experiences, education, projects]
  );

  return (
    <PortfolioDataContext.Provider value={value}>{children}</PortfolioDataContext.Provider>
  );
};

export const usePortfolioData = (): PortfolioDataValue => {
  const ctx = useContext(PortfolioDataContext);
  if (!ctx) {
    throw new Error("usePortfolioData must be used inside PortfolioDataProvider");
  }
  return ctx;
};
