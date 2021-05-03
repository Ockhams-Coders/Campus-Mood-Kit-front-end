import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import { API, graphqlOperation } from "aws-amplify";
import { createReview } from "../src/graphql/mutations";
import { listClinics } from "../src/graphql/queries";

import Stars from "react-native-stars";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import ResourceCardReviews from "./ResourceCardReviews";
import Navbar from "./Navbar";
import { TextInput } from "react-native-gesture-handler";

const styles = StyleSheet.create({
   
  centerScroll: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "#ADF6D4",
    width: "100%",
    height: "140%",
    flexDirection: "column",
    alignItems: "flex-start",

    
  },
  center: {

    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#ADF6D4",
    width: "100%",
    maxHeight: 600,
  },
});

const Reviews = () => {
  const [selectedClinic, setSelectedClinic] = useState();
  const [clinics, setClinics] = useState([]);
  const [value, setValue] = useState(null);
  const [stars, setStars] = useState(null);

  (async () => {
    try {
      const data = await API.graphql(graphqlOperation(listClinics));
      setClinics(data.data.listClinics.items);
    } catch (err) {
      console.log(err);
    }
  })();

  return (
    <View style={{ backgroundColor:"#ADF6D4", display:"flex"}} showsHorizontalScrollIndicator={true} bounces={true}>
        <Navbar screen="Your Reviews" />
        <View style={{height:10, width:"100%"}}></View>
        
    <ScrollView
      contentContainerStyle={styles.centerScroll} showsHorizontalScrollIndicator={true} bounces={true}>
     
      <View
        style={styles.center}
      >
        <Picker
          selectedValue={selectedClinic}
          onValueChange={(itemValue, itemIndex) => setSelectedClinic(itemValue)}
          style={{
            width: "90%",
            marginTop: 50,
          }}
        >
          {clinics.map((clinic, idx) => {
            return (
              <Picker.Item key={idx} label={clinic.name} value={clinic.id} />
            );
          })}
        </Picker>
        <Stars
          default={3}
          count={5}
          half={false}
          starSize={50}
          update={setStars}
          fullStar={
            <Icon
              name={"star"}
              style={{
                color: "black",
                backgroundColor: "transparent",
                textShadowColor: "black",
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 2,
              }}
              size={40}
            />
          }
          emptyStar={
            <Icon
              name={"star-outline"}
              size={40}
              style={[
                {
                  color: "black",
                  backgroundColor: "transparent",
                  textShadowColor: "black",
                  textShadowOffset: { width: 1, height: 1 },
                  textShadowRadius: 2,
                },
              ]}
            />
          }
        />
        <TextInput
          onChangeText={setValue}
          value={value}
          placeholder="Review"
          keyboardType="default"
          multiline={true}
          style={{
            width: "90%",
            borderWidth: 1,
            borderColor: "#111",
            height: 300,
            padding: 20,
          }}
        />
        <TouchableOpacity
          style={{
            width: "60%",
            height: 50,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
            borderRadius: 20,
          }}
          onPress={async () => {
            let res = API.graphql(
              graphqlOperation(createReview, {
                input: {
                  rating: stars,
                  clinic: selectedClinic,
                  comment: value,
                },
              })
            );
          }}
        >
          <Text>Submit Review</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </View>
  );
};

export default Reviews;
