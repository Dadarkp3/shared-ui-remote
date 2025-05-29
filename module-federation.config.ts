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
  },
  shared: ["react", "react-dom"],
};
