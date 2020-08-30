import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native';
import * as Font from 'expo-font';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function TextContent(props){
  const [loaded, setLoaded] = useState(false);

  const loadFont = async () => {
    await Font.loadAsync({
      'Montserrat': require('../../assets/Montserrat-Bold.ttf')
    })
    setLoaded(true);
  }

  useEffect(() => {
    loadFont()
  },[])

  if(!loaded){
    return null;
  }

  return (
    <View style={styles.textContainer}>
      <Text style={styles.textStyle}>{props.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 30,
    elevation: 2
  },
  textStyle: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Montserrat'
  }
});
