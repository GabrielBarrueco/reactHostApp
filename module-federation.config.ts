export const mfConfig = {
  name: "react_host",
  fileName: "remoteEntry.js",
  exposes: {},
  remotes: {
    "react_remote": "remote@http://localhost:8081/remoteEntry.js",
  },
  shared: ["react", "react-dom"],
};
