import React from "react";
import { FlatList } from "react-native";
import { Todo } from "./Todo";

export const Todos = ({ todos, onPress, onLongPress }) => {
  return (
    <FlatList
      keyExtractor={item => item.id.toString()}
      data={todos}
      renderItem={({ item }) => (
        <Todo todo={item} onLongPress={onLongPress} onPress={onPress} />
      )}
    />
  );
};
