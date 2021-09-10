import React from 'react';
import {NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
 
import Estacao from './pages/Estacao';
import Horario from './pages/Horario';
import Sentido from './pages/Sentido';
 
import Drawer from './drawer.js';
 import Anunciantes from './pages/Anunciantes';

 
const AppStack = createStackNavigator();

 

export default function Routes(){
    
    return(
        
        <NavigationContainer>
    
            <AppStack.Navigator screenOptions={{headerShown:false}} >
                
                <AppStack.Screen name='Drawer' component={Drawer} />
                <AppStack.Screen name='Home' component={Home} />
                <AppStack.Screen name='Estacao' component={Estacao} />
                <AppStack.Screen name='Horario' component={Horario} />
                <AppStack.Screen name='Sentido' component={Sentido} />
                <AppStack.Screen name='Anunciantes' component={Anunciantes} />
               
               
            </AppStack.Navigator>

        </NavigationContainer>


    );
}