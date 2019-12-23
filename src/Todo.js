import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const Todo = ({ todo, onLongPressed }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onLongPress={onLongPressed.bind(null, todo.id)}
    >
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 5
  }
});
