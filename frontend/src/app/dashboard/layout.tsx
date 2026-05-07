"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Heart, Home, User, Settings, LogOut, Package, Truck, Activity, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (document.documentElement.classList.contains("dark")) {
      setTheme("dark");
    }
  }, []);

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
  
  // Quick mock to determine role from path for the sidebar
  const role = pathname.split('/')[2] || 'donor';

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
    ]
  };

  const links = navItems[role as keyof typeof navItems] || navItems.donor;

  return (
    <div className="flex min-h-screen bg-slate-50">
      <aside className="hidden md:flex w-64 flex-col bg-white border-r">
        <div className="h-16 flex items-center px-6 border-b">
          <Link href="/" className="flex items-center gap-2 text-emerald-600">
            <Heart className="h-6 w-6" />
            <span className="font-bold text-lg text-slate-900">Annadhan AI</span>
          </Link>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-slate-500 transition-all hover:text-slate-900 hover:bg-slate-100",
                  pathname === link.href ? "bg-emerald-50 text-emerald-600 font-medium" : ""
                )}
              >
                <Icon className="h-5 w-5" />
                {link.name}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t space-y-2">
          <button 
            onClick={toggleTheme}
            className="w-full flex items-center gap-3 rounded-lg px-3 py-2 text-slate-500 transition-all hover:text-slate-900 hover:bg-slate-100 min-h-[40px]"
          >
            {mounted && (
              <>
                {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </>
            )}
          </button>
          <Link href="/login" className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-500 transition-all hover:text-red-600 hover:bg-red-50">
            <LogOut className="h-5 w-5" />
            Logout
          </Link>
        </div>
      </aside>
      
      <main className="flex-1 flex flex-col">
        <header className="h-16 flex items-center justify-between border-b bg-white px-6 md:hidden">
          <div className="flex items-center gap-4">
            <Heart className="h-6 w-6 text-emerald-600" />
            <span className="font-bold">Annadhan AI</span>
          </div>
          <button onClick={toggleTheme} className="text-slate-500 p-2 rounded-full hover:bg-slate-100 min-w-[36px] min-h-[36px] flex items-center justify-center">
            {mounted && (theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />)}
          </button>
        </header>
        <div className="flex-1 p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
