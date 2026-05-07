import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Leaf, Truck, Users, TrendingUp } from "lucide-react";

const monthlyData = [
  { month: "Jan", meals: 60 },
  { month: "Feb", meals: 85 },
  { month: "Mar", meals: 110 },
  { month: "Apr", meals: 95 },
  { month: "May", meals: 140 },
  { month: "Jun", meals: 125 },
];

export default function ImpactPage() {
  const maxMeals = Math.max(...monthlyData.map((item) => item.meals));

  return (
    <div className="space-y-6 bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Your Impact
        </h2>
        <p className="text-slate-500 dark:text-slate-400">
          See how your contributions are making a difference.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Meals Saved
            </CardTitle>
            <Heart className="h-4 w-4 text-rose-600 dark:text-rose-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              1,250
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">+150 this month</p>
          </CardContent>
        </Card>

        <Card className="border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Waste Reduced
            </CardTitle>
            <Leaf className="h-4 w-4 text-emerald-600 dark:text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              320 kg
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Equivalent to 400kg CO2
            </p>
          </CardContent>
        </Card>

        <Card className="border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Deliveries
            </CardTitle>
            <Truck className="h-4 w-4 text-blue-600 dark:text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              43
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Successful transfers
            </p>
          </CardContent>
        </Card>

        <Card className="border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-700 dark:text-slate-300">
              NGOs Helped
            </CardTitle>
            <Users className="h-4 w-4 text-purple-600 dark:text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              8
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Across 3 cities
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
        <CardHeader className="flex items-center justify-between">
          <div>
            <CardTitle className="text-slate-900 dark:text-slate-100">
              Impact Insights
            </CardTitle>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Your monthly donations and community impact.
            </p>
          </div>
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
            <TrendingUp className="h-4 w-4" />
            <span className="text-sm font-medium">Growing steadily</span>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
            Thank you for being a consistent donor! Your regular contributions on
            weekends have helped feed over 500 individuals this quarter alone.
            By diverting surplus food from landfills, you have also significantly
            contributed to reducing greenhouse gas emissions.
          </p>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/50">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  Monthly Meals Saved
                </h3>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Last 6 months
                </span>
              </div>

              <div className="flex h-56 items-end gap-4">
                {monthlyData.map((item) => {
                  const heightPercent = (item.meals / maxMeals) * 100;
                  return (
                    <div key={item.month} className="flex flex-1 flex-col items-center gap-2">
                      <div className="flex h-44 w-full items-end justify-center">
                        <div
                          className="w-full max-w-12 rounded-t-lg bg-emerald-500/90 dark:bg-emerald-400"
                          style={{ height: `${heightPercent}%` }}
                        />
                      </div>
                      <div className="text-xs font-medium text-slate-600 dark:text-slate-400">
                        {item.month}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-500">
                        {item.meals}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/50">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                Impact Highlights
              </h3>

              <div className="space-y-3">
                <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/70">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Top contribution day</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
                    Saturday
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/70">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Most helped NGO</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
                    Hope Orphanage
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/70">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Estimated carbon saved</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
                    400 kg CO2
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}