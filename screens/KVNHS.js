import {View, ScrollView, Image, Text, StyleSheet } from 'react-native';
import React from 'react';


const KVNHSdetails = () => {
    return (
      <View style={styles.container}> 

        <Text style={styles.title}>KASIGLAHAN VILLAGE NATIONAL HIGH SCHOOL</Text>

        <ScrollView>
        <Image style={styles.image} source={require('../assets/4.jpg')}></Image>
        <Text style={styles.txtloc}>Location:</Text><Text style={{fontSize:20, marginLeft: 10,}}>Kasiglahan Village National High School, Rodriguez (Montalban), Rizal</Text>
        <Text style={styles.txtcapa}>Total Capacity:</Text><Text style={{fontSize:20, marginLeft: 10,}}>6000</Text>
        <Text style={styles.txtnum}>Contact Number:</Text><Text style={{fontSize:20, marginLeft: 10,}}>09321654798</Text>
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

export default KVNHSdetails;