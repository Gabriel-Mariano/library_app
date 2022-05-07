import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { styles } from './styles';
import { ICardProps } from './index.d';

import Book from '../../assets/book.png';
import PlaceholderImage from '../../assets/image_placeholder.jpeg';

const CardComponent:React.FC<ICardProps> = props => {
    const { 
        title, 
        author, 
        pages,
        published,
        publisher,
        imageUrl,
        ...rest 
    } = props;

    console.log(imageUrl)
    return ( 
        <Pressable style={styles.container} {...rest}>
            <View>
                <Image 
                    source={{ uri:imageUrl }}  
                    style={styles.image}
                    defaultSource={PlaceholderImage}
                />
            </View>
            <View style={styles.rightContent}>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{author}</Text>
                </View>
                <View >
                    <Text style={styles.text}>{pages} páginas</Text>
                    <Text style={styles.text}>Editora {publisher}</Text>
                    <Text style={styles.text}>Publicado em {published}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export { CardComponent };