"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Heart,
  Home,
  User,
  LogOut,
  Package,
  Truck,
  Activity,
  Moon,
  Sun,
} from "lucide-react";
import { useEffect, useState } from "react";

import { useAuth } from "@/context/AuthContext";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, loading } = useAuth();

  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (document.documentElement.classList.contains("dark")) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [loading, user, router]);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    router.replace("/login");
  };

  const role = pathname.split("/")[2] || "donor";

  const navItems = {
    donor: [
      { name: "Overview", href: "/dashboard/donor", icon: Home },
      { name: "My Donations", href: "/dashboard/donor/donations", icon: Package },
      { name: "Impact", href: "/dashboard/donor/impact", icon: Activity },
    ],
    receiver: [
      { name: "Overview", href: "/dashboard/receiver", icon: Home },
      { name: "Incoming", href: "/dashboard/receiver/incoming", icon: Truck },
      { name: "History", href: "/dashboard/receiver/history", icon: Package },
    ],
    volunteer: [
      { name: "Available Tasks", href: "/dashboard/volunteer", icon: Package },
      { name: "Active Delivery", href: "/dashboard/volunteer/active", icon: Truck },
      { name: "History", href: "/dashboard/volunteer/history", icon: Activity },
    ],
    admin: [
      { name: "Overview", href: "/dashboard/admin", icon: Home },
      { name: "Users", href: "/dashboard/admin/users", icon: User },
      { name: "Analytics", href: "/dashboard/admin/analytics", icon: Activity },
    ],
  };

  const links = navItems[role as keyof typeof navItems] || navItems.donor;

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <p className="text-lg font-medium">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-64 flex-col overflow-hidden border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className="flex h-16 items-center border-b border-slate-200 px-6 dark:border-slate-800">
          <Link href="/" className="flex items-center gap-2 text-emerald-600">
            <Heart className="h-6 w-6" />
            <span className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Annadhan AI
            </span>
          </Link>
        </div>

        <nav className="flex-1 space-y-2 px-4 py-6">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 transition-all hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100",
                  pathname === link.href
                    ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 font-medium"
                    : ""
                )}
              >
                <Icon className="h-5 w-5" />
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="space-y-2 border-t border-slate-200 p-4 dark:border-slate-800">
          <button
            onClick={toggleTheme}
            className="flex min-h-[40px] w-full items-center gap-3 rounded-lg px-3 py-2 text-slate-600 transition-all hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
          >
            {mounted && (
              <>
                {theme === "light" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </>
            )}
          </button>

          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-slate-600 transition-all hover:bg-red-50 hover:text-red-600 dark:text-slate-400 dark:hover:bg-red-900/20 dark:hover:text-red-400"
          >
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </div>
      </aside>

      <main className="flex flex-1 flex-col md:ml-64 h-screen overflow-y-auto">
        <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6 dark:border-slate-800 dark:bg-slate-950 md:hidden">
          <div className="flex items-center gap-4">
            <Heart className="h-6 w-6 text-emerald-600" />
            <span className="font-bold">Annadhan AI</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="flex min-h-[36px] min-w-[36px] items-center justify-center rounded-full p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {mounted &&
                (theme === "light" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                ))}
            </button>

            <button
              onClick={handleLogout}
              className="flex min-h-[36px] min-w-[36px] items-center justify-center rounded-full p-2 text-slate-500 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </header>

        <div className="flex-1 p-6 lg:p-8">{children}</div>
      </main>
    </div>
  );
}