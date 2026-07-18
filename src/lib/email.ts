import { Resend } from "resend";

import { getServerEnv } from "@/lib/env";

// Resend is OPTIONAL. Read directly from process.env (not getServerEnv) so
// this module loads even when the keys are empty, and construct the client
// lazily — a null client means "email not configured" and notify*() skips
// sending instead of crashing at boot.
const resendApiKey = process.env.RESEND_API_KEY ?? "";
const FROM = process.env.RESEND_FROM ?? "";
const resend = resendApiKey ? new Resend(resendApiKey) : null;

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/** Plain-text summary row used in both emails. */
function row(label: string, value: string): string {
  return `<tr><td style="padding:4px 8px;color:#666;font-size:13px;width:140px">${label}</td><td style="padding:4px 8px;font-size:14px">${escapeHtml(value)}</td></tr>`;
}

/**
 * Send the customer a confirmation and the administrator a notification.
 * Failures are swallowed (logged) so a mail outage never blocks the lead save.
 */
export async function notifyConsultation(input: {
  name: string;
  phone: string;
  email: string;
  experience: string;
  current: string;
  target: string;
  preferredTime: string;
}): Promise<void> {
  if (!resend || !FROM) {
    console.warn("[email] Resend not configured — skipping consultation notification.");
    return;
  }

  const { adminEmail, siteUrl } = getServerEnv();
  const when = input.preferredTime || "Not specified";

  try {
    await resend.emails.send({
      from: FROM,
      to: input.email,
      subject: "Your free career consultation — The Cloud School",
      html: `<div style="font-family:Inter,system-ui,sans-serif;max-width:520px;margin:auto">
        <h2 style="color:#b45309">Hi ${escapeHtml(input.name)},</h2>
        <p>Thanks for reaching out to <b>The Cloud School</b>. We've received your request for a free 30-minute career consultation.</p>
        <p>Our trainer will call you within <b>24 hours</b> to map your path from <b>${escapeHtml(input.current)}</b> to <b>${escapeHtml(input.target)}</b>.</p>
        <p style="margin-top:24px"><a href="${siteUrl}" style="background:#111;color:#fff;padding:10px 18px;border-radius:9999px;text-decoration:none">Visit our site</a></p>
        <p style="color:#888;font-size:12px">The Cloud School · Pallikaranai, Chennai</p>
      </div>`,
    });
  } catch (e) {
    console.error("Customer confirmation email failed:", e);
  }

  try {
    await resend.emails.send({
      from: FROM,
      to: adminEmail,
      replyTo: input.email,
      subject: `New consultation lead: ${input.name}`,
      html: `<h2>New consultation request</h2>
        <table style="border-collapse:collapse">${row("Name", input.name)}${row("Phone", input.phone)}${row("Email", input.email)}${row("Experience", input.experience)}${row("Current role", input.current)}${row("Target role", input.target)}${row("Preferred time", when)}</table>`,
    });
  } catch (e) {
    console.error("Admin notification email failed:", e);
  }
}

export async function notifyWorkshop(input: {
  name: string;
  phone: string;
  email: string;
  workshop: string;
}): Promise<void> {
  if (!resend || !FROM) {
    console.warn("[email] Resend not configured — skipping workshop notification.");
    return;
  }

  const { adminEmail } = getServerEnv();
  try {
    await resend.emails.send({
      from: FROM,
      to: adminEmail,
      replyTo: input.email,
      subject: `New workshop registration: ${input.workshop}`,
      html: `<h2>New workshop registration</h2>
        <table style="border-collapse:collapse">${row("Name", input.name)}${row("Phone", input.phone)}${row("Email", input.email)}${row("Workshop", input.workshop)}</table>`,
    });
  } catch (e) {
    console.error("Admin workshop notification failed:", e);
  }
}
