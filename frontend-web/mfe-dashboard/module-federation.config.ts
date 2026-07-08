export const mfConfig = {
  name: "dashboard",
  exposes: {
    "./DashboardApp": "./src/App",
  },
  shared: {
    react: {
      singleton: true,
    },
    "react-dom": {
      singleton: true,
    },
  },
};
