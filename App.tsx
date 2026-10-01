import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { BookListScreen } from "./src/books/BookListScreen";
import { AddBookScreen } from "./src/books/AddBookScreen";
import * as SQLite from "expo-sqlite";
import { useEffect } from "react";

const Drawer = createDrawerNavigator();

let db: SQLite.SQLiteDatabase | null = null;
export default function App() {
  const createTable = async () => {
    if (!db) return;
    const table = "books";
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS ${table} (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        author TEXT NOT NULL
      );
    `);
    console.log(`Таблиця ${table} створена`);
  };

  // Підключаємось до БД асінхронно
  const openDatabase = async () => {
    try {
      db = await SQLite.openDatabaseAsync("library.db");
      console.log("База даних відкрита");
      createTable();
    } catch (err) {
      console.log("Помилка при відкритті бази даних", err);
    }
  };

  useEffect(() => {
    openDatabase();
  }, []);
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Список книг">
        <Drawer.Screen name="Список книг" component={BookListScreen} />
        <Drawer.Screen name="Добавить книгу" component={AddBookScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
