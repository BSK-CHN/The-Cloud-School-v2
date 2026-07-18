import { useState } from "react";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { Loader2, LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getBrowserSupabase } from "@/lib/supabase/client";
import { getServerSupabase } from "@/lib/supabase/server";
import { getAdminUser } from "@/lib/supabase/auth";

type RecentLead = {
  name: string;
  current_role_name: string;
  target_role_name: string;
  status: string;
  created_at: string;
};

export const Route = createFileRoute("/admin")({
  loader: async ({ request }) => {
    const user = await getAdminUser(request);
    if (!user) return { user: null as null, stats: null as null };

    const supabase = getServerSupabase();
    const [{ count: enquiries }, { count: workshops }, { data: recent }] = await Promise.all([
      supabase
        .from("consultations")
        .select("*", { count: "exact", head: true })
        .in("status", ["new", "contact"]),
      supabase.from("workshop_registrations").select("*", { count: "exact", head: true }),
      supabase
        .from("consultations")
        .select("name,current_role_name,target_role_name,status,created_at")
        .order("created_at", { ascending: false })
        .limit(6),
    ]);

    return {
      user: { email: user.email },
      stats: {
        enquiries: enquiries ?? 0,
        workshops: workshops ?? 0,
        recent: (recent ?? []) as RecentLead[],
      },
    };
  },
  component: AdminPage,
});

function AdminPage() {
  const { user, stats } = Route.useLoaderData();
  if (!user) return <AdminLogin />;
  return <Dashboard email={user.email} stats={stats} />;
}

/* ---------------- LOGIN ---------------- */

function AdminLogin() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit } = useForm<{ email: string; password: string }>({
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = handleSubmit(async (values) => {
    setLoading(true);
    setError(null);
    const supabase = getBrowserSupabase();
    const { error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });
    if (error) {
      setError("Invalid email or password.");
      setLoading(false);
      return;
    }
    await router.invalidate();
  });

  return (
    <main className="grid min-h-screen place-items-center bg-background px-4">
      <form
        onSubmit={onSubmit}
        noValidate
        className="w-full max-w-sm rounded-3xl border border-foreground/10 bg-card p-8"
      >
        <h1 className="font-display text-2xl">Admin login</h1>
        <p className="mt-1 text-sm text-muted-foreground">The Cloud School admin</p>
        <div className="mt-6 space-y-4">
          <div>
            <Label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Email
            </Label>
            <Input
              {...register("email")}
              type="email"
              autoComplete="email"
              placeholder="admin@thecloudschool.in"
            />
          </div>
          <div>
            <Label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Password
            </Label>
            <Input {...register("password")} type="password" autoComplete="current-password" />
          </div>
        </div>
        {error && (
          <p role="alert" className="mt-4 text-sm text-destructive">
            {error}
          </p>
        )}
        <Button type="submit" className="mt-6 w-full" disabled={loading}>
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Sign in"}
        </Button>
      </form>
    </main>
  );
}

/* ---------------- DASHBOARD ---------------- */

function Dashboard({
  email,
  stats,
}: {
  email: string;
  stats: { enquiries: number; workshops: number; recent: RecentLead[] };
}) {
  const router = useRouter();

  const logout = async () => {
    const supabase = getBrowserSupabase();
    await supabase.auth.signOut();
    await router.invalidate();
  };

  return (
    <main className="min-h-screen bg-background px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-3xl">Dashboard</h1>
            <p className="text-sm text-muted-foreground">Signed in as {email}</p>
          </div>
          <Button variant="outline" onClick={logout}>
            <LogOut className="h-4 w-4" /> Sign out
          </Button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <StatCard label="Enquiries" value={stats.enquiries} hint="Consultation + contact leads" />
          <StatCard
            label="Workshop registrations"
            value={stats.workshops}
            hint="₹199 seats booked"
          />
        </div>

        <h2 className="mt-10 font-display text-xl">Recent leads</h2>
        <div className="mt-4 overflow-hidden rounded-2xl border border-foreground/10">
          <table className="w-full text-sm">
            <thead className="bg-card text-left text-xs uppercase tracking-widest text-muted-foreground">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">From → To</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {stats.recent.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-4 py-6 text-center text-muted-foreground">
                    No leads yet.
                  </td>
                </tr>
              )}
              {stats.recent.map((lead, i) => (
                <tr key={i} className="border-t border-foreground/10">
                  <td className="px-4 py-3 font-medium">{lead.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {lead.current_role_name} → {lead.target_role_name}
                  </td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-ember/15 px-2 py-0.5 text-xs text-ember">
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {new Date(lead.created_at).toLocaleDateString("en-IN")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          Full CRM and analytics dashboards are planned in a later phase.
        </p>
      </div>
    </main>
  );
}

function StatCard({ label, value, hint }: { label: string; value: number; hint: string }) {
  return (
    <div className="rounded-2xl border border-foreground/10 bg-card p-6">
      <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="mt-2 font-display text-5xl">{value}</div>
      <div className="mt-1 text-xs text-muted-foreground">{hint}</div>
    </div>
  );
}
