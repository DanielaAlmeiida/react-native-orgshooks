import React from 'react';

import Home from './src/telas/Home'

import type {PropsWithChildren} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


function App(): React.JSX.Element  {
  return <SafeAreaView>
    <Home />
    </SafeAreaView>
}

export default App;
