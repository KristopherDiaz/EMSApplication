import {View, ScrollView, Image, Text, StyleSheet } from 'react-native';
import React from 'react';


const SJESdetails = () => {
    return (
      <View> 

        <Text style={styles.title}>RODRIGUEZ EVACUATION CENTER</Text>

        <ScrollView>
        <Image style={styles.image} source={require('../assets/7.png')}></Image>
        <Text style={styles.txtloc}>Location:</Text><Text style={{fontSize:20, marginLeft: 10,}}>Hernandez Bldg, 40C Rodriguez Hwy, Rodriguez, 1860 Rizal</Text>
        <Text style={styles.txtcapa}>Total Capacity:</Text><Text style={{fontSize:20, marginLeft: 10,}}>3500</Text>
        <Text style={styles.txtnum}>Contact Number:</Text><Text style={{fontSize:20, marginLeft: 10,}}>09123456789</Text>
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

export default SJESdetails;