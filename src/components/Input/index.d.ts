import { TextInputProps } from "react-native";

interface ITextInputProps extends TextInputProps{
    label:string;
    rightElement?:React.Node
}

export { ITextInputProps }