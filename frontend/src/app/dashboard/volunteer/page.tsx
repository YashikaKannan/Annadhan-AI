"use client";

import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Navigation,
  Package,
  Clock,
  Truck,
  CheckCircle2,
} from "lucide-react";

const tasks = [
  {
    id: 1,
    pickup: "Taj Hotel",
    dropoff: "Hope Orphanage",
    distance: "4.2 km",
    eta: "20 mins",
    servings: "50 servings",
    urgency: "High Urgency",
    status: "Available",
  },
  {
    id: 2,
    pickup: "City Bakery",
    dropoff: "Community Kitchen",
    distance: "2.8 km",
    eta: "14 mins",
    servings: "30 servings",
    urgency: "Medium",
    status: "Available",
  },
  {
    id: 3,
    pickup: "Grand Hotel",
    dropoff: "Shelter Home",
    distance: "5.6 km",
    eta: "25 mins",
    servings: "80 servings",
    urgency: "High Urgency",
    status: "Available",
  },
];

export default function VolunteerDashboard() {
  const router = useRouter();

  const handleAcceptTask = (taskId: number) => {
    // later you can save this task to Firestore or state
    router.push("/dashboard/volunteer/active");
  };

  const handleViewRoute = (pickup: string, dropoff: string) => {
    const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
      pickup
    )}&destination=${encodeURIComponent(dropoff)}&travelmode=driving`;
    window.open(url, "_blank");
  };

  return (
    <div className="space-y-6 bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Volunteer Dashboard
        </h2>
        <p className="text-slate-500 dark:text-slate-400">
          Find nearby pickups and deliver food to those in need.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Deliveries Completed
            </CardTitle>
            <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">12</div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              All time successful drop-offs
            </p>
          </CardContent>
        </Card>

        <Card className="border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Distance Covered
            </CardTitle>
            <Truck className="h-4 w-4 text-blue-600 dark:text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">45 km</div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Total distance traveled
            </p>
          </CardContent>
        </Card>

        <Card className="border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Status
            </CardTitle>
            <Clock className="h-4 w-4 text-emerald-600 dark:text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-2xl font-bold text-emerald-600 dark:text-emerald-400">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
              </span>
              Active
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              You are available for tasks
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Available Tasks Near You
        </h3>
        <Button className="bg-emerald-600 text-white hover:bg-emerald-700">
          Refresh Tasks
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {tasks.map((task) => (
          <Card
            key={task.id}
            className="border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
          >
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle className="text-slate-900 dark:text-slate-100">
                    Pickup: {task.pickup}
                  </CardTitle>
                  <CardDescription className="text-slate-500 dark:text-slate-400">
                    Drop-off: {task.dropoff}
                  </CardDescription>
                </div>
                <span
                  className={
                    task.urgency === "High Urgency"
                      ? "rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800 dark:bg-orange-900/40 dark:text-orange-300"
                      : "rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/40 dark:text-blue-300"
                  }
                >
                  {task.urgency}
                </span>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-3 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/40">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500 dark:text-slate-400">Distance</span>
                  <span className="font-medium text-slate-900 dark:text-slate-100">{task.distance}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500 dark:text-slate-400">Estimated Time</span>
                  <span className="font-medium text-slate-900 dark:text-slate-100">{task.eta}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500 dark:text-slate-400">Food Size</span>
                  <span className="font-medium text-slate-900 dark:text-slate-100">{task.servings}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500 dark:text-slate-400">Status</span>
                  <span className="font-medium text-emerald-600 dark:text-emerald-400">
                    {task.status}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <MapPin className="h-4 w-4" />
                <span>Pickup and drop locations are available on map</span>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row">
                <Button
                  onClick={() => handleAcceptTask(task.id)}
                  className="flex-1 bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  Accept Task
                </Button>

                <Button
                  onClick={() => handleViewRoute(task.pickup, task.dropoff)}
                  variant="outline"
                  className="flex-1 border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  <Navigation className="mr-2 h-4 w-4" />
                  View Route
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border border-emerald-200 bg-emerald-50 shadow-sm dark:border-emerald-900 dark:bg-emerald-950/20">
        <CardHeader>
          <CardTitle className="text-emerald-800 dark:text-emerald-400">
            Ready for Live Delivery
          </CardTitle>
          <CardDescription className="text-emerald-700 dark:text-emerald-500">
            Once you accept a task, the live navigation and status page will open.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button className="bg-emerald-600 text-white hover:bg-emerald-700">
            Start Delivery Mode
          </Button>
          <Button
            variant="outline"
            className="border-emerald-200 text-emerald-700 hover:bg-emerald-100 dark:border-emerald-900 dark:text-emerald-400 dark:hover:bg-emerald-950"
          >
            View Active Delivery
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}