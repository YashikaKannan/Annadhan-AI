import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PackageOpen, Utensils } from "lucide-react";

export default function HistoryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Received History</h2>
        <p className="text-muted-foreground">Past donations received by your organization.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Received</CardTitle>
            <PackageOpen className="h-4 w-4 text-emerald-600 dark:text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">128</div>
            <p className="text-xs text-muted-foreground">Deliveries accepted</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Meals Served</CardTitle>
            <Utensils className="h-4 w-4 text-blue-600 dark:text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,450</div>
            <p className="text-xs text-muted-foreground">Estimated servings</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Deliveries</CardTitle>
        </CardHeader>
        <div className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
              <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-900/50 dark:text-slate-300 border-b dark:border-slate-800">
                <tr>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3">Food Item</th>
                  <th className="px-6 py-3">Quantity</th>
                  <th className="px-6 py-3">Donor</th>
                  <th className="px-6 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-transparent border-b dark:border-slate-800">
                  <td className="px-6 py-4">May 7, 2026</td>
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100">Assorted Sandwiches</td>
                  <td className="px-6 py-4">30 servings</td>
                  <td className="px-6 py-4">City Bakery</td>
                  <td className="px-6 py-4"><span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 text-xs font-medium px-2.5 py-0.5 rounded">Received</span></td>
                </tr>
                <tr className="bg-white dark:bg-transparent border-b dark:border-slate-800">
                  <td className="px-6 py-4">May 6, 2026</td>
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100">Rice & Lentils</td>
                  <td className="px-6 py-4">100 servings</td>
                  <td className="px-6 py-4">Grand Hotel</td>
                  <td className="px-6 py-4"><span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 text-xs font-medium px-2.5 py-0.5 rounded">Received</span></td>
                </tr>
                <tr className="bg-white dark:bg-transparent border-b dark:border-slate-800">
                  <td className="px-6 py-4">May 5, 2026</td>
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100">Vegetable Stew</td>
                  <td className="px-6 py-4">40 servings</td>
                  <td className="px-6 py-4">Corporate Canteen</td>
                  <td className="px-6 py-4"><span className="bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400 text-xs font-medium px-2.5 py-0.5 rounded">Rejected (Expired)</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </div>
  );
}
