import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../../screens/authenticated/HomeScreen';
import { StackAppRoutesParams } from './index.d';

const { Navigator, Screen} = createNativeStackNavigator<StackAppRoutesParams>();

const AppRoutes = () => {
    return (
        <Navigator screenOptions={{ 
            headerShown:false
        }}>
            <Screen name="Home" component={HomeScreen} />
        </Navigator>
    );
}

export default AppRoutes;