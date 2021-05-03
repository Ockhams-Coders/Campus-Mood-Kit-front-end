import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, StyleSheet, FlatList, Dimensions } from "react-native";

const Chart = () => {
    
  
    return (
        <View>
        <Text style={{alignSelf:"center", fontSize:20}}>
            Your Quiz Results
        </Text>
        <LineChart
          data={{
            labels: ["04/29", "04/30", "05/01", "05/02", "05/03", "05/04"],
            datasets: [
              {
                data: [
                  30,
                  34,
                  37,
                  29,
                  28,
                  20
                ]
              }
            ]
          }}
          width={Dimensions.get("window").width * .9} // from react-native
          height={200}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "white",
            backgroundGradientFrom: "#513873",
            backgroundGradientTo: "#ad88d1",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
                r: "5",
                strokeWidth: "4",
                stroke: "white"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      </View>
    );
  };
  
  export default Chart;
  