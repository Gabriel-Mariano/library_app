import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Heebo_400Regular, Heebo_700Bold, Heebo_600SemiBold  } from '@expo-google-fonts/heebo';
import Main from './src/main';

export default function App() {
  let [fontsLoaded] = useFonts({
    Heebo_400Regular,
    Heebo_600SemiBold,
    Heebo_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <View style={styles.container}>
      <Main/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
