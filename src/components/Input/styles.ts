import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes/colors';

export const styles = StyleSheet.create({
    containerInput:{
        width:'100%',
        height:60,

        paddingHorizontal:13,
        paddingVertical:8,
        marginVertical:16,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'rgba(0, 0, 0, 0.32)',
        borderRadius: 4,
        
    },
    label:{
        fontFamily:'Heebo_400Regular',
        color:COLORS.white,
        opacity: 0.5
    },
    input:{
        width:'100%',
        fontFamily:'Heebo_400Regular',
        color:COLORS.white,
    },
    button:{
        width:85,
        height:36,
        borderRadius:44,
        backgroundColor:COLORS.white,

        justifyContent:'center',
        alignItems:'center'
    }
});
