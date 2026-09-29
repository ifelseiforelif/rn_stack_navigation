import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { BookListScreen } from "./src/books/BookListScreen";
import { AddBookScreen } from "./src/books/AddBookScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Список книг">
        <Drawer.Screen name="Список книг" component={BookListScreen} />
        <Drawer.Screen name="Добавить книгу" component={AddBookScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
