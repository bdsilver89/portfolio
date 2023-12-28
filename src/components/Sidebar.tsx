import { HomeIcon, PhoneIcon, UserIcon, SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";

import { GitHubIcon, LinkedInIcon } from "@components/icons";
import { cn } from "@lib/utils";
import { useDarkModeContext } from "@context/DarkMode";

const iconStyle = "h-6 w-6";

type SideBarIconProps = {
  isOpen: boolean;
  icon: React.ReactNode;
  text: string;
};

type SideBarIconLinkProps = SideBarIconProps & {
  variant?: "internal" | "external";
  href: string;
};

function SideBarIcon(props: SideBarIconProps) {
  return (
    <div
      className={cn(
        props.isOpen ? "w-56 justify-start px-3" : "w-12 justify-center",
        "group relative mx-auto my-2 flex h-12 cursor-pointer items-center rounded-3xl bg-gray-400 text-blue-500 transition-all duration-300 ease-linear hover:rounded-xl hover:bg-blue-400 hover:text-white dark:bg-gray-800 dark:text-blue-300 dark:hover:text-black",
      )}
    >
      {props.icon}
      {!props.isOpen ? (
        <span
          className={
            "absolute left-14 m-2 w-auto min-w-max origin-left scale-0 rounded-md bg-gray-900 p-2 text-xs font-bold text-white shadow-md transition-all duration-100 group-hover:scale-100"
          }
        >
          {props.text}
        </span>
      ) : (
        <span className="m-2 font-bold">{props.text}</span>
      )}
    </div>
  );
}

function SideBarIconLink(props: SideBarIconLinkProps) {
  const { variant = "internal", href, ...rest } = props;
  return (
    <a
      href={href}
      target={variant === "external" ? "_blank" : "_self"}
      rel={variant === "external" ? "noopener noreferrer" : ""}
    >
      <SideBarIcon {...rest} />
    </a>
  );
}

function SideBarIconDarkModeSwitch({ isOpen }: { isOpen: boolean }) {
  const { isDarkMode, setDarkMode } = useDarkModeContext();

  return (
    <button onClick={() => setDarkMode(!isDarkMode)}>
      <SideBarIcon
        isOpen={isOpen}
        text="Toggle Dark Mode"
        icon={isDarkMode ? <SunIcon className={iconStyle} /> : <MoonIcon className={iconStyle} />}
      />
    </button>
  );
}

function Divider() {
  return <hr className="mx-2 rounded-full border border-gray-200 bg-gray-200 dark:border-gray-800 dark:bg-gray-800" />;
}

export default function SideBar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div
      className={cn(
        isOpen ? "w-64" : "w-16",
        "relative left-0 top-0 m-0 flex h-screen flex-col bg-white text-white shadow-lg transition-all duration-100 dark:bg-gray-900",
      )}
    >
      <button
        onClick={() => setOpen(!isOpen)}
        className="absolute -right-2 top-12 h-5 w-5 rounded-full border border-gray-500 text-gray-500 dark:text-white"
      >
        {isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </button>
      <SideBarIconLink href="#" isOpen={isOpen} icon={<HomeIcon className={iconStyle} />} text="Home" />
      <Divider />
      <SideBarIconLink href="#" isOpen={isOpen} icon={<UserIcon className={iconStyle} />} text="About" />
      <SideBarIconLink href="#" isOpen={isOpen} icon={<PhoneIcon className={iconStyle} />} text="Contact" />
      <Divider />
      <SideBarIconLink
        href="https://www.github.com/bdsilver89"
        variant="external"
        isOpen={isOpen}
        icon={<GitHubIcon className={iconStyle} />}
        text="GitHub"
      />
      <SideBarIconLink
        href="https://www.linkedin.com/in/brian-silver"
        variant="external"
        isOpen={isOpen}
        icon={<LinkedInIcon className={iconStyle} />}
        text="LinkedIn"
      />
      <Divider />
      <SideBarIconDarkModeSwitch isOpen={isOpen} />
    </div>
  );
}
