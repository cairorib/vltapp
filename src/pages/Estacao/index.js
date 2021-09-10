import React,{useEffect,useState} from 'react';
import {View, Image, Text,TouchableOpacity, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import axios from 'axios';
import {AdMobBanner } from 'expo-ads-admob';
import backBtn from '../../assets/backBtn.png';
import linhaImg from '../../assets/station2.png'; 

 
export default function Estacao(){

    const navigation = useNavigation();

    const route= useRoute();

    const [estacao,setEstacao]=useState([]);

    const info= route.params.sentido;

    const linha = info.linha;
    const sentido = info.sentido;
 

    async function buscaEstacoesDaLinha(){
       
        try {const response= await axios.get(`http://vltapp.tech/index.php/Api/verEstacaoLinha/${linha}/${sentido}`);
         
        setEstacao(response.data['dados']);
          /* console.log(response.data); */
         
        } catch (error){
            console.log(error);
          alert('Verifique sua conexao com a internet') 
        }
 
    }

    function navigationBack(){
        navigation.goBack();
    }
     
    function navigateToHorario(estacao){
       
        navigation.navigate('Horario',{estacao});
    }

    useEffect(()=>{
        buscaEstacoesDaLinha();
    },[]);
 
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
                    <Text style={styles.textHeader}>ESTAÇÃO</Text>
                </View>

            
                <FlatList 
                    data={estacao}
                    keyExtractor={estacao=>String(estacao.estacao)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item:estacao})=>(
                    
                        <View style={styles.listaLinhas}>
                            <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={()=>navigateToHorario(estacao)}
                            >
                            
                                <View style={styles.itemDaLista}>
                                     <Image source={linhaImg} style={styles.linhaImg}/>
                              
                                     <Text style={styles.itemName}>{estacao.estacao.replace(/_/g," ")}</Text>
                                    
                                    
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