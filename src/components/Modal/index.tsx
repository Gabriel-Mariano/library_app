import React from 'react';
import { View, Pressable, Text, FlatList } from 'react-native';
import Modal from 'react-native-modal';

import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './styles';
import { Badge } from '../Badge';
import { ButtonComponent } from '../Button';
import { ModalProps } from './index.d';
import { useState } from 'react';

const ModalComponent:React.FC<ModalProps> = props => {
    const { 
            isVisible, 
            setModalIsVisible, 
            filteredData, 
            setFilteredData 
    } = props;
    const [published, setPublished] = useState([]);
    const [years, setYears] = useState([
        {
            id:1,
            published:2019,
            isActive:false
        },
        {
            id:2,
            published:2020,
            isActive:false
        }
    ])

    const handlePublished = (item:any) => {
        
        const changeData = years.map((data) => {
            
            return data.id === item.id 
                ? {...data, isActive:!data.isActive }
                : data
        })
        setYears(changeData)
        setPublished([...published, changeData])
        
    }

    const handleFilterData = () => {
        const filtered = filteredData.filter((book) => published.includes(book.published) );
        
        setFilteredData(filtered); 
    }

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
                    <FlatList
                        data={years}
                        renderItem={({ item }) => {
                            return (
                                <Badge 
                                    title={item.published} 
                                    onPress={()=>handlePublished(item)}
                                    isActive={item.isActive}
                                />
                            )
                        }}
                    />
                </View>
                <ButtonComponent 
                    title='Filtrar' 
                    style={styles.button} 
                    onPress={handleFilterData}
                />
            </View>
            
        </Modal>
    )
}

export { ModalComponent };