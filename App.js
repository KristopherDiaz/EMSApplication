import React from 'react';
import HomePage from './screens/Homescreen';
import RECdetails from './screens/RODRIGUEZ EC';
import KVNHSdetails from './screens/KVNHS';
import KVSHSdetails from './screens/KVSHS';
import BESdetails from './screens/BES';
import SJESdetails from './screens/SJES';

//navigation

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Homescreen" component={HomePage} />
        <Stack.Screen 
        name="RODRIGUEZ EC" component={RECdetails} />
        <Stack.Screen 
        name="KVNHS" component={KVNHSdetails} />
        <Stack.Screen 
        name="KVSHS" component={KVSHSdetails} />
        <Stack.Screen 
        name="BES" component={BESdetails} />
        <Stack.Screen 
        name="SJES" component={SJESdetails} />
      </Stack.Navigator>
    </NavigationContainer>

  );

};
export default App;
