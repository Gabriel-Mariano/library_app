import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:15
    },
    searchWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',

        height:48,
        marginBottom:20
    },
    buttonFilter:{
        width:'15%',
        height:48,
        
        justifyContent:'center',
        alignItems:'center',
        
        borderRadius:6,
    },
    inputSearch:{
        width:'80%',
        height:48
    }
});

export { styles }