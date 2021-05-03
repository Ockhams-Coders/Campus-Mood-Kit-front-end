import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RadioButtonRN from "radio-buttons-react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { API, graphqlOperation, Auth } from "aws-amplify";
import { createResults, updateResults } from "../src/graphql/mutations";

import { getResults } from "../src/graphql/queries";

const SetupStack = createStackNavigator();

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

const QUESTIONS = [
  "Little interest or pleasure in doing things",
  "Feeling down, depressed, or hopeless",
  "Trouble falling/staying asleep, sleeping too much",
  "Feeling tired or having little energy",
  "Poor appetite or overeating",
  "Feeling bad about yourself or that you are a failure or have let yourself or your family down",
  "Trouble concentrating on things, such as reading the newspaper or watching television",
  "Trouble concentrating on things, such as reading the newspaper or watching television",
  "Moving or speaking so slowly that other people coulod have noticed. Or the opposite; being so fidgety or restless that you have beeen moving around a lot more than usual",
  "Thoughts that you would be better off dead or of hurting yourself in some way",
  "If you checked off any problem on this questionnairee so far, how difficult have these problems made it for you to do your work, take care of things at home, or get along with other people",
];

const Init = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>Hello</Text>
      <Text>To begin lets set up a basic profile.</Text>
      <Text>This profile will be confidential and only available to you.</Text>
      <Text>Press the arrow to continue</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Insurance");
        }}
      >
        <MaterialCommunityIcons
          name="arrow-right"
          size={50}
          style={{ marginRight: 10 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const Insurance = ({ navigation }) => {
  const [insured, setInsured] = useState(false);

  const data = [
    {
      label: "no",
    },
    {
      label: "yes",
    },
  ];

  const goToQuestions = async () => {
    try {
      let user = (await Auth.currentUserInfo()).username;
      let result = await API.graphql(
        graphqlOperation(getResults, { id: user })
      );

      if (result.data.getResults == null) {
        await API.graphql(
          graphqlOperation(createResults, { input: { id: user } })
        );
      }

      await API.graphql(
        graphqlOperation(updateResults, {
          input: { id: user, insurance: insured },
        })
      );

      navigation.navigate("Question0");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.center}>
      <Text>Do you have insurance? </Text>

      <RadioButtonRN
        data={data}
        selectedBtn={(e) => {
          setInsured(e.label === "yes");
        }}
        boxStyle={{ width: 150 }}
      />
      <TouchableOpacity onPress={() => goToQuestions()}>
        <MaterialCommunityIcons
          name="arrow-right"
          size={50}
          style={{ marginRight: 10 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const Question = ({ navigation, route }) => {
  const [val, setVal] = useState(null);

  const data = [
    {
      label: "Not at all",
      value: 0,
    },
    {
      label: "Several days",
      value: 1,
    },
    {
      label: "More than half the days",
      value: 2,
    },
    {
      label: "Nearly every day",
      value: 3,
    },
  ];

  const nextQuestions = async () => {
    try {
      let user = (await Auth.currentUserInfo()).username;
      let input = {
        id: user,
      };

      input[`q${route.params.idx}`] = val;

      await API.graphql(
        graphqlOperation(updateResults, {
          input,
        })
      );

      if (route.params.idx < 10)
        navigation.navigate(`Question${route.params.idx + 1}`);
      else route.params.setSetupAccount(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.center}>
      <Text>{route.params.question}</Text>
      <Text>{route.params.idx}</Text>
      <RadioButtonRN
        data={data}
        selectedBtn={(e) => {
          setVal(e.value);
        }}
        boxStyle={{ width: 150 }}
      />
      <TouchableOpacity onPress={() => nextQuestions()}>
        <MaterialCommunityIcons
          name="arrow-right"
          size={50}
          style={{ marginRight: 10 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const SetupAccount = (props) => {
  return (
    <NavigationContainer>
      <SetupStack.Navigator>
        <SetupStack.Screen
          name="Init"
          component={Init}
          options={{ headerShown: false, title: "Hello There!" }}
        />
        <SetupStack.Screen
          name="Insurance"
          component={Insurance}
          options={{ headerShown: false, title: "Insurance Info" }}
        />
        {QUESTIONS.map((question, idx) => {
          return (
            <SetupStack.Screen
              key={idx}
              name={`Question${idx}`}
              component={Question}
              options={{ headerShown: false, title: `Question${idx}` }}
              initialParams={{
                question,
                idx,
                setSetupAccount: props.setSetupAccount,
              }}
            />
          );
        })}
      </SetupStack.Navigator>
    </NavigationContainer>
  );
};

export default SetupAccount;