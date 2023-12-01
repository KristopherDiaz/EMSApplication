import {View, ScrollView, Image, Text, StyleSheet, Dimensions, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const MGYMDETAILS = () => {
    const handleLocationClick= () => {
        const url = 'https://maps.app.goo.gl/7s6VVH1a8WGBMQ1r9';
          Linking.openURL(url).catch((error) => console.error('Error opening URL: ', error));
          };
    return (
      <View style={styles.container}> 


        <Text style={styles.title}>MUNICIPAL GYMNASIUM</Text>

        <ScrollView>
       
        <Image style={styles.image} source={require('../assets/gymna.png')}></Image>
        <Text style={styles.txtloc}>Location:</Text><Text style={{fontSize:20, marginLeft: 10,}}>MUNICIPAL GYMNASIUM</Text>
      
      <TouchableOpacity onPress={handleLocationClick}>
      <Image
        style={{
        height: hp('10%'), 
        width: wp('20%'),
        alignSelf: 'center'
       }}
         source={require('../assets/location.png')}></Image>
         </TouchableOpacity>
        <Text style={styles.txtcapa}>Total Capacity:</Text><Text style={{fontSize:20, marginLeft: 10,}}>500</Text>
        <Text style={styles.txtnum}>Contact Number:</Text><Text style={{fontSize:20, marginLeft: 10,}}>09123456789</Text>
      
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
    height: hp('25%'), 
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

export default MGYMDETAILS;