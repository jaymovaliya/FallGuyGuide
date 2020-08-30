import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { Button, TextContent, ProgressBar } from '../CoreUI';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function AboutPage(props) {
  return (
    <View style={styles.container}>
      <ProgressBar width={0.1}/>
      <TextContent
        content={"Fall Guys is a hugely multiplayer party game with up to 60 players online in an out of control situation battle through round after round of heightening confusion until one victor remains!"}
      />
      <Button
        content={"Next"}
        backgroundColor={"#77C805"}
        onClick={() => props.navigation.navigate('Mons')}
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
