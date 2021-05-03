import { Auth, API, graphqlOperation } from "aws-amplify";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { listClinics } from "../src/graphql/queries";

import ResourceCardSaved from "./ResourceCardSaved";
import Navbar from './Navbar';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#F7C78E",
    width: "100%",
    maxHeight: 600,
    paddingTop: 40
  },
  centerScroll: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "#F7C78E",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "flex-start",

  },
});

const Saved = () => {
  const [clinics, setClinics] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setUser((await Auth.currentUserInfo()).username);
      } catch (err) {
        console.log("Saved err 1");
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const data = await API.graphql(graphqlOperation(listClinics));
        setClinics(data.data.listClinics.items);
      } catch (err) {
        console.log("Saved err 2");
        console.log(err);
      }
    })();
  }, []);

  return (
    <View style={{backgroundColor:"#F7C78E"}} showsHorizontalScrollIndicator={true} bounces={true}>

      <View style={{zIndex: 2, elevation: 2, position: "absolute" }}>
      <Navbar screen="Your Saved Resources"/>
      </View>
      <View style={{height:60, width:"100%", }}>

      </View>
    <ScrollView contentContainerStyle={styles.centerScroll} >
      <View style={styles.center}>
        {clinics
          .filter((item) => {
            return (item.likes || []).reduce((prev, curr) => {
              return prev || curr == user;
            }, false);
          })
          .map((item, idx) => {
            return (
              <ResourceCardSaved key={idx} item={item}></ResourceCardSaved>
            );
          })}
      </View>
    </ScrollView>
    </View>
  );
};

export default Saved;
