import * as React from 'react';

import Film from '../containers/film/film';
import Home from '../containers/home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export enum ROUTES_NAMES {
  Home = "Home",
  Film = "Film"
}

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ROUTES_NAMES.Home}>
        <Stack.Screen options={{
          headerTitle: 'Star Wars',
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: 'black',
          }
        }} name={ROUTES_NAMES.Home} component={Home} />
        <Stack.Screen options={{
          headerTitle: 'Detail of Movie',
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: 'black',
          }
        }} name={ROUTES_NAMES.Film} component={Film} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;