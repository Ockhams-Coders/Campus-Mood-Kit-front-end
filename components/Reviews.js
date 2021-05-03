import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet , ScrollView} from "react-native";
import ResourceCardReviews from './ResourceCardReviews'
import Navbar from './Navbar'

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    paddingTop: "15%",
    backgroundColor: "#ADF6D4",
    width: "100%",
    height: "100%"
  },
  centerScroll: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "#ADF6D4",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    zIndex: 1, 
    elevation: 1,
    
  },
});

const Reviews = () => {
  return (
    <View style={{zIndex: 0, elevation: 0, backgroundColor:"#ADF6D4"}} showsHorizontalScrollIndicator={true}>

    <View style={{zIndex: 2, elevation: 2, position: "absolute" }}>
    <Navbar screen="Your Reviews"/>
    </View>
    <View style={{height:"10%", width:"100%", zIndex: 1, elevation: 1}}>

    </View>
  <ScrollView contentContainerStyle={styles.centerScroll} bounces={false}>
    
    

    
  </ScrollView>
</View>
  );
};

export default Reviews;
