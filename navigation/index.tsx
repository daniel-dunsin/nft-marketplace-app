import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { ReactNode } from "react";
import Splash from "../screens/Splash";
import StackNavigator from "./stack.navigation";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export default function NavigationProvider() {
  const [loaded] = useFonts({
    DMSans: require("../assets/fonts/DMSans.ttf"),
  });

  if (!loaded) {
    return <Splash />;
  }

  return (
    <NavigationContainer theme={theme}>
      <StackNavigator />
    </NavigationContainer>
  );
}
