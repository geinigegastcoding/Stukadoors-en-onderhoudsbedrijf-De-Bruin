/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B1D26",
        "navy-light": "#143b52",
        ink: "#101d2d",
        muted: "#667282",
        line: "#dfe6ee",
        soft: "#f2f5f9",
        orange: {
          500: "#FF6B35",
          600: "#e85a26"
        },
        teal: "#1c8a8a",
        amber: "#f6b23d"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(16, 29, 45, 0.14)",
        card: "0 14px 36px rgba(16, 29, 45, 0.08)",
        orange: "0 12px 26px rgba(255, 91, 36, 0.28)"
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};
