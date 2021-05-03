import { Auth, API, graphqlOperation } from "aws-amplify";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { listClinics } from "../src/graphql/queries";

import ResourceCardSaved from "./ResourceCardSaved";

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    paddingTop: "15%",
    backgroundColor: "#F7C78E",
    width: "100%",
    maxHeight: 600,
  },
  centerScroll: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: "15%",
    backgroundColor: "#F7C78E",
    width: "100%",
    height: "100%",
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
        console.log(err);
      }
    })();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.centerScroll} bounces={true}>
      <View style={styles.center}>
        {clinics
          .filter((item) => {
            return (item.likes || []).reduce((prev, curr) => {
              return prev || curr == user;
            }, false);
          })
          .map((item, idx) => {
            return <ResourceCardSaved key={idx} item={item}></ResourceCardSaved>;
          })}
      </View>
    </ScrollView>
  );
};

export default Saved;
