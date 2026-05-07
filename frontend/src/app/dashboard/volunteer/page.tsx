"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";

export default function VolunteerDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Volunteer Dashboard</h2>
        <p className="text-muted-foreground">Find nearby pickups and deliver food to those in need.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Deliveries Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Distance Covered</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45 km</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600 flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              Active
            </div>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-xl font-bold tracking-tight mt-8 mb-4">Available Tasks Near You</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-blue-200">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Pickup: Taj Hotel</CardTitle>
                <CardDescription>Drop-off: Hope Orphanage</CardDescription>
              </div>
              <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">High Urgency</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2 text-sm text-slate-500">
              <div className="flex justify-between">
                <span>Total Distance:</span>
                <span className="font-medium text-slate-900">4.2 km</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Time:</span>
                <span className="font-medium text-slate-900">20 mins</span>
              </div>
              <div className="flex justify-between">
                <span>Food Size:</span>
                <span className="font-medium text-slate-900">Medium (50 servings)</span>
              </div>
            </div>
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Accept Task</Button>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-xl font-bold tracking-tight mt-8 mb-4">Active Delivery</h3>
      <Card className="border-emerald-500 shadow-emerald-100 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Navigation className="h-5 w-5 text-emerald-600" />
            En Route to Drop-off
          </CardTitle>
          <CardDescription>Deliver to Community Kitchen</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
           <div className="flex gap-4 items-center mb-4">
             <div className="flex-1 bg-slate-100 rounded-lg p-3 text-center">
               <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">ETA</div>
               <div className="text-xl font-bold text-emerald-600">12 min</div>
             </div>
             <div className="flex-1 bg-slate-100 rounded-lg p-3 text-center">
               <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Distance</div>
               <div className="text-xl font-bold">2.1 km</div>
             </div>
           </div>
           
           <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-emerald-500 text-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <MapPin className="w-4 h-4"/>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-slate-200 bg-white shadow-sm opacity-50">
                    <div className="font-bold text-slate-900">Picked Up</div>
                    <div className="text-sm text-slate-500">From Local Bakery</div>
                </div>
              </div>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <MapPin className="w-4 h-4"/>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-emerald-200 bg-emerald-50 shadow-sm">
                    <div className="font-bold text-slate-900">Drop Off</div>
                    <div className="text-sm text-slate-500">Community Kitchen</div>
                    <Button className="w-full mt-3 bg-emerald-600 hover:bg-emerald-700">Mark as Delivered</Button>
                </div>
              </div>
           </div>
        </CardContent>
      </Card>
    </div>
  );
}
