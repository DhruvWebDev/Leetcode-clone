import React from "react";
import { Button } from "@/components/ui/button"; // Update path based on your setup
import { Separator } from "@/components/ui/separator";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-lg font-bold">LeetCode Clone</h2>
            <p className="text-sm mt-2">
              Your one-stop solution to practice coding challenges and improve your skills.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Button variant="link" className="text-white" asChild>
              <a href="/about">About Us</a>
            </Button>
            <Button variant="link" className="text-white" asChild>
              <a href="/contact">Contact</a>
            </Button>
            <Button variant="link" className="text-white" asChild>
              <a href="/privacy">Privacy Policy</a>
            </Button>
          </div>
        </div>

        <Separator className="my-4 bg-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} LeetCode Clone. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <TwitterIcon className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
