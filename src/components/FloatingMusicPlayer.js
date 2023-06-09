import {
  Easing,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import TextTicker from "react-native-text-ticker";
import {
  AntDesign,
  FontAwesome5,
  MaterialIcons,
  Fontisto,
} from "@expo/vector-icons";

const FloatingMusicPlayer = () => {
  const [liked, setLiked] = useState(false);
  const [playing, setPlaying] = useState(false);

  return (
    <View
      style={{
        position: "absolute",
        flexDirection: "row",
        alignItems: "center",
        right: 20,
        left: 20,
        bottom: 65,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#555",
      }}
    >
      <Image
        source={{ uri: `https://unsplash.it/150` }}
        style={{ aspectRatio: 1, width: 40, borderRadius: 5 }}
      />
      <View style={{ flex: 1, marginHorizontal: 10, paddingBottom: 2 }}>
        <TextTicker
          style={{ color: "white", fontWeight: "700" }}
          duration={10000}
          easing={Easing.linear}
          repeatSpacer={80}
          marqueeDelay={1000}
          loop
        >
          She Knows (feat. Amber Coffman & Cults)
        </TextTicker>
        <TextTicker
          style={{ color: "white", fontWeight: "400" }}
          duration={10000}
          easing={Easing.linear}
          repeatSpacer={80}
          marqueeDelay={1000}
          loop
        >
          J. Cole, Cults, Amber Coffman
        </TextTicker>
      </View>
      <TouchableOpacity>
        <MaterialIcons name="devices" size={30} color="#fffa" />
      </TouchableOpacity>
      <View style={{ width: 14 }} />
      <TouchableOpacity onPress={() => setLiked(!liked)}>
        {liked ? (
          <AntDesign name="heart" size={24} color="#1ed760" />
        ) : (
          <AntDesign name="hearto" size={24} color="white" />
        )}
      </TouchableOpacity>
      <View style={{ width: 16 }} />
      <TouchableOpacity onPress={() => setPlaying(!playing)}>
        {playing ? (
          <Fontisto name="pause" color="white" size={20} />
        ) : (
          <FontAwesome5 name="play" color="white" size={17.5} />
        )}
      </TouchableOpacity>
      <View style={{ width: 8 }} />
    </View>
  );
};

export default FloatingMusicPlayer;

const styles = StyleSheet.create({});
