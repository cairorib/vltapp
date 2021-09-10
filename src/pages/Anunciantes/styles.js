import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container:{
        flex:1,
        
    }, 
    headerImg:{
        height:200,
        width:'100%', 
        
    },  
   
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:300,
        marginTop:-30,
        marginBottom:-80,
    },

    logo:{
        width:'100%',
        height:'80%',
    },  

    listaMenuHeader:{
        backgroundColor:'#339ac8', 
        paddingBottom:10,
        
    },

    itemDaListaMenuHeader:{
        height:100,
        width:220,
        borderRadius:10,
        margin:10,
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
        height:47,
        width:'100%',
        
        //marginRight:10,
         
    },  
    itemDaLista:{
       
        borderRadius:8,
       // padding:5,
        backgroundColor:'#D9D9D9',
        margin:10,
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
    listaMsg:{
        alignContent:'center',
        height:50,
        backgroundColor:'blue'
    }
   
});