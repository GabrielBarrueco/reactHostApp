# react-host

This project is a micro front-end host built with **React**, **Rspack**, **TailwindCSS**, and **Module Federation** using **Zephyr Cloud**.  
It serves as the main application that dynamically loads remote modules, enabling scalable and modular front-end architectures.

> **Note:**  
> You must run this project locally before accessing the deployed URL. The remote modules need to be available on your local machine for integration with other applications.

---

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the project:**
   ```sh
   npm start
   ```
3. **Open your browser:**  
   Visit [http://localhost:8080](http://localhost:8080)

> **Important:**  
> Make sure this project is running locally before accessing the deployed URL that consumes remote modules.

---

## Scripts

- `npm start` — Start the development server at [http://localhost:8080](http://localhost:8080)
- `npm run build` — Build for production
- `npm run build:dev` — Build in development mode
- `npm run build:start` — Serve the build from the `dist` folder

## Module Federation

The configuration in [`module-federation.config.ts`](module-federation.config.ts) sets up this project as a host to consume remote modules:

```ts
// module-federation.config.ts
export const mfConfig = {
  name: "host",
  remotes: {
    react_remote: "react_remote@http://localhost:8081/remoteEntry.js",
  },
  shared: ["react", "react-dom"],
};

- **Host**: Loads remote modules at runtime.
- **Remotes**: Example remote (`react_remote`) must be running and accessible at the specified URL.
- **Shared**: Ensures React and ReactDOM are shared as singletons.

---

## Technologies Used

- [React](https://react.dev/) — UI library
- [Rspack](https://www.rspack.dev/) — Fast bundler
- [Module Federation Enhanced](https://module-federation.io/) — Micro front-end integration
- [TailwindCSS](https://tailwindcss.com/) — Utility-first CSS framework
- [Zephyr Cloud](https://zephyr.cloud/) — Remote dependency management

---

## Notes

- Ensure all remote modules are running and accessible before starting the host.
- Update the `remotes` field in `module-federation.config.ts` if remote URLs change.
- This setup enables seamless integration and sharing of components across multiple front-end applications.

---