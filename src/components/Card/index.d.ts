import { ImageProps } from "react-native";

interface ICardProps {
    title:string;
    author:string;
    pages:number;
    published:number;
    imageUrl?:string;
    publisher:string;
}

export { ICardProps };