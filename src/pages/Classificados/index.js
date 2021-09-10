import React,{useEffect, useState} from 'react';
import {View, Image,Text,TouchableOpacity, FlatList, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import {AdMobBanner } from 'expo-ads-admob';
import linhaImg from '../../assets/youtube.png';
import HeaderImg from '../../assets/inspiration.png';
import axios from 'axios';
import styles from './styles';
 
  
export default function Classificados(){

    const navigation = useNavigation();

    const [msg,setMsg]= useState([]);

    const[categoria, setCategoria] = useState();

    function navigateToAnunciante(msg){
        let categoria= msg['categoria'];
     /*    console.log(categoria);
 */
        navigation.navigate('Anunciantes',{categoria});
    }     
  
 
    async function loadMensagem(){
        const response= await axios.get('http://192.168.0.6/sistemavlt/index.php/Api/buscarCategorias');
        setMsg(response.data['dados']);
      /*   console.log(msg); */
    
    }

    useEffect(()=>{
        loadMensagem();
       
    },[])

    return(
        <View style={styles.container}>
            <View style={styles.textHeader}>
            <Image source={HeaderImg} style={styles.headerImg}/>
            </View>
                <FlatList 
                    data={msg}
                    keyExtractor={msg=>String(msg.categoria)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item:msg})=>(
                    
                        <View style={styles.listaMsg}>
                             
                             <TouchableOpacity
                                                style={styles.detailsButton}
                                                onPress={()=> {navigateToAnunciante(msg)} }
                                        >
                                <View style={styles.itemDaLista}>  
                                    <Image source={{uri:`${msg.image}`}} style={styles.linhaImg}/>
                                    <Text>{msg.categoria}</Text>
                                        
                                </View>
                                </TouchableOpacity>
                            
                           
                            
                        </View>
                    )}
                 
                />

                
          
           
          
               

        </View>
    );
}