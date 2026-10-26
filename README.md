# star-wars-app

A Star Wars app built with React Native (0.62), MobX and UI Kitten. It lists the Star Wars films and shows each film's details and characters, using the public API at `https://star-wars-api-unifacef.herokuapp.com` (configured in `src/config.ts`).

## Requirements

- Node.js and Yarn (the repository includes `yarn.lock`)
- React Native development environment for Android or iOS ([setup guide](https://reactnative.dev/docs/environment-setup))

## Setup

```sh
yarn install
```

## Running

```sh
yarn start            # Metro bundler
yarn android          # run on an Android device or emulator
yarn ios              # run on an iOS simulator (macOS only)
```

## Tests

```sh
yarn test
```

Jest runs the store tests in `src/stores/__tests__/` and the app render test in `__tests__/`. The API layer is mocked in both, so no network access is needed.

## Project layout

- `App.tsx`, `index.tsx`: app entry point
- `src/routes/`: stack navigation (Home and Film screens)
- `src/containers/`: screens (`home`, `film`)
- `src/stores/`: MobX store holding films, the selected film, loading and error state
- `src/apis/`: Axios calls to the Star Wars API
- `src/interface/`: TypeScript types for films and characters
