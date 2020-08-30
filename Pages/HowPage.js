import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { Button, TextContent, ProgressBar } from '../CoreUI';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function HowPage(props) {
  return (
    <View style={styles.container}>
      <ProgressBar width={0.8}/>
      <TextContent
        content={"The game has been incredibly huge since its launch and the game's servers are having a hard time accommodating the influx of players who want to experience the fun new game, which is available on PlayStation 4 and PC via Steam. \n\n If you want to try the game out or you've been trying it lately, the ultimate goal is to be the last one standing, and as with any other battle royale game, you'll need a strategy to win"}
      />
      <Button
        content={"Next"}
        backgroundColor={"#CE82FE"}
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
