import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { Button, TextContent, ProgressBar } from '../CoreUI';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function MagnificantPage(props) {
  return (
    <View style={styles.container}>
      <ProgressBar width={0.5}/>
      <TextContent
        content={"Come up short in style including popular pineapple couture to the most recent in rabbit caps accessible to redo your look in Fall Guys."}
      />
      <Button
        content={"Next"}
        backgroundColor={"#77C805"}
        onClick={() => props.navigation.navigate('What')}
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
