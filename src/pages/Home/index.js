import React,{useEffect, useState} from 'react';
import {View, Image, Text,TouchableOpacity, FlatList,StatusBar, ImageBackground, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HeaderImg from '../../assets/metroPessoas.png';
import linhaImg from '../../assets/novotrem.png';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import axios from 'axios';
import AppLoading   from 'expo-app-loading';
import {useFonts,Inter_400Regular} from '@expo-google-fonts/inter';  
import {Video} from 'expo-av';

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
        const response= await axios.get('http://vltapp.tech/index.php/Api/linha');
        setInfo(response.data['dados']);
      /*   console.log(info); */
    
    }

    async function buscaTickets(){
        try {const response= await axios.get(`http://192.168.0.6/sistemavlt/index.php/Api/buscartickets`);         
        setTicket(response.data['dados']);
        /*   console.log(response.data); */
        } catch (error){
            console.log(error);
          alert('Verifique sua conexao com a internet') 
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
            
            <Video
                source={{ uri:'https://media.istockphoto.com/videos/woman-looking-out-of-the-window-on-the-train-near-matterhorn-video-id1130530053' }}
                style={styles.backgroundVideo}
                rate={1.0}
                volume={0.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                isLooping
                resizeMode='cover'
                
                />
              
                
               
           
            <ImageBackground source={{}} style={{}}>
            <TouchableOpacity
                onPress={()=>navigation.openDrawer()}
                >
                <Feather  name='menu' size={40} color='#FFF' style={{marginBottom:'400%'}} />
                </TouchableOpacity>
                
                </ImageBackground>
            </View>

            <View style={{height:'20%'}}>
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
                            onPress={()=> Linking.openURL(`${ticket.url_social}`)}
                            >
                            
                                <View style={styles.itemDaListaMenuHeader}>
                                <Image source={{uri:`${ticket.url_imagem}`}} style={styles.banner}></Image>
                                   {/*  <Text style={styles.itemTextMoeda}>
                                        <Text style={styles.itemTextPreco}>{ticket.info}</Text>
                                        
                                    </Text> */}
                                   {/*  <Text style={styles.itemTextMoeda}>
                                        <Text style={styles.itemTextPreco}>{ticket.info}</Text>
                                        
                                    </Text>
                                    <Text style={styles.itemHeaderSubTile}>
                                        <Text style={styles.itemName}> {ticket.url_imagem}</Text>
                                    </Text>
                                    <Text style={styles.itemHeaderSubTile}>
                                        <Text style={styles.itemName}> {ticket.url_social}</Text>
                                    </Text> */}
                                    
                                </View>
                            
                            </TouchableOpacity>
                            
                        </View>
                    )}
                 
                />
        </View>
           
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