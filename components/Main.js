import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import { API, graphqlOperation, Auth } from "aws-amplify";
import { getResults } from "../src/graphql/queries";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

const Tabs = createBottomTabNavigator();

import Home from "./Home";
import SetupAccount from "./SetupAccount";
import Reviews from "./Reviews";
import SOS from "./SOS";
import Saved from "./Saved";
import Profile from "./Profile";

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

const Main = ({ setLoggedIn }) => {
  console.log("Test", setLoggedIn);

  const [splashScreen, setSplashScreen] = useState(true);
  const [setupAccount, setSetupAccount] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        let user = (await Auth.currentUserInfo()).username;
        let result = await API.graphql(
          graphqlOperation(getResults, { id: user })
        );

        if (result.data.getResults) setSetupAccount(false);
        setSplashScreen(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  if (splashScreen) {
    return (
      <View style={styles.center}>
        <Text>Splash Screen</Text>
      </View>
    );
  }

  if (setupAccount) {
    return <SetupAccount setSetupAccount={setSetupAccount} />;
  }

  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="Reviews"
          component={Reviews}
          options={{
            tabBarLabel: "Reviews",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="create" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="SOS"
          component={SOS}
          options={{
            tabBarLabel: "SOS",
            tabBarIcon: ({ color, size }) => (
              <Feather name="alert-circle" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="Saved"
          component={Saved}
          options={{
            tabBarLabel: "Saved",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="bookmark"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome
                name="user-circle"
                color={color}
                size={size * 0.85}
              />
            ),
          }}
          initialParams={{ setLoggedIn, setSetupAccount }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default Main;
