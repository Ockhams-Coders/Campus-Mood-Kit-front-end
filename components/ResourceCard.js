import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { shouldUseActivityState } from "react-native-screens";

const styles = StyleSheet.create({
    container: {
        height: "40%",
        width: "80%",
        backgroundColor: "#99DDF9"
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
        height: 2
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        shadowColor: "black"
        },
    title: {
        backgroundColor: "red",
        width: "90%",
        height: "30%"
    },
    services: {
        backgroundColor: "blue",
        width: "90%",
        height: "60%"
    }
  
});

const ResourceCard = (props) => {
  return (
    <View style={styles.container}>
        <View className="card-wrapper" style={styles.wrapper}>
            <View className="title-section" style={styles.title}>
                <Text>
                    {props.title}
                </Text>
            </View>
            <View className="description-of-services-section" style={styles.services}>
            </View>
        </View>
    </View>
    
  );
};

export default ResourceCard;
