import { ImageProps, PressableProps } from "react-native";

interface ICardProps extends PressableProps{
    title:string;
    author:string;
    pages:number;
    published:number;
    imageUrl?:string;
    publisher:string;
    
}

export { ICardProps };