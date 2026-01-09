export default {
    plugins: [],
    theme: {
      extend: {
        fontFamily: {
          sans: ['"Inter"', 'sans-serif'],
          display: ['"Outfit"', 'sans-serif'], // Modern Tech
          body: ['"Inter"', 'sans-serif'], // Professional Standard
          mono: ['"JetBrains Mono"', 'monospace'],
        },
        colors: {
          border: "hsl(var(--border) / <alpha-value>)",
          input: "hsl(var(--input) / <alpha-value>)",
          ring: "hsl(var(--ring) / <alpha-value>)",
          background: "hsl(var(--background) / <alpha-value>)",
          foreground: "hsl(var(--foreground) / <alpha-value>)",
          primary: {
            DEFAULT: "hsl(var(--primary) / <alpha-value>)",
            foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
            foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
            foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
          },
          muted: {
            DEFAULT: "hsl(var(--muted) / <alpha-value>)",
            foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
          },
          accent: {
            DEFAULT: "hsl(var(--accent) / <alpha-value>)",
            foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
          },
          popover: {
            DEFAULT: "hsl(var(--popover) / <alpha-value>)",
            foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
          },
          card: {
            DEFAULT: "hsl(var(--card) / <alpha-value>)",
            foreground: "hsl(var(--card-foreground) / <alpha-value>)",
          },
        },
        borderRadius: {
            'xl': '0.75rem',
            '2xl': '1rem',
        },
        animation: {
            'bounce-slow': 'bounce 3s infinite',
            'spin-slow': 'spin 12s linear infinite',
            'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        }
      },
      container: {
        center: true,
        padding: '2rem',
      },
    },
    // More specific patterns to avoid node_modules
    content: [
        "./_layouts/**/*.html",
        "./_includes/**/*.html",
        "./_posts/*.md",
        "./*.html",
        "./src/**/*.svelte",
        "./src/**/*.js"
    ],
  }
