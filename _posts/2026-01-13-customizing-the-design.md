---
title: Styling with Tailwind in Echofolio
post-image: https://i.imgur.com/qVmT4HR.jpeg
description: How to customize the look and feel of your portfolio.
layout: post
tags:
- tailwind
- css
- design
---

Echofolio leverages **Tailwind CSS** to provide a highly customizable design system.

## Design Philosophy

We use a dark-mode-first aesthetic with "glassmorphism" effects to create a premium feel.

### Colors & Typography
Defined in `tailwind.config.js`. You can easily swap the color palette or font families to match your brand guidelines.

## Customizing Components

To change a component's look, edit the HTML files in `_includes/`. Use Tailwind utility classes directly:

```html
<!-- Example: Changing a button from rounded to square -->
<a href="#" class="px-6 py-3 bg-primary text-white rounded-none">
  Click Me
</a>
```

## Glassmorphism

We achieve the frosted glass effect using `backdrop-blur`:
```html
<div class="backdrop-blur-md bg-white/10 border border-white/20">
  <!-- Content -->
</div>
```

Experiment with different opacity levels to create depth in your layout.
