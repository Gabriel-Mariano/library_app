import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../../screens/authenticated/HomeScreen';
import { StackAppRoutesParams } from './index.d';
import { DetailsScreen } from '../../screens/authenticated/DetailsScreen';

const { Navigator, Screen} = createNativeStackNavigator<StackAppRoutesParams>();

const AppRoutes = () => {
    return (
        <Navigator screenOptions={{ 
            headerShown:false
        }}>
            <Screen name="Home" component={HomeScreen} />
            <Screen name="Details" component={DetailsScreen} />
        </Navigator>
    );
}

export default AppRoutes;