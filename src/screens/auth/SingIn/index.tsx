import React, { useState } from 'react';
import { 
    View, 
    ImageBackground, 
    Image, 
    SafeAreaView
} from 'react-native';
import { InputComponent } from '../../../components/Input';
import { ButtonComponent } from '../../../components/Button';
import { useAuth } from '../../../contexts/auth';
import { styles } from './styles';

import Logo from '../../../assets/Logo.png';
import Books from '../../../assets/Title.png'


export const SignInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } = useAuth();

    const handleSignIn = async () => {
        await signIn({ email, password });
    }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground 
                style={styles.containerImage}
                source={require('../../../assets/background.png')}
            >
                <View>
                    <View style={styles.wrapperLogo}>
                        <Image source={Logo} style={styles.image}/>
                        <Image source={Books} style={styles.imageTitle}/>
                    </View>
                    <InputComponent
                        label='Email'
                        value={email}
                        onChangeText={(text)=>setEmail(text)}
                    />
                    <InputComponent
                        label='Senha'
                        value={password}
                        onChangeText={(text)=>setPassword(text)}
                        secureTextEntry
                        rightElement={<ButtonComponent title='Entrar' onPress={handleSignIn}/>}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

