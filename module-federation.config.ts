export const mfConfig = {
  name: "react_host",
  filename: "remoteEntry.js",
  exposes: {},
  remotes: {
    "remote": "remote@http://localhost:8081/remoteEntry.js",
  },
  shared: ["react", "react-dom"],
};
