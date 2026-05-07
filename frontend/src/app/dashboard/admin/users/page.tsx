import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users as UsersIcon, ShieldCheck, ShieldAlert, Check, X } from "lucide-react";

export default function UsersPage() {
  return (
    <div className="space-y-6 text-slate-900 dark:text-slate-100">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">User Management</h2>
        <p className="text-muted-foreground">Manage and verify donors, receivers, and volunteers.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <UsersIcon className="h-4 w-4 text-blue-600 dark:text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Donors</CardTitle>
            <div className="h-4 w-4 rounded-full bg-emerald-100 border border-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">452</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receivers</CardTitle>
            <div className="h-4 w-4 rounded-full bg-blue-100 border border-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">312</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Volunteers</CardTitle>
            <div className="h-4 w-4 rounded-full bg-purple-100 border border-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">484</div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/70">
        <CardHeader>
          <CardTitle className="text-slate-900 dark:text-slate-100">Recent Users & Verifications</CardTitle>
          <CardDescription>Review pending verifications to ensure platform safety.</CardDescription>
        </CardHeader>
        <div className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
              <thead className="border-b bg-slate-50 text-xs uppercase text-slate-700 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-300">
                <tr>
                  <th className="px-6 py-3">Name / Organization</th>
                  <th className="px-6 py-3">Role</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Joined</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white dark:border-slate-800 dark:bg-slate-950/40">
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100">City Fresh Bakery</td>
                  <td className="px-6 py-4"><span className="rounded bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">Donor</span></td>
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                      <ShieldCheck className="h-4 w-4" /> Verified
                    </span>
                  </td>
                  <td className="px-6 py-4">May 1, 2026</td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="outline" size="sm">View</Button>
                  </td>
                </tr>
                <tr className="border-b bg-amber-50/50 dark:border-slate-800 dark:bg-amber-900/10">
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100">Rahul Sharma</td>
                  <td className="px-6 py-4"><span className="rounded bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-400">Volunteer</span></td>
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400 font-medium">
                      <ShieldAlert className="h-4 w-4" /> Pending
                    </span>
                  </td>
                  <td className="px-6 py-4">May 6, 2026</td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <Button variant="outline" size="sm" className="text-emerald-600 border-emerald-200 hover:bg-emerald-50 dark:border-emerald-900 dark:hover:bg-emerald-900/20"><Check className="h-4 w-4" /></Button>
                    <Button variant="outline" size="sm" className="text-rose-600 border-rose-200 hover:bg-rose-50 dark:border-rose-900 dark:hover:bg-rose-900/20"><X className="h-4 w-4" /></Button>
                  </td>
                </tr>
                <tr className="border-b bg-white dark:border-slate-800 dark:bg-slate-950/40">
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100">Downtown Shelter</td>
                  <td className="px-6 py-4"><span className="rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">Receiver</span></td>
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                      <ShieldCheck className="h-4 w-4" /> Verified
                    </span>
                  </td>
                  <td className="px-6 py-4">April 15, 2026</td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="outline" size="sm">View</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </div>
  );
}
