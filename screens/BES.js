import {View, ScrollView, Image, Text, StyleSheet } from 'react-native';
import React from 'react';


const BESdetails = () => {
    return (
      <View> 

        <Text style={styles.title}>BURGOS ELEMENTARY SCHOOL</Text>

        <ScrollView>
        <Image style={styles.image} source={require('../assets/6.png')}></Image>
        <Text style={styles.txtloc}>Location:</Text><Text style={{fontSize:20, marginLeft: 10,}}>90 A. Mabini St, Rodriguez, 1860 Rizal</Text>
        <Text style={styles.txtcapa}>Total Capacity:</Text><Text style={{fontSize:20, marginLeft: 10,}}>3000</Text>
        <Text style={styles.txtnum}>Contact Number:</Text><Text style={{fontSize:20, marginLeft: 10,}}>09535852172</Text>
        </ScrollView>
      </View>
    );
  };
  
const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
  },
  image: {
    height: 300,
    width: 350,
    marginTop: 10,
    borderRadius: 20,
    marginLeft: 30,
    textAlign:'center'

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

export default BESdetails;