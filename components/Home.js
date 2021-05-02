import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import ResourceCardHome from './ResourceCardHome.js';


const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    paddingTop: "15%",
    backgroundColor: "#99DDF9",
    width: "100%",
    height: "100%"
  },
});

const Home = () => {
  return (
    <View style={styles.center}>

      <ResourceCardHome title={"My Test"}></ResourceCardHome>

    </View>
  );
};

export default Home;
