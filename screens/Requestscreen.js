import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';



export default function Requestscreen() {

  const [Name, setName] = useState('');
  const [Age, setAge] = useState('');
  const [Address, setAddress] = useState('');
  const [Contact, setContact] = useState('');

  return (
      <View style={styles.container}>
        <StatusBar style="auto"/>
      
        <Text style={styles.titleText}>Request Rescuer!</Text>
      
     
        <View>
          <Text style={styles.TILabel}> {'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}Enter name:</Text>
          <TextInput 
            style={styles.input}
            placeholder='ex. Juan Dela Cruz'
            onChangeText={(val) => setName(val)}/>

              <Text style={styles.TILabel}>Enter age:</Text>
                <TextInput 
                  style={styles.input}
                  placeholder='ex. 40'
                  onChangeText={(val) => setAge(val)}/> 
                  
                    <Text style={styles.TILabel}>Enter address:</Text>
                      <TextInput 
                        style={styles.input}
                        placeholder='ex. Blk1 Lot999'
                        onChangeText={(val) => setAddress(val)}/>

                          <Text style={styles.TILabel}>Enter contact #:</Text>
                            <TextInput 
                              style={styles.input}
                              placeholder='ex. 09123456789'
                              onChangeText={(val) => setContact(val)}/>

                                <Text>name: {Name}, age: {Age}, address: {Address}, contact: {Contact}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
            
        </View>
          
        <Button title="Send Request" color = '#7574cf'/>
        
      </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b9b8f5',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  
  input: {
    borderWidth: 1.5,
    borderColor: 'black',
    padding: 7,
    margin: 10,
    width: 300,
  },

  titleText: {
    fontSize: 33, 
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'sans-serif-light',
  },
  TILabel:{
    fontWeight: 'bold',
    fontFamily: 'sans-serif-light',
    textAlign: 'center'
  },

  reqText: {
    textAlign:'left',
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,

  },

  motto: {
    fontFamily: 'sans-serif-light',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },

});
