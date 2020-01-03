import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import { Todos } from "../components/Todos";
import { AddTodo } from "../components/AddTodo";
import { THEME } from "../theme";
export const MainScreen = ({ addTodo, todos, onLongPress, onPress }) => {
  const [deviceWidth, setDeviceWidth] = useState(
    Dimensions.get("window").width - THEME.PADDING.HORIZONTAL * 2
  );

  useEffect(() => {
    const update = () => {
      const width =
        Dimensions.get("window").width - THEME.PADDING.HORIZONTAL * 2;
      setDeviceWidth(width);
    };
    Dimensions.addEventListener("change", update);

    return () => {
      Dimensions.removeEventListener("change", update);
    };
  });

  const content = todos.length ? (
    <View style={{ width: deviceWidth }}>
      <Todos todos={todos} onLongPress={onLongPress} onPress={onPress} />
    </View>
  ) : (
    <View style={styles.wrapImage}>
      <Image
        style={styles.image}
        source={require("../../assets/no-items.png")}
      />
    </View>
  );
  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapImage: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height: 300
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  }
});
