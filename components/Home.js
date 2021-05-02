import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { listClinics } from "../src/graphql/queries";

import ResourceCardHome from "./ResourceCardHome.js";

import { API, graphqlOperation } from "aws-amplify";

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    paddingTop: "15%",
    backgroundColor: "#99DDF9",
    width: "100%",
    height: "100%",
  },
});

const Home = () => {
  const [clinics, setClinics] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await API.graphql(graphqlOperation(listClinics));
        setClinics(data.data.listClinics.items);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.center}>
      {clinics.map((item, idx) => {
        return <ResourceCardHome key={idx} item={item}></ResourceCardHome>;
        // return <Text key={idx}>{item.name}</Text>;
      })}
    </ScrollView>
  );
};

export default Home;
