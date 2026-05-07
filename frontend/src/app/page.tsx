"use client";

import Link from "next/link";
import { motion, type Variants, type Transition } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  ChevronRight,
  Clock3,
  Globe2,
  Heart,
  Leaf,
  MapPin,
  PackageCheck,
  Route,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  Users,
  UtensilsCrossed,
  Zap,
} from "lucide-react";

import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const fadeUpTransition: Transition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1],
};

const featureCards = [
  {
    icon: Activity,
    title: "AI Matching",
    description:
      "Routes surplus food to the right NGO using urgency, capacity, location, and pickup windows.",
  },
  {
    icon: Route,
    title: "Smart Routing",
    description:
      "Optimizes volunteer pickups with the least travel time and the best delivery sequence.",
  },
  {
    icon: Users,
    title: "Volunteer Network",
    description:
      "Coordinates drivers, shelter staff, and food donors in one clean operational flow.",
  },
  {
    icon: Clock3,
    title: "Real-time Tracking",
    description:
      "Tracks every handoff from donation to delivery with live status updates and auditability.",
  },
  {
    icon: BarChart3,
    title: "Impact Analytics",
    description:
      "Surfaces meals saved, emissions avoided, and donor performance in a single dashboard.",
  },
  {
    icon: ShieldCheck,
    title: "Trust and Safety",
    description:
      "Keeps redistribution reliable with verified partners, timed coordination, and transparency.",
  },
];

const steps = [
  {
    icon: UtensilsCrossed,
    title: "1. Donors post surplus",
    description:
      "Hotels, restaurants, and events log available food, quantity, location, and urgency in seconds.",
  },
  {
    icon: Sparkles,
    title: "2. AI finds the best match",
    description:
      "Our engine compares nearby NGOs and shelters to maximize usefulness and minimize waste.",
  },
  {
    icon: Truck,
    title: "3. Volunteers move fast",
    description:
      "Pickup assignments are distributed with clear timing, routes, and delivery confirmations.",
  },
  {
    icon: BadgeCheck,
    title: "4. Impact is recorded",
    description:
      "Every successful handoff is measured so teams can prove outcomes and improve operations.",
  },
];

const impactStats = [
  { label: "Meals saved", value: "128K+", detail: "served through coordinated redistribution" },
  { label: "NGOs connected", value: "740+", detail: "trusted partner organizations onboarded" },
  { label: "Food waste reduced", value: "41%", detail: "less edible surplus sent to landfill" },
  { label: "Volunteers active", value: "2.4K", detail: "drivers, riders, and coordinators online" },
];

const testimonials = [
  {
    quote:
      "Annadhan AI turned a messy last-minute donation process into a predictable, high-trust flow for our hotel group.",
    name: "Operations Lead, premium hospitality chain",
    role: "Donor partner",
  },
  {
    quote:
      "We now receive the right food at the right time, with visibility we never had before.",
    name: "Program Manager, urban NGO network",
    role: "Receiver partner",
  },
  {
    quote:
      "The volunteer handoff is clear, fast, and measurable. It feels built for real operations, not demos.",
    name: "Fleet Coordinator, community volunteers",
    role: "Delivery partner",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="group flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 shadow-sm ring-1 ring-inset ring-emerald-500/20 transition-transform duration-300 group-hover:-translate-y-0.5 dark:bg-emerald-400/10 dark:text-emerald-400">
              <Heart className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold tracking-[0.24em] text-emerald-600 uppercase dark:text-emerald-400">
                Annadhan AI
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                AI food redistribution platform
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300 lg:flex">
            <a className="transition-colors hover:text-slate-900 dark:hover:text-white" href="#features">
              Features
            </a>
            <a className="transition-colors hover:text-slate-900 dark:hover:text-white" href="#how-it-works">
              How It Works
            </a>
            <a className="transition-colors hover:text-slate-900 dark:hover:text-white" href="#impact">
              Impact
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <Link href="/login" className="hidden sm:block">
              <Button variant="ghost" className="text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button className="gap-2 bg-emerald-600 px-4 shadow-[0_10px_30px_-12px_rgba(16,185,129,0.8)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-slate-200/70 dark:border-slate-800/70">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_32%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.14),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.96),rgba(248,250,252,0.78))] dark:bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.2),transparent_30%),radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_28%),linear-gradient(to_bottom,rgba(15,23,42,0.92),rgba(2,6,23,1))]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

          <div className="relative mx-auto grid max-w-7xl gap-16 px-4 py-20 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-28">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={fadeUpTransition}
              className="flex flex-col justify-center"
            >
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
                <Zap className="h-4 w-4" />
                AI-powered redistribution for food waste at scale
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
                Premium food redistribution, powered by intelligent matching.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl dark:text-slate-300">
                Annadhan AI connects hotels, restaurants, events, NGOs, and volunteers in one elegant workflow so surplus food reaches people quickly, safely, and transparently.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/register?role=donor">
                  <Button className="h-12 gap-2 rounded-full bg-emerald-600 px-6 text-base shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400">
                    Donate Surplus Food
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/register?role=receiver">
                  <Button
                    variant="outline"
                    className="h-12 rounded-full border-slate-300 bg-white/90 px-6 text-base text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-50 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-100 dark:hover:border-emerald-500/40 dark:hover:bg-slate-900"
                  >
                    Receive Food
                  </Button>
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
                  <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  Verified partner network
                </div>
                <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
                  <Globe2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  Live tracking and impact visibility
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ ...fadeUpTransition, duration: 0.65, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-emerald-500/20 via-cyan-400/10 to-transparent blur-3xl" />
              <Card className="relative overflow-hidden border-slate-200/80 bg-white/85 shadow-[0_30px_100px_-50px_rgba(15,23,42,0.45)] backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/70">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Live redistribution pipeline</p>
                      <p className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">Mumbai South District</p>
                    </div>
                    <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                      Active now
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/60">
                      <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-500 dark:text-slate-400">Nearest match</p>
                          <p className="font-semibold text-slate-900 dark:text-white">Children’s Shelter, 1.8 km</p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/60">
                      <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400">
                          <PackageCheck className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-500 dark:text-slate-400">Food ready</p>
                          <p className="font-semibold text-slate-900 dark:text-white">240 meals confirmed</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 space-y-4 rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:to-slate-900">
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl bg-emerald-500/10 p-3 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
                        <Activity className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <p className="font-semibold text-slate-900 dark:text-white">AI score</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Best route with capacity fit and urgency match</p>
                          </div>
                          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                            98 / 100
                          </span>
                        </div>
                        <div className="mt-4 h-2 rounded-full bg-slate-200 dark:bg-slate-800">
                          <div className="h-2 w-[82%] rounded-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-cyan-400" />
                        </div>
                        <div className="mt-4 grid grid-cols-3 gap-3 text-sm text-slate-600 dark:text-slate-300">
                          <div className="rounded-2xl bg-white px-3 py-3 shadow-sm ring-1 ring-slate-200 dark:bg-slate-950/60 dark:ring-slate-800">
                            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">ETA</p>
                            <p className="mt-1 font-semibold text-slate-900 dark:text-white">14 min</p>
                          </div>
                          <div className="rounded-2xl bg-white px-3 py-3 shadow-sm ring-1 ring-slate-200 dark:bg-slate-950/60 dark:ring-slate-800">
                            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Distance</p>
                            <p className="mt-1 font-semibold text-slate-900 dark:text-white">1.8 km</p>
                          </div>
                          <div className="rounded-2xl bg-white px-3 py-3 shadow-sm ring-1 ring-slate-200 dark:bg-slate-950/60 dark:ring-slate-800">
                            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Meals</p>
                            <p className="mt-1 font-semibold text-slate-900 dark:text-white">240</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: [0.42, 0, 0.58, 1],
                }}
                className="absolute -left-4 bottom-10 hidden w-64 rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-2xl shadow-emerald-500/10 backdrop-blur-xl lg:block dark:border-slate-800 dark:bg-slate-900/85"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-emerald-500/10 p-3 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">Smart matching live</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">3 NGOs recommended in under 4 seconds</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 7,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: [0.42, 0, 0.58, 1],
                  delay: 0.8,
                }}
                className="absolute -right-3 top-8 hidden w-56 rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl lg:block dark:border-slate-800 dark:bg-slate-900/85"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-cyan-500/10 p-3 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400">
                    <Leaf className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">Waste avoided</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">18.6 kg saved from landfill today</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={fadeUpTransition}
            className="max-w-2xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-600 dark:text-emerald-400">
              Features
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
              Built like a modern AI operations platform.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Every section is designed to feel sharp, premium, and readable in both themes, with strong contrast and clear visual hierarchy.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featureCards.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ ...fadeUpTransition, delay: index * 0.05 }}
                >
                  <Card className="group h-full border-slate-200 bg-white/90 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10 dark:border-slate-800 dark:bg-slate-900/80">
                    <CardHeader className="space-y-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/15 to-cyan-500/10 text-emerald-600 ring-1 ring-inset ring-emerald-500/15 transition-transform duration-300 group-hover:scale-105 dark:text-emerald-400">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-slate-950 dark:text-white">{feature.title}</CardTitle>
                        <CardDescription className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                          {feature.description}
                        </CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="how-it-works" className="border-y border-slate-200/70 bg-slate-50/70 py-20 dark:border-slate-800/70 dark:bg-slate-900/30 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={fadeUpTransition}
              className="max-w-2xl"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-600 dark:text-emerald-400">
                How It Works
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
                From surplus to service in four clear steps.
              </h2>
            </motion.div>

            <div className="mt-12 grid gap-6 lg:grid-cols-4">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ ...fadeUpTransition, delay: index * 0.06 }}
                  >
                    <Card className="h-full border-slate-200 bg-white/95 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/80">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
                            <Icon className="h-5 w-5" />
                          </div>
                          <ChevronRight className="h-5 w-5 text-slate-300 dark:text-slate-600" />
                        </div>
                        <CardTitle className="mt-4 text-xl text-slate-950 dark:text-white">{step.title}</CardTitle>
                        <CardDescription className="text-base leading-7 text-slate-600 dark:text-slate-300">
                          {step.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="impact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={fadeUpTransition}
            className="max-w-2xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-600 dark:text-emerald-400">
              Impact
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
              Metrics that prove redistribution is working.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Strong operations need strong measurement. These cards are styled to stay crisp and legible in both light and dark environments.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ ...fadeUpTransition, delay: index * 0.06 }}
              >
                <Card className="h-full overflow-hidden border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/80">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</p>
                        <p className="mt-2 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white">{stat.value}</p>
                      </div>
                      <div className="rounded-2xl bg-emerald-500/10 p-3 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
                        <Leaf className="h-5 w-5" />
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{stat.detail}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={fadeUpTransition}
            className="max-w-2xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-600 dark:text-emerald-400">
              Trust
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
              Built for partners who expect reliability.
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ ...fadeUpTransition, delay: index * 0.05 }}
              >
                <Card className="h-full border-slate-200 bg-white/95 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/80">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center gap-1 text-amber-500">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star key={starIndex} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <CardDescription className="text-base leading-8 text-slate-700 dark:text-slate-200">
                      “{testimonial.quote}”
                    </CardDescription>
                    <div>
                      <CardTitle className="text-base text-slate-950 dark:text-white">
                        {testimonial.name}
                      </CardTitle>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={fadeUpTransition}
            className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-emerald-600 to-cyan-600 px-6 py-14 text-white shadow-2xl shadow-emerald-500/20 dark:border-slate-800"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.1),transparent_30%)]" />
            <div className="relative mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Ready to turn surplus food into measurable impact?
              </h2>
              <p className="mt-4 text-lg leading-8 text-white/85">
                Launch with a premium workflow for donors, receivers, and volunteers that feels polished on day one.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/register?role=donor">
                  <Button className="h-12 rounded-full bg-white px-6 text-base text-emerald-700 shadow-lg transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/95">
                    Start donating
                  </Button>
                </Link>
                <Link href="/login">
                  <Button
                    variant="outline"
                    className="h-12 rounded-full border-white/25 bg-white/10 px-6 text-base text-white backdrop-blur hover:bg-white/15 hover:text-white dark:border-white/25 dark:bg-white/10"
                  >
                    Sign in
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/90 dark:border-slate-800 dark:bg-slate-950/90">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-lg font-semibold text-slate-950 dark:text-white">Annadhan AI</span>
            </div>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-400">
              An AI-powered food redistribution platform built to reduce food waste and connect surplus meals with communities across India.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
            <a className="transition-colors hover:text-slate-950 dark:hover:text-white" href="#features">
              Features
            </a>
            <a className="transition-colors hover:text-slate-950 dark:hover:text-white" href="#how-it-works">
              How It Works
            </a>
            <a className="transition-colors hover:text-slate-950 dark:hover:text-white" href="#impact">
              Impact
            </a>
            <a className="transition-colors hover:text-slate-950 dark:hover:text-white" href="/login">
              Login
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}