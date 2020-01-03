import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { THEME } from "../theme";
import { AppTextBold } from "./pure/AppTextBold";
export const Navbar = ({ title }) => (
  <View
    style={{
      ...styles.navbar,
      ...Platform.select({
        ios: styles.iosNavbar,
        android: styles.androidNavbar
      })
    }}
  >
    <AppTextBold style={styles.text}>{title}</AppTextBold>
  </View>
);

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 10
  },
  androidNavbar: {
    backgroundColor: THEME.COLORS.MAIN_COLOR
  },
  iosNavbar: {
    borderBottomColor: THEME.COLORS.MAIN_COLOR,
    borderBottomWidth: 1
  },
  text: { fontSize: 22, color: THEME.COLORS.WHITE }
});
