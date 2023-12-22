import { Switch } from "@headlessui/react";

import { cn } from "@lib/utils";
import { useDarkModeContext } from "@context/DarkMode";

export default function DarkModeSwitch() {
  const { isDarkMode, setDarkMode } = useDarkModeContext();

  function toggleDarkMode() {
    setDarkMode(!isDarkMode);
  }

  return (
    <Switch
      checked={!!isDarkMode}
      onChange={toggleDarkMode}
      className={cn(
        isDarkMode ? "bg-blue-500" : "bg-zinc-600",
        "relative inline-flex h-6 w-12 items-center rounded-full",
      )}
    >
      <span className="sr-only">Toggle DarkMode</span>
      <span
        className={cn(
          isDarkMode ? "translate-x-6" : "translate-x-1",
          "inline-block h-4 w-4 transform rounded-full bg-white transition",
        )}
      />
    </Switch>
  );
}
