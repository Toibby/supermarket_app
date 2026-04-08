// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: ["./src/**/*.{ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         brand: {
//           50: "#f0fdf4",
//           100: "#dcfce7",
//           500: "#22c55e",
//           600: "#16a34a",
//           700: "#15803d",
//           950: "#052e16"
//         }
//       },
//       boxShadow: {
//         soft: "0 10px 40px rgba(2, 6, 23, 0.08)"
//       }
//     }
//   },
//   plugins: []
// };

// export default config;


import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eefdf3",
          100: "#d7f8e3",
          200: "#b2f1cb",
          300: "#7fe5aa",
          400: "#47d47f",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d"
        },
        accent: {
          yellow: "#facc15",
          orange: "#fb923c",
          red: "#f87171",
          blue: "#38bdf8",
          purple: "#a78bfa",
          pink: "#f472b6"
        }
      },
      boxShadow: {
        soft: "0 10px 40px rgba(2, 6, 23, 0.08)",
        glow: "0 12px 30px rgba(34, 197, 94, 0.20)"
      },
      backgroundImage: {
        "hero-mesh":
          "radial-gradient(circle at top left, rgba(250,204,21,0.25), transparent 25%), radial-gradient(circle at top right, rgba(56,189,248,0.18), transparent 22%), radial-gradient(circle at bottom left, rgba(244,114,182,0.16), transparent 25%), linear-gradient(135deg, #f0fdf4 0%, #ffffff 45%, #eff6ff 100%)"
      }
    }
  },
  plugins: []
};

export default config;