import React from "react";
import { View, Text, StyleSheet } from "react-native";

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
    backgroundColor: "green",
    paddingBottom: 10
  },
  text: { fontSize: 22, color: "white" }
});
