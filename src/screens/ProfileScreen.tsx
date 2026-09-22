import { Text, View, Button } from "react-native";
import { RootStackParamList } from "../navigation/AppNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
type Props = NativeStackScreenProps<RootStackParamList, "Profile">;
export default function ProfileScreen({ navigation }: Props) {
  return (
    <View>
      <Text>Профіль</Text>
      <Button
        title="Відкрити деталі"
        onPress={() => {
          navigation.navigate("Details", { username: "Alex" });
        }}
      />
    </View>
  );
}
