/** Site-wide constants to avoid magic strings scattered across components. */

export const WHATSAPP_NUMBER = "919840991965";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20The%20Cloud%20School`;

export const PHONE_DISPLAY = "+91 98409 91965";
export const PHONE_HREF = "tel:+919840991965";
export const EMAIL = "awstrainingchn@gmail.com";
export const EMAIL_HREF = "mailto:awstrainingchn@gmail.com";

export const ADDRESS = "6, Manickavasagar Street, Pallikaranai, Chennai";
export const MAPS_LINK = "https://maps.google.com/?q=Pallikaranai+Chennai";
export const MAP_EMBED = "https://www.google.com/maps?q=Pallikaranai+Chennai&output=embed";

export const NAV_LINKS: [string, string][] = [
  ["Program", "#program"],
  ["Workshops", "#workshops"],
  ["Roadmaps", "#roadmaps"],
  ["Trainer", "#trainer"],
  ["Contact", "#contact"],
];

export const WORKSHOPS: { title: string; price: string }[] = [
  { title: "AI for VMware Administrators", price: "₹199" },
  { title: "AI for Network Engineers", price: "₹199" },
  { title: "AI for Windows Administrators", price: "₹199" },
  { title: "AI for Linux Administrators", price: "₹199" },
  { title: "AI for M365 Administrators", price: "₹199" },
  { title: "AI for IT Support Engineers", price: "₹199" },
];
