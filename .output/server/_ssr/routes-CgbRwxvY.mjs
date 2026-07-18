import { r as __toESM } from "../_runtime.mjs";
import { n as useForm, r as require_react, t as a } from "../_libs/@hookform/resolvers+[...].mjs";
import { a as Trigger2, c as require_jsx_runtime, i as Root2, n as Header, r as Item, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as cn, n as Input, r as Label, t as Button } from "./label-Cq5SXjoZ.mjs";
import { C as ChevronDown, D as Boxes, E as Briefcase, O as ArrowUpRight, S as Clock, T as ChartLine, _ as GraduationCap, a as ShieldCheck, b as Cpu, c as Phone, d as MessageCircle, f as MapPin, g as Layers, h as LoaderCircle, i as Sparkles, k as ArrowRight, l as Network, n as Users, o as Server, p as Mail, r as Trophy, s as Rocket, t as Workflow, u as MonitorCog, v as GitBranch, w as Check, x as Cloud, y as Database } from "../_libs/lucide-react.mjs";
import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { n as ContactSchema, r as WorkshopSchema, t as ConsultationSchema } from "./validations-XDGyLUuA.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-19ZXVoAD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CgbRwxvY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Brand logo mark — used in navbar and footer. */
function LogoMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cloud, {
			className: "h-4.5 w-4.5",
			strokeWidth: 2
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-ember shadow-[0_0_0_3px_var(--color-background)]" })]
	});
}
var WHATSAPP_LINK = `https://wa.me/919840991965?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20The%20Cloud%20School`;
var PHONE_DISPLAY = "+91 98409 91965";
var PHONE_HREF = "tel:+919840991965";
var EMAIL = "awstrainingchn@gmail.com";
var EMAIL_HREF = "mailto:awstrainingchn@gmail.com";
var ADDRESS = "6, Manickavasagar Street, Pallikaranai, Chennai";
var MAPS_LINK = "https://maps.google.com/?q=Pallikaranai+Chennai";
var MAP_EMBED = "https://www.google.com/maps?q=Pallikaranai+Chennai&output=embed";
var NAV_LINKS = [
	["Program", "#program"],
	["Workshops", "#workshops"],
	["Roadmaps", "#roadmaps"],
	["Trainer", "#trainer"],
	["Contact", "#contact"]
];
var WORKSHOPS = [
	{
		title: "AI for VMware Administrators",
		price: "₹199"
	},
	{
		title: "AI for Network Engineers",
		price: "₹199"
	},
	{
		title: "AI for Windows Administrators",
		price: "₹199"
	},
	{
		title: "AI for Linux Administrators",
		price: "₹199"
	},
	{
		title: "AI for M365 Administrators",
		price: "₹199"
	},
	{
		title: "AI for IT Support Engineers",
		price: "₹199"
	}
];
/** Sticky top navigation with scroll-aware glass background. */
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const on = () => setScrolled(window.scrollY > 20);
		on();
		window.addEventListener("scroll", on, { passive: true });
		return () => window.removeEventListener("scroll", on);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled ? "py-2" : "py-4"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-full border px-3 py-2 transition-all sm:px-5", scrolled ? "glass border-foreground/10 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.15)]" : "border-transparent"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex min-w-0 items-center gap-2.5",
					"aria-label": "The Cloud School — home",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "truncate font-display text-[15px] font-medium tracking-tight",
							children: "The Cloud School"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:block",
							children: "AI · Cloud · DevOps"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex items-center gap-1",
					"aria-label": "Primary",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden items-center gap-1 pr-2 md:flex",
							children: NAV_LINKS.map(([label, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href,
								className: "rounded-full px-3 py-1.5 text-sm text-foreground/70 transition hover:bg-foreground/5 hover:text-foreground",
								children: label
							}, href))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#consultation",
							className: "group inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90",
							children: ["Book consultation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: WHATSAPP_LINK,
							target: "_blank",
							rel: "noreferrer",
							className: "ml-1 inline-flex shrink-0 items-center rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-3 py-2 text-sm font-medium text-[#128C4A] transition hover:bg-[#25D366]/20",
							"aria-label": "Chat with trainer on WhatsApp",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: "WhatsApp"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sm:hidden",
								"aria-hidden": true,
								children: "WA"
							})]
						})
					]
				})]
			})
		})
	});
}
function HeroBackdrop() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": true,
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-ember/20 blur-[120px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-ember-soft/40 blur-[100px] animate-drift" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-foreground/10 blur-[120px] animate-drift" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				className: "absolute inset-0 h-full w-full opacity-[0.35]",
				style: {
					maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
					WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pattern", {
					id: "grid",
					width: "48",
					height: "48",
					patternUnits: "userSpaceOnUse",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M 48 0 L 0 0 0 48",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "0.5"
					})
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "100%",
					height: "100%",
					fill: "url(#grid)",
					className: "text-foreground/25"
				})]
			})
		]
	});
}
function HeroArchitecture() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto mt-20 h-[420px] w-full max-w-5xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative grid h-32 w-32 place-items-center rounded-3xl glass animate-pulse-ring",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-2 rounded-2xl bg-gradient-to-br from-ember/20 to-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex flex-col items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, {
							className: "h-8 w-8 text-ember",
							strokeWidth: 1.5
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-medium uppercase tracking-widest",
							children: "Cloud + AI"
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				className: "absolute inset-0 h-full w-full text-foreground/15",
				viewBox: "0 0 800 400",
				fill: "none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "400",
					cy: "200",
					rx: "360",
					ry: "160",
					stroke: "currentColor",
					strokeDasharray: "4 6"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "400",
					cy: "200",
					rx: "260",
					ry: "110",
					stroke: "currentColor",
					strokeDasharray: "2 6"
				})]
			}),
			[
				{
					icon: Cloud,
					label: "AWS",
					pos: "top-6 left-[10%]",
					delay: "0s"
				},
				{
					icon: Server,
					label: "EC2",
					pos: "top-24 right-[12%]",
					delay: "1s"
				},
				{
					icon: Database,
					label: "RDS",
					pos: "top-[45%] left-[6%]",
					delay: "2s"
				},
				{
					icon: Boxes,
					label: "Kubernetes",
					pos: "top-[55%] right-[8%]",
					delay: "0.5s"
				},
				{
					icon: GitBranch,
					label: "CI/CD",
					pos: "bottom-8 left-[18%]",
					delay: "1.5s"
				},
				{
					icon: Sparkles,
					label: "AI",
					pos: "bottom-12 right-[22%]",
					delay: "0.8s"
				}
			].map(({ icon: Icon, label, pos, delay }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `absolute ${pos} hidden animate-float-slow sm:block`,
				style: { animationDelay: delay },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 rounded-2xl border border-foreground/10 bg-background/80 px-3 py-2 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.3)] backdrop-blur",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-8 w-8 place-items-center rounded-lg bg-ember/15 text-ember",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "h-4 w-4",
							strokeWidth: 2
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-medium",
						children: label
					})]
				})
			}, label))
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative overflow-hidden pb-24 pt-36 sm:pb-32 sm:pt-44",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroBackdrop, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl text-center animate-fade-up",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/60 px-3 py-1 text-xs font-medium text-foreground/70 backdrop-blur",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-ember animate-pulse" }), "AI-Assisted Cloud Engineering Program"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6 text-balance font-display text-[44px] leading-[1.02] tracking-[-0.03em] sm:text-6xl md:text-7xl",
						children: [
							"Become a",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative inline-block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "relative z-10",
									children: "Cloud Engineer"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-0 -bottom-1 -z-0 h-3 bg-ember/30 sm:h-4" })]
							}),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "with"
							}),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "bg-gradient-to-br from-ember to-[oklch(0.55_0.19_35)] bg-clip-text text-transparent",
								children: "AI"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: "Practical, hands-on training for experienced IT professionals ready to transition into Cloud, DevOps and AI careers. Taught by a 25+ year industry veteran."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center justify-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#consultation",
								className: "group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)] transition hover:opacity-90",
								children: ["Start your career", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#consultation",
								className: "inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/70 px-6 py-3 text-sm font-medium backdrop-blur transition hover:bg-foreground/5",
								children: "Book free consultation"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: WHATSAPP_LINK,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-6 py-3 text-sm font-medium text-[#128C4A] transition hover:bg-[#25D366]/20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " WhatsApp"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-14",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.24em] text-muted-foreground",
							children: "Designed for"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex flex-wrap justify-center gap-2",
							children: [
								"VMware Administrators",
								"Network Engineers",
								"Windows Administrators",
								"Linux Administrators",
								"M365 Administrators",
								"IT Support Engineers",
								"Freshers"
							].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-foreground/10 bg-background/60 px-3 py-1.5 text-xs font-medium text-foreground/75 backdrop-blur",
								children: r
							}, r))
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroArchitecture, {})]
		})]
	});
}
/**
* Canonical section wrapper used across the site. Extracted from the original
* inline `Section()` so every section shares spacing, the eyebrow/title header,
* and the optional muted background.
*/
function Section({ id, eyebrow, title, children, muted = false, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("relative py-20 sm:py-28", muted ? "bg-secondary/40" : "", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [(eyebrow || title) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-12 max-w-3xl",
				children: [eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-medium uppercase tracking-[0.24em] text-ember",
					children: eyebrow
				}), title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-balance font-display text-4xl leading-tight tracking-tight sm:text-5xl",
					children: title
				})]
			}), children]
		})
	});
}
function FooterCol({ title, links }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-xs uppercase tracking-widest text-muted-foreground",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-4 space-y-2 text-sm",
		children: links.map(([label, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href,
			className: "text-foreground/80 transition hover:text-ember",
			children: label
		}) }, label))
	})] });
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-foreground/10 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg",
							children: "The Cloud School"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xs text-sm text-muted-foreground",
						children: "AI-assisted Cloud, DevOps and AWS training — built for working IT professionals in Chennai."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
						title: "Program",
						links: [
							["AI-Assisted Cloud Engineering", "#program"],
							["Weekend Workshops", "#workshops"],
							["Career Roadmaps", "#roadmaps"]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
						title: "Company",
						links: [
							["Trainer", "#trainer"],
							["Consultation", "#consultation"],
							["Contact", "#contact"]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
						title: "Reach out",
						links: [
							[PHONE_DISPLAY, PHONE_HREF],
							[EMAIL, EMAIL_HREF],
							["WhatsApp", WHATSAPP_LINK]
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-col justify-between gap-4 border-t border-foreground/10 pt-6 text-xs text-muted-foreground sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" The Cloud School. 6, Manickavasagar Street Pallikaranai, Chennai."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Transforming careers with AI + Cloud + DevOps." })]
			})]
		})
	});
}
/** Persistent floating WhatsApp CTA. */
function FloatingWhatsApp() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: WHATSAPP_LINK,
		target: "_blank",
		rel: "noreferrer",
		"aria-label": "Chat with the trainer on WhatsApp",
		className: "group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-[0_10px_40px_-10px_rgba(37,211,102,0.7)] transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-8 w-8 place-items-center rounded-full bg-white/15",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hidden pr-1 text-sm font-medium sm:inline",
				children: "Chat with us"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute -top-1 -right-1 h-3 w-3 rounded-full bg-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 animate-ping rounded-full bg-white/70" })
			})
		]
	});
}
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
/**
* Persist a free-consultation enquiry and notify both parties.
* Validation runs via the server-fn validator (zod). Spam (honeypot)
* is accepted but silently dropped — bots get no feedback.
*
* Abuse protection (audit H1): per-IP rate limit + optional Turnstile
* (enforced only when TURNSTILE_SECRET_KEY is configured).
*/
var submitConsultation = createServerFn({ method: "POST" }).validator((d) => ConsultationSchema.parse(d)).handler(createSsrRpc("d87811802ea07968ee979f3b78da67d8d737f64864674d86cdf70eb4048c4abb"));
var SITE_KEY = "";
function useTurnstile() {
	const [token, setToken] = (0, import_react.useState)("");
	(0, import_react.useRef)(null);
	(0, import_react.useRef)(null);
	const containerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {}, []);
	const execute = () => new Promise((resolve) => {
		return resolve("");
	});
	return {
		sitekey: SITE_KEY,
		containerRef,
		execute
	};
}
/**
* Functional free-consultation form.
* - Validated client-side (zod) and server-side (same schema).
* - Honeypot `company` field is visually hidden and never shown to humans.
* - On success shows a confirmation; on failure shows the error message.
*/
function LeadForm() {
	const [serverError, setServerError] = (0, import_react.useState)(null);
	const [done, setDone] = (0, import_react.useState)(false);
	const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
		resolver: a(ConsultationSchema),
		defaultValues: {
			name: "",
			phone: "",
			email: "",
			experience: "",
			current: "",
			target: "",
			preferredTime: "",
			message: "",
			company: ""
		}
	});
	const ts = useTurnstile();
	const onSubmit = handleSubmit(async (values) => {
		setServerError(null);
		try {
			const turnstileToken = await ts.execute();
			await submitConsultation({ data: {
				...values,
				turnstileToken
			} });
			setDone(true);
			reset();
		} catch (e) {
			setServerError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
		}
	});
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid h-full min-h-[420px] place-items-center rounded-3xl border border-foreground/10 bg-card p-8 text-center sm:p-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid h-14 w-14 place-items-center rounded-full bg-ember/15 text-ember",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					className: "h-6 w-6",
					strokeWidth: 3
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 font-display text-2xl",
				children: "Thanks — we'll be in touch."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "Our trainer will call you within 24 hours. Prefer instant? Ping us on WhatsApp."
			})
		] })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		noValidate: true,
		className: "rounded-3xl border border-foreground/10 bg-card p-8 sm:p-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
						label: "Name",
						error: errors.name?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							...register("name"),
							placeholder: "Your full name",
							autoComplete: "name"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
						label: "Phone",
						error: errors.phone?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							...register("phone"),
							placeholder: "+91",
							inputMode: "tel",
							autoComplete: "tel"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
						label: "Email",
						error: errors.email?.message,
						className: "sm:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							...register("email"),
							type: "email",
							placeholder: "you@work.com",
							autoComplete: "email"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
						label: "Experience",
						error: errors.experience?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							...register("experience"),
							placeholder: "e.g. 6 years"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
						label: "Current role",
						error: errors.current?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							...register("current"),
							placeholder: "Windows Administrator"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
						label: "Target role",
						error: errors.target?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							...register("target"),
							placeholder: "Cloud Engineer"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
						label: "Preferred time",
						error: errors.preferredTime?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							...register("preferredTime"),
							placeholder: "Weekend / Evening"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
						label: "Anything else? (optional)",
						error: errors.message?.message,
						className: "sm:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							...register("message"),
							placeholder: "Tell us about your goals",
							rows: 3
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute left-[-9999px] h-0 w-0 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Leave this empty", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					...register("company"),
					tabIndex: -1,
					autoComplete: "off"
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: ts.containerRef,
				"aria-hidden": true,
				className: "hidden"
			}),
			serverError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "alert",
				className: "mt-4 rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive",
				children: serverError
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				size: "lg",
				className: "mt-6 w-full",
				disabled: isSubmitting,
				children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), " Sending…"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Book my free consultation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRightIcon, {})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-center text-xs text-muted-foreground",
				children: "We reply within 24 hours. No spam, ever."
			})
		]
	});
}
function ArrowRightIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "ml-1 inline-block transition-transform group-hover:translate-x-0.5",
		children: "→"
	});
}
function Field$1({ label, error, className = "", children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				className: "mb-1.5 block text-xs font-medium uppercase tracking-widest text-muted-foreground",
				children: label
			}),
			children,
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "alert",
				className: "mt-1 text-xs text-destructive",
				children: error
			})
		]
	});
}
var submitWorkshop = createServerFn({ method: "POST" }).validator((d) => WorkshopSchema.parse(d)).handler(createSsrRpc("df4735ae4d7feabce25275ff4d6022c5143259955c86e4168d84c41c5145e5dd"));
/**
* Workshop card that expands into a functional registration form.
* On submit it calls the server fn (persists + notifies) and shows success.
*/
function WorkshopCard({ title, price }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [done, setDone] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
		resolver: a(WorkshopSchema),
		defaultValues: {
			name: "",
			phone: "",
			email: "",
			workshop: title,
			company: ""
		}
	});
	const ts = useTurnstile();
	const onSubmit = handleSubmit(async (values) => {
		setError(null);
		try {
			const turnstileToken = await ts.execute();
			await submitWorkshop({ data: {
				...values,
				turnstileToken
			} });
			setDone(true);
			reset();
		} catch (e) {
			setError(e instanceof Error ? e.message : "Could not register. Try again.");
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-foreground/10 bg-card p-6 transition hover:-translate-y-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-ember/10 blur-2xl transition group-hover:bg-ember/25" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3 text-ember" }), " Workshop"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-3 font-display text-2xl leading-tight",
					children: title
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-8 flex items-end justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-3xl",
					children: price
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-muted-foreground",
					children: "2 hours · live"
				})] }), !open && !done && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					onClick: () => setOpen(true),
					children: ["Book seat ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
				})]
			}),
			open && !done && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				noValidate: true,
				className: "relative mt-6 space-y-3 border-t border-foreground/10 pt-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Name",
						error: errors.name?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							...register("name"),
							placeholder: "Your full name"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Phone",
						error: errors.phone?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							...register("phone"),
							placeholder: "+91",
							inputMode: "tel"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Email",
						error: errors.email?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							...register("email"),
							type: "email",
							placeholder: "you@work.com"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "absolute left-[-9999px] h-0 w-0 overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							...register("company"),
							tabIndex: -1,
							autoComplete: "off"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: ts.containerRef,
						"aria-hidden": true,
						className: "hidden"
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						role: "alert",
						className: "text-xs text-destructive",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							size: "sm",
							className: "flex-1",
							disabled: isSubmitting,
							children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : "Confirm"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							size: "sm",
							variant: "ghost",
							onClick: () => setOpen(false),
							children: "Cancel"
						})]
					})
				]
			}),
			done && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-6 flex items-center gap-2 border-t border-foreground/10 pt-5 text-sm text-ember",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					className: "h-4 w-4",
					strokeWidth: 3
				}), " Seat booked — we'll confirm by email."]
			})
		]
	});
}
function Field({ label, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			className: "mb-1.5 block text-xs font-medium uppercase tracking-widest text-muted-foreground",
			children: label
		}),
		children,
		error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			role: "alert",
			className: "mt-1 text-xs text-destructive",
			children: error
		})
	] });
}
/**
* General contact form. Saves as a consultation-style enquiry (status
* "contact") and notifies the administrator. Reuses the consultations
* table to avoid an extra table for the MVP.
*
* Abuse protection (audit H1): per-IP rate limit + optional Turnstile
* (enforced only when TURNSTILE_SECRET_KEY is configured).
*/
var submitContact = createServerFn({ method: "POST" }).validator((d) => ContactSchema.parse(d)).handler(createSsrRpc("c068662c9c1a513f3d5b10451290b0fe8bd96c4d9086d5412fdc88fe35ce8029"));
/** General "message us" form used in the Contact section. */
function ContactForm() {
	const [done, setDone] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
		resolver: a(ContactSchema),
		defaultValues: {
			name: "",
			phone: "",
			email: "",
			subject: "",
			message: "",
			company: ""
		}
	});
	const ts = useTurnstile();
	const onSubmit = handleSubmit(async (values) => {
		setError(null);
		try {
			const turnstileToken = await ts.execute();
			await submitContact({ data: {
				...values,
				turnstileToken
			} });
			setDone(true);
			reset();
		} catch (e) {
			setError(e instanceof Error ? e.message : "Could not send. Try again.");
		}
	});
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid h-full place-items-center rounded-3xl border border-foreground/10 bg-card p-8 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid h-12 w-12 place-items-center rounded-full bg-ember/15 text-ember",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					className: "h-5 w-5",
					strokeWidth: 3
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 font-display text-xl",
				children: "Message sent!"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "We'll get back to you soon."
			})
		] })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		noValidate: true,
		className: "rounded-3xl border border-foreground/10 bg-card p-6 sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "mb-1.5 block text-xs font-medium uppercase tracking-widest text-muted-foreground",
							children: "Name"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							...register("name"),
							placeholder: "Your name"
						}),
						errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							role: "alert",
							className: "mt-1 text-xs text-destructive",
							children: errors.name.message
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "mb-1.5 block text-xs font-medium uppercase tracking-widest text-muted-foreground",
							children: "Phone"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							...register("phone"),
							placeholder: "+91",
							inputMode: "tel"
						}),
						errors.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							role: "alert",
							className: "mt-1 text-xs text-destructive",
							children: errors.phone.message
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sm:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "mb-1.5 block text-xs font-medium uppercase tracking-widest text-muted-foreground",
								children: "Email"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								...register("email"),
								type: "email",
								placeholder: "you@work.com"
							}),
							errors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								role: "alert",
								className: "mt-1 text-xs text-destructive",
								children: errors.email.message
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sm:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "mb-1.5 block text-xs font-medium uppercase tracking-widest text-muted-foreground",
								children: "Message"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								...register("message"),
								rows: 4,
								placeholder: "How can we help?"
							}),
							errors.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								role: "alert",
								className: "mt-1 text-xs text-destructive",
								children: errors.message.message
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute left-[-9999px] h-0 w-0 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					...register("company"),
					tabIndex: -1,
					autoComplete: "off"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: ts.containerRef,
				"aria-hidden": true,
				className: "hidden"
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "alert",
				className: "mt-3 text-sm text-destructive",
				children: error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				className: "mt-4 w-full",
				disabled: isSubmitting,
				children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : "Send message"
			})
		]
	});
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
var FAQS = [
	{
		q: "Who is the Cloud Engineering program for?",
		a: "Experienced IT professionals — VMware, Windows, Linux, and Network administrators, M365 admins, and IT support engineers — who want to move into Cloud, DevOps or AI roles."
	},
	{
		q: "Where is The Cloud School located?",
		a: "6, Manickavasagar Street, Pallikaranai, Chennai. We also run weekend workshops and flexible weekday/weekend batches for working professionals."
	},
	{
		q: "How much does the workshop cost?",
		a: "Weekend AI workshops are ₹199 for a 2-hour live session. The flagship program fee is shared during your free consultation call."
	},
	{
		q: "Do you help with interviews and resumes?",
		a: "Yes. Every program includes resume preparation tuned for cloud roles, structured mock interviews, and one-on-one career guidance."
	}
];
function Faq() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
		type: "single",
		collapsible: true,
		className: "w-full max-w-3xl",
		children: FAQS.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
			value: `item-${i}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
				className: "text-left font-display text-lg",
				children: item.q
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
				className: "text-muted-foreground",
				children: item.a
			})]
		}, item.q))
	});
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "main",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CareerTransformation, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlagshipProgram, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyUs, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Workshops, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Roadmaps, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trainer, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Consultation, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingWhatsApp, {})
		]
	});
}
function CareerTransformation() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "transform",
		eyebrow: "Career transformation",
		title: "From where you are, to where the industry is going",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: [
				{
					from: "VMware Administrator",
					to: "Cloud Engineer",
					icon: Layers
				},
				{
					from: "Network Engineer",
					to: "Cloud Engineer",
					icon: Network
				},
				{
					from: "Windows Administrator",
					to: "Cloud Engineer",
					icon: MonitorCog
				},
				{
					from: "Linux Administrator",
					to: "DevOps Engineer",
					icon: Cpu
				},
				{
					from: "M365 Administrator",
					to: "Cloud Engineer",
					icon: Cloud
				},
				{
					from: "IT Support Engineer",
					to: "Cloud Engineer",
					icon: Users
				}
			].map(({ from, to, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "group relative overflow-hidden rounded-3xl border border-foreground/10 bg-card p-6 transition hover:-translate-y-1 hover:border-ember/40 hover:shadow-[0_20px_50px_-20px_rgba(217,119,6,0.35)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-8 -top-8 h-32 w-32 rounded-full bg-ember/10 blur-2xl transition group-hover:bg-ember/25" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-11 w-11 place-items-center rounded-xl bg-foreground/5 text-foreground/70",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "h-5 w-5",
								strokeWidth: 1.75
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 text-xs uppercase tracking-widest text-muted-foreground",
							children: "From"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 font-display text-xl",
							children: from
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "my-3 flex items-center gap-2 text-ember",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px flex-1 bg-gradient-to-r from-transparent to-ember/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-widest text-muted-foreground",
							children: "To"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 font-display text-2xl",
							children: to
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#roadmaps",
							className: "mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground/80 transition hover:text-ember",
							children: ["View roadmap ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
						})
					]
				})]
			}, from))
		})
	});
}
function FlagshipProgram() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "program",
		eyebrow: "Flagship program",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-balance font-display text-4xl leading-tight tracking-tight sm:text-5xl",
					children: "AI-Assisted Cloud Engineering Program"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-xl text-pretty text-muted-foreground",
					children: "A single, comprehensive program that takes you from your current IT role to a Cloud/DevOps Engineer — with AI woven into every module, not bolted on."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#consultation",
						className: "group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90",
						children: [
							"Book free career consultation",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: WHATSAPP_LINK,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-2 rounded-full border border-foreground/15 px-6 py-3 text-sm font-medium transition hover:bg-foreground/5",
						children: "Ask on WhatsApp"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs text-muted-foreground",
					children: "Course fee shared during your free consultation call."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative rounded-3xl border border-foreground/10 bg-card p-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-gradient-to-br from-foreground/[0.03] to-ember/[0.06] p-6 sm:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-5 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full bg-ember/15 px-3 py-1 text-xs font-medium text-ember",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), " 16 modules"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: "Includes"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-2",
						children: [
							"Artificial Intelligence",
							"AWS",
							"Azure",
							"Google Cloud",
							"Docker",
							"Kubernetes",
							"Terraform",
							"GitHub",
							"CI/CD",
							"Monitoring",
							"Linux",
							"Networking",
							"Real Projects",
							"Resume",
							"Interview",
							"Career Mentoring"
						].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 rounded-xl border border-foreground/8 bg-background/60 px-3 py-2 text-sm backdrop-blur",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "h-3.5 w-3.5 shrink-0 text-ember",
								strokeWidth: 3
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: m
							})]
						}, m))
					})]
				})
			})]
		})
	});
}
function WhyUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		eyebrow: "Why The Cloud School",
		title: "Built for working IT professionals, not tourists",
		muted: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: [
				{
					icon: Trophy,
					title: "25+ Years Industry Experience",
					body: "Learn from a veteran who's built real enterprise cloud systems."
				},
				{
					icon: Workflow,
					title: "Hands-on Practical Training",
					body: "Every concept practiced on live AWS, Azure and GCP consoles."
				},
				{
					icon: Rocket,
					title: "Real-Time Projects",
					body: "Ship production-grade projects you can talk about in interviews."
				},
				{
					icon: Sparkles,
					title: "AI-Assisted Learning",
					body: "Use AI to accelerate every step — from labs to interview prep."
				},
				{
					icon: Briefcase,
					title: "Interview Preparation",
					body: "Structured rounds — scenario, whiteboard, behavioural."
				},
				{
					icon: GraduationCap,
					title: "Resume Preparation",
					body: "Cloud-role-tuned resumes that pass ATS and hiring filters."
				},
				{
					icon: Users,
					title: "Mock Interviews",
					body: "Realistic mocks with detailed, honest feedback."
				},
				{
					icon: ChartLine,
					title: "Career Guidance",
					body: "One-on-one guidance tailored to your background."
				},
				{
					icon: ShieldCheck,
					title: "Small Batch Size",
					body: "Personalised attention — you're never just a number."
				},
				{
					icon: Clock,
					title: "Flexible Timing",
					body: "Weekend and weekday batches designed for working professionals."
				},
				{
					icon: Check,
					title: "Certificate",
					body: "Course completion certificate + guidance for AWS / Azure certs."
				}
			].map(({ icon: Icon, title, body }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-foreground/10 bg-card p-6 transition hover:border-ember/40",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-10 w-10 place-items-center rounded-lg bg-ember/12 text-ember",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "h-5 w-5",
							strokeWidth: 1.75
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 font-display text-lg",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground",
						children: body
					})
				]
			}, title))
		})
	});
}
function Workshops() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "workshops",
		eyebrow: "Weekend AI workshops",
		title: "Two hours. One skill. Every weekend.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: WORKSHOPS.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkshopCard, {
				title: w.title,
				price: w.price
			}, w.title))
		})
	});
}
function Roadmaps() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "roadmaps",
		eyebrow: "Career roadmaps",
		title: "Your path from admin to architect",
		muted: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 lg:grid-cols-2",
			children: [
				{
					from: "Network Engineer",
					steps: ["Cloud Engineer", "Solution Architect"]
				},
				{
					from: "VMware Administrator",
					steps: ["Cloud Engineer", "Cloud Architect"]
				},
				{
					from: "Windows Administrator",
					steps: ["Cloud Engineer", "DevOps Engineer"]
				},
				{
					from: "Linux Administrator",
					steps: ["DevOps Engineer", "Platform Engineer"]
				}
			].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-foreground/10 bg-card p-6 sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-widest text-muted-foreground",
						children: "Starting point"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 font-display text-2xl",
						children: r.from
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 space-y-3",
						children: r.steps.map((s, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-6 w-px bg-ember/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-8 w-8 place-items-center rounded-full border border-ember/40 bg-ember/10 text-ember",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 rotate-90" })
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 rounded-2xl border border-foreground/10 bg-background/60 px-4 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[10px] uppercase tracking-widest text-muted-foreground",
									children: ["Step ", idx + 1]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-lg",
									children: s
								})]
							})]
						}, s))
					})
				]
			}, r.from))
		})
	});
}
function Trainer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "trainer",
		eyebrow: "Meet your trainer",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 rounded-3xl border border-foreground/10 bg-gradient-to-br from-card to-background p-8 sm:p-12 lg:grid-cols-[auto_1fr] lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-40 w-40 place-items-center rounded-full bg-gradient-to-br from-ember to-[oklch(0.45_0.14_35)] font-display text-6xl text-cream shadow-[0_20px_60px_-20px_rgba(217,119,6,0.5)]",
					children: "BSK"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -bottom-2 -right-2 rounded-full border-4 border-background bg-ember px-3 py-1 text-xs font-medium text-cream",
					children: "25+ years"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-4xl tracking-tight",
					children: "Senthil Kumar"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm uppercase tracking-widest text-muted-foreground",
					children: "Founder · Lead Trainer"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-pretty text-muted-foreground",
					children: "Two and a half decades designing and running enterprise infrastructure — from virtualization and networking to multi-cloud architectures. Now teaching the next generation of Indian IT professionals how to make that same leap, faster, with AI."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex flex-wrap gap-2",
					children: [
						"AWS",
						"VMware",
						"Cloud",
						"Infrastructure",
						"Solution Architecture",
						"Enterprise Consulting"
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border border-foreground/15 bg-background/60 px-3 py-1.5 text-xs font-medium backdrop-blur",
						children: s
					}, s))
				})
			] })]
		})
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		eyebrow: "Student success",
		title: "Careers changed. Roles upgraded.",
		muted: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 md:grid-cols-3",
			children: [
				{
					name: "Rahul V.",
					role: "Network Engineer → Cloud Engineer",
					body: "The AI-assisted labs made complex AWS services click. Cleared my interview in 3 months."
				},
				{
					name: "Priya S.",
					role: "Windows Admin → DevOps Engineer",
					body: "Senthil sir's mentoring is unmatched. The mock interviews were the real turning point."
				},
				{
					name: "Karthik M.",
					role: "VMware Admin → Cloud Architect",
					body: "Real projects, small batch, honest feedback. Best decision I made for my career."
				}
			].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "flex flex-col rounded-3xl border border-foreground/10 bg-card p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
					className: "flex-1 text-pretty text-foreground/85",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-4xl leading-none text-ember",
						children: "\""
					}), t.body]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
					className: "mt-6 border-t border-foreground/10 pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-medium",
						children: t.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground",
						children: t.role
					})]
				})]
			}, t.name))
		})
	});
}
function Consultation() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "consultation",
		eyebrow: "Free career consultation",
		title: "A 30-minute call. Zero commitment.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 lg:grid-cols-[1fr_1.1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-foreground/10 bg-gradient-to-br from-ember/10 via-card to-card p-8 sm:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-pretty text-muted-foreground",
						children: "Tell us a bit about your background. We'll map a realistic path from your current role into Cloud, DevOps or AI — and share the program details and fee on the call."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-3 text-sm",
						children: [
							"Personalised roadmap based on your experience",
							"Honest assessment — not a sales pitch",
							"Fee, timing and batch details shared on the call",
							"Reply within 24 hours"
						].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "mt-0.5 h-4 w-4 shrink-0 text-ember",
								strokeWidth: 3
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: i })]
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: PHONE_HREF,
							className: "flex items-center gap-3 text-foreground/80 hover:text-ember",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }),
								" ",
								PHONE_DISPLAY
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: EMAIL_HREF,
							className: "flex items-center gap-3 text-foreground/80 hover:text-ember",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }),
								" ",
								EMAIL
							]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {})]
		})
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "contact",
		eyebrow: "Visit us",
		title: "6, Manickavasagar Street Pallikaranai, Chennai",
		muted: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
						icon: MapPin,
						title: "Location",
						body: ADDRESS,
						href: MAPS_LINK,
						hrefLabel: "Open in Google Maps"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
						icon: Phone,
						title: "Call",
						body: PHONE_DISPLAY,
						href: PHONE_HREF,
						hrefLabel: "Call now"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
						icon: Mail,
						title: "Email",
						body: EMAIL,
						href: EMAIL_HREF,
						hrefLabel: "Send email"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-6 lg:grid-cols-[1fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-3xl border border-foreground/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Map showing The Cloud School location",
						src: MAP_EMBED,
						className: "h-[380px] w-full grayscale-[0.4]",
						loading: "lazy"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-foreground/10 bg-card p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl",
							children: "Business hours"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-4 space-y-2 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Monday – Saturday" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground",
									children: "9:00 – 20:00"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sunday" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground",
									children: "By appointment"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm text-muted-foreground",
							children: "Get directions or message us — we usually reply within a few hours."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: MAPS_LINK,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90",
								children: ["Directions ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: WHATSAPP_LINK,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center gap-1.5 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-4 py-2 text-sm font-medium text-[#128C4A] transition hover:bg-[#25D366]/20",
								children: ["Chat ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})
			})
		]
	});
}
function ContactCard({ icon: Icon, title, body, href, hrefLabel }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		target: "_blank",
		rel: "noreferrer",
		className: "group flex flex-col rounded-3xl border border-foreground/10 bg-card p-6 transition hover:-translate-y-1 hover:border-ember/40",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-10 w-10 place-items-center rounded-xl bg-ember/12 text-ember",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "h-5 w-5",
					strokeWidth: 1.75
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 text-xs uppercase tracking-widest text-muted-foreground",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 font-display text-xl",
				children: body
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 inline-flex items-center gap-1 text-sm text-foreground/70 group-hover:text-ember",
				children: [
					hrefLabel,
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })
				]
			})
		]
	});
}
function FaqSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		eyebrow: "FAQ",
		title: "Questions, answered",
		muted: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {})
	});
}
//#endregion
export { HomePage as component };
