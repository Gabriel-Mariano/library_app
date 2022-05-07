import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { COLORS } from '../themes/colors';
import { useAuth } from '../contexts/auth';

import AuthRoutes from './unauthenticated';
import AppRoutes from './authenticated';

const Routes: React.FC = () =>{
    const { signed, loading } = useAuth();
    console.log(signed)
    if(loading){
        return (
            <View 
                style={{ 
                    flex:1, 
                    justifyContent:'flex-end', 
                    alignItems:'center', 
                    paddingVertical:40 
                }}
            >
                <ActivityIndicator size="large" color={COLORS.primary}/> 
            </View>
            
        );
    }
    
    const route = signed ? <AppRoutes/> : <AuthRoutes/>
    
    return route;
     
}

export default Routes;