import React from 'react';
// import LoginScreen from './AppReActNative/LoginScreen'; 
import Bai2 from './Bai2/Bai2_01';
import NotificationList from './Bai2/Bai2_02';
import BtBuoi5 from './Buoi5/BtBuoi5';
import ValidateForm from './Bai4/ValidateForm';
import home from './buoi8/home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  // return <LoginScreen />;
  // return <Bai2 />;
  // return <NotificationList />;
  // return <BtBuoi5 />
  // return <ValidateForm />
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" component={ValidateForm}></Stack.Screen>
        <Stack.Screen name="home" component={home}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;