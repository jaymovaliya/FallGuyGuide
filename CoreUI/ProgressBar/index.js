import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function TextContent(props){
  return (
    <View style={styles.backgroundBar}>
      <View style={{...styles.fillBar, width: width*props.width}}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundBar: {
    margin: 15,
    height: 8,
    backgroundColor: '#DCDCDC'
  },
  fillBar: {
    backgroundColor: '#333333',
    height: 8
  }
});
