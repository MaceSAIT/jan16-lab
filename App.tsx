import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const name: string = "Jane Doe";
  let job: string = "Software Developer";
  const age: number = 30;
  const isEmployed: boolean = true;
  const list: string[] = ["Thing 1","Thing 2","Thing 3"];

  return (

    

    <View style={styles.title}>
      <Text style={styles.title}>Welcome to my Application</Text>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={() => alert("This is an alert.")}>
        <Text style={styles.container}>Click Me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  title: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    color: '#0000FF',
    fontSize: 100,
  },
});
