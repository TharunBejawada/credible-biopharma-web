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

## Enquiry form email
`POST /api/enquiry` sends enquiries via Gmail (nodemailer) to contact@ and mangareddy@crediblebiopharma.com.
Set these environment variables (Amplify Console → Hosting → Environment variables; `.env.local` for local dev). Never commit them:

- `EMAIL_USER` – Gmail sender address
- `EMAIL_PASS` – Gmail App Password
