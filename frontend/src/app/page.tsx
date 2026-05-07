"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Heart, Activity, MapPin, Truck, Leaf } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-6 h-16 flex items-center border-b bg-white">
        <Link className="flex items-center justify-center gap-2" href="#">
          <Heart className="h-6 w-6 text-emerald-600" />
          <span className="font-bold text-xl">Annadhan AI</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4 mt-2" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 mt-2" href="#">
            About
          </Link>
          <div className="flex gap-2 items-center">
            <ThemeToggle />
            <Link href="/login">
              <Button variant="outline">Log in</Button>
            </Link>
            <Link href="/register">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </nav>
      </header>
      
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-emerald-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Smart Surplus Food <span className="text-emerald-600">Redistribution</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Connecting hotels, restaurants, and events with NGOs and shelters using AI-powered matching to eliminate food waste.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-x-4"
              >
                <Link href="/register?role=donor">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-6">Donate Food</Button>
                </Link>
                <Link href="/register?role=receiver">
                  <Button variant="outline" className="text-lg px-8 py-6 bg-white">Receive Food</Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">How It Works</h2>
            <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-4 bg-emerald-100 rounded-full text-emerald-600">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">1. Post Surplus</h3>
                <p className="text-gray-500">Donors post available food and pickup details.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-4 bg-blue-100 rounded-full text-blue-600">
                  <Activity className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">2. AI Matching</h3>
                <p className="text-gray-500">Our system finds the best nearby NGOs based on capacity and urgency.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-4 bg-orange-100 rounded-full text-orange-600">
                  <Truck className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">3. Volunteer Pickup</h3>
                <p className="text-gray-500">Drivers are assigned to pick up and deliver the food safely.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-4 bg-green-100 rounded-full text-green-600">
                  <Leaf className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">4. Track Impact</h3>
                <p className="text-gray-500">View real-time analytics on meals saved and waste reduced.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-gray-500">© 2026 Annadhan AI. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
