import React,{useEffect, useState} from 'react';
import {View, Text,TouchableOpacity, FlatList, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';
import axios from 'axios';
import {AdMobBanner } from 'expo-ads-admob';
import backBtn from '../../assets/backBtn.png';
import linhaImg from '../../assets/directions.png';



export default function Sentido(){

    const navigation = useNavigation();

    const route= useRoute();

    const [sentido,setSentido]= useState(); 
 
    const info= route.params.info;
    /* console.log(info); */
 
    let linha= info.nome;
   /*  console.log(name); */

    function navigationBack(){ 
        navigation.goBack();
    }

    function navigateToEstacao(sentido){
       /*  console.log(sentido); */
        navigation.navigate('Estacao',{sentido});
    }

    
    async function sentidosLinha(){
       
        try {const response= await axios.get(`http://vltapp.tech/index.php/Api/verSentidoLinha/${linha}`);
           
        setSentido(response.data['dados']);
        /*   console.log(sentido); */
         
        } catch (error){
            console.log(error);
          alert('Verifique sua conexao com a internet') 
        }
 
    }
 

    useEffect(()=>{
        sentidosLinha();
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

             

            <View style={styles.listaLinhas}>
                <View style={styles.headerView}>   
                    <Image source={linhaImg} style={styles.linhaImg}/>
                    <Text style={styles.textHeader}>SENTIDO</Text>
                </View>
            
                        <FlatList 
                    data={sentido}
                    keyExtractor={sentido=>String(sentido.sentido)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item:sentido})=>(
                    
                        <View style={styles.listaLinhas}>
                            <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={()=>navigateToEstacao(sentido)}
                            >
                            
                                <View style={styles.itemDaLista}>
                                <Image source={linhaImg} style={styles.linhaImg}/>
                                    
                                       <Text style={styles.itemName}>{`${sentido.sentido.replace(/_/g," ")}\n${sentido.direcao.replace(/_/g,"  ")}`}</Text>
                                    
                                 </View>
                            
                            </TouchableOpacity>
                        </View>
                    )}
                 
                />

                    <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={navigationBack}
                            >
                                <View style={styles.btnVoltar}>
                                       <Image source={backBtn } style={styles.btnBack} />   
                                </View>
                            
                    </TouchableOpacity>

                        </View>
               

        </View>
    );
}