import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Entypo } from "react-native-vector-icons"

const PlaylistsInLibrary = ({title, producer}) => {
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
        <Text style={{ color: "#aaa", fontSize: 14, lineHeight: 25 }}>
          {"\n"}Playlist • {producer}
        </Text>
      </Text>

      <TouchableOpacity style={{ justifyContent: "center" }}>
        <Entypo name="dots-three-vertical" color="#aaa" size={16} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

export default PlaylistsInLibrary

const styles = StyleSheet.create({})