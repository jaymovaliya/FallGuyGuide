import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { Button, TextContent, ProgressBar } from '../CoreUI';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function SeriousPage(props) {
  return (
    <View style={styles.container}>
      <ProgressBar width={0.3}/>
      <TextContent
        content={"Move between serious free-for-alls and agreeable difficulties where the losing group all get dispensed with!"}
      />
      <Button
        content={"Next"}
        backgroundColor={"#77C805"}
        onClick={() => props.navigation.navigate('Hilarious')}
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
