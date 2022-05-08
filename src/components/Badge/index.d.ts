import { PressableProps } from "react-native";

interface IBadgeProps extends PressableProps{
    title:number;
    onPress:()=> void;
    isActive:boolean;
}

export { IBadgeProps };