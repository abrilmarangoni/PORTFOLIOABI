import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#ffffff",
        border: "#333333",
        muted: "#111111",
        "text-muted": "#999999",
      },
      fontFamily: {
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      spacing: {
        // Múltiplos de 8 para espaciados
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '40': '40px',
        '48': '48px',
        '56': '56px',
        '64': '64px',
        '72': '72px',
        '80': '80px',
        '88': '88px',
        '96': '96px',
        '104': '104px',
        '112': '112px',
        '120': '120px',
        '128': '128px',
      },
      borderRadius: {
        '16': '16px',
        '200': '200px',
      },
    },
  },
  plugins: [],
};
export default config;

