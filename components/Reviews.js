import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import ResourceCardReviews from './ResourceCardReviews'

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    paddingTop: "15%",
    backgroundColor: "#ADF6D4",
    width: "100%",
    height: "100%"
  },
});

const Reviews = () => {
  return (
    <View style={styles.center}>
      <ResourceCardReviews title="Reviews Test"/>
    </View>
  );
};

export default Reviews;
