---
layout: post
title: Getting Started with Echofolio
subtitle: A complete guide to installing and running your new portfolio
categories: [Tutorial, Setup]
tags: [installation, guide, jekyll]
image: https://i.imgur.com/emQCqGS.jpeg
---

Ready to build your new portfolio? Getting started with Echofolio is a breeze. This guide will walk you through the prerequisites and installation process.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

1.  **Ruby & Jekyll**: The core engine of the site. [See Jekyll Installation](https://jekyllrb.com/docs/installation/).
2.  **Node.js**: Required for compiling Tailwind CSS. [Download Node.js](https://nodejs.org/).

## Installation Steps

1.  **Clone the Repository**
    Open your terminal and clone the starter code:
    ```bash
    git clone https://github.com/harsh98trivedi/EchoFolio.git my-portfolio
    cd my-portfolio
    ```

2.  **Run the Project**
    We have simplified the process so you don't need to manually install dependencies. Just run the dev script, and it will handle `bundle install` and `npm install` for you automatically:
    ```bash
    npm run dev
    ```

Visit `http://localhost:4000` in your browser, and you should see your new site running!

In the next post, we will look at how to make this site truly yours by configuring the `owner.yml` file.
