import { r as __toESM } from "../_runtime.mjs";
import { t as getClientEnv } from "./ssr.mjs";
import { n as createBrowserClient } from "../_libs/@supabase/ssr+[...].mjs";
import { n as useForm, r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { g as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Route } from "./admin-D9LcDNQo.mjs";
import { n as Input, r as Label, t as Button } from "./label-Cq5SXjoZ.mjs";
import { h as LoaderCircle, m as LogOut } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-DrHl3hbN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Browser Supabase client (ANON key) used for Admin authentication only.
* The anon key is safe to expose; RLS still protects the data. Sessions
* are managed by Supabase (cookies) — no manual token handling.
*/
function getBrowserSupabase() {
	const env = getClientEnv();
	return createBrowserClient(env.supabaseUrl, env.supabaseAnonKey);
}
function AdminPage() {
	const { user, stats } = Route.useLoaderData();
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminLogin, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dashboard, {
		email: user.email,
		stats
	});
}
function AdminLogin() {
	const router = useRouter();
	const [error, setError] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const { register, handleSubmit } = useForm({ defaultValues: {
		email: "",
		password: ""
	} });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "grid min-h-screen place-items-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleSubmit(async (values) => {
				setLoading(true);
				setError(null);
				const { error } = await getBrowserSupabase().auth.signInWithPassword({
					email: values.email,
					password: values.password
				});
				if (error) {
					setError("Invalid email or password.");
					setLoading(false);
					return;
				}
				await router.invalidate();
			}),
			noValidate: true,
			className: "w-full max-w-sm rounded-3xl border border-foreground/10 bg-card p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl",
					children: "Admin login"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "The Cloud School admin"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						className: "mb-1.5 block text-xs font-medium uppercase tracking-widest text-muted-foreground",
						children: "Email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						...register("email"),
						type: "email",
						autoComplete: "email",
						placeholder: "admin@thecloudschool.in"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						className: "mb-1.5 block text-xs font-medium uppercase tracking-widest text-muted-foreground",
						children: "Password"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						...register("password"),
						type: "password",
						autoComplete: "current-password"
					})] })]
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					role: "alert",
					className: "mt-4 text-sm text-destructive",
					children: error
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					className: "mt-6 w-full",
					disabled: loading,
					children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : "Sign in"
				})
			]
		})
	});
}
function Dashboard({ email, stats }) {
	const router = useRouter();
	const logout = async () => {
		await getBrowserSupabase().auth.signOut();
		await router.invalidate();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen bg-background px-4 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl",
						children: "Dashboard"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-foreground",
						children: ["Signed in as ", email]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: logout,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), " Sign out"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Enquiries",
						value: stats.enquiries,
						hint: "Consultation + contact leads"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Workshop registrations",
						value: stats.workshops,
						hint: "₹199 seats booked"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-10 font-display text-xl",
					children: "Recent leads"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 overflow-hidden rounded-2xl border border-foreground/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-card text-left text-xs uppercase tracking-widest text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3",
									children: "Name"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3",
									children: "From → To"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3",
									children: "Status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3",
									children: "Date"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [stats.recent.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							colSpan: 4,
							className: "px-4 py-6 text-center text-muted-foreground",
							children: "No leads yet."
						}) }), stats.recent.map((lead, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t border-foreground/10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 font-medium",
									children: lead.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-4 py-3 text-muted-foreground",
									children: [
										lead.current_role_name,
										" → ",
										lead.target_role_name
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-ember/15 px-2 py-0.5 text-xs text-ember",
										children: lead.status
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 text-muted-foreground",
									children: new Date(lead.created_at).toLocaleDateString("en-IN")
								})
							]
						}, i))] })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-xs text-muted-foreground",
					children: "Full CRM and analytics dashboards are planned in a later phase."
				})
			]
		})
	});
}
function StatCard({ label, value, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-foreground/10 bg-card p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs uppercase tracking-widest text-muted-foreground",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 font-display text-5xl",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 text-xs text-muted-foreground",
				children: hint
			})
		]
	});
}
//#endregion
export { AdminPage as component };
