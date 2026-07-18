import { r as __toESM } from "../_runtime.mjs";
import { t as getClientEnv } from "./ssr.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Route$2 } from "./admin-D9LcDNQo.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CgqWUJ1F.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles--J9XiY5g.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
/** JSON-LD builders — returned as objects and inlined with <script type="application/ld+json">. */
function localBusinessJsonLd() {
	const { siteUrl } = getClientEnv();
	return {
		"@context": "https://schema.org",
		"@type": "EducationalOrganization",
		name: "The Cloud School",
		description: "AI-assisted Cloud, DevOps and AWS training for IT professionals in Chennai.",
		url: siteUrl,
		telephone: "+919840991965",
		email: "awstrainingchn@gmail.com",
		address: {
			"@type": "PostalAddress",
			streetAddress: "6, Manickavasagar Street, Pallikaranai",
			addressLocality: "Chennai",
			addressRegion: "Tamil Nadu",
			postalCode: "600100",
			addressCountry: "IN"
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: 12.925,
			longitude: 80.211
		},
		sameAs: ["https://wa.me/919840991965"],
		offers: {
			"@type": "Offer",
			name: "Weekend AI Workshop",
			price: "199",
			priceCurrency: "INR"
		}
	};
}
function courseJsonLd() {
	const { siteUrl } = getClientEnv();
	return {
		"@context": "https://schema.org",
		"@type": "Course",
		name: "AI-Assisted Cloud Engineering Program",
		description: "A comprehensive program taking experienced IT professionals from admin roles to Cloud / DevOps Engineers, with AI woven into every module.",
		provider: {
			"@type": "Organization",
			name: "The Cloud School",
			sameAs: siteUrl
		},
		hasCourseInstance: {
			"@type": "CourseInstance",
			courseMode: "Offline",
			courseWorkload: "PT20H",
			location: {
				"@type": "Place",
				name: "The Cloud School, Pallikaranai, Chennai"
			}
		},
		offers: {
			"@type": "Offer",
			priceCurrency: "INR",
			availability: "https://schema.org/InStock"
		}
	};
}
function faqJsonLd() {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: [
			{
				"@type": "Question",
				name: "Who is the Cloud Engineering program for?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Experienced IT professionals — VMware, Windows, Linux, and Network administrators, M365 admins, and IT support engineers — who want to move into Cloud, DevOps or AI roles."
				}
			},
			{
				"@type": "Question",
				name: "Where is The Cloud School located?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "6, Manickavasagar Street, Pallikaranai, Chennai. We also run weekend workshops and flexible weekday/weekend batches."
				}
			},
			{
				"@type": "Question",
				name: "How much does the workshop cost?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Weekend AI workshops are ₹199 for a 2-hour live session. The flagship program fee is shared during your free consultation call."
				}
			}
		]
	};
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-medium text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-medium text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90",
						children: "Back to The Cloud School"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-medium text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong. Try again or head home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-full border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var TITLE = "The Cloud School — AI + Cloud + DevOps Training in Chennai";
var DESC = "Transform your IT career with AI-assisted Cloud Engineering, DevOps and AWS training in Pallikaranai, Chennai. Built for experienced IT professionals.";
var OG_IMAGE = "https://images.unsplash.com/photo-1551434678-e376f8bbd15?w=1200&h=630&fit=crop";
var Route$1 = createRootRouteWithContext()({
	head: () => {
		const { siteUrl, ga4Id, gscId } = getClientEnv();
		return {
			meta: [
				{ charSet: "utf-8" },
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1"
				},
				{ title: TITLE },
				{
					name: "description",
					content: DESC
				},
				{
					name: "author",
					content: "The Cloud School"
				},
				{
					name: "robots",
					content: "index, follow, max-image-preview:large"
				},
				{
					name: "keywords",
					content: "AWS Training Chennai, Cloud Training Chennai, DevOps Training Chennai, AI Training Chennai, AWS Course Chennai, Cloud Engineer Course, Pallikaranai, AI Assisted Cloud Engineering"
				},
				{
					property: "og:title",
					content: TITLE
				},
				{
					property: "og:description",
					content: DESC
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					property: "og:url",
					content: siteUrl
				},
				{
					property: "og:image",
					content: OG_IMAGE
				},
				{
					property: "og:locale",
					content: "en_IN"
				},
				{
					property: "og:site_name",
					content: "The Cloud School"
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				},
				{
					name: "twitter:title",
					content: TITLE
				},
				{
					name: "twitter:description",
					content: DESC
				},
				{
					name: "twitter:image",
					content: OG_IMAGE
				},
				...gscId ? [{
					name: "google-site-verification",
					content: gscId
				}] : []
			],
			links: [
				{
					rel: "canonical",
					href: siteUrl
				},
				{
					rel: "stylesheet",
					href: styles_default
				},
				{
					rel: "icon",
					href: "/favicon.ico",
					type: "image/x-icon"
				},
				{
					rel: "preconnect",
					href: "https://fonts.googleapis.com"
				},
				{
					rel: "preconnect",
					href: "https://fonts.gstatic.com",
					crossOrigin: "anonymous"
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap"
				}
			]
		};
	},
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	const { ga4Id } = getClientEnv();
	const jsonLd = [
		localBusinessJsonLd(),
		courseJsonLd(),
		faqJsonLd()
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}),
			ga4Id && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				async: true,
				src: `https://www.googletagmanager.com/gtag/js?id=${ga4Id}`
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${ga4Id}');` } })] }),
			jsonLd.map((data, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify(data) }
			}, i))
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$1.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter = () => import("./routes-CgbRwxvY.mjs");
var Route = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var AdminRoute = Route$2.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$1
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$1
	}),
	AdminRoute
};
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
