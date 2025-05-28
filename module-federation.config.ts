export const mfConfig = {
  name: "shared_ui_remote",
  filename: "remoteEntry.js",
  exposes: {
    "./Counter": "./src/components/Counter",
    "./Navbar": "./src/components/organisms/Navbar",
  },
  shared: ["react", "react-dom", "react-router-dom"],
};
