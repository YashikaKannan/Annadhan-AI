"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

function RegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialRole = searchParams.get('role') || "donor";
  const [role, setRole] = useState(initialRole);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/dashboard/${role}`);
  };

  return (
    <form onSubmit={handleRegister} className="space-y-4">
        <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">I am registering as</label>
            <div className="grid grid-cols-3 gap-2">
                <Button 
                    type="button" 
                    variant={role === "donor" ? "default" : "outline"} 
            className={role === "donor" ? "bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400" : ""}
                    onClick={() => setRole("donor")}
                >
                    Donor
                </Button>
                <Button 
                    type="button" 
                    variant={role === "receiver" ? "default" : "outline"} 
                  className={role === "receiver" ? "bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400" : ""}
                    onClick={() => setRole("receiver")}
                >
                    Receiver
                </Button>
                <Button 
                    type="button" 
                    variant={role === "volunteer" ? "default" : "outline"} 
                  className={role === "volunteer" ? "bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400" : ""}
                    onClick={() => setRole("volunteer")}
                >
                    Volunteer
                </Button>
            </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Organization / Full Name</label>
          <input type="text" required className="flex h-10 w-full rounded-md border border-slate-300 bg-white/90 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-100 dark:placeholder:text-slate-500" placeholder="e.g. Taj Hotel" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
          <input type="email" required className="flex h-10 w-full rounded-md border border-slate-300 bg-white/90 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-100 dark:placeholder:text-slate-500" placeholder="m@example.com" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
          <input type="password" required className="flex h-10 w-full rounded-md border border-slate-300 bg-white/90 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-100 dark:placeholder:text-slate-500" />
        </div>
        <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400">Create Account</Button>
    </form>
  )
}

export default function Register() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-50 p-4 dark:bg-slate-950">
      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>
      <Card className="w-full max-w-md border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900/80">
        <CardHeader className="space-y-1 items-center">
          <Link href="/" className="flex items-center gap-2 mb-4 text-emerald-600">
            <Heart className="h-8 w-8" />
            <span className="font-bold text-2xl text-slate-900 dark:text-slate-100">Annadhan AI</span>
          </Link>
          <CardTitle className="text-2xl font-bold text-slate-950 dark:text-slate-100">Create an account</CardTitle>
          <CardDescription>Join our platform to fight food waste</CardDescription>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<div>Loading...</div>}>
            <RegisterForm />
          </Suspense>
          <div className="mt-4 text-center text-sm text-slate-600 dark:text-slate-400">
            Already have an account?{" "}
            <Link href="/login" className="text-emerald-600 hover:underline dark:text-emerald-400">
              Log in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
