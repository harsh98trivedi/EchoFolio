---
layout: post
title: Mastering the Owner Configuration
subtitle: Control your entire site from one file
categories: [Tutorial, Configuration]
tags: [owner.yml, configuration, customization]
image: https://i.imgur.com/WQSqmdX.jpeg
---

The heart of Echofolio is `_data/owner.yml`. This file allows you to control almost every aspect of your site without touching a line of HTML.

## The `owner.yml` Structure

### 1. Identity
Configure your personal brand:
```yaml
name: "Alex Doe"
tagline: "Full Stack Developer"
avatar: "assets/img/me.jpg"
bio_short: "Building digital experiences."
```

### 2. Social Links
Add your profiles. Leaving a link empty hides the icon:
```yaml
socials:
  github: "https://github.com/alexdoe"
  twitter: "" # Hidden
  linkedin: "https://linkedin.com/in/alexdoe"
```

### 3. Skills Matrix
Define your tech stack using Devicon class names:
```yaml
skills:
  - category: "Frontend"
    items:
      - name: "React"
        icon: "devicon-react-original"
```

### 4. UI Customization
Rename sections to match your voice:
```yaml
ui:
  contact_title: "Let's Talk"
  projects_title: "My Work"
```

This data-driven approach keeps your content clean and your code maintainable.
