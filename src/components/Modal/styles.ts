import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes/colors';

export const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:433,

        paddingVertical:16,
        paddingHorizontal:16,

        backgroundColor:"#FFF"
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'flex-end'
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
    },
    body:{
        marginTop:20
    },
    title:{
        fontFamily:'Heebo_600SemiBold',
        marginBottom:10
    },
    button:{
        alignSelf:'center',
        width:90,
        height:32,

        borderWidth:1,
        borderColor:COLORS.primary,
        borderRadius:44,
        justifyContent:'center',
        alignItems:'center'
    }
});
