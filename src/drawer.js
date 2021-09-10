import React from 'react';
import {View} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './pages/Home';
import Mensagens from './pages/Reflexao';
import Creditos from './pages/Creditos';
import Politica from './pages/Politica';
import Classificados from './pages/Classificados';
import CustomDrawer from '../src/componentDrower'; 
 


const Drawers = createDrawerNavigator();
  
export default function Drawer(){
    return(
            <View style={{flexGrow: 2 }}>
                  
             <Drawers.Navigator 
            initialRouteName="Home"
            drawerContentOptions={{
                activeBackgroundColor:'#5973FF', 
                activeTintColor:'#FFF',
            }}
             drawerContent={(props) => <CustomDrawer {...props} />}
             
            >
                 
                <Drawers.Screen name="Home" component={Home} />
                <Drawers.Screen name="Inspiração" component={Mensagens} />
                <Drawers.Screen name="Classificados" component={Classificados} />
                <Drawers.Screen name="Politica de Privacidade" component={Politica} />
                
                <Drawers.Screen name="Creditos" component={Creditos} />
            
             </Drawers.Navigator>
              
             </View>
        

    );
}