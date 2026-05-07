import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, AlertCircle } from "lucide-react";

export default function IncomingPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Incoming Donations</h2>
          <p className="text-muted-foreground">Review and manage pending food deliveries.</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">Accepting Donations</span>
        </div>
      </div>

      <div className="grid gap-4">
        <Card className="border-l-4 border-l-amber-500">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-lg">Mixed Veg Curry & Rice</CardTitle>
                <CardDescription className="flex items-center gap-1 mt-1 text-amber-600 dark:text-amber-500 font-medium">
                  <AlertCircle className="h-3 w-3" />
                  Expires in 2 hours
                </CardDescription>
              </div>
              <span className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 text-xs font-medium px-2.5 py-0.5 rounded">High Urgency</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-3 gap-4 text-sm mb-4">
              <div>
                <span className="text-slate-500 dark:text-slate-400 block mb-1">Quantity</span>
                <span className="font-medium text-slate-900 dark:text-slate-100">40 servings</span>
              </div>
              <div>
                <span className="text-slate-500 dark:text-slate-400 block mb-1">Distance & ETA</span>
                <span className="font-medium flex items-center gap-1 text-slate-900 dark:text-slate-100">
                  <MapPin className="h-3 w-3" />
                  3.5 km (15 mins)
                </span>
              </div>
              <div>
                <span className="text-slate-500 dark:text-slate-400 block mb-1">Prepared At</span>
                <span className="font-medium flex items-center gap-1 text-slate-900 dark:text-slate-100">
                  <Clock className="h-3 w-3" />
                  1:00 PM
                </span>
              </div>
            </div>
            <div className="flex gap-3 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white w-full sm:w-auto">Accept Delivery</Button>
              <Button variant="outline" className="w-full sm:w-auto">Decline</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-lg">Fresh Bread & Pastries</CardTitle>
                <CardDescription className="flex items-center gap-1 mt-1">
                  Expires tomorrow
                </CardDescription>
              </div>
              <span className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 text-xs font-medium px-2.5 py-0.5 rounded">Standard</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-3 gap-4 text-sm mb-4">
              <div>
                <span className="text-slate-500 dark:text-slate-400 block mb-1">Quantity</span>
                <span className="font-medium text-slate-900 dark:text-slate-100">20 servings</span>
              </div>
              <div>
                <span className="text-slate-500 dark:text-slate-400 block mb-1">Distance & ETA</span>
                <span className="font-medium flex items-center gap-1 text-slate-900 dark:text-slate-100">
                  <MapPin className="h-3 w-3" />
                  5.2 km (25 mins)
                </span>
              </div>
              <div>
                <span className="text-slate-500 dark:text-slate-400 block mb-1">Prepared At</span>
                <span className="font-medium flex items-center gap-1 text-slate-900 dark:text-slate-100">
                  <Clock className="h-3 w-3" />
                  8:00 AM
                </span>
              </div>
            </div>
            <div className="flex gap-3 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white w-full sm:w-auto">Accept Delivery</Button>
              <Button variant="outline" className="w-full sm:w-auto">Decline</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
