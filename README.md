## Setup

Run with

```
npm install
npm start
```

## Intro

This is an Angular 1 (AngularJS) application that contains Angular 2 (Angular) components.

The AngularJS application is stored in `src/ng1-app`.

The Angular application is divided into a few modules, `CoreComponentsModule`, `TodoListModule`, and `CompatibilityModule`. `CoreComponentsModule` defines a general feature module that contains components that can be shared across Angular and AngularJS applications. `TodoListModule` is a sample todo-list application, to give a more in-depth demonstration of component usage. `CompatibilityModule` imports the exported module components and downgrades them for use in AngularJS.

The bootstrapping process takes place in `main.ts` when the project is initially set up with `SystemJS`.
