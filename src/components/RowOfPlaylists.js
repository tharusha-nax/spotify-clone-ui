import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const RowOfPlaylists = ({title}) => {
  return (
    <View>
      <Text
        style={{
            color: 'white',
            fontWeight: '700',
            fontSize: 26
        }}
      >{title}</Text>
      <View style={{height: 15}} />
      <ScrollView horizontal>
        <PlaylistModule />
        <PlaylistModule />
        <PlaylistModule  />
        <PlaylistModule />
        <PlaylistModule />
      </ScrollView>
    </View>
  )
}

const PlaylistModule = () => {
    return (
        <TouchableOpacity
            style={{width: 140, marginRight: 10}}
        >
            <Image source={{ uri: `https://unsplash.it/150?random=${Math.random()}` }} 
            style={{aspectRatio: 1}} 
            />
            <Text style={{color: 'white', marginTop: 5}}>Playlist Name</Text>
        </TouchableOpacity>
    )
}

export default RowOfPlaylists


const styles = StyleSheet.create({})