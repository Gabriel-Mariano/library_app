import React, { Dispatch } from 'react';
import { IBooksProps } from '../../@types/books';

interface IBooksContextProps {
    booksFiltered:IBooksProps[];
    setBooksFiltered:React.Dispatch<React.SetStateAction<IBooksProps[]>>;
}

export { IBooksContextProps };