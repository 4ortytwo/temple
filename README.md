# temple

## Init

```console
yarn
```

## Usage

```console
expo start
```

## Highlights

- Redux Toolkit:

  - using it this way to target the variable directly without destructuring as advised by Redux team to prevent unnecessary re-renders

  ```javascript
  const gallery = useSelector((state: RootState) => state.gallery.gallery);
  ```
- Architecture: 
   - The project is following the feature-first idea of Ducks architecture: https://www.freecodecamp.org/news/scaling-your-redux-app-with-ducks-6115955638be/

## To improve:

- Test coverage
- Robust error handling
