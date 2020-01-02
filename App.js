import React, { useState } from "react";
import { StyleSheet, View, Alert, ToastAndroid } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { Navbar } from "./src/components/Navbar";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";

async function loadApp() {
  await Font.loadAsync({
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf")
  });
}

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([
    // { id: 1, title: "Buy Milk" },
    // { id: 2, title: "Buy Bread" },
    // { id: 3, title: "Buy sugar" }
  ]);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApp}
        onFinish={() => {
          setIsReady(true);
        }}
      />
    );
  }

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

  const editTitle = (todoId, title) => {
    setTodos(oldTodos => {
      const todo = oldTodos.find(todo => todo.id == todoId);
      todo.title = title;
      return oldTodos;
    });
  };

  let content = todoId ? (
    <TodoScreen
      todo={todos.find(({ id }) => id === todoId)}
      goBack={() => setTodoId(null)}
      removeTodo={removeTodo}
      editTitle={editTitle}
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
