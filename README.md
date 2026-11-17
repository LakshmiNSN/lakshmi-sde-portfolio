# Sai Naga Lakshmi — SDE Portfolio

A responsive dark developer portfolio built with Next.js App Router, TypeScript, Tailwind CSS and Lucide icons. The visual direction is inspired by the clean, project-first structure of the reference portfolio, without copying its source code.

## 1. Requirements

- Windows 10/11
- Node.js 20.9 or newer (LTS recommended)
- Git
- GitHub account
- Vercel account

Check Node and npm in PowerShell:

```powershell
node -v
npm -v
git --version
```

## 2. Run locally

Extract the ZIP. Open the extracted `lakshmi-sde-portfolio` folder in VS Code.

In VS Code: Terminal → New Terminal. Run:

```powershell
npm install
npm run dev
```

Open http://localhost:3000

To test a production build:

```powershell
npm run build
npm run start
```

## 3. Personalize before publishing

Open `app/page.tsx` and review:
- Name and role in the hero section
- About paragraph
- Skill groups
- Project titles, descriptions, stacks and repository URLs
- Education scores and achievements
- LinkedIn, GitHub and LeetCode URLs

The project cards currently use the four public repositories visible on `github.com/LakshmiNSN`. Do not add a project until its repository is public and the description accurately reflects what you built.

### Add your resume PDF (optional)

1. Create a `public` folder in the project root if it does not exist.
2. Copy your final resume into it and name it `resume.pdf`.
3. Add a button/link where you want it:

```tsx
<a href="/resume.pdf" target="_blank" rel="noreferrer">View resume</a>
```

Only upload a resume version you are comfortable making public. Consider removing your full home address and other unnecessary personal information.

### Update the website title

Edit `app/layout.tsx`. Replace `https://example.vercel.app` in `metadataBase` with your final Vercel domain after deployment.

## 4. Push to GitHub (Windows)

Create a new empty repository on GitHub:
- Repository name: `lakshmi-sde-portfolio`
- Public or Private: your choice
- Do not initialize it with a README (this folder already has one)

Then, from the VS Code terminal inside this project folder:

```powershell
git init
git add .
git commit -m "Build personal SDE portfolio"
git branch -M main
git remote add origin https://github.com/LakshmiNSN/lakshmi-sde-portfolio.git
git push -u origin main
```

If Git asks you to sign in, complete the browser authentication prompt. If the remote URL differs, copy the exact HTTPS URL from your new GitHub repository and use it in `git remote add origin`.

## 5. Deploy on Vercel

1. Sign in at https://vercel.com/ using GitHub.
2. Click **Add New → Project**.
3. Import `lakshmi-sde-portfolio`.
4. Framework should be detected as **Next.js**.
5. Keep the default build settings. No environment variables are needed for this portfolio.
6. Click **Deploy**.
7. When deployment finishes, open the generated `.vercel.app` URL.

Every push to the connected GitHub repository's production branch will trigger a new deployment.

## 6. Add the portfolio to LinkedIn

1. Open your LinkedIn profile.
2. Select **Contact info → Edit**.
3. Add your Vercel URL as a website and choose **Portfolio** if that option is shown.
4. Also add it under **Featured → Add a link** so recruiters can see it near the top of your profile.
5. Use a short title such as: `Personal Portfolio | Software Developer`.

## 7. Before sharing with recruiters

- Check every social and repository link.
- Verify that project descriptions match the actual implementation.
- Add a resume PDF only if you want it publicly accessible.
- Test the site on mobile.
- Do not publish personal phone numbers, home address, API keys or private credentials.
- Confirm that CGPA, percentages and award titles match your certificates.

## Project structure

```text
lakshmi-sde-portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Notes

- No backend, database, API key or paid service is required.
- The contact area links to LinkedIn and GitHub; it does not send email.
- The site uses Google Fonts from the browser. If you want fully self-hosted fonts, replace the font import in `app/globals.css`.
