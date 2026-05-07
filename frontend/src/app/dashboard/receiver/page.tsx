"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, MapPin, CheckCircle, XCircle } from "lucide-react";

export default function ReceiverDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Receiver Dashboard</h2>
        <p className="text-muted-foreground">Manage your incoming food donations.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Capacity Remaining</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">150 servings</div>
            <div className="w-full bg-slate-200 rounded-full h-2.5 mt-2">
              <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: "25%" }}></div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Total capacity: 200 servings</p>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-xl font-bold tracking-tight mt-8 mb-4">Action Needed: Matched Donations</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-emerald-200 bg-emerald-50/50">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Buffet Surplus - Taj Hotel</CardTitle>
                <CardDescription>Matched 5 minutes ago</CardDescription>
              </div>
              <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded">High Freshness</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex flex-col">
                <span className="text-slate-500">Food Type</span>
                <span className="font-medium">Mixed Cuisines</span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-500">Quantity</span>
                <span className="font-medium">50 servings</span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-500">Distance</span>
                <span className="font-medium flex items-center gap-1"><MapPin className="h-3 w-3"/> 2.5 km</span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-500">Expires In</span>
                <span className="font-medium text-orange-600">3 hours</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                <CheckCircle className="mr-2 h-4 w-4" /> Accept
              </Button>
              <Button variant="outline" className="flex-1 text-red-600 hover:bg-red-50 hover:text-red-700 border-red-200">
                <XCircle className="mr-2 h-4 w-4" /> Decline
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-xl font-bold tracking-tight mt-8 mb-4">Incoming Deliveries</h3>
      <Card>
        <div className="p-0">
          <table className="w-full text-sm text-left text-slate-500">
            <thead className="text-xs text-slate-700 uppercase bg-slate-50 border-b">
              <tr>
                <th className="px-6 py-3">Donation</th>
                <th className="px-6 py-3">Volunteer</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">ETA</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 font-medium text-slate-900">Bread & Sandwiches (20s)</td>
                <td className="px-6 py-4">Rahul S.</td>
                <td className="px-6 py-4"><span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded flex items-center w-fit gap-1"><Truck className="h-3 w-3"/> On Route</span></td>
                <td className="px-6 py-4 font-medium text-emerald-600">15 mins</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
