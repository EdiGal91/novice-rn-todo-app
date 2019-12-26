import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Todos } from "../components/Todos";
import { AddTodo } from "../components/AddTodo";
export const MainScreen = ({ addTodo, todos, onLongPress, onPress }) => {
  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      <Todos todos={todos} onLongPress={onLongPress} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({});
