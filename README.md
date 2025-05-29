# 🌦️ Weather App Remote

> **Tags:** `react` `module-federation` `rspack` `tailwindcss` `zephyr` `create-mf-app` `design-system` `microfrontend`

This is the **remote module** for the Weather App. It provides reusable UI components (atoms, molecules, organisms) consumed by the host app via **Module Federation**.

---

## 🚀 Tech Stack

- **Framework:** React 19
- **Bundler:** Rspack
- **Transpiler:** Babel
- **Styling:** Tailwind CSS
- **Microfrontend Setup:** Module Federation with `create-mf-app`
- **Deployment:** Zephyr

---

## 📦 Components Exposed

````bash
📦 /src/components
├─ atoms/
├─ molecules/
└─ organisms/
├─ Navbar
├─ Footer
└─ ForecastDayCard
```bash

All components follow **Atomic Design** principles and are designed to be themeable, responsive, and accessible.

---

## 🗂️ Folder Structure
```bash
/src
├─ components/
├─ styles/
└─ utils/
````

---

## 🔗 Module Federation

```json
// remote webpack.config.js
exposes: {
   "./Navbar": "./src/components/organisms/Navbar",
    "./Paragraph": "./src/components/atoms/Paragraph",
    "./Title": "./src/components/atoms/Title",
    "./Container": "./src/components/molecules/Container",
    "./Input": "./src/components/atoms/Input",
    "./Button": "./src/components/atoms/Button",
    "./Card": "./src/components/molecules/Card",
    "./WeatherStore": "./src/core/stores/weatherStore.ts",
    "./WeatherSkeletonCard": "./src/components/atoms/WeatherSkeletonCard",
    "./ForecastStore": "./src/core/stores/forecastStore.ts",
    "./ForecastCard": "./src/components/molecules/ForecastCard",
    "./SomethingWentWrongCard":
      "./src/components/organisms/SomethingWentWrongCard",
    "./FallbackSearchCard": "./src/components/organisms/FallbackSearchCard",
    "./SearchHeader": "./src/components/organisms/SearchHeader",
    "./Footer": "./src/components/molecules/Footer",
}
```

## 📜 Scripts

```bash
pnpm install      # Install dependencies
pnpm start        # Start dev server
pnpm build        # Build for production
```

## 📃 License

MIT
