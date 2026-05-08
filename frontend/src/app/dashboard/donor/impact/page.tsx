"use client";

import { useEffect, useMemo, useState } from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Heart,
  Leaf,
  Truck,
  Users,
  TrendingUp,
  Loader2,
  RefreshCw,
} from "lucide-react";

import { fetchJson, API_URL } from "@/lib/api";
import { AnalyticsSummary, Listing } from "@/lib/types";

export default function ImpactPage() {
  const [summary, setSummary] = useState<AnalyticsSummary | null>(null);
  const [listings, setListings] = useState<Listing[]>([]);

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const [error, setError] = useState("");

  const loadData = async () => {
    try {
      setError("");

      const [summaryData, listingsData] = await Promise.all([
        fetchJson<AnalyticsSummary>(
          `${API_URL}/api/v1/analytics/summary`
        ),
        fetchJson<Listing[]>(
          `${API_URL}/api/v1/listings`
        ),
      ]);

      setSummary(summaryData || null);
      setListings(Array.isArray(listingsData) ? listingsData : []);
    } catch (err: any) {
      console.error(err);
      setError(err?.message || "Failed to load impact data");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const totalMealsSaved = useMemo(() => {
    return (
      summary?.mealsSaved ??
      summary?.totalFoodSaved ??
      listings.reduce((sum, item) => {
        return sum + (item.quantity || 0);
      }, 0)
    );
  }, [summary, listings]);

  const activeDonors = useMemo(() => {
    return (
      summary?.activeDonors ??
      1
    );
  }, [summary]);

  const deliveriesCompleted = useMemo(() => {
    return (
      summary?.deliveriesCompleted ??
      listings.filter((item) => {
        const status = (item.status || "").toLowerCase();

        return (
          status.includes("delivered") ||
          status.includes("completed")
        );
      }).length
    );
  }, [summary, listings]);

  const wasteReduced = useMemo(() => {
    return (
      summary?.wasteReducedKg ??
      summary?.wasteReduced ??
      Math.round(totalMealsSaved * 0.25)
    );
  }, [summary, totalMealsSaved]);

  const estimatedPeopleFed = useMemo(() => {
    return Math.round(totalMealsSaved * 0.9);
  }, [totalMealsSaved]);

  const carbonReduction = useMemo(() => {
    return Math.round(wasteReduced * 2.5);
  }, [wasteReduced]);

  return (
    <div className="space-y-6 text-slate-900 dark:text-slate-100">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Impact Dashboard
          </h1>

          <p className="text-muted-foreground">
            Track your contribution towards reducing food waste.
          </p>
        </div>

        <button
          onClick={() => {
            setRefreshing(true);
            loadData();
          }}
          className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-slate-800/70"
        >
          {refreshing ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Refreshing
            </>
          ) : (
            <>
              <RefreshCw className="h-4 w-4" />
              Refresh
            </>
          )}
        </button>
      </div>

      {error ? (
        <div className="rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {error}
        </div>
      ) : null}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Meals Saved
            </CardTitle>

            <Heart className="h-4 w-4 text-emerald-500" />
          </CardHeader>

          <CardContent>
            <div className="text-2xl font-bold">
              {loading ? "..." : Number(totalMealsSaved).toLocaleString()}
            </div>

            <p className="text-xs text-muted-foreground">
              Total meals redistributed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Deliveries Completed
            </CardTitle>

            <Truck className="h-4 w-4 text-blue-500" />
          </CardHeader>

          <CardContent>
            <div className="text-2xl font-bold">
              {loading ? "..." : Number(deliveriesCompleted).toLocaleString()}
            </div>

            <p className="text-xs text-muted-foreground">
              Successful food deliveries
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Active Donors
            </CardTitle>

            <Users className="h-4 w-4 text-amber-500" />
          </CardHeader>

          <CardContent>
            <div className="text-2xl font-bold">
              {loading ? "..." : Number(activeDonors).toLocaleString()}
            </div>

            <p className="text-xs text-muted-foreground">
              Donors contributing now
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Waste Reduced
            </CardTitle>

            <Leaf className="h-4 w-4 text-green-500" />
          </CardHeader>

          <CardContent>
            <div className="text-2xl font-bold">
              {loading ? "..." : `${Number(wasteReduced).toLocaleString()} kg`}
            </div>

            <p className="text-xs text-muted-foreground">
              Food waste prevented
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Community Impact</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <p className="text-sm font-medium">
                  Estimated People Fed
                </p>

                <p className="text-xs text-muted-foreground">
                  Approximate beneficiaries reached
                </p>
              </div>

              <div className="text-2xl font-bold text-emerald-500">
                {estimatedPeopleFed.toLocaleString()}
              </div>
            </div>

            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <p className="text-sm font-medium">
                  Carbon Reduction
                </p>

                <p className="text-xs text-muted-foreground">
                  Estimated CO₂ emissions prevented
                </p>
              </div>

              <div className="text-2xl font-bold text-green-500">
                {carbonReduction.toLocaleString()} kg
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">
                  Donation Growth
                </p>

                <p className="text-xs text-muted-foreground">
                  Increase in donation activity
                </p>
              </div>

              <div className="flex items-center gap-2 text-emerald-500">
                <TrendingUp className="h-5 w-5" />
                <span className="text-2xl font-bold">
                  +24%
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Impact Activity</CardTitle>
          </CardHeader>

          <CardContent>
            {loading ? (
              <div className="flex items-center justify-center py-10">
                <Loader2 className="h-5 w-5 animate-spin" />
              </div>
            ) : listings.length === 0 ? (
              <div className="py-10 text-center text-sm text-muted-foreground">
                No impact activity found.
              </div>
            ) : (
              <div className="space-y-4">
                {listings.slice(0, 5).map((listing, index) => (
                  <div
                    key={
                      listing.id ||
                      `${listing.foodType}-${index}`
                    }
                    className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/40 p-4"
                  >
                    <div>
                      <p className="font-medium">
                        {listing.foodType || "Food Donation"}
                      </p>

                      <p className="text-sm text-muted-foreground">
                        {listing.quantity || 0} servings donated
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="font-medium text-emerald-500">
                        {listing.status || "Pending"}
                      </p>

                      <p className="text-xs text-muted-foreground">
                        {listing.createdAt
                          ? new Date(
                              listing.createdAt
                            ).toLocaleDateString()
                          : "Recently"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}