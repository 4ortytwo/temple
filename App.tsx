import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { Routes } from "./src/Routes";

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
