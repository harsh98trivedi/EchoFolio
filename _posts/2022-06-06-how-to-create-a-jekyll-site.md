---
title: How to Create a Jekyll Site
layout: post
post-image: https://i.imgur.com/9MtwSt6.png
description: Learn how to create a Jekyll site in some quick simple steps
tags:
- Jekyll
- JamStack
- Web Development
- Technology
---

Jekyll is a static site generator that creates a static website using layouts and text written in your favorite markup language. You can customize your site's appearance, URLs, and displayed data, making it an excellent choice for personal websites, blogs, portfolios, and other sites that don't require a database.

This article will guide you through creating a Jekyll site from scratch, including installing Jekyll and publishing your site online.

## **Getting Started**

Before installing Jekyll, you need to check the **[requirements](https://jekyllrb.com/docs/installation/#requirements)**. You can do this by running the following command in your terminal:

```
gem install jekyll bundler
```

Once Jekyll is installed, you can create a new Jekyll site by running the following command:

```
jekyll new my-site
```

This command will create a new directory named **`my-site`** that contains all the files you need to begin building your site.

## **Adding Content**

To add content to your site, create Markdown files in the **`content`** directory. Each Markdown file will be rendered as a separate page on your site. For example, if you create a file named **`index.md`**, it will be rendered as the homepage of your site.

Here's an example of a Markdown file:

```
---
title: My First Jekyll Site
author: Me
date: 2023-04-10
---
# My First Jekyll Site

This is my first Jekyll site. I'm excited about using Jekyll to create my website.

## About Me

I'm a software engineer at Google. I'm passionate about technology and love building things.

## Contact Me

You can contact me at [email protected].

```

## **Adding Pages**

In addition to Markdown files, you can create pages by adding files to the **`pages`** directory. Pages are similar to Markdown files but have some additional features, such as the ability to create static pages without a corresponding Markdown file or to create custom layouts for your site.

## **Adding Metadata**

Jekyll supports metadata, which is data that describes your site's content. You can add metadata to your site by adding YAML front matter to your Markdown files. For example, the following Markdown file includes metadata:

```
---
title: My First Jekyll Site
author: Me
date: 2023-04-10
---

# My First Jekyll Site
This is my first Jekyll site. I'm excited about using Jekyll to create my website.
```

The metadata in this file includes the title, author, and date of the page. You can use this metadata to control how your site is displayed and provide additional information about your content.

## **Adding Themes**

Jekyll comes with several built-in themes, but you can also use third-party themes to change your site's appearance. To install a theme, download the theme's files and copy them to the **`themes`** directory in your Jekyll site. Once installed, activate the theme by adding the following line to your **`_config.yml`** file:

```
theme: my-theme
```

## **Publishing Your Site**

When you're happy with your site, you can publish it online. You can host your site on GitHub Pages, a free hosting service powered by Jekyll. To use GitHub Pages, create a new repository for your Jekyll site and add the following files to the root of the repository:

- **`index.html`**
- **`_config.yml`**
- **`_layouts`**
- **`_includes`**
- **`assets`**

Once you’ve added these files, you can push your changes to GitHub and publish your site online. Alternatively, you can host your site on your own server by installing Jekyll and configuring it to serve your site.

---

If you’re looking for a simple, minimalistic theme that’s perfect for displaying a list of links, you might want to check out the “Links” theme available on [GitHub](https://github.com/harsh98trivedi/links). It includes a header with a logo and navigation bar, a footer with copyright information and social media links, and a main content area where you can add your links using Markdown.

<a href="https://github.com/harsh98trivedi/links" target="_blank"><img style="width:50vmax!important;" src="https://raw.githubusercontent.com/harsh98trivedi/links/master/assets/images/links.jpg" alt="Links"></a>

On the other hand, if you’re looking for a more complex theme that includes features like a blog, portfolio, and social media integration, you might want to check out the “WhatATheme” available on [GitHub](https://github.com/thedevslot/WhatATheme). It includes a header with a logo, navigation bar, and search bar, a footer with copyright information, social media links, and a contact form, and a main content area where you can add your blog posts, portfolio items, and social media feeds using Markdown.

<a href="https://github.com/thedevslot/WhatATheme" target="_blank"><img style="width:50vmax!important;" src="https://github.com/thedevslot/WhatATheme/raw/master/assets/images/meta.jpg" alt="WhatATheme"></a>

---

You can learn about Github Pages and Jekyll Tutorial by the following YouTube playlist:
<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLm_Qt4aKpfKijgP0rDH7FSJOlS9IBGbT1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

I hope this helps! Let me know if you have any other questions.