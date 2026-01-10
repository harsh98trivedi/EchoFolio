# Echofolio

**Echofolio** is a premium, high-performance portfolio theme designed for developers, designers, and creative technologies. Built with **Jekyll** and **Tailwind CSS**, it features a fully data-driven architecture, meaning you can control almost every aspect of the site from a single configuration file without touching code.

![EchoFolio Preview](https://repository-images.githubusercontent.com/1131344790/e6ab4b83-373c-4102-b4ee-03fc302a6949)

## ✨ Features

-   **Data-Driven Design**: Manage all content via `_data/owner.yml`.
-   **Dark Mode Aesthetic**: A sleek, accessibility-focused dark theme with glassmorphism effects.
-   **Dynamic Tech Stack**: Beautiful, animated integration of Devicon & FontAwesome icons.
-   **CMS Integration**: Built-in support for `jekyll-admin` for writing blog posts via a GUI.
-   **Comment System**: Dynamic Disqus integration for blog posts.
-   **SEO Optimized**: Semantic HTML and auto-generated meta tags.
-   **Responsive**: Fully responsive grid layouts and typography.

---

## 🚀 Getting Started

Follow these steps to get your portfolio running in minutes.

### 1. Prerequisites
Ensure you have the following installed:
-   **Ruby & Jekyll**: [Installation Guide](https://jekyllrb.com/docs/installation/)
-   **Node.js**: [Download](https://nodejs.org/) (Required for Tailwind CSS)

### 2. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/echofolio.git
cd echofolio

# Install Ruby dependencies
bundle install

# Install Node dependencies
npm install
```

### 3. Running Locally

To start the development server (which handles both Jekyll and Tailwind updates):

```bash
npm run dev
```

Your site will be available at: `http://localhost:4000`

---

## ⚙️ Configuration (`owner.yml`)

The heart of Echofolio is `_data/owner.yml`. This separate file controls your bio, social links, skills, navigation, and more.

### **1. Identity & Bio**
Update your name, tagline, avatar, and bio here.
```yaml
name: "Alex Doe"
tagline: "Building the Future"
avatar: "https://your-image-url.com/me.png"
bio_long: "Your detailed about me text..."
```

### **2. Social Links**
Add your profiles. Leaving a link empty (or removing the key) will automatically hide the icon from the site.
```yaml
socials:
  github: "https://github.com/username"
  twitter: "" # Twitter icon will not show
```

### **3. Skills (Tech Stack)**
We use [Devicon](https://devicon.dev/) for icons. Format: `devicon-[name]-[style]` (e.g., `devicon-react-original`).
```yaml
skills:
  - category: "Development"
    items:
      - name: "React"
        icon: "devicon-react-original"
```

### **4. UI Variables**
Customize section titles without coding:
```yaml
ui:
  contact_title: "Say Hello"
  projects_title: "My Lab"
```

### **5. Config Extensions**
Enable features like comments or forms:
```yaml
config:
  disqus_username: "your-disqus-shortname" # Enables comments on blog posts
  google_form_action: "https://docs.google.com/forms/..."
```

---

## 🛠️ Customization Guides

### **How to Change the Logo**
1.  Navigate to `assets/img/`.
2.  Replace `icon.svg` with your own SVG logo.
3.  Ensure the filename remains `icon.svg` or update the reference in `_includes/navbar.html`.

### **How to Disable the Blog**
1.  Open `_data/owner.yml`.
2.  Under the `navigation` section, simply remove the `- title: Blog` entry.
3.  The blog page will still exist in the files but will be inaccessible to users.

### **Managing Content via CMS (Jekyll Admin)**
Echofolio comes with `jekyll-admin`.
1.  Run the site locally: `npm run dev`
2.  Go to `http://localhost:4000/admin`
3.  You can write posts, manage pages, and upload static files via a clean interface.

---

## 📦 Deployment (GitHub Pages)

This theme is ready for **GitHub Pages**.

1.  Push your code to a repository named `username.github.io`.
2.  Go to **Settings > Pages**.
3.  Source: **GitHub Actions** (Recommended) or **Deploy from Branch**.
    *   *Note*: Since this uses Tailwind (Node.js), standard Jekyll build on GitHub Pages might fail without a custom workflow. We recommend using the provided **GitHub Actions** workflow or building locally and pushing the `_site` folder if you prefer manual control.

---

## ❤️ Credits
Designed & Built by [Harsh Trivedi](https://harsh98trivedi.github.io).
Licensed under MIT.
