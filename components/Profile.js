import React, { useState, useEffect } from "react";
import Chart from "./Chart";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { Auth, API, graphqlOperation } from "aws-amplify";
import {
  deleteResults,
  createDiagnosis,
  updateDiagnosis,
} from "../src/graphql/mutations";
import { getDiagnosis } from "../src/graphql/queries";

//align items and set background
const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#D7C1F6",
  },
  //style for profile image
  profile: {
    height: 100,
    width: 100,
    backgroundColor: "#fff",
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  //name text options
  nameText: {
    fontSize: 25,
    paddingBottom: "5%",
  },
});
//greeting user determination function
const Profile = ({ route }) => {
  const [user, setUser] = useState({ attributes: { name: "" } });
  const [disgnosis, setDisgnosis] = useState(null);

  const hourOfDay = new Date().getHours();
  const greeting =
    hourOfDay < 3
      ? "Night"
      : hourOfDay < 12
      ? "Morning"
      : hourOfDay < 17
      ? "Afternoon"
      : hourOfDay < 23
      ? "Evening"
      : "Night";

  const degree = [
    "No Traces",
    "Slight Traits",
    "Medium Traits",
    "Severe Traits",
  ];

  useEffect(() => {
    (async () => {
      try {
        let userSync = await Auth.currentUserInfo();
        setUser(userSync);

        let result = await API.graphql(
          graphqlOperation(getDiagnosis, { id: userSync.username })
        );

        if (result.data.getDiagnosis == null) {
          let input = {
            id: userSync.username,
            depression: Math.floor(degree.length * Math.pow(Math.random(), 2)),
            suicidal: Math.floor(degree.length * Math.pow(Math.random(), 2)),
            anxiety: Math.floor(degree.length * Math.pow(Math.random(), 2)),
            OCD: Math.floor(degree.length * Math.pow(Math.random(), 2)),
            eating: Math.floor(degree.length * Math.pow(Math.random(), 2)),
            ADHD: Math.floor(degree.length * Math.pow(Math.random(), 2)),
          };

          result = await API.graphql(
            graphqlOperation(createDiagnosis, { input })
          );
          setDisgnosis(result.data.createDiagnosis);
        } else {
          setDisgnosis(result.data.getDiagnosis);
        }
      } catch (err) {
        console.log("Profile err 1");
        console.log(err);
      }
    })();
  }, []);

  return (
    <SafeAreaView style={styles.center}>
      <View style={{ width: "80%", margin: 10, flexDirection: "row" }}>
        <Text style={{ flex: 1 }}>Edit Profile</Text>
        <TouchableOpacity style={{}}>
          <TouchableOpacity
            style={{}}
            onPress={async () => {
              try {
                await Auth.signOut();
                route.params.setLoggedIn(false);
              } catch (err) {
                console.log(err);
              }
            }}
          >
            <Text>Logout</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <View style={styles.profile}>
        <FontAwesome
          name="user-circle"
          color="#000"
          size={styles.profile.height * 0.9}
        />
      </View>

      <Text style={styles.nameText}>
        Good {greeting} {user.attributes.name}
      </Text>

      <TouchableOpacity
        style={{}}
        onPress={async () => {
          try {
            await Auth.signOut();
            route.params.setLoggedIn(false);
          } catch (err) {
            console.log("Profile err 2");
            console.log(err);
          }
        }}
      >
        <Text>Logout</Text>
      </TouchableOpacity>

      <View
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Chart />
        {
          //disgnosis && (
          //<View style={{ marginTop: 20 }}>
          //<Text>Depression: {degree[disgnosis.depression]}</Text>
          //<Text>Suicidal: {degree[disgnosis.suicidal]}</Text>
          //<Text>Anxiety: {degree[disgnosis.anxiety]}</Text>
          //<Text>OCD: {degree[disgnosis.OCD]}</Text>
          //<Text>Eating disorder: {degree[disgnosis.eating]}</Text>
          //<Text>ADHD: {degree[disgnosis.ADHD]}</Text>
          //</View>
        }
        <TouchableOpacity
          style={{}}
          onPress={async () => {
            try {
              let user = (await Auth.currentUserInfo()).username;

              await API.graphql(
                graphqlOperation(deleteResults, {
                  input: { id: user },
                })
              );

              route.params.setSetupAccount(true);
            } catch (err) {
              console.log("Profile err 3");
              console.log(err);
            }
          }}
        >
          <Text style={{ paddingBottom: "5%" }}>Retake Quiz</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{ alignSelf: "flex-start", paddingLeft: "10%", fontSize: 20 }}
      >
        Your Recommended Resources...
      </Text>
    </SafeAreaView>
  );
};

export default Profile;
