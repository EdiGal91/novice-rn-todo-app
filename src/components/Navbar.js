import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { THEME } from "../theme";
export const Navbar = ({ title }) => (
  <View style={styles.navbar}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: THEME.COLORS.MAIN_COLOR,
    paddingBottom: 10
  },
  text: { fontSize: 22, color: THEME.COLORS.WHITE }
});
