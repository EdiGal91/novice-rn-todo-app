import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Todos } from "../components/Todos";
import { AddTodo } from "../components/AddTodo";
export const MainScreen = ({ addTodo, todos, onLongPress, onPress }) => {
  const content = todos.length ? (
    <Todos todos={todos} onLongPress={onLongPress} onPress={onPress} />
  ) : (
    <View style={styles.wrapImage}>
      <Image
        style={styles.image}
        source={require("../../assets/no-items.png")}
      />
    </View>
  );
  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapImage: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height: 300
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  }
});
