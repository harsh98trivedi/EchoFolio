---
title: Getting Started with Echofolio
post-image: https://i.imgur.com/emQCqGS.jpeg
description: A complete guide to installing and running your new portfolio.
layout: post
tags:
- installation
- guide
- jekyll
---

Ready to build your new portfolio? Getting started with Echofolio is efficient and straightforward.

## Prerequisites

Ensure you have the following installed:
1.  **Ruby & Jekyll**: [Installation Guide](https://jekyllrb.com/docs/installation/).
2.  **Node.js**: [Download](https://nodejs.org/).

## Installation Steps

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/harsh98trivedi/EchoFolio.git my-portfolio
    cd my-portfolio
    ```

2.  **Run the Project**
    We've streamlined the process. Simply run the dev script:
    ```bash
    npm run dev
    ```
    This command automatically installs both Ruby gems and Node modules, then starts the server.

## Directory Structure

*   `_data/owner.yml`: Your content configuration.
*   `_posts/`: Your blog articles.
*   `assets/`: Images, scripts, and styles.
*   `tailwind.config.js`: Design system configuration.

Visit `http://localhost:4000` to see your site live!
