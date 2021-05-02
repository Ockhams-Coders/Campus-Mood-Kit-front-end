import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { shouldUseActivityState } from "react-native-screens";
import { Platform } from 'react-native';
import { Button } from "native-base";




const styles = StyleSheet.create({
    container: {
        height: "35%",
        width: "80%",
        backgroundColor: "#ADF6D4"
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

        backgroundColor: "white",
        width: "80%",
        height: "25%",
        display: "flex",
        justifyContent: 'flex-start', 
        flexDirection: "row"
        
    },
    services: {
        backgroundColor: "white",
        width: "80%",
        height: "55%",
        borderRadius: 15,
        borderColor: "#ADF6D4",
        borderWidth: 2,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowColor: "black"
    },
    font: {
        fontSize: 20
    },
    titleBox1: {
        flex: 3,
        paddingLeft: "5%"
    },
    likebutton: {
        
    },

  
});


const ResourceCardReviews = (props) => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handlePress = () => setClick(!click);

  return (


    <View style={styles.container}>
        <View className="card-wrapper" style={styles.wrapper}>
            <View className="header-section" style={styles.title}>
                <View className="block1" style={styles.titleBox1}>
                    <Text style={styles.font}> 
                        {props.title}
                    </Text>
                </View>
                <View className="block2">
                    <TouchableOpacity onPress={handlePress}>
                        <Image source={click ? require('../assets/images/baseline_favorite_black_18pt_2x.png') : require('../assets/images/baseline_favorite_border_black_18pt_2x.png')} style={styles.likebutton}/>
                    </TouchableOpacity>
                    
                </View>
            </View>
            <View className="description-of-services-section" style={styles.services}>
            </View>
 
        </View>
    </View>
    
  );
};

export default ResourceCardReviews;
