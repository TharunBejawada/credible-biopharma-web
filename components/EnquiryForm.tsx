"use client";

import { useState } from "react";

type Errors = Partial<Record<"name" | "company" | "email" | "message", string>>;

/** UI-only enquiry form (no backend yet): validates and shows a success state. */
export default function EnquiryForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const v = (k: string) => String(d.get(k) ?? "").trim();
    const next: Errors = {};
    if (!v("name")) next.name = "Please enter your name.";
    if (!v("company")) next.company = "Please enter your organisation.";
    if (!/^\S+@\S+\.\S+$/.test(v("email"))) next.email = "Please enter a valid email address.";
    if (!v("message")) next.message = "Please describe your requirement.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true); // TODO: wire to backend (e.g. SES / API route)
  }

  if (sent)
    return (
      <div className="form-card" role="status">
        <p className="ok">Thank you — your requirement has been noted. Our B2B team will get back to you shortly.</p>
      </div>
    );

  return (
    <form className="form-card" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Full name</label>
        <input id="name" name="name" autoComplete="name" aria-invalid={!!errors.name} />
        {errors.name && <span className="err">{errors.name}</span>}
      </div>
      <div className="field">
        <label htmlFor="company">Organisation</label>
        <input id="company" name="company" autoComplete="organization" aria-invalid={!!errors.company} />
        {errors.company && <span className="err">{errors.company}</span>}
      </div>
      <div className="field">
        <label htmlFor="email">Business email</label>
        <input id="email" name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} />
        {errors.email && <span className="err">{errors.email}</span>}
      </div>
      <div className="field">
        <label htmlFor="category">Product category</label>
        <select id="category" name="category" defaultValue="Pharmaceuticals">
          {["Pharmaceuticals", "Injectables", "Surgicals", "Medical Consumables", "Implants", "Other"].map((o) => <option key={o}>{o}</option>)}
        </select>
      </div>
      <div className="field full">
        <label htmlFor="message">Your requirement</label>
        <textarea id="message" name="message" rows={4} aria-invalid={!!errors.message} />
        {errors.message && <span className="err">{errors.message}</span>}
      </div>
      <div className="field full">
        <button type="submit" className="btn btn-accent" style={{ justifySelf: "start", cursor: "pointer" }}>Send Enquiry</button>
      </div>
    </form>
  );
}
