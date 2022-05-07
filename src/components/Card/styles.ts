import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes/colors';

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:160,

        flexDirection:'row',
        alignItems:'center',

        backgroundColor:COLORS.white,
        padding:15,
        marginVertical:10,
        borderRadius:4,

        elevation:1
    },
    rightContent:{
        justifyContent:'space-between',
    },
    title:{
        fontFamily:'Heebo_700Bold',
        fontSize:14,
        fontWeight:'bold'
    },
    subtitle:{
        color:COLORS.subtitle,
        fontFamily:'Heebo_400Regular',
        fontSize:12,
        marginBottom:20,
    },
    text:{
        fontFamily:'Heebo_400Regular',
        fontSize:12,
        color:COLORS.placeholder
    },
    image:{
        width:81,
        height:122,
        marginRight:10
    }
})

export { styles };