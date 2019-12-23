import React, { useState } from "react";
import { StyleSheet, View, Alert, ToastAndroid } from "react-native";
import { Navbar } from "./src/Navbar";
import { AddTodo } from "./src/AddTodo";
import { Todos } from "./src/Todos";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Buy Milk" },
    { id: 2, title: "Buy Bread" },
    { id: 3, title: "Buy cigarettes" },
    { id: 4, title: "Buy Milk" },
    { id: 5, title: "Buy Bread" },
    { id: 6, title: "Buy cigarettes" },
    { id: 7, title: "Buy Milk" },
    { id: 8, title: "Buy Bread" },
    { id: 9, title: "Buy cigarettes" },
    { id: 10, title: "Buy Milk" },
    { id: 11, title: "Buy Bread" },
    { id: 12, title: "Buy cigarettes" }
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
    console.log(todoId);
    const { title } = todos.find(({ id }) => id === todoId);
    setTodos(prevTodos => prevTodos.filter(({ id }) => id !== todoId));
    ToastAndroid.show(`"${title}" was deleted!`, ToastAndroid.LONG);
  };

  return (
    <View>
      <Navbar title="Todo App"></Navbar>
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <Todos
          style={styles.todos}
          todos={todos}
          onLongPressed={removeTodo}
        ></Todos>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
  todos: {
    paddingBottom: 50
  }
});
