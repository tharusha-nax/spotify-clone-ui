import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { React } from "react";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";

const SearchScreen = () => {

  return (
    <View style={{ flex: 1, backgroundColor: "black", paddingHorizontal: 15 }}>
      <ScrollView>
        <View style={{ height: 60 }} />
        <Text
          style={{
            color: "white",
            fontWeight: "700",
            fontSize: 26,
            flex: 1,
          }}
        >
          Search
        </Text>
        <View style={{ height: 20 }} />
        <TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <Feather name="search" size={16} color="black" style={{left: 20, zIndex: 2, marginRight: 0}} /> */}
          <TextInput
            activeUnderlineColor="transparent"
            style={{
              flex: 1,
              backgroundColor: "white",
              textAlign: "left",
              borderRadius: 3,
              marginRight: 15,
              fontSize: 16,
              fontWeight: 'bold',
              height: 45
              // width: (Dimensions.get("screen").width - 30) / 1.1,
            }}
            placeholder="Artists, songs, or albums"
            placeholderTextColor={"#333b"}
            left={<TextInput.Icon icon={"magnify"} size={32} />}
          />
          <MaterialIcons name="mic-none" color="white" size={30} />
          </View>
          </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
