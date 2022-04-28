import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes/colors';

export const styles = StyleSheet.create({
    button:{
        width:85,
        height:36,
        borderRadius:44,
        backgroundColor:COLORS.white,

        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontFamily:'Heebo_600SemiBold',
        color:COLORS.primary,
        fontSize:16,
    }
});
