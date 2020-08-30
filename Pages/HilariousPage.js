import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { Button, TextContent, ProgressBar } from '../CoreUI';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function HilariousPage(props) {
  return (
    <View style={styles.container}>
      <ProgressBar width={0.4}/>
      <TextContent
        content={"Watch in amusement as your kindred rivals twist, ricochet, and slam their approach to clever, material science based disappointment!"}
      />
      <Button
        content={"Next"}
        backgroundColor={"#32B0F6"}
        onClick={() => props.navigation.navigate('Magnificant')}
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
