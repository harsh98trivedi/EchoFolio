---
layout: post
title: Deploying Echofolio to Production
subtitle: Launch your portfolio to the world with GitHub Pages
categories: [Guide, Deployment]
tags: [github pages, deployment, CI/CD]
image: https://i.imgur.com/exrlVqI.jpeg
---

Your portfolio is ready. Now let's share it with the world using GitHub Pages.

## Recommended Workflow: GitHub Actions

Since Echofolio uses Tailwind CSS (requiring Node.js build steps), the standard GitHub Pages build needs a custom workflow.

1.  **Repository Setup**: Name your repo `username.github.io`.
2.  **Enable Pages**: Go to **Settings > Pages** and set source to "GitHub Actions".
3.  **The Workflow**: We provide a pre-configured `.github/workflows/deploy.yml` that handles:
    *   Node.js setup & dependency installation
    *   Ruby setup
    *   Asset compilation (`npm run build`)
    *   Jekyll build and deployment

### Troubleshooting Deployment

If you encounter errors like `bundle: not found` in your generic or local build scripts, ensure that your environment sets up Ruby **before** running the build command. Our included workflow expects this sequence.

### Manual Deployment

Alternatively, you can build locally:
```bash
npm run build
```
Then push the `_site` folder contents to a `gh-pages` branch.

Congratulations on launching your new Echofolio site!
