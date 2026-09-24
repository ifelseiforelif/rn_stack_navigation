import { Text, View, Button } from "react-native";
import { RootTabParamList } from "../navigation/AppNavigator";

export default function ProfileScreen() {
  return (
    <View>
      <Text>Профіль</Text>
      <Button
        title="Відкрити деталі"
        onPress={() => {
          //navigation.navigate("Details");
        }}
      />
    </View>
  );
}
