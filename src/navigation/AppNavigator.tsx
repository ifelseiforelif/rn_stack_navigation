import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import DetailsScreen from "../screens/DetailsScreen";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export type RootTabParamList = {
  Home: undefined;
  Profile: { userId: number };
  Details: undefined;
};
const Tab = createBottomTabNavigator<RootTabParamList>();

export default function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/home.png")}
              style={{
                width: 24,
                height: 24,
                opacity: focused ? 1 : 0.5,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/details.png")}
              style={{
                width: 24,
                height: 24,
                opacity: focused ? 1 : 0.5,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        listeners={() => ({
          tabPress: () => {
            console.log(`Clicked ProfileTab`);
          },
        })}
      />
    </Tab.Navigator>
  );
}
