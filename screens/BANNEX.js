import {View, ScrollView, Image, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import React from 'react';


const Bannexdetails = () => {
    const handleLocationClick= () => {
        const url = 'https://maps.app.goo.gl/9uSEvFnFTktMobmR8';
          Linking.openURL(url).catch((error) => console.error('Error opening URL: ', error));
          };
    return (
      <View style={styles.container}> 

        <Text style={styles.title}>SOUTHVILLE 8B BARANGAY ANNEX</Text>
        <ScrollView>
        <Image style={styles.image} source={require('../assets/BANNEX.jpg')}></Image>
        <Text style={{
          fontSize: 8,
          fontStyle: 'italic',
          textAlign: 'center'
         }}>https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=uTJ0keacQVsqthcgtI1miA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=244.91553&pitch=0&thumbfov=100</Text>

        <Text style={styles.txtloc}>Location:</Text><Text style={{fontSize:20, marginLeft: 10,}}>SOUTHVILLE8B/ Q42W+QVF, Rodriguez, Rizal</Text>
        
        <TouchableOpacity onPress={handleLocationClick}>
        <Image
                style={{
                height: hp('10%'), 
                width: wp('20%'),
                alignSelf: 'center'
            }} source={require('../assets/map.png')}>
         </Image>
         </TouchableOpacity>

        <Text style={styles.txtcapa}>Total Capacity:</Text><Text style={{fontSize:20, marginLeft: 10,}}></Text>
        <Text style={styles.txtnum}>Contact Number:</Text><Text style={{fontSize:20, marginLeft: 10,}}>09565585734</Text>
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

export default Bannexdetails;