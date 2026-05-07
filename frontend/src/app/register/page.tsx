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
            <label className="text-sm font-medium">I am registering as</label>
            <div className="grid grid-cols-3 gap-2">
                <Button 
                    type="button" 
                    variant={role === "donor" ? "default" : "outline"} 
                    className={role === "donor" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                    onClick={() => setRole("donor")}
                >
                    Donor
                </Button>
                <Button 
                    type="button" 
                    variant={role === "receiver" ? "default" : "outline"} 
                    className={role === "receiver" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                    onClick={() => setRole("receiver")}
                >
                    Receiver
                </Button>
                <Button 
                    type="button" 
                    variant={role === "volunteer" ? "default" : "outline"} 
                    className={role === "volunteer" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                    onClick={() => setRole("volunteer")}
                >
                    Volunteer
                </Button>
            </div>
        </div>
        <div className="space-y-2">
            <label className="text-sm font-medium">Organization / Full Name</label>
            <input type="text" required className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="e.g. Taj Hotel" />
        </div>
        <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <input type="email" required className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="m@example.com" />
        </div>
        <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <input type="password" required className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
        </div>
        <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">Create Account</Button>
    </form>
  )
}

export default function Register() {
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
          <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
          <CardDescription>Join our platform to fight food waste</CardDescription>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<div>Loading...</div>}>
            <RegisterForm />
          </Suspense>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-emerald-600 hover:underline">
              Log in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
