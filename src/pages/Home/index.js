import React,{useEffect, useState} from 'react';
import {View, Image, Text,TouchableOpacity, FlatList,StatusBar, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HeaderImg from '../../assets/metroPessoas.png';
import linhaImg from '../../assets/underground.png';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import axios from 'axios';
import AppLoading   from 'expo-app-loading';
import {useFonts,Inter_400Regular} from '@expo-google-fonts/inter';  

export default function Home(){

 /*    let [fontsLoaded] =useFonts({
        Inter_400Regular,
    });
    
    if (!fontsLoaded){
        return <AppLoading/>;
    } */

    const navigation = useNavigation();

    const [info,setInfo]=useState([]);

    const [ticket,setTicket]=useState([]);
  
    async function navigateToSentido(info){
       
         navigation.navigate('Sentido',{info});
    }
 
    async function loadInfo(){
        const response= await axios.get('http://192.168.0.6/vlt/index.php/Api/linha');
        setInfo(response.data['dados']);
      /*   console.log(info); */
    
    }

    async function buscaTickets(){
        try {const response= await axios.get(`http://192.168.0.6/vlt/index.php/Api/buscartickets`);         
        setTicket(response.data['dados']);
         /*  console.log(response.data); */
        } catch (error){
            console.log(error);
          alert('verifique conexao com o internet') 
        }
    }

    useEffect(()=>{
        loadInfo();
        buscaTickets();
    },[]);

    return(
        <View style={styles.container}>
            
             <StatusBar hidden={true} />
            
            <View style={styles.header}>
            <ImageBackground source={HeaderImg} style={styles.logo}>
            <TouchableOpacity
                onPress={()=>navigation.openDrawer()}
                >
                <Feather  name='menu' size={40} color='#FFF' />
                </TouchableOpacity>
                
                </ImageBackground>
            </View>

            <FlatList 
            
                    data={ticket}
                    horizontal={true}
                    keyExtractor={ticket=>String(ticket.id)}
                    showsHorizontalScrollIndicator={false}
                    /* pagingEnabled */
                    renderItem={({item:ticket})=>(
                    
                        <View style={styles.listaMenuHeader}>
                             
                            <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={()=>{} }
                            >
                            
                                <View style={styles.itemDaListaMenuHeader}>
                                
                                    <Text style={styles.itemTextMoeda}>
                                        R$:  <Text style={styles.itemTextPreco}>{ticket.precoInt}</Text>
                                        <Text style={styles.itemPrecoSubtitle}>(Inteira)</Text>
                                    </Text>
                                    <Text style={styles.itemTextMoeda}>
                                        R$:  <Text style={styles.itemTextPreco}>{ticket.precoMei}</Text>
                                        <Text style={styles.itemPrecoSubtitle}>(Meia)</Text>
                                    </Text>
                                    <Text style={styles.itemHeaderSubTile}>
                                        Local<Text style={styles.itemName}> {ticket.cidade}</Text>
                                    </Text>
                                    
                                </View>
                            
                            </TouchableOpacity>
                            
                        </View>
                    )}
                 
                />
            
                <FlatList 
                    data={info}
                    keyExtractor={info=>String(info.id)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item:info})=>(
                    
                        <View style={styles.listaLinhas}>
                            <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={()=>navigateToSentido(info)}
                            >
                            
                                <View style={styles.itemDaLista}>
                                    
                                <Image source={linhaImg} style={styles.linhaImg}/>
                                    <Text style={styles.itemName}>{`Linha: ${info.nome}\n${info.cidade}`} </Text>
                                     
                                </View>
                            
                            </TouchableOpacity>
                        </View>
                    )}
                 
                />
                 
        </View>
    );
}