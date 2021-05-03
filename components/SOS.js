import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Linking,
} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E0E1E8",
  },
  buttons: {
    backgroundColor: "#fff",
    width: "80%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 20,
  },
});

const SOS = () => {
  const [showModal1, setshowModal1] = useState(false);
  const [showModal2, setshowModal2] = useState(false);

  return (
    <View style={styles.center}>
      {/* Modal number 1 */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={showModal1}
        onRequestClose={() => {
          setshowModal1(false);
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
              justifyContent: "space-around",
              borderRadius: 20,
            }}
          >
            <View
              style={{
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 10,
                }}
              >
                <MaterialCommunityIcons name="phone" size={30} />
                <Text style={{ fontSize: 20, marginLeft: 20 }}>Call 911</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 10,
                }}
              >
                <MaterialCommunityIcons name="phone" size={30} />
                <Text style={{ fontSize: 20, marginLeft: 20 }}>Call GTPD</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 10,
                }}
              >
                <MaterialCommunityIcons name="phone" size={30} />
                <Text style={{ fontSize: 20, marginLeft: 20 }}>
                  Call GT Mental Health
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => setshowModal1(false)}
              style={{
                backgroundColor: "#eee",
                alignItems: "center",
                justifyContent: "center",
                width: "80%",
                height: 50,
                borderRadius: 10,
              }}
            >
              <Text>False alarm!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal number 2 */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={showModal2}
        onRequestClose={() => {
          setshowModal2(false);
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
              justifyContent: "space-around",
              borderRadius: 20,
            }}
          >
            <Text>Everything is going to be alright!</Text>

            <Text>Take the survey to get targeted results</Text>

            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  "https://healthinitiatives.gatech.edu/well-being/mental"
                );
              }}
              style={{
                backgroundColor: "#eee",
                alignItems: "center",
                justifyContent: "center",
                width: "80%",
                height: 50,
                borderRadius: 10,
              }}
            >
              <Text>Get resources to feel better</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setshowModal2(false)}
              style={{
                backgroundColor: "#eee",
                alignItems: "center",
                justifyContent: "center",
                width: "80%",
                height: 50,
                borderRadius: 10,
              }}
            >
              <Text>I'm feeling better</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Text style={{ marginBottom: 30, fontSize: 25 }}>What’s going on?</Text>
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => setshowModal1(true)}
      >
        <Text style={{ ...styles.buttonText, color: "#E74D4D" }}>
          I’m in crisis
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => setshowModal2(true)}
      >
        <Text style={styles.buttonText}>I am having a panic attack</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => setshowModal2(true)}
      >
        <Text style={styles.buttonText}>I am having an anxiety attack</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => setshowModal2(true)}
      >
        <Text style={styles.buttonText}>I am stressed out</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => setshowModal2(true)}
      >
        <Text style={styles.buttonText}>I’m exhausted</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SOS;
