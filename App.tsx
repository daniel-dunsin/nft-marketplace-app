import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NavigationProvider from "./navigation";

export default function App() {
  return (
    <>
      <NavigationProvider />
      <StatusBar style="auto" />
    </>
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
