import React from 'react';
// import LoginScreen from './AppReActNative/LoginScreen'; 
import Bai2 from './Bai2/Bai2_01';
import NotificationList from './Bai2/Bai2_02';
import BtBuoi5 from './Buoi5/BtBuoi5';
import ValidateForm from './Bai4/ValidateForm';
import home from './buoi8/home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from './btngay3-4/AuthScreen';
import BottomTabNavigator from './btngay3-4/BottomTabNavigator';
import { UserProvider } from './btngay3-4/UserContext';

const Stack = createStackNavigator();

const App = () => {
  // return <LoginScreen />;
  // return <Bai2 />;
  // return <NotificationList />;
  // return <BtBuoi5 />
  // return <ValidateForm />
  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator screenOptions={{ headerShown: false }}>
  //       <Stack.Screen name="login" component={ValidateForm}></Stack.Screen>
  //       <Stack.Screen name="home" component={home}></Stack.Screen>
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // )

  const Stack = createStackNavigator();

  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={AuthScreen} />
          <Stack.Screen name="Register" component={AuthScreen} />
          <Stack.Screen name="Explorer" component={BottomTabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;