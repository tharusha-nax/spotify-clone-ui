import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import ButtonsBelowGreeting from "../components/ButtonsBelowGreeting";
import SixRecentPlaylists from "../components/SixRecentPlaylists";
import RowOfPlaylists from "../components/RowOfPlaylists";
import GradientOverlay from "../components/GradientOverlay";
import RowOfArtists from "../components/RowOfArtists";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "black", paddingHorizontal: 15 }}>
      
      <ScrollView>
        <View style={{ height: 50 }} />
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              color: "white",
              fontWeight: "700",
              fontSize: 26,
              flex: 1,
            }}
          >
            Good afternoon
          </Text>
          <TouchableOpacity activeOpacity={0.5}>
            <Ionicons name="notifications-outline" size={24} color="white" />
          </TouchableOpacity>
          <View style={{ width: 20 }} />
          <TouchableOpacity activeOpacity={0.5}>
            <MaterialCommunityIcons
              name="progress-clock"
              size={24}
              color="white"
            />
          </TouchableOpacity >
          <View style={{ width: 20 }} />
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name="setting" size={24} color="white" />
          </TouchableOpacity>
        </View>
        
        <View style={{ height: 20 }} />
        <ButtonsBelowGreeting />
        <View style={{ height: 10 }} />
        <SixRecentPlaylists />
        <View style={{ height: 30 }} />
        <RowOfPlaylists title="Jump Back in" />
        <View style={{ height: 30 }} />
        <RowOfPlaylists title="Recently Played" />
        <View style={{ height: 30 }} />
        <RowOfArtists title="Your Favourite Artists" />
        <View style={{ height: 30 }} />
        <RowOfPlaylists title="Your Top mixes" />
        <View style={{ height: 30 }} />
        <RowOfPlaylists title="Your Playlists" />
        <View style={{ height: 30 }} />
        <RowOfPlaylists title="Based on your recent listening" />
        <View style={{ height: 150 }} />
      </ScrollView>
      <GradientOverlay />
    </View>
  );
};

export default HomeScreen;
