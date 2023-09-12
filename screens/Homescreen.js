import React, { useState } from 'react';
import axios from 'axios';
import { View, 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  Image, 
  TextInput, 
  Button, 
  ScrollView, 
  SafeAreaView, 
  Linking,
  Alert
} from 'react-native';
import { StatusBar } from 'react-native';



// image with GPS
const HomePage = ({navigation}) => {

  const handleImageClick = () => {
  const url = 'https://goo.gl/maps/wLokbxuYFiDeHbsz7';
    Linking.openURL(url).catch((error) => console.error('Error opening URL: ', error));
    };
    const handleImageClick2 = () => {
      const url = 'https://goo.gl/maps/L428Sv21yboe21yK8';
        Linking.openURL(url).catch((error) => console.error('Error opening URL: ', error));
        };
        const handleImageClick3 = () => {
          const url = 'https://goo.gl/maps/fKeXeqm7A3ZFVs1TA';
            Linking.openURL(url).catch((error) => console.error('Error opening URL: ', error));
            };
            const handleImageClick4 = () => {
              const url = 'https://goo.gl/maps/7R5poj6BDnwNRmne9';
                Linking.openURL(url).catch((error) => console.error('Error opening URL: ', error));
                };
                const handleImageClick5 = () => {
                  const url = 'https://goo.gl/maps/EJb4FLxTX4mcabhx8';
                    Linking.openURL(url).catch((error) => console.error('Error opening URL: ', error));
                    };

   const createTwoButtonAlert = () =>
      Alert.alert('Request', 'Sent!');
      
  const [activeTab, setActiveTab] = useState('Tab1');

  

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  }; 
  
      const [input, setInput] = useState({

        Address: '',
        Contact: ''
      })
  
      function handleChange(name, value) {
        // Check if the value is not empty before updating the state
        if (value.trim() !== '') {
          setInput(prevInput => ({
            ...prevInput,
            [name]: value
          }));
        }
      }

  function handleClick(){
    const newRequest = {
        Address: input.Address,
        Contact: input.Contact
    }
    axios.post('http://192.168.1.6:3001/create', newRequest)
  }


  return (
    // initializng function for changing tabs
      <View 
        style={styles.container}>
        
<SafeAreaView>
        <View style={styles.tabDrawer}>
        
          <TouchableOpacity
            style={[styles.tab, activeTab === 'Tab1' && styles.activeTab]}
            onPress={() => handleTabPress('Tab1')}
          >
          <Image style={styles.homeIMG}
              source={require('../assets/HOMEICON1.png')}>
          </Image>
            <Text style={styles.tabText}>{'\n'}HOME</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === 'Tab2' && styles.activeTab]}
            onPress={() => handleTabPress('Tab2')}
          >
            <Image style={styles.reqIMG}
            source={require('../assets/medical-service.png')}>
          </Image>
            <Text style={styles.tabText}>REQUEST RESCUES</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'Tab3' && styles.activeTab]}
            onPress={() => handleTabPress('Tab3')}
          >
          <Image style={styles.regIMG}
            source={require('../assets/add-post.png')}>
          </Image>
            <Text style={styles.tabText}>{'\n'}REGISTRATION</Text>
          </TouchableOpacity>
          <StatusBar style="auto"/>

        </View>
        
</SafeAreaView>

      {/* Calling the function for changing tabs */}

      <View style={styles.tabContent}>
        
        {activeTab === 'Tab1' && (
          // HOMEPAGE && EVACAUATION DETAILS
              <ScrollView>
                    <View> 
                      <Text style={styles.imagesLabel}>RODRIGUEZ EVACUATION CENTER</Text>
                      <TouchableOpacity onPress={handleImageClick}>
                      <Image style={styles.image}
                      source={require('../assets/3.jpg')}>
                      </Image></TouchableOpacity>
                      <Button title="Details" color = '#7574cf' style={{borderRadius: 10,}} onPress={() => navigation.navigate('RODRIGUEZ EC', {name: 'RECdetails'})} />
                     

                      <Text style={styles.imagesLabel}>{'\n'}KASIGLAHAN VILLAGE NATIONAL HIGH SCHOOL</Text>
                      <TouchableOpacity onPress={handleImageClick2}>
                      <Image style={styles.image2}
                        source={require('../assets/4.jpg')}>
                      </Image></TouchableOpacity><Button title="Details" color = '#7574cf' onPress={() => navigation.navigate('KVNHS', {name: 'KVNHSdetails'})} />
                      
                      
                      <Text style={styles.imagesLabel}>{'\n'}KASIGLAHAN SENIOR HIGH SCHOOL</Text>
                      <TouchableOpacity onPress={handleImageClick3}>
                      <Image style={styles.image3}
                        source={require('../assets/5.png')}>
                      </Image> 
                      </TouchableOpacity><Button title="Details" color = '#7574cf' onPress={() => navigation.navigate('KVSHS', {name: 'KVSHSdetails'})} />

                      <Text style={styles.imagesLabel}>{'\n'}BURGOS ELEMENTARY SCHOOL</Text>
                      <TouchableOpacity onPress={handleImageClick4}>
                      <Image style={styles.image4}
                        source={require('../assets/6.png')}>
                      </Image> 
                      </TouchableOpacity><Button title="Details" color = '#7574cf' onPress={() => navigation.navigate('BES', {name: 'BESdetails'})} />

                      <Text style={styles.imagesLabel}>{'\n'}SAN JOSE ELEMENTARY SCHOOL</Text>
                      <TouchableOpacity onPress={handleImageClick5}>
                      <Image style={styles.image5}
                        source={require('../assets/7.png')}>
                      </Image> 
                      </TouchableOpacity><Button title="Details" color = '#7574cf' onPress={() => navigation.navigate('SJES', {name: 'SJESdetails'})} />

                    </View>

              </ScrollView>
        )}
        
        {activeTab === 'Tab2' && (
          // FOR REQUESTING TAB
      <View>
      <Text style={styles.TILabel}>Enter address:</Text>
      <TextInput
        value={input.Address}
        onChangeText={(text) => handleChange('Address', text)}
        style={styles.input3}
      />

      <Text style={styles.TILabel}>Enter Contact:</Text>
      <TextInput
        value={input.Contact}
        onChangeText={(text) => handleChange('Contact', text)}
        style={styles.input3}
      />

                <Button title="Send Request" color = '#7574cf' onPress={() => {handleClick(); createTwoButtonAlert();}}/>
                
           
                <Text>{'\n'}{'\n'}{'\n'}</Text>
                <Text style={styles.textREQ}>NOTE: THIS PAGE IS FOR REQUESTING RESCUERS ONLY!</Text>
      </View>
)}

        {activeTab === 'Tab3' && (
          // FOR NUMBER REGISTRATION TAB
          <View>
            <Text style={styles.etn}>Please provide your number</Text>
            <TextInput onChange={handleChange}
              style={styles.regInput}
              placeholder='Pease enter your number'/>

            <Button title='Register' color = '#7574cf'/>
          </View>
        )}
      </View>

    </View>
 
  );
};


//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    position: 'relative',
  },
  regIMG: {
    width: 35,
    height: 35
  },
  reqIMG:{
    width: 40,
    height: 45
  },
  homeIMG:{
    width: 30,
    height: 30
  },
  etn:{
    fontSize: 18,
  },
  regInput: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    margin: 10,
    alignItems: 'center',
    width: 300,
  },
  tabDrawer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    borderBottomColor: 'blue',
    borderBottomWidth: 3,
  },
  tabText: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  tabContent: {
    flex: 1,
    padding: 50,
  },

  textEVAC: {
    fontSize: 17,
    fontWeight: 'bold',
  },

  image: {
    height: 210,
    width: 300,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20,
    alignItems: 'center',
  },

  image2: {
    height: 210,
    width: 300,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20,
    alignItems: 'center',
  },

  image3: {
    height: 210,
    width: 300,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20,
    alignItems: 'center',
  },

  image4: {
    height: 210,
    width: 300,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  image5: {
    height: 210,
    width: 300,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20,
    alignItems: 'center',
  },

  imagesLabel:{
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'italic',
  },

  TILabel:{
    fontWeight: 'bold',
    textAlign: 'center',

  },
  
  input3: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 7,
    margin: 10,
    width: 300,
  },
  input4: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 7,
    margin: 10,
    width: 300,
  },
  textREQ:{
    fontSize: 14,
    textAlign: 'center',
},
uState: {
    textAlign: 'left',
},

});

export default HomePage;