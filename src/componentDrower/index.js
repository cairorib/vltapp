import React from 'react';
import {View, Text,SafeAreaView,Image } from 'react-native';
import { DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer';
import linhaImg from '../assets/pessoas.jpg';
import logodrawer from '../assets/logodrawer.png';
import styles from '../componentDrower/styles.js'; 
import AppLoading   from 'expo-app-loading';
/* import {useFonts,Inter_600SemiBold} from '@expo-google-fonts/inter'; 
 */



function customDrawer(props){

  /*   let [fontsLoaded] =useFonts({
        Inter_600SemiBold,
    }); */
    
   /*  if (!fontsLoaded){
        return <AppLoading/>;
    } */


    return(
        
             
        <SafeAreaView style={styles.SafeArea}>
            <View style={styles.ViewHeader}>
                <Image source={linhaImg} style={styles.Image} />
                <Image source={logodrawer} style={styles.logodrawer} />
            </View>
            <DrawerContentScrollView {...props} > 
            
            <DrawerItemList {...props} />
             
        </DrawerContentScrollView>
        </SafeAreaView>

    );
}

export default customDrawer;