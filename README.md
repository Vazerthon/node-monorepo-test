# Demo of Emotion used to build a component library in a Node 15 monorepo

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
