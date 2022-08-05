import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator,TabNavigator } from "./src/router/router";


const App =()=>{
  return(
<>

  <NavigationContainer>
    <TabNavigator/>
 

  </NavigationContainer>
</>
  )
}

export default App