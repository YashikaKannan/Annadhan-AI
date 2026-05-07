import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Navigation, TrendingUp } from "lucide-react";

export default function HistoryPage() {
  return (
    <div className="space-y-6 bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Delivery History
        </h2>
        <p className="text-muted-foreground">
          Your past deliveries and volunteer impact.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Completed Deliveries
            </CardTitle>
            <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              34
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Successful drop-offs
            </p>
          </CardContent>
        </Card>

        <Card className="border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Distance Covered
            </CardTitle>
            <Navigation className="h-4 w-4 text-blue-600 dark:text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              142 km
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Total distance driven
            </p>
          </CardContent>
        </Card>

        <Card className="border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Success Rate
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-emerald-600 dark:text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              98%
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              On-time deliveries
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="overflow-hidden border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
        <CardHeader className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
          <CardTitle className="text-slate-900 dark:text-slate-100">
            Recent Routes
          </CardTitle>
        </CardHeader>

        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700 dark:text-slate-300">
              <thead className="border-b border-slate-200 bg-slate-100 text-xs uppercase text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                <tr>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3">Pickup</th>
                  <th className="px-6 py-3">Drop-off</th>
                  <th className="px-6 py-3">Distance</th>
                  <th className="px-6 py-3">Status</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950/40">
                  <td className="px-6 py-4 text-slate-700 dark:text-slate-300">
                    May 7, 2026
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100">
                    City Bakery
                  </td>
                  <td className="px-6 py-4 text-slate-700 dark:text-slate-300">
                    Community Shelter
                  </td>
                  <td className="px-6 py-4 text-slate-700 dark:text-slate-300">
                    3.2 km
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-medium text-emerald-600 dark:text-emerald-400">
                      Completed
                    </span>
                  </td>
                </tr>

                <tr className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950/40">
                  <td className="px-6 py-4 text-slate-700 dark:text-slate-300">
                    May 5, 2026
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100">
                    Grand Hotel
                  </td>
                  <td className="px-6 py-4 text-slate-700 dark:text-slate-300">
                    Hope Orphanage
                  </td>
                  <td className="px-6 py-4 text-slate-700 dark:text-slate-300">
                    5.8 km
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-medium text-emerald-600 dark:text-emerald-400">
                      Completed
                    </span>
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-950/40">
                  <td className="px-6 py-4 text-slate-700 dark:text-slate-300">
                    May 2, 2026
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100">
                    Corporate Canteen
                  </td>
                  <td className="px-6 py-4 text-slate-700 dark:text-slate-300">
                    City Shelter
                  </td>
                  <td className="px-6 py-4 text-slate-700 dark:text-slate-300">
                    4.1 km
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-medium text-rose-600 dark:text-rose-400">
                      Failed (No Show)
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}