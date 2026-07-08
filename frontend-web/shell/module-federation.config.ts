export const mfConfig = {
  name: "shell",
  
remotes: {
    dashboard: "dashboard@http://localhost:3001/mf-manifest.json",
    pessoa: "pessoa@http://localhost:3002/mf-manifest.json",
    vendedor: "vendedor@http://localhost:3003/mf-manifest.json",
    visita: "visita@http://localhost:3004/mf-manifest.json",
    expositor: "expositor@http://localhost:3005/mf-manifest.json",
    config: "config@http://localhost:3006/mf-manifest.json",
  },
  exposes: {},
  
shared: {
    react: {
      singleton: true,
    },
    "react-dom": {
      singleton: true,
    },
    "react-router-dom": {
      singleton: true,
    },
  },
};
