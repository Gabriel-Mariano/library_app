import React, { useCallback, useEffect, useState } from 'react';
import { View, Alert, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderComponent } from '../../../components/Header';
import { InputSearch } from '../../../components/InputSearch';
import { IBooksProps } from '../../../@types/books';
import { CardComponent } from '../../../components/Card';
import { ModalComponent } from '../../../components/Modal';
import { styles } from './styles';

import Ionicons from '@expo/vector-icons/Ionicons';
import iconFilter from '../../../assets/iconFilter.png';
import listBooks from '../../../services/books';


export const HomeScreen = () => {
    const [search, setSearch] = useState('');
    const [books, setBooks] = useState<IBooksProps[]>([]);
    const [filteredData, setFilteredData] = useState<IBooksProps[]>([]);
    const [modalIsVisible, setModalIsVisible] = useState(false);

    useEffect(()=> {
        handleListBooks();
    },[]);

    useEffect(()=> {
        bookSearch(search)
    },[search])

    const handleListBooks = useCallback(async () => {
        const res = await listBooks();
        
        return res.success
            ? successResponse(res.data)
            : failedResponse(res.data)
    },[])

    const successResponse = (data:any) => {
        setBooks(data.data);
        setFilteredData(data.data)
    }

    const failedResponse = (res:string) => {
        return Alert.alert(res || 'Infelizmente, algo deu errado.');
    }

    const bookSearch = useCallback((text:string)=> {
        if(text){
            const filterProducts = books.filter((product)=>{
                const item = product.title?.toUpperCase();
                const textUpperCase = text.toUpperCase();
    
                return item!.indexOf(textUpperCase) > -1;
            });
            setFilteredData(filterProducts);
            setSearch(text); 
        }else{
            setFilteredData(books);
            setSearch(text);
        }
    },[search]);

    const handleFilter = () => {
       
    }

    const renderModal = () => {
        return modalIsVisible
            ? <ModalComponent 
                isVisible={modalIsVisible} 
                setModalIsVisible={setModalIsVisible} 
                filteredData={filteredData}
                setFilteredData={setFilteredData}
               />
            : null
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderModal()}
            <HeaderComponent />
            <View style={styles.searchWrapper}>
                <InputSearch 
                    value={search}
                    onChangeText={(text)=> setSearch(text)}
                    placeholder='Procure um livro'
                    rightContent={()=> <Ionicons name="search" size={18}/>}
                    style={styles.inputSearch}
                />
                <TouchableOpacity 
                        style={styles.buttonFilter}
                        onPress={()=> setModalIsVisible(true)}
                    >
                        <Image source={iconFilter}  />
                </TouchableOpacity>
            </View>
            <FlatList
                data={filteredData}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item })=> {
                    return (
                         <CardComponent 
                            title={item.title}
                            author={item.authors[0]}
                            imageUrl={item?.imageUrl}
                            pages={item.pageCount}
                            published={item.published}
                            publisher={item.publisher}
                            
                        /> 
                    )
                }}
            />
            
        </SafeAreaView>
    )
}
