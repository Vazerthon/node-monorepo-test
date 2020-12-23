# Demo of Emotion used to build a component library in a Node 15 monorepo

## Error Explanation

This repo minimally reproduces a problem where the Emotion theme is not available to components in the React tree when the ThemeProvider is imported from a library project.

The repo is comprised of

- A top level project
- A common UI library at `common/ui`
- A CRA app at `apps/simple`

Using Node 15 workspaces the UI library is imported into the CRA app to allow components to be shared. This works for straightfoward components but does not work if components rely on the emotion theme context.

## To Run

- `cd common/ui`
- `npm install`
- `npm run build`

- `cd ../../` (top level)
- `npm install`

- `cd apps/simple`
- `npm install`
- `npm start`

## To see problem with emotion theme provider

- Open `apps/simple/src/index.js` and see that `ThemeProvider` is imported from `@demo/ui` (the package name for `common/ui`)
- Open `apps/simple/src/App.js` and uncomment either Line 10 or Line 22
  - L10 is the `useTheme` hook from emotion (imported from the common library)
  - L22 is a component from the common library that requires a theme context
