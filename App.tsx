import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calculator from './src/screens/calculator';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Calculator" component={Calculator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


