# Template for ExpressJS Projects with TypeScript 🚀

This repository gives you a simple but better folder structure to use ExpressJS with Typescript.

## Getting Started 💻

1. **Installation:**
   ```bash
   npm install
2. **Transpile TypeScript:**

    ```bash
    npm run build
3. **Run the App:** (Please open a new terminal.)
    ```bash
    npm run start
## Folder Structure 📂

- **/src:**
  - `server.ts`: Entry point of your ExpressJS application.
- **/src/routes:**
  - `sampleRoute.ts`: Example route for you to build upon.
- **/src/models:**
  - `sampleModel.ts`: Sample data model.
- **/src/config:**
  - `db.ts`: Database configuration.
  - `config.ts`: General configuration settings.
  - `index.ts`: Centralized configuration export.

- **/src/controllers:**
  - `sampleController.ts`: Example controller for handling business logic.
  - `index.ts`: Centralized controller export.
- **/:**
  - `package.json`: Project dependencies and scripts.
  - `.gitignore`: Ignored files and directories for version control.
  - `tsconfig.json`: TypeScript configuration.
  - `vercel.json`: Configuration for Vercel deployment.
  - `.env`: Environment variables. (You can update those.)

## Deployment with Vercel 🌐

This project is Vercel-ready! Just push your changes, and Vercel will automatically deploy your app.

Feel free to customize and extend this structure to suit your project needs. Happy coding! 👩‍💻👨‍💻