import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ButtonsBelowGreeting = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        style={{
          paddingVertical: 6,
          marginRight: 10,
          paddingHorizontal: 15,
          backgroundColor: '#333',
          borderRadius: 999
        }}
      >
        <Text style={{color: 'white'}} >Music</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          paddingVertical: 6,
          marginRight: 10,
          paddingHorizontal: 15,
          backgroundColor: '#333',
          borderRadius: 999
        }}
      >
        <Text style={{color: 'white'}} >Podcast & Shows</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonsBelowGreeting

const styles = StyleSheet.create({})