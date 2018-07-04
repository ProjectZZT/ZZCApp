import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';


import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import CalculatorScreen from '../screens/CalculatorScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
    Home: HomeScreen,
});

HomeStack.navigationOptions = {
    tabBarLabel: 'AppInfo',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={
          Platform.OS === 'ios'
            ? `ios-information-circle${focused ? '' : '-outline'}`
            : 'md-information-circle'
        }
      />
    ),
};
  
const CalculatorStack = createStackNavigator({
    Calculator: CalculatorScreen,
});
  
  CalculatorStack.navigationOptions = {
    tabBarLabel: 'Calculator',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? `ios-calculator${focused ? '' : '-outline'}` : 'md-calculator'}
      />
    ),
};
  
  const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
});
  
  SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
      />
    ),
};

export default createBottomTabNavigator({
    HomeStack,
    CalculatorStack,
    SettingsStack,
  });
