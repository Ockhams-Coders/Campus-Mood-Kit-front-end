import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ADF6D4",
  },
});

const Reviews = () => {
  return (
    <View style={styles.center}>
      <Text>Reviews</Text>
    </View>
  );
};

export default Reviews;
