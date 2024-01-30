import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import NftDetails from "../screens/NftDetails";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="NFTDetails" component={NftDetails} />
    </Stack.Navigator>
  );
}
