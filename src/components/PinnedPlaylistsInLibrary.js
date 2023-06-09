import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from '@expo/vector-icons';

const PinnedPlaylistsInLibrary = ({ title, producer }) => {
  const [pinned, setPinned] = useState(false);


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
        {title}
        <Text style={{ color: "#aaa", fontSize: 16, fontStyle: "none" }}>
          {"\n"}Playlist • {producer}
        </Text>
      </Text>

      <TouchableOpacity onPress={() => setPinned(!pinned)} style={{ justifyContent: 'center' }} >
        {pinned ? (
          <AntDesign
            name="pushpin"
            size={24}
            color="#1ed760"
            style={{
              transform: [{ rotate: "90deg" }],
              position: "absolute",
              right: 0,
            }}
          />
        ) : (
          <AntDesign
            name="pushpino"
            size={24}
            color="white"
            style={{
              transform: [{ rotate: "90deg" }],
              position: "absolute",
              right: 0,
            }}
          />
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default PinnedPlaylistsInLibrary;

const styles = StyleSheet.create({});
