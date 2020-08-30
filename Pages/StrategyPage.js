import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { Button, TextContent, ProgressBar } from '../CoreUI';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function StrategyPage(props) {
  return (
    <View style={styles.container}>
      <ProgressBar width={0.9}/>
      <TextContent
        content={"Jump into a progression of silly difficulties and wild impediment courses with masses of different contenders on the web."}
      />
      <Button
        content={"Next"}
        backgroundColor={"#32B0F6"}
        onClick={() => props.navigation.navigate('Strategy')}
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
