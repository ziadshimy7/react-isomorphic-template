import { Briefcase } from "lucide-react";
import { FC } from "react";

export const HeaderDesktopContainer: FC = () => (
  <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Briefcase className="size-8 text-gray-600" />
          <h1 className="text-3xl font-bold text-gray-900">Job Board</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors">
            Sign In
          </button>
          <button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors">
            Post a Job
          </button>
        </div>
      </div>
    </div>
  </header>
);
