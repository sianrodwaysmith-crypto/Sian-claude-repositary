import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts, DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import PrivacyScreen from './src/screens/PrivacyScreen';
import TermsScreen from './src/screens/TermsScreen';

export type RootStackParamList = {
  Home: undefined;
  Privacy: undefined;
  Terms: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const screenOptions = {
  headerStyle: { backgroundColor: '#0d0d0d' },
  headerTintColor: '#c9b99a',
  headerTitleStyle: { fontFamily: 'DMSerifDisplay_400Regular' },
  cardStyle: { backgroundColor: '#0d0d0d' },
};

function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.home}>
      <Text style={styles.homeTitle}>Morning Briefing</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Privacy')}>
        <Text style={styles.link}>Privacy Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Terms')}>
        <Text style={styles.link}>Terms of Service</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({ DMSerifDisplay_400Regular });

  if (!fontsLoaded) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color="#c9b99a" />
      </View>
    );
  }

  const linking = {
    prefixes: [],
    config: {
      screens: {
        Home: '',
        Privacy: 'privacy',
        Terms: 'terms',
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <StatusBar style="light" />
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Morning Briefing' }} />
        <Stack.Screen name="Privacy" component={PrivacyScreen} options={{ title: 'Privacy Policy' }} />
        <Stack.Screen name="Terms" component={TermsScreen} options={{ title: 'Terms of Service' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: '#0d0d0d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  home: {
    flex: 1,
    backgroundColor: '#0d0d0d',
    padding: 28,
    justifyContent: 'center',
  },
  homeTitle: {
    fontFamily: 'DMSerifDisplay_400Regular',
    fontSize: 36,
    color: '#f5f0e8',
    marginBottom: 40,
  },
  link: {
    fontSize: 15,
    color: '#c9b99a',
    marginBottom: 16,
    textDecorationLine: 'underline',
  },
});
