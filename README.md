## How to run

```bash
yarn setup
```
or
```bash
yarn
yarn pod install
```

## How to run tests

```bash
yarn test
```

## Structure

```
src/
  - api/ - api client layer. The mocked implementation is done with AsyncStorage
  - components/ - components that are divided (hopefully correctly) into atoms, molecules and organisms, following atomic desing principles
  - screens/ - components that combine other components into a ready-to-display view; at this level we make api calls.
  - navigation/ - components that implement native stack navigation
  - features/<feature_name> - folders containing api services for corresponding API endpoints, as well as hooks (for react-query) and types
  - theme/ - object that contains all the global styling constants
```

## Side-notes

If you've stumbled upon some `NOTE:`, `TODO:` or `FIXME:` comments, then don't worry please, as they've beed left there intentionally to show that, for example, this is known and considered to be fixed/improved in the future

I haven't implemented gesture handlers to close the modal, although I really wanted to. The reson is simply that surprisongly I've spent more time on this assignment than I expected trying to overengineer the mocks for api client, so I thought it's better to give it to review already.
