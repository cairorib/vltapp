import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container:{
        flex:1,
        
    }, 
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:200,
        //marginTop:-30,
        //marginBottom:-75,
    },

    logo:{
        width:'100%',
        height:'100%',
    }, 
    
    banner:{
        width:'100%',
        height:'100%',
      //  borderRadius:10,
    },  

    listaMenuHeader:{
        backgroundColor:'#FFF', 
       
       width:300,
        
        
    },

    itemDaListaMenuHeader:{
        height:'100%',
        width:'100%',
        borderRadius:10,
         
        marginLeft:5,
        marginRight:5,         
        marginTop:3,
         
        alignItems:'center',
        backgroundColor:'#FFF',
    },

    itemTextMoeda:{
        fontSize:10,
        alignContent:'center',
        color:'#03989e',
      /*   fontFamily:'Inter_400Regular', */
        
    },  
    itemTextPreco:{
        fontSize:20,
        alignContent:'center',
        color:'gray',
           
     /*    fontFamily:'Inter_400Regular',       */
    },  
    itemPrecoSubtitle:{
        fontSize:15,
    /*     fontFamily:'Inter_400Regular', */
    },
    itemName:{
        fontSize:17,
        color:'#004aad',
        
     /*    fontFamily:'Inter_400Regular', */
    },

    itemHeaderSubTile:{
        fontSize:10,
        textAlign:'center',
        alignContent:'center',
        marginTop:2,
        fontSize:15,
    },  
    headerText:{
        fontSize:20,
        color:'#737380',
    },
    title:{
        color:'#004aad',
        
        fontSize:15,
        textAlign:'center',
        fontWeight:'bold'
    },

    linhaImg:{
        height:70,
        width:70,
        
        marginRight:20,
         
    },  
    itemDaLista:{
       
        borderRadius:8,
        padding:5,
        backgroundColor:'#D9D9D9',
        marginTop:10,
        justifyContent:'flex-start',
        flexDirection:'row',
         
    },

    itemTitle:{
        marginTop:10,
        marginLeft:20,
        alignContent:'center',
        fontSize:10,
        fontStyle:'italic',
        fontWeight:'bold',
    },

    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
   
});