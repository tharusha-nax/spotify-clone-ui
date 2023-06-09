import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Entypo } from "react-native-vector-icons";

const ArtistsInLibrary = ({ artist }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
      }}
    >
      <Image
        source={{ uri: `https://unsplash.it/150?random=${Math.random()}` }}
        style={{
          aspectRatio: 1,
          width: 75,
          marginRight: 5,
          borderRadius:
            Math.round(
              Dimensions.get("window").width + Dimensions.get("window").height
            ) / 2,
        }}
      />
      <Text
        style={{
          color: "white",
          paddingHorizontal: 10,
          fontSize: 18,
          fontWeight: "400",
          flex: 1,
        }}
      >
        {artist}
        <Text style={{ color: "#aaa", fontSize: 14, lineHeight: 25 }}>
          {"\n"}Artist
        </Text>
      </Text>

      <TouchableOpacity style={{ justifyContent: "center" }}>
        <Entypo name="dots-three-vertical" color="#aaa" size={16} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ArtistsInLibrary;

const styles = StyleSheet.create({});
