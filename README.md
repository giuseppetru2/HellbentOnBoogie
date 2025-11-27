# Hellbent on Boogie - Official Movie Site

## Setup Instructions

Since Node.js/NPM was not detected in the environment during setup, you will need to install dependencies manually.

1.  **Install Dependencies**:
    Open a terminal in this directory and run:
    ```bash
    npm install
    ```

2.  **Asset Setup**:
    The code is configured to look for images in `/assests/`.
    **IMPORTANT**: For Astro to serve these files, you must move your `assests` folder INTO the `public` folder.
    
    - Ensure you have a folder structure like: `public/assests/`.
    - If your `assests` folder is currently in the root (`MovieWebsite/assests`), please **move it inside** the `public` folder (`MovieWebsite/public/assests`).
    
    *Note: If you keep `assests` in the root, the images will NOT load because the web server cannot access files outside the `public` directory.*

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open your browser to `http://localhost:4321`.

4.  **Build for Production**:
    ```bash
    npm run build
    ```

## Project Structure

- `src/pages/index.astro`: Main landing page.
- `src/layouts/Layout.astro`: Global layout and head tags.
- `src/components/`: UI components (Hero, Gallery, etc.).
- `astro.config.mjs`: Astro configuration.
- `tailwind.config.mjs`: Tailwind CSS configuration.
