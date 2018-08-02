import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Colors from "../constants/Colors";
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import CalculatorScreen from '../screens/CalculatorScreen';
import SettingsScreen from '../screens/SettingsScreen';
import HistoryScreen from '../screens/HistoryScreen';
import SiUnitsScreen from "../screens/SiUnitsScreen";
import DerivedUnitsScreen from "../screens/DerivedUnitsScreen";

import ampereScreen from "../screens/SiUnits/ampereScreen";
import candelaScreen from "../screens/SiUnits/candelaScreen";
import kelvinScreen from "../screens/SiUnits/kelvinScreen";
import kilogramScreen from "../screens/SiUnits/kilogramScreen";
import meterScreen from "../screens/SiUnits/meterScreen";
import moleScreen from "../screens/SiUnits/moleScreen";
import secondScreen from "../screens/SiUnits/secondScreen";
import NavButton from "../components/NavButton";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Main',
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
  SiUnits: {
    screen: SiUnitsScreen,
    navigationOptions: {
      headerLeft: props => <NavButton iconName={"ios-arrow-back"} {...props} />,
      headerTitle: "기본 단위계(SI)",
      headerTitleStyle: {
        color: "#2171b3",
        fontWeight: "bold"
      }
    }
  },
  meter: {
    screen: meterScreen,
    navigationOptions: {
      headerLeft: props => <NavButton iconName={"ios-arrow-back"} {...props} />,
      headerTitle: "길이(m, Meter)",
      headerTitleStyle: {
        color: "#2171b3",
        fontWeight: "bold"
      }
    }
  },
  kilogram: {
    screen: kilogramScreen,
    navigationOptions: {
      headerLeft: props => <NavButton iconName={"ios-arrow-back"} {...props} />,
      headerTitle: "무게(kg, Kilogram)",
      headerTitleStyle: {
        color: "#2171b3",
        fontWeight: "bold"
      }
    }
  },
  second: {
    screen: secondScreen,
    navigationOptions: {
      headerLeft: props => <NavButton iconName={"ios-arrow-back"} {...props} />,
      headerTitle: "시간(s, Second)",
      headerTitleStyle: {
        color: "#2171b3",
        fontWeight: "bold"
      }
    }
  },
  ampere: {
    screen: ampereScreen,
    navigationOptions: {
      headerLeft: props => <NavButton iconName={"ios-arrow-back"} {...props} />,
      headerTitle: "전류(A, Ampere)",
      headerTitleStyle: {
        color: "#2171b3",
        fontWeight: "bold"
      }
    }
  },
  kelvin: {
    screen: kelvinScreen,
    navigationOptions: {
      headerLeft: props => <NavButton iconName={"ios-arrow-back"} {...props} />,
      headerTitle: "온도(K, Kelvin)",
      headerTitleStyle: {
        color: "#2171b3",
        fontWeight: "bold"
      }
    }
  },
  mole: {
    screen: moleScreen,
    navigationOptions: {
      headerLeft: props => <NavButton iconName={"ios-arrow-back"} {...props} />,
      headerTitle: "물질량(mol, Mole)",
      headerTitleStyle: {
        color: "#2171b3",
        fontWeight: "bold"
      }
    }
  },
  candela: {
    screen: candelaScreen,
    navigationOptions: {
      headerLeft: props => <NavButton iconName={"ios-arrow-back"} {...props} />,
      headerTitle: "광도(cd, Candela)",
      headerTitleStyle: {
        color: "#2171b3",
        fontWeight: "bold"
      }
    }
  },
},

);

CalculatorStack.navigationOptions = {
  tabBarLabel: 'Calculator',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-calculator${focused ? '' : '-outline'}` : 'md-calculator'}
    />
  ),
};


const HistoryStack = createStackNavigator({
  History: HistoryScreen,
});

HistoryStack.navigationOptions = {
  tabBarLabel: 'Histroy',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-list-box${focused ? '' : '-outline'}` : 'md-list-box'}
    />
  ),
};



const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: "About",
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
  HistoryStack,
  SettingsStack,
});

