import React from "react";
import { FlatList } from "react-native";
import { Todo } from "./Todo";

export const Todos = ({ todos, onLongPressed }) => {
  return (
    <FlatList
      keyExtractor={item => item.id.toString()}
      data={todos}
      renderItem={({ item }) => (
        <Todo todo={item} onLongPressed={onLongPressed} />
      )}
    />
  );
};
