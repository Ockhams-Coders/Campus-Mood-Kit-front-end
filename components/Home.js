import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { listClinics } from "../src/graphql/queries";

import ResourceCardHome from "./ResourceCardHome.js";

import { API, graphqlOperation } from "aws-amplify";
import Navbar from './Navbar';

const styles = StyleSheet.create({
  center: {

    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#99DDF9",
    width: "100%",
    maxHeight: 600,
    paddingTop: 40
  },
  centerScroll: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "#99DDF9",
    width: "100%",
    height: "260%",
    flexDirection: "column",
    alignItems: "flex-start",

    
  },
});
var stopgap = {}
stopgap["name"] = "Title"
const Home = () => {
  const [clinics, setClinics] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const data = await API.graphql(graphqlOperation(listClinics));
        setClinics(data.data.listClinics.items);
      } catch (err) {
        console.log("Home error");
        console.log(err);
      }
    })();
  }, []);

  return (
  <ScrollView style={{ backgroundColor:"#99DDF9"}} showsHorizontalScrollIndicator={true} bounces={true}>

      <View style={{zIndex: 2, elevation: 2, position: "absolute" }}>
      <Navbar screen="Home"/>
      </View>
      <View style={{height:60, width:"100%"}}>

      </View>
    <ScrollView contentContainerStyle={styles.centerScroll} >
      
      
  
      <View style={styles.center}>
        {clinics.map((item, idx) => {
          return <ResourceCardHome key={idx} item={item}></ResourceCardHome>;
        })}
      </View>
      
    </ScrollView>
  </ScrollView>
  );
};

export default Home;
