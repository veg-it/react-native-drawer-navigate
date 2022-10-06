import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Commands
// npm install @react-navigation/native
// expo install react-native-screens react-native-safe-area-context
// npm install @react-navigation/native-stack
// npm install @react-navigation/drawer
// expo install react-native-gesture-handler react-native-reanimated

// function HomeScreen() {
function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title='Go'
      />
      <StatusBar style="auto" />
    </View>
  )
}

function NotificationsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Notifications</Text>
      <Button
        onPress={() => navigation.navigate('Home')}
        title='Back'
      />
      <StatusBar style="auto" />
    </View>
  )
}
// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={HomeScreen} />
        <Drawer.Screen name='Notifications' component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name='Home' component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
