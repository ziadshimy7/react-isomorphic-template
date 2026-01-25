import { Briefcase } from "lucide-react";
import { FC } from "react";

export const Footer: FC = () => (
  <footer className="bg-gray-900 text-gray-300 mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="size-6 text-gray-400" />
            <span className="text-white font-bold text-lg">Job Board</span>
          </div>
          <p className="text-sm text-gray-400">
            Connecting talented professionals with amazing opportunities.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">For Job Seekers</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Browse Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Career Advice
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Resume Tips
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">For Employers</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Post a Job
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Success Stories
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
        <p>&copy; 2026 Job Board. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
