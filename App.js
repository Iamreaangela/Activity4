import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Screen1 from './screen/Screen1';
import Screen2 from './screen/Screen2';
import Screen3 from './screen/Screen3';
import Screen4 from './screen/Screen4';
import Screen5 from './screen/Screen5';
import Screen6 from './screen/Screen6';
import Screen7 from './screen/Screen7';
import Screen8 from './screen/Screen8';
import Screen9 from './screen/Screen9';
import Screen10 from './screen/Screen10';
import Screen11 from './screen/Screen11';
import Screen12 from './screen/Screen12';
import Screen13 from './screen/Screen13';
import Screen14 from './screen/Screen14';
import Screen15 from './screen/Screen15';
import Profile from './screen/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PaperProvider } from 'react-native-paper';
const Stack = createStackNavigator();


const Tab = createMaterialTopTabNavigator();
import { Appbar } from 'react-native-paper';

function MyTabs() {
  return (

    <Tab.Navigator>
    <Tab.Screen name="Home" component={Screen1} />
    <Tab.Screen name="Web" component={Profile} />
  </Tab.Navigator>

  );
}
export default function App() {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');
  return (
    <NavigationContainer>
     <PaperProvider>
     <Appbar.Header>
     <Appbar.Action onPress={_goBack} icon="menu" /> 
      <Appbar.Content title="React Native" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
     
    </Appbar.Header>
     <Stack.Navigator   screenOptions={{
        headerStyle: {
          backgroundColor: '#f3edf7',
        },
        headerTintColor: 'black', // Change the text color of the header buttons
        headerTitleStyle: {
          fontWeight: 'bold', // You can customize other text styles here
        },
      }}>
      <Stack.Screen name="Main Menu" component={MyTabs}   options={{ headerShown: false }} />
      <Stack.Screen name="Avatar" component={Screen2} options={{ headerShown: false }} />
      <Stack.Screen name="Badge" component={Screen3} options={{ headerShown: false }} />
      <Stack.Screen name="Banner" component={Screen4} options={{ headerShown: false }}/>
      <Stack.Screen name="Button" component={Screen5} options={{ headerShown: false }} />
      <Stack.Screen name="Card" component={Screen6} options={{ headerShown: false }}/>
      <Stack.Screen name="Chip" component={Screen7} options={{ headerShown: false }}/>
      <Stack.Screen name="DataTable" component={Screen8} options={{ headerShown: false }}/>
      <Stack.Screen name="Dialog" component={Screen9} options={{ headerShown: false }}/>
      <Stack.Screen name="Divider" component={Screen10} options={{ headerShown: false }}/>
      <Stack.Screen name="HelperText" component={Screen11} options={{ headerShown: false }}/>
      <Stack.Screen name="List" component={Screen12} options={{ headerShown: false }}/>
      <Stack.Screen name="Menu" component={Screen13} options={{ headerShown: false }}/>
      <Stack.Screen name="Segmented" component={Screen14} options={{ headerShown: false }}/>
      <Stack.Screen name="TextInput" component={Screen15} options={{ headerShown: false }}/>
    </Stack.Navigator>
    </PaperProvider>
    </NavigationContainer>
  );
}


