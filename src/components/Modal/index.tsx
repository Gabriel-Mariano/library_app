import React from 'react';
import { Modal, View, Pressable } from 'react-native';

import Octicons from '@expo/vector-icons/FontAwesome5';
import { styles } from './styles';

const ModalComponent = props => {
    return (
        <Modal
            visible={true}
        >
            <View style={styles.container}>
                <View/>
                <View>
                <Pressable style={styles.buttonSignOut}>
                    <Octicons name='sign-out-alt' size={16}/> 
                </Pressable>
                </View>
            </View>
            <View>

            </View>
            <View>
            </View>
        </Modal>
    )
}

export { ModalComponent };