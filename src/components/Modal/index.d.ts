import { Dispatch } from "react";
import { IBooksProps } from '../../@types/books';

interface ModalProps { 
    isVisible:boolean,
    setModalIsVisible:React.Dispatch<React.SetStateAction<boolean>>;
    filteredData?:IBooksProps[];
    setFilteredData:React.Dispatch<React.SetStateAction<IBooksProps[]>>;
}

export { ModalProps };