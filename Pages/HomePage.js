import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { Button } from '../CoreUI';
import * as Font from 'expo-font';
import * as FacebookAds from 'expo-ads-facebook';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

FacebookAds.AdSettings.addTestDevice(FacebookAds.AdSettings.currentDeviceHash);

export default function HomePage(props) {
  const [loaded, setLoaded] = useState(false);

  const loadFont = async () => {
    await Font.loadAsync({
      'Montserrat': require('../assets/Montserrat-Bold.ttf')
    })
    setLoaded(true);
  }

  useEffect(() => {
    loadFont()
  },[])

  if(!loaded){
    return null;
  }

  FacebookAds.InterstitialAdManager.showAd('909047592953933_909051566286869')
  .then(didClick => {})
  .catch(error => {
    alert(error)
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{...styles.headerText, fontFamily: 'Montserrat'}}>Fall Guys Guide</Text>
      </View>
      <View style={styles.mainImgContainer}>
        <Image source={require('../assets/fall-guys.png')} style={styles.mainImg}/>
      </View>
      <View style={styles.startContainer}>
        <Button
          content={"START"}
          backgroundColor={"#77C805"}
          onClick={() => props.navigation.navigate('About')}
        />
      </View>
      <View style={styles.navigationContainer}>
        <View style={styles.navigationIcon}>
          <Image source={require('../assets/rate.png')} style={styles.icon}/>
        </View>
        <View style={styles.navigationIcon}>
          <Image source={require('../assets/share.png')} style={styles.icon}/>
        </View>
        <View style={styles.navigationIcon}>
          <Image source={require('../assets/privacy.png')} style={styles.icon}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: height*0.2,
    backgroundColor: '#77C805',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  headerText: {
    fontSize: 28,
    color: 'white'
  },
  mainImgContainer: {
    marginTop: -20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainImg: {
    width: width*0.9,
    height: height*0.35,
    borderWidth: 4,
    borderColor: 'white',
    borderRadius: 10,
  },
  startContainer: {
    margin: 25,
    height: height*0.13,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  startBtnContainer: {
    width: '80%',
    height: height*0.06,
    backgroundColor: '#77C805',
    borderRadius: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  navigationContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 60,
    height: 60
  },
  navigationIcon: {
    marginHorizontal: 10
  }
});
