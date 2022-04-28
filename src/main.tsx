import React from 'react';

import { AuthProvider } from './contexts/auth';
import { SignInScreen } from './screens/auth/SingIn';

const Main = () => {
    return (
        <AuthProvider>
            <SignInScreen/>
        </AuthProvider>
    )
}

export default Main;