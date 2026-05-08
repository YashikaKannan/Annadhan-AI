"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Activity, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchJson, API_URL } from "@/lib/api";
import { Listing, AnalyticsSummary } from "@/lib/types";

function getApiErrorMessage(err: unknown, fallback = "Request failed"): string {
  if (typeof err === "string") return err;

  if (err && typeof err === "object") {
    const record = err as Record<string, unknown>;

    const detail = record.detail ?? record.message ?? record.error;

    if (typeof detail === "string") return detail;

    if (Array.isArray(detail)) {
      const parts = detail
        .map((item) => {
          if (typeof item === "string") return item;
          if (item && typeof item === "object") {
            const sub = item as Record<string, unknown>;
            return (
              (typeof sub.msg === "string" && sub.msg) ||
              (typeof sub.message === "string" && sub.message) ||
              JSON.stringify(item)
            );
          }
          return String(item);
        })
        .filter(Boolean);

      if (parts.length > 0) return parts.join(", ");
    }

    if (detail && typeof detail === "object") {
      return JSON.stringify(detail);
    }

    return JSON.stringify(record);
  }

  return fallback;
}

export default function DonorDashboard() {
  const [showForm, setShowForm] = useState(false);
  const [listings, setListings] = useState<Listing[]>([]);
  const [summary, setSummary] = useState<AnalyticsSummary | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  // form fields
  const [foodType, setFoodType] = useState("");
  const [quantity, setQuantity] = useState<number | undefined>(undefined);
  const [expiry, setExpiry] = useState<number | undefined>(undefined);
  const [notes, setNotes] = useState("");

  const loadListings = async () => {
    setLoading(true);
    try {
      const data = await fetchJson<Listing[]>(`${API_URL}/api/v1/listings`);
      if (Array.isArray(data)) setListings(data);
    } catch (err) {
      console.error("Failed to load listings:", err);
    } finally {
      setLoading(false);
    }
  };

  const loadSummary = async () => {
    try {
      const data = await fetchJson<AnalyticsSummary>(`${API_URL}/api/v1/analytics/summary`);
      setSummary(data);
    } catch (err) {
      console.error("Failed to load summary:", err);
    }
  };

  useEffect(() => {
    let mounted = true;

    async function load() {
      if (!mounted) return;
      await Promise.all([loadListings(), loadSummary()]);
    }

    load();

    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const mealsSaved =
    summary?.mealsSaved ??
    summary?.totalFoodSaved ??
    1250;

  const activeDonations =
    summary?.activeDonations ??
    listings.filter((item) => {
      const status = (item.status || "").toLowerCase();
      return status.includes("pending") || status.includes("active") || status.includes("assigned");
    }).length ??
    2;

  const wasteReduced =
    summary?.wasteReducedKg ??
    summary?.wasteReduced ??
    320;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitLoading(true);
    setMessage(null);

    try {
      if (!API_URL) {
        throw new Error("NEXT_PUBLIC_BACKEND_URL is not set");
      }

      const now = new Date();
      const expiryHours = Number(expiry ?? 0);

      if (!foodType.trim()) {
        throw new Error("Food type is required");
      }

      if (!quantity || quantity <= 0) {
        throw new Error("Quantity must be greater than 0");
      }

      if (!expiryHours || expiryHours <= 0) {
        throw new Error("Expiry window must be greater than 0");
      }

      const payload = {
  donorId: "demo-donor-001",
  foodType: foodType.trim(),
  quantity: Number(quantity),
  units: "servings",
  preparedAt: now.toISOString(),
  expiresAt: new Date(now.getTime() + expiryHours * 60 * 60 * 1000).toISOString(),
  pickupLocation: {},
  imageUrl: "",
  notes: notes.trim(),
};

      const response = await fetch(`${API_URL}/api/v1/listings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      let data: unknown = null;
      try {
        data = await response.json();
      } catch {
        data = null;
      }

      if (!response.ok) {
        console.error("Create listing failed:", data);
        throw new Error(
          getApiErrorMessage(
            data,
            `Request failed with status ${response.status}`
          )
        );
      }

      setMessage("Donation submitted successfully.");

      await Promise.all([loadListings(), loadSummary()]);

      setShowForm(false);
      setFoodType("");
      setQuantity(undefined);
      setExpiry(undefined);
      setNotes("");
    } catch (err: unknown) {
      console.error(err);
      setMessage(getApiErrorMessage(err, "Submission failed"));
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <div className="space-y-6 text-slate-900 dark:text-slate-100">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Donor Dashboard
        </h2>
        <p className="text-muted-foreground">
          Welcome back! Here's your impact overview.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Meals Saved</CardTitle>
            <Activity className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Number(mealsSaved).toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">+20% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Donations</CardTitle>
            <Package className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Number(activeDonations).toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">Pending pickup</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Waste Reduced</CardTitle>
            <Clock className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Number(wasteReduced).toLocaleString()} kg</div>
            <p className="text-xs text-muted-foreground">Total to date</p>
          </CardContent>
        </Card>
      </div>

      {!showForm ? (
        <Card className="border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/20">
          <CardHeader>
            <CardTitle>Have Surplus Food?</CardTitle>
            <CardDescription>Post a new donation and we'll match it with a nearby NGO.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              onClick={() => setShowForm(true)}
              className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400"
            >
              Create Donation
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>New Food Donation</CardTitle>
            <CardDescription>Enter details about the surplus food.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Food Type
                  </label>
                  <input
                    value={foodType}
                    onChange={(e) => setFoodType(e.target.value)}
                    type="text"
                    className="flex h-10 w-full rounded-md border border-slate-300 bg-white/90 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-100 dark:placeholder:text-slate-500"
                    placeholder="e.g. Cooked Rice & Curry"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Quantity (Servings)
                  </label>
                  <input
                    value={quantity ?? ""}
                    onChange={(e) =>
                      setQuantity(e.target.value ? Number(e.target.value) : undefined)
                    }
                    type="number"
                    className="flex h-10 w-full rounded-md border border-slate-300 bg-white/90 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-100 dark:placeholder:text-slate-500"
                    placeholder="50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Expiry Window (Hours)
                  </label>
                  <input
                    value={expiry ?? ""}
                    onChange={(e) =>
                      setExpiry(e.target.value ? Number(e.target.value) : undefined)
                    }
                    type="number"
                    className="flex h-10 w-full rounded-md border border-slate-300 bg-white/90 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-100 dark:placeholder:text-slate-500"
                    placeholder="4"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Special Notes
                  </label>
                  <input
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    type="text"
                    className="flex h-10 w-full rounded-md border border-slate-300 bg-white/90 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-100 dark:placeholder:text-slate-500"
                    placeholder="Contains nuts"
                  />
                </div>
              </div>

              {message ? (
                <div className="rounded-md border border-slate-500/40 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 dark:bg-slate-900/60">
                  {message}
                </div>
              ) : null}

              <div className="flex gap-2 justify-end pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </Button>

                <Button
                  type="submit"
                  disabled={submitLoading}
                  className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400"
                >
                  {submitLoading ? "Submitting..." : "Submit Donation"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <h3 className="text-xl font-bold tracking-tight mt-8 mb-4">Recent Donations</h3>
      <Card>
        <div className="p-0">
          <table className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
            <thead className="border-b bg-slate-50 text-xs uppercase text-slate-700 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-300">
              <tr>
                <th className="px-6 py-3">Food Item</th>
                <th className="px-6 py-3">Quantity</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Matched To</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={4} className="px-6 py-4 text-center">
                    Loading...
                  </td>
                </tr>
              ) : listings.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-4 text-center">
                    No donations found.
                  </td>
                </tr>
              ) : (
                listings.map((l, index) => (
                  <tr
                    key={String(
                      l.id ??
                        `${l.foodType || l.title || "listing"}-${l.createdAt || index}`
                    )}
                    className="border-b bg-white dark:border-slate-800 dark:bg-slate-950/40"
                  >
                    <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100">
                      {l.foodType || l.title || l.description || "-"}
                    </td>
                    <td className="px-6 py-4">
                      {l.quantity ? `${l.quantity} servings` : "-"}
                    </td>
                    <td className="px-6 py-4">
                      <span className="rounded bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
                        {l.status || "Unknown"}
                      </span>
                    </td>
                    <td className="px-6 py-4">{l.matchedTo || "-"}</td>
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