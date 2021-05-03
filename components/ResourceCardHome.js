import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Auth, API, graphqlOperation } from "aws-amplify";

import { updateClinic } from "../src/graphql/mutations";
import { getClinic } from "../src/graphql/queries";

import { shouldUseActivityState } from "react-native-screens";
import { Platform } from "react-native";
import { Button } from "native-base";

const styles = StyleSheet.create({
  container: {
    height: "35%",
    width: "80%",
    backgroundColor: "#99DDF9",
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "90%",
    backgroundColor: "#fff",
    borderRadius: 25,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowColor: "black",
  },
  title: {
    backgroundColor: "white",
    width: "80%",
    height: "25%",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  services: {
    backgroundColor: "white",
    width: "80%",
    height: "55%",
    borderRadius: 15,
    borderColor: "#4DBEE7",
    borderWidth: 2,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowColor: "black",
  },
  font: {
    fontSize: 20,
    flex: 1,
    paddingTop: 4
  },
  titleBox1: {
    flex: 3,
    paddingLeft: "5%",
  },
  likebutton: {},
});

const ResourceCardHome = (props) => {
  const [liked, setLiked] = useState(false);
  const [button, setButton] = useState(true);

  const handlePress = async () => {
    try {
      let user = (await Auth.currentUserInfo()).username;

      let likes = [];

      let likesAWS =
        (await API.graphql(graphqlOperation(getClinic, { id: props.item.id })))
          .data.getClinic.likes || [];

      if (liked) {
        // Rmove from liked list
        likes = likesAWS.filter((item) => {
          return item !== user;
        });
      } else {
        // Add to liked list
        let likedAWS = likesAWS.reduce((prev, cur) => {
          return cur == user || prev;
        }, false);

        likes = likesAWS;

        if (!likedAWS) {
          likes.push(user);
        }
      }

      API.graphql(
        graphqlOperation(updateClinic, {
          input: {
            id: props.item.id,
            likes,
          },
        })
      );
      setLiked(!liked);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        let user = (await Auth.currentUserInfo()).username;
        let likedAWS = props.item.likes.reduce((prev, cur) => {
          return cur == user || prev;
        }, false);

        setLiked(likedAWS);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View className="card-wrapper" style={styles.wrapper}>
        <View className="header-section" style={styles.title}>
          <View className="block1" style={styles.titleBox1}>
            <Text style={styles.font} numberOfLines={1}>{props.item.name}</Text>
            <Text>{props.item.rating}</Text>
          </View>
          <View className="block2">
            <TouchableOpacity onPress={handlePress}>
              <Image
                source={
                  liked
                    ? require("../assets/images/baseline_favorite_black_18pt_2x.png")
                    : require("../assets/images/baseline_favorite_border_black_18pt_2x.png")
                }
                style={styles.likebutton}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          className="description-of-services-section"
          style={styles.services}
        >
          <Text numberOfLines={4} style={{ padding: 5, flex: 1 }}>{props.item.description}</Text>
        </View>
        <TouchableOpacity  style={{ padding: 5 }}>
          <Text>Show More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResourceCardHome;
