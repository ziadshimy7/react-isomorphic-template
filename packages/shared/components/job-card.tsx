import { MapPin, ExternalLink, Building2 } from "lucide-react";

export interface Job {
  id: string;
  title: string;
  company: string;
  companyLink: string;
  location: string;
  jobLink: string;
  provider: string;
}

interface JobCardProps {
  job: Job;
}

const getProviderColor = (provider: string) => {
  const colors: Record<string, string> = {
    linkedin: "bg-[#0A66C2] text-white",
    lever: "bg-[#00B88D] text-white",
    greenhouse: "bg-[#0FA152] text-white",
    indeed: "bg-[#2164F3] text-white",
    default: "bg-gray-700 text-white",
  };
  return colors[provider.toLowerCase()] || colors.default;
};

export function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex justify-between items-start gap-4 mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            <a
              href={job.jobLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 transition-colors"
            >
              {job.title}
            </a>
          </h3>
          <div className="flex items-center gap-2 text-gray-700 mb-2">
            <Building2 className="size-4" />
            <a
              href={job.companyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors font-medium"
            >
              {job.company}
            </a>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="size-4" />
            <span>{job.location}</span>
          </div>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${getProviderColor(
            job.provider
          )}`}
        >
          {job.provider}
        </span>
      </div>

      <div className="pt-4 border-t border-gray-100">
        <a
          href={job.jobLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
        >
          View Job
          <ExternalLink className="size-4" />
        </a>
      </div>
    </div>
  );
}
