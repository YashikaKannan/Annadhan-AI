"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Login() {
  const router = useRouter();
  const [role, setRole] = useState("donor");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/dashboard/${role}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4 relative">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 items-center">
          <Link href="/" className="flex items-center gap-2 mb-4 text-emerald-600">
            <Heart className="h-8 w-8" />
            <span className="font-bold text-2xl text-slate-900">Annadhan AI</span>
          </Link>
          <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input type="email" required className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="m@example.com" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Password</label>
                <Link href="#" className="text-sm text-emerald-600 hover:underline">Forgot password?</Link>
              </div>
              <input type="password" required className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
            </div>
            <div className="space-y-2">
               <label className="text-sm font-medium">Simulate Login As</label>
               <select 
                  value={role} 
                  onChange={(e) => setRole(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                >
                  <option value="donor">Donor (Hotel/Restaurant)</option>
                  <option value="receiver">Receiver (NGO/Shelter)</option>
                  <option value="volunteer">Volunteer Driver</option>
                  <option value="admin">Platform Admin</option>
               </select>
            </div>
            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">Sign In</Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Don't have an account?{" "}
            <Link href="/register" className="text-emerald-600 hover:underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
