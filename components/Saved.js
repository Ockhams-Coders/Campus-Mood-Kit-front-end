import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7C78E",
  },
});

const Saved = () => {
  return (
    <View style={styles.center}>
      <Text>Saved</Text>
    </View>
  );
};

export default Saved;
