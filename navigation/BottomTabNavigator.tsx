import { Entypo, EvilIcons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import AlbumPage from '../screens/Album';
import HomeScreen from '../screens/Home';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();
const { Navigator, Screen } = createStackNavigator<TabOneParamList>();
const TabTwoStack = createStackNavigator<TabTwoParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) =>
            <Entypo name="home" size={30} color={color} style={{ marginBottom: -3 }} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) =>
            <EvilIcons name="search" size={30} color={color} style={{ marginBottom: - 3 }} />,
        }}
      />
      <BottomTab.Screen
        name="Your Library"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) =>
            <MaterialCommunityIcons name="library-music-outline" size={30} color={color} style={{ marginBottom: - 3 }} />,
        }}
      />
      <BottomTab.Screen
        name="Premium"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) =>
            <FontAwesome5 name="spotify" size={30} color={color} style={{ marginBottom: - 3 }} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabOneNavigator() {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={HomeScreen}
        options={{ headerTitle: 'Home' }}
      />
      <Screen
        name="Album"
        component={AlbumPage}
        options={{ headerTitle: 'Album' }}
      />
    </Navigator>
  );
}

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}
