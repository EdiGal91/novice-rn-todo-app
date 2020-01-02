import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { AppText } from "./pure/AppText";

export const Todo = ({ todo, onPress, onLongPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onLongPress={onLongPress.bind(null, todo.id)}
      onPress={onPress.bind(null, todo.id)}
    >
      <View style={styles.todo}>
        <AppText>{todo.title}</AppText>
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
