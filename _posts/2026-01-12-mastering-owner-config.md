---
layout: post
title: Mastering the Owner Configuration
subtitle: Control your entire site from one file
categories: [Tutorial, Configuration]
tags: [owner.yml, configuration, customization]
image: https://i.imgur.com/WQSqmdX.jpeg
---

One of the most powerful features of Echofolio is its centralized configuration. Instead of editing dozens of HTML files, you manage your content in `_data/owner.yml`.

## The `owner.yml` File

This file acts as the database for your portfolio. Here is what you can control:

### 1. Identity
Set your name, tagline, and bio here.
```yaml
name: "Jane Doe"
tagline: "Full Stack Developer"
avatar: "assets/img/me.jpg"
```

### 2. Social Links
Add links to your social profiles. If you leave a value empty, the icon automatically disappears from the site.
```yaml
socials:
  github: "https://github.com/janedoe"
  twitter: "" # This will be hidden
  linkedin: "https://linkedin.com/in/janedoe"
```

### 3. Skills Matrix
Showcase your tech stack using [Devicon](https://devicon.dev/) identifiers.
```yaml
skills:
  - category: "Frontend"
    items:
      - name: "React"
        icon: "devicon-react-original"
      - name: "Tailwind"
        icon: "devicon-tailwindcss-plain"
```

### 4. UI Text
You can even rename sections of your website without touching the code:
```yaml
ui:
  contact_title: "Get in Touch"
  projects_title: "My Work"
```

By keeping content separate from code, Echofolio allows you to focus on what matters: your work and your story.
