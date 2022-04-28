import React, { useRef } from 'react';
import { TextInput, Text, View, Pressable } from 'react-native';
import { ITextInputProps } from './index.d';
import { styles } from './styles';

const InputComponent:React.FC<ITextInputProps> = props => {
    const { 
        label,
        rightElement,
    } = props;

    const input = useRef(null)

    const handleFocus = () => {
        input.current.focus();
    }

    const renderElementRight = () => {
        return rightElement 
            ? rightElement
            : null
    }

    return (
        <Pressable style={styles.containerInput} 
            onPress={handleFocus}
        >
            <View style={{
                width: rightElement ? '70%' : '100%'
            }}>
                <Text style={styles.label}>
                    {label}
                </Text>
                <TextInput
                    style={styles.input}
                    ref={input}
                    {...props}
                />
            </View>
            {renderElementRight()}
        </Pressable>
    )
}

export { InputComponent };