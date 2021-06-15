import React, {useState, useEffect} from 'react';
import {View, Image, Text,TouchableOpacity, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import axios from 'axios';
import {AdMobBanner } from 'expo-ads-admob';
import backBtn from '../../assets/backBtn.png';

import linhaImg from '../../assets/train.png';

 
export default function Horario(){

    const navigation = useNavigation();

    const route = useRoute();

    const [horario, setHorario]= useState([]);

    const info = route.params.estacao;

    let linha = info.linha;
    let sentido = info.sentido;
    let estacao = info.estacao;
     
  function navigationBack(){
    navigation.goBack();
}

    async function buscaHorariosDeEstacao(){

        try{    const response =  await axios.get(`http://192.168.0.6/vlt/index.php/Api/buscaHorarioEstacao/${linha}/${sentido}/${estacao}`); 

            setHorario(response.data['dados']);
         /*    console.log(response.data); */

        }catch(error){
            console.log(error);
            alert('erro de conexão');
        }
    }

    function navigateToEstacao(){
        navigation.navigate('Estacao');
    }

    useEffect(()=>{
        buscaHorariosDeEstacao();
    },[])

    return(
        <View style={styles.container}>
             <View >
                <AdMobBanner
                bannerSize="fullBanner"
                adUnitID="ca-app-pub-6660984130044244/7058801940"  
                setTestDeviceIDAsync
                servePersonalizedAds  
                onDidFailToReceiveAdWithError={ (err)=>  console.log} />
            </View>
            
            <View style={styles.headerView}>
                    
                    <Image source={linhaImg} style={styles.linhaImg}/>
                   
                    <Text style={styles.textHeader}>HORÁRIOS</Text>
                </View>

            
                <FlatList 
                    data={horario}
                    keyExtractor={horario=>String(horario.horario)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item:horario})=>(
                    
                        <View style={styles.listaLinhas}>
                            <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={()=>{}}
                            >
                            
                                <View style={styles.itemDaLista}>
                                <View style={styles.viewImg}>  
                                  <Image source={linhaImg} style={styles.linhaImg}/>
                                </View>
                                       <Text style={styles.itemName}>
                                     
                                        {`${horario.horario}`}  
                                            </Text>
                                    
                                    
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
    );
}