/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
      extend: {
          "colors": {
              "on-tertiary-container": "#00354e",
              "surface-container-highest": "#e5e2e1",
              "surface-container-high": "#eae7e7",
              "surface-tint": "#835419",
              "tertiary-container": "#699fc5",
              "outline-variant": "#d5c3b4",
              "error-container": "#ffdad6",
              "surface-container-low": "#f6f3f2",
              "tertiary": "#296487",
              "on-surface": "#1c1b1b",
              "primary-fixed": "#ffddbb",
              "on-secondary-fixed": "#28180d",
              "on-primary-container": "#492a00",
              "on-primary-fixed": "#2b1700",
              "on-background": "#1c1b1b",
              "surface-container": "#f0eded",
              "on-tertiary-fixed": "#001e2f",
              "on-tertiary": "#ffffff",
              "on-error": "#ffffff",
              "on-secondary": "#ffffff",
              "on-primary-fixed-variant": "#673d01",
              "tertiary-fixed": "#c8e6ff",
              "secondary-fixed": "#fbddca",
              "on-surface-variant": "#514539",
              "on-tertiary-fixed-variant": "#014c6e",
              "primary-container": "#c68e4e",
              "inverse-surface": "#313030",
              "tertiary-fixed-dim": "#97cdf5",
              "surface-container-lowest": "#ffffff",
              "secondary-fixed-dim": "#dec1af",
              "primary": "#835419",
              "outline": "#837567",
              "on-error-container": "#93000a",
              "on-secondary-container": "#755e50",
              "inverse-primary": "#f9ba76",
              "secondary": "#705a4c",
              "surface": "#fcf9f8",
              "background": "#fcf9f8",
              "on-primary": "#ffffff",
              "inverse-on-surface": "#f3f0ef",
              "on-secondary-fixed-variant": "#574335",
              "secondary-container": "#f8dac8",
              "surface-dim": "#dcd9d9",
              "surface-bright": "#fcf9f8",
              "error": "#ba1a1a",
              "primary-fixed-dim": "#f9ba76",
              "surface-variant": "#e5e2e1"
          },
          "borderRadius": {
              "DEFAULT": "0.25rem",
              "lg": "0.5rem",
              "xl": "0.75rem",
              "full": "9999px"
          },
          "spacing": {
              "stack-lg": "32px",
              "stack-sm": "8px",
              "section-gap": "120px",
              "gutter": "24px",
              "margin-edge": "64px",
              "container-max": "1280px",
              "stack-md": "16px"
          },
          "fontFamily": {
              "label-sm": ["Inter"],
              "headline-lg": ["Epilogue"],
              "body-md": ["Inter"],
              "body-lg": ["Inter"],
              "headline-md": ["Epilogue"],
              "headline-xl": ["Epilogue"]
          },
          "fontSize": {
              "label-sm": ["12px", { "lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "600" }],
              "headline-lg": ["32px", { "lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "500" }],
              "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
              "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
              "headline-md": ["24px", { "lineHeight": "1.3", "fontWeight": "500" }],
              "headline-xl": ["48px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "600" }]
          },
          "keyframes": {
              "marquee": {
                  "0%": { transform: "translateX(0%)" },
                  "100%": { transform: "translateX(-50%)" }
              }
          },
          "animation": {
              "marquee": "marquee 20s linear infinite"
          }
      }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
