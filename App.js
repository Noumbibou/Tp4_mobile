//import { View, Text, Button } from 'react-native'; 
//import { Ionicons } from '@expo/vector-icons';
//import HomeScreen from './screens/HomeScreen'; 
//import DetailsScreen from './screens/DetailsScreen'; 
//import { NavigationContainer } from '@react-navigation/native'; 
//import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
//import SettingsScreen from './screens/SettingsScreen'; 
//import AppBar from './screens/AppBar';
//import AuthProvider, { AuthContext } from './context/AuthContext';
//import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'; 
//import LoginScreen from './screens/LoginScreen';
//import { useContext } from 'react';
//import AppDrawer from './navigation/AppDrawer';
//import AppStack from './navigation/AppStack';
//const Stack = createNativeStackNavigator(); 
//const Tab = createBottomTabNavigator(); 
//import React from 'react'; 
//
//
//function HomeStack() { 
//  return ( 
//    <Stack.Navigator screenOptions={{ headerShown: false }}> 
//      <Stack.Screen  name="Accueil"  component={HomeScreen}  options={{ 
//        headerStyle: { backgroundColor: '#007AFF' },    headerTintColor: '#fff',    headerTitleStyle: { 
//        fontWeight: 'bold' }, }} 
//      />  
//      <Stack.Screen  name="Details"  component={DetailsScreen}  options={{ title: 'Mes Détails Personnalisés' }} 
//      />  
//    </Stack.Navigator> 
//  );
//} 
//
//function RootNavigator() { 
// const { user } = useContext(AuthContext); 
// 
// return user ? <AppDrawer /> : <LoginScreen />; 
//} 
//// --- Navigation par onglets --- 
//export default function App() { 
//  return (
//    <AuthProvider>
//      <SafeAreaProvider>  
//        <NavigationContainer> 
//          <RootNavigator/>
//          <SafeAreaView style={{ backgroundColor: '#007AFF' }}> 
//              <AppBar />  
//            </SafeAreaView>
//          <Tab.Navigator 
//            screenOptions={{ 
//              headerShown: false,          
//              // cacher le header 
//              tabBarActiveTintColor: 'blue', // couleur de l’onglet actif 
//              tabBarInactiveTintColor: 'gray', // couleur de l’onglet inactif 
//              tabBarStyle: { backgroundColor: '#f0f0f0' }, // style de la barre 
//              tabBarLabelStyle: { fontSize: 14 }, // style du texte 
//            }} 
//          > 
//          <Tab.Screen  name="Maison"  component={HomeStack}  options={{ tabBarIcon: ({ color, size 
//              }) => (  <Ionicons name="home" size={size} color={color} />     ), 
//              }} /> 
//              <Tab.Screen name="Paramètres" component={SettingsScreen} options={{ tabBarIcon: ({ 
//              color,    size }) => ( <Ionicons name="settings" size={size} color={color} />  ), 
//              }}  
//          /> 
//          </Tab.Navigator> 
//        </NavigationContainer> 
//      </SafeAreaProvider> 
//    </AuthProvider> 
//
//  ); 
//}
import { NavigationContainer } from "@react-navigation/native"; 
import AuthProvider, { AuthContext } from "./context/AuthContext"; 
import AppDrawer from "./navigation/AppDrawer"; 
import LoginScreen from "./screens/LoginScreen"; 
import { useContext } from "react"; 
 
function RootNavigator() { 
 const { user } = useContext(AuthContext); 
 
 return user ? <AppDrawer /> : <LoginScreen />; 
} 
 
export default function App() { 
 return ( 
   <AuthProvider> 
     <NavigationContainer> 
       <RootNavigator /> 
     </NavigationContainer> 
   </AuthProvider> 
 ); 
} 