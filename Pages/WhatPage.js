import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { Button, TextContent, ProgressBar } from '../CoreUI';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function WhatPage(props) {
  return (
    <View style={styles.container}>
      <ProgressBar width={0.6}/>
      <TextContent
        content={"You can make a gathering of 4 individuals as it is at the present time."}
      />
      <Button
        content={"Next"}
        backgroundColor={"#F38230"}
        onClick={() => props.navigation.navigate('Collector')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
});
