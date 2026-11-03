import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const TO = ["contact@crediblebiopharma.com", "mangareddy@crediblebiopharma.com"];

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }
  const f = (k: string) => String(body[k] ?? "").trim().slice(0, 5000);
  const name = f("name"), company = f("company"), email = f("email"), category = f("category"), message = f("message");

  if (!name || !company || !message || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ message: "Missing or invalid fields." }, { status: 400 });
  }

  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  if (!user || !pass) {
    console.error("EMAIL_USER / EMAIL_PASS are not configured");
    return NextResponse.json({ message: "Email service is not configured." }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({ service: "gmail", auth: { user, pass } });

  const html = `
    <h2>New website enquiry</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      <tr><td><b>Name</b></td><td>${esc(name)}</td></tr>
      <tr><td><b>Organisation</b></td><td>${esc(company)}</td></tr>
      <tr><td><b>Email</b></td><td>${esc(email)}</td></tr>
      <tr><td><b>Category</b></td><td>${esc(category)}</td></tr>
      <tr><td valign="top"><b>Requirement</b></td><td>${esc(message).replace(/\n/g, "<br>")}</td></tr>
    </table>
    <p style="color:#666">Submitted ${new Date().toISOString()} via crediblebiopharma website</p>`;

  try {
    await transporter.sendMail({
      from: user,
      to: TO,
      replyTo: email,
      subject: `New enquiry from ${name} (${company}) – ${category}`,
      html,
    });
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (err) {
    console.error("Error sending enquiry email:", err);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
