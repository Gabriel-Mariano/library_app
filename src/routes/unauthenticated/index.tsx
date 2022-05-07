import React from 'react';

import { SignInScreen } from '../../screens/auth/SingIn';
import { StackAuthRoutesParams } from './index.d';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator} = createNativeStackNavigator<StackAuthRoutesParams>();

const AuthRoutes = () => {
    return (
        <Navigator initialRouteName='SignIn' screenOptions={{
            headerShown:false
        }}>
            <Screen name="SignIn" component={SignInScreen} />
        </Navigator>
    )
}

export default AuthRoutes;