import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DonationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Donations</h2>
        <p className="text-muted-foreground">Placeholder page for Donations.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Donations Details</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-500 dark:text-slate-400">This section is under construction.</p>
        </CardContent>
      </Card>
    </div>
  );
}
