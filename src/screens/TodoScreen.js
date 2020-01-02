import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
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
        <AppButton onPress={() => setModal(true)}>
          <FontAwesome name="edit" size={20} color="#fff" />
        </AppButton>
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <AppButton color={THEME.COLORS.GRAY} onPress={goBack}>
            <AntDesign name="back" size={20} />
          </AppButton>
        </View>
        <View style={styles.button}>
          <AppButton
            color={THEME.COLORS.DANGER}
            onPress={() => removeTodo(todo.id)}
          >
            <FontAwesome name="remove" size={20} color="#fff" />
          </AppButton>
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
