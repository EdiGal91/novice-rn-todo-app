import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import { THEME } from "../theme";
import { AppCard } from "../components/pure/AppCard";
import { EditModal } from "../components/EditModal";
import { AppTextBold } from "../components/pure/AppTextBold";
import { AppButton } from "../components/pure/AppButton";

export const TodoScreen = ({ todo, goBack, removeTodo, editTitle }) => {
  const [modal, setModal] = useState(false);

  return (
    <View>
      <EditModal
        value={todo.title}
        visible={modal}
        onCancel={() => setModal(false)}
        onEdit={title => {
          setModal(false);
          editTitle(todo.id, title);
        }}
      ></EditModal>
      <AppCard style={styles.card}>
        <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
        <Button title="Edit" onPress={() => setModal(true)}></Button>
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <AppButton color={THEME.COLORS.GRAY} onPress={goBack}>
            Back
          </AppButton>
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
