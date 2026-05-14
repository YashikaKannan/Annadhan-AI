"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Heart } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/lib/firebase";

import { doc, setDoc } from "firebase/firestore";

export default function Register() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donor");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      // Create Firebase user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const uid = userCredential.user.uid;

      // Save user data to Firestore
      await setDoc(doc(db, "users", uid), {
        email,
        role,
        createdAt: new Date().toISOString(),
      });

      // Redirect to dashboard
      router.push(`/dashboard/${role}`);
    } catch (err: any) {
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-50 p-4 dark:bg-slate-950">

      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>

      <Card className="w-full max-w-md border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900/80">

        <CardHeader className="space-y-1 items-center">

          <Link
            href="/"
            className="flex items-center gap-2 mb-4 text-emerald-600"
          >
            <Heart className="h-8 w-8" />

            <span className="font-bold text-2xl text-slate-900 dark:text-slate-100">
              Annadhan AI
            </span>
          </Link>

          <CardTitle className="text-2xl font-bold text-slate-950 dark:text-slate-100">
            Create Account
          </CardTitle>

          <CardDescription>
            Register to start donating or receiving food
          </CardDescription>

        </CardHeader>

        <CardContent>

          <form onSubmit={handleRegister} className="space-y-4">

            {/* Email */}
            <div className="space-y-2">

              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Email
              </label>

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="m@example.com"
                className="flex h-10 w-full rounded-md border border-slate-300 bg-white/90 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-100 dark:placeholder:text-slate-500"
              />

            </div>

            {/* Password */}
            <div className="space-y-2">

              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Password
              </label>

              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex h-10 w-full rounded-md border border-slate-300 bg-white/90 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-100 dark:placeholder:text-slate-500"
              />

            </div>

            {/* Role */}
            <div className="space-y-2">

              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Select Role
              </label>

              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="flex h-10 w-full rounded-md border border-slate-300 bg-white/90 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-100"
              >
                <option value="donor">
                  Donor (Hotel/Restaurant)
                </option>

                <option value="receiver">
                  Receiver (NGO/Shelter)
                </option>

                <option value="volunteer">
                  Volunteer Driver
                </option>

                <option value="admin">
                  Platform Admin
                </option>
              </select>

            </div>

            {/* Error */}
            {error && (
              <p className="text-sm text-red-500">
                {error}
              </p>
            )}

            {/* Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </Button>

          </form>

          <div className="mt-4 text-center text-sm text-slate-600 dark:text-slate-400">

            Already have an account?{" "}

            <Link
              href="/login"
              className="text-emerald-600 hover:underline dark:text-emerald-400"
            >
              Sign in
            </Link>

          </div>

        </CardContent>
      </Card>
    </div>
  );
}