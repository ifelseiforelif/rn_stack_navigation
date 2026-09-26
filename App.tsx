import { NavigationContainer } from "@react-navigation/native";
import AppTabNavigator from "./src/navigation/AppTabNavigator";
import MenuDrawer from "./src/drawer/MenuDrawer";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <NavigationContainer>
      {/* <AppTabNavigator /> */}
      <MenuDrawer />
    </NavigationContainer>
  );
}
