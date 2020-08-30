import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { Button, TextContent, ProgressBar } from '../CoreUI';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function CollectorPage(props) {
  return (
    <View style={styles.container}>
      <ProgressBar width={0.7}/>
      <TextContent
        content={"The game, a couple of uncommon ensembles, and 10,000 Kudos which you can use to purchase skin and outfits and stuff"}
      />
      <Button
        content={"Next"}
        backgroundColor={"#EF4747"}
        onClick={() => props.navigation.navigate('How')}
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
