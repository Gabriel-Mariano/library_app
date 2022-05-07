import { Dispatch } from "react";

interface ModalProps { 
    isVisible:boolean,
    setModalIsVisible:React.Dispatch<React.SetStateAction<boolean>>;
}

export { ModalProps };