import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider, useDispatch } from "react-redux";
import store, { RootState } from "./src/redux/store";
import Albums from "./src/features/albums/Albums";

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export function App() {
  return (
    <View style={styles.container}>
      <Albums />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
