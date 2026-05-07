"use client";

import { useEffect, useMemo, useState } from "react";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  useJsApiLoader,
} from "@react-google-maps/api";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, ArrowRight, Loader2 } from "lucide-react";

const containerStyle = {
  width: "100%",
  height: "320px",
};

const pickup = {
  lat: 13.0827,
  lng: 80.2707,
  name: "Grand Hotel",
  address: "123 Main Street",
};

const drop = {
  lat: 13.0727,
  lng: 80.2507,
  name: "Hope Orphanage",
  address: "456 Park Avenue",
};

export default function ActivePage() {
  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries: ["places"],
  });

  useEffect(() => {
    if (!isLoaded || !window.google) return;

    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: pickup,
        destination: drop,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirections(result);
        } else {
          console.error("Directions request failed:", status);
        }
      }
    );
  }, [isLoaded]);

  const center = useMemo(
    () => ({
      lat: (pickup.lat + drop.lat) / 2,
      lng: (pickup.lng + drop.lng) / 2,
    }),
    []
  );

  const openGoogleMaps = () => {
    const url = `https://www.google.com/maps/dir/?api=1&origin=${pickup.lat},${pickup.lng}&destination=${drop.lat},${drop.lng}&travelmode=driving`;
    window.open(url, "_blank");
  };

  if (loadError) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Active Deliveries</h2>
          <p className="text-muted-foreground">Manage your current pickup and drop-off assignments.</p>
        </div>
        <Card>
          <CardContent className="p-6 text-sm text-red-600">
            Google Maps failed to load. Check your API key in <code>.env.local</code>.
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Active Deliveries</h2>
        <p className="text-muted-foreground">Manage your current pickup and drop-off assignments.</p>
      </div>

      <Card className="border-emerald-200 dark:border-emerald-900 bg-white dark:bg-slate-900/70 shadow-sm">
        <CardHeader className="bg-emerald-50 dark:bg-emerald-900/20 rounded-t-lg border-b border-emerald-100 dark:border-emerald-900/50">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-emerald-800 dark:text-emerald-400">Current Assignment</CardTitle>
              <CardDescription className="text-emerald-600 dark:text-emerald-500">
                Pickup assigned 10 mins ago
              </CardDescription>
            </div>
            <span className="bg-emerald-200 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              In Progress
            </span>
          </div>
        </CardHeader>

        <CardContent className="pt-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4 relative">
              <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700"></div>

              <div className="flex gap-4 relative z-10">
                <div className="mt-1 h-6 w-6 rounded-full bg-emerald-100 border-2 border-emerald-500 dark:bg-emerald-900 flex items-center justify-center shrink-0">
                  <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100">Pickup Point</h4>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{pickup.name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
                    <MapPin className="h-3 w-3" /> {pickup.address}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">100 servings • Rice & Lentils</p>
                </div>
              </div>

              <div className="flex gap-4 relative z-10">
                <div className="mt-1 h-6 w-6 rounded-full bg-slate-100 border-2 border-slate-300 dark:bg-slate-800 dark:border-slate-600 flex items-center justify-center shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100">Drop Point</h4>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{drop.name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
                    <MapPin className="h-3 w-3" /> {drop.address}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Est. arrival: 2:45 PM</p>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-4 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <p className="text-sm text-slate-500 dark:text-slate-400 dark:text-slate-400 mb-1">Total Distance</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">4.2 km</p>
                </div>
                <Button onClick={openGoogleMaps} className="bg-blue-600 hover:bg-blue-700 text-white gap-2 w-full sm:w-auto">
                  <Navigation className="h-4 w-4" /> Open Navigation
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <Card className="overflow-hidden">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Route Map</CardTitle>
                  <CardDescription>Pickup to drop-off route on Google Maps</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="relative">
                    {!isLoaded ? (
                      <div className="h-[320px] flex items-center justify-center bg-slate-100 dark:bg-slate-900">
                        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Loading map...
                        </div>
                      </div>
                    ) : (
                      <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={13}
                        options={{
                          disableDefaultUI: true,
                          zoomControl: true,
                          streetViewControl: false,
                          mapTypeControl: false,
                          fullscreenControl: false,
                        }}
                      >
                        <Marker position={pickup} label="P" />
                        <Marker position={drop} label="D" />
                        {directions && <DirectionsRenderer directions={directions} />}
                      </GoogleMap>
                    )}
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-4">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Pickup ETA</p>
                  <p className="mt-1 text-lg font-semibold text-emerald-600">10 mins</p>
                </div>
                <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-4">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Route Status</p>
                  <p className="mt-1 text-lg font-semibold text-emerald-600">Active</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-800 mt-6">
            <Button variant="outline" className="text-rose-600 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-900/20 border-rose-200 dark:border-rose-900/50">
              Cancel Assignment
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2">
              Mark as Picked Up <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}