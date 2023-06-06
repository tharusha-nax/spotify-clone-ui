import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const RowOfArtists= ({title}) => {
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
          <ArtistsModule name="Poylow" />
          <ArtistsModule name="BEAUZ" />
          <ArtistsModule  name="The Chainsmokers" />
          <ArtistsModule name="Alan Walker" />
          <ArtistsModule name="NCS" />
        </ScrollView>
      </View>
    )
  }
  
  const ArtistsModule = props => {
      return (
          <TouchableOpacity
              style={{width: 140, marginRight: 10,}}
          >
              <Image source={{ uri: `https://unsplash.it/150?random=${Math.random()}` }} 
              style={{aspectRatio: 1, borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2}} 
              />
              <Text style={{color: 'white', marginTop: 5, textAlign: 'center',}}>{props.name}</Text>
          </TouchableOpacity>
      )
  }

export default RowOfArtists

const styles = StyleSheet.create({})