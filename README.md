## Setup

Run with

```
npm install
npm start
```

## Intro

This is an Angular 1 (AngularJS) application that contains Angular 2 (Angular) components.

The AngularJS application is stored in `src/ng1-app`.

The Angular application is divided into two modules, `CoreComponentsModule` and `CompatibilityModule`. `CoreComponentsModule` defines the components that can be shared across Angular and AngularJS applications. `CompatibilityModule` imports these components and downgrades them for use in AngularJS.

The bootstrapping process takes place in `main.ts` when the project is initially set up with `SystemJS`.
