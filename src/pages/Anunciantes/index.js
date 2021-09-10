import React,{useEffect, useState} from 'react';
import {View, Image,Text,TouchableOpacity, FlatList, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import {AdMobBanner } from 'expo-ads-admob';
import linhaImg from '../../assets/youtube.png';
import HeaderImg from '../../assets/inspiration.png';
import axios from 'axios';
import styles from './styles';
 
  
export default function Anunciantes(){

    const navigation = useNavigation();

    const [anuncio,setAnuncio]= route.params.categoria;

    const info = route.params.categoria;
        
         const id= info;
         
    const route= useRoute();

    const [msg,setMsg]= useState([]);
 
   
    async function loadAnuncio(){
        const info = route.params.categoria;
        
         const id= info;
 
            const response= await  axios.get(`http://192.168.0.6/sistemavlt/index.php/Api/buscarAnucioCategoria/${id}/`);
            setAnuncio(response.data['dados']);
            console.log(anuncio);
       
    
    }

    
    async function buscaEstacoesDaLinha(){
       
        try {const response= await axios.get(`http://vltapp.tech/index.php/Api/verEstacaoLinha/${linha}/${sentido}`);
         
        setEstacao(response.data['dados']);
          /* console.log(response.data); */
         
        } catch (error){
            console.log(error);
          alert('Verifique sua conexao com a internet') 
        }
 
    }
   /*  async function loadAnuncio(){
        const response= await axios.get('http://192.168.0.6/sistemavlt/index.php/Api/buscarAnucioCategoria/1/');
        setAnuncio(response.data['dados']);
        console.log(msg);
    
    }
 */
   
    useEffect(()=>{
        
        loadAnuncio();
      
       
    },[]);

   

    return(
        <View style={styles.container}>
            <View style={styles.textHeader}>
            <Image source={HeaderImg} style={styles.headerImg}/>
            </View>
          {/*   <View><Text>{anuncio.categoria}</Text></View> */}
          
                <FlatList 
                    data={anuncio}
                    keyExtractor={anuncio=>String(anuncio.categoria)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item:anuncio})=>(
                    
                        <View style={styles.listaMsg}>
                             
                             
                                <View style={styles.itemDaLista}>  
                                    <Image source={{uri:`${anuncio.image}`}} style={styles.linhaImg}/>
                                    <Text>{anuncio.categoria}asdasd</Text>
                                        
                                </View>
                            
                           
                            
                        </View>
                    )}
                 
                />

                
          
           
          
               

        </View>
    );
}