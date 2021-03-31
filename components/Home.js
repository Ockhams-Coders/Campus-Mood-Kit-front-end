import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#99DDF9",
  },
});

const Home = () => {
  return (
    <View style={styles.center}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
