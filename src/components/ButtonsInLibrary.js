import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ButtonsInLibrary = () => {
  return (
    <View style={{ flexDirection: "row", marginTop: 10 }}>
      <TouchableOpacity
        style={{
          paddingVertical: 6,
          marginRight: 10,
          paddingHorizontal: 15,
          backgroundColor: "#000",
          borderRadius: 999,
          borderWidth: 0.4,
          borderColor: "white",
        }}
      >
        <Text style={{ color: "white" }}>Playlists</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          paddingVertical: 6,
          marginRight: 10,
          paddingHorizontal: 15,
          backgroundColor: "#000",
          borderRadius: 999,
          borderWidth: 0.4,
          borderColor: "white",
        }}
      >
        <Text style={{ color: "white" }}>Artists</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ButtonsInLibrary

const styles = StyleSheet.create({})