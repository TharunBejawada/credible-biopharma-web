# Credible Biopharma – Web

Single-page B2B healthcare site built with **Next.js (App Router, TypeScript)**, **Lenis** smooth scrolling and **Framer Motion** reveal animations. Deployed on **AWS Amplify Hosting**.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Deploy on AWS Amplify
1. Amplify Console → *Create new app* → *GitHub* → select this repo, branch `main`.
2. Amplify detects Next.js; `amplify.yml` is included. Use Node 20+.
3. Save and deploy; every push to `main` redeploys.

The enquiry form is UI-only (validation + success state); wire `components/EnquiryForm.tsx` to a backend later.
Footer contact details are placeholders (`[EMAIL ADDRESS]`, etc.) as in the design.
