import React, { useCallback, useEffect, useState } from 'react';
import { View, Alert, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderComponent } from '../../../components/Header';

import { styles } from './styles';

import Ionicons from '@expo/vector-icons/Ionicons';
import iconFilter from '../../../assets/iconFilter.png';
import listBooks from '../../../services/books';
import { ModalComponent } from '../../../components/Modal';
import Modal from 'react-native-modal';

export const DetailsScreen = () => {
    

    return (
        <SafeAreaView style={styles.container}>
            
            <HeaderComponent />
            
        </SafeAreaView>
    )
}
