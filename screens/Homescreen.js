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
  Linking} from 'react-native';
import { StatusBar } from 'react-native';

// image with GPS
const HomePage = () => {

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

  const [activeTab, setActiveTab] = useState('Tab1');


  const handleTabPress = (tab) => {
    setActiveTab(tab);
  }; 
  
      const [input, setInput] = useState({
        Name: '', 
        Age: '',
        Address: '',
        Contact: ''
      })

  
  function handleChange(event){
    const {name, value } = event.target;
    setInput(prevInput => {
      return{
        ...prevInput,
        [name]: value
      }
    })

  }


  function handleClick(event){
    event.preventDefault();
    const newRequest = {
        Name: input.Name,
        Age: input.Age,
        Address: input.Address,
        Contact: input.Contact
      
    }
    axios.post('http://192.168.1.3:5000/create', newRequest)
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
            <Text style={styles.tabText}>FEATURES</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'Tab2' && styles.activeTab]}
            onPress={() => handleTabPress('Tab2')}
          >
            <Text style={styles.tabText}>REQUEST RESCUERS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'Tab3' && styles.activeTab]}
            onPress={() => handleTabPress('Tab3')}
          >
            <Text style={styles.tabText}>ABOUT</Text>
          </TouchableOpacity>
          <StatusBar style="auto"/>

        </View>
        
</SafeAreaView>

      {/* Calling the function for changing tabs */}

      <View style={styles.tabContent}>
          
        {activeTab === 'Tab1' && (
              <ScrollView>
                    <View> 
                      <Text style={styles.imagesLabel}>RODRIGUEZ EVACUATION CENTER</Text>
                      <TouchableOpacity onPress={handleImageClick}>
                      <Image style={styles.image}
                      source={require('../assets/3.jpg')}>
                      </Image></TouchableOpacity>
                     

                      <Text style={styles.imagesLabel}>{'\n'}KASIGLAHAN VILLAGE NATIONAL HIGH SCHOOL</Text>
                      <TouchableOpacity onPress={handleImageClick2}>
                      <Image style={styles.image2}
                        source={require('../assets/4.jpg')}>
                      </Image></TouchableOpacity>
                      
                      <Text style={styles.imagesLabel}>{'\n'}KASIGLAHAN SENIOR HIGH SCHOOL</Text>
                      <TouchableOpacity onPress={handleImageClick3}>
                      <Image style={styles.image3}
                        source={require('../assets/5.png')}>
                      </Image> 
                      </TouchableOpacity>

                      <Text style={styles.imagesLabel}>{'\n'}BURGOS ELEMENTARY SCHOOL</Text>
                      <TouchableOpacity onPress={handleImageClick4}>
                      <Image style={styles.image4}
                        source={require('../assets/6.png')}>
                      </Image> 
                      </TouchableOpacity>

                      <Text style={styles.imagesLabel}>{'\n'}SAN JOSE ELEMENTARY SCHOOL</Text>
                      <TouchableOpacity onPress={handleImageClick5}>
                      <Image style={styles.image5}
                        source={require('../assets/7.png')}>
                      </Image> 
                      </TouchableOpacity>

                    </View>

              </ScrollView>
        )}
        
        {activeTab === 'Tab2' && (
      <View>
          <ScrollView>
            <Text style={styles.TILabel}>Enter name:</Text>
            <TextInput  onChange={handleChange}
            value = {input.Name}
            style={styles.input1}
            placeholder='ex. Juan Dela Cruz'
       
            />
          
             <Text style={styles.TILabel}>Enter age:</Text>
                <TextInput onChange={handleChange}
                
                  style={styles.input2}
                  placeholder='ex. 40'
                  
                  />

                    <Text style={styles.TILabel}>Enter address:</Text>
                       <TextInput onChange={handleChange}
                       
                        style={styles.input3}
                        placeholder='ex. Blk1 Lot999'
                        
                        />

                          <Text style={styles.TILabel}>Enter contact #:</Text>
                            <TextInput onChange={handleChange}
                              style={styles.input4}
                              placeholder='ex. 09123456789'
                         
                              />

                <Button title="Send Request" color = '#7574cf' onPress={handleClick}/>
           
                <Text>{'\n'}{'\n'}{'\n'}</Text>
                <Text style={styles.textREQ}>NOTE: THIS PAGE IS FOR REQUESTING RESCUERS ONLY!</Text>
                    
          </ScrollView>
      </View>
          
        )}
        {activeTab === 'Tab3' && (
          <View><ScrollView>
            <Text style={styles.MISSION}>MISSION</Text>
            <Text style={styles.Mpara}>
              Our mission is to ensure the safety and well-being of individuals, communities, and organizations through effective evacuation management. We are dedicated to providing comprehensive solutions and services that prioritize emergency preparedness, minimize risks, and facilitate efficient and secure evacuations during critical situations."
              Purpose{'\n'}
              </Text>

              <Text style={styles.PURPOSE}>PURPOSE</Text>
            <Text style={styles.Ppara}>
            we recognize the vital importance of emergency preparedness and the critical role it plays in saving lives and minimizing the impact of disasters. Our purpose is to empower individuals, businesses, and communities with the knowledge, tools, 
            and resources necessary to respond swiftly and effectively when faced with the need to evacuate."{'\n'}
              </Text>

              <Text style={styles.Imp}>IMPORTANCE OF EMERGENCY PREPAREDNESS</Text>
            <Text style={styles.Imppara}>
            Emergency preparedness is paramount as it enables proactive measures to mitigate risks and ensures a timely and organized response during crises. By investing in preparedness, individuals and organizations can minimize the potential loss of life, injuries, property damage, and disruption caused by emergencies."{'\n'}
            {'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>

            <Text>CONTACT US:{'\n'}</Text>
            <Text>Contact#: 09187883325</Text>
            <Text>Email: evacuation.managementSystem@gmail.com</Text>
            <Text>Facebook: EMS!</Text>
            </ScrollView>
          </View>
        )}
      </View>

    </View>
 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cccee3',
    position: 'relative',

  },
  MISSION: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Mpara: {
    textAlign: 'center',
    fontStyle: 'italic'
  },
  PURPOSE: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
Ppara:{
  textAlign: 'center',
  fontStyle: 'italic'
},

Imp:{
  fontSize: 25,
  fontWeight: 'bold',
  textAlign: 'center',
},
Imppara:{
  textAlign: 'center',
  fontStyle: 'italic'
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
    borderBottomWidth: 2,

  },
  tabText: {
    fontSize: 16,
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
    marginBottom: 20,
    borderRadius: 20,
    alignItems: 'center',
  },

  image2: {
    height: 210,
    width: 300,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 20,
    alignItems: 'center',
  },

  image3: {
    height: 210,
    width: 300,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 20,
    alignItems: 'center',
  },

  image4: {
    height: 210,
    width: 300,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  image5: {
    height: 210,
    width: 300,
    marginTop: 10,
    marginBottom: 20,
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
  
  input1: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 7,
    margin: 10,
    width: 300,
  },
  input2: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 7,
    margin: 10,
    width: 300,
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