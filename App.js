import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import CounterFeature from "./CounterFeature";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <CounterFeature />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
