import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { THEME } from "../theme";
import { AppCard } from "../components/pure/AppCard";

export const TodoScreen = ({ todo, goBack, removeTodo }) => {
  return (
    <View>
      <AppCard style={styles.card}>
        <Text style={styles.title}>{todo.title}</Text>
        <Button title="Edit"></Button>
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button color={THEME.COLORS.GRAY} onPress={goBack} title="Back" />
        </View>
        <View style={styles.button}>
          <Button
            color={THEME.COLORS.DANGER}
            onPress={() => removeTodo(todo.id)}
            title="Remove"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    width: "40%"
  },
  title: {
    fontSize: 20
  },
  card: { marginBottom: 20, padding: 15 }
});
