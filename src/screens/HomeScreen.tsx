import { Text, View, Button } from "react-native";

import { RootStackParamList } from "../navigation/AppNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
type Props = NativeStackScreenProps<RootStackParamList, "Home">;
export default function HomeScreen({ navigation }: Props) {
  return (
    <View>
      <Text>Головна</Text>
      <Button
        title="Відкрити профіль"
        onPress={() => {
          navigation.navigate("Profile");
        }}
      />
    </View>
  );
}
