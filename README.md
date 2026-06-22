# Teja Medi — Portfolio

My personal portfolio website built with React, TypeScript, Vite, Tailwind CSS, and shadcn-ui.

- GitHub: https://github.com/tejamedi23
- LinkedIn: https://www.linkedin.com/in/teja-medi-137b87332/

## Run locally

Requires Node.js 18+ and npm.

```sh
npm install
npm run dev
```

Open http://localhost:8080

## Contact form setup (EmailJS)

The contact form sends real emails using [EmailJS](https://www.emailjs.com/) — free, no backend server needed.

1. Create a free account at https://dashboard.emailjs.com/sign-up
2. **Add an Email Service**: Email Services → Add New Service → connect your Gmail (or any provider). Note the **Service ID**.
3. **Create an Email Template**: Email Templates → Create New Template. Use these variable names in the template body so they match the code:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`

   Example template body:
   ```
   New message from {{from_name}} ({{from_email}}):

   {{message}}
   ```
   Note the **Template ID**.
4. **Get your Public Key**: Account → General → Public Key.
5. Copy `.env.example` to `.env` in the project root and fill in the three values:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
6. Restart `npm run dev` after adding the `.env` file (Vite only reads it on start).

If these env vars aren't set, the form will show an error toast instead of silently failing.

**When deploying** (Vercel/Netlify/etc.), add the same three `VITE_EMAILJS_*` variables in your hosting provider's Environment Variables settings — `.env` files are not committed to git and won't exist on the server otherwise.

## Deploy

### Vercel (recommended, free)
1. Push this project to a GitHub repo (if not already there).
2. Go to https://vercel.com/new and import the repo.
3. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
4. Add the three `VITE_EMAILJS_*` environment variables under Project Settings → Environment Variables.
5. Deploy.

### Netlify (also free)
1. Go to https://app.netlify.com/start and connect your repo.
2. Build command: `npm run build`. Publish directory: `dist`.
3. Add the three `VITE_EMAILJS_*` environment variables under Site Settings → Environment Variables.
4. Deploy.

## Tech stack

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- EmailJS (contact form)
