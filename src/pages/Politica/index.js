import React,{useEffect, useState} from 'react';
import {View, Image,Text,TouchableOpacity, FlatList, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import {AdMobBanner } from 'expo-ads-admob';
import linhaImg from '../../assets/youtube.png';
import HeaderImg from '../../assets/policy.png';
import axios from 'axios';
import styles from './styles';
import * as MailComposer from 'expo-mail-composer';
  
export default function Reflexao(){

    const navigation = useNavigation();

    const [msg,setMsg]= useState([]);

    function sendMail(){
        MailComposer.composeAsync({
            subject:`App VLT Metropolitano`,
            recipients:['charasistemas@gmail.com'],
            body:'',
        })
    }
 
    async function loadMensagem(){
        const response= await axios.get('http://vltapp.tech/index.php/Api/buscarPolitica');
        setMsg(response.data['dados']);
     /*    console.log(msg); */
    
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

                <TouchableOpacity
                onPress={sendMail}
                >
                <View style={styles.btnUrl}>
                    <Text style={styles.textUrl}>{`CONTATO`}</Text>
                </View>
                </TouchableOpacity>
  
        </View>
    );
}