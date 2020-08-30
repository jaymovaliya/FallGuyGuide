import React, {memo, useState, useEffect} from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import * as Font from 'expo-font';

import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import MonsPage from './Pages/MonsPage';
import SeriousPage from './Pages/SeriousPage';
import HilariousPage from './Pages/HilariousPage';
import MagnificantPage from './Pages/MagnificantPage';
import WhatPage from './Pages/WhatPage';
import CollectorPage from './Pages/CollectorPage';
import HowPage from './Pages/HowPage';
import StrategyPage from './Pages/StrategyPage';


export default function App() {
  const [loaded, setLoaded] = useState(false);

  const loadFont = async () => {
    await Font.loadAsync({
      'Montserrat': require('./assets/Montserrat-Bold.ttf')
    })
    setLoaded(true);
  }

  useEffect(() => {
    loadFont()
  },[])

  if(!loaded){
    return null;
  }

  const RootStack = createStackNavigator(
    {
      Home: {
        screen: props => <HomePage {...props}/>,
        navigationOptions: {
            headerShown: false,
        }
      },
      About: {
        screen: props => <AboutPage {...props}/>,
        navigationOptions: {
            title: 'About This Game',
            headerTintColor: 'white',
            headerTitleStyle: {
              marginLeft: -50,
              alignSelf: 'center',
              color: 'white',
              fontSize: 18,
              fontFamily: 'Montserrat'
            },
            headerStyle: {
              backgroundColor: '#77C805',
            },
        }
      },
      Mons: {
        screen: props => <MonsPage {...props}/>,
        navigationOptions: {
            title: 'Monstrous Online Pandemonium',
            headerTintColor: 'white',
            headerTitleStyle: {
              marginLeft: -50,
              alignSelf: 'center',
              color: 'white',
              fontSize: 18,
              fontFamily: 'Montserrat'
            },
            headerStyle: {
              backgroundColor: '#EF4747',
            },
        }
      },
      Serious: {
        screen: props => <SeriousPage {...props}/>,
        navigationOptions: {
            title: 'Series And Cooperative',
            headerTintColor: 'white',
            headerTitleStyle: {
              marginLeft: -50,
              alignSelf: 'center',
              color: 'white',
              fontSize: 18,
              fontFamily: 'Montserrat'
            },
            headerStyle: {
              backgroundColor: '#77C805',
            },
        }
      },
      Hilarious: {
        screen: props => <HilariousPage {...props}/>,
        navigationOptions: {
            title: 'Hilariously Physical',
            headerTintColor: 'white',
            headerTitleStyle: {
              marginLeft: -50,
              alignSelf: 'center',
              color: 'white',
              fontSize: 18,
              fontFamily: 'Montserrat'
            },
            headerStyle: {
              backgroundColor: '#32B0F6',
            },
        }
      },
      Magnificant: {
        screen: props => <MagnificantPage {...props}/>,
        navigationOptions: {
            title: 'Magnificantly Customizable',
            headerTintColor: 'white',
            headerTitleStyle: {
              marginLeft: -50,
              alignSelf: 'center',
              color: 'white',
              fontSize: 18,
              fontFamily: 'Montserrat'
            },
            headerStyle: {
              backgroundColor: '#77C805',
            },
        }
      },
      What: {
        screen: props => <WhatPage {...props}/>,
        navigationOptions: {
            title: 'What Number of Companions',
            headerTintColor: 'white',
            headerTitleStyle: {
              marginLeft: -50,
              alignSelf: 'center',
              color: 'white',
              fontSize: 18,
              fontFamily: 'Montserrat'
            },
            headerStyle: {
              backgroundColor: '#F38230',
            },
        }
      },
      Collector: {
        screen: props => <CollectorPage {...props}/>,
        navigationOptions: {
            title: "The Collector's Edition",
            headerTintColor: 'white',
            headerTitleStyle: {
              marginLeft: -50,
              alignSelf: 'center',
              color: 'white',
              fontSize: 18,
              fontFamily: 'Montserrat'
            },
            headerStyle: {
              backgroundColor: '#EF4747',
            },
        }
      },
      How: {
        screen: props => <HowPage {...props}/>,
        navigationOptions: {
            title: 'How to Play',
            headerTintColor: 'white',
            headerTitleStyle: {
              marginLeft: -50,
              alignSelf: 'center',
              color: 'white',
              fontSize: 18,
              fontFamily: 'Montserrat'
            },
            headerStyle: {
              backgroundColor: '#CE82FE',
            },
        }
      },
      Strategy: {
        screen: props => <StrategyPage {...props}/>,
        navigationOptions: {
            title: 'Game Strategy',
            headerTintColor: 'white',
            headerTitleStyle: {
              marginLeft: -50,
              alignSelf: 'center',
              color: 'white',
              fontSize: 18,
              fontFamily: 'Montserrat'
            },
            headerStyle: {
              backgroundColor: '#32B0F6',
            },
        }
      },
    },
    {
      initialRouteName: 'Home',
    }
  )

  const AppContainer = createAppContainer(RootStack);

  return (
    <AppContainer />
  );
}
