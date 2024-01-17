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
  ImageBackground,
  Dimensions
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


const { width, height } = Dimensions.get('window');

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
        const url = 'https://maps.app.goo.gl/ZHbX7vvqJCeSbUxZ9';
          Linking.openURL(url).catch((error) => console.error('Error opening URL: ', error));
          };
          const handleImageClick3 = () => {
            const url = 'https://maps.app.goo.gl/nYHpv92porMe3U1CA';
              Linking.openURL(url).catch((error) => console.error('Error opening URL: ', error));
              };
              const handleImageClick4 = () => {
                const url = 'https://maps.app.goo.gl/9uSEvFnFTktMobmR8';
                  Linking.openURL(url).catch((error) => console.error('Error opening URL: ', error));
                  };


    const createTwoButtonAlert = () =>
        Alert.alert('Request', 'Sent!');
        
        const createTwoButtonDislaimer= () =>
        Alert.alert('Disclaimer', 'This type of request is only use for transportation request specially for persons with disabilities and senior citizen. It is not functions as a rescue request. This request may become delay. For emergency request please contact this specified contact number 09187883325.');

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
    axios.post('http://192.168.29.210:3001/create', newRequest)
  }


  return (
    // for changing tabs
    <View style={styles.container}>

      <ImageBackground
        source={require('../assets/bg.png')}
        resizeMode="cover"
        style={[styles.imageBackground, { width, height }]} 
        >

         
          <View style={styles.tabContent}>
            {activeTab === 'Tab1' && (

              // HOMEPAGE
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
                  <Text style={styles.service}>This system is made to support the RA 10121 in a technological way. This system is most efficient in a managing pre-emtive evacuation and planning. At Evacuation Management, we offer a range of services to help you and your organization prepare for any emergency. Here are some of the services we provide </Text>
                  <Text style={styles.emsParagraph1}>{'\n'}Risk Assessments</Text>
                  <Text style={styles.service}>{'\n'}  Our team of experts will assess your organization's vulnerabilities and provide recommendations to mitigate risk.</Text>
                  <Image style={styles.image}source={require('../assets/builiding-evacuations.jpg')}></Image>       
                  <Text style={styles.imgReferences}>Image Reference: https://www.reminetwork.com/articles/safe-protocols-high-rise-building-evacuations/</Text>
                
                  
                  <Text style={styles.emsParagraph1}>{'\n'}Emergency Planning</Text>
                  <Text style={styles.service}>{'\n'}  We will work with you to create a comprehensive emergency plan 
                  tailored to your organization's needs.</Text>
                  <Image style={styles.image}source={require('../assets/ep.jpg')}></Image>       
                  <Text style={styles.imgReferences}>Image Reference: https://www.ishn.com/articles/112738-workplace-preparedness-planning-for-the-unexpected</Text>
                  
                  <Text>{'\n'}{'\n'}Contact us:{'\n'}09187883325</Text>
                  <Text>{'\n'}Located at:{'\n'}Rodriguez Rizal</Text>
              
         </View>
              </ScrollView>
            )}
    
            {activeTab === 'Tab2' && (
              // EVACUATION SITES DETAILS
              <ScrollView>
              <View>
                <Text style={styles.evaclistTitle}>List of Evacuation Sites {'\n'}</Text>
              </View>
                <View> 
                      <Text style={styles.imagesLabel}>RODRIGUEZ EVACUATION CENTER</Text>
                      <TouchableOpacity onPress={handleImageClick}>
                      <Image
                        style={{
                          height: hp('20%'), 
                          width: wp('80%'),
                          marginTop: 10,
                          marginBottom: 10,
                          alignItems: 'center',
                        }}
                        source={require('../assets/3.jpg')}
                      /></TouchableOpacity>
                      <Text style={styles.styleDetails} onPress={() => navigation.navigate('RODRIGUEZ EC', {name: 'RECdetails'})}>Details</Text>
                     
                      <Text style={styles.imagesLabel2}>SOUTHVILLE 8B BARANGAY ANNEX</Text>
                      <TouchableOpacity onPress={handleImageClick4}>
                      <Image
                        style={{
                          height: hp('20%'), 
                          width: wp('80%'), 
                          marginTop: 10,
                          marginBottom: 10,
                          alignItems: 'center',
                        }}
                        source={require('../assets/BANNEX.jpg')}
                      /></TouchableOpacity>
                      <Text style={styles.styleDetails} onPress={() => navigation.navigate('BANNEX', {name: 'Bannexdetails'})}>Details</Text>

                      <Text style={styles.imagesLabel0}>SAN ISIDRO BARANGAY HALL COVERED COURT</Text>
                      <TouchableOpacity onPress={handleImageClick2}>
                      <Image
                        style={{
                          height: hp('20%'), 
                          width: wp('80%'), 
                          marginTop: 10,
                          marginBottom: 10,
                          alignItems: 'center',
                        }}
                        source={require('../assets/bdrrmo.png')}
                      /></TouchableOpacity>
                      <Text style={styles.styleDetails} onPress={() => navigation.navigate('BDRMMO', {name: 'Bdrrmodetails'})}>Details</Text>


                      <Text style={styles.imagesLabel2}>MUNICIPAL GYMNASIUM</Text>
                      <TouchableOpacity onPress={handleImageClick3}>
                      <Image
                        style={{
                          height: hp('20%'), 
                          width: wp('80%'), 
                          marginTop: 10,
                          marginBottom: 10,
                          alignItems: 'center',
                        }}
                        source={require('../assets/gymna.png')}
                      /></TouchableOpacity>
                      <Text style={styles.styleDetails} onPress={() => navigation.navigate('MGYM', {name: 'MGYMDETAILS'})}>Details</Text>
                      
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
                            <Text style={styles.textSendReq} onPress={() => {handleClick(); createTwoButtonAlert();}}>Send Request</Text>
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
                        onPress={() => {handleTabPress('Tab3'); createTwoButtonDislaimer();}} 
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


//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#fff',
  },

  imageBackground: {
    justifyContent: 'center',
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
    height: hp('20%'), 
    width: wp('80%'), 
    marginTop: "20%",
    marginBottom: "50%",
    alignItems: 'center',
  },
  textSendReq:{
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10,
    color: '#002D62'
  },
  styleDetails:{
    fontSize: 18,
    marginTop: 5,
    color: '#002D62',
    textAlign: 'center'
  },
  emsABOUT: {
    fontSize: 15,
    textAlign: 'center',
  },
  emsTITLE: {
    fontSize: 30,
    fontVariant: 'small-caps common-ligatures',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: "20%"
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
    borderBottomWidth: 3,
    paddingBottom: 5,
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
    height: hp('25%'), 
    width: wp('80%'), 
    marginBottom: 10,
    alignItems: 'center',
  },
  imagesLabel0: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'italic',
    paddingTop: "5%"
  },
  imagesLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  imagesLabel2:{
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'italic',
    paddingTop: 20
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