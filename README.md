# Consultant Management System Front-End

The Web Frontend for the consultant management system

## Project Code Libraries

-   Prettier (Code Style Formatter)
-   Eslint (Code Style Enforcer)
-   Framer-motion (React-based animation lib)
-   Formik (Form Validation)
-   Immer (Handling Immutable Data Structure)
-   Zustand (Global Store Manager)
-   Yup (schema builder for value parsing and validation)
-   React (UI Library)
-   Axios (Promise based HTTP client for the browser and node.js)
-   React-Query (Persistent [ Non-Transient - Backend Data ] State Management)

## Project Preamble

The offical package manager for this project is **yarn**.

## Project Setup

> Run these commands in order in which they appear below.

```bash

# clone this repo to local machine
# git clone (repo link here)

# install dependencies
yarn install

# run code linting
$ yarn lint

# build the project
$ yarn build

# start the project locally and load in a browser
$ yarn dev

```

## Project Folder Structure/Organization

-   `src/`: The bulk of business logic for CMS resides in this folder

    -   `src/components`: The logic for self-contained custom UI artifacts resides here
    -   `src/config/`: The bulk of the logic for app-wide configuration reside here
    -   `src/hooks/`: The shared logic for app-wide hooks and event-bus callbacks reside here
    -   `src/pages/`: The logic for all the pages of the application resides here
    -   `src/services/`: The shared logic for the validation of all HTTP request inputs and fulfilment of all async HTTP request reside here

    -   `src/libs/`: The logic for reusable helper routines and utilities reside here
    -   `src/assets/`: The static binary/text assets used in the UI of this app resides here
    -   `src/styles/`: The CSS rule/ruleset declarations for this app resides here

-   `public/`: The bulk of logic and JSON/CSS/JS/IMAGE static assets delivered to the front-end (web) reside here

## Project Tech Stack

-   AWS ( Cloud Hosting Service : **Production** )
-   next-js v12.1.0 ( React framework )

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
