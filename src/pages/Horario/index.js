import React, {useState, useEffect} from 'react';
import {View, Image, Text,TouchableOpacity, FlatList, Alert, Linking} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import axios from 'axios';
import {AdMobBanner } from 'expo-ads-admob';
import backBtn from '../../assets/backBtn.png';

import linhaImg from '../../assets/tremchegada.png';

 
export default function Horario(){

    const navigation = useNavigation(); 

    const route = useRoute();

    const [horario, setHorario]= useState([]);
    const [endereco, setEndereco]= useState([]);

    const info = route.params.estacao;

    let linha = info.linha;
    let sentido = info.sentido;
    let estacao = info.estacao;
     
  function navigationBack(){
    navigation.goBack();
}

   

    async function buscaHorariosDeEstacao(){

        try{    const response =  await axios.get(`http://192.168.0.6/sistemavlt/index.php/Api/buscaHorarioEstacao/${linha}/${sentido}/${estacao}`); 

            setHorario(response.data['dados']);
          /*   console.log(response.data); */
            setEndereco(response.data['endereco']);
            console.log(response.data);
         
        }catch(error){
            console.log(error);
            alert('Verifique sua conexao com a internet');
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
                adUnitID="ca-app-pub-6660984130044244/8104692206"  
                setTestDeviceIDAsync
                servePersonalizedAds  
                onDidFailToReceiveAdWithError={ (err)=>  console.log} />
            </View>
            
            <View style={styles.headerView}>
                    
                    <Image source={linhaImg} style={styles.linhaImg}/>
                   
                    <Text style={styles.textHeader}>HORÁRIOS DA ESTAÇÃO {`\n${estacao.replace(/_/g," ")}\nSENTIDO ${sentido.replace(/_/g," ")}`} </Text>
                </View>

            
                <FlatList 
                    data={horario}
                    keyExtractor={horario=>String(horario.horario)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item:horario})=>(
                    
                        <View style={styles.listaLinhas}>
                            <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={()=>
                                Alert.alert(
                                    `INFORMAÇÕES:`,
                                    `Estacao:\n${horario.estacao.replace(/_/g," ")}\n\nLinha:\n${horario.linha}\n\nSentido:\n${horario.sentido.replace(/_/g," ")}\n\n\n${endereco[0]['info']}\n\nEndereco:\n${endereco[0]['address']}`,
                                    [
                                      {
                                        text: "Como Chegar",
                                        
                                        onPress: () => {Linking.openURL(`${endereco[0]['url']}`)},
                                        style: "cancel"
                                      },
                                      { text: "OK", onPress: () => console.log("OK Pressed") }
                                    ],
                                    { cancelable: false }
                                  )  
                            
                            }
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