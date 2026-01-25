import { Job, JobCard } from "@shared/components/job-card";
import { GetInitialMeta } from "@shared/lib/dynamic";
import { useInitialMeta } from "@shared/store/ui/hooks";
import { FC } from "react";

export const getInitialMeta: GetInitialMeta = () => ({
  title: "Jobs",
  description: "",
});

const mockJobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Engineer",
    company: "TechCorp Inc.",
    companyLink: "https://techcorp.example.com",
    location: "San Francisco, CA",
    jobLink: "https://jobs.example.com/frontend-engineer",
    provider: "LinkedIn",
  },
  {
    id: "2",
    title: "Full Stack Developer",
    company: "InnovateLab",
    companyLink: "https://innovatelab.example.com",
    location: "Remote",
    jobLink: "https://jobs.example.com/fullstack-dev",
    provider: "Lever",
  },
  {
    id: "3",
    title: "UX/UI Designer",
    company: "DesignStudio",
    companyLink: "https://designstudio.example.com",
    location: "New York, NY",
    jobLink: "https://jobs.example.com/ux-designer",
    provider: "Greenhouse",
  },
  {
    id: "4",
    title: "Product Manager",
    company: "StartupXYZ",
    companyLink: "https://startupxyz.example.com",
    location: "Austin, TX",
    jobLink: "https://jobs.example.com/product-manager",
    provider: "Indeed",
  },
  {
    id: "5",
    title: "DevOps Engineer",
    company: "CloudSystems",
    companyLink: "https://cloudsystems.example.com",
    location: "Seattle, WA",
    jobLink: "https://jobs.example.com/devops-engineer",
    provider: "LinkedIn",
  },
  {
    id: "6",
    title: "Data Scientist",
    company: "Analytics Pro",
    companyLink: "https://analyticspro.example.com",
    location: "Boston, MA",
    jobLink: "https://jobs.example.com/data-scientist",
    provider: "Lever",
  },
  {
    id: "7",
    title: "Mobile Developer (iOS)",
    company: "AppMakers",
    companyLink: "https://appmakers.example.com",
    location: "Los Angeles, CA",
    jobLink: "https://jobs.example.com/ios-developer",
    provider: "Greenhouse",
  },
  {
    id: "8",
    title: "Backend Engineer",
    company: "ScaleTech",
    companyLink: "https://scaletech.example.com",
    location: "Chicago, IL",
    jobLink: "https://jobs.example.com/backend-engineer",
    provider: "LinkedIn",
  },
];

const HomePage: FC = () => {
  useInitialMeta(getInitialMeta);

  return (
    <ul className="flex flex-col gap-4 w-full md:grid md:grid-cols-2 p-12">
      {mockJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </ul>
  );
};

export default HomePage;
