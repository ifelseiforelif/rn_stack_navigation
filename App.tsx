import { NavigationContainer } from "@react-navigation/native";
import AppTabNavigator from "./src/navigation/AppTabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AppTabNavigator />
    </NavigationContainer>
  );
}
