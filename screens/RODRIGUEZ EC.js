import {View, ScrollView, Image, Text, StyleSheet, Dimensions, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';



const RECdetails = () => {

  const handleLocationClick= () => {
    const url = 'https://goo.gl/maps/wLokbxuYFiDeHbsz7';
      Linking.openURL(url).catch((error) => console.error('Error opening URL: ', error));
      };

    return (
      <View style={styles.container}> 

        <Text style={styles.title}>RODRIGUEZ EVACUATION CENTER</Text>

        <ScrollView>
       
        <Image style={styles.image} source={require('../assets/3.jpg')}></Image>
        <Text style={{
          fontSize: 8,
          fontStyle: 'italic',
          textAlign: 'center'
         }}>https://upload.wikimedia.org/wikipedia/commons/8/8d/Permanent_Evacuation_Center_in_Rodriguez%2C_Rizal_Province%2C_Philippines.jpg</Text>
        
        <Text style={styles.txtloc}>Location:</Text><Text style={{fontSize:20, marginLeft: 10,}}> P4WH+2W8, Rodriguez, Rizal</Text>
        <TouchableOpacity onPress={handleLocationClick}>
      <Image
        style={{
        height: hp('12%'), 
        width: wp('25.5%'),
        alignSelf: 'center'
       }}
       source={require('../assets/map.png')}></Image>
      </TouchableOpacity>
        <Text style={styles.txtcapa}>Total Capacity:</Text><Text style={{fontSize:20, marginLeft: 10,}}></Text>
        <Text style={styles.txtnum}>Contact Number:</Text><Text style={{fontSize:20, marginLeft: 10,}}></Text>
        
        </ScrollView>
      </View>
    );
  };
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe7d3'
  },
  title: {
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
  },
  image: {
      height: hp('20%'), 
      width: wp('80%'),
      marginTop: 10,
      marginBottom: 10,
      alignSelf: 'center'
  },
  txtloc: {
    fontSize: 20,
    marginTop: 20,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  txtcapa: {
    fontSize: 20,
    marginTop: 20,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  txtnum: {
    fontSize: 20,
    marginTop: 20,
    marginLeft: 10,
    fontWeight: 'bold',
  },
});

export default RECdetails;