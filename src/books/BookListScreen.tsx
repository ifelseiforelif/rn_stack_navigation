import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { IBook } from "../interfaces/IBook";
import { styles } from "../styles/book.styles";

export const BookListScreen = () => {
  const [books, setBooks] = useState<Array<IBook>>([]);

  const loadBooks = async () => {
    const storedBooks = await AsyncStorage.getItem("books");
    if (storedBooks) setBooks(JSON.parse(storedBooks));
  };

  useFocusEffect(
    useCallback(() => {
      loadBooks();
    }, []),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Список книг</Text>
      <FlatList
        data={books}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.bookItem}>
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text style={styles.bookAuthor}>Автор: {item.author}</Text>
          </View>
        )}
      />
    </View>
  );
};
