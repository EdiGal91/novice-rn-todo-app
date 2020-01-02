import React, { useState } from "react";
import { StyleSheet, View, Alert, ToastAndroid } from "react-native";
import { Navbar } from "./src/components/Navbar";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";

export default function App() {
  const [todoId, setTodoId] = useState(null);

  const [todos, setTodos] = useState([
    { id: 1, title: "Buy Milk" },
    { id: 2, title: "Buy Bread" },
    { id: 4, title: "Buy cheese" },
    { id: 5, title: "Buy butter" },
    { id: 6, title: "Buy chocolade" },
    { id: 7, title: "Buy eggs" },
    { id: 8, title: "Buy flour" },
    { id: 9, title: "Buy honey" },
    { id: 10, title: "Buy olives" },
    { id: 11, title: "Buy sugar" }
  ]);

  const addTodo = title => {
    if (!title) {
      Alert.alert("You need to whire something");
      return;
    }
    const id = Date.now().toString();
    setTodos(prevTodos => [
      ...prevTodos,
      {
        id,
        title
      }
    ]);
  };

  const removeTodo = todoId => {
    const todo = todos.find(({ id }) => id === todoId);

    Alert.alert(
      "Deleting Todo",
      `Are you sure you want to delete "${todo.title}"?`,
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: `delete "${todo.title}"`,
          onPress: () => {
            setTodoId(null);
            setTodos(prevTodos => prevTodos.filter(({ id }) => id !== todoId));
            notifyClosed(todo.title);
          }
        }
      ],
      { cancelable: false }
    );
  };

  const notifyClosed = title => {
    ToastAndroid.show(`"${title}" was deleted!`, ToastAndroid.LONG);
  };

  let content = todoId ? (
    <TodoScreen
      todo={todos.find(({ id }) => id === todoId)}
      goBack={() => setTodoId(null)}
      removeTodo={removeTodo}
    />
  ) : (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      onLongPress={removeTodo}
      onPress={todoId => setTodoId(todoId)}
    />
  );

  return (
    <View>
      <Navbar title="Todo App"></Navbar>
      <View style={styles.container}>{content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
