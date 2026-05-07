import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Analytics</h2>
        <p className="text-muted-foreground">Placeholder page for Analytics.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Analytics Details</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-500 dark:text-slate-400">This section is under construction.</p>
        </CardContent>
      </Card>
    </div>
  );
}
