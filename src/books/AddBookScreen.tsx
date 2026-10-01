import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Alert, View, Text, TextInput, Button } from "react-native";
import { styles } from "../styles/book.styles";
import { DbSqliteService } from "../utills/DbSqliteService";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

export const AddBookScreen = ({ navigation }: any) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const saveBook = async () => {
    if (!title || !author) {
      Alert.alert("Ошибка", "Введите название и автора книги");
      return;
    }

    try {
      // Сохраняем книгу в SQLite
      const dbService = await DbSqliteService.getInstance();
      await dbService.execute(
        "INSERT INTO books (id, title, author) VALUES (?, ?, ?)",
        [uuidv4(), title, author],
      );

      const storedBooks = await AsyncStorage.getItem("books");

      const books = storedBooks ? JSON.parse(storedBooks) : [];

      const newBook = { title, author };
      books.push(newBook);

      await AsyncStorage.setItem("books", JSON.stringify(books));

      setTitle("");
      setAuthor("");
      Alert.alert("Успех", "Книга добавлена!");
      navigation.navigate("Список книг");
    } catch (error) {
      console.error("Ошибка при сохранении книги", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Добавить книгу</Text>
      <TextInput
        style={styles.input}
        placeholder="Название книги"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Автор"
        value={author}
        onChangeText={setAuthor}
      />
      <Button title="Сохранить" onPress={saveBook} />
    </View>
  );
};
