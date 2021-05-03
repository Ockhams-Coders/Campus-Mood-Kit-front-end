import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const Navbar = (props) => {
    return (
        <View className="navbar-wrapper"
        style={{
            width: "100%", 
            height: 90, 
            flexDirection: "row",
            display: "flex",
        
        }}>
            <View className="navbar-container" style={{
                width: "100%", 
                height: "100%", 
                backgroundColor: "white",
                display: "flex",
                paddingLeft: 20,
                flexDirection: "column",
                paddingBottom: 10
                }}>
                <View style={{
                    flex:3,
                    display: "flex",
                    flexDirection: "row"

                }}>
                <Text style={{
                    
                    fontSize: 25,
                    fontWeight: "800",
                    alignSelf: "flex-end"
                }}>Campus Mood Kit</Text>
                </View>
                <View style={{
                    flex:1,
                    display: "flex",
                    flexDirection: "row"
                }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: "300",
                    alignSelf: "flex-end",
                    
                }}>
                    {props.screen}
                </Text>
                
                </View>
            </View>

        </View>
    );
};
export default Navbar;