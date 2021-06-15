import React,{useEffect, useState} from 'react';
import {View, Image,Text,TouchableOpacity, FlatList, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import {AdMobBanner } from 'expo-ads-admob';
import linhaImg from '../../assets/youtube.png';
import HeaderImg from '../../assets/policy.png';
import axios from 'axios';
import styles from './styles';
  
export default function Reflexao(){

    const navigation = useNavigation();

    const [msg,setMsg]= useState([]);
 
    async function loadMensagem(){
        const response= await axios.get('http://192.168.0.6/vlt/index.php/Api/buscarPolitica');
        setMsg(response.data['dados']);
        console.log(msg);
    
    }

    useEffect(()=>{
        loadMensagem();
    },[])

    return(
        <View style={styles.container}>
            <View style={styles.textHeader}>
            <Image source={HeaderImg} style={styles.headerImg}/>
            </View>

                <TouchableOpacity
                onPress={()=>Linking.openURL(msg.url)}
                >
                <View style={styles.btnUrl}>
                    <Text style={styles.textUrl}>{`POLÍTICA DE PRIVACIDADE`}</Text>
                </View>
                </TouchableOpacity>
  
        </View>
    );
}