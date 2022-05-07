import { StyleSheet } from "react-native";
import { COLORS } from "../../themes/colors";

export const styles = StyleSheet.create({
    container:{
        width:'100%',
    },
    wrapperInput:{
        width:'100%',
        height:48,

        flexDirection:'row',
         

        borderRadius:6,
        backgroundColor:COLORS.light,
        
        borderWidth:1,
        borderColor:'rgba(51, 51, 51, 0.2)',
        
    },
    label:{
        marginLeft:10,
    },
    leftContent:{
        width:'15%',
        height:48,

        justifyContent:'center',
        alignItems:'center',

        backgroundColor:COLORS.white,

        borderTopLeftRadius:6,
        borderBottomLeftRadius:6
    },
    textInput:{
       paddingHorizontal:8,
    },
    rightContent:{
        width:'15%',
        height:48,

        justifyContent:'center',
        alignItems:'center',

        borderTopRightRadius:6,
        borderBottomRightRadius:6
    },
    errorMessage:{
        color:COLORS.danger
    }
});