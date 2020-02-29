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

## To improve:

- Test coverage
- Robust error handling
