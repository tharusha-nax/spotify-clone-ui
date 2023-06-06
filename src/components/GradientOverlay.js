import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const GradientOverlay = () => {
  return (
    <LinearGradient 
        colors={['transparent', 'rgba(0,0,0,0.9)' ]}
        style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            top: Dimensions.get('window').height * 0.8
        }}
    />
  )
}

export default GradientOverlay

const styles = StyleSheet.create({})