import React from 'react';
import { Pressable, Text } from 'react-native';
import { COLORS } from '../../themes/colors';
import { IBadgeProps } from './index.d';
import { styles } from './styles';

const Badge:React.FC <IBadgeProps> = props => {
    const { title, onPress, isActive } = props;
    

    return (
        <Pressable 
            style={[
                styles.container,
                {
                    backgroundColor: isActive ? COLORS.black : COLORS.white,
                }
            ]} 
            onPress={onPress} 
        >
            <Text style={[
                {
                    color: isActive ? COLORS.white : COLORS.black,
                }
            ]}>
                {title}
            </Text>
        </Pressable>
    )
}

export { Badge };