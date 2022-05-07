import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:104,

        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        
    },
    buttonSignOut:{
        width:32,
        height:32,
        borderRadius:32,

        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f8f8f8',
        opacity:20,
        borderWidth:1,
        borderColor: 'rgba(51, 51, 51, 0.2)'
    }
});
