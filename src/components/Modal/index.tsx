import React from 'react';
import { View, Pressable, Text, FlatList } from 'react-native';
import Modal from 'react-native-modal';

import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './styles';
import { Badge } from '../Badge';
import { ButtonComponent } from '../Button';
import { ModalProps } from './index.d';

const ModalComponent:React.FC<ModalProps> = props => {
    const { isVisible, setModalIsVisible } = props;
    return (
        <Modal
            isVisible={isVisible}
        >
            <View style={styles.container}>
                <View style={styles.header}>
                    <View/>
                    <View>
                        <Pressable style={styles.buttonSignOut} onPress={()=> setModalIsVisible(!isVisible) }>
                            <Ionicons name='close-outline' size={16}/> 
                        </Pressable>
                    </View>
                </View>
                <View style={styles.body}>
                    <Text style={styles.title}>Selecione a categoria</Text>
                    <Badge title='teste'/>
                </View>
                <ButtonComponent title='Filtrar' style={styles.button}/>
            </View>
            
        </Modal>
    )
}

export { ModalComponent };