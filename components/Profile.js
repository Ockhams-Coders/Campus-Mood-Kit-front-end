import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { Auth } from "aws-amplify";
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
  },
});
//greeting user determination function
const Profile = ({ route }) => {
  const [user, setUser] = useState({ attributes: { name: "" } });

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

  useEffect(() => {
    (async () => {
      try {
        setUser(await Auth.currentUserInfo());
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <SafeAreaView style={styles.center}>
      <View style={{ width: "80%", margin: 10 }}>
        <TouchableOpacity style={{ alignSelf: "flex-end" }}>
          <Text>Edit Profile</Text>
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
            console.log(err);
          }
        }}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Profile;
