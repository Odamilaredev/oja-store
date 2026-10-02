# OJA — Nigerian editorial storefront

A production-oriented Next.js e-commerce starter for OJA, using the approved 1970s European mail-order catalogue × contemporary Nigerian retail direction.

## Stack
- Next.js App Router + React + TypeScript
- PostgreSQL + Prisma
- Stripe Checkout + signed webhook
- HttpOnly HMAC-signed sessions with bcrypt passwords
- Responsive editorial UI

## Local setup
1. Copy `.env.example` to `.env` and fill in PostgreSQL, auth, app URL and Stripe values.
2. Install packages: `npm install`
3. Create schema: `npm run db:push`
4. Seed admin + six products: `npm run db:seed`
5. Start: `npm run dev`

Admin credentials are controlled by `ADMIN_EMAIL` and `ADMIN_PASSWORD` in `.env` at seed time. Change the password before any real deployment.

## Stripe
Set `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET`. Point the Stripe webhook to `/api/checkout/webhook` and subscribe to `checkout.session.completed`.

## Production checklist
- Use managed PostgreSQL with automated backups.
- Store real product media in an object store/CDN and replace seeded SVG paths.
- Configure transactional email for order confirmations.
- Add CSRF protection/rate limiting at the edge for high-traffic deployments.
- Configure a real shipping/tax policy and verify NGN payment availability for the Stripe account/region.
- Review privacy, returns, tax, and consumer-protection requirements before launch.

# OJA Store
