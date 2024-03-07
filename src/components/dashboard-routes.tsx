"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Link2Icon, SettingsIcon } from "lucide-react";
import { cn } from "@/utils";

const DashboardRoutes = [
  {
    title: "Links",
    path: "/dashboard",
    icon: Link2Icon,
  },
  {
    title: "Settings",
    path: "/dashboard/settings",
    icon: SettingsIcon,
  },
];

const DashboardRoutesComponent = () => {
  const pathname = usePathname();
  return (
    <div>
      <div className="flex items-center space-x-7">
        {DashboardRoutes.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className={cn(
              "relative px-1 py-4 text-sm font-medium outline-2 outline-sky-400 transition-colors duration-100 hover:bg-transparent hover:text-neutral-900 dark:hover:text-white focus-visible:outline",
              pathname === route.path
                ? "border-b border-neutral-800 dark:border-white dark:text-white"
                : "text-neutral-500",
            )}
          >
            <div className="relative z-10 flex items-center space-x-2">
              <route.icon size={18} />
              <span>{route.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboardRoutesComponent;
