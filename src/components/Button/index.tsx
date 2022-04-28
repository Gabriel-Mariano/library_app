import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import { IButtonProps } from './index.d';

const ButtonComponent:React.FC<IButtonProps> = props => {
    const { title } = props;

    return (
        <TouchableOpacity 
            onPress={()=>{}}
            style={styles.button}
            {...props}
        >
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export { ButtonComponent}