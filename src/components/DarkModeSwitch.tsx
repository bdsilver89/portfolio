import { Switch } from "@headlessui/react";

import { cn } from "@lib/utils";
import { useDarkModeContext } from "@context/DarkMode";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

export type DarkModeSwitchProps = {
  useIcon?: boolean;
};

export default function DarkModeSwitch(props: DarkModeSwitchProps) {
  const { useIcon = true } = props;

  const { isDarkMode, setDarkMode } = useDarkModeContext();

  function toggleDarkMode() {
    setDarkMode(!isDarkMode);
  }

  return useIcon ? (
    <button onClick={toggleDarkMode}>{isDarkMode ? <MoonIcon /> : <SunIcon />}</button>
  ) : (
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
