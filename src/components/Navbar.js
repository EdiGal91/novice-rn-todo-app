import React from "react";
import { View, StyleSheet } from "react-native";
import { THEME } from "../theme";
import { AppTextBold } from "./pure/AppTextBold";
export const Navbar = ({ title }) => (
  <View style={styles.navbar}>
    <AppTextBold style={styles.text}>{title}</AppTextBold>
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
