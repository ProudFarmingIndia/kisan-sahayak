import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function AppHeader({ title = "Kisan Sahayak" }) {
  return (
    <View style={styles.header}>
      <View style={styles.logo}>
        <Text style={styles.icon}>🌾</Text>
        <Text style={styles.title}>{title}</Text>
      </View>

      <TouchableOpacity style={styles.langButton}>
        <Text style={styles.lang}>हिन्दी</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#f1f5eb",
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    fontSize: 26,
    marginRight: 8,
  },

  title: {
    fontSize: 22,
    fontWeight: "900",
    color: "#0d631b",
  },

  langButton: {
    backgroundColor: "#e5eadf",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 999,
  },

  lang: {
    color: "#0d631b",
    fontWeight: "700",
    fontSize: 14,
  },
});