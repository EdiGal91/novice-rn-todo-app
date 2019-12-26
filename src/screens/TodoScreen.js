import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export const TodoScreen = ({ todo, goBack }) => {
  return (
    <View>
      <Text>{todo.title}</Text>
      <Button onPress={goBack} title="Back" />
      <Button title="Remove" />
    </View>
  );
};

const styles = StyleSheet.create({});
