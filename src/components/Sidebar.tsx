import { HomeIcon, InformationCircleIcon, PhoneIcon } from "@heroicons/react/24/solid";
import React from "react";

import { GitHubIcon, LinkedInIcon } from "@components/icons";

function SideBarIcon({ icon, text = "tooltip" }: { icon: React.ReactNode; text?: string }) {
  return (
    <div className="group relative mx-auto my-2 flex h-12 w-12 cursor-pointer items-center justify-center rounded-3xl bg-gray-400 text-blue-500 transition-all duration-300 ease-linear hover:rounded-xl hover:bg-blue-400 hover:text-white dark:bg-gray-800 dark:text-blue-300">
      {icon}
      <span className="absolute left-14 m-2 w-auto min-w-max origin-left scale-0 rounded-md bg-gray-900 p-2 text-xs font-bold text-white shadow-md transition-all duration-100 group-hover:scale-100">
        {text}
      </span>
    </div>
  );
}

function Divider() {
  return <hr className="mx-2 rounded-full border border-gray-200 bg-gray-200 dark:border-gray-800 dark:bg-gray-800" />;
}

export default function SideBar() {
  return (
    <div className="fixed left-0 top-0 m-0 flex h-screen w-16 flex-col bg-white text-white shadow-lg dark:bg-gray-900">
      <SideBarIcon icon={<HomeIcon className="h-6 w-6" />} text="Home" />
      <Divider />
      <SideBarIcon icon={<InformationCircleIcon className="h-6 w-6" />} text="About" />
      <SideBarIcon icon={<PhoneIcon className="h-6 w-6" />} text="Contact" />
      <Divider />
      <SideBarIcon icon={<GitHubIcon className="h-6 w-6" />} text="GitHub" />
      <SideBarIcon icon={<LinkedInIcon className="h-6 w-6" />} text="LinkedIn" />
    </div>
  );
}
