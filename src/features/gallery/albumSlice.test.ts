import { albumsReducer, initialState } from "./albumsSlice";

describe("test Subscribe Reducer", () => {
  it("should return the initial state", () => {
    expect(albumsReducer(undefined, { type: "" })).toEqual(initialState);
  });
});
