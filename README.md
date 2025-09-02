# Karl Chvojka's Portfolio [1.0.0]

Karl Chvojka's portfolio website: A basic SPA to display projects and websites and etc.

## Requirements

This is a NextJS bootstrapped SPA website using the current latest version of NextJS.

At the time, the current packages are (as of 2025-08-04):

    - Next: 15.4.5 (Current Latest)
    - React: 19.0.0
    - TypeScript: 5
    - Eslint: 9

## Getting Started

First, run the development server:

    ```bash
        npm run dev
        # or
        yarn dev
        # or
        pnpm dev
        # or
        bun dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project Structure

.                               # Root folder - Project Config  
├── public                      # public folder - Files for public access  
└── src                         # src - Main app folder  
    ├── app                     # app - Contains App Global components  
    |   ├── resume              # resume - Resume Page component  
    ├── components              # components - Components to be accessed across the app  
    |   ├── elements            # elements - Components referenced in other components/pages  
    |   |   ├── accordion       # accordion - Skill Accordion Comonent  
    |   |   ├── proj-card       # proj-card - Project Card Component  
    |   |   └── sec-head        # sec-head - Section Head Component  
    |   ├── features            # features - Components refrenced from multiple components  
    |   |   └── hero-image      # hero-image - Hero Image component for the Homepage  
    |   ├── layout              # layout - Components used for page and section layout  
    |   |   ├── header          # header - Header Component  
    |   |   ├── projects        # projects - Project Section Component  
    |   |   └── skills          # skills - Skills Section Component  
    |   └── ui                  # ul - Components used across the app (buttons etc)  
    ├── data                    # data - Static Data  
    ├── lib                     # lib - Components for external and state functionality  
    └── styles                  # styles - Global CSS styles  
        └── themes              # themes - Styles used to effect entire app as a theme (Light, Dark etc)  

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
