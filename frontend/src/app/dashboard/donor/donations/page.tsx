"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Package,
  Clock,
  CheckCircle,
  Loader2,
  RefreshCw,
} from "lucide-react";

import { fetchJson, API_URL } from "@/lib/api";
import { Listing, AnalyticsSummary } from "@/lib/types";

function getStatusColor(status?: string) {
  const value = (status || "").toLowerCase();

  if (value.includes("delivered") || value.includes("completed")) {
    return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300";
  }

  if (value.includes("pending")) {
    return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300";
  }

  if (value.includes("cancel")) {
    return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
  }

  return "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300";
}

export default function DonationsPage() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [summary, setSummary] = useState<AnalyticsSummary | null>(null);

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const [error, setError] = useState("");

  const loadData = async () => {
    try {
      setError("");

      const [listingsData, summaryData] = await Promise.all([
        fetchJson<Listing[]>(`${API_URL}/api/v1/listings`),
        fetchJson<AnalyticsSummary>(
          `${API_URL}/api/v1/analytics/summary`
        ),
      ]);

      setListings(Array.isArray(listingsData) ? listingsData : []);
      setSummary(summaryData || null);
    } catch (err: any) {
      console.error(err);
      setError(err?.message || "Failed to load donations");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const mealsSaved = useMemo(() => {
    return (
      summary?.mealsSaved ??
      summary?.totalFoodSaved ??
      listings.reduce((sum, item) => sum + (item.quantity || 0), 0)
    );
  }, [summary, listings]);

  const activeDonations = useMemo(() => {
    return (
      summary?.activeDonations ??
      listings.filter((item) => {
        const status = (item.status || "").toLowerCase();
        return (
          status.includes("pending") ||
          status.includes("active") ||
          status.includes("assigned")
        );
      }).length
    );
  }, [summary, listings]);

  const wasteReduced = useMemo(() => {
    return (
      summary?.wasteReducedKg ??
      summary?.wasteReduced ??
      Math.round(mealsSaved * 0.25)
    );
  }, [summary, mealsSaved]);

  return (
    <div className="space-y-6 text-slate-900 dark:text-slate-100">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            My Donations
          </h1>
          <p className="text-muted-foreground">
            View and manage all your food donations.
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

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Meals Saved
            </CardTitle>
            <Package className="h-4 w-4 text-emerald-600 dark:text-emerald-500" />
          </CardHeader>

          <CardContent>
            <div className="text-2xl font-bold">
              {Number(mealsSaved).toLocaleString()}
            </div>

            <p className="text-xs text-muted-foreground">
              Total meals donated
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Donations
            </CardTitle>

            <Clock className="h-4 w-4 text-amber-600 dark:text-amber-500" />
          </CardHeader>

          <CardContent>
            <div className="text-2xl font-bold">
              {Number(activeDonations).toLocaleString()}
            </div>

            <p className="text-xs text-muted-foreground">
              Pending pickup
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Waste Reduced
            </CardTitle>

            <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-500" />
          </CardHeader>

          <CardContent>
            <div className="text-2xl font-bold">
              {Number(wasteReduced).toLocaleString()} kg
            </div>

            <p className="text-xs text-muted-foreground">
              Environmental impact
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Donations</CardTitle>
        </CardHeader>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
            <thead className="border-b bg-slate-50 text-xs uppercase text-slate-700 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-300">
              <tr>
                <th className="px-6 py-3">Food Item</th>
                <th className="px-6 py-3">Quantity</th>
                <th className="px-6 py-3">Prepared</th>
                <th className="px-6 py-3">Expires</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-8 text-center"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Loading donations...
                    </div>
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-8 text-center text-red-500"
                  >
                    {error}
                  </td>
                </tr>
              ) : listings.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-8 text-center"
                  >
                    No donations found.
                  </td>
                </tr>
              ) : (
                listings.map((listing, index) => (
                  <tr
                    key={
                      listing.id ||
                      `${listing.foodType}-${index}`
                    }
                    className="border-b bg-white dark:border-slate-800 dark:bg-slate-950/40"
                  >
                    <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100">
                      {listing.foodType ||
                        listing.title ||
                        "Food Donation"}
                    </td>

                    <td className="px-6 py-4">
                      {listing.quantity
                        ? `${listing.quantity} ${
                            listing.units || "servings"
                          }`
                        : "-"}
                    </td>

                    <td className="px-6 py-4">
                      {listing.preparedAt
                        ? new Date(
                            listing.preparedAt
                          ).toLocaleString()
                        : "-"}
                    </td>

                    <td className="px-6 py-4">
                      {listing.expiresAt
                        ? new Date(
                            listing.expiresAt
                          ).toLocaleString()
                        : "-"}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`rounded px-2.5 py-0.5 text-xs font-medium ${getStatusColor(
                          listing.status
                        )}`}
                      >
                        {listing.status || "Pending"}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}