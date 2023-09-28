import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import Login from './components/Login';
import Ex from './components/Ex'

export default function App() {
  return (
    <View>
      {/* <Login />
      <StatusBar style="auto" /> */}
      <Ex />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});