import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Evacuation Management System </Text>
      
      <Text style={styles.body}>Android Application{'\n'}{'\n'}{'\n'}</Text>
      
      <Button title="GET STARTED" color = 'blue'/>
    
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7968ed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  body: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    fontStyle: 'italic',
  },
  
})
