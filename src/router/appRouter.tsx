import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen, DetailScreen, AddProductScreen} from '@screens/index';
import {RootStackParamList} from '@utils/interface/navigation.interface';
import {Header} from '@components/index';

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function AppRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'HomeScreen'}>
        <Stack.Screen
          options={{
            headerTitle: Header,
          }}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          name="DetailScreen"
          options={{headerTitle: Header, headerBackTitleVisible: false}}
          component={DetailScreen}
        />
        <Stack.Screen
          name="AddProductScreen"
          options={{headerTitle: Header, headerBackTitleVisible: false}}
          component={AddProductScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
