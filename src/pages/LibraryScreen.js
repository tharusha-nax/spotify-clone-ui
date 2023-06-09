import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Dimensions,
  Image,
} from "react-native";
import React, { useRef, useState } from "react";
import {
  FontAwesome5,
  Feather,
  MaterialIcons,
  Octicons,
  AntDesign,
} from "@expo/vector-icons";
import ButtonsInLibrary from "../components/ButtonsInLibrary";
// import GradientOverlayTop from "../components/GradientOverlayTop";
import GradientOverlay from "../components/GradientOverlay";
import PinnedPlaylistsInLibrary from "../components/PinnedPlaylistsInLibrary";
import PlaylistsInLibrary from "../components/PlaylistsInLibrary";
import ArtistsInLibrary from "../components/ArtistsInLibrary";
import { LinearGradient } from "expo-linear-gradient";

const LibraryScreen = () => {
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 45);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 45],
    outputRange: [0, -45],
  });

  const [pinned, setPinned] = useState(true);

  return (
    <View style={{ flex: 1, backgroundColor: "black", paddingHorizontal: 15 }}>
      <View style={{ height: 60 }} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "black",
          zIndex: 2,
        }}
      >
        <TouchableOpacity style={{ marginRight: 15 }}>
          <FontAwesome5 name="user-circle" size={30} color="yellow" />
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1 }}>
          <Text
            style={{
              color: "white",
              fontWeight: "700",
              fontSize: 24,
            }}
          >
            Your Library
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginRight: 15 }}>
          <Feather name="search" color="white" size={25} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="add" color="white" size={35} />
        </TouchableOpacity>
      </View>

      {/* <GradientOverlayTop /> */}

      <View style={{ height: 15, backgroundColor: "black", zIndex: 20 }} />

      <Animated.View
        style={{
          transform: [{ translateY: translateY }],
          elevation: 4,
        }}
      >
        <ButtonsInLibrary />
      </Animated.View>

      <View style={{ height: 15 }} />

      <ScrollView
        fadingEdgeLength={10}
        onScroll={(e) => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}
        style={{
          elevation: 4,
        }}
      >
        <View style={{ height: 20 }} />

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity style={{ justifyContent: "center" }}>
            <Octicons
              name="arrow-switch"
              color="white"
              size={14}
              style={{
                transform: [{ rotate: "90deg" }],
                position: "absolute",
              }}
            />
            <Text
              style={{
                color: "white",
                fontWeight: "700",
                fontSize: 16,
                flex: 1,
                marginLeft: 25,
              }}
            >
              Most recent
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ position: "absolute", right: 0, justifyContent: "center" }}
          >
            <AntDesign name="appstore-o" color="white" size={18} />
          </TouchableOpacity>
        </View>

        <View style={{ height: 15 }} />

        {/* Liked Songs */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <LinearGradient
            useAngle={true}
            angel={45}
            angleCenter={{x: 0.5, y: 0.5}}
            colors={["#4970e5", "#6249ff", "#727A93"]}
            style={{
              width: 75,
              marginRight: 15,
              aspectRatio: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="heart" size={24} color="white" />
          </LinearGradient>
          <Text
            style={{
              color: "white",
              paddingHorizontal: 10,
              fontSize: 18,
              fontWeight: "400",
              flex: 1,
            }}
          >
            Liked Songs
            <Text style={{ color: "#aaa", fontSize: 14, lineHeight: 25 }}>
              {"\n"}Playlist • 999 songs
            </Text>
          </Text>

          <TouchableOpacity
            onPress={() => setPinned(!pinned)}
            style={{ justifyContent: "center" }}
          >
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

        {/* <PinnedPlaylistsInLibrary
          title="Liked songs"
          producer="199 songs"
          color="white"
        /> */}
        <PinnedPlaylistsInLibrary title="Favourites" producer="User" />
        <PinnedPlaylistsInLibrary title="Studying Mix" producer="User" />
        <PinnedPlaylistsInLibrary title="Other" producer="User" />

        <PlaylistsInLibrary title="One More Light" producer="Linkin Park" />
        <PlaylistsInLibrary
          title="Favourites from Owl City"
          producer="Owl City"
        />
        <PlaylistsInLibrary title="This is J.Fla" producer="Spotify" />
        <PlaylistsInLibrary title="NCS Releases" producer="NCS" />
        <ArtistsInLibrary artist="Bella Poarch" />
        <PlaylistsInLibrary title="Repeating Playlist" producer="User" />
        <ArtistsInLibrary artist="BLACKPINK" />
        <PlaylistsInLibrary title="This is BLACKPINK" producer="Spotify" />

        <ArtistsInLibrary artist="Alan Walker" />
        <ArtistsInLibrary artist="J.Fla" />
        <ArtistsInLibrary artist="RANDALL" />
        <ArtistsInLibrary artist="Eminem" />
        <ArtistsInLibrary artist="Charlie Puth" />
        <PlaylistsInLibrary title="Discover Weekly" producer="Spotify" />
        <ArtistsInLibrary artist="JVLA" />
        <ArtistsInLibrary artist="Marshmello" />

        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: 75,
              marginRight: 15,
              aspectRatio: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaterialIcons name="add" color="#aaa" size={35} />
          </View>
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "400",
              flex: 1,
              // marginLeft: 50,
            }}
          >
            Add artists
          </Text>
        </TouchableOpacity>

        <View style={{ height: 140 }} />
      </ScrollView>

      <GradientOverlay />
    </View>
  );
};

export default LibraryScreen;

const styles = StyleSheet.create({});
