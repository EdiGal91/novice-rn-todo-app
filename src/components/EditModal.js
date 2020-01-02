import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Alert
} from "react-native";
import { THEME } from "../theme";
import { AppButton } from "./pure/AppButton";

export const EditModal = ({ visible, value, onCancel, onEdit }) => {
  const [title, setTitle] = useState(value);

  const saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert("Error", "The length of title must be above 3 characters");
    } else {
      onEdit(title);
    }
  };
  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View style={styles.wrap}>
        <TextInput value={title} onChangeText={setTitle} style={styles.input} />
        <View style={styles.buttons}>
          <AppButton color={THEME.COLORS.DANGER} onPress={onCancel}>
            Cancel
          </AppButton>
          <AppButton onPress={saveHandler}>Save</AppButton>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.COLORS.MAIN_COLOR,
    borderBottomWidth: 2,
    width: "80%"
  },
  buttons: {
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
