import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Leaf, Truck, Users } from "lucide-react";

export default function ImpactPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Your Impact</h2>
        <p className="text-muted-foreground">See how your contributions are making a difference.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Meals Saved</CardTitle>
            <Heart className="h-4 w-4 text-rose-600 dark:text-rose-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,250</div>
            <p className="text-xs text-muted-foreground">+150 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Waste Reduced</CardTitle>
            <Leaf className="h-4 w-4 text-emerald-600 dark:text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">320 kg</div>
            <p className="text-xs text-muted-foreground">Equivalent to 400kg CO2</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Deliveries</CardTitle>
            <Truck className="h-4 w-4 text-blue-600 dark:text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">43</div>
            <p className="text-xs text-muted-foreground">Successful transfers</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">NGOs Helped</CardTitle>
            <Users className="h-4 w-4 text-purple-600 dark:text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Across 3 cities</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Impact Insights</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Thank you for being a consistent donor! Your regular contributions on weekends have helped feed over 500 individuals this quarter alone. 
            By diverting surplus food from landfills, you have also significantly contributed to reducing greenhouse gas emissions.
          </p>
          <div className="h-48 w-full bg-slate-50 dark:bg-slate-900/50 rounded-md border border-slate-100 dark:border-slate-800 flex items-center justify-center">
            <span className="text-slate-400 text-sm">Monthly Impact Chart (Placeholder)</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
