import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import Details from './Component/Details';
import Main from './Component/main';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Discover'>
        <Stack.Screen
          name="Discover"
          component={Main}
          options={{
            headerTitle: () => (
              <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Discover</Text>
              </View>
            ),
            headerTitleAlign: 'center',
          }}
        />
                <Stack.Screen
          name="Beauty"
          component={Details}
          options={{
            headerTitle: () => (
              <View style={styles.headerContainer1}>
                <Text style={styles.headerTitle1}>Beauty</Text>
              </View>
            ),
            headerTitleAlign: 'left',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 90, // Increase the height as desired
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 35,
    color:'#262742'
  },
  headerTitle1: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    color:'#262742'
  },
});
