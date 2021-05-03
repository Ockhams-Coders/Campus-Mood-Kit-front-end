import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Auth, API, graphqlOperation } from "aws-amplify";

import { updateClinic } from "../src/graphql/mutations";
import { getClinic, listReviews } from "../src/graphql/queries";

import { shouldUseActivityState } from "react-native-screens";
import { Platform } from "react-native";
import { Button, Left } from "native-base";

const styles = StyleSheet.create({
  container: {
    height: 225,
    width: "80%",
    backgroundColor: "#99DDF9",
    zIndex: 1,
    elevation: 1,
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 200,
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
    paddingTop: 4,
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
  const [modalVisible, setModalVisible] = useState(false);
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    try {
      console.log("Run");

      let res = await API.graphql(graphqlOperation(listReviews));

      console.log(res);

      res = res.data.listReviews.filter((review) => {
        return review.clinic.id == props.item.id;
      });

      console.log(res);

      setReviews(res || []);
    } catch (err) {
      console.log("Res 0");
      console.log(err);
    }
  };

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
      console.log("Resources err 1");
      console.log(err);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        let user = (await Auth.currentUserInfo()).username;
        let likedAWS = (props.item.likes || []).reduce((prev, cur) => {
          return cur == user || prev;
        }, false);

        setLiked(likedAWS);
      } catch (err) {
        console.log("Resources err 2");
        console.log(err);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              backgroundColor: "#555",
              opacity: 0.5,
            }}
          ></View>
          <View
            style={{
              width: "85%",
              height: "60%",
              backgroundColor: "#fff",
              opacity: 1,
              padding: 15,
              alignItems: "center",
              display: "flex",
              borderRadius: 50,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "500",
                flex: 0,
              }}
            >
              {props.item.name}
            </Text>
            <Text
              style={{
                flex: 2,
                alignSelf: "flex-start",
                paddingLeft: 40,
              }}
            >
              {" "}
              Rating {props.item.rating}
            </Text>
            <Text
              style={{
                flex: 10,
                width: "80%",
              }}
            >
              {props.item.description}
            </Text>
            {reviews.length > 0 && (
              <View>
                {reviews.map((review, idx) => {
                  <View key={idx}>
                    <Text>{revie.rating}</Text>
                    <Text>{review.comment}</Text>
                  </View>;
                })}
              </View>
            )}
            <TouchableOpacity onPress={() => setModalVisible(false)} style={{}}>
              <Text>Hide Card</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View className="card-wrapper" style={styles.wrapper}>
        <View className="header-section" style={styles.title}>
          <View className="block1" style={styles.titleBox1}>
            <Text style={styles.font} numberOfLines={1}>
              {props.item.name}
            </Text>
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
          <Text
            numberOfLines={4}
            style={{ padding: 5, flex: 1, fontWeight: "300" }}
          >
            {props.item.description}
          </Text>
        </View>
        <TouchableOpacity
          style={{ padding: 5 }}
          onPress={() => {
            fetchReviews();
            setModalVisible(true);
          }}
        >
          <Text>Show More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResourceCardHome;
