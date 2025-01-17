import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const name: string = "Jane Doe";
  let job: string = "Software Developer";
  const age: number = 30;
  const isEmployed: boolean = true;
  const list: string[] = ["Thing 1","Thing 2","Thing 3"];

  return (

    

    <View style={styles.container}>
      <Text>This is the name {name}</Text>
      <StatusBar style="auto" />

      <TouchableOpacity onPress={() => alert("This is an alert.")}>
        <Text>Click Me</Text>
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
  },
});
