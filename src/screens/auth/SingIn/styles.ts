import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
       flex:1,
       
       justifyContent:'center',
       alignItems:'center'
    },
    containerImage:{
        flex:1,
        width:400,
        paddingHorizontal:20,

        justifyContent:'center',
        resizeMode:'cover'
    },
    wrapperLogo:{
        flexDirection:'row',
        marginBottom:40
    },
    image:{
        width:104,
        height:36,
       
    },
    imageTitle:{
        width:77,
        height:40,
        resizeMode:'contain',
        marginLeft:16,
    }
})
