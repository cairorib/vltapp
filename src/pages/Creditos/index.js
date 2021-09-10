
import React,{useEffect, useState} from 'react';
import {View, Image,Text,TouchableOpacity, FlatList, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import {AdMobBanner } from 'expo-ads-admob';
import likeImg from '../../assets/like.png';
import HeaderImg from '../../assets/thanks.png';
import axios from 'axios';
import styles from './styles';
  
export default function Reflexao(){

    const navigation = useNavigation();

    const [msg,setMsg]= useState([]);
 
    async function loadMensagem(){
        const response= await axios.get('http://vltapp.tech/index.php/Api/buscarCreditos');
        setMsg(response.data['dados']);
      /*   console.log(msg); */
    
    }

    useEffect(()=>{
        loadMensagem();
    },[])

    return(
        <View style={styles.container}>
             <View >
                <AdMobBanner
                bannerSize="fullBanner"
                adUnitID="ca-app-pub-6660984130044244/8104692206"  
                setTestDeviceIDAsync
                servePersonalizedAds  
                onDidFailToReceiveAdWithError={ (err)=>  console.log} />
            </View>

            <View style={styles.textHeader}>
            <Image source={HeaderImg} style={styles.headerImg}/>
            </View>
            
                <FlatList 
                    data={msg}
                    keyExtractor={msg=>String(msg.id)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item:msg})=>(
                    
                        <View style={styles.listaMsg}>
                             
                                <View style={styles.itemDaLista}>  
                                    <Image source={likeImg} style={styles.likeImg}/>
                                    
                                       
                                        <TouchableOpacity
                                                style={styles.detailsButton}
                                                onPress={()=> Linking.openURL(msg.url) }
                                        >
                                           <Text style={styles.itemName}>{`\n${msg.description}`}  </Text>
                                            
                                        </TouchableOpacity>
                                   
                                </View>
                             
                        </View>
                    )}
                 
                />
           
        </View>
    );
}