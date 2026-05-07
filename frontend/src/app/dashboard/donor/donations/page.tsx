import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Clock, CheckCircle } from "lucide-react";

export default function DonationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">My Donations</h2>
        <p className="text-muted-foreground">Manage and track your food donations.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Donations</CardTitle>
            <Package className="h-4 w-4 text-emerald-600 dark:text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">Lifetime donations made</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Pickups</CardTitle>
            <Clock className="h-4 w-4 text-amber-600 dark:text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Awaiting volunteer arrival</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">43</div>
            <p className="text-xs text-muted-foreground">Successfully delivered</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Donation History</CardTitle>
        </CardHeader>
        <div className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
              <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-900/50 dark:text-slate-300 border-b dark:border-slate-800">
                <tr>
                  <th className="px-6 py-3">Food Item</th>
                  <th className="px-6 py-3">Quantity</th>
                  <th className="px-6 py-3">Matched Receiver</th>
                  <th className="px-6 py-3">Pickup Time</th>
                  <th className="px-6 py-3">Expiry</th>
                  <th className="px-6 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-transparent border-b dark:border-slate-800">
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100">Mixed Veg Curry & Rice</td>
                  <td className="px-6 py-4">40 servings</td>
                  <td className="px-6 py-4">Hope Orphanage</td>
                  <td className="px-6 py-4">Today, 2:30 PM</td>
                  <td className="px-6 py-4">Today, 6:00 PM</td>
                  <td className="px-6 py-4"><span className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 text-xs font-medium px-2.5 py-0.5 rounded">Pending Pickup</span></td>
                </tr>
                <tr className="bg-white dark:bg-transparent border-b dark:border-slate-800">
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100">Bread & Sandwiches</td>
                  <td className="px-6 py-4">20 servings</td>
                  <td className="px-6 py-4">Community Kitchen</td>
                  <td className="px-6 py-4">Yesterday, 5:00 PM</td>
                  <td className="px-6 py-4">Yesterday, 9:00 PM</td>
                  <td className="px-6 py-4"><span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 text-xs font-medium px-2.5 py-0.5 rounded">Delivered</span></td>
                </tr>
                <tr className="bg-white dark:bg-transparent border-b dark:border-slate-800">
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100">Leftover Buffet Food</td>
                  <td className="px-6 py-4">100 servings</td>
                  <td className="px-6 py-4">City Shelter</td>
                  <td className="px-6 py-4">May 5, 11:00 PM</td>
                  <td className="px-6 py-4">May 6, 2:00 AM</td>
                  <td className="px-6 py-4"><span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 text-xs font-medium px-2.5 py-0.5 rounded">Delivered</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </div>
  );
}
