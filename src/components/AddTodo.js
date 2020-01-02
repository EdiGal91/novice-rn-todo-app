import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Text, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { THEME } from "../theme";

export const AddTodo = ({ onSubmit }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const taskTitleInputHandler = text => {
    setTaskTitle(() => text);
  };

  const pressHandler = event => {
    if (!taskTitle.length) {
      return Alert.alert("Error", "You cannot add empty task");
    }
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

      <AntDesign.Button name="pluscircleo" onPress={pressHandler}>
        Add
      </AntDesign.Button>
      {/* <Button
      /> */}
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
    width: "60%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: THEME.COLORS.MAIN_COLOR,
    padding: 10,
    marginBottom: 10
  }
});
