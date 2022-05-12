import Home from "./screen/Home";
import Slides from "./screen/Slides";
import Start from "./screen/Start";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            // options={{ title: "Home" }}
          />
          <Stack.Screen
            name="Bike Inspection"
            component={Slides}
            // options={{ title: "Bike Inspection" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
