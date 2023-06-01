import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React from "react";

const SixRecentPlaylists = () => {
  return (
    <View>
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginRight: 10,
            borderRadius: 5,
            backgroundColor: "#333",
            alignItems: "center",
            width: (Dimensions.get("screen").width - 40) / 2,
          }}
        >
          <Image
            source={{ uri: `https://unsplash.it/150?random=${Math.random()}` }}
            style={{ aspectRatio: 1, width: 40, borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}
          />
          <Text style={{ color: "white", paddingHorizontal: 10 }}>Liked Songs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginRight: 10,
            borderRadius: 5,
            backgroundColor: "#333",
            alignItems: "center",
            width: (Dimensions.get("screen").width - 40) / 2,
          }}
        >
          <Image
            source={{ uri: `https://unsplash.it/150?random=${Math.random()}` }}
            style={{ aspectRatio: 1, width: 40, borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}
          />
          <Text style={{ color: "white", paddingHorizontal: 10 }}>My Favourites</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginRight: 10,
            borderRadius: 5,
            backgroundColor: "#333",
            alignItems: "center",
            width: (Dimensions.get("screen").width - 40) / 2,
          }}
        >
          <Image
            source={{ uri: `https://unsplash.it/150?random=${Math.random()}` }}
            style={{ aspectRatio: 1, width: 40, borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}
          />
          <Text style={{ color: "white", paddingHorizontal: 10 }}>NCS Releases</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginRight: 10,
            borderRadius: 5,
            backgroundColor: "#333",
            alignItems: "center",
            width: (Dimensions.get("screen").width - 40) / 2,
          }}
        >
          <Image
            source={{ uri: `https://unsplash.it/150?random=${Math.random()}` }}
            style={{ aspectRatio: 1, width: 40, borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}
          />
          <Text style={{ color: "white", paddingHorizontal: 10 }}>This is Poylow</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginRight: 10,
            borderRadius: 5,
            backgroundColor: "#333",
            alignItems: "center",
            width: (Dimensions.get("screen").width - 40) / 2,
          }}
        >
          <Image
            source={{ uri: `https://unsplash.it/150?random=${Math.random()}` }}
            style={{ aspectRatio: 1, width: 40, borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}
          />
          <Text style={{ color: "white", paddingHorizontal: 10 }}>One More Light</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginRight: 10,
            borderRadius: 5,
            backgroundColor: "#333",
            alignItems: "center",
            width: (Dimensions.get("screen").width - 40) / 2,
          }}
        >
          <Image
            source={{ uri: `https://unsplash.it/150?random=${Math.random()}` }}
            style={{ aspectRatio: 1, width: 40, borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}
          />
          <Text style={{ color: "white", paddingHorizontal: 10 }}>Your Time Capsule</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SixRecentPlaylists;

const styles = StyleSheet.create({});
