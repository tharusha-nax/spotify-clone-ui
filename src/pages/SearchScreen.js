import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const SearchScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "black", paddingHorizontal: 15 }}>
      <ScrollView>
        <View style={{ height: 50 }} />
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
        <TextInput style={{backgroundColor: 'white', textAlign: 'left'}} />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
