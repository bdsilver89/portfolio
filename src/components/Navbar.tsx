import { Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "@data/nav";
import { cn } from "@lib/utils";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1024) {
        setToggle(false);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      <nav className={cn(scrolled ? "bg-metallic-400" : "bg-metallic-500", "fixed top-0 z-20 w-full py-5")}>
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <p>LOGO</p>
            <p>
              Brian &nbsp;<span>Developer</span>
            </p>
          </Link>

          <ul className="hidden list-none flex-row gap-10 px-4 sm:flex">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={cn(
                  active === nav.title ? "text-metallic-300" : "text-metallic-100",
                  "cursor-pointer font-medium hover:text-opacity-80",
                )}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          <div className="flex flex-1 items-center justify-end px-4 sm:hidden ">
            <div className="h-5 w-5 object-contain" onClick={() => setToggle(!toggle)}>
              {toggle ? <XMarkIcon /> : <Bars3Icon />}
            </div>
          </div>
        </div>

        <Transition
          show={toggle}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div className="z-10 mx-4 my-2 flex min-w-[140px] items-end rounded-xl p-6">
            <ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={cn(
                    active === nav.title ? "text-metallic-300" : "text-metallic-100",
                    "cursor-pointer font-medium hover:text-opacity-80",
                  )}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </Transition>
      </nav>
    </header>
  );
}
