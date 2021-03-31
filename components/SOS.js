import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E0E1E8",
  },
  buttons: {
    backgroundColor: "#fff",
    width: "80%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 20,
  },
});

const SOS = () => {
  return (
    <View style={styles.center}>
      <Text style={{ marginBottom: 30, fontSize: 25 }}>What’s going on?</Text>
      <TouchableOpacity style={styles.buttons}>
        <Text style={{ ...styles.buttonText, color: "#E74D4D" }}>
          I’m in crisis
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons}>
        <Text style={styles.buttonText}>I am having a panic attack</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons}>
        <Text style={styles.buttonText}>I am having an anxiety attack</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons}>
        <Text style={styles.buttonText}>I am stressed out</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons}>
        <Text style={styles.buttonText}>I’m exhausted</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SOS;
