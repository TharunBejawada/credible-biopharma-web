import EnquiryForm from "@/components/EnquiryForm";
import Header from "@/components/Header";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";
import { Arrow, Check, Svg } from "@/components/icons";

const chipList = (items: string[], cls = "") => items.map((c) => <span key={c} className={`chip ${cls}`}>{c}</span>);

const portfolioBig = [
  {
    title: "Injectables", cta: "View Injectable Range →", label: "Product categories may include",
    text: "A comprehensive range of injectable pharmaceutical products for institutional and hospital requirements. Our injectable portfolio may include products across multiple therapeutic segments and dosage formats, supporting the needs of hospitals, clinics, distributors and healthcare procurement teams.",
    chips: ["General injectables", "Antibiotic injectables", "Critical care injectables", "Anaesthesia products", "Pain management injectables", "Gastrointestinal injectables", "Anti-infective products", "Nutritional injectables", "Emergency care products", "Specialty injectables"],
    icon: <path d="m18 2 4 4M17 7l3-3M19 9 8.7 19.3a2.4 2.4 0 0 1-3.4 0l-.6-.6a2.4 2.4 0 0 1 0-3.4L15 5M9 11l4 4M5 19l-3 3M14 4l6 6" />,
  },
  {
    title: "Pharmaceutical Drugs", cta: "Explore Pharmaceutical Products →", label: "Therapeutic segments may include",
    text: "We offer a broad range of pharmaceutical formulations for different therapeutic areas and healthcare requirements, developed to support institutional procurement, distribution networks and healthcare businesses looking for dependable pharmaceutical supply.",
    chips: ["Antibiotics", "Analgesics", "Anti-inflammatory medicines", "Gastroenterology", "Cardiology", "Neurology", "Diabetology", "Respiratory care", "General medicine", "Critical care", "Nutritional supplements", "Specialty medicines"],
    note: "Available forms may include tablets, capsules, syrups, suspensions, injectables and other formulations depending on market requirements.",
    icon: <><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" /><path d="m8.5 8.5 7 7" /></>,
  },
];

const portfolioSmall = [
  {
    title: "Surgical Products", cta: "Explore Surgical Products →",
    text: "Essential surgical products used across hospitals, operating rooms and clinical environments — reliable access for routine and specialized procedures.",
    items: ["Surgical instruments", "Surgical sutures", "Drapes and gowns", "Surgical kits", "Procedure packs", "Catheters", "Drainage products", "Surgical accessories", "OT essentials", "General surgical supplies"],
    icon: <><circle cx="6" cy="6" r="3" /><path d="M8.12 8.12 12 12" /><path d="M20 4 8.12 15.88" /><circle cx="6" cy="18" r="3" /><path d="M14.8 14.8 20 20" /></>,
  },
  {
    title: "Medical Consumables", cta: "Explore Medical Consumables →",
    text: "Supporting the everyday needs of hospitals, clinics, diagnostic centres and facilities — consistent availability, dependable quality, efficient supply.",
    items: ["Syringes", "Needles", "IV sets", "IV cannulas", "Gloves", "Masks", "Dressings", "Gauze products", "Bandages", "Catheters", "Tubing products", "Disposable products", "Patient care consumables", "Infection control"],
    icon: <><path d="M21 8 12 3 3 8v8l9 5 9-5z" /><path d="M3 8l9 5 9-5M12 13v8" /></>,
  },
  {
    title: "Medical Implants", cta: "Explore Implant Solutions →",
    text: "Selected implant solutions for hospitals, surgeons, distributors and specialty partners, supporting surgical and orthopedic requirements.",
    items: ["Orthopedic implants", "Trauma implants", "Plates and screws", "Intramedullary nails", "Joint replacement", "Spine implants", "Fixation systems", "Specialty implants"],
    note: "Availability may vary depending on geography, regulatory approvals and business requirements.",
    icon: <path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z" />,
  },
];

const partnerCards = [
  ["01", "Pharmaceutical Products", "A diverse portfolio supporting multiple therapeutic and institutional requirements."],
  ["02", "Medical & Surgical Supplies", "Essential surgical and clinical products for hospitals and healthcare facilities."],
  ["03", "Consumables", "High-demand medical consumables for routine healthcare operations."],
  ["04", "Implants", "Specialized implant solutions for surgical and orthopedic applications."],
];

const why = [
  ["Wide Product Portfolio", "Access pharmaceutical products, injectables, surgicals, consumables and implants through one business partner.", <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>],
  ["B2B-Focused Approach", "Our processes are designed around distributor, institutional and healthcare procurement requirements.", <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" />],
  ["Reliable Sourcing", "Dependable product sourcing and consistent supply to support long-term business continuity.", <><path d="M1 7h13v10H1zM14 10h4l3 3v4h-7" /><circle cx="5.5" cy="18.5" r="2" /><circle cx="17.5" cy="18.5" r="2" /></>],
  ["Quality-Focused Products", "Sourced from suitable manufacturers and suppliers with a strong focus on quality and compliance requirements.", <><path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5z" /><path d="m9 12 2 2 4-4" /></>],
  ["Competitive Commercial Solutions", "Our B2B model supports competitive pricing and scalable solutions for different order volumes.", <><path d="M3 17l6-6 4 4 8-8" /><path d="M14 7h7v7" /></>],
  ["Responsive Support", "Timely communication, product information and commercial assistance throughout the business process.", <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />],
  ["Flexible Supply Options", "Different purchasing models based on product category, market, order quantity and business requirement.", <><path d="M4 6h16M4 12h10M4 18h6" /><circle cx="18" cy="16" r="3" /></>],
  ["Long-Term Partnerships", "We aim to build sustainable business relationships rather than one-time transactions.", <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM16 20a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM11 9l2 6" />],
] as const;

const steps = [
  ["Share Your Requirement", "Send us your required products, quantities and destination details."],
  ["Product Evaluation", "Our team reviews availability, specifications and sourcing options."],
  ["Commercial Proposal", "We provide a suitable product and commercial proposal based on your requirement."],
  ["Documentation & Confirmation", "Product documentation, commercial terms and supply conditions are finalized."],
  ["Order Processing", "Once confirmed, the order moves into procurement, packaging and supply coordination."],
  ["Delivery Support", "Our team coordinates dispatch and provides ongoing communication until completion."],
];

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <Header />

      {/* HERO */}
      <section id="top" className="hero">
        <div className="hero-in">
          <Stagger gap={0.12} className="col" style={{ flex: "1 1 520px", minWidth: 0, gap: 24 }}>
            <StaggerItem as="span" className="eyebrow">B2B Healthcare Solutions</StaggerItem>
            <StaggerItem><h1>Reliable Healthcare Solutions. <em>Stronger Business Partnerships.</em></h1></StaggerItem>
            <StaggerItem>
              <p style={{ fontSize: 18, lineHeight: 1.65, color: "var(--text)", maxWidth: 600 }}>
                Credible Biopharma is a B2B healthcare solutions company supplying a wide range of pharmaceutical products, injectables, surgical products, medical consumables and implants to hospitals, distributors, healthcare institutions and business partners.
              </p>
            </StaggerItem>
            <StaggerItem style={{ display: "flex", flexWrap: "wrap", gap: 14, paddingTop: 8 }}>
              <a href="#products" className="btn btn-accent">Explore Our Products <Arrow /></a>
              <a href="#partner" className="btn btn-outline">Partner With Us</a>
            </StaggerItem>
          </Stagger>
          <Reveal delay={0.2} style={{ flex: "1 1 380px", minWidth: 0, display: "flex", justifyContent: "center" }}>
            <div className="hero-img">
              <img src="/logo.jpg" alt="Credible Biopharma – Trusted Science, Better Health, Brighter Tomorrow" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CATEGORY STRIP */}
      <div className="strip">
        <div className="strip-in">
          {["Pharmaceuticals", "Injectables", "Surgicals", "Medical Consumables", "Implants"].map((c, i) => (
            <span key={c} style={{ display: "contents" }}>{i > 0 && <span className="sdot" />}<span>{c}</span></span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: 48 }}>
        <Reveal className="col" style={{ flex: "1 1 420px", minWidth: 0, gap: 14 }}>
          <span className="eyebrow">About Us</span>
          <h2 className="h2">Your Trusted B2B Healthcare Supply Partner</h2>
        </Reveal>
        <Reveal delay={0.12} className="col lead" style={{ flex: "1.3 1 480px", minWidth: 0, gap: 18 }}>
          <p>At Credible Biopharma, we understand that healthcare businesses need more than products. They need reliable supply, consistent standards, competitive solutions and a partner who understands their requirements.</p>
          <p>Our portfolio is designed to support hospitals, institutional buyers, distributors, importers, wholesalers and healthcare networks with essential pharmaceutical and medical products across multiple categories.</p>
          <p>From injectable medicines and pharmaceutical formulations to surgical products, consumables and implants, we aim to provide practical and scalable solutions for healthcare businesses.</p>
        </Reveal>
      </section>

      {/* PORTFOLIO */}
      <section id="products" className="band">
        <div className="wrap col" style={{ gap: 48 }}>
          <Reveal className="sec-head">
            <span className="eyebrow">What We Supply</span>
            <h2 className="h2">Our Product Portfolio</h2>
          </Reveal>

          <Stagger className="grid-2">
            {portfolioBig.map((p) => (
              <StaggerItem key={p.title} as="article" className="card" style={{ padding: 36, gap: 18 }}>
                <div className="icon-box" style={{ width: 56, height: 56, background: "var(--navy)", color: "#fff" }}><Svg size={28} sw={1.8}>{p.icon}</Svg></div>
                <h3 style={{ fontFamily: "var(--head)", fontWeight: 700, fontSize: 24 }}>{p.title}</h3>
                <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--text)" }}>{p.text}</p>
                <span className="small-label">{p.label}</span>
                <div className="chips">{chipList(p.chips)}</div>
                {p.note && <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--muted)" }}>{p.note}</p>}
                <a href="#contact" className="link-arrow">{p.cta}</a>
              </StaggerItem>
            ))}
          </Stagger>

          <Stagger className="grid-3">
            {portfolioSmall.map((p) => (
              <StaggerItem key={p.title} as="article" className="card" style={{ padding: 32, gap: 16 }}>
                <div className="icon-box" style={{ width: 52, height: 52, background: "var(--peach)", color: "var(--accent)" }}><Svg size={26} sw={1.8}>{p.icon}</Svg></div>
                <h3 style={{ fontFamily: "var(--head)", fontWeight: 700, fontSize: 22 }}>{p.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--text)" }}>{p.text}</p>
                <div className="cols-2">{p.items.map((i) => <span key={i} className="li"><span className="dot" />{i}</span>)}</div>
                {p.note && <p style={{ fontSize: 13, lineHeight: 1.6, color: "var(--muted)" }}>{p.note}</p>}
                <a href="#contact" className="link-arrow">{p.cta}</a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ONE PARTNER */}
      <section className="dark">
        <div className="wrap col" style={{ gap: 48 }}>
          <Reveal style={{ display: "flex", flexWrap: "wrap", gap: "24px 64px", alignItems: "flex-end" }}>
            <h2 className="h2" style={{ flex: "1 1 420px" }}>One Partner. <span style={{ color: "var(--orange-l)" }}>Multiple Healthcare Categories.</span></h2>
            <p style={{ flex: "1 1 420px", fontSize: 17, lineHeight: 1.7, color: "var(--on-dark)" }}>Managing multiple suppliers can increase procurement complexity, lead times and operational challenges. Credible Biopharma brings together multiple healthcare product categories under one B2B supply platform, helping our partners simplify sourcing and improve procurement efficiency.</p>
          </Reveal>
          <Stagger className="" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: 20 }}>
            {partnerCards.map(([n, t, d]) => (
              <StaggerItem key={n} className="card-dark">
                <span style={{ fontFamily: "var(--head)", fontSize: 15, fontWeight: 600, color: "var(--orange-l)" }}>{n}</span>
                <h3 style={{ fontFamily: "var(--head)", fontSize: 20, fontWeight: 600 }}>{t}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--on-dark)" }}>{d}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: 48 }}>
        <Reveal className="col" style={{ flex: "1 1 380px", minWidth: 0, gap: 14 }}>
          <span className="eyebrow">Who We Work With</span>
          <h2 className="h2">We serve a wide range of B2B healthcare partners.</h2>
          <p className="lead">Whether you require regular supply, bulk procurement or a customized sourcing solution, our team works closely with you to understand your business needs.</p>
        </Reveal>
        <Stagger gap={0.04} className="chips" style={{ flex: "1.4 1 520px", minWidth: 0, gap: 10, alignContent: "flex-start" }}>
          {["Pharmaceutical distributors", "Medical distributors", "Hospitals", "Hospital groups", "Clinics", "Healthcare institutions", "Government procurement agencies", "Medical wholesalers", "Importers", "Exporters", "Surgical product distributors", "Institutional procurement companies", "Healthcare project suppliers", "International trading partners"].map((c) => (
            <StaggerItem key={c} as="span" className="chip chip-lg">{c}</StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* WHY PARTNER */}
      <section className="band">
        <div className="wrap col" style={{ gap: 48 }}>
          <Reveal className="sec-head">
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="h2">Why Partner With Credible Biopharma?</h2>
          </Reveal>
          <Stagger gap={0.07} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: 20 }}>
            {why.map(([t, d, icon]) => (
              <StaggerItem key={t} className="card" style={{ borderRadius: 16, padding: 28, gap: 12 }}>
                <span className="icon-box" style={{ width: 28, height: 28, justifyContent: "flex-start" }}><Svg size={28} stroke="#C2410C">{icon}</Svg></span>
                <h3 style={{ fontFamily: "var(--head)", fontSize: 18, fontWeight: 600 }}>{t}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--text)" }}>{d}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* SOLUTIONS + INSTITUTIONAL */}
      <section className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))", gap: 32 }}>
        <Reveal className="col" style={{ gap: 18 }}>
          <span className="eyebrow">Tailored Supply</span>
          <h2 className="h2" style={{ fontSize: "clamp(1.7rem, 2.8vw, 2.25rem)", lineHeight: 1.2 }}>B2B Pharmaceutical &amp; Medical Supply Solutions</h2>
          <p className="lead">Every healthcare market has different requirements. Credible Biopharma works with business partners to provide tailored product and supply solutions based on:</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 12 }}>
            {chipList(["Product category", "Market requirements", "Order quantity", "Packaging needs", "Regulatory requirements", "Supply schedule", "Destination country", "Institutional specifications"], "chip-box")}
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.7, fontWeight: 600 }}>Our goal is to make sourcing easier, faster and more dependable for healthcare businesses.</p>
        </Reveal>
        <Reveal delay={0.12} className="col dark" style={{ borderRadius: 20, padding: 40, gap: 18 }}>
          <h2 style={{ fontFamily: "var(--head)", fontWeight: 700, fontSize: 28 }}>Institutional Supply</h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--on-dark)" }}>We support institutional procurement requirements for hospitals, healthcare networks and large-scale healthcare projects — helping institutions reduce the complexity of dealing with multiple vendors.</p>
          <span className="small-label" style={{ color: "var(--orange-l)" }}>Solutions may include</span>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", gap: "10px 20px", fontSize: 15 }}>
            {["Bulk pharmaceutical supply", "Hospital injectables", "Surgical supplies", "Medical consumables", "Implant requirements", "Customized product lists", "Tender-based requirements", "Healthcare project supply", "Recurring procurement support"].map((s) => (
              <span key={s} style={{ display: "flex", gap: 10, alignItems: "center" }}><Check />{s}</span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* DISTRIBUTION + INTERNATIONAL */}
      <section id="partner" className="wrap" style={{ paddingTop: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))", gap: 24 }}>
        <Reveal as="article" className="col" style={{ border: "1px solid var(--line)", borderRadius: 20, padding: 40, gap: 16 }}>
          <span className="eyebrow">Partnerships</span>
          <h2 style={{ fontFamily: "var(--head)", fontWeight: 700, fontSize: 28, lineHeight: 1.2 }}>Distribution Partnerships</h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--text)" }}>We welcome partnerships with pharmaceutical and medical distributors looking to expand their product portfolio. Credible Biopharma can work with distributors on product selection, commercial discussions, supply planning and market-specific requirements.</p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--text)" }}>If you are looking for a dependable healthcare product supplier for your region, speak with our business development team.</p>
          <a href="#contact" className="btn btn-md btn-navy" style={{ marginTop: "auto", alignSelf: "flex-start" }}>Become a Distribution Partner</a>
        </Reveal>
        <Reveal as="article" delay={0.12} className="col" style={{ border: "1px solid var(--line)", borderRadius: 20, padding: 40, gap: 16 }}>
          <span id="international" className="eyebrow">Global Reach</span>
          <h2 style={{ fontFamily: "var(--head)", fontWeight: 700, fontSize: 28, lineHeight: 1.2 }}>International Business &amp; Export Supply</h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--text)" }}>We work with importers, distributors and healthcare businesses seeking pharmaceutical and medical products for their markets. Depending on product availability and applicable regulations, we can support international B2B requirements for:</p>
          <div className="chips">{chipList(["Pharmaceutical medicines", "Injectables", "Surgical products", "Medical consumables", "Implants", "Institutional healthcare supplies"])}</div>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--muted)" }}>Our team can assist with product information, commercial proposals, packaging requirements and documentation based on the destination market.</p>
          <a href="#contact" className="btn btn-md btn-navy" style={{ marginTop: "auto", alignSelf: "flex-start" }}>Discuss Export Requirements</a>
        </Reveal>
      </section>

      {/* QUALITY */}
      <section id="quality" className="band">
        <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: 48 }}>
          <Reveal className="col" style={{ flex: "1 1 400px", minWidth: 0, gap: 16 }}>
            <span className="eyebrow">Quality &amp; Compliance</span>
            <h2 className="h2">Quality plays a critical role in every healthcare supply chain.</h2>
            <p className="lead">At Credible Biopharma, we follow a quality-conscious approach when evaluating products, manufacturers and supply partners.</p>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--muted)" }}>Certification, regulatory status and compliance requirements may vary by product and destination market. Relevant documentation can be provided based on the specific product and business requirement.</p>
          </Reveal>
          <Stagger gap={0.06} style={{ flex: "1.2 1 480px", minWidth: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: 14, alignContent: "start" }}>
            {["Product quality", "Manufacturer credentials", "Packaging standards", "Traceability", "Storage requirements", "Regulatory documentation", "Product specifications", "Supply consistency"].map((q) => (
              <StaggerItem key={q} className="card" style={{ borderRadius: 12, padding: "18px 20px", flexDirection: "row", gap: 12, alignItems: "center", fontWeight: 600, fontSize: 16 }}>
                <Check size={20} stroke="#C2410C" sw={2.4} />{q}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* PROCESS */}
      <section className="wrap col" style={{ gap: 48 }}>
        <Reveal className="sec-head">
          <span className="eyebrow">How It Works</span>
          <h2 className="h2">Simplifying Healthcare Procurement</h2>
          <p className="lead">Our business process is designed to keep B2B procurement straightforward.</p>
        </Reveal>
        <Stagger as="ol" gap={0.09} className="steps">
          {steps.map(([t, d], i) => (
            <StaggerItem as="li" key={t} className="step">
              <span className="step-n">{String(i + 1).padStart(2, "0")}</span>
              <h3 style={{ fontFamily: "var(--head)", fontSize: 20, fontWeight: 600 }}>{t}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--text)" }}>{d}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* SPECIFIC PRODUCT */}
      <section className="wrap" style={{ paddingTop: 0 }}>
        <Reveal className="cta-box">
          <div className="col" style={{ flex: "1 1 420px", minWidth: 0, gap: 16 }}>
            <h2 className="h2" style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}>Looking for a Specific Product?</h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "#3b2a20" }}>Our portfolio continues to expand across pharmaceutical, surgical and medical categories. If you do not see the product you require, share your requirement with our sourcing team.</p>
            <a href="#contact" className="btn btn-accent" style={{ alignSelf: "flex-start" }}>Send Your Product Requirement</a>
          </div>
          <div className="col" style={{ flex: "1 1 420px", minWidth: 0, gap: 12 }}>
            <span className="small-label" style={{ color: "#9a3412", letterSpacing: ".08em" }}>We may be able to assist with</span>
            <div className="chips" style={{ gap: 10 }}>{chipList(["Specific pharmaceutical formulations", "Specialty injectables", "Surgical products", "Medical consumables", "Orthopedic implants", "Hospital procurement lists", "Bulk requirements", "Customized sourcing requests"], "chip-white")}</div>
          </div>
        </Reveal>
      </section>

      {/* LONG TERM */}
      <Reveal as="section" className="col" style={{ maxWidth: 920, margin: "0 auto", padding: "0 24px 96px", gap: 20, textAlign: "center", alignItems: "center" }}>
        <h2 className="h2">Built for Long-Term Healthcare Partnerships</h2>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--text)" }}>Credible Biopharma is committed to creating value through dependable supply, responsible business practices and strong customer relationships. We aim to become a reliable partner for businesses that need consistent access to healthcare products across multiple categories.</p>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--muted)" }}>Whether you are a distributor expanding your portfolio, a hospital managing procurement, an importer sourcing products for your market or a healthcare organization looking for a dependable supply partner, Credible Biopharma is ready to work with you.</p>
      </Reveal>

      {/* CTA / CONTACT */}
      <section id="contact" className="dark">
        <Stagger gap={0.1} className="wrap col" style={{ paddingTop: 88, paddingBottom: 88, alignItems: "center", textAlign: "center", gap: 20 }}>
          <StaggerItem><h2 className="h2" style={{ fontSize: "clamp(2rem, 3.6vw, 2.9rem)", lineHeight: 1.12, maxWidth: 820 }}>Let’s Build a <span style={{ color: "var(--orange-l)" }}>Credible</span> Healthcare Partnership</h2></StaggerItem>
          <StaggerItem><p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--on-dark)", maxWidth: 760 }}>Looking for pharmaceutical drugs, injectables, surgical products, medical consumables or implants? Share your requirement with our B2B team and let us help you identify the right supply solution for your business.</p></StaggerItem>
          <StaggerItem style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14, paddingTop: 12 }}>
            <a href="#enquiry" className="btn btn-accent">Request a Quote</a>
            <a href="#enquiry" className="btn btn-white">Send Product Enquiry</a>
            <a href="#partner" className="btn btn-outline-w">Become a Business Partner</a>
          </StaggerItem>
          <StaggerItem style={{ width: "100%", display: "flex", justifyContent: "center", paddingTop: 24 }}>
            <div id="enquiry" style={{ width: "100%", display: "flex", justifyContent: "center" }}><EnquiryForm /></div>
          </StaggerItem>
        </Stagger>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: 48, padding: "72px 24px 40px" }}>
          <div className="col" style={{ flex: "1.3 1 320px", minWidth: 0, gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <img src="/logo.jpg" alt="Credible Biopharma logo" style={{ width: 64, height: 64, borderRadius: "50%", objectFit: "cover" }} />
              <span style={{ fontFamily: "var(--head)", fontWeight: 700, fontSize: 22, color: "#fff" }}>Credible <span style={{ color: "var(--orange-l)" }}>Biopharma</span></span>
            </div>
            <p style={{ fontSize: 14, fontWeight: 600, color: "#fff", letterSpacing: ".02em" }}>Pharmaceuticals | Injectables | Surgicals | Medical Consumables | Implants</p>
            <p style={{ fontSize: 15, lineHeight: 1.8 }}>Reliable healthcare products.<br />Responsive B2B support.<br />Stronger business partnerships.</p>
          </div>
          <nav aria-label="Quick links" className="col" style={{ flex: "1 1 280px", minWidth: 0, gap: 14 }}>
            <h3 style={{ fontFamily: "var(--head)", fontSize: 16, fontWeight: 600, color: "#fff" }}>Quick Links</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "4px 20px", fontSize: 15 }}>
              {[["top", "Home"], ["about", "About Us"], ["products", "Products"], ["products", "Injectables"], ["products", "Pharmaceuticals"], ["products", "Surgicals"], ["products", "Consumables"], ["products", "Implants"], ["quality", "Quality"], ["international", "International Business"], ["contact", "Contact Us"]].map(([id, l]) => (
                <a key={l} href={`#${id}`}>{l}</a>
              ))}
            </div>
          </nav>
          <div className="col" style={{ flex: "1.2 1 300px", minWidth: 0, gap: 14 }}>
            <h3 style={{ fontFamily: "var(--head)", fontSize: 16, fontWeight: 600, color: "#fff" }}>Business Enquiries</h3>
            <p style={{ fontSize: 15, lineHeight: 1.7 }}>For distribution, institutional procurement, bulk supply, export enquiries and product requirements, contact our business development team.</p>
            <a href="mailto:contact@crediblebiopharma.com" className="btn btn-sm btn-accent" style={{ alignSelf: "flex-start", color: "#fff", padding: "0 20px", justifyContent: "center", textAlign: "center" }}>Contact Business Development</a>
            <div className="col" style={{ gap: 8, fontSize: 15, color: "#fff" }}>
              <a href="mailto:contact@crediblebiopharma.com" style={{ color: "#fff" }}>contact@crediblebiopharma.com</a><a href="tel:+919849168686" style={{ color: "#fff" }}>+91 98491 68686</a>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid #1c3366" }}>
          <div style={{ maxWidth: 1240, margin: "0 auto", padding: "22px 24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 10, fontSize: 14, color: "#a9b6d3" }}>
            <span>Credible Biopharma – Your Partner in Healthcare Supply.</span>
            <span>© 2026 Credible Biopharma. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
