import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container:{
        flex:1,
        
 
    }, 
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },

    headerText:{
        fontSize:20,
        color:'#737380',
    },
    title:{
        color:'blue',
    },
    itemDaLista:{
        padding:20,
        borderRadius:8,
        margin:10,
        backgroundColor:'#FFF',
        flexDirection:'row',
        alignItems:'center',
    },

    itemTitle:{
        fontSize:10,
        fontStyle:'italic',
        fontWeight:'bold',
    },
    itemName:{
        color:'blue',
    },
    btnVoltar:{
        height:50,
        width:200,
        backgroundColor:'#5973FF',
        alignItems:'center',
       marginLeft:"22%",
       marginTop:'10%',
       borderRadius:5,
    },
    btnBack:{
        height:50,
        width:50,
        
    },

    linhaImg:{
        height:40,
        width:40, 
        marginRight:20,
         
    },  

    headerView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        paddingLeft:20,
        paddingRight:40,
        backgroundColor:'#5973FF',
    },
    textHeader:{
        fontWeight:'bold',
        fontSize:20,
        color:'#FFF',
        
    }
});