import React from 'react';
import { Pressable, Text } from 'react-native';
import { IBadgeProps } from './index.d';
import { styles } from './styles';

const Badge:React.FC <IBadgeProps> = props => {
    const { title } = props;

    return (
        <Pressable style={styles.container}>
            <Text>{title}</Text>
        </Pressable>
    )
}

export { Badge };