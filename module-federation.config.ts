export const mfConfig = {
  name: "shared_ui_remote",
  filename: "remoteEntry.js",
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
  },
  shared: {
    react: { singleton: true, eager: true },
    "react-dom": { singleton: true, eager: true },
    zustand: { singleton: true, eager: true },
    tailwindcss: { singleton: true, eager: true },
  },
};
