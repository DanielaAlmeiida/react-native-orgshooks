import React from 'react';
import Home from './src/telas/Home'
import { SafeAreaView, StyleSheet } from 'react-native';


function App(): React.JSX.Element  {
  return <SafeAreaView style={estilos.tela}>
      <Home />
    </SafeAreaView>
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
  }
})

export default App;
