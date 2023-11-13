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
  Linking,
  Alert,
  ImageBackground
} from 'react-native';




const HomePage = ({navigation}) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: '', 
      headerShown: false, 
    });
  }, [navigation]);

    // para sa malupit na image with GPS
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
        Contact: '',
      })
  
      function handleChange(name, value) {
        setInput(prevInput => ({
          ...prevInput,
          [name]: value
        }));
      }
      
    // for request rescues
  function handleClick(){
    const newRequest = {
        Address: input.Address,
        Contact: input.Contact
    }
    axios.post('http://192.168.1.9:3001/create', newRequest)
  }


  return (
    // for changing tabs
    <View style={styles.container}>

      <ImageBackground source={require('../assets/bg.png')}
        resizeMode= 'cover'
       style={styles.image55}>

         
          <View style={styles.tabContent}>
            {activeTab === 'Tab1' && (

              // HOMEPAGE && EVACUATION DETAILS
              <ScrollView>
         <View>
                  <Text style={styles.emsTITLE}>Evacuation Management System </Text>  
                  <Text style={styles.emsParagraph}>"In times of crisis, evacuation is our best defense. Stay calm, follow instructions, and evacuate to safety."{'\n'}</Text>
                  <Image style={styles.image}source={require('../assets/fire-evacuation-plan.jpg')}></Image>
                  <Text style={styles.imgReferences}>Image Reference: https://www.cityfire.co.uk/news/how-to-create-a-fire-evacuation-plan/</Text>
                  
                  
                  <Text style={styles.emsABOUT}>{'\n'}{'\n'}{'\n'}About Evacuation Management</Text>
                  <Text style={styles.emssource}>Your Source for Crisis Preparedness</Text>
                  <Text style={styles.service}>{'\n'}At Evacuation Management, we understand that in times of crisis, evacuation is our best defense. That's why we provide expert guidance and support to help you and your organization stay safe. Our team of experienced professionals is committed to ensuring that you are prepared for any emergency. 
                  We offer a range of services including risk assessments, emergency planning, 
                  and crisis management training. Let us help you protect what matters most{'\n'}</Text>
                  <Image style={styles.image}source={require('../assets/194866.jpg')}></Image>       
                  <Text style={styles.imgReferences}>Image Reference: https://www.nippon.com/en/in-depth/d00544/</Text>
              
                  <Text style={styles.emssource}>{'\n'}{'\n'}Our Services</Text>
                  <Text style={styles.service}>At Evacuation Management, we offer a range of services to help you 
                  and your organization prepare for any emergency. Here are some of the services we provide</Text>
                  <Text style={styles.emsParagraph1}>{'\n'}Risk Assessments</Text>
                  <Text style={styles.service}>{'\n'}  Our team of experts will assess your organization's vulnerabilities and provide recommendations to mitigate risk.</Text>
                  <Image style={styles.image}source={require('../assets/builiding-evacuations.jpg')}></Image>       
                  <Text style={styles.imgReferences}>Image Reference: https://www.reminetwork.com/articles/safe-protocols-high-rise-building-evacuations/</Text>
                
                  
                  <Text style={styles.emsParagraph1}>{'\n'}Emergency Planning</Text>
                  <Text style={styles.service}>{'\n'}  We will work with you to create a comprehensive emergency plan 
                  tailored to your organization's needs.</Text>
                  <Image style={styles.image}source={require('../assets/ep.jpg')}></Image>       
                  <Text style={styles.imgReferences}>Image Reference: https://www.ishn.com/articles/112738-workplace-preparedness-planning-for-the-unexpected</Text>
                  
                  <Text style={styles.contact}>{'\n'}{'\n'}Contact us:{'\n'}09705818869</Text>
                  <Text style={styles.contact}>{'\n'}Located at:{'\n'}Rodriguez Rizal</Text>
              
         </View>
              </ScrollView>
            )}
    
            {activeTab === 'Tab2' && (
              // HOMEPAGE && EVACUATION DETAILS
              <ScrollView>
              <View>
                <Text style={styles.evaclistTitle}>List of Evacuation Sites {'\n'}</Text>
              </View>
                <View> 
                      <Text style={styles.imagesLabel}>RODRIGUEZ EVACUATION CENTER</Text>
                      <TouchableOpacity onPress={handleImageClick}>
                      <Image style={styles.image0}
                      source={require('../assets/3.jpg')}>
                      </Image></TouchableOpacity>
                      <Button title="Details" color = 'blue' style={{borderRadius: 10,}} onPress={() => navigation.navigate('RODRIGUEZ EC', {name: 'RECdetails'})} />
                     

                      <Text style={styles.imagesLabel}>{'\n'}KASIGLAHAN VILLAGE NATIONAL HIGH SCHOOL</Text>
                      <TouchableOpacity onPress={handleImageClick2}>
                      <Image style={styles.image2}
                        source={require('../assets/4.jpg')}>
                      </Image></TouchableOpacity><Button title="Details" color = 'blue' onPress={() => navigation.navigate('KVNHS', {name: 'KVNHSdetails'})} />
                      
                      
                      <Text style={styles.imagesLabel}>{'\n'}KASIGLAHAN SENIOR HIGH SCHOOL</Text>
                      <TouchableOpacity onPress={handleImageClick3}>
                      <Image style={styles.image3}
                        source={require('../assets/5.png')}>
                      </Image> 
                      </TouchableOpacity><Button title="Details" color = 'blue' onPress={() => navigation.navigate('KVSHS', {name: 'KVSHSdetails'})} />

                      <Text style={styles.imagesLabel}>{'\n'}BURGOS ELEMENTARY SCHOOL</Text>
                      <TouchableOpacity onPress={handleImageClick4}>
                      <Image style={styles.image4}
                        source={require('../assets/6.png')}>
                      </Image> 
                      </TouchableOpacity><Button title="Details" color = 'blue' onPress={() => navigation.navigate('BES', {name: 'BESdetails'})} />

                      <Text style={styles.imagesLabel}>{'\n'}SAN JOSE ELEMENTARY SCHOOL</Text>
                      <TouchableOpacity onPress={handleImageClick5}>
                      <Image style={styles.image5}
                        source={require('../assets/7.png')}>
                      </Image> 
                      </TouchableOpacity><Button title="Details" color = 'blue' onPress={() => navigation.navigate('SJES', {name: 'SJESdetails'})} />

                    </View>
              </ScrollView>
            )}
    
            {activeTab === 'Tab3' && (
              // FOR REQUESTING TAB/PAGE
            <View style={styles.reqtabContent}> 
                  <Image style={styles.reqImage}
                      source = {require('../assets/bglogo.png')}></Image>
                    <View>
                            <Text style={styles.TILabel}>Enter address:</Text>
                            <TextInput
                              value={input.Address}
                              onChangeText={(text) => handleChange('Address', text)}
                              style={styles.input3}/>

                            <Text style={styles.TILabel}>Enter Contact:</Text>
                            <TextInput 
                              value={input.Contact}
                              onChangeText={(text) => handleChange('Contact', text)}
                              keyboardType="numeric"
                              placeholder='+63'
                              style={styles.input3} />
                            <Button title="Send Request" color = 'blue' onPress={() => {handleClick(); createTwoButtonAlert();}}/>
                     </View>
            </View>
            )}
    
  
 </View>
    
       
              <View style={styles.tabDrawer}>
              
                      <TouchableOpacity
                        style={[styles.tab, activeTab === 'Tab1' && styles.activeTab]}
                        onPress={() => handleTabPress('Tab1')}
                      >
                      <Image style={styles.homeIMG}
                          source={require('../assets/home-page.png')}>
                      </Image>
                        <Text style={styles.tabText}>HOME</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={[styles.tab, activeTab === 'Tab3' && styles.activeTab]}
                        onPress={() => handleTabPress('Tab3')}
                      >
                        <Image style={styles.reqIMG}
                        source={require('../assets/medical-service.png')}>
                      </Image>
                        <Text style={styles.tabText}>REQUEST RESCUES</Text>
                      </TouchableOpacity>


                      <TouchableOpacity
                        style={[styles.tab, activeTab === 'Tab2' && styles.activeTab]}
                        onPress={() => handleTabPress('Tab2')}
                      >
                      <Image style={styles.listIMG}
                          source={require('../assets/list.png')}>
                      </Image>
                        <Text style={styles.tabText}>EVACUATION LIST</Text>
                      </TouchableOpacity>
            
              </View>

        </ImageBackground>
      </View>
 
  );
  
};


//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#fff',
  },
  evaclistTitle: {
    fontSize: 30,
    fontVariant: 'small-caps common-ligatures',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image55: {
    flex: 1,
    justifyContent: 'center',
  },
  reqtabContent: {
    alignItems: 'center',
  },
  phnNum: {
    fontSize: 15,
    paddingTop: 200,
    marginLeft: 15,
  },
  reqImage: {
    width: 300,
    height: 300,
    marginBottom: 50,
  },
  emsABOUT: {
    fontSize: 15,
    textAlign: 'center',
  },
  emsTITLE: {
    fontSize: 50,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    fontVariant: 'small-caps common-ligatures',
  },
  service: {
    fontSize: 15,
    textAlign: 'justify',
  },
  emsParagraph: {
    fontSize: 18,
    textAlign: 'justify',
    fontStyle: 'italic',
  },
  emssource: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  emsParagraph1: {
    fontSize: 17,
    textAlign: 'justify',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  imgReferences: {
    fontSize: 10,
    fontStyle: 'italic',
  },
  listIMG: {
    width: 30,
    height: 30,
  },
  regIMG: {
    width: 30,
    height: 30,
  },
  reqIMG: {
    width: 43,
    height: 30,
  },
  homeIMG: {
    width: 32,
    height: 29,
  },
  regInput: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    margin: 10,
    alignItems: 'center',
    width: 300,
    marginTop: 5,
    borderRadius: 50,
  },
  tabDrawer: {
    flexDirection: 'row',
    borderBottomWidth: 0,
    paddingBottom: 15,
    backgroundColor: 'rgba(52, 52, 52, alpha)',
  },
  tab: {
    flex: 1,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    borderBottomColor: 'blue',
    borderRadius: 2,
    borderBottomWidth: 2,
  },
  tabText: {
    fontSize: 9,
    fontWeight: 'bold',
  },
  tabContent: {
    flex: 5,
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
    marginLeft: 10,
    alignItems: 'center',
  },
  image0: {
    height: 210,
    width: 300,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20,
    marginLeft: 10,
    alignItems: 'center',
  },
  image2: {
    height: 210,
    width: 300,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20,
    marginLeft: 10,
    alignItems: 'center',
  },
  image3: {
    height: 210,
    width: 300,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20,
    marginLeft: 10,
    alignItems: 'center',
  },
  image4: {
    height: 210,
    width: 300,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20,
    marginLeft: 10,
    alignItems: 'center',
  },
  image5: {
    height: 210,
    width: 300,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20,
    marginLeft: 10,
    alignItems: 'center',
  },
  imagesLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  TILabel: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input3: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 7,
    margin: 10,
    width: 300,
    borderRadius: 50,
  },
  input4: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 7,
    margin: 10,
    width: 300,
  },
  textREQ: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default HomePage;