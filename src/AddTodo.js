import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Text } from "react-native";

export const AddTodo = ({ onSubmit }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const taskTitleInputHandler = text => {
    setTaskTitle(() => text);
  };

  const pressHandler = event => {
    onSubmit(taskTitle);
    setTaskTitle(() => "");
  };

  return (
    <View style={styles.block}>
      <TextInput
        value={taskTitle}
        onChangeText={taskTitleInputHandler}
        style={styles.input}
        placeholder="What you need to do?"
        autoCapitalize="sentences"
        autoCompleteType="off"
      />
      <Button
        disabled={taskTitle.length < 1}
        onPress={pressHandler}
        style={styles.button}
        title="Add"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    width: "70%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "blue",
    padding: 10
  },
  button: {}
});
