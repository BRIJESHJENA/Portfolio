import React, { createContext, useContext, useMemo } from "react";
import {
  Bio as staticBio,
  education as staticEducation,
  experiences as staticExperiences,
  projects as staticProjects,
  resumes as staticResumes,
  skills as staticSkills,
} from "../data/contents.ts";
import { getPortfolioBundle } from "../api/portfolio.ts";
import { readPortfolioCache } from "../api/portfolioCache.ts";
import type {
  Education,
  Experience,
  PortfolioBundle,
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

const bundleFallback: PortfolioBundle = {
  profile: profileFallback,
  resumes: resumeFallback,
  skills: staticSkills,
  experiences: staticExperiences,
  education: staticEducation,
  projects: projectFallback,
};

interface PortfolioDataValue {
  profile: AsyncResource<Profile>;
  resumes: AsyncResource<Resume[]>;
  skills: AsyncResource<SkillCategory[]>;
  experiences: AsyncResource<Experience[]>;
  education: AsyncResource<Education[]>;
  projects: AsyncResource<Project[]>;
}

const PortfolioDataContext = createContext<PortfolioDataValue | null>(null);

function sliceResource<T>(
  bundle: AsyncResource<PortfolioBundle>,
  pick: (data: PortfolioBundle) => T
): AsyncResource<T> {
  return {
    data: pick(bundle.data),
    status: bundle.status,
    error: bundle.error,
    isLoading: bundle.isLoading,
    isRefreshing: bundle.isRefreshing,
    isError: bundle.isError,
    reload: bundle.reload,
  };
}

const cachedBundle = readPortfolioCache();

export const PortfolioDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const bundle = useAsyncResource(getPortfolioBundle, bundleFallback, true, cachedBundle);

  const value = useMemo<PortfolioDataValue>(
    () => ({
      profile: sliceResource(bundle, (b) => b.profile),
      resumes: sliceResource(bundle, (b) => b.resumes),
      skills: sliceResource(bundle, (b) => b.skills),
      experiences: sliceResource(bundle, (b) => b.experiences),
      education: sliceResource(bundle, (b) => b.education),
      projects: sliceResource(bundle, (b) => b.projects),
    }),
    [bundle]
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
