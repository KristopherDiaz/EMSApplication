import {View, ScrollView, Image, Text, StyleSheet } from 'react-native';
import React from 'react';


const RECdetails = () => {
    return (
      <View style={styles.container}> 

        <Text style={styles.title}>RODRIGUEZ EVACUATION CENTER</Text>

        <ScrollView>
        <Image style={styles.image} source={require('../assets/3.jpg')}></Image>
        <Text style={styles.txtloc}>Location:</Text><Text style={{fontSize:20, marginLeft: 10,}}>Rodriguez Evacuation Center, P4WH+2W8, Rodriguez, Rizal</Text>
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
    height: 300,
    width: 350,
    marginTop: 10,
    borderRadius: 20,
    marginLeft: 30,

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