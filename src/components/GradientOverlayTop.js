import { Dimensions, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const GradientOverlayTop = () => {
  return (
    <LinearGradient
      colors={["transparent", "rgba(0,0,0,0.9)"]}
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: Dimensions.get("window").height * 0.8,
        top: 0,
        zIndex: 1,
        // marginTop: 10
      }}
    />
  );
};

export default GradientOverlayTop;

const styles = StyleSheet.create({});
