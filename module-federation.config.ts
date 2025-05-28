export const mfConfig = {
  name: "shared_ui_remote",
  filename: "remoteEntry.js",
  exposes: {
    "./Counter": "./src/components/Counter",
  },
  shared: ["react", "react-dom"],
};
