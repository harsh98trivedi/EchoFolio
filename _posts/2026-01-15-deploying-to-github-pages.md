---
layout: post
title: Deploying Echofolio to Production
subtitle: Launch your portfolio to the world with GitHub Pages
categories: [Guide, Deployment]
tags: [github pages, deployment, CI/CD]
image: https://i.imgur.com/exrlVqI.jpeg
---

You have built it, customized it, and added your projects. Now it is time to show it to the world.

## GitHub Pages Deployment

Echofolio is optimized for GitHub Pages. Here is the recommended workflow:

1.  **Repository Name**: Ensure your repository is named `username.github.io`. This sets up your primary GitHub user site.

2.  **Enable Pages**: Go to your repository **Settings > Pages**.

3.  **Source Selection**:
    *   **Option A: GitHub Actions (Recommended)**
        Since we use Tailwind CSS (Node.js) and standard Jekyll plugins, the default GitHub Pages builder might fail. We recommend using a GitHub Action to build the site and deploy the `_site` directory.
    *   **Option B: Manual Build**:
        Build the site locally with `npm run build` (this compiles both Tailwind assets and Jekyll). Then, push the contents of the `_site` folder to a `gh-pages` branch.

4.  **Custom Domain**:
    If you have a custom domain (e.g., `www.yourname.com`), add it in the Pages settings. GitHub will automatically provision an HTTPS certificate for you.

## SEO Checklist

Before you share your link, make sure you have:
*   Updated `_data/owner.yml` with your real info.
*   Added a proper `title` and `description` in `_config.yml`.
*   Replaced the default favicon/logo in `assets/img`.

Congratulations! You are now live. Share your new Echofolio site with the world!
