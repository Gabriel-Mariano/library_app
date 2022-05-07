import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { styles } from './styles';
import { useAuth } from '../../contexts/auth';

import Octicons from '@expo/vector-icons/FontAwesome5';

const HeaderComponent:React.FC = () => {
    const { signOut } = useAuth();

    return (
        <View style={styles.container}>
            <View>
                <Text>LOGO</Text>
            </View>
            <View>
                <Pressable style={styles.buttonSignOut} onPress={signOut}>
                    <Octicons name='sign-out-alt' size={16}/> 
                </Pressable>
            </View>
        </View>
    )
}

export { HeaderComponent };