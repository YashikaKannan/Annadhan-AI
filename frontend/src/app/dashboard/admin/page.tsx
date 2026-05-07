"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, AlertTriangle, ShieldCheck } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', donations: 40, wasteReduced: 240 },
  { name: 'Tue', donations: 30, wasteReduced: 139 },
  { name: 'Wed', donations: 20, wasteReduced: 980 },
  { name: 'Thu', donations: 27, wasteReduced: 390 },
  { name: 'Fri', donations: 18, wasteReduced: 480 },
  { name: 'Sat', donations: 23, wasteReduced: 380 },
  { name: 'Sun', donations: 34, wasteReduced: 430 },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6 text-slate-900 dark:text-slate-100">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Admin Dashboard</h2>
        <p className="text-muted-foreground">Platform overview and user management.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,245</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Verifications</CardTitle>
            <ShieldCheck className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">Action required</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Failed Deliveries</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Investigate immediately</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Platform Health</CardTitle>
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">99.9%</div>
            <p className="text-xs text-muted-foreground">Uptime this month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/70">
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-slate-100">Impact Analytics</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip cursor={{fill: '#f1f5f9'}} />
                  <Bar dataKey="donations" fill="#10b981" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="wasteReduced" fill="#94a3b8" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3 border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/70">
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-slate-100">Recent Verifications Needed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="ml-4 space-y-1 flex-1">
                  <p className="text-sm font-medium leading-none">Global Catering Co.</p>
                  <p className="text-sm text-muted-foreground">Donor Registration</p>
                </div>
                <div className="ml-auto font-medium">
                  <span className="rounded bg-orange-100 px-2.5 py-0.5 text-xs text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">Pending</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="ml-4 space-y-1 flex-1">
                  <p className="text-sm font-medium leading-none">City Shelter Home</p>
                  <p className="text-sm text-muted-foreground">Receiver Registration</p>
                </div>
                <div className="ml-auto font-medium">
                  <span className="rounded bg-orange-100 px-2.5 py-0.5 text-xs text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">Pending</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
