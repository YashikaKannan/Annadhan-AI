"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Activity, Clock } from "lucide-react";
import { useState } from "react";

export default function DonorDashboard() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Donor Dashboard</h2>
        <p className="text-muted-foreground">Welcome back! Here's your impact overview.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Meals Saved</CardTitle>
            <Activity className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,250</div>
            <p className="text-xs text-muted-foreground">+20% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Donations</CardTitle>
            <Package className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Pending pickup</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Waste Reduced</CardTitle>
            <Clock className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">320 kg</div>
            <p className="text-xs text-muted-foreground">Total to date</p>
          </CardContent>
        </Card>
      </div>

      {!showForm ? (
        <Card className="bg-emerald-50 border-emerald-200">
          <CardHeader>
            <CardTitle>Have Surplus Food?</CardTitle>
            <CardDescription>Post a new donation and we'll match it with a nearby NGO.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => setShowForm(true)} className="bg-emerald-600 hover:bg-emerald-700">Create Donation</Button>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>New Food Donation</CardTitle>
            <CardDescription>Enter details about the surplus food.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Food Type</label>
                  <input type="text" className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="e.g. Cooked Rice & Curry" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Quantity (Servings)</label>
                  <input type="number" className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Expiry Window (Hours)</label>
                  <input type="number" className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="4" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Special Notes</label>
                  <input type="text" className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Contains nuts" />
                </div>
              </div>
              <div className="flex gap-2 justify-end pt-4">
                <Button variant="outline" onClick={() => setShowForm(false)}>Cancel</Button>
                <Button type="button" onClick={() => setShowForm(false)} className="bg-emerald-600 hover:bg-emerald-700">Submit Donation</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <h3 className="text-xl font-bold tracking-tight mt-8 mb-4">Recent Donations</h3>
      <Card>
        <div className="p-0">
          <table className="w-full text-sm text-left text-slate-500">
            <thead className="text-xs text-slate-700 uppercase bg-slate-50 border-b">
              <tr>
                <th className="px-6 py-3">Food Item</th>
                <th className="px-6 py-3">Quantity</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Matched To</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 font-medium text-slate-900">Mixed Veg Curry & Rice</td>
                <td className="px-6 py-4">40 servings</td>
                <td className="px-6 py-4"><span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Assigned</span></td>
                <td className="px-6 py-4">Hope Orphanage</td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 font-medium text-slate-900">Bread & Sandwiches</td>
                <td className="px-6 py-4">20 servings</td>
                <td className="px-6 py-4"><span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded">Delivered</span></td>
                <td className="px-6 py-4">Community Kitchen</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
