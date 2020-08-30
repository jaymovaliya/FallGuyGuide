import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native';
import * as Font from 'expo-font';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function Button(props){
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
    <View style={styles.buttonContainer}>
      <TouchableOpacity activeOpacity={.7} onPress={() => props.onClick()}>
        <View
          style={{...styles.buttonView, backgroundColor: props.backgroundColor}}>
          <Text style={styles.button}>{props.content}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    width: width*0.7,
    height: 50,
  },
  button: {
    fontSize: 22,
    fontFamily: 'Montserrat'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
