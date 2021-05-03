import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Amplify, { Auth } from "aws-amplify";
import config from "./src/aws-exports";
Amplify.configure(config);

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const LoginStack = createStackNavigator();

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Main from "./components/Main";

let globalUser;

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
  textInput: {
    height: 30,
    borderBottomWidth: 2,
    borderBottomColor: "#fff",
    color: "#000",
    marginBottom: 20,
  },
  signupText: {
    fontSize: 25,
    width: "80%",
    marginBottom: 50,
  },
});

const SignIn = ({ navigation, route }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View
      style={{
        backgroundColor: "#56B666",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ ...styles.text, fontSize: 40, marginBottom: 130 }}>
        Campus Mood Kit
      </Text>
      <View style={{ width: "80%", marginBottom: 80 }}>
        <Text
          style={{
            ...styles.text,
            fontSize: 30,
            alignSelf: "flex-start",
            marginBottom: 20,
          }}
        >
          Login
        </Text>
        <TextInput
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          autoCompleteType="email"
          keyboardType="email-address"
          style={styles.textInput}
        ></TextInput>
        <TextInput
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          autoCompleteType="password"
          secureTextEntry={true}
          style={styles.textInput}
        ></TextInput>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Text style={{ ...styles.text, color: "#ccc" }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={async () => {
              console.log("Signing in", email, password);
              try {
                await Auth.signIn(email, password);
                route.params.setLoggedIn(true);
              } catch (err) {
                console.log("App err");
                console.log(err);
              }
              setLoggedIn(true);
            }}
          >
            <MaterialCommunityIcons
              name="login"
              size={30}
              style={{ marginRight: 10, color: "#fff" }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={{
          marginBottom: 50,
          backgroundColor: "#fff",
          padding: 15,
          borderRadius: 5,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          name="school"
          size={30}
          style={{ marginRight: 10 }}
        />
        <Text>Log in with your institution</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={{ ...styles.text, fontSize: 25 }}>Create new account</Text>
      </TouchableOpacity>
    </View>
  );
};

const SignUp = ({ navigation, route }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ADF6D4",
      }}
    >
      <Text style={{ ...styles.signupText }}>Hi There!</Text>
      <Text style={{ ...styles.signupText }}>
        To begin, let's set up a basic profile
      </Text>
      <Text style={{ ...styles.signupText }}>
        This profile will be confidential and only avaliable to you.
      </Text>
      <Text style={{ ...styles.signupText }}>Press the arrow to continue</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Create1")}>
        <MaterialCommunityIcons
          name="arrow-right"
          size={50}
          style={{ marginRight: 10 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const Create1 = ({ navigation, route }) => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const createAccount = async () => {
    if (password !== passwordVerify) return;

    try {
      await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
          name: first,
          family_name: last,
        },
      });

      globalUser = email;

      navigation.navigate("Create2");
    } catch (err) {
      console.log("App err 2");
      console.log({ err });
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ADF6D4",
      }}
    >
      <Text style={{ marginBottom: 50, fontSize: 20 }}>
        Tell us a little about yourself
      </Text>
      <View style={{ width: "80%", marginBottom: 100 }}>
        <TextInput
          onChangeText={setFirst}
          value={first}
          placeholder="First Name"
          autoCompleteType="name"
          style={styles.textInput}
        ></TextInput>
        <TextInput
          onChangeText={setLast}
          value={last}
          placeholder="Last Name"
          autoCompleteType="name"
          style={styles.textInput}
        ></TextInput>
        <TextInput
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          autoCompleteType="email"
          style={styles.textInput}
        ></TextInput>
        <TextInput
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          autoCompleteType="password"
          secureTextEntry={true}
          style={styles.textInput}
        ></TextInput>
        <TextInput
          onChangeText={setPasswordVerify}
          value={passwordVerify}
          placeholder="Repeat Password"
          autoCompleteType="password"
          secureTextEntry={true}
          style={styles.textInput}
        ></TextInput>
      </View>
      <TouchableOpacity
        style={{
          height: 40,
          width: "50%",
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 5,
        }}
        onPress={createAccount}
      >
        <Text>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const Create2 = ({ navigation, route }) => {
  const [code, setCode] = useState("");

  const verify = async () => {
    try {
      await Auth.confirmSignUp(globalUser, code);
      navigation.navigate("SignIn");
    } catch (err) {
      console.log("App err 3");
      console.log({ err });
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ADF6D4",
      }}
    >
      <Text style={{ marginBottom: 50, fontSize: 20 }}>
        Email verification code
      </Text>
      <TextInput
        style={{ ...styles.textInput, marginBottom: 100, width: "50%" }}
        onChangeText={setCode}
        value={code}
        placeholder="Confimation Code"
      ></TextInput>
      <TouchableOpacity onPress={verify}>
        <MaterialCommunityIcons
          name="arrow-right"
          size={50}
          style={{ marginRight: 10 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = async () => {
      return await Auth.currentAuthenticatedUser()
        .then(() => {
          setLoggedIn(true);
        })
        .catch(() => {
          setLoggedIn(false);
        });
    };
    checkLogin();
  }, []);

  if (!isLoggedIn) {
    return (
      <NavigationContainer>
        <LoginStack.Navigator>
          <LoginStack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false, title: "Sign In" }}
            initialParams={{ setLoggedIn }}
          />
          <LoginStack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              headerShown: true,
              title: "Sign Up",
              headerStyle: { backgroundColor: "#94F0C5" },
            }}
          />
          <LoginStack.Screen
            name="Create1"
            component={Create1}
            options={{
              headerShown: true,
              title: "Sign Up",
              headerStyle: { backgroundColor: "#94F0C5" },
            }}
          />
          <LoginStack.Screen
            name="Create2"
            component={Create2}
            options={{
              headerShown: true,
              title: "Sign Up",
              headerStyle: { backgroundColor: "#94F0C5" },
            }}
          />
        </LoginStack.Navigator>
      </NavigationContainer>
    );
  }

  return <Main setLoggedIn={setLoggedIn} />;
};

export default App;
