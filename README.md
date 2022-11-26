# SYSTEMS COST REPOSITORY

## TECH STACK

NextJS & TailwindCSS
Next-Auth
Prisma & MySQL on Azure
Vercel Deployment

## AUTH
Be sure to update client_id and client_secret (in .env.local), and ensure  updated domain/callback URL
https://github.com/settings/applications/2049255
## DEVELOPMENT

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### PRISMA ORM

Launch Prisma Studio:

```bash
npx prisma studio
```

```bash
npx prisma format
```

Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client):

```bash
  $ prisma migrate dev
```

Pull the schema from an existing database, updating the Prisma schema:

```bash
$ prisma db pull
```

Push the Prisma schema state to the database:

```bash
$ prisma db push
```

## HOSTING

To deploy to production:
```bash
vercel --prod
```

Hosted On Vercel: https://next-cost-repo.vercel.app/

## ROADMAP

### Priority
Configure Email Auth
Configure Google Auth
Setup Database (Supabase + Postgres)
Setup Prisma ORM (npx prisma init --datasource-provider sqlite)
Confirm User Callback URLs / Confirm Project Domain


fix layout
- [ ] Basic Project CRUD
- [ ] Add Page Titles
- [ ] Add Page Descriptions
- [ ] Basic Routing
- [ ] Confirm Icons
- [ ] Confirm Colors
- [ ] Confirm Fonts
- [ ] Confirm Layouts
- [ ] Confirm Navbar
- [ ] Footer
- [ ] 404 Workflow
- [ ] Login Page
- [ ] Verify Password
- [ ] User Authentication
- [ ] Tailwind CSS Styling
- [ ] Configure Roles / Routes
- [ ] Basic User Profile
- [ ] "Confirm Delete" Service
- [ ] Google Maps
- [ ] Nivo Charts
- [ ] Font Awesome Icons

### Multitenancy

- [ ] Multi Tenant Support
- [ ] Tenant Management
- [ ] Custom nav logo based on tenant membership
- [ ] Admin notifications
- [ ] New user workflow / welcome email
- [ ] Implement two-factor authentication
- [ ] Fix avatar, permit custom images
- [ ] Implement MS Active Directory
- [ ] API Management
- [ ] Add tenant

### Secondary

- [ ] Add Page Meta Tags
- [ ] Add admin dashboard
- [ ] Add admin settings
- [ ] Decide on Charts Library
- [ ] Decide on UI Library
- [ ] Add User Registration
- [ ] Break out components into separate files
- [ ] Add Breadcrumbs
- [ ] Add Map View
- [ ] Add Database
- [ ] Add Database Migrations
- [ ] Add Database Seeding
- [ ] Add Database Models
- [ ] Add a search bar
- [ ] Add a filter bar
- [ ] Add a sort bar
- [ ] Add a pagination bar
- [ ] Add a user dashboard
- [ ] Sort Project Listing by Date Modified
- [ ] Configure DocuSign (eSign) API for NDA Execution/Management
- [ ] Project Detail Page / Layout
- [ ] Project Edit Page
- [ ] New Project
- [ ] Project Types / db Relationship
- [ ] Project Conditions / db Relationship
- [ ] Union Conditions / db Relationship
- [ ] LEED Conditions / db Relationship
- [ ] Company / db Organization Relationship

### Cost Indices

- [ ] Create web-scraper for indices
- [ ] Create web-scraper for commodities tracking
- [ ] Create service for Current Value Method

### USER PROFILE / SETTINGS

- [ ] Fix "Edit" profile functionality
- [ ] Set custom start page
- [ ] Set timezone

### EPICS

- [ ] Compare multiple projects in landscape report
- [ ] Get push notifications when new projects/cost sources are added
- [ ] NDA management with DocuSign (eSign)
- [ ] Lead Time Forum
- [ ] Major Equipment pricing entries
- [ ] Subcontractor relationship management
- [ ] Create incentive/competition system that rewards users that input the most data.
- [ ] Currency Default
- [ ] Chose Map Library (React Simple Maps?)
- [ ] Chose User Analytics Platform
- [ ] New User Workflow
- [ ] Microsoft Exchange Login
- [ ] Box.com Integration
- [ ] Procore Link / Integration
- [ ] Project CRUD
- [ ] Light / Dark Modes
- [ ] Upload Image Workflow
- [ ] Confirm PDF Export Function
- [ ] User Favorites
- [ ] Cost Comparison Builder
- [ ] Push Notifications
- [ ] Equipment Cost Tracking
- [ ] Lead Time Monitoring
- [ ] Import Estimate via Excel
- [ ] Export via Excel
- [ ] Copy - Paste into Forms from Excel
- [ ] Report Builder
- [ ] RFQ Builder
- [ ] Bid Form Builder
- [ ] Scope of Work Builder

### Conceptual Modeling
