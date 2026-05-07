import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Activity, Package, Truck, Heart } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6 text-slate-900 dark:text-slate-100">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Platform Analytics</h2>
        <p className="text-muted-foreground">Key performance metrics and overall impact of Annadhan AI.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Donations</CardTitle>
            <Package className="h-4 w-4 text-emerald-600 dark:text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">14,250</div>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center mt-1">
              <Activity className="h-3 w-3 mr-1" /> +12% this month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Meals Saved</CardTitle>
            <Heart className="h-4 w-4 text-rose-600 dark:text-rose-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85,400</div>
            <p className="text-xs text-muted-foreground mt-1">Total meals distributed</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Waste Reduced</CardTitle>
            <Activity className="h-4 w-4 text-blue-600 dark:text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">21,350 kg</div>
            <p className="text-xs text-muted-foreground mt-1">Equivalent to 42t CO2e</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Delivery Success Rate</CardTitle>
            <Truck className="h-4 w-4 text-purple-600 dark:text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">96.8%</div>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center mt-1">
              <Activity className="h-3 w-3 mr-1" /> +2.1% this month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/70">
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-slate-100">Donations by Area</CardTitle>
            <CardDescription>Geographic distribution of food pickup locations.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex h-[250px] w-full items-center justify-center rounded-md border border-slate-100 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
              <span className="text-sm text-slate-400 dark:text-slate-500">Area-wise Chart (Placeholder)</span>
            </div>
          </CardContent>
        </Card>
        <Card className="border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/70">
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-slate-100">Platform Growth</CardTitle>
            <CardDescription>Monthly active users and new registrations.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex h-[250px] w-full items-center justify-center rounded-md border border-slate-100 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
              <span className="text-sm text-slate-400 dark:text-slate-500">Growth Chart (Placeholder)</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
